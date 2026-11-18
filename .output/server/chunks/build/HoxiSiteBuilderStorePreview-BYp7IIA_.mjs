import { j as _sfc_main$10 } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';
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
  __name: "HoxiSiteBuilderStorePreview",
  __ssrInlineRender: true,
  props: {
    blueprint: {},
    initialTab: {},
    locale: {}
  },
  setup(__props) {
    const props = __props;
    const activeTab = ref(props.initialTab || "storefront");
    const selectedProduct = ref(null);
    const isEn = computed(() => String(props.locale || "").toLowerCase().startsWith("en"));
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const _component_UIcon = _sfc_main$10;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0d12] overflow-hidden shadow-xs" }, _attrs))}><div class="px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#111319] flex flex-wrap items-center justify-between gap-2"><div class="flex items-center gap-2 min-w-0"><div class="flex items-center gap-1.5 shrink-0"><span class="w-2.5 h-2.5 rounded-full bg-rose-400/80"></span><span class="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span><span class="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span></div><div class="ml-2 px-3 py-1 rounded-md bg-white dark:bg-[#0b0d12] border border-slate-200/80 dark:border-slate-800 font-mono text-[11px] text-slate-600 dark:text-slate-300 truncate max-w-[260px] sm:max-w-[360px]"> https://${ssrInterpolate(__props.blueprint.siteSlug || "solo-site")}.pages.dev${ssrInterpolate(activeTab.value === "admin" ? "/admin/dashboard" : "")}</div></div><div class="inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0d12] p-0.5 text-xs"><button type="button" class="${ssrRenderClass([activeTab.value === "storefront" ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white", "px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer"])}">${ssrInterpolate(isEn.value ? "Storefront" : "\u72EC\u7ACB\u7AD9\u524D\u53F0")}</button><button type="button" class="${ssrRenderClass([activeTab.value === "admin" ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white", "px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer"])}">${ssrInterpolate(isEn.value ? "/admin Backend" : "/admin \u7BA1\u7406\u540E\u53F0")}</button></div></div>`);
      if (activeTab.value === "storefront") {
        _push(`<div class="divide-y divide-slate-100 dark:divide-slate-800/80"><div class="px-6 py-4 flex items-center justify-between"><div class="flex items-center gap-2.5"><span class="w-7 h-7 rounded-lg flex items-center justify-center text-white font-mono font-bold text-xs shadow-2xs" style="${ssrRenderStyle({ backgroundColor: __props.blueprint.primaryColor || "#2563eb" })}">${ssrInterpolate((__props.blueprint.siteName || "S").slice(0, 1).toUpperCase())}</span><span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight">${ssrInterpolate(__props.blueprint.siteName)}</span><span class="hidden sm:inline-block px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px] text-slate-500 dark:text-slate-400"> theme: ${ssrInterpolate(__props.blueprint.themePreset)}</span></div><div class="flex items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400"><a href="#preview-products" class="hover:text-blue-600 dark:hover:text-blue-400">${ssrInterpolate(isEn.value ? "Products" : "\u6570\u5B57\u5546\u54C1")}</a><a href="#preview-posts" class="hover:text-blue-600 dark:hover:text-blue-400">${ssrInterpolate(isEn.value ? "Playbook" : "\u5B9E\u6218\u4E13\u680F")}</a><span class="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-mono text-[11px]">${ssrInterpolate(isEn.value ? "24/7 Auto Delivery" : "7\xD724 \u81EA\u52A8\u53D1\u8D27")}</span></div></div><div class="px-6 py-8 sm:py-10 bg-gradient-to-b from-slate-50/70 to-white dark:from-[#0f131c] dark:to-[#0b0d12]"><div class="max-w-2xl space-y-4"><div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60"><span>\u2726</span><span>${ssrInterpolate(((_a = __props.blueprint.hero) == null ? void 0 : _a.badge) || "SOLO COMPANY STOREFRONT")}</span></div><h2 class="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">${ssrInterpolate(((_b = __props.blueprint.hero) == null ? void 0 : _b.headline) || __props.blueprint.siteName)}</h2><p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${ssrInterpolate(((_c = __props.blueprint.hero) == null ? void 0 : _c.subheadline) || __props.blueprint.tagline)}</p>`);
        if ((_e = (_d = __props.blueprint.hero) == null ? void 0 : _d.highlights) == null ? void 0 : _e.length) {
          _push(`<div class="pt-1 flex flex-wrap gap-2"><!--[-->`);
          ssrRenderList(__props.blueprint.hero.highlights, (item, idx) => {
            _push(`<span class="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-[#111319] border border-slate-200/80 dark:border-slate-800 px-2.5 py-1 rounded-lg">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:check-circle-fill",
              class: "w-3.5 h-3.5 text-emerald-500 shrink-0"
            }, null, _parent));
            _push(`<span>${ssrInterpolate(item)}</span></span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div id="preview-products" class="p-6 space-y-4"><div class="flex items-center justify-between"><h3 class="text-sm font-bold uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400">${ssrInterpolate(isEn.value ? "Instant Fulfillment Products" : "\u6838\u5FC3\u5546\u54C1\u4E0E\u81EA\u52A8\u5C65\u7EA6\u65B9\u6848")} (${ssrInterpolate(((_f = __props.blueprint.products) == null ? void 0 : _f.length) || 0)}) </h3><span class="text-[11px] font-mono text-slate-400">${ssrInterpolate(isEn.value ? "Click any item to test guest checkout" : "\u70B9\u51FB\u300C\u7ACB\u5373\u8D2D\u4E70\u300D\u53EF\u6D4B\u8BD5\u514D\u6CE8\u518C\u53D1\u5361/\u53D1\u8D27\u95ED\u73AF")}</span></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(__props.blueprint.products, (prod, idx) => {
          _push(`<div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-[#111319] p-4 flex flex-col justify-between space-y-4 hover:border-blue-500/60 transition-colors"><div class="space-y-2"><div class="flex items-center justify-between gap-2"><span class="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-mono text-[10px] font-bold uppercase">${ssrInterpolate(prod.type)}</span>`);
          if (prod.badge) {
            _push(`<span class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-[10px] font-semibold">${ssrInterpolate(prod.badge)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><h4 class="font-bold text-slate-900 dark:text-white text-sm leading-snug">${ssrInterpolate(prod.name)}</h4><p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">${ssrInterpolate(prod.description)}</p></div><div class="pt-3 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between gap-2"><div class="font-mono"><span class="text-xs text-slate-400">${ssrInterpolate(prod.currency || "USD")}</span><span class="ml-1 text-lg font-extrabold text-slate-950 dark:text-white">${ssrInterpolate(prod.price)}</span></div><button type="button" class="px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer inline-flex items-center gap-1" style="${ssrRenderStyle({ backgroundColor: __props.blueprint.primaryColor || "#2563eb" })}">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:lightning-fill",
            class: "w-3.5 h-3.5"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(isEn.value ? "Instant Buy" : "\u7ACB\u5373\u8D2D\u4E70")}</span></button></div></div>`);
        });
        _push(`<!--]--></div>`);
        if (selectedProduct.value) {
          _push(`<div class="mt-4 rounded-xl border border-emerald-300/80 dark:border-emerald-800/80 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 space-y-3"><div class="flex items-center justify-between"><div class="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:SealCheck-fill",
            class: "w-4 h-4 text-emerald-600"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(isEn.value ? "APay Guest Checkout & Auto-Fulfillment Simulation" : "APay \u514D\u6CE8\u518C\u7ED3\u8D26\u4E0E\u81EA\u52A8\u53D1\u8D27\u95ED\u73AF\u9884\u89C8")}</span></div><button type="button" class="text-xs text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"> \u2715 </button></div><div class="grid sm:grid-cols-2 gap-3 text-xs"><div class="rounded-lg bg-white dark:bg-[#0b0d12] p-3 border border-slate-200/80 dark:border-slate-800 space-y-1"><div class="text-slate-400 font-mono text-[11px]">${ssrInterpolate(isEn.value ? "Selected Item" : "\u9009\u8D2D\u5546\u54C1")}</div><div class="font-bold text-slate-900 dark:text-white">${ssrInterpolate(selectedProduct.value.name)}</div><div class="font-mono text-blue-600 dark:text-blue-400">${ssrInterpolate(selectedProduct.value.currency || "USD")} ${ssrInterpolate(selectedProduct.value.price)} \xB7 ${ssrInterpolate(selectedProduct.value.type)}</div></div><div class="rounded-lg bg-white dark:bg-[#0b0d12] p-3 border border-slate-200/80 dark:border-slate-800 space-y-1"><div class="text-slate-400 font-mono text-[11px]">${ssrInterpolate(isEn.value ? "Instant Delivery Payload (After Payment)" : "\u4ED8\u6B3E\u540E\u81EA\u52A8\u53D1\u653E\u5185\u5BB9 (Resource / \u5361\u5BC6)")}</div><div class="font-mono text-emerald-700 dark:text-emerald-300 break-all">${ssrInterpolate(selectedProduct.value.resource || "AUTO-LICENSE-KEY-DEMO-2026")}</div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div id="preview-posts" class="p-6 space-y-3"><h3 class="text-sm font-bold uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400">${ssrInterpolate(isEn.value ? "Built-in SEO Blog & Guides" : "\u5185\u7F6E SEO \u83B7\u5BA2\u6587\u7AE0\u4E0E\u4E70\u5BB6\u6307\u5357")} (${ssrInterpolate(((_g = __props.blueprint.posts) == null ? void 0 : _g.length) || 0)}) </h3><div class="grid sm:grid-cols-2 gap-3"><!--[-->`);
        ssrRenderList(__props.blueprint.posts, (post, idx) => {
          _push(`<div class="rounded-xl border border-slate-200/80 dark:border-slate-800 p-4 space-y-1.5 bg-white dark:bg-[#111319]"><div class="font-mono text-[11px] text-blue-600 dark:text-blue-400">/blog/${ssrInterpolate(post.slug)}</div><h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">${ssrInterpolate(post.title)}</h4><p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">${ssrInterpolate(post.description)}</p></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<div class="p-6 space-y-5 bg-slate-50/40 dark:bg-[#0b0d12]"><div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4"><div><div class="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold">APAY BUILT-IN /ADMIN CONSOLE</div><h3 class="text-base font-bold text-slate-900 dark:text-white mt-0.5">${ssrInterpolate(__props.blueprint.siteName)} \u2014 ${ssrInterpolate(isEn.value ? "Merchant Admin Backend" : "\u72EC\u7ACB\u7AD9\u7BA1\u7406\u540E\u53F0\uFF08\u90E8\u7F72\u540E\u5373\u523B\u53EF\u7528\uFF09")}</h3></div><span class="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-semibold"> Cloudflare D1 Connected </span></div><div class="grid sm:grid-cols-4 gap-3"><div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111319] p-3.5"><div class="text-[11px] font-mono text-slate-400">${ssrInterpolate(isEn.value ? "Active Products" : "\u5728\u552E\u5546\u54C1\u6570")}</div><div class="text-xl font-extrabold font-mono text-slate-900 dark:text-white mt-1">${ssrInterpolate(((_h = __props.blueprint.products) == null ? void 0 : _h.length) || 0)}</div></div><div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111319] p-3.5"><div class="text-[11px] font-mono text-slate-400">${ssrInterpolate(isEn.value ? "Pre-seeded License Cards" : "\u9884\u7F6E\u6F14\u793A\u5361\u5BC6\u5E93\u5B58")}</div><div class="text-xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400 mt-1">15</div></div><div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111319] p-3.5"><div class="text-[11px] font-mono text-slate-400">${ssrInterpolate(isEn.value ? "SEO Articles" : "\u5DF2\u53D1\u5E03 SEO \u6587\u7AE0")}</div><div class="text-xl font-extrabold font-mono text-blue-600 dark:text-blue-400 mt-1">${ssrInterpolate(((_i = __props.blueprint.posts) == null ? void 0 : _i.length) || 0)}</div></div><div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111319] p-3.5"><div class="text-[11px] font-mono text-slate-400">${ssrInterpolate(isEn.value ? "Payment Gateways" : "\u652F\u4ED8\u4E0E\u53D1\u5361\u901A\u9053")}</div><div class="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 mt-2">Stripe / Alipay / USDT</div></div></div><div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111319] p-4 space-y-2 text-xs text-slate-600 dark:text-slate-300"><div class="font-bold text-slate-900 dark:text-white">${ssrInterpolate(isEn.value ? "Included Out-of-the-Box in Your Deployed /admin:" : "\u90E8\u7F72\u5230 Cloudflare Pages \u540E\uFF0C\u4F60\u7684 /admin \u540E\u53F0\u5929\u7136\u81EA\u5E26\u4EE5\u4E0B\u5B8C\u6574\u6A21\u5757\uFF1A")}</div><div class="grid sm:grid-cols-2 gap-2 pt-1"><div>\u2022 ${ssrInterpolate(isEn.value ? "Products, SKUs & Auto-Delivery Files" : "\u5546\u54C1\u7BA1\u7406\u3001\u5B9A\u4EF7\u4E0E\u81EA\u52A8\u53D1\u8D27\u94FE\u63A5\u914D\u7F6E")}</div><div>\u2022 ${ssrInterpolate(isEn.value ? "License Key Pool (/admin/cards) & Batch Import" : "\u5361\u5BC6\u5E93\u5B58\u6C60 (/admin/cards) \u6279\u91CF\u5BFC\u5165\u4E0E\u6838\u9500")}</div><div>\u2022 ${ssrInterpolate(isEn.value ? "Guest & Member Orders + Webhook Automation" : "\u6E38\u5BA2\u514D\u6CE8\u518C\u8BA2\u5355\u6D41\u6C34\u3001\u9000\u6B3E\u4E0E Webhook \u81EA\u52A8\u5316")}</div><div>\u2022 ${ssrInterpolate(isEn.value ? "SEO Blog, Sitemap, LLMs.txt & Multi-locale Settings" : "\u591A\u8BED\u8A00 SEO \u535A\u5BA2\u3001\u81EA\u52A8 Sitemap \u4E0E AI \u722C\u866B\u4F18\u5316 (GEO)")}</div></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiSiteBuilderStorePreview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "HoxiSiteBuilderStorePreview" });

export { __nuxt_component_3 as default };
//# sourceMappingURL=HoxiSiteBuilderStorePreview-BYp7IIA_.mjs.map
