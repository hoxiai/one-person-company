import { d as defineEventHandler, c7 as resolveServerSeoContext, c8 as collectSitemapEntries, c9 as seoRouteRegistry, ca as classifySeoRoute, cb as renderSitemapXml, c6 as setHeader, e as createError } from '../nitro/nitro.mjs';
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
import 'http';
import 'https';
import 'zlib';
import 'stream';
import 'buffer';
import 'util';
import 'url';
import 'net';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const sitemap_xml_get = defineEventHandler(async (event) => {
  try {
    const { origin, theme, locales, defaultLocale } = await resolveServerSeoContext(event);
    if (!origin) throw new Error("settings.site_url must be a valid absolute HTTP(S) origin");
    const entries = (await collectSitemapEntries(seoRouteRegistry.core, seoRouteRegistry.themes[theme])).filter((entry) => classifySeoRoute(seoRouteRegistry, theme, entry.path).kind === "public");
    const xml = renderSitemapXml(entries, origin, locales, defaultLocale);
    setHeader(event, "content-type", "application/xml; charset=utf-8");
    setHeader(event, "cache-control", "public, max-age=300, stale-while-revalidate=3600");
    return xml;
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    throw createError({ statusCode: 503, statusMessage: "Sitemap unavailable" });
  }
});

export { sitemap_xml_get as default };
