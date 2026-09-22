import { _ as _export_sfc, b as _sfc_main$G } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiHeroCard",
  __ssrInlineRender: true,
  setup(__props) {
    const cardRef = ref(null);
    const mouseX = ref(0);
    const mouseY = ref(0);
    const isHovered = ref(false);
    const isPulsing = ref(false);
    const cardTransformStyle = computed(() => {
      if (!isHovered.value) {
        return "transform: perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0); transition: transform 0.3s ease;";
      }
      const rotateY = (mouseX.value * 12).toFixed(2);
      const rotateX = (-mouseY.value * 12).toFixed(2);
      return `transform: perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px);`;
    });
    const spotlightStyle = computed(() => {
      if (!isHovered.value) return "opacity: 0;";
      const x = ((mouseX.value + 0.5) * 100).toFixed(1);
      const y = ((mouseY.value + 0.5) * 100).toFixed(1);
      return `background: radial-gradient(300px circle at ${x}% ${y}%, rgba(56, 189, 248, 0.18), transparent 80%);`;
    });
    const burstParticles = ref([]);
    const soloLogs = [
      { text: "Claude 3.7 \u5168\u6808\u91CD\u6784\u5B8C\u6210\uFF0C\u6D4B\u8BD5\u901A\u8FC7", tag: "09:15" },
      { text: "\u9759\u6001\u7AD9\u70B9\u5168\u7F51\u8FB9\u7F18\u7F13\u5B58\u547D\u4E2D\u7387 99.4%", tag: "11:20" },
      { text: "\u4E13\u7EBF\u4E2D\u8F6C\u6545\u969C\u81EA\u52A8\u7194\u65AD\uFF0C0 \u6389\u5355\u91CD\u8BD5\u6210\u529F", tag: "14:05" },
      { text: "\u6536\u5230\u6D77\u5916\u9996\u7B14 Stripe \u8BA2\u9605 $29.00", tag: "16:40" },
      { text: "\u4ECA\u65E5\u5F00\u4F1A\u65F6\u95F4 0 \u5206\u949F\uFF0C\u534F\u4F5C\u5185\u8017 0%", tag: "18:10" },
      { text: "\u4E00\u4E2A\u4EBA\u6210\u519B\uFF0C\u5FC3\u751F\u6B22\u559C", tag: "21:00" }
    ];
    const currentLogIndex = ref(0);
    const currentLog = computed(() => soloLogs[currentLogIndex.value]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "cardRef",
        ref: cardRef,
        class: "relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white/95 via-slate-50/50 to-white/95 p-5 shadow-lg backdrop-blur-md transition-all duration-300 dark:border-slate-800 dark:from-slate-900/95 dark:via-slate-950/70 dark:to-slate-900/95 select-none group",
        style: cardTransformStyle.value
      }, _attrs))} data-v-95678118><div class="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-60 dark:opacity-40" style="${ssrRenderStyle(spotlightStyle.value)}" data-v-95678118></div><div class="relative z-10 flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800/80" data-v-95678118><div class="flex items-center gap-2" data-v-95678118><span class="relative flex h-2.5 w-2.5" data-v-95678118><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" data-v-95678118></span><span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" data-v-95678118></span></span><span class="text-xs font-bold tracking-tight text-slate-800 dark:text-slate-200" data-v-95678118> \u4E00\u4EBA\u6210\u519B \xB7 \u81EA\u52A8\u5316\u8FD0\u8F6C\u5DE5\u574A </span></div><button type="button" class="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-700 transition-all hover:bg-amber-500/20 dark:bg-amber-500/15 dark:text-amber-300 cursor-pointer" title="\u70B9\u51FB\u89E6\u53D1\u8C03\u5EA6\u8109\u51B2" data-v-95678118>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:sparkle-bold",
        class: "h-3 w-3 text-amber-500"
      }, null, _parent));
      _push(`<span data-v-95678118>\u70B9\u6211\u52A0\u901F</span></button></div><div class="relative z-10 my-4 flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-3 shadow-inner" data-v-95678118><div class="pointer-events-none absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] opacity-20 [background-size:16px_16px]" data-v-95678118></div><div class="${ssrRenderClass([{ "scale-105 border-blue-400/50 transition-transform duration-300": isPulsing.value }, "pointer-events-none absolute h-40 w-40 rounded-full border border-dashed border-blue-500/25 animate-spin-slow"])}" data-v-95678118></div><div class="pointer-events-none absolute h-28 w-28 rounded-full border border-dashed border-amber-500/30 animate-spin-reverse" data-v-95678118></div><svg class="pointer-events-none absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" data-v-95678118><defs data-v-95678118><linearGradient id="beamBlue" x1="0%" y1="0%" x2="100%" y2="100%" data-v-95678118><stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8" data-v-95678118></stop><stop offset="100%" stop-color="#38bdf8" stop-opacity="0.1" data-v-95678118></stop></linearGradient><linearGradient id="beamAmber" x1="100%" y1="0%" x2="0%" y2="100%" data-v-95678118><stop offset="0%" stop-color="#f59e0b" stop-opacity="0.8" data-v-95678118></stop><stop offset="100%" stop-color="#f59e0b" stop-opacity="0.1" data-v-95678118></stop></linearGradient></defs><line x1="20%" y1="24%" x2="50%" y2="50%" stroke="url(#beamBlue)" stroke-width="1.5" stroke-dasharray="3 3" data-v-95678118></line><line x1="80%" y1="24%" x2="50%" y2="50%" stroke="url(#beamAmber)" stroke-width="1.5" stroke-dasharray="3 3" data-v-95678118></line><line x1="20%" y1="76%" x2="50%" y2="50%" stroke="url(#beamAmber)" stroke-width="1.5" stroke-dasharray="3 3" data-v-95678118></line><line x1="80%" y1="76%" x2="50%" y2="50%" stroke="url(#beamBlue)" stroke-width="1.5" stroke-dasharray="3 3" data-v-95678118></line></svg><div class="absolute left-3 top-3 flex items-center gap-1.5 rounded-lg border border-blue-500/40 bg-slate-900/90 px-2 py-1 text-[10px] font-medium text-blue-300 shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-blue-400 cursor-pointer" data-v-95678118><span class="flex h-4 w-4 items-center justify-center rounded-md bg-blue-500/20 text-blue-400" data-v-95678118> \u{1F9E0} </span><span class="font-mono" data-v-95678118>AI \u8BA4\u77E5</span></div><div class="absolute right-3 top-3 flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-slate-900/90 px-2 py-1 text-[10px] font-medium text-emerald-300 shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-emerald-400 cursor-pointer" data-v-95678118><span class="flex h-4 w-4 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-400" data-v-95678118> \u26A1 </span><span class="font-mono" data-v-95678118>\u5168\u6808\u4EA4\u4ED8</span></div><div class="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-slate-900/90 px-2 py-1 text-[10px] font-medium text-amber-300 shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-amber-400 cursor-pointer" data-v-95678118><span class="flex h-4 w-4 items-center justify-center rounded-md bg-amber-500/20 text-amber-400" data-v-95678118> \u{1F50C} </span><span class="font-mono" data-v-95678118>\u7B97\u529B\u76F4\u8FDE</span></div><div class="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg border border-purple-500/40 bg-slate-900/90 px-2 py-1 text-[10px] font-medium text-purple-300 shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-purple-400 cursor-pointer" data-v-95678118><span class="flex h-4 w-4 items-center justify-center rounded-md bg-purple-500/20 text-purple-400" data-v-95678118> \u{1F4B0} </span><span class="font-mono" data-v-95678118>\u5168\u7403\u6536\u6B3E</span></div><div class="${ssrRenderClass([{ "scale-110 shadow-[0_0_36px_rgba(245,158,11,0.8)]": isPulsing.value }, "relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 text-white shadow-[0_0_24px_rgba(245,158,11,0.45)] transition-transform duration-300 cursor-pointer active:scale-95 group/core"])}" data-v-95678118><span class="absolute -inset-1 rounded-2xl bg-amber-400/40 animate-ping opacity-50 pointer-events-none" data-v-95678118></span><div class="text-center" data-v-95678118><div class="text-[9px] font-black uppercase tracking-widest text-amber-950/80 font-mono" data-v-95678118> SOLO </div><div class="text-xs font-black tracking-tight leading-none text-white drop-shadow-sm" data-v-95678118> 1 \u4EBA </div></div><div class="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900/90 px-2 py-0.5 text-[9px] font-mono text-amber-300 opacity-0 transition-opacity group-hover/core:opacity-100 border border-amber-500/30" data-v-95678118> \u5FC3\u667A\u4E0D\u5185\u8017 </div></div><!--[-->`);
      ssrRenderList(burstParticles.value, (p) => {
        _push(`<div class="pointer-events-none absolute font-bold text-sm transition-all duration-700 ease-out" style="${ssrRenderStyle({
          left: `${p.x}%`,
          top: `${p.y}%`,
          transform: `translate(-50%, -50%) translate(${p.vx}px, ${p.vy}px) scale(${p.scale})`,
          opacity: p.opacity
        })}" data-v-95678118>${ssrInterpolate(p.emoji)}</div>`);
      });
      _push(`<!--]--></div><div class="relative z-10 flex items-center gap-2 rounded-xl bg-slate-50/90 dark:bg-slate-800/50 px-3 py-2 border border-slate-100 dark:border-slate-800 text-[11px] overflow-hidden" data-v-95678118><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono font-bold text-[10px]" data-v-95678118> LOG </span><div class="min-w-0 flex-1 overflow-hidden" data-v-95678118><p class="truncate text-slate-600 dark:text-slate-300 font-mono leading-tight" data-v-95678118>${ssrInterpolate(currentLog.value.text)}</p></div><span class="shrink-0 font-mono text-[9px] text-slate-400 dark:text-slate-500" data-v-95678118>${ssrInterpolate(currentLog.value.tag)}</span></div><div class="relative z-10 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-3 gap-2 text-center" data-v-95678118><div class="rounded-lg bg-slate-50/80 dark:bg-slate-800/30 py-1.5 px-1" data-v-95678118><div class="text-xs font-bold text-slate-900 dark:text-white font-mono" data-v-95678118>1 \u4EBA\u6210\u519B</div><div class="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5" data-v-95678118>\u5168\u804C\u56E2\u961F</div></div><div class="rounded-lg bg-slate-50/80 dark:bg-slate-800/30 py-1.5 px-1" data-v-95678118><div class="text-xs font-bold text-slate-900 dark:text-white font-mono" data-v-95678118>0 min</div><div class="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5" data-v-95678118>\u6C9F\u901A\u635F\u8017</div></div><div class="rounded-lg bg-slate-50/80 dark:bg-slate-800/30 py-1.5 px-1" data-v-95678118><div class="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono" data-v-95678118>10x \u6760\u6746</div><div class="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5" data-v-95678118>AI \u653E\u5927\u6548\u5E94</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiHeroCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-95678118"]]), { __name: "HoxiHeroCard" });

export { __nuxt_component_1 as default };
