import { bg as pageLayoutMeta, be as themePageModules, bf as corePageModules } from './server.mjs';

const allPageModules = { ...corePageModules, ...themePageModules };
const routeTemplates = Array.from(
  new Set(
    Object.keys(allPageModules).map((key) => key.split("/pages/")[1]).filter((path) => Boolean(path))
  )
);
const resolveThemePageFile = (segments, theme) => {
  if (segments.length === 0) return "index.vue";
  const pathStr = segments.join("/");
  const existsInCore = (file) => Boolean(corePageModules[`../core/pages/${file}`]);
  const existsInTheme = (file, t) => Boolean(themePageModules[`../themes/${t}/pages/${file}`]);
  if (theme) {
    if (existsInTheme(`${pathStr}.vue`, theme)) return `${pathStr}.vue`;
    if (existsInTheme(`${pathStr}/index.vue`, theme)) return `${pathStr}/index.vue`;
  }
  if (existsInCore(`${pathStr}.vue`)) return `${pathStr}.vue`;
  if (existsInCore(`${pathStr}/index.vue`)) return `${pathStr}/index.vue`;
  const exists = (file) => {
    if (theme && existsInTheme(file, theme)) return true;
    return existsInCore(file);
  };
  for (const template of routeTemplates) {
    const templateSegments = template.replace(/\.vue$/, "").split("/");
    if (templateSegments.length === segments.length) {
      let isMatch = true;
      for (let i = 0; i < segments.length; i++) {
        const tSegment = templateSegments[i];
        if (!tSegment) {
          isMatch = false;
          break;
        }
        const isDynamic = tSegment.startsWith("[") && tSegment.endsWith("]");
        if (!isDynamic && tSegment !== segments[i]) {
          isMatch = false;
          break;
        }
      }
      if (isMatch && exists(template)) return template;
    }
  }
  return `${pathStr}.vue`;
};
const resolveThemePageModuleKey = (file, theme) => {
  if (theme) {
    const themePath = `../themes/${theme}/pages/${file}`;
    if (themePageModules[themePath]) return themePath;
  }
  const corePath = `../core/pages/${file}`;
  if (corePageModules[corePath]) return corePath;
  return null;
};
const getThemePageMeta = (file, theme) => {
  const key = resolveThemePageModuleKey(file, theme);
  if (!key) return void 0;
  const metaMap = pageLayoutMeta;
  return metaMap == null ? void 0 : metaMap[key];
};

export { getThemePageMeta as g, resolveThemePageFile as r };
//# sourceMappingURL=themePageMeta-ZpMYRC3E.mjs.map
