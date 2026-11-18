CREATE TABLE IF NOT EXISTS "account_deletion_requests" (
  "id" serial PRIMARY KEY NOT NULL,
  "user_id" integer NOT NULL,
  "email_snapshot" text NOT NULL,
  "nickname_snapshot" text,
  "status" text DEFAULT 'pending' NOT NULL,
  "source" text DEFAULT 'user' NOT NULL,
  "reason" text,
  "contact_info" text,
  "account_snapshot" jsonb,
  "review_note" text,
  "reviewed_by_admin_id" integer,
  "reviewed_by_admin_name" text,
  "reviewed_at" timestamp with time zone,
  "archived_at" timestamp with time zone,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
  ALTER TABLE "account_deletion_requests" ADD CONSTRAINT "account_deletion_requests_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "account_deletion_requests_user_status_idx" ON "account_deletion_requests" ("user_id","status");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "account_deletion_requests_status_created_idx" ON "account_deletion_requests" ("status","created_at");
