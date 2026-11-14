import { d as defineEventHandler, f0 as setHeader, c0 as resolveServerSeoContext, fw as readGeoAiBotsPolicy, fx as renderRobotsTxt } from '../nitro/nitro.mjs';
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

const robots_txt_get = defineEventHandler(async (event) => {
  setHeader(event, "content-type", "text/plain; charset=utf-8");
  setHeader(event, "cache-control", "public, max-age=300, stale-while-revalidate=3600");
  const [{ origin, locales }, aiBotsPolicy] = await Promise.all([
    resolveServerSeoContext(event),
    readGeoAiBotsPolicy()
  ]);
  return renderRobotsTxt(origin, locales, { aiBotsPolicy });
});

export { robots_txt_get as default };
//# sourceMappingURL=robots.txt.get.mjs.map
