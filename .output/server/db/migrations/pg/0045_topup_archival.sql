ALTER TABLE "topups" ADD COLUMN "archived_at" timestamp with time zone;
--> statement-breakpoint
ALTER TABLE "topups" ADD COLUMN "archived_by" integer;
--> statement-breakpoint
ALTER TABLE "topups" ADD COLUMN "archive_reason" text;
