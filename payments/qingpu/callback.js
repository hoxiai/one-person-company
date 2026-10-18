const headers = payload.headers || {};
const body = payload.body || {};
const rawBody = String(payload.rawBody || "").trim() || JSON.stringify(body || {});

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

const amount = Number(data.sourceAmount ?? data.amount);
const currency = String(data.sourceCurrency || data.currency || "").toUpperCase();
if (!Number.isFinite(amount) || amount < 0
  || (eventName === "minimal.checkout.refunded" && data.payStatus !== "refunded")
  || (payload.order && (Math.abs(amount - Number(payload.order.amount)) > 0.001 || currency !== String(payload.order.currency).toUpperCase()))) {
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
