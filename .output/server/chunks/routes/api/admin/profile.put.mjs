import { d as defineEventHandler, c as getRequestLocale, e as createError, aP as getUserSession, r as readBody, h as admins, b as db, ar as verifyPassword, l as hashPassword } from '../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
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
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:zlib';
import 'node:child_process';

const profile_put = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    unauthorized: "\u672A\u6388\u6743\uFF1A\u8BF7\u5148\u767B\u5F55\u540E\u53F0",
    tokenForbidden: "\u8BF7\u4F7F\u7528\u540E\u53F0\u7F51\u9875\u767B\u5F55\u4F1A\u8BDD\u4FEE\u6539\u5BC6\u7801\uFF0C\u4E0D\u80FD\u901A\u8FC7\u7CFB\u7EDF Token \u64CD\u4F5C",
    passwordsRequired: "\u65E7\u5BC6\u7801\u548C\u65B0\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",
    passwordTooShort: "\u65B0\u5BC6\u7801\u957F\u5EA6\u81F3\u5C11\u4E3A 6 \u4F4D",
    adminNotFound: "\u7BA1\u7406\u5458\u4E0D\u5B58\u5728",
    incorrectOldPassword: "\u65E7\u5BC6\u7801\u9519\u8BEF",
    passwordUpdated: "\u5BC6\u7801\u66F4\u65B0\u6210\u529F",
    internalError: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF"
  } : {
    unauthorized: "Unauthorized: Admin login required",
    tokenForbidden: "Change password from a logged-in web session, not via a system token",
    passwordsRequired: "Old and new passwords are required",
    passwordTooShort: "New password must be at least 6 characters",
    adminNotFound: "Admin user not found",
    incorrectOldPassword: "Incorrect old password",
    passwordUpdated: "Password updated successfully",
    internalError: "Internal server error"
  };
  if (event.context.authenticatedFromToken) {
    throw createError({ statusCode: 403, message: messages.tokenForbidden });
  }
  const session = await getUserSession(event).catch(() => null);
  const sessionAdmin = event.context.admin || (session == null ? void 0 : session.admin);
  if (!(sessionAdmin == null ? void 0 : sessionAdmin.id) && !(sessionAdmin == null ? void 0 : sessionAdmin.username)) {
    throw createError({ statusCode: 401, message: messages.unauthorized });
  }
  try {
    const body = await readBody(event);
    const { oldPassword, newPassword } = body || {};
    if (!oldPassword || !newPassword) {
      return { code: 1, message: messages.passwordsRequired };
    }
    if (typeof newPassword !== "string" || newPassword.length < 6) {
      return { code: 1, message: messages.passwordTooShort };
    }
    const whereClause = sessionAdmin.id ? eq(admins.id, Number(sessionAdmin.id)) : eq(admins.username, String(sessionAdmin.username));
    const adminUsers = await db.select().from(admins).where(whereClause).limit(1);
    if (adminUsers.length === 0) {
      return { code: 1, message: messages.adminNotFound };
    }
    const admin = adminUsers[0];
    const isValid = await verifyPassword(admin.passwordHash, oldPassword);
    if (!isValid) {
      return { code: 1, message: messages.incorrectOldPassword };
    }
    const hashedNewPassword = await hashPassword(newPassword);
    await db.update(admins).set({ passwordHash: hashedNewPassword }).where(eq(admins.id, admin.id));
    return { code: 0, message: messages.passwordUpdated };
  } catch (error) {
    if (error == null ? void 0 : error.statusCode) throw error;
    console.error("Update profile error:", error);
    return { code: 1, message: error.message || messages.internalError };
  }
});

export { profile_put as default };
//# sourceMappingURL=profile.put.mjs.map
