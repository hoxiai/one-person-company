-- 统计与后台看板性能索引:访客事件复合覆盖索引(PV 明细倒序、UV 子查询、独立 IP 聚合)、多日访客明细活跃时间排序索引,以及访问日志/系统日志/邮件与支付失败时间索引。
CREATE INDEX `visitor_events_event_name_created_at_idx` ON `visitor_events` (`event_name`(64), `created_at`);
--> statement-breakpoint
CREATE INDEX `visitor_events_created_at_visitor_idx` ON `visitor_events` (`created_at`, `visitor_id`(191), `event_name`(64));
--> statement-breakpoint
CREATE INDEX `visitor_events_created_at_ip_idx` ON `visitor_events` (`created_at`, `ip`(64));
--> statement-breakpoint
CREATE INDEX `visitor_day_facts_seen_visitor_idx` ON `visitor_day_facts` (`last_seen_at`, `visitor_id`, `stat_date`);
--> statement-breakpoint
CREATE INDEX `access_logs_created_at_idx` ON `access_logs` (`created_at`);
--> statement-breakpoint
CREATE INDEX `logs_created_at_idx` ON `logs` (`created_at`);
--> statement-breakpoint
CREATE INDEX `logs_level_created_at_idx` ON `logs` (`level`(32), `created_at`);
--> statement-breakpoint
CREATE INDEX `email_logs_status_created_at_idx` ON `email_logs` (`status`(32), `created_at`);
--> statement-breakpoint
CREATE INDEX `payment_failures_created_at_idx` ON `payment_failures` (`created_at`);
