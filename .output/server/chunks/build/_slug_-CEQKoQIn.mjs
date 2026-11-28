import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { u as useI18n$1, E as useLocaleRouter, bA as useSeoMeta, bB as useJsonLd, P as __nuxt_component_3$4, j as _sfc_main$10 } from './server.mjs';
import { defineComponent, computed, ref, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import HoxiProjectRunPanel from './HoxiProjectRunPanel-CErkaagf.mjs';
import { u as useHoxiProjects } from './useHoxiProjects-DwgQhImr.mjs';
import { n as normalizeHoxiLocale, a as normalizeProjectRunManifest, c as getRunModeActionCopy, i as inferProjectMatchProfile } from './projectMatcher-mcLmK4UC.mjs';
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
import './projects-DCfvntB8.mjs';
import './blogOgCard-Dd_qPNIc.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { locale } = useI18n$1();
    const { localePath } = useLocaleRouter();
    const { projects } = useHoxiProjects();
    const currentLocale = computed(() => normalizeHoxiLocale(locale.value));
    const projectSlug = computed(() => {
      const raw = route.params.slug;
      const parts = Array.isArray(raw) ? raw : [raw];
      return String(parts.at(-1) || "").trim().toLowerCase();
    });
    const project = computed(() => {
      const target = projectSlug.value;
      if (!target) return void 0;
      return projects.value.find(
        (p) => String(p.slug || p.id).toLowerCase() === target || String(p.id).toLowerCase() === target
      );
    });
    const runManifest = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return normalizeProjectRunManifest((_a = project.value) == null ? void 0 : _a.runManifest, {
        id: (_b = project.value) == null ? void 0 : _b.id,
        slug: projectSlug.value,
        category: (_c = project.value) == null ? void 0 : _c.category,
        name: (_d = project.value) == null ? void 0 : _d.name,
        tagline: (_e = project.value) == null ? void 0 : _e.tagline,
        githubUrl: (_f = project.value) == null ? void 0 : _f.githubUrl
      });
    });
    const runActionCopy = computed(() => getRunModeActionCopy(runManifest.value, currentLocale.value));
    const modeBadgeClass = computed(() => {
      switch (runManifest.value.mode) {
        case "workflow_playground":
          return "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300";
        case "gopanel_app":
          return "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300";
        case "shopark_launchpad":
        case "apay_launchpad":
          return "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300";
        default:
          return "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300";
      }
    });
    function scrollToRunPanel() {
      return;
    }
    const matchProfile = computed(() => {
      if (!project.value) {
        return inferProjectMatchProfile({ id: "", category: "saas", name: "", description: "" });
      }
      return project.value.matchProfile || inferProjectMatchProfile(project.value);
    });
    const copy = computed(() => {
      switch (currentLocale.value) {
        case "zh-HK":
          return {
            backToList: "\u8FD4\u56DE\u4E00\u4EBA\u516C\u53F8\u9805\u76EE\u5EAB",
            shareBtn: "\u5206\u4EAB\u9805\u76EE",
            copiedBtn: "\u5DF2\u8907\u88FD\u5206\u4EAB\u9023\u7D50",
            revenueCeiling: "\u9810\u4F30\u6708\u5EA6\u71DF\u6536\u7A7A\u9593",
            fitProfileTitle: "\u4E94\u89D2\u8272\u8207\u4E94\u7DAD\u80FD\u529B\u756B\u50CF",
            testMyFit: "\u6E2C\u6E2C\u6211\u7684\u5951\u5408\u5EA6",
            roleFitLabel: "\u4E94\u985E\u89D2\u8272\u5951\u5408\u5206",
            dimThresholdLabel: "\u4E94\u7DAD\u80FD\u529B\u5EFA\u8B70\u9580\u6ABB",
            relatedHeading: "\u5176\u4ED6\u4E00\u4EBA\u516C\u53F8\u5BE6\u6230\u9805\u76EE",
            inspectBtn: "\u67E5\u770B\u62C6\u89E3",
            notFoundTitle: "\u672A\u627E\u5230\u5C0D\u61C9\u9805\u76EE",
            roles: { trade: "\u5916\u8CBF/\u8DE8\u5883", growth: "\u904B\u71DF/\u589E\u9577", product: "\u7522\u54C1\u7D93\u7406", developer: "\u7814\u767C\u5DE5\u7A0B", designer: "\u8A2D\u8A08\u5E2B" },
            dims: { market: "\u5546\u696D\u9A57\u8B49", delivery: "\u5168\u68E7\u4EA4\u4ED8", distribution: "\u6D41\u91CF\u5206\u767C", leverage: "\u7B97\u529B\u69D3\u687F", resilience: "\u5FC3\u667A\u97CC\u6027" }
          };
        case "en":
          return {
            backToList: "Back to Solo Projects",
            shareBtn: "Share Project",
            copiedBtn: "Link Copied",
            revenueCeiling: "Est. Monthly Revenue",
            fitProfileTitle: "5-Role & 5D Capability Fit",
            testMyFit: "Test My Fit",
            roleFitLabel: "Role Affinity Scores",
            dimThresholdLabel: "Recommended 5D Thresholds",
            relatedHeading: "More Solo Builder Projects",
            inspectBtn: "View Breakdown",
            notFoundTitle: "Project Not Found",
            roles: { trade: "Cross-Border", growth: "Growth", product: "Product", developer: "Developer", designer: "Designer" },
            dims: { market: "Market Validation", delivery: "AI Delivery", distribution: "Distribution", leverage: "Cost Leverage", resilience: "Runway & Grit" }
          };
        case "ja":
          return {
            backToList: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4E00\u89A7\u3078\u623B\u308B",
            shareBtn: "\u5171\u6709\u3059\u308B",
            copiedBtn: "\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",
            revenueCeiling: "\u60F3\u5B9A\u6708\u5546\u30EC\u30F3\u30B8",
            fitProfileTitle: "\u8077\u7A2E\u5225\u30FB5\u6B21\u5143\u30B9\u30AD\u30EB\u9069\u6027",
            testMyFit: "\u9069\u6027\u3092\u8A3A\u65AD\u3059\u308B",
            roleFitLabel: "5\u8077\u7A2E\u30DE\u30C3\u30C1\u5EA6",
            dimThresholdLabel: "\u63A8\u59685\u6B21\u5143\u30B9\u30AD\u30EB\u76EE\u5B89",
            relatedHeading: "\u305D\u306E\u4ED6\u306E1\u4EBA\u8D77\u696D\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
            inspectBtn: "\u8A73\u7D30\u3092\u898B\u308B",
            notFoundTitle: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093",
            roles: { trade: "\u8D8A\u5883EC\u30FB\u8CBF\u6613", growth: "\u30B0\u30ED\u30FC\u30B9", product: "PM", developer: "\u30A8\u30F3\u30B8\u30CB\u30A2", designer: "\u30C7\u30B6\u30A4\u30CA\u30FC" },
            dims: { market: "\u5E02\u5834\u691C\u8A3C", delivery: "AI\u5B9F\u88C5\u529B", distribution: "\u96C6\u5BA2\u529B", leverage: "\u8A08\u7B97\u30EC\u30D0\u30EC\u30C3\u30B8", resilience: "\u7D99\u7D9A\u529B" }
          };
        case "ko":
          return {
            backToList: "\uD504\uB85C\uC81D\uD2B8 \uBAA9\uB85D\uC73C\uB85C",
            shareBtn: "\uD504\uB85C\uC81D\uD2B8 \uACF5\uC720",
            copiedBtn: "\uB9C1\uD06C \uBCF5\uC0AC\uB428",
            revenueCeiling: "\uC608\uC0C1 \uC6D4 \uB9E4\uCD9C \uBC94\uC704",
            fitProfileTitle: "5\uB300 \uC9C1\uAD70 \uBC0F 5\uCC28\uC6D0 \uC5ED\uB7C9 \uC801\uD569\uB3C4",
            testMyFit: "\uB0B4 \uC801\uD569\uB3C4 \uD14C\uC2A4\uD2B8",
            roleFitLabel: "\uC9C1\uAD70\uBCC4 \uC801\uD569\uB3C4 \uC810\uC218",
            dimThresholdLabel: "\uAD8C\uC7A5 5\uCC28\uC6D0 \uC5ED\uB7C9 \uAE30\uC900",
            relatedHeading: "\uB2E4\uB978 1\uC778 \uAE30\uC5C5 \uC2E4\uC804 \uD504\uB85C\uC81D\uD2B8",
            inspectBtn: "\uC0C1\uC138 \uBCF4\uAE30",
            notFoundTitle: "\uD504\uB85C\uC81D\uD2B8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",
            roles: { trade: "\uD574\uC678\uBB34\uC5ED\xB7\uC140\uB7EC", growth: "\uADF8\uB85C\uC2A4\xB7\uB9C8\uCF00\uD305", product: "PM\xB7\uAE30\uD68D", developer: "\uAC1C\uBC1C\uC790", designer: "\uB514\uC790\uC774\uB108" },
            dims: { market: "\uC2DC\uC7A5 \uAC80\uC99D", delivery: "AI \uAD6C\uD604\uB825", distribution: "\uD2B8\uB798\uD53D \uBC30\uD3EC", leverage: "\uC5F0\uC0B0 \uB808\uBC84\uB9AC\uC9C0", resilience: "\uBA58\uD0C8 \uD68C\uBCF5\uB825" }
          };
        default:
          return {
            backToList: "\u8FD4\u56DE\u4E00\u4EBA\u516C\u53F8\u9879\u76EE\u5E93",
            shareBtn: "\u5206\u4EAB\u9879\u76EE",
            copiedBtn: "\u5DF2\u590D\u5236\u5206\u4EAB\u94FE\u63A5",
            revenueCeiling: "\u9884\u4F30\u6708\u5EA6\u8425\u6536\u7A7A\u95F4",
            fitProfileTitle: "\u4E94\u89D2\u8272\u4E0E\u4E94\u7EF4\u80FD\u529B\u753B\u50CF",
            testMyFit: "\u6D4B\u6D4B\u6211\u7684\u5951\u5408\u5EA6",
            roleFitLabel: "\u4E94\u7C7B\u89D2\u8272\u5951\u5408\u5206",
            dimThresholdLabel: "\u4E94\u7EF4\u80FD\u529B\u5EFA\u8BAE\u95E8\u69DB",
            relatedHeading: "\u5176\u4ED6\u4E00\u4EBA\u516C\u53F8\u5B9E\u6218\u9879\u76EE",
            inspectBtn: "\u67E5\u770B\u62C6\u89E3",
            notFoundTitle: "\u672A\u627E\u5230\u5BF9\u5E94\u9879\u76EE",
            roles: { trade: "\u5916\u8D38/\u8DE8\u5883", growth: "\u8FD0\u8425/\u589E\u957F", product: "\u4EA7\u54C1\u7ECF\u7406", developer: "\u7814\u53D1\u5DE5\u7A0B", designer: "\u8BBE\u8BA1\u5E08" },
            dims: { market: "\u5546\u4E1A\u9A8C\u8BC1", delivery: "\u5168\u6808\u4EA4\u4ED8", distribution: "\u6D41\u91CF\u5206\u53D1", leverage: "\u7B97\u529B\u6760\u6746", resilience: "\u5FC3\u667A\u97E7\u6027" }
          };
      }
    });
    const roleScoreEntries = computed(() => {
      const roles = matchProfile.value.roles;
      const keys = ["trade", "growth", "product", "developer", "designer"];
      return keys.map((k) => {
        var _a;
        return {
          key: k,
          label: copy.value.roles[k],
          score: (_a = roles[k]) != null ? _a : 75
        };
      });
    });
    const dimensionEntries = computed(() => {
      const dims = matchProfile.value.dimensions;
      const keys = ["market", "delivery", "distribution", "leverage", "resilience"];
      return keys.map((k) => {
        var _a;
        return {
          key: k,
          label: copy.value.dims[k],
          score: (_a = dims[k]) != null ? _a : 75
        };
      });
    });
    const relatedProjects = computed(() => {
      if (!project.value) return [];
      const currentId = project.value.id;
      const sameCategory = projects.value.filter((p) => {
        var _a;
        return p.id !== currentId && p.category === ((_a = project.value) == null ? void 0 : _a.category);
      });
      const others = projects.value.filter((p) => {
        var _a;
        return p.id !== currentId && p.category !== ((_a = project.value) == null ? void 0 : _a.category);
      });
      return [...sameCategory, ...others].slice(0, 3);
    });
    const copied = ref(false);
    const shareCurrentProject = async () => {
      if (!project.value) return;
      const p = project.value;
      const slug = p.slug || p.id;
      const path = localePath(`/projects/${slug}`);
      const origin = "https://hoxi.ai";
      const url = `${origin}${path}`;
      `\u3010${p.name}\u3011${p.tagline}
${p.monthlyCost || ""}
${url}`;
      try {
        if (false) ;
      } catch {
      }
      try {
        if (false) ;
      } catch {
      }
    };
    const seoTitle = computed(() => {
      return project.value ? `${project.value.name} \u2014 ${project.value.tagline}` : copy.value.notFoundTitle;
    });
    const seoDescription = computed(() => {
      return project.value ? project.value.description : "";
    });
    useSeoMeta({
      title: () => seoTitle.value,
      description: () => seoDescription.value,
      ogTitle: () => seoTitle.value,
      ogDescription: () => seoDescription.value,
      ogType: "article",
      twitterCard: "summary_large_image",
      twitterTitle: () => seoTitle.value,
      twitterDescription: () => seoDescription.value
    });
    useJsonLd("hoxi-project-detail", computed(() => {
      if (!project.value) return [];
      const p = project.value;
      const slug = p.slug || p.id;
      return [
        {
          "@type": "SoftwareApplication",
          name: p.name,
          applicationCategory: p.categoryLabel || "BusinessApplication",
          operatingSystem: "Web, macOS, Windows, iOS, Android",
          description: p.description,
          url: localePath(`/projects/${slug}`)
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Hoxi", item: localePath("/") },
            { "@type": "ListItem", position: 2, name: "Projects", item: localePath("/projects") },
            { "@type": "ListItem", position: 3, name: p.name, item: localePath(`/projects/${slug}`) }
          ]
        }
      ];
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_UIcon = _sfc_main$10;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (project.value) {
              _push2(`<div class="py-8 md:py-16"${_scopeId}><div class="flex flex-wrap items-center justify-between gap-3 mb-6"${_scopeId}><div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 min-w-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/"),
                class: "hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("hoxi.nav.home"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.nav.home")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span${_scopeId}>/</span>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/projects"),
                class: "hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("hoxi.nav.projects"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.nav.projects")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span${_scopeId}>/</span><span class="text-slate-900 dark:text-white font-medium truncate"${_scopeId}>${ssrInterpolate(project.value.name)}</span></div><button type="button" class="${ssrRenderClass([copied.value ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300" : "border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-[#0d0f14] dark:text-slate-200 dark:hover:border-blue-500", "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors cursor-pointer"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: copied.value ? "ph:check-bold" : "ph:share-network-bold",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(copied.value ? copy.value.copiedBtn : copy.value.shareBtn)}</span></button></div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/projects"),
                class: "inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:arrow-left",
                      class: "w-4 h-4"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span${_scopeId2}>${ssrInterpolate(copy.value.backToList)}</span>`);
                  } else {
                    return [
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-left",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", null, toDisplayString(copy.value.backToList), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-6 sm:p-8 space-y-6"${_scopeId}><div class="flex flex-col lg:flex-row lg:items-start justify-between gap-6"${_scopeId}><div class="space-y-3 flex-1"${_scopeId}><div class="flex flex-wrap items-center gap-2 font-mono text-xs"${_scopeId}><span class="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 font-semibold dark:bg-blue-950/50 dark:text-blue-300"${_scopeId}>${ssrInterpolate(project.value.categoryLabel)}</span><span class="${ssrRenderClass([modeBadgeClass.value, "px-2.5 py-0.5 rounded-full font-semibold"])}"${_scopeId}>${ssrInterpolate(runActionCopy.value.modeBadge)}</span>`);
              if (project.value.statusLabel) {
                _push2(`<span class="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"${_scopeId}>${ssrInterpolate(project.value.statusLabel)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (project.value.badge) {
                _push2(`<span class="px-2 py-0.5 rounded bg-blue-600 text-[11px] font-bold uppercase tracking-wider text-white"${_scopeId}>${ssrInterpolate(project.value.badge)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="text-slate-400 dark:text-slate-500"${_scopeId}> slug: ${ssrInterpolate(projectSlug.value)}</span></div><h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight"${_scopeId}>${ssrInterpolate(project.value.name)}</h1><p class="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-200 leading-relaxed"${_scopeId}>${ssrInterpolate(project.value.tagline)}</p></div><div class="flex flex-wrap sm:flex-nowrap lg:flex-col gap-2.5 shrink-0 w-full lg:w-64"${_scopeId}>`);
              if (runManifest.value.mode === "workflow_playground" || runManifest.value.mode === "gopanel_app") {
                _push2(`<button type="button" class="flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors cursor-pointer"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: runManifest.value.mode === "workflow_playground" ? "ph:lightning-bold" : "ph:cube-bold",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(runActionCopy.value.primaryCta)}</span></button>`);
              } else if (runManifest.value.mode === "shopark_launchpad") {
                _push2(`<a${ssrRenderAttr("href", runManifest.value.launchpadUrl || "https://myshopark.com")} target="_blank" rel="noopener noreferrer" class="flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:storefront-bold",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(runActionCopy.value.primaryCta)}</span></a>`);
              } else if (runManifest.value.mode === "apay_launchpad") {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: unref(localePath)(`/site-builder?project=${projectSlug.value}`),
                  class: "flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:rocket-launch-bold",
                        class: "w-4 h-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(runActionCopy.value.primaryCta)}</span>`);
                    } else {
                      return [
                        createVNode(_component_UIcon, {
                          name: "ph:rocket-launch-bold",
                          class: "w-4 h-4"
                        }),
                        createVNode("span", null, toDisplayString(runActionCopy.value.primaryCta), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (runManifest.value.mode !== "apay_launchpad" && runManifest.value.mode !== "guide_only") {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: unref(localePath)(`/site-builder?project=${projectSlug.value}`),
                  class: "flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/50 dark:bg-emerald-950/20 hover:border-emerald-500 text-emerald-700 dark:text-emerald-300 px-4 py-2 text-xs font-semibold transition-colors"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:rocket-launch-bold",
                        class: "w-3.5 h-3.5"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(runActionCopy.value.secondaryMonetizeCta)}</span>`);
                    } else {
                      return [
                        createVNode(_component_UIcon, {
                          name: "ph:rocket-launch-bold",
                          class: "w-3.5 h-3.5"
                        }),
                        createVNode("span", null, toDisplayString(runActionCopy.value.secondaryMonetizeCta), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (project.value.storyUrl) {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: unref(localePath)(project.value.storyUrl),
                  class: "flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:book-open-text-bold",
                        class: "w-4 h-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.projects.viewStory"))}</span>`);
                    } else {
                      return [
                        createVNode(_component_UIcon, {
                          name: "ph:book-open-text-bold",
                          class: "w-4 h-4"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.projects.viewStory")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (project.value.url && !project.value.url.endsWith("/projects")) {
                _push2(`<a${ssrRenderAttr("href", project.value.url)} target="_blank" rel="noopener noreferrer" class="flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-800 dark:text-slate-200 px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.viewSite"))}</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-up-right-bold",
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
                _push2(`</a>`);
              } else {
                _push2(`<!---->`);
              }
              if (project.value.githubUrl) {
                _push2(`<a${ssrRenderAttr("href", project.value.githubUrl)} target="_blank" rel="noopener noreferrer" class="flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-400 text-slate-700 dark:text-slate-300 px-4 py-2 text-xs font-mono font-semibold transition-colors"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:github-logo-bold",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.viewGithub"))}</span></a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="grid sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800"${_scopeId}><div class="rounded-xl border border-emerald-200/70 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/20 p-4 space-y-1"${_scopeId}><div class="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:coins-bold",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.monthlyCost"))}</span></div><div class="text-xs sm:text-sm font-mono font-semibold text-emerald-800 dark:text-emerald-200 leading-snug"${_scopeId}>${ssrInterpolate(project.value.monthlyCost || matchProfile.value.revenueModel)}</div></div><div class="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-[#111319] p-4 space-y-1"${_scopeId}><div class="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:cpu-bold",
                class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.modelUsed"))}</span></div><div class="text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 leading-snug"${_scopeId}>${ssrInterpolate(project.value.modelUsed || "DeepSeek-V3 + Claude Sonnet 4.6")}</div></div><div class="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-[#111319] p-4 space-y-1"${_scopeId}><div class="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:chart-line-up-bold",
                class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(copy.value.revenueCeiling)}</span></div><div class="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white leading-snug"${_scopeId}>${ssrInterpolate(matchProfile.value.monthlyRevenueEstimate || "$2,500 - $18,000 / mo")}</div></div></div></div>`);
              _push2(ssrRenderComponent(HoxiProjectRunPanel, {
                "project-slug": projectSlug.value,
                "project-name": project.value.name,
                manifest: runManifest.value,
                locale: currentLocale.value
              }, null, _parent2, _scopeId));
              _push2(`<div id="project-breakdown" class="mt-8 grid lg:grid-cols-12 gap-6 items-start"${_scopeId}><div class="lg:col-span-7 space-y-6"${_scopeId}><section class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-6 space-y-3"${_scopeId}><h2 class="text-base sm:text-lg font-bold text-slate-950 dark:text-white flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:lightbulb-filament-bold",
                class: "w-5 h-5 text-blue-600 dark:text-blue-400"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.logicLabel"))}</span></h2><p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(project.value.description)}</p></section>`);
              if (project.value.highlights && project.value.highlights.length) {
                _push2(`<section class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-6 space-y-4"${_scopeId}><h2 class="text-base sm:text-lg font-bold text-slate-950 dark:text-white flex items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:list-checks-bold",
                  class: "w-5 h-5 text-blue-600 dark:text-blue-400"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.highlightsLabel"))}</span></h2><div class="space-y-3"${_scopeId}><!--[-->`);
                ssrRenderList(project.value.highlights, (hl, idx) => {
                  _push2(`<div class="rounded-xl border border-slate-100 dark:border-slate-800/90 bg-slate-50/70 dark:bg-[#111319] p-4 flex items-start gap-3"${_scopeId}><span class="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-600 text-white shrink-0 mt-0.5"${_scopeId}> 0${ssrInterpolate(idx + 1)}</span><p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200"${_scopeId}>${ssrInterpolate(hl)}</p></div>`);
                });
                _push2(`<!--]--></div></section>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="lg:col-span-5 space-y-6"${_scopeId}><section class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-6 space-y-5"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><h2 class="text-base font-bold text-slate-950 dark:text-white flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:chart-polar-bold",
                class: "w-5 h-5 text-blue-600 dark:text-blue-400"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(copy.value.fitProfileTitle)}</span></h2>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/readiness"),
                class: "text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(copy.value.testMyFit)}</span>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-3.5 h-3.5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(copy.value.testMyFit), 1),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-3.5 h-3.5"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="space-y-2.5"${_scopeId}><div class="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(copy.value.roleFitLabel)}</div><div class="grid grid-cols-2 sm:grid-cols-3 gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(roleScoreEntries.value, (item) => {
                _push2(`<div class="rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-[#111319] px-3 py-2 flex items-center justify-between text-xs"${_scopeId}><span class="text-slate-600 dark:text-slate-300 truncate"${_scopeId}>${ssrInterpolate(item.label)}</span><span class="font-mono font-bold text-blue-600 dark:text-blue-400 ml-1.5"${_scopeId}>${ssrInterpolate(item.score)}</span></div>`);
              });
              _push2(`<!--]--></div></div><div class="space-y-2.5 pt-3 border-t border-slate-100 dark:border-slate-800"${_scopeId}><div class="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(copy.value.dimThresholdLabel)}</div><div class="space-y-2"${_scopeId}><!--[-->`);
              ssrRenderList(dimensionEntries.value, (dim) => {
                _push2(`<div class="space-y-1"${_scopeId}><div class="flex items-center justify-between text-xs"${_scopeId}><span class="text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(dim.label)}</span><span class="font-mono font-bold text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(dim.score)}/100</span></div><div class="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden"${_scopeId}><div class="h-full rounded-full bg-blue-600 dark:bg-blue-500" style="${ssrRenderStyle({ width: `${dim.score}%` })}"${_scopeId}></div></div></div>`);
              });
              _push2(`<!--]--></div></div>`);
              if (project.value.techStack && project.value.techStack.length) {
                _push2(`<div class="space-y-2.5 pt-3 border-t border-slate-100 dark:border-slate-800"${_scopeId}><div class="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.techStack"))}</div><div class="flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
                ssrRenderList(project.value.techStack, (tech) => {
                  _push2(`<span class="px-2.5 py-1 rounded-md bg-slate-50 dark:bg-[#111319] border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300"${_scopeId}>${ssrInterpolate(tech)}</span>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</section></div></div>`);
              if (relatedProjects.value.length) {
                _push2(`<section class="mt-14 pt-10 border-t border-slate-200/80 dark:border-slate-800"${_scopeId}><div class="flex items-center justify-between mb-5"${_scopeId}><h2 class="text-base sm:text-lg font-bold text-slate-950 dark:text-white"${_scopeId}>${ssrInterpolate(copy.value.relatedHeading)}</h2>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: unref(localePath)("/projects"),
                  class: "text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(copy.value.backToList)}</span>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-3.5 h-3.5"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(copy.value.backToList), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"${_scopeId}><!--[-->`);
                ssrRenderList(relatedProjects.value, (rel) => {
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    key: rel.slug || rel.id,
                    to: unref(localePath)(`/projects/${rel.slug || rel.id}`),
                    class: "group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-5 hover:border-blue-500 transition-colors flex flex-col justify-between space-y-3"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="space-y-1.5"${_scopeId2}><div class="flex items-center justify-between text-xs font-mono text-slate-400"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(rel.categoryLabel)}</span>`);
                        if (rel.badge) {
                          _push3(`<span class="text-blue-600 dark:text-blue-400 font-semibold"${_scopeId2}>${ssrInterpolate(rel.badge)}</span>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div><h3 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"${_scopeId2}>${ssrInterpolate(rel.name)}</h3><p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed"${_scopeId2}>${ssrInterpolate(rel.tagline)}</p></div><div class="text-xs font-semibold text-blue-600 dark:text-blue-400 inline-flex items-center gap-1"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(copy.value.inspectBtn)}</span>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                        }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-1.5" }, [
                            createVNode("div", { class: "flex items-center justify-between text-xs font-mono text-slate-400" }, [
                              createVNode("span", null, toDisplayString(rel.categoryLabel), 1),
                              rel.badge ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-blue-600 dark:text-blue-400 font-semibold"
                              }, toDisplayString(rel.badge), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("h3", { class: "text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, toDisplayString(rel.name), 1),
                            createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed" }, toDisplayString(rel.tagline), 1)
                          ]),
                          createVNode("div", { class: "text-xs font-semibold text-blue-600 dark:text-blue-400 inline-flex items-center gap-1" }, [
                            createVNode("span", null, toDisplayString(copy.value.inspectBtn), 1),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-right",
                              class: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                            })
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
              _push2(`<div class="py-20 text-center space-y-4"${_scopeId}><h2 class="text-xl font-bold text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(copy.value.notFoundTitle)}</h2>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/projects"),
                class: "inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:arrow-left",
                      class: "w-4 h-4"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span${_scopeId2}>${ssrInterpolate(copy.value.backToList)}</span>`);
                  } else {
                    return [
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-left",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", null, toDisplayString(copy.value.backToList), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              project.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "py-8 md:py-16"
              }, [
                createVNode("div", { class: "flex flex-wrap items-center justify-between gap-3 mb-6" }, [
                  createVNode("div", { class: "flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 min-w-0" }, [
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/"),
                      class: "hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("hoxi.nav.home")), 1)
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode("span", null, "/"),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/projects"),
                      class: "hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("hoxi.nav.projects")), 1)
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode("span", null, "/"),
                    createVNode("span", { class: "text-slate-900 dark:text-white font-medium truncate" }, toDisplayString(project.value.name), 1)
                  ]),
                  createVNode("button", {
                    type: "button",
                    class: ["inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors cursor-pointer", copied.value ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300" : "border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-[#0d0f14] dark:text-slate-200 dark:hover:border-blue-500"],
                    onClick: shareCurrentProject
                  }, [
                    createVNode(_component_UIcon, {
                      name: copied.value ? "ph:check-bold" : "ph:share-network-bold",
                      class: "w-3.5 h-3.5"
                    }, null, 8, ["name"]),
                    createVNode("span", null, toDisplayString(copied.value ? copy.value.copiedBtn : copy.value.shareBtn), 1)
                  ], 2)
                ]),
                createVNode(_component_NuxtLink, {
                  to: unref(localePath)("/projects"),
                  class: "inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-left",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", null, toDisplayString(copy.value.backToList), 1)
                  ]),
                  _: 1
                }, 8, ["to"]),
                createVNode("div", { class: "rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-6 sm:p-8 space-y-6" }, [
                  createVNode("div", { class: "flex flex-col lg:flex-row lg:items-start justify-between gap-6" }, [
                    createVNode("div", { class: "space-y-3 flex-1" }, [
                      createVNode("div", { class: "flex flex-wrap items-center gap-2 font-mono text-xs" }, [
                        createVNode("span", { class: "px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 font-semibold dark:bg-blue-950/50 dark:text-blue-300" }, toDisplayString(project.value.categoryLabel), 1),
                        createVNode("span", {
                          class: ["px-2.5 py-0.5 rounded-full font-semibold", modeBadgeClass.value]
                        }, toDisplayString(runActionCopy.value.modeBadge), 3),
                        project.value.statusLabel ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                        }, toDisplayString(project.value.statusLabel), 1)) : createCommentVNode("", true),
                        project.value.badge ? (openBlock(), createBlock("span", {
                          key: 1,
                          class: "px-2 py-0.5 rounded bg-blue-600 text-[11px] font-bold uppercase tracking-wider text-white"
                        }, toDisplayString(project.value.badge), 1)) : createCommentVNode("", true),
                        createVNode("span", { class: "text-slate-400 dark:text-slate-500" }, " slug: " + toDisplayString(projectSlug.value), 1)
                      ]),
                      createVNode("h1", { class: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight" }, toDisplayString(project.value.name), 1),
                      createVNode("p", { class: "text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-200 leading-relaxed" }, toDisplayString(project.value.tagline), 1)
                    ]),
                    createVNode("div", { class: "flex flex-wrap sm:flex-nowrap lg:flex-col gap-2.5 shrink-0 w-full lg:w-64" }, [
                      runManifest.value.mode === "workflow_playground" || runManifest.value.mode === "gopanel_app" ? (openBlock(), createBlock("button", {
                        key: 0,
                        type: "button",
                        class: "flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors cursor-pointer",
                        onClick: scrollToRunPanel
                      }, [
                        createVNode(_component_UIcon, {
                          name: runManifest.value.mode === "workflow_playground" ? "ph:lightning-bold" : "ph:cube-bold",
                          class: "w-4 h-4"
                        }, null, 8, ["name"]),
                        createVNode("span", null, toDisplayString(runActionCopy.value.primaryCta), 1)
                      ])) : runManifest.value.mode === "shopark_launchpad" ? (openBlock(), createBlock("a", {
                        key: 1,
                        href: runManifest.value.launchpadUrl || "https://myshopark.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:storefront-bold",
                          class: "w-4 h-4"
                        }),
                        createVNode("span", null, toDisplayString(runActionCopy.value.primaryCta), 1)
                      ], 8, ["href"])) : runManifest.value.mode === "apay_launchpad" ? (openBlock(), createBlock(_component_NuxtLink, {
                        key: 2,
                        to: unref(localePath)(`/site-builder?project=${projectSlug.value}`),
                        class: "flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "ph:rocket-launch-bold",
                            class: "w-4 h-4"
                          }),
                          createVNode("span", null, toDisplayString(runActionCopy.value.primaryCta), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])) : createCommentVNode("", true),
                      runManifest.value.mode !== "apay_launchpad" && runManifest.value.mode !== "guide_only" ? (openBlock(), createBlock(_component_NuxtLink, {
                        key: 3,
                        to: unref(localePath)(`/site-builder?project=${projectSlug.value}`),
                        class: "flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/50 dark:bg-emerald-950/20 hover:border-emerald-500 text-emerald-700 dark:text-emerald-300 px-4 py-2 text-xs font-semibold transition-colors"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "ph:rocket-launch-bold",
                            class: "w-3.5 h-3.5"
                          }),
                          createVNode("span", null, toDisplayString(runActionCopy.value.secondaryMonetizeCta), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])) : createCommentVNode("", true),
                      project.value.storyUrl ? (openBlock(), createBlock(_component_NuxtLink, {
                        key: 4,
                        to: unref(localePath)(project.value.storyUrl),
                        class: "flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "ph:book-open-text-bold",
                            class: "w-4 h-4"
                          }),
                          createVNode("span", null, toDisplayString(_ctx.$t("hoxi.projects.viewStory")), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])) : createCommentVNode("", true),
                      project.value.url && !project.value.url.endsWith("/projects") ? (openBlock(), createBlock("a", {
                        key: 5,
                        href: project.value.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-800 dark:text-slate-200 px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors"
                      }, [
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.projects.viewSite")), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-up-right-bold",
                          class: "w-3.5 h-3.5"
                        })
                      ], 8, ["href"])) : createCommentVNode("", true),
                      project.value.githubUrl ? (openBlock(), createBlock("a", {
                        key: 6,
                        href: project.value.githubUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-400 text-slate-700 dark:text-slate-300 px-4 py-2 text-xs font-mono font-semibold transition-colors"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:github-logo-bold",
                          class: "w-4 h-4"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.projects.viewGithub")), 1)
                      ], 8, ["href"])) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", { class: "grid sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800" }, [
                    createVNode("div", { class: "rounded-xl border border-emerald-200/70 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/20 p-4 space-y-1" }, [
                      createVNode("div", { class: "font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:coins-bold",
                          class: "w-3.5 h-3.5"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.projects.monthlyCost")), 1)
                      ]),
                      createVNode("div", { class: "text-xs sm:text-sm font-mono font-semibold text-emerald-800 dark:text-emerald-200 leading-snug" }, toDisplayString(project.value.monthlyCost || matchProfile.value.revenueModel), 1)
                    ]),
                    createVNode("div", { class: "rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-[#111319] p-4 space-y-1" }, [
                      createVNode("div", { class: "font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:cpu-bold",
                          class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.projects.modelUsed")), 1)
                      ]),
                      createVNode("div", { class: "text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 leading-snug" }, toDisplayString(project.value.modelUsed || "DeepSeek-V3 + Claude Sonnet 4.6"), 1)
                    ]),
                    createVNode("div", { class: "rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-[#111319] p-4 space-y-1" }, [
                      createVNode("div", { class: "font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:chart-line-up-bold",
                          class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
                        }),
                        createVNode("span", null, toDisplayString(copy.value.revenueCeiling), 1)
                      ]),
                      createVNode("div", { class: "text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white leading-snug" }, toDisplayString(matchProfile.value.monthlyRevenueEstimate || "$2,500 - $18,000 / mo"), 1)
                    ])
                  ])
                ]),
                createVNode(HoxiProjectRunPanel, {
                  "project-slug": projectSlug.value,
                  "project-name": project.value.name,
                  manifest: runManifest.value,
                  locale: currentLocale.value
                }, null, 8, ["project-slug", "project-name", "manifest", "locale"]),
                createVNode("div", {
                  id: "project-breakdown",
                  class: "mt-8 grid lg:grid-cols-12 gap-6 items-start"
                }, [
                  createVNode("div", { class: "lg:col-span-7 space-y-6" }, [
                    createVNode("section", { class: "rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-6 space-y-3" }, [
                      createVNode("h2", { class: "text-base sm:text-lg font-bold text-slate-950 dark:text-white flex items-center gap-2" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:lightbulb-filament-bold",
                          class: "w-5 h-5 text-blue-600 dark:text-blue-400"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.projects.logicLabel")), 1)
                      ]),
                      createVNode("p", { class: "text-sm leading-relaxed text-slate-600 dark:text-slate-300" }, toDisplayString(project.value.description), 1)
                    ]),
                    project.value.highlights && project.value.highlights.length ? (openBlock(), createBlock("section", {
                      key: 0,
                      class: "rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-6 space-y-4"
                    }, [
                      createVNode("h2", { class: "text-base sm:text-lg font-bold text-slate-950 dark:text-white flex items-center gap-2" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:list-checks-bold",
                          class: "w-5 h-5 text-blue-600 dark:text-blue-400"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.projects.highlightsLabel")), 1)
                      ]),
                      createVNode("div", { class: "space-y-3" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(project.value.highlights, (hl, idx) => {
                          return openBlock(), createBlock("div", {
                            key: idx,
                            class: "rounded-xl border border-slate-100 dark:border-slate-800/90 bg-slate-50/70 dark:bg-[#111319] p-4 flex items-start gap-3"
                          }, [
                            createVNode("span", { class: "font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-600 text-white shrink-0 mt-0.5" }, " 0" + toDisplayString(idx + 1), 1),
                            createVNode("p", { class: "text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200" }, toDisplayString(hl), 1)
                          ]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "lg:col-span-5 space-y-6" }, [
                    createVNode("section", { class: "rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-6 space-y-5" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("h2", { class: "text-base font-bold text-slate-950 dark:text-white flex items-center gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:chart-polar-bold",
                            class: "w-5 h-5 text-blue-600 dark:text-blue-400"
                          }),
                          createVNode("span", null, toDisplayString(copy.value.fitProfileTitle), 1)
                        ]),
                        createVNode(_component_NuxtLink, {
                          to: unref(localePath)("/readiness"),
                          class: "text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, toDisplayString(copy.value.testMyFit), 1),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-right",
                              class: "w-3.5 h-3.5"
                            })
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ]),
                      createVNode("div", { class: "space-y-2.5" }, [
                        createVNode("div", { class: "text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500" }, toDisplayString(copy.value.roleFitLabel), 1),
                        createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-3 gap-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(roleScoreEntries.value, (item) => {
                            return openBlock(), createBlock("div", {
                              key: item.key,
                              class: "rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-[#111319] px-3 py-2 flex items-center justify-between text-xs"
                            }, [
                              createVNode("span", { class: "text-slate-600 dark:text-slate-300 truncate" }, toDisplayString(item.label), 1),
                              createVNode("span", { class: "font-mono font-bold text-blue-600 dark:text-blue-400 ml-1.5" }, toDisplayString(item.score), 1)
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "space-y-2.5 pt-3 border-t border-slate-100 dark:border-slate-800" }, [
                        createVNode("div", { class: "text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500" }, toDisplayString(copy.value.dimThresholdLabel), 1),
                        createVNode("div", { class: "space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(dimensionEntries.value, (dim) => {
                            return openBlock(), createBlock("div", {
                              key: dim.key,
                              class: "space-y-1"
                            }, [
                              createVNode("div", { class: "flex items-center justify-between text-xs" }, [
                                createVNode("span", { class: "text-slate-600 dark:text-slate-300" }, toDisplayString(dim.label), 1),
                                createVNode("span", { class: "font-mono font-bold text-slate-900 dark:text-white" }, toDisplayString(dim.score) + "/100", 1)
                              ]),
                              createVNode("div", { class: "h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden" }, [
                                createVNode("div", {
                                  class: "h-full rounded-full bg-blue-600 dark:bg-blue-500",
                                  style: { width: `${dim.score}%` }
                                }, null, 4)
                              ])
                            ]);
                          }), 128))
                        ])
                      ]),
                      project.value.techStack && project.value.techStack.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "space-y-2.5 pt-3 border-t border-slate-100 dark:border-slate-800"
                      }, [
                        createVNode("div", { class: "text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500" }, toDisplayString(_ctx.$t("hoxi.projects.techStack")), 1),
                        createVNode("div", { class: "flex flex-wrap gap-1.5" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(project.value.techStack, (tech) => {
                            return openBlock(), createBlock("span", {
                              key: tech,
                              class: "px-2.5 py-1 rounded-md bg-slate-50 dark:bg-[#111319] border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300"
                            }, toDisplayString(tech), 1);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                relatedProjects.value.length ? (openBlock(), createBlock("section", {
                  key: 0,
                  class: "mt-14 pt-10 border-t border-slate-200/80 dark:border-slate-800"
                }, [
                  createVNode("div", { class: "flex items-center justify-between mb-5" }, [
                    createVNode("h2", { class: "text-base sm:text-lg font-bold text-slate-950 dark:text-white" }, toDisplayString(copy.value.relatedHeading), 1),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/projects"),
                      class: "text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(copy.value.backToList), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5"
                        })
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ]),
                  createVNode("div", { class: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(relatedProjects.value, (rel) => {
                      return openBlock(), createBlock(_component_NuxtLink, {
                        key: rel.slug || rel.id,
                        to: unref(localePath)(`/projects/${rel.slug || rel.id}`),
                        class: "group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-5 hover:border-blue-500 transition-colors flex flex-col justify-between space-y-3"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "space-y-1.5" }, [
                            createVNode("div", { class: "flex items-center justify-between text-xs font-mono text-slate-400" }, [
                              createVNode("span", null, toDisplayString(rel.categoryLabel), 1),
                              rel.badge ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-blue-600 dark:text-blue-400 font-semibold"
                              }, toDisplayString(rel.badge), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("h3", { class: "text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, toDisplayString(rel.name), 1),
                            createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed" }, toDisplayString(rel.tagline), 1)
                          ]),
                          createVNode("div", { class: "text-xs font-semibold text-blue-600 dark:text-blue-400 inline-flex items-center gap-1" }, [
                            createVNode("span", null, toDisplayString(copy.value.inspectBtn), 1),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-right",
                              class: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                            })
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
                createVNode("h2", { class: "text-xl font-bold text-slate-900 dark:text-white" }, toDisplayString(copy.value.notFoundTitle), 1),
                createVNode(_component_NuxtLink, {
                  to: unref(localePath)("/projects"),
                  class: "inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-left",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", null, toDisplayString(copy.value.backToList), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/projects/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-CEQKoQIn.mjs.map
