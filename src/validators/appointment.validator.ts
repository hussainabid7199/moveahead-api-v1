import { z } from 'zod';
import { AppointmentFor, AppointmentStatus } from '../enums/appointment.enum';

export const AppointmentValidator = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  status: z
    .string()
    .refine(
      (val) =>
        [
          AppointmentStatus.PENDING,
          AppointmentStatus.IN_PROGRESS,
          AppointmentStatus.SCHEDULED,
          AppointmentStatus.AWAITING_PAYMENT,
          AppointmentStatus.COMPLETED,
          AppointmentStatus.RESCHEDULED,
          AppointmentStatus.NO_SHOW,
          AppointmentStatus.CANCELLED,
        ].includes(val as AppointmentStatus),
      {
        message: 'Please select a valid status',
      }
    )
    .optional(),
  country: z.string().min(1, 'Country is required'),
  city: z.string().min(1, 'City is required'),
  locality: z.string().min(1, 'Locality is required'),
  appointmentSlot: z.coerce
    .date()
    .refine((val) => val instanceof Date && !isNaN(val.getTime()), { message: 'Appointment slot must be a valid date' }),
  appointmentFor: z
    .string()
    .refine(
      (val) =>
        [
          AppointmentFor.SELF,
          AppointmentFor.CHILD,
          AppointmentFor.SPOUSE,
          AppointmentFor.PARENT,
          AppointmentFor.SIBLING,
          AppointmentFor.OTHER_DEPENDENT,
        ].includes(val as AppointmentFor),
      {
        message: 'Please select a valid appointment for',
      }
    )
    .min(1, 'Appointment for is required').default(AppointmentFor.SELF),
});

export const TreatmentTypeValidator = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required').max(300, 'Description must be at most 300 characters long'),
});

export const ServiceTypeValidator = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required').max(300, 'Description must be at most 300 characters long'),
});

export const PaymentValidator = z.object({
  amount: z.string().min(1, 'Amount is required'),
  status: z.string().min(1, 'Status is required').max(50, 'Status must be at most 50 characters long'),
  paymentMethod: z.string().min(1, 'Payment method is required').max(100, 'Payment method must be at most 100 characters long'),
});

export type AppointmentModel = z.infer<typeof AppointmentValidator>;
export type TreatmentTypeModel = z.infer<typeof TreatmentTypeValidator>;
export type ServiceTypeModel = z.infer<typeof ServiceTypeValidator>;
export type PaymentModel = z.infer<typeof PaymentValidator>;
