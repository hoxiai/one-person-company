-- 找回密码的令牌口径已收归核心（server/utils/passwordReset.ts，只存 sha256，
-- name 统一为 'password_reset'）。这里清掉两个主题各自实现时留下的旧行：
--   qingpu_password_reset —— 曾以**明文**入库。核心鉴权中间件按 user_tokens.token
--     查 Bearer / X-Api-Key，当时只排除 email_verify，因此这些行同时是一把
--     有效期 1 小时的全权限 API Key，必须清。
--   shoply_password_reset —— 存的是哈希，不构成漏洞，但改名后永远不会再被消费。
-- 在途的重置链接一并作废，用户重新申请即可。
DELETE FROM "user_tokens" WHERE "name" IN ('qingpu_password_reset', 'shoply_password_reset');
