export default interface DepartmentDto {
  id: string;
  parentId?: string | null;
  companyId: string;
  branchId?: string | null;
  name: string;
  description?: string | null;
  isActive: boolean;
  children?: DepartmentDto[];
  createdAt: Date;
  updatedAt?: Date | null;
}
