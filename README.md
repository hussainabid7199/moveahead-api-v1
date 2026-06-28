# MoveAhead API v1 (Node.js + Express + TypeScript + MySQL)

## Read this first (VS Code)
- This project is documented in Markdown. Always read the project `.md` files before changing code.
- When generating or editing code, follow the rules described in these docs (start with this `README.md`).

## Overview
MoveAhead API v1 is an Express.js REST API written in TypeScript. It provides endpoints for accounts/auth, users, branches, companies, enquiries, dashboard stats, and health checks.

Key characteristics:
- **TypeScript-first** Express server (`src/index.ts`)
- **MySQL via Prisma** (`src/prisma/`)
- **Layered structure**: routes → controllers → services → Prisma
- **Security-focused request logging**: structured request/response logs written to `logs/security.log` by `RequestMiddleware`.
- **Log retention**: log files are kept, but log *entries* older than 30 days are pruned on startup.

## Project structure
- `src/index.ts` - App bootstrap
- `src/routes/` - Route modules (HTTP endpoints)
- `src/controllers/` - Request handlers
- `src/services/` - Business logic
- `src/middlewares/` - Express middlewares (auth, validation, error handler, upload, etc.)
- `src/security/request/` - RequestMiddleware (UA parsing, bot detection, security logging)
- `src/prisma/` - Prisma client + schema
- `src/swagger/` - Swagger JSON definitions
- `logs/` - File-based logs (`app.log`, `error.log`, `security.log`, `performance.log`, etc.)

## Logging (important)
- Logging is **file-only** (no console logging).
- `logs/security.log` receives RequestMiddleware logs including:
	- requestId, method, path, ip
	- UAParser details (browser/os/cpu/device/engine + `i*` aliases)
	- bot detection flag
- On startup, the logger **creates log files if missing**.
- On startup, the logger prunes entries older than **30 days** inside the main `.log` files.
	- Override with `LOG_RETENTION_DAYS`.

## Running locally
1. Install dependencies: `npm install`
2. Configure environment variables (see your local env setup / credentials docs)
3. Run dev server: `npm run dev`

## Code change rule
Before making changes, read the relevant Markdown docs in this repo. If a change conflicts with the docs, update the docs first or align the change to the documented behavior.
