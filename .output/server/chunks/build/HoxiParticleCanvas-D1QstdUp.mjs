import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiParticleCanvas",
  __ssrInlineRender: true,
  setup(__props) {
    const containerRef = ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: "relative h-56 lg:h-72 w-full overflow-hidden pointer-events-auto"
      }, _attrs))}><canvas class="absolute inset-0 h-full w-full cursor-default"></canvas></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiParticleCanvas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "HoxiParticleCanvas" });

export { __nuxt_component_1 as default };
