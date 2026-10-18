import __nuxt_component_2 from './HoxiLogoIcon-CLwAteRV.mjs';
import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { G as useRoute, D as useLocaleRouter, bv as useCustomerAuth } from './server.mjs';
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
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'node:child_process';
import 'process';
import 'buffer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useLocaleRouter();
    const { loggedIn, user } = useCustomerAuth();
    const state = computed(() => String(route.query.state || "").trim());
    const hasValidState = computed(() => /^[0-9a-f]{32}$/.test(state.value));
    const checkingSession = ref(true);
    const submitting = ref(false);
    const cancelled = ref(false);
    const error = ref("");
    const accountLabel = computed(() => {
      const current = user.value;
      return (current == null ? void 0 : current.email) || (current == null ? void 0 : current.nickname) || "Hoxi Developer";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiLogoIcon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center px-4 py-12 bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-500 selection:text-white" }, _attrs))}><div class="w-full max-w-md rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-xl"><div class="flex items-center justify-center gap-2.5 mb-6"><div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">`);
      _push(ssrRenderComponent(_component_HoxiLogoIcon, { class: "w-7 h-7 !text-white" }, null, _parent));
      _push(`</div><span class="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">Hoxi</span></div><h1 class="text-xl font-bold text-center text-slate-900 dark:text-white">${ssrInterpolate(_ctx.$t("hoxi.authDesktop.title"))}</h1>`);
      if (!hasValidState.value) {
        _push(`<div class="mt-6 rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/40 p-4 text-center"><p class="text-sm font-medium text-rose-600 dark:text-rose-400">${ssrInterpolate(_ctx.$t("hoxi.authDesktop.invalidState"))}</p></div>`);
      } else if (cancelled.value) {
        _push(`<div class="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.authDesktop.cancelled"))}</div>`);
      } else if (checkingSession.value) {
        _push(`<div class="mt-6 flex flex-col items-center justify-center py-6 text-slate-500"><div class="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent mb-3"></div><p class="text-xs">${ssrInterpolate(_ctx.$t("hoxi.authDesktop.checkingSession"))}</p></div>`);
      } else if (!unref(loggedIn)) {
        _push(`<div class="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.authDesktop.redirectingLogin"))}</div>`);
      } else {
        _push(`<!--[--><p class="mt-2 text-xs text-center text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.authDesktop.subtitle"))}</p><div class="mt-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 p-4"><div class="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">${ssrInterpolate(_ctx.$t("hoxi.authDesktop.accountLabel"))}</div><div class="mt-1 flex items-center justify-between"><span class="text-sm font-semibold text-slate-900 dark:text-white break-all">${ssrInterpolate(accountLabel.value)}</span><span class="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300">${ssrInterpolate(_ctx.$t("hoxi.authDesktop.activeBadge"))}</span></div></div><ul class="mt-5 space-y-2.5 text-xs text-slate-600 dark:text-slate-400"><li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"></span><span>${ssrInterpolate(_ctx.$t("hoxi.authDesktop.perm1"))}</span></li><li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"></span><span>${ssrInterpolate(_ctx.$t("hoxi.authDesktop.perm2"))}</span></li></ul><div class="mt-5 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50 dark:bg-blue-950/30 p-3 text-xs leading-relaxed text-blue-800 dark:text-blue-300">${ssrInterpolate(_ctx.$t("hoxi.authDesktop.singleDeviceNote"))}</div>`);
        if (error.value) {
          _push(`<p class="mt-3 text-xs text-rose-600 dark:text-rose-400 text-center">${ssrInterpolate(error.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-6 flex gap-3"><button type="button"${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""} class="flex-1 py-2.5 px-4 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer shadow-md shadow-blue-500/20">${ssrInterpolate(submitting.value ? _ctx.$t("hoxi.authDesktop.submitting") : _ctx.$t("hoxi.authDesktop.confirmBtn"))}</button><button type="button"${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""} class="py-2.5 px-4 rounded-xl font-medium text-sm text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">${ssrInterpolate(_ctx.$t("hoxi.authDesktop.cancelBtn"))}</button></div><!--]-->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/auth/authorize-desktop/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-6Xt9VrRR.mjs.map
