import { Container } from 'inversify';
import { TYPES } from './ioc.types';

// Controllers imports
import { HealthController } from '../controllers/health.controller';
import { AccountController } from '../controllers/account.controller';
import { UserController } from '../controllers/user.controller';
import { EnquiryController } from '../controllers/enquiry.controller';
import { CompanyController } from '../controllers/company.controller';
import { BranchController } from '../controllers/branch.controller';
import { DashboardController } from '../controllers/dashboard.controller';


// Services imports
import UnitOfService from '../services/unitof.service';
import { UserService } from '../services/user.service';
import { EmailService } from '../services/email.service';
import { CompanyService } from '../services/company.service';
import { BranchService } from '../services/branch.service';
import { DashboardService } from '../services/dashboard.service';


const container = new Container();
// Controller  (Note: Controller should be binded first)
container.bind<HealthController>(TYPES.HealthController).to(HealthController);
container.bind<AccountController>(TYPES.AccountController).to(AccountController);
container.bind<UserController>(TYPES.UserController).to(UserController);
container.bind<EnquiryController>(TYPES.EnquiryController).to(EnquiryController);
container.bind<CompanyController>(TYPES.CompanyController).to(CompanyController);
container.bind<BranchController>(TYPES.BranchController).to(BranchController);
container.bind<DashboardController>(TYPES.DashboardController).to(DashboardController);

// Services (Note: Services should be binded last)
container.bind<UnitOfService>(TYPES.UnitOfService).to(UnitOfService);
container.bind<UserService>(TYPES.UserService).to(UserService);
container.bind<EmailService>(TYPES.EmailService).to(EmailService);
container.bind<CompanyService>(TYPES.CompanyService).to(CompanyService);
container.bind<BranchService>(TYPES.BranchService).to(BranchService);
container.bind<DashboardService>(TYPES.DashboardService).to(DashboardService);


export default container;
