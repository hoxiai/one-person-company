ALTER TABLE IF EXISTS "tickets" ALTER COLUMN "user_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE IF EXISTS "tickets" ADD COLUMN IF NOT EXISTS "visitor_id" text;--> statement-breakpoint
ALTER TABLE IF EXISTS "tickets" ADD COLUMN IF NOT EXISTS "contact_name" text;--> statement-breakpoint
ALTER TABLE IF EXISTS "tickets" ADD COLUMN IF NOT EXISTS "contact_email" text;--> statement-breakpoint
ALTER TABLE IF EXISTS "tickets" ADD COLUMN IF NOT EXISTS "contact_info" text;--> statement-breakpoint
ALTER TABLE IF EXISTS "tickets" ADD COLUMN IF NOT EXISTS "access_token" text;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tickets_visitor_id_idx" ON "tickets" USING btree ("visitor_id");
