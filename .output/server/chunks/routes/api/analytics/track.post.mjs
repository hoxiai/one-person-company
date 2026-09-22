import { d as defineEventHandler, c as getRequestLocale, r as readBody, aO as getUserSession, e as createError, bm as trackVisitorEvent } from '../../../nitro/nitro.mjs';
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

const allowedEvents = /* @__PURE__ */ new Set([
  "page_view",
  "product_view",
  "begin_checkout",
  "order_paid",
  "auth"
]);
const track_post = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const body = await readBody(event).catch(() => ({}));
  const session = await getUserSession(event).catch(() => null);
  const eventName = typeof (body == null ? void 0 : body.eventName) === "string" ? body.eventName : "";
  if (!allowedEvents.has(eventName)) {
    throw createError({
      statusCode: 400,
      statusMessage: locale === "zh" ? "\u65E0\u6548\u7684\u57CB\u70B9\u4E8B\u4EF6" : "Invalid analytics event"
    });
  }
  try {
    await trackVisitorEvent(event, {
      eventName,
      eventAction: typeof (body == null ? void 0 : body.eventAction) === "string" ? body.eventAction : null,
      productId: typeof (body == null ? void 0 : body.productId) === "number" ? body.productId : null,
      orderId: typeof (body == null ? void 0 : body.orderId) === "string" ? body.orderId : null,
      path: typeof (body == null ? void 0 : body.path) === "string" ? body.path : null,
      referrer: typeof (body == null ? void 0 : body.referrer) === "string" ? body.referrer : null,
      userId: ((_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id) || null
    });
  } catch (err) {
    console.warn("[analytics] Track event background warning:", (err == null ? void 0 : err.message) || err);
  }
  return { success: true };
});

export { track_post as default };
