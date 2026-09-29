import { d as defineEventHandler, g as getQuery, c as getRequestLocale, e as createError, ck as queryCollection } from '../../../nitro/nitro.mjs';
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

const document_get = defineEventHandler(async (event) => {
  var _a;
  const query = getQuery(event);
  const rawPath = query.path;
  const locale = (_a = query.locale) != null ? _a : getRequestLocale(event);
  if (typeof rawPath !== "string" || rawPath.length > 512 || typeof locale !== "string" || !["en", "zh", "zh-HK", "ru", "id"].includes(locale) || !/^\/docs(?:\/|$)/.test(rawPath) || rawPath.includes("\0") || rawPath.split("/").some((segment) => segment === "." || segment === "..")) {
    throw createError({ statusCode: 400, statusMessage: "Invalid document path or locale" });
  }
  const path = rawPath.replace(/\/+$/, "") || "/docs";
  const collection = locale === "zh" || locale === "zh-HK" ? "docs_zh" : "docs_en";
  const document = await queryCollection(event, collection).path(path).first();
  if (!document) {
    throw createError({ statusCode: 404, statusMessage: "Document not found" });
  }
  return document;
});

export { document_get as default };
