import winston from 'winston';

// Define log levels
const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

// Custom log format
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.json(),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    return JSON.stringify({
      timestamp,
      level,
      message,
      ...meta,
    });
  })
);

// Create Winston logger
export const logger = winston.createLogger({
  levels: logLevels,
  level: process.env.LOG_LEVEL || 'info',
  format: logFormat,
  defaultMeta: { service: 'AI AGENT MICROSERVICE' },
  transports: [
    // Console transport
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.printf(({ timestamp, level, message, ...meta }) => {
          const metaStr = Object.keys(meta).length > 0 ? JSON.stringify(meta, null, 2) : '';
          return `${timestamp} [${level}]: ${message} ${metaStr}`;
        })
      ),
    }),
    
    // File transport for all logs
    new winston.transports.File({
      filename: 'logs/app.log',
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    
    // File transport for error logs only
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'logs/exceptions.log' })
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: 'logs/rejections.log' })
  ]
});

// Security-specific logger
export const securityLogger = winston.createLogger({
  levels: logLevels,
  level: 'info',
  format: logFormat,
  defaultMeta: { 
    service: 'AI AGENT MICROSERVICE',
    category: 'security'
  },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'logs/security.log',
      maxsize: 5242880,
      maxFiles: 10,
    }),
  ],
});

// Performance logger
export const performanceLogger = winston.createLogger({
  levels: logLevels,
  level: 'info',
  format: logFormat,
  defaultMeta: { 
    service: 'AI AGENT MICROSERVICE',
    category: 'performance'
  },
  transports: [
    new winston.transports.File({
      filename: 'logs/performance.log',
      maxsize: 5242880,
      maxFiles: 5,
    }),
  ],
});

// Audit logger for compliance
export const auditLogger = winston.createLogger({
  levels: logLevels,
  level: 'info',
  format: logFormat,
  defaultMeta: { 
    service: 'AI AGENT MICROSERVICE',
    category: 'audit'
  },
  transports: [
    new winston.transports.File({
      filename: 'logs/audit.log',
      maxsize: 10485760, // 10MB
      maxFiles: 20, // Keep more audit logs
    }),
  ],
});

// Helper functions for structured logging
export const logUtils = {
  logRequest: (requestId: string, method: string, path: string, ip: string, userAgent?: string) => {
    logger.info('Request received', {
      requestId,
      method,
      path,
      ip,
      userAgent,
      timestamp: new Date().toISOString()
    });
  },

  logResponse: (requestId: string, statusCode: number, duration: number) => {
    performanceLogger.info('Request completed', {
      requestId,
      statusCode,
      duration,
      timestamp: new Date().toISOString()
    });
  },

  logSecurity: (event: string, details: Record<string, any>) => {
    securityLogger.warn(`Security event: ${event}`, {
      event,
      ...details,
      timestamp: new Date().toISOString()
    });
  },

  logAudit: (action: string, userId?: string, details?: Record<string, any>) => {
    auditLogger.info(`Audit: ${action}`, {
      action,
      userId,
      ...details,
      timestamp: new Date().toISOString()
    });
  },

  logError: (error: Error, context?: Record<string, any>) => {
    logger.error('Application error', {
      message: error.message,
      stack: error.stack,
      ...context,
      timestamp: new Date().toISOString()
    });
  }
};

// If we're not in production, add console logging for debugging
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

export default logger;