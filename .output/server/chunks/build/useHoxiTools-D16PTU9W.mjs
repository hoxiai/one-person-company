import { computed } from 'vue';
import { c as localizeToolEn } from './i18n-data-DAEMwG3q.mjs';
import { d as defaultHoxiTools } from './tools-Dasq1Dvd.mjs';
import { u as useI18n, y as useFetch } from './server.mjs';

const toolCategories = [
  { id: "all", label: "\u5168\u90E8\u5DE5\u5177" },
  { id: "ai", label: "AI \u751F\u4EA7\u529B", icon: "ph:sparkle" },
  { id: "deploy", label: "\u6781\u7B80\u5168\u6808\u90E8\u7F72", icon: "ph:cloud-arrow-up" },
  { id: "payment", label: "\u51FA\u6D77\u5168\u7403\u6536\u6B3E", icon: "ph:credit-card" },
  { id: "domain", label: "\u57DF\u540D\u4E0E\u7F51\u7EDC", icon: "ph:shield-check" },
  { id: "media", label: "\u521B\u4F5C\u4E0E\u6548\u7387", icon: "ph:lightning" }
];
const toolCategoriesEn = [
  { id: "all", label: "All Tools" },
  { id: "ai", label: "AI Productivity", icon: "ph:sparkle" },
  { id: "deploy", label: "Full-Stack Deploy", icon: "ph:cloud-arrow-up" },
  { id: "payment", label: "Global Payments", icon: "ph:credit-card" },
  { id: "domain", label: "Domains & Edge", icon: "ph:shield-check" },
  { id: "media", label: "Creator & Ops", icon: "ph:lightning" }
];
function useHoxiTools() {
  const { locale } = useI18n();
  const isEn = computed(() => {
    const val = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? locale.value : String(locale || "en");
    return val.toLowerCase().startsWith("en");
  });
  const { data: dbTools } = useFetch(
    "/api/hoxi/tools",
    {
      key: "hoxi-db-tools",
      default: () => null
    },
    "$AgU96gr0L4"
    /* nuxt-injected */
  );
  const tools = computed(() => {
    const raw = dbTools.value !== null && dbTools.value !== void 0 && Array.isArray(dbTools.value) ? dbTools.value.filter((t) => !t.hidden).sort((a, b) => {
      var _a, _b;
      return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
    }) : defaultHoxiTools.filter((t) => !t.hidden).sort((a, b) => {
      var _a, _b;
      return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
    });
    return isEn.value ? raw.map(localizeToolEn) : raw;
  });
  const allToolsRaw = computed(() => {
    const raw = dbTools.value !== null && dbTools.value !== void 0 && Array.isArray(dbTools.value) ? dbTools.value.sort((a, b) => {
      var _a, _b;
      return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
    }) : defaultHoxiTools.sort((a, b) => {
      var _a, _b;
      return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
    });
    return isEn.value ? raw.map(localizeToolEn) : raw;
  });
  const categories = computed(() => isEn.value ? toolCategoriesEn : toolCategories);
  return {
    tools,
    allToolsRaw,
    categories
  };
}

export { useHoxiTools as u };
//# sourceMappingURL=useHoxiTools-D16PTU9W.mjs.map
