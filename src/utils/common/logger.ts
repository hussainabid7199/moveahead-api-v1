import winston from "winston";
import fs from "fs";
import path from "path";
import readline from "readline";

const isDevelopment = process.env.APP_MODE === "development";

const consoleTransport = new winston.transports.Console({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(({ timestamp, level, message, ...meta }) => {
      const { service, category, ...rest } = meta as Record<string, unknown>;
      const metaStr = Object.keys(rest).length ? ` ${JSON.stringify(rest)}` : "";
      return `${timestamp} [${level}]: ${message}${metaStr}`;
    })
  ),
});

const LOGS_DIR = path.resolve(process.cwd(), "logs");

const ensureLogsDir = () => {
  try {
    fs.mkdirSync(LOGS_DIR, { recursive: true });
  } catch {
    // Ignore; if it fails, transports will surface errors.
  }
};

const ensureLogFiles = (fileNames: string[]) => {
  for (const fileName of fileNames) {
    const fullPath = path.join(LOGS_DIR, fileName);
    try {
      // Open in append mode creates the file if it doesn't exist.
      const fd = fs.openSync(fullPath, "a");
      fs.closeSync(fd);
    } catch {
      // Ignore; transport will error if it cannot write.
    }
  }
};

const logFile = (fileName: string) => path.join(LOGS_DIR, fileName);

const parseLogTimestampMs = (timestamp: unknown) => {
  if (typeof timestamp !== "string" || !timestamp) return null;
  // Winston timestamp format: "YYYY-MM-DD HH:mm:ss" (local time)
  const isoLike = timestamp.includes("T") ? timestamp : timestamp.replace(" ", "T");
  const ms = Date.parse(isoLike);
  return Number.isFinite(ms) ? ms : null;
};

const pruneLogFileEntries = async (filePath: string, daysToKeep: number) => {
  const cutoffMs = Date.now() - daysToKeep * 24 * 60 * 60 * 1000;
  const tmpPath = `${filePath}.tmp`;

  try {
    const stat = await fs.promises.stat(filePath);
    if (!stat.isFile() || stat.size === 0) return;
  } catch {
    return;
  }

  const input = fs.createReadStream(filePath, { encoding: "utf8" });
  const output = fs.createWriteStream(tmpPath, { encoding: "utf8" });
  const rl = readline.createInterface({ input, crlfDelay: Infinity });

  let keptAny = false;

  try {
    for await (const line of rl) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      let keep = true;
      try {
        const obj = JSON.parse(trimmed);
        const tsMs = parseLogTimestampMs(obj?.timestamp);
        if (tsMs !== null) {
          keep = tsMs >= cutoffMs;
        }
      } catch {
        // If not JSON, keep to avoid accidental data loss
        keep = true;
      }

      if (keep) {
        output.write(trimmed + "\n");
        keptAny = true;
      }
    }
  } finally {
    rl.close();
    input.close();
    output.end();
  }

  await new Promise<void>((resolve) => output.on("finish", () => resolve()));

  if (!keptAny) {
    await fs.promises.writeFile(filePath, "", "utf8");
    await fs.promises.unlink(tmpPath).catch(() => undefined);
    return;
  }

  await fs.promises.copyFile(tmpPath, filePath);
  await fs.promises.unlink(tmpPath).catch(() => undefined);
};

const pruneAllLogFiles = async (daysToKeep: number) => {
  try {
    const files = [
      logFile("app.log"),
      logFile("error.log"),
      logFile("security.log"),
      logFile("performance.log"),
      logFile("audit.log"),
      logFile("exceptions.log"),
      logFile("rejections.log"),
    ];

    for (const file of files) {
      await pruneLogFileEntries(file, daysToKeep);
    }
  } catch {
    // Ignore retention errors (should not break app startup)
  }
};

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
// (Console transport intentionally disabled; file-only logging.)

// --------------------
// Build transports dynamically
// --------------------
if (isDevelopment) {
  ensureLogsDir();
  ensureLogFiles([
    "app.log",
    "error.log",
    "security.log",
    "performance.log",
    "audit.log",
    "exceptions.log",
    "rejections.log",
  ]);
  // Best-effort retention: delete log ENTRIES older than N days (keeps files)
  const retentionDays = Number(process.env.LOG_RETENTION_DAYS || 30);
  void pruneAllLogFiles(Number.isFinite(retentionDays) && retentionDays > 0 ? retentionDays : 30);
}

const transports: winston.transport[] = isDevelopment
  ? [
      new winston.transports.File({
        filename: logFile("app.log"),
        maxsize: 5 * 1024 * 1024,
        maxFiles: 5,
      }),
      new winston.transports.File({
        filename: logFile("error.log"),
        level: "error",
        maxsize: 5 * 1024 * 1024,
        maxFiles: 5,
      }),
    ]
  : [consoleTransport];

// --------------------
// Logger
// --------------------
export const logger = winston.createLogger({
  levels: logLevels,
  level: process.env.LOG_LEVEL || "info",
  format: logFormat,
  defaultMeta: { service: "MOVE AHEAD" },
  transports,
  exceptionHandlers: isDevelopment
    ? [new winston.transports.File({ filename: logFile("exceptions.log") })]
    : [consoleTransport],
  rejectionHandlers: isDevelopment
    ? [new winston.transports.File({ filename: logFile("rejections.log") })]
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
  transports: isDevelopment
    ? [
        new winston.transports.File({
          filename: logFile("security.log"),
          maxsize: 5 * 1024 * 1024,
          maxFiles: 5,
        }),
      ]
    : [consoleTransport],
});

export const performanceLogger = winston.createLogger({
  levels: logLevels,
  level: "info",
  format: logFormat,
  defaultMeta: { service: "MOVE AHEAD", category: "performance" },
  transports: isDevelopment
    ? [
        new winston.transports.File({
          filename: logFile("performance.log"),
          maxsize: 5 * 1024 * 1024,
          maxFiles: 5,
        }),
      ]
    : [consoleTransport],
});

export const auditLogger = winston.createLogger({
  levels: logLevels,
  level: "info",
  format: logFormat,
  defaultMeta: { service: "MOVE AHEAD", category: "audit" },
  transports: isDevelopment
    ? [
        new winston.transports.File({
          filename: logFile("audit.log"),
          maxsize: 5 * 1024 * 1024,
          maxFiles: 5,
        }),
      ]
    : [consoleTransport],
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
