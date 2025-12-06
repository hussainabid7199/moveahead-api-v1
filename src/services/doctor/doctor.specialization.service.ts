import { Specialization } from './../../prisma/generated/index.d';
import { injectable } from 'inversify';
import prisma from '../../prisma';
import { DoctorSpecializationDto, SpecializationDto } from '../../dtos/doctor.dto';

@injectable()
export class DoctorSpecializationService {
  constructor() {}

  getAllSpecializations = async (): Promise<SpecializationDto[]> => {
    const specializations = await prisma.specialization.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return specializations;
  };

  getDoctorSpecializationByDoctorProfileId = async (doctorProfileId: string): Promise<DoctorSpecializationDto[]> => {
    return await prisma.doctorSpecialization.findMany({
      where: { doctorProfileId: doctorProfileId, isActive: true },
      select: {
        id: true,
        specialization: true,
        documentUrl: true,
        isVerified: true,
      },
    });
  };

  create = async (doctorProfileId: string, specialization: string, documentUrl: string): Promise<DoctorSpecializationDto> => {
    // Check doctor profile exists
    const doctorProfile = await prisma.doctorProfile.findFirst({
      where: {
        id: doctorProfileId,
        isActive: true,
      },
    });

    if (!doctorProfile) {
      throw new Error('Doctor profile not found');
    }

    // Check specialization exists
    const specializationRecord = await prisma.specialization.findFirst({
      where: {
        name: specialization,
        isActive: true,
      },
    });

    if (!specializationRecord) {
      throw new Error('Specialization not found');
    }

    const specializationExists = await prisma.doctorSpecialization.findFirst({
      where: {
        doctorProfileId: doctorProfileId,
        specialization: specialization,
        isActive: true,
      },
    });

    if (specializationExists) {
      throw new Error('Specialization already exists');
    }

    const response = await prisma.$transaction(async (tx) => {
      const newSpecialization = await tx.doctorSpecialization.create({
        data: {
          doctorProfileId: doctorProfileId,
          specialization: specialization,
          documentUrl: documentUrl,
          isVerified: false,
          verifiedBy: null,
          isActive: true,
        },
        select: {
          id: true,
          specialization: true,
          documentUrl: true,
          isVerified: true,
        },
      });

      if (!newSpecialization) {
        throw new Error('Failed to create specialization');
      }

      return newSpecialization;
    });

    return response;
  };

  // Verify a doctor's specialization
  verifySpecialization = async (doctorSpecializationId: string, userId: string): Promise<DoctorSpecializationDto> => {
    // Check specialization exists
    const specialization = await prisma.doctorSpecialization.findFirst({
      where: {
        id: doctorSpecializationId,
        isActive: true,
      },
    });

    if (!specialization) {
      throw new Error('Specialization not found');
    }

    if (specialization.isVerified) {
      throw new Error('Specialization already verified');
    }

    const updatedSpecialization = await prisma.doctorSpecialization.update({
      where: {
        id: doctorSpecializationId,
      },
      data: {
        isVerified: true,
        verifiedBy: userId,
      },
      select: {
        id: true,
        specialization: true,
        documentUrl: true,
        isVerified: true,
      },
    });
    return updatedSpecialization;
  };

  // Delete a doctor's specialization (soft delete)
  delete = async (doctorSpecializationId: string): Promise<boolean> => {
    // Check specialization exists
    const specialization = await prisma.doctorSpecialization.findFirst({
      where: {
        id: doctorSpecializationId,
        isActive: true,
      },
    });
    if (!specialization) {
      throw new Error('Specialization not found');
    }

    const response = await prisma.$transaction(async (tx) => {
      const newSpecialization = await tx.doctorSpecialization.update({
        where: {
          id: doctorSpecializationId,
        },
        data: {
          isActive: false,
        },
      });

      return newSpecialization;
    });
    if (!response) {
      throw new Error('Failed to delete specialization');
    }
    return true;
  };
}
