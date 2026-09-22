import { d as defineEventHandler, c as getRequestLocale, g as getQuery, e as createError, cc as getAIGatewayUrl, r as readBody } from '../../../nitro/nitro.mjs';
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

const gateway = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const query = getQuery(event);
  const path = query.path;
  if (!path) {
    throw createError({ statusCode: 400, statusMessage: locale === "zh" ? "\u7F3A\u5C11 path \u53C2\u6570" : "Missing path parameter" });
  }
  const apiKey = event.node.req.headers["x-api-key"];
  if (!apiKey) {
    throw createError({ statusCode: 401, statusMessage: locale === "zh" ? "\u7F3A\u5C11 API Key\uFF08x-api-key \u8BF7\u6C42\u5934\uFF09" : "Missing API key (x-api-key header)" });
  }
  const gatewayUrl = await getAIGatewayUrl();
  let targetUrl;
  try {
    const base = new URL(gatewayUrl);
    const resolved = new URL(path.startsWith("/") ? path : `/${path}`, base);
    if (resolved.protocol !== base.protocol || resolved.host !== base.host) {
      throw new Error("cross-host");
    }
    targetUrl = resolved.toString();
  } catch {
    throw createError({ statusCode: 400, statusMessage: locale === "zh" ? "\u65E0\u6548\u7684 path \u53C2\u6570" : "Invalid path parameter" });
  }
  const method = event.node.req.method || "POST";
  let body;
  if (["POST", "PUT", "PATCH"].includes(method)) {
    body = await readBody(event).catch(() => void 0);
  }
  const response = await fetch(targetUrl, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: body ? JSON.stringify(body) : void 0,
    signal: AbortSignal.timeout(12e4)
  });
  const text = await response.text();
  if (!response.ok) {
    let errorDetail = text.slice(0, 300);
    try {
      const parsed = JSON.parse(errorDetail);
      errorDetail = ((_a = parsed.error) == null ? void 0 : _a.message) || parsed.message || errorDetail;
    } catch {
    }
    throw createError({
      statusCode: 502,
      statusMessage: locale === "zh" ? `\u7F51\u5173\u4E0A\u6E38\u9519\u8BEF\uFF1A${errorDetail}` : `Gateway upstream error: ${errorDetail}`
    });
  }
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
});

export { gateway as default };
