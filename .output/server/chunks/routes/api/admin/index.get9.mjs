import { desc } from 'drizzle-orm';
import { d as defineEventHandler, g as getQuery, b8 as normalizeAppKey, b9 as normalizeReleaseChannel, b as db, ba as releases, bb as mapDbRowToReleaseEntry, bc as compareSemVer, bd as listReleaseApps } from '../../../nitro/nitro.mjs';
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
  const rawApp = String(query.appKey || query.app || "all").trim();
  const filterAppKey = rawApp && rawApp !== "all" ? normalizeAppKey(rawApp) : null;
  const rawChannel = String(query.channel || "all").trim();
  const filterChannel = rawChannel && rawChannel !== "all" ? normalizeReleaseChannel(rawChannel) : null;
  const filterStatus = String(query.status || "all").trim().toLowerCase();
  const keyword = String(query.keyword || query.q || "").trim().toLowerCase();
  const page = Math.max(1, Number.parseInt(String(query.page || "1"), 10) || 1);
  const pageSize = Math.min(100, Math.max(1, Number.parseInt(String(query.pageSize || "20"), 10) || 20));
  const rows = await db.select().from(releases).orderBy(desc(releases.versionCode), desc(releases.id));
  const allEntries = rows.map(mapDbRowToReleaseEntry);
  const stats = {
    total: allEntries.length,
    published: allEntries.filter((r) => r.isActive !== false && !r.withdrawn_at).length,
    withdrawn: allEntries.filter((r) => Boolean(r.withdrawn_at)).length,
    draft: allEntries.filter((r) => r.isActive === false && !r.withdrawn_at).length,
    appsCount: new Set(allEntries.map((r) => r.appKey)).size
  };
  let filtered = allEntries;
  if (filterAppKey) {
    filtered = filtered.filter((r) => r.appKey === filterAppKey);
  }
  if (filterChannel) {
    filtered = filtered.filter((r) => r.channel === filterChannel);
  }
  if (filterStatus === "published") {
    filtered = filtered.filter((r) => r.isActive !== false && !r.withdrawn_at);
  } else if (filterStatus === "withdrawn") {
    filtered = filtered.filter((r) => Boolean(r.withdrawn_at));
  } else if (filterStatus === "draft") {
    filtered = filtered.filter((r) => r.isActive === false && !r.withdrawn_at);
  }
  if (keyword) {
    filtered = filtered.filter((item) => {
      const haystack = [
        item.appKey,
        item.channel,
        item.version,
        item.tag_name,
        item.name,
        item.commit,
        item.title,
        item.summary,
        JSON.stringify(item.locales || {})
      ].join(" ").toLowerCase();
      return haystack.includes(keyword);
    });
  }
  filtered.sort((a, b) => {
    if (a.appKey === b.appKey) {
      const diff = compareSemVer(b.version, a.version);
      if (diff !== 0) return diff;
    }
    return new Date(b.releasedAt).getTime() - new Date(a.releasedAt).getTime();
  });
  const total = filtered.length;
  const offset = (page - 1) * pageSize;
  const items = filtered.slice(offset, offset + pageSize);
  const apps = await listReleaseApps(db);
  return {
    code: 0,
    data: {
      items,
      total,
      page,
      pageSize,
      stats,
      apps
    }
  };
});

export { index_get as default };
//# sourceMappingURL=index.get9.mjs.map
