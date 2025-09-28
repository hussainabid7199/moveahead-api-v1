import express from 'express';
import healthRouter from './health.routes';
import userRouter from './user.routes';
import accountRouter from './account.routes';
import appointmentRouter from './appointment.routes';
import doctorRouter from './doctor.routes';

const routes = express.Router();

routes.use('/health', healthRouter);
routes.use('/users', userRouter);
routes.use('/auth', accountRouter);
routes.use('/appointment', appointmentRouter);
routes.use('/doctor', doctorRouter);

export default routes;
