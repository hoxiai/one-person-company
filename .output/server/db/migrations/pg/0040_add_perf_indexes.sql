-- 性能索引:卡密按商品+可用状态分组统计;访客日事实按 has_orders 前置过滤已支付叠加。
CREATE INDEX IF NOT EXISTS "cards_product_id_is_used_idx" ON "cards" USING btree ("product_id", "is_used");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "visitor_day_facts_has_orders_date_idx" ON "visitor_day_facts" USING btree ("has_orders", "stat_date");
