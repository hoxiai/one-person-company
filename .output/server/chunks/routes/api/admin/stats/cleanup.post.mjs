import { d as defineEventHandler, r as readBody, a4 as isVisitorRollupEnabled, a5 as resolveRollupSiteHost, a3 as getRequestHost, cs as resolveSafeEventCleanupCutoff, L as getConfiguredTimezone, b as db, ct as visitorEvents, cu as markRawEventsCleanedBefore } from '../../../../nitro/nitro.mjs';
import { lt } from 'drizzle-orm';
import 'node:crypto';
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
