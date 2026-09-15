import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { e as useI18n, aM as useLocaleRouter, g as useToast, bj as useSeoMeta, b as _sfc_main$E, a as __nuxt_component_3$1, p as _sfc_main$q, k as _sfc_main$z, O as _sfc_main$e, d as _sfc_main$i } from './server.mjs';
import { defineComponent, ref, computed, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHoxiProjects } from './useHoxiProjects-DXR1iphr.mjs';
import '../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
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
import './projects-DpaqvHSn.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const localeRouter = useLocaleRouter();
    const localePath = localeRouter.localePath;
    const toast = useToast();
    const { projects, categories } = useHoxiProjects();
    const activeCategory = ref("all");
    const getCategoryCount = (categoryId) => {
      if (categoryId === "all") return projects.value.length;
      return projects.value.filter((p) => p.category === categoryId).length;
    };
    const filteredProjects = computed(() => {
      if (activeCategory.value === "all") return projects.value;
      return projects.value.filter((p) => p.category === activeCategory.value);
    });
    const isRecommendModalOpen = ref(false);
    const isFeedbackModalOpen = ref(false);
    const currentFeedbackProject = ref(null);
    const feedbackContent = ref("");
    const feedbackContact = ref("");
    const openFeedbackModal = (proj) => {
      currentFeedbackProject.value = proj;
      feedbackContent.value = "";
      feedbackContact.value = "";
      isFeedbackModalOpen.value = true;
    };
    const submitFeedback = () => {
      if (!feedbackContent.value.trim()) {
        toast.add({ title: "\u8BF7\u586B\u5199\u53CD\u9988\u5EFA\u8BAE\u5185\u5BB9", color: "warning" });
        return;
      }
      toast.add({
        title: "\u5EFA\u8BAE\u5DF2\u63D0\u4EA4",
        description: "\u611F\u8C22\u4F60\u7684\u5B9D\u8D35\u53CD\u9988\uFF0C\u7AD9\u957F\u4F1A\u8BA4\u771F\u9605\u8BFB\u5E76\u63A8\u8FDB\u6539\u8FDB\uFF01",
        color: "success"
      });
      isFeedbackModalOpen.value = false;
    };
    useSeoMeta({
      title: () => `${t("hoxi.projects.seoTitle")} - ${t("hoxi.brand.name")}`,
      description: () => t("hoxi.projects.seoDescription"),
      ogTitle: () => `${t("hoxi.projects.seoTitle")} - ${t("hoxi.brand.name")}`,
      ogDescription: () => t("hoxi.projects.seoDescription")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_UIcon = _sfc_main$E;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UModal = _sfc_main$q;
      const _component_UButton = _sfc_main$z;
      const _component_UTextarea = _sfc_main$e;
      const _component_UInput = _sfc_main$i;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-10 md:py-16"${_scopeId}><div class="text-center max-w-3xl mx-auto mb-10 md:mb-14"${_scopeId}><span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/70 mb-3 shadow-2xs"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"${_scopeId}></span> ${ssrInterpolate(_ctx.$t("hoxi.projects.badge"))}</span><h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.title"))}</h1><p class="mt-4 text-base md:text-lg text-slate-600 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.subtitle"))}</p></div><div class="flex items-center justify-center mb-8 md:mb-10 overflow-x-auto pb-2 scrollbar-none"${_scopeId}><div class="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/60 shadow-2xs shrink-0 max-w-full"${_scopeId}><!--[-->`);
            ssrRenderList(unref(categories), (cat) => {
              _push2(`<button type="button" class="${ssrRenderClass([activeCategory.value === cat.id ? "bg-white text-slate-900 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900", "inline-flex items-center gap-1.5 rounded-xl px-3 sm:px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer whitespace-nowrap"])}"${_scopeId}>`);
              if (cat.icon) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: cat.icon,
                  class: "w-3.5 h-3.5 text-blue-500"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span${_scopeId}>${ssrInterpolate(cat.label)}</span><span class="text-[10px] opacity-60 font-mono"${_scopeId}> (${ssrInterpolate(getCategoryCount(cat.id))}) </span></button>`);
            });
            _push2(`<!--]--></div></div>`);
            if (filteredProjects.value.length > 0) {
              _push2(`<div class="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
              ssrRenderList(filteredProjects.value, (project) => {
                _push2(`<div class="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 md:p-6 transition-all duration-200 hover:border-blue-400/60 hover:shadow-md hover:-translate-y-0.5"${_scopeId}><div${_scopeId}><div class="flex items-start justify-between gap-3 mb-3"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-800 shadow-2xs"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: project.icon || "ph:rocket-launch-bold",
                  class: "w-5 h-5 text-blue-600"
                }, null, _parent2, _scopeId));
                _push2(`</span><div${_scopeId}><h3 class="text-base font-bold text-slate-900 leading-snug flex items-center gap-2"${_scopeId}><span${_scopeId}>${ssrInterpolate(project.name)}</span></h3><div class="mt-0.5 flex items-center gap-1.5 text-[11px] text-slate-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(project.categoryLabel)}</span><span${_scopeId}>\xB7</span><span class="font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded text-[10px] border border-emerald-200/60"${_scopeId}>${ssrInterpolate(project.statusLabel || project.status)}</span></div></div></div>`);
                if (project.badge) {
                  _push2(`<span class="${ssrRenderClass([project.badgeTone === "positive" ? "bg-emerald-50 text-emerald-700 border-emerald-200/60" : project.badgeTone === "warning" ? "bg-amber-50 text-amber-700 border-amber-200/60" : "bg-blue-50 text-blue-700 border-blue-200/60", "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold border"])}"${_scopeId}>${ssrInterpolate(project.badge)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="text-xs font-medium text-slate-800 mt-2 mb-1.5"${_scopeId}>${ssrInterpolate(project.tagline)}</div><p class="text-xs leading-relaxed text-slate-600 mb-4 line-clamp-3"${_scopeId}>${ssrInterpolate(project.description)}</p><div class="rounded-xl bg-slate-50 border border-slate-100 p-3 space-y-2 mb-4 text-xs"${_scopeId}>`);
                if (project.modelUsed) {
                  _push2(`<div class="flex items-start gap-2"${_scopeId}><span class="text-slate-400 shrink-0 font-medium"${_scopeId}>\u{1F9E0} ${ssrInterpolate(_ctx.$t("hoxi.projects.modelUsed"))}:</span><span class="text-slate-800 font-medium truncate"${_scopeId}>${ssrInterpolate(project.modelUsed)}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (project.monthlyCost) {
                  _push2(`<div class="flex items-start gap-2"${_scopeId}><span class="text-slate-400 shrink-0 font-medium"${_scopeId}>\u{1F4B0} ${ssrInterpolate(_ctx.$t("hoxi.projects.monthlyCost"))}:</span><span class="text-emerald-700 font-mono font-medium truncate"${_scopeId}>${ssrInterpolate(project.monthlyCost)}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (project.techStack && project.techStack.length) {
                  _push2(`<div class="flex items-start gap-2"${_scopeId}><span class="text-slate-400 shrink-0 font-medium"${_scopeId}>\u{1F6E0}\uFE0F ${ssrInterpolate(_ctx.$t("hoxi.projects.techStack"))}:</span><div class="flex flex-wrap gap-1"${_scopeId}><!--[-->`);
                  ssrRenderList(project.techStack, (tech) => {
                    _push2(`<span class="px-1.5 py-0.2 rounded bg-white border border-slate-200/80 text-[10px] text-slate-600 font-mono"${_scopeId}>${ssrInterpolate(tech)}</span>`);
                  });
                  _push2(`<!--]--></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
                if (project.highlights && project.highlights.length) {
                  _push2(`<ul class="space-y-1 mb-4"${_scopeId}><!--[-->`);
                  ssrRenderList(project.highlights, (hl, idx) => {
                    _push2(`<li class="text-[11px] text-slate-500 flex items-start gap-1.5"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "ph:check-circle",
                      class: "w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5"
                    }, null, _parent2, _scopeId));
                    _push2(`<span class="leading-normal"${_scopeId}>${ssrInterpolate(hl)}</span></li>`);
                  });
                  _push2(`<!--]--></ul>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-100 pt-2 mb-4"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.author"))}: <strong class="font-medium text-slate-700"${_scopeId}>${ssrInterpolate(project.author)}</strong></span>`);
                if (project.authorUrl) {
                  _push2(`<a${ssrRenderAttr("href", project.authorUrl)} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline flex items-center gap-0.5"${_scopeId}><span${_scopeId}>\u4E3B\u9875</span>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-up-right",
                    class: "w-3 h-3"
                  }, null, _parent2, _scopeId));
                  _push2(`</a>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
                if (project.url) {
                  _push2(`<a${ssrRenderAttr("href", project.url)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 rounded-full bg-slate-900 hover:bg-blue-600 text-white px-3 py-1 text-xs font-semibold transition-colors shadow-2xs"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.viewSite"))}</span>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-up-right-bold",
                    class: "w-3 h-3"
                  }, null, _parent2, _scopeId));
                  _push2(`</a>`);
                } else {
                  _push2(`<!---->`);
                }
                if (project.githubUrl) {
                  _push2(`<a${ssrRenderAttr("href", project.githubUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 text-xs font-medium transition-colors" title="\u67E5\u770B GitHub \u6E90\u7801"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:github-logo",
                    class: "w-3.5 h-3.5"
                  }, null, _parent2, _scopeId));
                  _push2(`</a>`);
                } else {
                  _push2(`<!---->`);
                }
                if (project.storyUrl) {
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: unref(localePath)(project.storyUrl),
                    class: "text-xs text-blue-600 hover:underline font-medium"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(_ctx.$t("hoxi.projects.viewStory"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.projects.viewStory")), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><button type="button" class="text-xs text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:chat-dots",
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>\u63D0\u5EFA\u8BAE</span></button></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-16 bg-slate-50 rounded-3xl border border-slate-100"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:rocket-launch-bold",
                class: "w-12 h-12 text-slate-300 mx-auto mb-3"
              }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-base font-bold text-slate-800 mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.emptyTitle"))}</h3><p class="text-xs text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.emptyDesc"))}</p></div>`);
            }
            _push2(`<div class="mt-14 rounded-2xl border border-slate-200/80 bg-slate-50 p-6 md:p-8"${_scopeId}><h2 class="text-base font-bold text-slate-900 flex items-center gap-2 mb-3"${_scopeId}><span${_scopeId}>\u{1F4A1}</span><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.principlesTitle"))}</span></h2><div class="grid gap-4 sm:grid-cols-3 text-xs leading-relaxed text-slate-600"${_scopeId}><div${_scopeId}><strong class="font-semibold text-slate-800 block mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.principle1Title"))}</strong><p${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.principle1Desc"))}</p></div><div${_scopeId}><strong class="font-semibold text-slate-800 block mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.principle2Title"))}</strong><p${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.principle2Desc"))}</p></div><div${_scopeId}><strong class="font-semibold text-slate-800 block mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.principle3Title"))}</strong><p${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.principle3Desc"))}</p></div></div></div></div>`);
            _push2(ssrRenderComponent(_component_UModal, {
              modelValue: isRecommendModalOpen.value,
              "onUpdate:modelValue": ($event) => isRecommendModalOpen.value = $event,
              title: "\u63A8\u8350 / \u63D0\u4EA4\u4E00\u4EBA\u516C\u53F8\u9879\u76EE"
            }, {
              body: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4 text-xs text-slate-600 leading-relaxed"${_scopeId2}><p${_scopeId2}> \u5408\u559C AI \u4E13\u6CE8\u4E8E\u6536\u5F55<strong${_scopeId2}>\u771F\u5B9E\u7528 AI \u9A71\u52A8\u3001\u8DD1\u901A\u5546\u4E1A\u53D8\u73B0\u6216\u6781\u7B80\u9AD8\u4EA4\u4ED8</strong>\u7684\u4E00\u4EBA\u516C\u53F8\u9879\u76EE\u4E0E\u5F00\u6E90\u5DE5\u5177\u3002 </p><div class="rounded-xl bg-slate-50 border border-slate-100 p-3 space-y-1.5"${_scopeId2}><div class="font-semibold text-slate-800"${_scopeId2}>\u6536\u5F55\u6807\u51C6\uFF1A</div><div${_scopeId2}>1. \u771F\u5B9E\u53EF\u7528\uFF1A\u62E5\u6709\u5728\u7EBF\u53EF\u8BBF\u95EE\u7684 Demo\u3001\u5B98\u7F51\u6216\u5F00\u6E90\u4ED3\u5E93\uFF1B</div><div${_scopeId2}>2. AI \u8D4B\u80FD\uFF1A\u6838\u5FC3\u4E1A\u52A1\u6216\u751F\u4EA7\u6D41\u4E2D\u6DF1\u5EA6\u91C7\u7528\u4E86\u5927\u6A21\u578B\u4E0E Agent\uFF1B</div><div${_scopeId2}>3. \u8D26\u672C\u900F\u660E\uFF1A\u613F\u610F\u516C\u5F00\u5927\u4F53\u6280\u672F\u6808\u4E0E\u6708\u7B97\u529B\u6210\u672C\u53C2\u8003\u3002</div></div><p${_scopeId2}> \u8BF7\u5C06\u4F60\u7684\u9879\u76EE\u540D\u79F0\u3001\u5B9A\u4F4D\u3001\u5B98\u7F51\u4E0E\u6838\u5FC3\u6280\u672F\u6808\u53D1\u81F3\u7AD9\u957F\u5FAE\u4FE1\u6216\u90AE\u4EF6\uFF0C\u4EBA\u5DE5\u6838\u5B9E\u540E\u5C06\u540C\u6B65\u6536\u5F55\u81F3\u672C\u7AD9\u9879\u76EE\u5E93\u5E76\u7F6E\u9876\u5C55\u793A\uFF1A </p><div class="rounded-xl border border-slate-200 p-3 space-y-2 font-mono text-slate-800"${_scopeId2}><div${_scopeId2}>\u{1F4EE} \u7AD9\u957F\u90AE\u7BB1: <span class="text-blue-600 font-semibold"${_scopeId2}>coller@hoxi.ai</span></div><div${_scopeId2}>\u{1F4AC} \u5FAE\u4FE1\u4EA4\u6D41: <span class="text-blue-600 font-semibold"${_scopeId2}>\u6DFB\u52A0\u7AD9\u957F\u5FAE\u4FE1\uFF08\u70B9\u51FB\u5173\u4E8E\u9875\u793E\u7FA4\uFF09</span></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4 text-xs text-slate-600 leading-relaxed" }, [
                      createVNode("p", null, [
                        createTextVNode(" \u5408\u559C AI \u4E13\u6CE8\u4E8E\u6536\u5F55"),
                        createVNode("strong", null, "\u771F\u5B9E\u7528 AI \u9A71\u52A8\u3001\u8DD1\u901A\u5546\u4E1A\u53D8\u73B0\u6216\u6781\u7B80\u9AD8\u4EA4\u4ED8"),
                        createTextVNode("\u7684\u4E00\u4EBA\u516C\u53F8\u9879\u76EE\u4E0E\u5F00\u6E90\u5DE5\u5177\u3002 ")
                      ]),
                      createVNode("div", { class: "rounded-xl bg-slate-50 border border-slate-100 p-3 space-y-1.5" }, [
                        createVNode("div", { class: "font-semibold text-slate-800" }, "\u6536\u5F55\u6807\u51C6\uFF1A"),
                        createVNode("div", null, "1. \u771F\u5B9E\u53EF\u7528\uFF1A\u62E5\u6709\u5728\u7EBF\u53EF\u8BBF\u95EE\u7684 Demo\u3001\u5B98\u7F51\u6216\u5F00\u6E90\u4ED3\u5E93\uFF1B"),
                        createVNode("div", null, "2. AI \u8D4B\u80FD\uFF1A\u6838\u5FC3\u4E1A\u52A1\u6216\u751F\u4EA7\u6D41\u4E2D\u6DF1\u5EA6\u91C7\u7528\u4E86\u5927\u6A21\u578B\u4E0E Agent\uFF1B"),
                        createVNode("div", null, "3. \u8D26\u672C\u900F\u660E\uFF1A\u613F\u610F\u516C\u5F00\u5927\u4F53\u6280\u672F\u6808\u4E0E\u6708\u7B97\u529B\u6210\u672C\u53C2\u8003\u3002")
                      ]),
                      createVNode("p", null, " \u8BF7\u5C06\u4F60\u7684\u9879\u76EE\u540D\u79F0\u3001\u5B9A\u4F4D\u3001\u5B98\u7F51\u4E0E\u6838\u5FC3\u6280\u672F\u6808\u53D1\u81F3\u7AD9\u957F\u5FAE\u4FE1\u6216\u90AE\u4EF6\uFF0C\u4EBA\u5DE5\u6838\u5B9E\u540E\u5C06\u540C\u6B65\u6536\u5F55\u81F3\u672C\u7AD9\u9879\u76EE\u5E93\u5E76\u7F6E\u9876\u5C55\u793A\uFF1A "),
                      createVNode("div", { class: "rounded-xl border border-slate-200 p-3 space-y-2 font-mono text-slate-800" }, [
                        createVNode("div", null, [
                          createTextVNode("\u{1F4EE} \u7AD9\u957F\u90AE\u7BB1: "),
                          createVNode("span", { class: "text-blue-600 font-semibold" }, "coller@hoxi.ai")
                        ]),
                        createVNode("div", null, [
                          createTextVNode("\u{1F4AC} \u5FAE\u4FE1\u4EA4\u6D41: "),
                          createVNode("span", { class: "text-blue-600 font-semibold" }, "\u6DFB\u52A0\u7AD9\u957F\u5FAE\u4FE1\uFF08\u70B9\u51FB\u5173\u4E8E\u9875\u793E\u7FA4\uFF09")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    size: "sm",
                    onClick: ($event) => isRecommendModalOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u77E5\u9053\u4E86 `);
                      } else {
                        return [
                          createTextVNode(" \u77E5\u9053\u4E86 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-end" }, [
                      createVNode(_component_UButton, {
                        color: "neutral",
                        size: "sm",
                        onClick: ($event) => isRecommendModalOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u77E5\u9053\u4E86 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UModal, {
              modelValue: isFeedbackModalOpen.value,
              "onUpdate:modelValue": ($event) => isFeedbackModalOpen.value = $event,
              title: currentFeedbackProject.value ? `\u9488\u5BF9 ${currentFeedbackProject.value.name} \u7684\u5EFA\u8BAE\u4E0E\u53CD\u9988` : "\u9879\u76EE\u53CD\u9988"
            }, {
              body: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-3 text-xs"${_scopeId2}><p class="text-slate-500"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.projects.feedbackDesc"))}</p><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: feedbackContent.value,
                    "onUpdate:modelValue": ($event) => feedbackContent.value = $event,
                    rows: "4",
                    placeholder: _ctx.$t("hoxi.projects.feedbackPlaceholder"),
                    size: "sm"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: feedbackContact.value,
                    "onUpdate:modelValue": ($event) => feedbackContact.value = $event,
                    placeholder: "\u4F60\u7684\u8054\u7CFB\u65B9\u5F0F (\u90AE\u7BB1/\u5FAE\u4FE1\uFF0C\u9009\u586B\u65B9\u4FBF\u56DE\u590D)",
                    size: "sm"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-3 text-xs" }, [
                      createVNode("p", { class: "text-slate-500" }, toDisplayString(_ctx.$t("hoxi.projects.feedbackDesc")), 1),
                      createVNode("div", null, [
                        createVNode(_component_UTextarea, {
                          modelValue: feedbackContent.value,
                          "onUpdate:modelValue": ($event) => feedbackContent.value = $event,
                          rows: "4",
                          placeholder: _ctx.$t("hoxi.projects.feedbackPlaceholder"),
                          size: "sm"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UInput, {
                          modelValue: feedbackContact.value,
                          "onUpdate:modelValue": ($event) => feedbackContact.value = $event,
                          placeholder: "\u4F60\u7684\u8054\u7CFB\u65B9\u5F0F (\u90AE\u7BB1/\u5FAE\u4FE1\uFF0C\u9009\u586B\u65B9\u4FBF\u56DE\u590D)",
                          size: "sm"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-end gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    size: "sm",
                    onClick: ($event) => isFeedbackModalOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u53D6\u6D88 `);
                      } else {
                        return [
                          createTextVNode(" \u53D6\u6D88 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    size: "sm",
                    onClick: submitFeedback
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("hoxi.projects.submitFeedback"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.projects.submitFeedback")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-end gap-2" }, [
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        size: "sm",
                        onClick: ($event) => isFeedbackModalOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u53D6\u6D88 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "primary",
                        size: "sm",
                        onClick: submitFeedback
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.projects.submitFeedback")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "py-10 md:py-16" }, [
                createVNode("div", { class: "text-center max-w-3xl mx-auto mb-10 md:mb-14" }, [
                  createVNode("span", { class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/70 mb-3 shadow-2xs" }, [
                    createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" }),
                    createTextVNode(" " + toDisplayString(_ctx.$t("hoxi.projects.badge")), 1)
                  ]),
                  createVNode("h1", { class: "text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight" }, toDisplayString(_ctx.$t("hoxi.projects.title")), 1),
                  createVNode("p", { class: "mt-4 text-base md:text-lg text-slate-600 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.projects.subtitle")), 1)
                ]),
                createVNode("div", { class: "flex items-center justify-center mb-8 md:mb-10 overflow-x-auto pb-2 scrollbar-none" }, [
                  createVNode("div", { class: "inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/60 shadow-2xs shrink-0 max-w-full" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (cat) => {
                      return openBlock(), createBlock("button", {
                        key: cat.id,
                        type: "button",
                        class: ["inline-flex items-center gap-1.5 rounded-xl px-3 sm:px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer whitespace-nowrap", activeCategory.value === cat.id ? "bg-white text-slate-900 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"],
                        onClick: ($event) => activeCategory.value = cat.id
                      }, [
                        cat.icon ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: cat.icon,
                          class: "w-3.5 h-3.5 text-blue-500"
                        }, null, 8, ["name"])) : createCommentVNode("", true),
                        createVNode("span", null, toDisplayString(cat.label), 1),
                        createVNode("span", { class: "text-[10px] opacity-60 font-mono" }, " (" + toDisplayString(getCategoryCount(cat.id)) + ") ", 1)
                      ], 10, ["onClick"]);
                    }), 128))
                  ])
                ]),
                filteredProjects.value.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(filteredProjects.value, (project) => {
                    return openBlock(), createBlock("div", {
                      key: project.id,
                      class: "flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 md:p-6 transition-all duration-200 hover:border-blue-400/60 hover:shadow-md hover:-translate-y-0.5"
                    }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-start justify-between gap-3 mb-3" }, [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode("span", { class: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-800 shadow-2xs" }, [
                              createVNode(_component_UIcon, {
                                name: project.icon || "ph:rocket-launch-bold",
                                class: "w-5 h-5 text-blue-600"
                              }, null, 8, ["name"])
                            ]),
                            createVNode("div", null, [
                              createVNode("h3", { class: "text-base font-bold text-slate-900 leading-snug flex items-center gap-2" }, [
                                createVNode("span", null, toDisplayString(project.name), 1)
                              ]),
                              createVNode("div", { class: "mt-0.5 flex items-center gap-1.5 text-[11px] text-slate-400" }, [
                                createVNode("span", null, toDisplayString(project.categoryLabel), 1),
                                createVNode("span", null, "\xB7"),
                                createVNode("span", { class: "font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded text-[10px] border border-emerald-200/60" }, toDisplayString(project.statusLabel || project.status), 1)
                              ])
                            ])
                          ]),
                          project.badge ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: ["shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold border", project.badgeTone === "positive" ? "bg-emerald-50 text-emerald-700 border-emerald-200/60" : project.badgeTone === "warning" ? "bg-amber-50 text-amber-700 border-amber-200/60" : "bg-blue-50 text-blue-700 border-blue-200/60"]
                          }, toDisplayString(project.badge), 3)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "text-xs font-medium text-slate-800 mt-2 mb-1.5" }, toDisplayString(project.tagline), 1),
                        createVNode("p", { class: "text-xs leading-relaxed text-slate-600 mb-4 line-clamp-3" }, toDisplayString(project.description), 1),
                        createVNode("div", { class: "rounded-xl bg-slate-50 border border-slate-100 p-3 space-y-2 mb-4 text-xs" }, [
                          project.modelUsed ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex items-start gap-2"
                          }, [
                            createVNode("span", { class: "text-slate-400 shrink-0 font-medium" }, "\u{1F9E0} " + toDisplayString(_ctx.$t("hoxi.projects.modelUsed")) + ":", 1),
                            createVNode("span", { class: "text-slate-800 font-medium truncate" }, toDisplayString(project.modelUsed), 1)
                          ])) : createCommentVNode("", true),
                          project.monthlyCost ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "flex items-start gap-2"
                          }, [
                            createVNode("span", { class: "text-slate-400 shrink-0 font-medium" }, "\u{1F4B0} " + toDisplayString(_ctx.$t("hoxi.projects.monthlyCost")) + ":", 1),
                            createVNode("span", { class: "text-emerald-700 font-mono font-medium truncate" }, toDisplayString(project.monthlyCost), 1)
                          ])) : createCommentVNode("", true),
                          project.techStack && project.techStack.length ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "flex items-start gap-2"
                          }, [
                            createVNode("span", { class: "text-slate-400 shrink-0 font-medium" }, "\u{1F6E0}\uFE0F " + toDisplayString(_ctx.$t("hoxi.projects.techStack")) + ":", 1),
                            createVNode("div", { class: "flex flex-wrap gap-1" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(project.techStack, (tech) => {
                                return openBlock(), createBlock("span", {
                                  key: tech,
                                  class: "px-1.5 py-0.2 rounded bg-white border border-slate-200/80 text-[10px] text-slate-600 font-mono"
                                }, toDisplayString(tech), 1);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true)
                        ]),
                        project.highlights && project.highlights.length ? (openBlock(), createBlock("ul", {
                          key: 0,
                          class: "space-y-1 mb-4"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(project.highlights, (hl, idx) => {
                            return openBlock(), createBlock("li", {
                              key: idx,
                              class: "text-[11px] text-slate-500 flex items-start gap-1.5"
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:check-circle",
                                class: "w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5"
                              }),
                              createVNode("span", { class: "leading-normal" }, toDisplayString(hl), 1)
                            ]);
                          }), 128))
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-100 pt-2 mb-4" }, [
                          createVNode("span", null, [
                            createTextVNode(toDisplayString(_ctx.$t("hoxi.projects.author")) + ": ", 1),
                            createVNode("strong", { class: "font-medium text-slate-700" }, toDisplayString(project.author), 1)
                          ]),
                          project.authorUrl ? (openBlock(), createBlock("a", {
                            key: 0,
                            href: project.authorUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class: "text-blue-600 hover:underline flex items-center gap-0.5"
                          }, [
                            createVNode("span", null, "\u4E3B\u9875"),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-up-right",
                              class: "w-3 h-3"
                            })
                          ], 8, ["href"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "pt-3 border-t border-slate-100 flex items-center justify-between gap-2" }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          project.url ? (openBlock(), createBlock("a", {
                            key: 0,
                            href: project.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class: "inline-flex items-center gap-1 rounded-full bg-slate-900 hover:bg-blue-600 text-white px-3 py-1 text-xs font-semibold transition-colors shadow-2xs"
                          }, [
                            createVNode("span", null, toDisplayString(_ctx.$t("hoxi.projects.viewSite")), 1),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-up-right-bold",
                              class: "w-3 h-3"
                            })
                          ], 8, ["href"])) : createCommentVNode("", true),
                          project.githubUrl ? (openBlock(), createBlock("a", {
                            key: 1,
                            href: project.githubUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class: "inline-flex items-center gap-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 text-xs font-medium transition-colors",
                            title: "\u67E5\u770B GitHub \u6E90\u7801"
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:github-logo",
                              class: "w-3.5 h-3.5"
                            })
                          ], 8, ["href"])) : createCommentVNode("", true),
                          project.storyUrl ? (openBlock(), createBlock(_component_NuxtLink, {
                            key: 2,
                            to: unref(localePath)(project.storyUrl),
                            class: "text-xs text-blue-600 hover:underline font-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("hoxi.projects.viewStory")), 1)
                            ]),
                            _: 1
                          }, 8, ["to"])) : createCommentVNode("", true)
                        ]),
                        createVNode("button", {
                          type: "button",
                          class: "text-xs text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer",
                          onClick: ($event) => openFeedbackModal(project)
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:chat-dots",
                            class: "w-3.5 h-3.5"
                          }),
                          createVNode("span", null, "\u63D0\u5EFA\u8BAE")
                        ], 8, ["onClick"])
                      ])
                    ]);
                  }), 128))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-center py-16 bg-slate-50 rounded-3xl border border-slate-100"
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:rocket-launch-bold",
                    class: "w-12 h-12 text-slate-300 mx-auto mb-3"
                  }),
                  createVNode("h3", { class: "text-base font-bold text-slate-800 mb-1" }, toDisplayString(_ctx.$t("hoxi.projects.emptyTitle")), 1),
                  createVNode("p", { class: "text-xs text-slate-500" }, toDisplayString(_ctx.$t("hoxi.projects.emptyDesc")), 1)
                ])),
                createVNode("div", { class: "mt-14 rounded-2xl border border-slate-200/80 bg-slate-50 p-6 md:p-8" }, [
                  createVNode("h2", { class: "text-base font-bold text-slate-900 flex items-center gap-2 mb-3" }, [
                    createVNode("span", null, "\u{1F4A1}"),
                    createVNode("span", null, toDisplayString(_ctx.$t("hoxi.projects.principlesTitle")), 1)
                  ]),
                  createVNode("div", { class: "grid gap-4 sm:grid-cols-3 text-xs leading-relaxed text-slate-600" }, [
                    createVNode("div", null, [
                      createVNode("strong", { class: "font-semibold text-slate-800 block mb-1" }, toDisplayString(_ctx.$t("hoxi.projects.principle1Title")), 1),
                      createVNode("p", null, toDisplayString(_ctx.$t("hoxi.projects.principle1Desc")), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("strong", { class: "font-semibold text-slate-800 block mb-1" }, toDisplayString(_ctx.$t("hoxi.projects.principle2Title")), 1),
                      createVNode("p", null, toDisplayString(_ctx.$t("hoxi.projects.principle2Desc")), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("strong", { class: "font-semibold text-slate-800 block mb-1" }, toDisplayString(_ctx.$t("hoxi.projects.principle3Title")), 1),
                      createVNode("p", null, toDisplayString(_ctx.$t("hoxi.projects.principle3Desc")), 1)
                    ])
                  ])
                ])
              ]),
              createVNode(_component_UModal, {
                modelValue: isRecommendModalOpen.value,
                "onUpdate:modelValue": ($event) => isRecommendModalOpen.value = $event,
                title: "\u63A8\u8350 / \u63D0\u4EA4\u4E00\u4EBA\u516C\u53F8\u9879\u76EE"
              }, {
                body: withCtx(() => [
                  createVNode("div", { class: "space-y-4 text-xs text-slate-600 leading-relaxed" }, [
                    createVNode("p", null, [
                      createTextVNode(" \u5408\u559C AI \u4E13\u6CE8\u4E8E\u6536\u5F55"),
                      createVNode("strong", null, "\u771F\u5B9E\u7528 AI \u9A71\u52A8\u3001\u8DD1\u901A\u5546\u4E1A\u53D8\u73B0\u6216\u6781\u7B80\u9AD8\u4EA4\u4ED8"),
                      createTextVNode("\u7684\u4E00\u4EBA\u516C\u53F8\u9879\u76EE\u4E0E\u5F00\u6E90\u5DE5\u5177\u3002 ")
                    ]),
                    createVNode("div", { class: "rounded-xl bg-slate-50 border border-slate-100 p-3 space-y-1.5" }, [
                      createVNode("div", { class: "font-semibold text-slate-800" }, "\u6536\u5F55\u6807\u51C6\uFF1A"),
                      createVNode("div", null, "1. \u771F\u5B9E\u53EF\u7528\uFF1A\u62E5\u6709\u5728\u7EBF\u53EF\u8BBF\u95EE\u7684 Demo\u3001\u5B98\u7F51\u6216\u5F00\u6E90\u4ED3\u5E93\uFF1B"),
                      createVNode("div", null, "2. AI \u8D4B\u80FD\uFF1A\u6838\u5FC3\u4E1A\u52A1\u6216\u751F\u4EA7\u6D41\u4E2D\u6DF1\u5EA6\u91C7\u7528\u4E86\u5927\u6A21\u578B\u4E0E Agent\uFF1B"),
                      createVNode("div", null, "3. \u8D26\u672C\u900F\u660E\uFF1A\u613F\u610F\u516C\u5F00\u5927\u4F53\u6280\u672F\u6808\u4E0E\u6708\u7B97\u529B\u6210\u672C\u53C2\u8003\u3002")
                    ]),
                    createVNode("p", null, " \u8BF7\u5C06\u4F60\u7684\u9879\u76EE\u540D\u79F0\u3001\u5B9A\u4F4D\u3001\u5B98\u7F51\u4E0E\u6838\u5FC3\u6280\u672F\u6808\u53D1\u81F3\u7AD9\u957F\u5FAE\u4FE1\u6216\u90AE\u4EF6\uFF0C\u4EBA\u5DE5\u6838\u5B9E\u540E\u5C06\u540C\u6B65\u6536\u5F55\u81F3\u672C\u7AD9\u9879\u76EE\u5E93\u5E76\u7F6E\u9876\u5C55\u793A\uFF1A "),
                    createVNode("div", { class: "rounded-xl border border-slate-200 p-3 space-y-2 font-mono text-slate-800" }, [
                      createVNode("div", null, [
                        createTextVNode("\u{1F4EE} \u7AD9\u957F\u90AE\u7BB1: "),
                        createVNode("span", { class: "text-blue-600 font-semibold" }, "coller@hoxi.ai")
                      ]),
                      createVNode("div", null, [
                        createTextVNode("\u{1F4AC} \u5FAE\u4FE1\u4EA4\u6D41: "),
                        createVNode("span", { class: "text-blue-600 font-semibold" }, "\u6DFB\u52A0\u7AD9\u957F\u5FAE\u4FE1\uFF08\u70B9\u51FB\u5173\u4E8E\u9875\u793E\u7FA4\uFF09")
                      ])
                    ])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      size: "sm",
                      onClick: ($event) => isRecommendModalOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u77E5\u9053\u4E86 ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_UModal, {
                modelValue: isFeedbackModalOpen.value,
                "onUpdate:modelValue": ($event) => isFeedbackModalOpen.value = $event,
                title: currentFeedbackProject.value ? `\u9488\u5BF9 ${currentFeedbackProject.value.name} \u7684\u5EFA\u8BAE\u4E0E\u53CD\u9988` : "\u9879\u76EE\u53CD\u9988"
              }, {
                body: withCtx(() => [
                  createVNode("div", { class: "space-y-3 text-xs" }, [
                    createVNode("p", { class: "text-slate-500" }, toDisplayString(_ctx.$t("hoxi.projects.feedbackDesc")), 1),
                    createVNode("div", null, [
                      createVNode(_component_UTextarea, {
                        modelValue: feedbackContent.value,
                        "onUpdate:modelValue": ($event) => feedbackContent.value = $event,
                        rows: "4",
                        placeholder: _ctx.$t("hoxi.projects.feedbackPlaceholder"),
                        size: "sm"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UInput, {
                        modelValue: feedbackContact.value,
                        "onUpdate:modelValue": ($event) => feedbackContact.value = $event,
                        placeholder: "\u4F60\u7684\u8054\u7CFB\u65B9\u5F0F (\u90AE\u7BB1/\u5FAE\u4FE1\uFF0C\u9009\u586B\u65B9\u4FBF\u56DE\u590D)",
                        size: "sm"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode("div", { class: "flex justify-end gap-2" }, [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      size: "sm",
                      onClick: ($event) => isFeedbackModalOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u53D6\u6D88 ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      color: "primary",
                      size: "sm",
                      onClick: submitFeedback
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("hoxi.projects.submitFeedback")), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "title"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
