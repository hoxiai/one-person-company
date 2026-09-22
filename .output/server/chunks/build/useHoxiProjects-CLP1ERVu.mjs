import { computed } from 'vue';
import { d as defaultHoxiProjects } from './projects-D5cHNQbb.mjs';
import { y as useFetch } from './server.mjs';

const projectCategories = [
  { id: "all", label: "\u5168\u90E8\u9879\u76EE" },
  { id: "ai-infra", label: "AI \u9009\u578B\u4E0E\u5DE5\u5177", icon: "ph:compass-bold" },
  { id: "gateway", label: "\u7B97\u529B\u57FA\u5EFA", icon: "ph:broadcast-bold" },
  { id: "saas", label: "\u5546\u4E1A\u53D8\u73B0", icon: "ph:credit-card-bold" },
  { id: "devtools", label: "\u5F00\u53D1\u6548\u7387", icon: "ph:wrench-bold" },
  { id: "open-source", label: "\u5F00\u6E90\u751F\u6001", icon: "ph:git-branch-bold" }
];
function useHoxiProjects() {
  const { data: dbProjects } = useFetch(
    "/api/hoxi/projects",
    {
      key: "hoxi-db-projects",
      default: () => null
    },
    "$yEjy5CCYWG"
    /* nuxt-injected */
  );
  const projects = computed(() => {
    if (dbProjects.value !== null && dbProjects.value !== void 0 && Array.isArray(dbProjects.value)) {
      return dbProjects.value.filter((p) => !p.hidden).sort((a, b) => {
        var _a, _b;
        return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
      });
    }
    return defaultHoxiProjects.filter((p) => !p.hidden).sort((a, b) => {
      var _a, _b;
      return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
    });
  });
  const allProjectsRaw = computed(() => {
    if (dbProjects.value !== null && dbProjects.value !== void 0 && Array.isArray(dbProjects.value)) {
      return dbProjects.value.sort((a, b) => {
        var _a, _b;
        return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
      });
    }
    return defaultHoxiProjects.sort((a, b) => {
      var _a, _b;
      return ((_a = a.order) != null ? _a : 999) - ((_b = b.order) != null ? _b : 999);
    });
  });
  return {
    projects,
    allProjectsRaw,
    categories: projectCategories
  };
}

export { useHoxiProjects as u };
