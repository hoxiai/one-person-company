import { aM as useLocaleRouter, f as useI18n, a as __nuxt_component_3$1 } from './server.mjs';
import __nuxt_component_1 from './HoxiMeta-BgAl7LvM.mjs';
import __nuxt_component_9 from './HoxiHairlineLink-CkLNDE1a.mjs';
import { defineComponent, computed, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiPostItem",
  __ssrInlineRender: true,
  props: {
    post: {},
    lead: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { localePath } = useLocaleRouter();
    const { t } = useI18n();
    const toPath = computed(() => `/blog/${props.post.slug}`);
    const to = computed(() => localePath(toPath.value));
    const metaItems = computed(() => {
      const items = [];
      if (props.post.createdAt) items.push(String(props.post.createdAt).slice(0, 10));
      if (typeof props.post.views === "number") items.push(t("hoxi.posts.views", { count: props.post.views }));
      return items;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_HoxiMeta = __nuxt_component_1;
      const _component_HoxiHairlineLink = __nuxt_component_9;
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["group rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 transition-all hover:border-slate-200 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900", __props.lead ? "p-5 md:p-8" : "p-4 md:p-6"]
      }, _attrs))}><div class="${ssrRenderClass(__props.lead ? "md:flex md:items-start md:gap-8" : "md:flex md:items-start md:gap-6")}">`);
      if (__props.post.imageUrl) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: to.value,
          class: ["block overflow-hidden bg-slate-100 dark:bg-slate-800 md:hidden", __props.lead ? "float-right ml-4 mb-2 w-28 rounded-md aspect-[3/4]" : "float-right ml-3 mb-1.5 w-20 rounded aspect-[4/5]"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", __props.post.imageUrl)}${ssrRenderAttr("alt", __props.post.title)} loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: __props.post.imageUrl,
                  alt: __props.post.title,
                  loading: "lazy",
                  class: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.post.imageUrl) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: to.value,
          class: ["hidden overflow-hidden bg-slate-100 dark:bg-slate-800 md:block md:aspect-square", __props.lead ? "md:w-[28%] md:min-w-[10rem] md:max-w-[14rem] rounded-lg" : "md:w-[18%] md:min-w-[6rem] md:max-w-[7rem] rounded"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", __props.post.imageUrl)}${ssrRenderAttr("alt", __props.post.title)} loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: __props.post.imageUrl,
                  alt: __props.post.title,
                  loading: "lazy",
                  class: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="min-w-0 flex-1">`);
      _push(ssrRenderComponent(_component_HoxiMeta, { items: metaItems.value }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: to.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="${ssrRenderClass([__props.lead ? "mt-2 text-[1.125rem] text-slate-900 dark:text-white md:mt-3 md:text-2xl md:leading-tight" : "mt-1 text-[16px] md:mt-2 md:text-lg", "font-semibold leading-snug text-slate-800 dark:text-slate-100 transition-colors group-hover:text-blue-500 dark:group-hover:text-blue-400"])}"${_scopeId}>${ssrInterpolate(__props.post.title)}</h2>`);
          } else {
            return [
              createVNode("h2", {
                class: ["font-semibold leading-snug text-slate-800 dark:text-slate-100 transition-colors group-hover:text-blue-500 dark:group-hover:text-blue-400", __props.lead ? "mt-2 text-[1.125rem] text-slate-900 dark:text-white md:mt-3 md:text-2xl md:leading-tight" : "mt-1 text-[16px] md:mt-2 md:text-lg"]
              }, toDisplayString(__props.post.title), 3)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.post.description) {
        _push(`<p class="${ssrRenderClass(__props.lead ? "mt-2 text-[14px] leading-6 text-slate-600 dark:text-slate-400 line-clamp-2 md:mt-3 md:text-[15px] md:leading-7 md:line-clamp-3" : "mt-1.5 text-xs md:text-sm leading-6 text-slate-500 dark:text-slate-400 line-clamp-2 md:line-clamp-2")}">${ssrInterpolate(__props.post.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-3">`);
      _push(ssrRenderComponent(_component_HoxiHairlineLink, { to: toPath.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hoxi.common.readMore"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hoxi.common.readMore")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiPostItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main, { __name: "HoxiPostItem" });

export { __nuxt_component_4 as default };
