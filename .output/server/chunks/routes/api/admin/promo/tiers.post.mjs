import { d as defineEventHandler, c as getRequestLocale, r as readBody, e as createError, b as db, aJ as promoAgentTiers } from '../../../../nitro/nitro.mjs';
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

const tiers_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const body = await readBody(event);
  const id = Number((body == null ? void 0 : body.id) || 0);
  const payload = {
    code: String((body == null ? void 0 : body.code) || "").trim(),
    name: String((body == null ? void 0 : body.name) || "").trim(),
    roleScope: String((body == null ? void 0 : body.roleScope) || "agent").trim(),
    level: Number((body == null ? void 0 : body.level) || 1),
    discountRate: Number((body == null ? void 0 : body.discountRate) || 1),
    salesThreshold: Number((body == null ? void 0 : body.salesThreshold) || 0),
    isFixed: (body == null ? void 0 : body.isFixed) === true,
    isActive: (body == null ? void 0 : body.isActive) !== false,
    description: (body == null ? void 0 : body.description) ? String(body.description) : null,
    updatedAt: /* @__PURE__ */ new Date()
  };
  if (!payload.code || !payload.name) {
    throw createError({ statusCode: 400, statusMessage: locale === "zh" ? "code \u548C name \u5FC5\u586B" : "code and name are required" });
  }
  if (id > 0) {
    await db.update(promoAgentTiers).set(payload).where(eq(promoAgentTiers.id, id));
    return { ok: true, id };
  }
  const inserted = await db.insert(promoAgentTiers).values({
    ...payload,
    createdAt: /* @__PURE__ */ new Date()
  }).returning();
  return inserted[0] || inserted;
});

export { tiers_post as default };
