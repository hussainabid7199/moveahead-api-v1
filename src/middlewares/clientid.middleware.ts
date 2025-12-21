/// <reference path="../types/express.d.ts" />
import { Request, Response, NextFunction } from 'express';
import config from '../config';

class ClientIdMiddleware {
  verify(req: Request, res: Response, next: NextFunction) {
    // const url: string = req.originalUrl;

    // if (url.startsWith('/')) {
    //   return next();
    // }

    const clientId: string = Array.isArray(req.headers['x-client-id']) ? req.headers['x-client-id'][0] : req.headers['x-client-id'] || '';
    const _clientId = config.app.clientId;

    if (!clientId && config.app.mode) {
      throw new Error('ClientId header is missing');
    }

    if (clientId !== _clientId && config.app.mode) {
      throw new Error('Invalid Client Id');
    }

    req.clientId = clientId;

    // Call next to pass control to the next middleware or route handler
    next();
  }
}



export default new ClientIdMiddleware();
