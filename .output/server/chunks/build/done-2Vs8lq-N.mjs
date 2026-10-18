import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "done",
  __ssrInlineRender: true,
  setup(__props) {
    const deepLink = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center px-4 py-12 bg-slate-50 dark:bg-slate-950 font-sans" }, _attrs))}><div class="w-full max-w-md rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center shadow-xl"><div class="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto mb-5 text-2xl font-bold"> \u2713 </div><h1 class="text-xl font-bold text-slate-900 dark:text-white">${ssrInterpolate(_ctx.$t("hoxi.authDesktop.doneTitle"))}</h1><p class="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.authDesktop.doneDesc"))}</p><div class="mt-6 flex flex-col gap-3">`);
      if (deepLink.value) {
        _push(`<a${ssrRenderAttr("href", deepLink.value)} class="w-full py-2.5 px-4 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md shadow-blue-500/20">${ssrInterpolate(_ctx.$t("hoxi.authDesktop.openAppBtn"))}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="text-[11px] text-slate-400 dark:text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.authDesktop.closePageHint"))}</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/auth/authorize-desktop/done.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=done-2Vs8lq-N.mjs.map
