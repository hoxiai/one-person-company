import { t as useSettings, J as useAdminSession, e as useI18n, v as useAsyncData, C as useRoute, r as useRouter, b as _sfc_main$E } from './server.mjs';
import { defineComponent, withAsyncContext, reactive, ref, computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderDynamicModel, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useAdminLocale } from './useAdminLocale-C9cn2UMl.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'http';
import 'https';
import 'zlib';
import 'stream';
import 'buffer';
import 'util';
import 'url';
import 'net';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSettings();
    useAdminSession();
    const { t, locale, locales, setLocale } = useI18n();
    const { loadAdminLocale } = useAdminLocale();
    [__temp, __restore] = withAsyncContext(() => useAsyncData("admin-login-locale", () => loadAdminLocale())), await __temp, __restore();
    const route = useRoute();
    useRouter();
    const form = reactive({
      username: "",
      password: ""
    });
    const isLoading = ref(false);
    const errorMsg = ref("");
    const showPassword = ref(false);
    const welcomeText = computed(() => {
      return t("admin.login.title");
    });
    const switchableLocales = computed(
      () => (unref(locales) || []).map((loc) => typeof loc === "string" ? { code: loc, name: loc } : loc)
    );
    const backgroundStyle = computed(() => {
      return {
        backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')`
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-black selection:bg-white selection:text-black" }, _attrs))}><div class="absolute inset-0 pointer-events-none"><div class="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity grayscale" style="${ssrRenderStyle(unref(backgroundStyle))}"></div><div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]"></div></div><div class="w-full max-w-md relative z-10">`);
      if (unref(switchableLocales).length > 1) {
        _push(`<div class="mb-4 flex justify-end"><div class="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur-2xl" role="group"${ssrRenderAttr("aria-label", _ctx.$t("admin.login.language"))}>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:translate-duotone",
          class: "w-4 h-4 ml-2 mr-0.5 text-gray-500"
        }, null, _parent));
        _push(`<!--[-->`);
        ssrRenderList(unref(switchableLocales), (loc) => {
          _push(`<button type="button" class="${ssrRenderClass([loc.code === unref(locale) ? "bg-white text-black" : "text-gray-400 hover:text-white hover:bg-white/10", "rounded-full px-3 py-1.5 text-xs font-medium transition-colors"])}"${ssrRenderAttr("aria-pressed", loc.code === unref(locale))}>${ssrInterpolate(loc.name || loc.code)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-black/40 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-2xl relative overflow-hidden group"><div class="absolute -inset-24 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl"></div><div class="mb-10 text-center relative z-10"><h1 class="text-3xl font-medium tracking-tight text-white mb-2">${ssrInterpolate(unref(welcomeText))}</h1><p class="text-gray-400 text-sm">${ssrInterpolate(_ctx.$t("admin.login.subtitle"))}</p></div>`);
      if (unref(route).query.setup === "success") {
        _push(`<div class="mb-8 p-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm flex items-center gap-3 relative z-10">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-circle-fill",
          class: "w-5 h-5"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("admin.login.setupSuccess"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="space-y-6 relative z-10"><div class="space-y-1.5"><label class="text-sm font-medium text-gray-300 block">${ssrInterpolate(_ctx.$t("admin.login.username"))}</label><div class="relative"><input${ssrRenderAttr("value", unref(form).username)} type="text" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"${ssrRenderAttr("placeholder", _ctx.$t("admin.login.usernamePlaceholder"))} required></div></div><div class="space-y-1.5"><div class="flex justify-between items-center"><label class="text-sm font-medium text-gray-300 block">${ssrInterpolate(_ctx.$t("admin.login.password"))}</label></div><div class="relative"><input${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(form).password, null)}${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} class="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" required><button type="button" tabindex="-1" class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 hover:text-white transition-colors focus:outline-none"${ssrRenderAttr("aria-label", unref(showPassword) ? _ctx.$t("admin.login.hidePassword") : _ctx.$t("admin.login.showPassword"))}${ssrRenderAttr("aria-pressed", unref(showPassword))}>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: unref(showPassword) ? "ph:eye-slash" : "ph:eye",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button></div></div><button type="submit" class="w-full bg-white text-black font-medium py-3.5 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(unref(isLoading)) ? " disabled" : ""}>`);
      if (unref(isLoading)) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:spinner-gap-bold",
          class: "w-5 h-5 animate-spin"
        }, null, _parent));
      } else {
        _push(`<span>${ssrInterpolate(_ctx.$t("admin.login.submit"))}</span>`);
      }
      if (!unref(isLoading)) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:arrow-right-bold",
          class: "w-4 h-4"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button></form>`);
      if (unref(errorMsg)) {
        _push(`<div class="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center justify-center gap-2 relative z-10">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:warning-circle-fill",
          class: "w-5 h-5 shrink-0"
        }, null, _parent));
        _push(` ${ssrInterpolate(unref(errorMsg))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-center mt-12 text-gray-600 text-xs font-medium tracking-wide">${ssrInterpolate(_ctx.$t("admin.login.footer"))} \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
