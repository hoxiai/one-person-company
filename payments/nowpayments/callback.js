const body = payload.body || {};
const orderId = body.order_id || body.order_description || payload.urlOrderId;
const paymentId = body.payment_id || body.id;
if (!orderId || !paymentId) {
  return {
    isSignValid: false,
    orderId,
    status: "failed",
    responseBody: "fail",
    tradeNo: paymentId,
  };
}

const ipnSecret = config.ipnSecret || config.ipn_secret || "";
const signatureFromHeader =
  payload.headers["x-nowpayments-sig"] ||
  payload.headers["X-NOWPAYMENTS-SIG"] ||
  "";

let isSignValid = false;
if (ipnSecret && signatureFromHeader) {
  const sortedKeys = Object.keys(body).sort();
  const sortedBody = {};
  for (const key of sortedKeys) sortedBody[key] = body[key];
  const dataToSign = payload.rawBody
    ? payload.rawBody
    : JSON.stringify(sortedBody);
  const calculatedSignature = crypto.hmacSha512(dataToSign, ipnSecret);
  isSignValid = calculatedSignature === signatureFromHeader;
}

let gatewayData = body;
const apiKey = config.apiKey || config.api_key || "";
const apiBaseUrl = (
  config.apiBaseUrl || "https://api.nowpayments.io/v1"
).replace(/\/$/, "");

if (!isSignValid && apiKey) {
  try {
    const checkRes = await fetch(`${apiBaseUrl}/payment/${paymentId}`, {
      method: "GET",
      headers: { "x-api-key": apiKey },
    });
    const checkData = await checkRes.json();
    if (checkRes.ok && String(checkData.payment_id) === String(paymentId)) {
      gatewayData = checkData;
      isSignValid = true;
    }
  } catch {}
}

if (!isSignValid) {
  return {
    isSignValid: false,
    orderId,
    status: "failed",
    responseBody: "fail",
    tradeNo: paymentId,
  };
}

const npStatus = String(gatewayData.payment_status || "").toLowerCase();
let status = "pending";
if (["finished", "confirmed", "sending"].includes(npStatus)) status = "paid";
if (["failed", "expired", "refunded"].includes(npStatus)) status = "failed";

return {
  isSignValid: true,
  orderId: String(orderId),
  tradeNo: String(paymentId),
  status,
  amount: parseFloat(gatewayData.price_amount || gatewayData.pay_amount || 0),
  responseBody: "OK",
};
