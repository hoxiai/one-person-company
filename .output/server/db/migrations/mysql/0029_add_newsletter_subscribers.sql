CREATE TABLE IF NOT EXISTS `newsletter_subscribers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`channel` varchar(32) NOT NULL DEFAULT 'email',
	`target` varchar(191) NOT NULL,
	`topic` varchar(64) NOT NULL DEFAULT 'general',
	`source` varchar(64) NOT NULL DEFAULT 'web',
	`locale` varchar(16) NOT NULL DEFAULT 'zh',
	`status` varchar(32) NOT NULL DEFAULT 'active',
	`unsubscribe_token` varchar(64) NOT NULL,
	`user_id` int,
	`meta_data` json,
	`last_notified_at` timestamp,
	`unsubscribed_at` timestamp,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `newsletter_subscribers_id` PRIMARY KEY(`id`),
	CONSTRAINT `newsletter_subscribers_unsubscribe_token_unique` UNIQUE(`unsubscribe_token`),
	CONSTRAINT `newsletter_subscribers_channel_target_topic_unique` UNIQUE(`channel`,`target`,`topic`),
	CONSTRAINT `newsletter_subscribers_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE set null ON UPDATE no action
);
--> statement-breakpoint
CREATE INDEX `newsletter_subscribers_status_topic_idx` ON `newsletter_subscribers` (`status`,`topic`,`channel`);
