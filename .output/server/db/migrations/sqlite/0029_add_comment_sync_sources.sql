CREATE TABLE IF NOT EXISTS `comment_sync_sources` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`target_type` text NOT NULL,
	`target_id` text NOT NULL,
	`source` text NOT NULL,
	`external_id` text NOT NULL,
	`external_url` text,
	`auto_sync` integer DEFAULT true NOT NULL,
	`sync_interval` integer DEFAULT 60 NOT NULL,
	`default_status` text DEFAULT 'approved' NOT NULL,
	`last_synced_at` integer,
	`last_sync_status` text DEFAULT 'idle' NOT NULL,
	`last_error` text,
	`total_synced` integer DEFAULT 0 NOT NULL,
	`extra_data` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch())
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `comment_sync_sources_target_source_unique` ON `comment_sync_sources` (`target_type`,`target_id`,`source`);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `comment_sync_sources_auto_sync_idx` ON `comment_sync_sources` (`auto_sync`,`last_synced_at`);
