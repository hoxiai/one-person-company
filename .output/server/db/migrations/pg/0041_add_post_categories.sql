CREATE TABLE IF NOT EXISTS "post_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text DEFAULT '' NOT NULL,
	"description" text,
	"locales" jsonb,
	"sort" integer DEFAULT 0 NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"meta_data" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "post_categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN IF NOT EXISTS "category_id" integer;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_category_id_post_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."post_categories"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
