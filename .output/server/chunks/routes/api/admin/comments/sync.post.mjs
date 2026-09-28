import { d as defineEventHandler, r as readBody, e as createError, x as syncExternalComments } from '../../../../nitro/nitro.mjs';
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

const sync_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const targetType = String(body.targetType || "post").trim();
  const targetId = String(body.targetId || "").trim();
  const source = String(body.source || "v2ex").trim().toLowerCase();
  const topicIdOrUrl = body.topicIdOrUrl;
  const status = body.status === "pending" ? "pending" : "approved";
  const autoSync = body.autoSync !== false;
  const token = body.token ? String(body.token).trim() : void 0;
  const cookie = body.cookie ? String(body.cookie).trim() : void 0;
  const userAgent = body.userAgent ? String(body.userAgent).trim() : void 0;
  const rawPayload = body.rawPayload ? String(body.rawPayload).trim() : void 0;
  if (!targetId) {
    throw createError({
      statusCode: 400,
      statusMessage: "targetId \u4E0D\u80FD\u4E3A\u7A7A\uFF08\u5982\u6587\u7AE0 slug \u6216\u6A21\u578B slug\uFF09"
    });
  }
  if (!topicIdOrUrl && !rawPayload) {
    throw createError({
      statusCode: 400,
      statusMessage: "\u8BF7\u63D0\u4F9B\u5916\u90E8\u8BDD\u9898\u94FE\u63A5/ID \u6216\u76F4\u63A5\u7C98\u8D34\u6570\u636E"
    });
  }
  if (source !== "v2ex" && source !== "linuxdo") {
    throw createError({
      statusCode: 400,
      statusMessage: `\u6682\u4E0D\u652F\u6301\u7684\u6570\u636E\u6E90: ${source}\uFF0C\u5F53\u524D\u652F\u6301 'v2ex' \u4E0E 'linuxdo'`
    });
  }
  try {
    const result = await syncExternalComments({
      source,
      targetType,
      targetId,
      topicIdOrUrl,
      status,
      autoSync,
      token,
      cookie,
      userAgent,
      rawPayload
    });
    const sourceName = source === "linuxdo" ? "LINUX DO" : "V2EX";
    return {
      success: true,
      data: result,
      message: `\u6210\u529F\u6293\u53D6 ${sourceName} \u8BC4\u8BBA ${result.totalFetched} \u6761\uFF0C\u65B0\u589E\u5BFC\u5165 ${result.insertedCount} \u6761\uFF0C\u8DF3\u8FC7\u5DF2\u5B58\u5728 ${result.skippedCount} \u6761`
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: (err == null ? void 0 : err.message) || `\u540C\u6B65\u5916\u90E8\u8BC4\u8BBA\u5931\u8D25`
    });
  }
});

export { sync_post as default };
