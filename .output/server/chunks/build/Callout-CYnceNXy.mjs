import { computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-D0eYVb8V.mjs';
import { as as useAppConfig, aC as useComponentUI, aE as tv, ay as _sfc_main$C, b as _sfc_main$G } from './server.mjs';
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
    "base": [
      "group relative block px-4 py-3 rounded-md text-sm/6 my-5 last:mb-0 [&_code]:text-xs/5 [&_code]:bg-default [&_pre]:bg-default [&>div]:my-2.5 [&_ul]:my-2.5 [&_ol]:my-2.5 [&>*]:last:!mb-0 [&_ul]:ps-4.5 [&_ol]:ps-4.5 [&_li]:my-0",
      "transition-colors"
    ],
    "icon": [
      "size-4 shrink-0 align-sub me-1.5 inline-block",
      "transition-colors"
    ],
    "externalIcon": [
      "size-4 align-top absolute right-2 top-2 pointer-events-none",
      "transition-colors"
    ]
  },
  "variants": {
    "color": {
      "primary": {
        "base": "border border-primary/25 bg-primary/10 text-primary-600 dark:text-primary-300 [&_a]:text-primary [&_a]:hover:border-primary [&_a]:focus-visible:outline-primary [&_code]:text-primary-600 dark:[&_code]:text-primary-300 [&_code]:border-primary/25 [&_a]:hover:[&>code]:border-primary [&_a]:hover:[&>code]:text-primary [&_a]:focus-visible:[&>code]:border-primary [&_a]:focus-visible:[&>code]:text-primary [&>ul]:marker:text-primary/50",
        "icon": "text-primary",
        "externalIcon": "text-primary-600 dark:text-primary-300"
      },
      "secondary": {
        "base": "border border-secondary/25 bg-secondary/10 text-secondary-600 dark:text-secondary-300 [&_a]:text-secondary [&_a]:hover:border-secondary [&_a]:focus-visible:outline-secondary [&_code]:text-secondary-600 dark:[&_code]:text-secondary-300 [&_code]:border-secondary/25 [&_a]:hover:[&>code]:border-secondary [&_a]:hover:[&>code]:text-secondary [&_a]:focus-visible:[&>code]:border-secondary [&_a]:focus-visible:[&>code]:text-secondary [&>ul]:marker:text-secondary/50",
        "icon": "text-secondary",
        "externalIcon": "text-secondary-600 dark:text-secondary-300"
      },
      "success": {
        "base": "border border-success/25 bg-success/10 text-success-600 dark:text-success-300 [&_a]:text-success [&_a]:hover:border-success [&_a]:focus-visible:outline-success [&_code]:text-success-600 dark:[&_code]:text-success-300 [&_code]:border-success/25 [&_a]:hover:[&>code]:border-success [&_a]:hover:[&>code]:text-success [&_a]:focus-visible:[&>code]:border-success [&_a]:focus-visible:[&>code]:text-success [&>ul]:marker:text-success/50",
        "icon": "text-success",
        "externalIcon": "text-success-600 dark:text-success-300"
      },
      "info": {
        "base": "border border-info/25 bg-info/10 text-info-600 dark:text-info-300 [&_a]:text-info [&_a]:hover:border-info [&_a]:focus-visible:outline-info [&_code]:text-info-600 dark:[&_code]:text-info-300 [&_code]:border-info/25 [&_a]:hover:[&>code]:border-info [&_a]:hover:[&>code]:text-info [&_a]:focus-visible:[&>code]:border-info [&_a]:focus-visible:[&>code]:text-info [&>ul]:marker:text-info/50",
        "icon": "text-info",
        "externalIcon": "text-info-600 dark:text-info-300"
      },
      "warning": {
        "base": "border border-warning/25 bg-warning/10 text-warning-600 dark:text-warning-300 [&_a]:text-warning [&_a]:hover:border-warning [&_a]:focus-visible:outline-warning [&_code]:text-warning-600 dark:[&_code]:text-warning-300 [&_code]:border-warning/25 [&_a]:hover:[&>code]:border-warning [&_a]:hover:[&>code]:text-warning [&_a]:focus-visible:[&>code]:border-warning [&_a]:focus-visible:[&>code]:text-warning [&>ul]:marker:text-warning/50",
        "icon": "text-warning",
        "externalIcon": "text-warning-600 dark:text-warning-300"
      },
      "error": {
        "base": "border border-error/25 bg-error/10 text-error-600 dark:text-error-300 [&_a]:text-error [&_a]:hover:border-error [&_a]:focus-visible:outline-error [&_code]:text-error-600 dark:[&_code]:text-error-300 [&_code]:border-error/25 [&_a]:hover:[&>code]:border-error [&_a]:hover:[&>code]:text-error [&_a]:focus-visible:[&>code]:border-error [&_a]:focus-visible:[&>code]:text-error [&>ul]:marker:text-error/50",
        "icon": "text-error",
        "externalIcon": "text-error-600 dark:text-error-300"
      },
      "neutral": {
        "base": "border border-muted bg-muted text-default",
        "icon": "text-highlighted",
        "externalIcon": "text-dimmed"
      }
    },
    "to": {
      "true": "border-dashed"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "to": true,
      "class": {
        "base": "hover:border-primary has-focus-visible:border-primary",
        "externalIcon": "group-hover:text-primary"
      }
    },
    {
      "color": "secondary",
      "to": true,
      "class": {
        "base": "hover:border-secondary has-focus-visible:border-secondary",
        "externalIcon": "group-hover:text-secondary"
      }
    },
    {
      "color": "success",
      "to": true,
      "class": {
        "base": "hover:border-success has-focus-visible:border-success",
        "externalIcon": "group-hover:text-success"
      }
    },
    {
      "color": "info",
      "to": true,
      "class": {
        "base": "hover:border-info has-focus-visible:border-info",
        "externalIcon": "group-hover:text-info"
      }
    },
    {
      "color": "warning",
      "to": true,
      "class": {
        "base": "hover:border-warning has-focus-visible:border-warning",
        "externalIcon": "group-hover:text-warning"
      }
    },
    {
      "color": "error",
      "to": true,
      "class": {
        "base": "hover:border-error has-focus-visible:border-error",
        "externalIcon": "group-hover:text-error"
      }
    },
    {
      "color": "neutral",
      "to": true,
      "class": {
        "base": "hover:border-inverted has-focus-visible:border-inverted",
        "externalIcon": "group-hover:text-highlighted"
      }
    }
  ],
  "defaultVariants": {
    "color": "neutral"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "ProseCallout",
  __ssrInlineRender: true,
  props: {
    to: { type: null, required: false },
    target: { type: [String, Object, null], required: false },
    icon: { type: null, required: false },
    color: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("prose.callout", props);
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.callout) || {} })({
        color: props.color,
        to: !!props.to
      });
    });
    const target = computed(() => props.target || (!!props.to && typeof props.to === "string" && props.to.startsWith("http") ? "_blank" : void 0));
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ui.value.base({ class: [(_a = unref(uiProp)) == null ? void 0 : _a.base, props.class] })
      }, _attrs))}>`);
      if (__props.to) {
        _push(ssrRenderComponent(_sfc_main$C, mergeProps({ to: __props.to, target: target.value, ..._ctx.$attrs }, {
          class: "focus:outline-none",
          raw: ""
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="absolute inset-0" aria-hidden="true"${_scopeId}></span>`);
            } else {
              return [
                createVNode("span", {
                  class: "absolute inset-0",
                  "aria-hidden": "true"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.icon) {
        _push(ssrRenderComponent(_sfc_main$G, {
          name: __props.icon,
          class: ui.value.icon({ class: (_b = unref(uiProp)) == null ? void 0 : _b.icon })
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!!__props.to && target.value === "_blank") {
        _push(ssrRenderComponent(_sfc_main$G, {
          name: unref(appConfig).ui.icons.external,
          class: ui.value.externalIcon({ class: (_c = unref(uiProp)) == null ? void 0 : _c.externalIcon })
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/prose/Callout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
