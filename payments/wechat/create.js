const order = payload.order || {};
const request = payload.request || {};
const callbackUrl = payload.callbackUrl;
const returnUrl = payload.returnUrl;

const normalizePem = (value) => String(value || "").replace(/\\n/g, "\n").trim();
const normalizeIp = (value) => {
  const ip = String(value || "").split(",")[0].trim();
  if (!ip || ip === "::1" || ip === "::ffff:127.0.0.1") return "127.0.0.1";
  return ip;
};

const appid = config.appid || config.appId || "";
const mchid = config.mchid || config.mchId || "";
const serialNo = config.serialNo || config.serial_no || "";
const privateKey = normalizePem(config.privateKey || config.private_key || "");
const currency = (config.currency || "CNY").toUpperCase();
const baseUrl = (config.baseUrl || "https://api.mch.weixin.qq.com").replace(/\/+$/, "");
const descriptionPrefix = config.descriptionPrefix || "APayShop Order";
const tradeType = String(config.tradeType || "auto").toLowerCase();

if (!appid || !mchid || !serialNo || !privateKey) {
  return {
    ok: false,
    message: "Wechat Pay config missing appid/mchid/serialNo/privateKey",
  };
}

const userAgent = String(request.userAgent || "");
const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent);
const isWechat = /MicroMessenger/i.test(userAgent);

let resolvedTradeType = tradeType;
if (resolvedTradeType === "auto") {
  resolvedTradeType = isMobile && !isWechat ? "h5" : "native";
}
if (!["native", "h5"].includes(resolvedTradeType)) {
  return {
    ok: false,
    message: `Unsupported Wechat tradeType: ${resolvedTradeType}`,
  };
}

const endpoint =
  resolvedTradeType === "h5"
    ? "/v3/pay/transactions/h5"
    : "/v3/pay/transactions/native";

const total = Math.max(1, Math.round(Number(order.amount || 0) * 100));
if (!Number.isFinite(total) || total <= 0) {
  return {
    ok: false,
    message: "Invalid order amount for Wechat Pay",
  };
}

const requestBody = {
  appid,
  mchid,
  description: `${descriptionPrefix} ${order.id}`,
  out_trade_no: String(order.id),
  notify_url: callbackUrl,
  amount: {
    total,
    currency,
  },
};

if (resolvedTradeType === "h5") {
  requestBody.scene_info = {
    payer_client_ip: normalizeIp(request.clientIp),
    h5_info: {
      type: "Wap",
    },
  };
}

const callWechatApi = async (targetEndpoint, payloadBody) => {
  const nonce = crypto.randomString(32);
  const ts = String(Math.floor(Date.now() / 1000));
  const rawJson = JSON.stringify(payloadBody);
  const msg = `POST\n${targetEndpoint}\n${ts}\n${nonce}\n${rawJson}\n`;
  const sig = crypto.rsaSha256Sign(msg, privateKey);
  const authHeader = `WECHATPAY2-SHA256-RSA2048 mchid="${mchid}",nonce_str="${nonce}",timestamp="${ts}",serial_no="${serialNo}",signature="${sig}"`;

  const resp = await fetch(`${baseUrl}${targetEndpoint}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: authHeader,
      "User-Agent": "APayShop-WechatPay/1.0",
    },
    body: rawJson,
  });

  const resData = await resp.json().catch(() => ({}));
  return { ok: resp.ok, status: resp.status, data: resData };
};

try {
  let apiRes = await callWechatApi(endpoint, requestBody);
  let effectiveTradeType = resolvedTradeType;

  // 若 H5 支付因未开通权限报错 (NO_AUTH / 403)，自动平滑降级为 Native 扫码支付
  if (!apiRes.ok && resolvedTradeType === "h5") {
    const nativeEndpoint = "/v3/pay/transactions/native";
    const nativeBody = {
      appid,
      mchid,
      description: `${descriptionPrefix} ${order.id}`,
      out_trade_no: String(order.id),
      notify_url: callbackUrl,
      amount: {
        total,
        currency,
      },
    };
    const fallbackRes = await callWechatApi(nativeEndpoint, nativeBody);
    if (fallbackRes.ok && fallbackRes.data?.code_url) {
      apiRes = fallbackRes;
      effectiveTradeType = "native";
    }
  }

  const data = apiRes.data || {};
  if (!apiRes.ok) {
    return {
      ok: false,
      message:
        data.message ||
        data.detail ||
        data.code ||
        "Failed to create Wechat Pay order",
    };
  }

  let paymentUrl = "";
  let qrCodeText = "";
  if (effectiveTradeType === "h5") {
    paymentUrl = String(data.h5_url || "");
    if (paymentUrl && returnUrl) {
      const separator = paymentUrl.includes("?") ? "&" : "?";
      paymentUrl += `${separator}redirect_url=${encodeURIComponent(returnUrl)}`;
    }
  } else {
    qrCodeText = String(data.code_url || "");
  }

  if (!paymentUrl && !qrCodeText) {
    return {
      ok: false,
      message: "Wechat Pay did not return a usable payment URL",
    };
  }

  return {
    ok: true,
    paymentUrl,
    qrCodeText,
    tradeType: effectiveTradeType,
    tradeNo: data.prepay_id ? String(data.prepay_id) : undefined,
    responseBody: {
      tradeType: effectiveTradeType,
      raw: data,
    },
  };
} catch (error) {
  return {
    ok: false,
    message: `Wechat Pay request failed: ${error.message}`,
  };
}
