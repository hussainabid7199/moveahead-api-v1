
import { z } from 'zod';

export const CompanyValidator = z.object({
  name: z.string().min(1, 'Company name is required'),
  website: z.string().max(255).nullable().optional(),
});

export const CompanyUpdateValidator = CompanyValidator.extend({
  isVerified: z.boolean().optional(),
  isActive: z.boolean().optional(),
});

export const CompanyMappingValidator = z.object({
  userId: z.string().min(1, 'User is required'),
  companyId: z.string().min(1, 'Company is required'),
  branchId: z.string().optional().nullable(),
})

export type CompanyModel = z.infer<typeof CompanyValidator>;
export type CompanyUpdateModel = z.infer<typeof CompanyUpdateValidator>;
export type CompanyMappingModel = z.infer<typeof CompanyMappingValidator>;