import { unref } from 'vue';
import { b4 as useNuxtApp, u as useI18n } from './server.mjs';

const adminLocaleModules = {
  zh: () => import('./admin-gb6B9oOV.mjs'),
  en: () => import('./admin-TPH7Cai0.mjs'),
  ru: () => import('./admin-CHlDb2wL.mjs'),
  "zh-HK": () => import('./admin-B74pdM3b.mjs')
};
const useAdminLocale = () => {
  const nuxtApp = useNuxtApp();
  const i18n = nuxtApp.$i18n || (useI18n ? useI18n() : null);
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
//# sourceMappingURL=useAdminLocale-qxPw8Wcg.mjs.map
