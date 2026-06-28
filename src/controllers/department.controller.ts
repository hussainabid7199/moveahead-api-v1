import container from '../config/ioc.config';
import { TYPES } from '../config/ioc.types';
import { validateSchemaBody } from '../middlewares/validation.middleware';
import UnitOfService from '../services/unitof.service';
import { Request, Response } from 'express';
import { DepartmentUpdateValidator, DepartmentValidator } from '../validators/department.validator';
import CustomResponse from '../dtos/custom-response';

export class DepartmentController {
  constructor(private unitOfService = container.get<UnitOfService>(TYPES.UnitOfService)) {
    this.unitOfService = unitOfService;
  }

  getAllByCompanyId = async (req: Request, res: Response) => {
    const companyId = req.params.companyId;
    const currentUserId = req.body.currentUserId;
    const branchId = req.query.branchId as string | undefined;
    const includeChildren = req.query.includeChildren === 'true';
    const search = req.query.search as string | undefined;
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : null;
    const offset = req.query.offset ? parseInt(req.query.offset as string, 10) : null;

    if (!companyId || !currentUserId) {
      throw new Error('Missing required details');
    }

    const result = await this.unitOfService.Department.getAllByCompanyId(
      companyId,
      currentUserId,
      branchId,
      includeChildren,
      search,
      limit || 10,
      offset || 0
    );
    const response = new CustomResponse('Departments fetched successfully', 200, result);
    return res.status(200).json(response);
  };

  getById = async (req: Request, res: Response) => {
    const companyId = req.params.companyId;
    const id = req.params.id;
    const currentUserId = req.body.currentUserId;

    if (!companyId || !id || !currentUserId) {
      throw new Error('Missing required details');
    }

    const department = await this.unitOfService.Department.getById(id, currentUserId);
    const response = new CustomResponse('Department fetched successfully', 200, department);
    return res.status(200).json(response);
  };

  create = async (req: Request, res: Response) => {
    const companyId = req.params.companyId;
    const currentUserId = req.body.currentUserId;

    const { success, data } = await validateSchemaBody(req, DepartmentValidator);
    if (!success || !data) {
      throw new Error('Validation failed');
    }

    const department = await this.unitOfService.Department.create(companyId, currentUserId, data);
    const response = new CustomResponse('Department created successfully', 201, department);
    return res.status(201).json(response);
  };

  update = async (req: Request, res: Response) => {
    const companyId = req.params.companyId;
    const id = req.params.id;
    const currentUserId = req.body.currentUserId;

    const { success, data } = await validateSchemaBody(req, DepartmentUpdateValidator);
    if (!success || !data) {
      throw new Error('Validation failed');
    }

    const department = await this.unitOfService.Department.update(id, companyId, currentUserId, data);
    const response = new CustomResponse('Department updated successfully', 200, department);
    return res.status(200).json(response);
  };
}
