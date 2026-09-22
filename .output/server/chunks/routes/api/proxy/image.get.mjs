import { d as defineEventHandler, c as getRequestLocale, g as getQuery, cd as normalizeImageProxyUrl, bR as getHeader, ce as setResponseStatus, cf as setResponseHeader, cg as getImageProxyReferer, e as createError } from '../../../nitro/nitro.mjs';
import { createHash } from 'node:crypto';
import 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
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

const MAX_CACHE_ENTRIES = 500;
const CACHE_TTL_MS = 24 * 60 * 60 * 1e3;
const imageMemoryCache = /* @__PURE__ */ new Map();
const getFromCache = (key) => {
  const entry = imageMemoryCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    imageMemoryCache.delete(key);
    return null;
  }
  imageMemoryCache.delete(key);
  imageMemoryCache.set(key, entry);
  return entry;
};
const setToCache = (key, entry) => {
  if (imageMemoryCache.size >= MAX_CACHE_ENTRIES) {
    const oldestKey = imageMemoryCache.keys().next().value;
    if (oldestKey) imageMemoryCache.delete(oldestKey);
  }
  imageMemoryCache.set(key, entry);
};
const image_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const query = getQuery(event);
  const targetUrl = normalizeImageProxyUrl(query.url);
  const cacheKey = targetUrl.toString();
  const cached = getFromCache(cacheKey);
  if (cached) {
    const clientEtag2 = getHeader(event, "if-none-match");
    if (clientEtag2 && (clientEtag2 === cached.etag || clientEtag2 === `W/${cached.etag}`)) {
      setResponseStatus(event, 304);
      return null;
    }
    setResponseHeader(event, "content-type", cached.contentType);
    setResponseHeader(event, "cache-control", "public, max-age=31536000, s-maxage=31536000, immutable");
    setResponseHeader(event, "access-control-allow-origin", "*");
    setResponseHeader(event, "cross-origin-resource-policy", "cross-origin");
    setResponseHeader(event, "x-robots-tag", "noindex");
    setResponseHeader(event, "x-image-proxy-cache", "HIT");
    setResponseHeader(event, "etag", cached.etag);
    if (cached.lastModified) setResponseHeader(event, "last-modified", cached.lastModified);
    return cached.buffer;
  }
  const upstream = await fetch(cacheKey, {
    headers: {
      Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
      Referer: getImageProxyReferer(targetUrl),
      "User-Agent": "APay-ImageProxy/1.0"
    },
    signal: AbortSignal.timeout(2e4)
  });
  if (!upstream.ok) {
    throw createError({
      statusCode: upstream.status === 404 ? 404 : 502,
      statusMessage: locale === "zh" ? `\u4E0A\u6E38\u56FE\u7247\u8BF7\u6C42\u5931\u8D25\uFF08${upstream.status}\uFF09` : `Upstream image request failed (${upstream.status})`
    });
  }
  const contentType = upstream.headers.get("content-type") || "image/jpeg";
  const arrayBuffer = await upstream.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const digest = createHash("md5").update(buffer).digest("hex");
  const etag = `"${digest}"`;
  const lastModified = upstream.headers.get("last-modified") || (/* @__PURE__ */ new Date()).toUTCString();
  setToCache(cacheKey, {
    buffer,
    contentType,
    etag,
    lastModified,
    expiresAt: Date.now() + CACHE_TTL_MS
  });
  const clientEtag = getHeader(event, "if-none-match");
  if (clientEtag && (clientEtag === etag || clientEtag === `W/${etag}`)) {
    setResponseStatus(event, 304);
    return null;
  }
  setResponseHeader(event, "content-type", contentType);
  setResponseHeader(event, "cache-control", "public, max-age=31536000, s-maxage=31536000, immutable");
  setResponseHeader(event, "access-control-allow-origin", "*");
  setResponseHeader(event, "cross-origin-resource-policy", "cross-origin");
  setResponseHeader(event, "x-robots-tag", "noindex");
  setResponseHeader(event, "x-image-proxy-cache", "MISS");
  setResponseHeader(event, "etag", etag);
  setResponseHeader(event, "last-modified", lastModified);
  return buffer;
});

export { image_get as default };
