// ====== Airwallex (空中云汇) Callback / Webhook Script ======

const orderId = payload.urlOrderId;
const body = payload.body || {};
const headers = payload.headers || {};
const rawBody = payload.rawBody || ""; // Passed explicitly in our updated webhook handler

// Airwallex Webhook Headers
const signature = headers['x-signature'] || headers['X-Signature'];
const timestamp = headers['x-timestamp'] || headers['X-Timestamp'];
const webhookSecret = config.webhookSecret || config.webhook_secret || "";

const dataObject = body.data?.object || {};

// We injected the order_id inside metadata during payment link creation.
// In Airwallex, `metadata` might be at root or under `data.object`.
const clientReferenceId = dataObject.metadata?.order_id || dataObject.merchant_order_id || orderId;

// The intent ID is usually `payment_intent_id` or `id` depending on the event
const tradeNo = dataObject.id || dataObject.payment_intent_id || "";

let isSignValid = false;
let status = "pending";
let amount = 0;

if (!clientReferenceId) {
  return {
    isSignValid: false,
    orderId: clientReferenceId,
    status: "failed",
    responseBody: "no reference found",
    tradeNo: tradeNo
  };
}

try {
  // 1. Airwallex Signature Verification
  if (signature && timestamp && webhookSecret && rawBody) {
    // Airwallex HMAC Signature format: 
    // HMAC-SHA256(timestamp + raw_payload, webhook_secret)
    const hmac = crypto.createHmac('sha256', webhookSecret);
    hmac.update(timestamp + rawBody, 'utf8');
    const expectedSig = hmac.digest('hex');

    if (expectedSig === signature) {
      isSignValid = true;
    } else {
      console.error(`Airwallex signature mismatch. Expected: ${expectedSig}, Received: ${signature}`);
    }
  } else {
    // 2. Active Verification Fallback via API
    const clientId = config.clientId || config.client_id || "";
    const apiKey = config.apiKey || config.api_key || "";
    
    // If webhook auth isn't setup but we have credentials, verify the intent
    if (tradeNo && clientId && apiKey) {
      const apiBaseUrl = (config.environment || "demo").toLowerCase() === "live" 
        ? "https://api.airwallex.com" 
        : "https://api-demo.airwallex.com";
      
      // Step A: Login
      const authRes = await fetch(`${apiBaseUrl}/api/v1/authentication/login`, {
        method: "POST",
        headers: { "x-client-id": clientId, "x-api-key": apiKey, "Content-Type": "application/json" }
      });
      
      if (authRes.ok) {
        const token = (await authRes.json()).token;
        
        // Step B: Check Payment Intent (If tradeNo is a payment_intent ID)
        // Airwallex Payment Intents start with 'int_' usually
        let verifyEndpoint = `${apiBaseUrl}/api/v1/pa/payment_intents/${tradeNo}`;
        
        // If it's a payment link ID (starts with 'pl_'), you fetch the link
        if (tradeNo.startsWith('pl_')) {
          verifyEndpoint = `${apiBaseUrl}/api/v1/pa/payment_links/${tradeNo}`;
        }

        const verifyRes = await fetch(verifyEndpoint, {
          headers: { "Authorization": `Bearer ${token}` }
        });
        
        if (verifyRes.ok) {
          const verifyData = await verifyRes.json();
          
          if (
            verifyData.merchant_order_id === clientReferenceId || 
            verifyData.metadata?.order_id === clientReferenceId
          ) {
             isSignValid = true;
             
             // Rewrite body name (event) based on current status
             // Intents return status: REQUIRES_PAYMENT, REQUIRES_CUSTOMER_ACTION, SUCCEEDED, FAILED, CANCELLED
             // Payment Links return status: ACTIVE, INACTIVE, COMPLETED
             if (verifyData.status === "SUCCEEDED" || verifyData.status === "COMPLETED") {
               body.name = "payment_intent.succeeded";
             } else if (verifyData.status === "FAILED" || verifyData.status === "CANCELLED") {
               body.name = "payment_intent.failed";
             }
             
             if (verifyData.status === "SUCCEEDED" || verifyData.status === "COMPLETED") {
               amount = verifyData.amount || 0;
             }
          }
        }
      }
    }
  }

  // 3. Status assignment
  if (isSignValid) {
    const eventName = body.name; // e.g., payment_intent.succeeded
    
    // Valid Airwallex Webhook events for payment completion:
    if (eventName === "payment_intent.succeeded" || eventName === "payment_link.paid") {
      status = "paid";
      amount = amount || dataObject.amount || 0;
    } else if (eventName === "payment_intent.failed" || eventName === "payment_link.cancelled") {
      status = "failed";
    } else {
      // Pending statuses or other webhooks
      status = "pending";
    }
  } else {
    throw new Error("Airwallex signature verification and fallback check both failed.");
  }

} catch (e) {
  console.error("Airwallex verification error:", e.message);
  return {
    isSignValid: false,
    orderId: clientReferenceId,
    status: "failed",
    responseBody: `fail: verification error - ${e.message}`,
    tradeNo: tradeNo
  };
}

return {
  isSignValid: isSignValid,
  orderId: clientReferenceId,
  tradeNo: String(tradeNo),
  status: status,
  amount: amount,
  responseBody: "OK"
};