import { d as defineEventHandler, r as readBody, W as subscribeNewsletter, e as createError, b as db, V as newsletterSubscribers } from '../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const subscribers_post = defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => ({}));
  const action = String((body == null ? void 0 : body.action) || "create").trim().toLowerCase();
  if (action === "create") {
    const res = await subscribeNewsletter({
      channel: (body == null ? void 0 : body.channel) || "email",
      target: String((body == null ? void 0 : body.target) || (body == null ? void 0 : body.email) || ""),
      topic: (body == null ? void 0 : body.topic) || "general",
      source: "admin",
      locale: (body == null ? void 0 : body.locale) || "zh",
      sendWelcome: Boolean(body == null ? void 0 : body.sendWelcome)
    });
    return {
      ok: true,
      code: 0,
      subscriber: res.subscriber,
      isNew: res.isNew,
      reactivated: res.reactivated
    };
  }
  const id = Number(body == null ? void 0 : body.id);
  if (!Number.isFinite(id) || id <= 0) {
    throw createError({ statusCode: 400, statusMessage: "Invalid subscriber id." });
  }
  if (action === "delete") {
    await db.delete(newsletterSubscribers).where(eq(newsletterSubscribers.id, id));
    return { ok: true, code: 0 };
  }
  if (action === "toggle" || action === "status") {
    const existing = await db.select().from(newsletterSubscribers).where(eq(newsletterSubscribers.id, id)).limit(1);
    if (existing.length === 0) {
      throw createError({ statusCode: 404, statusMessage: "Subscriber not found." });
    }
    const current = existing[0];
    const nextStatus = (body == null ? void 0 : body.status) ? body.status === "unsubscribed" ? "unsubscribed" : "active" : current.status === "active" ? "unsubscribed" : "active";
    const now = /* @__PURE__ */ new Date();
    await db.update(newsletterSubscribers).set({
      status: nextStatus,
      unsubscribedAt: nextStatus === "unsubscribed" ? now : null,
      updatedAt: now
    }).where(eq(newsletterSubscribers.id, id));
    return { ok: true, code: 0, status: nextStatus };
  }
  throw createError({ statusCode: 400, statusMessage: `Unsupported action: ${action}` });
});

export { subscribers_post as default };
//# sourceMappingURL=subscribers.post.mjs.map
