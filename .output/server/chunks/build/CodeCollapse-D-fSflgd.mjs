import { useModel, computed, mergeProps, unref, mergeModels, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { ar as useLocale, as as useAppConfig, aC as useComponentUI, aE as tv, k as _sfc_main$B } from './server.mjs';
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

const theme = {
  "slots": {
    "root": "relative [&_pre]:h-[200px]",
    "footer": "h-16 absolute inset-x-px bottom-px rounded-b-md flex items-center justify-center",
    "trigger": "group",
    "triggerIcon": "group-data-[state=open]:rotate-180"
  },
  "variants": {
    "open": {
      "true": {
        "root": "[&_pre]:h-auto [&_pre]:min-h-[200px] [&_pre]:max-h-[80vh] [&_pre]:pb-12"
      },
      "false": {
        "root": "[&_pre]:overflow-hidden",
        "footer": "bg-gradient-to-t from-muted"
      }
    }
  }
};
const _sfc_main = {
  __name: "ProseCodeCollapse",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    icon: { type: null, required: false },
    name: { type: String, required: false },
    openText: { type: String, required: false },
    closeText: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    const props = __props;
    const open = useModel(__props, "open", { type: Boolean, ...{ default: false } });
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("prose.codeCollapse", props);
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.codeCollapse) || {} })({
        open: open.value
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ui.value.root({ class: [(_a = unref(uiProp)) == null ? void 0 : _a.root, props.class] })
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div class="${ssrRenderClass(ui.value.footer({ class: (_b = unref(uiProp)) == null ? void 0 : _b.footer }))}">`);
      _push(ssrRenderComponent(_sfc_main$B, {
        icon: __props.icon || unref(appConfig).ui.icons.chevronDown,
        color: "neutral",
        variant: "outline",
        "data-state": open.value ? "open" : "closed",
        label: `${open.value ? props.closeText || unref(t)("prose.codeCollapse.closeText") : props.openText || unref(t)("prose.codeCollapse.openText")} ${props.name || unref(t)("prose.codeCollapse.name")}`,
        class: ui.value.trigger({ class: (_c = unref(uiProp)) == null ? void 0 : _c.trigger }),
        ui: { leadingIcon: ui.value.triggerIcon({ class: (_d = unref(uiProp)) == null ? void 0 : _d.triggerIcon }) },
        onClick: ($event) => open.value = !open.value
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/prose/CodeCollapse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
