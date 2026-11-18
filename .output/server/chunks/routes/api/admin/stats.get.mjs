import { d as defineEventHandler, c as getRequestLocale, P as getConfiguredTimezone, cx as parseStatsRange, g as getQuery, S as getRequestHost, a1 as buildLocaleCurrencyQuote, a8 as isVisitorRollupEnabled, a9 as resolveRollupSiteHost, cq as zonedDateKeysBetween, cr as ensureRollupDays, cs as loadRollupAggregates, ct as loadRollupPaidOverlay, cy as loadRollupTrafficSummary, cz as assembleStatsResponse, cA as buildRollupStatsInput, ad as loadVisitorReport, cB as loadVisitorTrafficSummary, cC as buildRawStatsInput, cD as loadCachedVisitorTrafficSummary, ae as createRollupBackgroundScheduler } from '../../../nitro/nitro.mjs';
import 'drizzle-orm';
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
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
import 'node:child_process';

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
  const host = getRequestHost(event, { xForwardedHost: true });
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
      comparisonMode === "yesterday_same_time" ? loadCachedVisitorTrafficSummary(previousStart, previousEnd, { cacheToken: ensured.computedDays.join(",") }) : loadRollupTrafficSummary(previousStart, previousEnd, previousKeys, timezone),
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
    comparisonMode === "yesterday_same_time" ? loadCachedVisitorTrafficSummary(previousStart, previousEnd) : loadVisitorTrafficSummary(previousStart, previousEnd),
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
