const headers = payload.headers || {};
const body = payload.body || {};
const rawBody = typeof payload.rawBody === "string" && payload.rawBody.trim().length > 0
  ? payload.rawBody
  : JSON.stringify(body || {});

const checkoutSecret = String(config.checkoutSecret || config.secret || "").trim();
const eventName = String(
  headers["x-apayshop-event"] || headers["x-apay-event"] || body.event || "",
).trim();
const timestamp = String(
  headers["x-apayshop-timestamp"] || headers["x-apay-timestamp"] || "",
).trim();
const signature = String(
  headers["x-apayshop-signature"] || headers["x-apay-signature"] || "",
).trim().toLowerCase();

if (!checkoutSecret) {
  return {
    isSignValid: false,
    orderId: String(payload.urlOrderId || "").trim(),
    status: "failed",
    responseBody: "fail: missing qingpu checkout secret",
  };
}

if (!timestamp || !signature || !rawBody) {
  return {
    isSignValid: false,
    orderId: String(payload.urlOrderId || "").trim(),
    status: "failed",
    responseBody: "fail: missing qingpu callback headers",
  };
}

const expectedSignature = crypto
  .hmacSha256(`${timestamp}\n${rawBody}`, checkoutSecret)
  .toLowerCase();

if (expectedSignature !== signature) {
  return {
    isSignValid: false,
    orderId: String(payload.urlOrderId || "").trim(),
    status: "failed",
    responseBody: "fail: invalid qingpu callback signature",
  };
}

const parsedTimestamp = /^\d+$/.test(timestamp) ? Number(timestamp) : NaN;
const timestampMs = Number.isFinite(parsedTimestamp)
  ? (parsedTimestamp < 1e12 ? parsedTimestamp * 1000 : parsedTimestamp)
  : NaN;
const nowMs = Number(payload.nowMs ?? config.nowMs ?? Date.now());
const maxTimestampSkewMs = Number(config.maxTimestampSkewMs ?? 300_000);
if (
  !Number.isFinite(timestampMs)
  || (Number.isFinite(nowMs) && maxTimestampSkewMs > 0 && Math.abs(nowMs - timestampMs) > maxTimestampSkewMs)
) {
  return {
    isSignValid: false,
    orderId: String(payload.urlOrderId || "").trim(),
    status: "failed",
    responseBody: "fail: expired or invalid qingpu callback timestamp",
  };
}

// The event header is outside the signed body; it must agree with that body.
if (eventName !== String(body.event || "")) {
  return { isSignValid: false, orderId: String(payload.urlOrderId || ""), status: "failed", responseBody: "fail: event mismatch" };
}

if (!["minimal.checkout.paid", "minimal.checkout.refunded"].includes(eventName)) {
  return {
    isSignValid: false,
    orderId: String(payload.urlOrderId || "").trim(),
    status: "failed",
    responseBody: `fail: unsupported qingpu event ${eventName || "unknown"}`,
  };
}

const eventPayload = body && typeof body === "object" ? body : {};
const data = eventPayload.data && typeof eventPayload.data === "object" ? eventPayload.data : {};
const orderId = String(data.externalOrderId || payload.urlOrderId || "").trim();

if (!orderId || (payload.urlOrderId && String(payload.urlOrderId).trim() !== orderId)) {
  return {
    isSignValid: false,
    orderId,
    status: "failed",
    responseBody: "fail: qingpu external order mismatch",
  };
}

const attach = data.attach && typeof data.attach === "object" ? data.attach : {};
const hasSourceFact = data.sourceAmount != null || attach.originalAmount != null;
const rawCallbackAmount = Number(data.amount);
const callbackCurrency = String(data.currency || "").trim().toUpperCase();
const sourceAmount = Number(data.sourceAmount ?? attach.originalAmount ?? data.amount);
const sourceCurrency = String(
  data.sourceCurrency || attach.originalCurrency || data.currency || "",
).trim().toUpperCase();

const order = payload.order && typeof payload.order === "object" ? payload.order : null;
const orderMeta = order && order.metaData && typeof order.metaData === "object" ? order.metaData : {};
const topupMeta = orderMeta.topup && typeof orderMeta.topup === "object" ? orderMeta.topup : null;
const expectedOriginalCurrency = order
  ? String(
      order.currency
        || (topupMeta && topupMeta.currency)
        || orderMeta.currency
        || orderMeta.orderCurrency
        || orderMeta.sourceCurrency
        || orderMeta.displayCurrency
        || config.sourceCurrency
        || "CNY",
    ).trim().toUpperCase()
  : "";
