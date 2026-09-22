import { cT as getListingModelSettingsByUser, cU as getQingpuAINodeBaseUrl, cV as normalizeAinodeCrawl1688Product, cW as extract1688OfferId } from '../nitro/nitro.mjs';
import { registerCollectProvider } from './registry.mjs';
import 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:os';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const AINODE_CRAWL_PATH = "/ai/crawl";
const REQUEST_TIMEOUT_MS = 2e4;
const asRecord = (value) => value && typeof value === "object" && !Array.isArray(value) ? value : null;
const cleanText = (value) => (typeof value === "string" ? value : "").replace(/^[\s`'"]+|[\s`'"]+$/g, "").trim();
const cleanScalarText = (value) => typeof value === "number" || typeof value === "boolean" ? String(value) : cleanText(value);
const resolveAinodeCrawlConfig = async (userId) => {
  const [modelSettings, baseUrl] = await Promise.all([
    getListingModelSettingsByUser(userId),
    getQingpuAINodeBaseUrl()
  ]);
  const resolved = {
    baseUrl,
    apiKey: cleanText(modelSettings == null ? void 0 : modelSettings.generalModelApiKey)
  };
  return resolved;
};
const build1688DetailUrl = (numIid) => `https://detail.1688.com/offer/${encodeURIComponent(numIid)}.html`;
const callAinodeCrawl1688 = async (userId, numIid) => {
  const { baseUrl, apiKey } = await resolveAinodeCrawlConfig(userId);
  if (!apiKey) {
    return { data: null, error: "AINode missing api key" };
  }
  const url = `${baseUrl}${AINODE_CRAWL_PATH}`;
  const payload = {
    model: "collector-1688",
    channel: "1688",
    url: build1688DetailUrl(numIid)
  };
  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
    });
  } catch (err) {
    const kind = err instanceof Error && err.name === "TimeoutError" ? `timeout ${REQUEST_TIMEOUT_MS}ms` : `transport_error ${cleanText(err instanceof Error ? err.message : "") || "unknown"}`;
    return { data: null, error: `AINode ${kind}` };
  }
  let data;
  try {
    data = await response.json();
  } catch {
    return { data: null, error: `AINode invalid json (http ${response.status})` };
  }
  if (!response.ok) {
    const errObj = asRecord(data == null ? void 0 : data.error);
    const message = cleanText(data == null ? void 0 : data.error) || cleanText(errObj == null ? void 0 : errObj.message) || cleanText(data == null ? void 0 : data.message);
    const code = cleanText(errObj == null ? void 0 : errObj.code) || cleanText(errObj == null ? void 0 : errObj.type);
    const detail = [`http ${response.status}`, code, message].filter(Boolean).join(" ");
    return { data: null, error: `AINode ${detail}` };
  }
  const crawlData = asRecord(data == null ? void 0 : data.data);
  if (!crawlData) {
    return { data: null, error: `AINode empty data (keys: ${Object.keys(data || {}).join(",") || "none"})` };
  }
  return { data: crawlData, error: null };
};
const sanitizeAinodeCrawlTitle = (rawTitle, sourceProductId) => {
  let text = cleanScalarText(rawTitle);
  text = text.replace(/[\u0000-\u001F\u007F-\u009F\u200B-\u200D\uFEFF]/g, "");
  text = text.replace(/\s+/g, " ").trim();
  if (!text) {
    return sourceProductId ? `\u5546\u54C1_${sourceProductId}` : "\u5546\u54C1";
  }
  if (/^\d+$/.test(text)) {
    return `\u5546\u54C1 ${text}`;
  }
  if (/^[\p{P}\p{S}]+$/u.test(text)) {
    return sourceProductId ? `\u5546\u54C1_${sourceProductId}` : "\u5546\u54C1";
  }
  return text;
};
const sanitizeAinodeCrawlItem = (item, sourceProductId) => {
  var _a, _b, _c, _d, _e, _f;
  if (!item || typeof item !== "object") return item;
  const raw = asRecord(item.raw) || {};
  const product = asRecord(raw.product) || {};
  const resolvedOriginId = cleanScalarText((_c = (_b = (_a = item.origin_id) != null ? _a : item.sourceProductId) != null ? _b : product.sourceProductId) != null ? _c : sourceProductId);
  const cleanTitle = sanitizeAinodeCrawlTitle((_d = item.title) != null ? _d : product.title, resolvedOriginId);
  item.title = cleanTitle;
  if (product.title !== void 0) {
    product.title = cleanTitle;
  }
  const skus = Array.isArray(item.skus) ? item.skus : [];
  const itemPackaging = item.packaging;
  const basePrice = Number((_e = item.price) != null ? _e : product.price) || 1;
  const baseStock = Number((_f = item.stock) != null ? _f : product.stock) || 999;
  if (skus.length === 0) {
    item.skus = [
      {
        sku_id: resolvedOriginId || "default",
        skuId: resolvedOriginId || "default",
        price: basePrice,
        stock: baseStock,
        spec_combination: "\u9ED8\u8BA4:\u5355\u54C1",
        specCombination: "\u9ED8\u8BA4:\u5355\u54C1",
        packaging: itemPackaging
      }
    ];
  } else {
    item.skus = skus.map((sku, idx) => {
      var _a2, _b2;
      const skuRecord = asRecord(sku) || {};
      const skuId = cleanScalarText((_a2 = skuRecord.sku_id) != null ? _a2 : skuRecord.skuId) || `${resolvedOriginId || "sku"}_${idx}`;
      const skuPrice = Number(skuRecord.price) > 0 ? Number(skuRecord.price) : basePrice;
      const skuStock = Number(skuRecord.stock) > 0 ? Number(skuRecord.stock) : baseStock;
      const specComb = cleanScalarText((_b2 = skuRecord.spec_combination) != null ? _b2 : skuRecord.specCombination) || `\u89C4\u683C:${idx + 1}`;
      return {
        ...skuRecord,
        sku_id: skuId,
        skuId,
        price: skuPrice,
        stock: skuStock,
        spec_combination: specComb,
        specCombination: specComb,
        packaging: skuRecord.packaging || itemPackaging
      };
    });
  }
  const cleanUrl = (u) => {
    if (typeof u !== "string") return "";
    const trimmed = u.trim();
    if (trimmed.startsWith("//")) return `https:${trimmed}`;
    return /^https?:\/\//.test(trimmed) ? trimmed : "";
  };
  const images = (Array.isArray(item.images) ? item.images : []).map(cleanUrl).filter(Boolean);
  const seenImages = /* @__PURE__ */ new Set();
  const dedupedImages = [];
  for (const img of images) {
    if (!seenImages.has(img)) {
      seenImages.add(img);
      dedupedImages.push(img);
    }
  }
  const mainImage = cleanUrl(item.main_image) || dedupedImages[0] || "";
  if (mainImage && !seenImages.has(mainImage)) {
    dedupedImages.unshift(mainImage);
    seenImages.add(mainImage);
  }
  item.images = dedupedImages;
  item.main_image = mainImage || dedupedImages[0] || "";
  raw.product = product;
  item.raw = raw;
  return item;
};
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const isWarmupError = (error) => {
  const text = (error || "").toLowerCase();
  return text.includes("timeout") || text.includes("transport_error") || text.includes("empty data") || text.includes("temporarily unavailable") || text.includes("bad gateway") || text.includes("http 5");
};
const fetchAinodeCrawl1688Item = async (userId, numIid) => {
  var _a, _b;
  const retryDelaysMs = [2e3, 6e3];
  let lastError = null;
  for (let attempt = 0; attempt <= retryDelaysMs.length; attempt++) {
    const retryDelayMs = attempt > 0 ? (_a = retryDelaysMs[attempt - 1]) != null ? _a : 0 : 0;
    if (retryDelayMs > 0) await sleep(retryDelayMs);
    const { data, error } = await callAinodeCrawl1688(userId, numIid);
    if (error) {
      lastError = error;
      if (isWarmupError(error)) continue;
      return { item: null, error };
    }
    const raw = asRecord(data == null ? void 0 : data.raw);
    const product = asRecord(raw == null ? void 0 : raw.product);
    const title = cleanScalarText((_b = data == null ? void 0 : data.title) != null ? _b : product == null ? void 0 : product.title);
    if (!title) {
      lastError = "AINode empty item";
      continue;
    }
    const sanitized = sanitizeAinodeCrawlItem(data, numIid);
    return { item: sanitized, error: null };
  }
  return { item: null, error: `${lastError || "AINode crawl failed"} (warmup)` };
};

registerCollectProvider({
  id: "ainode-crawl-1688",
  platform: "1688",
  matchUrl: (url) => extract1688OfferId(url),
  async collect({ userId, url, sourceProductId, productId }) {
    var _a, _b;
    const { item, error } = await fetchAinodeCrawl1688Item(userId, sourceProductId);
    if (!item || error) return { ok: false, error: error || "empty item" };
    const sanitizedItem = sanitizeAinodeCrawlItem(item, sourceProductId);
    const canonical = normalizeAinodeCrawl1688Product(sanitizedItem, url, { productId });
    const mainImage = ((_a = canonical.media.images.find((image) => image.role === "main")) == null ? void 0 : _a.originalUrl) || ((_b = canonical.media.images[0]) == null ? void 0 : _b.originalUrl) || null;
    const title = canonical.basic.title || `\u5546\u54C1_${sourceProductId}`;
    const input = {
      productId,
      sourcePlatform: "1688",
      sourceUrl: url,
      sourceProductId,
      title,
      mainImageUrl: mainImage,
      skuCount: Math.max(1, canonical.variants.length),
      preprocessStatus: "pending",
      canonical,
      schemaVersion: 1,
      clientUpdatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return { ok: true, input };
  }
});
