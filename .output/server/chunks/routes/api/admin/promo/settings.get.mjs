import { d as defineEventHandler, b as db, aF as settings } from '../../../../nitro/nitro.mjs';
import { inArray } from 'drizzle-orm';
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

const promoSettingKeys = [
  "promo_default_commission_rate",
  "promo_invite_reward_amount",
  "promo_access_mode",
  "promo_min_spend_amount"
];
const settings_get = defineEventHandler(async () => {
  const rows = await db.select().from(settings).where(inArray(settings.key, promoSettingKeys));
  const result = {
    promo_default_commission_rate: "15",
    promo_access_mode: "paid_active",
    promo_min_spend_amount: "49",
    promo_invite_reward_amount: "0"
  };
  for (const row of rows) {
    result[row.key] = row.value;
  }
  return result;
});

export { settings_get as default };
