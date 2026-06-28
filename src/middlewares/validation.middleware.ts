import { Request, Response, NextFunction, RequestHandler } from 'express';
import { z } from 'zod';
import CustomResponse from '../dtos/custom-response';
import PlainDto from '../dtos/plain.dto';

const validateSchema =
  (schema: z.ZodSchema): RequestHandler =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors = error.issues.map((err) => err.message);
        const response: CustomResponse<PlainDto> = {
          success: false,
          errors: validationErrors,
        };

        res.status(400).json(response);
        return;
      }

      const response: CustomResponse<PlainDto> = {
        success: false,
        message: 'internal server error occurred while validating the schema',
      };
      res.status(500).json(response);
      return;
    }
  };

export default validateSchema;

export const validateSchemaByBody = async (req: Request, schema: z.ZodSchema) => {
  try {
    await schema.parseAsync(req.body);
    const response: CustomResponse<PlainDto> = {
      success: true,
    };

    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const validationErrors = error.issues.map((err) => err.message);

      const response: CustomResponse<PlainDto> = {
        success: false,
        errors: validationErrors,
      };

      return response;
    }

    const response: CustomResponse<PlainDto> = {
      success: false,
      errors: ['internal server error occurred while validating the schema'],
    };

    return response;
  }
};


export const validateSchemaBody = async <T>(
  req: Request, 
  schema: z.ZodSchema<T>
): Promise<CustomResponse<T>> => {
  try {
    const parsedData = await schema.parseAsync(req.body);

    return {
      success: true,
      data: parsedData, // Now returning the actual body content
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.issues.map((err) => err.message),
      };
    }

    return {
      success: false,
      errors: ['Internal server error occurred while validating the schema'],
    };
  }
};
