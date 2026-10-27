CREATE TABLE IF NOT EXISTS "releases" (
	"id" serial PRIMARY KEY NOT NULL,
	"app_key" text DEFAULT 'default' NOT NULL,
	"channel" text DEFAULT 'stable' NOT NULL,
	"version" text NOT NULL,
	"version_code" integer DEFAULT 0 NOT NULL,
	"tag_name" text DEFAULT '' NOT NULL,
	"name" text DEFAULT '' NOT NULL,
	"commit" text DEFAULT '' NOT NULL,
	"html_url" text DEFAULT '' NOT NULL,
	"highlights" jsonb,
	"locales" jsonb,
	"assets" jsonb,
	"mandatory" boolean DEFAULT false NOT NULL,
	"min_upgrade_version" text,
	"is_active" boolean DEFAULT true NOT NULL,
	"meta_data" jsonb,
	"released_at" timestamp with time zone DEFAULT now() NOT NULL,
	"withdrawn_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "releases_app_channel_version_unique" ON "releases" USING btree ("app_key","channel","version");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "releases_app_version_code_idx" ON "releases" USING btree ("app_key","channel","is_active","version_code");
