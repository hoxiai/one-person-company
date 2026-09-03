import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiValueBar",
  __ssrInlineRender: true,
  props: {
    value: {},
    ratio: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-2" }, _attrs))}><span class="tabular-nums text-slate-700">${ssrInterpolate(__props.value === void 0 ? "\u2014" : Math.round(__props.value))}</span>`);
      if (__props.ratio !== void 0) {
        _push(`<span class="h-1 w-10 shrink-0 rounded-full bg-slate-100" aria-hidden="true"><span class="block h-1 rounded-full bg-blue-500/70" style="${ssrRenderStyle({ width: `${Math.round(__props.ratio * 100)}%` })}"></span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiValueBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "HoxiValueBar" });

export { __nuxt_component_2 as default };
