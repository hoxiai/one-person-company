import { u as useI18n, r as useSettings, e as useToast, f as useAdminPermissions, y as publishedOptionalThemes, _ as _sfc_main$I, i as _sfc_main$D, o as navigateTo } from './server.mjs';
import { _ as __nuxt_component_2 } from './Nav-wo8C25cj.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import 'node:module';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import '@libsql/client';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'tailwind-variants';
import '@vue/shared';
import 'embla-carousel-vue';
import 'aria-hidden';
import '@floating-ui/vue';
import '@tanstack/vue-table';
import '@tanstack/vue-virtual';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const themeDisplayMetadata = {
  "hoxi": {
    "name": "\u6A21\u578B\u699C",
    "description": "\u4E2D\u6587 AI \u6A21\u578B\u6392\u884C\u4E0E\u9009\u578B\u7AD9\uFF0C\u6781\u7B80\u84DD\u8C03\u98CE\u683C\uFF0C\u6309\u80FD\u529B\u8BC4\u5206\u4E0E\u4EF7\u683C\u505A\u6A2A\u5411\u5BF9\u6BD4\u5E76\u63A8\u8350\u7701\u94B1\u65B9\u6848\u3002"
  }
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "themes",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, te, tm } = useI18n();
    const { settings, getSetting, fetchSettings } = useSettings();
    const toast = useToast();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const isActivating = ref("");
    const goToSettingsTab = (tabId) => {
      navigateTo({ path: "/admin/settings", query: { tab: tabId } });
    };
    const DEFAULT_THEME_META = themeDisplayMetadata;
    const themeMetaMap = computed(() => {
      const keyFromI18n = (k) => `admin.themes.meta.${k}`;
      return publishedOptionalThemes.reduce(
        (acc, key) => {
          var _a, _b, _c, _d, _e, _f;
          const i18nKey = keyFromI18n(key);
          if (te(i18nKey)) {
            const meta = tm(i18nKey);
            if ((meta == null ? void 0 : meta.name) || (meta == null ? void 0 : meta.description) || (meta == null ? void 0 : meta.image)) {
              acc[key] = {
                name: meta.name || ((_a = DEFAULT_THEME_META[key]) == null ? void 0 : _a.name) || key,
                description: meta.description || ((_b = DEFAULT_THEME_META[key]) == null ? void 0 : _b.description) || "",
                image: meta.image || ((_c = DEFAULT_THEME_META[key]) == null ? void 0 : _c.image)
              };
              return acc;
            }
          }
          acc[key] = {
            name: ((_d = DEFAULT_THEME_META[key]) == null ? void 0 : _d.name) || key,
            description: ((_e = DEFAULT_THEME_META[key]) == null ? void 0 : _e.description) || "",
            image: (_f = DEFAULT_THEME_META[key]) == null ? void 0 : _f.image
          };
          return acc;
        },
        {}
      );
    });
    const themes = computed(
      () => publishedOptionalThemes.map((id) => {
        const meta = themeMetaMap.value[id] || DEFAULT_THEME_META[id] || { name: id, description: "" };
        return { id, name: meta.name, description: meta.description, image: meta.image };
      })
    );
    const themeNameMap = computed(
      () => publishedOptionalThemes.reduce(
        (acc, id) => {
          const meta = themeMetaMap.value[id] || DEFAULT_THEME_META[id];
          acc[id] = (meta == null ? void 0 : meta.name) || id;
          return acc;
        },
        {}
      )
    );
    const activateTheme = async (theme) => {
      var _a;
      isActivating.value = theme;
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));
        const updatedSettings = {
          ...settings.value,
          active_theme: theme
        };
        await $fetch("/api/admin/settings", {
          method: "POST",
          body: updatedSettings
        });
        await fetchSettings(true);
        const themeName = themeNameMap.value[theme] || theme;
        toast.add({
          title: t("admin.themes.toast.activated"),
          description: t("admin.themes.toast.activated_desc", { name: themeName }),
          color: "success"
        });
        setTimeout(() => {
          const el = (void 0).getElementById("active-theme-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            el.classList.add(
              "ring-2",
              "ring-purple-500",
              "ring-offset-2",
              "ring-offset-[#050505]"
            );
            setTimeout(() => {
              el.classList.remove(
                "ring-2",
                "ring-purple-500",
                "ring-offset-2",
                "ring-offset-[#050505]"
              );
            }, 1500);
          }
        }, 100);
      } catch (e) {
        toast.add({
          title: t("admin.themes.toast.failed"),
          description: ((_a = e.data) == null ? void 0 : _a.message) || e.message || t("admin.themes.toast.failed_desc"),
          color: "error"
        });
      } finally {
        isActivating.value = "";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$I;
      const _component_AdminSettingsNav = __nuxt_component_2;
      const _component_UButton = _sfc_main$D;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto pb-12" }, _attrs))}><div class="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:sparkle-duotone",
        class: "w-8 h-8 text-purple-500"
      }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("admin.themes.page.title"))}</h1><p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">${ssrInterpolate(_ctx.$t("admin.themes.page.subtitle"))}</p></div></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-8">`);
      _push(ssrRenderComponent(_component_AdminSettingsNav, {
        active: "themes",
        onSelect: goToSettingsTab
      }, null, _parent));
      _push(`<div class="lg:col-span-9"><div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(themes.value, (theme) => {
        _push(`<div class="${ssrRenderClass([{ "ring-2 ring-purple-500 border-transparent": unref(getSetting)("active_theme") === theme.id }, "group bg-white dark:bg-[#121214] border border-gray-200 dark:border-gray-800/60 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-colors flex flex-col"])}"><div class="aspect-video bg-gray-100 dark:bg-gray-900 relative overflow-hidden">`);
        if (theme.image) {
          _push(`<img${ssrRenderAttr("src", theme.image)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">`);
        } else {
          _push(`<div class="w-full h-full flex items-center justify-center text-gray-700">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:image",
            class: "w-12 h-12"
          }, null, _parent));
          _push(`</div>`);
        }
        if (unref(getSetting)("active_theme") === theme.id) {
          _push(`<div class="absolute top-3 right-3 bg-purple-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5">`);
          _push(ssrRenderComponent(_component_UIcon, { name: "ph:check-circle-fill" }, null, _parent));
          _push(` ${ssrInterpolate(_ctx.$t("admin.themes.card.active"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="p-5 flex flex-col flex-1"><h3 class="text-lg font-semibold text-gray-900 dark:text-white">${ssrInterpolate(theme.name)}</h3><p class="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 flex-1">${ssrInterpolate(theme.description)}</p><div class="mt-5 pt-5 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">`);
        if (unref(getSetting)("active_theme") !== theme.id) {
          _push(ssrRenderComponent(_component_UButton, {
            color: "neutral",
            variant: "outline",
            size: "sm",
            class: "transition-all duration-300",
            onClick: ($event) => activateTheme(theme.id),
            loading: isActivating.value === theme.id,
            disabled: !!isActivating.value && isActivating.value !== theme.id || !unref(hasAdminPerm)("settings:edit")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(isActivating.value === theme.id ? _ctx.$t("admin.themes.card.activating") : _ctx.$t("admin.themes.card.activate"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(isActivating.value === theme.id ? _ctx.$t("admin.themes.card.activating") : _ctx.$t("admin.themes.card.activate")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_UButton, {
            color: "primary",
            variant: "soft",
            class: "bg-purple-500/10 text-purple-400 transition-all duration-500",
            size: "sm",
            icon: "ph:check-circle-fill",
            disabled: ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("admin.themes.card.currently_active"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.themes.card.currently_active")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/settings/themes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
