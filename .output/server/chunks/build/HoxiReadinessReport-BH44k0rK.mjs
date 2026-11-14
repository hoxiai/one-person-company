import { u as useI18n$1, E as useLocaleRouter, j as _sfc_main$Z, P as __nuxt_component_3$3 } from './server.mjs';
import __nuxt_component_2 from './HoxiReadinessRadar-Bkw4--UY.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { u as useHoxiCommunity } from './useHoxiCommunity-CS-gsMMP.mjs';
import { r as resolveReadinessHash } from './readinessHash-D0DMxJPv.mjs';
import '../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
import 'zod';
import 'crypto';
import 'fs';
import 'path';
import 'node:fs';
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
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
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
  __name: "HoxiReadinessReport",
  __ssrInlineRender: true,
  props: {
    result: {},
    hash: {},
    isEvaluating: { type: Boolean },
    history: {},
    activeHistoryId: {},
    uiCopy: {}
  },
  emits: ["restart", "select-history"],
  setup(__props) {
    const props = __props;
    const { t, locale } = useI18n$1();
    const { localePath } = useLocaleRouter();
    useHoxiCommunity();
    const copied = ref(false);
    const reportHash = computed(() => {
      return props.hash || props.result.hash || resolveReadinessHash({
        id: props.activeHistoryId,
        role: props.result.role,
        scores: props.result.dimensionMap
      });
    });
    computed(() => {
      const path = reportHash.value ? localePath(`/readiness/${reportHash.value}`) : localePath("/readiness");
      const origin = "https://hoxi.ai";
      return `${origin}${path}`;
    });
    const formatDate = (iso) => {
      if (!iso) return "";
      return iso.replace("T", " ").slice(0, 16);
    };
    const scoreDelta = (idx) => {
      const list = props.history || [];
      const curr = list[idx];
      const prev = list[idx + 1];
      if (!curr || !prev) return null;
      return curr.overallScore - prev.overallScore;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_UIcon = _sfc_main$Z;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_HoxiReadinessRadar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8 md:space-y-12" }, _attrs))}><div class="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-4 sm:p-6 md:p-8 shadow-xs relative overflow-hidden dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30"><div class="space-y-4"><div class="flex flex-wrap items-center justify-between gap-3"><div class="flex flex-wrap items-center gap-2"><span class="${ssrRenderClass([__props.result.tier.badgeColor, "px-2.5 py-0.5 rounded-full text-xs font-semibold border"])}">${ssrInterpolate(__props.result.tier.title)}</span><span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-800 shadow-2xs dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: __props.result.roleMeta.icon,
        class: ["w-3.5 h-3.5", __props.result.roleMeta.color]
      }, null, _parent));
      _push(`<span>${ssrInterpolate(__props.result.roleMeta.name)}</span></span><span class="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-800">${ssrInterpolate(__props.result.archetype.name)}</span>`);
      if (reportHash.value) {
        _push(`<span class="px-2 py-0.5 rounded-full text-[11px] font-mono text-blue-600 bg-blue-50/80 border border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800"> #${ssrInterpolate(reportHash.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="button" class="${ssrRenderClass([copied.value ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300" : "border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500", "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors cursor-pointer shrink-0"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: copied.value ? "ph:check-bold" : "ph:share-network-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copied.value ? _ctx.$t("hoxi.readiness.copiedBtn") : _ctx.$t("hoxi.readiness.copyBtn"))}</span></button></div><div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"><div class="flex items-baseline gap-1"><span class="text-4xl sm:text-5xl md:text-6xl font-black font-mono tabular-nums text-slate-900 tracking-tight dark:text-white">${ssrInterpolate(__props.result.overallScore)}</span><span class="text-base sm:text-lg font-medium text-slate-400 font-mono dark:text-slate-500">/ 100</span></div><div><div class="text-sm sm:text-base md:text-lg font-semibold text-slate-800 dark:text-slate-200">${ssrInterpolate(__props.result.tier.subtitle)}</div>`);
      if (__props.result.percentile !== null) {
        _push(`<div class="text-xs text-blue-600 font-medium font-mono mt-0.5 dark:text-blue-400">${ssrInterpolate(_ctx.$t("hoxi.readiness.percentilePrefix"))} <strong class="tabular-nums font-bold">${ssrInterpolate(__props.result.percentile)}%</strong>${ssrInterpolate(_ctx.$t("hoxi.readiness.percentileSuffix"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><p class="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed dark:text-slate-300">${ssrInterpolate(((_a = __props.result.aiEvaluation) == null ? void 0 : _a.summary) || __props.result.tier.summary)}</p><div class="pt-3 border-t border-slate-200/80 space-y-2 text-xs sm:text-sm text-slate-700 bg-white/80 rounded-xl p-3.5 border border-slate-100 dark:border-slate-800/80 dark:text-slate-300 dark:bg-slate-900/80"><div class="flex items-start gap-2.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:sparkle-bold",
        class: "w-4 sm:w-5 h-4 sm:h-5 text-blue-500 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<div class="leading-relaxed"><strong class="text-slate-900 font-semibold dark:text-white">${ssrInterpolate(__props.isEvaluating ? ((_b = __props.uiCopy) == null ? void 0 : _b.aiEvaluating) || _ctx.$t("hoxi.readiness.adviceLabel") : ((_c = __props.uiCopy) == null ? void 0 : _c.aiBadge) || _ctx.$t("hoxi.readiness.adviceLabel"))}\uFF1A </strong><span class="ml-1">${ssrInterpolate(((_d = __props.result.aiEvaluation) == null ? void 0 : _d.blindspotAnalysis) || __props.result.tier.advice)}</span></div></div></div></div></div>`);
      if (__props.result.matchedProjects && __props.result.matchedProjects.length > 0) {
        _push(`<section class="rounded-3xl border border-blue-200/90 bg-gradient-to-br from-blue-50/40 via-white to-slate-50/60 p-4 sm:p-6 md:p-8 space-y-6 shadow-xs dark:border-blue-900/70 dark:from-blue-950/25 dark:via-slate-900 dark:to-slate-950"><div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 pb-4 dark:border-slate-800"><div class="space-y-1.5"><div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-2xs">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:target-bold",
          class: "w-3.5 h-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.readiness.matchBadge"))}</span></div><h3 class="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white">${ssrInterpolate(_ctx.$t("hoxi.readiness.matchHeading"))}</h3><p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">${ssrInterpolate(_ctx.$t("hoxi.readiness.matchSubheading"))}</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/projects"),
          class: "inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 shrink-0 dark:text-blue-400 dark:hover:text-blue-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.matchViewAll"))}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-right-bold",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, toDisplayString(_ctx.$t("hoxi.readiness.matchViewAll")), 1),
                createVNode(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "w-4 h-4"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="grid gap-5 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(__props.result.matchedProjects, (item, idx) => {
          _push(`<article class="${ssrRenderClass([idx === 0 ? "border-blue-400 ring-1 ring-blue-400/30 dark:border-blue-500/80" : "border-slate-200 dark:border-slate-800", "rounded-2xl border bg-white p-5 flex flex-col justify-between space-y-4 transition-all hover:shadow-md dark:bg-slate-900"])}"><div class="space-y-3.5"><div class="flex items-center justify-between gap-2"><span class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">${ssrInterpolate(item.project.categoryLabel)}</span><span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800/60">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:lightning-fill",
            class: "w-3.5 h-3.5 text-emerald-500"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.readiness.matchScoreLabel", { score: item.matchScore }))}</span></span></div><div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/projects/${item.project.slug || item.project.id}`),
            class: "flex items-center gap-2 group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (item.project.icon) {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: item.project.icon,
                    class: "w-5 h-5 text-blue-600 shrink-0 dark:text-blue-400"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<h4 class="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400 leading-snug"${_scopeId}>${ssrInterpolate(item.project.name)}</h4>`);
              } else {
                return [
                  item.project.icon ? (openBlock(), createBlock(_component_UIcon, {
                    key: 0,
                    name: item.project.icon,
                    class: "w-5 h-5 text-blue-600 shrink-0 dark:text-blue-400"
                  }, null, 8, ["name"])) : createCommentVNode("", true),
                  createVNode("h4", { class: "text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400 leading-snug" }, toDisplayString(item.project.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<p class="mt-1 text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed">${ssrInterpolate(item.project.tagline)}</p></div><div class="p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-slate-700 leading-relaxed dark:bg-blue-950/30 dark:border-blue-900/50 dark:text-slate-200"><strong class="font-bold text-blue-700 block mb-0.5 dark:text-blue-300">${ssrInterpolate(_ctx.$t("hoxi.readiness.matchWhyLabel"))}</strong><span>${ssrInterpolate(item.whyItFits)}</span></div><div class="space-y-2 text-xs leading-relaxed"><div class="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/70 text-slate-700 dark:bg-emerald-950/25 dark:border-emerald-900/50 dark:text-slate-200"><strong class="font-bold text-emerald-800 flex items-center gap-1 mb-0.5 dark:text-emerald-300">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:coins-bold",
            class: "w-3.5 h-3.5"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.readiness.matchMonetizeLabel"))}</span></strong><span>${ssrInterpolate(item.howToMakeMoney)}</span></div>`);
          if (item.project.monthlyCost) {
            _push(`<div class="flex items-start gap-2 px-2.5 py-2 rounded-lg bg-slate-50 border border-slate-200/70 text-[11px] text-slate-600 dark:bg-slate-800/60 dark:border-slate-800 dark:text-slate-300">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:calculator-bold",
              class: "w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5"
            }, null, _parent));
            _push(`<div><span class="font-semibold text-slate-800 dark:text-slate-200">${ssrInterpolate(_ctx.$t("hoxi.readiness.matchCostLabel"))}</span><span class="ml-1 font-mono">${ssrInterpolate(item.project.monthlyCost)}</span></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="px-2.5 py-2 rounded-lg bg-amber-50/70 border border-amber-200/70 text-[11px] text-amber-900 dark:bg-amber-950/30 dark:border-amber-900/50 dark:text-amber-200"><strong class="font-semibold">${ssrInterpolate(_ctx.$t("hoxi.readiness.matchActionLabel"))}</strong><span class="ml-1">${ssrInterpolate(item.firstWeekAction)}</span></div></div></div><div class="pt-3 border-t border-slate-100 flex items-center dark:border-slate-800">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/projects/${item.project.slug || item.project.id}`),
            class: "w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.matchInspectBtn"))}</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right",
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("span", null, toDisplayString(_ctx.$t("hoxi.readiness.matchInspectBtn")), 1),
                  createVNode(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></article>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid gap-6 md:gap-8 lg:grid-cols-2 items-start"><div class="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 md:p-8 space-y-5 dark:border-slate-800 dark:bg-slate-900"><div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800"><h3 class="text-base font-bold text-slate-900 flex items-center gap-2 dark:text-white">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chart-polar",
        class: "w-5 h-5 text-blue-500"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.readiness.dimensionsHeading"))}</span></h3><span class="text-xs text-slate-400 font-mono dark:text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.readiness.fullScoreNote"))}</span></div>`);
      _push(ssrRenderComponent(_component_HoxiReadinessRadar, {
        dimensions: __props.result.dimensions
      }, null, _parent));
      _push(`<div class="space-y-3.5 pt-2"><!--[-->`);
      ssrRenderList(__props.result.dimensions, (dim) => {
        _push(`<div class="space-y-1.5"><div class="flex items-center justify-between text-xs"><div class="flex items-center gap-1.5">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: dim.meta.icon,
          class: ["w-4 h-4", dim.meta.color]
        }, null, _parent));
        _push(`<span class="font-medium text-slate-800 dark:text-slate-200">${ssrInterpolate(dim.meta.name)}</span></div><span class="font-mono tabular-nums font-bold text-slate-900 dark:text-white">${ssrInterpolate(_ctx.$t("hoxi.readiness.scoreValue", { score: dim.score }))}</span></div><div class="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden dark:bg-slate-800"><div class="${ssrRenderClass([dim.score >= 80 ? "bg-emerald-500" : dim.score >= 60 ? "bg-blue-500" : "bg-amber-500", "h-full rounded-full transition-all duration-500"])}" style="${ssrRenderStyle({ width: `${dim.score}%` })}"></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 space-y-6 dark:border-slate-800 dark:bg-slate-900"><div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800"><h3 class="text-base font-bold text-slate-900 flex items-center gap-2 shrink-0 dark:text-white">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:user-focus",
        class: "w-5 h-5 text-blue-500"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.readiness.archetypeHeading"))}</span></h3><span class="text-xs text-slate-400 font-mono text-right dark:text-slate-500">${ssrInterpolate(__props.result.archetype.role)}</span></div><div><div class="text-lg md:text-xl font-bold text-slate-900 dark:text-white">${ssrInterpolate(__props.result.archetype.name)}</div><div class="mt-1 text-sm font-medium text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200/80 inline-block dark:text-amber-300 dark:bg-amber-950/40 dark:border-amber-800/60"> \u201C${ssrInterpolate(__props.result.archetype.tagline)}\u201D </div></div><div class="space-y-4 text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-300"><div class="flex items-start gap-2.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-bold",
        class: "w-4 h-4 text-emerald-600 shrink-0 mt-0.5 dark:text-emerald-400"
      }, null, _parent));
      _push(`<div><strong class="text-slate-800 font-semibold dark:text-slate-200">${ssrInterpolate(_ctx.$t("hoxi.readiness.prosLabel"))}</strong><span class="ml-1">${ssrInterpolate(__props.result.archetype.pros)}</span></div></div><div class="flex items-start gap-2.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:warning-circle-bold",
        class: "w-4 h-4 text-amber-600 shrink-0 mt-0.5 dark:text-amber-400"
      }, null, _parent));
      _push(`<div><strong class="text-slate-800 font-semibold dark:text-slate-200">${ssrInterpolate(_ctx.$t("hoxi.readiness.consLabel"))}</strong><span class="ml-1">${ssrInterpolate(__props.result.archetype.cons)}</span></div></div><div class="p-3.5 bg-red-50/80 border border-red-200/80 rounded-xl text-red-900 text-xs md:text-[13px] leading-relaxed dark:bg-red-950/40 dark:border-red-800/60 dark:text-red-200"><strong class="font-bold flex items-center gap-1.5 text-red-700 mb-1 dark:text-red-300">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:skull-bold",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("hoxi.readiness.warningHeading"))}</strong><span>${ssrInterpolate(__props.result.archetype.warning)}</span></div></div><div class="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs dark:border-slate-800"><div class="p-3 rounded-xl bg-slate-50 border border-slate-100 dark:bg-slate-900 dark:border-slate-800"><span class="text-slate-400 block mb-1 dark:text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.readiness.strongestLabel"))}</span><span class="font-bold text-emerald-700 block text-sm dark:text-emerald-300">${ssrInterpolate(__props.result.strongestDimension.meta.name)}</span><span class="font-mono tabular-nums text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.readiness.scoreValue", { score: __props.result.strongestDimension.score }))}</span></div><div class="p-3 rounded-xl bg-slate-50 border border-slate-100 dark:bg-slate-900 dark:border-slate-800"><span class="text-slate-400 block mb-1 dark:text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.readiness.weakestLabel"))}</span><span class="font-bold text-amber-700 block text-sm dark:text-amber-300">${ssrInterpolate(__props.result.weakestDimension.meta.name)}</span><span class="font-mono tabular-nums text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.readiness.scoreValue", { score: __props.result.weakestDimension.score }))}</span></div></div></div></div><section class="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50/20 p-6 md:p-8 space-y-6 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30"><div class="border-b border-slate-200 pb-3 flex flex-wrap items-start justify-between gap-2 dark:border-slate-800"><h3 class="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2 dark:text-white">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: __props.result.roleMeta.icon,
        class: ["w-5 h-5 shrink-0", __props.result.roleMeta.color]
      }, null, _parent));
      _push(`<span>${ssrInterpolate(__props.result.roleAdvice.title)}</span></h3><span class="${ssrRenderClass([[__props.result.roleMeta.bgColor, __props.result.roleMeta.color, __props.result.roleMeta.borderColor, "border"], "text-xs px-2.5 py-0.5 rounded-full font-semibold shrink-0"])}">${ssrInterpolate(_ctx.$t("hoxi.readiness.roleSpecific", { role: __props.result.roleMeta.name }))}</span></div><div class="text-sm md:text-base font-semibold text-slate-800 leading-relaxed dark:text-slate-200">${ssrInterpolate(__props.result.roleAdvice.headline)}</div><div class="grid md:grid-cols-2 gap-6 pt-2"><div class="bg-white p-5 rounded-xl border border-amber-200/70 space-y-3 dark:bg-slate-900 dark:border-amber-800/60"><h4 class="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5 dark:text-amber-200">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:warning",
        class: "w-4 h-4 text-amber-600 dark:text-amber-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.readiness.hazardHeading"))}</span></h4><ul class="space-y-2 text-xs md:text-sm text-slate-600 leading-relaxed dark:text-slate-300"><!--[-->`);
      ssrRenderList(__props.result.roleAdvice.occupationalHazards, (hazard, hIdx) => {
        _push(`<li class="flex items-start gap-2"><span class="text-amber-500 font-bold">\u2022</span><span>${ssrInterpolate(hazard)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="bg-white p-5 rounded-xl border border-blue-200/70 space-y-3 dark:bg-slate-900 dark:border-blue-800/60"><h4 class="text-xs font-bold text-blue-800 uppercase tracking-wider flex items-center gap-1.5 dark:text-blue-200">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:pill-bold",
        class: "w-4 h-4 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.readiness.prescriptionHeading"))}</span></h4><ul class="space-y-2 text-xs md:text-sm text-slate-600 leading-relaxed dark:text-slate-300"><!--[-->`);
      ssrRenderList(__props.result.roleAdvice.weanOffPrescriptions, (rx, rIdx) => {
        _push(`<li class="flex items-start gap-2"><span class="text-blue-600 font-bold font-mono dark:text-blue-400">0${ssrInterpolate(rIdx + 1)}</span><span>${ssrInterpolate(rx)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div></section><section class="space-y-6"><div class="border-b border-slate-200 pb-3 dark:border-slate-800"><h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 dark:text-white">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:first-aid-kit-bold",
        class: "w-6 h-6 text-red-500"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.readiness.blindspotHeading"))}</span></h3><p class="mt-1 text-xs md:text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.readiness.blindspotIntro"))}</p></div><div class="space-y-6"><!--[-->`);
      ssrRenderList(__props.result.blindspots, (blindspot, bIdx) => {
        _push(`<div class="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 space-y-5 dark:border-slate-800 dark:bg-slate-900"><div class="flex items-center gap-2 text-red-600 font-bold text-base md:text-lg dark:text-red-400"><span class="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs flex items-center justify-center font-mono dark:bg-red-900/40 dark:text-red-300"> 0${ssrInterpolate(bIdx + 1)}</span><span>${ssrInterpolate(blindspot.title)}</span></div><div class="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-xs md:text-sm leading-relaxed text-slate-700 dark:bg-slate-900 dark:border-slate-800/70 dark:text-slate-300"><strong class="font-semibold text-slate-900 block mb-1 dark:text-white">${ssrInterpolate(_ctx.$t("hoxi.readiness.causeLabel"))}</strong> ${ssrInterpolate(blindspot.diagnosis)}</div><div><h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 dark:text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.readiness.nextSevenDays"))}</h4><div class="space-y-2.5"><!--[-->`);
        ssrRenderList(blindspot.prescriptions, (step, sIdx) => {
          _push(`<div class="flex items-start gap-3 text-xs md:text-sm text-slate-700 dark:text-slate-300"><span class="font-mono font-bold text-blue-600 shrink-0 dark:text-blue-400">#${ssrInterpolate(sIdx + 1)}</span><span class="leading-relaxed">${ssrInterpolate(step)}</span></div>`);
        });
        _push(`<!--]--></div></div><div class="pt-4 border-t border-slate-100 dark:border-slate-800"><div class="text-xs font-semibold text-slate-500 mb-2 flex items-center gap-1.5 dark:text-slate-400">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:arrow-elbow-down-right",
          class: "w-3.5 h-3.5 text-blue-500"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.readiness.arsenalHeading"))}</span></div><div class="grid sm:grid-cols-2 gap-3"><!--[-->`);
        ssrRenderList(blindspot.internalLinks, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.to,
            to: unref(localePath)(link.to),
            class: "group p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 transition-all flex items-center justify-between dark:border-slate-800 dark:hover:bg-blue-950/40"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${_scopeId}><div class="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors dark:text-slate-200 dark:group-hover:text-blue-400"${_scopeId}>${ssrInterpolate(link.label)}</div><div class="text-[11px] text-slate-500 mt-0.5 dark:text-slate-400"${_scopeId}>${ssrInterpolate(link.desc)}</div></div>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right",
                  class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0 ml-2 dark:text-slate-500"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("div", null, [
                    createVNode("div", { class: "text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors dark:text-slate-200 dark:group-hover:text-blue-400" }, toDisplayString(link.label), 1),
                    createVNode("div", { class: "text-[11px] text-slate-500 mt-0.5 dark:text-slate-400" }, toDisplayString(link.desc), 1)
                  ]),
                  createVNode(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0 ml-2 dark:text-slate-500"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></section>`);
      if (__props.history && __props.history.length > 0) {
        _push(`<section class="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-3 dark:border-slate-800 dark:bg-slate-900"><div class="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800"><div><h3 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">${ssrInterpolate((_e = __props.uiCopy) == null ? void 0 : _e.historyHeading)}</h3><p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${ssrInterpolate((_f = __props.uiCopy) == null ? void 0 : _f.historySubheading)}</p></div><span class="text-xs font-mono text-slate-400 dark:text-slate-500">${ssrInterpolate(__props.history.length)}</span></div><div class="divide-y divide-slate-100 dark:divide-slate-800"><!--[-->`);
        ssrRenderList(__props.history.slice(0, 8), (item, idx) => {
          var _a2, _b2;
          _push(`<button type="button" class="w-full py-2.5 flex items-center justify-between gap-3 text-left hover:bg-slate-50/70 transition-colors rounded-lg px-2 -mx-2 dark:hover:bg-slate-800/50"><div class="min-w-0 flex-1 flex flex-wrap items-center gap-2 text-xs"><span class="font-bold text-slate-900 dark:text-white">${ssrInterpolate(item.roleName)}</span><span class="text-slate-400 dark:text-slate-500">\xB7</span><span class="font-mono text-slate-500 dark:text-slate-400">${ssrInterpolate(formatDate(item.createdAt))}</span>`);
          if (item.topProjectName) {
            _push(`<span class="text-slate-500 truncate dark:text-slate-400"> \xB7 ${ssrInterpolate((_a2 = __props.uiCopy) == null ? void 0 : _a2.historyTopMatchPrefix)}${ssrInterpolate(item.topProjectName)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex items-center gap-2 shrink-0">`);
          if (scoreDelta(idx) !== null) {
            _push(`<span class="${ssrRenderClass([(scoreDelta(idx) || 0) >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400", "text-[11px] font-mono font-semibold"])}">${ssrInterpolate((scoreDelta(idx) || 0) >= 0 ? `+${scoreDelta(idx)}` : scoreDelta(idx))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="font-mono text-sm font-black text-blue-600 tabular-nums dark:text-blue-400">${ssrInterpolate(item.overallScore)}/100 </span>`);
          if (__props.activeHistoryId && __props.activeHistoryId === item.id || reportHash.value && item.hash === reportHash.value) {
            _push(`<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-300">${ssrInterpolate((_b2 = __props.uiCopy) == null ? void 0 : _b2.historyCurrentTag)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></button>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/60 via-white to-amber-50/30 p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 dark:border-amber-800/60 dark:from-amber-950/30 dark:via-slate-900 dark:to-amber-950/30"><div class="space-y-2 text-center sm:text-left"><div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200"><span>${ssrInterpolate(_ctx.$t("hoxi.readiness.communityBadge"))}</span></div><h4 class="text-base md:text-lg font-bold text-slate-900 dark:text-white">${ssrInterpolate(_ctx.$t("hoxi.readiness.communityTitle", { role: __props.result.roleMeta.name }))}</h4><p class="text-xs md:text-sm text-slate-600 leading-relaxed max-w-xl dark:text-slate-300">${ssrInterpolate(_ctx.$t("hoxi.readiness.communityDesc"))}</p></div><button type="button" class="w-full sm:w-auto shrink-0 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-amber-600 text-xs sm:text-sm font-semibold transition-colors shadow-xs text-center">${ssrInterpolate(_ctx.$t("hoxi.readiness.communityBtn"))}</button></section><div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-6 border-t border-slate-200 dark:border-slate-800"><button type="button" class="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors py-2 px-4 rounded-xl hover:bg-slate-100 border border-slate-200 w-full sm:w-auto dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 dark:border-slate-800">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-counter-clockwise-bold",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.readiness.restartOther"))}</span></button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/projects"),
        class: "inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow-xs w-full sm:w-auto text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.matchViewAll"))}</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-right",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$t("hoxi.readiness.matchViewAll")), 1),
              createVNode(_component_UIcon, {
                name: "ph:arrow-right",
                class: "w-4 h-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiReadinessReport.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "HoxiReadinessReport" });

export { __nuxt_component_3 as default };
//# sourceMappingURL=HoxiReadinessReport-BH44k0rK.mjs.map
