const order = payload.order || {};
const callbackUrl = payload.callbackUrl;
const returnUrl = payload.returnUrl;
const cancelUrl = payload.cancelUrl;

const clientId = config.clientId || config.client_id || "";
const clientSecret =
  config.clientSecret || config.client_secret || config.secret || "";
const mode = (config.mode || config.environment || "sandbox").toLowerCase();
const currency = (order.currency || config.currency || "USD").toUpperCase();

// Determine payment intent:
// 1. Check if order ID indicates subscription
// 2. Check if metaData passes explicit intent or planId
// 3. Fallback to config
const isSubscriptionOrder = String(order.id).startsWith("SU");
const metaData = payload.order.metaData || {};
const paymentType =
  metaData.paymentType ||
  (isSubscriptionOrder
    ? "subscription"
    : (config.type || "payment").toLowerCase());
const planId =
  (metaData.plan_ids && metaData.plan_ids.paypal) ||
  metaData.planId ||
  metaData.plan_id ||
  config.planId ||
  config.plan_id ||
  "";

// APay renews through its own invoices. Gateway subscriptions need a separate
// transaction-to-renewal-invoice integration before they can be enabled.
if (paymentType === "subscription") {
  return { ok: false, message: "PayPal recurring billing is not configured; pay the APay renewal invoice instead" };
}

if (!clientId || !clientSecret) {
  return {
    ok: false,
    message: "PayPal clientId or clientSecret is missing",
  };
}

const apiBaseUrl =
  mode === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

try {
  // 1. Get Access Token using Client Credentials
  const authString = btoa(`${clientId}:${clientSecret}`);
  const tokenRes = await fetch(`${apiBaseUrl}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${authString}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const tokenData = await tokenRes.json();

  if (!tokenRes.ok) {
    return {
      ok: false,
      message:
        tokenData.error_description ||
        tokenData.error ||
        "Failed to get PayPal access token",
    };
  }

  const accessToken = tokenData.access_token;

  if (paymentType === "subscription") {
    if (!planId) {
      return {
        ok: false,
        message: "PayPal planId is required for subscription type",
      };
    }

    // 2a. Create PayPal Subscription
    const subReqBody = {
      plan_id: planId,
      custom_id: String(order.id), // Storing our internal order ID here
      application_context: {
        return_url: returnUrl,
        cancel_url: cancelUrl,
        user_action: "SUBSCRIBE_NOW",
      },
    };

    const createRes = await fetch(`${apiBaseUrl}/v1/billing/subscriptions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subReqBody),
    });

    const createData = await createRes.json();

    if (!createRes.ok) {
      const errorMessage =
        createData.details?.[0]?.description ||
        createData.message ||
        "Failed to create PayPal subscription";
      return {
        ok: false,
        message: `PayPal Subscription Error: ${errorMessage}`,
      };
    }

    const approveLink = createData.links?.find(
      (link) => link.rel === "approve",
    );
    const paymentUrl = approveLink ? approveLink.href : null;

    if (!paymentUrl) {
      return {
        ok: false,
        message: "PayPal did not return an approve link for subscription",
      };
    }

    return {
      ok: true,
      paymentUrl: String(paymentUrl),
      tradeNo: createData.id ? String(createData.id) : undefined, // Subscription ID
      responseBody: createData,
    };
  } else {
    // 2b. Create PayPal One-Time Order
    const reqBody = {
      intent: "CAPTURE",
      purchase_units: [
        {
          reference_id: String(order.id),
          amount: {
            currency_code: currency,
            value: Number(order.amount).toFixed(2), // PayPal requires exactly 2 decimal places for most currencies
          },
          description: `Order ${order.id}`,
        },
      ],
      application_context: {
        return_url: returnUrl,
        cancel_url: cancelUrl,
        user_action: "PAY_NOW", // Instructs PayPal to show a 'Pay Now' button instead of 'Continue'
      },
    };

    const createRes = await fetch(`${apiBaseUrl}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "PayPal-Request-Id": `apay-create-${order.id}`,
      },
      body: JSON.stringify(reqBody),
    });

    const createData = await createRes.json();

    if (!createRes.ok) {
      const errorMessage =
        createData.details?.[0]?.description ||
        createData.message ||
        "Failed to create PayPal order";
      return {
        ok: false,
        message: `PayPal Error: ${errorMessage}`,
      };
    }

    // 3. Find the approve URL for the user to complete payment
    const approveLink = createData.links?.find(
      (link) => link.rel === "approve",
    );
    const paymentUrl = approveLink ? approveLink.href : null;

    if (!paymentUrl) {
      return {
        ok: false,
        message: "PayPal did not return an approve link",
      };
    }

    return {
      ok: true,
      paymentUrl: String(paymentUrl),
      tradeNo: createData.id ? String(createData.id) : undefined, // PayPal's order ID (e.g., 5O190127TN364715T)
      responseBody: createData,
    };
  }
} catch (error) {
  return {
    ok: false,
    message: `PayPal request failed: ${error.message}`,
  };
}
