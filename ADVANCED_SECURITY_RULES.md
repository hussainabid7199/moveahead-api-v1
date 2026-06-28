# Advanced System Security Rules — Node.js / Express.js API
> **Standard:** OWASP Top 10 (2021) | NIST SP 800-53 Rev5 | CIS Controls v8 | Zero Trust Architecture
> **Framework:** Node.js 20+ LTS | Express.js 4.x/5.x | Healthcare-Grade Security
>
> ⚠️ **GitHub Copilot Context File** — Keep in `.github/` or project root.
> Copilot will use these patterns to suggest secure-by-default code.

---

## 📋 TABLE OF CONTENTS
1. [Zero Trust Architecture Principles](#zero-trust)
2. [Authentication & Token Security](#auth-tokens)
3. [Authorization & RBAC](#rbac)
4. [Input Validation & Sanitization](#input-validation)
5. [SQL / NoSQL Injection Prevention](#injection-prevention)
6. [API Security Headers](#security-headers)
7. [Rate Limiting & DDoS Protection](#rate-limiting)
8. [CORS Configuration](#cors)
9. [Cryptography Standards](#crypto)
10. [Secrets & Configuration Management](#secrets)
11. [Dependency Security](#dependency-security)
12. [Logging & Observability](#logging)
13. [Container & Infrastructure Security](#infrastructure)
14. [CI/CD Pipeline Security](#cicd)
15. [Incident Response Procedures](#incident-response)

---

## 1. Zero Trust Architecture Principles {#zero-trust}

```
ZERO TRUST CORE AXIOMS:
  "Never Trust, Always Verify"
  "Assume Breach at All Times"
  "Least Privilege Access Everywhere"
  "Verify Explicitly on Every Request"
```

```javascript
// ✅ Every request must be authenticated — no unauthenticated endpoints for sensitive data
// ✅ Every request must be authorized — authentication ≠ authorization
// ✅ Every service-to-service call must be mutually authenticated (mTLS)
// ✅ Network location is NOT a trust signal (internal IP ≠ trusted)
// ✅ Micro-segmentation: each microservice has its own identity and minimal permissions
// ✅ Continuous validation: re-verify on privilege-sensitive operations (not just at login)

// Zero Trust Request Validation Chain:
// Request → [TLS Termination] → [JWT Verify] → [Scope Check] → [RBAC] → [Rate Limit] → [Audit] → Handler
```

---

## 2. Authentication & Token Security {#auth-tokens}

### JWT Best Practices
```javascript
// ✅ COMPLIANT JWT configuration:
const JWT_CONFIG = {
  algorithm: 'RS256',          // Asymmetric — use RS256 or ES256, NEVER HS256 in production
  expiresIn: '15m',            // Short-lived access tokens
  issuer: 'https://auth.yourdomain.com',
  audience: 'https://api.yourdomain.com',
};

// ✅ Refresh token rotation on every use (detect token theft via re-use detection)
// ✅ Refresh tokens stored as httpOnly, secure, sameSite=strict cookies
// ✅ Access tokens stored only in memory (never localStorage — XSS vulnerable)
// ✅ Token blacklist / revocation list for logout and compromised tokens (use Redis)
// ✅ JWT payload must not contain PHI, passwords, or sensitive PII

// ❌ NEVER use:
// - HS256 with shared secret in multi-service environment
// - alg: 'none' (critical CVE pattern)
// - Long-lived access tokens (>1 hour for sensitive data)
// - JWT stored in localStorage
// - Skipping audience/issuer validation

// Verify pattern in Express.js middleware:
// function verifyJWT(req, res, next) {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) return res.status(401).json({ error: 'Unauthorized' });
//   try {
//     req.user = jwt.verify(token, PUBLIC_KEY, {
//       algorithms: ['RS256'],
//       issuer: process.env.JWT_ISSUER,
//       audience: process.env.JWT_AUDIENCE,
//     });
//     next();
//   } catch (err) {
//     return res.status(401).json({ error: 'Invalid token' });
//   }
// }
```

### Password Security
```javascript
// ✅ Bcrypt with cost factor ≥ 12 (or Argon2id — preferred)
// ✅ Minimum password: 12 characters, complexity enforced
// ✅ Breached password check (Have I Been Pwned API) on registration/change
// ✅ Account lockout: 5 failed attempts → 15-minute lockout + alert
// ✅ Progressive delay: exponential backoff on repeated failures
// ❌ MD5, SHA1, SHA256 (unsalted) for password hashing — NON-COMPLIANT
// ❌ Storing plain text passwords anywhere, including logs

// Argon2id example (preferred for new systems):
// const argon2 = require('argon2');
// const hash = await argon2.hash(password, {
//   type: argon2.argon2id,
//   memoryCost: 65536,   // 64 MB
//   timeCost: 3,
//   parallelism: 4,
// });
```

### API Key Security
```javascript
// ✅ API keys: 256-bit entropy minimum (crypto.randomBytes(32).toString('hex'))
// ✅ Store only HASH of API key in DB — never store plaintext
// ✅ API keys must be scoped (read-only, write, admin) — never all-access default
// ✅ API key rotation: notify users 30 days before forced rotation
// ✅ IP allowlisting for API keys used by backend systems
// ✅ API key usage anomaly detection (alert on geography change, volume spike)
// ❌ API keys in query parameters (appear in server logs)
// ❌ API keys in JavaScript client-side code
```

---

## 3. Authorization & RBAC {#rbac}

```javascript
// Role hierarchy for healthcare API (example):
const ROLES = {
  SUPER_ADMIN:   { level: 100, permissions: ['*'] },
  ORG_ADMIN:     { level: 80,  permissions: ['users:manage', 'reports:all', 'phi:read', 'phi:write'] },
  CLINICIAN:     { level: 60,  permissions: ['phi:read', 'phi:write', 'appointments:manage'] },
  NURSE:         { level: 50,  permissions: ['phi:read', 'vitals:write', 'appointments:read'] },
  RECEPTIONIST:  { level: 30,  permissions: ['appointments:manage', 'demographics:read'] },
  PATIENT:       { level: 10,  permissions: ['own_records:read', 'appointments:self'] },
  AUDITOR:       { level: 20,  permissions: ['audit_logs:read'] },  // Read-only audit role
};

// ✅ Enforce at route level with middleware — never trust client-sent roles
// ✅ Attribute-Based Access Control (ABAC) for fine-grained resource ownership
// ✅ Patients can ONLY access their own records — enforce owner check in ALL queries
// ✅ Privilege escalation must require re-authentication
// ✅ Separation of duties: admin account ≠ daily-use account

// Resource ownership check pattern:
// async function enforceOwnership(req, res, next) {
//   const record = await db.query('SELECT patient_id FROM records WHERE id = $1', [req.params.id]);
//   if (record.patient_id !== req.user.sub && !req.user.roles.includes('CLINICIAN')) {
//     auditLogger.warn({ event: 'UNAUTHORIZED_ACCESS_ATTEMPT', userId: req.user.sub });
//     return res.status(403).json({ error: 'Forbidden' });
//   }
//   next();
// }
```

---

## 4. Input Validation & Sanitization {#input-validation}

```javascript
// ✅ Validate ALL inputs at API boundary — trust NOTHING from client
// ✅ Schema validation: Joi or Zod for all request bodies
// ✅ Type coercion disabled: reject unexpected types strictly
// ✅ String length limits on every field
// ✅ Allowlisting over denylisting for input values
// ✅ Strip HTML tags from any string fields (DOMPurify server-side equivalent)
// ✅ Validate file uploads: MIME type + magic bytes + size limit
// ✅ Reject prototype pollution attempts: Object.freeze() critical objects

// Zod schema example:
// const PatientUpdateSchema = z.object({
//   mrn:      z.string().max(20).regex(/^[A-Z0-9-]+$/),
//   dob:      z.string().datetime(),
//   bloodType: z.enum(['A+','A-','B+','B-','O+','O-','AB+','AB-']),
//   notes:    z.string().max(5000).optional(),
// }).strict(); // .strict() rejects unknown keys

// ✅ XSS Prevention:
// - Encode output with appropriate context (HTML, JSON, URL, CSS)
// - Set Content-Type: application/json explicitly on all API responses
// - Never set Content-Type: text/html on data APIs

// ✅ Path Traversal Prevention:
// - Validate and sanitize all file path inputs
// - Use path.resolve() and verify result starts with expected base directory
// const safePath = path.resolve(BASE_DIR, userInput);
// if (!safePath.startsWith(BASE_DIR)) throw new Error('Path traversal detected');

// ❌ eval(), new Function(), setTimeout(string), setInterval(string) — RCE vectors
// ❌ JSON.parse() without schema validation after parsing
// ❌ req.params passed directly to DB queries or file system calls
```

---

## 5. SQL / NoSQL Injection Prevention {#injection-prevention}

```javascript
// ✅ ALWAYS use parameterized queries or ORM with safe query builders
// ✅ ORM usage: validate that ORM does not expose raw() or literal() with user input

// PostgreSQL (pg library) — COMPLIANT:
// const result = await pool.query(
//   'SELECT id, name FROM patients WHERE org_id = $1 AND status = $2',
//   [req.user.orgId, 'active']
// );

// MongoDB — COMPLIANT (prevent NoSQL injection):
// ✅ Validate that query operators ($where, $regex) are never constructed from user input
// ✅ Use mongoose with strict schema + sanitize inputs with mongo-sanitize
// const mongoSanitize = require('express-mongo-sanitize');
// app.use(mongoSanitize()); // Strips $ and . from user input keys

// ✅ Stored procedures for complex PHI queries — reduces injection surface
// ✅ Database user has minimum necessary permissions (no DROP/ALTER in app user)
// ✅ Separate read-only DB user for reporting/analytics queries

// ❌ NEVER DO:
// db.query(`SELECT * FROM users WHERE email = '${req.body.email}'`)
// Model.find({ name: req.body.name })  // MongoDB injection if name = { $gt: '' }
// db.query('SELECT * FROM ' + req.params.table)  // Table name injection
```

---

## 6. API Security Headers {#security-headers}

```javascript
// Required HTTP Security Headers for all Express.js API responses:

const SECURITY_HEADERS = {
  // Prevent MIME sniffing
  'X-Content-Type-Options': 'nosniff',

  // Prevent clickjacking
  'X-Frame-Options': 'DENY',

  // XSS protection (legacy browsers)
  'X-XSS-Protection': '1; mode=block',

  // Enforce HTTPS (1 year)
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',

  // Referrer policy — don't leak PHI URLs in referrer header
  'Referrer-Policy': 'strict-origin',

  // Permissions policy — disable features not needed
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',

  // Content Security Policy (strict for APIs)
  'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'",

  // Remove server version fingerprint
  // (set app.disable('x-powered-by') in Express)

  // Cache control for PHI responses — never cache PHI
  'Cache-Control': 'no-store, no-cache, must-revalidate, private',
  'Pragma': 'no-cache',
};

// ✅ All responses must include X-Request-ID for correlation
// ✅ Content-Type MUST be set explicitly on every response
// ❌ Never send 'Server: Express' or 'Server: nginx/1.x.x' headers (version disclosure)
```

---

## 7. Rate Limiting & DDoS Protection {#rate-limiting}

```javascript
// Rate limiting tiers for healthcare API:

const RATE_LIMITS = {
  // Public endpoints (auth, health check)
  public: { windowMs: 60_000, max: 60 },

  // Authenticated general endpoints
  authenticated: { windowMs: 60_000, max: 200 },

  // PHI read endpoints
  phiRead: { windowMs: 60_000, max: 30 },

  // PHI write endpoints (more restrictive)
  phiWrite: { windowMs: 60_000, max: 20 },

  // Auth endpoints (prevent brute force)
  login: { windowMs: 15 * 60_000, max: 10, skipSuccessfulRequests: true },

  // Password reset (prevent account enumeration)
  passwordReset: { windowMs: 60 * 60_000, max: 3 },

  // Export endpoints (bulk PHI — very restrictive)
  export: { windowMs: 60 * 60_000, max: 5 },
};

// ✅ Use Redis as rate limit store (not in-memory — won't survive restarts)
// ✅ Rate limit by: IP + authenticated userID (not IP only — can be spoofed)
// ✅ Custom error response: never reveal limit details in 429 response body
// ✅ Whitelist internal health check IPs from rate limiting
// ✅ Alert on sustained rate limit breaches (potential DDoS or credential stuffing)

// ❌ Memory store for rate limiting in production (lost on restart)
// ❌ Rate limiting ONLY by IP (trivially bypassed with IP rotation)
```

---

## 8. CORS Configuration {#cors}

```javascript
// ✅ Allowlist ONLY known origins — never use wildcard (*) on APIs serving PHI

const CORS_CONFIG = {
  origin: (origin, callback) => {
    const ALLOWED_ORIGINS = [
      'https://app.yourdomain.com',
      'https://admin.yourdomain.com',
    ];
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS origin not allowed'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-ID'],
  exposedHeaders: ['X-Request-ID'],
  credentials: true,        // Required for httpOnly cookie auth
  maxAge: 86400,            // Preflight cache: 24 hours
};

// ❌ cors({ origin: '*' }) on any PHI endpoint = HIPAA violation
// ❌ Reflecting back the Origin header without allowlist check
// ❌ Allowing credentials: true with wildcard origin (browsers block it anyway, but still wrong)
```

---

## 9. Cryptography Standards {#crypto}

```javascript
// ✅ APPROVED algorithms (2025):
const APPROVED_CRYPTO = {
  // Symmetric encryption
  symmetric: 'AES-256-GCM',         // Authenticated encryption — preferred
  symmetric_alt: 'ChaCha20-Poly1305', // Alternative for non-AES hardware

  // Asymmetric encryption
  asymmetric: 'RSA-OAEP-SHA256',    // For key encapsulation
  asymmetric_alt: 'X25519',          // ECDH key exchange

  // Digital signatures
  signature: 'Ed25519',              // Preferred for JWT/document signing
  signature_rsa: 'RS256',            // RSA-2048+ for legacy compatibility

  // Hashing (data integrity)
  hash: 'SHA-256',                   // Minimum
  hash_preferred: 'SHA-384',         // For highest-assurance use

  // Password hashing
  password: 'argon2id',              // Preferred
  password_alt: 'bcrypt (cost≥12)', // Widely supported alternative

  // Key derivation
  kdf: 'HKDF-SHA256',               // Key derivation from master key
  pbkdf: 'PBKDF2-SHA256-600000',    // NIST 2023 recommended iterations
};

// ❌ BANNED algorithms:
// MD5, SHA1 (for security use), DES, 3DES, RC4, HS256 (shared secret JWT),
// ECB mode for any cipher, RSA < 2048 bits, Diffie-Hellman < 2048 bits
// Math.random() for ANY security purpose — use crypto.randomBytes() ALWAYS

// ✅ IV/Nonce generation:
// const iv = crypto.randomBytes(16); // AES-GCM: 12 or 16 bytes, NEVER reuse with same key
// ✅ Key size: AES-128 minimum, AES-256 for PHI
// ✅ NEVER derive key from password without KDF (PBKDF2/Argon2id)
```

---

## 10. Secrets & Configuration Management {#secrets}

```javascript
// ✅ Secret storage hierarchy:
// Production:  AWS Secrets Manager / HashiCorp Vault / GCP Secret Manager
// Staging:     Vault with separate namespace
// Local Dev:   .env file (gitignored, never committed)

// ✅ Secret naming convention (prevents accidental exposure):
// DB_PASSWORD, JWT_PRIVATE_KEY, ENCRYPTION_KEY, API_KEY_SENDGRID, etc.

// ✅ Secret injection at runtime — never baked into Docker images
// ✅ Secret versioning: maintain at least 2 previous versions for rollback
// ✅ Secret access logging: alert on unusual access patterns to secrets

// Required .gitignore for Node.js security:
// .env
// .env.*
// .env.local
// *.pem
// *.key
// *.p12
// *.pfx
// id_rsa
// secrets/
// config/secrets.json
// node_modules/

// ✅ Environment separation:
// NODE_ENV must be 'production' in production (disables stack traces, debug info)
// Separate DB, Redis, and external service credentials per environment
// Never use production credentials in automated tests

// ✅ Config validation at startup:
// Validate all required env vars present before server starts
// Fail fast with clear error (without exposing values) if required secret is missing
```

---

## 11. Dependency Security {#dependency-security}

```javascript
// ✅ Package management rules:
// - Lock file committed: package-lock.json or yarn.lock MUST be in version control
// - npm ci (not npm install) in CI/CD — installs exact locked versions
// - npm audit --audit-level=high in pipeline — BLOCK deploy on high/critical CVEs
// - Snyk or Dependabot enabled on repository for automated PR alerts

// ✅ Supply chain security:
// - Verify package integrity: npm install --ignore-scripts for untrusted packages
// - Avoid packages with few downloads / no maintenance in 2+ years for core security libs
// - Review package.json dependencies quarterly
// - Use npm-check-updates to stay current

// ✅ Minimal dependencies principle:
// - Don't add dependencies for trivial tasks (UUID, padding strings, etc.)
// - Audit transitive dependencies — check depth-2+ packages for CVEs
// - Prefer packages with low dependency counts for security-critical code

// ✅ Node.js version:
// - Use Node.js LTS (Long Term Support) only in production
// - Update Node.js within 30 days of critical security patch
// - Pin Node.js version in Dockerfile: FROM node:20.x.x-alpine (not 'latest')

// ❌ npm install with --legacy-peer-deps in production (hides dependency conflicts)
// ❌ Using deprecated packages: request, node-uuid, crypto (built-in is preferred)
// ❌ Running npm install as root in Docker container
```

---

## 12. Logging & Observability {#logging}

```javascript
// ✅ Structured logging — always use JSON format (not plain string) for production
// ✅ Correlation IDs: X-Request-ID on every request, propagate through all services
// ✅ Log levels: ERROR (alerts), WARN (anomalies), INFO (business events), DEBUG (dev only)

const LOG_FIELDS = {
  // ✅ ALWAYS include:
  timestamp:    'ISO 8601 UTC',
  requestId:    'uuid',
  service:      'service-name',
  version:      'v1.2.3',
  level:        'info|warn|error',
  message:      'human readable',
  userId:       'user-id (hashed if external log sink)',

  // ✅ For HTTP requests:
  method:       'GET|POST|etc',
  path:         '/api/path (no query params if they contain PHI)',
  statusCode:   200,
  durationMs:   123,
  ip:           'client IP (mask last octet for GDPR if applicable)',
};

// ❌ NEVER LOG:
const LOG_PROHIBITED = [
  'passwords',
  'auth_tokens',
  'api_keys',
  'credit_card_numbers',
  'ssn',
  'phi_values',         // Log field NAMES only, never values
  'encryption_keys',
  'session_cookies',
  'private_keys',
  'full_request_body',  // May contain PHI
];

// ✅ Log storage:
// - Minimum retention: 1 year (for security incident investigation)
// - PHI/audit logs: 6 years (HIPAA requirement)
// - Logs encrypted at rest
// - WORM (Write Once Read Many) storage for audit logs
// - Real-time streaming to SIEM (Splunk, Elastic, Datadog)
// - Alert on: auth failures, privilege escalation, bulk data access, off-hours access
```

---

## 13. Container & Infrastructure Security {#infrastructure}

```dockerfile
# ✅ Secure Dockerfile pattern for Node.js healthcare API:

# FROM node:20-alpine AS base   # Use Alpine (minimal attack surface)
# RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci --omit=dev          # Production deps only, no devDependencies
# COPY . .
# USER appuser                   # ✅ Never run as root
# EXPOSE 3000
# CMD ["node", "server.js"]      # ✅ Direct node, not npm start (signal handling)

# ✅ Container security rules:
# - Read-only root filesystem: docker run --read-only
# - No-new-privileges: docker run --security-opt=no-new-privileges
# - Drop all capabilities: docker run --cap-drop ALL --cap-add NET_BIND_SERVICE
# - Non-root user (UID 1000+) in ALL containers
# - Scan image with Trivy before pushing to registry
# - Never use 'latest' tag in production — pin to digest (sha256:...)
# - No secrets in ENV instructions in Dockerfile (visible in docker inspect)
```

```javascript
// ✅ Infrastructure security controls:
// - Web Application Firewall (WAF) in front of all PHI-serving APIs
// - API Gateway for rate limiting, auth, routing (Kong, AWS API Gateway)
// - Private subnets for database and cache layers (not internet-facing)
// - VPC security groups: principle of least privilege (deny all, allow specific)
// - Database: no public IP, accessed only via VPC from app servers
// - Redis: AUTH enabled, TLS in transit, no public exposure
// - S3/blob storage: block all public access, server-side encryption enabled
// - CloudTrail / Cloud Audit Logs enabled (AWS/GCP/Azure)
```

---

## 14. CI/CD Pipeline Security {#cicd}

```yaml
# Required security gates in CI/CD pipeline:

# STAGE 1 — Static Analysis (pre-commit + PR)
# - ESLint with security plugin (eslint-plugin-security)
# - Semgrep SAST rules
# - Secret scanning (GitLeaks, GitHub Secret Scanning)
# - License compliance check (reject GPL in proprietary code)

# STAGE 2 — Dependency Scanning (every build)
# - npm audit --audit-level=high → BLOCK on high/critical
# - Snyk test → BLOCK on high/critical
# - License checker

# STAGE 3 — Build & Test
# - npm ci (locked dependencies)
# - Unit tests with security test cases (injection, overflow, auth bypass)
# - Integration tests for auth flows

# STAGE 4 — Container Scanning (pre-push)
# - Trivy image scan → BLOCK on CRITICAL CVEs
# - Docker Bench Security

# STAGE 5 — Infrastructure Scanning (IaC)
# - tfsec / Checkov for Terraform/CloudFormation
# - Block misconfigurations: public S3, open security groups, unencrypted disks

# STAGE 6 — Deploy to Staging
# - DAST scan (OWASP ZAP) against staging API
# - Smoke test security endpoints

# STAGE 7 — Production Deploy (gated)
# - Manual approval for production PHI systems
# - Automated rollback trigger on error rate spike post-deploy
# - Deploy audit: who deployed what, when, to where

# ✅ Branch protection rules:
# - Require PR review (1+ approver)
# - All CI checks must pass
# - No force push to main/master
# - Signed commits required (GPG)
# - No secrets in commit messages
```

---

## 15. Incident Response Procedures {#incident-response}

```
SECURITY INCIDENT SEVERITY LEVELS:
├── P0 — CRITICAL: Active breach of PHI, ransomware, complete system compromise
│         Response SLA: Immediate (< 1 hour)
│         Actions: Isolate affected systems, activate IR team, legal notification
│
├── P1 — HIGH: Suspected unauthorized access to PHI, critical vulnerability exploited
│         Response SLA: < 4 hours
│         Actions: Investigation initiated, PHI access suspended if needed
│
├── P2 — MEDIUM: Failed intrusion attempt, anomalous PHI access pattern, CVE detected
│         Response SLA: < 24 hours
│         Actions: Monitoring enhanced, vulnerability patched
│
└── P3 — LOW: Policy violation, misconfiguration (non-PHI), dependency CVE (low)
          Response SLA: < 72 hours
          Actions: Remediation scheduled, documentation updated
```

```javascript
// ✅ Incident Response Code Procedures:

// 1. DETECTION — Automated alerts must fire for:
//    - Impossible travel (login from two geographically impossible IPs)
//    - Bulk PHI export (> threshold records in single session)
//    - New admin account created
//    - Multiple failed MFA attempts
//    - Database query anomalies (off-hours, volume spikes)
//    - Dependency CVE score ≥ 7.0 published

// 2. CONTAINMENT — API-level emergency controls:
//    - Kill switch: feature flag to disable PHI endpoints immediately
//    - Token revocation: batch-revoke all tokens for affected user/org
//    - IP block: WAF rule to block attacking IP range
//    - DB access suspension: revoke DB credentials for compromised service

// 3. ERADICATION — Code-level remediation:
//    - Patch vulnerable dependency → redeploy
//    - Rotate ALL secrets (assume all compromised in P0/P1)
//    - Force re-authentication for all active sessions
//    - Audit all PHI accessed during breach window

// 4. RECOVERY:
//    - Restore from last known-good backup (verify integrity hash)
//    - Target: 72-hour restoration SLA (HIPAA 2025 NPRM requirement)
//    - Post-restore penetration test before re-opening to production traffic

// 5. NOTIFICATION (HIPAA):
//    - 60-day deadline: notify affected individuals
//    - OCR notification (same window)
//    - Media if > 500 in one state
//    - Document everything: timeline, affected records, corrective actions

// 6. POST-INCIDENT:
//    - Root cause analysis (5 Whys)
//    - Update threat model
//    - Patch gap in security controls
//    - Update incident response playbook
//    - Security awareness training if human error involved
```

---

## ✅ Advanced Security Quick Reference

### Express.js Security Checklist
- [ ] `helmet()` middleware with full config
- [ ] `app.disable('x-powered-by')`
- [ ] `express-rate-limit` with Redis store on all routes
- [ ] CORS allowlist (no wildcard on authenticated routes)
- [ ] `express-mongo-sanitize` or equivalent for NoSQL
- [ ] `express-validator` / Joi / Zod on all request bodies
- [ ] Global error handler strips sensitive info from responses
- [ ] `morgan` logging without PHI fields
- [ ] Compression middleware AFTER security middleware
- [ ] Request ID middleware (`uuid`) on all requests

### Node.js Runtime Security
- [ ] `NODE_ENV=production` in production
- [ ] `--max-old-space-size` set (prevent OOM DoS)
- [ ] Process runs as non-root OS user
- [ ] `--disallow-code-generation-from-strings` flag considered
- [ ] `crypto.randomBytes()` for all random values (never Math.random())
- [ ] `fs` access restricted to known directories
- [ ] Child process execution (`exec`, `spawn`) never uses user input

### Database Security
- [ ] Parameterized queries only
- [ ] Minimum-privilege DB user (SELECT/INSERT/UPDATE only, no DROP/ALTER)
- [ ] Database not internet-facing
- [ ] Encryption at rest enabled on DB volumes
- [ ] Automated backups with integrity verification
- [ ] Separate read replica for analytics (no PHI write access)
- [ ] Connection pooling with timeout limits

### Monitoring Alerts (Required)
- [ ] Failed auth attempts > 5 in 1 minute → alert
- [ ] New admin user created → alert + approval workflow
- [ ] PHI export > 1000 records → alert
- [ ] Off-hours PHI access → alert
- [ ] New IP accessing admin endpoints → alert
- [ ] Certificate expiry < 30 days → alert
- [ ] Secret rotation overdue → alert
- [ ] CVE > 7.0 in dependencies → alert + ticket

---

*References: OWASP Top 10 2021 | NIST SP 800-53 Rev5 | CIS Controls v8 | NIST Zero Trust (SP 800-207)*
*Node.js Security Best Practices | Express.js Production Best Practices | HHS HIPAA Security Rule*
