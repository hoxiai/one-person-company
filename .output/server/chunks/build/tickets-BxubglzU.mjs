import { n as _sfc_main$x, k as _sfc_main$B, b as _sfc_main$G, d as _sfc_main$k, o as _sfc_main$j, p as _sfc_main$s, O as _sfc_main$g } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, unref, openBlock, createBlock, createVNode, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useImageProxy } from './useImageProxy-CJnFnQot.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TicketAttachmentUpload",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: () => [] },
    adminMode: { type: Boolean, default: false },
    maxCount: { default: 5 }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    ref(null);
    const uploading = ref(false);
    const previewModalOpen = ref(false);
    const currentPreviewUrl = ref("");
    const attachments = computed({
      get: () => props.modelValue || [],
      set: (val) => emit("update:modelValue", val)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_UModal = _sfc_main$s;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-2" }, _attrs))}>`);
      if (attachments.value.length > 0) {
        _push(`<div class="flex flex-wrap gap-2.5"><!--[-->`);
        ssrRenderList(attachments.value, (item, idx) => {
          _push(`<div class="relative group w-18 h-18 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/40 overflow-hidden shadow-xs"><img${ssrRenderAttr("src", item.url)}${ssrRenderAttr("alt", item.name || "\u9644\u4EF6\u622A\u56FE")} class="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"><button type="button" class="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500" title="\u79FB\u9664\u9644\u4EF6">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:x-bold",
            class: "w-3 h-3"
          }, null, _parent));
          _push(`</button></div>`);
        });
        _push(`<!--]-->`);
        if (uploading.value) {
          _push(`<div class="w-18 h-18 rounded-xl border border-dashed border-[#6d4cff]/40 bg-[#6d4cff]/5 flex flex-col items-center justify-center text-[#6d4cff] text-xs animate-pulse">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:spinner",
            class: "w-5 h-5 animate-spin"
          }, null, _parent));
          _push(`<span class="text-[10px] mt-1">\u4E0A\u4F20\u4E2D...</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (attachments.value.length < __props.maxCount) {
        _push(`<div class="flex items-center gap-2"><input type="file" accept="image/png,image/jpeg,image/jpg,image/webp" multiple class="hidden"><button type="button"${ssrIncludeBooleanAttr(uploading.value) ? " disabled" : ""} class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-dashed border-gray-300 dark:border-white/15 hover:border-[#6d4cff] hover:text-[#6d4cff] text-gray-500 dark:text-gray-400 text-xs transition-colors bg-gray-50/50 dark:bg-white/[0.02]">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:image-square-bold",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`<span>\u6DFB\u52A0\u62A5\u9519\u622A\u56FE / \u51ED\u8BC1</span><span class="text-[10px] text-gray-400">(${ssrInterpolate(attachments.value.length)}/${ssrInterpolate(__props.maxCount)})</span></button><span class="text-[11px] text-gray-400 hidden sm:inline"> \u{1F4A1} \u63D0\u793A\uFF1A\u622A\u56FE\u540E\u53EF\u76F4\u63A5\u5728\u6B64\u7C98\u8D34 (Ctrl+V) </span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UModal, {
        open: previewModalOpen.value,
        "onUpdate:open": ($event) => previewModalOpen.value = $event,
        ui: { content: "sm:max-w-3xl bg-black/90 p-2 overflow-hidden" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex items-center justify-center min-h-[50vh] p-2"${_scopeId}><button type="button" class="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:x-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
            if (currentPreviewUrl.value) {
              _push2(`<img${ssrRenderAttr("src", currentPreviewUrl.value)} alt="\u653E\u5927\u9884\u89C8" class="max-w-full max-h-[80vh] rounded-lg object-contain"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative flex items-center justify-center min-h-[50vh] p-2" }, [
                createVNode("button", {
                  type: "button",
                  class: "absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center",
                  onClick: ($event) => previewModalOpen.value = false
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:x-bold",
                    class: "w-4 h-4"
                  })
                ], 8, ["onClick"]),
                currentPreviewUrl.value ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: currentPreviewUrl.value,
                  alt: "\u653E\u5927\u9884\u89C8",
                  class: "max-w-full max-h-[80vh] rounded-lg object-contain"
                }, null, 8, ["src"])) : createCommentVNode("", true)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/qingpu/components/TicketAttachmentUpload.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ALL = "all";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tickets",
  __ssrInlineRender: true,
  setup(__props) {
    const { buildImageProxyUrl } = useImageProxy();
    const loading = ref(false);
    const ticketsList = ref([]);
    const activeStatus = ref("all");
    const keyword = ref("");
    const selectedCategory = ref(ALL);
    const selectedPriority = ref(ALL);
    const page = ref(1);
    const pageSize = ref(15);
    const totalItems = ref(0);
    const totalPages = ref(1);
    const summary = ref({
      all: 0,
      open: 0,
      in_progress: 0,
      auto_resolved: 0,
      resolved: 0,
      closed: 0
    });
    const statusTabs = computed(() => [
      { key: "all", label: "\u5168\u90E8\u5DE5\u5355", count: summary.value.all, icon: "ph:ticket", bgClass: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300" },
      { key: "open", label: "\u5F85\u5904\u7406", count: summary.value.open, icon: "ph:hourglass", bgClass: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400" },
      { key: "in_progress", label: "\u5904\u7406\u4E2D", count: summary.value.in_progress, icon: "ph:arrows-clockwise", bgClass: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400" },
      { key: "auto_resolved", label: "\u5DF2\u81EA\u52A8\u89E3\u51B3", count: summary.value.auto_resolved, icon: "ph:robot", bgClass: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400" },
      { key: "resolved", label: "\u5DF2\u5B8C\u7ED3", count: summary.value.resolved + summary.value.closed, icon: "ph:check-circle", bgClass: "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400" }
    ]);
    const categoryOptions = [
      { label: "\u5168\u90E8\u4E1A\u52A1\u5206\u7C7B", value: ALL },
      { label: "\u8DE8\u5883\u4E0A\u54C1 (Listing)", value: "listing" },
      { label: "\u89C6\u89C9\u521B\u4F5C (Studio)", value: "studio" },
      { label: "\u63D2\u4EF6/\u5BA2\u6237\u7AEF (Extension)", value: "extension" },
      { label: "\u5145\u503C\u4E0E\u8D26\u5355 (Billing)", value: "billing" },
      { label: "\u8D26\u53F7\u6743\u76CA (Account)", value: "account" },
      { label: "\u5176\u4ED6\u54A8\u8BE2 (Other)", value: "other" }
    ];
    const priorityOptions = [
      { label: "\u5168\u90E8\u4F18\u5148\u7EA7", value: ALL },
      { label: "\u7D27\u6025 (Urgent)", value: "urgent" },
      { label: "\u9AD8 (High)", value: "high" },
      { label: "\u666E\u901A (Normal)", value: "normal" },
      { label: "\u4F4E (Low)", value: "low" }
    ];
    const priorityUpdateOptions = [
      { label: "\u7D27\u6025 (Urgent)", value: "urgent" },
      { label: "\u9AD8 (High)", value: "high" },
      { label: "\u666E\u901A (Normal)", value: "normal" },
      { label: "\u4F4E (Low)", value: "low" }
    ];
    const statusUpdateOptions = [
      { label: "\u5F85\u5904\u7406", value: "open" },
      { label: "\u4FDD\u6301\u5904\u7406\u4E2D", value: "in_progress" },
      { label: "\u8BBE\u4E3A\u5DF2\u89E3\u51B3", value: "resolved" },
      { label: "\u76F4\u63A5\u5173\u95ED", value: "closed" }
    ];
    const detailModalOpen = ref(false);
    const detailLoading = ref(false);
    const detailTicket = ref(null);
    const detailMessages = ref([]);
    const detailUserFinance = ref(null);
    const detailRecentOrders = ref([]);
    const showRawContext = ref(false);
    const replyContent = ref("");
    const adminReplyAttachments = ref([]);
    const statusAfterReply = ref("resolved");
    const replySubmitting = ref(false);
    const quickStatusChange = ref("");
    const quickPriorityChange = ref("");
    const previewModalOpen = ref(false);
    const currentPreviewUrl = ref("");
    const previewImage = (url) => {
      currentPreviewUrl.value = url;
      previewModalOpen.value = true;
    };
    const compensationModalOpen = ref(false);
    const compensationAmount = ref(20);
    const compensationType = ref("grant");
    const compensationReason = ref("\u4EFB\u52A1\u5F02\u5E38/\u5145\u503C\u7591\u95EE\u6838\u5B9E\u8865\u507F");
    const compensationSubmitting = ref(false);
    const loadTickets = async (p = page.value) => {
      var _a, _b;
      loading.value = true;
      page.value = p;
      try {
        const params = {
          page: page.value,
          pageSize: pageSize.value
        };
        if (activeStatus.value && activeStatus.value !== "all") {
          params.status = activeStatus.value;
        }
        if (keyword.value.trim()) {
          params.keyword = keyword.value.trim();
        }
        if (selectedCategory.value && selectedCategory.value !== ALL) {
          params.category = selectedCategory.value;
        }
        if (selectedPriority.value && selectedPriority.value !== ALL) {
          params.priority = selectedPriority.value;
        }
        const res = await $fetch("/api/admin/tickets", { params });
        if ((res == null ? void 0 : res.code) === 200) {
          ticketsList.value = res.data || [];
          totalItems.value = ((_a = res.pagination) == null ? void 0 : _a.total) || 0;
          totalPages.value = ((_b = res.pagination) == null ? void 0 : _b.totalPages) || 1;
          if (res.summary) {
            summary.value = res.summary;
          }
        }
      } catch (e) {
        console.error("Failed to load tickets", e);
      } finally {
        loading.value = false;
      }
    };
    const openTicketDetail = async (id) => {
      var _a, _b, _c, _d, _e, _f;
      detailModalOpen.value = true;
      detailLoading.value = true;
      showRawContext.value = false;
      replyContent.value = "";
      adminReplyAttachments.value = [];
      try {
        const res = await $fetch(`/api/admin/tickets/${id}`);
        if ((res == null ? void 0 : res.code) === 200) {
          detailTicket.value = (_a = res.data) == null ? void 0 : _a.ticket;
          detailMessages.value = ((_b = res.data) == null ? void 0 : _b.messages) || [];
          detailUserFinance.value = ((_c = res.data) == null ? void 0 : _c.userFinance) || null;
          detailRecentOrders.value = ((_d = res.data) == null ? void 0 : _d.recentOrders) || [];
          quickStatusChange.value = ((_e = detailTicket.value) == null ? void 0 : _e.status) || "open";
          quickPriorityChange.value = ((_f = detailTicket.value) == null ? void 0 : _f.priority) || "normal";
        }
      } catch (e) {
        console.error("Failed to load ticket detail", e);
      } finally {
        detailLoading.value = false;
      }
    };
    const submitCompensation = async () => {
      if (!detailTicket.value || compensationAmount.value <= 0) return;
      compensationSubmitting.value = true;
      try {
        const res = await $fetch(`/api/admin/tickets/${detailTicket.value.id}/compensation`, {
          method: "POST",
          body: {
            amount: Number(compensationAmount.value),
            balanceType: compensationType.value,
            reason: compensationReason.value.trim()
          }
        });
        if ((res == null ? void 0 : res.code) === 200) {
          compensationModalOpen.value = false;
          await openTicketDetail(detailTicket.value.id);
          void loadTickets();
        }
      } catch (e) {
        console.error("Failed to submit compensation", e);
      } finally {
        compensationSubmitting.value = false;
      }
    };
    const submitReply = async () => {
      if (!replyContent.value.trim() || !detailTicket.value) return;
      replySubmitting.value = true;
      try {
        const res = await $fetch(`/api/admin/tickets/${detailTicket.value.id}/reply`, {
          method: "POST",
          body: {
            content: replyContent.value.trim(),
            status: statusAfterReply.value,
            attachments: adminReplyAttachments.value.length > 0 ? adminReplyAttachments.value : null
          }
        });
        if ((res == null ? void 0 : res.code) === 200) {
          replyContent.value = "";
          adminReplyAttachments.value = [];
          await openTicketDetail(detailTicket.value.id);
          void loadTickets();
        }
      } catch (e) {
        console.error("Failed to submit reply", e);
      } finally {
        replySubmitting.value = false;
      }
    };
    const updateStatus = async () => {
      if (!detailTicket.value || !quickStatusChange.value) return;
      try {
        await $fetch(`/api/admin/tickets/${detailTicket.value.id}/status`, {
          method: "PUT",
          body: { status: quickStatusChange.value }
        });
        await openTicketDetail(detailTicket.value.id);
        void loadTickets();
      } catch (e) {
        console.error("Failed to update status", e);
      }
    };
    const updatePriority = async () => {
      if (!detailTicket.value || !quickPriorityChange.value) return;
      try {
        await $fetch(`/api/admin/tickets/${detailTicket.value.id}/status`, {
          method: "PUT",
          body: { priority: quickPriorityChange.value }
        });
        await openTicketDetail(detailTicket.value.id);
        void loadTickets();
      } catch (e) {
        console.error("Failed to update priority", e);
      }
    };
    const statusBadgeColor = (status) => {
      switch (status) {
        case "open":
          return "warning";
        case "in_progress":
          return "info";
        case "auto_resolved":
          return "success";
        case "resolved":
          return "neutral";
        case "closed":
          return "neutral";
        default:
          return "neutral";
      }
    };
    const statusLabel = (status) => {
      switch (status) {
        case "open":
          return "\u5F85\u5904\u7406";
        case "in_progress":
          return "\u5904\u7406\u4E2D";
        case "auto_resolved":
          return "\u5DF2\u81EA\u52A8\u89E3\u51B3";
        case "resolved":
          return "\u5DF2\u89E3\u51B3";
        case "closed":
          return "\u5DF2\u5173\u95ED";
        default:
          return status;
      }
    };
    const categoryBadgeColor = (cat) => {
      switch (cat) {
        case "listing":
          return "primary";
        case "studio":
          return "secondary";
        case "billing":
          return "warning";
        case "extension":
          return "info";
        default:
          return "neutral";
      }
    };
    const categoryLabel = (cat) => {
      const map = {
        listing: "\u4E0A\u54C1\u6392\u969C",
        studio: "\u89C6\u89C9\u521B\u4F5C",
        extension: "\u63D2\u4EF6\u5BA2\u6237\u7AEF",
        billing: "\u5145\u503C\u8D26\u5355",
        account: "\u8D26\u53F7\u6743\u76CA",
        other: "\u7EFC\u5408\u95EE\u9898"
      };
      return map[cat] || cat;
    };
    const priorityBadgeColor = (p) => {
      switch (p) {
        case "urgent":
          return "error";
        case "high":
          return "warning";
        case "normal":
          return "info";
        case "low":
          return "neutral";
        default:
          return "neutral";
      }
    };
    const priorityLabel = (p) => {
      const map = {
        urgent: "\u7D27\u6025",
        high: "\u9AD8\u4F18",
        normal: "\u666E\u901A",
        low: "\u4F4E"
      };
      return map[p] || p;
    };
    const replierLabel = (r) => {
      switch (r) {
        case "user":
          return "\u7528\u6237\u63D0\u95EE";
        case "admin":
          return "\u5BA2\u670D\u5DF2\u56DE\u590D";
        case "bot":
          return "AI \u667A\u80FD\u7B54\u590D";
        case "system":
          return "\u7CFB\u7EDF\u72B6\u6001\u53D8\u66F4";
        default:
          return r;
      }
    };
    const messageBubbleClass = (senderType) => {
      switch (senderType) {
        case "bot":
          return "bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40";
        case "admin":
          return "bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-900/40";
        case "system":
          return "bg-gray-100/70 dark:bg-white/[0.04] text-xs text-gray-500";
        default:
          return "bg-white dark:bg-[#18181b] border border-gray-200/80 dark:border-white/5";
      }
    };
    const senderAvatarClass = (senderType) => {
      switch (senderType) {
        case "bot":
          return "bg-emerald-500 text-white";
        case "admin":
          return "bg-purple-600 text-white";
        case "system":
          return "bg-gray-400 text-white";
        default:
          return "bg-blue-500 text-white";
      }
    };
    const senderIcon = (senderType) => {
      switch (senderType) {
        case "bot":
          return "ph:robot-bold";
        case "admin":
          return "ph:shield-check-bold";
        case "system":
          return "ph:info-bold";
        default:
          return "ph:user-bold";
      }
    };
    const senderLabel = (senderType) => {
      switch (senderType) {
        case "bot":
          return "\u8F7B\u94FAAI \u667A\u80FD\u52A9\u624B";
        case "admin":
          return "\u5BA2\u670D\u4E13\u5458";
        case "system":
          return "\u7CFB\u7EDF\u8BB0\u5F55";
        default:
          return "\u7528\u6237";
      }
    };
    const formatTime = (time) => {
      if (!time) return "-";
      const d = new Date(time);
      return d.toLocaleString("zh-CN", { hour12: false });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBadge = _sfc_main$x;
      const _component_UButton = _sfc_main$B;
      const _component_UIcon = _sfc_main$G;
      const _component_UInput = _sfc_main$k;
      const _component_USelect = _sfc_main$j;
      const _component_UModal = _sfc_main$s;
      const _component_UTextarea = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col space-y-4 pb-12" }, _attrs))}><div class="flex flex-col sm:flex-row justify-between sm:items-center gap-3 shrink-0"><div><div class="flex items-center gap-2"><h1 class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight"> \u5DE5\u5355\u652F\u6301\u4E2D\u5FC3 </h1>`);
      _push(ssrRenderComponent(_component_UBadge, {
        color: "primary",
        variant: "subtle",
        size: "xs",
        class: "font-mono font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(summary.value.all)}`);
          } else {
            return [
              createTextVNode(toDisplayString(summary.value.all), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-gray-500 dark:text-gray-400 text-xs mt-0.5"> \u7BA1\u7406\u7528\u6237\u63D0\u4EA4\u7684\u6280\u672F\u6392\u969C\u4E0E\u4E1A\u52A1\u5DE5\u5355\uFF0C\u67E5\u770B\u65E0\u635F\u73B0\u573A\u5FEB\u7167\u5E76\u8FDB\u884C\u5F02\u6B65\u56DE\u590D </p></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrow-clockwise",
        size: "sm",
        loading: loading.value,
        class: "rounded-xl",
        onClick: ($event) => loadTickets()
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-2 md:grid-cols-5 gap-2.5 shrink-0"><!--[-->`);
      ssrRenderList(statusTabs.value, (st) => {
        _push(`<div class="${ssrRenderClass([{ "ring-2 ring-purple-500 border-purple-500": activeStatus.value === st.key }, "bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl px-3 py-2.5 shadow-2xs flex items-center justify-between cursor-pointer hover:border-purple-500/50 hover:bg-purple-50/20 dark:hover:bg-purple-950/10 transition-all"])}"><div class="flex items-center gap-2.5 min-w-0"><div class="${ssrRenderClass([st.bgClass, "w-8 h-8 rounded-lg flex items-center justify-center shrink-0"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: st.icon,
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</div><div class="truncate"><div class="text-xs font-medium text-gray-500 dark:text-gray-400">${ssrInterpolate(st.label)}</div></div></div><span class="text-base font-bold text-gray-900 dark:text-white font-mono ml-2 shrink-0">${ssrInterpolate(st.count)}</span></div>`);
      });
      _push(`<!--]--></div><div class="bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl p-3 flex flex-wrap gap-3 items-center justify-between"><div class="flex flex-wrap items-center gap-2.5 flex-1 min-w-[280px]">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: keyword.value,
        "onUpdate:modelValue": ($event) => keyword.value = $event,
        placeholder: "\u641C\u7D22\u5DE5\u5355\u53F7\u3001\u6807\u9898\u3001\u7528\u6237\u90AE\u7BB1...",
        icon: "ph:magnifying-glass",
        size: "sm",
        class: "w-64",
        onKeydown: ($event) => loadTickets(1)
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: selectedCategory.value,
        "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
        items: categoryOptions,
        size: "sm",
        class: "w-36",
        onChange: ($event) => loadTickets(1)
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: selectedPriority.value,
        "onUpdate:modelValue": ($event) => selectedPriority.value = $event,
        items: priorityOptions,
        size: "sm",
        class: "w-32",
        onChange: ($event) => loadTickets(1)
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        size: "sm",
        color: "neutral",
        variant: "soft",
        onClick: ($event) => loadTickets(1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u7B5B\u9009 `);
          } else {
            return [
              createTextVNode(" \u7B5B\u9009 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-2xl overflow-hidden shadow-2xs">`);
      if (loading.value) {
        _push(`<div class="p-12 text-center text-gray-400">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:spinner",
          class: "w-6 h-6 animate-spin mx-auto mb-2"
        }, null, _parent));
        _push(` \u52A0\u8F7D\u5DE5\u5355\u5217\u8868\u4E2D... </div>`);
      } else if (ticketsList.value.length === 0) {
        _push(`<div class="p-16 text-center text-gray-400">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:ticket",
          class: "w-12 h-12 mx-auto mb-3 opacity-40"
        }, null, _parent));
        _push(`<p class="text-sm font-medium">\u6682\u65E0\u7B26\u5408\u6761\u4EF6\u7684\u5DE5\u5355</p></div>`);
      } else {
        _push(`<div class="divide-y divide-gray-100 dark:divide-gray-800/60"><!--[-->`);
        ssrRenderList(ticketsList.value, (item) => {
          _push(`<div class="p-4 hover:bg-gray-50/80 dark:hover:bg-white/[0.02] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3 cursor-pointer"><div class="min-w-0 flex-1 space-y-1.5"><div class="flex items-center gap-2 flex-wrap"><span class="font-mono text-xs font-semibold text-purple-600 dark:text-purple-400">${ssrInterpolate(item.ticketNo)}</span>`);
          _push(ssrRenderComponent(_component_UBadge, {
            size: "xs",
            color: categoryBadgeColor(item.category),
            variant: "subtle"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(categoryLabel(item.category))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(categoryLabel(item.category)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_UBadge, {
            size: "xs",
            color: priorityBadgeColor(item.priority),
            variant: "outline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(priorityLabel(item.priority))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(priorityLabel(item.priority)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_UBadge, {
            size: "xs",
            color: statusBadgeColor(item.status),
            variant: "solid"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(statusLabel(item.status))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(statusLabel(item.status)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (item.context) {
            _push(`<span class="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded font-medium">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:code-bold",
              class: "w-3 h-3"
            }, null, _parent));
            _push(` \u542B\u8BCA\u65AD\u5FEB\u7167 </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="text-sm font-medium text-gray-900 dark:text-white truncate">${ssrInterpolate(item.title)}</div><div class="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400"><span class="inline-flex items-center gap-1">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:user",
            class: "w-3.5 h-3.5"
          }, null, _parent));
          _push(` ${ssrInterpolate(item.userEmail || item.userNickname || `\u7528\u6237 #${item.userId}`)}</span><span class="inline-flex items-center gap-1">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:clock",
            class: "w-3.5 h-3.5"
          }, null, _parent));
          _push(` \u6700\u540E\u66F4\u65B0: ${ssrInterpolate(formatTime(item.lastRepliedAt || item.createdAt))} (${ssrInterpolate(replierLabel(item.lastRepliedBy))}) </span></div></div><div class="flex items-center gap-2 shrink-0">`);
          _push(ssrRenderComponent(_component_UButton, {
            size: "xs",
            color: "primary",
            variant: "soft",
            icon: "ph:chat-teardrop-text",
            onClick: ($event) => openTicketDetail(item.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u5904\u7406\u5DE5\u5355 `);
              } else {
                return [
                  createTextVNode(" \u5904\u7406\u5DE5\u5355 ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      if (totalPages.value > 1) {
        _push(`<div class="p-3 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between text-xs text-gray-500"><div>\u5171 ${ssrInterpolate(totalItems.value)} \u6761\u5DE5\u5355</div><div class="flex items-center gap-1">`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          color: "neutral",
          variant: "ghost",
          disabled: page.value <= 1,
          onClick: ($event) => loadTickets(page.value - 1)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u4E0A\u4E00\u9875 `);
            } else {
              return [
                createTextVNode(" \u4E0A\u4E00\u9875 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="px-2 font-mono font-medium">${ssrInterpolate(page.value)} / ${ssrInterpolate(totalPages.value)}</span>`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          color: "neutral",
          variant: "ghost",
          disabled: page.value >= totalPages.value,
          onClick: ($event) => loadTickets(page.value + 1)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u4E0B\u4E00\u9875 `);
            } else {
              return [
                createTextVNode(" \u4E0B\u4E00\u9875 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: detailModalOpen.value,
        "onUpdate:open": ($event) => detailModalOpen.value = $event,
        ui: { content: "sm:max-w-4xl bg-white dark:bg-[#1a1a1e] rounded-3xl border border-gray-100 dark:border-white/10 shadow-2xl overflow-hidden" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (detailLoading.value) {
              _push2(`<div class="p-16 text-center text-gray-400"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:spinner",
                class: "w-7 h-7 animate-spin mx-auto mb-2 text-[#6d4cff]"
              }, null, _parent2, _scopeId));
              _push2(` \u6B63\u5728\u8F7D\u5165\u5DE5\u5355\u8BE6\u60C5... </div>`);
            } else if (detailTicket.value) {
              _push2(`<div class="p-6 sm:p-7 space-y-5 max-h-[85vh] overflow-y-auto"${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-white/5"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-xs font-mono px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 font-semibold"${_scopeId}>${ssrInterpolate(detailTicket.value.ticketNo)}</span>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                size: "xs",
                color: statusBadgeColor(detailTicket.value.status)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(statusLabel(detailTicket.value.status))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(statusLabel(detailTicket.value.status)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:x",
                size: "xs",
                class: "rounded-xl text-gray-400 hover:text-gray-600",
                onClick: ($event) => detailModalOpen.value = false
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="bg-gray-50 dark:bg-white/[0.03] p-4 rounded-2xl border border-gray-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-3"${_scopeId}><div class="space-y-1"${_scopeId}><div class="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>${ssrInterpolate(detailTicket.value.title)} `);
              _push2(ssrRenderComponent(_component_UBadge, {
                size: "xs",
                color: statusBadgeColor(detailTicket.value.status)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(statusLabel(detailTicket.value.status))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(statusLabel(detailTicket.value.status)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-3"${_scopeId}><span${_scopeId}>\u7528\u6237\uFF1A${ssrInterpolate(detailTicket.value.userEmail || `ID: ${detailTicket.value.userId}`)}</span><span${_scopeId}>\u5206\u7C7B\uFF1A${ssrInterpolate(categoryLabel(detailTicket.value.category))}</span><span${_scopeId}>\u521B\u5EFA\u65F6\u95F4\uFF1A${ssrInterpolate(formatTime(detailTicket.value.createdAt))}</span></div></div><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_USelect, {
                modelValue: quickStatusChange.value,
                "onUpdate:modelValue": ($event) => quickStatusChange.value = $event,
                items: statusUpdateOptions,
                size: "xs",
                class: "w-32",
                onChange: updateStatus
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_USelect, {
                modelValue: quickPriorityChange.value,
                "onUpdate:modelValue": ($event) => quickPriorityChange.value = $event,
                items: priorityUpdateOptions,
                size: "xs",
                class: "w-28",
                onChange: updatePriority
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
              if (detailUserFinance.value) {
                _push2(`<div class="rounded-xl border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 p-3.5 space-y-3"${_scopeId}><div class="flex items-center justify-between text-xs font-semibold text-blue-900 dark:text-blue-300"${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:wallet-duotone",
                  class: "w-4 h-4 text-blue-600"
                }, null, _parent2, _scopeId));
                _push2(` \u63D0\u5355\u7528\u6237\u8D26\u6237\u8D44\u4EA7\u6982\u51B5 (User Balance &amp; Orders) </div>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "primary",
                  variant: "soft",
                  icon: "ph:plus-circle-bold",
                  class: "rounded-lg",
                  onClick: ($event) => compensationModalOpen.value = true
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u5FEB\u6377\u53D1\u653E\u8D22\u52A1\u8865\u507F / \u989D\u5EA6 `);
                    } else {
                      return [
                        createTextVNode(" \u5FEB\u6377\u53D1\u653E\u8D22\u52A1\u8865\u507F / \u989D\u5EA6 ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs"${_scopeId}><div class="bg-white/80 dark:bg-black/20 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/40"${_scopeId}><span class="text-gray-400 block text-[11px]"${_scopeId}>\u73B0\u91D1\u4F59\u989D</span><span class="font-mono font-bold text-gray-900 dark:text-white text-sm"${_scopeId}>\xA5${ssrInterpolate(detailUserFinance.value.cashBalance)}</span></div><div class="bg-white/80 dark:bg-black/20 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/40"${_scopeId}><span class="text-gray-400 block text-[11px]"${_scopeId}>\u7B97\u529B/\u8D60\u9001\u70B9\u6570</span><span class="font-mono font-bold text-[#6d4cff] dark:text-[#8ea3ff] text-sm"${_scopeId}>${ssrInterpolate(detailUserFinance.value.grantBalance)} \u70B9</span></div><div class="bg-white/80 dark:bg-black/20 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/40"${_scopeId}><span class="text-gray-400 block text-[11px]"${_scopeId}>\u8BA2\u9605\u989D\u5EA6</span><span class="font-mono font-bold text-gray-900 dark:text-white text-sm"${_scopeId}>${ssrInterpolate(detailUserFinance.value.subBalance)}</span></div><div class="bg-white/80 dark:bg-black/20 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/40"${_scopeId}><span class="text-gray-400 block text-[11px]"${_scopeId}>\u4F1A\u5458\u7B49\u7EA7</span><span class="font-mono font-medium text-amber-600 dark:text-amber-400"${_scopeId}>VIP ${ssrInterpolate(detailUserFinance.value.tierLevel)}</span></div></div>`);
                if (detailRecentOrders.value && detailRecentOrders.value.length > 0) {
                  _push2(`<div class="pt-1 border-t border-blue-100/60 dark:border-blue-900/30 text-[11px] text-gray-600 dark:text-gray-400 flex flex-wrap items-center gap-3"${_scopeId}><span class="font-medium text-gray-700 dark:text-gray-300"${_scopeId}>\u6700\u8FD1\u8BA2\u5355\uFF1A</span><!--[-->`);
                  ssrRenderList(detailRecentOrders.value, (ord) => {
                    _push2(`<div class="inline-flex items-center gap-1.5 font-mono"${_scopeId}><span${_scopeId}>${ssrInterpolate(ord.id.slice(0, 10))}... (${ssrInterpolate(ord.amount)} ${ssrInterpolate(ord.currency)})</span>`);
                    _push2(ssrRenderComponent(_component_UBadge, {
                      size: "2xs",
                      color: ord.payStatus === "paid" ? "success" : "warning",
                      variant: "subtle"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(ord.payStatus)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(ord.payStatus), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`</div>`);
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (detailTicket.value.context) {
                _push2(`<div class="rounded-xl border border-emerald-200/80 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 p-3.5 space-y-2"${_scopeId}><div class="flex items-center justify-between text-xs font-semibold text-emerald-800 dark:text-emerald-300"${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:cpu-duotone",
                  class: "w-4 h-4 text-emerald-600"
                }, null, _parent2, _scopeId));
                _push2(` \u73B0\u573A\u73AF\u5883\u4E0E\u9519\u8BEF\u8BCA\u65AD\u5FEB\u7167 (Context Snapshot) </div><button type="button" class="text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer text-[11px]"${_scopeId}>${ssrInterpolate(showRawContext.value ? "\u6536\u8D77\u5B8C\u6574\u539F\u59CB JSON" : "\u67E5\u770B\u5B8C\u6574\u539F\u59CB JSON")}</button></div><div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-700 dark:text-gray-300"${_scopeId}>`);
                if (detailTicket.value.context.channel) {
                  _push2(`<div class="bg-white/70 dark:bg-black/20 p-2 rounded border border-emerald-100 dark:border-emerald-900/40"${_scopeId}><span class="text-gray-400 block text-[11px]"${_scopeId}>\u76EE\u6807\u6E20\u9053</span><span class="font-mono font-medium"${_scopeId}>${ssrInterpolate(detailTicket.value.context.channel)}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (detailTicket.value.context.productId) {
                  _push2(`<div class="bg-white/70 dark:bg-black/20 p-2 rounded border border-emerald-100 dark:border-emerald-900/40"${_scopeId}><span class="text-gray-400 block text-[11px]"${_scopeId}>\u5546\u54C1 ID</span><span class="font-mono font-medium truncate block"${_scopeId}>${ssrInterpolate(detailTicket.value.context.productId)}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (detailTicket.value.context.offerId) {
                  _push2(`<div class="bg-white/70 dark:bg-black/20 p-2 rounded border border-emerald-100 dark:border-emerald-900/40"${_scopeId}><span class="text-gray-400 block text-[11px]"${_scopeId}>SKU \u8D27\u53F7 (Offer ID)</span><span class="font-mono font-medium truncate block"${_scopeId}>${ssrInterpolate(detailTicket.value.context.offerId)}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (detailTicket.value.context.taskId) {
                  _push2(`<div class="bg-white/70 dark:bg-black/20 p-2 rounded border border-emerald-100 dark:border-emerald-900/40"${_scopeId}><span class="text-gray-400 block text-[11px]"${_scopeId}>\u4E91\u7AEF\u4EFB\u52A1 ID</span><span class="font-mono font-medium truncate block"${_scopeId}>${ssrInterpolate(detailTicket.value.context.taskId)}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (detailTicket.value.context.lastError) {
                  _push2(`<div class="col-span-2 sm:col-span-3 bg-red-50/80 dark:bg-red-950/30 p-2 rounded border border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-300"${_scopeId}><span class="text-red-500 block text-[11px] font-medium"${_scopeId}>\u6355\u83B7\u7684\u5F02\u5E38\u4FE1\u606F (Last Error)</span><span class="font-mono text-xs break-all"${_scopeId}>${ssrInterpolate(detailTicket.value.context.lastError)}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
                if (showRawContext.value) {
                  _push2(`<div class="mt-2"${_scopeId}><pre class="bg-gray-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto max-h-52"${_scopeId}>${ssrInterpolate(JSON.stringify(detailTicket.value.context, null, 2))}</pre></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="space-y-3 pt-2"${_scopeId}><h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400"${_scopeId}>\u4EA4\u6D41\u8BB0\u5F55\u4E0E\u6D88\u606F\u6D41</h4><div class="space-y-3"${_scopeId}><!--[-->`);
              ssrRenderList(detailMessages.value, (msg) => {
                _push2(`<div class="${ssrRenderClass([messageBubbleClass(msg.senderType), "flex gap-3 p-3.5 rounded-xl text-sm"])}"${_scopeId}><div class="shrink-0 pt-0.5"${_scopeId}><div class="${ssrRenderClass([senderAvatarClass(msg.senderType), "w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: senderIcon(msg.senderType),
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`</div></div><div class="min-w-0 flex-1 space-y-1"${_scopeId}><div class="flex items-center justify-between text-xs"${_scopeId}><span class="font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(msg.senderName || senderLabel(msg.senderType))}</span><span class="text-gray-400 text-[11px]"${_scopeId}>${ssrInterpolate(formatTime(msg.createdAt))}</span></div><div class="text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed"${_scopeId}>${ssrInterpolate(msg.content)}</div>`);
                if (msg.attachments && msg.attachments.length > 0) {
                  _push2(`<div class="flex flex-wrap gap-2 pt-2"${_scopeId}><!--[-->`);
                  ssrRenderList(msg.attachments, (att, aIdx) => {
                    _push2(`<div class="w-16 h-16 rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden cursor-pointer hover:scale-105 transition-transform bg-white/40 dark:bg-black/20"${_scopeId}><img${ssrRenderAttr("src", unref(buildImageProxyUrl)(att.url))}${ssrRenderAttr("alt", att.name || "\u9644\u4EF6")} class="w-full h-full object-cover"${_scopeId}></div>`);
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div></div><div class="border-t border-gray-200/80 dark:border-gray-800/80 pt-4 space-y-3"${_scopeId}><div class="flex items-center justify-between text-xs text-gray-500"${_scopeId}><span${_scopeId}>\u5FEB\u6377\u56DE\u590D\u6A21\u677F\uFF1A</span><div class="flex items-center gap-1.5"${_scopeId}><button type="button" class="px-2 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 rounded text-[11px] cursor-pointer"${_scopeId}> \u5DF2\u4FEE\u590D\u91CD\u8BD5 </button><button type="button" class="px-2 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 rounded text-[11px] cursor-pointer"${_scopeId}> \u5DF2\u8865\u53D1\u989D\u5EA6 </button></div></div>`);
              _push2(ssrRenderComponent(_component_UTextarea, {
                modelValue: replyContent.value,
                "onUpdate:modelValue": ($event) => replyContent.value = $event,
                placeholder: "\u8F93\u5165\u56DE\u590D\u5185\u5BB9\uFF08\u652F\u6301 Markdown \u6362\u884C\uFF09...",
                rows: 3,
                class: "w-full"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$1, {
                modelValue: adminReplyAttachments.value,
                "onUpdate:modelValue": ($event) => adminReplyAttachments.value = $event,
                "admin-mode": true
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex items-center justify-between pt-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-xs text-gray-400"${_scopeId}>\u56DE\u590D\u540E\u5DE5\u5355\u6D41\u8F6C\u4E3A\uFF1A</span>`);
              _push2(ssrRenderComponent(_component_USelect, {
                modelValue: statusAfterReply.value,
                "onUpdate:modelValue": ($event) => statusAfterReply.value = $event,
                items: statusUpdateOptions,
                size: "xs",
                class: "w-28"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "sm",
                onClick: ($event) => detailModalOpen.value = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u5173\u95ED `);
                  } else {
                    return [
                      createTextVNode(" \u5173\u95ED ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                size: "sm",
                loading: replySubmitting.value,
                disabled: !replyContent.value.trim(),
                icon: "ph:paper-plane-tilt-bold",
                onClick: submitReply
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u53D1\u9001\u56DE\u590D `);
                  } else {
                    return [
                      createTextVNode(" \u53D1\u9001\u56DE\u590D ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              detailLoading.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "p-16 text-center text-gray-400"
              }, [
                createVNode(_component_UIcon, {
                  name: "ph:spinner",
                  class: "w-7 h-7 animate-spin mx-auto mb-2 text-[#6d4cff]"
                }),
                createTextVNode(" \u6B63\u5728\u8F7D\u5165\u5DE5\u5355\u8BE6\u60C5... ")
              ])) : detailTicket.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "p-6 sm:p-7 space-y-5 max-h-[85vh] overflow-y-auto"
              }, [
                createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-gray-100 dark:border-white/5" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", { class: "text-xs font-mono px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 font-semibold" }, toDisplayString(detailTicket.value.ticketNo), 1),
                    createVNode(_component_UBadge, {
                      size: "xs",
                      color: statusBadgeColor(detailTicket.value.status)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(statusLabel(detailTicket.value.status)), 1)
                      ]),
                      _: 1
                    }, 8, ["color"])
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    size: "xs",
                    class: "rounded-xl text-gray-400 hover:text-gray-600",
                    onClick: ($event) => detailModalOpen.value = false
                  }, null, 8, ["onClick"])
                ]),
                createVNode("div", { class: "bg-gray-50 dark:bg-white/[0.03] p-4 rounded-2xl border border-gray-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-3" }, [
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("div", { class: "text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                      createTextVNode(toDisplayString(detailTicket.value.title) + " ", 1),
                      createVNode(_component_UBadge, {
                        size: "xs",
                        color: statusBadgeColor(detailTicket.value.status)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(statusLabel(detailTicket.value.status)), 1)
                        ]),
                        _: 1
                      }, 8, ["color"])
                    ]),
                    createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400 flex items-center gap-3" }, [
                      createVNode("span", null, "\u7528\u6237\uFF1A" + toDisplayString(detailTicket.value.userEmail || `ID: ${detailTicket.value.userId}`), 1),
                      createVNode("span", null, "\u5206\u7C7B\uFF1A" + toDisplayString(categoryLabel(detailTicket.value.category)), 1),
                      createVNode("span", null, "\u521B\u5EFA\u65F6\u95F4\uFF1A" + toDisplayString(formatTime(detailTicket.value.createdAt)), 1)
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_USelect, {
                      modelValue: quickStatusChange.value,
                      "onUpdate:modelValue": ($event) => quickStatusChange.value = $event,
                      items: statusUpdateOptions,
                      size: "xs",
                      class: "w-32",
                      onChange: updateStatus
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_USelect, {
                      modelValue: quickPriorityChange.value,
                      "onUpdate:modelValue": ($event) => quickPriorityChange.value = $event,
                      items: priorityUpdateOptions,
                      size: "xs",
                      class: "w-28",
                      onChange: updatePriority
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                detailUserFinance.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "rounded-xl border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 p-3.5 space-y-3"
                }, [
                  createVNode("div", { class: "flex items-center justify-between text-xs font-semibold text-blue-900 dark:text-blue-300" }, [
                    createVNode("div", { class: "flex items-center gap-1.5" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:wallet-duotone",
                        class: "w-4 h-4 text-blue-600"
                      }),
                      createTextVNode(" \u63D0\u5355\u7528\u6237\u8D26\u6237\u8D44\u4EA7\u6982\u51B5 (User Balance & Orders) ")
                    ]),
                    createVNode(_component_UButton, {
                      size: "xs",
                      color: "primary",
                      variant: "soft",
                      icon: "ph:plus-circle-bold",
                      class: "rounded-lg",
                      onClick: ($event) => compensationModalOpen.value = true
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5FEB\u6377\u53D1\u653E\u8D22\u52A1\u8865\u507F / \u989D\u5EA6 ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs" }, [
                    createVNode("div", { class: "bg-white/80 dark:bg-black/20 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/40" }, [
                      createVNode("span", { class: "text-gray-400 block text-[11px]" }, "\u73B0\u91D1\u4F59\u989D"),
                      createVNode("span", { class: "font-mono font-bold text-gray-900 dark:text-white text-sm" }, "\xA5" + toDisplayString(detailUserFinance.value.cashBalance), 1)
                    ]),
                    createVNode("div", { class: "bg-white/80 dark:bg-black/20 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/40" }, [
                      createVNode("span", { class: "text-gray-400 block text-[11px]" }, "\u7B97\u529B/\u8D60\u9001\u70B9\u6570"),
                      createVNode("span", { class: "font-mono font-bold text-[#6d4cff] dark:text-[#8ea3ff] text-sm" }, toDisplayString(detailUserFinance.value.grantBalance) + " \u70B9", 1)
                    ]),
                    createVNode("div", { class: "bg-white/80 dark:bg-black/20 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/40" }, [
                      createVNode("span", { class: "text-gray-400 block text-[11px]" }, "\u8BA2\u9605\u989D\u5EA6"),
                      createVNode("span", { class: "font-mono font-bold text-gray-900 dark:text-white text-sm" }, toDisplayString(detailUserFinance.value.subBalance), 1)
                    ]),
                    createVNode("div", { class: "bg-white/80 dark:bg-black/20 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/40" }, [
                      createVNode("span", { class: "text-gray-400 block text-[11px]" }, "\u4F1A\u5458\u7B49\u7EA7"),
                      createVNode("span", { class: "font-mono font-medium text-amber-600 dark:text-amber-400" }, "VIP " + toDisplayString(detailUserFinance.value.tierLevel), 1)
                    ])
                  ]),
                  detailRecentOrders.value && detailRecentOrders.value.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "pt-1 border-t border-blue-100/60 dark:border-blue-900/30 text-[11px] text-gray-600 dark:text-gray-400 flex flex-wrap items-center gap-3"
                  }, [
                    createVNode("span", { class: "font-medium text-gray-700 dark:text-gray-300" }, "\u6700\u8FD1\u8BA2\u5355\uFF1A"),
                    (openBlock(true), createBlock(Fragment, null, renderList(detailRecentOrders.value, (ord) => {
                      return openBlock(), createBlock("div", {
                        key: ord.id,
                        class: "inline-flex items-center gap-1.5 font-mono"
                      }, [
                        createVNode("span", null, toDisplayString(ord.id.slice(0, 10)) + "... (" + toDisplayString(ord.amount) + " " + toDisplayString(ord.currency) + ")", 1),
                        createVNode(_component_UBadge, {
                          size: "2xs",
                          color: ord.payStatus === "paid" ? "success" : "warning",
                          variant: "subtle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(ord.payStatus), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                detailTicket.value.context ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "rounded-xl border border-emerald-200/80 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 p-3.5 space-y-2"
                }, [
                  createVNode("div", { class: "flex items-center justify-between text-xs font-semibold text-emerald-800 dark:text-emerald-300" }, [
                    createVNode("div", { class: "flex items-center gap-1.5" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:cpu-duotone",
                        class: "w-4 h-4 text-emerald-600"
                      }),
                      createTextVNode(" \u73B0\u573A\u73AF\u5883\u4E0E\u9519\u8BEF\u8BCA\u65AD\u5FEB\u7167 (Context Snapshot) ")
                    ]),
                    createVNode("button", {
                      type: "button",
                      class: "text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer text-[11px]",
                      onClick: ($event) => showRawContext.value = !showRawContext.value
                    }, toDisplayString(showRawContext.value ? "\u6536\u8D77\u5B8C\u6574\u539F\u59CB JSON" : "\u67E5\u770B\u5B8C\u6574\u539F\u59CB JSON"), 9, ["onClick"])
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-700 dark:text-gray-300" }, [
                    detailTicket.value.context.channel ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "bg-white/70 dark:bg-black/20 p-2 rounded border border-emerald-100 dark:border-emerald-900/40"
                    }, [
                      createVNode("span", { class: "text-gray-400 block text-[11px]" }, "\u76EE\u6807\u6E20\u9053"),
                      createVNode("span", { class: "font-mono font-medium" }, toDisplayString(detailTicket.value.context.channel), 1)
                    ])) : createCommentVNode("", true),
                    detailTicket.value.context.productId ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "bg-white/70 dark:bg-black/20 p-2 rounded border border-emerald-100 dark:border-emerald-900/40"
                    }, [
                      createVNode("span", { class: "text-gray-400 block text-[11px]" }, "\u5546\u54C1 ID"),
                      createVNode("span", { class: "font-mono font-medium truncate block" }, toDisplayString(detailTicket.value.context.productId), 1)
                    ])) : createCommentVNode("", true),
                    detailTicket.value.context.offerId ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "bg-white/70 dark:bg-black/20 p-2 rounded border border-emerald-100 dark:border-emerald-900/40"
                    }, [
                      createVNode("span", { class: "text-gray-400 block text-[11px]" }, "SKU \u8D27\u53F7 (Offer ID)"),
                      createVNode("span", { class: "font-mono font-medium truncate block" }, toDisplayString(detailTicket.value.context.offerId), 1)
                    ])) : createCommentVNode("", true),
                    detailTicket.value.context.taskId ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "bg-white/70 dark:bg-black/20 p-2 rounded border border-emerald-100 dark:border-emerald-900/40"
                    }, [
                      createVNode("span", { class: "text-gray-400 block text-[11px]" }, "\u4E91\u7AEF\u4EFB\u52A1 ID"),
                      createVNode("span", { class: "font-mono font-medium truncate block" }, toDisplayString(detailTicket.value.context.taskId), 1)
                    ])) : createCommentVNode("", true),
                    detailTicket.value.context.lastError ? (openBlock(), createBlock("div", {
                      key: 4,
                      class: "col-span-2 sm:col-span-3 bg-red-50/80 dark:bg-red-950/30 p-2 rounded border border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-300"
                    }, [
                      createVNode("span", { class: "text-red-500 block text-[11px] font-medium" }, "\u6355\u83B7\u7684\u5F02\u5E38\u4FE1\u606F (Last Error)"),
                      createVNode("span", { class: "font-mono text-xs break-all" }, toDisplayString(detailTicket.value.context.lastError), 1)
                    ])) : createCommentVNode("", true)
                  ]),
                  showRawContext.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-2"
                  }, [
                    createVNode("pre", { class: "bg-gray-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto max-h-52" }, toDisplayString(JSON.stringify(detailTicket.value.context, null, 2)), 1)
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "space-y-3 pt-2" }, [
                  createVNode("h4", { class: "text-xs font-semibold uppercase tracking-wider text-gray-400" }, "\u4EA4\u6D41\u8BB0\u5F55\u4E0E\u6D88\u606F\u6D41"),
                  createVNode("div", { class: "space-y-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(detailMessages.value, (msg) => {
                      return openBlock(), createBlock("div", {
                        key: msg.id,
                        class: ["flex gap-3 p-3.5 rounded-xl text-sm", messageBubbleClass(msg.senderType)]
                      }, [
                        createVNode("div", { class: "shrink-0 pt-0.5" }, [
                          createVNode("div", {
                            class: ["w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold", senderAvatarClass(msg.senderType)]
                          }, [
                            createVNode(_component_UIcon, {
                              name: senderIcon(msg.senderType),
                              class: "w-4 h-4"
                            }, null, 8, ["name"])
                          ], 2)
                        ]),
                        createVNode("div", { class: "min-w-0 flex-1 space-y-1" }, [
                          createVNode("div", { class: "flex items-center justify-between text-xs" }, [
                            createVNode("span", { class: "font-semibold text-gray-900 dark:text-white" }, toDisplayString(msg.senderName || senderLabel(msg.senderType)), 1),
                            createVNode("span", { class: "text-gray-400 text-[11px]" }, toDisplayString(formatTime(msg.createdAt)), 1)
                          ]),
                          createVNode("div", { class: "text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed" }, toDisplayString(msg.content), 1),
                          msg.attachments && msg.attachments.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex flex-wrap gap-2 pt-2"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(msg.attachments, (att, aIdx) => {
                              return openBlock(), createBlock("div", {
                                key: att.url || aIdx,
                                class: "w-16 h-16 rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden cursor-pointer hover:scale-105 transition-transform bg-white/40 dark:bg-black/20",
                                onClick: ($event) => previewImage(att.url)
                              }, [
                                createVNode("img", {
                                  src: unref(buildImageProxyUrl)(att.url),
                                  alt: att.name || "\u9644\u4EF6",
                                  class: "w-full h-full object-cover"
                                }, null, 8, ["src", "alt"])
                              ], 8, ["onClick"]);
                            }), 128))
                          ])) : createCommentVNode("", true)
                        ])
                      ], 2);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "border-t border-gray-200/80 dark:border-gray-800/80 pt-4 space-y-3" }, [
                  createVNode("div", { class: "flex items-center justify-between text-xs text-gray-500" }, [
                    createVNode("span", null, "\u5FEB\u6377\u56DE\u590D\u6A21\u677F\uFF1A"),
                    createVNode("div", { class: "flex items-center gap-1.5" }, [
                      createVNode("button", {
                        type: "button",
                        class: "px-2 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 rounded text-[11px] cursor-pointer",
                        onClick: ($event) => replyContent.value = "\u60A8\u597D\uFF0C\u6211\u4EEC\u5DF2\u6839\u636E\u60A8\u4E0A\u62A5\u7684\u73B0\u573A\u5FEB\u7167\u5BF9\u8BE5\u95EE\u9898\u8FDB\u884C\u4E86\u4FEE\u590D\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5\u64CD\u4F5C\u3002\u5982\u6709\u5F02\u5E38\u6B22\u8FCE\u7EE7\u7EED\u53CD\u9988\u3002"
                      }, " \u5DF2\u4FEE\u590D\u91CD\u8BD5 ", 8, ["onClick"]),
                      createVNode("button", {
                        type: "button",
                        class: "px-2 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 rounded text-[11px] cursor-pointer",
                        onClick: ($event) => replyContent.value = "\u60A8\u597D\uFF0C\u5DF2\u6838\u5B9E\u8BE5\u5F02\u5E38\u4E3A\u6E32\u67D3\u8282\u70B9\u7F51\u7EDC\u6296\u52A8\u6240\u81F4\uFF0C\u7CFB\u7EDF\u5DF2\u4E3A\u60A8\u81EA\u52A8\u8865\u53D1\u5BF9\u5E94\u7684\u7B97\u529B\u989D\u5EA6\uFF0C\u8BF7\u5728\u94B1\u5305\u8D26\u5355\u4E2D\u67E5\u9A8C\u3002"
                      }, " \u5DF2\u8865\u53D1\u989D\u5EA6 ", 8, ["onClick"])
                    ])
                  ]),
                  createVNode(_component_UTextarea, {
                    modelValue: replyContent.value,
                    "onUpdate:modelValue": ($event) => replyContent.value = $event,
                    placeholder: "\u8F93\u5165\u56DE\u590D\u5185\u5BB9\uFF08\u652F\u6301 Markdown \u6362\u884C\uFF09...",
                    rows: 3,
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$1, {
                    modelValue: adminReplyAttachments.value,
                    "onUpdate:modelValue": ($event) => adminReplyAttachments.value = $event,
                    "admin-mode": true
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "flex items-center justify-between pt-2" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", { class: "text-xs text-gray-400" }, "\u56DE\u590D\u540E\u5DE5\u5355\u6D41\u8F6C\u4E3A\uFF1A"),
                      createVNode(_component_USelect, {
                        modelValue: statusAfterReply.value,
                        "onUpdate:modelValue": ($event) => statusAfterReply.value = $event,
                        items: statusUpdateOptions,
                        size: "xs",
                        class: "w-28"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        size: "sm",
                        onClick: ($event) => detailModalOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u5173\u95ED ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "primary",
                        size: "sm",
                        loading: replySubmitting.value,
                        disabled: !replyContent.value.trim(),
                        icon: "ph:paper-plane-tilt-bold",
                        onClick: submitReply
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u53D1\u9001\u56DE\u590D ")
                        ]),
                        _: 1
                      }, 8, ["loading", "disabled"])
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: compensationModalOpen.value,
        "onUpdate:open": ($event) => compensationModalOpen.value = $event,
        ui: { content: "sm:max-w-md bg-white dark:bg-[#1a1a1e] rounded-3xl border border-gray-100 dark:border-white/10 shadow-2xl overflow-hidden" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="p-6 sm:p-7 space-y-5"${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-white/5"${_scopeId}><div class="flex items-center gap-2.5"${_scopeId}><div class="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:hand-coins-duotone",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="text-base font-bold text-gray-900 dark:text-white"${_scopeId}>\u53D1\u653E\u8D22\u52A1\u8865\u507F / \u989D\u5EA6</h3><p class="text-xs text-gray-400 mt-0.5"${_scopeId}>\u76F4\u63A5\u5165\u8D26\u5E76\u5728\u5DE5\u5355\u4E2D\u7559\u4E0B\u8D22\u52A1\u51ED\u636E</p></div></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x",
              size: "xs",
              class: "rounded-xl text-gray-400 hover:text-gray-600",
              onClick: ($event) => compensationModalOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-xs text-gray-500 bg-gray-50 dark:bg-white/[0.02] p-2.5 rounded-xl border border-gray-100 dark:border-white/5"${_scopeId}> \u4E3A\u5F53\u524D\u5DE5\u5355\u63D0\u5355\u7528\u6237\uFF08<span class="font-mono font-medium text-gray-800 dark:text-gray-200"${_scopeId}>${ssrInterpolate(((_a = detailTicket.value) == null ? void 0 : _a.userEmail) || ((_b = detailTicket.value) == null ? void 0 : _b.userId))}</span>\uFF09\u53D1\u653E\u8865\u507F\u989D\u5EA6\u3002 </div><div${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u8865\u507F\u7C7B\u578B <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: compensationType.value,
              "onUpdate:modelValue": ($event) => compensationType.value = $event,
              items: [
                { label: "\u7B97\u529B\u70B9\u6570 / \u8D60\u9001\u989D\u5EA6 (Grant)", value: "grant" },
                { label: "\u73B0\u91D1\u4F59\u989D (Cash)", value: "cash" }
              ],
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u8865\u507F\u6570\u989D <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: compensationAmount.value,
              "onUpdate:modelValue": ($event) => compensationAmount.value = $event,
              modelModifiers: { number: true },
              type: "number",
              placeholder: "\u8BF7\u8F93\u5165\u70B9\u6570\u6216\u91D1\u989D",
              class: "w-full font-mono"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u8865\u507F\u539F\u56E0 / \u5907\u6CE8 <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: compensationReason.value,
              "onUpdate:modelValue": ($event) => compensationReason.value = $event,
              placeholder: "\u4F8B\u5982\uFF1A\u4EFB\u52A1\u8D85\u65F6\u5931\u8D25\u8865\u507F / \u5145\u503C\u5EF6\u8FDF\u8865\u507F",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end gap-2 pt-3 border-t border-gray-100 dark:border-white/5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "sm",
              class: "rounded-xl",
              onClick: ($event) => compensationModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u6D88 `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u6D88 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              size: "sm",
              loading: compensationSubmitting.value,
              disabled: compensationAmount.value <= 0 || !compensationReason.value.trim(),
              class: "rounded-xl bg-[#6d4cff] hover:bg-[#5a3de6] text-white",
              onClick: submitCompensation
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u786E\u8BA4\u53D1\u653E\u8865\u507F `);
                } else {
                  return [
                    createTextVNode(" \u786E\u8BA4\u53D1\u653E\u8865\u507F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 sm:p-7 space-y-5" }, [
                createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-gray-100 dark:border-white/5" }, [
                  createVNode("div", { class: "flex items-center gap-2.5" }, [
                    createVNode("div", { class: "w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:hand-coins-duotone",
                        class: "w-4 h-4"
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-base font-bold text-gray-900 dark:text-white" }, "\u53D1\u653E\u8D22\u52A1\u8865\u507F / \u989D\u5EA6"),
                      createVNode("p", { class: "text-xs text-gray-400 mt-0.5" }, "\u76F4\u63A5\u5165\u8D26\u5E76\u5728\u5DE5\u5355\u4E2D\u7559\u4E0B\u8D22\u52A1\u51ED\u636E")
                    ])
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    size: "xs",
                    class: "rounded-xl text-gray-400 hover:text-gray-600",
                    onClick: ($event) => compensationModalOpen.value = false
                  }, null, 8, ["onClick"])
                ]),
                createVNode("div", { class: "text-xs text-gray-500 bg-gray-50 dark:bg-white/[0.02] p-2.5 rounded-xl border border-gray-100 dark:border-white/5" }, [
                  createTextVNode(" \u4E3A\u5F53\u524D\u5DE5\u5355\u63D0\u5355\u7528\u6237\uFF08"),
                  createVNode("span", { class: "font-mono font-medium text-gray-800 dark:text-gray-200" }, toDisplayString(((_c = detailTicket.value) == null ? void 0 : _c.userEmail) || ((_d = detailTicket.value) == null ? void 0 : _d.userId)), 1),
                  createTextVNode("\uFF09\u53D1\u653E\u8865\u507F\u989D\u5EA6\u3002 ")
                ]),
                createVNode("div", null, [
                  createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, [
                    createTextVNode(" \u8865\u507F\u7C7B\u578B "),
                    createVNode("span", { class: "text-red-500" }, "*")
                  ]),
                  createVNode(_component_USelect, {
                    modelValue: compensationType.value,
                    "onUpdate:modelValue": ($event) => compensationType.value = $event,
                    items: [
                      { label: "\u7B97\u529B\u70B9\u6570 / \u8D60\u9001\u989D\u5EA6 (Grant)", value: "grant" },
                      { label: "\u73B0\u91D1\u4F59\u989D (Cash)", value: "cash" }
                    ],
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", null, [
                  createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, [
                    createTextVNode(" \u8865\u507F\u6570\u989D "),
                    createVNode("span", { class: "text-red-500" }, "*")
                  ]),
                  createVNode(_component_UInput, {
                    modelValue: compensationAmount.value,
                    "onUpdate:modelValue": ($event) => compensationAmount.value = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    placeholder: "\u8BF7\u8F93\u5165\u70B9\u6570\u6216\u91D1\u989D",
                    class: "w-full font-mono"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", null, [
                  createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, [
                    createTextVNode(" \u8865\u507F\u539F\u56E0 / \u5907\u6CE8 "),
                    createVNode("span", { class: "text-red-500" }, "*")
                  ]),
                  createVNode(_component_UInput, {
                    modelValue: compensationReason.value,
                    "onUpdate:modelValue": ($event) => compensationReason.value = $event,
                    placeholder: "\u4F8B\u5982\uFF1A\u4EFB\u52A1\u8D85\u65F6\u5931\u8D25\u8865\u507F / \u5145\u503C\u5EF6\u8FDF\u8865\u507F",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "flex items-center justify-end gap-2 pt-3 border-t border-gray-100 dark:border-white/5" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    size: "sm",
                    class: "rounded-xl",
                    onClick: ($event) => compensationModalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u53D6\u6D88 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    size: "sm",
                    loading: compensationSubmitting.value,
                    disabled: compensationAmount.value <= 0 || !compensationReason.value.trim(),
                    class: "rounded-xl bg-[#6d4cff] hover:bg-[#5a3de6] text-white",
                    onClick: submitCompensation
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u786E\u8BA4\u53D1\u653E\u8865\u507F ")
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: previewModalOpen.value,
        "onUpdate:open": ($event) => previewModalOpen.value = $event,
        ui: { content: "sm:max-w-3xl bg-black/90 p-2 overflow-hidden" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex items-center justify-center min-h-[50vh] p-2"${_scopeId}><button type="button" class="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:x-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
            if (currentPreviewUrl.value) {
              _push2(`<img${ssrRenderAttr("src", unref(buildImageProxyUrl)(currentPreviewUrl.value))} alt="\u653E\u5927\u9884\u89C8" class="max-w-full max-h-[80vh] rounded-lg object-contain"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative flex items-center justify-center min-h-[50vh] p-2" }, [
                createVNode("button", {
                  type: "button",
                  class: "absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center",
                  onClick: ($event) => previewModalOpen.value = false
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:x-bold",
                    class: "w-4 h-4"
                  })
                ], 8, ["onClick"]),
                currentPreviewUrl.value ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: unref(buildImageProxyUrl)(currentPreviewUrl.value),
                  alt: "\u653E\u5927\u9884\u89C8",
                  class: "max-w-full max-h-[80vh] rounded-lg object-contain"
                }, null, 8, ["src"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/tickets.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
