CREATE TABLE IF NOT EXISTS `comment_sync_sources` (
	`id` int AUTO_INCREMENT NOT NULL,
	`target_type` varchar(32) NOT NULL,
	`target_id` varchar(191) NOT NULL,
	`source` varchar(32) NOT NULL,
	`external_id` varchar(128) NOT NULL,
	`external_url` text,
	`auto_sync` boolean NOT NULL DEFAULT true,
	`sync_interval` int NOT NULL DEFAULT 60,
	`default_status` varchar(32) NOT NULL DEFAULT 'approved',
	`last_synced_at` timestamp,
	`last_sync_status` varchar(32) NOT NULL DEFAULT 'idle',
	`last_error` text,
	`total_synced` int NOT NULL DEFAULT 0,
	`extra_data` json,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()),
	CONSTRAINT `comment_sync_sources_id` PRIMARY KEY(`id`),
	CONSTRAINT `comment_sync_sources_target_source_unique` UNIQUE(`target_type`,`target_id`,`source`)
);
--> statement-breakpoint
CREATE INDEX `comment_sync_sources_auto_sync_idx` ON `comment_sync_sources` (`auto_sync`,`last_synced_at`);
