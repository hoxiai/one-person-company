import { aM as useLocaleRouter, a as __nuxt_component_3$1 } from './server.mjs';
import __nuxt_component_1 from './HoxiVendorDot-BLwK_ZsG.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as formatPrice, f as formatScore } from './useHoxiModels-BUR4ZXwz.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
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
  __name: "HoxiModelMini",
  __ssrInlineRender: true,
  props: {
    model: {}
  },
  setup(__props) {
    const { localePath } = useLocaleRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_HoxiVendorDot = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: unref(localePath)(`/models/${__props.model.slug}`),
        class: "group block border-t border-slate-100 pt-4 dark:border-slate-800"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<span class="flex items-center gap-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiVendorDot, {
              vendor: __props.model.vendorInfo
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm font-medium leading-6 text-slate-800 transition-colors group-hover:text-blue-500 dark:text-slate-200"${_scopeId}>${ssrInterpolate(__props.model.name)}</span>`);
            if (__props.model.isFree) {
              _push2(`<span class="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium leading-none text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.model.tags.free"))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</span><span class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(((_a = __props.model.vendorInfo) == null ? void 0 : _a.nameZh) || __props.model.vendor)}</span><span class="text-slate-300" aria-hidden="true"${_scopeId}>\xB7</span><span class="tabular-nums"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.model.blendedShort"))} \xA5${ssrInterpolate(unref(formatPrice)(__props.model.blendedPrice))}</span>`);
            if (__props.model.scores.overall !== void 0) {
              _push2(`<!--[--><span class="text-slate-300" aria-hidden="true"${_scopeId}>\xB7</span><span class="tabular-nums"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.model.scoreShort"))} ${ssrInterpolate(unref(formatScore)(__props.model.scores.overall))}</span><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "flex items-center gap-1.5" }, [
                createVNode(_component_HoxiVendorDot, {
                  vendor: __props.model.vendorInfo
                }, null, 8, ["vendor"]),
                createVNode("span", { class: "text-sm font-medium leading-6 text-slate-800 transition-colors group-hover:text-blue-500 dark:text-slate-200" }, toDisplayString(__props.model.name), 1),
                __props.model.isFree ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium leading-none text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"
                }, toDisplayString(_ctx.$t("hoxi.model.tags.free")), 1)) : createCommentVNode("", true)
              ]),
              createVNode("span", { class: "mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400" }, [
                createVNode("span", null, toDisplayString(((_b = __props.model.vendorInfo) == null ? void 0 : _b.nameZh) || __props.model.vendor), 1),
                createVNode("span", {
                  class: "text-slate-300",
                  "aria-hidden": "true"
                }, "\xB7"),
                createVNode("span", { class: "tabular-nums" }, toDisplayString(_ctx.$t("hoxi.model.blendedShort")) + " \xA5" + toDisplayString(unref(formatPrice)(__props.model.blendedPrice)), 1),
                __props.model.scores.overall !== void 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("span", {
                    class: "text-slate-300",
                    "aria-hidden": "true"
                  }, "\xB7"),
                  createVNode("span", { class: "tabular-nums" }, toDisplayString(_ctx.$t("hoxi.model.scoreShort")) + " " + toDisplayString(unref(formatScore)(__props.model.scores.overall)), 1)
                ], 64)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiModelMini.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main, { __name: "HoxiModelMini" });

export { __nuxt_component_8 as default };
