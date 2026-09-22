import { aM as useLocaleRouter, a as __nuxt_component_3$1, b as _sfc_main$G } from './server.mjs';
import __nuxt_component_3 from './HoxiVendorDot-BQ5SFhuO.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { f as formatScore, a as formatPrice, b as formatContext, c as formatTps } from './useHoxiModels-DpcwauH-.mjs';
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
import 'node:child_process';
import 'node:os';
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
import './models-VgTGFaGO.mjs';
import './vendors-sPFB0I2R.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiModelPodium",
  __ssrInlineRender: true,
  props: {
    models: {},
    selectedSlugs: {}
  },
  emits: ["toggle-select"],
  setup(__props) {
    const props = __props;
    const { localePath } = useLocaleRouter();
    const isSelected = (slug) => {
      var _a;
      return (_a = props.selectedSlugs) == null ? void 0 : _a.includes(slug);
    };
    const podiumModels = computed(() => {
      const list = props.models;
      if (!list.length) return [];
      const overallModel = [...list].sort((a, b) => (b.scores.overall || 0) - (a.scores.overall || 0))[0];
      const valueModel = [...list].sort((a, b) => (b.valueIndex || 0) - (a.valueIndex || 0))[0];
      const speedModel = [...list].sort((a, b) => {
        var _a, _b;
        return (((_a = b.perf) == null ? void 0 : _a.tps) || 0) - (((_b = a.perf) == null ? void 0 : _b.tps) || 0);
      })[0];
      const result = [];
      if (overallModel) {
        result.push({
          model: overallModel,
          icon: "\u{1F947}",
          badgeLabel: "\u7EFC\u5408\u5206\u6700\u9AD8",
          tagClass: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-200/80 dark:border-amber-800/60",
          cardBorder: "border-amber-200/80 dark:border-amber-900/60 hover:border-amber-400",
          verdict: "\u5F53\u524D\u699C\u5355\u7EFC\u5408\u5206\u7B2C\u4E00\uFF0C\u96BE\u7684\u4EFB\u52A1\u53EF\u4EE5\u5148\u8BD5\u5B83\u3002",
          tip: "\u96BE\u7684\u4EFB\u52A1"
        });
      }
      if (valueModel) {
        result.push({
          model: valueModel,
          icon: "\u{1F4B0}",
          badgeLabel: "\u6027\u4EF7\u6BD4\u6700\u9AD8",
          tagClass: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200/80 dark:border-emerald-800/60",
          cardBorder: "border-emerald-200/80 dark:border-emerald-900/60 hover:border-emerald-400",
          verdict: "\u7EFC\u5408\u5206\u9664\u4EE5\u6DF7\u5408\u4EF7\uFF0C\u5728\u699C\u5355\u91CC\u6392\u7B2C\u4E00\u3002",
          tip: "\u65E5\u5E38\u4F7F\u7528"
        });
      }
      if (speedModel) {
        result.push({
          model: speedModel,
          icon: "\u26A1",
          badgeLabel: "\u8F93\u51FA\u6700\u5FEB",
          tagClass: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border-blue-200/80 dark:border-blue-800/60",
          cardBorder: "border-blue-200/80 dark:border-blue-900/60 hover:border-blue-400",
          verdict: "\u699C\u5355\u91CC\u6BCF\u79D2\u8F93\u51FA token \u6570\u6700\u591A\u3002",
          tip: "\u6279\u91CF\u4EFB\u52A1"
        });
      }
      return result;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_HoxiVendorDot = __nuxt_component_3;
      const _component_UIcon = _sfc_main$G;
      if (podiumModels.value.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-3.5" }, _attrs))}><div class="flex items-baseline justify-between"><div><h2 class="text-sm md:text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5"><span>\u{1F3C6}</span><span>${ssrInterpolate(_ctx.$t("hoxi.models.podiumTitle"))}</span></h2><p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${ssrInterpolate(_ctx.$t("hoxi.models.podiumDesc"))}</p></div></div><div class="grid gap-3.5 md:grid-cols-3"><!--[-->`);
        ssrRenderList(podiumModels.value, (item) => {
          var _a;
          _push(`<div class="${ssrRenderClass([item.cardBorder, "group relative rounded-2xl border transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between bg-white dark:bg-slate-900/80"])}"><div><div class="flex items-center justify-between gap-2 mb-3"><span class="${ssrRenderClass([item.tagClass, "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border"])}"><span>${ssrInterpolate(item.icon)}</span><span>${ssrInterpolate(item.badgeLabel)}</span></span><button type="button" class="${ssrRenderClass([isSelected(item.model.slug) ? "bg-blue-500 text-white border-blue-500" : "text-slate-400 border-slate-200 dark:border-slate-800 hover:border-blue-400 hover:text-blue-500 dark:text-slate-500", "text-[11px] font-medium transition-colors px-2 py-0.5 rounded-full border"])}">${ssrInterpolate(isSelected(item.model.slug) ? "\u5DF2\u52A0\u5BF9\u6BD4" : "+ \u5BF9\u6BD4")}</button></div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/models/${item.model.slug}`),
            class: "block group-hover:text-blue-600 transition-colors dark:group-hover:text-blue-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b;
              if (_push2) {
                _push2(`<div class="flex items-center gap-1.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_HoxiVendorDot, {
                  vendor: item.model.vendorInfo
                }, null, _parent2, _scopeId));
                _push2(`<h3 class="text-base font-bold text-slate-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(item.model.name)}</h3></div><span class="text-xs text-slate-500 dark:text-slate-400 block mt-0.5"${_scopeId}>${ssrInterpolate(((_a2 = item.model.vendorInfo) == null ? void 0 : _a2.nameZh) || item.model.vendor)}</span>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center gap-1.5" }, [
                    createVNode(_component_HoxiVendorDot, {
                      vendor: item.model.vendorInfo
                    }, null, 8, ["vendor"]),
                    createVNode("h3", { class: "text-base font-bold text-slate-900 dark:text-white truncate" }, toDisplayString(item.model.name), 1)
                  ]),
                  createVNode("span", { class: "text-xs text-slate-500 dark:text-slate-400 block mt-0.5" }, toDisplayString(((_b = item.model.vendorInfo) == null ? void 0 : _b.nameZh) || item.model.vendor), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<p class="mt-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">${ssrInterpolate(item.verdict)}</p><div class="mt-4 grid grid-cols-2 gap-2 text-xs bg-slate-50 dark:bg-slate-800/50 rounded-xl p-2.5 border border-slate-100 dark:border-slate-800"><div><span class="text-[10px] text-slate-400 block dark:text-slate-500">\u7EFC\u5408\u5206</span><span class="font-mono font-bold text-slate-900 dark:text-white text-sm tabular-nums">${ssrInterpolate(unref(formatScore)(item.model.scores.overall))}</span></div><div><span class="text-[10px] text-slate-400 block dark:text-slate-500">\u6DF7\u5408\u5355\u4EF7</span><span class="${ssrRenderClass([item.model.blendedPrice <= 2 ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-white", "font-mono font-bold text-sm tabular-nums"])}"> \xA5${ssrInterpolate(unref(formatPrice)(item.model.blendedPrice))}</span><span class="text-[10px] text-slate-400 dark:text-slate-500">/M</span></div><div><span class="text-[10px] text-slate-400 block dark:text-slate-500">\u4E0A\u4E0B\u6587</span><span class="font-mono text-slate-700 dark:text-slate-300 tabular-nums">${ssrInterpolate(unref(formatContext)(item.model.contextWindow))}</span></div><div><span class="text-[10px] text-slate-400 block dark:text-slate-500">\u8F93\u51FA\u901F\u5EA6</span><span class="font-mono text-slate-700 dark:text-slate-300 tabular-nums">${ssrInterpolate(unref(formatTps)((_a = item.model.perf) == null ? void 0 : _a.tps))} TPS </span></div></div></div><div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs"><span class="text-[11px] text-slate-400 dark:text-slate-500">${ssrInterpolate(item.tip)}</span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/models/${item.model.slug}`),
            class: "font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>\u8BE6\u60C5</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right",
                  class: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("span", null, "\u8BE6\u60C5"),
                  createVNode(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiModelPodium.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "HoxiModelPodium" });

export { __nuxt_component_2 as default };
