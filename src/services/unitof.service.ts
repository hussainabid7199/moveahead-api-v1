import container from '../config/ioc.config';
import { TYPES } from '../config/ioc.types';
import { AppointmentService } from './appointment.service';
import UserService from './user.service';


export default class UnitOfService {
  public User: UserService;
  public Appointment: AppointmentService;
  constructor(
    user = container.get<UserService>(TYPES.UserService),
    appointment = container.get<AppointmentService>(TYPES.AppointmentService)
  ) {
    this.User = user;
    this.Appointment = appointment;
  }
}
