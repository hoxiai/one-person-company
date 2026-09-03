import { aL as useLocaleRouter, a as __nuxt_component_3$1, b as _sfc_main$E } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHoxiTools } from './useHoxiTools-DcixUNZe.mjs';
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
import './tools-DBum00wX.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiHomeTools",
  __ssrInlineRender: true,
  setup(__props) {
    const { localePath } = useLocaleRouter();
    const { tools } = useHoxiTools();
    const featuredTools = computed(() => tools.value.slice(0, 6));
    const getBadgeClass = (tone) => {
      if (tone === "positive") {
        return "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40";
      }
      if (tone === "warning") {
        return "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40";
      }
      if (tone === "info") {
        return "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40";
      }
      return "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3"><div><div class="flex items-center gap-2"><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 text-sm"> \u{1F6E0}\uFE0F </span><h2 class="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white"> \u6781\u7B80\u5168\u6808\u5DE5\u5177\u7BB1 </h2><span class="rounded-full bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 text-[11px] font-semibold text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40"> \u5168\u6808\u519B\u706B\u5E93 </span></div><p class="mt-1 text-xs text-slate-500 dark:text-slate-400"> \u7AD9\u957F\u81EA\u7528\u7CBE\u9009\uFF1A\u6DB5\u76D6\u51FA\u6D77\u6536\u6B3E\u3001\u96F6\u8FD0\u7EF4\u90E8\u7F72\u4E0E AI \u63D0\u6548\u3002 </p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/tools"),
        class: "shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1 self-start sm:self-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u67E5\u770B\u5168\u90E8 ${ssrInterpolate(unref(tools).length)} \u6B3E\u795E\u5668</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-right",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "\u67E5\u770B\u5168\u90E8 " + toDisplayString(unref(tools).length) + " \u6B3E\u795E\u5668", 1),
              createVNode(_component_UIcon, {
                name: "ph:arrow-right",
                class: "w-3.5 h-3.5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(featuredTools.value, (tool) => {
        _push(`<div class="group flex flex-col justify-between rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-4 transition-all duration-200 hover:border-blue-400/80 dark:hover:border-blue-500/60 hover:shadow-sm"><div><div class="flex items-start justify-between gap-2 mb-2"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-2xs group-hover:scale-105 transition-transform">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: tool.icon || "ph:wrench-bold",
          class: "w-4 h-4 text-blue-600 dark:text-blue-400"
        }, null, _parent));
        _push(`</span><div><h3 class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">${ssrInterpolate(tool.name)}</h3><span class="text-[10px] text-slate-400 font-mono">${ssrInterpolate(tool.categoryLabel)}</span></div></div>`);
        if (tool.badge) {
          _push(`<span class="${ssrRenderClass([getBadgeClass(tool.badgeTone), "inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-medium"])}">${ssrInterpolate(tool.badge)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="text-xs leading-5 text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">${ssrInterpolate(tool.description)}</p></div><div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs"><span class="text-[11px] text-slate-500 dark:text-slate-400 font-mono">${ssrInterpolate(tool.pricing || "\u514D\u8D39\u8D77\u6B65")}</span><a${ssrRenderAttr("href", tool.affiliateUrl || tool.url)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline"><span>\u5B98\u7F51</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:arrow-up-right",
          class: "w-3 h-3"
        }, null, _parent));
        _push(`</a></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiHomeTools.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "HoxiHomeTools" });

export { __nuxt_component_3 as default };
