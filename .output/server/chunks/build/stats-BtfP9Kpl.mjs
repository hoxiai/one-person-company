import { e as useI18n, f as useFormatTime, r as useRouter, y as useFetch, x as usePagination, s as useConfirm, h as useAdminPermissions, k as _sfc_main$z, b as _sfc_main$E, d as _sfc_main$i, n as _sfc_main$v, z as _sfc_main$l, g as useToast, p as _sfc_main$q } from './server.mjs';
import { _ as _sfc_main$5 } from './Card-CJk-M81W.mjs';
import { _ as __nuxt_component_7$1 } from './FullScreenModal-C_oQJW_c.mjs';
import { defineComponent, ref, computed, watch, unref, withCtx, createTextVNode, toDisplayString, isRef, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, mergeProps, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DetailSection",
  __ssrInlineRender: true,
  props: {
    title: {},
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$E;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-black/10" }, _attrs))}><h4 class="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: __props.icon,
        class: "h-4 w-4 text-purple-500"
      }, null, _parent));
      _push(`${ssrInterpolate(__props.title)}</h4>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/stats/DetailSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$4, { __name: "AdminStatsDetailSection" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DetailField",
  __ssrInlineRender: true,
  props: {
    label: {},
    value: {},
    copyable: { type: Boolean }
  },
  emits: ["copy"],
  setup(__props) {
    const props = __props;
    const displayValue = computed(() => props.value === null || props.value === void 0 || props.value === "" ? "-" : String(props.value));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-w-0" }, _attrs))}><div class="text-[11px] font-medium uppercase tracking-wide text-gray-500">${ssrInterpolate(__props.label)}</div>`);
      if (__props.copyable && unref(displayValue) !== "-") {
        _push(`<button type="button" class="mt-1 max-w-full break-all text-left font-mono text-xs text-gray-900 hover:text-purple-500 dark:text-gray-200">${ssrInterpolate(unref(displayValue))}</button>`);
      } else {
        _push(`<div class="mt-1 break-all text-sm text-gray-900 dark:text-gray-200">${ssrInterpolate(unref(displayValue))}</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/stats/DetailField.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$3, { __name: "AdminStatsDetailField" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VisitorDetailModal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    visitorId: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useI18n();
    const { formatDateTime } = useFormatTime();
    const toast = useToast();
    const isOpen = computed({ get: () => props.open, set: (value) => emit("update:open", value) });
    const detail = ref(null);
    const pending = ref(false);
    const errorMessage = ref("");
    const location = (input) => [input.city, input.region, input.country].filter(Boolean).join(" / ") || "-";
    const load = async () => {
      var _a;
      if (!props.visitorId) return;
      pending.value = true;
      errorMessage.value = "";
      detail.value = null;
      try {
        detail.value = await $fetch(`/api/admin/stats/visitors/${encodeURIComponent(props.visitorId)}`);
      } catch (error) {
        errorMessage.value = ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.statusMessage) || (error == null ? void 0 : error.message) || t("admin.stats.visitorDetail.loadError");
      } finally {
        pending.value = false;
      }
    };
    watch(() => [props.open, props.visitorId], ([open]) => {
      if (open) load();
    });
    const statCards = computed(() => detail.value ? [
      { label: t("admin.stats.visitorDetail.totalEvents"), value: detail.value.stats.totalEvents, class: "text-gray-900 dark:text-white" },
      { label: t("admin.stats.pageViews"), value: detail.value.stats.pageViews, class: "text-cyan-500" },
      { label: t("admin.stats.productVisitors"), value: detail.value.stats.productViews, class: "text-blue-500" },
      { label: t("admin.stats.checkout"), value: detail.value.stats.checkouts, class: "text-amber-500" },
      { label: t("admin.stats.paid"), value: detail.value.stats.paid, class: "text-emerald-500" },
      { label: "Auth", value: detail.value.stats.auth, class: "text-pink-500" },
      { label: t("admin.stats.visitorDetail.orders"), value: detail.value.stats.orders, class: "text-purple-500" }
    ] : []);
    const identityFields = computed(() => {
      var _a, _b, _c, _d;
      return detail.value ? [
        { label: t("admin.stats.visitorDetail.visitorId"), value: detail.value.profile.visitorId, copyable: true },
        { label: t("admin.stats.ip"), value: detail.value.profile.ip, copyable: true },
        { label: t("admin.stats.visitorDetail.userId"), value: (_a = detail.value.user) == null ? void 0 : _a.id },
        { label: t("admin.stats.visitorDetail.email"), value: (_b = detail.value.user) == null ? void 0 : _b.email },
        { label: t("admin.stats.visitorDetail.nickname"), value: (_c = detail.value.user) == null ? void 0 : _c.nickname },
        {
          label: t("admin.stats.visitorDetail.accountStatus"),
          value: detail.value.user ? t(detail.value.user.status === 1 ? "admin.stats.visitorDetail.statusActive" : "admin.stats.visitorDetail.statusDisabled") : void 0
        },
        { label: t("admin.stats.firstSeen"), value: formatDateTime(detail.value.profile.firstSeenAt) },
        { label: t("admin.stats.lastSeen"), value: formatDateTime(detail.value.profile.lastSeenAt) },
        { label: t("admin.stats.visitorDetail.registeredAt"), value: ((_d = detail.value.user) == null ? void 0 : _d.createdAt) ? formatDateTime(detail.value.user.createdAt) : "-" }
      ] : [];
    });
    const deviceFields = computed(() => detail.value ? [
      { label: t("admin.stats.country"), value: detail.value.profile.country },
      { label: t("admin.stats.region"), value: detail.value.profile.region },
      { label: t("admin.stats.visitorDetail.city"), value: detail.value.profile.city },
      { label: t("admin.stats.device"), value: detail.value.profile.deviceType },
      { label: t("admin.stats.browser"), value: detail.value.profile.browser },
      { label: t("admin.stats.os"), value: detail.value.profile.os },
      { label: t("admin.stats.visitorDetail.locale"), value: detail.value.profile.locale },
      { label: t("admin.stats.visitorDetail.currency"), value: detail.value.profile.currency }
    ] : []);
    const touchFields = (prefix) => {
      var _a;
      const profile = (_a = detail.value) == null ? void 0 : _a.profile;
      if (!profile) return [];
      const key = (suffix) => profile[`${prefix}${suffix}`];
      return [
        { label: t("admin.stats.visitorDetail.sourceType"), value: key("SourceType") },
        { label: t("admin.stats.source"), value: key("Source") },
        { label: t("admin.stats.visitorDetail.medium"), value: key("Medium") },
        { label: t("admin.stats.visitorDetail.campaign"), value: key("Campaign") },
        { label: t("admin.stats.visitorDetail.content"), value: key("Content") },
        { label: t("admin.stats.visitorDetail.term"), value: key("Term") },
        { label: t("admin.stats.path"), value: prefix === "first" ? profile.firstPath || profile.landingPath : profile.lastPath },
        { label: t("admin.stats.referrer"), value: key("Referrer") }
      ];
    };
    const firstTouchFields = computed(() => touchFields("first"));
    const lastTouchFields = computed(() => touchFields("last"));
    const eventLabel = (eventName) => {
      const keys = { page_view: "pageView", product_view: "productView", begin_checkout: "beginCheckout", order_paid: "orderPaid", auth: "login" };
      return keys[eventName] ? t(`admin.stats.${keys[eventName]}`) : eventName;
    };
    const copy = async (text) => {
      if (!text) return;
      await (void 0).clipboard.writeText(text);
      toast.add({ title: t("admin.stats.visitorDetail.copied"), color: "success" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$q;
      const _component_UCard = _sfc_main$5;
      const _component_UIcon = _sfc_main$E;
      const _component_UBadge = _sfc_main$v;
      const _component_UButton = _sfc_main$z;
      const _component_AdminStatsDetailSection = __nuxt_component_4;
      const _component_AdminStatsDetailField = __nuxt_component_5;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        ui: { content: "sm:max-w-6xl" }
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { class: "max-h-[90vh] overflow-hidden bg-white ring-1 ring-gray-200 dark:bg-[#121214] dark:ring-gray-800" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<div class="flex items-start justify-between gap-4"${_scopeId2}><div class="min-w-0"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:user-focus",
                    class: "h-5 w-5 shrink-0 text-purple-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`<h3 class="text-lg font-semibold text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.title"))}</h3>`);
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: ((_a = unref(detail)) == null ? void 0 : _a.user) ? "success" : "neutral",
                    variant: "subtle",
                    size: "xs"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2;
                      if (_push4) {
                        _push4(`${ssrInterpolate(((_a2 = unref(detail)) == null ? void 0 : _a2.user) ? unref(t)("admin.stats.visitorDetail.registered") : unref(t)("admin.stats.visitorDetail.anonymous"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(((_b2 = unref(detail)) == null ? void 0 : _b2.user) ? unref(t)("admin.stats.visitorDetail.registered") : unref(t)("admin.stats.visitorDetail.anonymous")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (__props.visitorId) {
                    _push3(`<button type="button" class="mt-1 max-w-full truncate font-mono text-xs text-gray-500 hover:text-purple-500"${ssrRenderAttr("title", unref(t)("admin.stats.visitorDetail.copy"))}${_scopeId2}>${ssrInterpolate(__props.visitorId)}</button>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    onClick: ($event) => isOpen.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-start justify-between gap-4" }, [
                      createVNode("div", { class: "min-w-0" }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:user-focus",
                            class: "h-5 w-5 shrink-0 text-purple-500"
                          }),
                          createVNode("h3", { class: "text-lg font-semibold text-gray-900 dark:text-white" }, toDisplayString(unref(t)("admin.stats.visitorDetail.title")), 1),
                          createVNode(_component_UBadge, {
                            color: ((_b = unref(detail)) == null ? void 0 : _b.user) ? "success" : "neutral",
                            variant: "subtle",
                            size: "xs"
                          }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode(toDisplayString(((_a2 = unref(detail)) == null ? void 0 : _a2.user) ? unref(t)("admin.stats.visitorDetail.registered") : unref(t)("admin.stats.visitorDetail.anonymous")), 1)
                              ];
                            }),
                            _: 1
                          }, 8, ["color"])
                        ]),
                        __props.visitorId ? (openBlock(), createBlock("button", {
                          key: 0,
                          type: "button",
                          class: "mt-1 max-w-full truncate font-mono text-xs text-gray-500 hover:text-purple-500",
                          title: unref(t)("admin.stats.visitorDetail.copy"),
                          onClick: ($event) => copy(__props.visitorId)
                        }, toDisplayString(__props.visitorId), 9, ["title", "onClick"])) : createCommentVNode("", true)
                      ]),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        icon: "ph:x",
                        onClick: ($event) => isOpen.value = false
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="max-h-[calc(90vh-8rem)] overflow-y-auto pr-1"${_scopeId2}>`);
                  if (unref(pending)) {
                    _push3(`<div class="flex min-h-72 items-center justify-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:spinner-gap",
                      class: "h-7 w-7 animate-spin text-purple-500"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (unref(errorMessage)) {
                    _push3(`<div class="flex min-h-72 flex-col items-center justify-center gap-3 text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:warning-circle",
                      class: "h-9 w-9 text-red-500"
                    }, null, _parent3, _scopeId2));
                    _push3(`<p class="text-sm text-gray-500"${_scopeId2}>${ssrInterpolate(unref(errorMessage))}</p>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "neutral",
                      variant: "outline",
                      icon: "ph:arrows-clockwise",
                      onClick: load
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(t)("admin.stats.refresh"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(t)("admin.stats.refresh")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (unref(detail)) {
                    _push3(`<div class="space-y-6"${_scopeId2}><div class="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(statCards), (card) => {
                      _push3(`<div class="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 dark:border-gray-800 dark:bg-black/20"${_scopeId2}><div class="text-xs text-gray-500"${_scopeId2}>${ssrInterpolate(card.label)}</div><div class="${ssrRenderClass([card.class, "mt-1 text-lg font-semibold tabular-nums"])}"${_scopeId2}>${ssrInterpolate(card.value)}</div></div>`);
                    });
                    _push3(`<!--]--></div>`);
                    _push3(ssrRenderComponent(_component_AdminStatsDetailSection, {
                      title: unref(t)("admin.stats.visitorDetail.identity"),
                      icon: "ph:identification-card"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"${_scopeId3}><!--[-->`);
                          ssrRenderList(unref(identityFields), (field) => {
                            _push4(ssrRenderComponent(_component_AdminStatsDetailField, {
                              key: field.label,
                              label: field.label,
                              value: field.value,
                              copyable: field.copyable,
                              onCopy: copy
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(identityFields), (field) => {
                                return openBlock(), createBlock(_component_AdminStatsDetailField, {
                                  key: field.label,
                                  label: field.label,
                                  value: field.value,
                                  copyable: field.copyable,
                                  onCopy: copy
                                }, null, 8, ["label", "value", "copyable"]);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_AdminStatsDetailSection, {
                      title: unref(t)("admin.stats.visitorDetail.locationDevice"),
                      icon: "ph:devices"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"${_scopeId3}><!--[-->`);
                          ssrRenderList(unref(deviceFields), (field) => {
                            _push4(ssrRenderComponent(_component_AdminStatsDetailField, {
                              key: field.label,
                              label: field.label,
                              value: field.value
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div><div class="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_AdminStatsDetailField, {
                            label: unref(t)("admin.stats.visitorDetail.userAgent"),
                            value: unref(detail).profile.userAgent
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(deviceFields), (field) => {
                                return openBlock(), createBlock(_component_AdminStatsDetailField, {
                                  key: field.label,
                                  label: field.label,
                                  value: field.value
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ]),
                            createVNode("div", { class: "mt-4 border-t border-gray-200 pt-4 dark:border-gray-800" }, [
                              createVNode(_component_AdminStatsDetailField, {
                                label: unref(t)("admin.stats.visitorDetail.userAgent"),
                                value: unref(detail).profile.userAgent
                              }, null, 8, ["label", "value"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="grid gap-6 lg:grid-cols-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_AdminStatsDetailSection, {
                      title: unref(t)("admin.stats.visitorDetail.firstTouch"),
                      icon: "ph:arrow-line-down-left"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="space-y-3"${_scopeId3}><!--[-->`);
                          ssrRenderList(unref(firstTouchFields), (field) => {
                            _push4(ssrRenderComponent(_component_AdminStatsDetailField, {
                              key: field.label,
                              label: field.label,
                              value: field.value
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "space-y-3" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(firstTouchFields), (field) => {
                                return openBlock(), createBlock(_component_AdminStatsDetailField, {
                                  key: field.label,
                                  label: field.label,
                                  value: field.value
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_AdminStatsDetailSection, {
                      title: unref(t)("admin.stats.visitorDetail.lastTouch"),
                      icon: "ph:arrow-line-up-right"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="space-y-3"${_scopeId3}><!--[-->`);
                          ssrRenderList(unref(lastTouchFields), (field) => {
                            _push4(ssrRenderComponent(_component_AdminStatsDetailField, {
                              key: field.label,
                              label: field.label,
                              value: field.value
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "space-y-3" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(lastTouchFields), (field) => {
                                return openBlock(), createBlock(_component_AdminStatsDetailField, {
                                  key: field.label,
                                  label: field.label,
                                  value: field.value
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_AdminStatsDetailSection, {
                      title: `${unref(t)("admin.stats.visitorDetail.orders")} (${unref(detail).stats.orders})`,
                      icon: "ph:receipt"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (!unref(detail).orders.length) {
                            _push4(`<div class="py-8 text-center text-sm text-gray-500"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.noOrders"))}</div>`);
                          } else {
                            _push4(`<div class="overflow-x-auto"${_scopeId3}><table class="min-w-full text-sm"${_scopeId3}><thead${_scopeId3}><tr class="border-b border-gray-200 text-left text-xs text-gray-500 dark:border-gray-800"${_scopeId3}><th class="pb-2 pr-4"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.orderId"))}</th><th class="pb-2 pr-4"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.product"))}</th><th class="pb-2 pr-4"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.amount"))}</th><th class="pb-2 pr-4"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.status"))}</th><th class="pb-2"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.time"))}</th></tr></thead><tbody${_scopeId3}><!--[-->`);
                            ssrRenderList(unref(detail).orders, (order) => {
                              _push4(`<tr class="border-b border-gray-100 dark:border-gray-900"${_scopeId3}><td class="py-2.5 pr-4 font-mono text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(order.id)}</td><td class="py-2.5 pr-4 text-gray-900 dark:text-white"${_scopeId3}>${ssrInterpolate(order.productName || "-")}</td><td class="py-2.5 pr-4 tabular-nums"${_scopeId3}>${ssrInterpolate(order.amount)} ${ssrInterpolate(order.currency)}</td><td class="py-2.5 pr-4"${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_UBadge, {
                                color: order.payStatus === "paid" ? "success" : "neutral",
                                variant: "subtle",
                                size: "xs"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(order.payStatus)} \xB7 ${ssrInterpolate(order.status)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(order.payStatus) + " \xB7 " + toDisplayString(order.status), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</td><td class="py-2.5 text-xs text-gray-500 whitespace-nowrap"${_scopeId3}>${ssrInterpolate(unref(formatDateTime)(order.createdAt))}</td></tr>`);
                            });
                            _push4(`<!--]--></tbody></table></div>`);
                          }
                        } else {
                          return [
                            !unref(detail).orders.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "py-8 text-center text-sm text-gray-500"
                            }, toDisplayString(unref(t)("admin.stats.visitorDetail.noOrders")), 1)) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "overflow-x-auto"
                            }, [
                              createVNode("table", { class: "min-w-full text-sm" }, [
                                createVNode("thead", null, [
                                  createVNode("tr", { class: "border-b border-gray-200 text-left text-xs text-gray-500 dark:border-gray-800" }, [
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visitorDetail.orderId")), 1),
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visitorDetail.product")), 1),
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visitorDetail.amount")), 1),
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visitorDetail.status")), 1),
                                    createVNode("th", { class: "pb-2" }, toDisplayString(unref(t)("admin.stats.time")), 1)
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).orders, (order) => {
                                    return openBlock(), createBlock("tr", {
                                      key: order.id,
                                      class: "border-b border-gray-100 dark:border-gray-900"
                                    }, [
                                      createVNode("td", { class: "py-2.5 pr-4 font-mono text-xs text-gray-500" }, toDisplayString(order.id), 1),
                                      createVNode("td", { class: "py-2.5 pr-4 text-gray-900 dark:text-white" }, toDisplayString(order.productName || "-"), 1),
                                      createVNode("td", { class: "py-2.5 pr-4 tabular-nums" }, toDisplayString(order.amount) + " " + toDisplayString(order.currency), 1),
                                      createVNode("td", { class: "py-2.5 pr-4" }, [
                                        createVNode(_component_UBadge, {
                                          color: order.payStatus === "paid" ? "success" : "neutral",
                                          variant: "subtle",
                                          size: "xs"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(order.payStatus) + " \xB7 " + toDisplayString(order.status), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      createVNode("td", { class: "py-2.5 text-xs text-gray-500 whitespace-nowrap" }, toDisplayString(unref(formatDateTime)(order.createdAt)), 1)
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_AdminStatsDetailSection, {
                      title: `${unref(t)("admin.stats.visitorDetail.timeline")} (${unref(detail).stats.totalEvents})`,
                      icon: "ph:clock-counter-clockwise"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (unref(detail).stats.totalEvents > unref(detail).recentEventsLimit) {
                            _push4(`<p class="mb-3 text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.timelineLimit", { count: unref(detail).recentEventsLimit }))}</p>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!unref(detail).recentEvents.length) {
                            _push4(`<div class="py-8 text-center text-sm text-gray-500"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.noEvents"))}</div>`);
                          } else {
                            _push4(`<div class="space-y-3"${_scopeId3}><!--[-->`);
                            ssrRenderList(unref(detail).recentEvents, (item) => {
                              _push4(`<div class="rounded-xl border border-gray-200 p-3 dark:border-gray-800"${_scopeId3}><div class="flex flex-wrap items-start justify-between gap-2"${_scopeId3}><div class="flex items-center gap-2"${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_UBadge, {
                                color: "primary",
                                variant: "subtle",
                                size: "xs"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(eventLabel(item.eventName))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(eventLabel(item.eventName)), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              if (item.eventAction) {
                                _push4(`<span class="text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(item.eventAction)}</span>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              if (item.productName) {
                                _push4(`<span class="text-xs text-blue-500"${_scopeId3}>${ssrInterpolate(item.productName)}</span>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div><span class="text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(unref(formatDateTime)(item.createdAt))}</span></div><div class="mt-2 grid gap-2 text-xs lg:grid-cols-2"${_scopeId3}><div class="break-all font-mono text-gray-700 dark:text-gray-300"${_scopeId3}>${ssrInterpolate(item.path || "-")}</div><div class="break-all text-gray-500"${_scopeId3}>${ssrInterpolate(item.referrer || "-")}</div></div><div class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(item.ip || "-")}</span><span${_scopeId3}>${ssrInterpolate(location(item))}</span><span${_scopeId3}>${ssrInterpolate([item.deviceType, item.browser, item.os].filter(Boolean).join(" \xB7 ") || "-")}</span><span${_scopeId3}>${ssrInterpolate([item.source, item.medium, item.campaign].filter(Boolean).join(" / ") || unref(t)("admin.stats.direct"))}</span>`);
                              if (item.orderId) {
                                _push4(`<span${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.orderId"))}: ${ssrInterpolate(item.orderId)}</span>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div></div>`);
                            });
                            _push4(`<!--]--></div>`);
                          }
                        } else {
                          return [
                            unref(detail).stats.totalEvents > unref(detail).recentEventsLimit ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mb-3 text-xs text-gray-500"
                            }, toDisplayString(unref(t)("admin.stats.visitorDetail.timelineLimit", { count: unref(detail).recentEventsLimit })), 1)) : createCommentVNode("", true),
                            !unref(detail).recentEvents.length ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "py-8 text-center text-sm text-gray-500"
                            }, toDisplayString(unref(t)("admin.stats.visitorDetail.noEvents")), 1)) : (openBlock(), createBlock("div", {
                              key: 2,
                              class: "space-y-3"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).recentEvents, (item) => {
                                return openBlock(), createBlock("div", {
                                  key: item.id,
                                  class: "rounded-xl border border-gray-200 p-3 dark:border-gray-800"
                                }, [
                                  createVNode("div", { class: "flex flex-wrap items-start justify-between gap-2" }, [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode(_component_UBadge, {
                                        color: "primary",
                                        variant: "subtle",
                                        size: "xs"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(eventLabel(item.eventName)), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      item.eventAction ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "text-xs text-gray-500"
                                      }, toDisplayString(item.eventAction), 1)) : createCommentVNode("", true),
                                      item.productName ? (openBlock(), createBlock("span", {
                                        key: 1,
                                        class: "text-xs text-blue-500"
                                      }, toDisplayString(item.productName), 1)) : createCommentVNode("", true)
                                    ]),
                                    createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(unref(formatDateTime)(item.createdAt)), 1)
                                  ]),
                                  createVNode("div", { class: "mt-2 grid gap-2 text-xs lg:grid-cols-2" }, [
                                    createVNode("div", { class: "break-all font-mono text-gray-700 dark:text-gray-300" }, toDisplayString(item.path || "-"), 1),
                                    createVNode("div", { class: "break-all text-gray-500" }, toDisplayString(item.referrer || "-"), 1)
                                  ]),
                                  createVNode("div", { class: "mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500" }, [
                                    createVNode("span", null, toDisplayString(item.ip || "-"), 1),
                                    createVNode("span", null, toDisplayString(location(item)), 1),
                                    createVNode("span", null, toDisplayString([item.deviceType, item.browser, item.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                    createVNode("span", null, toDisplayString([item.source, item.medium, item.campaign].filter(Boolean).join(" / ") || unref(t)("admin.stats.direct")), 1),
                                    item.orderId ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(t)("admin.stats.visitorDetail.orderId")) + ": " + toDisplayString(item.orderId), 1)) : createCommentVNode("", true)
                                  ])
                                ]);
                              }), 128))
                            ]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "max-h-[calc(90vh-8rem)] overflow-y-auto pr-1" }, [
                      unref(pending) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex min-h-72 items-center justify-center"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:spinner-gap",
                          class: "h-7 w-7 animate-spin text-purple-500"
                        })
                      ])) : unref(errorMessage) ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "flex min-h-72 flex-col items-center justify-center gap-3 text-center"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:warning-circle",
                          class: "h-9 w-9 text-red-500"
                        }),
                        createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(unref(errorMessage)), 1),
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "outline",
                          icon: "ph:arrows-clockwise",
                          onClick: load
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)("admin.stats.refresh")), 1)
                          ]),
                          _: 1
                        })
                      ])) : unref(detail) ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "space-y-6"
                      }, [
                        createVNode("div", { class: "grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(statCards), (card) => {
                            return openBlock(), createBlock("div", {
                              key: card.label,
                              class: "rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 dark:border-gray-800 dark:bg-black/20"
                            }, [
                              createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(card.label), 1),
                              createVNode("div", {
                                class: ["mt-1 text-lg font-semibold tabular-nums", card.class]
                              }, toDisplayString(card.value), 3)
                            ]);
                          }), 128))
                        ]),
                        createVNode(_component_AdminStatsDetailSection, {
                          title: unref(t)("admin.stats.visitorDetail.identity"),
                          icon: "ph:identification-card"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(identityFields), (field) => {
                                return openBlock(), createBlock(_component_AdminStatsDetailField, {
                                  key: field.label,
                                  label: field.label,
                                  value: field.value,
                                  copyable: field.copyable,
                                  onCopy: copy
                                }, null, 8, ["label", "value", "copyable"]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        }, 8, ["title"]),
                        createVNode(_component_AdminStatsDetailSection, {
                          title: unref(t)("admin.stats.visitorDetail.locationDevice"),
                          icon: "ph:devices"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(deviceFields), (field) => {
                                return openBlock(), createBlock(_component_AdminStatsDetailField, {
                                  key: field.label,
                                  label: field.label,
                                  value: field.value
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ]),
                            createVNode("div", { class: "mt-4 border-t border-gray-200 pt-4 dark:border-gray-800" }, [
                              createVNode(_component_AdminStatsDetailField, {
                                label: unref(t)("admin.stats.visitorDetail.userAgent"),
                                value: unref(detail).profile.userAgent
                              }, null, 8, ["label", "value"])
                            ])
                          ]),
                          _: 1
                        }, 8, ["title"]),
                        createVNode("div", { class: "grid gap-6 lg:grid-cols-2" }, [
                          createVNode(_component_AdminStatsDetailSection, {
                            title: unref(t)("admin.stats.visitorDetail.firstTouch"),
                            icon: "ph:arrow-line-down-left"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "space-y-3" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(firstTouchFields), (field) => {
                                  return openBlock(), createBlock(_component_AdminStatsDetailField, {
                                    key: field.label,
                                    label: field.label,
                                    value: field.value
                                  }, null, 8, ["label", "value"]);
                                }), 128))
                              ])
                            ]),
                            _: 1
                          }, 8, ["title"]),
                          createVNode(_component_AdminStatsDetailSection, {
                            title: unref(t)("admin.stats.visitorDetail.lastTouch"),
                            icon: "ph:arrow-line-up-right"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "space-y-3" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(lastTouchFields), (field) => {
                                  return openBlock(), createBlock(_component_AdminStatsDetailField, {
                                    key: field.label,
                                    label: field.label,
                                    value: field.value
                                  }, null, 8, ["label", "value"]);
                                }), 128))
                              ])
                            ]),
                            _: 1
                          }, 8, ["title"])
                        ]),
                        createVNode(_component_AdminStatsDetailSection, {
                          title: `${unref(t)("admin.stats.visitorDetail.orders")} (${unref(detail).stats.orders})`,
                          icon: "ph:receipt"
                        }, {
                          default: withCtx(() => [
                            !unref(detail).orders.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "py-8 text-center text-sm text-gray-500"
                            }, toDisplayString(unref(t)("admin.stats.visitorDetail.noOrders")), 1)) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "overflow-x-auto"
                            }, [
                              createVNode("table", { class: "min-w-full text-sm" }, [
                                createVNode("thead", null, [
                                  createVNode("tr", { class: "border-b border-gray-200 text-left text-xs text-gray-500 dark:border-gray-800" }, [
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visitorDetail.orderId")), 1),
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visitorDetail.product")), 1),
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visitorDetail.amount")), 1),
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visitorDetail.status")), 1),
                                    createVNode("th", { class: "pb-2" }, toDisplayString(unref(t)("admin.stats.time")), 1)
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).orders, (order) => {
                                    return openBlock(), createBlock("tr", {
                                      key: order.id,
                                      class: "border-b border-gray-100 dark:border-gray-900"
                                    }, [
                                      createVNode("td", { class: "py-2.5 pr-4 font-mono text-xs text-gray-500" }, toDisplayString(order.id), 1),
                                      createVNode("td", { class: "py-2.5 pr-4 text-gray-900 dark:text-white" }, toDisplayString(order.productName || "-"), 1),
                                      createVNode("td", { class: "py-2.5 pr-4 tabular-nums" }, toDisplayString(order.amount) + " " + toDisplayString(order.currency), 1),
                                      createVNode("td", { class: "py-2.5 pr-4" }, [
                                        createVNode(_component_UBadge, {
                                          color: order.payStatus === "paid" ? "success" : "neutral",
                                          variant: "subtle",
                                          size: "xs"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(order.payStatus) + " \xB7 " + toDisplayString(order.status), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      createVNode("td", { class: "py-2.5 text-xs text-gray-500 whitespace-nowrap" }, toDisplayString(unref(formatDateTime)(order.createdAt)), 1)
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ]))
                          ]),
                          _: 1
                        }, 8, ["title"]),
                        createVNode(_component_AdminStatsDetailSection, {
                          title: `${unref(t)("admin.stats.visitorDetail.timeline")} (${unref(detail).stats.totalEvents})`,
                          icon: "ph:clock-counter-clockwise"
                        }, {
                          default: withCtx(() => [
                            unref(detail).stats.totalEvents > unref(detail).recentEventsLimit ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mb-3 text-xs text-gray-500"
                            }, toDisplayString(unref(t)("admin.stats.visitorDetail.timelineLimit", { count: unref(detail).recentEventsLimit })), 1)) : createCommentVNode("", true),
                            !unref(detail).recentEvents.length ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "py-8 text-center text-sm text-gray-500"
                            }, toDisplayString(unref(t)("admin.stats.visitorDetail.noEvents")), 1)) : (openBlock(), createBlock("div", {
                              key: 2,
                              class: "space-y-3"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).recentEvents, (item) => {
                                return openBlock(), createBlock("div", {
                                  key: item.id,
                                  class: "rounded-xl border border-gray-200 p-3 dark:border-gray-800"
                                }, [
                                  createVNode("div", { class: "flex flex-wrap items-start justify-between gap-2" }, [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode(_component_UBadge, {
                                        color: "primary",
                                        variant: "subtle",
                                        size: "xs"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(eventLabel(item.eventName)), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      item.eventAction ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "text-xs text-gray-500"
                                      }, toDisplayString(item.eventAction), 1)) : createCommentVNode("", true),
                                      item.productName ? (openBlock(), createBlock("span", {
                                        key: 1,
                                        class: "text-xs text-blue-500"
                                      }, toDisplayString(item.productName), 1)) : createCommentVNode("", true)
                                    ]),
                                    createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(unref(formatDateTime)(item.createdAt)), 1)
                                  ]),
                                  createVNode("div", { class: "mt-2 grid gap-2 text-xs lg:grid-cols-2" }, [
                                    createVNode("div", { class: "break-all font-mono text-gray-700 dark:text-gray-300" }, toDisplayString(item.path || "-"), 1),
                                    createVNode("div", { class: "break-all text-gray-500" }, toDisplayString(item.referrer || "-"), 1)
                                  ]),
                                  createVNode("div", { class: "mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500" }, [
                                    createVNode("span", null, toDisplayString(item.ip || "-"), 1),
                                    createVNode("span", null, toDisplayString(location(item)), 1),
                                    createVNode("span", null, toDisplayString([item.deviceType, item.browser, item.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                    createVNode("span", null, toDisplayString([item.source, item.medium, item.campaign].filter(Boolean).join(" / ") || unref(t)("admin.stats.direct")), 1),
                                    item.orderId ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(t)("admin.stats.visitorDetail.orderId")) + ": " + toDisplayString(item.orderId), 1)) : createCommentVNode("", true)
                                  ])
                                ]);
                              }), 128))
                            ]))
                          ]),
                          _: 1
                        }, 8, ["title"])
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { class: "max-h-[90vh] overflow-hidden bg-white ring-1 ring-gray-200 dark:bg-[#121214] dark:ring-gray-800" }, {
                header: withCtx(() => {
                  var _a;
                  return [
                    createVNode("div", { class: "flex items-start justify-between gap-4" }, [
                      createVNode("div", { class: "min-w-0" }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:user-focus",
                            class: "h-5 w-5 shrink-0 text-purple-500"
                          }),
                          createVNode("h3", { class: "text-lg font-semibold text-gray-900 dark:text-white" }, toDisplayString(unref(t)("admin.stats.visitorDetail.title")), 1),
                          createVNode(_component_UBadge, {
                            color: ((_a = unref(detail)) == null ? void 0 : _a.user) ? "success" : "neutral",
                            variant: "subtle",
                            size: "xs"
                          }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode(toDisplayString(((_a2 = unref(detail)) == null ? void 0 : _a2.user) ? unref(t)("admin.stats.visitorDetail.registered") : unref(t)("admin.stats.visitorDetail.anonymous")), 1)
                              ];
                            }),
                            _: 1
                          }, 8, ["color"])
                        ]),
                        __props.visitorId ? (openBlock(), createBlock("button", {
                          key: 0,
                          type: "button",
                          class: "mt-1 max-w-full truncate font-mono text-xs text-gray-500 hover:text-purple-500",
                          title: unref(t)("admin.stats.visitorDetail.copy"),
                          onClick: ($event) => copy(__props.visitorId)
                        }, toDisplayString(__props.visitorId), 9, ["title", "onClick"])) : createCommentVNode("", true)
                      ]),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        icon: "ph:x",
                        onClick: ($event) => isOpen.value = false
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }),
                default: withCtx(() => [
                  createVNode("div", { class: "max-h-[calc(90vh-8rem)] overflow-y-auto pr-1" }, [
                    unref(pending) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex min-h-72 items-center justify-center"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:spinner-gap",
                        class: "h-7 w-7 animate-spin text-purple-500"
                      })
                    ])) : unref(errorMessage) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex min-h-72 flex-col items-center justify-center gap-3 text-center"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:warning-circle",
                        class: "h-9 w-9 text-red-500"
                      }),
                      createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(unref(errorMessage)), 1),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "outline",
                        icon: "ph:arrows-clockwise",
                        onClick: load
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("admin.stats.refresh")), 1)
                        ]),
                        _: 1
                      })
                    ])) : unref(detail) ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "space-y-6"
                    }, [
                      createVNode("div", { class: "grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(statCards), (card) => {
                          return openBlock(), createBlock("div", {
                            key: card.label,
                            class: "rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 dark:border-gray-800 dark:bg-black/20"
                          }, [
                            createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(card.label), 1),
                            createVNode("div", {
                              class: ["mt-1 text-lg font-semibold tabular-nums", card.class]
                            }, toDisplayString(card.value), 3)
                          ]);
                        }), 128))
                      ]),
                      createVNode(_component_AdminStatsDetailSection, {
                        title: unref(t)("admin.stats.visitorDetail.identity"),
                        icon: "ph:identification-card"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(identityFields), (field) => {
                              return openBlock(), createBlock(_component_AdminStatsDetailField, {
                                key: field.label,
                                label: field.label,
                                value: field.value,
                                copyable: field.copyable,
                                onCopy: copy
                              }, null, 8, ["label", "value", "copyable"]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      createVNode(_component_AdminStatsDetailSection, {
                        title: unref(t)("admin.stats.visitorDetail.locationDevice"),
                        icon: "ph:devices"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(deviceFields), (field) => {
                              return openBlock(), createBlock(_component_AdminStatsDetailField, {
                                key: field.label,
                                label: field.label,
                                value: field.value
                              }, null, 8, ["label", "value"]);
                            }), 128))
                          ]),
                          createVNode("div", { class: "mt-4 border-t border-gray-200 pt-4 dark:border-gray-800" }, [
                            createVNode(_component_AdminStatsDetailField, {
                              label: unref(t)("admin.stats.visitorDetail.userAgent"),
                              value: unref(detail).profile.userAgent
                            }, null, 8, ["label", "value"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      createVNode("div", { class: "grid gap-6 lg:grid-cols-2" }, [
                        createVNode(_component_AdminStatsDetailSection, {
                          title: unref(t)("admin.stats.visitorDetail.firstTouch"),
                          icon: "ph:arrow-line-down-left"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "space-y-3" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(firstTouchFields), (field) => {
                                return openBlock(), createBlock(_component_AdminStatsDetailField, {
                                  key: field.label,
                                  label: field.label,
                                  value: field.value
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        }, 8, ["title"]),
                        createVNode(_component_AdminStatsDetailSection, {
                          title: unref(t)("admin.stats.visitorDetail.lastTouch"),
                          icon: "ph:arrow-line-up-right"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "space-y-3" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(lastTouchFields), (field) => {
                                return openBlock(), createBlock(_component_AdminStatsDetailField, {
                                  key: field.label,
                                  label: field.label,
                                  value: field.value
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        }, 8, ["title"])
                      ]),
                      createVNode(_component_AdminStatsDetailSection, {
                        title: `${unref(t)("admin.stats.visitorDetail.orders")} (${unref(detail).stats.orders})`,
                        icon: "ph:receipt"
                      }, {
                        default: withCtx(() => [
                          !unref(detail).orders.length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "py-8 text-center text-sm text-gray-500"
                          }, toDisplayString(unref(t)("admin.stats.visitorDetail.noOrders")), 1)) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "overflow-x-auto"
                          }, [
                            createVNode("table", { class: "min-w-full text-sm" }, [
                              createVNode("thead", null, [
                                createVNode("tr", { class: "border-b border-gray-200 text-left text-xs text-gray-500 dark:border-gray-800" }, [
                                  createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visitorDetail.orderId")), 1),
                                  createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visitorDetail.product")), 1),
                                  createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visitorDetail.amount")), 1),
                                  createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visitorDetail.status")), 1),
                                  createVNode("th", { class: "pb-2" }, toDisplayString(unref(t)("admin.stats.time")), 1)
                                ])
                              ]),
                              createVNode("tbody", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).orders, (order) => {
                                  return openBlock(), createBlock("tr", {
                                    key: order.id,
                                    class: "border-b border-gray-100 dark:border-gray-900"
                                  }, [
                                    createVNode("td", { class: "py-2.5 pr-4 font-mono text-xs text-gray-500" }, toDisplayString(order.id), 1),
                                    createVNode("td", { class: "py-2.5 pr-4 text-gray-900 dark:text-white" }, toDisplayString(order.productName || "-"), 1),
                                    createVNode("td", { class: "py-2.5 pr-4 tabular-nums" }, toDisplayString(order.amount) + " " + toDisplayString(order.currency), 1),
                                    createVNode("td", { class: "py-2.5 pr-4" }, [
                                      createVNode(_component_UBadge, {
                                        color: order.payStatus === "paid" ? "success" : "neutral",
                                        variant: "subtle",
                                        size: "xs"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(order.payStatus) + " \xB7 " + toDisplayString(order.status), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    createVNode("td", { class: "py-2.5 text-xs text-gray-500 whitespace-nowrap" }, toDisplayString(unref(formatDateTime)(order.createdAt)), 1)
                                  ]);
                                }), 128))
                              ])
                            ])
                          ]))
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      createVNode(_component_AdminStatsDetailSection, {
                        title: `${unref(t)("admin.stats.visitorDetail.timeline")} (${unref(detail).stats.totalEvents})`,
                        icon: "ph:clock-counter-clockwise"
                      }, {
                        default: withCtx(() => [
                          unref(detail).stats.totalEvents > unref(detail).recentEventsLimit ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mb-3 text-xs text-gray-500"
                          }, toDisplayString(unref(t)("admin.stats.visitorDetail.timelineLimit", { count: unref(detail).recentEventsLimit })), 1)) : createCommentVNode("", true),
                          !unref(detail).recentEvents.length ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "py-8 text-center text-sm text-gray-500"
                          }, toDisplayString(unref(t)("admin.stats.visitorDetail.noEvents")), 1)) : (openBlock(), createBlock("div", {
                            key: 2,
                            class: "space-y-3"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).recentEvents, (item) => {
                              return openBlock(), createBlock("div", {
                                key: item.id,
                                class: "rounded-xl border border-gray-200 p-3 dark:border-gray-800"
                              }, [
                                createVNode("div", { class: "flex flex-wrap items-start justify-between gap-2" }, [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(_component_UBadge, {
                                      color: "primary",
                                      variant: "subtle",
                                      size: "xs"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(eventLabel(item.eventName)), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    item.eventAction ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "text-xs text-gray-500"
                                    }, toDisplayString(item.eventAction), 1)) : createCommentVNode("", true),
                                    item.productName ? (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "text-xs text-blue-500"
                                    }, toDisplayString(item.productName), 1)) : createCommentVNode("", true)
                                  ]),
                                  createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(unref(formatDateTime)(item.createdAt)), 1)
                                ]),
                                createVNode("div", { class: "mt-2 grid gap-2 text-xs lg:grid-cols-2" }, [
                                  createVNode("div", { class: "break-all font-mono text-gray-700 dark:text-gray-300" }, toDisplayString(item.path || "-"), 1),
                                  createVNode("div", { class: "break-all text-gray-500" }, toDisplayString(item.referrer || "-"), 1)
                                ]),
                                createVNode("div", { class: "mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500" }, [
                                  createVNode("span", null, toDisplayString(item.ip || "-"), 1),
                                  createVNode("span", null, toDisplayString(location(item)), 1),
                                  createVNode("span", null, toDisplayString([item.deviceType, item.browser, item.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                  createVNode("span", null, toDisplayString([item.source, item.medium, item.campaign].filter(Boolean).join(" / ") || unref(t)("admin.stats.direct")), 1),
                                  item.orderId ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(t)("admin.stats.visitorDetail.orderId")) + ": " + toDisplayString(item.orderId), 1)) : createCommentVNode("", true)
                                ])
                              ]);
                            }), 128))
                          ]))
                        ]),
                        _: 1
                      }, 8, ["title"])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/stats/VisitorDetailModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$2, { __name: "AdminStatsVisitorDetailModal" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "IpDetailModal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    ip: {},
    preset: {},
    days: {}
  },
  emits: ["update:open", "view-visitor"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useI18n();
    const { formatDateTime } = useFormatTime();
    const toast = useToast();
    const isOpen = computed({ get: () => props.open, set: (value) => emit("update:open", value) });
    const ipLabel = computed(() => props.ip || t("admin.stats.ipDetail.local"));
    const detail = ref(null);
    const pending = ref(false);
    const errorMessage = ref("");
    const load = async () => {
      var _a;
      pending.value = true;
      errorMessage.value = "";
      detail.value = null;
      try {
        detail.value = await $fetch("/api/admin/stats/ip-details", {
          query: { ip: props.ip || void 0, local: props.ip ? void 0 : "1", preset: props.preset, days: props.days }
        });
      } catch (error) {
        errorMessage.value = ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.statusMessage) || (error == null ? void 0 : error.message) || t("admin.stats.ipDetail.loadError");
      } finally {
        pending.value = false;
      }
    };
    watch(() => [props.open, props.ip, props.preset, props.days], ([open]) => {
      if (open) load();
    });
    const statCards = computed(() => detail.value ? [
      { label: t("admin.stats.visitorDetail.totalEvents"), value: detail.value.stats.totalEvents, class: "text-gray-900 dark:text-white" },
      { label: t("admin.stats.ipDetail.uniqueVisitors"), value: detail.value.stats.uniqueVisitors, class: "text-purple-500" },
      { label: t("admin.stats.ipDetail.registeredUsers"), value: detail.value.stats.registeredUsers, class: "text-green-500" },
      { label: t("admin.stats.pageViews"), value: detail.value.stats.pageViews, class: "text-cyan-500" },
      { label: t("admin.stats.productVisitors"), value: detail.value.stats.productViews, class: "text-blue-500" },
      { label: t("admin.stats.checkout"), value: detail.value.stats.checkouts, class: "text-amber-500" },
      { label: t("admin.stats.paid"), value: detail.value.stats.paid, class: "text-emerald-500" },
      { label: "Auth", value: detail.value.stats.auth, class: "text-pink-500" }
    ] : []);
    const contextLabel = (context) => [
      [context.city, context.region, context.country].filter(Boolean).join("/"),
      [context.deviceType, context.browser, context.os].filter(Boolean).join(" \xB7 ")
    ].filter(Boolean).join(" \u2014 ") || "-";
    const eventLabel = (eventName) => {
      const keys = { page_view: "pageView", product_view: "productView", begin_checkout: "beginCheckout", order_paid: "orderPaid", auth: "login" };
      return keys[eventName] ? t(`admin.stats.${keys[eventName]}`) : eventName;
    };
    const copy = async (text) => {
      if (!text) return;
      await (void 0).clipboard.writeText(text);
      toast.add({ title: t("admin.stats.visitorDetail.copied"), color: "success" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$q;
      const _component_UCard = _sfc_main$5;
      const _component_UIcon = _sfc_main$E;
      const _component_UButton = _sfc_main$z;
      const _component_AdminStatsDetailSection = __nuxt_component_4;
      const _component_AdminStatsDetailField = __nuxt_component_5;
      const _component_UBadge = _sfc_main$v;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        ui: { content: "sm:max-w-6xl" }
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { class: "max-h-[90vh] overflow-hidden bg-white ring-1 ring-gray-200 dark:bg-[#121214] dark:ring-gray-800" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-start justify-between gap-4"${_scopeId2}><div class="min-w-0"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:globe-hemisphere-west",
                    class: "h-5 w-5 shrink-0 text-purple-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`<h3 class="text-lg font-semibold text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(unref(t)("admin.stats.ipDetail.title"))}</h3></div><button type="button" class="mt-1 font-mono text-xs text-gray-500 hover:text-purple-500"${_scopeId2}>${ssrInterpolate(unref(ipLabel))}</button></div>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    onClick: ($event) => isOpen.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-start justify-between gap-4" }, [
                      createVNode("div", { class: "min-w-0" }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:globe-hemisphere-west",
                            class: "h-5 w-5 shrink-0 text-purple-500"
                          }),
                          createVNode("h3", { class: "text-lg font-semibold text-gray-900 dark:text-white" }, toDisplayString(unref(t)("admin.stats.ipDetail.title")), 1)
                        ]),
                        createVNode("button", {
                          type: "button",
                          class: "mt-1 font-mono text-xs text-gray-500 hover:text-purple-500",
                          onClick: ($event) => copy(unref(ipLabel))
                        }, toDisplayString(unref(ipLabel)), 9, ["onClick"])
                      ]),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        icon: "ph:x",
                        onClick: ($event) => isOpen.value = false
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="max-h-[calc(90vh-8rem)] overflow-y-auto pr-1"${_scopeId2}>`);
                  if (unref(pending)) {
                    _push3(`<div class="flex min-h-72 items-center justify-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:spinner-gap",
                      class: "h-7 w-7 animate-spin text-purple-500"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (unref(errorMessage)) {
                    _push3(`<div class="flex min-h-72 flex-col items-center justify-center gap-3 text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:warning-circle",
                      class: "h-9 w-9 text-red-500"
                    }, null, _parent3, _scopeId2));
                    _push3(`<p class="text-sm text-gray-500"${_scopeId2}>${ssrInterpolate(unref(errorMessage))}</p>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "neutral",
                      variant: "outline",
                      icon: "ph:arrows-clockwise",
                      onClick: load
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(t)("admin.stats.refresh"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(t)("admin.stats.refresh")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (unref(detail)) {
                    _push3(`<div class="space-y-6"${_scopeId2}><div class="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(statCards), (card) => {
                      _push3(`<div class="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 dark:border-gray-800 dark:bg-black/20"${_scopeId2}><div class="text-xs text-gray-500"${_scopeId2}>${ssrInterpolate(card.label)}</div><div class="${ssrRenderClass([card.class, "mt-1 text-lg font-semibold tabular-nums"])}"${_scopeId2}>${ssrInterpolate(card.value)}</div></div>`);
                    });
                    _push3(`<!--]--></div>`);
                    _push3(ssrRenderComponent(_component_AdminStatsDetailSection, {
                      title: unref(t)("admin.stats.ipDetail.overview"),
                      icon: "ph:map-pin"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_AdminStatsDetailField, {
                            label: unref(t)("admin.stats.ip"),
                            value: unref(ipLabel),
                            copyable: "",
                            onCopy: copy
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_AdminStatsDetailField, {
                            label: unref(t)("admin.stats.firstSeen"),
                            value: unref(formatDateTime)(unref(detail).stats.firstSeenAt)
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_AdminStatsDetailField, {
                            label: unref(t)("admin.stats.lastSeen"),
                            value: unref(formatDateTime)(unref(detail).stats.lastSeenAt)
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_AdminStatsDetailField, {
                            label: unref(t)("admin.stats.ipDetail.observedContexts"),
                            value: unref(detail).contexts.length
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                          if (unref(detail).contexts.length) {
                            _push4(`<div class="mt-4 flex flex-wrap gap-2 border-t border-gray-200 pt-4 dark:border-gray-800"${_scopeId3}><!--[-->`);
                            ssrRenderList(unref(detail).contexts, (context, index) => {
                              _push4(ssrRenderComponent(_component_UBadge, {
                                key: index,
                                color: "neutral",
                                variant: "subtle"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(contextLabel(context))} \xB7 ${ssrInterpolate(context.count)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(contextLabel(context)) + " \xB7 " + toDisplayString(context.count), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode("div", { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, [
                              createVNode(_component_AdminStatsDetailField, {
                                label: unref(t)("admin.stats.ip"),
                                value: unref(ipLabel),
                                copyable: "",
                                onCopy: copy
                              }, null, 8, ["label", "value"]),
                              createVNode(_component_AdminStatsDetailField, {
                                label: unref(t)("admin.stats.firstSeen"),
                                value: unref(formatDateTime)(unref(detail).stats.firstSeenAt)
                              }, null, 8, ["label", "value"]),
                              createVNode(_component_AdminStatsDetailField, {
                                label: unref(t)("admin.stats.lastSeen"),
                                value: unref(formatDateTime)(unref(detail).stats.lastSeenAt)
                              }, null, 8, ["label", "value"]),
                              createVNode(_component_AdminStatsDetailField, {
                                label: unref(t)("admin.stats.ipDetail.observedContexts"),
                                value: unref(detail).contexts.length
                              }, null, 8, ["label", "value"])
                            ]),
                            unref(detail).contexts.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mt-4 flex flex-wrap gap-2 border-t border-gray-200 pt-4 dark:border-gray-800"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).contexts, (context, index) => {
                                return openBlock(), createBlock(_component_UBadge, {
                                  key: index,
                                  color: "neutral",
                                  variant: "subtle"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(contextLabel(context)) + " \xB7 " + toDisplayString(context.count), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_AdminStatsDetailSection, {
                      title: `${unref(t)("admin.stats.ipDetail.visitors")} (${unref(detail).stats.uniqueVisitors})`,
                      icon: "ph:users-three"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (unref(detail).stats.uniqueVisitors > unref(detail).visitorLimit) {
                            _push4(`<p class="mb-3 text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.ipDetail.visitorLimit", { count: unref(detail).visitorLimit }))}</p>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<div class="overflow-x-auto"${_scopeId3}><table class="min-w-full text-sm"${_scopeId3}><thead${_scopeId3}><tr class="border-b border-gray-200 text-left text-xs text-gray-500 dark:border-gray-800"${_scopeId3}><th class="pb-2 pr-4"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visitor"))}</th><th class="pb-2 pr-4"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.ipDetail.account"))}</th><th class="pb-2 pr-4"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visits"))}</th><th class="pb-2 pr-4"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.firstSource"))}</th><th class="pb-2 pr-4"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.device"))}</th><th class="pb-2 pr-4"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.lastSeen"))}</th><th class="pb-2 text-right"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.actions"))}</th></tr></thead><tbody${_scopeId3}><!--[-->`);
                          ssrRenderList(unref(detail).visitors, (visitor) => {
                            _push4(`<tr class="border-b border-gray-100 dark:border-gray-900"${_scopeId3}><td class="py-2.5 pr-4 font-mono text-xs text-gray-600 dark:text-gray-300"${_scopeId3}>${ssrInterpolate(visitor.visitorId)}</td><td class="py-2.5 pr-4"${_scopeId3}>`);
                            if (visitor.user) {
                              _push4(`<span class="text-xs text-gray-700 dark:text-gray-300"${_scopeId3}>${ssrInterpolate(visitor.user.nickname || visitor.user.email)}</span>`);
                            } else {
                              _push4(`<span class="text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.anonymous"))}</span>`);
                            }
                            _push4(`</td><td class="py-2.5 pr-4 tabular-nums"${_scopeId3}>${ssrInterpolate(visitor.eventCount)}</td><td class="py-2.5 pr-4 text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(visitor.firstTouch)}</td><td class="py-2.5 pr-4 text-xs text-gray-500"${_scopeId3}>${ssrInterpolate([visitor.deviceType, visitor.browser, visitor.os].filter(Boolean).join(" \xB7 ") || "-")}</td><td class="py-2.5 pr-4 whitespace-nowrap text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(unref(formatDateTime)(visitor.lastSeenAt))}</td><td class="py-2.5 text-right"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              icon: "ph:eye",
                              size: "xs",
                              title: unref(t)("admin.stats.visitorDetail.view"),
                              onClick: ($event) => _ctx.$emit("view-visitor", visitor.visitorId)
                            }, null, _parent4, _scopeId3));
                            _push4(`</td></tr>`);
                          });
                          _push4(`<!--]--></tbody></table></div>`);
                        } else {
                          return [
                            unref(detail).stats.uniqueVisitors > unref(detail).visitorLimit ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mb-3 text-xs text-gray-500"
                            }, toDisplayString(unref(t)("admin.stats.ipDetail.visitorLimit", { count: unref(detail).visitorLimit })), 1)) : createCommentVNode("", true),
                            createVNode("div", { class: "overflow-x-auto" }, [
                              createVNode("table", { class: "min-w-full text-sm" }, [
                                createVNode("thead", null, [
                                  createVNode("tr", { class: "border-b border-gray-200 text-left text-xs text-gray-500 dark:border-gray-800" }, [
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visitor")), 1),
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.ipDetail.account")), 1),
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visits")), 1),
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.firstSource")), 1),
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.device")), 1),
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.lastSeen")), 1),
                                    createVNode("th", { class: "pb-2 text-right" }, toDisplayString(unref(t)("admin.stats.visitorDetail.actions")), 1)
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).visitors, (visitor) => {
                                    return openBlock(), createBlock("tr", {
                                      key: visitor.visitorId,
                                      class: "border-b border-gray-100 dark:border-gray-900"
                                    }, [
                                      createVNode("td", { class: "py-2.5 pr-4 font-mono text-xs text-gray-600 dark:text-gray-300" }, toDisplayString(visitor.visitorId), 1),
                                      createVNode("td", { class: "py-2.5 pr-4" }, [
                                        visitor.user ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "text-xs text-gray-700 dark:text-gray-300"
                                        }, toDisplayString(visitor.user.nickname || visitor.user.email), 1)) : (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "text-xs text-gray-500"
                                        }, toDisplayString(unref(t)("admin.stats.visitorDetail.anonymous")), 1))
                                      ]),
                                      createVNode("td", { class: "py-2.5 pr-4 tabular-nums" }, toDisplayString(visitor.eventCount), 1),
                                      createVNode("td", { class: "py-2.5 pr-4 text-xs text-gray-500" }, toDisplayString(visitor.firstTouch), 1),
                                      createVNode("td", { class: "py-2.5 pr-4 text-xs text-gray-500" }, toDisplayString([visitor.deviceType, visitor.browser, visitor.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                      createVNode("td", { class: "py-2.5 pr-4 whitespace-nowrap text-xs text-gray-500" }, toDisplayString(unref(formatDateTime)(visitor.lastSeenAt)), 1),
                                      createVNode("td", { class: "py-2.5 text-right" }, [
                                        createVNode(_component_UButton, {
                                          color: "neutral",
                                          variant: "ghost",
                                          icon: "ph:eye",
                                          size: "xs",
                                          title: unref(t)("admin.stats.visitorDetail.view"),
                                          onClick: ($event) => _ctx.$emit("view-visitor", visitor.visitorId)
                                        }, null, 8, ["title", "onClick"])
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_AdminStatsDetailSection, {
                      title: `${unref(t)("admin.stats.visitorDetail.timeline")} (${unref(detail).stats.totalEvents})`,
                      icon: "ph:clock-counter-clockwise"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (unref(detail).stats.totalEvents > unref(detail).recentEventsLimit) {
                            _push4(`<p class="mb-3 text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.timelineLimit", { count: unref(detail).recentEventsLimit }))}</p>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<div class="space-y-3"${_scopeId3}><!--[-->`);
                          ssrRenderList(unref(detail).recentEvents, (item) => {
                            _push4(`<div class="rounded-xl border border-gray-200 p-3 dark:border-gray-800"${_scopeId3}><div class="flex flex-wrap items-start justify-between gap-2"${_scopeId3}><div class="flex items-center gap-2"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_UBadge, {
                              color: "primary",
                              variant: "subtle",
                              size: "xs"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(eventLabel(item.eventName))}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(eventLabel(item.eventName)), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<span class="font-mono text-[11px] text-gray-500"${_scopeId3}>${ssrInterpolate(item.visitorId)}</span>`);
                            if (item.productName) {
                              _push4(`<span class="text-xs text-blue-500"${_scopeId3}>${ssrInterpolate(item.productName)}</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div><span class="text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(unref(formatDateTime)(item.createdAt))}</span></div><div class="mt-2 grid gap-2 text-xs lg:grid-cols-2"${_scopeId3}><div class="break-all font-mono text-gray-700 dark:text-gray-300"${_scopeId3}>${ssrInterpolate(item.path || "-")}</div><div class="break-all text-gray-500"${_scopeId3}>${ssrInterpolate(item.referrer || "-")}</div></div><div class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500"${_scopeId3}><span${_scopeId3}>${ssrInterpolate([item.city, item.region, item.country].filter(Boolean).join(" / ") || "-")}</span><span${_scopeId3}>${ssrInterpolate([item.deviceType, item.browser, item.os].filter(Boolean).join(" \xB7 ") || "-")}</span><span${_scopeId3}>${ssrInterpolate([item.source, item.medium, item.campaign].filter(Boolean).join(" / ") || unref(t)("admin.stats.direct"))}</span>`);
                            if (item.orderId) {
                              _push4(`<span${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.orderId"))}: ${ssrInterpolate(item.orderId)}</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div></div>`);
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          return [
                            unref(detail).stats.totalEvents > unref(detail).recentEventsLimit ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mb-3 text-xs text-gray-500"
                            }, toDisplayString(unref(t)("admin.stats.visitorDetail.timelineLimit", { count: unref(detail).recentEventsLimit })), 1)) : createCommentVNode("", true),
                            createVNode("div", { class: "space-y-3" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).recentEvents, (item) => {
                                return openBlock(), createBlock("div", {
                                  key: item.id,
                                  class: "rounded-xl border border-gray-200 p-3 dark:border-gray-800"
                                }, [
                                  createVNode("div", { class: "flex flex-wrap items-start justify-between gap-2" }, [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode(_component_UBadge, {
                                        color: "primary",
                                        variant: "subtle",
                                        size: "xs"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(eventLabel(item.eventName)), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("span", { class: "font-mono text-[11px] text-gray-500" }, toDisplayString(item.visitorId), 1),
                                      item.productName ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "text-xs text-blue-500"
                                      }, toDisplayString(item.productName), 1)) : createCommentVNode("", true)
                                    ]),
                                    createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(unref(formatDateTime)(item.createdAt)), 1)
                                  ]),
                                  createVNode("div", { class: "mt-2 grid gap-2 text-xs lg:grid-cols-2" }, [
                                    createVNode("div", { class: "break-all font-mono text-gray-700 dark:text-gray-300" }, toDisplayString(item.path || "-"), 1),
                                    createVNode("div", { class: "break-all text-gray-500" }, toDisplayString(item.referrer || "-"), 1)
                                  ]),
                                  createVNode("div", { class: "mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500" }, [
                                    createVNode("span", null, toDisplayString([item.city, item.region, item.country].filter(Boolean).join(" / ") || "-"), 1),
                                    createVNode("span", null, toDisplayString([item.deviceType, item.browser, item.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                    createVNode("span", null, toDisplayString([item.source, item.medium, item.campaign].filter(Boolean).join(" / ") || unref(t)("admin.stats.direct")), 1),
                                    item.orderId ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(t)("admin.stats.visitorDetail.orderId")) + ": " + toDisplayString(item.orderId), 1)) : createCommentVNode("", true)
                                  ])
                                ]);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "max-h-[calc(90vh-8rem)] overflow-y-auto pr-1" }, [
                      unref(pending) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex min-h-72 items-center justify-center"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:spinner-gap",
                          class: "h-7 w-7 animate-spin text-purple-500"
                        })
                      ])) : unref(errorMessage) ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "flex min-h-72 flex-col items-center justify-center gap-3 text-center"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:warning-circle",
                          class: "h-9 w-9 text-red-500"
                        }),
                        createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(unref(errorMessage)), 1),
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "outline",
                          icon: "ph:arrows-clockwise",
                          onClick: load
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)("admin.stats.refresh")), 1)
                          ]),
                          _: 1
                        })
                      ])) : unref(detail) ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "space-y-6"
                      }, [
                        createVNode("div", { class: "grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(statCards), (card) => {
                            return openBlock(), createBlock("div", {
                              key: card.label,
                              class: "rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 dark:border-gray-800 dark:bg-black/20"
                            }, [
                              createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(card.label), 1),
                              createVNode("div", {
                                class: ["mt-1 text-lg font-semibold tabular-nums", card.class]
                              }, toDisplayString(card.value), 3)
                            ]);
                          }), 128))
                        ]),
                        createVNode(_component_AdminStatsDetailSection, {
                          title: unref(t)("admin.stats.ipDetail.overview"),
                          icon: "ph:map-pin"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, [
                              createVNode(_component_AdminStatsDetailField, {
                                label: unref(t)("admin.stats.ip"),
                                value: unref(ipLabel),
                                copyable: "",
                                onCopy: copy
                              }, null, 8, ["label", "value"]),
                              createVNode(_component_AdminStatsDetailField, {
                                label: unref(t)("admin.stats.firstSeen"),
                                value: unref(formatDateTime)(unref(detail).stats.firstSeenAt)
                              }, null, 8, ["label", "value"]),
                              createVNode(_component_AdminStatsDetailField, {
                                label: unref(t)("admin.stats.lastSeen"),
                                value: unref(formatDateTime)(unref(detail).stats.lastSeenAt)
                              }, null, 8, ["label", "value"]),
                              createVNode(_component_AdminStatsDetailField, {
                                label: unref(t)("admin.stats.ipDetail.observedContexts"),
                                value: unref(detail).contexts.length
                              }, null, 8, ["label", "value"])
                            ]),
                            unref(detail).contexts.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mt-4 flex flex-wrap gap-2 border-t border-gray-200 pt-4 dark:border-gray-800"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).contexts, (context, index) => {
                                return openBlock(), createBlock(_component_UBadge, {
                                  key: index,
                                  color: "neutral",
                                  variant: "subtle"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(contextLabel(context)) + " \xB7 " + toDisplayString(context.count), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["title"]),
                        createVNode(_component_AdminStatsDetailSection, {
                          title: `${unref(t)("admin.stats.ipDetail.visitors")} (${unref(detail).stats.uniqueVisitors})`,
                          icon: "ph:users-three"
                        }, {
                          default: withCtx(() => [
                            unref(detail).stats.uniqueVisitors > unref(detail).visitorLimit ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mb-3 text-xs text-gray-500"
                            }, toDisplayString(unref(t)("admin.stats.ipDetail.visitorLimit", { count: unref(detail).visitorLimit })), 1)) : createCommentVNode("", true),
                            createVNode("div", { class: "overflow-x-auto" }, [
                              createVNode("table", { class: "min-w-full text-sm" }, [
                                createVNode("thead", null, [
                                  createVNode("tr", { class: "border-b border-gray-200 text-left text-xs text-gray-500 dark:border-gray-800" }, [
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visitor")), 1),
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.ipDetail.account")), 1),
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visits")), 1),
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.firstSource")), 1),
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.device")), 1),
                                    createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.lastSeen")), 1),
                                    createVNode("th", { class: "pb-2 text-right" }, toDisplayString(unref(t)("admin.stats.visitorDetail.actions")), 1)
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).visitors, (visitor) => {
                                    return openBlock(), createBlock("tr", {
                                      key: visitor.visitorId,
                                      class: "border-b border-gray-100 dark:border-gray-900"
                                    }, [
                                      createVNode("td", { class: "py-2.5 pr-4 font-mono text-xs text-gray-600 dark:text-gray-300" }, toDisplayString(visitor.visitorId), 1),
                                      createVNode("td", { class: "py-2.5 pr-4" }, [
                                        visitor.user ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "text-xs text-gray-700 dark:text-gray-300"
                                        }, toDisplayString(visitor.user.nickname || visitor.user.email), 1)) : (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "text-xs text-gray-500"
                                        }, toDisplayString(unref(t)("admin.stats.visitorDetail.anonymous")), 1))
                                      ]),
                                      createVNode("td", { class: "py-2.5 pr-4 tabular-nums" }, toDisplayString(visitor.eventCount), 1),
                                      createVNode("td", { class: "py-2.5 pr-4 text-xs text-gray-500" }, toDisplayString(visitor.firstTouch), 1),
                                      createVNode("td", { class: "py-2.5 pr-4 text-xs text-gray-500" }, toDisplayString([visitor.deviceType, visitor.browser, visitor.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                      createVNode("td", { class: "py-2.5 pr-4 whitespace-nowrap text-xs text-gray-500" }, toDisplayString(unref(formatDateTime)(visitor.lastSeenAt)), 1),
                                      createVNode("td", { class: "py-2.5 text-right" }, [
                                        createVNode(_component_UButton, {
                                          color: "neutral",
                                          variant: "ghost",
                                          icon: "ph:eye",
                                          size: "xs",
                                          title: unref(t)("admin.stats.visitorDetail.view"),
                                          onClick: ($event) => _ctx.$emit("view-visitor", visitor.visitorId)
                                        }, null, 8, ["title", "onClick"])
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["title"]),
                        createVNode(_component_AdminStatsDetailSection, {
                          title: `${unref(t)("admin.stats.visitorDetail.timeline")} (${unref(detail).stats.totalEvents})`,
                          icon: "ph:clock-counter-clockwise"
                        }, {
                          default: withCtx(() => [
                            unref(detail).stats.totalEvents > unref(detail).recentEventsLimit ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mb-3 text-xs text-gray-500"
                            }, toDisplayString(unref(t)("admin.stats.visitorDetail.timelineLimit", { count: unref(detail).recentEventsLimit })), 1)) : createCommentVNode("", true),
                            createVNode("div", { class: "space-y-3" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).recentEvents, (item) => {
                                return openBlock(), createBlock("div", {
                                  key: item.id,
                                  class: "rounded-xl border border-gray-200 p-3 dark:border-gray-800"
                                }, [
                                  createVNode("div", { class: "flex flex-wrap items-start justify-between gap-2" }, [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode(_component_UBadge, {
                                        color: "primary",
                                        variant: "subtle",
                                        size: "xs"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(eventLabel(item.eventName)), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("span", { class: "font-mono text-[11px] text-gray-500" }, toDisplayString(item.visitorId), 1),
                                      item.productName ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "text-xs text-blue-500"
                                      }, toDisplayString(item.productName), 1)) : createCommentVNode("", true)
                                    ]),
                                    createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(unref(formatDateTime)(item.createdAt)), 1)
                                  ]),
                                  createVNode("div", { class: "mt-2 grid gap-2 text-xs lg:grid-cols-2" }, [
                                    createVNode("div", { class: "break-all font-mono text-gray-700 dark:text-gray-300" }, toDisplayString(item.path || "-"), 1),
                                    createVNode("div", { class: "break-all text-gray-500" }, toDisplayString(item.referrer || "-"), 1)
                                  ]),
                                  createVNode("div", { class: "mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500" }, [
                                    createVNode("span", null, toDisplayString([item.city, item.region, item.country].filter(Boolean).join(" / ") || "-"), 1),
                                    createVNode("span", null, toDisplayString([item.deviceType, item.browser, item.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                    createVNode("span", null, toDisplayString([item.source, item.medium, item.campaign].filter(Boolean).join(" / ") || unref(t)("admin.stats.direct")), 1),
                                    item.orderId ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(t)("admin.stats.visitorDetail.orderId")) + ": " + toDisplayString(item.orderId), 1)) : createCommentVNode("", true)
                                  ])
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        }, 8, ["title"])
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { class: "max-h-[90vh] overflow-hidden bg-white ring-1 ring-gray-200 dark:bg-[#121214] dark:ring-gray-800" }, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-start justify-between gap-4" }, [
                    createVNode("div", { class: "min-w-0" }, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:globe-hemisphere-west",
                          class: "h-5 w-5 shrink-0 text-purple-500"
                        }),
                        createVNode("h3", { class: "text-lg font-semibold text-gray-900 dark:text-white" }, toDisplayString(unref(t)("admin.stats.ipDetail.title")), 1)
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "mt-1 font-mono text-xs text-gray-500 hover:text-purple-500",
                        onClick: ($event) => copy(unref(ipLabel))
                      }, toDisplayString(unref(ipLabel)), 9, ["onClick"])
                    ]),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "ph:x",
                      onClick: ($event) => isOpen.value = false
                    }, null, 8, ["onClick"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "max-h-[calc(90vh-8rem)] overflow-y-auto pr-1" }, [
                    unref(pending) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex min-h-72 items-center justify-center"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:spinner-gap",
                        class: "h-7 w-7 animate-spin text-purple-500"
                      })
                    ])) : unref(errorMessage) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex min-h-72 flex-col items-center justify-center gap-3 text-center"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:warning-circle",
                        class: "h-9 w-9 text-red-500"
                      }),
                      createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(unref(errorMessage)), 1),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "outline",
                        icon: "ph:arrows-clockwise",
                        onClick: load
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("admin.stats.refresh")), 1)
                        ]),
                        _: 1
                      })
                    ])) : unref(detail) ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "space-y-6"
                    }, [
                      createVNode("div", { class: "grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(statCards), (card) => {
                          return openBlock(), createBlock("div", {
                            key: card.label,
                            class: "rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 dark:border-gray-800 dark:bg-black/20"
                          }, [
                            createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(card.label), 1),
                            createVNode("div", {
                              class: ["mt-1 text-lg font-semibold tabular-nums", card.class]
                            }, toDisplayString(card.value), 3)
                          ]);
                        }), 128))
                      ]),
                      createVNode(_component_AdminStatsDetailSection, {
                        title: unref(t)("admin.stats.ipDetail.overview"),
                        icon: "ph:map-pin"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, [
                            createVNode(_component_AdminStatsDetailField, {
                              label: unref(t)("admin.stats.ip"),
                              value: unref(ipLabel),
                              copyable: "",
                              onCopy: copy
                            }, null, 8, ["label", "value"]),
                            createVNode(_component_AdminStatsDetailField, {
                              label: unref(t)("admin.stats.firstSeen"),
                              value: unref(formatDateTime)(unref(detail).stats.firstSeenAt)
                            }, null, 8, ["label", "value"]),
                            createVNode(_component_AdminStatsDetailField, {
                              label: unref(t)("admin.stats.lastSeen"),
                              value: unref(formatDateTime)(unref(detail).stats.lastSeenAt)
                            }, null, 8, ["label", "value"]),
                            createVNode(_component_AdminStatsDetailField, {
                              label: unref(t)("admin.stats.ipDetail.observedContexts"),
                              value: unref(detail).contexts.length
                            }, null, 8, ["label", "value"])
                          ]),
                          unref(detail).contexts.length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-4 flex flex-wrap gap-2 border-t border-gray-200 pt-4 dark:border-gray-800"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).contexts, (context, index) => {
                              return openBlock(), createBlock(_component_UBadge, {
                                key: index,
                                color: "neutral",
                                variant: "subtle"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(contextLabel(context)) + " \xB7 " + toDisplayString(context.count), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      createVNode(_component_AdminStatsDetailSection, {
                        title: `${unref(t)("admin.stats.ipDetail.visitors")} (${unref(detail).stats.uniqueVisitors})`,
                        icon: "ph:users-three"
                      }, {
                        default: withCtx(() => [
                          unref(detail).stats.uniqueVisitors > unref(detail).visitorLimit ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mb-3 text-xs text-gray-500"
                          }, toDisplayString(unref(t)("admin.stats.ipDetail.visitorLimit", { count: unref(detail).visitorLimit })), 1)) : createCommentVNode("", true),
                          createVNode("div", { class: "overflow-x-auto" }, [
                            createVNode("table", { class: "min-w-full text-sm" }, [
                              createVNode("thead", null, [
                                createVNode("tr", { class: "border-b border-gray-200 text-left text-xs text-gray-500 dark:border-gray-800" }, [
                                  createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visitor")), 1),
                                  createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.ipDetail.account")), 1),
                                  createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.visits")), 1),
                                  createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.firstSource")), 1),
                                  createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.device")), 1),
                                  createVNode("th", { class: "pb-2 pr-4" }, toDisplayString(unref(t)("admin.stats.lastSeen")), 1),
                                  createVNode("th", { class: "pb-2 text-right" }, toDisplayString(unref(t)("admin.stats.visitorDetail.actions")), 1)
                                ])
                              ]),
                              createVNode("tbody", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).visitors, (visitor) => {
                                  return openBlock(), createBlock("tr", {
                                    key: visitor.visitorId,
                                    class: "border-b border-gray-100 dark:border-gray-900"
                                  }, [
                                    createVNode("td", { class: "py-2.5 pr-4 font-mono text-xs text-gray-600 dark:text-gray-300" }, toDisplayString(visitor.visitorId), 1),
                                    createVNode("td", { class: "py-2.5 pr-4" }, [
                                      visitor.user ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "text-xs text-gray-700 dark:text-gray-300"
                                      }, toDisplayString(visitor.user.nickname || visitor.user.email), 1)) : (openBlock(), createBlock("span", {
                                        key: 1,
                                        class: "text-xs text-gray-500"
                                      }, toDisplayString(unref(t)("admin.stats.visitorDetail.anonymous")), 1))
                                    ]),
                                    createVNode("td", { class: "py-2.5 pr-4 tabular-nums" }, toDisplayString(visitor.eventCount), 1),
                                    createVNode("td", { class: "py-2.5 pr-4 text-xs text-gray-500" }, toDisplayString(visitor.firstTouch), 1),
                                    createVNode("td", { class: "py-2.5 pr-4 text-xs text-gray-500" }, toDisplayString([visitor.deviceType, visitor.browser, visitor.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                    createVNode("td", { class: "py-2.5 pr-4 whitespace-nowrap text-xs text-gray-500" }, toDisplayString(unref(formatDateTime)(visitor.lastSeenAt)), 1),
                                    createVNode("td", { class: "py-2.5 text-right" }, [
                                      createVNode(_component_UButton, {
                                        color: "neutral",
                                        variant: "ghost",
                                        icon: "ph:eye",
                                        size: "xs",
                                        title: unref(t)("admin.stats.visitorDetail.view"),
                                        onClick: ($event) => _ctx.$emit("view-visitor", visitor.visitorId)
                                      }, null, 8, ["title", "onClick"])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      createVNode(_component_AdminStatsDetailSection, {
                        title: `${unref(t)("admin.stats.visitorDetail.timeline")} (${unref(detail).stats.totalEvents})`,
                        icon: "ph:clock-counter-clockwise"
                      }, {
                        default: withCtx(() => [
                          unref(detail).stats.totalEvents > unref(detail).recentEventsLimit ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mb-3 text-xs text-gray-500"
                          }, toDisplayString(unref(t)("admin.stats.visitorDetail.timelineLimit", { count: unref(detail).recentEventsLimit })), 1)) : createCommentVNode("", true),
                          createVNode("div", { class: "space-y-3" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).recentEvents, (item) => {
                              return openBlock(), createBlock("div", {
                                key: item.id,
                                class: "rounded-xl border border-gray-200 p-3 dark:border-gray-800"
                              }, [
                                createVNode("div", { class: "flex flex-wrap items-start justify-between gap-2" }, [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(_component_UBadge, {
                                      color: "primary",
                                      variant: "subtle",
                                      size: "xs"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(eventLabel(item.eventName)), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("span", { class: "font-mono text-[11px] text-gray-500" }, toDisplayString(item.visitorId), 1),
                                    item.productName ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "text-xs text-blue-500"
                                    }, toDisplayString(item.productName), 1)) : createCommentVNode("", true)
                                  ]),
                                  createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(unref(formatDateTime)(item.createdAt)), 1)
                                ]),
                                createVNode("div", { class: "mt-2 grid gap-2 text-xs lg:grid-cols-2" }, [
                                  createVNode("div", { class: "break-all font-mono text-gray-700 dark:text-gray-300" }, toDisplayString(item.path || "-"), 1),
                                  createVNode("div", { class: "break-all text-gray-500" }, toDisplayString(item.referrer || "-"), 1)
                                ]),
                                createVNode("div", { class: "mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500" }, [
                                  createVNode("span", null, toDisplayString([item.city, item.region, item.country].filter(Boolean).join(" / ") || "-"), 1),
                                  createVNode("span", null, toDisplayString([item.deviceType, item.browser, item.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                  createVNode("span", null, toDisplayString([item.source, item.medium, item.campaign].filter(Boolean).join(" / ") || unref(t)("admin.stats.direct")), 1),
                                  item.orderId ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(t)("admin.stats.visitorDetail.orderId")) + ": " + toDisplayString(item.orderId), 1)) : createCommentVNode("", true)
                                ])
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      }, 8, ["title"])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/stats/IpDetailModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main$1, { __name: "AdminStatsIpDetailModal" });
const formatStatsNumber = (value, locale) => new Intl.NumberFormat(locale === "zh" ? "zh-CN" : "en-US").format(Number(value || 0));
const formatStatsPercent = (value) => `${Number(value || 0).toFixed(1)}%`;
const getStatsTrendWidth = (value, max) => max ? Number((value / max * 100).toFixed(1)) : 0;
const shortenVisitorId = (value) => {
  if (!value) return "-";
  if (value.length <= 14) return value;
  return `${value.slice(0, 8)}...${value.slice(-4)}`;
};
const formatRegionCity = (item) => {
  const parts = [item.region, item.city].filter(Boolean);
  return parts.length > 0 ? parts.join(" / ") : "-";
};
const buildStatsOverviewCards = (overview, translate, formatNumber, formatPercent) => [
  {
    label: translate("admin.stats.pageViews"),
    value: formatNumber(overview.pageViews),
    icon: "ph:chart-line-up",
    iconClass: "text-cyan-400",
    tip: translate("admin.stats.pageVisitsTip"),
    clickable: true,
    modalKey: "pageVisits"
  },
  {
    label: translate("admin.stats.uniqueVisitors"),
    value: formatNumber(overview.uniqueVisitors),
    icon: "ph:users",
    iconClass: "text-purple-400",
    tip: translate("admin.stats.uniqueVisitorsTip"),
    clickable: true,
    modalKey: "uniqueVisitors"
  },
  {
    label: translate("admin.stats.todayVisitors"),
    value: formatNumber(overview.todayVisitors),
    icon: "ph:clock-countdown",
    iconClass: "text-amber-400",
    tip: translate("admin.stats.todayVisitorsTip"),
    clickable: true,
    modalKey: "todayIp"
  },
  {
    label: translate("admin.stats.productVisitors"),
    value: formatNumber(overview.productVisitors),
    icon: "ph:package",
    iconClass: "text-blue-400",
    tip: translate("admin.stats.productVisitorsTip"),
    clickable: true,
    modalKey: "productVisitors"
  },
  {
    label: translate("admin.stats.checkoutVisitors"),
    value: formatNumber(overview.checkoutVisitors),
    icon: "ph:shopping-cart-simple",
    iconClass: "text-orange-400",
    tip: translate("admin.stats.checkoutVisitorsTip"),
    clickable: true,
    modalKey: "checkoutVisitors"
  },
  {
    label: translate("admin.stats.paidVisitors"),
    value: formatNumber(overview.paidVisitors),
    icon: "ph:credit-card",
    iconClass: "text-emerald-400",
    tip: translate("admin.stats.paidVisitorsTip"),
    clickable: true,
    modalKey: "paidVisitors"
  },
  {
    label: translate("admin.stats.authVisitors"),
    value: formatNumber(overview.authVisitors),
    icon: "ph:sign-in",
    iconClass: "text-pink-400",
    tip: translate("admin.stats.authVisitorsTip"),
    clickable: true,
    modalKey: "authVisitors"
  },
  {
    label: translate("admin.stats.externalVisitors"),
    value: formatNumber(overview.externalVisitors),
    icon: "ph:share-network",
    iconClass: "text-sky-400",
    tip: translate("admin.stats.externalVisitorsTip"),
    clickable: true,
    modalKey: "externalVisitors"
  },
  {
    label: translate("admin.stats.campaignVisitors"),
    value: formatNumber(overview.campaignVisitors),
    icon: "ph:megaphone",
    iconClass: "text-rose-400",
    tip: translate("admin.stats.campaignVisitorsTip"),
    clickable: true,
    modalKey: "campaignVisitors"
  },
  {
    label: translate("admin.stats.conversionRate"),
    value: formatPercent(overview.conversionRate),
    icon: "ph:funnel",
    iconClass: "text-green-400",
    tip: translate("admin.stats.conversionRateTip"),
    clickable: false,
    modalKey: ""
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "stats",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const { formatDateTime } = useFormatTime();
    const router = useRouter();
    const preset = ref("today");
    const rangeDays = computed(() => {
      if (preset.value === "today" || preset.value === "yesterday") {
        return 1;
      }
      return Number.parseInt(preset.value.replace("d", ""), 10) || 7;
    });
    const dayOptions = computed(() => [
      { value: "today", label: t("admin.stats.today") },
      { value: "yesterday", label: t("admin.stats.yesterday") },
      { value: "7d", label: t("admin.stats.last7Days") },
      { value: "30d", label: t("admin.stats.last30Days") },
      { value: "90d", label: t("admin.stats.last90Days") }
    ]);
    const statsUrl = computed(
      () => `/api/admin/stats?preset=${preset.value}&days=${rangeDays.value}&limit=50`
    );
    const { data, pending, refresh, error } = useFetch(
      statsUrl,
      "$tlqLiy-3-w"
      /* nuxt-injected */
    );
    watch(error, (value) => {
      if ((value == null ? void 0 : value.statusCode) === 401) {
        router.push("/admin/login");
      }
    });
    const overview = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.overview) || {};
    });
    const trend = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.trend) || [];
    });
    const geography = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.geography) || [];
    });
    const devices = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.devices) || [];
    });
    const sourceCategories = computed(() => {
      var _a, _b;
      return ((_b = (_a = data.value) == null ? void 0 : _a.sources) == null ? void 0 : _b.categories) || [];
    });
    const externalSources = computed(() => {
      var _a, _b;
      return ((_b = (_a = data.value) == null ? void 0 : _a.sources) == null ? void 0 : _b.external) || [];
    });
    const firstTouchSources = computed(() => {
      var _a, _b;
      return ((_b = (_a = data.value) == null ? void 0 : _a.sources) == null ? void 0 : _b.firstTouch) || [];
    });
    const lastTouchSources = computed(() => {
      var _a, _b;
      return ((_b = (_a = data.value) == null ? void 0 : _a.sources) == null ? void 0 : _b.lastTouch) || [];
    });
    const funnel = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.funnel) || [];
    });
    const isModalOpen = ref(false);
    const modalTitle = ref("");
    const modalSource = ref("visitors");
    const modalEventType = ref("");
    const modalSourceType = ref("");
    const isVisitorDetailOpen = ref(false);
    const selectedVisitorId = ref(null);
    const isIpDetailOpen = ref(false);
    const selectedIp = ref(null);
    function openVisitorDetail(visitorId) {
      selectedVisitorId.value = visitorId;
      isVisitorDetailOpen.value = true;
    }
    function openIpDetail(ip) {
      selectedIp.value = ip;
      isIpDetailOpen.value = true;
    }
    function openVisitorFromIp(visitorId) {
      isIpDetailOpen.value = false;
      openVisitorDetail(visitorId);
    }
    const {
      page: modalPage,
      pageSize: modalPageSize,
      onPageChange: onModalPageChange
    } = usePagination(20);
    const visitorsUrl = computed(
      () => {
        let url = `/api/admin/stats/visitors?preset=${preset.value}&days=${rangeDays.value}&page=${modalPage.value}&pageSize=${modalPageSize.value}`;
        if (modalEventType.value) {
          url += `&type=${modalEventType.value}`;
        }
        if (modalSourceType.value) {
          url += `&sourceType=${modalSourceType.value}`;
        }
        return url;
      }
    );
    const eventsUrl = computed(
      () => `/api/admin/stats/events?preset=${preset.value}&days=${rangeDays.value}&page=${modalPage.value}&pageSize=${modalPageSize.value}`
    );
    const pageVisitsUrl = computed(
      () => `/api/admin/stats/page-visits?preset=${preset.value}&days=${rangeDays.value}&page=${modalPage.value}&pageSize=${modalPageSize.value}`
    );
    const {
      data: visitorsData,
      pending: visitorsPending,
      refresh: refreshVisitors,
      error: visitorsError
    } = useFetch(
      visitorsUrl,
      { immediate: true },
      "$kglNl4jBoA"
      /* nuxt-injected */
    );
    const {
      data: eventsData,
      pending: eventsPending,
      refresh: refreshEvents,
      error: eventsError
    } = useFetch(
      eventsUrl,
      { immediate: true },
      "$HqQHuL6bP0"
      /* nuxt-injected */
    );
    const {
      data: pageVisitsData,
      pending: pageVisitsPending,
      refresh: refreshPageVisits,
      error: pageVisitsError
    } = useFetch(
      pageVisitsUrl,
      { immediate: true },
      "$hoT7nVyFoA"
      /* nuxt-injected */
    );
    const visitorRows = computed(() => {
      var _a;
      return ((_a = visitorsData.value) == null ? void 0 : _a.items) || [];
    });
    const visitorTotalItems = computed(
      () => {
        var _a, _b;
        return Number(((_b = (_a = visitorsData.value) == null ? void 0 : _a.pagination) == null ? void 0 : _b.totalItems) || 0);
      }
    );
    const eventRows = computed(() => {
      var _a;
      return ((_a = eventsData.value) == null ? void 0 : _a.items) || [];
    });
    const eventTotalItems = computed(
      () => {
        var _a, _b;
        return Number(((_b = (_a = eventsData.value) == null ? void 0 : _a.pagination) == null ? void 0 : _b.totalItems) || 0);
      }
    );
    const pageVisitRows = computed(() => {
      var _a;
      return ((_a = pageVisitsData.value) == null ? void 0 : _a.items) || [];
    });
    const pageVisitTotalItems = computed(
      () => {
        var _a, _b;
        return Number(((_b = (_a = pageVisitsData.value) == null ? void 0 : _a.pagination) == null ? void 0 : _b.totalItems) || 0);
      }
    );
    const modalRows = computed(
      () => modalSource.value === "events" ? eventRows.value : modalSource.value === "pageVisits" ? pageVisitRows.value : visitorRows.value
    );
    const modalTotalItems = computed(
      () => modalSource.value === "events" ? eventTotalItems.value : modalSource.value === "pageVisits" ? pageVisitTotalItems.value : visitorTotalItems.value
    );
    const modalPending = computed(
      () => modalSource.value === "events" ? eventsPending.value : modalSource.value === "pageVisits" ? pageVisitsPending.value : visitorsPending.value
    );
    watch([visitorsError, eventsError, pageVisitsError], ([vErr, eErr, pErr]) => {
      const err = vErr || eErr || pErr;
      if ((err == null ? void 0 : err.statusCode) === 401) {
        router.push("/admin/login");
      }
    });
    const maxPageViews = computed(
      () => Math.max(...trend.value.map((item) => Number(item.pageViews || 0)), 1)
    );
    const maxUniqueVisitors = computed(
      () => Math.max(
        ...trend.value.map((item) => Number(item.uniqueVisitors || 0)),
        1
      )
    );
    const overviewCards = computed(() => buildStatsOverviewCards(
      overview.value,
      t,
      formatNumber,
      formatPercent
    ));
    const funnelWithRate = computed(() => {
      var _a;
      const base = Number(((_a = funnel.value[0]) == null ? void 0 : _a.visitors) || 0);
      return funnel.value.map((item) => ({
        ...item,
        rate: base > 0 ? Number((Number(item.visitors || 0) / base * 100).toFixed(1)) : 0
      }));
    });
    function handleRefresh() {
      refresh();
      refreshVisitors();
      refreshEvents();
      refreshPageVisits();
    }
    watch(preset, () => {
      modalPage.value = 1;
    });
    function formatNumber(value) {
      return formatStatsNumber(value, locale.value);
    }
    function formatPercent(value) {
      return formatStatsPercent(value);
    }
    function getTrendWidth(value, max) {
      return getStatsTrendWidth(value, max);
    }
    function shortVisitor(value) {
      return shortenVisitorId(value);
    }
    function formatSourceLabel(value) {
      if (!value) return "-";
      const normalized = value.toLowerCase();
      if (normalized === "direct") return t("admin.stats.direct");
      if (normalized === "search") return t("admin.stats.search");
      if (normalized === "social") return t("admin.stats.social");
      if (normalized === "referral") return t("admin.stats.referral");
      if (normalized === "campaign") return t("admin.stats.campaign");
      return value;
    }
    const cleanupDays = ref(90);
    const isCleaningUp = ref(false);
    const { confirm } = useConfirm();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    async function confirmCleanup() {
      const confirmed = await confirm({
        title: t("admin.dataCleanup.confirmTitle"),
        description: t("admin.dataCleanup.confirmMessage", { days: cleanupDays.value })
      });
      if (!confirmed) return;
      isCleaningUp.value = true;
      try {
        const result = await $fetch("/api/admin/stats/cleanup", {
          method: "POST",
          body: { days: cleanupDays.value }
        });
        useToast().add({
          title: t("admin.dataCleanup.success", { count: result.deletedCount, days: cleanupDays.value }),
          color: "success"
        });
      } catch (e) {
        useToast().add({
          title: t("admin.dataCleanup.error"),
          color: "error",
          description: String(e)
        });
      } finally {
        isCleaningUp.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$z;
      const _component_UIcon = _sfc_main$E;
      const _component_UCard = _sfc_main$5;
      const _component_UInput = _sfc_main$i;
      const _component_FullScreenModal = __nuxt_component_7$1;
      const _component_UBadge = _sfc_main$v;
      const _component_UPagination = _sfc_main$l;
      const _component_AdminStatsVisitorDetailModal = __nuxt_component_7;
      const _component_AdminStatsIpDetailModal = __nuxt_component_8;
      _push(`<!--[--><div class="min-h-[calc(100vh-8rem)]"><div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-8"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(unref(t)("admin.stats.title"))}</h1><p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">${ssrInterpolate(unref(t)("admin.stats.subtitle"))}</p></div><div class="flex items-center gap-2"><div class="flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121214] p-1"><!--[-->`);
      ssrRenderList(unref(dayOptions), (option) => {
        _push(`<button type="button" class="${ssrRenderClass([unref(preset) === option.value ? "bg-purple-600 text-white" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5", "px-3 py-1.5 rounded-lg text-sm transition-colors"])}">${ssrInterpolate(option.label)}</button>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrows-clockwise",
        loading: unref(pending),
        onClick: handleRefresh
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("admin.stats.refresh"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("admin.stats.refresh")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8"><!--[-->`);
      ssrRenderList(unref(overviewCards), (card) => {
        _push(`<div class="${ssrRenderClass([card.clickable ? "cursor-pointer hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/5" : "", "bg-white dark:bg-[#121214] p-5 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm transition-all"])}"><div class="flex items-center justify-between"><span class="text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(card.label)}</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: card.icon,
          class: ["w-5 h-5", card.iconClass]
        }, null, _parent));
        _push(`</div><div class="mt-4 text-3xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(card.value)}</div><p class="mt-2 text-xs text-gray-500">${ssrInterpolate(card.tip)}</p></div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-6 mb-8"><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm p-6"><div class="flex items-center justify-between mb-6"><div><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.stats.trafficTrend"))}</h2><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(unref(t)("admin.stats.trafficTrendSubtitle"))}</p></div></div><div class="space-y-3"><!--[-->`);
      ssrRenderList(unref(trend), (item) => {
        _push(`<div class="grid grid-cols-[72px_1fr_72px_72px_72px] gap-3 items-center"><div class="text-xs text-gray-500">${ssrInterpolate(item.label)}</div><div class="space-y-2 bg-gray-100 dark:bg-transparent rounded-lg p-1"><div class="h-2 rounded-full bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-cyan-500" style="${ssrRenderStyle({ width: `${getTrendWidth(item.pageViews, unref(maxPageViews))}%` })}"></div></div><div class="h-2 rounded-full bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-purple-500" style="${ssrRenderStyle({ width: `${getTrendWidth(item.uniqueVisitors, unref(maxUniqueVisitors))}%` })}"></div></div></div><div class="text-right text-sm text-cyan-600 dark:text-cyan-300">${ssrInterpolate(formatNumber(item.pageViews))}</div><div class="text-right text-sm text-purple-600 dark:text-purple-300">${ssrInterpolate(formatNumber(item.uniqueVisitors))}</div><div class="text-right text-sm text-emerald-600 dark:text-emerald-300">${ssrInterpolate(formatNumber(item.paidVisitors))}</div></div>`);
      });
      _push(`<!--]--></div><div class="mt-4 flex items-center gap-6 text-xs text-gray-500"><div class="flex items-center gap-2"><div class="w-2.5 h-2.5 rounded-full bg-cyan-500"></div> ${ssrInterpolate(unref(t)("admin.stats.pageViews"))}</div><div class="flex items-center gap-2"><div class="w-2.5 h-2.5 rounded-full bg-purple-500"></div> ${ssrInterpolate(unref(t)("admin.stats.uniqueVisitors"))}</div><div class="flex items-center gap-2"><div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div> ${ssrInterpolate(unref(t)("admin.stats.paidVisitors"))}</div></div></div><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm p-6"><div><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.stats.funnel"))}</h2><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(unref(t)("admin.stats.funnelSubtitle"))}</p></div><div class="mt-6 space-y-4"><!--[-->`);
      ssrRenderList(unref(funnelWithRate), (step) => {
        _push(`<div class="space-y-2"><div class="flex items-center justify-between text-sm"><span class="text-gray-500 dark:text-gray-300">${ssrInterpolate(step.label)}</span><span class="text-gray-900 dark:text-white font-medium">${ssrInterpolate(formatNumber(step.visitors))} \xB7 ${ssrInterpolate(formatPercent(step.rate))}</span></div><div class="h-2 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-emerald-500" style="${ssrRenderStyle({ width: `${step.rate}%` })}"></div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8"><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm p-6"><div class="flex items-center justify-between mb-5"><div><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.stats.firstTouch"))}</h2><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(unref(t)("admin.stats.firstTouchSubtitle"))}</p></div></div><div class="space-y-3"><!--[-->`);
      ssrRenderList(unref(firstTouchSources), (item) => {
        _push(`<div class="flex items-center gap-3"><div class="w-40 text-sm text-gray-600 dark:text-gray-300 truncate">${ssrInterpolate(formatSourceLabel(item.label))}</div><div class="flex-1 h-2 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-purple-500" style="${ssrRenderStyle({ width: `${item.percentage}%` })}"></div></div><div class="w-16 text-right text-sm text-gray-900 dark:text-white">${ssrInterpolate(formatNumber(item.count))}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm p-6"><div class="flex items-center justify-between mb-5"><div><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.stats.lastTouch"))}</h2><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(unref(t)("admin.stats.lastTouchSubtitle"))}</p></div></div><div class="space-y-3"><!--[-->`);
      ssrRenderList(unref(lastTouchSources), (item) => {
        _push(`<div class="flex items-center gap-3"><div class="w-40 text-sm text-gray-600 dark:text-gray-300 truncate">${ssrInterpolate(formatSourceLabel(item.label))}</div><div class="flex-1 h-2 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-cyan-500" style="${ssrRenderStyle({ width: `${item.percentage}%` })}"></div></div><div class="w-16 text-right text-sm text-gray-900 dark:text-white">${ssrInterpolate(formatNumber(item.count))}</div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8"><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm p-6"><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.stats.sourceCategories"))}</h2><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(unref(t)("admin.stats.sourceCategoriesSubtitle"))}</p><div class="mt-5 space-y-3"><!--[-->`);
      ssrRenderList(unref(sourceCategories), (item) => {
        _push(`<div class="flex items-center justify-between text-sm"><span class="text-gray-500 dark:text-gray-300">${ssrInterpolate(formatSourceLabel(item.label))}</span><span class="text-gray-900 dark:text-white">${ssrInterpolate(formatNumber(item.count))} \xB7 ${ssrInterpolate(formatPercent(item.percentage))}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm p-6"><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.stats.externalSources"))}</h2><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(unref(t)("admin.stats.externalSourcesSubtitle"))}</p><div class="mt-5 space-y-3"><!--[-->`);
      ssrRenderList(unref(externalSources), (item) => {
        _push(`<div class="flex items-center justify-between text-sm"><span class="text-gray-500 dark:text-gray-300">${ssrInterpolate(formatSourceLabel(item.label))}</span><span class="text-gray-900 dark:text-white">${ssrInterpolate(formatNumber(item.count))} \xB7 ${ssrInterpolate(formatPercent(item.percentage))}</span></div>`);
      });
      _push(`<!--]--></div></div></div><div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8"><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm p-6"><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.stats.regions"))}</h2><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(unref(t)("admin.stats.regionsSubtitle"))}</p><div class="mt-5 space-y-3"><!--[-->`);
      ssrRenderList(unref(geography), (item) => {
        _push(`<div class="flex items-center justify-between text-sm"><span class="text-gray-600 dark:text-gray-300">${ssrInterpolate(item.label)}</span><span class="text-gray-900 dark:text-white">${ssrInterpolate(formatNumber(item.count))} \xB7 ${ssrInterpolate(formatPercent(item.percentage))}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm p-6"><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.stats.devices"))}</h2><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(unref(t)("admin.stats.devicesSubtitle"))}</p><div class="mt-5 space-y-3"><!--[-->`);
      ssrRenderList(unref(devices), (item) => {
        _push(`<div class="flex items-center justify-between text-sm"><span class="text-gray-600 dark:text-gray-300">${ssrInterpolate(item.label)}</span><span class="text-gray-900 dark:text-white">${ssrInterpolate(formatNumber(item.count))} \xB7 ${ssrInterpolate(formatPercent(item.percentage))}</span></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
      _push(ssrRenderComponent(_component_UCard, { class: "mt-8" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h2 class="text-lg font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(t)("admin.dataCleanup.title"))}</h2><p class="text-sm text-gray-500 dark:text-gray-400 mt-1"${_scopeId}>${ssrInterpolate(unref(t)("admin.dataCleanup.description"))}</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "text-lg font-bold text-gray-900 dark:text-white" }, toDisplayString(unref(t)("admin.dataCleanup.title")), 1),
                  createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400 mt-1" }, toDisplayString(unref(t)("admin.dataCleanup.description")), 1)
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(cleanupDays),
              "onUpdate:modelValue": ($event) => isRef(cleanupDays) ? cleanupDays.value = $event : null,
              type: "number",
              min: 1,
              max: 365,
              class: "w-28",
              placeholder: unref(t)("admin.dataCleanup.keepDaysPlaceholder")
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(t)("admin.dataCleanup.keepDays"))}</span>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "error",
              variant: "outline",
              loading: unref(isCleaningUp),
              disabled: unref(isCleaningUp) || !unref(hasAdminPerm)("stats:edit"),
              onClick: confirmCleanup
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(isCleaningUp) ? unref(t)("admin.dataCleanup.cleaningUp") : unref(t)("admin.dataCleanup.cleanupBtn"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(isCleaningUp) ? unref(t)("admin.dataCleanup.cleaningUp") : unref(t)("admin.dataCleanup.cleanupBtn")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode(_component_UInput, {
                  modelValue: unref(cleanupDays),
                  "onUpdate:modelValue": ($event) => isRef(cleanupDays) ? cleanupDays.value = $event : null,
                  type: "number",
                  min: 1,
                  max: 365,
                  class: "w-28",
                  placeholder: unref(t)("admin.dataCleanup.keepDaysPlaceholder")
                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(t)("admin.dataCleanup.keepDays")), 1),
                createVNode(_component_UButton, {
                  color: "error",
                  variant: "outline",
                  loading: unref(isCleaningUp),
                  disabled: unref(isCleaningUp) || !unref(hasAdminPerm)("stats:edit"),
                  onClick: confirmCleanup
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(isCleaningUp) ? unref(t)("admin.dataCleanup.cleaningUp") : unref(t)("admin.dataCleanup.cleanupBtn")), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FullScreenModal, {
        modelValue: unref(isModalOpen),
        "onUpdate:modelValue": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : null,
        title: unref(modalTitle),
        "max-width": "max-w-7xl"
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between w-full"${_scopeId}><div class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.common.showing"))} <span class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(modalTotalItems) > 0 ? (unref(modalPage) - 1) * unref(modalPageSize) + 1 : 0)}</span> ${ssrInterpolate(_ctx.$t("admin.common.to"))} <span class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(Math.min(unref(modalPage) * unref(modalPageSize), unref(modalTotalItems)))}</span> ${ssrInterpolate(_ctx.$t("admin.common.of"))} <span class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(modalTotalItems))}</span> ${ssrInterpolate(_ctx.$t("admin.common.results"))}</div>`);
            _push2(ssrRenderComponent(_component_UPagination, {
              modelValue: unref(modalPage),
              "onUpdate:modelValue": ($event) => isRef(modalPage) ? modalPage.value = $event : null,
              total: unref(modalTotalItems),
              "items-per-page": unref(modalPageSize),
              disabled: unref(modalPending),
              "onUpdate:page": (val) => unref(onModalPageChange)(val)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between w-full" }, [
                createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-400" }, [
                  createTextVNode(toDisplayString(_ctx.$t("admin.common.showing")) + " ", 1),
                  createVNode("span", { class: "text-gray-900 dark:text-white" }, toDisplayString(unref(modalTotalItems) > 0 ? (unref(modalPage) - 1) * unref(modalPageSize) + 1 : 0), 1),
                  createTextVNode(" " + toDisplayString(_ctx.$t("admin.common.to")) + " ", 1),
                  createVNode("span", { class: "text-gray-900 dark:text-white" }, toDisplayString(Math.min(unref(modalPage) * unref(modalPageSize), unref(modalTotalItems))), 1),
                  createTextVNode(" " + toDisplayString(_ctx.$t("admin.common.of")) + " ", 1),
                  createVNode("span", { class: "text-gray-900 dark:text-white" }, toDisplayString(unref(modalTotalItems)), 1),
                  createTextVNode(" " + toDisplayString(_ctx.$t("admin.common.results")), 1)
                ]),
                createVNode(_component_UPagination, {
                  modelValue: unref(modalPage),
                  "onUpdate:modelValue": ($event) => isRef(modalPage) ? modalPage.value = $event : null,
                  total: unref(modalTotalItems),
                  "items-per-page": unref(modalPageSize),
                  disabled: unref(modalPending),
                  "onUpdate:page": (val) => unref(onModalPageChange)(val)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "total", "items-per-page", "disabled", "onUpdate:page"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-auto"${_scopeId}>`);
            if (unref(modalSource) === "visitors") {
              _push2(`<table class="min-w-full text-sm"${_scopeId}><thead class="sticky top-0 bg-white dark:bg-[#121214]"${_scopeId}><tr class="text-left text-gray-500 border-b border-gray-200 dark:border-gray-800"${_scopeId}><th class="py-3 px-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.visitor"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.registered") || "Registered")}</th><th class="py-3 pr-4 whitespace-nowrap font-mono text-xs"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.ip"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.firstSource"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.region"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.device"))}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.pageViews"))}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>Products</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.checkout"))}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.paid"))}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>Auth</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.lastSeen") || "Last Seen")}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.actions"))}</th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(unref(modalRows), (item) => {
                var _a, _b;
                _push2(`<tr class="border-b border-gray-100 dark:border-gray-900/80"${_scopeId}><td class="py-3 px-4 text-gray-700 dark:text-gray-200 font-mono text-xs"${_scopeId}>${ssrInterpolate(shortVisitor(item.visitorId))}</td><td class="py-3 pr-4"${_scopeId}>`);
                if (item.userId) {
                  _push2(ssrRenderComponent(_component_UBadge, {
                    color: "success",
                    variant: "subtle",
                    size: "xs",
                    class: "whitespace-nowrap max-w-[160px] truncate",
                    title: ((_a = item.user) == null ? void 0 : _a.email) || ((_b = item.user) == null ? void 0 : _b.nickname) || ""
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      var _a2, _b2, _c, _d;
                      if (_push3) {
                        _push3(`${ssrInterpolate(((_a2 = item.user) == null ? void 0 : _a2.nickname) || ((_b2 = item.user) == null ? void 0 : _b2.email) || "Yes")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(((_c = item.user) == null ? void 0 : _c.nickname) || ((_d = item.user) == null ? void 0 : _d.email) || "Yes"), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_UBadge, {
                    color: "neutral",
                    variant: "subtle",
                    size: "xs"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`No`);
                      } else {
                        return [
                          createTextVNode("No")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                }
                _push2(`</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 font-mono text-xs"${_scopeId}>${ssrInterpolate(item.ip || "Local")}</td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap"${_scopeId}>${ssrInterpolate(formatSourceLabel(item.firstTouch))}</td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.country)}</td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.deviceType)}</td><td class="py-3 pr-4 text-gray-900 dark:text-white text-right tabular-nums"${_scopeId}>${ssrInterpolate(formatNumber(item.pageViews))}</td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 text-right tabular-nums"${_scopeId}>${ssrInterpolate(formatNumber(item.productViews))}</td><td class="py-3 pr-4 text-amber-600 dark:text-amber-300 text-right tabular-nums"${_scopeId}>${ssrInterpolate(formatNumber(item.checkouts))}</td><td class="py-3 pr-4 text-emerald-600 dark:text-emerald-300 text-right tabular-nums"${_scopeId}>${ssrInterpolate(formatNumber(item.paid))}</td><td class="py-3 pr-4 text-pink-600 dark:text-pink-300 text-right tabular-nums"${_scopeId}>${ssrInterpolate(formatNumber(item.auth))}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(item.lastSeenAt))}</td><td class="py-3 pr-4 text-right"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:eye",
                  size: "sm",
                  title: unref(t)("admin.stats.visitorDetail.view"),
                  onClick: ($event) => openVisitorDetail(item.visitorId)
                }, null, _parent2, _scopeId));
                _push2(`</td></tr>`);
              });
              _push2(`<!--]-->`);
              if (!unref(modalPending) && unref(modalRows).length === 0) {
                _push2(`<tr${_scopeId}><td colspan="13" class="px-4 py-10 text-center text-gray-500"${_scopeId}>-</td></tr>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</tbody></table>`);
            } else if (unref(modalSource) === "pageVisits") {
              _push2(`<table class="min-w-full text-sm"${_scopeId}><thead class="sticky top-0 bg-white dark:bg-[#121214]"${_scopeId}><tr class="text-left text-gray-500 border-b border-gray-200 dark:border-gray-800"${_scopeId}><th class="py-3 px-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.path"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.time"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.visitor"))}</th><th class="py-3 pr-4 whitespace-nowrap font-mono text-xs"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.ip"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.referrer"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.device"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.browser"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.os"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.region"))}</th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(unref(modalRows), (item) => {
                _push2(`<tr class="border-b border-gray-100 dark:border-gray-900/80"${_scopeId}><td class="py-3 px-4 text-gray-700 dark:text-gray-200 font-mono text-xs max-w-[200px] truncate"${ssrRenderAttr("title", item.path)}${_scopeId}>${ssrInterpolate(item.path)}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(item.createdAt))}</td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 font-mono text-xs"${_scopeId}>${ssrInterpolate(shortVisitor(item.visitorId))}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 font-mono text-xs"${_scopeId}>${ssrInterpolate(item.ip || "Local")}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs max-w-[150px] truncate"${ssrRenderAttr("title", item.referrer)}${_scopeId}>${ssrInterpolate(item.referrer || "-")}</td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.deviceType || "-")}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs"${_scopeId}>${ssrInterpolate(item.browser || "-")}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs"${_scopeId}>${ssrInterpolate(item.os || "-")}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(unref(formatRegionCity)(item))}</td></tr>`);
              });
              _push2(`<!--]-->`);
              if (!unref(modalPending) && unref(modalRows).length === 0) {
                _push2(`<tr${_scopeId}><td colspan="9" class="px-4 py-10 text-center text-gray-500"${_scopeId}>-</td></tr>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</tbody></table>`);
            } else if (unref(modalSource) === "events") {
              _push2(`<table class="min-w-full text-sm"${_scopeId}><thead class="sticky top-0 bg-white dark:bg-[#121214]"${_scopeId}><tr class="text-left text-gray-500 border-b border-gray-200 dark:border-gray-800"${_scopeId}><th class="py-3 px-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.ip"))}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.ipDetail.uniqueVisitors"))}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.visits"))}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.ipDetail.registeredUsers"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.country"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.regionCity"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.device"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.browser"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.os"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.firstSeen"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.lastSeen"))}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.actions"))}</th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(unref(modalRows), (item) => {
                _push2(`<tr class="border-b border-gray-100 dark:border-gray-900/80"${_scopeId}><td class="py-3 px-4 text-gray-700 dark:text-gray-200 font-mono text-xs"${_scopeId}>${ssrInterpolate(item.ip || "Local")}</td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 text-right tabular-nums"${_scopeId}>${ssrInterpolate(formatNumber(item.visitorCount))}</td><td class="py-3 pr-4 text-gray-900 dark:text-white text-right tabular-nums"${_scopeId}>${ssrInterpolate(formatNumber(item.visitCount))}</td><td class="py-3 pr-4 text-right tabular-nums"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: item.registeredUserCount > 0 ? "success" : "neutral",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(formatNumber(item.registeredUserCount))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(formatNumber(item.registeredUserCount)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.country)}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(unref(formatRegionCity)(item))}</td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.deviceType)}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs"${_scopeId}>${ssrInterpolate(item.browser || "-")}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs"${_scopeId}>${ssrInterpolate(item.os || "-")}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(item.firstSeenAt))}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(item.lastSeenAt))}</td><td class="py-3 pr-4 text-right"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:eye",
                  size: "sm",
                  title: unref(t)("admin.stats.ipDetail.view"),
                  onClick: ($event) => openIpDetail(item.ip)
                }, null, _parent2, _scopeId));
                _push2(`</td></tr>`);
              });
              _push2(`<!--]-->`);
              if (!unref(modalPending) && unref(modalRows).length === 0) {
                _push2(`<tr${_scopeId}><td colspan="12" class="px-4 py-10 text-center text-gray-500"${_scopeId}>-</td></tr>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</tbody></table>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "overflow-auto" }, [
                unref(modalSource) === "visitors" ? (openBlock(), createBlock("table", {
                  key: 0,
                  class: "min-w-full text-sm"
                }, [
                  createVNode("thead", { class: "sticky top-0 bg-white dark:bg-[#121214]" }, [
                    createVNode("tr", { class: "text-left text-gray-500 border-b border-gray-200 dark:border-gray-800" }, [
                      createVNode("th", { class: "py-3 px-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.visitor")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.registered") || "Registered"), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap font-mono text-xs" }, toDisplayString(unref(t)("admin.stats.ip")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.firstSource")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.region")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.device")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, toDisplayString(unref(t)("admin.stats.pageViews")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, "Products"),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, toDisplayString(unref(t)("admin.stats.checkout")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, toDisplayString(unref(t)("admin.stats.paid")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, "Auth"),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.lastSeen") || "Last Seen"), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, toDisplayString(unref(t)("admin.stats.visitorDetail.actions")), 1)
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(modalRows), (item) => {
                      var _a, _b;
                      return openBlock(), createBlock("tr", {
                        key: item.visitorId,
                        class: "border-b border-gray-100 dark:border-gray-900/80"
                      }, [
                        createVNode("td", { class: "py-3 px-4 text-gray-700 dark:text-gray-200 font-mono text-xs" }, toDisplayString(shortVisitor(item.visitorId)), 1),
                        createVNode("td", { class: "py-3 pr-4" }, [
                          item.userId ? (openBlock(), createBlock(_component_UBadge, {
                            key: 0,
                            color: "success",
                            variant: "subtle",
                            size: "xs",
                            class: "whitespace-nowrap max-w-[160px] truncate",
                            title: ((_a = item.user) == null ? void 0 : _a.email) || ((_b = item.user) == null ? void 0 : _b.nickname) || ""
                          }, {
                            default: withCtx(() => {
                              var _a2, _b2;
                              return [
                                createTextVNode(toDisplayString(((_a2 = item.user) == null ? void 0 : _a2.nickname) || ((_b2 = item.user) == null ? void 0 : _b2.email) || "Yes"), 1)
                              ];
                            }),
                            _: 2
                          }, 1032, ["title"])) : (openBlock(), createBlock(_component_UBadge, {
                            key: 1,
                            color: "neutral",
                            variant: "subtle",
                            size: "xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("No")
                            ]),
                            _: 1
                          }))
                        ]),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 font-mono text-xs" }, toDisplayString(item.ip || "Local"), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap" }, toDisplayString(formatSourceLabel(item.firstTouch)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap" }, toDisplayString(item.country), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap" }, toDisplayString(item.deviceType), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-900 dark:text-white text-right tabular-nums" }, toDisplayString(formatNumber(item.pageViews)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 text-right tabular-nums" }, toDisplayString(formatNumber(item.productViews)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-amber-600 dark:text-amber-300 text-right tabular-nums" }, toDisplayString(formatNumber(item.checkouts)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-emerald-600 dark:text-emerald-300 text-right tabular-nums" }, toDisplayString(formatNumber(item.paid)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-pink-600 dark:text-pink-300 text-right tabular-nums" }, toDisplayString(formatNumber(item.auth)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs" }, toDisplayString(unref(formatDateTime)(item.lastSeenAt)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-right" }, [
                          createVNode(_component_UButton, {
                            color: "neutral",
                            variant: "ghost",
                            icon: "ph:eye",
                            size: "sm",
                            title: unref(t)("admin.stats.visitorDetail.view"),
                            onClick: ($event) => openVisitorDetail(item.visitorId)
                          }, null, 8, ["title", "onClick"])
                        ])
                      ]);
                    }), 128)),
                    !unref(modalPending) && unref(modalRows).length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                      createVNode("td", {
                        colspan: "13",
                        class: "px-4 py-10 text-center text-gray-500"
                      }, "-")
                    ])) : createCommentVNode("", true)
                  ])
                ])) : unref(modalSource) === "pageVisits" ? (openBlock(), createBlock("table", {
                  key: 1,
                  class: "min-w-full text-sm"
                }, [
                  createVNode("thead", { class: "sticky top-0 bg-white dark:bg-[#121214]" }, [
                    createVNode("tr", { class: "text-left text-gray-500 border-b border-gray-200 dark:border-gray-800" }, [
                      createVNode("th", { class: "py-3 px-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.path")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.time")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.visitor")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap font-mono text-xs" }, toDisplayString(unref(t)("admin.stats.ip")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.referrer")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.device")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.browser")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.os")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.region")), 1)
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(modalRows), (item) => {
                      return openBlock(), createBlock("tr", {
                        key: item.id,
                        class: "border-b border-gray-100 dark:border-gray-900/80"
                      }, [
                        createVNode("td", {
                          class: "py-3 px-4 text-gray-700 dark:text-gray-200 font-mono text-xs max-w-[200px] truncate",
                          title: item.path
                        }, toDisplayString(item.path), 9, ["title"]),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs" }, toDisplayString(unref(formatDateTime)(item.createdAt)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 font-mono text-xs" }, toDisplayString(shortVisitor(item.visitorId)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 font-mono text-xs" }, toDisplayString(item.ip || "Local"), 1),
                        createVNode("td", {
                          class: "py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs max-w-[150px] truncate",
                          title: item.referrer
                        }, toDisplayString(item.referrer || "-"), 9, ["title"]),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap" }, toDisplayString(item.deviceType || "-"), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs" }, toDisplayString(item.browser || "-"), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs" }, toDisplayString(item.os || "-"), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs" }, toDisplayString(unref(formatRegionCity)(item)), 1)
                      ]);
                    }), 128)),
                    !unref(modalPending) && unref(modalRows).length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                      createVNode("td", {
                        colspan: "9",
                        class: "px-4 py-10 text-center text-gray-500"
                      }, "-")
                    ])) : createCommentVNode("", true)
                  ])
                ])) : unref(modalSource) === "events" ? (openBlock(), createBlock("table", {
                  key: 2,
                  class: "min-w-full text-sm"
                }, [
                  createVNode("thead", { class: "sticky top-0 bg-white dark:bg-[#121214]" }, [
                    createVNode("tr", { class: "text-left text-gray-500 border-b border-gray-200 dark:border-gray-800" }, [
                      createVNode("th", { class: "py-3 px-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.ip")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, toDisplayString(unref(t)("admin.stats.ipDetail.uniqueVisitors")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, toDisplayString(unref(t)("admin.stats.visits")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, toDisplayString(unref(t)("admin.stats.ipDetail.registeredUsers")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.country")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.regionCity")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.device")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.browser")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.os")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.firstSeen")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.lastSeen")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, toDisplayString(unref(t)("admin.stats.visitorDetail.actions")), 1)
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(modalRows), (item) => {
                      return openBlock(), createBlock("tr", {
                        key: item.ip,
                        class: "border-b border-gray-100 dark:border-gray-900/80"
                      }, [
                        createVNode("td", { class: "py-3 px-4 text-gray-700 dark:text-gray-200 font-mono text-xs" }, toDisplayString(item.ip || "Local"), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 text-right tabular-nums" }, toDisplayString(formatNumber(item.visitorCount)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-900 dark:text-white text-right tabular-nums" }, toDisplayString(formatNumber(item.visitCount)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-right tabular-nums" }, [
                          createVNode(_component_UBadge, {
                            color: item.registeredUserCount > 0 ? "success" : "neutral",
                            variant: "subtle",
                            size: "xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(formatNumber(item.registeredUserCount)), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap" }, toDisplayString(item.country), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs" }, toDisplayString(unref(formatRegionCity)(item)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap" }, toDisplayString(item.deviceType), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs" }, toDisplayString(item.browser || "-"), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs" }, toDisplayString(item.os || "-"), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs" }, toDisplayString(unref(formatDateTime)(item.firstSeenAt)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs" }, toDisplayString(unref(formatDateTime)(item.lastSeenAt)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-right" }, [
                          createVNode(_component_UButton, {
                            color: "neutral",
                            variant: "ghost",
                            icon: "ph:eye",
                            size: "sm",
                            title: unref(t)("admin.stats.ipDetail.view"),
                            onClick: ($event) => openIpDetail(item.ip)
                          }, null, 8, ["title", "onClick"])
                        ])
                      ]);
                    }), 128)),
                    !unref(modalPending) && unref(modalRows).length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                      createVNode("td", {
                        colspan: "12",
                        class: "px-4 py-10 text-center text-gray-500"
                      }, "-")
                    ])) : createCommentVNode("", true)
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AdminStatsVisitorDetailModal, {
        open: unref(isVisitorDetailOpen),
        "onUpdate:open": ($event) => isRef(isVisitorDetailOpen) ? isVisitorDetailOpen.value = $event : null,
        "visitor-id": unref(selectedVisitorId)
      }, null, _parent));
      _push(ssrRenderComponent(_component_AdminStatsIpDetailModal, {
        open: unref(isIpDetailOpen),
        "onUpdate:open": ($event) => isRef(isIpDetailOpen) ? isIpDetailOpen.value = $event : null,
        ip: unref(selectedIp),
        preset: unref(preset),
        days: unref(rangeDays),
        onViewVisitor: openVisitorFromIp
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/stats.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
