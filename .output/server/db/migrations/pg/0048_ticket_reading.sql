ALTER TABLE "tickets" ADD COLUMN "read_baseline_message_id" integer DEFAULT 0 NOT NULL,
  ADD COLUMN "user_last_read_message_id" integer,
  ADD COLUMN "admin_last_read_message_id" integer,
  ADD COLUMN "user_last_read_at" timestamp with time zone,
  ADD COLUMN "admin_last_read_at" timestamp with time zone;
--> statement-breakpoint
UPDATE "tickets" SET "read_baseline_message_id" = coalesce((SELECT max("id") FROM "ticket_messages" WHERE "ticket_id" = "tickets"."id"), 0);
--> statement-breakpoint
CREATE INDEX "ticket_messages_read_idx" ON "ticket_messages" ("ticket_id", "id", "sender_type");
