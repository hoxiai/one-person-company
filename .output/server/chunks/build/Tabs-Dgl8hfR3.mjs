import { useSlots, computed, ref, unref, mergeProps, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, createVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { as as useAppConfig, aC as useComponentUI, aj as useForwardPropsEmits, aD as reactivePick, aE as tv, ax as get, b as _sfc_main$G, aw as _sfc_main$E, n as _sfc_main$x } from './server.mjs';
import { T as TabsRoot_default, a as TabsList_default, b as TabsIndicator_default, c as TabsTrigger_default, d as TabsContent_default } from './TabsTrigger-Debt6F5y.mjs';

const theme = {
  "slots": {
    "root": "flex items-center gap-2",
    "list": "relative flex p-1 group",
    "indicator": "absolute transition-[translate,width] duration-200",
    "trigger": [
      "group relative inline-flex items-center min-w-0 data-[state=inactive]:text-muted hover:data-[state=inactive]:not-disabled:text-default font-medium rounded-md disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "label": "truncate",
    "trailingBadge": "shrink-0",
    "trailingBadgeSize": "sm",
    "content": "focus:outline-none w-full"
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "pill": {
        "list": "bg-elevated rounded-lg",
        "trigger": "grow",
        "indicator": "rounded-md shadow-xs"
      },
      "link": {
        "list": "border-default",
        "indicator": "rounded-full",
        "trigger": "focus:outline-none"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "flex-col",
        "list": "w-full",
        "indicator": "left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)",
        "trigger": "justify-center"
      },
      "vertical": {
        "list": "flex-col",
        "indicator": "top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)"
      }
    },
    "size": {
      "xs": {
        "trigger": "px-2 py-1 text-xs gap-1",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "sm": {
        "trigger": "px-2.5 py-1.5 text-xs gap-1.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "md": {
        "trigger": "px-3 py-1.5 text-sm gap-1.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "lg": {
        "trigger": "px-3 py-2 text-sm gap-2",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "xl": {
        "trigger": "px-3 py-2 text-base gap-2",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "variant": "pill",
      "class": {
        "indicator": "inset-y-1"
      }
    },
    {
      "orientation": "horizontal",
      "variant": "link",
      "class": {
        "list": "border-b -mb-px",
        "indicator": "-bottom-px h-px"
      }
    },
    {
      "orientation": "vertical",
      "variant": "pill",
      "class": {
        "indicator": "inset-x-1",
        "list": "items-center"
      }
    },
    {
      "orientation": "vertical",
      "variant": "link",
      "class": {
        "list": "border-s -ms-px",
        "indicator": "-start-px w-px"
      }
    },
    {
      "color": "primary",
      "variant": "pill",
      "class": {
        "indicator": "bg-primary",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "pill",
      "class": {
        "indicator": "bg-secondary",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      }
    },
    {
      "color": "success",
      "variant": "pill",
      "class": {
        "indicator": "bg-success",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success"
      }
    },
    {
      "color": "info",
      "variant": "pill",
      "class": {
        "indicator": "bg-info",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info"
      }
    },
    {
      "color": "warning",
      "variant": "pill",
      "class": {
        "indicator": "bg-warning",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning"
      }
    },
    {
      "color": "error",
      "variant": "pill",
      "class": {
        "indicator": "bg-error",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error"
      }
    },
    {
      "color": "neutral",
      "variant": "pill",
      "class": {
        "indicator": "bg-inverted",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted"
      }
    },
    {
      "color": "primary",
      "variant": "link",
      "class": {
        "indicator": "bg-primary",
        "trigger": "data-[state=active]:text-primary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "link",
      "class": {
        "indicator": "bg-secondary",
        "trigger": "data-[state=active]:text-secondary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
      }
    },
    {
      "color": "success",
      "variant": "link",
      "class": {
        "indicator": "bg-success",
        "trigger": "data-[state=active]:text-success focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
      }
    },
    {
      "color": "info",
      "variant": "link",
      "class": {
        "indicator": "bg-info",
        "trigger": "data-[state=active]:text-info focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
      }
    },
    {
      "color": "warning",
      "variant": "link",
      "class": {
        "indicator": "bg-warning",
        "trigger": "data-[state=active]:text-warning focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
      }
    },
    {
      "color": "error",
      "variant": "link",
      "class": {
        "indicator": "bg-error",
        "trigger": "data-[state=active]:text-error focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
      }
    },
    {
      "color": "neutral",
      "variant": "link",
      "class": {
        "indicator": "bg-inverted",
        "trigger": "data-[state=active]:text-highlighted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "pill",
    "size": "md"
  }
};
const _sfc_main = {
  __name: "UTabs",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    items: { type: Array, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    content: { type: Boolean, required: false, default: true },
    valueKey: { type: null, required: false, default: "value" },
    labelKey: { type: null, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    defaultValue: { type: [String, Number], required: false, default: "0" },
    modelValue: { type: [String, Number], required: false },
    activationMode: { type: String, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("tabs", props);
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "unmountOnHide"), emits);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.tabs) || {} })({
        color: props.color,
        variant: props.variant,
        size: props.size,
        orientation: props.orientation
      });
    });
    const triggersRef = ref([]);
    function setTriggerRef(index, el) {
      triggersRef.value[index] = el;
    }
    __expose({
      triggersRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(TabsRoot_default), mergeProps(unref(rootProps), {
        "model-value": __props.modelValue,
        "default-value": __props.defaultValue,
        orientation: __props.orientation,
        "activation-mode": __props.activationMode,
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = unref(uiProp)) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(TabsList_default), {
              "data-slot": "list",
              class: ui.value.list({ class: (_a2 = unref(uiProp)) == null ? void 0 : _a2.list })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TabsIndicator_default), {
                    "data-slot": "indicator",
                    class: ui.value.indicator({ class: (_a3 = unref(uiProp)) == null ? void 0 : _a3.indicator })
                  }, null, _parent3, _scopeId2));
                  ssrRenderSlot(_ctx.$slots, "list-leading", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.items, (item, index) => {
                    var _a4, _b3, _c;
                    _push3(ssrRenderComponent(unref(TabsTrigger_default), {
                      key: index,
                      ref_for: true,
                      ref: (el) => setTriggerRef(index, el),
                      value: (_a4 = unref(get)(item, props.valueKey)) != null ? _a4 : String(index),
                      disabled: item.disabled,
                      "data-slot": "trigger",
                      class: ui.value.trigger({ class: [(_b3 = unref(uiProp)) == null ? void 0 : _b3.trigger, (_c = item.ui) == null ? void 0 : _c.trigger] })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a5, _b4, _c2, _d;
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "leading", {
                            item,
                            index,
                            ui: ui.value
                          }, () => {
                            var _a6, _b5, _c3, _d2, _e, _f;
                            if (item.icon) {
                              _push4(ssrRenderComponent(_sfc_main$G, {
                                name: item.icon,
                                "data-slot": "leadingIcon",
                                class: ui.value.leadingIcon({ class: [(_a6 = unref(uiProp)) == null ? void 0 : _a6.leadingIcon, (_b5 = item.ui) == null ? void 0 : _b5.leadingIcon] })
                              }, null, _parent4, _scopeId3));
                            } else if (item.avatar) {
                              _push4(ssrRenderComponent(_sfc_main$E, mergeProps({
                                size: ((_c3 = item.ui) == null ? void 0 : _c3.leadingAvatarSize) || ((_d2 = unref(uiProp)) == null ? void 0 : _d2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                              }, { ref_for: true }, item.avatar, {
                                "data-slot": "leadingAvatar",
                                class: ui.value.leadingAvatar({ class: [(_e = unref(uiProp)) == null ? void 0 : _e.leadingAvatar, (_f = item.ui) == null ? void 0 : _f.leadingAvatar] })
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          if (unref(get)(item, props.labelKey) || !!slots.default) {
                            _push4(`<span data-slot="label" class="${ssrRenderClass(ui.value.label({ class: [(_a5 = unref(uiProp)) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "default", {
                              item,
                              index
                            }, () => {
                              _push4(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          ssrRenderSlot(_ctx.$slots, "trailing", {
                            item,
                            index,
                            ui: ui.value
                          }, () => {
                            var _a6, _b5, _c3, _d2;
                            if (item.badge || item.badge === 0) {
                              _push4(ssrRenderComponent(_sfc_main$x, mergeProps({
                                color: "neutral",
                                variant: "outline",
                                size: ((_a6 = item.ui) == null ? void 0 : _a6.trailingBadgeSize) || ((_b5 = unref(uiProp)) == null ? void 0 : _b5.trailingBadgeSize) || ui.value.trailingBadgeSize()
                              }, { ref_for: true }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                                "data-slot": "trailingBadge",
                                class: ui.value.trailingBadge({ class: [(_c3 = unref(uiProp)) == null ? void 0 : _c3.trailingBadge, (_d2 = item.ui) == null ? void 0 : _d2.trailingBadge] })
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index,
                              ui: ui.value
                            }, () => {
                              var _a6, _b5, _c3, _d2, _e, _f;
                              return [
                                item.icon ? (openBlock(), createBlock(_sfc_main$G, {
                                  key: 0,
                                  name: item.icon,
                                  "data-slot": "leadingIcon",
                                  class: ui.value.leadingIcon({ class: [(_a6 = unref(uiProp)) == null ? void 0 : _a6.leadingIcon, (_b5 = item.ui) == null ? void 0 : _b5.leadingIcon] })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$E, mergeProps({
                                  key: 1,
                                  size: ((_c3 = item.ui) == null ? void 0 : _c3.leadingAvatarSize) || ((_d2 = unref(uiProp)) == null ? void 0 : _d2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                                }, { ref_for: true }, item.avatar, {
                                  "data-slot": "leadingAvatar",
                                  class: ui.value.leadingAvatar({ class: [(_e = unref(uiProp)) == null ? void 0 : _e.leadingAvatar, (_f = item.ui) == null ? void 0 : _f.leadingAvatar] })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              "data-slot": "label",
                              class: ui.value.label({ class: [(_c2 = unref(uiProp)) == null ? void 0 : _c2.label, (_d = item.ui) == null ? void 0 : _d.label] })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index,
                              ui: ui.value
                            }, () => {
                              var _a6, _b5, _c3, _d2;
                              return [
                                item.badge || item.badge === 0 ? (openBlock(), createBlock(_sfc_main$x, mergeProps({
                                  key: 0,
                                  color: "neutral",
                                  variant: "outline",
                                  size: ((_a6 = item.ui) == null ? void 0 : _a6.trailingBadgeSize) || ((_b5 = unref(uiProp)) == null ? void 0 : _b5.trailingBadgeSize) || ui.value.trailingBadgeSize()
                                }, { ref_for: true }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                                  "data-slot": "trailingBadge",
                                  class: ui.value.trailingBadge({ class: [(_c3 = unref(uiProp)) == null ? void 0 : _c3.trailingBadge, (_d2 = item.ui) == null ? void 0 : _d2.trailingBadge] })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  ssrRenderSlot(_ctx.$slots, "list-trailing", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    createVNode(unref(TabsIndicator_default), {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: (_b2 = unref(uiProp)) == null ? void 0 : _b2.indicator })
                    }, null, 8, ["class"]),
                    renderSlot(_ctx.$slots, "list-leading"),
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                      var _a4, _b3, _c;
                      return openBlock(), createBlock(unref(TabsTrigger_default), {
                        key: index,
                        ref_for: true,
                        ref: (el) => setTriggerRef(index, el),
                        value: (_a4 = unref(get)(item, props.valueKey)) != null ? _a4 : String(index),
                        disabled: item.disabled,
                        "data-slot": "trigger",
                        class: ui.value.trigger({ class: [(_b3 = unref(uiProp)) == null ? void 0 : _b3.trigger, (_c = item.ui) == null ? void 0 : _c.trigger] })
                      }, {
                        default: withCtx(() => {
                          var _a5, _b4;
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index,
                              ui: ui.value
                            }, () => {
                              var _a6, _b5, _c2, _d, _e, _f;
                              return [
                                item.icon ? (openBlock(), createBlock(_sfc_main$G, {
                                  key: 0,
                                  name: item.icon,
                                  "data-slot": "leadingIcon",
                                  class: ui.value.leadingIcon({ class: [(_a6 = unref(uiProp)) == null ? void 0 : _a6.leadingIcon, (_b5 = item.ui) == null ? void 0 : _b5.leadingIcon] })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$E, mergeProps({
                                  key: 1,
                                  size: ((_c2 = item.ui) == null ? void 0 : _c2.leadingAvatarSize) || ((_d = unref(uiProp)) == null ? void 0 : _d.leadingAvatarSize) || ui.value.leadingAvatarSize()
                                }, { ref_for: true }, item.avatar, {
                                  "data-slot": "leadingAvatar",
                                  class: ui.value.leadingAvatar({ class: [(_e = unref(uiProp)) == null ? void 0 : _e.leadingAvatar, (_f = item.ui) == null ? void 0 : _f.leadingAvatar] })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              "data-slot": "label",
                              class: ui.value.label({ class: [(_a5 = unref(uiProp)) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index,
                              ui: ui.value
                            }, () => {
                              var _a6, _b5, _c2, _d;
                              return [
                                item.badge || item.badge === 0 ? (openBlock(), createBlock(_sfc_main$x, mergeProps({
                                  key: 0,
                                  color: "neutral",
                                  variant: "outline",
                                  size: ((_a6 = item.ui) == null ? void 0 : _a6.trailingBadgeSize) || ((_b5 = unref(uiProp)) == null ? void 0 : _b5.trailingBadgeSize) || ui.value.trailingBadgeSize()
                                }, { ref_for: true }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                                  "data-slot": "trailingBadge",
                                  class: ui.value.trailingBadge({ class: [(_c2 = unref(uiProp)) == null ? void 0 : _c2.trailingBadge, (_d = item.ui) == null ? void 0 : _d.trailingBadge] })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            })
                          ];
                        }),
                        _: 2
                      }, 1032, ["value", "disabled", "class"]);
                    }), 128)),
                    renderSlot(_ctx.$slots, "list-trailing")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (!!__props.content) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.items, (item, index) => {
                var _a3, _b2, _c;
                _push2(ssrRenderComponent(unref(TabsContent_default), {
                  key: index,
                  value: (_a3 = unref(get)(item, props.valueKey)) != null ? _a3 : String(index),
                  "data-slot": "content",
                  class: ui.value.content({ class: [(_b2 = unref(uiProp)) == null ? void 0 : _b2.content, (_c = item.ui) == null ? void 0 : _c.content, item.class] })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                        item,
                        index,
                        ui: ui.value
                      }, () => {
                        _push3(`${ssrInterpolate(item.content)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, item.slot || "content", {
                          item,
                          index,
                          ui: ui.value
                        }, () => [
                          createTextVNode(toDisplayString(item.content), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(TabsList_default), {
                "data-slot": "list",
                class: ui.value.list({ class: (_b = unref(uiProp)) == null ? void 0 : _b.list })
              }, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode(unref(TabsIndicator_default), {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: (_a3 = unref(uiProp)) == null ? void 0 : _a3.indicator })
                    }, null, 8, ["class"]),
                    renderSlot(_ctx.$slots, "list-leading"),
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                      var _a4, _b2, _c;
                      return openBlock(), createBlock(unref(TabsTrigger_default), {
                        key: index,
                        ref_for: true,
                        ref: (el) => setTriggerRef(index, el),
                        value: (_a4 = unref(get)(item, props.valueKey)) != null ? _a4 : String(index),
                        disabled: item.disabled,
                        "data-slot": "trigger",
                        class: ui.value.trigger({ class: [(_b2 = unref(uiProp)) == null ? void 0 : _b2.trigger, (_c = item.ui) == null ? void 0 : _c.trigger] })
                      }, {
                        default: withCtx(() => {
                          var _a5, _b3;
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index,
                              ui: ui.value
                            }, () => {
                              var _a6, _b4, _c2, _d, _e, _f;
                              return [
                                item.icon ? (openBlock(), createBlock(_sfc_main$G, {
                                  key: 0,
                                  name: item.icon,
                                  "data-slot": "leadingIcon",
                                  class: ui.value.leadingIcon({ class: [(_a6 = unref(uiProp)) == null ? void 0 : _a6.leadingIcon, (_b4 = item.ui) == null ? void 0 : _b4.leadingIcon] })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$E, mergeProps({
                                  key: 1,
                                  size: ((_c2 = item.ui) == null ? void 0 : _c2.leadingAvatarSize) || ((_d = unref(uiProp)) == null ? void 0 : _d.leadingAvatarSize) || ui.value.leadingAvatarSize()
                                }, { ref_for: true }, item.avatar, {
                                  "data-slot": "leadingAvatar",
                                  class: ui.value.leadingAvatar({ class: [(_e = unref(uiProp)) == null ? void 0 : _e.leadingAvatar, (_f = item.ui) == null ? void 0 : _f.leadingAvatar] })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              "data-slot": "label",
                              class: ui.value.label({ class: [(_a5 = unref(uiProp)) == null ? void 0 : _a5.label, (_b3 = item.ui) == null ? void 0 : _b3.label] })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index,
                              ui: ui.value
                            }, () => {
                              var _a6, _b4, _c2, _d;
                              return [
                                item.badge || item.badge === 0 ? (openBlock(), createBlock(_sfc_main$x, mergeProps({
                                  key: 0,
                                  color: "neutral",
                                  variant: "outline",
                                  size: ((_a6 = item.ui) == null ? void 0 : _a6.trailingBadgeSize) || ((_b4 = unref(uiProp)) == null ? void 0 : _b4.trailingBadgeSize) || ui.value.trailingBadgeSize()
                                }, { ref_for: true }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                                  "data-slot": "trailingBadge",
                                  class: ui.value.trailingBadge({ class: [(_c2 = unref(uiProp)) == null ? void 0 : _c2.trailingBadge, (_d = item.ui) == null ? void 0 : _d.trailingBadge] })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            })
                          ];
                        }),
                        _: 2
                      }, 1032, ["value", "disabled", "class"]);
                    }), 128)),
                    renderSlot(_ctx.$slots, "list-trailing")
                  ];
                }),
                _: 3
              }, 8, ["class"]),
              !!__props.content ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.items, (item, index) => {
                var _a3, _b2, _c;
                return openBlock(), createBlock(unref(TabsContent_default), {
                  key: index,
                  value: (_a3 = unref(get)(item, props.valueKey)) != null ? _a3 : String(index),
                  "data-slot": "content",
                  class: ui.value.content({ class: [(_b2 = unref(uiProp)) == null ? void 0 : _b2.content, (_c = item.ui) == null ? void 0 : _c.content, item.class] })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, item.slot || "content", {
                      item,
                      index,
                      ui: ui.value
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["value", "class"]);
              }), 128)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
