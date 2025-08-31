import { Container } from 'inversify';
import { TYPES } from './ioc.types';

import { HealthController } from '../controllers/health.controller';
import { AccountController } from '../controllers/account.controller';
import { UserController } from '../controllers/user.controller';

import UnitOfService from '../services/unitof.service';
import { UserService } from '../services/user.service';
import { AppointmentService } from '../services/appointment.service';
import { AppointmentController } from '../controllers/appointment.controller';


const container = new Container();

container.bind<HealthController>(TYPES.HealthController).to(HealthController);
container.bind<AccountController>(TYPES.AccountController).to(AccountController);
container.bind<UserController>(TYPES.UserController).to(UserController);
container.bind<AppointmentController>(TYPES.AppointmentController).to(AppointmentController);

container.bind<UnitOfService>(TYPES.UnitOfService).to(UnitOfService);
container.bind<UserService>(TYPES.UserService).to(UserService);
container.bind<AppointmentService>(TYPES.AppointmentService).to(AppointmentService);

export default container;
