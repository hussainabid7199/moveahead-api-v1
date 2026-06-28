import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler.middleware';
import { TYPES } from '../config/ioc.types';
import container from '../config/ioc.config';
import authentication from '../middlewares/authentication.middleware';
import validateSchema from '../middlewares/validation.middleware';
import authorization from '../middlewares/authorization.middleware';
import { Roles } from '../enums/roles.enum';
import { DepartmentController } from '../controllers/department.controller';
import { DepartmentUpdateValidator } from '../validators/department.validator';

const departmentRouter = Router();

departmentRouter.use(authentication);

const departmentController = container.get<DepartmentController>(TYPES.DepartmentController);

departmentRouter.get('/:companyId', asyncHandler(authorization([Roles.SUPERADMIN, Roles.ADMINISTRATOR, Roles.ADMIN, Roles.DOCTOR, Roles.USER])), asyncHandler(departmentController.getAllByCompanyId));
departmentRouter.get('/:companyId/:id', asyncHandler(authorization([Roles.SUPERADMIN, Roles.ADMINISTRATOR, Roles.ADMIN, Roles.DOCTOR, Roles.USER])), asyncHandler(departmentController.getById));
departmentRouter.post('/:companyId', asyncHandler(authorization([Roles.ADMINISTRATOR])), asyncHandler(departmentController.create));
departmentRouter.put('/:companyId/:id', validateSchema(DepartmentUpdateValidator), asyncHandler(authorization([Roles.ADMINISTRATOR])), asyncHandler(departmentController.update));

export default departmentRouter;
