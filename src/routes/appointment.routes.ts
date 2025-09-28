import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler.middleware';
import { UserController } from '../controllers/user.controller';
import { TYPES } from '../config/ioc.types';
import container from '../config/ioc.config';
import authentication from '../middlewares/authentication.middleware';
import { Roles } from '../enums/roles.enum';
import authorization from '../middlewares/authorization.middleware';
import { AppointmentController } from '../controllers/appointment.controller';

const appointmentRouter = Router();

appointmentRouter.use(authentication);

const appointmentController = container.get<AppointmentController>(TYPES.AppointmentController);

appointmentRouter.get('/', asyncHandler(appointmentController.getAllAppointments));
appointmentRouter.get('/:id', asyncHandler(appointmentController.getById));
// appointmentRouter.post('/', asyncHandler(appointmentController.create));
// appointmentRouter.put('/:id', asyncHandler(appointmentController.update));

export default appointmentRouter;
