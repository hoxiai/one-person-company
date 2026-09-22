import { eq } from 'drizzle-orm';
import { $ as readMinimalCheckoutBridgeMeta, cS as signMinimalCheckoutPayload, b4 as sendHttpWebhook, aj as mergeMinimalCheckoutMeta, b as db, o as orders, ak as prepareOrderMetaForInsert } from '../nitro/nitro.mjs';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
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
import 'zod';

const sendMinimalCheckoutPaidNotification = async (order) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
  const bridgeMeta = readMinimalCheckoutBridgeMeta(order.metaData);
  const attach = (bridgeMeta == null ? void 0 : bridgeMeta.attach) && typeof bridgeMeta.attach === "object" && !Array.isArray(bridgeMeta.attach) ? bridgeMeta.attach : {};
  if (attach.walletOwner === "apay") {
    return { delivered: true, skipped: true, localWallet: true };
  }
  if (!(bridgeMeta == null ? void 0 : bridgeMeta.notifyUrl)) {
    return { delivered: false, skipped: true, localWallet: false };
  }
  const payload = {
    event: "minimal.checkout.paid",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    data: {
      orderId: order.id,
      externalOrderId: bridgeMeta.externalOrderId,
      amount: order.amount,
      currency: bridgeMeta.currency || "CNY",
      sourceAmount: (_a = bridgeMeta.sourceAmount) != null ? _a : null,
      sourceCurrency: bridgeMeta.sourceCurrency || null,
      exchangeRate: (_b = bridgeMeta.exchangeRate) != null ? _b : null,
      rechargeAmount: (_f = (_e = bridgeMeta.rechargeAmount) != null ? _e : (_d = (_c = order.integration) == null ? void 0 : _c.transaction) == null ? void 0 : _d.amount) != null ? _f : null,
      rechargeCurrency: bridgeMeta.rechargeCurrency || ((_i = (_h = (_g = order.integration) == null ? void 0 : _g.transaction) == null ? void 0 : _h.metadata) == null ? void 0 : _i.accounting_currency) || null,
      balanceType: bridgeMeta.balanceType || ((_k = (_j = order.integration) == null ? void 0 : _j.transaction) == null ? void 0 : _k.balance_type) || "cash",
      status: order.status || null,
      payStatus: order.payStatus || "paid",
      tradeNo: order.tradeNo || null,
      paidAt: order.paidAt || null,
      deliveryInfo: order.deliveryInfo || null,
      contactEmail: bridgeMeta.customerEmail || order.contactEmail || null,
      product: {
        id: ((_l = order.product) == null ? void 0 : _l.id) || null,
        slug: ((_m = order.product) == null ? void 0 : _m.slug) || null,
        name: ((_n = order.product) == null ? void 0 : _n.name) || null,
        type: ((_o = order.product) == null ? void 0 : _o.type) || null,
        price: (_q = (_p = order.product) == null ? void 0 : _p.price) != null ? _q : null
      },
      attach: bridgeMeta.attach || null
    }
  };
  const rawBody = JSON.stringify(payload);
  const timestamp = Date.now().toString();
  const signature = await signMinimalCheckoutPayload(timestamp, rawBody);
  const response = await sendHttpWebhook(bridgeMeta.notifyUrl, payload, {
    retries: 2,
    timeout: 8e3,
    headers: {
      "X-Apay-Event": "minimal.checkout.paid",
      "X-Apay-Timestamp": timestamp,
      "X-Apay-Signature": signature
    }
  });
  const nextMeta = mergeMinimalCheckoutMeta(order.metaData || {}, {
    ...bridgeMeta,
    notify: {
      status: response.ok ? "success" : "failed",
      attemptCount: Number(((_r = bridgeMeta.notify) == null ? void 0 : _r.attemptCount) || 0) + 1,
      attemptedAt: (/* @__PURE__ */ new Date()).toISOString(),
      deliveredAt: response.ok ? (/* @__PURE__ */ new Date()).toISOString() : void 0,
      httpStatus: (_s = response.status) != null ? _s : null
    }
  });
  await db.update(orders).set({ metaData: prepareOrderMetaForInsert(nextMeta) }).where(eq(orders.id, order.id));
  return {
    delivered: response.ok,
    skipped: false,
    localWallet: false,
    status: response.status
  };
};

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
