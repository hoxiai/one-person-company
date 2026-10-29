import { d as defineEventHandler, c as getRequestLocale, _ as loadActiveThemeEventRules } from '../../../../nitro/nitro.mjs';
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
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
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
  const events = [
    {
      key: "user.registered",
      label: isZh ? "\u7528\u6237\u6CE8\u518C\u6210\u529F" : "User Registered"
    },
    {
      key: "order.paid",
      label: isZh ? "\u8BA2\u5355\u652F\u4ED8\u6210\u529F" : "Order Paid"
    },
    {
      key: "subscription.revoked",
      label: isZh ? "\u8BA2\u9605\u64A4\u9500 / \u6743\u76CA\u56DE\u6536" : "Subscription Revoked"
    },
    {
      key: "subscription.apply",
      label: isZh ? "\u8BA2\u9605\u751F\u6548" : "Subscription Activated"
    }
  ];
  return {
    code: 0,
    data: {
      systemActions,
      themeActions,
      events
    }
  };
});

export { actions_get as default };
//# sourceMappingURL=actions.get.mjs.map
