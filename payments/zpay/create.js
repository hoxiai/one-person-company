const order = payload.order || {};
const request = payload.request || {};
const callbackUrl = payload.callbackUrl;
const returnUrl = payload.returnUrl;

const pid = String(config.pid || config.mchid || "").trim();
const key = String(config.key || config.secret || "").trim();
const type = String(
  payload.input?.type ||
  payload.input?.paymentType ||
  order.metaData?.zpayType ||
  order.metaData?.paymentType ||
  config.type ||
  "alipay",
).trim();
const mode = String(config.mode || "page").toLowerCase();
const signType = String(config.signType || "MD5").toUpperCase();
const submitUrl = String(
  config.submitUrl || config.submitBaseUrl || "https://z-pay.cn/submit.php",
).trim();
const apiBaseUrl = String(
  config.apiBaseUrl || "https://z-pay.cn/mapi.php",
).trim();
const sitename = String(config.sitename || config.siteName || "APay").trim();
const namePrefix = String(config.namePrefix || "APay Order").trim();

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
    .filter((k) => {
      const v = params[k];
      return (
        k !== "sign" &&
        k !== "sign_type" &&
        v !== undefined &&
        v !== null &&
        String(v) !== ""
      );
    })
    .sort();

  const content = keys.map((k) => `${k}=${String(params[k])}`).join("&");
  return crypto.md5(`${content}${merchantKey}`);
};

const resolveDevice = () => {
  const configured = String(config.device || "auto").toLowerCase();
  if (configured !== "auto") return configured;

  const userAgent = String(request.userAgent || "");
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent);
  return isMobile ? "mobile" : "pc";
};

const truncateName = (value) => {
  const text = String(value || "").trim();
  if (!text) return `${namePrefix} ${order.id}`;
  return text.length > 64 ? text.slice(0, 64) : text;
};

if (!pid || !key) {
  return {
    ok: false,
    message: "Z-Pay config missing pid or key",
  };
}

const amount = Number(order.amount || 0);
if (!Number.isFinite(amount) || amount <= 0) {
  return {
    ok: false,
    message: "Invalid order amount for Z-Pay",
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
  config.param || order.metaData?.zpayParam || order.metaData?.param || "",
).trim();

const baseParams = {
  pid,
  money,
  name: productName,
  notify_url: callbackUrl,
  out_trade_no: outTradeNo,
  return_url: returnUrl,
  sitename,
  type,
};

if (param) {
  baseParams.param = param;
}

try {
  if (mode === "page") {
    const sign = sortAndSign(baseParams, key);
    const requestParams = {
      ...baseParams,
      sign,
      sign_type: signType,
    };

    const search = new URLSearchParams();
    Object.keys(requestParams).forEach((k) => {
      const val = requestParams[k];
      if (val !== undefined && val !== null && String(val) !== "") {
        search.append(k, String(val));
      }
    });

    const paymentUrl = submitUrl.includes("?")
      ? `${submitUrl}&${search.toString()}`
      : `${submitUrl}?${search.toString()}`;

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

  // API mode
  const apiParams = {
    ...baseParams,
    clientip,
    device,
  };
  apiParams.sign = sortAndSign(apiParams, key);
  apiParams.sign_type = signType;

  const body = new URLSearchParams();
  Object.keys(apiParams).forEach((k) => {
    body.append(k, String(apiParams[k]));
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
      message: data.msg || data.message || "Z-Pay request failed",
      responseBody: data,
    };
  }

  if (Number(data.code) !== 1) {
    return {
      ok: false,
      message: data.msg || data.message || "Z-Pay create order failed",
      responseBody: data,
    };
  }

  const paymentUrl = String(data.payurl || data.qrcode || data.urlscheme || "");
  if (!paymentUrl) {
    return {
      ok: false,
      message: "Z-Pay did not return payurl or qrcode",
      responseBody: data,
    };
  }

  return {
    ok: true,
    paymentUrl,
    qrCodeText: data.qrcode ? String(data.qrcode) : undefined,
    tradeNo: data.trade_no ? String(data.trade_no) : outTradeNo,
    responseBody: data,
  };
} catch (error) {
  return {
    ok: false,
    message: `Z-Pay request failed: ${error.message}`,
  };
}
