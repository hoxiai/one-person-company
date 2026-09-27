-- Append-only repair for schema fields omitted from the historical chain.
ALTER TABLE "visitor_profiles" ADD COLUMN IF NOT EXISTS "ip" text;
