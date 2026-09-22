import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, b as db, m as cards } from '../../../../nitro/nitro.mjs';
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

const _id__delete = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11 ID" : "Missing id" });
  try {
    const [card] = await db.select().from(cards).where(eq(cards.id, parseInt(id))).limit(1);
    if (!card) {
      return { code: 1, message: locale === "zh" ? "\u5361\u5BC6\u4E0D\u5B58\u5728" : "Card not found" };
    }
    if (card.isUsed) {
      return { code: 1, message: locale === "zh" ? "\u5DF2\u4F7F\u7528\u7684\u5361\u5BC6\u4E0D\u80FD\u5220\u9664" : "Cannot delete a card that has already been used" };
    }
    await db.delete(cards).where(eq(cards.id, parseInt(id)));
    return { code: 0, message: locale === "zh" ? "\u5361\u5BC6\u5220\u9664\u6210\u529F" : "Card deleted successfully" };
  } catch (error) {
    console.error("Delete card error:", error);
    return { code: 1, message: error.message || (locale === "zh" ? "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF" : "Internal server error") };
  }
});

export { _id__delete as default };
