CREATE TABLE IF NOT EXISTS "promo_applications" (
  "id" serial PRIMARY KEY NOT NULL,
  "user_id" integer NOT NULL REFERENCES "users"("id"),
  "status" text DEFAULT 'pending' NOT NULL,
  "channel_info" text,
  "contact" text,
  "reason" text,
  "review_note" text,
  "reviewed_by_admin_id" integer,
  "reviewed_at" timestamp with time zone,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tickets" (
  "id" serial PRIMARY KEY NOT NULL,
  "ticket_no" text NOT NULL UNIQUE,
  "user_id" integer NOT NULL REFERENCES "users"("id"),
  "category" text DEFAULT 'other' NOT NULL,
  "title" text NOT NULL,
  "status" text DEFAULT 'open' NOT NULL,
  "priority" text DEFAULT 'normal' NOT NULL,
  "context" jsonb,
  "last_replied_at" timestamp with time zone DEFAULT now() NOT NULL,
  "last_replied_by" text DEFAULT 'user' NOT NULL,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tickets_user_id_idx" ON "tickets" ("user_id");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tickets_status_idx" ON "tickets" ("status");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tickets_category_idx" ON "tickets" ("category");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tickets_last_replied_at_idx" ON "tickets" ("last_replied_at");
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ticket_messages" (
  "id" serial PRIMARY KEY NOT NULL,
  "ticket_id" integer NOT NULL REFERENCES "tickets"("id") ON DELETE CASCADE,
  "sender_type" text NOT NULL,
  "sender_id" integer,
  "sender_name" text DEFAULT '' NOT NULL,
  "content" text NOT NULL,
  "attachments" jsonb,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "ticket_messages_ticket_id_idx" ON "ticket_messages" ("ticket_id");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "ticket_messages_created_at_idx" ON "ticket_messages" ("created_at");
