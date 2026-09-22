import { d as defineEventHandler, c as getRequestLocale, e as createError, b as db, l as adminTokens, h as admins, A as ADMIN_PERMISSIONS, k as hasAllPermissions } from '../../../../nitro/nitro.mjs';
import { eq, desc } from 'drizzle-orm';
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
  const locale = getRequestLocale(event);
  if (event.context.authenticatedFromToken) {
    throw createError({
      statusCode: 403,
      message: locale === "zh" ? "\u8BF7\u4F7F\u7528\u767B\u5F55\u4F1A\u8BDD\u7BA1\u7406\u7CFB\u7EDF Token\uFF0C\u4E0D\u80FD\u7528 Token \u672C\u8EAB\u64CD\u4F5C" : "Manage system tokens from a logged-in session, not via another token"
    });
  }
  try {
    const rows = await db.select({
      id: adminTokens.id,
      name: adminTokens.name,
      permissions: adminTokens.permissions,
      adminId: adminTokens.adminId,
      adminUsername: admins.username,
      lastUsedAt: adminTokens.lastUsedAt,
      expiresAt: adminTokens.expiresAt,
      revoked: adminTokens.revoked,
      createdAt: adminTokens.createdAt
    }).from(adminTokens).leftJoin(admins, eq(adminTokens.adminId, admins.id)).orderBy(desc(adminTokens.createdAt));
    const moduleCodeSet = new Set(ADMIN_PERMISSIONS.map((p) => p.code));
    const data = rows.map((r) => {
      const perms = Array.isArray(r.permissions) ? r.permissions : null;
      const grantedModules = new Set(
        (perms || []).map((p) => p.split(":")[0]).filter((base) => moduleCodeSet.has(base))
      );
      const summary = hasAllPermissions(perms) ? { all: true, count: ADMIN_PERMISSIONS.length } : { all: false, count: grantedModules.size };
      return { ...r, permissionSummary: summary };
    });
    return { data };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message || (locale === "zh" ? "\u83B7\u53D6\u7CFB\u7EDF Token \u5217\u8868\u5931\u8D25" : "Failed to fetch system tokens")
    });
  }
});

export { index_get as default };
