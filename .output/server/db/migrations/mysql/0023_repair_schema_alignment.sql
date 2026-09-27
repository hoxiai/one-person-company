-- Append-only repair; tolerate sites whose schema was already updated via push.
CREATE TABLE IF NOT EXISTS `email_providers` (
  `id` int AUTO_INCREMENT NOT NULL,
  `name` text NOT NULL,
  `code` text NOT NULL,
  `is_active` boolean NOT NULL DEFAULT false,
  `config_json` text,
  `send_script` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `email_providers_id` PRIMARY KEY (`id`)
);
--> statement-breakpoint
SET @apay_visitor_events_ip_ddl = (
  SELECT IF(COUNT(*) = 0, 'ALTER TABLE `visitor_events` ADD COLUMN `ip` text', 'SELECT 1')
  FROM information_schema.columns
  WHERE table_schema = DATABASE() AND table_name = 'visitor_events' AND column_name = 'ip'
);
--> statement-breakpoint
PREPARE apay_visitor_events_ip_stmt FROM @apay_visitor_events_ip_ddl;
--> statement-breakpoint
EXECUTE apay_visitor_events_ip_stmt;
--> statement-breakpoint
DEALLOCATE PREPARE apay_visitor_events_ip_stmt;
--> statement-breakpoint
SET @apay_visitor_profiles_ip_ddl = (
  SELECT IF(COUNT(*) = 0, 'ALTER TABLE `visitor_profiles` ADD COLUMN `ip` text', 'SELECT 1')
  FROM information_schema.columns
  WHERE table_schema = DATABASE() AND table_name = 'visitor_profiles' AND column_name = 'ip'
);
--> statement-breakpoint
PREPARE apay_visitor_profiles_ip_stmt FROM @apay_visitor_profiles_ip_ddl;
--> statement-breakpoint
EXECUTE apay_visitor_profiles_ip_stmt;
--> statement-breakpoint
DEALLOCATE PREPARE apay_visitor_profiles_ip_stmt;
