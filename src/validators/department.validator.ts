import { z } from 'zod';

export const DepartmentValidator = z.object({
  name: z.string().min(1, 'Department name is required').max(100, 'Department name must be less than 100 characters'),
  description: z.string().max(500, 'Description must be less than 500 characters').optional().nullable(),
  parentId: z.string().optional().nullable(),
  branchId: z.string().optional().nullable(),
});

export const DepartmentUpdateValidator = DepartmentValidator.extend({
  isActive: z.boolean().optional(),
});

export type DepartmentModel = z.infer<typeof DepartmentValidator>;
export type DepartmentUpdateModel = z.infer<typeof DepartmentUpdateValidator>;
