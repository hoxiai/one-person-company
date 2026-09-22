import { d as defineEventHandler, c as getRequestLocale, M as loadActiveThemeEventRules } from '../../../../nitro/nitro.mjs';
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

const actions_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const isZh = locale.startsWith("zh");
  const [systemActions, registeredThemeRules] = await Promise.all([
    [
      {
        key: "grant_reward",
        type: "system",
        label: isZh ? "\u53D1\u653E\u5956\u52B1" : "Grant Reward",
        description: isZh ? "\u5411\u7528\u6237\u53D1\u653E\u79EF\u5206\u3001\u8D60\u9001\u4F59\u989D\u6216\u73B0\u91D1" : "Credit points, grant balance or cash to user",
        supportedEvents: ["user.registered", "order.paid", "subscription.revoked"]
      },
      {
        key: "send_webhook",
        type: "system",
        label: isZh ? "\u5916\u53D1 Webhook" : "Send Webhook",
        description: isZh ? "\u5411\u6307\u5B9A\u7684\u81EA\u5B9A\u4E49 URL \u63A8\u9001\u5305\u542B\u4E8B\u4EF6\u6570\u636E\u7684 HTTP POST \u8BF7\u6C42" : "Dispatch HTTP POST webhook with event payload",
        supportedEvents: ["user.registered", "order.paid", "subscription.revoked"]
      }
    ],
    loadActiveThemeEventRules()
  ]);
  const themeActions = registeredThemeRules.map((action) => ({
    key: action.key,
    type: "theme",
    theme: action.theme,
    label: action.label,
    description: action.description,
    supportedEvents: [action.event]
  }));
  return {
    code: 0,
    data: {
      systemActions,
      themeActions
    }
  };
});

export { actions_get as default };
