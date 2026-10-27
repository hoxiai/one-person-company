CREATE TABLE IF NOT EXISTS `releases` (
	`id` int AUTO_INCREMENT NOT NULL,
	`app_key` varchar(64) NOT NULL DEFAULT 'default',
	`channel` varchar(32) NOT NULL DEFAULT 'stable',
	`version` varchar(64) NOT NULL,
	`version_code` int NOT NULL DEFAULT 0,
	`tag_name` varchar(64) NOT NULL DEFAULT '',
	`name` varchar(191) NOT NULL DEFAULT '',
	`commit` varchar(64) NOT NULL DEFAULT '',
	`html_url` text,
	`highlights` json,
	`locales` json,
	`assets` json,
	`mandatory` boolean NOT NULL DEFAULT false,
	`min_upgrade_version` varchar(64),
	`is_active` boolean NOT NULL DEFAULT true,
	`meta_data` json,
	`released_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`withdrawn_at` timestamp NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `releases_id` PRIMARY KEY(`id`),
	CONSTRAINT `releases_app_channel_version_unique` UNIQUE(`app_key`,`channel`,`version`)
);
--> statement-breakpoint
CREATE INDEX `releases_app_version_code_idx` ON `releases` (`app_key`,`channel`,`is_active`,`version_code`);
