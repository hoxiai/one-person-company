CREATE TABLE "refunds" (
 "id" text PRIMARY KEY NOT NULL,
 "order_id" text NOT NULL UNIQUE REFERENCES "orders"("id"),
 "user_id" integer,
 "amount" real NOT NULL,
 "currency" text NOT NULL,
 "pay_method" text NOT NULL,
 "trade_no" text,
 "reason" text NOT NULL,
 "status" text DEFAULT 'requested' NOT NULL,
 "provider_refund_id" text,
 "provider_fingerprint" text,
 "requested_by" text NOT NULL,
 "reviewed_by" integer,
 "review_note" text,
 "last_error" text,
 "effects_step" integer DEFAULT 0 NOT NULL,
 "effects_error" text,
 "lease_token" text,
 "lease_until" timestamp with time zone,
 "created_at" timestamp with time zone DEFAULT now() NOT NULL,
 "updated_at" timestamp with time zone DEFAULT now() NOT NULL,
 "succeeded_at" timestamp with time zone
);
--> statement-breakpoint
CREATE INDEX "refunds_status_updated_idx" ON "refunds" ("status","updated_at");
