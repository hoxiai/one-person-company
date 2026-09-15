ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "status" text DEFAULT 'active' NOT NULL;
--> statement-breakpoint
UPDATE "products" SET "status" = 'inactive' WHERE "is_active" = false;
