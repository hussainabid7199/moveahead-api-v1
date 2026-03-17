import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler.middleware';
import { TYPES } from '../config/ioc.types';
import container from '../config/ioc.config';
import authentication from '../middlewares/authentication.middleware';
import authorization from '../middlewares/authorization.middleware';
import { DashboardController } from '../controllers/dashboard.controller';
import { Roles } from '../enums/roles.enum';

const dashboardRouter = Router();

dashboardRouter.use(authentication);

const dashboardController = container.get<DashboardController>(TYPES.DashboardController);

dashboardRouter.get(
  '/stats',
  asyncHandler(authorization([Roles.SUPERADMIN, Roles.ADMINISTRATOR, Roles.ADMIN, Roles.DOCTOR, Roles.USER])),
  asyncHandler(dashboardController.getStats)
);

export default dashboardRouter;
