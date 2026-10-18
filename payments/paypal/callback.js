// Resolve payment and full-refund status from PayPal, bound to the stored order.
const orderId = String(payload.urlOrderId || '');
const localOrder = payload.order || {};
const clientId = config.clientId || config.client_id || '';
const secret = config.clientSecret || config.client_secret || config.secret || '';
const mode = String(config.mode || config.environment || 'sandbox').toLowerCase();
const apiBase = mode === 'live' ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com';
const reject = () => ({ isSignValid: false, orderId, status: 'failed', responseBody: 'fail: verification error' });
if (!orderId || !clientId || !secret || !localOrder.tradeNo) return reject();
const gatewayOrderId = String(localOrder.tradeNo);
const query = payload.query || {};
const relatedOrderId = payload.body?.resource?.supplementary_data?.related_ids?.order_id;
if ((query.token && String(query.token) !== gatewayOrderId)
  || (relatedOrderId && String(relatedOrderId) !== gatewayOrderId)) return reject();
try {
  const tokenRes = await fetch(`${apiBase}/v1/oauth2/token`, {
    method: 'POST', headers: { Authorization: `Basic ${btoa(`${clientId}:${secret}`)}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'grant_type=client_credentials',
  });
  const token = await tokenRes.json();
  if (!tokenRes.ok || !token.access_token) return reject();
  const headers = { Authorization: `Bearer ${token.access_token}`, 'Content-Type': 'application/json' };
  const readRes = await fetch(`${apiBase}/v2/checkout/orders/${encodeURIComponent(gatewayOrderId)}`, { headers });
  let remoteOrder = await readRes.json();
  if (!readRes.ok) return reject();
  const unit = remoteOrder.purchase_units?.[0];
  if (remoteOrder.purchase_units?.length !== 1 || unit?.reference_id !== orderId
    || String(unit.amount?.currency_code) !== String(localOrder.currency)
    || !Number.isFinite(Number(unit.amount?.value))
    || Math.abs(Number(unit.amount?.value) - Number(localOrder.amount)) > 0.001) return reject();
  if (remoteOrder.status === 'APPROVED') {
    const captureRes = await fetch(`${apiBase}/v2/checkout/orders/${encodeURIComponent(gatewayOrderId)}/capture`, {
      method: 'POST', headers: { ...headers, 'PayPal-Request-Id': `apay-capture-${orderId}` }, body: '{}',
    });
    remoteOrder = await captureRes.json();
    if (!captureRes.ok) return reject();
  }
  let status = 'pending';
  let amount;
  const captures = remoteOrder.purchase_units?.[0]?.payments?.captures || [];
  if (remoteOrder.status === 'COMPLETED' && captures.length === 1) {
    const captureRes = await fetch(`${apiBase}/v2/payments/captures/${encodeURIComponent(captures[0].id)}`, { headers });
    const capture = await captureRes.json();
    if (!captureRes.ok || String(capture.amount?.currency_code) !== String(localOrder.currency)
      || !Number.isFinite(Number(capture.amount?.value))
      || Math.abs(Number(capture.amount?.value) - Number(localOrder.amount)) > 0.001) return reject();
    amount = Number(capture.amount.value);
    if (capture.status === 'COMPLETED' || capture.status === 'PARTIALLY_REFUNDED') status = 'paid';
    if (capture.status === 'REFUNDED') status = 'refunded';
  }
  return { isSignValid: true, orderId, tradeNo: gatewayOrderId, status, amount, responseBody: 'success' };
} catch {
  return reject();
}
