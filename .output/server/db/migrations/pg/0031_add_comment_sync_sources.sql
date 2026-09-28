CREATE TABLE IF NOT EXISTS "comment_sync_sources" (
	"id" serial PRIMARY KEY NOT NULL,
	"target_type" text NOT NULL,
	"target_id" text NOT NULL,
	"source" text NOT NULL,
	"external_id" text NOT NULL,
	"external_url" text,
	"auto_sync" boolean DEFAULT true NOT NULL,
	"sync_interval" integer DEFAULT 60 NOT NULL,
	"default_status" text DEFAULT 'approved' NOT NULL,
	"last_synced_at" timestamp with time zone,
	"last_sync_status" text DEFAULT 'idle' NOT NULL,
	"last_error" text,
	"total_synced" integer DEFAULT 0 NOT NULL,
	"extra_data" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "comment_sync_sources_target_source_unique" ON "comment_sync_sources" USING btree ("target_type","target_id","source");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "comment_sync_sources_auto_sync_idx" ON "comment_sync_sources" USING btree ("auto_sync","last_synced_at");
