CREATE TABLE `account_deletion_requests` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `user_id` integer NOT NULL,
  `email_snapshot` text NOT NULL,
  `nickname_snapshot` text,
  `status` text DEFAULT 'pending' NOT NULL,
  `source` text DEFAULT 'user' NOT NULL,
  `reason` text,
  `contact_info` text,
  `account_snapshot` text,
  `review_note` text,
  `reviewed_by_admin_id` integer,
  `reviewed_by_admin_name` text,
  `reviewed_at` integer,
  `archived_at` integer,
  `created_at` integer DEFAULT (unixepoch()) NOT NULL,
  `updated_at` integer DEFAULT (unixepoch()) NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `account_deletion_requests_user_status_idx` ON `account_deletion_requests` (`user_id`,`status`);
--> statement-breakpoint
CREATE INDEX `account_deletion_requests_status_created_idx` ON `account_deletion_requests` (`status`,`created_at`);
