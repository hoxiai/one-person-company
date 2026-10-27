DELETE FROM `oauth_accounts`
WHERE `id` NOT IN (
  SELECT MIN(`id`) FROM `oauth_accounts` GROUP BY `provider`, `provider_account_id`
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `provider_account_idx` ON `oauth_accounts` (`provider`,`provider_account_id`);
