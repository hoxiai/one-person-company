import { d as defineEventHandler, g as getQuery, K as getRequestHost, bB as AI_CRAWLER_SIGNATURES, a as accessLogs, b as db, J as loadVisitorReport, b1 as settings, a9 as logs, bE as detectAiCrawler, bQ as isGeoCorpusRequestPath, t as toIsoTimestamp, bR as buildVisitorGeoConversions } from '../../../../nitro/nitro.mjs';
import { or, sql, and, gte, desc, eq } from 'drizzle-orm';
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

const seoTelemetry_get = defineEventHandler(async (event) => {
  const query = event && typeof event.query === "object" && event.query ? event.query : getQuery(event);
  const host = (() => {
    try {
      return getRequestHost(event) || "localhost";
    } catch {
      return "localhost";
    }
  })();
  const daysRaw = Number.parseInt(String(query.days || "30"), 10);
  const days = Number.isFinite(daysRaw) && daysRaw > 0 && daysRaw <= 90 ? daysRaw : 30;
  const sinceDate = new Date(Date.now() - days * 24 * 60 * 60 * 1e3);
  const untilDate = new Date(Date.now() + 60 * 1e3);
  const aiCrawlerFilter = or(
    ...AI_CRAWLER_SIGNATURES.map(
      (sig) => sql`lower(coalesce(${accessLogs.userAgent}, '')) like ${`%${sig.pattern.toLowerCase()}%`}`
    ),
    sql`lower(coalesce(${accessLogs.path}, '')) like '%/llms.txt%'`,
    sql`lower(coalesce(${accessLogs.path}, '')) like '%/llms-full.txt%'`,
    sql`lower(coalesce(${accessLogs.path}, '')) like '%.md%'`
  );
  const [rawAccessLogs, visitorReport, settingRows, rawIndexNowLogs] = await Promise.all([
    Promise.resolve(
      db.select({
        id: accessLogs.id,
        path: accessLogs.path,
        method: accessLogs.method,
        ip: accessLogs.ip,
        userAgent: accessLogs.userAgent,
        country: accessLogs.country,
        statusCode: accessLogs.statusCode,
        createdAt: accessLogs.createdAt
      }).from(accessLogs).where(and(gte(accessLogs.createdAt, sinceDate), aiCrawlerFilter)).orderBy(desc(accessLogs.createdAt), desc(accessLogs.id)).limit(5e3)
    ).catch(() => []),
    loadVisitorReport(sinceDate, untilDate, host, { dbClient: db }),
    Promise.resolve(
      db.select({
        key: settings.key,
        value: settings.value
      }).from(settings)
    ).catch(() => []),
    Promise.resolve(
      db.select({
        id: logs.id,
        level: logs.level,
        message: logs.message,
        details: logs.details,
        createdAt: logs.createdAt
      }).from(logs).where(eq(logs.source, "indexnow")).orderBy(desc(logs.id)).limit(12)
    ).catch(() => [])
  ]);
  let totalBotHits = 0;
  let llmsTxtHits = 0;
  let markdownMirrorHits = 0;
  let lastCrawlAt = null;
  const botStatsMap = /* @__PURE__ */ new Map();
  const pathStatsMap = /* @__PURE__ */ new Map();
  const recentCrawls = [];
  for (const row of rawAccessLogs) {
    const path = String(row.path || "/");
    const bot = detectAiCrawler(row.userAgent);
    const isCorpusPath = isGeoCorpusRequestPath(path);
    const isLlms = path === "/llms.txt" || path === "/llms-full.txt";
    const isMarkdown = /\.md$/i.test(path);
    if (!bot && !isLlms && !isMarkdown) continue;
    const createdAtIso = toIsoTimestamp(row.createdAt);
    const effectiveBot = bot || {
      id: "GeoCorpusReader",
      label: "LLM / Markdown Reader",
      vendor: "Agent / CLI",
      category: "agent"};
    totalBotHits += 1;
    if (isLlms) llmsTxtHits += 1;
    if (isMarkdown) markdownMirrorHits += 1;
    if (!lastCrawlAt || createdAtIso > lastCrawlAt) {
      lastCrawlAt = createdAtIso;
    }
    const existingBot = botStatsMap.get(effectiveBot.id);
    if (existingBot) {
      existingBot.hits += 1;
      if (isMarkdown) existingBot.markdownHits += 1;
      if (isLlms) existingBot.llmsHits += 1;
      if (createdAtIso > existingBot.lastSeenAt) {
        existingBot.lastSeenAt = createdAtIso;
      }
    } else {
      botStatsMap.set(effectiveBot.id, {
        id: effectiveBot.id,
        label: effectiveBot.label,
        vendor: effectiveBot.vendor,
        category: effectiveBot.category,
        hits: 1,
        markdownHits: isMarkdown ? 1 : 0,
        llmsHits: isLlms ? 1 : 0,
        lastSeenAt: createdAtIso
      });
    }
    if (bot || isCorpusPath) {
      const existingPath = pathStatsMap.get(path);
      if (existingPath) {
        existingPath.hits += 1;
        if (createdAtIso > existingPath.lastSeenAt) {
          existingPath.lastSeenAt = createdAtIso;
          existingPath.lastBot = effectiveBot.label;
        }
      } else {
        pathStatsMap.set(path, {
          path,
          hits: 1,
          isMarkdown,
          isLlms,
          lastBot: effectiveBot.label,
          lastSeenAt: createdAtIso
        });
      }
    }
    if (recentCrawls.length < 25) {
      recentCrawls.push({
        id: row.id,
        botLabel: effectiveBot.label,
        vendor: effectiveBot.vendor,
        path,
        statusCode: row.statusCode || 200,
        country: row.country || null,
        ip: row.ip || null,
        createdAt: createdAtIso
      });
    }
  }
  const bots = Array.from(botStatsMap.values()).sort((a, b) => b.hits - a.hits);
  const topPaths = Array.from(pathStatsMap.values()).sort((a, b) => b.hits - a.hits).slice(0, 12);
  const settingsMap = new Map(settingRows.map((row) => [row.key, row.value]));
  const baseCurrency = String(settingsMap.get("currency") || settingsMap.get("base_currency") || "USD").trim().toUpperCase() || "USD";
  const geoConversions = buildVisitorGeoConversions(visitorReport, baseCurrency);
  const indexNowLogs = rawIndexNowLogs.map((item) => {
    let parsedDetails = null;
    if (item.details) {
      try {
        parsedDetails = JSON.parse(item.details);
      } catch {
        parsedDetails = null;
      }
    }
    return {
      id: item.id,
      level: item.level,
      message: item.message,
      details: parsedDetails,
      createdAt: toIsoTimestamp(item.createdAt)
    };
  });
  return {
    code: 0,
    data: {
      days,
      botTelemetry: {
        totalBotHits,
        llmsTxtHits,
        markdownMirrorHits,
        activeBotsCount: bots.length,
        lastCrawlAt,
        bots,
        topPaths,
        recentCrawls
      },
      geoConversions,
      indexNowLogs
    }
  };
});

export { seoTelemetry_get as default };
//# sourceMappingURL=seo-telemetry.get.mjs.map
