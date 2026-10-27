import { d as defineEventHandler, g as getQuery, b8 as normalizeAppKey, b9 as normalizeReleaseChannel, ee as normalizeReleaseLang, bh as getBundledReleasesForApp, ef as listReleases, bd as listReleaseApps, bD as resolveServerSeoContext, ce as getRequestURL, eg as buildSparkleAppcastXml, eh as setHeader } from '../../../nitro/nitro.mjs';
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

const appcastHandler = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const appKey = normalizeAppKey(query.app || query.appKey || query.scope || "default", "default");
  const channel = normalizeReleaseChannel(query.channel);
  const lang = normalizeReleaseLang(
    typeof query.lang === "string" ? query.lang : typeof query.locale === "string" ? query.locale : "zh"
  );
  const pkg = typeof query.package === "string" ? query.package.trim() : null;
  const platform = typeof query.platform === "string" ? query.platform.trim() : typeof query.os === "string" ? query.os.trim() : null;
  const arch = typeof query.arch === "string" ? query.arch.trim() : null;
  const limitRaw = Number.parseInt(String(query.limit || "20"), 10);
  const limit = Number.isFinite(limitRaw) && limitRaw > 0 ? Math.min(limitRaw, 100) : 20;
  const bundledFallback = getBundledReleasesForApp(appKey);
  const releases = await listReleases({
    appKey,
    channel,
    lang,
    includeWithdrawn: false,
    includeInactive: false,
    limit,
    bundledFallback
  });
  let appName = appKey;
  try {
    const apps = await listReleaseApps();
    const matched = apps.find((a) => a.appKey === appKey);
    if (matched) {
      appName = (lang.startsWith("zh") ? matched.nameZh || matched.name : matched.name || matched.nameZh) || appKey;
    }
  } catch {
  }
  let siteUrl = "";
  try {
    const seoCtx = await resolveServerSeoContext(event);
    if (seoCtx == null ? void 0 : seoCtx.origin) siteUrl = seoCtx.origin;
  } catch {
  }
  if (!siteUrl) {
    try {
      const reqUrl = getRequestURL(event);
      if (reqUrl == null ? void 0 : reqUrl.origin) siteUrl = reqUrl.origin;
    } catch {
    }
  }
  const xml = buildSparkleAppcastXml({
    appKey,
    appName,
    lang,
    siteUrl,
    releases,
    target: {
      package: pkg,
      platform,
      arch
    }
  });
  setHeader(event, "Content-Type", "application/rss+xml; charset=utf-8");
  setHeader(event, "Cache-Control", "public, max-age=60, s-maxage=60");
  return xml;
});

export { appcastHandler as default };
//# sourceMappingURL=appcast.xml.get.mjs.map
