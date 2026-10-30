CREATE TABLE `visitor_rollup_days` (
	`stat_date` varchar(10) NOT NULL,
	`run_id` varchar(64) NOT NULL,
	`timezone` varchar(64) NOT NULL,
	`site_host` varchar(191) NOT NULL,
	`rollup_version` int NOT NULL,
	`is_final` boolean NOT NULL DEFAULT false,
	`day_start` timestamp NOT NULL,
	`day_end` timestamp NOT NULL,
	`computed_at` timestamp NOT NULL,
	`set_visitors` longtext,
	`set_ips` longtext,
	`set_page_views` longtext,
	`set_products` longtext,
	`set_checkouts` longtext,
	`set_auth` longtext,
	`set_login` longtext,
	`set_register` longtext,
	`set_external` longtext,
	`set_campaign` longtext,
	CONSTRAINT `visitor_rollup_days_stat_date` PRIMARY KEY(`stat_date`)
);
--> statement-breakpoint
CREATE TABLE `visitor_day_facts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`stat_date` varchar(10) NOT NULL,
	`run_id` varchar(64) NOT NULL,
	`visitor_id` varchar(191) NOT NULL,
	`user_id` int,
	`first_source_hash` int NOT NULL DEFAULT 0,
	`first_source_key` text NOT NULL,
	`first_source_type` text NOT NULL,
	`first_source` text NOT NULL,
	`first_medium` text,
	`first_campaign` text,
	`first_content` text,
	`first_term` text,
	`first_referrer` text,
	`first_source_label` text NOT NULL,
	`last_source_hash` int NOT NULL DEFAULT 0,
	`last_source_key` text NOT NULL,
	`last_source_type` text NOT NULL,
	`last_source` text NOT NULL,
	`last_medium` text,
	`last_campaign` text,
	`last_content` text,
	`last_term` text,
	`last_referrer` text,
	`last_source_label` text NOT NULL,
	`page_views` int NOT NULL DEFAULT 0,
	`product_views` int NOT NULL DEFAULT 0,
	`checkouts` int NOT NULL DEFAULT 0,
	`auth_count` int NOT NULL DEFAULT 0,
	`registered` boolean NOT NULL DEFAULT false,
	`logged_in` boolean NOT NULL DEFAULT false,
	`external` boolean NOT NULL DEFAULT false,
	`tagged` boolean NOT NULL DEFAULT false,
	`has_events` boolean NOT NULL DEFAULT false,
	`active_hours` int NOT NULL DEFAULT 0,
	`ip` text,
	`country` text,
	`region` text,
	`city` text,
	`device_type` text,
	`browser` text,
	`os` text,
	`landing_path` text NOT NULL,
	`last_path` text NOT NULL,
	`first_seen_at` timestamp,
	`last_seen_at` timestamp NOT NULL,
	`order_ids` text,
	`has_orders` boolean NOT NULL DEFAULT false,
	`search_text` text,
	CONSTRAINT `visitor_day_facts_id` PRIMARY KEY(`id`),
	CONSTRAINT `visitor_day_facts_run_visitor_unique` UNIQUE(`stat_date`,`run_id`,`visitor_id`)
);
--> statement-breakpoint
CREATE TABLE `visitor_daily_stats` (
	`id` int AUTO_INCREMENT NOT NULL,
	`stat_date` varchar(10) NOT NULL,
	`run_id` varchar(64) NOT NULL,
	`dimension` varchar(32) NOT NULL,
	`dim_key` text NOT NULL,
	`visitors` int NOT NULL DEFAULT 0,
	`event_visitors` int NOT NULL DEFAULT 0,
	`page_views` int NOT NULL DEFAULT 0,
	`views` int NOT NULL DEFAULT 0,
	`page_view_visitors` int NOT NULL DEFAULT 0,
	`product_visitors` int NOT NULL DEFAULT 0,
	`checkout_visitors` int NOT NULL DEFAULT 0,
	`auth_visitors` int NOT NULL DEFAULT 0,
	`login_visitors` int NOT NULL DEFAULT 0,
	`register_visitors` int NOT NULL DEFAULT 0,
	`external_visitors` int NOT NULL DEFAULT 0,
	`campaign_visitors` int NOT NULL DEFAULT 0,
	`ai_visitors` int NOT NULL DEFAULT 0,
	`search_visitors` int NOT NULL DEFAULT 0,
	`samples` text,
	CONSTRAINT `visitor_daily_stats_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `visitor_day_facts_date_seen_idx` ON `visitor_day_facts` (`stat_date`,`last_seen_at`);
--> statement-breakpoint
CREATE INDEX `visitor_day_facts_visitor_date_idx` ON `visitor_day_facts` (`visitor_id`,`stat_date`);
--> statement-breakpoint
CREATE INDEX `visitor_day_facts_date_last_source_idx` ON `visitor_day_facts` (`stat_date`,`last_source_hash`);
--> statement-breakpoint
CREATE INDEX `visitor_day_facts_date_first_source_idx` ON `visitor_day_facts` (`stat_date`,`first_source_hash`);
--> statement-breakpoint
CREATE INDEX `visitor_daily_stats_date_run_dim_idx` ON `visitor_daily_stats` (`stat_date`,`run_id`,`dimension`);
(node:78204) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///Users/hugh/code/hoxi/apay/server/db/schema.sqlite.ts is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /Users/hugh/code/hoxi/apay/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
