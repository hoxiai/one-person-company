import { u as useI18n, E as useLocaleRouter, bz as useSeoMeta, P as __nuxt_component_3$4 } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';
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
  __name: "terms",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { localePath } = useLocaleRouter();
    useSeoMeta({
      title: () => `${t("hoxi.legal.terms.title")} \xB7 ${t("hoxi.site.name")}`,
      description: () => t("hoxi.legal.terms.intro")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[720px] mx-auto px-4 md:px-6 py-10 md:py-16" }, _attrs))}><nav class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400"><div class="flex flex-wrap items-center gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/privacy"),
        class: "hover:text-blue-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hoxi.footer.privacy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hoxi.footer.privacy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-slate-300 dark:text-slate-700">\xB7</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/account/delete"),
        class: "hover:text-blue-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hoxi.footer.accountDelete"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hoxi.footer.accountDelete")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-3"><a href="/terms" class="hover:text-blue-500 transition-colors"> English </a><span class="text-slate-300 dark:text-slate-700">/</span><a href="/zh/terms" class="hover:text-blue-500 transition-colors"> \u7B80\u4F53\u4E2D\u6587 </a><span class="text-slate-300 dark:text-slate-700">/</span><a href="/zh-HK/terms" class="hover:text-blue-500 transition-colors"> \u7E41\u9AD4\u4E2D\u6587 </a></div></nav><header class="pt-8 pb-8 border-b border-slate-100 dark:border-slate-800"><p class="text-xs font-medium tracking-wide text-slate-400 uppercase">${ssrInterpolate(_ctx.$t("hoxi.legal.terms.badge"))}</p><h1 class="mt-2 text-[28px] md:text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight tracking-tight">${ssrInterpolate(_ctx.$t("hoxi.legal.terms.title"))}</h1><p class="mt-3 text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.legal.terms.meta"))}</p><p class="mt-5 text-[16px] leading-8 text-slate-700 dark:text-slate-300">${ssrInterpolate(_ctx.$t("hoxi.legal.terms.intro"))}</p></header><div class="divide-y divide-slate-100 dark:divide-slate-800 text-[16px] leading-8 text-slate-700 dark:text-slate-300"><section class="py-8 space-y-3"><h2 class="text-[17px] md:text-xl font-semibold text-slate-800 dark:text-slate-100 leading-snug">${ssrInterpolate(_ctx.$t("hoxi.legal.terms.sec1Title"))}</h2><p>${ssrInterpolate(_ctx.$t("hoxi.legal.terms.sec1Body"))}</p></section><section class="py-8 space-y-3"><h2 class="text-[17px] md:text-xl font-semibold text-slate-800 dark:text-slate-100 leading-snug">${ssrInterpolate(_ctx.$t("hoxi.legal.terms.sec2Title"))}</h2><p>${ssrInterpolate(_ctx.$t("hoxi.legal.terms.sec2Body"))}</p></section><section class="py-8 space-y-3"><h2 class="text-[17px] md:text-xl font-semibold text-slate-800 dark:text-slate-100 leading-snug">${ssrInterpolate(_ctx.$t("hoxi.legal.terms.sec3Title"))}</h2><p>${ssrInterpolate(_ctx.$t("hoxi.legal.terms.sec3Body"))}</p></section><section class="py-8 space-y-3"><h2 class="text-[17px] md:text-xl font-semibold text-slate-800 dark:text-slate-100 leading-snug">${ssrInterpolate(_ctx.$t("hoxi.legal.terms.sec4Title"))}</h2><p>${ssrInterpolate(_ctx.$t("hoxi.legal.terms.sec4Body"))}</p><p class="pt-1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/account/delete"),
        class: "text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hoxi.legal.privacy.deleteCta"))} \u2192 `);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hoxi.legal.privacy.deleteCta")) + " \u2192 ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></section><section class="py-8 space-y-3"><h2 class="text-[17px] md:text-xl font-semibold text-slate-800 dark:text-slate-100 leading-snug">${ssrInterpolate(_ctx.$t("hoxi.legal.terms.sec5Title"))}</h2><p>${ssrInterpolate(_ctx.$t("hoxi.legal.terms.sec5Body"))}</p><p>${ssrInterpolate(_ctx.$t("hoxi.legal.privacy.contactPrefix"))} <a href="mailto:support@hoxi.ai" class="text-blue-600 hover:text-blue-500 transition-colors"> support@hoxi.ai </a></p></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=terms-9z5k6xcj.mjs.map
