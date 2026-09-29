import { u as useI18n, I as __nuxt_component_3$3, _ as _sfc_main$I } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { A as AdminTopupRecordsPanel } from './AdminTopupRecordsPanel-XUW9n-m_.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
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
import '@libsql/client';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
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
import './FullScreenModal-Dpul9c_Q.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "topups",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_UIcon = _sfc_main$I;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-[calc(100vh-10rem)] flex-col" }, _attrs))}><div class="mb-6 flex shrink-0 items-end justify-between gap-4"><div><h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.topups.title", "\u5145\u503C\u8BB0\u5F55"))}</h1><p class="mt-1.5 text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(unref(t)("admin.topups.subtitle", "\u67E5\u770B\u652F\u4ED8\u3001\u5230\u8D26\u3001\u9000\u6B3E\u4E0E\u9700\u8981\u4EBA\u5DE5\u6838\u5BF9\u7684\u5145\u503C\u72B6\u6001"))}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/orders",
        class: "text-xs text-primary-600 hover:text-primary-700 flex items-center gap-1 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-left",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(t)("admin.topups.backToOrders", "\u8FD4\u56DE\u8BA2\u5355\u7BA1\u7406"))}</span>`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:arrow-left",
                class: "w-3.5 h-3.5"
              }),
              createVNode("span", null, toDisplayString(unref(t)("admin.topups.backToOrders", "\u8FD4\u56DE\u8BA2\u5355\u7BA1\u7406")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(AdminTopupRecordsPanel, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/topups.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
