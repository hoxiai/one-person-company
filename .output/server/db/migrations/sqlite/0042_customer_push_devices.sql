CREATE TABLE IF NOT EXISTS customer_push_devices (
  id TEXT PRIMARY KEY NOT NULL,
  admin_token_id INTEGER NOT NULL,
  token TEXT NOT NULL,
  environment TEXT NOT NULL,
  server_id TEXT NOT NULL,
  revoke_hash TEXT NOT NULL,
  preferences TEXT NOT NULL,
  expires_at INTEGER NOT NULL
);
