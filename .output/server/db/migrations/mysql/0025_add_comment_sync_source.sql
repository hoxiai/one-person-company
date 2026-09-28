ALTER TABLE `comments` ADD COLUMN `source` varchar(32) DEFAULT 'local' NOT NULL;
--> statement-breakpoint
ALTER TABLE `comments` ADD COLUMN `external_id` varchar(128);
--> statement-breakpoint
ALTER TABLE `comments` ADD COLUMN `external_url` text;
--> statement-breakpoint
ALTER TABLE `comments` ADD COLUMN `extra_data` json;
--> statement-breakpoint
CREATE INDEX `comments_source_external_idx` ON `comments` (`target_type`, `target_id`, `source`, `external_id`);
