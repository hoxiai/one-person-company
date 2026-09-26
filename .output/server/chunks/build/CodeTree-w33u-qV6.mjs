import { useSlots, computed, ref, watch, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, mergeProps, resolveDynamicComponent, defineComponent, withModifiers, withKeys, renderSlot, toRefs, nextTick, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttrs, ssrRenderVNode } from 'vue/server-renderer';
import { as as useAppConfig, aC as useComponentUI, au as createReusableTemplate, aE as tv, b as _sfc_main$G, aa as useCollection, ab as Primitive, Z as useTypeahead, S as useDirection, V as useVModel, U as createContext, b0 as handleAndDispatchCustomEvent$1, $ as getActiveElement, aN as createEventHook } from './server.mjs';
import { f as findValuesBetween } from './arrays-DNHUHQBd.mjs';
import { M as MAP_KEY_TO_FOCUS_INTENT } from './utils-DD3u_B8M.mjs';
import { R as RovingFocusItem_default, a as RovingFocusGroup_default } from './RovingFocusItem-DyHBwisL.mjs';
import _sfc_main$1 from './CodeIcon-CsIij2SR.mjs';
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

function useSelectionBehavior(modelValue, props) {
  const firstValue = ref();
  const onSelectItem = (val, condition) => {
    if (props.multiple && Array.isArray(modelValue.value)) if (props.selectionBehavior === "replace") {
      modelValue.value = [val];
      firstValue.value = val;
    } else {
      const index = modelValue.value.findIndex((v) => condition(v));
      if (index !== -1) modelValue.value = modelValue.value.filter((_, i) => i !== index);
      else modelValue.value = [...modelValue.value, val];
    }
    else if (props.selectionBehavior === "replace") modelValue.value = { ...val };
    else if (!Array.isArray(modelValue.value) && condition(modelValue.value)) modelValue.value = void 0;
    else modelValue.value = { ...val };
    return modelValue.value;
  };
  function handleMultipleReplace(intent, currentElement, getItems, options) {
    var _a;
    if (!(firstValue == null ? void 0 : firstValue.value) || !props.multiple || !Array.isArray(modelValue.value)) return;
    const collection = getItems().filter((i) => i.ref.dataset.disabled !== "");
    const lastValue = (_a = collection.find((i) => i.ref === currentElement)) == null ? void 0 : _a.value;
    if (!lastValue) return;
    let value = null;
    switch (intent) {
      case "prev":
      case "next": {
        value = findValuesBetween(options, firstValue.value, lastValue);
        break;
      }
      case "first": {
        value = findValuesBetween(options, firstValue.value, options == null ? void 0 : options[0]);
        break;
      }
      case "last": {
        value = findValuesBetween(options, firstValue.value, options == null ? void 0 : options[options.length - 1]);
        break;
      }
    }
    modelValue.value = value;
  }
  return {
    firstValue,
    onSelectItem,
    handleMultipleReplace
  };
}
function flatten(items) {
  return items.reduce((acc, item) => {
    acc.push(item);
    if (item.children) acc.push(...flatten(item.children));
    return acc;
  }, []);
}
const [injectTreeRootContext, provideTreeRootContext] = createContext("TreeRoot");
var TreeRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "TreeRoot",
  props: {
    modelValue: {
      type: null,
      required: false
    },
    defaultValue: {
      type: null,
      required: false
    },
    items: {
      type: Array,
      required: false
    },
    expanded: {
      type: Array,
      required: false
    },
    defaultExpanded: {
      type: Array,
      required: false
    },
    getKey: {
      type: Function,
      required: true
    },
    getChildren: {
      type: Function,
      required: false,
      default: (val) => val.children
    },
    selectionBehavior: {
      type: String,
      required: false,
      default: "toggle"
    },
    multiple: {
      type: Boolean,
      required: false,
      skipCheck: true
    },
    dir: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    propagateSelect: {
      type: Boolean,
      required: false
    },
    bubbleSelect: {
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
      default: "ul"
    }
  },
  emits: ["update:modelValue", "update:expanded"],
  setup(__props, { emit: __emit }) {
    var _a, _b;
    const props = __props;
    const emits = __emit;
    const { items, multiple, disabled, propagateSelect, dir: propDir, bubbleSelect } = toRefs(props);
    const { handleTypeaheadSearch } = useTypeahead();
    const dir = useDirection(propDir);
    const rovingFocusGroupRef = ref();
    const isVirtual = ref(false);
    const virtualKeydownHook = createEventHook();
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: (_a = props.defaultValue) != null ? _a : multiple.value ? [] : void 0,
      passive: true,
      deep: true
    });
    const expanded = useVModel(props, "expanded", emits, {
      defaultValue: (_b = props.defaultExpanded) != null ? _b : [],
      passive: props.expanded === void 0,
      deep: true
    });
    const { onSelectItem, handleMultipleReplace } = useSelectionBehavior(modelValue, props);
    const selectedKeys = computed(() => {
      var _a2;
      if (multiple.value && Array.isArray(modelValue.value)) return modelValue.value.map((i) => props.getKey(i));
      else return [props.getKey((_a2 = modelValue.value) != null ? _a2 : {})];
    });
    function flattenItems(items$1, level = 1, parentItem) {
      return items$1.reduce((acc, item, index) => {
        const key = props.getKey(item);
        const children = props.getChildren(item);
        const isExpanded = expanded.value.includes(key);
        const flattenedItem = {
          _id: key,
          value: item,
          index,
          level,
          parentItem,
          hasChildren: !!children,
          bind: {
            "value": item,
            level,
            "aria-setsize": items$1.length,
            "aria-posinset": index + 1
          }
        };
        acc.push(flattenedItem);
        if (children && isExpanded) acc.push(...flattenItems(children, level + 1, item));
        return acc;
      }, []);
    }
    const expandedItems = computed(() => {
      const items$1 = props.items;
      expanded.value.map((i) => i);
      return flattenItems(items$1 != null ? items$1 : []);
    });
    function handleKeydown(event) {
      var _a2, _b2;
      if (isVirtual.value) virtualKeydownHook.trigger(event);
      else {
        const collections = (_b2 = (_a2 = rovingFocusGroupRef.value) == null ? void 0 : _a2.getItems()) != null ? _b2 : [];
        handleTypeaheadSearch(event.key, collections);
      }
    }
    function handleKeydownNavigation(event) {
      if (isVirtual.value) return;
      const intent = MAP_KEY_TO_FOCUS_INTENT[event.key];
      nextTick(() => {
        var _a2;
        handleMultipleReplace(intent, getActiveElement(), (_a2 = rovingFocusGroupRef.value) == null ? void 0 : _a2.getItems, expandedItems.value.map((i) => i.value));
      });
    }
    function handleBubbleSelect(item) {
      var _a2;
      if (item.parentItem != null && Array.isArray(modelValue.value) && props.multiple) {
        const parentItem = expandedItems.value.find((i) => {
          return item.parentItem != null && props.getKey(i.value) === props.getKey(item.parentItem);
        });
        if (parentItem != null) {
          const areAllChilredOfParentSelected = (_a2 = props.getChildren(parentItem.value)) == null ? void 0 : _a2.every((i) => modelValue.value.find((v) => props.getKey(v) === props.getKey(i)));
          if (areAllChilredOfParentSelected) modelValue.value = [...modelValue.value, parentItem.value];
          else modelValue.value = modelValue.value.filter((v) => props.getKey(v) !== props.getKey(parentItem.value));
          handleBubbleSelect(parentItem);
        }
      }
    }
    provideTreeRootContext({
      modelValue,
      selectedKeys,
      onSelect: (val) => {
        var _a2, _b2;
        const condition = (baseValue) => props.getKey(baseValue != null ? baseValue : {}) === props.getKey(val);
        const exist = props.multiple && Array.isArray(modelValue.value) ? ((_a2 = modelValue.value) == null ? void 0 : _a2.findIndex(condition)) !== -1 : void 0;
        onSelectItem(val, condition);
        if (props.bubbleSelect && props.multiple && Array.isArray(modelValue.value)) {
          const item = expandedItems.value.find((i) => {
            return props.getKey(i.value) === props.getKey(val);
          });
          if (item != null) handleBubbleSelect(item);
        }
        if (props.propagateSelect && props.multiple && Array.isArray(modelValue.value)) {
          const children = flatten((_b2 = props.getChildren(val)) != null ? _b2 : []);
          if (exist) modelValue.value = [...modelValue.value].filter((i) => !children.some((child) => props.getKey(i != null ? i : {}) === props.getKey(child)));
          else modelValue.value = [...modelValue.value, ...children];
        }
      },
      expanded,
      onToggle(val) {
        var _a2;
        const children = val ? props.getChildren(val) : void 0;
        if (!children) return;
        const key = (_a2 = props.getKey(val)) != null ? _a2 : val;
        if (expanded.value.includes(key)) expanded.value = expanded.value.filter((val$1) => val$1 !== key);
        else expanded.value = [...expanded.value, key];
      },
      getKey: props.getKey,
      getChildren: props.getChildren,
      items,
      expandedItems,
      disabled,
      multiple,
      dir,
      propagateSelect,
      bubbleSelect,
      isVirtual,
      virtualKeydownHook,
      handleMultipleReplace
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(RovingFocusGroup_default), {
        ref_key: "rovingFocusGroupRef",
        ref: rovingFocusGroupRef,
        "as-child": "",
        orientation: "vertical",
        dir: unref(dir)
      }, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          role: "tree",
          as: _ctx.as,
          "as-child": _ctx.asChild,
          "aria-multiselectable": unref(multiple) ? true : void 0,
          onKeydown: [handleKeydown, withKeys(withModifiers(handleKeydownNavigation, ["shift"]), ["up", "down"])]
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
            flattenItems: expandedItems.value,
            modelValue: unref(modelValue),
            expanded: unref(expanded)
          })]),
          _: 3
        }, 8, [
          "as",
          "as-child",
          "aria-multiselectable",
          "onKeydown"
        ])]),
        _: 3
      }, 8, ["dir"]);
    };
  }
});
var TreeRoot_default = TreeRoot_vue_vue_type_script_setup_true_lang_default;
const TREE_SELECT = "tree.select";
const TREE_TOGGLE = "tree.toggle";
var TreeItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "TreeItem",
  props: {
    value: {
      type: null,
      required: true
    },
    level: {
      type: Number,
      required: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "li"
    }
  },
  emits: ["select", "toggle"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectTreeRootContext();
    const { getItems } = useCollection();
    const hasChildren = computed(() => !!rootContext.getChildren(props.value));
    const isExpanded = computed(() => {
      const key = rootContext.getKey(props.value);
      return rootContext.expanded.value.includes(key);
    });
    const isSelected = computed(() => {
      const key = rootContext.getKey(props.value);
      return rootContext.selectedKeys.value.includes(key);
    });
    const isIndeterminate = computed(() => {
      if (rootContext.bubbleSelect.value && hasChildren.value && Array.isArray(rootContext.modelValue.value)) {
        const children = flatten(rootContext.getChildren(props.value) || []);
        return children.some((child) => rootContext.modelValue.value.find((v) => rootContext.getKey(v) === rootContext.getKey(child))) && !children.every((child) => rootContext.modelValue.value.find((v) => rootContext.getKey(v) === rootContext.getKey(child)));
      } else if (rootContext.propagateSelect.value && isSelected.value && hasChildren.value && Array.isArray(rootContext.modelValue.value)) {
        const children = flatten(rootContext.getChildren(props.value) || []);
        return !children.every((child) => rootContext.modelValue.value.find((v) => rootContext.getKey(v) === rootContext.getKey(child)));
      } else return void 0;
    });
    function handleKeydownRight(ev) {
      if (!hasChildren.value) return;
      if (isExpanded.value) {
        const collection = getItems().map((i) => i.ref);
        const currentElement = getActiveElement();
        const currentIndex = collection.indexOf(currentElement);
        const list = [...collection].slice(currentIndex);
        const nextElement = list.find((el) => Number(el.getAttribute("data-indent")) === props.level + 1);
        if (nextElement) nextElement.focus();
      } else handleToggleCustomEvent(ev);
    }
    function handleKeydownLeft(ev) {
      if (isExpanded.value) handleToggleCustomEvent(ev);
      else {
        const collection = getItems().map((i) => i.ref);
        const currentElement = getActiveElement();
        const currentIndex = collection.indexOf(currentElement);
        const list = [...collection].slice(0, currentIndex).reverse();
        const parentElement = list.find((el) => Number(el.getAttribute("data-indent")) === props.level - 1);
        if (parentElement) parentElement.focus();
      }
    }
    async function handleSelect(ev) {
      emits("select", ev);
      if (ev == null ? void 0 : ev.defaultPrevented) return;
      rootContext.onSelect(props.value);
    }
    async function handleToggle(ev) {
      emits("toggle", ev);
      if (ev == null ? void 0 : ev.defaultPrevented) return;
      rootContext.onToggle(props.value);
    }
    async function handleSelectCustomEvent(ev) {
      if (!ev) return;
      const eventDetail = {
        originalEvent: ev,
        value: props.value,
        isExpanded: isExpanded.value,
        isSelected: isSelected.value
      };
      handleAndDispatchCustomEvent$1(TREE_SELECT, handleSelect, eventDetail);
    }
    async function handleToggleCustomEvent(ev) {
      if (!ev) return;
      const eventDetail = {
        originalEvent: ev,
        value: props.value,
        isExpanded: isExpanded.value,
        isSelected: isSelected.value
      };
      handleAndDispatchCustomEvent$1(TREE_TOGGLE, handleToggle, eventDetail);
    }
    __expose({
      isExpanded,
      isSelected,
      isIndeterminate,
      handleToggle: () => rootContext.onToggle(props.value),
      handleSelect: () => rootContext.onSelect(props.value)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(RovingFocusItem_default), {
        "as-child": "",
        value: _ctx.value,
        "allow-shift-key": ""
      }, {
        default: withCtx(() => [createVNode(unref(Primitive), mergeProps(_ctx.$attrs, {
          role: "treeitem",
          as: _ctx.as,
          "as-child": _ctx.asChild,
          "aria-selected": isSelected.value,
          "aria-expanded": hasChildren.value ? isExpanded.value : void 0,
          "aria-level": _ctx.level,
          "data-indent": _ctx.level,
          "data-selected": isSelected.value ? "" : void 0,
          "data-expanded": isExpanded.value ? "" : void 0,
          onKeydown: [
            withKeys(withModifiers(handleSelectCustomEvent, ["self", "prevent"]), ["enter", "space"]),
            _cache[0] || (_cache[0] = withKeys(withModifiers((ev) => unref(rootContext).dir.value === "ltr" ? handleKeydownRight(ev) : handleKeydownLeft(ev), ["prevent"]), ["right"])),
            _cache[1] || (_cache[1] = withKeys(withModifiers((ev) => unref(rootContext).dir.value === "ltr" ? handleKeydownLeft(ev) : handleKeydownRight(ev), ["prevent"]), ["left"]))
          ],
          onClick: _cache[2] || (_cache[2] = withModifiers((ev) => {
            handleSelectCustomEvent(ev);
            handleToggleCustomEvent(ev);
          }, ["stop"]))
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
            isExpanded: isExpanded.value,
            isSelected: isSelected.value,
            isIndeterminate: isIndeterminate.value,
            handleSelect: () => unref(rootContext).onSelect(_ctx.value),
            handleToggle: () => unref(rootContext).onToggle(_ctx.value)
          })]),
          _: 3
        }, 16, [
          "as",
          "as-child",
          "aria-selected",
          "aria-expanded",
          "aria-level",
          "data-indent",
          "data-selected",
          "data-expanded",
          "onKeydown"
        ])]),
        _: 3
      }, 8, ["value"]);
    };
  }
});
var TreeItem_default = TreeItem_vue_vue_type_script_setup_true_lang_default;
const theme = {
  "slots": {
    "root": "relative lg:h-[450px] my-5 grid lg:grid-cols-3 border border-muted rounded-md",
    "list": "isolate relative p-2 border-b lg:border-b-0 lg:border-e border-muted overflow-y-auto",
    "item": "",
    "listWithChildren": "ms-4.5 border-s border-default",
    "itemWithChildren": "ps-1.5 -ms-px",
    "link": "relative group peer w-full px-2.5 py-1.5 before:inset-y-px before:inset-x-0 flex items-center gap-1.5 text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    "linkLeadingIcon": "size-4 shrink-0",
    "linkLabel": "truncate",
    "linkTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "linkTrailingIcon": "size-5 transform transition-transform duration-200 shrink-0 group-data-expanded:rotate-180",
    "content": "overflow-hidden lg:col-span-2 flex flex-col [&>div]:my-0 [&>div]:flex-1 [&>div]:flex [&>div]:flex-col [&>div>div]:border-0 [&>div>pre]:border-b-0 [&>div>pre]:border-s-0 [&>div>pre]:border-e-0 [&>div>pre]:rounded-l-none [&>div>pre]:flex-1 [&>div]:overflow-y-auto"
  },
  "variants": {
    "active": {
      "true": {
        "link": "text-highlighted before:bg-elevated"
      },
      "false": {
        "link": [
          "hover:text-highlighted hover:before:bg-elevated/50",
          "transition-colors before:transition-colors"
        ]
      }
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "ProseCodeTree",
  __ssrInlineRender: true,
  props: {
    items: { type: Array, required: false },
    modelValue: { type: String, required: false },
    defaultValue: { type: String, required: false },
    expandAll: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    var _a, _b;
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("prose.codeTree", props);
    const [DefineTreeTemplate, ReuseTreeTemplate] = createReusableTemplate();
    const ui = computed(() => {
      var _a2, _b2;
      return tv({ extend: tv(theme), ...((_b2 = (_a2 = appConfig.ui) == null ? void 0 : _a2.prose) == null ? void 0 : _b2.codeTree) || {} })();
    });
    const initialPath = (_a = props.modelValue) != null ? _a : props.defaultValue;
    const model = ref(initialPath ? { path: initialPath } : void 0);
    const lastSelectedItem = ref();
    watch(model, (value) => {
      if ((value == null ? void 0 : value.path) !== props.modelValue) {
        emits("update:modelValue", value == null ? void 0 : value.path);
      }
    });
    watch(() => props.modelValue, (value) => {
      var _a2;
      if (value === ((_a2 = model.value) == null ? void 0 : _a2.path)) return;
      model.value = value ? { path: value } : void 0;
      const pathsToExpand = getExpandedPaths(value);
      for (const path of pathsToExpand) {
        if (!expanded.value.includes(path)) {
          expanded.value.push(path);
        }
      }
    });
    const rerenderCount = ref(1);
    const flatItems = computed(() => {
      var _a2, _b2;
      rerenderCount.value;
      return props.items || ((_b2 = (_a2 = slots.default) == null ? void 0 : _a2.call(slots)) == null ? void 0 : _b2.flatMap(transformSlot).filter(Boolean)) || [];
    });
    const items = computed(() => buildTree(flatItems.value));
    function buildTree(items2) {
      const map = /* @__PURE__ */ new Map();
      const root = [];
      items2.forEach((item) => {
        const parts = item.label.split("/");
        let path = "";
        parts.forEach((part, i) => {
          var _a2, _b2;
          path = path ? `${path}/${part}` : part;
          if (!map.has(path)) {
            const node = { label: part, path, ...i < parts.length - 1 && { children: [] } };
            map.set(path, node);
            if (i === 0) {
              root.push(node);
            } else {
              (_b2 = (_a2 = map.get(parts.slice(0, i).join("/"))) == null ? void 0 : _a2.children) == null ? void 0 : _b2.push(node);
            }
          }
        });
      });
      const sort = (nodes) => nodes.sort(
        (a, b) => !!a.children === !!b.children ? a.label.localeCompare(b.label) : b.children ? 1 : -1
      ).map((n) => ({ ...n, children: n.children && sort(n.children) }));
      return sort(root);
    }
    function transformSlot(slot, index) {
      var _a2, _b2, _c, _d;
      if (typeof slot.type === "symbol") {
        return (_a2 = slot.children) == null ? void 0 : _a2.map(transformSlot);
      }
      return {
        label: ((_b2 = slot.props) == null ? void 0 : _b2.filename) || ((_c = slot.props) == null ? void 0 : _c.label) || `${index}`,
        icon: (_d = slot.props) == null ? void 0 : _d.icon,
        component: slot
      };
    }
    function getExpandedPaths(path) {
      if (props.expandAll) {
        const allPaths = /* @__PURE__ */ new Set();
        flatItems.value.forEach((item) => {
          const parts2 = item.label.split("/");
          for (let i = 1; i < parts2.length; i++) {
            allPaths.add(parts2.slice(0, i).join("/"));
          }
        });
        return Array.from(allPaths);
      }
      if (!path) {
        return [];
      }
      const parts = path.split("/");
      return parts.slice(0, -1).map((_, index) => parts.slice(0, index + 1).join("/"));
    }
    const expanded = ref(getExpandedPaths((_b = model.value) == null ? void 0 : _b.path));
    watch(flatItems, (newItems, oldItems) => {
      var _a2;
      if (!props.expandAll) return;
      const newLabels = newItems.map((i) => i.label).join("\n");
      const oldLabels = (_a2 = oldItems == null ? void 0 : oldItems.map((i) => i.label).join("\n")) != null ? _a2 : "";
      if (newLabels !== oldLabels) {
        expanded.value = getExpandedPaths();
      }
    });
    watch(model, (value) => {
      const item = flatItems.value.find((item2) => (value == null ? void 0 : value.path) === item2.label);
      if (item == null ? void 0 : item.component) {
        lastSelectedItem.value = item;
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c, _d;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineTreeTemplate), null, {
        default: withCtx(({ items: items2, level }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(items2, (item, index) => {
              var _a3, _b3;
              _push2(`<li role="presentation" class="${ssrRenderClass(level > 1 ? ui.value.itemWithChildren({ class: (_a3 = unref(uiProp)) == null ? void 0 : _a3.itemWithChildren }) : ui.value.item({ class: (_b3 = unref(uiProp)) == null ? void 0 : _b3.item }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(TreeItem_default), {
                level,
                value: item,
                "as-child": ""
              }, {
                default: withCtx(({ isExpanded, isSelected }, _push3, _parent3, _scopeId2) => {
                  var _a4, _b4, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
                  if (_push3) {
                    _push3(`<button type="button" class="${ssrRenderClass(ui.value.link({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.link, active: isSelected }))}"${_scopeId2}>`);
                    if ((_b4 = item.children) == null ? void 0 : _b4.length) {
                      _push3(ssrRenderComponent(_sfc_main$G, {
                        name: isExpanded ? unref(appConfig).ui.icons.folderOpen : unref(appConfig).ui.icons.folder,
                        class: ui.value.linkLeadingIcon({ class: (_c2 = unref(uiProp)) == null ? void 0 : _c2.linkLeadingIcon })
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(_sfc_main$1, {
                        filename: item.label,
                        class: ui.value.linkLeadingIcon({ class: (_d2 = unref(uiProp)) == null ? void 0 : _d2.linkLeadingIcon })
                      }, null, _parent3, _scopeId2));
                    }
                    _push3(`<span class="${ssrRenderClass(ui.value.linkLabel({ class: (_e = unref(uiProp)) == null ? void 0 : _e.linkLabel }))}"${_scopeId2}>${ssrInterpolate(item.label)}</span>`);
                    if ((_f = item.children) == null ? void 0 : _f.length) {
                      _push3(`<span class="${ssrRenderClass(ui.value.linkTrailing({ class: (_g = unref(uiProp)) == null ? void 0 : _g.linkTrailing }))}"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_sfc_main$G, {
                        name: unref(appConfig).ui.icons.chevronDown,
                        class: ui.value.linkTrailingIcon({ class: (_h = unref(uiProp)) == null ? void 0 : _h.linkTrailingIcon })
                      }, null, _parent3, _scopeId2));
                      _push3(`</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</button>`);
                    if (((_i = item.children) == null ? void 0 : _i.length) && isExpanded) {
                      _push3(`<ul role="group" class="${ssrRenderClass(ui.value.listWithChildren({ class: (_j = unref(uiProp)) == null ? void 0 : _j.listWithChildren }))}"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(ReuseTreeTemplate), {
                        items: item.children,
                        level: level + 1
                      }, null, _parent3, _scopeId2));
                      _push3(`</ul>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("button", {
                        type: "button",
                        class: ui.value.link({ class: (_k = unref(uiProp)) == null ? void 0 : _k.link, active: isSelected })
                      }, [
                        ((_l = item.children) == null ? void 0 : _l.length) ? (openBlock(), createBlock(_sfc_main$G, {
                          key: 0,
                          name: isExpanded ? unref(appConfig).ui.icons.folderOpen : unref(appConfig).ui.icons.folder,
                          class: ui.value.linkLeadingIcon({ class: (_m = unref(uiProp)) == null ? void 0 : _m.linkLeadingIcon })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$1, {
                          key: 1,
                          filename: item.label,
                          class: ui.value.linkLeadingIcon({ class: (_n = unref(uiProp)) == null ? void 0 : _n.linkLeadingIcon })
                        }, null, 8, ["filename", "class"])),
                        createVNode("span", {
                          class: ui.value.linkLabel({ class: (_o = unref(uiProp)) == null ? void 0 : _o.linkLabel })
                        }, toDisplayString(item.label), 3),
                        ((_p = item.children) == null ? void 0 : _p.length) ? (openBlock(), createBlock("span", {
                          key: 2,
                          class: ui.value.linkTrailing({ class: (_q = unref(uiProp)) == null ? void 0 : _q.linkTrailing })
                        }, [
                          createVNode(_sfc_main$G, {
                            name: unref(appConfig).ui.icons.chevronDown,
                            class: ui.value.linkTrailingIcon({ class: (_r = unref(uiProp)) == null ? void 0 : _r.linkTrailingIcon })
                          }, null, 8, ["name", "class"])
                        ], 2)) : createCommentVNode("", true)
                      ], 2),
                      ((_s = item.children) == null ? void 0 : _s.length) && isExpanded ? (openBlock(), createBlock("ul", {
                        key: 0,
                        role: "group",
                        class: ui.value.listWithChildren({ class: (_t = unref(uiProp)) == null ? void 0 : _t.listWithChildren })
                      }, [
                        createVNode(unref(ReuseTreeTemplate), {
                          items: item.children,
                          level: level + 1
                        }, null, 8, ["items", "level"])
                      ], 2)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(items2, (item, index) => {
                var _a3, _b3;
                return openBlock(), createBlock("li", {
                  key: `${level}-${index}`,
                  role: "presentation",
                  class: level > 1 ? ui.value.itemWithChildren({ class: (_a3 = unref(uiProp)) == null ? void 0 : _a3.itemWithChildren }) : ui.value.item({ class: (_b3 = unref(uiProp)) == null ? void 0 : _b3.item })
                }, [
                  createVNode(unref(TreeItem_default), {
                    level,
                    value: item,
                    "as-child": ""
                  }, {
                    default: withCtx(({ isExpanded, isSelected }) => {
                      var _a4, _b4, _c2, _d2, _e, _f, _g, _h, _i, _j;
                      return [
                        createVNode("button", {
                          type: "button",
                          class: ui.value.link({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.link, active: isSelected })
                        }, [
                          ((_b4 = item.children) == null ? void 0 : _b4.length) ? (openBlock(), createBlock(_sfc_main$G, {
                            key: 0,
                            name: isExpanded ? unref(appConfig).ui.icons.folderOpen : unref(appConfig).ui.icons.folder,
                            class: ui.value.linkLeadingIcon({ class: (_c2 = unref(uiProp)) == null ? void 0 : _c2.linkLeadingIcon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$1, {
                            key: 1,
                            filename: item.label,
                            class: ui.value.linkLeadingIcon({ class: (_d2 = unref(uiProp)) == null ? void 0 : _d2.linkLeadingIcon })
                          }, null, 8, ["filename", "class"])),
                          createVNode("span", {
                            class: ui.value.linkLabel({ class: (_e = unref(uiProp)) == null ? void 0 : _e.linkLabel })
                          }, toDisplayString(item.label), 3),
                          ((_f = item.children) == null ? void 0 : _f.length) ? (openBlock(), createBlock("span", {
                            key: 2,
                            class: ui.value.linkTrailing({ class: (_g = unref(uiProp)) == null ? void 0 : _g.linkTrailing })
                          }, [
                            createVNode(_sfc_main$G, {
                              name: unref(appConfig).ui.icons.chevronDown,
                              class: ui.value.linkTrailingIcon({ class: (_h = unref(uiProp)) == null ? void 0 : _h.linkTrailingIcon })
                            }, null, 8, ["name", "class"])
                          ], 2)) : createCommentVNode("", true)
                        ], 2),
                        ((_i = item.children) == null ? void 0 : _i.length) && isExpanded ? (openBlock(), createBlock("ul", {
                          key: 0,
                          role: "group",
                          class: ui.value.listWithChildren({ class: (_j = unref(uiProp)) == null ? void 0 : _j.listWithChildren })
                        }, [
                          createVNode(unref(ReuseTreeTemplate), {
                            items: item.children,
                            level: level + 1
                          }, null, 8, ["items", "level"])
                        ], 2)) : createCommentVNode("", true)
                      ];
                    }),
                    _: 2
                  }, 1032, ["level", "value"])
                ], 2);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
        class: ui.value.root({ class: [(_a2 = unref(uiProp)) == null ? void 0 : _a2.root, props.class] })
      }))}>`);
      _push(ssrRenderComponent(unref(TreeRoot_default), {
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        expanded: expanded.value,
        "onUpdate:expanded": ($event) => expanded.value = $event,
        class: ui.value.list({ class: (_b2 = unref(uiProp)) == null ? void 0 : _b2.list }),
        items: items.value,
        "get-key": (item2) => item2.path
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ReuseTreeTemplate), {
              items: items.value,
              level: 1
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ReuseTreeTemplate), {
                items: items.value,
                level: 1
              }, null, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass(ui.value.content({ class: (_c = unref(uiProp)) == null ? void 0 : _c.content }))}">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent((_d = lastSelectedItem.value) == null ? void 0 : _d.component), null, null), _parent);
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/prose/CodeTree.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
