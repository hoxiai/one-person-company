import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { aL as useLocaleRouter, t as useSettings, y as useFetch, bi as useSeoMeta, bj as useJsonLd, a as __nuxt_component_3$1, b as _sfc_main$E } from './server.mjs';
import __nuxt_component_5 from './HoxiTag-siFn4kRf.mjs';
import __nuxt_component_7 from './HoxiSectionLabel-8WOuY8L8.mjs';
import { defineComponent, computed, ref, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { h as hoxiGateways } from './gateways-tgDca7H5.mjs';
import { h as hoxiModels } from './models-VgTGFaGO.mjs';
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
import 'http';
import 'https';
import 'zlib';
import 'stream';
import 'buffer';
import 'util';
import 'url';
import 'net';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { localePath } = useLocaleRouter();
    const { getSetting } = useSettings();
    const slug = computed(() => {
      const raw = route.params.slug;
      const parts = Array.isArray(raw) ? raw : [raw];
      return String(parts.at(-1) || "").trim();
    });
    const { data: dbGateways } = useFetch(
      "/api/hoxi/gateways",
      {
        key: "hoxi-db-gateways",
        default: () => null
      },
      "$q-8mPH-VOo"
      /* nuxt-injected */
    );
    const effectiveGateways = computed(() => {
      if (dbGateways.value && Array.isArray(dbGateways.value) && dbGateways.value.length > 0) {
        return dbGateways.value;
      }
      try {
        const raw = getSetting("hoxi_gateways_override");
        if (raw && typeof raw === "string") {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        }
      } catch {
      }
      return hoxiGateways;
    });
    const gateway = computed(() => {
      const target = slug.value.toLowerCase();
      return effectiveGateways.value.find((g) => g.id.toLowerCase() === target);
    });
    const gatewayDescription = computed(() => {
      if (!gateway.value) return "";
      const g = gateway.value;
      return `${g.name} \u662F\u4E13\u4E3A\u5F00\u53D1\u8005\u6253\u9020\u7684\u9AD8\u6027\u80FD AI API \u805A\u5408\u4E13\u7EBF\uFF0C\u56FD\u5185\u5B9E\u6D4B\u5EF6\u8FDF ${g.latencyMs}ms\uFF0C\u5168\u6708\u5728\u7EBF\u7387 ${g.uptime}\u3002\u652F\u6301 ${g.models.slice(0, 3).join("\u3001")} \u7B49\u4E3B\u6D41\u9AD8\u9636\u6A21\u578B\uFF0C\u76F8\u6BD4\u5B98\u65B9\u520A\u4F8B\u4EF7\u76F4\u964D ${g.savingsPercent}%\u3002`;
    });
    const copiedUrl = ref("");
    const copyBaseUrl = (url) => {
    };
    const getModelSlug = (modelName) => {
      const norm = modelName.toLowerCase().replace(/[^a-z0-9]/g, "");
      const found = hoxiModels.find((m) => {
        const mNorm = m.name.toLowerCase().replace(/[^a-z0-9]/g, "");
        return mNorm === norm || mNorm.includes(norm) || norm.includes(mNorm);
      });
      return found ? found.slug : null;
    };
    const getModelApiName = (modelName) => {
      const slug2 = getModelSlug(modelName);
      if (slug2) {
        const found = hoxiModels.find((m) => m.slug === slug2);
        if (found == null ? void 0 : found.apiName) return found.apiName;
      }
      return modelName.toLowerCase().replace(/\s+/g, "-");
    };
    const alternatives = computed(() => {
      if (!gateway.value) return [];
      return effectiveGateways.value.filter((g) => {
        var _a;
        return g.id !== ((_a = gateway.value) == null ? void 0 : _a.id);
      }).slice(0, 3);
    });
    const gatewaySeoTitle = computed(() => {
      return gateway.value ? `${gateway.value.name} \u5EF6\u8FDF\u6D4B\u901F\u3001\u4EF7\u683C\u660E\u7EC6\u4E0E Cursor/Cline \u63A5\u5165\u914D\u7F6E | Hoxi` : "\u4E2D\u8F6C\u7AD9\u4E13\u7EBF\u8BE6\u60C5 | Hoxi";
    });
    const gatewaySeoDescription = computed(() => {
      if (!gateway.value) return "";
      const g = gateway.value;
      return `${g.name} (${g.domain}) \u5B9E\u6D4B\u5728\u7EBF\u7387 ${g.uptime}\uFF0C\u56FD\u5185\u5B9E\u6D4B\u5EF6\u8FDF ${g.latencyMs}ms\uFF0C\u8F93\u5165\u5355\u4EF7 ${g.priceLabel}\uFF0C\u76F8\u5BF9\u5B98\u65B9\u539F\u4EF7\u76F4\u964D ${g.savingsPercent}%\u3002\u6EE1\u8840\u652F\u6301 ${g.models.slice(0, 3).join("\u3001")} \u6DF1\u5EA6\u601D\u8003\u3002`;
    });
    useSeoMeta({
      title: () => gatewaySeoTitle.value,
      description: () => gatewaySeoDescription.value,
      ogTitle: () => gatewaySeoTitle.value,
      ogDescription: () => gatewaySeoDescription.value,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => gatewaySeoTitle.value,
      twitterDescription: () => gatewaySeoDescription.value,
      keywords: () => gateway.value ? `${gateway.value.name}, ${gateway.value.domain}, AI\u4E2D\u8F6C\u7AD9, Cursor Base URL, Claude 3.7\u4E13\u7EBF, DeepSeek R1 API, \u6EE1\u8840\u601D\u8003\u6A21\u5F0F, ${gateway.value.models.join(", ")}` : ""
    });
    useJsonLd("hoxi-gateway-detail", computed(() => {
      if (!gateway.value) return [];
      const g = gateway.value;
      return [
        {
          "@type": "Service",
          name: g.name,
          description: gatewaySeoDescription.value,
          provider: {
            "@type": "Organization",
            name: g.name,
            url: g.url || localePath(`/gateways/${g.id}`)
          },
          offers: {
            "@type": "Offer",
            price: g.pricePerM,
            priceCurrency: "CNY",
            description: `${g.priceLabel} (\u76F4\u964D ${g.savingsPercent}%)`,
            url: localePath(`/gateways/${g.id}`)
          }
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "\u9996\u9875", item: localePath("/") },
            { "@type": "ListItem", position: 2, name: "AI \u4E2D\u8F6C\u7AD9\u5B9E\u6D4B\u5929\u68AF", item: localePath("/gateways") },
            { "@type": "ListItem", position: 3, name: g.name, item: localePath(`/gateways/${g.id}`) }
          ]
        }
      ];
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$E;
      const _component_HoxiTag = __nuxt_component_5;
      const _component_HoxiSectionLabel = __nuxt_component_7;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (gateway.value) {
              _push2(`<div class="py-8 md:py-16"${_scopeId}><div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/"),
                class: "hover:text-slate-900 dark:hover:text-white transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u9996\u9875 `);
                  } else {
                    return [
                      createTextVNode(" \u9996\u9875 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span${_scopeId}>/</span>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/gateways"),
                class: "hover:text-slate-900 dark:hover:text-white transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` AI \u4E2D\u8F6C\u7AD9\u5B9E\u6D4B\u5929\u68AF `);
                  } else {
                    return [
                      createTextVNode(" AI \u4E2D\u8F6C\u7AD9\u5B9E\u6D4B\u5929\u68AF ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span${_scopeId}>/</span><span class="text-slate-900 dark:text-white font-medium truncate max-w-[200px] sm:max-w-none"${_scopeId}>${ssrInterpolate(gateway.value.name)}</span></div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/gateways"),
                class: "inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:arrow-left",
                      class: "w-4 h-4"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span${_scopeId2}>\u8FD4\u56DE\u4E2D\u8F6C\u7AD9\u5929\u68AF\u699C</span>`);
                  } else {
                    return [
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-left",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", null, "\u8FD4\u56DE\u4E2D\u8F6C\u7AD9\u5929\u68AF\u699C")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-slate-100 dark:border-slate-800 pb-8"${_scopeId}><div class="flex-1"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><span class="inline-block h-3.5 w-3.5 rounded-full bg-emerald-500 shrink-0"${_scopeId}></span><h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"${_scopeId}>${ssrInterpolate(gateway.value.name)}</h1></div><div class="mt-3 flex flex-wrap items-center gap-2"${_scopeId}>`);
              if (gateway.value.badge) {
                _push2(ssrRenderComponent(_component_HoxiTag, {
                  tone: gateway.value.badgeTone || "positive"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(gateway.value.badge)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(gateway.value.badge), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-mono text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(gateway.value.domain)}</span><span class="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300"${_scopeId}><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"${_scopeId}></span><span${_scopeId}>\u5728\u7EBF\u7387 ${ssrInterpolate(gateway.value.uptime)}</span></span><span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 text-xs font-mono font-medium text-blue-700 dark:text-blue-300"${_scopeId}> \u5B9E\u6D4B\u5EF6\u8FDF ${ssrInterpolate(gateway.value.latencyMs)}ms </span></div><p class="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"${_scopeId}>${ssrInterpolate(gatewayDescription.value)}</p></div><div class="w-full md:w-80 shrink-0 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 p-5 shadow-xs"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs text-slate-400 dark:text-slate-500 font-medium"${_scopeId}>\u5B9E\u6D4B\u8C03\u7528\u5355\u4EF7</span><span class="inline-flex items-center rounded bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40"${_scopeId}> \u76F4\u964D ${ssrInterpolate(gateway.value.savingsPercent)}% </span></div><div class="mt-2 flex items-baseline gap-2"${_scopeId}><span class="text-3xl font-black text-slate-900 dark:text-white tracking-tight"${_scopeId}>${ssrInterpolate(gateway.value.priceLabel)}</span><span class="text-xs text-slate-400 dark:text-slate-500 line-through"${_scopeId}>\u5B98\u65B9\u7EA6 \xA5${ssrInterpolate(gateway.value.officialPriceCNY)}/M</span></div><div class="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800 pt-3"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-slate-400"${_scopeId}>Base URL\uFF1A</span><span class="font-mono text-emerald-600 dark:text-emerald-400 font-bold truncate max-w-[170px]"${ssrRenderAttr("title", gateway.value.baseUrl)}${_scopeId}>${ssrInterpolate(gateway.value.baseUrl)}</span></div><div class="flex items-center justify-between"${_scopeId}><span class="text-slate-400"${_scopeId}>\u601D\u8003\u6A21\u5F0F\uFF1A</span><span class="font-medium text-slate-700 dark:text-slate-200"${_scopeId}>\u6EE1\u8840\u652F\u6301 (reasoning)</span></div><div class="flex items-center justify-between"${_scopeId}><span class="text-slate-400"${_scopeId}>\u5145\u503C\u65B9\u5F0F\uFF1A</span><span class="font-medium text-slate-700 dark:text-slate-200"${_scopeId}>\u5FAE\u4FE1 / \u652F\u4ED8\u5B9D / \u968F\u7528\u968F\u5145</span></div></div><div class="mt-5 space-y-2"${_scopeId}><button type="button" class="flex items-center justify-center gap-1.5 w-full rounded-xl bg-slate-900 dark:bg-blue-600 py-2.5 text-xs font-semibold text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-xs cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:copy",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(copiedUrl.value === gateway.value.baseUrl ? "\u5DF2\u590D\u5236 Base URL \u2713" : "\u4E00\u952E\u590D\u5236 Base URL")}</span></button>`);
              if (gateway.value.url) {
                _push2(`<a${ssrRenderAttr("href", gateway.value.url)} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-1.5 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-slate-400 transition-colors"${_scopeId}><span${_scopeId}>\u524D\u5F80\u7AD9\u70B9\u63A7\u5236\u53F0 \u2197</span></a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div><section class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"${_scopeId}><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4"${_scopeId}><div class="text-xs text-slate-400 font-medium"${_scopeId}>\u5B9E\u6D4B\u56FD\u5185\u5EF6\u8FDF</div><div class="mt-1 text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400"${_scopeId}>${ssrInterpolate(gateway.value.latencyMs)}ms </div><div class="mt-1 text-[11px] text-slate-500"${_scopeId}>\u53CC\u7EBF BGP \u4E13\u7EBF\u76F4\u8FDE\uFF0C\u9996\u5B57\u54CD\u5E94\u6D41\u7545</div></div><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4"${_scopeId}><div class="text-xs text-slate-400 font-medium"${_scopeId}>\u5168\u6708\u5728\u7EBF\u7387</div><div class="mt-1 text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400"${_scopeId}>${ssrInterpolate(gateway.value.uptime)}</div><div class="mt-1 text-[11px] text-slate-500"${_scopeId}>\u591A\u8282\u70B9\u81EA\u52A8\u5BB9\u707E\u4E0E\u9AD8\u53EF\u7528\u96C6\u7FA4</div></div><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4"${_scopeId}><div class="text-xs text-slate-400 font-medium"${_scopeId}>\u6EE1\u8840\u601D\u8003\u63A8\u7406</div><div class="mt-1 text-2xl font-bold text-slate-900 dark:text-white"${_scopeId}> 100% \u6EE1\u8840 </div><div class="mt-1 text-[11px] text-slate-500"${_scopeId}>\u5B8C\u6574\u8F93\u51FA reasoning_content \u601D\u8003\u94FE</div></div><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4"${_scopeId}><div class="text-xs text-slate-400 font-medium"${_scopeId}>\u5145\u503C\u4E0E\u4F7F\u7528\u95E8\u69DB</div><div class="mt-1 text-2xl font-bold text-slate-900 dark:text-white"${_scopeId}> \u968F\u7528\u968F\u5145 </div><div class="mt-1 text-[11px] text-slate-500"${_scopeId}>\u652F\u6301\u5C0F\u989D\u9A8C\u8BC1\uFF0C\u4F59\u989D\u6C38\u4E45\u6709\u6548\u4E0D\u8FC7\u671F</div></div></section><section class="mt-12"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u4E13\u7EBF\u652F\u6301\u6838\u5FC3\u6A21\u578B\u4E0E\u964D\u8D39\u660E\u7EC6`);
                  } else {
                    return [
                      createTextVNode("\u4E13\u7EBF\u652F\u6301\u6838\u5FC3\u6A21\u578B\u4E0E\u964D\u8D39\u660E\u7EC6")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="mt-4 overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs"${_scopeId}><table class="w-full text-left text-xs"${_scopeId}><thead class="border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 font-medium text-slate-400"${_scopeId}><tr${_scopeId}><th class="py-3 px-4"${_scopeId}>\u6A21\u578B\u540D\u79F0</th><th class="py-3 px-4"${_scopeId}>API \u8C03\u7528\u6807\u8BC6 (Model Name)</th><th class="py-3 px-4"${_scopeId}>\u4E13\u7EBF\u5355\u4EF7 (\xA5/M)</th><th class="py-3 px-4"${_scopeId}>\u5B98\u65B9\u539F\u4EF7</th><th class="py-3 px-4"${_scopeId}>\u76F8\u5BF9\u964D\u8D39</th><th class="py-3 px-4 text-right"${_scopeId}>\u8BC4\u6D4B</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300"${_scopeId}><!--[-->`);
              ssrRenderList(gateway.value.models, (modelName) => {
                _push2(`<tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"${_scopeId}><td class="py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100"${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}><span class="h-2 w-2 rounded-full bg-blue-500"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(modelName)}</span></div></td><td class="py-3.5 px-4 font-mono text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(getModelApiName(modelName))}</td><td class="py-3.5 px-4 font-bold text-slate-900 dark:text-white font-mono text-sm"${_scopeId}>${ssrInterpolate(gateway.value.priceLabel)}</td><td class="py-3.5 px-4 font-mono text-slate-400 line-through"${_scopeId}> \xA5${ssrInterpolate(gateway.value.officialPriceCNY)}/M </td><td class="py-3.5 px-4"${_scopeId}><span class="inline-flex items-center rounded bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60"${_scopeId}> \u76F4\u964D ${ssrInterpolate(gateway.value.savingsPercent)}% </span></td><td class="py-3.5 px-4 text-right"${_scopeId}>`);
                if (getModelSlug(modelName)) {
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: unref(localePath)(`/models/${getModelSlug(modelName)}`),
                    class: "text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<span${_scopeId2}>\u80FD\u529B\u8BC4\u6D4B</span>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3 h-3"
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode("span", null, "\u80FD\u529B\u8BC4\u6D4B"),
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-right",
                            class: "w-3 h-3"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<span class="text-slate-300 dark:text-slate-600"${_scopeId}>\u2014</span>`);
                }
                _push2(`</td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div></section><section id="setup-guide" class="mt-12 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 p-6 md:p-8"${_scopeId}><div class="border-b border-slate-200/60 dark:border-slate-800 pb-4"${_scopeId}><h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2"${_scopeId}><span${_scopeId}>\u{1F6E0}\uFE0F</span><span${_scopeId}>1 \u5206\u949F\u63A5\u5165\u914D\u7F6E\u793A\u4F8B (Cursor / VS Code / Cline)</span></h3><p class="mt-1 text-xs text-slate-500 dark:text-slate-400"${_scopeId}> \u5F00\u901A\u83B7\u53D6 API Key \u540E\uFF0C\u76F4\u63A5\u5C06\u4E0B\u65B9 <strong${_scopeId}>Base URL</strong> \u586B\u5165\u5BF9\u5E94\u5F00\u53D1\u5DE5\u5177\u5373\u53EF\u4E1D\u6ED1\u5199\u4EE3\u7801\uFF0C\u96F6\u7F51\u7EDC\u9B54\u6CD5\u95E8\u69DB </p></div><div class="mt-6 grid gap-5 md:grid-cols-2"${_scopeId}><div class="rounded-xl bg-slate-900 p-5 font-mono text-xs text-slate-200"${_scopeId}><div class="text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3 flex items-center justify-between"${_scopeId}><span${_scopeId}># Cursor IDE \u8BBE\u7F6E</span><button type="button" class="text-[10px] text-emerald-400 hover:underline font-sans cursor-pointer"${_scopeId}>${ssrInterpolate(copiedUrl.value === gateway.value.baseUrl ? "\u5DF2\u590D\u5236 Base URL \u2713" : "\u590D\u5236 Base URL")}</button></div><p class="text-slate-400"${_scopeId}>\u8DEF\u5F84: Settings -&gt; Models -&gt; OpenAI API Key</p><p class="mt-2 text-slate-400"${_scopeId}>Base URL:</p><p class="text-emerald-400 font-bold"${_scopeId}>${ssrInterpolate(gateway.value.baseUrl)}</p><p class="mt-2 text-slate-400"${_scopeId}>API Key:</p><p class="text-blue-400"${_scopeId}>sk-your-${ssrInterpolate(gateway.value.id)}-api-key</p><p class="mt-2 text-slate-400"${_scopeId}>Model Name:</p><p class="text-amber-300"${_scopeId}>claude-3-7-sonnet / deepseek-r1</p></div><div class="rounded-xl bg-slate-900 p-5 font-mono text-xs text-slate-200"${_scopeId}><div class="text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3 flex items-center justify-between"${_scopeId}><span${_scopeId}># Cline / Roo Code / Continue \u8BBE\u7F6E</span><span class="text-[10px] text-blue-400 font-sans"${_scopeId}>OpenAI \u517C\u5BB9</span></div><p class="text-slate-400"${_scopeId}>API Provider: OpenAI Compatible</p><p class="mt-2 text-slate-400"${_scopeId}>Base URL:</p><p class="text-emerald-400 font-bold"${_scopeId}>${ssrInterpolate(gateway.value.baseUrl)}</p><p class="mt-2 text-slate-400"${_scopeId}>API Key:</p><p class="text-blue-400"${_scopeId}>sk-your-${ssrInterpolate(gateway.value.id)}-api-key</p><p class="mt-2 text-slate-400"${_scopeId}>Thinking Mode (\u601D\u8003\u63A8\u7406):</p><p class="text-emerald-400"${_scopeId}>100% \u6EE1\u8840\u539F\u751F\u652F\u6301 (\u652F\u6301 reasoning_content)</p></div></div></section><section class="mt-12 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u7AD9\u957F\u5B9E\u6D4B\u907F\u5751\u4E0E\u8D28\u91CF\u9274\u522B\u4FDD\u969C`);
                  } else {
                    return [
                      createTextVNode("\u7AD9\u957F\u5B9E\u6D4B\u907F\u5751\u4E0E\u8D28\u91CF\u9274\u522B\u4FDD\u969C")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="mt-4 grid gap-4 md:grid-cols-3 text-xs leading-6 text-slate-600 dark:text-slate-400"${_scopeId}><div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40"${_scopeId}><strong class="text-slate-900 dark:text-white block font-semibold mb-1"${_scopeId}>1. \u4E25\u9632\u63BA\u6C34\u4E0E\u5047\u6A21\u578B</strong><span${_scopeId}>\u4E0D\u63D0\u4F9B\u51E0\u5206\u94B1\u7684\u5047\u6A21\u578B\u6216\u964D\u667A\u6E20\u9053\u3002\u652F\u6301\u901A\u8FC7\u957F\u4EE3\u7801\u591A\u6587\u4EF6\u91CD\u6784\u4E0E\u590D\u6742\u6570\u5B66\u903B\u8F91\u6821\u9A8C\u771F\u4F2A\u3002</span></div><div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40"${_scopeId}><strong class="text-slate-900 dark:text-white block font-semibold mb-1"${_scopeId}>2. \u5EFA\u8BAE\u5C0F\u989D\u6309\u91CF\u5145\u503C</strong><span${_scopeId}>\u5021\u5BFC\u7406\u6027\u6D88\u8D39\uFF0C\u9996\u6B21\u5EFA\u8BAE\u5145\u503C \xA510~\xA530 \u8DD1\u901A\u5EF6\u8FDF\u6D4B\u8BD5\uFF0C\u6309\u9700\u4F7F\u7528\u66F4\u5B89\u5FC3\u3002</span></div><div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40"${_scopeId}><strong class="text-slate-900 dark:text-white block font-semibold mb-1"${_scopeId}>3. \u4F4E\u5EF6\u8FDF\u4E13\u6CE8\u4EE3\u7801\u4F5C\u4E1A</strong><span${_scopeId}>${ssrInterpolate(gateway.value.latencyMs)}ms \u9996\u5B57\u54CD\u5E94\uFF0C\u62D2\u7EDD 1500ms+ \u7684\u6D77\u5916\u5361\u987F\u5EF6\u8FDF\uFF0C\u5E26\u6765\u63A5\u8FD1\u672C\u5730\u7684\u4E1D\u6ED1\u8865\u5168\u3002</span></div></div></section>`);
              if (alternatives.value.length) {
                _push2(`<section class="mt-14 border-t border-slate-100 dark:border-slate-800 pt-10"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`\u540C\u699C\u5176\u4ED6\u4E2D\u8F6C\u4E13\u7EBF\u63A8\u8350`);
                    } else {
                      return [
                        createTextVNode("\u540C\u699C\u5176\u4ED6\u4E2D\u8F6C\u4E13\u7EBF\u63A8\u8350")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<p class="mt-1 text-xs text-slate-500 dark:text-slate-400"${_scopeId}> \u5BF9\u6BD4\u4E0D\u540C\u4E3B\u6253\u6A21\u578B\u4E0E\u5EF6\u8FDF\u8868\u73B0\u7684\u5907\u9009\u4E13\u7EBF </p></div>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: unref(localePath)("/gateways"),
                  class: "text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>\u67E5\u770B\u5B8C\u6574\u5929\u68AF\u699C</span>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-3.5 h-3.5"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("span", null, "\u67E5\u770B\u5B8C\u6574\u5929\u68AF\u699C"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3"${_scopeId}><!--[-->`);
                ssrRenderList(alternatives.value, (alt) => {
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    key: alt.id,
                    to: unref(localePath)(`/gateways/${alt.id}`),
                    class: "group rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 transition-all hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs block"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="flex items-center justify-between"${_scopeId2}><div class="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white text-xs"${_scopeId2}><span class="inline-block h-2 w-2 rounded-full bg-emerald-500"${_scopeId2}></span><span${_scopeId2}>${ssrInterpolate(alt.name)}</span></div><span class="text-xs font-bold text-slate-900 dark:text-white font-mono"${_scopeId2}>${ssrInterpolate(alt.priceLabel)}</span></div><p class="mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-1"${_scopeId2}>${ssrInterpolate(alt.features.join(" \xB7 "))}</p><div class="mt-3 flex items-center justify-between text-[11px] text-blue-600 dark:text-blue-400 font-medium"${_scopeId2}><span class="font-mono"${_scopeId2}>${ssrInterpolate(alt.latencyMs)}ms</span><span class="group-hover:translate-x-0.5 transition-transform"${_scopeId2}>\u67E5\u770B\u8BE6\u60C5 \u2192</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("div", { class: "flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white text-xs" }, [
                              createVNode("span", { class: "inline-block h-2 w-2 rounded-full bg-emerald-500" }),
                              createVNode("span", null, toDisplayString(alt.name), 1)
                            ]),
                            createVNode("span", { class: "text-xs font-bold text-slate-900 dark:text-white font-mono" }, toDisplayString(alt.priceLabel), 1)
                          ]),
                          createVNode("p", { class: "mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-1" }, toDisplayString(alt.features.join(" \xB7 ")), 1),
                          createVNode("div", { class: "mt-3 flex items-center justify-between text-[11px] text-blue-600 dark:text-blue-400 font-medium" }, [
                            createVNode("span", { class: "font-mono" }, toDisplayString(alt.latencyMs) + "ms", 1),
                            createVNode("span", { class: "group-hover:translate-x-0.5 transition-transform" }, "\u67E5\u770B\u8BE6\u60C5 \u2192")
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></div></section>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<div class="py-20 text-center space-y-4"${_scopeId}><h2 class="text-xl font-bold text-slate-900 dark:text-white"${_scopeId}>\u672A\u627E\u5230\u5BF9\u5E94\u4E2D\u8F6C\u4E13\u7EBF</h2><p class="text-xs text-slate-500"${_scopeId}>\u8BE5\u4E13\u7EBF\u53EF\u80FD\u5DF2\u66F4\u540D\u6216\u4E0B\u67B6</p>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/gateways"),
                class: "inline-flex items-center gap-1.5 rounded-full bg-slate-900 dark:bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-600 transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u8FD4\u56DE\u4E2D\u8F6C\u7AD9\u5929\u68AF\u699C `);
                  } else {
                    return [
                      createTextVNode(" \u8FD4\u56DE\u4E2D\u8F6C\u7AD9\u5929\u68AF\u699C ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              gateway.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "py-8 md:py-16"
              }, [
                createVNode("div", { class: "flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6" }, [
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/"),
                    class: "hover:text-slate-900 dark:hover:text-white transition-colors"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u9996\u9875 ")
                    ]),
                    _: 1
                  }, 8, ["to"]),
                  createVNode("span", null, "/"),
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/gateways"),
                    class: "hover:text-slate-900 dark:hover:text-white transition-colors"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" AI \u4E2D\u8F6C\u7AD9\u5B9E\u6D4B\u5929\u68AF ")
                    ]),
                    _: 1
                  }, 8, ["to"]),
                  createVNode("span", null, "/"),
                  createVNode("span", { class: "text-slate-900 dark:text-white font-medium truncate max-w-[200px] sm:max-w-none" }, toDisplayString(gateway.value.name), 1)
                ]),
                createVNode(_component_NuxtLink, {
                  to: unref(localePath)("/gateways"),
                  class: "inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-left",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", null, "\u8FD4\u56DE\u4E2D\u8F6C\u7AD9\u5929\u68AF\u699C")
                  ]),
                  _: 1
                }, 8, ["to"]),
                createVNode("div", { class: "flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-slate-100 dark:border-slate-800 pb-8" }, [
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("span", { class: "inline-block h-3.5 w-3.5 rounded-full bg-emerald-500 shrink-0" }),
                      createVNode("h1", { class: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight" }, toDisplayString(gateway.value.name), 1)
                    ]),
                    createVNode("div", { class: "mt-3 flex flex-wrap items-center gap-2" }, [
                      gateway.value.badge ? (openBlock(), createBlock(_component_HoxiTag, {
                        key: 0,
                        tone: gateway.value.badgeTone || "positive"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(gateway.value.badge), 1)
                        ]),
                        _: 1
                      }, 8, ["tone"])) : createCommentVNode("", true),
                      createVNode("span", { class: "inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-mono text-slate-600 dark:text-slate-300" }, toDisplayString(gateway.value.domain), 1),
                      createVNode("span", { class: "inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300" }, [
                        createVNode("span", { class: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
                        createVNode("span", null, "\u5728\u7EBF\u7387 " + toDisplayString(gateway.value.uptime), 1)
                      ]),
                      createVNode("span", { class: "inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 text-xs font-mono font-medium text-blue-700 dark:text-blue-300" }, " \u5B9E\u6D4B\u5EF6\u8FDF " + toDisplayString(gateway.value.latencyMs) + "ms ", 1)
                    ]),
                    createVNode("p", { class: "mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl" }, toDisplayString(gatewayDescription.value), 1)
                  ]),
                  createVNode("div", { class: "w-full md:w-80 shrink-0 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 p-5 shadow-xs" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("span", { class: "text-xs text-slate-400 dark:text-slate-500 font-medium" }, "\u5B9E\u6D4B\u8C03\u7528\u5355\u4EF7"),
                      createVNode("span", { class: "inline-flex items-center rounded bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40" }, " \u76F4\u964D " + toDisplayString(gateway.value.savingsPercent) + "% ", 1)
                    ]),
                    createVNode("div", { class: "mt-2 flex items-baseline gap-2" }, [
                      createVNode("span", { class: "text-3xl font-black text-slate-900 dark:text-white tracking-tight" }, toDisplayString(gateway.value.priceLabel), 1),
                      createVNode("span", { class: "text-xs text-slate-400 dark:text-slate-500 line-through" }, "\u5B98\u65B9\u7EA6 \xA5" + toDisplayString(gateway.value.officialPriceCNY) + "/M", 1)
                    ]),
                    createVNode("div", { class: "mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800 pt-3" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-slate-400" }, "Base URL\uFF1A"),
                        createVNode("span", {
                          class: "font-mono text-emerald-600 dark:text-emerald-400 font-bold truncate max-w-[170px]",
                          title: gateway.value.baseUrl
                        }, toDisplayString(gateway.value.baseUrl), 9, ["title"])
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-slate-400" }, "\u601D\u8003\u6A21\u5F0F\uFF1A"),
                        createVNode("span", { class: "font-medium text-slate-700 dark:text-slate-200" }, "\u6EE1\u8840\u652F\u6301 (reasoning)")
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-slate-400" }, "\u5145\u503C\u65B9\u5F0F\uFF1A"),
                        createVNode("span", { class: "font-medium text-slate-700 dark:text-slate-200" }, "\u5FAE\u4FE1 / \u652F\u4ED8\u5B9D / \u968F\u7528\u968F\u5145")
                      ])
                    ]),
                    createVNode("div", { class: "mt-5 space-y-2" }, [
                      createVNode("button", {
                        type: "button",
                        class: "flex items-center justify-center gap-1.5 w-full rounded-xl bg-slate-900 dark:bg-blue-600 py-2.5 text-xs font-semibold text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-xs cursor-pointer",
                        onClick: ($event) => copyBaseUrl(gateway.value.baseUrl)
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:copy",
                          class: "w-3.5 h-3.5"
                        }),
                        createVNode("span", null, toDisplayString(copiedUrl.value === gateway.value.baseUrl ? "\u5DF2\u590D\u5236 Base URL \u2713" : "\u4E00\u952E\u590D\u5236 Base URL"), 1)
                      ], 8, ["onClick"]),
                      gateway.value.url ? (openBlock(), createBlock("a", {
                        key: 0,
                        href: gateway.value.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "flex items-center justify-center gap-1.5 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-slate-400 transition-colors"
                      }, [
                        createVNode("span", null, "\u524D\u5F80\u7AD9\u70B9\u63A7\u5236\u53F0 \u2197")
                      ], 8, ["href"])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                createVNode("section", { class: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, [
                  createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4" }, [
                    createVNode("div", { class: "text-xs text-slate-400 font-medium" }, "\u5B9E\u6D4B\u56FD\u5185\u5EF6\u8FDF"),
                    createVNode("div", { class: "mt-1 text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400" }, toDisplayString(gateway.value.latencyMs) + "ms ", 1),
                    createVNode("div", { class: "mt-1 text-[11px] text-slate-500" }, "\u53CC\u7EBF BGP \u4E13\u7EBF\u76F4\u8FDE\uFF0C\u9996\u5B57\u54CD\u5E94\u6D41\u7545")
                  ]),
                  createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4" }, [
                    createVNode("div", { class: "text-xs text-slate-400 font-medium" }, "\u5168\u6708\u5728\u7EBF\u7387"),
                    createVNode("div", { class: "mt-1 text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400" }, toDisplayString(gateway.value.uptime), 1),
                    createVNode("div", { class: "mt-1 text-[11px] text-slate-500" }, "\u591A\u8282\u70B9\u81EA\u52A8\u5BB9\u707E\u4E0E\u9AD8\u53EF\u7528\u96C6\u7FA4")
                  ]),
                  createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4" }, [
                    createVNode("div", { class: "text-xs text-slate-400 font-medium" }, "\u6EE1\u8840\u601D\u8003\u63A8\u7406"),
                    createVNode("div", { class: "mt-1 text-2xl font-bold text-slate-900 dark:text-white" }, " 100% \u6EE1\u8840 "),
                    createVNode("div", { class: "mt-1 text-[11px] text-slate-500" }, "\u5B8C\u6574\u8F93\u51FA reasoning_content \u601D\u8003\u94FE")
                  ]),
                  createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4" }, [
                    createVNode("div", { class: "text-xs text-slate-400 font-medium" }, "\u5145\u503C\u4E0E\u4F7F\u7528\u95E8\u69DB"),
                    createVNode("div", { class: "mt-1 text-2xl font-bold text-slate-900 dark:text-white" }, " \u968F\u7528\u968F\u5145 "),
                    createVNode("div", { class: "mt-1 text-[11px] text-slate-500" }, "\u652F\u6301\u5C0F\u989D\u9A8C\u8BC1\uFF0C\u4F59\u989D\u6C38\u4E45\u6709\u6548\u4E0D\u8FC7\u671F")
                  ])
                ]),
                createVNode("section", { class: "mt-12" }, [
                  createVNode(_component_HoxiSectionLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("\u4E13\u7EBF\u652F\u6301\u6838\u5FC3\u6A21\u578B\u4E0E\u964D\u8D39\u660E\u7EC6")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-4 overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs" }, [
                    createVNode("table", { class: "w-full text-left text-xs" }, [
                      createVNode("thead", { class: "border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 font-medium text-slate-400" }, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "py-3 px-4" }, "\u6A21\u578B\u540D\u79F0"),
                          createVNode("th", { class: "py-3 px-4" }, "API \u8C03\u7528\u6807\u8BC6 (Model Name)"),
                          createVNode("th", { class: "py-3 px-4" }, "\u4E13\u7EBF\u5355\u4EF7 (\xA5/M)"),
                          createVNode("th", { class: "py-3 px-4" }, "\u5B98\u65B9\u539F\u4EF7"),
                          createVNode("th", { class: "py-3 px-4" }, "\u76F8\u5BF9\u964D\u8D39"),
                          createVNode("th", { class: "py-3 px-4 text-right" }, "\u8BC4\u6D4B")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(gateway.value.models, (modelName) => {
                          return openBlock(), createBlock("tr", {
                            key: modelName,
                            class: "hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                          }, [
                            createVNode("td", { class: "py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100" }, [
                              createVNode("div", { class: "flex items-center gap-1.5" }, [
                                createVNode("span", { class: "h-2 w-2 rounded-full bg-blue-500" }),
                                createVNode("span", null, toDisplayString(modelName), 1)
                              ])
                            ]),
                            createVNode("td", { class: "py-3.5 px-4 font-mono text-slate-500 dark:text-slate-400" }, toDisplayString(getModelApiName(modelName)), 1),
                            createVNode("td", { class: "py-3.5 px-4 font-bold text-slate-900 dark:text-white font-mono text-sm" }, toDisplayString(gateway.value.priceLabel), 1),
                            createVNode("td", { class: "py-3.5 px-4 font-mono text-slate-400 line-through" }, " \xA5" + toDisplayString(gateway.value.officialPriceCNY) + "/M ", 1),
                            createVNode("td", { class: "py-3.5 px-4" }, [
                              createVNode("span", { class: "inline-flex items-center rounded bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60" }, " \u76F4\u964D " + toDisplayString(gateway.value.savingsPercent) + "% ", 1)
                            ]),
                            createVNode("td", { class: "py-3.5 px-4 text-right" }, [
                              getModelSlug(modelName) ? (openBlock(), createBlock(_component_NuxtLink, {
                                key: 0,
                                to: unref(localePath)(`/models/${getModelSlug(modelName)}`),
                                class: "text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "\u80FD\u529B\u8BC4\u6D4B"),
                                  createVNode(_component_UIcon, {
                                    name: "ph:arrow-right",
                                    class: "w-3 h-3"
                                  })
                                ]),
                                _: 1
                              }, 8, ["to"])) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-slate-300 dark:text-slate-600"
                              }, "\u2014"))
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ])
                ]),
                createVNode("section", {
                  id: "setup-guide",
                  class: "mt-12 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 p-6 md:p-8"
                }, [
                  createVNode("div", { class: "border-b border-slate-200/60 dark:border-slate-800 pb-4" }, [
                    createVNode("h3", { class: "text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2" }, [
                      createVNode("span", null, "\u{1F6E0}\uFE0F"),
                      createVNode("span", null, "1 \u5206\u949F\u63A5\u5165\u914D\u7F6E\u793A\u4F8B (Cursor / VS Code / Cline)")
                    ]),
                    createVNode("p", { class: "mt-1 text-xs text-slate-500 dark:text-slate-400" }, [
                      createTextVNode(" \u5F00\u901A\u83B7\u53D6 API Key \u540E\uFF0C\u76F4\u63A5\u5C06\u4E0B\u65B9 "),
                      createVNode("strong", null, "Base URL"),
                      createTextVNode(" \u586B\u5165\u5BF9\u5E94\u5F00\u53D1\u5DE5\u5177\u5373\u53EF\u4E1D\u6ED1\u5199\u4EE3\u7801\uFF0C\u96F6\u7F51\u7EDC\u9B54\u6CD5\u95E8\u69DB ")
                    ])
                  ]),
                  createVNode("div", { class: "mt-6 grid gap-5 md:grid-cols-2" }, [
                    createVNode("div", { class: "rounded-xl bg-slate-900 p-5 font-mono text-xs text-slate-200" }, [
                      createVNode("div", { class: "text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3 flex items-center justify-between" }, [
                        createVNode("span", null, "# Cursor IDE \u8BBE\u7F6E"),
                        createVNode("button", {
                          type: "button",
                          class: "text-[10px] text-emerald-400 hover:underline font-sans cursor-pointer",
                          onClick: ($event) => copyBaseUrl(gateway.value.baseUrl)
                        }, toDisplayString(copiedUrl.value === gateway.value.baseUrl ? "\u5DF2\u590D\u5236 Base URL \u2713" : "\u590D\u5236 Base URL"), 9, ["onClick"])
                      ]),
                      createVNode("p", { class: "text-slate-400" }, "\u8DEF\u5F84: Settings -> Models -> OpenAI API Key"),
                      createVNode("p", { class: "mt-2 text-slate-400" }, "Base URL:"),
                      createVNode("p", { class: "text-emerald-400 font-bold" }, toDisplayString(gateway.value.baseUrl), 1),
                      createVNode("p", { class: "mt-2 text-slate-400" }, "API Key:"),
                      createVNode("p", { class: "text-blue-400" }, "sk-your-" + toDisplayString(gateway.value.id) + "-api-key", 1),
                      createVNode("p", { class: "mt-2 text-slate-400" }, "Model Name:"),
                      createVNode("p", { class: "text-amber-300" }, "claude-3-7-sonnet / deepseek-r1")
                    ]),
                    createVNode("div", { class: "rounded-xl bg-slate-900 p-5 font-mono text-xs text-slate-200" }, [
                      createVNode("div", { class: "text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3 flex items-center justify-between" }, [
                        createVNode("span", null, "# Cline / Roo Code / Continue \u8BBE\u7F6E"),
                        createVNode("span", { class: "text-[10px] text-blue-400 font-sans" }, "OpenAI \u517C\u5BB9")
                      ]),
                      createVNode("p", { class: "text-slate-400" }, "API Provider: OpenAI Compatible"),
                      createVNode("p", { class: "mt-2 text-slate-400" }, "Base URL:"),
                      createVNode("p", { class: "text-emerald-400 font-bold" }, toDisplayString(gateway.value.baseUrl), 1),
                      createVNode("p", { class: "mt-2 text-slate-400" }, "API Key:"),
                      createVNode("p", { class: "text-blue-400" }, "sk-your-" + toDisplayString(gateway.value.id) + "-api-key", 1),
                      createVNode("p", { class: "mt-2 text-slate-400" }, "Thinking Mode (\u601D\u8003\u63A8\u7406):"),
                      createVNode("p", { class: "text-emerald-400" }, "100% \u6EE1\u8840\u539F\u751F\u652F\u6301 (\u652F\u6301 reasoning_content)")
                    ])
                  ])
                ]),
                createVNode("section", { class: "mt-12 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6" }, [
                  createVNode(_component_HoxiSectionLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("\u7AD9\u957F\u5B9E\u6D4B\u907F\u5751\u4E0E\u8D28\u91CF\u9274\u522B\u4FDD\u969C")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-4 grid gap-4 md:grid-cols-3 text-xs leading-6 text-slate-600 dark:text-slate-400" }, [
                    createVNode("div", { class: "p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40" }, [
                      createVNode("strong", { class: "text-slate-900 dark:text-white block font-semibold mb-1" }, "1. \u4E25\u9632\u63BA\u6C34\u4E0E\u5047\u6A21\u578B"),
                      createVNode("span", null, "\u4E0D\u63D0\u4F9B\u51E0\u5206\u94B1\u7684\u5047\u6A21\u578B\u6216\u964D\u667A\u6E20\u9053\u3002\u652F\u6301\u901A\u8FC7\u957F\u4EE3\u7801\u591A\u6587\u4EF6\u91CD\u6784\u4E0E\u590D\u6742\u6570\u5B66\u903B\u8F91\u6821\u9A8C\u771F\u4F2A\u3002")
                    ]),
                    createVNode("div", { class: "p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40" }, [
                      createVNode("strong", { class: "text-slate-900 dark:text-white block font-semibold mb-1" }, "2. \u5EFA\u8BAE\u5C0F\u989D\u6309\u91CF\u5145\u503C"),
                      createVNode("span", null, "\u5021\u5BFC\u7406\u6027\u6D88\u8D39\uFF0C\u9996\u6B21\u5EFA\u8BAE\u5145\u503C \xA510~\xA530 \u8DD1\u901A\u5EF6\u8FDF\u6D4B\u8BD5\uFF0C\u6309\u9700\u4F7F\u7528\u66F4\u5B89\u5FC3\u3002")
                    ]),
                    createVNode("div", { class: "p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40" }, [
                      createVNode("strong", { class: "text-slate-900 dark:text-white block font-semibold mb-1" }, "3. \u4F4E\u5EF6\u8FDF\u4E13\u6CE8\u4EE3\u7801\u4F5C\u4E1A"),
                      createVNode("span", null, toDisplayString(gateway.value.latencyMs) + "ms \u9996\u5B57\u54CD\u5E94\uFF0C\u62D2\u7EDD 1500ms+ \u7684\u6D77\u5916\u5361\u987F\u5EF6\u8FDF\uFF0C\u5E26\u6765\u63A5\u8FD1\u672C\u5730\u7684\u4E1D\u6ED1\u8865\u5168\u3002", 1)
                    ])
                  ])
                ]),
                alternatives.value.length ? (openBlock(), createBlock("section", {
                  key: 0,
                  class: "mt-14 border-t border-slate-100 dark:border-slate-800 pt-10"
                }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", null, [
                      createVNode(_component_HoxiSectionLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("\u540C\u699C\u5176\u4ED6\u4E2D\u8F6C\u4E13\u7EBF\u63A8\u8350")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "mt-1 text-xs text-slate-500 dark:text-slate-400" }, " \u5BF9\u6BD4\u4E0D\u540C\u4E3B\u6253\u6A21\u578B\u4E0E\u5EF6\u8FDF\u8868\u73B0\u7684\u5907\u9009\u4E13\u7EBF ")
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/gateways"),
                      class: "text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u67E5\u770B\u5B8C\u6574\u5929\u68AF\u699C"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5"
                        })
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ]),
                  createVNode("div", { class: "mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(alternatives.value, (alt) => {
                      return openBlock(), createBlock(_component_NuxtLink, {
                        key: alt.id,
                        to: unref(localePath)(`/gateways/${alt.id}`),
                        class: "group rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 transition-all hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs block"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("div", { class: "flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white text-xs" }, [
                              createVNode("span", { class: "inline-block h-2 w-2 rounded-full bg-emerald-500" }),
                              createVNode("span", null, toDisplayString(alt.name), 1)
                            ]),
                            createVNode("span", { class: "text-xs font-bold text-slate-900 dark:text-white font-mono" }, toDisplayString(alt.priceLabel), 1)
                          ]),
                          createVNode("p", { class: "mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-1" }, toDisplayString(alt.features.join(" \xB7 ")), 1),
                          createVNode("div", { class: "mt-3 flex items-center justify-between text-[11px] text-blue-600 dark:text-blue-400 font-medium" }, [
                            createVNode("span", { class: "font-mono" }, toDisplayString(alt.latencyMs) + "ms", 1),
                            createVNode("span", { class: "group-hover:translate-x-0.5 transition-transform" }, "\u67E5\u770B\u8BE6\u60C5 \u2192")
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "py-20 text-center space-y-4"
              }, [
                createVNode("h2", { class: "text-xl font-bold text-slate-900 dark:text-white" }, "\u672A\u627E\u5230\u5BF9\u5E94\u4E2D\u8F6C\u4E13\u7EBF"),
                createVNode("p", { class: "text-xs text-slate-500" }, "\u8BE5\u4E13\u7EBF\u53EF\u80FD\u5DF2\u66F4\u540D\u6216\u4E0B\u67B6"),
                createVNode(_component_NuxtLink, {
                  to: unref(localePath)("/gateways"),
                  class: "inline-flex items-center gap-1.5 rounded-full bg-slate-900 dark:bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-600 transition-colors"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u8FD4\u56DE\u4E2D\u8F6C\u7AD9\u5929\u68AF\u699C ")
                  ]),
                  _: 1
                }, 8, ["to"])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/gateways/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
