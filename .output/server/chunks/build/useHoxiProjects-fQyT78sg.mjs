import { computed } from 'vue';
import { d as defaultHoxiProjectsEn, a as defaultHoxiProjects } from './projects-CRoQay4i.mjs';
import { u as useI18n, y as useFetch } from './server.mjs';

const projectCategories = [
  { id: "all", label: "\u5168\u90E8\u9879\u76EE" },
  { id: "ai-infra", label: "AI \u9009\u578B\u4E0E\u5DE5\u5177", icon: "ph:compass-bold" },
  { id: "gateway", label: "\u7B97\u529B\u57FA\u5EFA", icon: "ph:broadcast-bold" },
  { id: "saas", label: "\u5546\u4E1A\u53D8\u73B0", icon: "ph:credit-card-bold" },
  { id: "devtools", label: "\u5F00\u53D1\u6548\u7387", icon: "ph:wrench-bold" },
  { id: "open-source", label: "\u5F00\u6E90\u751F\u6001", icon: "ph:git-branch-bold" }
];
const projectCategoriesEn = [
  { id: "all", label: "All Projects" },
  { id: "ai-infra", label: "AI Benchmarks", icon: "ph:compass-bold" },
  { id: "gateway", label: "Compute Infra", icon: "ph:broadcast-bold" },
  { id: "saas", label: "SaaS", icon: "ph:credit-card-bold" },
  { id: "devtools", label: "DevTools", icon: "ph:wrench-bold" },
  { id: "open-source", label: "Open Source", icon: "ph:git-branch-bold" }
];
function useHoxiProjects() {
  const { locale } = useI18n();
  const isEn = computed(() => {
    const val = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? locale.value : String(locale || "en");
    return val.toLowerCase().startsWith("en");
  });
  const { data: dbProjects } = useFetch(
    "/api/hoxi/projects",
    {
      key: "hoxi-db-projects",
      default: () => null
    },
    "$yEjy5CCYWG"
    /* nuxt-injected */
  );
  const fallbackProjects = computed(() => isEn.value ? defaultHoxiProjectsEn : defaultHoxiProjects);
  const projects = computed(() => {
    if (!isEn.value && dbProjects.value !== null && dbProjects.value !== void 0 && Array.isArray(dbProjects.value)) {
      return dbProjects.value.filter((p) => !p.hidden).sort((a, b) => {
        var _a, _b;
        return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
      });
    }
    return fallbackProjects.value.filter((p) => !p.hidden).sort((a, b) => {
      var _a, _b;
      return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
    });
  });
  const allProjectsRaw = computed(() => {
    if (!isEn.value && dbProjects.value !== null && dbProjects.value !== void 0 && Array.isArray(dbProjects.value)) {
      return dbProjects.value.sort((a, b) => {
        var _a, _b;
        return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
      });
    }
    return fallbackProjects.value.sort((a, b) => {
      var _a, _b;
      return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
    });
  });
  const categories = computed(() => isEn.value ? projectCategoriesEn : projectCategories);
  return {
    projects,
    allProjectsRaw,
    categories
  };
}

export { useHoxiProjects as u };
//# sourceMappingURL=useHoxiProjects-fQyT78sg.mjs.map
