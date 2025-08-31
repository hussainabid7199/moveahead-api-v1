import { Request, Response } from 'express';
import CustomResponse from '../dtos/custom-response';
import PasswordUtils from '../utils/password.utils';
import * as jwt from 'jsonwebtoken';
import config from '../config';
import container from '../config/ioc.config';
import { TYPES } from '../config/ioc.types';
import CustomError from '../exceptions/custom-error';
import { UserDto } from '../dtos/user.dto';
import { UserRole } from '../prisma/generated';
import UnitOfService from '../services/unitof.service';
import prisma from '../prisma';
import { Roles } from '../enums/roles.enum';
import { LoginModel } from '../validators/login.validator';
import { CreateUserModel } from '../validators/user.validator';

export class AccountController {
  constructor(private unitOfService = container.get<UnitOfService>(TYPES.UnitOfService)) {
    this.unitOfService = unitOfService;
  }

  /**
   * Handles user login by validating credentials and issuing a JWT token upon successful authentication.
   *
   * @param req - Express request object containing the login credentials in the request body.
   * @param res - Express response object used to send the response.
   * @returns A promise that resolves to an Express response containing a `CustomResponse` with a JWT token if authentication is successful,
   *          or an error message if authentication fails.
   *
   * @remarks
   * - The JWT token includes user information and is valid for 30 days.
   * - Returns HTTP 401 status code if the credentials are invalid.
   * - Returns HTTP 200 status code with the token if login is successful.
   */
  login = async (req: Request, res: Response): Promise<Response<CustomResponse<string>>> => {
    const model = req.body as LoginModel;
    let response: CustomResponse<string>;

    const user = await this.unitOfService.User.findByEmail(model.email, true);
    if (!user) {
      response = {
        success: false,
        message: 'Invalid username or password',
      };
      return res.status(401).json(response);
    }

    const isPasswordValid = await PasswordUtils.comparePassword(model.password, user.passwordHash || '');
    if (!isPasswordValid) {
      response = {
        success: false,
        message: 'Invalid username or password',
      };
      return res.status(401).json(response);
    }

    // Generate and sign a JWT that is valid for one hour.
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImageUrl: user.profileImageUrl,
        phoneNumber: user.phoneNumber,
        displayName: user.displayName,
        roles: user.roles,
      },
      config.jwt.secret,
      {
        expiresIn: '30d',
        algorithm: 'HS256',
        audience: config.jwt.audience,
        issuer: config.jwt.issuer,
        notBefore: '0',
      }
    );

    response = {
      success: true,
      message: 'Login successful',
      data: token,
    };

    return res.status(200).json(response);
  };

  /**
   * Registers a new user account.
   *
   * @param req - The Express request object containing user registration data in the body.
   * @param res - The Express response object used to send the response.
   * @returns A promise that resolves to an Express response containing a custom response with the created user data.
   * @throws {CustomError} If a user with the provided email already exists (409) or user creation fails (400).
   */
  register = async (req: Request, res: Response): Promise<Response<CustomResponse<UserDto>>> => {
    const data = req.body as CreateUserModel;
    let response: CustomResponse<UserDto>;

    const user = await this.unitOfService.User.findByEmail(data.email, false);
    if (user) {
      throw new CustomError('User already exists', 409);
    }

    // Find the default USER role id
    const userRole = await prisma.role.findUnique({ where: { name: 'USER' } });
    if (!userRole) {
      throw new CustomError('Default USER role not found', 500);
    }
    const newUser = await this.unitOfService.User.create(data, Roles.USER);
    if (!newUser) {
      throw new CustomError('User creation failed', 400);
    }

    response = {
      success: true,
      message: 'User created successfully',
      data: newUser,
    };

    return res.status(201).json(response);








  };

  /**
   * Handles the refresh of a JWT token.
   *
   * Verifies the provided refresh token from the request body, and if valid,
   * generates a new JWT token with the same user payload and returns it in the response.
   *
   * @param req - Express request object containing the refresh token in the body.
   * @param res - Express response object used to send the response.
   * @returns A promise that resolves to an Express response containing a `CustomResponse` with the new JWT token as a string.
   */
  refreshToken = async (req: Request, res: Response): Promise<Response<CustomResponse<string>>> => {
    const { token } = req.body;
    let response: CustomResponse<string>;

    const decoded = jwt.verify(token, config.jwt.secret || '', {
      audience: config.jwt.audience,
      issuer: config.jwt.issuer,
    });

    const newToken = jwt.sign(
      {
        id: (decoded as any).id,
        email: (decoded as any).email,
        firstName: (decoded as any).firstName,
        lastName: (decoded as any).lastName,
        profileImageUrl: (decoded as any).profileImageUrl,
        phoneNumber: (decoded as any).phoneNumber,
        displayName: (decoded as any).displayName,
        roles: (decoded as any).roles,
      },
      config.jwt.secret || '',
      {
        expiresIn: '30d',
        algorithm: 'HS256',
        audience: config.jwt.audience,
        issuer: config.jwt.issuer,
        notBefore: '0',
      }
    );

    response = {
      success: true,
      message: 'Token refreshed successfully',
      data: newToken,
    };

    return res.status(200).json(response);
  };

  /**
   * Logs out the current user by invalidating their authentication token.
   *
   * @param req - The Express request object.
   * @param res - The Express response object.
   * @returns A promise that resolves to an HTTP response containing a `CustomResponse` with a success message and null data.
   *
   * @remarks
   * The actual token invalidation logic depends on the token storage strategy (e.g., blacklisting).
   */
  logout = async (req: Request, res: Response): Promise<Response<CustomResponse<null>>> => {
    // Invalidate the token (implementation depends on token storage strategy, e.g., blacklist)
    const response: CustomResponse<null> = {
      success: true,
      message: 'Logout successful',
      data: null,
    };

    return res.status(200).json(response);
  };
}
