import { Container } from 'inversify';
import { TYPES } from './ioc.types';

import { HealthController } from '../controllers/health.controller';
import { AccountController } from '../controllers/account.controller';
import { UserController } from '../controllers/user.controller';
import { EnquiryController } from '../controllers/enquiry.controller';

import UnitOfService from '../services/unitof.service';
import { UserService } from '../services/user.service';
import { EmailService } from '../services/email.service';


const container = new Container();

container.bind<HealthController>(TYPES.HealthController).to(HealthController);
container.bind<AccountController>(TYPES.AccountController).to(AccountController);
container.bind<UserController>(TYPES.UserController).to(UserController);
container.bind<EnquiryController>(TYPES.EnquiryController).to(EnquiryController);

container.bind<UnitOfService>(TYPES.UnitOfService).to(UnitOfService);
container.bind<UserService>(TYPES.UserService).to(UserService);
container.bind<EmailService>(TYPES.EmailService).to(EmailService);

export default container;
