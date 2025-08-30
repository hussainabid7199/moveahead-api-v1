import container from '../config/ioc.config';
import { TYPES } from '../config/ioc.types';
import UserService from './user.service';


export default class UnitOfService {
  public User: UserService;
  constructor(user = container.get<UserService>(TYPES.UserService)) {
    this.User = user;
  }
}
