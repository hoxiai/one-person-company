CREATE TABLE `refunds` (
 `id` varchar(64) NOT NULL PRIMARY KEY,
 `order_id` varchar(255) NOT NULL UNIQUE,
 `user_id` int,
 `amount` real NOT NULL,
 `currency` text NOT NULL,
 `pay_method` text NOT NULL,
 `trade_no` text,
 `reason` text NOT NULL,
 `status` varchar(32) DEFAULT 'requested' NOT NULL,
 `provider_refund_id` text,
 `provider_fingerprint` text,
 `requested_by` text NOT NULL,
 `reviewed_by` int,
 `review_note` text,
 `last_error` text,
 `effects_step` int DEFAULT 0 NOT NULL,
 `effects_error` text,
 `lease_token` text,
 `lease_until` timestamp NULL,
 `created_at` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
 `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
 `succeeded_at` timestamp NULL,
 FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`)
);
--> statement-breakpoint
CREATE INDEX `refunds_status_updated_idx` ON `refunds` (`status`,`updated_at`);
