CREATE TABLE IF NOT EXISTS "newsletter_subscribers" (
	"id" serial PRIMARY KEY NOT NULL,
	"channel" text DEFAULT 'email' NOT NULL,
	"target" text NOT NULL,
	"topic" text DEFAULT 'general' NOT NULL,
	"source" text DEFAULT 'web' NOT NULL,
	"locale" text DEFAULT 'zh' NOT NULL,
	"status" text DEFAULT 'active' NOT NULL,
	"unsubscribe_token" text NOT NULL,
	"user_id" integer,
	"meta_data" jsonb,
	"last_notified_at" timestamp with time zone,
	"unsubscribed_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "newsletter_subscribers_unsubscribe_token_unique" UNIQUE("unsubscribe_token")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "newsletter_subscribers" ADD CONSTRAINT "newsletter_subscribers_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "newsletter_subscribers_channel_target_topic_unique" ON "newsletter_subscribers" USING btree ("channel","target","topic");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "newsletter_subscribers_status_topic_idx" ON "newsletter_subscribers" USING btree ("status","topic","channel");
