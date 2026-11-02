import { d as defineEventHandler, c as getRequestLocale, r as readBody, D as getConfiguredTimezone, X as resolveRollupSiteHost, V as getRequestHost, e as createError, ct as zonedDayBounds, c5 as zonedDateKeysBetween, cu as loadRawEventsCompleteSince, cv as isRawDayComplete, cw as computeRollupDay, c6 as ensureRollupDays } from '../../../../nitro/nitro.mjs';
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
import 'node:fs/promises';
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
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const DATE_KEY = /^\d{4}-\d{2}-\d{2}$/;
const MAX_DAYS_PER_CALL = 31;
const rollup_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const body = await readBody(event).catch(() => null);
  const timezone = await getConfiguredTimezone();
  const siteHost = await resolveRollupSiteHost(getRequestHost(event));
  if (!siteHost) {
    throw createError({ statusCode: 409, statusMessage: locale === "zh" ? "\u65E0\u6CD5\u786E\u5B9A\u672C\u7AD9\u57DF\u540D,\u8BF7\u5148\u914D\u7F6E site_url" : "Unable to resolve the site host; configure site_url" });
  }
  const from = typeof (body == null ? void 0 : body.from) === "string" && DATE_KEY.test(body.from) ? body.from : null;
  const to = typeof (body == null ? void 0 : body.to) === "string" && DATE_KEY.test(body.to) ? body.to : null;
  if (!from || !to || from > to) {
    throw createError({ statusCode: 400, statusMessage: locale === "zh" ? "\u8BF7\u63D0\u4F9B\u6709\u6548\u7684 from / to \u65E5\u671F(YYYY-MM-DD)" : "Provide valid from / to dates (YYYY-MM-DD)" });
  }
  const now = /* @__PURE__ */ new Date();
  const end = new Date(Math.min(zonedDayBounds(to, timezone).end.getTime(), now.getTime()));
  const keys = zonedDateKeysBetween(zonedDayBounds(from, timezone).start, end, timezone);
  const batch = keys.slice(-MAX_DAYS_PER_CALL);
  const remainingDays = keys.slice(0, Math.max(0, keys.length - MAX_DAYS_PER_CALL));
  const ctx = { timezone, siteHost };
  if ((body == null ? void 0 : body.force) === true) {
    const rawCompleteSince = await loadRawEventsCompleteSince();
    const computedDays = [];
    const skippedDays = [];
    for (const dateKey of [...batch].reverse()) {
      if (!isRawDayComplete(zonedDayBounds(dateKey, timezone).start, rawCompleteSince)) {
        skippedDays.push(dateKey);
        continue;
      }
      await computeRollupDay(dateKey, ctx);
      computedDays.push(dateKey);
    }
    return { success: true, computedDays: computedDays.reverse(), skippedDays: skippedDays.reverse(), pendingDays: [], staleDays: [], remainingDays };
  }
  const result = await ensureRollupDays(batch, ctx, { budgetMs: 6e4 });
  return { success: true, ...result, remainingDays };
});

export { rollup_post as default };
//# sourceMappingURL=rollup.post.mjs.map
