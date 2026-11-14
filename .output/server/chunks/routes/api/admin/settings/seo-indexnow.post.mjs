import { d as defineEventHandler, r as readBody, cc as collectAllPublicIndexNowUrls, ca as submitIndexNowUrls } from '../../../../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
import 'zod';
import 'crypto';
import 'fs';
import 'path';
import 'node:fs';
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
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:child_process';

const seoIndexnow_post = defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => ({}));
  const customUrls = Array.isArray(body == null ? void 0 : body.urls) ? body.urls.map((item) => String(item || "").trim()).filter(Boolean) : [];
  const urls = customUrls.length > 0 ? customUrls : await collectAllPublicIndexNowUrls(event);
  const result = await submitIndexNowUrls(event, urls, {
    reason: customUrls.length > 0 ? "admin_custom_push" : "admin_full_site_push"
  });
  return {
    code: result.ok ? 0 : 1,
    data: result,
    message: result.message
  };
});

export { seoIndexnow_post as default };
//# sourceMappingURL=seo-indexnow.post.mjs.map
