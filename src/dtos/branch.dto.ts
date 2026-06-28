export default interface BranchDto {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  latitude: number;
  longitude: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
