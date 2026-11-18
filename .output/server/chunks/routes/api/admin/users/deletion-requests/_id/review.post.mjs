import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, r as readBody, dy as reviewAccountDeletionRequest, s as setAuditMeta } from '../../../../../../nitro/nitro.mjs';
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

const review_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const locale = getRequestLocale(event);
  const isZh = String(locale).toLowerCase().startsWith("zh");
  const rawId = getRouterParam(event, "id");
  const requestId = Number(rawId);
  if (!rawId || !Number.isInteger(requestId) || requestId <= 0) {
    throw createError({
      statusCode: 400,
      message: isZh ? "\u7533\u8BF7\u8BB0\u5F55 ID \u65E0\u6548" : "Invalid deletion request ID"
    });
  }
  const body = await readBody(event).catch(() => ({}));
  const action = String(body.action || "").trim();
  if (action !== "approve" && action !== "reject") {
    throw createError({
      statusCode: 400,
      message: isZh ? "\u5BA1\u6838\u64CD\u4F5C\u5FC5\u987B\u4E3A approve\uFF08\u6279\u51C6\u5C01\u5B58\uFF09\u6216 reject\uFF08\u9A73\u56DE\uFF09" : 'Action must be "approve" or "reject"'
    });
  }
  const reviewNote = body.reviewNote ? String(body.reviewNote).trim().slice(0, 1e3) : null;
  const admin = event.context.admin;
  const adminId = (admin == null ? void 0 : admin.id) != null ? Number(admin.id) : null;
  const adminName = (admin == null ? void 0 : admin.username) ? String(admin.username) : null;
  const result = await reviewAccountDeletionRequest(event, {
    requestId,
    action,
    reviewNote,
    adminId,
    adminName
  });
  setAuditMeta(event, {
    action: action === "approve" ? "deletion_request.approve" : "deletion_request.reject",
    resource: "users",
    resourceId: (_b = (_a = result.request) == null ? void 0 : _a.userId) != null ? _b : requestId,
    summary: action === "approve" ? `Approved deletion request #${requestId} and archived user #${(_c = result.request) == null ? void 0 : _c.userId} (${(_d = result.request) == null ? void 0 : _d.emailSnapshot})` : `Rejected deletion request #${requestId} for user #${(_e = result.request) == null ? void 0 : _e.userId} (${(_f = result.request) == null ? void 0 : _f.emailSnapshot})`,
    details: {
      requestId,
      userId: (_g = result.request) == null ? void 0 : _g.userId,
      email: (_h = result.request) == null ? void 0 : _h.emailSnapshot,
      action,
      reviewNote,
      archivedAt: result.archivedAt
    }
  });
  return {
    code: 0,
    success: true,
    message: action === "approve" ? isZh ? "\u5DF2\u5BA1\u6838\u901A\u8FC7\u5E76\u6C38\u4E45\u5C01\u5B58\u8BE5\u8D26\u53F7\uFF0C\u6240\u6709\u6D3B\u8DC3\u767B\u5F55\u6001\u4E0E\u4EE4\u724C\u5747\u5DF2\u5931\u6548" : "Approved and permanently archived the account" : isZh ? "\u5DF2\u9A73\u56DE\u8BE5\u8D26\u53F7\u6CE8\u9500\u7533\u8BF7" : "Account deletion request rejected",
    data: result
  };
});

export { review_post as default };
//# sourceMappingURL=review.post.mjs.map
