// ====== Checkout.com Create Payment Link ======
// Creates a hosted payment link using Checkout.com Hosted Payments API

const order = payload.order || {};
const returnUrl = payload.returnUrl;
const cancelUrl = payload.cancelUrl;

const secretKey = config.secretKey || config.secret_key || "";
const environment = (config.environment || "sandbox").toLowerCase();
const currency = (config.currency || "USD").toUpperCase();

if (!secretKey) {
  return {
    ok: false,
    message: "Checkout.com secretKey is missing",
  };
}

try {
  const apiBaseUrl = environment === "live" 
    ? "https://api.checkout.com" 
    : "https://api.sandbox.checkout.com";

  // Checkout.com expects amount in minor units (e.g., 1000 for $10.00)
  const amountValue = Math.round(Number(order.amount) * 100);

  const reqBody = {
    amount: amountValue,
    currency: currency,
    reference: String(order.id),
    success_url: returnUrl,
    failure_url: cancelUrl,
    cancel_url: cancelUrl,
    customer: {
      email: order.contactEmail || "guest@example.com",
    },
    // Optional: add metadata or products
    metadata: {
      order_id: String(order.id)
    }
  };

  const createRes = await fetch(`${apiBaseUrl}/hosted-payments`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${secretKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reqBody)
  });

  const resData = await createRes.json();

  if (!createRes.ok) {
    const errorMessage = resData.message || resData.error_type || resData.error_codes?.[0] || "Unknown error";
    return {
      ok: false,
      message: `Checkout.com Error: ${errorMessage}`,
      responseBody: resData
    };
  }

  const paymentUrl = resData._links?.redirect?.href;

  if (!paymentUrl) {
    return {
      ok: false,
      message: "Checkout.com did not return a redirect URL",
      responseBody: resData
    };
  }

  return {
    ok: true,
    paymentUrl: String(paymentUrl),
    tradeNo: resData.id,
    responseBody: resData
  };

} catch (error) {
  return {
    ok: false,
    message: `Checkout.com request failed: ${error.message}`
  };
}