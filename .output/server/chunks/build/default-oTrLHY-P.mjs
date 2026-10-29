import { defineComponent, computed, defineAsyncComponent, mergeProps, createVNode, resolveDynamicComponent, unref, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderVNode } from 'vue/server-renderer';
import { H as useRoute, bb as useActiveTheme, b9 as usePageFailureLog, ba as useRequestEvent, S as PageRequestError, M as setResponseStatus, bI as themeLayoutLoaders, bA as createError } from './server.mjs';
import { r as resolveThemePageFile, g as getThemePageMeta } from './themePageMeta-ZpMYRC3E.mjs';
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
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
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
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const activeTheme = useActiveTheme({ strict: true });
    const pathSegments = computed(() => {
      const slug = route.params.slug;
      if (Array.isArray(slug)) return slug;
      if (typeof slug === "string" && slug) return [slug];
      return (route.path || "").replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
    });
    const isBareLayout = computed(() => {
      var _a, _b;
      if (((_a = route.meta) == null ? void 0 : _a.layout) === false) return true;
      const file = resolveThemePageFile(pathSegments.value, activeTheme.value);
      return ((_b = getThemePageMeta(file, activeTheme.value)) == null ? void 0 : _b.layout) === false;
    });
    const logFailure = usePageFailureLog();
    const requestEvent = useRequestEvent();
    const activeLayout = computed(() => {
      return defineAsyncComponent({
        errorComponent: PageRequestError,
        loader: async () => {
          if (!activeTheme.value) return import('./default-VhXLXZvb.mjs');
          const loadThemeLayout = themeLayoutLoaders[activeTheme.value];
          if (!loadThemeLayout) {
            throw createError({ statusCode: 503, statusMessage: "Theme layout is unavailable" });
          }
          return loadThemeLayout();
        },
        onError(error, _retry, fail) {
          logFailure("layout", 503, error);
          if (requestEvent) setResponseStatus(requestEvent, 503);
          fail();
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (isBareLayout.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-0 bg-transparent" }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(activeLayout.value), mergeProps({ key: unref(activeTheme) }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }), _parent);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-oTrLHY-P.mjs.map
