const formatStatsNumber = (value, locale) => new Intl.NumberFormat(locale === "zh" ? "zh-CN" : "en-US").format(Number(value || 0));
const formatStatsPercent = (value) => `${Number(value || 0).toFixed(1)}%`;
const formatStatsRelativeTime = (value, locale, nowMs = Date.now()) => {
  if (value === null || value === void 0 || value === "") return "-";
  const date = value instanceof Date ? value : new Date(String(value));
  const timeMs = date.getTime();
  if (Number.isNaN(timeMs)) return "-";
  const diffSec = Math.max(0, Math.floor((nowMs - timeMs) / 1e3));
  const isZhHK = locale === "zh-HK";
  const isZh = !isZhHK && locale.startsWith("zh");
  const isRu = locale.startsWith("ru");
  if (diffSec < 60) {
    if (isZhHK) return "\u525B\u525B";
    if (isZh) return "\u521A\u521A";
    if (isRu) return "\u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E";
    return "Just now";
  }
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) {
    if (isZhHK) return `${diffMin} \u5206\u9418\u524D`;
    if (isZh) return `${diffMin} \u5206\u949F\u524D`;
    if (isRu) return `${diffMin} \u043C\u0438\u043D. \u043D\u0430\u0437\u0430\u0434`;
    return `${diffMin}m ago`;
  }
  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) {
    if (isZhHK) return `${diffHour} \u5C0F\u6642\u524D`;
    if (isZh) return `${diffHour} \u5C0F\u65F6\u524D`;
    if (isRu) return `${diffHour} \u0447. \u043D\u0430\u0437\u0430\u0434`;
    return `${diffHour}h ago`;
  }
  const diffDay = Math.floor(diffHour / 24);
  if (diffDay < 30) {
    if (isZhHK || isZh) return `${diffDay} \u5929\u524D`;
    if (isRu) return `${diffDay} \u0434\u043D. \u043D\u0430\u0437\u0430\u0434`;
    return `${diffDay}d ago`;
  }
  const diffMonth = Math.max(1, Math.floor(diffDay / 30));
  if (diffDay < 365) {
    if (isZhHK) return `${diffMonth} \u500B\u6708\u524D`;
    if (isZh) return `${diffMonth} \u4E2A\u6708\u524D`;
    if (isRu) return `${diffMonth} \u043C\u0435\u0441. \u043D\u0430\u0437\u0430\u0434`;
    return `${diffMonth}mo ago`;
  }
  const diffYear = Math.max(1, Math.floor(diffDay / 365));
  if (isZhHK || isZh) return `${diffYear} \u5E74\u524D`;
  if (isRu) return `${diffYear} \u0433. \u043D\u0430\u0437\u0430\u0434`;
  return `${diffYear}y ago`;
};
const getStatsTrendWidth = (value, max) => max ? Number((value / max * 100).toFixed(1)) : 0;
const shortenVisitorId = (value) => {
  if (!value) return "-";
  if (value.length <= 14) return value;
  return `${value.slice(0, 8)}...${value.slice(-4)}`;
};
const formatVisitorLocation = (item) => {
  const country = typeof item.country === "string" ? item.country.trim() : "";
  const regionCity = [item.region, item.city].map((v) => typeof v === "string" ? v.trim() : "").filter(Boolean).join(" / ");
  if (country && regionCity) return `${country} \xB7 ${regionCity}`;
  return country || regionCity || "-";
};
const getSafeExternalUrl = (rawUrl) => {
  const trimmed = rawUrl == null ? void 0 : rawUrl.trim();
  if (!trimmed) return null;
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      if (false) ;
      return parsed.href;
    }
  } catch {
  }
  return null;
};
const getInternalReferrerPath = (rawUrl) => {
  const trimmed = rawUrl == null ? void 0 : rawUrl.trim();
  if (!trimmed) return null;
  try {
    const parsed = new URL(trimmed);
    if ((parsed.protocol === "http:" || parsed.protocol === "https:") && false) ;
  } catch {
  }
  return null;
};
const formatExternalUrlLabel = (rawUrl, maxLength = 56) => {
  const safe = getSafeExternalUrl(rawUrl);
  if (!safe) return "";
  try {
    const parsed = new URL(safe);
    const host = parsed.hostname.replace(/^www\./i, "");
    const pathAndQuery = `${parsed.pathname === "/" ? "" : parsed.pathname}${parsed.search}${parsed.hash}`;
    let decoded = `${host}${pathAndQuery}`;
    try {
      decoded = decodeURIComponent(decoded);
    } catch {
    }
    return decoded.length > maxLength ? `${decoded.slice(0, maxLength)}\u2026` : decoded;
  } catch {
    return safe.length > maxLength ? `${safe.slice(0, maxLength)}\u2026` : safe;
  }
};
const getSafeInternalPath = (rawPath) => {
  const trimmed = rawPath == null ? void 0 : rawPath.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("/") && !trimmed.startsWith("//")) {
    return trimmed;
  }
  return null;
};
const getSourceTypeColor = (type) => {
  switch (type == null ? void 0 : type.toLowerCase()) {
    case "ai":
      return "primary";
    case "campaign":
      return "warning";
    case "affiliate":
      return "error";
    case "search":
      return "info";
    case "social":
      return "primary";
    case "email":
      return "success";
    case "referral":
      return "neutral";
    case "direct":
    default:
      return "neutral";
  }
};
const en = {
  firstSubtitle: "Original acquisition source for the visitors active in this period",
  lastTitle: "Latest identifiable source in period",
  lastSubtitle: "Reconstructed from page entrances in this period; internal pages do not replace the source",
  categorySubtitle: "Channels for the latest identifiable source in this period",
  knownSources: "Identifiable external and tagged sources",
  knownSubtitle: "Includes search, social, AI, email, referral and tagged campaigns",
  behavior: "Visitor behavior",
  pageVisitors: "Page visitors",
  behaviorSubtitle: "Each activity is counted independently; these are not sequential funnel stages",
  campaign: "Campaign / promotion visitors",
  campaignTip: "Visitors with campaign tags, paid click IDs or promotion codes in this period",
  authTip: "Visitors with a server-recorded login or registration in this period",
  visitorTip: "Distinct visitor IDs with tracked activity or linked paid orders in this period",
  paidTip: "Visitors with a real paid order above zero, counted by payment time",
  direct: "Direct / unidentified",
  unknown: "Unknown source",
  loading: "Loading visitor details\u2026",
  noRecords: "No records match this period and filter.",
  people: "visitors",
  orders: "orders",
  unlinked: "Paid orders without a visitor ID are included in total revenue but cannot be assigned to a traffic source:",
  visitorsTitle: "Independent Visitors",
  backToOverview: "Stats Overview",
  openVisitorsPage: "Independent Visitors",
  rollupPending: "Daily stats are still being generated for {days} day(s); totals for those days are missing and will fill in automatically.",
  rollupVisitorDays: "Multi-day range: source, country, device and page breakdowns count visitor-days (a visitor active on several days is counted once per day). Totals at the top are de-duplicated across days.",
  visitorDaysRows: "Multi-day range: each row is one visitor on one day (visitor-day), matching the source counts on the overview page.",
  searchPlaceholder: "Search IP, visitor ID, source URL, search term, path, region or user email\u2026",
  allBehaviors: "All visitors",
  allSources: "All source channels",
  externalOnly: "External sources only",
  taggedOnly: "Campaign / promo only",
  attributionLast: "Latest source in period",
  attributionFirst: "First acquisition source",
  activeSourceFilter: "Filtered source:",
  clearFilters: "Reset filters",
  colVisitorUser: "Visitor / User",
  colSourceUrl: "Traffic Source & Referrer URL",
  colVisitedPage: "Landing & Latest Page",
  colLocationIp: "Region & IP",
  colDeviceEnv: "Device & Browser",
  colActivity: "Activity & Conversion",
  colActiveTime: "Last Seen",
  firstLabel: "First:",
  latestLabel: "Latest:",
  firstSeenLabel: "First seen:",
  latestSeenLabel: "Last seen:",
  landingLabel: "Landing:",
  lastPageLabel: "Latest:",
  keywordLabel: "Keyword:",
  internalPrevLabel: "Internal prev:",
  openSourceLink: "Open source URL in new tab",
  openSitePage: "Open page in new tab",
  noExternalReferrer: "No external Referer URL",
  vsYesterdaySameTime: "Yesterday same time",
  yesterdayFullDay: "Full day",
  predictedToday: "Est. today",
  vsDayBeforeYesterday: "vs Day before",
  vsPreviousDays: "vs Prev {days}d",
  newGrowth: "New"
};
const zh = {
  firstSubtitle: "\u672C\u671F\u95F4\u6D3B\u8DC3\u8BBF\u5BA2\u6700\u521D\u8FDB\u5165\u7F51\u7AD9\u7684\u6765\u6E90",
  lastTitle: "\u671F\u95F4\u6700\u8FD1\u53EF\u8BC6\u522B\u6765\u6E90",
  lastSubtitle: "\u4ECE\u671F\u95F4\u5185\u9875\u9762\u5165\u53E3\u8FD8\u539F\uFF1B\u7AD9\u5185\u8DF3\u8F6C\u4E0D\u4F1A\u8986\u76D6\u6765\u6E90",
  categorySubtitle: "\u6309\u672C\u671F\u95F4\u6700\u8FD1\u53EF\u8BC6\u522B\u6765\u6E90\u5212\u5206\u6E20\u9053",
  knownSources: "\u53EF\u8BC6\u522B\u7684\u7AD9\u5916\u4E0E\u6D3B\u52A8\u6765\u6E90",
  knownSubtitle: "\u5305\u542B\u641C\u7D22\u3001\u793E\u4EA4\u3001AI\u3001\u90AE\u4EF6\u3001\u5916\u94FE\u53CA\u5E26\u6807\u7B7E\u7684\u6D3B\u52A8",
  behavior: "\u8BBF\u5BA2\u884C\u4E3A\u5206\u5E03",
  pageVisitors: "\u6D4F\u89C8\u9875\u9762\u7684\u8BBF\u5BA2",
  behaviorSubtitle: "\u5404\u7C7B\u884C\u4E3A\u72EC\u7ACB\u8BA1\u6570\uFF0C\u4E0D\u4EE3\u8868\u8BBF\u5BA2\u4F9D\u6B21\u5B8C\u6210\u8FD9\u4E9B\u6B65\u9AA4",
  campaign: "\u6D3B\u52A8 / \u63A8\u5E7F\u8BBF\u5BA2",
  campaignTip: "\u672C\u671F\u95F4\u5E26\u6D3B\u52A8\u6807\u7B7E\u3001\u5E7F\u544A\u70B9\u51FB\u6807\u8BC6\u6216\u63A8\u5E7F\u7801\u7684\u8BBF\u5BA2",
  authTip: "\u672C\u671F\u95F4\u7531\u670D\u52A1\u7AEF\u8BB0\u5F55\u8FC7\u767B\u5F55\u6216\u6CE8\u518C\u7684\u8BBF\u5BA2",
  visitorTip: "\u672C\u671F\u95F4\u6709\u884C\u4E3A\u8BB0\u5F55\u6216\u5173\u8054\u5DF2\u4ED8\u6B3E\u8BA2\u5355\u7684 visitor_id \u53BB\u91CD\u6570",
  paidTip: "\u6309\u652F\u4ED8\u65F6\u95F4\u7EDF\u8BA1\u6709\u771F\u5B9E\u975E\u96F6\u5DF2\u4ED8\u6B3E\u8BA2\u5355\u7684\u8BBF\u5BA2",
  direct: "\u76F4\u63A5 / \u6765\u6E90\u4E0D\u53EF\u8BC6\u522B",
  unknown: "\u6765\u6E90\u672A\u77E5",
  loading: "\u6B63\u5728\u52A0\u8F7D\u8BBF\u95EE\u660E\u7EC6\u2026",
  noRecords: "\u5F53\u524D\u671F\u95F4\u548C\u7B5B\u9009\u6761\u4EF6\u4E0B\u6682\u65E0\u8BB0\u5F55\u3002",
  people: "\u4EBA",
  orders: "\u5355",
  unlinked: "\u4EE5\u4E0B\u5DF2\u4ED8\u6B3E\u8BA2\u5355\u672A\u5173\u8054\u8BBF\u5BA2\uFF0C\u91D1\u989D\u8BA1\u5165\u603B\u989D\uFF0C\u4F46\u65E0\u6CD5\u5206\u914D\u5230\u8BBF\u95EE\u6765\u6E90\uFF1A",
  visitorsTitle: "\u72EC\u7ACB\u8BBF\u5BA2\u5217\u8868",
  backToOverview: "\u8FD4\u56DE\u7EDF\u8BA1\u6982\u89C8",
  openVisitorsPage: "\u72EC\u7ACB\u8BBF\u5BA2\u5217\u8868",
  rollupPending: "\u8FD8\u6709 {days} \u5929\u7684\u65E5\u7EDF\u8BA1\u6B63\u5728\u751F\u6210\uFF0C\u8FD9\u4E9B\u5929\u7684\u6570\u636E\u6682\u7F3A\uFF0C\u7A0D\u540E\u4F1A\u81EA\u52A8\u8865\u9F50\u3002",
  rollupVisitorDays: "\u591A\u65E5\u8303\u56F4\uFF1A\u6765\u6E90\u3001\u5730\u533A\u3001\u8BBE\u5907\u3001\u9875\u9762\u7B49\u5206\u5E03\u6309\u300C\u8BBF\u5BA2\xB7\u5929\u300D\u7EDF\u8BA1\uFF08\u540C\u4E00\u8BBF\u5BA2\u5728\u591A\u5929\u51FA\u73B0\u4F1A\u6309\u5929\u5206\u522B\u8BA1\u5165\uFF09\uFF1B\u9876\u90E8\u603B\u6570\u4E3A\u8DE8\u5929\u53BB\u91CD\u540E\u7684\u4EBA\u6570\u3002",
  visitorDaysRows: "\u591A\u65E5\u8303\u56F4\uFF1A\u6BCF\u884C\u662F\u4E00\u4F4D\u8BBF\u5BA2\u5728\u67D0\u4E00\u5929\u7684\u8BB0\u5F55\uFF08\u8BBF\u5BA2\xB7\u5929\uFF09\uFF0C\u4E0E\u7EDF\u8BA1\u6982\u89C8\u4E2D\u7684\u6765\u6E90\u4EBA\u6570\u53E3\u5F84\u4E00\u81F4\u3002",
  searchPlaceholder: "\u641C\u7D22 IP\u3001\u8BBF\u5BA2 ID\u3001\u6765\u6E90\u7F51\u5740\u3001\u641C\u7D22\u8BCD\u3001\u53D7\u8BBF\u9875\u9762\u3001\u56FD\u5BB6\u7701\u5E02\u6216\u7528\u6237\u90AE\u7BB1\u2026",
  allBehaviors: "\u5168\u90E8\u8BBF\u5BA2",
  allSources: "\u5168\u90E8\u6765\u6E90\u6E20\u9053",
  externalOnly: "\u4EC5\u770B\u5916\u90E8\u6765\u6E90",
  taggedOnly: "\u4EC5\u770B\u6D3B\u52A8 / \u63A8\u5E7F",
  attributionLast: "\u6309\u671F\u95F4\u6700\u8FD1\u6765\u6E90",
  attributionFirst: "\u6309\u9996\u6B21\u8BBF\u95EE\u6765\u6E90",
  activeSourceFilter: "\u5F53\u524D\u6307\u5B9A\u6765\u6E90\uFF1A",
  clearFilters: "\u91CD\u7F6E\u7B5B\u9009",
  colVisitorUser: "\u8BBF\u5BA2 / \u5173\u8054\u7528\u6237",
  colSourceUrl: "\u8BBF\u95EE\u6765\u6E90\u4E0E\u6765\u6E90\u5730\u5740",
  colVisitedPage: "\u53D7\u8BBF\u9875\u9762\uFF08\u843D\u5730 / \u6700\u540E\uFF09",
  colLocationIp: "\u6240\u5728\u5730\u533A\u4E0E IP",
  colDeviceEnv: "\u8BBE\u5907\u4E0E\u6D4F\u89C8\u5668",
  colActivity: "\u8BBF\u95EE\u4E0E\u8F6C\u5316\u884C\u4E3A",
  colActiveTime: "\u6700\u8FD1\u8BBF\u95EE",
  firstLabel: "\u9996\u8BBF:",
  latestLabel: "\u6700\u8FD1:",
  firstSeenLabel: "\u9996\u6B21\u8BBF\u95EE:",
  latestSeenLabel: "\u6700\u8FD1\u8BBF\u95EE:",
  landingLabel: "\u843D\u5730:",
  lastPageLabel: "\u6700\u540E:",
  keywordLabel: "\u641C\u7D22\u8BCD:",
  internalPrevLabel: "\u7AD9\u5185\u4E0A\u9875:",
  openSourceLink: "\u70B9\u51FB\u5728\u65B0\u6807\u7B7E\u9875\u6253\u5F00\u6765\u6E90\u7F51\u5740",
  openSitePage: "\u70B9\u51FB\u5728\u65B0\u6807\u7B7E\u9875\u8BBF\u95EE\u8BE5\u9875\u9762",
  noExternalReferrer: "\u65E0\u5916\u90E8\u6765\u6E90\u94FE\u63A5 (Referer)",
  vsYesterdaySameTime: "\u6628\u65E5\u540C\u671F",
  yesterdayFullDay: "\u6628\u65E5\u5168\u5929",
  predictedToday: "\u9884\u8BA1\u4ECA\u65E5",
  vsDayBeforeYesterday: "\u8F83\u524D\u65E5",
  vsPreviousDays: "\u8F83\u524D {days} \u5929",
  newGrowth: "\u65B0\u589E"
};
const zhHK = {
  firstSubtitle: "\u672C\u671F\u9593\u6D3B\u8E8D\u8A2A\u5BA2\u6700\u521D\u9032\u5165\u7DB2\u7AD9\u7684\u4F86\u6E90",
  lastTitle: "\u671F\u9593\u6700\u8FD1\u53EF\u8B58\u5225\u4F86\u6E90",
  lastSubtitle: "\u5F9E\u671F\u9593\u5167\u9801\u9762\u5165\u53E3\u9084\u539F\uFF1B\u7AD9\u5167\u8DF3\u8F49\u4E0D\u6703\u8986\u84CB\u4F86\u6E90",
  categorySubtitle: "\u6309\u672C\u671F\u9593\u6700\u8FD1\u53EF\u8B58\u5225\u4F86\u6E90\u5283\u5206\u6E20\u9053",
  knownSources: "\u53EF\u8B58\u5225\u7684\u7AD9\u5916\u8207\u6D3B\u52D5\u4F86\u6E90",
  knownSubtitle: "\u5305\u542B\u641C\u5C0B\u3001\u793E\u4EA4\u3001AI\u3001\u90F5\u4EF6\u3001\u5916\u93C8\u53CA\u5E36\u6A19\u7C64\u7684\u6D3B\u52D5",
  behavior: "\u8A2A\u5BA2\u884C\u70BA\u5206\u4F48",
  behaviorSubtitle: "\u5404\u985E\u884C\u70BA\u7368\u7ACB\u8A08\u6578\uFF0C\u4E0D\u4EE3\u8868\u8A2A\u5BA2\u4F9D\u6B21\u5B8C\u6210\u9019\u4E9B\u6B65\u9A5F",
  pageVisitors: "\u700F\u89BD\u9801\u9762\u7684\u8A2A\u5BA2",
  campaign: "\u6D3B\u52D5 / \u63A8\u5EE3\u8A2A\u5BA2",
  campaignTip: "\u672C\u671F\u9593\u5E36\u6D3B\u52D5\u6A19\u7C64\u3001\u5EE3\u544A\u9EDE\u64CA\u6A19\u8B58\u6216\u63A8\u5EE3\u78BC\u7684\u8A2A\u5BA2",
  authTip: "\u672C\u671F\u9593\u7531\u670D\u52D9\u7AEF\u8A18\u9304\u904E\u767B\u5165\u6216\u8A3B\u518A\u7684\u8A2A\u5BA2",
  visitorTip: "\u672C\u671F\u9593\u6709\u884C\u70BA\u8A18\u9304\u6216\u95DC\u806F\u5DF2\u4ED8\u6B3E\u8A02\u55AE\u7684 visitor_id \u53BB\u91CD\u6578",
  paidTip: "\u6309\u652F\u4ED8\u6642\u9593\u7D71\u8A08\u6709\u771F\u5BE6\u975E\u96F6\u5DF2\u4ED8\u6B3E\u8A02\u55AE\u7684\u8A2A\u5BA2",
  direct: "\u76F4\u63A5 / \u4F86\u6E90\u4E0D\u53EF\u8B58\u5225",
  unknown: "\u4F86\u6E90\u672A\u77E5",
  loading: "\u6B63\u5728\u8F09\u5165\u8A2A\u554F\u660E\u7D30\u2026",
  noRecords: "\u76EE\u524D\u671F\u9593\u548C\u7BE9\u9078\u689D\u4EF6\u4E0B\u66AB\u7121\u8A18\u9304\u3002",
  people: "\u4EBA",
  orders: "\u55AE",
  unlinked: "\u4EE5\u4E0B\u5DF2\u4ED8\u6B3E\u8A02\u55AE\u672A\u95DC\u806F\u8A2A\u5BA2\uFF0C\u91D1\u984D\u8A08\u5165\u7E3D\u984D\uFF0C\u4F46\u7121\u6CD5\u5206\u914D\u5230\u8A2A\u554F\u4F86\u6E90\uFF1A",
  visitorsTitle: "\u7368\u7ACB\u8A2A\u5BA2\u5217\u8868",
  backToOverview: "\u8FD4\u56DE\u7D71\u8A08\u6982\u89BD",
  openVisitorsPage: "\u7368\u7ACB\u8A2A\u5BA2\u5217\u8868",
  rollupPending: "\u9084\u6709 {days} \u5929\u7684\u65E5\u7D71\u8A08\u6B63\u5728\u751F\u6210\uFF0C\u9019\u4E9B\u5929\u7684\u8CC7\u6599\u66AB\u7F3A\uFF0C\u7A0D\u5F8C\u6703\u81EA\u52D5\u88DC\u9F4A\u3002",
  rollupVisitorDays: "\u591A\u65E5\u7BC4\u570D\uFF1A\u4F86\u6E90\u3001\u5730\u5340\u3001\u88DD\u7F6E\u3001\u9801\u9762\u7B49\u5206\u5E03\u6309\u300C\u8A2A\u5BA2\xB7\u5929\u300D\u7D71\u8A08\uFF08\u540C\u4E00\u8A2A\u5BA2\u5728\u591A\u5929\u51FA\u73FE\u6703\u6309\u5929\u5206\u5225\u8A08\u5165\uFF09\uFF1B\u9802\u90E8\u7E3D\u6578\u70BA\u8DE8\u5929\u53BB\u91CD\u5F8C\u7684\u4EBA\u6578\u3002",
  visitorDaysRows: "\u591A\u65E5\u7BC4\u570D\uFF1A\u6BCF\u884C\u662F\u4E00\u4F4D\u8A2A\u5BA2\u5728\u67D0\u4E00\u5929\u7684\u8A18\u9304\uFF08\u8A2A\u5BA2\xB7\u5929\uFF09\uFF0C\u8207\u7D71\u8A08\u6982\u89BD\u4E2D\u7684\u4F86\u6E90\u4EBA\u6578\u53E3\u5F91\u4E00\u81F4\u3002",
  searchPlaceholder: "\u641C\u5C0B IP\u3001\u8A2A\u5BA2 ID\u3001\u4F86\u6E90\u7DB2\u5740\u3001\u641C\u5C0B\u8A5E\u3001\u53D7\u8A2A\u9801\u9762\u3001\u570B\u5BB6\u7701\u5E02\u6216\u7528\u6236\u96FB\u90F5\u2026",
  allBehaviors: "\u5168\u90E8\u8A2A\u5BA2",
  allSources: "\u5168\u90E8\u4F86\u6E90\u6E20\u9053",
  externalOnly: "\u50C5\u770B\u5916\u90E8\u4F86\u6E90",
  taggedOnly: "\u50C5\u770B\u6D3B\u52D5 / \u63A8\u5EE3",
  attributionLast: "\u6309\u671F\u9593\u6700\u8FD1\u4F86\u6E90",
  attributionFirst: "\u6309\u9996\u6B21\u8A2A\u554F\u4F86\u6E90",
  activeSourceFilter: "\u76EE\u524D\u6307\u5B9A\u4F86\u6E90\uFF1A",
  clearFilters: "\u91CD\u8A2D\u7BE9\u9078",
  colVisitorUser: "\u8A2A\u5BA2 / \u95DC\u806F\u7528\u6236",
  colSourceUrl: "\u8A2A\u554F\u4F86\u6E90\u8207\u4F86\u6E90\u5730\u5740",
  colVisitedPage: "\u53D7\u8A2A\u9801\u9762\uFF08\u843D\u5730 / \u6700\u5F8C\uFF09",
  colLocationIp: "\u6240\u5728\u5730\u5340\u8207 IP",
  colDeviceEnv: "\u8A2D\u5099\u8207\u700F\u89BD\u5668",
  colActivity: "\u8A2A\u554F\u8207\u8F49\u5316\u884C\u70BA",
  colActiveTime: "\u6700\u8FD1\u8A2A\u554F",
  firstLabel: "\u9996\u8A2A:",
  latestLabel: "\u6700\u8FD1:",
  firstSeenLabel: "\u9996\u6B21\u8A2A\u554F:",
  latestSeenLabel: "\u6700\u8FD1\u8A2A\u554F:",
  landingLabel: "\u843D\u5730:",
  lastPageLabel: "\u6700\u5F8C:",
  keywordLabel: "\u641C\u5C0B\u8A5E:",
  internalPrevLabel: "\u7AD9\u5167\u4E0A\u9801:",
  openSourceLink: "\u9EDE\u64CA\u5728\u65B0\u5206\u9801\u6253\u958B\u4F86\u6E90\u7DB2\u5740",
  openSitePage: "\u9EDE\u64CA\u5728\u65B0\u5206\u9801\u8A2A\u554F\u8A72\u9801\u9762",
  noExternalReferrer: "\u7121\u5916\u90E8\u4F86\u6E90\u9023\u7D50 (Referer)",
  vsYesterdaySameTime: "\u6628\u65E5\u540C\u671F",
  yesterdayFullDay: "\u6628\u65E5\u5168\u5929",
  predictedToday: "\u9810\u8A08\u4ECA\u65E5",
  vsDayBeforeYesterday: "\u8F03\u524D\u65E5",
  vsPreviousDays: "\u8F03\u524D {days} \u5929",
  newGrowth: "\u65B0\u589E"
};
const ru = {
  firstSubtitle: "\u041F\u0435\u0440\u0432\u044B\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439, \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0437\u0430 \u044D\u0442\u043E\u0442 \u043F\u0435\u0440\u0438\u043E\u0434",
  lastTitle: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434",
  lastSubtitle: "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E \u0432\u0445\u043E\u0434\u0430\u043C \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B; \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u044B \u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u043C\u0435\u043D\u044F\u044E\u0442",
  categorySubtitle: "\u041A\u0430\u043D\u0430\u043B\u044B \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u043E\u0433\u043E \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430 \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434",
  knownSources: "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u0438 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0438",
  knownSubtitle: "\u041F\u043E\u0438\u0441\u043A, \u0441\u043E\u0446\u0441\u0435\u0442\u0438, \u0418\u0418, \u043F\u043E\u0447\u0442\u0430, \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438 \u0438 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0438 \u0441 \u043C\u0435\u0442\u043A\u0430\u043C\u0438",
  behavior: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439",
  behaviorSubtitle: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E, \u0430 \u043D\u0435 \u043A\u0430\u043A \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u044D\u0442\u0430\u043F\u044B \u0432\u043E\u0440\u043E\u043D\u043A\u0438",
  pageVisitors: "\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446",
  campaign: "\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0439 / \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F",
  campaignTip: "\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438 \u0441 \u043C\u0435\u0442\u043A\u0430\u043C\u0438 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0439, \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u043E\u0432 \u0438\u043B\u0438 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0430\u043C\u0438 \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434",
  authTip: "\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438 \u0441\u043E \u0432\u0445\u043E\u0434\u043E\u043C \u0438\u043B\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D\u043D\u044B\u043C\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434",
  visitorTip: "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 visitor_id \u0441 \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C\u0438 \u0438\u043B\u0438 \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u043D\u044B\u043C\u0438 \u0437\u0430\u043A\u0430\u0437\u0430\u043C\u0438 \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434",
  paidTip: "\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438 \u0441 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u043C \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u043D\u044B\u043C \u0437\u0430\u043A\u0430\u0437\u043E\u043C \u043D\u0435\u043D\u0443\u043B\u0435\u0432\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438, \u043F\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043E\u043F\u043B\u0430\u0442\u044B",
  direct: "\u041F\u0440\u044F\u043C\u043E\u0439 / \u043D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0439",
  unknown: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A",
  loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F\u0445\u2026",
  noRecords: "\u041D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u0437\u0430 \u044D\u0442\u043E\u0442 \u043F\u0435\u0440\u0438\u043E\u0434 \u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C\u0438 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C\u0438.",
  people: "\u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439",
  orders: "\u0437\u0430\u043A\u0430\u0437\u043E\u0432",
  unlinked: "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B \u0431\u0435\u0437 visitor_id \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u044B \u0432 \u043E\u0431\u0449\u0443\u044E \u0432\u044B\u0440\u0443\u0447\u043A\u0443, \u043D\u043E \u043D\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430\u043C:",
  visitorsTitle: "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438",
  backToOverview: "\u041E\u0431\u0437\u043E\u0440 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438",
  openVisitorsPage: "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439",
  rollupPending: "\u0414\u043D\u0435\u0432\u043D\u0430\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0435\u0449\u0451 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F {days} \u0434\u043D.; \u0434\u0430\u043D\u043D\u044B\u0435 \u0437\u0430 \u044D\u0442\u0438 \u0434\u043D\u0438 \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438.",
  rollupVisitorDays: "\u041F\u0435\u0440\u0438\u043E\u0434 \u0438\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0434\u043D\u0435\u0439: \u0440\u0430\u0437\u0431\u0438\u0432\u043A\u0438 \u043F\u043E \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430\u043C, \u0441\u0442\u0440\u0430\u043D\u0430\u043C, \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u043C \u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u043C \u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435-\u0434\u043D\u044F\u0445 (\u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C, \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043D\u0435\u0439, \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C). \u0418\u0442\u043E\u0433\u0438 \u0432\u0432\u0435\u0440\u0445\u0443 \u2014 \u0431\u0435\u0437 \u043F\u043E\u0432\u0442\u043E\u0440\u043E\u0432.",
  visitorDaysRows: "\u041F\u0435\u0440\u0438\u043E\u0434 \u0438\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0434\u043D\u0435\u0439: \u043A\u0430\u0436\u0434\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u2014 \u043E\u0434\u0438\u043D \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C \u0437\u0430 \u043E\u0434\u0438\u043D \u0434\u0435\u043D\u044C (\u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C-\u0434\u0435\u043D\u044C), \u043A\u0430\u043A \u0438 \u0432 \u0441\u0447\u0451\u0442\u0447\u0438\u043A\u0430\u0445 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432.",
  searchPlaceholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E IP, visitor ID, URL \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430, \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u043C\u0443 \u0441\u043B\u043E\u0432\u0443, \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435, \u0440\u0435\u0433\u0438\u043E\u043D\u0443 \u0438\u043B\u0438 email\u2026",
  allBehaviors: "\u0412\u0441\u0435 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438",
  allSources: "\u0412\u0441\u0435 \u043A\u0430\u043D\u0430\u043B\u044B \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432",
  externalOnly: "\u0422\u043E\u043B\u044C\u043A\u043E \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438",
  taggedOnly: "\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0438 / \u043F\u0440\u043E\u043C\u043E",
  attributionLast: "\u041F\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u043C\u0443 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0443",
  attributionFirst: "\u041F\u043E \u043F\u0435\u0440\u0432\u043E\u043C\u0443 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0443",
  activeSourceFilter: "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A:",
  clearFilters: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B",
  colVisitorUser: "\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C / \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",
  colSourceUrl: "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0438 URL \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430",
  colVisitedPage: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0432\u0445\u043E\u0434\u0430 / \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F",
  colLocationIp: "\u0420\u0435\u0433\u0438\u043E\u043D \u0438 IP",
  colDeviceEnv: "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440",
  colActivity: "\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0438 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F",
  colActiveTime: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0432\u0438\u0437\u0438\u0442",
  firstLabel: "\u041F\u0435\u0440\u0432\u044B\u0439:",
  latestLabel: "\u041F\u043E\u0441\u043B.:",
  firstSeenLabel: "\u041F\u0435\u0440\u0432\u044B\u0439 \u0432\u0438\u0437\u0438\u0442:",
  latestSeenLabel: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0432\u0438\u0437\u0438\u0442:",
  landingLabel: "\u0412\u0445\u043E\u0434:",
  lastPageLabel: "\u041F\u043E\u0441\u043B.:",
  keywordLabel: "\u041A\u043B\u044E\u0447. \u0441\u043B\u043E\u0432\u043E:",
  internalPrevLabel: "\u0412\u043D\u0443\u0442\u0440. \u0441\u0442\u0440.:",
  openSourceLink: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C URL \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",
  openSitePage: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0441\u0430\u0439\u0442\u0430 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",
  noExternalReferrer: "\u041D\u0435\u0442 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E Referer URL",
  vsYesterdaySameTime: "\u0412\u0447\u0435\u0440\u0430 \u043A \u044D\u0442\u043E\u043C\u0443 \u0447\u0430\u0441\u0443",
  yesterdayFullDay: "\u0417\u0430 \u0432\u0435\u0441\u044C \u0434\u0435\u043D\u044C",
  predictedToday: "\u041F\u0440\u043E\u0433\u043D\u043E\u0437 \u043D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
  vsDayBeforeYesterday: "\u041A \u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430",
  vsPreviousDays: "\u0417\u0430 \u043F\u0440\u0435\u0434. {days} \u0434\u043D.",
  newGrowth: "\u041D\u043E\u0432\u044B\u0435"
};
const getVisitorStatsCopy = (locale) => locale === "zh-HK" ? zhHK : locale.startsWith("zh") ? zh : locale.startsWith("ru") ? ru : en;

export { formatStatsPercent as a, getStatsTrendWidth as b, getSafeExternalUrl as c, formatExternalUrlLabel as d, getSafeInternalPath as e, formatStatsNumber as f, getVisitorStatsCopy as g, getSourceTypeColor as h, formatVisitorLocation as i, getInternalReferrerPath as j, formatStatsRelativeTime as k, shortenVisitorId as s };
//# sourceMappingURL=visitorStatsCopy-Ds0fUucV.mjs.map
