-- AINode 钱包模式下充值台账不再绑定钱包：wallet_id 放宽为可空。
-- SQLite 不能修改列约束，按 drizzle 的重建表方式迁移，数据与索引原样保留。
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_topups` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `order_id` text NOT NULL UNIQUE,
  `user_id` integer NOT NULL,
  `wallet_id` integer,
  `source` text DEFAULT 'order' NOT NULL,
  `payment_amount` real NOT NULL,
  `payment_currency` text NOT NULL,
  `credit_amount_cents` integer NOT NULL,
  `credit_currency` text NOT NULL,
  `exchange_rate` real DEFAULT 1 NOT NULL,
  `balance_type` text DEFAULT 'cash' NOT NULL,
  `status` text DEFAULT 'pending' NOT NULL,
  `credit_event_id` text NOT NULL UNIQUE,
  `refund_event_id` text UNIQUE,
  `retry_count` integer DEFAULT 0 NOT NULL,
  `shortfall_cents` integer DEFAULT 0 NOT NULL,
  `last_error` text,
  `paid_at` integer,
  `credited_at` integer,
  `refunded_at` integer,
  `created_at` integer DEFAULT (unixepoch()) NOT NULL,
  `updated_at` integer DEFAULT (unixepoch()) NOT NULL,
  FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON UPDATE no action ON DELETE cascade,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
  FOREIGN KEY (`wallet_id`) REFERENCES `user_wallets`(`id`) ON UPDATE no action ON DELETE no action
);--> statement-breakpoint
INSERT INTO `__new_topups`(
  `id`, `order_id`, `user_id`, `wallet_id`, `source`, `payment_amount`, `payment_currency`,
  `credit_amount_cents`, `credit_currency`, `exchange_rate`, `balance_type`, `status`,
  `credit_event_id`, `refund_event_id`, `retry_count`, `shortfall_cents`, `last_error`,
  `paid_at`, `credited_at`, `refunded_at`, `created_at`, `updated_at`
) SELECT
  `id`, `order_id`, `user_id`, `wallet_id`, `source`, `payment_amount`, `payment_currency`,
  `credit_amount_cents`, `credit_currency`, `exchange_rate`, `balance_type`, `status`,
  `credit_event_id`, `refund_event_id`, `retry_count`, `shortfall_cents`, `last_error`,
  `paid_at`, `credited_at`, `refunded_at`, `created_at`, `updated_at`
FROM `topups`;--> statement-breakpoint
DROP TABLE `topups`;--> statement-breakpoint
ALTER TABLE `__new_topups` RENAME TO `topups`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE INDEX `idx_topups_user_created_at` ON `topups` (`user_id`, `created_at`);--> statement-breakpoint
CREATE INDEX `idx_topups_status_updated_at` ON `topups` (`status`, `updated_at`);
