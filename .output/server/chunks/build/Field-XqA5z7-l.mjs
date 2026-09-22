import { useSlots, computed, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-D0eYVb8V.mjs';
import { r as renderSlot } from './slot-D7Fr0_4_.mjs';
import { as as useAppConfig, aC as useComponentUI, aE as tv, ab as Primitive } from './server.mjs';
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
    "root": "my-5",
    "container": "flex items-center gap-3 font-mono text-sm",
    "name": "font-semibold text-primary",
    "wrapper": "flex-1 flex items-center gap-1.5 text-xs",
    "required": "rounded-sm bg-error/10 text-error px-1.5 py-0.5",
    "type": "rounded-sm bg-elevated text-toned px-1.5 py-0.5",
    "description": "mt-3 text-muted text-sm [&_code]:text-xs/4"
  }
};
const _sfc_main = {
  __name: "ProseField",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    name: { type: String, required: false },
    type: { type: String, required: false },
    description: { type: String, required: false },
    required: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("prose.field", props);
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.field) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [(_a = unref(uiProp)) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: (_a2 = unref(uiProp)) == null ? void 0 : _a2.container }))}"${_scopeId}>`);
            if (__props.name) {
              _push2(`<span class="${ssrRenderClass(ui.value.name({ class: (_b = unref(uiProp)) == null ? void 0 : _b.name }))}"${_scopeId}>${ssrInterpolate(__props.name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.type || __props.required) {
              _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_c = unref(uiProp)) == null ? void 0 : _c.wrapper }))}"${_scopeId}>`);
              if (__props.type) {
                _push2(`<span class="${ssrRenderClass(ui.value.type({ class: (_d = unref(uiProp)) == null ? void 0 : _d.type }))}"${_scopeId}>${ssrInterpolate(__props.type)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.required) {
                _push2(`<span class="${ssrRenderClass(ui.value.required({ class: (_e = unref(uiProp)) == null ? void 0 : _e.required }))}"${_scopeId}> required </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (!!slots.default || __props.description) {
              _push2(`<div class="${ssrRenderClass(ui.value.description({ class: (_f = unref(uiProp)) == null ? void 0 : _f.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ui.value.container({ class: (_g = unref(uiProp)) == null ? void 0 : _g.container })
              }, [
                __props.name ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: ui.value.name({ class: (_h = unref(uiProp)) == null ? void 0 : _h.name })
                }, toDisplayString(__props.name), 3)) : createCommentVNode("", true),
                __props.type || __props.required ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: ui.value.wrapper({ class: (_i = unref(uiProp)) == null ? void 0 : _i.wrapper })
                }, [
                  __props.type ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ui.value.type({ class: (_j = unref(uiProp)) == null ? void 0 : _j.type })
                  }, toDisplayString(__props.type), 3)) : createCommentVNode("", true),
                  __props.required ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: ui.value.required({ class: (_k = unref(uiProp)) == null ? void 0 : _k.required })
                  }, " required ", 2)) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true)
              ], 2),
              !!slots.default || __props.description ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.description({ class: (_l = unref(uiProp)) == null ? void 0 : _l.description })
              }, [
                renderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, () => [
                  createTextVNode(toDisplayString(__props.description), 1)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/prose/Field.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
