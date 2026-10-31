import { d as defineEventHandler, c as getRequestLocale, r as readBody, e as createError, a6 as getLocalizedSettingValue, a4 as deliverEmail, a7 as sendEmail } from '../../../../nitro/nitro.mjs';
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
import 'node:fs/promises';
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
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const test_post = defineEventHandler(async (event) => {
  const requestLocale = getRequestLocale(event);
  const body = await readBody(event);
  const { to, templateCode, locale, templates } = body;
  if (!to) {
    throw createError({ statusCode: 400, message: requestLocale === "zh" ? "\u6536\u4EF6\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A" : "recipient email is required" });
  }
  const templateLocale = String(locale || requestLocale);
  const siteName = await getLocalizedSettingValue("site_name", templateLocale, "APay");
  if (!templateCode) {
    const isZh = templateLocale.toLowerCase().startsWith("zh");
    const subject = isZh ? `\u3010${siteName}\u3011\u6D4B\u8BD5\u90AE\u4EF6` : `[${siteName}] Test Email`;
    const html = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111">
  <h2 style="margin:0 0 16px">${siteName}</h2>
  <p style="margin:0 0 12px">${isZh ? "\u8FD9\u662F\u4E00\u5C01\u6D4B\u8BD5\u90AE\u4EF6\u3002\u6536\u5230\u5B83\u8BF4\u660E\u4F60\u7684\u90AE\u4EF6\u53D1\u9001\u914D\u7F6E\u6B63\u5E38\u5DE5\u4F5C\u3002" : "This is a test email. Receiving it means your email delivery configuration works."}</p>
  <p style="margin:0;color:#888;font-size:12px">${(/* @__PURE__ */ new Date()).toISOString()}</p>
</div>`;
    return await deliverEmail({
      to,
      subject,
      html,
      templateCode: "test"
    });
  }
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
//# sourceMappingURL=test.post.mjs.map
