import { d as defineEventHandler, f as getRouterParam, e as createError, r as readBody, b as db, aw as promoApplications, ac as ensurePromoMember, ax as PROMO_ROLE } from '../../../../../../nitro/nitro.mjs';
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

const audit_post = defineEventHandler(async (event) => {
  const admin = event.context.admin;
  const adminId = Number((admin == null ? void 0 : admin.id) || 0) || null;
  const id = Number(getRouterParam(event, "id"));
  if (!id) {
    throw createError({ statusCode: 400, message: "Invalid application ID" });
  }
  const body = await readBody(event);
  const action = String((body == null ? void 0 : body.action) || "").trim().toLowerCase();
  const reviewNote = String((body == null ? void 0 : body.reviewNote) || "").trim();
  if (action !== "approve" && action !== "reject") {
    throw createError({ statusCode: 400, message: "Action must be approve or reject" });
  }
  const rows = await db.select().from(promoApplications).where(eq(promoApplications.id, id)).limit(1);
  if (rows.length === 0) {
    throw createError({ statusCode: 404, message: "Application not found" });
  }
  const app = rows[0];
  const nextStatus = action === "approve" ? "approved" : "rejected";
  const now = /* @__PURE__ */ new Date();
  await db.update(promoApplications).set({
    status: nextStatus,
    reviewNote: reviewNote || null,
    reviewedByAdminId: adminId,
    reviewedAt: now,
    updatedAt: now
  }).where(eq(promoApplications.id, id));
  if (action === "approve") {
    await ensurePromoMember(app.userId, PROMO_ROLE.MEMBER);
  }
  return {
    ok: true,
    status: nextStatus,
    message: action === "approve" ? "\u5DF2\u5BA1\u6838\u901A\u8FC7\u5E76\u6FC0\u6D3B\u63A8\u5E7F\u6743\u9650" : "\u5DF2\u9A73\u56DE\u7533\u8BF7"
  };
});

export { audit_post as default };
