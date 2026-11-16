import { u as useI18n$1, l as useFormatTime, G as useCurrencyFormat, a as useToast, i as useConfirm, c as useSettings, b as useAdminPermissions, y as useFetch, r as useRouter, _ as _sfc_main$P, j as _sfc_main$_, d as _sfc_main$V, g as _sfc_main$v, e as _sfc_main$s, k as _sfc_main$w, C as _sfc_main$m, h as _sfc_main$B, f as _sfc_main$J } from './server.mjs';
import { _ as _sfc_main$1 } from './Switch-ClGRu-qy.mjs';
import { _ as __nuxt_component_7 } from './FullScreenModal-Dc4DBflh.mjs';
import { defineComponent, ref, withAsyncContext, computed, reactive, watch, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createSlots, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'node:fs/promises';
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:zlib';
import 'node:child_process';
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
  __name: "payments",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n$1();
    const { formatDateTime } = useFormatTime();
    const { formatCurrencyAmount } = useCurrencyFormat();
    const toast = useToast();
    const { confirm } = useConfirm();
    const { settings: appSettings, fetchSettings } = useSettings();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const activeTab = ref("methods");
    [__temp, __restore] = withAsyncContext(() => fetchSettings()), await __temp, __restore();
    const columns = computed(() => [
      { accessorKey: "name", header: t("admin.payments.table.name") },
      { accessorKey: "locales", header: t("admin.payments.modal.language_label") },
      { accessorKey: "isActive", header: t("admin.payments.table.status") },
      {
        accessorKey: "actions",
        header: t("admin.payments.table.actions"),
        meta: { class: { th: "text-right w-28", td: "text-right" } }
      }
    ]);
    const {
      data: methods,
      pending,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/payments",
      {
        onResponseError({ response }) {
          if (response.status === 401) {
            useRouter().push("/admin/login");
          }
        }
      },
      "$Ad8d2ykjrr"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const allMethods = computed(() => methods.value || []);
    const methodStatusFilter = ref("all");
    const methodSearch = ref("");
    const activeMethodsCount = computed(() => allMethods.value.filter((m) => Boolean(m.isActive) && !m.isLocalOnly).length);
    const methodFilterPills = computed(() => [
      { value: "all", label: t("admin.common.all", "\u5168\u90E8"), count: allMethods.value.length, dotClass: "" },
      { value: "active", label: t("admin.common.enabled", "\u5DF2\u542F\u7528"), count: activeMethodsCount.value, dotClass: "bg-emerald-500" },
      { value: "inactive", label: t("admin.common.disabled", "\u672A\u542F\u7528"), count: allMethods.value.length - activeMethodsCount.value, dotClass: "bg-gray-400" }
    ]);
    const filteredMethods = computed(() => {
      const kw = methodSearch.value.trim().toLowerCase();
      return allMethods.value.filter((m) => {
        const enabled = Boolean(m.isActive) && !m.isLocalOnly;
        if (methodStatusFilter.value === "active" && !enabled) return false;
        if (methodStatusFilter.value === "inactive" && enabled) return false;
        if (!kw) return true;
        return String(m.name || "").toLowerCase().includes(kw) || String(m.code || "").toLowerCase().includes(kw);
      });
    });
    const isSaving = ref(false);
    const isModalOpen = ref(false);
    const form = reactive({
      id: null,
      name: "",
      code: "",
      iconUrl: "",
      supportedLocales: "",
      configJson: "{}",
      info: "",
      create: "",
      callback: "",
      isActive: false
    });
    const baseLocaleOptions = [
      { code: "en", label: "English" },
      { code: "zh", label: "\u7B80\u4F53\u4E2D\u6587" },
      { code: "zh-HK", label: "\u7E41\u9AD4\u4E2D\u6587 (\u9999\u6E2F)" },
      { code: "zh-TW", label: "\u7E41\u9AD4\u4E2D\u6587 (\u53F0\u7063)" },
      { code: "id", label: "Bahasa Indonesia" },
      { code: "ja", label: "\u65E5\u672C\u8A9E" },
      { code: "ko", label: "\uD55C\uAD6D\uC5B4" },
      { code: "fr", label: "Fran\xE7ais" },
      { code: "de", label: "Deutsch" },
      { code: "es", label: "Espa\xF1ol" },
      { code: "ru", label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" },
      { code: "pt", label: "Portugu\xEAs" },
      { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" },
      { code: "hi", label: "\u0939\u093F\u0928\u094D\u0926\u0940" }
    ];
    const normalizeLocaleCode = (value) => {
      const normalized = String(value || "").trim().replace(/_/g, "-");
      if (!normalized) return "";
      const [language, region, ...rest] = normalized.split("-").filter(Boolean);
      if (!language) return "";
      const parts = [language.toLowerCase()];
      if (region) parts.push(region.length <= 3 ? region.toUpperCase() : region.toLowerCase());
      if (rest.length) parts.push(...rest.map((part) => part.toLowerCase()));
      return parts.join("-");
    };
    const parseLocaleCodes = (value) => {
      return Array.from(new Set(
        String(value || "").split(",").map((item) => normalizeLocaleCode(item)).filter(Boolean)
      ));
    };
    const selectedMethodLocales = computed(() => parseLocaleCodes(form.supportedLocales));
    const paymentLocaleOptions = computed(() => {
      var _a;
      const configuredLocales = parseLocaleCodes(((_a = appSettings.value) == null ? void 0 : _a.supported_locales) || "en,zh");
      const allCodes = Array.from(/* @__PURE__ */ new Set([
        ...configuredLocales,
        ...selectedMethodLocales.value
      ]));
      return allCodes.map((code) => {
        const matched = baseLocaleOptions.find((locale) => normalizeLocaleCode(locale.code) === code);
        return matched || { code, label: code };
      });
    });
    const isMethodLocaleSelected = (code) => {
      const normalizedCode = normalizeLocaleCode(code);
      return selectedMethodLocales.value.includes(normalizedCode);
    };
    const toggleMethodLocale = (code, checked) => {
      const normalizedCode = normalizeLocaleCode(code);
      let current = [...selectedMethodLocales.value];
      if (checked && !current.includes(normalizedCode)) {
        current.push(normalizedCode);
      } else if (!checked) {
        current = current.filter((item) => item !== normalizedCode);
      }
      const visualOrder = paymentLocaleOptions.value.map((option) => normalizeLocaleCode(option.code)).filter((optionCode) => current.includes(optionCode));
      form.supportedLocales = visualOrder.join(",");
    };
    const getMethodLocaleSummary = (value) => {
      const locales = parseLocaleCodes(value);
      if (!locales.length) {
        return t("admin.payments.modal.language_all");
      }
      return locales.join(", ");
    };
    const hasJsonError = ref(false);
    const onJsonChange = () => {
      try {
        JSON.parse(form.configJson);
        hasJsonError.value = false;
      } catch {
        hasJsonError.value = true;
      }
    };
    const openModal = (method) => {
      hasJsonError.value = false;
      if (method) {
        Object.assign(form, method);
        form.supportedLocales = typeof form.supportedLocales === "string" ? form.supportedLocales : "";
        if (typeof form.configJson !== "string") {
          form.configJson = JSON.stringify(form.configJson || {}, null, 2);
        }
      } else {
        Object.assign(form, {
          id: null,
          name: "",
          code: "",
          iconUrl: "",
          supportedLocales: "",
          configJson: "{}",
          info: "",
          create: "",
          callback: "",
          isActive: false
        });
      }
      isModalOpen.value = true;
    };
    const closeMethodModal = () => {
      isModalOpen.value = false;
    };
    const saveMethod = async () => {
      var _a;
      try {
        if (form.configJson) JSON.parse(form.configJson);
      } catch {
        toast.add({
          title: t("admin.payments.toast.error"),
          description: t("admin.payments.toast.invalid_json"),
          color: "error"
        });
        return;
      }
      isSaving.value = true;
      try {
        const url = form.id ? `/api/admin/payments/${form.id}` : "/api/admin/payments";
        const method = form.id ? "PUT" : "POST";
        await $fetch(url, {
          method,
          body: form
        });
        isModalOpen.value = false;
        await refresh();
        toast.add({
          title: t("admin.payments.toast.success"),
          description: t("admin.payments.toast.saved"),
          color: "success"
        });
      } catch (e) {
        toast.add({
          title: t("admin.payments.toast.error"),
          description: ((_a = e.data) == null ? void 0 : _a.message) || t("admin.payments.toast.save_failed"),
          color: "error"
        });
      } finally {
        isSaving.value = false;
      }
    };
    const toggleActive = async (row) => {
      var _a;
      try {
        await $fetch(`/api/admin/payments/${row.id}`, {
          method: "PUT",
          body: { isActive: row.isActive }
        });
        toast.add({
          title: t("admin.payments.toast.success"),
          description: t("admin.payments.toast.status_updated"),
          color: "success"
        });
      } catch (e) {
        row.isActive = !row.isActive;
        toast.add({
          title: t("admin.payments.toast.error"),
          description: ((_a = e.data) == null ? void 0 : _a.message) || t("admin.payments.toast.status_failed"),
          color: "error"
        });
      }
    };
    const deleteMethod = async (id) => {
      var _a;
      const isConfirmed = await confirm({
        title: t("admin.payments.confirm.delete_title"),
        description: t("admin.payments.confirm.delete_desc")
      });
      if (!isConfirmed) return;
      try {
        await $fetch(`/api/admin/payments/${id}`, {
          method: "DELETE"
        });
        await refresh();
        toast.add({
          title: t("admin.payments.toast.success"),
          description: t("admin.payments.toast.deleted"),
          color: "success"
        });
      } catch (e) {
        toast.add({
          title: t("admin.payments.toast.error"),
          description: ((_a = e.data) == null ? void 0 : _a.message) || t("admin.payments.toast.delete_failed"),
          color: "error"
        });
      }
    };
    const failuresColumns = [
      { accessorKey: "id", header: () => t("admin.payments.failures.id") },
      { accessorKey: "orderId", header: () => t("admin.payments.failures.orderId") },
      { accessorKey: "visitorId", header: () => t("admin.payments.failures.visitor") },
      { accessorKey: "cardBin", header: () => t("admin.payments.failures.cardBin") },
      { accessorKey: "reason", header: () => t("admin.payments.failures.reason") },
      { accessorKey: "amount", header: () => t("admin.payments.failures.amount") },
      { accessorKey: "payMethod", header: () => t("admin.payments.failures.method") },
      { accessorKey: "createdAt", header: () => t("admin.payments.failures.date") },
      { accessorKey: "actions", header: () => t("admin.payments.failures.actions") }
    ];
    const failures = ref([]);
    const failuresPending = ref(false);
    const failureSearch = ref("");
    const isFailuresModalOpen = ref(false);
    const selectedFailure = ref(null);
    const filteredFailures = computed(() => {
      const kw = failureSearch.value.trim().toLowerCase();
      if (!kw) return failures.value;
      return failures.value.filter(
        (item) => String(item.orderId || "").toLowerCase().includes(kw) || String(item.contactEmail || "").toLowerCase().includes(kw) || String(item.cardBin || "").toLowerCase().includes(kw) || String(item.reason || "").toLowerCase().includes(kw) || String(item.payMethod || "").toLowerCase().includes(kw)
      );
    });
    const tabItems = computed(() => [
      { label: t("admin.payments.page.tabs.methods"), value: "methods", icon: "ph:credit-card-bold", count: allMethods.value.length },
      { label: t("admin.payments.page.tabs.failures"), value: "failures", icon: "ph:warning-circle-bold", count: failures.value.length || void 0 }
    ]);
    const fetchFailures = async () => {
      failuresPending.value = true;
      try {
        const res = await $fetch("/api/admin/payments/failures");
        failures.value = Array.isArray(res) ? res : [];
      } catch {
        failures.value = [];
      } finally {
        failuresPending.value = false;
      }
    };
    watch(activeTab, (tab) => {
      if (tab === "failures" && failures.value.length === 0) {
        fetchFailures();
      }
    });
    const copyVisitorId = (id) => {
      if (!id) return;
      (void 0).clipboard.writeText(id);
      toast.add({
        title: t("admin.payments.failures.copied"),
        description: t("admin.payments.failures.copiedDescription"),
        color: "success"
      });
    };
    const viewDetails = (record) => {
      selectedFailure.value = record;
      isFailuresModalOpen.value = true;
    };
    const closeFailuresModal = () => {
      isFailuresModalOpen.value = false;
    };
    const formatJson = (str) => {
      try {
        return JSON.stringify(JSON.parse(str), null, 2);
      } catch {
        return str;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBadge = _sfc_main$P;
      const _component_UIcon = _sfc_main$_;
      const _component_UButton = _sfc_main$V;
      const _component_UInput = _sfc_main$v;
      const _component_UTable = _sfc_main$s;
      const _component_USwitch = _sfc_main$1;
      const _component_FullScreenModal = __nuxt_component_7;
      const _component_UFormField = _sfc_main$w;
      const _component_UCheckbox = _sfc_main$m;
      const _component_UTextarea = _sfc_main$B;
      const _component_UModal = _sfc_main$J;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh-6.25rem)] flex flex-col gap-3" }, _attrs))}><div class="flex flex-wrap items-center justify-between gap-3 shrink-0"><div class="flex items-center gap-2.5 min-w-0"><h1 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight truncate">${ssrInterpolate(activeTab.value === "failures" ? _ctx.$t("admin.payments.failures.title", "\u4EA4\u6613\u5931\u8D25\u8BB0\u5F55") : _ctx.$t("admin.payments.page.title"))}</h1>`);
      _push(ssrRenderComponent(_component_UBadge, {
        color: "primary",
        variant: "subtle",
        size: "xs",
        class: "font-mono font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(activeTab.value === "failures" ? failures.value.length : allMethods.value.length)}`);
          } else {
            return [
              createTextVNode(toDisplayString(activeTab.value === "failures" ? failures.value.length : allMethods.value.length), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-2.5 shrink-0"><div class="flex items-center gap-1 bg-gray-100 dark:bg-white/5 p-1 rounded-xl"><!--[-->`);
      ssrRenderList(tabItems.value, (tab) => {
        _push(`<button type="button" class="${ssrRenderClass([activeTab.value === tab.value ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer select-none"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: tab.icon,
          class: "h-3.5 w-3.5 shrink-0"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(tab.label)}</span>`);
        if (tab.count !== void 0) {
          _push(`<span class="${ssrRenderClass([activeTab.value === tab.value ? "bg-purple-100 dark:bg-purple-900/50 font-bold text-purple-700 dark:text-purple-300" : "bg-gray-200/70 dark:bg-white/10 text-gray-500 dark:text-gray-400", "rounded-full px-1.5 py-0.2 text-[10px] font-mono leading-tight"])}">${ssrInterpolate(tab.count)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      });
      _push(`<!--]--></div>`);
      if (activeTab.value === "methods" && unref(hasAdminPerm)("payments:edit")) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "primary",
          size: "sm",
          class: "bg-purple-600 hover:bg-purple-500 text-white font-medium shadow-xs",
          icon: "ph:plus-bold",
          onClick: ($event) => openModal()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("admin.payments.page.add_method"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("admin.payments.page.add_method")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (activeTab.value === "methods") {
        _push(`<div class="flex min-h-0 flex-1 flex-col"><div class="bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1 min-h-0"><div class="px-4 py-2.5 border-b border-gray-200/70 dark:border-gray-800/60 bg-gray-50/50 dark:bg-[#18181b]/30 flex flex-wrap items-center justify-between gap-2.5 shrink-0"><div class="flex items-center gap-1 overflow-x-auto"><!--[-->`);
        ssrRenderList(methodFilterPills.value, (pill) => {
          _push(`<button type="button" class="${ssrRenderClass([methodStatusFilter.value === pill.value ? "bg-white dark:bg-[#1e1e24] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700 font-semibold shadow-2xs" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-white/[0.04]", "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer select-none shrink-0"])}">`);
          if (pill.dotClass) {
            _push(`<span class="${ssrRenderClass([pill.dotClass, "h-1.5 w-1.5 rounded-full shrink-0"])}"></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span>${ssrInterpolate(pill.label)}</span><span class="text-[10px] font-mono opacity-70">${ssrInterpolate(pill.count)}</span></button>`);
        });
        _push(`<!--]--></div><div class="flex items-center gap-2 w-full sm:w-auto justify-end">`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: methodSearch.value,
          "onUpdate:modelValue": ($event) => methodSearch.value = $event,
          icon: "ph:magnifying-glass",
          placeholder: "\u641C\u7D22\u652F\u4ED8\u540D\u79F0\u6216\u7F16\u7801...",
          size: "sm",
          class: "w-full sm:w-60 text-xs"
        }, createSlots({ _: 2 }, [
          methodSearch.value ? {
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
                    onClick: ($event) => methodSearch.value = ""
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
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "outline",
          icon: "ph:arrows-clockwise",
          size: "sm",
          loading: unref(pending),
          class: "hover:bg-gray-50 dark:hover:bg-gray-800 shrink-0",
          onClick: () => unref(refresh)()
        }, null, _parent));
        _push(`</div></div><div class="flex-1 overflow-auto">`);
        _push(ssrRenderComponent(_component_UTable, {
          columns: columns.value,
          data: filteredMethods.value,
          loading: unref(pending),
          ui: {
            th: "py-2.5 px-4 text-xs",
            td: "py-2.5 px-4"
          },
          sticky: ""
        }, {
          "name-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-3 min-w-[200px]"${_scopeId}>`);
              if (row.original.iconUrl) {
                _push2(`<img${ssrRenderAttr("src", String(row.original.iconUrl))}${ssrRenderAttr("alt", String(row.original.name))} class="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-white object-contain p-1 shrink-0"${_scopeId}>`);
              } else {
                _push2(`<div class="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-gray-500 dark:text-gray-400 shrink-0"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:credit-card-bold",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`<div class="min-w-0"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-sm font-semibold text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(row.original.name)}</span><span class="text-[11px] font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 px-1.5 py-0.5 rounded"${_scopeId}>${ssrInterpolate(row.original.code)}</span></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-3 min-w-[200px]" }, [
                  row.original.iconUrl ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: String(row.original.iconUrl),
                    alt: String(row.original.name),
                    class: "w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-white object-contain p-1 shrink-0"
                  }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-gray-500 dark:text-gray-400 shrink-0"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:credit-card-bold",
                      class: "w-4 h-4"
                    })
                  ])),
                  createVNode("div", { class: "min-w-0" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", { class: "text-sm font-semibold text-gray-900 dark:text-white truncate" }, toDisplayString(row.original.name), 1),
                      createVNode("span", { class: "text-[11px] font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 px-1.5 py-0.5 rounded" }, toDisplayString(row.original.code), 1)
                    ])
                  ])
                ])
              ];
            }
          }),
          "locales-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "subtle",
                size: "xs",
                class: "font-mono"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(getMethodLocaleSummary(String(row.original.supportedLocales || "")))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(getMethodLocaleSummary(String(row.original.supportedLocales || ""))), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UBadge, {
                  color: "neutral",
                  variant: "subtle",
                  size: "xs",
                  class: "font-mono"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(getMethodLocaleSummary(String(row.original.supportedLocales || ""))), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          "isActive-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 whitespace-nowrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_USwitch, {
                size: "sm",
                "model-value": Boolean(row.original.isActive),
                disabled: Boolean(row.original.isLocalOnly) || !unref(hasAdminPerm)("payments:edit"),
                "onUpdate:modelValue": (val) => {
                  if (!row.original.isLocalOnly) {
                    row.original.isActive = val;
                    toggleActive(row.original);
                  }
                }
              }, null, _parent2, _scopeId));
              if (row.original.isLocalOnly) {
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "warning",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("admin.payments.badge.unconfigured"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("admin.payments.badge.unconfigured")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else if (row.original.hasLocalFiles) {
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "success",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("admin.payments.badge.local_plugin"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("admin.payments.badge.local_plugin")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "info",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("admin.payments.badge.db_only"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("admin.payments.badge.db_only")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 whitespace-nowrap" }, [
                  createVNode(_component_USwitch, {
                    size: "sm",
                    "model-value": Boolean(row.original.isActive),
                    disabled: Boolean(row.original.isLocalOnly) || !unref(hasAdminPerm)("payments:edit"),
                    "onUpdate:modelValue": (val) => {
                      if (!row.original.isLocalOnly) {
                        row.original.isActive = val;
                        toggleActive(row.original);
                      }
                    }
                  }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"]),
                  row.original.isLocalOnly ? (openBlock(), createBlock(_component_UBadge, {
                    key: 0,
                    color: "warning",
                    variant: "subtle",
                    size: "xs"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.payments.badge.unconfigured")), 1)
                    ]),
                    _: 1
                  })) : row.original.hasLocalFiles ? (openBlock(), createBlock(_component_UBadge, {
                    key: 1,
                    color: "success",
                    variant: "subtle",
                    size: "xs"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.payments.badge.local_plugin")), 1)
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(_component_UBadge, {
                    key: 2,
                    color: "info",
                    variant: "subtle",
                    size: "xs"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.payments.badge.db_only")), 1)
                    ]),
                    _: 1
                  }))
                ])
              ];
            }
          }),
          "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-end gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: row.original.isLocalOnly ? "ph:plug-bold" : "ph:pencil-simple",
                label: row.original.isLocalOnly ? _ctx.$t("admin.payments.table.configure") : "",
                disabled: !unref(hasAdminPerm)("payments:edit"),
                onClick: ($event) => openModal(row.original)
              }, null, _parent2, _scopeId));
              if (!row.original.isLocalOnly) {
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "error",
                  variant: "ghost",
                  size: "xs",
                  icon: "ph:trash",
                  disabled: !unref(hasAdminPerm)("payments:edit"),
                  onClick: ($event) => deleteMethod(Number(row.original.id))
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    size: "xs",
                    icon: row.original.isLocalOnly ? "ph:plug-bold" : "ph:pencil-simple",
                    label: row.original.isLocalOnly ? _ctx.$t("admin.payments.table.configure") : "",
                    disabled: !unref(hasAdminPerm)("payments:edit"),
                    onClick: ($event) => openModal(row.original)
                  }, null, 8, ["icon", "label", "disabled", "onClick"]),
                  !row.original.isLocalOnly ? (openBlock(), createBlock(_component_UButton, {
                    key: 0,
                    color: "error",
                    variant: "ghost",
                    size: "xs",
                    icon: "ph:trash",
                    disabled: !unref(hasAdminPerm)("payments:edit"),
                    onClick: ($event) => deleteMethod(Number(row.original.id))
                  }, null, 8, ["disabled", "onClick"])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(_component_FullScreenModal, {
          modelValue: isModalOpen.value,
          "onUpdate:modelValue": ($event) => isModalOpen.value = $event,
          maxWidth: "sm:max-w-6xl",
          title: form.id ? _ctx.$t("admin.payments.modal.edit_title") : _ctx.$t("admin.payments.modal.new_title")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<form class="space-y-4"${_scopeId}><div class="grid grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.payments.modal.name_label")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: form.name,
                      "onUpdate:modelValue": ($event) => form.name = $event,
                      required: "",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: form.name,
                        "onUpdate:modelValue": ($event) => form.name = $event,
                        required: "",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.payments.modal.code_label")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: form.code,
                      "onUpdate:modelValue": ($event) => form.code = $event,
                      required: "",
                      class: "w-full",
                      disabled: !!form.id
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: form.code,
                        "onUpdate:modelValue": ($event) => form.code = $event,
                        required: "",
                        class: "w-full",
                        disabled: !!form.id
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.payments.modal.icon_label")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: form.iconUrl,
                      "onUpdate:modelValue": ($event) => form.iconUrl = $event,
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: form.iconUrl,
                        "onUpdate:modelValue": ($event) => form.iconUrl = $event,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.payments.modal.language_label")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="space-y-3"${_scopeId2}><p class="text-xs text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.payments.modal.language_help"))}</p><div class="grid grid-cols-2 md:grid-cols-3 gap-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(paymentLocaleOptions.value, (localeOption) => {
                      _push3(`<button type="button" class="${ssrRenderClass([
                        "flex items-center gap-2 rounded-xl border px-3 py-2 text-left transition-colors",
                        isMethodLocaleSelected(localeOption.code) ? "border-primary-500 bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-200" : "border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-[#09090b] text-gray-600 dark:text-gray-300"
                      ])}"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UCheckbox, {
                        "model-value": isMethodLocaleSelected(localeOption.code),
                        "onUpdate:modelValue": (checked) => toggleMethodLocale(localeOption.code, Boolean(checked)),
                        onClick: () => {
                        }
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="min-w-0"${_scopeId2}><div class="text-sm font-medium truncate"${_scopeId2}>${ssrInterpolate(localeOption.label)}</div><div class="text-[11px] text-gray-500 uppercase"${_scopeId2}>${ssrInterpolate(localeOption.code)}</div></div></button>`);
                    });
                    _push3(`<!--]--></div>`);
                    _push3(ssrRenderComponent(_component_UBadge, {
                      color: "neutral",
                      variant: "subtle"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(getMethodLocaleSummary(form.supportedLocales))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(getMethodLocaleSummary(form.supportedLocales)), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "space-y-3" }, [
                        createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(_ctx.$t("admin.payments.modal.language_help")), 1),
                        createVNode("div", { class: "grid grid-cols-2 md:grid-cols-3 gap-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(paymentLocaleOptions.value, (localeOption) => {
                            return openBlock(), createBlock("button", {
                              key: localeOption.code,
                              type: "button",
                              class: [
                                "flex items-center gap-2 rounded-xl border px-3 py-2 text-left transition-colors",
                                isMethodLocaleSelected(localeOption.code) ? "border-primary-500 bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-200" : "border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-[#09090b] text-gray-600 dark:text-gray-300"
                              ],
                              onClick: ($event) => toggleMethodLocale(localeOption.code, !isMethodLocaleSelected(localeOption.code))
                            }, [
                              createVNode(_component_UCheckbox, {
                                "model-value": isMethodLocaleSelected(localeOption.code),
                                "onUpdate:modelValue": (checked) => toggleMethodLocale(localeOption.code, Boolean(checked)),
                                onClick: withModifiers(() => {
                                }, ["stop"])
                              }, null, 8, ["model-value", "onUpdate:modelValue", "onClick"]),
                              createVNode("div", { class: "min-w-0" }, [
                                createVNode("div", { class: "text-sm font-medium truncate" }, toDisplayString(localeOption.label), 1),
                                createVNode("div", { class: "text-[11px] text-gray-500 uppercase" }, toDisplayString(localeOption.code), 1)
                              ])
                            ], 10, ["onClick"]);
                          }), 128))
                        ]),
                        createVNode(_component_UBadge, {
                          color: "neutral",
                          variant: "subtle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getMethodLocaleSummary(form.supportedLocales)), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.payments.modal.info_label")
              }, {
                help: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-xs text-gray-500"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.payments.modal.info_help"))}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(_ctx.$t("admin.payments.modal.info_help")), 1)
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: form.info,
                      "onUpdate:modelValue": ($event) => form.info = $event,
                      class: "h-full w-full font-mono text-sm",
                      rows: 8
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: form.info,
                        "onUpdate:modelValue": ($event) => form.info = $event,
                        class: "h-full w-full font-mono text-sm",
                        rows: 8
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.payments.modal.create_label")
              }, {
                help: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-xs text-gray-500"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.payments.modal.create_help"))}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(_ctx.$t("admin.payments.modal.create_help")), 1)
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: form.create,
                      "onUpdate:modelValue": ($event) => form.create = $event,
                      rows: 12,
                      class: "font-mono text-sm w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: form.create,
                        "onUpdate:modelValue": ($event) => form.create = $event,
                        rows: 12,
                        class: "font-mono text-sm w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.payments.modal.callback_label")
              }, {
                help: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-xs text-gray-500"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.payments.modal.callback_help"))}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(_ctx.$t("admin.payments.modal.callback_help")), 1)
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: form.callback,
                      "onUpdate:modelValue": ($event) => form.callback = $event,
                      rows: 12,
                      class: "font-mono text-sm w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: form.callback,
                        "onUpdate:modelValue": ($event) => form.callback = $event,
                        rows: 12,
                        class: "font-mono text-sm w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.payments.modal.config_label")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: form.configJson,
                      "onUpdate:modelValue": ($event) => form.configJson = $event,
                      rows: 12,
                      class: "font-mono text-sm w-full",
                      onInput: onJsonChange
                    }, null, _parent3, _scopeId2));
                    if (hasJsonError.value) {
                      _push3(`<p class="text-xs text-red-500 mt-1"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.payments.modal.config_invalid"))}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: form.configJson,
                        "onUpdate:modelValue": ($event) => form.configJson = $event,
                        rows: 12,
                        class: "font-mono text-sm w-full",
                        onInput: onJsonChange
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      hasJsonError.value ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-red-500 mt-1"
                      }, toDisplayString(_ctx.$t("admin.payments.modal.config_invalid")), 1)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UCheckbox, {
                      modelValue: form.isActive,
                      "onUpdate:modelValue": ($event) => form.isActive = $event,
                      label: _ctx.$t("admin.payments.modal.enable_label")
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UCheckbox, {
                        modelValue: form.isActive,
                        "onUpdate:modelValue": ($event) => form.isActive = $event,
                        label: _ctx.$t("admin.payments.modal.enable_label")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="flex justify-end gap-3 mt-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                onClick: closeMethodModal
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("admin.payments.modal.cancel"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("admin.payments.modal.cancel")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                class: "bg-purple-600 hover:bg-purple-500 text-white",
                type: "submit",
                loading: isSaving.value,
                disabled: !unref(hasAdminPerm)("payments:edit")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("admin.payments.modal.save"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("admin.payments.modal.save")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></form>`);
            } else {
              return [
                createVNode("form", {
                  onSubmit: withModifiers(saveMethod, ["prevent"]),
                  class: "space-y-4"
                }, [
                  createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.payments.modal.name_label")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: form.name,
                          "onUpdate:modelValue": ($event) => form.name = $event,
                          required: "",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.payments.modal.code_label")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: form.code,
                          "onUpdate:modelValue": ($event) => form.code = $event,
                          required: "",
                          class: "w-full",
                          disabled: !!form.id
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.payments.modal.icon_label")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: form.iconUrl,
                        "onUpdate:modelValue": ($event) => form.iconUrl = $event,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.payments.modal.language_label")
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "space-y-3" }, [
                        createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(_ctx.$t("admin.payments.modal.language_help")), 1),
                        createVNode("div", { class: "grid grid-cols-2 md:grid-cols-3 gap-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(paymentLocaleOptions.value, (localeOption) => {
                            return openBlock(), createBlock("button", {
                              key: localeOption.code,
                              type: "button",
                              class: [
                                "flex items-center gap-2 rounded-xl border px-3 py-2 text-left transition-colors",
                                isMethodLocaleSelected(localeOption.code) ? "border-primary-500 bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-200" : "border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-[#09090b] text-gray-600 dark:text-gray-300"
                              ],
                              onClick: ($event) => toggleMethodLocale(localeOption.code, !isMethodLocaleSelected(localeOption.code))
                            }, [
                              createVNode(_component_UCheckbox, {
                                "model-value": isMethodLocaleSelected(localeOption.code),
                                "onUpdate:modelValue": (checked) => toggleMethodLocale(localeOption.code, Boolean(checked)),
                                onClick: withModifiers(() => {
                                }, ["stop"])
                              }, null, 8, ["model-value", "onUpdate:modelValue", "onClick"]),
                              createVNode("div", { class: "min-w-0" }, [
                                createVNode("div", { class: "text-sm font-medium truncate" }, toDisplayString(localeOption.label), 1),
                                createVNode("div", { class: "text-[11px] text-gray-500 uppercase" }, toDisplayString(localeOption.code), 1)
                              ])
                            ], 10, ["onClick"]);
                          }), 128))
                        ]),
                        createVNode(_component_UBadge, {
                          color: "neutral",
                          variant: "subtle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getMethodLocaleSummary(form.supportedLocales)), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.payments.modal.info_label")
                  }, {
                    help: withCtx(() => [
                      createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(_ctx.$t("admin.payments.modal.info_help")), 1)
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_UTextarea, {
                        modelValue: form.info,
                        "onUpdate:modelValue": ($event) => form.info = $event,
                        class: "h-full w-full font-mono text-sm",
                        rows: 8
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.payments.modal.create_label")
                  }, {
                    help: withCtx(() => [
                      createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(_ctx.$t("admin.payments.modal.create_help")), 1)
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_UTextarea, {
                        modelValue: form.create,
                        "onUpdate:modelValue": ($event) => form.create = $event,
                        rows: 12,
                        class: "font-mono text-sm w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.payments.modal.callback_label")
                  }, {
                    help: withCtx(() => [
                      createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(_ctx.$t("admin.payments.modal.callback_help")), 1)
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_UTextarea, {
                        modelValue: form.callback,
                        "onUpdate:modelValue": ($event) => form.callback = $event,
                        rows: 12,
                        class: "font-mono text-sm w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.payments.modal.config_label")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UTextarea, {
                        modelValue: form.configJson,
                        "onUpdate:modelValue": ($event) => form.configJson = $event,
                        rows: 12,
                        class: "font-mono text-sm w-full",
                        onInput: onJsonChange
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      hasJsonError.value ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-red-500 mt-1"
                      }, toDisplayString(_ctx.$t("admin.payments.modal.config_invalid")), 1)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_UFormField, null, {
                    default: withCtx(() => [
                      createVNode(_component_UCheckbox, {
                        modelValue: form.isActive,
                        "onUpdate:modelValue": ($event) => form.isActive = $event,
                        label: _ctx.$t("admin.payments.modal.enable_label")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex justify-end gap-3 mt-8" }, [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      onClick: closeMethodModal
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("admin.payments.modal.cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UButton, {
                      color: "primary",
                      class: "bg-purple-600 hover:bg-purple-500 text-white",
                      type: "submit",
                      loading: isSaving.value,
                      disabled: !unref(hasAdminPerm)("payments:edit")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("admin.payments.modal.save")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"])
                  ])
                ], 32)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "failures") {
        _push(`<div class="flex min-h-0 flex-1 flex-col"><div class="bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1 min-h-0"><div class="px-4 py-2.5 border-b border-gray-200/70 dark:border-gray-800/60 bg-gray-50/50 dark:bg-[#18181b]/30 flex flex-wrap items-center justify-between gap-2.5 shrink-0">`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: failureSearch.value,
          "onUpdate:modelValue": ($event) => failureSearch.value = $event,
          icon: "ph:magnifying-glass",
          placeholder: "\u641C\u7D22\u8BA2\u5355\u53F7\u3001\u90AE\u7BB1\u3001\u5361BIN\u6216\u5931\u8D25\u539F\u56E0...",
          size: "sm",
          class: "w-full sm:w-72 text-xs"
        }, createSlots({ _: 2 }, [
          failureSearch.value ? {
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
                    onClick: ($event) => failureSearch.value = ""
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
        _push(`<div class="flex items-center gap-2"><span class="text-xs font-mono text-gray-500 dark:text-gray-400">${ssrInterpolate(filteredFailures.value.length)} ${ssrInterpolate(_ctx.$t("admin.common.results"))}</span>`);
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "outline",
          icon: "ph:arrows-clockwise",
          size: "sm",
          loading: failuresPending.value,
          class: "hover:bg-gray-50 dark:hover:bg-gray-800",
          onClick: fetchFailures
        }, null, _parent));
        _push(`</div></div><div class="flex-1 overflow-auto">`);
        _push(ssrRenderComponent(_component_UTable, {
          columns: failuresColumns,
          data: filteredFailures.value,
          loading: failuresPending.value,
          sticky: ""
        }, {
          "id-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-xs text-gray-400 font-mono"${_scopeId}>${ssrInterpolate(String(row.original.id || ""))}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-xs text-gray-400 font-mono" }, toDisplayString(String(row.original.id || "")), 1)
              ];
            }
          }),
          "visitorId-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (row.original.visitorId) {
                _push2(`<span class="text-xs text-gray-500 font-mono cursor-pointer hover:text-primary-400 transition-colors"${ssrRenderAttr("title", String(row.original.visitorId))}${_scopeId}>${ssrInterpolate(String(row.original.visitorId).substring(0, 8))}... </span>`);
              } else {
                _push2(`<span class="text-xs text-gray-400"${_scopeId}>-</span>`);
              }
            } else {
              return [
                row.original.visitorId ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-xs text-gray-500 font-mono cursor-pointer hover:text-primary-400 transition-colors",
                  title: String(row.original.visitorId),
                  onClick: ($event) => copyVisitorId(String(row.original.visitorId))
                }, toDisplayString(String(row.original.visitorId).substring(0, 8)) + "... ", 9, ["title", "onClick"])) : (openBlock(), createBlock("span", {
                  key: 1,
                  class: "text-xs text-gray-400"
                }, "-"))
              ];
            }
          }),
          "orderId-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-xs text-gray-500 dark:text-gray-400 font-mono"${ssrRenderAttr("title", String(row.original.orderId || ""))}${_scopeId}>${ssrInterpolate(String(row.original.orderId || "").substring(0, 8))}... </span>`);
            } else {
              return [
                createVNode("span", {
                  class: "text-xs text-gray-500 dark:text-gray-400 font-mono",
                  title: String(row.original.orderId || "")
                }, toDisplayString(String(row.original.orderId || "").substring(0, 8)) + "... ", 9, ["title"])
              ];
            }
          }),
          "cardBin-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="font-mono text-xs text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(row.original.cardBin || _ctx.$t("admin.payments.failures.n/a"))}</span>`);
            } else {
              return [
                createVNode("span", { class: "font-mono text-xs text-gray-700 dark:text-gray-300" }, toDisplayString(row.original.cardBin || _ctx.$t("admin.payments.failures.n/a")), 1)
              ];
            }
          }),
          "amount-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="font-mono text-xs font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(row.original.amount, row.original.currency))}</span>`);
            } else {
              return [
                createVNode("span", { class: "font-mono text-xs font-medium text-gray-900 dark:text-white" }, toDisplayString(unref(formatCurrencyAmount)(row.original.amount, row.original.currency)), 1)
              ];
            }
          }),
          "reason-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-red-500 dark:text-red-400 text-xs line-clamp-2 max-w-xs"${ssrRenderAttr("title", String(row.original.reason || ""))}${_scopeId}>${ssrInterpolate(row.original.reason)}</span>`);
            } else {
              return [
                createVNode("span", {
                  class: "text-red-500 dark:text-red-400 text-xs line-clamp-2 max-w-xs",
                  title: String(row.original.reason || "")
                }, toDisplayString(row.original.reason), 9, ["title"])
              ];
            }
          }),
          "payMethod-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "subtle",
                size: "xs",
                class: "capitalize"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(row.original.payMethod || _ctx.$t("admin.payments.failures.unknown"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(row.original.payMethod || _ctx.$t("admin.payments.failures.unknown")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UBadge, {
                  color: "neutral",
                  variant: "subtle",
                  size: "xs",
                  class: "capitalize"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(row.original.payMethod || _ctx.$t("admin.payments.failures.unknown")), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          "createdAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-xs font-mono text-gray-500 dark:text-gray-400 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-xs font-mono text-gray-500 dark:text-gray-400 whitespace-nowrap" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
              ];
            }
          }),
          "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:eye",
                onClick: ($event) => viewDetails(row.original)
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    size: "xs",
                    icon: "ph:eye",
                    onClick: ($event) => viewDetails(row.original)
                  }, null, 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(_component_UModal, {
          open: isFailuresModalOpen.value,
          "onUpdate:open": ($event) => isFailuresModalOpen.value = $event,
          ui: { content: "bg-white dark:bg-[#121214] border border-gray-200 dark:border-gray-800 sm:max-w-2xl" }
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-6"${_scopeId}><div class="flex justify-between items-center mb-6 border-b border-gray-200 dark:border-gray-800 pb-4"${_scopeId}><h3 class="text-xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.payments.failures.details"))}</h3>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:x",
                class: "-my-1",
                onClick: closeFailuresModal
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (selectedFailure.value) {
                _push2(`<div class="space-y-4"${_scopeId}><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><span class="block text-xs text-gray-500 mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.payments.failures.id"))}</span><span class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(selectedFailure.value.id)}</span></div><div${_scopeId}><span class="block text-xs text-gray-500 mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.payments.failures.orderId"))}</span><span class="text-gray-900 dark:text-white font-mono text-sm"${_scopeId}>${ssrInterpolate(selectedFailure.value.orderId)}</span></div><div${_scopeId}><span class="block text-xs text-gray-500 mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.payments.failures.amount"))}</span><span class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(selectedFailure.value.amount, selectedFailure.value.currency))}</span></div><div${_scopeId}><span class="block text-xs text-gray-500 mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.payments.failures.cardBin"))}</span><span class="text-gray-900 dark:text-white font-mono"${_scopeId}>${ssrInterpolate(selectedFailure.value.cardBin || _ctx.$t("admin.payments.failures.n/a"))}</span></div><div${_scopeId}><span class="block text-xs text-gray-500 mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.payments.failures.customerEmail"))}</span><span class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(selectedFailure.value.contactEmail || _ctx.$t("admin.payments.failures.n/a"))}</span></div><div${_scopeId}><span class="block text-xs text-gray-500 mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.payments.failures.paymentMethod"))}</span><span class="text-gray-900 dark:text-white capitalize"${_scopeId}>${ssrInterpolate(selectedFailure.value.payMethod || _ctx.$t("admin.payments.failures.unknown"))}</span></div><div${_scopeId}><span class="block text-xs text-gray-500 mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.payments.failures.time"))}</span><span class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(selectedFailure.value.createdAt))}</span></div></div><div class="mt-6"${_scopeId}><span class="block text-xs text-gray-500 mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.payments.failures.failureReason"))}</span><div class="p-3 bg-red-950/30 border border-red-900/50 rounded-lg text-red-400"${_scopeId}>${ssrInterpolate(selectedFailure.value.reason)}</div></div>`);
                if (selectedFailure.value.rawResponse) {
                  _push2(`<div class="mt-4"${_scopeId}><span class="block text-xs text-gray-500 mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.payments.failures.rawGatewayResponse"))}</span><div class="p-3 bg-black border border-gray-200 dark:border-gray-800 rounded-lg overflow-x-auto"${_scopeId}><pre class="text-xs text-gray-500 dark:text-gray-400 m-0"${_scopeId}>${ssrInterpolate(formatJson(selectedFailure.value.rawResponse))}</pre></div></div>`);
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
                createVNode("div", { class: "p-6" }, [
                  createVNode("div", { class: "flex justify-between items-center mb-6 border-b border-gray-200 dark:border-gray-800 pb-4" }, [
                    createVNode("h3", { class: "text-xl font-bold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("admin.payments.failures.details")), 1),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "ph:x",
                      class: "-my-1",
                      onClick: closeFailuresModal
                    })
                  ]),
                  selectedFailure.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "space-y-4"
                  }, [
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode("div", null, [
                        createVNode("span", { class: "block text-xs text-gray-500 mb-1" }, toDisplayString(_ctx.$t("admin.payments.failures.id")), 1),
                        createVNode("span", { class: "text-gray-900 dark:text-white" }, toDisplayString(selectedFailure.value.id), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("span", { class: "block text-xs text-gray-500 mb-1" }, toDisplayString(_ctx.$t("admin.payments.failures.orderId")), 1),
                        createVNode("span", { class: "text-gray-900 dark:text-white font-mono text-sm" }, toDisplayString(selectedFailure.value.orderId), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("span", { class: "block text-xs text-gray-500 mb-1" }, toDisplayString(_ctx.$t("admin.payments.failures.amount")), 1),
                        createVNode("span", { class: "text-gray-900 dark:text-white" }, toDisplayString(unref(formatCurrencyAmount)(selectedFailure.value.amount, selectedFailure.value.currency)), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("span", { class: "block text-xs text-gray-500 mb-1" }, toDisplayString(_ctx.$t("admin.payments.failures.cardBin")), 1),
                        createVNode("span", { class: "text-gray-900 dark:text-white font-mono" }, toDisplayString(selectedFailure.value.cardBin || _ctx.$t("admin.payments.failures.n/a")), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("span", { class: "block text-xs text-gray-500 mb-1" }, toDisplayString(_ctx.$t("admin.payments.failures.customerEmail")), 1),
                        createVNode("span", { class: "text-gray-900 dark:text-white" }, toDisplayString(selectedFailure.value.contactEmail || _ctx.$t("admin.payments.failures.n/a")), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("span", { class: "block text-xs text-gray-500 mb-1" }, toDisplayString(_ctx.$t("admin.payments.failures.paymentMethod")), 1),
                        createVNode("span", { class: "text-gray-900 dark:text-white capitalize" }, toDisplayString(selectedFailure.value.payMethod || _ctx.$t("admin.payments.failures.unknown")), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("span", { class: "block text-xs text-gray-500 mb-1" }, toDisplayString(_ctx.$t("admin.payments.failures.time")), 1),
                        createVNode("span", { class: "text-gray-900 dark:text-white" }, toDisplayString(unref(formatDateTime)(selectedFailure.value.createdAt)), 1)
                      ])
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("span", { class: "block text-xs text-gray-500 mb-2" }, toDisplayString(_ctx.$t("admin.payments.failures.failureReason")), 1),
                      createVNode("div", { class: "p-3 bg-red-950/30 border border-red-900/50 rounded-lg text-red-400" }, toDisplayString(selectedFailure.value.reason), 1)
                    ]),
                    selectedFailure.value.rawResponse ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-4"
                    }, [
                      createVNode("span", { class: "block text-xs text-gray-500 mb-2" }, toDisplayString(_ctx.$t("admin.payments.failures.rawGatewayResponse")), 1),
                      createVNode("div", { class: "p-3 bg-black border border-gray-200 dark:border-gray-800 rounded-lg overflow-x-auto" }, [
                        createVNode("pre", { class: "text-xs text-gray-500 dark:text-gray-400 m-0" }, toDisplayString(formatJson(selectedFailure.value.rawResponse)), 1)
                      ])
                    ])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/payments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=payments-CEsMpNjr.mjs.map
