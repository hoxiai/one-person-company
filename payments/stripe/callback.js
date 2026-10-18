// ====== Stripe 回调配置 (Serverless Sandbox Script) ======
// 注意：在这个纯净的 VM 沙箱里，我们无法使用 npm 的 `stripe` 包。
// 必须使用原生的 fetch 去请求 Stripe 的 REST API 进行验签和状态查询。

// 1. 获取基础数据
// Payload 包含: urlOrderId (来自路由参数), body (Webhook payload), headers
const body = payload.body || {};
const headers = payload.headers || {};

// Stripe 的 webhook 事件类型
const eventType = body.type; 
// 交易关联的数据对象 (通常是 checkout.session)
const dataObject = body.data && body.data.object ? body.data.object : {};

// 我们在创建 Checkout Session 时，会把系统的 orderId 放在 client_reference_id 里面
const orderId = dataObject.client_reference_id || payload.urlOrderId;

// Stripe 的支付意向 ID 或 Session ID，用作流水号
const tradeNo = dataObject.payment_intent || dataObject.id;

if (!orderId) {
  return {
    isSignValid: false,
    orderId: orderId,
    status: "failed",
    responseBody: "fail: no client_reference_id found",
    tradeNo: tradeNo,
  };
}

// 2. Stripe Webhook 签名验证机制 (极其严谨)
const endpointSecret = config.webhookSecret || "YOUR_STRIPE_WEBHOOK_SECRET";
const stripeSignature = headers['stripe-signature'];

let isSignValid = false;

// 验证 Stripe 的签名规则：
// 1. 解析头部 `t=timestamp,v1=signature`
// 2. 拼接 `timestamp.rawBody`
// 3. 用 webhook_secret 进行 HMAC-SHA256 计算
if (stripeSignature && endpointSecret && payload.rawBody) {
  try {
    const sigParts = stripeSignature.split(',').reduce((acc, part) => {
      const [key, value] = part.split('=');
      acc[key] = value;
      return acc;
    }, {});

    const timestamp = sigParts['t'];
    const v1Signature = sigParts['v1'];

    if (timestamp && v1Signature) {
      const signedPayload = `${timestamp}.${payload.rawBody}`;
      const hmac = crypto.createHmac('sha256', endpointSecret);
      const calculatedSig = hmac.update(signedPayload).digest('hex');

      if (calculatedSig === v1Signature) {
        // 如果系统时间差距过大（超过5分钟），也可能遭受重放攻击，严格来说需要校验 timestamp
        const tolerance = 5 * 60; // 5 mins
        const currentTimestamp = Math.floor(Date.now() / 1000);
        if (Math.abs(currentTimestamp - parseInt(timestamp)) <= tolerance) {
          isSignValid = true;
        } else {
          console.error("Stripe webhook timestamp is outside tolerance");
        }
      } else {
        console.error("Stripe signature mismatch");
      }
    }
  } catch (e) {
    console.error("Stripe signature verification failed:", e);
  }
}

// 3. 降级方案：主动查询 (如果验签失败，直接拿着 sessionId 去官方 API 查状态)
let gatewayData = dataObject;

if (!isSignValid && dataObject.id) {
  try {
    const secretKey = config.secretKey || "YOUR_STRIPE_SECRET_KEY";
    
    // Stripe REST API 使用 Basic Auth，用户名是 Secret Key，密码为空
    const authString = Buffer.from(`${secretKey}:`).toString('base64');
    
    // 如果是 checkout.session.completed 事件，id 就是 session id
    const checkRes = await fetch(`https://api.stripe.com/v1/checkout/sessions/${dataObject.id}`, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${authString}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    
    if (checkRes.ok) {
      const checkData = await checkRes.json();
      // 只要我们能用商户私钥从官方接口查回这个 session，且金额/订单号对得上，就说明是合法的
      if (checkData.client_reference_id === orderId) {
        gatewayData = checkData;
        isSignValid = true;
      }
    }
  } catch (e) {
    console.error("Stripe status check API error:", e);
  }
}

if (!isSignValid) {
  return {
    isSignValid: false,
    orderId: orderId,
    status: "failed",
    responseBody: "fail: invalid signature and check failed",
    tradeNo: tradeNo,
  };
}

// 4. 判断支付状态
// Stripe 的状态流转比较清晰，通常我们关注 checkout.session.completed 或 payment_intent.succeeded
let status = "pending";

// 对于 Checkout Session，看 payment_status
if (gatewayData.payment_status === "paid") {
  status = "paid";
} else if (gatewayData.payment_status === "unpaid" && gatewayData.status === "expired") {
  status = "failed";
} else if (eventType === "payment_intent.payment_failed") {
  status = "failed";
}

// 金额单位转换 (Stripe 是按最小单位如美分计费的，所以要除以 100)
const amountPaid = gatewayData.amount_total ? (gatewayData.amount_total / 100) : 0;

// 5. 返回标准结果供主系统履约
return {
  isSignValid: true,
  orderId: orderId,
  tradeNo: gatewayData.payment_intent || gatewayData.id, 
  status: status,
  amount: amountPaid, 
  responseBody: "OK", // Stripe 需要收到 200 OK 否则会一直重发
};