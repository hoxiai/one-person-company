const order = payload.order || {};
const returnUrl = payload.returnUrl;
const cancelUrl = payload.cancelUrl;

const apiKey = config.apiKey || config.api_key || "";
// Test mode determines if we're hitting live or test endpoints
// Actually Dodo Payments API keys start with 'test_' or 'live_' and determine the environment
const isTestMode = apiKey.startsWith("test_");

// Determine payment intent
const isSubscriptionOrder = String(order.id).startsWith("SU");
const metaData = payload.order.metaData || {};

// Get Product ID for Dodo Payments
const productId =
  (metaData.plan_ids && metaData.plan_ids.dodopayments) ||
  metaData.productId ||
  metaData.product_id ||
  config.productId ||
  config.product_id ||
  "";

if (!apiKey) {
  return {
    ok: false,
    message: "Dodo Payments apiKey is missing",
  };
}

try {
  // Dodo Payments typically uses /payments endpoint to generate payment links
  // You pass the product_id or directly price data
  
  const requestBody = {
    billing: {
      city: "",
      country: "",
      state: "",
      street: "",
      zipcode: ""
    },
    customer: {
      email: order.contactEmail || "",
      name: "Customer" // Could extract from email or order if needed
    },
    payment_link: true, // We want a hosted checkout link back
    return_url: returnUrl,
    metadata: {
      order_id: String(order.id) // Crucial for tracking our internal order
    }
  };

  if (isSubscriptionOrder || productId) {
    if (!productId) {
      return {
        ok: false,
        message: "Dodo Payments product_id is required for subscriptions or preset products",
      };
    }
    requestBody.product_cart = [
      {
        product_id: productId,
        quantity: 1
      }
    ];
  } else {
    // One-Time Custom Price Payment (if Dodo supports dynamic cart without predefined product)
    // Often you still need a base product_id in Dodo. Assuming we create a custom payment:
    requestBody.amount = Math.round(Number(order.amount) * 100); // in cents
    requestBody.currency = (config.currency || "USD").toUpperCase();
  }

  const createRes = await fetch("https://api.dodopayments.com/payments", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody),
  });

  const resData = await createRes.json();

  if (!createRes.ok) {
    const errorMessage =
      resData.detail ||
      resData.message ||
      "Failed to create Dodo Payments link";
    return {
      ok: false,
      message: `Dodo Payments Error: ${errorMessage}`,
    };
  }

  // Dodo Payments returns a payment_link field if we requested one
  const paymentUrl = resData.payment_link;

  if (!paymentUrl) {
    return {
      ok: false,
      message: "Dodo Payments did not return a checkout URL",
    };
  }

  return {
    ok: true,
    paymentUrl: String(paymentUrl),
    tradeNo: resData.payment_id ? String(resData.payment_id) : undefined,
    responseBody: resData,
  };

} catch (error) {
  return {
    ok: false,
    message: `Dodo Payments request failed: ${error.message}`,
  };
}