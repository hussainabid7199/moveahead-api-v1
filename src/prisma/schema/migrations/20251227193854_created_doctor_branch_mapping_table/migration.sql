-- CreateTable
CREATE TABLE `doctor_branch` (
    `user_id` VARCHAR(191) NOT NULL,
    `branch_id` VARCHAR(191) NOT NULL,

    INDEX `idx_doctor_branch_user_id`(`user_id`),
    INDEX `idx_doctor_branch_branch_id`(`branch_id`),
    PRIMARY KEY (`user_id`, `branch_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `doctor_branch` ADD CONSTRAINT `doctor_branch_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_branch` ADD CONSTRAINT `doctor_branch_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `branch`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
