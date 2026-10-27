import { d as defineEventHandler, g as getQuery, d6 as getRequestHeader, e as createError, di as setResponseHeader, dq as resubscribeByToken, dr as unsubscribeByToken } from '../../../nitro/nitro.mjs';
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

function escapeHtml(str) {
  return String(str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
const unsubscribe_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e;
  const query = getQuery(event);
  const token = String((query == null ? void 0 : query.token) || "").trim();
  const action = String((query == null ? void 0 : query.action) || "").trim().toLowerCase();
  const accept = String(getRequestHeader(event, "accept") || "").toLowerCase();
  const wantsJson = (query == null ? void 0 : query.format) === "json" || accept.includes("application/json") && !accept.includes("text/html");
  if (!token) {
    if (wantsJson) {
      throw createError({ statusCode: 400, statusMessage: "Missing unsubscribe token." });
    }
    setResponseHeader(event, "Content-Type", "text/html; charset=utf-8");
    return `<!doctype html><html><head><meta charset="utf-8"><title>Invalid Link</title></head><body style="font-family:sans-serif;padding:40px;text-align:center;"><h2>\u94FE\u63A5\u65E0\u6548 / Invalid Unsubscribe Link</h2><p><a href="/">\u8FD4\u56DE\u9996\u9875 / Back to Home</a></p></body></html>`;
  }
  const res = action === "resubscribe" ? await resubscribeByToken(token) : await unsubscribeByToken(token);
  if (wantsJson) {
    return {
      ok: res.ok,
      status: ((_a = res.subscriber) == null ? void 0 : _a.status) || "not_found",
      target: ((_b = res.subscriber) == null ? void 0 : _b.target) || null,
      topic: ((_c = res.subscriber) == null ? void 0 : _c.topic) || null
    };
  }
  const isZh = String(((_d = res.subscriber) == null ? void 0 : _d.locale) || "zh").toLowerCase().startsWith("zh");
  const isResubscribed = action === "resubscribe" && res.ok;
  const safeTarget = escapeHtml(((_e = res.subscriber) == null ? void 0 : _e.target) || "");
  const safeToken = encodeURIComponent(token);
  setResponseHeader(event, "Content-Type", "text/html; charset=utf-8");
  return `<!doctype html>
<html lang="${isZh ? "zh-CN" : "en"}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${isResubscribed ? isZh ? "\u5DF2\u6062\u590D\u8BA2\u9605" : "Resubscribed" : isZh ? "\u5DF2\u9000\u8BA2\u90AE\u4EF6\u901A\u77E5" : "Unsubscribed"}</title>
  <style>
    body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #f8fafc; color: #0f172a; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 24px; box-sizing: border-box; }
    .card { max-width: 440px; width: 100%; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px 28px; text-align: center; }
    .icon { font-size: 36px; margin-bottom: 12px; }
    h1 { margin: 0 0 10px; font-size: 20px; font-weight: 700; }
    p { margin: 0 0 22px; font-size: 14px; color: #475569; line-height: 1.65; }
    .actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
    .btn { display: inline-block; padding: 9px 18px; border-radius: 10px; font-size: 13px; font-weight: 600; text-decoration: none; border: 1px solid #cbd5e1; color: #334155; background: #ffffff; }
    .btn-primary { background: #2563eb; border-color: #2563eb; color: #ffffff; }
  </style>
</head>
<body>
  <div class="card">
    ${!res.ok ? `<div class="icon">\u26A0\uFE0F</div>
         <h1>\u94FE\u63A5\u5DF2\u5931\u6548\u6216\u4E0D\u5B58\u5728</h1>
         <p>\u672A\u627E\u5230\u5BF9\u5E94\u7684\u8BA2\u9605\u8BB0\u5F55\uFF0C\u53EF\u80FD\u5DF2\u88AB\u79FB\u9664\u3002<br/>Subscription record not found.</p>
         <div class="actions"><a class="btn btn-primary" href="/">\u8FD4\u56DE\u9996\u9875 / Home</a></div>` : isResubscribed ? `<div class="icon">\u{1F389}</div>
           <h1>${isZh ? "\u5DF2\u6062\u590D\u90AE\u4EF6\u8BA2\u9605" : "Subscription Restored"}</h1>
           <p>${isZh ? `\u90AE\u7BB1 <strong>${safeTarget}</strong> \u5DF2\u91CD\u65B0\u5F00\u542F\u901A\u77E5\u3002` : `Notifications have been re-enabled for <strong>${safeTarget}</strong>.`}</p>
           <div class="actions">
             <a class="btn btn-primary" href="/">${isZh ? "\u8FD4\u56DE\u9996\u9875" : "Back to Home"}</a>
             <a class="btn" href="/api/newsletter/unsubscribe?token=${safeToken}">${isZh ? "\u518D\u6B21\u9000\u8BA2" : "Unsubscribe"}</a>
           </div>` : `<div class="icon">\u2705</div>
           <h1>${isZh ? "\u60A8\u5DF2\u6210\u529F\u9000\u8BA2" : "You Have Been Unsubscribed"}</h1>
           <p>${isZh ? `\u6211\u4EEC\u5C06\u4E0D\u518D\u5411 <strong>${safeTarget}</strong> \u53D1\u9001\u6B64\u7C7B\u8BA2\u9605\u901A\u77E5\u3002` : `We will no longer send subscription updates to <strong>${safeTarget}</strong>.`}</p>
           <div class="actions">
             <a class="btn" href="/api/newsletter/unsubscribe?token=${safeToken}&action=resubscribe">${isZh ? "\u8BEF\u70B9\uFF1F\u6062\u590D\u8BA2\u9605" : "Resubscribe"}</a>
             <a class="btn btn-primary" href="/">${isZh ? "\u8FD4\u56DE\u9996\u9875" : "Back to Home"}</a>
           </div>`}
  </div>
</body>
</html>`;
});

export { unsubscribe_get as default };
//# sourceMappingURL=unsubscribe.get.mjs.map
