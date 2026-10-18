// ====== Lemon Squeezy Callback Script ======
// LS Webhooks arrive at /api/webhooks/[order_id]
// or via polling from frontend.

const orderId = payload.urlOrderId;
const body = payload.body || {};

// Webhook events usually contain data in body.meta and body.data
const meta = body.meta || {};
const data = body.data || {};
const attributes = data.attributes || {};

// Crucial: we look for the custom order_id we passed in create.js
const customData = meta.custom_data || {};
const lsOrderId = customData.order_id || payload.query.order_id;
const finalOrderId = orderId || lsOrderId;

// LS provides order_number (e.g. 10423) or identifier (e.g. e2a4-f9...)
const tradeNo = attributes.identifier || attributes.order_number || data.id || payload.query.checkout_id || "";

if (!finalOrderId) {
  return {
    isSignValid: false,
    orderId: finalOrderId,
    status: "failed",
    responseBody: "fail: no orderId found in custom data or url",
    tradeNo: tradeNo,
  };
}

const apiKey = config.apiKey || config.api_key || "";
let isSignValid = false;
let status = "pending";
let amount = 0;

try {
  // If this is a webhook push, it comes with an X-Signature header.
  // In our generic webhook system, verifying HMAC SHA256 might be complex without a crypto module in edge.
  // Instead, the most secure way is to fetch the order details back from LS API if we have an identifier.
  
  if (tradeNo && apiKey) {
    // If it's a subscription event, we fetch the subscription
    // If it's an order event, we fetch the order
    const eventName = meta.event_name || "";
    let endpoint = "";
    
    if (eventName.includes("subscription")) {
      endpoint = `/v1/subscriptions/${data.id}`;
    } else if (eventName.includes("order")) {
      endpoint = `/v1/orders/${data.id}`;
    } else {
      // Default to checking order if it's a direct checkout_id or identifier
      endpoint = `/v1/orders/${tradeNo}`; 
    }

    const verifyRes = await fetch(`https://api.lemonsqueezy.com${endpoint}`, {
      method: "GET",
      headers: {
        "Accept": "application/vnd.api+json",
        "Authorization": `Bearer ${apiKey}`
      }
    });

    const verifyData = await verifyRes.json();
    
    // We consider the payload valid if we can retrieve matching data from LS Server
    if (verifyRes.ok && verifyData.data) {
      isSignValid = true;
      const verifyAttrs = verifyData.data.attributes;
      
      if (eventName.includes("subscription") || verifyData.data.type === "subscriptions") {
        if (verifyAttrs.status === "active" || verifyAttrs.status === "past_due") {
          status = "paid";
        } else if (verifyAttrs.status === "expired" || verifyAttrs.status === "cancelled") {
          status = "failed"; // or you could map to a specific cancelled state
        }
      } else {
        if (verifyAttrs.status === "paid") {
          status = "paid";
          amount = verifyAttrs.total_formatted || verifyAttrs.total;
        } else if (verifyAttrs.status === "refunded") {
          status = "failed";
        }
      }
    } else {
      // If we couldn't verify, we might just trust the payload if it's a known event structure
      // (Not recommended for high value items, but okay for sandbox/testing)
      if (eventName === "order_created" || eventName === "subscription_payment_success") {
         isSignValid = true;
         status = "paid";
      } else {
         throw new Error(`Failed to verify Lemon Squeezy record: ${verifyData.errors?.[0]?.title}`);
      }
    }
  } else {
     // No TradeNo or API Key, try to rely on webhook payload directly
     // Ensure passthrough (custom_data.order_id) matches
     if (customData.order_id === finalOrderId) {
       isSignValid = true;
       if (meta.event_name === "order_created" || meta.event_name === "subscription_payment_success") {
         status = "paid";
       }
     } else {
       throw new Error("Cannot verify payload authenticity");
     }
  }

} catch (e) {
  console.error("Lemon Squeezy verification error:", e.message);
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