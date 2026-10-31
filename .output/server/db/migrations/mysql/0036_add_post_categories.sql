CREATE TABLE IF NOT EXISTS `post_categories` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(191) NOT NULL,
	`name` varchar(191) NOT NULL DEFAULT '',
	`description` text,
	`locales` json,
	`sort` int NOT NULL DEFAULT 0,
	`is_active` boolean NOT NULL DEFAULT true,
	`meta_data` json,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `post_categories_id` PRIMARY KEY(`id`),
	CONSTRAINT `post_categories_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
ALTER TABLE `posts` ADD COLUMN `category_id` int;
--> statement-breakpoint
ALTER TABLE `posts` ADD CONSTRAINT `posts_category_id_post_categories_id_fk` FOREIGN KEY (`category_id`) REFERENCES `post_categories`(`id`) ON DELETE set null ON UPDATE no action;
