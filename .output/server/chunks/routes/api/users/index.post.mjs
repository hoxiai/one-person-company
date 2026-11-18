import { d as defineEventHandler, c as getRequestLocale, eb as requireUserSession, e as createError, an as resolveClientIp, ao as checkIpRateLimit, r as readBody, fP as submitAccountDeletionRequest, at as recordOperationFromEvent } from '../../../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
import 'node:child_process';

const index_post = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const isZh = String(locale).toLowerCase().startsWith("zh");
  const session = await requireUserSession(event);
  if (event.context.authenticatedFromToken || session.employee) {
    throw createError({
      statusCode: 403,
      message: isZh ? "\u4E0D\u80FD\u901A\u8FC7 API \u4EE4\u724C\u6216\u59D4\u6D3E\u5B50\u8D26\u53F7\u63D0\u4EA4\u8D26\u53F7\u6CE8\u9500\u7533\u8BF7\uFF0C\u8BF7\u4F7F\u7528\u4E3B\u8D26\u53F7\u767B\u5F55\u7F51\u9875\u64CD\u4F5C" : "Account deletion requests must be submitted from an owner web session"
    });
  }
  const userId = Number(session.user.id);
  if (!Number.isInteger(userId) || userId <= 0) {
    throw createError({
      statusCode: 401,
      message: isZh ? "\u672A\u627E\u5230\u6709\u6548\u767B\u5F55\u4F1A\u8BDD" : "Invalid user session"
    });
  }
  const ip = resolveClientIp(event);
  const limit = checkIpRateLimit(`account-deletion:apply:${ip}:${userId}`, {
    max: 5,
    windowMs: 15 * 6e4
  });
  if (!limit.ok) {
    throw createError({
      statusCode: 429,
      message: isZh ? "\u64CD\u4F5C\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5" : "Too many attempts, please try again later"
    });
  }
  const body = await readBody(event).catch(() => ({}));
  const request = await submitAccountDeletionRequest(event, {
    userId,
    reason: body.reason ? String(body.reason) : null,
    contactInfo: body.contactInfo ? String(body.contactInfo) : null,
    password: body.password ? String(body.password) : null,
    confirmEmail: body.confirmEmail ? String(body.confirmEmail) : null
  });
  await recordOperationFromEvent(event, {
    actorType: "user",
    actorId: userId,
    actorName: String(session.user.email || ""),
    action: "account_deletion.request",
    resource: "users",
    resourceId: userId,
    statusCode: 200,
    summary: `User #${userId} (${session.user.email}) submitted account deletion request #${(_a = request == null ? void 0 : request.id) != null ? _a : ""}`,
    details: {
      requestId: request == null ? void 0 : request.id,
      reason: request == null ? void 0 : request.reason,
      contactInfo: request == null ? void 0 : request.contactInfo
    }
  });
  return {
    success: true,
    message: isZh ? "\u8D26\u53F7\u6CE8\u9500\u7533\u8BF7\u5DF2\u63D0\u4EA4\uFF0C\u7BA1\u7406\u5458\u5BA1\u6838\u901A\u8FC7\u540E\u5C06\u5BF9\u8D26\u53F7\u8FDB\u884C\u6C38\u4E45\u5C01\u5B58" : "Account deletion request submitted and awaiting administrator review",
    request
  };
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
