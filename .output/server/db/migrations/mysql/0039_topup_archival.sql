ALTER TABLE `topups` ADD COLUMN `archived_at` timestamp NULL;
--> statement-breakpoint
ALTER TABLE `topups` ADD COLUMN `archived_by` int;
--> statement-breakpoint
ALTER TABLE `topups` ADD COLUMN `archive_reason` text;
