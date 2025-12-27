export default interface CompanyDto {
  name: string;
  website?: string | null;
  isVerified?: boolean;
  isActive?: boolean;
  createdAt?: Date;
}
