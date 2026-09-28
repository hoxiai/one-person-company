CREATE TABLE IF NOT EXISTS `likes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`target_type` text NOT NULL,
	`target_id` text NOT NULL,
	`user_id` integer REFERENCES `users`(`id`) ON DELETE cascade,
	`visitor_id` text NOT NULL,
	`ip` text,
	`user_agent` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `likes_target_idx` ON `likes` (`target_type`, `target_id`);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `likes_target_user_idx` ON `likes` (`target_type`, `target_id`, `user_id`);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `likes_target_visitor_idx` ON `likes` (`target_type`, `target_id`, `visitor_id`);
--> statement-breakpoint
ALTER TABLE `products` ADD COLUMN `likes` integer DEFAULT 0 NOT NULL;
--> statement-breakpoint
ALTER TABLE `posts` ADD COLUMN `likes` integer DEFAULT 0 NOT NULL;
--> statement-breakpoint
ALTER TABLE `posts` ADD COLUMN `comments` integer DEFAULT 0 NOT NULL;
--> statement-breakpoint
ALTER TABLE `comments` ADD COLUMN `likes` integer DEFAULT 0 NOT NULL;
