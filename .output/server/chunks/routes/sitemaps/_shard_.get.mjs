import { d as defineEventHandler, f as getRouterParam, eS as parseSitemapShardParam, e as createError, bD as resolveServerSeoContext, eT as generateSitemapShardXml, bL as seoRouteRegistry, bK as classifySeoRoute, eh as setHeader } from '../../nitro/nitro.mjs';
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

const _shard__get = defineEventHandler(async (event) => {
  const shardParam = getRouterParam(event, "shard");
  const parsed = parseSitemapShardParam(shardParam);
  if (!parsed) {
    throw createError({ statusCode: 404, statusMessage: "Sitemap shard not found" });
  }
  let xml = null;
  try {
    const { origin, theme, locales, defaultLocale, seoOptions } = await resolveServerSeoContext(event);
    if (!origin) throw new Error("settings.site_url must be a valid absolute HTTP(S) origin");
    xml = await generateSitemapShardXml(
      parsed,
      seoRouteRegistry.core,
      seoRouteRegistry.themes[theme],
      theme,
      origin,
      locales,
      defaultLocale,
      seoOptions,
      {
        isPublicPath: (path) => classifySeoRoute(seoRouteRegistry, theme, path).kind === "public"
      }
    );
  } catch (error) {
    console.error("Failed to generate sitemap shard:", error);
    throw createError({ statusCode: 503, statusMessage: "Sitemap unavailable" });
  }
  if (!xml) {
    throw createError({ statusCode: 404, statusMessage: "Sitemap shard not found" });
  }
  setHeader(event, "content-type", "application/xml; charset=utf-8");
  setHeader(event, "cache-control", "public, max-age=1800, stale-while-revalidate=86400");
  return xml;
});

export { _shard__get as default };
//# sourceMappingURL=_shard_.get.mjs.map
