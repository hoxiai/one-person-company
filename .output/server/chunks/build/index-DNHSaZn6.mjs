import { v as useSettings, f as useI18n, h as useToast, i as useAdminPermissions, D as useRoute, b as _sfc_main$G, l as _sfc_main$B, d as _sfc_main$k, c as _sfc_main$l, e as _sfc_main$g, p as _sfc_main$j, o as _sfc_main$x, z as useFetch, q as _sfc_main$s, a as __nuxt_component_3$1, as as useAppConfig, aC as useComponentUI, ai as useForwardProps, aD as reactivePick, aE as tv, aw as _sfc_main$E, ab as Primitive } from './server.mjs';
import { i as isSettingsTabId, _ as __nuxt_component_2 } from './Nav-DQUTv58w.mjs';
import { _ as _sfc_main$c } from './Switch-fZeXww_c.mjs';
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, computed, openBlock, createBlock, Fragment, renderList, withModifiers, reactive, watchEffect, isRef, createCommentVNode, useSlots, renderSlot, normalizeProps, guardReactiveProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$d } from './SelectMenu-DOh79w0e.mjs';
import { _ as _sfc_main$e } from './Checkbox-BmTSvkxP.mjs';
import { useSortable } from '@vueuse/integrations/useSortable';
import { _ as __nuxt_component_7$1 } from './FullScreenModal-D08055Gv.mjs';
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
import './virtualizer-BxqhLCyb.mjs';
import './arrays-DNHUHQBd.mjs';
import './utils-DD3u_B8M.mjs';
import './isValueEqualOrExist-BVczPdKj.mjs';
import './RovingFocusItem-DyHBwisL.mjs';

