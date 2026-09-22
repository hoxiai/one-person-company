import { d as defineEventHandler, ab as requireTrustedRequestOrigin, c as getRequestLocale, r as readBody, aO as getUserSession, b as db, u as users, e as createError, bM as getEmailVerifySendCooldown, bj as revokeEmailVerifyTokens, bN as issueEmailVerification, bO as EMAIL_VERIFY_SEND_COOLDOWN_SECONDS } from '../../../nitro/nitro.mjs';
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

const resendVerification_post = defineEventHandler(async (event) => {
  var _a;
  const siteUrl = requireTrustedRequestOrigin(event);
  const locale = getRequestLocale(event);
  const body = await readBody(event).catch(() => ({}));
  const messages = locale === "zh" ? {
    unauthorized: "\u8BF7\u5148\u767B\u5F55\u6216\u63D0\u4F9B\u6CE8\u518C\u90AE\u7BB1",
    userNotFound: "\u672A\u627E\u5230\u8BE5\u90AE\u7BB1\u5BF9\u5E94\u7684\u8D26\u53F7",
    alreadyVerified: "\u8BE5\u90AE\u7BB1\u5DF2\u7ECF\u901A\u8FC7\u9A8C\u8BC1\uFF0C\u65E0\u9700\u91CD\u590D\u53D1\u9001",
    cooldown: (sec) => `\u53D1\u9001\u592A\u9891\u7E41\uFF0C\u8BF7\u5728 ${sec} \u79D2\u540E\u518D\u8BD5`,
    sendFailed: "\u90AE\u4EF6\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"
  } : {
    unauthorized: "Please log in or provide your registered email",
    userNotFound: "No user found with this email address",
    alreadyVerified: "This email is already verified",
    cooldown: (sec) => `Please wait ${sec} seconds before requesting again`,
    sendFailed: "Failed to send verification email. Please try again later"
  };
  const session = await getUserSession(event).catch(() => ({ user: void 0 }));
  let targetUserId = (_a = session.user) == null ? void 0 : _a.id;
  let targetEmail = ((body == null ? void 0 : body.email) || "").trim().toLowerCase();
  let userRecord;
  if (targetUserId) {
    const userRows = await db.select().from(users).where(eq(users.id, targetUserId)).limit(1);
    userRecord = userRows[0];
  } else if (targetEmail) {
    const userRows = await db.select().from(users).where(eq(users.email, targetEmail)).limit(1);
    userRecord = userRows[0];
  }
  if (!userRecord) {
    throw createError({
      statusCode: targetUserId || targetEmail ? 404 : 400,
      message: targetUserId || targetEmail ? messages.userNotFound : messages.unauthorized
    });
  }
  if (userRecord.emailVerifiedAt) {
    return {
      success: true,
      alreadyVerified: true,
      message: messages.alreadyVerified
    };
  }
  const remaining = await getEmailVerifySendCooldown(userRecord.id);
  if (remaining > 0) {
    throw createError({
      statusCode: 429,
      message: messages.cooldown(remaining)
    });
  }
  await revokeEmailVerifyTokens(userRecord.id);
  await issueEmailVerification({
    event,
    locale,
    siteUrl,
    user: userRecord
  });
  return {
    success: true,
    email: userRecord.email,
    cooldownSeconds: EMAIL_VERIFY_SEND_COOLDOWN_SECONDS
  };
});

export { resendVerification_post as default };
