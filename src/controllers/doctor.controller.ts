import container from '../config/ioc.config';
import { TYPES } from '../config/ioc.types';
import UnitOfService from '../services/unitof.service';
import { Request, Response } from 'express';
import { DoctorProfileValidator } from '../validators/doctor.validator';
import { validateSchemaByBody } from '../middlewares/validation.middleware';
import CustomResponse from '../dtos/custom-response';

export class DoctorController {
  constructor(private unitOfService = container.get<UnitOfService>(TYPES.UnitOfService)) {
    this.unitOfService = unitOfService;
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    const userId: string = req.body.currentUserId;

    const validation = await validateSchemaByBody(req, DoctorProfileValidator);
    if (validation && !validation.success) {
      return res.status(400).json(validation);
    }

    const data = DoctorProfileValidator.parse(req.body);
    data.userId = userId;

    const profile = await this.unitOfService.Doctor.create(data);
    if (!profile) {
      throw new CustomResponse('Failed to create doctor profile', 400);
    }
    const response = new CustomResponse('Doctor profile created successfully', profile);
    return res.status(201).json(response);
  };

 
}
