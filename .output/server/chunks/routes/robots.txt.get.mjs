import { d as defineEventHandler, aO as setHeader, cb as resolveServerSeoContext, gd as readGeoAiBotsPolicy, ge as renderRobotsTxt } from '../nitro/nitro.mjs';
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
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
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
