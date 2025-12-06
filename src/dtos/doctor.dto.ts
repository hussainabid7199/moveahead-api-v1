import { Decimal } from "@prisma/client/runtime/library";

export default interface DoctorProfileDto {
  userId: string;
  fullName: string;
  bio?: string | null | undefined;
  website?: string | null | undefined;
  overallRating: Decimal | null | undefined;
  profileImageUrl?: string | null | undefined;
  documentUrl?: string | null | undefined;
  doctorSpecialization?: Pick<DoctorSpecializationDto, 'id' | 'specialization' | 'documentUrl' | 'isVerified'>[];
  resumeUrl?: string | null | undefined;
  isVerified?: boolean | null | undefined;
  verifiedBy?: string | null | undefined;
  isActive?: boolean | null | undefined;
  createdAt?: Date | undefined;
}

export interface SpecializationDto {
  id: string;
  name: string;
  description?: string | null | undefined;
  isActive?: boolean | null | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}

export interface DoctorSpecializationDto {
  id: string;
  specialization: string;
  documentUrl?: string | null | undefined;
  isVerified?: boolean | null | undefined;
}
