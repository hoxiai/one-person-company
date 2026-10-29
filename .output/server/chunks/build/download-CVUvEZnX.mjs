import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import __nuxt_component_1 from './HoxiDownloadCard-nRDfjIcv.mjs';
import { u as useI18n, D as useLocaleRouter, y as useFetch, bt as useSeoMeta, bu as useJsonLd, _ as _sfc_main$Y } from './server.mjs';
import { defineComponent, computed, ref, withAsyncContext, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHoxiCommunity } from './useHoxiCommunity-peuQtLL3.mjs';
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
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
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
  __name: "download",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale, t } = useI18n();
    const { localePath } = useLocaleRouter();
    const { open: openCommunity } = useHoxiCommunity();
    computed(() => typeof locale === "object" && (locale == null ? void 0 : locale.value) ? locale.value : String(locale || "en"));
    const activePlatform = ref("mac");
    const { data: releasesPayload } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/hoxi/releases",
      {
        key: "hoxi-releases-page"
      },
      "$81suP4P1Wo"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const releases = computed(() => {
      var _a;
      return ((_a = releasesPayload.value) == null ? void 0 : _a.releases) || [];
    });
    const latestRelease = computed(() => releases.value[0] || null);
    const releaseDateLabel = computed(() => {
      var _a;
      return formatReleaseDate(((_a = latestRelease.value) == null ? void 0 : _a.createdAt) || "");
    });
    const platforms = computed(() => [
      {
        id: "mac",
        key: "mac-arm64",
        label: t("hoxi.desktop.platformMac"),
        arch: t("hoxi.download.archMac"),
        icon: "ph:apple-logo",
        downloadLabel: t("hoxi.desktop.downloadMacArm64")
      },
      {
        id: "windows",
        key: "windows-x64",
        label: t("hoxi.desktop.platformWindows"),
        arch: t("hoxi.download.archWindows"),
        icon: "ph:windows-logo",
        downloadLabel: t("hoxi.desktop.downloadWindows")
      },
      {
        id: "linux",
        key: "linux-x64",
        label: t("hoxi.desktop.platformLinux"),
        arch: t("hoxi.download.archLinux"),
        icon: "ph:linux-logo",
        downloadLabel: t("hoxi.desktop.downloadLinux")
      }
    ]);
    const mobilePlatforms = computed(() => [
      {
        key: "ios",
        title: t("hoxi.download.mobileIosTitle"),
        arch: t("hoxi.download.mobileIosArch"),
        icon: "ph:apple-logo"
      },
      {
        key: "android",
        title: t("hoxi.download.mobileAndroidTitle"),
        arch: t("hoxi.download.mobileAndroidArch"),
        icon: "ph:android-logo-bold"
      }
    ]);
    const mobileFeatures = computed(() => [
      {
        key: "f1",
        icon: "ph:qr-code-bold",
        title: t("hoxi.download.mobileF1Title"),
        desc: t("hoxi.download.mobileF1Desc")
      },
      {
        key: "f2",
        icon: "ph:shield-check-bold",
        title: t("hoxi.download.mobileF2Title"),
        desc: t("hoxi.download.mobileF2Desc")
      },
      {
        key: "f3",
        icon: "ph:squares-four-bold",
        title: t("hoxi.download.mobileF3Title"),
        desc: t("hoxi.download.mobileF3Desc")
      }
    ]);
    function formatReleaseDate(value) {
      return value ? value.slice(0, 10) : "";
    }
    function releaseLinks(release) {
      if (!release) return [];
      const labels = {
        "mac-arm64": t("hoxi.desktop.platformMac"),
        "windows-x64": t("hoxi.desktop.platformWindows"),
        "linux-x64": t("hoxi.desktop.platformLinux")
      };
      return Object.keys(labels).flatMap((key) => {
        var _a;
        const info = (_a = release.platforms) == null ? void 0 : _a[key];
        if (!(info == null ? void 0 : info.downloadUrl)) return [];
        const url = info.mirrors.global || info.downloadUrl;
        return [{ key, label: labels[key], url }];
      });
    }
    useSeoMeta({
      title: () => t("hoxi.download.seoTitle"),
      description: () => t("hoxi.download.seoDescription"),
      ogTitle: () => t("hoxi.download.seoTitle"),
      ogDescription: () => t("hoxi.download.seoDescription"),
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => t("hoxi.download.seoTitle"),
      twitterDescription: () => t("hoxi.download.seoDescription"),
      keywords: "Hoxi Desktop \u4E0B\u8F7D, AI \u7F16\u7A0B\u5DE5\u4F5C\u53F0, OpenCode \u684C\u9762\u7AEF, Wails v2, \u591A Agent \u5E76\u884C, Git Worktree"
    });
    useJsonLd("hoxi-download", computed(() => {
      var _a, _b;
      return [
        {
          "@type": "SoftwareApplication",
          name: "Hoxi Desktop",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "macOS, Windows, Linux",
          softwareVersion: ((_a = latestRelease.value) == null ? void 0 : _a.version) || void 0,
          downloadUrl: (_b = releaseLinks(latestRelease.value)[0]) == null ? void 0 : _b.url,
          offers: { "@type": "Offer", price: "0", priceCurrency: "CNY" }
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "\u9996\u9875", item: localePath("/") },
            { "@type": "ListItem", position: 2, name: t("hoxi.download.title"), item: localePath("/download") }
          ]
        }
      ];
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_HoxiDownloadCard = __nuxt_component_1;
      const _component_UIcon = _sfc_main$Y;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-10 md:py-16 space-y-10 md:space-y-14"${_scopeId}><div class="text-center max-w-3xl mx-auto"${_scopeId}><h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.download.title"))}</h1><p class="mt-4 text-sm md:text-base leading-8 text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.download.subtitle"))}</p>`);
            if (latestRelease.value) {
              _push2(`<p class="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 px-3 py-1 text-xs font-mono text-slate-500 dark:text-slate-400"${_scopeId}><span class="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.download.latestLine", { version: latestRelease.value.version, date: releaseDateLabel.value }))}</span></p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><section class="space-y-4"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><h2 class="text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.download.desktopSectionTitle"))}</h2></div><div class="grid gap-5 md:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(platforms.value, (platform) => {
              _push2(ssrRenderComponent(_component_HoxiDownloadCard, {
                key: platform.key,
                label: platform.label,
                arch: platform.arch,
                icon: platform.icon,
                "download-label": platform.downloadLabel,
                "platform-key": platform.key,
                release: latestRelease.value,
                highlight: activePlatform.value === platform.id
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><p class="text-xs text-slate-400 dark:text-slate-500 text-center pt-1"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.download.checksumNote"))}</p></section><section id="mobile" class="scroll-mt-24 border-t border-slate-100 dark:border-slate-800 pt-10 md:pt-12 space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-end justify-between gap-4"${_scopeId}><div class="space-y-2 max-w-2xl"${_scopeId}><span class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800/60 px-3 py-1 font-mono text-[11px] font-semibold text-blue-700 dark:text-blue-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:device-mobile-bold",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.download.mobileBadge"))}</span></span><h2 class="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.download.mobileTitle"))}</h2><p class="text-sm leading-7 text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.download.mobileSubtitle"))}</p></div><button type="button" class="shrink-0 inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors cursor-pointer self-start md:self-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:chat-circle-dots-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.download.mobileNotifyBtn"))}</span></button></div><div class="grid gap-5 md:grid-cols-2"${_scopeId}><!--[-->`);
            ssrRenderList(mobilePlatforms.value, (item) => {
              _push2(`<article class="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6 flex flex-col justify-between gap-5"${_scopeId}><div class="flex items-start justify-between gap-3"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: item.icon,
                class: "w-5 h-5 text-blue-600 dark:text-blue-400"
              }, null, _parent2, _scopeId));
              _push2(`</span><div${_scopeId}><h3 class="text-base font-bold text-slate-900 dark:text-white leading-snug"${_scopeId}>${ssrInterpolate(item.title)}</h3><p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(item.arch)}</p></div></div><span class="shrink-0 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-blue-700 dark:text-blue-300"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.download.mobileStatusBadge"))}</span></div><button type="button" class="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-blue-400/60 dark:hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:bell-ringing-bold",
                class: "w-4 h-4 text-blue-600 dark:text-blue-400"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.download.mobileNotifyBtn"))}</span></button></article>`);
            });
            _push2(`<!--]--></div><div class="grid gap-4 md:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(mobileFeatures.value, (feat) => {
              _push2(`<div class="rounded-2xl border border-slate-100 dark:border-slate-800/90 bg-slate-50/60 dark:bg-slate-900/40 p-5 space-y-2"${_scopeId}><div class="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-sm"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: feat.icon,
                class: "w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(feat.title)}</span></div><p class="text-xs leading-relaxed text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(feat.desc)}</p></div>`);
            });
            _push2(`<!--]--></div></section><section class="space-y-6"${_scopeId}><div class="border-t border-slate-100 dark:border-slate-800 pt-8"${_scopeId}><h2 class="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.download.historyTitle"))}</h2><p class="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.download.historySub"))}</p></div>`);
            if (releases.value.length) {
              _push2(`<ol class="space-y-8 md:space-y-10"${_scopeId}><!--[-->`);
              ssrRenderList(releases.value, (release, index) => {
                _push2(`<li class="${ssrRenderClass(index === 0 ? "border-b border-slate-100 dark:border-slate-800 pb-8 md:pb-10" : "")}"${_scopeId}><div class="flex flex-wrap items-center gap-x-3 gap-y-1"${_scopeId}><h3 class="text-[17px] font-semibold leading-snug text-slate-800 dark:text-slate-200"${_scopeId}> v${ssrInterpolate(release.version)}</h3><span class="text-xs font-mono text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(formatReleaseDate(release.createdAt))}</span></div><p class="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400 whitespace-pre-line"${_scopeId}>${ssrInterpolate(release.releaseNotes || _ctx.$t("hoxi.download.historyNoNotes"))}</p><div class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs"${_scopeId}><!--[-->`);
                ssrRenderList(releaseLinks(release), (link) => {
                  _push2(`<a${ssrRenderAttr("href", link.url)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:download-simple-bold",
                    class: "w-3.5 h-3.5"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${ssrInterpolate(link.label)}</span></a>`);
                });
                _push2(`<!--]--></div></li>`);
              });
              _push2(`<!--]--></ol>`);
            } else {
              _push2(`<p class="text-sm leading-7 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.download.historyEmpty"))}</p>`);
            }
            _push2(`</section></div>`);
          } else {
            return [
              createVNode("div", { class: "py-10 md:py-16 space-y-10 md:space-y-14" }, [
                createVNode("div", { class: "text-center max-w-3xl mx-auto" }, [
                  createVNode("h1", { class: "text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight" }, toDisplayString(_ctx.$t("hoxi.download.title")), 1),
                  createVNode("p", { class: "mt-4 text-sm md:text-base leading-8 text-slate-600 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.download.subtitle")), 1),
                  latestRelease.value ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "mt-4 inline-flex items-center gap-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 px-3 py-1 text-xs font-mono text-slate-500 dark:text-slate-400"
                  }, [
                    createVNode("span", { class: "h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" }),
                    createVNode("span", null, toDisplayString(_ctx.$t("hoxi.download.latestLine", { version: latestRelease.value.version, date: releaseDateLabel.value })), 1)
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("section", { class: "space-y-4" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("h2", { class: "text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight" }, toDisplayString(_ctx.$t("hoxi.download.desktopSectionTitle")), 1)
                  ]),
                  createVNode("div", { class: "grid gap-5 md:grid-cols-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(platforms.value, (platform) => {
                      return openBlock(), createBlock(_component_HoxiDownloadCard, {
                        key: platform.key,
                        label: platform.label,
                        arch: platform.arch,
                        icon: platform.icon,
                        "download-label": platform.downloadLabel,
                        "platform-key": platform.key,
                        release: latestRelease.value,
                        highlight: activePlatform.value === platform.id
                      }, null, 8, ["label", "arch", "icon", "download-label", "platform-key", "release", "highlight"]);
                    }), 128))
                  ]),
                  createVNode("p", { class: "text-xs text-slate-400 dark:text-slate-500 text-center pt-1" }, toDisplayString(_ctx.$t("hoxi.download.checksumNote")), 1)
                ]),
                createVNode("section", {
                  id: "mobile",
                  class: "scroll-mt-24 border-t border-slate-100 dark:border-slate-800 pt-10 md:pt-12 space-y-6"
                }, [
                  createVNode("div", { class: "flex flex-col md:flex-row md:items-end justify-between gap-4" }, [
                    createVNode("div", { class: "space-y-2 max-w-2xl" }, [
                      createVNode("span", { class: "inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800/60 px-3 py-1 font-mono text-[11px] font-semibold text-blue-700 dark:text-blue-300" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:device-mobile-bold",
                          class: "w-3.5 h-3.5"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.download.mobileBadge")), 1)
                      ]),
                      createVNode("h2", { class: "text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight" }, toDisplayString(_ctx.$t("hoxi.download.mobileTitle")), 1),
                      createVNode("p", { class: "text-sm leading-7 text-slate-600 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.download.mobileSubtitle")), 1)
                    ]),
                    createVNode("button", {
                      type: "button",
                      class: "shrink-0 inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors cursor-pointer self-start md:self-auto",
                      onClick: unref(openCommunity)
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:chat-circle-dots-bold",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", null, toDisplayString(_ctx.$t("hoxi.download.mobileNotifyBtn")), 1)
                    ], 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "grid gap-5 md:grid-cols-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(mobilePlatforms.value, (item) => {
                      return openBlock(), createBlock("article", {
                        key: item.key,
                        class: "rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6 flex flex-col justify-between gap-5"
                      }, [
                        createVNode("div", { class: "flex items-start justify-between gap-3" }, [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode("span", { class: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800" }, [
                              createVNode(_component_UIcon, {
                                name: item.icon,
                                class: "w-5 h-5 text-blue-600 dark:text-blue-400"
                              }, null, 8, ["name"])
                            ]),
                            createVNode("div", null, [
                              createVNode("h3", { class: "text-base font-bold text-slate-900 dark:text-white leading-snug" }, toDisplayString(item.title), 1),
                              createVNode("p", { class: "mt-0.5 text-xs text-slate-500 dark:text-slate-400" }, toDisplayString(item.arch), 1)
                            ])
                          ]),
                          createVNode("span", { class: "shrink-0 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-blue-700 dark:text-blue-300" }, toDisplayString(_ctx.$t("hoxi.download.mobileStatusBadge")), 1)
                        ]),
                        createVNode("button", {
                          type: "button",
                          class: "flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-blue-400/60 dark:hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors cursor-pointer",
                          onClick: unref(openCommunity)
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:bell-ringing-bold",
                            class: "w-4 h-4 text-blue-600 dark:text-blue-400"
                          }),
                          createVNode("span", null, toDisplayString(_ctx.$t("hoxi.download.mobileNotifyBtn")), 1)
                        ], 8, ["onClick"])
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "grid gap-4 md:grid-cols-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(mobileFeatures.value, (feat) => {
                      return openBlock(), createBlock("div", {
                        key: feat.key,
                        class: "rounded-2xl border border-slate-100 dark:border-slate-800/90 bg-slate-50/60 dark:bg-slate-900/40 p-5 space-y-2"
                      }, [
                        createVNode("div", { class: "flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-sm" }, [
                          createVNode(_component_UIcon, {
                            name: feat.icon,
                            class: "w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0"
                          }, null, 8, ["name"]),
                          createVNode("span", null, toDisplayString(feat.title), 1)
                        ]),
                        createVNode("p", { class: "text-xs leading-relaxed text-slate-500 dark:text-slate-400" }, toDisplayString(feat.desc), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("section", { class: "space-y-6" }, [
                  createVNode("div", { class: "border-t border-slate-100 dark:border-slate-800 pt-8" }, [
                    createVNode("h2", { class: "text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight" }, toDisplayString(_ctx.$t("hoxi.download.historyTitle")), 1),
                    createVNode("p", { class: "mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.download.historySub")), 1)
                  ]),
                  releases.value.length ? (openBlock(), createBlock("ol", {
                    key: 0,
                    class: "space-y-8 md:space-y-10"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(releases.value, (release, index) => {
                      return openBlock(), createBlock("li", {
                        key: release.version || release.versionCode,
                        class: index === 0 ? "border-b border-slate-100 dark:border-slate-800 pb-8 md:pb-10" : ""
                      }, [
                        createVNode("div", { class: "flex flex-wrap items-center gap-x-3 gap-y-1" }, [
                          createVNode("h3", { class: "text-[17px] font-semibold leading-snug text-slate-800 dark:text-slate-200" }, " v" + toDisplayString(release.version), 1),
                          createVNode("span", { class: "text-xs font-mono text-slate-400 dark:text-slate-500" }, toDisplayString(formatReleaseDate(release.createdAt)), 1)
                        ]),
                        createVNode("p", { class: "mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400 whitespace-pre-line" }, toDisplayString(release.releaseNotes || _ctx.$t("hoxi.download.historyNoNotes")), 1),
                        createVNode("div", { class: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(releaseLinks(release), (link) => {
                            return openBlock(), createBlock("a", {
                              key: link.key,
                              href: link.url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              class: "inline-flex items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:download-simple-bold",
                                class: "w-3.5 h-3.5"
                              }),
                              createVNode("span", null, toDisplayString(link.label), 1)
                            ], 8, ["href"]);
                          }), 128))
                        ])
                      ], 2);
                    }), 128))
                  ])) : (openBlock(), createBlock("p", {
                    key: 1,
                    class: "text-sm leading-7 text-slate-500 dark:text-slate-400"
                  }, toDisplayString(_ctx.$t("hoxi.download.historyEmpty")), 1))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/download.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=download-CVUvEZnX.mjs.map
