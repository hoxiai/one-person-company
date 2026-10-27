import { d as defineEventHandler, g as getQuery, b8 as normalizeAppKey, b9 as normalizeReleaseChannel, ee as normalizeReleaseLang, ei as checkReleaseUpgrade, bh as getBundledReleasesForApp, dh as setResponseStatus, ej as buildTauriUpdateManifest } from '../../../nitro/nitro.mjs';
import appcastHandler from './appcast.xml.get.mjs';
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

const check_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const format = String(query.format || "").trim().toLowerCase();
  if (format === "appcast" || format === "xml" || format === "sparkle") {
    return appcastHandler(event);
  }
  const appKey = normalizeAppKey(query.app || query.appKey || query.scope || "default", "default");
  const channel = normalizeReleaseChannel(query.channel);
  const lang = normalizeReleaseLang(
    typeof query.lang === "string" ? query.lang : typeof query.locale === "string" ? query.locale : "zh"
  );
  const currentVersion = typeof query.version === "string" ? query.version.trim() : typeof query.currentVersion === "string" ? query.currentVersion.trim() : null;
  const pkg = typeof query.package === "string" ? query.package.trim() : null;
  const platform = typeof query.platform === "string" ? query.platform.trim() : typeof query.os === "string" ? query.os.trim() : typeof query.target === "string" ? query.target.trim() : null;
  const arch = typeof query.arch === "string" ? query.arch.trim() : null;
  const result = await checkReleaseUpgrade({
    appKey,
    channel,
    currentVersion,
    lang,
    package: pkg,
    platform,
    arch,
    bundledFallback: getBundledReleasesForApp(appKey)
  });
  if (format === "tauri") {
    if (!result.release || currentVersion && !result.hasUpdate) {
      setResponseStatus(event, 204);
      return null;
    }
    return buildTauriUpdateManifest(result.release, lang);
  }
  const appcastUrl = `/api/releases/appcast.xml?app=${encodeURIComponent(appKey)}&channel=${encodeURIComponent(channel)}&lang=${encodeURIComponent(lang)}`;
  const tauri = result.release ? buildTauriUpdateManifest(result.release, lang) : null;
  const payload = {
    ...result,
    appcastUrl,
    tauri
  };
  return {
    code: 0,
    msg: "ok",
    ...payload,
    data: payload
  };
});

export { check_get as default };
//# sourceMappingURL=check.get.mjs.map
