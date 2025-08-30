import { Container } from 'inversify';
import { TYPES } from './ioc.types';

import { HealthController } from '../controllers/health.controller';
import { AccountController } from '../controllers/account.controller';
import { UserController } from '../controllers/user.controller';

import UnitOfService from '../services/unitof.service';
import { UserService } from '../services/user.service';


const container = new Container();

container.bind<HealthController>(TYPES.HealthController).to(HealthController);
container.bind<AccountController>(TYPES.AccountController).to(AccountController);
container.bind<UserController>(TYPES.UserController).to(UserController);

container.bind<UnitOfService>(TYPES.UnitOfService).to(UnitOfService);
container.bind<UserService>(TYPES.UserService).to(UserService);

export default container;
