import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, r as readBody, di as archiveUserAccount, s as setAuditMeta } from '../../../../nitro/nitro.mjs';
import 'drizzle-orm';
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
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';

const _id__delete = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const isZh = String(locale).toLowerCase().startsWith("zh");
  const messages = isZh ? {
    userIdRequired: "\u7528\u6237 ID \u4E0D\u80FD\u4E3A\u7A7A",
    archived: "\u5BA2\u6237\u8D26\u53F7\u5DF2\u5C01\u5B58\u5220\u9664\uFF0C\u6240\u6709\u767B\u5F55\u4F1A\u8BDD\u4E0E\u8BBF\u95EE\u51ED\u636E\u5DF2\u6C38\u4E45\u540A\u9500",
    failed: "\u5C01\u5B58\u5220\u9664\u5BA2\u6237\u8D26\u53F7\u5931\u8D25"
  } : {
    userIdRequired: "User ID is required",
    archived: "Customer account archived and permanently disabled from signing in",
    failed: "Failed to archive customer account"
  };
  try {
    const id = getRouterParam(event, "id");
    const userId = Number(id);
    if (!id || !Number.isInteger(userId) || userId <= 0) {
      throw createError({ statusCode: 400, message: messages.userIdRequired });
    }
    const body = await readBody(event).catch(() => ({}));
    const admin = event.context.admin;
    const result = await archiveUserAccount(event, {
      userId,
      source: "admin",
      adminId: (admin == null ? void 0 : admin.id) != null ? Number(admin.id) : null,
      adminName: (admin == null ? void 0 : admin.username) ? String(admin.username) : null,
      reason: (body == null ? void 0 : body.reason) ? String(body.reason) : null,
      reviewNote: (body == null ? void 0 : body.reviewNote) ? String(body.reviewNote) : null
    });
    setAuditMeta(event, {
      action: "archive_delete",
      resource: "users",
      resourceId: userId,
      summary: `Archived and sealed user #${userId} (${result.email})`,
      details: {
        userId,
        email: result.email,
        archivedAt: result.archivedAt,
        reason: (body == null ? void 0 : body.reason) || null
      }
    });
    return {
      code: 0,
      message: messages.archived,
      data: result
    };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || messages.failed
    });
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
