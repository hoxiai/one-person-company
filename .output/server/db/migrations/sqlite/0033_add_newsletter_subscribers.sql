CREATE TABLE IF NOT EXISTS `newsletter_subscribers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`channel` text DEFAULT 'email' NOT NULL,
	`target` text NOT NULL,
	`topic` text DEFAULT 'general' NOT NULL,
	`source` text DEFAULT 'web' NOT NULL,
	`locale` text DEFAULT 'zh' NOT NULL,
	`status` text DEFAULT 'active' NOT NULL,
	`unsubscribe_token` text NOT NULL,
	`user_id` integer,
	`meta_data` text,
	`last_notified_at` integer,
	`unsubscribed_at` integer,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `newsletter_subscribers_unsubscribe_token_unique` ON `newsletter_subscribers` (`unsubscribe_token`);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `newsletter_subscribers_channel_target_topic_unique` ON `newsletter_subscribers` (`channel`,`target`,`topic`);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `newsletter_subscribers_status_topic_idx` ON `newsletter_subscribers` (`status`,`topic`,`channel`);
