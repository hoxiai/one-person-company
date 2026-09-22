import { d as defineEventHandler, c as getRequestLocale, e as createError, r as readBody, b as db, h as admins, j as hashPassword, n as normalizePermissions, s as setAuditMeta } from '../../../nitro/nitro.mjs';
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

const index_post = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    required: "\u7528\u6237\u540D\u548C\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",
    usernameExists: "\u7528\u6237\u540D\u5DF2\u5B58\u5728",
    created: "\u7BA1\u7406\u5458\u521B\u5EFA\u6210\u529F",
    failed: "\u521B\u5EFA\u7BA1\u7406\u5458\u5931\u8D25"
  } : {
    required: "Username and password are required",
    usernameExists: "Username already exists",
    created: "Admin created successfully",
    failed: "Failed to create admin"
  };
  if (event.context.authenticatedFromToken) {
    throw createError({
      statusCode: 403,
      message: locale === "zh" ? "\u8BF7\u4F7F\u7528\u767B\u5F55\u4F1A\u8BDD\u7BA1\u7406\u7BA1\u7406\u5458\u8D26\u53F7\uFF0C\u4E0D\u80FD\u7528\u7CFB\u7EDF Token \u64CD\u4F5C" : "Manage admin accounts from a logged-in session, not via a system token"
    });
  }
  try {
    const body = await readBody(event);
    const { username, password, permissions } = body;
    if (!username || !password) {
      throw createError({
        statusCode: 400,
        message: messages.required
      });
    }
    const existingAdmin = await db.select().from(admins).where(eq(admins.username, username));
    if (existingAdmin.length > 0) {
      throw createError({
        statusCode: 400,
        message: messages.usernameExists
      });
    }
    const hashedPassword = await hashPassword(password);
    const normalizedPerms = (_a = normalizePermissions(permissions, { allowAll: true })) != null ? _a : [];
    await db.insert(admins).values({
      username,
      passwordHash: hashedPassword,
      permissions: normalizedPerms
    });
    setAuditMeta(event, {
      summary: `Created admin "${username}"`,
      details: { username, permissions: normalizedPerms }
    });
    return { code: 0, message: messages.created };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || messages.failed
    });
  }
});

export { index_post as default };
