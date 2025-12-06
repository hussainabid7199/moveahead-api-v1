import container from '../config/ioc.config';
import { TYPES } from '../config/ioc.types';
import CustomResponse from '../dtos/custom-response';
import { validateSchemaByBody } from '../middlewares/validation.middleware';
import UnitOfService from '../services/unitof.service';
import { Request, Response } from 'express';
import { AppointmentValidator } from '../validators/appointment.validator';
import { injectable } from 'inversify';
import { AppointmentFilterParams } from '../params/appointment.prams';

export class AppointmentController {
  constructor(private unitOfService = container.get<UnitOfService>(TYPES.UnitOfService)) {
    this.unitOfService = unitOfService;
  }

  // Define your controller methods here
  getAllAppointments = async (req: Request, res: Response): Promise<Response> => {
    const { doctorProfileId, locationId, serviceId, status } = req.query as AppointmentFilterParams;

    const appointments = await this.unitOfService.Appointment.getAll({
      doctorProfileId,
      locationId,
      serviceId,
      status,
    });
    const response = new CustomResponse('Appointment data retrieved successfully', appointments);
    return res.status(200).json(response);
  };

  getById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const appointment = await this.unitOfService.Appointment.getById(id);
    const response = new CustomResponse('Appointment data retrieved successfully', appointment);
    return res.status(200).json(response);
  };

  // getAppointmentDetailsById = async (req: Request, res: Response): Promise<Response> => {
  //   const { id } = req.params;
  //   const appointmentDetails = await this.unitOfService.Appointment.getAppointmentDetailsById(id);
  //   const response = new CustomResponse('Appointment details retrieved successfully', appointmentDetails);
  //   return res.status(200).json(response);
  // };

  // create = async (req: Request, res: Response): Promise<Response> => {
  //   const userId: string = req.body.currentUserId;

  //   const validation = await validateSchemaByBody(req, AppointmentValidator);
  //   if (validation && !validation.success) {
  //     return res.status(400).json(validation);
  //   }

  //   const data = AppointmentValidator.parse(req.body);

  //   const appointment = await this.unitOfService.Appointment.create(userId, data);
  //   if (!appointment) {
  //     throw new CustomResponse('Failed to create appointment', 400);
  //   }
  //   const response = new CustomResponse('Appointment created successfully', appointment);
  //   return res.status(201).json(response);
  // };

  // update = async (req: Request, res: Response): Promise<Response> => {
  //   const userId: string = req.body.currentUserId;
  //   const { id } = req.params;

  //   const validation = await validateSchemaByBody(req, AppointmentValidator);
  //   if (validation && !validation.success) {
  //     return res.status(400).json(validation);
  //   }

  //   const data = AppointmentValidator.parse(req.body);

  //   const updatedAppointment = await this.unitOfService.Appointment.update(id, userId, data);
  //   const response = new CustomResponse('Appointment updated successfully', updatedAppointment);
  //   return res.status(200).json(response);
  // };
}
