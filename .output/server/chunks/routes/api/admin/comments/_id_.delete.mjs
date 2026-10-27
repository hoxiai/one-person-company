import { d as defineEventHandler, f as getRouterParam, e as createError, b as db, o as comments, q as syncPostCommentCount } from '../../../../nitro/nitro.mjs';
import { eq, or } from 'drizzle-orm';
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
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const _id__delete = defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"));
  if (!id || isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: "\u975E\u6CD5\u7684\u8BC4\u8BBA ID" });
  }
  const [targetRow] = await db.select({ targetType: comments.targetType, targetId: comments.targetId }).from(comments).where(eq(comments.id, id)).limit(1);
  await db.delete(comments).where(or(eq(comments.id, id), eq(comments.parentId, id)));
  if ((targetRow == null ? void 0 : targetRow.targetType) === "post") {
    await syncPostCommentCount(targetRow.targetId);
  }
  return {
    success: true,
    data: { id }
  };
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
