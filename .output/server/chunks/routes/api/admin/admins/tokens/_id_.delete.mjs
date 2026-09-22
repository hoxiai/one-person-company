import { d as defineEventHandler, c as getRequestLocale, e as createError, f as getRouterParam, b as db, l as adminTokens, s as setAuditMeta } from '../../../../../nitro/nitro.mjs';
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

const _id__delete = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    tokenManageViaToken: "\u8BF7\u4F7F\u7528\u767B\u5F55\u4F1A\u8BDD\u7BA1\u7406\u7CFB\u7EDF Token\uFF0C\u4E0D\u80FD\u7528 Token \u672C\u8EAB\u64CD\u4F5C",
    idRequired: "Token ID \u4E0D\u80FD\u4E3A\u7A7A",
    notFound: "Token \u4E0D\u5B58\u5728",
    revoked: "\u7CFB\u7EDF Token \u5DF2\u540A\u9500",
    failed: "\u540A\u9500\u7CFB\u7EDF Token \u5931\u8D25"
  } : {
    tokenManageViaToken: "Manage system tokens from a logged-in session, not via another token",
    idRequired: "Token ID is required",
    notFound: "Token not found",
    revoked: "System token revoked",
    failed: "Failed to revoke system token"
  };
  if (event.context.authenticatedFromToken) {
    throw createError({ statusCode: 403, message: messages.tokenManageViaToken });
  }
  try {
    const id = Number(getRouterParam(event, "id"));
    if (!id) {
      throw createError({ statusCode: 400, message: messages.idRequired });
    }
    const existing = await db.select({ id: adminTokens.id, name: adminTokens.name }).from(adminTokens).where(eq(adminTokens.id, id)).limit(1);
    if (existing.length === 0) {
      throw createError({ statusCode: 404, message: messages.notFound });
    }
    await db.update(adminTokens).set({ revoked: true }).where(eq(adminTokens.id, id));
    setAuditMeta(event, {
      summary: `Revoked system token "${existing[0].name || existing[0].id}"`,
      details: { id: existing[0].id, name: existing[0].name }
    });
    return { code: 0, message: messages.revoked };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || messages.failed
    });
  }
});

export { _id__delete as default };
