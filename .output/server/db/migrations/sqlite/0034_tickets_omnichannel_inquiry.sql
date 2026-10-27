-- 升级工单表支持未登录访客留言咨询：user_id 放宽为可空，补充访客标识、联系方式与访问令牌字段。
CREATE TABLE `__new_tickets` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `ticket_no` text NOT NULL,
  `user_id` integer REFERENCES `users`(`id`),
  `visitor_id` text,
  `contact_name` text,
  `contact_email` text,
  `contact_info` text,
  `access_token` text,
  `category` text DEFAULT 'other' NOT NULL,
  `title` text NOT NULL,
  `status` text DEFAULT 'open' NOT NULL,
  `priority` text DEFAULT 'normal' NOT NULL,
  `context` text,
  `last_replied_at` integer DEFAULT (unixepoch()) NOT NULL,
  `last_replied_by` text DEFAULT 'user' NOT NULL,
  `created_at` integer DEFAULT (unixepoch()) NOT NULL,
  `updated_at` integer DEFAULT (unixepoch()) NOT NULL
);--> statement-breakpoint
INSERT INTO `__new_tickets`(
  `id`, `ticket_no`, `user_id`, `category`, `title`, `status`, `priority`,
  `context`, `last_replied_at`, `last_replied_by`, `created_at`, `updated_at`
) SELECT
  `id`, `ticket_no`, `user_id`, `category`, `title`, `status`, `priority`,
  `context`, `last_replied_at`, `last_replied_by`, `created_at`, `updated_at`
FROM `tickets`;--> statement-breakpoint
DROP TABLE `tickets`;--> statement-breakpoint
ALTER TABLE `__new_tickets` RENAME TO `tickets`;--> statement-breakpoint
CREATE UNIQUE INDEX `tickets_ticket_no_unique` ON `tickets` (`ticket_no`);--> statement-breakpoint
CREATE INDEX `tickets_user_id_idx` ON `tickets` (`user_id`);--> statement-breakpoint
CREATE INDEX `tickets_visitor_id_idx` ON `tickets` (`visitor_id`);--> statement-breakpoint
CREATE INDEX `tickets_status_idx` ON `tickets` (`status`);--> statement-breakpoint
CREATE INDEX `tickets_category_idx` ON `tickets` (`category`);--> statement-breakpoint
CREATE INDEX `tickets_last_replied_at_idx` ON `tickets` (`last_replied_at`);
