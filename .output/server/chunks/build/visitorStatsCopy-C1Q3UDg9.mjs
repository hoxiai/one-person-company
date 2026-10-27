import { u as useI18n, d as useFormatTime, e as useToast, n as _sfc_main$G, G as _sfc_main$n, _ as _sfc_main$W, i as _sfc_main$R, k as _sfc_main$M } from './server.mjs';
import { defineComponent, computed, ref, watch, mergeProps, isRef, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DetailSection",
  __ssrInlineRender: true,
  props: {
    title: {},
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$W;
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/stats/DetailSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$3, { __name: "AdminStatsDetailSection" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DetailField",
  __ssrInlineRender: true,
  props: {
    label: {},
    value: {},
    copyable: { type: Boolean },
    href: {}
  },
  emits: ["copy"],
  setup(__props) {
    const props = __props;
    const displayValue = computed(() => props.value === null || props.value === void 0 || props.value === "" ? "-" : String(props.value));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$W;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-w-0" }, _attrs))}><div class="text-[11px] font-medium uppercase tracking-wide text-gray-500">${ssrInterpolate(__props.label)}</div>`);
      if (__props.href && unref(displayValue) !== "-") {
        _push(`<a${ssrRenderAttr("href", __props.href)} target="_blank" rel="noopener noreferrer" class="mt-1 inline-flex max-w-full items-center gap-1 break-all text-left font-mono text-xs text-purple-600 hover:text-purple-500 hover:underline dark:text-purple-400"><span>${ssrInterpolate(unref(displayValue))}</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:arrow-square-out",
          class: "h-3.5 w-3.5 shrink-0"
        }, null, _parent));
        _push(`</a>`);
      } else if (__props.copyable && unref(displayValue) !== "-") {
        _push(`<button type="button" class="mt-1 max-w-full break-all text-left font-mono text-xs text-gray-900 hover:text-purple-500 dark:text-gray-200">${ssrInterpolate(unref(displayValue))}</button>`);
      } else {
        _push(`<div class="mt-1 break-all text-sm text-gray-900 dark:text-gray-200">${ssrInterpolate(unref(displayValue))}</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/stats/DetailField.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5$1 = Object.assign(_sfc_main$2, { __name: "AdminStatsDetailField" });
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
const formatVisitorLocation = (item) => {
  const country = typeof item.country === "string" ? item.country.trim() : "";
  const regionCity = [item.region, item.city].map((v) => typeof v === "string" ? v.trim() : "").filter(Boolean).join(" / ");
  if (country && regionCity) return `${country} \xB7 ${regionCity}`;
  return country || regionCity || "-";
};
const getSafeExternalUrl = (rawUrl) => {
  const trimmed = rawUrl == null ? void 0 : rawUrl.trim();
  if (!trimmed) return null;
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      if (false) ;
      return parsed.href;
    }
  } catch {
  }
  return null;
};
const getInternalReferrerPath = (rawUrl) => {
  const trimmed = rawUrl == null ? void 0 : rawUrl.trim();
  if (!trimmed) return null;
  try {
    const parsed = new URL(trimmed);
    if ((parsed.protocol === "http:" || parsed.protocol === "https:") && false) ;
  } catch {
  }
  return null;
};
const formatExternalUrlLabel = (rawUrl, maxLength = 56) => {
  const safe = getSafeExternalUrl(rawUrl);
  if (!safe) return "";
  try {
    const parsed = new URL(safe);
    const host = parsed.hostname.replace(/^www\./i, "");
    const pathAndQuery = `${parsed.pathname === "/" ? "" : parsed.pathname}${parsed.search}${parsed.hash}`;
    let decoded = `${host}${pathAndQuery}`;
    try {
      decoded = decodeURIComponent(decoded);
    } catch {
    }
    return decoded.length > maxLength ? `${decoded.slice(0, maxLength)}\u2026` : decoded;
  } catch {
    return safe.length > maxLength ? `${safe.slice(0, maxLength)}\u2026` : safe;
  }
};
const getSafeInternalPath = (rawPath) => {
  const trimmed = rawPath == null ? void 0 : rawPath.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("/") && !trimmed.startsWith("//")) {
    return trimmed;
  }
  return null;
};
const getSourceTypeColor = (type) => {
  switch (type == null ? void 0 : type.toLowerCase()) {
    case "ai":
      return "primary";
    case "campaign":
      return "warning";
    case "affiliate":
      return "error";
    case "search":
      return "info";
    case "social":
      return "primary";
    case "email":
      return "success";
    case "referral":
      return "neutral";
    case "direct":
    default:
      return "neutral";
  }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      const rawPath = prefix === "first" ? profile.firstPath || profile.landingPath : profile.lastPath;
      const rawReferrer = key("Referrer");
      return [
        { label: t("admin.stats.visitorDetail.sourceType"), value: key("SourceType") },
        { label: t("admin.stats.source"), value: key("Source") },
        { label: t("admin.stats.visitorDetail.medium"), value: key("Medium") },
        { label: t("admin.stats.visitorDetail.campaign"), value: key("Campaign") },
        { label: t("admin.stats.visitorDetail.content"), value: key("Content") },
        { label: t("admin.stats.visitorDetail.term"), value: key("Term") },
        { label: t("admin.stats.path"), value: rawPath, href: getSafeInternalPath(rawPath) },
        { label: t("admin.stats.referrer"), value: rawReferrer, href: getSafeExternalUrl(rawReferrer) }
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
      const _component_UModal = _sfc_main$G;
      const _component_UCard = _sfc_main$n;
      const _component_UIcon = _sfc_main$W;
      const _component_UBadge = _sfc_main$M;
      const _component_UButton = _sfc_main$R;
      const _component_AdminStatsDetailSection = __nuxt_component_4;
      const _component_AdminStatsDetailField = __nuxt_component_5$1;
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
                              value: field.value,
                              href: field.href
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
                                  value: field.value,
                                  href: field.href
                                }, null, 8, ["label", "value", "href"]);
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
                              value: field.value,
                              href: field.href
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
                                  value: field.value,
                                  href: field.href
                                }, null, 8, ["label", "value", "href"]);
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
                              _push4(`</div><span class="text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(unref(formatDateTime)(item.createdAt))}</span></div><div class="mt-2 grid gap-2 text-xs lg:grid-cols-2"${_scopeId3}><div class="break-all font-mono text-gray-700 dark:text-gray-300"${_scopeId3}>`);
                              if (unref(getSafeInternalPath)(item.path)) {
                                _push4(`<a${ssrRenderAttr("href", unref(getSafeInternalPath)(item.path))} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-purple-600 hover:text-purple-500 hover:underline dark:text-purple-400"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(item.path)}</span>`);
                                _push4(ssrRenderComponent(_component_UIcon, {
                                  name: "ph:arrow-square-out",
                                  class: "h-3 w-3 shrink-0"
                                }, null, _parent4, _scopeId3));
                                _push4(`</a>`);
                              } else {
                                _push4(`<span${_scopeId3}>${ssrInterpolate(item.path || "-")}</span>`);
                              }
                              _push4(`</div><div class="break-all text-gray-500"${_scopeId3}>`);
                              if (unref(getSafeExternalUrl)(item.referrer)) {
                                _push4(`<a${ssrRenderAttr("href", unref(getSafeExternalUrl)(item.referrer))} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-sky-600 hover:text-sky-500 hover:underline dark:text-sky-400"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(item.referrer)}</span>`);
                                _push4(ssrRenderComponent(_component_UIcon, {
                                  name: "ph:arrow-square-out",
                                  class: "h-3 w-3 shrink-0"
                                }, null, _parent4, _scopeId3));
                                _push4(`</a>`);
                              } else {
                                _push4(`<span${_scopeId3}>${ssrInterpolate(item.referrer || "-")}</span>`);
                              }
                              _push4(`</div></div><div class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(item.ip || "-")}</span><span${_scopeId3}>${ssrInterpolate(location(item))}</span><span${_scopeId3}>${ssrInterpolate([item.deviceType, item.browser, item.os].filter(Boolean).join(" \xB7 ") || "-")}</span><span${_scopeId3}>${ssrInterpolate([item.source, item.medium, item.campaign].filter(Boolean).join(" / ") || unref(t)("admin.stats.direct"))}</span>`);
                              if (item.term) {
                                _push4(`<span class="text-sky-600 dark:text-sky-400 font-mono"${_scopeId3}>\u{1F50D} ${ssrInterpolate(item.term)}</span>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              if (item.content) {
                                _push4(`<span class="font-mono"${_scopeId3}>#${ssrInterpolate(item.content)}</span>`);
                              } else {
                                _push4(`<!---->`);
                              }
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
                                    createVNode("div", { class: "break-all font-mono text-gray-700 dark:text-gray-300" }, [
                                      unref(getSafeInternalPath)(item.path) ? (openBlock(), createBlock("a", {
                                        key: 0,
                                        href: unref(getSafeInternalPath)(item.path),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        class: "inline-flex items-center gap-1 text-purple-600 hover:text-purple-500 hover:underline dark:text-purple-400"
                                      }, [
                                        createVNode("span", null, toDisplayString(item.path), 1),
                                        createVNode(_component_UIcon, {
                                          name: "ph:arrow-square-out",
                                          class: "h-3 w-3 shrink-0"
                                        })
                                      ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.path || "-"), 1))
                                    ]),
                                    createVNode("div", { class: "break-all text-gray-500" }, [
                                      unref(getSafeExternalUrl)(item.referrer) ? (openBlock(), createBlock("a", {
                                        key: 0,
                                        href: unref(getSafeExternalUrl)(item.referrer),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        class: "inline-flex items-center gap-1 text-sky-600 hover:text-sky-500 hover:underline dark:text-sky-400"
                                      }, [
                                        createVNode("span", null, toDisplayString(item.referrer), 1),
                                        createVNode(_component_UIcon, {
                                          name: "ph:arrow-square-out",
                                          class: "h-3 w-3 shrink-0"
                                        })
                                      ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.referrer || "-"), 1))
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500" }, [
                                    createVNode("span", null, toDisplayString(item.ip || "-"), 1),
                                    createVNode("span", null, toDisplayString(location(item)), 1),
                                    createVNode("span", null, toDisplayString([item.deviceType, item.browser, item.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                    createVNode("span", null, toDisplayString([item.source, item.medium, item.campaign].filter(Boolean).join(" / ") || unref(t)("admin.stats.direct")), 1),
                                    item.term ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "text-sky-600 dark:text-sky-400 font-mono"
                                    }, "\u{1F50D} " + toDisplayString(item.term), 1)) : createCommentVNode("", true),
                                    item.content ? (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "font-mono"
                                    }, "#" + toDisplayString(item.content), 1)) : createCommentVNode("", true),
                                    item.orderId ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(t)("admin.stats.visitorDetail.orderId")) + ": " + toDisplayString(item.orderId), 1)) : createCommentVNode("", true)
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
                                    value: field.value,
                                    href: field.href
                                  }, null, 8, ["label", "value", "href"]);
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
                                    value: field.value,
                                    href: field.href
                                  }, null, 8, ["label", "value", "href"]);
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
                                    createVNode("div", { class: "break-all font-mono text-gray-700 dark:text-gray-300" }, [
                                      unref(getSafeInternalPath)(item.path) ? (openBlock(), createBlock("a", {
                                        key: 0,
                                        href: unref(getSafeInternalPath)(item.path),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        class: "inline-flex items-center gap-1 text-purple-600 hover:text-purple-500 hover:underline dark:text-purple-400"
                                      }, [
                                        createVNode("span", null, toDisplayString(item.path), 1),
                                        createVNode(_component_UIcon, {
                                          name: "ph:arrow-square-out",
                                          class: "h-3 w-3 shrink-0"
                                        })
                                      ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.path || "-"), 1))
                                    ]),
                                    createVNode("div", { class: "break-all text-gray-500" }, [
                                      unref(getSafeExternalUrl)(item.referrer) ? (openBlock(), createBlock("a", {
                                        key: 0,
                                        href: unref(getSafeExternalUrl)(item.referrer),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        class: "inline-flex items-center gap-1 text-sky-600 hover:text-sky-500 hover:underline dark:text-sky-400"
                                      }, [
                                        createVNode("span", null, toDisplayString(item.referrer), 1),
                                        createVNode(_component_UIcon, {
                                          name: "ph:arrow-square-out",
                                          class: "h-3 w-3 shrink-0"
                                        })
                                      ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.referrer || "-"), 1))
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500" }, [
                                    createVNode("span", null, toDisplayString(item.ip || "-"), 1),
                                    createVNode("span", null, toDisplayString(location(item)), 1),
                                    createVNode("span", null, toDisplayString([item.deviceType, item.browser, item.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                    createVNode("span", null, toDisplayString([item.source, item.medium, item.campaign].filter(Boolean).join(" / ") || unref(t)("admin.stats.direct")), 1),
                                    item.term ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "text-sky-600 dark:text-sky-400 font-mono"
                                    }, "\u{1F50D} " + toDisplayString(item.term), 1)) : createCommentVNode("", true),
                                    item.content ? (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "font-mono"
                                    }, "#" + toDisplayString(item.content), 1)) : createCommentVNode("", true),
                                    item.orderId ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(t)("admin.stats.visitorDetail.orderId")) + ": " + toDisplayString(item.orderId), 1)) : createCommentVNode("", true)
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
                                  value: field.value,
                                  href: field.href
                                }, null, 8, ["label", "value", "href"]);
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
                                  value: field.value,
                                  href: field.href
                                }, null, 8, ["label", "value", "href"]);
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
                                  createVNode("div", { class: "break-all font-mono text-gray-700 dark:text-gray-300" }, [
                                    unref(getSafeInternalPath)(item.path) ? (openBlock(), createBlock("a", {
                                      key: 0,
                                      href: unref(getSafeInternalPath)(item.path),
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      class: "inline-flex items-center gap-1 text-purple-600 hover:text-purple-500 hover:underline dark:text-purple-400"
                                    }, [
                                      createVNode("span", null, toDisplayString(item.path), 1),
                                      createVNode(_component_UIcon, {
                                        name: "ph:arrow-square-out",
                                        class: "h-3 w-3 shrink-0"
                                      })
                                    ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.path || "-"), 1))
                                  ]),
                                  createVNode("div", { class: "break-all text-gray-500" }, [
                                    unref(getSafeExternalUrl)(item.referrer) ? (openBlock(), createBlock("a", {
                                      key: 0,
                                      href: unref(getSafeExternalUrl)(item.referrer),
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      class: "inline-flex items-center gap-1 text-sky-600 hover:text-sky-500 hover:underline dark:text-sky-400"
                                    }, [
                                      createVNode("span", null, toDisplayString(item.referrer), 1),
                                      createVNode(_component_UIcon, {
                                        name: "ph:arrow-square-out",
                                        class: "h-3 w-3 shrink-0"
                                      })
                                    ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.referrer || "-"), 1))
                                  ])
                                ]),
                                createVNode("div", { class: "mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500" }, [
                                  createVNode("span", null, toDisplayString(item.ip || "-"), 1),
                                  createVNode("span", null, toDisplayString(location(item)), 1),
                                  createVNode("span", null, toDisplayString([item.deviceType, item.browser, item.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                  createVNode("span", null, toDisplayString([item.source, item.medium, item.campaign].filter(Boolean).join(" / ") || unref(t)("admin.stats.direct")), 1),
                                  item.term ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "text-sky-600 dark:text-sky-400 font-mono"
                                  }, "\u{1F50D} " + toDisplayString(item.term), 1)) : createCommentVNode("", true),
                                  item.content ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "font-mono"
                                  }, "#" + toDisplayString(item.content), 1)) : createCommentVNode("", true),
                                  item.orderId ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(t)("admin.stats.visitorDetail.orderId")) + ": " + toDisplayString(item.orderId), 1)) : createCommentVNode("", true)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/stats/VisitorDetailModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$1, { __name: "AdminStatsVisitorDetailModal" });
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      const _component_UModal = _sfc_main$G;
      const _component_UCard = _sfc_main$n;
      const _component_UIcon = _sfc_main$W;
      const _component_UButton = _sfc_main$R;
      const _component_AdminStatsDetailSection = __nuxt_component_4;
      const _component_AdminStatsDetailField = __nuxt_component_5$1;
      const _component_UBadge = _sfc_main$M;
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
                          _push4(`<div class="overflow-x-auto"${_scopeId3}><table class="min-w-full text-sm"${_scopeId3}><thead${_scopeId3}><tr class="border-b border-gray-200 text-left text-xs text-gray-500 dark:border-gray-800"${_scopeId3}><th class="pb-2 pr-4"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visitor"))}</th><th class="pb-2 pr-4"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.ipDetail.account"))}</th><th class="pb-2 pr-4"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visits"))}</th><th class="pb-2 pr-4"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.firstSource"))}</th><th class="pb-2 pr-4"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.device"))}</th><th class="pb-2 pr-4"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.lastSeen"))}</th><th class="pb-2 px-3 text-right whitespace-nowrap sticky right-0 z-20 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.actions"))}</th></tr></thead><tbody${_scopeId3}><!--[-->`);
                          ssrRenderList(unref(detail).visitors, (visitor) => {
                            _push4(`<tr class="border-b border-gray-100 dark:border-gray-900 hover:bg-gray-50/50 dark:hover:bg-white/[0.02]"${_scopeId3}><td class="py-2.5 pr-4 font-mono text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap"${_scopeId3}><button type="button" class="cursor-pointer hover:text-purple-500 font-mono transition-colors"${ssrRenderAttr("title", unref(t)("admin.stats.visitorDetail.copy"))}${_scopeId3}>${ssrInterpolate(visitor.visitorId)}</button></td><td class="py-2.5 pr-4"${_scopeId3}>`);
                            if (visitor.user) {
                              _push4(`<span class="text-xs text-gray-700 dark:text-gray-300 font-medium"${_scopeId3}>${ssrInterpolate(visitor.user.nickname || visitor.user.email)}</span>`);
                            } else {
                              _push4(`<span class="text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.anonymous"))}</span>`);
                            }
                            _push4(`</td><td class="py-2.5 pr-4 tabular-nums"${_scopeId3}>${ssrInterpolate(visitor.eventCount)}</td><td class="py-2.5 pr-4 text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(visitor.firstTouch)}</td><td class="py-2.5 pr-4 text-xs text-gray-500"${_scopeId3}>${ssrInterpolate([visitor.deviceType, visitor.browser, visitor.os].filter(Boolean).join(" \xB7 ") || "-")}</td><td class="py-2.5 pr-4 whitespace-nowrap text-xs text-gray-500 font-mono"${_scopeId3}>${ssrInterpolate(unref(formatDateTime)(visitor.lastSeenAt))}</td><td class="py-2.5 px-3 text-right whitespace-nowrap sticky right-0 z-10 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_UButton, {
                              color: "primary",
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
                                    createVNode("th", { class: "pb-2 px-3 text-right whitespace-nowrap sticky right-0 z-20 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]" }, toDisplayString(unref(t)("admin.stats.visitorDetail.actions")), 1)
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).visitors, (visitor) => {
                                    return openBlock(), createBlock("tr", {
                                      key: visitor.visitorId,
                                      class: "border-b border-gray-100 dark:border-gray-900 hover:bg-gray-50/50 dark:hover:bg-white/[0.02]"
                                    }, [
                                      createVNode("td", { class: "py-2.5 pr-4 font-mono text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap" }, [
                                        createVNode("button", {
                                          type: "button",
                                          class: "cursor-pointer hover:text-purple-500 font-mono transition-colors",
                                          title: unref(t)("admin.stats.visitorDetail.copy"),
                                          onClick: ($event) => copy(visitor.visitorId)
                                        }, toDisplayString(visitor.visitorId), 9, ["title", "onClick"])
                                      ]),
                                      createVNode("td", { class: "py-2.5 pr-4" }, [
                                        visitor.user ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "text-xs text-gray-700 dark:text-gray-300 font-medium"
                                        }, toDisplayString(visitor.user.nickname || visitor.user.email), 1)) : (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "text-xs text-gray-500"
                                        }, toDisplayString(unref(t)("admin.stats.visitorDetail.anonymous")), 1))
                                      ]),
                                      createVNode("td", { class: "py-2.5 pr-4 tabular-nums" }, toDisplayString(visitor.eventCount), 1),
                                      createVNode("td", { class: "py-2.5 pr-4 text-xs text-gray-500" }, toDisplayString(visitor.firstTouch), 1),
                                      createVNode("td", { class: "py-2.5 pr-4 text-xs text-gray-500" }, toDisplayString([visitor.deviceType, visitor.browser, visitor.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                      createVNode("td", { class: "py-2.5 pr-4 whitespace-nowrap text-xs text-gray-500 font-mono" }, toDisplayString(unref(formatDateTime)(visitor.lastSeenAt)), 1),
                                      createVNode("td", { class: "py-2.5 px-3 text-right whitespace-nowrap sticky right-0 z-10 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]" }, [
                                        createVNode(_component_UButton, {
                                          color: "primary",
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
                            _push4(`</div><span class="text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(unref(formatDateTime)(item.createdAt))}</span></div><div class="mt-2 grid gap-2 text-xs lg:grid-cols-2"${_scopeId3}><div class="break-all font-mono text-gray-700 dark:text-gray-300"${_scopeId3}>`);
                            if (unref(getSafeInternalPath)(item.path)) {
                              _push4(`<a${ssrRenderAttr("href", unref(getSafeInternalPath)(item.path))} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-purple-600 hover:text-purple-500 hover:underline dark:text-purple-400"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(item.path)}</span>`);
                              _push4(ssrRenderComponent(_component_UIcon, {
                                name: "ph:arrow-square-out",
                                class: "h-3 w-3 shrink-0"
                              }, null, _parent4, _scopeId3));
                              _push4(`</a>`);
                            } else {
                              _push4(`<span${_scopeId3}>${ssrInterpolate(item.path || "-")}</span>`);
                            }
                            _push4(`</div><div class="break-all text-gray-500"${_scopeId3}>`);
                            if (unref(getSafeExternalUrl)(item.referrer)) {
                              _push4(`<a${ssrRenderAttr("href", unref(getSafeExternalUrl)(item.referrer))} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-sky-600 hover:text-sky-500 hover:underline dark:text-sky-400"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(item.referrer)}</span>`);
                              _push4(ssrRenderComponent(_component_UIcon, {
                                name: "ph:arrow-square-out",
                                class: "h-3 w-3 shrink-0"
                              }, null, _parent4, _scopeId3));
                              _push4(`</a>`);
                            } else {
                              _push4(`<span${_scopeId3}>${ssrInterpolate(item.referrer || "-")}</span>`);
                            }
                            _push4(`</div></div><div class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500"${_scopeId3}><span${_scopeId3}>${ssrInterpolate([item.city, item.region, item.country].filter(Boolean).join(" / ") || "-")}</span><span${_scopeId3}>${ssrInterpolate([item.deviceType, item.browser, item.os].filter(Boolean).join(" \xB7 ") || "-")}</span><span${_scopeId3}>${ssrInterpolate([item.source, item.medium, item.campaign].filter(Boolean).join(" / ") || unref(t)("admin.stats.direct"))}</span>`);
                            if (item.term) {
                              _push4(`<span class="text-sky-600 dark:text-sky-400 font-mono"${_scopeId3}>\u{1F50D} ${ssrInterpolate(item.term)}</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            if (item.content) {
                              _push4(`<span class="font-mono"${_scopeId3}>#${ssrInterpolate(item.content)}</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
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
                                    createVNode("div", { class: "break-all font-mono text-gray-700 dark:text-gray-300" }, [
                                      unref(getSafeInternalPath)(item.path) ? (openBlock(), createBlock("a", {
                                        key: 0,
                                        href: unref(getSafeInternalPath)(item.path),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        class: "inline-flex items-center gap-1 text-purple-600 hover:text-purple-500 hover:underline dark:text-purple-400"
                                      }, [
                                        createVNode("span", null, toDisplayString(item.path), 1),
                                        createVNode(_component_UIcon, {
                                          name: "ph:arrow-square-out",
                                          class: "h-3 w-3 shrink-0"
                                        })
                                      ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.path || "-"), 1))
                                    ]),
                                    createVNode("div", { class: "break-all text-gray-500" }, [
                                      unref(getSafeExternalUrl)(item.referrer) ? (openBlock(), createBlock("a", {
                                        key: 0,
                                        href: unref(getSafeExternalUrl)(item.referrer),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        class: "inline-flex items-center gap-1 text-sky-600 hover:text-sky-500 hover:underline dark:text-sky-400"
                                      }, [
                                        createVNode("span", null, toDisplayString(item.referrer), 1),
                                        createVNode(_component_UIcon, {
                                          name: "ph:arrow-square-out",
                                          class: "h-3 w-3 shrink-0"
                                        })
                                      ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.referrer || "-"), 1))
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500" }, [
                                    createVNode("span", null, toDisplayString([item.city, item.region, item.country].filter(Boolean).join(" / ") || "-"), 1),
                                    createVNode("span", null, toDisplayString([item.deviceType, item.browser, item.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                    createVNode("span", null, toDisplayString([item.source, item.medium, item.campaign].filter(Boolean).join(" / ") || unref(t)("admin.stats.direct")), 1),
                                    item.term ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "text-sky-600 dark:text-sky-400 font-mono"
                                    }, "\u{1F50D} " + toDisplayString(item.term), 1)) : createCommentVNode("", true),
                                    item.content ? (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "font-mono"
                                    }, "#" + toDisplayString(item.content), 1)) : createCommentVNode("", true),
                                    item.orderId ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(t)("admin.stats.visitorDetail.orderId")) + ": " + toDisplayString(item.orderId), 1)) : createCommentVNode("", true)
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
                                    createVNode("th", { class: "pb-2 px-3 text-right whitespace-nowrap sticky right-0 z-20 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]" }, toDisplayString(unref(t)("admin.stats.visitorDetail.actions")), 1)
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).visitors, (visitor) => {
                                    return openBlock(), createBlock("tr", {
                                      key: visitor.visitorId,
                                      class: "border-b border-gray-100 dark:border-gray-900 hover:bg-gray-50/50 dark:hover:bg-white/[0.02]"
                                    }, [
                                      createVNode("td", { class: "py-2.5 pr-4 font-mono text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap" }, [
                                        createVNode("button", {
                                          type: "button",
                                          class: "cursor-pointer hover:text-purple-500 font-mono transition-colors",
                                          title: unref(t)("admin.stats.visitorDetail.copy"),
                                          onClick: ($event) => copy(visitor.visitorId)
                                        }, toDisplayString(visitor.visitorId), 9, ["title", "onClick"])
                                      ]),
                                      createVNode("td", { class: "py-2.5 pr-4" }, [
                                        visitor.user ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "text-xs text-gray-700 dark:text-gray-300 font-medium"
                                        }, toDisplayString(visitor.user.nickname || visitor.user.email), 1)) : (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "text-xs text-gray-500"
                                        }, toDisplayString(unref(t)("admin.stats.visitorDetail.anonymous")), 1))
                                      ]),
                                      createVNode("td", { class: "py-2.5 pr-4 tabular-nums" }, toDisplayString(visitor.eventCount), 1),
                                      createVNode("td", { class: "py-2.5 pr-4 text-xs text-gray-500" }, toDisplayString(visitor.firstTouch), 1),
                                      createVNode("td", { class: "py-2.5 pr-4 text-xs text-gray-500" }, toDisplayString([visitor.deviceType, visitor.browser, visitor.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                      createVNode("td", { class: "py-2.5 pr-4 whitespace-nowrap text-xs text-gray-500 font-mono" }, toDisplayString(unref(formatDateTime)(visitor.lastSeenAt)), 1),
                                      createVNode("td", { class: "py-2.5 px-3 text-right whitespace-nowrap sticky right-0 z-10 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]" }, [
                                        createVNode(_component_UButton, {
                                          color: "primary",
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
                                    createVNode("div", { class: "break-all font-mono text-gray-700 dark:text-gray-300" }, [
                                      unref(getSafeInternalPath)(item.path) ? (openBlock(), createBlock("a", {
                                        key: 0,
                                        href: unref(getSafeInternalPath)(item.path),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        class: "inline-flex items-center gap-1 text-purple-600 hover:text-purple-500 hover:underline dark:text-purple-400"
                                      }, [
                                        createVNode("span", null, toDisplayString(item.path), 1),
                                        createVNode(_component_UIcon, {
                                          name: "ph:arrow-square-out",
                                          class: "h-3 w-3 shrink-0"
                                        })
                                      ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.path || "-"), 1))
                                    ]),
                                    createVNode("div", { class: "break-all text-gray-500" }, [
                                      unref(getSafeExternalUrl)(item.referrer) ? (openBlock(), createBlock("a", {
                                        key: 0,
                                        href: unref(getSafeExternalUrl)(item.referrer),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        class: "inline-flex items-center gap-1 text-sky-600 hover:text-sky-500 hover:underline dark:text-sky-400"
                                      }, [
                                        createVNode("span", null, toDisplayString(item.referrer), 1),
                                        createVNode(_component_UIcon, {
                                          name: "ph:arrow-square-out",
                                          class: "h-3 w-3 shrink-0"
                                        })
                                      ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.referrer || "-"), 1))
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500" }, [
                                    createVNode("span", null, toDisplayString([item.city, item.region, item.country].filter(Boolean).join(" / ") || "-"), 1),
                                    createVNode("span", null, toDisplayString([item.deviceType, item.browser, item.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                    createVNode("span", null, toDisplayString([item.source, item.medium, item.campaign].filter(Boolean).join(" / ") || unref(t)("admin.stats.direct")), 1),
                                    item.term ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "text-sky-600 dark:text-sky-400 font-mono"
                                    }, "\u{1F50D} " + toDisplayString(item.term), 1)) : createCommentVNode("", true),
                                    item.content ? (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "font-mono"
                                    }, "#" + toDisplayString(item.content), 1)) : createCommentVNode("", true),
                                    item.orderId ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(t)("admin.stats.visitorDetail.orderId")) + ": " + toDisplayString(item.orderId), 1)) : createCommentVNode("", true)
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
                                  createVNode("th", { class: "pb-2 px-3 text-right whitespace-nowrap sticky right-0 z-20 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]" }, toDisplayString(unref(t)("admin.stats.visitorDetail.actions")), 1)
                                ])
                              ]),
                              createVNode("tbody", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(detail).visitors, (visitor) => {
                                  return openBlock(), createBlock("tr", {
                                    key: visitor.visitorId,
                                    class: "border-b border-gray-100 dark:border-gray-900 hover:bg-gray-50/50 dark:hover:bg-white/[0.02]"
                                  }, [
                                    createVNode("td", { class: "py-2.5 pr-4 font-mono text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap" }, [
                                      createVNode("button", {
                                        type: "button",
                                        class: "cursor-pointer hover:text-purple-500 font-mono transition-colors",
                                        title: unref(t)("admin.stats.visitorDetail.copy"),
                                        onClick: ($event) => copy(visitor.visitorId)
                                      }, toDisplayString(visitor.visitorId), 9, ["title", "onClick"])
                                    ]),
                                    createVNode("td", { class: "py-2.5 pr-4" }, [
                                      visitor.user ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "text-xs text-gray-700 dark:text-gray-300 font-medium"
                                      }, toDisplayString(visitor.user.nickname || visitor.user.email), 1)) : (openBlock(), createBlock("span", {
                                        key: 1,
                                        class: "text-xs text-gray-500"
                                      }, toDisplayString(unref(t)("admin.stats.visitorDetail.anonymous")), 1))
                                    ]),
                                    createVNode("td", { class: "py-2.5 pr-4 tabular-nums" }, toDisplayString(visitor.eventCount), 1),
                                    createVNode("td", { class: "py-2.5 pr-4 text-xs text-gray-500" }, toDisplayString(visitor.firstTouch), 1),
                                    createVNode("td", { class: "py-2.5 pr-4 text-xs text-gray-500" }, toDisplayString([visitor.deviceType, visitor.browser, visitor.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                    createVNode("td", { class: "py-2.5 pr-4 whitespace-nowrap text-xs text-gray-500 font-mono" }, toDisplayString(unref(formatDateTime)(visitor.lastSeenAt)), 1),
                                    createVNode("td", { class: "py-2.5 px-3 text-right whitespace-nowrap sticky right-0 z-10 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]" }, [
                                      createVNode(_component_UButton, {
                                        color: "primary",
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
                                  createVNode("div", { class: "break-all font-mono text-gray-700 dark:text-gray-300" }, [
                                    unref(getSafeInternalPath)(item.path) ? (openBlock(), createBlock("a", {
                                      key: 0,
                                      href: unref(getSafeInternalPath)(item.path),
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      class: "inline-flex items-center gap-1 text-purple-600 hover:text-purple-500 hover:underline dark:text-purple-400"
                                    }, [
                                      createVNode("span", null, toDisplayString(item.path), 1),
                                      createVNode(_component_UIcon, {
                                        name: "ph:arrow-square-out",
                                        class: "h-3 w-3 shrink-0"
                                      })
                                    ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.path || "-"), 1))
                                  ]),
                                  createVNode("div", { class: "break-all text-gray-500" }, [
                                    unref(getSafeExternalUrl)(item.referrer) ? (openBlock(), createBlock("a", {
                                      key: 0,
                                      href: unref(getSafeExternalUrl)(item.referrer),
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      class: "inline-flex items-center gap-1 text-sky-600 hover:text-sky-500 hover:underline dark:text-sky-400"
                                    }, [
                                      createVNode("span", null, toDisplayString(item.referrer), 1),
                                      createVNode(_component_UIcon, {
                                        name: "ph:arrow-square-out",
                                        class: "h-3 w-3 shrink-0"
                                      })
                                    ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.referrer || "-"), 1))
                                  ])
                                ]),
                                createVNode("div", { class: "mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500" }, [
                                  createVNode("span", null, toDisplayString([item.city, item.region, item.country].filter(Boolean).join(" / ") || "-"), 1),
                                  createVNode("span", null, toDisplayString([item.deviceType, item.browser, item.os].filter(Boolean).join(" \xB7 ") || "-"), 1),
                                  createVNode("span", null, toDisplayString([item.source, item.medium, item.campaign].filter(Boolean).join(" / ") || unref(t)("admin.stats.direct")), 1),
                                  item.term ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "text-sky-600 dark:text-sky-400 font-mono"
                                  }, "\u{1F50D} " + toDisplayString(item.term), 1)) : createCommentVNode("", true),
                                  item.content ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "font-mono"
                                  }, "#" + toDisplayString(item.content), 1)) : createCommentVNode("", true),
                                  item.orderId ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(t)("admin.stats.visitorDetail.orderId")) + ": " + toDisplayString(item.orderId), 1)) : createCommentVNode("", true)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/stats/IpDetailModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "AdminStatsIpDetailModal" });
