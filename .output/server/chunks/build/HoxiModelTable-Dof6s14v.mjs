import { aM as useLocaleRouter, e as useI18n, a as __nuxt_component_3$1 } from './server.mjs';
import __nuxt_component_1 from './HoxiVendorDot-BLwK_ZsG.mjs';
import __nuxt_component_2 from './HoxiValueBar-nKN9Q0nQ.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
import { f as formatScore, a as formatPrice, c as formatTps, d as formatLatency, b as formatContext } from './useHoxiModels-DpcwauH-.mjs';
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
  __name: "HoxiModelTable",
  __ssrInlineRender: true,
  props: {
    models: {},
    sortField: {},
    sortDirection: {},
    caption: {},
    compact: { type: Boolean, default: false },
    selectable: { type: Boolean, default: false },
    selectedSlugs: { default: () => [] }
  },
  emits: ["sort", "toggle-select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { localePath } = useLocaleRouter();
    const { t } = useI18n();
    const COMPACT_KEYS = ["overall", "blended", "value"];
    const columns = computed(() => {
      const all = [
        { key: "overall", label: t("hoxi.models.columns.overall"), sort: "overall" },
        { key: "input", label: t("hoxi.models.columns.input") },
        { key: "output", label: t("hoxi.models.columns.output") },
        { key: "blended", label: t("hoxi.models.columns.blended"), sort: "blendedPrice" },
        { key: "value", label: t("hoxi.models.columns.value"), sort: "valueIndex" },
        { key: "tps", label: t("hoxi.models.columns.tps"), sort: "tps", mobileHidden: true },
        { key: "ttft", label: t("hoxi.models.columns.ttft"), sort: "ttft", mobileHidden: true },
        { key: "context", label: t("hoxi.models.columns.context"), sort: "contextWindow", mobileHidden: true }
      ];
      return props.compact ? all.filter((column) => COMPACT_KEYS.includes(column.key)) : all;
    });
    const isVisible = (key) => columns.value.some((column) => column.key === key);
    const currencySymbol = (currency) => currency === "USD" ? "$" : "\xA5";
    const ariaSortFor = (field) => {
      if (props.sortField !== field) return "none";
      return props.sortDirection === "asc" ? "ascending" : "descending";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_HoxiVendorDot = __nuxt_component_1;
      const _component_HoxiValueBar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-auto" }, _attrs))}><table class="${ssrRenderClass([__props.compact ? "min-w-[380px]" : "min-w-[760px]", "w-full border-collapse text-sm"])}"><caption class="sr-only">${ssrInterpolate(__props.caption)}</caption><thead><tr class="border-b border-slate-200 dark:border-slate-800"><th scope="col" class="sticky left-0 z-10 bg-white dark:bg-slate-950 py-2.5 pr-4 text-left text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500"><div class="flex items-center gap-2">`);
      if (__props.selectable) {
        _push(`<span class="w-4"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.models.columns.model"))}</span></div></th><!--[-->`);
      ssrRenderList(columns.value, (column) => {
        _push(`<th scope="col" class="${ssrRenderClass([column.mobileHidden ? "hidden md:table-cell" : "", "py-2.5 pl-4 text-right text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500 whitespace-nowrap"])}"${ssrRenderAttr("aria-sort", column.sort ? ariaSortFor(column.sort) : void 0)}>`);
        if (column.sort) {
          _push(`<button type="button" class="${ssrRenderClass([__props.sortField === column.sort ? "text-slate-700 dark:text-slate-200 font-semibold" : "hover:text-blue-500 dark:hover:text-blue-400", "inline-flex items-center gap-1 transition-colors"])}">${ssrInterpolate(column.label)} `);
          if (__props.sortField === column.sort) {
            _push(`<span aria-hidden="true">${ssrInterpolate(__props.sortDirection === "asc" ? "\u2191" : "\u2193")}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        } else {
          _push(`<span>${ssrInterpolate(column.label)}</span>`);
        }
        _push(`</th>`);
      });
      _push(`<!--]--></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.models, (model, index) => {
        var _a, _b, _c, _d, _e, _f;
        _push(`<tr class="${ssrRenderClass([((_a = __props.selectedSlugs) == null ? void 0 : _a.includes(model.slug)) ? "bg-blue-50/30 dark:bg-blue-950/20" : "", "group border-b border-slate-100 dark:border-slate-800/80 transition-colors hover:bg-slate-50/60 dark:hover:bg-slate-900/60"])}"><th scope="row" class="${ssrRenderClass([((_b = __props.selectedSlugs) == null ? void 0 : _b.includes(model.slug)) ? "!bg-blue-50/40 dark:!bg-blue-950/30" : "", "sticky left-0 z-10 bg-white dark:bg-slate-950 py-3 pr-4 text-left font-normal transition-colors group-hover:bg-slate-50/60 dark:group-hover:bg-slate-900/60"])}"><div class="flex items-center gap-2.5">`);
        if (__props.selectable) {
          _push(`<input type="checkbox" class="rounded border-slate-300 dark:border-slate-700 text-blue-600 focus:ring-blue-500 cursor-pointer w-3.5 h-3.5 dark:text-blue-400"${ssrIncludeBooleanAttr((_c = __props.selectedSlugs) == null ? void 0 : _c.includes(model.slug)) ? " checked" : ""}>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="${ssrRenderClass([index === 0 ? "text-amber-500 font-extrabold" : index === 1 ? "text-slate-400 font-bold dark:text-slate-500" : index === 2 ? "text-amber-700 font-bold dark:text-amber-300" : "text-slate-300 dark:text-slate-600 font-normal", "w-5 shrink-0 tabular-nums text-xs flex items-center justify-center font-mono"])}">`);
        if (index === 0) {
          _push(`<span>\u{1F947}</span>`);
        } else if (index === 1) {
          _push(`<span>\u{1F948}</span>`);
        } else if (index === 2) {
          _push(`<span>\u{1F949}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(index + 1)}</span>`);
        }
        _push(`</span><div class="min-w-0">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(`/models/${model.slug}`),
          class: "flex items-center gap-1.5 truncate font-medium text-slate-800 dark:text-slate-100 transition-colors group-hover:text-blue-500 dark:group-hover:text-blue-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_HoxiVendorDot, {
                vendor: model.vendorInfo
              }, null, _parent2, _scopeId));
              _push2(`<span class="truncate font-semibold"${_scopeId}>${ssrInterpolate(model.name)}</span>`);
            } else {
              return [
                createVNode(_component_HoxiVendorDot, {
                  vendor: model.vendorInfo
                }, null, 8, ["vendor"]),
                createVNode("span", { class: "truncate font-semibold" }, toDisplayString(model.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="flex items-center gap-1.5 mt-0.5"><span class="truncate text-[11px] text-slate-500 dark:text-slate-400">${ssrInterpolate(((_d = model.vendorInfo) == null ? void 0 : _d.nameZh) || model.vendor)}</span><!--[-->`);
        ssrRenderList((model.badges || []).slice(0, 2), (badge) => {
          _push(`<span class="px-1.5 py-0.2 rounded text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium shrink-0">${ssrInterpolate(badge)}</span>`);
        });
        _push(`<!--]-->`);
        if (model.isFree) {
          _push(`<span class="px-1.5 py-0.2 rounded text-[10px] bg-emerald-50 text-emerald-700 font-medium shrink-0 dark:bg-emerald-950/40 dark:text-emerald-300">\u514D\u8D39</span>`);
        } else if (model.reasoning) {
          _push(`<span class="px-1.5 py-0.2 rounded text-[10px] bg-blue-50 text-blue-700 font-medium shrink-0 dark:bg-blue-950/40 dark:text-blue-300">\u601D\u8003</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></th>`);
        if (isVisible("overall")) {
          _push(`<td class="py-3 pl-4 text-right tabular-nums text-slate-700 dark:text-slate-300 font-semibold">${ssrInterpolate(unref(formatScore)(model.scores.overall))}</td>`);
        } else {
          _push(`<!---->`);
        }
        if (isVisible("input")) {
          _push(`<td class="py-3 pl-4 text-right tabular-nums whitespace-nowrap text-slate-600 dark:text-slate-400">${ssrInterpolate(currencySymbol(model.price.currency))}${ssrInterpolate(unref(formatPrice)(model.price.input))}</td>`);
        } else {
          _push(`<!---->`);
        }
        if (isVisible("output")) {
          _push(`<td class="py-3 pl-4 text-right tabular-nums whitespace-nowrap text-slate-600 dark:text-slate-400">${ssrInterpolate(currencySymbol(model.price.currency))}${ssrInterpolate(unref(formatPrice)(model.price.output))}</td>`);
        } else {
          _push(`<!---->`);
        }
        if (isVisible("blended")) {
          _push(`<td class="${ssrRenderClass([model.blendedPrice <= 2 ? "text-emerald-600 dark:text-emerald-400 font-bold" : "text-slate-700 dark:text-slate-300", "py-3 pl-4 text-right tabular-nums whitespace-nowrap"])}"> \xA5${ssrInterpolate(unref(formatPrice)(model.blendedPrice))}</td>`);
        } else {
          _push(`<!---->`);
        }
        if (isVisible("value")) {
          _push(`<td class="py-3 pl-4"><div class="flex justify-end">`);
          _push(ssrRenderComponent(_component_HoxiValueBar, {
            value: model.valueIndex,
            ratio: model.valueBarRatio
          }, null, _parent));
          _push(`</div></td>`);
        } else {
          _push(`<!---->`);
        }
        if (isVisible("tps")) {
          _push(`<td class="hidden py-3 pl-4 text-right tabular-nums text-slate-600 dark:text-slate-400 md:table-cell">${ssrInterpolate(unref(formatTps)((_e = model.perf) == null ? void 0 : _e.tps))}</td>`);
        } else {
          _push(`<!---->`);
        }
        if (isVisible("ttft")) {
          _push(`<td class="hidden py-3 pl-4 text-right tabular-nums text-slate-600 dark:text-slate-400 md:table-cell">${ssrInterpolate(unref(formatLatency)((_f = model.perf) == null ? void 0 : _f.ttft))}</td>`);
        } else {
          _push(`<!---->`);
        }
        if (isVisible("context")) {
          _push(`<td class="hidden py-3 pl-4 text-right tabular-nums text-slate-600 dark:text-slate-400 md:table-cell">${ssrInterpolate(unref(formatContext)(model.contextWindow))}</td>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiModelTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "HoxiModelTable" });

export { __nuxt_component_3 as default };
