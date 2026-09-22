import { d as defineEventHandler, c as getRequestLocale, g as getQuery, o as orders, p as products, u as users, b as db, r as readBody, e as createError, ab as requireTrustedRequestOrigin, ac as ensurePromoMember, ad as getSiteLocaleConfig, ae as resolveRequestLocale, af as resolveCurrencyRate, ag as roundCurrencyAmount, ah as getMinimalCheckoutAdminConfig, ai as buildMinimalCheckoutBridgeMeta, aj as mergeMinimalCheckoutMeta, O as ORDER_PAY_STATUS, ak as prepareOrderMetaForInsert, al as ORDER_STATUS, a0 as createOrderAttribution, am as ensureTopupRecordForOrder, a1 as settlePaidTopup, _ as isMinimalCheckoutRelayOrder, a3 as fulfillMinimalCheckoutRelay, a4 as fulfillOrder, a5 as settlePromoCommission, a6 as emitEvent, J as getLocalizedSettingValue, K as sendEmail, s as setAuditMeta } from '../../../nitro/nitro.mjs';
import { or, eq, and, ne, like, sql, count, desc } from 'drizzle-orm';
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

const manualOrderSchema = z.object({
  userId: z.union([z.number(), z.string()]).optional().nullable(),
  email: z.string().email().optional().nullable(),
  nickname: z.string().optional().nullable(),
  productId: z.union([z.number(), z.string()]),
  quantity: z.number().int().positive().optional().default(1),
  amount: z.number().min(0).optional().nullable(),
  currency: z.string().optional().nullable(),
  payStatus: z.enum(["pending", "paid"]).optional().default("paid"),
  payMethod: z.string().optional().nullable(),
  tradeNo: z.string().optional().nullable(),
  autoFulfill: z.boolean().optional().default(true),
  deliveryInfo: z.string().optional().nullable(),
  sendEmail: z.boolean().optional().default(false),
  metaData: z.record(z.string(), z.any()).optional().nullable(),
  locale: z.string().optional().nullable()
});
const index = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const locale = getRequestLocale(event);
  if (event.method === "GET") {
    const query = getQuery(event);
    const page = Math.max(parseInt(query.page) || 1, 1);
    const pageSize = Math.min(Math.max(parseInt(query.pageSize) || 15, 1), 100);
    const offset = (page - 1) * pageSize;
    const payStatus = String(query.payStatus || "").trim();
    const status = String(query.status || "").trim();
    const search = String(query.search || query.q || query.keyword || "").trim();
    const isDeletedQuery = payStatus === "deleted" || status === "deleted";
    const filterConditions = [];
    if (isDeletedQuery) {
      filterConditions.push(or(eq(orders.payStatus, "deleted"), eq(orders.status, "deleted")));
    } else {
      filterConditions.push(and(
        ne(orders.payStatus, "deleted"),
        ne(orders.status, "deleted")
      ));
      if (payStatus && payStatus !== "all") {
        filterConditions.push(eq(orders.payStatus, payStatus));
      }
      if (status && status !== "all") {
        filterConditions.push(eq(orders.status, status));
      }
    }
    if (search) {
      const searchPattern = `%${search.toLowerCase()}%`;
      filterConditions.push(or(
        like(sql`lower(${orders.id})`, searchPattern),
        like(sql`lower(coalesce(${orders.tradeNo}, ''))`, searchPattern),
        like(sql`lower(coalesce(${orders.contactEmail}, ''))`, searchPattern),
        like(sql`lower(coalesce(${orders.visitorId}, ''))`, searchPattern),
        like(sql`lower(coalesce(${products.name}, ''))`, searchPattern),
        like(sql`lower(coalesce(${users.email}, ''))`, searchPattern),
        like(sql`lower(coalesce(${users.nickname}, ''))`, searchPattern)
      ));
    }
    const whereClause = filterConditions.length > 0 ? and(...filterConditions) : void 0;
    const statsResult = await db.select({
      total: sql`SUM(CASE WHEN ${orders.payStatus} != 'deleted' AND ${orders.status} != 'deleted' THEN 1 ELSE 0 END)`,
      paid: sql`SUM(CASE WHEN ${orders.payStatus} = 'paid' AND ${orders.status} != 'deleted' THEN 1 ELSE 0 END)`,
      pending: sql`SUM(CASE WHEN ${orders.payStatus} = 'pending' AND ${orders.status} != 'deleted' THEN 1 ELSE 0 END)`,
      failed: sql`SUM(CASE WHEN ${orders.payStatus} = 'failed' AND ${orders.status} != 'deleted' THEN 1 ELSE 0 END)`,
      refunded: sql`SUM(CASE WHEN ${orders.payStatus} = 'refunded' AND ${orders.status} != 'deleted' THEN 1 ELSE 0 END)`,
      deleted: sql`SUM(CASE WHEN ${orders.payStatus} = 'deleted' OR ${orders.status} = 'deleted' THEN 1 ELSE 0 END)`
    }).from(orders);
    const stats = {
      total: Number(((_a = statsResult[0]) == null ? void 0 : _a.total) || 0),
      paid: Number(((_b = statsResult[0]) == null ? void 0 : _b.paid) || 0),
      pending: Number(((_c = statsResult[0]) == null ? void 0 : _c.pending) || 0),
      failed: Number(((_d = statsResult[0]) == null ? void 0 : _d.failed) || 0),
      refunded: Number(((_e = statsResult[0]) == null ? void 0 : _e.refunded) || 0),
      deleted: Number(((_f = statsResult[0]) == null ? void 0 : _f.deleted) || 0)
    };
    const totalQuery = db.select({ value: count() }).from(orders).leftJoin(products, eq(orders.productId, products.id)).leftJoin(users, eq(orders.userId, users.id));
    if (whereClause) {
      totalQuery.where(whereClause);
    }
    const totalResult = await totalQuery;
    const total = ((_g = totalResult[0]) == null ? void 0 : _g.value) || 0;
    const dataQuery = db.select({
      id: orders.id,
      amount: orders.amount,
      currency: orders.currency,
      status: orders.status,
      payStatus: orders.payStatus,
      contactEmail: orders.contactEmail,
      payMethod: orders.payMethod,
      tradeNo: orders.tradeNo,
      visitorId: orders.visitorId,
      createdAt: orders.createdAt,
      productName: products.name,
      productSlug: products.slug,
      productId: products.id,
      productImage: products.imageUrl,
      productType: products.type,
      userNickname: users.nickname,
      userEmail: users.email
    }).from(orders).leftJoin(products, eq(orders.productId, products.id)).leftJoin(users, eq(orders.userId, users.id));
    if (whereClause) {
      dataQuery.where(whereClause);
    }
    const result = await dataQuery.orderBy(desc(orders.createdAt)).limit(pageSize).offset(offset);
    return {
      data: result,
      total,
      page,
      pageSize,
      stats
    };
  }
  if (event.method === "POST") {
    const rawBody = await readBody(event);
    const parsed = manualOrderSchema.safeParse(rawBody);
    if (!parsed.success) {
      throw createError({
        statusCode: 400,
        message: ((_h = parsed.error.issues[0]) == null ? void 0 : _h.message) || (locale === "zh" ? "\u53C2\u6570\u9A8C\u8BC1\u5931\u8D25" : "Invalid request parameters")
      });
    }
    const body = parsed.data;
    const siteUrl = requireTrustedRequestOrigin(event);
    let userRecord = null;
    const rawUserId = body.userId ? Number(body.userId) : null;
    if (rawUserId && Number.isFinite(rawUserId) && rawUserId > 0) {
      const existingUser = await db.select().from(users).where(eq(users.id, rawUserId)).limit(1);
      if (existingUser.length > 0) {
        userRecord = existingUser[0];
      }
    }
    if (!userRecord) {
      const email = String(body.email || "").trim().toLowerCase();
      if (!email) {
        throw createError({
          statusCode: 400,
          message: locale === "zh" ? "\u5BA2\u6237\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A" : "Customer email is required"
        });
      }
      const existingByEmail = await db.select().from(users).where(eq(users.email, email)).limit(1);
      if (existingByEmail.length > 0) {
        userRecord = existingByEmail[0];
      } else {
        const nickname = String(body.nickname || "").trim() || email.split("@")[0] || "Customer";
        try {
          const newUser = await db.insert(users).values({
            email,
            nickname,
            createdAt: /* @__PURE__ */ new Date()
          }).returning();
          userRecord = newUser[0];
        } catch (err) {
          const raced = await db.select().from(users).where(eq(users.email, email)).limit(1);
          if (raced.length > 0) {
            userRecord = raced[0];
          } else {
            throw err;
          }
        }
        if (userRecord == null ? void 0 : userRecord.id) {
          await ensurePromoMember(userRecord.id).catch(() => {
          });
          await db.update(orders).set({ userId: userRecord.id }).where(eq(orders.contactEmail, userRecord.email)).catch(() => {
          });
        }
      }
    }
    if (!userRecord) {
      throw createError({
        statusCode: 400,
        message: locale === "zh" ? "\u65E0\u6CD5\u83B7\u53D6\u6216\u521B\u5EFA\u5BA2\u6237\u8D26\u53F7" : "Failed to resolve or create customer account"
      });
    }
    const targetProductId = Number(body.productId);
    const productList = await db.select().from(products).where(eq(products.id, targetProductId)).limit(1);
    if (productList.length === 0) {
      throw createError({
        statusCode: 400,
        message: locale === "zh" ? "\u5546\u54C1\u4E0D\u5B58\u5728" : "Product not found"
      });
    }
    const product = productList[0];
    const quantity = Math.max(1, body.quantity || 1);
    const defaultBaseTotal = Number(product.price || 0) * quantity;
    const hasCustomAmount = body.amount !== void 0 && body.amount !== null && Number.isFinite(Number(body.amount));
    const siteLocaleConfig = await getSiteLocaleConfig();
    const orderLocale = resolveRequestLocale(event, body.locale || void 0, siteLocaleConfig);
    const currencyInfo = await resolveCurrencyRate(body.currency, orderLocale);
    const finalCurrency = currencyInfo.targetCurrency;
    const exchangeRate = currencyInfo.rate;
    const baseCurrency = currencyInfo.baseCurrency;
    let actualAmount;
    let baseAmount;
    if (hasCustomAmount) {
      actualAmount = Math.max(0, Number(body.amount));
      baseAmount = exchangeRate > 0 ? roundCurrencyAmount(actualAmount / exchangeRate, baseCurrency) : roundCurrencyAmount(actualAmount, baseCurrency);
    } else {
      baseAmount = roundCurrencyAmount(defaultBaseTotal, baseCurrency);
      actualAmount = roundCurrencyAmount(baseAmount * exchangeRate, finalCurrency);
    }
    const currencySnapshot = {
      locale: currencyInfo.locale,
      baseCurrency,
      baseAmount,
      currency: finalCurrency,
      exchangeRate,
      amount: actualAmount,
      source: "admin_manual"
    };
    const productTypePrefix = (product.type || "OT").substring(0, 2).toUpperCase();
    const date = /* @__PURE__ */ new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dateStr = `${year}${month}${day}`;
    const timeSuffix = String(Date.now()).slice(-6);
    const randomHex = crypto.randomBytes(4).toString("hex").toUpperCase();
    const orderId = `${productTypePrefix}${dateStr}${timeSuffix}${randomHex}`;
    let productMetaData = product.metaData || {};
    if (typeof productMetaData === "string") {
      try {
        productMetaData = JSON.parse(productMetaData);
      } catch {
        productMetaData = {};
      }
    }
    const minimalCheckoutConfig = await getMinimalCheckoutAdminConfig();
    const configuredRechargeAmount = Number(productMetaData.recharge_amount || 0);
    const rechargeAmount = configuredRechargeAmount > 0 ? configuredRechargeAmount : baseAmount;
    const bridgeMeta = buildMinimalCheckoutBridgeMeta({
      externalOrderId: orderId,
      sourceProductId: product.id,
      amount: actualAmount,
      currency: finalCurrency,
      sourceAmount: baseAmount,
      sourceCurrency: baseCurrency,
      exchangeRate,
      rechargeAmount,
      rechargeCurrency: String(productMetaData.display_unit || baseCurrency).trim().toUpperCase(),
      balanceType: String(productMetaData.balance_type || "").trim().toLowerCase() === "grant" ? "grant" : "cash",
      notifyUrl: minimalCheckoutConfig.defaultNotifyUrl || void 0,
      returnUrl: minimalCheckoutConfig.defaultReturnUrl || void 0,
      cancelUrl: minimalCheckoutConfig.defaultCancelUrl || void 0,
      customerEmail: userRecord.email,
      attach: {
        channel: "admin_manual",
        businessType: product.type,
        sourceProductId: product.id,
        productName: product.name,
        productDescription: product.description,
        productImageUrl: product.imageUrl,
        productMeta: productMetaData,
        quantity,
        userId: userRecord.id,
        walletOwner: product.type === "topup" ? "apay" : "external"
      }
    });
    const finalMetaData = mergeMinimalCheckoutMeta({
      ...body.metaData || {},
      ...productMetaData.plan_ids ? { plan_ids: productMetaData.plan_ids } : {},
      currencySnapshot
    }, bridgeMeta);
    const isPaid = body.payStatus === ORDER_PAY_STATUS.PAID;
    const payMethod = body.payMethod ? String(body.payMethod).trim() : isPaid ? "manual" : "none";
    const tradeNo = body.tradeNo ? String(body.tradeNo).trim() : null;
    const deliveryInfo = body.deliveryInfo ? String(body.deliveryInfo).trim() : null;
    const orderData = {
      id: orderId,
      productId: product.id,
      amount: actualAmount,
      currency: finalCurrency,
      source: "minimal_checkout",
      externalOrderId: orderId,
      status: isPaid ? body.autoFulfill ? ORDER_STATUS.PROCESSING : ORDER_STATUS.NONE : ORDER_STATUS.NONE,
      payStatus: isPaid ? ORDER_PAY_STATUS.PAID : ORDER_PAY_STATUS.PENDING,
      paidAt: isPaid ? /* @__PURE__ */ new Date() : null,
      contactEmail: userRecord.email,
      payMethod,
      tradeNo,
      deliveryInfo,
      visitorId: null,
      userId: userRecord.id,
      metaData: prepareOrderMetaForInsert(finalMetaData),
      createdAt: /* @__PURE__ */ new Date()
    };
    const result = await db.insert(orders).values(orderData).returning();
    const createdOrder = result[0];
    if (isPaid) {
      await createOrderAttribution({
        orderId,
        buyerUserId: userRecord.id,
        metaData: finalMetaData
      }).catch((e) => console.error("[ManualOrder] createOrderAttribution failed:", e));
      if (product.type === "topup") {
        await ensureTopupRecordForOrder(orderId);
        await settlePaidTopup(orderId);
      }
      if (body.autoFulfill) {
        const isMinimalRelay = isMinimalCheckoutRelayOrder(createdOrder);
        const fulfilledOrder = isMinimalRelay ? await fulfillMinimalCheckoutRelay(orderId) : await fulfillOrder(orderId);
        if (fulfilledOrder) {
          await settlePromoCommission(orderId).catch((e) => console.error("[ManualOrder] settlePromoCommission failed:", e));
          await emitEvent("order.paid", fulfilledOrder).catch((e) => console.error("[ManualOrder] emitEvent failed:", e));
        }
      }
    }
    if (body.sendEmail) {
      const siteName = await getLocalizedSettingValue("site_name", orderLocale, "APay");
      if (!isPaid) {
        sendEmail({
          to: userRecord.email,
          templateCode: "order_pending",
          locale: orderLocale,
          variables: {
            nickname: userRecord.nickname || (userRecord.email ? userRecord.email.split("@")[0] : "User") || "User",
            order_id: orderId,
            product_name: product.name,
            amount: `${actualAmount.toFixed(2)} ${finalCurrency}`,
            currency: finalCurrency,
            site_name: siteName,
            site_url: siteUrl,
            payment_link: `${siteUrl}/payment/${orderId}`
          }
        }).catch((err) => console.error("[ManualOrder] Failed to send pending email:", err));
      }
    }
    setAuditMeta(event, {
      summary: `Created manual order ${orderId} for ${userRecord.email} (${actualAmount} ${finalCurrency}, ${isPaid ? "paid" : "pending"})`,
      details: {
        orderId,
        userId: userRecord.id,
        userEmail: userRecord.email,
        productId: product.id,
        productName: product.name,
        quantity,
        amount: actualAmount,
        currency: finalCurrency,
        payStatus: isPaid ? "paid" : "pending",
        payMethod,
        autoFulfill: body.autoFulfill
      }
    });
    return {
      code: 0,
      message: locale === "zh" ? "\u8BA2\u5355\u521B\u5EFA\u6210\u529F" : "Order created successfully",
      data: {
        id: orderId,
        order: createdOrder,
        paymentUrl: `${siteUrl}/payment/${orderId}`
      }
    };
  }
});

export { index as default };
