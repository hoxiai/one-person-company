-- 统计/访客报表按时间区间读取访客事件、访客资料与已支付订单,补齐区间查询索引。
CREATE INDEX IF NOT EXISTS "visitor_events_created_at_idx" ON "visitor_events" USING btree ("created_at");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "visitor_profiles_last_seen_at_idx" ON "visitor_profiles" USING btree ("last_seen_at");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "visitor_profiles_user_id_idx" ON "visitor_profiles" USING btree ("user_id");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "orders_paid_at_idx" ON "orders" USING btree ("paid_at");
