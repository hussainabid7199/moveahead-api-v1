import { z } from 'zod';
export const DoctorProfileValidator = z.object({
  userId: z.string().nullable().optional(),
  fullName: z.string().min(1, 'Name is required'),
  bio: z.string().nullable().optional(),
  website: z.string().nullable().optional(),
  overallRating: z.number().nullable().optional(),
  profileImageUrl: z.string().max(1000, 'Max length of profile url is 1000').nullable().optional(),
  documentUrl: z.string().max(1000, 'Max length of document url is 1000').nullable().optional(),
  resumeUrl: z.string().max(1000, 'Max length of profile url is 1000').nullable().optional(),
  isVerified: z.boolean().default(false).nullable().optional(),
  verifiedBy: z.string().nullable().optional(),
  isActive: z.boolean().default(true).nullable().optional(),
  createdAt: z.date().default(new Date()).optional(),
});

export type DoctorProfileModel = z.infer<typeof DoctorProfileValidator>;