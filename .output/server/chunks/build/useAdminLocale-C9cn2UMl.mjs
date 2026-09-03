import { unref } from 'vue';
import { aZ as useNuxtApp, e as useI18n } from './server.mjs';

const adminLocaleModules = {
  zh: () => import('./admin-D7VArJTn.mjs'),
  en: () => import('./admin-Bqgd3zWc.mjs'),
  ru: () => import('./admin-BaQVRvns.mjs'),
  "zh-HK": () => import('./admin-CLC8Xj_8.mjs')
};
const useAdminLocale = () => {
  const nuxtApp = useNuxtApp();
  const i18n = nuxtApp.$i18n || (useI18n ? useI18n() : null);
  const loadAdminLocale = async (targetLocale) => {
    const active = targetLocale || (i18n ? unref(i18n.locale) : "zh") || "zh";
    const loadedMap = nuxtApp._loadedAdminLocales || (nuxtApp._loadedAdminLocales = /* @__PURE__ */ new Set());
    if (loadedMap.has(active)) {
      return;
    }
    const loader = adminLocaleModules[active] || adminLocaleModules.en || adminLocaleModules.zh;
    if (!loader) {
      return;
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
  };
  return {
    loadAdminLocale
  };
};

export { useAdminLocale as u };
