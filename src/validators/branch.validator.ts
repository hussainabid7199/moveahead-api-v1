import { z } from 'zod';

export const BranchValidator = z.object({
  name: z.string().min(1, 'Branch name is required'),
  address: z.string().min(1, 'Branch address is required').max(255, 'Branch address must be less than 255 characters'),
  phoneNumber: z
    .string({
      required_error: 'Phone number is required',
      invalid_type_error: 'Phone number must be a string',
    })
    .trim()
    .transform((value) => {
      // remove spaces
      const v = value.replace(/\s+/g, '');

      // if user entered 10-digit number, prefix +91
      if (/^[6-9]\d{9}$/.test(v)) {
        return `+91${v}`;
      }

      return v;
    })
    .refine((value) => /^\+91[6-9]\d{9}$/.test(value), {
      message: 'Phone number must be 10 digits or in format +91XXXXXXXXXX',
    }),
  latitude: z.number().min(1, 'Branch latitude is required').nullable().optional(),
  longitude: z.number().min(1, 'Branch longitude is required').nullable().optional(),
});

export const BranchUpdateValidator = BranchValidator.extend({
  isActive: z.boolean().optional(),
});

export type BranchModel = z.infer<typeof BranchValidator>;
export type BranchUpdateModel = z.infer<typeof BranchUpdateValidator>;
