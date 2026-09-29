import { u as useI18n, d as useFormatTime, J as useCurrencyFormat, B as useRoute, p as useRouter, e as useToast, q as useConfirm, O as useRequestURL, f as useAdminPermissions, v as usePagination, w as useFetch, _ as _sfc_main$I, i as _sfc_main$D, l as _sfc_main$j, b as _sfc_main$k, j as _sfc_main$h, k as _sfc_main$z, I as __nuxt_component_3$3, x as _sfc_main$n, a as _sfc_main$l, c as _sfc_main$g, r as useSettings, P as useLocaleCurrency } from './server.mjs';
import { _ as __nuxt_component_7 } from './FullScreenModal-Dpul9c_Q.mjs';
import { defineComponent, ref, watch, computed, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createSlots, createVNode, openBlock, createBlock, createCommentVNode, Fragment, isRef, withModifiers, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './Checkbox-SZfkaLj6.mjs';
import { A as AdminTopupRecordsPanel } from './AdminTopupRecordsPanel-XUW9n-m_.mjs';
import { u as useImageProxy } from './useImageProxy-DBzzMBty.mjs';
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
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
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
import './isValueEqualOrExist-BZCZf5a9.mjs';
import './VisuallyHiddenInput-Cg_0lU4u.mjs';
import './RovingFocusItem-CtKUnlPQ.mjs';
import './utils-COwvQAaf.mjs';
import './RovingFocusGroup-CuSPWxE2.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ManualOrderModal",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "success"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useI18n();
    const toast = useToast();
    useRequestURL();
    const { getSetting, fetchSettings } = useSettings();
    const { baseCurrency } = useLocaleCurrency();
    const isOpen = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    const userMode = ref("select");
    const userQuery = ref("");
    const isSearchingUsers = ref(false);
    const userSearchResults = ref([]);
    const selectedUser = ref(null);
    const customerEmail = ref("");
    const customerNickname = ref("");
    const productsList = ref([]);
    const selectedProductId = ref(void 0);
    const quantity = ref(1);
    const actualAmount = ref(0);
    const currency = ref(baseCurrency.value || "CNY");
    const payStatus = ref("paid");
    const payMethod = ref("manual");
    const tradeNo = ref("");
    const autoFulfill = ref(true);
    const deliveryInfo = ref("");
    const sendEmail = ref(false);
    const isSubmitting = ref(false);
    const createdResult = ref(null);
    const payMethodOptions = computed(() => [
      { value: "manual", label: t("admin.orders.manualOrder.payMethodManual") },
      { value: "bank_transfer", label: t("admin.orders.manualOrder.payMethodBank") },
      { value: "alipay", label: t("admin.orders.manualOrder.payMethodAlipay") },
      { value: "wechat", label: t("admin.orders.manualOrder.payMethodWechat") },
      { value: "stripe", label: t("admin.orders.manualOrder.payMethodStripe") },
      { value: "crypto", label: t("admin.orders.manualOrder.payMethodCrypto") },
      { value: "cash", label: t("admin.orders.manualOrder.payMethodCash") }
    ]);
    const currencyOptions = [
      { value: "CNY", label: "CNY (\u4EBA\u6C11\u5E01 \xA5)" },
      { value: "USD", label: "USD (\u7F8E\u5143 $)" },
      { value: "EUR", label: "EUR (\u6B27\u5143 \u20AC)" },
      { value: "HKD", label: "HKD (\u6E2F\u5E01 HK$)" },
      { value: "JPY", label: "JPY (\u65E5\u5143 \xA5)" }
    ];
    const productOptions = computed(
      () => productsList.value.map((p) => ({
        value: p.id,
        label: `${p.name} \u2014 ${p.price} ${baseCurrency.value || "USD"} (${p.type || "basic"})`
      }))
    );
    const fetchProducts = async () => {
      try {
        const res = await $fetch("/api/admin/products", {
          query: { page: 1, pageSize: 100 }
        });
        productsList.value = ((res == null ? void 0 : res.data) || []).filter((p) => p.isActive !== false);
        if (productsList.value.length > 0 && !selectedProductId.value) {
          selectedProductId.value = productsList.value[0].id;
          handleProductChange(selectedProductId.value);
        }
      } catch (err) {
        console.error("Failed to load products:", err);
      }
    };
    let searchTimer = null;
    const handleUserSearchInput = () => {
      clearTimeout(searchTimer);
      const q = userQuery.value.trim();
      if (!q) {
        userSearchResults.value = [];
        return;
      }
      searchTimer = setTimeout(async () => {
        isSearchingUsers.value = true;
        try {
          const res = await $fetch("/api/admin/users", {
            query: { q, page: 1, pageSize: 10 }
          });
          userSearchResults.value = (res == null ? void 0 : res.data) || [];
        } catch (e) {
          userSearchResults.value = [];
        } finally {
          isSearchingUsers.value = false;
        }
      }, 300);
    };
    const selectUser = (user) => {
      selectedUser.value = user;
      userSearchResults.value = [];
      userQuery.value = "";
    };
    const handleProductChange = (productId) => {
      if (!productId) return;
      const prod = productsList.value.find((p) => p.id === Number(productId));
      if (prod) {
        actualAmount.value = Number((Number(prod.price || 0) * (quantity.value || 1)).toFixed(2));
      }
    };
    const handleQuantityChange = () => {
      const q = Math.max(1, quantity.value || 1);
      const prod = productsList.value.find((p) => p.id === Number(selectedProductId.value));
      if (prod) {
        actualAmount.value = Number((Number(prod.price || 0) * q).toFixed(2));
      }
    };
    const resetForm = () => {
      userMode.value = "select";
      userQuery.value = "";
      userSearchResults.value = [];
      selectedUser.value = null;
      customerEmail.value = "";
      customerNickname.value = "";
      quantity.value = 1;
      currency.value = baseCurrency.value || getSetting("currency", "USD") || "CNY";
      payStatus.value = "paid";
      payMethod.value = "manual";
      tradeNo.value = "";
      autoFulfill.value = true;
      deliveryInfo.value = "";
      sendEmail.value = false;
      isSubmitting.value = false;
      createdResult.value = null;
      if (productsList.value.length > 0) {
        selectedProductId.value = productsList.value[0].id;
        handleProductChange(selectedProductId.value);
      }
    };
    watch(
      () => props.modelValue,
      async (open) => {
        if (open) {
          await fetchSettings();
          currency.value = baseCurrency.value || getSetting("currency", "USD") || "CNY";
          resetForm();
          await fetchProducts();
        }
      }
    );
    const copyPaymentUrl = async (url) => {
      try {
        await (void 0).clipboard.writeText(url);
        toast.add({
          title: t("admin.orders.toast.copied"),
          description: t("admin.orders.toast.payment_link_copied"),
          color: "success"
        });
      } catch (e) {
        toast.add({
          title: t("admin.orders.toast.error"),
          description: "Copy failed",
          color: "error"
        });
      }
    };
    const handleDone = () => {
      var _a;
      isOpen.value = false;
      emit("success", (_a = createdResult.value) == null ? void 0 : _a.order);
    };
    const handleSubmit = async () => {
      var _a;
      let finalEmail = "";
      let finalUserId = void 0;
      if (userMode.value === "select") {
        if (!selectedUser.value) {
          toast.add({
            title: t("admin.orders.toast.error"),
            description: t("admin.orders.manualOrder.validation.emailRequired"),
            color: "error"
          });
          return;
        }
        finalUserId = selectedUser.value.id;
        finalEmail = selectedUser.value.email;
      } else {
        finalEmail = customerEmail.value.trim();
        if (!finalEmail || !finalEmail.includes("@")) {
          toast.add({
            title: t("admin.orders.toast.error"),
            description: t("admin.orders.manualOrder.validation.emailRequired"),
            color: "error"
          });
          return;
        }
      }
      if (!selectedProductId.value) {
        toast.add({
          title: t("admin.orders.toast.error"),
          description: t("admin.orders.manualOrder.validation.productRequired"),
          color: "error"
        });
        return;
      }
      isSubmitting.value = true;
      try {
        const payload = {
          userId: finalUserId,
          email: finalEmail,
          nickname: customerNickname.value.trim() || void 0,
          productId: Number(selectedProductId.value),
          quantity: Math.max(1, quantity.value || 1),
          amount: Number(actualAmount.value || 0),
          currency: currency.value,
          payStatus: payStatus.value,
          payMethod: payStatus.value === "paid" ? payMethod.value : "none",
          tradeNo: tradeNo.value.trim() || void 0,
          autoFulfill: autoFulfill.value,
          deliveryInfo: deliveryInfo.value.trim() || void 0,
          sendEmail: sendEmail.value
        };
        const res = await $fetch("/api/admin/orders", {
          method: "POST",
          body: payload
        });
        if (res == null ? void 0 : res.data) {
          createdResult.value = res.data;
          toast.add({
            title: t("admin.orders.toast.success"),
            description: t("admin.orders.manualOrder.successTitle"),
            color: "success"
          });
          emit("success", res.data.order);
        }
      } catch (err) {
        toast.add({
          title: t("admin.orders.toast.error"),
          description: ((_a = err.data) == null ? void 0 : _a.message) || err.message || "Create order failed",
          color: "error"
        });
      } finally {
        isSubmitting.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FullScreenModal = __nuxt_component_7;
      const _component_UIcon = _sfc_main$I;
      const _component_UBadge = _sfc_main$z;
      const _component_UButton = _sfc_main$D;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_USelect = _sfc_main$j;
      const _component_UCheckbox = _sfc_main$2;
      const _component_UTextarea = _sfc_main$g;
      _push(ssrRenderComponent(_component_FullScreenModal, mergeProps({
        modelValue: isOpen.value,
        "onUpdate:modelValue": ($event) => isOpen.value = $event,
        maxWidth: "sm:max-w-3xl",
        "default-fullscreen": false,
        title: _ctx.$t("admin.orders.manualOrder.title")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            if (createdResult.value) {
              _push2(`<div class="space-y-6 py-4"${_scopeId}><div class="rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-950/30 p-5"${_scopeId}><div class="flex items-start gap-4"${_scopeId}><div class="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-full text-emerald-600 dark:text-emerald-400 shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:check-circle-fill",
                class: "w-6 h-6"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex-1 min-w-0"${_scopeId}><h4 class="text-base font-semibold text-emerald-900 dark:text-emerald-200"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.successTitle"))}</h4><p class="text-xs text-emerald-700 dark:text-emerald-300 mt-1 font-mono"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.modal.order_id"))}: ${ssrInterpolate(createdResult.value.id)}</p><p class="text-sm text-emerald-800 dark:text-emerald-300 mt-2"${_scopeId}>`);
              if (((_a = createdResult.value.order) == null ? void 0 : _a.payStatus) === "pending") {
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.pendingLinkNotice"))}</span>`);
              } else {
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.paidNotice"))}</span>`);
              }
              _push2(`</p></div></div></div>`);
              if (((_b = createdResult.value.order) == null ? void 0 : _b.payStatus) === "pending" && createdResult.value.paymentUrl) {
                _push2(`<div class="p-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-[#18181b] space-y-3"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs font-medium text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.modal.payment_link"))}</span>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "warning",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("admin.orders.pay_status_pending"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("admin.orders.pay_status_pending")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="p-3 bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-700/60 rounded-lg text-xs font-mono text-gray-900 dark:text-gray-200 break-all select-all"${_scopeId}>${ssrInterpolate(createdResult.value.paymentUrl)}</div><div class="flex flex-wrap gap-2 pt-1"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "primary",
                  variant: "solid",
                  icon: "ph:copy",
                  onClick: ($event) => copyPaymentUrl(createdResult.value.paymentUrl)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.copyLink"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("admin.orders.manualOrder.copyLink")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  icon: "ph:arrow-square-out",
                  to: createdResult.value.paymentUrl,
                  target: "_blank"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.openPaymentPage"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("admin.orders.manualOrder.openPaymentPage")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex justify-end pt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                onClick: handleDone
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.close"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("admin.orders.manualOrder.close")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<form class="space-y-6"${_scopeId}><div class="p-5 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#161618] space-y-4"${_scopeId}><div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-800/80 pb-3"${_scopeId}><h4 class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:user-circle",
                class: "w-4 h-4 text-primary-500"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.userSection"))}</h4><div class="flex bg-gray-100 dark:bg-gray-800/80 p-0.5 rounded-lg text-xs"${_scopeId}><button type="button" class="${ssrRenderClass([userMode.value === "select" ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-medium shadow-xs" : "text-gray-500 hover:text-gray-900 dark:hover:text-white", "px-2.5 py-1 rounded-md transition-colors"])}"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.userModeSelect"))}</button><button type="button" class="${ssrRenderClass([userMode.value === "create" ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-medium shadow-xs" : "text-gray-500 hover:text-gray-900 dark:hover:text-white", "px-2.5 py-1 rounded-md transition-colors"])}"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.userModeCreate"))}</button></div></div>`);
              if (userMode.value === "select") {
                _push2(`<div class="space-y-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: _ctx.$t("admin.orders.manualOrder.searchUser")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="relative"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: userQuery.value,
                        "onUpdate:modelValue": ($event) => userQuery.value = $event,
                        placeholder: _ctx.$t("admin.orders.manualOrder.searchUser"),
                        icon: "ph:magnifying-glass",
                        class: "w-full",
                        onInput: handleUserSearchInput
                      }, null, _parent3, _scopeId2));
                      if (isSearchingUsers.value) {
                        _push3(`<div class="absolute right-3 top-2.5 text-xs text-gray-400"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.searching"))}</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UInput, {
                            modelValue: userQuery.value,
                            "onUpdate:modelValue": ($event) => userQuery.value = $event,
                            placeholder: _ctx.$t("admin.orders.manualOrder.searchUser"),
                            icon: "ph:magnifying-glass",
                            class: "w-full",
                            onInput: handleUserSearchInput
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                          isSearchingUsers.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "absolute right-3 top-2.5 text-xs text-gray-400"
                          }, toDisplayString(_ctx.$t("admin.orders.manualOrder.searching")), 1)) : createCommentVNode("", true)
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                if (userSearchResults.value.length > 0) {
                  _push2(`<div class="max-h-48 overflow-y-auto rounded-lg border border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-800 bg-gray-50 dark:bg-gray-900/40"${_scopeId}><!--[-->`);
                  ssrRenderList(userSearchResults.value, (user) => {
                    var _a2, _b2, _c2;
                    _push2(`<div class="${ssrRenderClass([((_a2 = selectedUser.value) == null ? void 0 : _a2.id) === user.id ? "bg-primary-50 dark:bg-primary-950/30" : "", "p-2.5 flex items-center justify-between cursor-pointer hover:bg-primary-50/50 dark:hover:bg-primary-950/20 transition-colors"])}"${_scopeId}><div class="flex flex-col min-w-0"${_scopeId}><span class="text-xs font-medium text-gray-900 dark:text-white flex items-center gap-1.5 truncate"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "ph:user",
                      class: "w-3.5 h-3.5 text-primary-500 shrink-0"
                    }, null, _parent2, _scopeId));
                    _push2(` ${ssrInterpolate(user.email)}</span>`);
                    if (user.nickname) {
                      _push2(`<span class="text-[11px] text-gray-500 truncate"${_scopeId}>${ssrInterpolate(user.nickname)} (ID: ${ssrInterpolate(user.id)}) </span>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div>`);
                    _push2(ssrRenderComponent(_component_UButton, {
                      size: "xs",
                      color: ((_b2 = selectedUser.value) == null ? void 0 : _b2.id) === user.id ? "primary" : "neutral",
                      variant: ((_c2 = selectedUser.value) == null ? void 0 : _c2.id) === user.id ? "solid" : "ghost"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        var _a3, _b3;
                        if (_push3) {
                          _push3(`${ssrInterpolate(((_a3 = selectedUser.value) == null ? void 0 : _a3.id) === user.id ? "\u2713" : "+")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(((_b3 = selectedUser.value) == null ? void 0 : _b3.id) === user.id ? "\u2713" : "+"), 1)
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
                if (selectedUser.value) {
                  _push2(`<div class="flex items-center justify-between p-3 rounded-lg border border-primary-200 dark:border-primary-800/60 bg-primary-50/60 dark:bg-primary-950/20"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:check-circle-fill",
                    class: "w-4 h-4 text-primary-600 dark:text-primary-400"
                  }, null, _parent2, _scopeId));
                  _push2(`<span class="text-xs font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(selectedUser.value.email)}</span>`);
                  if (selectedUser.value.nickname) {
                    _push2(`<span class="text-xs text-gray-500"${_scopeId}> (${ssrInterpolate(selectedUser.value.nickname)}) </span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                  _push2(ssrRenderComponent(_component_UButton, {
                    size: "xs",
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    onClick: ($event) => selectedUser.value = null
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: _ctx.$t("admin.orders.manualOrder.email"),
                  required: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: customerEmail.value,
                        "onUpdate:modelValue": ($event) => customerEmail.value = $event,
                        type: "email",
                        required: "",
                        placeholder: _ctx.$t("admin.orders.manualOrder.emailPlaceholder"),
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                      _push3(`<p class="text-[11px] text-gray-500 mt-1"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.emailHelp"))}</p>`);
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: customerEmail.value,
                          "onUpdate:modelValue": ($event) => customerEmail.value = $event,
                          type: "email",
                          required: "",
                          placeholder: _ctx.$t("admin.orders.manualOrder.emailPlaceholder"),
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                        createVNode("p", { class: "text-[11px] text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.orders.manualOrder.emailHelp")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: _ctx.$t("admin.orders.manualOrder.nickname")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: customerNickname.value,
                        "onUpdate:modelValue": ($event) => customerNickname.value = $event,
                        placeholder: _ctx.$t("admin.orders.manualOrder.nicknamePlaceholder"),
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: customerNickname.value,
                          "onUpdate:modelValue": ($event) => customerNickname.value = $event,
                          placeholder: _ctx.$t("admin.orders.manualOrder.nicknamePlaceholder"),
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`</div><div class="p-5 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#161618] space-y-4"${_scopeId}><h4 class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-gray-800/80 pb-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:package",
                class: "w-4 h-4 text-primary-500"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.productSection"))}</h4><div class="grid grid-cols-1 md:grid-cols-3 gap-4"${_scopeId}><div class="md:col-span-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.orders.manualOrder.selectProduct"),
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: selectedProductId.value,
                      "onUpdate:modelValue": [($event) => selectedProductId.value = $event, handleProductChange],
                      items: productOptions.value,
                      placeholder: _ctx.$t("admin.orders.manualOrder.selectProductPlaceholder"),
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: selectedProductId.value,
                        "onUpdate:modelValue": [($event) => selectedProductId.value = $event, handleProductChange],
                        items: productOptions.value,
                        placeholder: _ctx.$t("admin.orders.manualOrder.selectProductPlaceholder"),
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.orders.manualOrder.quantity"),
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: quantity.value,
                      "onUpdate:modelValue": ($event) => quantity.value = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "1",
                      step: "1",
                      required: "",
                      class: "w-full",
                      onInput: handleQuantityChange
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: quantity.value,
                        "onUpdate:modelValue": ($event) => quantity.value = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        min: "1",
                        step: "1",
                        required: "",
                        class: "w-full",
                        onInput: handleQuantityChange
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.orders.manualOrder.customAmount"),
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: actualAmount.value,
                      "onUpdate:modelValue": ($event) => actualAmount.value = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "0",
                      step: "0.01",
                      required: "",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                    _push3(`<p class="text-[11px] text-gray-500 mt-1"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.customAmountHelp"))}</p>`);
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: actualAmount.value,
                        "onUpdate:modelValue": ($event) => actualAmount.value = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        min: "0",
                        step: "0.01",
                        required: "",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("p", { class: "text-[11px] text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.orders.manualOrder.customAmountHelp")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.orders.manualOrder.currency")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: currency.value,
                      "onUpdate:modelValue": ($event) => currency.value = $event,
                      items: currencyOptions,
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: currency.value,
                        "onUpdate:modelValue": ($event) => currency.value = $event,
                        items: currencyOptions,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="p-5 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#161618] space-y-4"${_scopeId}><h4 class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-gray-800/80 pb-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:credit-card",
                class: "w-4 h-4 text-primary-500"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.paymentSection"))}</h4>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.orders.manualOrder.payMode")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3"${_scopeId2}><div class="${ssrRenderClass([payStatus.value === "paid" ? "border-primary-500 bg-primary-50/30 dark:bg-primary-950/20 ring-1 ring-primary-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700", "p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3"])}"${_scopeId2}><div class="${ssrRenderClass([payStatus.value === "paid" ? "border-primary-600 bg-primary-600 text-white" : "border-gray-400", "w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0"])}"${_scopeId2}>`);
                    if (payStatus.value === "paid") {
                      _push3(`<div class="w-1.5 h-1.5 rounded-full bg-white"${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="flex flex-col"${_scopeId2}><span class="text-xs font-semibold text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.payModePaid"))}</span><span class="text-[11px] text-gray-500 mt-0.5"${_scopeId2}> \u5DF2\u5728\u7EBF\u4E0B\u6216\u5916\u90E8\u6536\u6B3E\uFF0C\u76F4\u63A5\u6807\u8BB0\u5DF2\u4ED8\u5E76\u53EF\u7ACB\u5373\u5F00\u901A\u670D\u52A1\u3002 </span></div></div><div class="${ssrRenderClass([payStatus.value === "pending" ? "border-primary-500 bg-primary-50/30 dark:bg-primary-950/20 ring-1 ring-primary-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700", "p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3"])}"${_scopeId2}><div class="${ssrRenderClass([payStatus.value === "pending" ? "border-primary-600 bg-primary-600 text-white" : "border-gray-400", "w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0"])}"${_scopeId2}>`);
                    if (payStatus.value === "pending") {
                      _push3(`<div class="w-1.5 h-1.5 rounded-full bg-white"${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="flex flex-col"${_scopeId2}><span class="text-xs font-semibold text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.payModePending"))}</span><span class="text-[11px] text-gray-500 mt-0.5"${_scopeId2}> \u751F\u6210\u5F85\u4ED8\u6B3E\u8BA2\u5355\u4E0E\u4E13\u5C5E\u652F\u4ED8\u94FE\u63A5\uFF0C\u53D1\u7ED9\u5BA2\u6237\u81EA\u884C\u4ED8\u6B3E\u3002 </span></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-3" }, [
                        createVNode("div", {
                          class: ["p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3", payStatus.value === "paid" ? "border-primary-500 bg-primary-50/30 dark:bg-primary-950/20 ring-1 ring-primary-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"],
                          onClick: ($event) => payStatus.value = "paid"
                        }, [
                          createVNode("div", {
                            class: ["w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0", payStatus.value === "paid" ? "border-primary-600 bg-primary-600 text-white" : "border-gray-400"]
                          }, [
                            payStatus.value === "paid" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "w-1.5 h-1.5 rounded-full bg-white"
                            })) : createCommentVNode("", true)
                          ], 2),
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("span", { class: "text-xs font-semibold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("admin.orders.manualOrder.payModePaid")), 1),
                            createVNode("span", { class: "text-[11px] text-gray-500 mt-0.5" }, " \u5DF2\u5728\u7EBF\u4E0B\u6216\u5916\u90E8\u6536\u6B3E\uFF0C\u76F4\u63A5\u6807\u8BB0\u5DF2\u4ED8\u5E76\u53EF\u7ACB\u5373\u5F00\u901A\u670D\u52A1\u3002 ")
                          ])
                        ], 10, ["onClick"]),
                        createVNode("div", {
                          class: ["p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3", payStatus.value === "pending" ? "border-primary-500 bg-primary-50/30 dark:bg-primary-950/20 ring-1 ring-primary-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"],
                          onClick: ($event) => payStatus.value = "pending"
                        }, [
                          createVNode("div", {
                            class: ["w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0", payStatus.value === "pending" ? "border-primary-600 bg-primary-600 text-white" : "border-gray-400"]
                          }, [
                            payStatus.value === "pending" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "w-1.5 h-1.5 rounded-full bg-white"
                            })) : createCommentVNode("", true)
                          ], 2),
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("span", { class: "text-xs font-semibold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("admin.orders.manualOrder.payModePending")), 1),
                            createVNode("span", { class: "text-[11px] text-gray-500 mt-0.5" }, " \u751F\u6210\u5F85\u4ED8\u6B3E\u8BA2\u5355\u4E0E\u4E13\u5C5E\u652F\u4ED8\u94FE\u63A5\uFF0C\u53D1\u7ED9\u5BA2\u6237\u81EA\u884C\u4ED8\u6B3E\u3002 ")
                          ])
                        ], 10, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (payStatus.value === "paid") {
                _push2(`<div class="space-y-4 pt-2 border-t border-gray-100 dark:border-gray-800/80"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: _ctx.$t("admin.orders.manualOrder.payMethod")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_USelect, {
                        modelValue: payMethod.value,
                        "onUpdate:modelValue": ($event) => payMethod.value = $event,
                        items: payMethodOptions.value,
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_USelect, {
                          modelValue: payMethod.value,
                          "onUpdate:modelValue": ($event) => payMethod.value = $event,
                          items: payMethodOptions.value,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: _ctx.$t("admin.orders.manualOrder.tradeNo")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: tradeNo.value,
                        "onUpdate:modelValue": ($event) => tradeNo.value = $event,
                        placeholder: _ctx.$t("admin.orders.manualOrder.tradeNoPlaceholder"),
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: tradeNo.value,
                          "onUpdate:modelValue": ($event) => tradeNo.value = $event,
                          placeholder: _ctx.$t("admin.orders.manualOrder.tradeNoPlaceholder"),
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="pt-1"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UCheckbox, {
                  modelValue: autoFulfill.value,
                  "onUpdate:modelValue": ($event) => autoFulfill.value = $event,
                  label: _ctx.$t("admin.orders.manualOrder.autoFulfill"),
                  description: _ctx.$t("admin.orders.manualOrder.autoFulfillHelp")
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: _ctx.$t("admin.orders.manualOrder.deliveryInfo")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UTextarea, {
                        modelValue: deliveryInfo.value,
                        "onUpdate:modelValue": ($event) => deliveryInfo.value = $event,
                        rows: 2,
                        placeholder: _ctx.$t("admin.orders.manualOrder.deliveryInfoPlaceholder"),
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UTextarea, {
                          modelValue: deliveryInfo.value,
                          "onUpdate:modelValue": ($event) => deliveryInfo.value = $event,
                          rows: 2,
                          placeholder: _ctx.$t("admin.orders.manualOrder.deliveryInfoPlaceholder"),
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="pt-2 border-t border-gray-100 dark:border-gray-800/80"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCheckbox, {
                modelValue: sendEmail.value,
                "onUpdate:modelValue": ($event) => sendEmail.value = $event,
                label: _ctx.$t("admin.orders.manualOrder.sendEmail")
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="flex justify-end gap-3 pt-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                onClick: ($event) => isOpen.value = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("admin.common.cancel"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                type: "submit",
                color: "primary",
                loading: isSubmitting.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("admin.orders.manualOrder.submit"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("admin.orders.manualOrder.submit")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></form>`);
            }
          } else {
            return [
              createdResult.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "space-y-6 py-4"
              }, [
                createVNode("div", { class: "rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-950/30 p-5" }, [
                  createVNode("div", { class: "flex items-start gap-4" }, [
                    createVNode("div", { class: "p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-full text-emerald-600 dark:text-emerald-400 shrink-0" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:check-circle-fill",
                        class: "w-6 h-6"
                      })
                    ]),
                    createVNode("div", { class: "flex-1 min-w-0" }, [
                      createVNode("h4", { class: "text-base font-semibold text-emerald-900 dark:text-emerald-200" }, toDisplayString(_ctx.$t("admin.orders.manualOrder.successTitle")), 1),
                      createVNode("p", { class: "text-xs text-emerald-700 dark:text-emerald-300 mt-1 font-mono" }, toDisplayString(_ctx.$t("admin.orders.modal.order_id")) + ": " + toDisplayString(createdResult.value.id), 1),
                      createVNode("p", { class: "text-sm text-emerald-800 dark:text-emerald-300 mt-2" }, [
                        ((_c = createdResult.value.order) == null ? void 0 : _c.payStatus) === "pending" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("admin.orders.manualOrder.pendingLinkNotice")), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("admin.orders.manualOrder.paidNotice")), 1))
                      ])
                    ])
                  ])
                ]),
                ((_d = createdResult.value.order) == null ? void 0 : _d.payStatus) === "pending" && createdResult.value.paymentUrl ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "p-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-[#18181b] space-y-3"
                }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("span", { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, toDisplayString(_ctx.$t("admin.orders.modal.payment_link")), 1),
                    createVNode(_component_UBadge, {
                      color: "warning",
                      variant: "subtle",
                      size: "xs"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("admin.orders.pay_status_pending")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "p-3 bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-700/60 rounded-lg text-xs font-mono text-gray-900 dark:text-gray-200 break-all select-all" }, toDisplayString(createdResult.value.paymentUrl), 1),
                  createVNode("div", { class: "flex flex-wrap gap-2 pt-1" }, [
                    createVNode(_component_UButton, {
                      color: "primary",
                      variant: "solid",
                      icon: "ph:copy",
                      onClick: ($event) => copyPaymentUrl(createdResult.value.paymentUrl)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("admin.orders.manualOrder.copyLink")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "outline",
                      icon: "ph:arrow-square-out",
                      to: createdResult.value.paymentUrl,
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("admin.orders.manualOrder.openPaymentPage")), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "flex justify-end pt-4" }, [
                  createVNode(_component_UButton, {
                    color: "primary",
                    onClick: handleDone
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.orders.manualOrder.close")), 1)
                    ]),
                    _: 1
                  })
                ])
              ])) : (openBlock(), createBlock("form", {
                key: 1,
                onSubmit: withModifiers(handleSubmit, ["prevent"]),
                class: "space-y-6"
              }, [
                createVNode("div", { class: "p-5 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#161618] space-y-4" }, [
                  createVNode("div", { class: "flex items-center justify-between border-b border-gray-100 dark:border-gray-800/80 pb-3" }, [
                    createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:user-circle",
                        class: "w-4 h-4 text-primary-500"
                      }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("admin.orders.manualOrder.userSection")), 1)
                    ]),
                    createVNode("div", { class: "flex bg-gray-100 dark:bg-gray-800/80 p-0.5 rounded-lg text-xs" }, [
                      createVNode("button", {
                        type: "button",
                        class: ["px-2.5 py-1 rounded-md transition-colors", userMode.value === "select" ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-medium shadow-xs" : "text-gray-500 hover:text-gray-900 dark:hover:text-white"],
                        onClick: ($event) => userMode.value = "select"
                      }, toDisplayString(_ctx.$t("admin.orders.manualOrder.userModeSelect")), 11, ["onClick"]),
                      createVNode("button", {
                        type: "button",
                        class: ["px-2.5 py-1 rounded-md transition-colors", userMode.value === "create" ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-medium shadow-xs" : "text-gray-500 hover:text-gray-900 dark:hover:text-white"],
                        onClick: ($event) => userMode.value = "create"
                      }, toDisplayString(_ctx.$t("admin.orders.manualOrder.userModeCreate")), 11, ["onClick"])
                    ])
                  ]),
                  userMode.value === "select" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "space-y-3"
                  }, [
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.orders.manualOrder.searchUser")
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UInput, {
                            modelValue: userQuery.value,
                            "onUpdate:modelValue": ($event) => userQuery.value = $event,
                            placeholder: _ctx.$t("admin.orders.manualOrder.searchUser"),
                            icon: "ph:magnifying-glass",
                            class: "w-full",
                            onInput: handleUserSearchInput
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                          isSearchingUsers.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "absolute right-3 top-2.5 text-xs text-gray-400"
                          }, toDisplayString(_ctx.$t("admin.orders.manualOrder.searching")), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    userSearchResults.value.length > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "max-h-48 overflow-y-auto rounded-lg border border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-800 bg-gray-50 dark:bg-gray-900/40"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(userSearchResults.value, (user) => {
                        var _a2, _b2, _c2;
                        return openBlock(), createBlock("div", {
                          key: user.id,
                          class: ["p-2.5 flex items-center justify-between cursor-pointer hover:bg-primary-50/50 dark:hover:bg-primary-950/20 transition-colors", ((_a2 = selectedUser.value) == null ? void 0 : _a2.id) === user.id ? "bg-primary-50 dark:bg-primary-950/30" : ""],
                          onClick: ($event) => selectUser(user)
                        }, [
                          createVNode("div", { class: "flex flex-col min-w-0" }, [
                            createVNode("span", { class: "text-xs font-medium text-gray-900 dark:text-white flex items-center gap-1.5 truncate" }, [
                              createVNode(_component_UIcon, {
                                name: "ph:user",
                                class: "w-3.5 h-3.5 text-primary-500 shrink-0"
                              }),
                              createTextVNode(" " + toDisplayString(user.email), 1)
                            ]),
                            user.nickname ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-[11px] text-gray-500 truncate"
                            }, toDisplayString(user.nickname) + " (ID: " + toDisplayString(user.id) + ") ", 1)) : createCommentVNode("", true)
                          ]),
                          createVNode(_component_UButton, {
                            size: "xs",
                            color: ((_b2 = selectedUser.value) == null ? void 0 : _b2.id) === user.id ? "primary" : "neutral",
                            variant: ((_c2 = selectedUser.value) == null ? void 0 : _c2.id) === user.id ? "solid" : "ghost"
                          }, {
                            default: withCtx(() => {
                              var _a3;
                              return [
                                createTextVNode(toDisplayString(((_a3 = selectedUser.value) == null ? void 0 : _a3.id) === user.id ? "\u2713" : "+"), 1)
                              ];
                            }),
                            _: 2
                          }, 1032, ["color", "variant"])
                        ], 10, ["onClick"]);
                      }), 128))
                    ])) : createCommentVNode("", true),
                    selectedUser.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex items-center justify-between p-3 rounded-lg border border-primary-200 dark:border-primary-800/60 bg-primary-50/60 dark:bg-primary-950/20"
                    }, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:check-circle-fill",
                          class: "w-4 h-4 text-primary-600 dark:text-primary-400"
                        }),
                        createVNode("span", { class: "text-xs font-medium text-gray-900 dark:text-white" }, toDisplayString(selectedUser.value.email), 1),
                        selectedUser.value.nickname ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-xs text-gray-500"
                        }, " (" + toDisplayString(selectedUser.value.nickname) + ") ", 1)) : createCommentVNode("", true)
                      ]),
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "neutral",
                        variant: "ghost",
                        icon: "ph:x",
                        onClick: ($event) => selectedUser.value = null
                      }, null, 8, ["onClick"])
                    ])) : createCommentVNode("", true)
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "grid grid-cols-1 md:grid-cols-2 gap-4"
                  }, [
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.orders.manualOrder.email"),
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: customerEmail.value,
                          "onUpdate:modelValue": ($event) => customerEmail.value = $event,
                          type: "email",
                          required: "",
                          placeholder: _ctx.$t("admin.orders.manualOrder.emailPlaceholder"),
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                        createVNode("p", { class: "text-[11px] text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.orders.manualOrder.emailHelp")), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.orders.manualOrder.nickname")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: customerNickname.value,
                          "onUpdate:modelValue": ($event) => customerNickname.value = $event,
                          placeholder: _ctx.$t("admin.orders.manualOrder.nicknamePlaceholder"),
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]))
                ]),
                createVNode("div", { class: "p-5 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#161618] space-y-4" }, [
                  createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-gray-800/80 pb-3" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:package",
                      class: "w-4 h-4 text-primary-500"
                    }),
                    createTextVNode(" " + toDisplayString(_ctx.$t("admin.orders.manualOrder.productSection")), 1)
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-4" }, [
                    createVNode("div", { class: "md:col-span-2" }, [
                      createVNode(_component_UFormField, {
                        label: _ctx.$t("admin.orders.manualOrder.selectProduct"),
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelect, {
                            modelValue: selectedProductId.value,
                            "onUpdate:modelValue": [($event) => selectedProductId.value = $event, handleProductChange],
                            items: productOptions.value,
                            placeholder: _ctx.$t("admin.orders.manualOrder.selectProductPlaceholder"),
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UFormField, {
                        label: _ctx.$t("admin.orders.manualOrder.quantity"),
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: quantity.value,
                            "onUpdate:modelValue": ($event) => quantity.value = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            min: "1",
                            step: "1",
                            required: "",
                            class: "w-full",
                            onInput: handleQuantityChange
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4 pt-1" }, [
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.orders.manualOrder.customAmount"),
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: actualAmount.value,
                          "onUpdate:modelValue": ($event) => actualAmount.value = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          min: "0",
                          step: "0.01",
                          required: "",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("p", { class: "text-[11px] text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.orders.manualOrder.customAmountHelp")), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.orders.manualOrder.currency")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: currency.value,
                          "onUpdate:modelValue": ($event) => currency.value = $event,
                          items: currencyOptions,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ])
                ]),
                createVNode("div", { class: "p-5 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#161618] space-y-4" }, [
                  createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-gray-800/80 pb-3" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:credit-card",
                      class: "w-4 h-4 text-primary-500"
                    }),
                    createTextVNode(" " + toDisplayString(_ctx.$t("admin.orders.manualOrder.paymentSection")), 1)
                  ]),
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.orders.manualOrder.payMode")
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-3" }, [
                        createVNode("div", {
                          class: ["p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3", payStatus.value === "paid" ? "border-primary-500 bg-primary-50/30 dark:bg-primary-950/20 ring-1 ring-primary-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"],
                          onClick: ($event) => payStatus.value = "paid"
                        }, [
                          createVNode("div", {
                            class: ["w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0", payStatus.value === "paid" ? "border-primary-600 bg-primary-600 text-white" : "border-gray-400"]
                          }, [
                            payStatus.value === "paid" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "w-1.5 h-1.5 rounded-full bg-white"
                            })) : createCommentVNode("", true)
                          ], 2),
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("span", { class: "text-xs font-semibold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("admin.orders.manualOrder.payModePaid")), 1),
                            createVNode("span", { class: "text-[11px] text-gray-500 mt-0.5" }, " \u5DF2\u5728\u7EBF\u4E0B\u6216\u5916\u90E8\u6536\u6B3E\uFF0C\u76F4\u63A5\u6807\u8BB0\u5DF2\u4ED8\u5E76\u53EF\u7ACB\u5373\u5F00\u901A\u670D\u52A1\u3002 ")
                          ])
                        ], 10, ["onClick"]),
                        createVNode("div", {
                          class: ["p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3", payStatus.value === "pending" ? "border-primary-500 bg-primary-50/30 dark:bg-primary-950/20 ring-1 ring-primary-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"],
                          onClick: ($event) => payStatus.value = "pending"
                        }, [
                          createVNode("div", {
                            class: ["w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0", payStatus.value === "pending" ? "border-primary-600 bg-primary-600 text-white" : "border-gray-400"]
                          }, [
                            payStatus.value === "pending" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "w-1.5 h-1.5 rounded-full bg-white"
                            })) : createCommentVNode("", true)
                          ], 2),
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("span", { class: "text-xs font-semibold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("admin.orders.manualOrder.payModePending")), 1),
                            createVNode("span", { class: "text-[11px] text-gray-500 mt-0.5" }, " \u751F\u6210\u5F85\u4ED8\u6B3E\u8BA2\u5355\u4E0E\u4E13\u5C5E\u652F\u4ED8\u94FE\u63A5\uFF0C\u53D1\u7ED9\u5BA2\u6237\u81EA\u884C\u4ED8\u6B3E\u3002 ")
                          ])
                        ], 10, ["onClick"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  payStatus.value === "paid" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "space-y-4 pt-2 border-t border-gray-100 dark:border-gray-800/80"
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                      createVNode(_component_UFormField, {
                        label: _ctx.$t("admin.orders.manualOrder.payMethod")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelect, {
                            modelValue: payMethod.value,
                            "onUpdate:modelValue": ($event) => payMethod.value = $event,
                            items: payMethodOptions.value,
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      createVNode(_component_UFormField, {
                        label: _ctx.$t("admin.orders.manualOrder.tradeNo")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: tradeNo.value,
                            "onUpdate:modelValue": ($event) => tradeNo.value = $event,
                            placeholder: _ctx.$t("admin.orders.manualOrder.tradeNoPlaceholder"),
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    createVNode("div", { class: "pt-1" }, [
                      createVNode(_component_UCheckbox, {
                        modelValue: autoFulfill.value,
                        "onUpdate:modelValue": ($event) => autoFulfill.value = $event,
                        label: _ctx.$t("admin.orders.manualOrder.autoFulfill"),
                        description: _ctx.$t("admin.orders.manualOrder.autoFulfillHelp")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "description"])
                    ]),
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.orders.manualOrder.deliveryInfo")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UTextarea, {
                          modelValue: deliveryInfo.value,
                          "onUpdate:modelValue": ($event) => deliveryInfo.value = $event,
                          rows: 2,
                          placeholder: _ctx.$t("admin.orders.manualOrder.deliveryInfoPlaceholder"),
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "pt-2 border-t border-gray-100 dark:border-gray-800/80" }, [
                    createVNode(_component_UCheckbox, {
                      modelValue: sendEmail.value,
                      "onUpdate:modelValue": ($event) => sendEmail.value = $event,
                      label: _ctx.$t("admin.orders.manualOrder.sendEmail")
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                  ])
                ]),
                createVNode("div", { class: "flex justify-end gap-3 pt-2" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    onClick: ($event) => isOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    type: "submit",
                    color: "primary",
                    loading: isSubmitting.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.orders.manualOrder.submit")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ], 32))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/orders/ManualOrderModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AdminOrdersManualOrderModal = Object.assign(_sfc_main$1, { __name: "AdminOrdersManualOrderModal" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "orders",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t, te } = useI18n();
    const { formatDateTime } = useFormatTime();
    const { formatCurrencyAmount } = useCurrencyFormat();
    const { buildImageProxyUrl } = useImageProxy();
    const route = useRoute();
    useRouter();
    const toast = useToast();
    const { confirm } = useConfirm();
    const requestUrl = useRequestURL();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const activeTab = ref(route.query.tab === "topups" ? "topups" : "orders");
    watch(() => route.query.tab, (val) => {
      activeTab.value = val === "topups" ? "topups" : "orders";
    });
    const columns = computed(() => [
      { accessorKey: "id", header: t("admin.orders.id") },
      { accessorKey: "productName", header: t("admin.dashboard.product") },
      { accessorKey: "user", header: t("admin.orders.user") },
      {
        accessorKey: "actions",
        header: t("admin.common.actions"),
        meta: {
          class: {
            th: "text-right sticky right-0 z-30 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]",
            td: "text-right font-medium sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]"
          }
        }
      }
    ]);
    const { page, pageSize: pageCount, onPageChange } = usePagination(15);
    const activePayStatus = ref("all");
    const activeFulfillmentStatus = ref("all");
    const searchInput = ref("");
    const searchKeyword = ref("");
    let searchDebounceTimer = null;
    watch(searchInput, (val) => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        searchKeyword.value = (val || "").trim();
        page.value = 1;
      }, 350);
    });
    const isFiltered = computed(() => activePayStatus.value !== "all" || activeFulfillmentStatus.value !== "all" || !!searchKeyword.value);
    const resetFilters = () => {
      activePayStatus.value = "all";
      activeFulfillmentStatus.value = "all";
      searchInput.value = "";
      searchKeyword.value = "";
      page.value = 1;
    };
    const {
      data: ordersData,
      pending,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/orders",
      {
        query: computed(() => ({
          page: page.value,
          pageSize: pageCount.value,
          payStatus: activePayStatus.value !== "all" ? activePayStatus.value : void 0,
          status: activeFulfillmentStatus.value !== "all" ? activeFulfillmentStatus.value : void 0,
          search: searchKeyword.value || void 0
        })),
        watch: [page, activePayStatus, activeFulfillmentStatus, searchKeyword],
        onResponseError({ response }) {
          if (response.status === 401) {
            useRouter().push("/admin/login");
          }
        }
      },
      "$Hu5_O4odo0"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const orders = computed(() => {
      var _a;
      return ((_a = ordersData.value) == null ? void 0 : _a.data) || [];
    });
    const totalItems = computed(() => {
      var _a;
      return ((_a = ordersData.value) == null ? void 0 : _a.total) || 0;
    });
    const stats = computed(() => {
      var _a;
      return ((_a = ordersData.value) == null ? void 0 : _a.stats) || { total: 0, paid: 0, pending: 0, failed: 0, refunded: 0, deleted: 0 };
    });
    const frontendOrigin = computed(() => requestUrl.origin.replace(/\/$/, ""));
    const payStatusPills = computed(() => [
      { value: "all", label: t("admin.orders.all"), count: stats.value.total, dotColor: "" },
      { value: "paid", label: t("admin.orders.pay_status_paid"), count: stats.value.paid, dotColor: "bg-emerald-500" },
      { value: "pending", label: t("admin.orders.pay_status_pending"), count: stats.value.pending, dotColor: "bg-amber-500" },
      { value: "failed", label: t("admin.orders.pay_status_failed"), count: stats.value.failed, dotColor: "bg-red-500" },
      { value: "refunded", label: t("admin.orders.pay_status_refunded"), count: stats.value.refunded, dotColor: "bg-purple-500" }
    ]);
    const fulfillmentFilterOptions = computed(() => [
      { value: "all", label: t("admin.orders.all_fulfillment") },
      { value: "processing", label: t("admin.orders.status_processing") },
      { value: "active", label: t("admin.orders.status_active") },
      { value: "delivered", label: t("admin.orders.status_delivered") },
      { value: "completed", label: t("admin.orders.status_completed") },
      { value: "failed", label: t("admin.orders.status_failed") },
      { value: "none", label: t("admin.orders.status_none") }
    ]);
    const isModalOpen = ref(false);
    const isManualOrderOpen = ref(false);
    const selectedOrder = ref(null);
    const isSaving = ref(false);
    const isReconciling = ref(false);
    const isFulfilling = ref(false);
    const isActionWorking = ref(false);
    const actionLoadingId = ref(null);
    const reconcileLoadingId = ref(null);
    const getPayStatusLabel = (payStatus) => {
      const status = payStatus || "pending";
      const key = `admin.orders.pay_status_${status}`;
      return te(key) ? t(key) : status;
    };
    const getStatusLabel = (status) => {
      const s = status || "none";
      const key = `admin.orders.status_${s}`;
      return te(key) ? t(key) : s;
    };
    const orderStatusValues = ["none", "processing", "active", "delivered", "completed", "failed", "expired"];
    const orderStatusOptions = computed(() => orderStatusValues.map((value) => ({ value, label: getStatusLabel(value) })));
    const payStatusValues = ["pending", "paid", "refunded", "cancelled", "failed"];
    const payStatusOptions = computed(() => payStatusValues.map((value) => ({ value, label: getPayStatusLabel(value) })));
    const editStatus = ref("none");
    const editPayStatus = ref("pending");
    const editDeliveryInfo = ref("");
    const isMetaExpanded = ref(false);
    const formatMetaData = (metaData) => {
      if (!metaData) return "";
      try {
        const obj = typeof metaData === "string" ? JSON.parse(metaData) : metaData;
        return JSON.stringify(obj, null, 2);
      } catch (e) {
        return String(metaData);
      }
    };
    const getOrderQuantity = (order) => {
      if (!order) return 1;
      let meta = order.metaData;
      if (typeof meta === "string") {
        try {
          meta = JSON.parse(meta);
        } catch {
          meta = {};
        }
      }
      return (meta == null ? void 0 : meta.order_quantity) || 1;
    };
    const handleManualOrderSuccess = async () => {
      await refresh();
    };
    const normalizeStatus = (status) => {
      return status && orderStatusValues.includes(status) ? status : "none";
    };
    const normalizePayStatus = (payStatus) => {
      return payStatus && payStatusValues.includes(payStatus) ? payStatus : "pending";
    };
    const viewDetails = (order) => {
      selectedOrder.value = { ...order };
      editStatus.value = normalizeStatus(order.status);
      editPayStatus.value = normalizePayStatus(order.payStatus);
      editDeliveryInfo.value = order.deliveryInfo || "";
      isMetaExpanded.value = false;
      isModalOpen.value = true;
      void fetchFullOrderDetail(order.id);
    };
    const fetchFullOrderDetail = async (id) => {
      var _a;
      try {
        const res = await $fetch(`/api/admin/orders/${id}`);
        if ((res == null ? void 0 : res.data) && ((_a = selectedOrder.value) == null ? void 0 : _a.id) === id) {
          selectedOrder.value = { ...res.data };
          editStatus.value = normalizeStatus(res.data.status);
          editPayStatus.value = normalizePayStatus(res.data.payStatus);
          editDeliveryInfo.value = res.data.deliveryInfo || "";
        }
      } catch {
      }
    };
    const putOrder = (orderId, payload) => $fetch(`/api/admin/orders/${orderId}`, {
      method: "PUT",
      body: payload
    });
    const saveOrderForm = async () => {
      var _a, _b, _c;
      if (!selectedOrder.value) return;
      const order = selectedOrder.value;
      isSaving.value = true;
      try {
        const payload = {
          status: editStatus.value,
          payStatus: editPayStatus.value,
          deliveryInfo: editDeliveryInfo.value
        };
        try {
          await putOrder(order.id, payload);
        } catch (e) {
          if (((_b = (_a = e == null ? void 0 : e.data) == null ? void 0 : _a.data) == null ? void 0 : _b.code) !== "SUBSCRIPTION_REFUND_IMPACT") throw e;
          if (!await confirm({ title: t("admin.common.warning"), description: e.data.message })) return;
          await putOrder(order.id, { ...payload, confirmSubscriptionImpact: true });
        }
        toast.add({
          title: t("admin.orders.toast.success"),
          description: t("admin.orders.toast.order_updated"),
          color: "success"
        });
        await refresh();
        await fetchFullOrderDetail(order.id);
      } catch (e) {
        toast.add({
          title: t("admin.orders.toast.error"),
          description: ((_c = e.data) == null ? void 0 : _c.message) || t("admin.orders.toast.update_failed"),
          color: "error"
        });
      } finally {
        isSaving.value = false;
      }
    };
    const trashOrder = async (order) => {
      var _a, _b;
      const isPaid = order.payStatus === "paid";
      const confirmed = await confirm({
        title: t("admin.orders.actions.confirm_trash_title"),
        description: isPaid ? t("admin.orders.actions.confirm_trash_paid_desc", { id: order.id }) : t("admin.orders.actions.confirm_trash_desc", { id: order.id }),
        confirmColor: isPaid ? "warning" : "error"
      });
      if (!confirmed) return;
      actionLoadingId.value = order.id;
      isActionWorking.value = true;
      try {
        await $fetch(`/api/admin/orders/${order.id}`, { method: "DELETE" });
        toast.add({
          title: t("admin.orders.toast.success"),
          description: t("admin.orders.toast.trashed"),
          color: "success"
        });
        await refresh();
        if (((_a = selectedOrder.value) == null ? void 0 : _a.id) === order.id) {
          isModalOpen.value = false;
        }
      } catch (e) {
        toast.add({
          title: t("admin.orders.toast.error"),
          description: ((_b = e.data) == null ? void 0 : _b.message) || t("admin.orders.toast.update_failed"),
          color: "error"
        });
      } finally {
        actionLoadingId.value = null;
        isActionWorking.value = false;
      }
    };
    const restoreOrder = async (order) => {
      var _a, _b;
      const confirmed = await confirm({
        title: t("admin.orders.actions.confirm_restore_title"),
        description: t("admin.orders.actions.confirm_restore_desc", { id: order.id }),
        confirmColor: "primary"
      });
      if (!confirmed) return;
      actionLoadingId.value = order.id;
      isActionWorking.value = true;
      try {
        await $fetch(`/api/admin/orders/${order.id}/restore`, { method: "POST" });
        toast.add({
          title: t("admin.orders.toast.success"),
          description: t("admin.orders.toast.restored"),
          color: "success"
        });
        await refresh();
        if (((_a = selectedOrder.value) == null ? void 0 : _a.id) === order.id) {
          await fetchFullOrderDetail(order.id);
        }
      } catch (e) {
        toast.add({
          title: t("admin.orders.toast.error"),
          description: ((_b = e.data) == null ? void 0 : _b.message) || t("admin.orders.toast.update_failed"),
          color: "error"
        });
      } finally {
        actionLoadingId.value = null;
        isActionWorking.value = false;
      }
    };
    const hardDeleteOrder = async (order) => {
      var _a, _b;
      if (order.payStatus === "paid") {
        toast.add({
          title: t("admin.orders.toast.error"),
          description: "\u5DF2\u652F\u4ED8\u8BA2\u5355\u6D89\u53CA\u8D22\u52A1\u4E0E\u6D41\u6C34\u5BF9\u8D26\uFF0C\u7981\u6B62\u7269\u7406\u5220\u9664",
          color: "error"
        });
        return;
      }
      const confirmed = await confirm({
        title: t("admin.orders.actions.confirm_hard_delete_title"),
        description: t("admin.orders.actions.confirm_hard_delete_desc", { id: order.id }),
        confirmColor: "error"
      });
      if (!confirmed) return;
      actionLoadingId.value = order.id;
      isActionWorking.value = true;
      try {
        await $fetch(`/api/admin/orders/${order.id}?hard=true`, { method: "DELETE" });
        toast.add({
          title: t("admin.orders.toast.success"),
          description: t("admin.orders.toast.hard_deleted"),
          color: "success"
        });
        await refresh();
        if (((_a = selectedOrder.value) == null ? void 0 : _a.id) === order.id) {
          isModalOpen.value = false;
        }
      } catch (e) {
        toast.add({
          title: t("admin.orders.toast.error"),
          description: ((_b = e.data) == null ? void 0 : _b.message) || t("admin.orders.toast.update_failed"),
          color: "error"
        });
      } finally {
        actionLoadingId.value = null;
        isActionWorking.value = false;
      }
    };
    const reconcileOrder = async (order) => {
      var _a, _b;
      reconcileLoadingId.value = order.id;
      isReconciling.value = true;
      try {
        const res = await $fetch(`/api/admin/orders/${order.id}/reconcile`, { method: "POST" });
        toast.add({
          title: (res == null ? void 0 : res.code) === 0 ? t("admin.orders.toast.success") : t("admin.orders.toast.error"),
          description: (res == null ? void 0 : res.message) || t("admin.orders.toast.reconciled"),
          color: (res == null ? void 0 : res.code) === 0 ? "success" : "warning"
        });
        await refresh();
        if (((_a = selectedOrder.value) == null ? void 0 : _a.id) === order.id) {
          await fetchFullOrderDetail(order.id);
        }
      } catch (e) {
        toast.add({
          title: t("admin.orders.toast.error"),
          description: ((_b = e.data) == null ? void 0 : _b.message) || t("admin.orders.toast.update_failed"),
          color: "error"
        });
      } finally {
        reconcileLoadingId.value = null;
        isReconciling.value = false;
      }
    };
    const fulfillOrderAction = async (order) => {
      var _a, _b;
      isFulfilling.value = true;
      try {
        const res = await $fetch(`/api/admin/orders/${order.id}/fulfill`, { method: "POST" });
        toast.add({
          title: t("admin.orders.toast.success"),
          description: (res == null ? void 0 : res.message) || t("admin.orders.toast.fulfilled"),
          color: "success"
        });
        await refresh();
        if (((_a = selectedOrder.value) == null ? void 0 : _a.id) === order.id) {
          await fetchFullOrderDetail(order.id);
        }
      } catch (e) {
        toast.add({
          title: t("admin.orders.toast.error"),
          description: ((_b = e.data) == null ? void 0 : _b.message) || t("admin.orders.toast.update_failed"),
          color: "error"
        });
      } finally {
        isFulfilling.value = false;
      }
    };
    const markOrderPaid = async (order) => {
      var _a, _b;
      const confirmed = await confirm({
        title: t("admin.orders.actions.confirm_mark_paid_title"),
        description: t("admin.orders.actions.confirm_mark_paid_desc"),
        confirmColor: "success"
      });
      if (!confirmed) return;
      isActionWorking.value = true;
      try {
        await putOrder(order.id, { payStatus: "paid" });
        toast.add({
          title: t("admin.orders.toast.success"),
          description: t("admin.orders.toast.order_updated"),
          color: "success"
        });
        await refresh();
        if (((_a = selectedOrder.value) == null ? void 0 : _a.id) === order.id) {
          await fetchFullOrderDetail(order.id);
        }
      } catch (e) {
        toast.add({
          title: t("admin.orders.toast.error"),
          description: ((_b = e.data) == null ? void 0 : _b.message) || t("admin.orders.toast.update_failed"),
          color: "error"
        });
      } finally {
        isActionWorking.value = false;
      }
    };
    const refundOrder = async (order) => {
      var _a, _b, _c, _d;
      const confirmed = await confirm({
        title: t("admin.orders.actions.confirm_refund_title"),
        description: t("admin.orders.actions.confirm_refund_desc"),
        confirmColor: "error"
      });
      if (!confirmed) return;
      isActionWorking.value = true;
      try {
        try {
          await putOrder(order.id, { payStatus: "refunded" });
        } catch (e) {
          if (((_b = (_a = e == null ? void 0 : e.data) == null ? void 0 : _a.data) == null ? void 0 : _b.code) !== "SUBSCRIPTION_REFUND_IMPACT") throw e;
          if (!await confirm({ title: t("admin.common.warning"), description: e.data.message })) return;
          await putOrder(order.id, { payStatus: "refunded", confirmSubscriptionImpact: true });
        }
        toast.add({
          title: t("admin.orders.toast.success"),
          description: t("admin.orders.toast.order_updated"),
          color: "success"
        });
        await refresh();
        if (((_c = selectedOrder.value) == null ? void 0 : _c.id) === order.id) {
          await fetchFullOrderDetail(order.id);
        }
      } catch (e) {
        toast.add({
          title: t("admin.orders.toast.error"),
          description: ((_d = e.data) == null ? void 0 : _d.message) || t("admin.orders.toast.update_failed"),
          color: "error"
        });
      } finally {
        isActionWorking.value = false;
      }
    };
    const cancelOrder = async (order) => {
      var _a, _b;
      const confirmed = await confirm({
        title: t("admin.orders.actions.confirm_cancel_title"),
        description: t("admin.orders.actions.confirm_cancel_desc"),
        confirmColor: "neutral"
      });
      if (!confirmed) return;
      isActionWorking.value = true;
      try {
        await putOrder(order.id, { payStatus: "cancelled" });
        toast.add({
          title: t("admin.orders.toast.success"),
          description: t("admin.orders.toast.order_updated"),
          color: "success"
        });
        await refresh();
        if (((_a = selectedOrder.value) == null ? void 0 : _a.id) === order.id) {
          await fetchFullOrderDetail(order.id);
        }
      } catch (e) {
        toast.add({
          title: t("admin.orders.toast.error"),
          description: ((_b = e.data) == null ? void 0 : _b.message) || t("admin.orders.toast.update_failed"),
          color: "error"
        });
      } finally {
        isActionWorking.value = false;
      }
    };
    const paginatedOrders = computed(() => {
      return orders.value;
    });
    const getPayStatusColor = (payStatus) => {
      switch (payStatus) {
        case "pending":
          return "warning";
        case "paid":
          return "success";
        case "failed":
        case "deleted":
        case "expired":
          return "error";
        case "refunded":
        case "cancelled":
        case "closed":
          return "info";
        default:
          return "neutral";
      }
    };
    const getStatusColor = (status) => {
      switch (status) {
        case "processing":
        case "active":
          return "warning";
        case "delivered":
        case "completed":
          return "success";
        case "expired":
        case "failed":
        case "deleted":
          return "error";
        case "cancelled":
          return "info";
        default:
          return "neutral";
      }
    };
    const copyVisitorId = (id) => {
      if (!id) return;
      (void 0).clipboard.writeText(id);
      toast.add({
        title: t("admin.orders.toast.copied"),
        description: t("admin.orders.toast.visitor_id_copied"),
        color: "success"
      });
    };
    const copyToClipboard = (text, label) => {
      if (!text) return;
      (void 0).clipboard.writeText(text);
      toast.add({
        title: t("admin.orders.toast.copied"),
        description: t("admin.orders.toast.copied_to_clipboard", { label }),
        color: "success"
      });
    };
    const getFrontendPaymentPath = (orderId) => `/payment/${orderId || ""}`;
    const getFrontendPaymentUrl = (orderId) => `${frontendOrigin.value}${getFrontendPaymentPath(orderId)}`;
    const copyFrontendPaymentUrl = (orderId) => {
      if (!orderId) return;
      (void 0).clipboard.writeText(getFrontendPaymentUrl(orderId));
      toast.add({
        title: t("admin.orders.toast.copied"),
        description: t("admin.orders.toast.payment_link_copied"),
        color: "success"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$I;
      const _component_UButton = _sfc_main$D;
      const _component_USelect = _sfc_main$j;
      const _component_UInput = _sfc_main$k;
      const _component_UTable = _sfc_main$h;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_UBadge = _sfc_main$z;
      const _component_UPagination = _sfc_main$n;
      const _component_FullScreenModal = __nuxt_component_7;
      const _component_UFormField = _sfc_main$l;
      const _component_UTextarea = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh-7rem)] flex flex-col" }, _attrs))}><div class="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-4 shrink-0"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(activeTab.value === "topups" ? _ctx.$t("admin.topups.title", "\u5145\u503C\u8BB0\u5F55") : _ctx.$t("admin.orders.title", "\u8BA2\u5355\u7BA1\u7406"))}</h1></div><div class="flex items-center gap-2 bg-gray-100 dark:bg-white/5 p-1 rounded-xl shrink-0"><button type="button" class="${ssrRenderClass([activeTab.value === "orders" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shopping-cart-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("admin.orders.tab_orders", "\u5546\u54C1\u8BA2\u5355"))}</span></button><button type="button" class="${ssrRenderClass([activeTab.value === "topups" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:wallet-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("admin.orders.tab_topups", "\u5145\u503C\u8BB0\u5F55"))}</span></button></div></div>`);
      if (activeTab.value === "topups") {
        _push(ssrRenderComponent(AdminTopupRecordsPanel, null, null, _parent));
      } else {
        _push(`<!--[--><div class="mb-3 flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0"><div class="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1 md:pb-0"><!--[-->`);
        ssrRenderList(payStatusPills.value, (pill) => {
          _push(`<button type="button" class="${ssrRenderClass([activePayStatus.value === pill.value ? "bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 ring-1 ring-primary-500/30 font-semibold shadow-xs" : "bg-white dark:bg-[#121214] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200/70 dark:border-gray-800/70 hover:border-gray-300 dark:hover:border-gray-700", "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all shrink-0 cursor-pointer select-none"])}">`);
          if (pill.dotColor) {
            _push(`<span class="${ssrRenderClass([pill.dotColor, "w-1.5 h-1.5 rounded-full shrink-0"])}"></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span>${ssrInterpolate(pill.label)}</span>`);
          if (pill.count !== void 0) {
            _push(`<span class="${ssrRenderClass([activePayStatus.value === pill.value ? "bg-primary-100 dark:bg-primary-900/60 text-primary-700 dark:text-primary-300 font-bold" : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400", "px-1.5 py-0.5 rounded-full text-[10px] font-mono leading-none"])}">${ssrInterpolate(pill.count)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        });
        _push(`<!--]--><div class="h-4 w-px bg-gray-200 dark:bg-gray-800 mx-1 shrink-0"></div><button type="button" class="${ssrRenderClass([activePayStatus.value === "deleted" ? "bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 ring-1 ring-red-500/30 font-semibold shadow-xs" : "bg-white dark:bg-[#121214] text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 border border-gray-200/70 dark:border-gray-800/70 hover:border-gray-300 dark:hover:border-gray-700", "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all shrink-0 cursor-pointer select-none"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:trash",
          class: ["w-3.5 h-3.5 shrink-0", activePayStatus.value === "deleted" ? "text-red-500" : "text-gray-400"]
        }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("admin.orders.pay_status_deleted"))}</span><span class="${ssrRenderClass([activePayStatus.value === "deleted" ? "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 font-bold" : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400", "px-1.5 py-0.5 rounded-full text-[10px] font-mono leading-none"])}">${ssrInterpolate(stats.value.deleted)}</span></button></div><div class="flex items-center gap-2 shrink-0">`);
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "outline",
          icon: "ph:arrows-clockwise",
          size: "sm",
          loading: unref(pending),
          class: "hover:bg-gray-50 dark:hover:bg-gray-800",
          onClick: () => unref(refresh)()
        }, null, _parent));
        if (unref(hasAdminPerm)("orders:edit")) {
          _push(ssrRenderComponent(_component_UButton, {
            color: "primary",
            icon: "ph:plus-bold",
            size: "sm",
            class: "shadow-xs font-medium",
            onClick: ($event) => isManualOrderOpen.value = true
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("admin.orders.createOrder"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.orders.createOrder")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="mb-3 flex flex-wrap items-center justify-between gap-3 shrink-0"><div class="flex items-center gap-2.5">`);
        _push(ssrRenderComponent(_component_USelect, {
          modelValue: activeFulfillmentStatus.value,
          "onUpdate:modelValue": [($event) => activeFulfillmentStatus.value = $event, () => {
            page.value = 1;
          }],
          items: fulfillmentFilterOptions.value,
          class: "w-36 text-xs shrink-0",
          size: "sm"
        }, null, _parent));
        _push(`<div class="relative w-64">`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: searchInput.value,
          "onUpdate:modelValue": ($event) => searchInput.value = $event,
          icon: "ph:magnifying-glass",
          placeholder: _ctx.$t("admin.orders.search", "\u641C\u7D22\u5355\u53F7\u3001\u90AE\u7BB1\u3001\u5546\u54C1..."),
          size: "sm",
          class: "w-full text-xs"
        }, createSlots({ _: 2 }, [
          searchInput.value ? {
            name: "trailing",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<button type="button" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:x-circle-fill",
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
                _push2(`</button>`);
              } else {
                return [
                  createVNode("button", {
                    type: "button",
                    class: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer",
                    onClick: ($event) => searchInput.value = ""
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:x-circle-fill",
                      class: "w-3.5 h-3.5"
                    })
                  ], 8, ["onClick"])
                ];
              }
            }),
            key: "0"
          } : void 0
        ]), _parent));
        _push(`</div>`);
        if (isFiltered.value) {
          _push(ssrRenderComponent(_component_UButton, {
            color: "neutral",
            variant: "ghost",
            size: "sm",
            icon: "ph:arrow-counter-clockwise",
            title: _ctx.$t("admin.orders.reset_filters"),
            onClick: resetFilters
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 rounded-2xl shadow-xs overflow-hidden flex flex-col flex-1 min-h-0"><div class="flex-1 overflow-auto custom-scrollbar">`);
        _push(ssrRenderComponent(_component_UTable, {
          columns: columns.value,
          data: paginatedOrders.value,
          loading: unref(pending),
          sticky: "",
          class: "min-w-full"
        }, {
          "id-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col min-w-[160px] py-0.5"${_scopeId}><span class="text-sm font-mono font-medium text-gray-900 dark:text-white cursor-pointer hover:text-primary-500 transition-colors flex items-center gap-1.5"${ssrRenderAttr("title", row.original.id)}${_scopeId}>${ssrInterpolate(row.original.id)} `);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:copy-simple",
                class: "w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100 hover:text-primary-500 transition-opacity"
              }, null, _parent2, _scopeId));
              _push2(`</span>`);
              if (row.original.payMethod || row.original.tradeNo) {
                _push2(`<div class="flex items-center gap-1.5 mt-1 text-xs text-gray-500"${_scopeId}>`);
                if (row.original.payMethod) {
                  _push2(`<span class="capitalize px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800/80 rounded text-[10px] font-medium text-gray-600 dark:text-gray-300"${_scopeId}>${ssrInterpolate(row.original.payMethod)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (row.original.tradeNo) {
                  _push2(`<!--[--><span class="text-gray-400"${_scopeId}>\u2022</span>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:receipt",
                    class: "w-3.5 h-3.5 text-gray-400 shrink-0"
                  }, null, _parent2, _scopeId));
                  _push2(`<span class="font-mono text-[11px] truncate max-w-[120px] cursor-pointer hover:text-primary-500 transition-colors"${ssrRenderAttr("title", _ctx.$t("admin.orders.modal.trade_no") + ": " + row.original.tradeNo)}${_scopeId}>${ssrInterpolate(row.original.tradeNo)}</span><!--]-->`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col min-w-[160px] py-0.5" }, [
                  createVNode("span", {
                    class: "text-sm font-mono font-medium text-gray-900 dark:text-white cursor-pointer hover:text-primary-500 transition-colors flex items-center gap-1.5",
                    title: row.original.id,
                    onClick: ($event) => copyToClipboard(row.original.id, unref(t)("admin.orders.modal.order_id"))
                  }, [
                    createTextVNode(toDisplayString(row.original.id) + " ", 1),
                    createVNode(_component_UIcon, {
                      name: "ph:copy-simple",
                      class: "w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100 hover:text-primary-500 transition-opacity"
                    })
                  ], 8, ["title", "onClick"]),
                  row.original.payMethod || row.original.tradeNo ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex items-center gap-1.5 mt-1 text-xs text-gray-500"
                  }, [
                    row.original.payMethod ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "capitalize px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800/80 rounded text-[10px] font-medium text-gray-600 dark:text-gray-300"
                    }, toDisplayString(row.original.payMethod), 1)) : createCommentVNode("", true),
                    row.original.tradeNo ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode("span", { class: "text-gray-400" }, "\u2022"),
                      createVNode(_component_UIcon, {
                        name: "ph:receipt",
                        class: "w-3.5 h-3.5 text-gray-400 shrink-0"
                      }),
                      createVNode("span", {
                        class: "font-mono text-[11px] truncate max-w-[120px] cursor-pointer hover:text-primary-500 transition-colors",
                        title: _ctx.$t("admin.orders.modal.trade_no") + ": " + row.original.tradeNo,
                        onClick: ($event) => copyToClipboard(row.original.tradeNo, unref(t)("admin.orders.modal.trade_no"))
                      }, toDisplayString(row.original.tradeNo), 9, ["title", "onClick"])
                    ], 64)) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          "productName-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-3 py-0.5"${_scopeId}><div class="w-10 h-10 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0 flex items-center justify-center border border-gray-200/80 dark:border-gray-800 shadow-2xs"${_scopeId}>`);
              if (row.original.productImage) {
                _push2(`<img${ssrRenderAttr("src", unref(buildImageProxyUrl)(row.original.productImage))}${ssrRenderAttr("alt", row.original.productName || "")} class="w-full h-full object-cover"${_scopeId}>`);
              } else {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:package",
                  class: "text-gray-400 w-5 h-5"
                }, null, _parent2, _scopeId));
              }
              _push2(`</div><div class="flex flex-col min-w-0"${_scopeId}>`);
              if (row.original.productId) {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: `/products/${row.original.productSlug || row.original.productId}`,
                  target: "_blank",
                  class: "text-sm font-medium text-gray-900 dark:text-white hover:text-primary-500 hover:underline truncate",
                  title: row.original.productName || void 0
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(row.original.productName)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(row.original.productName), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<span class="text-sm font-medium text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(row.original.productName || _ctx.$t("admin.orders.unknown_product"))}</span>`);
              }
              _push2(`<div class="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400"${_scopeId}>`);
              if (row.original.productType) {
                _push2(`<span class="capitalize px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-mono"${_scopeId}>${ssrInterpolate(row.original.productType)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="text-emerald-500 font-semibold font-mono"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(row.original.amount, row.original.currency))}</span></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-3 py-0.5" }, [
                  createVNode("div", { class: "w-10 h-10 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0 flex items-center justify-center border border-gray-200/80 dark:border-gray-800 shadow-2xs" }, [
                    row.original.productImage ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: unref(buildImageProxyUrl)(row.original.productImage),
                      alt: row.original.productName || "",
                      class: "w-full h-full object-cover"
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock(_component_UIcon, {
                      key: 1,
                      name: "ph:package",
                      class: "text-gray-400 w-5 h-5"
                    }))
                  ]),
                  createVNode("div", { class: "flex flex-col min-w-0" }, [
                    row.original.productId ? (openBlock(), createBlock(_component_NuxtLink, {
                      key: 0,
                      to: `/products/${row.original.productSlug || row.original.productId}`,
                      target: "_blank",
                      class: "text-sm font-medium text-gray-900 dark:text-white hover:text-primary-500 hover:underline truncate",
                      title: row.original.productName || void 0
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.original.productName), 1)
                      ]),
                      _: 2
                    }, 1032, ["to", "title"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm font-medium text-gray-900 dark:text-white truncate"
                    }, toDisplayString(row.original.productName || _ctx.$t("admin.orders.unknown_product")), 1)),
                    createVNode("div", { class: "flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400" }, [
                      row.original.productType ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "capitalize px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-mono"
                      }, toDisplayString(row.original.productType), 1)) : createCommentVNode("", true),
                      createVNode("span", { class: "text-emerald-500 font-semibold font-mono" }, toDisplayString(unref(formatCurrencyAmount)(row.original.amount, row.original.currency)), 1)
                    ])
                  ])
                ])
              ];
            }
          }),
          "user-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col py-0.5"${_scopeId}>`);
              if (row.original.userEmail || row.original.userId) {
                _push2(`<!--[--><span class="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:user-circle-fill",
                  class: "w-4 h-4 text-purple-500 shrink-0"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(row.original.userNickname || String(row.original.userEmail || "").split("@")[0])}</span><span class="text-xs text-gray-500 mt-0.5 font-mono"${_scopeId}>${ssrInterpolate(row.original.userEmail || row.original.contactEmail)}</span><!--]-->`);
              } else {
                _push2(`<!--[--><span class="text-sm text-gray-700 dark:text-gray-300 font-mono"${_scopeId}>${ssrInterpolate(row.original.contactEmail || _ctx.$t("admin.orders.na"))}</span><div class="flex items-center gap-1.5 mt-0.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:ghost",
                  class: "w-3.5 h-3.5 text-gray-400 shrink-0"
                }, null, _parent2, _scopeId));
                if (row.original.visitorId) {
                  _push2(`<span class="text-xs text-gray-500 font-mono cursor-pointer hover:text-primary-500 transition-colors"${ssrRenderAttr("title", String(row.original.visitorId))}${_scopeId}>${ssrInterpolate(String(row.original.visitorId).substring(0, 8))}... </span>`);
                } else {
                  _push2(`<span class="text-xs text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.no_visitor_id"))}</span>`);
                }
                _push2(`</div><!--]-->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col py-0.5" }, [
                  row.original.userEmail || row.original.userId ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("span", { class: "text-sm font-medium text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:user-circle-fill",
                        class: "w-4 h-4 text-purple-500 shrink-0"
                      }),
                      createTextVNode(" " + toDisplayString(row.original.userNickname || String(row.original.userEmail || "").split("@")[0]), 1)
                    ]),
                    createVNode("span", { class: "text-xs text-gray-500 mt-0.5 font-mono" }, toDisplayString(row.original.userEmail || row.original.contactEmail), 1)
                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode("span", { class: "text-sm text-gray-700 dark:text-gray-300 font-mono" }, toDisplayString(row.original.contactEmail || _ctx.$t("admin.orders.na")), 1),
                    createVNode("div", { class: "flex items-center gap-1.5 mt-0.5" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:ghost",
                        class: "w-3.5 h-3.5 text-gray-400 shrink-0"
                      }),
                      row.original.visitorId ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs text-gray-500 font-mono cursor-pointer hover:text-primary-500 transition-colors",
                        title: String(row.original.visitorId),
                        onClick: ($event) => copyVisitorId(String(row.original.visitorId))
                      }, toDisplayString(String(row.original.visitorId).substring(0, 8)) + "... ", 9, ["title", "onClick"])) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: "text-xs text-gray-400"
                      }, toDisplayString(_ctx.$t("admin.orders.no_visitor_id")), 1))
                    ])
                  ], 64))
                ])
              ];
            }
          }),
          "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-end gap-2 py-0.5"${_scopeId}><div class="flex flex-col items-end"${_scopeId}><span class="text-xs text-gray-400 dark:text-gray-500 mb-1 font-mono"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span><div class="flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: getPayStatusColor(String(row.original.payStatus || "pending")),
                variant: "subtle",
                class: "capitalize whitespace-nowrap text-[11px] px-2 py-0.5 font-medium",
                title: _ctx.$t("admin.orders.payment_label") + ": " + (row.original.payStatus || "pending")
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(getPayStatusLabel(row.original.payStatus))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(getPayStatusLabel(row.original.payStatus)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UBadge, {
                color: getStatusColor(String(row.original.status || "none")),
                variant: "subtle",
                class: "capitalize whitespace-nowrap text-[11px] px-2 py-0.5 font-medium",
                title: _ctx.$t("admin.orders.fulfillment_label") + ": " + (row.original.status || "none")
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(getStatusLabel(row.original.status))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(getStatusLabel(row.original.status)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="flex items-center gap-1 pl-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:eye",
                size: "sm",
                class: "hover:bg-gray-100 dark:hover:bg-gray-800",
                title: _ctx.$t("admin.orders.modal.title"),
                onClick: ($event) => viewDetails(row.original)
              }, null, _parent2, _scopeId));
              if (activePayStatus.value === "deleted") {
                _push2(`<!--[-->`);
                if (unref(hasAdminPerm)("orders:edit")) {
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "success",
                    variant: "ghost",
                    icon: "ph:arrow-u-up-left",
                    size: "sm",
                    loading: actionLoadingId.value === row.original.id,
                    title: _ctx.$t("admin.orders.actions.restore"),
                    onClick: ($event) => restoreOrder(row.original)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (unref(hasAdminPerm)("orders:edit")) {
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "error",
                    variant: "ghost",
                    icon: "ph:trash-simple-bold",
                    size: "sm",
                    loading: actionLoadingId.value === row.original.id,
                    disabled: row.original.payStatus === "paid",
                    title: row.original.payStatus === "paid" ? "\u5DF2\u652F\u4ED8\u8BA2\u5355\u4E0D\u53EF\u5F7B\u5E95\u5220\u9664" : _ctx.$t("admin.orders.actions.hard_delete"),
                    onClick: ($event) => hardDeleteOrder(row.original)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<!--[-->`);
                if (unref(hasAdminPerm)("orders:edit")) {
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:arrows-clockwise",
                    size: "sm",
                    loading: reconcileLoadingId.value === row.original.id,
                    title: _ctx.$t("admin.orders.actions.reconcile_tip"),
                    onClick: ($event) => reconcileOrder(row.original)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (unref(hasAdminPerm)("orders:edit")) {
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "error",
                    variant: "ghost",
                    icon: "ph:trash",
                    size: "sm",
                    loading: actionLoadingId.value === row.original.id,
                    title: _ctx.$t("admin.orders.actions.trash"),
                    onClick: ($event) => trashOrder(row.original)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              }
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-end gap-2 py-0.5" }, [
                  createVNode("div", { class: "flex flex-col items-end" }, [
                    createVNode("span", { class: "text-xs text-gray-400 dark:text-gray-500 mb-1 font-mono" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1),
                    createVNode("div", { class: "flex items-center gap-1.5" }, [
                      createVNode(_component_UBadge, {
                        color: getPayStatusColor(String(row.original.payStatus || "pending")),
                        variant: "subtle",
                        class: "capitalize whitespace-nowrap text-[11px] px-2 py-0.5 font-medium",
                        title: _ctx.$t("admin.orders.payment_label") + ": " + (row.original.payStatus || "pending")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(getPayStatusLabel(row.original.payStatus)), 1)
                        ]),
                        _: 2
                      }, 1032, ["color", "title"]),
                      createVNode(_component_UBadge, {
                        color: getStatusColor(String(row.original.status || "none")),
                        variant: "subtle",
                        class: "capitalize whitespace-nowrap text-[11px] px-2 py-0.5 font-medium",
                        title: _ctx.$t("admin.orders.fulfillment_label") + ": " + (row.original.status || "none")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(getStatusLabel(row.original.status)), 1)
                        ]),
                        _: 2
                      }, 1032, ["color", "title"])
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center gap-1 pl-1" }, [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "ph:eye",
                      size: "sm",
                      class: "hover:bg-gray-100 dark:hover:bg-gray-800",
                      title: _ctx.$t("admin.orders.modal.title"),
                      onClick: ($event) => viewDetails(row.original)
                    }, null, 8, ["title", "onClick"]),
                    activePayStatus.value === "deleted" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      unref(hasAdminPerm)("orders:edit") ? (openBlock(), createBlock(_component_UButton, {
                        key: 0,
                        color: "success",
                        variant: "ghost",
                        icon: "ph:arrow-u-up-left",
                        size: "sm",
                        loading: actionLoadingId.value === row.original.id,
                        title: _ctx.$t("admin.orders.actions.restore"),
                        onClick: ($event) => restoreOrder(row.original)
                      }, null, 8, ["loading", "title", "onClick"])) : createCommentVNode("", true),
                      unref(hasAdminPerm)("orders:edit") ? (openBlock(), createBlock(_component_UButton, {
                        key: 1,
                        color: "error",
                        variant: "ghost",
                        icon: "ph:trash-simple-bold",
                        size: "sm",
                        loading: actionLoadingId.value === row.original.id,
                        disabled: row.original.payStatus === "paid",
                        title: row.original.payStatus === "paid" ? "\u5DF2\u652F\u4ED8\u8BA2\u5355\u4E0D\u53EF\u5F7B\u5E95\u5220\u9664" : _ctx.$t("admin.orders.actions.hard_delete"),
                        onClick: ($event) => hardDeleteOrder(row.original)
                      }, null, 8, ["loading", "disabled", "title", "onClick"])) : createCommentVNode("", true)
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      unref(hasAdminPerm)("orders:edit") ? (openBlock(), createBlock(_component_UButton, {
                        key: 0,
                        color: "neutral",
                        variant: "ghost",
                        icon: "ph:arrows-clockwise",
                        size: "sm",
                        loading: reconcileLoadingId.value === row.original.id,
                        title: _ctx.$t("admin.orders.actions.reconcile_tip"),
                        onClick: ($event) => reconcileOrder(row.original)
                      }, null, 8, ["loading", "title", "onClick"])) : createCommentVNode("", true),
                      unref(hasAdminPerm)("orders:edit") ? (openBlock(), createBlock(_component_UButton, {
                        key: 1,
                        color: "error",
                        variant: "ghost",
                        icon: "ph:trash",
                        size: "sm",
                        loading: actionLoadingId.value === row.original.id,
                        title: _ctx.$t("admin.orders.actions.trash"),
                        onClick: ($event) => trashOrder(row.original)
                      }, null, 8, ["loading", "title", "onClick"])) : createCommentVNode("", true)
                    ], 64))
                  ])
                ])
              ];
            }
          }),
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col items-center justify-center py-16 text-center px-4"${_scopeId}><div class="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:shopping-bag-open",
                class: "w-6 h-6"
              }, null, _parent2, _scopeId));
              _push2(`</div><p class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(isFiltered.value ? _ctx.$t("admin.orders.no_orders_found") : _ctx.$t("admin.common.noData"))}</p>`);
              if (isFiltered.value) {
                _push2(`<p class="text-xs text-gray-500 mt-1 max-w-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.clear_filters"))}</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (isFiltered.value) {
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "primary",
                  variant: "soft",
                  size: "xs",
                  class: "mt-3",
                  icon: "ph:arrow-counter-clockwise",
                  onClick: resetFilters
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("admin.orders.reset_filters"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("admin.orders.reset_filters")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col items-center justify-center py-16 text-center px-4" }, [
                  createVNode("div", { class: "w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-3" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:shopping-bag-open",
                      class: "w-6 h-6"
                    })
                  ]),
                  createVNode("p", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(isFiltered.value ? _ctx.$t("admin.orders.no_orders_found") : _ctx.$t("admin.common.noData")), 1),
                  isFiltered.value ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-xs text-gray-500 mt-1 max-w-sm"
                  }, toDisplayString(_ctx.$t("admin.orders.clear_filters")), 1)) : createCommentVNode("", true),
                  isFiltered.value ? (openBlock(), createBlock(_component_UButton, {
                    key: 1,
                    color: "primary",
                    variant: "soft",
                    size: "xs",
                    class: "mt-3",
                    icon: "ph:arrow-counter-clockwise",
                    onClick: resetFilters
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.orders.reset_filters")), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          loading: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-center py-16 text-center px-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:spinner-gap-bold",
                class: "w-6 h-6 animate-spin text-primary-500"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-center py-16 text-center px-4" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:spinner-gap-bold",
                    class: "w-6 h-6 animate-spin text-primary-500"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="p-4 border-t border-gray-200/80 dark:border-gray-800/60 flex flex-col sm:flex-row justify-between items-center gap-3 shrink-0 bg-white dark:bg-[#121214] rounded-b-2xl"><div class="text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.common.showing"))} <span class="text-gray-900 dark:text-white font-medium">${ssrInterpolate(totalItems.value > 0 ? Math.min(totalItems.value, (unref(page) - 1) * unref(pageCount) + 1) : 0)}</span> ${ssrInterpolate(_ctx.$t("admin.common.to"))} <span class="text-gray-900 dark:text-white font-medium">${ssrInterpolate(Math.min(unref(page) * unref(pageCount), totalItems.value))}</span> ${ssrInterpolate(_ctx.$t("admin.common.of"))} <span class="text-gray-900 dark:text-white font-medium">${ssrInterpolate(totalItems.value)}</span> ${ssrInterpolate(_ctx.$t("admin.common.results"))}</div>`);
        _push(ssrRenderComponent(_component_UPagination, {
          modelValue: unref(page),
          "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
          total: totalItems.value,
          "items-per-page": unref(pageCount),
          "onUpdate:page": (val) => unref(onPageChange)(val, () => unref(refresh)())
        }, null, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(_component_FullScreenModal, {
          modelValue: isModalOpen.value,
          "onUpdate:modelValue": ($event) => isModalOpen.value = $event,
          maxWidth: "sm:max-w-4xl",
          title: _ctx.$t("admin.orders.modal.title")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (selectedOrder.value) {
                _push2(`<div class="space-y-5 p-6"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-gray-200/80 dark:border-gray-800 rounded-2xl bg-gray-50/70 dark:bg-black/20"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="p-2.5 rounded-xl bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 shrink-0"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:receipt-bold",
                  class: "w-6 h-6"
                }, null, _parent2, _scopeId));
                _push2(`</div><div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-base font-mono font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(selectedOrder.value.id)}</span>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:copy-simple",
                  size: "xs",
                  onClick: ($event) => copyToClipboard(selectedOrder.value.id, unref(t)("admin.orders.modal.order_id"))
                }, null, _parent2, _scopeId));
                if (selectedOrder.value.source) {
                  _push2(ssrRenderComponent(_component_UBadge, {
                    variant: "subtle",
                    color: "neutral",
                    size: "sm",
                    class: "font-mono text-[10px]"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(selectedOrder.value.source)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(selectedOrder.value.source), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="flex flex-wrap items-center gap-2 mt-1 text-xs text-gray-500"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.modal.created_at"))}: ${ssrInterpolate(unref(formatDateTime)(selectedOrder.value.createdAt))}</span>`);
                if (selectedOrder.value.paidAt) {
                  _push2(`<span class="text-emerald-600 dark:text-emerald-400"${_scopeId}>\u2022 ${ssrInterpolate(_ctx.$t("admin.orders.modal.paid_at"))}: ${ssrInterpolate(unref(formatDateTime)(selectedOrder.value.paidAt))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div></div><div class="flex flex-wrap items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: getPayStatusColor(selectedOrder.value.payStatus),
                  variant: "subtle",
                  size: "md",
                  class: "capitalize font-medium px-2.5 py-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("admin.orders.payment_label"))}: ${ssrInterpolate(getPayStatusLabel(selectedOrder.value.payStatus))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("admin.orders.payment_label")) + ": " + toDisplayString(getPayStatusLabel(selectedOrder.value.payStatus)), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: getStatusColor(selectedOrder.value.status),
                  variant: "subtle",
                  size: "md",
                  class: "capitalize font-medium px-2.5 py-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("admin.orders.fulfillment_label"))}: ${ssrInterpolate(getStatusLabel(selectedOrder.value.status))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("admin.orders.fulfillment_label")) + ": " + toDisplayString(getStatusLabel(selectedOrder.value.status)), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
                if (unref(hasAdminPerm)("orders:edit")) {
                  _push2(`<div class="flex flex-wrap items-center justify-between gap-2 p-3 bg-gray-50 dark:bg-[#161618] rounded-xl border border-gray-200 dark:border-gray-800"${_scopeId}><span class="text-xs font-medium text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.common.actions"))}\uFF1A</span><div class="flex flex-wrap items-center gap-2"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    size: "xs",
                    icon: "ph:arrows-clockwise",
                    loading: isReconciling.value,
                    onClick: ($event) => reconcileOrder(selectedOrder.value)
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(_ctx.$t("admin.orders.actions.reconcile"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("admin.orders.actions.reconcile")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  if (selectedOrder.value.payStatus === "pending") {
                    _push2(ssrRenderComponent(_component_UButton, {
                      color: "success",
                      variant: "soft",
                      size: "xs",
                      icon: "ph:check-circle",
                      loading: isActionWorking.value,
                      onClick: ($event) => markOrderPaid(selectedOrder.value)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(_ctx.$t("admin.orders.actions.mark_paid"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("admin.orders.actions.mark_paid")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (selectedOrder.value.payStatus === "pending") {
                    _push2(ssrRenderComponent(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      size: "xs",
                      icon: "ph:x-circle",
                      loading: isActionWorking.value,
                      onClick: ($event) => cancelOrder(selectedOrder.value)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(_ctx.$t("admin.orders.actions.cancel"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("admin.orders.actions.cancel")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (selectedOrder.value.payStatus === "paid") {
                    _push2(ssrRenderComponent(_component_UButton, {
                      color: "primary",
                      variant: "soft",
                      size: "xs",
                      icon: "ph:paper-plane-tilt",
                      loading: isFulfilling.value,
                      onClick: ($event) => fulfillOrderAction(selectedOrder.value)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(_ctx.$t("admin.orders.actions.fulfill"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("admin.orders.actions.fulfill")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (selectedOrder.value.payStatus === "paid") {
                    _push2(ssrRenderComponent(_component_UButton, {
                      color: "error",
                      variant: "outline",
                      size: "xs",
                      icon: "ph:arrow-counter-clockwise",
                      loading: isActionWorking.value,
                      onClick: ($event) => refundOrder(selectedOrder.value)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(_ctx.$t("admin.orders.actions.refund"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("admin.orders.actions.refund")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (selectedOrder.value.status === "deleted" || selectedOrder.value.payStatus === "deleted") {
                    _push2(ssrRenderComponent(_component_UButton, {
                      color: "success",
                      variant: "outline",
                      size: "xs",
                      icon: "ph:arrow-u-up-left",
                      loading: isActionWorking.value,
                      onClick: ($event) => restoreOrder(selectedOrder.value)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(_ctx.$t("admin.orders.actions.restore"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("admin.orders.actions.restore")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                  } else {
                    _push2(ssrRenderComponent(_component_UButton, {
                      color: "error",
                      variant: "ghost",
                      size: "xs",
                      icon: "ph:trash",
                      loading: isActionWorking.value,
                      onClick: ($event) => trashOrder(selectedOrder.value)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(_ctx.$t("admin.orders.actions.trash"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("admin.orders.actions.trash")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                  }
                  _push2(`</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><div class="p-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#161618] flex flex-col justify-between"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between mb-3"${_scopeId}><h4 class="text-xs font-semibold text-gray-500 uppercase tracking-wider"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.modal.product_info"))}</h4>`);
                if (selectedOrder.value.productType) {
                  _push2(ssrRenderComponent(_component_UBadge, {
                    variant: "subtle",
                    color: "neutral",
                    size: "xs",
                    class: "font-mono uppercase"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(selectedOrder.value.productType)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(selectedOrder.value.productType), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="flex items-center gap-3"${_scopeId}><div class="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0 border border-gray-200 dark:border-gray-800 flex items-center justify-center"${_scopeId}>`);
                if (selectedOrder.value.productImage) {
                  _push2(`<img${ssrRenderAttr("src", unref(buildImageProxyUrl)(selectedOrder.value.productImage))}${ssrRenderAttr("alt", selectedOrder.value.productName || "")} class="w-full h-full object-cover"${_scopeId}>`);
                } else {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:package",
                    class: "w-6 h-6 text-gray-400"
                  }, null, _parent2, _scopeId));
                }
                _push2(`</div><div class="min-w-0 flex-1"${_scopeId}>`);
                if (selectedOrder.value.productId) {
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: `/products/${selectedOrder.value.productSlug || selectedOrder.value.productId}`,
                    target: "_blank",
                    class: "text-sm font-semibold text-gray-900 dark:text-white hover:text-primary-500 hover:underline line-clamp-1"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(selectedOrder.value.productName)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(selectedOrder.value.productName), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<p class="text-sm font-semibold text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(selectedOrder.value.productName || _ctx.$t("admin.orders.unknown_product"))}</p>`);
                }
                _push2(`<div class="flex items-center gap-3 mt-1 text-xs text-gray-500"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.modal.quantity"))}: <strong class="text-gray-900 dark:text-white font-mono"${_scopeId}>${ssrInterpolate(getOrderQuantity(selectedOrder.value))}</strong></span></div></div></div></div><div class="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between"${_scopeId}><span class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.modal.amount"))}</span><span class="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(selectedOrder.value.amount, selectedOrder.value.currency))}</span></div></div><div class="p-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#161618] flex flex-col justify-between"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between mb-3"${_scopeId}><h4 class="text-xs font-semibold text-gray-500 uppercase tracking-wider"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.modal.customer_info"))}</h4>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: selectedOrder.value.userId ? "primary" : "neutral",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(selectedOrder.value.userId ? _ctx.$t("admin.orders.modal.buyer_type_registered") : _ctx.$t("admin.orders.modal.buyer_type_guest"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(selectedOrder.value.userId ? _ctx.$t("admin.orders.modal.buyer_type_registered") : _ctx.$t("admin.orders.modal.buyer_type_guest")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
                if (selectedOrder.value.userId || selectedOrder.value.userEmail) {
                  _push2(`<div class="space-y-1.5"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:user-circle-fill",
                    class: "w-4 h-4 text-purple-500"
                  }, null, _parent2, _scopeId));
                  _push2(`<span class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(selectedOrder.value.userNickname || String(selectedOrder.value.userEmail || "").split("@")[0])}</span>`);
                  if (selectedOrder.value.userId) {
                    _push2(`<span class="text-xs font-mono text-gray-400"${_scopeId}>#${ssrInterpolate(selectedOrder.value.userId)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="text-xs text-gray-500 font-mono"${_scopeId}>${ssrInterpolate(selectedOrder.value.userEmail || selectedOrder.value.contactEmail)}</div></div>`);
                } else {
                  _push2(`<div class="space-y-1.5"${_scopeId}><div class="flex items-center gap-2 text-xs font-mono text-gray-700 dark:text-gray-300"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:envelope-simple",
                    class: "w-4 h-4 text-gray-400"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${ssrInterpolate(selectedOrder.value.contactEmail || _ctx.$t("admin.orders.na"))}</span></div>`);
                  if (selectedOrder.value.visitorId) {
                    _push2(`<div class="flex items-center gap-2 text-xs text-gray-500 font-mono"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "ph:ghost",
                      class: "w-4 h-4 text-gray-400"
                    }, null, _parent2, _scopeId));
                    _push2(`<span class="cursor-pointer hover:text-primary-500 transition-colors"${_scopeId}>${ssrInterpolate(selectedOrder.value.visitorId)}</span></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                }
                _push2(`</div><div class="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/80 space-y-1 text-xs"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.modal.payment_method"))}</span><span class="font-medium text-gray-900 dark:text-white capitalize"${_scopeId}>${ssrInterpolate(selectedOrder.value.payMethod || _ctx.$t("admin.orders.na"))}</span></div><div class="flex items-center justify-between"${_scopeId}><span class="text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.modal.trade_no"))}</span><span class="font-mono text-gray-900 dark:text-white truncate max-w-[200px]"${ssrRenderAttr("title", selectedOrder.value.tradeNo || "")}${_scopeId}>${ssrInterpolate(selectedOrder.value.tradeNo || _ctx.$t("admin.orders.na"))}</span></div></div></div></div>`);
                if (selectedOrder.value.payStatus === "pending") {
                  _push2(`<div class="p-4 border border-amber-500/30 rounded-xl bg-amber-50/40 dark:bg-amber-950/20"${_scopeId}><h3 class="text-xs font-semibold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-1.5"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:link",
                    class: "w-4 h-4"
                  }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(_ctx.$t("admin.orders.modal.payment_link_title"))}</h3><div class="space-y-3"${_scopeId}><div class="rounded-lg border border-amber-200 dark:border-amber-900/50 bg-white/80 dark:bg-black/40 px-3 py-2"${_scopeId}><p class="text-[10px] text-gray-500 dark:text-gray-400 mb-0.5"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.modal.payment_link"))}</p><p class="text-xs font-mono text-gray-900 dark:text-white break-all select-all"${_scopeId}>${ssrInterpolate(getFrontendPaymentUrl(selectedOrder.value.id))}</p></div><div class="flex flex-wrap gap-2"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    variant: "soft",
                    size: "xs",
                    icon: "ph:credit-card",
                    to: getFrontendPaymentPath(selectedOrder.value.id),
                    target: "_blank"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(_ctx.$t("admin.orders.modal.open_payment_page"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("admin.orders.modal.open_payment_page")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    size: "xs",
                    icon: "ph:copy",
                    onClick: ($event) => copyFrontendPaymentUrl(selectedOrder.value.id)
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(_ctx.$t("admin.orders.modal.copy_payment_link"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("admin.orders.modal.copy_payment_link")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</div></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="p-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#161618]"${_scopeId}><div class="flex items-center justify-between mb-2"${_scopeId}><h3 class="text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:key",
                  class: "w-4 h-4 text-primary-500"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(_ctx.$t("admin.orders.modal.delivery_content"))}</h3>`);
                if (selectedOrder.value.deliveryInfo) {
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    size: "xs",
                    icon: "ph:copy",
                    onClick: ($event) => copyToClipboard(selectedOrder.value.deliveryInfo, unref(t)("admin.orders.modal.delivery_content"))
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(_ctx.$t("admin.orders.actions.copy_delivery"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("admin.orders.actions.copy_delivery")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
                if (selectedOrder.value.deliveryInfo) {
                  _push2(`<div class="mb-3 p-3 rounded-lg bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-gray-800 text-xs font-mono text-gray-800 dark:text-gray-200 whitespace-pre-wrap select-all"${_scopeId}>${ssrInterpolate(selectedOrder.value.deliveryInfo)}</div>`);
                } else {
                  _push2(`<div class="mb-3 p-3 rounded-lg bg-gray-50/50 dark:bg-black/10 border border-dashed border-gray-200 dark:border-gray-800 text-xs text-gray-400 text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.modal.no_delivery_info"))}</div>`);
                }
                if (unref(hasAdminPerm)("orders:edit")) {
                  _push2(`<div${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UFormField, {
                    label: _ctx.$t("admin.orders.modal.delivery_info_edit")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_UTextarea, {
                          modelValue: editDeliveryInfo.value,
                          "onUpdate:modelValue": ($event) => editDeliveryInfo.value = $event,
                          rows: 2,
                          class: "text-gray-900 dark:text-white w-full text-xs font-mono",
                          placeholder: "\u4EBA\u5DE5\u5907\u6CE8\u3001\u5361\u5BC6\u6216\u8865\u53D1\u4FE1\u606F..."
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_UTextarea, {
                            modelValue: editDeliveryInfo.value,
                            "onUpdate:modelValue": ($event) => editDeliveryInfo.value = $event,
                            rows: 2,
                            class: "text-gray-900 dark:text-white w-full text-xs font-mono",
                            placeholder: "\u4EBA\u5DE5\u5907\u6CE8\u3001\u5361\u5BC6\u6216\u8865\u53D1\u4FE1\u606F..."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
                if (selectedOrder.value.metaData) {
                  _push2(`<div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#161618]"${_scopeId}><button type="button" class="w-full flex items-center justify-between p-4 text-xs font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition cursor-pointer"${_scopeId}><span class="flex items-center gap-1.5"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:code-bold",
                    class: "w-4 h-4 text-gray-400"
                  }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(_ctx.$t("admin.orders.modal.meta_data"))}</span>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:caret-down-bold",
                    class: ["w-3.5 h-3.5 text-gray-400 transition-transform", { "rotate-180": isMetaExpanded.value }]
                  }, null, _parent2, _scopeId));
                  _push2(`</button>`);
                  if (isMetaExpanded.value) {
                    _push2(`<div class="p-4 pt-0 border-t border-gray-100 dark:border-gray-800/80"${_scopeId}><div class="flex justify-end mb-2"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      size: "xs",
                      icon: "ph:copy",
                      onClick: ($event) => copyToClipboard(formatMetaData(selectedOrder.value.metaData), unref(t)("admin.orders.modal.meta_data"))
                    }, null, _parent2, _scopeId));
                    _push2(`</div><pre class="text-xs text-gray-700 dark:text-gray-300 overflow-auto whitespace-pre-wrap font-mono p-3 bg-gray-50 dark:bg-black/30 rounded-lg max-h-60"${_scopeId}>${ssrInterpolate(formatMetaData(selectedOrder.value.metaData))}</pre></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (unref(hasAdminPerm)("orders:edit")) {
                  _push2(`<div class="p-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#161618]"${_scopeId}><h3 class="text-xs font-semibold text-gray-900 dark:text-white mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.modal.fulfillment_title"))}</h3><p class="text-[11px] text-gray-400 mb-3"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.orders.modal.status_notice"))}</p><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UFormField, {
                    label: _ctx.$t("admin.orders.modal.update_fulfillment")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_USelect, {
                          modelValue: editStatus.value,
                          "onUpdate:modelValue": ($event) => editStatus.value = $event,
                          class: "w-full text-xs",
                          items: orderStatusOptions.value
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_USelect, {
                            modelValue: editStatus.value,
                            "onUpdate:modelValue": ($event) => editStatus.value = $event,
                            class: "w-full text-xs",
                            items: orderStatusOptions.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_UFormField, {
                    label: _ctx.$t("admin.orders.modal.update_payment")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_USelect, {
                          modelValue: editPayStatus.value,
                          "onUpdate:modelValue": ($event) => editPayStatus.value = $event,
                          class: "w-full text-xs",
                          items: payStatusOptions.value
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_USelect, {
                            modelValue: editPayStatus.value,
                            "onUpdate:modelValue": ($event) => editPayStatus.value = $event,
                            class: "w-full text-xs",
                            items: payStatusOptions.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    loading: isSaving.value,
                    onClick: saveOrderForm
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(_ctx.$t("admin.orders.modal.update_order"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("admin.orders.modal.update_order")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                selectedOrder.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "space-y-5 p-6"
                }, [
                  createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-gray-200/80 dark:border-gray-800 rounded-2xl bg-gray-50/70 dark:bg-black/20" }, [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("div", { class: "p-2.5 rounded-xl bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 shrink-0" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:receipt-bold",
                          class: "w-6 h-6"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("span", { class: "text-base font-mono font-bold text-gray-900 dark:text-white" }, toDisplayString(selectedOrder.value.id), 1),
                          createVNode(_component_UButton, {
                            color: "neutral",
                            variant: "ghost",
                            icon: "ph:copy-simple",
                            size: "xs",
                            onClick: ($event) => copyToClipboard(selectedOrder.value.id, unref(t)("admin.orders.modal.order_id"))
                          }, null, 8, ["onClick"]),
                          selectedOrder.value.source ? (openBlock(), createBlock(_component_UBadge, {
                            key: 0,
                            variant: "subtle",
                            color: "neutral",
                            size: "sm",
                            class: "font-mono text-[10px]"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(selectedOrder.value.source), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex flex-wrap items-center gap-2 mt-1 text-xs text-gray-500" }, [
                          createVNode("span", null, toDisplayString(_ctx.$t("admin.orders.modal.created_at")) + ": " + toDisplayString(unref(formatDateTime)(selectedOrder.value.createdAt)), 1),
                          selectedOrder.value.paidAt ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-emerald-600 dark:text-emerald-400"
                          }, "\u2022 " + toDisplayString(_ctx.$t("admin.orders.modal.paid_at")) + ": " + toDisplayString(unref(formatDateTime)(selectedOrder.value.paidAt)), 1)) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                      createVNode(_component_UBadge, {
                        color: getPayStatusColor(selectedOrder.value.payStatus),
                        variant: "subtle",
                        size: "md",
                        class: "capitalize font-medium px-2.5 py-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("admin.orders.payment_label")) + ": " + toDisplayString(getPayStatusLabel(selectedOrder.value.payStatus)), 1)
                        ]),
                        _: 1
                      }, 8, ["color"]),
                      createVNode(_component_UBadge, {
                        color: getStatusColor(selectedOrder.value.status),
                        variant: "subtle",
                        size: "md",
                        class: "capitalize font-medium px-2.5 py-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("admin.orders.fulfillment_label")) + ": " + toDisplayString(getStatusLabel(selectedOrder.value.status)), 1)
                        ]),
                        _: 1
                      }, 8, ["color"])
                    ])
                  ]),
                  unref(hasAdminPerm)("orders:edit") ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-wrap items-center justify-between gap-2 p-3 bg-gray-50 dark:bg-[#161618] rounded-xl border border-gray-200 dark:border-gray-800"
                  }, [
                    createVNode("span", { class: "text-xs font-medium text-gray-500 dark:text-gray-400" }, toDisplayString(_ctx.$t("admin.common.actions")) + "\uFF1A", 1),
                    createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "outline",
                        size: "xs",
                        icon: "ph:arrows-clockwise",
                        loading: isReconciling.value,
                        onClick: ($event) => reconcileOrder(selectedOrder.value)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("admin.orders.actions.reconcile")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"]),
                      selectedOrder.value.payStatus === "pending" ? (openBlock(), createBlock(_component_UButton, {
                        key: 0,
                        color: "success",
                        variant: "soft",
                        size: "xs",
                        icon: "ph:check-circle",
                        loading: isActionWorking.value,
                        onClick: ($event) => markOrderPaid(selectedOrder.value)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("admin.orders.actions.mark_paid")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : createCommentVNode("", true),
                      selectedOrder.value.payStatus === "pending" ? (openBlock(), createBlock(_component_UButton, {
                        key: 1,
                        color: "neutral",
                        variant: "ghost",
                        size: "xs",
                        icon: "ph:x-circle",
                        loading: isActionWorking.value,
                        onClick: ($event) => cancelOrder(selectedOrder.value)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("admin.orders.actions.cancel")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : createCommentVNode("", true),
                      selectedOrder.value.payStatus === "paid" ? (openBlock(), createBlock(_component_UButton, {
                        key: 2,
                        color: "primary",
                        variant: "soft",
                        size: "xs",
                        icon: "ph:paper-plane-tilt",
                        loading: isFulfilling.value,
                        onClick: ($event) => fulfillOrderAction(selectedOrder.value)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("admin.orders.actions.fulfill")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : createCommentVNode("", true),
                      selectedOrder.value.payStatus === "paid" ? (openBlock(), createBlock(_component_UButton, {
                        key: 3,
                        color: "error",
                        variant: "outline",
                        size: "xs",
                        icon: "ph:arrow-counter-clockwise",
                        loading: isActionWorking.value,
                        onClick: ($event) => refundOrder(selectedOrder.value)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("admin.orders.actions.refund")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : createCommentVNode("", true),
                      selectedOrder.value.status === "deleted" || selectedOrder.value.payStatus === "deleted" ? (openBlock(), createBlock(_component_UButton, {
                        key: 4,
                        color: "success",
                        variant: "outline",
                        size: "xs",
                        icon: "ph:arrow-u-up-left",
                        loading: isActionWorking.value,
                        onClick: ($event) => restoreOrder(selectedOrder.value)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("admin.orders.actions.restore")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : (openBlock(), createBlock(_component_UButton, {
                        key: 5,
                        color: "error",
                        variant: "ghost",
                        size: "xs",
                        icon: "ph:trash",
                        loading: isActionWorking.value,
                        onClick: ($event) => trashOrder(selectedOrder.value)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("admin.orders.actions.trash")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"]))
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                    createVNode("div", { class: "p-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#161618] flex flex-col justify-between" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-center justify-between mb-3" }, [
                          createVNode("h4", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider" }, toDisplayString(_ctx.$t("admin.orders.modal.product_info")), 1),
                          selectedOrder.value.productType ? (openBlock(), createBlock(_component_UBadge, {
                            key: 0,
                            variant: "subtle",
                            color: "neutral",
                            size: "xs",
                            class: "font-mono uppercase"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(selectedOrder.value.productType), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode("div", { class: "w-12 h-12 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0 border border-gray-200 dark:border-gray-800 flex items-center justify-center" }, [
                            selectedOrder.value.productImage ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: unref(buildImageProxyUrl)(selectedOrder.value.productImage),
                              alt: selectedOrder.value.productName || "",
                              class: "w-full h-full object-cover"
                            }, null, 8, ["src", "alt"])) : (openBlock(), createBlock(_component_UIcon, {
                              key: 1,
                              name: "ph:package",
                              class: "w-6 h-6 text-gray-400"
                            }))
                          ]),
                          createVNode("div", { class: "min-w-0 flex-1" }, [
                            selectedOrder.value.productId ? (openBlock(), createBlock(_component_NuxtLink, {
                              key: 0,
                              to: `/products/${selectedOrder.value.productSlug || selectedOrder.value.productId}`,
                              target: "_blank",
                              class: "text-sm font-semibold text-gray-900 dark:text-white hover:text-primary-500 hover:underline line-clamp-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(selectedOrder.value.productName), 1)
                              ]),
                              _: 1
                            }, 8, ["to"])) : (openBlock(), createBlock("p", {
                              key: 1,
                              class: "text-sm font-semibold text-gray-900 dark:text-white truncate"
                            }, toDisplayString(selectedOrder.value.productName || _ctx.$t("admin.orders.unknown_product")), 1)),
                            createVNode("div", { class: "flex items-center gap-3 mt-1 text-xs text-gray-500" }, [
                              createVNode("span", null, [
                                createTextVNode(toDisplayString(_ctx.$t("admin.orders.modal.quantity")) + ": ", 1),
                                createVNode("strong", { class: "text-gray-900 dark:text-white font-mono" }, toDisplayString(getOrderQuantity(selectedOrder.value)), 1)
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between" }, [
                        createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(_ctx.$t("admin.orders.modal.amount")), 1),
                        createVNode("span", { class: "text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400" }, toDisplayString(unref(formatCurrencyAmount)(selectedOrder.value.amount, selectedOrder.value.currency)), 1)
                      ])
                    ]),
                    createVNode("div", { class: "p-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#161618] flex flex-col justify-between" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-center justify-between mb-3" }, [
                          createVNode("h4", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider" }, toDisplayString(_ctx.$t("admin.orders.modal.customer_info")), 1),
                          createVNode(_component_UBadge, {
                            color: selectedOrder.value.userId ? "primary" : "neutral",
                            variant: "subtle",
                            size: "xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(selectedOrder.value.userId ? _ctx.$t("admin.orders.modal.buyer_type_registered") : _ctx.$t("admin.orders.modal.buyer_type_guest")), 1)
                            ]),
                            _: 1
                          }, 8, ["color"])
                        ]),
                        selectedOrder.value.userId || selectedOrder.value.userEmail ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-1.5"
                        }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:user-circle-fill",
                              class: "w-4 h-4 text-purple-500"
                            }),
                            createVNode("span", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(selectedOrder.value.userNickname || String(selectedOrder.value.userEmail || "").split("@")[0]), 1),
                            selectedOrder.value.userId ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-xs font-mono text-gray-400"
                            }, "#" + toDisplayString(selectedOrder.value.userId), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "text-xs text-gray-500 font-mono" }, toDisplayString(selectedOrder.value.userEmail || selectedOrder.value.contactEmail), 1)
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "space-y-1.5"
                        }, [
                          createVNode("div", { class: "flex items-center gap-2 text-xs font-mono text-gray-700 dark:text-gray-300" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:envelope-simple",
                              class: "w-4 h-4 text-gray-400"
                            }),
                            createVNode("span", null, toDisplayString(selectedOrder.value.contactEmail || _ctx.$t("admin.orders.na")), 1)
                          ]),
                          selectedOrder.value.visitorId ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex items-center gap-2 text-xs text-gray-500 font-mono"
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:ghost",
                              class: "w-4 h-4 text-gray-400"
                            }),
                            createVNode("span", {
                              class: "cursor-pointer hover:text-primary-500 transition-colors",
                              onClick: ($event) => copyVisitorId(selectedOrder.value.visitorId)
                            }, toDisplayString(selectedOrder.value.visitorId), 9, ["onClick"])
                          ])) : createCommentVNode("", true)
                        ]))
                      ]),
                      createVNode("div", { class: "mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/80 space-y-1 text-xs" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("span", { class: "text-gray-500" }, toDisplayString(_ctx.$t("admin.orders.modal.payment_method")), 1),
                          createVNode("span", { class: "font-medium text-gray-900 dark:text-white capitalize" }, toDisplayString(selectedOrder.value.payMethod || _ctx.$t("admin.orders.na")), 1)
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("span", { class: "text-gray-500" }, toDisplayString(_ctx.$t("admin.orders.modal.trade_no")), 1),
                          createVNode("span", {
                            class: "font-mono text-gray-900 dark:text-white truncate max-w-[200px]",
                            title: selectedOrder.value.tradeNo || ""
                          }, toDisplayString(selectedOrder.value.tradeNo || _ctx.$t("admin.orders.na")), 9, ["title"])
                        ])
                      ])
                    ])
                  ]),
                  selectedOrder.value.payStatus === "pending" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "p-4 border border-amber-500/30 rounded-xl bg-amber-50/40 dark:bg-amber-950/20"
                  }, [
                    createVNode("h3", { class: "text-xs font-semibold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-1.5" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:link",
                        class: "w-4 h-4"
                      }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("admin.orders.modal.payment_link_title")), 1)
                    ]),
                    createVNode("div", { class: "space-y-3" }, [
                      createVNode("div", { class: "rounded-lg border border-amber-200 dark:border-amber-900/50 bg-white/80 dark:bg-black/40 px-3 py-2" }, [
                        createVNode("p", { class: "text-[10px] text-gray-500 dark:text-gray-400 mb-0.5" }, toDisplayString(_ctx.$t("admin.orders.modal.payment_link")), 1),
                        createVNode("p", { class: "text-xs font-mono text-gray-900 dark:text-white break-all select-all" }, toDisplayString(getFrontendPaymentUrl(selectedOrder.value.id)), 1)
                      ]),
                      createVNode("div", { class: "flex flex-wrap gap-2" }, [
                        createVNode(_component_UButton, {
                          color: "primary",
                          variant: "soft",
                          size: "xs",
                          icon: "ph:credit-card",
                          to: getFrontendPaymentPath(selectedOrder.value.id),
                          target: "_blank"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("admin.orders.modal.open_payment_page")), 1)
                          ]),
                          _: 1
                        }, 8, ["to"]),
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "outline",
                          size: "xs",
                          icon: "ph:copy",
                          onClick: ($event) => copyFrontendPaymentUrl(selectedOrder.value.id)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("admin.orders.modal.copy_payment_link")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "p-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#161618]" }, [
                    createVNode("div", { class: "flex items-center justify-between mb-2" }, [
                      createVNode("h3", { class: "text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:key",
                          class: "w-4 h-4 text-primary-500"
                        }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("admin.orders.modal.delivery_content")), 1)
                      ]),
                      selectedOrder.value.deliveryInfo ? (openBlock(), createBlock(_component_UButton, {
                        key: 0,
                        color: "neutral",
                        variant: "outline",
                        size: "xs",
                        icon: "ph:copy",
                        onClick: ($event) => copyToClipboard(selectedOrder.value.deliveryInfo, unref(t)("admin.orders.modal.delivery_content"))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("admin.orders.actions.copy_delivery")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : createCommentVNode("", true)
                    ]),
                    selectedOrder.value.deliveryInfo ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mb-3 p-3 rounded-lg bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-gray-800 text-xs font-mono text-gray-800 dark:text-gray-200 whitespace-pre-wrap select-all"
                    }, toDisplayString(selectedOrder.value.deliveryInfo), 1)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "mb-3 p-3 rounded-lg bg-gray-50/50 dark:bg-black/10 border border-dashed border-gray-200 dark:border-gray-800 text-xs text-gray-400 text-center"
                    }, toDisplayString(_ctx.$t("admin.orders.modal.no_delivery_info")), 1)),
                    unref(hasAdminPerm)("orders:edit") ? (openBlock(), createBlock("div", { key: 2 }, [
                      createVNode(_component_UFormField, {
                        label: _ctx.$t("admin.orders.modal.delivery_info_edit")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UTextarea, {
                            modelValue: editDeliveryInfo.value,
                            "onUpdate:modelValue": ($event) => editDeliveryInfo.value = $event,
                            rows: 2,
                            class: "text-gray-900 dark:text-white w-full text-xs font-mono",
                            placeholder: "\u4EBA\u5DE5\u5907\u6CE8\u3001\u5361\u5BC6\u6216\u8865\u53D1\u4FE1\u606F..."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ])) : createCommentVNode("", true)
                  ]),
                  selectedOrder.value.metaData ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#161618]"
                  }, [
                    createVNode("button", {
                      type: "button",
                      class: "w-full flex items-center justify-between p-4 text-xs font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition cursor-pointer",
                      onClick: ($event) => isMetaExpanded.value = !isMetaExpanded.value
                    }, [
                      createVNode("span", { class: "flex items-center gap-1.5" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:code-bold",
                          class: "w-4 h-4 text-gray-400"
                        }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("admin.orders.modal.meta_data")), 1)
                      ]),
                      createVNode(_component_UIcon, {
                        name: "ph:caret-down-bold",
                        class: ["w-3.5 h-3.5 text-gray-400 transition-transform", { "rotate-180": isMetaExpanded.value }]
                      }, null, 8, ["class"])
                    ], 8, ["onClick"]),
                    isMetaExpanded.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "p-4 pt-0 border-t border-gray-100 dark:border-gray-800/80"
                    }, [
                      createVNode("div", { class: "flex justify-end mb-2" }, [
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "ghost",
                          size: "xs",
                          icon: "ph:copy",
                          onClick: ($event) => copyToClipboard(formatMetaData(selectedOrder.value.metaData), unref(t)("admin.orders.modal.meta_data"))
                        }, null, 8, ["onClick"])
                      ]),
                      createVNode("pre", { class: "text-xs text-gray-700 dark:text-gray-300 overflow-auto whitespace-pre-wrap font-mono p-3 bg-gray-50 dark:bg-black/30 rounded-lg max-h-60" }, toDisplayString(formatMetaData(selectedOrder.value.metaData)), 1)
                    ])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true),
                  unref(hasAdminPerm)("orders:edit") ? (openBlock(), createBlock("div", {
                    key: 3,
                    class: "p-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-[#161618]"
                  }, [
                    createVNode("h3", { class: "text-xs font-semibold text-gray-900 dark:text-white mb-2" }, toDisplayString(_ctx.$t("admin.orders.modal.fulfillment_title")), 1),
                    createVNode("p", { class: "text-[11px] text-gray-400 mb-3" }, toDisplayString(_ctx.$t("admin.orders.modal.status_notice")), 1),
                    createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                      createVNode(_component_UFormField, {
                        label: _ctx.$t("admin.orders.modal.update_fulfillment")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelect, {
                            modelValue: editStatus.value,
                            "onUpdate:modelValue": ($event) => editStatus.value = $event,
                            class: "w-full text-xs",
                            items: orderStatusOptions.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      createVNode(_component_UFormField, {
                        label: _ctx.$t("admin.orders.modal.update_payment")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelect, {
                            modelValue: editPayStatus.value,
                            "onUpdate:modelValue": ($event) => editPayStatus.value = $event,
                            class: "w-full text-xs",
                            items: payStatusOptions.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    createVNode("div", { class: "flex justify-end mt-4" }, [
                      createVNode(_component_UButton, {
                        color: "primary",
                        loading: isSaving.value,
                        onClick: saveOrderForm
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("admin.orders.modal.update_order")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(AdminOrdersManualOrderModal, {
          modelValue: isManualOrderOpen.value,
          "onUpdate:modelValue": ($event) => isManualOrderOpen.value = $event,
          onSuccess: handleManualOrderSuccess
        }, null, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
