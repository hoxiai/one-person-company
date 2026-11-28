import { d as defineEventHandler, c as getRequestLocale, aP as getUserSession, e as createError, f as getRouterParam, dy as loadActiveProxyAdapter } from '../../../../nitro/nitro.mjs';
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

const _action__post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const session = await getUserSession(event).catch(() => null);
  if (!(session == null ? void 0 : session.user)) {
    throw createError({ statusCode: 401, statusMessage: locale === "zh" ? "\u672A\u767B\u5F55" : "Unauthorized" });
  }
  const action = String(getRouterParam(event, "action") || "").trim().toLowerCase();
  const adapter = await loadActiveProxyAdapter();
  if (!(adapter == null ? void 0 : adapter.handlePlayground)) {
    throw createError({ statusCode: 404, statusMessage: "Playground is not enabled for this site" });
  }
  event.session = session;
  return adapter.handlePlayground(action, event);
});

export { _action__post as default };
//# sourceMappingURL=_action_.post.mjs.map
