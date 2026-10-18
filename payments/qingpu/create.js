const order = payload.order || {};
const orderMeta = order.metaData && typeof order.metaData === "object" ? order.metaData : {};
const callbackUrl = String(payload.callbackUrl || "").trim();
const returnUrl = String(payload.returnUrl || "").trim();
const cancelUrl = String(payload.cancelUrl || "").trim();

const normalizeBaseUrl = (value) => String(value || "").trim().replace(/\/+$/, "");
const normalizePath = (value, fallback) => {
  const path = String(value || fallback || "").trim();
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
};
const normalizeCurrency = (value, fallback) => {
  const currency = String(value || fallback || "").trim().toUpperCase();
  return currency || String(fallback || "").trim().toUpperCase();
};
const normalizeAmount = (value) => {
  const amount = Number(value);
  return Number.isFinite(amount) ? amount : 0;
};
const roundMoney = (value) => Math.round(Number(value || 0) * 100) / 100;
const formatMoney = (value) => {
  const n = roundMoney(value);
  const str = n.toFixed(2);
  return str;
};
const renderTemplate = (template, vars) => {
  if (typeof template !== "string" || !template) return "";
  return template.replace(/\{([a-zA-Z0-9_]+)\}/g, (_, key) => {
    const v = vars && Object.prototype.hasOwnProperty.call(vars, key) ? vars[key] : "";
    return v == null ? "" : String(v);
  });
};
const pickLocaleValue = (node, locale, fallbackLocale) => {
  if (!node || typeof node !== "object") return String(node || "");
  const l = String(locale || "").toLowerCase();
  const f = String(fallbackLocale || "zh").toLowerCase();
  if (l && node[l]) return String(node[l]);
  if (node[f]) return String(node[f]);
  const first = Object.values(node).find((v) => typeof v === "string" && v.trim() !== "");
  return first ? String(first) : "";
};

const checkoutSecret = String(config.checkoutSecret || config.secret || "").trim();
const createPath = normalizePath(config.createPath, "/api/minimal/checkout/create");
const originFromCallback = callbackUrl ? new URL(callbackUrl).origin : "";
const checkoutBaseUrl = normalizeBaseUrl(config.checkoutBaseUrl || config.baseUrl || originFromCallback);
const originalAmount = normalizeAmount(order.amount);
const topupMeta = orderMeta.topup && typeof orderMeta.topup === "object" ? orderMeta.topup : null;
const originalCurrency = normalizeCurrency(
  (topupMeta && topupMeta.currency)
    || orderMeta.currency
    || orderMeta.orderCurrency
    || orderMeta.sourceCurrency
    || orderMeta.displayCurrency
    || config.sourceCurrency,
  "CNY",
);
const settlementCurrency = normalizeCurrency(config.settlementCurrency, "CNY");
const usdToCnyRate = Number(config.usdToCnyRate ?? config.exchangeRate ?? 7.2);

if (!checkoutBaseUrl) {
  return {
    ok: false,
    message: "Qingpu checkout base URL is missing",
  };
}

if (!checkoutSecret) {
  return {
    ok: false,
    message: "Qingpu checkout secret is missing",
  };
}

const originalProductId = Number(order.productId || 0);
const configuredTopupProductId = Number(config.topupProductId || 0);
const isQuickTopup = !!topupMeta;
const isTopupOrder = isQuickTopup
  || (String(orderMeta.balance_type || "").toLowerCase() === "cash" && normalizeAmount(orderMeta.recharge_amount) > 0);

let resolvedProductId = undefined;
if (Number.isInteger(configuredTopupProductId) && configuredTopupProductId > 0) {
  resolvedProductId = configuredTopupProductId;
}

const externalOrderId = String(order.id || "").trim();
if (!externalOrderId) {
  return {
    ok: false,
    message: "Qingpu payment requires a valid order id",
  };
}

if (!(originalAmount > 0)) {
  return {
    ok: false,
    message: "Qingpu payment requires a valid order amount",
  };
}

let settlementAmount = originalAmount;
let appliedExchangeRate = null;

if (originalCurrency === "USD" && settlementCurrency === "CNY") {
  if (!(usdToCnyRate > 0)) {
    return {
      ok: false,
      message: "Qingpu USD->CNY exchange rate is invalid",
    };
  }

  appliedExchangeRate = usdToCnyRate;
  settlementAmount = roundMoney(originalAmount * usdToCnyRate);
}

const requestLocale = String(
  (payload.request && payload.request.headers && (payload.request.headers["x-locale"] || payload.request.headers["accept-language"])) || "zh"
).toLowerCase();
const displayLocale = requestLocale.startsWith("zh") ? "zh" : "en";

const productVars = {
  amount: formatMoney(originalAmount),
  currency: originalCurrency,
  settlementAmount: formatMoney(settlementAmount),
  settlementCurrency,
  rechargeAmount: formatMoney(
    normalizeAmount(orderMeta.recharge_amount) > 0
      ? orderMeta.recharge_amount
      : (topupMeta ? normalizeAmount(topupMeta.paidAmount) : 0)
  ),
  accountingCurrency: String(
    (topupMeta && topupMeta.accountingCurrency)
      || orderMeta.display_unit
      || "Credits"
  ).trim() || "Credits",
  rate: topupMeta && topupMeta.rate ? String(topupMeta.rate) : "1",
};

