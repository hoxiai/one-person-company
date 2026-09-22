import { d as defineEventHandler, c as getRequestLocale, g as getQuery, b as db, h as admins, A as ADMIN_PERMISSIONS, k as hasAllPermissions, e as createError } from '../../../nitro/nitro.mjs';
import { count, desc } from 'drizzle-orm';
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

const index_get = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const query = getQuery(event);
  const page = parseInt(query.page) || 1;
  const pageSize = parseInt(query.pageSize) || 12;
  const offset = (page - 1) * pageSize;
  const totalResult = await db.select({ value: count() }).from(admins);
  const total = ((_a = totalResult[0]) == null ? void 0 : _a.value) || 0;
  try {
    const rawResult = await db.select({
      id: admins.id,
      username: admins.username,
      permissions: admins.permissions,
      createdAt: admins.createdAt
    }).from(admins).orderBy(desc(admins.createdAt)).limit(pageSize).offset(offset);
    const moduleCodeSet = new Set(ADMIN_PERMISSIONS.map((p) => p.code));
    const data = rawResult.map((r) => {
      const perms = Array.isArray(r.permissions) ? r.permissions : null;
      const grantedModules = new Set(
        (perms || []).map((p) => p.split(":")[0]).filter((base) => moduleCodeSet.has(base))
      );
      const summary = hasAllPermissions(perms) ? { all: true, count: ADMIN_PERMISSIONS.length } : { all: false, count: grantedModules.size };
      return {
        id: r.id,
        username: r.username,
        permissions: perms,
        permissionSummary: summary,
        createdAt: r.createdAt instanceof Date ? r.createdAt.toISOString() : r.createdAt ? new Date(r.createdAt).toISOString() : null
      };
    });
    return {
      data,
      total,
      page,
      pageSize
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message || (locale === "zh" ? "\u83B7\u53D6\u7BA1\u7406\u5458\u5217\u8868\u5931\u8D25" : "Failed to fetch admins")
    });
  }
});

export { index_get as default };
