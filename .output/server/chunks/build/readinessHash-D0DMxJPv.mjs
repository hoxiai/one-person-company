const ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";
const DIGIT_KEY = [11, 23, 5, 31, 17, 29, 7];
const MASK = 99854791;
const ROLE_ORDER = ["developer", "product", "designer", "growth", "trade"];
const DIM_ORDER = ["market", "delivery", "distribution", "leverage", "resilience"];
function encodeReadinessShareCode(id) {
  const safeId = Math.trunc(Number(id));
  if (!Number.isFinite(safeId) || safeId <= 0) return "";
  let value = (safeId ^ MASK) & 2147483647;
  const digits = new Array(DIGIT_KEY.length).fill(0);
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = value % 36;
    value = Math.floor(value / 36);
  }
  for (let i = 0; i < digits.length; i++) {
    digits[i] = (digits[i] + DIGIT_KEY[i]) % 36;
  }
  const checksum = digits.reduce((acc, d) => (acc * 31 + d) % 36, 0);
  return digits.map((d) => ALPHABET[d]).join("") + ALPHABET[checksum];
}
function encodeReadinessSnapshotHash(options) {
  var _a, _b;
  const roleIdx = Math.max(0, ROLE_ORDER.indexOf(options.role));
  const parts = ["s", ALPHABET[roleIdx] || "0"];
  for (const dim of DIM_ORDER) {
    const clamped = Math.max(0, Math.min(100, Math.round(Number((_b = (_a = options.scores) == null ? void 0 : _a[dim]) != null ? _b : 65))));
    const hi = Math.floor(clamped / 36);
    const lo = clamped % 36;
    parts.push(`${ALPHABET[hi] || "0"}${ALPHABET[lo] || "0"}`);
  }
  return parts.join("");
}
function resolveReadinessHash(options) {
  if (options.hash && String(options.hash).trim()) {
    return String(options.hash).trim().toLowerCase();
  }
  const rawId = options.id;
  if (typeof rawId === "number" && rawId > 0) {
    return encodeReadinessShareCode(rawId);
  }
  if (typeof rawId === "string") {
    const trimmed = rawId.trim();
    if (trimmed.startsWith("srv_")) {
      const num = Number(trimmed.slice(4));
      if (Number.isFinite(num) && num > 0) {
        return encodeReadinessShareCode(num);
      }
    } else if (/^\d+$/.test(trimmed)) {
      const num = Number(trimmed);
      if (Number.isFinite(num) && num > 0) {
        return encodeReadinessShareCode(num);
      }
    } else if (/^[0-9a-z]{8}$/i.test(trimmed) || /^s[0-9a-z]{11}$/i.test(trimmed)) {
      return trimmed.toLowerCase();
    }
  }
  if (options.role && options.scores) {
    return encodeReadinessSnapshotHash({ role: options.role, scores: options.scores });
  }
  return "";
}

export { resolveReadinessHash as r };
//# sourceMappingURL=readinessHash-D0DMxJPv.mjs.map
