import { d9 as syncSubscriptionToAINode } from '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
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

const toUserId = (payload) => {
  var _a;
  return Number((_a = payload == null ? void 0 : payload.userId) != null ? _a : 0) || 0;
};
const productType = (payload) => {
  const product = payload == null ? void 0 : payload.product;
  return product && typeof product === "object" ? String(product.type || "") : "";
};
function getThemeEventRules() {
  return [
    {
      key: "ainode:sync_subscription_paid",
      event: "order.paid",
      theme: "ainode",
      label: "AINode\uFF1A\u8BA2\u9605\u652F\u4ED8\u540E\u540C\u6B65\u5957\u9910\u989D\u5EA6",
      description: "\u8BA2\u9605\u8BA2\u5355\uFF08\u65B0\u8D2D\u3001\u7EED\u8D39\u3001\u5347\u7EA7\uFF09\u652F\u4ED8\u5C65\u7EA6\u540E\uFF0C\u6309 APay \u5F53\u524D\u8BA2\u9605\u5411 AINode \u53D1\u9001 subscription.apply",
      mode: "async",
      handler: async (payload) => {
        if (productType(payload) !== "subscription") return { ok: true };
        const userId = toUserId(payload);
        if (!userId) return { ok: false, errorMessage: "\u8BA2\u9605\u8BA2\u5355\u6CA1\u6709\u5173\u8054\u7528\u6237\uFF0C\u65E0\u6CD5\u540C\u6B65 AINode" };
        const result = await syncSubscriptionToAINode(userId, `order.paid:${String((payload == null ? void 0 : payload.id) || "")}`);
        return { ok: result.ok, errorMessage: result.errorMessage };
      }
    },
    {
      key: "ainode:sync_subscription_revoked",
      event: "subscription.revoked",
      theme: "ainode",
      label: "AINode\uFF1A\u8BA2\u9605\u64A4\u9500\u540E\u540C\u6B65\u6536\u56DE\u989D\u5EA6",
      description: "\u9000\u6B3E\u3001\u7BA1\u7406\u5458\u53D6\u6D88\u6216\u5230\u671F\u6B62\u4ED8\u540E\uFF0C\u6309 APay \u5F53\u524D\u8BA2\u9605\u5411 AINode \u53D1\u9001 subscription.cancel\uFF08\u4ECD\u6709\u5176\u4ED6\u751F\u6548\u8BA2\u9605\u65F6\u53D1\u9001 apply\uFF09",
      mode: "async",
      handler: async (payload) => {
        const userId = toUserId(payload);
        if (!userId) return { ok: false, errorMessage: "\u8BA2\u9605\u64A4\u9500\u4E8B\u4EF6\u7F3A\u5C11\u7528\u6237\uFF0C\u65E0\u6CD5\u540C\u6B65 AINode" };
        const result = await syncSubscriptionToAINode(userId, `subscription.revoked:${String((payload == null ? void 0 : payload.subscriptionId) || "")}`);
        return { ok: result.ok, errorMessage: result.errorMessage };
      }
    }
  ];
}

export { getThemeEventRules };
