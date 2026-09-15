ALTER TABLE `products` ADD COLUMN `status` text NOT NULL DEFAULT ('active');
--> statement-breakpoint
UPDATE `products` SET `status` = 'inactive' WHERE `is_active` = false;
