import container from '../config/ioc.config';
import { TYPES } from '../config/ioc.types';
import { validateSchemaBody } from '../middlewares/validation.middleware';
import UnitOfService from '../services/unitof.service';
import { Request, Response } from 'express';
import { BranchUpdateValidator, BranchValidator } from '../validators/branch.validator';
import CustomResponse from '../dtos/custom-response';

export class BranchController {
  constructor(private unitOfService = container.get<UnitOfService>(TYPES.UnitOfService)) {
    this.unitOfService = unitOfService;
  }

  create = async (req: Request, res: Response) => {
    const currentUserId = req.body.currentUserId;
    const companyId = req.params.companyId;
    const { success, data } = await validateSchemaBody(req, BranchValidator);
    if (!success || !data) {
      throw new Error('Validation failed');
    }
    const branch = await this.unitOfService.Branch.create(currentUserId, companyId, data);
    const response = new CustomResponse('Branch created successfully', 201, branch);
    return res.status(201).json(response);
  };

  update = async (req: Request, res: Response) => {
    const currentUserId = req.body.currentUserId;
    const companyId = req.params.companyId;
    const branchId = req.params.branchId;
    const { success, data } = await validateSchemaBody(req, BranchUpdateValidator);
    if (!success || !data) {
      throw new Error('Validation failed');
    }
    const branch = await this.unitOfService.Branch.update(currentUserId, companyId, branchId, data);
    const response = new CustomResponse('Branch updated successfully', 200, branch);
    return res.status(200).json(response);
  };
}
