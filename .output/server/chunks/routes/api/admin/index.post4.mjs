import { d as defineEventHandler, r as readBody, D as getConfiguredTimezone, b8 as parseDateTimeInTimezone, e as createError, b9 as createRedeemCodes, b6 as RedeemError } from '../../../nitro/nitro.mjs';
import 'drizzle-orm';
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
import 'node:module';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const index_post = defineEventHandler(async (event) => {
  var _a;
  const admin = event.context.admin;
  const body = await readBody(event);
  const expiresRaw = body == null ? void 0 : body.expiresAt;
  let expiresAt = null;
  if (expiresRaw) {
    const tz = await getConfiguredTimezone();
    expiresAt = parseDateTimeInTimezone(expiresRaw, tz);
    if (!expiresAt || Number.isNaN(expiresAt.getTime())) {
      throw createError({ statusCode: 400, statusMessage: "\u6709\u6548\u671F\u4E0D\u662F\u5408\u6CD5\u65F6\u95F4" });
    }
  }
  try {
    const result = await createRedeemCodes({
      count: Number(body == null ? void 0 : body.count),
      amount: Number(body == null ? void 0 : body.amount),
      currency: (body == null ? void 0 : body.currency) ? String(body.currency) : void 0,
      batchId: (body == null ? void 0 : body.batchId) ? String(body.batchId) : null,
      expiresAt,
      remark: (body == null ? void 0 : body.remark) ? String(body.remark) : "",
      createdBy: (_a = admin == null ? void 0 : admin.id) != null ? _a : null
    });
    return { code: 0, message: `\u6210\u529F\u751F\u6210 ${result.created} \u4E2A\u5151\u6362\u7801`, data: result };
  } catch (error) {
    if (error instanceof RedeemError) {
      throw createError({ statusCode: error.statusCode, statusMessage: error.message });
    }
    throw error;
  }
});

export { index_post as default };
//# sourceMappingURL=index.post4.mjs.map
