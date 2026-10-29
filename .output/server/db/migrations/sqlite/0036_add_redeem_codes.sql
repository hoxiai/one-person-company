CREATE TABLE IF NOT EXISTS `redeem_codes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`code` text NOT NULL,
	`batch_id` text,
	`balance_type` text DEFAULT 'cash' NOT NULL,
	`amount_cents` integer DEFAULT 0 NOT NULL,
	`currency` text DEFAULT 'USD' NOT NULL,
	`status` text DEFAULT 'active' NOT NULL,
	`expires_at` integer,
	`used_by` integer,
	`used_at` integer,
	`remark` text DEFAULT '' NOT NULL,
	`created_by` integer,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`used_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `redeem_codes_code_unique` ON `redeem_codes` (`code`);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `redeem_codes_status_created_idx` ON `redeem_codes` (`status`,`created_at`);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `redeem_codes_batch_idx` ON `redeem_codes` (`batch_id`);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `redeem_redemptions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`code_id` integer NOT NULL,
	`user_id` integer NOT NULL,
	`batch_id` text,
	`amount_cents` integer DEFAULT 0 NOT NULL,
	`currency` text DEFAULT 'USD' NOT NULL,
	`event_id` text NOT NULL,
	`status` text DEFAULT 'completed' NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`code_id`) REFERENCES `redeem_codes`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `redeem_redemptions_code_id_unique` ON `redeem_redemptions` (`code_id`);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `redeem_redemptions_event_id_unique` ON `redeem_redemptions` (`event_id`);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `redeem_redemptions_batch_user_unique` ON `redeem_redemptions` (`batch_id`,`user_id`);
