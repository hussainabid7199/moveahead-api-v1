import { Branch } from './../prisma/generated/index.d';
import container from '../config/ioc.config';
import { TYPES } from '../config/ioc.types';
import { CompanyService } from './company.service';
import { EmailService } from './email.service';
import UserService from './user.service';
import { BranchService } from './branch.service';
import { DashboardService } from './dashboard.service';
import { DepartmentService } from './department.service';

export default class UnitOfService {
  public User: UserService;
  public Email: EmailService;
  public Company: CompanyService;
  public Branch: BranchService;
  public Dashboard: DashboardService;
  public Department: DepartmentService;
  constructor(
    user = container.get<UserService>(TYPES.UserService),
    email = container.get<EmailService>(TYPES.EmailService),
    company = container.get<CompanyService>(TYPES.CompanyService),
    branch = container.get<BranchService>(TYPES.BranchService),
    dashboard = container.get<DashboardService>(TYPES.DashboardService),
    department = container.get<DepartmentService>(TYPES.DepartmentService)
  ) {
    this.User = user;
    this.Email = email;
    this.Company = company;
    this.Branch = branch;
    this.Dashboard = dashboard;
    this.Department = department;
  }
}
