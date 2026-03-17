import { injectable } from 'inversify';
import BranchDto from '../dtos/branch.dto';
import { Roles } from '../enums/roles.enum';
import prisma from '../prisma';
import { BranchModel, BranchUpdateModel } from '../validators/branch.validator';
import { UserBasicDto } from '../dtos/user.dto';
import CustomError from '../exceptions/custom-error';

@injectable()
export class BranchService {
  constructor() {}

  async getAllBranchUsers(
    companyId: string,
    branchId: string,
    currentUserId: string,
    search?: string,
    limit: number = 10,
    offset: number = 0
  ): Promise<UserBasicDto[]> {
    const result = await this.validateUserAndCompany(currentUserId, companyId);

    const branch = await prisma.branch.findMany({
      where: {
        companyId: result.companyId,
        id: branchId,
        isActive: true,
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!branch) {
      throw new CustomError('Branch not found', 404);
    }

    const currentUserRole = await prisma.userRole.findFirst({
      where: { userId: currentUserId },
      select: { role: { select: { name: true } } },
    });

    if (!currentUserRole) {
      throw new CustomError('User role not found', 404);
    }

    let allowedRoles: Roles[] = [];
    if (currentUserRole.role.name === Roles.ADMIN) {
      allowedRoles = [Roles.USER, Roles.DOCTOR];
    } else if (currentUserRole.role.name === Roles.ADMINISTRATOR) {
      allowedRoles = [Roles.ADMIN, Roles.USER, Roles.DOCTOR];
    } else if (currentUserRole.role.name === Roles.SUPERADMIN) {
      allowedRoles = [Roles.ADMINISTRATOR, Roles.ADMIN, Roles.USER, Roles.DOCTOR];
    }

    // Get all mapped user with this branch
    const userBranchMapping = await prisma.userCompanyBranch.findMany({
      where: { branchId: branchId, companyId: companyId, userId: { not: currentUserId } },
      select: {
        userId: true,
      },
    });

    const userIds = userBranchMapping.map((mapping) => mapping.userId);

    // Only get the user whose role is user
    const users = await prisma.user.findMany({
      where: {
        id: { in: userIds, not: currentUserId },
        isActive: true,
        email: search ? { contains: search } : undefined,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        displayName: true,
        email: true,
        phoneNumber: true,
        profileImageUrl: true,
        isEmailVerified: true,
        isPhoneVerified: true,
        roles: { select: { role: { select: { id: true, name: true, isActive: true } } } },
      },
      skip: offset,
      take: limit,
      orderBy: { createdAt: 'desc' },
    });

    if (!users) {
      throw new CustomError('No user found for this branch', 404);
    }

    const filteredUsers = users.filter((user) => allowedRoles.includes(user.roles[0].role.name as Roles));
    const response: UserBasicDto[] = filteredUsers.map((user) => ({
      id: user.id,
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      displayName: user?.displayName || '',
      email: user?.email || '',
      phoneNumber: user?.phoneNumber || '',
      profileImageUrl: user?.profileImageUrl || '',
      isEmailVerified: user.isEmailVerified,
      isPhoneVerified: user.isPhoneVerified,
      role: user.roles[0].role.name as Roles,
      isActive: true,
    }));

    return response;
  }
  async getAllBranchPatients(
    companyId: string,
    branchId: string,
    currentUserId: string,
    search?: string,
    limit: number = 10,
    offset: number = 0
  ): Promise<UserBasicDto[]> {
    const result = await this.validateUserAndCompany(currentUserId, companyId);

    const branch = await prisma.branch.findMany({
      where: {
        companyId: result.companyId,
        id: branchId,
        isActive: true,
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!branch) {
      throw new CustomError('Branch not found', 404);
    }

    // Get all mapped user with this branch
    const userBranchMapping = await prisma.userCompanyBranch.findMany({
      where: { branchId: branchId, companyId: companyId, userId: { not: currentUserId } },
      select: {
        userId: true,
      },
    });

    const userIds = userBranchMapping.map((mapping) => mapping.userId);

    // Only get the user whose role is patient
    const users = await prisma.user.findMany({
      where: {
        id: { in: userIds, not: currentUserId },
        isActive: true,
        email: search ? { contains: search } : undefined,
        roles: { some: { role: { name: { in: [Roles.USER] } } } },
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        displayName: true,
        email: true,
        phoneNumber: true,
        profileImageUrl: true,
        isEmailVerified: true,
        isPhoneVerified: true,
        roles: { select: { role: { select: { id: true, name: true, isActive: true } } } },
      },
      skip: offset,
      take: limit,
      orderBy: { createdAt: 'desc' },
    });

    if (!users) {
      throw new CustomError('No user found for this branch', 404);
    }

    const response: UserBasicDto[] = users.map((user) => ({
      id: user.id,
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      displayName: user?.displayName || '',
      email: user?.email || '',
      phoneNumber: user?.phoneNumber || '',
      profileImageUrl: user?.profileImageUrl || '',
      isEmailVerified: user.isEmailVerified,
      isPhoneVerified: user.isPhoneVerified,
      role: user.roles[0].role.name as Roles,
      isActive: true,
    }));

    return response;
  }

  async getAllBranchDoctor(
    companyId: string,
    branchId: string,
    currentUserId: string,
    search?: string,
    limit: number = 10,
    offset: number = 0
  ): Promise<UserBasicDto[]> {
    const result = await this.validateUserAndCompany(currentUserId, companyId);

    const branch = await prisma.branch.findMany({
      where: {
        companyId: result.companyId,
        id: branchId,
        isActive: true,
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!branch) {
      throw new CustomError('Branch not found', 404);
    }

    const currentUserRole = await prisma.userRole.findFirst({
      where: { userId: currentUserId },
      select: { role: { select: { name: true } } },
    });

    if (!currentUserRole) {
      throw new CustomError('User role not found', 404);
    }

    // Get all mapped user with this branch
    const doctorBranchMapping = await prisma.userCompanyBranch.findMany({
      where: { branchId: branchId, companyId: companyId, userId: { not: currentUserId } },
      select: {
        userId: true,
      },
    });

    const userIds = doctorBranchMapping.map((mapping) => mapping.userId);

    // Only get the user whose role is user
    const users = await prisma.user.findMany({
      where: {
        id: { in: userIds, not: currentUserId },
        isActive: true,
        email: search ? { contains: search } : undefined,
        roles: { some: { role: { name: Roles.DOCTOR } } },
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        displayName: true,
        email: true,
        phoneNumber: true,
        profileImageUrl: true,
        isEmailVerified: true,
        isPhoneVerified: true,
        roles: { select: { role: { select: { id: true, name: true, isActive: true } } } },
      },
      skip: offset,
      take: limit,
      orderBy: { createdAt: 'desc' },
    });

    if (!users) {
      throw new CustomError('No user found for this branch', 404);
    }

    const response: UserBasicDto[] = users.map((user) => ({
      id: user.id,
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      displayName: user?.displayName || '',
      email: user?.email || '',
      phoneNumber: user?.phoneNumber || '',
      profileImageUrl: user?.profileImageUrl || '',
      isEmailVerified: user.isEmailVerified,
      isPhoneVerified: user.isPhoneVerified,
      role: user.roles[0].role.name as Roles,
      isActive: true,
    }));

    return response;
  }

  async getAllBranchAdmins(
    companyId: string,
    branchId: string,
    currentUserId: string,
    search?: string,
    limit: number = 10,
    offset: number = 0
  ): Promise<UserBasicDto[]> {
    const result = await this.validateUserAndCompany(currentUserId, companyId);

    const branch = await prisma.branch.findMany({
      where: {
        companyId: result.companyId,
        id: branchId,
        isActive: true,
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!branch) {
      throw new CustomError('Branch not found', 404);
    }

    // Get all mapped user with this branch
    const userBranchMapping = await prisma.userCompanyBranch.findMany({
      where: { branchId: branchId, companyId: companyId, userId: { not: currentUserId } },
      select: {
        userId: true,
      },
    });

    const userIds = userBranchMapping.map((mapping) => mapping.userId);

    // Only get the user whose role is patient
    const users = await prisma.user.findMany({
      where: {
        id: { in: userIds, not: currentUserId },
        isActive: true,
        email: search ? { contains: search } : undefined,
        roles: { some: { role: { name: { in: [Roles.ADMIN] } } } },
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        displayName: true,
        email: true,
        phoneNumber: true,
        profileImageUrl: true,
        isEmailVerified: true,
        isPhoneVerified: true,
        roles: { select: { role: { select: { id: true, name: true, isActive: true } } } },
      },
      skip: offset,
      take: limit,
      orderBy: { createdAt: 'desc' },
    });

    if (!users) {
      throw new CustomError('No user found for this branch', 404);
    }

    const response: UserBasicDto[] = users.map((user) => ({
      id: user.id,
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      displayName: user?.displayName || '',
      email: user?.email || '',
      phoneNumber: user?.phoneNumber || '',
      profileImageUrl: user?.profileImageUrl || '',
      isEmailVerified: user.isEmailVerified,
      isPhoneVerified: user.isPhoneVerified,
      role: user.roles[0].role.name as Roles,
      isActive: true,
    }));

    return response;
  }

  async getAllByCompanyId(companyId: string, currentUserId: string, search?: string, limit?: number, offset?: number): Promise<BranchDto[]> {
    const result = await this.validateUserAndCompany(currentUserId, companyId);

    const branches = await prisma.branch.findMany({
      where: {
        companyId: result.companyId,
        isActive: true,
        name: search ? { contains: search } : undefined,
      },
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
      skip: offset,
      take: limit,
      orderBy: { createdAt: 'desc' },
    });

    const response: BranchDto[] = branches.map((branch) => ({
      id: branch.id,
      name: branch.name,
      address: branch.address || '',
      phoneNumber: branch.phoneNumber || '',
      latitude: branch.latitude || 0,
      longitude: branch.longitude || 0,
      isActive: branch.isActive,
      createdAt: branch.createdAt,
      updatedAt: branch.updatedAt!,
    }));

    return response;
  }

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
      throw new CustomError('Branch not created', 400);
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
      throw new CustomError('Branch not found', 404);
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
      throw new CustomError('Branch not updated', 400);
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

  async getUnmappedUsers(companyId: string, currentUserId: string, search?: string, limit: number = 10, offset: number = 0): Promise<UserBasicDto[]> {
    await this.validateUserAndCompany(currentUserId, companyId);

    const masterUsers = await prisma.userCompany.findMany({
      where: { companyId: companyId },
      select: {
        user: {
          select: {
            id: true,
            roles: { select: { role: { select: { name: true } } } },
          },
        },
      },
    });

    // Get all users of the company
    const subUsers = await prisma.userCompanyBranch.findMany({
      where: { companyId: companyId },
      select: {
        user: {
          select: {
            id: true,
            roles: { select: { role: { select: { name: true } } } },
          },
        },
      },
    });

    const user = [...masterUsers, ...subUsers];

    const doctor = user.map((user) => (user.user.id && user.user.roles[0].role.name === Roles.DOCTOR ? user.user.id : null));
    const patient = user.map((user) => (user.user.id && user.user.roles[0].role.name === Roles.USER ? user.user.id : null));
    const admin = user.map((user) => (user.user.id && user.user.roles[0].role.name === Roles.ADMIN ? user.user.id : null));
    const masterAdmin = user.map((user) => (user.user.id && user.user.roles[0].role.name === Roles.ADMINISTRATOR ? user.user.id : null));
    const userIds = [...doctor, ...patient, ...admin, ...masterAdmin].filter((id): id is string => id !== null);

    // Only get the user whose role is user and not mapped with any branch
    const users = await prisma.user.findMany({
      where: {
        id: { notIn: userIds, not: currentUserId },
        isActive: true,
        email: search ? { contains: search } : undefined,
        displayName: search ? { contains: search } : undefined,
        phoneNumber: search ? { contains: search } : undefined,
        AND: [
          {
            roles: {
              some: {
                role: {
                  name: Roles.USER,
                },
              },
            },
          },
        ],
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        displayName: true,
        email: true,
        phoneNumber: true,
        profileImageUrl: true,
        isEmailVerified: true,
        isPhoneVerified: true,
      },
      skip: offset,
      take: limit,
      orderBy: { createdAt: 'desc' },
    });

    if (!users) {
      throw new CustomError('No user found for this company', 404);
    }

    const response: UserBasicDto[] = users.map((user) => ({
      id: user.id,
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      displayName: user?.displayName || '',
      email: user?.email || '',
      phoneNumber: user?.phoneNumber || '',
      profileImageUrl: user?.profileImageUrl || '',
      isEmailVerified: user.isEmailVerified,
      isPhoneVerified: user.isPhoneVerified,
    }));

    return response;
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
      throw new CustomError('User not found', 404);
    }

    const allowedRoles = [Roles.SUPERADMIN, Roles.ADMINISTRATOR, Roles.ADMIN];
    if (!allowedRoles.includes(user.roles[0].role.name as Roles)) {
      throw new CustomError('You are not authorized to create a branch', 403);
    }

    // Check if company exists
    const company = await prisma.company.findUnique({
      where: { id: companyId, isActive: true, isVerified: true },
      select: { id: true, name: true, isActive: true, isVerified: true },
    });

    if (!company) {
      throw new CustomError('Company not found', 404);
    }

    if (!company.isActive) {
      throw new CustomError('Company is not active', 400);
    }

    if (!company.isVerified) {
      throw new CustomError('Company is not verified, please contact support and verify your company', 400);
    }

    const userRole = user.roles[0].role.name as Roles;

    if (userRole === Roles.ADMINISTRATOR) {
      // Check if the user is mapped with the company
      const userCompany = await prisma.userCompany.findFirst({
        where: {
          userId: user.id,
          companyId: company.id,
        },
      });

      if (!userCompany) {
        throw new CustomError('You are not authorized to create a branch', 403);
      }
    }

    if (userRole === Roles.ADMIN) {
      // Check if the user is mapped with the company
      const userCompanyBranch = await prisma.userCompanyBranch.findFirst({
        where: {
          userId: user.id,
          companyId: company.id,
        },
      });

      if (!userCompanyBranch) {
        throw new CustomError('You are not authorized to create a branch', 403);
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
      throw new CustomError('Company not found', 404);
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
      throw new CustomError('Branch not found', 404);
    }

    const validateCurrentUser = await prisma.user.findFirst({
      where: { id: currentUserId, isActive: true },
      select: { id: true, roles: { select: { role: { select: { id: true, name: true, isActive: true } } } } },
    });

    if (!validateCurrentUser) {
      throw new CustomError('User not found', 404);
    }

    const allowedRoles = [Roles.SUPERADMIN, Roles.ADMINISTRATOR, Roles.ADMIN];
    if (!allowedRoles.includes(validateCurrentUser.roles[0].role.name as Roles)) {
      throw new CustomError('You are not authorized to create doctor mapping to branch', 403);
    }

    // Check if the administrator and admin is mapped with the company
    if (validateCurrentUser.roles[0].role.name === Roles.ADMINISTRATOR || validateCurrentUser.roles[0].role.name === Roles.ADMIN) {
      const userCompanyMapping = await prisma.userCompanyBranch.findFirst({
        where: { userId: validateCurrentUser.id, companyId: companyId },
      });

      if (!userCompanyMapping) {
        throw new CustomError('You are not authorized to create doctor mapping to branch', 403);
      }
    }

    return true;
  }
}
