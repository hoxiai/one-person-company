import __nuxt_component_2 from './HoxiLogoIcon-DQjCSQpM.mjs';
import { defineComponent, computed, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { H as useRoute, D as useLocaleRouter, bw as useCustomerAuth, bu as useSeoMeta } from './server.mjs';
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
  __name: "mobile-bridge",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useLocaleRouter();
    const { user } = useCustomerAuth();
    const state = computed(() => String(route.query.state || "").trim());
    const hasValidState = computed(() => /^[0-9a-f]{32}$/.test(state.value));
    const status = ref("checking");
    const deepLink = ref("");
    const errorMessage = ref("");
    const accountLabel = computed(() => {
      const current = user.value;
      return (current == null ? void 0 : current.email) || (current == null ? void 0 : current.nickname) || "Hoxi";
    });
    useSeoMeta({
      title: () => "Hoxi",
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiLogoIcon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center px-4 py-12 bg-slate-50 dark:bg-slate-950 font-sans" }, _attrs))}><div class="w-full max-w-md rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center shadow-xl"><div class="flex items-center justify-center gap-2.5 mb-6"><div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">`);
      _push(ssrRenderComponent(_component_HoxiLogoIcon, { class: "w-7 h-7 !text-white" }, null, _parent));
      _push(`</div><span class="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">Hoxi</span></div>`);
      if (!hasValidState.value) {
        _push(`<!--[--><h1 class="text-lg font-bold text-slate-900 dark:text-white">${ssrInterpolate(_ctx.$t("hoxi.authMobile.invalidState"))}</h1><p class="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.authMobile.invalidStateHint"))}</p><!--]-->`);
      } else if (status.value === "exchanging") {
        _push(`<div class="flex flex-col items-center justify-center py-4 text-slate-500"><div class="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent mb-3"></div><p class="text-xs">${ssrInterpolate(_ctx.$t("hoxi.authMobile.exchanging"))}</p></div>`);
      } else if (status.value === "ready") {
        _push(`<!--[--><h1 class="text-lg font-bold text-slate-900 dark:text-white">${ssrInterpolate(_ctx.$t("hoxi.authMobile.readyTitle"))}</h1><p class="mt-2 text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.authMobile.readyDesc", { account: accountLabel.value }))}</p><a${ssrRenderAttr("href", deepLink.value)} class="mt-6 block w-full py-2.5 px-4 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md shadow-blue-500/20">${ssrInterpolate(_ctx.$t("hoxi.authMobile.openAppBtn"))}</a><p class="mt-3 text-[11px] text-slate-400 dark:text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.authMobile.closeHint"))}</p><!--]-->`);
      } else {
        _push(`<!--[--><h1 class="text-lg font-bold text-slate-900 dark:text-white">${ssrInterpolate(_ctx.$t("hoxi.authMobile.failedTitle"))}</h1><p class="mt-2 text-xs text-rose-600 dark:text-rose-400">${ssrInterpolate(errorMessage.value)}</p><button type="button" class="mt-6 w-full py-2.5 px-4 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all cursor-pointer">${ssrInterpolate(_ctx.$t("hoxi.authMobile.retryBtn"))}</button><!--]-->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/auth/mobile-bridge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=mobile-bridge-BX6CGSqU.mjs.map
