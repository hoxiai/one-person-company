import { computed } from 'vue';
import { m as mergeToolsCatalog, d as defaultHoxiTools, l as localizeToolItem, a as monidTopCategories, c as computeToolsRegistryStats, g as getToolUseCases, b as getToolEndpoints } from './tools-ByMeFHmu.mjs';
import { u as useI18n, y as useFetch } from './server.mjs';

const toolCategories = [
  { id: "all", label: "\u5168\u90E8\u5DE5\u5177", icon: "ph:squares-four-bold" },
  ...monidTopCategories.map((cat) => ({
    id: cat.id,
    label: cat.label,
    description: cat.description,
    icon: cat.icon,
    endpointCount: cat.endpointCount,
    children: cat.children
  }))
];
const toolCategoriesEn = [
  { id: "all", label: "All", icon: "ph:squares-four-bold" },
  ...monidTopCategories.map((cat) => ({
    id: cat.id,
    label: cat.labelEn,
    description: cat.descriptionEn,
    icon: cat.icon,
    endpointCount: cat.endpointCount,
    children: cat.children
  }))
];
function useHoxiTools() {
  const { locale } = useI18n();
  const isEn = computed(() => {
    const val = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? locale.value : String(locale || "en");
    return val.toLowerCase().startsWith("en");
  });
  const { data: dbTools, pending: loading } = useFetch(
    "/api/hoxi/tools",
    {
      key: "hoxi-db-tools",
      default: () => null
    },
    "$AgU96gr0L4"
    /* nuxt-injected */
  );
  const mergedCatalog = computed(() => {
    if (dbTools.value !== null && dbTools.value !== void 0 && Array.isArray(dbTools.value) && dbTools.value.length > 0) {
      return mergeToolsCatalog(dbTools.value);
    }
    return defaultHoxiTools;
  });
  const tools = computed(() => {
    return mergedCatalog.value.filter((t) => !t.hidden).sort((a, b) => {
      var _a, _b;
      return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
    }).map((t) => localizeToolItem(t, isEn.value));
  });
  const allToolsRaw = computed(() => {
    return mergedCatalog.value.slice().sort((a, b) => {
      var _a, _b;
      return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
    }).map((t) => localizeToolItem(t, isEn.value));
  });
  const categories = computed(() => isEn.value ? toolCategoriesEn : toolCategories);
  const topCategories = computed(() => monidTopCategories);
  const stats = computed(() => computeToolsRegistryStats(tools.value));
  function belongsToCategory(tool, catId) {
    if (!catId || catId === "all") return true;
    if (tool.category === catId) return true;
    if (Array.isArray(tool.parents) && tool.parents.includes(catId)) return true;
    return false;
  }
  function subcategoriesOf(catId) {
    var _a;
    if (!catId || catId === "all") {
      return tools.value;
    }
    const top = monidTopCategories.find((t) => t.id === catId);
    const matched = tools.value.filter((t) => belongsToCategory(t, catId));
    if (!((_a = top == null ? void 0 : top.children) == null ? void 0 : _a.length)) {
      return matched;
    }
    const orderMap = new Map(top.children.map((id, idx) => [id, idx]));
    return matched.slice().sort((a, b) => {
      var _a2, _b, _c, _d;
      const idxA = (_b = (_a2 = orderMap.get(a.id)) != null ? _a2 : orderMap.get(a.providerSlug || "")) != null ? _b : Number.MAX_SAFE_INTEGER;
      const idxB = (_d = (_c = orderMap.get(b.id)) != null ? _c : orderMap.get(b.providerSlug || "")) != null ? _d : Number.MAX_SAFE_INTEGER;
      return idxA - idxB || a.id.localeCompare(b.id);
    });
  }
  return {
    tools,
    allToolsRaw,
    categories,
    topCategories,
    stats,
    loading,
    isEn,
    belongsToCategory,
    subcategoriesOf,
    getToolEndpoints,
    getToolUseCases
  };
}

export { useHoxiTools as u };
//# sourceMappingURL=useHoxiTools-BjV7cydX.mjs.map
