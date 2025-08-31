import { AppointmentController } from "../controllers/appointment.controller";

export const TYPES = {
  HealthController: Symbol.for('HealthController'),
  UserController: Symbol.for('UserController'),
  AccountController: Symbol.for('AccountController'),
  AppointmentController: Symbol.for('AppointmentController'),

  UnitOfService: Symbol.for('UnitOfService'),
  UserService: Symbol.for('UserService'),
  AppointmentService: Symbol.for('AppointmentService'),
};
