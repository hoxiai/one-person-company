-- 为 users 表新增可选唯一登录用户名字段（统一小写 DNS 安全标签，NULL 允许多行共存）。
ALTER TABLE `users` ADD `username` text;
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `users_username_unique` ON `users` (`username`);
