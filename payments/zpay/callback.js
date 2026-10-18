const orderId = String(payload.urlOrderId || payload.query?.out_trade_no || payload.body?.out_trade_no || "").trim();
const body = payload.body || {};
const query = payload.query || {};
const callbackData = Object.assign({}, query, body);

const pid = String(config.pid || config.mchid || "").trim();
const key = String(config.key || config.secret || "").trim();
const apiQueryUrl = String(config.queryUrl || "https://z-pay.cn/api.php").trim();

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

const parseAmount = (value) => {
  const amount = Number(value);
  return Number.isFinite(amount) ? amount : 0;
};

if (!orderId) {
  return {
    isSignValid: false,
    orderId: "",
    status: "failed",
    responseBody: "fail: no order id",
  };
}

if (!pid || !key) {
  return {
    isSignValid: false,
    orderId,
    status: "failed",
    responseBody: "fail: missing merchant config",
  };
}

const tradeNo = String(callbackData.trade_no || query.trade_no || "").trim();
const outTradeNo = String(callbackData.out_trade_no || query.out_trade_no || orderId).trim();
const receivedSign = String(callbackData.sign || query.sign || "").trim().toLowerCase();
const expectedSign = sortAndSign(callbackData, key).toLowerCase();
const signMatches = !!receivedSign && receivedSign === expectedSign;
const callbackAmount = parseAmount(callbackData.money || query.money);
const callbackTradeStatus = String(
  callbackData.trade_status || query.trade_status || "",
).trim();

let status = "pending";
if (signMatches && callbackTradeStatus === "TRADE_SUCCESS") {
  status = "paid";
}

// 验签不通过时，尝试向 Z-Pay 查单网关做一次主动查单兜底
if (!signMatches) {
  try {
    const verifyUrl = new URL(apiQueryUrl);
    verifyUrl.searchParams.set("act", "order");
    verifyUrl.searchParams.set("pid", pid);
    verifyUrl.searchParams.set("key", key);
    if (tradeNo) {
      verifyUrl.searchParams.set("trade_no", tradeNo);
    } else {
      verifyUrl.searchParams.set("out_trade_no", outTradeNo);
    }

    const verifyRes = await fetch(verifyUrl.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const verifyData = await verifyRes.json().catch(() => ({}));

    if (verifyRes.ok && Number(verifyData.code) === 1) {
      const verifyStatus = Number(verifyData.status);
      return {
        isSignValid: true,
        orderId: String(verifyData.out_trade_no || outTradeNo || orderId),
        tradeNo: String(verifyData.trade_no || tradeNo || ""),
        status: verifyStatus === 1 ? "paid" : "pending",
        amount: parseAmount(verifyData.money),
        responseBody: verifyStatus === 1 ? "success" : "fail",
      };
    }
  } catch (error) {
    console.error("Z-Pay active query fallback failed:", error.message);
  }

  return {
    isSignValid: false,
    orderId: outTradeNo || orderId,
    tradeNo,
    status: "failed",
    amount: callbackAmount,
    responseBody: "fail",
  };
}

if (callbackTradeStatus !== "TRADE_SUCCESS") {
  return {
    isSignValid: true,
    orderId: outTradeNo || orderId,
    tradeNo,
    status: "pending",
    amount: callbackAmount,
    responseBody: "fail",
  };
}

return {
  isSignValid: true,
  orderId: outTradeNo || orderId,
  tradeNo,
  status,
  amount: callbackAmount,
  responseBody: "success",
};
