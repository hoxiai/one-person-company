import { bt as useCookie, h as useAdminPermissions, v as useAsyncData, _ as _export_sfc, t as useSettings, bs as useLocalizedSettings, e as useI18n, J as useAdminSession, q as navigateTo, a as __nuxt_component_3$1, k as _sfc_main$B, b9 as __nuxt_component_2$2, i as useAdminExtensions, w as themeExtensionPermissionCode, L as __nuxt_component_0$1, b as _sfc_main$G, C as useRoute, bl as useState, p as _sfc_main$s, br as _sfc_main$d, bp as useDebounceFn, bb as useEventListener$1, ar as useLocale, as as useAppConfig, aC as useComponentUI, aj as useForwardPropsEmits, aD as reactivePick, au as createReusableTemplate, aE as tv, bo as refThrottled, ay as _sfc_main$C, az as pickLinkProps, ax as get, aB as omit, aA as _sfc_main$D, aw as _sfc_main$E, aS as _sfc_main$F, d as _sfc_main$k, bq as useActiveElement, ab as Primitive } from './server.mjs';
import { _ as __nuxt_component_1$1, a as _sfc_main$7 } from './Slideover-B3j233H1.mjs';
import { _ as _sfc_main$9, u as useKbd } from './Kbd-Bu-poTUg.mjs';
import { defineComponent, ref, withAsyncContext, mergeProps, isRef, unref, computed, withCtx, openBlock, createBlock, createVNode, createCommentVNode, toDisplayString, createTextVNode, Fragment, renderList, withDirectives, vShow, useModel, watch, toValue, useSlots, toRef, useTemplateRef, renderSlot, createSlots, withKeys, mergeModels, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { g as getEstimateSize, L as ListboxItem_default, a as ListboxItemIndicator_default, b as ListboxRoot_default, c as ListboxFilter_default, f as ListboxContent_default, d as ListboxVirtualizer_default, e as ListboxGroup_default, h as injectListboxGroupContext } from './virtualizer-BxqhLCyb.mjs';
import { dE as defu } from '../nitro/nitro.mjs';
import { useFuse } from '@vueuse/integrations/useFuse';
import { useRouter } from 'vue-router';
import { u as useColorMode } from './composables-C04bOF3H.mjs';
import { _ as _sfc_main$8 } from './Tooltip-BUkNJ5vn.mjs';
import { u as useAdminLocale } from './useAdminLocale-BOUd85d1.mjs';
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
import './arrays-DNHUHQBd.mjs';
import './utils-DD3u_B8M.mjs';
import './VisuallyHiddenInput-32bCuzTQ.mjs';

var ListboxGroupLabel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ListboxGroupLabel",
  props: {
    for: {
      type: String,
      required: false
    },
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
    const groupContext = injectListboxGroupContext({ id: "" });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, { id: unref(groupContext).id }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var ListboxGroupLabel_default = ListboxGroupLabel_vue_vue_type_script_setup_true_lang_default;
const htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function escapeHTML(str) {
  return str.replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}
function isAlreadyEscaped(str) {
  return /&(?:amp|lt|gt|quot|#39);/.test(str);
}
function sanitize(str) {
  if (isAlreadyEscaped(str)) {
    return str;
  }
  return escapeHTML(str);
}
function truncateHTMLFromStart(html, maxLength) {
  let truncated = "";
  let totalLength = 0;
  let insideTag = false;
  for (let i = html.length - 1; i >= 0; i--) {
    if (html[i] === ">") {
      insideTag = true;
    } else if (html[i] === "<") {
      insideTag = false;
      truncated = html[i] + truncated;
      continue;
    }
    if (!insideTag) {
      totalLength++;
    }
    if (totalLength <= maxLength) {
      truncated = html[i] + truncated;
    } else {
      truncated = "..." + truncated;
      break;
    }
  }
  return truncated;
}
function highlight(item, searchTerm, forceKey, omitKeys) {
  var _a;
  function generateHighlightedText(value, indices = []) {
    value = value || "";
    let content = "";
    let nextUnhighlightedRegionStartingIndex = 0;
    indices.forEach((region) => {
      if (region.length === 2 && region[0] === region[1]) {
        return;
      }
      const lastIndiceNextIndex = region[1] + 1;
      const isMatched = lastIndiceNextIndex - region[0] >= searchTerm.length;
      content += [
        sanitize(value.substring(nextUnhighlightedRegionStartingIndex, region[0])),
        isMatched && `<mark>`,
        sanitize(value.substring(region[0], lastIndiceNextIndex)),
        isMatched && "</mark>"
      ].filter(Boolean).join("");
      nextUnhighlightedRegionStartingIndex = lastIndiceNextIndex;
    });
    content += sanitize(value.substring(nextUnhighlightedRegionStartingIndex));
    const markIndex = content.indexOf("<mark>");
    if (markIndex !== -1) {
      content = truncateHTMLFromStart(content, content.length - markIndex);
    }
    return content;
  }
  if (!((_a = item.matches) == null ? void 0 : _a.length)) {
    return;
  }
  for (const match of item.matches) {
    if (forceKey && match.key !== forceKey) {
      continue;
    }
    if (omitKeys == null ? void 0 : omitKeys.includes(match.key)) {
      continue;
    }
    return generateHighlightedText(match.value, match.indices);
  }
}
const theme = {
  "slots": {
    "root": "flex flex-col min-h-0 min-w-0 divide-y divide-default",
    "input": "",
    "close": "",
    "back": "p-0",
    "content": "relative overflow-hidden flex flex-col",
    "footer": "p-1",
    "viewport": "relative scroll-py-1 overflow-y-auto flex-1 focus:outline-none",
    "group": "p-1 isolate",
    "empty": "text-center text-muted",
    "label": "font-semibold text-highlighted",
    "item": "group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75",
    "itemLeadingIcon": "shrink-0",
    "itemLeadingAvatar": "shrink-0",
    "itemLeadingAvatarSize": "",
    "itemLeadingChip": "shrink-0",
    "itemLeadingChipSize": "",
    "itemTrailing": "ms-auto inline-flex items-center",
    "itemTrailingIcon": "shrink-0",
    "itemTrailingHighlightedIcon": "shrink-0 text-dimmed hidden group-data-highlighted:inline-flex",
    "itemTrailingKbds": "hidden lg:inline-flex items-center shrink-0",
    "itemTrailingKbdsSize": "",
    "itemWrapper": "flex-1 flex flex-col text-start min-w-0",
    "itemLabel": "truncate space-x-1 text-dimmed",
    "itemDescription": "truncate text-muted",
    "itemLabelBase": "text-highlighted [&>mark]:text-inverted [&>mark]:bg-primary",
    "itemLabelPrefix": "text-default",
    "itemLabelSuffix": "text-dimmed [&>mark]:text-inverted [&>mark]:bg-primary"
  },
  "variants": {
    "virtualize": {
      "true": {
        "viewport": "p-1 isolate"
      },
      "false": {
        "viewport": "divide-y divide-default"
      }
    },
    "size": {
      "xs": {
        "input": "[&>input]:h-10",
        "empty": "py-3 text-xs",
        "label": "p-1 text-[10px]/3 gap-1",
        "item": "p-1 text-xs gap-1",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemLeadingChip": "size-4",
        "itemLeadingChipSize": "sm",
        "itemTrailing": "gap-1",
        "itemTrailingIcon": "size-4",
        "itemTrailingHighlightedIcon": "size-4",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "sm"
      },
      "sm": {
        "input": "[&>input]:h-11",
        "empty": "py-4 text-xs",
        "label": "p-1.5 text-[10px]/3 gap-1.5",
        "item": "p-1.5 text-xs gap-1.5",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemLeadingChip": "size-4",
        "itemLeadingChipSize": "sm",
        "itemTrailing": "gap-1.5",
        "itemTrailingIcon": "size-4",
        "itemTrailingHighlightedIcon": "size-4",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "sm"
      },
      "md": {
        "input": "[&>input]:h-12",
        "empty": "py-6 text-sm",
        "label": "p-1.5 text-xs gap-1.5",
        "item": "p-1.5 text-sm gap-1.5",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemLeadingChip": "size-5",
        "itemLeadingChipSize": "md",
        "itemTrailing": "gap-1.5",
        "itemTrailingIcon": "size-5",
        "itemTrailingHighlightedIcon": "size-5",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "md"
      },
      "lg": {
        "input": "[&>input]:h-13",
        "empty": "py-7 text-sm",
        "label": "p-2 text-xs gap-2",
        "item": "p-2 text-sm gap-2",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemLeadingChip": "size-5",
        "itemLeadingChipSize": "md",
        "itemTrailing": "gap-2",
        "itemTrailingIcon": "size-5",
        "itemTrailingHighlightedIcon": "size-5",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "md"
      },
      "xl": {
        "input": "[&>input]:h-14",
        "empty": "py-8 text-base",
        "label": "p-2 text-sm gap-2",
        "item": "p-2 text-base gap-2",
        "itemLeadingIcon": "size-6",
        "itemLeadingAvatarSize": "xs",
        "itemLeadingChip": "size-6",
        "itemLeadingChipSize": "lg",
        "itemTrailing": "gap-2",
        "itemTrailingIcon": "size-6",
        "itemTrailingHighlightedIcon": "size-6",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "lg"
      }
    },
    "active": {
      "true": {
        "item": "text-highlighted before:bg-elevated",
        "itemLeadingIcon": "text-default"
      },
      "false": {
        "item": [
          "text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50",
          "transition-colors before:transition-colors"
        ],
        "itemLeadingIcon": [
          "text-dimmed group-data-highlighted:not-group-data-disabled:text-default",
          "transition-colors"
        ]
      }
    },
    "loading": {
      "true": {
        "itemLeadingIcon": "animate-spin"
      }
    }
  },
  "defaultVariants": {
    "size": "md"
  }
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UCommandPalette",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    size: { type: null, required: false },
    icon: { type: null, required: false },
    trailingIcon: { type: null, required: false },
    selectedIcon: { type: null, required: false },
    childrenIcon: { type: null, required: false },
    placeholder: { type: String, required: false },
    autofocus: { type: Boolean, required: false, default: true },
    close: { type: [Boolean, Object], required: false },
    closeIcon: { type: null, required: false },
    back: { type: [Boolean, Object], required: false, default: true },
    backIcon: { type: null, required: false },
    input: { type: [Boolean, Object], required: false, default: true },
    groups: { type: Array, required: false },
    fuse: { type: Object, required: false },
    virtualize: { type: [Boolean, Object], required: false, default: false },
    valueKey: { type: null, required: false },
    labelKey: { type: null, required: false, default: "label" },
    descriptionKey: { type: null, required: false, default: "description" },
    preserveGroupOrder: { type: Boolean, required: false, default: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    multiple: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    modelValue: { type: null, required: false },
    defaultValue: { type: null, required: false },
    highlightOnHover: { type: Boolean, required: false, default: true },
    selectionBehavior: { type: String, required: false },
    by: { type: [String, Function], required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false }
  }, {
    "searchTerm": { type: String, ...{ default: "" } },
    "searchTermModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "highlight", "entryFocus", "leave", "update:open"], ["update:searchTerm"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const searchTerm = useModel(__props, "searchTerm", { type: String, ...{ default: "" } });
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("commandPalette", props);
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "disabled", "multiple", "modelValue", "defaultValue", "highlightOnHover", "by"), emits);
    const virtualizerProps = toRef(() => {
      if (!props.virtualize) return false;
      return defu(typeof props.virtualize === "boolean" ? {} : props.virtualize, {
        estimateSize: getEstimateSize(filteredItems.value, "md", props.descriptionKey, !!slots["item-description"])
      });
    });
    const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate({
      props: {
        item: {
          type: Object,
          required: true
        },
        group: {
          type: Object,
          required: false
        },
        index: {
          type: Number,
          required: false
        }
      }
    });
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.commandPalette) || {} })({
        size: props.size,
        virtualize: !!props.virtualize
      });
    });
    const fuse = computed(() => defu({}, props.fuse, {
      fuseOptions: {
        ignoreLocation: true,
        threshold: 0.1,
        keys: [props.labelKey, "suffix"]
      },
      resultLimit: 12,
      matchAllWhenSearchEmpty: true
    }));
    const history = ref([]);
    const placeholder = computed(() => {
      var _a;
      return ((_a = history.value[history.value.length - 1]) == null ? void 0 : _a.placeholder) || props.placeholder || t("commandPalette.placeholder");
    });
    const groups = computed(() => {
      var _a;
      return ((_a = history.value) == null ? void 0 : _a.length) ? [history.value[history.value.length - 1]] : props.groups;
    });
    const items = computed(() => {
      var _a, _b;
      return ((_b = (_a = groups.value) == null ? void 0 : _a.filter((group) => {
        if (!group.id) {
          console.warn(`[@nuxt/ui] CommandPalette group is missing an \`id\` property`);
          return false;
        }
        if (group.ignoreFilter) {
          return false;
        }
        return true;
      })) == null ? void 0 : _b.flatMap((group) => {
        var _a2;
        return ((_a2 = group.items) == null ? void 0 : _a2.map((item) => ({ ...item, group: group.id }))) || [];
      })) || [];
    });
    const { results: fuseResults } = useFuse(searchTerm, items, fuse);
    const throttledFuseResults = refThrottled(fuseResults, 16, true);
    function processGroupItems(group, items2) {
      let processedItems = items2;
      if ((group == null ? void 0 : group.postFilter) && typeof group.postFilter === "function") {
        processedItems = group.postFilter(searchTerm.value, processedItems);
      }
      return {
        ...group,
        items: processedItems.slice(0, fuse.value.resultLimit).map((item) => {
          return {
            ...item,
            labelHtml: highlight(item, searchTerm.value, props.labelKey),
            suffixHtml: highlight(item, searchTerm.value, void 0, [props.labelKey])
          };
        })
      };
    }
    const filteredGroups = computed(() => {
      var _a, _b, _c, _d, _e;
      const currentGroups = groups.value;
      const groupsById = throttledFuseResults.value.reduce((acc, result) => {
        var _a2, _b2;
        const { item, matches } = result;
        if (!item.group) {
          return acc;
        }
        acc[_a2 = item.group] || (acc[_a2] = []);
        (_b2 = acc[item.group]) == null ? void 0 : _b2.push({ ...item, matches });
        return acc;
      }, {});
      if (props.preserveGroupOrder) {
        const processedGroups = [];
        for (const group of currentGroups || []) {
          if (!((_a = group.items) == null ? void 0 : _a.length)) {
            continue;
          }
          const items2 = group.ignoreFilter ? group.items : groupsById[group.id];
          if (!(items2 == null ? void 0 : items2.length)) {
            continue;
          }
          const processedGroup = processGroupItems(group, items2);
          if ((_b = processedGroup.items) == null ? void 0 : _b.length) {
            processedGroups.push(processedGroup);
          }
        }
        return processedGroups;
      }
      const fuseGroups = Object.entries(groupsById).map(([id, items2]) => {
        var _a2;
        const group = currentGroups == null ? void 0 : currentGroups.find((group2) => group2.id === id);
        if (!group) {
          return;
        }
        const processedGroup = processGroupItems(group, items2);
        return ((_a2 = processedGroup.items) == null ? void 0 : _a2.length) ? processedGroup : void 0;
      }).filter((group) => !!group);
      const nonFuseGroups = ((_e = (_d = (_c = currentGroups == null ? void 0 : currentGroups.map((group, index) => ({ ...group, index }))) == null ? void 0 : _c.filter((group) => {
        var _a2;
        return group.ignoreFilter && ((_a2 = group.items) == null ? void 0 : _a2.length);
      })) == null ? void 0 : _d.map((group) => {
        const processedGroup = processGroupItems(group, group.items || []);
        return { ...processedGroup, index: group.index };
      })) == null ? void 0 : _e.filter((group) => {
        var _a2;
        return (_a2 = group.items) == null ? void 0 : _a2.length;
      })) || [];
      return nonFuseGroups.reduce((acc, group) => {
        acc.splice(group.index, 0, group);
        return acc;
      }, [...fuseGroups]);
    });
    const filteredItems = computed(() => filteredGroups.value.flatMap((group) => group.items || []));
    const rootRef = useTemplateRef("rootRef");
    function navigate(item) {
      var _a, _b;
      if (!((_a = item.children) == null ? void 0 : _a.length)) {
        return;
      }
      history.value.push({
        id: `history-${history.value.length}`,
        label: item.label,
        slot: item.slot,
        placeholder: item.placeholder,
        items: item.children
      });
      searchTerm.value = "";
      (_b = rootRef.value) == null ? void 0 : _b.highlightFirstItem();
    }
    function navigateBack() {
      var _a;
      if (!history.value.length) {
        return;
      }
      history.value.pop();
      searchTerm.value = "";
      (_a = rootRef.value) == null ? void 0 : _a.highlightFirstItem();
    }
    function onBackspace() {
      if (!searchTerm.value) {
        navigateBack();
      }
    }
    function onSelect(e, item) {
      var _a, _b;
      if ((_a = item.children) == null ? void 0 : _a.length) {
        e.preventDefault();
        navigate(item);
      } else {
        (_b = item.onSelect) == null ? void 0 : _b.call(item, e);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineItemTemplate), null, {
        default: withCtx(({ item, index, group }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$C, mergeProps(unref(pickLinkProps)(item), { custom: "" }), {
              default: withCtx(({ active, ...slotProps }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ListboxItem_default), {
                    value: props.valueKey ? unref(get)(item, props.valueKey) : unref(omit)(item, ["matches", "group", "onSelect", "labelHtml", "suffixHtml", "children"]),
                    disabled: item.disabled,
                    "as-child": "",
                    onSelect: ($event) => onSelect($event, item)
                  }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      var _a2, _b, _c, _d;
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$D, mergeProps(slotProps, {
                          "data-slot": "item",
                          class: ui.value.item({ class: [(_a2 = unref(uiProp)) == null ? void 0 : _a2.item, (_b = item.ui) == null ? void 0 : _b.item, item.class], active: active || item.active })
                        }), {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              ssrRenderSlot(_ctx.$slots, item.slot || (group == null ? void 0 : group.slot) || "item", {
                                item,
                                index,
                                ui: ui.value
                              }, () => {
                                var _a3, _b2, _c2, _d2, _e, _f, _g, _h, _i;
                                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : (group == null ? void 0 : group.slot) ? `${group.slot}-leading` : `item-leading`, {
                                  item,
                                  index,
                                  ui: ui.value
                                }, () => {
                                  var _a4, _b3, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j, _k, _l;
                                  if (item.loading) {
                                    _push5(ssrRenderComponent(_sfc_main$G, {
                                      name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                      "data-slot": "itemLeadingIcon",
                                      class: ui.value.itemLeadingIcon({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemLeadingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemLeadingIcon], loading: true })
                                    }, null, _parent5, _scopeId4));
                                  } else if (item.icon) {
                                    _push5(ssrRenderComponent(_sfc_main$G, {
                                      name: item.icon,
                                      "data-slot": "itemLeadingIcon",
                                      class: ui.value.itemLeadingIcon({ class: [(_c3 = unref(uiProp)) == null ? void 0 : _c3.itemLeadingIcon, (_d3 = item.ui) == null ? void 0 : _d3.itemLeadingIcon], active: active || item.active })
                                    }, null, _parent5, _scopeId4));
                                  } else if (item.avatar) {
                                    _push5(ssrRenderComponent(_sfc_main$E, mergeProps({
                                      size: ((_e2 = item.ui) == null ? void 0 : _e2.itemLeadingAvatarSize) || ((_f2 = unref(uiProp)) == null ? void 0 : _f2.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                                    }, item.avatar, {
                                      "data-slot": "itemLeadingAvatar",
                                      class: ui.value.itemLeadingAvatar({ class: [(_g2 = unref(uiProp)) == null ? void 0 : _g2.itemLeadingAvatar, (_h2 = item.ui) == null ? void 0 : _h2.itemLeadingAvatar], active: active || item.active })
                                    }), null, _parent5, _scopeId4));
                                  } else if (item.chip) {
                                    _push5(ssrRenderComponent(_sfc_main$F, mergeProps({
                                      size: ((_i2 = item.ui) == null ? void 0 : _i2.itemLeadingChipSize) || ((_j = unref(uiProp)) == null ? void 0 : _j.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                      inset: "",
                                      standalone: ""
                                    }, item.chip, {
                                      "data-slot": "itemLeadingChip",
                                      class: ui.value.itemLeadingChip({ class: [(_k = unref(uiProp)) == null ? void 0 : _k.itemLeadingChip, (_l = item.ui) == null ? void 0 : _l.itemLeadingChip], active: active || item.active })
                                    }), null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                                if (item.prefix || (item.labelHtml || unref(get)(item, props.labelKey)) || (item.suffixHtml || item.suffix) || !!slots[item.slot ? `${item.slot}-label` : (group == null ? void 0 : group.slot) ? `${group.slot}-label` : `item-label`] || (unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : (group == null ? void 0 : group.slot) ? `${group.slot}-description` : `item-description`])) {
                                  _push5(`<span data-slot="itemWrapper" class="${ssrRenderClass(ui.value.itemWrapper({ class: [(_a3 = unref(uiProp)) == null ? void 0 : _a3.itemWrapper, (_b2 = item.ui) == null ? void 0 : _b2.itemWrapper] }))}"${_scopeId4}><span data-slot="itemLabel" class="${ssrRenderClass(ui.value.itemLabel({ class: [(_c2 = unref(uiProp)) == null ? void 0 : _c2.itemLabel, (_d2 = item.ui) == null ? void 0 : _d2.itemLabel], active: active || item.active }))}"${_scopeId4}>`);
                                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : (group == null ? void 0 : group.slot) ? `${group.slot}-label` : `item-label`, {
                                    item,
                                    index,
                                    ui: ui.value
                                  }, () => {
                                    var _a4, _b3, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j, _k, _l;
                                    if (item.prefix) {
                                      _push5(`<span data-slot="itemLabelPrefix" class="${ssrRenderClass(ui.value.itemLabelPrefix({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemLabelPrefix, (_b3 = item.ui) == null ? void 0 : _b3.itemLabelPrefix] }))}"${_scopeId4}>${ssrInterpolate(item.prefix)}</span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                    if (item.labelHtml) {
                                      _push5(`<span data-slot="itemLabelBase" class="${ssrRenderClass(ui.value.itemLabelBase({ class: [(_c3 = unref(uiProp)) == null ? void 0 : _c3.itemLabelBase, (_d3 = item.ui) == null ? void 0 : _d3.itemLabelBase], active: active || item.active }))}"${_scopeId4}>${(_e2 = item.labelHtml) != null ? _e2 : ""}</span>`);
                                    } else {
                                      _push5(`<span data-slot="itemLabelBase" class="${ssrRenderClass(ui.value.itemLabelBase({ class: [(_f2 = unref(uiProp)) == null ? void 0 : _f2.itemLabelBase, (_g2 = item.ui) == null ? void 0 : _g2.itemLabelBase], active: active || item.active }))}"${_scopeId4}>${ssrInterpolate(unref(get)(item, props.labelKey))}</span>`);
                                    }
                                    if (item.suffixHtml) {
                                      _push5(`<span data-slot="itemLabelSuffix" class="${ssrRenderClass(ui.value.itemLabelSuffix({ class: [(_h2 = unref(uiProp)) == null ? void 0 : _h2.itemLabelSuffix, (_i2 = item.ui) == null ? void 0 : _i2.itemLabelSuffix], active: active || item.active }))}"${_scopeId4}>${(_j = item.suffixHtml) != null ? _j : ""}</span>`);
                                    } else if (item.suffix) {
                                      _push5(`<span data-slot="itemLabelSuffix" class="${ssrRenderClass(ui.value.itemLabelSuffix({ class: [(_k = unref(uiProp)) == null ? void 0 : _k.itemLabelSuffix, (_l = item.ui) == null ? void 0 : _l.itemLabelSuffix], active: active || item.active }))}"${_scopeId4}>${ssrInterpolate(item.suffix)}</span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                  }, _push5, _parent5, _scopeId4);
                                  _push5(`</span>`);
                                  if (unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : (group == null ? void 0 : group.slot) ? `${group.slot}-description` : `item-description`]) {
                                    _push5(`<span data-slot="itemDescription" class="${ssrRenderClass(ui.value.itemDescription({ class: [(_e = unref(uiProp)) == null ? void 0 : _e.itemDescription, (_f = item.ui) == null ? void 0 : _f.itemDescription] }))}"${_scopeId4}>`);
                                    ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : (group == null ? void 0 : group.slot) ? `${group.slot}-description` : `item-description`, {
                                      item,
                                      index,
                                      ui: ui.value
                                    }, () => {
                                      _push5(`${ssrInterpolate(unref(get)(item, props.descriptionKey))}`);
                                    }, _push5, _parent5, _scopeId4);
                                    _push5(`</span>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<span data-slot="itemTrailing" class="${ssrRenderClass(ui.value.itemTrailing({ class: [(_g = unref(uiProp)) == null ? void 0 : _g.itemTrailing, (_h = item.ui) == null ? void 0 : _h.itemTrailing] }))}"${_scopeId4}>`);
                                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : (group == null ? void 0 : group.slot) ? `${group.slot}-trailing` : `item-trailing`, {
                                  item,
                                  index,
                                  ui: ui.value
                                }, () => {
                                  var _a4, _b3, _c3, _d3, _e2, _f2, _g2;
                                  if (item.children && item.children.length > 0) {
                                    _push5(ssrRenderComponent(_sfc_main$G, {
                                      name: __props.childrenIcon || unref(appConfig).ui.icons.chevronRight,
                                      "data-slot": "itemTrailingIcon",
                                      class: ui.value.itemTrailingIcon({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemTrailingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemTrailingIcon] })
                                    }, null, _parent5, _scopeId4));
                                  } else if ((_c3 = item.kbds) == null ? void 0 : _c3.length) {
                                    _push5(`<span data-slot="itemTrailingKbds" class="${ssrRenderClass(ui.value.itemTrailingKbds({ class: [(_d3 = unref(uiProp)) == null ? void 0 : _d3.itemTrailingKbds, (_e2 = item.ui) == null ? void 0 : _e2.itemTrailingKbds] }))}"${_scopeId4}><!--[-->`);
                                    ssrRenderList(item.kbds, (kbd, kbdIndex) => {
                                      var _a5, _b4;
                                      _push5(ssrRenderComponent(_sfc_main$9, mergeProps({
                                        key: kbdIndex,
                                        size: ((_a5 = item.ui) == null ? void 0 : _a5.itemTrailingKbdsSize) || ((_b4 = unref(uiProp)) == null ? void 0 : _b4.itemTrailingKbdsSize) || ui.value.itemTrailingKbdsSize()
                                      }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent5, _scopeId4));
                                    });
                                    _push5(`<!--]--></span>`);
                                  } else if (group == null ? void 0 : group.highlightedIcon) {
                                    _push5(ssrRenderComponent(_sfc_main$G, {
                                      name: group.highlightedIcon,
                                      "data-slot": "itemTrailingHighlightedIcon",
                                      class: ui.value.itemTrailingHighlightedIcon({ class: [(_f2 = unref(uiProp)) == null ? void 0 : _f2.itemTrailingHighlightedIcon, (_g2 = item.ui) == null ? void 0 : _g2.itemTrailingHighlightedIcon] })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                                if (!((_i = item.children) == null ? void 0 : _i.length)) {
                                  _push5(ssrRenderComponent(unref(ListboxItemIndicator_default), { "as-child": "" }, {
                                    default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                      var _a4, _b3, _c3, _d3;
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_sfc_main$G, {
                                          name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                          "data-slot": "itemTrailingIcon",
                                          class: ui.value.itemTrailingIcon({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemTrailingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemTrailingIcon] })
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_sfc_main$G, {
                                            name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                            "data-slot": "itemTrailingIcon",
                                            class: ui.value.itemTrailingIcon({ class: [(_c3 = unref(uiProp)) == null ? void 0 : _c3.itemTrailingIcon, (_d3 = item.ui) == null ? void 0 : _d3.itemTrailingIcon] })
                                          }, null, 8, ["name", "class"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</span>`);
                              }, _push5, _parent5, _scopeId4);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, item.slot || (group == null ? void 0 : group.slot) || "item", {
                                  item,
                                  index,
                                  ui: ui.value
                                }, () => {
                                  var _a3, _b2, _c2, _d2, _e, _f, _g, _h, _i;
                                  return [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : (group == null ? void 0 : group.slot) ? `${group.slot}-leading` : `item-leading`, {
                                      item,
                                      index,
                                      ui: ui.value
                                    }, () => {
                                      var _a4, _b3, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j, _k, _l;
                                      return [
                                        item.loading ? (openBlock(), createBlock(_sfc_main$G, {
                                          key: 0,
                                          name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                          "data-slot": "itemLeadingIcon",
                                          class: ui.value.itemLeadingIcon({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemLeadingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemLeadingIcon], loading: true })
                                        }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$G, {
                                          key: 1,
                                          name: item.icon,
                                          "data-slot": "itemLeadingIcon",
                                          class: ui.value.itemLeadingIcon({ class: [(_c3 = unref(uiProp)) == null ? void 0 : _c3.itemLeadingIcon, (_d3 = item.ui) == null ? void 0 : _d3.itemLeadingIcon], active: active || item.active })
                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$E, mergeProps({
                                          key: 2,
                                          size: ((_e2 = item.ui) == null ? void 0 : _e2.itemLeadingAvatarSize) || ((_f2 = unref(uiProp)) == null ? void 0 : _f2.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                                        }, item.avatar, {
                                          "data-slot": "itemLeadingAvatar",
                                          class: ui.value.itemLeadingAvatar({ class: [(_g2 = unref(uiProp)) == null ? void 0 : _g2.itemLeadingAvatar, (_h2 = item.ui) == null ? void 0 : _h2.itemLeadingAvatar], active: active || item.active })
                                        }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(_sfc_main$F, mergeProps({
                                          key: 3,
                                          size: ((_i2 = item.ui) == null ? void 0 : _i2.itemLeadingChipSize) || ((_j = unref(uiProp)) == null ? void 0 : _j.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                          inset: "",
                                          standalone: ""
                                        }, item.chip, {
                                          "data-slot": "itemLeadingChip",
                                          class: ui.value.itemLeadingChip({ class: [(_k = unref(uiProp)) == null ? void 0 : _k.itemLeadingChip, (_l = item.ui) == null ? void 0 : _l.itemLeadingChip], active: active || item.active })
                                        }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                      ];
                                    }),
                                    item.prefix || (item.labelHtml || unref(get)(item, props.labelKey)) || (item.suffixHtml || item.suffix) || !!slots[item.slot ? `${item.slot}-label` : (group == null ? void 0 : group.slot) ? `${group.slot}-label` : `item-label`] || (unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : (group == null ? void 0 : group.slot) ? `${group.slot}-description` : `item-description`]) ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      "data-slot": "itemWrapper",
                                      class: ui.value.itemWrapper({ class: [(_a3 = unref(uiProp)) == null ? void 0 : _a3.itemWrapper, (_b2 = item.ui) == null ? void 0 : _b2.itemWrapper] })
                                    }, [
                                      createVNode("span", {
                                        "data-slot": "itemLabel",
                                        class: ui.value.itemLabel({ class: [(_c2 = unref(uiProp)) == null ? void 0 : _c2.itemLabel, (_d2 = item.ui) == null ? void 0 : _d2.itemLabel], active: active || item.active })
                                      }, [
                                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : (group == null ? void 0 : group.slot) ? `${group.slot}-label` : `item-label`, {
                                          item,
                                          index,
                                          ui: ui.value
                                        }, () => {
                                          var _a4, _b3, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j;
                                          return [
                                            item.prefix ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              "data-slot": "itemLabelPrefix",
                                              class: ui.value.itemLabelPrefix({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemLabelPrefix, (_b3 = item.ui) == null ? void 0 : _b3.itemLabelPrefix] })
                                            }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                            item.labelHtml ? (openBlock(), createBlock("span", {
                                              key: 1,
                                              "data-slot": "itemLabelBase",
                                              class: ui.value.itemLabelBase({ class: [(_c3 = unref(uiProp)) == null ? void 0 : _c3.itemLabelBase, (_d3 = item.ui) == null ? void 0 : _d3.itemLabelBase], active: active || item.active }),
                                              innerHTML: item.labelHtml
                                            }, null, 10, ["innerHTML"])) : (openBlock(), createBlock("span", {
                                              key: 2,
                                              "data-slot": "itemLabelBase",
                                              class: ui.value.itemLabelBase({ class: [(_e2 = unref(uiProp)) == null ? void 0 : _e2.itemLabelBase, (_f2 = item.ui) == null ? void 0 : _f2.itemLabelBase], active: active || item.active })
                                            }, toDisplayString(unref(get)(item, props.labelKey)), 3)),
                                            item.suffixHtml ? (openBlock(), createBlock("span", {
                                              key: 3,
                                              "data-slot": "itemLabelSuffix",
                                              class: ui.value.itemLabelSuffix({ class: [(_g2 = unref(uiProp)) == null ? void 0 : _g2.itemLabelSuffix, (_h2 = item.ui) == null ? void 0 : _h2.itemLabelSuffix], active: active || item.active }),
                                              innerHTML: item.suffixHtml
                                            }, null, 10, ["innerHTML"])) : item.suffix ? (openBlock(), createBlock("span", {
                                              key: 4,
                                              "data-slot": "itemLabelSuffix",
                                              class: ui.value.itemLabelSuffix({ class: [(_i2 = unref(uiProp)) == null ? void 0 : _i2.itemLabelSuffix, (_j = item.ui) == null ? void 0 : _j.itemLabelSuffix], active: active || item.active })
                                            }, toDisplayString(item.suffix), 3)) : createCommentVNode("", true)
                                          ];
                                        })
                                      ], 2),
                                      unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : (group == null ? void 0 : group.slot) ? `${group.slot}-description` : `item-description`] ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        "data-slot": "itemDescription",
                                        class: ui.value.itemDescription({ class: [(_e = unref(uiProp)) == null ? void 0 : _e.itemDescription, (_f = item.ui) == null ? void 0 : _f.itemDescription] })
                                      }, [
                                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : (group == null ? void 0 : group.slot) ? `${group.slot}-description` : `item-description`, {
                                          item,
                                          index,
                                          ui: ui.value
                                        }, () => [
                                          createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)
                                        ])
                                      ], 2)) : createCommentVNode("", true)
                                    ], 2)) : createCommentVNode("", true),
                                    createVNode("span", {
                                      "data-slot": "itemTrailing",
                                      class: ui.value.itemTrailing({ class: [(_g = unref(uiProp)) == null ? void 0 : _g.itemTrailing, (_h = item.ui) == null ? void 0 : _h.itemTrailing] })
                                    }, [
                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : (group == null ? void 0 : group.slot) ? `${group.slot}-trailing` : `item-trailing`, {
                                        item,
                                        index,
                                        ui: ui.value
                                      }, () => {
                                        var _a4, _b3, _c3, _d3, _e2, _f2, _g2;
                                        return [
                                          item.children && item.children.length > 0 ? (openBlock(), createBlock(_sfc_main$G, {
                                            key: 0,
                                            name: __props.childrenIcon || unref(appConfig).ui.icons.chevronRight,
                                            "data-slot": "itemTrailingIcon",
                                            class: ui.value.itemTrailingIcon({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemTrailingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemTrailingIcon] })
                                          }, null, 8, ["name", "class"])) : ((_c3 = item.kbds) == null ? void 0 : _c3.length) ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            "data-slot": "itemTrailingKbds",
                                            class: ui.value.itemTrailingKbds({ class: [(_d3 = unref(uiProp)) == null ? void 0 : _d3.itemTrailingKbds, (_e2 = item.ui) == null ? void 0 : _e2.itemTrailingKbds] })
                                          }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                              var _a5, _b4;
                                              return openBlock(), createBlock(_sfc_main$9, mergeProps({
                                                key: kbdIndex,
                                                size: ((_a5 = item.ui) == null ? void 0 : _a5.itemTrailingKbdsSize) || ((_b4 = unref(uiProp)) == null ? void 0 : _b4.itemTrailingKbdsSize) || ui.value.itemTrailingKbdsSize()
                                              }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                            }), 128))
                                          ], 2)) : (group == null ? void 0 : group.highlightedIcon) ? (openBlock(), createBlock(_sfc_main$G, {
                                            key: 2,
                                            name: group.highlightedIcon,
                                            "data-slot": "itemTrailingHighlightedIcon",
                                            class: ui.value.itemTrailingHighlightedIcon({ class: [(_f2 = unref(uiProp)) == null ? void 0 : _f2.itemTrailingHighlightedIcon, (_g2 = item.ui) == null ? void 0 : _g2.itemTrailingHighlightedIcon] })
                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                        ];
                                      }),
                                      !((_i = item.children) == null ? void 0 : _i.length) ? (openBlock(), createBlock(unref(ListboxItemIndicator_default), {
                                        key: 0,
                                        "as-child": ""
                                      }, {
                                        default: withCtx(() => {
                                          var _a4, _b3;
                                          return [
                                            createVNode(_sfc_main$G, {
                                              name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                              "data-slot": "itemTrailingIcon",
                                              class: ui.value.itemTrailingIcon({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemTrailingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemTrailingIcon] })
                                            }, null, 8, ["name", "class"])
                                          ];
                                        }),
                                        _: 2
                                      }, 1024)) : createCommentVNode("", true)
                                    ], 2)
                                  ];
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$D, mergeProps(slotProps, {
                            "data-slot": "item",
                            class: ui.value.item({ class: [(_c = unref(uiProp)) == null ? void 0 : _c.item, (_d = item.ui) == null ? void 0 : _d.item, item.class], active: active || item.active })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot || (group == null ? void 0 : group.slot) || "item", {
                                item,
                                index,
                                ui: ui.value
                              }, () => {
                                var _a3, _b2, _c2, _d2, _e, _f, _g, _h, _i;
                                return [
                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : (group == null ? void 0 : group.slot) ? `${group.slot}-leading` : `item-leading`, {
                                    item,
                                    index,
                                    ui: ui.value
                                  }, () => {
                                    var _a4, _b3, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j, _k, _l;
                                    return [
                                      item.loading ? (openBlock(), createBlock(_sfc_main$G, {
                                        key: 0,
                                        name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                        "data-slot": "itemLeadingIcon",
                                        class: ui.value.itemLeadingIcon({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemLeadingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemLeadingIcon], loading: true })
                                      }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$G, {
                                        key: 1,
                                        name: item.icon,
                                        "data-slot": "itemLeadingIcon",
                                        class: ui.value.itemLeadingIcon({ class: [(_c3 = unref(uiProp)) == null ? void 0 : _c3.itemLeadingIcon, (_d3 = item.ui) == null ? void 0 : _d3.itemLeadingIcon], active: active || item.active })
                                      }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$E, mergeProps({
                                        key: 2,
                                        size: ((_e2 = item.ui) == null ? void 0 : _e2.itemLeadingAvatarSize) || ((_f2 = unref(uiProp)) == null ? void 0 : _f2.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                                      }, item.avatar, {
                                        "data-slot": "itemLeadingAvatar",
                                        class: ui.value.itemLeadingAvatar({ class: [(_g2 = unref(uiProp)) == null ? void 0 : _g2.itemLeadingAvatar, (_h2 = item.ui) == null ? void 0 : _h2.itemLeadingAvatar], active: active || item.active })
                                      }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(_sfc_main$F, mergeProps({
                                        key: 3,
                                        size: ((_i2 = item.ui) == null ? void 0 : _i2.itemLeadingChipSize) || ((_j = unref(uiProp)) == null ? void 0 : _j.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                        inset: "",
                                        standalone: ""
                                      }, item.chip, {
                                        "data-slot": "itemLeadingChip",
                                        class: ui.value.itemLeadingChip({ class: [(_k = unref(uiProp)) == null ? void 0 : _k.itemLeadingChip, (_l = item.ui) == null ? void 0 : _l.itemLeadingChip], active: active || item.active })
                                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  item.prefix || (item.labelHtml || unref(get)(item, props.labelKey)) || (item.suffixHtml || item.suffix) || !!slots[item.slot ? `${item.slot}-label` : (group == null ? void 0 : group.slot) ? `${group.slot}-label` : `item-label`] || (unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : (group == null ? void 0 : group.slot) ? `${group.slot}-description` : `item-description`]) ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    "data-slot": "itemWrapper",
                                    class: ui.value.itemWrapper({ class: [(_a3 = unref(uiProp)) == null ? void 0 : _a3.itemWrapper, (_b2 = item.ui) == null ? void 0 : _b2.itemWrapper] })
                                  }, [
                                    createVNode("span", {
                                      "data-slot": "itemLabel",
                                      class: ui.value.itemLabel({ class: [(_c2 = unref(uiProp)) == null ? void 0 : _c2.itemLabel, (_d2 = item.ui) == null ? void 0 : _d2.itemLabel], active: active || item.active })
                                    }, [
                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : (group == null ? void 0 : group.slot) ? `${group.slot}-label` : `item-label`, {
                                        item,
                                        index,
                                        ui: ui.value
                                      }, () => {
                                        var _a4, _b3, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j;
                                        return [
                                          item.prefix ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            "data-slot": "itemLabelPrefix",
                                            class: ui.value.itemLabelPrefix({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemLabelPrefix, (_b3 = item.ui) == null ? void 0 : _b3.itemLabelPrefix] })
                                          }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                          item.labelHtml ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            "data-slot": "itemLabelBase",
                                            class: ui.value.itemLabelBase({ class: [(_c3 = unref(uiProp)) == null ? void 0 : _c3.itemLabelBase, (_d3 = item.ui) == null ? void 0 : _d3.itemLabelBase], active: active || item.active }),
                                            innerHTML: item.labelHtml
                                          }, null, 10, ["innerHTML"])) : (openBlock(), createBlock("span", {
                                            key: 2,
                                            "data-slot": "itemLabelBase",
                                            class: ui.value.itemLabelBase({ class: [(_e2 = unref(uiProp)) == null ? void 0 : _e2.itemLabelBase, (_f2 = item.ui) == null ? void 0 : _f2.itemLabelBase], active: active || item.active })
                                          }, toDisplayString(unref(get)(item, props.labelKey)), 3)),
                                          item.suffixHtml ? (openBlock(), createBlock("span", {
                                            key: 3,
                                            "data-slot": "itemLabelSuffix",
                                            class: ui.value.itemLabelSuffix({ class: [(_g2 = unref(uiProp)) == null ? void 0 : _g2.itemLabelSuffix, (_h2 = item.ui) == null ? void 0 : _h2.itemLabelSuffix], active: active || item.active }),
                                            innerHTML: item.suffixHtml
                                          }, null, 10, ["innerHTML"])) : item.suffix ? (openBlock(), createBlock("span", {
                                            key: 4,
                                            "data-slot": "itemLabelSuffix",
                                            class: ui.value.itemLabelSuffix({ class: [(_i2 = unref(uiProp)) == null ? void 0 : _i2.itemLabelSuffix, (_j = item.ui) == null ? void 0 : _j.itemLabelSuffix], active: active || item.active })
                                          }, toDisplayString(item.suffix), 3)) : createCommentVNode("", true)
                                        ];
                                      })
                                    ], 2),
                                    unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : (group == null ? void 0 : group.slot) ? `${group.slot}-description` : `item-description`] ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      "data-slot": "itemDescription",
                                      class: ui.value.itemDescription({ class: [(_e = unref(uiProp)) == null ? void 0 : _e.itemDescription, (_f = item.ui) == null ? void 0 : _f.itemDescription] })
                                    }, [
                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : (group == null ? void 0 : group.slot) ? `${group.slot}-description` : `item-description`, {
                                        item,
                                        index,
                                        ui: ui.value
                                      }, () => [
                                        createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)
                                      ])
                                    ], 2)) : createCommentVNode("", true)
                                  ], 2)) : createCommentVNode("", true),
                                  createVNode("span", {
                                    "data-slot": "itemTrailing",
                                    class: ui.value.itemTrailing({ class: [(_g = unref(uiProp)) == null ? void 0 : _g.itemTrailing, (_h = item.ui) == null ? void 0 : _h.itemTrailing] })
                                  }, [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : (group == null ? void 0 : group.slot) ? `${group.slot}-trailing` : `item-trailing`, {
                                      item,
                                      index,
                                      ui: ui.value
                                    }, () => {
                                      var _a4, _b3, _c3, _d3, _e2, _f2, _g2;
                                      return [
                                        item.children && item.children.length > 0 ? (openBlock(), createBlock(_sfc_main$G, {
                                          key: 0,
                                          name: __props.childrenIcon || unref(appConfig).ui.icons.chevronRight,
                                          "data-slot": "itemTrailingIcon",
                                          class: ui.value.itemTrailingIcon({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemTrailingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemTrailingIcon] })
                                        }, null, 8, ["name", "class"])) : ((_c3 = item.kbds) == null ? void 0 : _c3.length) ? (openBlock(), createBlock("span", {
                                          key: 1,
                                          "data-slot": "itemTrailingKbds",
                                          class: ui.value.itemTrailingKbds({ class: [(_d3 = unref(uiProp)) == null ? void 0 : _d3.itemTrailingKbds, (_e2 = item.ui) == null ? void 0 : _e2.itemTrailingKbds] })
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                            var _a5, _b4;
                                            return openBlock(), createBlock(_sfc_main$9, mergeProps({
                                              key: kbdIndex,
                                              size: ((_a5 = item.ui) == null ? void 0 : _a5.itemTrailingKbdsSize) || ((_b4 = unref(uiProp)) == null ? void 0 : _b4.itemTrailingKbdsSize) || ui.value.itemTrailingKbdsSize()
                                            }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                          }), 128))
                                        ], 2)) : (group == null ? void 0 : group.highlightedIcon) ? (openBlock(), createBlock(_sfc_main$G, {
                                          key: 2,
                                          name: group.highlightedIcon,
                                          "data-slot": "itemTrailingHighlightedIcon",
                                          class: ui.value.itemTrailingHighlightedIcon({ class: [(_f2 = unref(uiProp)) == null ? void 0 : _f2.itemTrailingHighlightedIcon, (_g2 = item.ui) == null ? void 0 : _g2.itemTrailingHighlightedIcon] })
                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                      ];
                                    }),
                                    !((_i = item.children) == null ? void 0 : _i.length) ? (openBlock(), createBlock(unref(ListboxItemIndicator_default), {
                                      key: 0,
                                      "as-child": ""
                                    }, {
                                      default: withCtx(() => {
                                        var _a4, _b3;
                                        return [
                                          createVNode(_sfc_main$G, {
                                            name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                            "data-slot": "itemTrailingIcon",
                                            class: ui.value.itemTrailingIcon({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemTrailingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemTrailingIcon] })
                                          }, null, 8, ["name", "class"])
                                        ];
                                      }),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true)
                                  ], 2)
                                ];
                              })
                            ]),
                            _: 2
                          }, 1040, ["class"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ListboxItem_default), {
                      value: props.valueKey ? unref(get)(item, props.valueKey) : unref(omit)(item, ["matches", "group", "onSelect", "labelHtml", "suffixHtml", "children"]),
                      disabled: item.disabled,
                      "as-child": "",
                      onSelect: ($event) => onSelect($event, item)
                    }, {
                      default: withCtx(() => {
                        var _a2, _b;
                        return [
                          createVNode(_sfc_main$D, mergeProps(slotProps, {
                            "data-slot": "item",
                            class: ui.value.item({ class: [(_a2 = unref(uiProp)) == null ? void 0 : _a2.item, (_b = item.ui) == null ? void 0 : _b.item, item.class], active: active || item.active })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot || (group == null ? void 0 : group.slot) || "item", {
                                item,
                                index,
                                ui: ui.value
                              }, () => {
                                var _a3, _b2, _c, _d, _e, _f, _g, _h, _i;
                                return [
                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : (group == null ? void 0 : group.slot) ? `${group.slot}-leading` : `item-leading`, {
                                    item,
                                    index,
                                    ui: ui.value
                                  }, () => {
                                    var _a4, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k, _l;
                                    return [
                                      item.loading ? (openBlock(), createBlock(_sfc_main$G, {
                                        key: 0,
                                        name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                        "data-slot": "itemLeadingIcon",
                                        class: ui.value.itemLeadingIcon({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemLeadingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemLeadingIcon], loading: true })
                                      }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$G, {
                                        key: 1,
                                        name: item.icon,
                                        "data-slot": "itemLeadingIcon",
                                        class: ui.value.itemLeadingIcon({ class: [(_c2 = unref(uiProp)) == null ? void 0 : _c2.itemLeadingIcon, (_d2 = item.ui) == null ? void 0 : _d2.itemLeadingIcon], active: active || item.active })
                                      }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$E, mergeProps({
                                        key: 2,
                                        size: ((_e2 = item.ui) == null ? void 0 : _e2.itemLeadingAvatarSize) || ((_f2 = unref(uiProp)) == null ? void 0 : _f2.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                                      }, item.avatar, {
                                        "data-slot": "itemLeadingAvatar",
                                        class: ui.value.itemLeadingAvatar({ class: [(_g2 = unref(uiProp)) == null ? void 0 : _g2.itemLeadingAvatar, (_h2 = item.ui) == null ? void 0 : _h2.itemLeadingAvatar], active: active || item.active })
                                      }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(_sfc_main$F, mergeProps({
                                        key: 3,
                                        size: ((_i2 = item.ui) == null ? void 0 : _i2.itemLeadingChipSize) || ((_j = unref(uiProp)) == null ? void 0 : _j.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                        inset: "",
                                        standalone: ""
                                      }, item.chip, {
                                        "data-slot": "itemLeadingChip",
                                        class: ui.value.itemLeadingChip({ class: [(_k = unref(uiProp)) == null ? void 0 : _k.itemLeadingChip, (_l = item.ui) == null ? void 0 : _l.itemLeadingChip], active: active || item.active })
                                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  item.prefix || (item.labelHtml || unref(get)(item, props.labelKey)) || (item.suffixHtml || item.suffix) || !!slots[item.slot ? `${item.slot}-label` : (group == null ? void 0 : group.slot) ? `${group.slot}-label` : `item-label`] || (unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : (group == null ? void 0 : group.slot) ? `${group.slot}-description` : `item-description`]) ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    "data-slot": "itemWrapper",
                                    class: ui.value.itemWrapper({ class: [(_a3 = unref(uiProp)) == null ? void 0 : _a3.itemWrapper, (_b2 = item.ui) == null ? void 0 : _b2.itemWrapper] })
                                  }, [
                                    createVNode("span", {
                                      "data-slot": "itemLabel",
                                      class: ui.value.itemLabel({ class: [(_c = unref(uiProp)) == null ? void 0 : _c.itemLabel, (_d = item.ui) == null ? void 0 : _d.itemLabel], active: active || item.active })
                                    }, [
                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : (group == null ? void 0 : group.slot) ? `${group.slot}-label` : `item-label`, {
                                        item,
                                        index,
                                        ui: ui.value
                                      }, () => {
                                        var _a4, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j;
                                        return [
                                          item.prefix ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            "data-slot": "itemLabelPrefix",
                                            class: ui.value.itemLabelPrefix({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemLabelPrefix, (_b3 = item.ui) == null ? void 0 : _b3.itemLabelPrefix] })
                                          }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                          item.labelHtml ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            "data-slot": "itemLabelBase",
                                            class: ui.value.itemLabelBase({ class: [(_c2 = unref(uiProp)) == null ? void 0 : _c2.itemLabelBase, (_d2 = item.ui) == null ? void 0 : _d2.itemLabelBase], active: active || item.active }),
                                            innerHTML: item.labelHtml
                                          }, null, 10, ["innerHTML"])) : (openBlock(), createBlock("span", {
                                            key: 2,
                                            "data-slot": "itemLabelBase",
                                            class: ui.value.itemLabelBase({ class: [(_e2 = unref(uiProp)) == null ? void 0 : _e2.itemLabelBase, (_f2 = item.ui) == null ? void 0 : _f2.itemLabelBase], active: active || item.active })
                                          }, toDisplayString(unref(get)(item, props.labelKey)), 3)),
                                          item.suffixHtml ? (openBlock(), createBlock("span", {
                                            key: 3,
                                            "data-slot": "itemLabelSuffix",
                                            class: ui.value.itemLabelSuffix({ class: [(_g2 = unref(uiProp)) == null ? void 0 : _g2.itemLabelSuffix, (_h2 = item.ui) == null ? void 0 : _h2.itemLabelSuffix], active: active || item.active }),
                                            innerHTML: item.suffixHtml
                                          }, null, 10, ["innerHTML"])) : item.suffix ? (openBlock(), createBlock("span", {
                                            key: 4,
                                            "data-slot": "itemLabelSuffix",
                                            class: ui.value.itemLabelSuffix({ class: [(_i2 = unref(uiProp)) == null ? void 0 : _i2.itemLabelSuffix, (_j = item.ui) == null ? void 0 : _j.itemLabelSuffix], active: active || item.active })
                                          }, toDisplayString(item.suffix), 3)) : createCommentVNode("", true)
                                        ];
                                      })
                                    ], 2),
                                    unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : (group == null ? void 0 : group.slot) ? `${group.slot}-description` : `item-description`] ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      "data-slot": "itemDescription",
                                      class: ui.value.itemDescription({ class: [(_e = unref(uiProp)) == null ? void 0 : _e.itemDescription, (_f = item.ui) == null ? void 0 : _f.itemDescription] })
                                    }, [
                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : (group == null ? void 0 : group.slot) ? `${group.slot}-description` : `item-description`, {
                                        item,
                                        index,
                                        ui: ui.value
                                      }, () => [
                                        createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)
                                      ])
                                    ], 2)) : createCommentVNode("", true)
                                  ], 2)) : createCommentVNode("", true),
                                  createVNode("span", {
                                    "data-slot": "itemTrailing",
                                    class: ui.value.itemTrailing({ class: [(_g = unref(uiProp)) == null ? void 0 : _g.itemTrailing, (_h = item.ui) == null ? void 0 : _h.itemTrailing] })
                                  }, [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : (group == null ? void 0 : group.slot) ? `${group.slot}-trailing` : `item-trailing`, {
                                      item,
                                      index,
                                      ui: ui.value
                                    }, () => {
                                      var _a4, _b3, _c2, _d2, _e2, _f2, _g2;
                                      return [
                                        item.children && item.children.length > 0 ? (openBlock(), createBlock(_sfc_main$G, {
                                          key: 0,
                                          name: __props.childrenIcon || unref(appConfig).ui.icons.chevronRight,
                                          "data-slot": "itemTrailingIcon",
                                          class: ui.value.itemTrailingIcon({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemTrailingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemTrailingIcon] })
                                        }, null, 8, ["name", "class"])) : ((_c2 = item.kbds) == null ? void 0 : _c2.length) ? (openBlock(), createBlock("span", {
                                          key: 1,
                                          "data-slot": "itemTrailingKbds",
                                          class: ui.value.itemTrailingKbds({ class: [(_d2 = unref(uiProp)) == null ? void 0 : _d2.itemTrailingKbds, (_e2 = item.ui) == null ? void 0 : _e2.itemTrailingKbds] })
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                            var _a5, _b4;
                                            return openBlock(), createBlock(_sfc_main$9, mergeProps({
                                              key: kbdIndex,
                                              size: ((_a5 = item.ui) == null ? void 0 : _a5.itemTrailingKbdsSize) || ((_b4 = unref(uiProp)) == null ? void 0 : _b4.itemTrailingKbdsSize) || ui.value.itemTrailingKbdsSize()
                                            }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                          }), 128))
                                        ], 2)) : (group == null ? void 0 : group.highlightedIcon) ? (openBlock(), createBlock(_sfc_main$G, {
                                          key: 2,
                                          name: group.highlightedIcon,
                                          "data-slot": "itemTrailingHighlightedIcon",
                                          class: ui.value.itemTrailingHighlightedIcon({ class: [(_f2 = unref(uiProp)) == null ? void 0 : _f2.itemTrailingHighlightedIcon, (_g2 = item.ui) == null ? void 0 : _g2.itemTrailingHighlightedIcon] })
                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                      ];
                                    }),
                                    !((_i = item.children) == null ? void 0 : _i.length) ? (openBlock(), createBlock(unref(ListboxItemIndicator_default), {
                                      key: 0,
                                      "as-child": ""
                                    }, {
                                      default: withCtx(() => {
                                        var _a4, _b3;
                                        return [
                                          createVNode(_sfc_main$G, {
                                            name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                            "data-slot": "itemTrailingIcon",
                                            class: ui.value.itemTrailingIcon({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemTrailingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemTrailingIcon] })
                                          }, null, 8, ["name", "class"])
                                        ];
                                      }),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true)
                                  ], 2)
                                ];
                              })
                            ]),
                            _: 2
                          }, 1040, ["class"])
                        ];
                      }),
                      _: 2
                    }, 1032, ["value", "disabled", "onSelect"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$C, mergeProps(unref(pickLinkProps)(item), { custom: "" }), {
                default: withCtx(({ active, ...slotProps }) => [
                  createVNode(unref(ListboxItem_default), {
                    value: props.valueKey ? unref(get)(item, props.valueKey) : unref(omit)(item, ["matches", "group", "onSelect", "labelHtml", "suffixHtml", "children"]),
                    disabled: item.disabled,
                    "as-child": "",
                    onSelect: ($event) => onSelect($event, item)
                  }, {
                    default: withCtx(() => {
                      var _a2, _b;
                      return [
                        createVNode(_sfc_main$D, mergeProps(slotProps, {
                          "data-slot": "item",
                          class: ui.value.item({ class: [(_a2 = unref(uiProp)) == null ? void 0 : _a2.item, (_b = item.ui) == null ? void 0 : _b.item, item.class], active: active || item.active })
                        }), {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, item.slot || (group == null ? void 0 : group.slot) || "item", {
                              item,
                              index,
                              ui: ui.value
                            }, () => {
                              var _a3, _b2, _c, _d, _e, _f, _g, _h, _i;
                              return [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : (group == null ? void 0 : group.slot) ? `${group.slot}-leading` : `item-leading`, {
                                  item,
                                  index,
                                  ui: ui.value
                                }, () => {
                                  var _a4, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k, _l;
                                  return [
                                    item.loading ? (openBlock(), createBlock(_sfc_main$G, {
                                      key: 0,
                                      name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                                      "data-slot": "itemLeadingIcon",
                                      class: ui.value.itemLeadingIcon({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemLeadingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemLeadingIcon], loading: true })
                                    }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$G, {
                                      key: 1,
                                      name: item.icon,
                                      "data-slot": "itemLeadingIcon",
                                      class: ui.value.itemLeadingIcon({ class: [(_c2 = unref(uiProp)) == null ? void 0 : _c2.itemLeadingIcon, (_d2 = item.ui) == null ? void 0 : _d2.itemLeadingIcon], active: active || item.active })
                                    }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$E, mergeProps({
                                      key: 2,
                                      size: ((_e2 = item.ui) == null ? void 0 : _e2.itemLeadingAvatarSize) || ((_f2 = unref(uiProp)) == null ? void 0 : _f2.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                                    }, item.avatar, {
                                      "data-slot": "itemLeadingAvatar",
                                      class: ui.value.itemLeadingAvatar({ class: [(_g2 = unref(uiProp)) == null ? void 0 : _g2.itemLeadingAvatar, (_h2 = item.ui) == null ? void 0 : _h2.itemLeadingAvatar], active: active || item.active })
                                    }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(_sfc_main$F, mergeProps({
                                      key: 3,
                                      size: ((_i2 = item.ui) == null ? void 0 : _i2.itemLeadingChipSize) || ((_j = unref(uiProp)) == null ? void 0 : _j.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                      inset: "",
                                      standalone: ""
                                    }, item.chip, {
                                      "data-slot": "itemLeadingChip",
                                      class: ui.value.itemLeadingChip({ class: [(_k = unref(uiProp)) == null ? void 0 : _k.itemLeadingChip, (_l = item.ui) == null ? void 0 : _l.itemLeadingChip], active: active || item.active })
                                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                  ];
                                }),
                                item.prefix || (item.labelHtml || unref(get)(item, props.labelKey)) || (item.suffixHtml || item.suffix) || !!slots[item.slot ? `${item.slot}-label` : (group == null ? void 0 : group.slot) ? `${group.slot}-label` : `item-label`] || (unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : (group == null ? void 0 : group.slot) ? `${group.slot}-description` : `item-description`]) ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  "data-slot": "itemWrapper",
                                  class: ui.value.itemWrapper({ class: [(_a3 = unref(uiProp)) == null ? void 0 : _a3.itemWrapper, (_b2 = item.ui) == null ? void 0 : _b2.itemWrapper] })
                                }, [
                                  createVNode("span", {
                                    "data-slot": "itemLabel",
                                    class: ui.value.itemLabel({ class: [(_c = unref(uiProp)) == null ? void 0 : _c.itemLabel, (_d = item.ui) == null ? void 0 : _d.itemLabel], active: active || item.active })
                                  }, [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : (group == null ? void 0 : group.slot) ? `${group.slot}-label` : `item-label`, {
                                      item,
                                      index,
                                      ui: ui.value
                                    }, () => {
                                      var _a4, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j;
                                      return [
                                        item.prefix ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          "data-slot": "itemLabelPrefix",
                                          class: ui.value.itemLabelPrefix({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemLabelPrefix, (_b3 = item.ui) == null ? void 0 : _b3.itemLabelPrefix] })
                                        }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                        item.labelHtml ? (openBlock(), createBlock("span", {
                                          key: 1,
                                          "data-slot": "itemLabelBase",
                                          class: ui.value.itemLabelBase({ class: [(_c2 = unref(uiProp)) == null ? void 0 : _c2.itemLabelBase, (_d2 = item.ui) == null ? void 0 : _d2.itemLabelBase], active: active || item.active }),
                                          innerHTML: item.labelHtml
                                        }, null, 10, ["innerHTML"])) : (openBlock(), createBlock("span", {
                                          key: 2,
                                          "data-slot": "itemLabelBase",
                                          class: ui.value.itemLabelBase({ class: [(_e2 = unref(uiProp)) == null ? void 0 : _e2.itemLabelBase, (_f2 = item.ui) == null ? void 0 : _f2.itemLabelBase], active: active || item.active })
                                        }, toDisplayString(unref(get)(item, props.labelKey)), 3)),
                                        item.suffixHtml ? (openBlock(), createBlock("span", {
                                          key: 3,
                                          "data-slot": "itemLabelSuffix",
                                          class: ui.value.itemLabelSuffix({ class: [(_g2 = unref(uiProp)) == null ? void 0 : _g2.itemLabelSuffix, (_h2 = item.ui) == null ? void 0 : _h2.itemLabelSuffix], active: active || item.active }),
                                          innerHTML: item.suffixHtml
                                        }, null, 10, ["innerHTML"])) : item.suffix ? (openBlock(), createBlock("span", {
                                          key: 4,
                                          "data-slot": "itemLabelSuffix",
                                          class: ui.value.itemLabelSuffix({ class: [(_i2 = unref(uiProp)) == null ? void 0 : _i2.itemLabelSuffix, (_j = item.ui) == null ? void 0 : _j.itemLabelSuffix], active: active || item.active })
                                        }, toDisplayString(item.suffix), 3)) : createCommentVNode("", true)
                                      ];
                                    })
                                  ], 2),
                                  unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : (group == null ? void 0 : group.slot) ? `${group.slot}-description` : `item-description`] ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    "data-slot": "itemDescription",
                                    class: ui.value.itemDescription({ class: [(_e = unref(uiProp)) == null ? void 0 : _e.itemDescription, (_f = item.ui) == null ? void 0 : _f.itemDescription] })
                                  }, [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : (group == null ? void 0 : group.slot) ? `${group.slot}-description` : `item-description`, {
                                      item,
                                      index,
                                      ui: ui.value
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true)
                                ], 2)) : createCommentVNode("", true),
                                createVNode("span", {
                                  "data-slot": "itemTrailing",
                                  class: ui.value.itemTrailing({ class: [(_g = unref(uiProp)) == null ? void 0 : _g.itemTrailing, (_h = item.ui) == null ? void 0 : _h.itemTrailing] })
                                }, [
                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : (group == null ? void 0 : group.slot) ? `${group.slot}-trailing` : `item-trailing`, {
                                    item,
                                    index,
                                    ui: ui.value
                                  }, () => {
                                    var _a4, _b3, _c2, _d2, _e2, _f2, _g2;
                                    return [
                                      item.children && item.children.length > 0 ? (openBlock(), createBlock(_sfc_main$G, {
                                        key: 0,
                                        name: __props.childrenIcon || unref(appConfig).ui.icons.chevronRight,
                                        "data-slot": "itemTrailingIcon",
                                        class: ui.value.itemTrailingIcon({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemTrailingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemTrailingIcon] })
                                      }, null, 8, ["name", "class"])) : ((_c2 = item.kbds) == null ? void 0 : _c2.length) ? (openBlock(), createBlock("span", {
                                        key: 1,
                                        "data-slot": "itemTrailingKbds",
                                        class: ui.value.itemTrailingKbds({ class: [(_d2 = unref(uiProp)) == null ? void 0 : _d2.itemTrailingKbds, (_e2 = item.ui) == null ? void 0 : _e2.itemTrailingKbds] })
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                                          var _a5, _b4;
                                          return openBlock(), createBlock(_sfc_main$9, mergeProps({
                                            key: kbdIndex,
                                            size: ((_a5 = item.ui) == null ? void 0 : _a5.itemTrailingKbdsSize) || ((_b4 = unref(uiProp)) == null ? void 0 : _b4.itemTrailingKbdsSize) || ui.value.itemTrailingKbdsSize()
                                          }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                        }), 128))
                                      ], 2)) : (group == null ? void 0 : group.highlightedIcon) ? (openBlock(), createBlock(_sfc_main$G, {
                                        key: 2,
                                        name: group.highlightedIcon,
                                        "data-slot": "itemTrailingHighlightedIcon",
                                        class: ui.value.itemTrailingHighlightedIcon({ class: [(_f2 = unref(uiProp)) == null ? void 0 : _f2.itemTrailingHighlightedIcon, (_g2 = item.ui) == null ? void 0 : _g2.itemTrailingHighlightedIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  !((_i = item.children) == null ? void 0 : _i.length) ? (openBlock(), createBlock(unref(ListboxItemIndicator_default), {
                                    key: 0,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => {
                                      var _a4, _b3;
                                      return [
                                        createVNode(_sfc_main$G, {
                                          name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                          "data-slot": "itemTrailingIcon",
                                          class: ui.value.itemTrailingIcon({ class: [(_a4 = unref(uiProp)) == null ? void 0 : _a4.itemTrailingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemTrailingIcon] })
                                        }, null, 8, ["name", "class"])
                                      ];
                                    }),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ], 2)
                              ];
                            })
                          ]),
                          _: 2
                        }, 1040, ["class"])
                      ];
                    }),
                    _: 2
                  }, 1032, ["value", "disabled", "onSelect"])
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(ListboxRoot_default), mergeProps({ ...unref(rootProps), ..._ctx.$attrs }, {
        ref_key: "rootRef",
        ref: rootRef,
        "selection-behavior": __props.selectionBehavior,
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = unref(uiProp)) == null ? void 0 : _a.root, props.class] })
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            if (__props.input) {
              _push2(ssrRenderComponent(unref(ListboxFilter_default), {
                modelValue: searchTerm.value,
                "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                "as-child": ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b2, _c2, _d2;
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$k, mergeProps({
                      variant: "none",
                      size: __props.size
                    }, typeof props.input === "object" ? props.input : {}, {
                      placeholder: placeholder.value,
                      autofocus: __props.autofocus,
                      loading: __props.loading,
                      "loading-icon": __props.loadingIcon,
                      "trailing-icon": __props.trailingIcon,
                      icon: __props.icon || unref(appConfig).ui.icons.search,
                      "data-slot": "input",
                      class: ui.value.input({ class: (_a3 = unref(uiProp)) == null ? void 0 : _a3.input }),
                      onKeydown: onBackspace
                    }), createSlots({ _: 2 }, [
                      ((_b2 = history.value) == null ? void 0 : _b2.length) && (__props.back || !!slots.back) ? {
                        name: "leading",
                        fn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, "back", { ui: ui.value }, () => {
                              var _a4;
                              _push4(ssrRenderComponent(_sfc_main$B, mergeProps({
                                size: __props.size,
                                icon: __props.backIcon || unref(appConfig).ui.icons.arrowLeft,
                                color: "neutral",
                                variant: "link",
                                "aria-label": unref(t)("commandPalette.back")
                              }, typeof __props.back === "object" ? __props.back : {}, {
                                "data-slot": "back",
                                class: ui.value.back({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.back }),
                                onClick: navigateBack
                              }), null, _parent4, _scopeId3));
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, "back", { ui: ui.value }, () => {
                                var _a4;
                                return [
                                  createVNode(_sfc_main$B, mergeProps({
                                    size: __props.size,
                                    icon: __props.backIcon || unref(appConfig).ui.icons.arrowLeft,
                                    color: "neutral",
                                    variant: "link",
                                    "aria-label": unref(t)("commandPalette.back")
                                  }, typeof __props.back === "object" ? __props.back : {}, {
                                    "data-slot": "back",
                                    class: ui.value.back({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.back }),
                                    onClick: navigateBack
                                  }), null, 16, ["size", "icon", "aria-label", "class"])
                                ];
                              })
                            ];
                          }
                        }),
                        key: "0"
                      } : void 0,
                      __props.close || !!slots.close ? {
                        name: "trailing",
                        fn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                              var _a4;
                              if (__props.close) {
                                _push4(ssrRenderComponent(_sfc_main$B, mergeProps({
                                  size: __props.size,
                                  icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                  color: "neutral",
                                  variant: "ghost",
                                  "aria-label": unref(t)("commandPalette.close")
                                }, typeof __props.close === "object" ? __props.close : {}, {
                                  "data-slot": "close",
                                  class: ui.value.close({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.close }),
                                  onClick: ($event) => emits("update:open", false)
                                }), null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                var _a4;
                                return [
                                  __props.close ? (openBlock(), createBlock(_sfc_main$B, mergeProps({
                                    key: 0,
                                    size: __props.size,
                                    icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                    color: "neutral",
                                    variant: "ghost",
                                    "aria-label": unref(t)("commandPalette.close")
                                  }, typeof __props.close === "object" ? __props.close : {}, {
                                    "data-slot": "close",
                                    class: ui.value.close({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.close }),
                                    onClick: ($event) => emits("update:open", false)
                                  }), null, 16, ["size", "icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                                ];
                              })
                            ];
                          }
                        }),
                        key: "1"
                      } : void 0
                    ]), _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$k, mergeProps({
                        variant: "none",
                        size: __props.size
                      }, typeof props.input === "object" ? props.input : {}, {
                        placeholder: placeholder.value,
                        autofocus: __props.autofocus,
                        loading: __props.loading,
                        "loading-icon": __props.loadingIcon,
                        "trailing-icon": __props.trailingIcon,
                        icon: __props.icon || unref(appConfig).ui.icons.search,
                        "data-slot": "input",
                        class: ui.value.input({ class: (_c2 = unref(uiProp)) == null ? void 0 : _c2.input }),
                        onKeydown: withKeys(onBackspace, ["backspace"])
                      }), createSlots({ _: 2 }, [
                        ((_d2 = history.value) == null ? void 0 : _d2.length) && (__props.back || !!slots.back) ? {
                          name: "leading",
                          fn: withCtx(() => [
                            renderSlot(_ctx.$slots, "back", { ui: ui.value }, () => {
                              var _a4;
                              return [
                                createVNode(_sfc_main$B, mergeProps({
                                  size: __props.size,
                                  icon: __props.backIcon || unref(appConfig).ui.icons.arrowLeft,
                                  color: "neutral",
                                  variant: "link",
                                  "aria-label": unref(t)("commandPalette.back")
                                }, typeof __props.back === "object" ? __props.back : {}, {
                                  "data-slot": "back",
                                  class: ui.value.back({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.back }),
                                  onClick: navigateBack
                                }), null, 16, ["size", "icon", "aria-label", "class"])
                              ];
                            })
                          ]),
                          key: "0"
                        } : void 0,
                        __props.close || !!slots.close ? {
                          name: "trailing",
                          fn: withCtx(() => [
                            renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                              var _a4;
                              return [
                                __props.close ? (openBlock(), createBlock(_sfc_main$B, mergeProps({
                                  key: 0,
                                  size: __props.size,
                                  icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                  color: "neutral",
                                  variant: "ghost",
                                  "aria-label": unref(t)("commandPalette.close")
                                }, typeof __props.close === "object" ? __props.close : {}, {
                                  "data-slot": "close",
                                  class: ui.value.close({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.close }),
                                  onClick: ($event) => emits("update:open", false)
                                }), null, 16, ["size", "icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                              ];
                            })
                          ]),
                          key: "1"
                        } : void 0
                      ]), 1040, ["size", "placeholder", "autofocus", "loading", "loading-icon", "trailing-icon", "icon", "class"])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(ListboxContent_default), {
              "data-slot": "content",
              class: ui.value.content({ class: (_a2 = unref(uiProp)) == null ? void 0 : _a2.content })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2, _c2, _d2, _e, _f;
                if (_push3) {
                  if ((_a3 = filteredGroups.value) == null ? void 0 : _a3.length) {
                    _push3(`<div role="presentation" data-slot="viewport" class="${ssrRenderClass(ui.value.viewport({ class: (_b2 = unref(uiProp)) == null ? void 0 : _b2.viewport }))}"${_scopeId2}>`);
                    if (!!__props.virtualize) {
                      _push3(ssrRenderComponent(unref(ListboxVirtualizer_default), mergeProps({
                        options: filteredItems.value,
                        "text-content": (item2) => unref(get)(item2, props.labelKey)
                      }, virtualizerProps.value), {
                        default: withCtx(({ option: item, virtualItem }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(ReuseItemTemplate), {
                              item,
                              index: virtualItem.index
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(ReuseItemTemplate), {
                                item,
                                index: virtualItem.index
                              }, null, 8, ["item", "index"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!--[-->`);
                      ssrRenderList(filteredGroups.value, (group) => {
                        var _a4;
                        _push3(ssrRenderComponent(unref(ListboxGroup_default), {
                          key: `group-${group.id}`,
                          "data-slot": "group",
                          class: ui.value.group({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.group })
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            var _a5, _b3;
                            if (_push4) {
                              if (unref(get)(group, props.labelKey)) {
                                _push4(ssrRenderComponent(unref(ListboxGroupLabel_default), {
                                  "data-slot": "label",
                                  class: ui.value.label({ class: (_a5 = unref(uiProp)) == null ? void 0 : _a5.label })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`${ssrInterpolate(unref(get)(group, props.labelKey))}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`<!--[-->`);
                              ssrRenderList(group.items, (item, index) => {
                                _push4(ssrRenderComponent(unref(ReuseItemTemplate), {
                                  key: `group-${group.id}-${index}`,
                                  item,
                                  index,
                                  group
                                }, null, _parent4, _scopeId3));
                              });
                              _push4(`<!--]-->`);
                            } else {
                              return [
                                unref(get)(group, props.labelKey) ? (openBlock(), createBlock(unref(ListboxGroupLabel_default), {
                                  key: 0,
                                  "data-slot": "label",
                                  class: ui.value.label({ class: (_b3 = unref(uiProp)) == null ? void 0 : _b3.label })
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"])) : createCommentVNode("", true),
                                (openBlock(true), createBlock(Fragment, null, renderList(group.items, (item, index) => {
                                  return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                    key: `group-${group.id}-${index}`,
                                    item,
                                    index,
                                    group
                                  }, null, 8, ["item", "index", "group"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<div data-slot="empty" class="${ssrRenderClass(ui.value.empty({ class: (_c2 = unref(uiProp)) == null ? void 0 : _c2.empty }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => {
                      _push3(`${ssrInterpolate(searchTerm.value ? unref(t)("commandPalette.noMatch", { searchTerm: searchTerm.value }) : unref(t)("commandPalette.noData"))}`);
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    ((_d2 = filteredGroups.value) == null ? void 0 : _d2.length) ? (openBlock(), createBlock("div", {
                      key: 0,
                      role: "presentation",
                      "data-slot": "viewport",
                      class: ui.value.viewport({ class: (_e = unref(uiProp)) == null ? void 0 : _e.viewport })
                    }, [
                      !!__props.virtualize ? (openBlock(), createBlock(unref(ListboxVirtualizer_default), mergeProps({
                        key: 0,
                        options: filteredItems.value,
                        "text-content": (item2) => unref(get)(item2, props.labelKey)
                      }, virtualizerProps.value), {
                        default: withCtx(({ option: item, virtualItem }) => [
                          createVNode(unref(ReuseItemTemplate), {
                            item,
                            index: virtualItem.index
                          }, null, 8, ["item", "index"])
                        ]),
                        _: 1
                      }, 16, ["options", "text-content"])) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(filteredGroups.value, (group) => {
                        var _a4;
                        return openBlock(), createBlock(unref(ListboxGroup_default), {
                          key: `group-${group.id}`,
                          "data-slot": "group",
                          class: ui.value.group({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.group })
                        }, {
                          default: withCtx(() => {
                            var _a5;
                            return [
                              unref(get)(group, props.labelKey) ? (openBlock(), createBlock(unref(ListboxGroupLabel_default), {
                                key: 0,
                                "data-slot": "label",
                                class: ui.value.label({ class: (_a5 = unref(uiProp)) == null ? void 0 : _a5.label })
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(group.items, (item, index) => {
                                return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                  key: `group-${group.id}-${index}`,
                                  item,
                                  index,
                                  group
                                }, null, 8, ["item", "index", "group"]);
                              }), 128))
                            ];
                          }),
                          _: 2
                        }, 1032, ["class"]);
                      }), 128))
                    ], 2)) : (openBlock(), createBlock("div", {
                      key: 1,
                      "data-slot": "empty",
                      class: ui.value.empty({ class: (_f = unref(uiProp)) == null ? void 0 : _f.empty })
                    }, [
                      renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                        createTextVNode(toDisplayString(searchTerm.value ? unref(t)("commandPalette.noMatch", { searchTerm: searchTerm.value }) : unref(t)("commandPalette.noData")), 1)
                      ])
                    ], 2))
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (!!slots.footer) {
              _push2(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: (_b = unref(uiProp)) == null ? void 0 : _b.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", { ui: ui.value }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.input ? (openBlock(), createBlock(unref(ListboxFilter_default), {
                key: 0,
                modelValue: searchTerm.value,
                "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                "as-child": ""
              }, {
                default: withCtx(() => {
                  var _a3, _b2;
                  return [
                    createVNode(_sfc_main$k, mergeProps({
                      variant: "none",
                      size: __props.size
                    }, typeof props.input === "object" ? props.input : {}, {
                      placeholder: placeholder.value,
                      autofocus: __props.autofocus,
                      loading: __props.loading,
                      "loading-icon": __props.loadingIcon,
                      "trailing-icon": __props.trailingIcon,
                      icon: __props.icon || unref(appConfig).ui.icons.search,
                      "data-slot": "input",
                      class: ui.value.input({ class: (_a3 = unref(uiProp)) == null ? void 0 : _a3.input }),
                      onKeydown: withKeys(onBackspace, ["backspace"])
                    }), createSlots({ _: 2 }, [
                      ((_b2 = history.value) == null ? void 0 : _b2.length) && (__props.back || !!slots.back) ? {
                        name: "leading",
                        fn: withCtx(() => [
                          renderSlot(_ctx.$slots, "back", { ui: ui.value }, () => {
                            var _a4;
                            return [
                              createVNode(_sfc_main$B, mergeProps({
                                size: __props.size,
                                icon: __props.backIcon || unref(appConfig).ui.icons.arrowLeft,
                                color: "neutral",
                                variant: "link",
                                "aria-label": unref(t)("commandPalette.back")
                              }, typeof __props.back === "object" ? __props.back : {}, {
                                "data-slot": "back",
                                class: ui.value.back({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.back }),
                                onClick: navigateBack
                              }), null, 16, ["size", "icon", "aria-label", "class"])
                            ];
                          })
                        ]),
                        key: "0"
                      } : void 0,
                      __props.close || !!slots.close ? {
                        name: "trailing",
                        fn: withCtx(() => [
                          renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                            var _a4;
                            return [
                              __props.close ? (openBlock(), createBlock(_sfc_main$B, mergeProps({
                                key: 0,
                                size: __props.size,
                                icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                color: "neutral",
                                variant: "ghost",
                                "aria-label": unref(t)("commandPalette.close")
                              }, typeof __props.close === "object" ? __props.close : {}, {
                                "data-slot": "close",
                                class: ui.value.close({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.close }),
                                onClick: ($event) => emits("update:open", false)
                              }), null, 16, ["size", "icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                            ];
                          })
                        ]),
                        key: "1"
                      } : void 0
                    ]), 1040, ["size", "placeholder", "autofocus", "loading", "loading-icon", "trailing-icon", "icon", "class"])
                  ];
                }),
                _: 3
              }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
              createVNode(unref(ListboxContent_default), {
                "data-slot": "content",
                class: ui.value.content({ class: (_c = unref(uiProp)) == null ? void 0 : _c.content })
              }, {
                default: withCtx(() => {
                  var _a3, _b2, _c2;
                  return [
                    ((_a3 = filteredGroups.value) == null ? void 0 : _a3.length) ? (openBlock(), createBlock("div", {
                      key: 0,
                      role: "presentation",
                      "data-slot": "viewport",
                      class: ui.value.viewport({ class: (_b2 = unref(uiProp)) == null ? void 0 : _b2.viewport })
                    }, [
                      !!__props.virtualize ? (openBlock(), createBlock(unref(ListboxVirtualizer_default), mergeProps({
                        key: 0,
                        options: filteredItems.value,
                        "text-content": (item2) => unref(get)(item2, props.labelKey)
                      }, virtualizerProps.value), {
                        default: withCtx(({ option: item, virtualItem }) => [
                          createVNode(unref(ReuseItemTemplate), {
                            item,
                            index: virtualItem.index
                          }, null, 8, ["item", "index"])
                        ]),
                        _: 1
                      }, 16, ["options", "text-content"])) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(filteredGroups.value, (group) => {
                        var _a4;
                        return openBlock(), createBlock(unref(ListboxGroup_default), {
                          key: `group-${group.id}`,
                          "data-slot": "group",
                          class: ui.value.group({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.group })
                        }, {
                          default: withCtx(() => {
                            var _a5;
                            return [
                              unref(get)(group, props.labelKey) ? (openBlock(), createBlock(unref(ListboxGroupLabel_default), {
                                key: 0,
                                "data-slot": "label",
                                class: ui.value.label({ class: (_a5 = unref(uiProp)) == null ? void 0 : _a5.label })
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(group.items, (item, index) => {
                                return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                  key: `group-${group.id}-${index}`,
                                  item,
                                  index,
                                  group
                                }, null, 8, ["item", "index", "group"]);
                              }), 128))
                            ];
                          }),
                          _: 2
                        }, 1032, ["class"]);
                      }), 128))
                    ], 2)) : (openBlock(), createBlock("div", {
                      key: 1,
                      "data-slot": "empty",
                      class: ui.value.empty({ class: (_c2 = unref(uiProp)) == null ? void 0 : _c2.empty })
                    }, [
                      renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                        createTextVNode(toDisplayString(searchTerm.value ? unref(t)("commandPalette.noMatch", { searchTerm: searchTerm.value }) : unref(t)("commandPalette.noData")), 1)
                      ])
                    ], 2))
                  ];
                }),
                _: 3
              }, 8, ["class"]),
              !!slots.footer ? (openBlock(), createBlock("div", {
                key: 1,
                "data-slot": "footer",
                class: ui.value.footer({ class: (_d = unref(uiProp)) == null ? void 0 : _d.footer })
              }, [
                renderSlot(_ctx.$slots, "footer", { ui: ui.value })
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const chainedShortcutRegex = /^[^-]+.*-.*[^-]+$/;
const combinedShortcutRegex = /^[^_]+.*_.*[^_]+$/;
const shiftableKeys = ["arrowleft", "arrowright", "arrowup", "arrowright", "tab", "escape", "enter", "backspace"];
function convertKeyToCode(key) {
  if (/^[a-z]$/i.test(key)) {
    return `Key${key.toUpperCase()}`;
  }
  if (/^\d$/.test(key)) {
    return `Digit${key}`;
  }
  if (/^f\d+$/i.test(key)) {
    return key.toUpperCase();
  }
  const specialKeys = {
    space: "Space",
    enter: "Enter",
    escape: "Escape",
    tab: "Tab",
    backspace: "Backspace",
    delete: "Delete",
    arrowup: "ArrowUp",
    arrowdown: "ArrowDown",
    arrowleft: "ArrowLeft",
    arrowright: "ArrowRight"
  };
  return specialKeys[key.toLowerCase()] || key;
}
function defineShortcuts(config, options = {}) {
  var _a, _b;
  const chainedInputs = ref([]);
  const clearChainedInput = () => {
    chainedInputs.value.splice(0, chainedInputs.value.length);
  };
  const debouncedClearChainedInput = useDebounceFn(clearChainedInput, (_a = options.chainDelay) != null ? _a : 800);
  const { macOS } = useKbd();
  const activeElement = useActiveElement();
  const layoutIndependent = (_b = options.layoutIndependent) != null ? _b : false;
  const shiftableCodes = shiftableKeys.map((k) => convertKeyToCode(k));
  const onKeyDown = (e) => {
    if (!e.key) {
      return;
    }
    const alphabetKey = layoutIndependent ? /^Key[A-Z]$/i.test(e.code) : /^[a-z]{1}$/i.test(e.key);
    const shiftableKey = layoutIndependent ? shiftableCodes.includes(e.code) : shiftableKeys.includes(e.key.toLowerCase());
    let chainedKey;
    chainedInputs.value.push(layoutIndependent ? e.code : e.key);
    if (chainedInputs.value.length >= 2) {
      chainedKey = chainedInputs.value.slice(-2).join("-");
      for (const shortcut of shortcuts.value.filter((s) => s.chained)) {
        if (shortcut.key !== chainedKey) {
          continue;
        }
        if (shortcut.enabled) {
          e.preventDefault();
          shortcut.handler(e);
        }
        clearChainedInput();
        return;
      }
    }
    for (const shortcut of shortcuts.value.filter((s) => !s.chained)) {
      if (layoutIndependent) {
        if (e.code !== shortcut.key) {
          continue;
        }
      } else {
        if (e.key.toLowerCase() !== shortcut.key) {
          continue;
        }
      }
      if (e.metaKey !== shortcut.metaKey) {
        continue;
      }
      if (e.ctrlKey !== shortcut.ctrlKey) {
        continue;
      }
      if (e.altKey !== shortcut.altKey) {
        continue;
      }
      if ((alphabetKey || shiftableKey || shortcut.shiftKey || e.shiftKey && (e.metaKey || e.ctrlKey)) && e.shiftKey !== shortcut.shiftKey) {
        continue;
      }
      if (shortcut.enabled) {
        e.preventDefault();
        shortcut.handler(e);
      }
      clearChainedInput();
      return;
    }
    debouncedClearChainedInput();
  };
  const usingInput = computed(() => {
    var _a2, _b2, _c;
    const tagName = (_a2 = activeElement.value) == null ? void 0 : _a2.tagName;
    const contentEditable = (_b2 = activeElement.value) == null ? void 0 : _b2.contentEditable;
    const usingInput2 = !!(tagName === "INPUT" || tagName === "TEXTAREA" || contentEditable === "true" || contentEditable === "plaintext-only");
    if (usingInput2) {
      return ((_c = activeElement.value) == null ? void 0 : _c.name) || true;
    }
    return false;
  });
  const shortcuts = computed(() => {
    return Object.entries(toValue(config)).map(([key, shortcutConfig]) => {
      var _a2, _b2;
      if (!shortcutConfig) {
        return null;
      }
      let shortcut;
      if (key.includes("-") && key !== "-" && !key.includes("_") && !((_a2 = key.match(chainedShortcutRegex)) == null ? void 0 : _a2.length)) {
        console.trace(`[Shortcut] Invalid key: "${key}"`);
      }
      if (key.includes("_") && key !== "_" && !((_b2 = key.match(combinedShortcutRegex)) == null ? void 0 : _b2.length)) {
        console.trace(`[Shortcut] Invalid key: "${key}"`);
      }
      const chained = key.includes("-") && key !== "-" && !key.includes("_");
      if (chained) {
        if (layoutIndependent) {
          const parts = key.split("-").map((p) => convertKeyToCode(p));
          shortcut = {
            key: parts.join("-"),
            metaKey: false,
            ctrlKey: false,
            shiftKey: false,
            altKey: false
          };
        } else {
          shortcut = {
            key: key.toLowerCase(),
            metaKey: false,
            ctrlKey: false,
            shiftKey: false,
            altKey: false
          };
        }
      } else {
        const keySplit = key.toLowerCase().split("_").map((k) => k);
        let baseKey = keySplit.filter((k) => !["meta", "command", "ctrl", "shift", "alt", "option"].includes(k)).join("_");
        if (layoutIndependent) {
          baseKey = convertKeyToCode(baseKey);
        }
        shortcut = {
          key: baseKey,
          metaKey: keySplit.includes("meta") || keySplit.includes("command"),
          ctrlKey: keySplit.includes("ctrl"),
          shiftKey: keySplit.includes("shift"),
          altKey: keySplit.includes("alt") || keySplit.includes("option")
        };
      }
      shortcut.chained = chained;
      if (!macOS.value && shortcut.metaKey && !shortcut.ctrlKey) {
        shortcut.metaKey = false;
        shortcut.ctrlKey = true;
      }
      if (typeof shortcutConfig === "function") {
        shortcut.handler = shortcutConfig;
      } else if (typeof shortcutConfig === "object") {
        shortcut = { ...shortcut, handler: shortcutConfig.handler };
      }
      if (!shortcut.handler) {
        console.trace("[Shortcut] Invalid value");
        return null;
      }
      let enabled = true;
      if (!shortcutConfig.usingInput) {
        enabled = !usingInput.value;
      } else if (typeof shortcutConfig.usingInput === "string") {
        enabled = usingInput.value === shortcutConfig.usingInput;
      }
      shortcut.enabled = enabled;
      return shortcut;
    }).filter(Boolean);
  });
  return useEventListener$1("keydown", onKeyDown);
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RouteSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    const selected = ref(null);
    const router = useRouter();
    const { t } = useI18n();
    const { extensionPages } = useAdminExtensions();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    defineShortcuts({
      meta_k: () => {
        isOpen.value = true;
      }
    });
    const routes = computed(() => {
      const publicRoutes = [
        { id: "home", label: t("site.nav.home"), icon: "ph:house", to: "/" },
        { id: "products", label: t("site.nav.products"), icon: "ph:package", to: "/products" },
        {
          id: "pricing",
          label: t("site.nav.pricing"),
          icon: "ph:currency-circle-dollar",
          to: "/pricing"
        },
        { id: "about", label: t("site.nav.about"), icon: "ph:info", to: "/about" },
        { id: "contact", label: t("site.nav.contact"), icon: "ph:envelope", to: "/contact" }
      ];
      const adminRoutes = [
        { id: "admin-dashboard", label: t("admin.nav.dashboard"), icon: "ph:squares-four", to: "/admin/dashboard", permission: "dashboard" },
        { id: "admin-orders", label: t("admin.nav.orders"), icon: "ph:shopping-cart", to: "/admin/orders", permission: "orders" },
        { id: "admin-topups", label: t("admin.nav.topups"), icon: "ph:wallet", to: "/admin/topups", permission: "orders" },
        { id: "admin-stats", label: t("admin.nav.stats"), icon: "ph:chart-bar", to: "/admin/stats", permission: "stats" },
        { id: "admin-products", label: t("admin.nav.products"), icon: "ph:package", to: "/admin/products", permission: "products" },
        { id: "admin-customers", label: t("admin.nav.customers"), icon: "ph:users", to: "/admin/customers", permission: "customers" },
        { id: "admin-posts", label: t("admin.nav.blogs"), icon: "ph:newspaper-duotone", to: "/admin/posts", permission: "posts" },
        { id: "admin-cards", label: t("admin.nav.cards"), icon: "ph:barcode", to: "/admin/cards", permission: "cards" },
        { id: "admin-subscriptions", label: t("admin.nav.subscriptions"), icon: "ph:calendar-check", to: "/admin/subscriptions", permission: "subscriptions" },
        { id: "admin-promo", label: t("admin.nav.promo"), icon: "ph:megaphone-simple", to: "/admin/promo", permission: "promo" },
        { id: "admin-payments", label: t("admin.nav.payments"), icon: "ph:credit-card", to: "/admin/payments", permission: "payments" },
        { id: "admin-manages", label: t("admin.nav.manages"), icon: "ph:users-three", to: "/admin/settings/manages", permission: "admins" },
        { id: "admin-logs", label: t("admin.nav.logs"), icon: "ph:log", to: "/admin/logs", permission: "logs" },
        { id: "admin-themes", label: t("admin.nav.themes"), icon: "ph:sparkle-duotone", to: "/admin/settings/themes", permission: "settings" },
        { id: "admin-settings", label: t("admin.nav.general"), icon: "ph:gear", to: "/admin/settings", permission: "settings" }
      ].filter((route) => hasAdminPerm(route.permission));
      const themeRoutes = extensionPages.value.filter((page) => hasAdminPerm(page.permissionCode || themeExtensionPermissionCode(page.extensionKey, page.key))).map((page) => ({
        id: `theme-extension-${page.key}`,
        label: page.title,
        icon: page.icon,
        to: page.route
      }));
      return [...publicRoutes, ...adminRoutes, ...themeRoutes];
    });
    const groups = computed(() => [
      {
        id: "routes",
        label: t("routeSearch.groupLabel"),
        items: routes.value
      }
    ]);
    watch(selected, (item) => {
      if (item && item.to) {
        isOpen.value = false;
        router.push(item.to);
        selected.value = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$B;
      const _component_UIcon = _sfc_main$G;
      const _component_UKbd = _sfc_main$9;
      const _component_UModal = _sfc_main$s;
      const _component_UCommandPalette = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "ghost",
        class: "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
        onClick: ($event) => isOpen.value = true
      }, {
        leading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:magnifying-glass",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:magnifying-glass",
                class: "w-5 h-5"
              })
            ];
          }
        }),
        trailing: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hidden lg:flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UKbd, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u2318`);
                } else {
                  return [
                    createTextVNode("\u2318")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UKbd, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`K`);
                } else {
                  return [
                    createTextVNode("K")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "hidden lg:flex items-center gap-1" }, [
                createVNode(_component_UKbd, null, {
                  default: withCtx(() => [
                    createTextVNode("\u2318")
                  ]),
                  _: 1
                }),
                createVNode(_component_UKbd, null, {
                  default: withCtx(() => [
                    createTextVNode("K")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="hidden md:inline-block text-sm font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("routeSearch.searchRoutes"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "hidden md:inline-block text-sm font-medium" }, toDisplayString(_ctx.$t("routeSearch.searchRoutes")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCommandPalette, {
              modelValue: selected.value,
              "onUpdate:modelValue": ($event) => selected.value = $event,
              groups: groups.value,
              autoselect: false,
              placeholder: _ctx.$t("routeSearch.placeholder"),
              class: "h-80 bg-white dark:bg-[#121214] ring-1 ring-gray-200 dark:ring-gray-800"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCommandPalette, {
                modelValue: selected.value,
                "onUpdate:modelValue": ($event) => selected.value = $event,
                groups: groups.value,
                autoselect: false,
                placeholder: _ctx.$t("routeSearch.placeholder"),
                class: "h-80 bg-white dark:bg-[#121214] ring-1 ring-gray-200 dark:ring-gray-800"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "groups", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RouteSearch.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2$1 = Object.assign(_sfc_main$5, { __name: "RouteSearch" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "LanguageSwitcher",
  __ssrInlineRender: true,
  props: {
    currentLocale: {},
    locales: { default: () => [] },
    showText: { type: Boolean }
  },
  emits: ["switch"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const LOCALE_FLAGS = {
      en: "\u{1F1FA}\u{1F1F8}",
      zh: "\u{1F1E8}\u{1F1F3}",
      ru: "\u{1F1F7}\u{1F1FA}"
    };
    const getFlag = (code) => {
      var _a;
      return (_a = LOCALE_FLAGS[code]) != null ? _a : "\u{1F310}";
    };
    computed(() => {
      const found = (props.locales || []).find((l) => l.code === props.currentLocale);
      return found && found.name ? found.name : props.currentLocale;
    });
    computed(() => {
      return [
        (props.locales || []).map((loc) => ({
          label: loc.name || loc.code,
          flag: getFlag(loc.code),
          checked: props.currentLocale === loc.code,
          onSelect: () => emit("switch", loc.code),
          ...props.currentLocale === loc.code ? { class: "font-semibold text-gray-900 dark:text-white" } : {}
        }))
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2$2;
      const _component_USkeleton = _sfc_main$d;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-3 py-2 flex items-center gap-2 rounded-lg border border-transparent"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_USkeleton, { class: "h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-800/50" }, null, _parent2, _scopeId));
            if (__props.showText) {
              _push2(ssrRenderComponent(_component_USkeleton, { class: "h-4 w-16 bg-gray-200 dark:bg-gray-800/50 rounded" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "px-3 py-2 flex items-center gap-2 rounded-lg border border-transparent" }, [
                createVNode(_component_USkeleton, { class: "h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-800/50" }),
                __props.showText ? (openBlock(), createBlock(_component_USkeleton, {
                  key: 0,
                  class: "h-4 w-16 bg-gray-200 dark:bg-gray-800/50 rounded"
                })) : createCommentVNode("", true)
              ])
            ];
          }
        })
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LanguageSwitcher.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$4, { __name: "LanguageSwitcher" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AdminHeader",
  __ssrInlineRender: true,
  emits: ["open-mobile-menu"],
  setup(__props) {
    const { getSetting } = useSettings();
    const { getLocalizedSetting } = useLocalizedSettings();
    const { locale, locales, t } = useI18n();
    const colorMode = useColorMode();
    const { resetAdmin } = useAdminSession();
    computed(() => colorMode.value === "dark");
    const switchLocale = async (newLocale) => {
      locale.value = newLocale;
    };
    const logout = async () => {
      try {
        await $fetch("/api/admin/logout", { method: "POST" });
      } catch (e) {
        console.error("[admin-logout] request failed:", e);
      }
      resetAdmin();
      await navigateTo("/admin/login");
    };
    computed(() => [
      [
        {
          label: t("admin.nav.profile"),
          icon: "ph:user",
          onSelect: () => navigateTo("/admin/profile")
        }
      ],
      [
        {
          label: t("admin.header.logout"),
          icon: "ph:sign-out",
          onSelect: logout
        }
      ]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_SiteLogo = __nuxt_component_1$1;
      const _component_RouteSearch = __nuxt_component_2$1;
      const _component_LanguageSwitcher = __nuxt_component_3;
      const _component_UButton = _sfc_main$B;
      const _component_ClientOnly = __nuxt_component_2$2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur dark:border-gray-800/50 dark:bg-[#09090b]/80" }, _attrs))}><div class="w-full px-4 md:px-6 h-16 flex items-center justify-between"><div class="flex items-center gap-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "group flex items-center gap-2.5 mr-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(getSetting)("site_logo")) {
              _push2(`<div class="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SiteLogo, {
                "logo-data": unref(getSetting)("site_logo"),
                alt: unref(getLocalizedSetting)("site_name")
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="relative inline-flex items-center font-bold tracking-tight text-lg sm:text-xl"${_scopeId}><span class="absolute -inset-x-1.5 -inset-y-0.5 rounded-lg bg-gradient-to-r from-purple-500/15 via-indigo-500/20 to-cyan-500/15 blur-sm opacity-0 group-hover:opacity-100 dark:opacity-40 dark:animate-pulse transition-opacity duration-700 pointer-events-none"${_scopeId}></span><span class="relative bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-indigo-200/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-300"${_scopeId}>${ssrInterpolate(unref(getLocalizedSetting)("site_name"))}</span></span>`);
          } else {
            return [
              unref(getSetting)("site_logo") ? (openBlock(), createBlock("div", {
                key: 0,
                class: "w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
              }, [
                createVNode(_component_SiteLogo, {
                  "logo-data": unref(getSetting)("site_logo"),
                  alt: unref(getLocalizedSetting)("site_name")
                }, null, 8, ["logo-data", "alt"])
              ])) : createCommentVNode("", true),
              createVNode("span", { class: "relative inline-flex items-center font-bold tracking-tight text-lg sm:text-xl" }, [
                createVNode("span", { class: "absolute -inset-x-1.5 -inset-y-0.5 rounded-lg bg-gradient-to-r from-purple-500/15 via-indigo-500/20 to-cyan-500/15 blur-sm opacity-0 group-hover:opacity-100 dark:opacity-40 dark:animate-pulse transition-opacity duration-700 pointer-events-none" }),
                createVNode("span", { class: "relative bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-indigo-200/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-300" }, toDisplayString(unref(getLocalizedSetting)("site_name")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex items-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">`);
      _push(ssrRenderComponent(_component_RouteSearch, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://apay.run/docs",
        target: "_blank",
        class: "transition-colors hover:text-purple-500 dark:hover:text-purple-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("admin.nav.docs"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("admin.nav.docs")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div><div class="flex items-center gap-4"><div class="hidden md:flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_LanguageSwitcher, {
        "current-locale": unref(locale),
        locales: unref(locales),
        "show-text": true,
        onSwitch: switchLocale
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        variant: "outline",
        class: "rounded-full font-medium px-6 py-1.5 hidden md:flex shadow-[0_0_15px_rgba(168,85,247,0.3)]",
        to: "/",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("admin.header.viewStore"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("admin.header.viewStore")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="hidden md:flex">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "ghost",
        icon: "ph:list-bold",
        class: "md:hidden",
        onClick: ($event) => _ctx.$emit("open-mobile-menu")
      }, null, _parent));
      _push(`</div></div></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$3, { __name: "AdminHeader" });
let loadProductTypesPromise = null;
const useAdminNav = () => {
  const { t } = useI18n();
  const hasKeyProducts = useState("admin-nav-has-key-products", () => false);
  const hasSubscriptionProducts = useState("admin-nav-has-sub-products", () => false);
  const productTypesLoaded = useState("admin-nav-product-types-loaded", () => false);
  const { admin, hasPerm, loadAdmin } = useAdminPermissions();
  const hasPermissionFor = (perm) => {
    if (!perm) return true;
    return hasPerm(perm);
  };
  const loadProductTypes = async (force = false) => {
    if (productTypesLoaded.value && !force) return;
    if (loadProductTypesPromise && !force) return loadProductTypesPromise;
    loadProductTypesPromise = (async () => {
      try {
        const typesP = (async () => {
          const res = await $fetch("/api/products/types");
          const types = res.data || [];
          hasKeyProducts.value = types.includes("key");
          hasSubscriptionProducts.value = types.includes("subscription");
          productTypesLoaded.value = true;
        })();
        await Promise.all([typesP, loadAdmin()]);
      } catch (e) {
        await loadAdmin();
      } finally {
        loadProductTypesPromise = null;
      }
    })();
    return loadProductTypesPromise;
  };
  const makeItem = (item) => {
    const existing = item.conditional;
    const children = item.children ? item.children.map(makeItem) : void 0;
    if (item.permission) {
      return {
        ...item,
        children,
        conditional: () => hasPermissionFor(item.permission) && (!existing || existing())
      };
    }
    return {
      ...item,
      children
    };
  };
  const storeSectionBase = {
    titleKey: "admin.nav.store",
    items: [
      { to: "/admin/dashboard", icon: "ph:squares-four", labelKey: "admin.nav.dashboard", exact: true, permission: "dashboard" },
      { to: "/admin/stats", icon: "ph:chart-bar", labelKey: "admin.nav.stats", permission: "stats" },
      { to: "/admin/orders", icon: "ph:shopping-cart", labelKey: "admin.nav.orders", permission: "orders" },
      // 充值记录页与充值相关 API 都挂在 orders 权限下(见 server/utils/adminPermissions.ts
      // 的 apiPrefixes: ['orders', 'topups']),侧栏漏这一项等于页面建好了没人进得去。
      { to: "/admin/topups", icon: "ph:wallet", labelKey: "admin.nav.topups", permission: "orders" },
      { to: "/admin/products", icon: "ph:package", labelKey: "admin.nav.products", permission: "products" },
      { to: "/admin/customers", icon: "ph:users", labelKey: "admin.nav.customers", permission: "customers" },
      { to: "/admin/tickets", icon: "ph:ticket", labelKey: "admin.nav.tickets", permission: "tickets" },
      { to: "/admin/posts", icon: "ph:newspaper-duotone", labelKey: "admin.nav.blogs", permission: "posts" }
    ]
  };
  const storeSection = {
    ...storeSectionBase,
    items: storeSectionBase.items.map(makeItem)
  };
  const configSectionBase = {
    titleKey: "admin.nav.configs",
    items: [
      { to: "/admin/promo", icon: "ph:megaphone-simple", labelKey: "admin.nav.promo", permission: "promo" },
      { to: "/admin/payments", icon: "ph:credit-card", labelKey: "admin.nav.payments", permission: "payments" },
      { to: "/admin/logs", icon: "ph:log", labelKey: "admin.nav.logs", permission: "logs" },
      { to: "/admin/settings", icon: "ph:gear", labelKey: "admin.nav.settings", permission: "settings" }
    ]
  };
  const configSection = {
    ...configSectionBase,
    items: configSectionBase.items.map(makeItem)
  };
  const resolveLabel = (item) => {
    if (item.labelKey) {
      try {
        return t(item.labelKey);
      } catch (e) {
        return item.labelFallback || item.labelKey;
      }
    }
    return item.labelFallback || "";
  };
  const resolveSectionTitle = (section) => {
    if (section.titleKey) {
      try {
        return t(section.titleKey);
      } catch (e) {
        return section.titleFallback || section.titleKey;
      }
    }
    return section.titleFallback || "";
  };
  return {
    storeSection,
    configSection,
    loadProductTypes,
    hasKeyProducts,
    hasSubscriptionProducts,
    resolveLabel,
    resolveSectionTitle,
    adminNavAdmin: admin,
    hasPermissionFor
  };
};
const useAdminNavStyle = () => {
  const adminSectionTitleClass = "mb-3 px-3 text-[11px] font-semibold tracking-wider text-gray-500 dark:text-gray-500";
  const adminMobileNavItemClass = "block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-[#121214] dark:hover:text-white";
  const adminDesktopNavItemClass = "block rounded-md px-3 py-2 text-sm font-medium transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-[#121214] dark:hover:text-white";
  const adminNavActiveClass = "bg-gray-100 text-gray-900 dark:bg-[#121214] dark:text-white";
  return {
    adminSectionTitleClass,
    adminMobileNavItemClass,
    adminDesktopNavItemClass,
    adminNavActiveClass
  };
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AdminMobileMenu",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { getSetting } = useSettings();
    const { getLocalizedSetting } = useLocalizedSettings();
    const { extensionSections } = useAdminExtensions();
    const { storeSection, configSection, resolveLabel, resolveSectionTitle, hasPermissionFor } = useAdminNav();
    const { adminSectionTitleClass, adminMobileNavItemClass } = useAdminNavStyle();
    const colorMode = useColorMode();
    const expandedGroups = ref({});
    const isGroupExpanded = (groupKey) => {
      return expandedGroups.value[groupKey] !== false;
    };
    const toggleGroup = (groupKey) => {
      expandedGroups.value[groupKey] = !isGroupExpanded(groupKey);
    };
    const storeSectionItems = computed(() => {
      return storeSection.items.filter((item) => !item.conditional || item.conditional()).map((item) => {
        if (item.children && item.children.length) {
          const validChildren = item.children.filter((child) => !child.conditional || child.conditional()).map((child) => ({
            type: "link",
            to: child.to,
            icon: child.icon,
            label: resolveLabel(child)
          }));
          if (validChildren.length > 1) {
            return {
              type: "group",
              key: `store-${item.to}`,
              title: resolveLabel(item),
              icon: item.icon,
              order: 0,
              children: validChildren
            };
          }
        }
        return {
          type: "link",
          to: item.to,
          icon: item.icon,
          label: resolveLabel(item)
        };
      });
    });
    const allowedExtensionSections = computed(
      () => extensionSections.value.map((section) => {
        const allowedPages = section.pages.filter(
          (page) => hasPermissionFor(page.permissionCode || themeExtensionPermissionCode(page.extensionKey, page.key))
        );
        if (!allowedPages.length) return null;
        const groupsMap = /* @__PURE__ */ new Map();
        const directItems = [];
        allowedPages.forEach((page) => {
          var _a, _b;
          const entry = {
            type: "link",
            to: page.route,
            icon: page.icon,
            label: page.title,
            order: (_a = page.order) != null ? _a : 99
          };
          if (page.group) {
            const groupKey = `group-${page.group}`;
            const existing = groupsMap.get(groupKey) || {
              title: page.group,
              icon: page.groupIcon || "ph:folder-bold",
              order: (_b = page.groupOrder) != null ? _b : 99,
              children: []
            };
            existing.children.push(entry);
            groupsMap.set(groupKey, existing);
          } else {
            directItems.push(entry);
          }
        });
        const items = [...directItems];
        for (const [key, group] of groupsMap.entries()) {
          items.push({
            type: "group",
            key,
            title: group.title,
            icon: group.icon,
            order: group.order,
            children: group.children
          });
        }
        items.sort((a, b) => {
          var _a, _b;
          const orderA = (_a = a.order) != null ? _a : 0;
          const orderB = (_b = b.order) != null ? _b : 0;
          return orderA - orderB;
        });
        return {
          ...section,
          items
        };
      }).filter(Boolean)
    );
    const innerOpen = computed({
      get: () => props.open,
      set: (val) => emit("update:open", val)
    });
    const isDark = computed(() => colorMode.value === "dark");
    const toggleColorMode = () => {
      colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    };
    const closeMenu = () => {
      innerOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USlideover = _sfc_main$7;
      const _component_SiteLogo = __nuxt_component_1$1;
      const _component_ClientOnly = __nuxt_component_2$2;
      const _component_UButton = _sfc_main$B;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_Icon = __nuxt_component_0$1;
      const _component_UIcon = _sfc_main$G;
      _push(ssrRenderComponent(_component_USlideover, mergeProps({
        open: unref(innerOpen),
        "onUpdate:open": ($event) => isRef(innerOpen) ? innerOpen.value = $event : null,
        side: "left"
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-full flex-col bg-white p-6 text-gray-900 dark:bg-[#09090b] dark:text-gray-100"${_scopeId}><div class="flex items-center justify-between mb-8"${_scopeId}><div class="flex items-center gap-2.5"${_scopeId}>`);
            if (unref(getSetting)("site_logo")) {
              _push2(`<div class="w-8 h-8 flex items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SiteLogo, {
                "logo-data": unref(getSetting)("site_logo"),
                alt: unref(getLocalizedSetting)("site_name")
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="relative inline-flex items-center font-bold tracking-tight text-lg sm:text-xl"${_scopeId}><span class="absolute -inset-x-1.5 -inset-y-0.5 rounded-lg bg-gradient-to-r from-purple-500/15 via-indigo-500/20 to-cyan-500/15 blur-sm dark:opacity-40 dark:animate-pulse pointer-events-none"${_scopeId}></span><span class="relative bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-indigo-200/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"${_scopeId}>${ssrInterpolate(unref(getLocalizedSetting)("site_name"))}</span></span></div><div class="flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x-bold",
              onClick: closeMenu
            }, null, _parent2, _scopeId));
            _push2(`</div></div><nav class="flex flex-col gap-4"${_scopeId}><div class="space-y-1"${_scopeId}><h3 class="${ssrRenderClass(unref(adminSectionTitleClass))}"${_scopeId}>${ssrInterpolate(unref(resolveSectionTitle)(unref(storeSection)))}</h3><!--[-->`);
            ssrRenderList(unref(storeSectionItems), (item) => {
              _push2(`<!--[-->`);
              if (item.type === "link") {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: item.to,
                  class: unref(adminMobileNavItemClass),
                  onClick: closeMenu
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: item.icon,
                        class: "w-5 h-5"
                      }, null, _parent3, _scopeId2));
                      _push3(` ${ssrInterpolate(item.label)}</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_Icon, {
                            name: item.icon,
                            class: "w-5 h-5"
                          }, null, 8, ["name"]),
                          createTextVNode(" " + toDisplayString(item.label), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<div class="space-y-1"${_scopeId}><button type="button" class="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/[0.04]"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: item.icon,
                  class: "w-5 h-5 text-purple-500"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(item.title)}</span></div>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:caret-down-bold",
                  class: ["w-4 h-4 transition-transform duration-200 opacity-60", isGroupExpanded(item.key) ? "rotate-0" : "-rotate-90"]
                }, null, _parent2, _scopeId));
                _push2(`</button><div class="ml-5 pl-2.5 space-y-1 border-l border-gray-200 dark:border-gray-800" style="${ssrRenderStyle(isGroupExpanded(item.key) ? null : { display: "none" })}"${_scopeId}><!--[-->`);
                ssrRenderList(item.children, (child) => {
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    key: child.to,
                    to: child.to,
                    class: unref(adminMobileNavItemClass),
                    onClick: closeMenu
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="flex items-center gap-2 text-xs"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: child.icon,
                          class: "w-4 h-4 text-gray-400"
                        }, null, _parent3, _scopeId2));
                        _push3(` ${ssrInterpolate(child.label)}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-2 text-xs" }, [
                            createVNode(_component_UIcon, {
                              name: child.icon,
                              class: "w-4 h-4 text-gray-400"
                            }, null, 8, ["name"]),
                            createTextVNode(" " + toDisplayString(child.label), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></div></div>`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div><!--[-->`);
            ssrRenderList(unref(allowedExtensionSections), (section) => {
              _push2(`<div class="space-y-1 mt-4"${_scopeId}><h3 class="${ssrRenderClass(unref(adminSectionTitleClass))}"${_scopeId}>${ssrInterpolate(section.title)}</h3><!--[-->`);
              ssrRenderList(section.items, (item) => {
                _push2(`<!--[-->`);
                if (item.type === "link") {
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: item.to,
                    class: unref(adminMobileNavItemClass),
                    onClick: closeMenu
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: item.icon,
                          class: "w-5 h-5"
                        }, null, _parent3, _scopeId2));
                        _push3(` ${ssrInterpolate(item.label)}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_UIcon, {
                              name: item.icon,
                              class: "w-5 h-5"
                            }, null, 8, ["name"]),
                            createTextVNode(" " + toDisplayString(item.label), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<div class="space-y-1"${_scopeId}><button type="button" class="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/[0.04]"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: item.icon,
                    class: "w-5 h-5 text-purple-500"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${ssrInterpolate(item.title)}</span></div>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:caret-down-bold",
                    class: ["w-4 h-4 transition-transform duration-200 opacity-60", isGroupExpanded(item.key) ? "rotate-0" : "-rotate-90"]
                  }, null, _parent2, _scopeId));
                  _push2(`</button><div class="ml-5 pl-2.5 space-y-1 border-l border-gray-200 dark:border-gray-800" style="${ssrRenderStyle(isGroupExpanded(item.key) ? null : { display: "none" })}"${_scopeId}><!--[-->`);
                  ssrRenderList(item.children, (child) => {
                    _push2(ssrRenderComponent(_component_NuxtLink, {
                      key: child.to,
                      to: child.to,
                      class: unref(adminMobileNavItemClass),
                      onClick: closeMenu
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div class="flex items-center gap-2 text-xs"${_scopeId2}>`);
                          _push3(ssrRenderComponent(_component_UIcon, {
                            name: child.icon,
                            class: "w-4 h-4 text-gray-400"
                          }, null, _parent3, _scopeId2));
                          _push3(` ${ssrInterpolate(child.label)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center gap-2 text-xs" }, [
                              createVNode(_component_UIcon, {
                                name: child.icon,
                                class: "w-4 h-4 text-gray-400"
                              }, null, 8, ["name"]),
                              createTextVNode(" " + toDisplayString(child.label), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></div></div>`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]--></div>`);
            });
            _push2(`<!--]--><div class="space-y-1 mt-4"${_scopeId}><h3 class="${ssrRenderClass(unref(adminSectionTitleClass))}"${_scopeId}>${ssrInterpolate(unref(resolveSectionTitle)(unref(configSection)))}</h3><!--[-->`);
            ssrRenderList(unref(configSection).items, (item) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: item.to,
                to: item.to,
                class: unref(adminMobileNavItemClass),
                onClick: closeMenu
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: item.icon,
                      class: "w-5 h-5"
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(unref(resolveLabel)(item))}</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_Icon, {
                          name: item.icon,
                          class: "w-5 h-5"
                        }, null, 8, ["name"]),
                        createTextVNode(" " + toDisplayString(unref(resolveLabel)(item)), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></nav></div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-full flex-col bg-white p-6 text-gray-900 dark:bg-[#09090b] dark:text-gray-100" }, [
                createVNode("div", { class: "flex items-center justify-between mb-8" }, [
                  createVNode("div", { class: "flex items-center gap-2.5" }, [
                    unref(getSetting)("site_logo") ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "w-8 h-8 flex items-center justify-center"
                    }, [
                      createVNode(_component_SiteLogo, {
                        "logo-data": unref(getSetting)("site_logo"),
                        alt: unref(getLocalizedSetting)("site_name")
                      }, null, 8, ["logo-data", "alt"])
                    ])) : createCommentVNode("", true),
                    createVNode("span", { class: "relative inline-flex items-center font-bold tracking-tight text-lg sm:text-xl" }, [
                      createVNode("span", { class: "absolute -inset-x-1.5 -inset-y-0.5 rounded-lg bg-gradient-to-r from-purple-500/15 via-indigo-500/20 to-cyan-500/15 blur-sm dark:opacity-40 dark:animate-pulse pointer-events-none" }),
                      createVNode("span", { class: "relative bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-indigo-200/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" }, toDisplayString(unref(getLocalizedSetting)("site_name")), 1)
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center gap-1" }, [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "ghost",
                          icon: unref(isDark) ? "ph:sun-dim-bold" : "ph:moon-bold",
                          "aria-label": unref(isDark) ? "Switch to light mode" : "Switch to dark mode",
                          onClick: toggleColorMode
                        }, null, 8, ["icon", "aria-label"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "ph:x-bold",
                      onClick: closeMenu
                    })
                  ])
                ]),
                createVNode("nav", { class: "flex flex-col gap-4" }, [
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("h3", { class: unref(adminSectionTitleClass) }, toDisplayString(unref(resolveSectionTitle)(unref(storeSection))), 3),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(storeSectionItems), (item) => {
                      return openBlock(), createBlock(Fragment, {
                        key: item.type === "link" ? item.to : item.key
                      }, [
                        item.type === "link" ? (openBlock(), createBlock(_component_NuxtLink, {
                          key: 0,
                          to: item.to,
                          class: unref(adminMobileNavItemClass),
                          onClick: closeMenu
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(_component_Icon, {
                                name: item.icon,
                                class: "w-5 h-5"
                              }, null, 8, ["name"]),
                              createTextVNode(" " + toDisplayString(item.label), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to", "class"])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "space-y-1"
                        }, [
                          createVNode("button", {
                            type: "button",
                            class: "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/[0.04]",
                            onClick: ($event) => toggleGroup(item.key)
                          }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(_component_UIcon, {
                                name: item.icon,
                                class: "w-5 h-5 text-purple-500"
                              }, null, 8, ["name"]),
                              createVNode("span", null, toDisplayString(item.title), 1)
                            ]),
                            createVNode(_component_UIcon, {
                              name: "ph:caret-down-bold",
                              class: ["w-4 h-4 transition-transform duration-200 opacity-60", isGroupExpanded(item.key) ? "rotate-0" : "-rotate-90"]
                            }, null, 8, ["class"])
                          ], 8, ["onClick"]),
                          withDirectives(createVNode("div", { class: "ml-5 pl-2.5 space-y-1 border-l border-gray-200 dark:border-gray-800" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                              return openBlock(), createBlock(_component_NuxtLink, {
                                key: child.to,
                                to: child.to,
                                class: unref(adminMobileNavItemClass),
                                onClick: closeMenu
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center gap-2 text-xs" }, [
                                    createVNode(_component_UIcon, {
                                      name: child.icon,
                                      class: "w-4 h-4 text-gray-400"
                                    }, null, 8, ["name"]),
                                    createTextVNode(" " + toDisplayString(child.label), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["to", "class"]);
                            }), 128))
                          ], 512), [
                            [vShow, isGroupExpanded(item.key)]
                          ])
                        ]))
                      ], 64);
                    }), 128))
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(allowedExtensionSections), (section) => {
                    return openBlock(), createBlock("div", {
                      key: section.key,
                      class: "space-y-1 mt-4"
                    }, [
                      createVNode("h3", { class: unref(adminSectionTitleClass) }, toDisplayString(section.title), 3),
                      (openBlock(true), createBlock(Fragment, null, renderList(section.items, (item) => {
                        return openBlock(), createBlock(Fragment, {
                          key: item.type === "link" ? item.to : item.key
                        }, [
                          item.type === "link" ? (openBlock(), createBlock(_component_NuxtLink, {
                            key: 0,
                            to: item.to,
                            class: unref(adminMobileNavItemClass),
                            onClick: closeMenu
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode(_component_UIcon, {
                                  name: item.icon,
                                  class: "w-5 h-5"
                                }, null, 8, ["name"]),
                                createTextVNode(" " + toDisplayString(item.label), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["to", "class"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "space-y-1"
                          }, [
                            createVNode("button", {
                              type: "button",
                              class: "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/[0.04]",
                              onClick: ($event) => toggleGroup(item.key)
                            }, [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode(_component_UIcon, {
                                  name: item.icon,
                                  class: "w-5 h-5 text-purple-500"
                                }, null, 8, ["name"]),
                                createVNode("span", null, toDisplayString(item.title), 1)
                              ]),
                              createVNode(_component_UIcon, {
                                name: "ph:caret-down-bold",
                                class: ["w-4 h-4 transition-transform duration-200 opacity-60", isGroupExpanded(item.key) ? "rotate-0" : "-rotate-90"]
                              }, null, 8, ["class"])
                            ], 8, ["onClick"]),
                            withDirectives(createVNode("div", { class: "ml-5 pl-2.5 space-y-1 border-l border-gray-200 dark:border-gray-800" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                return openBlock(), createBlock(_component_NuxtLink, {
                                  key: child.to,
                                  to: child.to,
                                  class: unref(adminMobileNavItemClass),
                                  onClick: closeMenu
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center gap-2 text-xs" }, [
                                      createVNode(_component_UIcon, {
                                        name: child.icon,
                                        class: "w-4 h-4 text-gray-400"
                                      }, null, 8, ["name"]),
                                      createTextVNode(" " + toDisplayString(child.label), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["to", "class"]);
                              }), 128))
                            ], 512), [
                              [vShow, isGroupExpanded(item.key)]
                            ])
                          ]))
                        ], 64);
                      }), 128))
                    ]);
                  }), 128)),
                  createVNode("div", { class: "space-y-1 mt-4" }, [
                    createVNode("h3", { class: unref(adminSectionTitleClass) }, toDisplayString(unref(resolveSectionTitle)(unref(configSection))), 3),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(configSection).items, (item) => {
                      return openBlock(), createBlock(_component_NuxtLink, {
                        key: item.to,
                        to: item.to,
                        class: unref(adminMobileNavItemClass),
                        onClick: closeMenu
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_Icon, {
                              name: item.icon,
                              class: "w-5 h-5"
                            }, null, 8, ["name"]),
                            createTextVNode(" " + toDisplayString(unref(resolveLabel)(item)), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to", "class"]);
                    }), 128))
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminMobileMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "AdminMobileMenu" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AdminSidebar",
  __ssrInlineRender: true,
  props: {
    "collapsed": { type: Boolean, ...{ default: false } },
    "collapsedModifiers": {}
  },
  emits: ["update:collapsed"],
  setup(__props) {
    const collapsed = useModel(__props, "collapsed");
    const route = useRoute();
    const { extensionSections } = useAdminExtensions();
    const { storeSection, configSection, resolveLabel, resolveSectionTitle, hasPermissionFor } = useAdminNav();
    const { adminSectionTitleClass } = useAdminNavStyle();
    const expandedGroups = ref({});
    const sections = computed(() => {
      const list = [
        {
          key: "store",
          title: resolveSectionTitle(storeSection),
          items: storeSection.items.filter((item) => !item.conditional || item.conditional()).map((item) => {
            if (item.children && item.children.length) {
              const validChildren = item.children.filter((child) => !child.conditional || child.conditional()).map((child) => ({
                type: "link",
                to: child.to,
                icon: child.icon,
                label: resolveLabel(child),
                exact: child.exact
              }));
              if (validChildren.length > 1) {
                return {
                  type: "group",
                  key: `store-${item.to}`,
                  title: resolveLabel(item),
                  icon: item.icon,
                  order: 0,
                  children: validChildren
                };
              }
            }
            return {
              type: "link",
              to: item.to,
              icon: item.icon,
              label: resolveLabel(item),
              exact: item.exact
            };
          })
        }
      ];
      extensionSections.value.forEach((section) => {
        const allowedExtensionPages = section.pages.filter(
          (page) => hasPermissionFor(page.permissionCode || themeExtensionPermissionCode(page.extensionKey, page.key))
        );
        if (!allowedExtensionPages.length) return;
        const groupsMap = /* @__PURE__ */ new Map();
        const directItems = [];
        allowedExtensionPages.forEach((page) => {
          var _a, _b;
          const entry = {
            type: "link",
            to: page.route,
            icon: page.icon,
            label: page.title,
            exact: true,
            order: (_a = page.order) != null ? _a : 99
          };
          if (page.group) {
            const groupKey = `group-${page.group}`;
            const existing = groupsMap.get(groupKey) || {
              title: page.group,
              icon: page.groupIcon || "ph:folder-bold",
              order: (_b = page.groupOrder) != null ? _b : 99,
              children: []
            };
            existing.children.push(entry);
            groupsMap.set(groupKey, existing);
          } else {
            directItems.push(entry);
          }
        });
        const sectionItems = [...directItems];
        for (const [key, group] of groupsMap.entries()) {
          sectionItems.push({
            type: "group",
            key,
            title: group.title,
            icon: group.icon,
            order: group.order,
            children: group.children
          });
        }
        sectionItems.sort((a, b) => {
          var _a, _b;
          const orderA = (_a = a.order) != null ? _a : 0;
          const orderB = (_b = b.order) != null ? _b : 0;
          return orderA - orderB;
        });
        list.push({
          key: `extensions-${section.key}`,
          title: section.title,
          items: sectionItems
        });
      });
      list.push({
        key: "config",
        title: resolveSectionTitle(configSection),
        items: configSection.items.filter((item) => !item.conditional || item.conditional()).map((item) => ({
          type: "link",
          to: item.to,
          icon: item.icon,
          label: resolveLabel(item),
          exact: item.exact
        }))
      });
      return list;
    });
    const isActive = (entry) => {
      if (entry.exact) return route.path === entry.to;
      return route.path === entry.to || route.path.startsWith(`${entry.to}/`);
    };
    const isGroupActive = (group) => {
      return group.children.some((child) => isActive(child));
    };
    const isGroupExpanded = (groupKey) => {
      return expandedGroups.value[groupKey] !== false;
    };
    const openGroup = (groupKey) => {
      expandedGroups.value[groupKey] = true;
    };
    watch(() => route.path, (currentPath) => {
      for (const section of sections.value) {
        for (const item of section.items) {
          if (item.type === "group" && item.children.some((c) => c.to === currentPath || currentPath.startsWith(`${c.to}/`))) {
            expandedGroups.value[item.key] = true;
          }
        }
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTooltip = _sfc_main$8;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$G;
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: ["fixed bottom-0 left-0 top-16 z-30 hidden flex-col border-r border-gray-200/80 bg-white transition-[width] duration-200 dark:border-white/5 dark:bg-[#0c0c0e] md:flex", collapsed.value ? "w-16" : "w-60"]
      }, _attrs))} data-v-1d03f188><div class="admin-sidebar-scrollbar flex-1 overflow-y-auto overflow-x-hidden px-3 py-6" data-v-1d03f188><div class="space-y-6" data-v-1d03f188><!--[-->`);
      ssrRenderList(sections.value, (section) => {
        _push(`<div data-v-1d03f188>`);
        if (!collapsed.value) {
          _push(`<h3 class="${ssrRenderClass(unref(adminSectionTitleClass))}" data-v-1d03f188>${ssrInterpolate(section.title)}</h3>`);
        } else {
          _push(`<div class="mb-2 border-t border-gray-200/80 dark:border-white/5" data-v-1d03f188></div>`);
        }
        _push(`<nav class="space-y-1" data-v-1d03f188><!--[-->`);
        ssrRenderList(section.items, (item) => {
          _push(`<!--[-->`);
          if (item.type === "link") {
            _push(ssrRenderComponent(_component_UTooltip, {
              text: item.label,
              disabled: !collapsed.value,
              content: { side: "right" }
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: item.to,
                    class: ["group flex items-center gap-2.5 rounded-lg py-2.5 text-sm transition-colors", [
                      collapsed.value ? "justify-center px-0" : "px-3",
                      isActive(item) ? "bg-gray-100 font-medium text-gray-900 dark:bg-[#1a1a1e] dark:text-white" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-white/60 dark:hover:bg-white/[0.04] dark:hover:text-white"
                    ]]
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: item.icon,
                          class: ["h-4 w-4 shrink-0", isActive(item) ? "text-purple-500 dark:text-purple-400" : ""]
                        }, null, _parent3, _scopeId2));
                        if (!collapsed.value) {
                          _push3(`<span class="truncate" data-v-1d03f188${_scopeId2}>${ssrInterpolate(item.label)}</span>`);
                        } else {
                          _push3(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_component_UIcon, {
                            name: item.icon,
                            class: ["h-4 w-4 shrink-0", isActive(item) ? "text-purple-500 dark:text-purple-400" : ""]
                          }, null, 8, ["name", "class"]),
                          !collapsed.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "truncate"
                          }, toDisplayString(item.label), 1)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: item.to,
                      class: ["group flex items-center gap-2.5 rounded-lg py-2.5 text-sm transition-colors", [
                        collapsed.value ? "justify-center px-0" : "px-3",
                        isActive(item) ? "bg-gray-100 font-medium text-gray-900 dark:bg-[#1a1a1e] dark:text-white" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-white/60 dark:hover:bg-white/[0.04] dark:hover:text-white"
                      ]]
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: item.icon,
                          class: ["h-4 w-4 shrink-0", isActive(item) ? "text-purple-500 dark:text-purple-400" : ""]
                        }, null, 8, ["name", "class"]),
                        !collapsed.value ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "truncate"
                        }, toDisplayString(item.label), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["to", "class"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<div class="space-y-0.5" data-v-1d03f188>`);
            if (!collapsed.value) {
              _push(`<!--[--><button type="button" class="${ssrRenderClass([isGroupActive(item) ? "text-purple-600 dark:text-purple-400" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-white/70 dark:hover:bg-white/[0.04] dark:hover:text-white", "group flex w-full items-center justify-between gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer"])}" data-v-1d03f188><div class="flex items-center gap-2.5 min-w-0 truncate" data-v-1d03f188>`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: item.icon,
                class: ["h-4 w-4 shrink-0", isGroupActive(item) ? "text-purple-500 dark:text-purple-400" : "text-gray-400"]
              }, null, _parent));
              _push(`<span class="truncate" data-v-1d03f188>${ssrInterpolate(item.title)}</span></div>`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:caret-down-bold",
                class: ["h-3.5 w-3.5 shrink-0 transition-transform duration-200 opacity-60 group-hover:opacity-100", isGroupExpanded(item.key) ? "rotate-0" : "-rotate-90"]
              }, null, _parent));
              _push(`</button><div class="ml-5 pl-2.5 space-y-0.5 border-l border-gray-200 dark:border-gray-800" style="${ssrRenderStyle(isGroupExpanded(item.key) ? null : { display: "none" })}" data-v-1d03f188><!--[-->`);
              ssrRenderList(item.children, (child) => {
                _push(ssrRenderComponent(_component_NuxtLink, {
                  key: child.to,
                  to: child.to,
                  class: ["group flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs transition-colors", isActive(child) ? "bg-purple-50 font-semibold text-purple-700 dark:bg-purple-950/40 dark:text-purple-300" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-white/60 dark:hover:bg-white/[0.04] dark:hover:text-white"]
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(ssrRenderComponent(_component_UIcon, {
                        name: child.icon,
                        class: ["h-3.5 w-3.5 shrink-0", isActive(child) ? "text-purple-600 dark:text-purple-400" : "opacity-70"]
                      }, null, _parent2, _scopeId));
                      _push2(`<span class="truncate" data-v-1d03f188${_scopeId}>${ssrInterpolate(child.label)}</span>`);
                    } else {
                      return [
                        createVNode(_component_UIcon, {
                          name: child.icon,
                          class: ["h-3.5 w-3.5 shrink-0", isActive(child) ? "text-purple-600 dark:text-purple-400" : "opacity-70"]
                        }, null, 8, ["name", "class"]),
                        createVNode("span", { class: "truncate" }, toDisplayString(child.label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              });
              _push(`<!--]--></div><!--]-->`);
            } else {
              _push(ssrRenderComponent(_component_UTooltip, {
                text: `${item.title} (${item.children.map((c) => c.label).join(" \xB7 ")})`,
                content: { side: "right" }
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<button type="button" class="${ssrRenderClass([isGroupActive(item) ? "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-white/60 dark:hover:bg-white/[0.04] dark:hover:text-white", "group flex w-full items-center justify-center rounded-lg py-2.5 text-sm transition-colors cursor-pointer"])}" data-v-1d03f188${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: item.icon,
                      class: ["h-4 w-4 shrink-0", isGroupActive(item) ? "text-purple-500 dark:text-purple-400" : ""]
                    }, null, _parent2, _scopeId));
                    _push2(`</button>`);
                  } else {
                    return [
                      createVNode("button", {
                        type: "button",
                        class: ["group flex w-full items-center justify-center rounded-lg py-2.5 text-sm transition-colors cursor-pointer", isGroupActive(item) ? "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-white/60 dark:hover:bg-white/[0.04] dark:hover:text-white"],
                        onClick: ($event) => {
                          collapsed.value = false;
                          openGroup(item.key);
                        }
                      }, [
                        createVNode(_component_UIcon, {
                          name: item.icon,
                          class: ["h-4 w-4 shrink-0", isGroupActive(item) ? "text-purple-500 dark:text-purple-400" : ""]
                        }, null, 8, ["name", "class"])
                      ], 10, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`</div>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav></div>`);
      });
      _push(`<!--]--></div></div><div class="${ssrRenderClass([collapsed.value ? "justify-center" : "justify-end px-3", "flex items-center border-t border-gray-200/80 p-2 dark:border-white/5"])}" data-v-1d03f188>`);
      _push(ssrRenderComponent(_component_UTooltip, {
        text: collapsed.value ? _ctx.$t("admin.nav.expand", "\u5C55\u5F00\u4FA7\u8FB9\u680F") : _ctx.$t("admin.nav.collapse", "\u6536\u8D77\u4FA7\u8FB9\u680F"),
        content: { side: collapsed.value ? "right" : "top" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer"${ssrRenderAttr("aria-label", collapsed.value ? "Expand sidebar" : "Collapse sidebar")} data-v-1d03f188${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: collapsed.value ? "ph:sidebar-simple-bold" : "ph:sidebar-simple-bold",
              class: "h-4 w-4 shrink-0"
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer",
                "aria-label": collapsed.value ? "Expand sidebar" : "Collapse sidebar",
                onClick: ($event) => collapsed.value = !collapsed.value
              }, [
                createVNode(_component_UIcon, {
                  name: collapsed.value ? "ph:sidebar-simple-bold" : "ph:sidebar-simple-bold",
                  class: "h-4 w-4 shrink-0"
                }, null, 8, ["name"])
              ], 8, ["aria-label", "onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminSidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-1d03f188"]]), { __name: "AdminSidebar" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const isMobileMenuOpen = ref(false);
    const sidebarCollapsed = useCookie("admin_sidebar_collapsed", {
      default: () => false,
      maxAge: 31536e3
    });
    const { loadAdmin } = useAdminPermissions();
    const { loadAdminLocale } = useAdminLocale();
    [__temp, __restore] = withAsyncContext(() => useAsyncData("admin-permissions-bootstrap", () => loadAdmin())), await __temp, __restore();
    {
      [__temp, __restore] = withAsyncContext(() => loadAdminLocale()), await __temp, __restore();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminHeader = __nuxt_component_0;
      const _component_AdminMobileMenu = __nuxt_component_1;
      const _component_AdminSidebar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 text-gray-900 font-sans dark:bg-[#09090b] dark:text-gray-100" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AdminHeader, {
        onOpenMobileMenu: ($event) => isMobileMenuOpen.value = true
      }, null, _parent));
      _push(ssrRenderComponent(_component_AdminMobileMenu, {
        open: isMobileMenuOpen.value,
        "onUpdate:open": ($event) => isMobileMenuOpen.value = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_AdminSidebar, {
        collapsed: unref(sidebarCollapsed),
        "onUpdate:collapsed": ($event) => isRef(sidebarCollapsed) ? sidebarCollapsed.value = $event : null
      }, null, _parent));
      _push(`<main class="${ssrRenderClass([unref(sidebarCollapsed) ? "md:pl-16" : "md:pl-60", "transition-[padding-left] duration-200"])}"><div class="mx-auto w-full max-w-7xl px-4 pt-6 md:px-8 lg:pt-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
