const normalizePem = (value) => String(value || "").replace(/\\n/g, "\n").trim();
const responseBody = "success";

const appid = String(config.appid || config.appId || "").trim();
const alipayPublicKey = normalizePem(
  config.alipayPublicKey || config.alipay_public_key || config.publicKey || "",
);
const sellerId = String(config.sellerId || config.seller_id || "").trim();
const signType = String(config.signType || config.sign_type || "RSA2").trim().toUpperCase();

const buildSignContent = (params) =>
  Object.keys(params)
    .filter((key) => {
      if (key === "sign" || key === "sign_type") return false;
      const value = params[key];
      return value !== undefined && value !== null && String(value) !== "";
    })
    .sort()
    .map((key) => `${key}=${String(params[key])}`)
    .join("&");

const parseFormBody = (rawBody) => {
  const params = new URLSearchParams(String(rawBody || ""));
  const result = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
};

if (!appid || !alipayPublicKey || signType !== "RSA2") {
  // 四个失败分支原本都只报「Invalid signature」,无法定位。这里只输出存在性,
  // 不打印密钥内容
  console.log("[alipay] 配置前置检查未通过", JSON.stringify({
    hasAppid: Boolean(appid),
    hasAlipayPublicKey: Boolean(alipayPublicKey),
    signType,
  }));
  return {
    isSignValid: false,
    orderId: payload.urlOrderId || "",
    status: "failed",
    responseBody: "failure",
    tradeNo: "",
  };
}

const notifyData =
  payload.rawBody && String(payload.rawBody).includes("=")
    ? parseFormBody(payload.rawBody)
    : payload.body && typeof payload.body === "object"
      ? payload.body
      : payload.query || {};

const sign = String(notifyData.sign || "");
const notifyAppId = String(notifyData.app_id || "");
const notifySellerId = String(notifyData.seller_id || "");
const orderId = String(notifyData.out_trade_no || payload.urlOrderId || "");
const tradeNo = String(notifyData.trade_no || "");
const tradeStatus = String(notifyData.trade_status || "");
const totalAmount = Number(notifyData.total_amount || 0);

if (!orderId || !sign || notifyAppId !== appid) {
  // 关键诊断:rawBody 为空会让 notifyData 解析不出任何字段,这里三项同时为空
  // 就说明问题出在 handler 取 body 那一层,而不是密钥配置
  console.log("[alipay] 回调报文字段缺失或 appid 不符", JSON.stringify({
    rawBodyLength: String(payload.rawBody || "").length,
    rawBodyHasEquals: String(payload.rawBody || "").includes("="),
    parsedKeys: Object.keys(notifyData || {}),
    hasOrderId: Boolean(orderId),
    hasSign: Boolean(sign),
    notifyAppId,
    configAppid: appid,
    appIdMatched: notifyAppId === appid,
  }));
  return {
    isSignValid: false,
    orderId,
    status: "failed",
    responseBody: "failure",
    tradeNo,
  };
}

if (sellerId && notifySellerId && notifySellerId !== sellerId) {
  console.log("[alipay] seller_id 不匹配", JSON.stringify({
    configSellerId: sellerId,
    notifySellerId,
  }));
  return {
    isSignValid: false,
    orderId,
    status: "failed",
    responseBody: "failure",
    tradeNo,
  };
}

const signContent = buildSignContent(notifyData);
const isSignValid = crypto.rsaSha256Verify(signContent, sign, alipayPublicKey);

if (!isSignValid) {
  // 走到这里说明字段都在、appid 也对,是 RSA2 验签本身失败:
  // 多为 alipayPublicKey 配成了「应用公钥」而非「支付宝公钥」,或密钥已轮换。
  // 另一类常见成因是 sign 里的 base64 含 '+' 未被正确编码,经 URLSearchParams
  // 解码后变成空格——signPlusCount 用来判别这种情况
  console.log("[alipay] RSA2 验签失败", JSON.stringify({
    signContentLength: signContent.length,
    signContentHead: signContent.slice(0, 80),
    paramCount: Object.keys(notifyData || {}).length,
    signLength: sign.length,
    signHasSpace: sign.includes(" "),
    publicKeyHeader: alipayPublicKey.slice(0, 30),
  }));
  return {
    isSignValid: false,
    orderId,
    status: "failed",
    responseBody: "failure",
    tradeNo,
  };
}

let status = "pending";
if (tradeStatus === "TRADE_SUCCESS" || tradeStatus === "TRADE_FINISHED") {
  status = "paid";
} else if (tradeStatus === "TRADE_CLOSED") {
  status = "failed";
}

return {
  isSignValid: true,
  orderId,
  tradeNo,
  status,
  amount: totalAmount > 0 ? totalAmount : 0,
  responseBody,
};
