// ====== Dodo Payments Callback Script ======
// Dodo Webhooks arrive at /api/webhooks/[order_id]
// or via polling from frontend.

const orderId = payload.urlOrderId;
const body = payload.body || {};

// Dodo Payments typically sends `type` for the event and `data` for payload
const eventType = body.type || "";
const data = body.data || {};

// The metadata object contains the order_id we passed during creation
const metaData = data.metadata || {};
const customOrderId = metaData.order_id || payload.query.order_id;
const finalOrderId = orderId || customOrderId;

// Dodo usually uses `payment_id` or `id` for transactions
const tradeNo = data.payment_id || data.id || payload.query.payment_id || "";

if (!finalOrderId) {
  return {
    isSignValid: false,
    orderId: finalOrderId,
    status: "failed",
    responseBody: "fail: no orderId found in metadata or url",
    tradeNo: tradeNo,
  };
}

const apiKey = config.apiKey || config.api_key || "";
let isSignValid = false;
let status = "pending";
let amount = 0;

try {
  // To ensure the webhook isn't spoofed, we verify it by fetching the payment details directly from Dodo Payments.
  // This is highly recommended for Serverless Edge environments where verifying Webhook Signatures using Node `crypto` can fail.
  
  if (tradeNo && apiKey) {
    // If it's a subscription event vs a one-time payment
    const isSubscription = eventType.includes("subscription") || data.subscription_id;
    let endpoint = isSubscription ? `/subscriptions/${tradeNo}` : `/payments/${tradeNo}`;

    const verifyRes = await fetch(`https://api.dodopayments.com${endpoint}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      }
    });

    const verifyData = await verifyRes.json();
    
    // We consider the payload valid if we can retrieve matching data from Dodo Server
    if (verifyRes.ok && verifyData) {
      // Ensure the metadata order_id matches our system orderId to prevent cross-account attacks
      const serverMetadata = verifyData.metadata || {};
      if (serverMetadata.order_id === finalOrderId) {
        isSignValid = true;
        
        if (isSubscription) {
          // Dodo Subscription statuses usually map like this
          if (verifyData.status === "active" || verifyData.status === "trialing") {
            status = "paid";
          } else if (verifyData.status === "canceled" || verifyData.status === "past_due") {
            status = "failed";
          }
        } else {
          // Dodo Payment statuses
          if (verifyData.status === "succeeded" || verifyData.status === "paid") {
            status = "paid";
            amount = verifyData.amount ? parseFloat(verifyData.amount) / 100 : 0; // Assuming cents
          } else if (verifyData.status === "failed") {
            status = "failed";
          }
        }
      } else {
         throw new Error(`Order ID mismatch. System: ${finalOrderId}, Dodo: ${serverMetadata.order_id}`);
      }
    } else {
      // API call failed, maybe an invalid ID or API key issue
      throw new Error(`Failed to verify Dodo Payment record: ${verifyData.message || verifyData.detail}`);
    }
  } else {
     // No TradeNo or API Key to verify with. Fallback to trusting the webhook payload (Less Secure).
     // Useful for local testing if Dodo sends valid events.
     if (customOrderId === finalOrderId) {
       isSignValid = true;
       if (eventType === "payment.succeeded" || eventType === "subscription.created") {
         status = "paid";
       }
     } else {
       throw new Error("Cannot verify payload authenticity without API key or matching metadata");
     }
  }

} catch (e) {
  console.error("Dodo Payments verification error:", e.message);
  return {
    isSignValid: false,
    orderId: finalOrderId,
    status: "failed",
    responseBody: `fail: verification error - ${e.message}`,
    tradeNo: tradeNo,
  };
}

// Return unified result
return {
  isSignValid: isSignValid,
  orderId: finalOrderId,
  tradeNo: String(tradeNo),
  status: status,
  amount: amount,
  responseBody: "success",
};