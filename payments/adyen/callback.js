// ====== Adyen Callback Script ======
// Adyen Webhooks arrive at /api/webhooks/[order_id]
// or via frontend redirection.

const orderId = payload.urlOrderId;
const body = payload.body || {};

// Adyen sends webhooks as a JSON object with a `notificationItems` array
const notificationItems = body.notificationItems || [];
const isWebhook = notificationItems.length > 0;

// Handle Frontend Redirect (Active Capture Fallback)
if (!isWebhook) {
  const resultCode = payload.query.resultCode || "";
  
  if (resultCode === "Authorised" || resultCode === "Pending" || resultCode === "Received") {
    // If the frontend redirected with a success-like resultCode, we return pending
    // so the frontend knows to wait for the webhook, or we can trust it temporarily.
    // However, it's safer to just return "pending" and wait for the real webhook.
    return {
      isSignValid: true,
      orderId: orderId,
      status: "pending",
      responseBody: "success",
      tradeNo: payload.query.paymentLinkId || payload.query.pspReference || "",
    };
  } else if (resultCode === "Refused" || resultCode === "Cancelled" || resultCode === "Error") {
    return {
      isSignValid: true,
      orderId: orderId,
      status: "failed",
      responseBody: "failed by redirect",
      tradeNo: "",
    };
  }

  // If no resultCode, it might be an empty body active check
  return {
    isSignValid: true, // Allow active check to pass without failing the order
    orderId: orderId,
    status: "pending",
    responseBody: "pending webhook",
    tradeNo: "",
  };
}

// Handle Webhook (The Source of Truth)
const notificationItem = notificationItems[0]?.NotificationRequestItem || {};
const eventCode = notificationItem.eventCode;
const success = notificationItem.success;
const pspReference = notificationItem.pspReference;
const merchantReference = notificationItem.merchantReference;
const amountValue = notificationItem.amount?.value;
const hmacSignature = notificationItem.additionalData?.hmacSignature;

const finalOrderId = orderId || merchantReference;

if (!finalOrderId) {
  return {
    isSignValid: false,
    orderId: finalOrderId,
    status: "failed",
    responseBody: "fail: no merchantReference found",
    tradeNo: pspReference,
  };
}

const hmacKey = config.hmacKey || config.hmac_key || "";
let isSignValid = false;
let status = "pending";
let amount = 0;

try {
  // Adyen HMAC Signature Verification
  if (hmacKey && hmacSignature) {
    // Adyen signature payload concatenation:
    // pspReference : originalReference : merchantAccountCode : merchantReference : value : currency : eventCode : success
    const originalReference = notificationItem.originalReference || "";
    const merchantAccountCode = notificationItem.merchantAccountCode || "";
    const currency = notificationItem.amount?.currency || "";
    const value = amountValue || "";

    const escapeString = (str) => {
      return String(str).replace(/\\/g, "\\\\").replace(/:/g, "\\:");
    };

    const payloadParts = [
      pspReference,
      originalReference,
      merchantAccountCode,
      merchantReference,
      value,
      currency,
      eventCode,
      success
    ].map(escapeString);

    const payloadString = payloadParts.join(":");

    const keyBytes = Buffer.from(hmacKey, "hex");
    const hmac = crypto.createHmac("sha256", keyBytes);
    hmac.update(payloadString, "utf8");
    const expectedSignature = hmac.digest("base64");

    if (expectedSignature === hmacSignature) {
      isSignValid = true;
    } else {
      console.error(`Adyen signature mismatch. Expected: ${expectedSignature}, Received: ${hmacSignature}`);
      throw new Error("Adyen HMAC signature verification failed.");
    }
  } else {
    // If HMAC key is not configured, we might accept it blindly for testing, but it's risky
    console.warn("Adyen HMAC Key is missing. Skipping signature verification. THIS IS INSECURE FOR PRODUCTION.");
    isSignValid = true; // Proceed cautiously
  }

  if (isSignValid) {
    // Adyen Event Codes: AUTHORISATION, CAPTURE, REFUND, CANCEL_OR_REFUND, etc.
    if (eventCode === "AUTHORISATION") {
      if (success === "true") {
        status = "paid";
        // Amount is in minor units, convert back to major units
        amount = amountValue ? (parseInt(amountValue) / 100) : 0;
      } else {
        status = "failed";
      }
    } else if (eventCode === "CAPTURE_FAILED" || eventCode === "REFUND") {
      status = "failed";
    }
  }

} catch (e) {
  console.error("Adyen verification error:", e.message);
  return {
    isSignValid: false,
    orderId: finalOrderId,
    status: "failed",
    responseBody: `fail: verification error - ${e.message}`,
    tradeNo: pspReference,
  };
}

// Return unified result
return {
  isSignValid: isSignValid,
  orderId: finalOrderId,
  tradeNo: String(pspReference),
  status: status,
  amount: amount,
  responseBody: "[accepted]", // Adyen requires EXACTLY "[accepted]" as response
};