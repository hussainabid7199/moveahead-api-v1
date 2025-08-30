
import { z } from 'zod';

export const LoginValidator = z.object({
  email: z.string().min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean(),
});

export type LoginModel = z.infer<typeof LoginValidator>;
