// ====== GtiPay 回调配置 (基于主动查询模式) ======

const orderId = payload.urlOrderId;

const tradeNo = payload.body.orderNo || payload.query.orderNo;

if (!orderId) {
  return {
    isSignValid: false,
    orderId: orderId,
    status: "failed",
    responseBody: "fail: no orderId",
    tradeNo: tradeNo,
  };
}

// 2. 主动查询网关状态 (对应 PHP 里的 getOrderStatus)
// 如果数据库 config 里没配，给个默认值防止报错
const apiBaseUrl = config.apiBaseUrl || "https://prod-api.zalexmining.com";

// 注意：由于在沙盒中执行，我们可以使用 async/await
// 构造请求去 GtiPay 查单 (对应 PHP: $this->http->get('/api/open/SelectOrderState/' . $orderNo))
let gatewayData;
try {
  const response = await fetch(
    `${apiBaseUrl}/api/open/SelectOrderState/${tradeNo}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  );

  const resBody = await response.json();

  if (resBody.code !== 200) {
    return {
      isSignValid: false,
      orderId: orderId,
      status: "failed",
      responseBody: "fail: " + (resBody.message || "request error"),
    };
  }

  gatewayData = resBody.result || {};
} catch (e) {
  return {
    isSignValid: false,
    orderId: orderId,
    status: "failed",
    responseBody: "fail: request error",
  };
}

// 3. 判断是否成功
let status = "pending";
if (gatewayData.isSuccess === true) {
  status = "paid";
} else {
  status = "unpaid";
}

// 如果这里成功，是不是应该在这里更新订单状态为 paid 或 failed
// ...

// 4. 返回标准结果给主系统更新订单
return {
  isSignValid: true, // 因为是服务器主动查询的，只要请求没报错且拿到了状态，就认为是可信的
  orderId: orderId,
  tradeNo: gatewayData.transaction_id || "", // 如果接口有返回流水号就填上
  status: status,
  amount: parseFloat(gatewayData.amount || 0), // 如果接口有返回金额就填上
  responseBody: "success",
};
