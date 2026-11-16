import { d as defineEventHandler, an as resolveClientIp, ao as checkIpRateLimit, e as createError, aP as getUserSession, dJ as getCookie, d5 as uploadTicketAttachment } from '../../../nitro/nitro.mjs';
import crypto from 'node:crypto';
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

const upload_post = defineEventHandler(async (event) => {
  const ip = resolveClientIp(event);
  const rate = checkIpRateLimit(`inquiries:upload:${ip}`, { max: 25, windowMs: 10 * 6e4 });
  if (!rate.ok) {
    throw createError({
      statusCode: 429,
      statusMessage: "\u56FE\u7247\u4E0A\u4F20\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"
    });
  }
  const session = await getUserSession(event).catch(() => null);
  const user = session == null ? void 0 : session.user;
  const userId = (user == null ? void 0 : user.id) ? Number(user.id) : null;
  const visitorCookie = getCookie(event, "apay_vid") || "";
  const ipHash = crypto.createHash("sha1").update(String(ip || "anon")).digest("hex").slice(0, 10);
  const owner = userId ? `user-${userId}` : `guest-${(visitorCookie || ipHash).replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 24)}`;
  const uploaded = await uploadTicketAttachment(event, owner);
  return {
    code: 200,
    url: uploaded.url,
    data: uploaded
  };
});

export { upload_post as default };
//# sourceMappingURL=upload.post.mjs.map
