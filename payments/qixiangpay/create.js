const order = payload.order || {};
const request = payload.request || {};
const callbackUrl = payload.callbackUrl;
const returnUrl = payload.returnUrl;

const pid = String(config.pid || config.mchid || "").trim();
const key = String(config.key || config.secret || "").trim();
const type = String(
  config.type || order.metaData?.qixiangType || order.metaData?.paymentType || "",
).trim();
const mode = String(config.mode || "api").toLowerCase();
const signType = String(config.signType || "MD5").toUpperCase();
const apiBaseUrl = String(config.apiBaseUrl || "https://api.payqixiang.cn/mapi.php");
const submitBaseUrl = String(
  config.submitBaseUrl || "https://api.payqixiang.cn/submit.php",
);
const namePrefix = String(config.namePrefix || "APayShop Order");

const normalizeIp = (value) => {
  const ip = String(value || "")
    .split(",")[0]
    .trim();
  if (!ip || ip === "::1" || ip === "::ffff:127.0.0.1") return "127.0.0.1";
  const v4Match = ip.match(/\d+\.\d+\.\d+\.\d+/);
  return v4Match ? v4Match[0] : "127.0.0.1";
};

const sortAndSign = (params, merchantKey) => {
  const keys = Object.keys(params)
    .filter((key) => {
      const value = params[key];
      return (
        key !== "sign" &&
        key !== "sign_type" &&
        value !== undefined &&
        value !== null &&
        String(value) !== ""
      );
    })
    .sort();

  const content = keys.map((key) => `${key}=${String(params[key])}`).join("&");
  return crypto.md5(`${content}${merchantKey}`);
};

const resolveDevice = () => {
  const configured = String(config.device || "jump").toLowerCase();
  if (configured !== "auto") return configured;

  const userAgent = String(request.userAgent || "");
  const isWechat = /MicroMessenger/i.test(userAgent);
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent);

  if (isWechat) return "wechat";
  if (isMobile) return "mobile";
  return "jump";
};

const truncateName = (value) => {
  const text = String(value || "").trim();
  if (!text) return `${namePrefix} ${order.id}`;
  return text.length > 60 ? text.slice(0, 60) : text;
};

if (!pid || !key) {
  return {
    ok: false,
    message: "QixiangPay config missing pid or key",
  };
}

if (mode === "api" && !type) {
  return {
    ok: false,
    message: "QixiangPay type is required in api mode, e.g. alipay or wxpay",
  };
}

const amount = Number(order.amount || 0);
if (!Number.isFinite(amount) || amount <= 0) {
  return {
    ok: false,
    message: "Invalid order amount for QixiangPay",
  };
}

const productName = truncateName(
  order.metaData?.title || order.metaData?.name || order.metaData?.productName,
);
const device = resolveDevice();
const clientip = normalizeIp(request.clientIp);
const outTradeNo = String(order.id);
const money = amount.toFixed(2);
const param = String(
  config.param || order.metaData?.qixiangParam || order.metaData?.param || "",
);

const baseParams = {
  pid,
  out_trade_no: outTradeNo,
  notify_url: callbackUrl,
  return_url: returnUrl,
  name: productName,
  money,
  param,
  sign_type: signType,
};

if (type) {
  baseParams.type = type;
}

let requestParams;
if (mode === "page") {
  requestParams = {
    ...baseParams,
  };
} else {
  requestParams = {
    ...baseParams,
    type,
    clientip,
    device,
  };
}

requestParams.sign = sortAndSign(requestParams, key);

try {
  if (mode === "page") {
    const search = new URLSearchParams();
    Object.keys(requestParams).forEach((key) => {
      if (
        requestParams[key] !== undefined &&
        requestParams[key] !== null &&
        String(requestParams[key]) !== ""
      ) {
        search.append(key, String(requestParams[key]));
      }
    });

    const paymentUrl = `${submitBaseUrl}?${search.toString()}`;
    return {
      ok: true,
      paymentUrl,
      tradeNo: outTradeNo,
      responseBody: {
        mode,
        device,
        requestParams,
      },
    };
  }

  const body = new URLSearchParams();
  Object.keys(requestParams).forEach((key) => {
    body.append(key, String(requestParams[key]));
  });

  const response = await fetch(apiBaseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    return {
      ok: false,
      message: data.msg || data.message || "QixiangPay request failed",
      responseBody: data,
    };
  }

  if (Number(data.code) !== 1) {
    return {
      ok: false,
      message: data.msg || data.message || "QixiangPay create order failed",
      responseBody: data,
    };
  }

  const paymentUrl = String(data.payurl || data.qrcode || "");
  if (!paymentUrl) {
    return {
      ok: false,
      message: "QixiangPay did not return payurl or qrcode",
      responseBody: data,
    };
  }

  return {
    ok: true,
    paymentUrl,
    tradeNo: data.trade_no ? String(data.trade_no) : outTradeNo,
    responseBody: data,
  };
} catch (error) {
  return {
    ok: false,
    message: `QixiangPay request failed: ${error.message}`,
  };
}
