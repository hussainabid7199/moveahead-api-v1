import logger from "../../utils/common/logger";

export class CorsOptions {
  static corsOptions() {
    const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [
      "http://localhost:3000",
    ];

    return {
      origin: (
        origin: string | undefined,
        callback: (err: Error | null, allow?: boolean) => void
      ) => {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          logger.warn(`CORS blocked origin: ${origin}`);
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "X-Client-ID",
        "X-Signature",
        "X-Timestamp",
        "X-Request-ID",
      ],
      exposedHeaders: ["X-Request-ID"],
      credentials: true,
      maxAge: 86400, // 24 hours
    };
  }
}
