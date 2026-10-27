import { d as defineEventHandler, $ as resolveClientIp, a0 as checkIpRateLimit, e as createError, r as readBody, dm as normalizeSubscriberChannel, dn as normalizeSubscriberTopic, c as getRequestLocale, dp as validateAndNormalizeTarget, W as subscribeNewsletter } from '../../../nitro/nitro.mjs';
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
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const subscribe_post = defineEventHandler(async (event) => {
  var _a;
  const ip = resolveClientIp(event);
  const rl = checkIpRateLimit(`newsletter:sub:${ip}`, { max: 15, windowMs: 6e4 });
  if (!rl.ok) {
    throw createError({
      statusCode: 429,
      statusMessage: "Too many subscription attempts. Please try again in a minute."
    });
  }
  const body = await readBody(event).catch(() => ({}));
  const channel = normalizeSubscriberChannel(body == null ? void 0 : body.channel);
  const rawTarget = String((body == null ? void 0 : body.target) || (body == null ? void 0 : body.email) || (body == null ? void 0 : body.url) || "").trim();
  const topic = normalizeSubscriberTopic((body == null ? void 0 : body.topic) || "general");
  const source = String((body == null ? void 0 : body.source) || "web").trim().slice(0, 64) || "web";
  const locale = String((body == null ? void 0 : body.locale) || getRequestLocale(event)).slice(0, 16);
  const isZh = locale.toLowerCase().startsWith("zh");
  const validated = validateAndNormalizeTarget(channel, rawTarget);
  if (!validated.ok) {
    throw createError({
      statusCode: 400,
      statusMessage: isZh ? validated.errorZh : validated.errorEn,
      message: isZh ? validated.errorZh : validated.errorEn
    });
  }
  const user = (_a = event.context) == null ? void 0 : _a.user;
  const userId = (user == null ? void 0 : user.id) && Number.isFinite(Number(user.id)) ? Number(user.id) : null;
  const sendWelcome = (body == null ? void 0 : body.sendWelcome) !== false;
  try {
    const result = await subscribeNewsletter({
      channel,
      target: validated.target,
      topic,
      source,
      locale,
      userId,
      sendWelcome
    });
    const defaultMessage = channel === "email" ? isZh ? result.isNew || result.reactivated ? "\u8BA2\u9605\u6210\u529F\uFF01\u6709\u91CD\u8981\u66F4\u65B0\u65F6\u6211\u4EEC\u5C06\u7B2C\u4E00\u65F6\u95F4\u90AE\u4EF6\u901A\u77E5\u60A8\u3002" : "\u60A8\u5DF2\u5728\u8BA2\u9605\u5217\u8868\u4E2D\uFF0C\u65E0\u9700\u91CD\u590D\u8BA2\u9605\u3002" : result.isNew || result.reactivated ? "Subscribed! We will notify your inbox as soon as new updates drop." : "You are already subscribed to updates." : isZh ? "Webhook \u8BA2\u9605\u767B\u8BB0\u6210\u529F\uFF01" : "Webhook registered for real-time notifications.";
    return {
      ok: true,
      code: 0,
      isNew: result.isNew,
      reactivated: result.reactivated,
      topic: result.subscriber.topic,
      channel: result.subscriber.channel,
      message: defaultMessage
    };
  } catch (err) {
    throw createError({
      statusCode: 400,
      statusMessage: (err == null ? void 0 : err.message) || (isZh ? "\u8BA2\u9605\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" : "Subscription failed, please try again."),
      message: (err == null ? void 0 : err.message) || (isZh ? "\u8BA2\u9605\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" : "Subscription failed, please try again.")
    });
  }
});

export { subscribe_post as default };
//# sourceMappingURL=subscribe.post.mjs.map
