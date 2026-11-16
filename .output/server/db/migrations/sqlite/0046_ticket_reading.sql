ALTER TABLE `tickets` ADD `read_baseline_message_id` integer DEFAULT 0 NOT NULL;
--> statement-breakpoint
ALTER TABLE `tickets` ADD `user_last_read_message_id` integer;
--> statement-breakpoint
ALTER TABLE `tickets` ADD `admin_last_read_message_id` integer;
--> statement-breakpoint
ALTER TABLE `tickets` ADD `user_last_read_at` integer;
--> statement-breakpoint
ALTER TABLE `tickets` ADD `admin_last_read_at` integer;
--> statement-breakpoint
UPDATE `tickets` SET `read_baseline_message_id` = coalesce((SELECT max(`id`) FROM `ticket_messages` WHERE `ticket_id` = `tickets`.`id`), 0);
--> statement-breakpoint
CREATE INDEX `ticket_messages_read_idx` ON `ticket_messages` (`ticket_id`, `id`, `sender_type`);
