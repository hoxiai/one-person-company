import { unref } from 'vue';
import { aJ as useNuxtApp, u as useI18n$1 } from './server.mjs';

const adminLocaleModules = {
  zh: () => import('./admin-DV2PIV-T.mjs'),
  en: () => import('./admin-DlW1l2IC.mjs'),
  ru: () => import('./admin-D8B7JK18.mjs'),
  "zh-HK": () => import('./admin-DEC1-p96.mjs')
};
const useAdminLocale = () => {
  const nuxtApp = useNuxtApp();
  const i18n = nuxtApp.$i18n || (useI18n$1 ? useI18n$1() : null);
  const loadAdminLocale = async (targetLocale) => {
    const active = targetLocale || (i18n ? unref(i18n.locale) : "zh") || "zh";
    const loadedMap = nuxtApp._loadedAdminLocales || (nuxtApp._loadedAdminLocales = /* @__PURE__ */ new Set());
    if (loadedMap.has(active)) {
      return active;
    }
    const loader = adminLocaleModules[active] || adminLocaleModules.en || adminLocaleModules.zh;
    if (!loader) {
      return active;
    }
    try {
      const module = await loader();
      const messages = module.default || module;
      if (messages && i18n && typeof i18n.mergeLocaleMessage === "function") {
        i18n.mergeLocaleMessage(active, messages);
        loadedMap.add(active);
      }
    } catch (e) {
      console.warn(`[useAdminLocale] Failed to load admin locale for ${active}:`, e);
    }
    return active;
  };
  return {
    loadAdminLocale
  };
};

export { useAdminLocale as u };
//# sourceMappingURL=useAdminLocale-B-32t7_V.mjs.map
