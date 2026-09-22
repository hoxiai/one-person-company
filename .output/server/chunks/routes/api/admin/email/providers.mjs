import { d as defineEventHandler, c as getRequestLocale, r as readBody, b as db, H as emailProviders, e as createError } from '../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const providers = defineEventHandler(async (event) => {
  var _a, _b;
  const locale = getRequestLocale(event);
  if (event.method === "POST") {
    const body = await readBody(event);
    if (body.isActive) {
      const all = await db.select().from(emailProviders);
      for (const p of all) {
        if (p.isActive) {
          await db.update(emailProviders).set({ isActive: false }).where(eq(emailProviders.id, p.id));
        }
      }
    }
    const existing = await db.select().from(emailProviders).where(eq(emailProviders.code, body.code)).limit(1);
    if (existing.length > 0) {
      await db.update(emailProviders).set({
        name: body.name,
        isActive: (_a = body.isActive) != null ? _a : false,
        configJson: body.configJson || "",
        sendScript: body.sendScript || ""
      }).where(eq(emailProviders.id, existing[0].id));
    } else {
      await db.insert(emailProviders).values({
        name: body.name,
        code: body.code,
        isActive: (_b = body.isActive) != null ? _b : false,
        configJson: body.configJson || "",
        sendScript: body.sendScript || ""
      });
    }
    return { success: true };
  }
  if (event.method === "GET") {
    return await db.select().from(emailProviders);
  }
  throw createError({ statusCode: 405, message: locale === "zh" ? "\u8BF7\u6C42\u65B9\u6CD5\u4E0D\u5141\u8BB8" : "Method not allowed" });
});

export { providers as default };
