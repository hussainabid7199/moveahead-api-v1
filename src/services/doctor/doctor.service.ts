import { injectable } from 'inversify';
import prisma from '../../prisma';
import { DoctorProfileModel } from '../../validators/doctor.validator';
import CustomError from '../../exceptions/custom-error';
import DoctorProfileDto from '../../dtos/doctor.dto';
import { Prisma } from '../../prisma/generated';
import { DoctorProfileFilterParams } from '../../params/doctor_profile.params';

@injectable()
export class DoctorService {
  constructor() {}

  async getAll(params: DoctorProfileFilterParams): Promise<Partial<DoctorProfileDto>[]> {
    const whereCondition: Prisma.DoctorProfileWhereInput = {
      isActive: true,
    };

    if (params.fullName) {
      whereCondition.fullName = params.fullName;
    }

    if (params.overallRating) {
      whereCondition.overallRating = params.overallRating;
    }

    if (params.isVerified) {
      whereCondition.isVerified = params.isVerified;
    }

    const profiles = await prisma.doctorProfile.findMany({
      where: whereCondition,
      select: {
        id: true,
        userId: true,
        fullName: true,
        bio: true,
        website: true,
        overallRating: true,
        profileImageUrl: true,
        isVerified: true,
        verifiedBy: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return profiles;
  }

  getById = async (id: string): Promise<Partial<DoctorProfileDto>> => {
    const profile = await prisma.doctorProfile.findFirst({
      where: {
        id: id,
        isActive: true,
      },
      select: {
        id: true,
        userId: true,
        fullName: true,
        bio: true,
        website: true,
        overallRating: true,
        profileImageUrl: true,
        documentUrl: true,
        resumeUrl: true,
        doctorSpecialization: {
          select: {
            id: true,
            specialization: true,
            documentUrl: true,
            isVerified: true,
          },
        },
        isVerified: true,
        verifiedBy: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!profile) {
      throw new CustomError('Profile not found', 404);
    }
    return profile;
  };

  async create(model: DoctorProfileModel): Promise<Partial<DoctorProfileDto>> {
    const users = await prisma.user.findFirst({
      where: {
        id: model.userId || '',
        isActive: true,
      },
    });

    if (!users) {
      throw new CustomError('User not found', 404);
    }

    const doctorExists = await prisma.doctorProfile.findFirst({
      where: {
        userId: model.userId || '',
        isActive: true,
      },
    });

    if (doctorExists) {
      throw new CustomError('Profile already exists', 400);
    }

    try {
      const profile = await prisma.$transaction(async (tx) => {
        const newProfile = await tx.doctorProfile.create({
          data: {
            userId: model.userId || '',
            fullName: model.fullName,
            bio: model.bio,
            website: model.website,
            overallRating: model.overallRating || 0,
            profileImageUrl: model.profileImageUrl,
            documentUrl: model.documentUrl,
            resumeUrl: model.resumeUrl,
            isVerified: false,
            verifiedBy: null,
            isActive: true,
            createdAt: new Date(),
          },
        });

        return newProfile;
      });

      return profile;
    } catch (error) {
      throw new CustomError('Failed to create profile', 500);
    }
  }

  async update(id: string, model: DoctorProfileModel): Promise<Partial<DoctorProfileDto>> {
    const profile = await prisma.doctorProfile.findFirst({
      where: {
        id: id,
        isActive: true,
      },
    });

    if (!profile) {
      throw new CustomError('Profile not found', 404);
    }
    try {
      const updatedProfile = await prisma.doctorProfile.update({
        where: { id },
        data: {
          fullName: model.fullName,
          bio: model.bio,
          website: model.website,
          overallRating: model.overallRating || 0,
          profileImageUrl: model.profileImageUrl,
          documentUrl: model.documentUrl,
          resumeUrl: model.resumeUrl,
          updatedAt: new Date(),
        },
      });
      return updatedProfile;
    } catch (error) {
      throw new CustomError('Failed to update profile', 500);
    }
  }

  // Changing to soft delete
  async delete(id: string): Promise<void> {
    const profile = await prisma.doctorProfile.findFirst({
      where: {
        id: id,
        isActive: true,
      },
    });

    if (!profile) {
      throw new CustomError('Profile not found', 404);
    }
    try {
      await prisma.doctorProfile.update({
        where: { id },
        data: {
          isActive: false,
        },
      });
    } catch (error) {
      throw new CustomError('Failed to delete profile', 500);
    }
  }
}
