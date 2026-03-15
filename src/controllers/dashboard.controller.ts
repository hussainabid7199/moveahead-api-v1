import { Request, Response } from 'express';
import container from '../config/ioc.config';
import { TYPES } from '../config/ioc.types';
import CustomResponse from '../dtos/custom-response';
import UnitOfService from '../services/unitof.service';

export class DashboardController {
  constructor(private unitOfService = container.get<UnitOfService>(TYPES.UnitOfService)) {
    this.unitOfService = unitOfService;
  }

  getStats = async (req: Request, res: Response) => {
    const currentUserId: string = req.body.currentUserId;

    const stats = await this.unitOfService.Dashboard.getStats(currentUserId);
    const response = new CustomResponse('Dashboard stats fetched successfully', 200, stats);
    return res.status(200).json(response);
  };
}
