const order = payload.order || {};
const request = payload.request || {};
const callbackUrl = payload.callbackUrl;
const returnUrl = payload.returnUrl;
const cancelUrl = payload.cancelUrl;

const normalizePem = (value) => String(value || "").replace(/\\n/g, "\n").trim();
const pad = (value) => String(value).padStart(2, "0");
const formatTimestamp = (offsetMinutes) => {
  const date = new Date(Date.now() + Number(offsetMinutes || 0) * 60 * 1000);
  return (
    `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())} ` +
    `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}`
  );
};
const buildSignContent = (params) =>
  Object.keys(params)
    .filter((key) => params[key] !== undefined && params[key] !== null && String(params[key]) !== "")
    .sort()
    .map((key) => `${key}=${String(params[key])}`)
    .join("&");
const buildQueryString = (params) =>
  Object.keys(params)
    .filter((key) => params[key] !== undefined && params[key] !== null && String(params[key]) !== "")
    .sort()
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(String(params[key]))}`)
    .join("&");
const callGateway = async (params) => {
  const body = buildQueryString(params);
  const response = await fetch(gateway, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=" + charset,
    },
    body,
  });
  const text = await response.text();
  let data = null;
  try {
    data = JSON.parse(text);
  } catch {
    return {
      ok: false,
      message: "Alipay gateway returned non-JSON response",
      responseBody: text,
    };
  }
  return {
    ok: response.ok,
    data,
    responseBody: data,
  };
};

const appid = String(config.appid || config.appId || "").trim();
const privateKey = normalizePem(config.privateKey || config.private_key || "");
const gateway = String(config.gateway || config.gatewayUrl || "https://openapi.alipay.com/gateway.do").trim();
const charset = String(config.charset || "utf-8").trim();
const signType = String(config.signType || config.sign_type || "RSA2").trim().toUpperCase();
const version = String(config.version || "1.0").trim();
const descriptionPrefix = String(config.descriptionPrefix || "APayShop Order").trim();
const sellerId = String(config.sellerId || config.seller_id || "").trim();
const appAuthToken = String(config.appAuthToken || config.app_auth_token || "").trim();
const timeoutExpress = String(config.timeoutExpress || config.timeout_express || "").trim();
const passbackParams = String(config.passbackParams || config.passback_params || "").trim();
const tradeType = String(config.tradeType || "auto").toLowerCase();
const timestampOffsetMinutes = Number(
  config.timestampOffsetMinutes ?? config.timestamp_offset_minutes ?? 480,
);

if (!appid || !privateKey) {
  return {
    ok: false,
    message: "Alipay config missing appid/privateKey",
  };
}

if (signType !== "RSA2") {
  return {
    ok: false,
    message: `Unsupported Alipay signType: ${signType}. Only RSA2 is supported.`,
  };
}

const userAgent = String(request.userAgent || "");
const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent);

let resolvedTradeType = tradeType;
if (resolvedTradeType === "auto") {
  // 桌面端走「电脑网站支付」(alipay.trade.page.pay),不是「当面付」
  // (alipay.trade.precreate):当面付属线下扫码收款产品,多数线上商户并未签约,
  // 调用会被支付宝拒为「接口调用权限不足」。auto 的语义是「按端选常规网站支付」,
  // 需要扫码收款的场景请显式配置 tradeType=precreate。
  resolvedTradeType = isMobile ? "wap" : "page";
}

if (!["page", "wap", "precreate"].includes(resolvedTradeType)) {
  return {
    ok: false,
    message: `Unsupported Alipay tradeType: ${resolvedTradeType}`,
  };
}

const amount = Number(order.amount || 0);
if (!Number.isFinite(amount) || amount <= 0) {
  return {
    ok: false,
    message: "Invalid order amount for Alipay",
  };
}

const method =
  resolvedTradeType === "wap"
    ? "alipay.trade.wap.pay"
    : resolvedTradeType === "precreate"
      ? "alipay.trade.precreate"
      : "alipay.trade.page.pay";
const bizContent = {
  out_trade_no: String(order.id),
  total_amount: amount.toFixed(2),
  subject: `${descriptionPrefix} ${order.id}`,
};

let configuredQrPayMode = undefined;
if (resolvedTradeType === "wap") {
  bizContent.product_code = "QUICK_WAP_WAY";
} else if (resolvedTradeType === "precreate") {
  bizContent.product_code = "FACE_TO_FACE_PAYMENT";
} else {
  bizContent.product_code = "FAST_INSTANT_TRADE_PAY";
  // 电脑网站支付原生前置二维码模式 (默认启用 qr_pay_mode: "4", 纯二维码模式)
  configuredQrPayMode = String(config.qrPayMode ?? config.qr_pay_mode ?? "4").trim();
  if (configuredQrPayMode) {
    bizContent.qr_pay_mode = configuredQrPayMode;
    bizContent.qrcode_width = String(config.qrcodeWidth ?? config.qrcode_width ?? "200").trim();
  }
}

if (sellerId) {
  bizContent.seller_id = sellerId;
}
if (timeoutExpress) {
  bizContent.timeout_express = timeoutExpress;
}
if (resolvedTradeType === "wap" && cancelUrl) {
  bizContent.quit_url = cancelUrl;
}

const requestParams = {
  app_id: appid,
  method,
  format: "JSON",
  charset,
  sign_type: signType,
  timestamp: formatTimestamp(timestampOffsetMinutes),
  version,
  notify_url: callbackUrl,
  return_url: returnUrl,
  biz_content: JSON.stringify(bizContent),
};

if (appAuthToken) {
  requestParams.app_auth_token = appAuthToken;
}
if (passbackParams) {
  requestParams.passback_params = passbackParams;
}

const signContent = buildSignContent(requestParams);
const sign = crypto.rsaSha256Sign(signContent, privateKey);

if (resolvedTradeType === "precreate") {
  const gatewayResult = await callGateway({
    ...requestParams,
    sign,
  });
  if (!gatewayResult.ok || !gatewayResult.data) {
    return {
      ok: false,
      message: gatewayResult.message || "Failed to request Alipay precreate gateway",
      responseBody: gatewayResult.responseBody,
    };
  }

  const responsePayload = gatewayResult.data.alipay_trade_precreate_response || {};
  if (String(responsePayload.code || "") !== "10000" || !responsePayload.qr_code) {
    return {
      ok: false,
      message: String(responsePayload.sub_msg || responsePayload.msg || "Failed to create Alipay QR order"),
      responseBody: gatewayResult.data,
    };
  }

  return {
    ok: true,
    qrCodeText: String(responsePayload.qr_code),
    tradeType: resolvedTradeType,
    tradeNo: responsePayload.out_trade_no ? String(responsePayload.out_trade_no) : undefined,
    responseBody: gatewayResult.data,
  };
}

const paymentUrl = `${gateway}${gateway.includes("?") ? "&" : "?"}${buildQueryString({
  ...requestParams,
  sign,
})}`;

return {
  ok: true,
  paymentUrl,
  tradeType: resolvedTradeType,
  qrPayMode: configuredQrPayMode,
  responseBody: {
    tradeType: resolvedTradeType,
    method,
  },
};
