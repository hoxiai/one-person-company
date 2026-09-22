import { d as defineEventHandler, c as getRequestLocale, bF as requireUserSession, e as createError, f as getRouterParam, r as readBody, cp as approvePendingPromoAgentRelation, cq as rejectPendingPromoAgentRelation } from '../../../../../nitro/nitro.mjs';
import 'drizzle-orm';
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

const _id__post = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    unauthorized: "\u672A\u767B\u5F55",
    relationIdRequired: "\u5173\u8054 ID \u4E0D\u80FD\u4E3A\u7A7A",
    invalidAction: "\u65E0\u6548\u64CD\u4F5C"
  } : {
    unauthorized: "Unauthorized",
    relationIdRequired: "Relation ID is required",
    invalidAction: "Invalid action"
  };
  const session = await requireUserSession(event);
  if (!((_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id)) {
    throw createError({ statusCode: 401, message: messages.unauthorized });
  }
  const relationId = Number(getRouterParam(event, "id") || 0);
  const body = await readBody(event);
  const action = String((body == null ? void 0 : body.action) || "").trim().toLowerCase();
  if (!relationId) {
    throw createError({ statusCode: 400, message: messages.relationIdRequired });
  }
  if (action === "approve") {
    return approvePendingPromoAgentRelation({
      relationId,
      masterAgentUserId: session.user.id
    });
  }
  if (action === "reject") {
    return rejectPendingPromoAgentRelation({
      relationId,
      masterAgentUserId: session.user.id
    });
  }
  throw createError({ statusCode: 400, message: messages.invalidAction });
});

export { _id__post as default };
