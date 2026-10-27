CREATE TABLE IF NOT EXISTS `releases` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`app_key` text DEFAULT 'default' NOT NULL,
	`channel` text DEFAULT 'stable' NOT NULL,
	`version` text NOT NULL,
	`version_code` integer DEFAULT 0 NOT NULL,
	`tag_name` text DEFAULT '' NOT NULL,
	`name` text DEFAULT '' NOT NULL,
	`commit` text DEFAULT '' NOT NULL,
	`html_url` text DEFAULT '' NOT NULL,
	`highlights` text,
	`locales` text,
	`assets` text,
	`mandatory` integer DEFAULT 0 NOT NULL,
	`min_upgrade_version` text,
	`is_active` integer DEFAULT 1 NOT NULL,
	`meta_data` text,
	`released_at` integer DEFAULT (unixepoch()) NOT NULL,
	`withdrawn_at` integer,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `releases_app_channel_version_unique` ON `releases` (`app_key`,`channel`,`version`);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `releases_app_version_code_idx` ON `releases` (`app_key`,`channel`,`is_active`,`version_code`);
