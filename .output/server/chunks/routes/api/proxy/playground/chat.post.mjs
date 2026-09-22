import { d as defineEventHandler, c as getRequestLocale, aO as getUserSession, e as createError, r as readBody, cc as getAIGatewayUrl, cf as setResponseHeader } from '../../../../nitro/nitro.mjs';
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

const chat_post = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const session = await getUserSession(event).catch(() => null);
  if (!(session == null ? void 0 : session.user)) {
    throw createError({ statusCode: 401, statusMessage: locale === "zh" ? "\u672A\u767B\u5F55" : "Unauthorized" });
  }
  const body = await readBody(event);
  const { apiKey, model, messages } = body || {};
  if (!apiKey || !model || !messages) {
    throw createError({
      statusCode: 400,
      statusMessage: locale === "zh" ? "\u8BF7\u6C42\u53C2\u6570\u9519\u8BEF\uFF1A\u7F3A\u5C11 apiKey\u3001model \u6216 messages" : "Bad Request: missing apiKey, model, or messages"
    });
  }
  const baseUrl = await getAIGatewayUrl();
  const targetUrl = `${baseUrl}/v1/chat/completions`;
  const upstream = await fetch(targetUrl, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ model, messages, stream: true }),
    signal: AbortSignal.timeout(12e4)
  });
  if (!upstream.ok) {
    let errMsg = `HTTP ${upstream.status}`;
    try {
      const errBody = await upstream.json();
      errMsg = ((_a = errBody == null ? void 0 : errBody.error) == null ? void 0 : _a.message) || (errBody == null ? void 0 : errBody.message) || errMsg;
    } catch {
    }
    throw createError({ statusCode: upstream.status, statusMessage: errMsg });
  }
  const contentType = upstream.headers.get("content-type") || "";
  if (contentType.includes("text/event-stream") && upstream.body) {
    setResponseHeader(event, "content-type", "text/event-stream");
    setResponseHeader(event, "cache-control", "no-cache");
    setResponseHeader(event, "x-accel-buffering", "no");
    setResponseHeader(event, "connection", "keep-alive");
    return upstream.body;
  }
  const data = await upstream.json();
  return data;
});

export { chat_post as default };
