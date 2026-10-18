const order = payload.order || {};
const pid = String(config.pid || config.mchid || "").trim();
const key = String(config.key || config.secret || "").trim();
const apiQueryUrl = String(config.queryUrl || "https://z-pay.cn/api.php").trim();

if (!pid || !key) {
  return {
    ok: false,
    status: "unknown",
    message: "Z-Pay config missing pid or key",
  };
}

const outTradeNo = String(order.id || "").trim();
const tradeNo = String(order.tradeNo || "").trim();
if (!outTradeNo && !tradeNo) {
  return {
    ok: false,
    status: "unknown",
    message: "Missing out_trade_no and trade_no",
  };
}

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

  const response = await fetch(verifyUrl.toString(), {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || Number(data.code) !== 1) {
    const msg = data.msg || data.message || "Order not found or query failed";
    if (/不存在|not found|not exist/i.test(msg)) {
      return { ok: true, status: "unpaid", raw: data };
    }
    return {
      ok: false,
      status: "unknown",
      message: msg,
      raw: data,
    };
  }

  // status: 1 为支付成功, 0 为未支付, 2 为已关闭/退款
  const statusCode = Number(data.status);
  let status = "unknown";
  if (statusCode === 1) {
    status = "paid";
  } else if (statusCode === 0) {
    status = "unpaid";
  } else if (statusCode === 2) {
    status = "closed";
  }

  const money = Number(data.money || 0);

  return {
    ok: true,
    status,
    tradeNo: data.trade_no ? String(data.trade_no) : tradeNo,
    amount: Number.isFinite(money) && money > 0 ? money : undefined,
    raw: data,
  };
} catch (error) {
  return {
    ok: false,
    status: "unknown",
    message: `Z-Pay query failed: ${error.message}`,
  };
}
