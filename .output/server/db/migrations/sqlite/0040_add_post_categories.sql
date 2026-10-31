CREATE TABLE IF NOT EXISTS `post_categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`name` text DEFAULT '' NOT NULL,
	`description` text,
	`locales` text,
	`sort` integer DEFAULT 0 NOT NULL,
	`is_active` integer DEFAULT 1 NOT NULL,
	`meta_data` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch())
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `post_categories_slug_unique` ON `post_categories` (`slug`);
--> statement-breakpoint
ALTER TABLE `posts` ADD COLUMN `category_id` integer REFERENCES `post_categories`(`id`) ON UPDATE no action ON DELETE set null;
