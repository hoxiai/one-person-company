import { d as defineEventHandler, c as getRequestLocale, r as readBody, e as createError, b as db, m as cards } from '../../../nitro/nitro.mjs';
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

const index_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const body = await readBody(event);
  const { productId, cardNumbers } = body;
  if (!productId || !cardNumbers || !cardNumbers.length) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11\u5FC5\u586B\u5B57\u6BB5" : "Missing required fields" });
  }
  try {
    const insertData = cardNumbers.map((cardNumber) => ({
      productId,
      cardNumber,
      isUsed: false,
      createdAt: /* @__PURE__ */ new Date()
    }));
    await db.insert(cards).values(insertData);
    return { code: 0, message: locale === "zh" ? `\u6210\u529F\u6DFB\u52A0 ${insertData.length} \u5F20\u5361\u5BC6` : `Successfully added ${insertData.length} cards` };
  } catch (error) {
    console.error("Add cards error:", error);
    return { code: 1, message: error.message || (locale === "zh" ? "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF" : "Internal server error") };
  }
});

export { index_post as default };
