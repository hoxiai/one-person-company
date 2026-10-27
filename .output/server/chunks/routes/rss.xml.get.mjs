import { d as defineEventHandler, eP as collectRssFeed, eQ as renderRssXml, eh as setHeader, e as createError } from '../nitro/nitro.mjs';
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
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const rss_xml_get = defineEventHandler(async (event) => {
  try {
    const feed = await collectRssFeed(event);
    const body = renderRssXml(feed);
    setHeader(event, "content-type", "application/rss+xml; charset=utf-8");
    setHeader(event, "cache-control", "public, max-age=300, stale-while-revalidate=3600");
    setHeader(event, "x-robots-tag", "index, follow");
    return body;
  } catch (error) {
    console.error("Failed to generate rss.xml:", error);
    throw createError({ statusCode: 503, statusMessage: "RSS feed unavailable" });
  }
});

export { rss_xml_get as default };
//# sourceMappingURL=rss.xml.get.mjs.map
