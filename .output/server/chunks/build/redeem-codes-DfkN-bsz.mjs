import { defineComponent, mergeProps, unref, computed, ref, reactive, withAsyncContext, withCtx, createTextVNode, toDisplayString, createVNode, isRef, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useI18n, d as useFormatTime, r as useSettings, e as useToast, f as useAdminPermissions, x as usePagination, y as useFetch, l as _sfc_main$v, b as _sfc_main$A, i as _sfc_main$T, j as _sfc_main$t, k as _sfc_main$O, z as _sfc_main$y, n as _sfc_main$I, G as _sfc_main$p } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AdminRedeemCodesPanel",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const { formatDateTime, parseDateTimeInTimezone } = useFormatTime();
    const { getSetting } = useSettings();
    const toast = useToast();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const accountingCurrency = computed(() => String(getSetting("currency", "USD") || "USD").trim().toUpperCase());
    const statusFilter = ref("all");
    const keyword = ref("");
    const isModalOpen = ref(false);
    const isSubmitting = ref(false);
    const form = reactive({
      count: 10,
      amount: 10,
      batchId: "",
      expiresAt: "",
      remark: ""
    });
    const statusOptions = computed(() => [
      { label: t("admin.redeemCodes.statusAll", "\u5168\u90E8"), value: "all" },
      { label: t("admin.redeemCodes.statusActive", "\u53EF\u7528"), value: "active" },
      { label: t("admin.redeemCodes.statusUsed", "\u5DF2\u4F7F\u7528"), value: "used" },
      { label: t("admin.redeemCodes.statusDisabled", "\u5DF2\u4F5C\u5E9F"), value: "disabled" }
    ]);
    const columns = computed(() => [
      { accessorKey: "code", header: t("admin.redeemCodes.colCode", "\u5151\u6362\u7801") },
      { accessorKey: "amount", header: t("admin.redeemCodes.colAmount", "\u9762\u503C") },
      { accessorKey: "status", header: t("admin.redeemCodes.colStatus", "\u72B6\u6001") },
      { accessorKey: "batchId", header: t("admin.redeemCodes.colBatch", "\u6279\u6B21") },
      { accessorKey: "expiresAt", header: t("admin.redeemCodes.colExpires", "\u6709\u6548\u671F") },
      { accessorKey: "usedByEmail", header: t("admin.redeemCodes.colUsedBy", "\u4F7F\u7528\u8005") },
      { accessorKey: "createdAt", header: t("admin.redeemCodes.colCreated", "\u521B\u5EFA\u65F6\u95F4") },
      { accessorKey: "actions", header: "" }
    ]);
    const { page, pageSize, onPageChange } = usePagination(20);
    const { data, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/redeem-codes",
      {
        query: computed(() => ({
          page: page.value,
          pageSize,
          status: statusFilter.value !== "all" ? statusFilter.value : void 0,
          keyword: keyword.value.trim() || void 0
        }))
      },
      "$KjKy3HlyEU"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const rows = computed(() => {
      var _a, _b;
      return ((_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.list) || [];
    });
    const total = computed(() => {
      var _a, _b;
      return ((_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.total) || 0;
    });
    const formatMoney = (row) => `${formatScaled(row.amountCents)} ${row.currency}`;
    const formatScaled = (cents) => {
      const value = Number(cents || 0) / 1e8;
      return String(Math.round(value * 100) / 100);
    };
    const statusLabel = (status) => status === "used" ? t("admin.redeemCodes.statusUsed", "\u5DF2\u4F7F\u7528") : status === "disabled" ? t("admin.redeemCodes.statusDisabled", "\u5DF2\u4F5C\u5E9F") : t("admin.redeemCodes.statusActive", "\u53EF\u7528");
    const statusColor = (status) => status === "used" ? "warning" : status === "disabled" ? "error" : "success";
    const openModal = () => {
      isModalOpen.value = true;
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };
    const submit = async () => {
      var _a;
      isSubmitting.value = true;
      try {
        await $fetch("/api/admin/redeem-codes", {
          method: "POST",
          body: {
            count: Number(form.count),
            amount: Number(form.amount),
            currency: accountingCurrency.value,
            batchId: form.batchId.trim() || void 0,
            expiresAt: form.expiresAt ? parseDateTimeInTimezone(form.expiresAt) || void 0 : void 0,
            remark: form.remark.trim() || void 0
          }
        });
        toast.add({ title: t("admin.redeemCodes.generated", "\u5151\u6362\u7801\u5DF2\u751F\u6210"), color: "success" });
        closeModal();
        await refresh();
      } catch (error) {
        toast.add({
          title: t("admin.redeemCodes.error", "\u64CD\u4F5C\u5931\u8D25"),
          description: ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.statusMessage) || (error == null ? void 0 : error.message) || "",
          color: "error"
        });
      } finally {
        isSubmitting.value = false;
      }
    };
    const disable = async (row) => {
      var _a;
      try {
        await $fetch(`/api/admin/redeem-codes/${row.id}`, { method: "DELETE" });
        toast.add({ title: t("admin.redeemCodes.disabled", "\u5151\u6362\u7801\u5DF2\u4F5C\u5E9F"), color: "success" });
        await refresh();
      } catch (error) {
        toast.add({
          title: t("admin.redeemCodes.error", "\u64CD\u4F5C\u5931\u8D25"),
          description: ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.statusMessage) || (error == null ? void 0 : error.message) || "",
          color: "error"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelect = _sfc_main$v;
      const _component_UInput = _sfc_main$A;
      const _component_UButton = _sfc_main$T;
      const _component_UTable = _sfc_main$t;
      const _component_UBadge = _sfc_main$O;
      const _component_UPagination = _sfc_main$y;
      const _component_UModal = _sfc_main$I;
      const _component_UCard = _sfc_main$p;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-0 flex-1 flex-col" }, _attrs))}><div class="mb-4 flex shrink-0 items-center justify-between gap-4"><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: statusFilter.value,
        "onUpdate:modelValue": ($event) => statusFilter.value = $event,
        items: statusOptions.value,
        class: "w-40",
        size: "sm"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: keyword.value,
        "onUpdate:modelValue": ($event) => keyword.value = $event,
        placeholder: unref(t)("admin.redeemCodes.searchPlaceholder", "\u641C\u7D22\u5151\u6362\u7801"),
        icon: "ph:magnifying-glass",
        size: "sm",
        class: "w-56"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrows-clockwise",
        size: "sm",
        loading: unref(pending),
        onClick: () => unref(refresh)()
      }, null, _parent));
      _push(`</div>`);
      if (unref(hasAdminPerm)("redeem:edit")) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "primary",
          size: "sm",
          icon: "ph:ticket",
          class: "shadow-xs font-medium",
          onClick: openModal
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("admin.redeemCodes.generate", "\u751F\u6210\u5151\u6362\u7801"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("admin.redeemCodes.generate", "\u751F\u6210\u5151\u6362\u7801")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1 min-h-0"><div class="flex-1 overflow-auto">`);
      _push(ssrRenderComponent(_component_UTable, {
        data: rows.value,
        columns: columns.value,
        loading: unref(pending),
        sticky: ""
      }, {
        "code-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-mono text-xs text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(row.original.code)}</span>`);
          } else {
            return [
              createVNode("span", { class: "font-mono text-xs text-gray-900 dark:text-white" }, toDisplayString(row.original.code), 1)
            ];
          }
        }),
        "amount-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(formatMoney(row.original))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(formatMoney(row.original)), 1)
            ];
          }
        }),
        "status-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBadge, {
              color: statusColor(row.original.status),
              variant: "subtle",
              size: "sm"
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
                variant: "subtle",
                size: "sm"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(statusLabel(row.original.status)), 1)
                ]),
                _: 2
              }, 1032, ["color"])
            ];
          }
        }),
        "batchId-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(row.original.batchId || "-")}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(row.original.batchId || "-"), 1)
            ];
          }
        }),
        "expiresAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap"${_scopeId}>${ssrInterpolate(row.original.expiresAt ? unref(formatDateTime)(row.original.expiresAt) : unref(t)("admin.redeemCodes.noExpiry", "\u6C38\u4E45\u6709\u6548"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap" }, toDisplayString(row.original.expiresAt ? unref(formatDateTime)(row.original.expiresAt) : unref(t)("admin.redeemCodes.noExpiry", "\u6C38\u4E45\u6709\u6548")), 1)
            ];
          }
        }),
        "usedByEmail-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(row.original.usedByEmail || "-")}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(row.original.usedByEmail || "-"), 1)
            ];
          }
        }),
        "createdAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
            ];
          }
        }),
        "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "error",
              variant: "ghost",
              icon: "ph:prohibit",
              size: "xs",
              disabled: row.original.status !== "active" || !unref(hasAdminPerm)("redeem:edit"),
              onClick: ($event) => disable(row.original)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "error",
                variant: "ghost",
                icon: "ph:prohibit",
                size: "xs",
                disabled: row.original.status !== "active" || !unref(hasAdminPerm)("redeem:edit"),
                onClick: ($event) => disable(row.original)
              }, null, 8, ["disabled", "onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="p-3.5 border-t border-gray-200/80 dark:border-gray-800/50 flex items-center justify-between shrink-0 bg-white dark:bg-[#121214]"><span class="text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(unref(t)("admin.redeemCodes.total", "\u5171 {n} \u6761").replace("{n}", String(total.value)))}</span>`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
        total: total.value,
        "items-per-page": unref(pageSize),
        max: 5,
        size: "sm",
        "onUpdate:page": (val) => unref(onPageChange)(val, () => unref(refresh)())
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: isModalOpen.value,
        "onUpdate:open": ($event) => isModalOpen.value = $event,
        ui: { content: "sm:max-w-lg" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { class: "bg-white dark:bg-[#121214] ring-1 ring-gray-200 dark:ring-gray-800" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><h3 class="text-base font-bold text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(unref(t)("admin.redeemCodes.generateTitle", "\u6279\u91CF\u751F\u6210\u5151\u6362\u7801"))}</h3>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x-bold",
                    size: "xs",
                    onClick: closeModal
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("h3", { class: "text-base font-bold text-gray-900 dark:text-white" }, toDisplayString(unref(t)("admin.redeemCodes.generateTitle", "\u6279\u91CF\u751F\u6210\u5151\u6362\u7801")), 1),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        icon: "ph:x-bold",
                        size: "xs",
                        onClick: closeModal
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form class="space-y-4"${_scopeId2}><div class="grid grid-cols-2 gap-4"${_scopeId2}><div${_scopeId2}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId2}>${ssrInterpolate(unref(t)("admin.redeemCodes.count", "\u751F\u6210\u6570\u91CF"))}</label>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form.count,
                    "onUpdate:modelValue": ($event) => form.count = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "1",
                    max: "1000",
                    class: "w-full",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId2}>${ssrInterpolate(unref(t)("admin.redeemCodes.amount", "\u6BCF\u4E2A\u9762\u503C"))}</label>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form.amount,
                    "onUpdate:modelValue": ($event) => form.amount = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    step: "0.01",
                    min: "0.01",
                    class: "w-full",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-2 gap-4"${_scopeId2}><div${_scopeId2}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId2}>${ssrInterpolate(unref(t)("admin.redeemCodes.currency", "\u8BB0\u8D26\u5E01\u79CD"))}</label>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    "model-value": accountingCurrency.value,
                    readonly: "",
                    disabled: "",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId2}>${ssrInterpolate(unref(t)("admin.redeemCodes.batch", "\u6279\u6B21\uFF08\u53EF\u9009\uFF09"))}</label>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form.batchId,
                    "onUpdate:modelValue": ($event) => form.batchId = $event,
                    placeholder: unref(t)("admin.redeemCodes.batchPlaceholder", "\u540C\u4E00\u6279\u6B21\u6BCF\u4EBA\u9650\u5151\u4E00\u6B21"),
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div${_scopeId2}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId2}>${ssrInterpolate(unref(t)("admin.redeemCodes.expires", "\u6709\u6548\u671F\uFF08\u53EF\u9009\uFF09"))}</label>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form.expiresAt,
                    "onUpdate:modelValue": ($event) => form.expiresAt = $event,
                    type: "datetime-local",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId2}>${ssrInterpolate(unref(t)("admin.redeemCodes.remark", "\u5907\u6CE8\uFF08\u53EF\u9009\uFF09"))}</label>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form.remark,
                    "onUpdate:modelValue": ($event) => form.remark = $event,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex justify-end gap-2 pt-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    size: "sm",
                    onClick: closeModal
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(t)("admin.common.cancel", "\u53D6\u6D88"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("admin.common.cancel", "\u53D6\u6D88")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    type: "submit",
                    color: "primary",
                    size: "sm",
                    loading: isSubmitting.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(t)("admin.redeemCodes.confirm", "\u786E\u8BA4\u751F\u6210"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("admin.redeemCodes.confirm", "\u786E\u8BA4\u751F\u6210")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></form>`);
                } else {
                  return [
                    createVNode("form", {
                      class: "space-y-4",
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(unref(t)("admin.redeemCodes.count", "\u751F\u6210\u6570\u91CF")), 1),
                          createVNode(_component_UInput, {
                            modelValue: form.count,
                            "onUpdate:modelValue": ($event) => form.count = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            min: "1",
                            max: "1000",
                            class: "w-full",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(unref(t)("admin.redeemCodes.amount", "\u6BCF\u4E2A\u9762\u503C")), 1),
                          createVNode(_component_UInput, {
                            modelValue: form.amount,
                            "onUpdate:modelValue": ($event) => form.amount = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            step: "0.01",
                            min: "0.01",
                            class: "w-full",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(unref(t)("admin.redeemCodes.currency", "\u8BB0\u8D26\u5E01\u79CD")), 1),
                          createVNode(_component_UInput, {
                            "model-value": accountingCurrency.value,
                            readonly: "",
                            disabled: "",
                            class: "w-full"
                          }, null, 8, ["model-value"])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(unref(t)("admin.redeemCodes.batch", "\u6279\u6B21\uFF08\u53EF\u9009\uFF09")), 1),
                          createVNode(_component_UInput, {
                            modelValue: form.batchId,
                            "onUpdate:modelValue": ($event) => form.batchId = $event,
                            placeholder: unref(t)("admin.redeemCodes.batchPlaceholder", "\u540C\u4E00\u6279\u6B21\u6BCF\u4EBA\u9650\u5151\u4E00\u6B21"),
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(unref(t)("admin.redeemCodes.expires", "\u6709\u6548\u671F\uFF08\u53EF\u9009\uFF09")), 1),
                        createVNode(_component_UInput, {
                          modelValue: form.expiresAt,
                          "onUpdate:modelValue": ($event) => form.expiresAt = $event,
                          type: "datetime-local",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(unref(t)("admin.redeemCodes.remark", "\u5907\u6CE8\uFF08\u53EF\u9009\uFF09")), 1),
                        createVNode(_component_UInput, {
                          modelValue: form.remark,
                          "onUpdate:modelValue": ($event) => form.remark = $event,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "ghost",
                          size: "sm",
                          onClick: closeModal
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)("admin.common.cancel", "\u53D6\u6D88")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          type: "submit",
                          color: "primary",
                          size: "sm",
                          loading: isSubmitting.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)("admin.redeemCodes.confirm", "\u786E\u8BA4\u751F\u6210")), 1)
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { class: "bg-white dark:bg-[#121214] ring-1 ring-gray-200 dark:ring-gray-800" }, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("h3", { class: "text-base font-bold text-gray-900 dark:text-white" }, toDisplayString(unref(t)("admin.redeemCodes.generateTitle", "\u6279\u91CF\u751F\u6210\u5151\u6362\u7801")), 1),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "ph:x-bold",
                      size: "xs",
                      onClick: closeModal
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("form", {
                    class: "space-y-4",
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(unref(t)("admin.redeemCodes.count", "\u751F\u6210\u6570\u91CF")), 1),
                        createVNode(_component_UInput, {
                          modelValue: form.count,
                          "onUpdate:modelValue": ($event) => form.count = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          min: "1",
                          max: "1000",
                          class: "w-full",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(unref(t)("admin.redeemCodes.amount", "\u6BCF\u4E2A\u9762\u503C")), 1),
                        createVNode(_component_UInput, {
                          modelValue: form.amount,
                          "onUpdate:modelValue": ($event) => form.amount = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          step: "0.01",
                          min: "0.01",
                          class: "w-full",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(unref(t)("admin.redeemCodes.currency", "\u8BB0\u8D26\u5E01\u79CD")), 1),
                        createVNode(_component_UInput, {
                          "model-value": accountingCurrency.value,
                          readonly: "",
                          disabled: "",
                          class: "w-full"
                        }, null, 8, ["model-value"])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(unref(t)("admin.redeemCodes.batch", "\u6279\u6B21\uFF08\u53EF\u9009\uFF09")), 1),
                        createVNode(_component_UInput, {
                          modelValue: form.batchId,
                          "onUpdate:modelValue": ($event) => form.batchId = $event,
                          placeholder: unref(t)("admin.redeemCodes.batchPlaceholder", "\u540C\u4E00\u6279\u6B21\u6BCF\u4EBA\u9650\u5151\u4E00\u6B21"),
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(unref(t)("admin.redeemCodes.expires", "\u6709\u6548\u671F\uFF08\u53EF\u9009\uFF09")), 1),
                      createVNode(_component_UInput, {
                        modelValue: form.expiresAt,
                        "onUpdate:modelValue": ($event) => form.expiresAt = $event,
                        type: "datetime-local",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(unref(t)("admin.redeemCodes.remark", "\u5907\u6CE8\uFF08\u53EF\u9009\uFF09")), 1),
                      createVNode(_component_UInput, {
                        modelValue: form.remark,
                        "onUpdate:modelValue": ($event) => form.remark = $event,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        size: "sm",
                        onClick: closeModal
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("admin.common.cancel", "\u53D6\u6D88")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UButton, {
                        type: "submit",
                        color: "primary",
                        size: "sm",
                        loading: isSubmitting.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("admin.redeemCodes.confirm", "\u786E\u8BA4\u751F\u6210")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ], 32)
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminRedeemCodesPanel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AdminRedeemCodesPanel = Object.assign(_sfc_main$1, { __name: "AdminRedeemCodesPanel" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "redeem-codes",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-[calc(100vh-10rem)] flex-col" }, _attrs))}><div class="mb-6 flex shrink-0 items-end justify-between gap-4"><div><h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.redeemCodes.title", "\u5151\u6362\u7801"))}</h1><p class="mt-1.5 text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(unref(t)("admin.redeemCodes.subtitle", "\u6279\u91CF\u751F\u6210\u3001\u67E5\u770B\u4E0E\u4F5C\u5E9F\u94B1\u5305\u5151\u6362\u7801\uFF08\u5165\u8D26\u5230\u5145\u503C\u4F59\u989D\uFF09"))}</p></div></div>`);
      _push(ssrRenderComponent(AdminRedeemCodesPanel, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/redeem-codes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=redeem-codes-DfkN-bsz.mjs.map
