// Adyen Serverless Integration
const order = payload.order || {};
const returnUrl = payload.returnUrl;
const callbackUrl = payload.callbackUrl; // Not used directly in Payment Links, Adyen configures webhooks in dashboard

const apiKey = config.apiKey || config.api_key || "";
const merchantAccount = config.merchantAccount || config.merchant_account || "";
const environment = (config.environment || "test").toLowerCase();
const currency = (config.currency || "USD").toUpperCase();

if (!apiKey || !merchantAccount) {
  return {
    ok: false,
    message: "Adyen apiKey or merchantAccount is missing",
  };
}

try {
  // Adyen Base URLs
  // Note: Adyen live environment URLs are specific to regions/prefixes (e.g. https://[prefix]-checkout-live.adyenpayments.com/checkout/v71)
  // For live, you must provide 'liveUrlPrefix' in config
  let apiBaseUrl = "https://checkout-test.adyen.com/v71";
  if (environment === "live") {
    if (!config.liveUrlPrefix) {
      return {
        ok: false,
        message: "Adyen liveUrlPrefix is required in config for live environment",
      };
    }
    apiBaseUrl = config.liveUrlPrefix;
  }

  // Amount in minor units (e.g., 1000 for 10.00 USD)
  const amountValue = Math.round(Number(order.amount) * 100);

  const reqBody = {
    reference: String(order.id),
    amount: {
      value: amountValue,
      currency: currency,
    },
    merchantAccount: merchantAccount,
    returnUrl: returnUrl,
    shopperEmail: order.contactEmail || "guest@example.com",
    shopperReference: String(order.userId || "guest"),
  };

  // Check if it's a subscription order
  const isSubscriptionOrder = String(order.id).startsWith("SU");
  if (isSubscriptionOrder) {
    reqBody.recurringProcessingModel = "Subscription";
    reqBody.storePaymentMethodMode = "askForConsent";
  }

  const createRes = await fetch(`${apiBaseUrl}/paymentLinks`, {
    method: "POST",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  });

  const resData = await createRes.json();

  if (!createRes.ok || resData.error || resData.status === 401 || resData.status === 403) {
    const errorMessage = resData.message || resData.error || "Failed to create Adyen payment link";
    return {
      ok: false,
      message: `Adyen Error: ${errorMessage}`,
    };
  }

  const paymentUrl = resData.url;

  if (!paymentUrl) {
    return {
      ok: false,
      message: "Adyen did not return a payment link URL",
      responseBody: resData
    };
  }

  return {
    ok: true,
    paymentUrl: String(paymentUrl),
    tradeNo: resData.id ? String(resData.id) : undefined, // Payment link ID
    responseBody: resData,
  };

} catch (error) {
  return {
    ok: false,
    message: `Adyen request failed: ${error.message}`,
  };
}