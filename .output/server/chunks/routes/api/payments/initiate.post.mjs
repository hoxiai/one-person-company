import { d as defineEventHandler, ab as requireTrustedRequestOrigin, c as getRequestLocale, r as readBody, bZ as resolveOrderAccess, O as ORDER_PAY_STATUS, b as db, ao as paymentMethods, ad as getSiteLocaleConfig, ae as resolveRequestLocale, c6 as resolvePaymentPluginConfig, c8 as resolvePaymentMethodCurrencies, c7 as isPaymentMethodCurrencySupported, bU as getRequestIP, c9 as getRequestHeaders, ca as executeCreateScript, o as orders, aa as reconcileOrder } from '../../../nitro/nitro.mjs';
import fs from 'fs';
import path from 'path';
import { z } from 'zod';
import { eq, and, ne } from 'drizzle-orm';
import 'crypto';
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
  orderId: z.string().min(1),
  methodCode: z.string().min(1),
  locale: z.string().min(1).optional(),
  returnUrl: z.string().url().optional(),
  cancelUrl: z.string().url().optional(),
  successUrl: z.string().url().optional()
});
const initiate_post = defineEventHandler(async (event) => {
  try {
    const origin = requireTrustedRequestOrigin(event);
    const locale = getRequestLocale(event);
    const messages = locale === "zh" ? {
      invalidPayload: "\u652F\u4ED8\u8BF7\u6C42\u53C2\u6570\u65E0\u6548",
      alreadyPaid: "\u8BA2\u5355\u5DF2\u652F\u4ED8",
      methodNotFound: "\u652F\u4ED8\u65B9\u5F0F\u4E0D\u5B58\u5728\u6216\u672A\u542F\u7528",
      methodUnavailableForLocale: "\u5F53\u524D\u8BED\u8A00\u4E0B\u8BE5\u652F\u4ED8\u65B9\u5F0F\u4E0D\u53EF\u7528",
      createScriptMissing: (code) => `\u652F\u4ED8\u521B\u5EFA\u811A\u672C\u7F3A\u5931\uFF1A${code}`,
      currencyMismatch: (methodCurrencies2, orderCurrency2) => `\u8BE5\u652F\u4ED8\u65B9\u5F0F\u652F\u6301 ${methodCurrencies2}\uFF0C\u4F46\u8BA2\u5355\u5E01\u79CD\u4E3A ${orderCurrency2}\uFF0C\u8BF7\u9009\u62E9\u652F\u6301 ${orderCurrency2} \u7684\u652F\u4ED8\u65B9\u5F0F\u3002`,
      initiateFailed: "\u53D1\u8D77\u652F\u4ED8\u5931\u8D25",
      alreadyPaidSynced: "\u8BE5\u8BA2\u5355\u5DF2\u652F\u4ED8\u6210\u529F\uFF0C\u72B6\u6001\u5DF2\u540C\u6B65",
      initiated: "\u652F\u4ED8\u53D1\u8D77\u6210\u529F",
      internalError: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF"
    } : {
      invalidPayload: "Invalid payment request",
      alreadyPaid: "Order already paid",
      methodNotFound: "Payment method not found or inactive",
      methodUnavailableForLocale: "Payment method is not available in current language",
      createScriptMissing: (code) => `Create script missing for ${code}`,
      currencyMismatch: (methodCurrencies2, orderCurrency2) => `This payment method supports ${methodCurrencies2}, but the order is in ${orderCurrency2}. Please choose a method that supports ${orderCurrency2}.`,
      initiateFailed: "Failed to initiate payment",
      alreadyPaidSynced: "This order was already paid; status has been synced",
      initiated: "Payment initiated successfully",
      internalError: "Internal server error"
    };
    const parsedBody = bodySchema.safeParse(await readBody(event));
    if (!parsedBody.success) {
      return { code: 1, message: messages.invalidPayload };
    }
    const body = parsedBody.data;
    const { order } = await resolveOrderAccess(event, body.orderId);
    if (order.payStatus === ORDER_PAY_STATUS.PAID) {
      return { code: 1, message: messages.alreadyPaid };
    }
    const methods = await db.select().from(paymentMethods).where(eq(paymentMethods.isActive, true));
    const method = methods.find((m) => String(m.code).toLowerCase() === body.methodCode.toLowerCase());
    if (!method) {
      return { code: 1, message: messages.methodNotFound };
    }
    const localeConfig = await getSiteLocaleConfig();
    const requestLocale = resolveRequestLocale(event, body.locale, localeConfig);
    let createScript = method.create || "";
    if (!createScript.trim()) {
      const localCreateScriptPath = path.join(process.cwd(), "payments", method.code, "create.js");
      const localCreateScriptLowerPath = path.join(process.cwd(), "payments", String(method.code).toLowerCase(), "create.js");
      if (fs.existsSync(localCreateScriptPath)) {
        createScript = fs.readFileSync(localCreateScriptPath, "utf-8");
      } else if (fs.existsSync(localCreateScriptLowerPath)) {
        createScript = fs.readFileSync(localCreateScriptLowerPath, "utf-8");
      }
    }
    if (!createScript.trim()) {
      return { code: 1, message: messages.createScriptMissing(method.code) };
    }
    const configJson = resolvePaymentPluginConfig(method.code, method.configJson);
    const methodCurrencies = resolvePaymentMethodCurrencies(configJson);
    const orderCurrency = String(order.currency || "").trim().toUpperCase();
    if (orderCurrency && !isPaymentMethodCurrencySupported(configJson, orderCurrency)) {
      return {
        code: 1,
        message: messages.currencyMismatch(methodCurrencies.join(" / "), orderCurrency)
      };
    }
    const callbackUrl = `${origin}/api/webhooks/${order.id}`;
    const returnUrl = body.returnUrl || body.successUrl || `${origin}/callback/${order.id}`;
    const cancelUrl = body.cancelUrl || `${origin}/callback/cancel?orderId=${order.id}`;
    const clientIp = getRequestIP(event, { xForwardedFor: true }) || event.node.req.socket.remoteAddress || "";
    const requestHeaders = getRequestHeaders(event);
    let orderMetaData = {};
    try {
      const parsedMetaData = typeof order.metaData === "string" ? JSON.parse(order.metaData) : order.metaData;
      if (parsedMetaData && typeof parsedMetaData === "object" && !Array.isArray(parsedMetaData)) {
        orderMetaData = parsedMetaData;
      }
    } catch {
    }
    const result = await executeCreateScript(createScript, {
      order: {
        id: order.id,
        amount: order.amount,
        currency: orderCurrency,
        productId: order.productId,
        contactEmail: order.contactEmail,
        metaData: {
          ...orderMetaData,
          currency: orderCurrency
        }
      },
      input: body,
      request: {
        clientIp,
        userAgent: requestHeaders["user-agent"] || "",
        headers: requestHeaders
      },
      callbackUrl,
      returnUrl,
      cancelUrl
    }, configJson);
    if (!result.ok || !result.paymentUrl && !result.qrCodeText) {
      await db.update(orders).set({ payMethod: method.code }).where(and(eq(orders.id, order.id), ne(orders.payStatus, ORDER_PAY_STATUS.PAID)));
      const reconciled = await reconcileOrder(order.id, "initiate-retry");
      if (reconciled.outcome === "paid" || reconciled.outcome === "already_paid") {
        return {
          code: 0,
          message: messages.alreadyPaidSynced,
          data: { alreadyPaid: true, tradeNo: reconciled.tradeNo }
        };
      }
      return { code: 1, message: result.message || messages.initiateFailed };
    }
    const updateData = { payMethod: method.code };
    if (result.tradeNo) updateData.tradeNo = result.tradeNo;
    await db.update(orders).set(updateData).where(eq(orders.id, order.id));
    return {
      code: 0,
      message: messages.initiated,
      data: {
        paymentUrl: result.paymentUrl,
        qrCodeText: result.qrCodeText,
        tradeType: result.tradeType,
        tradeNo: result.tradeNo,
        qrPayMode: result.qrPayMode
      }
    };
  } catch (error) {
    if (error == null ? void 0 : error.statusCode) throw error;
    const locale = getRequestLocale(event);
    return { code: 1, message: (error == null ? void 0 : error.message) || (locale === "zh" ? "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF" : "Internal server error") };
  }
});

export { initiate_post as default };
