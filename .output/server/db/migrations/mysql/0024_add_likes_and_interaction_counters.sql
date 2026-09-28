CREATE TABLE IF NOT EXISTS `likes` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`target_type` varchar(32) NOT NULL,
	`target_id` varchar(191) NOT NULL,
	`user_id` int,
	`visitor_id` varchar(191) NOT NULL,
	`ip` varchar(64),
	`user_agent` text,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT `likes_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
	INDEX `likes_target_idx` (`target_type`, `target_id`),
	INDEX `likes_target_user_idx` (`target_type`, `target_id`, `user_id`),
	INDEX `likes_target_visitor_idx` (`target_type`, `target_id`, `visitor_id`)
);
--> statement-breakpoint
ALTER TABLE `products` ADD COLUMN `likes` int NOT NULL DEFAULT 0;
--> statement-breakpoint
ALTER TABLE `posts` ADD COLUMN `likes` int NOT NULL DEFAULT 0;
--> statement-breakpoint
ALTER TABLE `posts` ADD COLUMN `comments` int NOT NULL DEFAULT 0;
--> statement-breakpoint
ALTER TABLE `comments` ADD COLUMN `likes` int NOT NULL DEFAULT 0;
