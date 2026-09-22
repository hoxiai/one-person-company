import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiParticleHero",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {}
  },
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative mb-8 overflow-hidden border-b border-slate-100 pb-6 md:mb-12 md:pb-8 dark:border-slate-800" }, _attrs))}><canvas class="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true"></canvas><div class="relative rounded-2xl border border-slate-100 bg-slate-50/50 px-5 py-6 md:px-8 md:py-10 dark:border-slate-800 dark:bg-slate-900/50"><h1 class="text-xl font-semibold text-slate-900 md:text-3xl dark:text-white">${ssrInterpolate(__props.title)}</h1>`);
      if (__props.subtitle) {
        _push(`<p class="mt-3 text-sm leading-7 text-slate-600 md:max-w-2xl md:leading-relaxed dark:text-slate-300">${ssrInterpolate(__props.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$slots.default) {
        _push(`<div class="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500 md:mt-6 md:gap-x-4 dark:text-slate-400">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiParticleHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HoxiParticleHero = Object.assign(_sfc_main, { __name: "HoxiParticleHero" });

export { HoxiParticleHero as default };
