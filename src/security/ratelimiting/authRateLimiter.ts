export class AuthRateLimiter {
  async authRateLimiter() {
    return {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 5, // limit each IP to 5 auth attempts per windowMs
      skipSuccessfulRequests: true,
      message: {
        error: "Too Many Authentication Attempts",
        message: "Too many authentication attempts, please try again later.",
        retryAfter: "15 minutes",
      },
    };
  }
}
