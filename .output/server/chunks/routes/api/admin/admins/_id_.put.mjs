import { d as defineEventHandler, c as getRequestLocale, e as createError, f as getRouterParam, b as db, h as admins, i as isSuperAdmin, r as readBody, j as hashPassword, n as normalizePermissions, s as setAuditMeta } from '../../../../nitro/nitro.mjs';
import { eq, and, ne } from 'drizzle-orm';
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

const _id__put = defineEventHandler(async (event) => {
  var _a, _b, _c, _d;
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    adminIdRequired: "\u7BA1\u7406\u5458 ID \u4E0D\u80FD\u4E3A\u7A7A",
    usernameRequired: "\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",
    usernameTaken: "\u8BE5\u7528\u6237\u540D\u5DF2\u88AB\u5176\u4ED6\u7BA1\u7406\u5458\u5360\u7528",
    cannotEditMain: "\u4E3B\u7BA1\u7406\u5458\u6743\u9650\u4E0D\u53EF\u4FEE\u6539",
    updated: "\u7BA1\u7406\u5458\u66F4\u65B0\u6210\u529F",
    failed: "\u66F4\u65B0\u7BA1\u7406\u5458\u5931\u8D25"
  } : {
    adminIdRequired: "Admin ID is required",
    usernameRequired: "Username is required",
    usernameTaken: "Username already taken by another admin",
    cannotEditMain: "Permissions of the main admin cannot be modified",
    updated: "Admin updated successfully",
    failed: "Failed to update admin"
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
    const currentList = await db.select().from(admins).where(eq(admins.id, Number(id))).limit(1);
    if (currentList.length === 0) {
      throw createError({ statusCode: 404, message: messages.failed });
    }
    const current = currentList[0];
    const editingMain = isSuperAdmin(current.username);
    if (editingMain && !isSuperAdmin((_a = event.context.admin) == null ? void 0 : _a.username)) {
      throw createError({ statusCode: 403, message: messages.cannotEditMain });
    }
    const body = await readBody(event);
    const { username, password, permissions } = body;
    if (!username) {
      throw createError({ statusCode: 400, message: messages.usernameRequired });
    }
    const existingUser = await db.select().from(admins).where(
      and(
        eq(admins.username, username),
        ne(admins.id, Number(id))
      )
    );
    if (existingUser.length > 0) {
      throw createError({ statusCode: 400, message: messages.usernameTaken });
    }
    const updateData = { username };
    if (password) {
      updateData.passwordHash = await hashPassword(password);
    }
    if (!editingMain && permissions !== void 0) {
      updateData.permissions = (_b = normalizePermissions(permissions, { allowAll: true })) != null ? _b : [];
    }
    await db.update(admins).set(updateData).where(eq(admins.id, Number(id)));
    setAuditMeta(event, {
      summary: `Updated admin "${current.username}"`,
      details: {
        before: { username: current.username, permissions: (_c = current.permissions) != null ? _c : null },
        after: {
          username,
          permissions: "permissions" in updateData ? updateData.permissions : (_d = current.permissions) != null ? _d : null
        },
        passwordChanged: Boolean(password)
      }
    });
    return { code: 0, message: messages.updated };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || messages.failed
    });
  }
});

export { _id__put as default };
