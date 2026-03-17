-- CreateTable
CREATE TABLE `company` (
    `id` VARCHAR(191) NOT NULL,
    `parent_id` VARCHAR(191) NULL,
    `name` VARCHAR(200) NOT NULL,
    `website` VARCHAR(2048) NULL,
    `is_verified` BOOLEAN NOT NULL DEFAULT false,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` TIMESTAMP(6) NULL,

    INDEX `idx_company_name`(`name`),
    INDEX `idx_company_active_created`(`is_active`, `created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `branch` (
    `id` VARCHAR(191) NOT NULL,
    `company_id` VARCHAR(191) NOT NULL,
    `parent_id` VARCHAR(191) NULL,
    `name` VARCHAR(200) NOT NULL,
    `address` VARCHAR(500) NULL,
    `phone_number` VARCHAR(20) NULL,
    `latitude` DOUBLE NULL,
    `longitude` DOUBLE NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` TIMESTAMP(6) NULL,

    INDEX `idx_branch_name`(`name`),
    INDEX `idx_branch_active_created`(`is_active`, `created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_company_branch` (
    `user_id` VARCHAR(191) NOT NULL,
    `company_id` VARCHAR(191) NOT NULL,
    `branch_id` VARCHAR(191) NOT NULL,

    INDEX `idx_user_branch_user_id`(`user_id`),
    INDEX `idx_user_branch_company_id`(`company_id`),
    INDEX `idx_user_branch_branch_id`(`branch_id`),
    PRIMARY KEY (`user_id`, `company_id`, `branch_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_company` (
    `user_id` VARCHAR(191) NOT NULL,
    `company_id` VARCHAR(191) NOT NULL,

    INDEX `idx_user_company_user_id`(`user_id`),
    INDEX `idx_user_company_company_id`(`company_id`),
    PRIMARY KEY (`user_id`, `company_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password_hash` VARCHAR(1000) NULL,
    `first_name` VARCHAR(200) NULL,
    `last_name` VARCHAR(200) NULL,
    `display_name` VARCHAR(300) NULL,
    `phone_number` VARCHAR(20) NULL,
    `profile_image_url` VARCHAR(2048) NULL,
    `provider` ENUM('CREDENTIALS', 'GOOGLE', 'FACEBOOK', 'GITHUB', 'APPLE') NOT NULL DEFAULT 'CREDENTIALS',
    `provider_id` VARCHAR(100) NULL,
    `is_email_verified` BOOLEAN NOT NULL DEFAULT false,
    `is_phone_verified` BOOLEAN NOT NULL DEFAULT false,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `timezone` VARCHAR(50) NULL,
    `locale` VARCHAR(10) NULL,
    `metadata` JSON NULL,
    `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` TIMESTAMP(6) NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    INDEX `idx_users_email`(`email`),
    INDEX `idx_users_phone_number`(`phone_number`),
    INDEX `idx_users_provider_provider_id`(`provider`, `provider_id`),
    INDEX `idx_users_active_created`(`is_active`, `created_at`),
    INDEX `idx_users_provider_verified`(`provider`, `is_email_verified`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(500) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `roles_name_key`(`name`),
    INDEX `idx_roles_active`(`is_active`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_roles` (
    `user_id` VARCHAR(191) NOT NULL,
    `role_id` VARCHAR(191) NOT NULL,

    INDEX `idx_user_roles_user_id`(`user_id`),
    INDEX `idx_user_roles_role_id`(`role_id`),
    PRIMARY KEY (`user_id`, `role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `branch` ADD CONSTRAINT `branch_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_company_branch` ADD CONSTRAINT `user_company_branch_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_company_branch` ADD CONSTRAINT `user_company_branch_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_company_branch` ADD CONSTRAINT `user_company_branch_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `branch`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_company` ADD CONSTRAINT `user_company_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_company` ADD CONSTRAINT `user_company_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_roles` ADD CONSTRAINT `user_roles_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_roles` ADD CONSTRAINT `user_roles_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
