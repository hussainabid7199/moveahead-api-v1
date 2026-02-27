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

  getAllBranchUsers = async (req: Request, res: Response) => {
    const companyId = req.params.companyId;
    const branchId = req.params.branchId;
    const currentUserId = req.body.currentUserId;
    const search = req.query.search as string;
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : null;
    const offset = req.query.offset ? parseInt(req.query.offset as string, 10) : null;
    if(!companyId || !branchId || !currentUserId) {
      throw new Error('Missing required details');
    }
    const users = await this.unitOfService.Branch.getAllBranchUsers(companyId, branchId, currentUserId, search,  limit || 10, offset || 0);
    const response = new CustomResponse('Users fetched successfully', 200, users);
    return res.status(200).json(response);
  }


  getByCompanyId = async (req: Request, res: Response) => {
    const companyId = req.params.companyId;
    const currentUserId = req.body.currentUserId;
    const search = req.query.search as string;
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : null;
    const offset = req.query.offset ? parseInt(req.query.offset as string, 10) : null;

    if(!companyId || !currentUserId) {
      throw new Error('Missing required details');
    }
    const branches = await this.unitOfService.Branch.getAllByCompanyId(companyId, currentUserId, search, limit || 10, offset || 0);
    const response = new CustomResponse('Branches fetched successfully', 200, branches);
    return res.status(200).json(response);
  }

  create = async (req: Request, res: Response) => {
    const currentUserId = req.body.currentUserId;
    const companyId = req.params.companyId;
    const { success, data } = await validateSchemaBody(req, BranchValidator);
    if (!success || !data) {
      throw new Error('Validation failed');
    }

    const latitude = Number(data.latitude);
    const longitude = Number(data.longitude);
    const branch = await this.unitOfService.Branch.create(currentUserId, companyId, { ...data, latitude, longitude });
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
    const latitude = Number(data.latitude);
    const longitude = Number(data.longitude);
    const branch = await this.unitOfService.Branch.update(currentUserId, companyId, branchId, { ...data, latitude, longitude });
    const response = new CustomResponse('Branch updated successfully', 200, branch);
    return res.status(200).json(response);
  };

  userBranchMapping = async (req: Request, res: Response) => {
    const currentUserId: string = req.body.currentUserId;
    const userId: string = req.body.userId;
    const companyId: string = req.params.companyId;
    const branchId: string = req.params.branchId;

    if(!currentUserId || !userId || !companyId || !branchId) {
      throw new Error('Missing required details');
    }

    const branch: string = await this.unitOfService.Branch.createUserBranchMapping(currentUserId, userId, companyId, branchId);
    const response = new CustomResponse('Branch created successfully', 201, branch);
    return res.status(201).json(response);
  };

  doctorBranchMapping = async (req: Request, res: Response) => {
    const currentUserId = req.body.currentUserId;
    const userId = req.body.userId;
    const companyId = req.params.companyId;
    const branchId = req.params.branchId;

    if(!currentUserId || !userId || !companyId || !branchId) {
      throw new Error('Missing required details');
    }

    const branch = await this.unitOfService.Branch.createDoctorBranchMapping(currentUserId, userId, companyId, branchId);
    const response = new CustomResponse('Branch created successfully', 201, branch);
    return res.status(201).json(response);
  };
}
