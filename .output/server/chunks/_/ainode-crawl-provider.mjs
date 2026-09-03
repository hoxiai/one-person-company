import { cm as getListingModelSettingsByUser, cn as getQingpuAINodeBaseUrl, co as normalizeAinodeCrawl1688Product, cp as extract1688OfferId } from '../nitro/nitro.mjs';
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
import 'http';
import 'https';
import 'zlib';
import 'stream';
import 'buffer';
import 'util';
import 'url';
import 'net';
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
    return { item: data, error: null };
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
    const canonical = normalizeAinodeCrawl1688Product(item, url, { productId });
    const mainImage = ((_a = canonical.media.images.find((image) => image.role === "main")) == null ? void 0 : _a.originalUrl) || ((_b = canonical.media.images[0]) == null ? void 0 : _b.originalUrl) || null;
    const input = {
      productId,
      sourcePlatform: "1688",
      sourceUrl: url,
      sourceProductId,
      title: canonical.basic.title,
      mainImageUrl: mainImage,
      skuCount: canonical.variants.length,
      preprocessStatus: "pending",
      canonical,
      schemaVersion: 1,
      clientUpdatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return { ok: true, input };
  }
});
