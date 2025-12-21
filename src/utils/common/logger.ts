import winston from "winston";

const isProduction = process.env.APP_MODE === "production";

// --------------------
// Log levels
// --------------------
const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

// --------------------
// Format
// --------------------
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.errors({ stack: true }),
  winston.format.json()
);

// --------------------
// Console transport (always safe)
// --------------------
const consoleTransport = new winston.transports.Console({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.printf(({ timestamp, level, message, ...meta }) => {
      const metaStr = Object.keys(meta).length ? JSON.stringify(meta) : "";
      return `${timestamp} [${level}]: ${message} ${metaStr}`;
    })
  ),
});

// --------------------
// Build transports dynamically
// --------------------
const transports: winston.transport[] = [consoleTransport];

if (!isProduction) {
  transports.push(
    new winston.transports.File({
      filename: "logs/app.log",
      maxsize: 5 * 1024 * 1024,
      maxFiles: 5,
    }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
      maxsize: 5 * 1024 * 1024,
      maxFiles: 5,
    })
  );
}

// --------------------
// Logger
// --------------------
export const logger = winston.createLogger({
  levels: logLevels,
  level: process.env.LOG_LEVEL || "info",
  format: logFormat,
  defaultMeta: { service: "MOVE AHEAD" },
  transports,
  exceptionHandlers: !isProduction
    ? [new winston.transports.File({ filename: "logs/exceptions.log" })]
    : [consoleTransport],
  rejectionHandlers: !isProduction
    ? [new winston.transports.File({ filename: "logs/rejections.log" })]
    : [consoleTransport],
});

// --------------------
// Additional loggers
// --------------------
export const securityLogger = winston.createLogger({
  levels: logLevels,
  level: "info",
  format: logFormat,
  defaultMeta: { service: "MOVE AHEAD", category: "security" },
  transports,
});

export const performanceLogger = winston.createLogger({
  levels: logLevels,
  level: "info",
  format: logFormat,
  defaultMeta: { service: "MOVE AHEAD", category: "performance" },
  transports,
});

export const auditLogger = winston.createLogger({
  levels: logLevels,
  level: "info",
  format: logFormat,
  defaultMeta: { service: "MOVE AHEAD", category: "audit" },
  transports,
});

// --------------------
// Utils (unchanged)
// --------------------
export const logUtils = {
  logRequest: (requestId: string, method: string, path: string, ip: string, userAgent?: string) => {
    logger.info("Request received", { requestId, method, path, ip, userAgent });
  },

  logResponse: (requestId: string, statusCode: number, duration: number) => {
    performanceLogger.info("Request completed", { requestId, statusCode, duration });
  },

  logSecurity: (event: string, details: Record<string, any>) => {
    securityLogger.warn(`Security event: ${event}`, { event, ...details });
  },

  logAudit: (action: string, userId?: string, details?: Record<string, any>) => {
    auditLogger.info(`Audit: ${action}`, { action, userId, ...details });
  },

  logError: (error: Error, context?: Record<string, any>) => {
    logger.error("Application error", {
      message: error.message,
      stack: error.stack,
      ...context,
    });
  },
};

export default logger;
