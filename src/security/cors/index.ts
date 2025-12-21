import cors, { CorsOptions } from "cors";
import config from "../../config";
import logger from "../../utils/common/logger";

// 1. Pre-process origins outside the middleware to avoid re-splitting every request
const allowedOrigins = config.app.allowedOrigins
  ?.split(",")
  .map((o) => o.trim())
  .filter(Boolean) || ["http://localhost:3000"];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      logger.warn(`CORS blocked origin: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Client-ID",
    "X-Signature",
    "X-Timestamp",
    "X-Request-ID",
  ],
  exposedHeaders: ["X-Request-ID"],
  maxAge: 86400, // 24 hours
};

// 2. Export the standard middleware instance
export const corsMiddleware = cors(corsOptions);