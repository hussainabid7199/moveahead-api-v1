import { injectable } from 'inversify';
import prisma from '../prisma';
import { CompanyModel, CompanyUpdateModel } from '../validators/company.validator';
import CompanyDto from '../dtos/company.dto';
import { Roles } from '../enums/roles.enum';
import { Prisma } from '../prisma/generated';
import CustomError from '../exceptions/custom-error';

@injectable()
export class CompanyService {
  constructor() {}

  async getAll(q: string, currentUserId: string, selectedCompanyId?: string): Promise<CompanyDto[]> {
    const whereCondition: Prisma.CompanyWhereInput = {
      isActive: true,
    };

    if (selectedCompanyId) {
      whereCondition.id = selectedCompanyId;
    }

    if (q) {
      whereCondition.AND = [{ name: { contains: q } }];
    }

    // If the current user role is SuperAdmin, return all companies
    // If the current user role is Admin or Administrator, return only the company mapped to the user
    const user = await prisma.user.findUnique({
      where: { id: currentUserId },
      select: {
        id: true,
        roles: {
          select: {
            role: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    const userRole: Roles = user?.roles[0].role.name as Roles;
    // Only SuperAdmin can see all companies, Admin and Administrator can see only their mapped company, other roles cannot see any company
    const allowedRoles = [Roles.SUPERADMIN, Roles.ADMINISTRATOR, Roles.ADMIN];
    if (!allowedRoles.includes(userRole)) {
      throw new CustomError('You are not authorized to view companies', 403);
    }

    if (userRole !== Roles.SUPERADMIN) {
      whereCondition.isVerified = true;
    }

    if (userRole === Roles.ADMINISTRATOR) {
      // Check if the administrator is mapped with the company if not mapped then throw error
      const adminCompanyMapping = await prisma.userCompany.findFirst({
        where: {
          userId: currentUserId,
        },
        select: {
          companyId: true,
        },
      });

      if (!adminCompanyMapping) {
        throw new CustomError('You are not authorized to view companies', 403);
      }

      whereCondition.AND = [{ id: adminCompanyMapping.companyId }];
    }

    if (userRole === Roles.ADMIN) {
      // Check if the admin is mapped with the branch and company if not mapped then throw error
      const adminCompanyMapping = await prisma.userCompanyBranch.findMany({
        where: {
          userId: currentUserId,
        },
        select: {
          companyId: true,
        },
      });

      if (!adminCompanyMapping || adminCompanyMapping.length === 0) {
        throw new CustomError('You are not authorized to view companies', 403);
      }

      whereCondition.AND = [{ id: { in: adminCompanyMapping.map((mapping) => mapping.companyId) } }];
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

    if (!company || company.length === 0) {
      throw new CustomError('Company not found', 404);
    }

    const response: CompanyDto[] = company.map((item) => ({
      id: item.id,
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
      throw new CustomError('Company not found', 404);
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

  getCompanyByUserId = async (userId: string): Promise<CompanyDto[]> => {
    const user = await prisma.user.findUnique({
      where: { id: userId, isActive: true },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        displayName: true,
        roles: {
          select: {
            role: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      throw new CustomError('User not found', 404);
    }

    const allowedRoles = [Roles.ADMINISTRATOR, Roles.ADMIN, Roles.DOCTOR, Roles.USER];
    const userRole: Roles = user.roles[0].role.name as Roles;
    const hasAllowedRole = allowedRoles.includes(userRole);

    if (!hasAllowedRole) {
      throw new CustomError('You are not authorized to get company details', 403);
    }

    let company = null;
    if (userRole === Roles.ADMINISTRATOR) {
      company = await prisma.userCompany.findMany({
        where: {
          userId: user.id,
        },
        select: {
          companyId: true,
          userId: true,
        },
      });
    } else {
      company = await prisma.userCompanyBranch.findMany({
        where: {
          userId: user.id,
        },
        select: {
          companyId: true,
          userId: true,
        },
      });
    }

    if (!company || company.length === 0) {
      throw new CustomError('Company not found', 404);
    }

    const companyDetails = await prisma.company.findMany({
      where: { id: { in: company.map((c) => c.companyId) }, isActive: true },
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

    if (!companyDetails || companyDetails.length === 0) {
      throw new CustomError('Company not found', 404);
    }

    const response: CompanyDto[] = companyDetails.map((item) => ({
      id: item.id,
      name: item.name,
      website: item.website || null,
      isVerified: item.isVerified,
      isActive: item.isActive,
      createdAt: item.createdAt,
    }));

    return response;
  };

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
  async userMapping(currentUserId: string, userId: string, companyId: string, branchId?: string): Promise<string> {
    // Verify the user and company
    const isValidUser = await prisma.user.findFirst({
      where: { id: currentUserId, isActive: true },
      select: {
        id: true,
        roles: { select: { role: { select: { id: true, name: true, isActive: true } } } },
      },
    });

    if (!isValidUser) {
      throw new Error('User not found');
    }

    // Get the user role
    const userRole: Roles = isValidUser.roles[0].role.name as Roles;

    if (!userRole) {
      throw new CustomError('Unauthorized user');
    }

    // Check if user exists
    const user = await prisma.user.findFirst({
      where: { id: userId, isActive: true },
      select: { id: true, email: true, phoneNumber: true, roles: { select: { role: { select: { id: true, name: true, isActive: true } } } } },
    });

    if (!user) {
      throw new CustomError('User not found');
    }

    const userRoleForMapping: Roles = user.roles[0].role.name as Roles;

    // Check if company exists
    const company = await prisma.company.findUnique({
      where: { id: companyId },
      select: { id: true, name: true, isActive: true, isVerified: true },
    });

    if (!company) {
      throw new CustomError('Company not found', 404);
    }

    if (!company.isActive) {
      throw new CustomError('Company is not active', 400);
    }

    if (!company.isVerified) {
      throw new CustomError('Company is not verified, please verify company first', 400);
    }

    if (userRole === Roles.SUPERADMIN && userRoleForMapping === Roles.ADMINISTRATOR) {
      // Check if the user is already mapped with the company
      const companyMapping = await prisma.userCompany.findFirst({
        where: { userId: user.id, companyId: companyId },
      });

      if (companyMapping) {
        throw new CustomError(`${user.email} already mapped to company`, 400);
      }

      // Create user company mapping
      const response = await prisma.$transaction(async (tx) => {
        return await tx.userCompany.create({
          data: {
            userId: user.id,
            companyId: companyId,
          },
        });
      });

      if (!response) {
        throw new CustomError(`${user.email} not mapped to company`, 400);
      }

      return `${user.email} mapped to company successfully`;
    }

    const branch = await prisma.branch.findFirst({
      where: { id: branchId, companyId: companyId, isActive: true },
      select: { id: true, name: true, isActive: true },
    });

    if (!branch) {
      throw new CustomError('Branch not found', 404);
    }

    if ((userRole === Roles.SUPERADMIN || userRole === Roles.ADMINISTRATOR) && userRoleForMapping === Roles.ADMIN) {
      if (userRole === Roles.ADMINISTRATOR) {
        // Check if the administrator is mapped with the company if not mapped then throw error
        const adminCompanyMapping = await prisma.userCompany.findFirst({
          where: {
            userId: currentUserId,
            companyId: companyId,
          },
        });

        if (!adminCompanyMapping) {
          throw new CustomError('You are not mapped to this company', 400);
        }
      }

      // Check if the user is already mapped with the company
      const isUserMapped = await prisma.userCompanyBranch.findFirst({
        where: { userId: user.id, companyId: companyId, branchId: branchId },
      });

      if (isUserMapped) {
        throw new CustomError(`${user.email} already mapped to branch`, 400);
      }

      // Create user company mapping
      const response = await prisma.$transaction(async (tx) => {
        return await tx.userCompanyBranch.create({
          data: {
            userId: user.id,
            companyId: companyId,
            branchId: branch?.id || '',
          },
        });
      });

      if (!response) {
        throw new CustomError(`${user.email} not mapped to branch`, 400);
      }

      return `${user.email} mapped to branch as ${Roles.ADMIN.toLocaleLowerCase()} successfully`;
    }

    if (
      (userRole === Roles.SUPERADMIN || userRole === Roles.ADMINISTRATOR || userRole === Roles.ADMIN) &&
      (userRoleForMapping === Roles.DOCTOR || userRoleForMapping === Roles.USER)
    ) {
      if (userRole === Roles.ADMINISTRATOR) {
        // Check if the administrator is mapped with the company if not mapped then throw error
        const adminCompanyMapping = await prisma.userCompany.findFirst({
          where: {
            userId: currentUserId,
            companyId: companyId,
          },
        });

        if (!adminCompanyMapping) {
          throw new CustomError('You are not mapped to this company', 400);
        }
      }

      if (userRole === Roles.ADMIN) {
        // Check if the admin is mapped with the branch and company if not mapped then throw error
        const adminCompanyMapping = await prisma.userCompanyBranch.findFirst({
          where: {
            userId: currentUserId,
            companyId: companyId,
            branchId: branch?.id || '',
          },
        });

        if (!adminCompanyMapping) {
          throw new Error('You are not authorized to create mapping to branch, please contact your administrator for authorization');
        }
      }

      // Check if the user is mapped with the company
      const userCompanyMapping = await prisma.userCompanyBranch.findFirst({
        where: {
          userId: userId,
          companyId: companyId,
          branchId: branchId,
        },
      });

      if (userCompanyMapping) {
        throw new CustomError(`${user.email} already mapped to branch`, 400);
      }

      // Create user company mapping
      const response = await prisma.$transaction(async (tx) => {
        return await tx.userCompanyBranch.create({
          data: {
            userId: userId,
            companyId: companyId,
            branchId: branch?.id || '',
          },
        });
      });

      if (!response) {
        throw new CustomError(`${user.email} not mapped to branch`, 400);
      }

      return `${user.email} mapped to branch successfully`;
    }

    throw new CustomError('Something went wrong while mapping user to company', 400);
  }
}
