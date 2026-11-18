import { d as defineEventHandler, r as readBody, a8 as isVisitorRollupEnabled, a9 as resolveRollupSiteHost, S as getRequestHost, cE as resolveSafeEventCleanupCutoff, P as getConfiguredTimezone, b as db, cF as visitorEvents, cG as markRawEventsCleanedBefore } from '../../../../nitro/nitro.mjs';
import { lt } from 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
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
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';

const cleanup_post = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const body = await readBody(event);
  const keepDays = Math.max(1, Math.min(365, (_a = body == null ? void 0 : body.days) != null ? _a : 90));
  const requestedCutoff = new Date(Date.now() - keepDays * 24 * 60 * 60 * 1e3);
  let cutoff = requestedCutoff;
  const siteHost = isVisitorRollupEnabled() ? await resolveRollupSiteHost(getRequestHost(event)) : null;
  if (siteHost) {
    cutoff = await resolveSafeEventCleanupCutoff(requestedCutoff, { timezone: await getConfiguredTimezone(), siteHost });
  }
  const result = await db.delete(visitorEvents).where(lt(visitorEvents.createdAt, cutoff));
  await markRawEventsCleanedBefore(cutoff);
  const deletedCount = (_c = (_b = result == null ? void 0 : result.changes) != null ? _b : result == null ? void 0 : result.rowCount) != null ? _c : 0;
  return {
    success: true,
    deletedCount,
    keepDays,
    cutoff: cutoff.toISOString(),
    requestedCutoff: requestedCutoff.toISOString(),
    limitedByRollup: cutoff.getTime() < requestedCutoff.getTime()
  };
});

export { cleanup_post as default };
//# sourceMappingURL=cleanup.post.mjs.map
