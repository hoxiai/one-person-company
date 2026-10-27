ALTER TABLE `tickets` MODIFY `user_id` int NULL;--> statement-breakpoint
ALTER TABLE `tickets` ADD `visitor_id` varchar(64);--> statement-breakpoint
ALTER TABLE `tickets` ADD `contact_name` varchar(128);--> statement-breakpoint
ALTER TABLE `tickets` ADD `contact_email` varchar(191);--> statement-breakpoint
ALTER TABLE `tickets` ADD `contact_info` varchar(191);--> statement-breakpoint
ALTER TABLE `tickets` ADD `access_token` varchar(64);--> statement-breakpoint
CREATE INDEX `tickets_visitor_id_idx` ON `tickets` (`visitor_id`);