const expectedSettlementCurrency = String(config.settlementCurrency || "CNY").trim().toUpperCase();
const currencySnapshot = orderMeta.currencySnapshot && typeof orderMeta.currencySnapshot === "object"
  ? orderMeta.currencySnapshot
  : null;
const snapshotUsdToCnyRate = (
  currencySnapshot
  && String(currencySnapshot.baseCurrency || "").trim().toUpperCase() === "USD"
  && String(currencySnapshot.currency || "").trim().toUpperCase() === "CNY"
  && Number(currencySnapshot.exchangeRate) > 0
)
  ? Number(currencySnapshot.exchangeRate)
  : null;
const usdToCnyRate = Number(
  snapshotUsdToCnyRate
    ?? payload.systemUsdToCnyRate
    ?? config.usdToCnyRate
    ?? config.exchangeRate,
);
const expectedOriginalAmount = order ? Number(order.amount) : NaN;
const needsUsdToCnyConversion = expectedOriginalCurrency === "USD" && expectedSettlementCurrency === "CNY";
const settledInOriginalCurrency = callbackCurrency === expectedOriginalCurrency;
if (order && needsUsdToCnyConversion && !settledInOriginalCurrency && !(usdToCnyRate > 0)) {
  return {
    isSignValid: false,
    orderId,
    status: "failed",
    responseBody: "fail: missing usd to cny exchange rate",
  };
}
const expectedSettlementAmount = needsUsdToCnyConversion
  ? (usdToCnyRate > 0 ? Math.round(expectedOriginalAmount * usdToCnyRate * 100) / 100 : NaN)
  : expectedOriginalAmount;

const matchesOriginalOrder = order
  ? (Math.abs(sourceAmount - expectedOriginalAmount) <= 0.001 && sourceCurrency === expectedOriginalCurrency)
  : true;
const matchesCallbackActualAmount = order
  ? (
      (Math.abs(rawCallbackAmount - expectedSettlementAmount) <= 0.001 && callbackCurrency === expectedSettlementCurrency)
      || (Math.abs(rawCallbackAmount - expectedOriginalAmount) <= 0.001 && callbackCurrency === expectedOriginalCurrency)
    )
  : (
      Number.isFinite(rawCallbackAmount)
      && rawCallbackAmount >= 0
      && (
        !hasSourceFact
        || (attach.settlementAmount != null && Number(attach.settlementAmount) > 0
          ? (Math.abs(rawCallbackAmount - Number(attach.settlementAmount)) <= 0.001
            && (!attach.settlementCurrency || callbackCurrency === String(attach.settlementCurrency).trim().toUpperCase()))
          : (callbackCurrency === sourceCurrency
              ? Math.abs(rawCallbackAmount - sourceAmount) <= 0.001
              : (Number(data.exchangeRate ?? attach.exchangeRate) > 0
                  && Math.abs(rawCallbackAmount - Math.round(sourceAmount * Number(data.exchangeRate ?? attach.exchangeRate) * 100) / 100) <= 0.001)))
      )
    );
const matchesSettlementOrder = order && !hasSourceFact
  ? (Math.abs(rawCallbackAmount - expectedSettlementAmount) <= 0.001 && callbackCurrency === expectedSettlementCurrency)
  : false;

const amount = order && matchesSettlementOrder && !matchesOriginalOrder
  ? expectedOriginalAmount
  : sourceAmount;

const expectedPayStatus = eventName === "minimal.checkout.refunded" ? "refunded" : "paid";
if (!Number.isFinite(amount) || amount < 0
  || !Number.isFinite(rawCallbackAmount) || rawCallbackAmount < 0
  || data.payStatus !== expectedPayStatus
  || !matchesCallbackActualAmount
  || (order && !matchesOriginalOrder && !matchesSettlementOrder)) {
  return { isSignValid: false, orderId, status: "failed", responseBody: "fail: refund/payment facts mismatch" };
}

return {
  isSignValid: true,
  orderId,
  tradeNo: data.tradeNo ? String(data.tradeNo) : (data.orderId ? String(data.orderId) : undefined),
  status: eventName === "minimal.checkout.refunded" ? "refunded" : "paid",
  amount,
  responseBody: "success",
};
