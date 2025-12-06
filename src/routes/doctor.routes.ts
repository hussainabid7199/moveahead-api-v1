import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler.middleware';
import { TYPES } from '../config/ioc.types';
import container from '../config/ioc.config';
import authentication from '../middlewares/authentication.middleware';
import { DoctorController } from '../controllers/doctor.controller';
import authorization from '../middlewares/authorization.middleware';
import { Roles } from '../enums/roles.enum';

const doctorRouter = Router();

doctorRouter.use(authentication);

const doctorController = container.get<DoctorController>(TYPES.DoctorController);

doctorRouter.post('/', asyncHandler(authorization([Roles.DOCTOR])), asyncHandler(doctorController.create));

export default doctorRouter;
