import { d as defineEventHandler, r as readBody, b as db, aF as settings } from '../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:crypto';
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
import 'zod';

const settings_post = defineEventHandler(async (event) => {
  var _a, _b;
  const body = await readBody(event);
  const payload = {
    promo_default_commission_rate: String((_a = body == null ? void 0 : body.promo_default_commission_rate) != null ? _a : "15"),
    promo_invite_reward_amount: String((_b = body == null ? void 0 : body.promo_invite_reward_amount) != null ? _b : "0"),
    promo_access_mode: String((body == null ? void 0 : body.promo_access_mode) || "paid_active"),
    promo_min_spend_amount: String((body == null ? void 0 : body.promo_min_spend_amount) || "49")
  };
  for (const [key, value] of Object.entries(payload)) {
    const existing = await db.select().from(settings).where(eq(settings.key, key)).limit(1);
    if (existing.length > 0) {
      await db.update(settings).set({ value }).where(eq(settings.key, key));
    } else {
      await db.insert(settings).values({ key, value });
    }
  }
  return { ok: true };
});

export { settings_post as default };
