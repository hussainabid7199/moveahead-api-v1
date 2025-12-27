import { injectable } from 'inversify';
import prisma from '../prisma';
import { CompanyModel, CompanyUpdateModel } from '../validators/company.validator';
import CompanyDto from '../dtos/company.dto';
import { Roles } from '../enums/roles.enum';
import { Prisma } from '../prisma/generated';

@injectable()
export class CompanyService {
  constructor() {}

  async getAll(q: string): Promise<CompanyDto[]> {
    const whereCondition: Prisma.CompanyWhereInput = {
      isActive: true,
    };

    if (q) {
      whereCondition.AND = [{ name: { contains: q } }];
    }

    const company = await prisma.company.findMany({
      where: whereCondition,
      select: {
        id: true,
        name: true,
        website: true,
        isVerified: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const response: CompanyDto[] = company.map((item) => ({
      name: item.name,
      website: item.website || null,
      isVerified: item.isVerified,
      isActive: item.isActive,
      createdAt: item.createdAt,
    }));

    if (response.length > 0) {
      return response;
    }

    return [];
  }

  async getById(id: string): Promise<CompanyDto> {
    const company = await prisma.company.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        website: true,
        isVerified: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!company) {
      throw new Error('Company not found');
    }

    const response: CompanyDto = {
      name: company.name,
      website: company.website || null,
      isVerified: company.isVerified,
      isActive: company.isActive,
      createdAt: company.createdAt,
    };

    return response;
  }

  async create(model: CompanyModel): Promise<CompanyDto> {
    const company = await prisma.company.create({
      data: {
        name: model.name,
        website: model.website,
      },
    });

    const response: CompanyDto = {
      name: company.name,
      website: company.website || null,
      isVerified: company.isVerified,
      isActive: company.isActive,
      createdAt: company.createdAt,
    };

    return response;
  }

  async update(id: string, model: Partial<CompanyUpdateModel>): Promise<CompanyDto> {
    const companyExist = await prisma.company.findUnique({
      where: { id },
    });

    if (!companyExist) {
      throw new Error('Company not found');
    }

    const company = await prisma.company.update({
      where: { id },
      data: {
        name: model.name ?? companyExist.name,
        website: model.website ?? companyExist.website,
        isVerified: model.isVerified ?? companyExist.isVerified,
        isActive: model.isActive ?? companyExist.isActive,
        updatedAt: new Date(),
      },
    });

    if (!company) {
      throw new Error('Company not found');
    }

    const response: CompanyDto = {
      name: company.name,
      website: company.website || null,
      isVerified: company.isVerified,
      isActive: company.isActive,
      createdAt: company.createdAt,
    };

    return response;
  }

  async companyMapping(currentUserId: string, userId: string, companyId: string): Promise<string> {
    const isAdminExist = await prisma.user.findFirst({
      where: {
        id: currentUserId,
        isActive: true,
      },
    });

    if (!isAdminExist) {
      throw new Error('You are not authorized to map user');
    }

    const userRoles = await prisma.userRole.findFirst({
      where: { userId: isAdminExist.id },
      select: {
        role: { select: { id: true, name: true, isActive: true } },
      },
    });

    const allowedRoles = [Roles.SUPERADMIN, Roles.ADMINISTRATOR];
    if (!allowedRoles.includes(userRoles?.role.name as Roles)) {
      throw new Error('You are not authorized to map user');
    }

    const companyExist = await prisma.company.findUnique({
      where: { id: companyId },
      select: { id: true, name: true, isActive: true, isVerified: true },
    });

    if (!companyExist) {
      throw new Error('Company not found');
    }

    if (!companyExist.isActive) {
      throw new Error('Company is not active');
    }

    if (!companyExist.isVerified) {
      throw new Error('Company is not verified, please verify company first');
    }

    const findUserToMap = await prisma.user.findFirst({
      where: { id: userId, isActive: true },
      select: { id: true, firstName: true, lastName: true, displayName: true, isActive: true },
    });

    if (!findUserToMap) {
      throw new Error('User not found');
    }

    const userRolesToMap = await prisma.userRole.findFirst({
      where: { userId },
      select: {
        role: { select: { id: true, name: true, isActive: true } },
      },
    });

    if (!userRolesToMap) {
      throw new Error('User is not authorized to map company');
    }

    const userAllowedRoles = [Roles.ADMINISTRATOR, Roles.ADMIN];
    if (!userAllowedRoles.includes(userRolesToMap.role.name as Roles)) {
      throw new Error('User is not authorized to map company');
    }

    const findExistingMapping = await prisma.userCompany.findFirst({
      where: { userId, companyId },
    });

    let message: string | null = null;
    if (!findExistingMapping) {
      await prisma.$transaction(async (tx) => {
        await tx.userCompany.create({
          data: {
            userId,
            companyId,
          },
        });
      });

      message = `${
        findUserToMap.displayName ? findUserToMap.displayName : `${findUserToMap.firstName} ${findUserToMap.lastName}`
      } mapped successfully`;
    } else {
      await prisma.$transaction(async (tx) => {
        await tx.userCompany.delete({ where: { userId_companyId: { userId, companyId } } });
      });
      message = `${
        findUserToMap.displayName ? findUserToMap.displayName : `${findUserToMap.firstName} ${findUserToMap.lastName}`
      } unmapped successfully`;
    }

    if (!message || message === null) {
      throw new Error('Some error occurred while mapping user');
    }

    return message;
  }
}
