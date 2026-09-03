import { aL as useLocaleRouter, b as _sfc_main$E, a as __nuxt_component_3$1 } from './server.mjs';
import __nuxt_component_1 from './HoxiReadinessRadar-Ce_Ue92s.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "HoxiReadinessReport",
  __ssrInlineRender: true,
  props: {
    result: {}
  },
  emits: ["restart"],
  setup(__props) {
    const { localePath } = useLocaleRouter();
    const copied = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$E;
      const _component_HoxiReadinessRadar = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-10 md:space-y-14" }, _attrs))}><div class="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-6 md:p-10 shadow-xs relative overflow-hidden"><div class="max-w-3xl"><div class="flex flex-wrap items-center gap-2.5 mb-4"><span class="${ssrRenderClass([__props.result.tier.badgeColor, "px-3 py-1 rounded-full text-xs font-semibold border"])}">${ssrInterpolate(__props.result.tier.title)}</span><span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-800 shadow-2xs">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: __props.result.roleMeta.icon,
        class: ["w-3.5 h-3.5", __props.result.roleMeta.color]
      }, null, _parent));
      _push(`<span>${ssrInterpolate(__props.result.roleMeta.name)}</span></span><span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">${ssrInterpolate(__props.result.archetype.name)}</span></div><div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-4"><div class="flex items-baseline gap-1"><span class="text-5xl md:text-6xl font-black font-mono tabular-nums text-slate-900 tracking-tight">${ssrInterpolate(__props.result.overallScore)}</span><span class="text-lg md:text-xl font-medium text-slate-400 font-mono">/ 100</span></div><div><div class="text-base md:text-lg font-semibold text-slate-800">${ssrInterpolate(__props.result.tier.subtitle)}</div><div class="text-xs text-blue-600 font-medium font-mono mt-0.5"> \u{1F680} \u51FB\u8D25\u4E86\u5168\u7F51 <strong class="tabular-nums font-bold">${ssrInterpolate(__props.result.percentile)}%</strong> \u7684\u540C\u5C97\u4F4D\u53D7\u6D4B\u540C\u884C </div></div></div><p class="text-sm md:text-base text-slate-600 leading-relaxed">${ssrInterpolate(__props.result.tier.summary)}</p><div class="mt-5 pt-4 border-t border-slate-200/80 flex items-start gap-3 text-xs md:text-sm text-slate-700 bg-white/80 rounded-xl p-3.5 border border-slate-100">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chat-teardrop-text-bold",
        class: "w-5 h-5 text-blue-500 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<div class="leading-relaxed"><strong class="text-slate-900 font-semibold">\u53EF\u4E50\u7684\u5B9E\u6218\u63D0\u9192\uFF1A</strong><span>${ssrInterpolate(__props.result.tier.advice)}</span></div></div></div></div><div class="grid gap-8 lg:grid-cols-2 items-start"><div class="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 space-y-6"><div class="flex items-center justify-between pb-3 border-b border-slate-100"><h3 class="text-base font-bold text-slate-900 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chart-polar",
        class: "w-5 h-5 text-blue-500"
      }, null, _parent));
      _push(`<span>\u4E94\u7EF4\u80FD\u529B\u96F7\u8FBE\u5206\u5E03</span></h3><span class="text-xs text-slate-400 font-mono">100 \u5206\u6EE1\u5206\u5236</span></div>`);
      _push(ssrRenderComponent(_component_HoxiReadinessRadar, {
        dimensions: __props.result.dimensions
      }, null, _parent));
      _push(`<div class="space-y-3.5 pt-2"><!--[-->`);
      ssrRenderList(__props.result.dimensions, (dim) => {
        _push(`<div class="space-y-1.5"><div class="flex items-center justify-between text-xs"><div class="flex items-center gap-1.5">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: dim.meta.icon,
          class: ["w-4 h-4", dim.meta.color]
        }, null, _parent));
        _push(`<span class="font-medium text-slate-800">${ssrInterpolate(dim.meta.name)}</span></div><span class="font-mono tabular-nums font-bold text-slate-900">${ssrInterpolate(dim.score)} \u5206 </span></div><div class="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden"><div class="${ssrRenderClass([dim.score >= 80 ? "bg-emerald-500" : dim.score >= 60 ? "bg-blue-500" : "bg-amber-500", "h-full rounded-full transition-all duration-500"])}" style="${ssrRenderStyle({ width: `${dim.score}%` })}"></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 space-y-6"><div class="flex items-center justify-between pb-3 border-b border-slate-100"><h3 class="text-base font-bold text-slate-900 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:user-focus",
        class: "w-5 h-5 text-blue-500"
      }, null, _parent));
      _push(`<span>\u539F\u578B\u753B\u50CF\u6DF1\u5EA6\u89E3\u5256</span></h3><span class="text-xs text-slate-400 font-mono">${ssrInterpolate(__props.result.archetype.role)}</span></div><div><div class="text-lg md:text-xl font-bold text-slate-900">${ssrInterpolate(__props.result.archetype.name)}</div><div class="mt-1 text-sm font-medium text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200/80 inline-block"> \u201C${ssrInterpolate(__props.result.archetype.tagline)}\u201D </div></div><div class="space-y-4 text-xs md:text-sm leading-relaxed text-slate-600"><div class="flex items-start gap-2.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-bold",
        class: "w-4 h-4 text-emerald-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<div><strong class="text-slate-800 font-semibold">\u4F60\u7684\u5929\u7136\u6838\u5FC3\u4F18\u52BF\uFF1A</strong><span>${ssrInterpolate(__props.result.archetype.pros)}</span></div></div><div class="flex items-start gap-2.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:warning-circle-bold",
        class: "w-4 h-4 text-amber-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<div><strong class="text-slate-800 font-semibold">\u4F60\u6700\u5BB9\u6613\u9677\u5165\u7684\u8BEF\u533A\uFF1A</strong><span>${ssrInterpolate(__props.result.archetype.cons)}</span></div></div><div class="p-3.5 bg-red-50/80 border border-red-200/80 rounded-xl text-red-900 text-xs md:text-[13px] leading-relaxed"><strong class="font-bold flex items-center gap-1.5 text-red-700 mb-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:skull-bold",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` \u4E00\u4EBA\u516C\u53F8\u7834\u4EA7\u5371\u9669\u8B66\u62A5 </strong><span>${ssrInterpolate(__props.result.archetype.warning)}</span></div></div><div class="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs"><div class="p-3 rounded-xl bg-slate-50 border border-slate-100"><span class="text-slate-400 block mb-1">\u6700\u5F3A\u6760\u6746\u7EF4\u5EA6</span><span class="font-bold text-emerald-700 block text-sm">${ssrInterpolate(__props.result.strongestDimension.meta.name)}</span><span class="font-mono tabular-nums text-slate-500">${ssrInterpolate(__props.result.strongestDimension.score)} \u5206</span></div><div class="p-3 rounded-xl bg-slate-50 border border-slate-100"><span class="text-slate-400 block mb-1">\u6025\u9700\u4FEE\u8865\u77ED\u677F</span><span class="font-bold text-amber-700 block text-sm">${ssrInterpolate(__props.result.weakestDimension.meta.name)}</span><span class="font-mono tabular-nums text-slate-500">${ssrInterpolate(__props.result.weakestDimension.score)} \u5206</span></div></div></div></div><section class="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50/20 p-6 md:p-8 space-y-6"><div class="border-b border-slate-200 pb-3 flex items-center justify-between"><h3 class="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: __props.result.roleMeta.icon,
        class: ["w-5 h-5", __props.result.roleMeta.color]
      }, null, _parent));
      _push(`<span>${ssrInterpolate(__props.result.roleAdvice.title)}</span></h3><span class="${ssrRenderClass([[__props.result.roleMeta.bgColor, __props.result.roleMeta.color, __props.result.roleMeta.borderColor, "border"], "text-xs px-2.5 py-0.5 rounded-full font-semibold"])}">${ssrInterpolate(__props.result.roleMeta.name)}\u4E13\u9879 </span></div><div class="text-sm md:text-base font-semibold text-slate-800 leading-relaxed">${ssrInterpolate(__props.result.roleAdvice.headline)}</div><div class="grid md:grid-cols-2 gap-6 pt-2"><div class="bg-white p-5 rounded-xl border border-amber-200/70 space-y-3"><h4 class="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:warning",
        class: "w-4 h-4 text-amber-600"
      }, null, _parent));
      _push(`<span>\u4F60\u8EAB\u4E0A\u6700\u53EF\u80FD\u5B58\u5728\u7684\u5927\u5382\u804C\u4E1A\u75C5</span></h4><ul class="space-y-2 text-xs md:text-sm text-slate-600 leading-relaxed"><!--[-->`);
      ssrRenderList(__props.result.roleAdvice.occupationalHazards, (hazard, hIdx) => {
        _push(`<li class="flex items-start gap-2"><span class="text-amber-500 font-bold">\u2022</span><span>${ssrInterpolate(hazard)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="bg-white p-5 rounded-xl border border-blue-200/70 space-y-3"><h4 class="text-xs font-bold text-blue-800 uppercase tracking-wider flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:pill-bold",
        class: "w-4 h-4 text-blue-600"
      }, null, _parent));
      _push(`<span>\u4E00\u4EBA\u516C\u53F8\u5FC3\u7406\u65AD\u5976\u5B9E\u6218\u5904\u65B9</span></h4><ul class="space-y-2 text-xs md:text-sm text-slate-600 leading-relaxed"><!--[-->`);
      ssrRenderList(__props.result.roleAdvice.weanOffPrescriptions, (rx, rIdx) => {
        _push(`<li class="flex items-start gap-2"><span class="text-blue-600 font-bold font-mono">0${ssrInterpolate(rIdx + 1)}</span><span>${ssrInterpolate(rx)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div></section><section class="space-y-6"><div class="border-b border-slate-200 pb-3"><h3 class="text-xl font-bold text-slate-900 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:first-aid-kit-bold",
        class: "w-6 h-6 text-red-500"
      }, null, _parent));
      _push(`<span>\u81F4\u547D\u963F\u5580\u7409\u65AF\u4E4B\u8E35 \xB7 7\u5929\u907F\u5751\u5904\u65B9\u7B7E</span></h3><p class="mt-1 text-xs md:text-sm text-slate-500"> \u9488\u5BF9\u4F60\u76EE\u524D\u5F97\u5206\u6700\u4F4E\u7684\u7EF4\u5EA6\uFF0C\u4E3A\u4F60\u5F00\u5177\u6700\u5177\u6740\u4F24\u529B\u7684\u5B9E\u6218\u8865\u77ED\u5904\u65B9\uFF1A </p></div><div class="space-y-6"><!--[-->`);
      ssrRenderList(__props.result.blindspots, (blindspot, bIdx) => {
        _push(`<div class="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 space-y-5"><div class="flex items-center gap-2 text-red-600 font-bold text-base md:text-lg"><span class="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs flex items-center justify-center font-mono"> 0${ssrInterpolate(bIdx + 1)}</span><span>${ssrInterpolate(blindspot.title)}</span></div><div class="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-xs md:text-sm leading-relaxed text-slate-700"><strong class="font-semibold text-slate-900 block mb-1">\u{1F50D} \u6839\u56E0\u4F53\u68C0\uFF1A</strong> ${ssrInterpolate(blindspot.diagnosis)}</div><div><h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3"> \u{1F48A} \u63A5\u4E0B\u6765 7 \u5929\u5FC5\u987B\u843D\u5730\u7684\u884C\u52A8\u6E05\u5355 </h4><div class="space-y-2.5"><!--[-->`);
        ssrRenderList(blindspot.prescriptions, (step, sIdx) => {
          _push(`<div class="flex items-start gap-3 text-xs md:text-sm text-slate-700"><span class="font-mono font-bold text-blue-600 shrink-0">#${ssrInterpolate(sIdx + 1)}</span><span class="leading-relaxed">${ssrInterpolate(step)}</span></div>`);
        });
        _push(`<!--]--></div></div><div class="pt-4 border-t border-slate-100"><div class="text-xs font-semibold text-slate-500 mb-2 flex items-center gap-1.5">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:arrow-elbow-down-right",
          class: "w-3.5 h-3.5 text-blue-500"
        }, null, _parent));
        _push(`<span>\u672C\u7AD9\u9488\u5BF9\u6027\u89E3\u836F\u4E0E\u5DE5\u5177\uFF1A</span></div><div class="grid sm:grid-cols-2 gap-3"><!--[-->`);
        ssrRenderList(blindspot.internalLinks, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.to,
            to: unref(localePath)(link.to),
            class: "group p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 transition-all flex items-center justify-between"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${_scopeId}><div class="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors"${_scopeId}>${ssrInterpolate(link.label)}</div><div class="text-[11px] text-slate-500 mt-0.5"${_scopeId}>${ssrInterpolate(link.desc)}</div></div>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right",
                  class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0 ml-2"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("div", null, [
                    createVNode("div", { class: "text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors" }, toDisplayString(link.label), 1),
                    createVNode("div", { class: "text-[11px] text-slate-500 mt-0.5" }, toDisplayString(link.desc), 1)
                  ]),
                  createVNode(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0 ml-2"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></section><section class="rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/60 via-white to-amber-50/30 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"><div class="space-y-2 text-center sm:text-left"><div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800"><span>\u2615 \u627E\u7AD9\u957F\u53EF\u4E50\u4EA4\u6D41</span></div><h4 class="text-base md:text-lg font-bold text-slate-900"> \u60F3\u548C\u66F4\u591A ${ssrInterpolate(__props.result.roleMeta.name)} \u540C\u9891\u804A\u804A\u4E00\u4EBA\u516C\u53F8\u5B9E\u6218\uFF1F </h4><p class="text-xs md:text-sm text-slate-600 leading-relaxed max-w-xl"> \u52A0\u5165\u5408\u559C AI \u72EC\u7ACB\u5F00\u53D1\u8005\u5FAE\u4FE1\u7FA4\uFF0C\u514D\u8D39\u83B7\u53D6\u300A\u4E00\u4EBA\u516C\u53F8 30 \u5929\u6781\u7B80\u8D77\u6B65\u4E0E\u907F\u5751\u6E05\u5355\u300B\uFF0C\u63A2\u8BA8\u771F\u5B9E\u51FA\u6D77\u3001API \u4E13\u7EBF\u9009\u578B\u4E0E\u53D8\u73B0\u590D\u76D8\u3002 </p></div><button type="button" class="shrink-0 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-amber-600 text-xs md:text-sm font-semibold transition-colors shadow-xs"> \u52A0\u53EF\u4E50\u5FAE\u4FE1 / \u8FDB\u7FA4 </button></section><div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200"><button type="button" class="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors py-2 px-4 rounded-xl hover:bg-slate-100 border border-slate-200">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-counter-clockwise-bold",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span>\u6362\u4E2A\u5C97\u4F4D\u91CD\u65B0\u6D4B\u4E00\u6B21</span></button><div class="flex items-center gap-3"><button type="button" class="${ssrRenderClass([copied.value ? "bg-emerald-50 text-emerald-700 border-emerald-300" : "bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50", "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all border shadow-2xs"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: copied.value ? "ph:check-bold" : "ph:copy-simple-bold",
        class: "w-4 h-4 text-slate-500"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236\u4F53\u68C0\u5361\u7247" : "\u590D\u5236\u6D4B\u8BC4\u8BCA\u65AD\u5361\u7247")}</span></button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/tools"),
        class: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow-xs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u4E00\u4EBA\u516C\u53F8\u5168\u6808\u5DE5\u5177\u7BB1</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-right",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "\u4E00\u4EBA\u516C\u53F8\u5168\u6808\u5DE5\u5177\u7BB1"),
              createVNode(_component_UIcon, {
                name: "ph:arrow-right",
                class: "w-4 h-4"
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiReadinessReport.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main, { __name: "HoxiReadinessReport" });

export { __nuxt_component_5 as default };
