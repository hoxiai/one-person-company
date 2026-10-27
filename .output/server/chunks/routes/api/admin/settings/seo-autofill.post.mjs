import { d as defineEventHandler, r as readBody, b as db, p as products, aJ as posts, b1 as settings, bD as resolveServerSeoContext, bM as generateEntityGeoCitations, aM as notifyIndexNowEntityChange, aK as assertPostMutable, bF as normalizeGeoKeySpecs, bG as normalizeGeoFaqs, bH as normalizeGeoRelatedLinks, bJ as isPostFrozen, bN as submitIndexNowUrls, bK as classifySeoRoute, bO as localeSeoUrl, bL as seoRouteRegistry } from '../../../../nitro/nitro.mjs';
import { and, eq, desc } from 'drizzle-orm';
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
  if (typeof raw === "object" && !Array.isArray(raw)) return { ...raw };
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
const seoAutofill_post = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const body = await readBody(event).catch(() => ({}));
  const mode = String((body == null ? void 0 : body.mode) || "preview").trim();
  const [activeProducts, activePosts, settingRows, seoCtx] = await Promise.all([
    db.select().from(products).where(and(eq(products.isActive, true), eq(products.status, "active"))).orderBy(desc(products.id)).limit(200).catch(() => []),
    db.select().from(posts).where(and(eq(posts.isActive, true), eq(posts.type, "blog"))).orderBy(desc(posts.id)).limit(200).catch(() => []),
    db.select({
      key: settings.key,
      value: settings.value
    }).from(settings).catch(() => []),
    resolveServerSeoContext(event).catch(() => ({
      origin: "",
      theme: "",
      locales: [],
      defaultLocale: "en",
      seoOptions: {}
    }))
  ]);
  const settingsMap = new Map(settingRows.map((r) => [r.key, r.value]));
  const activeTheme = seoCtx.theme || String(settingsMap.get("active_theme") || "").trim();
  const isPublicRoute = (path) => classifySeoRoute(seoRouteRegistry, activeTheme, path).kind === "public";
  const baseCurrency = String(settingsMap.get("currency") || settingsMap.get("base_currency") || "USD").toUpperCase();
  const i18nEnabled = settingsMap.get("i18n_enabled") !== "false";
  const supportedLocales = i18nEnabled ? String(settingsMap.get("supported_locales") || "en,zh").split(",").map((s) => s.trim()).filter(Boolean) : ["en"];
  const defaultLocale = String(settingsMap.get("default_locale") || supportedLocales[0] || "en").trim();
  const publicProducts = activeProducts.filter((p) => Boolean(p.slug) && isPublicRoute(`/products/${p.slug}`));
  const publicPosts = activePosts.filter((p) => Boolean(p.slug) && isPublicRoute(`/blog/${p.slug}`));
  const catalog = [
    ...publicProducts.map((p) => ({
      id: p.id,
      entityType: "product",
      title: p.name,
      slug: p.slug,
      url: `/products/${p.slug}`,
      description: p.description || "",
      price: p.price,
      currency: baseCurrency,
      metaData: parseMetaObject(p.metaData)
    })),
    ...publicPosts.map((p) => ({
      id: p.id,
      entityType: "post",
      title: p.title,
      slug: p.slug,
      url: `/blog/${p.slug}`,
      description: p.description || "",
      locale: p.locale,
      metaData: parseMetaObject(p.metaData)
    }))
  ];
  if (mode === "preview") {
    const entityType = (body == null ? void 0 : body.entityType) === "post" ? "post" : "product";
    const overwrite = Boolean(body == null ? void 0 : body.overwrite);
    const rawMeta = parseMetaObject(body == null ? void 0 : body.metaData);
    const cleanMeta = overwrite ? { ...rawMeta, tldr: "", keySpecs: [], faqs: [], relatedLinks: [] } : rawMeta;
    const generated = generateEntityGeoCitations({
      entityType,
      title: String((body == null ? void 0 : body.title) || ""),
      slug: String((body == null ? void 0 : body.slug) || ""),
      description: String((body == null ? void 0 : body.description) || ""),
      content: String((body == null ? void 0 : body.content) || ""),
      price: (_a = body == null ? void 0 : body.price) != null ? _a : 0,
      currency: baseCurrency,
      productType: String((body == null ? void 0 : body.productType) || "basic"),
      metaData: cleanMeta,
      locale: String((body == null ? void 0 : body.locale) || defaultLocale)
    }, catalog);
    return {
      code: 0,
      data: generated
    };
  }
  const optimizeProductRow = async (prod, forceOverwrite = false) => {
    const meta = parseMetaObject(prod.metaData);
    const cleanMeta = forceOverwrite ? { ...meta, tldr: "", keySpecs: [], faqs: [], relatedLinks: [] } : meta;
    const primaryGenerated = generateEntityGeoCitations({
      entityType: "product",
      title: prod.name,
      slug: prod.slug,
      description: prod.description || "",
      content: prod.content || "",
      price: prod.price,
      currency: baseCurrency,
      productType: prod.type,
      metaData: cleanMeta,
      locale: defaultLocale
    }, catalog);
    meta.tldr = primaryGenerated.tldr;
    meta.keySpecs = primaryGenerated.keySpecs;
    meta.faqs = primaryGenerated.faqs;
    meta.relatedLinks = primaryGenerated.relatedLinks;
    if (!meta.translations || typeof meta.translations !== "object") {
      meta.translations = {};
    }
    for (const loc of supportedLocales) {
      if (loc === defaultLocale) continue;
      const trans = meta.translations[loc] && typeof meta.translations[loc] === "object" ? meta.translations[loc] : {};
      const locGenerated = generateEntityGeoCitations({
        entityType: "product",
        title: trans.name || prod.name,
        slug: prod.slug,
        description: trans.description || prod.description || "",
        content: trans.content || prod.content || "",
        price: prod.price,
        currency: baseCurrency,
        productType: prod.type,
        metaData: {
          ...meta,
          tldr: forceOverwrite ? "" : trans.tldr || "",
          keySpecs: forceOverwrite ? [] : trans.keySpecs || [],
          faqs: forceOverwrite ? [] : trans.faqs || [],
          relatedLinks: forceOverwrite ? [] : trans.relatedLinks || []
        },
        locale: loc
      }, catalog);
      trans.tldr = locGenerated.tldr;
      trans.keySpecs = locGenerated.keySpecs;
      trans.faqs = locGenerated.faqs;
      trans.relatedLinks = locGenerated.relatedLinks;
      meta.translations[loc] = trans;
    }
    await db.update(products).set({ metaData: meta }).where(eq(products.id, prod.id));
    return primaryGenerated;
  };
  const optimizePostRow = async (post, forceOverwrite = false) => {
    assertPostMutable(post, defaultLocale);
    const meta = parseMetaObject(post.metaData);
    const cleanMeta = forceOverwrite ? { ...meta, tldr: "", keySpecs: [], faqs: [], relatedLinks: [] } : meta;
    const postLocale = post.locale || defaultLocale;
    const generated = generateEntityGeoCitations({
      entityType: "post",
      title: post.title,
      slug: post.slug,
      description: post.description || "",
      content: post.content || "",
      metaData: cleanMeta,
      locale: postLocale
    }, catalog);
    meta.tldr = generated.tldr;
    meta.keySpecs = generated.keySpecs;
    meta.faqs = generated.faqs;
    meta.relatedLinks = generated.relatedLinks;
    await db.update(posts).set({
      metaData: meta,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(posts.id, post.id));
    return generated;
  };
  const ensureBidirectionalBacklinks = async (sourceUrl, sourceTitle, sourceType, sourcePrice, targetLinks) => {
    if (!isPublicRoute(sourceUrl)) return;
    for (const link of targetLinks) {
      const targetUrl = String(link.url || "").trim();
      if (!isPublicRoute(targetUrl)) continue;
      if (targetUrl.startsWith("/products/")) {
        const targetSlug = targetUrl.slice("/products/".length);
        const targetProd = publicProducts.find((p) => p.slug === targetSlug);
        if (!targetProd) continue;
        const targetMeta = parseMetaObject(targetProd.metaData);
        const existing = normalizeGeoRelatedLinks(targetMeta.relatedLinks);
        if (!existing.some((item) => item.url === sourceUrl)) {
          targetMeta.relatedLinks = [
            ...existing,
            {
              title: sourceTitle,
              url: sourceUrl,
              type: sourceType,
              ...sourcePrice ? { price: sourcePrice } : {}
            }
          ].slice(0, 6);
          targetProd.metaData = targetMeta;
          await db.update(products).set({ metaData: targetMeta }).where(eq(products.id, targetProd.id));
        }
      } else if (targetUrl.startsWith("/blog/")) {
        const targetSlug = targetUrl.slice("/blog/".length);
        const targetPost = publicPosts.find((p) => p.slug === targetSlug);
        if (!targetPost || isPostFrozen(targetPost)) continue;
        const targetMeta = parseMetaObject(targetPost.metaData);
        const existing = normalizeGeoRelatedLinks(targetMeta.relatedLinks);
        if (!existing.some((item) => item.url === sourceUrl)) {
          targetMeta.relatedLinks = [
            ...existing,
            {
              title: sourceTitle,
              url: sourceUrl,
              type: sourceType,
              ...sourcePrice ? { price: sourcePrice } : {}
            }
          ].slice(0, 6);
          targetPost.metaData = targetMeta;
          await db.update(posts).set({ metaData: targetMeta, updatedAt: /* @__PURE__ */ new Date() }).where(eq(posts.id, targetPost.id));
        }
      }
    }
  };
  if (mode === "single") {
    const entityType = (body == null ? void 0 : body.entityType) === "post" ? "post" : "product";
    const entityId = Number(body == null ? void 0 : body.id);
    if (!entityId) {
      return { code: 1, message: "Missing entity id" };
    }
    if (entityType === "product") {
      const prod = publicProducts.find((p) => p.id === entityId);
      if (!prod) return { code: 1, message: "Product not found or route is suppressed by active theme" };
      const generated = await optimizeProductRow(prod, Boolean(body == null ? void 0 : body.overwrite));
      await ensureBidirectionalBacklinks(
        `/products/${prod.slug}`,
        prod.name,
        "product",
        `${baseCurrency} ${(_b = prod.price) != null ? _b : 0}`,
        generated.relatedLinks
      );
      notifyIndexNowEntityChange(event, { entityType: "product", slug: prod.slug });
      return {
        code: 0,
        message: `\u5DF2\u4E3A\u5546\u54C1\u300C${prod.name}\u300D\u81EA\u52A8\u8865\u9F50 GEO \u7ED3\u6784\u5316\u5F15\u8BED\u4E0E\u53CC\u5411\u5185\u94FE`,
        data: generated
      };
    } else {
      const post = publicPosts.find((p) => p.id === entityId);
      if (!post) return { code: 1, message: "Post not found or route is suppressed by active theme" };
      assertPostMutable(post, defaultLocale);
      const generated = await optimizePostRow(post, Boolean(body == null ? void 0 : body.overwrite));
      await ensureBidirectionalBacklinks(
        `/blog/${post.slug}`,
        post.title,
        "blog",
        void 0,
        generated.relatedLinks
      );
      notifyIndexNowEntityChange(event, { entityType: "post", slug: post.slug, locale: post.locale });
      return {
        code: 0,
        message: `\u5DF2\u4E3A\u6587\u7AE0\u300C${post.title}\u300D\u81EA\u52A8\u8865\u9F50 GEO \u7ED3\u6784\u5316\u5F15\u8BED\u4E0E\u53CC\u5411\u5185\u94FE`,
        data: generated
      };
    }
  }
  if (mode === "batch") {
    let updatedProductsCount = 0;
    let updatedPostsCount = 0;
    const touchedUrls = [];
    const effectiveDefaultLocale = seoCtx.defaultLocale || defaultLocale;
    const localeList = seoCtx.locales.length ? seoCtx.locales : supportedLocales.map((code) => ({ code, language: code }));
    const pushLocalizedEntityUrls = (basePath, boundLocale) => {
      if (!seoCtx.origin || !isPublicRoute(basePath)) return;
      const cleanBound = boundLocale ? String(boundLocale).trim() : "";
      const targetLocales = cleanBound ? localeList.filter((l) => l.code.toLowerCase() === cleanBound.toLowerCase()) : localeList;
      for (const loc of targetLocales.length ? targetLocales : [{ code: effectiveDefaultLocale }]) {
        const canonical = localeSeoUrl(basePath, loc.code, seoCtx.origin, effectiveDefaultLocale, seoCtx.seoOptions);
        if (new URL(canonical).origin === seoCtx.origin) {
          touchedUrls.push(canonical, `${canonical}.md`);
        }
      }
    };
    for (const prod of publicProducts) {
      if (!prod.slug) continue;
      const meta = parseMetaObject(prod.metaData);
      const hasTldr = Boolean(typeof meta.tldr === "string" && meta.tldr.trim());
      const hasSpecs = normalizeGeoKeySpecs(meta.keySpecs).length >= 2;
      const hasFaqs = normalizeGeoFaqs(meta.faqs).length >= 2;
      const hasLinks = normalizeGeoRelatedLinks(meta.relatedLinks).length >= 1;
      if (hasTldr && hasSpecs && hasFaqs && hasLinks && !(body == null ? void 0 : body.overwrite)) continue;
      const generated = await optimizeProductRow(prod, Boolean(body == null ? void 0 : body.overwrite));
      await ensureBidirectionalBacklinks(
        `/products/${prod.slug}`,
        prod.name,
        "product",
        `${baseCurrency} ${(_c = prod.price) != null ? _c : 0}`,
        generated.relatedLinks
      );
      updatedProductsCount += 1;
      pushLocalizedEntityUrls(`/products/${prod.slug}`);
    }
    for (const post of publicPosts) {
      if (!post.slug || isPostFrozen(post)) continue;
      const meta = parseMetaObject(post.metaData);
      const hasTldr = Boolean(typeof meta.tldr === "string" && meta.tldr.trim());
      const hasSpecs = normalizeGeoKeySpecs(meta.keySpecs).length >= 2;
      const hasFaqs = normalizeGeoFaqs(meta.faqs).length >= 2;
      const hasLinks = normalizeGeoRelatedLinks(meta.relatedLinks).length >= 1;
      if (hasTldr && hasSpecs && hasFaqs && hasLinks && !(body == null ? void 0 : body.overwrite)) continue;
      const generated = await optimizePostRow(post, Boolean(body == null ? void 0 : body.overwrite));
      await ensureBidirectionalBacklinks(
        `/blog/${post.slug}`,
        post.title,
        "blog",
        void 0,
        generated.relatedLinks
      );
      updatedPostsCount += 1;
      pushLocalizedEntityUrls(`/blog/${post.slug}`, post.locale);
    }
    if (touchedUrls.length > 0 && seoCtx.origin) {
      touchedUrls.push(`${seoCtx.origin}/llms.txt`, `${seoCtx.origin}/llms-full.txt`);
      void submitIndexNowUrls(event, touchedUrls, { reason: "batch_geo_autofill" }).catch(() => {
      });
    }
    return {
      code: 0,
      message: `\u6279\u91CF\u4E3B\u52A8\u4F18\u5316\u5B8C\u6210\uFF1A\u5DF2\u8865\u9F50 ${updatedProductsCount} \u4E2A\u5546\u54C1\u3001${updatedPostsCount} \u7BC7\u6587\u7AE0\u7684 GEO \u5F15\u8BED\u4E0E\u53CC\u5411\u5185\u94FE`,
      data: {
        updatedProductsCount,
        updatedPostsCount,
        pushedUrlsCount: touchedUrls.length
      }
    };
  }
  return {
    code: 1,
    message: `Unsupported mode: ${mode}`
  };
});

export { seoAutofill_post as default };
//# sourceMappingURL=seo-autofill.post.mjs.map
