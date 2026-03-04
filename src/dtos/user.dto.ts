import { Roles } from '../enums/roles.enum';
import { AuthProvider } from '../prisma/generated';

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
  role?: Roles;
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
  role?: Roles;
  isActive?: boolean;
}

export interface UserBasicDto {
  id: string;
  email: string;
  firstName?: string | null;
  lastName?: string;
  phoneNumber?: string;
  phoneCountryCode?: string;
  dateOfBirth?: Date;
  profileImageUrl?: string;
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  role?: Roles;
  isActive?: boolean;
}

export interface UpdateUserDto extends Partial<CreateUserDto> {}
