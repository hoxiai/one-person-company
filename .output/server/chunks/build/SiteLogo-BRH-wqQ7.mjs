import { _ as _sfc_main$W } from './server.mjs';
import { defineComponent, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SiteLogo",
  __ssrInlineRender: true,
  props: {
    logoData: {},
    alt: {},
    containerClass: {},
    imageClass: {},
    containerStyle: {},
    iconColor: {},
    defaultIcon: { default: () => ({
      name: "material-symbols:shopping-bag-speed-outline",
      class: "text-gray-900 dark:text-white w-6 h-6"
    }) }
  },
  setup(__props) {
    const props = __props;
    const isSvgCode = computed(() => {
      if (!props.logoData) return false;
      const trimmed = props.logoData.trim();
      return trimmed.startsWith("<svg") && trimmed.endsWith("</svg>");
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UIcon = _sfc_main$W;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["inline-flex items-center justify-center overflow-hidden", __props.containerClass],
        style: __props.containerStyle
      }, _attrs))}>`);
      if (isSvgCode.value) {
        _push(`<div class="${ssrRenderClass(["w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full", __props.imageClass])}" style="${ssrRenderStyle({ color: __props.iconColor })}">${(_a = __props.logoData) != null ? _a : ""}</div>`);
      } else if (__props.logoData) {
        _push(`<img${ssrRenderAttr("src", __props.logoData)}${ssrRenderAttr("alt", __props.alt || "Site Logo")} class="${ssrRenderClass(["object-contain w-full h-full", __props.imageClass])}">`);
      } else {
        _push(`<div class="${ssrRenderClass(["w-full h-full flex items-center justify-center", __props.imageClass])}">`);
        if ((_b = __props.defaultIcon) == null ? void 0 : _b.name) {
          _push(ssrRenderComponent(_component_UIcon, {
            name: __props.defaultIcon.name,
            class: ["w-full h-full", __props.defaultIcon.class]
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteLogo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "SiteLogo" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=SiteLogo-BRH-wqQ7.mjs.map
