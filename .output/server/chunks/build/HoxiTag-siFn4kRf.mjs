import { a as __nuxt_component_3$1 } from './server.mjs';
import { defineComponent, computed, mergeProps, withCtx, renderSlot, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
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
  __name: "HoxiTag",
  __ssrInlineRender: true,
  props: {
    to: {},
    label: {},
    tone: { default: "neutral" }
  },
  setup(__props) {
    const props = __props;
    const toneClass = computed(() => {
      if (props.tone === "positive") {
        return props.to ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 hover:text-emerald-800 dark:hover:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/50" : "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50";
      }
      if (props.tone === "info") {
        return props.to ? "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/60 hover:text-blue-800 dark:hover:text-blue-300 border border-blue-200/50 dark:border-blue-800/50" : "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50";
      }
      if (props.tone === "warning") {
        return props.to ? "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/60 hover:text-amber-800 dark:hover:text-amber-300 border border-amber-200/50 dark:border-amber-800/50" : "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 border border-amber-200/50 dark:border-amber-800/50";
      }
      return props.to ? "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-750 border border-slate-200/60 dark:border-slate-700" : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$1;
      if (__props.to) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: __props.to,
          class: ["inline-flex items-center px-2.5 py-0.5 rounded-full text-xs transition-colors", toneClass.value]
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                _push2(`${ssrInterpolate(__props.label)}`);
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(__props.label), 1)
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: ["inline-flex items-center px-2.5 py-0.5 rounded-full text-xs", toneClass.value]
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.label)}`);
        }, _push, _parent);
        _push(`</span>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiTag.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main, { __name: "HoxiTag" });

export { __nuxt_component_5 as default };
