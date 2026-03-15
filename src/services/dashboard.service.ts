import { injectable } from 'inversify';
import prisma from '../prisma';
import { Roles } from '../enums/roles.enum';
import { DashboardStatsDto } from '../dtos/dashboard.dto';

const NULL_STATS: DashboardStatsDto = {
  totalCompanies: null,
  totalBranches: null,
  totalUsers: null,
  totalDoctors: null,
  totalPatients: null,
  totalAppointments: null,
  totalPayments: null,
  totalHomeVisits: null,
};

@injectable()
export class DashboardService {
  constructor() {}

  async getStats(currentUserId: string): Promise<DashboardStatsDto> {
    const currentUser = await prisma.user.findUnique({
      where: { id: currentUserId },
      select: { roles: { select: { role: { select: { name: true } } } } },
    });

    if (!currentUser) {
      return { ...NULL_STATS };
    }

    const currentUserRole = currentUser.roles[0]?.role?.name as Roles;

    switch (currentUserRole) {
      case Roles.SUPERADMIN:
        return this.getSuperAdminStats();
      case Roles.ADMINISTRATOR:
        return this.getAdministratorStats(currentUserId);
      case Roles.ADMIN:
        return this.getAdminStats(currentUserId);
      default:
        return { ...NULL_STATS };
    }
  }

  // ─── SUPERADMIN ───────────────────────────────────────────────────────────────
  private async getSuperAdminStats(): Promise<DashboardStatsDto> {
    const [totalCompanies, totalBranches, totalUsers, totalDoctors] = await Promise.all([
      prisma.company.count(),
      prisma.branch.count(),
      prisma.user.count({
        where: { roles: { some: { role: { name: Roles.USER } } } },
      }),
      prisma.user.count({
        where: { roles: { some: { role: { name: Roles.DOCTOR } } } },
      }),
    ]);

    return {
      ...NULL_STATS,
      totalCompanies,
      totalBranches,
      totalUsers,
      totalDoctors,
    };
  }

  // ─── ADMINISTRATOR ────────────────────────────────────────────────────────────
  private async getAdministratorStats(currentUserId: string): Promise<DashboardStatsDto> {
    const userCompanies = await prisma.userCompany.findMany({
      where: { userId: currentUserId },
      select: { companyId: true },
    });

    const companyIds = userCompanies.map((uc) => uc.companyId);

    if (companyIds.length === 0) {
      return { ...NULL_STATS, totalCompanies: 0, totalBranches: 0, totalUsers: 0, totalDoctors: 0 };
    }

    const [totalBranches, totalUsers, totalDoctors] = await Promise.all([
      prisma.branch.count({
        where: { companyId: { in: companyIds } },
      }),
      prisma.user.count({
        where: {
          roles: { some: { role: { name: Roles.USER } } },
          userCompanyBranch: { some: { companyId: { in: companyIds } } },
        },
      }),
      prisma.user.count({
        where: {
          roles: { some: { role: { name: Roles.DOCTOR } } },
          userCompanyBranch: { some: { companyId: { in: companyIds } } },
        },
      }),
    ]);

    return {
      ...NULL_STATS,
      totalCompanies: companyIds.length,
      totalBranches,
      totalUsers,
      totalDoctors,
    };
  }

  // ─── ADMIN ────────────────────────────────────────────────────────────────────
  private async getAdminStats(currentUserId: string): Promise<DashboardStatsDto> {
    const userBranch = await prisma.userCompanyBranch.findFirst({
      where: { userId: currentUserId },
      select: { companyId: true, branchId: true },
    });

    if (!userBranch) {
      return { ...NULL_STATS, totalUsers: 0, totalDoctors: 0 };
    }

    const { companyId, branchId } = userBranch;

    const [totalUsers, totalDoctors] = await Promise.all([
      prisma.user.count({
        where: {
          roles: { some: { role: { name: Roles.USER } } },
          userCompanyBranch: { some: { companyId, branchId } },
        },
      }),
      prisma.user.count({
        where: {
          roles: { some: { role: { name: Roles.DOCTOR } } },
          userCompanyBranch: { some: { companyId, branchId } },
        },
      }),
    ]);

    return { ...NULL_STATS, totalUsers, totalDoctors };
  }
}
