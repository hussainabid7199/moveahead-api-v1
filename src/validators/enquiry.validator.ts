import { z } from 'zod';

export const EnquiryValidator = z.object({
  fullName: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  phone: z.string().max(15, 'Phone number is too long').optional(),
  service: z.string().min(1, 'Service is required'),
  message: z.string().max(1000, 'Message is too long').optional(),
});

export type EnquiryModel = z.infer<typeof EnquiryValidator>;