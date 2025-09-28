/*
  Warnings:

  - You are about to alter the column `rating` on the `doctor_service_ratings` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(2,1)`.
  - Made the column `overall_rating` on table `doctor_profiles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `specializations` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `appointment_slots` MODIFY `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `updated_at` TIMESTAMP(6) NULL;

-- AlterTable
ALTER TABLE `appointments` MODIFY `appointment_date` TIMESTAMP(6) NOT NULL,
    MODIFY `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `updated_at` TIMESTAMP(6) NULL;

-- AlterTable
ALTER TABLE `book_appointments` MODIFY `date` TIMESTAMP(6) NOT NULL,
    MODIFY `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `updated_at` TIMESTAMP(6) NULL;

-- AlterTable
ALTER TABLE `doctor_profiles` MODIFY `overall_rating` DECIMAL(2, 1) NOT NULL,
    MODIFY `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `updated_at` TIMESTAMP(6) NULL;

-- AlterTable
ALTER TABLE `doctor_service_ratings` MODIFY `rating` DECIMAL(2, 1) NOT NULL,
    MODIFY `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `updated_at` TIMESTAMP(6) NULL;

-- AlterTable
ALTER TABLE `doctor_service_specializations` MODIFY `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `updated_at` TIMESTAMP(6) NULL;

-- AlterTable
ALTER TABLE `locations` MODIFY `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `updated_at` TIMESTAMP(6) NULL;

-- AlterTable
ALTER TABLE `payments` MODIFY `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `updated_at` TIMESTAMP(6) NULL;

-- AlterTable
ALTER TABLE `service` MODIFY `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `updated_at` TIMESTAMP(6) NULL;

-- AlterTable
ALTER TABLE `specializations` MODIFY `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `updated_at` TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `updated_at` TIMESTAMP(6) NULL;
