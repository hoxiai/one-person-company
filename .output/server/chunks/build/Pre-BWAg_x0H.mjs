import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { ar as useLocale, bk as useClipboard, as as useAppConfig, aC as useComponentUI, aE as tv, l as _sfc_main$B } from './server.mjs';
import _sfc_main$1 from './CodeIcon-CsIij2SR.mjs';
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

const theme = {
  "slots": {
    "root": "relative my-5 group",
    "header": "flex items-center gap-1.5 border border-muted bg-default border-b-0 relative rounded-t-md px-4 py-3",
    "filename": "text-default text-sm/6",
    "icon": "size-4 shrink-0",
    "copy": "absolute top-[11px] right-[11px] lg:opacity-0 lg:group-hover:opacity-100 transition",
    "base": "group font-mono text-sm/6 border border-muted bg-muted rounded-md px-4 py-3 whitespace-pre-wrap break-words overflow-x-auto focus:outline-none **:[.line]:block **:[.line.highlight]:-mx-4 **:[.line.highlight]:px-4 **:[.line.highlight]:bg-accented/50!"
  },
  "variants": {
    "filename": {
      "true": {
        "root": "[&>pre]:rounded-t-none [&>pre]:my-0 my-5"
      }
    }
  }
};
const _sfc_main = {
  __name: "ProsePre",
  __ssrInlineRender: true,
  props: {
    icon: { type: null, required: false },
    code: { type: String, required: false },
    language: { type: String, required: false },
    filename: { type: String, required: false },
    highlights: { type: Array, required: false },
    hideHeader: { type: Boolean, required: false },
    meta: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const { copy, copied } = useClipboard();
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("prose.pre", props);
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.pre) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ui.value.root({ class: [(_a = unref(uiProp)) == null ? void 0 : _a.root], filename: !!__props.filename })
      }, _attrs))}>`);
      if (__props.filename && !__props.hideHeader) {
        _push(`<div class="${ssrRenderClass(ui.value.header({ class: (_b = unref(uiProp)) == null ? void 0 : _b.header }))}">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          icon: __props.icon,
          filename: __props.filename,
          class: ui.value.icon({ class: (_c = unref(uiProp)) == null ? void 0 : _c.icon })
        }, null, _parent));
        _push(`<span class="${ssrRenderClass(ui.value.filename({ class: (_d = unref(uiProp)) == null ? void 0 : _d.filename }))}">${ssrInterpolate(__props.filename)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$B, {
        icon: unref(copied) ? unref(appConfig).ui.icons.copyCheck : unref(appConfig).ui.icons.copy,
        color: "neutral",
        variant: "outline",
        size: "sm",
        "aria-label": unref(t)("prose.pre.copy"),
        class: ui.value.copy({ class: (_e = unref(uiProp)) == null ? void 0 : _e.copy }),
        tabindex: "-1",
        onClick: ($event) => unref(copy)(props.code || "")
      }, null, _parent));
      _push(`<pre${ssrRenderAttrs(mergeProps({
        class: ui.value.base({ class: [(_f = unref(uiProp)) == null ? void 0 : _f.base, props.class] })
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/prose/Pre.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
