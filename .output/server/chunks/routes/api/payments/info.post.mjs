import { d as defineEventHandler, c as getRequestLocale, r as readBody, bZ as resolveOrderAccess, ad as getSiteLocaleConfig, ae as resolveRequestLocale, c4 as lockLegacyPendingOrderCurrency, b as db, ao as paymentMethods, aq as applyLocalPaymentPluginDefaults, c5 as isPaymentMethodAvailableForLocale, c6 as resolvePaymentPluginConfig, c7 as isPaymentMethodCurrencySupported } from '../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import fs from 'fs';
import path from 'path';
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
import 'zod';
import 'node:child_process';
import 'node:os';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const info_post = defineEventHandler(async (event) => {
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
    if (localeFilteredMethods.length > 0) {
      activeMethods = localeFilteredMethods;
    }
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
      const orderCurrency = String(order.currency || "USD").trim().toUpperCase();
      if (!isPaymentMethodCurrencySupported(configObj, orderCurrency)) {
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
        const regex = new RegExp(`\\{\\$config\\.${key}\\}`, "g");
        content = content.replace(regex, String(value));
      }
      availableMethods.push({
        code: method.code,
        name: method.name,
        iconUrl: method.iconUrl,
        content
      });
    }
    if (availableMethods.length === 0) {
      if (currencyCompatibleCount === 0 && currencyMismatchCount > 0) {
        return { code: 1, message: messages.currencyUnsupported(String(order.currency || "USD")) };
      }
      return { code: 1, message: messages.emptyContent };
    }
    const combinedContent = availableMethods.map((m) => m.content).join("\n");
    return {
      code: 0,
      data: {
        methods: availableMethods,
        amount: order.amount,
        currency: String(order.currency || "USD"),
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
