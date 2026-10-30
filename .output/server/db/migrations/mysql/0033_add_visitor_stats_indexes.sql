CREATE INDEX `visitor_events_created_at_idx` ON `visitor_events` (`created_at`);
--> statement-breakpoint
CREATE INDEX `visitor_profiles_last_seen_at_idx` ON `visitor_profiles` (`last_seen_at`);
--> statement-breakpoint
CREATE INDEX `visitor_profiles_user_id_idx` ON `visitor_profiles` (`user_id`);
--> statement-breakpoint
CREATE INDEX `orders_paid_at_idx` ON `orders` (`paid_at`);
