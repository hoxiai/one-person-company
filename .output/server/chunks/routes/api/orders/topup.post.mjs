import { d as defineEventHandler, c as getRequestLocale, bF as requireUserSession, e as createError, b as db, u as users, X as clearUserSession, bU as getRequestIP, r as readBody, b$ as getTopupRules, c0 as buildTopupQuote, c1 as TopupValidationError, c2 as ensureTopupCarrierProduct, bC as ensureVisitorId, bH as mergePromoTracking, bI as capturePromoTracking, bJ as readPromoTracking, ah as getMinimalCheckoutAdminConfig, ai as buildMinimalCheckoutBridgeMeta, aj as mergeMinimalCheckoutMeta, o as orders, O as ORDER_PAY_STATUS, al as ORDER_STATUS, ak as prepareOrderMetaForInsert, c3 as createTopupRecord, a0 as createOrderAttribution, bm as trackVisitorEvent, bY as createNotification } from '../../../nitro/nitro.mjs';
import crypto from 'crypto';
import { z } from 'zod';
import { eq } from 'drizzle-orm';
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
import 'node:child_process';
import 'node:os';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const bodySchema = z.object({
  currency: z.string().min(1).max(8),
  amount: z.number().positive()
});
const rateLimitMap = /* @__PURE__ */ new Map();
const topup_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f;
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    loginRequired: "\u8BF7\u5148\u767B\u5F55\u540E\u518D\u5145\u503C",
    tooManyRequests: "\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002",
    pendingTitle: "\u5145\u503C\u8BA2\u5355\u5F85\u652F\u4ED8",
    pendingMessage: (amount, currency, rechargeAmount, accountingCurrency) => `\u60A8\u7684\u5145\u503C\u8BA2\u5355\u5DF2\u521B\u5EFA\uFF0C\u5F85\u652F\u4ED8 ${amount} ${currency}\uFF0C\u5230\u8D26 ${rechargeAmount} ${accountingCurrency}\u3002`,
    created: "\u5145\u503C\u8BA2\u5355\u521B\u5EFA\u6210\u529F"
  } : {
    loginRequired: "Please log in before topping up",
    tooManyRequests: "Too many requests. Please try again later.",
    pendingTitle: "Top-up Payment Pending",
    pendingMessage: (amount, currency, rechargeAmount, accountingCurrency) => `Your top-up order has been created. ${amount} ${currency} is pending payment, and ${rechargeAmount} ${accountingCurrency} will be credited after payment.`,
    created: "Top-up order created successfully"
  };
  const session = await requireUserSession(event).catch(() => null);
  const userId = (_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id;
  if (!userId) {
    throw createError({ statusCode: 401, message: messages.loginRequired });
  }
  const userExists = await db.select({ id: users.id }).from(users).where(eq(users.id, userId)).limit(1);
  if (userExists.length === 0) {
    await clearUserSession(event).catch(() => null);
    throw createError({ statusCode: 401, message: messages.loginRequired });
  }
  const ip = getRequestIP(event, { xForwardedFor: true }) || "unknown";
  const now = Date.now();
  const rateData = rateLimitMap.get(ip);
  if (!rateData || rateData.resetTime < now) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 6e4 });
  } else {
    rateData.count++;
    if (rateData.count > 5) {
      throw createError({ statusCode: 429, message: messages.tooManyRequests });
    }
  }
  const parsedBody = bodySchema.safeParse(await readBody(event));
  if (!parsedBody.success) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u5145\u503C\u53C2\u6570\u65E0\u6548" : "Invalid top-up request"
    });
  }
  const body = parsedBody.data;
  const rules = await getTopupRules();
  let quote;
  try {
    quote = buildTopupQuote(rules, body.currency, body.amount, locale);
  } catch (error) {
    if (error instanceof TopupValidationError) {
      throw createError({ statusCode: 400, message: error.message });
    }
    throw error;
  }
  const carrier = await ensureTopupCarrierProduct();
  const visitorId = ensureVisitorId(event);
  const contactEmail = String(((_b = session == null ? void 0 : session.user) == null ? void 0 : _b.email) || "").trim() || `${visitorId}@example.com`;
  const promoTracking = mergePromoTracking(
    readPromoTracking(event),
    await capturePromoTracking(event)
  );
  const orderMetaObj = {
    recharge_amount: quote.rechargeAmount,
    balance_type: "cash",
    display_unit: quote.accountingCurrency,
    topup: {
      currency: quote.currency,
      paidAmount: quote.amount,
      rate: (_d = (_c = rules.options[quote.currency]) == null ? void 0 : _c.rate) != null ? _d : 1,
      accountingCurrency: quote.accountingCurrency
    },
    ...promoTracking.inviteCode ? { inviteCode: promoTracking.inviteCode } : {},
    ...promoTracking.promoCode ? { promoCode: promoTracking.promoCode } : {},
    ...promoTracking.agentCode ? { agentCode: promoTracking.agentCode } : {}
  };
  const date = /* @__PURE__ */ new Date();
  const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
  const orderId = `TU${dateStr}${String(Date.now()).slice(-6)}${crypto.randomBytes(4).toString("hex").toUpperCase()}`;
  const exchangeRate = quote.rechargeAmount > 0 ? Math.round(quote.amount / quote.rechargeAmount * 1e8) / 1e8 : 1;
  const minimalCheckoutConfig = await getMinimalCheckoutAdminConfig();
  const bridgeMeta = buildMinimalCheckoutBridgeMeta({
    externalOrderId: orderId,
    sourceProductId: carrier.id,
    amount: quote.amount,
    currency: quote.currency,
    sourceAmount: quote.rechargeAmount,
    sourceCurrency: quote.accountingCurrency,
    exchangeRate,
    rechargeAmount: quote.rechargeAmount,
    rechargeCurrency: quote.accountingCurrency,
    balanceType: "cash",
    notifyUrl: minimalCheckoutConfig.defaultNotifyUrl || void 0,
    returnUrl: minimalCheckoutConfig.defaultReturnUrl || void 0,
    cancelUrl: minimalCheckoutConfig.defaultCancelUrl || void 0,
    customerEmail: contactEmail,
    attach: {
      channel: "wallet",
      businessType: "topup",
      walletOwner: "apay",
      sourceProductId: carrier.id,
      productName: carrier.name,
      productMeta: carrier.metaData,
      userId,
      topupRate: (_f = (_e = rules.options[quote.currency]) == null ? void 0 : _e.rate) != null ? _f : 1,
      topupRateDirection: "payment_to_recharge"
    }
  });
  const relayOrderMeta = mergeMinimalCheckoutMeta({
    ...orderMetaObj,
    currencySnapshot: {
      baseAmount: quote.rechargeAmount,
      baseCurrency: quote.accountingCurrency,
      amount: quote.amount,
      currency: quote.currency,
      exchangeRate,
      source: "topup-rules"
    }
  }, bridgeMeta);
  await db.insert(orders).values({
    id: orderId,
    productId: carrier.id,
    amount: quote.amount,
    currency: quote.currency,
    source: "minimal_checkout",
    externalOrderId: orderId,
    status: ORDER_STATUS.NONE,
    payStatus: ORDER_PAY_STATUS.PENDING,
    contactEmail,
    payMethod: "none",
    visitorId,
    userId,
    metaData: prepareOrderMetaForInsert(relayOrderMeta),
    createdAt: /* @__PURE__ */ new Date()
  });
  try {
    await createTopupRecord({
      orderId,
      userId: Number(userId),
      paymentAmount: quote.amount,
      paymentCurrency: quote.currency,
      creditAmount: quote.rechargeAmount,
      creditCurrency: quote.accountingCurrency,
      exchangeRate,
      balanceType: "cash",
      source: "quick_topup",
      createdAt: /* @__PURE__ */ new Date()
    });
  } catch (error) {
    await db.update(orders).set({ payStatus: ORDER_PAY_STATUS.FAILED, status: ORDER_STATUS.FAILED }).where(eq(orders.id, orderId));
    throw error;
  }
  await createOrderAttribution({
    orderId,
    buyerUserId: userId,
    metaData: relayOrderMeta
  });
  await trackVisitorEvent(event, {
    visitorId,
    userId,
    orderId,
    productId: carrier.id,
    eventName: "begin_checkout"
  });
  await createNotification({
    userId,
    visitorId,
    type: "order_pending",
    title: messages.pendingTitle,
    message: messages.pendingMessage(quote.amount, quote.currency, quote.rechargeAmount, quote.accountingCurrency),
    data: { orderId, payStatus: "pending", targetPath: `/payment/${orderId}` }
  });
  return {
    code: 0,
    message: messages.created,
    data: {
      id: orderId,
      amount: quote.amount,
      currency: quote.currency,
      rechargeAmount: quote.rechargeAmount,
      accountingCurrency: quote.accountingCurrency
    }
  };
});

export { topup_post as default };