const en = {
  firstSubtitle: "Original acquisition source for the visitors active in this period",
  lastTitle: "Latest identifiable source in period",
  lastSubtitle: "Reconstructed from page entrances in this period; internal pages do not replace the source",
  categorySubtitle: "Channels for the latest identifiable source in this period",
  knownSources: "Identifiable external and tagged sources",
  knownSubtitle: "Includes search, social, AI, email, referral and tagged campaigns",
  behavior: "Visitor behavior",
  pageVisitors: "Page visitors",
  behaviorSubtitle: "Each activity is counted independently; these are not sequential funnel stages",
  campaign: "Campaign / promotion visitors",
  campaignTip: "Visitors with campaign tags, paid click IDs or promotion codes in this period",
  authTip: "Visitors with a server-recorded login or registration in this period",
  visitorTip: "Distinct visitor IDs with tracked activity or linked paid orders in this period",
  paidTip: "Visitors with a real paid order above zero, counted by payment time",
  direct: "Direct / unidentified",
  unknown: "Unknown source",
  loading: "Loading visitor details\u2026",
  noRecords: "No records match this period and filter.",
  people: "visitors",
  orders: "orders",
  unlinked: "Paid orders without a visitor ID are included in total revenue but cannot be assigned to a traffic source:",
  visitorsTitle: "Independent Visitors",
  backToOverview: "Stats Overview",
  openVisitorsPage: "Independent Visitors",
  searchPlaceholder: "Search IP, visitor ID, source URL, search term, path, region or user email\u2026",
  allBehaviors: "All visitors",
  allSources: "All source channels",
  externalOnly: "External sources only",
  taggedOnly: "Campaign / promo only",
  attributionLast: "Latest source in period",
  attributionFirst: "First acquisition source",
  activeSourceFilter: "Filtered source:",
  clearFilters: "Reset filters",
  colVisitorUser: "Visitor / User",
  colSourceUrl: "Traffic Source & Referrer URL",
  colVisitedPage: "Landing & Latest Page",
  colLocationIp: "Region & IP",
  colDeviceEnv: "Device & Browser",
  colActivity: "Activity & Conversion",
  colActiveTime: "First / Last Seen",
  firstLabel: "First:",
  latestLabel: "Latest:",
  landingLabel: "Landing:",
  lastPageLabel: "Latest:",
  keywordLabel: "Keyword:",
  internalPrevLabel: "Internal prev:",
  openSourceLink: "Open source URL in new tab",
  openSitePage: "Open page in new tab",
  noExternalReferrer: "No external Referer URL",
  vsYesterdaySameTime: "Yesterday same time",
  yesterdayFullDay: "Full day",
  vsDayBeforeYesterday: "vs Day before",
  vsPreviousDays: "vs Prev {days}d",
  newGrowth: "New"
};
const zh = {
  firstSubtitle: "\u672C\u671F\u95F4\u6D3B\u8DC3\u8BBF\u5BA2\u6700\u521D\u8FDB\u5165\u7F51\u7AD9\u7684\u6765\u6E90",
  lastTitle: "\u671F\u95F4\u6700\u8FD1\u53EF\u8BC6\u522B\u6765\u6E90",
  lastSubtitle: "\u4ECE\u671F\u95F4\u5185\u9875\u9762\u5165\u53E3\u8FD8\u539F\uFF1B\u7AD9\u5185\u8DF3\u8F6C\u4E0D\u4F1A\u8986\u76D6\u6765\u6E90",
  categorySubtitle: "\u6309\u672C\u671F\u95F4\u6700\u8FD1\u53EF\u8BC6\u522B\u6765\u6E90\u5212\u5206\u6E20\u9053",
  knownSources: "\u53EF\u8BC6\u522B\u7684\u7AD9\u5916\u4E0E\u6D3B\u52A8\u6765\u6E90",
  knownSubtitle: "\u5305\u542B\u641C\u7D22\u3001\u793E\u4EA4\u3001AI\u3001\u90AE\u4EF6\u3001\u5916\u94FE\u53CA\u5E26\u6807\u7B7E\u7684\u6D3B\u52A8",
  behavior: "\u8BBF\u5BA2\u884C\u4E3A\u5206\u5E03",
  pageVisitors: "\u6D4F\u89C8\u9875\u9762\u7684\u8BBF\u5BA2",
  behaviorSubtitle: "\u5404\u7C7B\u884C\u4E3A\u72EC\u7ACB\u8BA1\u6570\uFF0C\u4E0D\u4EE3\u8868\u8BBF\u5BA2\u4F9D\u6B21\u5B8C\u6210\u8FD9\u4E9B\u6B65\u9AA4",
  campaign: "\u6D3B\u52A8 / \u63A8\u5E7F\u8BBF\u5BA2",
  campaignTip: "\u672C\u671F\u95F4\u5E26\u6D3B\u52A8\u6807\u7B7E\u3001\u5E7F\u544A\u70B9\u51FB\u6807\u8BC6\u6216\u63A8\u5E7F\u7801\u7684\u8BBF\u5BA2",
  authTip: "\u672C\u671F\u95F4\u7531\u670D\u52A1\u7AEF\u8BB0\u5F55\u8FC7\u767B\u5F55\u6216\u6CE8\u518C\u7684\u8BBF\u5BA2",
  visitorTip: "\u672C\u671F\u95F4\u6709\u884C\u4E3A\u8BB0\u5F55\u6216\u5173\u8054\u5DF2\u4ED8\u6B3E\u8BA2\u5355\u7684 visitor_id \u53BB\u91CD\u6570",
  paidTip: "\u6309\u652F\u4ED8\u65F6\u95F4\u7EDF\u8BA1\u6709\u771F\u5B9E\u975E\u96F6\u5DF2\u4ED8\u6B3E\u8BA2\u5355\u7684\u8BBF\u5BA2",
  direct: "\u76F4\u63A5 / \u6765\u6E90\u4E0D\u53EF\u8BC6\u522B",
  unknown: "\u6765\u6E90\u672A\u77E5",
  loading: "\u6B63\u5728\u52A0\u8F7D\u8BBF\u95EE\u660E\u7EC6\u2026",
  noRecords: "\u5F53\u524D\u671F\u95F4\u548C\u7B5B\u9009\u6761\u4EF6\u4E0B\u6682\u65E0\u8BB0\u5F55\u3002",
  people: "\u4EBA",
  orders: "\u5355",
  unlinked: "\u4EE5\u4E0B\u5DF2\u4ED8\u6B3E\u8BA2\u5355\u672A\u5173\u8054\u8BBF\u5BA2\uFF0C\u91D1\u989D\u8BA1\u5165\u603B\u989D\uFF0C\u4F46\u65E0\u6CD5\u5206\u914D\u5230\u8BBF\u95EE\u6765\u6E90\uFF1A",
  visitorsTitle: "\u72EC\u7ACB\u8BBF\u5BA2\u5217\u8868",
  backToOverview: "\u8FD4\u56DE\u7EDF\u8BA1\u6982\u89C8",
  openVisitorsPage: "\u72EC\u7ACB\u8BBF\u5BA2\u5217\u8868",
  searchPlaceholder: "\u641C\u7D22 IP\u3001\u8BBF\u5BA2 ID\u3001\u6765\u6E90\u7F51\u5740\u3001\u641C\u7D22\u8BCD\u3001\u53D7\u8BBF\u9875\u9762\u3001\u56FD\u5BB6\u7701\u5E02\u6216\u7528\u6237\u90AE\u7BB1\u2026",
  allBehaviors: "\u5168\u90E8\u8BBF\u5BA2",
  allSources: "\u5168\u90E8\u6765\u6E90\u6E20\u9053",
  externalOnly: "\u4EC5\u770B\u5916\u90E8\u6765\u6E90",
  taggedOnly: "\u4EC5\u770B\u6D3B\u52A8 / \u63A8\u5E7F",
  attributionLast: "\u6309\u671F\u95F4\u6700\u8FD1\u6765\u6E90",
  attributionFirst: "\u6309\u9996\u6B21\u8BBF\u95EE\u6765\u6E90",
  activeSourceFilter: "\u5F53\u524D\u6307\u5B9A\u6765\u6E90\uFF1A",
  clearFilters: "\u91CD\u7F6E\u7B5B\u9009",
  colVisitorUser: "\u8BBF\u5BA2 / \u5173\u8054\u7528\u6237",
  colSourceUrl: "\u8BBF\u95EE\u6765\u6E90\u4E0E\u6765\u6E90\u5730\u5740",
  colVisitedPage: "\u53D7\u8BBF\u9875\u9762\uFF08\u843D\u5730 / \u6700\u540E\uFF09",
  colLocationIp: "\u6240\u5728\u5730\u533A\u4E0E IP",
  colDeviceEnv: "\u8BBE\u5907\u4E0E\u6D4F\u89C8\u5668",
  colActivity: "\u8BBF\u95EE\u4E0E\u8F6C\u5316\u884C\u4E3A",
  colActiveTime: "\u6700\u540E\u6D3B\u8DC3 / \u9996\u6B21\u8BBF\u95EE",
  firstLabel: "\u9996\u8BBF:",
  latestLabel: "\u6700\u8FD1:",
  landingLabel: "\u843D\u5730:",
  lastPageLabel: "\u6700\u540E:",
  keywordLabel: "\u641C\u7D22\u8BCD:",
  internalPrevLabel: "\u7AD9\u5185\u4E0A\u9875:",
  openSourceLink: "\u70B9\u51FB\u5728\u65B0\u6807\u7B7E\u9875\u6253\u5F00\u6765\u6E90\u7F51\u5740",
  openSitePage: "\u70B9\u51FB\u5728\u65B0\u6807\u7B7E\u9875\u8BBF\u95EE\u8BE5\u9875\u9762",
  noExternalReferrer: "\u65E0\u5916\u90E8\u6765\u6E90\u94FE\u63A5 (Referer)",
  vsYesterdaySameTime: "\u6628\u65E5\u540C\u671F",
  yesterdayFullDay: "\u6628\u65E5\u5168\u5929",
  vsDayBeforeYesterday: "\u8F83\u524D\u65E5",
  vsPreviousDays: "\u8F83\u524D {days} \u5929",
  newGrowth: "\u65B0\u589E"
};
const zhHK = {
  firstSubtitle: "\u672C\u671F\u9593\u6D3B\u8E8D\u8A2A\u5BA2\u6700\u521D\u9032\u5165\u7DB2\u7AD9\u7684\u4F86\u6E90",
  lastTitle: "\u671F\u9593\u6700\u8FD1\u53EF\u8B58\u5225\u4F86\u6E90",
  lastSubtitle: "\u5F9E\u671F\u9593\u5167\u9801\u9762\u5165\u53E3\u9084\u539F\uFF1B\u7AD9\u5167\u8DF3\u8F49\u4E0D\u6703\u8986\u84CB\u4F86\u6E90",
  categorySubtitle: "\u6309\u672C\u671F\u9593\u6700\u8FD1\u53EF\u8B58\u5225\u4F86\u6E90\u5283\u5206\u6E20\u9053",
  knownSources: "\u53EF\u8B58\u5225\u7684\u7AD9\u5916\u8207\u6D3B\u52D5\u4F86\u6E90",
  knownSubtitle: "\u5305\u542B\u641C\u5C0B\u3001\u793E\u4EA4\u3001AI\u3001\u90F5\u4EF6\u3001\u5916\u93C8\u53CA\u5E36\u6A19\u7C64\u7684\u6D3B\u52D5",
  behavior: "\u8A2A\u5BA2\u884C\u70BA\u5206\u4F48",
  behaviorSubtitle: "\u5404\u985E\u884C\u70BA\u7368\u7ACB\u8A08\u6578\uFF0C\u4E0D\u4EE3\u8868\u8A2A\u5BA2\u4F9D\u6B21\u5B8C\u6210\u9019\u4E9B\u6B65\u9A5F",
  pageVisitors: "\u700F\u89BD\u9801\u9762\u7684\u8A2A\u5BA2",
  campaign: "\u6D3B\u52D5 / \u63A8\u5EE3\u8A2A\u5BA2",
  campaignTip: "\u672C\u671F\u9593\u5E36\u6D3B\u52D5\u6A19\u7C64\u3001\u5EE3\u544A\u9EDE\u64CA\u6A19\u8B58\u6216\u63A8\u5EE3\u78BC\u7684\u8A2A\u5BA2",
  authTip: "\u672C\u671F\u9593\u7531\u670D\u52D9\u7AEF\u8A18\u9304\u904E\u767B\u5165\u6216\u8A3B\u518A\u7684\u8A2A\u5BA2",
  visitorTip: "\u672C\u671F\u9593\u6709\u884C\u70BA\u8A18\u9304\u6216\u95DC\u806F\u5DF2\u4ED8\u6B3E\u8A02\u55AE\u7684 visitor_id \u53BB\u91CD\u6578",
  paidTip: "\u6309\u652F\u4ED8\u6642\u9593\u7D71\u8A08\u6709\u771F\u5BE6\u975E\u96F6\u5DF2\u4ED8\u6B3E\u8A02\u55AE\u7684\u8A2A\u5BA2",
  direct: "\u76F4\u63A5 / \u4F86\u6E90\u4E0D\u53EF\u8B58\u5225",
  unknown: "\u4F86\u6E90\u672A\u77E5",
  loading: "\u6B63\u5728\u8F09\u5165\u8A2A\u554F\u660E\u7D30\u2026",
  noRecords: "\u76EE\u524D\u671F\u9593\u548C\u7BE9\u9078\u689D\u4EF6\u4E0B\u66AB\u7121\u8A18\u9304\u3002",
  people: "\u4EBA",
  orders: "\u55AE",
  unlinked: "\u4EE5\u4E0B\u5DF2\u4ED8\u6B3E\u8A02\u55AE\u672A\u95DC\u806F\u8A2A\u5BA2\uFF0C\u91D1\u984D\u8A08\u5165\u7E3D\u984D\uFF0C\u4F46\u7121\u6CD5\u5206\u914D\u5230\u8A2A\u554F\u4F86\u6E90\uFF1A",
  visitorsTitle: "\u7368\u7ACB\u8A2A\u5BA2\u5217\u8868",
  backToOverview: "\u8FD4\u56DE\u7D71\u8A08\u6982\u89BD",
  openVisitorsPage: "\u7368\u7ACB\u8A2A\u5BA2\u5217\u8868",
  searchPlaceholder: "\u641C\u5C0B IP\u3001\u8A2A\u5BA2 ID\u3001\u4F86\u6E90\u7DB2\u5740\u3001\u641C\u5C0B\u8A5E\u3001\u53D7\u8A2A\u9801\u9762\u3001\u570B\u5BB6\u7701\u5E02\u6216\u7528\u6236\u96FB\u90F5\u2026",
  allBehaviors: "\u5168\u90E8\u8A2A\u5BA2",
  allSources: "\u5168\u90E8\u4F86\u6E90\u6E20\u9053",
  externalOnly: "\u50C5\u770B\u5916\u90E8\u4F86\u6E90",
  taggedOnly: "\u50C5\u770B\u6D3B\u52D5 / \u63A8\u5EE3",
  attributionLast: "\u6309\u671F\u9593\u6700\u8FD1\u4F86\u6E90",
  attributionFirst: "\u6309\u9996\u6B21\u8A2A\u554F\u4F86\u6E90",
  activeSourceFilter: "\u76EE\u524D\u6307\u5B9A\u4F86\u6E90\uFF1A",
  clearFilters: "\u91CD\u8A2D\u7BE9\u9078",
  colVisitorUser: "\u8A2A\u5BA2 / \u95DC\u806F\u7528\u6236",
  colSourceUrl: "\u8A2A\u554F\u4F86\u6E90\u8207\u4F86\u6E90\u5730\u5740",
  colVisitedPage: "\u53D7\u8A2A\u9801\u9762\uFF08\u843D\u5730 / \u6700\u5F8C\uFF09",
  colLocationIp: "\u6240\u5728\u5730\u5340\u8207 IP",
  colDeviceEnv: "\u8A2D\u5099\u8207\u700F\u89BD\u5668",
  colActivity: "\u8A2A\u554F\u8207\u8F49\u5316\u884C\u70BA",
  colActiveTime: "\u6700\u5F8C\u6D3B\u8E8D / \u9996\u6B21\u8A2A\u554F",
  firstLabel: "\u9996\u8A2A:",
  latestLabel: "\u6700\u8FD1:",
  landingLabel: "\u843D\u5730:",
  lastPageLabel: "\u6700\u5F8C:",
  keywordLabel: "\u641C\u5C0B\u8A5E:",
  internalPrevLabel: "\u7AD9\u5167\u4E0A\u9801:",
  openSourceLink: "\u9EDE\u64CA\u5728\u65B0\u5206\u9801\u6253\u958B\u4F86\u6E90\u7DB2\u5740",
  openSitePage: "\u9EDE\u64CA\u5728\u65B0\u5206\u9801\u8A2A\u554F\u8A72\u9801\u9762",
  noExternalReferrer: "\u7121\u5916\u90E8\u4F86\u6E90\u9023\u7D50 (Referer)",
  vsYesterdaySameTime: "\u6628\u65E5\u540C\u671F",
  yesterdayFullDay: "\u6628\u65E5\u5168\u5929",
  vsDayBeforeYesterday: "\u8F03\u524D\u65E5",
  vsPreviousDays: "\u8F03\u524D {days} \u5929",
  newGrowth: "\u65B0\u589E"
};
const ru = {
  firstSubtitle: "\u041F\u0435\u0440\u0432\u044B\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439, \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0437\u0430 \u044D\u0442\u043E\u0442 \u043F\u0435\u0440\u0438\u043E\u0434",
  lastTitle: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434",
  lastSubtitle: "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E \u0432\u0445\u043E\u0434\u0430\u043C \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B; \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u044B \u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u043C\u0435\u043D\u044F\u044E\u0442",
  categorySubtitle: "\u041A\u0430\u043D\u0430\u043B\u044B \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u043E\u0433\u043E \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430 \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434",
  knownSources: "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u0438 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0438",
  knownSubtitle: "\u041F\u043E\u0438\u0441\u043A, \u0441\u043E\u0446\u0441\u0435\u0442\u0438, \u0418\u0418, \u043F\u043E\u0447\u0442\u0430, \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438 \u0438 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0438 \u0441 \u043C\u0435\u0442\u043A\u0430\u043C\u0438",
  behavior: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439",
  behaviorSubtitle: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E, \u0430 \u043D\u0435 \u043A\u0430\u043A \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u044D\u0442\u0430\u043F\u044B \u0432\u043E\u0440\u043E\u043D\u043A\u0438",
  pageVisitors: "\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446",
  campaign: "\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0439 / \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F",
  campaignTip: "\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438 \u0441 \u043C\u0435\u0442\u043A\u0430\u043C\u0438 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0439, \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u043E\u0432 \u0438\u043B\u0438 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0430\u043C\u0438 \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434",
  authTip: "\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438 \u0441\u043E \u0432\u0445\u043E\u0434\u043E\u043C \u0438\u043B\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D\u043D\u044B\u043C\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434",
  visitorTip: "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 visitor_id \u0441 \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C\u0438 \u0438\u043B\u0438 \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u043D\u044B\u043C\u0438 \u0437\u0430\u043A\u0430\u0437\u0430\u043C\u0438 \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434",
  paidTip: "\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438 \u0441 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u043C \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u043D\u044B\u043C \u0437\u0430\u043A\u0430\u0437\u043E\u043C \u043D\u0435\u043D\u0443\u043B\u0435\u0432\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438, \u043F\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043E\u043F\u043B\u0430\u0442\u044B",
  direct: "\u041F\u0440\u044F\u043C\u043E\u0439 / \u043D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0439",
  unknown: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A",
  loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F\u0445\u2026",
  noRecords: "\u041D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u0437\u0430 \u044D\u0442\u043E\u0442 \u043F\u0435\u0440\u0438\u043E\u0434 \u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C\u0438 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C\u0438.",
  people: "\u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439",
  orders: "\u0437\u0430\u043A\u0430\u0437\u043E\u0432",
  unlinked: "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B \u0431\u0435\u0437 visitor_id \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u044B \u0432 \u043E\u0431\u0449\u0443\u044E \u0432\u044B\u0440\u0443\u0447\u043A\u0443, \u043D\u043E \u043D\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430\u043C:",
  visitorsTitle: "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438",
  backToOverview: "\u041E\u0431\u0437\u043E\u0440 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438",
  openVisitorsPage: "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439",
  searchPlaceholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E IP, visitor ID, URL \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430, \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u043C\u0443 \u0441\u043B\u043E\u0432\u0443, \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435, \u0440\u0435\u0433\u0438\u043E\u043D\u0443 \u0438\u043B\u0438 email\u2026",
  allBehaviors: "\u0412\u0441\u0435 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438",
  allSources: "\u0412\u0441\u0435 \u043A\u0430\u043D\u0430\u043B\u044B \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432",
  externalOnly: "\u0422\u043E\u043B\u044C\u043A\u043E \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438",
  taggedOnly: "\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0438 / \u043F\u0440\u043E\u043C\u043E",
  attributionLast: "\u041F\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u043C\u0443 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0443",
  attributionFirst: "\u041F\u043E \u043F\u0435\u0440\u0432\u043E\u043C\u0443 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0443",
  activeSourceFilter: "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A:",
  clearFilters: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B",
  colVisitorUser: "\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C / \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",
  colSourceUrl: "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0438 URL \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430",
  colVisitedPage: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0432\u0445\u043E\u0434\u0430 / \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F",
  colLocationIp: "\u0420\u0435\u0433\u0438\u043E\u043D \u0438 IP",
  colDeviceEnv: "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440",
  colActivity: "\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0438 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F",
  colActiveTime: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 / \u041F\u0435\u0440\u0432\u044B\u0439 \u0432\u0438\u0437\u0438\u0442",
  firstLabel: "\u041F\u0435\u0440\u0432\u044B\u0439:",
  latestLabel: "\u041F\u043E\u0441\u043B.:",
  landingLabel: "\u0412\u0445\u043E\u0434:",
  lastPageLabel: "\u041F\u043E\u0441\u043B.:",
  keywordLabel: "\u041A\u043B\u044E\u0447. \u0441\u043B\u043E\u0432\u043E:",
  internalPrevLabel: "\u0412\u043D\u0443\u0442\u0440. \u0441\u0442\u0440.:",
  openSourceLink: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C URL \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",
  openSitePage: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0441\u0430\u0439\u0442\u0430 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",
  noExternalReferrer: "\u041D\u0435\u0442 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E Referer URL",
  vsYesterdaySameTime: "\u0412\u0447\u0435\u0440\u0430 \u043A \u044D\u0442\u043E\u043C\u0443 \u0447\u0430\u0441\u0443",
  yesterdayFullDay: "\u0417\u0430 \u0432\u0435\u0441\u044C \u0434\u0435\u043D\u044C",
  vsDayBeforeYesterday: "\u041A \u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430",
  vsPreviousDays: "\u0417\u0430 \u043F\u0440\u0435\u0434. {days} \u0434\u043D.",
  newGrowth: "\u041D\u043E\u0432\u044B\u0435"
};
const getVisitorStatsCopy = (locale) => locale === "zh-HK" ? zhHK : locale.startsWith("zh") ? zh : locale.startsWith("ru") ? ru : en;

export { __nuxt_component_5 as _, getSafeExternalUrl as a, getSourceTypeColor as b, formatVisitorLocation as c, getSafeInternalPath as d, formatRegionCity as e, formatExternalUrlLabel as f, getVisitorStatsCopy as g, __nuxt_component_6 as h, formatStatsNumber as i, getStatsTrendWidth as j, formatStatsPercent as k, getInternalReferrerPath as l, shortenVisitorId as s };
//# sourceMappingURL=visitorStatsCopy-C1Q3UDg9.mjs.map
