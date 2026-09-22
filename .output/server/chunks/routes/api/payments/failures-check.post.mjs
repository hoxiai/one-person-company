import { d as defineEventHandler, c as getRequestLocale, r as readBody, b_ as getCookie, b as db, ap as failures } from '../../../nitro/nitro.mjs';
import { and, eq } from 'drizzle-orm';
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

const failuresCheck_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    cardBinRequired: "\u5361 bin \u4E0D\u80FD\u4E3A\u7A7A",
    alreadyChecked: "\u8BE5\u5361 bin \u5DF2\u68C0\u67E5\u8FC7",
    success: "\u6210\u529F",
    internalError: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF"
  } : {
    cardBinRequired: "Card bin is required",
    alreadyChecked: "Card bin already checked",
    success: "success",
    internalError: "Internal server error"
  };
  try {
    const body = await readBody(event);
    const { cardBin } = body;
    const visitorId = getCookie(event, "visitor_id") || "unknown";
    if (!cardBin) {
      return { code: 1, message: messages.cardBinRequired };
    }
    const existingRecord = await db.select().from(failures).where(
      and(
        eq(failures.cardBin, cardBin),
        eq(failures.visitorId, visitorId)
      )
    );
    if (existingRecord.length > 0) {
      return { code: 1, message: messages.alreadyChecked };
    } else {
      return {
        code: 0,
        message: messages.success
      };
    }
  } catch (error) {
    console.error("Check bin error:", error);
    return { code: 1, message: error.message || messages.internalError };
  }
});

export { failuresCheck_post as default };
