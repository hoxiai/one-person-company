// Pay.cc (Paycc) Serverless Integration

const order = payload.order || {};
const returnUrl = payload.returnUrl;
const cancelUrl = payload.cancelUrl; // Pay.cc has redirect_fail_url
const callbackUrl = payload.callbackUrl; // Used for server_callback_url

const endpointId = config.endpointId || config.endpoint_id || "";
const merchantControl = config.merchantControl || config.merchant_control || "";
const environment = config.environment || "sandbox"; // "sandbox" or "live"
const currency = (config.currency || "USD").toUpperCase();
const isGroupEndpoint = config.isGroupEndpoint || false;

if (!endpointId || !merchantControl) {
  return {
    ok: false,
    message: "Pay.cc endpointId or merchantControl is missing",
  };
}

try {
  // Pay.cc Base URLs
  const apiBaseUrl =
    environment === "live"
      ? "https://portal.pay.cc/payment/api/v2"
      : "https://staging.pay.cc/payment/api/v2";

  // Use the Hosted Payment Page (sale-form) API
  // According to docs, the endpoint depends on if it's a group endpoint or not
  const endpoint = isGroupEndpoint
    ? `/sale-form/group/${endpointId}`
    : `/sale-form/${endpointId}`;

  // Amount in minor units (e.g. 10.5 USD) -> Actually Pay.cc documentation says:
  // "The amount has to be specified in the highest units with . delimiter. For instance, 10.5 for USD means 10 US Dollars and 50 Cents."
  const amountStr = Number(order.amount).toFixed(2);
  const clientOrderId = String(order.id);
  let email = order.contactEmail;
  // 如果 order.contactEmail 不包含 @
  if (!email && !email.includes("@")) {
    email = clientOrderId + "@example.com";
  } else {
    email = clientOrderId + "@example.com";
  }

  // Generate SHA-1 Checksum
  // Control string concatenation: ENDPOINTID + client_orderid + amount + email + merchant_control
  const controlString = `${endpointId}${clientOrderId}${amountStr.replace(".", "", "")}${email}${merchantControl}`;
  const controlChecksum = crypto
    .createHash("sha1")
    .update(controlString)
    .digest("hex");

  // Build URL Encoded Payload
  let reqBodyParams = new URLSearchParams();
  reqBodyParams.append("client_orderid", clientOrderId);
  reqBodyParams.append("order_desc", `Order ${clientOrderId}`);
  reqBodyParams.append("amount", amountStr);
  reqBodyParams.append("currency", currency);
  reqBodyParams.append("email", email);
  reqBodyParams.append("site_url", "https://video.perfumex.top/");
  reqBodyParams.append("ipaddress", "65.153.12.232"); // Or get from event/req
  reqBodyParams.append("first_name", "John");
  reqBodyParams.append("last_name", "Smith");
  reqBodyParams.append("address1", "123 Main St");
  reqBodyParams.append("city", "New York");
  reqBodyParams.append("zip_code", "10001");
  reqBodyParams.append("country", "US");
  reqBodyParams.append("state", "NY");
  reqBodyParams.append("phone", "+12063582043");
  reqBodyParams.append("cell_phone", "+19023384543");

  reqBodyParams.append("control", controlChecksum);

  reqBodyParams.append("redirect_url", returnUrl);

  if (callbackUrl) {
    reqBodyParams.append("server_callback_url", callbackUrl);
  }

  // Pay.cc /sale-form API
  const createRes = await fetch(`${apiBaseUrl}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: reqBodyParams.toString(),
  });

  const resText = await createRes.text();

  // Pay.cc returns URL-encoded response for this API, not JSON!
  // e.g. type=async-form-response&serial-number=...&merchant-order-id=...&redirect-url=...
  const responseParams = new URLSearchParams(resText);
  const resType = responseParams.get("type");
  const resRedirectUrl = responseParams.get("redirect-url");
  const resOrderId = responseParams.get("paynet-order-id");
  const resError = responseParams.get("error-message");

  if (resRedirectUrl) {
    return {
      ok: true,
      orderId: clientOrderId,
      paymentUrl: String(resRedirectUrl),
      tradeNo: resOrderId ? String(resOrderId) : undefined,
      responseBody: resText,
    };
  }

  if (resType === "validation-error" || resError) {
    return {
      ok: false,
      message: `Pay.cc Error: ${resError || "Validation failed"}`,
      responseBody: resText,
    };
  }

  // If we can't parse it as URLSearchParams or it's missing redirect-url
  return {
    ok: false,
    message: "Pay.cc did not return a valid async-form-response redirect URL",
    responseBody: resText.substring(0, 500),
  };
} catch (error) {
  return {
    ok: false,
    message: `local Pay.cc request failed: ${error.message}`,
  };
}
