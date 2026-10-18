// ====== Airwallex (空中云汇) Create Payment Link ======
const order = payload.order || {};
const returnUrl = payload.returnUrl;
// Airwallex Payment Links API doesn't inherently take a cancelUrl in the same way, but return_url handles all redirect cases.

const clientId = config.clientId || config.client_id || "";
const apiKey = config.apiKey || config.api_key || "";
const environment = (config.environment || "demo").toLowerCase();
const currency = (config.currency || "USD").toUpperCase();

if (!clientId || !apiKey) {
  return {
    ok: false,
    message: "Airwallex clientId or apiKey is missing",
  };
}

try {
  // Determine environment endpoints
  const apiBaseUrl = environment === "live" 
    ? "https://api.airwallex.com" 
    : "https://api-demo.airwallex.com";

  // 1. Authenticate to get API Token
  const authRes = await fetch(`${apiBaseUrl}/api/v1/authentication/login`, {
    method: "POST",
    headers: {
      "x-client-id": clientId,
      "x-api-key": apiKey,
      "Content-Type": "application/json"
    }
  });

  if (!authRes.ok) {
    const authErr = await authRes.json();
    return {
      ok: false,
      message: `Airwallex Auth Error: ${authErr.message || "Failed to authenticate"}`,
      responseBody: authErr
    };
  }
  
  const token = (await authRes.json()).token;

  // 2. Create Payment Link via API
  // Note: Airwallex uses major currency units (e.g. 10.50 for $10.50)
  const reqBody = {
    // Unique request ID (prevents duplicates)
    request_id: `${order.id}_${Date.now()}`,
    amount: Number(order.amount),
    currency: currency,
    title: `Order ${order.id}`,
    description: `Payment for order ${order.id}`,
    return_url: returnUrl,
    metadata: {
      order_id: String(order.id)
    }
  };

  const createRes = await fetch(`${apiBaseUrl}/api/v1/pa/payment_links/create`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reqBody)
  });

  const resData = await createRes.json();

  if (!createRes.ok) {
    return {
      ok: false,
      message: `Airwallex Error: ${resData.message || "Failed to create payment link"}`,
      responseBody: resData
    };
  }

  const paymentUrl = resData.url;

  if (!paymentUrl) {
    return {
      ok: false,
      message: "Airwallex did not return a payment URL",
      responseBody: resData
    };
  }

  return {
    ok: true,
    paymentUrl: String(paymentUrl),
    tradeNo: resData.id, // Payment Link ID
    responseBody: resData
  };

} catch (error) {
  return {
    ok: false,
    message: `Airwallex request failed: ${error.message}`
  };
}