import { d as defineEventHandler, ab as requireTrustedRequestOrigin, bH as mergePromoTracking, bJ as readPromoTracking, bI as capturePromoTracking, bU as getRequestIP, e as createError, r as readBody, bF as requireUserSession, b as db, u as users, X as clearUserSession, aG as settings, bC as ensureVisitorId, p as products, ae as resolveRequestLocale, ad as getSiteLocaleConfig, y as buildLocaleCurrencyQuote, ah as getMinimalCheckoutAdminConfig, bV as stripReservedOrderMeta, ai as buildMinimalCheckoutBridgeMeta, aj as mergeMinimalCheckoutMeta, _ as isMinimalCheckoutRelayOrder, bW as MINIMAL_CHECKOUT_SOURCE, a3 as fulfillMinimalCheckoutRelay, a4 as fulfillOrder, a6 as emitEvent, b8 as userWallets, o as orders, O as ORDER_PAY_STATUS, ak as prepareOrderMetaForInsert, am as ensureTopupRecordForOrder, a0 as createOrderAttribution, bm as trackVisitorEvent, al as ORDER_STATUS, bX as getAffectedRows, a1 as settlePaidTopup, c as getRequestLocale, J as getLocalizedSettingValue, K as sendEmail, bY as createNotification } from '../../../nitro/nitro.mjs';
import { eq, and, gte, desc } from 'drizzle-orm';
import crypto from 'crypto';
import { z } from 'zod';
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

