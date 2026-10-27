ALTER TABLE "user_tokens" ADD COLUMN IF NOT EXISTS "scopes" jsonb;
--> statement-breakpoint
ALTER TABLE "user_tokens" ADD COLUMN IF NOT EXISTS "client_id" text;
--> statement-breakpoint
ALTER TABLE "user_tokens" ADD COLUMN IF NOT EXISTS "client_name" text;
