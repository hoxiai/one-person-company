import { _ as _sfc_main$5 } from './Tabs-BxdBJbxF.mjs';
import { f as useI18n, D as useRoute, g as useFormatTime, i as useAdminPermissions, h as useToast, t as useConfirm, y as usePagination, z as useFetch, l as _sfc_main$B, n as _sfc_main$h, o as _sfc_main$x, q as _sfc_main$s, b as _sfc_main$G, M as __nuxt_component_0$1, d as _sfc_main$k, B as _sfc_main$n } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderTeleport, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$6 } from './Card-jMFP8cqX.mjs';
import { _ as _sfc_main$7 } from './SelectMenu-DOh79w0e.mjs';
import './TabsTrigger-Debt6F5y.mjs';
import './RovingFocusItem-DyHBwisL.mjs';
import './utils-DD3u_B8M.mjs';
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
import './virtualizer-BxqhLCyb.mjs';
import './arrays-DNHUHQBd.mjs';
import './VisuallyHiddenInput-32bCuzTQ.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TableCard",
  __ssrInlineRender: true,
  props: {
    page: {},
    pageSize: {},
    total: {},
    rowCount: {}
  },
  emits: ["update:page"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPagination = _sfc_main$n;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1 min-h-0" }, _attrs))}><div class="flex-1 overflow-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="p-4 border-t border-gray-200 dark:border-gray-800/50 flex items-center justify-between shrink-0 bg-white dark:bg-[#121214] rounded-b-2xl"><span class="text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.common.showing"))} ${ssrInterpolate(__props.rowCount > 0 ? (__props.page - 1) * __props.pageSize + 1 : 0)} ${ssrInterpolate(_ctx.$t("admin.common.to"))} ${ssrInterpolate(Math.min(__props.page * __props.pageSize, __props.total))} ${ssrInterpolate(_ctx.$t("admin.common.of"))} ${ssrInterpolate(__props.total)} ${ssrInterpolate(_ctx.$t("admin.common.results"))}</span>`);
      _push(ssrRenderComponent(_component_UPagination, {
        "model-value": __props.page,
        total: __props.total,
        "items-per-page": __props.pageSize,
        max: 5,
        "onUpdate:page": (val) => emit("update:page", val)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/logs/TableCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$4, { __name: "AdminLogsTableCard" });
function useLogFormatters() {
  const getLevelColor = (level) => {
    switch (level == null ? void 0 : level.toLowerCase()) {
      case "error":
        return "error";
      case "warn":
        return "warning";
      case "debug":
        return "neutral";
      case "info":
      default:
        return "primary";
    }
  };
  const getMethodColor = (method) => {
    switch (method == null ? void 0 : method.toUpperCase()) {
      case "GET":
        return "success";
      case "POST":
        return "primary";
      case "PUT":
        return "warning";
      case "DELETE":
        return "error";
      case "PATCH":
        return "warning";
      default:
        return "neutral";
    }
  };
  const getStatusCodeClass = (code) => {
    if (!code) return "text-gray-500 bg-gray-100 dark:bg-gray-900";
    if (code < 300) return "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30";
    if (code < 400) return "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30";
    if (code < 500) return "text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30";
    return "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30";
  };
  const formatDetails = (details) => {
    if (typeof details !== "string" || !details) return "";
    try {
      return JSON.stringify(JSON.parse(details), null, 2);
    } catch {
      return details;
    }
  };
  const shortId = (id) => {
    if (!id || id.length <= 12) return id || "";
    return `${id.slice(0, 8)}...${id.slice(-4)}`;
  };
  return {
    getLevelColor,
    getMethodColor,
    getStatusCodeClass,
    formatDetails,
    shortId
  };
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SystemTab",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { formatDateTime } = useFormatTime();
    const { getLevelColor, formatDetails } = useLogFormatters();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const toast = useToast();
    const { confirm } = useConfirm();
    const columns = computed(() => [
      { accessorKey: "id", header: t("admin.logs.table.id") },
      { accessorKey: "level", header: t("admin.logs.table.level") },
      { accessorKey: "source", header: t("admin.logs.table.source") },
      { accessorKey: "message", header: t("admin.logs.table.message") },
      { accessorKey: "createdAt", header: t("admin.logs.table.timestamp") },
      {
        accessorKey: "actions",
        header: t("admin.logs.table.actions"),
        meta: {
          class: {
            th: "text-right sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]",
            td: "text-right font-medium sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]"
          }
        }
      }
    ]);
    const { page, pageSize, onPageChange } = usePagination(15);
    const isClearing = ref(false);
    const isDetailsOpen = ref(false);
    const selectedLog = ref(null);
    const { data, pending, refresh } = useFetch(
      "/api/admin/logs",
      {
        query: { page, pageSize },
        watch: [page],
        lazy: true
      },
      "$DLHkGtu_vs"
      /* nuxt-injected */
    );
    const logs = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.logs) || [];
    });
    const totalItems = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.total) || 0;
    });
    const viewDetails = (log) => {
      selectedLog.value = log;
      isDetailsOpen.value = true;
    };
    const deleteLog = async (id) => {
      var _a;
      const isConfirmed = await confirm({
        title: t("admin.logs.confirm.delete_title"),
        description: t("admin.logs.confirm.delete_desc")
      });
      if (!isConfirmed) return;
      try {
        await $fetch(`/api/admin/logs/${id}`, { method: "DELETE" });
        toast.add({
          title: t("admin.logs.toast.success"),
          description: t("admin.logs.toast.deleted"),
          color: "success"
        });
        refresh();
      } catch (e) {
        toast.add({
          title: t("admin.logs.toast.error"),
          description: ((_a = e.data) == null ? void 0 : _a.message) || t("admin.logs.toast.delete_failed"),
          color: "error"
        });
      }
    };
    const clearAllLogs = async () => {
      var _a;
      const isConfirmed = await confirm({
        title: t("admin.logs.confirm.clear_title"),
        description: t("admin.logs.confirm.clear_desc")
      });
      if (!isConfirmed) return;
      isClearing.value = true;
      try {
        await $fetch("/api/admin/logs/clear", { method: "DELETE" });
        toast.add({
          title: t("admin.logs.toast.success"),
          description: t("admin.logs.toast.cleared"),
          color: "success"
        });
        page.value = 1;
        refresh();
      } catch (e) {
        toast.add({
          title: t("admin.logs.toast.error"),
          description: ((_a = e.data) == null ? void 0 : _a.message) || t("admin.logs.toast.clear_failed"),
          color: "error"
        });
      } finally {
        isClearing.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$B;
      const _component_AdminLogsTableCard = __nuxt_component_4;
      const _component_UTable = _sfc_main$h;
      const _component_UBadge = _sfc_main$x;
      const _component_UModal = _sfc_main$s;
      const _component_UCard = _sfc_main$6;
      const _component_UIcon = _sfc_main$G;
      _push(`<!--[-->`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(hasAdminPerm)("logs:edit")) {
          _push2(ssrRenderComponent(_component_UButton, {
            color: "error",
            variant: "outline",
            icon: "ph:trash-bold",
            loading: isClearing.value,
            onClick: clearAllLogs
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.$t("admin.logs.page.clear_all"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.logs.page.clear_all")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push2(`<!---->`);
        }
      }, "#logs-header-actions", false, _parent);
      _push(ssrRenderComponent(_component_AdminLogsTableCard, {
        page: unref(page),
        "page-size": unref(pageSize),
        total: totalItems.value,
        "row-count": logs.value.length,
        "onUpdate:page": (val) => unref(onPageChange)(val, () => unref(refresh)())
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTable, {
              data: logs.value,
              columns: columns.value,
              loading: unref(pending),
              sticky: ""
            }, {
              "level-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: unref(getLevelColor)(row.original.level),
                    variant: "subtle",
                    size: "sm",
                    class: "uppercase font-semibold tracking-wider"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(row.original.level)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(row.original.level), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UBadge, {
                      color: unref(getLevelColor)(row.original.level),
                      variant: "subtle",
                      size: "sm",
                      class: "uppercase font-semibold tracking-wider"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.original.level), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "source-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-xs text-gray-500 font-mono bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded"${_scopeId2}>${ssrInterpolate(row.original.source || _ctx.$t("admin.logs.system_fallback"))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-xs text-gray-500 font-mono bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded" }, toDisplayString(row.original.source || _ctx.$t("admin.logs.system_fallback")), 1)
                  ];
                }
              }),
              "message-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-1 max-w-lg"${_scopeId2}><span class="text-sm font-medium text-gray-900 dark:text-white line-clamp-2"${_scopeId2}>${ssrInterpolate(row.original.message)}</span>`);
                  if (row.original.details) {
                    _push3(`<span class="text-xs text-gray-500 line-clamp-1 truncate cursor-help"${ssrRenderAttr("title", row.original.details)}${_scopeId2}>${ssrInterpolate(row.original.details)}</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-1 max-w-lg" }, [
                      createVNode("span", { class: "text-sm font-medium text-gray-900 dark:text-white line-clamp-2" }, toDisplayString(row.original.message), 1),
                      row.original.details ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs text-gray-500 line-clamp-1 truncate cursor-help",
                        title: row.original.details
                      }, toDisplayString(row.original.details), 9, ["title"])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              "createdAt-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap"${_scopeId2}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
                  ];
                }
              }),
              "actions-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                  if (row.original.details) {
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "ph:eye",
                      size: "sm",
                      onClick: ($event) => viewDetails(row.original)
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(hasAdminPerm)("logs:edit")) {
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "error",
                      variant: "ghost",
                      icon: "ph:trash",
                      size: "sm",
                      onClick: ($event) => deleteLog(row.original.id)
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      row.original.details ? (openBlock(), createBlock(_component_UButton, {
                        key: 0,
                        color: "neutral",
                        variant: "ghost",
                        icon: "ph:eye",
                        size: "sm",
                        onClick: ($event) => viewDetails(row.original)
                      }, null, 8, ["onClick"])) : createCommentVNode("", true),
                      unref(hasAdminPerm)("logs:edit") ? (openBlock(), createBlock(_component_UButton, {
                        key: 1,
                        color: "error",
                        variant: "ghost",
                        icon: "ph:trash",
                        size: "sm",
                        onClick: ($event) => deleteLog(row.original.id)
                      }, null, 8, ["onClick"])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTable, {
                data: logs.value,
                columns: columns.value,
                loading: unref(pending),
                sticky: ""
              }, {
                "level-cell": withCtx(({ row }) => [
                  createVNode(_component_UBadge, {
                    color: unref(getLevelColor)(row.original.level),
                    variant: "subtle",
                    size: "sm",
                    class: "uppercase font-semibold tracking-wider"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(row.original.level), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "source-cell": withCtx(({ row }) => [
                  createVNode("span", { class: "text-xs text-gray-500 font-mono bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded" }, toDisplayString(row.original.source || _ctx.$t("admin.logs.system_fallback")), 1)
                ]),
                "message-cell": withCtx(({ row }) => [
                  createVNode("div", { class: "flex flex-col gap-1 max-w-lg" }, [
                    createVNode("span", { class: "text-sm font-medium text-gray-900 dark:text-white line-clamp-2" }, toDisplayString(row.original.message), 1),
                    row.original.details ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-xs text-gray-500 line-clamp-1 truncate cursor-help",
                      title: row.original.details
                    }, toDisplayString(row.original.details), 9, ["title"])) : createCommentVNode("", true)
                  ])
                ]),
                "createdAt-cell": withCtx(({ row }) => [
                  createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
                ]),
                "actions-cell": withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    row.original.details ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      color: "neutral",
                      variant: "ghost",
                      icon: "ph:eye",
                      size: "sm",
                      onClick: ($event) => viewDetails(row.original)
                    }, null, 8, ["onClick"])) : createCommentVNode("", true),
                    unref(hasAdminPerm)("logs:edit") ? (openBlock(), createBlock(_component_UButton, {
                      key: 1,
                      color: "error",
                      variant: "ghost",
                      icon: "ph:trash",
                      size: "sm",
                      onClick: ($event) => deleteLog(row.original.id)
                    }, null, 8, ["onClick"])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }, 8, ["data", "columns", "loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: isDetailsOpen.value,
        "onUpdate:open": ($event) => isDetailsOpen.value = $event
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { class: "bg-white dark:bg-[#121214] ring-1 ring-gray-200 dark:ring-gray-800" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:terminal-window",
                    class: "w-5 h-5 text-gray-500 dark:text-gray-400"
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(_ctx.$t("admin.logs.detail.title"))}</h3>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    class: "-my-1",
                    onClick: ($event) => isDetailsOpen.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("h3", { class: "text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:terminal-window",
                          class: "w-5 h-5 text-gray-500 dark:text-gray-400"
                        }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("admin.logs.detail.title")), 1)
                      ]),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        icon: "ph:x",
                        class: "-my-1",
                        onClick: ($event) => isDetailsOpen.value = false
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f;
                if (_push3) {
                  _push3(`<div class="space-y-4"${_scopeId2}><div${_scopeId2}><div class="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.logs.detail.message"))}</div><div class="text-gray-900 dark:text-white text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-800"${_scopeId2}>${ssrInterpolate((_a = selectedLog.value) == null ? void 0 : _a.message)}</div></div><div${_scopeId2}><div class="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.logs.detail.technical_details"))}</div><div class="bg-black p-4 rounded-lg border border-gray-200 dark:border-gray-800 overflow-y-auto max-h-96"${_scopeId2}><pre class="text-xs font-mono text-gray-500 dark:text-gray-300 whitespace-pre-wrap"${_scopeId2}>${ssrInterpolate(unref(formatDetails)((_b = selectedLog.value) == null ? void 0 : _b.details))}</pre></div></div><div class="grid grid-cols-2 gap-4"${_scopeId2}><div${_scopeId2}><div class="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.logs.detail.source"))}</div><div class="text-sm text-gray-500 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(((_c = selectedLog.value) == null ? void 0 : _c.source) || _ctx.$t("admin.logs.system_fallback"))}</div></div><div${_scopeId2}><div class="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.logs.detail.time"))}</div><div class="text-sm text-gray-500 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(selectedLog.value ? unref(formatDateTime)(selectedLog.value.createdAt) : "")}</div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.logs.detail.message")), 1),
                        createVNode("div", { class: "text-gray-900 dark:text-white text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-800" }, toDisplayString((_d = selectedLog.value) == null ? void 0 : _d.message), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.logs.detail.technical_details")), 1),
                        createVNode("div", { class: "bg-black p-4 rounded-lg border border-gray-200 dark:border-gray-800 overflow-y-auto max-h-96" }, [
                          createVNode("pre", { class: "text-xs font-mono text-gray-500 dark:text-gray-300 whitespace-pre-wrap" }, toDisplayString(unref(formatDetails)((_e = selectedLog.value) == null ? void 0 : _e.details)), 1)
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.logs.detail.source")), 1),
                          createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-300" }, toDisplayString(((_f = selectedLog.value) == null ? void 0 : _f.source) || _ctx.$t("admin.logs.system_fallback")), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.logs.detail.time")), 1),
                          createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-300" }, toDisplayString(selectedLog.value ? unref(formatDateTime)(selectedLog.value.createdAt) : ""), 1)
                        ])
                      ])
                    ])
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
                    createVNode("h3", { class: "text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:terminal-window",
                        class: "w-5 h-5 text-gray-500 dark:text-gray-400"
                      }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("admin.logs.detail.title")), 1)
                    ]),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "ph:x",
                      class: "-my-1",
                      onClick: ($event) => isDetailsOpen.value = false
                    }, null, 8, ["onClick"])
                  ])
                ]),
                default: withCtx(() => {
                  var _a, _b, _c;
                  return [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.logs.detail.message")), 1),
                        createVNode("div", { class: "text-gray-900 dark:text-white text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-800" }, toDisplayString((_a = selectedLog.value) == null ? void 0 : _a.message), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.logs.detail.technical_details")), 1),
                        createVNode("div", { class: "bg-black p-4 rounded-lg border border-gray-200 dark:border-gray-800 overflow-y-auto max-h-96" }, [
                          createVNode("pre", { class: "text-xs font-mono text-gray-500 dark:text-gray-300 whitespace-pre-wrap" }, toDisplayString(unref(formatDetails)((_b = selectedLog.value) == null ? void 0 : _b.details)), 1)
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.logs.detail.source")), 1),
                          createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-300" }, toDisplayString(((_c = selectedLog.value) == null ? void 0 : _c.source) || _ctx.$t("admin.logs.system_fallback")), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.logs.detail.time")), 1),
                          createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-300" }, toDisplayString(selectedLog.value ? unref(formatDateTime)(selectedLog.value.createdAt) : ""), 1)
                        ])
                      ])
                    ])
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/logs/SystemTab.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "AdminLogsSystemTab" });
const ALL$1 = "all";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AccessTab",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { formatDateTime } = useFormatTime();
    const { getMethodColor, getStatusCodeClass, shortId } = useLogFormatters();
    const columns = computed(() => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "path", header: t("admin.accessLogs.table.path") },
      { accessorKey: "method", header: t("admin.accessLogs.table.method") },
      { accessorKey: "statusCode", header: t("admin.accessLogs.table.status") },
      { accessorKey: "duration", header: t("admin.accessLogs.table.duration") },
      { accessorKey: "ip", header: "IP" },
      { accessorKey: "visitorId", header: t("admin.accessLogs.table.visitor") },
      { accessorKey: "createdAt", header: t("admin.accessLogs.table.time") }
    ]);
    const { page, pageSize, onPageChange } = usePagination(50);
    const search = ref("");
    const methodFilter = ref(ALL$1);
    const statusFilter = ref(ALL$1);
    const methodOptions = [
      { label: t("admin.accessLogs.filter.allMethods"), value: ALL$1 },
      { label: "GET", value: "GET" },
      { label: "POST", value: "POST" },
      { label: "PUT", value: "PUT" },
      { label: "DELETE", value: "DELETE" },
      { label: "PATCH", value: "PATCH" }
    ];
    const statusOptions = [
      { label: t("admin.accessLogs.filter.allStatus"), value: ALL$1 },
      { label: "2xx", value: "2" },
      { label: "3xx", value: "3" },
      { label: "4xx", value: "4" },
      { label: "5xx", value: "5" }
    ];
    const onFilterChange = () => {
      page.value = 1;
      refresh();
    };
    const queryParams = computed(() => ({
      page: page.value,
      pageSize: pageSize.value,
      ...search.value ? { search: search.value } : {},
      ...methodFilter.value !== ALL$1 ? { method: methodFilter.value } : {},
      ...statusFilter.value !== ALL$1 ? { status: statusFilter.value } : {}
    }));
    const { data, pending, refresh } = useFetch(
      "/api/admin/access-logs",
      {
        query: queryParams,
        watch: [queryParams],
        lazy: true
      },
      "$vNTx8WMHsH"
      /* nuxt-injected */
    );
    const logs = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.logs) || [];
    });
    const totalItems = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.total) || 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_USelectMenu = _sfc_main$7;
      const _component_UButton = _sfc_main$B;
      const _component_AdminLogsTableCard = __nuxt_component_4;
      const _component_UTable = _sfc_main$h;
      const _component_UBadge = _sfc_main$x;
      _push(`<!--[--><div class="mb-4 flex flex-wrap items-center gap-3"><div class="relative w-64">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:magnifying-glass",
        class: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
      }, null, _parent));
      _push(`<input${ssrRenderAttr("value", search.value)}${ssrRenderAttr("placeholder", _ctx.$t("admin.accessLogs.filter.search"))} class="w-full h-9 pl-9 pr-3 text-sm rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121214] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"></div>`);
      _push(ssrRenderComponent(_component_USelectMenu, {
        modelValue: methodFilter.value,
        "onUpdate:modelValue": [($event) => methodFilter.value = $event, onFilterChange],
        items: methodOptions,
        "value-key": "value",
        class: "w-28",
        size: "sm"
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelectMenu, {
        modelValue: statusFilter.value,
        "onUpdate:modelValue": [($event) => statusFilter.value = $event, onFilterChange],
        items: statusOptions,
        "value-key": "value",
        class: "w-28",
        size: "sm"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrows-clockwise",
        size: "sm",
        onClick: () => unref(refresh)()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("admin.accessLogs.filter.refresh"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("admin.accessLogs.filter.refresh")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_AdminLogsTableCard, {
        page: unref(page),
        "page-size": unref(pageSize),
        total: totalItems.value,
        "row-count": logs.value.length,
        "onUpdate:page": (val) => unref(onPageChange)(val, () => unref(refresh)())
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTable, {
              data: logs.value,
              columns: columns.value,
              loading: unref(pending),
              sticky: ""
            }, {
              "path-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="max-w-xs truncate font-mono text-xs"${ssrRenderAttr("title", row.original.path)}${_scopeId2}>${ssrInterpolate(row.original.path)}</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "max-w-xs truncate font-mono text-xs",
                      title: row.original.path
                    }, toDisplayString(row.original.path), 9, ["title"])
                  ];
                }
              }),
              "method-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: unref(getMethodColor)(row.original.method),
                    variant: "subtle",
                    size: "sm",
                    class: "font-mono"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(row.original.method)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(row.original.method), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UBadge, {
                      color: unref(getMethodColor)(row.original.method),
                      variant: "subtle",
                      size: "sm",
                      class: "font-mono"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.original.method), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "statusCode-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="${ssrRenderClass([unref(getStatusCodeClass)(row.original.statusCode), "font-mono text-xs px-2 py-0.5 rounded"])}"${_scopeId2}>${ssrInterpolate(row.original.statusCode || "-")}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: ["font-mono text-xs px-2 py-0.5 rounded", unref(getStatusCodeClass)(row.original.statusCode)]
                    }, toDisplayString(row.original.statusCode || "-"), 3)
                  ];
                }
              }),
              "duration-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-gray-500 dark:text-gray-400 text-xs font-mono"${_scopeId2}>${ssrInterpolate(row.original.duration != null ? `${row.original.duration.toFixed(0)}ms` : "-")}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-xs font-mono" }, toDisplayString(row.original.duration != null ? `${row.original.duration.toFixed(0)}ms` : "-"), 1)
                  ];
                }
              }),
              "ip-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-xs font-mono text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(row.original.ip || "-")}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-xs font-mono text-gray-500 dark:text-gray-400" }, toDisplayString(row.original.ip || "-"), 1)
                  ];
                }
              }),
              "visitorId-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-xs font-mono text-gray-400"${ssrRenderAttr("title", row.original.visitorId)}${_scopeId2}>${ssrInterpolate(row.original.visitorId ? unref(shortId)(row.original.visitorId) : "-")}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "text-xs font-mono text-gray-400",
                      title: row.original.visitorId
                    }, toDisplayString(row.original.visitorId ? unref(shortId)(row.original.visitorId) : "-"), 9, ["title"])
                  ];
                }
              }),
              "createdAt-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap"${_scopeId2}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTable, {
                data: logs.value,
                columns: columns.value,
                loading: unref(pending),
                sticky: ""
              }, {
                "path-cell": withCtx(({ row }) => [
                  createVNode("div", {
                    class: "max-w-xs truncate font-mono text-xs",
                    title: row.original.path
                  }, toDisplayString(row.original.path), 9, ["title"])
                ]),
                "method-cell": withCtx(({ row }) => [
                  createVNode(_component_UBadge, {
                    color: unref(getMethodColor)(row.original.method),
                    variant: "subtle",
                    size: "sm",
                    class: "font-mono"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(row.original.method), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "statusCode-cell": withCtx(({ row }) => [
                  createVNode("span", {
                    class: ["font-mono text-xs px-2 py-0.5 rounded", unref(getStatusCodeClass)(row.original.statusCode)]
                  }, toDisplayString(row.original.statusCode || "-"), 3)
                ]),
                "duration-cell": withCtx(({ row }) => [
                  createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-xs font-mono" }, toDisplayString(row.original.duration != null ? `${row.original.duration.toFixed(0)}ms` : "-"), 1)
                ]),
                "ip-cell": withCtx(({ row }) => [
                  createVNode("span", { class: "text-xs font-mono text-gray-500 dark:text-gray-400" }, toDisplayString(row.original.ip || "-"), 1)
                ]),
                "visitorId-cell": withCtx(({ row }) => [
                  createVNode("span", {
                    class: "text-xs font-mono text-gray-400",
                    title: row.original.visitorId
                  }, toDisplayString(row.original.visitorId ? unref(shortId)(row.original.visitorId) : "-"), 9, ["title"])
                ]),
                "createdAt-cell": withCtx(({ row }) => [
                  createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
                ]),
                _: 1
              }, 8, ["data", "columns", "loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/logs/AccessTab.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "AdminLogsAccessTab" });
const ALL = "all";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OperationTab",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, te } = useI18n();
    const { formatDateTime } = useFormatTime();
    const { getStatusCodeClass, formatDetails, shortId } = useLogFormatters();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const toast = useToast();
    const { confirm } = useConfirm();
    const columns = computed(() => [
      { accessorKey: "actorName", header: t("admin.operationLogs.table.actor") },
      { accessorKey: "action", header: t("admin.operationLogs.table.action") },
      { accessorKey: "resource", header: t("admin.operationLogs.table.resource") },
      { accessorKey: "target", header: t("admin.operationLogs.table.target") },
      { accessorKey: "statusCode", header: t("admin.operationLogs.table.status") },
      { accessorKey: "ip", header: t("admin.operationLogs.table.ip") },
      { accessorKey: "createdAt", header: t("admin.operationLogs.table.time") },
      { accessorKey: "opActions", header: t("admin.operationLogs.table.actions") }
    ]);
    const { page, pageSize, onPageChange } = usePagination(50);
    const search = ref("");
    const actorTypeFilter = ref(ALL);
    const actionFilter = ref(ALL);
    const resourceFilter = ref(ALL);
    const isDetailsOpen = ref(false);
    const selected = ref(null);
    const cleanupDays = ref(180);
    const isPruning = ref(false);
    const onFilterChange = () => {
      page.value = 1;
      refresh();
    };
    const queryParams = computed(() => ({
      page: page.value,
      pageSize: pageSize.value,
      ...search.value ? { search: search.value } : {},
      ...actorTypeFilter.value !== ALL ? { actorType: actorTypeFilter.value } : {},
      ...actionFilter.value !== ALL ? { action: actionFilter.value } : {},
      ...resourceFilter.value !== ALL ? { resource: resourceFilter.value } : {}
    }));
    const { data, pending, refresh } = useFetch(
      "/api/admin/operation-logs",
      {
        query: queryParams,
        watch: [queryParams],
        lazy: true
      },
      "$PY9SxKn7ew"
      /* nuxt-injected */
    );
    const logs = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.logs) || [];
    });
    const totalItems = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.total) || 0;
    });
    const actionLabel = (action) => {
      if (!action) return "-";
      const key = `admin.operationLogs.action.${action}`;
      return te(key) ? t(key) : action;
    };
    const actorTypeLabel = (actorType) => {
      if (!actorType) return t("admin.operationLogs.actor.unknown");
      const key = `admin.operationLogs.actor.${actorType}`;
      return te(key) ? t(key) : actorType;
    };
    const actorTypeOptions = computed(() => [
      { label: t("admin.operationLogs.filter.allActors"), value: ALL },
      { label: t("admin.operationLogs.actor.admin"), value: "admin" },
      { label: t("admin.operationLogs.actor.user"), value: "user" },
      { label: t("admin.operationLogs.actor.system"), value: "system" }
    ]);
    const resourceOptions = computed(() => {
      var _a, _b;
      return [
        { label: t("admin.operationLogs.filter.allResources"), value: ALL },
        ...(((_b = (_a = data.value) == null ? void 0 : _a.facets) == null ? void 0 : _b.resources) || []).map((r) => ({ label: r, value: r }))
      ];
    });
    const actionOptions = computed(() => {
      var _a, _b;
      return [
        { label: t("admin.operationLogs.filter.allActions"), value: ALL },
        ...(((_b = (_a = data.value) == null ? void 0 : _a.facets) == null ? void 0 : _b.actions) || []).map((a) => ({ label: actionLabel(a), value: a }))
      ];
    });
    const getActorColor = (actorType) => {
      switch (actorType) {
        case "admin":
          return "primary";
        case "user":
          return "success";
        default:
          return "neutral";
      }
    };
    const getActionColor = (action) => {
      switch (action) {
        case "create":
          return "success";
        case "update":
          return "warning";
        case "delete":
        case "clear":
        case "cleanup":
        case "loginFailed":
          return "error";
        case "login":
        case "logout":
          return "primary";
        default:
          return "neutral";
      }
    };
    const viewOperation = (log) => {
      selected.value = log;
      isDetailsOpen.value = true;
    };
    const pruneLogs = async () => {
      var _a;
      const isConfirmed = await confirm({
        title: t("admin.operationLogs.cleanup.confirmTitle"),
        description: t("admin.operationLogs.cleanup.confirmMessage", { days: cleanupDays.value })
      });
      if (!isConfirmed) return;
      isPruning.value = true;
      try {
        const result = await $fetch("/api/admin/operation-logs/cleanup", {
          method: "POST",
          body: { days: cleanupDays.value }
        });
        toast.add({
          title: t("admin.operationLogs.cleanup.success", { count: result.deletedCount }),
          color: "success"
        });
        page.value = 1;
        refresh();
      } catch (e) {
        toast.add({
          title: t("admin.operationLogs.cleanup.error"),
          description: (_a = e.data) == null ? void 0 : _a.message,
          color: "error"
        });
      } finally {
        isPruning.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = _sfc_main$k;
      const _component_UButton = _sfc_main$B;
      const _component_Icon = __nuxt_component_0$1;
      const _component_USelectMenu = _sfc_main$7;
      const _component_AdminLogsTableCard = __nuxt_component_4;
      const _component_UTable = _sfc_main$h;
      const _component_UBadge = _sfc_main$x;
      const _component_UModal = _sfc_main$s;
      const _component_UCard = _sfc_main$6;
      const _component_UIcon = _sfc_main$G;
      _push(`<!--[-->`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(hasAdminPerm)("logs:edit")) {
          _push2(`<div class="flex items-end gap-2"><div class="flex flex-col gap-1"><span class="text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.operationLogs.cleanup.keepDays"))}</span>`);
          _push2(ssrRenderComponent(_component_UInput, {
            modelValue: cleanupDays.value,
            "onUpdate:modelValue": ($event) => cleanupDays.value = $event,
            modelModifiers: { number: true },
            type: "number",
            min: 30,
            max: 730,
            size: "sm",
            class: "w-24"
          }, null, _parent));
          _push2(`</div>`);
          _push2(ssrRenderComponent(_component_UButton, {
            color: "error",
            variant: "outline",
            icon: "ph:broom",
            size: "sm",
            loading: isPruning.value,
            onClick: pruneLogs
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.$t("admin.operationLogs.filter.cleanup"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.operationLogs.filter.cleanup")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "#logs-header-actions", false, _parent);
      _push(`<div class="mb-4 flex flex-wrap items-center gap-3"><div class="relative w-64">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:magnifying-glass",
        class: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
      }, null, _parent));
      _push(`<input${ssrRenderAttr("value", search.value)}${ssrRenderAttr("placeholder", _ctx.$t("admin.operationLogs.filter.search"))} class="w-full h-9 pl-9 pr-3 text-sm rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121214] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"></div>`);
      _push(ssrRenderComponent(_component_USelectMenu, {
        modelValue: actorTypeFilter.value,
        "onUpdate:modelValue": [($event) => actorTypeFilter.value = $event, onFilterChange],
        items: actorTypeOptions.value,
        "value-key": "value",
        class: "w-36",
        size: "sm"
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelectMenu, {
        modelValue: resourceFilter.value,
        "onUpdate:modelValue": [($event) => resourceFilter.value = $event, onFilterChange],
        items: resourceOptions.value,
        "value-key": "value",
        class: "w-40",
        size: "sm"
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelectMenu, {
        modelValue: actionFilter.value,
        "onUpdate:modelValue": [($event) => actionFilter.value = $event, onFilterChange],
        items: actionOptions.value,
        "value-key": "value",
        class: "w-40",
        size: "sm"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrows-clockwise",
        size: "sm",
        onClick: () => unref(refresh)()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("admin.operationLogs.filter.refresh"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("admin.operationLogs.filter.refresh")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_AdminLogsTableCard, {
        page: unref(page),
        "page-size": unref(pageSize),
        total: totalItems.value,
        "row-count": logs.value.length,
        "onUpdate:page": (val) => unref(onPageChange)(val, () => unref(refresh)())
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTable, {
              data: logs.value,
              columns: columns.value,
              loading: unref(pending),
              sticky: ""
            }, {
              "actorName-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: getActorColor(row.original.actorType),
                    variant: "subtle",
                    size: "sm"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(actorTypeLabel(row.original.actorType))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(actorTypeLabel(row.original.actorType)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<span class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(row.original.actorName || _ctx.$t("admin.operationLogs.actor.unknown"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UBadge, {
                        color: getActorColor(row.original.actorType),
                        variant: "subtle",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(actorTypeLabel(row.original.actorType)), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"]),
                      createVNode("span", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(row.original.actorName || _ctx.$t("admin.operationLogs.actor.unknown")), 1)
                    ])
                  ];
                }
              }),
              "action-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: getActionColor(row.original.action),
                    variant: "subtle",
                    size: "sm",
                    class: "font-semibold"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(actionLabel(row.original.action))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(actionLabel(row.original.action)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UBadge, {
                      color: getActionColor(row.original.action),
                      variant: "subtle",
                      size: "sm",
                      class: "font-semibold"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(actionLabel(row.original.action)), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "resource-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-xs text-gray-500 font-mono bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded"${_scopeId2}>${ssrInterpolate(row.original.resource)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-xs text-gray-500 font-mono bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded" }, toDisplayString(row.original.resource), 1)
                  ];
                }
              }),
              "target-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-0.5 max-w-xs"${_scopeId2}>`);
                  if (row.original.summary) {
                    _push3(`<span class="text-sm text-gray-900 dark:text-white line-clamp-1"${ssrRenderAttr("title", row.original.summary)}${_scopeId2}>${ssrInterpolate(row.original.summary)}</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span class="text-xs font-mono text-gray-400 truncate"${ssrRenderAttr("title", `${row.original.method} ${row.original.path}`)}${_scopeId2}>${ssrInterpolate(row.original.resourceId ? `#${unref(shortId)(row.original.resourceId)}` : row.original.path)}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-0.5 max-w-xs" }, [
                      row.original.summary ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-sm text-gray-900 dark:text-white line-clamp-1",
                        title: row.original.summary
                      }, toDisplayString(row.original.summary), 9, ["title"])) : createCommentVNode("", true),
                      createVNode("span", {
                        class: "text-xs font-mono text-gray-400 truncate",
                        title: `${row.original.method} ${row.original.path}`
                      }, toDisplayString(row.original.resourceId ? `#${unref(shortId)(row.original.resourceId)}` : row.original.path), 9, ["title"])
                    ])
                  ];
                }
              }),
              "statusCode-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="${ssrRenderClass([unref(getStatusCodeClass)(row.original.statusCode), "font-mono text-xs px-2 py-0.5 rounded"])}"${_scopeId2}>${ssrInterpolate(row.original.statusCode || "-")}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: ["font-mono text-xs px-2 py-0.5 rounded", unref(getStatusCodeClass)(row.original.statusCode)]
                    }, toDisplayString(row.original.statusCode || "-"), 3)
                  ];
                }
              }),
              "ip-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-xs font-mono text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(row.original.ip || "-")}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-xs font-mono text-gray-500 dark:text-gray-400" }, toDisplayString(row.original.ip || "-"), 1)
                  ];
                }
              }),
              "createdAt-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap"${_scopeId2}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
                  ];
                }
              }),
              "opActions-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:eye",
                    size: "sm",
                    onClick: ($event) => viewOperation(row.original)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "ph:eye",
                      size: "sm",
                      onClick: ($event) => viewOperation(row.original)
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTable, {
                data: logs.value,
                columns: columns.value,
                loading: unref(pending),
                sticky: ""
              }, {
                "actorName-cell": withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UBadge, {
                      color: getActorColor(row.original.actorType),
                      variant: "subtle",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(actorTypeLabel(row.original.actorType)), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"]),
                    createVNode("span", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(row.original.actorName || _ctx.$t("admin.operationLogs.actor.unknown")), 1)
                  ])
                ]),
                "action-cell": withCtx(({ row }) => [
                  createVNode(_component_UBadge, {
                    color: getActionColor(row.original.action),
                    variant: "subtle",
                    size: "sm",
                    class: "font-semibold"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(actionLabel(row.original.action)), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "resource-cell": withCtx(({ row }) => [
                  createVNode("span", { class: "text-xs text-gray-500 font-mono bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded" }, toDisplayString(row.original.resource), 1)
                ]),
                "target-cell": withCtx(({ row }) => [
                  createVNode("div", { class: "flex flex-col gap-0.5 max-w-xs" }, [
                    row.original.summary ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-sm text-gray-900 dark:text-white line-clamp-1",
                      title: row.original.summary
                    }, toDisplayString(row.original.summary), 9, ["title"])) : createCommentVNode("", true),
                    createVNode("span", {
                      class: "text-xs font-mono text-gray-400 truncate",
                      title: `${row.original.method} ${row.original.path}`
                    }, toDisplayString(row.original.resourceId ? `#${unref(shortId)(row.original.resourceId)}` : row.original.path), 9, ["title"])
                  ])
                ]),
                "statusCode-cell": withCtx(({ row }) => [
                  createVNode("span", {
                    class: ["font-mono text-xs px-2 py-0.5 rounded", unref(getStatusCodeClass)(row.original.statusCode)]
                  }, toDisplayString(row.original.statusCode || "-"), 3)
                ]),
                "ip-cell": withCtx(({ row }) => [
                  createVNode("span", { class: "text-xs font-mono text-gray-500 dark:text-gray-400" }, toDisplayString(row.original.ip || "-"), 1)
                ]),
                "createdAt-cell": withCtx(({ row }) => [
                  createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
                ]),
                "opActions-cell": withCtx(({ row }) => [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:eye",
                    size: "sm",
                    onClick: ($event) => viewOperation(row.original)
                  }, null, 8, ["onClick"])
                ]),
                _: 1
              }, 8, ["data", "columns", "loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: isDetailsOpen.value,
        "onUpdate:open": ($event) => isDetailsOpen.value = $event
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { class: "bg-white dark:bg-[#121214] ring-1 ring-gray-200 dark:ring-gray-800" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:clipboard-text",
                    class: "w-5 h-5 text-gray-500 dark:text-gray-400"
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(_ctx.$t("admin.operationLogs.detail.title"))}</h3>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    class: "-my-1",
                    onClick: ($event) => isDetailsOpen.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("h3", { class: "text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:clipboard-text",
                          class: "w-5 h-5 text-gray-500 dark:text-gray-400"
                        }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("admin.operationLogs.detail.title")), 1)
                      ]),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        icon: "ph:x",
                        class: "-my-1",
                        onClick: ($event) => isDetailsOpen.value = false
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
                if (_push3) {
                  _push3(`<div class="space-y-4"${_scopeId2}>`);
                  if ((_a = selected.value) == null ? void 0 : _a.summary) {
                    _push3(`<div${_scopeId2}><div class="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.operationLogs.detail.summary"))}</div><div class="text-gray-900 dark:text-white text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-800"${_scopeId2}>${ssrInterpolate(selected.value.summary)}</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div${_scopeId2}><div class="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.operationLogs.detail.payload"))}</div><div class="bg-black p-4 rounded-lg border border-gray-200 dark:border-gray-800 overflow-y-auto max-h-96"${_scopeId2}><pre class="text-xs font-mono text-gray-500 dark:text-gray-300 whitespace-pre-wrap"${_scopeId2}>${ssrInterpolate(unref(formatDetails)((_b = selected.value) == null ? void 0 : _b.details) || _ctx.$t("admin.operationLogs.detail.noDetails"))}</pre></div></div><div class="grid grid-cols-2 gap-4"${_scopeId2}><div${_scopeId2}><div class="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.operationLogs.detail.actor"))}</div><div class="text-sm text-gray-500 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(actorTypeLabel((_c = selected.value) == null ? void 0 : _c.actorType))} \xB7 ${ssrInterpolate(((_d = selected.value) == null ? void 0 : _d.actorName) || _ctx.$t("admin.operationLogs.actor.unknown"))}</div></div><div${_scopeId2}><div class="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.operationLogs.detail.time"))}</div><div class="text-sm text-gray-500 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(selected.value ? unref(formatDateTime)(selected.value.createdAt) : "")}</div></div><div class="col-span-2"${_scopeId2}><div class="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.operationLogs.detail.request"))}</div><div class="text-sm font-mono text-gray-500 dark:text-gray-300 break-all"${_scopeId2}>${ssrInterpolate((_e = selected.value) == null ? void 0 : _e.method)} ${ssrInterpolate((_f = selected.value) == null ? void 0 : _f.path)} `);
                  if ((_g = selected.value) == null ? void 0 : _g.statusCode) {
                    _push3(`<span${_scopeId2}> \u2192 ${ssrInterpolate(selected.value.statusCode)}</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div${_scopeId2}><div class="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.operationLogs.detail.ip"))}</div><div class="text-sm text-gray-500 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(((_h = selected.value) == null ? void 0 : _h.ip) || "-")}</div></div><div${_scopeId2}><div class="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.operationLogs.detail.userAgent"))}</div><div class="text-xs text-gray-500 dark:text-gray-300 line-clamp-2"${ssrRenderAttr("title", (_i = selected.value) == null ? void 0 : _i.userAgent)}${_scopeId2}>${ssrInterpolate(((_j = selected.value) == null ? void 0 : _j.userAgent) || "-")}</div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4" }, [
                      ((_k = selected.value) == null ? void 0 : _k.summary) ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.operationLogs.detail.summary")), 1),
                        createVNode("div", { class: "text-gray-900 dark:text-white text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-800" }, toDisplayString(selected.value.summary), 1)
                      ])) : createCommentVNode("", true),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.operationLogs.detail.payload")), 1),
                        createVNode("div", { class: "bg-black p-4 rounded-lg border border-gray-200 dark:border-gray-800 overflow-y-auto max-h-96" }, [
                          createVNode("pre", { class: "text-xs font-mono text-gray-500 dark:text-gray-300 whitespace-pre-wrap" }, toDisplayString(unref(formatDetails)((_l = selected.value) == null ? void 0 : _l.details) || _ctx.$t("admin.operationLogs.detail.noDetails")), 1)
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.operationLogs.detail.actor")), 1),
                          createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-300" }, toDisplayString(actorTypeLabel((_m = selected.value) == null ? void 0 : _m.actorType)) + " \xB7 " + toDisplayString(((_n = selected.value) == null ? void 0 : _n.actorName) || _ctx.$t("admin.operationLogs.actor.unknown")), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.operationLogs.detail.time")), 1),
                          createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-300" }, toDisplayString(selected.value ? unref(formatDateTime)(selected.value.createdAt) : ""), 1)
                        ]),
                        createVNode("div", { class: "col-span-2" }, [
                          createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.operationLogs.detail.request")), 1),
                          createVNode("div", { class: "text-sm font-mono text-gray-500 dark:text-gray-300 break-all" }, [
                            createTextVNode(toDisplayString((_o = selected.value) == null ? void 0 : _o.method) + " " + toDisplayString((_p = selected.value) == null ? void 0 : _p.path) + " ", 1),
                            ((_q = selected.value) == null ? void 0 : _q.statusCode) ? (openBlock(), createBlock("span", { key: 0 }, " \u2192 " + toDisplayString(selected.value.statusCode), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.operationLogs.detail.ip")), 1),
                          createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-300" }, toDisplayString(((_r = selected.value) == null ? void 0 : _r.ip) || "-"), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.operationLogs.detail.userAgent")), 1),
                          createVNode("div", {
                            class: "text-xs text-gray-500 dark:text-gray-300 line-clamp-2",
                            title: (_s = selected.value) == null ? void 0 : _s.userAgent
                          }, toDisplayString(((_t = selected.value) == null ? void 0 : _t.userAgent) || "-"), 9, ["title"])
                        ])
                      ])
                    ])
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
                    createVNode("h3", { class: "text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:clipboard-text",
                        class: "w-5 h-5 text-gray-500 dark:text-gray-400"
                      }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("admin.operationLogs.detail.title")), 1)
                    ]),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "ph:x",
                      class: "-my-1",
                      onClick: ($event) => isDetailsOpen.value = false
                    }, null, 8, ["onClick"])
                  ])
                ]),
                default: withCtx(() => {
                  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
                  return [
                    createVNode("div", { class: "space-y-4" }, [
                      ((_a = selected.value) == null ? void 0 : _a.summary) ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.operationLogs.detail.summary")), 1),
                        createVNode("div", { class: "text-gray-900 dark:text-white text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-800" }, toDisplayString(selected.value.summary), 1)
                      ])) : createCommentVNode("", true),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.operationLogs.detail.payload")), 1),
                        createVNode("div", { class: "bg-black p-4 rounded-lg border border-gray-200 dark:border-gray-800 overflow-y-auto max-h-96" }, [
                          createVNode("pre", { class: "text-xs font-mono text-gray-500 dark:text-gray-300 whitespace-pre-wrap" }, toDisplayString(unref(formatDetails)((_b = selected.value) == null ? void 0 : _b.details) || _ctx.$t("admin.operationLogs.detail.noDetails")), 1)
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.operationLogs.detail.actor")), 1),
                          createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-300" }, toDisplayString(actorTypeLabel((_c = selected.value) == null ? void 0 : _c.actorType)) + " \xB7 " + toDisplayString(((_d = selected.value) == null ? void 0 : _d.actorName) || _ctx.$t("admin.operationLogs.actor.unknown")), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.operationLogs.detail.time")), 1),
                          createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-300" }, toDisplayString(selected.value ? unref(formatDateTime)(selected.value.createdAt) : ""), 1)
                        ]),
                        createVNode("div", { class: "col-span-2" }, [
                          createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.operationLogs.detail.request")), 1),
                          createVNode("div", { class: "text-sm font-mono text-gray-500 dark:text-gray-300 break-all" }, [
                            createTextVNode(toDisplayString((_e = selected.value) == null ? void 0 : _e.method) + " " + toDisplayString((_f = selected.value) == null ? void 0 : _f.path) + " ", 1),
                            ((_g = selected.value) == null ? void 0 : _g.statusCode) ? (openBlock(), createBlock("span", { key: 0 }, " \u2192 " + toDisplayString(selected.value.statusCode), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.operationLogs.detail.ip")), 1),
                          createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-300" }, toDisplayString(((_h = selected.value) == null ? void 0 : _h.ip) || "-"), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold" }, toDisplayString(_ctx.$t("admin.operationLogs.detail.userAgent")), 1),
                          createVNode("div", {
                            class: "text-xs text-gray-500 dark:text-gray-300 line-clamp-2",
                            title: (_i = selected.value) == null ? void 0 : _i.userAgent
                          }, toDisplayString(((_j = selected.value) == null ? void 0 : _j.userAgent) || "-"), 9, ["title"])
                        ])
                      ])
                    ])
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/logs/OperationTab.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "AdminLogsOperationTab" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "logs",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    const TABS = ["system", "access", "operation"];
    const tab = ref(
      TABS.includes(route.query.tab) ? route.query.tab : "system"
    );
    const TAB_I18N_ROOT = {
      system: "admin.logs",
      access: "admin.accessLogs",
      operation: "admin.operationLogs"
    };
    const tabItems = computed(() => [
      { label: t("admin.logs.page.title"), icon: "ph:terminal-window", value: "system" },
      { label: t("admin.accessLogs.page.title"), icon: "ph:binoculars", value: "access" },
      { label: t("admin.operationLogs.page.title"), icon: "ph:clipboard-text", value: "operation" }
    ]);
    const headerTitle = computed(() => t(`${TAB_I18N_ROOT[tab.value]}.page.title`));
    const headerSubtitle = computed(() => t(`${TAB_I18N_ROOT[tab.value]}.page.subtitle`));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTabs = _sfc_main$5;
      const _component_AdminLogsSystemTab = __nuxt_component_1;
      const _component_AdminLogsAccessTab = __nuxt_component_2;
      const _component_AdminLogsOperationTab = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh-7rem)] flex flex-col" }, _attrs))}><div class="flex justify-between items-end mb-8 shrink-0"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(headerTitle.value)}</h1><p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">${ssrInterpolate(headerSubtitle.value)}</p></div><div id="logs-header-actions"></div></div>`);
      _push(ssrRenderComponent(_component_UTabs, {
        modelValue: tab.value,
        "onUpdate:modelValue": ($event) => tab.value = $event,
        items: tabItems.value,
        class: "mb-4"
      }, null, _parent));
      if (tab.value === "system") {
        _push(ssrRenderComponent(_component_AdminLogsSystemTab, null, null, _parent));
      } else if (tab.value === "access") {
        _push(ssrRenderComponent(_component_AdminLogsAccessTab, null, null, _parent));
      } else if (tab.value === "operation") {
        _push(ssrRenderComponent(_component_AdminLogsOperationTab, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/logs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
