import { d as defineEventHandler, c0 as resolveServerSeoContext, g as getQuery, fA as generateAdaptiveSitemapXml, c8 as seoRouteRegistry, c7 as classifySeoRoute, f0 as setHeader, e as createError } from '../nitro/nitro.mjs';
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

const sitemap_xml_get = defineEventHandler(async (event) => {
  try {
    const { origin, theme, locales, defaultLocale, seoOptions } = await resolveServerSeoContext(event);
    if (!origin) throw new Error("settings.site_url must be a valid absolute HTTP(S) origin");
    const query = getQuery(event) || {};
    const forceIndex = query.index === "1" || query.index === "true";
    const xml = await generateAdaptiveSitemapXml(
      seoRouteRegistry.core,
      seoRouteRegistry.themes[theme],
      theme,
      origin,
      locales,
      defaultLocale,
      seoOptions,
      {
        isPublicPath: (path) => classifySeoRoute(seoRouteRegistry, theme, path).kind === "public",
        forceIndex
      }
    );
    setHeader(event, "content-type", "application/xml; charset=utf-8");
    setHeader(event, "cache-control", "public, max-age=300, stale-while-revalidate=3600");
    return xml;
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    throw createError({ statusCode: 503, statusMessage: "Sitemap unavailable" });
  }
});

export { sitemap_xml_get as default };
//# sourceMappingURL=sitemap.xml.get.mjs.map
