const order = payload.order || {};
const callbackUrl = payload.callbackUrl;
const returnUrl = payload.returnUrl;
const cancelUrl = payload.cancelUrl;

const vendorId = config.vendorId || config.vendor_id || "";
const vendorAuthCode = config.vendorAuthCode || config.vendor_auth_code || "";
const environment = config.environment || "sandbox"; // "sandbox" or "live"
const currency = (config.currency || "USD").toUpperCase();

// Determine payment intent
const isSubscriptionOrder = String(order.id).startsWith("SU");
const metaData = payload.order.metaData || {};
const paymentType =
  metaData.paymentType ||
  (isSubscriptionOrder
    ? "subscription"
    : (config.type || "payment").toLowerCase());

// Get Plan ID for Paddle Subscription
const planId =
  (metaData.plan_ids && metaData.plan_ids.paddle) ||
  metaData.planId ||
  metaData.plan_id ||
  config.planId ||
  config.plan_id ||
  "";

if (!vendorId || !vendorAuthCode) {
  return {
    ok: false,
    message: "Paddle vendorId or vendorAuthCode is missing",
  };
}

try {
  const apiBaseUrl =
    environment === "live"
      ? "https://vendors.paddle.com/api/2.0"
      : "https://sandbox-vendors.paddle.com/api/2.0";

  let reqBodyParams = new URLSearchParams();
  reqBodyParams.append("vendor_id", vendorId);
  reqBodyParams.append("vendor_auth_code", vendorAuthCode);
  
  // Return URL after payment
  reqBodyParams.append("return_url", returnUrl);
  // Webhook URL (optional if already set in Paddle Dashboard)
  if (callbackUrl) {
    reqBodyParams.append("webhook_url", callbackUrl);
  }
  
  // Custom payload to track our internal order ID
  reqBodyParams.append("passthrough", String(order.id));
  
  if (order.contactEmail) {
    reqBodyParams.append("customer_email", String(order.contactEmail));
  }

  let endpoint = "";

  if (paymentType === "subscription") {
    if (!planId) {
      return {
        ok: false,
        message: "Paddle planId is required for subscription type",
      };
    }
    
    endpoint = "/product/generate_pay_link";
    reqBodyParams.append("product_id", planId); // In Paddle, subscriptions are linked to products/plans
    
  } else {
    // One-Time Payment
    endpoint = "/product/generate_pay_link";
    reqBodyParams.append("title", `Order ${order.id}`);
    // Paddle expects the format like "USD:10.00" or just the numeric value if global
    reqBodyParams.append("prices", [`${currency}:${order.amount}`]);
  }

  // Create Paddle Pay Link
  const createRes = await fetch(`${apiBaseUrl}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: reqBodyParams.toString(),
  });

  const createData = await createRes.json();

  if (!createRes.ok || !createData.success) {
    const errorMessage =
      createData.error?.message ||
      "Failed to create Paddle checkout link";
    return {
      ok: false,
      message: `Paddle Error: ${errorMessage}`,
    };
  }

  const paymentUrl = createData.response?.url;

  if (!paymentUrl) {
    return {
      ok: false,
      message: "Paddle did not return a checkout URL",
    };
  }

  return {
    ok: true,
    paymentUrl: String(paymentUrl),
    tradeNo: undefined, // Paddle usually returns a checkout ID, but the URL is enough
    responseBody: createData,
  };

} catch (error) {
  return {
    ok: false,
    message: `Paddle request failed: ${error.message}`,
  };
}