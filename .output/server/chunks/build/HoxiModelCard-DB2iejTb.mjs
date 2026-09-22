import { aM as useLocaleRouter, a as __nuxt_component_3$1, b as _sfc_main$G } from './server.mjs';
import __nuxt_component_3 from './HoxiVendorDot-BQ5SFhuO.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { f as formatScore, a as formatPrice, b as formatContext, c as formatTps } from './useHoxiModels-DpcwauH-.mjs';
import '../nitro/nitro.mjs';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:crypto';
import 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
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
import 'zod';
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
import './models-VgTGFaGO.mjs';
import './vendors-sPFB0I2R.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiModelCard",
  __ssrInlineRender: true,
  props: {
    model: {},
    rank: {},
    isSelected: { type: Boolean }
  },
  emits: ["toggle-select"],
  setup(__props) {
    const { localePath } = useLocaleRouter();
    const currencySymbol = (currency) => currency === "USD" ? "$" : "\xA5";
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_HoxiVendorDot = __nuxt_component_3;
      const _component_UIcon = _sfc_main$G;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["group rounded-2xl border transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between bg-white dark:bg-slate-900/80 hover:shadow-xs", __props.isSelected ? "border-blue-500 ring-1 ring-blue-500/40 bg-blue-50/20 dark:bg-blue-950/40" : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"]
      }, _attrs))}><div><div class="flex items-center justify-between gap-2 mb-3"><div class="flex items-center gap-2"><span class="${ssrRenderClass([__props.rank === 1 ? "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-900/40 dark:text-amber-200 dark:border-amber-800/60" : __props.rank === 2 ? "bg-slate-100 text-slate-700 border border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700" : __props.rank === 3 ? "bg-amber-50 text-amber-900 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-800/60" : "bg-slate-50 dark:bg-slate-800 text-slate-400 border border-slate-100 dark:border-slate-700 dark:text-slate-500", "w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center font-mono tabular-nums"])}">`);
      if (__props.rank === 1) {
        _push(`<span>\u{1F947}</span>`);
      } else if (__props.rank === 2) {
        _push(`<span>\u{1F948}</span>`);
      } else if (__props.rank === 3) {
        _push(`<span>\u{1F949}</span>`);
      } else {
        _push(`<span>${ssrInterpolate(__props.rank)}</span>`);
      }
      _push(`</span><span class="text-xs text-slate-500 dark:text-slate-400 font-medium">${ssrInterpolate(((_a = __props.model.vendorInfo) == null ? void 0 : _a.nameZh) || __props.model.vendor)}</span></div><button type="button" class="${ssrRenderClass([__props.isSelected ? "bg-blue-500 text-white border-blue-500" : "text-slate-400 border-slate-200 dark:border-slate-800 hover:border-blue-400 hover:text-blue-500 dark:text-slate-500", "text-xs font-medium px-2 py-0.5 rounded-full border transition-colors"])}">${ssrInterpolate(__props.isSelected ? "\u5DF2\u52A0\u5BF9\u6BD4" : "+ \u5BF9\u6BD4")}</button></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)(`/models/${__props.model.slug}`),
        class: "block group-hover:text-blue-600 transition-colors dark:group-hover:text-blue-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiVendorDot, {
              vendor: __props.model.vendorInfo
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-base font-bold text-slate-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(__props.model.name)}</h3></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-1.5" }, [
                createVNode(_component_HoxiVendorDot, {
                  vendor: __props.model.vendorInfo
                }, null, 8, ["vendor"]),
                createVNode("h3", { class: "text-base font-bold text-slate-900 dark:text-white truncate" }, toDisplayString(__props.model.name), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-wrap items-center gap-1 mt-2"><!--[-->`);
      ssrRenderList((__props.model.badges || []).slice(0, 2), (badge) => {
        _push(`<span class="px-2 py-0.5 rounded-md text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">${ssrInterpolate(badge)}</span>`);
      });
      _push(`<!--]-->`);
      if (__props.model.isFree) {
        _push(`<span class="px-2 py-0.5 rounded-md text-[10px] bg-emerald-50 text-emerald-700 font-medium dark:bg-emerald-950/40 dark:text-emerald-300"> \u514D\u8D39 </span>`);
      } else if (__props.model.reasoning) {
        _push(`<span class="px-2 py-0.5 rounded-md text-[10px] bg-blue-50 text-blue-700 font-medium dark:bg-blue-950/40 dark:text-blue-300"> \u6DF1\u5EA6\u601D\u8003 </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-4 grid grid-cols-2 gap-2 text-xs bg-slate-50 dark:bg-slate-800/40 rounded-xl p-3 border border-slate-100 dark:border-slate-800"><div><span class="text-[10px] text-slate-400 block dark:text-slate-500">\u7EFC\u5408\u5206</span><span class="font-mono font-bold text-slate-900 dark:text-white text-base tabular-nums">${ssrInterpolate(unref(formatScore)(__props.model.scores.overall))}</span></div><div><span class="text-[10px] text-slate-400 block dark:text-slate-500">\u6DF7\u5408\u5355\u4EF7</span><div class="flex items-baseline gap-0.5"><span class="${ssrRenderClass([__props.model.blendedPrice <= 2 ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-white", "font-mono font-bold text-base tabular-nums"])}"> \xA5${ssrInterpolate(unref(formatPrice)(__props.model.blendedPrice))}</span><span class="text-[10px] text-slate-400 dark:text-slate-500">/M</span></div></div></div><div class="mt-3 space-y-1.5 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-2.5"><div class="flex items-center justify-between"><span>\u8F93\u5165 / \u8F93\u51FA\uFF1A</span><span class="font-mono tabular-nums text-slate-700 dark:text-slate-300">${ssrInterpolate(currencySymbol(__props.model.price.currency))}${ssrInterpolate(unref(formatPrice)(__props.model.price.input))} / ${ssrInterpolate(currencySymbol(__props.model.price.currency))}${ssrInterpolate(unref(formatPrice)(__props.model.price.output))}</span></div><div class="flex items-center justify-between"><span>\u4E0A\u4E0B\u6587\u7A97\u53E3\uFF1A</span><span class="font-mono tabular-nums text-slate-700 dark:text-slate-300">${ssrInterpolate(unref(formatContext)(__props.model.contextWindow))}</span></div><div class="flex items-center justify-between"><span>\u8F93\u51FA\u541E\u5410\u901F\u5EA6\uFF1A</span><span class="font-mono tabular-nums text-slate-700 dark:text-slate-300">${ssrInterpolate(unref(formatTps)((_b = __props.model.perf) == null ? void 0 : _b.tps))} TPS </span></div></div></div><div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)(`/models/${__props.model.slug}`),
        class: "text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u67E5\u770B\u5B8C\u6574\u8BC4\u6D4B</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-right",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "\u67E5\u770B\u5B8C\u6574\u8BC4\u6D4B"),
              createVNode(_component_UIcon, {
                name: "ph:arrow-right",
                class: "w-3.5 h-3.5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiModelCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main, { __name: "HoxiModelCard" });

export { __nuxt_component_5 as default };
