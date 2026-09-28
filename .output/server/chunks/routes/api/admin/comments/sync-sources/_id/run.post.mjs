import { d as defineEventHandler, e as createError, b as db, w as commentSyncSources, x as syncExternalComments } from '../../../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import '@nuxthub/db';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
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
import 'node:os';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const run_post = defineEventHandler(async (event) => {
  var _a;
  const id = parseInt(((_a = event.context.params) == null ? void 0 : _a.id) || "", 10);
  if (!id || id <= 0) {
    throw createError({ statusCode: 400, statusMessage: "\u65E0\u6548\u7684\u540C\u6B65\u6E90 ID" });
  }
  const [item] = await db.select().from(commentSyncSources).where(eq(commentSyncSources.id, id)).limit(1);
  if (!item) {
    throw createError({ statusCode: 404, statusMessage: "\u672A\u627E\u5230\u8BE5\u540C\u6B65\u6E90\u914D\u7F6E" });
  }
  try {
    const res = await syncExternalComments({
      source: item.source,
      targetType: item.targetType,
      targetId: item.targetId,
      topicIdOrUrl: item.externalId,
      status: item.defaultStatus || "approved",
      autoSync: item.autoSync,
      syncInterval: item.syncInterval
    });
    return {
      success: true,
      data: res,
      message: `\u540C\u6B65\u6210\u529F\uFF1A\u83B7\u53D6 ${res.totalFetched} \u6761\uFF0C\u65B0\u589E ${res.insertedCount} \u6761\uFF0C\u8DF3\u8FC7 ${res.skippedCount} \u6761`
    };
  } catch (err) {
    await db.update(commentSyncSources).set({
      lastSyncStatus: "failed",
      lastError: (err == null ? void 0 : err.message) || String(err),
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(commentSyncSources.id, id));
    throw createError({
      statusCode: 500,
      statusMessage: (err == null ? void 0 : err.message) || "\u540C\u6B65\u6267\u884C\u5931\u8D25"
    });
  }
});

export { run_post as default };
