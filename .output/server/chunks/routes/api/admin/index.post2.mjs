import { d as defineEventHandler, c as getRequestLocale, r as readBody, e as createError, b as db, p as cards } from '../../../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import 'node:module';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:fs/promises';
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:zlib';
import 'node:child_process';

const index_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const body = await readBody(event);
  const { productId } = body || {};
  const rawList = Array.isArray(body == null ? void 0 : body.cardNumbers) ? body.cardNumbers : Array.isArray(body == null ? void 0 : body.cards) ? body.cards : [];
  const cardNumbers = rawList.map((c) => String(c || "").trim()).filter(Boolean);
  if (!productId || !cardNumbers.length) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11\u5FC5\u586B\u5B57\u6BB5" : "Missing required fields" });
  }
  try {
    const insertData = cardNumbers.map((cardNumber) => ({
      productId: Number(productId),
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
//# sourceMappingURL=index.post2.mjs.map
