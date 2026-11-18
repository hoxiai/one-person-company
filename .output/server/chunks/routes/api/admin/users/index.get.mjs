import { d as defineEventHandler, c as getRequestLocale, g as getQuery, dz as listAdminAccountDeletionRequests, e as createError } from '../../../../nitro/nitro.mjs';
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

const index_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const query = getQuery(event);
  try {
    return await listAdminAccountDeletionRequests({
      page: Number(query.page) || 1,
      pageSize: Number(query.pageSize) || 15,
      status: String(query.status || "").trim(),
      search: String(query.search || query.q || query.keyword || "").trim()
    });
  } catch (error) {
    console.error("[admin/users/deletion-requests] Error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || (locale === "zh" ? "\u83B7\u53D6\u6CE8\u9500\u7533\u8BF7\u5217\u8868\u5931\u8D25" : "Failed to fetch account deletion requests")
    });
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
