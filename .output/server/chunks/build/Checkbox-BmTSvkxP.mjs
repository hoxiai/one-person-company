import { useSlots, useId, useAttrs, computed, unref, mergeProps, withCtx, openBlock, createBlock, createVNode, resolveDynamicComponent, renderSlot, createTextVNode, toDisplayString, createCommentVNode, defineComponent, withKeys, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderVNode, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { as as useAppConfig, aC as useComponentUI, aj as useForwardPropsEmits, aD as reactivePick, aO as useFormField, aE as tv, ab as Primitive, aW as Label_default, b as _sfc_main$G, Y as useForwardExpose, V as useVModel, aY as isNullish, aV as useFormControl, ae as Presence_default, U as createContext } from './server.mjs';
import { i as isValueEqualOrExist } from './isValueEqualOrExist-BVczPdKj.mjs';
import { V as VisuallyHiddenInput_default } from './VisuallyHiddenInput-32bCuzTQ.mjs';
import { R as RovingFocusItem_default } from './RovingFocusItem-DyHBwisL.mjs';
import { dF as isEqual } from '../nitro/nitro.mjs';

const [injectCheckboxGroupRootContext] = createContext("CheckboxGroupRoot");
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
const [injectCheckboxRootContext, provideCheckboxRootContext] = createContext("CheckboxRoot");
var CheckboxRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "CheckboxRoot",
  props: {
    defaultValue: {
      type: null,
      required: false
    },
    modelValue: {
      type: null,
      required: false,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: false
    },
    value: {
      type: null,
      required: false,
      default: "on"
    },
    id: {
      type: String,
      required: false
    },
    trueValue: {
      type: null,
      required: false,
      default: () => true
    },
    falseValue: {
      type: null,
      required: false,
      default: () => false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    },
    name: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const emits = __emit;
    const { forwardRef, currentElement } = useForwardExpose();
    const checkboxGroupContext = injectCheckboxGroupRootContext(null);
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: (_a = props.defaultValue) != null ? _a : props.falseValue,
      passive: props.modelValue === void 0
    });
    const disabled = computed(() => (checkboxGroupContext == null ? void 0 : checkboxGroupContext.disabled.value) || props.disabled);
    const isChecked = computed(() => isEqual(modelValue.value, props.trueValue));
    const checkboxState = computed(() => {
      if (!isNullish(checkboxGroupContext == null ? void 0 : checkboxGroupContext.modelValue.value)) return isValueEqualOrExist(checkboxGroupContext.modelValue.value, props.value);
      else {
        if (modelValue.value === "indeterminate") return "indeterminate";
        return isChecked.value;
      }
    });
    function handleClick() {
      if (!isNullish(checkboxGroupContext == null ? void 0 : checkboxGroupContext.modelValue.value)) {
        const modelValueArray = [...checkboxGroupContext.modelValue.value || []];
        if (isValueEqualOrExist(modelValueArray, props.value)) {
          const index = modelValueArray.findIndex((i) => isEqual(i, props.value));
          modelValueArray.splice(index, 1);
        } else modelValueArray.push(props.value);
        checkboxGroupContext.modelValue.value = modelValueArray;
      } else if (modelValue.value === "indeterminate") modelValue.value = props.trueValue;
      else modelValue.value = isChecked.value ? props.falseValue : props.trueValue;
    }
    const isFormControl = useFormControl(currentElement);
    const ariaLabel = computed(() => {
      var _a2;
      return props.id && currentElement.value ? (_a2 = (void 0).querySelector(`[for="${props.id}"]`)) == null ? void 0 : _a2.innerText : void 0;
    });
    provideCheckboxRootContext({
      disabled,
      state: checkboxState
    });
    return (_ctx, _cache) => {
      var _a2, _b;
      return openBlock(), createBlock(resolveDynamicComponent(((_a2 = unref(checkboxGroupContext)) == null ? void 0 : _a2.rovingFocus.value) ? unref(RovingFocusItem_default) : unref(Primitive)), mergeProps(_ctx.$attrs, {
        id: _ctx.id,
        ref: unref(forwardRef),
        role: "checkbox",
        "as-child": _ctx.asChild,
        as: _ctx.as,
        type: _ctx.as === "button" ? "button" : void 0,
        "aria-checked": unref(isIndeterminate)(checkboxState.value) ? "mixed" : checkboxState.value,
        "aria-required": _ctx.required,
        "aria-label": _ctx.$attrs["aria-label"] || ariaLabel.value,
        "data-state": unref(getState)(checkboxState.value),
        "data-disabled": disabled.value ? "" : void 0,
        disabled: disabled.value,
        focusable: ((_b = unref(checkboxGroupContext)) == null ? void 0 : _b.rovingFocus.value) ? !disabled.value : void 0,
        onKeydown: withKeys(withModifiers(() => {
        }, ["prevent"]), ["enter"]),
        onClick: handleClick
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
          modelValue: unref(modelValue),
          state: checkboxState.value
        }), unref(isFormControl) && _ctx.name && !unref(checkboxGroupContext) ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), {
          key: 0,
          type: "checkbox",
          checked: !!checkboxState.value,
          name: _ctx.name,
          value: _ctx.value,
          disabled: disabled.value,
          required: _ctx.required
        }, null, 8, [
          "checked",
          "name",
          "value",
          "disabled",
          "required"
        ])) : createCommentVNode("v-if", true)]),
        _: 3
      }, 16, [
        "id",
        "as-child",
        "as",
        "type",
        "aria-checked",
        "aria-required",
        "aria-label",
        "data-state",
        "data-disabled",
        "disabled",
        "focusable",
        "onKeydown"
      ]);
    };
  }
});
var CheckboxRoot_default = CheckboxRoot_vue_vue_type_script_setup_true_lang_default;
var CheckboxIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "span"
    }
  },
  setup(__props) {
    const { forwardRef } = useForwardExpose();
    const rootContext = injectCheckboxRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(isIndeterminate)(unref(rootContext).state.value) || unref(rootContext).state.value === true }, {
        default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
          ref: unref(forwardRef),
          "data-state": unref(getState)(unref(rootContext).state.value),
          "data-disabled": unref(rootContext).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": _ctx.asChild,
          as: _ctx.as
        }, _ctx.$attrs), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "data-state",
          "data-disabled",
          "as-child",
          "as"
        ])]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var CheckboxIndicator_default = CheckboxIndicator_vue_vue_type_script_setup_true_lang_default;
