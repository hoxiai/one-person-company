ALTER TABLE `products` ADD COLUMN `status` text DEFAULT 'active' NOT NULL;
--> statement-breakpoint
UPDATE `products` SET `status` = 'inactive' WHERE `is_active` = 0;
