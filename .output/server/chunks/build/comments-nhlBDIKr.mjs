import { e as useToast, q as useConfirm, k as _sfc_main$z, i as _sfc_main$D, _ as _sfc_main$I, b as _sfc_main$k, l as _sfc_main$j, I as __nuxt_component_3$3, x as _sfc_main$n, n as _sfc_main$t, c as _sfc_main$g } from './server.mjs';
import { _ as _sfc_main$1 } from './Switch-LnISfNX3.mjs';
import { _ as _sfc_main$2 } from './Checkbox-SZfkaLj6.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, withDirectives, vModelRadio, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
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
import '@libsql/client';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
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
import './VisuallyHiddenInput-Cg_0lU4u.mjs';
import './isValueEqualOrExist-BZCZf5a9.mjs';
import './RovingFocusItem-CtKUnlPQ.mjs';
import './utils-COwvQAaf.mjs';
import './RovingFocusGroup-CuSPWxE2.mjs';

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
    const selectedSource = ref("all");
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
    const sourceOptions = [
      { label: "\u5168\u90E8\u6765\u6E90", value: "all" },
      { label: "\u672C\u7AD9\u539F\u751F", value: "local" },
      { label: "V2EX", value: "v2ex" },
      { label: "LINUX DO", value: "linuxdo" }
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
      selectedSource.value = "all";
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
            source: selectedSource.value !== "all" ? selectedSource.value : void 0,
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
    const v2exApiToken = ref("");
    const linuxdoCookie = ref("");
    const linuxdoUserAgent = ref("");
    const savingSettings = ref(false);
    function fillCurrentUA() {
    }
    async function openSettingsModal() {
      try {
        const res = await $fetch("/api/admin/settings");
        if (Array.isArray(res)) {
          const mod = res.find((s) => s.key === "comment_require_moderation");
          const exempt = res.find((s) => s.key === "comment_login_exempt_moderation");
          const token = res.find((s) => s.key === "v2ex_api_token");
          const ldoCookie = res.find((s) => s.key === "linuxdo_cookie");
          const ldoUA = res.find((s) => s.key === "linuxdo_user_agent");
          requireModeration.value = (mod == null ? void 0 : mod.value) === "true" || (mod == null ? void 0 : mod.value) === "1";
          loginExemptModeration.value = !exempt || exempt.value === "true" || exempt.value === "1";
          v2exApiToken.value = (token == null ? void 0 : token.value) || "";
          linuxdoCookie.value = (ldoCookie == null ? void 0 : ldoCookie.value) || "";
          linuxdoUserAgent.value = (ldoUA == null ? void 0 : ldoUA.value) || "";
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
            comment_login_exempt_moderation: String(loginExemptModeration.value),
            v2ex_api_token: v2exApiToken.value.trim(),
            linuxdo_cookie: linuxdoCookie.value.trim(),
            linuxdo_user_agent: linuxdoUserAgent.value.trim()
          }
        });
        if (res == null ? void 0 : res.success) {
          toast.add({
            title: "\u5BA1\u6838\u7B56\u7565\u4E0E\u51ED\u8BC1\u5DF2\u4FDD\u5B58",
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
    const isSyncModalOpen = ref(false);
    const isSyncing = ref(false);
    const syncMode = ref("network");
    const syncForm = ref({
      source: "v2ex",
      targetType: "post",
      targetId: "",
      topicIdOrUrl: "",
      rawPayload: "",
      status: "approved",
      autoSync: true
    });
    function extractTopicId(source, input) {
      if (!input) return null;
      const trimmed = input.trim();
      if (/^\d+$/.test(trimmed)) return trimmed;
      if (source === "linuxdo") {
        const match = trimmed.match(/linux\.do\/t\/(?:topic\/)?(?:[^\/]+\/)?(\d+)/i);
        return match ? match[1] : null;
      }
      if (source === "v2ex") {
        const match = trimmed.match(/v2ex\.com\/t\/(\d+)/i);
        return match ? match[1] : null;
      }
      return null;
    }
    function openJsonInBrowser() {
      const topicId = extractTopicId(syncForm.value.source, syncForm.value.topicIdOrUrl);
      if (!topicId) {
        toast.add({
          title: "\u63D0\u793A",
          description: "\u8BF7\u5148\u5728\u4E0A\u65B9\u8F93\u5165\u5916\u90E8\u8BDD\u9898\u94FE\u63A5\u6216 ID",
          color: "warning"
        });
        return;
      }
      (void 0).open(`https://linux.do/t/${topicId}.json`, "_blank");
    }
    function openSyncModal() {
      isSyncModalOpen.value = true;
    }
    async function executeSync() {
      var _a;
      const targetId = syncForm.value.targetId.trim();
      const topicIdOrUrl = syncForm.value.topicIdOrUrl.trim();
      const rawPayload = syncForm.value.rawPayload.trim();
      if (!targetId) {
        toast.add({
          title: "\u53C2\u6570\u7F3A\u5931",
          description: "\u8BF7\u586B\u5199\u76EE\u6807\u6587\u7AE0\u6216\u6A21\u578B\u7684 Slug / ID",
          color: "error"
        });
        return;
      }
      if (syncMode.value === "network" && !topicIdOrUrl) {
        toast.add({
          title: "\u53C2\u6570\u7F3A\u5931",
          description: "\u8BF7\u586B\u5199\u5916\u90E8\u8BA8\u8BBA\u5E16\u94FE\u63A5\u6216\u4E3B\u9898 ID",
          color: "error"
        });
        return;
      }
      if (syncMode.value === "paste" && !rawPayload) {
        toast.add({
          title: "\u53C2\u6570\u7F3A\u5931",
          description: "\u8BF7\u7C98\u8D34\u5728\u6D4F\u89C8\u5668\u6253\u5F00\u7684 JSON \u6216 RSS \u6570\u636E",
          color: "error"
        });
        return;
      }
      isSyncing.value = true;
      try {
        const res = await $fetch("/api/admin/comments/sync", {
          method: "POST",
          body: {
            source: syncForm.value.source,
            targetType: syncForm.value.targetType,
            targetId,
            topicIdOrUrl: topicIdOrUrl || void 0,
            rawPayload: syncMode.value === "paste" ? rawPayload : void 0,
            status: syncForm.value.status,
            autoSync: syncForm.value.autoSync
          }
        });
        if (res == null ? void 0 : res.success) {
          toast.add({
            title: "\u540C\u6B65\u6210\u529F",
            description: res.message || "\u5DF2\u6210\u529F\u5BFC\u5165\u5916\u90E8\u8BC4\u8BBA",
            color: "success"
          });
          isSyncModalOpen.value = false;
          syncForm.value.topicIdOrUrl = "";
          syncForm.value.rawPayload = "";
          loadComments();
          if (isSyncSourcesModalOpen.value) {
            loadSyncSources();
          }
        }
      } catch (err) {
        toast.add({
          title: "\u540C\u6B65\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.statusMessage) || (err == null ? void 0 : err.message) || "\u62C9\u53D6\u5916\u90E8\u8BC4\u8BBA\u5931\u8D25",
          color: "error"
        });
      } finally {
        isSyncing.value = false;
      }
    }
    const isSyncSourcesModalOpen = ref(false);
    const syncSources = ref([]);
    const loadingSyncSources = ref(false);
    const runningSourceId = ref(null);
    const syncingAllSources = ref(false);
    async function openSyncSourcesModal() {
      isSyncSourcesModalOpen.value = true;
      loadSyncSources();
    }
    async function loadSyncSources() {
      loadingSyncSources.value = true;
      try {
        const res = await $fetch("/api/admin/comments/sync-sources");
        if (res == null ? void 0 : res.success) {
          syncSources.value = res.data || [];
        }
      } catch (err) {
        toast.add({
          title: "\u52A0\u8F7D\u540C\u6B65\u6E90\u5931\u8D25",
          description: err == null ? void 0 : err.message,
          color: "error"
        });
      } finally {
        loadingSyncSources.value = false;
      }
    }
    async function runSingleSource(id) {
      var _a;
      runningSourceId.value = id;
      try {
        const res = await $fetch(`/api/admin/comments/sync-sources/${id}/run`, {
          method: "POST"
        });
        if (res == null ? void 0 : res.success) {
          toast.add({
            title: "\u540C\u6B65\u5B8C\u6210",
            description: res.message,
            color: "success"
          });
          loadSyncSources();
          loadComments();
        }
      } catch (err) {
        toast.add({
          title: "\u540C\u6B65\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.statusMessage) || (err == null ? void 0 : err.message),
          color: "error"
        });
      } finally {
        runningSourceId.value = null;
      }
    }
    async function syncAllSources() {
      syncingAllSources.value = true;
      try {
        const res = await $fetch("/api/admin/comments/sync-sources/run-all", {
          method: "POST"
        });
        if (res == null ? void 0 : res.success) {
          toast.add({
            title: "\u6279\u91CF\u540C\u6B65\u5B8C\u6210",
            description: res.message,
            color: "success"
          });
          loadSyncSources();
          loadComments();
        }
      } catch (err) {
        toast.add({
          title: "\u6279\u91CF\u540C\u6B65\u5931\u8D25",
          description: err == null ? void 0 : err.message,
          color: "error"
        });
      } finally {
        syncingAllSources.value = false;
      }
    }
    async function toggleSourceAutoSync(id, autoSync) {
      try {
        const res = await $fetch(`/api/admin/comments/sync-sources/${id}`, {
          method: "PATCH",
          body: { autoSync }
        });
        if (res == null ? void 0 : res.success) {
          const target = syncSources.value.find((s) => s.id === id);
          if (target) target.autoSync = autoSync;
          toast.add({
            title: autoSync ? "\u5DF2\u5F00\u542F\u81EA\u52A8\u8F6E\u8BE2" : "\u5DF2\u5173\u95ED\u81EA\u52A8\u8F6E\u8BE2",
            color: "success"
          });
        }
      } catch (err) {
        toast.add({
          title: "\u4FEE\u6539\u5931\u8D25",
          description: err == null ? void 0 : err.message,
          color: "error"
        });
      }
    }
    async function confirmDeleteSource(id) {
      const confirmed = await confirm({
        title: "\u786E\u8BA4\u89E3\u9664\u6B64\u540C\u6B65\u6E90\u7ED1\u5B9A\uFF1F",
        content: "\u89E3\u9664\u7ED1\u5B9A\u540E\u5C06\u505C\u6B62\u81EA\u52A8\u8F6E\u8BE2\u540C\u6B65\uFF0C\u5DF2\u5BFC\u5165\u7684\u5B58\u91CF\u8BC4\u8BBA\u4ECD\u5C06\u4FDD\u7559\u5728\u7CFB\u7EDF\u4E2D\u3002",
        confirmColor: "error"
      });
      if (!confirmed) return;
      try {
        const res = await $fetch(`/api/admin/comments/sync-sources/${id}`, {
          method: "DELETE"
        });
        if (res == null ? void 0 : res.success) {
          toast.add({
            title: "\u5DF2\u89E3\u9664\u7ED1\u5B9A",
            color: "success"
          });
          loadSyncSources();
        }
      } catch (err) {
        toast.add({
          title: "\u89E3\u7ED1\u5931\u8D25",
          description: err == null ? void 0 : err.message,
          color: "error"
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBadge = _sfc_main$z;
      const _component_UButton = _sfc_main$D;
      const _component_UIcon = _sfc_main$I;
      const _component_UInput = _sfc_main$k;
      const _component_USelect = _sfc_main$j;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_UPagination = _sfc_main$n;
      const _component_UModal = _sfc_main$t;
      const _component_USwitch = _sfc_main$1;
      const _component_UTextarea = _sfc_main$g;
      const _component_UCheckbox = _sfc_main$2;
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
        color: "primary",
        variant: "subtle",
        icon: "ph:arrows-clockwise",
        size: "sm",
        class: "rounded-xl",
        onClick: openSyncModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u540C\u6B65\u5916\u90E8\u8BC4\u8BBA `);
          } else {
            return [
              createTextVNode(" \u540C\u6B65\u5916\u90E8\u8BC4\u8BBA ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:link-simple-horizontal",
        size: "sm",
        class: "rounded-xl",
        onClick: openSyncSourcesModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u540C\u6B65\u6E90\u7BA1\u7406 `);
          } else {
            return [
              createTextVNode(" \u540C\u6B65\u6E90\u7BA1\u7406 ")
            ];
          }
        }),
        _: 1
      }, _parent));
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
        placeholder: "\u641C\u7D22\u6635\u79F0\u3001\u6B63\u6587\u3001slug\u3001\u5916\u90E8 ID...",
        icon: "ph:magnifying-glass",
        size: "sm",
        class: "w-64",
        onKeydown: loadComments
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: selectedTargetType.value,
        "onUpdate:modelValue": ($event) => selectedTargetType.value = $event,
        items: targetTypeOptions,
        size: "sm",
        class: "w-32",
        onChange: loadComments
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: selectedSource.value,
        "onUpdate:modelValue": ($event) => selectedSource.value = $event,
        items: sourceOptions,
        size: "sm",
        class: "w-32",
        onChange: loadComments
      }, null, _parent));
      if (searchKeyword.value || selectedTargetType.value !== "all" || selectedSource.value !== "all") {
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
          if (item.source && item.source !== "local") {
            _push(ssrRenderComponent(_component_UBadge, {
              color: item.source === "linuxdo" ? "warning" : "info",
              variant: "subtle",
              size: "xs",
              class: "font-mono text-[10px]"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                var _a, _b;
                if (_push2) {
                  _push2(`${ssrInterpolate(item.source === "linuxdo" ? "LINUX DO" : item.source.toUpperCase())} `);
                  if ((_a = item.extraData) == null ? void 0 : _a.floor) {
                    _push2(`<span${_scopeId}>#${ssrInterpolate(item.extraData.floor)}\u697C</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                } else {
                  return [
                    createTextVNode(toDisplayString(item.source === "linuxdo" ? "LINUX DO" : item.source.toUpperCase()) + " ", 1),
                    ((_b = item.extraData) == null ? void 0 : _b.floor) ? (openBlock(), createBlock("span", { key: 0 }, "#" + toDisplayString(item.extraData.floor) + "\u697C", 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (item.externalUrl) {
            _push(`<a${ssrRenderAttr("href", item.externalUrl)} target="_blank" rel="noopener nofollow" class="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 px-2 py-0.5 rounded hover:underline" title="\u76F4\u8FBE\u5916\u90E8\u539F\u59CB\u8BA8\u8BBA\u5E16">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-square-out",
              class: "w-3 h-3"
            }, null, _parent));
            _push(`<span>\u539F\u8BA8\u8BBA</span></a>`);
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
            _push2(`</div><div class="p-3 rounded-xl bg-gray-50 dark:bg-[#18181b] border border-gray-100 dark:border-gray-800 space-y-1.5"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>V2EX API Token (\u53EF\u9009)</div><a href="https://www.v2ex.com/settings/tokens" target="_blank" rel="noopener nofollow" class="text-[11px] text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"${_scopeId}><span${_scopeId}>\u83B7\u53D6 Token</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-square-out",
              class: "w-3 h-3"
            }, null, _parent2, _scopeId));
            _push2(`</a></div><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}> \u914D\u7F6E\u540E\u540C\u6B65\u65F6\u4F18\u5148\u4F7F\u7528\u5B98\u65B9 API v2\uFF0C\u989D\u5EA6\u66F4\u9AD8\u66F4\u7A33\u5B9A\uFF1B\u4E0D\u586B\u65F6\u5C06\u8D70\u516C\u5F00\u56DE\u9000\u63A5\u53E3\u3002 </div>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: v2exApiToken.value,
              "onUpdate:modelValue": ($event) => v2exApiToken.value = $event,
              type: "password",
              placeholder: "\u586B\u5199 V2EX Personal Access Token",
              size: "sm",
              class: "w-full mt-1 font-mono"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-3 rounded-xl bg-gray-50 dark:bg-[#18181b] border border-gray-100 dark:border-gray-800 space-y-1.5"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>LINUX DO Cookie (\u63A8\u8350)</div><a href="https://linux.do" target="_blank" rel="noopener nofollow" class="text-[11px] text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-0.5"${_scopeId}><span${_scopeId}>\u8BBF\u95EE linux.do</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-square-out",
              class: "w-3 h-3"
            }, null, _parent2, _scopeId));
            _push2(`</a></div><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}> LINUX DO \u53D7 Cloudflare \u4E25\u683C\u4FDD\u62A4\u3002\u5728\u5DF2\u767B\u5F55 linux.do \u7684\u6D4F\u89C8\u5668\u4E2D\u590D\u5236 Cookie \u7C98\u8D34\u4E8E\u6B64\uFF08\u9700\u542B cf_clearance \u4E0E _t\uFF09\u3002 </div>`);
            _push2(ssrRenderComponent(_component_UTextarea, {
              modelValue: linuxdoCookie.value,
              "onUpdate:modelValue": ($event) => linuxdoCookie.value = $event,
              placeholder: "\u4F8B\u5982: _t=...; cf_clearance=...",
              rows: 2,
              size: "sm",
              class: "w-full mt-1 font-mono text-xs"
            }, null, _parent2, _scopeId));
            _push2(`<div class="pt-2 border-t border-gray-100 dark:border-gray-800 space-y-1"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="text-xs font-medium text-gray-700 dark:text-gray-300"${_scopeId}> \u6D4F\u89C8\u5668 User-Agent (\u9700\u4E0E Cookie \u4FDD\u6301\u4E00\u81F4) </div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              variant: "ghost",
              color: "primary",
              class: "text-[10px] h-6 px-1.5",
              onClick: fillCurrentUA
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4F7F\u7528\u5F53\u524D\u6D4F\u89C8\u5668 UA `);
                } else {
                  return [
                    createTextVNode(" \u4F7F\u7528\u5F53\u524D\u6D4F\u89C8\u5668 UA ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: linuxdoUserAgent.value,
              "onUpdate:modelValue": ($event) => linuxdoUserAgent.value = $event,
              placeholder: "\u7559\u7A7A\u65F6\u4F7F\u7528\u7CFB\u7EDF\u9ED8\u8BA4 Chrome UA",
              size: "sm",
              class: "w-full font-mono text-xs"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="flex items-center justify-end gap-2 pt-3 border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
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
                  ], 2),
                  createVNode("div", { class: "p-3 rounded-xl bg-gray-50 dark:bg-[#18181b] border border-gray-100 dark:border-gray-800 space-y-1.5" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, "V2EX API Token (\u53EF\u9009)"),
                      createVNode("a", {
                        href: "https://www.v2ex.com/settings/tokens",
                        target: "_blank",
                        rel: "noopener nofollow",
                        class: "text-[11px] text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
                      }, [
                        createVNode("span", null, "\u83B7\u53D6 Token"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-square-out",
                          class: "w-3 h-3"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, " \u914D\u7F6E\u540E\u540C\u6B65\u65F6\u4F18\u5148\u4F7F\u7528\u5B98\u65B9 API v2\uFF0C\u989D\u5EA6\u66F4\u9AD8\u66F4\u7A33\u5B9A\uFF1B\u4E0D\u586B\u65F6\u5C06\u8D70\u516C\u5F00\u56DE\u9000\u63A5\u53E3\u3002 "),
                    createVNode(_component_UInput, {
                      modelValue: v2exApiToken.value,
                      "onUpdate:modelValue": ($event) => v2exApiToken.value = $event,
                      type: "password",
                      placeholder: "\u586B\u5199 V2EX Personal Access Token",
                      size: "sm",
                      class: "w-full mt-1 font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "p-3 rounded-xl bg-gray-50 dark:bg-[#18181b] border border-gray-100 dark:border-gray-800 space-y-1.5" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, "LINUX DO Cookie (\u63A8\u8350)"),
                      createVNode("a", {
                        href: "https://linux.do",
                        target: "_blank",
                        rel: "noopener nofollow",
                        class: "text-[11px] text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-0.5"
                      }, [
                        createVNode("span", null, "\u8BBF\u95EE linux.do"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-square-out",
                          class: "w-3 h-3"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, " LINUX DO \u53D7 Cloudflare \u4E25\u683C\u4FDD\u62A4\u3002\u5728\u5DF2\u767B\u5F55 linux.do \u7684\u6D4F\u89C8\u5668\u4E2D\u590D\u5236 Cookie \u7C98\u8D34\u4E8E\u6B64\uFF08\u9700\u542B cf_clearance \u4E0E _t\uFF09\u3002 "),
                    createVNode(_component_UTextarea, {
                      modelValue: linuxdoCookie.value,
                      "onUpdate:modelValue": ($event) => linuxdoCookie.value = $event,
                      placeholder: "\u4F8B\u5982: _t=...; cf_clearance=...",
                      rows: 2,
                      size: "sm",
                      class: "w-full mt-1 font-mono text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "pt-2 border-t border-gray-100 dark:border-gray-800 space-y-1" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("div", { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, " \u6D4F\u89C8\u5668 User-Agent (\u9700\u4E0E Cookie \u4FDD\u6301\u4E00\u81F4) "),
                        createVNode(_component_UButton, {
                          size: "xs",
                          variant: "ghost",
                          color: "primary",
                          class: "text-[10px] h-6 px-1.5",
                          onClick: fillCurrentUA
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u4F7F\u7528\u5F53\u524D\u6D4F\u89C8\u5668 UA ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_UInput, {
                        modelValue: linuxdoUserAgent.value,
                        "onUpdate:modelValue": ($event) => linuxdoUserAgent.value = $event,
                        placeholder: "\u7559\u7A7A\u65F6\u4F7F\u7528\u7CFB\u7EDF\u9ED8\u8BA4 Chrome UA",
                        size: "sm",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
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
      _push(ssrRenderComponent(_component_UModal, {
        open: isSyncModalOpen.value,
        "onUpdate:open": ($event) => isSyncModalOpen.value = $event
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-5 space-y-4"${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrows-clockwise",
              class: "w-5 h-5 text-blue-600 dark:text-blue-400"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-base font-bold text-gray-900 dark:text-white"${_scopeId}>\u540C\u6B65\u5916\u90E8\u8BA8\u8BBA\u4E0E\u8BC4\u8BBA</h3></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x",
              size: "xs",
              onClick: ($event) => isSyncModalOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-1.5 p-1 bg-gray-100 dark:bg-gray-800/80 rounded-lg"${_scopeId}><button type="button" class="${ssrRenderClass([syncMode.value === "network" ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "flex-1 py-1 px-3 text-xs font-medium rounded-md transition-all text-center flex items-center justify-center gap-1"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:globe",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u8054\u7F51\u81EA\u52A8\u62C9\u53D6</span></button><button type="button" class="${ssrRenderClass([syncMode.value === "paste" ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "flex-1 py-1 px-3 text-xs font-medium rounded-md transition-all text-center flex items-center justify-center gap-1"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:clipboard-text",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u6570\u636E\u76F4\u8D34\u5BFC\u5165 (\u514D CF \u76FE)</span></button></div><div class="space-y-3 text-xs"${_scopeId}><div${_scopeId}><label class="block font-medium text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u5916\u90E8\u6765\u6E90 </label>`);
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: syncForm.value.source,
              "onUpdate:modelValue": ($event) => syncForm.value.source = $event,
              items: [
                { label: "V2EX \u793E\u533A\u8BA8\u8BBA", value: "v2ex" },
                { label: "LINUX DO \u793E\u533A\u8BA8\u8BBA", value: "linuxdo" }
              ],
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-2 gap-3"${_scopeId}><div${_scopeId}><label class="block font-medium text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u76EE\u6807\u7C7B\u578B </label>`);
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: syncForm.value.targetType,
              "onUpdate:modelValue": ($event) => syncForm.value.targetType = $event,
              items: [
                { label: "\u6587\u7AE0 (post)", value: "post" },
                { label: "\u6A21\u578B (model)", value: "model" }
              ],
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block font-medium text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u76EE\u6807 Slug / ID </label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: syncForm.value.targetId,
              "onUpdate:modelValue": ($event) => syncForm.value.targetId = $event,
              placeholder: "\u5982: my-cool-project \u6216 40",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (syncMode.value === "network") {
              _push2(`<div${_scopeId}><label class="block font-medium text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u5916\u90E8\u8BDD\u9898\u94FE\u63A5\u6216 ID </label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: syncForm.value.topicIdOrUrl,
                "onUpdate:modelValue": ($event) => syncForm.value.topicIdOrUrl = $event,
                placeholder: syncForm.value.source === "linuxdo" ? "\u4F8B\u5982: https://linux.do/t/topic-title/123456 \u6216 123456" : "\u4F8B\u5982: https://www.v2ex.com/t/1088888 \u6216 1088888",
                class: "w-full"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-[11px] text-gray-400 mt-1"${_scopeId}> \u7CFB\u7EDF\u5C06\u81EA\u52A8\u5168\u91CF\u62C9\u53D6\u6240\u6709\u697C\u5C42\uFF0C\u6839\u636E\u5916\u90E8\u8BC4\u8BBA ID \u5E42\u7B49\u53BB\u91CD\uFF0C\u5DF2\u5B58\u5728\u7684\u4E0D\u4F1A\u91CD\u590D\u5BFC\u5165\u3002 </p></div>`);
            } else {
              _push2(`<div class="space-y-2"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><label class="block font-medium text-gray-700 dark:text-gray-300"${_scopeId}> \u5916\u90E8\u8BDD\u9898\u94FE\u63A5\u6216 ID (\u7528\u4E8E\u7ED1\u5B9A\u8FFD\u8E2A) </label>`);
              if (syncForm.value.source === "linuxdo") {
                _push2(ssrRenderComponent(_component_UButton, {
                  variant: "subtle",
                  color: "warning",
                  size: "xs",
                  icon: "ph:arrow-square-out",
                  class: "h-6 text-[10px]",
                  onClick: openJsonInBrowser
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 JSON `);
                    } else {
                      return [
                        createTextVNode(" \u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 JSON ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: syncForm.value.topicIdOrUrl,
                "onUpdate:modelValue": ($event) => syncForm.value.topicIdOrUrl = $event,
                placeholder: "\u4F8B\u5982: 2961421 \u6216 https://linux.do/t/topic/2961421",
                class: "w-full"
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-[11px] text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-lg border border-amber-200/50 dark:border-amber-800/40 space-y-1"${_scopeId}><div class="font-semibold flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:shield-check",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u4E3A\u4EC0\u4E48\u63A8\u8350\u6570\u636E\u76F4\u8D34\uFF1F</span></div><div class="text-gray-600 dark:text-gray-300"${_scopeId}> LINUX DO \u90E8\u7F72\u4E86 Cloudflare \u76FE\uFF0C\u670D\u52A1\u7AEF\u76F4\u63A5\u53D1\u7F51\u7EDC\u8BF7\u6C42\u6781\u6613\u88AB\u963B\u65AD\u3002\u70B9\u51FB\u53F3\u4E0A\u89D2\u6309\u94AE\u5728\u5DF2\u767B\u5F55\u7684\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u8BE5\u8D34\u7684 JSON\uFF08\u5DF2\u901A\u8FC7 CF \u9A8C\u8BC1\uFF09\uFF0C\u6309 Ctrl+A \u5168\u9009\u590D\u5236\u7C98\u8D34\u5230\u4E0B\u65B9\uFF0C\u5373\u53EF 100% \u6210\u529F\u5BFC\u5165\uFF01 </div></div><div${_scopeId}><label class="block font-medium text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u7C98\u8D34 JSON \u6216 RSS XML \u6570\u636E </label>`);
              _push2(ssrRenderComponent(_component_UTextarea, {
                modelValue: syncForm.value.rawPayload,
                "onUpdate:modelValue": ($event) => syncForm.value.rawPayload = $event,
                placeholder: "\u5728\u6D4F\u89C8\u5668\u6253\u5F00 https://linux.do/t/{ID}.json \u540E\uFF0C\u6309 Ctrl+A \u5168\u9009\u5E76\u590D\u5236\u7C98\u8D34\u5230\u8FD9\u91CC...",
                rows: 4,
                size: "sm",
                class: "w-full font-mono text-xs"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`<div${_scopeId}><label class="block font-medium text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u5BFC\u5165\u540E\u521D\u59CB\u72B6\u6001 </label><div class="flex items-center gap-4 mt-1.5"${_scopeId}><label class="inline-flex items-center gap-1.5 cursor-pointer"${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(syncForm.value.status, "approved")) ? " checked" : ""} value="approved" class="text-blue-600"${_scopeId}><span${_scopeId}>\u76F4\u63A5\u901A\u8FC7\u516C\u5F00 (approved)</span></label><label class="inline-flex items-center gap-1.5 cursor-pointer"${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(syncForm.value.status, "pending")) ? " checked" : ""} value="pending" class="text-blue-600"${_scopeId}><span${_scopeId}>\u5F85\u4EBA\u5DE5\u5BA1\u6838 (pending)</span></label></div></div><div class="flex items-center gap-2 pt-1 border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCheckbox, {
              modelValue: syncForm.value.autoSync,
              "onUpdate:modelValue": ($event) => syncForm.value.autoSync = $event,
              label: "\u52A0\u5165\u5B9A\u65F6\u81EA\u52A8\u540C\u6B65\u961F\u5217\uFF08\u6301\u4E45\u5316\u7ED1\u5B9A\u5E76\u81EA\u52A8\u589E\u91CF\u6293\u53D6\u65B0\u56DE\u590D\uFF09"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center justify-end gap-2 pt-3 border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "sm",
              onClick: ($event) => isSyncModalOpen.value = false
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
              loading: isSyncing.value,
              onClick: executeSync
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(syncMode.value === "paste" ? "\u7ACB\u5373\u89E3\u6790\u5E76\u5BFC\u5165" : "\u7ACB\u5373\u540C\u6B65")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(syncMode.value === "paste" ? "\u7ACB\u5373\u89E3\u6790\u5E76\u5BFC\u5165" : "\u7ACB\u5373\u540C\u6B65"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-5 space-y-4" }, [
                createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:arrows-clockwise",
                      class: "w-5 h-5 text-blue-600 dark:text-blue-400"
                    }),
                    createVNode("h3", { class: "text-base font-bold text-gray-900 dark:text-white" }, "\u540C\u6B65\u5916\u90E8\u8BA8\u8BBA\u4E0E\u8BC4\u8BBA")
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    size: "xs",
                    onClick: ($event) => isSyncModalOpen.value = false
                  }, null, 8, ["onClick"])
                ]),
                createVNode("div", { class: "flex items-center gap-1.5 p-1 bg-gray-100 dark:bg-gray-800/80 rounded-lg" }, [
                  createVNode("button", {
                    type: "button",
                    class: ["flex-1 py-1 px-3 text-xs font-medium rounded-md transition-all text-center flex items-center justify-center gap-1", syncMode.value === "network" ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"],
                    onClick: ($event) => syncMode.value = "network"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:globe",
                      class: "w-3.5 h-3.5"
                    }),
                    createVNode("span", null, "\u8054\u7F51\u81EA\u52A8\u62C9\u53D6")
                  ], 10, ["onClick"]),
                  createVNode("button", {
                    type: "button",
                    class: ["flex-1 py-1 px-3 text-xs font-medium rounded-md transition-all text-center flex items-center justify-center gap-1", syncMode.value === "paste" ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"],
                    onClick: ($event) => syncMode.value = "paste"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:clipboard-text",
                      class: "w-3.5 h-3.5"
                    }),
                    createVNode("span", null, "\u6570\u636E\u76F4\u8D34\u5BFC\u5165 (\u514D CF \u76FE)")
                  ], 10, ["onClick"])
                ]),
                createVNode("div", { class: "space-y-3 text-xs" }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "block font-medium text-gray-700 dark:text-gray-300 mb-1" }, " \u5916\u90E8\u6765\u6E90 "),
                    createVNode(_component_USelect, {
                      modelValue: syncForm.value.source,
                      "onUpdate:modelValue": ($event) => syncForm.value.source = $event,
                      items: [
                        { label: "V2EX \u793E\u533A\u8BA8\u8BBA", value: "v2ex" },
                        { label: "LINUX DO \u793E\u533A\u8BA8\u8BBA", value: "linuxdo" }
                      ],
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                    createVNode("div", null, [
                      createVNode("label", { class: "block font-medium text-gray-700 dark:text-gray-300 mb-1" }, " \u76EE\u6807\u7C7B\u578B "),
                      createVNode(_component_USelect, {
                        modelValue: syncForm.value.targetType,
                        "onUpdate:modelValue": ($event) => syncForm.value.targetType = $event,
                        items: [
                          { label: "\u6587\u7AE0 (post)", value: "post" },
                          { label: "\u6A21\u578B (model)", value: "model" }
                        ],
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block font-medium text-gray-700 dark:text-gray-300 mb-1" }, " \u76EE\u6807 Slug / ID "),
                      createVNode(_component_UInput, {
                        modelValue: syncForm.value.targetId,
                        "onUpdate:modelValue": ($event) => syncForm.value.targetId = $event,
                        placeholder: "\u5982: my-cool-project \u6216 40",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  syncMode.value === "network" ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("label", { class: "block font-medium text-gray-700 dark:text-gray-300 mb-1" }, " \u5916\u90E8\u8BDD\u9898\u94FE\u63A5\u6216 ID "),
                    createVNode(_component_UInput, {
                      modelValue: syncForm.value.topicIdOrUrl,
                      "onUpdate:modelValue": ($event) => syncForm.value.topicIdOrUrl = $event,
                      placeholder: syncForm.value.source === "linuxdo" ? "\u4F8B\u5982: https://linux.do/t/topic-title/123456 \u6216 123456" : "\u4F8B\u5982: https://www.v2ex.com/t/1088888 \u6216 1088888",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                    createVNode("p", { class: "text-[11px] text-gray-400 mt-1" }, " \u7CFB\u7EDF\u5C06\u81EA\u52A8\u5168\u91CF\u62C9\u53D6\u6240\u6709\u697C\u5C42\uFF0C\u6839\u636E\u5916\u90E8\u8BC4\u8BBA ID \u5E42\u7B49\u53BB\u91CD\uFF0C\u5DF2\u5B58\u5728\u7684\u4E0D\u4F1A\u91CD\u590D\u5BFC\u5165\u3002 ")
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "space-y-2"
                  }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("label", { class: "block font-medium text-gray-700 dark:text-gray-300" }, " \u5916\u90E8\u8BDD\u9898\u94FE\u63A5\u6216 ID (\u7528\u4E8E\u7ED1\u5B9A\u8FFD\u8E2A) "),
                      syncForm.value.source === "linuxdo" ? (openBlock(), createBlock(_component_UButton, {
                        key: 0,
                        variant: "subtle",
                        color: "warning",
                        size: "xs",
                        icon: "ph:arrow-square-out",
                        class: "h-6 text-[10px]",
                        onClick: openJsonInBrowser
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 JSON ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    createVNode(_component_UInput, {
                      modelValue: syncForm.value.topicIdOrUrl,
                      "onUpdate:modelValue": ($event) => syncForm.value.topicIdOrUrl = $event,
                      placeholder: "\u4F8B\u5982: 2961421 \u6216 https://linux.do/t/topic/2961421",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "text-[11px] text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-lg border border-amber-200/50 dark:border-amber-800/40 space-y-1" }, [
                      createVNode("div", { class: "font-semibold flex items-center gap-1" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:shield-check",
                          class: "w-3.5 h-3.5"
                        }),
                        createVNode("span", null, "\u4E3A\u4EC0\u4E48\u63A8\u8350\u6570\u636E\u76F4\u8D34\uFF1F")
                      ]),
                      createVNode("div", { class: "text-gray-600 dark:text-gray-300" }, " LINUX DO \u90E8\u7F72\u4E86 Cloudflare \u76FE\uFF0C\u670D\u52A1\u7AEF\u76F4\u63A5\u53D1\u7F51\u7EDC\u8BF7\u6C42\u6781\u6613\u88AB\u963B\u65AD\u3002\u70B9\u51FB\u53F3\u4E0A\u89D2\u6309\u94AE\u5728\u5DF2\u767B\u5F55\u7684\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u8BE5\u8D34\u7684 JSON\uFF08\u5DF2\u901A\u8FC7 CF \u9A8C\u8BC1\uFF09\uFF0C\u6309 Ctrl+A \u5168\u9009\u590D\u5236\u7C98\u8D34\u5230\u4E0B\u65B9\uFF0C\u5373\u53EF 100% \u6210\u529F\u5BFC\u5165\uFF01 ")
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block font-medium text-gray-700 dark:text-gray-300 mb-1" }, " \u7C98\u8D34 JSON \u6216 RSS XML \u6570\u636E "),
                      createVNode(_component_UTextarea, {
                        modelValue: syncForm.value.rawPayload,
                        "onUpdate:modelValue": ($event) => syncForm.value.rawPayload = $event,
                        placeholder: "\u5728\u6D4F\u89C8\u5668\u6253\u5F00 https://linux.do/t/{ID}.json \u540E\uFF0C\u6309 Ctrl+A \u5168\u9009\u5E76\u590D\u5236\u7C98\u8D34\u5230\u8FD9\u91CC...",
                        rows: 4,
                        size: "sm",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])),
                  createVNode("div", null, [
                    createVNode("label", { class: "block font-medium text-gray-700 dark:text-gray-300 mb-1" }, " \u5BFC\u5165\u540E\u521D\u59CB\u72B6\u6001 "),
                    createVNode("div", { class: "flex items-center gap-4 mt-1.5" }, [
                      createVNode("label", { class: "inline-flex items-center gap-1.5 cursor-pointer" }, [
                        withDirectives(createVNode("input", {
                          type: "radio",
                          "onUpdate:modelValue": ($event) => syncForm.value.status = $event,
                          value: "approved",
                          class: "text-blue-600"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelRadio, syncForm.value.status]
                        ]),
                        createVNode("span", null, "\u76F4\u63A5\u901A\u8FC7\u516C\u5F00 (approved)")
                      ]),
                      createVNode("label", { class: "inline-flex items-center gap-1.5 cursor-pointer" }, [
                        withDirectives(createVNode("input", {
                          type: "radio",
                          "onUpdate:modelValue": ($event) => syncForm.value.status = $event,
                          value: "pending",
                          class: "text-blue-600"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelRadio, syncForm.value.status]
                        ]),
                        createVNode("span", null, "\u5F85\u4EBA\u5DE5\u5BA1\u6838 (pending)")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center gap-2 pt-1 border-t border-gray-100 dark:border-gray-800" }, [
                    createVNode(_component_UCheckbox, {
                      modelValue: syncForm.value.autoSync,
                      "onUpdate:modelValue": ($event) => syncForm.value.autoSync = $event,
                      label: "\u52A0\u5165\u5B9A\u65F6\u81EA\u52A8\u540C\u6B65\u961F\u5217\uFF08\u6301\u4E45\u5316\u7ED1\u5B9A\u5E76\u81EA\u52A8\u589E\u91CF\u6293\u53D6\u65B0\u56DE\u590D\uFF09"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-end gap-2 pt-3 border-t border-gray-100 dark:border-gray-800" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    size: "sm",
                    onClick: ($event) => isSyncModalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u53D6\u6D88")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    size: "sm",
                    loading: isSyncing.value,
                    onClick: executeSync
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(syncMode.value === "paste" ? "\u7ACB\u5373\u89E3\u6790\u5E76\u5BFC\u5165" : "\u7ACB\u5373\u540C\u6B65"), 1)
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
      _push(ssrRenderComponent(_component_UModal, {
        open: isSyncSourcesModalOpen.value,
        "onUpdate:open": ($event) => isSyncSourcesModalOpen.value = $event,
        ui: { width: "sm:max-w-4xl" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-5 space-y-4"${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:link-simple-horizontal",
              class: "w-5 h-5 text-purple-600 dark:text-purple-400"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><h3 class="text-base font-bold text-gray-900 dark:text-white"${_scopeId}>\u5916\u90E8\u8BC4\u8BBA\u540C\u6B65\u6E90\u7BA1\u7406</h3><p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5"${_scopeId}> \u5DF2\u6301\u4E45\u5316\u7ED1\u5B9A\u5916\u90E8\u8BA8\u8BBA\u5E16\u7684\u6587\u7AE0\u5217\u8868\uFF0C\u652F\u6301\u540E\u53F0\u5B9A\u65F6\u81EA\u52A8\u589E\u91CF\u6293\u53D6\u4E0E\u624B\u52A8\u5237\u65B0 </p></div></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              variant: "subtle",
              size: "xs",
              icon: "ph:arrows-clockwise",
              loading: syncingAllSources.value,
              onClick: syncAllSources
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5168\u90E8\u7ACB\u5373\u540C\u6B65 `);
                } else {
                  return [
                    createTextVNode(" \u5168\u90E8\u7ACB\u5373\u540C\u6B65 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x",
              size: "xs",
              onClick: ($event) => isSyncSourcesModalOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="max-h-[60vh] overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}>`);
            if (loadingSyncSources.value) {
              _push2(`<div class="py-8 text-center text-xs text-gray-400 animate-pulse"${_scopeId}> \u6B63\u5728\u52A0\u8F7D\u5DF2\u7ED1\u5B9A\u7684\u540C\u6B65\u6E90... </div>`);
            } else if (syncSources.value.length === 0) {
              _push2(`<div class="py-12 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:link-break",
                class: "w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto mb-2"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>\u6682\u672A\u7ED1\u5B9A\u4EFB\u4F55\u5916\u90E8\u8BA8\u8BBA\u5E16</p><p class="text-xs text-gray-400 mt-1"${_scopeId}> \u70B9\u51FB\u300C\u540C\u6B65\u5916\u90E8\u8BC4\u8BBA\u300D\u5BFC\u5165\u5916\u90E8\u8BC4\u8BBA\u65F6\uFF0C\u52FE\u9009\u300C\u52A0\u5165\u5B9A\u65F6\u81EA\u52A8\u540C\u6B65\u961F\u5217\u300D\u5373\u53EF\u81EA\u52A8\u5728\u6B64\u5EFA\u7ACB\u8FFD\u8E2A\u8BB0\u5F55 </p></div>`);
            } else {
              _push2(`<!--[-->`);
              ssrRenderList(syncSources.value, (source) => {
                _push2(`<div class="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3"${_scopeId}><div class="min-w-0 flex-1"${_scopeId}><div class="flex flex-wrap items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: source.source === "linuxdo" ? "warning" : "info",
                  variant: "subtle",
                  size: "xs",
                  class: "font-mono text-[10px]"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(source.source === "linuxdo" ? "LINUX DO" : "V2EX")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(source.source === "linuxdo" ? "LINUX DO" : "V2EX"), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: getTargetLink(source.targetType, source.targetId),
                  target: "_blank",
                  class: "text-xs font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 inline-flex items-center gap-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(source.targetType)}: ${ssrInterpolate(source.targetId)}</span>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:arrow-square-out",
                        class: "w-3 h-3 text-gray-400"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(source.targetType) + ": " + toDisplayString(source.targetId), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-square-out",
                          class: "w-3 h-3 text-gray-400"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                if (source.externalUrl) {
                  _push2(`<a${ssrRenderAttr("href", source.externalUrl)} target="_blank" rel="noopener nofollow" class="text-[11px] font-mono text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"${_scopeId}><span${_scopeId}>\u539F\u5E16 #${ssrInterpolate(source.externalId)}</span>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-square-out",
                    class: "w-3 h-3"
                  }, null, _parent2, _scopeId));
                  _push2(`</a>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: source.lastSyncStatus === "success" ? "success" : source.lastSyncStatus === "failed" ? "error" : "neutral",
                  variant: "subtle",
                  size: "xs",
                  class: "text-[10px]"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(source.lastSyncStatus === "success" ? "\u540C\u6B65\u6B63\u5E38" : source.lastSyncStatus === "failed" ? "\u540C\u6B65\u5931\u8D25" : "\u5F85\u540C\u6B65")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(source.lastSyncStatus === "success" ? "\u540C\u6B65\u6B63\u5E38" : source.lastSyncStatus === "failed" ? "\u540C\u6B65\u5931\u8D25" : "\u5F85\u540C\u6B65"), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="flex flex-wrap items-center gap-3 mt-1.5 text-[11px] text-gray-400 font-mono"${_scopeId}><span${_scopeId}>\u7D2F\u8BA1\u540C\u6B65: ${ssrInterpolate(source.totalSynced || 0)} \u6761</span><span${_scopeId}>\u6700\u8FD1\u66F4\u65B0: ${ssrInterpolate(formatDateTime(source.lastSyncedAt))}</span>`);
                if (source.lastError) {
                  _push2(`<span class="text-red-500 truncate max-w-xs"${ssrRenderAttr("title", source.lastError)}${_scopeId}> \u62A5\u9519: ${ssrInterpolate(source.lastError)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><div class="flex items-center gap-3 shrink-0"${_scopeId}><div class="flex items-center gap-1.5 text-xs text-gray-500"${_scopeId}><span${_scopeId}>\u81EA\u52A8\u8F6E\u8BE2</span>`);
                _push2(ssrRenderComponent(_component_USwitch, {
                  "model-value": source.autoSync,
                  "onUpdate:modelValue": (val) => toggleSourceAutoSync(source.id, val)
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "subtle",
                  size: "xs",
                  icon: "ph:arrow-clockwise",
                  loading: runningSourceId.value === source.id,
                  onClick: ($event) => runSingleSource(source.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u7ACB\u5373\u540C\u6B65 `);
                    } else {
                      return [
                        createTextVNode(" \u7ACB\u5373\u540C\u6B65 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "error",
                  variant: "ghost",
                  size: "xs",
                  icon: "ph:trash",
                  onClick: ($event) => confirmDeleteSource(source.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u89E3\u7ED1 `);
                    } else {
                      return [
                        createTextVNode(" \u89E3\u7ED1 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]-->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-5 space-y-4" }, [
                createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:link-simple-horizontal",
                      class: "w-5 h-5 text-purple-600 dark:text-purple-400"
                    }),
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-base font-bold text-gray-900 dark:text-white" }, "\u5916\u90E8\u8BC4\u8BBA\u540C\u6B65\u6E90\u7BA1\u7406"),
                      createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5" }, " \u5DF2\u6301\u4E45\u5316\u7ED1\u5B9A\u5916\u90E8\u8BA8\u8BBA\u5E16\u7684\u6587\u7AE0\u5217\u8868\uFF0C\u652F\u6301\u540E\u53F0\u5B9A\u65F6\u81EA\u52A8\u589E\u91CF\u6293\u53D6\u4E0E\u624B\u52A8\u5237\u65B0 ")
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UButton, {
                      color: "primary",
                      variant: "subtle",
                      size: "xs",
                      icon: "ph:arrows-clockwise",
                      loading: syncingAllSources.value,
                      onClick: syncAllSources
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5168\u90E8\u7ACB\u5373\u540C\u6B65 ")
                      ]),
                      _: 1
                    }, 8, ["loading"]),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "ph:x",
                      size: "xs",
                      onClick: ($event) => isSyncSourcesModalOpen.value = false
                    }, null, 8, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "max-h-[60vh] overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800" }, [
                  loadingSyncSources.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "py-8 text-center text-xs text-gray-400 animate-pulse"
                  }, " \u6B63\u5728\u52A0\u8F7D\u5DF2\u7ED1\u5B9A\u7684\u540C\u6B65\u6E90... ")) : syncSources.value.length === 0 ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "py-12 text-center"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:link-break",
                      class: "w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto mb-2"
                    }),
                    createVNode("p", { class: "text-sm font-medium text-gray-900 dark:text-white" }, "\u6682\u672A\u7ED1\u5B9A\u4EFB\u4F55\u5916\u90E8\u8BA8\u8BBA\u5E16"),
                    createVNode("p", { class: "text-xs text-gray-400 mt-1" }, " \u70B9\u51FB\u300C\u540C\u6B65\u5916\u90E8\u8BC4\u8BBA\u300D\u5BFC\u5165\u5916\u90E8\u8BC4\u8BBA\u65F6\uFF0C\u52FE\u9009\u300C\u52A0\u5165\u5B9A\u65F6\u81EA\u52A8\u540C\u6B65\u961F\u5217\u300D\u5373\u53EF\u81EA\u52A8\u5728\u6B64\u5EFA\u7ACB\u8FFD\u8E2A\u8BB0\u5F55 ")
                  ])) : (openBlock(true), createBlock(Fragment, { key: 2 }, renderList(syncSources.value, (source) => {
                    return openBlock(), createBlock("div", {
                      key: source.id,
                      class: "py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    }, [
                      createVNode("div", { class: "min-w-0 flex-1" }, [
                        createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                          createVNode(_component_UBadge, {
                            color: source.source === "linuxdo" ? "warning" : "info",
                            variant: "subtle",
                            size: "xs",
                            class: "font-mono text-[10px]"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(source.source === "linuxdo" ? "LINUX DO" : "V2EX"), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"]),
                          createVNode(_component_NuxtLink, {
                            to: getTargetLink(source.targetType, source.targetId),
                            target: "_blank",
                            class: "text-xs font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 inline-flex items-center gap-1"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, toDisplayString(source.targetType) + ": " + toDisplayString(source.targetId), 1),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-square-out",
                                class: "w-3 h-3 text-gray-400"
                              })
                            ]),
                            _: 2
                          }, 1032, ["to"]),
                          source.externalUrl ? (openBlock(), createBlock("a", {
                            key: 0,
                            href: source.externalUrl,
                            target: "_blank",
                            rel: "noopener nofollow",
                            class: "text-[11px] font-mono text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
                          }, [
                            createVNode("span", null, "\u539F\u5E16 #" + toDisplayString(source.externalId), 1),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-square-out",
                              class: "w-3 h-3"
                            })
                          ], 8, ["href"])) : createCommentVNode("", true),
                          createVNode(_component_UBadge, {
                            color: source.lastSyncStatus === "success" ? "success" : source.lastSyncStatus === "failed" ? "error" : "neutral",
                            variant: "subtle",
                            size: "xs",
                            class: "text-[10px]"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(source.lastSyncStatus === "success" ? "\u540C\u6B65\u6B63\u5E38" : source.lastSyncStatus === "failed" ? "\u540C\u6B65\u5931\u8D25" : "\u5F85\u540C\u6B65"), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        createVNode("div", { class: "flex flex-wrap items-center gap-3 mt-1.5 text-[11px] text-gray-400 font-mono" }, [
                          createVNode("span", null, "\u7D2F\u8BA1\u540C\u6B65: " + toDisplayString(source.totalSynced || 0) + " \u6761", 1),
                          createVNode("span", null, "\u6700\u8FD1\u66F4\u65B0: " + toDisplayString(formatDateTime(source.lastSyncedAt)), 1),
                          source.lastError ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-red-500 truncate max-w-xs",
                            title: source.lastError
                          }, " \u62A5\u9519: " + toDisplayString(source.lastError), 9, ["title"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center gap-3 shrink-0" }, [
                        createVNode("div", { class: "flex items-center gap-1.5 text-xs text-gray-500" }, [
                          createVNode("span", null, "\u81EA\u52A8\u8F6E\u8BE2"),
                          createVNode(_component_USwitch, {
                            "model-value": source.autoSync,
                            "onUpdate:modelValue": (val) => toggleSourceAutoSync(source.id, val)
                          }, null, 8, ["model-value", "onUpdate:modelValue"])
                        ]),
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "subtle",
                          size: "xs",
                          icon: "ph:arrow-clockwise",
                          loading: runningSourceId.value === source.id,
                          onClick: ($event) => runSingleSource(source.id)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u7ACB\u5373\u540C\u6B65 ")
                          ]),
                          _: 1
                        }, 8, ["loading", "onClick"]),
                        createVNode(_component_UButton, {
                          color: "error",
                          variant: "ghost",
                          size: "xs",
                          icon: "ph:trash",
                          onClick: ($event) => confirmDeleteSource(source.id)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u89E3\u7ED1 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]);
                  }), 128))
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
