import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiPageHeader",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "border-b border-slate-100 dark:border-slate-800 pb-6 md:pb-8" }, _attrs))}><div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div class="min-w-0"><h1 class="text-[28px] font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">${ssrInterpolate(__props.title)}</h1>`);
      if (__props.subtitle) {
        _push(`<p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400 md:max-w-2xl md:text-base md:leading-8">${ssrInterpolate(__props.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$slots.meta) {
        _push(`<div class="mt-4">`);
        ssrRenderSlot(_ctx.$slots, "meta", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.$slots.actions) {
        _push(`<div class="flex-none">`);
        ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiPageHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "HoxiPageHeader" });

export { __nuxt_component_1 as default };
