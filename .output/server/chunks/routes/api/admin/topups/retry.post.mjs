import { d as defineEventHandler, r as readBody, b as db, I as topups, e as createError, ad as settlePaidTopup, ae as recoverCreditedApayTopup, s as setAuditMeta, by as retryIncompleteTopups } from '../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
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
import 'node:os';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const retry_post = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const body = await readBody(event).catch(() => ({}));
  if (body == null ? void 0 : body.orderId) {
    const orderId = String(body.orderId).trim();
    const existing = await db.select().from(topups).where(eq(topups.orderId, orderId)).limit(1);
    if (!existing[0]) {
      throw createError({ statusCode: 404, message: `Top-up record for order ${orderId} not found` });
    }
    const outcome = await settlePaidTopup(orderId);
    if (outcome === "credited" || outcome === "already_credited") {
      await recoverCreditedApayTopup(orderId);
    }
    const updated = await db.select().from(topups).where(eq(topups.orderId, orderId)).limit(1);
    const report2 = {
      orderId,
      outcome,
      status: (_a = updated[0]) == null ? void 0 : _a.status,
      retryCount: (_b = updated[0]) == null ? void 0 : _b.retryCount,
      lastError: (_c = updated[0]) == null ? void 0 : _c.lastError
    };
    setAuditMeta(event, {
      action: "topups.retry_single",
      resource: "topups",
      summary: `Retried top-up order ${orderId}, outcome: ${outcome}`,
      details: report2
    });
    return { code: 0, data: report2 };
  }
  const report = await retryIncompleteTopups(body == null ? void 0 : body.limit);
  setAuditMeta(event, {
    action: "topups.retry",
    resource: "topups",
    summary: `Retried ${report.scanned} top-up(s), credited ${report.credited}`,
    details: report
  });
  return { code: 0, data: report };
});

export { retry_post as default };
