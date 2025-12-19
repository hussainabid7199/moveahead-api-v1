import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler.middleware';
import { UserController } from '../controllers/user.controller';
import { TYPES } from '../config/ioc.types';
import container from '../config/ioc.config';
import authentication from '../middlewares/authentication.middleware';
import { EnquiryController } from '../controllers/enquiry.controller';
import { EnquiryValidator } from '../validators/enquiry.validator';
import validateSchema from '../middlewares/validation.middleware';

const enquiryRouter = Router();

enquiryRouter.use(authentication);

const enquiryController = container.get<EnquiryController>(TYPES.EnquiryController);

enquiryRouter.post('/email', [validateSchema(EnquiryValidator)], asyncHandler(enquiryController.enquiry));

export default enquiryRouter;