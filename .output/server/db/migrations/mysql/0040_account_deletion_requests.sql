CREATE TABLE IF NOT EXISTS `account_deletion_requests` (
  `id` int AUTO_INCREMENT NOT NULL,
  `user_id` int NOT NULL,
  `email_snapshot` varchar(191) NOT NULL,
  `nickname_snapshot` varchar(191),
  `status` varchar(32) NOT NULL DEFAULT 'pending',
  `source` varchar(32) NOT NULL DEFAULT 'user',
  `reason` text,
  `contact_info` varchar(191),
  `account_snapshot` json,
  `review_note` text,
  `reviewed_by_admin_id` int,
  `reviewed_by_admin_name` varchar(191),
  `reviewed_at` timestamp NULL,
  `archived_at` timestamp NULL,
  `created_at` timestamp NOT NULL DEFAULT (now()),
  `updated_at` timestamp NOT NULL DEFAULT (now()),
  CONSTRAINT `account_deletion_requests_id` PRIMARY KEY(`id`),
  CONSTRAINT `account_deletion_requests_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action
);
--> statement-breakpoint
CREATE INDEX `account_deletion_requests_user_status_idx` ON `account_deletion_requests` (`user_id`,`status`);
--> statement-breakpoint
CREATE INDEX `account_deletion_requests_status_created_idx` ON `account_deletion_requests` (`status`,`created_at`);
