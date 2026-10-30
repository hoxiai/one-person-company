import { d as defineEventHandler, aC as requireTrustedRequestOrigin, c as getRequestLocale, dt as requireUserSession, e as createError, b as db, u as users, dB as getEmailVerifySendCooldown, cV as revokeEmailVerifyTokens, dC as issueEmailVerification, dD as EMAIL_VERIFY_SEND_COOLDOWN_SECONDS } from '../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import 'node:module';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:fs/promises';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const resendVerification_post = defineEventHandler(async (event) => {
  var _a;
  const siteUrl = requireTrustedRequestOrigin(event);
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    unauthorized: "\u8BF7\u5148\u767B\u5F55\u540E\u518D\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6",
    userNotFound: "\u672A\u627E\u5230\u5F53\u524D\u767B\u5F55\u8D26\u53F7",
    alreadyVerified: "\u8BE5\u90AE\u7BB1\u5DF2\u7ECF\u901A\u8FC7\u9A8C\u8BC1\uFF0C\u65E0\u9700\u91CD\u590D\u53D1\u9001",
    cooldown: (sec) => `\u53D1\u9001\u592A\u9891\u7E41\uFF0C\u8BF7\u5728 ${sec} \u79D2\u540E\u518D\u8BD5`
  } : {
    unauthorized: "Please log in before requesting a verification email",
    userNotFound: "Current account not found",
    alreadyVerified: "This email is already verified",
    cooldown: (sec) => `Please wait ${sec} seconds before requesting again`
  };
  let targetUserId;
  try {
    const session = await requireUserSession(event);
    targetUserId = (_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id;
  } catch {
    targetUserId = void 0;
  }
  if (!targetUserId) {
    throw createError({
      statusCode: 401,
      message: messages.unauthorized
    });
  }
  const userRows = await db.select().from(users).where(eq(users.id, targetUserId)).limit(1);
  const userRecord = userRows[0];
  if (!userRecord) {
    throw createError({
      statusCode: 404,
      message: messages.userNotFound
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
//# sourceMappingURL=resend-verification.post.mjs.map
