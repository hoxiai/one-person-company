import { d as defineEventHandler, r as readBody, an as sweepPendingOrders, s as setAuditMeta } from '../../../../nitro/nitro.mjs';
import 'drizzle-orm';
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

const reconcileSweep_post = defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => ({}));
  const report = await sweepPendingOrders({
    minAgeMinutes: body == null ? void 0 : body.minAgeMinutes,
    maxAgeHours: body == null ? void 0 : body.maxAgeHours,
    limit: body == null ? void 0 : body.limit
  });
  setAuditMeta(event, {
    action: "reconcile.sweep",
    resource: "orders",
    summary: `Swept ${report.scanned} order(s), recovered ${report.paid}`,
    details: report
  });
  return { code: 0, data: report };
});

export { reconcileSweep_post as default };
