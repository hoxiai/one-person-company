import { d as defineEventHandler, c as getRequestLocale, r as readBody, e as createError, bI as isTrackableVisitorPath, b0 as getUserSession, bJ as trackVisitorEvent } from '../../../nitro/nitro.mjs';
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
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const allowedEvents = /* @__PURE__ */ new Set(["page_view", "product_view"]);
const track_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const body = await readBody(event);
  if (!body || typeof body !== "object") {
    throw createError({ statusCode: 400, statusMessage: "Invalid analytics payload" });
  }
  const payload = Object.fromEntries(Object.entries(body));
  const eventName = typeof payload.eventName === "string" ? payload.eventName : "";
  const path = typeof payload.path === "string" ? payload.path : "";
  if (!allowedEvents.has(eventName) || !isTrackableVisitorPath(path)) {
    throw createError({
      statusCode: 400,
      statusMessage: locale === "zh" ? "\u65E0\u6548\u7684\u57CB\u70B9\u4E8B\u4EF6\u6216\u9875\u9762\u8DEF\u5F84" : "Invalid analytics event or page path"
    });
  }
  const session = await getUserSession(event);
  const sessionUserId = session.user && "id" in session.user ? session.user.id : null;
  const success = await trackVisitorEvent(event, {
    eventName,
    productId: typeof payload.productId === "number" && Number.isSafeInteger(payload.productId) && payload.productId > 0 ? payload.productId : null,
    path,
    // Explicit null means no document referrer; the POST's Referer is the current page.
    referrer: typeof payload.referrer === "string" ? payload.referrer : null,
    userId: typeof sessionUserId === "number" ? sessionUserId : null
  });
  return { success };
});

export { track_post as default };
