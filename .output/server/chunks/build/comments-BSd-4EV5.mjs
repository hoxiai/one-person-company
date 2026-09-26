import { h as useToast, t as useConfirm, o as _sfc_main$x, l as _sfc_main$B, b as _sfc_main$G, d as _sfc_main$k, p as _sfc_main$j, a as __nuxt_component_3$1, B as _sfc_main$n, q as _sfc_main$s } from './server.mjs';
import { _ as _sfc_main$1 } from './Switch-fZeXww_c.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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
import './VisuallyHiddenInput-32bCuzTQ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "comments",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const { confirm } = useConfirm();
    const comments = ref([]);
    const loading = ref(false);
    const totalItems = ref(0);
    const page = ref(1);
    const pageSize = ref(15);
    const selectedStatus = ref("all");
    const selectedTargetType = ref("all");
    const searchKeyword = ref("");
    const counts = ref({
      all: 0,
      approved: 0,
      pending: 0,
      spam: 0,
      deleted: 0
    });
    const targetTypeOptions = [
      { label: "\u5168\u90E8\u76EE\u6807\u7C7B\u578B", value: "all" },
      { label: "\u6587\u7AE0 (post)", value: "post" },
      { label: "\u6A21\u578B (model)", value: "model" }
    ];
    const statusTabs = computed(() => [
      {
        key: "all",
        label: "\u5168\u90E8\u8BC4\u8BBA",
        count: counts.value.all,
        icon: "ph:chat-dots",
        bgClass: "bg-purple-100 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400"
      },
      {
        key: "approved",
        label: "\u5DF2\u901A\u8FC7",
        count: counts.value.approved,
        icon: "ph:check-circle",
        bgClass: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400"
      },
      {
        key: "pending",
        label: "\u5F85\u5BA1\u6838",
        count: counts.value.pending,
        icon: "ph:hourglass-medium",
        bgClass: "bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400"
      },
      {
        key: "spam",
        label: "\u5783\u573E\u5E7F\u544A",
        count: counts.value.spam,
        icon: "ph:shield-warning",
        bgClass: "bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400"
      },
      {
        key: "deleted",
        label: "\u5DF2\u5220\u9664",
        count: counts.value.deleted,
        icon: "ph:trash",
        bgClass: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
      }
    ]);
    function resetFilters() {
      searchKeyword.value = "";
      selectedTargetType.value = "all";
      selectedStatus.value = "all";
      page.value = 1;
      loadComments();
    }
    async function loadComments() {
      loading.value = true;
      try {
        const res = await $fetch("/api/admin/comments", {
          query: {
            page: page.value,
            pageSize: pageSize.value,
            status: selectedStatus.value,
            targetType: selectedTargetType.value !== "all" ? selectedTargetType.value : void 0,
            search: searchKeyword.value
          }
        });
        if (res == null ? void 0 : res.success) {
          comments.value = res.data || [];
          totalItems.value = res.total || 0;
          if (res.counts) {
            counts.value = res.counts;
          }
        }
      } catch (err) {
        toast.add({
          title: "\u52A0\u8F7D\u5931\u8D25",
          description: (err == null ? void 0 : err.message) || "\u83B7\u53D6\u8BC4\u8BBA\u5217\u8868\u51FA\u9519",
          color: "error"
        });
      } finally {
        loading.value = false;
      }
    }
    async function updateStatus(id, status) {
      try {
        const res = await $fetch(`/api/admin/comments/${id}/status`, {
          method: "PATCH",
          body: { status }
        });
        if (res == null ? void 0 : res.success) {
          toast.add({
            title: "\u72B6\u6001\u5DF2\u66F4\u65B0",
            color: "success"
          });
          loadComments();
        }
      } catch (err) {
        toast.add({
          title: "\u66F4\u65B0\u5931\u8D25",
          description: (err == null ? void 0 : err.message) || "\u65E0\u6CD5\u4FEE\u6539\u8BC4\u8BBA\u72B6\u6001",
          color: "error"
        });
      }
    }
    async function confirmDelete(id) {
      const confirmed = await confirm({
        title: "\u786E\u8BA4\u5220\u9664\u8BC4\u8BBA\uFF1F",
        content: "\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\uFF0C\u4E14\u82E5\u6709\u4E0B\u7EA7\u56DE\u590D\u5C06\u4E00\u5E76\u88AB\u5220\u9664\u3002",
        confirmColor: "error"
      });
      if (!confirmed) return;
      try {
        const res = await $fetch(`/api/admin/comments/${id}`, {
          method: "DELETE"
        });
        if (res == null ? void 0 : res.success) {
          toast.add({
            title: "\u8BC4\u8BBA\u5DF2\u5220\u9664",
            color: "success"
          });
          loadComments();
        }
      } catch (err) {
        toast.add({
          title: "\u5220\u9664\u5931\u8D25",
          description: (err == null ? void 0 : err.message) || "\u65E0\u6CD5\u5220\u9664\u8BC4\u8BBA",
          color: "error"
        });
      }
    }
    function getTargetLink(type, id) {
      if (type === "post") {
        return `/blog/${id}`;
      }
      if (type === "model") {
        return `/models/${id}`;
      }
      return `/${type}/${id}`;
    }
    function getStatusBadgeColor(status) {
      switch (status) {
        case "approved":
          return "success";
        case "pending":
          return "warning";
        case "spam":
          return "error";
        default:
          return "neutral";
      }
    }
    function getStatusLabel(status) {
      switch (status) {
        case "approved":
          return "\u5DF2\u901A\u8FC7";
        case "pending":
          return "\u5F85\u5BA1\u6838";
        case "spam":
          return "\u5783\u573E";
        case "deleted":
          return "\u5DF2\u5220\u9664";
        default:
          return status;
      }
    }
    function formatDateTime(time) {
      if (!time) return "-";
      const d = new Date(time);
      return d.toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
    const isSettingsModalOpen = ref(false);
    const requireModeration = ref(false);
    const loginExemptModeration = ref(true);
    const savingSettings = ref(false);
    async function openSettingsModal() {
      try {
        const res = await $fetch("/api/admin/settings");
        if (Array.isArray(res)) {
          const mod = res.find((s) => s.key === "comment_require_moderation");
          const exempt = res.find((s) => s.key === "comment_login_exempt_moderation");
          requireModeration.value = (mod == null ? void 0 : mod.value) === "true" || (mod == null ? void 0 : mod.value) === "1";
          loginExemptModeration.value = !exempt || exempt.value === "true" || exempt.value === "1";
        }
      } catch {
      }
      isSettingsModalOpen.value = true;
    }
    async function saveSettings() {
      savingSettings.value = true;
      try {
        const res = await $fetch("/api/admin/settings", {
          method: "POST",
          body: {
            comment_require_moderation: String(requireModeration.value),
            comment_login_exempt_moderation: String(loginExemptModeration.value)
          }
        });
        if (res == null ? void 0 : res.success) {
          toast.add({
            title: "\u5BA1\u6838\u7B56\u7565\u5DF2\u4FDD\u5B58",
            color: "success"
          });
          isSettingsModalOpen.value = false;
        }
      } catch (err) {
        toast.add({
          title: "\u4FDD\u5B58\u5931\u8D25",
          description: (err == null ? void 0 : err.message) || "\u65E0\u6CD5\u4FDD\u5B58\u5BA1\u6838\u7B56\u7565",
          color: "error"
        });
      } finally {
        savingSettings.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBadge = _sfc_main$x;
      const _component_UButton = _sfc_main$B;
      const _component_UIcon = _sfc_main$G;
      const _component_UInput = _sfc_main$k;
      const _component_USelect = _sfc_main$j;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UPagination = _sfc_main$n;
      const _component_UModal = _sfc_main$s;
      const _component_USwitch = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh-7rem)] flex flex-col space-y-4" }, _attrs))}><div class="flex flex-col sm:flex-row justify-between sm:items-center gap-3 shrink-0"><div><div class="flex items-center gap-2"><h1 class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight"> \u8BC4\u8BBA\u5BA1\u6838\u7BA1\u7406 </h1>`);
      _push(ssrRenderComponent(_component_UBadge, {
        color: "primary",
        variant: "subtle",
        size: "xs",
        class: "font-mono font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(counts.value.all)}`);
          } else {
            return [
              createTextVNode(toDisplayString(counts.value.all), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-gray-500 dark:text-gray-400 text-xs mt-0.5"> \u7EDF\u4E00\u5BA1\u6838\u524D\u53F0\u6587\u7AE0\u4E0E\u6A21\u578B\u8BE6\u60C5\u9875\u7684\u8BBF\u5BA2\u4E0E\u7528\u6237\u8BC4\u8BBA\uFF0C\u62E6\u622A\u5783\u573E\u5E7F\u544A\u5E76\u7BA1\u7406\u4E92\u52A8\u5185\u5BB9 </p></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:sliders-horizontal",
        size: "sm",
        class: "rounded-xl",
        onClick: openSettingsModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5BA1\u6838\u89C4\u5219 `);
          } else {
            return [
              createTextVNode(" \u5BA1\u6838\u89C4\u5219 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrow-clockwise",
        size: "sm",
        loading: loading.value,
        class: "rounded-xl",
        onClick: loadComments
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-2 md:grid-cols-5 gap-2.5 shrink-0"><!--[-->`);
      ssrRenderList(statusTabs.value, (tab) => {
        _push(`<div class="${ssrRenderClass([{ "ring-2 ring-purple-500 border-purple-500": selectedStatus.value === tab.key }, "bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl px-3 py-2.5 shadow-2xs flex items-center justify-between cursor-pointer hover:border-purple-500/50 hover:bg-purple-50/20 dark:hover:bg-purple-950/10 transition-all"])}"><div class="flex items-center gap-2.5 min-w-0"><div class="${ssrRenderClass([tab.bgClass, "w-8 h-8 rounded-lg flex items-center justify-center shrink-0"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: tab.icon,
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</div><div class="truncate"><div class="text-xs font-medium text-gray-500 dark:text-gray-400">${ssrInterpolate(tab.label)}</div></div></div><span class="text-base font-bold text-gray-900 dark:text-white font-mono ml-2 shrink-0">${ssrInterpolate(tab.count)}</span></div>`);
      });
      _push(`<!--]--></div><div class="bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl p-3 flex flex-wrap gap-3 items-center justify-between shrink-0"><div class="flex flex-wrap items-center gap-2.5 flex-1 min-w-[280px]">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: searchKeyword.value,
        "onUpdate:modelValue": ($event) => searchKeyword.value = $event,
        placeholder: "\u641C\u7D22\u6635\u79F0\u3001\u90AE\u7BB1\u3001\u6B63\u6587\u3001\u76EE\u6807 slug...",
        icon: "ph:magnifying-glass",
        size: "sm",
        class: "w-72",
        onKeydown: loadComments
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: selectedTargetType.value,
        "onUpdate:modelValue": ($event) => selectedTargetType.value = $event,
        items: targetTypeOptions,
        size: "sm",
        class: "w-36",
        onChange: loadComments
      }, null, _parent));
      if (searchKeyword.value || selectedTargetType.value !== "all") {
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "ghost",
          size: "sm",
          icon: "ph:x",
          onClick: resetFilters
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u91CD\u7F6E `);
            } else {
              return [
                createTextVNode(" \u91CD\u7F6E ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-xs text-gray-400 font-mono"> \u5171 ${ssrInterpolate(totalItems.value)} \u6761\u8BB0\u5F55 </div></div><div class="flex-1 bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl overflow-hidden flex flex-col min-h-0"><div class="flex-1 overflow-y-auto p-4 divide-y divide-gray-100 dark:divide-gray-800/60">`);
      if (loading.value) {
        _push(`<div class="space-y-4 py-8"><!--[-->`);
        ssrRenderList(3, (i) => {
          _push(`<div class="animate-pulse space-y-2"><div class="h-4 bg-gray-100 dark:bg-gray-800 rounded w-1/4"></div><div class="h-12 bg-gray-100 dark:bg-gray-800 rounded w-full"></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (comments.value.length === 0) {
        _push(`<div class="py-20 flex flex-col items-center justify-center text-center"><div class="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-3">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:chat-teardrop-slash",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</div><h3 class="text-sm font-semibold text-gray-900 dark:text-white"> \u6682\u65E0\u5339\u914D\u7684\u8BC4\u8BBA\u8BB0\u5F55 </h3><p class="text-xs text-gray-500 dark:text-gray-400 mt-1"> \u5F53\u524D\u7B5B\u9009\u6761\u4EF6\u4E0B\u6CA1\u6709\u4EFB\u4F55\u8BC4\u8BBA\u6570\u636E </p></div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(comments.value, (item) => {
          _push(`<div class="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start justify-between gap-4"><div class="flex items-start gap-3 min-w-0 flex-1"><img${ssrRenderAttr("src", item.avatarUrl)}${ssrRenderAttr("alt", item.authorName)} class="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-800 object-cover shrink-0 mt-0.5"><div class="min-w-0 flex-1"><div class="flex flex-wrap items-center gap-2"><span class="text-xs font-bold text-gray-900 dark:text-white">${ssrInterpolate(item.authorName)}</span>`);
          if (item.userId) {
            _push(ssrRenderComponent(_component_UBadge, {
              color: "primary",
              variant: "subtle",
              size: "xs",
              class: "font-mono text-[10px]"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` \u7528\u6237 ID: ${ssrInterpolate(item.userId)}`);
                } else {
                  return [
                    createTextVNode(" \u7528\u6237 ID: " + toDisplayString(item.userId), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (item.authorEmail) {
            _push(`<span class="text-xs text-gray-500 dark:text-gray-400 font-mono"> &lt;${ssrInterpolate(item.authorEmail)}&gt; </span>`);
          } else {
            _push(`<!---->`);
          }
          if (item.authorUrl) {
            _push(`<a${ssrRenderAttr("href", item.authorUrl)} target="_blank" rel="noopener nofollow" class="inline-flex items-center gap-1 text-[11px] font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded hover:underline"${ssrRenderAttr("title", item.authorUrl)}>`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:globe",
              class: "w-3 h-3"
            }, null, _parent));
            _push(`<span>\u7F51\u5740</span></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: getTargetLink(item.targetType, item.targetId),
            target: "_blank",
            class: "inline-flex items-center gap-1 text-[11px] font-mono text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 px-2 py-0.5 rounded hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-square-out",
                  class: "w-3 h-3"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(item.targetType)}: ${ssrInterpolate(item.targetId)}`);
              } else {
                return [
                  createVNode(_component_UIcon, {
                    name: "ph:arrow-square-out",
                    class: "w-3 h-3"
                  }),
                  createTextVNode(" " + toDisplayString(item.targetType) + ": " + toDisplayString(item.targetId), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_UBadge, {
            color: getStatusBadgeColor(item.status),
            variant: "subtle",
            size: "xs"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(getStatusLabel(item.status))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(getStatusLabel(item.status)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="mt-2 text-sm text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-[#18181b] p-3 rounded-lg border border-gray-100 dark:border-gray-800/80 leading-relaxed whitespace-pre-line break-words">${ssrInterpolate(item.content)}</div><div class="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-gray-400 font-mono"><span>\u53D1\u8868\u65F6\u95F4\uFF1A${ssrInterpolate(formatDateTime(item.createdAt))}</span>`);
          if (item.ip) {
            _push(`<span>IP: ${ssrInterpolate(item.ip)}</span>`);
          } else {
            _push(`<!---->`);
          }
          if (item.parentId) {
            _push(`<span>\u56DE\u590D\u8BC4\u8BBA #${ssrInterpolate(item.parentId)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div><div class="flex sm:flex-col items-center sm:items-end gap-1.5 shrink-0 self-end sm:self-start">`);
          if (item.status !== "approved") {
            _push(ssrRenderComponent(_component_UButton, {
              color: "success",
              variant: "subtle",
              size: "xs",
              icon: "ph:check-bold",
              onClick: ($event) => updateStatus(item.id, "approved")
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` \u901A\u8FC7 `);
                } else {
                  return [
                    createTextVNode(" \u901A\u8FC7 ")
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (item.status !== "spam") {
            _push(ssrRenderComponent(_component_UButton, {
              color: "warning",
              variant: "subtle",
              size: "xs",
              icon: "ph:prohibit-bold",
              onClick: ($event) => updateStatus(item.id, "spam")
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` \u6807\u4E3A\u5783\u573E `);
                } else {
                  return [
                    createTextVNode(" \u6807\u4E3A\u5783\u573E ")
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (item.status !== "pending") {
            _push(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "xs",
              icon: "ph:clock",
              onClick: ($event) => updateStatus(item.id, "pending")
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` \u8BBE\u4E3A\u5F85\u5BA1 `);
                } else {
                  return [
                    createTextVNode(" \u8BBE\u4E3A\u5F85\u5BA1 ")
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_UButton, {
            color: "error",
            variant: "ghost",
            size: "xs",
            icon: "ph:trash",
            onClick: ($event) => confirmDelete(item.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u5220\u9664 `);
              } else {
                return [
                  createTextVNode(" \u5220\u9664 ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div><div class="p-3 border-t border-gray-200/70 dark:border-gray-800/60 flex items-center justify-between shrink-0 bg-white dark:bg-[#121214]"><span class="text-xs text-gray-500 font-mono"> \u663E\u793A\u7B2C ${ssrInterpolate(totalItems.value === 0 ? 0 : (page.value - 1) * pageSize.value + 1)} - ${ssrInterpolate(Math.min(page.value * pageSize.value, totalItems.value))} \u6761\uFF0C\u5171 ${ssrInterpolate(totalItems.value)} \u6761 </span>`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: page.value,
        "onUpdate:modelValue": ($event) => page.value = $event,
        total: totalItems.value,
        "items-per-page": pageSize.value,
        max: 5,
        "onUpdate:page": loadComments
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: isSettingsModalOpen.value,
        "onUpdate:open": ($event) => isSettingsModalOpen.value = $event
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-5 space-y-5"${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:sliders-horizontal",
              class: "w-5 h-5 text-purple-600 dark:text-purple-400"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-base font-bold text-gray-900 dark:text-white"${_scopeId}>\u8BC4\u8BBA\u5BA1\u6838\u7B56\u7565\u8BBE\u7F6E</h3></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x",
              size: "xs",
              onClick: ($event) => isSettingsModalOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-3"${_scopeId}><div class="flex items-start justify-between gap-4 p-3 rounded-xl bg-gray-50 dark:bg-[#18181b] border border-gray-100 dark:border-gray-800"${_scopeId}><div${_scopeId}><div class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>\u5F00\u542F\u4EBA\u5DE5\u5BA1\u6838\uFF08\u5148\u5BA1\u540E\u53D1\uFF09</div><div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5"${_scopeId}> \u5F00\u542F\u540E\u65B0\u8BC4\u8BBA\u9ED8\u8BA4\u8FDB\u5165\u5F85\u5BA1\u6838\u72B6\u6001\uFF0C\u9700\u7BA1\u7406\u5458\u5BA1\u6838\u901A\u8FC7\u540E\u624D\u5728\u524D\u53F0\u516C\u5F00\u5C55\u793A\uFF1B\u5173\u95ED\u65F6\u53D1\u5B8C\u7ACB\u5373\u53EF\u89C1\u3002 </div></div>`);
            _push2(ssrRenderComponent(_component_USwitch, {
              modelValue: requireModeration.value,
              "onUpdate:modelValue": ($event) => requireModeration.value = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="${ssrRenderClass([{ "opacity-50 pointer-events-none": !requireModeration.value }, "flex items-start justify-between gap-4 p-3 rounded-xl bg-gray-50 dark:bg-[#18181b] border border-gray-100 dark:border-gray-800 transition-opacity"])}"${_scopeId}><div${_scopeId}><div class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>\u5DF2\u767B\u5F55\u7528\u6237\u514D\u5BA1\u6838</div><div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5"${_scopeId}> \u5F00\u542F\u4EBA\u5DE5\u5BA1\u6838\u65F6\uFF0C\u5DF2\u767B\u5F55\u7528\u6237\u6216 GitHub \u8BA4\u8BC1\u7528\u6237\u4ECD\u53EF\u76F4\u63A5\u53D1\u5E03\u5E76\u516C\u5F00\uFF0C\u4EC5\u672A\u767B\u5F55\u8BBF\u5BA2\u9700\u8981\u540E\u53F0\u5BA1\u6838\u3002 </div></div>`);
            _push2(ssrRenderComponent(_component_USwitch, {
              modelValue: loginExemptModeration.value,
              "onUpdate:modelValue": ($event) => loginExemptModeration.value = $event,
              disabled: !requireModeration.value
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center justify-end gap-2 pt-3 border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "sm",
              onClick: ($event) => isSettingsModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u53D6\u6D88`);
                } else {
                  return [
                    createTextVNode("\u53D6\u6D88")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              size: "sm",
              loading: savingSettings.value,
              onClick: saveSettings
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u4FDD\u5B58\u7B56\u7565`);
                } else {
                  return [
                    createTextVNode("\u4FDD\u5B58\u7B56\u7565")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-5 space-y-5" }, [
                createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:sliders-horizontal",
                      class: "w-5 h-5 text-purple-600 dark:text-purple-400"
                    }),
                    createVNode("h3", { class: "text-base font-bold text-gray-900 dark:text-white" }, "\u8BC4\u8BBA\u5BA1\u6838\u7B56\u7565\u8BBE\u7F6E")
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    size: "xs",
                    onClick: ($event) => isSettingsModalOpen.value = false
                  }, null, 8, ["onClick"])
                ]),
                createVNode("div", { class: "space-y-3" }, [
                  createVNode("div", { class: "flex items-start justify-between gap-4 p-3 rounded-xl bg-gray-50 dark:bg-[#18181b] border border-gray-100 dark:border-gray-800" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, "\u5F00\u542F\u4EBA\u5DE5\u5BA1\u6838\uFF08\u5148\u5BA1\u540E\u53D1\uFF09"),
                      createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5" }, " \u5F00\u542F\u540E\u65B0\u8BC4\u8BBA\u9ED8\u8BA4\u8FDB\u5165\u5F85\u5BA1\u6838\u72B6\u6001\uFF0C\u9700\u7BA1\u7406\u5458\u5BA1\u6838\u901A\u8FC7\u540E\u624D\u5728\u524D\u53F0\u516C\u5F00\u5C55\u793A\uFF1B\u5173\u95ED\u65F6\u53D1\u5B8C\u7ACB\u5373\u53EF\u89C1\u3002 ")
                    ]),
                    createVNode(_component_USwitch, {
                      modelValue: requireModeration.value,
                      "onUpdate:modelValue": ($event) => requireModeration.value = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", {
                    class: ["flex items-start justify-between gap-4 p-3 rounded-xl bg-gray-50 dark:bg-[#18181b] border border-gray-100 dark:border-gray-800 transition-opacity", { "opacity-50 pointer-events-none": !requireModeration.value }]
                  }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, "\u5DF2\u767B\u5F55\u7528\u6237\u514D\u5BA1\u6838"),
                      createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5" }, " \u5F00\u542F\u4EBA\u5DE5\u5BA1\u6838\u65F6\uFF0C\u5DF2\u767B\u5F55\u7528\u6237\u6216 GitHub \u8BA4\u8BC1\u7528\u6237\u4ECD\u53EF\u76F4\u63A5\u53D1\u5E03\u5E76\u516C\u5F00\uFF0C\u4EC5\u672A\u767B\u5F55\u8BBF\u5BA2\u9700\u8981\u540E\u53F0\u5BA1\u6838\u3002 ")
                    ]),
                    createVNode(_component_USwitch, {
                      modelValue: loginExemptModeration.value,
                      "onUpdate:modelValue": ($event) => loginExemptModeration.value = $event,
                      disabled: !requireModeration.value
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ], 2)
                ]),
                createVNode("div", { class: "flex items-center justify-end gap-2 pt-3 border-t border-gray-100 dark:border-gray-800" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    size: "sm",
                    onClick: ($event) => isSettingsModalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u53D6\u6D88")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    size: "sm",
                    loading: savingSettings.value,
                    onClick: saveSettings
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u4FDD\u5B58\u7B56\u7565")
                    ]),
                    _: 1
                  }, 8, ["loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/comments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
