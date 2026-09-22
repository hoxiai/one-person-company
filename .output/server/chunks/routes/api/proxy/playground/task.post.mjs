import { d as defineEventHandler, c as getRequestLocale, aO as getUserSession, e as createError, r as readBody, cc as getAIGatewayUrl } from '../../../../nitro/nitro.mjs';
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

const task_post = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const session = await getUserSession(event).catch(() => null);
  if (!(session == null ? void 0 : session.user)) {
    throw createError({ statusCode: 401, statusMessage: locale === "zh" ? "\u672A\u767B\u5F55" : "Unauthorized" });
  }
  const body = await readBody(event);
  const { apiKey, taskId } = body || {};
  if (!apiKey || !taskId) {
    throw createError({ statusCode: 400, statusMessage: locale === "zh" ? "\u8BF7\u6C42\u53C2\u6570\u9519\u8BEF\uFF1A\u7F3A\u5C11 apiKey \u6216 taskId" : "Bad Request: missing apiKey or taskId" });
  }
  const baseUrl = await getAIGatewayUrl();
  const upstream = await fetch(`${baseUrl}/v1/tasks/${encodeURIComponent(taskId)}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${apiKey}` },
    signal: AbortSignal.timeout(3e4)
  });
  const text = await upstream.text();
  if (!upstream.ok) {
    let msg = `HTTP ${upstream.status}`;
    try {
      const j = JSON.parse(text);
      msg = ((_a = j == null ? void 0 : j.error) == null ? void 0 : _a.message) || (j == null ? void 0 : j.message) || msg;
    } catch {
    }
    throw createError({ statusCode: upstream.status, statusMessage: msg.slice(0, 300) });
  }
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
});

export { task_post as default };
