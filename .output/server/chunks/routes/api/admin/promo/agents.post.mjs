import { d as defineEventHandler, c as getRequestLocale, r as readBody, e as createError, b as db, u as users, av as assignPromoAgentByUserId } from '../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const agents_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const body = await readBody(event);
  const email = String((body == null ? void 0 : body.email) || "").trim().toLowerCase();
  const role = String((body == null ? void 0 : body.role) || "agent").trim();
  const parentAgentUserId = Number((body == null ? void 0 : body.parentAgentUserId) || 0) || null;
  if (!email) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A" : "Email is required" });
  }
  if (role !== "agent" && role !== "master_agent") {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u89D2\u8272\u65E0\u6548" : "Invalid role" });
  }
  const userRows = await db.select({
    id: users.id,
    email: users.email
  }).from(users).where(eq(users.email, email)).limit(1);
  if (!userRows.length) {
    throw createError({ statusCode: 404, message: locale === "zh" ? "\u7528\u6237\u4E0D\u5B58\u5728" : "User not found" });
  }
  return assignPromoAgentByUserId({
    userId: userRows[0].id,
    role,
    parentAgentUserId
  });
});

export { agents_post as default };
