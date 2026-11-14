import { d as defineEventHandler, c as getRequestLocale, e as createError, f as getRouterParam, b as db, h as admins, i as isSuperAdmin, j as canGrantPermissions, k as adminTokens, s as setAuditMeta } from '../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import 'node:crypto';
import 'zod';
import 'crypto';
import 'fs';
import 'path';
import 'node:fs';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'node:fs/promises';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:child_process';

const _id__delete = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    adminIdRequired: "\u7BA1\u7406\u5458 ID \u4E0D\u80FD\u4E3A\u7A7A",
    adminNotFound: "\u7BA1\u7406\u5458\u4E0D\u5B58\u5728",
    cannotDeleteMain: "\u4E0D\u80FD\u5220\u9664\u4E3B\u7BA1\u7406\u5458\u8D26\u53F7",
    cannotDeleteSelf: "\u4E0D\u80FD\u5220\u9664\u5F53\u524D\u6B63\u5728\u767B\u5F55\u7684\u7BA1\u7406\u5458\u8D26\u53F7",
    cannotDeleteHigher: "\u4E0D\u80FD\u5220\u9664\u6743\u9650\u8D85\u51FA\u81EA\u8EAB\u8303\u56F4\u7684\u7BA1\u7406\u5458\u8D26\u53F7",
    deleted: "\u7BA1\u7406\u5458\u5220\u9664\u6210\u529F",
    failed: "\u5220\u9664\u7BA1\u7406\u5458\u5931\u8D25"
  } : {
    adminIdRequired: "Admin ID is required",
    adminNotFound: "Admin not found",
    cannotDeleteMain: "Cannot delete the main admin account",
    cannotDeleteSelf: "Cannot delete your own currently logged-in admin account",
    cannotDeleteHigher: "Cannot delete an admin account with permissions beyond your own scope",
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
    const targetId = Number(id);
    const actingAdmin = event.context.admin;
    if ((actingAdmin == null ? void 0 : actingAdmin.id) && Number(actingAdmin.id) === targetId) {
      throw createError({ statusCode: 400, message: messages.cannotDeleteSelf });
    }
    const user = await db.select().from(admins).where(eq(admins.id, targetId));
    if (user.length === 0) {
      throw createError({ statusCode: 404, message: messages.adminNotFound });
    }
    if (isSuperAdmin(user[0].username)) {
      throw createError({ statusCode: 403, message: messages.cannotDeleteMain });
    }
    if (!canGrantPermissions(actingAdmin, user[0].permissions)) {
      throw createError({ statusCode: 403, message: messages.cannotDeleteHigher });
    }
    await db.update(adminTokens).set({ revoked: true }).where(eq(adminTokens.adminId, targetId)).catch(() => {
    });
    await db.delete(admins).where(eq(admins.id, targetId));
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
//# sourceMappingURL=_id_.delete.mjs.map
