import { computed } from 'vue';
import { d as defaultHoxiTools } from './tools-Dasq1Dvd.mjs';
import { z as useFetch } from './server.mjs';

const toolCategories = [
  { id: "all", label: "\u5168\u90E8\u5DE5\u5177" },
  { id: "ai", label: "AI \u751F\u4EA7\u529B", icon: "ph:sparkle" },
  { id: "deploy", label: "\u6781\u7B80\u5168\u6808\u90E8\u7F72", icon: "ph:cloud-arrow-up" },
  { id: "payment", label: "\u51FA\u6D77\u5168\u7403\u6536\u6B3E", icon: "ph:credit-card" },
  { id: "domain", label: "\u57DF\u540D\u4E0E\u7F51\u7EDC", icon: "ph:shield-check" },
  { id: "media", label: "\u521B\u4F5C\u4E0E\u6548\u7387", icon: "ph:lightning" }
];
function useHoxiTools() {
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
    if (dbTools.value !== null && dbTools.value !== void 0 && Array.isArray(dbTools.value)) {
      return dbTools.value.filter((t) => !t.hidden).sort((a, b) => {
        var _a, _b;
        return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
      });
    }
    return defaultHoxiTools.filter((t) => !t.hidden).sort((a, b) => {
      var _a, _b;
      return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
    });
  });
  const allToolsRaw = computed(() => {
    if (dbTools.value !== null && dbTools.value !== void 0 && Array.isArray(dbTools.value)) {
      return dbTools.value.sort((a, b) => {
        var _a, _b;
        return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
      });
    }
    return defaultHoxiTools.sort((a, b) => {
      var _a, _b;
      return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
    });
  });
  return {
    tools,
    allToolsRaw,
    categories: toolCategories
  };
}

export { useHoxiTools as u };
