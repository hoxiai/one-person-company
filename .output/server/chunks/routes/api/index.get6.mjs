import { d as defineEventHandler, g as getQuery, b8 as normalizeAppKey, b9 as normalizeReleaseChannel, ee as normalizeReleaseLang, bh as getBundledReleasesForApp, ef as listReleases, ek as pickLatestReleaseForTarget, ei as checkReleaseUpgrade, bd as listReleaseApps } from '../../nitro/nitro.mjs';
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

const index_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const rawApp = String(query.app || query.appKey || query.scope || "default").trim();
  const appKey = rawApp === "all" ? "all" : normalizeAppKey(rawApp, "default");
  const channel = query.channel === "all" ? "all" : normalizeReleaseChannel(query.channel);
  const lang = normalizeReleaseLang(
    typeof query.lang === "string" ? query.lang : typeof query.locale === "string" ? query.locale : "zh"
  );
  const limit = Math.min(100, Math.max(1, Number(query.limit) || 30));
  const pkg = typeof query.package === "string" ? query.package.trim() : void 0;
  const platform = typeof query.platform === "string" ? query.platform.trim() : typeof query.os === "string" ? query.os.trim() : void 0;
  const arch = typeof query.arch === "string" ? query.arch.trim() : void 0;
  const currentVersion = typeof query.version === "string" ? query.version.trim() : void 0;
  const bundledFallback = appKey !== "all" ? getBundledReleasesForApp(appKey) : void 0;
  const items = await listReleases({
    appKey,
    channel,
    lang,
    includeWithdrawn: false,
    includeInactive: false,
    limit,
    bundledFallback
  });
  const targetMatch = pkg || platform || arch ? pickLatestReleaseForTarget(items, { package: pkg, platform, arch }) : null;
  const latest = targetMatch ? targetMatch.release : items[0] || null;
  const upgrade = appKey !== "all" && (currentVersion || pkg || platform || arch) ? await checkReleaseUpgrade({
    appKey,
    channel: channel === "all" ? "stable" : channel,
    currentVersion,
    lang,
    package: pkg,
    platform,
    arch,
    bundledFallback
  }) : void 0;
  const includeApps = query.includeApps === "1" || query.includeApps === "true";
  const apps = includeApps ? await listReleaseApps() : void 0;
  return {
    code: 0,
    msg: "ok",
    appKey,
    channel,
    lang,
    latest,
    releases: items,
    ...upgrade ? { upgrade } : {},
    ...apps ? { apps } : {},
    data: {
      appKey,
      channel,
      lang,
      latest,
      releases: items,
      ...upgrade ? { upgrade } : {},
      ...apps ? { apps } : {}
    }
  };
});

export { index_get as default };
//# sourceMappingURL=index.get6.mjs.map