const METADATA_MAX_BYTES = 16 * 1024;
const metaDataSchema = z.record(z.string(), z.any()).refine((obj) => Buffer.byteLength(JSON.stringify(obj), "utf8") <= METADATA_MAX_BYTES, {
  message: `metaData too large (max ${METADATA_MAX_BYTES} bytes)`
});
const orderSchema = z.object({
  email: z.string().email("Invalid email format").optional(),
  payMethod: z.string().optional(),
  locale: z.string().trim().min(1).max(35).optional(),
  metaData: metaDataSchema.optional(),
  // For service form answers or other custom data
  items: z.array(z.object({
    productId: z.number().int().positive(),
    productNum: z.number().int().positive()
  })).min(1, "At least one item is required")
});
const rateLimitMap = /* @__PURE__ */ new Map();
const isDeliverableEmail = (value) => {
  const email = String(value || "").trim();
  if (!email) return false;
  return !email.endsWith("@example.com");
};
const getPreferredLocale = (event) => getRequestLocale(event);
const parseOrderMetaData = (value) => {
  if (!value) return {};
  if (typeof value === "object" && !Array.isArray(value)) return value;
  try {
    const parsed = JSON.parse(String(value));
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
};
const matchesCurrencySnapshot = (value, snapshot) => {
  const current = parseOrderMetaData(value).currencySnapshot;
  if (!current || typeof current !== "object") return false;
  return current.locale === snapshot.locale && current.baseCurrency === snapshot.baseCurrency && Number(current.baseAmount) === Number(snapshot.baseAmount) && current.currency === snapshot.currency && Number(current.exchangeRate) === Number(snapshot.exchangeRate) && Number(current.amount) === Number(snapshot.amount) && current.source === snapshot.source;
};
const sendPendingOrderEmail = async (input) => {
  if (!isDeliverableEmail(input.email)) return;
  const recipient = String(input.email || "").trim();
  const nickname = String(input.nickname || recipient.split("@")[0] || "Customer").trim();
  const siteName = await getLocalizedSettingValue("site_name", input.locale, "APay");
  sendEmail({
    to: recipient,
    templateCode: "order_pending",
    locale: input.locale,
    variables: {
      nickname,
      order_id: input.orderId,
      product_name: input.productName,
      amount: `${Number(input.amount || 0).toFixed(2)} ${input.currency}`,
      currency: input.currency,
      site_name: siteName,
      site_url: input.siteUrl,
      payment_link: `${input.siteUrl}/payment/${input.orderId}`
    }
  }).catch((error) => {
    console.error("[Checkout] Failed to send pending payment email:", error);
  });
};
const createPendingOrderNotification = async (event, input) => {
  var _a, _b;
  const locale = getPreferredLocale(event);
  const title = locale === "zh" ? "\u8BA2\u5355\u5F85\u652F\u4ED8" : "Payment Pending";
  const message = locale === "zh" ? `\u60A8\u7684 ${input.productName} \u8BA2\u5355\u5DF2\u521B\u5EFA\uFF0C\u5F53\u524D\u5F85\u652F\u4ED8\u91D1\u989D\u4E3A ${Number(input.amount || 0).toFixed(2)} ${input.currency}\u3002\u70B9\u51FB\u7EE7\u7EED\u5B8C\u6210\u652F\u4ED8\u3002` : `Your ${input.productName} order has been created. ${Number(input.amount || 0).toFixed(2)} ${input.currency} is still pending payment.`;
  await createNotification({
    userId: (_a = input.userId) != null ? _a : null,
    visitorId: (_b = input.visitorId) != null ? _b : null,
    type: "order_pending",
    title,
    message,
    data: {
      orderId: input.orderId,
      payStatus: "pending",
      targetPath: `/payment/${input.orderId}`
    }
  });
};
const checkout_post = defineEventHandler(async (event) => {
  try {
    const siteUrl = requireTrustedRequestOrigin(event);
    const locale = getPreferredLocale(event);
    const messages = locale === "zh" ? {
      tooManyRequests: "\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002",
      guestCheckoutDisabled: "\u5F53\u524D\u672A\u5F00\u542F\u6E38\u5BA2\u4E0B\u5355\uFF0C\u8BF7\u5148\u767B\u5F55\u540E\u518D\u7EE7\u7EED\u8D2D\u4E70\u3002",
      multipleItemsUnsupported: "\u6682\u4E0D\u652F\u6301\u591A\u5546\u54C1\u540C\u65F6\u4E0B\u5355\uFF0C\u8BF7\u4E00\u6B21\u53EA\u8D2D\u4E70\u4E00\u4E2A\u5546\u54C1\u3002",
      invalidProductInfo: "\u5546\u54C1\u4FE1\u606F\u65E0\u6548",
      productNotFound: "\u5546\u54C1\u4E0D\u5B58\u5728",
      productUnavailable: "\u5546\u54C1\u5F53\u524D\u4E0D\u53EF\u552E",
      topupLoginRequired: "\u8BF7\u5148\u767B\u5F55\u540E\u518D\u5145\u503C",
      invalidTopupAmount: "\u5145\u503C\u5230\u8D26\u91D1\u989D\u5FC5\u987B\u5927\u4E8E 0",
      activeSubscriptionExists: "\u60A8\u5F53\u524D\u5DF2\u62E5\u6709\u66F4\u9AD8\u7B49\u7EA7\u7684\u6709\u6548\u8BA2\u9605\uFF0C\u6682\u4E0D\u652F\u6301\u964D\u7EA7\u8D2D\u4E70\u3002",
      purchaseLimitExceeded: "\u60A8\u5DF2\u8FBE\u5230\u8BE5\u5546\u54C1\u7684\u8D2D\u4E70\u4E0A\u9650\uFF0C\u65E0\u6CD5\u518D\u6B21\u8D2D\u4E70\u3002",
      purchaseLimitExceededWithCount: "\u8BE5\u5546\u54C1\u6BCF\u4EBA\u6700\u591A\u53EF\u8D2D\u4E70 {limit} \u6B21\uFF0C\u60A8\u5DF2\u8D2D\u4E70\u8FC7 {count} \u6B21\u3002",
      orderCreated: "\u8BA2\u5355\u521B\u5EFA\u6210\u529F",
      createOrderFailed: "\u521B\u5EFA\u8BA2\u5355\u5931\u8D25\uFF1A"
    } : {
      tooManyRequests: "Too many requests. Please try again later.",
      guestCheckoutDisabled: "Guest checkout is disabled. Please log in to continue your purchase.",
      multipleItemsUnsupported: "Multiple items are not supported yet, please checkout one product at a time",
      invalidProductInfo: "Invalid product information",
      productNotFound: "Product not found",
      productUnavailable: "Product is not available for sale",
      topupLoginRequired: "Please log in before topping up",
      invalidTopupAmount: "Top-up credit amount must be greater than 0",
      activeSubscriptionExists: "You already have an active higher-tier subscription. Downgrades are not supported.",
      purchaseLimitExceeded: "You have reached the purchase limit for this product.",
      purchaseLimitExceededWithCount: "This product can only be purchased {limit} time(s) per user. You have already purchased it {count} time(s).",
      orderCreated: "Order created successfully",
      createOrderFailed: "Failed to create order: "
    };
    const promoTracking = mergePromoTracking(
      readPromoTracking(event),
      await capturePromoTracking(event)
    );
    const ip = getRequestIP(event, { xForwardedFor: true }) || "unknown";
    const now = Date.now();
    let rateData = rateLimitMap.get(ip);
    if (!rateData || rateData.resetTime < now) {
      rateData = { count: 1, resetTime: now + 6e4 };
      rateLimitMap.set(ip, rateData);
    } else {
      rateData.count++;
      if (rateData.count > 5) {
        throw createError({ statusCode: 429, message: messages.tooManyRequests });
      }
    }
    const body = await readBody(event);
    const parsedResult = orderSchema.safeParse(body);
    if (!parsedResult.success) {
      return {
        code: 1,
        message: locale === "zh" ? "\u4E0B\u5355\u53C2\u6570\u65E0\u6548" : "Invalid checkout payload"
      };
    }
    const parsedBody = parsedResult.data;
    let userId = null;
    let userEmail = null;
    let userNickname = null;
    const session = await requireUserSession(event).catch(() => null);
    if (session && session.user) {
      userId = session.user.id;
      userEmail = String(session.user.email || "").trim() || null;
      userNickname = String(session.user.nickname || "").trim() || null;
      const userExists = await db.select({ id: users.id }).from(users).where(eq(users.id, userId)).limit(1);
      if (userExists.length === 0) {
        userId = null;
        userEmail = null;
        userNickname = null;
        await clearUserSession(event).catch(() => null);
      }
    }
    if (!userId) {
      const guestCheckoutSetting = await db.select().from(settings).where(eq(settings.key, "allow_guest_checkout")).limit(1);
      const allowGuestCheckout = guestCheckoutSetting.length > 0 ? guestCheckoutSetting[0].value === "true" : true;
      if (!allowGuestCheckout) {
        throw createError({ statusCode: 401, message: messages.guestCheckoutDisabled });
      }
    }
    const visitorId = ensureVisitorId(event);
    const contactEmail = parsedBody.email || userEmail || visitorId + "@example.com";
    if (parsedBody.items.length > 1) {
      return { code: 1, message: messages.multipleItemsUnsupported };
    }
    const firstItem = parsedBody.items[0];
    if (!firstItem) {
      return { code: 1, message: messages.invalidProductInfo };
    }
    const productId = firstItem.productId;
    const productNum = firstItem.productNum;
    const productList = await db.select().from(products).where(eq(products.id, productId));
    if (productList.length === 0) {
      return { code: 1, message: messages.productNotFound };
    }
    const product = productList[0];
    if (product.isActive === false || product.status === "inactive") {
      return { code: 1, message: messages.productUnavailable };
    }
    if (product.type === "topup" && !userId) {
      throw createError({ statusCode: 401, message: messages.topupLoginRequired });
    }
    let productMetaData = product.metaData || {};
    if (typeof productMetaData === "string") {
      try {
        productMetaData = JSON.parse(productMetaData);
      } catch (e) {
        productMetaData = {};
      }
    }
    const checkoutLocale = resolveRequestLocale(event, parsedBody.locale, await getSiteLocaleConfig());
    const currencyQuote = await buildLocaleCurrencyQuote(
      product.price * productNum,
      checkoutLocale
    );
    const totalAmount = currencyQuote.amount;
    const configuredRechargeAmount = Number(productMetaData.recharge_amount || 0);
    const rechargeAmount = configuredRechargeAmount > 0 ? configuredRechargeAmount : currencyQuote.baseAmount;
    if (product.type === "topup" && (!(totalAmount > 0) || !(rechargeAmount > 0))) {
      throw createError({ statusCode: 400, message: messages.invalidTopupAmount });
    }
    const currencySnapshot = {
      locale: currencyQuote.locale,
      baseCurrency: currencyQuote.baseCurrency,
      baseAmount: currencyQuote.baseAmount,
      currency: currencyQuote.currency,
      exchangeRate: currencyQuote.rate,
      amount: currencyQuote.amount,
      source: currencyQuote.source
    };
    const minimalCheckoutConfig = await getMinimalCheckoutAdminConfig();
    const finalMetaData = {
      ...stripReservedOrderMeta(parsedBody.metaData),
      ...productMetaData.plan_ids ? { plan_ids: productMetaData.plan_ids } : {},
      ...promoTracking.inviteCode ? { inviteCode: promoTracking.inviteCode } : {},
      ...promoTracking.promoCode ? { promoCode: promoTracking.promoCode } : {},
      ...promoTracking.agentCode ? { agentCode: promoTracking.agentCode } : {},
      order_quantity: productNum,
      currencySnapshot
    };
    const buildRelayOrderMeta = (externalOrderId) => {
      const rechargeCurrency = String(
        productMetaData.display_unit || currencyQuote.baseCurrency
      ).trim().toUpperCase();
      const balanceType = String(productMetaData.balance_type || "").trim().toLowerCase() === "grant" ? "grant" : "cash";
      const bridgeMeta = buildMinimalCheckoutBridgeMeta({
        externalOrderId,
        sourceProductId: product.id,
        amount: currencyQuote.amount,
        currency: currencyQuote.currency,
        sourceAmount: currencyQuote.baseAmount,
        sourceCurrency: currencyQuote.baseCurrency,
        exchangeRate: currencyQuote.rate,
        rechargeAmount,
        rechargeCurrency,
        balanceType,
        notifyUrl: minimalCheckoutConfig.defaultNotifyUrl || void 0,
        returnUrl: minimalCheckoutConfig.defaultReturnUrl || void 0,
        cancelUrl: minimalCheckoutConfig.defaultCancelUrl || void 0,
        customerEmail: contactEmail,
        attach: {
          channel: "storefront",
          businessType: product.type,
          sourceProductId: product.id,
          productName: product.name,
          productDescription: product.description,
          productImageUrl: product.imageUrl,
          productMeta: productMetaData,
          quantity: productNum,
          userId,
          walletOwner: product.type === "topup" ? "apay" : "external"
        }
      });
      return mergeMinimalCheckoutMeta(finalMetaData, bridgeMeta);
    };
    const fulfillFreeRelayOrder = async (targetOrderId, metaData) => {
      const isMinimalRelay = isMinimalCheckoutRelayOrder({ source: MINIMAL_CHECKOUT_SOURCE, metaData });
      const fulfilled = isMinimalRelay ? await fulfillMinimalCheckoutRelay(targetOrderId) : await fulfillOrder(targetOrderId);
      if (!fulfilled) return;
      await emitEvent("order.paid", fulfilled);
    };
    if (product.type === "subscription" && userId) {
      const productLevel = productMetaData == null ? void 0 : productMetaData.level;
      if (productLevel !== void 0) {
        const walletRecord = await db.select({ tierLevel: userWallets.tierLevel, subExpiresAt: userWallets.subExpiresAt }).from(userWallets).where(eq(userWallets.userId, userId)).limit(1);
        const wallet = walletRecord[0];
        const walletActive = Boolean((wallet == null ? void 0 : wallet.subExpiresAt) && new Date(wallet.subExpiresAt).getTime() > Date.now());
        const currentLevel = walletActive ? wallet.tierLevel || 0 : 0;
        if (Number(productLevel) < Number(currentLevel)) {
          throw createError({
            statusCode: 409,
            message: messages.activeSubscriptionExists
          });
        }
      }
    }
    {
      const rawLimit = productMetaData == null ? void 0 : productMetaData.perUserLimit;
      const explicitLimit = Number.isFinite(Number(rawLimit)) ? Number(rawLimit) : null;
      const effectiveLimit = explicitLimit !== null && explicitLimit > 0 ? Math.floor(explicitLimit) : explicitLimit !== null && explicitLimit === 0 ? null : totalAmount <= 0 ? 1 : null;
      if (effectiveLimit !== null && effectiveLimit > 0) {
        const paidCountQuery = db.select({ id: orders.id }).from(orders).where(
          and(
            eq(orders.payStatus, ORDER_PAY_STATUS.PAID),
            eq(orders.productId, productId),
            userId ? eq(orders.userId, userId) : eq(orders.visitorId, visitorId)
          )
        );
        const paidRows = await paidCountQuery;
        const paidCount = paidRows.length;
        if (paidCount >= effectiveLimit) {
          const message = locale === "zh" ? `\u8BE5\u5546\u54C1\u6BCF\u4EBA\u6700\u591A\u53EF\u8D2D\u4E70 ${effectiveLimit} \u6B21\uFF0C\u60A8\u5DF2\u8D2D\u4E70\u8FC7 ${paidCount} \u6B21\u3002` : `This product can only be purchased ${effectiveLimit} time(s) per user. You have already purchased it ${paidCount} time(s).`;
          throw createError({
            statusCode: 409,
            message
          });
        }
      }
    }
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1e3);
    const existingPendingOrders = await db.select().from(orders).where(
      and(
        eq(orders.payStatus, ORDER_PAY_STATUS.PENDING),
        eq(orders.productId, productId),
        eq(orders.visitorId, visitorId),
        // 必须是同一个访客
        gte(orders.createdAt, oneHourAgo)
        // 必须是1小时内的订单
      )
    ).orderBy(desc(orders.createdAt)).limit(1);
    if (existingPendingOrders.length > 0) {
      const pendingOrder = existingPendingOrders[0];
      if (pendingOrder.amount === totalAmount && pendingOrder.currency === currencyQuote.currency && matchesCurrencySnapshot(pendingOrder.metaData, currencySnapshot)) {
        const relayOrderMeta2 = buildRelayOrderMeta(pendingOrder.id);
        const updates = {
          source: "minimal_checkout",
          externalOrderId: pendingOrder.id,
          metaData: prepareOrderMetaForInsert(relayOrderMeta2)
        };
        if (pendingOrder.contactEmail !== contactEmail) updates.contactEmail = contactEmail;
        if (userId && pendingOrder.userId !== userId) updates.userId = userId;
        if (Object.keys(updates).length > 0) {
          await db.update(orders).set(updates).where(eq(orders.id, pendingOrder.id));
        }
        if (product.type === "topup") {
          await ensureTopupRecordForOrder(pendingOrder.id);
        }
        await createOrderAttribution({
          orderId: pendingOrder.id,
          buyerUserId: userId,
          metaData: relayOrderMeta2
        });
        await trackVisitorEvent(event, {
          visitorId,
          userId,
          orderId: pendingOrder.id,
          productId,
          eventName: "begin_checkout"
        });
        let isFreeOrder2 = false;
        if (totalAmount <= 0) {
          const claim = await db.update(orders).set({
            payStatus: ORDER_PAY_STATUS.PAID,
            status: ORDER_STATUS.PROCESSING,
            paidAt: /* @__PURE__ */ new Date()
          }).where(and(
            eq(orders.id, pendingOrder.id),
            eq(orders.payStatus, ORDER_PAY_STATUS.PENDING)
          ));
          if (getAffectedRows(claim) > 0) {
            if (product.type === "topup") await settlePaidTopup(pendingOrder.id);
            await fulfillFreeRelayOrder(pendingOrder.id, relayOrderMeta2).catch(
              (e) => console.error("[Checkout] Free relay order reuse fulfillment failed:", pendingOrder.id, e)
            );
          }
          isFreeOrder2 = true;
        } else {
          await sendPendingOrderEmail({
            siteUrl,
            email: parsedBody.email || userEmail || pendingOrder.contactEmail,
            nickname: userNickname,
            orderId: pendingOrder.id,
            productName: product.name,
            amount: totalAmount,
            currency: currencyQuote.currency,
            locale: checkoutLocale
          });
        }
        return {
          code: 0,
          message: messages.orderCreated,
          data: {
            id: pendingOrder.id,
            // using orderId as checkoutId for now
            amount: totalAmount,
            currency: currencyQuote.currency,
            isFreeOrder: isFreeOrder2
          }
        };
      }
    }
    const productTypePrefix = (product.type || "OT").substring(0, 2).toUpperCase();
    const date = /* @__PURE__ */ new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dateStr = `${year}${month}${day}`;
    const timeSuffix = String(Date.now()).slice(-6);
    const randomHex = crypto.randomBytes(4).toString("hex").toUpperCase();
    const orderId = `${productTypePrefix}${dateStr}${timeSuffix}${randomHex}`;
    const isFreeOrder = totalAmount <= 0;
    const relayOrderMeta = buildRelayOrderMeta(orderId);
    const orderData = {
      id: orderId,
      productId,
      amount: totalAmount,
      currency: currencyQuote.currency,
      source: "minimal_checkout",
      externalOrderId: orderId,
      status: ORDER_STATUS.NONE,
      // Fulfillment status
      payStatus: isFreeOrder ? ORDER_PAY_STATUS.PAID : ORDER_PAY_STATUS.PENDING,
      // 0 元直接视为已支付
      paidAt: isFreeOrder ? /* @__PURE__ */ new Date() : null,
      contactEmail,
      payMethod: parsedBody.payMethod || "none",
      // Ensure payMethod is set here so Webhook can find it later
      visitorId,
      userId,
      // Link to registered user if logged in
      metaData: prepareOrderMetaForInsert(relayOrderMeta),
      createdAt: /* @__PURE__ */ new Date()
    };
    await db.insert(orders).values(orderData).returning();
    if (product.type === "topup") {
      try {
        await ensureTopupRecordForOrder(orderId);
      } catch (error) {
        await db.update(orders).set({ payStatus: ORDER_PAY_STATUS.FAILED, status: ORDER_STATUS.FAILED }).where(eq(orders.id, orderId));
        throw error;
      }
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
      productId,
      eventName: "begin_checkout"
    });
    if (isFreeOrder) {
      if (product.type === "topup") await settlePaidTopup(orderId);
      await fulfillFreeRelayOrder(orderId, relayOrderMeta).catch(
        (e) => console.error("[Checkout] Free relay order fulfillment failed:", orderId, e)
      );
    } else {
      await createPendingOrderNotification(event, {
        userId,
        visitorId,
        orderId,
        productName: product.name,
        amount: totalAmount,
        currency: currencyQuote.currency
      });
      await sendPendingOrderEmail({
        siteUrl,
        email: parsedBody.email || userEmail || contactEmail,
        nickname: userNickname,
        orderId,
        productName: product.name,
        amount: totalAmount,
        currency: currencyQuote.currency,
        locale: checkoutLocale
      });
    }
    return {
      code: 0,
      message: messages.orderCreated,
      data: {
        id: orderId,
        // using orderId as checkoutId for now
        amount: totalAmount,
        currency: currencyQuote.currency,
        isFreeOrder
      }
    };
  } catch (error) {
    const locale = getPreferredLocale(event);
    const failedPrefix = locale === "zh" ? "\u521B\u5EFA\u8BA2\u5355\u5931\u8D25\uFF1A" : "Failed to create order: ";
    const isAuthRequired = (error == null ? void 0 : error.statusCode) === 401;
    return {
      code: isAuthRequired ? 401 : 1,
      authRequired: isAuthRequired,
      message: `${failedPrefix}${error.message}`
    };
  }
});

export { checkout_post as default };
