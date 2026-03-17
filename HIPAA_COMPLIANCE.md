# HIPAA Compliance Rules for Node.js / Express.js API
> **Last Updated:** March 2026 | Based on: HIPAA Security Rule (45 CFR Part 164), HITECH Act,
> HHS OCR NPRM January 2025 (effective ~May 2026), and HHS Cybersecurity Performance Goals (CPGs).
>
> ⚠️ **GitHub Copilot Context File** — Place this file in your project root or `.github/` folder.
> Copilot will use these rules as inline coding suggestions for security-compliant ePHI handling.

---

## 📋 TABLE OF CONTENTS
1. [What is PHI / ePHI](#phi-definition)
2. [HIPAA Rule Framework](#hipaa-framework)
3. [Technical Safeguards (API-Level)](#technical-safeguards)
4. [Authentication & Access Control](#authentication)
5. [Encryption Standards](#encryption)
6. [Audit Logging & Monitoring](#audit-logging)
7. [Data Integrity Controls](#data-integrity)
8. [Transmission Security](#transmission-security)
9. [Breach Notification Rules](#breach-notification)
10. [Node.js / Express.js Code Patterns](#nodejs-patterns)
11. [Environment & Secret Management](#secrets)
12. [Third-Party / Business Associates](#business-associates)
13. [Vulnerability Management (2025 NPRM)](#vulnerability-management)
14. [Penalties Reference](#penalties)

---

## 1. PHI / ePHI Definition {#phi-definition}

Protected Health Information (PHI) is any individually identifiable health information. If your API
handles ANY of the 18 HIPAA identifiers, HIPAA applies:

```
PHI_IDENTIFIERS = [
  "name",                  // Patient full name
  "geographic_data",       // Address, ZIP code (first 3 digits restricted)
  "dates",                 // DOB, admission date, discharge date, death date
  "phone_numbers",
  "fax_numbers",
  "email_addresses",
  "ssn",                   // Social Security Number
  "medical_record_number",
  "health_plan_number",
  "account_number",
  "certificate_license_number",
  "vehicle_identifiers",
  "device_identifiers",    // Serial numbers, MAC addresses
  "web_urls",
  "ip_addresses",
  "biometric_identifiers", // Fingerprints, voiceprints
  "full_face_photographs",
  "any_unique_identifier"  // Catch-all
]
```

> **Rule:** Never log, store, or transmit raw PHI in unencrypted form.
> Always apply `minimum necessary` standard — only access/transmit what the function requires.

---

## 2. HIPAA Rule Framework {#hipaa-framework}

HIPAA compliance for APIs rests on **four pillars**:

| Rule | Scope | Key API Obligation |
|------|-------|--------------------|
| **Privacy Rule** (45 CFR §164.500) | All PHI (physical + electronic) | Minimum necessary, patient rights, consent |
| **Security Rule** (45 CFR §164.300) | ePHI only | Technical, physical, admin safeguards |
| **Breach Notification Rule** (45 CFR §164.400) | Unsecured PHI breaches | Notify within 60 days of discovery |
| **HITECH Act** (2009) | Extends HIPAA to Business Associates | Direct liability for BAs, increased penalties |

### 2025–2026 NPRM Critical Changes (Plan for now):
- All implementation specs become **mandatory** (no more "addressable" vs "required" split)
- **Encryption at rest AND in transit** is now explicitly required, not optional
- **MFA** mandatory for all systems accessing ePHI
- **Biannual vulnerability scans** required
- **Annual penetration testing** required
- **72-hour restoration** SLA after a security incident
- **Annual compliance audits** required
- Business Associates must confirm safeguard adherence **within 24 hours** of contingency plan activation

---

## 3. Technical Safeguards (API-Level) {#technical-safeguards}

> Reference: 45 CFR §164.312

All technical safeguards below are **mandatory** under the 2025 NPRM.

### 3.1 Access Control (§164.312(a)(1))
```javascript
// ✅ COMPLIANT: Unique user ID per request — never shared accounts
// ✅ COMPLIANT: Role-Based Access Control (RBAC) enforced at route level
// ✅ COMPLIANT: Emergency access procedure documented separately
// ✅ COMPLIANT: Automatic logoff on inactivity (session timeout ≤ 15 minutes for PHI)
// ❌ NON-COMPLIANT: Shared API keys across users
// ❌ NON-COMPLIANT: Admin-only role for all PHI access
// ❌ NON-COMPLIANT: No session expiry on PHI endpoints
```

### 3.2 Audit Controls (§164.312(b))
```javascript
// ✅ COMPLIANT: Every read/write/delete of ePHI must produce an audit log entry
// ✅ COMPLIANT: Audit logs must be tamper-evident (write-once or append-only)
// ✅ COMPLIANT: Logs must include: userID, timestamp, action, resource, IP, result
// ❌ NON-COMPLIANT: console.log() for PHI access — use structured audit logger
// ❌ NON-COMPLIANT: Storing audit logs in same DB as ePHI without isolation
```

### 3.3 Integrity Controls (§164.312(c)(1))
```javascript
// ✅ COMPLIANT: Checksum / hash verification for ePHI records at rest
// ✅ COMPLIANT: Digital signatures on data transfers containing ePHI
// ✅ COMPLIANT: Database row-level integrity checks for PHI tables
// ❌ NON-COMPLIANT: ePHI transmitted without integrity verification (hash mismatch = breach)
```

### 3.4 Transmission Security (§164.312(e)(1))
```javascript
// ✅ COMPLIANT: TLS 1.2 minimum, TLS 1.3 preferred for ALL PHI endpoints
// ✅ COMPLIANT: HSTS headers enforced (min 1-year max-age)
// ✅ COMPLIANT: Certificate pinning for mobile clients accessing ePHI
// ❌ NON-COMPLIANT: HTTP fallback on any route that handles PHI
// ❌ NON-COMPLIANT: TLS 1.0 / 1.1 — deprecated and non-compliant
// ❌ NON-COMPLIANT: Self-signed certs in production ePHI environments
```

---

## 4. Authentication & Access Control {#authentication}

### OAuth 2.0 + OpenID Connect Pattern (Required for ePHI APIs)
```javascript
// HIPAA-COMPLIANT AUTH PATTERN FOR EXPRESS.JS
// Scopes must follow minimum-necessary principle:

const PHI_SCOPES = {
  PATIENT_READ:    "patient/*.read",       // Read-only patient record
  PATIENT_WRITE:   "patient/*.write",      // Modify patient record
  CLINICIAN_READ:  "user/*.read",          // Clinician read access
  CLINICIAN_WRITE: "user/*.write",         // Clinician write access
  ADMIN:           "system/*.read",        // System-level admin (audit only)
};

// Middleware pattern — attach to all PHI routes
// app.use('/api/phi/*', verifyJWT, enforceScope, auditLog);

// Token requirements:
// - Short expiry: access_token ≤ 15 minutes
// - Refresh tokens must be rotated on each use
// - Tokens must NOT contain raw PHI in payload
// - MFA required before issuing tokens to PHI endpoints (2025 NPRM)
```

### MFA Enforcement (Mandatory per 2025 NPRM)
```javascript
// ✅ All logins accessing ePHI must require a second factor
// ✅ Acceptable: TOTP (Google Authenticator), hardware key (FIDO2/WebAuthn), SMS OTP
// ✅ MFA bypass must be logged as a security event
// ❌ Password-only authentication to ePHI endpoints is NON-COMPLIANT (2026)
// ❌ Security questions are NOT acceptable MFA for ePHI
```

### Session Management
```javascript
// Express.js session config for HIPAA compliance:
// session({
//   secret: process.env.SESSION_SECRET,  // ≥ 256-bit entropy
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     secure: true,       // HTTPS only
//     httpOnly: true,     // No JS access
//     sameSite: 'strict', // CSRF protection
//     maxAge: 15 * 60 * 1000  // 15-minute inactivity timeout for PHI
//   },
//   store: RedisStore     // Never use in-memory session store in production
// })
```

---

## 5. Encryption Standards {#encryption}

### Encryption at Rest (MANDATORY per 2025 NPRM)
```javascript
// ✅ AES-256-GCM for database field-level encryption of PHI columns
// ✅ AES-256 for disk/volume encryption (AWS EBS, GCP PD, Azure Disk)
// ✅ Key Management Service (KMS) required — never hardcode encryption keys
// ✅ Key rotation: minimum annually, recommended every 90 days
// ✅ Separate encryption keys per tenant/covered entity

// Node.js AES-256-GCM example for PHI field encryption:
// const crypto = require('crypto');
// const algorithm = 'aes-256-gcm';
// function encryptPHI(plaintext, keyBuffer) {
//   const iv = crypto.randomBytes(16);
//   const cipher = crypto.createCipheriv(algorithm, keyBuffer, iv);
//   const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
//   const tag = cipher.getAuthTag();
//   return { iv: iv.toString('hex'), tag: tag.toString('hex'), data: encrypted.toString('hex') };
// }
```

### Encryption in Transit (MANDATORY)
```javascript
// ✅ TLS 1.3 preferred, TLS 1.2 minimum
// ✅ Cipher suites: ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-CHACHA20-POLY1305
// ✅ HSTS: Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
// ✅ Disable: SSLv3, TLS 1.0, TLS 1.1, RC4, 3DES, MD5
// ❌ Certificate must not be expired or self-signed in production
```

### Key Management
```javascript
// ✅ Use AWS KMS / GCP Cloud KMS / Azure Key Vault — never .env for keys
// ✅ HSM (Hardware Security Module) for highest-assurance ePHI systems
// ✅ Envelope encryption: DEK (data encryption key) encrypted with KEK (key encryption key)
// ✅ Dead Man's Switch: revoke keys automatically on employee termination
// ❌ process.env.ENCRYPTION_KEY used directly is NON-COMPLIANT for PHI at scale
```

---

## 6. Audit Logging & Monitoring {#audit-logging}

### Required Audit Log Fields (§164.312(b))
```javascript
// Every ePHI access MUST log:
const PHI_AUDIT_ENTRY = {
  timestamp:     "ISO 8601 UTC",           // Required
  userId:        "unique_user_identifier", // Required — never 'system' or 'admin' generics
  userRole:      "RBAC role",              // Required
  action:        "READ|CREATE|UPDATE|DELETE|EXPORT|PRINT", // Required
  resourceType:  "Patient|Encounter|Claim|etc",  // Required
  resourceId:    "record_id",              // Required (hashed if exported externally)
  ipAddress:     "client_ip",             // Required
  userAgent:     "browser/app string",    // Recommended
  requestId:     "uuid_trace_id",         // Required for incident correlation
  result:        "SUCCESS|FAILURE|DENIED", // Required
  dataFields:    ["field1", "field2"],     // Fields accessed (not values)
  sessionId:     "session_token_hash",    // Required (hash only, never raw token)
};

// ✅ Logs must be write-once / append-only (WORM storage recommended)
// ✅ Log retention: minimum 6 years (HIPAA requires 6-year document retention)
// ✅ Logs must be encrypted at rest
// ✅ Tamper alerts: detect and alert on log deletion or modification
// ❌ Never log actual PHI values (SSN, DOB, diagnosis) in log messages
// ❌ Never log authentication tokens or session keys
```

### Monitoring & Alerting
```javascript
// ✅ Alert on: >5 failed auth attempts (brute force), unusual data export volumes,
//             off-hours access to PHI, privilege escalation attempts,
//             new IP accessing PHI endpoints, bulk record reads (>100 records)
// ✅ SIEM integration required for covered entities (Splunk, Elastic, Datadog)
// ✅ Anomaly detection for ePHI access patterns
```

---

## 7. Data Integrity Controls {#data-integrity}

```javascript
// ✅ Checksums on ePHI records: store SHA-256 hash alongside record
// ✅ Verify hash on every read — mismatch = security incident
// ✅ Database triggers to log ALL changes to PHI tables
// ✅ Soft-deletes only for PHI records (never hard DELETE — audit trail required)
// ✅ Optimistic locking on PHI update endpoints to prevent race conditions
// ✅ Input validation and sanitization BEFORE storing any PHI
// ❌ Allowing blind PATCH/PUT without field-level change logging
// ❌ Cascading deletes on PHI-linked tables without audit capture
```

---

## 8. Transmission Security {#transmission-security}

```javascript
// Express.js Helmet.js security headers (required for all PHI-serving APIs):
// helmet({
//   hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
//   contentSecurityPolicy: { /* strict CSP */ },
//   noSniff: true,
//   frameguard: { action: 'deny' },
//   xssFilter: true,
//   referrerPolicy: { policy: 'strict-origin' }
// })

// ✅ Disable HTTP/1.0 — enforce HTTP/2 minimum for ePHI endpoints
// ✅ API responses must never include PHI in URL query parameters
// ✅ PHI must only travel in encrypted request/response body (never URL, never headers)
// ✅ Validate Content-Type headers — reject unexpected MIME types
// ✅ Rate limiting on all PHI endpoints: 100 req/min per authenticated user
// ❌ CORS wildcard (*) on any route that returns PHI is NON-COMPLIANT
// ❌ Logging full request URLs when URLs may contain PHI identifiers
```

---

## 9. Breach Notification Rules {#breach-notification}

> Reference: 45 CFR §164.400–414

```
BREACH RESPONSE TIMELINE:
├── T+0h  → Discovery of potential breach
├── T+72h → Internal incident response activated (2025 NPRM: system restoration within 72h)
├── T+10d → Internal investigation completed
├── T+30d → Notification drafted for affected individuals
└── T+60d → Notification SENT to affected individuals (HARD DEADLINE)
         → HHS OCR notified (same 60-day window)
         → Media notification if > 500 affected in one state
         → Annual HHS report if < 500 individuals
```

### Breach Assessment Checklist
```javascript
// ePHI Security Incident — assess these 4 factors:
// 1. Nature and extent of PHI involved (which of the 18 identifiers?)
// 2. Who accessed/used the PHI (known bad actor vs accidental?)
// 3. Whether PHI was actually acquired or viewed
// 4. Extent to which risk has been mitigated
//
// If encryption keys were NOT compromised: encrypted data = "safe harbor" (not a reportable breach)
// If ransomware encrypted ePHI: PRESUME it is a breach unless proven otherwise (HHS guidance)
```

---

## 10. Node.js / Express.js Code Patterns {#nodejs-patterns}

### Secure Express.js App Bootstrap
```javascript
// ✅ HIPAA-COMPLIANT EXPRESS.JS BOOTSTRAP PATTERN

const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');

const app = express();

// Security headers — REQUIRED
app.use(helmet({
  hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
  contentSecurityPolicy: true,
  noSniff: true,
}));

// Disable server fingerprinting
app.disable('x-powered-by');

// Rate limiting on ALL routes
const globalLimiter = rateLimit({
  windowMs: 60 * 1000,   // 1 minute
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests' }, // Never expose PHI in error messages
});
app.use(globalLimiter);

// Strict rate limit on PHI routes
const phiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
});
app.use('/api/patients', phiLimiter);
app.use('/api/records', phiLimiter);

// Body size limit — prevent DoS via large payloads
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Access logging — NO PHI in logs
app.use(morgan(':method :url :status :response-time ms - :remote-addr'));
// ❌ Never use ':req[body]' token in morgan — may log PHI
```

### PHI Field Masking Middleware
```javascript
// Mask PHI before logging or returning in non-PHI contexts
function maskPHI(data) {
  const PHI_FIELDS = ['ssn', 'dob', 'phone', 'email', 'address', 'name'];
  const masked = { ...data };
  PHI_FIELDS.forEach(field => {
    if (masked[field]) {
      masked[field] = '***REDACTED***';
    }
  });
  return masked;
}
// ✅ Apply maskPHI() before any logging statement that might contain user data
```

### Input Validation for PHI Endpoints
```javascript
// ✅ Validate ALL inputs before processing — use express-validator or Joi
// ✅ Reject any input that doesn't match expected PHI schema
// ✅ Sanitize to prevent SQL injection / NoSQL injection into PHI fields
// Example with Joi:
// const patientSchema = Joi.object({
//   mrn: Joi.string().alphanum().max(20).required(),
//   dob: Joi.date().iso().max('now').required(),
//   // Never accept free-form text fields without sanitization
// });
```

### Error Handling — Never Expose PHI in Errors
```javascript
// ✅ COMPLIANT error handler:
app.use((err, req, res, next) => {
  const requestId = req.headers['x-request-id'] || generateUUID();
  // Log full error internally with audit trail
  auditLogger.error({ requestId, error: err.message, stack: err.stack });
  // Return generic message to client — NEVER include PHI, stack traces, or DB errors
  res.status(err.status || 500).json({
    error: 'An error occurred. Reference ID: ' + requestId,
  });
});
// ❌ res.json({ error: err.message }) — may expose DB schema or PHI
// ❌ res.json({ stack: err.stack }) — leaks internal structure
```

### Database Query Pattern (Minimum Necessary)
```javascript
// ✅ Select only required fields — never SELECT * on PHI tables
// ✅ Parameterized queries ONLY — no string concatenation with user input
// Example:
// const result = await db.query(
//   'SELECT mrn, name, dob FROM patients WHERE patient_id = $1',
//   [req.params.id]   // parameterized — SQL injection safe
// );
// ❌ db.query(`SELECT * FROM patients WHERE id = '${req.params.id}'`)  // NON-COMPLIANT
```

---

## 11. Environment & Secret Management {#secrets}

```javascript
// ✅ Use AWS Secrets Manager / HashiCorp Vault / GCP Secret Manager for:
//    - Database credentials
//    - Encryption keys
//    - JWT signing secrets
//    - Third-party API keys (EHR systems, clearinghouses)
//
// ✅ .env files ONLY for local development — never commit to version control
// ✅ .env must be in .gitignore
// ✅ Rotate all secrets every 90 days (annually at minimum)
// ✅ Separate secrets per environment: dev / staging / production
//
// ❌ process.env.DB_PASSWORD hardcoded in source = HIPAA violation if repo is public
// ❌ Sharing database credentials across microservices
// ❌ Using the same JWT secret for dev and production

// Required .gitignore entries for HIPAA projects:
// .env
// .env.*
// *.pem
// *.key
// *.p12
// secrets/
// config/production.json
```

---

## 12. Third-Party / Business Associates {#business-associates}

```javascript
// ✅ All vendors handling ePHI must sign a Business Associate Agreement (BAA)
// ✅ BAA required for: cloud providers (AWS, GCP, Azure), logging services,
//    analytics platforms, CDN providers, email services, monitoring tools
//
// ✅ HIPAA-compliant vendors with signed BAA programs:
//    - AWS (BAA available for most services, requires opt-in)
//    - Google Cloud Platform (BAA available)
//    - Azure (BAA available)
//    - Twilio (BAA available for healthcare)
//    - SendGrid / Mailgun (BAA available — required for PHI-containing emails)
//
// ❌ DO NOT use these services for ePHI without BAA:
//    - Free-tier log aggregators without BAA
//    - Third-party error tracking (Sentry, Bugsnag) without BAA AND PHI scrubbing
//    - Analytics platforms (Google Analytics, Mixpanel) receiving PHI data
//
// Sentry / Error Tracking — PHI Scrubbing Required:
// Sentry.init({
//   beforeSend(event) {
//     // Scrub PHI from event before sending to Sentry
//     if (event.request && event.request.data) {
//       event.request.data = maskPHI(event.request.data);
//     }
//     return event;
//   }
// });
```

---

## 13. Vulnerability Management (2025 NPRM) {#vulnerability-management}

```javascript
// Mandatory under 2025 NPRM (effective ~2026):
//
// ✅ Vulnerability scanning: every 6 months (biannual)
// ✅ Penetration testing: annually (engage certified pentester)
// ✅ Patch management: critical CVEs patched within 30 days
// ✅ npm audit: run on every CI/CD pipeline build — block deploy on high/critical
// ✅ Dependency scanning: Snyk, Dependabot, or OWASP Dependency-Check
// ✅ SAST (Static Application Security Testing): integrate in CI pipeline
// ✅ Secret scanning: GitHub Advanced Security, GitLeaks — prevent credential leaks
//
// CI/CD Pipeline Security Checklist:
// - npm audit --audit-level=high (fail build if high/critical)
// - Static analysis (ESLint security plugin, Semgrep)
// - Container image scanning (Trivy, Snyk Container)
// - Infrastructure-as-Code scanning (tfsec, Checkov)
// - DAST on staging environment before production deploy
//
// ✅ Technology asset inventory: maintain list of ALL systems that create/receive/transmit ePHI
// ✅ Network map: document data flows of ePHI across all services
// ✅ Annual HIPAA Security Risk Analysis tied to asset inventory (45 CFR §164.308(a)(1))
```

---

## 14. Penalties Reference {#penalties}

| Tier | Knowledge Level | Per Violation | Annual Cap |
|------|----------------|---------------|------------|
| Tier 1 | Didn't know | $100–$50,000 | $25,000 |
| Tier 2 | Reasonable cause | $1,000–$50,000 | $100,000 |
| Tier 3 | Willful neglect (corrected) | $10,000–$50,000 | $250,000 |
| Tier 4 | Willful neglect (not corrected) | $50,000 | $1,500,000 |
| Criminal | Intentional misuse | Up to $250,000 fine + 10 years imprisonment | — |

> 2025 enforcement: OCR resolved 21 cases, penalties $25K–$3M.
> Over **75% of all OCR penalties** involved failure to conduct proper Risk Analysis.
> The February 2024 Change Healthcare breach exposed 192.7 million individuals — triggered by **missing MFA** on a remote portal.

---

## ✅ Quick HIPAA API Compliance Checklist

- [ ] All PHI endpoints require authenticated JWT with MFA
- [ ] OAuth 2.0 scopes follow minimum-necessary principle
- [ ] TLS 1.2+ enforced, HTTP disabled, HSTS headers set
- [ ] AES-256 encryption for PHI at rest (field-level on sensitive columns)
- [ ] AES-256-GCM or TLS 1.3 for PHI in transit
- [ ] Encryption keys stored in KMS (not .env or source code)
- [ ] Audit log generated for every PHI read/write/delete
- [ ] Audit logs retained 6 years, encrypted, append-only
- [ ] Error messages never expose PHI or stack traces
- [ ] No PHI in URL parameters, only in encrypted body
- [ ] Rate limiting applied to all PHI endpoints
- [ ] Input validation / sanitization on all PHI fields
- [ ] SELECT only required fields — never SELECT * on PHI tables
- [ ] Parameterized queries only — no SQL string concatenation
- [ ] BAA signed with all third-party vendors handling ePHI
- [ ] PHI scrubbed from error tracking (Sentry etc.) before sending
- [ ] .env and secrets excluded from version control
- [ ] npm audit in CI/CD pipeline (block on high/critical)
- [ ] Breach response plan documented (60-day notification deadline)
- [ ] Security Risk Analysis conducted annually
- [ ] Biannual vulnerability scans scheduled (2025 NPRM)
- [ ] Annual penetration test scheduled (2025 NPRM)
- [ ] Technology asset inventory maintained

---

*References: 45 CFR Part 164 | HHS OCR NPRM Jan 2025 | HITECH Act 2009 | HHS CPGs 2024 | Change Healthcare Breach Report 2024*
