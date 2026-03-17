-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('CREDENTIALS', 'GOOGLE', 'FACEBOOK', 'GITHUB', 'APPLE');

-- CreateTable
CREATE TABLE "company" (
    "id" VARCHAR(191) NOT NULL,
    "parent_id" VARCHAR(191),
    "name" VARCHAR(200) NOT NULL,
    "website" VARCHAR(2048),
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branch" (
    "id" VARCHAR(191) NOT NULL,
    "company_id" VARCHAR(191) NOT NULL,
    "parent_id" VARCHAR(191),
    "name" VARCHAR(200) NOT NULL,
    "address" VARCHAR(500),
    "phone_number" VARCHAR(20),
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_company_branch" (
    "user_id" VARCHAR(191) NOT NULL,
    "company_id" VARCHAR(191) NOT NULL,
    "branch_id" VARCHAR(191) NOT NULL,

    CONSTRAINT "user_company_branch_pkey" PRIMARY KEY ("user_id","company_id","branch_id")
);

-- CreateTable
CREATE TABLE "user_company" (
    "user_id" VARCHAR(191) NOT NULL,
    "company_id" VARCHAR(191) NOT NULL,

    CONSTRAINT "user_company_pkey" PRIMARY KEY ("user_id","company_id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(191) NOT NULL,
    "email" VARCHAR(191) NOT NULL,
    "password_hash" VARCHAR(1000),
    "first_name" VARCHAR(200),
    "last_name" VARCHAR(200),
    "display_name" VARCHAR(300),
    "phone_number" VARCHAR(20),
    "profile_image_url" VARCHAR(2048),
    "provider" "AuthProvider" NOT NULL DEFAULT 'CREDENTIALS',
    "provider_id" VARCHAR(100),
    "is_email_verified" BOOLEAN NOT NULL DEFAULT false,
    "is_phone_verified" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "timezone" VARCHAR(50),
    "locale" VARCHAR(10),
    "metadata" JSONB,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" VARCHAR(191) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500),
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_roles" (
    "user_id" VARCHAR(191) NOT NULL,
    "role_id" VARCHAR(191) NOT NULL,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("user_id","role_id")
);

-- CreateIndex
CREATE INDEX "idx_company_name" ON "company"("name");

-- CreateIndex
CREATE INDEX "idx_company_active_created" ON "company"("is_active", "created_at");

-- CreateIndex
CREATE INDEX "idx_branch_name" ON "branch"("name");

-- CreateIndex
CREATE INDEX "idx_branch_active_created" ON "branch"("is_active", "created_at");

-- CreateIndex
CREATE INDEX "idx_user_branch_user_id" ON "user_company_branch"("user_id");

-- CreateIndex
CREATE INDEX "idx_user_branch_company_id" ON "user_company_branch"("company_id");

-- CreateIndex
CREATE INDEX "idx_user_branch_branch_id" ON "user_company_branch"("branch_id");

-- CreateIndex
CREATE INDEX "idx_user_company_user_id" ON "user_company"("user_id");

-- CreateIndex
CREATE INDEX "idx_user_company_company_id" ON "user_company"("company_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "idx_users_email" ON "users"("email");

-- CreateIndex
CREATE INDEX "idx_users_phone_number" ON "users"("phone_number");

-- CreateIndex
CREATE INDEX "idx_users_provider_provider_id" ON "users"("provider", "provider_id");

-- CreateIndex
CREATE INDEX "idx_users_active_created" ON "users"("is_active", "created_at");

-- CreateIndex
CREATE INDEX "idx_users_provider_verified" ON "users"("provider", "is_email_verified");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE INDEX "idx_roles_active" ON "roles"("is_active");

-- CreateIndex
CREATE INDEX "idx_user_roles_user_id" ON "user_roles"("user_id");

-- CreateIndex
CREATE INDEX "idx_user_roles_role_id" ON "user_roles"("role_id");

-- AddForeignKey
ALTER TABLE "branch" ADD CONSTRAINT "branch_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_company_branch" ADD CONSTRAINT "user_company_branch_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_company_branch" ADD CONSTRAINT "user_company_branch_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_company_branch" ADD CONSTRAINT "user_company_branch_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "branch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_company" ADD CONSTRAINT "user_company_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_company" ADD CONSTRAINT "user_company_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;


INSERT INTO roles (id, name, description, is_active)
VALUES
  ('c535107a-e2c9-11f0-9839-00155df5cd31', 'Super Admin', 'Has full access to the entire system', 1),
  ('c5354105-e2c9-11f0-9839-00155df5cd32', 'Administrator', 'Manages company-level settings and all branches', 1),
  ('c535519d-e2c9-11f0-9839-00155df5cd33', 'Admin', 'Manages operations of a single branch', 1),
  ('c5355420-e2c9-11f0-9839-00155df5cd34', 'Doctor', 'Provides medical services within assigned branch', 1),
  ('c53555b4-e2c9-11f0-9839-00155df5cd35', 'User', 'Regular application user with limited access', 1);