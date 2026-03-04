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

  async getAll(q: string, currentUserId: string): Promise<CompanyDto[]> {
    const whereCondition: Prisma.CompanyWhereInput = {
      isActive: true,
    };

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

    // Only SuperAdmin can see all companies, Admin and Administrator can see only their mapped company, other roles cannot see any company
    const allowedRoles = [Roles.SUPERADMIN, Roles.ADMINISTRATOR, Roles.ADMIN];
    if (!allowedRoles.includes(user?.roles[0].role.name as Roles)) {
      throw new CustomError('You are not authorized to view companies', 403);
    }

    let isAdminLevelUser = false;
    if (user) {
      const allowedRoles = [Roles.ADMINISTRATOR, Roles.ADMIN];
      isAdminLevelUser = user.roles.some((userRole) => allowedRoles.includes(userRole.role.name as Roles));
    }

    if (isAdminLevelUser) {
      const userCompany = await prisma.userCompanyBranch.findFirst({
        where: { userId: currentUserId },
        select: { companyId: true },
      });

      if (userCompany) {
        whereCondition.AND = [{ id: userCompany.companyId }];
      }
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

    if (!company) {
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

  getCompanyByUserId = async (userId: string): Promise<CompanyDto> => {
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
      company = await prisma.userCompany.findFirst({
        where: {
          userId: user.id,
        },
        select: {
          companyId: true,
          userId: true,
        },
      });
    } else {
      company = await prisma.userCompanyBranch.findFirst({
        where: {
          userId: user.id,
        },
        select: {
          companyId: true,
          userId: true,
        },
      });
    }

    if (!company) {
      throw new CustomError('Company not found', 404);
    }

    const companyDetails = await prisma.company.findFirst({
      where: { id: company.companyId, isActive: true },
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

    if (!companyDetails) {
      throw new CustomError('Company not found', 404);
    }

    const response: CompanyDto = {
      name: companyDetails.name,
      website: companyDetails.website || null,
      isVerified: companyDetails.isVerified,
      isActive: companyDetails.isActive,
      createdAt: companyDetails.createdAt,
    };

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

    if (userRole !== Roles.SUPERADMIN && userRole !== Roles.ADMINISTRATOR && userRole !== Roles.ADMIN) {
      throw new Error('You are not authorized to for mapping to branch, please contact your administrator for authorization');
    }

    // Check if company exists
    const company = await prisma.company.findUnique({
      where: { id: companyId },
      select: { id: true, name: true, isActive: true, isVerified: true },
    });

    if (!company) {
      throw new Error('Company not found');
    }

    if (!company.isActive) {
      throw new Error('Company is not active');
    }

    if (!company.isVerified) {
      throw new Error('Company is not verified, please verify company first');
    }

    let branch = null;
    if (branchId) {
      // Check if branch exists with this company
      branch = await prisma.branch.findFirst({
        where: { id: branchId, companyId: companyId, isActive: true },
        select: { id: true, name: true, isActive: true },
      });

      if (!branch) {
        throw new Error('Branch not found');
      }
    }

    // Check if user exists
    const user = await prisma.user.findFirst({
      where: { id: userId, isActive: true },
      select: { id: true, email: true, phoneNumber: true, roles: { select: { role: { select: { id: true, name: true, isActive: true } } } } },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const userRoleForMapping: Roles = user.roles[0].role.name as Roles;

    // Validate Role base user mapping
    // SuperAdmin can map any user to any branch and company
    // Administrator can map any user to any branch and company but only to the company which he is mapped with and the role should be Admin User or Doctor
    // Admin can map any user to any branch and company but only to the company which he is mapped with and the role must be user and doctor

    // Role Admin
    if (userRole === Roles.ADMIN && (userRoleForMapping === Roles.DOCTOR || userRoleForMapping === Roles.USER)) {
      // Check if the admin is mapped with the company and branch if not mapped then throw error
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

      // Check if the user is mapped with the company
      const userCompanyMapping = await prisma.userCompanyBranch.findFirst({
        where: {
          userId: userId,
          companyId: companyId,
          branchId: branchId,
        },
      });

      if (!userCompanyMapping) {
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
          throw new Error(`${user.email} not mapped to branch`);
        }

        return `${user.email} mapped to branch successfully`;
      }
    }

    // Role Administrator
    if (
      userRole === Roles.ADMINISTRATOR &&
      (userRoleForMapping === Roles.ADMIN || userRoleForMapping === Roles.DOCTOR || userRoleForMapping === Roles.USER)
    ) {
      // Check if the administrator is mapped with the company if not mapped then throw error
      const adminCompanyMapping = await prisma.userCompanyBranch.findFirst({
        where: {
          userId: currentUserId,
          companyId: companyId,
        },
      });

      if (!adminCompanyMapping) {
        throw new Error('You are not authorized to create mapping to branch, please contact your administrator for authorization');
      }

      // Check if the user is mapped with the company
      const userCompanyMapping = await prisma.userCompanyBranch.findFirst({
        where: {
          userId: userId,
          companyId: companyId,
          branchId: branchId,
        },
      });

      if (!userCompanyMapping) {
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
          throw new Error(`${user.email} not mapped to branch`);
        }

        return `${user.email} mapped to branch successfully`;
      }
    }

    // Role SuperAdmin
    if (userRole === Roles.SUPERADMIN) {
      if (userRoleForMapping === Roles.ADMINISTRATOR) {
        // Check if the user is already mapped with the company
        const companyMapping = await prisma.userCompany.findFirst({
          where: { userId: user.id, companyId: companyId },
        });

        if (!companyMapping) {
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
            throw new Error(`${user.email} not mapped to branch`);
          }

          return `${user.email} mapped to branch successfully`;
        }
      }

      if (userRoleForMapping === Roles.ADMIN || userRoleForMapping === Roles.DOCTOR || userRoleForMapping === Roles.USER) {
        // Check if the user is mapped with the company
        const userCompanyMapping = await prisma.userCompanyBranch.findFirst({
          where: {
            userId: userId,
            companyId: companyId,
            branchId: branchId,
          },
        });

        if (!userCompanyMapping) {
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
            throw new Error(`${user.email} not mapped to branch`);
          }

          return `${user.email} mapped to branch successfully`;
        }
      }
    }

    throw new Error('User already mapped to branch');
  }

  // async companyMapping(currentUserId: string, userId: string, companyId: string): Promise<string> {
  //   const isAdminExist = await prisma.user.findFirst({
  //     where: {
  //       id: currentUserId,
  //       isActive: true,
  //     },
  //   });

  //   if (!isAdminExist) {
  //     throw new Error('You are not authorized to map user');
  //   }

  //   const userRoles = await prisma.userRole.findFirst({
  //     where: { userId: isAdminExist.id },
  //     select: {
  //       role: { select: { id: true, name: true, isActive: true } },
  //     },
  //   });

  //   const allowedRoles = [Roles.SUPERADMIN, Roles.ADMINISTRATOR];
  //   if (!allowedRoles.includes(userRoles?.role.name as Roles)) {
  //     throw new Error('You are not authorized to map user');
  //   }

  //   const companyExist = await prisma.company.findUnique({
  //     where: { id: companyId },
  //     select: { id: true, name: true, isActive: true, isVerified: true },
  //   });

  //   if (!companyExist) {
  //     throw new Error('Company not found');
  //   }

  //   if (!companyExist.isActive) {
  //     throw new Error('Company is not active');
  //   }

  //   if (!companyExist.isVerified) {
  //     throw new Error('Company is not verified, please verify company first');
  //   }

  //   const findUserToMap = await prisma.user.findFirst({
  //     where: { id: userId, isActive: true },
  //     select: { id: true, firstName: true, lastName: true, displayName: true, isActive: true },
  //   });

  //   if (!findUserToMap) {
  //     throw new Error('User not found');
  //   }

  //   const userRolesToMap = await prisma.userRole.findFirst({
  //     where: { userId },
  //     select: {
  //       role: { select: { id: true, name: true, isActive: true } },
  //     },
  //   });

  //   if (!userRolesToMap) {
  //     throw new Error('User is not authorized to map company');
  //   }

  //   const userAllowedRoles = [Roles.ADMINISTRATOR, Roles.ADMIN];
  //   if (!userAllowedRoles.includes(userRolesToMap.role.name as Roles)) {
  //     throw new Error('User is not authorized to map company');
  //   }

  //   const findExistingMapping = await prisma.userCompanyBranch.findFirst({
  //     where: { userId, companyId },
  //   });

  //   let message: string | null = null;
  //   if (!findExistingMapping) {
  //     await prisma.$transaction(async (tx) => {
  //       await tx.userCompanyBranch.create({
  //         data: {
  //           userId,
  //           companyId,
  //           branchId: '',
  //         },
  //       });
  //     });

  //     message = `${
  //       findUserToMap.displayName ? findUserToMap.displayName : `${findUserToMap.firstName} ${findUserToMap.lastName}`
  //     } mapped successfully`;
  //   } else {
  //     await prisma.$transaction(async (tx) => {
  //       await tx.userCompanyBranch.delete({ where: { userId_companyId_branchId: { userId, companyId, branchId: '' } } });
  //     });
  //     message = `${
  //       findUserToMap.displayName ? findUserToMap.displayName : `${findUserToMap.firstName} ${findUserToMap.lastName}`
  //     } unmapped successfully`;
  //   }

  //   if (!message || message === null) {
  //     throw new Error('Some error occurred while mapping user');
  //   }

  //   return message;
  // }
}
