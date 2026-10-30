import { _ as _sfc_main$Y } from './server.mjs';
import { defineComponent, ref, watch, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import 'node:fs/promises';
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
  __name: "HoxiToolBrandMark",
  __ssrInlineRender: true,
  props: {
    name: {},
    label: { default: void 0 },
    logoUrl: { default: void 0 },
    logoDark: { type: Boolean, default: false },
    icon: { default: void 0 },
    size: { default: 36 }
  },
  setup(__props) {
    const props = __props;
    const imgFailed = ref(false);
    watch(() => props.logoUrl, () => {
      imgFailed.value = false;
    });
    const showImage = computed(() => Boolean(props.logoUrl) && !imgFailed.value);
    const initials = computed(() => {
      const source = (props.label || props.name || "").trim();
      const words = source.split(/[^a-zA-Z0-9\u4E00-\u9FA5]+/).filter(Boolean);
      if (words.length >= 2) {
        return `${words[0].charAt(0)}${words[1].charAt(0)}`.toUpperCase();
      }
      return (words[0] || source).slice(0, 2).toUpperCase();
    });
    const boxStyle = computed(() => {
      const px = props.size || 36;
      const radius = Math.max(6, Math.round(px * 0.24));
      const fontSize = Math.max(9, Math.round(px * 0.36));
      return {
        width: `${px}px`,
        height: `${px}px`,
        borderRadius: `${radius}px`,
        fontSize: `${fontSize}px`
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$Y;
      if (showImage.value) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: ["inline-flex shrink-0 items-center justify-center overflow-hidden border transition-colors", __props.logoDark ? "bg-slate-900 border-slate-800 dark:bg-slate-950 dark:border-slate-800" : "bg-white border-slate-200/80 dark:bg-slate-800 dark:border-slate-700/80"],
          style: boxStyle.value,
          "aria-hidden": "true"
        }, _attrs))}><img${ssrRenderAttr("src", __props.logoUrl)}${ssrRenderAttr("alt", `${__props.label || __props.name} logo`)} loading="lazy" class="h-[72%] w-[72%] object-contain"></span>`);
      } else if (__props.icon) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: "inline-flex shrink-0 items-center justify-center border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 transition-colors",
          style: boxStyle.value,
          "aria-hidden": "true"
        }, _attrs))}>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: __props.icon,
          class: "w-[52%] h-[52%]"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: "inline-flex shrink-0 items-center justify-center border border-slate-200/80 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 font-mono font-semibold text-slate-700 dark:text-slate-200 select-none",
          style: boxStyle.value,
          "aria-hidden": "true"
        }, _attrs))}>${ssrInterpolate(initials.value)}</span>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiToolBrandMark.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "HoxiToolBrandMark" });

export { __nuxt_component_1 as default };
//# sourceMappingURL=HoxiToolBrandMark-C1f66sTa.mjs.map
