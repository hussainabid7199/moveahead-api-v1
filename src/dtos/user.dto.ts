import { AuthProvider, UserRole } from '../prisma/generated';

export interface UserDto {
  id: string;
  email: string;
  passwordHash?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  displayName?: string | null;
  phoneNumber?: string | null;
  profileImageUrl?: string | null;
  provider?: AuthProvider;
  providerId?: string | null;
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  isActive?: boolean;
  timezone?: string | null;
  locale?: string | null;
  metadata?: any;
  createdAt: Date;
  updatedAt?: Date | null;
  roles?: string[];
}

export interface CreateUserDto {
  email: string;
  passwordHash?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  phoneCountryCode?: string;
  dateOfBirth?: Date;
  profileImageUrl?: string;
  provider?: AuthProvider;
  providerId?: string;
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  twoFactorEnabled?: boolean;
  twoFactorSecret?: string;
  role?: UserRole;
  isActive?: boolean;
}

export interface UpdateUserDto extends Partial<CreateUserDto> {}
