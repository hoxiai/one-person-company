CREATE TABLE IF NOT EXISTS `redeem_codes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`code` varchar(64) NOT NULL,
	`batch_id` varchar(64),
	`balance_type` varchar(20) NOT NULL DEFAULT 'cash',
	`amount_cents` bigint NOT NULL DEFAULT 0,
	`currency` varchar(16) NOT NULL DEFAULT 'USD',
	`status` varchar(20) NOT NULL DEFAULT 'active',
	`expires_at` timestamp,
	`used_by` int,
	`used_at` timestamp,
	`remark` text NOT NULL,
	`created_by` int,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `redeem_codes_id` PRIMARY KEY(`id`),
	CONSTRAINT `redeem_codes_code_unique` UNIQUE(`code`),
	CONSTRAINT `redeem_codes_used_by_users_id_fk` FOREIGN KEY (`used_by`) REFERENCES `users`(`id`) ON DELETE set null ON UPDATE no action
);
--> statement-breakpoint
CREATE INDEX `redeem_codes_status_created_idx` ON `redeem_codes` (`status`,`created_at`);
--> statement-breakpoint
CREATE INDEX `redeem_codes_batch_idx` ON `redeem_codes` (`batch_id`);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `redeem_redemptions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`code_id` int NOT NULL,
	`user_id` int NOT NULL,
	`batch_id` varchar(64),
	`amount_cents` bigint NOT NULL DEFAULT 0,
	`currency` varchar(16) NOT NULL DEFAULT 'USD',
	`event_id` varchar(255) NOT NULL,
	`status` varchar(20) NOT NULL DEFAULT 'completed',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `redeem_redemptions_id` PRIMARY KEY(`id`),
	CONSTRAINT `redeem_redemptions_code_id_unique` UNIQUE(`code_id`),
	CONSTRAINT `redeem_redemptions_event_id_unique` UNIQUE(`event_id`),
	CONSTRAINT `redeem_redemptions_batch_user_unique` UNIQUE(`batch_id`,`user_id`),
	CONSTRAINT `redeem_redemptions_code_id_redeem_codes_id_fk` FOREIGN KEY (`code_id`) REFERENCES `redeem_codes`(`id`) ON DELETE cascade ON UPDATE no action,
	CONSTRAINT `redeem_redemptions_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action
);
