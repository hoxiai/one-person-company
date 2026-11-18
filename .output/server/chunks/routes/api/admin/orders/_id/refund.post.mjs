import { d as defineEventHandler, aO as setHeader, aP as getUserSession, e as createError, f as getRouterParam, r as readBody, ax as getOrderRefund, s as setAuditMeta, aQ as requestOrderRefund, aR as rejectOrderRefund, aS as reconcileRefund, aT as approveOrderRefund } from '../../../../../nitro/nitro.mjs';
import { z } from 'zod';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
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

const schema = z.object({
  action: z.enum(["refund", "approve", "reject", "reconcile"]),
  reason: z.string().trim().min(1).max(500).optional(),
  confirmSubscriptionImpact: z.boolean().optional()
}).strict();
const refund_post = defineEventHandler(async (event) => {
  var _a;
  setHeader(event, "cache-control", "no-store");
  const session = await getUserSession(event);
  const adminId = Number((_a = session.admin) == null ? void 0 : _a.id);
  if (!adminId) throw createError({ statusCode: 401, message: "Administrator required" });
  const id = getRouterParam(event, "id");
  if (!id) throw createError({ statusCode: 400, message: "Missing order ID" });
  const parsed = schema.safeParse(await readBody(event));
  if (!parsed.success) throw createError({ statusCode: 400, message: "Invalid refund action or reason" });
  const body = parsed.data;
  const before = await getOrderRefund(id);
  setAuditMeta(event, { summary: `Refund ${body.action} for order ${id}`, details: { action: body.action, refundId: before == null ? void 0 : before.id, beforeStatus: before == null ? void 0 : before.status, reason: body.reason, confirmSubscriptionImpact: body.confirmSubscriptionImpact === true } });
  if (body.action === "refund" && !before) await requestOrderRefund(id, body.reason, { adminId });
  const data = body.action === "reject" ? await rejectOrderRefund(id, adminId, body.reason) : body.action === "reconcile" ? await reconcileRefund(id) : await approveOrderRefund(id, adminId, body.confirmSubscriptionImpact === true);
  setAuditMeta(event, { summary: `Refund ${body.action} for order ${id}`, details: { refundId: data == null ? void 0 : data.id, beforeStatus: before == null ? void 0 : before.status, afterStatus: data == null ? void 0 : data.status, effectsError: data == null ? void 0 : data.effectsError } });
  return { data };
});

export { refund_post as default };
//# sourceMappingURL=refund.post.mjs.map
