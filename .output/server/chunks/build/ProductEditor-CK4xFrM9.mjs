import { u as useI18n, e as useToast, q as useConfirm, f as useAdminPermissions, i as _sfc_main$D, k as _sfc_main$z, _ as _sfc_main$I, a as _sfc_main$l, b as _sfc_main$k, l as _sfc_main$j, c as _sfc_main$g, n as _sfc_main$t, r as useSettings } from './server.mjs';
import { _ as _sfc_main$6 } from './Checkbox-SZfkaLj6.mjs';
import { defineComponent, defineAsyncComponent, computed, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, createCommentVNode, reactive, isRef, Fragment, withModifiers, withKeys, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderSlot } from 'vue/server-renderer';
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
import draggable from 'vuedraggable';
import { u as useImageProxy } from './useImageProxy-DBzzMBty.mjs';
import { p as presetFieldsForType, s as stripUiIds, c as cleanServiceSchemaFields, a as cleanProductFeatures, b as parseProductFeatures, d as parseServiceSchemaFields } from './adminProductFormData-BiTP6ur1.mjs';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
      const _component_UIcon = _sfc_main$I;
      const _component_USelect = _sfc_main$j;
      const _component_UInput = _sfc_main$k;
      const _component_UButton = _sfc_main$D;
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/products/ProductGatewayPlanIdsSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ProductGatewayPlanIdsSection = Object.assign(_sfc_main$5, { __name: "AdminProductsProductGatewayPlanIdsSection" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
      const _component_UButton = _sfc_main$D;
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/products/ProductImagesField.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ProductImagesField = Object.assign(_sfc_main$4, { __name: "AdminProductsProductImagesField" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
      const _component_UIcon = _sfc_main$I;
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/products/ProductLocaleTabs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProductLocaleTabs = Object.assign(_sfc_main$3, { __name: "AdminProductsProductLocaleTabs" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
      const _component_UIcon = _sfc_main$I;
      const _component_UButton = _sfc_main$D;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_UCheckbox = _sfc_main$6;
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/products/ProductPricingFeaturesSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProductPricingFeaturesSection = Object.assign(_sfc_main$2, { __name: "AdminProductsProductPricingFeaturesSection" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      const _component_UIcon = _sfc_main$I;
      const _component_UButton = _sfc_main$D;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_USelect = _sfc_main$j;
      const _component_UCheckbox = _sfc_main$6;
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/products/ProductServiceSchemaSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProductServiceSchemaSection = Object.assign(_sfc_main$1, { __name: "AdminProductsProductServiceSchemaSection" });
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
  const addVolumeDiscountTier = () => {
    if (!form.metaData) form.metaData = {};
    if (!Array.isArray(form.metaData.volume_discounts)) {
      form.metaData.volume_discounts = [];
    }
    form.metaData.volume_discounts.push({
      minQuantity: 5,
      discountRate: 0.9
    });
  };
  const removeVolumeDiscountTier = (index) => {
    var _a;
    if (Array.isArray((_a = form.metaData) == null ? void 0 : _a.volume_discounts)) {
      form.metaData.volume_discounts.splice(index, 1);
    }
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
      if (typeof form.metaData.volume_discounts === "string") {
        try {
          form.metaData.volume_discounts = JSON.parse(form.metaData.volume_discounts);
        } catch (e) {
          form.metaData.volume_discounts = [];
        }
      }
      if (!Array.isArray(form.metaData.volume_discounts)) {
        form.metaData.volume_discounts = [];
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
  const saveProduct = async (statusOverride) => {
    if (statusOverride) {
      form.status = statusOverride;
      form.isActive = statusOverride !== "inactive";
    }
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
    if (form.metaData) {
      if (form.metaData.original_price !== void 0 && form.metaData.original_price !== null && form.metaData.original_price !== "") {
        const origPrice = Number(form.metaData.original_price);
        if (Number.isFinite(origPrice) && origPrice > 0) {
          form.metaData.original_price = origPrice;
        } else {
          delete form.metaData.original_price;
        }
      } else {
        delete form.metaData.original_price;
      }
      if (form.metaData.promo_discount_rate !== void 0 && form.metaData.promo_discount_rate !== null && form.metaData.promo_discount_rate !== "") {
        const pRate = Number(form.metaData.promo_discount_rate);
        if (Number.isFinite(pRate) && pRate > 0 && pRate < 1) {
          form.metaData.promo_discount_rate = pRate;
        } else {
          delete form.metaData.promo_discount_rate;
        }
      } else {
        delete form.metaData.promo_discount_rate;
      }
      if (Array.isArray(form.metaData.volume_discounts)) {
        const cleanTiers = form.metaData.volume_discounts.map((tier) => ({
          minQuantity: Math.floor(Number(tier.minQuantity || tier.min_quantity)),
          discountRate: Number(tier.discountRate || tier.discount_rate)
        })).filter((tier) => tier.minQuantity > 1 && tier.discountRate > 0 && tier.discountRate < 1).sort((a, b) => a.minQuantity - b.minQuantity);
        if (cleanTiers.length > 0) {
          form.metaData.volume_discounts = cleanTiers;
        } else {
          delete form.metaData.volume_discounts;
        }
      }
    }
    isSaving.value = true;
    try {
      if (form.imageUrls && form.imageUrls.length > 0) {
        form.imageUrl = form.imageUrls[0];
      } else {
        form.imageUrl = "";
      }
      let savedData = null;
      if (form.id) {
        const res = await $fetch(`/api/admin/products/${form.id}`, { method: "PUT", body: form });
        savedData = Array.isArray(res) ? res[0] : (res == null ? void 0 : res.data) || res;
        toast.add({ title: "Success", description: "Product updated successfully", color: "success" });
      } else {
        const res = await $fetch("/api/admin/products", { method: "POST", body: form });
        savedData = Array.isArray(res) ? res[0] : (res == null ? void 0 : res.data) || res;
        toast.add({ title: "Success", description: "Product created successfully", color: "success" });
      }
      if (typeof emit === "function") ;
      return savedData || true;
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
    featuresList,
    translationFeaturesLists,
    syncFeaturesJsonToList,
    syncServiceSchemaJsonToList,
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
    presetFields,
    addVolumeDiscountTier,
    removeVolumeDiscountTier
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductEditor",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const RichEditor = defineAsyncComponent(() => import('./RichEditor-DxCIRT0I.mjs'));
    const props = __props;
    const { t } = useI18n();
    const toast = useToast();
    useRoute();
    const router = useRouter();
    const { confirm } = useConfirm();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const { buildImageProxyUrl } = useImageProxy();
    const productId = computed(() => props.id ? Number(props.id) : null);
    const isEditMode = computed(() => Boolean(productId.value && !isNaN(productId.value)));
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
      featuresList,
      translationFeaturesLists,
      supportedLocales,
      defaultLocale,
      currentTabLocale,
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
      presetFields,
      addVolumeDiscountTier,
      removeVolumeDiscountTier
    } = useAdminProductForm();
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
    const statusBadgeColor = computed(() => {
      if (form.status === "active") return "success";
      if (form.status === "hidden") return "warning";
      return "neutral";
    });
    const statusBadgeLabel = computed(() => {
      if (form.status === "active") return t("admin.products.status_active");
      if (form.status === "hidden") return t("admin.products.status_hidden");
      return t("admin.products.status_inactive");
    });
    const isLoading = ref(false);
    const isDirty = ref(false);
    const autoSaveStatus = ref("idle");
    const lastSavedTime = ref("");
    const hasLocalDraftAvailable = ref(false);
    const localDraftTime = ref("");
    const savedLocalDraftPayload = ref(null);
    const clearDraftFromLocalStorage = () => {
      return;
    };
    const restoreLocalDraft = () => {
      if (!savedLocalDraftPayload.value) return;
      const draft = savedLocalDraftPayload.value;
      if (draft.form) {
        Object.assign(form, draft.form);
      }
      if (draft.translations) {
        Object.keys(draft.translations).forEach((loc) => {
          translationForms[loc] = { ...draft.translations[loc] };
        });
      }
      if (draft.featuresList) {
        featuresList.value = draft.featuresList;
      }
      if (draft.translationFeaturesLists) {
        Object.keys(draft.translationFeaturesLists).forEach((loc) => {
          translationFeaturesLists[loc] = draft.translationFeaturesLists[loc];
        });
      }
      if (draft.serviceFormSchemaStr) {
        serviceFormSchemaStr.value = draft.serviceFormSchemaStr;
      }
      if (draft.serviceFormSchemaList) {
        serviceFormSchemaList.value = draft.serviceFormSchemaList;
      }
      if (draft.planIdsList) {
        planIdsList.value = draft.planIdsList;
      }
      hasLocalDraftAvailable.value = false;
      isDirty.value = true;
      autoSaveStatus.value = "local_saved";
      lastSavedTime.value = new Date(draft.updatedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      toast.add({
        title: t("admin.common.success"),
        description: t("admin.products.editor.draftRestored", "\u5DF2\u6210\u529F\u6062\u590D\u8349\u7A3F"),
        color: "success"
      });
    };
    const discardLocalDraft = () => {
      savedLocalDraftPayload.value = null;
      hasLocalDraftAvailable.value = false;
    };
    let autoSaveTimer = null;
    const onFormChange = () => {
      if (isLoading.value) return;
      isDirty.value = true;
      autoSaveStatus.value = "dirty";
      if (autoSaveTimer) clearTimeout(autoSaveTimer);
      autoSaveTimer = setTimeout(() => {
        executeAutoSave();
      }, 2500);
    };
    const executeAutoSave = async () => {
      if (isSaving.value || isLoading.value || !isDirty.value) return;
      autoSaveStatus.value = "local_saved";
      lastSavedTime.value = (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };
    watch(
      [
        () => form.name,
        () => form.slug,
        () => form.price,
        () => form.type,
        () => form.description,
        () => form.content,
        () => form.status,
        () => form.metaData,
        () => form.imageUrls,
        () => translationForms,
        () => featuresList.value,
        () => serviceFormSchemaList.value,
        () => planIdsList.value
      ],
      () => {
        if (!isLoading.value) {
          onFormChange();
        }
      },
      { deep: true }
    );
    const handleSave = async (statusOverride) => {
      if (autoSaveTimer) clearTimeout(autoSaveTimer);
      try {
        const res = await saveProduct(statusOverride);
        if (res) {
          isDirty.value = false;
          clearDraftFromLocalStorage();
          autoSaveStatus.value = "saved";
          lastSavedTime.value = (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
          if (!isEditMode.value) {
            const newId = res.id || typeof res === "object" && res.id;
            if (newId) {
              await router.replace(`/admin/products/${newId}`);
            }
          }
        }
      } catch (e) {
        autoSaveStatus.value = "error";
      }
    };
    onBeforeRouteLeave(async () => {
      if (isDirty.value && !isSaving.value) {
        const confirmed = await confirm({
          title: t("admin.products.editor.confirmLeaveTitle", "\u672A\u4FDD\u5B58\u7684\u6539\u52A8"),
          description: t("admin.products.editor.confirmLeave", "\u5F53\u524D\u6709\u672A\u4FDD\u5B58\u7684\u6539\u52A8\uFF0C\u786E\u5B9A\u8981\u79BB\u5F00\u5417\uFF1F"),
          confirmText: t("admin.products.editor.leaveConfirm", "\u786E\u5B9A\u79BB\u5F00"),
          cancelText: t("admin.products.editor.leaveCancel", "\u7EE7\u7EED\u7F16\u8F91"),
          confirmColor: "error"
        });
        return confirmed;
      }
      return true;
    });
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
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UButton = _sfc_main$D;
      const _component_UBadge = _sfc_main$z;
      const _component_UIcon = _sfc_main$I;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_USelect = _sfc_main$j;
      const _component_UTextarea = _sfc_main$g;
      const _component_UCheckbox = _sfc_main$6;
      const _component_UModal = _sfc_main$t;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-full flex flex-col pb-12" }, _attrs))}><div class="sticky top-0 z-20 bg-white/90 dark:bg-[#121214]/90 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-800/80 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 mb-6 transition-all"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 max-w-7xl mx-auto"><div class="flex items-center gap-3 min-w-0">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "ghost",
        icon: "ph:arrow-left-bold",
        size: "sm",
        class: "rounded-xl shrink-0",
        to: "/admin/products",
        title: _ctx.$t("admin.common.back")
      }, null, _parent));
      _push(`<div class="truncate"><div class="flex items-center gap-2"><h1 class="text-lg font-bold text-gray-900 dark:text-white truncate">${ssrInterpolate(isEditMode.value ? unref(form).name || _ctx.$t("admin.products.edit") : _ctx.$t("admin.products.add"))}</h1>`);
      _push(ssrRenderComponent(_component_UBadge, {
        color: statusBadgeColor.value,
        variant: "subtle",
        size: "xs",
        class: "font-medium shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(statusBadgeLabel.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(statusBadgeLabel.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (isEditMode.value) {
        _push(ssrRenderComponent(_component_UBadge, {
          color: "primary",
          variant: "subtle",
          size: "xs",
          class: "font-mono text-[10px] shrink-0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` #${ssrInterpolate(productId.value)}`);
            } else {
              return [
                createTextVNode(" #" + toDisplayString(productId.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">${ssrInterpolate(isEditMode.value ? _ctx.$t("admin.products.subtitle") : _ctx.$t("admin.products.subtitle"))}</p></div></div><div class="flex items-center gap-2.5 shrink-0 self-end sm:self-center">`);
      if (autoSaveStatus.value !== "idle") {
        _push(`<div class="${ssrRenderClass([{
          "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border border-purple-200/50 dark:border-purple-800/50": autoSaveStatus.value === "saving",
          "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-800/50": autoSaveStatus.value === "saved",
          "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/50 dark:border-amber-800/50": autoSaveStatus.value === "local_saved" || autoSaveStatus.value === "dirty",
          "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200/50 dark:border-rose-800/50": autoSaveStatus.value === "error"
        }, "hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200"])}">`);
        if (autoSaveStatus.value === "saving") {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:spinner-gap-bold",
            class: "w-3.5 h-3.5 animate-spin shrink-0 text-purple-600 dark:text-purple-400"
          }, null, _parent));
        } else if (autoSaveStatus.value === "saved") {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:check-circle-fill",
            class: "w-3.5 h-3.5 text-emerald-500 shrink-0"
          }, null, _parent));
        } else if (autoSaveStatus.value === "local_saved") {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:cloud-check",
            class: "w-3.5 h-3.5 text-amber-500 shrink-0"
          }, null, _parent));
        } else if (autoSaveStatus.value === "dirty") {
          _push(`<span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0"></span>`);
        } else if (autoSaveStatus.value === "error") {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:warning-circle",
            class: "w-3.5 h-3.5 text-rose-500 shrink-0"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="truncate max-w-[190px]">`);
        if (autoSaveStatus.value === "saving") {
          _push(`<!--[-->${ssrInterpolate(_ctx.$t("admin.products.editor.savingDraft", "\u6B63\u5728\u6682\u5B58\u8349\u7A3F..."))}<!--]-->`);
        } else if (autoSaveStatus.value === "saved") {
          _push(`<!--[-->${ssrInterpolate(_ctx.$t("admin.products.editor.draftSaved", { time: lastSavedTime.value }))}<!--]-->`);
        } else if (autoSaveStatus.value === "local_saved") {
          _push(`<!--[-->${ssrInterpolate(unref(form).status === "active" ? _ctx.$t("admin.products.editor.savedLocal", "\u66F4\u6539\u5DF2\u6682\u5B58\u672C\u5730\uFF08\u672A\u4FDD\u5B58\uFF09") : _ctx.$t("admin.products.editor.draftSaved", { time: lastSavedTime.value }))}<!--]-->`);
        } else if (autoSaveStatus.value === "dirty") {
          _push(`<!--[-->${ssrInterpolate(_ctx.$t("admin.products.editor.unsavedChanges", "\u6709\u672A\u4FDD\u5B58\u7684\u66F4\u6539"))}<!--]-->`);
        } else if (autoSaveStatus.value === "error") {
          _push(`<!--[-->${ssrInterpolate(_ctx.$t("admin.products.editor.savedLocal", "\u66F4\u6539\u5DF2\u6682\u5B58\u672C\u5730"))}<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).slug || unref(form).id) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "outline",
          icon: "ph:arrow-square-out",
          size: "sm",
          class: "rounded-xl",
          to: `/products/${unref(form).slug || unref(form).id}`,
          target: "_blank",
          title: _ctx.$t("admin.products.viewPage")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("admin.products.viewPage"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("admin.products.viewPage")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "ghost",
        size: "sm",
        class: "rounded-xl",
        to: "/admin/products"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("admin.common.cancel"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).status !== "inactive") {
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "outline",
          size: "sm",
          icon: "ph:archive-box",
          class: "rounded-xl hidden sm:inline-flex",
          loading: unref(isSaving),
          disabled: !unref(hasAdminPerm)("products:edit") || isLoading.value,
          onClick: ($event) => handleSave("inactive")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("admin.products.editor.saveAsDraft", "\u5B58\u4E3A\u8349\u7A3F"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("admin.products.editor.saveAsDraft", "\u5B58\u4E3A\u8349\u7A3F")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        variant: "solid",
        size: "sm",
        icon: "ph:check-bold",
        class: "rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-xs font-medium",
        loading: unref(isSaving),
        disabled: !unref(hasAdminPerm)("products:edit") || isLoading.value,
        title: `${_ctx.$t("admin.common.save")} (\u2318/Ctrl+S)`,
        onClick: ($event) => handleSave()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(form).status === "active" ? _ctx.$t("admin.products.editor.saveAndPublish", "\u4FDD\u5B58\u5E76\u4E0A\u67B6") : _ctx.$t("admin.common.save"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(form).status === "active" ? _ctx.$t("admin.products.editor.saveAndPublish", "\u4FDD\u5B58\u5E76\u4E0A\u67B6") : _ctx.$t("admin.common.save")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      if (isLoading.value) {
        _push(`<div class="max-w-7xl mx-auto w-full space-y-6"><div class="h-10 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse w-1/3"></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-6"><div class="lg:col-span-8 space-y-6"><div class="h-44 bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse"></div><div class="h-72 bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse"></div><div class="h-96 bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse"></div></div><div class="lg:col-span-4 space-y-6"><div class="h-48 bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse"></div><div class="h-48 bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse"></div><div class="h-64 bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse"></div></div></div></div>`);
      } else {
        _push(`<div class="max-w-7xl mx-auto w-full">`);
        if (hasLocalDraftAvailable.value) {
          _push(`<div class="mb-6 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border border-amber-300 dark:border-amber-700/60 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:clock-counter-clockwise-bold",
            class: "w-5 h-5"
          }, null, _parent));
          _push(`</div><div><p class="text-sm font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.products.editor.draftFound", { time: localDraftTime.value }))}</p><p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">${ssrInterpolate(_ctx.$t("admin.products.editor.draftFoundHint", "\u60A8\u53EF\u4EE5\u6062\u590D\u4E0A\u6B21\u672A\u63D0\u4EA4\u7684\u5185\u5BB9\uFF0C\u6216\u653E\u5F03\u5E76\u4F7F\u7528\u539F\u7248\u3002"))}</p></div></div><div class="flex items-center gap-2 shrink-0 self-end sm:self-center">`);
          _push(ssrRenderComponent(_component_UButton, {
            size: "sm",
            color: "primary",
            variant: "solid",
            class: "rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium shadow-xs",
            onClick: restoreLocalDraft
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("admin.products.editor.restoreDraft", "\u6062\u590D\u8349\u7A3F"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.products.editor.restoreDraft", "\u6062\u590D\u8349\u7A3F")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_UButton, {
            size: "sm",
            color: "neutral",
            variant: "ghost",
            class: "rounded-xl text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5",
            onClick: discardLocalDraft
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("admin.products.editor.discardDraft", "\u653E\u5F03"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.products.editor.discardDraft", "\u653E\u5F03")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(ProductLocaleTabs, {
          locales: unref(supportedLocales),
          "default-locale": unref(defaultLocale),
          "current-locale": unref(currentTabLocale),
          "has-default-name": Boolean(unref(form).name),
          onSelect: handleLocaleSelect
        }, null, _parent));
        _push(`<form id="product-editor-form"><div class="grid grid-cols-1 lg:grid-cols-12 gap-6"><div class="lg:col-span-8 space-y-6"><div class="bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4"><div class="flex items-center gap-2 pb-3 border-b border-gray-100 dark:border-gray-800/60">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:info-bold",
          class: "w-4 h-4 text-purple-500"
        }, null, _parent));
        _push(`<h2 class="text-sm font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.products.editor.basicInfo", "\u57FA\u672C\u4FE1\u606F"))}</h2></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4">`);
        _push(ssrRenderComponent(_component_UFormField, {
          label: _ctx.$t("admin.products.name") + (unref(currentTabLocale) !== unref(defaultLocale) ? ` (${unref(currentTabLocale)})` : ""),
          required: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(currentTabLocale) === unref(defaultLocale)) {
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                  required: "",
                  class: "text-gray-900 dark:text-white w-full",
                  placeholder: _ctx.$t("admin.products.name")
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: unref(translationForms)[unref(currentTabLocale)].name,
                  "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].name = $event,
                  class: "text-gray-900 dark:text-white w-full",
                  placeholder: _ctx.$t("admin.products.form.name_translated", { locale: unref(currentTabLocale) })
                }, null, _parent2, _scopeId));
              }
            } else {
              return [
                unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock(_component_UInput, {
                  key: 0,
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                  required: "",
                  class: "text-gray-900 dark:text-white w-full",
                  placeholder: _ctx.$t("admin.products.name")
                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : (openBlock(), createBlock(_component_UInput, {
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
        }, _parent));
        if (unref(currentTabLocale) === unref(defaultLocale)) {
          _push(ssrRenderComponent(_component_UFormField, {
            label: _ctx.$t("admin.products.form.slug")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: unref(form).slug,
                  "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                  class: "text-gray-900 dark:text-white w-full font-mono text-sm",
                  placeholder: _ctx.$t("admin.products.form.slug_placeholder")
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UInput, {
                    modelValue: unref(form).slug,
                    "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                    class: "text-gray-900 dark:text-white w-full font-mono text-sm",
                    placeholder: _ctx.$t("admin.products.form.slug_placeholder")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(currentTabLocale) === unref(defaultLocale)) {
          _push(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">`);
          _push(ssrRenderComponent(_component_UFormField, {
            label: _ctx.$t("admin.products.type"),
            required: ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_USelect, {
                  modelValue: unref(form).type,
                  "onUpdate:modelValue": ($event) => unref(form).type = $event,
                  items: typeOptions.value,
                  "option-attribute": "label",
                  "value-attribute": "value",
                  class: "w-full"
                }, null, _parent2, _scopeId));
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
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_UFormField, {
          label: _ctx.$t("admin.products.form.description") + (unref(currentTabLocale) !== unref(defaultLocale) ? ` (${unref(currentTabLocale)})` : "")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(currentTabLocale) === unref(defaultLocale)) {
                _push2(ssrRenderComponent(_component_UTextarea, {
                  modelValue: unref(form).description,
                  "onUpdate:modelValue": ($event) => unref(form).description = $event,
                  rows: 3,
                  class: "text-gray-900 dark:text-white w-full",
                  placeholder: _ctx.$t("admin.products.form.description")
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_UTextarea, {
                  modelValue: unref(translationForms)[unref(currentTabLocale)].description,
                  "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].description = $event,
                  rows: 3,
                  class: "text-gray-900 dark:text-white w-full",
                  placeholder: _ctx.$t("admin.products.form.description_translated", { locale: unref(currentTabLocale) })
                }, null, _parent2, _scopeId));
              }
            } else {
              return [
                unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock(_component_UTextarea, {
                  key: 0,
                  modelValue: unref(form).description,
                  "onUpdate:modelValue": ($event) => unref(form).description = $event,
                  rows: 3,
                  class: "text-gray-900 dark:text-white w-full",
                  placeholder: _ctx.$t("admin.products.form.description")
                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : (openBlock(), createBlock(_component_UTextarea, {
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
        }, _parent));
        _push(`</div>`);
        if ((unref(form).type === "subscription" || unref(form).type === "topup") && unref(currentTabLocale) === unref(defaultLocale)) {
          _push(`<div class="bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4"><div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800/60"><div class="flex items-center gap-2">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:calendar-check-bold",
            class: "w-4 h-4 text-purple-500"
          }, null, _parent));
          _push(`<h2 class="text-sm font-semibold text-gray-900 dark:text-white">${ssrInterpolate(unref(form).type === "subscription" ? _ctx.$t("admin.products.form.subscription_settings") : _ctx.$t("admin.products.form.topup_display_settings"))}</h2></div>`);
          _push(ssrRenderComponent(_component_UCheckbox, {
            modelValue: unref(form).metaData.is_pricing_plan,
            "onUpdate:modelValue": ($event) => unref(form).metaData.is_pricing_plan = $event,
            label: _ctx.$t("admin.products.form.show_as_pricing"),
            class: "shrink-0"
          }, null, _parent));
          _push(`</div>`);
          if (unref(form).type === "subscription") {
            _push(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">`);
            _push(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.products.form.interval_unit")
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_USelect, {
                    modelValue: unref(form).metaData.interval,
                    "onUpdate:modelValue": ($event) => unref(form).metaData.interval = $event,
                    items: intervalOptions.value,
                    "option-attribute": "label",
                    "value-attribute": "value",
                    class: "w-full"
                  }, null, _parent2, _scopeId));
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
            }, _parent));
            if (unref(form).metaData.interval !== "lifetime") {
              _push(ssrRenderComponent(_component_UFormField, {
                label: _ctx.$t("admin.products.form.interval_count")
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(_component_UInput, {
                      modelValue: unref(form).metaData.interval_count,
                      "onUpdate:modelValue": ($event) => unref(form).metaData.interval_count = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "1",
                      class: "text-gray-900 dark:text-white w-full",
                      placeholder: _ctx.$t("admin.products.form.interval_placeholder")
                    }, null, _parent2, _scopeId));
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
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(form).type === "topup") {
            _push(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">`);
            _push(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.products.form.recharge_amount")
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).metaData.recharge_amount,
                    "onUpdate:modelValue": ($event) => unref(form).metaData.recharge_amount = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    step: "0.01",
                    class: "text-gray-900 dark:text-white w-full",
                    placeholder: _ctx.$t("admin.products.form.recharge_placeholder")
                  }, null, _parent2, _scopeId));
                  _push2(`<p class="text-xs text-gray-500 mt-1"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.products.form.recharge_help"))}</p>`);
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
            }, _parent));
            _push(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.products.form.balance_type")
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_USelect, {
                    modelValue: unref(form).metaData.balance_type,
                    "onUpdate:modelValue": ($event) => unref(form).metaData.balance_type = $event,
                    items: balanceTypeOptions.value,
                    "option-attribute": "label",
                    "value-attribute": "value",
                    class: "w-full"
                  }, null, _parent2, _scopeId));
                  _push2(`<p class="text-xs text-gray-500 mt-1"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.products.form.balance_help"))}</p>`);
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
            }, _parent));
            _push(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.products.form.success_message")
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).metaData.delivery_message,
                    "onUpdate:modelValue": ($event) => unref(form).metaData.delivery_message = $event,
                    class: "text-gray-900 dark:text-white w-full",
                    placeholder: _ctx.$t("admin.products.form.success_placeholder")
                  }, null, _parent2, _scopeId));
                  _push2(`<p class="text-xs text-gray-500 mt-1"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.products.form.success_help"))}</p>`);
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
            }, _parent));
            _push(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.products.form.display_unit")
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).metaData.display_unit,
                    "onUpdate:modelValue": ($event) => unref(form).metaData.display_unit = $event,
                    class: "text-gray-900 dark:text-white w-full",
                    placeholder: _ctx.$t("admin.products.form.display_placeholder")
                  }, null, _parent2, _scopeId));
                  _push2(`<p class="text-xs text-gray-500 mt-1"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.products.form.display_help"))}</p>`);
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
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(ProductGatewayPlanIdsSection, {
            visible: unref(form).type === "subscription" && unref(currentTabLocale) === unref(defaultLocale),
            items: unref(planIdsList),
            "available-gateways": unref(availableGateways),
            onAdd: unref(addPlanId),
            onRemove: unref(removePlanId)
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(form).type === "subscription" || unref(form).type === "topup") {
          _push(`<div class="bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">`);
          _push(ssrRenderComponent(ProductPricingFeaturesSection, {
            visible: true,
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
            "badge-field": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(form).metaData.is_pricing_plan) {
                  _push2(ssrRenderComponent(_component_UFormField, {
                    label: _ctx.$t("admin.products.form.plan_badge", { locale: unref(currentTabLocale) })
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        if (unref(currentTabLocale) === unref(defaultLocale)) {
                          _push3(ssrRenderComponent(_component_UInput, {
                            modelValue: unref(form).metaData.plan_badge,
                            "onUpdate:modelValue": ($event) => unref(form).metaData.plan_badge = $event,
                            class: "text-gray-900 dark:text-white w-full",
                            placeholder: _ctx.$t("admin.products.form.plan_badge_placeholder")
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(ssrRenderComponent(_component_UInput, {
                            modelValue: unref(translationForms)[unref(currentTabLocale)].plan_badge,
                            "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].plan_badge = $event,
                            class: "text-gray-900 dark:text-white w-full",
                            placeholder: _ctx.$t("admin.products.form.badge_translated", { locale: unref(currentTabLocale) })
                          }, null, _parent3, _scopeId2));
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
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
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
            "color-field": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(currentTabLocale) === unref(defaultLocale) && unref(form).metaData.is_pricing_plan) {
                  _push2(ssrRenderComponent(_component_UFormField, {
                    label: _ctx.$t("admin.products.form.highlight_color")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_USelect, {
                          modelValue: unref(form).metaData.plan_color,
                          "onUpdate:modelValue": ($event) => unref(form).metaData.plan_color = $event,
                          class: "min-w-[200px]",
                          items: highlightColorOptions.value,
                          "option-attribute": "label",
                          "value-attribute": "value"
                        }, null, _parent3, _scopeId2));
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
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
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
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(form).type === "service") {
          _push(`<div class="bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4"><div class="flex items-center gap-2 pb-3 border-b border-gray-100 dark:border-gray-800/60">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:textbox-bold",
            class: "w-4 h-4 text-purple-500"
          }, null, _parent));
          _push(`<h2 class="text-sm font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.products.form.service_settings"))}</h2></div>`);
          _push(ssrRenderComponent(ProductServiceSchemaSection, {
            visible: true,
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
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(form).type === "file") {
          _push(`<div class="bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4"><div class="flex items-center gap-2 pb-3 border-b border-gray-100 dark:border-gray-800/60">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:file-arrow-down-bold",
            class: "w-4 h-4 text-purple-500"
          }, null, _parent));
          _push(`<h2 class="text-sm font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.products.form.file_settings"))}</h2></div><div class="grid grid-cols-1 gap-4">`);
          if (unref(currentTabLocale) === unref(defaultLocale)) {
            _push(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.products.form.download_url")
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).metaData.download_url,
                    "onUpdate:modelValue": ($event) => unref(form).metaData.download_url = $event,
                    class: "text-gray-900 dark:text-white w-full",
                    placeholder: "https://..."
                  }, null, _parent2, _scopeId));
                  _push2(`<p class="text-xs text-gray-500 mt-1"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.products.form.download_url_help"))}</p>`);
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
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_UFormField, {
            label: _ctx.$t("admin.products.form.download_instructions") + (unref(currentTabLocale) !== unref(defaultLocale) ? ` (${unref(currentTabLocale)})` : "")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(currentTabLocale) === unref(defaultLocale)) {
                  _push2(ssrRenderComponent(_component_UTextarea, {
                    modelValue: unref(form).metaData.download_instruction,
                    "onUpdate:modelValue": ($event) => unref(form).metaData.download_instruction = $event,
                    rows: 2,
                    class: "text-gray-900 dark:text-white w-full",
                    placeholder: _ctx.$t("admin.products.form.download_placeholder")
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_UTextarea, {
                    modelValue: unref(translationForms)[unref(currentTabLocale)].download_instruction,
                    "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].download_instruction = $event,
                    rows: 2,
                    class: "text-gray-900 dark:text-white w-full",
                    placeholder: _ctx.$t("admin.products.form.download_translated", { locale: unref(currentTabLocale) })
                  }, null, _parent2, _scopeId));
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
          }, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(currentTabLocale) === unref(defaultLocale) && unref(presetFields).length) {
          _push(`<div class="bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4"><div class="flex items-center gap-2 pb-3 border-b border-gray-100 dark:border-gray-800/60">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:sliders-bold",
            class: "w-4 h-4 text-purple-500"
          }, null, _parent));
          _push(`<h2 class="text-sm font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.presets.form_section"))}</h2></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!--[-->`);
          ssrRenderList(unref(presetFields), (field) => {
            _push(ssrRenderComponent(_component_UFormField, {
              key: field.name,
              label: field.label || field.name,
              required: field.required
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (field.type === "boolean") {
                    _push2(ssrRenderComponent(_component_UCheckbox, {
                      modelValue: unref(form).metaData[field.name],
                      "onUpdate:modelValue": ($event) => unref(form).metaData[field.name] = $event
                    }, null, _parent2, _scopeId));
                  } else if (field.type === "textarea") {
                    _push2(ssrRenderComponent(_component_UTextarea, {
                      modelValue: unref(form).metaData[field.name],
                      "onUpdate:modelValue": ($event) => unref(form).metaData[field.name] = $event,
                      rows: 3,
                      class: "text-gray-900 dark:text-white w-full"
                    }, null, _parent2, _scopeId));
                  } else if (field.type === "number") {
                    _push2(ssrRenderComponent(_component_UInput, {
                      modelValue: unref(form).metaData[field.name],
                      "onUpdate:modelValue": ($event) => unref(form).metaData[field.name] = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      class: "text-gray-900 dark:text-white w-full"
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(ssrRenderComponent(_component_UInput, {
                      modelValue: unref(form).metaData[field.name],
                      "onUpdate:modelValue": ($event) => unref(form).metaData[field.name] = $event,
                      class: "text-gray-900 dark:text-white w-full"
                    }, null, _parent2, _scopeId));
                  }
                  _push2(`<p class="text-xs text-gray-500 mt-1"${_scopeId}>${ssrInterpolate(field.name)}</p>`);
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
            }, _parent));
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4"><div class="flex items-center gap-2 pb-3 border-b border-gray-100 dark:border-gray-800/60">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:article-bold",
          class: "w-4 h-4 text-purple-500"
        }, null, _parent));
        _push(`<h2 class="text-sm font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.products.form.content"))}</h2></div>`);
        _push(ssrRenderComponent(_component_UFormField, {
          label: _ctx.$t("admin.products.form.content") + (unref(currentTabLocale) !== unref(defaultLocale) ? ` (${unref(currentTabLocale)})` : "")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden"${_scopeId}>`);
              if (unref(currentTabLocale) === unref(defaultLocale)) {
                _push2(ssrRenderComponent(unref(RichEditor), {
                  modelValue: unref(form).content,
                  "onUpdate:modelValue": ($event) => unref(form).content = $event
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(unref(RichEditor), {
                  modelValue: unref(translationForms)[unref(currentTabLocale)].content,
                  "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].content = $event
                }, null, _parent2, _scopeId));
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden" }, [
                  unref(currentTabLocale) === unref(defaultLocale) ? (openBlock(), createBlock(unref(RichEditor), {
                    key: 0,
                    modelValue: unref(form).content,
                    "onUpdate:modelValue": ($event) => unref(form).content = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(unref(RichEditor), {
                    key: 1,
                    modelValue: unref(translationForms)[unref(currentTabLocale)].content,
                    "onUpdate:modelValue": ($event) => unref(translationForms)[unref(currentTabLocale)].content = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="lg:col-span-4 space-y-6"><div class="bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4"><div class="flex items-center gap-2 pb-3 border-b border-gray-100 dark:border-gray-800/60">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:eye-bold",
          class: "w-4 h-4 text-purple-500"
        }, null, _parent));
        _push(`<h2 class="text-sm font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.products.status"))}</h2></div><div class="space-y-2.5"><div class="${ssrRenderClass([unref(form).status === "active" ? "border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20 ring-1 ring-emerald-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700", "p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3"])}"><div class="${ssrRenderClass([unref(form).status === "active" ? "border-emerald-600 bg-emerald-600 text-white" : "border-gray-400", "w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0"])}">`);
        if (unref(form).status === "active") {
          _push(`<div class="w-1.5 h-1.5 rounded-full bg-white"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex flex-col min-w-0"><span class="text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span> ${ssrInterpolate(_ctx.$t("admin.products.status_active"))}</span><span class="text-[11px] text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">${ssrInterpolate(_ctx.$t("admin.products.status_active_help"))}</span></div></div><div class="${ssrRenderClass([unref(form).status === "hidden" ? "border-amber-500 bg-amber-50/40 dark:bg-amber-950/20 ring-1 ring-amber-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700", "p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3"])}"><div class="${ssrRenderClass([unref(form).status === "hidden" ? "border-amber-500 bg-amber-500 text-white" : "border-gray-400", "w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0"])}">`);
        if (unref(form).status === "hidden") {
          _push(`<div class="w-1.5 h-1.5 rounded-full bg-white"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex flex-col min-w-0"><span class="text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span> ${ssrInterpolate(_ctx.$t("admin.products.status_hidden"))}</span><span class="text-[11px] text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">${ssrInterpolate(_ctx.$t("admin.products.status_hidden_help"))}</span></div></div><div class="${ssrRenderClass([unref(form).status === "inactive" ? "border-neutral-500 bg-neutral-50/50 dark:bg-neutral-900/40 ring-1 ring-neutral-500" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700", "p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3"])}"><div class="${ssrRenderClass([unref(form).status === "inactive" ? "border-neutral-500 bg-neutral-500 text-white" : "border-gray-400", "w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0"])}">`);
        if (unref(form).status === "inactive") {
          _push(`<div class="w-1.5 h-1.5 rounded-full bg-white"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex flex-col min-w-0"><span class="text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-gray-400 shrink-0"></span> ${ssrInterpolate(_ctx.$t("admin.products.status_inactive"))}</span><span class="text-[11px] text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">${ssrInterpolate(_ctx.$t("admin.products.status_inactive_help"))}</span></div></div></div></div>`);
        if (unref(currentTabLocale) === unref(defaultLocale)) {
          _push(`<div class="bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4"><div class="flex items-center gap-2 pb-3 border-b border-gray-100 dark:border-gray-800/60">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:currency-circle-dollar-bold",
            class: "w-4 h-4 text-purple-500"
          }, null, _parent));
          _push(`<h2 class="text-sm font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.products.price"))}</h2></div><div class="space-y-4">`);
          _push(ssrRenderComponent(_component_UFormField, {
            label: _ctx.$t("admin.products.price"),
            required: ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: unref(form).price,
                  "onUpdate:modelValue": ($event) => unref(form).price = $event,
                  modelModifiers: { number: true },
                  type: "number",
                  step: "0.01",
                  min: "0",
                  required: "",
                  class: "text-gray-900 dark:text-white w-full"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UInput, {
                    modelValue: unref(form).price,
                    "onUpdate:modelValue": ($event) => unref(form).price = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    step: "0.01",
                    min: "0",
                    required: "",
                    class: "text-gray-900 dark:text-white w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_UFormField, {
            label: _ctx.$t("admin.products.form.original_price.label")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: unref(form).metaData.original_price,
                  "onUpdate:modelValue": ($event) => unref(form).metaData.original_price = $event,
                  modelModifiers: { number: true },
                  type: "number",
                  step: "0.01",
                  min: "0",
                  class: "text-gray-900 dark:text-white w-full",
                  placeholder: _ctx.$t("admin.products.form.original_price.placeholder")
                }, null, _parent2, _scopeId));
                _push2(`<p class="text-xs text-gray-500 mt-1"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.products.form.original_price.help"))}</p>`);
              } else {
                return [
                  createVNode(_component_UInput, {
                    modelValue: unref(form).metaData.original_price,
                    "onUpdate:modelValue": ($event) => unref(form).metaData.original_price = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    step: "0.01",
                    min: "0",
                    class: "text-gray-900 dark:text-white w-full",
                    placeholder: _ctx.$t("admin.products.form.original_price.placeholder")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                  createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.products.form.original_price.help")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_UFormField, {
            label: _ctx.$t("admin.products.form.per_user_limit.label")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: unref(form).metaData.perUserLimit,
                  "onUpdate:modelValue": ($event) => unref(form).metaData.perUserLimit = $event,
                  modelModifiers: { number: true },
                  type: "number",
                  min: "0",
                  step: "1",
                  class: "text-gray-900 dark:text-white w-full",
                  placeholder: _ctx.$t("admin.products.form.per_user_limit.placeholder")
                }, null, _parent2, _scopeId));
                _push2(`<p class="text-xs text-gray-500 mt-1"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.products.form.per_user_limit.help"))}</p>`);
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
          }, _parent));
          _push(`<div class="pt-3 border-t border-gray-100 dark:border-gray-800/60 space-y-3"><div class="flex items-center justify-between"><h3 class="text-xs font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.products.form.discounts_title"))}</h3>`);
          _push(ssrRenderComponent(_component_UButton, {
            color: "primary",
            variant: "ghost",
            size: "xs",
            icon: "ph:plus-bold",
            onClick: unref(addVolumeDiscountTier)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("admin.products.form.volume_discounts.add"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.products.form.volume_discounts.add")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
          if ((_b = (_a = unref(form).metaData) == null ? void 0 : _a.volume_discounts) == null ? void 0 : _b.length) {
            _push(`<div class="space-y-2"><!--[-->`);
            ssrRenderList(unref(form).metaData.volume_discounts, (tier, idx) => {
              _push(`<div class="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-[#1a1a1c] border border-gray-200 dark:border-white/5"><div class="flex-1 grid grid-cols-2 gap-2"><div><label class="block text-[10px] text-gray-500 mb-0.5">${ssrInterpolate(_ctx.$t("admin.products.form.volume_discounts.min_quantity"))}</label>`);
              _push(ssrRenderComponent(_component_UInput, {
                modelValue: tier.minQuantity,
                "onUpdate:modelValue": ($event) => tier.minQuantity = $event,
                modelModifiers: { number: true },
                type: "number",
                min: "2",
                step: "1",
                size: "xs",
                class: "w-full text-gray-900 dark:text-white"
              }, null, _parent));
              _push(`</div><div><label class="block text-[10px] text-gray-500 mb-0.5">${ssrInterpolate(_ctx.$t("admin.products.form.volume_discounts.discount_rate"))}</label>`);
              _push(ssrRenderComponent(_component_UInput, {
                modelValue: tier.discountRate,
                "onUpdate:modelValue": ($event) => tier.discountRate = $event,
                modelModifiers: { number: true },
                type: "number",
                min: "0.01",
                max: "0.99",
                step: "0.01",
                size: "xs",
                class: "w-full text-gray-900 dark:text-white"
              }, null, _parent));
              _push(`</div></div><div class="pt-3.5">`);
              _push(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                size: "xs",
                icon: "ph:trash",
                onClick: ($event) => unref(removeVolumeDiscountTier)(idx)
              }, null, _parent));
              _push(`</div></div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<p class="text-[11px] text-gray-400 dark:text-gray-500 italic">${ssrInterpolate(_ctx.$t("admin.products.form.volume_discounts.tip"))}</p>`);
          }
          _push(`<div class="pt-2">`);
          _push(ssrRenderComponent(_component_UFormField, {
            label: _ctx.$t("admin.products.form.promo_discount.label")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: unref(form).metaData.promo_discount_rate,
                  "onUpdate:modelValue": ($event) => unref(form).metaData.promo_discount_rate = $event,
                  modelModifiers: { number: true },
                  type: "number",
                  min: "0.01",
                  max: "0.99",
                  step: "0.01",
                  size: "sm",
                  class: "w-full text-gray-900 dark:text-white",
                  placeholder: _ctx.$t("admin.products.form.promo_discount.placeholder")
                }, null, _parent2, _scopeId));
                _push2(`<p class="text-xs text-gray-500 mt-1"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.products.form.promo_discount.help"))}</p>`);
              } else {
                return [
                  createVNode(_component_UInput, {
                    modelValue: unref(form).metaData.promo_discount_rate,
                    "onUpdate:modelValue": ($event) => unref(form).metaData.promo_discount_rate = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "0.01",
                    max: "0.99",
                    step: "0.01",
                    size: "sm",
                    class: "w-full text-gray-900 dark:text-white",
                    placeholder: _ctx.$t("admin.products.form.promo_discount.placeholder")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                  createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(_ctx.$t("admin.products.form.promo_discount.help")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(currentTabLocale) === unref(defaultLocale)) {
          _push(`<div class="bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4"><div class="flex items-center gap-2 pb-3 border-b border-gray-100 dark:border-gray-800/60">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:images-bold",
            class: "w-4 h-4 text-purple-500"
          }, null, _parent));
          _push(`<h2 class="text-sm font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.products.editor.mediaCard", "\u5546\u54C1\u76F8\u518C"))}</h2></div>`);
          _push(ssrRenderComponent(ProductImagesField, {
            visible: true,
            images: unref(form).imageUrls,
            "new-image-url": unref(newImageUrl),
            "is-uploading": unref(isUploading),
            "onUpdate:newImageUrl": ($event) => newImageUrl.value = $event,
            "onUpdate:images": ($event) => unref(form).imageUrls = $event,
            onAddUrl: unref(addImageUrl),
            onUpload: onFileUpload,
            onPreview: previewImage,
            onRemove: unref(removeImage)
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></form></div>`);
      }
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/products/ProductEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "AdminProductsProductEditor" });

export { __nuxt_component_0 as _ };
