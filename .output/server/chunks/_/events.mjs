import { $ as readMinimalCheckoutBridgeMeta, dq as sendMinimalCheckoutPaidNotification } from '../nitro/nitro.mjs';
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

function getThemeEventRules() {
  return [
    {
      key: "minimal:checkout_notify",
      event: "order.paid",
      theme: "minimal",
      label: "\u6781\u7B80\u6536\u94F6\uFF1A\u5916\u90E8\u4E2D\u7EE7\u8BA2\u5355\u652F\u4ED8\u901A\u77E5\u4E0E\u56DE\u8C03",
      description: "\u5916\u90E8\u4E2D\u7EE7\u652F\u4ED8\u8BA2\u5355\u652F\u4ED8\u6210\u529F\u540E\uFF0C\u81EA\u52A8\u5411\u7B2C\u4E09\u65B9\u7CFB\u7EDF\u53D1\u9001 Webhook \u56DE\u8C03\u901A\u77E5\u5E76\u7B7E\u540D\u9A8C\u7B7E",
      mode: "async",
      handler: async (payload) => {
        const order = payload;
        const bridgeMeta = readMinimalCheckoutBridgeMeta(order == null ? void 0 : order.metaData);
        if (!bridgeMeta) {
          return { ok: true };
        }
        try {
          const res = await sendMinimalCheckoutPaidNotification(order);
          return { ok: res.delivered || res.skipped };
        } catch (err) {
          console.error(`[MinimalCheckoutEvent] notification failed for order ${order == null ? void 0 : order.id}:`, err);
          return { ok: false, errorMessage: (err == null ? void 0 : err.message) || String(err) };
        }
      }
    }
  ];
}

export { getThemeEventRules };
