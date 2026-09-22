import { C as useRoute, i as useAdminExtensions, e as useI18n, D as themeAdminLocaleEnModules, E as themeAdminLocaleZhModules, u as useHead, b as _sfc_main$G, k as _sfc_main$B } from './server.mjs';
import { defineComponent, computed, watchEffect, unref, createVNode, resolveDynamicComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  setup(__props) {
    const route = useRoute();
    const { activeTheme, findExtensionPage, resolveExtensionComponent } = useAdminExtensions();
    const { mergeLocaleMessage } = useI18n();
    const currentPath = computed(() => route.path);
    const currentPage = computed(() => findExtensionPage(currentPath.value));
    const activeComponent = computed(() => resolveExtensionComponent(currentPath.value));
    const title = computed(() => {
      var _a;
      return ((_a = currentPage.value) == null ? void 0 : _a.title) || "Theme Extension";
    });
    const description = computed(
      () => {
        var _a;
        return ((_a = currentPage.value) == null ? void 0 : _a.description) || `No extension page is registered for ${activeTheme.value}.`;
      }
    );
    watchEffect(() => {
      const theme = activeTheme.value;
      if (!theme || !mergeLocaleMessage) {
        return;
      }
      const en = themeAdminLocaleEnModules[`../themes/${theme}/locales/admin/en.ts`];
      const zh = themeAdminLocaleZhModules[`../themes/${theme}/locales/admin/zh.ts`];
      if (en) {
        mergeLocaleMessage("en", {
          [theme]: {
            admin: en
          }
        });
      }
      if (zh) {
        mergeLocaleMessage("zh", {
          [theme]: {
            admin: zh
          }
        });
      }
    });
    useHead(() => ({
      title: `${title.value} - Admin`
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_UButton = _sfc_main$B;
      if (unref(activeComponent)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(activeComponent)), _attrs, null), _parent);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh-10rem)] flex items-center justify-center" }, _attrs))}><div class="max-w-xl w-full rounded-2xl border border-gray-200 bg-white p-8 text-center dark:border-gray-800/50 dark:bg-[#121214]">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:puzzle-piece",
          class: "w-12 h-12 mx-auto mb-4 text-purple-500 dark:text-purple-400"
        }, null, _parent));
        _push(`<h1 class="text-2xl font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(title))}</h1><p class="mt-3 text-gray-500 dark:text-gray-400">${ssrInterpolate(unref(description))}</p><div class="flex items-center justify-center gap-3 mt-6">`);
        _push(ssrRenderComponent(_component_UButton, {
          to: "/admin/settings/themes",
          color: "neutral",
          variant: "outline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Theme Center`);
            } else {
              return [
                createTextVNode("Theme Center")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          to: "/admin/dashboard",
          color: "primary",
          class: "bg-purple-600 hover:bg-purple-500 text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Back to Dashboard`);
            } else {
              return [
                createTextVNode("Back to Dashboard")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/extensions/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
