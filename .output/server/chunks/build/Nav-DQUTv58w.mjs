import { _ as _export_sfc, a as __nuxt_component_3$1, b as _sfc_main$G } from './server.mjs';
import { defineComponent, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderList, ssrRenderVNode, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const SETTINGS_NAV_TABS = [
  { id: "general", labelKey: "admin.settings.page.nav_general", icon: "ph:browser-fill" },
  { id: "localization", labelKey: "admin.settings.page.nav_localization", icon: "ph:translate-fill" },
  { id: "seo", labelKey: "admin.settings.page.nav_seo", icon: "ph:magnifying-glass-fill" },
  { id: "checkout", labelKey: "admin.settings.page.nav_checkout", icon: "ph:shopping-cart-fill" },
  { id: "topup", labelKey: "admin.settings.page.nav_topup", icon: "ph:wallet-fill" },
  { id: "email", labelKey: "admin.settings.page.nav_email", icon: "ph:envelope-fill" },
  { id: "company", labelKey: "admin.settings.page.nav_company", icon: "ph:buildings-fill" },
  { id: "automations", labelKey: "admin.settings.page.nav_automations", icon: "ph:lightning-fill" },
  { id: "scheduler", labelKey: "admin.settings.page.nav_scheduler", icon: "ph:clock-countdown-fill" },
  { id: "users", labelKey: "admin.nav.manages", icon: "ph:users-four", route: "/admin/settings/manages" },
  { id: "authorization", labelKey: "admin.settings.page.nav_authorization", icon: "ph:key-fill", route: "/admin/settings/authorization" },
  { id: "themes", labelKey: "admin.nav.themes", icon: "ph:sparkle-duotone", route: "/admin/settings/themes" },
  { id: "extensions", labelKey: "admin.nav.extensions", icon: "ph:puzzle-piece-fill", route: "/admin/settings/extensions" },
  { id: "product-presets", labelKey: "admin.settings.presets.nav", icon: "ph:list-plus-fill", route: "/admin/settings/product-presets" }
];
const isSettingsTabId = (value) => typeof value === "string" && SETTINGS_NAV_TABS.some((tab) => !tab.route && tab.id === value);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Nav",
  __ssrInlineRender: true,
  props: {
    active: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const NuxtLink = __nuxt_component_3$1;
    const onSelect = (tab) => {
      if (!tab.route) emit("select", tab.id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      _push(`<!--[--><div class="settings-nav-scroll block lg:hidden overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0" data-v-3007fcd7><nav class="flex space-x-2" data-v-3007fcd7><!--[-->`);
      ssrRenderList(unref(SETTINGS_NAV_TABS), (tab) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tab.route ? unref(NuxtLink) : "button"), {
          key: tab.id,
          to: tab.route,
          type: tab.route ? void 0 : "button",
          class: ["shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-2", __props.active === tab.id ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 border border-transparent"],
          onClick: ($event) => onSelect(tab)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: tab.icon,
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t(tab.labelKey))}`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: tab.icon,
                  class: "w-5 h-5"
                }, null, 8, ["name"]),
                createTextVNode(" " + toDisplayString(_ctx.$t(tab.labelKey)), 1)
              ];
            }
          }),
          _: 2
        }), _parent);
      });
      _push(`<!--]--></nav></div><div class="lg:col-span-3 hidden lg:block space-y-1" data-v-3007fcd7><nav class="sticky top-24 space-y-2" data-v-3007fcd7><!--[-->`);
      ssrRenderList(unref(SETTINGS_NAV_TABS), (tab) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tab.route ? unref(NuxtLink) : "button"), {
          key: tab.id,
          to: tab.route,
          type: tab.route ? void 0 : "button",
          class: ["w-full text-left block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors", __props.active === tab.id ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 border border-transparent"],
          onClick: ($event) => onSelect(tab)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-3" data-v-3007fcd7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: tab.icon,
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t(tab.labelKey))}</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-3" }, [
                  createVNode(_component_UIcon, {
                    name: tab.icon,
                    class: "w-5 h-5"
                  }, null, 8, ["name"]),
                  createTextVNode(" " + toDisplayString(_ctx.$t(tab.labelKey)), 1)
                ])
              ];
            }
          }),
          _: 2
        }), _parent);
      });
      _push(`<!--]--></nav></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/settings/Nav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-3007fcd7"]]), { __name: "AdminSettingsNav" });

export { __nuxt_component_2 as _, isSettingsTabId as i };
