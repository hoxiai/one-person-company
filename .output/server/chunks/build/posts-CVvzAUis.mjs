import { e as useI18n, g as useToast, f as useFormatTime, s as useConfirm, aM as useLocaleRouter, h as useAdminPermissions, x as usePagination, y as useFetch, n as _sfc_main$x, k as _sfc_main$B, b as _sfc_main$G, d as _sfc_main$k, o as _sfc_main$j, l as _sfc_main$h, z as _sfc_main$n, as as useAppConfig, aC as useComponentUI, aj as useForwardPropsEmits, aD as reactivePick, aE as tv, Y as useForwardExpose, V as useVModel, S as useDirection, al as useId, ab as Primitive, ar as useLocale, at as usePortal, ah as reactiveOmit, au as createReusableTemplate, av as isArrayOfArray, aw as _sfc_main$E, ax as get, ay as _sfc_main$C, az as pickLinkProps, aA as _sfc_main$D, aB as omit, t as useSettings, c as _sfc_main$l, O as _sfc_main$g, U as createContext, T as PopperRoot_default, P as PopperAnchor_default, aq as usePrimitiveElement, ap as useEmitAsProps, Q as PopperArrow_default, aF as formBusInjectionKey, aG as formStateInjectionKey, aH as formErrorsInjectionKey, aI as formInputsInjectionKey, aJ as formLoadingInjectionKey, aK as formOptionsInjectionKey, R as createSharedComposable, a3 as getOpenState, ae as Presence_default, an as SUB_CLOSE_KEYS, ai as useForwardProps, ag as getCheckedState, af as isIndeterminate, ac as SELECTION_KEYS$1, am as Teleport_default, aL as useEventBus, aa as useCollection, ao as SUB_OPEN_KEYS, a6 as isMouseEvent, W as useFocusGuards, X as useBodyScrollLock, Z as useTypeahead, $ as getActiveElement, a0 as FocusScope_default, a1 as DismissableLayer_default, a2 as PopperContent_default, a4 as PopperContentPropsDefaultValue, ak as useHideOthers, a5 as isPointerInGraceArea, a7 as FIRST_LAST_KEYS, a8 as LAST_KEYS, a9 as focusFirst, ad as ITEM_SELECT } from './server.mjs';
import { defineComponent, computed, ref, watch, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, isRef, useSlots, useModel, toRef, renderSlot, createSlots, renderList, mergeModels, toRefs, withKeys, nextTick, Fragment, resolveDynamicComponent, normalizeProps, guardReactiveProps, defineAsyncComponent, reactive, watchSyncEffect, useId as useId$1, useTemplateRef, inject, provide, readonly, watchEffect, mergeDefaults, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderSlot, ssrRenderList, ssrRenderVNode, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { dE as defu } from '../nitro/nitro.mjs';
import { u as useArrowNavigation } from './useArrowNavigation-C4FOBlvk.mjs';
import { a as RovingFocusGroup_default } from './RovingFocusItem-DyHBwisL.mjs';
import { u as useFilter, _ as _sfc_main$8 } from './SelectMenu-XuEsUHrt.mjs';
import { _ as _sfc_main$7 } from './Kbd-Bu-poTUg.mjs';
import { _ as _sfc_main$6 } from './Switch-fZeXww_c.mjs';
import { _ as __nuxt_component_7 } from './FullScreenModal-C_oQJW_c.mjs';
import { _ as _sfc_main$9 } from './Checkbox-BmTSvkxP.mjs';
import __nuxt_component_8 from './RichEditor-WjiMyQp3.mjs';
import { u as useImageProxy } from './useImageProxy-CJnFnQot.mjs';
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
import 'node:child_process';
import 'node:os';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import './utils-DD3u_B8M.mjs';
import './virtualizer-BxqhLCyb.mjs';
import './arrays-DNHUHQBd.mjs';
import './VisuallyHiddenInput-32bCuzTQ.mjs';
import './isValueEqualOrExist-BVczPdKj.mjs';
import 'marked';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var MenuAnchor_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuAnchor",
  props: {
    reference: {
      type: null,
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
      return openBlock(), createBlock(unref(PopperAnchor_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var MenuAnchor_default = MenuAnchor_vue_vue_type_script_setup_true_lang_default;
var MenuArrow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuArrow",
  props: {
    width: {
      type: Number,
      required: false
    },
    height: {
      type: Number,
      required: false
    },
    rounded: {
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
      return openBlock(), createBlock(unref(PopperArrow_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var MenuArrow_default = MenuArrow_vue_vue_type_script_setup_true_lang_default;
function useIsUsingKeyboardImpl() {
  const isUsingKeyboard = ref(false);
  return isUsingKeyboard;
}
const useIsUsingKeyboard = createSharedComposable(useIsUsingKeyboardImpl);
const [injectMenuContext, provideMenuContext] = createContext(["MenuRoot", "MenuSub"], "MenuContext");
const [injectMenuRootContext, provideMenuRootContext] = createContext("MenuRoot");
var MenuRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuRoot",
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false
    },
    dir: {
      type: String,
      required: false
    },
    modal: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { modal, dir: propDir } = toRefs(props);
    const dir = useDirection(propDir);
    const open = useVModel(props, "open", emits);
    const content = ref();
    const isUsingKeyboardRef = useIsUsingKeyboard();
    provideMenuContext({
      open,
      onOpenChange: (value) => {
        open.value = value;
      },
      content,
      onContentChange: (element) => {
        content.value = element;
      }
    });
    provideMenuRootContext({
      onClose: () => {
        open.value = false;
      },
      isUsingKeyboardRef,
      dir,
      modal
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperRoot_default), null, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      });
    };
  }
});
var MenuRoot_default = MenuRoot_vue_vue_type_script_setup_true_lang_default;
const [injectMenuContentContext, provideMenuContentContext] = createContext("MenuContent");
var MenuContentImpl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ mergeDefaults({
    loop: {
      type: Boolean,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    },
    disableOutsideScroll: {
      type: Boolean,
      required: false
    },
    trapFocus: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
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
  }, { ...PopperContentPropsDefaultValue }),
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus",
    "dismiss"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const menuContext = injectMenuContext();
    const rootContext = injectMenuRootContext();
    const { trapFocus, disableOutsidePointerEvents, loop } = toRefs(props);
    useFocusGuards();
    useBodyScrollLock(disableOutsidePointerEvents.value);
    const searchRef = ref("");
    const timerRef = ref(0);
    const pointerGraceTimerRef = ref(0);
    const pointerGraceIntentRef = ref(null);
    const pointerDirRef = ref("right");
    const lastPointerXRef = ref(0);
    const currentItemId = ref(null);
    const rovingFocusGroupRef = ref();
    const { forwardRef, currentElement: contentElement } = useForwardExpose();
    const { handleTypeaheadSearch } = useTypeahead();
    const highlightedElement = ref();
    function onKeydownNavigation(event) {
      const el = useArrowNavigation(event, highlightedElement.value || getActiveElement(), contentElement.value, {
        loop: loop.value,
        arrowKeyOptions: "vertical",
        dir: rootContext == null ? void 0 : rootContext.dir.value,
        focus: false,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      if (el) {
        highlightedElement.value = el;
        el.scrollIntoView({ block: "nearest" });
      }
    }
    function onKeydownEnter() {
      if (highlightedElement.value) highlightedElement.value.click();
    }
    const filterElement = ref();
    const activeSubmenuContext = ref();
    watch(highlightedElement, (el) => {
      if (activeSubmenuContext.value && (el === void 0 || el !== activeSubmenuContext.value.trigger.value)) {
        activeSubmenuContext.value.onOpenChange(false);
        activeSubmenuContext.value = void 0;
      }
    });
    watch(contentElement, (el) => {
      menuContext.onContentChange(el);
    });
    function isPointerMovingToSubmenu(event) {
      var _a, _b;
      const isMovingTowards = pointerDirRef.value === ((_a = pointerGraceIntentRef.value) == null ? void 0 : _a.side);
      return isMovingTowards && isPointerInGraceArea(event, (_b = pointerGraceIntentRef.value) == null ? void 0 : _b.area);
    }
    async function handleMountAutoFocus(event) {
      var _a;
      emits("openAutoFocus", event);
      if (event.defaultPrevented) return;
      event.preventDefault();
      (_a = contentElement.value) == null ? void 0 : _a.focus({ preventScroll: true });
    }
    function handleKeyDown(event) {
      var _a, _b;
      if (event.defaultPrevented) return;
      const target = event.target;
      const isKeyDownInside = target.closest("[data-reka-menu-content]") === event.currentTarget;
      const isKeyDownInTextField = ["input", "textarea"].includes(target.tagName.toLowerCase());
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      const isCharacterKey = event.key.length === 1;
      const el = useArrowNavigation(event, getActiveElement(), contentElement.value, {
        loop: loop.value,
        arrowKeyOptions: "vertical",
        dir: rootContext == null ? void 0 : rootContext.dir.value,
        focus: true,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      if (el) return el == null ? void 0 : el.focus();
      if (event.code === "Space") return;
      const collectionItems = (_b = (_a = rovingFocusGroupRef.value) == null ? void 0 : _a.getItems()) != null ? _b : [];
      if (isKeyDownInside) {
        if (event.key === "Tab") event.preventDefault();
        if (!isModifierKey && isCharacterKey && !isKeyDownInTextField) handleTypeaheadSearch(event.key, collectionItems);
      }
      if (event.target !== contentElement.value) return;
      if (!FIRST_LAST_KEYS.includes(event.key)) return;
      event.preventDefault();
      const candidateNodes = [...collectionItems.map((item) => item.ref)];
      if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
      focusFirst(candidateNodes);
    }
    function handleBlur(event) {
      var _a, _b;
      if (!((_b = (_a = event == null ? void 0 : event.currentTarget) == null ? void 0 : _a.contains) == null ? void 0 : _b.call(_a, event.target))) {
        (void 0).clearTimeout(timerRef.value);
        searchRef.value = "";
      }
    }
    function handlePointerMove(event) {
      var _a;
      if (!isMouseEvent(event)) return;
      const target = event.target;
      const pointerXHasChanged = lastPointerXRef.value !== event.clientX;
      if (((_a = event == null ? void 0 : event.currentTarget) == null ? void 0 : _a.contains(target)) && pointerXHasChanged) {
        const newDir = event.clientX > lastPointerXRef.value ? "right" : "left";
        pointerDirRef.value = newDir;
        lastPointerXRef.value = event.clientX;
      }
    }
    function handlePointerEnter(event) {
      if (!isMouseEvent(event)) return;
      if (filterElement.value) filterElement.value.focus();
    }
    provideMenuContentContext({
      onItemEnter: (event) => {
        if (isPointerMovingToSubmenu(event)) return true;
        else return false;
      },
      onItemLeave: (event) => {
        var _a, _b;
        if (isPointerMovingToSubmenu(event)) return;
        const isInputFocused = ["INPUT", "TEXTAREA"].includes(((_a = getActiveElement()) == null ? void 0 : _a.tagName) || "");
        if (!isInputFocused) (_b = contentElement.value) == null ? void 0 : _b.focus();
        currentItemId.value = null;
      },
      onTriggerLeave: (event) => {
        if (isPointerMovingToSubmenu(event)) return true;
        else return false;
      },
      searchRef,
      highlightedElement,
      onKeydownNavigation,
      onKeydownEnter,
      filterElement,
      onFilterElementChange: (el) => {
        filterElement.value = el;
      },
      activeSubmenuContext,
      pointerGraceTimerRef,
      onPointerGraceIntentChange: (intent) => {
        pointerGraceIntentRef.value = intent;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(FocusScope_default), {
        "as-child": "",
        trapped: unref(trapFocus),
        onMountAutoFocus: handleMountAutoFocus,
        onUnmountAutoFocus: _cache[7] || (_cache[7] = ($event) => emits("closeAutoFocus", $event))
      }, {
        default: withCtx(() => [createVNode(unref(DismissableLayer_default), {
          "as-child": "",
          "disable-outside-pointer-events": unref(disableOutsidePointerEvents),
          onEscapeKeyDown: _cache[2] || (_cache[2] = ($event) => emits("escapeKeyDown", $event)),
          onPointerDownOutside: _cache[3] || (_cache[3] = ($event) => emits("pointerDownOutside", $event)),
          onFocusOutside: _cache[4] || (_cache[4] = ($event) => emits("focusOutside", $event)),
          onInteractOutside: _cache[5] || (_cache[5] = ($event) => emits("interactOutside", $event)),
          onDismiss: _cache[6] || (_cache[6] = ($event) => emits("dismiss"))
        }, {
          default: withCtx(() => [createVNode(unref(RovingFocusGroup_default), {
            ref_key: "rovingFocusGroupRef",
            ref: rovingFocusGroupRef,
            "current-tab-stop-id": currentItemId.value,
            "onUpdate:currentTabStopId": _cache[0] || (_cache[0] = ($event) => currentItemId.value = $event),
            "as-child": "",
            orientation: "vertical",
            dir: unref(rootContext).dir.value,
            loop: unref(loop),
            onEntryFocus: _cache[1] || (_cache[1] = (event) => {
              emits("entryFocus", event);
              if (!unref(rootContext).isUsingKeyboardRef.value) event.preventDefault();
            })
          }, {
            default: withCtx(() => [createVNode(unref(PopperContent_default), {
              ref: unref(forwardRef),
              role: "menu",
              as: _ctx.as,
              "as-child": _ctx.asChild,
              "aria-orientation": "vertical",
              "data-reka-menu-content": "",
              "data-state": unref(getOpenState)(unref(menuContext).open.value),
              dir: unref(rootContext).dir.value,
              side: _ctx.side,
              "side-offset": _ctx.sideOffset,
              align: _ctx.align,
              "align-offset": _ctx.alignOffset,
              "avoid-collisions": _ctx.avoidCollisions,
              "collision-boundary": _ctx.collisionBoundary,
              "collision-padding": _ctx.collisionPadding,
              "arrow-padding": _ctx.arrowPadding,
              "prioritize-position": _ctx.prioritizePosition,
              "position-strategy": _ctx.positionStrategy,
              "update-position-strategy": _ctx.updatePositionStrategy,
              sticky: _ctx.sticky,
              "hide-when-detached": _ctx.hideWhenDetached,
              reference: _ctx.reference,
              onKeydown: handleKeyDown,
              onBlur: handleBlur,
              onPointermove: handlePointerMove,
              onPointerenter: handlePointerEnter
            }, {
              default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
              _: 3
            }, 8, [
              "as",
              "as-child",
              "data-state",
              "dir",
              "side",
              "side-offset",
              "align",
              "align-offset",
              "avoid-collisions",
              "collision-boundary",
              "collision-padding",
              "arrow-padding",
              "prioritize-position",
              "position-strategy",
              "update-position-strategy",
              "sticky",
              "hide-when-detached",
              "reference"
            ])]),
            _: 3
          }, 8, [
            "current-tab-stop-id",
            "dir",
            "loop"
          ])]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])]),
        _: 3
      }, 8, ["trapped"]);
    };
  }
});
var MenuContentImpl_default = MenuContentImpl_vue_vue_type_script_setup_true_lang_default;
var MenuItemImpl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "MenuItemImpl",
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
    const contentContext = injectMenuContentContext();
    const { forwardRef, currentElement } = useForwardExpose();
    const { CollectionItem } = useCollection();
    const isFocused = ref(false);
    const isHighlighted = computed(() => isFocused.value || contentContext.highlightedElement.value === currentElement.value);
    async function handlePointerMove(event) {
      var _a;
      if (event.defaultPrevented || !isMouseEvent(event)) return;
      if (props.disabled) contentContext.onItemLeave(event);
      else {
        const defaultPrevented = contentContext.onItemEnter(event);
        if (!defaultPrevented) {
          const item = event.currentTarget;
          contentContext.highlightedElement.value = item;
          const isInputFocused = ["INPUT", "TEXTAREA"].includes(((_a = getActiveElement()) == null ? void 0 : _a.tagName) || "");
          if (!isInputFocused) item.focus({ preventScroll: true });
        }
      }
    }
    async function handlePointerLeave(event) {
      await nextTick();
      if (event.defaultPrevented) return;
      if (!isMouseEvent(event)) return;
      contentContext.onItemLeave(event);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CollectionItem), { value: { textValue: _ctx.textValue } }, {
        default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
          ref: unref(forwardRef),
          role: "menuitem",
          tabindex: "-1"
        }, _ctx.$attrs, {
          as: _ctx.as,
          "as-child": _ctx.asChild,
          "aria-disabled": _ctx.disabled || void 0,
          "data-disabled": _ctx.disabled ? "" : void 0,
          "data-highlighted": isHighlighted.value ? "" : void 0,
          onPointermove: handlePointerMove,
          onPointerleave: handlePointerLeave,
          onFocus: _cache[0] || (_cache[0] = async (event) => {
            await nextTick();
            if (event.defaultPrevented || _ctx.disabled) return;
            isFocused.value = true;
            unref(contentContext).highlightedElement.value = event.currentTarget;
          }),
          onBlur: _cache[1] || (_cache[1] = async (event) => {
            await nextTick();
            if (event.defaultPrevented) return;
            isFocused.value = false;
          })
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "as",
          "as-child",
          "aria-disabled",
          "data-disabled",
          "data-highlighted"
        ])]),
        _: 3
      }, 8, ["value"]);
    };
  }
});
var MenuItemImpl_default = MenuItemImpl_vue_vue_type_script_setup_true_lang_default;
var MenuItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef, currentElement } = useForwardExpose();
    const rootContext = injectMenuRootContext();
    const contentContext = injectMenuContentContext();
    const isPointerDownRef = ref(false);
    async function handleSelect() {
      const menuItem = currentElement.value;
      if (!props.disabled && menuItem) {
        const itemSelectEvent = new CustomEvent(ITEM_SELECT, {
          bubbles: true,
          cancelable: true
        });
        emits("select", itemSelectEvent);
        await nextTick();
        if (itemSelectEvent.defaultPrevented) isPointerDownRef.value = false;
        else rootContext.onClose();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MenuItemImpl_default, mergeProps(props, {
        ref: unref(forwardRef),
        onClick: handleSelect,
        onPointerdown: _cache[0] || (_cache[0] = () => {
          isPointerDownRef.value = true;
        }),
        onPointerup: _cache[1] || (_cache[1] = async (event) => {
          var _a;
          await nextTick();
          if (event.defaultPrevented) return;
          if (!isPointerDownRef.value) (_a = event.currentTarget) == null ? void 0 : _a.click();
        }),
        onKeydown: _cache[2] || (_cache[2] = async (event) => {
          const isTypingAhead = unref(contentContext).searchRef.value !== "";
          if (_ctx.disabled || isTypingAhead && event.key === " ") return;
          if (unref(SELECTION_KEYS$1).includes(event.key)) {
            event.currentTarget.click();
            event.preventDefault();
          }
        })
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var MenuItem_default = MenuItem_vue_vue_type_script_setup_true_lang_default;
const [injectMenuItemIndicatorContext, provideMenuItemIndicatorContext] = createContext(["MenuCheckboxItem", "MenuRadioItem"], "MenuItemIndicatorContext");
var MenuItemIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuItemIndicator",
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
    const indicatorContext = injectMenuItemIndicatorContext({ modelValue: ref(false) });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(isIndeterminate)(unref(indicatorContext).modelValue.value) || unref(indicatorContext).modelValue.value === true }, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          as: _ctx.as,
          "as-child": _ctx.asChild,
          "data-state": unref(getCheckedState)(unref(indicatorContext).modelValue.value)
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "as",
          "as-child",
          "data-state"
        ])]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var MenuItemIndicator_default = MenuItemIndicator_vue_vue_type_script_setup_true_lang_default;
var MenuCheckboxItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuCheckboxItem",
  props: {
    modelValue: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
  emits: ["select", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, ["modelValue"]);
    const forwarded = useForwardProps(delegatedProps);
    const modelValue = useVModel(props, "modelValue", emits);
    provideMenuItemIndicatorContext({ modelValue });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MenuItem_default, mergeProps({ role: "menuitemcheckbox" }, unref(forwarded), {
        "aria-checked": unref(isIndeterminate)(unref(modelValue)) ? "mixed" : unref(modelValue),
        "data-state": unref(getCheckedState)(unref(modelValue)),
        onSelect: _cache[0] || (_cache[0] = async (event) => {
          emits("select", event);
          if (unref(isIndeterminate)(unref(modelValue))) modelValue.value = true;
          else modelValue.value = !unref(modelValue);
        })
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) })]),
        _: 3
      }, 16, ["aria-checked", "data-state"]);
    };
  }
});
var MenuCheckboxItem_default = MenuCheckboxItem_vue_vue_type_script_setup_true_lang_default;
var MenuRootContentModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuRootContentModal",
  props: {
    loop: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
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
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    const menuContext = injectMenuContext();
    const { forwardRef, currentElement } = useForwardExpose();
    useHideOthers(currentElement);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MenuContentImpl_default, mergeProps(unref(forwarded), {
        ref: unref(forwardRef),
        "trap-focus": unref(menuContext).open.value,
        "disable-outside-pointer-events": unref(menuContext).open.value,
        "disable-outside-scroll": true,
        onDismiss: _cache[0] || (_cache[0] = ($event) => unref(menuContext).onOpenChange(false)),
        onFocusOutside: _cache[1] || (_cache[1] = withModifiers(($event) => emits("focusOutside", $event), ["prevent"]))
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["trap-focus", "disable-outside-pointer-events"]);
    };
  }
});
var MenuRootContentModal_default = MenuRootContentModal_vue_vue_type_script_setup_true_lang_default;
var MenuRootContentNonModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuRootContentNonModal",
  props: {
    loop: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
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
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    const menuContext = injectMenuContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MenuContentImpl_default, mergeProps(unref(forwarded), {
        "trap-focus": false,
        "disable-outside-pointer-events": false,
        "disable-outside-scroll": false,
        onDismiss: _cache[0] || (_cache[0] = ($event) => unref(menuContext).onOpenChange(false))
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var MenuRootContentNonModal_default = MenuRootContentNonModal_vue_vue_type_script_setup_true_lang_default;
var MenuContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    loop: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
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
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    const menuContext = injectMenuContext();
    const rootContext = injectMenuRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(menuContext).open.value }, {
        default: withCtx(() => [unref(rootContext).modal.value ? (openBlock(), createBlock(MenuRootContentModal_default, normalizeProps(mergeProps({ key: 0 }, {
          ..._ctx.$attrs,
          ...unref(forwarded)
        })), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16)) : (openBlock(), createBlock(MenuRootContentNonModal_default, normalizeProps(mergeProps({ key: 1 }, {
          ..._ctx.$attrs,
          ...unref(forwarded)
        })), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16))]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var MenuContent_default = MenuContent_vue_vue_type_script_setup_true_lang_default;
const [injectMenuGroupContext, provideMenuGroupContext] = createContext("MenuGroup");
var MenuGroup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuGroup",
  props: {
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
    const id = useId(void 0, "reka-menu-group");
    provideMenuGroupContext({ id });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps({ role: "group" }, props, { "aria-labelledby": unref(id) }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["aria-labelledby"]);
    };
  }
});
var MenuGroup_default = MenuGroup_vue_vue_type_script_setup_true_lang_default;
var MenuLabel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuLabel",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  setup(__props) {
    const props = __props;
    const groupContext = injectMenuGroupContext({ id: "" });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, { id: unref(groupContext).id || void 0 }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var MenuLabel_default = MenuLabel_vue_vue_type_script_setup_true_lang_default;
var MenuPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuPortal",
  props: {
    to: {
      type: null,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    defer: {
      type: Boolean,
      required: false
    },
    forceMount: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var MenuPortal_default = MenuPortal_vue_vue_type_script_setup_true_lang_default;
const [injectMenuRadioGroupContext, provideMenuRadioGroupContext] = createContext("MenuRadioGroup");
var MenuRadioGroup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuRadioGroup",
  props: {
    modelValue: {
      type: null,
      required: false,
      default: ""
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
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, ["modelValue"]);
    const forwarded = useForwardProps(delegatedProps);
    const modelValue = useVModel(props, "modelValue", emits);
    provideMenuRadioGroupContext({
      modelValue,
      onValueChange: (payload) => {
        modelValue.value = payload;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MenuGroup_default, normalizeProps(guardReactiveProps(unref(forwarded))), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) })]),
        _: 3
      }, 16);
    };
  }
});
var MenuRadioGroup_default = MenuRadioGroup_vue_vue_type_script_setup_true_lang_default;
var MenuRadioItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuRadioItem",
  props: {
    value: {
      type: null,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, ["value"]);
    const forwarded = useForwardProps(delegatedProps);
    const { value } = toRefs(props);
    const radioGroupContext = injectMenuRadioGroupContext();
    const modelValue = computed(() => radioGroupContext.modelValue.value === (value == null ? void 0 : value.value));
    provideMenuItemIndicatorContext({ modelValue });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MenuItem_default, mergeProps({ role: "menuitemradio" }, unref(forwarded), {
        "aria-checked": modelValue.value,
        "data-state": unref(getCheckedState)(modelValue.value),
        onSelect: _cache[0] || (_cache[0] = async (event) => {
          emits("select", event);
          unref(radioGroupContext).onValueChange(unref(value));
        })
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["aria-checked", "data-state"]);
    };
  }
});
var MenuRadioItem_default = MenuRadioItem_vue_vue_type_script_setup_true_lang_default;
var MenuSeparator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuSeparator",
  props: {
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
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
        role: "separator",
        "aria-orientation": "horizontal"
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var MenuSeparator_default = MenuSeparator_vue_vue_type_script_setup_true_lang_default;
const [injectMenuSubContext, provideMenuSubContext] = createContext("MenuSub");
var MenuSub_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuSub",
  props: { open: {
    type: Boolean,
    required: false,
    default: void 0
  } },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const open = useVModel(props, "open", emits, {
      defaultValue: false,
      passive: props.open === void 0
    });
    const parentMenuContext = injectMenuContext();
    const trigger = ref();
    const content = ref();
    watchEffect((cleanupFn) => {
      if ((parentMenuContext == null ? void 0 : parentMenuContext.open.value) === false) open.value = false;
      cleanupFn(() => open.value = false);
    });
    provideMenuContext({
      open,
      onOpenChange: (value) => {
        open.value = value;
      },
      content,
      onContentChange: (element) => {
        content.value = element;
      }
    });
    provideMenuSubContext({
      triggerId: "",
      contentId: "",
      trigger,
      onTriggerChange: (element) => {
        trigger.value = element;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperRoot_default), null, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      });
    };
  }
});
var MenuSub_default = MenuSub_vue_vue_type_script_setup_true_lang_default;
var MenuSubContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuSubContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    loop: {
      type: Boolean,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false,
      default: true
    },
    reference: {
      type: null,
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
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    const menuContext = injectMenuContext();
    const rootContext = injectMenuRootContext();
    const menuSubContext = injectMenuSubContext();
    const parentContentContext = injectMenuContentContext();
    const { forwardRef, currentElement: subContentElement } = useForwardExpose();
    menuSubContext.contentId || (menuSubContext.contentId = useId(void 0, "reka-menu-sub-content"));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(menuContext).open.value }, {
        default: withCtx(() => [createVNode(MenuContentImpl_default, mergeProps(unref(forwarded), {
          id: unref(menuSubContext).contentId,
          ref: unref(forwardRef),
          "aria-labelledby": unref(menuSubContext).triggerId,
          align: "start",
          side: unref(rootContext).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": false,
          "disable-outside-scroll": false,
          "trap-focus": false,
          onOpenAutoFocus: _cache[0] || (_cache[0] = withModifiers((event) => {
            var _a;
            if (unref(rootContext).isUsingKeyboardRef.value) (_a = unref(subContentElement)) == null ? void 0 : _a.focus();
          }, ["prevent"])),
          onCloseAutoFocus: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["prevent"])),
          onFocusOutside: _cache[2] || (_cache[2] = (event) => {
            var _a;
            if (event.defaultPrevented) return;
            const isMovingToParentContent = (_a = unref(parentContentContext).filterElement.value) == null ? void 0 : _a.contains(event.target);
            if (event.target !== unref(menuSubContext).trigger.value && !isMovingToParentContent) unref(menuContext).onOpenChange(false);
          }),
          onEscapeKeyDown: _cache[3] || (_cache[3] = (event) => {
            unref(rootContext).onClose();
            event.preventDefault();
          }),
          onKeydown: _cache[4] || (_cache[4] = (event) => {
            var _a, _b, _c;
            const isKeyDownInside = (_a = event.currentTarget) == null ? void 0 : _a.contains(event.target);
            const isCloseKey = unref(SUB_CLOSE_KEYS)[unref(rootContext).dir.value].includes(event.key);
            if (isKeyDownInside && isCloseKey) {
              unref(menuContext).onOpenChange(false);
              if (unref(parentContentContext).filterElement.value) {
                unref(parentContentContext).filterElement.value.focus();
                unref(parentContentContext).highlightedElement.value = unref(menuSubContext).trigger.value;
                (_b = unref(menuSubContext).trigger.value) == null ? void 0 : _b.scrollIntoView({ block: "nearest" });
              } else (_c = unref(menuSubContext).trigger.value) == null ? void 0 : _c.focus();
              event.preventDefault();
            }
          })
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "id",
          "aria-labelledby",
          "side"
        ])]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var MenuSubContent_default = MenuSubContent_vue_vue_type_script_setup_true_lang_default;
var MenuSubTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "MenuSubTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
    const menuContext = injectMenuContext();
    const rootContext = injectMenuRootContext();
    const subContext = injectMenuSubContext();
    const contentContext = injectMenuContentContext();
    watch(menuContext.open, (open) => {
      var _a;
      if (open) contentContext.activeSubmenuContext.value = {
        onOpenChange: menuContext.onOpenChange,
        trigger: subContext.trigger
      };
      else if (((_a = contentContext.activeSubmenuContext.value) == null ? void 0 : _a.trigger.value) === subContext.trigger.value) contentContext.activeSubmenuContext.value = void 0;
    });
    const openTimerRef = ref(null);
    subContext.triggerId || (subContext.triggerId = useId(void 0, "reka-menu-sub-trigger"));
    function clearOpenTimer() {
      if (openTimerRef.value) (void 0).clearTimeout(openTimerRef.value);
      openTimerRef.value = null;
    }
    function handlePointerMove(event) {
      if (!isMouseEvent(event)) return;
      const defaultPrevented = contentContext.onItemEnter(event);
      if (defaultPrevented) return;
      if (!props.disabled && !menuContext.open.value && !openTimerRef.value) {
        contentContext.onPointerGraceIntentChange(null);
        openTimerRef.value = (void 0).setTimeout(() => {
          menuContext.onOpenChange(true);
          clearOpenTimer();
        }, 100);
      }
    }
    async function handlePointerLeave(event) {
      var _a, _b;
      if (!isMouseEvent(event)) return;
      clearOpenTimer();
      const contentRect = (_a = menuContext.content.value) == null ? void 0 : _a.getBoundingClientRect();
      if (contentRect == null ? void 0 : contentRect.width) {
        const side = (_b = menuContext.content.value) == null ? void 0 : _b.dataset.side;
        const rightSide = side === "right";
        const bleed = rightSide ? -5 : 5;
        const contentNearEdge = contentRect[rightSide ? "left" : "right"];
        const contentFarEdge = contentRect[rightSide ? "right" : "left"];
        contentContext.onPointerGraceIntentChange({
          area: [
            {
              x: event.clientX + bleed,
              y: event.clientY
            },
            {
              x: contentNearEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.bottom
            },
            {
              x: contentNearEdge,
              y: contentRect.bottom
            }
          ],
          side
        });
        (void 0).clearTimeout(contentContext.pointerGraceTimerRef.value);
        contentContext.pointerGraceTimerRef.value = (void 0).setTimeout(() => contentContext.onPointerGraceIntentChange(null), 300);
      } else {
        const defaultPrevented = contentContext.onTriggerLeave(event);
        if (defaultPrevented) return;
        contentContext.onPointerGraceIntentChange(null);
      }
    }
    async function handleKeyDown(event) {
      var _a;
      const isTypingAhead = contentContext.searchRef.value !== "";
      if (props.disabled || isTypingAhead && event.key === " ") return;
      if (SUB_OPEN_KEYS[rootContext.dir.value].includes(event.key)) {
        menuContext.onOpenChange(true);
        await nextTick();
        (_a = menuContext.content.value) == null ? void 0 : _a.focus();
        event.preventDefault();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MenuAnchor_default, { "as-child": "" }, {
        default: withCtx(() => [createVNode(MenuItemImpl_default, mergeProps(props, {
          id: unref(subContext).triggerId,
          ref: (vnode) => {
            var _a;
            (_a = unref(subContext)) == null ? void 0 : _a.onTriggerChange(vnode == null ? void 0 : vnode.$el);
            return void 0;
          },
          "aria-haspopup": "menu",
          "aria-expanded": unref(menuContext).open.value,
          "aria-controls": unref(subContext).contentId,
          "data-state": unref(getOpenState)(unref(menuContext).open.value),
          onClick: _cache[0] || (_cache[0] = async (event) => {
            if (props.disabled || event.defaultPrevented) return;
            event.currentTarget.focus();
            if (!unref(menuContext).open.value) unref(menuContext).onOpenChange(true);
          }),
          onPointermove: handlePointerMove,
          onPointerleave: handlePointerLeave,
          onKeydown: handleKeyDown
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "id",
          "aria-expanded",
          "aria-controls",
          "data-state"
        ])]),
        _: 3
      });
    };
  }
});
var MenuSubTrigger_default = MenuSubTrigger_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuArrow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuArrow",
  props: {
    width: {
      type: Number,
      required: false,
      default: 10
    },
    height: {
      type: Number,
      required: false,
      default: 5
    },
    rounded: {
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
      default: "svg"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MenuArrow_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuArrow_default = DropdownMenuArrow_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuCheckboxItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuCheckboxItem",
  props: {
    modelValue: {
      type: [Boolean, String],
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
  emits: ["select", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const emitsAsProps = useEmitAsProps(emits);
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MenuCheckboxItem_default), normalizeProps(guardReactiveProps({
        ...props,
        ...unref(emitsAsProps)
      })), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuCheckboxItem_default = DropdownMenuCheckboxItem_vue_vue_type_script_setup_true_lang_default;
const [injectDropdownMenuRootContext, provideDropdownMenuRootContext] = createContext("DropdownMenuRoot");
var DropdownMenuRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: false
    },
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    dir: {
      type: String,
      required: false
    },
    modal: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    useForwardExpose();
    const open = useVModel(props, "open", emit, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    const triggerElement = ref();
    const { modal, dir: propDir } = toRefs(props);
    const dir = useDirection(propDir);
    provideDropdownMenuRootContext({
      open,
      onOpenChange: (value) => {
        open.value = value;
      },
      onOpenToggle: () => {
        open.value = !open.value;
      },
      triggerId: "",
      triggerElement,
      contentId: "",
      modal,
      dir
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MenuRoot_default), {
        open: unref(open),
        "onUpdate:open": _cache[0] || (_cache[0] = ($event) => isRef(open) ? open.value = $event : null),
        dir: unref(dir),
        modal: unref(modal)
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open: unref(open) })]),
        _: 3
      }, 8, [
        "open",
        "dir",
        "modal"
      ]);
    };
  }
});
var DropdownMenuRoot_default = DropdownMenuRoot_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    loop: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
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
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    useForwardExpose();
    const rootContext = injectDropdownMenuRootContext();
    const hasInteractedOutsideRef = ref(false);
    function handleCloseAutoFocus(event) {
      if (event.defaultPrevented) return;
      if (!hasInteractedOutsideRef.value) setTimeout(() => {
        var _a;
        (_a = rootContext.triggerElement.value) == null ? void 0 : _a.focus();
      }, 0);
      hasInteractedOutsideRef.value = false;
      event.preventDefault();
    }
    rootContext.contentId || (rootContext.contentId = useId(void 0, "reka-dropdown-menu-content"));
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(unref(MenuContent_default), mergeProps(unref(forwarded), {
        id: unref(rootContext).contentId,
        "aria-labelledby": (_a = unref(rootContext)) == null ? void 0 : _a.triggerId,
        style: {
          "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
          "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
          "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
        },
        onCloseAutoFocus: handleCloseAutoFocus,
        onInteractOutside: _cache[0] || (_cache[0] = (event) => {
          var _a2;
          if (event.defaultPrevented) return;
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (!unref(rootContext).modal.value || isRightClick) hasInteractedOutsideRef.value = true;
          if ((_a2 = unref(rootContext).triggerElement.value) == null ? void 0 : _a2.contains(event.target)) event.preventDefault();
        })
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
});
var DropdownMenuContent_default = DropdownMenuContent_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuFilter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuFilter",
  props: {
    modelValue: {
      type: String,
      required: false
    },
    autoFocus: {
      type: Boolean,
      required: false
    },
    disabled: {
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
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: "",
      passive: props.modelValue === void 0
    });
    injectMenuRootContext();
    const contentContext = injectMenuContentContext();
    injectMenuSubContext(null);
    watch(modelValue, (v) => {
      contentContext.searchRef.value = v != null ? v : "";
    }, { immediate: true });
    const { primitiveElement } = usePrimitiveElement();
    const disabled = computed(() => props.disabled || false);
    const activedescendant = ref();
    watchSyncEffect(() => {
      var _a;
      return activedescendant.value = (_a = contentContext.highlightedElement.value) == null ? void 0 : _a.id;
    });
    function handleInput(event) {
      if (disabled.value) return;
      const target = event.target;
      modelValue.value = target.value;
      contentContext.searchRef.value = target.value;
    }
    function handleKeyDown(event) {
      if (disabled.value) return;
      if ([
        "ArrowDown",
        "ArrowUp",
        "Home",
        "End"
      ].includes(event.key)) {
        event.preventDefault();
        contentContext.onKeydownNavigation(event);
      } else if (event.key === "Enter") {
        event.preventDefault();
        contentContext.onKeydownEnter(event);
      } else if (event.key === "Escape" && modelValue.value) {
        event.stopPropagation();
        modelValue.value = "";
        contentContext.searchRef.value = "";
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref_key: "primitiveElement",
        ref: primitiveElement,
        as: _ctx.as,
        "as-child": _ctx.asChild,
        value: unref(modelValue),
        disabled: disabled.value ? "" : void 0,
        "data-disabled": disabled.value ? "" : void 0,
        "aria-disabled": disabled.value ? true : void 0,
        "aria-activedescendant": activedescendant.value,
        type: "text",
        role: "searchbox",
        onInput: handleInput,
        onKeydown: handleKeyDown
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) })]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "value",
        "disabled",
        "data-disabled",
        "aria-disabled",
        "aria-activedescendant"
      ]);
    };
  }
});
var DropdownMenuFilter_default = DropdownMenuFilter_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuGroup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuGroup",
  props: {
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
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MenuGroup_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuGroup_default = DropdownMenuGroup_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const emitsAsProps = useEmitAsProps(emits);
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MenuItem_default), normalizeProps(guardReactiveProps({
        ...props,
        ...unref(emitsAsProps)
      })), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuItem_default = DropdownMenuItem_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuItemIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuItemIndicator",
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
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MenuItemIndicator_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuItemIndicator_default = DropdownMenuItemIndicator_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuLabel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuLabel",
  props: {
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
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MenuLabel_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuLabel_default = DropdownMenuLabel_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuPortal",
  props: {
    to: {
      type: null,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    defer: {
      type: Boolean,
      required: false
    },
    forceMount: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MenuPortal_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuPortal_default = DropdownMenuPortal_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuRadioGroup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {
      type: null,
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
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const emitsAsProps = useEmitAsProps(emits);
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MenuRadioGroup_default), normalizeProps(guardReactiveProps({
        ...props,
        ...unref(emitsAsProps)
      })), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuRadioGroup_default = DropdownMenuRadioGroup_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuRadioItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {
      type: null,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MenuRadioItem_default), normalizeProps(guardReactiveProps(unref(forwarded))), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuRadioItem_default = DropdownMenuRadioItem_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuSeparator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
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
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MenuSeparator_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuSeparator_default = DropdownMenuSeparator_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuSub_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: {
      type: Boolean,
      required: false
    },
    open: {
      type: Boolean,
      required: false,
      default: void 0
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const emit = __emit;
    const open = useVModel(props, "open", emit, {
      passive: props.open === void 0,
      defaultValue: (_a = props.defaultOpen) != null ? _a : false
    });
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MenuSub_default), {
        open: unref(open),
        "onUpdate:open": _cache[0] || (_cache[0] = ($event) => isRef(open) ? open.value = $event : null)
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open: unref(open) })]),
        _: 3
      }, 8, ["open"]);
    };
  }
});
var DropdownMenuSub_default = DropdownMenuSub_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuSubContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSubContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    loop: {
      type: Boolean,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
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
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MenuSubContent_default), mergeProps(unref(forwarded), { style: {
        "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
        "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
        "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
        "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
        "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
      } }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuSubContent_default = DropdownMenuSubContent_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuSubTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
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
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MenuSubTrigger_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DropdownMenuSubTrigger_default = DropdownMenuSubTrigger_vue_vue_type_script_setup_true_lang_default;
var DropdownMenuTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: {
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
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectDropdownMenuRootContext();
    const { forwardRef } = useForwardExpose();
    rootContext.triggerId || (rootContext.triggerId = useId(void 0, "reka-dropdown-menu-trigger"));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MenuAnchor_default), { "as-child": "" }, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          id: unref(rootContext).triggerId,
          ref: unref(forwardRef),
          type: _ctx.as === "button" ? "button" : void 0,
          "as-child": props.asChild,
          as: _ctx.as,
          "aria-haspopup": "menu",
          "aria-expanded": unref(rootContext).open.value,
          "aria-controls": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
          "data-disabled": _ctx.disabled ? "" : void 0,
          disabled: _ctx.disabled,
          "data-state": unref(rootContext).open.value ? "open" : "closed",
          onClick: _cache[0] || (_cache[0] = async (event) => {
            var _a;
            if (!_ctx.disabled && event.button === 0 && event.ctrlKey === false) {
              (_a = unref(rootContext)) == null ? void 0 : _a.onOpenToggle();
              await nextTick();
              if (unref(rootContext).open.value) event.preventDefault();
            }
          }),
          onKeydown: _cache[1] || (_cache[1] = withKeys((event) => {
            if (_ctx.disabled) return;
            if (["Enter", " "].includes(event.key)) unref(rootContext).onOpenToggle();
            if (event.key === "ArrowDown") unref(rootContext).onOpenChange(true);
            if ([
              "Enter",
              " ",
              "ArrowDown"
            ].includes(event.key)) event.preventDefault();
          }, [
            "enter",
            "space",
            "arrow-down"
          ]))
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "id",
          "type",
          "as-child",
          "as",
          "aria-expanded",
          "aria-controls",
          "data-disabled",
          "disabled",
          "data-state"
        ])]),
        _: 3
      });
    };
  }
});
var DropdownMenuTrigger_default = DropdownMenuTrigger_vue_vue_type_script_setup_true_lang_default;
const DropdownMenu = {
  Root: DropdownMenuRoot_default,
  Trigger: DropdownMenuTrigger_default,
  Portal: DropdownMenuPortal_default,
  Content: DropdownMenuContent_default,
  Arrow: DropdownMenuArrow_default,
  Item: DropdownMenuItem_default,
  Group: DropdownMenuGroup_default,
  Separator: DropdownMenuSeparator_default,
  CheckboxItem: DropdownMenuCheckboxItem_default,
  ItemIndicator: DropdownMenuItemIndicator_default,
  Label: DropdownMenuLabel_default,
  RadioGroup: DropdownMenuRadioGroup_default,
  RadioItem: DropdownMenuRadioItem_default,
  Sub: DropdownMenuSub_default,
  SubContent: DropdownMenuSubContent_default,
  SubTrigger: DropdownMenuSubTrigger_default,
  Filter: DropdownMenuFilter_default
};
const _sfc_main$5 = {
  __name: "UDropdownMenuContent",
  __ssrInlineRender: true,
  props: {
    items: { type: null, required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true },
    sub: { type: Boolean, required: false },
    labelKey: { type: null, required: true },
    descriptionKey: { type: null, required: true },
    checkedIcon: { type: null, required: false },
    loadingIcon: { type: null, required: false },
    externalIcon: { type: [Boolean, String], required: false, skipCheck: true },
    size: { type: null, required: false },
    filter: { type: [Boolean, Object], required: false },
    filterFields: { type: Array, required: false },
    ignoreFilter: { type: Boolean, required: false },
    searchTerm: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: true },
    uiOverride: { type: null, required: false },
    loop: { type: Boolean, required: false },
    side: { type: null, required: false },
    sideOffset: { type: Number, required: false },
    sideFlip: { type: Boolean, required: false },
    align: { type: null, required: false },
    alignOffset: { type: Number, required: false },
    alignFlip: { type: Boolean, required: false },
    avoidCollisions: { type: Boolean, required: false },
    collisionBoundary: { type: null, required: false },
    collisionPadding: { type: [Number, Object], required: false },
    arrowPadding: { type: Number, required: false },
    hideShiftedArrow: { type: Boolean, required: false },
    sticky: { type: String, required: false },
    hideWhenDetached: { type: Boolean, required: false },
    positionStrategy: { type: String, required: false },
    updatePositionStrategy: { type: String, required: false },
    disableUpdateOnLayoutShift: { type: Boolean, required: false },
    prioritizePosition: { type: Boolean, required: false },
    reference: { type: null, required: false }
  },
  emits: ["update:searchTerm", "escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t, dir } = useLocale();
    const appConfig = useAppConfig();
    const { filterGroups } = useFilter();
    const _searchTerm = ref("");
    const searchTerm = computed({
      get: () => {
        var _a;
        return (_a = props.searchTerm) != null ? _a : _searchTerm.value;
      },
      set: (value) => {
        _searchTerm.value = value;
        emits("update:searchTerm", value);
      }
    });
    const inputProps = toRef(() => defu(props.filter, { placeholder: t("dropdownMenu.search"), variant: "none" }));
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = useForwardPropsEmits(reactiveOmit(props, "sub", "items", "portal", "labelKey", "descriptionKey", "checkedIcon", "loadingIcon", "externalIcon", "size", "filter", "filterFields", "ignoreFilter", "searchTerm", "class", "ui", "uiOverride"), emits);
    const getProxySlots = () => omit(slots, ["default"]);
    const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate();
    const childrenIcon = computed(() => dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight);
    const groups = computed(() => {
      var _a;
      if (!((_a = props.items) == null ? void 0 : _a.length)) return [];
      return isArrayOfArray(props.items) ? props.items : [props.items];
    });
    const isStructuralItem = (item) => !!item.type && ["label", "separator"].includes(item.type);
    const filteredGroups = computed(() => {
      if (!props.filter || props.ignoreFilter || !searchTerm.value) {
        return groups.value;
      }
      const fields = Array.isArray(props.filterFields) && props.filterFields.length ? props.filterFields : [props.labelKey];
      return filterGroups(groups.value, searchTerm.value, {
        fields,
        isStructural: isStructuralItem
      });
    });
    const hasFilteredItems = computed(() => filteredGroups.value.some((group) => group.some((item) => !isStructuralItem(item))));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineItemTemplate), null, {
        default: withCtx(({ item, active, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, item.slot || "item", {
              item,
              index,
              ui: __props.ui
            }, () => {
              var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                item,
                active,
                index,
                ui: __props.ui
              }, () => {
                var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
                if (item.loading) {
                  _push2(ssrRenderComponent(_sfc_main$G, {
                    name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                    "data-slot": "itemLeadingIcon",
                    class: __props.ui.itemLeadingIcon({ class: [(_a2 = __props.uiOverride) == null ? void 0 : _a2.itemLeadingIcon, (_b2 = item.ui) == null ? void 0 : _b2.itemLeadingIcon], color: item == null ? void 0 : item.color, loading: true })
                  }, null, _parent2, _scopeId));
                } else if (item.icon) {
                  _push2(ssrRenderComponent(_sfc_main$G, {
                    name: item.icon,
                    "data-slot": "itemLeadingIcon",
                    class: __props.ui.itemLeadingIcon({ class: [(_c2 = __props.uiOverride) == null ? void 0 : _c2.itemLeadingIcon, (_d2 = item.ui) == null ? void 0 : _d2.itemLeadingIcon], color: item == null ? void 0 : item.color, active })
                  }, null, _parent2, _scopeId));
                } else if (item.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$E, mergeProps({
                    size: ((_e2 = item.ui) == null ? void 0 : _e2.itemLeadingAvatarSize) || ((_f2 = __props.uiOverride) == null ? void 0 : _f2.itemLeadingAvatarSize) || __props.ui.itemLeadingAvatarSize()
                  }, item.avatar, {
                    "data-slot": "itemLeadingAvatar",
                    class: __props.ui.itemLeadingAvatar({ class: [(_g2 = __props.uiOverride) == null ? void 0 : _g2.itemLeadingAvatar, (_h2 = item.ui) == null ? void 0 : _h2.itemLeadingAvatar], active })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              if (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] || (unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"])) {
                _push2(`<span data-slot="itemWrapper" class="${ssrRenderClass(__props.ui.itemWrapper({ class: [(_a = __props.uiOverride) == null ? void 0 : _a.itemWrapper, (_b = item.ui) == null ? void 0 : _b.itemWrapper] }))}"${_scopeId}><span data-slot="itemLabel" class="${ssrRenderClass(__props.ui.itemLabel({ class: [(_c = __props.uiOverride) == null ? void 0 : _c.itemLabel, (_d = item.ui) == null ? void 0 : _d.itemLabel], active }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                  item,
                  active,
                  index
                }, () => {
                  _push2(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                }, _push2, _parent2, _scopeId);
                if (item.target === "_blank" && __props.externalIcon !== false) {
                  _push2(ssrRenderComponent(_sfc_main$G, {
                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                    "data-slot": "itemLabelExternalIcon",
                    class: __props.ui.itemLabelExternalIcon({ class: [(_e = __props.uiOverride) == null ? void 0 : _e.itemLabelExternalIcon, (_f = item.ui) == null ? void 0 : _f.itemLabelExternalIcon], color: item == null ? void 0 : item.color, active })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
                if (unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"]) {
                  _push2(`<span data-slot="itemDescription" class="${ssrRenderClass(__props.ui.itemDescription({ class: [(_g = __props.uiOverride) == null ? void 0 : _g.itemDescription, (_h = item.ui) == null ? void 0 : _h.itemDescription] }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "item-description", {
                    item,
                    active,
                    index
                  }, () => {
                    _push2(`${ssrInterpolate(unref(get)(item, props.descriptionKey))}`);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span data-slot="itemTrailing" class="${ssrRenderClass(__props.ui.itemTrailing({ class: [(_i = __props.uiOverride) == null ? void 0 : _i.itemTrailing, (_j = item.ui) == null ? void 0 : _j.itemTrailing] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                item,
                active,
                index,
                ui: __props.ui
              }, () => {
                var _a2, _b2, _c2, _d2, _e2, _f2;
                if ((_a2 = item.children) == null ? void 0 : _a2.length) {
                  _push2(ssrRenderComponent(_sfc_main$G, {
                    name: childrenIcon.value,
                    "data-slot": "itemTrailingIcon",
                    class: __props.ui.itemTrailingIcon({ class: [(_b2 = __props.uiOverride) == null ? void 0 : _b2.itemTrailingIcon, (_c2 = item.ui) == null ? void 0 : _c2.itemTrailingIcon], color: item == null ? void 0 : item.color, active })
                  }, null, _parent2, _scopeId));
                } else if ((_d2 = item.kbds) == null ? void 0 : _d2.length) {
                  _push2(`<span data-slot="itemTrailingKbds" class="${ssrRenderClass(__props.ui.itemTrailingKbds({ class: [(_e2 = __props.uiOverride) == null ? void 0 : _e2.itemTrailingKbds, (_f2 = item.ui) == null ? void 0 : _f2.itemTrailingKbds] }))}"${_scopeId}><!--[-->`);
                  ssrRenderList(item.kbds, (kbd, kbdIndex) => {
                    var _a3, _b3;
                    _push2(ssrRenderComponent(_sfc_main$7, mergeProps({
                      key: kbdIndex,
                      size: ((_a3 = item.ui) == null ? void 0 : _a3.itemTrailingKbdsSize) || ((_b3 = __props.uiOverride) == null ? void 0 : _b3.itemTrailingKbdsSize) || __props.ui.itemTrailingKbdsSize()
                    }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></span>`);
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(ssrRenderComponent(unref(DropdownMenu).ItemIndicator, { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2, _c2, _d2;
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$G, {
                      name: __props.checkedIcon || unref(appConfig).ui.icons.check,
                      "data-slot": "itemTrailingIcon",
                      class: __props.ui.itemTrailingIcon({ class: [(_a2 = __props.uiOverride) == null ? void 0 : _a2.itemTrailingIcon, (_b2 = item.ui) == null ? void 0 : _b2.itemTrailingIcon], color: item == null ? void 0 : item.color })
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$G, {
                        name: __props.checkedIcon || unref(appConfig).ui.icons.check,
                        "data-slot": "itemTrailingIcon",
                        class: __props.ui.itemTrailingIcon({ class: [(_c2 = __props.uiOverride) == null ? void 0 : _c2.itemTrailingIcon, (_d2 = item.ui) == null ? void 0 : _d2.itemTrailingIcon], color: item == null ? void 0 : item.color })
                      }, null, 8, ["name", "class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, item.slot || "item", {
                item,
                index,
                ui: __props.ui
              }, () => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
                return [
                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                    item,
                    active,
                    index,
                    ui: __props.ui
                  }, () => {
                    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
                    return [
                      item.loading ? (openBlock(), createBlock(_sfc_main$G, {
                        key: 0,
                        name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                        "data-slot": "itemLeadingIcon",
                        class: __props.ui.itemLeadingIcon({ class: [(_a2 = __props.uiOverride) == null ? void 0 : _a2.itemLeadingIcon, (_b2 = item.ui) == null ? void 0 : _b2.itemLeadingIcon], color: item == null ? void 0 : item.color, loading: true })
                      }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$G, {
                        key: 1,
                        name: item.icon,
                        "data-slot": "itemLeadingIcon",
                        class: __props.ui.itemLeadingIcon({ class: [(_c2 = __props.uiOverride) == null ? void 0 : _c2.itemLeadingIcon, (_d2 = item.ui) == null ? void 0 : _d2.itemLeadingIcon], color: item == null ? void 0 : item.color, active })
                      }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$E, mergeProps({
                        key: 2,
                        size: ((_e2 = item.ui) == null ? void 0 : _e2.itemLeadingAvatarSize) || ((_f2 = __props.uiOverride) == null ? void 0 : _f2.itemLeadingAvatarSize) || __props.ui.itemLeadingAvatarSize()
                      }, item.avatar, {
                        "data-slot": "itemLeadingAvatar",
                        class: __props.ui.itemLeadingAvatar({ class: [(_g2 = __props.uiOverride) == null ? void 0 : _g2.itemLeadingAvatar, (_h2 = item.ui) == null ? void 0 : _h2.itemLeadingAvatar], active })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                    ];
                  }),
                  unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] || (unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"]) ? (openBlock(), createBlock("span", {
                    key: 0,
                    "data-slot": "itemWrapper",
                    class: __props.ui.itemWrapper({ class: [(_a = __props.uiOverride) == null ? void 0 : _a.itemWrapper, (_b = item.ui) == null ? void 0 : _b.itemWrapper] })
                  }, [
                    createVNode("span", {
                      "data-slot": "itemLabel",
                      class: __props.ui.itemLabel({ class: [(_c = __props.uiOverride) == null ? void 0 : _c.itemLabel, (_d = item.ui) == null ? void 0 : _d.itemLabel], active })
                    }, [
                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                        item,
                        active,
                        index
                      }, () => [
                        createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                      ]),
                      item.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$G, {
                        key: 0,
                        name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                        "data-slot": "itemLabelExternalIcon",
                        class: __props.ui.itemLabelExternalIcon({ class: [(_e = __props.uiOverride) == null ? void 0 : _e.itemLabelExternalIcon, (_f = item.ui) == null ? void 0 : _f.itemLabelExternalIcon], color: item == null ? void 0 : item.color, active })
                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                    ], 2),
                    unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"] ? (openBlock(), createBlock("span", {
                      key: 0,
                      "data-slot": "itemDescription",
                      class: __props.ui.itemDescription({ class: [(_g = __props.uiOverride) == null ? void 0 : _g.itemDescription, (_h = item.ui) == null ? void 0 : _h.itemDescription] })
                    }, [
                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "item-description", {
                        item,
                        active,
                        index
                      }, () => [
                        createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  createVNode("span", {
                    "data-slot": "itemTrailing",
                    class: __props.ui.itemTrailing({ class: [(_i = __props.uiOverride) == null ? void 0 : _i.itemTrailing, (_j = item.ui) == null ? void 0 : _j.itemTrailing] })
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                      item,
                      active,
                      index,
                      ui: __props.ui
                    }, () => {
                      var _a2, _b2, _c2, _d2, _e2, _f2;
                      return [
                        ((_a2 = item.children) == null ? void 0 : _a2.length) ? (openBlock(), createBlock(_sfc_main$G, {
                          key: 0,
                          name: childrenIcon.value,
                          "data-slot": "itemTrailingIcon",
                          class: __props.ui.itemTrailingIcon({ class: [(_b2 = __props.uiOverride) == null ? void 0 : _b2.itemTrailingIcon, (_c2 = item.ui) == null ? void 0 : _c2.itemTrailingIcon], color: item == null ? void 0 : item.color, active })
                        }, null, 8, ["name", "class"])) : ((_d2 = item.kbds) == null ? void 0 : _d2.length) ? (openBlock(), createBlock("span", {
                          key: 1,
                          "data-slot": "itemTrailingKbds",
                          class: __props.ui.itemTrailingKbds({ class: [(_e2 = __props.uiOverride) == null ? void 0 : _e2.itemTrailingKbds, (_f2 = item.ui) == null ? void 0 : _f2.itemTrailingKbds] })
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                            var _a3, _b3;
                            return openBlock(), createBlock(_sfc_main$7, mergeProps({
                              key: kbdIndex,
                              size: ((_a3 = item.ui) == null ? void 0 : _a3.itemTrailingKbdsSize) || ((_b3 = __props.uiOverride) == null ? void 0 : _b3.itemTrailingKbdsSize) || __props.ui.itemTrailingKbdsSize()
                            }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                          }), 128))
                        ], 2)) : createCommentVNode("", true)
                      ];
                    }),
                    createVNode(unref(DropdownMenu).ItemIndicator, { "as-child": "" }, {
                      default: withCtx(() => {
                        var _a2, _b2;
                        return [
                          createVNode(_sfc_main$G, {
                            name: __props.checkedIcon || unref(appConfig).ui.icons.check,
                            "data-slot": "itemTrailingIcon",
                            class: __props.ui.itemTrailingIcon({ class: [(_a2 = __props.uiOverride) == null ? void 0 : _a2.itemTrailingIcon, (_b2 = item.ui) == null ? void 0 : _b2.itemTrailingIcon], color: item == null ? void 0 : item.color })
                          }, null, 8, ["name", "class"])
                        ];
                      }),
                      _: 2
                    }, 1024)
                  ], 2)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DropdownMenu).Portal, unref(portalProps), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.sub ? unref(DropdownMenu).SubContent : unref(DropdownMenu).Content), mergeProps({
              "data-slot": "content",
              class: __props.ui.content({ class: [(_a = __props.uiOverride) == null ? void 0 : _a.content, props.class] })
            }, unref(contentProps)), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c, _d, _e, _f, _g, _h;
                if (_push3) {
                  if (!!__props.filter) {
                    _push3(ssrRenderComponent(unref(DropdownMenu).Filter, {
                      modelValue: searchTerm.value,
                      "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                      "as-child": ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a3, _b3;
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$k, mergeProps({
                            autofocus: "",
                            autocomplete: "off",
                            size: __props.size
                          }, inputProps.value, {
                            "data-slot": "input",
                            class: __props.ui.input({ class: (_a3 = __props.uiOverride) == null ? void 0 : _a3.input }),
                            onChange: () => {
                            }
                          }), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$k, mergeProps({
                              autofocus: "",
                              autocomplete: "off",
                              size: __props.size
                            }, inputProps.value, {
                              "data-slot": "input",
                              class: __props.ui.input({ class: (_b3 = __props.uiOverride) == null ? void 0 : _b3.input }),
                              onChange: withModifiers(() => {
                              }, ["stop"])
                            }), null, 16, ["size", "class", "onChange"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  ssrRenderSlot(_ctx.$slots, "content-top", {
                    sub: (_a2 = __props.sub) != null ? _a2 : false
                  }, null, _push3, _parent3, _scopeId2);
                  if (!searchTerm.value || hasFilteredItems.value) {
                    _push3(`<div role="presentation" data-slot="viewport" class="${ssrRenderClass(__props.ui.viewport({ class: (_b2 = __props.uiOverride) == null ? void 0 : _b2.viewport }))}"${_scopeId2}><!--[-->`);
                    ssrRenderList(filteredGroups.value, (group, groupIndex) => {
                      var _a3;
                      _push3(ssrRenderComponent(unref(DropdownMenu).Group, {
                        key: `group-${groupIndex}`,
                        "data-slot": "group",
                        class: __props.ui.group({ class: (_a3 = __props.uiOverride) == null ? void 0 : _a3.group })
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(group, (item, index) => {
                              var _a4, _b3, _c2, _d2, _e2, _f2, _g2;
                              _push4(`<!--[-->`);
                              if (item.type === "label") {
                                _push4(ssrRenderComponent(unref(DropdownMenu).Label, {
                                  "data-slot": "label",
                                  class: __props.ui.label({ class: [(_a4 = __props.uiOverride) == null ? void 0 : _a4.label, (_b3 = item.ui) == null ? void 0 : _b3.label, item.class] })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(ssrRenderComponent(unref(ReuseItemTemplate), {
                                        item,
                                        index
                                      }, null, _parent5, _scopeId4));
                                    } else {
                                      return [
                                        createVNode(unref(ReuseItemTemplate), {
                                          item,
                                          index
                                        }, null, 8, ["item", "index"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else if (item.type === "separator") {
                                _push4(ssrRenderComponent(unref(DropdownMenu).Separator, {
                                  "data-slot": "separator",
                                  class: __props.ui.separator({ class: [(_c2 = __props.uiOverride) == null ? void 0 : _c2.separator, (_d2 = item.ui) == null ? void 0 : _d2.separator, item.class] })
                                }, null, _parent4, _scopeId3));
                              } else if ((_e2 = item == null ? void 0 : item.children) == null ? void 0 : _e2.length) {
                                _push4(ssrRenderComponent(unref(DropdownMenu).Sub, {
                                  open: item.open,
                                  "default-open": item.defaultOpen
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    var _a5, _b4, _c3, _d3, _e3, _f3, _g3, _h2;
                                    if (_push5) {
                                      _push5(ssrRenderComponent(unref(DropdownMenu).SubTrigger, {
                                        as: "button",
                                        type: "button",
                                        disabled: item.disabled,
                                        "text-value": unref(get)(item, props.labelKey),
                                        "data-slot": "item",
                                        class: __props.ui.item({ class: [(_a5 = __props.uiOverride) == null ? void 0 : _a5.item, (_b4 = item.ui) == null ? void 0 : _b4.item, item.class], color: item == null ? void 0 : item.color })
                                      }, {
                                        default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(ssrRenderComponent(unref(ReuseItemTemplate), {
                                              item,
                                              index
                                            }, null, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              createVNode(unref(ReuseItemTemplate), {
                                                item,
                                                index
                                              }, null, 8, ["item", "index"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                      _push5(ssrRenderComponent(_sfc_main$5, mergeProps({
                                        sub: "",
                                        class: (_c3 = item.ui) == null ? void 0 : _c3.content,
                                        ui: __props.ui,
                                        "ui-override": __props.uiOverride,
                                        portal: __props.portal,
                                        items: item.children,
                                        align: "start",
                                        "align-offset": -4,
                                        "side-offset": 3,
                                        "label-key": __props.labelKey,
                                        "description-key": __props.descriptionKey,
                                        "checked-icon": __props.checkedIcon,
                                        "loading-icon": __props.loadingIcon,
                                        "external-icon": __props.externalIcon,
                                        size: __props.size,
                                        filter: item.filter,
                                        "filter-fields": item.filterFields || __props.filterFields,
                                        "ignore-filter": (_d3 = item.ignoreFilter) != null ? _d3 : __props.ignoreFilter
                                      }, { ref_for: true }, item.content), createSlots({ _: 2 }, [
                                        renderList(getProxySlots(), (_5, name) => {
                                          return {
                                            name,
                                            fn: withCtx((slotData, _push6, _parent6, _scopeId5) => {
                                              if (_push6) {
                                                ssrRenderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData), null, _push6, _parent6, _scopeId5);
                                              } else {
                                                return [
                                                  renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                                ];
                                              }
                                            })
                                          };
                                        })
                                      ]), _parent5, _scopeId4));
                                    } else {
                                      return [
                                        createVNode(unref(DropdownMenu).SubTrigger, {
                                          as: "button",
                                          type: "button",
                                          disabled: item.disabled,
                                          "text-value": unref(get)(item, props.labelKey),
                                          "data-slot": "item",
                                          class: __props.ui.item({ class: [(_e3 = __props.uiOverride) == null ? void 0 : _e3.item, (_f3 = item.ui) == null ? void 0 : _f3.item, item.class], color: item == null ? void 0 : item.color })
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(ReuseItemTemplate), {
                                              item,
                                              index
                                            }, null, 8, ["item", "index"])
                                          ]),
                                          _: 2
                                        }, 1032, ["disabled", "text-value", "class"]),
                                        createVNode(_sfc_main$5, mergeProps({
                                          sub: "",
                                          class: (_g3 = item.ui) == null ? void 0 : _g3.content,
                                          ui: __props.ui,
                                          "ui-override": __props.uiOverride,
                                          portal: __props.portal,
                                          items: item.children,
                                          align: "start",
                                          "align-offset": -4,
                                          "side-offset": 3,
                                          "label-key": __props.labelKey,
                                          "description-key": __props.descriptionKey,
                                          "checked-icon": __props.checkedIcon,
                                          "loading-icon": __props.loadingIcon,
                                          "external-icon": __props.externalIcon,
                                          size: __props.size,
                                          filter: item.filter,
                                          "filter-fields": item.filterFields || __props.filterFields,
                                          "ignore-filter": (_h2 = item.ignoreFilter) != null ? _h2 : __props.ignoreFilter
                                        }, { ref_for: true }, item.content), createSlots({ _: 2 }, [
                                          renderList(getProxySlots(), (_5, name) => {
                                            return {
                                              name,
                                              fn: withCtx((slotData) => [
                                                renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                              ])
                                            };
                                          })
                                        ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon", "size", "filter", "filter-fields", "ignore-filter"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else if (item.type === "checkbox") {
                                _push4(ssrRenderComponent(unref(DropdownMenu).CheckboxItem, {
                                  "model-value": item.checked,
                                  disabled: item.disabled,
                                  "text-value": unref(get)(item, props.labelKey),
                                  "data-slot": "item",
                                  class: __props.ui.item({ class: [(_f2 = __props.uiOverride) == null ? void 0 : _f2.item, (_g2 = item.ui) == null ? void 0 : _g2.item, item.class], color: item == null ? void 0 : item.color }),
                                  "onUpdate:modelValue": item.onUpdateChecked,
                                  onSelect: item.onSelect
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(ssrRenderComponent(unref(ReuseItemTemplate), {
                                        item,
                                        index
                                      }, null, _parent5, _scopeId4));
                                    } else {
                                      return [
                                        createVNode(unref(ReuseItemTemplate), {
                                          item,
                                          index
                                        }, null, 8, ["item", "index"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(ssrRenderComponent(_sfc_main$C, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                                  default: withCtx(({ active, ...slotProps }, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(ssrRenderComponent(unref(DropdownMenu).Item, {
                                        "as-child": "",
                                        disabled: item.disabled,
                                        "text-value": unref(get)(item, props.labelKey),
                                        onSelect: item.onSelect
                                      }, {
                                        default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                          var _a5, _b4, _c3, _d3;
                                          if (_push6) {
                                            _push6(ssrRenderComponent(_sfc_main$D, mergeProps({ ref_for: true }, slotProps, {
                                              "data-slot": "item",
                                              class: __props.ui.item({ class: [(_a5 = __props.uiOverride) == null ? void 0 : _a5.item, (_b4 = item.ui) == null ? void 0 : _b4.item, item.class], color: item == null ? void 0 : item.color, active })
                                            }), {
                                              default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(unref(ReuseItemTemplate), {
                                                    item,
                                                    active,
                                                    index
                                                  }, null, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(unref(ReuseItemTemplate), {
                                                      item,
                                                      active,
                                                      index
                                                    }, null, 8, ["item", "active", "index"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              createVNode(_sfc_main$D, mergeProps({ ref_for: true }, slotProps, {
                                                "data-slot": "item",
                                                class: __props.ui.item({ class: [(_c3 = __props.uiOverride) == null ? void 0 : _c3.item, (_d3 = item.ui) == null ? void 0 : _d3.item, item.class], color: item == null ? void 0 : item.color, active })
                                              }), {
                                                default: withCtx(() => [
                                                  createVNode(unref(ReuseItemTemplate), {
                                                    item,
                                                    active,
                                                    index
                                                  }, null, 8, ["item", "active", "index"])
                                                ]),
                                                _: 2
                                              }, 1040, ["class"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                    } else {
                                      return [
                                        createVNode(unref(DropdownMenu).Item, {
                                          "as-child": "",
                                          disabled: item.disabled,
                                          "text-value": unref(get)(item, props.labelKey),
                                          onSelect: item.onSelect
                                        }, {
                                          default: withCtx(() => {
                                            var _a5, _b4;
                                            return [
                                              createVNode(_sfc_main$D, mergeProps({ ref_for: true }, slotProps, {
                                                "data-slot": "item",
                                                class: __props.ui.item({ class: [(_a5 = __props.uiOverride) == null ? void 0 : _a5.item, (_b4 = item.ui) == null ? void 0 : _b4.item, item.class], color: item == null ? void 0 : item.color, active })
                                              }), {
                                                default: withCtx(() => [
                                                  createVNode(unref(ReuseItemTemplate), {
                                                    item,
                                                    active,
                                                    index
                                                  }, null, 8, ["item", "active", "index"])
                                                ]),
                                                _: 2
                                              }, 1040, ["class"])
                                            ];
                                          }),
                                          _: 2
                                        }, 1032, ["disabled", "text-value", "onSelect"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              }
                              _push4(`<!--]-->`);
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                var _a4, _b3, _c2, _d2, _e2, _f2, _g2;
                                return openBlock(), createBlock(Fragment, {
                                  key: `group-${groupIndex}-${index}`
                                }, [
                                  item.type === "label" ? (openBlock(), createBlock(unref(DropdownMenu).Label, {
                                    key: 0,
                                    "data-slot": "label",
                                    class: __props.ui.label({ class: [(_a4 = __props.uiOverride) == null ? void 0 : _a4.label, (_b3 = item.ui) == null ? void 0 : _b3.label, item.class] })
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseItemTemplate), {
                                        item,
                                        index
                                      }, null, 8, ["item", "index"])
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])) : item.type === "separator" ? (openBlock(), createBlock(unref(DropdownMenu).Separator, {
                                    key: 1,
                                    "data-slot": "separator",
                                    class: __props.ui.separator({ class: [(_c2 = __props.uiOverride) == null ? void 0 : _c2.separator, (_d2 = item.ui) == null ? void 0 : _d2.separator, item.class] })
                                  }, null, 8, ["class"])) : ((_e2 = item == null ? void 0 : item.children) == null ? void 0 : _e2.length) ? (openBlock(), createBlock(unref(DropdownMenu).Sub, {
                                    key: 2,
                                    open: item.open,
                                    "default-open": item.defaultOpen
                                  }, {
                                    default: withCtx(() => {
                                      var _a5, _b4, _c3, _d3;
                                      return [
                                        createVNode(unref(DropdownMenu).SubTrigger, {
                                          as: "button",
                                          type: "button",
                                          disabled: item.disabled,
                                          "text-value": unref(get)(item, props.labelKey),
                                          "data-slot": "item",
                                          class: __props.ui.item({ class: [(_a5 = __props.uiOverride) == null ? void 0 : _a5.item, (_b4 = item.ui) == null ? void 0 : _b4.item, item.class], color: item == null ? void 0 : item.color })
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(ReuseItemTemplate), {
                                              item,
                                              index
                                            }, null, 8, ["item", "index"])
                                          ]),
                                          _: 2
                                        }, 1032, ["disabled", "text-value", "class"]),
                                        createVNode(_sfc_main$5, mergeProps({
                                          sub: "",
                                          class: (_c3 = item.ui) == null ? void 0 : _c3.content,
                                          ui: __props.ui,
                                          "ui-override": __props.uiOverride,
                                          portal: __props.portal,
                                          items: item.children,
                                          align: "start",
                                          "align-offset": -4,
                                          "side-offset": 3,
                                          "label-key": __props.labelKey,
                                          "description-key": __props.descriptionKey,
                                          "checked-icon": __props.checkedIcon,
                                          "loading-icon": __props.loadingIcon,
                                          "external-icon": __props.externalIcon,
                                          size: __props.size,
                                          filter: item.filter,
                                          "filter-fields": item.filterFields || __props.filterFields,
                                          "ignore-filter": (_d3 = item.ignoreFilter) != null ? _d3 : __props.ignoreFilter
                                        }, { ref_for: true }, item.content), createSlots({ _: 2 }, [
                                          renderList(getProxySlots(), (_4, name) => {
                                            return {
                                              name,
                                              fn: withCtx((slotData) => [
                                                renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                              ])
                                            };
                                          })
                                        ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon", "size", "filter", "filter-fields", "ignore-filter"])
                                      ];
                                    }),
                                    _: 2
                                  }, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (openBlock(), createBlock(unref(DropdownMenu).CheckboxItem, {
                                    key: 3,
                                    "model-value": item.checked,
                                    disabled: item.disabled,
                                    "text-value": unref(get)(item, props.labelKey),
                                    "data-slot": "item",
                                    class: __props.ui.item({ class: [(_f2 = __props.uiOverride) == null ? void 0 : _f2.item, (_g2 = item.ui) == null ? void 0 : _g2.item, item.class], color: item == null ? void 0 : item.color }),
                                    "onUpdate:modelValue": item.onUpdateChecked,
                                    onSelect: item.onSelect
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseItemTemplate), {
                                        item,
                                        index
                                      }, null, 8, ["item", "index"])
                                    ]),
                                    _: 2
                                  }, 1032, ["model-value", "disabled", "text-value", "class", "onUpdate:modelValue", "onSelect"])) : (openBlock(), createBlock(_sfc_main$C, mergeProps({
                                    key: 4,
                                    ref_for: true
                                  }, unref(pickLinkProps)(item), { custom: "" }), {
                                    default: withCtx(({ active, ...slotProps }) => [
                                      createVNode(unref(DropdownMenu).Item, {
                                        "as-child": "",
                                        disabled: item.disabled,
                                        "text-value": unref(get)(item, props.labelKey),
                                        onSelect: item.onSelect
                                      }, {
                                        default: withCtx(() => {
                                          var _a5, _b4;
                                          return [
                                            createVNode(_sfc_main$D, mergeProps({ ref_for: true }, slotProps, {
                                              "data-slot": "item",
                                              class: __props.ui.item({ class: [(_a5 = __props.uiOverride) == null ? void 0 : _a5.item, (_b4 = item.ui) == null ? void 0 : _b4.item, item.class], color: item == null ? void 0 : item.color, active })
                                            }), {
                                              default: withCtx(() => [
                                                createVNode(unref(ReuseItemTemplate), {
                                                  item,
                                                  active,
                                                  index
                                                }, null, 8, ["item", "active", "index"])
                                              ]),
                                              _: 2
                                            }, 1040, ["class"])
                                          ];
                                        }),
                                        _: 2
                                      }, 1032, ["disabled", "text-value", "onSelect"])
                                    ]),
                                    _: 2
                                  }, 1040))
                                ], 64);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (searchTerm.value && !hasFilteredItems.value) {
                    _push3(`<div data-slot="empty" class="${ssrRenderClass(__props.ui.empty({ class: (_c = __props.uiOverride) == null ? void 0 : _c.empty }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => {
                      _push3(`${ssrInterpolate(unref(t)("dropdownMenu.noMatch", { searchTerm: searchTerm.value }))}`);
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  ssrRenderSlot(_ctx.$slots, "content-bottom", {
                    sub: (_d = __props.sub) != null ? _d : false
                  }, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    !!__props.filter ? (openBlock(), createBlock(unref(DropdownMenu).Filter, {
                      key: 0,
                      modelValue: searchTerm.value,
                      "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                      "as-child": ""
                    }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createVNode(_sfc_main$k, mergeProps({
                            autofocus: "",
                            autocomplete: "off",
                            size: __props.size
                          }, inputProps.value, {
                            "data-slot": "input",
                            class: __props.ui.input({ class: (_a3 = __props.uiOverride) == null ? void 0 : _a3.input }),
                            onChange: withModifiers(() => {
                            }, ["stop"])
                          }), null, 16, ["size", "class", "onChange"])
                        ];
                      }),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "content-top", {
                      sub: (_e = __props.sub) != null ? _e : false
                    }),
                    !searchTerm.value || hasFilteredItems.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      role: "presentation",
                      "data-slot": "viewport",
                      class: __props.ui.viewport({ class: (_f = __props.uiOverride) == null ? void 0 : _f.viewport })
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                        var _a3;
                        return openBlock(), createBlock(unref(DropdownMenu).Group, {
                          key: `group-${groupIndex}`,
                          "data-slot": "group",
                          class: __props.ui.group({ class: (_a3 = __props.uiOverride) == null ? void 0 : _a3.group })
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                              var _a4, _b3, _c2, _d2, _e2, _f2, _g2;
                              return openBlock(), createBlock(Fragment, {
                                key: `group-${groupIndex}-${index}`
                              }, [
                                item.type === "label" ? (openBlock(), createBlock(unref(DropdownMenu).Label, {
                                  key: 0,
                                  "data-slot": "label",
                                  class: __props.ui.label({ class: [(_a4 = __props.uiOverride) == null ? void 0 : _a4.label, (_b3 = item.ui) == null ? void 0 : _b3.label, item.class] })
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseItemTemplate), {
                                      item,
                                      index
                                    }, null, 8, ["item", "index"])
                                  ]),
                                  _: 2
                                }, 1032, ["class"])) : item.type === "separator" ? (openBlock(), createBlock(unref(DropdownMenu).Separator, {
                                  key: 1,
                                  "data-slot": "separator",
                                  class: __props.ui.separator({ class: [(_c2 = __props.uiOverride) == null ? void 0 : _c2.separator, (_d2 = item.ui) == null ? void 0 : _d2.separator, item.class] })
                                }, null, 8, ["class"])) : ((_e2 = item == null ? void 0 : item.children) == null ? void 0 : _e2.length) ? (openBlock(), createBlock(unref(DropdownMenu).Sub, {
                                  key: 2,
                                  open: item.open,
                                  "default-open": item.defaultOpen
                                }, {
                                  default: withCtx(() => {
                                    var _a5, _b4, _c3, _d3;
                                    return [
                                      createVNode(unref(DropdownMenu).SubTrigger, {
                                        as: "button",
                                        type: "button",
                                        disabled: item.disabled,
                                        "text-value": unref(get)(item, props.labelKey),
                                        "data-slot": "item",
                                        class: __props.ui.item({ class: [(_a5 = __props.uiOverride) == null ? void 0 : _a5.item, (_b4 = item.ui) == null ? void 0 : _b4.item, item.class], color: item == null ? void 0 : item.color })
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseItemTemplate), {
                                            item,
                                            index
                                          }, null, 8, ["item", "index"])
                                        ]),
                                        _: 2
                                      }, 1032, ["disabled", "text-value", "class"]),
                                      createVNode(_sfc_main$5, mergeProps({
                                        sub: "",
                                        class: (_c3 = item.ui) == null ? void 0 : _c3.content,
                                        ui: __props.ui,
                                        "ui-override": __props.uiOverride,
                                        portal: __props.portal,
                                        items: item.children,
                                        align: "start",
                                        "align-offset": -4,
                                        "side-offset": 3,
                                        "label-key": __props.labelKey,
                                        "description-key": __props.descriptionKey,
                                        "checked-icon": __props.checkedIcon,
                                        "loading-icon": __props.loadingIcon,
                                        "external-icon": __props.externalIcon,
                                        size: __props.size,
                                        filter: item.filter,
                                        "filter-fields": item.filterFields || __props.filterFields,
                                        "ignore-filter": (_d3 = item.ignoreFilter) != null ? _d3 : __props.ignoreFilter
                                      }, { ref_for: true }, item.content), createSlots({ _: 2 }, [
                                        renderList(getProxySlots(), (_3, name) => {
                                          return {
                                            name,
                                            fn: withCtx((slotData) => [
                                              renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                            ])
                                          };
                                        })
                                      ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon", "size", "filter", "filter-fields", "ignore-filter"])
                                    ];
                                  }),
                                  _: 2
                                }, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (openBlock(), createBlock(unref(DropdownMenu).CheckboxItem, {
                                  key: 3,
                                  "model-value": item.checked,
                                  disabled: item.disabled,
                                  "text-value": unref(get)(item, props.labelKey),
                                  "data-slot": "item",
                                  class: __props.ui.item({ class: [(_f2 = __props.uiOverride) == null ? void 0 : _f2.item, (_g2 = item.ui) == null ? void 0 : _g2.item, item.class], color: item == null ? void 0 : item.color }),
                                  "onUpdate:modelValue": item.onUpdateChecked,
                                  onSelect: item.onSelect
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseItemTemplate), {
                                      item,
                                      index
                                    }, null, 8, ["item", "index"])
                                  ]),
                                  _: 2
                                }, 1032, ["model-value", "disabled", "text-value", "class", "onUpdate:modelValue", "onSelect"])) : (openBlock(), createBlock(_sfc_main$C, mergeProps({
                                  key: 4,
                                  ref_for: true
                                }, unref(pickLinkProps)(item), { custom: "" }), {
                                  default: withCtx(({ active, ...slotProps }) => [
                                    createVNode(unref(DropdownMenu).Item, {
                                      "as-child": "",
                                      disabled: item.disabled,
                                      "text-value": unref(get)(item, props.labelKey),
                                      onSelect: item.onSelect
                                    }, {
                                      default: withCtx(() => {
                                        var _a5, _b4;
                                        return [
                                          createVNode(_sfc_main$D, mergeProps({ ref_for: true }, slotProps, {
                                            "data-slot": "item",
                                            class: __props.ui.item({ class: [(_a5 = __props.uiOverride) == null ? void 0 : _a5.item, (_b4 = item.ui) == null ? void 0 : _b4.item, item.class], color: item == null ? void 0 : item.color, active })
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(unref(ReuseItemTemplate), {
                                                item,
                                                active,
                                                index
                                              }, null, 8, ["item", "active", "index"])
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ];
                                      }),
                                      _: 2
                                    }, 1032, ["disabled", "text-value", "onSelect"])
                                  ]),
                                  _: 2
                                }, 1040))
                              ], 64);
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["class"]);
                      }), 128))
                    ], 2)) : createCommentVNode("", true),
                    searchTerm.value && !hasFilteredItems.value ? (openBlock(), createBlock("div", {
                      key: 2,
                      "data-slot": "empty",
                      class: __props.ui.empty({ class: (_g = __props.uiOverride) == null ? void 0 : _g.empty })
                    }, [
                      renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                        createTextVNode(toDisplayString(unref(t)("dropdownMenu.noMatch", { searchTerm: searchTerm.value })), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "default"),
                    renderSlot(_ctx.$slots, "content-bottom", {
                      sub: (_h = __props.sub) != null ? _h : false
                    })
                  ];
                }
              }),
              _: 3
            }), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(__props.sub ? unref(DropdownMenu).SubContent : unref(DropdownMenu).Content), mergeProps({
                "data-slot": "content",
                class: __props.ui.content({ class: [(_b = __props.uiOverride) == null ? void 0 : _b.content, props.class] })
              }, unref(contentProps)), {
                default: withCtx(() => {
                  var _a2, _b2, _c, _d;
                  return [
                    !!__props.filter ? (openBlock(), createBlock(unref(DropdownMenu).Filter, {
                      key: 0,
                      modelValue: searchTerm.value,
                      "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                      "as-child": ""
                    }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createVNode(_sfc_main$k, mergeProps({
                            autofocus: "",
                            autocomplete: "off",
                            size: __props.size
                          }, inputProps.value, {
                            "data-slot": "input",
                            class: __props.ui.input({ class: (_a3 = __props.uiOverride) == null ? void 0 : _a3.input }),
                            onChange: withModifiers(() => {
                            }, ["stop"])
                          }), null, 16, ["size", "class", "onChange"])
                        ];
                      }),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "content-top", {
                      sub: (_a2 = __props.sub) != null ? _a2 : false
                    }),
                    !searchTerm.value || hasFilteredItems.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      role: "presentation",
                      "data-slot": "viewport",
                      class: __props.ui.viewport({ class: (_b2 = __props.uiOverride) == null ? void 0 : _b2.viewport })
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                        var _a3;
                        return openBlock(), createBlock(unref(DropdownMenu).Group, {
                          key: `group-${groupIndex}`,
                          "data-slot": "group",
                          class: __props.ui.group({ class: (_a3 = __props.uiOverride) == null ? void 0 : _a3.group })
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                              var _a4, _b3, _c2, _d2, _e, _f, _g;
                              return openBlock(), createBlock(Fragment, {
                                key: `group-${groupIndex}-${index}`
                              }, [
                                item.type === "label" ? (openBlock(), createBlock(unref(DropdownMenu).Label, {
                                  key: 0,
                                  "data-slot": "label",
                                  class: __props.ui.label({ class: [(_a4 = __props.uiOverride) == null ? void 0 : _a4.label, (_b3 = item.ui) == null ? void 0 : _b3.label, item.class] })
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseItemTemplate), {
                                      item,
                                      index
                                    }, null, 8, ["item", "index"])
                                  ]),
                                  _: 2
                                }, 1032, ["class"])) : item.type === "separator" ? (openBlock(), createBlock(unref(DropdownMenu).Separator, {
                                  key: 1,
                                  "data-slot": "separator",
                                  class: __props.ui.separator({ class: [(_c2 = __props.uiOverride) == null ? void 0 : _c2.separator, (_d2 = item.ui) == null ? void 0 : _d2.separator, item.class] })
                                }, null, 8, ["class"])) : ((_e = item == null ? void 0 : item.children) == null ? void 0 : _e.length) ? (openBlock(), createBlock(unref(DropdownMenu).Sub, {
                                  key: 2,
                                  open: item.open,
                                  "default-open": item.defaultOpen
                                }, {
                                  default: withCtx(() => {
                                    var _a5, _b4, _c3, _d3;
                                    return [
                                      createVNode(unref(DropdownMenu).SubTrigger, {
                                        as: "button",
                                        type: "button",
                                        disabled: item.disabled,
                                        "text-value": unref(get)(item, props.labelKey),
                                        "data-slot": "item",
                                        class: __props.ui.item({ class: [(_a5 = __props.uiOverride) == null ? void 0 : _a5.item, (_b4 = item.ui) == null ? void 0 : _b4.item, item.class], color: item == null ? void 0 : item.color })
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseItemTemplate), {
                                            item,
                                            index
                                          }, null, 8, ["item", "index"])
                                        ]),
                                        _: 2
                                      }, 1032, ["disabled", "text-value", "class"]),
                                      createVNode(_sfc_main$5, mergeProps({
                                        sub: "",
                                        class: (_c3 = item.ui) == null ? void 0 : _c3.content,
                                        ui: __props.ui,
                                        "ui-override": __props.uiOverride,
                                        portal: __props.portal,
                                        items: item.children,
                                        align: "start",
                                        "align-offset": -4,
                                        "side-offset": 3,
                                        "label-key": __props.labelKey,
                                        "description-key": __props.descriptionKey,
                                        "checked-icon": __props.checkedIcon,
                                        "loading-icon": __props.loadingIcon,
                                        "external-icon": __props.externalIcon,
                                        size: __props.size,
                                        filter: item.filter,
                                        "filter-fields": item.filterFields || __props.filterFields,
                                        "ignore-filter": (_d3 = item.ignoreFilter) != null ? _d3 : __props.ignoreFilter
                                      }, { ref_for: true }, item.content), createSlots({ _: 2 }, [
                                        renderList(getProxySlots(), (_2, name) => {
                                          return {
                                            name,
                                            fn: withCtx((slotData) => [
                                              renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                            ])
                                          };
                                        })
                                      ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon", "size", "filter", "filter-fields", "ignore-filter"])
                                    ];
                                  }),
                                  _: 2
                                }, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (openBlock(), createBlock(unref(DropdownMenu).CheckboxItem, {
                                  key: 3,
                                  "model-value": item.checked,
                                  disabled: item.disabled,
                                  "text-value": unref(get)(item, props.labelKey),
                                  "data-slot": "item",
                                  class: __props.ui.item({ class: [(_f = __props.uiOverride) == null ? void 0 : _f.item, (_g = item.ui) == null ? void 0 : _g.item, item.class], color: item == null ? void 0 : item.color }),
                                  "onUpdate:modelValue": item.onUpdateChecked,
                                  onSelect: item.onSelect
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseItemTemplate), {
                                      item,
                                      index
                                    }, null, 8, ["item", "index"])
                                  ]),
                                  _: 2
                                }, 1032, ["model-value", "disabled", "text-value", "class", "onUpdate:modelValue", "onSelect"])) : (openBlock(), createBlock(_sfc_main$C, mergeProps({
                                  key: 4,
                                  ref_for: true
                                }, unref(pickLinkProps)(item), { custom: "" }), {
                                  default: withCtx(({ active, ...slotProps }) => [
                                    createVNode(unref(DropdownMenu).Item, {
                                      "as-child": "",
                                      disabled: item.disabled,
                                      "text-value": unref(get)(item, props.labelKey),
                                      onSelect: item.onSelect
                                    }, {
                                      default: withCtx(() => {
                                        var _a5, _b4;
                                        return [
                                          createVNode(_sfc_main$D, mergeProps({ ref_for: true }, slotProps, {
                                            "data-slot": "item",
                                            class: __props.ui.item({ class: [(_a5 = __props.uiOverride) == null ? void 0 : _a5.item, (_b4 = item.ui) == null ? void 0 : _b4.item, item.class], color: item == null ? void 0 : item.color, active })
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(unref(ReuseItemTemplate), {
                                                item,
                                                active,
                                                index
                                              }, null, 8, ["item", "active", "index"])
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ];
                                      }),
                                      _: 2
                                    }, 1032, ["disabled", "text-value", "onSelect"])
                                  ]),
                                  _: 2
                                }, 1040))
                              ], 64);
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["class"]);
                      }), 128))
                    ], 2)) : createCommentVNode("", true),
                    searchTerm.value && !hasFilteredItems.value ? (openBlock(), createBlock("div", {
                      key: 2,
                      "data-slot": "empty",
                      class: __props.ui.empty({ class: (_c = __props.uiOverride) == null ? void 0 : _c.empty })
                    }, [
                      renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                        createTextVNode(toDisplayString(unref(t)("dropdownMenu.noMatch", { searchTerm: searchTerm.value })), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "default"),
                    renderSlot(_ctx.$slots, "content-bottom", {
                      sub: (_d = __props.sub) != null ? _d : false
                    })
                  ];
                }),
                _: 3
              }, 16, ["class"]))
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "content": "min-w-32 bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-dropdown-menu-content-transform-origin) flex flex-col",
    "input": "border-b border-default",
    "empty": "text-center text-muted",
    "viewport": "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1",
    "arrow": "fill-bg stroke-default",
    "group": "p-1 isolate",
    "label": "w-full flex items-center font-semibold text-highlighted",
    "separator": "-mx-1 my-1 h-px bg-border",
    "item": "group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75",
    "itemLeadingIcon": "shrink-0",
    "itemLeadingAvatar": "shrink-0",
    "itemLeadingAvatarSize": "",
    "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "itemTrailingIcon": "shrink-0",
    "itemTrailingKbds": "hidden lg:inline-flex items-center shrink-0",
    "itemTrailingKbdsSize": "",
    "itemWrapper": "flex-1 flex flex-col text-start min-w-0",
    "itemLabel": "truncate",
    "itemDescription": "truncate text-muted",
    "itemLabelExternalIcon": "inline-block size-3 align-top text-dimmed"
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
    "active": {
      "true": {
        "item": "text-highlighted before:bg-elevated",
        "itemLeadingIcon": "text-default"
      },
      "false": {
        "item": [
          "text-default data-highlighted:text-highlighted data-[state=open]:text-highlighted data-highlighted:before:bg-elevated/50 data-[state=open]:before:bg-elevated/50",
          "transition-colors before:transition-colors"
        ],
        "itemLeadingIcon": [
          "text-dimmed group-data-highlighted:text-default group-data-[state=open]:text-default",
          "transition-colors"
        ]
      }
    },
    "loading": {
      "true": {
        "itemLeadingIcon": "animate-spin"
      }
    },
    "size": {
      "xs": {
        "label": "p-1 text-xs gap-1",
        "item": "p-1 text-xs gap-1",
        "empty": "p-2 text-xs",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemTrailingIcon": "size-4",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "sm"
      },
      "sm": {
        "label": "p-1.5 text-xs gap-1.5",
        "item": "p-1.5 text-xs gap-1.5",
        "empty": "p-2.5 text-xs",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemTrailingIcon": "size-4",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "sm"
      },
      "md": {
        "label": "p-1.5 text-sm gap-1.5",
        "item": "p-1.5 text-sm gap-1.5",
        "empty": "p-2.5 text-sm",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemTrailingIcon": "size-5",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "md"
      },
      "lg": {
        "label": "p-2 text-sm gap-2",
        "item": "p-2 text-sm gap-2",
        "empty": "p-3 text-sm",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemTrailingIcon": "size-5",
        "itemTrailingKbds": "gap-1",
        "itemTrailingKbdsSize": "md"
      },
      "xl": {
        "label": "p-2 text-base gap-2",
        "item": "p-2 text-base gap-2",
        "empty": "p-3 text-base",
        "itemLeadingIcon": "size-6",
        "itemLeadingAvatarSize": "xs",
        "itemTrailingIcon": "size-6",
        "itemTrailingKbds": "gap-1",
        "itemTrailingKbdsSize": "lg"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "active": false,
      "class": {
        "item": "text-primary data-highlighted:text-primary data-highlighted:before:bg-primary/10 data-[state=open]:before:bg-primary/10",
        "itemLeadingIcon": "text-primary/75 group-data-highlighted:text-primary group-data-[state=open]:text-primary"
      }
    },
    {
      "color": "secondary",
      "active": false,
      "class": {
        "item": "text-secondary data-highlighted:text-secondary data-highlighted:before:bg-secondary/10 data-[state=open]:before:bg-secondary/10",
        "itemLeadingIcon": "text-secondary/75 group-data-highlighted:text-secondary group-data-[state=open]:text-secondary"
      }
    },
    {
      "color": "success",
      "active": false,
      "class": {
        "item": "text-success data-highlighted:text-success data-highlighted:before:bg-success/10 data-[state=open]:before:bg-success/10",
        "itemLeadingIcon": "text-success/75 group-data-highlighted:text-success group-data-[state=open]:text-success"
      }
    },
    {
      "color": "info",
      "active": false,
      "class": {
        "item": "text-info data-highlighted:text-info data-highlighted:before:bg-info/10 data-[state=open]:before:bg-info/10",
        "itemLeadingIcon": "text-info/75 group-data-highlighted:text-info group-data-[state=open]:text-info"
      }
    },
    {
      "color": "warning",
      "active": false,
      "class": {
        "item": "text-warning data-highlighted:text-warning data-highlighted:before:bg-warning/10 data-[state=open]:before:bg-warning/10",
        "itemLeadingIcon": "text-warning/75 group-data-highlighted:text-warning group-data-[state=open]:text-warning"
      }
    },
    {
      "color": "error",
      "active": false,
      "class": {
        "item": "text-error data-highlighted:text-error data-highlighted:before:bg-error/10 data-[state=open]:before:bg-error/10",
        "itemLeadingIcon": "text-error/75 group-data-highlighted:text-error group-data-[state=open]:text-error"
      }
    },
    {
      "color": "primary",
      "active": true,
      "class": {
        "item": "text-primary before:bg-primary/10",
        "itemLeadingIcon": "text-primary"
      }
    },
    {
      "color": "secondary",
      "active": true,
      "class": {
        "item": "text-secondary before:bg-secondary/10",
        "itemLeadingIcon": "text-secondary"
      }
    },
    {
      "color": "success",
      "active": true,
      "class": {
        "item": "text-success before:bg-success/10",
        "itemLeadingIcon": "text-success"
      }
    },
    {
      "color": "info",
      "active": true,
      "class": {
        "item": "text-info before:bg-info/10",
        "itemLeadingIcon": "text-info"
      }
    },
    {
      "color": "warning",
      "active": true,
      "class": {
        "item": "text-warning before:bg-warning/10",
        "itemLeadingIcon": "text-warning"
      }
    },
    {
      "color": "error",
      "active": true,
      "class": {
        "item": "text-error before:bg-error/10",
        "itemLeadingIcon": "text-error"
      }
    }
  ],
  "defaultVariants": {
    "size": "md"
  }
};
const _sfc_main$4 = {
  __name: "UDropdownMenu",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    size: { type: null, required: false },
    items: { type: null, required: false },
    checkedIcon: { type: null, required: false },
    loadingIcon: { type: null, required: false },
    externalIcon: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    labelKey: { type: null, required: false, default: "label" },
    descriptionKey: { type: null, required: false, default: "description" },
    filter: { type: [Boolean, Object], required: false, default: false },
    filterFields: { type: Array, required: false },
    ignoreFilter: { type: Boolean, required: false, default: false },
    disabled: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    modal: { type: Boolean, required: false, default: true }
  }, {
    "searchTerm": { type: String, ...{ default: "" } },
    "searchTermModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:open"], ["update:searchTerm"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const searchTerm = useModel(__props, "searchTerm", { type: String, ...{ default: "" } });
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("dropdownMenu", props);
    const rootProps = useForwardPropsEmits(reactivePick(props, "defaultOpen", "open", "modal"), emits);
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 }));
    const arrowProps = toRef(() => defu(props.arrow, { rounded: true }));
    const getProxySlots = () => omit(slots, ["default"]);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.dropdownMenu) || {} })({
        size: props.size
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRoot_default), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DropdownMenuTrigger_default), {
                "as-child": "",
                class: props.class,
                disabled: __props.disabled
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$5, mergeProps({
              "search-term": searchTerm.value,
              "onUpdate:searchTerm": ($event) => searchTerm.value = $event,
              class: ui.value.content({ class: [!slots.default && props.class, (_a = unref(uiProp)) == null ? void 0 : _a.content] }),
              ui: ui.value,
              "ui-override": unref(uiProp)
            }, contentProps.value, {
              items: __props.items,
              portal: __props.portal,
              "label-key": __props.labelKey,
              "description-key": __props.descriptionKey,
              "checked-icon": __props.checkedIcon,
              "loading-icon": __props.loadingIcon,
              "external-icon": __props.externalIcon,
              size: __props.size,
              filter: __props.filter,
              "filter-fields": __props.filterFields,
              "ignore-filter": __props.ignoreFilter
            }), createSlots({
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  if (!!__props.arrow) {
                    _push3(ssrRenderComponent(unref(DropdownMenuArrow_default), mergeProps(arrowProps.value, {
                      "data-slot": "arrow",
                      class: ui.value.arrow({ class: (_a2 = unref(uiProp)) == null ? void 0 : _a2.arrow })
                    }), null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    !!__props.arrow ? (openBlock(), createBlock(unref(DropdownMenuArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
                      "data-slot": "arrow",
                      class: ui.value.arrow({ class: (_b2 = unref(uiProp)) == null ? void 0 : _b2.arrow })
                    }), null, 16, ["class"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, [
              renderList(getProxySlots(), (_, name) => {
                return {
                  name,
                  fn: withCtx((slotData, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, name, slotData, null, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, name, slotData)
                      ];
                    }
                  })
                };
              })
            ]), _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DropdownMenuTrigger_default), {
                key: 0,
                "as-child": "",
                class: props.class,
                disabled: __props.disabled
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class", "disabled"])) : createCommentVNode("", true),
              createVNode(_sfc_main$5, mergeProps({
                "search-term": searchTerm.value,
                "onUpdate:searchTerm": ($event) => searchTerm.value = $event,
                class: ui.value.content({ class: [!slots.default && props.class, (_b = unref(uiProp)) == null ? void 0 : _b.content] }),
                ui: ui.value,
                "ui-override": unref(uiProp)
              }, contentProps.value, {
                items: __props.items,
                portal: __props.portal,
                "label-key": __props.labelKey,
                "description-key": __props.descriptionKey,
                "checked-icon": __props.checkedIcon,
                "loading-icon": __props.loadingIcon,
                "external-icon": __props.externalIcon,
                size: __props.size,
                filter: __props.filter,
                "filter-fields": __props.filterFields,
                "ignore-filter": __props.ignoreFilter
              }), createSlots({
                default: withCtx(() => {
                  var _a2;
                  return [
                    !!__props.arrow ? (openBlock(), createBlock(unref(DropdownMenuArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
                      "data-slot": "arrow",
                      class: ui.value.arrow({ class: (_a2 = unref(uiProp)) == null ? void 0 : _a2.arrow })
                    }), null, 16, ["class"])) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, [
                renderList(getProxySlots(), (_, name) => {
                  return {
                    name,
                    fn: withCtx((slotData) => [
                      renderSlot(_ctx.$slots, name, slotData)
                    ])
                  };
                })
              ]), 1040, ["search-term", "onUpdate:searchTerm", "class", "ui", "ui-override", "items", "portal", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon", "size", "filter", "filter-fields", "ignore-filter"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
function isSuperStructSchema(schema2) {
  return "schema" in schema2 && typeof schema2.coercer === "function" && typeof schema2.validator === "function" && typeof schema2.refiner === "function";
}
function isStandardSchema(schema2) {
  return "~standard" in schema2;
}
async function validateStandardSchema(state, schema2) {
  var _a;
  const result = await schema2["~standard"].validate(state);
  if (result.issues) {
    return {
      errors: ((_a = result.issues) == null ? void 0 : _a.map((issue) => {
        var _a2;
        return {
          name: ((_a2 = issue.path) == null ? void 0 : _a2.map((item) => typeof item === "object" ? item.key : item).join(".")) || "",
          message: issue.message
        };
      })) || [],
      result: null
    };
  }
  return {
    errors: null,
    result: result.value
  };
}
async function validateSuperstructSchema(state, schema2) {
  const [err, result] = schema2.validate(state);
  if (err) {
    const errors = err.failures().map((error) => ({
      message: error.message,
      name: error.path.join(".")
    }));
    return {
      errors,
      result: null
    };
  }
  return {
    errors: null,
    result
  };
}
function validateSchema(state, schema2) {
  if (isStandardSchema(schema2)) {
    return validateStandardSchema(state, schema2);
  } else if (isSuperStructSchema(schema2)) {
    return validateSuperstructSchema(state, schema2);
  } else {
    throw new Error("Form validation failed: Unsupported form schema");
  }
}
function getAtPath(data, path) {
  if (!path) return data;
  const value = path.split(".").reduce(
    (value2, key) => value2 == null ? void 0 : value2[key],
    data
  );
  return value;
}
function setAtPath(data, path, value) {
  if (!path) return Object.assign(data, value);
  if (!data) return data;
  const keys = path.split(".");
  let current = data;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (current[key] === void 0 || current[key] === null) {
      if (i + 1 < keys.length && !Number.isNaN(Number(keys[i + 1]))) {
        current[key] = [];
      } else {
        current[key] = {};
      }
    }
    current = current[key];
  }
  const lastKey = keys[keys.length - 1];
  current[lastKey] = value;
  return data;
}
class FormValidationException extends Error {
  constructor(formId, errors) {
    super("Form validation exception");
    __publicField(this, "formId");
    __publicField(this, "errors");
    this.formId = formId;
    this.errors = errors;
    Object.setPrototypeOf(this, FormValidationException.prototype);
  }
}
const theme = {
  "base": ""
};
const _sfc_main$3 = {
  __name: "UForm",
  __ssrInlineRender: true,
  props: {
    id: { type: [String, Number], required: false },
    schema: { type: null, required: false },
    state: { type: null, required: false },
    validate: { type: Function, required: false },
    validateOn: { type: Array, required: false, default() {
      return ["input", "blur", "change"];
    } },
    disabled: { type: Boolean, required: false },
    name: { type: null, required: false },
    validateOnInputDelay: { type: Number, required: false, default: 300 },
    transform: { type: null, required: false, default: () => true },
    nested: { type: Boolean, required: false },
    loadingAuto: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    onSubmit: { type: Function, required: false }
  },
  emits: ["submit", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    var _a;
    const props = __props;
    const emits = __emit;
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("form", props);
    const ui = computed(() => {
      var _a2;
      return tv({ extend: tv(theme), ...((_a2 = appConfig.ui) == null ? void 0 : _a2.form) || {} });
    });
    const formId = (_a = props.id) != null ? _a : useId$1();
    const formRef = useTemplateRef("formRef");
    const bus = useEventBus(`form-${formId}`);
    const parentBus = props.nested === true && inject(
      formBusInjectionKey,
      void 0
    );
    const parentState = props.nested === true ? inject(formStateInjectionKey, void 0) : void 0;
    const state = computed(() => {
      if (parentState == null ? void 0 : parentState.value) {
        return props.name ? getAtPath(parentState.value, props.name) : parentState.value;
      }
      return props.state;
    });
    provide(formBusInjectionKey, bus);
    provide(formStateInjectionKey, state);
    const nestedForms = ref(/* @__PURE__ */ new Map());
    const errors = ref([]);
    provide(formErrorsInjectionKey, errors);
    const inputs = ref({});
    provide(formInputsInjectionKey, inputs);
    const dirtyFields = reactive(/* @__PURE__ */ new Set());
    const touchedFields = reactive(/* @__PURE__ */ new Set());
    const blurredFields = reactive(/* @__PURE__ */ new Set());
    function resolveErrorIds(errs) {
      return errs.map((err) => {
        var _a2;
        return {
          ...err,
          id: (err == null ? void 0 : err.name) ? (_a2 = inputs.value[err.name]) == null ? void 0 : _a2.id : void 0
        };
      });
    }
    const transformedState = ref(null);
    async function getErrors() {
      var _a2;
      let errs = props.validate ? (_a2 = await props.validate(state.value)) != null ? _a2 : [] : [];
      if (props.schema) {
        const { errors: errors2, result } = await validateSchema(state.value, props.schema);
        if (errors2) {
          errs = errs.concat(errors2);
        } else {
          transformedState.value = result;
        }
      }
      return resolveErrorIds(errs);
    }
    async function _validate(opts = { silent: false, nested: false, transform: false }) {
      var _a2, _b;
      const names = opts.name && !Array.isArray(opts.name) ? [opts.name] : opts.name;
      let nestedResults = [];
      let nestedErrors = [];
      if (!names && opts.nested) {
        const validations = Array.from(nestedForms.value.values()).map(
          (form) => validateNestedForm(form, opts)
        );
        const results = await Promise.all(validations);
        nestedErrors = results.filter((r) => r.error).flatMap((r) => r.error.errors.map((e) => addFormPath(e, r.name)));
        nestedResults = results.filter((r) => r.output !== void 0);
      }
      const currentErrors = await getErrors();
      const allErrors = [...currentErrors, ...nestedErrors];
      if (names) {
        errors.value = filterErrorsByNames(allErrors, names);
      } else {
        errors.value = allErrors;
      }
      if ((_a2 = errors.value) == null ? void 0 : _a2.length) {
        if (opts.silent) return false;
        throw new FormValidationException(formId, errors.value);
      }
      if (opts.transform) {
        nestedResults.forEach((result) => {
          if (result.name) {
            setAtPath(transformedState.value, result.name, result.output);
          } else {
            Object.assign(transformedState.value, result.output);
          }
        });
        return (_b = transformedState.value) != null ? _b : state.value;
      }
      return state.value;
    }
    const loading = ref(false);
    provide(formLoadingInjectionKey, readonly(loading));
    async function onSubmitWrapper(payload) {
      var _a2;
      loading.value = props.loadingAuto && true;
      const event = payload;
      try {
        event.data = await _validate({ nested: true, transform: props.transform });
        await ((_a2 = props.onSubmit) == null ? void 0 : _a2.call(props, event));
        dirtyFields.clear();
      } catch (error) {
        if (!(error instanceof FormValidationException)) {
          throw error;
        }
        const errorEvent = {
          ...event,
          errors: error.errors
        };
        emits("error", errorEvent);
      } finally {
        loading.value = false;
      }
    }
    const disabled = computed(() => props.disabled || loading.value);
    provide(formOptionsInjectionKey, computed(() => ({
      disabled: disabled.value,
      validateOnInputDelay: props.validateOnInputDelay
    })));
    async function validateNestedForm(form, opts) {
      try {
        const result = await form.validate({ ...opts, silent: false });
        return { name: form.name, output: result };
      } catch (error) {
        if (!(error instanceof FormValidationException)) throw error;
        return { name: form.name, error };
      }
    }
    function addFormPath(error, formPath) {
      if (!formPath || !error.name) return error;
      return { ...error, name: formPath + "." + error.name };
    }
    function stripFormPath(error, formPath) {
      var _a2;
      const prefix = formPath + ".";
      const name = ((_a2 = error == null ? void 0 : error.name) == null ? void 0 : _a2.startsWith(prefix)) ? error.name.substring(prefix.length) : error.name;
      return { ...error, name };
    }
    function filterFormErrors(errors2, formPath) {
      if (!formPath) return errors2;
      return errors2.filter((e) => {
        var _a2;
        return (_a2 = e == null ? void 0 : e.name) == null ? void 0 : _a2.startsWith(formPath + ".");
      }).map((e) => stripFormPath(e, formPath));
    }
    function getFormErrors(form) {
      return form.api.getErrors().map(
        (e) => form.name ? { ...e, name: form.name + "." + e.name } : e
      );
    }
    function matchesTarget(target, path) {
      if (!target || !path) return true;
      if (target instanceof RegExp) return target.test(path);
      return path === target || typeof target === "string" && target.startsWith(path + ".");
    }
    function getNestedTarget(target, formPath) {
      if (!target || target instanceof RegExp) return target;
      if (formPath === target) return void 0;
      if (typeof target === "string" && target.startsWith(formPath + ".")) {
        return target.substring(formPath.length + 1);
      }
      return target;
    }
    function filterErrorsByNames(allErrors, names) {
      const nameSet = new Set(names);
      const patterns = names.map((name) => {
        var _a2, _b;
        return (_b = (_a2 = inputs.value) == null ? void 0 : _a2[name]) == null ? void 0 : _b.pattern;
      }).filter(Boolean);
      const matchesNames = (error) => {
        if (!error.name) return false;
        if (nameSet.has(error.name)) return true;
        return patterns.some((pattern) => pattern.test(error.name));
      };
      const keepErrors = errors.value.filter((error) => !matchesNames(error));
      const newErrors = allErrors.filter(matchesNames);
      return [...keepErrors, ...newErrors];
    }
    function filterErrorsByTarget(currentErrors, target) {
      return currentErrors.filter(
        (err) => target instanceof RegExp ? !(err.name && target.test(err.name)) : !err.name || err.name !== target
      );
    }
    function isLocalError(error) {
      return !error.name || !!inputs.value[error.name];
    }
    const api = {
      validate: _validate,
      errors,
      setErrors(errs, name) {
        const localErrors = resolveErrorIds(errs.filter(isLocalError));
        const nestedErrors = [];
        for (const form of nestedForms.value.values()) {
          if (matchesTarget(name, form.name)) {
            const formErrors = filterFormErrors(errs, form.name);
            form.api.setErrors(formErrors, getNestedTarget(name, form.name || ""));
            nestedErrors.push(...getFormErrors(form));
          }
        }
        if (name) {
          const keepErrors = filterErrorsByTarget(errors.value, name);
          errors.value = [...keepErrors, ...localErrors, ...nestedErrors];
        } else {
          errors.value = [...localErrors, ...nestedErrors];
        }
      },
      async submit() {
        if (formRef.value instanceof HTMLFormElement && formRef.value.reportValidity() === false) {
          return;
        }
        await onSubmitWrapper(new Event("submit"));
      },
      getErrors(name) {
        if (!name) return errors.value;
        return errors.value.filter(
          (err) => name instanceof RegExp ? err.name && name.test(err.name) : err.name === name
        );
      },
      clear(name) {
        const localErrors = name ? errors.value.filter(
          (err) => isLocalError(err) && (name instanceof RegExp ? !(err.name && name.test(err.name)) : err.name !== name)
        ) : [];
        const nestedErrors = [];
        for (const form of nestedForms.value.values()) {
          if (matchesTarget(name, form.name)) form.api.clear();
          nestedErrors.push(...getFormErrors(form));
        }
        errors.value = [...localErrors, ...nestedErrors];
      },
      disabled,
      loading,
      dirty: computed(() => !!dirtyFields.size),
      dirtyFields: readonly(dirtyFields),
      blurredFields: readonly(blurredFields),
      touchedFields: readonly(touchedFields)
    };
    __expose(api);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(parentBus) ? "div" : "form"), mergeProps({
        id: unref(formId),
        ref_key: "formRef",
        ref: formRef,
        class: ui.value({ class: [(_a2 = unref(uiProp)) == null ? void 0 : _a2.base, props.class] }),
        onSubmit: onSubmitWrapper
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {
              errors: errors.value,
              loading: loading.value
            }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {
                errors: errors.value,
                loading: loading.value
              })
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PostEditorModal",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean },
    post: {}
  },
  emits: ["update:modelValue", "saved"],
  setup(__props, { emit: __emit }) {
    const RichEditor = defineAsyncComponent(() => import('./RichEditor-WjiMyQp3.mjs'));
    const props = __props;
    const emit = __emit;
    const { t } = useI18n();
    const toast = useToast();
    const { settings } = useSettings();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const isOpen = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    const typeOptions = computed(() => [
      { label: t("admin.posts.type.blog"), value: "blog" },
      { label: t("admin.posts.type.announcement"), value: "announcement" },
      { label: t("admin.posts.type.page"), value: "page" },
      { label: t("admin.posts.type.changelog"), value: "changelog" }
    ]);
    const rawSupportedLocales = computed(() => {
      if (settings.value) {
        let i18nEnabled = "true";
        let rawLocales = "en,zh";
        if (Array.isArray(settings.value)) {
          const i18nSetting = settings.value.find((s) => s.key === "i18n_enabled");
          if (i18nSetting) i18nEnabled = String(i18nSetting.value);
          const localesSetting = settings.value.find((s) => s.key === "supported_locales");
          if (localesSetting) rawLocales = String(localesSetting.value);
        } else {
          if (settings.value.i18n_enabled !== void 0) {
            i18nEnabled = String(settings.value.i18n_enabled);
          }
          if (settings.value.supported_locales !== void 0) {
            rawLocales = String(settings.value.supported_locales);
          }
        }
        if (i18nEnabled === "false") {
          return ["en"];
        }
        if (rawLocales === "") {
          return ["en"];
        }
        return rawLocales.split(",").map((l) => l.trim()).filter(Boolean);
      }
      return ["en", "zh"];
    });
    const defaultLocale = computed(() => {
      if (settings.value) {
        if (Array.isArray(settings.value)) {
          const defaultLocaleSetting = settings.value.find((s) => s.key === "default_locale");
          if (defaultLocaleSetting && defaultLocaleSetting.value) {
            return defaultLocaleSetting.value;
          }
        } else if (settings.value.default_locale) {
          return settings.value.default_locale;
        }
      }
      return rawSupportedLocales.value[0] || "en";
    });
    const supportedLocales = computed(() => {
      const list = [...rawSupportedLocales.value];
      const def = defaultLocale.value;
      if (!def || !list.includes(def)) return list;
      return [def, ...list.filter((l) => l !== def)];
    });
    const currentTabLocale = ref(defaultLocale.value || "en");
    watch(
      defaultLocale,
      (val) => {
        if (!currentTabLocale.value || currentTabLocale.value === "en") {
          currentTabLocale.value = val || "en";
        }
      },
      { immediate: true }
    );
    const translationForms = reactive({});
    const isSaving = ref(false);
    const isUploading = ref(false);
    const fileInput = ref(null);
    const editingId = ref(null);
    const defaultForm = {
      title: "",
      key: "",
      sort: "",
      slug: "",
      description: "",
      content: "",
      type: "blog",
      imageUrl: "",
      isActive: true,
      metaData: {}
    };
    const form = ref({ ...defaultForm });
    const generateSlug = () => {
      if (editingId.value) return;
      form.value.slug = form.value.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    };
    const generateDescription = () => {
      const raw = (form.value.content || "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim();
      if (!raw) return;
      const MAX = 200;
      const trimmed = raw.length <= MAX ? raw : raw.slice(0, MAX).replace(/\s+\S*$/, "") + "\u2026";
      form.value.description = trimmed;
    };
    watch(
      () => props.modelValue,
      (open) => {
        var _a;
        if (!open) return;
        for (const key in translationForms) {
          delete translationForms[key];
        }
        supportedLocales.value.forEach((l) => {
          if (l !== defaultLocale.value) {
            translationForms[l] = { title: "", description: "", content: "" };
          }
        });
        if (props.post) {
          editingId.value = props.post.id;
          form.value = { ...props.post };
          if (!form.value.key) form.value.key = "";
          if (form.value.sort === null || form.value.sort === void 0) form.value.sort = "";
          if (!form.value.metaData) form.value.metaData = {};
          if (typeof form.value.metaData === "string") {
            try {
              form.value.metaData = JSON.parse(form.value.metaData);
            } catch {
              form.value.metaData = {};
            }
          }
          if ((_a = form.value.metaData) == null ? void 0 : _a.translations) {
            Object.keys(form.value.metaData.translations).forEach((loc) => {
              if (loc !== defaultLocale.value && translationForms[loc]) {
                const trans = form.value.metaData.translations[loc];
                translationForms[loc].title = trans.title || "";
                translationForms[loc].description = trans.description || "";
                translationForms[loc].content = trans.content || "";
              }
            });
          }
        } else {
          editingId.value = null;
          form.value = { ...defaultForm };
        }
        currentTabLocale.value = defaultLocale.value;
      }
    );
    const onSubmit = async () => {
      var _a;
      if (!form.value.title || !form.value.slug) {
        toast.add({ title: t("admin.common.error"), description: t("admin.posts.toast.titleRequired"), color: "error" });
        return;
      }
      if (!form.value.metaData) form.value.metaData = {};
      if (!form.value.metaData.translations) form.value.metaData.translations = {};
      for (const loc of supportedLocales.value) {
        if (loc === defaultLocale.value) continue;
        const trans = translationForms[loc];
        if (!trans) continue;
        if (!form.value.metaData.translations[loc]) {
          form.value.metaData.translations[loc] = {};
        }
        form.value.metaData.translations[loc].title = trans.title;
        form.value.metaData.translations[loc].description = trans.description;
        form.value.metaData.translations[loc].content = trans.content;
      }
      isSaving.value = true;
      try {
        const url = editingId.value ? `/api/admin/posts/${editingId.value}` : "/api/admin/posts";
        const method = editingId.value ? "PUT" : "POST";
        await $fetch(url, {
          method,
          body: {
            ...form.value,
            key: typeof form.value.key === "string" && form.value.key.trim() ? form.value.key.trim() : null,
            sort: form.value.sort === "" || form.value.sort === null || form.value.sort === void 0 ? null : Number.isFinite(Number(form.value.sort)) ? Number(form.value.sort) : null
          }
        });
        toast.add({
          title: t("admin.common.success"),
          description: editingId.value ? t("admin.posts.toast.saved") : t("admin.posts.toast.created"),
          color: "success"
        });
        isOpen.value = false;
        emit("saved");
      } catch (e) {
        toast.add({
          title: t("admin.common.error"),
          description: ((_a = e.data) == null ? void 0 : _a.message) || t("admin.posts.toast.saveFailed"),
          color: "error"
        });
      } finally {
        isSaving.value = false;
      }
    };
    const handleFileUpload = async (event) => {
      const target = event.target;
      const files = target.files;
      if (!files || files.length === 0) return;
      isUploading.value = true;
      try {
        const formData = new FormData();
        if (files[0]) {
          formData.append("files", files[0]);
        }
        const res = await $fetch("/api/admin/upload", {
          method: "POST",
          body: formData
        });
        if (res && res.urls && res.urls.length > 0) {
          form.value.imageUrl = res.urls[0];
        }
      } catch (error) {
        toast.add({ title: t("admin.common.error"), description: t("admin.posts.toast.uploadFailed"), color: "error" });
        console.error(error);
      } finally {
        isUploading.value = false;
        if (fileInput.value) fileInput.value.value = "";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FullScreenModal = __nuxt_component_7;
      const _component_UIcon = _sfc_main$G;
      const _component_UForm = _sfc_main$3;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_USelectMenu = _sfc_main$8;
      const _component_UButton = _sfc_main$B;
      const _component_UTextarea = _sfc_main$g;
      const _component_UCheckbox = _sfc_main$9;
      _push(ssrRenderComponent(_component_FullScreenModal, mergeProps({
        modelValue: isOpen.value,
        "onUpdate:modelValue": ($event) => isOpen.value = $event,
        maxWidth: "sm:max-w-6xl",
        title: editingId.value ? _ctx.$t("admin.posts.editor.editTitle") : _ctx.$t("admin.posts.editor.createTitle")
      }, _attrs), {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
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
              variant: "solid",
              onClick: onSubmit,
              loading: isSaving.value,
              disabled: !unref(hasAdminPerm)("posts:edit")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(editingId.value ? _ctx.$t("admin.common.save") : _ctx.$t("admin.posts.editor.createTitle"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(editingId.value ? _ctx.$t("admin.common.save") : _ctx.$t("admin.posts.editor.createTitle")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end gap-3" }, [
                createVNode(_component_UButton, {
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
                  variant: "solid",
                  onClick: onSubmit,
                  loading: isSaving.value,
                  disabled: !unref(hasAdminPerm)("posts:edit")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(editingId.value ? _ctx.$t("admin.common.save") : _ctx.$t("admin.posts.editor.createTitle")), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (supportedLocales.value.length > 1) {
              _push2(`<div class="border-b border-gray-200 dark:border-gray-800/60 bg-white dark:bg-[#121214] mb-6 -mx-4 px-4 sm:-mx-6 sm:px-6"${_scopeId}><nav class="flex space-x-2 overflow-x-auto hide-scrollbar pb-2"${_scopeId}><!--[-->`);
              ssrRenderList(supportedLocales.value, (locale) => {
                _push2(`<button type="button" class="${ssrRenderClass([
                  "flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2",
                  currentTabLocale.value === locale ? "bg-primary-500/10 text-primary-400 border border-primary-500/20" : locale !== defaultLocale.value && !form.value.title ? "text-gray-600 cursor-not-allowed border border-transparent" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 border border-transparent"
                ])}"${ssrIncludeBooleanAttr(locale !== defaultLocale.value && !form.value.title) ? " disabled" : ""}${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: locale === defaultLocale.value ? "ph:star-fill" : "ph:translate",
                  class: [
                    "w-4 h-4",
                    locale === defaultLocale.value ? "text-yellow-500" : ""
                  ]
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(locale.toUpperCase())}</button>`);
              });
              _push2(`<!--]--></nav></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UForm, {
              state: form.value,
              class: "space-y-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: currentTabLocale.value === defaultLocale.value ? _ctx.$t("admin.posts.editor.fieldTitle") : _ctx.$t("admin.posts.editor.fieldTitleLocale", { locale: currentTabLocale.value }),
                    name: "title",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (currentTabLocale.value === defaultLocale.value) {
                          _push4(ssrRenderComponent(_component_UInput, {
                            modelValue: form.value.title,
                            "onUpdate:modelValue": ($event) => form.value.title = $event,
                            class: "w-full",
                            onInput: generateSlug
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_component_UInput, {
                            modelValue: translationForms[currentTabLocale.value].title,
                            "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].title = $event,
                            class: "w-full",
                            placeholder: _ctx.$t("admin.posts.editor.translatedTitlePlaceholder", { locale: currentTabLocale.value })
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UInput, {
                            key: 0,
                            modelValue: form.value.title,
                            "onUpdate:modelValue": ($event) => form.value.title = $event,
                            class: "w-full",
                            onInput: generateSlug
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UInput, {
                            key: 1,
                            modelValue: translationForms[currentTabLocale.value].title,
                            "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].title = $event,
                            class: "w-full",
                            placeholder: _ctx.$t("admin.posts.editor.translatedTitlePlaceholder", { locale: currentTabLocale.value })
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (currentTabLocale.value === defaultLocale.value) {
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: _ctx.$t("admin.posts.editor.fieldSlug"),
                      name: "slug",
                      required: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UInput, {
                            modelValue: form.value.slug,
                            "onUpdate:modelValue": ($event) => form.value.slug = $event,
                            class: "w-full font-mono text-sm"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UInput, {
                              modelValue: form.value.slug,
                              "onUpdate:modelValue": ($event) => form.value.slug = $event,
                              class: "w-full font-mono text-sm"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (currentTabLocale.value === defaultLocale.value) {
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: _ctx.$t("admin.posts.editor.fieldKey"),
                      name: "key"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UInput, {
                            modelValue: form.value.key,
                            "onUpdate:modelValue": ($event) => form.value.key = $event,
                            class: "w-full font-mono text-sm",
                            placeholder: _ctx.$t("admin.posts.editor.keyPlaceholder")
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UInput, {
                              modelValue: form.value.key,
                              "onUpdate:modelValue": ($event) => form.value.key = $event,
                              class: "w-full font-mono text-sm",
                              placeholder: _ctx.$t("admin.posts.editor.keyPlaceholder")
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (currentTabLocale.value === defaultLocale.value) {
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: _ctx.$t("admin.posts.editor.fieldSort"),
                      name: "sort"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UInput, {
                            modelValue: form.value.sort,
                            "onUpdate:modelValue": ($event) => form.value.sort = $event,
                            type: "number",
                            class: "w-full font-mono text-sm",
                            placeholder: _ctx.$t("admin.posts.editor.sortPlaceholder")
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UInput, {
                              modelValue: form.value.sort,
                              "onUpdate:modelValue": ($event) => form.value.sort = $event,
                              type: "number",
                              class: "w-full font-mono text-sm",
                              placeholder: _ctx.$t("admin.posts.editor.sortPlaceholder")
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (currentTabLocale.value === defaultLocale.value) {
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: _ctx.$t("admin.posts.editor.fieldType"),
                      name: "type"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_USelectMenu, {
                            modelValue: form.value.type,
                            "onUpdate:modelValue": ($event) => form.value.type = $event,
                            items: typeOptions.value,
                            "value-key": "value",
                            class: "w-full"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_USelectMenu, {
                              modelValue: form.value.type,
                              "onUpdate:modelValue": ($event) => form.value.type = $event,
                              items: typeOptions.value,
                              "value-key": "value",
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (currentTabLocale.value === defaultLocale.value) {
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: _ctx.$t("admin.posts.editor.fieldCover"),
                      name: "imageUrl"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex gap-2 w-full"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UInput, {
                            modelValue: form.value.imageUrl,
                            "onUpdate:modelValue": ($event) => form.value.imageUrl = $event,
                            class: "flex-1"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UButton, {
                            color: "neutral",
                            variant: "outline",
                            icon: "ph:upload-simple",
                            loading: isUploading.value,
                            onClick: ($event) => {
                              var _a;
                              return (_a = fileInput.value) == null ? void 0 : _a.click();
                            }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(_ctx.$t("admin.posts.editor.upload"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.$t("admin.posts.editor.upload")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<input type="file" class="hidden" accept="image/png, image/jpeg, image/webp, image/gif"${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex gap-2 w-full" }, [
                              createVNode(_component_UInput, {
                                modelValue: form.value.imageUrl,
                                "onUpdate:modelValue": ($event) => form.value.imageUrl = $event,
                                class: "flex-1"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_UButton, {
                                color: "neutral",
                                variant: "outline",
                                icon: "ph:upload-simple",
                                loading: isUploading.value,
                                onClick: ($event) => {
                                  var _a;
                                  return (_a = fileInput.value) == null ? void 0 : _a.click();
                                }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("admin.posts.editor.upload")), 1)
                                ]),
                                _: 1
                              }, 8, ["loading", "onClick"]),
                              createVNode("input", {
                                type: "file",
                                ref_key: "fileInput",
                                ref: fileInput,
                                class: "hidden",
                                accept: "image/png, image/jpeg, image/webp, image/gif",
                                onChange: handleFileUpload
                              }, null, 544)
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UFormField, { name: "description" }, {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center justify-between w-full"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(currentTabLocale.value === defaultLocale.value ? _ctx.$t("admin.posts.editor.fieldDescription") : _ctx.$t("admin.posts.editor.fieldDescriptionLocale", { locale: currentTabLocale.value }))}</span>`);
                        if (currentTabLocale.value === defaultLocale.value) {
                          _push4(ssrRenderComponent(_component_UButton, {
                            size: "xs",
                            variant: "ghost",
                            color: "neutral",
                            icon: "ph:text-align-left",
                            disabled: !form.value.content,
                            onClick: generateDescription,
                            class: "ml-2 shrink-0"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(_ctx.$t("admin.posts.editor.generateDesc"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.$t("admin.posts.editor.generateDesc")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center justify-between w-full" }, [
                            createVNode("span", null, toDisplayString(currentTabLocale.value === defaultLocale.value ? _ctx.$t("admin.posts.editor.fieldDescription") : _ctx.$t("admin.posts.editor.fieldDescriptionLocale", { locale: currentTabLocale.value })), 1),
                            currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UButton, {
                              key: 0,
                              size: "xs",
                              variant: "ghost",
                              color: "neutral",
                              icon: "ph:text-align-left",
                              disabled: !form.value.content,
                              onClick: generateDescription,
                              class: "ml-2 shrink-0"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("admin.posts.editor.generateDesc")), 1)
                              ]),
                              _: 1
                            }, 8, ["disabled"])) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (currentTabLocale.value === defaultLocale.value) {
                          _push4(ssrRenderComponent(_component_UTextarea, {
                            modelValue: form.value.description,
                            "onUpdate:modelValue": ($event) => form.value.description = $event,
                            rows: 2,
                            class: "w-full"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_component_UTextarea, {
                            modelValue: translationForms[currentTabLocale.value].description,
                            "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].description = $event,
                            rows: 2,
                            class: "w-full",
                            placeholder: _ctx.$t("admin.posts.editor.translatedDescPlaceholder", { locale: currentTabLocale.value })
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UTextarea, {
                            key: 0,
                            modelValue: form.value.description,
                            "onUpdate:modelValue": ($event) => form.value.description = $event,
                            rows: 2,
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UTextarea, {
                            key: 1,
                            modelValue: translationForms[currentTabLocale.value].description,
                            "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].description = $event,
                            rows: 2,
                            class: "w-full",
                            placeholder: _ctx.$t("admin.posts.editor.translatedDescPlaceholder", { locale: currentTabLocale.value })
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: currentTabLocale.value === defaultLocale.value ? _ctx.$t("admin.posts.editor.fieldContent") : _ctx.$t("admin.posts.editor.fieldContentLocale", { locale: currentTabLocale.value }),
                    name: "content"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900/50"${_scopeId3}>`);
                        if (currentTabLocale.value === defaultLocale.value) {
                          _push4(ssrRenderComponent(unref(RichEditor), {
                            modelValue: form.value.content,
                            "onUpdate:modelValue": ($event) => form.value.content = $event
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(unref(RichEditor), {
                            modelValue: translationForms[currentTabLocale.value].content,
                            "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].content = $event
                          }, null, _parent4, _scopeId3));
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900/50" }, [
                            currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(unref(RichEditor), {
                              key: 0,
                              modelValue: form.value.content,
                              "onUpdate:modelValue": ($event) => form.value.content = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(unref(RichEditor), {
                              key: 1,
                              modelValue: translationForms[currentTabLocale.value].content,
                              "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].content = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (currentTabLocale.value === defaultLocale.value) {
                    _push3(ssrRenderComponent(_component_UFormField, { name: "isActive" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UCheckbox, {
                            modelValue: form.value.isActive,
                            "onUpdate:modelValue": ($event) => form.value.isActive = $event,
                            label: _ctx.$t("admin.posts.editor.publishNow")
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UCheckbox, {
                              modelValue: form.value.isActive,
                              "onUpdate:modelValue": ($event) => form.value.isActive = $event,
                              label: _ctx.$t("admin.posts.editor.publishNow")
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
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
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                      createVNode(_component_UFormField, {
                        label: currentTabLocale.value === defaultLocale.value ? _ctx.$t("admin.posts.editor.fieldTitle") : _ctx.$t("admin.posts.editor.fieldTitleLocale", { locale: currentTabLocale.value }),
                        name: "title",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UInput, {
                            key: 0,
                            modelValue: form.value.title,
                            "onUpdate:modelValue": ($event) => form.value.title = $event,
                            class: "w-full",
                            onInput: generateSlug
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UInput, {
                            key: 1,
                            modelValue: translationForms[currentTabLocale.value].title,
                            "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].title = $event,
                            class: "w-full",
                            placeholder: _ctx.$t("admin.posts.editor.translatedTitlePlaceholder", { locale: currentTabLocale.value })
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UFormField, {
                        key: 0,
                        label: _ctx.$t("admin.posts.editor.fieldSlug"),
                        name: "slug",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: form.value.slug,
                            "onUpdate:modelValue": ($event) => form.value.slug = $event,
                            class: "w-full font-mono text-sm"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])) : createCommentVNode("", true),
                      currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UFormField, {
                        key: 1,
                        label: _ctx.$t("admin.posts.editor.fieldKey"),
                        name: "key"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: form.value.key,
                            "onUpdate:modelValue": ($event) => form.value.key = $event,
                            class: "w-full font-mono text-sm",
                            placeholder: _ctx.$t("admin.posts.editor.keyPlaceholder")
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])) : createCommentVNode("", true),
                      currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UFormField, {
                        key: 2,
                        label: _ctx.$t("admin.posts.editor.fieldSort"),
                        name: "sort"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: form.value.sort,
                            "onUpdate:modelValue": ($event) => form.value.sort = $event,
                            type: "number",
                            class: "w-full font-mono text-sm",
                            placeholder: _ctx.$t("admin.posts.editor.sortPlaceholder")
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])) : createCommentVNode("", true),
                      currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UFormField, {
                        key: 3,
                        label: _ctx.$t("admin.posts.editor.fieldType"),
                        name: "type"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelectMenu, {
                            modelValue: form.value.type,
                            "onUpdate:modelValue": ($event) => form.value.type = $event,
                            items: typeOptions.value,
                            "value-key": "value",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }, 8, ["label"])) : createCommentVNode("", true),
                      currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UFormField, {
                        key: 4,
                        label: _ctx.$t("admin.posts.editor.fieldCover"),
                        name: "imageUrl"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex gap-2 w-full" }, [
                            createVNode(_component_UInput, {
                              modelValue: form.value.imageUrl,
                              "onUpdate:modelValue": ($event) => form.value.imageUrl = $event,
                              class: "flex-1"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "outline",
                              icon: "ph:upload-simple",
                              loading: isUploading.value,
                              onClick: ($event) => {
                                var _a;
                                return (_a = fileInput.value) == null ? void 0 : _a.click();
                              }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("admin.posts.editor.upload")), 1)
                              ]),
                              _: 1
                            }, 8, ["loading", "onClick"]),
                            createVNode("input", {
                              type: "file",
                              ref_key: "fileInput",
                              ref: fileInput,
                              class: "hidden",
                              accept: "image/png, image/jpeg, image/webp, image/gif",
                              onChange: handleFileUpload
                            }, null, 544)
                          ])
                        ]),
                        _: 1
                      }, 8, ["label"])) : createCommentVNode("", true)
                    ]),
                    createVNode(_component_UFormField, { name: "description" }, {
                      label: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between w-full" }, [
                          createVNode("span", null, toDisplayString(currentTabLocale.value === defaultLocale.value ? _ctx.$t("admin.posts.editor.fieldDescription") : _ctx.$t("admin.posts.editor.fieldDescriptionLocale", { locale: currentTabLocale.value })), 1),
                          currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UButton, {
                            key: 0,
                            size: "xs",
                            variant: "ghost",
                            color: "neutral",
                            icon: "ph:text-align-left",
                            disabled: !form.value.content,
                            onClick: generateDescription,
                            class: "ml-2 shrink-0"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("admin.posts.editor.generateDesc")), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled"])) : createCommentVNode("", true)
                        ])
                      ]),
                      default: withCtx(() => [
                        currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UTextarea, {
                          key: 0,
                          modelValue: form.value.description,
                          "onUpdate:modelValue": ($event) => form.value.description = $event,
                          rows: 2,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UTextarea, {
                          key: 1,
                          modelValue: translationForms[currentTabLocale.value].description,
                          "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].description = $event,
                          rows: 2,
                          class: "w-full",
                          placeholder: _ctx.$t("admin.posts.editor.translatedDescPlaceholder", { locale: currentTabLocale.value })
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: currentTabLocale.value === defaultLocale.value ? _ctx.$t("admin.posts.editor.fieldContent") : _ctx.$t("admin.posts.editor.fieldContentLocale", { locale: currentTabLocale.value }),
                      name: "content"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900/50" }, [
                          currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(unref(RichEditor), {
                            key: 0,
                            modelValue: form.value.content,
                            "onUpdate:modelValue": ($event) => form.value.content = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(unref(RichEditor), {
                            key: 1,
                            modelValue: translationForms[currentTabLocale.value].content,
                            "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].content = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                        ])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UFormField, {
                      key: 0,
                      name: "isActive"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UCheckbox, {
                          modelValue: form.value.isActive,
                          "onUpdate:modelValue": ($event) => form.value.isActive = $event,
                          label: _ctx.$t("admin.posts.editor.publishNow")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              supportedLocales.value.length > 1 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "border-b border-gray-200 dark:border-gray-800/60 bg-white dark:bg-[#121214] mb-6 -mx-4 px-4 sm:-mx-6 sm:px-6"
              }, [
                createVNode("nav", { class: "flex space-x-2 overflow-x-auto hide-scrollbar pb-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(supportedLocales.value, (locale) => {
                    return openBlock(), createBlock("button", {
                      key: locale,
                      type: "button",
                      onClick: () => {
                        if (locale !== defaultLocale.value && !form.value.title) return;
                        currentTabLocale.value = locale;
                      },
                      class: [
                        "flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2",
                        currentTabLocale.value === locale ? "bg-primary-500/10 text-primary-400 border border-primary-500/20" : locale !== defaultLocale.value && !form.value.title ? "text-gray-600 cursor-not-allowed border border-transparent" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 border border-transparent"
                      ],
                      disabled: locale !== defaultLocale.value && !form.value.title
                    }, [
                      createVNode(_component_UIcon, {
                        name: locale === defaultLocale.value ? "ph:star-fill" : "ph:translate",
                        class: [
                          "w-4 h-4",
                          locale === defaultLocale.value ? "text-yellow-500" : ""
                        ]
                      }, null, 8, ["name", "class"]),
                      createTextVNode(" " + toDisplayString(locale.toUpperCase()), 1)
                    ], 10, ["onClick", "disabled"]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true),
              createVNode(_component_UForm, {
                state: form.value,
                class: "space-y-6"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                    createVNode(_component_UFormField, {
                      label: currentTabLocale.value === defaultLocale.value ? _ctx.$t("admin.posts.editor.fieldTitle") : _ctx.$t("admin.posts.editor.fieldTitleLocale", { locale: currentTabLocale.value }),
                      name: "title",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UInput, {
                          key: 0,
                          modelValue: form.value.title,
                          "onUpdate:modelValue": ($event) => form.value.title = $event,
                          class: "w-full",
                          onInput: generateSlug
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UInput, {
                          key: 1,
                          modelValue: translationForms[currentTabLocale.value].title,
                          "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].title = $event,
                          class: "w-full",
                          placeholder: _ctx.$t("admin.posts.editor.translatedTitlePlaceholder", { locale: currentTabLocale.value })
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UFormField, {
                      key: 0,
                      label: _ctx.$t("admin.posts.editor.fieldSlug"),
                      name: "slug",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: form.value.slug,
                          "onUpdate:modelValue": ($event) => form.value.slug = $event,
                          class: "w-full font-mono text-sm"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"])) : createCommentVNode("", true),
                    currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UFormField, {
                      key: 1,
                      label: _ctx.$t("admin.posts.editor.fieldKey"),
                      name: "key"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: form.value.key,
                          "onUpdate:modelValue": ($event) => form.value.key = $event,
                          class: "w-full font-mono text-sm",
                          placeholder: _ctx.$t("admin.posts.editor.keyPlaceholder")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"])) : createCommentVNode("", true),
                    currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UFormField, {
                      key: 2,
                      label: _ctx.$t("admin.posts.editor.fieldSort"),
                      name: "sort"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: form.value.sort,
                          "onUpdate:modelValue": ($event) => form.value.sort = $event,
                          type: "number",
                          class: "w-full font-mono text-sm",
                          placeholder: _ctx.$t("admin.posts.editor.sortPlaceholder")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"])) : createCommentVNode("", true),
                    currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UFormField, {
                      key: 3,
                      label: _ctx.$t("admin.posts.editor.fieldType"),
                      name: "type"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelectMenu, {
                          modelValue: form.value.type,
                          "onUpdate:modelValue": ($event) => form.value.type = $event,
                          items: typeOptions.value,
                          "value-key": "value",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }, 8, ["label"])) : createCommentVNode("", true),
                    currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UFormField, {
                      key: 4,
                      label: _ctx.$t("admin.posts.editor.fieldCover"),
                      name: "imageUrl"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex gap-2 w-full" }, [
                          createVNode(_component_UInput, {
                            modelValue: form.value.imageUrl,
                            "onUpdate:modelValue": ($event) => form.value.imageUrl = $event,
                            class: "flex-1"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_UButton, {
                            color: "neutral",
                            variant: "outline",
                            icon: "ph:upload-simple",
                            loading: isUploading.value,
                            onClick: ($event) => {
                              var _a;
                              return (_a = fileInput.value) == null ? void 0 : _a.click();
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("admin.posts.editor.upload")), 1)
                            ]),
                            _: 1
                          }, 8, ["loading", "onClick"]),
                          createVNode("input", {
                            type: "file",
                            ref_key: "fileInput",
                            ref: fileInput,
                            class: "hidden",
                            accept: "image/png, image/jpeg, image/webp, image/gif",
                            onChange: handleFileUpload
                          }, null, 544)
                        ])
                      ]),
                      _: 1
                    }, 8, ["label"])) : createCommentVNode("", true)
                  ]),
                  createVNode(_component_UFormField, { name: "description" }, {
                    label: withCtx(() => [
                      createVNode("div", { class: "flex items-center justify-between w-full" }, [
                        createVNode("span", null, toDisplayString(currentTabLocale.value === defaultLocale.value ? _ctx.$t("admin.posts.editor.fieldDescription") : _ctx.$t("admin.posts.editor.fieldDescriptionLocale", { locale: currentTabLocale.value })), 1),
                        currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UButton, {
                          key: 0,
                          size: "xs",
                          variant: "ghost",
                          color: "neutral",
                          icon: "ph:text-align-left",
                          disabled: !form.value.content,
                          onClick: generateDescription,
                          class: "ml-2 shrink-0"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("admin.posts.editor.generateDesc")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])) : createCommentVNode("", true)
                      ])
                    ]),
                    default: withCtx(() => [
                      currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UTextarea, {
                        key: 0,
                        modelValue: form.value.description,
                        "onUpdate:modelValue": ($event) => form.value.description = $event,
                        rows: 2,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UTextarea, {
                        key: 1,
                        modelValue: translationForms[currentTabLocale.value].description,
                        "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].description = $event,
                        rows: 2,
                        class: "w-full",
                        placeholder: _ctx.$t("admin.posts.editor.translatedDescPlaceholder", { locale: currentTabLocale.value })
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: currentTabLocale.value === defaultLocale.value ? _ctx.$t("admin.posts.editor.fieldContent") : _ctx.$t("admin.posts.editor.fieldContentLocale", { locale: currentTabLocale.value }),
                    name: "content"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900/50" }, [
                        currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(unref(RichEditor), {
                          key: 0,
                          modelValue: form.value.content,
                          "onUpdate:modelValue": ($event) => form.value.content = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(unref(RichEditor), {
                          key: 1,
                          modelValue: translationForms[currentTabLocale.value].content,
                          "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].content = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                      ])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UFormField, {
                    key: 0,
                    name: "isActive"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UCheckbox, {
                        modelValue: form.value.isActive,
                        "onUpdate:modelValue": ($event) => form.value.isActive = $event,
                        label: _ctx.$t("admin.posts.editor.publishNow")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["state"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/posts/PostEditorModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main$2, { __name: "AdminPostsPostEditorModal" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChangelogModal",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean },
    post: {}
  },
  emits: ["update:modelValue", "saved"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useI18n();
    const toast = useToast();
    const { settings } = useSettings();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const isOpen = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    const editingId = ref(null);
    const isSaving = ref(false);
    const isFetchingLatestVersion = ref(false);
    const modalTitle = computed(() => {
      return editingId.value ? t("admin.posts.changelog.editTitle") : t("admin.posts.changelog.createTitle");
    });
    const saveButtonText = computed(() => {
      return editingId.value ? t("admin.common.save") : t("admin.posts.changelog.createTitle");
    });
    const rawSupportedLocales = computed(() => {
      if (settings.value) {
        let i18nEnabled = "true";
        let rawLocales = "en,zh";
        if (Array.isArray(settings.value)) {
          const i18nSetting = settings.value.find((s) => s.key === "i18n_enabled");
          if (i18nSetting) i18nEnabled = String(i18nSetting.value);
          const localesSetting = settings.value.find((s) => s.key === "supported_locales");
          if (localesSetting) rawLocales = String(localesSetting.value);
        } else {
          if (settings.value.i18n_enabled !== void 0) {
            i18nEnabled = String(settings.value.i18n_enabled);
          }
          if (settings.value.supported_locales !== void 0) {
            rawLocales = String(settings.value.supported_locales);
          }
        }
        if (i18nEnabled === "false") {
          return ["en"];
        }
        if (rawLocales === "") {
          return ["en"];
        }
        return rawLocales.split(",").map((l) => l.trim()).filter(Boolean);
      }
      return ["en", "zh", "ru"];
    });
    const defaultLocale = computed(() => {
      if (settings.value) {
        if (Array.isArray(settings.value)) {
          const defaultLocaleSetting = settings.value.find((s) => s.key === "default_locale");
          if (defaultLocaleSetting && defaultLocaleSetting.value) {
            return defaultLocaleSetting.value;
          }
        } else if (settings.value.default_locale) {
          return settings.value.default_locale;
        }
      }
      return rawSupportedLocales.value[0] || "en";
    });
    const supportedLocales = computed(() => {
      const list = [...rawSupportedLocales.value];
      const def = defaultLocale.value;
      if (!def || !list.includes(def)) return list;
      return [def, ...list.filter((l) => l !== def)];
    });
    const currentTabLocale = ref(defaultLocale.value || "en");
    const fieldTitleLabel = computed(() => {
      if (currentTabLocale.value === defaultLocale.value) {
        return t("admin.posts.changelog.fieldTitle");
      }
      return t("admin.posts.editor.fieldTitleLocale", { locale: currentTabLocale.value });
    });
    const translatedTitlePlaceholder = computed(() => {
      return t("admin.posts.editor.translatedTitlePlaceholder", { locale: currentTabLocale.value });
    });
    const translatedDescPlaceholder = computed(() => {
      return t("admin.posts.editor.translatedDescPlaceholder", { locale: currentTabLocale.value });
    });
    function isTabDisabled(locale) {
      return locale !== defaultLocale.value && !form.value.title;
    }
    function getTabClass(locale) {
      const base = "flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2";
      if (currentTabLocale.value === locale) {
        return `${base} bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-semibold`;
      }
      if (isTabDisabled(locale)) {
        return `${base} text-gray-400 cursor-not-allowed border border-transparent`;
      }
      return `${base} text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 border border-transparent`;
    }
    function selectLocale(locale) {
      if (isTabDisabled(locale)) return;
      currentTabLocale.value = locale;
    }
    watch(
      defaultLocale,
      (val) => {
        if (!currentTabLocale.value || currentTabLocale.value === "en") {
          currentTabLocale.value = val || "en";
        }
      },
      { immediate: true }
    );
    const translationForms = reactive({});
    const defaultForm = {
      version: "",
      slug: "",
      title: "",
      description: "",
      content: "",
      isActive: true
    };
    const form = ref({ ...defaultForm });
    const passthrough = ref({
      sort: null,
      imageUrl: null,
      metaData: {}
    });
    const generateSlug = () => {
      if (editingId.value) return;
      const baseText = form.value.version || form.value.title;
      form.value.slug = baseText.toLowerCase().replace(/[^a-z0-9.]+/g, "-").replace(/(^-|-$)+/g, "");
    };
    const onVersionInput = () => {
      if (!editingId.value) {
        generateSlug();
      }
    };
    const onTitleInput = () => {
      if (!editingId.value && !form.value.slug) {
        generateSlug();
      }
    };
    const bumpVersion = (version) => {
      const match = version.match(/^(\D*)(\d+(?:\.\d+)*)$/);
      if (!match || !match[2]) return version;
      const prefix = match[1] || "";
      const segments = match[2].split(".");
      const lastIndex = segments.length - 1;
      segments[lastIndex] = String(Number(segments[lastIndex]) + 1);
      return prefix + segments.join(".");
    };
    watch(
      () => props.modelValue,
      async (open) => {
        var _a, _b, _c, _d;
        if (!open) return;
        for (const key in translationForms) {
          delete translationForms[key];
        }
        supportedLocales.value.forEach((l) => {
          if (l !== defaultLocale.value) {
            translationForms[l] = { title: "", description: "", content: "" };
          }
        });
        if (props.post) {
          editingId.value = props.post.id;
          form.value = {
            version: props.post.key || "",
            slug: props.post.slug || props.post.key || "",
            title: props.post.title || "",
            description: props.post.description || "",
            content: props.post.content || "",
            isActive: !!props.post.isActive
          };
          let meta = props.post.metaData || {};
          if (typeof meta === "string") {
            try {
              meta = JSON.parse(meta);
            } catch {
              meta = {};
            }
          }
          passthrough.value = {
            sort: (_a = props.post.sort) != null ? _a : null,
            imageUrl: (_b = props.post.imageUrl) != null ? _b : null,
            metaData: meta
          };
          if (meta == null ? void 0 : meta.translations) {
            Object.keys(meta.translations).forEach((loc) => {
              if (loc !== defaultLocale.value && translationForms[loc]) {
                const trans = meta.translations[loc];
                translationForms[loc].title = trans.title || "";
                translationForms[loc].description = trans.description || "";
                translationForms[loc].content = trans.content || "";
              }
            });
          }
          currentTabLocale.value = defaultLocale.value;
          return;
        }
        editingId.value = null;
        form.value = { ...defaultForm };
        passthrough.value = { sort: null, imageUrl: null, metaData: {} };
        currentTabLocale.value = defaultLocale.value;
        isFetchingLatestVersion.value = true;
        try {
          const res = await $fetch("/api/admin/posts", {
            query: { type: "changelog", page: 1, pageSize: 1 }
          });
          const latestKey = (_d = (_c = res == null ? void 0 : res.data) == null ? void 0 : _c[0]) == null ? void 0 : _d.key;
          if (latestKey) {
            form.value.version = bumpVersion(String(latestKey));
            form.value.title = form.value.version;
            generateSlug();
          }
        } catch {
        } finally {
          isFetchingLatestVersion.value = false;
        }
      }
    );
    const save = async () => {
      var _a;
      if (!form.value.version || !form.value.title) {
        toast.add({ title: t("admin.common.error"), description: t("admin.posts.toast.changelogRequired"), color: "error" });
        return;
      }
      if (!form.value.slug) generateSlug();
      if (!passthrough.value.metaData) passthrough.value.metaData = {};
      if (!passthrough.value.metaData.translations) passthrough.value.metaData.translations = {};
      for (const loc of supportedLocales.value) {
        if (loc === defaultLocale.value) continue;
        const trans = translationForms[loc];
        if (!trans) continue;
        if (!passthrough.value.metaData.translations[loc]) {
          passthrough.value.metaData.translations[loc] = {};
        }
        passthrough.value.metaData.translations[loc].title = trans.title || "";
        passthrough.value.metaData.translations[loc].description = trans.description || "";
        passthrough.value.metaData.translations[loc].content = trans.content || "";
      }
      isSaving.value = true;
      try {
        const url = editingId.value ? `/api/admin/posts/${editingId.value}` : "/api/admin/posts";
        const method = editingId.value ? "PUT" : "POST";
        await $fetch(url, {
          method,
          body: {
            title: form.value.title,
            description: form.value.description,
            content: form.value.content,
            isActive: form.value.isActive,
            type: "changelog",
            key: form.value.version.trim(),
            slug: form.value.slug.trim(),
            sort: passthrough.value.sort,
            imageUrl: passthrough.value.imageUrl,
            metaData: passthrough.value.metaData
          }
        });
        toast.add({
          title: t("admin.common.success"),
          description: editingId.value ? t("admin.posts.toast.changelogSaved") : t("admin.posts.toast.changelogCreated"),
          color: "success"
        });
        isOpen.value = false;
        emit("saved");
      } catch (e) {
        toast.add({
          title: t("admin.common.error"),
          description: ((_a = e.data) == null ? void 0 : _a.message) || t("admin.posts.toast.changelogSaveFailed"),
          color: "error"
        });
      } finally {
        isSaving.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FullScreenModal = __nuxt_component_7;
      const _component_UIcon = _sfc_main$G;
      const _component_UForm = _sfc_main$3;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_UTextarea = _sfc_main$g;
      const _component_RichEditor = __nuxt_component_8;
      const _component_UCheckbox = _sfc_main$9;
      const _component_UButton = _sfc_main$B;
      _push(ssrRenderComponent(_component_FullScreenModal, mergeProps({
        modelValue: isOpen.value,
        "onUpdate:modelValue": ($event) => isOpen.value = $event,
        maxWidth: "sm:max-w-4xl",
        defaultFullscreen: false,
        title: modalTitle.value
      }, _attrs), {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
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
              color: "primary",
              variant: "solid",
              loading: isSaving.value,
              disabled: !unref(hasAdminPerm)("posts:edit"),
              onClick: save
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(saveButtonText.value)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(saveButtonText.value), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                variant: "ghost",
                onClick: ($event) => isOpen.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_UButton, {
                color: "primary",
                variant: "solid",
                loading: isSaving.value,
                disabled: !unref(hasAdminPerm)("posts:edit"),
                onClick: save
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(saveButtonText.value), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (supportedLocales.value.length > 1) {
              _push2(`<div class="border-b border-gray-200 dark:border-gray-800/60 bg-white dark:bg-[#121214] mb-6 -mx-4 px-4 sm:-mx-6 sm:px-6"${_scopeId}><nav class="flex space-x-2 overflow-x-auto hide-scrollbar pb-2"${_scopeId}><!--[-->`);
              ssrRenderList(supportedLocales.value, (locale) => {
                _push2(`<button type="button" class="${ssrRenderClass(getTabClass(locale))}"${ssrIncludeBooleanAttr(isTabDisabled(locale)) ? " disabled" : ""}${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: locale === defaultLocale.value ? "ph:star-fill" : "ph:translate",
                  class: locale === defaultLocale.value ? "w-4 h-4 text-yellow-500" : "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(locale.toUpperCase())}</button>`);
              });
              _push2(`<!--]--></nav></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UForm, {
              state: form.value,
              class: "space-y-5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (currentTabLocale.value === defaultLocale.value) {
                    _push3(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: _ctx.$t("admin.posts.changelog.fieldVersion"),
                      name: "version",
                      required: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UInput, {
                            modelValue: form.value.version,
                            "onUpdate:modelValue": ($event) => form.value.version = $event,
                            class: "w-full font-mono text-sm",
                            placeholder: _ctx.$t("admin.posts.changelog.versionPlaceholder"),
                            loading: isFetchingLatestVersion.value,
                            onInput: onVersionInput
                          }, null, _parent4, _scopeId3));
                          _push4(`<p class="text-xs text-gray-500 dark:text-gray-400 mt-1"${_scopeId3}>${ssrInterpolate(_ctx.$t("admin.posts.changelog.versionHint"))}</p>`);
                        } else {
                          return [
                            createVNode(_component_UInput, {
                              modelValue: form.value.version,
                              "onUpdate:modelValue": ($event) => form.value.version = $event,
                              class: "w-full font-mono text-sm",
                              placeholder: _ctx.$t("admin.posts.changelog.versionPlaceholder"),
                              loading: isFetchingLatestVersion.value,
                              onInput: onVersionInput
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "loading"]),
                            createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, toDisplayString(_ctx.$t("admin.posts.changelog.versionHint")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: _ctx.$t("admin.posts.editor.fieldSlug"),
                      name: "slug",
                      required: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UInput, {
                            modelValue: form.value.slug,
                            "onUpdate:modelValue": ($event) => form.value.slug = $event,
                            class: "w-full font-mono text-sm",
                            placeholder: "v1.1.10"
                          }, null, _parent4, _scopeId3));
                          _push4(`<p class="text-xs text-gray-500 dark:text-gray-400 mt-1"${_scopeId3}>/changelog \u8BBF\u95EE\u4E0E\u5B9A\u4F4D\u6807\u8BC6</p>`);
                        } else {
                          return [
                            createVNode(_component_UInput, {
                              modelValue: form.value.slug,
                              "onUpdate:modelValue": ($event) => form.value.slug = $event,
                              class: "w-full font-mono text-sm",
                              placeholder: "v1.1.10"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, "/changelog \u8BBF\u95EE\u4E0E\u5B9A\u4F4D\u6807\u8BC6")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: fieldTitleLabel.value,
                    name: "title",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (currentTabLocale.value === defaultLocale.value) {
                          _push4(ssrRenderComponent(_component_UInput, {
                            modelValue: form.value.title,
                            "onUpdate:modelValue": ($event) => form.value.title = $event,
                            class: "w-full",
                            onInput: onTitleInput
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_component_UInput, {
                            modelValue: translationForms[currentTabLocale.value].title,
                            "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].title = $event,
                            class: "w-full",
                            placeholder: translatedTitlePlaceholder.value
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UInput, {
                            key: 0,
                            modelValue: form.value.title,
                            "onUpdate:modelValue": ($event) => form.value.title = $event,
                            class: "w-full",
                            onInput: onTitleInput
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UInput, {
                            key: 1,
                            modelValue: translationForms[currentTabLocale.value].title,
                            "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].title = $event,
                            class: "w-full",
                            placeholder: translatedTitlePlaceholder.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: _ctx.$t("admin.posts.changelog.fieldDesc"),
                    name: "description"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (currentTabLocale.value === defaultLocale.value) {
                          _push4(ssrRenderComponent(_component_UTextarea, {
                            modelValue: form.value.description,
                            "onUpdate:modelValue": ($event) => form.value.description = $event,
                            rows: 2,
                            class: "w-full"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_component_UTextarea, {
                            modelValue: translationForms[currentTabLocale.value].description,
                            "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].description = $event,
                            rows: 2,
                            class: "w-full",
                            placeholder: translatedDescPlaceholder.value
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UTextarea, {
                            key: 0,
                            modelValue: form.value.description,
                            "onUpdate:modelValue": ($event) => form.value.description = $event,
                            rows: 2,
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UTextarea, {
                            key: 1,
                            modelValue: translationForms[currentTabLocale.value].description,
                            "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].description = $event,
                            rows: 2,
                            class: "w-full",
                            placeholder: translatedDescPlaceholder.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: _ctx.$t("admin.posts.changelog.fieldContent"),
                    name: "content"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900/50"${_scopeId3}>`);
                        if (currentTabLocale.value === defaultLocale.value) {
                          _push4(ssrRenderComponent(_component_RichEditor, {
                            modelValue: form.value.content,
                            "onUpdate:modelValue": ($event) => form.value.content = $event
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_component_RichEditor, {
                            modelValue: translationForms[currentTabLocale.value].content,
                            "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].content = $event
                          }, null, _parent4, _scopeId3));
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900/50" }, [
                            currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_RichEditor, {
                              key: 0,
                              modelValue: form.value.content,
                              "onUpdate:modelValue": ($event) => form.value.content = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_RichEditor, {
                              key: 1,
                              modelValue: translationForms[currentTabLocale.value].content,
                              "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].content = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (currentTabLocale.value === defaultLocale.value) {
                    _push3(ssrRenderComponent(_component_UFormField, { name: "isActive" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UCheckbox, {
                            modelValue: form.value.isActive,
                            "onUpdate:modelValue": ($event) => form.value.isActive = $event,
                            label: _ctx.$t("admin.posts.changelog.publishNow")
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UCheckbox, {
                              modelValue: form.value.isActive,
                              "onUpdate:modelValue": ($event) => form.value.isActive = $event,
                              label: _ctx.$t("admin.posts.changelog.publishNow")
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
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
                    currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "grid grid-cols-1 sm:grid-cols-2 gap-4"
                    }, [
                      createVNode(_component_UFormField, {
                        label: _ctx.$t("admin.posts.changelog.fieldVersion"),
                        name: "version",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: form.value.version,
                            "onUpdate:modelValue": ($event) => form.value.version = $event,
                            class: "w-full font-mono text-sm",
                            placeholder: _ctx.$t("admin.posts.changelog.versionPlaceholder"),
                            loading: isFetchingLatestVersion.value,
                            onInput: onVersionInput
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "loading"]),
                          createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, toDisplayString(_ctx.$t("admin.posts.changelog.versionHint")), 1)
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      createVNode(_component_UFormField, {
                        label: _ctx.$t("admin.posts.editor.fieldSlug"),
                        name: "slug",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: form.value.slug,
                            "onUpdate:modelValue": ($event) => form.value.slug = $event,
                            class: "w-full font-mono text-sm",
                            placeholder: "v1.1.10"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, "/changelog \u8BBF\u95EE\u4E0E\u5B9A\u4F4D\u6807\u8BC6")
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ])) : createCommentVNode("", true),
                    createVNode(_component_UFormField, {
                      label: fieldTitleLabel.value,
                      name: "title",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UInput, {
                          key: 0,
                          modelValue: form.value.title,
                          "onUpdate:modelValue": ($event) => form.value.title = $event,
                          class: "w-full",
                          onInput: onTitleInput
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UInput, {
                          key: 1,
                          modelValue: translationForms[currentTabLocale.value].title,
                          "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].title = $event,
                          class: "w-full",
                          placeholder: translatedTitlePlaceholder.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.posts.changelog.fieldDesc"),
                      name: "description"
                    }, {
                      default: withCtx(() => [
                        currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UTextarea, {
                          key: 0,
                          modelValue: form.value.description,
                          "onUpdate:modelValue": ($event) => form.value.description = $event,
                          rows: 2,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UTextarea, {
                          key: 1,
                          modelValue: translationForms[currentTabLocale.value].description,
                          "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].description = $event,
                          rows: 2,
                          class: "w-full",
                          placeholder: translatedDescPlaceholder.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.posts.changelog.fieldContent"),
                      name: "content"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900/50" }, [
                          currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_RichEditor, {
                            key: 0,
                            modelValue: form.value.content,
                            "onUpdate:modelValue": ($event) => form.value.content = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_RichEditor, {
                            key: 1,
                            modelValue: translationForms[currentTabLocale.value].content,
                            "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].content = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                        ])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UFormField, {
                      key: 1,
                      name: "isActive"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UCheckbox, {
                          modelValue: form.value.isActive,
                          "onUpdate:modelValue": ($event) => form.value.isActive = $event,
                          label: _ctx.$t("admin.posts.changelog.publishNow")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              supportedLocales.value.length > 1 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "border-b border-gray-200 dark:border-gray-800/60 bg-white dark:bg-[#121214] mb-6 -mx-4 px-4 sm:-mx-6 sm:px-6"
              }, [
                createVNode("nav", { class: "flex space-x-2 overflow-x-auto hide-scrollbar pb-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(supportedLocales.value, (locale) => {
                    return openBlock(), createBlock("button", {
                      key: locale,
                      type: "button",
                      onClick: ($event) => selectLocale(locale),
                      class: getTabClass(locale),
                      disabled: isTabDisabled(locale)
                    }, [
                      createVNode(_component_UIcon, {
                        name: locale === defaultLocale.value ? "ph:star-fill" : "ph:translate",
                        class: locale === defaultLocale.value ? "w-4 h-4 text-yellow-500" : "w-4 h-4"
                      }, null, 8, ["name", "class"]),
                      createTextVNode(" " + toDisplayString(locale.toUpperCase()), 1)
                    ], 10, ["onClick", "disabled"]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true),
              createVNode(_component_UForm, {
                state: form.value,
                class: "space-y-5"
              }, {
                default: withCtx(() => [
                  currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid grid-cols-1 sm:grid-cols-2 gap-4"
                  }, [
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.posts.changelog.fieldVersion"),
                      name: "version",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: form.value.version,
                          "onUpdate:modelValue": ($event) => form.value.version = $event,
                          class: "w-full font-mono text-sm",
                          placeholder: _ctx.$t("admin.posts.changelog.versionPlaceholder"),
                          loading: isFetchingLatestVersion.value,
                          onInput: onVersionInput
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "loading"]),
                        createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, toDisplayString(_ctx.$t("admin.posts.changelog.versionHint")), 1)
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_UFormField, {
                      label: _ctx.$t("admin.posts.editor.fieldSlug"),
                      name: "slug",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: form.value.slug,
                          "onUpdate:modelValue": ($event) => form.value.slug = $event,
                          class: "w-full font-mono text-sm",
                          placeholder: "v1.1.10"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, "/changelog \u8BBF\u95EE\u4E0E\u5B9A\u4F4D\u6807\u8BC6")
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ])) : createCommentVNode("", true),
                  createVNode(_component_UFormField, {
                    label: fieldTitleLabel.value,
                    name: "title",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UInput, {
                        key: 0,
                        modelValue: form.value.title,
                        "onUpdate:modelValue": ($event) => form.value.title = $event,
                        class: "w-full",
                        onInput: onTitleInput
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UInput, {
                        key: 1,
                        modelValue: translationForms[currentTabLocale.value].title,
                        "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].title = $event,
                        class: "w-full",
                        placeholder: translatedTitlePlaceholder.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.posts.changelog.fieldDesc"),
                    name: "description"
                  }, {
                    default: withCtx(() => [
                      currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UTextarea, {
                        key: 0,
                        modelValue: form.value.description,
                        "onUpdate:modelValue": ($event) => form.value.description = $event,
                        rows: 2,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UTextarea, {
                        key: 1,
                        modelValue: translationForms[currentTabLocale.value].description,
                        "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].description = $event,
                        rows: 2,
                        class: "w-full",
                        placeholder: translatedDescPlaceholder.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.posts.changelog.fieldContent"),
                    name: "content"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900/50" }, [
                        currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_RichEditor, {
                          key: 0,
                          modelValue: form.value.content,
                          "onUpdate:modelValue": ($event) => form.value.content = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_RichEditor, {
                          key: 1,
                          modelValue: translationForms[currentTabLocale.value].content,
                          "onUpdate:modelValue": ($event) => translationForms[currentTabLocale.value].content = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                      ])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  currentTabLocale.value === defaultLocale.value ? (openBlock(), createBlock(_component_UFormField, {
                    key: 1,
                    name: "isActive"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UCheckbox, {
                        modelValue: form.value.isActive,
                        "onUpdate:modelValue": ($event) => form.value.isActive = $event,
                        label: _ctx.$t("admin.posts.changelog.publishNow")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["state"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/posts/ChangelogModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_10 = Object.assign(_sfc_main$1, { __name: "AdminPostsChangelogModal" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "posts",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const toast = useToast();
    const { formatDate } = useFormatTime();
    const { confirm } = useConfirm();
    const { localePath } = useLocaleRouter();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const { buildImageProxyUrl } = useImageProxy();
    const formatNumber = (num) => {
      return new Intl.NumberFormat().format(num || 0);
    };
    const copyPostUrl = async (slug) => {
      try {
        const origin = (void 0).location.origin;
        const fullUrl = `${origin}/blog/${slug}`;
        await (void 0).clipboard.writeText(fullUrl);
        toast.add({
          title: t("admin.common.success"),
          description: t("admin.posts.toast.copiedUrl"),
          color: "success"
        });
      } catch {
        toast.add({
          title: t("admin.common.error"),
          description: "\u590D\u5236\u5931\u8D25",
          color: "error"
        });
      }
    };
    const getTypeBadgeColor = (type) => {
      switch (type) {
        case "changelog":
          return "primary";
        // 紫色
        case "announcement":
          return "warning";
        // 琥珀色
        case "page":
          return "info";
        // 青蓝色
        case "blog":
        default:
          return "neutral";
      }
    };
    const getTypeBadgeIcon = (type) => {
      switch (type) {
        case "changelog":
          return "ph:rocket-launch";
        case "announcement":
          return "ph:megaphone";
        case "page":
          return "ph:file-text";
        case "blog":
        default:
          return "ph:article";
      }
    };
    const typeLabel = (type) => t(`admin.posts.type.${type}`, t(`admin.posts.type.blog`));
    const columns = computed(() => [
      { accessorKey: "id", header: "ID", meta: { class: { th: "w-16 text-center font-mono", td: "text-center font-mono text-xs text-gray-500" } } },
      { accessorKey: "image", header: t("admin.posts.col.cover"), meta: { class: { th: "w-20" } } },
      { accessorKey: "title", header: t("admin.posts.col.title") },
      { accessorKey: "type", header: t("admin.posts.col.type"), meta: { class: { th: "w-32" } } },
      { accessorKey: "views", header: t("admin.posts.col.views"), meta: { class: { th: "w-28" } } },
      { accessorKey: "status", header: t("admin.posts.col.status"), meta: { class: { th: "w-36" } } },
      { accessorKey: "createdAt", header: t("admin.posts.col.date"), meta: { class: { th: "w-36" } } },
      {
        accessorKey: "actions",
        header: t("admin.posts.col.actions"),
        meta: {
          class: {
            th: "w-32 text-right sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:to-[#121214]",
            td: "text-right font-medium sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:to-[#121214]"
          }
        }
      }
    ]);
    const searchInput = ref("");
    const searchKeyword = ref("");
    const selectedType = ref("all");
    const selectedStatus = ref("all");
    const typeOptions = computed(() => [
      { label: t("admin.posts.filter.allTypes"), value: "all" },
      { label: t("admin.posts.type.blog"), value: "blog" },
      { label: t("admin.posts.type.changelog"), value: "changelog" },
      { label: t("admin.posts.type.announcement"), value: "announcement" },
      { label: t("admin.posts.type.page"), value: "page" }
    ]);
    const statusOptions = computed(() => [
      { label: t("admin.posts.filter.allStatus"), value: "all" },
      { label: t("admin.posts.filter.statusPublished"), value: "published" },
      { label: t("admin.posts.filter.statusDraft"), value: "draft" }
    ]);
    let searchDebounceTimer = null;
    watch(searchInput, (val) => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        searchKeyword.value = val.trim();
        page.value = 1;
      }, 300);
    });
    watch([selectedType, selectedStatus], () => {
      page.value = 1;
    });
    const resetFilters = () => {
      searchInput.value = "";
      searchKeyword.value = "";
      selectedType.value = "all";
      selectedStatus.value = "all";
      page.value = 1;
    };
    const { page, pageSize, onPageChange } = usePagination(15);
    const {
      data: postsData,
      pending,
      refresh
    } = useFetch(
      "/api/admin/posts",
      {
        query: computed(() => ({
          page: page.value,
          pageSize: pageSize.value,
          type: selectedType.value === "all" ? void 0 : selectedType.value,
          status: selectedStatus.value === "all" ? void 0 : selectedStatus.value,
          search: searchKeyword.value || void 0
        })),
        watch: [page, selectedType, selectedStatus, searchKeyword]
      },
      "$ZG-nK21ims"
      /* nuxt-injected */
    );
    const totalItems = computed(() => {
      var _a;
      return ((_a = postsData.value) == null ? void 0 : _a.total) || 0;
    });
    const paginatedPosts = computed(() => {
      var _a;
      return ((_a = postsData.value) == null ? void 0 : _a.data) || [];
    });
    const stats = computed(() => {
      var _a;
      return ((_a = postsData.value) == null ? void 0 : _a.stats) || { total: 0, published: 0, draft: 0, totalViews: 0 };
    });
    const togglingId = ref(null);
    const togglePostStatus = async (post, newStatus) => {
      var _a;
      if (togglingId.value !== null) return;
      togglingId.value = post.id;
      try {
        await $fetch(`/api/admin/posts/${post.id}/status`, {
          method: "PATCH",
          body: { isActive: newStatus }
        });
        post.isActive = newStatus;
        toast.add({
          title: t("admin.common.success"),
          description: t("admin.posts.toast.statusUpdated"),
          color: "success"
        });
        refresh();
      } catch (err) {
        toast.add({
          title: t("admin.common.error"),
          description: ((_a = err.data) == null ? void 0 : _a.message) || "\u72B6\u6001\u5207\u6362\u5931\u8D25",
          color: "error"
        });
      } finally {
        togglingId.value = null;
      }
    };
    const isModalOpen = ref(false);
    const editingPost = ref(null);
    const openModal = (post) => {
      editingPost.value = post || null;
      isModalOpen.value = true;
    };
    const isChangelogModalOpen = ref(false);
    const editingChangelogPost = ref(null);
    const openChangelogModal = (post) => {
      editingChangelogPost.value = post || null;
      isChangelogModalOpen.value = true;
    };
    const createMenuItems = computed(() => [
      [
        {
          label: t("admin.posts.createMenu.article"),
          icon: "ph:article",
          onSelect: () => openModal()
        },
        {
          label: t("admin.posts.createMenu.changelog"),
          icon: "ph:rocket-launch",
          onSelect: () => openChangelogModal()
        }
      ]
    ]);
    const editPost = (post) => {
      if (post.type === "changelog") openChangelogModal(post);
      else openModal(post);
    };
    const deletePost = async (id) => {
      var _a;
      const isConfirmed = await confirm({
        title: t("admin.posts.delete.title"),
        description: t("admin.posts.delete.description")
      });
      if (!isConfirmed) return;
      try {
        await $fetch(`/api/admin/posts/${id}`, {
          method: "DELETE"
        });
        toast.add({
          title: t("admin.common.success"),
          description: t("admin.posts.toast.deleted"),
          color: "success"
        });
        refresh();
      } catch (e) {
        toast.add({
          title: t("admin.common.error"),
          description: ((_a = e.data) == null ? void 0 : _a.message) || t("admin.posts.toast.deleteFailed"),
          color: "error"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBadge = _sfc_main$x;
      const _component_UButton = _sfc_main$B;
      const _component_UDropdownMenu = _sfc_main$4;
      const _component_UIcon = _sfc_main$G;
      const _component_UInput = _sfc_main$k;
      const _component_USelect = _sfc_main$j;
      const _component_UTable = _sfc_main$h;
      const _component_USwitch = _sfc_main$6;
      const _component_UPagination = _sfc_main$n;
      const _component_AdminPostsPostEditorModal = __nuxt_component_9;
      const _component_AdminPostsChangelogModal = __nuxt_component_10;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh-7rem)] flex flex-col space-y-4" }, _attrs))}><div class="flex flex-col sm:flex-row justify-between sm:items-center gap-3 shrink-0"><div><div class="flex items-center gap-2"><h1 class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(_ctx.$t("admin.posts.title"))}</h1>`);
      _push(ssrRenderComponent(_component_UBadge, {
        color: "primary",
        variant: "subtle",
        size: "xs",
        class: "font-mono font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(totalItems.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(totalItems.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-gray-500 dark:text-gray-400 text-xs mt-0.5">${ssrInterpolate(_ctx.$t("admin.posts.subtitle"))}</p></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrow-clockwise",
        size: "sm",
        loading: unref(pending),
        class: "rounded-xl",
        onClick: unref(refresh)
      }, null, _parent));
      if (unref(hasAdminPerm)("posts:edit")) {
        _push(ssrRenderComponent(_component_UDropdownMenu, {
          items: createMenuItems.value,
          ui: { content: "w-48" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                size: "sm",
                class: "bg-purple-600 hover:bg-purple-500 text-white rounded-xl shadow-xs font-medium",
                icon: "ph:plus-bold",
                "trailing-icon": "ph:caret-down-bold"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("admin.posts.createPost"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("admin.posts.createPost")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UButton, {
                  color: "primary",
                  size: "sm",
                  class: "bg-purple-600 hover:bg-purple-500 text-white rounded-xl shadow-xs font-medium",
                  icon: "ph:plus-bold",
                  "trailing-icon": "ph:caret-down-bold"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("admin.posts.createPost")), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-2.5 shrink-0"><div class="${ssrRenderClass([{ "ring-1 ring-purple-500 border-purple-500": selectedStatus.value === "all" && !searchKeyword.value }, "bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl px-3 py-2 shadow-2xs flex items-center justify-between cursor-pointer hover:border-purple-500/50 hover:bg-purple-50/20 dark:hover:bg-purple-950/10 transition-all group"])}"><div class="flex items-center gap-2.5 min-w-0"><div class="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:files-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div><div class="truncate"><div class="text-[11px] font-medium text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.posts.stats.total"))}</div></div></div><span class="text-base font-bold text-gray-900 dark:text-white font-mono ml-2 shrink-0">${ssrInterpolate(stats.value.total)}</span></div><div class="${ssrRenderClass([{ "ring-1 ring-emerald-500 border-emerald-500": selectedStatus.value === "published" }, "bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl px-3 py-2 shadow-2xs flex items-center justify-between cursor-pointer hover:border-emerald-500/50 hover:bg-emerald-50/20 dark:hover:bg-emerald-950/10 transition-all group"])}"><div class="flex items-center gap-2.5 min-w-0"><div class="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div><div class="truncate"><div class="text-[11px] font-medium text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.posts.stats.published"))}</div></div></div><span class="text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono ml-2 shrink-0">${ssrInterpolate(stats.value.published)}</span></div><div class="${ssrRenderClass([{ "ring-1 ring-amber-500 border-amber-500": selectedStatus.value === "draft" }, "bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl px-3 py-2 shadow-2xs flex items-center justify-between cursor-pointer hover:border-amber-500/50 hover:bg-amber-50/20 dark:hover:bg-amber-950/10 transition-all group"])}"><div class="flex items-center gap-2.5 min-w-0"><div class="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:pencil-circle-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div><div class="truncate"><div class="text-[11px] font-medium text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.posts.stats.draft"))}</div></div></div><span class="text-base font-bold text-amber-600 dark:text-amber-400 font-mono ml-2 shrink-0">${ssrInterpolate(stats.value.draft)}</span></div><div class="bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl px-3 py-2 shadow-2xs flex items-center justify-between"><div class="flex items-center gap-2.5 min-w-0"><div class="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chart-bar-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div><div class="truncate"><div class="text-[11px] font-medium text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.posts.stats.views"))}</div></div></div><span class="text-base font-bold text-gray-900 dark:text-white font-mono ml-2 shrink-0">${ssrInterpolate(formatNumber(stats.value.totalViews))}</span></div></div><div class="bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1 min-h-0"><div class="p-4 border-b border-gray-200/70 dark:border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 bg-gray-50/50 dark:bg-[#18181b]/30"><div class="w-full sm:w-80">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: searchInput.value,
        "onUpdate:modelValue": ($event) => searchInput.value = $event,
        icon: "ph:magnifying-glass",
        placeholder: _ctx.$t("admin.posts.filter.searchPlaceholder"),
        size: "md",
        class: "w-full",
        ui: { base: "rounded-xl" },
        clearable: ""
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-3 w-full sm:w-auto flex-wrap justify-end">`);
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: selectedType.value,
        "onUpdate:modelValue": ($event) => selectedType.value = $event,
        items: typeOptions.value,
        size: "md",
        class: "w-36",
        ui: { base: "rounded-xl" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: selectedStatus.value,
        "onUpdate:modelValue": ($event) => selectedStatus.value = $event,
        items: statusOptions.value,
        size: "md",
        class: "w-32",
        ui: { base: "rounded-xl" }
      }, null, _parent));
      if (searchKeyword.value || selectedType.value !== "all" || selectedStatus.value !== "all") {
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "subtle",
          size: "md",
          icon: "ph:x",
          class: "rounded-xl",
          onClick: resetFilters
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("admin.posts.empty.clear"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("admin.posts.empty.clear")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex-1 overflow-auto">`);
      _push(ssrRenderComponent(_component_UTable, {
        data: paginatedPosts.value,
        columns: columns.value,
        loading: unref(pending),
        sticky: ""
      }, {
        "image-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-16 h-11 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 flex items-center justify-center shrink-0 shadow-2xs group relative"${_scopeId}>`);
            if (row.original.imageUrl) {
              _push2(`<img${ssrRenderAttr("src", unref(buildImageProxyUrl)(String(row.original.imageUrl)))} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"${ssrRenderAttr("alt", String(row.original.title))}${_scopeId}>`);
            } else {
              _push2(`<div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-gray-400 dark:text-gray-500"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:image-duotone",
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-16 h-11 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 flex items-center justify-center shrink-0 shadow-2xs group relative" }, [
                row.original.imageUrl ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: unref(buildImageProxyUrl)(String(row.original.imageUrl)),
                  class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                  alt: String(row.original.title)
                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-gray-400 dark:text-gray-500"
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:image-duotone",
                    class: "w-5 h-5"
                  })
                ]))
              ])
            ];
          }
        }),
        "title-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-1 py-1 max-w-md"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-sm font-semibold text-gray-900 dark:text-white leading-snug hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"${_scopeId}>${ssrInterpolate(row.original.title)}</span></div>`);
            if (row.original.description) {
              _push2(`<p class="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 leading-relaxed"${_scopeId}>${ssrInterpolate(row.original.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center gap-2 flex-wrap pt-0.5"${_scopeId}><span class="inline-flex items-center gap-1 text-[11px] font-mono text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 px-1.5 py-0.5 rounded-md cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-colors" title="\u70B9\u51FB\u590D\u5236\u94FE\u63A5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:link-simple",
              class: "w-3 h-3 shrink-0"
            }, null, _parent2, _scopeId));
            _push2(` /blog/${ssrInterpolate(row.original.slug)}</span>`);
            if (row.original.key) {
              _push2(`<span class="inline-flex items-center gap-1 text-[11px] font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 px-1.5 py-0.5 rounded-md"${_scopeId}> key: ${ssrInterpolate(row.original.key)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (row.original.sort !== null && row.original.sort !== void 0 && row.original.sort !== 0) {
              _push2(`<span class="inline-flex items-center gap-1 text-[11px] font-mono text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-1.5 py-0.5 rounded-md"${_scopeId}> sort: ${ssrInterpolate(row.original.sort)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-1 py-1 max-w-md" }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("span", {
                    class: "text-sm font-semibold text-gray-900 dark:text-white leading-snug hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer",
                    onClick: ($event) => editPost(row.original)
                  }, toDisplayString(row.original.title), 9, ["onClick"])
                ]),
                row.original.description ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-xs text-gray-500 dark:text-gray-400 line-clamp-1 leading-relaxed"
                }, toDisplayString(row.original.description), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "flex items-center gap-2 flex-wrap pt-0.5" }, [
                  createVNode("span", {
                    class: "inline-flex items-center gap-1 text-[11px] font-mono text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 px-1.5 py-0.5 rounded-md cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-colors",
                    onClick: withModifiers(($event) => copyPostUrl(row.original.slug), ["stop"]),
                    title: "\u70B9\u51FB\u590D\u5236\u94FE\u63A5"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:link-simple",
                      class: "w-3 h-3 shrink-0"
                    }),
                    createTextVNode(" /blog/" + toDisplayString(row.original.slug), 1)
                  ], 8, ["onClick"]),
                  row.original.key ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "inline-flex items-center gap-1 text-[11px] font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 px-1.5 py-0.5 rounded-md"
                  }, " key: " + toDisplayString(row.original.key), 1)) : createCommentVNode("", true),
                  row.original.sort !== null && row.original.sort !== void 0 && row.original.sort !== 0 ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "inline-flex items-center gap-1 text-[11px] font-mono text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-1.5 py-0.5 rounded-md"
                  }, " sort: " + toDisplayString(row.original.sort), 1)) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        "type-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBadge, {
              color: getTypeBadgeColor(row.original.type),
              variant: "subtle",
              size: "sm",
              class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-medium"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: getTypeBadgeIcon(row.original.type),
                    class: "w-3.5 h-3.5"
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(typeLabel(String(row.original.type)))}`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: getTypeBadgeIcon(row.original.type),
                      class: "w-3.5 h-3.5"
                    }, null, 8, ["name"]),
                    createTextVNode(" " + toDisplayString(typeLabel(String(row.original.type))), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBadge, {
                color: getTypeBadgeColor(row.original.type),
                variant: "subtle",
                size: "sm",
                class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-medium"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UIcon, {
                    name: getTypeBadgeIcon(row.original.type),
                    class: "w-3.5 h-3.5"
                  }, null, 8, ["name"]),
                  createTextVNode(" " + toDisplayString(typeLabel(String(row.original.type))), 1)
                ]),
                _: 2
              }, 1032, ["color"])
            ];
          }
        }),
        "views-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-gray-600 dark:text-gray-300 font-mono text-sm inline-flex items-center gap-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:eye-duotone",
              class: "w-4 h-4 text-gray-400 dark:text-gray-500"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(formatNumber(row.original.views || 0))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-gray-600 dark:text-gray-300 font-mono text-sm inline-flex items-center gap-1.5" }, [
                createVNode(_component_UIcon, {
                  name: "ph:eye-duotone",
                  class: "w-4 h-4 text-gray-400 dark:text-gray-500"
                }),
                createTextVNode(" " + toDisplayString(formatNumber(row.original.views || 0)), 1)
              ])
            ];
          }
        }),
        "status-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_USwitch, {
              "model-value": Boolean(row.original.isActive),
              disabled: !unref(hasAdminPerm)("posts:edit") || togglingId.value === row.original.id,
              size: "sm",
              "onUpdate:modelValue": (val) => togglePostStatus(row.original, val)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UBadge, {
              color: row.original.isActive ? "success" : "neutral",
              variant: "subtle",
              size: "xs",
              class: "font-medium"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.original.isActive ? _ctx.$t("admin.posts.status.published") : _ctx.$t("admin.posts.status.draft"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.original.isActive ? _ctx.$t("admin.posts.status.published") : _ctx.$t("admin.posts.status.draft")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode(_component_USwitch, {
                  "model-value": Boolean(row.original.isActive),
                  disabled: !unref(hasAdminPerm)("posts:edit") || togglingId.value === row.original.id,
                  size: "sm",
                  "onUpdate:modelValue": (val) => togglePostStatus(row.original, val)
                }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"]),
                createVNode(_component_UBadge, {
                  color: row.original.isActive ? "success" : "neutral",
                  variant: "subtle",
                  size: "xs",
                  class: "font-medium"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(row.original.isActive ? _ctx.$t("admin.posts.status.published") : _ctx.$t("admin.posts.status.draft")), 1)
                  ]),
                  _: 2
                }, 1032, ["color"])
              ])
            ];
          }
        }),
        "createdAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col text-xs"${_scopeId}><span class="text-gray-700 dark:text-gray-300 font-medium"${_scopeId}>${ssrInterpolate(unref(formatDate)(row.original.createdAt))}</span>`);
            if (row.original.updatedAt && row.original.updatedAt !== row.original.createdAt) {
              _push2(`<span class="text-gray-400 dark:text-gray-500 text-[11px]"${_scopeId}>${ssrInterpolate(unref(formatDate)(row.original.updatedAt))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col text-xs" }, [
                createVNode("span", { class: "text-gray-700 dark:text-gray-300 font-medium" }, toDisplayString(unref(formatDate)(row.original.createdAt)), 1),
                row.original.updatedAt && row.original.updatedAt !== row.original.createdAt ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-gray-400 dark:text-gray-500 text-[11px]"
                }, toDisplayString(unref(formatDate)(row.original.updatedAt)), 1)) : createCommentVNode("", true)
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
              icon: "ph:arrow-square-out",
              size: "sm",
              title: _ctx.$t("admin.posts.actions.preview"),
              to: unref(localePath)(`/blog/${row.original.slug}`),
              target: "_blank",
              class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:copy",
              size: "sm",
              title: _ctx.$t("admin.posts.actions.copyLink"),
              onClick: ($event) => copyPostUrl(row.original.slug),
              class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:pencil-simple",
              size: "sm",
              title: _ctx.$t("admin.posts.actions.edit"),
              onClick: ($event) => editPost(row.original),
              disabled: !unref(hasAdminPerm)("posts:edit"),
              class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "error",
              variant: "ghost",
              icon: "ph:trash",
              size: "sm",
              title: _ctx.$t("admin.posts.actions.delete"),
              onClick: ($event) => deletePost(row.original.id),
              disabled: !unref(hasAdminPerm)("posts:edit"),
              class: "rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:arrow-square-out",
                  size: "sm",
                  title: _ctx.$t("admin.posts.actions.preview"),
                  to: unref(localePath)(`/blog/${row.original.slug}`),
                  target: "_blank",
                  class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                }, null, 8, ["title", "to"]),
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:copy",
                  size: "sm",
                  title: _ctx.$t("admin.posts.actions.copyLink"),
                  onClick: ($event) => copyPostUrl(row.original.slug),
                  class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                }, null, 8, ["title", "onClick"]),
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:pencil-simple",
                  size: "sm",
                  title: _ctx.$t("admin.posts.actions.edit"),
                  onClick: ($event) => editPost(row.original),
                  disabled: !unref(hasAdminPerm)("posts:edit"),
                  class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                }, null, 8, ["title", "onClick", "disabled"]),
                createVNode(_component_UButton, {
                  color: "error",
                  variant: "ghost",
                  icon: "ph:trash",
                  size: "sm",
                  title: _ctx.$t("admin.posts.actions.delete"),
                  onClick: ($event) => deletePost(row.original.id),
                  disabled: !unref(hasAdminPerm)("posts:edit"),
                  class: "rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30"
                }, null, 8, ["title", "onClick", "disabled"])
              ])
            ];
          }
        }),
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12 flex flex-col items-center justify-center text-center"${_scopeId}><div class="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:article-duotone",
              class: "w-6 h-6"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.posts.empty.title"))}</h3><p class="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-xs"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.posts.empty.description"))}</p><div class="mt-4 flex items-center gap-2"${_scopeId}>`);
            if (searchKeyword.value || selectedType.value !== "all" || selectedStatus.value !== "all") {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "outline",
                size: "xs",
                class: "rounded-lg",
                onClick: resetFilters
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("admin.posts.empty.clear"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("admin.posts.empty.clear")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(hasAdminPerm)("posts:edit")) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                size: "xs",
                class: "rounded-lg",
                onClick: ($event) => openModal()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("admin.posts.createPost"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("admin.posts.createPost")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12 flex flex-col items-center justify-center text-center" }, [
                createVNode("div", { class: "w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-3" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:article-duotone",
                    class: "w-6 h-6"
                  })
                ]),
                createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("admin.posts.empty.title")), 1),
                createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-xs" }, toDisplayString(_ctx.$t("admin.posts.empty.description")), 1),
                createVNode("div", { class: "mt-4 flex items-center gap-2" }, [
                  searchKeyword.value || selectedType.value !== "all" || selectedStatus.value !== "all" ? (openBlock(), createBlock(_component_UButton, {
                    key: 0,
                    color: "neutral",
                    variant: "outline",
                    size: "xs",
                    class: "rounded-lg",
                    onClick: resetFilters
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.posts.empty.clear")), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(hasAdminPerm)("posts:edit") ? (openBlock(), createBlock(_component_UButton, {
                    key: 1,
                    color: "primary",
                    size: "xs",
                    class: "rounded-lg",
                    onClick: ($event) => openModal()
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.posts.createPost")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="p-4 border-t border-gray-200/70 dark:border-gray-800/60 flex items-center justify-between shrink-0 bg-white dark:bg-[#121214] rounded-b-2xl"><span class="text-sm text-gray-500 dark:text-gray-400 font-mono text-xs">${ssrInterpolate(_ctx.$t("admin.posts.pagination.showing", {
        from: totalItems.value === 0 ? 0 : Math.min((unref(page) - 1) * unref(pageSize) + 1, totalItems.value),
        to: Math.min(unref(page) * unref(pageSize), totalItems.value),
        total: totalItems.value
      }))}</span>`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
        total: totalItems.value,
        "items-per-page": unref(pageSize),
        max: 5,
        "onUpdate:page": (val) => unref(onPageChange)(val, () => unref(refresh)())
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_AdminPostsPostEditorModal, {
        modelValue: isModalOpen.value,
        "onUpdate:modelValue": ($event) => isModalOpen.value = $event,
        post: editingPost.value,
        onSaved: unref(refresh)
      }, null, _parent));
      _push(ssrRenderComponent(_component_AdminPostsChangelogModal, {
        modelValue: isChangelogModalOpen.value,
        "onUpdate:modelValue": ($event) => isChangelogModalOpen.value = $event,
        post: editingChangelogPost.value,
        onSaved: unref(refresh)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/posts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
