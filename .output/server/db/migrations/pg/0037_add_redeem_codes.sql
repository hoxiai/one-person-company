CREATE TABLE IF NOT EXISTS "redeem_codes" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" text NOT NULL,
	"batch_id" text,
	"balance_type" text DEFAULT 'cash' NOT NULL,
	"amount_cents" bigint DEFAULT 0 NOT NULL,
	"currency" text DEFAULT 'USD' NOT NULL,
	"status" text DEFAULT 'active' NOT NULL,
	"expires_at" timestamp with time zone,
	"used_by" integer,
	"used_at" timestamp with time zone,
	"remark" text DEFAULT '' NOT NULL,
	"created_by" integer,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "redeem_codes_code_unique" UNIQUE("code")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "redeem_codes" ADD CONSTRAINT "redeem_codes_used_by_users_id_fk" FOREIGN KEY ("used_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "redeem_codes_status_created_idx" ON "redeem_codes" USING btree ("status","created_at");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "redeem_codes_batch_idx" ON "redeem_codes" USING btree ("batch_id");
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "redeem_redemptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"code_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"batch_id" text,
	"amount_cents" bigint DEFAULT 0 NOT NULL,
	"currency" text DEFAULT 'USD' NOT NULL,
	"event_id" text NOT NULL,
	"status" text DEFAULT 'completed' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "redeem_redemptions_code_id_unique" UNIQUE("code_id"),
	CONSTRAINT "redeem_redemptions_event_id_unique" UNIQUE("event_id"),
	CONSTRAINT "redeem_redemptions_batch_user_unique" UNIQUE("batch_id","user_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "redeem_redemptions" ADD CONSTRAINT "redeem_redemptions_code_id_redeem_codes_id_fk" FOREIGN KEY ("code_id") REFERENCES "public"."redeem_codes"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "redeem_redemptions" ADD CONSTRAINT "redeem_redemptions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
