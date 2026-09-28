ALTER TABLE "comments" ADD COLUMN IF NOT EXISTS "source" text DEFAULT 'local' NOT NULL;
--> statement-breakpoint
ALTER TABLE "comments" ADD COLUMN IF NOT EXISTS "external_id" text;
--> statement-breakpoint
ALTER TABLE "comments" ADD COLUMN IF NOT EXISTS "external_url" text;
--> statement-breakpoint
ALTER TABLE "comments" ADD COLUMN IF NOT EXISTS "extra_data" jsonb;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "comments_source_external_idx" ON "comments" ("target_type", "target_id", "source", "external_id");
