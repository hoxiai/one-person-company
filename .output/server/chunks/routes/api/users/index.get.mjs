import { d as defineEventHandler, c as getRequestLocale, eb as requireUserSession, e as createError, fO as getAccountDeletionSummaryForUser } from '../../../nitro/nitro.mjs';
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

const index_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const isZh = String(locale).toLowerCase().startsWith("zh");
  const session = await requireUserSession(event);
  if (event.context.authenticatedFromToken || session.employee) {
    throw createError({
      statusCode: 403,
      message: isZh ? "\u8BF7\u4F7F\u7528\u672C\u4EBA\u7F51\u9875\u767B\u5F55\u4F1A\u8BDD\u67E5\u770B\u6216\u7BA1\u7406\u8D26\u53F7\u6CE8\u9500\u72B6\u6001" : "Please use an owner web browser session to view or manage account deletion"
    });
  }
  const userId = Number(session.user.id);
  if (!Number.isInteger(userId) || userId <= 0) {
    throw createError({
      statusCode: 401,
      message: isZh ? "\u672A\u627E\u5230\u6709\u6548\u767B\u5F55\u4F1A\u8BDD" : "Invalid user session"
    });
  }
  return await getAccountDeletionSummaryForUser(userId, locale);
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
