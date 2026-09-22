import { d as defineEventHandler, c as getRequestLocale, r as readBody, e as createError, J as getLocalizedSettingValue, K as sendEmail } from '../../../../nitro/nitro.mjs';
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

const test_post = defineEventHandler(async (event) => {
  const requestLocale = getRequestLocale(event);
  const body = await readBody(event);
  const { to, templateCode, locale, templates } = body;
  if (!to || !templateCode) {
    throw createError({ statusCode: 400, message: requestLocale === "zh" ? "to \u548C templateCode \u4E0D\u80FD\u4E3A\u7A7A" : "to and templateCode are required" });
  }
  const templateLocale = String(locale || requestLocale);
  const siteName = await getLocalizedSettingValue("site_name", templateLocale, "APay");
  const result = await sendEmail({
    to,
    templateCode,
    locale: templateLocale,
    templates,
    variables: {
      nickname: "Test User",
      site_name: siteName,
      verify_link: "https://example.com/verify?token=test",
      order_id: "TEST-001",
      amount: "99.00",
      product_name: "Test Product",
      expire_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      plan_name: "Pro Plan"
    }
  });
  return result;
});

export { test_post as default };
