const PROXY_ENDPOINT = "/api/proxy/image";
const PROXIED_IMAGE_HOSTS = [
  "alicdn.com",
  "alibabausercontent.com",
  "1688.com",
  "1688pic.com",
  "tbcdn.cn",
  "taobaocdn.com",
  "pinduoduo.com",
  "yangkeduo.com",
  "aliyuncs.com"
];
const shouldProxyImage = (value) => {
  try {
    const hostname = new URL(value).hostname.toLowerCase();
    if (hostname.includes("ainoderun") || hostname.includes(".oss-") || hostname.startsWith("oss-")) {
      return false;
    }
    return PROXIED_IMAGE_HOSTS.some((domain) => hostname === domain || hostname.endsWith(`.${domain}`));
  } catch {
    return false;
  }
};
const useImageProxy = () => {
  const buildImageProxyUrl = (value, options) => {
    const raw = String(value || "").replace(/[`'"]/g, "").trim();
    if (!raw) return "";
    const normalized = raw.startsWith("//") ? `https:${raw}` : raw;
    if (raw.startsWith("/") && !raw.startsWith("//")) return raw;
    if (!/^https?:\/\//i.test(normalized)) return normalized;
    if (!(options == null ? void 0 : options.force) && !shouldProxyImage(normalized)) return normalized;
    return `${PROXY_ENDPOINT}?url=${encodeURIComponent(normalized)}`;
  };
  return {
    buildImageProxyUrl
  };
};

export { useImageProxy as u };
