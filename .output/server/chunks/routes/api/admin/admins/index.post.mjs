import { d as defineEventHandler, c as getRequestLocale, e as createError, r as readBody, b as db, l as adminTokens, n as normalizePermissions, s as setAuditMeta } from '../../../../nitro/nitro.mjs';
import crypto from 'crypto';
import { count, eq } from 'drizzle-orm';
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

const MAX_ACTIVE_TOKENS = 10;
const index_post = defineEventHandler(async (event) => {
  var _a, _b;
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    tokenManageViaToken: "\u8BF7\u4F7F\u7528\u767B\u5F55\u4F1A\u8BDD\u7BA1\u7406\u7CFB\u7EDF Token\uFF0C\u4E0D\u80FD\u7528 Token \u672C\u8EAB\u64CD\u4F5C",
    nameRequired: "Token \u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",
    tooMany: `\u6700\u591A\u53EA\u80FD\u521B\u5EFA ${MAX_ACTIVE_TOKENS} \u4E2A\u6709\u6548\u7CFB\u7EDF Token\uFF0C\u8BF7\u5148\u540A\u9500\u4E00\u4E9B`,
    created: "\u7CFB\u7EDF Token \u521B\u5EFA\u6210\u529F",
    failed: "\u521B\u5EFA\u7CFB\u7EDF Token \u5931\u8D25"
  } : {
    tokenManageViaToken: "Manage system tokens from a logged-in session, not via another token",
    nameRequired: "Token name is required",
    tooMany: `You can have at most ${MAX_ACTIVE_TOKENS} active system tokens \u2014 revoke one first`,
    created: "System token created successfully",
    failed: "Failed to create system token"
  };
  if (event.context.authenticatedFromToken) {
    throw createError({ statusCode: 403, message: messages.tokenManageViaToken });
  }
  const adminId = (_a = event.context.admin) == null ? void 0 : _a.id;
  if (!adminId) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }
  try {
    const body = await readBody(event);
    const { name, expiresInDays, permissions } = body;
    if (!name || typeof name !== "string" || !name.trim()) {
      throw createError({ statusCode: 400, message: messages.nameRequired });
    }
    const [{ value: activeCount }] = await db.select({ value: count() }).from(adminTokens).where(eq(adminTokens.revoked, false));
    if (activeCount >= MAX_ACTIVE_TOKENS) {
      throw createError({ statusCode: 400, message: messages.tooMany });
    }
    const rawToken = `apay_admin_${crypto.randomBytes(32).toString("base64url")}`;
    const expiresAt = expiresInDays ? new Date(Date.now() + Number(expiresInDays) * 86400 * 1e3) : null;
    const normalizedPerms = (_b = normalizePermissions(permissions, { allowAll: true })) != null ? _b : [];
    const inserted = await db.insert(adminTokens).values({
      adminId,
      token: rawToken,
      name: name.trim(),
      permissions: normalizedPerms,
      expiresAt
    }).returning();
    setAuditMeta(event, {
      summary: `Created system token "${name.trim()}"`,
      details: { name: name.trim(), permissions: normalizedPerms, expiresAt }
    });
    return {
      // Only ever returned here, at creation — cannot be retrieved again.
      token: rawToken,
      data: {
        id: inserted[0].id,
        name: inserted[0].name,
        permissions: normalizedPerms,
        expiresAt: inserted[0].expiresAt,
        createdAt: inserted[0].createdAt
      },
      message: messages.created
    };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || messages.failed
    });
  }
});

export { index_post as default };
