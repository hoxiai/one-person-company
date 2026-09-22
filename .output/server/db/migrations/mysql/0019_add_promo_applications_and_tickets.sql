CREATE TABLE IF NOT EXISTS `promo_applications` (
  `id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `user_id` int NOT NULL,
  `status` varchar(64) DEFAULT 'pending' NOT NULL,
  `channel_info` text,
  `contact` text,
  `reason` text,
  `review_note` text,
  `reviewed_by_admin_id` int,
  `reviewed_at` timestamp NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT `promo_applications_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `tickets` (
  `id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `ticket_no` varchar(64) NOT NULL,
  `user_id` int NOT NULL,
  `category` varchar(64) DEFAULT 'other' NOT NULL,
  `title` text NOT NULL,
  `status` varchar(32) DEFAULT 'open' NOT NULL,
  `priority` varchar(32) DEFAULT 'normal' NOT NULL,
  `context` json,
  `last_replied_at` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `last_replied_by` varchar(32) DEFAULT 'user' NOT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT `tickets_ticket_no_unique` UNIQUE (`ticket_no`),
  CONSTRAINT `tickets_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`),
  INDEX `tickets_user_id_idx` (`user_id`),
  INDEX `tickets_status_idx` (`status`),
  INDEX `tickets_category_idx` (`category`),
  INDEX `tickets_last_replied_at_idx` (`last_replied_at`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `ticket_messages` (
  `id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `ticket_id` int NOT NULL,
  `sender_type` varchar(32) NOT NULL,
  `sender_id` int,
  `sender_name` varchar(128) DEFAULT '' NOT NULL,
  `content` text NOT NULL,
  `attachments` json,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT `ticket_messages_ticket_id_tickets_id_fk` FOREIGN KEY (`ticket_id`) REFERENCES `tickets`(`id`) ON DELETE CASCADE,
  INDEX `ticket_messages_ticket_id_idx` (`ticket_id`),
  INDEX `ticket_messages_created_at_idx` (`created_at`)
);
