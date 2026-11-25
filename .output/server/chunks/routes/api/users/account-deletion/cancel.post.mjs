import { d as defineEventHandler, c as getRequestLocale, ec as requireUserSession, e as createError, r as readBody, fN as cancelAccountDeletionRequest, at as recordOperationFromEvent } from '../../../../nitro/nitro.mjs';
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
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';

const cancel_post = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const isZh = String(locale).toLowerCase().startsWith("zh");
  const session = await requireUserSession(event);
  if (event.context.authenticatedFromToken || session.employee) {
    throw createError({
      statusCode: 403,
      message: isZh ? "\u8BF7\u4F7F\u7528\u4E3B\u8D26\u53F7\u7F51\u9875\u767B\u5F55\u4F1A\u8BDD\u64CD\u4F5C\u64A4\u56DE\u7533\u8BF7" : "Please use an owner web session to cancel the deletion request"
    });
  }
  const userId = Number(session.user.id);
  if (!Number.isInteger(userId) || userId <= 0) {
    throw createError({
      statusCode: 401,
      message: isZh ? "\u672A\u627E\u5230\u6709\u6548\u767B\u5F55\u4F1A\u8BDD" : "Invalid user session"
    });
  }
  const body = await readBody(event).catch(() => ({}));
  const requestId = body.requestId ? Number(body.requestId) : null;
  const request = await cancelAccountDeletionRequest(userId, requestId, locale);
  await recordOperationFromEvent(event, {
    actorType: "user",
    actorId: userId,
    actorName: String(session.user.email || ""),
    action: "account_deletion.cancel",
    resource: "users",
    resourceId: userId,
    statusCode: 200,
    summary: `User #${userId} (${session.user.email}) cancelled account deletion request #${(_a = request == null ? void 0 : request.id) != null ? _a : ""}`,
    details: { requestId: request == null ? void 0 : request.id }
  });
  return {
    success: true,
    message: isZh ? "\u5DF2\u64A4\u56DE\u8D26\u53F7\u6CE8\u9500\u7533\u8BF7" : "Account deletion request cancelled",
    request
  };
});

export { cancel_post as default };
//# sourceMappingURL=cancel.post.mjs.map
