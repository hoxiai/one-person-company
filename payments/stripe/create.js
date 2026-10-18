const order = payload.order || {};
const callbackUrl = payload.callbackUrl;
const returnUrl = payload.returnUrl;
const cancelUrl = payload.cancelUrl;

const secretKey = config.secretKey || config.secret_key || config.secret || "";
const currency = (config.currency || "USD").toLowerCase(); // Stripe usually requires lowercase currency codes

// Determine payment intent:
const isSubscriptionOrder = String(order.id).startsWith("SU");
const metaData = payload.order.metaData || {};
const paymentType =
  metaData.paymentType ||
  (isSubscriptionOrder
    ? "subscription"
    : (config.type || "payment").toLowerCase());

// Get Price ID for Stripe Subscription
const priceId =
  (metaData.plan_ids && metaData.plan_ids.stripe) ||
  metaData.priceId ||
  metaData.price_id ||
  config.priceId ||
  config.price_id ||
  "";

if (!secretKey) {
  return {
    ok: false,
    message: "Stripe secretKey is missing",
  };
}

try {
  // Stripe API uses Basic Auth with the Secret Key as the username
  const authString = btoa(`${secretKey}:`);
  
  let reqBodyParams = new URLSearchParams();

  // Common parameters
  // 默认回跳地址 /callback/<订单号> 不带 query,固定用 '&' 会拼进路径,回调页把整段当订单号查不到
  const sessionIdSeparator = String(returnUrl).includes("?") ? "&" : "?";
  reqBodyParams.append("success_url", returnUrl + sessionIdSeparator + "session_id={CHECKOUT_SESSION_ID}");
  reqBodyParams.append("cancel_url", cancelUrl);
  reqBodyParams.append("client_reference_id", String(order.id));
  
  if (order.contactEmail) {
    reqBodyParams.append("customer_email", String(order.contactEmail));
  }

  if (paymentType === "subscription") {
    if (!priceId) {
      return {
        ok: false,
        message: "Stripe priceId is required for subscription type",
      };
    }

    reqBodyParams.append("mode", "subscription");
    reqBodyParams.append("line_items[0][price]", priceId);
    reqBodyParams.append("line_items[0][quantity]", "1");

  } else {
    // One-Time Payment
    reqBodyParams.append("mode", "payment");
    
    // Stripe expects amounts in the smallest currency unit (e.g., cents for USD)
    const amountInCents = Math.round(Number(order.amount) * 100);
    
    reqBodyParams.append("line_items[0][price_data][currency]", currency);
    reqBodyParams.append("line_items[0][price_data][product_data][name]", `Order ${order.id}`);
    reqBodyParams.append("line_items[0][price_data][unit_amount]", String(amountInCents));
    reqBodyParams.append("line_items[0][quantity]", "1");
  }

  // Create Stripe Checkout Session
  const createRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Basic ${authString}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: reqBodyParams.toString(),
  });

  const createData = await createRes.json();

  if (!createRes.ok) {
    const errorMessage =
      createData.error?.message ||
      "Failed to create Stripe session";
    return {
      ok: false,
      message: `Stripe Error: ${errorMessage}`,
    };
  }

  const paymentUrl = createData.url;

  if (!paymentUrl) {
    return {
      ok: false,
      message: "Stripe did not return a checkout URL",
    };
  }

  return {
    ok: true,
    paymentUrl: String(paymentUrl),
    tradeNo: createData.id ? String(createData.id) : undefined, // Stripe Session ID
    responseBody: createData,
  };

} catch (error) {
  return {
    ok: false,
    message: `Stripe request failed: ${error.message}`,
  };
}