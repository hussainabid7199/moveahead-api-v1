import { injectable } from 'inversify';
import { CreateUserDto, UpdateUserDto, UserDto } from '../dtos/user.dto';

import { AuthProvider } from '../prisma/generated';
import PasswordUtils from '../utils/password.utils';
import prisma from '../prisma';
import { CreateUserModel } from '../validators/user.validator';
import { Prisma } from '../prisma/generated';
import { Roles } from '../enums/roles.enum';
import CustomError from '../exceptions/custom-error';

@injectable()
export class UserService {
  constructor() {}

  /**
   * Retrieves a user by unique identifier.
   *
   * @param id - The unique identifier of the user to retrieve.
   * @returns A promise that resolves to a `UserDto` if the user is found, or `null` if not found.
   */
  async findById(id: string): Promise<UserDto | null> {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        roles: true,
      },
    });
    if (!user) {
      return null;
    }
    return this.convertToDto(user);
  }

  /**
   * Retrieves a user by email address.
   *
   * @param email - The email address of the user to find.
   * @param includePassword - Optional. Whether to include the user's password in the returned DTO. Defaults to false.
   * @returns A promise that resolves to a UserDto if the user is found, or null otherwise.
   */
  async findByEmail(email: string, includePassword: boolean = false): Promise<UserDto | null> {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        roles: true,
      },
    });
    if (!user) {
      return null;
    }

    return this.convertToDto(user, includePassword);
  }

  /**
   * Finds a user by phone number.
   *
   * @param phoneNumber - The phone number to search for.
   * @returns A promise that resolves to a UserDto if a user is found, or null otherwise.
   */
  async findByPhoneNumber(phoneNumber: string): Promise<UserDto | null> {
    const user = await prisma.user.findFirst({
      where: { phoneNumber, isActive: true },
      include: {
        roles: true,
      },
    });
    if (!user) {
      return null;
    }
    return this.convertToDto(user);
  }

  /**
   * Finds a user by provider ID and authentication provider.
   *
   * @param providerId - The unique identifier assigned by the authentication provider.
   * @param provider - The authentication provider (e.g., Google, Facebook).
   * @returns A promise that resolves to a `UserDto` if a matching user is found, or `null` otherwise.
   */
  async findByProviderId(providerId: string, provider: AuthProvider): Promise<UserDto | null> {
    const user = await prisma.user.findFirst({
      where: {
        providerId,
        provider,
      },
      include: {
        roles: true,
      },
    });
    if (!user) {
      return null;
    }
    return this.convertToDto(user);
  }

  async findUsersWithRolesWithoutBranchMapping(
    currentUserId: string,
    companyId: string,
    branchId: string,
    q?: string,
    name?: string,
    phoneNumber?: string
  ): Promise<UserDto[]> {
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

    const allowedRoles = [Roles.ADMINISTRATOR, Roles.ADMIN];
    if (!allowedRoles.includes(user.roles[0].role.name as Roles)) {
      throw new Error('You are not authorized to create a user doctor mapping');
    }

    // Check company exists
    const company = await prisma.company.findUnique({
      where: { id: companyId },
      select: {
        id: true,
        name: true,
        website: true,
        isActive: true,
      },
    });

    if (!company) {
      throw new Error('Company not found');
    }

    // Check user mapping with the company
    const userMapping = await prisma.userCompanyBranch.findUnique({
      where: { userId_companyId_branchId: { userId: user.id, companyId: company.id, branchId: branchId } },
    });

    if (!userMapping) {
      throw new Error('User not mapped to company');
    }

    const branch = await prisma.branch.findFirst({
      where: { id: branchId },
      select: {
        id: true,
        name: true,
        address: true,
        phoneNumber: true,
        isActive: true,
      },
    });

    if (!branch) {
      throw new Error('Branch not found');
    }

    const whereCondition: Prisma.UserWhereInput = {};
    if (q) {
      whereCondition.OR = [{ displayName: { contains: q } }, { email: { contains: q } }, { phoneNumber: { contains: q } }];
    }
    if (name) {
      whereCondition.OR = [{ displayName: { contains: name } }];
    }
    if (phoneNumber) {
      whereCondition.OR = [{ phoneNumber: { contains: phoneNumber } }];
    }

    whereCondition.AND = [
      { isActive: true },
      { NOT: { id: user.id } },
      { NOT: { roles: { some: { role: { name: { in: [Roles.SUPERADMIN, Roles.ADMINISTRATOR, Roles.ADMIN] } } } } } },
      { NOT: { userCompanyBranch: { some: { branchId: branch.id } } } },
    ];

    // Get all user and doctor who are not mapped to the user_branch and doctor_branch with role doctor and user
    const users = await prisma.user.findMany({
      where: whereCondition,
      select: {
        id: true,
        displayName: true,
        firstName: true,
        lastName: true,
        profileImageUrl: true,
        email: true,
        phoneNumber: true,
        createdAt: true,
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

    const response: UserDto[] = users.map((user) => {
      return {
        id: user.id,
        displayName: user.displayName,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImageUrl: user.profileImageUrl,
        email: user.email,
        phoneNumber: user.phoneNumber,
        createdAt: user.createdAt,
        roles: user.roles.map((role) => role.role.name),
      };
    });

    return response;
  }

  /**
   * Creates a new user with the specified data and role.
   *
   * @param data - The user data required for creation, including email, password, and personal details.
   * @param role - The role to assign to the new user.
   * @returns A promise that resolves to the created user's DTO, or null if creation fails.
   */
  async create(data: CreateUserModel, role?: string): Promise<UserDto | null> {
    const hashedPassword = await PasswordUtils.hashPassword(data.password);
    const user = await prisma.$transaction(async (tx) => {
      const newUser = await tx.user.create({
        data: {
          email: data.email,
          passwordHash: hashedPassword,
          firstName: data.firstName,
          lastName: data.lastName,
          displayName: data.displayName,
          phoneNumber: data.phoneNumber,
          profileImageUrl: data.profileImageUrl,
          providerId: data.providerId,
          isEmailVerified: false,
          isPhoneVerified: false,
          isActive: true,
          timezone: data.timezone,
          locale: data.locale,
        },
        include: {
          roles: true,
        },
      });
      // Assign role via UserRole
      if (role) {
        const roleRecord = await tx.role.findUnique({
          where: { name: role },
          select: { id: true },
        });

        if (!roleRecord) {
          throw new Error(`Role "${role}" not found`);
        }

        await tx.userRole.create({
          data: {
            userId: newUser.id,
            roleId: roleRecord.id, // Safe: always string now
          },
        });
      }

      return newUser;
    });

    return this.convertToDto(user);
  }

  /**
   * Updates a user's information by unique identifier.
   *
   * @param id - The unique identifier of the user to update.
   * @param data - The data to update the user with, conforming to the UpdateUserDto.
   * @returns A promise that resolves to the updated user's DTO, or null if the user was not found.
   */
  async update(id: string, data: UpdateUserDto): Promise<UserDto | null> {
    const user = await prisma.user.update({
      where: { id },
      data,
      include: {
        roles: true,
      },
    });
    if (!user) {
      return null;
    }
    return this.convertToDto(user);
  }

  async updatePassword(id: string, newPassword: string): Promise<UserDto | null> {
    const hashedPassword = await PasswordUtils.hashPassword(newPassword);
    const user = await prisma.user.update({
      where: { id },
      data: { passwordHash: hashedPassword },
      include: {
        roles: true,
      },
    });
    if (!user) {
      return null;
    }
    return this.convertToDto(user);
  }

  async updateUserRole(id: string, newRole: string): Promise<UserDto | null> {
    // First, find the user to ensure they exist and to get their current roles
    const user = await prisma.user.findFirst({
      where: { id, isActive: true },
    });

    if (!user) {
      throw new Error('User not found'); // User not found
    }

    // Find existing role from the role user mapping table
    const existingRole = await prisma.userRole.findFirst({
      where: { userId: id },
      select: {
        userId: true,
        roleId: true,
      },
    });

    if (existingRole) {
      // Delete existing role mapping
      await prisma.$transaction(async (tx) => {
        await tx.userRole.delete({
          where: { userId_roleId: { userId: id, roleId: existingRole.roleId } },
        });

        const roleRecord = await tx.role.findUnique({
          where: { name: newRole },
          select: { id: true },
        });

        if (!roleRecord) {
          throw new Error(`Role "${newRole}" not found`);
        }

        // Create new role mapping
        await tx.userRole.create({
          data: {
            userId: id,
            roleId: roleRecord.id,
          },
        });

        // Return the updated user with roles
        return await tx.user.findUnique({
          where: { id },
          include: {
            roles: true,
          },
        });
      });
    }

    return this.convertToDto(user);
  }

  /**
   * Deletes a user by their unique identifier.
   *
   * @param id - The unique identifier of the user to delete.
   * @returns A promise that resolves to the deleted user's DTO if found and deleted, or null if no user was found with the given id.
   */
  async delete(id: string): Promise<UserDto | null> {
    // Delete user roles first
    await prisma.userRole.deleteMany({ where: { userId: id } });
    const user = await prisma.user.delete({
      where: { id },
      include: {
        roles: true,
      },
    });
    return this.convertToDto(user);
  }

  createUser = async (
    currentUserId: string,
    user: CreateUserModel,
    role: string,
    companyId: string,
    branchId?: string
  ): Promise<UserDto | null> => {
    // Check current user role
    const currentUser = await prisma.user.findUnique({
      where: { id: currentUserId },
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

    if (!currentUser) {
      throw new CustomError('Current user not found', 404);
    }

    const userRole = currentUser.roles[0].role.name as Roles;

    if (![Roles.SUPERADMIN, Roles.ADMINISTRATOR, Roles.ADMIN].includes(userRole)) {
      throw new CustomError('You are not authorized to create a user', 403);
    }

    // Check if the role is valid
    const roleRecord = await prisma.role.findUnique({
      where: { name: role },
      select: { id: true, name: true },
    });

    if (!roleRecord) {
      throw new CustomError(`Role not found`, 404);
    }

    const roleName = roleRecord.name as Roles;

    // Check if the company is a valid company
    const company = await prisma.company.findFirst({
      where: { id: companyId, isActive: true, isVerified: true },
    });

    if (!company) {
      throw new CustomError('Company not found', 404);
    }

    const createdUser = prisma.$transaction(async (tx): Promise<UserDto | null> => {
      if (roleName === Roles.ADMINISTRATOR && userRole === Roles.SUPERADMIN) {
        // Create user and assign role
        const newUser = await this.create(user, roleName);
        if (!newUser) {
          throw new CustomError('Failed to create user', 500);
        }

        // Map user with company and branch
        await tx.userCompany.create({
          data: {
            userId: newUser.id,
            companyId: company.id,
          },
        });

        return this.convertToDto(newUser);
      }

      if (!branchId) {
        throw new CustomError('Branch ID is required', 400);
      }

      // Check if the branch is a valid branch of the company
      const branch = await prisma.branch.findFirst({
        where: { id: branchId, companyId: company.id, isActive: true },
      });

      if (!branch) {
        throw new CustomError('Branch not found', 404);
      }

      if (roleName === Roles.ADMIN && (userRole === Roles.SUPERADMIN || userRole === Roles.ADMINISTRATOR)) {
        // Create user and assign role
        const newUser = await this.create(user, roleName);
        if (!newUser) {
          throw new Error('Failed to create user');
        }

        // Map user with company and branch
        await prisma.userCompanyBranch.create({
          data: {
            userId: newUser.id,
            companyId: company.id,
            branchId: branch.id,
          },
        });

        return this.convertToDto(newUser);
      }

      if (roleName === Roles.DOCTOR || roleName === Roles.USER && (userRole === Roles.SUPERADMIN || userRole === Roles.ADMINISTRATOR || userRole === Roles.ADMIN)) {
        // Create user and assign role
        const newUser = await this.create(user, roleName);
        if (!newUser) {
          throw new Error('Failed to create user');
        }

        // Map user with company and branch
        await prisma.userCompanyBranch.create({
          data: {
            userId: newUser.id,
            companyId: company.id,
            branchId: branch.id,
          },
        });

        return this.convertToDto(newUser);
      }

      return null;
    });

    if (!createdUser) {
      throw new Error('Failed to create user with company and branch mapping');
    }

    return createdUser;
  };

  /**
   * Converts a User entity to a UserDto object.
   *
   * @param user - The User entity to convert.
   * @param includePassword - Optional. If true, includes the user's password hash in the DTO; otherwise, omits it. Defaults to false.
   * @returns The UserDto representation of the given User entity.
   */
  convertToDto(user: any, includePassword: boolean = false): UserDto {
    return {
      id: user.id,
      email: user.email,
      passwordHash: includePassword ? user.passwordHash : undefined,
      firstName: user.firstName,
      lastName: user.lastName,
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      profileImageUrl: user.profileImageUrl,
      provider: user.provider,
      providerId: user.providerId,
      isEmailVerified: user.isEmailVerified,
      isPhoneVerified: user.isPhoneVerified,
      isActive: user.isActive,
      timezone: user.timezone,
      locale: user.locale,
      metadata: user.metadata,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      role: user.roles ? user.roles.map((r: any) => r.roleId) : [],
    };
  }
}

export default UserService;
