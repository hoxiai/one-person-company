import { d as defineEventHandler, aA as ensureDefaultPromoTiers, b as db, aG as settings, aJ as promoAgentTiers } from '../../../nitro/nitro.mjs';
import { inArray, eq, desc } from 'drizzle-orm';
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

const promoSettingKeys = [
  "promo_default_commission_rate",
  "promo_invite_reward_amount",
  "promo_access_mode",
  "promo_min_spend_amount"
];
const publicConfig_get = defineEventHandler(async () => {
  await ensureDefaultPromoTiers().catch(() => null);
  const settingRows = await db.select().from(settings).where(inArray(settings.key, promoSettingKeys));
  const settingMap = {
    promo_default_commission_rate: "15",
    promo_access_mode: "paid_active",
    promo_min_spend_amount: "49",
    promo_invite_reward_amount: "0"
  };
  for (const row of settingRows) {
    settingMap[row.key] = row.value;
  }
  const tiers = await db.select().from(promoAgentTiers).where(eq(promoAgentTiers.isActive, true)).orderBy(desc(promoAgentTiers.roleScope), desc(promoAgentTiers.level));
  const parsedDefaultRate = Number(settingMap.promo_default_commission_rate);
  const defaultCommissionRate = Number.isFinite(parsedDefaultRate) && parsedDefaultRate >= 0 ? parsedDefaultRate : 15;
  return {
    defaultCommissionRate,
    accessMode: settingMap.promo_access_mode || "paid_active",
    minSpendAmount: Number(settingMap.promo_min_spend_amount) || 0,
    inviteRewardAmount: Number(settingMap.promo_invite_reward_amount) || 0,
    tiers: tiers.map((t) => ({
      id: t.id,
      code: t.code,
      name: t.name,
      roleScope: t.roleScope,
      level: t.level,
      discountRate: t.discountRate,
      salesThreshold: t.salesThreshold,
      isFixed: t.isFixed,
      description: t.description
    }))
  };
});

export { publicConfig_get as default };
