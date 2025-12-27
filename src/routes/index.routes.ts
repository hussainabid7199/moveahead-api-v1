import express from 'express';
import healthRouter from './health.routes';
import userRouter from './user.routes';
import accountRouter from './account.routes';
import enquiryRouter from './enquiry.routes';
import companyRouter from './company.routes';
import branchRouter from './branch.routes';

const routes = express.Router();

routes.use('/health', healthRouter);
routes.use('/users', userRouter);
routes.use('/auth', accountRouter);
routes.use('/enquiry', enquiryRouter);
routes.use('/company', companyRouter);
routes.use('/branch', branchRouter);

export default routes;