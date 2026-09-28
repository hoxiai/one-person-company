ALTER TABLE `comments` ADD COLUMN `source` text DEFAULT 'local' NOT NULL;
--> statement-breakpoint
ALTER TABLE `comments` ADD COLUMN `external_id` text;
--> statement-breakpoint
ALTER TABLE `comments` ADD COLUMN `external_url` text;
--> statement-breakpoint
ALTER TABLE `comments` ADD COLUMN `extra_data` text;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `comments_source_external_idx` ON `comments` (`target_type`, `target_id`, `source`, `external_id`);