var BaseSeparator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "BaseSeparator",
  props: {
    orientation: {
      type: String,
      required: false,
      default: "horizontal"
    },
    decorative: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const ORIENTATIONS = ["horizontal", "vertical"];
    function isValidOrientation(orientation) {
      return ORIENTATIONS.includes(orientation);
    }
    const computedOrientation = computed(() => isValidOrientation(props.orientation) ? props.orientation : "horizontal");
    const ariaOrientation = computed(() => computedOrientation.value === "vertical" ? props.orientation : void 0);
    const semanticProps = computed(() => props.decorative ? { role: "none" } : {
      "aria-orientation": ariaOrientation.value,
      "role": "separator"
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps({
        as: _ctx.as,
        "as-child": _ctx.asChild,
        "data-orientation": computedOrientation.value
      }, semanticProps.value), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "as",
        "as-child",
        "data-orientation"
      ]);
    };
  }
});
var BaseSeparator_default = BaseSeparator_vue_vue_type_script_setup_true_lang_default;
var Separator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "Separator",
  props: {
    orientation: {
      type: String,
      required: false,
      default: "horizontal"
    },
    decorative: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(BaseSeparator_default, normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var Separator_default = Separator_vue_vue_type_script_setup_true_lang_default;
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "GeneralTab",
  __ssrInlineRender: true,
  props: {
    form: {}
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const toast = useToast();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const logoInputRef = ref(null);
    const isUploadingLogo = ref(false);
    const allLocales = [
      { code: "en", name: "English" },
      { code: "zh", name: "\u7B80\u4F53\u4E2D\u6587" },
      { code: "zh-TW", name: "\u7E41\u9AD4\u4E2D\u6587" },
      { code: "ja", name: "\u65E5\u672C\u8A9E" },
      { code: "ko", name: "\uD55C\uAD6D\uC5B4" },
      { code: "fr", name: "Fran\xE7ais" },
      { code: "de", name: "Deutsch" },
      { code: "es", name: "Espa\xF1ol" },
      { code: "ru", name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" },
      { code: "pt", name: "Portugu\xEAs" },
      { code: "ar", name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" },
      { code: "hi", name: "\u0939\u093F\u0928\u094D\u0926\u0940" }
    ];
    const supportedLocales = computed(() => {
      const codes = String(props.form.supported_locales || "en").split(",").map((code) => code.trim()).filter(Boolean);
      return codes.map((code) => {
        return allLocales.find((locale) => locale.code === code) || { code, name: code.toUpperCase() };
      });
    });
    const defaultLocale = computed(() => String(props.form.default_locale || "en"));
    const activeLocale = ref(defaultLocale.value);
    const getSiteNameKey = (localeCode) => {
      return localeCode === "en" ? "site_name" : `${localeCode.replaceAll("-", "_")}_site_name`;
    };
    watch(
      supportedLocales,
      (locales) => {
        var _a;
        if (!locales.some((locale) => locale.code === activeLocale.value)) {
          activeLocale.value = locales.some((locale) => locale.code === defaultLocale.value) ? defaultLocale.value : ((_a = locales[0]) == null ? void 0 : _a.code) || "en";
        }
        for (const locale of locales) {
          const key = getSiteNameKey(locale.code);
          if (!(key in props.form)) props.form[key] = "";
        }
      },
      { immediate: true, deep: true }
    );
    const uploadLogo = async (event) => {
      var _a;
      const input = event.target;
      if (!input.files || input.files.length === 0) return;
      const file = input.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("file", file);
      isUploadingLogo.value = true;
      try {
        const res = await $fetch("/api/admin/upload", {
          method: "POST",
          body: formData
        });
        if (res && res.url) {
          props.form.site_logo = res.url;
          toast.add({
            title: t("admin.settings.general.toast_success"),
            description: t("admin.settings.general.toast_logo_uploaded"),
            color: "success"
          });
        }
      } catch (error) {
        toast.add({
          title: t("admin.settings.general.toast_error"),
          description: ((_a = error.data) == null ? void 0 : _a.message) || t("admin.settings.general.toast_upload_failed"),
          color: "error"
        });
      } finally {
        isUploadingLogo.value = false;
        if (logoInputRef.value) {
          logoInputRef.value.value = "";
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_UTextarea = _sfc_main$g;
      const _component_UButton = _sfc_main$B;
      const _component_USwitch = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-[#121214] border border-gray-200 dark:border-gray-800/60 shadow-xl rounded-2xl overflow-hidden" }, _attrs))}><div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800/60 bg-gray-100 dark:bg-gray-900/20 flex items-center gap-3"><div class="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:browser-fill",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><h2 class="text-lg font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.general.title"))}</h2></div><div class="p-6 space-y-6">`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.general.site_name"),
        description: _ctx.$t("admin.settings.general.site_name_locale_desc", { locale: activeLocale.value })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-3 flex gap-2 overflow-x-auto pb-1"${_scopeId}><!--[-->`);
            ssrRenderList(supportedLocales.value, (localeOption) => {
              _push2(`<button type="button" class="${ssrRenderClass([
                "flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                activeLocale.value === localeOption.code ? "border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white"
              ])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: localeOption.code === defaultLocale.value ? "ph:star-fill" : "ph:translate",
                class: ["h-4 w-4", localeOption.code === defaultLocale.value ? "text-yellow-500" : ""]
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(localeOption.name)} (${ssrInterpolate(localeOption.code)}) </button>`);
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.form[getSiteNameKey(activeLocale.value)],
              "onUpdate:modelValue": ($event) => __props.form[getSiteNameKey(activeLocale.value)] = $event,
              placeholder: "APay",
              icon: "ph:text-t",
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-3 flex gap-2 overflow-x-auto pb-1" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(supportedLocales.value, (localeOption) => {
                  return openBlock(), createBlock("button", {
                    key: localeOption.code,
                    type: "button",
                    class: [
                      "flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                      activeLocale.value === localeOption.code ? "border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white"
                    ],
                    onClick: ($event) => activeLocale.value = localeOption.code
                  }, [
                    createVNode(_component_UIcon, {
                      name: localeOption.code === defaultLocale.value ? "ph:star-fill" : "ph:translate",
                      class: ["h-4 w-4", localeOption.code === defaultLocale.value ? "text-yellow-500" : ""]
                    }, null, 8, ["name", "class"]),
                    createTextVNode(" " + toDisplayString(localeOption.name) + " (" + toDisplayString(localeOption.code) + ") ", 1)
                  ], 10, ["onClick"]);
                }), 128))
              ]),
              createVNode(_component_UInput, {
                modelValue: __props.form[getSiteNameKey(activeLocale.value)],
                "onUpdate:modelValue": ($event) => __props.form[getSiteNameKey(activeLocale.value)] = $event,
                placeholder: "APay",
                icon: "ph:text-t",
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.general.site_url"),
        description: _ctx.$t("admin.settings.general.site_url_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.form.site_url,
              "onUpdate:modelValue": ($event) => __props.form.site_url = $event,
              placeholder: "https://apay.run",
              icon: "ph:globe",
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: __props.form.site_url,
                "onUpdate:modelValue": ($event) => __props.form.site_url = $event,
                placeholder: "https://apay.run",
                icon: "ph:globe",
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.general.site_logo"),
        description: _ctx.$t("admin.settings.general.site_logo_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UTextarea, {
              modelValue: __props.form.site_logo,
              "onUpdate:modelValue": ($event) => __props.form.site_logo = $event,
              placeholder: "Enter the URL to your logo or SVG icon",
              icon: "ph:image",
              size: "md",
              class: "flex-1",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
            _push2(`<input type="file" class="hidden" accept="image/*"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              icon: "ph:upload-simple",
              loading: isUploadingLogo.value,
              disabled: !unref(hasAdminPerm)("settings:edit"),
              onClick: () => {
                var _a;
                return (_a = logoInputRef.value) == null ? void 0 : _a.click();
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.settings.general.upload"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.settings.general.upload")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3 w-full" }, [
                createVNode(_component_UTextarea, {
                  modelValue: __props.form.site_logo,
                  "onUpdate:modelValue": ($event) => __props.form.site_logo = $event,
                  placeholder: "Enter the URL to your logo or SVG icon",
                  icon: "ph:image",
                  size: "md",
                  class: "flex-1",
                  ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("input", {
                  type: "file",
                  ref_key: "logoInputRef",
                  ref: logoInputRef,
                  class: "hidden",
                  accept: "image/*",
                  onChange: uploadLogo
                }, null, 544),
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  icon: "ph:upload-simple",
                  loading: isUploadingLogo.value,
                  disabled: !unref(hasAdminPerm)("settings:edit"),
                  onClick: () => {
                    var _a;
                    return (_a = logoInputRef.value) == null ? void 0 : _a.click();
                  }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("admin.settings.general.upload")), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled", "onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.general.contact_email"),
        description: _ctx.$t("admin.settings.general.contact_email_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.form.support_email,
              "onUpdate:modelValue": ($event) => __props.form.support_email = $event,
              type: "email",
              placeholder: "support@example.com",
              icon: "ph:envelope",
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: __props.form.support_email,
                "onUpdate:modelValue": ($event) => __props.form.support_email = $event,
                type: "email",
                placeholder: "support@example.com",
                icon: "ph:envelope",
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.general.site_notice"),
        description: _ctx.$t("admin.settings.general.site_notice_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTextarea, {
              modelValue: __props.form.site_notice,
              "onUpdate:modelValue": ($event) => __props.form.site_notice = $event,
              rows: 2,
              placeholder: "Welcome to our new store!",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTextarea, {
                modelValue: __props.form.site_notice,
                "onUpdate:modelValue": ($event) => __props.form.site_notice = $event,
                rows: 2,
                placeholder: "Welcome to our new store!",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.general.footer_copyright"),
        description: _ctx.$t("admin.settings.general.footer_copyright_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTextarea, {
              modelValue: __props.form.footer_copyright,
              "onUpdate:modelValue": ($event) => __props.form.footer_copyright = $event,
              rows: 2,
              placeholder: "\xA9 2026 APay.run. All rights reserved.",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTextarea, {
                modelValue: __props.form.footer_copyright,
                "onUpdate:modelValue": ($event) => __props.form.footer_copyright = $event,
                rows: 2,
                placeholder: "\xA9 2026 APay.run. All rights reserved.",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.general.disable_multi_device_login"),
        description: _ctx.$t("admin.settings.general.disable_multi_device_login_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_USwitch, {
              modelValue: __props.form.disable_multi_device_login,
              "onUpdate:modelValue": ($event) => __props.form.disable_multi_device_login = $event
            }, null, _parent2, _scopeId));
            if (__props.form.disable_multi_device_login) {
              _push2(`<span class="text-sm text-orange-600 dark:text-orange-400"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.settings.general.multi_device_login_warning"))}</span>`);
            } else {
              _push2(`<span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.settings.general.multi_device_login_allowed"))}</span>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode(_component_USwitch, {
                  modelValue: __props.form.disable_multi_device_login,
                  "onUpdate:modelValue": ($event) => __props.form.disable_multi_device_login = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                __props.form.disable_multi_device_login ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-sm text-orange-600 dark:text-orange-400"
                }, toDisplayString(_ctx.$t("admin.settings.general.multi_device_login_warning")), 1)) : (openBlock(), createBlock("span", {
                  key: 1,
                  class: "text-sm text-gray-500 dark:text-gray-400"
                }, toDisplayString(_ctx.$t("admin.settings.general.multi_device_login_allowed")), 1))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/settings/GeneralTab.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$b, { __name: "AdminSettingsGeneralTab" });
const theme = {
  "slots": {
    "root": "flex items-center align-center text-center",
    "border": "",
    "container": "font-medium text-default flex",
    "icon": "shrink-0 size-5",
    "avatar": "shrink-0",
    "avatarSize": "2xs",
    "label": "text-sm"
  },
  "variants": {
    "color": {
      "primary": {
        "border": "border-primary"
      },
      "secondary": {
        "border": "border-secondary"
      },
      "success": {
        "border": "border-success"
      },
      "info": {
        "border": "border-info"
      },
      "warning": {
        "border": "border-warning"
      },
      "error": {
        "border": "border-error"
      },
      "neutral": {
        "border": "border-default"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "w-full flex-row",
        "border": "w-full",
        "container": "mx-3 whitespace-nowrap"
      },
      "vertical": {
        "root": "h-full flex-col",
        "border": "h-full",
        "container": "my-2"
      }
    },
    "size": {
      "xs": "",
      "sm": "",
      "md": "",
      "lg": "",
      "xl": ""
    },
    "type": {
      "solid": {
        "border": "border-solid"
      },
      "dashed": {
        "border": "border-dashed"
      },
      "dotted": {
        "border": "border-dotted"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": {
        "border": "border-t"
      }
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": {
        "border": "border-t-[2px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": {
        "border": "border-t-[3px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": {
        "border": "border-t-[4px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": {
        "border": "border-t-[5px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": {
        "border": "border-s"
      }
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": {
        "border": "border-s-[2px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": {
        "border": "border-s-[3px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": {
        "border": "border-s-[4px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": {
        "border": "border-s-[5px]"
      }
    }
  ],
  "defaultVariants": {
    "color": "neutral",
    "size": "xs",
    "type": "solid"
  }
};
const _sfc_main$a = {
  __name: "USeparator",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    label: { type: String, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    color: { type: null, required: false },
    size: { type: null, required: false },
    type: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    decorative: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("separator", props);
    const rootProps = useForwardProps(reactivePick(props, "as", "decorative", "orientation"));
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.separator) || {} })({
        color: props.color,
        orientation: props.orientation,
        size: props.size,
        type: props.type
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Separator_default), mergeProps(unref(rootProps), {
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = unref(uiProp)) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div data-slot="border" class="${ssrRenderClass(ui.value.border({ class: (_a2 = unref(uiProp)) == null ? void 0 : _a2.border }))}"${_scopeId}></div>`);
            if (__props.label || __props.icon || __props.avatar || !!slots.default) {
              _push2(`<!--[--><div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: (_b = unref(uiProp)) == null ? void 0 : _b.container }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, () => {
                var _a3, _b2, _c2, _d2;
                if (__props.label) {
                  _push2(`<span data-slot="label" class="${ssrRenderClass(ui.value.label({ class: (_a3 = unref(uiProp)) == null ? void 0 : _a3.label }))}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
                } else if (__props.icon) {
                  _push2(ssrRenderComponent(_sfc_main$G, {
                    name: __props.icon,
                    "data-slot": "icon",
                    class: ui.value.icon({ class: (_b2 = unref(uiProp)) == null ? void 0 : _b2.icon })
                  }, null, _parent2, _scopeId));
                } else if (__props.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$E, mergeProps({
                    size: ((_c2 = unref(uiProp)) == null ? void 0 : _c2.avatarSize) || ui.value.avatarSize()
                  }, __props.avatar, {
                    "data-slot": "avatar",
                    class: ui.value.avatar({ class: (_d2 = unref(uiProp)) == null ? void 0 : _d2.avatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div><div data-slot="border" class="${ssrRenderClass(ui.value.border({ class: (_c = unref(uiProp)) == null ? void 0 : _c.border }))}"${_scopeId}></div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                "data-slot": "border",
                class: ui.value.border({ class: (_d = unref(uiProp)) == null ? void 0 : _d.border })
              }, null, 2),
              __props.label || __props.icon || __props.avatar || !!slots.default ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("div", {
                  "data-slot": "container",
                  class: ui.value.container({ class: (_e = unref(uiProp)) == null ? void 0 : _e.container })
                }, [
                  renderSlot(_ctx.$slots, "default", { ui: ui.value }, () => {
                    var _a3, _b2, _c2, _d2;
                    return [
                      __props.label ? (openBlock(), createBlock("span", {
                        key: 0,
                        "data-slot": "label",
                        class: ui.value.label({ class: (_a3 = unref(uiProp)) == null ? void 0 : _a3.label })
                      }, toDisplayString(__props.label), 3)) : __props.icon ? (openBlock(), createBlock(_sfc_main$G, {
                        key: 1,
                        name: __props.icon,
                        "data-slot": "icon",
                        class: ui.value.icon({ class: (_b2 = unref(uiProp)) == null ? void 0 : _b2.icon })
                      }, null, 8, ["name", "class"])) : __props.avatar ? (openBlock(), createBlock(_sfc_main$E, mergeProps({
                        key: 2,
                        size: ((_c2 = unref(uiProp)) == null ? void 0 : _c2.avatarSize) || ui.value.avatarSize()
                      }, __props.avatar, {
                        "data-slot": "avatar",
                        class: ui.value.avatar({ class: (_d2 = unref(uiProp)) == null ? void 0 : _d2.avatar })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                    ];
                  })
                ], 2),
                createVNode("div", {
                  "data-slot": "border",
                  class: ui.value.border({ class: (_f = unref(uiProp)) == null ? void 0 : _f.border })
                }, null, 2)
              ], 64)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "LocalizationTab",
  __ssrInlineRender: true,
  props: {
    form: {}
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    watch(() => props.form.timezone, (val) => {
      if (!val) {
        props.form.timezone = detectedTimezone;
      }
    }, { immediate: true });
    const baseLocales = [
      { code: "en", label: "English" },
      { code: "zh", label: "\u7B80\u4F53\u4E2D\u6587" },
      { code: "zh-TW", label: "\u7E41\u9AD4\u4E2D\u6587" },
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
    const availableLocales = ref([...baseLocales]);
    const selectedLocales = computed(() => {
      if (!props.form.supported_locales) return [];
      return props.form.supported_locales.split(",").map((l) => l.trim()).filter(Boolean);
    });
    const selectedLocaleOptions = computed(() => {
      return availableLocales.value.filter(
        (l) => selectedLocales.value.includes(l.code)
      );
    });
    const isLocaleSelected = (code) => {
      return selectedLocales.value.includes(code);
    };
    const toggleLocale = (code, checked) => {
      let current = [...selectedLocales.value];
      if (checked && !current.includes(code)) {
        current.push(code);
      } else if (!checked && current.includes(code)) {
        current = current.filter((c) => c !== code);
      }
      const defaultLocale = props.form.default_locale || "en";
      if (current.length === 0 || !current.includes(defaultLocale) && code === defaultLocale && !checked) {
        if (!current.includes(defaultLocale)) {
          current.push(defaultLocale);
        }
      }
      const visualOrderSelected = availableLocales.value.filter((l) => current.includes(l.code)).map((l) => l.code);
      props.form.supported_locales = visualOrderSelected.join(",");
    };
    let hasInitializedOrder = false;
    watch(
      () => props.form.supported_locales,
      (newVal) => {
        if (newVal && !hasInitializedOrder) {
          const selected = newVal.split(",").map((l) => l.trim()).filter(Boolean);
          if (selected.length > 0) {
            const sorted = [];
            const unselected = [...baseLocales];
            selected.forEach((code) => {
              const idx = unselected.findIndex((l) => l.code === code);
              if (idx !== -1) {
                const item = unselected[idx];
                if (item) sorted.push(item);
                unselected.splice(idx, 1);
              }
            });
            availableLocales.value = [...sorted, ...unselected];
          }
          hasInitializedOrder = true;
        }
      },
      { immediate: true }
    );
    useSortable(".locales-grid-container", availableLocales, {
      animation: 150,
      handle: ".drag-handle",
      onUpdate: () => {
        const newSelectedOrder = availableLocales.value.filter((l) => isLocaleSelected(l.code)).map((l) => l.code);
        props.form.supported_locales = newSelectedOrder.join(",");
      }
    });
    const availableCurrencies = [
      { code: "USD", label: "US Dollar ($)" },
      { code: "EUR", label: "Euro (\u20AC)" },
      { code: "GBP", label: "British Pound (\xA3)" },
      { code: "JPY", label: "Japanese Yen (\xA5)" },
      { code: "CNY", label: "Chinese Yuan (\xA5)" },
      { code: "AUD", label: "Australian Dollar (A$)" },
      { code: "CAD", label: "Canadian Dollar (C$)" },
      { code: "SGD", label: "Singapore Dollar (S$)" },
      { code: "HKD", label: "Hong Kong Dollar (HK$)" },
      { code: "RUB", label: "Russian Ruble (\u20BD)" }
    ];
    const parseBindings = () => {
      try {
        const parsed = JSON.parse(props.form.locale_currency_bindings || "{}");
        return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
      } catch {
        return {};
      }
    };
    const baseCurrency = computed(() => String(props.form.currency || "USD").trim().toUpperCase() || "USD");
    const hasLocaleBinding = (locale) => Boolean(parseBindings()[locale]);
    const getLocaleBinding = (locale) => {
      const binding = parseBindings()[locale];
      const currency = String((binding == null ? void 0 : binding.currency) || baseCurrency.value).trim().toUpperCase();
      const rate = currency === baseCurrency.value ? 1 : Number((binding == null ? void 0 : binding.rate) || 1);
      return { currency, rate: Number.isFinite(rate) && rate > 0 ? rate : 1 };
    };
    const updateLocaleBinding = (locale, field, value) => {
      const bindings = parseBindings();
      const current = getLocaleBinding(locale);
      if (field === "currency") {
        current.currency = String(value || baseCurrency.value).trim().toUpperCase();
        if (current.currency === baseCurrency.value) current.rate = 1;
      } else {
        const rate = Number(value);
        current.rate = Number.isFinite(rate) && rate > 0 ? rate : 1;
      }
      bindings[locale] = current;
      props.form.locale_currency_bindings = JSON.stringify(bindings);
    };
    const toggleLocaleBinding = (locale, enabled) => {
      const bindings = parseBindings();
      if (enabled) {
        bindings[locale] = { currency: baseCurrency.value, rate: 1 };
      } else {
        delete bindings[locale];
      }
      props.form.locale_currency_bindings = JSON.stringify(bindings);
    };
    watch([selectedLocales, baseCurrency], ([locales]) => {
      const bindings = parseBindings();
      const next = {};
      for (const locale of locales) {
        const binding = bindings[locale];
        if (!binding) continue;
        const currency = String(binding.currency || baseCurrency.value).trim().toUpperCase();
        const rate = currency === baseCurrency.value ? 1 : Number((binding == null ? void 0 : binding.rate) || 1);
        next[locale] = {
          currency,
          rate: Number.isFinite(rate) && rate > 0 ? rate : 1
        };
      }
      props.form.locale_currency_bindings = JSON.stringify(next);
    }, { immediate: true });
    const tzData = [
      { value: "UTC", labelKey: "admin.settings.localization.timezone_zones.UTC", offset: "UTC" },
      { value: "America/New_York", labelKey: "admin.settings.localization.timezone_zones.America_New_York", offset: "-05:00" },
      { value: "America/Chicago", labelKey: "admin.settings.localization.timezone_zones.America_Chicago", offset: "-06:00" },
      { value: "America/Denver", labelKey: "admin.settings.localization.timezone_zones.America_Denver", offset: "-07:00" },
      { value: "America/Los_Angeles", labelKey: "admin.settings.localization.timezone_zones.America_Los_Angeles", offset: "-08:00" },
      { value: "America/Anchorage", labelKey: "admin.settings.localization.timezone_zones.America_Anchorage", offset: "-09:00" },
      { value: "America/Phoenix", labelKey: "admin.settings.localization.timezone_zones.America_Phoenix", offset: "-07:00" },
      { value: "America/Toronto", labelKey: "admin.settings.localization.timezone_zones.America_Toronto", offset: "-05:00" },
      { value: "America/Vancouver", labelKey: "admin.settings.localization.timezone_zones.America_Vancouver", offset: "-08:00" },
      { value: "America/Sao_Paulo", labelKey: "admin.settings.localization.timezone_zones.America_Sao_Paulo", offset: "-03:00" },
      { value: "America/Argentina/Buenos_Aires", labelKey: "admin.settings.localization.timezone_zones.America_Argentina_Buenos_Aires", offset: "-03:00" },
      { value: "America/Mexico_City", labelKey: "admin.settings.localization.timezone_zones.America_Mexico_City", offset: "-06:00" },
      { value: "America/Halifax", labelKey: "admin.settings.localization.timezone_zones.America_Halifax", offset: "-04:00" },
      { value: "America/St_Johns", labelKey: "admin.settings.localization.timezone_zones.America_St_Johns", offset: "-03:30" },
      { value: "Europe/London", labelKey: "admin.settings.localization.timezone_zones.Europe_London", offset: "+00:00" },
      { value: "Europe/Paris", labelKey: "admin.settings.localization.timezone_zones.Europe_Paris", offset: "+01:00" },
      { value: "Europe/Berlin", labelKey: "admin.settings.localization.timezone_zones.Europe_Berlin", offset: "+01:00" },
      { value: "Europe/Madrid", labelKey: "admin.settings.localization.timezone_zones.Europe_Madrid", offset: "+01:00" },
      { value: "Europe/Rome", labelKey: "admin.settings.localization.timezone_zones.Europe_Rome", offset: "+01:00" },
      { value: "Europe/Amsterdam", labelKey: "admin.settings.localization.timezone_zones.Europe_Amsterdam", offset: "+01:00" },
      { value: "Europe/Stockholm", labelKey: "admin.settings.localization.timezone_zones.Europe_Stockholm", offset: "+01:00" },
      { value: "Europe/Zurich", labelKey: "admin.settings.localization.timezone_zones.Europe_Zurich", offset: "+01:00" },
      { value: "Europe/Prague", labelKey: "admin.settings.localization.timezone_zones.Europe_Prague", offset: "+01:00" },
      { value: "Europe/Warsaw", labelKey: "admin.settings.localization.timezone_zones.Europe_Warsaw", offset: "+01:00" },
      { value: "Europe/Moscow", labelKey: "admin.settings.localization.timezone_zones.Europe_Moscow", offset: "+03:00" },
      { value: "Europe/Istanbul", labelKey: "admin.settings.localization.timezone_zones.Europe_Istanbul", offset: "+03:00" },
      { value: "Europe/Helsinki", labelKey: "admin.settings.localization.timezone_zones.Europe_Helsinki", offset: "+02:00" },
      { value: "Europe/Athens", labelKey: "admin.settings.localization.timezone_zones.Europe_Athens", offset: "+02:00" },
      { value: "Asia/Shanghai", labelKey: "admin.settings.localization.timezone_zones.Asia_Shanghai", offset: "+08:00" },
      { value: "Asia/Tokyo", labelKey: "admin.settings.localization.timezone_zones.Asia_Tokyo", offset: "+09:00" },
      { value: "Asia/Seoul", labelKey: "admin.settings.localization.timezone_zones.Asia_Seoul", offset: "+09:00" },
      { value: "Asia/Singapore", labelKey: "admin.settings.localization.timezone_zones.Asia_Singapore", offset: "+08:00" },
      { value: "Asia/Hong_Kong", labelKey: "admin.settings.localization.timezone_zones.Asia_Hong_Kong", offset: "+08:00" },
      { value: "Asia/Taipei", labelKey: "admin.settings.localization.timezone_zones.Asia_Taipei", offset: "+08:00" },
      { value: "Asia/Kolkata", labelKey: "admin.settings.localization.timezone_zones.Asia_Kolkata", offset: "+05:30" },
      { value: "Asia/Dubai", labelKey: "admin.settings.localization.timezone_zones.Asia_Dubai", offset: "+04:00" },
      { value: "Asia/Bangkok", labelKey: "admin.settings.localization.timezone_zones.Asia_Bangkok", offset: "+07:00" },
      { value: "Asia/Jakarta", labelKey: "admin.settings.localization.timezone_zones.Asia_Jakarta", offset: "+07:00" },
      { value: "Asia/Manila", labelKey: "admin.settings.localization.timezone_zones.Asia_Manila", offset: "+08:00" },
      { value: "Asia/Kuala_Lumpur", labelKey: "admin.settings.localization.timezone_zones.Asia_Kuala_Lumpur", offset: "+08:00" },
      { value: "Asia/Tashkent", labelKey: "admin.settings.localization.timezone_zones.Asia_Tashkent", offset: "+05:00" },
      { value: "Asia/Karachi", labelKey: "admin.settings.localization.timezone_zones.Asia_Karachi", offset: "+05:00" },
      { value: "Asia/Dhaka", labelKey: "admin.settings.localization.timezone_zones.Asia_Dhaka", offset: "+06:00" },
      { value: "Australia/Sydney", labelKey: "admin.settings.localization.timezone_zones.Australia_Sydney", offset: "+10:00" },
      { value: "Australia/Melbourne", labelKey: "admin.settings.localization.timezone_zones.Australia_Melbourne", offset: "+10:00" },
      { value: "Australia/Perth", labelKey: "admin.settings.localization.timezone_zones.Australia_Perth", offset: "+08:00" },
      { value: "Australia/Brisbane", labelKey: "admin.settings.localization.timezone_zones.Australia_Brisbane", offset: "+10:00" },
      { value: "Australia/Adelaide", labelKey: "admin.settings.localization.timezone_zones.Australia_Adelaide", offset: "+09:30" },
      { value: "Pacific/Auckland", labelKey: "admin.settings.localization.timezone_zones.Pacific_Auckland", offset: "+12:00" },
      { value: "Pacific/Fiji", labelKey: "admin.settings.localization.timezone_zones.Pacific_Fiji", offset: "+12:00" },
      { value: "Pacific/Honolulu", labelKey: "admin.settings.localization.timezone_zones.Pacific_Honolulu", offset: "-10:00" },
      { value: "Pacific/Guam", labelKey: "admin.settings.localization.timezone_zones.Pacific_Guam", offset: "+10:00" },
      { value: "Africa/Cairo", labelKey: "admin.settings.localization.timezone_zones.Africa_Cairo", offset: "+02:00" },
      { value: "Africa/Johannesburg", labelKey: "admin.settings.localization.timezone_zones.Africa_Johannesburg", offset: "+02:00" },
      { value: "Africa/Lagos", labelKey: "admin.settings.localization.timezone_zones.Africa_Lagos", offset: "+01:00" },
      { value: "Africa/Nairobi", labelKey: "admin.settings.localization.timezone_zones.Africa_Nairobi", offset: "+03:00" }
    ];
    const timezoneOptions = computed(
      () => tzData.map((item) => ({
        ...item,
        label: t(item.labelKey)
      }))
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_UFormField = _sfc_main$l;
      const _component_USelectMenu = _sfc_main$d;
      const _component_USeparator = _sfc_main$a;
      const _component_UCheckbox = _sfc_main$e;
      const _component_UInput = _sfc_main$k;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-[#121214] border border-gray-200 dark:border-gray-800/60 shadow-xl rounded-2xl overflow-hidden" }, _attrs))}><div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800/60 bg-gray-100 dark:bg-gray-900/20 flex items-center gap-3"><div class="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:translate-fill",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><h2 class="text-lg font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.localization.title"))}</h2></div><div class="p-6 space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6">`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.localization.default_locale"),
        description: _ctx.$t("admin.settings.localization.default_locale_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_USelectMenu, {
              modelValue: __props.form.default_locale,
              "onUpdate:modelValue": ($event) => __props.form.default_locale = $event,
              items: selectedLocaleOptions.value,
              "value-key": "code",
              placeholder: "Select default language",
              icon: "ph:flag",
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_USelectMenu, {
                modelValue: __props.form.default_locale,
                "onUpdate:modelValue": ($event) => __props.form.default_locale = $event,
                items: selectedLocaleOptions.value,
                "value-key": "code",
                placeholder: "Select default language",
                icon: "ph:flag",
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.localization.settlement_currency"),
        description: _ctx.$t("admin.settings.localization.settlement_currency_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_USelectMenu, {
              modelValue: __props.form.currency,
              "onUpdate:modelValue": ($event) => __props.form.currency = $event,
              items: availableCurrencies,
              "value-key": "code",
              placeholder: "Select or type currency",
              icon: "ph:currency-circle-dollar",
              size: "md",
              class: "w-full",
              "create-item": "",
              "search-input": { placeholder: "Search or type currency..." },
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_USelectMenu, {
                modelValue: __props.form.currency,
                "onUpdate:modelValue": ($event) => __props.form.currency = $event,
                items: availableCurrencies,
                "value-key": "code",
                placeholder: "Select or type currency",
                icon: "ph:currency-circle-dollar",
                size: "md",
                class: "w-full",
                "create-item": "",
                "search-input": { placeholder: "Search or type currency..." },
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.localization.timezone"),
        description: _ctx.$t("admin.settings.localization.timezone_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_USelectMenu, {
              modelValue: __props.form.timezone,
              "onUpdate:modelValue": ($event) => __props.form.timezone = $event,
              items: timezoneOptions.value,
              "value-key": "value",
              placeholder: "Select timezone",
              icon: "ph:clock",
              size: "md",
              class: "w-full max-w-lg",
              "search-input": { placeholder: "Search timezone..." },
              "create-item": "",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, {
              "item-leading": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-xs text-gray-500 dark:text-gray-400 font-mono w-16 shrink-0"${_scopeId2}>${ssrInterpolate(item.offset)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400 font-mono w-16 shrink-0" }, toDisplayString(item.offset), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_USelectMenu, {
                modelValue: __props.form.timezone,
                "onUpdate:modelValue": ($event) => __props.form.timezone = $event,
                items: timezoneOptions.value,
                "value-key": "value",
                placeholder: "Select timezone",
                icon: "ph:clock",
                size: "md",
                class: "w-full max-w-lg",
                "search-input": { placeholder: "Search timezone..." },
                "create-item": "",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, {
                "item-leading": withCtx(({ item }) => [
                  createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400 font-mono w-16 shrink-0" }, toDisplayString(item.offset), 1)
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_USeparator, {
        label: _ctx.$t("admin.settings.localization.supported_languages"),
        class: "py-4"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        description: _ctx.$t("admin.settings.localization.supported_languages_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="locales-grid-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2"${_scopeId}><!--[-->`);
            ssrRenderList(availableLocales.value, (locale) => {
              _push2(`<div class="flex items-center gap-2 p-3 rounded-xl border border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-[#09090b] hover:border-gray-300 dark:hover:border-gray-700 transition-colors cursor-pointer group"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:dots-six-vertical",
                class: "w-5 h-5 text-gray-600 hover:text-gray-400 cursor-move drag-handle flex-shrink-0",
                onClick: () => {
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UCheckbox, {
                "model-value": isLocaleSelected(locale.code),
                "onUpdate:modelValue": (checked) => toggleLocale(locale.code, checked),
                onClick: () => {
                },
                ui: { base: "bg-white dark:bg-[#121214]" }
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex flex-col overflow-hidden"${_scopeId}><span class="text-sm font-medium text-gray-700 dark:text-gray-200 truncate"${_scopeId}>${ssrInterpolate(locale.label)}</span><span class="text-xs text-gray-500 uppercase"${_scopeId}>${ssrInterpolate(locale.code)}</span></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "locales-grid-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(availableLocales.value, (locale) => {
                  return openBlock(), createBlock("div", {
                    key: locale.code,
                    class: "flex items-center gap-2 p-3 rounded-xl border border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-[#09090b] hover:border-gray-300 dark:hover:border-gray-700 transition-colors cursor-pointer group",
                    onClick: ($event) => toggleLocale(locale.code, !isLocaleSelected(locale.code))
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:dots-six-vertical",
                      class: "w-5 h-5 text-gray-600 hover:text-gray-400 cursor-move drag-handle flex-shrink-0",
                      onClick: withModifiers(() => {
                      }, ["stop"])
                    }, null, 8, ["onClick"]),
                    createVNode(_component_UCheckbox, {
                      "model-value": isLocaleSelected(locale.code),
                      "onUpdate:modelValue": (checked) => toggleLocale(locale.code, checked),
                      onClick: withModifiers(() => {
                      }, ["stop"]),
                      ui: { base: "bg-white dark:bg-[#121214]" }
                    }, null, 8, ["model-value", "onUpdate:modelValue", "onClick"]),
                    createVNode("div", { class: "flex flex-col overflow-hidden" }, [
                      createVNode("span", { class: "text-sm font-medium text-gray-700 dark:text-gray-200 truncate" }, toDisplayString(locale.label), 1),
                      createVNode("span", { class: "text-xs text-gray-500 uppercase" }, toDisplayString(locale.code), 1)
                    ])
                  ], 8, ["onClick"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_USeparator, {
        label: _ctx.$t("admin.settings.localization.locale_currency_bindings"),
        class: "py-4"
      }, null, _parent));
      _push(`<div class="space-y-3"><p class="text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.settings.localization.locale_currency_bindings_desc", { currency: baseCurrency.value }))}</p><!--[-->`);
      ssrRenderList(selectedLocaleOptions.value, (locale) => {
        _push(`<div class="grid grid-cols-1 gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800/60 dark:bg-[#09090b] sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_minmax(0,1fr)] sm:items-end"><div><div class="text-sm font-medium text-gray-700 dark:text-gray-200">${ssrInterpolate(locale.label)}</div><div class="text-xs uppercase text-gray-500">${ssrInterpolate(locale.code)}</div></div>`);
        _push(ssrRenderComponent(_component_UCheckbox, {
          "model-value": hasLocaleBinding(locale.code),
          label: _ctx.$t("admin.settings.localization.custom_binding"),
          class: "pb-2",
          "onUpdate:modelValue": (value) => toggleLocaleBinding(locale.code, Boolean(value))
        }, null, _parent));
        _push(ssrRenderComponent(_component_UFormField, {
          label: _ctx.$t("admin.settings.localization.binding_currency")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_USelectMenu, {
                "model-value": getLocaleBinding(locale.code).currency,
                items: availableCurrencies,
                "value-key": "code",
                "create-item": "",
                disabled: !hasLocaleBinding(locale.code),
                class: "w-full",
                "onUpdate:modelValue": (value) => updateLocaleBinding(locale.code, "currency", value)
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_USelectMenu, {
                  "model-value": getLocaleBinding(locale.code).currency,
                  items: availableCurrencies,
                  "value-key": "code",
                  "create-item": "",
                  disabled: !hasLocaleBinding(locale.code),
                  class: "w-full",
                  "onUpdate:modelValue": (value) => updateLocaleBinding(locale.code, "currency", value)
                }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_UFormField, {
          label: _ctx.$t("admin.settings.localization.exchange_rate")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UInput, {
                "model-value": getLocaleBinding(locale.code).rate,
                type: "number",
                min: "0.000001",
                step: "any",
                disabled: !hasLocaleBinding(locale.code) || getLocaleBinding(locale.code).currency === baseCurrency.value,
                class: "w-full",
                "onUpdate:modelValue": (value) => updateLocaleBinding(locale.code, "rate", value)
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UInput, {
                  "model-value": getLocaleBinding(locale.code).rate,
                  type: "number",
                  min: "0.000001",
                  step: "any",
                  disabled: !hasLocaleBinding(locale.code) || getLocaleBinding(locale.code).currency === baseCurrency.value,
                  class: "w-full",
                  "onUpdate:modelValue": (value) => updateLocaleBinding(locale.code, "rate", value)
                }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/settings/LocalizationTab.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$9, { __name: "AdminSettingsLocalizationTab" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SEOTab",
  __ssrInlineRender: true,
  props: {
    form: {}
  },
  setup(__props) {
    const props = __props;
    const allLocales = [
      { code: "en", name: "English" },
      { code: "zh", name: "\u7B80\u4F53\u4E2D\u6587" },
      { code: "zh-TW", name: "\u7E41\u9AD4\u4E2D\u6587" },
      { code: "ja", name: "\u65E5\u672C\u8A9E" },
      { code: "ko", name: "\uD55C\uAD6D\uC5B4" },
      { code: "fr", name: "Fran\xE7ais" },
      { code: "de", name: "Deutsch" },
      { code: "es", name: "Espa\xF1ol" },
      { code: "ru", name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" },
      { code: "pt", name: "Portugu\xEAs" },
      { code: "ar", name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" },
      { code: "hi", name: "\u0939\u093F\u0928\u094D\u0926\u0940" }
    ];
    const supportedLocales = computed(() => {
      if (!props.form.supported_locales) return [allLocales[0]];
      const codes = props.form.supported_locales.split(",").map((l) => l.trim()).filter(Boolean);
      return codes.map((code) => {
        const locale = allLocales.find((l) => l.code === code);
        return locale || { code, name: code.toUpperCase() };
      });
    });
    const defaultLocale = computed(() => props.form.default_locale || "en");
    const activeLocale = ref(defaultLocale.value);
    watch(
      supportedLocales,
      (newLocales) => {
        if (!newLocales.find((l) => l.code === activeLocale.value)) {
          activeLocale.value = defaultLocale.value;
        }
      },
      { deep: true }
    );
    const getTitleKey = (localeCode) => {
      return localeCode === "en" ? "site_title" : `${localeCode.replace("-", "_")}_site_title`;
    };
    const getDescriptionKey = (localeCode) => {
      return localeCode === "en" ? "site_description" : `${localeCode.replace("-", "_")}_site_description`;
    };
    const getKeywordsKey = (localeCode) => {
      return localeCode === "en" ? "site_keywords" : `${localeCode.replace("-", "_")}_site_keywords`;
    };
    watch(
      supportedLocales,
      (locales) => {
        locales.forEach((locale) => {
          const titleKey = getTitleKey(locale.code);
          const descKey = getDescriptionKey(locale.code);
          const keywordsKey = getKeywordsKey(locale.code);
          if (!(titleKey in props.form)) {
            props.form[titleKey] = "";
          }
          if (!(descKey in props.form)) {
            props.form[descKey] = "";
          }
          if (!(keywordsKey in props.form)) {
            props.form[keywordsKey] = "";
          }
        });
      },
      { immediate: true, deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_UTextarea = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-[#121214] border border-gray-200 dark:border-gray-800/60 shadow-xl rounded-2xl overflow-hidden" }, _attrs))}><div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800/60 bg-gray-100 dark:bg-gray-900/20 flex items-center gap-3"><div class="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:magnifying-glass-fill",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><h2 class="text-lg font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.seo.title"))}</h2></div><div class="px-6 pt-4 border-b border-gray-200 dark:border-gray-800/60 bg-white dark:bg-[#121214]"><nav class="flex space-x-2 overflow-x-auto hide-scrollbar pb-2"><!--[-->`);
      ssrRenderList(supportedLocales.value, (locale) => {
        _push(`<button type="button" class="${ssrRenderClass([
          "flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2",
          activeLocale.value === locale.code ? "bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 border border-transparent"
        ])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: locale.code === defaultLocale.value ? "ph:star-fill" : "ph:translate",
          class: [
            "w-4 h-4",
            locale.code === defaultLocale.value ? "text-yellow-500" : ""
          ]
        }, null, _parent));
        _push(` ${ssrInterpolate(locale.name)} (${ssrInterpolate(locale.code)}) </button>`);
      });
      _push(`<!--]--></nav></div><div class="p-6 space-y-6"><div class="grid grid-cols-1 md:grid-cols-1 gap-6">`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.seo.site_title"),
        description: _ctx.$t("admin.settings.seo.site_title_desc", { locale: activeLocale.value })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.form[getTitleKey(activeLocale.value)],
              "onUpdate:modelValue": ($event) => __props.form[getTitleKey(activeLocale.value)] = $event,
              placeholder: "APay - Premium Products",
              icon: "ph:browser",
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: __props.form[getTitleKey(activeLocale.value)],
                "onUpdate:modelValue": ($event) => __props.form[getTitleKey(activeLocale.value)] = $event,
                placeholder: "APay - Premium Products",
                icon: "ph:browser",
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.seo.site_description"),
        description: _ctx.$t("admin.settings.seo.site_description_desc", { locale: activeLocale.value })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTextarea, {
              modelValue: __props.form[getDescriptionKey(activeLocale.value)],
              "onUpdate:modelValue": ($event) => __props.form[getDescriptionKey(activeLocale.value)] = $event,
              placeholder: "The best place to buy products securely.",
              icon: "ph:text-align-left",
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTextarea, {
                modelValue: __props.form[getDescriptionKey(activeLocale.value)],
                "onUpdate:modelValue": ($event) => __props.form[getDescriptionKey(activeLocale.value)] = $event,
                placeholder: "The best place to buy products securely.",
                icon: "ph:text-align-left",
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.seo.site_keywords"),
        description: _ctx.$t("admin.settings.seo.site_keywords_desc", { locale: activeLocale.value })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.form[getKeywordsKey(activeLocale.value)],
              "onUpdate:modelValue": ($event) => __props.form[getKeywordsKey(activeLocale.value)] = $event,
              placeholder: "Shoply, Ecommerce, B2B, B2C, Storefront",
              icon: "ph:tag",
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: __props.form[getKeywordsKey(activeLocale.value)],
                "onUpdate:modelValue": ($event) => __props.form[getKeywordsKey(activeLocale.value)] = $event,
                placeholder: "Shoply, Ecommerce, B2B, B2C, Storefront",
                icon: "ph:tag",
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/settings/SEOTab.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$8, { __name: "AdminSettingsSEOTab" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CheckoutTab",
  __ssrInlineRender: true,
  props: {
    form: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_USwitch = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-[#121214] border border-gray-200 dark:border-gray-800/60 shadow-xl rounded-2xl overflow-hidden" }, _attrs))}><div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800/60 bg-gray-100 dark:bg-gray-900/20 flex items-center gap-3"><div class="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shopping-cart-fill",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><h2 class="text-lg font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.checkout.title"))}</h2></div><div class="p-6 space-y-6"><div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#09090b] rounded-xl border border-gray-200 dark:border-gray-800"><div class="flex flex-col gap-1"><span class="font-medium text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.checkout.allow_guest_checkout"))}</span><span class="text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.settings.checkout.guest_checkout_desc"))}</span></div>`);
      _push(ssrRenderComponent(_component_USwitch, {
        modelValue: __props.form.allow_guest_checkout,
        "onUpdate:modelValue": ($event) => __props.form.allow_guest_checkout = $event
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/settings/CheckoutTab.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$7, { __name: "AdminSettingsCheckoutTab" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TopupTab",
  __ssrInlineRender: true,
  props: {
    form: {}
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const model = reactive({
      enabled: true,
      accountingCurrency: "USD",
      currencies: []
    });
    let hydrated = false;
    const hydrate = (raw) => {
      let parsed = null;
      if (typeof raw === "string" && raw.trim()) {
        try {
          parsed = JSON.parse(raw);
        } catch {
          parsed = null;
        }
      } else if (raw && typeof raw === "object") {
        parsed = raw;
      }
      model.enabled = (parsed == null ? void 0 : parsed.enabled) !== false;
      model.accountingCurrency = String((parsed == null ? void 0 : parsed.accountingCurrency) || "USD");
      const options = (parsed == null ? void 0 : parsed.options) && typeof parsed.options === "object" ? parsed.options : {};
      model.currencies = Object.entries(options).map(([currency, opt]) => {
        var _a, _b, _c;
        return {
          currency,
          min: String((_a = opt == null ? void 0 : opt.min) != null ? _a : 0),
          max: String((_b = opt == null ? void 0 : opt.max) != null ? _b : 0),
          rate: String((_c = opt == null ? void 0 : opt.rate) != null ? _c : 1),
          presets: Array.isArray(opt == null ? void 0 : opt.presets) ? opt.presets.join(",") : ""
        };
      });
      hydrated = true;
    };
    watch(() => {
      var _a;
      return (_a = props.form) == null ? void 0 : _a.topup_rules;
    }, (raw) => {
      if (!hydrated) hydrate(raw);
    }, { immediate: true });
    const isAccountingRow = (row) => Boolean(row.currency) && String(row.currency).trim().toUpperCase() === String(model.accountingCurrency || "").trim().toUpperCase();
    const rateOf = (row) => isAccountingRow(row) ? 1 : toNumber(row.rate, 1);
    const addCurrency = () => {
      model.currencies.push({ currency: "", min: "1", max: "10000", rate: "1", presets: "" });
    };
    const toNumber = (value, fallback = 0) => {
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : fallback;
    };
    const issues = computed(() => {
      const list = [];
      const accounting = String(model.accountingCurrency || "").trim().toUpperCase();
      if (!accounting) list.push(t("admin.settings.topup.issue_no_accounting"));
      const seen = /* @__PURE__ */ new Set();
      for (const row of model.currencies) {
        const code = String(row.currency || "").trim().toUpperCase();
        if (!code) {
          list.push(t("admin.settings.topup.issue_empty_code"));
          continue;
        }
        if (seen.has(code)) list.push(t("admin.settings.topup.issue_duplicate", { currency: code }));
        seen.add(code);
        const min = toNumber(row.min), max = toNumber(row.max), rate = toNumber(row.rate);
        if (!(min > 0)) list.push(t("admin.settings.topup.issue_min", { currency: code }));
        if (max < min) list.push(t("admin.settings.topup.issue_max", { currency: code }));
        if (code !== accounting && !(rate > 0)) {
          list.push(t("admin.settings.topup.issue_rate", { currency: code }));
        }
      }
      if (model.currencies.length && !seen.has(accounting) && accounting) {
        list.push(t("admin.settings.topup.issue_accounting_missing", { currency: accounting }));
      }
      return list;
    });
    const serialize = () => {
      const options = {};
      for (const row of model.currencies) {
        const code = String(row.currency || "").trim().toUpperCase();
        if (!code) continue;
        options[code] = {
          min: toNumber(row.min),
          max: toNumber(row.max),
          rate: rateOf(row),
          presets: String(row.presets || "").split(",").map((item) => Number(String(item).trim())).filter((item) => Number.isFinite(item) && item > 0)
        };
      }
      return JSON.stringify({
        enabled: model.enabled,
        accountingCurrency: String(model.accountingCurrency || "USD").trim().toUpperCase(),
        options
      });
    };
    watch(() => model.accountingCurrency, () => {
      for (const row of model.currencies) {
        if (isAccountingRow(row)) row.rate = "1";
      }
    });
    watch(model, () => {
      if (!hydrated) return;
      props.form.topup_rules = serialize();
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_USwitch = _sfc_main$c;
      const _component_UInput = _sfc_main$k;
      const _component_UButton = _sfc_main$B;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-[#121214] border border-gray-200 dark:border-gray-800/60 shadow-xl rounded-2xl overflow-hidden" }, _attrs))}><div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800/60 bg-gray-100 dark:bg-gray-900/20 flex items-center gap-3"><div class="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:wallet-fill",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><h2 class="text-lg font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.topup.title"))}</h2></div><div class="p-6 space-y-6"><div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#09090b] rounded-xl border border-gray-200 dark:border-gray-800"><div class="flex flex-col gap-1"><span class="font-medium text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.topup.enabled"))}</span><span class="text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.settings.topup.enabled_desc"))}</span></div>`);
      _push(ssrRenderComponent(_component_USwitch, {
        modelValue: model.enabled,
        "onUpdate:modelValue": ($event) => model.enabled = $event
      }, null, _parent));
      _push(`</div><div class="p-4 bg-gray-50 dark:bg-[#09090b] rounded-xl border border-gray-200 dark:border-gray-800"><label class="mb-1 block font-medium text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.topup.accounting_currency"))}</label><p class="mb-3 text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.settings.topup.accounting_currency_desc"))}</p>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: model.accountingCurrency,
        "onUpdate:modelValue": ($event) => model.accountingCurrency = $event,
        placeholder: "USD",
        class: "max-w-[200px]"
      }, null, _parent));
      _push(`</div><div class="p-4 bg-gray-50 dark:bg-[#09090b] rounded-xl border border-gray-200 dark:border-gray-800"><div class="mb-3 flex items-start justify-between gap-4"><div><span class="font-medium text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.topup.currencies"))}</span><p class="mt-1 text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.settings.topup.currencies_desc"))}</p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: "ph:plus-bold",
        size: "xs",
        color: "neutral",
        variant: "soft",
        onClick: addCurrency
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("admin.settings.topup.add_currency"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("admin.settings.topup.add_currency")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!model.currencies.length) {
        _push(`<p class="py-6 text-center text-sm text-gray-400 dark:text-gray-500">${ssrInterpolate(_ctx.$t("admin.settings.topup.no_currency"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(model.currencies, (row, index) => {
        _push(`<div class="mb-3 rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-[#121214]"><div class="grid grid-cols-2 gap-3 lg:grid-cols-5"><div><label class="mb-1 block text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.settings.topup.f_currency"))}</label>`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: row.currency,
          "onUpdate:modelValue": ($event) => row.currency = $event,
          placeholder: "CNY"
        }, null, _parent));
        _push(`</div><div><label class="mb-1 block text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.settings.topup.f_min"))}</label>`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: row.min,
          "onUpdate:modelValue": ($event) => row.min = $event,
          type: "number",
          step: "0.01"
        }, null, _parent));
        _push(`</div><div><label class="mb-1 block text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.settings.topup.f_max"))}</label>`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: row.max,
          "onUpdate:modelValue": ($event) => row.max = $event,
          type: "number",
          step: "0.01"
        }, null, _parent));
        _push(`</div><div><label class="mb-1 block text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.settings.topup.f_rate"))} `);
        if (isAccountingRow(row)) {
          _push(`<span class="ml-1 text-emerald-600 dark:text-emerald-400">${ssrInterpolate(_ctx.$t("admin.settings.topup.f_rate_self"))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label>`);
        if (isAccountingRow(row)) {
          _push(ssrRenderComponent(_component_UInput, {
            "model-value": "1",
            type: "number",
            disabled: ""
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_UInput, {
            modelValue: row.rate,
            "onUpdate:modelValue": ($event) => row.rate = $event,
            type: "number",
            step: "0.000001"
          }, null, _parent));
        }
        _push(`</div><div class="flex items-end gap-2"><div class="flex-1"><label class="mb-1 block text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.settings.topup.f_presets"))}</label>`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: row.presets,
          "onUpdate:modelValue": ($event) => row.presets = $event,
          placeholder: "50,100,500"
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_UButton, {
          icon: "ph:trash-fill",
          size: "xs",
          color: "error",
          variant: "soft",
          "aria-label": _ctx.$t("admin.settings.topup.remove_currency"),
          onClick: ($event) => model.currencies.splice(index, 1)
        }, null, _parent));
        _push(`</div></div><p class="mt-2 text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.settings.topup.rate_hint", {
          from: (row.currency || "?").toUpperCase(),
          rate: rateOf(row),
          to: (model.accountingCurrency || "USD").toUpperCase()
        }))}</p></div>`);
      });
      _push(`<!--]--></div>`);
      if (issues.value.length) {
        _push(`<div class="rounded-xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-500/30 dark:bg-amber-500/10"><div class="mb-2 flex items-center gap-2 text-amber-700 dark:text-amber-400">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:warning-fill",
          class: "h-4 w-4"
        }, null, _parent));
        _push(`<span class="text-sm font-medium">${ssrInterpolate(_ctx.$t("admin.settings.topup.issues_title"))}</span></div><ul class="list-inside list-disc space-y-1 text-xs text-amber-700 dark:text-amber-400/90"><!--[-->`);
        ssrRenderList(issues.value, (issue, i) => {
          _push(`<li>${ssrInterpolate(issue)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/settings/TopupTab.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main$6, { __name: "AdminSettingsTopupTab" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "EmailTemplateModal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    title: {},
    draft: {},
    variablesInput: {},
    isEditing: { type: Boolean }
  },
  emits: ["update:open", "update:variables-input", "save"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    function updateDraft(key, value) {
      props.draft[key] = value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FullScreenModal = __nuxt_component_7$1;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_UTextarea = _sfc_main$g;
      const _component_UButton = _sfc_main$B;
      _push(ssrRenderComponent(_component_FullScreenModal, mergeProps({
        "model-value": __props.open,
        title: __props.title,
        "default-fullscreen": false,
        "max-width": "sm:max-w-2xl",
        "onUpdate:modelValue": ($event) => emit("update:open", $event)
      }, _attrs), {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              type: "button",
              variant: "outline",
              size: "md",
              class: "rounded-xl",
              onClick: ($event) => emit("update:open", false)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.settings.email.cancel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.settings.email.cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              type: "button",
              color: "primary",
              size: "md",
              class: "rounded-xl",
              onClick: ($event) => emit("save")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.settings.email.save_template"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.settings.email.save_template")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                type: "button",
                variant: "outline",
                size: "md",
                class: "rounded-xl",
                onClick: ($event) => emit("update:open", false)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("admin.settings.email.cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_UButton, {
                type: "button",
                color: "primary",
                size: "md",
                class: "rounded-xl",
                onClick: ($event) => emit("save")
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("admin.settings.email.save_template")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.settings.email.tpl_code"),
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    "model-value": __props.draft.code,
                    placeholder: "verify_email",
                    size: "md",
                    class: "w-full",
                    disabled: __props.isEditing,
                    ui: { base: "bg-gray-50 dark:bg-[#09090b]" },
                    "onUpdate:modelValue": ($event) => updateDraft("code", $event)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      "model-value": __props.draft.code,
                      placeholder: "verify_email",
                      size: "md",
                      class: "w-full",
                      disabled: __props.isEditing,
                      ui: { base: "bg-gray-50 dark:bg-[#09090b]" },
                      "onUpdate:modelValue": ($event) => updateDraft("code", $event)
                    }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.settings.email.tpl_name"),
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    "model-value": __props.draft.name,
                    placeholder: "\u6CE8\u518C\u9A8C\u8BC1",
                    size: "md",
                    class: "w-full",
                    ui: { base: "bg-gray-50 dark:bg-[#09090b]" },
                    "onUpdate:modelValue": ($event) => updateDraft("name", $event)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      "model-value": __props.draft.name,
                      placeholder: "\u6CE8\u518C\u9A8C\u8BC1",
                      size: "md",
                      class: "w-full",
                      ui: { base: "bg-gray-50 dark:bg-[#09090b]" },
                      "onUpdate:modelValue": ($event) => updateDraft("name", $event)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.settings.email.tpl_subject"),
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    "model-value": __props.draft.subject,
                    placeholder: "\u9A8C\u8BC1\u4F60\u7684\u90AE\u7BB1 - {{site_name}}",
                    size: "md",
                    class: "w-full",
                    ui: { base: "bg-gray-50 dark:bg-[#09090b]" },
                    "onUpdate:modelValue": ($event) => updateDraft("subject", $event)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      "model-value": __props.draft.subject,
                      placeholder: "\u9A8C\u8BC1\u4F60\u7684\u90AE\u7BB1 - {{site_name}}",
                      size: "md",
                      class: "w-full",
                      ui: { base: "bg-gray-50 dark:bg-[#09090b]" },
                      "onUpdate:modelValue": ($event) => updateDraft("subject", $event)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.settings.email.tpl_variables"),
              description: _ctx.$t("admin.settings.email.tpl_variables_desc")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    "model-value": __props.variablesInput,
                    placeholder: "nickname, verify_link, site_name",
                    size: "md",
                    class: "w-full",
                    ui: { base: "bg-gray-50 dark:bg-[#09090b]" },
                    "onUpdate:modelValue": ($event) => emit("update:variables-input", $event)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      "model-value": __props.variablesInput,
                      placeholder: "nickname, verify_link, site_name",
                      size: "md",
                      class: "w-full",
                      ui: { base: "bg-gray-50 dark:bg-[#09090b]" },
                      "onUpdate:modelValue": ($event) => emit("update:variables-input", $event)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.settings.email.tpl_html"),
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    "model-value": __props.draft.html,
                    rows: 14,
                    size: "md",
                    class: "font-mono text-sm w-full",
                    placeholder: "<p>\u4F60\u597D {{nickname}}\uFF0C\u70B9\u51FB\u9A8C\u8BC1\uFF1A<a href='{{verify_link}}'>{{verify_link}}</a></p>",
                    ui: { base: "bg-gray-50 dark:bg-[#09090b]" },
                    "onUpdate:modelValue": ($event) => updateDraft("html", $event)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      "model-value": __props.draft.html,
                      rows: 14,
                      size: "md",
                      class: "font-mono text-sm w-full",
                      placeholder: "<p>\u4F60\u597D {{nickname}}\uFF0C\u70B9\u51FB\u9A8C\u8BC1\uFF1A<a href='{{verify_link}}'>{{verify_link}}</a></p>",
                      ui: { base: "bg-gray-50 dark:bg-[#09090b]" },
                      "onUpdate:modelValue": ($event) => updateDraft("html", $event)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.settings.email.tpl_code"),
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        "model-value": __props.draft.code,
                        placeholder: "verify_email",
                        size: "md",
                        class: "w-full",
                        disabled: __props.isEditing,
                        ui: { base: "bg-gray-50 dark:bg-[#09090b]" },
                        "onUpdate:modelValue": ($event) => updateDraft("code", $event)
                      }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.settings.email.tpl_name"),
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        "model-value": __props.draft.name,
                        placeholder: "\u6CE8\u518C\u9A8C\u8BC1",
                        size: "md",
                        class: "w-full",
                        ui: { base: "bg-gray-50 dark:bg-[#09090b]" },
                        "onUpdate:modelValue": ($event) => updateDraft("name", $event)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                createVNode(_component_UFormField, {
                  label: _ctx.$t("admin.settings.email.tpl_subject"),
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      "model-value": __props.draft.subject,
                      placeholder: "\u9A8C\u8BC1\u4F60\u7684\u90AE\u7BB1 - {{site_name}}",
                      size: "md",
                      class: "w-full",
                      ui: { base: "bg-gray-50 dark:bg-[#09090b]" },
                      "onUpdate:modelValue": ($event) => updateDraft("subject", $event)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_UFormField, {
                  label: _ctx.$t("admin.settings.email.tpl_variables"),
                  description: _ctx.$t("admin.settings.email.tpl_variables_desc")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      "model-value": __props.variablesInput,
                      placeholder: "nickname, verify_link, site_name",
                      size: "md",
                      class: "w-full",
                      ui: { base: "bg-gray-50 dark:bg-[#09090b]" },
                      "onUpdate:modelValue": ($event) => emit("update:variables-input", $event)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["label", "description"]),
                createVNode(_component_UFormField, {
                  label: _ctx.$t("admin.settings.email.tpl_html"),
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      "model-value": __props.draft.html,
                      rows: 14,
                      size: "md",
                      class: "font-mono text-sm w-full",
                      placeholder: "<p>\u4F60\u597D {{nickname}}\uFF0C\u70B9\u51FB\u9A8C\u8BC1\uFF1A<a href='{{verify_link}}'>{{verify_link}}</a></p>",
                      ui: { base: "bg-gray-50 dark:bg-[#09090b]" },
                      "onUpdate:modelValue": ($event) => updateDraft("html", $event)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/settings/email/EmailTemplateModal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const EmailTemplateModal = Object.assign(_sfc_main$5, { __name: "AdminSettingsEmailTemplateModal" });
const DEFAULT_RESEND_SCRIPT = `// Sandbox: { to, subject, html, config, fetch, crypto, console }
const res = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${config.apiKey}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    from: config.from || 'noreply@yourdomain.com',
    to: [to],
    subject: subject,
    html: html
  })
})
if (res.ok) {
  const data = await res.json()
  return { ok: true, messageId: data.id }
}
return { ok: false, error: await res.text() }`;
const fetchDefaultEmailTemplates = $fetch;
const fetchEmailTestResult = $fetch;
function createEmptyTemplateDraft() {
  return {
    code: "",
    name: "",
    subject: "",
    variables: [],
    html: ""
  };
}
function useEmailTemplateManager(options) {
  const { form, toast, t } = options;
  const { locale } = useI18n();
  const templates = ref([]);
  watchEffect(() => {
    if (form.email_templates) {
      try {
        templates.value = JSON.parse(form.email_templates);
      } catch {
      }
    }
  });
  const templateOptions = computed(
    () => templates.value.map((template) => ({
      label: `${template.name} (${template.code})`,
      value: template.code
    }))
  );
  const defaultTemplateOptions = computed(() => {
    const options2 = templates.value.map((template) => ({
      label: `${template.name} (${template.code})`,
      value: template.code
    }));
    return [
      { label: t("admin.settings.email.no_default_template"), value: "__none__" },
      ...options2
    ];
  });
  const isTemplateModalOpen = ref(false);
  const editingTemplateIndex = ref(-1);
  const editingTemplate = reactive(createEmptyTemplateDraft());
  const variablesInput = ref("");
  function syncTemplatesToForm() {
    form.email_templates = JSON.stringify(templates.value);
  }
  function resetEditingTemplate() {
    Object.assign(editingTemplate, createEmptyTemplateDraft());
    variablesInput.value = "";
  }
  function openNewTemplate() {
    editingTemplateIndex.value = -1;
    resetEditingTemplate();
    isTemplateModalOpen.value = true;
  }
  function editTemplate(index) {
    editingTemplateIndex.value = index;
    const template = templates.value[index];
    if (!template) return;
    Object.assign(editingTemplate, {
      code: template.code,
      name: template.name,
      subject: template.subject,
      variables: [...template.variables],
      html: template.html
    });
    variablesInput.value = template.variables.join(", ");
    isTemplateModalOpen.value = true;
  }
  function deleteTemplate(index) {
    templates.value.splice(index, 1);
    syncTemplatesToForm();
    toast.add({
      title: t("admin.common.success"),
      description: t("admin.settings.email.toast_template_deleted"),
      color: "success"
    });
  }
  function saveTemplate() {
    const variables = variablesInput.value.split(",").map((value) => value.trim()).filter(Boolean);
    const template = {
      code: editingTemplate.code.trim(),
      name: editingTemplate.name.trim(),
      subject: editingTemplate.subject.trim(),
      variables,
      html: editingTemplate.html.trim()
    };
    if (!template.code || !template.name) {
      toast.add({
        title: t("admin.common.error"),
        description: t("admin.settings.email.tpl_code_name_required"),
        color: "error"
      });
      return;
    }
    if (editingTemplateIndex.value >= 0) {
      templates.value[editingTemplateIndex.value] = template;
    } else {
      if (templates.value.some((item) => item.code === template.code)) {
        toast.add({
          title: t("admin.common.error"),
          description: t("admin.settings.email.tpl_duplicate"),
          color: "error"
        });
        return;
      }
      templates.value.push(template);
    }
    syncTemplatesToForm();
    isTemplateModalOpen.value = false;
    toast.add({
      title: t("admin.common.success"),
      description: t("admin.settings.email.toast_template_saved"),
      color: "success"
    });
  }
  async function loadDefaultTemplates() {
    var _a;
    try {
      const localeValue = String(locale.value || "zh").toLowerCase();
      const templateLocale = localeValue.startsWith("zh") ? "zh" : "en";
      const result = await fetchDefaultEmailTemplates("/api/admin/email/default-templates", {
        query: {
          locale: templateLocale
        }
      });
      const defaults = Array.isArray(result) ? result : [];
      if (defaults.length === 0) {
        toast.add({
          title: t("admin.common.info"),
          description: "No default templates available",
          color: "warning"
        });
        return;
      }
      const existingCodes = new Set(templates.value.map((template) => template.code));
      let addedCount = 0;
      for (const template of defaults) {
        if (!existingCodes.has(template.code)) {
          templates.value.push({ ...template });
          existingCodes.add(template.code);
          addedCount++;
        }
      }
      if (addedCount > 0) {
        syncTemplatesToForm();
        toast.add({
          title: t("admin.common.success"),
          description: `${addedCount} template(s) loaded`,
          color: "success"
        });
      } else {
        toast.add({
          title: t("admin.common.info"),
          description: "All default templates already exist",
          color: "warning"
        });
      }
    } catch (error) {
      toast.add({
        title: t("admin.common.error"),
        description: ((_a = error.data) == null ? void 0 : _a.message) || error.message || "Failed to load default templates",
        color: "error"
      });
    }
  }
  const testEmail = reactive({ to: "", templateCode: "" });
  const isSendingTest = ref(false);
  const testResult = ref(null);
  async function sendTestEmail() {
    var _a;
    if (!testEmail.to || !testEmail.templateCode) {
      toast.add({
        title: t("admin.common.error"),
        description: t("admin.settings.email.test_fill_fields"),
        color: "error"
      });
      return;
    }
    isSendingTest.value = true;
    testResult.value = null;
    try {
      const result = await fetchEmailTestResult("/api/admin/email/test", {
        method: "POST",
        body: {
          to: testEmail.to,
          templateCode: testEmail.templateCode,
          templates: form.email_templates
        }
      });
      testResult.value = result;
    } catch (error) {
      testResult.value = {
        ok: false,
        error: ((_a = error.data) == null ? void 0 : _a.message) || error.message
      };
    } finally {
      isSendingTest.value = false;
    }
  }
  return {
    templates,
    templateOptions,
    defaultTemplateOptions,
    isTemplateModalOpen,
    editingTemplateIndex,
    editingTemplate,
    variablesInput,
    openNewTemplate,
    editTemplate,
    deleteTemplate,
    saveTemplate,
    syncTemplatesToForm,
    loadDefaultTemplates,
    testEmail,
    isSendingTest,
    testResult,
    sendTestEmail
  };
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "EmailTab",
  __ssrInlineRender: true,
  props: {
    form: {}
  },
  setup(__props) {
    const toast = useToast();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const { t } = useI18n();
    const translate = (key) => t(key);
    const props = __props;
    const isSavingProvider = ref(false);
    const availableProviders = [
      { label: "Resend", value: "resend" },
      { label: "SendGrid", value: "sendgrid" },
      { label: "Mailgun", value: "mailgun" },
      { label: "Postmark", value: "postmark" },
      { label: "AWS SES", value: "ses" },
      { label: "Bird (MessageBird)", value: "bird" },
      { label: "SMTP (via smtp2go)", value: "smtp" },
      { label: t("admin.settings.email.custom_provider"), value: "__custom__" }
    ];
    const isCustomProvider = computed(() => providerForm.code === "__custom__");
    const providerForm = reactive({
      name: "Resend",
      code: "resend",
      isActive: false,
      configJson: "",
      sendScript: "",
      defaultTemplateCode: "__none__"
    });
    const defaultResendScript = DEFAULT_RESEND_SCRIPT;
    const configJsonPlaceholder = computed(() => {
      switch (providerForm.code) {
        case "bird":
          return '{\n  "apiKey": "your_access_key",\n  "workspaceId": "your_workspace_id",\n  "channelId": "your_channel_id",\n  "fromName": "Support Team"\n}';
        case "resend":
          return '{\n  "apiKey": "re_xxx",\n  "from": "noreply@yourdomain.com"\n}';
        case "sendgrid":
          return '{\n  "apiKey": "SG.xxx",\n  "from": "noreply@yourdomain.com"\n}';
        case "mailgun":
          return '{\n  "apiKey": "key-xxx",\n  "domain": "mg.yourdomain.com",\n  "from": "noreply@yourdomain.com"\n}';
        case "postmark":
          return '{\n  "serverToken": "xxx",\n  "from": "noreply@yourdomain.com"\n}';
        case "ses":
          return '{\n  "region": "us-east-1",\n  "accessKeyId": "AKIA...",\n  "secretAccessKey": "...",\n  "from": "noreply@yourdomain.com"\n}';
        case "smtp":
          return '{\n  "host": "mail.smtp2go.com",\n  "port": 587,\n  "username": "...",\n  "password": "...",\n  "from": "noreply@yourdomain.com"\n}';
        default:
          return '{\n  "apiKey": "re_xxx",\n  "from": "noreply@yourdomain.com"\n}';
      }
    });
    const savedProviders = ref([]);
    const fetchProviders = async () => {
      try {
        const res = await $fetch("/api/admin/email/providers");
        if (Array.isArray(res)) {
          savedProviders.value = res;
          const currentCode = providerForm.code || props.form.email_provider_code || "resend";
          const matched = res.find((p) => p.isActive) || res.find((p) => p.code === currentCode);
          if (matched) {
            if (!providerForm.configJson && matched.configJson) {
              providerForm.configJson = matched.configJson;
            }
            if (!providerForm.sendScript && matched.sendScript) {
              providerForm.sendScript = matched.sendScript;
            }
            if (matched.name && !props.form.email_provider_name) {
              providerForm.name = matched.name;
            }
            if (matched.code && !props.form.email_provider_code) {
              providerForm.code = matched.code;
            }
            syncProviderToForm();
          }
        }
      } catch (err) {
        console.error("[EmailTab] Failed to fetch email providers:", err);
      }
    };
    watchEffect(() => {
      const f = props.form;
      if (f.email_provider_name) providerForm.name = f.email_provider_name;
      if (f.email_provider_code) providerForm.code = f.email_provider_code;
      if (f.email_provider_is_active !== void 0) {
        providerForm.isActive = f.email_provider_is_active === true || f.email_provider_is_active === "true";
      }
      if (f.email_provider_config_json) providerForm.configJson = f.email_provider_config_json;
      if (f.email_provider_send_script) providerForm.sendScript = f.email_provider_send_script;
      providerForm.defaultTemplateCode = f.email_default_template || "__none__";
    });
    watch(() => providerForm.code, (newCode) => {
      if (newCode !== "__custom__") {
        providerForm.sendScript = "";
      }
      const matched = savedProviders.value.find((p) => p.code === newCode);
      if (matched) {
        if (matched.configJson) providerForm.configJson = matched.configJson;
        if (matched.name) providerForm.name = matched.name;
      }
      syncProviderToForm();
    });
    function syncProviderToForm() {
      const f = props.form;
      f.email_provider_name = providerForm.name;
      f.email_provider_code = providerForm.code;
      f.email_provider_is_active = providerForm.isActive;
      f.email_provider_config_json = providerForm.configJson;
      f.email_provider_send_script = providerForm.sendScript;
      f.email_default_template = providerForm.defaultTemplateCode;
    }
    watch(providerForm, () => {
      syncProviderToForm();
    }, { deep: true });
    async function saveProvider() {
      var _a;
      isSavingProvider.value = true;
      try {
        syncProviderToForm();
        syncTemplatesToForm();
        await $fetch("/api/admin/email/providers", {
          method: "POST",
          body: {
            name: providerForm.name,
            code: providerForm.code,
            isActive: providerForm.isActive,
            configJson: providerForm.configJson,
            sendScript: providerForm.sendScript
          }
        });
        await $fetch("/api/admin/settings", {
          method: "POST",
          body: {
            email_templates: props.form.email_templates,
            email_provider_name: providerForm.name,
            email_provider_code: providerForm.code,
            email_provider_is_active: providerForm.isActive,
            email_provider_config_json: providerForm.configJson,
            email_provider_send_script: providerForm.sendScript,
            email_default_template: providerForm.defaultTemplateCode,
            email_verify_policy: props.form.email_verify_policy
          }
        });
        await fetchProviders();
        toast.add({
          title: t("admin.common.success"),
          description: t("admin.settings.email.toast_provider_saved"),
          color: "success"
        });
      } catch (e) {
        toast.add({
          title: t("admin.common.error"),
          description: ((_a = e.data) == null ? void 0 : _a.message) || t("admin.settings.email.toast_provider_failed"),
          color: "error"
        });
      } finally {
        isSavingProvider.value = false;
      }
    }
    const {
      templates,
      templateOptions,
      defaultTemplateOptions,
      isTemplateModalOpen,
      editingTemplateIndex,
      editingTemplate,
      variablesInput,
      openNewTemplate,
      editTemplate,
      deleteTemplate,
      saveTemplate,
      syncTemplatesToForm,
      loadDefaultTemplates,
      testEmail,
      isSendingTest,
      testResult,
      sendTestEmail
    } = useEmailTemplateManager({
      form: props.form,
      toast,
      t: translate
    });
    const emailLogsList = ref([]);
    const logsLoading = ref(false);
    const logsTotal = ref(0);
    const logsPage = ref(1);
    const logsSearch = ref("");
    const logsStatus = ref("all");
    const isPreviewModalOpen = ref(false);
    const selectedLog = ref(null);
    const statusFilterOptions = computed(() => [
      { label: "\u5168\u90E8\u72B6\u6001", value: "all" },
      { label: "\u53D1\u9001\u6210\u529F", value: "success" },
      { label: "\u53D1\u9001\u5931\u8D25", value: "failed" }
    ]);
    const formatDateTime = (val) => {
      if (!val) return "-";
      try {
        const d = new Date(val);
        return d.toLocaleString();
      } catch {
        return String(val);
      }
    };
    const fetchEmailLogs = async () => {
      logsLoading.value = true;
      try {
        const res = await $fetch("/api/admin/email/logs", {
          query: {
            page: logsPage.value,
            pageSize: 20,
            search: logsSearch.value || void 0,
            status: logsStatus.value !== "all" ? logsStatus.value : void 0
          }
        });
        emailLogsList.value = res.items || [];
        logsTotal.value = res.total || 0;
      } catch (err) {
        console.error("[EmailTab] Failed to fetch email logs:", err);
      } finally {
        logsLoading.value = false;
      }
    };
    const resendingId = ref(null);
    const resendEmailLog = async (log) => {
      var _a, _b;
      if (!(log == null ? void 0 : log.id) || resendingId.value) return;
      resendingId.value = log.id;
      try {
        await $fetch("/api/admin/email/resend", {
          method: "POST",
          body: { logId: log.id }
        });
        toast.add({
          title: t("admin.settings.email.log_resend_success"),
          color: "success"
        });
        await fetchEmailLogs();
        if (isPreviewModalOpen.value && ((_a = selectedLog.value) == null ? void 0 : _a.id) === log.id) {
          isPreviewModalOpen.value = false;
        }
      } catch (err) {
        toast.add({
          title: t("admin.settings.email.log_resend_failed"),
          description: ((_b = err == null ? void 0 : err.data) == null ? void 0 : _b.message) || (err == null ? void 0 : err.message),
          color: "error"
        });
      } finally {
        resendingId.value = null;
      }
    };
    const openLogPreview = (log) => {
      selectedLog.value = log;
      isPreviewModalOpen.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UIcon = _sfc_main$G;
      const _component_UFormField = _sfc_main$l;
      const _component_USelect = _sfc_main$j;
      const _component_UInput = _sfc_main$k;
      const _component_USwitch = _sfc_main$c;
      const _component_UTextarea = _sfc_main$g;
      const _component_UButton = _sfc_main$B;
      const _component_UBadge = _sfc_main$x;
      const _component_FullScreenModal = __nuxt_component_7$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><div class="bg-white dark:bg-[#121214] border border-gray-200 dark:border-gray-800/60 shadow-xl rounded-2xl overflow-hidden"><div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800/60 bg-gray-100 dark:bg-gray-900/20 flex items-center gap-3"><div class="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-500">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-fill",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><div><h2 class="text-lg font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.email.policy_title"))}</h2><p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">${ssrInterpolate(_ctx.$t("admin.settings.email.policy_desc"))}</p></div></div><div class="p-6 space-y-4"><div class="grid grid-cols-1 gap-3"><label class="${ssrRenderClass([(__props.form.email_verify_policy || "banner") === "disabled" ? "border-emerald-500/80 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-xs" : "border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#09090b] hover:border-gray-300 dark:hover:border-gray-700", "flex items-start gap-3.5 p-4 rounded-xl border cursor-pointer transition-all"])}"><input type="radio" name="email_verify_policy" value="disabled"${ssrIncludeBooleanAttr((__props.form.email_verify_policy || "banner") === "disabled") ? " checked" : ""} class="mt-1 text-emerald-600 focus:ring-emerald-500"><div class="flex-1"><div class="flex items-center gap-2"><span class="font-medium text-sm text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.email.policy_disabled"))}</span><span class="text-[11px] px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400">\u6781\u7B80\u76F4\u901A</span></div><p class="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">${ssrInterpolate(_ctx.$t("admin.settings.email.policy_disabled_desc"))}</p></div></label><label class="${ssrRenderClass([(__props.form.email_verify_policy || "banner") === "banner" ? "border-emerald-500/80 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-xs" : "border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#09090b] hover:border-gray-300 dark:hover:border-gray-700", "flex items-start gap-3.5 p-4 rounded-xl border cursor-pointer transition-all"])}"><input type="radio" name="email_verify_policy" value="banner"${ssrIncludeBooleanAttr((__props.form.email_verify_policy || "banner") === "banner") ? " checked" : ""} class="mt-1 text-emerald-600 focus:ring-emerald-500"><div class="flex-1"><div class="flex items-center gap-2"><span class="font-medium text-sm text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.email.policy_banner"))}</span><span class="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-medium">\u63A8\u8350\u9ED8\u8BA4</span></div><p class="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">${ssrInterpolate(_ctx.$t("admin.settings.email.policy_banner_desc"))}</p></div></label><label class="${ssrRenderClass([(__props.form.email_verify_policy || "banner") === "strict" ? "border-emerald-500/80 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-xs" : "border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#09090b] hover:border-gray-300 dark:hover:border-gray-700", "flex items-start gap-3.5 p-4 rounded-xl border cursor-pointer transition-all"])}"><input type="radio" name="email_verify_policy" value="strict"${ssrIncludeBooleanAttr((__props.form.email_verify_policy || "banner") === "strict") ? " checked" : ""} class="mt-1 text-emerald-600 focus:ring-emerald-500"><div class="flex-1"><div class="flex items-center gap-2"><span class="font-medium text-sm text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.email.policy_strict"))}</span><span class="text-[11px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 font-medium">\u5F3A\u9632\u5237</span></div><p class="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">${ssrInterpolate(_ctx.$t("admin.settings.email.policy_strict_desc"))}</p></div></label></div></div></div><div class="bg-white dark:bg-[#121214] border border-gray-200 dark:border-gray-800/60 shadow-xl rounded-2xl overflow-hidden"><div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800/60 bg-gray-100 dark:bg-gray-900/20 flex items-center gap-3"><div class="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:envelope-fill",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><h2 class="text-lg font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.email.provider_title"))}</h2></div><div class="p-6 space-y-5"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.email.provider"),
        description: _ctx.$t("admin.settings.email.provider_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: unref(providerForm).code,
              "onUpdate:modelValue": ($event) => unref(providerForm).code = $event,
              items: availableProviders,
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_USelect, {
                modelValue: unref(providerForm).code,
                "onUpdate:modelValue": ($event) => unref(providerForm).code = $event,
                items: availableProviders,
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.email.provider_name")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(providerForm).name,
              "onUpdate:modelValue": ($event) => unref(providerForm).name = $event,
              placeholder: "Resend",
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: unref(providerForm).name,
                "onUpdate:modelValue": ($event) => unref(providerForm).name = $event,
                placeholder: "Resend",
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#09090b] rounded-xl border border-gray-200 dark:border-gray-800"><div class="flex flex-col gap-1"><span class="font-medium text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.email.enable"))}</span><span class="text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.settings.email.enable_desc"))}</span></div>`);
      _push(ssrRenderComponent(_component_USwitch, {
        modelValue: unref(providerForm).isActive,
        "onUpdate:modelValue": ($event) => unref(providerForm).isActive = $event
      }, null, _parent));
      _push(`</div><div class="pt-2 pb-4 border-b border-gray-200 dark:border-gray-800/60"><h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">${ssrInterpolate(_ctx.$t("admin.settings.email.config_title"))}</h3><p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${ssrInterpolate(_ctx.$t("admin.settings.email.config_desc"))}</p></div>`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.email.config_json"),
        description: _ctx.$t("admin.settings.email.config_json_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTextarea, {
              modelValue: unref(providerForm).configJson,
              "onUpdate:modelValue": ($event) => unref(providerForm).configJson = $event,
              rows: 6,
              size: "md",
              class: "font-mono text-sm w-full",
              placeholder: unref(configJsonPlaceholder),
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTextarea, {
                modelValue: unref(providerForm).configJson,
                "onUpdate:modelValue": ($event) => unref(providerForm).configJson = $event,
                rows: 6,
                size: "md",
                class: "font-mono text-sm w-full",
                placeholder: unref(configJsonPlaceholder),
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isCustomProvider)) {
        _push(`<div class="pt-2 pb-4 border-b border-gray-200 dark:border-gray-800/60"><h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">${ssrInterpolate(_ctx.$t("admin.settings.email.script_title"))}</h3><p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${ssrInterpolate(_ctx.$t("admin.settings.email.script_desc"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.email.default_template"),
        description: _ctx.$t("admin.settings.email.default_template_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: unref(providerForm).defaultTemplateCode,
              "onUpdate:modelValue": ($event) => unref(providerForm).defaultTemplateCode = $event,
              items: unref(defaultTemplateOptions),
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_USelect, {
                modelValue: unref(providerForm).defaultTemplateCode,
                "onUpdate:modelValue": ($event) => unref(providerForm).defaultTemplateCode = $event,
                items: unref(defaultTemplateOptions),
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isCustomProvider)) {
        _push(ssrRenderComponent(_component_UFormField, {
          label: _ctx.$t("admin.settings.email.send_script"),
          description: _ctx.$t("admin.settings.email.send_script_desc")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UTextarea, {
                modelValue: unref(providerForm).sendScript,
                "onUpdate:modelValue": ($event) => unref(providerForm).sendScript = $event,
                rows: 12,
                size: "md",
                class: "font-mono text-sm w-full",
                placeholder: unref(defaultResendScript),
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UTextarea, {
                  modelValue: unref(providerForm).sendScript,
                  "onUpdate:modelValue": ($event) => unref(providerForm).sendScript = $event,
                  rows: 12,
                  size: "md",
                  class: "font-mono text-sm w-full",
                  placeholder: unref(defaultResendScript),
                  ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UButton, {
        type: "button",
        color: "primary",
        variant: "outline",
        size: "md",
        class: "rounded-xl",
        onClick: saveProvider,
        loading: unref(isSavingProvider),
        disabled: !unref(hasAdminPerm)("settings:edit")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("admin.settings.email.save_provider"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("admin.settings.email.save_provider")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white dark:bg-[#121214] border border-gray-200 dark:border-gray-800/60 shadow-xl rounded-2xl overflow-hidden"><div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800/60 bg-gray-100 dark:bg-gray-900/20 flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:article-fill",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><h2 class="text-lg font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.email.templates_title"))}</h2></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        type: "button",
        size: "sm",
        color: "neutral",
        variant: "outline",
        class: "rounded-xl",
        disabled: !unref(hasAdminPerm)("settings:edit"),
        onClick: unref(loadDefaultTemplates)
      }, {
        leading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:download-simple",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:download-simple",
                class: "w-4 h-4"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Load Defaults `);
          } else {
            return [
              createTextVNode(" Load Defaults ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        type: "button",
        size: "sm",
        class: "rounded-xl",
        disabled: !unref(hasAdminPerm)("settings:edit"),
        onClick: unref(openNewTemplate)
      }, {
        leading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:plus",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:plus",
                class: "w-4 h-4"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ${ssrInterpolate(_ctx.$t("admin.settings.email.add_template"))}`);
          } else {
            return [
              createTextVNode(" " + toDisplayString(_ctx.$t("admin.settings.email.add_template")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(templates).length === 0) {
        _push(`<div class="p-12 text-center text-gray-500 dark:text-gray-400 text-sm">${ssrInterpolate(_ctx.$t("admin.settings.email.no_templates"))}</div>`);
      } else {
        _push(`<div class="divide-y divide-gray-200 dark:divide-gray-800/60"><!--[-->`);
        ssrRenderList(unref(templates), (tpl, idx) => {
          var _a2;
          _push(`<div class="px-6 py-4 flex items-start justify-between gap-6"><div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-1.5"><span class="shrink-0 text-xs font-mono bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">${ssrInterpolate(tpl.code)}</span><span class="font-medium text-gray-900 dark:text-white truncate">${ssrInterpolate(tpl.name)}</span></div><div class="text-sm text-gray-500 dark:text-gray-400 truncate mb-2">${ssrInterpolate(tpl.subject)}</div>`);
          if ((_a2 = tpl.variables) == null ? void 0 : _a2.length) {
            _push(`<div class="flex items-center gap-1.5 flex-wrap"><!--[-->`);
            ssrRenderList(tpl.variables, (v) => {
              _push(`<span class="text-[11px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded font-mono">${ssrInterpolate(v)}</span>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex items-center gap-1 shrink-0 pt-0.5">`);
          _push(ssrRenderComponent(_component_UButton, {
            type: "button",
            size: "xs",
            variant: "ghost",
            color: "neutral",
            icon: "ph:pencil-simple",
            onClick: ($event) => unref(editTemplate)(idx),
            disabled: !unref(hasAdminPerm)("settings:edit")
          }, null, _parent));
          _push(ssrRenderComponent(_component_UButton, {
            type: "button",
            size: "xs",
            variant: "ghost",
            color: "error",
            icon: "ph:trash",
            onClick: ($event) => unref(deleteTemplate)(idx),
            disabled: !unref(hasAdminPerm)("settings:edit")
          }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="bg-white dark:bg-[#121214] border border-gray-200 dark:border-gray-800/60 shadow-xl rounded-2xl overflow-hidden"><div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800/60 bg-gray-100 dark:bg-gray-900/20 flex items-center gap-3"><div class="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:paper-plane-tilt-fill",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><h2 class="text-lg font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.email.test_title"))}</h2></div><div class="p-6 space-y-4"><div class="flex items-end gap-4 flex-wrap">`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.email.test_to"),
        class: "w-full sm:flex-1 sm:min-w-[200px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(testEmail).to,
              "onUpdate:modelValue": ($event) => unref(testEmail).to = $event,
              placeholder: "test@example.com",
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: unref(testEmail).to,
                "onUpdate:modelValue": ($event) => unref(testEmail).to = $event,
                placeholder: "test@example.com",
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.email.test_template"),
        class: "w-full sm:flex-1 sm:min-w-[200px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: unref(testEmail).templateCode,
              "onUpdate:modelValue": ($event) => unref(testEmail).templateCode = $event,
              items: unref(templateOptions),
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_USelect, {
                modelValue: unref(testEmail).templateCode,
                "onUpdate:modelValue": ($event) => unref(testEmail).templateCode = $event,
                items: unref(templateOptions),
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        type: "button",
        color: "primary",
        size: "md",
        class: "rounded-xl bg-emerald-600 hover:bg-emerald-500 shrink-0",
        onClick: unref(sendTestEmail),
        loading: unref(isSendingTest),
        disabled: !unref(hasAdminPerm)("settings:edit")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("admin.settings.email.send_test"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("admin.settings.email.send_test")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(testResult)) {
        _push(`<div class="${ssrRenderClass([unref(testResult).ok ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20", "p-3 rounded-xl text-sm"])}">${ssrInterpolate(unref(testResult).ok ? `${_ctx.$t("admin.settings.email.test_success")} (ID: ${unref(testResult).messageId})` : `${_ctx.$t("admin.settings.email.test_failed")}: ${unref(testResult).error}`)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-white dark:bg-[#121214] border border-gray-200 dark:border-gray-800/60 shadow-xl rounded-2xl overflow-hidden"><div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800/60 bg-gray-100 dark:bg-gray-900/20 flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:clock-counter-clockwise-fill",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><div><h2 class="text-lg font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.email.logs_title"))}</h2><p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">${ssrInterpolate(_ctx.$t("admin.settings.email.logs_desc"))}</p></div></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        type: "button",
        size: "sm",
        variant: "soft",
        color: "neutral",
        class: "rounded-xl",
        loading: unref(logsLoading),
        onClick: fetchEmailLogs
      }, {
        leading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-clockwise",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:arrow-clockwise",
                class: "w-4 h-4"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ${ssrInterpolate(_ctx.$t("admin.settings.email.refresh_logs"))}`);
          } else {
            return [
              createTextVNode(" " + toDisplayString(_ctx.$t("admin.settings.email.refresh_logs")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3 flex-wrap bg-gray-50/50 dark:bg-black/20">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(logsSearch),
        "onUpdate:modelValue": ($event) => isRef(logsSearch) ? logsSearch.value = $event : null,
        placeholder: "\u641C\u7D22\u6536\u4EF6\u4EBA / \u90AE\u4EF6\u4E3B\u9898...",
        size: "sm",
        class: "w-full sm:w-64",
        icon: "ph:magnifying-glass",
        onKeydown: fetchEmailLogs
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: unref(logsStatus),
        "onUpdate:modelValue": ($event) => isRef(logsStatus) ? logsStatus.value = $event : null,
        items: unref(statusFilterOptions),
        size: "sm",
        class: "w-full sm:w-36",
        onChange: fetchEmailLogs
      }, null, _parent));
      _push(`</div>`);
      if (unref(logsLoading)) {
        _push(`<div class="p-8 text-center text-sm text-gray-500">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:spinner",
          class: "w-6 h-6 animate-spin mx-auto mb-2 text-indigo-500"
        }, null, _parent));
        _push(` \u6B63\u5728\u52A0\u8F7D\u65E5\u5FD7... </div>`);
      } else if (unref(emailLogsList).length === 0) {
        _push(`<div class="p-10 text-center text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.settings.email.no_logs"))}</div>`);
      } else {
        _push(`<div class="divide-y divide-gray-200 dark:divide-gray-800/60 overflow-x-auto"><!--[-->`);
        ssrRenderList(unref(emailLogsList), (log) => {
          _push(`<div class="px-6 py-3.5 flex items-center justify-between gap-4 text-xs sm:text-sm hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors"><div class="min-w-0 flex-1 space-y-1"><div class="flex items-center gap-2 flex-wrap"><span class="font-medium text-gray-900 dark:text-white truncate">${ssrInterpolate(log.to)}</span>`);
          _push(ssrRenderComponent(_component_UBadge, {
            color: log.status === "success" ? "success" : "error",
            variant: "subtle",
            size: "xs"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(log.status === "success" ? _ctx.$t("admin.settings.email.log_status_success") : _ctx.$t("admin.settings.email.log_status_failed"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(log.status === "success" ? _ctx.$t("admin.settings.email.log_status_success") : _ctx.$t("admin.settings.email.log_status_failed")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (log.templateCode) {
            _push(`<span class="text-[11px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 font-mono">${ssrInterpolate(log.templateCode)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="text-gray-600 dark:text-gray-300 truncate text-xs">${ssrInterpolate(log.subject)}</div>`);
          if (log.error) {
            _push(`<div class="text-xs text-red-500 truncate">${ssrInterpolate(log.error)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex items-center gap-2 shrink-0"><span class="text-xs text-gray-400">${ssrInterpolate(formatDateTime(log.createdAt))}</span>`);
          if (log.html) {
            _push(ssrRenderComponent(_component_UButton, {
              size: "xs",
              variant: "soft",
              color: "primary",
              class: "rounded-lg",
              onClick: ($event) => openLogPreview(log)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t("admin.settings.email.log_preview"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.settings.email.log_preview")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_UButton, {
            size: "xs",
            variant: "ghost",
            color: "neutral",
            icon: "ph:arrow-clockwise",
            class: "rounded-lg",
            title: _ctx.$t("admin.settings.email.log_resend"),
            loading: unref(resendingId) === log.id,
            onClick: ($event) => resendEmailLog(log)
          }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_FullScreenModal, {
        modelValue: unref(isPreviewModalOpen),
        "onUpdate:modelValue": ($event) => isRef(isPreviewModalOpen) ? isPreviewModalOpen.value = $event : null,
        title: ((_a = unref(selectedLog)) == null ? void 0 : _a.subject) || _ctx.$t("admin.settings.email.log_preview_modal_title"),
        "default-fullscreen": false,
        "max-width": "sm:max-w-2xl"
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between w-full"${_scopeId}>`);
            if (unref(selectedLog)) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                icon: "ph:paper-plane-tilt",
                loading: unref(resendingId) === unref(selectedLog).id,
                onClick: ($event) => resendEmailLog(unref(selectedLog))
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("admin.settings.email.log_resend"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("admin.settings.email.log_resend")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "soft",
              onClick: ($event) => isPreviewModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.settings.email.cancel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.settings.email.cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between w-full" }, [
                unref(selectedLog) ? (openBlock(), createBlock(_component_UButton, {
                  key: 0,
                  color: "primary",
                  icon: "ph:paper-plane-tilt",
                  loading: unref(resendingId) === unref(selectedLog).id,
                  onClick: ($event) => resendEmailLog(unref(selectedLog))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("admin.settings.email.log_resend")), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"])) : createCommentVNode("", true),
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "soft",
                  onClick: ($event) => isPreviewModalOpen.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("admin.settings.email.cancel")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2;
          if (_push2) {
            if (unref(selectedLog)) {
              _push2(`<div class="space-y-4"${_scopeId}><div class="flex items-start justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-3"${_scopeId}><div${_scopeId}><p class="text-xs text-gray-500"${_scopeId}>To: <span class="font-mono text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(unref(selectedLog).to)}</span> \xB7 ${ssrInterpolate(formatDateTime(unref(selectedLog).createdAt))}</p></div>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: unref(selectedLog).status === "success" ? "success" : "error",
                variant: "subtle"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(selectedLog).status === "success" ? "\u6210\u529F" : "\u5931\u8D25")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(selectedLog).status === "success" ? "\u6210\u529F" : "\u5931\u8D25"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="space-y-1.5"${_scopeId}><div class="text-xs font-medium text-gray-500"${_scopeId}>\u90AE\u4EF6\u4E3B\u9898\uFF1A</div><div class="text-sm font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-black/30 p-2.5 rounded-lg border border-gray-200 dark:border-gray-800"${_scopeId}>${ssrInterpolate(unref(selectedLog).subject)}</div></div><div class="space-y-1.5"${_scopeId}><div class="text-xs font-medium text-gray-500"${_scopeId}>HTML \u539F\u6587\u5FEB\u7167\uFF1A</div><div class="border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-white dark:bg-zinc-900 max-h-96 overflow-auto text-xs font-mono select-all"${_scopeId}><div class="prose dark:prose-invert max-w-none"${_scopeId}>${(_a2 = unref(selectedLog).html) != null ? _a2 : ""}</div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(selectedLog) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "space-y-4"
              }, [
                createVNode("div", { class: "flex items-start justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-3" }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "text-xs text-gray-500" }, [
                      createTextVNode("To: "),
                      createVNode("span", { class: "font-mono text-gray-700 dark:text-gray-300" }, toDisplayString(unref(selectedLog).to), 1),
                      createTextVNode(" \xB7 " + toDisplayString(formatDateTime(unref(selectedLog).createdAt)), 1)
                    ])
                  ]),
                  createVNode(_component_UBadge, {
                    color: unref(selectedLog).status === "success" ? "success" : "error",
                    variant: "subtle"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(selectedLog).status === "success" ? "\u6210\u529F" : "\u5931\u8D25"), 1)
                    ]),
                    _: 1
                  }, 8, ["color"])
                ]),
                createVNode("div", { class: "space-y-1.5" }, [
                  createVNode("div", { class: "text-xs font-medium text-gray-500" }, "\u90AE\u4EF6\u4E3B\u9898\uFF1A"),
                  createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-black/30 p-2.5 rounded-lg border border-gray-200 dark:border-gray-800" }, toDisplayString(unref(selectedLog).subject), 1)
                ]),
                createVNode("div", { class: "space-y-1.5" }, [
                  createVNode("div", { class: "text-xs font-medium text-gray-500" }, "HTML \u539F\u6587\u5FEB\u7167\uFF1A"),
                  createVNode("div", { class: "border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-white dark:bg-zinc-900 max-h-96 overflow-auto text-xs font-mono select-all" }, [
                    createVNode("div", {
                      innerHTML: unref(selectedLog).html,
                      class: "prose dark:prose-invert max-w-none"
                    }, null, 8, ["innerHTML"])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(EmailTemplateModal, {
        open: unref(isTemplateModalOpen),
        title: unref(editingTemplateIndex) >= 0 ? _ctx.$t("admin.settings.email.edit_template_title") : _ctx.$t("admin.settings.email.new_template_title"),
        draft: unref(editingTemplate),
        "variables-input": unref(variablesInput),
        "is-editing": unref(editingTemplateIndex) >= 0,
        "onUpdate:open": ($event) => isTemplateModalOpen.value = $event,
        "onUpdate:variablesInput": ($event) => variablesInput.value = $event,
        onSave: unref(saveTemplate)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/settings/EmailTab.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main$4, { __name: "AdminSettingsEmailTab" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CompanyTab",
  __ssrInlineRender: true,
  props: {
    form: {}
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const toast = useToast();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const wechatQrInputRef = ref(null);
    const whatsappQrInputRef = ref(null);
    const telegramQrInputRef = ref(null);
    const isUploading = ref({
      wechat_qr: false,
      whatsapp_qr: false,
      telegram_qr: false
    });
    const uploadQr = async (event, field, inputRef) => {
      var _a;
      const input = event.target;
      if (!input.files || input.files.length === 0) return;
      const file = input.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("file", file);
      isUploading.value[field] = true;
      try {
        const res = await $fetch("/api/admin/upload", {
          method: "POST",
          body: formData
        });
        if (res && res.url) {
          props.form[field] = res.url;
          toast.add({
            title: t("admin.common.success"),
            description: t("admin.settings.company.toast_qr_success"),
            color: "success"
          });
        }
      } catch (error) {
        toast.add({
          title: t("admin.common.error"),
          description: ((_a = error.data) == null ? void 0 : _a.message) || t("admin.settings.company.toast_qr_failed"),
          color: "error"
        });
      } finally {
        isUploading.value[field] = false;
        if (inputRef && inputRef.value) {
          inputRef.value.value = "";
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_UTextarea = _sfc_main$g;
      const _component_UButton = _sfc_main$B;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-[#121214] border border-gray-200 dark:border-gray-800/60 shadow-xl rounded-2xl overflow-hidden" }, _attrs))}><div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800/60 bg-gray-100 dark:bg-gray-900/20 flex items-center gap-3"><div class="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:buildings-fill",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><h2 class="text-lg font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.company.title"))}</h2></div><div class="p-6 space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6">`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.company.company_name")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.form.company_name,
              "onUpdate:modelValue": ($event) => __props.form.company_name = $event,
              placeholder: "Your Company Ltd.",
              icon: "ph:briefcase",
              size: "md",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: __props.form.company_name,
                "onUpdate:modelValue": ($event) => __props.form.company_name = $event,
                placeholder: "Your Company Ltd.",
                icon: "ph:briefcase",
                size: "md",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.company.company_phone")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.form.company_phone,
              "onUpdate:modelValue": ($event) => __props.form.company_phone = $event,
              placeholder: "+1 (555) 123-4567",
              icon: "ph:phone",
              size: "md",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: __props.form.company_phone,
                "onUpdate:modelValue": ($event) => __props.form.company_phone = $event,
                placeholder: "+1 (555) 123-4567",
                icon: "ph:phone",
                size: "md",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.company.company_address")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTextarea, {
              modelValue: __props.form.company_address,
              "onUpdate:modelValue": ($event) => __props.form.company_address = $event,
              rows: 3,
              class: "w-full",
              placeholder: "123 Business St, City, Country",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTextarea, {
                modelValue: __props.form.company_address,
                "onUpdate:modelValue": ($event) => __props.form.company_address = $event,
                rows: 3,
                class: "w-full",
                placeholder: "123 Business St, City, Country",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pt-2 border-t border-gray-200 dark:border-gray-800/60"><h3 class="text-sm font-medium text-gray-600 dark:text-gray-300 mb-6">${ssrInterpolate(_ctx.$t("admin.settings.company.social_title"))}</h3><div class="space-y-6"><div class="bg-white dark:bg-[#18181b] border border-gray-200 dark:border-gray-800/40 rounded-xl p-5"><div class="flex items-center gap-3 mb-4"><div class="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:wechat-logo",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><h4 class="text-base font-medium text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.company.wechat"))}</h4></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6">`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.company.wechat_id")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.form.wechat,
              "onUpdate:modelValue": ($event) => __props.form.wechat = $event,
              placeholder: "Enter WeChat ID",
              icon: "ph:identification-badge",
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: __props.form.wechat,
                "onUpdate:modelValue": ($event) => __props.form.wechat = $event,
                placeholder: "Enter WeChat ID",
                icon: "ph:identification-badge",
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.company.qr_code")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.form.wechat_qr,
              "onUpdate:modelValue": ($event) => __props.form.wechat_qr = $event,
              placeholder: "QR Code URL",
              icon: "ph:qr-code",
              size: "md",
              class: "flex-1",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
            _push2(`<input type="file" class="hidden" accept="image/*"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              icon: "ph:upload-simple",
              loading: isUploading.value.wechat_qr,
              disabled: !unref(hasAdminPerm)("settings:edit"),
              onClick: () => {
                var _a;
                return (_a = wechatQrInputRef.value) == null ? void 0 : _a.click();
              }
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2 w-full" }, [
                createVNode(_component_UInput, {
                  modelValue: __props.form.wechat_qr,
                  "onUpdate:modelValue": ($event) => __props.form.wechat_qr = $event,
                  placeholder: "QR Code URL",
                  icon: "ph:qr-code",
                  size: "md",
                  class: "flex-1",
                  ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("input", {
                  type: "file",
                  ref_key: "wechatQrInputRef",
                  ref: wechatQrInputRef,
                  class: "hidden",
                  accept: "image/*",
                  onChange: (e) => uploadQr(e, "wechat_qr", wechatQrInputRef.value)
                }, null, 40, ["onChange"]),
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  icon: "ph:upload-simple",
                  loading: isUploading.value.wechat_qr,
                  disabled: !unref(hasAdminPerm)("settings:edit"),
                  onClick: () => {
                    var _a;
                    return (_a = wechatQrInputRef.value) == null ? void 0 : _a.click();
                  }
                }, null, 8, ["loading", "disabled", "onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white dark:bg-[#18181b] border border-gray-200 dark:border-gray-800/40 rounded-xl p-5"><div class="flex items-center gap-3 mb-4"><div class="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:whatsapp-logo",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><h4 class="text-base font-medium text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.company.whatsapp"))}</h4></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6">`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.company.whatsapp_number")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.form.whatsapp,
              "onUpdate:modelValue": ($event) => __props.form.whatsapp = $event,
              placeholder: "Enter WhatsApp Number or Link",
              icon: "ph:phone",
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: __props.form.whatsapp,
                "onUpdate:modelValue": ($event) => __props.form.whatsapp = $event,
                placeholder: "Enter WhatsApp Number or Link",
                icon: "ph:phone",
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.company.qr_code")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.form.whatsapp_qr,
              "onUpdate:modelValue": ($event) => __props.form.whatsapp_qr = $event,
              placeholder: "QR Code URL",
              icon: "ph:qr-code",
              size: "md",
              class: "flex-1",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
            _push2(`<input type="file" class="hidden" accept="image/*"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              icon: "ph:upload-simple",
              loading: isUploading.value.whatsapp_qr,
              disabled: !unref(hasAdminPerm)("settings:edit"),
              onClick: () => {
                var _a;
                return (_a = whatsappQrInputRef.value) == null ? void 0 : _a.click();
              }
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2 w-full" }, [
                createVNode(_component_UInput, {
                  modelValue: __props.form.whatsapp_qr,
                  "onUpdate:modelValue": ($event) => __props.form.whatsapp_qr = $event,
                  placeholder: "QR Code URL",
                  icon: "ph:qr-code",
                  size: "md",
                  class: "flex-1",
                  ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("input", {
                  type: "file",
                  ref_key: "whatsappQrInputRef",
                  ref: whatsappQrInputRef,
                  class: "hidden",
                  accept: "image/*",
                  onChange: (e) => uploadQr(e, "whatsapp_qr", whatsappQrInputRef.value)
                }, null, 40, ["onChange"]),
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  icon: "ph:upload-simple",
                  loading: isUploading.value.whatsapp_qr,
                  disabled: !unref(hasAdminPerm)("settings:edit"),
                  onClick: () => {
                    var _a;
                    return (_a = whatsappQrInputRef.value) == null ? void 0 : _a.click();
                  }
                }, null, 8, ["loading", "disabled", "onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white dark:bg-[#18181b] border border-gray-200 dark:border-gray-800/40 rounded-xl p-5"><div class="flex items-center gap-3 mb-4"><div class="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:telegram-logo",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><h4 class="text-base font-medium text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.company.telegram"))}</h4></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6">`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.company.telegram_username")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.form.telegram,
              "onUpdate:modelValue": ($event) => __props.form.telegram = $event,
              placeholder: "Enter @username or Link",
              icon: "ph:at",
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: __props.form.telegram,
                "onUpdate:modelValue": ($event) => __props.form.telegram = $event,
                placeholder: "Enter @username or Link",
                icon: "ph:at",
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.company.qr_code")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.form.telegram_qr,
              "onUpdate:modelValue": ($event) => __props.form.telegram_qr = $event,
              placeholder: "QR Code URL",
              icon: "ph:qr-code",
              size: "md",
              class: "flex-1",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
            _push2(`<input type="file" class="hidden" accept="image/*"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              icon: "ph:upload-simple",
              loading: isUploading.value.telegram_qr,
              disabled: !unref(hasAdminPerm)("settings:edit"),
              onClick: () => {
                var _a;
                return (_a = telegramQrInputRef.value) == null ? void 0 : _a.click();
              }
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2 w-full" }, [
                createVNode(_component_UInput, {
                  modelValue: __props.form.telegram_qr,
                  "onUpdate:modelValue": ($event) => __props.form.telegram_qr = $event,
                  placeholder: "QR Code URL",
                  icon: "ph:qr-code",
                  size: "md",
                  class: "flex-1",
                  ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("input", {
                  type: "file",
                  ref_key: "telegramQrInputRef",
                  ref: telegramQrInputRef,
                  class: "hidden",
                  accept: "image/*",
                  onChange: (e) => uploadQr(e, "telegram_qr", telegramQrInputRef.value)
                }, null, 40, ["onChange"]),
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  icon: "ph:upload-simple",
                  loading: isUploading.value.telegram_qr,
                  disabled: !unref(hasAdminPerm)("settings:edit"),
                  onClick: () => {
                    var _a;
                    return (_a = telegramQrInputRef.value) == null ? void 0 : _a.click();
                  }
                }, null, 8, ["loading", "disabled", "onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/settings/CompanyTab.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_10 = Object.assign(_sfc_main$3, { __name: "AdminSettingsCompanyTab" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AutomationsTab",
  __ssrInlineRender: true,
  setup(__props) {
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const { data: actionsData } = useFetch(
      "/api/admin/event-rules/actions",
      { default: () => ({ code: 0, data: { systemActions: [], themeActions: [] } }) },
      "$swy-JGeEc_"
      /* nuxt-injected */
    );
    const themeActions = computed(() => {
      var _a, _b;
      return ((_b = (_a = actionsData.value) == null ? void 0 : _a.data) == null ? void 0 : _b.themeActions) || [];
    });
    const selectedThemeAction = computed(() => themeActions.value.find((t) => t.key === form.action) || null);
    const eventOptions = [
      { label: "\u7528\u6237\u6CE8\u518C\u6210\u529F", value: "user.registered" },
      { label: "\u8BA2\u5355\u652F\u4ED8\u6210\u529F", value: "order.paid" },
      { label: "\u8BA2\u9605\u751F\u6548", value: "subscription.apply" }
    ];
    const actionOptions = computed(() => {
      const baseActions = [
        { label: "\u53D1\u653E\u5956\u52B1(\u79EF\u5206/\u4F59\u989D)", value: "grant_reward" },
        { label: "\u53D1\u9001 Webhook \u56DE\u8C03", value: "send_webhook" }
      ];
      const themeOpts = themeActions.value.map((t) => ({
        label: `[${t.theme || "\u4E3B\u9898"}] ${t.label || t.key}`,
        value: t.key
      }));
      return [...baseActions, ...themeOpts];
    });
    const modeOptions = [
      { label: "\u5F02\u6B65\u6267\u884C (\u63A8\u8350\uFF0C\u540E\u53F0\u975E\u963B\u585E)", value: "async" },
      { label: "\u540C\u6B65\u6267\u884C (\u5F3A\u95E8\u7981\uFF0C\u5931\u8D25\u5219\u62E6\u622A\u5E76\u62A5\u9519)", value: "sync" }
    ];
    const balanceTypeOptions = [
      { label: "\u79EF\u5206", value: "points" },
      { label: "\u4F59\u989D(\u5145\u503C)", value: "cash" },
      { label: "\u8D60\u9001", value: "grant" }
    ];
    const urlModeOptions = [
      { label: "\u7CFB\u7EDF\u9ED8\u8BA4 (\u96C6\u6210\u8BBE\u7F6E\u4E2D\u7684 Webhook URL)", value: "default" },
      { label: "\u81EA\u5B9A\u4E49 Webhook \u5730\u5740", value: "custom" }
    ];
    const eventLabel = (v) => {
      var _a;
      return ((_a = eventOptions.find((o) => o.value === v)) == null ? void 0 : _a.label) || v;
    };
    const actionLabel = (v) => {
      var _a;
      return ((_a = actionOptions.value.find((o) => o.value === v)) == null ? void 0 : _a.label) || v;
    };
    const balanceTypeLabel = (v) => {
      var _a;
      return ((_a = balanceTypeOptions.find((o) => o.value === v)) == null ? void 0 : _a.label) || v;
    };
    const configSummary = (rule) => {
      const c = rule.config || {};
      const modeTag = c.mode === "sync" ? "[\u540C\u6B65] " : "";
      if (rule.action === "grant_reward") {
        return modeTag + (c.balanceType === "points" ? `\u53D1\u653E ${c.amount || 0} \u79EF\u5206` : `\u53D1\u653E $${c.amount || 0} ${balanceTypeLabel(c.balanceType)}`);
      }
      if (rule.action === "send_webhook") {
        if (c.urlMode === "custom") {
          return modeTag + `Webhook: ${c.customUrl || "(\u672A\u914D\u7F6E\u5730\u5740)"}`;
        }
        return modeTag + "Webhook: \u7CFB\u7EDF\u9ED8\u8BA4\u5730\u5740";
      }
      const matchedTheme = themeActions.value.find((t) => t.key === rule.action);
      if (matchedTheme) {
        return modeTag + (matchedTheme.label || rule.action);
      }
      if (rule.action === "qingpu:fulfill_trial") {
        return modeTag + "\u8F7B\u94FA\uFF1A\u8BD5\u7528\u8BA2\u5355\u5C65\u7EA6\u4E0E\u6743\u76CA\u5F00\u901A";
      }
      return modeTag + (rule.action || JSON.stringify(rule.config || {}));
    };
    const { data, pending, refresh } = useFetch(
      "/api/admin/event-rules",
      { default: () => [] },
      "$c9Q8HxXPor"
      /* nuxt-injected */
    );
    const rules = computed(() => data.value || []);
    const builtinRules = computed(() => rules.value.filter((r) => r.isBuiltin));
    const modalOpen = ref(false);
    const saving = ref(false);
    const formError = ref("");
    const form = reactive({
      id: null,
      event: "user.registered",
      action: "grant_reward",
      mode: "async",
      balanceType: "points",
      amount: 1e3,
      urlMode: "default",
      customUrl: "",
      customToken: "",
      remark: "\u6CE8\u518C\u5956\u52B1",
      enabled: true
    });
    const openCreate = () => {
      Object.assign(form, {
        id: null,
        event: "user.registered",
        action: "grant_reward",
        mode: "async",
        balanceType: "points",
        amount: 1e3,
        urlMode: "default",
        customUrl: "",
        customToken: "",
        remark: "\u6CE8\u518C\u5956\u52B1",
        enabled: true
      });
      formError.value = "";
      modalOpen.value = true;
    };
    const openEdit = (rule) => {
      const c = rule.config || {};
      Object.assign(form, {
        id: rule.id,
        event: rule.event,
        action: rule.action,
        mode: c.mode || "async",
        balanceType: c.balanceType || "points",
        amount: Number(c.amount || 0),
        urlMode: c.urlMode || "default",
        customUrl: c.customUrl || "",
        customToken: c.customToken || "",
        remark: c.remark || rule.remark || "",
        enabled: !!rule.enabled
      });
      formError.value = "";
      modalOpen.value = true;
    };
    const buildPayload = () => {
      let config = {
        mode: form.mode || "async"
      };
      if (form.action === "grant_reward") {
        Object.assign(config, {
          balanceType: form.balanceType,
          amount: Number(form.amount) || 0,
          remark: form.remark
        });
      } else if (form.action === "send_webhook") {
        Object.assign(config, {
          urlMode: form.urlMode,
          customUrl: form.urlMode === "custom" ? String(form.customUrl || "").trim() : "",
          customToken: form.urlMode === "custom" ? String(form.customToken || "").trim() : ""
        });
      }
      return {
        event: form.event,
        action: form.action,
        enabled: form.enabled,
        remark: form.remark,
        config
      };
    };
    const save = async () => {
      var _a;
      if (form.action === "grant_reward" && (!form.amount || Number(form.amount) <= 0)) {
        formError.value = "\u5956\u52B1\u6570\u91CF\u5FC5\u987B\u5927\u4E8E 0";
        return;
      }
      if (form.action === "send_webhook" && form.urlMode === "custom") {
        const trimmedUrl = String(form.customUrl || "").trim();
        if (!trimmedUrl) {
          formError.value = "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49 Webhook URL";
          return;
        }
        if (!/^https?:\/\/.+/i.test(trimmedUrl)) {
          formError.value = "Webhook URL \u683C\u5F0F\u4E0D\u6B63\u786E\uFF08\u5FC5\u987B\u4EE5 http:// \u6216 https:// \u5F00\u5934\uFF09";
          return;
        }
      }
      saving.value = true;
      try {
        if (form.id) {
          await $fetch(`/api/admin/event-rules/${form.id}`, { method: "PUT", body: buildPayload() });
        } else {
          await $fetch("/api/admin/event-rules", { method: "POST", body: buildPayload() });
        }
        modalOpen.value = false;
        await refresh();
      } catch (e) {
        formError.value = ((_a = e == null ? void 0 : e.data) == null ? void 0 : _a.statusMessage) || (e == null ? void 0 : e.statusMessage) || "\u4FDD\u5B58\u5931\u8D25";
      } finally {
        saving.value = false;
      }
    };
    const toggleEnabled = async (rule, value) => {
      try {
        await $fetch(`/api/admin/event-rules/${rule.id}`, { method: "PUT", body: { enabled: value } });
      } finally {
        await refresh();
      }
    };
    const removeRule = async (rule) => {
      if (!confirm("\u786E\u5B9A\u5220\u9664\u8BE5\u89C4\u5219?")) return;
      try {
        await $fetch(`/api/admin/event-rules/${rule.id}`, { method: "DELETE" });
      } finally {
        await refresh();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$B;
      const _component_UIcon = _sfc_main$G;
      const _component_USwitch = _sfc_main$c;
      const _component_UModal = _sfc_main$s;
      const _component_USelect = _sfc_main$j;
      const _component_UInput = _sfc_main$k;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-5" }, _attrs))}><div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h2 class="text-lg font-semibold text-gray-900 dark:text-white">\u4E8B\u4EF6\u81EA\u52A8\u5316</h2><p class="text-sm text-gray-500 dark:text-gray-400 mt-1">\u914D\u7F6E\u67D0\u4E2A\u4E8B\u4EF6\u53D1\u751F\u540E\u81EA\u52A8\u6267\u884C\u7684\u52A8\u4F5C,\u4F8B\u5982\u300C\u7528\u6237\u6CE8\u518C\u6210\u529F \u2192 \u53D1\u653E\u79EF\u5206\u5956\u52B1\u300D\u3002</p></div>`);
      if (unref(hasAdminPerm)("settings:edit")) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "primary",
          class: "bg-purple-600 hover:bg-purple-500 text-white shrink-0",
          icon: "ph:plus-bold",
          onClick: openCreate
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u65B0\u5EFA\u89C4\u5219`);
            } else {
              return [
                createTextVNode("\u65B0\u5EFA\u89C4\u5219")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (builtinRules.value.length) {
        _push(`<div class="p-4 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 border border-purple-200/60 dark:border-purple-800/40 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-purple-600/10 dark:bg-purple-400/10 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:sparkle-fill",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</div><div><div class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"><span>\u5F53\u524D\u4E3B\u9898\u5185\u7F6E\u81EA\u52A8\u5316\u4E8B\u4EF6</span><span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">${ssrInterpolate(builtinRules.value.length)} \u9879\u5DF2\u5C31\u7EEA </span></div><p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5"> \u5F53\u524D\u6FC0\u6D3B\u4E3B\u9898\u901A\u8FC7\u89E3\u8026\u5951\u7EA6\u81EA\u52A8\u6302\u8F7D\u6838\u5FC3\u4E1A\u52A1\u751F\u547D\u5468\u671F\uFF08\u5982 AINode \u51ED\u8BC1\u540C\u6B65\u3001\u8BD5\u7528\u8BA2\u5355\u5C65\u7EA6\uFF09\uFF0C\u968F\u7CFB\u7EDF\u542F\u52A8\u81EA\u52A8\u751F\u6548\u3002 </p></div></div><div class="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 px-2.5 py-1 rounded-lg shrink-0">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-circle-fill",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`<span>\u81EA\u52A8\u751F\u6548\u4E2D</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border border-gray-200 dark:border-gray-800/50 rounded-2xl overflow-hidden">`);
      if (unref(pending)) {
        _push(`<div class="p-10 text-center text-gray-400">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:spinner-gap-bold",
          class: "w-6 h-6 animate-spin inline-block"
        }, null, _parent));
        _push(`</div>`);
      } else if (!rules.value.length) {
        _push(`<div class="p-12 text-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:lightning-duotone",
          class: "w-10 h-10 text-purple-400 mx-auto mb-3"
        }, null, _parent));
        _push(`<p class="text-gray-600 dark:text-gray-300">\u8FD8\u6CA1\u6709\u89C4\u5219</p><p class="text-xs text-gray-400 mt-1">\u70B9\u51FB\u300C\u65B0\u5EFA\u89C4\u5219\u300D,\u4F8B\u5982\u7ED9\u65B0\u6CE8\u518C\u7528\u6237\u81EA\u52A8\u53D1\u653E\u79EF\u5206\u3002</p></div>`);
      } else {
        _push(`<table class="w-full text-sm"><thead><tr class="text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800/70"><th class="text-left font-medium py-3 px-5">\u4E8B\u4EF6</th><th class="text-left font-medium py-3 px-5">\u52A8\u4F5C / \u4E1A\u52A1\u8BF4\u660E</th><th class="text-left font-medium py-3 px-5">\u6267\u884C\u914D\u7F6E</th><th class="text-left font-medium py-3 px-5">\u72B6\u6001</th><th class="text-right font-medium py-3 px-5">\u64CD\u4F5C</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(rules.value, (rule) => {
          var _a;
          _push(`<tr class="${ssrRenderClass([{ "bg-purple-50/30 dark:bg-purple-950/10": rule.isBuiltin }, "border-b border-gray-100 dark:border-gray-800/50"])}"><td class="py-3 px-5 text-gray-900 dark:text-white"><div class="flex items-center gap-2"><span class="font-medium">${ssrInterpolate(eventLabel(rule.event))}</span>`);
          if (rule.isBuiltin) {
            _push(`<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">${ssrInterpolate(rule.theme ? `\u4E3B\u9898\u5185\u7F6E \xB7 ${rule.theme}` : "\u4E3B\u9898\u5185\u7F6E")}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></td><td class="py-3 px-5"><div class="text-gray-800 dark:text-gray-200 font-medium">${ssrInterpolate(actionLabel(rule.action))}</div>`);
          if ((_a = rule.config) == null ? void 0 : _a.description) {
            _push(`<div class="text-xs text-gray-400 dark:text-gray-500 mt-0.5 max-w-md">${ssrInterpolate(rule.config.description)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td><td class="py-3 px-5 text-gray-500 dark:text-gray-400">${ssrInterpolate(configSummary(rule))}</td><td class="py-3 px-5">`);
          _push(ssrRenderComponent(_component_USwitch, {
            "model-value": rule.enabled,
            disabled: rule.isBuiltin || !unref(hasAdminPerm)("settings:edit"),
            "onUpdate:modelValue": (v) => toggleEnabled(rule, v)
          }, null, _parent));
          _push(`</td><td class="py-3 px-5 text-right">`);
          if (rule.isBuiltin) {
            _push(`<span class="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 px-2 py-0.5 rounded" title="\u4E3B\u9898\u4EE3\u7801\u6CE8\u518C\uFF0C\u81EA\u52A8\u751F\u6548">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:lock-simple-bold",
              class: "w-3.5 h-3.5"
            }, null, _parent));
            _push(` \u5DF2\u81EA\u52A8\u751F\u6548 </span>`);
          } else {
            _push(`<!--[-->`);
            _push(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:pencil-simple",
              size: "sm",
              onClick: ($event) => openEdit(rule),
              disabled: !unref(hasAdminPerm)("settings:edit")
            }, null, _parent));
            _push(ssrRenderComponent(_component_UButton, {
              color: "error",
              variant: "ghost",
              icon: "ph:trash",
              size: "sm",
              onClick: ($event) => removeRule(rule),
              disabled: !unref(hasAdminPerm)("settings:edit")
            }, null, _parent));
            _push(`<!--]-->`);
          }
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: modalOpen.value,
        "onUpdate:open": ($event) => modalOpen.value = $event,
        ui: { content: "sm:max-w-lg" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-4"${_scopeId}><h3 class="text-xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(form.id ? "\u7F16\u8F91\u89C4\u5219" : "\u65B0\u5EFA\u89C4\u5219")}</h3><div${_scopeId}><label class="block text-xs text-gray-500 mb-1"${_scopeId}>\u4E8B\u4EF6</label>`);
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: form.event,
              "onUpdate:modelValue": ($event) => form.event = $event,
              items: eventOptions,
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-xs text-gray-500 mb-1"${_scopeId}>\u52A8\u4F5C</label>`);
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: form.action,
              "onUpdate:modelValue": ($event) => form.action = $event,
              items: actionOptions.value,
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-xs text-gray-500 mb-1"${_scopeId}>\u6267\u884C\u6A21\u5F0F</label>`);
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: form.mode,
              "onUpdate:modelValue": ($event) => form.mode = $event,
              items: modeOptions,
              class: "w-full"
            }, null, _parent2, _scopeId));
            if (form.mode === "sync") {
              _push2(`<p class="text-xs text-amber-500 dark:text-amber-400 mt-1.5 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:warning-circle-bold",
                class: "w-3.5 h-3.5 shrink-0"
              }, null, _parent2, _scopeId));
              _push2(` \u540C\u6B65\u6A21\u5F0F\u4E0B\uFF0C\u82E5\u6B64\u52A8\u4F5C\u6267\u884C\u5931\u8D25\u6216\u8D85\u65F6\uFF0C\u5C06\u76F4\u63A5\u62E6\u622A\u5F53\u524D\u4E1A\u52A1\uFF08\u5982\u6CE8\u518C/\u652F\u4ED8\uFF09\u5E76\u5411\u7528\u6237\u62A5\u9519\u3002 </p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (form.action === "grant_reward") {
              _push2(`<!--[--><div class="grid grid-cols-2 gap-3"${_scopeId}><div${_scopeId}><label class="block text-xs text-gray-500 mb-1"${_scopeId}>\u5956\u52B1\u7C7B\u578B</label>`);
              _push2(ssrRenderComponent(_component_USelect, {
                modelValue: form.balanceType,
                "onUpdate:modelValue": ($event) => form.balanceType = $event,
                items: balanceTypeOptions,
                class: "w-full"
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="block text-xs text-gray-500 mb-1"${_scopeId}>${ssrInterpolate(form.balanceType === "points" ? "\u79EF\u5206\u6570\u91CF" : "\u91D1\u989D($)")}</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: form.amount,
                "onUpdate:modelValue": ($event) => form.amount = $event,
                modelModifiers: { number: true },
                type: "number",
                min: "0",
                step: "0.0001",
                class: "w-full"
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div${_scopeId}><label class="block text-xs text-gray-500 mb-1"${_scopeId}>\u5907\u6CE8(\u8D26\u5355\u663E\u793A)</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: form.remark,
                "onUpdate:modelValue": ($event) => form.remark = $event,
                placeholder: "\u5982:\u6CE8\u518C\u5956\u52B1",
                class: "w-full"
              }, null, _parent2, _scopeId));
              _push2(`</div><!--]-->`);
            } else if (form.action === "send_webhook") {
              _push2(`<!--[--><div${_scopeId}><label class="block text-xs text-gray-500 mb-1"${_scopeId}>\u56DE\u8C03\u5730\u5740\u6765\u6E90</label>`);
              _push2(ssrRenderComponent(_component_USelect, {
                modelValue: form.urlMode,
                "onUpdate:modelValue": ($event) => form.urlMode = $event,
                items: urlModeOptions,
                class: "w-full"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (form.urlMode === "default") {
                _push2(`<div class="p-3 bg-gray-50 dark:bg-gray-800/40 rounded-lg text-xs text-gray-500 dark:text-gray-400"${_scopeId}> \u4F7F\u7528\u300C\u7CFB\u7EDF\u8BBE\u7F6E \u2192 \u96C6\u6210\u300D\u4E2D\u914D\u7F6E\u7684\u9ED8\u8BA4 Webhook URL \u4E0E\u5171\u4EAB\u96C6\u6210 Token\u3002 </div>`);
              } else {
                _push2(`<!--[--><div${_scopeId}><label class="block text-xs text-gray-500 mb-1"${_scopeId}>\u81EA\u5B9A\u4E49 Webhook URL</label>`);
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: form.customUrl,
                  "onUpdate:modelValue": ($event) => form.customUrl = $event,
                  placeholder: "https://example.com/api/webhook",
                  class: "w-full"
                }, null, _parent2, _scopeId));
                _push2(`</div><div${_scopeId}><label class="block text-xs text-gray-500 mb-1"${_scopeId}>\u81EA\u5B9A\u4E49\u9274\u6743 Token (\u53EF\u9009)</label>`);
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: form.customToken,
                  "onUpdate:modelValue": ($event) => form.customToken = $event,
                  type: "password",
                  placeholder: "\u7559\u7A7A\u5219\u4F7F\u7528\u7CFB\u7EDF\u9ED8\u8BA4\u96C6\u6210 Token",
                  class: "w-full"
                }, null, _parent2, _scopeId));
                _push2(`</div><!--]-->`);
              }
              _push2(`<div${_scopeId}><label class="block text-xs text-gray-500 mb-1"${_scopeId}>\u89C4\u5219\u5907\u6CE8</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: form.remark,
                "onUpdate:modelValue": ($event) => form.remark = $event,
                placeholder: "\u5982:\u65B0\u7528\u6237\u6CE8\u518C\u540C\u6B65\u81F3 CRM",
                class: "w-full"
              }, null, _parent2, _scopeId));
              _push2(`</div><!--]-->`);
            } else if (selectedThemeAction.value) {
              _push2(`<!--[--><div class="p-3 bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40 rounded-xl text-xs text-purple-700 dark:text-purple-300"${_scopeId}><div class="font-semibold mb-1 flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:sparkle-bold",
                class: "w-4 h-4 text-purple-600 dark:text-purple-400"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(selectedThemeAction.value.label)}</div><p class="text-purple-600/90 dark:text-purple-300/90"${_scopeId}>${ssrInterpolate(selectedThemeAction.value.description || "\u6267\u884C\u4E3B\u9898\u7ED1\u5B9A\u7684\u7279\u5B9A\u4E1A\u52A1\u903B\u8F91\u3002")}</p></div><div${_scopeId}><label class="block text-xs text-gray-500 mb-1"${_scopeId}>\u89C4\u5219\u5907\u6CE8</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: form.remark,
                "onUpdate:modelValue": ($event) => form.remark = $event,
                placeholder: "\u5982:\u8F7B\u94FA\u8BD5\u7528\u8BA2\u5355\u81EA\u52A8\u5C65\u7EA6",
                class: "w-full"
              }, null, _parent2, _scopeId));
              _push2(`</div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_USwitch, {
              modelValue: form.enabled,
              "onUpdate:modelValue": ($event) => form.enabled = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}>\u542F\u7528</span></div>`);
            if (formError.value) {
              _push2(`<div class="text-xs text-red-400"${_scopeId}>${ssrInterpolate(formError.value)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex justify-end gap-2 pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              onClick: ($event) => modalOpen.value = false
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
              loading: saving.value,
              disabled: !unref(hasAdminPerm)("settings:edit"),
              onClick: save
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u4FDD\u5B58`);
                } else {
                  return [
                    createTextVNode("\u4FDD\u5B58")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-4" }, [
                createVNode("h3", { class: "text-xl font-bold text-gray-900 dark:text-white" }, toDisplayString(form.id ? "\u7F16\u8F91\u89C4\u5219" : "\u65B0\u5EFA\u89C4\u5219"), 1),
                createVNode("div", null, [
                  createVNode("label", { class: "block text-xs text-gray-500 mb-1" }, "\u4E8B\u4EF6"),
                  createVNode(_component_USelect, {
                    modelValue: form.event,
                    "onUpdate:modelValue": ($event) => form.event = $event,
                    items: eventOptions,
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", null, [
                  createVNode("label", { class: "block text-xs text-gray-500 mb-1" }, "\u52A8\u4F5C"),
                  createVNode(_component_USelect, {
                    modelValue: form.action,
                    "onUpdate:modelValue": ($event) => form.action = $event,
                    items: actionOptions.value,
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                ]),
                createVNode("div", null, [
                  createVNode("label", { class: "block text-xs text-gray-500 mb-1" }, "\u6267\u884C\u6A21\u5F0F"),
                  createVNode(_component_USelect, {
                    modelValue: form.mode,
                    "onUpdate:modelValue": ($event) => form.mode = $event,
                    items: modeOptions,
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  form.mode === "sync" ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-xs text-amber-500 dark:text-amber-400 mt-1.5 flex items-center gap-1"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:warning-circle-bold",
                      class: "w-3.5 h-3.5 shrink-0"
                    }),
                    createTextVNode(" \u540C\u6B65\u6A21\u5F0F\u4E0B\uFF0C\u82E5\u6B64\u52A8\u4F5C\u6267\u884C\u5931\u8D25\u6216\u8D85\u65F6\uFF0C\u5C06\u76F4\u63A5\u62E6\u622A\u5F53\u524D\u4E1A\u52A1\uFF08\u5982\u6CE8\u518C/\u652F\u4ED8\uFF09\u5E76\u5411\u7528\u6237\u62A5\u9519\u3002 ")
                  ])) : createCommentVNode("", true)
                ]),
                form.action === "grant_reward" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-xs text-gray-500 mb-1" }, "\u5956\u52B1\u7C7B\u578B"),
                      createVNode(_component_USelect, {
                        modelValue: form.balanceType,
                        "onUpdate:modelValue": ($event) => form.balanceType = $event,
                        items: balanceTypeOptions,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-xs text-gray-500 mb-1" }, toDisplayString(form.balanceType === "points" ? "\u79EF\u5206\u6570\u91CF" : "\u91D1\u989D($)"), 1),
                      createVNode(_component_UInput, {
                        modelValue: form.amount,
                        "onUpdate:modelValue": ($event) => form.amount = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        min: "0",
                        step: "0.0001",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs text-gray-500 mb-1" }, "\u5907\u6CE8(\u8D26\u5355\u663E\u793A)"),
                    createVNode(_component_UInput, {
                      modelValue: form.remark,
                      "onUpdate:modelValue": ($event) => form.remark = $event,
                      placeholder: "\u5982:\u6CE8\u518C\u5956\u52B1",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ], 64)) : form.action === "send_webhook" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs text-gray-500 mb-1" }, "\u56DE\u8C03\u5730\u5740\u6765\u6E90"),
                    createVNode(_component_USelect, {
                      modelValue: form.urlMode,
                      "onUpdate:modelValue": ($event) => form.urlMode = $event,
                      items: urlModeOptions,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  form.urlMode === "default" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "p-3 bg-gray-50 dark:bg-gray-800/40 rounded-lg text-xs text-gray-500 dark:text-gray-400"
                  }, " \u4F7F\u7528\u300C\u7CFB\u7EDF\u8BBE\u7F6E \u2192 \u96C6\u6210\u300D\u4E2D\u914D\u7F6E\u7684\u9ED8\u8BA4 Webhook URL \u4E0E\u5171\u4EAB\u96C6\u6210 Token\u3002 ")) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-xs text-gray-500 mb-1" }, "\u81EA\u5B9A\u4E49 Webhook URL"),
                      createVNode(_component_UInput, {
                        modelValue: form.customUrl,
                        "onUpdate:modelValue": ($event) => form.customUrl = $event,
                        placeholder: "https://example.com/api/webhook",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-xs text-gray-500 mb-1" }, "\u81EA\u5B9A\u4E49\u9274\u6743 Token (\u53EF\u9009)"),
                      createVNode(_component_UInput, {
                        modelValue: form.customToken,
                        "onUpdate:modelValue": ($event) => form.customToken = $event,
                        type: "password",
                        placeholder: "\u7559\u7A7A\u5219\u4F7F\u7528\u7CFB\u7EDF\u9ED8\u8BA4\u96C6\u6210 Token",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ], 64)),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs text-gray-500 mb-1" }, "\u89C4\u5219\u5907\u6CE8"),
                    createVNode(_component_UInput, {
                      modelValue: form.remark,
                      "onUpdate:modelValue": ($event) => form.remark = $event,
                      placeholder: "\u5982:\u65B0\u7528\u6237\u6CE8\u518C\u540C\u6B65\u81F3 CRM",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ], 64)) : selectedThemeAction.value ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                  createVNode("div", { class: "p-3 bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40 rounded-xl text-xs text-purple-700 dark:text-purple-300" }, [
                    createVNode("div", { class: "font-semibold mb-1 flex items-center gap-1.5" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:sparkle-bold",
                        class: "w-4 h-4 text-purple-600 dark:text-purple-400"
                      }),
                      createTextVNode(" " + toDisplayString(selectedThemeAction.value.label), 1)
                    ]),
                    createVNode("p", { class: "text-purple-600/90 dark:text-purple-300/90" }, toDisplayString(selectedThemeAction.value.description || "\u6267\u884C\u4E3B\u9898\u7ED1\u5B9A\u7684\u7279\u5B9A\u4E1A\u52A1\u903B\u8F91\u3002"), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs text-gray-500 mb-1" }, "\u89C4\u5219\u5907\u6CE8"),
                    createVNode(_component_UInput, {
                      modelValue: form.remark,
                      "onUpdate:modelValue": ($event) => form.remark = $event,
                      placeholder: "\u5982:\u8F7B\u94FA\u8BD5\u7528\u8BA2\u5355\u81EA\u52A8\u5C65\u7EA6",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ], 64)) : createCommentVNode("", true),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_USwitch, {
                    modelValue: form.enabled,
                    "onUpdate:modelValue": ($event) => form.enabled = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, "\u542F\u7528")
                ]),
                formError.value ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: "text-xs text-red-400"
                }, toDisplayString(formError.value), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    onClick: ($event) => modalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u53D6\u6D88")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    loading: saving.value,
                    disabled: !unref(hasAdminPerm)("settings:edit"),
                    onClick: save
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u4FDD\u5B58")
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/settings/AutomationsTab.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_11 = Object.assign(_sfc_main$2, { __name: "AdminSettingsAutomationsTab" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SchedulerTab",
  __ssrInlineRender: true,
  setup(__props) {
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const methodOptions = [
      { label: "POST", value: "POST" },
      { label: "GET", value: "GET" }
    ];
    const scheduleOptions = [
      { label: "\u6BCF\u5C0F\u65F6", value: "hourly" },
      { label: "\u6BCF\u5929", value: "daily" },
      { label: "\u6BCF\u5468", value: "weekly" },
      { label: "\u6BCF 30 \u5206\u949F", value: 30 },
      { label: "\u6BCF 10 \u5206\u949F", value: 10 },
      { label: "\u6BCF 5 \u5206\u949F", value: 5 }
    ];
    const scheduleLabel = (v) => {
      var _a;
      return ((_a = scheduleOptions.find((o) => o.value === v)) == null ? void 0 : _a.label) || String(v);
    };
    const { data, pending, refresh } = useFetch(
      "/api/admin/scheduler",
      "$TybtqqPhXe"
      /* nuxt-injected */
    );
    const jobs = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.data) || [];
    });
    const modalOpen = ref(false);
    const saving = ref(false);
    const triggering = ref("");
    const formError = ref("");
    const form = reactive({
      originalName: null,
      name: "",
      path: "",
      method: "POST",
      schedule: "daily",
      enabled: true,
      useCronSecret: false
    });
    const openCreate = () => {
      Object.assign(form, { originalName: null, name: "", path: "", method: "POST", schedule: "daily", enabled: true, useCronSecret: false });
      formError.value = "";
      modalOpen.value = true;
    };
    const openEdit = (job) => {
      Object.assign(form, {
        originalName: job.name,
        name: job.name,
        path: job.path,
        method: job.method || "POST",
        schedule: job.schedule,
        enabled: job.enabled !== false,
        useCronSecret: job.useCronSecret === true
      });
      formError.value = "";
      modalOpen.value = true;
    };
    async function persist(nextJobs) {
      var _a;
      try {
        const res = await $fetch("/api/admin/scheduler", {
          method: "POST",
          body: {
            action: "save",
            jobs: nextJobs.map(({ lastRun, lastResult, ...job }) => job)
          }
        });
        if ((res == null ? void 0 : res.code) !== 0) throw new Error((res == null ? void 0 : res.message) || "\u4FDD\u5B58\u5931\u8D25");
        await refresh();
        return true;
      } catch (e) {
        formError.value = ((_a = e == null ? void 0 : e.data) == null ? void 0 : _a.message) || (e == null ? void 0 : e.message) || "\u4FDD\u5B58\u5931\u8D25";
        return false;
      }
    }
    const save = async () => {
      if (!form.name.trim()) {
        formError.value = "\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A";
        return;
      }
      if (!form.path.trim().startsWith("/")) {
        formError.value = "\u8DEF\u5F84\u5FC5\u987B\u4EE5 / \u5F00\u5934";
        return;
      }
      const duplicate = jobs.value.some((j) => j.name === form.name && j.name !== form.originalName);
      if (duplicate) {
        formError.value = "\u4EFB\u52A1\u540D\u79F0\u5DF2\u5B58\u5728";
        return;
      }
      const nextJob = {
        name: form.name.trim(),
        path: form.path.trim(),
        method: form.method,
        schedule: form.schedule,
        enabled: form.enabled,
        useCronSecret: form.useCronSecret
      };
      const next = form.originalName ? jobs.value.map((j) => j.name === form.originalName ? nextJob : j) : [...jobs.value, nextJob];
      saving.value = true;
      try {
        if (await persist(next)) {
          modalOpen.value = false;
        }
      } finally {
        saving.value = false;
      }
    };
    const toggleEnabled = async (job, value) => {
      const next = jobs.value.map((j) => j.name === job.name ? { ...j, enabled: value } : j);
      await persist(next);
    };
    const removeJob = async (job) => {
      if (!confirm(`\u786E\u5B9A\u5220\u9664\u4EFB\u52A1\u300C${job.name}\u300D\u5417\uFF1F`)) return;
      const next = jobs.value.filter((j) => j.name !== job.name);
      await persist(next);
    };
    const triggerJob = async (job) => {
      var _a, _b, _c;
      triggering.value = job.name;
      try {
        const res = await $fetch("/api/admin/scheduler", {
          method: "POST",
          body: { action: "trigger", name: job.name }
        });
        await refresh();
        if (!((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.ok)) {
          alert(`\u6267\u884C\u5931\u8D25\uFF1A${((_b = res == null ? void 0 : res.data) == null ? void 0 : _b.detail) || "\u672A\u77E5\u9519\u8BEF"}`);
        }
      } catch (e) {
        alert(`\u6267\u884C\u5931\u8D25\uFF1A${((_c = e == null ? void 0 : e.data) == null ? void 0 : _c.message) || (e == null ? void 0 : e.message) || "\u672A\u77E5\u9519\u8BEF"}`);
      } finally {
        triggering.value = "";
      }
    };
    const resultClass = (result) => {
      if (!result) return "text-gray-400";
      return result.startsWith("ok") ? "text-emerald-500" : "text-red-500";
    };
    const formatDate = (value) => {
      if (!value) return "\u672A\u8FD0\u884C\u8FC7";
      return new Date(value).toLocaleString("zh-CN", { hour12: false });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$B;
      const _component_UIcon = _sfc_main$G;
      const _component_USwitch = _sfc_main$c;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UModal = _sfc_main$s;
      const _component_UInput = _sfc_main$k;
      const _component_USelect = _sfc_main$j;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-5" }, _attrs))}><div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h2 class="text-lg font-semibold text-gray-900 dark:text-white">\u5B9A\u65F6\u4EFB\u52A1</h2><p class="text-sm text-gray-500 dark:text-gray-400 mt-1"> \u5230\u70B9\u5BF9\u7AD9\u5185\u8DEF\u5F84\u53D1\u8D77\u8BF7\u6C42\u7684\u5B9A\u65F6 Webhook\uFF0C\u72EC\u7ACB\u4E8E\u4E0A\u65B9\u300C\u4E8B\u4EF6\u89C4\u5219\u300D\u2014\u2014\u4E8B\u4EF6\u89C4\u5219\u662F&quot;\u4E8B\u60C5\u53D1\u751F\u65F6&quot;\u89E6\u53D1\uFF0C\u8FD9\u91CC\u662F&quot;\u5230\u65F6\u95F4\u4E86&quot;\u89E6\u53D1\u3002\u76EE\u6807\u7AEF\u70B9\u81EA\u5E26\u9274\u6743\u4E14\u5FC5\u987B\u5E42\u7B49 </p></div>`);
      if (unref(hasAdminPerm)("system:edit")) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "primary",
          class: "bg-purple-600 hover:bg-purple-500 text-white shrink-0",
          icon: "ph:plus-bold",
          onClick: openCreate
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u65B0\u5EFA\u4EFB\u52A1`);
            } else {
              return [
                createTextVNode("\u65B0\u5EFA\u4EFB\u52A1")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="border border-gray-200 dark:border-gray-800/50 rounded-2xl overflow-hidden">`);
      if (unref(pending)) {
        _push(`<div class="p-10 text-center text-gray-400">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:spinner-gap-bold",
          class: "w-6 h-6 animate-spin inline-block"
        }, null, _parent));
        _push(`</div>`);
      } else if (!jobs.value.length) {
        _push(`<div class="p-12 text-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:clock-countdown-duotone",
          class: "w-10 h-10 text-purple-400 mx-auto mb-3"
        }, null, _parent));
        _push(`<p class="text-gray-600 dark:text-gray-300">\u8FD8\u6CA1\u6709\u5B9A\u65F6\u4EFB\u52A1</p><p class="text-xs text-gray-400 mt-1">\u70B9\u51FB\u300C\u65B0\u5EFA\u4EFB\u52A1\u300D\uFF0C\u4F8B\u5982\u6BCF\u5929\u68C0\u67E5\u8BA2\u9605\u5230\u671F\u5E76\u53D1\u63D0\u9192\u90AE\u4EF6</p></div>`);
      } else {
        _push(`<table class="w-full text-sm"><thead><tr class="text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800/70"><th class="text-left font-medium py-3 px-5">\u540D\u79F0</th><th class="text-left font-medium py-3 px-5">\u8DEF\u5F84</th><th class="text-left font-medium py-3 px-5">\u5468\u671F</th><th class="text-left font-medium py-3 px-5">\u6700\u8FD1\u8FD0\u884C</th><th class="text-left font-medium py-3 px-5">\u72B6\u6001</th><th class="text-right font-medium py-3 px-5">\u64CD\u4F5C</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(jobs.value, (job) => {
          _push(`<tr class="border-b border-gray-100 dark:border-gray-800/50"><td class="py-3 px-5 text-gray-900 dark:text-white">${ssrInterpolate(job.name)}</td><td class="py-3 px-5 max-w-[280px]"><span class="block truncate font-mono text-xs text-gray-500 dark:text-gray-400"${ssrRenderAttr("title", job.path)}>${ssrInterpolate(job.path)}</span></td><td class="py-3 px-5 text-gray-700 dark:text-gray-200">${ssrInterpolate(scheduleLabel(job.schedule))}</td><td class="py-3 px-5 text-xs"><div class="text-gray-500 dark:text-gray-400">${ssrInterpolate(formatDate(job.lastRun))}</div>`);
          if (job.lastResult) {
            _push(`<div class="${ssrRenderClass([resultClass(job.lastResult), "truncate max-w-[200px]"])}"${ssrRenderAttr("title", job.lastResult)}>${ssrInterpolate(job.lastResult)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td><td class="py-3 px-5">`);
          _push(ssrRenderComponent(_component_USwitch, {
            "model-value": job.enabled !== false,
            disabled: !unref(hasAdminPerm)("system:edit"),
            "onUpdate:modelValue": (v) => toggleEnabled(job, v)
          }, null, _parent));
          _push(`</td><td class="py-3 px-5 text-right whitespace-nowrap">`);
          _push(ssrRenderComponent(_component_UButton, {
            color: "neutral",
            variant: "ghost",
            size: "sm",
            loading: triggering.value === job.name,
            disabled: !unref(hasAdminPerm)("system:edit"),
            onClick: ($event) => triggerJob(job)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u7ACB\u5373\u6267\u884C`);
              } else {
                return [
                  createTextVNode("\u7ACB\u5373\u6267\u884C")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_UButton, {
            color: "neutral",
            variant: "ghost",
            icon: "ph:pencil-simple",
            size: "sm",
            onClick: ($event) => openEdit(job),
            disabled: !unref(hasAdminPerm)("system:edit")
          }, null, _parent));
          _push(ssrRenderComponent(_component_UButton, {
            color: "error",
            variant: "ghost",
            icon: "ph:trash",
            size: "sm",
            onClick: ($event) => removeJob(job),
            disabled: !unref(hasAdminPerm)("system:edit")
          }, null, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
      }
      _push(`</div><p class="text-xs text-gray-400"> \u8C03\u5EA6\u5668\u968F node \u670D\u52A1\u5E38\u9A7B\u6BCF\u5206\u949F\u68C0\u67E5\u4E00\u6B21\uFF1Bserverless \u90E8\u7F72\u4E0B\u4E0D\u751F\u6548\uFF0C\u9700\u6539\u7528\u5916\u90E8 cron \u76F4\u8C03\u76EE\u6807\u8DEF\u5F84\u3002 \u591A\u5B9E\u4F8B\u90E8\u7F72\u4E0B\u6709\u6781\u5C0F\u6982\u7387\u540C\u4E00\u5468\u671F\u89E6\u53D1\u4E24\u6B21\uFF0C\u76EE\u6807\u4EFB\u52A1\u5FC5\u987B\u81EA\u8EAB\u5E42\u7B49\u3002\u6267\u884C\u5386\u53F2\u89C1 `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/logs",
        class: "underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u7CFB\u7EDF\u65E5\u5FD7`);
          } else {
            return [
              createTextVNode("\u7CFB\u7EDF\u65E5\u5FD7")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`\uFF08\u6765\u6E90 core.scheduler\uFF09\u3002 </p>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: modalOpen.value,
        "onUpdate:open": ($event) => modalOpen.value = $event,
        ui: { content: "sm:max-w-lg" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-4"${_scopeId}><h3 class="text-xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(form.originalName ? "\u7F16\u8F91\u4EFB\u52A1" : "\u65B0\u5EFA\u4EFB\u52A1")}</h3><div${_scopeId}><label class="block text-xs text-gray-500 mb-1"${_scopeId}>\u540D\u79F0</label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.name,
              "onUpdate:modelValue": ($event) => form.name = $event,
              placeholder: "qingpu-maintenance",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-xs text-gray-500 mb-1"${_scopeId}>\u8DEF\u5F84\uFF08\u7AD9\u5185\uFF0C\u4E0D\u8981\u5728 URL \u4E2D\u653E\u7F6E\u5BC6\u94A5\uFF09</label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.path,
              "onUpdate:modelValue": ($event) => form.path = $event,
              placeholder: "/api/cron/process-subscriptions",
              class: "w-full font-mono"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-2 gap-3"${_scopeId}><div${_scopeId}><label class="block text-xs text-gray-500 mb-1"${_scopeId}>\u8BF7\u6C42\u65B9\u6CD5</label>`);
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: form.method,
              "onUpdate:modelValue": ($event) => form.method = $event,
              items: methodOptions,
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-xs text-gray-500 mb-1"${_scopeId}>\u5468\u671F</label>`);
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: form.schedule,
              "onUpdate:modelValue": ($event) => form.schedule = $event,
              items: scheduleOptions,
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_USwitch, {
              modelValue: form.enabled,
              "onUpdate:modelValue": ($event) => form.enabled = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}>\u542F\u7528</span></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_USwitch, {
              modelValue: form.useCronSecret,
              "onUpdate:modelValue": ($event) => form.useCronSecret = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}>\u4F7F\u7528\u670D\u52A1\u5668 CRON_SECRET \u9274\u6743</span></div>`);
            if (form.useCronSecret) {
              _push2(`<p class="text-xs text-gray-400"${_scopeId}> \u6267\u884C\u65F6\u81EA\u52A8\u53D1\u9001 Authorization: Bearer \u8BF7\u6C42\u5934\uFF1B\u5BC6\u94A5\u4E0D\u4F1A\u4FDD\u5B58\u5230\u6570\u636E\u5E93\u3002 </p>`);
            } else {
              _push2(`<!---->`);
            }
            if (formError.value) {
              _push2(`<div class="text-xs text-red-400"${_scopeId}>${ssrInterpolate(formError.value)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex justify-end gap-2 pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              onClick: ($event) => modalOpen.value = false
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
              loading: saving.value,
              disabled: !unref(hasAdminPerm)("system:edit"),
              onClick: save
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u4FDD\u5B58`);
                } else {
                  return [
                    createTextVNode("\u4FDD\u5B58")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-4" }, [
                createVNode("h3", { class: "text-xl font-bold text-gray-900 dark:text-white" }, toDisplayString(form.originalName ? "\u7F16\u8F91\u4EFB\u52A1" : "\u65B0\u5EFA\u4EFB\u52A1"), 1),
                createVNode("div", null, [
                  createVNode("label", { class: "block text-xs text-gray-500 mb-1" }, "\u540D\u79F0"),
                  createVNode(_component_UInput, {
                    modelValue: form.name,
                    "onUpdate:modelValue": ($event) => form.name = $event,
                    placeholder: "qingpu-maintenance",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", null, [
                  createVNode("label", { class: "block text-xs text-gray-500 mb-1" }, "\u8DEF\u5F84\uFF08\u7AD9\u5185\uFF0C\u4E0D\u8981\u5728 URL \u4E2D\u653E\u7F6E\u5BC6\u94A5\uFF09"),
                  createVNode(_component_UInput, {
                    modelValue: form.path,
                    "onUpdate:modelValue": ($event) => form.path = $event,
                    placeholder: "/api/cron/process-subscriptions",
                    class: "w-full font-mono"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs text-gray-500 mb-1" }, "\u8BF7\u6C42\u65B9\u6CD5"),
                    createVNode(_component_USelect, {
                      modelValue: form.method,
                      "onUpdate:modelValue": ($event) => form.method = $event,
                      items: methodOptions,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs text-gray-500 mb-1" }, "\u5468\u671F"),
                    createVNode(_component_USelect, {
                      modelValue: form.schedule,
                      "onUpdate:modelValue": ($event) => form.schedule = $event,
                      items: scheduleOptions,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_USwitch, {
                    modelValue: form.enabled,
                    "onUpdate:modelValue": ($event) => form.enabled = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, "\u542F\u7528")
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_USwitch, {
                    modelValue: form.useCronSecret,
                    "onUpdate:modelValue": ($event) => form.useCronSecret = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, "\u4F7F\u7528\u670D\u52A1\u5668 CRON_SECRET \u9274\u6743")
                ]),
                form.useCronSecret ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-xs text-gray-400"
                }, " \u6267\u884C\u65F6\u81EA\u52A8\u53D1\u9001 Authorization: Bearer \u8BF7\u6C42\u5934\uFF1B\u5BC6\u94A5\u4E0D\u4F1A\u4FDD\u5B58\u5230\u6570\u636E\u5E93\u3002 ")) : createCommentVNode("", true),
                formError.value ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-xs text-red-400"
                }, toDisplayString(formError.value), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    onClick: ($event) => modalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u53D6\u6D88")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    loading: saving.value,
                    disabled: !unref(hasAdminPerm)("system:edit"),
                    onClick: save
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u4FDD\u5B58")
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/settings/SchedulerTab.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_12 = Object.assign(_sfc_main$1, { __name: "AdminSettingsSchedulerTab" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { settings: settingsStore, fetchSettings } = useSettings();
    const { t } = useI18n();
    const toast = useToast();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const route = useRoute();
    const activeTab = ref(isSettingsTabId(route.query.tab) ? route.query.tab : "general");
    const refresh = async () => {
      await fetchSettings(true);
    };
    const loadAdminSettings = async () => {
      try {
        const res = await $fetch("/api/admin/settings");
        if (Array.isArray(res)) {
          const kv = res.reduce((acc, item) => {
            acc[item.key] = item.value;
            return acc;
          }, {});
          dynamicForm.value = buildFormFromStore(kv);
          isInitialized.value = true;
        }
      } catch (err) {
        console.error("Failed to load admin settings:", err);
      }
    };
    const DEFAULT_FORM = {
      site_title: "",
      site_description: "",
      site_keywords: "",
      site_name: "",
      site_logo: "",
      site_favicon: "",
      site_notice: "",
      support_email: "",
      supported_locales: "en,zh",
      default_locale: "en",
      currency: "USD",
      locale_currency_bindings: "{}",
      timezone: "",
      allow_guest_checkout: true,
      disable_multi_device_login: false,
      company_name: "",
      company_phone: "",
      company_address: ""
    };
    const buildFormFromStore = (store) => {
      const next = { ...DEFAULT_FORM };
      for (const [key, raw] of Object.entries(store)) {
        if (key === "allow_guest_checkout" || key === "disable_multi_device_login") {
          next[key] = String(raw) === "true";
        } else {
          next[key] = raw;
        }
      }
      return next;
    };
    const dynamicForm = ref(
      settingsStore.value ? buildFormFromStore(settingsStore.value) : { ...DEFAULT_FORM }
    );
    const isSaving = ref(false);
    const isUploadingFavicon = ref(false);
    const faviconInput = ref(null);
    const isInitialized = ref(false);
    watch(
      () => settingsStore.value,
      (store) => {
        if (!store || isInitialized.value) return;
        dynamicForm.value = buildFormFromStore(store);
      },
      { once: true, flush: "post" }
    );
    const saveSettings = async () => {
      var _a;
      isSaving.value = true;
      try {
        await $fetch("/api/admin/settings", {
          method: "POST",
          body: dynamicForm.value
        });
        toast.add({
          title: t("admin.settings.general.toast_success"),
          description: t("admin.settings.general.toast_settings_saved"),
          color: "success"
        });
        await refresh();
        await loadAdminSettings();
      } catch (e) {
        toast.add({
          title: t("admin.settings.general.toast_error"),
          description: ((_a = e.data) == null ? void 0 : _a.message) || t("admin.settings.general.toast_save_failed"),
          color: "error"
        });
      } finally {
        isSaving.value = false;
      }
    };
    const triggerFaviconPick = () => {
      var _a;
      (_a = faviconInput.value) == null ? void 0 : _a.click();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_UButton = _sfc_main$B;
      const _component_AdminSettingsNav = __nuxt_component_2;
      const _component_AdminSettingsGeneralTab = __nuxt_component_3;
      const _component_UInput = _sfc_main$k;
      const _component_AdminSettingsLocalizationTab = __nuxt_component_5;
      const _component_AdminSettingsSEOTab = __nuxt_component_6;
      const _component_AdminSettingsCheckoutTab = __nuxt_component_7;
      const _component_AdminSettingsTopupTab = __nuxt_component_8;
      const _component_AdminSettingsEmailTab = __nuxt_component_9;
      const _component_AdminSettingsCompanyTab = __nuxt_component_10;
      const _component_AdminSettingsAutomationsTab = __nuxt_component_11;
      const _component_AdminSettingsSchedulerTab = __nuxt_component_12;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto pb-12" }, _attrs))}><div class="mb-8 flex items-center justify-between"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:gear-six-fill",
        class: "w-8 h-8 text-purple-500"
      }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("admin.settings.page.title"))}</h1><p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">${ssrInterpolate(_ctx.$t("admin.settings.page.subtitle"))}</p></div><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        class: "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] rounded-full px-6",
        type: "button",
        onClick: saveSettings,
        loading: unref(isSaving),
        disabled: !unref(hasAdminPerm)("settings:edit")
      }, {
        leading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:floppy-disk-fill",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:floppy-disk-fill",
                class: "w-5 h-5"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ${ssrInterpolate(_ctx.$t("admin.settings.page.save_changes"))}`);
          } else {
            return [
              createTextVNode(" " + toDisplayString(_ctx.$t("admin.settings.page.save_changes")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-8">`);
      _push(ssrRenderComponent(_component_AdminSettingsNav, {
        active: unref(activeTab),
        onSelect: ($event) => activeTab.value = $event
      }, null, _parent));
      _push(`<div class="lg:col-span-9 space-y-8"><form class="space-y-8">`);
      if (unref(activeTab) === "general") {
        _push(ssrRenderComponent(_component_AdminSettingsGeneralTab, { form: unref(dynamicForm) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "general") {
        _push(`<div class="bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 rounded-2xl p-6"><div class="flex items-start justify-between gap-6"><div><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.general.favicon_title"))}</h2><p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${ssrInterpolate(_ctx.$t("admin.settings.general.favicon_desc"))}</p></div>`);
        if (unref(dynamicForm).site_favicon) {
          _push(`<div class="shrink-0 h-10 w-10 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden"><img${ssrRenderAttr("src", unref(dynamicForm).site_favicon)} alt="favicon" class="h-6 w-6"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mt-5"><div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">${ssrInterpolate(_ctx.$t("admin.settings.general.favicon_url"))}</div>`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: unref(dynamicForm).site_favicon,
          "onUpdate:modelValue": ($event) => unref(dynamicForm).site_favicon = $event,
          placeholder: "https://gopanel.cn/favicon.ico",
          size: "lg",
          class: "w-full"
        }, null, _parent));
        _push(`<div class="mt-3 flex flex-col sm:flex-row gap-3">`);
        _push(ssrRenderComponent(_component_UButton, {
          type: "button",
          size: "lg",
          class: "rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 justify-center",
          loading: unref(isUploadingFavicon),
          disabled: !unref(hasAdminPerm)("settings:edit"),
          onClick: triggerFaviconPick
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("admin.settings.general.upload_favicon"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("admin.settings.general.upload_favicon")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(dynamicForm).site_favicon && unref(hasAdminPerm)("settings:edit")) {
          _push(ssrRenderComponent(_component_UButton, {
            type: "button",
            size: "lg",
            variant: "outline",
            class: "rounded-xl border-gray-200 dark:border-gray-700 text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 justify-center",
            onClick: ($event) => unref(dynamicForm).site_favicon = ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("admin.settings.general.clear_favicon"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.settings.general.clear_favicon")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<input type="file" accept="image/x-icon,image/png,image/svg+xml,image/*" class="hidden"></div><div class="text-xs text-gray-500 mt-2">${ssrInterpolate(_ctx.$t("admin.settings.general.favicon_hint"))}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "localization") {
        _push(ssrRenderComponent(_component_AdminSettingsLocalizationTab, { form: unref(dynamicForm) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "seo") {
        _push(ssrRenderComponent(_component_AdminSettingsSEOTab, { form: unref(dynamicForm) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "checkout") {
        _push(ssrRenderComponent(_component_AdminSettingsCheckoutTab, { form: unref(dynamicForm) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "topup") {
        _push(ssrRenderComponent(_component_AdminSettingsTopupTab, { form: unref(dynamicForm) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "email") {
        _push(ssrRenderComponent(_component_AdminSettingsEmailTab, { form: unref(dynamicForm) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "company") {
        _push(ssrRenderComponent(_component_AdminSettingsCompanyTab, { form: unref(dynamicForm) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "automations") {
        _push(ssrRenderComponent(_component_AdminSettingsAutomationsTab, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "scheduler") {
        _push(ssrRenderComponent(_component_AdminSettingsSchedulerTab, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="fixed bottom-6 right-6 lg:hidden z-40">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        class: "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] rounded-full h-14 px-6",
        type: "submit",
        loading: unref(isSaving),
        disabled: !unref(hasAdminPerm)("settings:edit")
      }, {
        leading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:floppy-disk-fill",
              class: "w-6 h-6"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:floppy-disk-fill",
                class: "w-6 h-6"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-medium text-lg"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.settings.page.save", _ctx.$t("admin.common.save", "\u4FDD\u5B58")))}</span>`);
          } else {
            return [
              createVNode("span", { class: "font-medium text-lg" }, toDisplayString(_ctx.$t("admin.settings.page.save", _ctx.$t("admin.common.save", "\u4FDD\u5B58"))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/settings/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