let productName = "";
let productDescription = "";
const productImageUrl = "";
const productMeta = {};

if (isQuickTopup) {
  const nameTemplate = pickLocaleValue(config.topupProductNameTemplate, displayLocale, "zh");
  const descTemplate = pickLocaleValue(config.topupProductDescriptionTemplate, displayLocale, "zh");
  productName = renderTemplate(
    nameTemplate || (displayLocale === "zh" ? "充值 {amount} {currency}" : "Top-up {amount} {currency}"),
    productVars,
  );
  productDescription = renderTemplate(
    descTemplate || (displayLocale === "zh"
      ? "充值成功后，{rechargeAmount} {accountingCurrency} 将自动到账你的账户余额。充值币种：{currency}，汇率：{rate}"
      : "Once confirmed, {rechargeAmount} {accountingCurrency} will be credited to your balance. Source: {currency}, rate: {rate}"),
    productVars,
  );
  productMeta.kind = "quick-topup";
  productMeta.originalSku = "quick-topup";
  productMeta.sourceCurrency = originalCurrency;
  productMeta.sourceAmount = originalAmount;
} else if (isTopupOrder) {
  const base = displayLocale === "zh" ? "充值订单" : "Top-up Order";
  productName = `${base} ${formatMoney(originalAmount)} ${originalCurrency}`;
  productDescription = displayLocale === "zh"
    ? `支付成功后，${formatMoney(productVars.rechargeAmount)} ${productVars.accountingCurrency} 将发放至你的账户余额。`
    : `Upon successful payment, ${formatMoney(productVars.rechargeAmount)} ${productVars.accountingCurrency} will be added to your account balance.`;
  productMeta.kind = "topup-product";
  productMeta.originalProductId = originalProductId;
} else {
  productMeta.originalProductId = originalProductId;
  const translations = orderMeta.translations && typeof orderMeta.translations === 'object' ? orderMeta.translations : null;
  const localizedInfo = translations && translations[displayLocale] ? translations[displayLocale] : null;
  productName = (localizedInfo && localizedInfo.name)
    || orderMeta.product_name
    || orderMeta.name
    || order.productName
    || (displayLocale === "zh" ? "轻铺订阅套餐" : "Qingpu Subscription Plan");
  productDescription = (localizedInfo && localizedInfo.description)
    || orderMeta.product_description
    || orderMeta.description
    || undefined;
}

const requestBody = {
  externalOrderId,
  productId: resolvedProductId,
  amount: settlementAmount,
  currency: settlementCurrency,
  sourceAmount: originalAmount,
  sourceCurrency: originalCurrency,
  exchangeRate: appliedExchangeRate || undefined,
  customerEmail: order.contactEmail || undefined,
  notifyUrl: callbackUrl || undefined,
  returnUrl: returnUrl || undefined,
  cancelUrl: cancelUrl || undefined,
  productName: productName || undefined,
  productDescription: productDescription || undefined,
  productImageUrl: productImageUrl || undefined,
  productMeta: Object.keys(productMeta).length > 0 ? productMeta : undefined,
  attach: {
    source: "payments/qingpu",
    originalOrderId: externalOrderId,
    originalProductId,
    resolvedProductId,
    isTopupOrder,
    isQuickTopup,
    originalAmount,
    originalCurrency,
    settlementAmount,
    settlementCurrency,
    exchangeRate: appliedExchangeRate,
    display: {
      locale: displayLocale,
      productName: productName || null,
      productDescription: productDescription || null,
      productImageUrl: productImageUrl || null,
    },
  },
};

const rawBody = JSON.stringify(requestBody);
const timestamp = Date.now().toString();
const bodyHash = crypto.sha256(rawBody);
const signatureBase = ["POST", createPath, bodyHash].join("\n");
const signature = crypto.hmacSha256(`${timestamp}\n${signatureBase}`, checkoutSecret);

try {
  const response = await fetch(`${checkoutBaseUrl}${createPath}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-APay-Timestamp": timestamp,
      "X-APay-Signature": signature,
      "X-APayShop-Timestamp": timestamp,
      "X-APayShop-Signature": signature,
    },
    body: rawBody,
  });

  const data = await response.json().catch(() => null);
  if (!response.ok || !data) {
    return {
      ok: false,
      message: data?.message || `Qingpu checkout request failed (${response.status})`,
      responseBody: data,
    };
  }

  const targetOrderId = data.data?.orderId ? String(data.data.orderId).trim() : '';
  let paymentUrl = '';
  if (targetOrderId) {
    paymentUrl = `${checkoutBaseUrl}/payment/mini/${encodeURIComponent(targetOrderId)}`;
  } else {
    paymentUrl = String(data.data?.checkoutUrl || '');
  }

  return {
    ok: true,
    paymentUrl,
    tradeType: "iframe",
    tradeNo: targetOrderId || undefined,
    responseBody: {
      ...data,
      settlement: {
        originalAmount,
        originalCurrency,
        settlementAmount,
        settlementCurrency,
        exchangeRate: appliedExchangeRate,
      },
      product: {
        resolvedProductId,
        originalProductId,
        productName,
        productDescription,
        productImageUrl,
      },
    },
  };
} catch (error) {
  return {
    ok: false,
    message: `Qingpu checkout request failed: ${error.message}`,
  };
}
