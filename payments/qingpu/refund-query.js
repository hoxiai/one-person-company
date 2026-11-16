// Original-route refund delegation. Query operation never dispatches money.
const r = payload.refund;
const clientId = String(config.refundClientId || '').trim();
const secret = String(config.refundSecret || '').trim();
const base = String(config.checkoutBaseUrl || config.baseUrl || '').replace(/\/+$/, '');
if (!clientId || secret.length < 32 || !base.startsWith('https://') || !payload.order.tradeNo) {
  throw new Error('Dedicated refundClientId/refundSecret and HTTPS checkoutBaseUrl are required');
}
const path = payload.operation === 'query' ? '/api/minimal/checkout/refund-query' : '/api/minimal/checkout/refund';
const raw = JSON.stringify({ refundId: r.id, orderId: payload.order.tradeNo, externalOrderId: payload.order.id, amount: r.amount, currency: r.currency, reason: r.reason });
const timestamp = String(Date.now());
const hash = crypto.sha256(raw);
const signature = crypto.hmacSha256(`refund:v1\n${clientId}\n${timestamp}\nPOST\n${path}\n${hash}`, secret);
const response = await fetch(base + path, {
  method: 'POST', headers: { 'Content-Type': 'application/json', 'X-APay-Refund-Client': clientId, 'X-APay-Refund-Timestamp': timestamp, 'X-APay-Refund-Signature': signature }, body: raw, redirect: 'error',
});
if (!response.ok) throw new Error(`Refund relay HTTP ${response.status}`);
const responseRaw = await response.text();
const stamp = response.headers.get('x-apay-refund-timestamp') || '';
const received = response.headers.get('x-apay-refund-signature') || '';
const expected = crypto.hmacSha256(`refund-response:v1\n${clientId}\n${stamp}\n${hash}\n${responseRaw}`, secret);
if (!/^\d{13}$/.test(stamp) || Math.abs(Date.now() - Number(stamp)) > 300000 || !/^[a-f0-9]{64}$/.test(received)) throw new Error('Invalid refund relay response');
let diff = 0;
for (let i = 0; i < 64; i++) diff |= received.charCodeAt(i) ^ expected.charCodeAt(i);
if (diff) throw new Error('Invalid refund relay response signature');
const result = JSON.parse(responseRaw);
if (result.code !== 0 || !result.data) throw new Error('Invalid refund relay result');
return result.data;
