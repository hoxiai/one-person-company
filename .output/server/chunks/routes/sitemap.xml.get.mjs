import { d as defineEventHandler, d7 as resolveServerSeoContext, d8 as collectSitemapEntries, d9 as seoRouteRegistry, da as classifySeoRoute, db as renderSitemapXml, d2 as setHeader, e as createError } from '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import '@nuxthub/db';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
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
import 'node:os';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const sitemap_xml_get = defineEventHandler(async (event) => {
  try {
    const { origin, theme, locales, defaultLocale } = await resolveServerSeoContext(event);
    if (!origin) throw new Error("settings.site_url must be a valid absolute HTTP(S) origin");
    const entries = (await collectSitemapEntries(seoRouteRegistry.core, seoRouteRegistry.themes[theme], theme)).filter((entry) => classifySeoRoute(seoRouteRegistry, theme, entry.path).kind === "public");
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
