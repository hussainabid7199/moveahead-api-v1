import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler.middleware';
import { TYPES } from '../config/ioc.types';
import container from '../config/ioc.config';
import authentication from '../middlewares/authentication.middleware';
import validateSchema from '../middlewares/validation.middleware';
import authorization from '../middlewares/authorization.middleware';
import { Roles } from '../enums/roles.enum';
import { BranchController } from '../controllers/branch.controller';
import { BranchUpdateValidator, BranchValidator } from '../validators/branch.validator';

const branchRouter = Router();

branchRouter.use(authentication);

const branchController = container.get<BranchController>(TYPES.BranchController);

branchRouter.post('/:companyId', validateSchema(BranchValidator), asyncHandler(authorization([Roles.SUPERADMIN, Roles.ADMINISTRATOR])), asyncHandler(branchController.create));
branchRouter.put('/:branchId/company/:companyId', validateSchema(BranchUpdateValidator), asyncHandler(authorization([Roles.SUPERADMIN, Roles.ADMINISTRATOR])), asyncHandler(branchController.update));
branchRouter.post('/:branchId/company/:companyId/user', asyncHandler(authorization([Roles.SUPERADMIN, Roles.ADMINISTRATOR, Roles.ADMIN])), asyncHandler(branchController.userBranchMapping));
branchRouter.post('/:branchId/company/:companyId/doctor', asyncHandler(authorization([Roles.SUPERADMIN, Roles.ADMINISTRATOR, Roles.ADMIN])), asyncHandler(branchController.doctorBranchMapping));

export default branchRouter;