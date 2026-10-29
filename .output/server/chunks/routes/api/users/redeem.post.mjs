import { d as defineEventHandler, d1 as requireUserSession, e as createError, r as readBody, eH as redeemCode, b6 as RedeemError } from '../../../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
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
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

var _a, _b;
const rateLimitMap = /* @__PURE__ */ new Map();
function prune(now = Date.now()) {
  for (const [key, value] of rateLimitMap) {
    if (value.resetTime <= now) rateLimitMap.delete(key);
  }
}
if (typeof setInterval !== "undefined") {
  (_b = (_a = setInterval(() => prune(), 6e4)).unref) == null ? void 0 : _b.call(_a);
}
const redeem_post = defineEventHandler(async (event) => {
  var _a2;
  const session = await requireUserSession(event);
  const userId = Number((_a2 = session == null ? void 0 : session.user) == null ? void 0 : _a2.id);
  if (!userId) throw createError({ statusCode: 401, statusMessage: "\u8BF7\u5148\u767B\u5F55" });
  const now = Date.now();
  const bucket = rateLimitMap.get(userId);
  if (!bucket || bucket.resetTime <= now) {
    rateLimitMap.set(userId, { count: 1, resetTime: now + 6e4 });
  } else {
    bucket.count += 1;
    if (bucket.count > 10) {
      throw createError({ statusCode: 429, statusMessage: "\u64CD\u4F5C\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5" });
    }
  }
  const body = await readBody(event);
  try {
    const result = await redeemCode(userId, body == null ? void 0 : body.code);
    return {
      code: 0,
      message: result.alreadyProcessed ? "\u8BE5\u5151\u6362\u7801\u5DF2\u5151\u6362\uFF0C\u65E0\u9700\u91CD\u590D\u63D0\u4EA4" : `\u5151\u6362\u6210\u529F\uFF0C\u5DF2\u5230\u8D26 ${result.amount} ${result.currency}`,
      data: result
    };
  } catch (error) {
    if (error instanceof RedeemError) {
      throw createError({ statusCode: error.statusCode, statusMessage: error.message });
    }
    throw error;
  }
});

export { redeem_post as default };
//# sourceMappingURL=redeem.post.mjs.map
