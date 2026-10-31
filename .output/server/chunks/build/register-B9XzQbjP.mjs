import { u as useI18n, H as useRoute, D as useLocaleRouter, bw as useCustomerAuth, bu as useSeoMeta, O as __nuxt_component_3$3, j as _sfc_main$Y } from './server.mjs';
import __nuxt_component_2 from './HoxiLogoIcon-DQjCSQpM.mjs';
import { defineComponent, reactive, ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
import 'node:fs/promises';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    const { localePath } = useLocaleRouter();
    useCustomerAuth();
    const form = reactive({
      nickname: "",
      email: "",
      password: ""
    });
    const loading = ref(false);
    const error = ref("");
    const safeRedirect = computed(() => {
      const raw = route.query.redirect;
      return typeof raw === "string" && raw.startsWith("/") && !raw.startsWith("//") ? raw : "";
    });
    const isDesktopRedirect = computed(
      () => safeRedirect.value.includes("/auth/authorize-desktop")
    );
    const loginLink = computed(() => {
      const base = localePath("/auth/login");
      return safeRedirect.value ? `${base}?redirect=${encodeURIComponent(safeRedirect.value)}` : base;
    });
    useSeoMeta({
      title: () => t("hoxi.auth.registerTitle"),
      description: () => t("hoxi.auth.registerSubtitle"),
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_HoxiLogoIcon = __nuxt_component_2;
      const _component_UIcon = _sfc_main$Y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-12 bg-slate-50/60 dark:bg-slate-950 font-sans" }, _attrs))}><div class="w-full max-w-md rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 sm:p-8 shadow-sm"><div class="flex flex-col items-center text-center mb-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "inline-flex items-center gap-2.5 mb-4 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiLogoIcon, { class: "w-6 h-6 !text-white" }, null, _parent2, _scopeId));
            _push2(`</div><span class="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"${_scopeId}>Hoxi</span>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors" }, [
                createVNode(_component_HoxiLogoIcon, { class: "w-6 h-6 !text-white" })
              ]),
              createVNode("span", { class: "text-xl font-extrabold tracking-tight text-slate-900 dark:text-white" }, "Hoxi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-xl font-bold text-slate-900 dark:text-white tracking-tight">${ssrInterpolate(_ctx.$t("hoxi.auth.registerTitle"))}</h1><p class="mt-1.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${ssrInterpolate(_ctx.$t("hoxi.auth.registerSubtitle"))}</p></div>`);
      if (isDesktopRedirect.value) {
        _push(`<div class="mb-5 rounded-xl border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/70 dark:bg-blue-950/30 px-3.5 py-2.5 text-xs text-blue-700 dark:text-blue-300 flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:desktop-tower-bold",
          class: "w-4 h-4 shrink-0 text-blue-600 dark:text-blue-400"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.auth.desktopRedirectHint"))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-2 gap-2.5"><a href="/api/auth/github" class="inline-flex items-center justify-center gap-2 h-10 px-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:github-logo-bold",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span>GitHub</span></a><a href="/api/auth/google" class="inline-flex items-center justify-center gap-2 h-10 px-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "logos:google-icon",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span>Google</span></a></div><div class="my-6 relative flex items-center justify-center"><div class="absolute inset-x-0 h-px bg-slate-200 dark:bg-slate-800"></div><span class="relative bg-white dark:bg-slate-900 px-3 text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.auth.orWithEmail"))}</span></div><form class="space-y-4"><div><label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">${ssrInterpolate(_ctx.$t("hoxi.auth.nickname"))}</label><input${ssrRenderAttr("value", form.nickname)} type="text" autocomplete="nickname"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.auth.nicknamePlaceholder"))} class="w-full h-10 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors"></div><div><label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">${ssrInterpolate(_ctx.$t("hoxi.auth.email"))}</label><input${ssrRenderAttr("value", form.email)} type="email" required autocomplete="email"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.auth.emailPlaceholder"))} class="w-full h-10 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors"></div><div><label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">${ssrInterpolate(_ctx.$t("hoxi.auth.password"))}</label><input${ssrRenderAttr("value", form.password)} type="password" required autocomplete="new-password"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.auth.passwordPlaceholder"))} class="w-full h-10 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors"></div>`);
      if (error.value) {
        _push(`<div class="rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/40 px-3.5 py-2.5 text-xs text-rose-600 dark:text-rose-400">${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="w-full h-10 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white text-sm font-semibold transition-all disabled:opacity-50 cursor-pointer shadow-xs">${ssrInterpolate(loading.value ? _ctx.$t("hoxi.auth.creatingAccount") : _ctx.$t("hoxi.auth.createAccount"))}</button></form><div class="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400"><span>${ssrInterpolate(_ctx.$t("hoxi.auth.alreadyHaveAccount"))}</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: loginLink.value,
        class: "ml-1.5 font-semibold text-blue-600 dark:text-blue-400 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hoxi.auth.signIn"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hoxi.auth.signIn")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-B9XzQbjP.mjs.map
