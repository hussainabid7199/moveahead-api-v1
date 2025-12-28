import { injectable } from 'inversify';
import BranchDto from '../dtos/branch.dto';
import { Roles } from '../enums/roles.enum';
import prisma from '../prisma';
import { BranchModel, BranchUpdateModel } from '../validators/branch.validator';

@injectable()
export class BranchService {
  constructor() {}

  async create(currentUserId: string, companyId: string, model: BranchModel): Promise<BranchDto> {
    const result = await this.validateUserAndCompany(currentUserId, companyId);

    const newBranch = await prisma.$transaction(async (tx) => {
      const branch = await tx.branch.create({
        data: {
          companyId: result.companyId,
          name: model.name,
          address: model.address,
          phoneNumber: model.phoneNumber,
          latitude: model.latitude,
          longitude: model.longitude,
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });

      return branch;
    });

    if (!newBranch) {
      throw new Error('Branch not created');
    }

    const response: BranchDto = {
      id: newBranch.id,
      name: newBranch.name,
      address: newBranch.address || '',
      phoneNumber: newBranch.phoneNumber || '',
      latitude: newBranch.latitude || 0,
      longitude: newBranch.longitude || 0,
      isActive: newBranch.isActive,
      createdAt: newBranch.createdAt,
      updatedAt: newBranch.updatedAt!,
    };

    return response;
  }

  async update(currentUserId: string, companyId: string, branchId: string, model: Partial<BranchUpdateModel>): Promise<BranchDto> {
    await this.validateUserAndCompany(currentUserId, companyId);

    const branchExist = await prisma.branch.findFirst({
      where: { id: branchId, isActive: true },
      select: {
        id: true,
        name: true,
        address: true,
        phoneNumber: true,
        latitude: true,
        longitude: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!branchExist) {
      throw new Error('Branch not found');
    }

    const updateBranch = await prisma.$transaction(async (tx) => {
      const branch = await tx.branch.update({
        where: { id: branchId },
        data: {
          name: model.name ?? branchExist.name,
          address: model.address ?? branchExist.address,
          phoneNumber: model.phoneNumber ?? branchExist.phoneNumber,
          latitude: model.latitude ?? branchExist.latitude,
          longitude: model.longitude ?? branchExist.longitude,
          isActive: model.isActive ?? branchExist.isActive,
          updatedAt: new Date(),
        },
      });

      return branch;
    });

    if (!updateBranch) {
      throw new Error('Branch not updated');
    }

    const response: BranchDto = {
      id: updateBranch.id,
      name: updateBranch.name,
      address: updateBranch.address || '',
      phoneNumber: updateBranch.phoneNumber || '',
      latitude: updateBranch.latitude || 0,
      longitude: updateBranch.longitude || 0,
      isActive: updateBranch.isActive,
      createdAt: updateBranch.createdAt,
      updatedAt: updateBranch.updatedAt!,
    };

    return response;
  }

  async createDoctorBranchMapping(currentUserId: string, userId: string, companyId: string, branchId: string): Promise<string> {
    const result = await this.validateCurrentUserCompanyAndBranch(currentUserId, branchId, companyId);

    if (!result) {
      throw new Error('Unauthorized to create mapping to branch');
    }

    const user = await prisma.user.findFirst({
      where: { id: userId, isActive: true },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        displayName: true,
        roles: { select: { role: { select: { id: true, name: true, isActive: true } } } },
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const allowedUserRoles = [Roles.DOCTOR];
    if (!allowedUserRoles.includes(user.roles[0].role.name as Roles)) {
      throw new Error('Unauthorized role to create mapping to branch');
    }

    // Check if user is already mapped with the branch
    const doctorBranchMapping = await prisma.doctorBranch.findFirst({
      where: { userId: user.id, branchId: branchId },
    });

    let message: string | null = null;
    if (doctorBranchMapping) {
      // Unmapped the user from the branch
      const deleteMapping = await prisma.$transaction(async (tx) => {
        const mapping = await tx.doctorBranch.delete({
          where: {
            userId_branchId: {
              userId: user.id,
              branchId: branchId,
            },
          },
        });

        return mapping;
      });

      if (!deleteMapping) {
        throw new Error(`${user.displayName ? user.displayName : `${user.firstName} ${user.lastName}`} not unmapped from branch`);
      }

      message = `${user.displayName ? user.displayName : `${user.firstName} ${user.lastName}`} unmapped successfully`;
    } else {
      const createMapping = await prisma.$transaction(async (tx) => {
        const mapping = await tx.doctorBranch.create({
          data: {
            userId: user.id,
            branchId: branchId,
          },
        });

        return mapping;
      });

      if (!createMapping) {
        throw new Error(`${user.displayName ? user.displayName : `${user.firstName} ${user.lastName}`} not mapped to branch`);
      }

      message = `Dr.${user.displayName ? user.displayName : `${user.firstName} ${user.lastName}`} mapped successfully`;
    }

    return message;
  }

  async createUserBranchMapping(currentUserId: string, userId: string, companyId: string, branchId: string): Promise<string> {
    const result = await this.validateCurrentUserCompanyAndBranch(currentUserId, branchId, companyId);

    if (!result) {
      throw new Error('Unauthorized to create mapping to branch');
    }

    const user = await prisma.user.findFirst({
      where: { id: userId, isActive: true },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        displayName: true,
        roles: { select: { role: { select: { id: true, name: true, isActive: true } } } },
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    // Check if user is already mapped with the branch
    const userBranchMapping = await prisma.userBranch.findFirst({
      where: { userId: user.id, branchId: branchId },
    });

    // Allow user with role admin to create mapping of himself if the is not mapped with the branch only once if already mapped then throw error
    if (user && user.roles[0].role.name === Roles.ADMIN && userBranchMapping) {
        throw new Error(`You are already mapped to branch.`);
    }

    const allowedUserRoles = [Roles.ADMIN, Roles.USER];
    if (!allowedUserRoles.includes(user.roles[0].role.name as Roles)) {
      throw new Error('Unauthorized role to create mapping to branch');
    }

    let message: string | null = null;
    if (userBranchMapping) {
      // Unmapped the user from the branch
      const deleteMapping = await prisma.$transaction(async (tx) => {
        const mapping = await tx.userBranch.delete({
          where: {
            userId_branchId: {
              userId: user.id,
              branchId: branchId,
            },
          },
        });

        return mapping;
      });

      if (!deleteMapping) {
        throw new Error(`${user.displayName ? user.displayName : `${user.firstName} ${user.lastName}`} not unmapped from branch`);
      }

      message = `${user.displayName ? user.displayName : `${user.firstName} ${user.lastName}`} unmapped successfully`;
    } else {
      const createMapping = await prisma.$transaction(async (tx) => {
        const mapping = await tx.userBranch.create({
          data: {
            userId: user.id,
            branchId: branchId,
          },
        });

        return mapping;
      });

      if (!createMapping) {
        throw new Error(`${user.displayName ? user.displayName : `${user.firstName} ${user.lastName}`} not mapped to branch`);
      }

      message = `${user.displayName ? user.displayName : `${user.firstName} ${user.lastName}`} mapped successfully`;
    }

    return message;
  }

  private async validateUserAndCompany(currentUserId: string, companyId: string): Promise<{ userId: string; companyId: string }> {
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
      throw new Error('User not found');
    }

    const allowedRoles = [Roles.SUPERADMIN, Roles.ADMINISTRATOR];
    if (!allowedRoles.includes(user.roles[0].role.name as Roles)) {
      throw new Error('You are not authorized to create a branch');
    }

    // Check if company exists
    const company = await prisma.company.findUnique({
      where: { id: companyId, isActive: true, isVerified: true },
      select: { id: true, name: true, isActive: true, isVerified: true },
    });

    if (!company) {
      throw new Error('Company not found');
    }

    if (!company.isActive) {
      throw new Error('Company is not active');
    }

    if (!company.isVerified) {
      throw new Error('Company is not verified, please contact support and verify your company');
    }

    if (user.roles[0].role.name === Roles.ADMINISTRATOR) {
      // Check if the user is mapped with the company
      const userCompany = await prisma.userCompany.findFirst({
        where: {
          userId: user.id,
          companyId: company.id,
        },
      });

      if (!userCompany) {
        throw new Error('You are not authorized to create a branch');
      }
    }

    return { userId: user.id, companyId: company.id };
  }

  private async validateCurrentUserCompanyAndBranch(currentUserId: string, branchId: string, companyId: string): Promise<boolean> {
    // Check if company exists
    const company = await prisma.company.findFirst({
      where: { id: companyId },
      select: { id: true, name: true, isActive: true, isVerified: true },
    });

    if (!company) {
      throw new Error('Company not found');
    }

    // Validate branch with this company
    const branch = await prisma.branch.findFirst({
      where: { id: branchId, companyId: company.id, isActive: true },
      select: {
        id: true,
        name: true,
        address: true,
        phoneNumber: true,
        latitude: true,
        longitude: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!branch) {
      throw new Error('Branch not found');
    }

    const validateCurrentUser = await prisma.user.findFirst({
      where: { id: currentUserId, isActive: true },
      select: { id: true, roles: { select: { role: { select: { id: true, name: true, isActive: true } } } } },
    });

    if (!validateCurrentUser) {
      throw new Error('User not found');
    }

    const allowedRoles = [Roles.SUPERADMIN, Roles.ADMINISTRATOR, Roles.ADMIN];
    if (!allowedRoles.includes(validateCurrentUser.roles[0].role.name as Roles)) {
      throw new Error('You are not authorized to create doctor mapping to branch');
    }

    // Check if the administrator and admin is mapped with the company
    if (validateCurrentUser.roles[0].role.name === Roles.ADMINISTRATOR || validateCurrentUser.roles[0].role.name === Roles.ADMIN) {
      const userCompanyMapping = await prisma.userCompany.findFirst({
        where: { userId: validateCurrentUser.id, companyId: companyId },
      });

      if (!userCompanyMapping) {
        throw new Error('You are not authorized to create doctor mapping to branch');
      }
    }

    return true;
  }
}
