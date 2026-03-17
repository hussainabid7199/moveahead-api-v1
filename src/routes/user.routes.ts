import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler.middleware';
import { UserController } from '../controllers/user.controller';
import { TYPES } from '../config/ioc.types';
import container from '../config/ioc.config';
import authentication from '../middlewares/authentication.middleware';
import { Roles } from '../enums/roles.enum';
import authorization from '../middlewares/authorization.middleware';
import { uploadAvatar } from '../middlewares/upload.middleware';

const userRouter = Router();

userRouter.use(authentication);

const userController = container.get<UserController>(TYPES.UserController);

userRouter.get('/me', asyncHandler(userController.getCurrentUser));
userRouter.get('/getbyemail', asyncHandler(userController.getUserByEmail));
userRouter.get('/company/:companyId/branch/:branchId/mapping', asyncHandler(authorization([Roles.ADMINISTRATOR, Roles.ADMIN])), asyncHandler(userController.getAllUsersForBranchMapping));
userRouter.get('/:id', asyncHandler(userController.getUserById));
userRouter.put('/:id', asyncHandler(userController.update));
// Avatar upload — must come before the generic /:id POST to avoid route conflicts
userRouter.post('/:id/avatar', uploadAvatar, asyncHandler(userController.uploadAvatar));
userRouter.post('/company/:companyId/branch/:branchId/role/:roleName', asyncHandler(authorization([Roles.SUPERADMIN, Roles.ADMINISTRATOR, Roles.ADMIN])), asyncHandler(userController.create));
userRouter.delete('/:id', asyncHandler(authorization([Roles.SUPERADMIN])), asyncHandler(userController.delete));

export default userRouter;
