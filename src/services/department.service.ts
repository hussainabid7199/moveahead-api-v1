import { injectable } from 'inversify';
import DepartmentDto from '../dtos/department.dto';
import { Roles } from '../enums/roles.enum';
import prisma from '../prisma';
import { DepartmentModel, DepartmentUpdateModel } from '../validators/department.validator';
import CustomError from '../exceptions/custom-error';

@injectable()
export class DepartmentService {
  constructor() {}

  async getAllByCompanyId(
    companyId: string,
    currentUserId: string,
    branchId?: string,
    includeChildren: boolean = false,
    search?: string,
    limit: number = 10,
    offset: number = 0
  ): Promise<DepartmentDto[] | { count: number }> {
    const currentUser = await this.validateCurrentUser(currentUserId);
    const userRole = currentUser.roles[0].role.name as Roles;

    await this.validateCompanyExists(companyId);

    // SuperAdmin gets count only
    if (userRole === Roles.SUPERADMIN) {
      const count = await prisma.department.count({
        where: {
          companyId,
          isActive: true,
          branchId: branchId || undefined,
        },
      });
      return { count };
    }

    const where: Record<string, unknown> = {
      companyId,
      isActive: true,
      parentId: null,
      name: search ? { contains: search } : undefined,
      branchId: branchId || undefined,
    };

    const departments = await prisma.department.findMany({
      where,
      select: {
        id: true,
        parentId: true,
        companyId: true,
        branchId: true,
        name: true,
        description: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
      skip: offset,
      take: limit,
      orderBy: { createdAt: 'desc' },
    });

    if (includeChildren) {
      const result: DepartmentDto[] = [];
      for (const dept of departments) {
        const children = await prisma.department.findMany({
          where: { parentId: dept.id, isActive: true },
          select: {
            id: true,
            parentId: true,
            companyId: true,
            branchId: true,
            name: true,
            description: true,
            isActive: true,
            createdAt: true,
            updatedAt: true,
          },
          orderBy: { createdAt: 'asc' },
        });

        result.push({
          id: dept.id,
          parentId: dept.parentId,
          companyId: dept.companyId,
          branchId: dept.branchId,
          name: dept.name,
          description: dept.description,
          isActive: dept.isActive,
          createdAt: dept.createdAt,
          updatedAt: dept.updatedAt,
          children: children.map((child) => ({
            id: child.id,
            parentId: child.parentId,
            companyId: child.companyId,
            branchId: child.branchId,
            name: child.name,
            description: child.description,
            isActive: child.isActive,
            createdAt: child.createdAt,
            updatedAt: child.updatedAt,
            children: [],
          })),
        });
      }
      return result;
    }

    return departments.map((dept) => ({
      id: dept.id,
      parentId: dept.parentId,
      companyId: dept.companyId,
      branchId: dept.branchId,
      name: dept.name,
      description: dept.description,
      isActive: dept.isActive,
      createdAt: dept.createdAt,
      updatedAt: dept.updatedAt,
    }));
  }

  async getById(
    id: string,
    currentUserId: string
  ): Promise<DepartmentDto> {
    await this.validateCurrentUser(currentUserId);

    const dept = await prisma.department.findFirst({
      where: { id, isActive: true },
      select: {
        id: true,
        parentId: true,
        companyId: true,
        branchId: true,
        name: true,
        description: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!dept) {
      throw new CustomError('Department not found', 404);
    }

    const children = await prisma.department.findMany({
      where: { parentId: dept.id, isActive: true },
      select: {
        id: true,
        parentId: true,
        companyId: true,
        branchId: true,
        name: true,
        description: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: 'asc' },
    });

    return {
      id: dept.id,
      parentId: dept.parentId,
      companyId: dept.companyId,
      branchId: dept.branchId,
      name: dept.name,
      description: dept.description,
      isActive: dept.isActive,
      createdAt: dept.createdAt,
      updatedAt: dept.updatedAt,
      children: children.map((child) => ({
        id: child.id,
        parentId: child.parentId,
        companyId: child.companyId,
        branchId: child.branchId,
        name: child.name,
        description: child.description,
        isActive: child.isActive,
        createdAt: child.createdAt,
        updatedAt: child.updatedAt,
        children: [],
      })),
    };
  }

  async create(
    companyId: string,
    currentUserId: string,
    model: DepartmentModel
  ): Promise<DepartmentDto> {
    await this.validateAdministratorForCompany(currentUserId, companyId);

    const newDepartment = await prisma.$transaction(async (tx) => {
      const department = await tx.department.create({
        data: {
          companyId,
          parentId: model.parentId ?? null,
          branchId: model.branchId ?? null,
          name: model.name,
          description: model.description ?? null,
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
      return department;
    });

    if (!newDepartment) {
      throw new CustomError('Department not created', 400);
    }

    return {
      id: newDepartment.id,
      parentId: newDepartment.parentId,
      companyId: newDepartment.companyId,
      branchId: newDepartment.branchId,
      name: newDepartment.name,
      description: newDepartment.description,
      isActive: newDepartment.isActive,
      createdAt: newDepartment.createdAt,
      updatedAt: newDepartment.updatedAt,
      children: [],
    };
  }

  async update(
    id: string,
    companyId: string,
    currentUserId: string,
    model: Partial<DepartmentUpdateModel>
  ): Promise<DepartmentDto> {
    await this.validateAdministratorForCompany(currentUserId, companyId);

    const existing = await prisma.department.findFirst({
      where: { id, companyId, isActive: true },
      select: {
        id: true,
        parentId: true,
        companyId: true,
        branchId: true,
        name: true,
        description: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!existing) {
      throw new CustomError('Department not found', 404);
    }

    const updated = await prisma.$transaction(async (tx) => {
      const department = await tx.department.update({
        where: { id },
        data: {
          name: model.name ?? existing.name,
          description: model.description !== undefined ? model.description : existing.description,
          parentId: model.parentId !== undefined ? model.parentId : existing.parentId,
          branchId: model.branchId !== undefined ? model.branchId : existing.branchId,
          isActive: model.isActive !== undefined ? model.isActive : existing.isActive,
          updatedAt: new Date(),
        },
      });
      return department;
    });

    if (!updated) {
      throw new CustomError('Department not updated', 400);
    }

    const children = await prisma.department.findMany({
      where: { parentId: updated.id, isActive: true },
      select: {
        id: true,
        parentId: true,
        companyId: true,
        branchId: true,
        name: true,
        description: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: 'asc' },
    });

    return {
      id: updated.id,
      parentId: updated.parentId,
      companyId: updated.companyId,
      branchId: updated.branchId,
      name: updated.name,
      description: updated.description,
      isActive: updated.isActive,
      createdAt: updated.createdAt,
      updatedAt: updated.updatedAt,
      children: children.map((child) => ({
        id: child.id,
        parentId: child.parentId,
        companyId: child.companyId,
        branchId: child.branchId,
        name: child.name,
        description: child.description,
        isActive: child.isActive,
        createdAt: child.createdAt,
        updatedAt: child.updatedAt,
        children: [],
      })),
    };
  }

  private async validateCurrentUser(currentUserId: string) {
    const user = await prisma.user.findUnique({
      where: { id: currentUserId, isActive: true },
      select: {
        id: true,
        roles: {
          select: {
            role: {
              select: {
                id: true,
                name: true,
                isActive: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      throw new CustomError('User not found', 404);
    }

    return user;
  }

  private async validateCompanyExists(companyId: string) {
    const company = await prisma.company.findUnique({
      where: { id: companyId, isActive: true },
      select: { id: true, isActive: true, isVerified: true },
    });

    if (!company) {
      throw new CustomError('Company not found', 404);
    }

    if (!company.isVerified) {
      throw new CustomError('Company is not verified, please contact support and verify your company', 400);
    }

    return company;
  }

  private async validateAdministratorForCompany(currentUserId: string, companyId: string) {
    const user = await this.validateCurrentUser(currentUserId);
    const userRole = user.roles[0].role.name as Roles;

    if (userRole !== Roles.ADMINISTRATOR) {
      throw new CustomError('Only Administrators can manage departments', 403);
    }

    await this.validateCompanyExists(companyId);

    const userCompany = await prisma.userCompany.findFirst({
      where: { userId: user.id, companyId },
    });

    if (!userCompany) {
      throw new CustomError('You are not authorized to manage departments for this company', 403);
    }

    return user;
  }
}
