import container from '../config/ioc.config';
import { TYPES } from '../config/ioc.types';
import { EmailService } from './email.service';
import UserService from './user.service';

export default class UnitOfService {
  public User: UserService;
  public Email: EmailService;
  constructor(
    user = container.get<UserService>(TYPES.UserService),
    email = container.get<EmailService>(TYPES.EmailService),
  ) {
    this.User = user;
    this.Email = email;
  }
}
