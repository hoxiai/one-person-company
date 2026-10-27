import { d as defineEventHandler, c as getRequestLocale, r as readBody, dW as resolveOrderAccess, av as getSiteLocaleConfig, aw as resolveRequestLocale, e0 as lockLegacyPendingOrderCurrency, b as db, aF as paymentMethods, aH as applyLocalPaymentPluginDefaults, e1 as isPaymentMethodAvailableForLocale, e2 as resolvePaymentPluginConfig, e3 as isPaymentMethodCurrencySupported, e4 as sortPaymentMethodsByGeo } from '../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import fs from 'fs';
import path from 'path';
import 'node:crypto';
import 'crypto';
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

const info_post = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    orderIdRequired: "\u8BA2\u5355 ID \u4E0D\u80FD\u4E3A\u7A7A",
    noActiveMethods: "\u5F53\u524D\u6CA1\u6709\u53EF\u7528\u7684\u652F\u4ED8\u65B9\u5F0F",
    emptyContent: "\u6240\u6709\u542F\u7528\u652F\u4ED8\u65B9\u5F0F\u7684\u652F\u4ED8\u8BF4\u660E\u5185\u5BB9\u5747\u4E3A\u7A7A",
    currencyUnsupported: (currency) => `\u5F53\u524D\u6CA1\u6709\u652F\u6301 ${currency} \u7ED3\u7B97\u7684\u652F\u4ED8\u65B9\u5F0F`,
    internalError: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF"
  } : {
    orderIdRequired: "Order ID is required",
    noActiveMethods: "No active payment methods available",
    emptyContent: "Payment info content is empty for all active methods",
    currencyUnsupported: (currency) => `No payment method supports ${currency} settlement`,
    internalError: "Internal server error"
  };
  try {
    const body = await readBody(event);
    const { orderId, locale: inputLocale } = body;
    if (!orderId) {
      return { code: 1, message: messages.orderIdRequired };
    }
    let { order } = await resolveOrderAccess(event, String(orderId));
    const localeConfig = await getSiteLocaleConfig();
    const requestLocale = resolveRequestLocale(event, inputLocale, localeConfig);
    order = await lockLegacyPendingOrderCurrency(order, requestLocale);
    let activeMethods = (await db.select().from(paymentMethods).where(eq(paymentMethods.isActive, true))).map((method) => applyLocalPaymentPluginDefaults({ ...method }));
    const localeFilteredMethods = activeMethods.filter((method) => isPaymentMethodAvailableForLocale(method, requestLocale, localeConfig));
    activeMethods = localeFilteredMethods;
    if (activeMethods.length === 0) {
      return { code: 1, message: messages.noActiveMethods };
    }
    const availableMethods = [];
    let currencyMismatchCount = 0;
    let currencyCompatibleCount = 0;
    for (const method of activeMethods) {
      const methodCode = method.code;
      let rawHtml = "";
      const configObj = resolvePaymentPluginConfig(methodCode, method.configJson);
      const orderCurrency2 = String(order.currency || "USD").trim().toUpperCase();
      if (!isPaymentMethodCurrencySupported(configObj, orderCurrency2)) {
        currencyMismatchCount++;
        continue;
      }
      currencyCompatibleCount++;
      rawHtml = method.info || "";
      if (!rawHtml.trim()) {
        const localFilePath = path.join(process.cwd(), "payments", methodCode, "info.html");
        const localFileLowerPath = path.join(process.cwd(), "payments", String(methodCode).toLowerCase(), "info.html");
        try {
          if (fs.existsSync(localFilePath)) {
            rawHtml = fs.readFileSync(localFilePath, "utf-8");
          } else if (fs.existsSync(localFileLowerPath)) {
            rawHtml = fs.readFileSync(localFileLowerPath, "utf-8");
          }
        } catch (err) {
          console.warn(`Failed to read local info.html for ${methodCode}`, err);
        }
      }
      if (!rawHtml) continue;
      let content = rawHtml.replace(/\{\$orderId\}/g, orderId);
      content = content.replace(/\{\$amount\}/g, order.amount.toString());
      content = content.replace(/\{\$currency\}/g, String(order.currency || "USD"));
      content = content.replace(/\{\$productId\}/g, order.productId.toString());
      for (const [key, value] of Object.entries(configObj)) {
        if (/(secret|private|password|token|mchkey|apikey|signkey|cert|pem)/i.test(key)) continue;
        const regex = new RegExp(`\\{\\$config\\.${key}\\}`, "g");
        content = content.replace(regex, String(value));
      }
      availableMethods.push({
        code: method.code,
        name: method.name,
        iconUrl: method.iconUrl,
        content,
        configObj
      });
    }
    if (availableMethods.length === 0) {
      if (currencyCompatibleCount === 0 && currencyMismatchCount > 0) {
        return { code: 1, message: messages.currencyUnsupported(String(order.currency || "USD")) };
      }
      return { code: 1, message: messages.emptyContent };
    }
    const { methods: geoSortedMethods, visitorCountry } = await sortPaymentMethodsByGeo(event, availableMethods);
    const combinedContent = geoSortedMethods.map((m) => m.content).join("\n");
    let parsedMeta = {};
    if (order.metaData) {
      if (typeof order.metaData === "string") {
        try {
          parsedMeta = JSON.parse(order.metaData);
        } catch (e) {
          parsedMeta = {};
        }
      } else if (typeof order.metaData === "object" && !Array.isArray(order.metaData)) {
        parsedMeta = order.metaData;
      }
    }
    const rawDiscountDetails = parsedMeta.discountDetails || ((_a = parsedMeta.currencySnapshot) == null ? void 0 : _a.discountDetails) || null;
    const snapshot = parsedMeta.currencySnapshot && typeof parsedMeta.currencySnapshot === "object" ? parsedMeta.currencySnapshot : null;
    const orderCurrency = String(order.currency || (snapshot == null ? void 0 : snapshot.payableCurrency) || (snapshot == null ? void 0 : snapshot.currency) || "USD").trim().toUpperCase() || "USD";
    const baseCurrency = String((snapshot == null ? void 0 : snapshot.baseCurrency) || (rawDiscountDetails == null ? void 0 : rawDiscountDetails.baseCurrency) || orderCurrency).trim().toUpperCase() || orderCurrency;
    const exchangeRate = Number((_c = (_b = snapshot == null ? void 0 : snapshot.exchangeRate) != null ? _b : rawDiscountDetails == null ? void 0 : rawDiscountDetails.exchangeRate) != null ? _c : 1);
    const safeRate = Number.isFinite(exchangeRate) && exchangeRate > 0 ? exchangeRate : 1;
    let discountDetails = rawDiscountDetails;
    if (rawDiscountDetails && typeof rawDiscountDetails === "object") {
      const originalBaseAmount = Number(rawDiscountDetails.originalBaseAmount || 0);
      const discountBaseAmount = Number(rawDiscountDetails.discountBaseAmount || 0);
      const hasExplicitDisplayAmounts = String(rawDiscountDetails.currency || "").trim().toUpperCase() === orderCurrency && Number.isFinite(Number(rawDiscountDetails.originalAmount)) && Number.isFinite(Number(rawDiscountDetails.discountAmount));
      const originalAmount = hasExplicitDisplayAmounts ? Number(rawDiscountDetails.originalAmount) : orderCurrency === baseCurrency ? originalBaseAmount : Number((originalBaseAmount * safeRate).toFixed(2));
      const discountAmount = hasExplicitDisplayAmounts ? Number(rawDiscountDetails.discountAmount) : orderCurrency === baseCurrency ? discountBaseAmount : Math.max(0, Number((originalAmount - Number(order.amount || 0)).toFixed(2)));
      discountDetails = {
        ...rawDiscountDetails,
        currency: orderCurrency,
        baseCurrency,
        exchangeRate: safeRate,
        originalAmount,
        discountAmount
      };
    }
    return {
      code: 0,
      data: {
        methods: geoSortedMethods,
        visitorCountry,
        amount: order.amount,
        currency: String(order.currency || "USD"),
        discountDetails,
        content: combinedContent
        // 保留这个字段，确保旧版 UI / 其它地方调用不报错
      }
    };
  } catch (error) {
    if (error == null ? void 0 : error.statusCode) throw error;
    return { code: 1, message: error.message || messages.internalError };
  }
});

export { info_post as default };
//# sourceMappingURL=info.post.mjs.map
