import { e as useI18n, C as useRoute, r as useRouter, g as useToast, s as useConfirm, h as useAdminPermissions, I as useCurrencyFormat, t as useSettings, x as usePagination, y as useFetch, b as _sfc_main$G, d as _sfc_main$k, o as _sfc_main$j, k as _sfc_main$B, l as _sfc_main$h, n as _sfc_main$x, z as _sfc_main$n, c as _sfc_main$l, O as _sfc_main$g, p as _sfc_main$s } from './server.mjs';
import { _ as _sfc_main$7 } from './Tooltip-BUkNJ5vn.mjs';
import { _ as __nuxt_component_7 } from './FullScreenModal-C_oQJW_c.mjs';
import { _ as _sfc_main$8 } from './Checkbox-BmTSvkxP.mjs';
import __nuxt_component_8$1 from './RichEditor-WjiMyQp3.mjs';
import { defineComponent, withAsyncContext, computed, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, isRef, withModifiers, reactive, withKeys, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderSlot } from 'vue/server-renderer';
import draggable from 'vuedraggable';
import { u as useImageProxy } from './useImageProxy-CJnFnQot.mjs';
import { b as presetFieldsForType, s as stripUiIds, d as cleanServiceSchemaFields, e as cleanProductFeatures, f as parseProductFeatures, g as parseServiceSchemaFields } from './adminProductFormData-BiTP6ur1.mjs';
import { useSortable } from '@vueuse/integrations/useSortable';
import { A as AdminCardsPanel } from './AdminCardsPanel-C2IwRAJv.mjs';
import { A as AdminSubscriptionsPanel } from './AdminSubscriptionsPanel-Dx3i-tlH.mjs';
import '../nitro/nitro.mjs';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:crypto';
import 'drizzle-orm';
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
import 'zod';
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
import './Kbd-Bu-poTUg.mjs';
import './isValueEqualOrExist-BVczPdKj.mjs';
import './VisuallyHiddenInput-32bCuzTQ.mjs';
import './RovingFocusItem-DyHBwisL.mjs';
import './utils-DD3u_B8M.mjs';
import 'marked';
import './Card-jMFP8cqX.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ProductGatewayPlanIdsSection",
  __ssrInlineRender: true,
  props: {
    visible: { type: Boolean },
    items: {},
    availableGateways: {}
  },
  emits: ["add", "remove"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_USelect = _sfc_main$j;
      const _component_UInput = _sfc_main$k;
      const _component_UButton = _sfc_main$B;
      if (__props.visible) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-100 dark:bg-[#1a1a1c] mt-4" }, _attrs))}><div class="flex items-center justify-between mb-4"><h3 class="text-gray-900 dark:text-white font-medium flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:plugs-connected",
          class: "text-green-400"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("admin.products.form.gateway_plan_ids"))}</h3></div><p class="text-xs text-gray-400 mb-4">${ssrInterpolate(_ctx.$t("admin.products.form.gateway_description"))}</p><div class="space-y-3"><!--[-->`);
        ssrRenderList(__props.items, (item, index) => {
          _push(`<div class="flex items-center gap-3">`);
          _push(ssrRenderComponent(_component_USelect, {
            modelValue: item.gateway,
            "onUpdate:modelValue": ($event) => item.gateway = $event,
            items: __props.availableGateways,
            placeholder: _ctx.$t("admin.products.form.select_gateway"),
            class: "w-1/3"
          }, null, _parent));
          _push(ssrRenderComponent(_component_UInput, {
            modelValue: item.id,
            "onUpdate:modelValue": ($event) => item.id = $event,
            placeholder: _ctx.$t("admin.products.form.plan_id_placeholder"),
            class: "flex-1 text-gray-900 dark:text-white"
          }, null, _parent));
          _push(ssrRenderComponent(_component_UButton, {
            color: "error",
            variant: "ghost",
            icon: "ph:trash",
            onClick: ($event) => emit("remove", index)
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "outline",
          icon: "ph:plus",
          size: "sm",
          class: "w-full border-dashed",
          onClick: ($event) => emit("add")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("admin.products.form.add_gateway_mapping"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("admin.products.form.add_gateway_mapping")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/products/ProductGatewayPlanIdsSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ProductGatewayPlanIdsSection = Object.assign(_sfc_main$6, { __name: "AdminProductsProductGatewayPlanIdsSection" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ProductImagesField",
  __ssrInlineRender: true,
  props: {
    visible: { type: Boolean },
    images: {},
    newImageUrl: {},
    isUploading: { type: Boolean }
  },
  emits: ["update:new-image-url", "update:images", "add-url", "upload", "preview", "remove"],
  setup(__props, { emit: __emit }) {
    const { buildImageProxyUrl } = useImageProxy();
    const props = __props;
    const emit = __emit;
    const fileInput = ref(null);
    const imageUrlInput = computed({
      get: () => props.newImageUrl,
      set: (value) => emit("update:new-image-url", value)
    });
    const imagesModel = computed({
      get: () => props.images,
      set: (value) => emit("update:images", value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_UButton = _sfc_main$B;
      if (__props.visible) {
        _push(ssrRenderComponent(_component_UFormField, mergeProps({
          label: _ctx.$t("admin.products.form.images")
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col gap-4 w-full"${_scopeId}><div class="flex gap-2 w-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(imageUrlInput),
                "onUpdate:modelValue": ($event) => isRef(imageUrlInput) ? imageUrlInput.value = $event : null,
                class: "text-gray-900 dark:text-white flex-1",
                placeholder: _ctx.$t("admin.products.form.image_url_placeholder"),
                onKeyup: ($event) => emit("add-url")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                variant: "outline",
                onClick: ($event) => emit("add-url"),
                disabled: !unref(imageUrlInput)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("admin.products.form.add_url"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("admin.products.form.add_url")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "outline",
                icon: "ph:upload-simple",
                loading: __props.isUploading,
                onClick: ($event) => {
                  var _a;
                  return (_a = unref(fileInput)) == null ? void 0 : _a.click();
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("admin.products.form.upload"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("admin.products.form.upload")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<input type="file" class="hidden" multiple accept="image/png, image/jpeg, image/webp, image/gif"${_scopeId}></div>`);
              if (__props.images && __props.images.length > 0) {
                _push2(ssrRenderComponent(unref(draggable), {
                  modelValue: unref(imagesModel),
                  "onUpdate:modelValue": ($event) => isRef(imagesModel) ? imagesModel.value = $event : null,
                  "item-key": "url",
                  class: "flex flex-wrap gap-4 mt-2",
                  "ghost-class": "opacity-50",
                  animation: "200"
                }, {
                  item: withCtx(({ element, index }, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="relative w-32 h-32 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 group cursor-move"${_scopeId2}><img${ssrRenderAttr("src", unref(buildImageProxyUrl)(element))} class="w-full h-full object-cover"${_scopeId2}><div class="absolute inset-0 bg-gray-900/50 dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UButton, {
                        color: "primary",
                        variant: "ghost",
                        icon: "ph:eye",
                        size: "sm",
                        onClick: ($event) => emit("preview", element)
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_UButton, {
                        color: "error",
                        variant: "ghost",
                        icon: "ph:trash",
                        size: "sm",
                        onClick: ($event) => emit("remove", index)
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "relative w-32 h-32 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 group cursor-move" }, [
                          createVNode("img", {
                            src: unref(buildImageProxyUrl)(element),
                            class: "w-full h-full object-cover"
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "absolute inset-0 bg-gray-900/50 dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2" }, [
                            createVNode(_component_UButton, {
                              color: "primary",
                              variant: "ghost",
                              icon: "ph:eye",
                              size: "sm",
                              onClick: withModifiers(($event) => emit("preview", element), ["stop"])
                            }, null, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              color: "error",
                              variant: "ghost",
                              icon: "ph:trash",
                              size: "sm",
                              onClick: withModifiers(($event) => emit("remove", index), ["stop"])
                            }, null, 8, ["onClick"])
                          ])
                        ])
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
                createVNode("div", { class: "flex flex-col gap-4 w-full" }, [
                  createVNode("div", { class: "flex gap-2 w-full" }, [
                    createVNode(_component_UInput, {
                      modelValue: unref(imageUrlInput),
                      "onUpdate:modelValue": ($event) => isRef(imageUrlInput) ? imageUrlInput.value = $event : null,
                      class: "text-gray-900 dark:text-white flex-1",
                      placeholder: _ctx.$t("admin.products.form.image_url_placeholder"),
                      onKeyup: withKeys(withModifiers(($event) => emit("add-url"), ["prevent"]), ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "onKeyup"]),
                    createVNode(_component_UButton, {
                      color: "primary",
                      variant: "outline",
                      onClick: ($event) => emit("add-url"),
                      disabled: !unref(imageUrlInput)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("admin.products.form.add_url")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick", "disabled"]),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "outline",
                      icon: "ph:upload-simple",
                      loading: __props.isUploading,
                      onClick: ($event) => {
                        var _a;
                        return (_a = unref(fileInput)) == null ? void 0 : _a.click();
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("admin.products.form.upload")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"]),
                    createVNode("input", {
                      type: "file",
                      ref_key: "fileInput",
                      ref: fileInput,
                      class: "hidden",
                      multiple: "",
                      accept: "image/png, image/jpeg, image/webp, image/gif",
                      onChange: ($event) => emit("upload", $event, unref(fileInput))
                    }, null, 40, ["onChange"])
                  ]),
                  __props.images && __props.images.length > 0 ? (openBlock(), createBlock(unref(draggable), {
                    key: 0,
                    modelValue: unref(imagesModel),
                    "onUpdate:modelValue": ($event) => isRef(imagesModel) ? imagesModel.value = $event : null,
                    "item-key": "url",
                    class: "flex flex-wrap gap-4 mt-2",
                    "ghost-class": "opacity-50",
                    animation: "200"
                  }, {
                    item: withCtx(({ element, index }) => [
                      createVNode("div", { class: "relative w-32 h-32 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 group cursor-move" }, [
                        createVNode("img", {
                          src: unref(buildImageProxyUrl)(element),
                          class: "w-full h-full object-cover"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "absolute inset-0 bg-gray-900/50 dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2" }, [
                          createVNode(_component_UButton, {
                            color: "primary",
                            variant: "ghost",
                            icon: "ph:eye",
                            size: "sm",
                            onClick: withModifiers(($event) => emit("preview", element), ["stop"])
                          }, null, 8, ["onClick"]),
                          createVNode(_component_UButton, {
                            color: "error",
                            variant: "ghost",
                            icon: "ph:trash",
                            size: "sm",
                            onClick: withModifiers(($event) => emit("remove", index), ["stop"])
                          }, null, 8, ["onClick"])
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/products/ProductImagesField.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ProductImagesField = Object.assign(_sfc_main$5, { __name: "AdminProductsProductImagesField" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ProductLocaleTabs",
  __ssrInlineRender: true,
  props: {
    locales: {},
    defaultLocale: {},
    currentLocale: {},
    hasDefaultName: { type: Boolean }
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      if (__props.locales.length > 1) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-b border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-[#121214] mb-6 -mx-4 px-4 sm:-mx-6 sm:px-6" }, _attrs))}><nav class="flex space-x-2 overflow-x-auto hide-scrollbar pb-2"><!--[-->`);
        ssrRenderList(__props.locales, (locale) => {
          _push(`<button type="button"${ssrIncludeBooleanAttr(locale !== __props.defaultLocale && !__props.hasDefaultName) ? " disabled" : ""} class="${ssrRenderClass([
            "shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2",
            __props.currentLocale === locale ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" : locale !== __props.defaultLocale && !__props.hasDefaultName ? "text-gray-600 cursor-not-allowed border border-transparent" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 border border-transparent"
          ])}">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: locale === __props.defaultLocale ? "ph:star-fill" : "ph:translate",
            class: [
              "w-4 h-4",
              locale === __props.defaultLocale ? "text-yellow-500" : ""
            ]
          }, null, _parent));
          _push(` ${ssrInterpolate(locale.toUpperCase())}</button>`);
        });
        _push(`<!--]--></nav></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/products/ProductLocaleTabs.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ProductLocaleTabs = Object.assign(_sfc_main$4, { __name: "AdminProductsProductLocaleTabs" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProductPricingFeaturesSection",
  __ssrInlineRender: true,
  props: {
    visible: { type: Boolean },
    locale: {},
    isVisualMode: { type: Boolean },
    featuresJson: {},
    featuresList: {}
  },
  emits: ["toggle-mode", "update:features-json", "update:features-list", "add-feature", "remove-feature"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const featuresJsonModel = computed({
      get: () => props.featuresJson,
      set: (value) => emit("update:features-json", value)
    });
    const featuresListModel = computed({
      get: () => props.featuresList,
      set: (value) => emit("update:features-list", value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_UButton = _sfc_main$B;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_UCheckbox = _sfc_main$8;
      const _component_UTextarea = _sfc_main$g;
      if (__props.visible) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 border border-purple-500/30 rounded-lg bg-purple-50/80 dark:bg-[#2a1a3a]/30 mt-4" }, _attrs))}><div class="flex items-center justify-between mb-4"><h3 class="text-gray-900 dark:text-white font-medium flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:star-fill",
          class: "text-purple-400"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("admin.products.form.features_title"))}</h3>`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          icon: __props.isVisualMode ? "ph:code" : "ph:eye",
          onClick: ($event) => emit("toggle-mode")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.isVisualMode ? _ctx.$t("admin.products.form.edit_raw_json") : _ctx.$t("admin.products.form.visual_builder"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.isVisualMode ? _ctx.$t("admin.products.form.edit_raw_json") : _ctx.$t("admin.products.form.visual_builder")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="grid grid-cols-1 gap-4">`);
        _push(ssrRenderComponent(_component_UFormField, {
          label: _ctx.$t("admin.products.form.features_label", { locale: __props.locale })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-full space-y-3"${_scopeId}>`);
              if (__props.isVisualMode) {
                _push2(`<!--[-->`);
                if (__props.featuresList.length > 0) {
                  _push2(ssrRenderComponent(unref(draggable), {
                    modelValue: unref(featuresListModel),
                    "onUpdate:modelValue": ($event) => isRef(featuresListModel) ? featuresListModel.value = $event : null,
                    "item-key": "id",
                    handle: ".drag-handle",
                    "ghost-class": "opacity-50 bg-gray-200 dark:bg-gray-800",
                    animation: "200",
                    class: "space-y-2"
                  }, {
                    item: withCtx(({ element, index }, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="flex items-center gap-3 p-3 bg-gray-100 dark:bg-[#1e1e20] border border-gray-200 dark:border-gray-800 rounded-lg group"${_scopeId2}><div class="drag-handle cursor-grab active:cursor-grabbing text-gray-500 hover:text-gray-300"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: "ph:dots-six-vertical",
                          class: "w-5 h-5"
                        }, null, _parent3, _scopeId2));
                        _push3(`</div><div class="w-48"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UInput, {
                          modelValue: element.icon,
                          "onUpdate:modelValue": ($event) => element.icon = $event,
                          placeholder: _ctx.$t("admin.products.form.feature_icon_placeholder"),
                          class: "text-gray-900 dark:text-white"
                        }, {
                          leading: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_UIcon, {
                                name: element.icon || "ph:check",
                                class: "w-4 h-4 text-gray-400"
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_UIcon, {
                                  name: element.icon || "ph:check",
                                  class: "w-4 h-4 text-gray-400"
                                }, null, 8, ["name"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div>`);
                        _push3(ssrRenderComponent(_component_UInput, {
                          modelValue: element.name,
                          "onUpdate:modelValue": ($event) => element.name = $event,
                          placeholder: _ctx.$t("admin.products.form.feature_desc_placeholder"),
                          class: "text-gray-900 dark:text-white flex-1"
                        }, null, _parent3, _scopeId2));
                        _push3(`<div class="flex items-center gap-3 ml-2"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UCheckbox, {
                          modelValue: element.included,
                          "onUpdate:modelValue": ($event) => element.included = $event,
                          label: _ctx.$t("admin.products.form.feature_included"),
                          ui: { label: "text-sm" }
                        }, null, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(_component_UButton, {
                          color: "error",
                          variant: "ghost",
                          icon: "ph:trash",
                          size: "sm",
                          class: "opacity-0 group-hover:opacity-100 transition-opacity",
                          onClick: ($event) => emit("remove-feature", index)
                        }, null, _parent3, _scopeId2));
                        _push3(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-3 p-3 bg-gray-100 dark:bg-[#1e1e20] border border-gray-200 dark:border-gray-800 rounded-lg group" }, [
                            createVNode("div", { class: "drag-handle cursor-grab active:cursor-grabbing text-gray-500 hover:text-gray-300" }, [
                              createVNode(_component_UIcon, {
                                name: "ph:dots-six-vertical",
                                class: "w-5 h-5"
                              })
                            ]),
                            createVNode("div", { class: "w-48" }, [
                              createVNode(_component_UInput, {
                                modelValue: element.icon,
                                "onUpdate:modelValue": ($event) => element.icon = $event,
                                placeholder: _ctx.$t("admin.products.form.feature_icon_placeholder"),
                                class: "text-gray-900 dark:text-white"
                              }, {
                                leading: withCtx(() => [
                                  createVNode(_component_UIcon, {
                                    name: element.icon || "ph:check",
                                    class: "w-4 h-4 text-gray-400"
                                  }, null, 8, ["name"])
                                ]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder"])
                            ]),
                            createVNode(_component_UInput, {
                              modelValue: element.name,
                              "onUpdate:modelValue": ($event) => element.name = $event,
                              placeholder: _ctx.$t("admin.products.form.feature_desc_placeholder"),
                              class: "text-gray-900 dark:text-white flex-1"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                            createVNode("div", { class: "flex items-center gap-3 ml-2" }, [
                              createVNode(_component_UCheckbox, {
                                modelValue: element.included,
                                "onUpdate:modelValue": ($event) => element.included = $event,
                                label: _ctx.$t("admin.products.form.feature_included"),
                                ui: { label: "text-sm" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                              createVNode(_component_UButton, {
                                color: "error",
                                variant: "ghost",
                                icon: "ph:trash",
                                size: "sm",
                                class: "opacity-0 group-hover:opacity-100 transition-opacity",
                                onClick: ($event) => emit("remove-feature", index)
                              }, null, 8, ["onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<div class="text-sm text-gray-500 italic p-4 border border-dashed border-gray-300 dark:border-gray-800 rounded-lg text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.products.form.no_features"))}</div>`);
                }
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  icon: "ph:plus",
                  size: "sm",
                  class: "w-full justify-center border-dashed",
                  onClick: ($event) => emit("add-feature")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("admin.products.form.add_feature"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("admin.products.form.add_feature")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<!--]-->`);
              } else {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(_component_UTextarea, {
                  modelValue: unref(featuresJsonModel),
                  "onUpdate:modelValue": ($event) => isRef(featuresJsonModel) ? featuresJsonModel.value = $event : null,
                  rows: 10,
                  class: "font-mono text-sm text-gray-900 dark:text-white w-full",
                  placeholder: _ctx.$t("admin.products.form.features_json_placeholder")
                }, null, _parent2, _scopeId));
                _push2(`<p class="text-xs text-gray-500 mt-2"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.products.form.features_json_help"))}</p><!--]-->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "w-full space-y-3" }, [
                  __props.isVisualMode ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    __props.featuresList.length > 0 ? (openBlock(), createBlock(unref(draggable), {
                      key: 0,
                      modelValue: unref(featuresListModel),
                      "onUpdate:modelValue": ($event) => isRef(featuresListModel) ? featuresListModel.value = $event : null,
                      "item-key": "id",
                      handle: ".drag-handle",
                      "ghost-class": "opacity-50 bg-gray-200 dark:bg-gray-800",
                      animation: "200",
                      class: "space-y-2"
                    }, {
                      item: withCtx(({ element, index }) => [
                        createVNode("div", { class: "flex items-center gap-3 p-3 bg-gray-100 dark:bg-[#1e1e20] border border-gray-200 dark:border-gray-800 rounded-lg group" }, [
                          createVNode("div", { class: "drag-handle cursor-grab active:cursor-grabbing text-gray-500 hover:text-gray-300" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:dots-six-vertical",
                              class: "w-5 h-5"
                            })
                          ]),
                          createVNode("div", { class: "w-48" }, [
                            createVNode(_component_UInput, {
                              modelValue: element.icon,
                              "onUpdate:modelValue": ($event) => element.icon = $event,
                              placeholder: _ctx.$t("admin.products.form.feature_icon_placeholder"),
                              class: "text-gray-900 dark:text-white"
                            }, {
                              leading: withCtx(() => [
                                createVNode(_component_UIcon, {
                                  name: element.icon || "ph:check",
                                  class: "w-4 h-4 text-gray-400"
                                }, null, 8, ["name"])
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder"])
                          ]),
                          createVNode(_component_UInput, {
                            modelValue: element.name,
                            "onUpdate:modelValue": ($event) => element.name = $event,
                            placeholder: _ctx.$t("admin.products.form.feature_desc_placeholder"),
                            class: "text-gray-900 dark:text-white flex-1"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                          createVNode("div", { class: "flex items-center gap-3 ml-2" }, [
                            createVNode(_component_UCheckbox, {
                              modelValue: element.included,
                              "onUpdate:modelValue": ($event) => element.included = $event,
                              label: _ctx.$t("admin.products.form.feature_included"),
                              ui: { label: "text-sm" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                            createVNode(_component_UButton, {
                              color: "error",
                              variant: "ghost",
                              icon: "ph:trash",
                              size: "sm",
                              class: "opacity-0 group-hover:opacity-100 transition-opacity",
                              onClick: ($event) => emit("remove-feature", index)
                            }, null, 8, ["onClick"])
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-sm text-gray-500 italic p-4 border border-dashed border-gray-300 dark:border-gray-800 rounded-lg text-center"
                    }, toDisplayString(_ctx.$t("admin.products.form.no_features")), 1)),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "outline",
                      icon: "ph:plus",
                      size: "sm",
                      class: "w-full justify-center border-dashed",
                      onClick: ($event) => emit("add-feature")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("admin.products.form.add_feature")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode(_component_UTextarea, {
                      modelValue: unref(featuresJsonModel),
                      "onUpdate:modelValue": ($event) => isRef(featuresJsonModel) ? featuresJsonModel.value = $event : null,
                      rows: 10,
                      class: "font-mono text-sm text-gray-900 dark:text-white w-full",
                      placeholder: _ctx.$t("admin.products.form.features_json_placeholder")
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                    createVNode("p", { class: "text-xs text-gray-500 mt-2" }, toDisplayString(_ctx.$t("admin.products.form.features_json_help")), 1)
                  ], 64))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (_ctx.$slots["badge-field"] || _ctx.$slots["color-field"]) {
          _push(`<div class="grid grid-cols-2 gap-4 mt-4">`);
          ssrRenderSlot(_ctx.$slots, "badge-field", {}, null, _push, _parent);
          ssrRenderSlot(_ctx.$slots, "color-field", {}, null, _push, _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/products/ProductPricingFeaturesSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProductPricingFeaturesSection = Object.assign(_sfc_main$3, { __name: "AdminProductsProductPricingFeaturesSection" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProductServiceSchemaSection",
  __ssrInlineRender: true,
  props: {
    visible: { type: Boolean },
    isDefaultLocale: { type: Boolean },
    localeSuffix: {},
    isVisualMode: { type: Boolean },
    schemaJson: {},
    schemaList: {},
    schemaFieldTypeOptions: {}
  },
  emits: ["toggle-mode", "update:schema-json", "update:schema-list", "add-field", "remove-field"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const schemaJsonModel = computed({
      get: () => props.schemaJson,
      set: (value) => emit("update:schema-json", value)
    });
    const schemaListModel = computed({
      get: () => props.schemaList,
      set: (value) => emit("update:schema-list", value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_UButton = _sfc_main$B;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_USelect = _sfc_main$j;
      const _component_UCheckbox = _sfc_main$8;
      const _component_UTextarea = _sfc_main$g;
      if (__props.visible) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-100 dark:bg-[#1a1a1c]" }, _attrs))}><div class="flex items-center justify-between mb-4"><h3 class="text-gray-900 dark:text-white font-medium flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:list-dashes",
          class: "text-blue-400"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("admin.products.form.service_settings"))}${ssrInterpolate(__props.localeSuffix)}</h3>`);
        if (__props.isDefaultLocale) {
          _push(ssrRenderComponent(_component_UButton, {
            size: "xs",
            variant: "ghost",
            color: "neutral",
            icon: __props.isVisualMode ? "ph:code" : "ph:eye",
            onClick: ($event) => emit("toggle-mode")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.isVisualMode ? _ctx.$t("admin.products.form.edit_raw_json") : _ctx.$t("admin.products.form.visual_builder"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.isVisualMode ? _ctx.$t("admin.products.form.edit_raw_json") : _ctx.$t("admin.products.form.visual_builder")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (__props.isDefaultLocale) {
          _push(`<div class="grid grid-cols-1 gap-4">`);
          _push(ssrRenderComponent(_component_UFormField, {
            label: _ctx.$t("admin.products.form.form_schema")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="w-full space-y-3"${_scopeId}>`);
                if (__props.isVisualMode) {
                  _push2(`<!--[-->`);
                  if (__props.schemaList.length > 0) {
                    _push2(ssrRenderComponent(unref(draggable), {
                      modelValue: unref(schemaListModel),
                      "onUpdate:modelValue": ($event) => isRef(schemaListModel) ? schemaListModel.value = $event : null,
                      "item-key": "id",
                      handle: ".drag-handle",
                      "ghost-class": "opacity-50 bg-gray-200 dark:bg-gray-800",
                      animation: "200",
                      class: "space-y-2"
                    }, {
                      item: withCtx(({ element, index }, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div class="flex items-center gap-3 p-3 bg-gray-100 dark:bg-[#1e1e20] border border-gray-200 dark:border-gray-800 rounded-lg group"${_scopeId2}><div class="drag-handle cursor-grab active:cursor-grabbing text-gray-500 hover:text-gray-300"${_scopeId2}>`);
                          _push3(ssrRenderComponent(_component_UIcon, {
                            name: "ph:dots-six-vertical",
                            class: "w-5 h-5"
                          }, null, _parent3, _scopeId2));
                          _push3(`</div><div class="w-40"${_scopeId2}>`);
                          _push3(ssrRenderComponent(_component_UInput, {
                            modelValue: element.name,
                            "onUpdate:modelValue": ($event) => element.name = $event,
                            placeholder: _ctx.$t("admin.products.form.field_name_placeholder"),
                            class: "text-gray-900 dark:text-white"
                          }, null, _parent3, _scopeId2));
                          _push3(`</div>`);
                          _push3(ssrRenderComponent(_component_UInput, {
                            modelValue: element.label,
                            "onUpdate:modelValue": ($event) => element.label = $event,
                            placeholder: _ctx.$t("admin.products.form.field_label_placeholder"),
                            class: "text-gray-900 dark:text-white flex-1"
                          }, null, _parent3, _scopeId2));
                          _push3(`<div class="w-32"${_scopeId2}>`);
                          _push3(ssrRenderComponent(_component_USelect, {
                            modelValue: element.type,
                            "onUpdate:modelValue": ($event) => element.type = $event,
                            items: __props.schemaFieldTypeOptions,
                            "option-attribute": "label",
                            "value-attribute": "value",
                            class: "w-full"
                          }, null, _parent3, _scopeId2));
                          _push3(`</div><div class="flex items-center gap-3 ml-2"${_scopeId2}>`);
                          _push3(ssrRenderComponent(_component_UCheckbox, {
                            modelValue: element.required,
                            "onUpdate:modelValue": ($event) => element.required = $event,
                            label: _ctx.$t("admin.products.form.field_required"),
                            ui: { label: "text-sm" }
                          }, null, _parent3, _scopeId2));
                          _push3(ssrRenderComponent(_component_UButton, {
                            color: "error",
                            variant: "ghost",
                            icon: "ph:trash",
                            size: "sm",
                            class: "opacity-0 group-hover:opacity-100 transition-opacity",
                            onClick: ($event) => emit("remove-field", index)
                          }, null, _parent3, _scopeId2));
                          _push3(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center gap-3 p-3 bg-gray-100 dark:bg-[#1e1e20] border border-gray-200 dark:border-gray-800 rounded-lg group" }, [
                              createVNode("div", { class: "drag-handle cursor-grab active:cursor-grabbing text-gray-500 hover:text-gray-300" }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:dots-six-vertical",
                                  class: "w-5 h-5"
                                })
                              ]),
                              createVNode("div", { class: "w-40" }, [
                                createVNode(_component_UInput, {
                                  modelValue: element.name,
                                  "onUpdate:modelValue": ($event) => element.name = $event,
                                  placeholder: _ctx.$t("admin.products.form.field_name_placeholder"),
                                  class: "text-gray-900 dark:text-white"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                              ]),
                              createVNode(_component_UInput, {
                                modelValue: element.label,
                                "onUpdate:modelValue": ($event) => element.label = $event,
                                placeholder: _ctx.$t("admin.products.form.field_label_placeholder"),
                                class: "text-gray-900 dark:text-white flex-1"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                              createVNode("div", { class: "w-32" }, [
                                createVNode(_component_USelect, {
                                  modelValue: element.type,
                                  "onUpdate:modelValue": ($event) => element.type = $event,
                                  items: __props.schemaFieldTypeOptions,
                                  "option-attribute": "label",
                                  "value-attribute": "value",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ]),
                              createVNode("div", { class: "flex items-center gap-3 ml-2" }, [
                                createVNode(_component_UCheckbox, {
                                  modelValue: element.required,
                                  "onUpdate:modelValue": ($event) => element.required = $event,
                                  label: _ctx.$t("admin.products.form.field_required"),
                                  ui: { label: "text-sm" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                                createVNode(_component_UButton, {
                                  color: "error",
                                  variant: "ghost",
                                  icon: "ph:trash",
                                  size: "sm",
                                  class: "opacity-0 group-hover:opacity-100 transition-opacity",
                                  onClick: ($event) => emit("remove-field", index)
                                }, null, 8, ["onClick"])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<div class="text-sm text-gray-500 italic p-4 border border-dashed border-gray-300 dark:border-gray-800 rounded-lg text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.products.form.no_fields"))}</div>`);
                  }
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    icon: "ph:plus",
                    size: "sm",
                    class: "w-full justify-center border-dashed",
                    onClick: ($event) => emit("add-field")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(_ctx.$t("admin.products.form.add_field"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("admin.products.form.add_field")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`<!--]-->`);
                } else {
                  _push2(`<!--[-->`);
                  _push2(ssrRenderComponent(_component_UTextarea, {
                    modelValue: unref(schemaJsonModel),
                    "onUpdate:modelValue": ($event) => isRef(schemaJsonModel) ? schemaJsonModel.value = $event : null,
                    rows: 10,
                    class: "font-mono text-sm text-gray-900 dark:text-white w-full",
                    placeholder: _ctx.$t("admin.products.form.schema_json_placeholder")
                  }, null, _parent2, _scopeId));
                  _push2(`<p class="text-xs text-gray-500 mt-2"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.products.form.schema_json_help"))}</p><!--]-->`);
                }
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "w-full space-y-3" }, [
                    __props.isVisualMode ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      __props.schemaList.length > 0 ? (openBlock(), createBlock(unref(draggable), {
                        key: 0,
                        modelValue: unref(schemaListModel),
                        "onUpdate:modelValue": ($event) => isRef(schemaListModel) ? schemaListModel.value = $event : null,
                        "item-key": "id",
                        handle: ".drag-handle",
                        "ghost-class": "opacity-50 bg-gray-200 dark:bg-gray-800",
                        animation: "200",
                        class: "space-y-2"
                      }, {
                        item: withCtx(({ element, index }) => [
                          createVNode("div", { class: "flex items-center gap-3 p-3 bg-gray-100 dark:bg-[#1e1e20] border border-gray-200 dark:border-gray-800 rounded-lg group" }, [
                            createVNode("div", { class: "drag-handle cursor-grab active:cursor-grabbing text-gray-500 hover:text-gray-300" }, [
                              createVNode(_component_UIcon, {
                                name: "ph:dots-six-vertical",
                                class: "w-5 h-5"
                              })
                            ]),
                            createVNode("div", { class: "w-40" }, [
                              createVNode(_component_UInput, {
                                modelValue: element.name,
                                "onUpdate:modelValue": ($event) => element.name = $event,
                                placeholder: _ctx.$t("admin.products.form.field_name_placeholder"),
                                class: "text-gray-900 dark:text-white"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                            ]),
                            createVNode(_component_UInput, {
                              modelValue: element.label,
                              "onUpdate:modelValue": ($event) => element.label = $event,
                              placeholder: _ctx.$t("admin.products.form.field_label_placeholder"),
                              class: "text-gray-900 dark:text-white flex-1"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                            createVNode("div", { class: "w-32" }, [
                              createVNode(_component_USelect, {
                                modelValue: element.type,
                                "onUpdate:modelValue": ($event) => element.type = $event,
                                items: __props.schemaFieldTypeOptions,
                                "option-attribute": "label",
                                "value-attribute": "value",
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            createVNode("div", { class: "flex items-center gap-3 ml-2" }, [
                              createVNode(_component_UCheckbox, {
                                modelValue: element.required,
                                "onUpdate:modelValue": ($event) => element.required = $event,
                                label: _ctx.$t("admin.products.form.field_required"),
                                ui: { label: "text-sm" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                              createVNode(_component_UButton, {
                                color: "error",
                                variant: "ghost",
                                icon: "ph:trash",
                                size: "sm",
                                class: "opacity-0 group-hover:opacity-100 transition-opacity",
                                onClick: ($event) => emit("remove-field", index)
                              }, null, 8, ["onClick"])
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-sm text-gray-500 italic p-4 border border-dashed border-gray-300 dark:border-gray-800 rounded-lg text-center"
                      }, toDisplayString(_ctx.$t("admin.products.form.no_fields")), 1)),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "outline",
                        icon: "ph:plus",
                        size: "sm",
                        class: "w-full justify-center border-dashed",
                        onClick: ($event) => emit("add-field")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("admin.products.form.add_field")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode(_component_UTextarea, {
                        modelValue: unref(schemaJsonModel),
                        "onUpdate:modelValue": ($event) => isRef(schemaJsonModel) ? schemaJsonModel.value = $event : null,
                        rows: 10,
                        class: "font-mono text-sm text-gray-900 dark:text-white w-full",
                        placeholder: _ctx.$t("admin.products.form.schema_json_placeholder")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                      createVNode("p", { class: "text-xs text-gray-500 mt-2" }, toDisplayString(_ctx.$t("admin.products.form.schema_json_help")), 1)
                    ], 64))
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
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/products/ProductServiceSchemaSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProductServiceSchemaSection = Object.assign(_sfc_main$2, { __name: "AdminProductsProductServiceSchemaSection" });
const useAdminProductForm = (emit) => {
  const toast = useToast();
  const { settings } = useSettings();
  const supportedLocales = computed(() => {
    var _a, _b;
    const i18nEnabled = (_a = settings == null ? void 0 : settings.value) == null ? void 0 : _a.i18n_enabled;
    if (i18nEnabled === "false") return ["en"];
    const rawLocales = (_b = settings == null ? void 0 : settings.value) == null ? void 0 : _b.supported_locales;
    if (rawLocales === "") return ["en"];
    return (rawLocales || "en,zh").split(",").map((l) => l.trim()).filter(Boolean);
  });
  const defaultLocale = computed(() => supportedLocales.value[0] || "en");
  const currentTabLocale = ref(defaultLocale.value || "en");
  watch(defaultLocale, (val) => {
    if (!currentTabLocale.value || currentTabLocale.value === "en") {
      currentTabLocale.value = val || "en";
    }
  }, { immediate: true });
  const onTabChange = (index) => {
    var _a, _b;
    if (!isFeaturesVisualMode.value) {
      if (!syncFeaturesJsonToList()) {
        return;
      }
    }
    const targetLocale = supportedLocales.value[index] || "en";
    if (currentTabLocale.value === defaultLocale.value && targetLocale !== defaultLocale.value) {
      const trans = translationForms[targetLocale];
      if (trans) {
        if (!trans.name) trans.name = form.name;
        if (!trans.description) trans.description = form.description;
        if (!trans.content) trans.content = form.content;
        if (!trans.plan_badge && ((_a = form.metaData) == null ? void 0 : _a.plan_badge)) trans.plan_badge = form.metaData.plan_badge;
        if (!trans.download_instruction && ((_b = form.metaData) == null ? void 0 : _b.download_instruction)) trans.download_instruction = form.metaData.download_instruction;
      }
      if ((form.type === "subscription" || form.type === "topup") && (!translationFeaturesLists[targetLocale] || translationFeaturesLists[targetLocale].length === 0)) {
        translationFeaturesLists[targetLocale] = featuresList.value.map((f) => ({ ...f, id: Date.now().toString() + Math.random().toString(36).substr(2, 9) }));
      }
      if (form.type === "service" && (!trans.form_schema_labels || Object.keys(trans.form_schema_labels).length === 0)) {
        if (!trans.form_schema_labels) trans.form_schema_labels = {};
        serviceFormSchemaList.value.forEach((field) => {
          if (field.name) trans.form_schema_labels[field.name] = field.label || "";
        });
      }
    }
    currentTabLocale.value = targetLocale;
    if (!isFeaturesVisualMode.value) {
      currentFeaturesJson.value = JSON.stringify(stripUiIds(currentFeaturesList.value), null, 2);
    }
  };
  const form = reactive({
    id: null,
    name: "",
    slug: "",
    price: 0,
    type: "basic",
    description: "",
    content: "",
    imageUrl: "",
    imageUrls: [],
    isActive: true,
    status: "active",
    metaData: {}
  });
  const translationForms = reactive({});
  const isSaving = ref(false);
  const isUploading = ref(false);
  const newImageUrl = ref("");
  const metaPresets = ref({});
  const presetFields = computed(() => presetFieldsForType(metaPresets.value, form.type));
  const applyPresetDefaults = () => {
    if (form.id !== null) return;
    if (!form.metaData) form.metaData = {};
    for (const field of presetFields.value) {
      if (field.default === null || field.default === void 0) continue;
      if (form.metaData[field.name] !== void 0) continue;
      form.metaData[field.name] = field.default;
    }
  };
  watch(() => form.type, () => {
    applyPresetDefaults();
  });
  watch(metaPresets, () => {
    applyPresetDefaults();
  });
  const planIdsList = ref([]);
  const availableGateways = ref([]);
  const addPlanId = () => {
    planIdsList.value.push({ gateway: "", id: "" });
  };
  const removePlanId = (index) => {
    planIdsList.value.splice(index, 1);
  };
  const serviceFormSchemaList = ref([]);
  const isServiceSchemaVisualMode = ref(true);
  const serviceFormSchemaStr = ref("[]");
  const syncServiceSchemaJsonToList = () => {
    if (isServiceSchemaVisualMode.value) return true;
    try {
      serviceFormSchemaList.value = parseServiceSchemaFields(serviceFormSchemaStr.value);
      return true;
    } catch (e) {
      toast.add({ title: "JSON Error", description: "Invalid JSON format in Service Schema", color: "error" });
      return false;
    }
  };
  const toggleServiceSchemaMode = () => {
    if (isServiceSchemaVisualMode.value) {
      serviceFormSchemaStr.value = JSON.stringify(stripUiIds(serviceFormSchemaList.value), null, 2);
      isServiceSchemaVisualMode.value = false;
    } else {
      if (syncServiceSchemaJsonToList()) {
        isServiceSchemaVisualMode.value = true;
      }
    }
  };
  const addServiceSchemaField = () => {
    serviceFormSchemaList.value.push({
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: "",
      label: "",
      type: "text",
      required: true
    });
  };
  const removeServiceSchemaField = (index) => {
    serviceFormSchemaList.value.splice(index, 1);
  };
  const featuresList = ref([]);
  const translationFeaturesLists = reactive({});
  const isFeaturesVisualMode = ref(true);
  const currentFeaturesJson = ref("[]");
  const currentFeaturesList = computed({
    get: () => {
      if (currentTabLocale.value === defaultLocale.value) return featuresList.value;
      return translationFeaturesLists[currentTabLocale.value] || [];
    },
    set: (val) => {
      if (currentTabLocale.value === defaultLocale.value) {
        featuresList.value = val;
      } else {
        translationFeaturesLists[currentTabLocale.value] = val;
      }
    }
  });
  const syncFeaturesJsonToList = () => {
    if (isFeaturesVisualMode.value) return true;
    try {
      currentFeaturesList.value = parseProductFeatures(currentFeaturesJson.value);
      return true;
    } catch (e) {
      toast.add({ title: "JSON Error", description: "Invalid JSON format in features", color: "error" });
      return false;
    }
  };
  const toggleFeaturesMode = () => {
    if (isFeaturesVisualMode.value) {
      currentFeaturesJson.value = JSON.stringify(stripUiIds(currentFeaturesList.value), null, 2);
      isFeaturesVisualMode.value = false;
    } else {
      if (syncFeaturesJsonToList()) {
        isFeaturesVisualMode.value = true;
      }
    }
  };
  const addFeature = () => {
    const newList = [...currentFeaturesList.value];
    newList.push({
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: "",
      icon: "ph:check",
      included: true
    });
    currentFeaturesList.value = newList;
  };
  const removeFeature = (index) => {
    const newList = [...currentFeaturesList.value];
    newList.splice(index, 1);
    currentFeaturesList.value = newList;
  };
  const initForm = (product) => {
    var _a;
    for (const key in translationForms) delete translationForms[key];
    supportedLocales.value.forEach((l) => {
      if (l !== defaultLocale.value) {
        translationForms[l] = {
          name: "",
          description: "",
          content: "",
          plan_badge: "",
          download_instruction: "",
          form_schema_labels: {}
        };
      }
    });
    if (product && Object.keys(product).length > 0) {
      const productClone = JSON.parse(JSON.stringify(product));
      Object.assign(form, {
        id: null,
        name: "",
        slug: "",
        price: 0,
        type: "basic",
        description: "",
        content: "",
        imageUrl: "",
        imageUrls: [],
        isActive: true,
        status: "active",
        metaData: {}
      });
      Object.assign(form, productClone);
      form.status = productClone.status || (productClone.isActive === false ? "inactive" : "active");
      form.isActive = form.status !== "inactive";
      if (!form.imageUrls) form.imageUrls = [];
      if (typeof form.imageUrls === "string") {
        try {
          form.imageUrls = JSON.parse(form.imageUrls);
        } catch (e) {
          form.imageUrls = [];
        }
      }
      if (!form.metaData) form.metaData = {};
      if (typeof form.metaData === "string") {
        try {
          form.metaData = JSON.parse(form.metaData);
        } catch (e) {
          form.metaData = {};
        }
      }
      if (form.type === "topup") {
        if (!form.metaData.balance_type) form.metaData.balance_type = "cash";
        if (form.metaData.recharge_amount === void 0 || form.metaData.recharge_amount === null || form.metaData.recharge_amount === "") {
          form.metaData.recharge_amount = form.price;
        }
      }
      if (form.type === "subscription" && typeof form.metaData.interval === "string" && form.metaData.interval.includes(":")) {
        const [unit, count] = form.metaData.interval.split(":");
        form.metaData.interval = unit;
        form.metaData.interval_count = parseInt(count) || 1;
      }
      if (form.type === "subscription") {
        if (!form.metaData.interval) form.metaData.interval = "month";
        if (!form.metaData.interval_count) form.metaData.interval_count = 1;
        planIdsList.value = [];
        if (form.metaData.plan_ids && typeof form.metaData.plan_ids === "object") {
          Object.keys(form.metaData.plan_ids).forEach((key) => {
            planIdsList.value.push({ gateway: key, id: form.metaData.plan_ids[key] });
          });
        }
      }
      if (form.metaData.plan_features) {
        featuresList.value = parseProductFeatures(form.metaData.plan_features);
      } else {
        featuresList.value = [];
      }
      if ((_a = form.metaData) == null ? void 0 : _a.translations) {
        Object.keys(form.metaData.translations).forEach((loc) => {
          if (loc !== defaultLocale.value && translationForms[loc]) {
            const trans = form.metaData.translations[loc];
            translationForms[loc].name = trans.name || "";
            translationForms[loc].description = trans.description || "";
            translationForms[loc].content = trans.content || "";
            translationForms[loc].plan_badge = trans.plan_badge || "";
            translationForms[loc].download_instruction = trans.download_instruction || "";
            translationForms[loc].form_schema_labels = trans.form_schema_labels || {};
            if (trans.plan_features) {
              translationFeaturesLists[loc] = parseProductFeatures(trans.plan_features);
            } else {
              translationFeaturesLists[loc] = [];
            }
          }
        });
      }
      if (form.type === "service") {
        if (form.metaData.form_schema) {
          serviceFormSchemaStr.value = JSON.stringify(form.metaData.form_schema, null, 2);
          syncServiceSchemaJsonToList();
        } else {
          serviceFormSchemaStr.value = '[\n  {\n    "name": "server_ip",\n    "label": "Server IP",\n    "type": "text",\n    "required": true\n  }\n]';
          syncServiceSchemaJsonToList();
        }
      }
    } else {
      Object.assign(form, {
        id: null,
        name: "",
        slug: "",
        price: 0,
        type: "basic",
        description: "",
        content: "",
        imageUrl: "",
        imageUrls: [],
        isActive: true,
        status: "active",
        metaData: {}
      });
      serviceFormSchemaStr.value = '[\n  {\n    "name": "server_ip",\n    "label": "Server IP",\n    "type": "text",\n    "required": true\n  }\n]';
      syncServiceSchemaJsonToList();
      featuresList.value = [];
      planIdsList.value = [];
      for (const key in translationFeaturesLists) {
        translationFeaturesLists[key] = [];
      }
      applyPresetDefaults();
    }
    newImageUrl.value = "";
  };
  const saveProduct = async () => {
    if (!syncFeaturesJsonToList()) return false;
    if (!syncServiceSchemaJsonToList()) return false;
    if (form.type === "service") {
      try {
        if (!form.metaData) form.metaData = {};
        form.metaData.form_schema = cleanServiceSchemaFields(serviceFormSchemaList.value);
      } catch (e) {
        toast.add({ title: "Error", description: "Invalid Service Form Schema", color: "error" });
        return false;
      }
    }
    if (form.type === "subscription" || form.type === "topup") {
      try {
        const cleanFeatures = cleanProductFeatures(featuresList.value);
        if (cleanFeatures.length > 0) {
          form.metaData.plan_features = cleanFeatures;
        } else {
          delete form.metaData.plan_features;
        }
      } catch (e) {
        toast.add({ title: "Error", description: "Invalid Default Plan Features", color: "error" });
        return false;
      }
    }
    if (form.type === "subscription") {
      const planIdsObj = {};
      planIdsList.value.forEach((item) => {
        const key = item.gateway.trim();
        const val = item.id.trim();
        if (key && val) {
          planIdsObj[key] = val;
        }
      });
      form.metaData.plan_ids = planIdsObj;
    } else {
      delete form.metaData.plan_ids;
    }
    if (form.type === "topup") {
      if (!form.metaData.balance_type) form.metaData.balance_type = "cash";
      if (form.metaData.recharge_amount === void 0 || form.metaData.recharge_amount === null || form.metaData.recharge_amount === "") {
        form.metaData.recharge_amount = form.price;
      }
      delete form.metaData.allowed_scopes;
      delete form.metaData.api_endpoint;
      delete form.metaData.sync_webhook_url;
      delete form.metaData.sync_secret;
      delete form.metaData.quota;
      delete form.metaData.valid_days;
    }
    if (!form.metaData.translations) form.metaData.translations = {};
    for (const loc of supportedLocales.value) {
      if (loc === defaultLocale.value) continue;
      const trans = translationForms[loc];
      if (!trans) continue;
      if (!form.metaData.translations[loc]) form.metaData.translations[loc] = {};
      form.metaData.translations[loc].name = trans.name;
      form.metaData.translations[loc].description = trans.description;
      form.metaData.translations[loc].content = trans.content;
      form.metaData.translations[loc].plan_badge = trans.plan_badge;
      if (form.type === "file") {
        form.metaData.translations[loc].download_instruction = trans.download_instruction;
      }
      if (form.type === "service") {
        form.metaData.translations[loc].form_schema_labels = trans.form_schema_labels;
      }
      if (form.type === "subscription" || form.type === "topup") {
        try {
          const transFeatures = translationFeaturesLists[loc] || [];
          const cleanTranslatedFeatures = cleanProductFeatures(transFeatures);
          if (cleanTranslatedFeatures.length > 0) {
            form.metaData.translations[loc].plan_features = cleanTranslatedFeatures;
          } else {
            delete form.metaData.translations[loc].plan_features;
          }
        } catch (e) {
          toast.add({ title: "Error", description: `Invalid ${loc} Plan Features`, color: "error" });
          return false;
        }
      }
    }
    delete form.metaData.name_zh;
    delete form.metaData.plan_badge_zh;
    isSaving.value = true;
    try {
      if (form.imageUrls && form.imageUrls.length > 0) {
        form.imageUrl = form.imageUrls[0];
      } else {
        form.imageUrl = "";
      }
      if (form.id) {
        await $fetch(`/api/admin/products/${form.id}`, { method: "PUT", body: form });
        toast.add({ title: "Success", description: "Product updated successfully", color: "success" });
      } else {
        await $fetch("/api/admin/products", { method: "POST", body: form });
        toast.add({ title: "Success", description: "Product created successfully", color: "success" });
      }
      emit("saved");
      return true;
    } catch (error) {
      toast.add({ title: "Error", description: error.message || "Failed to save product", color: "error" });
      return false;
    } finally {
      isSaving.value = false;
    }
  };
  const handleFileUpload = async (event, fileInputRef) => {
    const target = event.target;
    const files = target.files;
    if (!files || files.length === 0) return;
    isUploading.value = true;
    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        const f = files.item(i);
        if (f) formData.append("files", f);
      }
      const res = await $fetch("/api/admin/upload", { method: "POST", body: formData });
      if (res && res.urls) {
        if (!form.imageUrls) form.imageUrls = [];
        form.imageUrls.push(...res.urls);
        if (!form.imageUrl && res.urls.length > 0) {
          form.imageUrl = res.urls[0];
        }
      }
    } catch (error) {
      toast.add({ title: "Error", description: "Failed to upload image", color: "error" });
    } finally {
      isUploading.value = false;
      if (fileInputRef) fileInputRef.value = "";
    }
  };
  const addImageUrl = () => {
    if (newImageUrl.value && !form.imageUrls.includes(newImageUrl.value)) {
      form.imageUrls.push(newImageUrl.value);
      newImageUrl.value = "";
    }
  };
  const removeImage = async (index) => {
    const url = form.imageUrls[index];
    form.imageUrls.splice(index, 1);
    if (url && url.startsWith("/uploads/")) {
      try {
        await $fetch(`/api/admin/upload/delete?url=${encodeURIComponent(url)}`, { method: "DELETE" });
      } catch (e) {
        console.error("Failed to delete file from server", e);
      }
    }
  };
  return {
    form,
    translationForms,
    isSaving,
    isUploading,
    newImageUrl,
    serviceFormSchemaStr,
    serviceFormSchemaList,
    isServiceSchemaVisualMode,
    toggleServiceSchemaMode,
    addServiceSchemaField,
    removeServiceSchemaField,
    isFeaturesVisualMode,
    currentFeaturesJson,
    toggleFeaturesMode,
    currentFeaturesList,
    supportedLocales,
    defaultLocale,
    currentTabLocale,
    initForm,
    saveProduct,
    onTabChange,
    addFeature,
    removeFeature,
    handleFileUpload,
    addImageUrl,
    removeImage,
    planIdsList,
    availableGateways,
    addPlanId,
    removePlanId,
    presetFields
  };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductFormModal",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean },
    product: {}
  },
  emits: ["update:modelValue", "saved"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useI18n();
    const { buildImageProxyUrl } = useImageProxy();
    const isOpen = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    const {
      form,
      translationForms,
      isSaving,
      isUploading,
      newImageUrl,
      serviceFormSchemaStr,
      serviceFormSchemaList,
      isServiceSchemaVisualMode,
      toggleServiceSchemaMode,
      addServiceSchemaField,
      removeServiceSchemaField,
      isFeaturesVisualMode,
      currentFeaturesJson,
      toggleFeaturesMode,
      currentFeaturesList,
      supportedLocales,
      defaultLocale,
      currentTabLocale,
      initForm,
      saveProduct,
      onTabChange,
      addFeature,
      removeFeature,
      handleFileUpload,
      addImageUrl,
      removeImage,
      planIdsList,
      availableGateways,
      addPlanId,
      removePlanId,
      presetFields
    } = useAdminProductForm(emit);
    const typeOptions = computed(() => [
      { label: t("admin.products.form.type_basic"), value: "basic" },
      { label: t("admin.products.form.type_subscription"), value: "subscription" },
      { label: t("admin.products.form.type_service"), value: "service" },
      { label: t("admin.products.form.type_key"), value: "key" },
      { label: t("admin.products.form.type_file"), value: "file" },
      { label: t("admin.products.form.type_topup"), value: "topup" }
    ]);
    const intervalOptions = computed(() => [
      { label: t("admin.products.form.interval_day"), value: "day" },
      { label: t("admin.products.form.interval_week"), value: "week" },
      { label: t("admin.products.form.interval_month"), value: "month" },
      { label: t("admin.products.form.interval_year"), value: "year" },
      { label: t("admin.products.form.interval_lifetime"), value: "lifetime" }
    ]);
    const schemaFieldTypeOptions = computed(() => [
      { label: t("admin.products.form.field_type_text"), value: "text" },
      { label: t("admin.products.form.field_type_number"), value: "number" },
      { label: t("admin.products.form.field_type_email"), value: "email" },
      { label: t("admin.products.form.field_type_textarea"), value: "textarea" },
      { label: t("admin.products.form.field_type_date"), value: "date" }
    ]);
    const balanceTypeOptions = computed(() => [
      { label: t("admin.products.form.balance_cash"), value: "cash" },
      { label: t("admin.products.form.balance_grant"), value: "grant" }
    ]);
    const highlightColorOptions = computed(() => [
      { label: t("admin.products.form.color_gray"), value: "gray" },
      { label: t("admin.products.form.color_purple"), value: "purple" },
      { label: t("admin.products.form.color_blue"), value: "blue" },
      { label: t("admin.products.form.color_emerald"), value: "emerald" }
    ]);
    const isPreviewModalOpen = ref(false);
    const previewImageUrl = ref("");
    const previewImage = (url) => {
      previewImageUrl.value = url;
      isPreviewModalOpen.value = true;
    };
    const onFileUpload = (e, input) => {
      handleFileUpload(e, input);
    };
    const handleLocaleSelect = (locale) => {
      const index = supportedLocales.value.indexOf(locale);
      if (index === -1) {
        currentTabLocale.value = locale;
        return;
      }
      onTabChange(index);
    };
    const onSubmit = async () => {
      const success = await saveProduct();
      if (success) {
        isOpen.value = false;
      }
    };
    watch(
      () => props.modelValue,
      (newVal) => {
        if (newVal) {
          currentTabLocale.value = defaultLocale.value;
          initForm(props.product);
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FullScreenModal = __nuxt_component_7;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_USelect = _sfc_main$j;
      const _component_UTooltip = _sfc_main$7;
      const _component_UIcon = _sfc_main$G;
      const _component_UCheckbox = _sfc_main$8;
      const _component_UTextarea = _sfc_main$g;
      const _component_RichEditor = __nuxt_component_8$1;
      const _component_UButton = _sfc_main$B;
      const _component_UModal = _sfc_main$s;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_FullScreenModal, {
        modelValue: isOpen.value,
        "onUpdate:modelValue": ($event) => isOpen.value = $event,
        maxWidth: "sm:max-w-6xl",
        title: unref(form).id ? _ctx.$t("admin.products.edit") : _ctx.$t("admin.products.add")
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
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
              form: "product-form",
              color: "primary",
              class: "bg-purple-600 hover:bg-purple-500 text-white",
              loading: unref(isSaving)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.common.save"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.common.save")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
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
                form: "product-form",
                color: "primary",
                class: "bg-purple-600 hover:bg-purple-500 text-white",
                loading: unref(isSaving)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("admin.common.save")), 1)
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ProductLocaleTabs, {
              locales: unref(supportedLocales),
              "default-locale": unref(defaultLocale),
              "current-locale": unref(currentTabLocale),
              "has-default-name": Boolean(unref(form).name),
              onSelect: handleLocaleSelect
            }, null, _parent2, _scopeId));
            _push2(`<form class="space-y-6" id="product-form"${_scopeId}><div class="grid grid-cols-2 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.products.name") + (unref(currentTabLocale) !== unref(defaultLocale) ? ` (${unref(currentTabLocale)})` : "")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(currentTabLocale) === unref(defaultLocale)) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      required: "",
                      class: "text-gray-900 dark:text-white w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: unref(translationForms)[unref(currentTabLocale)].name,
                      "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].name = $event,
                      class: "text-gray-900 dark:text-white w-full",
                      placeholder: _ctx.$t("admin.products.form.name_translated", { locale: unref(currentTabLocale) })
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock(_component_UInput, {
                      key: 0,
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      required: "",
                      class: "text-gray-900 dark:text-white w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UInput, {
                      key: 1,
                      modelValue: unref(translationForms)[unref(currentTabLocale)].name,
                      "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].name = $event,
                      class: "text-gray-900 dark:text-white w-full",
                      placeholder: _ctx.$t("admin.products.form.name_translated", { locale: unref(currentTabLocale) })
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(currentTabLocale) === unref(defaultLocale)) {
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.products.form.slug")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: unref(form).slug,
                      "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                      class: "text-gray-900 dark:text-white w-full",
                      placeholder: _ctx.$t("admin.products.form.slug_placeholder")
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).slug,
                        "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                        class: "text-gray-900 dark:text-white w-full",
                        placeholder: _ctx.$t("admin.products.form.slug_placeholder")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(currentTabLocale) === unref(defaultLocale)) {
              _push2(`<div class="grid grid-cols-2 gap-4"${_scopeId}><div class="flex flex-col gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.products.form.type")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: unref(form).type,
                      "onUpdate:modelValue": ($event) => unref(form).type = $event,
                      items: typeOptions.value,
                      "option-attribute": "label",
                      "value-attribute": "value",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: unref(form).type,
                        "onUpdate:modelValue": ($event) => unref(form).type = $event,
                        items: typeOptions.value,
                        "option-attribute": "label",
                        "value-attribute": "value",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.products.price"),
                name: "price"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: unref(form).price,
                      "onUpdate:modelValue": ($event) => unref(form).price = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      step: "0.01",
                      required: "",
                      class: "text-gray-900 dark:text-white w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).price,
                        "onUpdate:modelValue": ($event) => unref(form).price = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        step: "0.01",
                        required: "",
                        class: "text-gray-900 dark:text-white w-full"
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
            if (unref(currentTabLocale) === unref(defaultLocale)) {
              _push2(`<div class="grid grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.products.form.per_user_limit.label")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: unref(form).metaData.perUserLimit,
                      "onUpdate:modelValue": ($event) => unref(form).metaData.perUserLimit = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "0",
                      step: "1",
                      class: "text-gray-900 dark:text-white w-full",
                      placeholder: _ctx.$t("admin.products.form.per_user_limit.placeholder")
                    }, null, _parent3, _scopeId2));
                    _push3(`<p class="text-xs text-gray-500 mt-1"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.products.form.per_user_limit.help"))}</p>`);
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).metaData.perUserLimit,
                        "onUpdate:modelValue": ($event) => unref(form).metaData.perUserLimit = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        min: "0",
                        step: "1",
                        class: "text-gray-900 dark:text-white w-full",
                        placeholder: _ctx.$t("admin.products.form.per_user_limit.placeholder")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                      createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.products.form.per_user_limit.help")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if ((unref(form).type === "subscription" || unref(form).type === "topup") && unref(currentTabLocale) === unref(defaultLocale)) {
              _push2(`<div class="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-100 dark:bg-[#1a1a1c]"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><h3 class="text-gray-900 dark:text-white font-medium"${_scopeId}>${ssrInterpolate(unref(form).type === "subscription" ? _ctx.$t("admin.products.form.subscription_settings") : _ctx.$t("admin.products.form.topup_display_settings"))}</h3>`);
              _push2(ssrRenderComponent(_component_UTooltip, {
                text: _ctx.$t("admin.products.form.pricing_tooltip")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:info",
                      class: "w-4 h-4 text-gray-500 hover:text-gray-300 cursor-help"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UIcon, {
                        name: "ph:info",
                        class: "w-4 h-4 text-gray-500 hover:text-gray-300 cursor-help"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UCheckbox, {
                modelValue: unref(form).metaData.is_pricing_plan,
                "onUpdate:modelValue": ($event) => unref(form).metaData.is_pricing_plan = $event,
                label: _ctx.$t("admin.products.form.show_as_pricing"),
                class: "shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(form).type === "subscription") {
                _push2(`<div class="grid grid-cols-2 gap-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: _ctx.$t("admin.products.form.interval_unit")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_USelect, {
                        modelValue: unref(form).metaData.interval,
                        "onUpdate:modelValue": ($event) => unref(form).metaData.interval = $event,
                        items: intervalOptions.value,
                        "option-attribute": "label",
                        "value-attribute": "value",
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_USelect, {
                          modelValue: unref(form).metaData.interval,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.interval = $event,
                          items: intervalOptions.value,
                          "option-attribute": "label",
                          "value-attribute": "value",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                if (unref(form).metaData.interval !== "lifetime") {
                  _push2(ssrRenderComponent(_component_UFormField, {
                    label: _ctx.$t("admin.products.form.interval_count")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(form).metaData.interval_count,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.interval_count = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          min: "1",
                          class: "text-gray-900 dark:text-white w-full",
                          placeholder: _ctx.$t("admin.products.form.interval_placeholder")
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).metaData.interval_count,
                            "onUpdate:modelValue": ($event) => unref(form).metaData.interval_count = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            min: "1",
                            class: "text-gray-900 dark:text-white w-full",
                            placeholder: _ctx.$t("admin.products.form.interval_placeholder")
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
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
                _push2(`<!---->`);
              }
              if (unref(form).type === "topup") {
                _push2(`<div class="grid grid-cols-2 gap-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: _ctx.$t("admin.products.form.recharge_amount")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: unref(form).metaData.recharge_amount,
                        "onUpdate:modelValue": ($event) => unref(form).metaData.recharge_amount = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        step: "0.01",
                        class: "text-gray-900 dark:text-white w-full",
                        placeholder: _ctx.$t("admin.products.form.recharge_placeholder")
                      }, null, _parent3, _scopeId2));
                      _push3(`<p class="text-xs text-gray-500 mt-1"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.products.form.recharge_help"))}</p>`);
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: unref(form).metaData.recharge_amount,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.recharge_amount = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          step: "0.01",
                          class: "text-gray-900 dark:text-white w-full",
                          placeholder: _ctx.$t("admin.products.form.recharge_placeholder")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                        createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.products.form.recharge_help")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: _ctx.$t("admin.products.form.balance_type")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_USelect, {
                        modelValue: unref(form).metaData.balance_type,
                        "onUpdate:modelValue": ($event) => unref(form).metaData.balance_type = $event,
                        items: balanceTypeOptions.value,
                        "option-attribute": "label",
                        "value-attribute": "value",
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                      _push3(`<p class="text-xs text-gray-500 mt-1"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.products.form.balance_help"))}</p>`);
                    } else {
                      return [
                        createVNode(_component_USelect, {
                          modelValue: unref(form).metaData.balance_type,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.balance_type = $event,
                          items: balanceTypeOptions.value,
                          "option-attribute": "label",
                          "value-attribute": "value",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                        createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.products.form.balance_help")), 1)
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
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(ProductGatewayPlanIdsSection, {
              visible: unref(form).type === "subscription" && unref(currentTabLocale) === unref(defaultLocale),
              items: unref(planIdsList),
              "available-gateways": unref(availableGateways),
              onAdd: unref(addPlanId),
              onRemove: unref(removePlanId)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ProductServiceSchemaSection, {
              visible: unref(form).type === "service",
              "is-default-locale": unref(currentTabLocale) === unref(defaultLocale),
              "locale-suffix": unref(currentTabLocale) !== unref(defaultLocale) ? ` (${unref(currentTabLocale)})` : "",
              "is-visual-mode": unref(isServiceSchemaVisualMode),
              "schema-json": unref(serviceFormSchemaStr),
              "schema-list": unref(serviceFormSchemaList),
              "schema-field-type-options": schemaFieldTypeOptions.value,
              onToggleMode: unref(toggleServiceSchemaMode),
              "onUpdate:schemaJson": ($event) => serviceFormSchemaStr.value = $event,
              "onUpdate:schemaList": ($event) => serviceFormSchemaList.value = $event,
              onAddField: unref(addServiceSchemaField),
              onRemoveField: unref(removeServiceSchemaField)
            }, null, _parent2, _scopeId));
            if (unref(form).type === "file") {
              _push2(`<div class="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-100 dark:bg-[#1a1a1c]"${_scopeId}><h3 class="text-gray-900 dark:text-white font-medium mb-4"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.products.form.file_settings"))}</h3><div class="grid grid-cols-1 gap-4"${_scopeId}>`);
              if (unref(currentTabLocale) === unref(defaultLocale)) {
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: _ctx.$t("admin.products.form.download_url")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: unref(form).metaData.download_url,
                        "onUpdate:modelValue": ($event) => unref(form).metaData.download_url = $event,
                        class: "text-gray-900 dark:text-white w-full",
                        placeholder: "https://..."
                      }, null, _parent3, _scopeId2));
                      _push3(`<p class="text-xs text-gray-500 mt-1"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.products.form.download_url_help"))}</p>`);
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: unref(form).metaData.download_url,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.download_url = $event,
                          class: "text-gray-900 dark:text-white w-full",
                          placeholder: "https://..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.products.form.download_url_help")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.products.form.download_instructions") + (unref(currentTabLocale) !== unref(defaultLocale) ? ` (${unref(currentTabLocale)})` : "")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(currentTabLocale) === unref(defaultLocale)) {
                      _push3(ssrRenderComponent(_component_UTextarea, {
                        modelValue: unref(form).metaData.download_instruction,
                        "onUpdate:modelValue": ($event) => unref(form).metaData.download_instruction = $event,
                        rows: 2,
                        class: "text-gray-900 dark:text-white w-full",
                        placeholder: _ctx.$t("admin.products.form.download_placeholder")
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(_component_UTextarea, {
                        modelValue: unref(translationForms)[unref(currentTabLocale)].download_instruction,
                        "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].download_instruction = $event,
                        rows: 2,
                        class: "text-gray-900 dark:text-white w-full",
                        placeholder: _ctx.$t("admin.products.form.download_translated", { locale: unref(currentTabLocale) })
                      }, null, _parent3, _scopeId2));
                    }
                  } else {
                    return [
                      unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock(_component_UTextarea, {
                        key: 0,
                        modelValue: unref(form).metaData.download_instruction,
                        "onUpdate:modelValue": ($event) => unref(form).metaData.download_instruction = $event,
                        rows: 2,
                        class: "text-gray-900 dark:text-white w-full",
                        placeholder: _ctx.$t("admin.products.form.download_placeholder")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : (openBlock(), createBlock(_component_UTextarea, {
                        key: 1,
                        modelValue: unref(translationForms)[unref(currentTabLocale)].download_instruction,
                        "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].download_instruction = $event,
                        rows: 2,
                        class: "text-gray-900 dark:text-white w-full",
                        placeholder: _ctx.$t("admin.products.form.download_translated", { locale: unref(currentTabLocale) })
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(form).type === "topup" && unref(currentTabLocale) === unref(defaultLocale)) {
              _push2(`<div class="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-100 dark:bg-[#1a1a1c]"${_scopeId}><h3 class="text-gray-900 dark:text-white font-medium mb-4"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.products.form.topup_settings"))}</h3><div class="grid grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.products.form.success_message")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: unref(form).metaData.delivery_message,
                      "onUpdate:modelValue": ($event) => unref(form).metaData.delivery_message = $event,
                      class: "text-gray-900 dark:text-white w-full",
                      placeholder: _ctx.$t("admin.products.form.success_placeholder")
                    }, null, _parent3, _scopeId2));
                    _push3(`<p class="text-xs text-gray-500 mt-1"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.products.form.success_help"))}</p>`);
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).metaData.delivery_message,
                        "onUpdate:modelValue": ($event) => unref(form).metaData.delivery_message = $event,
                        class: "text-gray-900 dark:text-white w-full",
                        placeholder: _ctx.$t("admin.products.form.success_placeholder")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                      createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.products.form.success_help")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.products.form.display_unit")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: unref(form).metaData.display_unit,
                      "onUpdate:modelValue": ($event) => unref(form).metaData.display_unit = $event,
                      class: "text-gray-900 dark:text-white w-full",
                      placeholder: _ctx.$t("admin.products.form.display_placeholder")
                    }, null, _parent3, _scopeId2));
                    _push3(`<p class="text-xs text-gray-500 mt-1"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.products.form.display_help"))}</p>`);
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).metaData.display_unit,
                        "onUpdate:modelValue": ($event) => unref(form).metaData.display_unit = $event,
                        class: "text-gray-900 dark:text-white w-full",
                        placeholder: _ctx.$t("admin.products.form.display_placeholder")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                      createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.products.form.display_help")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(ProductPricingFeaturesSection, {
              visible: unref(form).type === "subscription" || unref(form).type === "topup",
              locale: unref(currentTabLocale),
              "is-visual-mode": unref(isFeaturesVisualMode),
              "features-json": unref(currentFeaturesJson),
              "features-list": unref(currentFeaturesList),
              onToggleMode: unref(toggleFeaturesMode),
              "onUpdate:featuresJson": ($event) => currentFeaturesJson.value = $event,
              "onUpdate:featuresList": ($event) => currentFeaturesList.value = $event,
              onAddFeature: unref(addFeature),
              onRemoveFeature: unref(removeFeature)
            }, {
              "badge-field": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(form).metaData.is_pricing_plan) {
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: _ctx.$t("admin.products.form.plan_badge", { locale: unref(currentTabLocale) })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (unref(currentTabLocale) === unref(defaultLocale)) {
                            _push4(ssrRenderComponent(_component_UInput, {
                              modelValue: unref(form).metaData.plan_badge,
                              "onUpdate:modelValue": ($event) => unref(form).metaData.plan_badge = $event,
                              class: "text-gray-900 dark:text-white w-full",
                              placeholder: _ctx.$t("admin.products.form.plan_badge_placeholder")
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(ssrRenderComponent(_component_UInput, {
                              modelValue: unref(translationForms)[unref(currentTabLocale)].plan_badge,
                              "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].plan_badge = $event,
                              class: "text-gray-900 dark:text-white w-full",
                              placeholder: _ctx.$t("admin.products.form.badge_translated", { locale: unref(currentTabLocale) })
                            }, null, _parent4, _scopeId3));
                          }
                        } else {
                          return [
                            unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock(_component_UInput, {
                              key: 0,
                              modelValue: unref(form).metaData.plan_badge,
                              "onUpdate:modelValue": ($event) => unref(form).metaData.plan_badge = $event,
                              class: "text-gray-900 dark:text-white w-full",
                              placeholder: _ctx.$t("admin.products.form.plan_badge_placeholder")
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : (openBlock(), createBlock(_component_UInput, {
                              key: 1,
                              modelValue: unref(translationForms)[unref(currentTabLocale)].plan_badge,
                              "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].plan_badge = $event,
                              class: "text-gray-900 dark:text-white w-full",
                              placeholder: _ctx.$t("admin.products.form.badge_translated", { locale: unref(currentTabLocale) })
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(form).metaData.is_pricing_plan ? (openBlock(), createBlock(_component_UFormField, {
                      key: 0,
                      label: _ctx.$t("admin.products.form.plan_badge", { locale: unref(currentTabLocale) })
                    }, {
                      default: withCtx(() => [
                        unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock(_component_UInput, {
                          key: 0,
                          modelValue: unref(form).metaData.plan_badge,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.plan_badge = $event,
                          class: "text-gray-900 dark:text-white w-full",
                          placeholder: _ctx.$t("admin.products.form.plan_badge_placeholder")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : (openBlock(), createBlock(_component_UInput, {
                          key: 1,
                          modelValue: unref(translationForms)[unref(currentTabLocale)].plan_badge,
                          "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].plan_badge = $event,
                          class: "text-gray-900 dark:text-white w-full",
                          placeholder: _ctx.$t("admin.products.form.badge_translated", { locale: unref(currentTabLocale) })
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                      ]),
                      _: 1
                    }, 8, ["label"])) : createCommentVNode("", true)
                  ];
                }
              }),
              "color-field": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(currentTabLocale) === unref(defaultLocale) && unref(form).metaData.is_pricing_plan) {
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: _ctx.$t("admin.products.form.highlight_color")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_USelect, {
                            modelValue: unref(form).metaData.plan_color,
                            "onUpdate:modelValue": ($event) => unref(form).metaData.plan_color = $event,
                            class: "min-w-[200px]",
                            items: highlightColorOptions.value,
                            "option-attribute": "label",
                            "value-attribute": "value"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_USelect, {
                              modelValue: unref(form).metaData.plan_color,
                              "onUpdate:modelValue": ($event) => unref(form).metaData.plan_color = $event,
                              class: "min-w-[200px]",
                              items: highlightColorOptions.value,
                              "option-attribute": "label",
                              "value-attribute": "value"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(currentTabLocale) === unref(defaultLocale) && unref(form).metaData.is_pricing_plan ? (openBlock(), createBlock(_component_UFormField, {
                      key: 0,
                      label: _ctx.$t("admin.products.form.highlight_color")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: unref(form).metaData.plan_color,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.plan_color = $event,
                          class: "min-w-[200px]",
                          items: highlightColorOptions.value,
                          "option-attribute": "label",
                          "value-attribute": "value"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }, 8, ["label"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(currentTabLocale) === unref(defaultLocale) && unref(presetFields).length) {
              _push2(`<div class="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg"${_scopeId}><h3 class="text-gray-900 dark:text-white font-medium mb-4"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.settings.presets.form_section"))}</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(unref(presetFields), (field) => {
                _push2(ssrRenderComponent(_component_UFormField, {
                  key: field.name,
                  label: field.label || field.name,
                  required: field.required
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (field.type === "boolean") {
                        _push3(ssrRenderComponent(_component_UCheckbox, {
                          modelValue: unref(form).metaData[field.name],
                          "onUpdate:modelValue": ($event) => unref(form).metaData[field.name] = $event
                        }, null, _parent3, _scopeId2));
                      } else if (field.type === "textarea") {
                        _push3(ssrRenderComponent(_component_UTextarea, {
                          modelValue: unref(form).metaData[field.name],
                          "onUpdate:modelValue": ($event) => unref(form).metaData[field.name] = $event,
                          rows: 3,
                          class: "text-gray-900 dark:text-white w-full"
                        }, null, _parent3, _scopeId2));
                      } else if (field.type === "number") {
                        _push3(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(form).metaData[field.name],
                          "onUpdate:modelValue": ($event) => unref(form).metaData[field.name] = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          class: "text-gray-900 dark:text-white w-full"
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(form).metaData[field.name],
                          "onUpdate:modelValue": ($event) => unref(form).metaData[field.name] = $event,
                          class: "text-gray-900 dark:text-white w-full"
                        }, null, _parent3, _scopeId2));
                      }
                      _push3(`<p class="text-xs text-gray-500 mt-1"${_scopeId2}>${ssrInterpolate(field.name)}</p>`);
                    } else {
                      return [
                        field.type === "boolean" ? (openBlock(), createBlock(_component_UCheckbox, {
                          key: 0,
                          modelValue: unref(form).metaData[field.name],
                          "onUpdate:modelValue": ($event) => unref(form).metaData[field.name] = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : field.type === "textarea" ? (openBlock(), createBlock(_component_UTextarea, {
                          key: 1,
                          modelValue: unref(form).metaData[field.name],
                          "onUpdate:modelValue": ($event) => unref(form).metaData[field.name] = $event,
                          rows: 3,
                          class: "text-gray-900 dark:text-white w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : field.type === "number" ? (openBlock(), createBlock(_component_UInput, {
                          key: 2,
                          modelValue: unref(form).metaData[field.name],
                          "onUpdate:modelValue": ($event) => unref(form).metaData[field.name] = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          class: "text-gray-900 dark:text-white w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UInput, {
                          key: 3,
                          modelValue: unref(form).metaData[field.name],
                          "onUpdate:modelValue": ($event) => unref(form).metaData[field.name] = $event,
                          class: "text-gray-900 dark:text-white w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])),
                        createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(field.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(ProductImagesField, {
              visible: unref(currentTabLocale) === unref(defaultLocale),
              images: unref(form).imageUrls,
              "new-image-url": unref(newImageUrl),
              "is-uploading": unref(isUploading),
              "onUpdate:newImageUrl": ($event) => newImageUrl.value = $event,
              "onUpdate:images": ($event) => unref(form).imageUrls = $event,
              onAddUrl: unref(addImageUrl),
              onUpload: onFileUpload,
              onPreview: previewImage,
              onRemove: unref(removeImage)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.products.form.description") + (unref(currentTabLocale) !== unref(defaultLocale) ? ` (${unref(currentTabLocale)})` : "")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(currentTabLocale) === unref(defaultLocale)) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: unref(form).description,
                      "onUpdate:modelValue": ($event) => unref(form).description = $event,
                      rows: 3,
                      class: "text-gray-900 dark:text-white w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: unref(translationForms)[unref(currentTabLocale)].description,
                      "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].description = $event,
                      rows: 3,
                      class: "text-gray-900 dark:text-white w-full",
                      placeholder: _ctx.$t("admin.products.form.description_translated", { locale: unref(currentTabLocale) })
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock(_component_UTextarea, {
                      key: 0,
                      modelValue: unref(form).description,
                      "onUpdate:modelValue": ($event) => unref(form).description = $event,
                      rows: 3,
                      class: "text-gray-900 dark:text-white w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UTextarea, {
                      key: 1,
                      modelValue: unref(translationForms)[unref(currentTabLocale)].description,
                      "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].description = $event,
                      rows: 3,
                      class: "text-gray-900 dark:text-white w-full",
                      placeholder: _ctx.$t("admin.products.form.description_translated", { locale: unref(currentTabLocale) })
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.products.form.content") + (unref(currentTabLocale) !== unref(defaultLocale) ? ` (${unref(currentTabLocale)})` : "")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(currentTabLocale) === unref(defaultLocale)) {
                    _push3(ssrRenderComponent(_component_RichEditor, {
                      modelValue: unref(form).content,
                      "onUpdate:modelValue": ($event) => unref(form).content = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_RichEditor, {
                      modelValue: unref(translationForms)[unref(currentTabLocale)].content,
                      "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].content = $event
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock(_component_RichEditor, {
                      key: 0,
                      modelValue: unref(form).content,
                      "onUpdate:modelValue": ($event) => unref(form).content = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_RichEditor, {
                      key: 1,
                      modelValue: unref(translationForms)[unref(currentTabLocale)].content,
                      "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].content = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(currentTabLocale) === unref(defaultLocale)) {
              _push2(`<div class="mt-4 pb-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.products.status")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="grid grid-cols-1 sm:grid-cols-3 gap-3"${_scopeId2}><div class="${ssrRenderClass([unref(form).status === "active" ? "border-emerald-500 bg-emerald-50/30 dark:bg-emerald-950/20 ring-1 ring-emerald-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700", "p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3"])}"${_scopeId2}><div class="${ssrRenderClass([unref(form).status === "active" ? "border-emerald-600 bg-emerald-600 text-white" : "border-gray-400", "w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0"])}"${_scopeId2}>`);
                    if (unref(form).status === "active") {
                      _push3(`<div class="w-1.5 h-1.5 rounded-full bg-white"${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="flex flex-col min-w-0"${_scopeId2}><span class="text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId2}><span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"${_scopeId2}></span> ${ssrInterpolate(_ctx.$t("admin.products.status_active"))}</span><span class="text-[11px] text-gray-500 mt-1 line-clamp-2"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.products.status_active_help"))}</span></div></div><div class="${ssrRenderClass([unref(form).status === "hidden" ? "border-amber-500 bg-amber-50/30 dark:bg-amber-950/20 ring-1 ring-amber-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700", "p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3"])}"${_scopeId2}><div class="${ssrRenderClass([unref(form).status === "hidden" ? "border-amber-500 bg-amber-500 text-white" : "border-gray-400", "w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0"])}"${_scopeId2}>`);
                    if (unref(form).status === "hidden") {
                      _push3(`<div class="w-1.5 h-1.5 rounded-full bg-white"${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="flex flex-col min-w-0"${_scopeId2}><span class="text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId2}><span class="w-2 h-2 rounded-full bg-amber-500 shrink-0"${_scopeId2}></span> ${ssrInterpolate(_ctx.$t("admin.products.status_hidden"))}</span><span class="text-[11px] text-gray-500 mt-1 line-clamp-2"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.products.status_hidden_help"))}</span></div></div><div class="${ssrRenderClass([unref(form).status === "inactive" ? "border-neutral-500 bg-neutral-50/50 dark:bg-neutral-900/30 ring-1 ring-neutral-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700", "p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3"])}"${_scopeId2}><div class="${ssrRenderClass([unref(form).status === "inactive" ? "border-neutral-500 bg-neutral-500 text-white" : "border-gray-400", "w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0"])}"${_scopeId2}>`);
                    if (unref(form).status === "inactive") {
                      _push3(`<div class="w-1.5 h-1.5 rounded-full bg-white"${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="flex flex-col min-w-0"${_scopeId2}><span class="text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId2}><span class="w-2 h-2 rounded-full bg-gray-400 shrink-0"${_scopeId2}></span> ${ssrInterpolate(_ctx.$t("admin.products.status_inactive"))}</span><span class="text-[11px] text-gray-500 mt-1 line-clamp-2"${_scopeId2}>${ssrInterpolate(_ctx.$t("admin.products.status_inactive_help"))}</span></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-3" }, [
                        createVNode("div", {
                          class: ["p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3", unref(form).status === "active" ? "border-emerald-500 bg-emerald-50/30 dark:bg-emerald-950/20 ring-1 ring-emerald-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"],
                          onClick: ($event) => unref(form).status = "active"
                        }, [
                          createVNode("div", {
                            class: ["w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0", unref(form).status === "active" ? "border-emerald-600 bg-emerald-600 text-white" : "border-gray-400"]
                          }, [
                            unref(form).status === "active" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "w-1.5 h-1.5 rounded-full bg-white"
                            })) : createCommentVNode("", true)
                          ], 2),
                          createVNode("div", { class: "flex flex-col min-w-0" }, [
                            createVNode("span", { class: "text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                              createVNode("span", { class: "w-2 h-2 rounded-full bg-emerald-500 shrink-0" }),
                              createTextVNode(" " + toDisplayString(_ctx.$t("admin.products.status_active")), 1)
                            ]),
                            createVNode("span", { class: "text-[11px] text-gray-500 mt-1 line-clamp-2" }, toDisplayString(_ctx.$t("admin.products.status_active_help")), 1)
                          ])
                        ], 10, ["onClick"]),
                        createVNode("div", {
                          class: ["p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3", unref(form).status === "hidden" ? "border-amber-500 bg-amber-50/30 dark:bg-amber-950/20 ring-1 ring-amber-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"],
                          onClick: ($event) => unref(form).status = "hidden"
                        }, [
                          createVNode("div", {
                            class: ["w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0", unref(form).status === "hidden" ? "border-amber-500 bg-amber-500 text-white" : "border-gray-400"]
                          }, [
                            unref(form).status === "hidden" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "w-1.5 h-1.5 rounded-full bg-white"
                            })) : createCommentVNode("", true)
                          ], 2),
                          createVNode("div", { class: "flex flex-col min-w-0" }, [
                            createVNode("span", { class: "text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                              createVNode("span", { class: "w-2 h-2 rounded-full bg-amber-500 shrink-0" }),
                              createTextVNode(" " + toDisplayString(_ctx.$t("admin.products.status_hidden")), 1)
                            ]),
                            createVNode("span", { class: "text-[11px] text-gray-500 mt-1 line-clamp-2" }, toDisplayString(_ctx.$t("admin.products.status_hidden_help")), 1)
                          ])
                        ], 10, ["onClick"]),
                        createVNode("div", {
                          class: ["p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3", unref(form).status === "inactive" ? "border-neutral-500 bg-neutral-50/50 dark:bg-neutral-900/30 ring-1 ring-neutral-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"],
                          onClick: ($event) => unref(form).status = "inactive"
                        }, [
                          createVNode("div", {
                            class: ["w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0", unref(form).status === "inactive" ? "border-neutral-500 bg-neutral-500 text-white" : "border-gray-400"]
                          }, [
                            unref(form).status === "inactive" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "w-1.5 h-1.5 rounded-full bg-white"
                            })) : createCommentVNode("", true)
                          ], 2),
                          createVNode("div", { class: "flex flex-col min-w-0" }, [
                            createVNode("span", { class: "text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                              createVNode("span", { class: "w-2 h-2 rounded-full bg-gray-400 shrink-0" }),
                              createTextVNode(" " + toDisplayString(_ctx.$t("admin.products.status_inactive")), 1)
                            ]),
                            createVNode("span", { class: "text-[11px] text-gray-500 mt-1 line-clamp-2" }, toDisplayString(_ctx.$t("admin.products.status_inactive_help")), 1)
                          ])
                        ], 10, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</form>`);
          } else {
            return [
              createVNode(ProductLocaleTabs, {
                locales: unref(supportedLocales),
                "default-locale": unref(defaultLocale),
                "current-locale": unref(currentTabLocale),
                "has-default-name": Boolean(unref(form).name),
                onSelect: handleLocaleSelect
              }, null, 8, ["locales", "default-locale", "current-locale", "has-default-name"]),
              createVNode("form", {
                onSubmit: withModifiers(onSubmit, ["prevent"]),
                class: "space-y-6",
                id: "product-form"
              }, [
                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.products.name") + (unref(currentTabLocale) !== unref(defaultLocale) ? ` (${unref(currentTabLocale)})` : "")
                  }, {
                    default: withCtx(() => [
                      unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock(_component_UInput, {
                        key: 0,
                        modelValue: unref(form).name,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        required: "",
                        class: "text-gray-900 dark:text-white w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UInput, {
                        key: 1,
                        modelValue: unref(translationForms)[unref(currentTabLocale)].name,
                        "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].name = $event,
                        class: "text-gray-900 dark:text-white w-full",
                        placeholder: _ctx.$t("admin.products.form.name_translated", { locale: unref(currentTabLocale) })
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock(_component_UFormField, {
                    key: 0,
                    label: _ctx.$t("admin.products.form.slug")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).slug,
                        "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                        class: "text-gray-900 dark:text-white w-full",
                        placeholder: _ctx.$t("admin.products.form.slug_placeholder")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"])) : createCommentVNode("", true)
                ]),
                unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid grid-cols-2 gap-4"
                }, [
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.products.form.type")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          items: typeOptions.value,
                          "option-attribute": "label",
                          "value-attribute": "value",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.products.price"),
                    name: "price"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).price,
                        "onUpdate:modelValue": ($event) => unref(form).price = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        step: "0.01",
                        required: "",
                        class: "text-gray-900 dark:text-white w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ])) : createCommentVNode("", true),
                unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "grid grid-cols-2 gap-4"
                }, [
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.products.form.per_user_limit.label")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).metaData.perUserLimit,
                        "onUpdate:modelValue": ($event) => unref(form).metaData.perUserLimit = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        min: "0",
                        step: "1",
                        class: "text-gray-900 dark:text-white w-full",
                        placeholder: _ctx.$t("admin.products.form.per_user_limit.placeholder")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                      createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.products.form.per_user_limit.help")), 1)
                    ]),
                    _: 1
                  }, 8, ["label"])
                ])) : createCommentVNode("", true),
                (unref(form).type === "subscription" || unref(form).type === "topup") && unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-100 dark:bg-[#1a1a1c]"
                }, [
                  createVNode("div", { class: "flex items-center justify-between mb-4" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("h3", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(unref(form).type === "subscription" ? _ctx.$t("admin.products.form.subscription_settings") : _ctx.$t("admin.products.form.topup_display_settings")), 1),
                      createVNode(_component_UTooltip, {
                        text: _ctx.$t("admin.products.form.pricing_tooltip")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "ph:info",
                            class: "w-4 h-4 text-gray-500 hover:text-gray-300 cursor-help"
                          })
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    createVNode(_component_UCheckbox, {
                      modelValue: unref(form).metaData.is_pricing_plan,
                      "onUpdate:modelValue": ($event) => unref(form).metaData.is_pricing_plan = $event,
                      label: _ctx.$t("admin.products.form.show_as_pricing"),
                      class: "shrink-0"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                  ]),
                  unref(form).type === "subscription" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid grid-cols-2 gap-4"
                  }, [
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.products.form.interval_unit")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: unref(form).metaData.interval,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.interval = $event,
                          items: intervalOptions.value,
                          "option-attribute": "label",
                          "value-attribute": "value",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    unref(form).metaData.interval !== "lifetime" ? (openBlock(), createBlock(_component_UFormField, {
                      key: 0,
                      label: _ctx.$t("admin.products.form.interval_count")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(form).metaData.interval_count,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.interval_count = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          min: "1",
                          class: "text-gray-900 dark:text-white w-full",
                          placeholder: _ctx.$t("admin.products.form.interval_placeholder")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true),
                  unref(form).type === "topup" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "grid grid-cols-2 gap-4"
                  }, [
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.products.form.recharge_amount")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(form).metaData.recharge_amount,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.recharge_amount = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          step: "0.01",
                          class: "text-gray-900 dark:text-white w-full",
                          placeholder: _ctx.$t("admin.products.form.recharge_placeholder")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                        createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.products.form.recharge_help")), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.products.form.balance_type")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: unref(form).metaData.balance_type,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.balance_type = $event,
                          items: balanceTypeOptions.value,
                          "option-attribute": "label",
                          "value-attribute": "value",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                        createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.products.form.balance_help")), 1)
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                createVNode(ProductGatewayPlanIdsSection, {
                  visible: unref(form).type === "subscription" && unref(currentTabLocale) === unref(defaultLocale),
                  items: unref(planIdsList),
                  "available-gateways": unref(availableGateways),
                  onAdd: unref(addPlanId),
                  onRemove: unref(removePlanId)
                }, null, 8, ["visible", "items", "available-gateways", "onAdd", "onRemove"]),
                createVNode(ProductServiceSchemaSection, {
                  visible: unref(form).type === "service",
                  "is-default-locale": unref(currentTabLocale) === unref(defaultLocale),
                  "locale-suffix": unref(currentTabLocale) !== unref(defaultLocale) ? ` (${unref(currentTabLocale)})` : "",
                  "is-visual-mode": unref(isServiceSchemaVisualMode),
                  "schema-json": unref(serviceFormSchemaStr),
                  "schema-list": unref(serviceFormSchemaList),
                  "schema-field-type-options": schemaFieldTypeOptions.value,
                  onToggleMode: unref(toggleServiceSchemaMode),
                  "onUpdate:schemaJson": ($event) => serviceFormSchemaStr.value = $event,
                  "onUpdate:schemaList": ($event) => serviceFormSchemaList.value = $event,
                  onAddField: unref(addServiceSchemaField),
                  onRemoveField: unref(removeServiceSchemaField)
                }, null, 8, ["visible", "is-default-locale", "locale-suffix", "is-visual-mode", "schema-json", "schema-list", "schema-field-type-options", "onToggleMode", "onUpdate:schemaJson", "onUpdate:schemaList", "onAddField", "onRemoveField"]),
                unref(form).type === "file" ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: "p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-100 dark:bg-[#1a1a1c]"
                }, [
                  createVNode("h3", { class: "text-gray-900 dark:text-white font-medium mb-4" }, toDisplayString(_ctx.$t("admin.products.form.file_settings")), 1),
                  createVNode("div", { class: "grid grid-cols-1 gap-4" }, [
                    unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock(_component_UFormField, {
                      key: 0,
                      label: _ctx.$t("admin.products.form.download_url")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(form).metaData.download_url,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.download_url = $event,
                          class: "text-gray-900 dark:text-white w-full",
                          placeholder: "https://..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.products.form.download_url_help")), 1)
                      ]),
                      _: 1
                    }, 8, ["label"])) : createCommentVNode("", true),
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.products.form.download_instructions") + (unref(currentTabLocale) !== unref(defaultLocale) ? ` (${unref(currentTabLocale)})` : "")
                    }, {
                      default: withCtx(() => [
                        unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock(_component_UTextarea, {
                          key: 0,
                          modelValue: unref(form).metaData.download_instruction,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.download_instruction = $event,
                          rows: 2,
                          class: "text-gray-900 dark:text-white w-full",
                          placeholder: _ctx.$t("admin.products.form.download_placeholder")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : (openBlock(), createBlock(_component_UTextarea, {
                          key: 1,
                          modelValue: unref(translationForms)[unref(currentTabLocale)].download_instruction,
                          "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].download_instruction = $event,
                          rows: 2,
                          class: "text-gray-900 dark:text-white w-full",
                          placeholder: _ctx.$t("admin.products.form.download_translated", { locale: unref(currentTabLocale) })
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ])
                ])) : createCommentVNode("", true),
                unref(form).type === "topup" && unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock("div", {
                  key: 4,
                  class: "p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-100 dark:bg-[#1a1a1c]"
                }, [
                  createVNode("h3", { class: "text-gray-900 dark:text-white font-medium mb-4" }, toDisplayString(_ctx.$t("admin.products.form.topup_settings")), 1),
                  createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.products.form.success_message")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(form).metaData.delivery_message,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.delivery_message = $event,
                          class: "text-gray-900 dark:text-white w-full",
                          placeholder: _ctx.$t("admin.products.form.success_placeholder")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                        createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.products.form.success_help")), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.products.form.display_unit")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(form).metaData.display_unit,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.display_unit = $event,
                          class: "text-gray-900 dark:text-white w-full",
                          placeholder: _ctx.$t("admin.products.form.display_placeholder")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                        createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.products.form.display_help")), 1)
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ])
                ])) : createCommentVNode("", true),
                createVNode(ProductPricingFeaturesSection, {
                  visible: unref(form).type === "subscription" || unref(form).type === "topup",
                  locale: unref(currentTabLocale),
                  "is-visual-mode": unref(isFeaturesVisualMode),
                  "features-json": unref(currentFeaturesJson),
                  "features-list": unref(currentFeaturesList),
                  onToggleMode: unref(toggleFeaturesMode),
                  "onUpdate:featuresJson": ($event) => currentFeaturesJson.value = $event,
                  "onUpdate:featuresList": ($event) => currentFeaturesList.value = $event,
                  onAddFeature: unref(addFeature),
                  onRemoveFeature: unref(removeFeature)
                }, {
                  "badge-field": withCtx(() => [
                    unref(form).metaData.is_pricing_plan ? (openBlock(), createBlock(_component_UFormField, {
                      key: 0,
                      label: _ctx.$t("admin.products.form.plan_badge", { locale: unref(currentTabLocale) })
                    }, {
                      default: withCtx(() => [
                        unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock(_component_UInput, {
                          key: 0,
                          modelValue: unref(form).metaData.plan_badge,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.plan_badge = $event,
                          class: "text-gray-900 dark:text-white w-full",
                          placeholder: _ctx.$t("admin.products.form.plan_badge_placeholder")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : (openBlock(), createBlock(_component_UInput, {
                          key: 1,
                          modelValue: unref(translationForms)[unref(currentTabLocale)].plan_badge,
                          "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].plan_badge = $event,
                          class: "text-gray-900 dark:text-white w-full",
                          placeholder: _ctx.$t("admin.products.form.badge_translated", { locale: unref(currentTabLocale) })
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                      ]),
                      _: 1
                    }, 8, ["label"])) : createCommentVNode("", true)
                  ]),
                  "color-field": withCtx(() => [
                    unref(currentTabLocale) === unref(defaultLocale) && unref(form).metaData.is_pricing_plan ? (openBlock(), createBlock(_component_UFormField, {
                      key: 0,
                      label: _ctx.$t("admin.products.form.highlight_color")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: unref(form).metaData.plan_color,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.plan_color = $event,
                          class: "min-w-[200px]",
                          items: highlightColorOptions.value,
                          "option-attribute": "label",
                          "value-attribute": "value"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }, 8, ["label"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["visible", "locale", "is-visual-mode", "features-json", "features-list", "onToggleMode", "onUpdate:featuresJson", "onUpdate:featuresList", "onAddFeature", "onRemoveFeature"]),
                unref(currentTabLocale) === unref(defaultLocale) && unref(presetFields).length ? (openBlock(), createBlock("div", {
                  key: 5,
                  class: "bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg"
                }, [
                  createVNode("h3", { class: "text-gray-900 dark:text-white font-medium mb-4" }, toDisplayString(_ctx.$t("admin.settings.presets.form_section")), 1),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(presetFields), (field) => {
                      return openBlock(), createBlock(_component_UFormField, {
                        key: field.name,
                        label: field.label || field.name,
                        required: field.required
                      }, {
                        default: withCtx(() => [
                          field.type === "boolean" ? (openBlock(), createBlock(_component_UCheckbox, {
                            key: 0,
                            modelValue: unref(form).metaData[field.name],
                            "onUpdate:modelValue": ($event) => unref(form).metaData[field.name] = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : field.type === "textarea" ? (openBlock(), createBlock(_component_UTextarea, {
                            key: 1,
                            modelValue: unref(form).metaData[field.name],
                            "onUpdate:modelValue": ($event) => unref(form).metaData[field.name] = $event,
                            rows: 3,
                            class: "text-gray-900 dark:text-white w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : field.type === "number" ? (openBlock(), createBlock(_component_UInput, {
                            key: 2,
                            modelValue: unref(form).metaData[field.name],
                            "onUpdate:modelValue": ($event) => unref(form).metaData[field.name] = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            class: "text-gray-900 dark:text-white w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UInput, {
                            key: 3,
                            modelValue: unref(form).metaData[field.name],
                            "onUpdate:modelValue": ($event) => unref(form).metaData[field.name] = $event,
                            class: "text-gray-900 dark:text-white w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])),
                          createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(field.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["label", "required"]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                createVNode(ProductImagesField, {
                  visible: unref(currentTabLocale) === unref(defaultLocale),
                  images: unref(form).imageUrls,
                  "new-image-url": unref(newImageUrl),
                  "is-uploading": unref(isUploading),
                  "onUpdate:newImageUrl": ($event) => newImageUrl.value = $event,
                  "onUpdate:images": ($event) => unref(form).imageUrls = $event,
                  onAddUrl: unref(addImageUrl),
                  onUpload: onFileUpload,
                  onPreview: previewImage,
                  onRemove: unref(removeImage)
                }, null, 8, ["visible", "images", "new-image-url", "is-uploading", "onUpdate:newImageUrl", "onUpdate:images", "onAddUrl", "onRemove"]),
                createVNode(_component_UFormField, {
                  label: _ctx.$t("admin.products.form.description") + (unref(currentTabLocale) !== unref(defaultLocale) ? ` (${unref(currentTabLocale)})` : "")
                }, {
                  default: withCtx(() => [
                    unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock(_component_UTextarea, {
                      key: 0,
                      modelValue: unref(form).description,
                      "onUpdate:modelValue": ($event) => unref(form).description = $event,
                      rows: 3,
                      class: "text-gray-900 dark:text-white w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UTextarea, {
                      key: 1,
                      modelValue: unref(translationForms)[unref(currentTabLocale)].description,
                      "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].description = $event,
                      rows: 3,
                      class: "text-gray-900 dark:text-white w-full",
                      placeholder: _ctx.$t("admin.products.form.description_translated", { locale: unref(currentTabLocale) })
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_UFormField, {
                  label: _ctx.$t("admin.products.form.content") + (unref(currentTabLocale) !== unref(defaultLocale) ? ` (${unref(currentTabLocale)})` : "")
                }, {
                  default: withCtx(() => [
                    unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock(_component_RichEditor, {
                      key: 0,
                      modelValue: unref(form).content,
                      "onUpdate:modelValue": ($event) => unref(form).content = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_RichEditor, {
                      key: 1,
                      modelValue: unref(translationForms)[unref(currentTabLocale)].content,
                      "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].content = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                  ]),
                  _: 1
                }, 8, ["label"]),
                unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock("div", {
                  key: 6,
                  class: "mt-4 pb-8"
                }, [
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.products.status")
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-3" }, [
                        createVNode("div", {
                          class: ["p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3", unref(form).status === "active" ? "border-emerald-500 bg-emerald-50/30 dark:bg-emerald-950/20 ring-1 ring-emerald-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"],
                          onClick: ($event) => unref(form).status = "active"
                        }, [
                          createVNode("div", {
                            class: ["w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0", unref(form).status === "active" ? "border-emerald-600 bg-emerald-600 text-white" : "border-gray-400"]
                          }, [
                            unref(form).status === "active" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "w-1.5 h-1.5 rounded-full bg-white"
                            })) : createCommentVNode("", true)
                          ], 2),
                          createVNode("div", { class: "flex flex-col min-w-0" }, [
                            createVNode("span", { class: "text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                              createVNode("span", { class: "w-2 h-2 rounded-full bg-emerald-500 shrink-0" }),
                              createTextVNode(" " + toDisplayString(_ctx.$t("admin.products.status_active")), 1)
                            ]),
                            createVNode("span", { class: "text-[11px] text-gray-500 mt-1 line-clamp-2" }, toDisplayString(_ctx.$t("admin.products.status_active_help")), 1)
                          ])
                        ], 10, ["onClick"]),
                        createVNode("div", {
                          class: ["p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3", unref(form).status === "hidden" ? "border-amber-500 bg-amber-50/30 dark:bg-amber-950/20 ring-1 ring-amber-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"],
                          onClick: ($event) => unref(form).status = "hidden"
                        }, [
                          createVNode("div", {
                            class: ["w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0", unref(form).status === "hidden" ? "border-amber-500 bg-amber-500 text-white" : "border-gray-400"]
                          }, [
                            unref(form).status === "hidden" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "w-1.5 h-1.5 rounded-full bg-white"
                            })) : createCommentVNode("", true)
                          ], 2),
                          createVNode("div", { class: "flex flex-col min-w-0" }, [
                            createVNode("span", { class: "text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                              createVNode("span", { class: "w-2 h-2 rounded-full bg-amber-500 shrink-0" }),
                              createTextVNode(" " + toDisplayString(_ctx.$t("admin.products.status_hidden")), 1)
                            ]),
                            createVNode("span", { class: "text-[11px] text-gray-500 mt-1 line-clamp-2" }, toDisplayString(_ctx.$t("admin.products.status_hidden_help")), 1)
                          ])
                        ], 10, ["onClick"]),
                        createVNode("div", {
                          class: ["p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3", unref(form).status === "inactive" ? "border-neutral-500 bg-neutral-50/50 dark:bg-neutral-900/30 ring-1 ring-neutral-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"],
                          onClick: ($event) => unref(form).status = "inactive"
                        }, [
                          createVNode("div", {
                            class: ["w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0", unref(form).status === "inactive" ? "border-neutral-500 bg-neutral-500 text-white" : "border-gray-400"]
                          }, [
                            unref(form).status === "inactive" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "w-1.5 h-1.5 rounded-full bg-white"
                            })) : createCommentVNode("", true)
                          ], 2),
                          createVNode("div", { class: "flex flex-col min-w-0" }, [
                            createVNode("span", { class: "text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                              createVNode("span", { class: "w-2 h-2 rounded-full bg-gray-400 shrink-0" }),
                              createTextVNode(" " + toDisplayString(_ctx.$t("admin.products.status_inactive")), 1)
                            ]),
                            createVNode("span", { class: "text-[11px] text-gray-500 mt-1 line-clamp-2" }, toDisplayString(_ctx.$t("admin.products.status_inactive_help")), 1)
                          ])
                        ], 10, ["onClick"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ])) : createCommentVNode("", true)
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: isPreviewModalOpen.value,
        "onUpdate:open": ($event) => isPreviewModalOpen.value = $event
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative bg-white dark:bg-black/90 p-2 rounded-lg flex justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x",
              class: "absolute top-4 right-4 z-10 bg-white/80 dark:bg-black/50 hover:bg-gray-100 dark:hover:bg-black/70 rounded-full",
              onClick: ($event) => isPreviewModalOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`<img${ssrRenderAttr("src", unref(buildImageProxyUrl)(previewImageUrl.value))} class="max-w-full max-h-[85vh] object-contain rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "relative bg-white dark:bg-black/90 p-2 rounded-lg flex justify-center items-center" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:x",
                  class: "absolute top-4 right-4 z-10 bg-white/80 dark:bg-black/50 hover:bg-gray-100 dark:hover:bg-black/70 rounded-full",
                  onClick: ($event) => isPreviewModalOpen.value = false
                }, null, 8, ["onClick"]),
                createVNode("img", {
                  src: unref(buildImageProxyUrl)(previewImageUrl.value),
                  class: "max-w-full max-h-[85vh] object-contain rounded"
                }, null, 8, ["src"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/ProductFormModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main$1, { __name: "AdminProductFormModal" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "products",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t, locale } = useI18n();
    const route = useRoute();
    useRouter();
    const toast = useToast();
    const { confirm } = useConfirm();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const { formatCurrencyAmount } = useCurrencyFormat();
    const { getSetting, fetchSettings } = useSettings();
    const { buildImageProxyUrl } = useImageProxy();
    [__temp, __restore] = withAsyncContext(() => fetchSettings()), await __temp, __restore();
    const baseCurrency = computed(() => getSetting("currency", "USD"));
    const activeTab = ref(
      route.query.tab === "cards" ? "cards" : route.query.tab === "subscriptions" ? "subscriptions" : "products"
    );
    watch(() => route.query.tab, (val) => {
      activeTab.value = val === "cards" ? "cards" : val === "subscriptions" ? "subscriptions" : "products";
    });
    const getProductStatusColor = (product) => {
      const status = (product == null ? void 0 : product.status) || ((product == null ? void 0 : product.isActive) === false ? "inactive" : "active");
      if (status === "active") return "success";
      if (status === "hidden") return "warning";
      return "neutral";
    };
    const getProductStatusLabel = (product) => {
      const status = (product == null ? void 0 : product.status) || ((product == null ? void 0 : product.isActive) === false ? "inactive" : "active");
      if (status === "active") return t("admin.products.active");
      if (status === "hidden") return t("admin.products.hidden");
      return t("admin.products.inactive");
    };
    const columns = computed(() => [
      { accessorKey: "drag", header: "" },
      { accessorKey: "id", header: "ID" },
      { accessorKey: "image", header: "Image" },
      { accessorKey: "name", header: t("admin.products.name") },
      { accessorKey: "price", header: t("admin.products.price") },
      { accessorKey: "type", header: t("admin.products.type") },
      { accessorKey: "views", header: t("admin.products.views") },
      { accessorKey: "isActive", header: t("admin.products.status") },
      {
        accessorKey: "actions",
        header: t("admin.products.actions"),
        meta: {
          class: {
            th: "text-right sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]",
            td: "text-right font-medium sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]"
          }
        }
      }
    ]);
    const { page, pageSize: pageCount, onPageChange } = usePagination(15);
    const searchQuery = ref("");
    const selectedType = ref("all");
    const { data: allTypesData } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/products/types",
      "$NeSk3rHJuV"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const availableTypes = computed(() => {
      var _a;
      return ((_a = allTypesData.value) == null ? void 0 : _a.data) || [];
    });
    const typeFilterOptions = computed(() => [
      { label: "\u5168\u90E8\u7C7B\u578B", value: "all" },
      ...availableTypes.value.map((t2) => ({ label: t2.toUpperCase(), value: t2 }))
    ]);
    const {
      data: productsData,
      pending,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/products",
      {
        query: computed(() => ({
          page: page.value,
          pageSize: pageCount.value,
          search: searchQuery.value || void 0,
          type: selectedType.value !== "all" ? selectedType.value : void 0
        })),
        watch: [page, searchQuery, selectedType],
        onResponseError({ response }) {
          if (response.status === 401) {
            useRouter().push("/admin/login");
          }
        }
      },
      "$ufhbm-bcn8"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    watch([searchQuery, selectedType], () => {
      page.value = 1;
    });
    const paginatedProducts = computed(() => {
      var _a;
      return ((_a = productsData.value) == null ? void 0 : _a.data) || [];
    });
    const totalItems = computed(() => {
      var _a;
      return ((_a = productsData.value) == null ? void 0 : _a.total) || 0;
    });
    const total = computed(() => totalItems.value);
    const hasKeyProducts = computed(() => availableTypes.value.includes("key") || paginatedProducts.value.some((p) => p.type === "key"));
    const hasSubscriptionProducts = computed(() => availableTypes.value.includes("subscription") || paginatedProducts.value.some((p) => p.type === "subscription"));
    const keyCount = computed(() => paginatedProducts.value.filter((p) => p.type === "key").length);
    const subCount = computed(() => paginatedProducts.value.filter((p) => p.type === "subscription").length);
    const parseJsonMaybe = (value) => {
      if (typeof value !== "string") return value;
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    };
    const getProductMetaData = (product) => {
      const parsed = parseJsonMaybe(product == null ? void 0 : product.metaData);
      return parsed && typeof parsed === "object" ? parsed : {};
    };
    const isPlanFeatureProduct = (product) => ["subscription", "topup"].includes(String((product == null ? void 0 : product.type) || ""));
    const normalizePlanFeatures = (value) => {
      const parsed = parseJsonMaybe(value);
      if (!Array.isArray(parsed)) return [];
      return parsed.map((feature) => {
        if (typeof feature === "string") {
          return {
            name: feature.trim(),
            included: true
          };
        }
        return {
          name: String((feature == null ? void 0 : feature.name) || "").trim(),
          included: (feature == null ? void 0 : feature.included) !== false
        };
      }).filter((feature) => feature.name);
    };
    const getProductPlanFeatures = (product) => {
      var _a, _b;
      const metaData = getProductMetaData(product);
      const translatedFeatures = normalizePlanFeatures((_b = (_a = metaData == null ? void 0 : metaData.translations) == null ? void 0 : _a[locale.value]) == null ? void 0 : _b.plan_features);
      if (translatedFeatures.length > 0) {
        return translatedFeatures;
      }
      return normalizePlanFeatures(metaData == null ? void 0 : metaData.plan_features);
    };
    const getVisiblePlanFeatures = (product) => getProductPlanFeatures(product).slice(0, 2);
    const getHiddenPlanFeatureCount = (product) => Math.max(getProductPlanFeatures(product).length - 2, 0);
    const getPlanFeaturesTooltip = (product) => getProductPlanFeatures(product).map((feature) => `${feature.included ? "\u2713" : "\u2715"} ${feature.name}`).join("\n");
    const isModalOpen = ref(false);
    const editingProduct = ref(null);
    const sortableTarget = computed(() => null);
    useSortable(sortableTarget, paginatedProducts, {
      animation: 150,
      handle: ".cursor-move",
      onEnd: async () => {
        const total2 = totalItems.value;
        const startIndex = (page.value - 1) * pageCount.value;
        const reorderedItems = paginatedProducts.value.map((item, index) => ({
          id: item.id,
          sortOrder: total2 - (startIndex + index)
        }));
        try {
          await $fetch("/api/admin/products/reorder", {
            method: "PUT",
            body: { items: reorderedItems }
          });
          toast.add({
            title: "Success",
            description: "Products reordered successfully",
            color: "success"
          });
          await refresh();
        } catch (e) {
          toast.add({
            title: "Error",
            description: "Failed to reorder products",
            color: "error"
          });
          await refresh();
        }
      }
    });
    const openModal = (product) => {
      if (product && typeof product === "object") {
        editingProduct.value = JSON.parse(JSON.stringify(product));
      } else {
        editingProduct.value = void 0;
      }
      isModalOpen.value = true;
    };
    const deleteProduct = async (id) => {
      var _a;
      const isConfirmed = await confirm({
        title: t("admin.products.delete"),
        description: t("admin.products.confirmDelete")
      });
      if (!isConfirmed) return;
      try {
        await $fetch(`/api/admin/products/${id}`, {
          method: "DELETE"
        });
        await refresh();
        toast.add({
          title: t("admin.common.success"),
          description: t("admin.products.deleteSuccess"),
          color: "success"
        });
      } catch (e) {
        toast.add({
          title: t("admin.common.error"),
          description: ((_a = e.data) == null ? void 0 : _a.message) || t("admin.products.deleteFailed"),
          color: "error"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_UInput = _sfc_main$k;
      const _component_USelect = _sfc_main$j;
      const _component_UButton = _sfc_main$B;
      const _component_UTable = _sfc_main$h;
      const _component_UBadge = _sfc_main$x;
      const _component_UTooltip = _sfc_main$7;
      const _component_UPagination = _sfc_main$n;
      const _component_AdminProductFormModal = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh-7rem)] flex flex-col" }, _attrs))}><div class="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-4 shrink-0"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(activeTab.value === "cards" ? _ctx.$t("admin.cards.title", "\u5361\u5BC6\u5E93\u5B58") : activeTab.value === "subscriptions" ? _ctx.$t("admin.subscriptions.title", "\u8BA2\u9605\u7BA1\u7406") : _ctx.$t("admin.products.title", "\u4EA7\u54C1\u7BA1\u7406"))}</h1><p class="text-gray-500 dark:text-gray-400 mt-1.5 text-sm">${ssrInterpolate(activeTab.value === "cards" ? _ctx.$t("admin.cards.subtitle", "\u7BA1\u7406\u5361\u5BC6\u578B\u5546\u54C1\u7684\u6279\u91CF\u5BFC\u5165\u4E0E\u4F7F\u7528\u72B6\u6001") : activeTab.value === "subscriptions" ? _ctx.$t("admin.subscriptions.subtitle", "\u67E5\u770B\u4E0E\u7BA1\u7406\u5BA2\u6237\u5468\u671F\u6027\u8BA2\u9605\u8BA1\u5212") : _ctx.$t("admin.products.subtitle", "\u7BA1\u7406\u5546\u57CE\u6240\u6709\u5B9E\u7269\u3001\u6570\u5B57\u3001\u5361\u5BC6\u53CA\u8BA2\u9605\u5546\u54C1"))}</p></div><div class="flex items-center gap-1.5 bg-gray-100 dark:bg-white/5 p-1 rounded-xl shrink-0"><button type="button" class="${ssrRenderClass([activeTab.value === "products" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:package-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("admin.products.tab_all", "\u5168\u90E8\u5546\u54C1"))}</span><span class="opacity-70 text-[10px] font-mono">(${ssrInterpolate(total.value)})</span></button>`);
      if (hasKeyProducts.value) {
        _push(`<button type="button" class="${ssrRenderClass([activeTab.value === "cards" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:barcode-bold",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("admin.cards.title", "\u5361\u5BC6\u5E93\u5B58"))}</span><span class="rounded-full bg-purple-100 dark:bg-purple-900/50 px-1.5 py-0.2 text-[10px] font-bold text-purple-700 dark:text-purple-300">${ssrInterpolate(keyCount.value)}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      if (hasSubscriptionProducts.value) {
        _push(`<button type="button" class="${ssrRenderClass([activeTab.value === "subscriptions" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:calendar-check-bold",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("admin.subscriptions.title", "\u8BA2\u9605\u7BA1\u7406"))}</span><span class="rounded-full bg-purple-100 dark:bg-purple-900/50 px-1.5 py-0.2 text-[10px] font-bold text-purple-700 dark:text-purple-300">${ssrInterpolate(subCount.value)}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (activeTab.value === "cards") {
        _push(ssrRenderComponent(AdminCardsPanel, null, null, _parent));
      } else if (activeTab.value === "subscriptions") {
        _push(ssrRenderComponent(AdminSubscriptionsPanel, null, null, _parent));
      } else {
        _push(`<!--[--><div class="flex flex-wrap items-center justify-between gap-3 mb-3 shrink-0"><div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: searchQuery.value,
          "onUpdate:modelValue": ($event) => searchQuery.value = $event,
          icon: "ph:magnifying-glass",
          placeholder: _ctx.$t("admin.products.searchPlaceholder", "\u641C\u7D22\u5546\u54C1\u540D\u79F0\u3001\u6807\u8BC6\u6216\u63CF\u8FF0..."),
          class: "w-72",
          size: "sm"
        }, null, _parent));
        _push(ssrRenderComponent(_component_USelect, {
          modelValue: selectedType.value,
          "onUpdate:modelValue": ($event) => selectedType.value = $event,
          items: typeFilterOptions.value,
          class: "w-36 text-xs shrink-0",
          size: "sm"
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "outline",
          icon: "ph:arrows-clockwise",
          size: "sm",
          loading: unref(pending),
          class: "hover:bg-gray-50 dark:hover:bg-gray-800",
          onClick: () => unref(refresh)()
        }, null, _parent));
        _push(`</div><div class="flex items-center gap-2">`);
        if (unref(hasAdminPerm)("products:edit")) {
          _push(ssrRenderComponent(_component_UButton, {
            color: "primary",
            class: "bg-purple-600 hover:bg-purple-500 text-white font-medium",
            size: "sm",
            icon: "ph:plus-bold",
            onClick: ($event) => openModal()
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("admin.products.add"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.products.add")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1 min-h-0"><div class="flex-1 overflow-auto">`);
        _push(ssrRenderComponent(_component_UTable, {
          data: paginatedProducts.value,
          columns: columns.value,
          loading: unref(pending),
          ui: { tbody: "my-table-tbody divide-y divide-gray-200 dark:divide-gray-800" },
          sticky: ""
        }, {
          "drag-cell": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-10 flex items-center justify-center cursor-move text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:dots-six-vertical",
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "w-10 flex items-center justify-center cursor-move text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:dots-six-vertical",
                    class: "w-5 h-5"
                  })
                ])
              ];
            }
          }),
          "image-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 flex items-center justify-center"${_scopeId}>`);
              if (row.original.imageUrl) {
                _push2(`<img${ssrRenderAttr("src", unref(buildImageProxyUrl)(String(row.original.imageUrl)))} class="w-full h-full object-cover"${ssrRenderAttr("alt", String(row.original.name))}${_scopeId}>`);
              } else {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:image",
                  class: "w-6 h-6 text-gray-600"
                }, null, _parent2, _scopeId));
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "w-12 h-12 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 flex items-center justify-center" }, [
                  row.original.imageUrl ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: unref(buildImageProxyUrl)(String(row.original.imageUrl)),
                    class: "w-full h-full object-cover",
                    alt: String(row.original.name)
                  }, null, 8, ["src", "alt"])) : (openBlock(), createBlock(_component_UIcon, {
                    key: 1,
                    name: "ph:image",
                    class: "w-6 h-6 text-gray-600"
                  }))
                ])
              ];
            }
          }),
          "price-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(formatCurrencyAmount)(row.original.price, baseCurrency.value))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(formatCurrencyAmount)(row.original.price, baseCurrency.value)), 1)
              ];
            }
          }),
          "type-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col gap-2 min-w-[16rem] py-1"${_scopeId}><div class="flex items-center gap-2 flex-wrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "subtle",
                size: "sm",
                class: "capitalize"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(row.original.type)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(row.original.type), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (getProductMetaData(row.original).is_pricing_plan) {
                _push2(ssrRenderComponent(_component_UTooltip, {
                  text: _ctx.$t("admin.products.pricingPlan")
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:star-fill",
                        class: "w-4 h-4 text-yellow-500"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UIcon, {
                          name: "ph:star-fill",
                          class: "w-4 h-4 text-yellow-500"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (isPlanFeatureProduct(row.original) && getProductPlanFeatures(row.original).length) {
                _push2(`<div class="flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
                ssrRenderList(getVisiblePlanFeatures(row.original), (feature, index) => {
                  _push2(ssrRenderComponent(_component_UBadge, {
                    key: `${row.original.id}-feature-${index}`,
                    color: feature.included ? "primary" : "neutral",
                    variant: "subtle",
                    size: "sm",
                    class: "max-w-full"
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<span class="${ssrRenderClass([feature.included ? "" : "opacity-70", "inline-flex items-center gap-1 max-w-full"])}"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: feature.included ? "ph:check" : "ph:x",
                          class: "w-3.5 h-3.5 shrink-0"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span class="${ssrRenderClass([feature.included ? "" : "line-through", "truncate"])}"${_scopeId2}>${ssrInterpolate(feature.name)}</span></span>`);
                      } else {
                        return [
                          createVNode("span", {
                            class: ["inline-flex items-center gap-1 max-w-full", feature.included ? "" : "opacity-70"]
                          }, [
                            createVNode(_component_UIcon, {
                              name: feature.included ? "ph:check" : "ph:x",
                              class: "w-3.5 h-3.5 shrink-0"
                            }, null, 8, ["name"]),
                            createVNode("span", {
                              class: ["truncate", feature.included ? "" : "line-through"]
                            }, toDisplayString(feature.name), 3)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
                if (getHiddenPlanFeatureCount(row.original) > 0) {
                  _push2(ssrRenderComponent(_component_UTooltip, {
                    text: getPlanFeaturesTooltip(row.original)
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_UBadge, {
                          color: "neutral",
                          variant: "outline",
                          size: "sm"
                        }, {
                          default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` +${ssrInterpolate(getHiddenPlanFeatureCount(row.original))}`);
                            } else {
                              return [
                                createTextVNode(" +" + toDisplayString(getHiddenPlanFeatureCount(row.original)), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_UBadge, {
                            color: "neutral",
                            variant: "outline",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" +" + toDisplayString(getHiddenPlanFeatureCount(row.original)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
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
                createVNode("div", { class: "flex flex-col gap-2 min-w-[16rem] py-1" }, [
                  createVNode("div", { class: "flex items-center gap-2 flex-wrap" }, [
                    createVNode(_component_UBadge, {
                      color: "neutral",
                      variant: "subtle",
                      size: "sm",
                      class: "capitalize"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.original.type), 1)
                      ]),
                      _: 2
                    }, 1024),
                    getProductMetaData(row.original).is_pricing_plan ? (openBlock(), createBlock(_component_UTooltip, {
                      key: 0,
                      text: _ctx.$t("admin.products.pricingPlan")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: "ph:star-fill",
                          class: "w-4 h-4 text-yellow-500"
                        })
                      ]),
                      _: 1
                    }, 8, ["text"])) : createCommentVNode("", true)
                  ]),
                  isPlanFeatureProduct(row.original) && getProductPlanFeatures(row.original).length ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-wrap gap-1.5"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(getVisiblePlanFeatures(row.original), (feature, index) => {
                      return openBlock(), createBlock(_component_UBadge, {
                        key: `${row.original.id}-feature-${index}`,
                        color: feature.included ? "primary" : "neutral",
                        variant: "subtle",
                        size: "sm",
                        class: "max-w-full"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", {
                            class: ["inline-flex items-center gap-1 max-w-full", feature.included ? "" : "opacity-70"]
                          }, [
                            createVNode(_component_UIcon, {
                              name: feature.included ? "ph:check" : "ph:x",
                              class: "w-3.5 h-3.5 shrink-0"
                            }, null, 8, ["name"]),
                            createVNode("span", {
                              class: ["truncate", feature.included ? "" : "line-through"]
                            }, toDisplayString(feature.name), 3)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["color"]);
                    }), 128)),
                    getHiddenPlanFeatureCount(row.original) > 0 ? (openBlock(), createBlock(_component_UTooltip, {
                      key: 0,
                      text: getPlanFeaturesTooltip(row.original)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UBadge, {
                          color: "neutral",
                          variant: "outline",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" +" + toDisplayString(getHiddenPlanFeatureCount(row.original)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["text"])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          "views-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:eye",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(row.original.views || 0)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:eye",
                    class: "w-4 h-4"
                  }),
                  createTextVNode(" " + toDisplayString(row.original.views || 0), 1)
                ])
              ];
            }
          }),
          "isActive-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: getProductStatusColor(row.original),
                variant: "subtle"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(getProductStatusLabel(row.original))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(getProductStatusLabel(row.original)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UBadge, {
                  color: getProductStatusColor(row.original),
                  variant: "subtle"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(getProductStatusLabel(row.original)), 1)
                  ]),
                  _: 2
                }, 1032, ["color"])
              ];
            }
          }),
          "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                variant: "ghost",
                icon: "ph:link",
                title: _ctx.$t("admin.products.viewPage"),
                to: `/products/${row.original.slug || row.original.id}`,
                target: "_blank"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:pencil-simple",
                onClick: ($event) => openModal(row.original),
                disabled: !unref(hasAdminPerm)("products:edit")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                icon: "ph:trash",
                onClick: ($event) => deleteProduct(Number(row.original.id)),
                disabled: !unref(hasAdminPerm)("products:edit")
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_UButton, {
                    color: "primary",
                    variant: "ghost",
                    icon: "ph:link",
                    title: _ctx.$t("admin.products.viewPage"),
                    to: `/products/${row.original.slug || row.original.id}`,
                    target: "_blank"
                  }, null, 8, ["title", "to"]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:pencil-simple",
                    onClick: ($event) => openModal(row.original),
                    disabled: !unref(hasAdminPerm)("products:edit")
                  }, null, 8, ["onClick", "disabled"]),
                  createVNode(_component_UButton, {
                    color: "error",
                    variant: "ghost",
                    icon: "ph:trash",
                    onClick: ($event) => deleteProduct(Number(row.original.id)),
                    disabled: !unref(hasAdminPerm)("products:edit")
                  }, null, 8, ["onClick", "disabled"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="px-4 py-2 border-t border-gray-200 dark:border-gray-800/50 flex justify-between items-center shrink-0 bg-white dark:bg-[#121214]"><div class="text-sm text-gray-500 dark:text-gray-400"><span class="text-gray-900 dark:text-white">${ssrInterpolate(totalItems.value)}</span> ${ssrInterpolate(_ctx.$t("admin.common.results"))}</div>`);
        _push(ssrRenderComponent(_component_UPagination, {
          modelValue: unref(page),
          "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
          total: totalItems.value,
          "items-per-page": unref(pageCount),
          "onUpdate:page": (val) => unref(onPageChange)(val, () => unref(refresh)())
        }, null, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(_component_AdminProductFormModal, {
          modelValue: isModalOpen.value,
          "onUpdate:modelValue": ($event) => isModalOpen.value = $event,
          product: editingProduct.value,
          onSaved: unref(refresh)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
