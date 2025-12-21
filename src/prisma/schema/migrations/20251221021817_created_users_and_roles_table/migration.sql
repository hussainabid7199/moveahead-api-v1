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
ALTER TABLE `user_roles` ADD CONSTRAINT `user_roles_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_roles` ADD CONSTRAINT `user_roles_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
