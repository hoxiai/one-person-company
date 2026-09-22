import { e as useI18n, g as useToast, f as useFormatTime, y as useFetch, o as _sfc_main$j, k as _sfc_main$B, l as _sfc_main$h, n as _sfc_main$x, z as _sfc_main$n } from './server.mjs';
import { defineComponent, ref, computed, withAsyncContext, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const pageSize = 20;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "topups",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const toast = useToast();
    const { formatDateTime } = useFormatTime();
    const page = ref(1);
    const status = ref("all");
    const retrying = ref(false);
    const statusKeys = ["pending", "payment_failed", "paid", "crediting", "credited", "credit_failed", "review_required", "refunding", "refunded"];
    const statusOptions = computed(() => [
      { label: t("admin.topups.allStatuses"), value: "all" },
      ...statusKeys.map((value) => ({ label: statusLabel(value), value }))
    ]);
    const query = computed(() => ({
      page: page.value,
      pageSize,
      ...status.value !== "all" ? { status: status.value } : {}
    }));
    const { data, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/topups",
      { query },
      "$xHYxuAnUtH"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const rows = computed(() => {
      var _a, _b;
      return ((_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.list) || [];
    });
    const total = computed(() => {
      var _a, _b;
      return Number(((_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.total) || 0);
    });
    const columns = computed(() => [
      { accessorKey: "orderId", header: t("admin.topups.orderId") },
      { accessorKey: "user", header: t("admin.topups.user") },
      { accessorKey: "payment", header: t("admin.topups.payment") },
      { accessorKey: "credit", header: t("admin.topups.credit") },
      { accessorKey: "balanceType", header: t("admin.topups.balanceType") },
      { accessorKey: "status", header: t("admin.topups.status") },
      { accessorKey: "retryCount", header: t("admin.topups.retryCount") },
      { accessorKey: "error", header: t("admin.topups.error") },
      { accessorKey: "time", header: t("admin.topups.time") }
    ]);
    const statusLabel = (value) => ({
      pending: t("admin.topups.statusPending"),
      payment_failed: t("admin.topups.statusPaymentFailed"),
      paid: t("admin.topups.statusPaid"),
      crediting: t("admin.topups.statusCrediting"),
      credited: t("admin.topups.statusCredited"),
      credit_failed: t("admin.topups.statusCreditFailed"),
      review_required: t("admin.topups.statusReviewRequired"),
      refunding: t("admin.topups.statusRefunding"),
      refunded: t("admin.topups.statusRefunded")
    })[value] || value;
    const statusColor = (value) => {
      if (value === "credited") return "success";
      if (["pending", "paid", "crediting", "refunding"].includes(value)) return "warning";
      if (value === "refunded") return "neutral";
      return "error";
    };
    const formatAmount = (amount, currency) => `${Number(amount || 0).toFixed(2)} ${String(currency || "")}`;
    const retryIncomplete = async () => {
      var _a;
      retrying.value = true;
      try {
        const response = await $fetch("/api/admin/topups/retry", { method: "POST", body: { limit: 50 } });
        toast.add({ title: t("admin.topups.retryDone", response.data || {}), color: "success" });
        await refresh();
      } catch (error) {
        toast.add({ title: t("admin.topups.retryFailed"), description: String(((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || (error == null ? void 0 : error.message) || ""), color: "error" });
      } finally {
        retrying.value = false;
      }
    };
    watch(status, () => {
      page.value = 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelect = _sfc_main$j;
      const _component_UButton = _sfc_main$B;
      const _component_UTable = _sfc_main$h;
      const _component_UBadge = _sfc_main$x;
      const _component_UPagination = _sfc_main$n;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-[calc(100vh-10rem)] flex-col" }, _attrs))}><div class="mb-8 flex shrink-0 flex-wrap items-end justify-between gap-4"><div><h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.topups.title"))}</h1><p class="mt-2 text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(unref(t)("admin.topups.subtitle"))}</p></div><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: status.value,
        "onUpdate:modelValue": ($event) => status.value = $event,
        items: statusOptions.value,
        "value-key": "value",
        class: "w-44"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        icon: "ph:arrows-clockwise",
        loading: retrying.value,
        onClick: retryIncomplete
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("admin.topups.safeRetry"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("admin.topups.safeRetry")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-gray-200/60 bg-white shadow-sm dark:border-gray-800/50 dark:bg-[#121214]"><div class="flex-1 overflow-auto">`);
      _push(ssrRenderComponent(_component_UTable, {
        columns: columns.value,
        data: rows.value,
        loading: unref(pending),
        sticky: ""
      }, {
        "orderId-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-mono text-xs text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(row.original.orderId)}</span>`);
          } else {
            return [
              createVNode("span", { class: "font-mono text-xs text-gray-900 dark:text-white" }, toDisplayString(row.original.orderId), 1)
            ];
          }
        }),
        "user-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}><span class="text-sm text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(row.original.userEmail || `#${row.original.userId}`)}</span><span class="text-xs text-gray-500"${_scopeId}>#${ssrInterpolate(row.original.userId)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("span", { class: "text-sm text-gray-900 dark:text-white" }, toDisplayString(row.original.userEmail || `#${row.original.userId}`), 1),
                createVNode("span", { class: "text-xs text-gray-500" }, "#" + toDisplayString(row.original.userId), 1)
              ])
            ];
          }
        }),
        "payment-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-sm"${_scopeId}>${ssrInterpolate(formatAmount(row.original.paymentAmount, row.original.paymentCurrency))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-sm" }, toDisplayString(formatAmount(row.original.paymentAmount, row.original.paymentCurrency)), 1)
            ];
          }
        }),
        "credit-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-sm font-medium text-emerald-600 dark:text-emerald-400"${_scopeId}>${ssrInterpolate(formatAmount(row.original.creditAmount, row.original.creditCurrency))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-sm font-medium text-emerald-600 dark:text-emerald-400" }, toDisplayString(formatAmount(row.original.creditAmount, row.original.creditCurrency)), 1)
            ];
          }
        }),
        "status-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBadge, {
              color: statusColor(row.original.status),
              variant: "subtle"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(statusLabel(row.original.status))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(statusLabel(row.original.status)), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBadge, {
                color: statusColor(row.original.status),
                variant: "subtle"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(statusLabel(row.original.status)), 1)
                ]),
                _: 2
              }, 1032, ["color"])
            ];
          }
        }),
        "error-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block max-w-72 truncate text-xs text-gray-500"${ssrRenderAttr("title", row.original.lastError || "")}${_scopeId}>${ssrInterpolate(row.original.lastError || unref(t)("admin.topups.noError"))}</span>`);
          } else {
            return [
              createVNode("span", {
                class: "block max-w-72 truncate text-xs text-gray-500",
                title: row.original.lastError || ""
              }, toDisplayString(row.original.lastError || unref(t)("admin.topups.noError")), 9, ["title"])
            ];
          }
        }),
        "time-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="whitespace-nowrap text-xs text-gray-500"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
          } else {
            return [
              createVNode("span", { class: "whitespace-nowrap text-xs text-gray-500" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex shrink-0 items-center justify-between border-t border-gray-200 p-4 dark:border-gray-800/50"><span class="text-sm text-gray-500">${ssrInterpolate(total.value)} ${ssrInterpolate(unref(t)("admin.common.results"))}</span>`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: page.value,
        "onUpdate:modelValue": ($event) => page.value = $event,
        total: total.value,
        "items-per-page": pageSize,
        max: 7
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/topups.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
