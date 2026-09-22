import { d as defineEventHandler, cD as setHeader, cE as resolveServerSeoContext } from '../nitro/nitro.mjs';
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

const robots_txt_get = defineEventHandler(async (event) => {
  setHeader(event, "content-type", "text/plain; charset=utf-8");
  setHeader(event, "cache-control", "public, max-age=300, stale-while-revalidate=3600");
  const { origin, locales } = await resolveServerSeoContext(event);
  const lines = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/"
  ];
  for (const locale of locales) {
    lines.push(`Disallow: /${locale.code}/api/`);
  }
  if (origin) lines.push(`Sitemap: ${origin}/sitemap.xml`);
  return `${lines.join("\n")}
`;
});

export { robots_txt_get as default };
