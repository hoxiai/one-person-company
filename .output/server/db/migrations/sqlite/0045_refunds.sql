CREATE TABLE `refunds` (
 `id` text PRIMARY KEY NOT NULL,
 `order_id` text NOT NULL REFERENCES `orders`(`id`),
 `user_id` integer,
 `amount` real NOT NULL,
 `currency` text NOT NULL,
 `pay_method` text NOT NULL,
 `trade_no` text,
 `reason` text NOT NULL,
 `status` text DEFAULT 'requested' NOT NULL,
 `provider_refund_id` text,
 `provider_fingerprint` text,
 `requested_by` text NOT NULL,
 `reviewed_by` integer,
 `review_note` text,
 `last_error` text,
 `effects_step` integer DEFAULT 0 NOT NULL,
 `effects_error` text,
 `lease_token` text,
 `lease_until` integer,
 `created_at` integer DEFAULT (unixepoch()) NOT NULL,
 `updated_at` integer DEFAULT (unixepoch()) NOT NULL,
 `succeeded_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `refunds_order_id_unique` ON `refunds` (`order_id`);
--> statement-breakpoint
CREATE INDEX `refunds_status_updated_idx` ON `refunds` (`status`,`updated_at`);
