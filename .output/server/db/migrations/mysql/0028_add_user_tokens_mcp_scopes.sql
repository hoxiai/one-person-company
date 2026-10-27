ALTER TABLE `user_tokens` ADD `scopes` json;
--> statement-breakpoint
ALTER TABLE `user_tokens` ADD `client_id` varchar(191);
--> statement-breakpoint
ALTER TABLE `user_tokens` ADD `client_name` varchar(191);
