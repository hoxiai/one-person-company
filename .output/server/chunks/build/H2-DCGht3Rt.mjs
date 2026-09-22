import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { as as useAppConfig, aC as useComponentUI, bd as useRuntimeConfig, aE as tv, b as _sfc_main$G } from './server.mjs';
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

const theme = {
  "slots": {
    "base": [
      "relative text-2xl text-highlighted font-bold mt-12 mb-6 scroll-mt-[calc(48px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(48px+var(--ui-header-height))] [&>a]:focus-visible:outline-primary [&>a>code]:border-dashed hover:[&>a>code]:border-primary hover:[&>a>code]:text-primary [&>a>code]:text-xl/7 [&>a>code]:font-bold",
      "[&>a>code]:transition-colors"
    ],
    "leading": [
      "absolute -ms-8 top-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated hover:text-primary rounded-md hidden lg:flex text-muted",
      "transition"
    ],
    "leadingIcon": "size-4 shrink-0",
    "link": "group lg:ps-2 lg:-ms-2"
  }
};
const _sfc_main = {
  __name: "ProseH2",
  __ssrInlineRender: true,
  props: {
    id: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("prose.h2", props);
    const { headings } = ((_a = useRuntimeConfig().public) == null ? void 0 : _a.mdc) || {};
    const ui = computed(() => {
      var _a2, _b;
      return tv({ extend: tv(theme), ...((_b = (_a2 = appConfig.ui) == null ? void 0 : _a2.prose) == null ? void 0 : _b.h2) || {} })();
    });
    const generate = computed(() => props.id && typeof (headings == null ? void 0 : headings.anchorLinks) === "object" && headings.anchorLinks.h2);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d;
      _push(`<h2${ssrRenderAttrs(mergeProps({
        id: __props.id,
        class: ui.value.base({ class: [(_a2 = unref(uiProp)) == null ? void 0 : _a2.base, props.class] })
      }, _attrs))}>`);
      if (__props.id && generate.value) {
        _push(`<a${ssrRenderAttr("href", `#${__props.id}`)} class="${ssrRenderClass(ui.value.link({ class: (_b = unref(uiProp)) == null ? void 0 : _b.link }))}"><span class="${ssrRenderClass(ui.value.leading({ class: (_c = unref(uiProp)) == null ? void 0 : _c.leading }))}">`);
        _push(ssrRenderComponent(_sfc_main$G, {
          name: unref(appConfig).ui.icons.hash,
          class: ui.value.leadingIcon({ class: (_d = unref(uiProp)) == null ? void 0 : _d.leadingIcon })
        }, null, _parent));
        _push(`</span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h2>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/prose/H2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
