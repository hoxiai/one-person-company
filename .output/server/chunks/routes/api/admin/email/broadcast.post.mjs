import { d as defineEventHandler, r as readBody, e as createError, Q as broadcastNewsletter } from '../../../../nitro/nitro.mjs';
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

const broadcast_post = defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => ({}));
  const subjectZh = String((body == null ? void 0 : body.subjectZh) || (body == null ? void 0 : body.subject) || "").trim();
  const subjectEn = String((body == null ? void 0 : body.subjectEn) || subjectZh).trim();
  const htmlZh = String((body == null ? void 0 : body.htmlZh) || (body == null ? void 0 : body.html) || "").trim();
  const htmlEn = String((body == null ? void 0 : body.htmlEn) || htmlZh).trim();
  const topic = String((body == null ? void 0 : body.topic) || "general").trim();
  const targetEmail = (body == null ? void 0 : body.targetEmail) ? String(body.targetEmail).trim() : void 0;
  if (!subjectZh || !htmlZh) {
    throw createError({
      statusCode: 400,
      statusMessage: "\u90AE\u4EF6\u4E3B\u9898\u548C\u6B63\u6587\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A / Subject and HTML content are required."
    });
  }
  const res = await broadcastNewsletter({
    topic,
    includeGeneral: (body == null ? void 0 : body.includeGeneral) !== false,
    subjectZh,
    subjectEn,
    htmlZh,
    htmlEn,
    templateCode: (body == null ? void 0 : body.templateCode) ? String(body.templateCode) : `newsletter_${topic}`,
    targetEmail
  });
  return {
    ok: res.ok,
    code: 0,
    ...res
  };
});

export { broadcast_post as default };
//# sourceMappingURL=broadcast.post.mjs.map
