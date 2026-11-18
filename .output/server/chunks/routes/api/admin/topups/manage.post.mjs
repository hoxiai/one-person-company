import { d as defineEventHandler, e as createError, dc as adminHasPermission, r as readBody, dd as manageTopupRecord, s as setAuditMeta, de as TOPUP_MANAGEMENT_ACTIONS } from '../../../../nitro/nitro.mjs';
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

const inputSchema = z.object({
  action: z.enum(TOPUP_MANAGEMENT_ACTIONS),
  ids: z.array(z.number().int().positive()).min(1).max(50),
  reason: z.string().trim().min(1).max(500)
});
const manage_post = defineEventHandler(async (event) => {
  const admin = event.context.admin;
  if (!(admin == null ? void 0 : admin.id)) throw createError({ statusCode: 401, message: "Administrator authentication required" });
  if (!adminHasPermission(admin, "orders:edit")) {
    throw createError({ statusCode: 403, message: "Order edit permission required" });
  }
  const input = inputSchema.safeParse(await readBody(event));
  if (!input.success) throw createError({ statusCode: 400, message: "Choose 1\u201350 records, an action and a reason (up to 500 characters)" });
  const { action, reason } = input.data;
  const results = [];
  for (const id of new Set(input.data.ids)) {
    try {
      results.push(await manageTopupRecord(id, action, reason, Number(admin.id)));
    } catch (error) {
      console.error(`[topups.manage] ${action} failed for record ${id}`, error);
      results.push({ id, outcome: "failed", reason: "failed" });
    }
  }
  setAuditMeta(event, {
    action: `topups.${action}`,
    resource: "topups",
    summary: `${action}: ${results.filter((row) => row.outcome === "updated").length} top-up record(s)`,
    details: { reason, results }
  });
  return { code: 0, data: { results } };
});

export { manage_post as default };
//# sourceMappingURL=manage.post.mjs.map
