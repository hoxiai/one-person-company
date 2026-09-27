CREATE TABLE IF NOT EXISTS "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"target_type" text NOT NULL,
	"target_id" text NOT NULL,
	"user_id" integer REFERENCES "users"("id") ON DELETE set null,
	"author_name" text NOT NULL,
	"author_email" text,
	"author_url" text,
	"content" text NOT NULL,
	"parent_id" integer,
	"status" text DEFAULT 'approved' NOT NULL,
	"ip" text,
	"user_agent" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "comments_target_status_idx" ON "comments" ("target_type", "target_id", "status", "created_at");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "comments_user_id_idx" ON "comments" ("user_id");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "comments_parent_id_idx" ON "comments" ("parent_id");
