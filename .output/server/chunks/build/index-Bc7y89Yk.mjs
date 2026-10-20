import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { u as useI18n, D as useLocaleRouter, r as useSettings, y as useFetch, bt as useSeoMeta, bu as useJsonLd, _ as _sfc_main$V, N as __nuxt_component_3$3 } from './server.mjs';
import __nuxt_component_3 from './HoxiHomeWorkspaceShowcase-CIdKEm5-.mjs';
import __nuxt_component_5 from './HoxiHomeSavingsCard-By7K8PzZ.mjs';
import { defineComponent, computed, ref, withAsyncContext, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, createCommentVNode, renderList, withDirectives, vShow, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { u as useHoxiModels } from './useHoxiModels-BgjDUCxB.mjs';
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
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'node:child_process';
import 'process';
import 'buffer';
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
import './HoxiTag-CsgvfRW3.mjs';
import './HoxiVendorDot-BLwK_ZsG.mjs';
import './i18n-data-DAEMwG3q.mjs';
import './gateways-tgDca7H5.mjs';
import './plans-D8XOOLan.mjs';
import './models-VgTGFaGO.mjs';
import './vendors-sPFB0I2R.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale, t } = useI18n();
    const { localePath } = useLocaleRouter();
    const { getSetting } = useSettings();
    const { models } = useHoxiModels();
    const currentLocale = computed(() => typeof locale === "object" && (locale == null ? void 0 : locale.value) ? locale.value : String(locale || "en"));
    const openFaqIndex = ref(0);
    const activePlatform = ref("mac");
    const { data: macRelease } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/hoxi/upgrade",
      {
        key: "hoxi-desktop-upgrade-mac",
        query: { package: "desktop", os: "mac", arch: "arm64" }
      },
      "$MRfyZSLAPA"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: winRelease } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/hoxi/upgrade",
      {
        key: "hoxi-desktop-upgrade-win",
        query: { package: "desktop", os: "windows", arch: "x64" }
      },
      "$B_5kXVv-_y"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: linuxRelease } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/hoxi/upgrade",
      {
        key: "hoxi-desktop-upgrade-linux",
        query: { package: "desktop", os: "linux", arch: "x64" }
      },
      "$lOHbvXJz5-"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const platformList = computed(() => [
      { key: "mac", label: t("hoxi.desktop.platformMac"), icon: "ph:apple-logo" },
      { key: "windows", label: t("hoxi.desktop.platformWindows"), icon: "ph:windows-logo" },
      { key: "linux", label: t("hoxi.desktop.platformLinux"), icon: "ph:linux-logo" }
    ]);
    const currentPlatformIcon = computed(() => {
      switch (activePlatform.value) {
        case "windows":
          return "ph:windows-logo";
        case "linux":
          return "ph:linux-logo";
        default:
          return "ph:apple-logo";
      }
    });
    const currentPlatformButtonText = computed(() => {
      switch (activePlatform.value) {
        case "windows":
          return t("hoxi.desktop.downloadWindows");
        case "linux":
          return t("hoxi.desktop.downloadLinux");
        default:
          return t("hoxi.desktop.downloadMacArm64");
      }
    });
    const desktopRelease = computed(() => {
      if (activePlatform.value === "windows") return winRelease.value || null;
      if (activePlatform.value === "linux") return linuxRelease.value || null;
      return macRelease.value || null;
    });
    const desktopVersion = computed(() => {
      var _a;
      return ((_a = [macRelease.value, winRelease.value, linuxRelease.value].filter((release) => Boolean(release == null ? void 0 : release.version)).sort((a, b) => (b.versionCode || 0) - (a.versionCode || 0))[0]) == null ? void 0 : _a.version) || "";
    });
    const desktopPlatformVersion = computed(() => {
      var _a;
      return ((_a = desktopRelease.value) == null ? void 0 : _a.version) || desktopVersion.value;
    });
    const desktopVersionPrefix = computed(() => desktopPlatformVersion.value ? `v${desktopPlatformVersion.value} \xB7 ` : "");
    const currentPlatformBadge = computed(() => {
      switch (activePlatform.value) {
        case "windows":
          return t("hoxi.desktop.osWindows");
        case "linux":
          return t("hoxi.desktop.osLinux");
        default:
          return t("hoxi.desktop.osMac");
      }
    });
    const releasePageUrl = computed(() => "https://github.com/hoxiai/hoxi/releases");
    const desktopDownloadUrl = computed(() => {
      const targetRelease = desktopRelease.value;
      return (targetRelease == null ? void 0 : targetRelease.downloadUrl) || (targetRelease == null ? void 0 : targetRelease.url) || releasePageUrl.value;
    });
    const faqItems = computed(() => [
      { q: t("hoxi.desktop.faq1Q"), a: t("hoxi.desktop.faq1A") },
      { q: t("hoxi.desktop.faq2Q"), a: t("hoxi.desktop.faq2A") },
      { q: t("hoxi.desktop.faq3Q"), a: t("hoxi.desktop.faq3A") },
      { q: t("hoxi.desktop.faq4Q"), a: t("hoxi.desktop.faq4A") }
    ]);
    const seoTitle = computed(() => {
      const loc = currentLocale.value;
      const localeKey = `${loc.replace("-", "_")}_site_title`;
      const titleFromSetting = getSetting(localeKey);
      return titleFromSetting ? String(titleFromSetting).trim() : t("hoxi.home.title");
    });
    const seoDescription = computed(() => {
      const loc = currentLocale.value;
      const localeKey = `${loc.replace("-", "_")}_site_description`;
      const descFromSetting = getSetting(localeKey);
      return descFromSetting ? String(descFromSetting).trim() : t("hoxi.home.subtitle");
    });
    useSeoMeta({
      title: () => seoTitle.value,
      description: () => seoDescription.value,
      ogTitle: () => seoTitle.value,
      ogDescription: () => seoDescription.value,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => seoTitle.value,
      twitterDescription: () => seoDescription.value,
      keywords: "Hoxi Desktop, Hoxi Agent, AI Agentic Engineering, Git Worktree AI, OpenCode Desktop, LLM Leaderboard, AI API Gateway"
    });
    useJsonLd("hoxi-home-jsonld", computed(() => [
      {
        "@type": "SoftwareApplication",
        name: "Hoxi Desktop",
        operatingSystem: "macOS",
        applicationCategory: "DeveloperApplication",
        description: seoDescription.value,
        url: localePath("/")
      },
      {
        "@type": "ItemList",
        name: "LLM Leaderboard",
        itemListElement: models.value.slice(0, 10).map((m, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: m.name,
          item: localePath(`/models/${m.slug}`)
        }))
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.value.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a
          }
        }))
      }
    ]));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_UIcon = _sfc_main$V;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_HoxiHomeWorkspaceShowcase = __nuxt_component_3;
      const _component_HoxiHomeSavingsCard = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="w-full relative overflow-hidden bg-white dark:bg-slate-950 pt-10 pb-14 md:pt-16 md:pb-20 border-b border-slate-200/70 dark:border-slate-900"><div class="pointer-events-none absolute left-1/2 -top-36 -translate-x-1/2 h-[320px] w-[680px] rounded-full bg-blue-500/8 dark:bg-blue-500/12 blur-3xl"></div><div class="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 dark:opacity-35 [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]"></div>`);
      _push(ssrRenderComponent(_component_HoxiContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center"${_scopeId}><div class="inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-[#111319] px-3 py-1 font-mono text-xs text-slate-600 dark:text-slate-300 mb-6"${_scopeId}><span class="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.home.heroBadge"))}</span>`);
            if (desktopVersion.value) {
              _push2(`<!--[--><span class="text-slate-300 dark:text-slate-700"${_scopeId}>|</span><span class="font-semibold text-blue-600 dark:text-blue-400"${_scopeId}> v${ssrInterpolate(desktopVersion.value)}</span><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><h1 class="text-3xl sm:text-5xl md:text-[56px] font-extrabold tracking-tighter text-slate-950 dark:text-white leading-[1.12] sm:leading-[1.06]"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.home.titleLine1"))}</span><span class="block mt-1.5 text-blue-600 dark:text-blue-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.home.titleLine2"))}</span></h1><p class="mt-5 max-w-xl text-sm sm:text-base md:text-[17px] leading-relaxed text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.home.subtitle"))}</p></div><div class="relative z-10 mt-10 md:mt-12 grid lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] gap-3.5 text-left items-stretch"${_scopeId}><article class="rounded-[14px] border border-slate-800/90 bg-[#0b0d12] text-white p-7 sm:p-9 md:p-10 min-h-[340px] flex flex-col justify-between relative overflow-hidden"${_scopeId}><div class="relative z-10 max-w-md space-y-3.5"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="w-fit rounded bg-blue-600 px-2 py-0.5 font-mono text-[11px] font-bold tracking-wider uppercase text-white"${_scopeId}>${ssrInterpolate(currentPlatformBadge.value)}</span><span class="font-mono text-xs text-slate-400"${_scopeId}>${ssrInterpolate(desktopVersionPrefix.value)}Wails v2 + OpenCode </span></div><h2 class="font-mono text-3xl sm:text-4xl md:text-[48px] font-semibold tracking-tighter text-white leading-[1.05]"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.bentoDesktopTitle"))}</h2><p class="text-sm sm:text-base text-slate-400 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.bentoDesktopDesc"))}</p></div><div class="relative z-10 mt-10 space-y-4"${_scopeId}><div class="flex flex-wrap items-center gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(platformList.value, (p) => {
              _push2(`<button type="button" class="${ssrRenderClass([activePlatform.value === p.key ? "bg-blue-600/20 border-blue-500 text-blue-400 font-medium" : "bg-[#12151e] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700", "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border transition-all cursor-pointer"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: p.icon,
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(p.label)}</span></button>`);
            });
            _push2(`<!--]--></div><div class="flex flex-wrap items-center gap-3"${_scopeId}><a${ssrRenderAttr("href", desktopDownloadUrl.value)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 px-5 py-3.5 text-sm sm:text-base font-semibold text-white transition-colors cursor-pointer shadow-lg shadow-blue-600/20"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: currentPlatformIcon.value,
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(currentPlatformButtonText.value)}</span></a><a${ssrRenderAttr("href", releasePageUrl.value)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-[#12151e] hover:border-slate-700 px-4 py-3.5 text-xs sm:text-sm font-medium text-slate-300 transition-colors"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.mirrorGlobal"))}</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-up-right",
              class: "w-3.5 h-3.5 text-slate-500"
            }, null, _parent2, _scopeId));
            _push2(`</a>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/download"),
              class: "inline-flex items-center gap-1.5 px-1 py-3.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.download.allVersions"))}</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, toDisplayString(_ctx.$t("hoxi.download.allVersions")), 1),
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-3.5 h-3.5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><p class="text-xs font-mono text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.bentoArchNote"))}</p></div></article><div class="grid gap-3.5 content-between"${_scopeId}><a href="#home-desktop" class="group rounded-[14px] border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/60 dark:bg-[#0d0f14] p-5 sm:p-6 hover:border-blue-600 dark:hover:border-blue-500 transition-colors flex items-start justify-between gap-4"${_scopeId}><div${_scopeId}><h3 class="font-mono text-base font-semibold tracking-tight text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.bentoCliTitle"))}</h3><p class="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.bentoCliDesc"))}</p></div>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:terminal-window-bold",
              class: "w-5 h-5 shrink-0 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`</a>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/models"),
              class: "group rounded-[14px] border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/60 dark:bg-[#0d0f14] p-5 sm:p-6 hover:border-blue-600 dark:hover:border-blue-500 transition-colors flex items-start justify-between gap-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><h3 class="font-mono text-base font-semibold tracking-tight text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.desktop.bentoModelTitle"))}</h3><p class="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.desktop.bentoModelDesc"))}</p></div>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:chart-bar-bold",
                    class: "w-5 h-5 shrink-0 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-0.5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("h3", { class: "font-mono text-base font-semibold tracking-tight text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, toDisplayString(_ctx.$t("hoxi.desktop.bentoModelTitle")), 1),
                      createVNode("p", { class: "mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.desktop.bentoModelDesc")), 1)
                    ]),
                    createVNode(_component_UIcon, {
                      name: "ph:chart-bar-bold",
                      class: "w-5 h-5 shrink-0 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-0.5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<a href="https://github.com/hoxiai/hoxi" target="_blank" rel="noopener noreferrer" class="group rounded-[14px] border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/60 dark:bg-[#0d0f14] p-5 sm:p-6 hover:border-blue-600 dark:hover:border-blue-500 transition-colors flex items-start justify-between gap-4"${_scopeId}><div${_scopeId}><h3 class="font-mono text-base font-semibold tracking-tight text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.bentoOpenTitle"))}</h3><p class="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.bentoOpenDesc"))}</p></div>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:github-logo-bold",
              class: "w-5 h-5 shrink-0 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`</a></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center" }, [
                createVNode("div", { class: "inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-[#111319] px-3 py-1 font-mono text-xs text-slate-600 dark:text-slate-300 mb-6" }, [
                  createVNode("span", { class: "h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" }),
                  createVNode("span", null, toDisplayString(_ctx.$t("hoxi.home.heroBadge")), 1),
                  desktopVersion.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("span", { class: "text-slate-300 dark:text-slate-700" }, "|"),
                    createVNode("span", { class: "font-semibold text-blue-600 dark:text-blue-400" }, " v" + toDisplayString(desktopVersion.value), 1)
                  ], 64)) : createCommentVNode("", true)
                ]),
                createVNode("h1", { class: "text-3xl sm:text-5xl md:text-[56px] font-extrabold tracking-tighter text-slate-950 dark:text-white leading-[1.12] sm:leading-[1.06]" }, [
                  createVNode("span", null, toDisplayString(_ctx.$t("hoxi.home.titleLine1")), 1),
                  createVNode("span", { class: "block mt-1.5 text-blue-600 dark:text-blue-400" }, toDisplayString(_ctx.$t("hoxi.home.titleLine2")), 1)
                ]),
                createVNode("p", { class: "mt-5 max-w-xl text-sm sm:text-base md:text-[17px] leading-relaxed text-slate-600 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.home.subtitle")), 1)
              ]),
              createVNode("div", { class: "relative z-10 mt-10 md:mt-12 grid lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] gap-3.5 text-left items-stretch" }, [
                createVNode("article", { class: "rounded-[14px] border border-slate-800/90 bg-[#0b0d12] text-white p-7 sm:p-9 md:p-10 min-h-[340px] flex flex-col justify-between relative overflow-hidden" }, [
                  createVNode("div", { class: "relative z-10 max-w-md space-y-3.5" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", { class: "w-fit rounded bg-blue-600 px-2 py-0.5 font-mono text-[11px] font-bold tracking-wider uppercase text-white" }, toDisplayString(currentPlatformBadge.value), 1),
                      createVNode("span", { class: "font-mono text-xs text-slate-400" }, toDisplayString(desktopVersionPrefix.value) + "Wails v2 + OpenCode ", 1)
                    ]),
                    createVNode("h2", { class: "font-mono text-3xl sm:text-4xl md:text-[48px] font-semibold tracking-tighter text-white leading-[1.05]" }, toDisplayString(_ctx.$t("hoxi.desktop.bentoDesktopTitle")), 1),
                    createVNode("p", { class: "text-sm sm:text-base text-slate-400 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.desktop.bentoDesktopDesc")), 1)
                  ]),
                  createVNode("div", { class: "relative z-10 mt-10 space-y-4" }, [
                    createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(platformList.value, (p) => {
                        return openBlock(), createBlock("button", {
                          key: p.key,
                          type: "button",
                          onClick: ($event) => activePlatform.value = p.key,
                          class: [activePlatform.value === p.key ? "bg-blue-600/20 border-blue-500 text-blue-400 font-medium" : "bg-[#12151e] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700", "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border transition-all cursor-pointer"]
                        }, [
                          createVNode(_component_UIcon, {
                            name: p.icon,
                            class: "w-3.5 h-3.5"
                          }, null, 8, ["name"]),
                          createVNode("span", null, toDisplayString(p.label), 1)
                        ], 10, ["onClick"]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                      createVNode("a", {
                        href: desktopDownloadUrl.value,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "inline-flex items-center gap-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 px-5 py-3.5 text-sm sm:text-base font-semibold text-white transition-colors cursor-pointer shadow-lg shadow-blue-600/20"
                      }, [
                        createVNode(_component_UIcon, {
                          name: currentPlatformIcon.value,
                          class: "w-4 h-4"
                        }, null, 8, ["name"]),
                        createVNode("span", null, toDisplayString(currentPlatformButtonText.value), 1)
                      ], 8, ["href"]),
                      createVNode("a", {
                        href: releasePageUrl.value,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-[#12151e] hover:border-slate-700 px-4 py-3.5 text-xs sm:text-sm font-medium text-slate-300 transition-colors"
                      }, [
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.desktop.mirrorGlobal")), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-up-right",
                          class: "w-3.5 h-3.5 text-slate-500"
                        })
                      ], 8, ["href"]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/download"),
                        class: "inline-flex items-center gap-1.5 px-1 py-3.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(_ctx.$t("hoxi.download.allVersions")), 1),
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-right",
                            class: "w-3.5 h-3.5"
                          })
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ]),
                    createVNode("p", { class: "text-xs font-mono text-slate-500" }, toDisplayString(_ctx.$t("hoxi.desktop.bentoArchNote")), 1)
                  ])
                ]),
                createVNode("div", { class: "grid gap-3.5 content-between" }, [
                  createVNode("a", {
                    href: "#home-desktop",
                    class: "group rounded-[14px] border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/60 dark:bg-[#0d0f14] p-5 sm:p-6 hover:border-blue-600 dark:hover:border-blue-500 transition-colors flex items-start justify-between gap-4"
                  }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "font-mono text-base font-semibold tracking-tight text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, toDisplayString(_ctx.$t("hoxi.desktop.bentoCliTitle")), 1),
                      createVNode("p", { class: "mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.desktop.bentoCliDesc")), 1)
                    ]),
                    createVNode(_component_UIcon, {
                      name: "ph:terminal-window-bold",
                      class: "w-5 h-5 shrink-0 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-0.5"
                    })
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/models"),
                    class: "group rounded-[14px] border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/60 dark:bg-[#0d0f14] p-5 sm:p-6 hover:border-blue-600 dark:hover:border-blue-500 transition-colors flex items-start justify-between gap-4"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("h3", { class: "font-mono text-base font-semibold tracking-tight text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, toDisplayString(_ctx.$t("hoxi.desktop.bentoModelTitle")), 1),
                        createVNode("p", { class: "mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.desktop.bentoModelDesc")), 1)
                      ]),
                      createVNode(_component_UIcon, {
                        name: "ph:chart-bar-bold",
                        class: "w-5 h-5 shrink-0 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-0.5"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"]),
                  createVNode("a", {
                    href: "https://github.com/hoxiai/hoxi",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    class: "group rounded-[14px] border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/60 dark:bg-[#0d0f14] p-5 sm:p-6 hover:border-blue-600 dark:hover:border-blue-500 transition-colors flex items-start justify-between gap-4"
                  }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "font-mono text-base font-semibold tracking-tight text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, toDisplayString(_ctx.$t("hoxi.desktop.bentoOpenTitle")), 1),
                      createVNode("p", { class: "mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.desktop.bentoOpenDesc")), 1)
                    ]),
                    createVNode(_component_UIcon, {
                      name: "ph:github-logo-bold",
                      class: "w-5 h-5 shrink-0 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-0.5"
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_HoxiContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-14 md:py-20 space-y-20 md:space-y-24"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiHomeWorkspaceShowcase, null, null, _parent2, _scopeId));
            _push2(`<section${_scopeId}><div class="text-center max-w-2xl mx-auto mb-9 md:mb-11"${_scopeId}><p class="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2.5"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.pillarsBadge"))}</p><h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-slate-950 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.pillarsTitle"))}</h2><p class="mt-2.5 text-sm md:text-base text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.pillarsSub"))}</p></div><div class="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800/90 rounded-[14px] border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-[#0d0f14] overflow-hidden"${_scopeId}><div class="p-7 sm:p-8"${_scopeId}><p class="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3"${_scopeId}> 01 / ${ssrInterpolate(_ctx.$t("hoxi.desktop.p1Tag"))}</p><h3 class="text-lg font-bold tracking-tight text-slate-950 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.p1Title"))}</h3><p class="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.p1Desc"))}</p></div><div class="p-7 sm:p-8"${_scopeId}><p class="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3"${_scopeId}> 02 / ${ssrInterpolate(_ctx.$t("hoxi.desktop.p2Tag"))}</p><h3 class="text-lg font-bold tracking-tight text-slate-950 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.p2Title"))}</h3><p class="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.p2Desc"))}</p></div><div class="p-7 sm:p-8"${_scopeId}><p class="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3"${_scopeId}> 03 / ${ssrInterpolate(_ctx.$t("hoxi.desktop.p3Tag"))}</p><h3 class="text-lg font-bold tracking-tight text-slate-950 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.p3Title"))}</h3><p class="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.p3Desc"))}</p></div></div></section><section id="home-savings"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiHomeSavingsCard, null, null, _parent2, _scopeId));
            _push2(`</section><section id="home-faq" class="max-w-3xl mx-auto"${_scopeId}><div class="text-center mb-8"${_scopeId}><p class="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.faqBadge"))}</p><h2 class="text-2xl sm:text-3xl font-extrabold tracking-tighter text-slate-950 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.faqTitle"))}</h2><p class="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.faqSub"))}</p></div><div class="divide-y divide-slate-200 dark:divide-slate-800/90 rounded-[14px] border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-[#0d0f14] overflow-hidden"${_scopeId}><!--[-->`);
            ssrRenderList(faqItems.value, (item, idx) => {
              _push2(`<div${_scopeId}><button type="button" class="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 dark:hover:bg-[#12151e] transition-colors cursor-pointer"${ssrRenderAttr("aria-expanded", openFaqIndex.value === idx)}${_scopeId}><span class="text-sm sm:text-base font-semibold text-slate-950 dark:text-white"${_scopeId}>${ssrInterpolate(item.q)}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:caret-down-bold",
                class: ["w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200", openFaqIndex.value === idx ? "rotate-180 text-blue-600 dark:text-blue-400" : ""]
              }, null, _parent2, _scopeId));
              _push2(`</button><div class="px-6 pb-4 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/60 pt-3" style="${ssrRenderStyle(openFaqIndex.value === idx ? null : { display: "none" })}"${_scopeId}>${ssrInterpolate(item.a)}</div></div>`);
            });
            _push2(`<!--]--></div></section><section class="rounded-[14px] border border-slate-200 dark:border-slate-800/90 bg-slate-50/70 dark:bg-[#0d0f14] p-7 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"${_scopeId}><div class="space-y-1.5 max-w-xl"${_scopeId}><p class="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.soloBannerBadge"))}</p><h2 class="text-lg sm:text-xl font-bold tracking-tight text-slate-950 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.soloBannerTitle"))}</h2><p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.desktop.soloBannerDesc"))}</p></div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/one-person-company"),
              class: "shrink-0 inline-flex items-center gap-2 rounded-lg bg-slate-950 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white text-white px-5 py-2.5 text-xs sm:text-sm font-semibold transition-colors self-start md:self-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.desktop.soloBannerCta"))}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(_ctx.$t("hoxi.desktop.soloBannerCta")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section></div>`);
          } else {
            return [
              createVNode("div", { class: "py-14 md:py-20 space-y-20 md:space-y-24" }, [
                createVNode(_component_HoxiHomeWorkspaceShowcase),
                createVNode("section", null, [
                  createVNode("div", { class: "text-center max-w-2xl mx-auto mb-9 md:mb-11" }, [
                    createVNode("p", { class: "font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2.5" }, toDisplayString(_ctx.$t("hoxi.desktop.pillarsBadge")), 1),
                    createVNode("h2", { class: "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-slate-950 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.desktop.pillarsTitle")), 1),
                    createVNode("p", { class: "mt-2.5 text-sm md:text-base text-slate-500 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.desktop.pillarsSub")), 1)
                  ]),
                  createVNode("div", { class: "grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800/90 rounded-[14px] border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-[#0d0f14] overflow-hidden" }, [
                    createVNode("div", { class: "p-7 sm:p-8" }, [
                      createVNode("p", { class: "font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3" }, " 01 / " + toDisplayString(_ctx.$t("hoxi.desktop.p1Tag")), 1),
                      createVNode("h3", { class: "text-lg font-bold tracking-tight text-slate-950 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.desktop.p1Title")), 1),
                      createVNode("p", { class: "mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.desktop.p1Desc")), 1)
                    ]),
                    createVNode("div", { class: "p-7 sm:p-8" }, [
                      createVNode("p", { class: "font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3" }, " 02 / " + toDisplayString(_ctx.$t("hoxi.desktop.p2Tag")), 1),
                      createVNode("h3", { class: "text-lg font-bold tracking-tight text-slate-950 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.desktop.p2Title")), 1),
                      createVNode("p", { class: "mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.desktop.p2Desc")), 1)
                    ]),
                    createVNode("div", { class: "p-7 sm:p-8" }, [
                      createVNode("p", { class: "font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3" }, " 03 / " + toDisplayString(_ctx.$t("hoxi.desktop.p3Tag")), 1),
                      createVNode("h3", { class: "text-lg font-bold tracking-tight text-slate-950 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.desktop.p3Title")), 1),
                      createVNode("p", { class: "mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.desktop.p3Desc")), 1)
                    ])
                  ])
                ]),
                createVNode("section", { id: "home-savings" }, [
                  createVNode(_component_HoxiHomeSavingsCard)
                ]),
                createVNode("section", {
                  id: "home-faq",
                  class: "max-w-3xl mx-auto"
                }, [
                  createVNode("div", { class: "text-center mb-8" }, [
                    createVNode("p", { class: "font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2" }, toDisplayString(_ctx.$t("hoxi.desktop.faqBadge")), 1),
                    createVNode("h2", { class: "text-2xl sm:text-3xl font-extrabold tracking-tighter text-slate-950 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.desktop.faqTitle")), 1),
                    createVNode("p", { class: "mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.desktop.faqSub")), 1)
                  ]),
                  createVNode("div", { class: "divide-y divide-slate-200 dark:divide-slate-800/90 rounded-[14px] border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-[#0d0f14] overflow-hidden" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(faqItems.value, (item, idx) => {
                      return openBlock(), createBlock("div", { key: idx }, [
                        createVNode("button", {
                          type: "button",
                          class: "w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 dark:hover:bg-[#12151e] transition-colors cursor-pointer",
                          "aria-expanded": openFaqIndex.value === idx,
                          onClick: ($event) => openFaqIndex.value = openFaqIndex.value === idx ? -1 : idx
                        }, [
                          createVNode("span", { class: "text-sm sm:text-base font-semibold text-slate-950 dark:text-white" }, toDisplayString(item.q), 1),
                          createVNode(_component_UIcon, {
                            name: "ph:caret-down-bold",
                            class: ["w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200", openFaqIndex.value === idx ? "rotate-180 text-blue-600 dark:text-blue-400" : ""]
                          }, null, 8, ["class"])
                        ], 8, ["aria-expanded", "onClick"]),
                        withDirectives(createVNode("div", { class: "px-6 pb-4 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/60 pt-3" }, toDisplayString(item.a), 513), [
                          [vShow, openFaqIndex.value === idx]
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("section", { class: "rounded-[14px] border border-slate-200 dark:border-slate-800/90 bg-slate-50/70 dark:bg-[#0d0f14] p-7 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6" }, [
                  createVNode("div", { class: "space-y-1.5 max-w-xl" }, [
                    createVNode("p", { class: "font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400" }, toDisplayString(_ctx.$t("hoxi.desktop.soloBannerBadge")), 1),
                    createVNode("h2", { class: "text-lg sm:text-xl font-bold tracking-tight text-slate-950 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.desktop.soloBannerTitle")), 1),
                    createVNode("p", { class: "text-xs sm:text-sm text-slate-500 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.desktop.soloBannerDesc")), 1)
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/one-person-company"),
                    class: "shrink-0 inline-flex items-center gap-2 rounded-lg bg-slate-950 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white text-white px-5 py-2.5 text-xs sm:text-sm font-semibold transition-colors self-start md:self-center"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(_ctx.$t("hoxi.desktop.soloBannerCta")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bc7y89Yk.mjs.map
