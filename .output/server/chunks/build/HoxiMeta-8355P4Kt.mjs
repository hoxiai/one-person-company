import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiMeta",
  __ssrInlineRender: true,
  props: {
    items: { default: () => [] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-center gap-2 md:gap-3 text-xs text-slate-400" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.items, (item, index) => {
        _push(`<!--[-->`);
        if (index > 0) {
          _push(`<span class="text-slate-300" aria-hidden="true">\xB7</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span>${ssrInterpolate(item)}</span><!--]-->`);
      });
      _push(`<!--]-->`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiMeta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "HoxiMeta" });

export { __nuxt_component_1 as default };
