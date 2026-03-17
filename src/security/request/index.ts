import { Request, Response, NextFunction } from 'express';
import { UAParser } from 'ua-parser-js';
import CustomError from '../../exceptions/custom-error';
import { logUtils, securityLogger } from '../../utils/common/logger';

const maskSensitive = (body: any) => {
  if (!body || typeof body !== 'object') return body;
  const clone = { ...body };
  const sensitiveKeys = ['password', 'token', 'accessToken', 'refreshToken', 'secret', 'authorization'];

  for (const key of Object.keys(clone)) {
    if (sensitiveKeys.includes(key)) {
      clone[key] = '***';
    }
  }

  return clone;
};

const isBotUserAgent = (userAgent: string) => {
  if (!userAgent) return false;
  // Heuristic bot detection (kept simple and safe; avoids extra dependency)
  return /(bot|crawler|spider|crawling|slurp|bingpreview|facebookexternalhit|discordbot|slackbot|telegrambot|whatsapp|twitterbot|applebot|baiduspider|yandex|duckduckbot|embedly|quora link preview|skypeuripreview)/i.test(
    userAgent
  );
};

const RequestMiddleware = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.method && !req.url && !req.originalUrl) {
      throw new CustomError('Invalid request: Missing method or URL');
    }

    const start = process.hrtime.bigint();
    const requestId = (req.headers['x-request-id'] as string) || '';
    const userAgent = String(req.headers['user-agent'] || '');
    const parser = new UAParser(userAgent);
    const uaResult = parser.getResult();
    const botDetected = isBotUserAgent(userAgent);

    const uaSummary = [
      uaResult.browser?.name,
      uaResult.browser?.version,
      uaResult.os?.name,
      uaResult.device?.type,
    ]
      .filter(Boolean)
      .join(' ');

    const requestDetails = {
      requestId,
      ip: req.ip,
      method: req.method,
      url: req.originalUrl || req.url,
      query: req.query,
      params: req.params,
      body: maskSensitive(req.body),
      origin: req.headers.origin,
      referer: req.headers.referer,
      botDetection: {
        isBot: botDetected,
      },
      userAgent: {
        raw: userAgent,
        browser: uaResult.browser,
        engine: uaResult.engine,
        os: uaResult.os,
        cpu: uaResult.cpu,
        device: uaResult.device,
        // Aliases (as requested)
        ibrowser: uaResult.browser,
        iengine: uaResult.engine,
        ios: uaResult.os,
        icpu: uaResult.cpu,
        idevice: uaResult.device,
      },
      timestamp: new Date().toISOString(),
    };

    // Log into dated security log file in logs/ (file-only)
    securityLogger.info('HTTP Request', {
      type: 'http_request',
      requestId,
      method: req.method,
      path: req.originalUrl || req.url,
      ip: req.ip,
      uaSummary,
      botDetected,
      browser: uaResult.browser,
      os: uaResult.os,
      device: uaResult.device,
      cpu: uaResult.cpu,
      engine: uaResult.engine,
    });

    // Keep the full structured payload (JSON) in the dated security log for auditing
    securityLogger.debug('HTTP Request Details', {
      type: 'http_request_details',
      ...requestDetails,
    });

    res.on('finish', () => {
      const end = process.hrtime.bigint();
      const durationMs = Number(end - start) / 1_000_000;

      const responseDetails = {
        requestId,
        ip: req.ip,
        method: req.method,
        url: req.originalUrl || req.url,
        statusCode: res.statusCode,
        contentLength: res.getHeader('content-length') || 0,
        durationMs: Number(durationMs.toFixed(2)),
        timestamp: new Date().toISOString(),
      };

      securityLogger.info('HTTP Response', {
        type: 'http_response',
        requestId,
        method: req.method,
        path: req.originalUrl || req.url,
        statusCode: res.statusCode,
        durationMs: Number(durationMs.toFixed(2)),
      });

      securityLogger.debug('HTTP Response Details', {
        type: 'http_response_details',
        ...responseDetails,
      });

      // Keep existing performance logger (but with correct mapping)
      logUtils.logResponse(requestId || req.ip || 'unknown', res.statusCode, Number(durationMs.toFixed(2)));
    });

    next();
  };
};

export default RequestMiddleware;