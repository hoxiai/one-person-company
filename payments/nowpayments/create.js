const order = payload.order || {};
const callbackUrl = payload.callbackUrl;
const returnUrl = payload.returnUrl;
const cancelUrl = payload.cancelUrl;

const apiKey = config.apiKey || config.api_key || "";
if (!apiKey) {
  return {
    ok: false,
    message: "NOWPayments apiKey is missing"
  };
}

const apiBaseUrl = (config.apiBaseUrl || "https://api.nowpayments.io/v1").replace(/\/$/, "");
const payCurrency = (config.payCurrency || config.pay_currency || "usdttrc20").toLowerCase();
const priceCurrency = (config.priceCurrency || config.price_currency || "usd").toLowerCase();

const reqBody = {
  price_amount: Number(order.amount),
  price_currency: priceCurrency,
  pay_currency: payCurrency,
  order_id: String(order.id),
  order_description: String(order.id),
  ipn_callback_url: callbackUrl,
  success_url: returnUrl,
  cancel_url: cancelUrl
};

if (order.contactEmail) {
  reqBody.customer_email = String(order.contactEmail);
}

const createRes = await fetch(`${apiBaseUrl}/invoice`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": apiKey
  },
  body: JSON.stringify(reqBody)
});

const createData = await createRes.json();

if (!createRes.ok) {
  return {
    ok: false,
    message: createData?.message || `NOWPayments create invoice failed: ${createRes.status}`
  };
}

const paymentUrl = createData.invoice_url || createData.pay_url || createData.url;
if (!paymentUrl) {
  return {
    ok: false,
    message: "NOWPayments did not return invoice_url"
  };
}

return {
  ok: true,
  paymentUrl: String(paymentUrl),
  tradeNo: createData.id ? String(createData.id) : undefined,
  responseBody: createData
};
