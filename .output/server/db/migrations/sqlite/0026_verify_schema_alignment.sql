-- SQLite already includes these objects; verify the shared schema boundary.
SELECT ip FROM visitor_profiles LIMIT 0;
--> statement-breakpoint
SELECT ip FROM visitor_events LIMIT 0;
--> statement-breakpoint
SELECT id, name, code, is_active, config_json, send_script, created_at FROM email_providers LIMIT 0;
