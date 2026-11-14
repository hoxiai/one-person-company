ALTER TABLE user_sessions ADD COLUMN session_kind varchar(32) NOT NULL DEFAULT 'web', ADD COLUMN expires_at timestamp NULL;
