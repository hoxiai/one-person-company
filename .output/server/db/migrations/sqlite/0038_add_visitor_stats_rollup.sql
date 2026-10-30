-- 访客统计日汇总:visitor_rollup_days(每日指针 + 去重集合)、visitor_day_facts(每访客每天)、visitor_daily_stats(每天 × 维度)。纯新增。
CREATE TABLE IF NOT EXISTS `visitor_rollup_days` (
	`stat_date` text PRIMARY KEY NOT NULL,
	`run_id` text NOT NULL,
	`timezone` text NOT NULL,
	`site_host` text NOT NULL,
	`rollup_version` integer NOT NULL,
	`is_final` integer DEFAULT false NOT NULL,
	`day_start` integer NOT NULL,
	`day_end` integer NOT NULL,
	`computed_at` integer NOT NULL,
	`set_visitors` text,
	`set_ips` text,
	`set_page_views` text,
	`set_products` text,
	`set_checkouts` text,
	`set_auth` text,
	`set_login` text,
	`set_register` text,
	`set_external` text,
	`set_campaign` text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `visitor_day_facts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`stat_date` text NOT NULL,
	`run_id` text NOT NULL,
	`visitor_id` text NOT NULL,
	`user_id` integer,
	`first_source_hash` integer DEFAULT 0 NOT NULL,
	`first_source_key` text NOT NULL,
	`first_source_type` text NOT NULL,
	`first_source` text NOT NULL,
	`first_medium` text,
	`first_campaign` text,
	`first_content` text,
	`first_term` text,
	`first_referrer` text,
	`first_source_label` text NOT NULL,
	`last_source_hash` integer DEFAULT 0 NOT NULL,
	`last_source_key` text NOT NULL,
	`last_source_type` text NOT NULL,
	`last_source` text NOT NULL,
	`last_medium` text,
	`last_campaign` text,
	`last_content` text,
	`last_term` text,
	`last_referrer` text,
	`last_source_label` text NOT NULL,
	`page_views` integer DEFAULT 0 NOT NULL,
	`product_views` integer DEFAULT 0 NOT NULL,
	`checkouts` integer DEFAULT 0 NOT NULL,
	`auth_count` integer DEFAULT 0 NOT NULL,
	`registered` integer DEFAULT false NOT NULL,
	`logged_in` integer DEFAULT false NOT NULL,
	`external` integer DEFAULT false NOT NULL,
	`tagged` integer DEFAULT false NOT NULL,
	`has_events` integer DEFAULT false NOT NULL,
	`active_hours` integer DEFAULT 0 NOT NULL,
	`ip` text,
	`country` text,
	`region` text,
	`city` text,
	`device_type` text,
	`browser` text,
	`os` text,
	`landing_path` text NOT NULL,
	`last_path` text NOT NULL,
	`first_seen_at` integer,
	`last_seen_at` integer NOT NULL,
	`order_ids` text,
	`has_orders` integer DEFAULT false NOT NULL,
	`search_text` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `visitor_day_facts_run_visitor_unique` ON `visitor_day_facts` (`stat_date`,`run_id`,`visitor_id`);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `visitor_day_facts_date_seen_idx` ON `visitor_day_facts` (`stat_date`,`last_seen_at`);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `visitor_day_facts_visitor_date_idx` ON `visitor_day_facts` (`visitor_id`,`stat_date`);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `visitor_day_facts_date_last_source_idx` ON `visitor_day_facts` (`stat_date`,`last_source_hash`);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `visitor_day_facts_date_first_source_idx` ON `visitor_day_facts` (`stat_date`,`first_source_hash`);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `visitor_daily_stats` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`stat_date` text NOT NULL,
	`run_id` text NOT NULL,
	`dimension` text NOT NULL,
	`dim_key` text NOT NULL,
	`visitors` integer DEFAULT 0 NOT NULL,
	`event_visitors` integer DEFAULT 0 NOT NULL,
	`page_views` integer DEFAULT 0 NOT NULL,
	`views` integer DEFAULT 0 NOT NULL,
	`page_view_visitors` integer DEFAULT 0 NOT NULL,
	`product_visitors` integer DEFAULT 0 NOT NULL,
	`checkout_visitors` integer DEFAULT 0 NOT NULL,
	`auth_visitors` integer DEFAULT 0 NOT NULL,
	`login_visitors` integer DEFAULT 0 NOT NULL,
	`register_visitors` integer DEFAULT 0 NOT NULL,
	`external_visitors` integer DEFAULT 0 NOT NULL,
	`campaign_visitors` integer DEFAULT 0 NOT NULL,
	`ai_visitors` integer DEFAULT 0 NOT NULL,
	`search_visitors` integer DEFAULT 0 NOT NULL,
	`samples` text
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `visitor_daily_stats_date_run_dim_idx` ON `visitor_daily_stats` (`stat_date`,`run_id`,`dimension`);
