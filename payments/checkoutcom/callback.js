// ====== Checkout.com Callback / Webhook Script ======

const orderId = payload.urlOrderId;
const body = payload.body || {};
const headers = payload.headers || {};
const rawBody = payload.rawBody || ""; // Injected by the updated webhook post handler

// Cko-Signature is sent by Checkout.com to verify payload authenticity
const signature = headers['cko-signature'] || headers['Cko-Signature'];
const webhookSecret = config.webhookSecret || config.webhook_secret || "";

// Checkout.com places reference inside `data`
const dataObject = body.data || {};
// We fall back to urlOrderId if data reference is missing
const clientReferenceId = dataObject.reference || dataObject.metadata?.order_id || orderId;

// Checkout.com unique action or payment ID
const tradeNo = dataObject.id || dataObject.action_id || "";

let isSignValid = false;
let status = "pending";
let amount = 0;

if (!clientReferenceId) {
  return {
    isSignValid: false,
    orderId: clientReferenceId,
    status: "failed",
    responseBody: "no reference",
    tradeNo: tradeNo
  };
}

try {
  // 1. Signature Verification
  if (signature && webhookSecret && rawBody) {
    // Calculate HMAC-SHA256 of the raw body payload
    const hmac = crypto.createHmac('sha256', webhookSecret);
    hmac.update(rawBody, 'utf8');
    const expectedSig = hmac.digest('hex');

    if (expectedSig === signature) {
      isSignValid = true;
    } else {
      console.error(`Checkout.com signature mismatch. Expected: ${expectedSig}, Received: ${signature}`);
    }
  } else {
    // 2. Active Verification Fallback (if signature fails or secret is missing)
    const secretKey = config.secretKey || config.secret_key || "";
    
    if (tradeNo && secretKey) {
      const apiBaseUrl = (config.environment || "sandbox").toLowerCase() === "live" 
        ? "https://api.checkout.com" 
        : "https://api.sandbox.checkout.com";
      
      // If we have an action_id or payment_id, we can verify the payment
      // TradeNo might be an action ID or payment ID. We check the payments endpoint.
      const verifyRes = await fetch(`${apiBaseUrl}/payments/${tradeNo}`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${secretKey}` }
      });
      
      if (verifyRes.ok) {
        const verifyData = await verifyRes.json();
        
        // Ensure the payment belongs to this order
        if (verifyData.reference === clientReferenceId || verifyData.metadata?.order_id === clientReferenceId) {
          isSignValid = true;
          // Overwrite body type with the verified status
          if (verifyData.status === "Captured" || verifyData.status === "Authorized") {
             body.type = "payment_captured";
          } else if (verifyData.status === "Declined" || verifyData.status === "Canceled") {
             body.type = "payment_declined";
          }
          if (verifyData.amount) {
            amount = verifyData.amount / 100;
          }
        }
      }
    }
  }

  // 3. Process Status
  if (isSignValid) {
    const eventType = body.type;
    
    if (eventType === "payment_captured" || eventType === "payment_approved") {
      status = "paid";
      // Convert minor units back to major units
      if (!amount && dataObject.amount) {
        amount = dataObject.amount / 100;
      }
    } else if (
      eventType === "payment_declined" || 
      eventType === "payment_canceled" || 
      eventType === "payment_voided" || 
      eventType === "payment_expired"
    ) {
      status = "failed";
    } else if (eventType === "payment_refunded") {
      status = "failed"; // For our system, refund means the order fails to complete
    } else {
      status = "pending";
    }
  } else {
    throw new Error("Signature verification and fallback check both failed.");
  }

} catch (e) {
  console.error("Checkout.com verification error:", e.message);
  return {
    isSignValid: false,
    orderId: clientReferenceId,
    status: "failed",
    responseBody: `fail: verification error - ${e.message}`,
    tradeNo: tradeNo
  };
}

// Checkout.com expects a 200 OK response, the body doesn't strictly matter
return {
  isSignValid: isSignValid,
  orderId: clientReferenceId,
  tradeNo: String(tradeNo),
  status: status,
  amount: amount,
  responseBody: "OK"
};