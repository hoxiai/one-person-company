// 微信支付 V3 主动查单(商户订单号)
// GET /v3/pay/transactions/out-trade-no/{out_trade_no}?mchid={mchid}
//
// 用途:回调没送达或验签失败时的补偿。微信官方明确要求商户实现主动查单——
// 通知不保证到达,而这里的返回是权威的支付状态。
//
// 只依赖商户侧凭据(serialNo + privateKey)做请求签名,不需要平台公钥,
// 所以即便 platformPublicKey / platformSerialNo 配错(正是回调挂掉的常见原因)
// 这条路径依然可用。

const order = payload.order || {};

const normalizePem = (value) => String(value || "").replace(/\\n/g, "\n").trim();

const appid = config.appid || config.appId || "";
const mchid = config.mchid || config.mchId || "";
const serialNo = config.serialNo || config.serial_no || "";
const privateKey = normalizePem(config.privateKey || config.private_key || "");
const baseUrl = (config.baseUrl || "https://api.mch.weixin.qq.com").replace(/\/+$/, "");

if (!mchid || !serialNo || !privateKey) {
  return {
    ok: false,
    status: "unknown",
    message: "Wechat Pay config missing mchid/serialNo/privateKey",
  };
}

const outTradeNo = String(order.id || "");
if (!outTradeNo) {
  return { ok: false, status: "unknown", message: "Missing out_trade_no" };
}

const endpoint = `/v3/pay/transactions/out-trade-no/${encodeURIComponent(outTradeNo)}?mchid=${encodeURIComponent(mchid)}`;

// GET 请求签名串的 body 段为空字符串,但换行必须保留
const nonceStr = crypto.randomString(32);
const timestamp = String(Math.floor(Date.now() / 1000));
const canonicalMessage = `GET\n${endpoint}\n${timestamp}\n${nonceStr}\n\n`;
const signature = crypto.rsaSha256Sign(canonicalMessage, privateKey);
const authorization =
  `WECHATPAY2-SHA256-RSA2048 mchid="${mchid}",` +
  `nonce_str="${nonceStr}",timestamp="${timestamp}",serial_no="${serialNo}",signature="${signature}"`;

try {
  const response = await fetch(`${baseUrl}${endpoint}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: authorization,
      "User-Agent": "APayShop-WechatPay/1.0",
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    // ORDERNOTEXIST:微信侧根本没有这笔单(通常是还没发起过支付),不是错误
    const code = String(data.code || "");
    if (code === "ORDERNOTEXIST") {
      return { ok: true, status: "unpaid", raw: data };
    }
    console.log("[wechat] 查单失败", JSON.stringify({
      httpStatus: response.status,
      code,
      message: data.message || data.detail || "",
      outTradeNo,
    }));
    return {
      ok: false,
      status: "unknown",
      message: data.message || data.detail || code || "Wechat Pay query failed",
      raw: data,
    };
  }

  const tradeState = String(data.trade_state || "");
  let status = "unknown";
  if (tradeState === "SUCCESS") {
    status = "paid";
  } else if (["NOTPAY", "USERPAYING"].includes(tradeState)) {
    status = "unpaid";
  } else if (["CLOSED", "REVOKED", "PAYERROR"].includes(tradeState)) {
    status = "closed";
  } else if (tradeState === "REFUND") {
    // 已退款说明确实支付过,但不该再触发履约
    status = "closed";
  }

  const totalFen = Number((data.amount && data.amount.total) || 0);

  console.log("[wechat] 查单结果", JSON.stringify({
    outTradeNo,
    tradeState,
    status,
    transactionId: data.transaction_id || "",
  }));

  return {
    ok: true,
    status,
    tradeNo: data.transaction_id ? String(data.transaction_id) : undefined,
    amount: totalFen > 0 ? totalFen / 100 : undefined,
    raw: data,
  };
} catch (error) {
  return {
    ok: false,
    status: "unknown",
    message: `Wechat Pay query failed: ${error.message}`,
  };
}
