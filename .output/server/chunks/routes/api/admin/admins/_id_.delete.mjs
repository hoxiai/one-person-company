import { d as defineEventHandler, c as getRequestLocale, e as createError, f as getRouterParam, b as db, h as admins, s as setAuditMeta } from '../../../../nitro/nitro.mjs';
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
  var _a;
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    adminIdRequired: "\u7BA1\u7406\u5458 ID \u4E0D\u80FD\u4E3A\u7A7A",
    adminNotFound: "\u7BA1\u7406\u5458\u4E0D\u5B58\u5728",
    cannotDeleteMain: "\u4E0D\u80FD\u5220\u9664\u4E3B\u7BA1\u7406\u5458\u8D26\u53F7",
    deleted: "\u7BA1\u7406\u5458\u5220\u9664\u6210\u529F",
    failed: "\u5220\u9664\u7BA1\u7406\u5458\u5931\u8D25"
  } : {
    adminIdRequired: "Admin ID is required",
    adminNotFound: "Admin not found",
    cannotDeleteMain: "Cannot delete the main admin account",
    deleted: "Admin deleted successfully",
    failed: "Failed to delete admin"
  };
  if (event.context.authenticatedFromToken) {
    throw createError({
      statusCode: 403,
      message: locale === "zh" ? "\u8BF7\u4F7F\u7528\u767B\u5F55\u4F1A\u8BDD\u7BA1\u7406\u7BA1\u7406\u5458\u8D26\u53F7\uFF0C\u4E0D\u80FD\u7528\u7CFB\u7EDF Token \u64CD\u4F5C" : "Manage admin accounts from a logged-in session, not via a system token"
    });
  }
  try {
    const id = getRouterParam(event, "id");
    if (!id) {
      throw createError({ statusCode: 400, message: messages.adminIdRequired });
    }
    const user = await db.select().from(admins).where(eq(admins.id, Number(id)));
    if (user.length === 0) {
      throw createError({ statusCode: 404, message: messages.adminNotFound });
    }
    if (user[0].username === "admin") {
      throw createError({ statusCode: 403, message: messages.cannotDeleteMain });
    }
    await db.delete(admins).where(eq(admins.id, Number(id)));
    setAuditMeta(event, {
      summary: `Deleted admin "${user[0].username}"`,
      details: { username: user[0].username, permissions: (_a = user[0].permissions) != null ? _a : null }
    });
    return { code: 0, message: messages.deleted };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || messages.failed
    });
  }
});

export { _id__delete as default };
