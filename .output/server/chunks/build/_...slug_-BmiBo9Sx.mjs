import { defineComponent, withAsyncContext, computed, unref, createVNode, resolveDynamicComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { C as useRoute, t as useSettings, F as useExtensions, H as stripLocalePrefix, G as setResponseStatus, u as useHead } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { fetchSettings } = useSettings();
    [__temp, __restore] = withAsyncContext(() => fetchSettings()), await __temp, __restore();
    const { findUserPage } = useExtensions();
    const page = computed(() => findUserPage(stripLocalePrefix(route.path)));
    if (!page.value) setResponseStatus(404);
    useHead(() => {
      var _a;
      return { title: ((_a = page.value) == null ? void 0 : _a.title) || "Extension" };
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(page)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(page).component), _attrs, null), _parent);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen items-center justify-center bg-[#050505] text-gray-400" }, _attrs))}>${ssrInterpolate(_ctx.$t("extensions.notFound"))}</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/plugins/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
