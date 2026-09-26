import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import __nuxt_component_1 from './HoxiPageHeader-BFh30DFm.mjs';
import __nuxt_component_1$1 from './HoxiVendorDot-BLwK_ZsG.mjs';
import __nuxt_component_3 from './HoxiTag-wDTaVaC3.mjs';
import __nuxt_component_4 from './HoxiSectionLabel-BHyUHyFd.mjs';
import { D as useRoute, f as useI18n, aM as useLocaleRouter, bn as createError, z as useFetch, bl as useSeoMeta, bm as useJsonLd, a as __nuxt_component_3$1, b as _sfc_main$G } from './server.mjs';
import __nuxt_component_7 from './HoxiComment-CEX2CAX5.mjs';
import __nuxt_component_8 from './HoxiModelMini-BynQ_p25.mjs';
import __nuxt_component_9 from './HoxiHairlineLink-CkLNDE1a.mjs';
import { defineComponent, computed, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHoxiModels, f as formatScore, a as formatPrice, b as formatContext, c as formatTps, d as formatLatency, g as scoreEntries, h as findAlternatives, U as USD_TO_CNY_CHECKED_AT, j as USD_TO_CNY } from './useHoxiModels-BUR4ZXwz.mjs';
import { h as hoxiGateways } from './gateways-tgDca7H5.mjs';
import { h as hoxiPlans } from './plans-D8XOOLan.mjs';
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
import './models-VgTGFaGO.mjs';
import './vendors-sPFB0I2R.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const route = useRoute();
    const { t } = useI18n();
    const { localePath } = useLocaleRouter();
    const { models, findBySlug } = useHoxiModels();
    const slugParts = Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug];
    const slug = String(slugParts.at(-1) || "");
    const found = findBySlug(slug);
    if (!found) {
      throw createError({ statusCode: 404, statusMessage: `Model not found: ${slug}`, fatal: true });
    }
    const model = found;
    const usdToCny = USD_TO_CNY;
    const rateCheckedAt = USD_TO_CNY_CHECKED_AT;
    const { data: dbPlans } = useFetch(
      "/api/hoxi/plans",
      {
        key: "hoxi-model-db-plans",
        default: () => null
      },
      "$ZRj3dg6vi2"
      /* nuxt-injected */
    );
    const { data: dbGateways } = useFetch(
      "/api/hoxi/gateways",
      {
        key: "hoxi-model-db-gateways",
        default: () => null
      },
      "$cSLe8q8bAv"
      /* nuxt-injected */
    );
    const allPlans = computed(() => Array.isArray(dbPlans.value) && dbPlans.value.length > 0 ? dbPlans.value : hoxiPlans);
    const allGateways = computed(() => Array.isArray(dbGateways.value) && dbGateways.value.length > 0 ? dbGateways.value : hoxiGateways);
    const recommendedPlans = computed(() => {
      const plansList = allPlans.value.filter((p) => !p.hidden);
      if (!plansList.length) return [];
      const modelNameLower = model.name.toLowerCase();
      const modelSlugLower = model.slug.toLowerCase();
      const vendorLower = model.vendor.toLowerCase();
      const list = [];
      const addedSlugs = /* @__PURE__ */ new Set();
      const addPlan = (p) => {
        if (p && !addedSlugs.has(p.slug)) {
          list.push(p);
          addedSlugs.add(p.slug);
        }
      };
      for (const p of plansList) {
        if (Array.isArray(p.recommendedModels) && p.recommendedModels.some((m) => {
          const mLower = m.toLowerCase();
          return modelNameLower.includes(mLower) || mLower.includes(modelNameLower) || modelSlugLower.includes(mLower.replace(/\s+/g, "-"));
        })) {
          addPlan(p);
        }
      }
      for (const p of plansList) {
        if (Array.isArray(p.models) && p.models.some((m) => {
          const mLower = m.toLowerCase();
          return modelNameLower.includes(mLower) || mLower.includes(modelNameLower) || modelSlugLower.includes(mLower.replace(/\s+/g, "-"));
        })) {
          addPlan(p);
        }
      }
      if (vendorLower === "google" || modelNameLower.includes("gemini")) {
        addPlan(plansList.find((p) => p.slug === "google-one-ai"));
        addPlan(plansList.find((p) => p.slug === "github-copilot"));
        addPlan(plansList.find((p) => p.slug === "ainode-payg"));
        addPlan(plansList.find((p) => p.slug === "cursor-pro"));
      } else if (vendorLower === "anthropic" || modelNameLower.includes("claude")) {
        addPlan(plansList.find((p) => p.slug === "cursor-pro"));
        addPlan(plansList.find((p) => p.slug === "claude-pro"));
        addPlan(plansList.find((p) => p.slug === "ainode-payg"));
        addPlan(plansList.find((p) => p.slug === "windsurf-pro"));
      } else if (vendorLower === "openai" || modelNameLower.includes("gpt") || modelNameLower.includes("o1") || modelNameLower.includes("o3")) {
        addPlan(plansList.find((p) => p.slug === "chatgpt-plus"));
        addPlan(plansList.find((p) => p.slug === "github-copilot"));
        addPlan(plansList.find((p) => p.slug === "cursor-pro"));
        addPlan(plansList.find((p) => p.slug === "ainode-payg"));
      } else if (vendorLower === "alibaba" || modelNameLower.includes("qwen")) {
        addPlan(plansList.find((p) => p.slug === "aliyun-bailian-plan"));
        addPlan(plansList.find((p) => p.slug === "ainode-payg"));
        addPlan(plansList.find((p) => p.slug === "cursor-pro"));
      } else if (vendorLower === "bytedance" || modelNameLower.includes("doubao")) {
        addPlan(plansList.find((p) => p.slug === "volcengine-ark-plan"));
        addPlan(plansList.find((p) => p.slug === "ainode-payg"));
      } else if (vendorLower === "deepseek" || modelNameLower.includes("deepseek")) {
        addPlan(plansList.find((p) => p.slug === "volcengine-ark-plan"));
        addPlan(plansList.find((p) => p.slug === "aliyun-bailian-plan"));
        addPlan(plansList.find((p) => p.slug === "ainode-payg"));
      } else if (vendorLower === "zhipu" || modelNameLower.includes("glm")) {
        addPlan(plansList.find((p) => p.slug === "zhipu-code-plan"));
        addPlan(plansList.find((p) => p.slug === "ainode-payg"));
      } else if (vendorLower === "moonshot" || modelNameLower.includes("kimi")) {
        addPlan(plansList.find((p) => p.slug === "kimi-code-plan"));
        addPlan(plansList.find((p) => p.slug === "ainode-payg"));
      }
      for (const p of plansList) {
        if (list.length >= 3) break;
        addPlan(p);
      }
      return list.slice(0, 3);
    });
    const recommendedGateways = computed(() => {
      const gwList = allGateways.value.filter((g) => !g.hidden);
      if (!gwList.length) return [];
      const modelNameLower = model.name.toLowerCase();
      const vendorLower = model.vendor.toLowerCase();
      const list = [];
      const addedIds = /* @__PURE__ */ new Set();
      const addGw = (g) => {
        if (g && !addedIds.has(g.id)) {
          list.push(g);
          addedIds.add(g.id);
        }
      };
      for (const g of gwList) {
        if (Array.isArray(g.recommendedModels) && g.recommendedModels.some((m) => modelNameLower.includes(m.toLowerCase()) || m.toLowerCase().includes(modelNameLower))) {
          addGw(g);
        }
      }
      for (const g of gwList) {
        if (Array.isArray(g.models) && g.models.some((m) => modelNameLower.includes(m.toLowerCase()) || m.toLowerCase().includes(modelNameLower))) {
          addGw(g);
        }
      }
      if (vendorLower === "google" || modelNameLower.includes("gemini")) {
        addGw(gwList.find((g) => g.id === "ainode-pro"));
        addGw(gwList.find((g) => g.id === "duiapi"));
        addGw(gwList.find((g) => g.id === "hao-ai"));
      } else if (vendorLower === "anthropic" || modelNameLower.includes("claude")) {
        addGw(gwList.find((g) => g.id === "ainode-pro"));
        addGw(gwList.find((g) => g.id === "claude-35-budget"));
        addGw(gwList.find((g) => g.id === "hao-ai"));
      } else if (vendorLower === "deepseek" || modelNameLower.includes("deepseek")) {
        addGw(gwList.find((g) => g.id === "deepseek-direct"));
        addGw(gwList.find((g) => g.id === "duiapi"));
        addGw(gwList.find((g) => g.id === "ainode-pro"));
      } else if (vendorLower === "alibaba" || modelNameLower.includes("qwen")) {
        addGw(gwList.find((g) => g.id === "qwen-bailian"));
        addGw(gwList.find((g) => g.id === "deepseek-direct"));
        addGw(gwList.find((g) => g.id === "ainode-pro"));
      } else if (vendorLower === "openai" || modelNameLower.includes("gpt")) {
        addGw(gwList.find((g) => g.id === "ainode-pro"));
        addGw(gwList.find((g) => g.id === "duiapi"));
        addGw(gwList.find((g) => g.id === "cun-ai"));
      }
      for (const g of gwList) {
        if (list.length >= 3) break;
        addGw(g);
      }
      return list.slice(0, 3);
    });
    const currencySymbol = model.price.currency === "USD" ? "$" : "\xA5";
    const tags = computed(() => {
      const list = [];
      if (model.reasoning === true) list.push(t("hoxi.model.tags.reasoning"));
      if (model.openWeights === true) list.push(t("hoxi.model.tags.openWeights"));
      const mods = Array.isArray(model.modalities) ? model.modalities : [];
      if (mods.includes("image")) list.push(t("hoxi.model.tags.image"));
      if (mods.includes("audio")) list.push(t("hoxi.model.tags.audio"));
      if (mods.includes("video")) list.push(t("hoxi.model.tags.video"));
      return list;
    });
    const positiveBadges = computed(() => {
      const list = [];
      if (model.isFree) list.push(t("hoxi.model.tags.free"));
      list.push(...model.badges || []);
      return list;
    });
    const stats = computed(() => {
      var _a2, _b, _c, _d;
      return [
        {
          label: t("hoxi.models.columns.overall"),
          value: formatScore(model.scores.overall),
          hint: model.scores.overall === void 0 ? t("hoxi.model.noData") : void 0
        },
        {
          label: t("hoxi.models.columns.blended"),
          value: `\xA5${formatPrice(model.blendedPrice)}`,
          hint: t("hoxi.model.perMillion")
        },
        { label: t("hoxi.models.columns.context"), value: formatContext(model.contextWindow) },
        {
          label: t("hoxi.models.columns.tps"),
          value: formatTps((_a2 = model.perf) == null ? void 0 : _a2.tps),
          hint: ((_b = model.perf) == null ? void 0 : _b.tps) === void 0 ? t("hoxi.model.noData") : t("hoxi.model.tpsUnit")
        },
        {
          label: t("hoxi.models.columns.ttft"),
          value: formatLatency((_c = model.perf) == null ? void 0 : _c.ttft),
          hint: ((_d = model.perf) == null ? void 0 : _d.ttft) === void 0 ? t("hoxi.model.noData") : void 0
        }
      ];
    });
    const scoreRows = computed(() => scoreEntries(model));
    const priceRows = computed(() => {
      const money = (value) => value === void 0 ? "\u2014" : `${currencySymbol}${formatPrice(value)}`;
      const rows = [
        { label: t("hoxi.model.priceInput"), value: money(model.price.input) },
        { label: t("hoxi.model.priceOutput"), value: money(model.price.output) },
        { label: t("hoxi.model.priceCacheRead"), value: money(model.price.cacheRead) },
        { label: t("hoxi.model.priceCacheWrite"), value: money(model.price.cacheWrite) }
      ];
      if (model.maxOutputTokens) {
        rows.push({ label: t("hoxi.model.maxOutput"), value: formatContext(model.maxOutputTokens) });
      }
      return rows;
    });
    const alternatives = computed(() => findAlternatives(model, models.value));
    const modelSeoDescription = computed(() => {
      var _a2, _b;
      const scoreText = ((_a2 = model.scores) == null ? void 0 : _a2.overall) !== void 0 ? `\u7EFC\u5408\u5206 ${formatScore(model.scores.overall)} \u5206\uFF0C` : "";
      const priceText = `\u6DF7\u5408\u4EF7\u7EA6 \xA5${formatPrice(model.blendedPrice)}/M\u3002`;
      return `${model.name} (${((_b = model.vendorInfo) == null ? void 0 : _b.name) || model.vendor}) \u4EF7\u683C\u4E0E\u89C4\u683C\u8BC4\u6D4B\uFF1A${scoreText}${priceText}${model.summary || ""}`.trim();
    });
    useSeoMeta({
      title: () => t("hoxi.model.seoTitle", { name: model.name }),
      description: () => modelSeoDescription.value,
      ogTitle: () => t("hoxi.model.seoTitle", { name: model.name }),
      ogDescription: () => modelSeoDescription.value,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => t("hoxi.model.seoTitle", { name: model.name }),
      twitterDescription: () => modelSeoDescription.value,
      keywords: `${model.name}, ${model.name}\u4EF7\u683C, ${model.name}\u8BC4\u6D4B, ${((_a = model.vendorInfo) == null ? void 0 : _a.name) || model.vendor}, AI\u5927\u6A21\u578B, \u4E0A\u4E0B\u6587\u957F\u5EA6, API\u4E2D\u8F6C`
    });
    useJsonLd("hoxi-model-detail", computed(() => {
      var _a2, _b;
      return [
        {
          "@type": "Product",
          name: model.name,
          description: modelSeoDescription.value,
          brand: { "@type": "Brand", name: ((_a2 = model.vendorInfo) == null ? void 0 : _a2.name) || model.vendor },
          offers: {
            "@type": "Offer",
            priceCurrency: model.price.currency,
            price: model.price.input,
            description: t("hoxi.model.offerDescription"),
            url: localePath(`/models/${model.slug}`)
          },
          ...((_b = model.scores) == null ? void 0 : _b.overall) !== void 0 ? {
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: model.scores.overall,
              bestRating: 100,
              worstRating: 0,
              ratingCount: 1
            }
          } : {}
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "\u9996\u9875", item: localePath("/") },
            { "@type": "ListItem", position: 2, name: t("hoxi.models.title"), item: localePath("/models") },
            { "@type": "ListItem", position: 3, name: model.name, item: localePath(`/models/${model.slug}`) }
          ]
        }
      ];
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_HoxiPageHeader = __nuxt_component_1;
      const _component_HoxiVendorDot = __nuxt_component_1$1;
      const _component_HoxiTag = __nuxt_component_3;
      const _component_HoxiSectionLabel = __nuxt_component_4;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$G;
      const _component_HoxiComment = __nuxt_component_7;
      const _component_HoxiModelMini = __nuxt_component_8;
      const _component_HoxiHairlineLink = __nuxt_component_9;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="py-8 md:py-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiPageHeader, {
              title: unref(model).name,
              subtitle: unref(model).summary
            }, {
              meta: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) {
                  _push3(`<div class="flex flex-wrap items-center gap-2"${_scopeId2}><span class="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-0.5 text-xs text-slate-500 dark:bg-slate-900 dark:text-slate-400"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_HoxiVendorDot, {
                    vendor: unref(model).vendorInfo
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(((_a3 = unref(model).vendorInfo) == null ? void 0 : _a3.nameZh) || unref(model).vendor)}</span><!--[-->`);
                  ssrRenderList(positiveBadges.value, (badge) => {
                    _push3(ssrRenderComponent(_component_HoxiTag, {
                      key: badge,
                      label: badge,
                      tone: "positive"
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--><!--[-->`);
                  ssrRenderList(tags.value, (tag) => {
                    _push3(ssrRenderComponent(_component_HoxiTag, {
                      key: tag,
                      label: tag
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                      createVNode("span", { class: "inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-0.5 text-xs text-slate-500 dark:bg-slate-900 dark:text-slate-400" }, [
                        createVNode(_component_HoxiVendorDot, {
                          vendor: unref(model).vendorInfo
                        }, null, 8, ["vendor"]),
                        createTextVNode(" " + toDisplayString(((_b2 = unref(model).vendorInfo) == null ? void 0 : _b2.nameZh) || unref(model).vendor), 1)
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(positiveBadges.value, (badge) => {
                        return openBlock(), createBlock(_component_HoxiTag, {
                          key: badge,
                          label: badge,
                          tone: "positive"
                        }, null, 8, ["label"]);
                      }), 128)),
                      (openBlock(true), createBlock(Fragment, null, renderList(tags.value, (tag) => {
                        return openBlock(), createBlock(_component_HoxiTag, {
                          key: tag,
                          label: tag
                        }, null, 8, ["label"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<section class="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-5"${_scopeId}><!--[-->`);
            ssrRenderList(stats.value, (stat) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(stat.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(stat.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<p class="mt-1 text-lg tabular-nums text-slate-900 dark:text-white font-semibold"${_scopeId}>${ssrInterpolate(stat.value)}</p>`);
              if (stat.hint) {
                _push2(`<p class="mt-1 text-xs leading-5 text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(stat.hint)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></section><div class="mt-12 grid gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_300px]"${_scopeId}><div class="min-w-0 space-y-10 md:space-y-12"${_scopeId}><section${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("hoxi.model.scores"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hoxi.model.scores")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (scoreRows.value.length) {
              _push2(`<dl class="mt-4 max-w-[520px] space-y-3"${_scopeId}><!--[-->`);
              ssrRenderList(scoreRows.value, (row) => {
                _push2(`<div class="flex items-center gap-4"${_scopeId}><dt class="w-20 shrink-0 text-sm text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t(`hoxi.model.scoreDimensions.${row.key}`))}</dt><dd class="flex flex-1 items-center gap-3"${_scopeId}><span class="h-1 flex-1 rounded-full bg-slate-100 dark:bg-slate-800"${_scopeId}><span class="block h-1 rounded-full bg-blue-500/70" style="${ssrRenderStyle({ width: `${Math.round(row.value)}%` })}"${_scopeId}></span></span><span class="w-8 shrink-0 text-right text-sm tabular-nums text-slate-700 dark:text-slate-300 font-medium"${_scopeId}>${ssrInterpolate(Math.round(row.value))}</span></dd></div>`);
              });
              _push2(`<!--]--></dl>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="mt-4 max-w-[720px] text-xs leading-6 text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(scoreRows.value.length ? _ctx.$t("hoxi.model.scoreNote") : _ctx.$t("hoxi.model.scoreMissing"))} `);
            if (unref(model).benchmarkVariant) {
              _push2(`<!--[-->${ssrInterpolate(_ctx.$t("hoxi.model.variantNote", { variant: unref(model).benchmarkVariant }))}<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</p></section><section${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("hoxi.model.pricing"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hoxi.model.pricing")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-4 overflow-x-auto"${_scopeId}><table class="w-full min-w-[420px] max-w-[560px] border-collapse text-sm"${_scopeId}><thead${_scopeId}><tr class="border-b border-slate-200 dark:border-slate-800"${_scopeId}><th scope="col" class="py-2 pr-4 text-left text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.model.priceItem"))}</th><th scope="col" class="py-2 pl-4 text-right text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.model.priceOfficial"))}</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(priceRows.value, (row) => {
              _push2(`<tr class="border-b border-slate-100 dark:border-slate-800/80"${_scopeId}><th scope="row" class="py-3 pr-4 text-left font-normal text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(row.label)}</th><td class="py-3 pl-4 text-right tabular-nums whitespace-nowrap text-slate-700 dark:text-slate-300 font-medium"${_scopeId}>${ssrInterpolate(row.value)}</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div><p class="mt-3 max-w-[720px] text-xs leading-6 text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.model.priceNote", { blended: unref(formatPrice)(unref(model).blendedPrice), rate: unref(usdToCny), date: unref(rateCheckedAt) }))}</p></section>`);
            if ((_a2 = unref(model).scenes) == null ? void 0 : _a2.length) {
              _push2(`<section${_scopeId}>`);
              _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("hoxi.model.scenes"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.model.scenes")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="mt-4 flex flex-wrap gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(model).scenes, (scene) => {
                _push2(ssrRenderComponent(_component_HoxiTag, {
                  key: scene,
                  label: scene
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></section>`);
            } else {
              _push2(`<!---->`);
            }
            if ((_b = unref(model).highlights) == null ? void 0 : _b.length) {
              _push2(`<section${_scopeId}>`);
              _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("hoxi.model.highlights"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.model.highlights")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<ul class="mt-4 max-w-[720px] space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300"${_scopeId}><!--[-->`);
              ssrRenderList(unref(model).highlights, (item) => {
                _push2(`<li${_scopeId}>${ssrInterpolate(item)}</li>`);
              });
              _push2(`<!--]--></ul></section>`);
            } else {
              _push2(`<!---->`);
            }
            if ((_c = unref(model).caveats) == null ? void 0 : _c.length) {
              _push2(`<section${_scopeId}>`);
              _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("hoxi.model.caveats"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.model.caveats")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<ul class="mt-4 max-w-[720px] space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300"${_scopeId}><!--[-->`);
              ssrRenderList(unref(model).caveats, (item) => {
                _push2(`<li${_scopeId}>${ssrInterpolate(item)}</li>`);
              });
              _push2(`<!--]--></ul></section>`);
            } else {
              _push2(`<!---->`);
            }
            if (recommendedPlans.value.length || recommendedGateways.value.length) {
              _push2(`<section class="space-y-6"${_scopeId}>`);
              if (recommendedPlans.value.length) {
                _push2(`<div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 md:p-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`\u76F8\u5173\u7F16\u7A0B\u5957\u9910`);
                    } else {
                      return [
                        createTextVNode("\u76F8\u5173\u7F16\u7A0B\u5957\u9910")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: unref(localePath)("/coding-plans"),
                  class: "text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors flex items-center gap-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>\u67E5\u770B\u5168\u91CF\u5BF9\u6BD4</span><span${_scopeId2}>\u2192</span>`);
                    } else {
                      return [
                        createVNode("span", null, "\u67E5\u770B\u5168\u91CF\u5BF9\u6BD4"),
                        createVNode("span", null, "\u2192")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
                ssrRenderList(recommendedPlans.value, (plan) => {
                  var _a3;
                  _push2(`<div class="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 flex flex-col justify-between"${_scopeId}><div${_scopeId}><div class="flex items-start justify-between gap-2"${_scopeId}><div class="min-w-0"${_scopeId}><div class="flex items-center gap-1.5 font-semibold text-xs text-slate-900 dark:text-white"${_scopeId}><span class="${ssrRenderClass([plan.vendorColor, "inline-block h-2 w-2 shrink-0 rounded-full"])}"${_scopeId}></span><span class="truncate"${_scopeId}>${ssrInterpolate(plan.name)}</span></div><div class="mt-1 text-[11px] text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(plan.region === "domestic" ? "\u56FD\u5185" : "\u56FD\u5916")} \xB7 ${ssrInterpolate(plan.priceLabel)}</div></div>`);
                  _push2(ssrRenderComponent(_component_HoxiTag, { tone: "info" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(plan.type === "token_plan" ? "\u6309\u91CF\u5305" : "\u8BA2\u9605")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(plan.type === "token_plan" ? "\u6309\u91CF\u5305" : "\u8BA2\u9605"), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div><p class="mt-2.5 text-xs text-slate-600 dark:text-slate-400 leading-5 line-clamp-2"${_scopeId}>${ssrInterpolate(plan.quotaNote)}</p>`);
                  if ((_a3 = plan.highlights) == null ? void 0 : _a3.length) {
                    _push2(`<div class="mt-2 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1"${_scopeId}><span class="text-emerald-600 dark:text-emerald-400 font-bold"${_scopeId}>\u2713</span><span class="truncate"${_scopeId}>${ssrInterpolate(plan.highlights[0])}</span></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: unref(localePath)("/coding-plans"),
                    class: "text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` \u5957\u9910\u8BE6\u60C5 \u2192 `);
                      } else {
                        return [
                          createTextVNode(" \u5957\u9910\u8BE6\u60C5 \u2192 ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  if (plan.officialUrl) {
                    _push2(`<a${ssrRenderAttr("href", plan.officialUrl)} target="_blank" rel="noopener nofollow" class="text-[11px] text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors dark:text-slate-500"${_scopeId}> \u5B98\u7F51\u76F4\u8FBE \u2197 </a>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div></div>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (recommendedGateways.value.length) {
                _push2(`<div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 md:p-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`\u76F8\u5173\u4E2D\u8F6C\u7AD9`);
                    } else {
                      return [
                        createTextVNode("\u76F8\u5173\u4E2D\u8F6C\u7AD9")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: unref(localePath)("/gateways"),
                  class: "text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline transition-colors flex items-center gap-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>\u67E5\u770B\u4E2D\u8F6C\u7AD9</span><span${_scopeId2}>\u2192</span>`);
                    } else {
                      return [
                        createVNode("span", null, "\u67E5\u770B\u4E2D\u8F6C\u7AD9"),
                        createVNode("span", null, "\u2192")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
                ssrRenderList(recommendedGateways.value, (gw) => {
                  var _a3;
                  _push2(`<div class="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 flex flex-col justify-between"${_scopeId}><div${_scopeId}><div class="flex items-start justify-between gap-2"${_scopeId}><div class="min-w-0"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: unref(localePath)(`/gateways/${gw.id}`),
                    class: "flex items-center gap-1.5 font-semibold text-xs text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: "ph:lightning-bold",
                          class: "w-3.5 h-3.5 text-blue-500"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span class="truncate"${_scopeId2}>${ssrInterpolate(gw.name)}</span>`);
                      } else {
                        return [
                          createVNode(_component_UIcon, {
                            name: "ph:lightning-bold",
                            class: "w-3.5 h-3.5 text-blue-500"
                          }),
                          createVNode("span", { class: "truncate" }, toDisplayString(gw.name), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`<div class="mt-1 text-[11px] text-slate-400 dark:text-slate-500"${_scopeId}> \u5EF6\u8FDF ${ssrInterpolate(gw.latencyMs)}ms \xB7 \u5728\u7EBF\u7387 ${ssrInterpolate(gw.uptime)}</div></div>`);
                  _push2(ssrRenderComponent(_component_HoxiTag, { tone: "positive" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(gw.savingsPercent ? `\u7701 ${gw.savingsPercent}%` : "\u4E13\u7EBF")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(gw.savingsPercent ? `\u7701 ${gw.savingsPercent}%` : "\u4E13\u7EBF"), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div><div class="mt-2.5 flex items-baseline gap-2"${_scopeId}><span class="text-sm font-bold text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(gw.priceLabel)}</span><span class="text-[11px] text-slate-400 line-through dark:text-slate-500"${_scopeId}>\u5B98\u65B9\u53C2\u8003 \xA5${ssrInterpolate(gw.officialPriceCNY)}/M</span></div>`);
                  if ((_a3 = gw.features) == null ? void 0 : _a3.length) {
                    _push2(`<div class="mt-2 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1"${_scopeId}><span class="text-emerald-600 dark:text-emerald-400 font-bold"${_scopeId}>\u2713</span><span class="truncate"${_scopeId}>${ssrInterpolate(gw.features[0])}</span></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: unref(localePath)(`/gateways/${gw.id}`),
                    class: "text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline transition-colors"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` \u8BE6\u60C5\u4E0E\u914D\u7F6E \u2192 `);
                      } else {
                        return [
                          createTextVNode(" \u8BE6\u60C5\u4E0E\u914D\u7F6E \u2192 ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  if (gw.url) {
                    _push2(`<a${ssrRenderAttr("href", gw.url)} target="_blank" rel="noopener nofollow" class="text-[11px] text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors dark:text-slate-500"${_scopeId}> \u524D\u5F80\u7AD9\u70B9 \u2197 </a>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div></div>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_HoxiComment, {
              "target-type": "model",
              "target-id": unref(model).slug
            }, null, _parent2, _scopeId));
            _push2(`</div><aside class="space-y-10 lg:sticky lg:top-24 lg:self-start"${_scopeId}>`);
            if (alternatives.value.stronger.length) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("hoxi.model.alternatives.stronger"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.model.alternatives.stronger")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="mt-4 space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(alternatives.value.stronger, (item) => {
                _push2(ssrRenderComponent(_component_HoxiModelMini, {
                  key: item.slug,
                  model: item
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (alternatives.value.cheaper.length) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("hoxi.model.alternatives.cheaper"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.model.alternatives.cheaper")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="mt-4 space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(alternatives.value.cheaper, (item) => {
                _push2(ssrRenderComponent(_component_HoxiModelMini, {
                  key: item.slug,
                  model: item
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (alternatives.value.priceNeighbors.length) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("hoxi.model.alternatives.neighbors"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.model.alternatives.neighbors")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p class="mt-2 text-xs leading-6 text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.model.alternatives.neighborsNote"))}</p><div class="mt-4 space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(alternatives.value.priceNeighbors, (item) => {
                _push2(ssrRenderComponent(_component_HoxiModelMini, {
                  key: item.slug,
                  model: item
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-t border-slate-100 dark:border-slate-800 pt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("hoxi.common.source"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hoxi.common.source")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<ul class="mt-4 space-y-2 text-xs leading-6 text-slate-500 dark:text-slate-400"${_scopeId}><!--[-->`);
            ssrRenderList(unref(model).sources, (item) => {
              _push2(`<li${_scopeId}><a${ssrRenderAttr("href", item.url)} target="_blank" rel="noopener nofollow" class="text-blue-600 dark:text-blue-400 underline decoration-slate-200 dark:decoration-slate-700 underline-offset-4 transition-colors hover:text-blue-500"${_scopeId}>${ssrInterpolate(item.label)}</a><span class="text-slate-400 dark:text-slate-500"${_scopeId}>\uFF08${ssrInterpolate(item.checkedAt)}\uFF09</span></li>`);
            });
            _push2(`<!--]--></ul><p class="mt-3 text-xs text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.common.updatedAt", { date: unref(model).updatedAt }))}</p></div><div class="border-t border-slate-100 dark:border-slate-800 pt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiHairlineLink, { to: "/models" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("hoxi.model.backToList"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hoxi.model.backToList")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></aside></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-8 md:py-16" }, [
                createVNode(_component_HoxiPageHeader, {
                  title: unref(model).name,
                  subtitle: unref(model).summary
                }, {
                  meta: withCtx(() => {
                    var _a3;
                    return [
                      createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                        createVNode("span", { class: "inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-0.5 text-xs text-slate-500 dark:bg-slate-900 dark:text-slate-400" }, [
                          createVNode(_component_HoxiVendorDot, {
                            vendor: unref(model).vendorInfo
                          }, null, 8, ["vendor"]),
                          createTextVNode(" " + toDisplayString(((_a3 = unref(model).vendorInfo) == null ? void 0 : _a3.nameZh) || unref(model).vendor), 1)
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(positiveBadges.value, (badge) => {
                          return openBlock(), createBlock(_component_HoxiTag, {
                            key: badge,
                            label: badge,
                            tone: "positive"
                          }, null, 8, ["label"]);
                        }), 128)),
                        (openBlock(true), createBlock(Fragment, null, renderList(tags.value, (tag) => {
                          return openBlock(), createBlock(_component_HoxiTag, {
                            key: tag,
                            label: tag
                          }, null, 8, ["label"]);
                        }), 128))
                      ])
                    ];
                  }),
                  _: 1
                }, 8, ["title", "subtitle"]),
                createVNode("section", { class: "mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-5" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(stats.value, (stat) => {
                    return openBlock(), createBlock("div", {
                      key: stat.label
                    }, [
                      createVNode(_component_HoxiSectionLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(stat.label), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("p", { class: "mt-1 text-lg tabular-nums text-slate-900 dark:text-white font-semibold" }, toDisplayString(stat.value), 1),
                      stat.hint ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mt-1 text-xs leading-5 text-slate-400 dark:text-slate-500"
                      }, toDisplayString(stat.hint), 1)) : createCommentVNode("", true)
                    ]);
                  }), 128))
                ]),
                createVNode("div", { class: "mt-12 grid gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_300px]" }, [
                  createVNode("div", { class: "min-w-0 space-y-10 md:space-y-12" }, [
                    createVNode("section", null, [
                      createVNode(_component_HoxiSectionLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.model.scores")), 1)
                        ]),
                        _: 1
                      }),
                      scoreRows.value.length ? (openBlock(), createBlock("dl", {
                        key: 0,
                        class: "mt-4 max-w-[520px] space-y-3"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(scoreRows.value, (row) => {
                          return openBlock(), createBlock("div", {
                            key: row.key,
                            class: "flex items-center gap-4"
                          }, [
                            createVNode("dt", { class: "w-20 shrink-0 text-sm text-slate-500 dark:text-slate-400" }, toDisplayString(_ctx.$t(`hoxi.model.scoreDimensions.${row.key}`)), 1),
                            createVNode("dd", { class: "flex flex-1 items-center gap-3" }, [
                              createVNode("span", { class: "h-1 flex-1 rounded-full bg-slate-100 dark:bg-slate-800" }, [
                                createVNode("span", {
                                  class: "block h-1 rounded-full bg-blue-500/70",
                                  style: { width: `${Math.round(row.value)}%` }
                                }, null, 4)
                              ]),
                              createVNode("span", { class: "w-8 shrink-0 text-right text-sm tabular-nums text-slate-700 dark:text-slate-300 font-medium" }, toDisplayString(Math.round(row.value)), 1)
                            ])
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true),
                      createVNode("p", { class: "mt-4 max-w-[720px] text-xs leading-6 text-slate-400 dark:text-slate-500" }, [
                        createTextVNode(toDisplayString(scoreRows.value.length ? _ctx.$t("hoxi.model.scoreNote") : _ctx.$t("hoxi.model.scoreMissing")) + " ", 1),
                        unref(model).benchmarkVariant ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.model.variantNote", { variant: unref(model).benchmarkVariant })), 1)
                        ], 64)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("section", null, [
                      createVNode(_component_HoxiSectionLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.model.pricing")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "mt-4 overflow-x-auto" }, [
                        createVNode("table", { class: "w-full min-w-[420px] max-w-[560px] border-collapse text-sm" }, [
                          createVNode("thead", null, [
                            createVNode("tr", { class: "border-b border-slate-200 dark:border-slate-800" }, [
                              createVNode("th", {
                                scope: "col",
                                class: "py-2 pr-4 text-left text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500"
                              }, toDisplayString(_ctx.$t("hoxi.model.priceItem")), 1),
                              createVNode("th", {
                                scope: "col",
                                class: "py-2 pl-4 text-right text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500"
                              }, toDisplayString(_ctx.$t("hoxi.model.priceOfficial")), 1)
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(priceRows.value, (row) => {
                              return openBlock(), createBlock("tr", {
                                key: row.label,
                                class: "border-b border-slate-100 dark:border-slate-800/80"
                              }, [
                                createVNode("th", {
                                  scope: "row",
                                  class: "py-3 pr-4 text-left font-normal text-slate-600 dark:text-slate-400"
                                }, toDisplayString(row.label), 1),
                                createVNode("td", { class: "py-3 pl-4 text-right tabular-nums whitespace-nowrap text-slate-700 dark:text-slate-300 font-medium" }, toDisplayString(row.value), 1)
                              ]);
                            }), 128))
                          ])
                        ])
                      ]),
                      createVNode("p", { class: "mt-3 max-w-[720px] text-xs leading-6 text-slate-400 dark:text-slate-500" }, toDisplayString(_ctx.$t("hoxi.model.priceNote", { blended: unref(formatPrice)(unref(model).blendedPrice), rate: unref(usdToCny), date: unref(rateCheckedAt) })), 1)
                    ]),
                    ((_d = unref(model).scenes) == null ? void 0 : _d.length) ? (openBlock(), createBlock("section", { key: 0 }, [
                      createVNode(_component_HoxiSectionLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.model.scenes")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "mt-4 flex flex-wrap gap-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(model).scenes, (scene) => {
                          return openBlock(), createBlock(_component_HoxiTag, {
                            key: scene,
                            label: scene
                          }, null, 8, ["label"]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    ((_e = unref(model).highlights) == null ? void 0 : _e.length) ? (openBlock(), createBlock("section", { key: 1 }, [
                      createVNode(_component_HoxiSectionLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.model.highlights")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("ul", { class: "mt-4 max-w-[720px] space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(model).highlights, (item) => {
                          return openBlock(), createBlock("li", { key: item }, toDisplayString(item), 1);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    ((_f = unref(model).caveats) == null ? void 0 : _f.length) ? (openBlock(), createBlock("section", { key: 2 }, [
                      createVNode(_component_HoxiSectionLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.model.caveats")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("ul", { class: "mt-4 max-w-[720px] space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(model).caveats, (item) => {
                          return openBlock(), createBlock("li", { key: item }, toDisplayString(item), 1);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    recommendedPlans.value.length || recommendedGateways.value.length ? (openBlock(), createBlock("section", {
                      key: 3,
                      class: "space-y-6"
                    }, [
                      recommendedPlans.value.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 md:p-6"
                      }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode(_component_HoxiSectionLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("\u76F8\u5173\u7F16\u7A0B\u5957\u9910")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_NuxtLink, {
                            to: unref(localePath)("/coding-plans"),
                            class: "text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors flex items-center gap-1"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "\u67E5\u770B\u5168\u91CF\u5BF9\u6BD4"),
                              createVNode("span", null, "\u2192")
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ]),
                        createVNode("div", { class: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(recommendedPlans.value, (plan) => {
                            var _a3;
                            return openBlock(), createBlock("div", {
                              key: plan.slug,
                              class: "rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 flex flex-col justify-between"
                            }, [
                              createVNode("div", null, [
                                createVNode("div", { class: "flex items-start justify-between gap-2" }, [
                                  createVNode("div", { class: "min-w-0" }, [
                                    createVNode("div", { class: "flex items-center gap-1.5 font-semibold text-xs text-slate-900 dark:text-white" }, [
                                      createVNode("span", {
                                        class: ["inline-block h-2 w-2 shrink-0 rounded-full", plan.vendorColor]
                                      }, null, 2),
                                      createVNode("span", { class: "truncate" }, toDisplayString(plan.name), 1)
                                    ]),
                                    createVNode("div", { class: "mt-1 text-[11px] text-slate-400 dark:text-slate-500" }, toDisplayString(plan.region === "domestic" ? "\u56FD\u5185" : "\u56FD\u5916") + " \xB7 " + toDisplayString(plan.priceLabel), 1)
                                  ]),
                                  createVNode(_component_HoxiTag, { tone: "info" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(plan.type === "token_plan" ? "\u6309\u91CF\u5305" : "\u8BA2\u9605"), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("p", { class: "mt-2.5 text-xs text-slate-600 dark:text-slate-400 leading-5 line-clamp-2" }, toDisplayString(plan.quotaNote), 1),
                                ((_a3 = plan.highlights) == null ? void 0 : _a3.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "mt-2 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1"
                                }, [
                                  createVNode("span", { class: "text-emerald-600 dark:text-emerald-400 font-bold" }, "\u2713"),
                                  createVNode("span", { class: "truncate" }, toDisplayString(plan.highlights[0]), 1)
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between" }, [
                                createVNode(_component_NuxtLink, {
                                  to: unref(localePath)("/coding-plans"),
                                  class: "text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u5957\u9910\u8BE6\u60C5 \u2192 ")
                                  ]),
                                  _: 1
                                }, 8, ["to"]),
                                plan.officialUrl ? (openBlock(), createBlock("a", {
                                  key: 0,
                                  href: plan.officialUrl,
                                  target: "_blank",
                                  rel: "noopener nofollow",
                                  class: "text-[11px] text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors dark:text-slate-500"
                                }, " \u5B98\u7F51\u76F4\u8FBE \u2197 ", 8, ["href"])) : createCommentVNode("", true)
                              ])
                            ]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true),
                      recommendedGateways.value.length ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 md:p-6"
                      }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode(_component_HoxiSectionLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("\u76F8\u5173\u4E2D\u8F6C\u7AD9")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_NuxtLink, {
                            to: unref(localePath)("/gateways"),
                            class: "text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline transition-colors flex items-center gap-1"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "\u67E5\u770B\u4E2D\u8F6C\u7AD9"),
                              createVNode("span", null, "\u2192")
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ]),
                        createVNode("div", { class: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(recommendedGateways.value, (gw) => {
                            var _a3;
                            return openBlock(), createBlock("div", {
                              key: gw.id,
                              class: "rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 flex flex-col justify-between"
                            }, [
                              createVNode("div", null, [
                                createVNode("div", { class: "flex items-start justify-between gap-2" }, [
                                  createVNode("div", { class: "min-w-0" }, [
                                    createVNode(_component_NuxtLink, {
                                      to: unref(localePath)(`/gateways/${gw.id}`),
                                      class: "flex items-center gap-1.5 font-semibold text-xs text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UIcon, {
                                          name: "ph:lightning-bold",
                                          class: "w-3.5 h-3.5 text-blue-500"
                                        }),
                                        createVNode("span", { class: "truncate" }, toDisplayString(gw.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]),
                                    createVNode("div", { class: "mt-1 text-[11px] text-slate-400 dark:text-slate-500" }, " \u5EF6\u8FDF " + toDisplayString(gw.latencyMs) + "ms \xB7 \u5728\u7EBF\u7387 " + toDisplayString(gw.uptime), 1)
                                  ]),
                                  createVNode(_component_HoxiTag, { tone: "positive" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(gw.savingsPercent ? `\u7701 ${gw.savingsPercent}%` : "\u4E13\u7EBF"), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("div", { class: "mt-2.5 flex items-baseline gap-2" }, [
                                  createVNode("span", { class: "text-sm font-bold text-slate-900 dark:text-white" }, toDisplayString(gw.priceLabel), 1),
                                  createVNode("span", { class: "text-[11px] text-slate-400 line-through dark:text-slate-500" }, "\u5B98\u65B9\u53C2\u8003 \xA5" + toDisplayString(gw.officialPriceCNY) + "/M", 1)
                                ]),
                                ((_a3 = gw.features) == null ? void 0 : _a3.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "mt-2 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1"
                                }, [
                                  createVNode("span", { class: "text-emerald-600 dark:text-emerald-400 font-bold" }, "\u2713"),
                                  createVNode("span", { class: "truncate" }, toDisplayString(gw.features[0]), 1)
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between" }, [
                                createVNode(_component_NuxtLink, {
                                  to: unref(localePath)(`/gateways/${gw.id}`),
                                  class: "text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline transition-colors"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u8BE6\u60C5\u4E0E\u914D\u7F6E \u2192 ")
                                  ]),
                                  _: 1
                                }, 8, ["to"]),
                                gw.url ? (openBlock(), createBlock("a", {
                                  key: 0,
                                  href: gw.url,
                                  target: "_blank",
                                  rel: "noopener nofollow",
                                  class: "text-[11px] text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors dark:text-slate-500"
                                }, " \u524D\u5F80\u7AD9\u70B9 \u2197 ", 8, ["href"])) : createCommentVNode("", true)
                              ])
                            ]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    createVNode(_component_HoxiComment, {
                      "target-type": "model",
                      "target-id": unref(model).slug
                    }, null, 8, ["target-id"])
                  ]),
                  createVNode("aside", { class: "space-y-10 lg:sticky lg:top-24 lg:self-start" }, [
                    alternatives.value.stronger.length ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(_component_HoxiSectionLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.model.alternatives.stronger")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "mt-4 space-y-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(alternatives.value.stronger, (item) => {
                          return openBlock(), createBlock(_component_HoxiModelMini, {
                            key: item.slug,
                            model: item
                          }, null, 8, ["model"]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    alternatives.value.cheaper.length ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(_component_HoxiSectionLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.model.alternatives.cheaper")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "mt-4 space-y-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(alternatives.value.cheaper, (item) => {
                          return openBlock(), createBlock(_component_HoxiModelMini, {
                            key: item.slug,
                            model: item
                          }, null, 8, ["model"]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    alternatives.value.priceNeighbors.length ? (openBlock(), createBlock("div", { key: 2 }, [
                      createVNode(_component_HoxiSectionLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.model.alternatives.neighbors")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "mt-2 text-xs leading-6 text-slate-400 dark:text-slate-500" }, toDisplayString(_ctx.$t("hoxi.model.alternatives.neighborsNote")), 1),
                      createVNode("div", { class: "mt-4 space-y-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(alternatives.value.priceNeighbors, (item) => {
                          return openBlock(), createBlock(_component_HoxiModelMini, {
                            key: item.slug,
                            model: item
                          }, null, 8, ["model"]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "border-t border-slate-100 dark:border-slate-800 pt-8" }, [
                      createVNode(_component_HoxiSectionLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.common.source")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("ul", { class: "mt-4 space-y-2 text-xs leading-6 text-slate-500 dark:text-slate-400" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(model).sources, (item) => {
                          return openBlock(), createBlock("li", {
                            key: item.url
                          }, [
                            createVNode("a", {
                              href: item.url,
                              target: "_blank",
                              rel: "noopener nofollow",
                              class: "text-blue-600 dark:text-blue-400 underline decoration-slate-200 dark:decoration-slate-700 underline-offset-4 transition-colors hover:text-blue-500"
                            }, toDisplayString(item.label), 9, ["href"]),
                            createVNode("span", { class: "text-slate-400 dark:text-slate-500" }, "\uFF08" + toDisplayString(item.checkedAt) + "\uFF09", 1)
                          ]);
                        }), 128))
                      ]),
                      createVNode("p", { class: "mt-3 text-xs text-slate-400 dark:text-slate-500" }, toDisplayString(_ctx.$t("hoxi.common.updatedAt", { date: unref(model).updatedAt })), 1)
                    ]),
                    createVNode("div", { class: "border-t border-slate-100 dark:border-slate-800 pt-8" }, [
                      createVNode(_component_HoxiHairlineLink, { to: "/models" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.model.backToList")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/models/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
