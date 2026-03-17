import { z } from 'zod';
import { AuthProvider } from '../prisma/generated';

export const CreateUserValidator = z.object({
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  password: z.string()
    .min(8, 'Password must contain at least 8 characters, one uppercase, one number and one special character')
    .regex(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special character'
    ),
  passwordHash: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  displayName: z.string().optional(),
  phoneNumber: z.string().optional(),
  phoneCountryCode: z.string().optional(),
  profileImageUrl: z.string().optional(),
  provider: z.string().default(AuthProvider.CREDENTIALS).optional(),
  providerId: z.string().optional(),
  isEmailVerified: z.boolean().optional(),
  isPhoneVerified: z.boolean().optional(),
  timezone: z.string().optional(),
  locale: z.string().optional(),
});

export type CreateUserModel = z.infer<typeof CreateUserValidator>;

