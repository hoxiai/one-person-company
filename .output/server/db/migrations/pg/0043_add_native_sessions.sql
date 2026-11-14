ALTER TABLE user_sessions ADD COLUMN session_kind text NOT NULL DEFAULT 'web';
--> statement-breakpoint
ALTER TABLE user_sessions ADD COLUMN expires_at timestamp with time zone;
