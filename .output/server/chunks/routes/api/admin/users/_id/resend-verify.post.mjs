import { d as defineEventHandler, ab as requireTrustedRequestOrigin, c as getRequestLocale, f as getRouterParam, e as createError, b as db, u as users, bg as userTokens, bk as EMAIL_VERIFY_TOKEN_NAME, J as getLocalizedSettingValue, K as sendEmail } from '../../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:os';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const resendVerify_post = defineEventHandler(async (event) => {
  const siteUrl = requireTrustedRequestOrigin(event);
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u7528\u6237 ID \u4E0D\u80FD\u4E3A\u7A7A" : "User ID is required" });
  }
  const userId = Number(id);
  const userRows = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  const user = userRows[0];
  if (!user) {
    throw createError({ statusCode: 404, message: locale === "zh" ? "\u7528\u6237\u4E0D\u5B58\u5728" : "User not found" });
  }
  const verifyToken = crypto.randomUUID();
  const verifyExpiresAt = Math.floor(Date.now() / 1e3) + 86400;
  await db.insert(userTokens).values({
    userId: user.id,
    token: verifyToken,
    name: EMAIL_VERIFY_TOKEN_NAME,
    expiresAt: new Date(verifyExpiresAt * 1e3),
    createdAt: /* @__PURE__ */ new Date()
  });
  const verifyLink = `${siteUrl}/api/auth/verify-email?token=${verifyToken}`;
  const siteName = await getLocalizedSettingValue("site_name", locale, "APay");
  const emailPromise = sendEmail({
    to: user.email,
    templateCode: "verify_email",
    locale,
    variables: {
      nickname: user.nickname || user.email.split("@")[0],
      site_name: siteName,
      site_url: siteUrl,
      verify_link: verifyLink
    }
  }).catch((err) => {
    console.error("[AdminResendVerify] Failed to send email:", err);
  });
  if (typeof (event == null ? void 0 : event.waitUntil) === "function") {
    event.waitUntil(emailPromise);
  }
  return {
    success: true,
    message: locale === "zh" ? "\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u91CD\u65B0\u53D1\u9001\u7ED9\u7528\u6237" : "Verification email sent to user"
  };
});

export { resendVerify_post as default };
