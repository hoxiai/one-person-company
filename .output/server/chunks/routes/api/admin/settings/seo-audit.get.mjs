import { d as defineEventHandler, b as db, p as products, aJ as posts, b1 as settings, a as accessLogs, bB as AI_CRAWLER_SIGNATURES, bC as paymentFailures, bD as resolveServerSeoContext, bE as detectAiCrawler, bF as normalizeGeoKeySpecs, bG as normalizeGeoFaqs, bH as normalizeGeoRelatedLinks, bI as evaluateGeoSeoReadiness, bJ as isPostFrozen, bK as classifySeoRoute, bL as seoRouteRegistry } from '../../../../nitro/nitro.mjs';
import { and, eq, desc, gte, or, sql } from 'drizzle-orm';
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

const parseMetaObject = (raw) => {
  if (!raw) return {};
  if (typeof raw === "object" && !Array.isArray(raw)) return raw;
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
    } catch {
      return {};
    }
  }
  return {};
};
const seoAudit_get = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const since30d = new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3);
  const [activeProducts, activePosts, settingRows, recentLogs, recentPaymentFailures, seoCtx] = await Promise.all([
    db.select({
      id: products.id,
      name: products.name,
      slug: products.slug,
      type: products.type,
      price: products.price,
      description: products.description,
      content: products.content,
      metaData: products.metaData,
      isActive: products.isActive,
      status: products.status
    }).from(products).where(and(eq(products.isActive, true), eq(products.status, "active"))).orderBy(desc(products.id)).limit(200).catch(() => []),
    db.select({
      id: posts.id,
      title: posts.title,
      slug: posts.slug,
      type: posts.type,
      locale: posts.locale,
      description: posts.description,
      content: posts.content,
      metaData: posts.metaData,
      isActive: posts.isActive
    }).from(posts).where(and(eq(posts.isActive, true), eq(posts.type, "blog"))).orderBy(desc(posts.id)).limit(200).catch(() => []),
    db.select({
      key: settings.key,
      value: settings.value
    }).from(settings).catch(() => []),
    db.select({
      path: accessLogs.path,
      userAgent: accessLogs.userAgent
    }).from(accessLogs).where(and(
      gte(accessLogs.createdAt, since30d),
      or(
        ...AI_CRAWLER_SIGNATURES.map(
          (sig) => sql`lower(coalesce(${accessLogs.userAgent}, '')) like ${`%${sig.pattern.toLowerCase()}%`}`
        ),
        sql`lower(coalesce(${accessLogs.path}, '')) like '%.md%'`
      )
    )).orderBy(desc(accessLogs.createdAt), desc(accessLogs.id)).limit(5e3).catch(() => []),
    db.select({
      id: paymentFailures.id,
      payMethod: paymentFailures.payMethod
    }).from(paymentFailures).where(gte(paymentFailures.createdAt, since30d)).limit(200).catch(() => []),
    resolveServerSeoContext(event).catch(() => ({ theme: "" }))
  ]);
  const settingsMap = new Map(settingRows.map((r) => [r.key, r.value]));
  const activeTheme = seoCtx.theme || String(settingsMap.get("active_theme") || "").trim();
  const isPublicRoute = (path) => classifySeoRoute(seoRouteRegistry, activeTheme, path).kind === "public";
  const baseCurrency = String(settingsMap.get("currency") || settingsMap.get("base_currency") || "USD").toUpperCase();
  const i18nEnabled = settingsMap.get("i18n_enabled") !== "false";
  const supportedLocales = i18nEnabled ? String(settingsMap.get("supported_locales") || "en,zh").split(",").map((s) => s.trim()).filter(Boolean) : ["en"];
  const defaultLocale = String(settingsMap.get("default_locale") || supportedLocales[0] || "en").trim();
  const secondaryLocales = supportedLocales.filter((l) => l !== defaultLocale);
  const pathBotHits = /* @__PURE__ */ new Map();
  for (const log of recentLogs) {
    const rawPath = String(log.path || "");
    const bot = detectAiCrawler(log.userAgent);
    const isMd = /\.md$/i.test(rawPath);
    if (!bot && !isMd) continue;
    let normalized = ((_a = rawPath.split("?")[0]) == null ? void 0 : _a.replace(/\.md$/i, "")) || "/";
    for (const loc of supportedLocales) {
      if (normalized.startsWith(`/${loc}/`)) {
        normalized = normalized.slice(loc.length + 1);
        break;
      }
    }
    pathBotHits.set(normalized, (pathBotHits.get(normalized) || 0) + 1);
  }
  const auditItems = [];
  const catalog = [];
  for (const prod of activeProducts) {
    if (!prod.slug) continue;
    const url = `/products/${prod.slug}`;
    if (!isPublicRoute(url)) continue;
    const meta = parseMetaObject(prod.metaData);
    const tldr = typeof meta.tldr === "string" ? meta.tldr.trim() : "";
    const specs = normalizeGeoKeySpecs(meta.keySpecs);
    const faqs = normalizeGeoFaqs(meta.faqs);
    const links = normalizeGeoRelatedLinks(meta.relatedLinks);
    const report = evaluateGeoSeoReadiness({
      title: prod.name,
      slug: prod.slug,
      description: prod.description,
      body: prod.content,
      tldr,
      keySpecs: specs,
      faqs,
      relatedLinks: links
    });
    const missing = [];
    if (!tldr) missing.push("TL;DR");
    if (specs.length < 2) missing.push("KeySpecs");
    if (faqs.length < 2) missing.push("FAQ");
    if (links.length === 0) missing.push("Links");
    const missingLocales = [];
    for (const loc of secondaryLocales) {
      const trans = (_b = meta.translations) == null ? void 0 : _b[loc];
      if (!trans || !trans.name && !trans.description && !trans.tldr) {
        missingLocales.push(loc);
      }
    }
    auditItems.push({
      id: prod.id,
      entityType: "product",
      title: prod.name,
      slug: prod.slug,
      url,
      mdUrl: `${url}.md`,
      score: report.score,
      grade: report.grade,
      aiBotHits: pathBotHits.get(url) || 0,
      hasTldr: Boolean(tldr),
      specsCount: specs.length,
      faqsCount: faqs.length,
      linksCount: links.length,
      missing,
      missingLocales
    });
    catalog.push({
      id: prod.id,
      entityType: "product",
      title: prod.name,
      slug: prod.slug,
      url,
      price: `${baseCurrency} ${(_c = prod.price) != null ? _c : 0}`
    });
  }
  for (const post of activePosts) {
    if (!post.slug || isPostFrozen(post)) continue;
    const url = `/blog/${post.slug}`;
    if (!isPublicRoute(url)) continue;
    const meta = parseMetaObject(post.metaData);
    const tldr = typeof meta.tldr === "string" ? meta.tldr.trim() : "";
    const specs = normalizeGeoKeySpecs(meta.keySpecs);
    const faqs = normalizeGeoFaqs(meta.faqs);
    const links = normalizeGeoRelatedLinks(meta.relatedLinks);
    const report = evaluateGeoSeoReadiness({
      title: post.title,
      slug: post.slug,
      description: post.description,
      body: post.content,
      tldr,
      keySpecs: specs,
      faqs,
      relatedLinks: links
    });
    const missing = [];
    if (!tldr) missing.push("TL;DR");
    if (specs.length < 2) missing.push("KeySpecs");
    if (faqs.length < 2) missing.push("FAQ");
    if (links.length === 0) missing.push("Links");
    auditItems.push({
      id: post.id,
      entityType: "post",
      title: post.title,
      slug: post.slug,
      url,
      mdUrl: `${url}.md`,
      score: report.score,
      grade: report.grade,
      aiBotHits: pathBotHits.get(url) || 0,
      hasTldr: Boolean(tldr),
      specsCount: specs.length,
      faqsCount: faqs.length,
      linksCount: links.length,
      missing,
      missingLocales: []
    });
    catalog.push({
      id: post.id,
      entityType: "post",
      title: post.title,
      slug: post.slug,
      url
    });
  }
  auditItems.sort((a, b) => {
    const aNeedsFix = a.score < 85 ? 1 : 0;
    const bNeedsFix = b.score < 85 ? 1 : 0;
    if (aNeedsFix !== bNeedsFix) return bNeedsFix - aNeedsFix;
    if (a.aiBotHits !== b.aiBotHits) return b.aiBotHits - a.aiBotHits;
    return a.score - b.score;
  });
  const totalEntities = auditItems.length;
  const gradeACount = auditItems.filter((i) => i.grade === "A").length;
  const needsOptimizationCount = auditItems.filter((i) => i.missing.length > 0 || i.score < 85).length;
  const uncrawledCount = auditItems.filter((i) => i.aiBotHits === 0).length;
  const averageScore = totalEntities > 0 ? Math.round(auditItems.reduce((sum, i) => sum + i.score, 0) / totalEntities) : 100;
  const insights = [];
  if (needsOptimizationCount > 0) {
    insights.push({
      id: "missing_geo_citations",
      severity: "high",
      titleZh: `\u53D1\u73B0 ${needsOptimizationCount} \u4E2A\u5728\u552E\u5546\u54C1/\u535A\u5BA2\u7F3A\u5C11 GEO \u9AD8\u5BC6\u5EA6\u5F15\u8BED\u6216\u53CC\u5411\u5185\u94FE`,
      titleEn: `${needsOptimizationCount} active products/posts are missing structured GEO citations or internal links`,
      descZh: "\u7F3A\u5C11 TL;DR\u3001KeySpecs \u53C2\u6570\u8868\u3001FAQ \u95EE\u7B54\u5BF9\u6216\u5173\u8054\u5546\u54C1\u5185\u94FE\u4F1A\u964D\u4F4E\u5927\u6A21\u578B\u5F15\u7528\u7387\u4E0E JSON-LD \u5BCC\u7ED3\u679C\u8986\u76D6\u3002\u70B9\u51FB\u53F3\u4FA7\u6309\u94AE\u53EF\u4E00\u952E\u6839\u636E\u6B63\u6587\u4E0E\u5546\u54C1\u5E93\u81EA\u52A8\u63D0\u70BC\u8865\u9F50\u3002",
      descEn: "Missing TL;DR, KeySpecs, FAQs, or bidirectional links reduces LLM citation density and JSON-LD coverage. Click to auto-generate and link across all items.",
      actionType: "batch_autofill",
      affectedCount: needsOptimizationCount
    });
  }
  const crawledPostsWithoutProductLinks = auditItems.filter(
    (i) => i.entityType === "post" && i.aiBotHits > 0 && i.linksCount === 0
  );
  if (crawledPostsWithoutProductLinks.length > 0) {
    insights.push({
      id: "crawled_posts_missing_links",
      severity: "high",
      titleZh: `${crawledPostsWithoutProductLinks.length} \u7BC7\u5DF2\u88AB AI \u722C\u866B\u6293\u53D6\u7684\u70ED\u95E8\u6587\u7AE0\u5C1A\u672A\u6302\u8F7D\u5173\u8054\u5546\u54C1`,
      titleEn: `${crawledPostsWithoutProductLinks.length} AI-crawled blog posts have no linked products`,
      descZh: "\u8FD9\u4E9B\u6587\u7AE0\u5DF2\u88AB AI \u641C\u7D22\u5F15\u64CE\u6536\u5F55\uFF0C\u4F46\u672B\u5C3E\u7F3A\u5C11\u5173\u8054\u5546\u54C1\u4E0E\u4EF7\u683C\u5185\u94FE\uFF0C\u9519\u5931\u4E86 AI \u56DE\u7B54\u987A\u5E26\u63A8\u8350\u8D2D\u4E70\u94FE\u63A5\u7684\u8F6C\u5316\u673A\u4F1A\u3002",
      descEn: "These articles are already crawled by AI bots but lack product links in their Markdown mirror.",
      actionType: "batch_autofill",
      affectedCount: crawledPostsWithoutProductLinks.length
    });
  }
  const indexNowKey = String(settingsMap.get("indexnow_key") || "").trim();
  if (!indexNowKey) {
    insights.push({
      id: "missing_indexnow_key",
      severity: "medium",
      titleZh: "\u5C1A\u672A\u914D\u7F6E IndexNow \u5B9E\u65F6\u63A8\u9001\u5BC6\u94A5",
      titleEn: "IndexNow real-time indexing key is not configured",
      descZh: "\u914D\u7F6E IndexNow \u5BC6\u94A5\u540E\uFF0C\u6BCF\u6B21\u5546\u54C1\u4E0A\u67B6/\u6539\u4EF7\u6216\u81EA\u52A8\u4F18\u5316\u5B8C\u6210\u65F6\u5C06\u5B9E\u65F6\u901A\u77E5 Bing / ChatGPT Search / Perplexity\u3002",
      descEn: "Configure an IndexNow key above to automatically notify Bing, ChatGPT Search, and Yandex on every content update.",
      actionType: "configure_indexnow",
      affectedCount: totalEntities
    });
  } else if (uncrawledCount > 0) {
    insights.push({
      id: "uncrawled_orphan_pages",
      severity: "medium",
      titleZh: `\u6709 ${uncrawledCount} \u4E2A\u516C\u5F00\u5546\u54C1/\u6587\u7AE0\u8FD1 30 \u5929\u6682\u672A\u88AB AI \u722C\u866B\u6293\u53D6`,
      titleEn: `${uncrawledCount} public pages have 0 AI bot crawls in the last 30 days`,
      descZh: "\u53EF\u4E00\u952E\u5C06\u8FD9\u4E9B\u5B64\u5C9B\u9875\u9762\u7684 HTML \u4E0E .md \u955C\u50CF\u6279\u91CF\u8865\u63A8\u81F3 IndexNow\uFF0C\u52A0\u901F\u6536\u5F55\u3002",
      descEn: "Push these uncrawled HTML and .md mirror URLs to IndexNow to accelerate discovery.",
      actionType: "push_uncrawled",
      affectedCount: uncrawledCount
    });
  }
  if (recentPaymentFailures.length >= 5) {
    insights.push({
      id: "checkout_friction",
      severity: "info",
      titleZh: `\u8FD1 30 \u5929\u8BB0\u5F55\u5230 ${recentPaymentFailures.length} \u6B21\u652F\u4ED8\u53D1\u8D77\u5F02\u5E38`,
      titleEn: `${recentPaymentFailures.length} payment failures recorded in the last 30 days`,
      descZh: "\u5EFA\u8BAE\u7ED3\u5408\u4E0B\u65B9\u5730\u57DF\u8F6C\u5316\u62A5\u8868\u68C0\u67E5\u5BF9\u5E94\u56FD\u5BB6/\u5730\u533A\u7684\u63A8\u8350\u652F\u4ED8\u901A\u9053\u4E0E\u7ED3\u7B97\u5E01\u79CD\u914D\u7F6E\u3002",
      descEn: "Review your payment gateway configurations alongside the regional conversion table.",
      actionType: "none",
      affectedCount: recentPaymentFailures.length
    });
  }
  return {
    code: 0,
    data: {
      summary: {
        totalEntities,
        gradeACount,
        needsOptimizationCount,
        uncrawledCount,
        averageScore
      },
      insights,
      items: auditItems,
      catalog
    }
  };
});

export { seoAudit_get as default };
//# sourceMappingURL=seo-audit.get.mjs.map
