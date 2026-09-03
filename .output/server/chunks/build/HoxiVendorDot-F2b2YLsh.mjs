import { defineComponent, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiVendorDot",
  __ssrInlineRender: true,
  props: {
    vendor: {}
  },
  setup(__props) {
    const props = __props;
    const dotClass = computed(() => {
      var _a, _b;
      return (_b = (_a = props.vendor) == null ? void 0 : _a.color) == null ? void 0 : _b.dot;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (dotClass.value) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: ["inline-block h-1.5 w-1.5 shrink-0 rounded-full", dotClass.value],
          "aria-hidden": "true"
        }, _attrs))}></span>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiVendorDot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main, { __name: "HoxiVendorDot" });

export { __nuxt_component_4 as default };
