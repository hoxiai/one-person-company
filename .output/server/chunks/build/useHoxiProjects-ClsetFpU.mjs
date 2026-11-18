import { computed } from 'vue';
import { d as defaultHoxiProjects, e as enrichProjectRecord } from './projects-k3Tmu0Co.mjs';
import { n as normalizeHoxiLocale, g as getCategoryLabelForLocale } from './projectMatcher-mcLmK4UC.mjs';
import { u as useI18n, y as useFetch } from './server.mjs';

const CATEGORY_DEFS = [
  { id: "all" },
  { id: "cross-border", icon: "ph:globe-hemisphere-west-bold" },
  { id: "saas", icon: "ph:credit-card-bold" },
  { id: "ai-infra", icon: "ph:compass-bold" },
  { id: "gateway", icon: "ph:broadcast-bold" },
  { id: "devtools", icon: "ph:wrench-bold" }
];
function getProjectCategoriesForLocale(rawLocale) {
  const locale = normalizeHoxiLocale(rawLocale);
  return CATEGORY_DEFS.map((def) => ({
    id: def.id,
    label: getCategoryLabelForLocale(def.id, locale),
    icon: def.icon
  }));
}
getProjectCategoriesForLocale("zh");
getProjectCategoriesForLocale("en");
function useHoxiProjects() {
  const { locale } = useI18n();
  const currentLocale = computed(() => {
    const val = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? locale.value : String(locale || "en");
    return normalizeHoxiLocale(val);
  });
  const { data: dbProjects, refresh } = useFetch(
    () => `/api/hoxi/projects?locale=${currentLocale.value}&lang=${currentLocale.value}`,
    {
      default: () => null,
      watch: [currentLocale]
    },
    "$yEjy5CCYWG"
    /* nuxt-injected */
  );
  const sourceList = computed(() => {
    const rawList = dbProjects.value && Array.isArray(dbProjects.value) && dbProjects.value.length > 0 ? dbProjects.value : defaultHoxiProjects;
    return rawList.map((item) => enrichProjectRecord(item, currentLocale.value));
  });
  const projects = computed(() => {
    return sourceList.value.filter((p) => !p.hidden).sort((a, b) => {
      var _a, _b;
      return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
    });
  });
  const allProjectsRaw = computed(() => {
    return [...sourceList.value].sort((a, b) => {
      var _a, _b;
      return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
    });
  });
  const categories = computed(() => getProjectCategoriesForLocale(currentLocale.value));
  return {
    projects,
    allProjectsRaw,
    categories,
    refresh
  };
}

export { useHoxiProjects as u };
//# sourceMappingURL=useHoxiProjects-ClsetFpU.mjs.map