const theme = {
  "slots": {
    "root": "relative flex items-start",
    "container": "flex items-center",
    "base": "rounded-sm ring ring-inset ring-accented overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "flex items-center justify-center size-full text-inverted",
    "icon": "shrink-0 size-full",
    "wrapper": "w-full",
    "label": "block font-medium text-default",
    "description": "text-muted"
  },
  "variants": {
    "color": {
      "primary": {
        "base": "focus-visible:outline-primary",
        "indicator": "bg-primary"
      },
      "secondary": {
        "base": "focus-visible:outline-secondary",
        "indicator": "bg-secondary"
      },
      "success": {
        "base": "focus-visible:outline-success",
        "indicator": "bg-success"
      },
      "info": {
        "base": "focus-visible:outline-info",
        "indicator": "bg-info"
      },
      "warning": {
        "base": "focus-visible:outline-warning",
        "indicator": "bg-warning"
      },
      "error": {
        "base": "focus-visible:outline-error",
        "indicator": "bg-error"
      },
      "neutral": {
        "base": "focus-visible:outline-inverted",
        "indicator": "bg-inverted"
      }
    },
    "variant": {
      "list": {
        "root": ""
      },
      "card": {
        "root": "border border-muted rounded-lg"
      }
    },
    "indicator": {
      "start": {
        "root": "flex-row",
        "wrapper": "ms-2"
      },
      "end": {
        "root": "flex-row-reverse",
        "wrapper": "me-2"
      },
      "hidden": {
        "base": "sr-only",
        "wrapper": "text-center"
      }
    },
    "size": {
      "xs": {
        "base": "size-3",
        "container": "h-4",
        "wrapper": "text-xs"
      },
      "sm": {
        "base": "size-3.5",
        "container": "h-4",
        "wrapper": "text-xs"
      },
      "md": {
        "base": "size-4",
        "container": "h-5",
        "wrapper": "text-sm"
      },
      "lg": {
        "base": "size-4.5",
        "container": "h-5",
        "wrapper": "text-sm"
      },
      "xl": {
        "base": "size-5",
        "container": "h-6",
        "wrapper": "text-base"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-error"
      }
    },
    "disabled": {
      "true": {
        "root": "opacity-75",
        "base": "cursor-not-allowed",
        "label": "cursor-not-allowed",
        "description": "cursor-not-allowed"
      }
    },
    "checked": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "size": "xs",
      "variant": "card",
      "class": {
        "root": "p-2.5"
      }
    },
    {
      "size": "sm",
      "variant": "card",
      "class": {
        "root": "p-3"
      }
    },
    {
      "size": "md",
      "variant": "card",
      "class": {
        "root": "p-3.5"
      }
    },
    {
      "size": "lg",
      "variant": "card",
      "class": {
        "root": "p-4"
      }
    },
    {
      "size": "xl",
      "variant": "card",
      "class": {
        "root": "p-4.5"
      }
    },
    {
      "color": "primary",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-secondary"
      }
    },
    {
      "color": "success",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-success"
      }
    },
    {
      "color": "info",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-info"
      }
    },
    {
      "color": "warning",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-warning"
      }
    },
    {
      "color": "error",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-error"
      }
    },
    {
      "color": "neutral",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-inverted"
      }
    },
    {
      "variant": "card",
      "disabled": true,
      "class": {
        "root": "cursor-not-allowed"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "list",
    "indicator": "start"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UCheckbox",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    indicator: { type: null, required: false },
    icon: { type: null, required: false },
    indeterminateIcon: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    disabled: { type: Boolean, required: false },
    required: { type: Boolean, required: false },
    name: { type: String, required: false },
    value: { type: null, required: false },
    id: { type: String, required: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    trueValue: { type: null, required: false },
    falseValue: { type: null, required: false }
  },
  emits: ["change", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const slots = useSlots();
    const emits = __emit;
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("checkbox", props);
    const rootProps = useForwardPropsEmits(reactivePick(props, "required", "value", "defaultValue", "modelValue", "trueValue", "falseValue"), emits);
    const { id: _id, emitFormChange, emitFormInput, size, color, name, disabled, ariaAttrs } = useFormField(props);
    const id = (_a = _id.value) != null ? _a : useId();
    const attrs = useAttrs();
    const forwardedAttrs = computed(() => {
      const { "data-state": _, ...rest } = attrs;
      return rest;
    });
    const ui = computed(() => {
      var _a2;
      return tv({ extend: tv(theme), ...((_a2 = appConfig.ui) == null ? void 0 : _a2.checkbox) || {} })({
        size: size.value,
        color: color.value,
        variant: props.variant,
        indicator: props.indicator,
        required: props.required,
        disabled: disabled.value
      });
    });
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: !__props.variant || __props.variant === "list" ? __props.as : unref(Label_default),
        "data-slot": "root",
        class: ui.value.root({ class: [(_a2 = unref(uiProp)) == null ? void 0 : _a2.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: (_a3 = unref(uiProp)) == null ? void 0 : _a3.container }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckboxRoot_default), mergeProps({ id: unref(id) }, { ...unref(rootProps), ...forwardedAttrs.value, ...unref(ariaAttrs) }, {
              name: unref(name),
              disabled: unref(disabled),
              "data-slot": "base",
              class: ui.value.base({ class: (_b = unref(uiProp)) == null ? void 0 : _b.base }),
              "onUpdate:modelValue": onUpdate
            }), {
              default: withCtx(({ state }, _push3, _parent3, _scopeId2) => {
                var _a4, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CheckboxIndicator_default), {
                    "data-slot": "indicator",
                    class: ui.value.indicator({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.indicator })
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a5, _b3, _c2, _d2;
                      if (_push4) {
                        if (state === "indeterminate") {
                          _push4(ssrRenderComponent(_sfc_main$G, {
                            name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: (_a5 = unref(uiProp)) == null ? void 0 : _a5.icon })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_sfc_main$G, {
                            name: __props.icon || unref(appConfig).ui.icons.check,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: (_b3 = unref(uiProp)) == null ? void 0 : _b3.icon })
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          state === "indeterminate" ? (openBlock(), createBlock(_sfc_main$G, {
                            key: 0,
                            name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: (_c2 = unref(uiProp)) == null ? void 0 : _c2.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$G, {
                            key: 1,
                            name: __props.icon || unref(appConfig).ui.icons.check,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: (_d2 = unref(uiProp)) == null ? void 0 : _d2.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CheckboxIndicator_default), {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: (_b2 = unref(uiProp)) == null ? void 0 : _b2.indicator })
                    }, {
                      default: withCtx(() => {
                        var _a5, _b3;
                        return [
                          state === "indeterminate" ? (openBlock(), createBlock(_sfc_main$G, {
                            key: 0,
                            name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: (_a5 = unref(uiProp)) == null ? void 0 : _a5.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$G, {
                            key: 1,
                            name: __props.icon || unref(appConfig).ui.icons.check,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: (_b3 = unref(uiProp)) == null ? void 0 : _b3.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }),
                      _: 2
                    }, 1032, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.label || !!slots.label || (__props.description || !!slots.description)) {
              _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: (_c = unref(uiProp)) == null ? void 0 : _c.wrapper }))}"${_scopeId}>`);
              if (__props.label || !!slots.label) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label_default) : "p"), {
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: (_d = unref(uiProp)) == null ? void 0 : _d.label })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "label", { label: __props.label }, () => {
                        _push3(`${ssrInterpolate(__props.label)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                          createTextVNode(toDisplayString(__props.label), 1)
                        ])
                      ];
                    }
                  }),
                  _: 3
                }), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || !!slots.description) {
                _push2(`<p data-slot="description" class="${ssrRenderClass(ui.value.description({ class: (_e = unref(uiProp)) == null ? void 0 : _e.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", { description: __props.description }, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                "data-slot": "container",
                class: ui.value.container({ class: (_f = unref(uiProp)) == null ? void 0 : _f.container })
              }, [
                createVNode(unref(CheckboxRoot_default), mergeProps({ id: unref(id) }, { ...unref(rootProps), ...forwardedAttrs.value, ...unref(ariaAttrs) }, {
                  name: unref(name),
                  disabled: unref(disabled),
                  "data-slot": "base",
                  class: ui.value.base({ class: (_g = unref(uiProp)) == null ? void 0 : _g.base }),
                  "onUpdate:modelValue": onUpdate
                }), {
                  default: withCtx(({ state }) => {
                    var _a4;
                    return [
                      createVNode(unref(CheckboxIndicator_default), {
                        "data-slot": "indicator",
                        class: ui.value.indicator({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.indicator })
                      }, {
                        default: withCtx(() => {
                          var _a5, _b2;
                          return [
                            state === "indeterminate" ? (openBlock(), createBlock(_sfc_main$G, {
                              key: 0,
                              name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: (_a5 = unref(uiProp)) == null ? void 0 : _a5.icon })
                            }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$G, {
                              key: 1,
                              name: __props.icon || unref(appConfig).ui.icons.check,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: (_b2 = unref(uiProp)) == null ? void 0 : _b2.icon })
                            }, null, 8, ["name", "class"]))
                          ];
                        }),
                        _: 2
                      }, 1032, ["class"])
                    ];
                  }),
                  _: 1
                }, 16, ["id", "name", "disabled", "class"])
              ], 2),
              __props.label || !!slots.label || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: (_h = unref(uiProp)) == null ? void 0 : _h.wrapper })
              }, [
                __props.label || !!slots.label ? (openBlock(), createBlock(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label_default) : "p"), {
                  key: 0,
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: (_i = unref(uiProp)) == null ? void 0 : _i.label })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                      createTextVNode(toDisplayString(__props.label), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["for", "class"])) : createCommentVNode("", true),
                __props.description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  "data-slot": "description",
                  class: ui.value.description({ class: (_j = unref(uiProp)) == null ? void 0 : _j.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: __props.description }, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
