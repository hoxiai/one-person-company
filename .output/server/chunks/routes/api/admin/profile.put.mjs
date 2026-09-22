import { d as defineEventHandler, c as getRequestLocale, r as readBody, b as db, h as admins, S as verifyPassword, j as hashPassword } from '../../../nitro/nitro.mjs';
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

const profile_put = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    passwordsRequired: "\u65E7\u5BC6\u7801\u548C\u65B0\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",
    adminNotFound: "\u7BA1\u7406\u5458\u4E0D\u5B58\u5728",
    incorrectOldPassword: "\u65E7\u5BC6\u7801\u9519\u8BEF",
    passwordUpdated: "\u5BC6\u7801\u66F4\u65B0\u6210\u529F",
    internalError: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF"
  } : {
    passwordsRequired: "Old and new passwords are required",
    adminNotFound: "Admin user not found",
    incorrectOldPassword: "Incorrect old password",
    passwordUpdated: "Password updated successfully",
    internalError: "Internal server error"
  };
  try {
    const body = await readBody(event);
    const { oldPassword, newPassword } = body;
    if (!oldPassword || !newPassword) {
      return { code: 1, message: messages.passwordsRequired };
    }
    const adminUsers = await db.select().from(admins).where(eq(admins.username, "admin"));
    if (adminUsers.length === 0) {
      return { code: 1, message: messages.adminNotFound };
    }
    const admin = adminUsers[0];
    const isValid = await verifyPassword(admin.passwordHash, oldPassword);
    if (!isValid) {
      return { code: 1, message: messages.incorrectOldPassword };
    }
    const hashedNewPassword = await hashPassword(newPassword);
    await db.update(admins).set({ passwordHash: hashedNewPassword }).where(eq(admins.username, "admin"));
    return { code: 0, message: messages.passwordUpdated };
  } catch (error) {
    console.error("Update profile error:", error);
    return { code: 1, message: error.message || messages.internalError };
  }
});

export { profile_put as default };
