import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, r as readBody, b as db, u as users, bl as proxyExternalRequest } from '../../../../../nitro/nitro.mjs';
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

const status_put = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    userIdRequired: "\u7528\u6237 ID \u4E0D\u80FD\u4E3A\u7A7A",
    invalidStatus: "\u72B6\u6001\u5FC5\u987B\u4E3A 0\uFF08\u7981\u7528\uFF09\u6216 1\uFF08\u542F\u7528\uFF09",
    userNotFound: "\u7528\u6237\u4E0D\u5B58\u5728",
    updated: "\u5BA2\u6237\u72B6\u6001\u5DF2\u66F4\u65B0",
    failed: "\u66F4\u65B0\u5BA2\u6237\u72B6\u6001\u5931\u8D25"
  } : {
    userIdRequired: "User ID is required",
    invalidStatus: "Status must be 0 (disabled) or 1 (active)",
    userNotFound: "User not found",
    updated: "Customer status updated successfully",
    failed: "Failed to update customer status"
  };
  try {
    const id = getRouterParam(event, "id");
    const userId = Number(id);
    if (!id || !Number.isInteger(userId) || userId <= 0) {
      throw createError({ statusCode: 400, message: messages.userIdRequired });
    }
    const body = await readBody(event).catch(() => ({})) || {};
    const status = Number(body.status);
    if (status !== 0 && status !== 1) {
      throw createError({ statusCode: 400, message: messages.invalidStatus });
    }
    const userRows = await db.select().from(users).where(eq(users.id, userId)).limit(1);
    if (!userRows[0]) {
      throw createError({ statusCode: 404, message: messages.userNotFound });
    }
    await db.update(users).set({ status }).where(eq(users.id, userId));
    try {
      await proxyExternalRequest(event, {
        requireSession: true,
        proxyLabel: "ExternalUserStatusUpdate",
        userAgent: "APay-Admin/1.0",
        overrideQuery: {
          path: `/api/admin/users/${userId}/status`
        }
      });
    } catch (extErr) {
      console.warn("[admin/users/status] Failed to sync status to external gateway:", (extErr == null ? void 0 : extErr.message) || extErr);
    }
    return {
      code: 0,
      message: messages.updated,
      data: {
        userId,
        status
      }
    };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || messages.failed
    });
  }
});

export { status_put as default };
