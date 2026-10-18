const normalizePem = (value) => String(value || "").replace(/\\n/g, "\n").trim();
const getHeader = (name) => {
  const lower = name.toLowerCase();
  return (
    payload.headers?.[lower] ||
    payload.headers?.[name] ||
    payload.headers?.[name.replace(/(^|-)([a-z])/g, (_, a, b) => `${a}${b.toUpperCase()}`)] ||
    ""
  );
};

const responseBody = { code: "SUCCESS", message: "成功" };
const rawBody = payload.rawBody || "";
const platformPublicKey = normalizePem(
  config.platformPublicKey || config.platform_public_key || config.publicKey || "",
);
const platformSerialNo = String(
  config.platformSerialNo || config.platform_serial_no || "",
).trim();
const apiV3Key = String(config.apiV3Key || config.api_v3_key || "").trim();

const timestamp = String(getHeader("wechatpay-timestamp"));
const nonce = String(getHeader("wechatpay-nonce"));
const signature = String(getHeader("wechatpay-signature"));
const serial = String(getHeader("wechatpay-serial"));

if (!platformPublicKey || !apiV3Key || !timestamp || !nonce || !signature) {
  // 四个失败分支原本都只报「Invalid signature」,无法定位。这里只输出存在性与
  // 序列号(非密钥内容),便于排查缺配置 / 证书不匹配 / 真验签失败
  console.log("[wechat] 验签前置检查未通过", JSON.stringify({
    hasPlatformPublicKey: Boolean(platformPublicKey),
    hasApiV3Key: Boolean(apiV3Key),
    hasTimestamp: Boolean(timestamp),
    hasNonce: Boolean(nonce),
    hasSignature: Boolean(signature),
    headerKeys: Object.keys(payload.headers || {}).filter((k) => k.toLowerCase().indexOf("wechat") === 0),
  }));
  return {
    isSignValid: false,
    orderId: payload.urlOrderId || "",
    status: "failed",
    responseBody,
    tradeNo: "",
  };
}

if (platformSerialNo && serial && platformSerialNo !== serial) {
  // 常见坑:微信从「平台证书」迁到「平台公钥」后回调头的 serial 变成
  // PUB_KEY_ID_xxx 形态,而配置里还留着旧的证书序列号,于是这里直接判失败
  console.log("[wechat] 证书序列号不匹配", JSON.stringify({
    configPlatformSerialNo: platformSerialNo,
    headerWechatpaySerial: serial,
  }));
  return {
    isSignValid: false,
    orderId: payload.urlOrderId || "",
    status: "failed",
    responseBody,
    tradeNo: "",
  };
}

const signedMessage = `${timestamp}\n${nonce}\n${rawBody}\n`;
const verified = crypto.rsaSha256Verify(signedMessage, signature, platformPublicKey);

if (!verified) {
  // 走到这里说明配置齐全、序列号也对上了,是 RSA 验签本身失败:
  // 多为 platformPublicKey 配错(误填商户证书公钥)或平台证书/公钥已轮换
  console.log("[wechat] RSA 验签失败", JSON.stringify({
    headerWechatpaySerial: serial,
    configPlatformSerialNo: platformSerialNo || "(未配置,跳过序列号比对)",
    rawBodyLength: rawBody.length,
    timestamp,
    publicKeyHeader: platformPublicKey.slice(0, 30),
  }));
  return {
    isSignValid: false,
    orderId: payload.urlOrderId || "",
    status: "failed",
    responseBody,
    tradeNo: "",
  };
}

let decrypted = {};
try {
  const notifyBody = payload.body || JSON.parse(rawBody || "{}");
  const resource = notifyBody.resource || {};
  const decryptedText = crypto.aes256GcmDecrypt(
    resource.ciphertext || "",
    apiV3Key,
    resource.nonce || "",
    resource.associated_data || "",
  );
  decrypted = JSON.parse(decryptedText || "{}");
} catch (error) {
  // 验签已通过,这里是 AES-256-GCM 解密/解析失败——通常是 apiV3Key 不对
  // (它与验签用的公钥是两套凭据,只错一个就会卡在这一步)
  console.log("[wechat] 回调报文解密失败", JSON.stringify({
    message: String(error && error.message || error),
    apiV3KeyLength: apiV3Key.length,
  }));
  return {
    isSignValid: false,
    orderId: payload.urlOrderId || "",
    status: "failed",
    responseBody,
    tradeNo: "",
  };
}

const orderId = String(decrypted.out_trade_no || payload.urlOrderId || "");
const tradeNo = String(decrypted.transaction_id || "");
const tradeState = String(decrypted.trade_state || "");
const totalAmount = Number(decrypted.amount?.total || 0);

let status = "pending";
if (tradeState === "SUCCESS") {
  status = "paid";
} else if (["CLOSED", "REVOKED", "PAYERROR"].includes(tradeState)) {
  status = "failed";
}

return {
  isSignValid: true,
  orderId,
  tradeNo,
  status,
  amount: totalAmount > 0 ? totalAmount / 100 : 0,
  responseBody,
};
