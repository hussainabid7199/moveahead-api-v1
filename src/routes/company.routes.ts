import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler.middleware';
import { TYPES } from '../config/ioc.types';
import container from '../config/ioc.config';
import authentication from '../middlewares/authentication.middleware';
import validateSchema from '../middlewares/validation.middleware';
import { CompanyController } from '../controllers/company.controller';
import { CompanyMappingValidator, CompanyUpdateValidator, CompanyValidator } from '../validators/company.validator';
import authorization from '../middlewares/authorization.middleware';
import { Roles } from '../enums/roles.enum';

const companyRouter = Router();

companyRouter.use(authentication);

const companyController = container.get<CompanyController>(TYPES.CompanyController);

companyRouter.get('/', asyncHandler(authorization([Roles.SUPERADMIN])), asyncHandler(companyController.findAll));
companyRouter.get('/:id', asyncHandler(authorization([Roles.SUPERADMIN])), asyncHandler(companyController.findById));
companyRouter.post('/', validateSchema(CompanyValidator), asyncHandler(authorization([Roles.SUPERADMIN])), asyncHandler(companyController.create));
companyRouter.put('/:id', validateSchema(CompanyUpdateValidator), asyncHandler(authorization([Roles.SUPERADMIN])), asyncHandler(companyController.update));
companyRouter.post('/mapping', validateSchema(CompanyMappingValidator), asyncHandler(authorization([Roles.SUPERADMIN, Roles.ADMINISTRATOR])), asyncHandler(companyController.mapping));

export default companyRouter;