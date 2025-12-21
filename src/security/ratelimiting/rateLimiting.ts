import { securityLogger } from "../../utils/common/logger";
import { Response } from "express";
import rateLimit from "express-rate-limit";
import { AuthenticatedRequest } from "../../types";


const RateLimiter = () => {
  return rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
      error: "Too Many Requests",
      message: "You have exceeded the maximum number of requests. Please try again later.",
    },
    handler: (req: AuthenticatedRequest, res: Response) => {
      securityLogger.warn(`Rate limit exceeded`, {
        requestId: req.requestId,
        ip: req.ip,
        userAgent: req.headers["user-agent"],
      });
      res.status(429).json({
        error: "Too Many Requests",
        message:
          "You have exceeded the maximum number of requests. Please try again later.",
      });
    },
  });
};
export default RateLimiter;
