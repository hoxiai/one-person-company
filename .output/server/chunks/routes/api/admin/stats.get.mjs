import { d as defineEventHandler, c as getRequestLocale, D as getConfiguredTimezone, ch as parseStatsRange, g as getQuery, V as getRequestHost, G as buildLocaleCurrencyQuote, W as isVisitorRollupEnabled, X as resolveRollupSiteHost, ca as zonedDateKeysBetween, cb as ensureRollupDays, cc as loadRollupAggregates, cd as loadRollupPaidOverlay, ci as loadRollupTrafficSummary, cj as assembleStatsResponse, ck as buildRollupStatsInput, $ as loadVisitorReport, cl as loadVisitorTrafficSummary, cm as buildRawStatsInput, a0 as createRollupBackgroundScheduler } from '../../../nitro/nitro.mjs';
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

const stats_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const unknown = locale === "zh" ? "\u672A\u77E5" : "Unknown";
  const timezone = await getConfiguredTimezone();
  const {
    preset,
    days,
    rangeStart,
    rangeEnd,
    previousStart,
    previousEnd,
    comparisonMode,
    fullYesterdayStart,
    fullYesterdayEnd
  } = parseStatsRange(getQuery(event), timezone);
  const host = getRequestHost(event);
  const quote = await buildLocaleCurrencyQuote(0);
  const base = {
    locale,
    unknown,
    timezone,
    currency: quote.baseCurrency,
    preset,
    days,
    rangeStart,
    rangeEnd,
    comparisonMode,
    previousStart,
    previousEnd,
    fullYesterdayStart,
    fullYesterdayEnd
  };
  const siteHost = isVisitorRollupEnabled() ? await resolveRollupSiteHost(host) : null;
  if (siteHost) {
    const currentKeys = zonedDateKeysBetween(rangeStart, rangeEnd, timezone);
    const previousKeys = comparisonMode === "yesterday_same_time" ? [] : zonedDateKeysBetween(previousStart, previousEnd, timezone);
    const fullYesterdayKeys = fullYesterdayStart && fullYesterdayEnd ? zonedDateKeysBetween(fullYesterdayStart, fullYesterdayEnd, timezone) : [];
    const ensured = await ensureRollupDays(
      [...currentKeys, ...previousKeys, ...fullYesterdayKeys],
      { timezone, siteHost },
      { schedule: createRollupBackgroundScheduler(event) }
    );
    const [aggregates, overlay, previousTraffic2, fullYesterdayTraffic2] = await Promise.all([
      loadRollupAggregates(currentKeys, { hours: days === 1 }),
      loadRollupPaidOverlay(rangeStart, rangeEnd, currentKeys, timezone),
      comparisonMode === "yesterday_same_time" ? loadVisitorTrafficSummary(previousStart, previousEnd) : loadRollupTrafficSummary(previousStart, previousEnd, previousKeys, timezone),
      fullYesterdayStart && fullYesterdayEnd ? loadRollupTrafficSummary(fullYesterdayStart, fullYesterdayEnd, fullYesterdayKeys, timezone) : Promise.resolve(null)
    ]);
    return assembleStatsResponse(buildRollupStatsInput(aggregates, overlay, {
      ...base,
      previousTraffic: previousTraffic2,
      fullYesterdayTraffic: fullYesterdayTraffic2,
      extra: {
        rollup: {
          source: "rollup",
          complete: ensured.pendingDays.length === 0,
          pendingDays: ensured.pendingDays,
          staleDays: ensured.staleDays,
          multiDayDimensionsAreVisitorDays: days > 1
        }
      }
    }));
  }
  const [report, previousTraffic, fullYesterdayTraffic] = await Promise.all([
    loadVisitorReport(rangeStart, rangeEnd, host),
    loadVisitorTrafficSummary(previousStart, previousEnd),
    fullYesterdayStart && fullYesterdayEnd ? loadVisitorTrafficSummary(fullYesterdayStart, fullYesterdayEnd) : Promise.resolve(null)
  ]);
  return assembleStatsResponse(buildRawStatsInput(report, {
    ...base,
    previousTraffic,
    fullYesterdayTraffic,
    extra: { rollup: { source: "raw" } }
  }));
});

export { stats_get as default };
//# sourceMappingURL=stats.get.mjs.map
