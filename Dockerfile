# FROM node:alpine

# WORKDIR /app

# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install

# COPY src ./src
# COPY public ./
# COPY tsconfig.json ./

# RUN npm run prisma:generate
# RUN npm run build

# RUN cp -r src/prisma/generated dist/prisma/generated

# EXPOSE 3001

# CMD ["npm", "run", "start"]


# ─────────────────────────────────────────────
# Stage 1: Builder
# ─────────────────────────────────────────────
FROM node:alpine AS builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY src ./src
COPY public ./public
COPY tsconfig.json ./

RUN npm run prisma:generate
RUN npm run build

# copy prisma generated
RUN mkdir -p dist/prisma
RUN cp -r src/prisma/generated dist/prisma/generated

# copy swagger files
RUN mkdir -p dist/swagger
RUN cp -r src/swagger/* dist/swagger/


# ─────────────────────────────────────────────
# Stage 2: Production
# ─────────────────────────────────────────────
FROM node:alpine AS production

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public

EXPOSE 5000

CMD ["npm", "run", "start"]