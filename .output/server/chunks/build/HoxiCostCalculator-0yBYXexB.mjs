import { aL as useLocaleRouter, a as __nuxt_component_3$1 } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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

const officialMonthlyCost = 145;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiCostCalculator",
  __ssrInlineRender: true,
  setup(__props) {
    const { localePath } = useLocaleRouter();
    const selectedModel = ref("claude-3-7");
    const dailyRequests = ref(35);
    const workDaysOnly = ref(true);
    const modelOptions = [
      { key: "claude-3-7", name: "Claude 3.7 Sonnet", pricePerM: 2.8, tokenPerReq: 2500 },
      { key: "deepseek-r1", name: "DeepSeek R1 (\u6EE1\u8840)", pricePerM: 0.55, tokenPerReq: 3e3 },
      { key: "qwen-25-coder", name: "Qwen 2.5 Coder", pricePerM: 0.25, tokenPerReq: 2500 },
      { key: "gpt-4o", name: "GPT-4o", pricePerM: 2.2, tokenPerReq: 2e3 }
    ];
    const calculatedPaygCost = computed(() => {
      const currentModel = modelOptions.find((m) => m.key === selectedModel.value) || modelOptions[0];
      const days = workDaysOnly.value ? 22 : 30;
      const monthlyTokens = dailyRequests.value * currentModel.tokenPerReq * days;
      const cost = monthlyTokens / 1e6 * currentModel.pricePerM;
      return Math.max(1, Math.round(cost * 10) / 10);
    });
    const savingsMonthly = computed(() => {
      const diff = officialMonthlyCost - calculatedPaygCost.value;
      return diff > 0 ? Math.round(diff) : 0;
    });
    const suggestionText = computed(() => {
      if (dailyRequests.value <= 30) {
        return "\u4F60\u7684\u9891\u6B21\u5C5E\u4E8E\u8F7B\u5EA6\u81F3\u65E5\u5E38\u5F00\u53D1\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u76F4\u63A5\u8D70\u300C\u6309\u91CF\u4E2D\u8F6C\u300D\uFF0C\u6708\u8D39\u901A\u5E38\u4E0D\u8D85\u8FC7 \xA520\uFF0C\u4E0D\u7528\u65F6 0 \u6210\u672C\uFF0C\u5B8C\u5168\u6CA1\u5FC5\u8981\u4E70 $20 \u5B98\u65B9\u56FA\u5B9A\u5305\u6708\u3002";
      }
      if (dailyRequests.value <= 90) {
        return "\u65E5\u5E38\u4E2D\u9AD8\u9891\u5199\u4EE3\u7801\uFF1A\u4F7F\u7528\u300CDeepSeek R1 / Qwen Coder \u6309\u91CF\u300D\u80FD\u7701\u4E0B 80% \u4EE5\u4E0A\u6210\u672C\uFF1B\u82E5\u5FC5\u987B\u4F9D\u8D56 Claude 3.7 \u601D\u8003\u6A21\u5F0F\uFF0C\u6309\u91CF\u4E5F\u80FD\u6BD4\u5B98\u65B9\u8BA2\u9605\u7701\u7EA6 40-50%\u3002";
      }
      return "\u5168\u5929\u5019\u91CD\u5EA6\u8FDE\u7EED\u91CD\u5199\uFF1A\u6B64\u65F6\u53EF\u8003\u8651\u300CCursor Pro \u5B98\u65B9\u8BA2\u9605\u300D\u4F5C\u4E3A\u65E5\u5E38\u5E95\u5EA7\uFF0C\u5E76\u5C06\u6309\u91CF API Key \u914D\u4E3A\u5907\u7528\u7EBF\u8DEF\uFF0C\u9632\u6B62 500 \u6B21\u9AD8\u901F\u989D\u5EA6\u7528\u5C3D\u540E\u6162\u901F\u6392\u961F\u3002";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6 md:p-8" }, _attrs))}><div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4"><div><h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2"><span>\u{1F9EE}</span><span>\u4E00\u4EBA\u516C\u53F8\u6708\u5EA6\u7B97\u529B\u6210\u672C\u7CBE\u7B97\u5668</span></h3><p class="mt-1 text-xs text-slate-500 dark:text-slate-400"> \u6839\u636E\u4F60\u7684\u4E00\u4EBA\u516C\u53F8\u65E5\u5E38\u5F00\u53D1\u9891\u6B21\uFF0C\u6D4B\u7B97\u300C\u5B98\u65B9\u56FA\u5B9A\u8BA2\u9605\u300Dvs\u300C\u5408\u559C\u964D\u8D39\u6309\u91CF\u300D\uFF0C\u7B97\u7B97\u4E00\u5E74\u80FD\u7701\u4E0B\u591A\u5C11\u771F\u91D1\u767D\u94F6 </p></div><span class="hidden sm:inline-block rounded-full bg-amber-50 dark:bg-amber-950/50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/60"> \u4E00\u4EBA\u516C\u53F8\u7CBE\u7B97 </span></div><div class="mt-6 grid gap-6 md:grid-cols-2"><div class="space-y-5"><div><label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">1. \u9009\u62E9\u4F60\u6700\u5E38\u7528\u7684\u4EE3\u7801\u6A21\u578B\uFF1A</label><div class="mt-2 grid grid-cols-2 gap-2 text-xs"><!--[-->`);
      ssrRenderList(modelOptions, (m) => {
        _push(`<button type="button" class="${ssrRenderClass([selectedModel.value === m.key ? "border-blue-500 bg-white dark:bg-slate-800 shadow-xs font-medium text-slate-900 dark:text-white" : "border-slate-200/80 dark:border-slate-700 bg-white/60 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600", "rounded-lg border p-2.5 text-left transition-all"])}"><div class="font-semibold">${ssrInterpolate(m.name)}</div><div class="mt-0.5 text-[10px] text-slate-400 dark:text-slate-500">\u5355\u4EF7 \xA5${ssrInterpolate(m.pricePerM)}/M</div></button>`);
      });
      _push(`<!--]--></div></div><div><div class="flex items-center justify-between text-xs"><label class="font-semibold text-slate-700 dark:text-slate-300">2. \u6BCF\u5929\u5728 IDE \u91CC\u53D1\u8D77\u8BE2\u95EE/\u751F\u6210\u6B21\u6570\uFF1A</label><span class="font-bold tabular-nums text-blue-600 dark:text-blue-400 text-sm">${ssrInterpolate(dailyRequests.value)} \u6B21/\u5929</span></div><input${ssrRenderAttr("value", dailyRequests.value)} type="range" min="5" max="200" step="5" class="mt-2 w-full accent-blue-500 cursor-pointer"><div class="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-mono"><span>5 \u6B21 (\u8F7B\u5EA6)</span><span>50 \u6B21 (\u65E5\u5E38\u5F00\u53D1)</span><span>120 \u6B21 (\u91CD\u5EA6\u4E3B\u529B)</span><span>200 \u6B21</span></div></div><div><label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">3. \u4F7F\u7528\u4E60\u60EF\uFF1A</label><div class="mt-2 flex gap-2 text-xs"><button type="button" class="${ssrRenderClass([workDaysOnly.value ? "border-blue-500 bg-white dark:bg-slate-800 font-medium text-slate-900 dark:text-white shadow-xs" : "border-slate-200/80 dark:border-slate-700 bg-white/60 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 hover:border-slate-300", "flex-1 rounded-lg border py-2 text-center transition-all"])}"> \u5DE5\u4F5C\u65E5 (\u7EA6 22 \u5929/\u6708) </button><button type="button" class="${ssrRenderClass([!workDaysOnly.value ? "border-blue-500 bg-white dark:bg-slate-800 font-medium text-slate-900 dark:text-white shadow-xs" : "border-slate-200/80 dark:border-slate-700 bg-white/60 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 hover:border-slate-300", "flex-1 rounded-lg border py-2 text-center transition-all"])}"> \u5168\u5929\u5019 (30 \u5929/\u6708) </button></div></div></div><div class="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900 p-5 shadow-xs"><div><span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">\u6708\u5EA6\u8D26\u5355\u5BF9\u6BD4\u7ED3\u679C</span><div class="mt-4 grid grid-cols-2 gap-4 border-b border-slate-100 dark:border-slate-800 pb-4"><div><div class="text-[11px] text-slate-400">\u5B98\u65B9\u56FA\u5B9A\u8BA2\u9605</div><div class="mt-1 text-lg font-bold text-slate-800 dark:text-slate-200"> \xA5${ssrInterpolate(officialMonthlyCost)} <span class="text-xs font-normal text-slate-400">/\u6708</span></div><div class="mt-0.5 text-[10px] text-slate-400">\u56FA\u5B9A $20/\u6708 (~\xA5145)</div></div><div><div class="text-[11px] text-blue-600 dark:text-blue-400 font-semibold">\u4E13\u7EBF\u6309\u91CF\u6263\u8D39 (\u9884\u4F30)</div><div class="mt-1 text-2xl font-bold text-emerald-600 dark:text-emerald-400 tabular-nums"> \xA5${ssrInterpolate(calculatedPaygCost.value)} <span class="text-xs font-normal text-slate-400">/\u6708</span></div><div class="mt-0.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">\u5145\u591A\u5C11\u7528\u591A\u5C11 \xB7 \u6C38\u4E0D\u8FC7\u671F</div></div></div><div class="mt-4 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/60 p-3 text-xs text-emerald-900 dark:text-emerald-300"><div class="font-bold flex items-center justify-between"><span>\u6BCF\u6708\u9884\u8BA1\u8282\u7701\uFF1A</span><span class="text-base font-extrabold text-emerald-700 dark:text-emerald-300">\xA5${ssrInterpolate(savingsMonthly.value)} / \u6708</span></div><div class="mt-1 text-[11px] text-emerald-700 dark:text-emerald-400"> \u76F8\u5F53\u4E8E\u6BCF\u5E74\u7701\u4E0B <strong>\xA5${ssrInterpolate(savingsMonthly.value * 12)}</strong> \u5143\uFF01 </div></div><div class="mt-4 text-xs leading-5 text-slate-600 dark:text-slate-400"><strong class="font-semibold text-slate-800 dark:text-slate-200">\u{1F4A1} \u7AD9\u957F\u9009\u578B\u5EFA\u8BAE\uFF1A</strong><span>${ssrInterpolate(suggestionText.value)}</span></div></div><div class="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between"><span class="text-[11px] text-slate-400">\u652F\u6301 Cursor / VS Code / Cline</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/gateways"),
        class: "rounded-full bg-slate-900 dark:bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u83B7\u53D6\u4E13\u7EBF\u914D\u7F6E \u2192 `);
          } else {
            return [
              createTextVNode(" \u83B7\u53D6\u4E13\u7EBF\u914D\u7F6E \u2192 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiCostCalculator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "HoxiCostCalculator" });

export { __nuxt_component_6 as default };
