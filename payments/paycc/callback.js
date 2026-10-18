// ====== Pay.cc (Paycc) Callback Script ======
// Pay.cc Server-to-Server callbacks arrive at /api/webhooks/[order_id]
// or via synchronous redirection.

const orderId = payload.urlOrderId;
const body = payload.body || {};

// Pay.cc sends transaction details in form URL encoded POST
// Typically includes `client_orderid`, `orderid` (paynet order id), `status`
const clientOrderId = body.client_orderid || payload.query.client_orderid;
const finalOrderId = orderId || clientOrderId;

const tradeNo =
  body.orderid || body.paynet_order_id || payload.query.orderid || "";

if (!finalOrderId) {
  return {
    isSignValid: false,
    orderId: finalOrderId,
    status: "failed",
    responseBody: "fail: no orderId found in callback payload",
    tradeNo: tradeNo,
  };
}

const merchantControl = config.merchantControl || config.merchant_control || "";
let isSignValid = false;
let status = "pending";
let amount = 0;

try {
  // Pay.cc uses a `control` hash in its callbacks to verify authenticity
  // The control hash for callback usually is:
  // SHA-1(status + orderid + client_orderid + merchant_control)
  const receivedControl = body.control || payload.query.control;
  const cbStatus = body.status || payload.query.status;

  if (receivedControl && merchantControl) {
    const controlString = `${cbStatus}${tradeNo}${clientOrderId}${merchantControl}`;
    const calculatedControl = crypto
      .createHash("sha1")
      .update(controlString)
      .digest("hex");

    if (calculatedControl === receivedControl) {
      isSignValid = true;

      // Pay.cc Statuses: approved, declined, error, processing
      if (cbStatus === "approved") {
        status = "paid";
        amount = body.amount ? parseFloat(body.amount) : 0;
      } else if (cbStatus === "declined" || cbStatus === "error") {
        status = "failed";
      } else {
        status = "pending";
      }
    } else {
      throw new Error(
        `Signature mismatch. Expected: ${calculatedControl}, Received: ${receivedControl}`,
      );
    }
  } else {
    // If no control hash or secret is available, we cannot trust this webhook
    // A robust system would call a status check API to verify
    const endpointId = config.endpointId || config.endpoint_id || "";
    const merchantLogin = config.merchantLogin || config.merchant_login || "";
    const environment = config.environment || "sandbox";
    const isGroupEndpoint = config.isGroupEndpoint || false;
    const apiBaseUrl =
      environment === "live"
        ? "https://portal.pay.cc/payment/api/v2"
        : "https://staging.pay.cc/payment/api/v2";

    if (endpointId && merchantLogin && tradeNo) {
      // Active Polling/Verification
      // Status endpoint requires SHA-1: merchant_login + client_orderid + orderid + merchant_control
      const statusControlStr = `${merchantLogin}${clientOrderId}${tradeNo}${merchantControl}`;
      const statusControlHash = crypto
        .createHash("sha1")
        .update(statusControlStr)
        .digest("hex");

      const verifyParams = new URLSearchParams();
      verifyParams.append("client_orderid", clientOrderId);
      verifyParams.append("orderid", tradeNo);
      verifyParams.append("login", merchantLogin);
      verifyParams.append("control", statusControlHash);

      const statusEndpoint = isGroupEndpoint
        ? `/status/group/${endpointId}`
        : `/status/${endpointId}`;

      const verifyRes = await fetch(`${apiBaseUrl}${statusEndpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: verifyParams.toString(),
      });

      const verifyData = await verifyRes.json();

      if (verifyData.status === "approved") {
        isSignValid = true;
        status = "paid";
        amount = verifyData.amount ? parseFloat(verifyData.amount) : 0;
      } else if (
        verifyData.status === "declined" ||
        verifyData.status === "error"
      ) {
        isSignValid = true;
        status = "failed";
      } else {
        throw new Error(
          `Failed to verify Pay.cc transaction or not approved: ${verifyData.status}`,
        );
      }
    } else {
      throw new Error(
        "Missing required credentials to verify Pay.cc transaction.",
      );
    }
  }
} catch (e) {
  console.error("Pay.cc verification error:", e.message);
  return {
    isSignValid: false,
    orderId: finalOrderId,
    status: "failed",
    responseBody: `fail: verification error - ${e.message}`,
    tradeNo: tradeNo,
  };
}

// Return unified result
return {
  isSignValid: isSignValid,
  orderId: finalOrderId,
  tradeNo: String(tradeNo),
  status: status,
  amount: amount,
  responseBody: "success",
};
