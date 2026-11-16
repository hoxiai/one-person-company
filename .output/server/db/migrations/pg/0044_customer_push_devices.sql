CREATE TABLE IF NOT EXISTS customer_push_devices (
  id VARCHAR(64) PRIMARY KEY,
  admin_token_id INTEGER NOT NULL,
  token VARCHAR(200) NOT NULL,
  environment VARCHAR(16) NOT NULL,
  server_id VARCHAR(128) NOT NULL,
  revoke_hash VARCHAR(64) NOT NULL,
  preferences VARCHAR(512) NOT NULL,
  expires_at BIGINT NOT NULL
);
