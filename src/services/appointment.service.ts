import { injectable } from 'inversify';
import prisma from '../prisma';
import AppointmentDto, { AppointmentBasicDto } from '../dtos/appointment.dto';
import { AppointmentModel } from '../validators/appointment.validator';
import CustomError from '../exceptions/custom-error';

@injectable()
export class AppointmentService {
  constructor() {}

  getAll = async (): Promise<Partial<AppointmentDto>[]> => {
    const getAllAppointments = await prisma.appointment.findMany({
      where: {
        isActive: true,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        phoneNumber: true,
        country: true,
        city: true,
        locality: true,
        appointmentSlot: true,
        appointmentFor: true,
      },
    });
    if (getAllAppointments.length === 0) {
      throw new Error('No appointments found');
    }
    return getAllAppointments as Partial<AppointmentDto>[];
  };

  getById = async (id: string): Promise<Partial<AppointmentDto> | null> => {
    const appointment = await prisma.appointment.findUnique({
      where: {
        id: id,
        isActive: true,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        phoneNumber: true,
        country: true,
        city: true,
        locality: true,
        appointmentSlot: true,
        appointmentFor: true,
      },
    });
    return appointment as Partial<AppointmentDto> | null;
  };

  getAppointmentDetailsById = async (id: string): Promise<Partial<AppointmentBasicDto> | null> => {
    const appointment = await prisma.appointment.findUnique({
      where: {
        id: id,
        isActive: true,
      },
      include: {
        users: {
          select: {
            id: true,
            email: true,
            displayName: true,
            firstName: true,
            lastName: true,
            phoneNumber: true,
            profileImageUrl: true,
          },
        },
        treatmentTypes: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
        serviceTypes: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
        payment: {
          select: {
            id: true,
            amount: true,
            status: true,
            paymentMethod: true,
          },
        },
        doctorAppointment: {
          include: {
            doctorProfile: {
              select: {
                name: true,
                email: true,
                specialization: true,
                bio: true,
                website: true,
                overallRating: true,
              },
            },
          },
        },
      },
    });
    return appointment as Partial<AppointmentBasicDto> | null;
  };

  async create(userId: string, data: AppointmentModel): Promise<Partial<AppointmentDto>> {
    try {
      const appointment = await prisma.$transaction(async (tx) => {
        const newAppointment = await tx.appointment.create({
          data: {
            userId: userId,
            fullName: data.fullName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            country: data.country,
            city: data.city,
            locality: data.locality,
            appointmentSlot: data.appointmentSlot,
            appointmentFor: data.appointmentFor,
            isActive: true,
            createdBy: userId,
            createdAt: new Date(),
          },
        });

        return newAppointment as Partial<AppointmentDto>;
      });

      return appointment as Partial<AppointmentDto>;
    } catch (error) {
      throw new CustomError('Failed to create appointment', 500);
    }
  }

  update = async (id: string, userId: string, data: Partial<AppointmentModel>): Promise<Partial<AppointmentDto> | null> => {
    const appointmentExists = await prisma.appointment.findUnique({
      where: {
        id: id,
        isActive: true,
      },
      select: {
        id: true,
        status: true,
        createdBy: true,
      },
    });

    if (!appointmentExists) {
      throw new CustomError('Appointment not found', 404);
    }

    if (appointmentExists.status !== 'pending') {
      throw new CustomError('You can only update pending appointments', 403);
    }

    if (appointmentExists.createdBy !== userId) {
      throw new CustomError('You are not authorized to update this appointment', 403);
    }

    const update = await prisma.$transaction(async (tx) => {
      const updateAppointment = await tx.appointment.update({
        where: {
          id: appointmentExists.id,
          isActive: true,
        },
        data: {
          userId: userId,
          fullName: data.fullName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          country: data.country,
          city: data.city,
          locality: data.locality,
          appointmentSlot: data.appointmentSlot,
          appointmentFor: data.appointmentFor,
          isActive: true,
          updatedBy: userId,
          updatedAt: new Date(),
        },
      });

      return updateAppointment as Partial<AppointmentDto>;
    });

    return update;
  };

  delete = async (id: string, userId: string): Promise<Partial<boolean>> => {
    const appointmentExists = await prisma.appointment.findUnique({
      where: {
        id: id,
        isActive: true,
      },
      select: {
        id: true,
        status: true,
        createdBy: true,
      },
    });

    if (!appointmentExists) {
      throw new CustomError('Appointment not found', 404);
    }

    if (appointmentExists.status !== 'pending') {
      throw new CustomError('You can only delete pending appointments', 403);
    }

    if (appointmentExists.createdBy !== userId) {
      throw new CustomError('You are not authorized to delete this appointment', 403);
    }

    const deletedAppointment = await prisma.$transaction(async (tx) => {
      const deleteAppointment = await tx.appointment.update({
        where: {
          id: appointmentExists.id,
          isActive: true,
        },
        data: {
          isActive: false,
        },
      });

      return deleteAppointment;
    });

    if (!deletedAppointment) {
      return false;
    }

    return true;
  };
}
