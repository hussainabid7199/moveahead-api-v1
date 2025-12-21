import logger from "../../utils/common/logger";

export class CorsOptions {
  static corsOptions() {
    const allowedOrigins =
      process.env.ALLOWED_ORIGINS?.split(',')
        .map(o => o.trim())
        .filter(Boolean) || ['http://localhost:3000'];

    return {
      origin: (
        origin: string | undefined,
        callback: (err: Error | null, allow?: boolean) => void
      ) => {
        // Allow non-browser clients (Postman, curl)
        if (!origin) {
          return callback(null, true);
        }

        if (allowedOrigins.includes(origin)) {
          return callback(null, true); // ✅ allow
        }

        logger.warn(`CORS blocked origin: ${origin}`);
        return callback(new Error('Not allowed by CORS'));
      },

      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'X-Client-ID',
        'X-Signature',
        'X-Timestamp',
        'X-Request-ID',
      ],
      exposedHeaders: ['X-Request-ID'],
      maxAge: 86400,
    };
  }
}
