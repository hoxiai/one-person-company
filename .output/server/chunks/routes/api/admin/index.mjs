import { d as defineEventHandler, c as getRequestLocale, b as db, L as eventRules, M as loadActiveThemeEventRules, r as readBody, e as createError } from '../../../nitro/nitro.mjs';
import { desc } from 'drizzle-orm';
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

const index = defineEventHandler(async (event) => {
  var _a, _b;
  const locale = getRequestLocale(event);
  if (event.method === "GET") {
    let dbRules = [];
    try {
      dbRules = await db.select().from(eventRules).orderBy(desc(eventRules.id));
    } catch {
      dbRules = [];
    }
    const registeredThemeRules = await loadActiveThemeEventRules();
    const themeRules = registeredThemeRules.map((action) => ({
      id: `builtin:${action.key}`,
      event: action.event,
      action: action.key,
      config: {
        mode: action.mode || "async",
        isBuiltin: true,
        theme: action.theme,
        description: action.description
      },
      enabled: true,
      remark: action.label,
      isBuiltin: true,
      theme: action.theme
    }));
    return [...themeRules, ...dbRules];
  }
  if (event.method === "POST") {
    const body = await readBody(event);
    const row = {
      event: String((body == null ? void 0 : body.event) || "").trim(),
      action: String((body == null ? void 0 : body.action) || "").trim(),
      config: (_a = body == null ? void 0 : body.config) != null ? _a : {},
      enabled: (body == null ? void 0 : body.enabled) !== false,
      remark: (body == null ? void 0 : body.remark) ? String(body.remark) : null
    };
    if (!row.event || !row.action) {
      throw createError({ statusCode: 400, statusMessage: locale === "zh" ? "event \u548C action \u5FC5\u586B" : "event and action are required" });
    }
    const inserted = await db.insert(eventRules).values(row).returning();
    return (_b = inserted[0]) != null ? _b : inserted;
  }
  throw createError({ statusCode: 405, statusMessage: locale === "zh" ? "\u8BF7\u6C42\u65B9\u6CD5\u4E0D\u5141\u8BB8" : "Method Not Allowed" });
});

export { index as default };
