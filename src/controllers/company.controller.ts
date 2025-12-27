import container from '../config/ioc.config';
import { TYPES } from '../config/ioc.types';
import CustomResponse from '../dtos/custom-response';
import { validateSchemaBody } from '../middlewares/validation.middleware';
import UnitOfService from '../services/unitof.service';
import { Request, Response } from 'express';
import { CompanyMappingValidator, CompanyUpdateValidator, CompanyValidator } from '../validators/company.validator';

export class CompanyController {
  constructor(private unitOfService = container.get<UnitOfService>(TYPES.UnitOfService)) {
    this.unitOfService = unitOfService;
  }

  findAll = async (req: Request, res: Response) => {
    const q = req.query.q as string;
    const companies = await this.unitOfService.Company.getAll(q);
    const response = new CustomResponse('Companies fetched successfully', 200, companies);
    return res.status(200).json(response);
  };

  findById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const company = await this.unitOfService.Company.getById(id);
    const response = new CustomResponse('Company fetched successfully', 200, company);
    return res.status(200).json(response);
  };

  create = async (req: Request, res: Response) => {
    const { success, data } = await validateSchemaBody(req, CompanyValidator);
    if (!success || !data) {
      throw new Error('Validation failed');
    }
    const company = await this.unitOfService.Company.create(data);
    const response = new CustomResponse('Company created successfully', 201, company);
    return res.status(201).json(response);
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { success, data } = await validateSchemaBody(req, CompanyUpdateValidator);
    if (!success || !data) {
      throw new Error('Validation failed');
    }
    const company = await this.unitOfService.Company.update(id, data);
    const response = new CustomResponse('Company updated successfully', 200, company);
    return res.status(200).json(response);
  };

  mapping = async (req: Request, res: Response) => {
    const currentUserId = req.body?.currentUserId || '';
    const { success, data } = await validateSchemaBody(req, CompanyMappingValidator);
    if (!success || !data) {
      throw new Error('Validation failed');
    }
    const company = await this.unitOfService.Company.companyMapping(currentUserId, data.userId, data.companyId);
    const response = new CustomResponse('Mapping completed successfully', 200, company);
    return res.status(200).json(response);
  };
}
