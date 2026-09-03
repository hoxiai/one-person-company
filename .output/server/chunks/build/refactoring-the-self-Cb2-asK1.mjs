import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { aL as useLocaleRouter, f as useFormatTime, y as useFetch, bi as useSeoMeta, a as __nuxt_component_3$1, b as _sfc_main$E, k as _sfc_main$z } from './server.mjs';
import { defineComponent, ref, withAsyncContext, computed, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
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
  __name: "refactoring-the-self",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { localePath } = useLocaleRouter();
    const { formatDate } = useFormatTime();
    const sortOrder = ref("asc");
    const { data: response, status } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/posts",
      {
        query: {
          type: "blog",
          key: "refactoring-the-self",
          pageSize: 100
        },
        default: () => ({ data: [], total: 0, page: 1, pageSize: 100 })
      },
      "$Iy_NokT6In"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const pending = computed(() => status.value === "pending");
    const chapters = computed(() => {
      var _a, _b;
      const list = ((_b = (_a = response.value) == null ? void 0 : _a.data) == null ? void 0 : _b.filter((p) => (p == null ? void 0 : p.slug) && (p == null ? void 0 : p.title))) || [];
      return list;
    });
    const canonicalChapters = computed(() => {
      const list = [...chapters.value];
      return list.sort((a, b) => {
        if (a.sort !== null && a.sort !== void 0 && b.sort !== null && b.sort !== void 0) {
          return a.sort - b.sort;
        }
        if (a.sort !== null && a.sort !== void 0) return -1;
        if (b.sort !== null && b.sort !== void 0) return 1;
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateA - dateB;
      });
    });
    const sortedChapters = computed(() => {
      const list = [...canonicalChapters.value];
      if (sortOrder.value === "desc") {
        return list.reverse();
      }
      return list;
    });
    const totalChapters = computed(() => canonicalChapters.value.length);
    const firstChapter = computed(() => canonicalChapters.value[0] || null);
    const latestChapter = computed(() => canonicalChapters.value[canonicalChapters.value.length - 1] || null);
    const totalViews = computed(() => {
      return canonicalChapters.value.reduce((sum, item) => sum + (Number(item.views) || 0), 0);
    });
    const latestUpdatedDate = computed(() => {
      var _a;
      if (!((_a = latestChapter.value) == null ? void 0 : _a.createdAt)) return "";
      return formatDate(latestChapter.value.createdAt);
    });
    const getChapterNumber = (chapter, index) => {
      if (chapter.sort !== null && chapter.sort !== void 0 && chapter.sort > 0) {
        return String(chapter.sort).padStart(2, "0");
      }
      if (sortOrder.value === "asc") {
        return String(index + 1).padStart(2, "0");
      }
      return String(canonicalChapters.value.length - index).padStart(2, "0");
    };
    useSeoMeta({
      title: "\u300A\u5E95\u5C42\u91CD\u6784\u300B\u4E13\u680F\u8FDE\u8F7D - Refactoring the Self",
      description: "\u5DE5\u7A0B\u5E08\u89C6\u89D2\u4E0B\u7684\u4E2A\u4EBA\u5FC3\u667A\u6A21\u578B\u3001\u5DE5\u4F5C\u6D41\u4E0E\u601D\u7EF4\u67B6\u6784\u91CD\u6784\u5B9E\u5F55\uFF0C\u5C0F\u8BF4\u5F0F\u7CFB\u7EDF\u8FDE\u8F7D\u6587\u96C6\u3002",
      ogTitle: "\u300A\u5E95\u5C42\u91CD\u6784\u300B\u4E13\u680F\u8FDE\u8F7D - Refactoring the Self",
      ogDescription: "\u5DE5\u7A0B\u5E08\u89C6\u89D2\u4E0B\u7684\u4E2A\u4EBA\u5FC3\u667A\u6A21\u578B\u3001\u5DE5\u4F5C\u6D41\u4E0E\u601D\u7EF4\u67B6\u6784\u91CD\u6784\u5B9E\u5F55\uFF0C\u5C0F\u8BF4\u5F0F\u7CFB\u7EDF\u8FDE\u8F7D\u6587\u96C6\u3002"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$E;
      const _component_UButton = _sfc_main$z;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="py-8 md:py-16"${_scopeId}><nav class="mb-6 md:mb-8 flex items-center gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/"),
              class: "hover:text-slate-900 dark:hover:text-white transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("hoxi.nav.home") || "\u9996\u9875")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hoxi.nav.home") || "\u9996\u9875"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span${_scopeId}>/</span>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/blog"),
              class: "hover:text-slate-900 dark:hover:text-white transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("hoxi.nav.posts") || "\u535A\u5BA2")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hoxi.nav.posts") || "\u535A\u5BA2"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span${_scopeId}>/</span><span class="text-slate-900 dark:text-white font-medium"${_scopeId}>\u5E95\u5C42\u91CD\u6784</span></nav><div class="rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-gradient-to-br from-slate-50/80 via-white to-blue-50/30 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-blue-950/20 p-6 md:p-10 shadow-xs relative overflow-hidden"${_scopeId}><div class="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl pointer-events-none"${_scopeId}></div><div class="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-center relative z-10"${_scopeId}><div class="flex justify-center lg:justify-start"${_scopeId}><div class="w-44 sm:w-52 aspect-[3/4] rounded-2xl bg-gradient-to-tr from-slate-900 via-blue-950 to-indigo-950 text-white p-6 shadow-2xl border border-white/10 flex flex-col justify-between relative group transform transition-transform hover:-translate-y-1"${_scopeId}><div class="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/40 to-transparent rounded-l-2xl pointer-events-none"${_scopeId}></div><div${_scopeId}><div class="flex items-center justify-between text-[10px] text-blue-300 font-mono uppercase tracking-widest"${_scopeId}><span${_scopeId}>Special Column</span><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"${_scopeId}></span></div><div class="mt-6 text-xl sm:text-2xl font-black tracking-tight leading-tight text-white"${_scopeId}> \u5E95\u5C42\u91CD\u6784 </div><div class="mt-1 text-[11px] text-slate-300 font-sans tracking-wide"${_scopeId}> Refactoring the Self </div></div><div class="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300"${_scopeId}><span${_scopeId}>\u8FDE\u8F7D\u6587\u96C6</span><span${_scopeId}>\u5168\u6808\u5FC3\u667A\u5B9E\u5F55</span></div></div></div><div class="min-w-0 flex flex-col justify-center"${_scopeId}><div class="flex flex-wrap items-center gap-2.5 mb-3"${_scopeId}><span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:book-bookmark-fill",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u957F\u7BC7\u4E13\u680F \xB7 \u5C0F\u8BF4\u5F0F\u8FDE\u8F7D</span></span><span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50"${_scopeId}> \u6301\u7EED\u8FDE\u8F7D\u4E2D </span></div><h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"${_scopeId}> \u300A\u5E95\u5C42\u91CD\u6784\u300B\xB7 Refactoring the Self </h1><p class="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"${_scopeId}> \u8FD9\u4E0D\u662F\u6CDB\u6CDB\u7684\u5FC3\u7075\u9E21\u6C64\uFF0C\u800C\u662F\u4E00\u540D\u5DE5\u7A0B\u5E08\u4EE5\u4EE3\u7801\u91CD\u6784\uFF08Refactoring\uFF09\u7684\u4E25\u8C28\u89C6\u89D2\uFF0C\u5BF9\u4E2A\u4EBA\u601D\u7EF4\u6A21\u578B\u3001\u5FC3\u667A\u67B6\u6784\u3001\u65E5\u5E38\u5DE5\u4F5C\u6D41\u4E0E\u8BA4\u77E5\u7CFB\u7EDF\u7684\u89E3\u6784\u3001\u5BA1\u89C6\u4E0E\u6301\u7EED\u5347\u7EA7\u8BB0\u5F55\u3002 </p><div class="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400 py-3 border-y border-slate-100 dark:border-slate-800"${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:list-numbers",
              class: "w-4 h-4 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u5DF2\u66F4\u65B0\uFF1A<strong class="text-slate-800 dark:text-slate-200 font-semibold"${_scopeId}>${ssrInterpolate(totalChapters.value)}</strong> \u7BC7</span></div>`);
            if (totalViews.value > 0) {
              _push2(`<div class="flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:eye",
                class: "w-4 h-4 text-blue-500"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u4E13\u680F\u603B\u9605\u8BFB\uFF1A<strong class="text-slate-800 dark:text-slate-200 font-semibold"${_scopeId}>${ssrInterpolate(totalViews.value)}</strong></span></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (latestUpdatedDate.value) {
              _push2(`<div class="flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:clock",
                class: "w-4 h-4 text-blue-500"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u6700\u8FD1\u66F4\u65B0\uFF1A<strong class="text-slate-800 dark:text-slate-200 font-semibold"${_scopeId}>${ssrInterpolate(latestUpdatedDate.value)}</strong></span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-6 flex flex-wrap items-center gap-3"${_scopeId}>`);
            if (firstChapter.value) {
              _push2(ssrRenderComponent(_component_UButton, {
                to: unref(localePath)(`/blog/${firstChapter.value.slug}`),
                color: "primary",
                size: "lg",
                icon: "ph:play-fill",
                class: "rounded-xl font-semibold shadow-md shadow-blue-500/10"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u4ECE\u7B2C\u4E00\u7AE0\u5F00\u59CB\u9605\u8BFB `);
                  } else {
                    return [
                      createTextVNode(" \u4ECE\u7B2C\u4E00\u7AE0\u5F00\u59CB\u9605\u8BFB ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (latestChapter.value && latestChapter.value.slug !== ((_a = firstChapter.value) == null ? void 0 : _a.slug)) {
              _push2(ssrRenderComponent(_component_UButton, {
                to: unref(localePath)(`/blog/${latestChapter.value.slug}`),
                color: "neutral",
                variant: "outline",
                size: "lg",
                icon: "ph:sparkle",
                class: "rounded-xl font-medium"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u9605\u8BFB\u6700\u65B0\u7AE0\u8282 (${ssrInterpolate(latestChapter.value.title)}) `);
                  } else {
                    return [
                      createTextVNode(" \u9605\u8BFB\u6700\u65B0\u7AE0\u8282 (" + toDisplayString(latestChapter.value.title) + ") ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div><div class="mt-12 md:mt-16"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><h2 class="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:bookmarks",
              class: "w-6 h-6 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u7AE0\u8282\u76EE\u5F55</span></h2><span class="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono"${_scopeId}> \u5171 ${ssrInterpolate(sortedChapters.value.length)} \u7AE0 </span></div><div class="flex items-center gap-2 text-xs"${_scopeId}><span class="text-slate-400"${_scopeId}>\u6392\u5E8F\uFF1A</span><div class="inline-flex rounded-lg p-0.5 bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-800"${_scopeId}><button type="button" class="${ssrRenderClass([sortOrder.value === "asc" ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white", "px-2.5 py-1 rounded-md transition-all font-medium flex items-center gap-1"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:sort-ascending",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u6B63\u5E8F (\u7B2C\u4E00\u7AE0\u8D77)</span></button><button type="button" class="${ssrRenderClass([sortOrder.value === "desc" ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white", "px-2.5 py-1 rounded-md transition-all font-medium flex items-center gap-1"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:sort-descending",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u5012\u5E8F (\u6700\u65B0\u8D77)</span></button></div></div></div>`);
            if (pending.value) {
              _push2(`<div class="mt-6 space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(5, (i) => {
                _push2(`<div class="h-24 rounded-2xl bg-slate-100 dark:bg-slate-900/60 animate-pulse border border-slate-100 dark:border-slate-800"${_scopeId}></div>`);
              });
              _push2(`<!--]--></div>`);
            } else if (sortedChapters.value.length > 0) {
              _push2(`<div class="mt-6 divide-y divide-slate-100 dark:divide-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 shadow-xs overflow-hidden"${_scopeId}><!--[-->`);
              ssrRenderList(sortedChapters.value, (chapter, index) => {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  key: chapter.slug,
                  to: unref(localePath)(`/blog/${chapter.slug}`),
                  class: "group p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-all duration-200"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="min-w-0 flex items-start gap-4 flex-1"${_scopeId2}><div class="shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 font-mono font-bold text-sm flex flex-col items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors"${_scopeId2}><span class="text-[9px] uppercase tracking-wider text-slate-400 group-hover:text-blue-100"${_scopeId2}>VOL.</span><span${_scopeId2}>${ssrInterpolate(getChapterNumber(chapter, index))}</span></div><div class="min-w-0 flex-1"${_scopeId2}><div class="flex items-center gap-2 mb-1"${_scopeId2}><h3 class="text-base md:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1"${_scopeId2}>${ssrInterpolate(chapter.title)}</h3></div>`);
                      if (chapter.description) {
                        _push3(`<p class="text-xs md:text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed"${_scopeId2}>${ssrInterpolate(chapter.description)}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></div><div class="shrink-0 flex items-center justify-between sm:justify-end gap-5 text-xs text-slate-400 dark:text-slate-500 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800"${_scopeId2}><div class="flex items-center gap-3"${_scopeId2}>`);
                      if (chapter.createdAt) {
                        _push3(`<span class="flex items-center gap-1"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: "ph:calendar-blank",
                          class: "w-3.5 h-3.5"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span${_scopeId2}>${ssrInterpolate(unref(formatDate)(chapter.createdAt))}</span></span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (chapter.views !== void 0 && chapter.views !== null) {
                        _push3(`<span class="flex items-center gap-1"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: "ph:eye",
                          class: "w-3.5 h-3.5"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span${_scopeId2}>${ssrInterpolate(chapter.views)}</span></span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><span class="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform"${_scopeId2}><span${_scopeId2}>\u9605\u8BFB</span>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-3.5 h-3.5"
                      }, null, _parent3, _scopeId2));
                      _push3(`</span></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "min-w-0 flex items-start gap-4 flex-1" }, [
                          createVNode("div", { class: "shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 font-mono font-bold text-sm flex flex-col items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors" }, [
                            createVNode("span", { class: "text-[9px] uppercase tracking-wider text-slate-400 group-hover:text-blue-100" }, "VOL."),
                            createVNode("span", null, toDisplayString(getChapterNumber(chapter, index)), 1)
                          ]),
                          createVNode("div", { class: "min-w-0 flex-1" }, [
                            createVNode("div", { class: "flex items-center gap-2 mb-1" }, [
                              createVNode("h3", { class: "text-base md:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1" }, toDisplayString(chapter.title), 1)
                            ]),
                            chapter.description ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-xs md:text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed"
                            }, toDisplayString(chapter.description), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "shrink-0 flex items-center justify-between sm:justify-end gap-5 text-xs text-slate-400 dark:text-slate-500 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800" }, [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            chapter.createdAt ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "flex items-center gap-1"
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:calendar-blank",
                                class: "w-3.5 h-3.5"
                              }),
                              createVNode("span", null, toDisplayString(unref(formatDate)(chapter.createdAt)), 1)
                            ])) : createCommentVNode("", true),
                            chapter.views !== void 0 && chapter.views !== null ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "flex items-center gap-1"
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:eye",
                                class: "w-3.5 h-3.5"
                              }),
                              createVNode("span", null, toDisplayString(chapter.views), 1)
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("span", { class: "inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" }, [
                            createVNode("span", null, "\u9605\u8BFB"),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-right",
                              class: "w-3.5 h-3.5"
                            })
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="mt-6 text-center py-16 bg-slate-50/50 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-800"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:book-open-user",
                class: "w-14 h-14 text-slate-400 dark:text-slate-600 mb-3 mx-auto"
              }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-lg font-bold text-slate-800 dark:text-white mb-1"${_scopeId}> \u4E13\u680F\u5185\u5BB9\u51C6\u5907\u4E2D </h3><p class="text-xs text-slate-500 dark:text-slate-400"${_scopeId}> \u4F5C\u8005\u6B63\u5728\u64B0\u5199\u300A\u5E95\u5C42\u91CD\u6784\u300B\u7684\u540E\u7EED\u7AE0\u8282\uFF0C\u656C\u8BF7\u671F\u5F85\u3002 </p></div>`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-8 md:py-16" }, [
                createVNode("nav", { class: "mb-6 md:mb-8 flex items-center gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400" }, [
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/"),
                    class: "hover:text-slate-900 dark:hover:text-white transition-colors"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.nav.home") || "\u9996\u9875"), 1)
                    ]),
                    _: 1
                  }, 8, ["to"]),
                  createVNode("span", null, "/"),
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/blog"),
                    class: "hover:text-slate-900 dark:hover:text-white transition-colors"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.nav.posts") || "\u535A\u5BA2"), 1)
                    ]),
                    _: 1
                  }, 8, ["to"]),
                  createVNode("span", null, "/"),
                  createVNode("span", { class: "text-slate-900 dark:text-white font-medium" }, "\u5E95\u5C42\u91CD\u6784")
                ]),
                createVNode("div", { class: "rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-gradient-to-br from-slate-50/80 via-white to-blue-50/30 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-blue-950/20 p-6 md:p-10 shadow-xs relative overflow-hidden" }, [
                  createVNode("div", { class: "absolute -right-20 -top-20 w-80 h-80 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl pointer-events-none" }),
                  createVNode("div", { class: "grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-center relative z-10" }, [
                    createVNode("div", { class: "flex justify-center lg:justify-start" }, [
                      createVNode("div", { class: "w-44 sm:w-52 aspect-[3/4] rounded-2xl bg-gradient-to-tr from-slate-900 via-blue-950 to-indigo-950 text-white p-6 shadow-2xl border border-white/10 flex flex-col justify-between relative group transform transition-transform hover:-translate-y-1" }, [
                        createVNode("div", { class: "absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/40 to-transparent rounded-l-2xl pointer-events-none" }),
                        createVNode("div", null, [
                          createVNode("div", { class: "flex items-center justify-between text-[10px] text-blue-300 font-mono uppercase tracking-widest" }, [
                            createVNode("span", null, "Special Column"),
                            createVNode("span", { class: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" })
                          ]),
                          createVNode("div", { class: "mt-6 text-xl sm:text-2xl font-black tracking-tight leading-tight text-white" }, " \u5E95\u5C42\u91CD\u6784 "),
                          createVNode("div", { class: "mt-1 text-[11px] text-slate-300 font-sans tracking-wide" }, " Refactoring the Self ")
                        ]),
                        createVNode("div", { class: "pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300" }, [
                          createVNode("span", null, "\u8FDE\u8F7D\u6587\u96C6"),
                          createVNode("span", null, "\u5168\u6808\u5FC3\u667A\u5B9E\u5F55")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "min-w-0 flex flex-col justify-center" }, [
                      createVNode("div", { class: "flex flex-wrap items-center gap-2.5 mb-3" }, [
                        createVNode("span", { class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:book-bookmark-fill",
                            class: "w-3.5 h-3.5"
                          }),
                          createVNode("span", null, "\u957F\u7BC7\u4E13\u680F \xB7 \u5C0F\u8BF4\u5F0F\u8FDE\u8F7D")
                        ]),
                        createVNode("span", { class: "px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50" }, " \u6301\u7EED\u8FDE\u8F7D\u4E2D ")
                      ]),
                      createVNode("h1", { class: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight" }, " \u300A\u5E95\u5C42\u91CD\u6784\u300B\xB7 Refactoring the Self "),
                      createVNode("p", { class: "mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl" }, " \u8FD9\u4E0D\u662F\u6CDB\u6CDB\u7684\u5FC3\u7075\u9E21\u6C64\uFF0C\u800C\u662F\u4E00\u540D\u5DE5\u7A0B\u5E08\u4EE5\u4EE3\u7801\u91CD\u6784\uFF08Refactoring\uFF09\u7684\u4E25\u8C28\u89C6\u89D2\uFF0C\u5BF9\u4E2A\u4EBA\u601D\u7EF4\u6A21\u578B\u3001\u5FC3\u667A\u67B6\u6784\u3001\u65E5\u5E38\u5DE5\u4F5C\u6D41\u4E0E\u8BA4\u77E5\u7CFB\u7EDF\u7684\u89E3\u6784\u3001\u5BA1\u89C6\u4E0E\u6301\u7EED\u5347\u7EA7\u8BB0\u5F55\u3002 "),
                      createVNode("div", { class: "mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400 py-3 border-y border-slate-100 dark:border-slate-800" }, [
                        createVNode("div", { class: "flex items-center gap-1.5" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:list-numbers",
                            class: "w-4 h-4 text-blue-500"
                          }),
                          createVNode("span", null, [
                            createTextVNode("\u5DF2\u66F4\u65B0\uFF1A"),
                            createVNode("strong", { class: "text-slate-800 dark:text-slate-200 font-semibold" }, toDisplayString(totalChapters.value), 1),
                            createTextVNode(" \u7BC7")
                          ])
                        ]),
                        totalViews.value > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex items-center gap-1.5"
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:eye",
                            class: "w-4 h-4 text-blue-500"
                          }),
                          createVNode("span", null, [
                            createTextVNode("\u4E13\u680F\u603B\u9605\u8BFB\uFF1A"),
                            createVNode("strong", { class: "text-slate-800 dark:text-slate-200 font-semibold" }, toDisplayString(totalViews.value), 1)
                          ])
                        ])) : createCommentVNode("", true),
                        latestUpdatedDate.value ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "flex items-center gap-1.5"
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:clock",
                            class: "w-4 h-4 text-blue-500"
                          }),
                          createVNode("span", null, [
                            createTextVNode("\u6700\u8FD1\u66F4\u65B0\uFF1A"),
                            createVNode("strong", { class: "text-slate-800 dark:text-slate-200 font-semibold" }, toDisplayString(latestUpdatedDate.value), 1)
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "mt-6 flex flex-wrap items-center gap-3" }, [
                        firstChapter.value ? (openBlock(), createBlock(_component_UButton, {
                          key: 0,
                          to: unref(localePath)(`/blog/${firstChapter.value.slug}`),
                          color: "primary",
                          size: "lg",
                          icon: "ph:play-fill",
                          class: "rounded-xl font-semibold shadow-md shadow-blue-500/10"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u4ECE\u7B2C\u4E00\u7AE0\u5F00\u59CB\u9605\u8BFB ")
                          ]),
                          _: 1
                        }, 8, ["to"])) : createCommentVNode("", true),
                        latestChapter.value && latestChapter.value.slug !== ((_b = firstChapter.value) == null ? void 0 : _b.slug) ? (openBlock(), createBlock(_component_UButton, {
                          key: 1,
                          to: unref(localePath)(`/blog/${latestChapter.value.slug}`),
                          color: "neutral",
                          variant: "outline",
                          size: "lg",
                          icon: "ph:sparkle",
                          class: "rounded-xl font-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u9605\u8BFB\u6700\u65B0\u7AE0\u8282 (" + toDisplayString(latestChapter.value.title) + ") ", 1)
                          ]),
                          _: 1
                        }, 8, ["to"])) : createCommentVNode("", true)
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "mt-12 md:mt-16" }, [
                  createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800" }, [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("h2", { class: "text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:bookmarks",
                          class: "w-6 h-6 text-blue-500"
                        }),
                        createVNode("span", null, "\u7AE0\u8282\u76EE\u5F55")
                      ]),
                      createVNode("span", { class: "text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono" }, " \u5171 " + toDisplayString(sortedChapters.value.length) + " \u7AE0 ", 1)
                    ]),
                    createVNode("div", { class: "flex items-center gap-2 text-xs" }, [
                      createVNode("span", { class: "text-slate-400" }, "\u6392\u5E8F\uFF1A"),
                      createVNode("div", { class: "inline-flex rounded-lg p-0.5 bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-800" }, [
                        createVNode("button", {
                          type: "button",
                          class: ["px-2.5 py-1 rounded-md transition-all font-medium flex items-center gap-1", sortOrder.value === "asc" ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"],
                          onClick: ($event) => sortOrder.value = "asc"
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:sort-ascending",
                            class: "w-3.5 h-3.5"
                          }),
                          createVNode("span", null, "\u6B63\u5E8F (\u7B2C\u4E00\u7AE0\u8D77)")
                        ], 10, ["onClick"]),
                        createVNode("button", {
                          type: "button",
                          class: ["px-2.5 py-1 rounded-md transition-all font-medium flex items-center gap-1", sortOrder.value === "desc" ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"],
                          onClick: ($event) => sortOrder.value = "desc"
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:sort-descending",
                            class: "w-3.5 h-3.5"
                          }),
                          createVNode("span", null, "\u5012\u5E8F (\u6700\u65B0\u8D77)")
                        ], 10, ["onClick"])
                      ])
                    ])
                  ]),
                  pending.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-6 space-y-4"
                  }, [
                    (openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
                      return createVNode("div", {
                        key: i,
                        class: "h-24 rounded-2xl bg-slate-100 dark:bg-slate-900/60 animate-pulse border border-slate-100 dark:border-slate-800"
                      });
                    }), 64))
                  ])) : sortedChapters.value.length > 0 ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "mt-6 divide-y divide-slate-100 dark:divide-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 shadow-xs overflow-hidden"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(sortedChapters.value, (chapter, index) => {
                      return openBlock(), createBlock(_component_NuxtLink, {
                        key: chapter.slug,
                        to: unref(localePath)(`/blog/${chapter.slug}`),
                        class: "group p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-all duration-200"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "min-w-0 flex items-start gap-4 flex-1" }, [
                            createVNode("div", { class: "shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 font-mono font-bold text-sm flex flex-col items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors" }, [
                              createVNode("span", { class: "text-[9px] uppercase tracking-wider text-slate-400 group-hover:text-blue-100" }, "VOL."),
                              createVNode("span", null, toDisplayString(getChapterNumber(chapter, index)), 1)
                            ]),
                            createVNode("div", { class: "min-w-0 flex-1" }, [
                              createVNode("div", { class: "flex items-center gap-2 mb-1" }, [
                                createVNode("h3", { class: "text-base md:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1" }, toDisplayString(chapter.title), 1)
                              ]),
                              chapter.description ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs md:text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed"
                              }, toDisplayString(chapter.description), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "shrink-0 flex items-center justify-between sm:justify-end gap-5 text-xs text-slate-400 dark:text-slate-500 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800" }, [
                            createVNode("div", { class: "flex items-center gap-3" }, [
                              chapter.createdAt ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "flex items-center gap-1"
                              }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:calendar-blank",
                                  class: "w-3.5 h-3.5"
                                }),
                                createVNode("span", null, toDisplayString(unref(formatDate)(chapter.createdAt)), 1)
                              ])) : createCommentVNode("", true),
                              chapter.views !== void 0 && chapter.views !== null ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "flex items-center gap-1"
                              }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:eye",
                                  class: "w-3.5 h-3.5"
                                }),
                                createVNode("span", null, toDisplayString(chapter.views), 1)
                              ])) : createCommentVNode("", true)
                            ]),
                            createVNode("span", { class: "inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" }, [
                              createVNode("span", null, "\u9605\u8BFB"),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-right",
                                class: "w-3.5 h-3.5"
                              })
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128))
                  ])) : (openBlock(), createBlock("div", {
                    key: 2,
                    class: "mt-6 text-center py-16 bg-slate-50/50 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-800"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:book-open-user",
                      class: "w-14 h-14 text-slate-400 dark:text-slate-600 mb-3 mx-auto"
                    }),
                    createVNode("h3", { class: "text-lg font-bold text-slate-800 dark:text-white mb-1" }, " \u4E13\u680F\u5185\u5BB9\u51C6\u5907\u4E2D "),
                    createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400" }, " \u4F5C\u8005\u6B63\u5728\u64B0\u5199\u300A\u5E95\u5C42\u91CD\u6784\u300B\u7684\u540E\u7EED\u7AE0\u8282\uFF0C\u656C\u8BF7\u671F\u5F85\u3002 ")
                  ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/refactoring-the-self.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
