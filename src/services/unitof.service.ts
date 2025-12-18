import container from '../config/ioc.config';
import { TYPES } from '../config/ioc.types';
import { AppointmentService } from './appointment.service';
import { DoctorService } from './doctor/doctor.service';
import { EmailService } from './email.service';
import UserService from './user.service';


export default class UnitOfService {
  public User: UserService;
  public Appointment: AppointmentService;
  public Doctor: DoctorService;
  public Email: EmailService;
  constructor(
    user = container.get<UserService>(TYPES.UserService),
    appointment = container.get<AppointmentService>(TYPES.AppointmentService),
    doctor = container.get<DoctorService>(TYPES.DoctorService),
    email = container.get<EmailService>(TYPES.EmailService),
  ) {
    this.User = user;
    this.Appointment = appointment;
    this.Doctor = doctor;
    this.Email = email;
  }
}
