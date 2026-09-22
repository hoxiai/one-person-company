import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiReadinessProgress",
  __ssrInlineRender: true,
  props: {
    currentIndex: {},
    totalQuestions: {},
    progressPercent: {},
    answeredMap: {}
  },
  emits: ["jump"],
  setup(__props) {
    const props = __props;
    const getStepClass = (index) => {
      if (index === props.currentIndex) {
        return "bg-blue-500 ring-2 ring-blue-200 dark:ring-blue-800/60";
      }
      if (props.answeredMap[index + 1] !== void 0) {
        return "bg-blue-400/80 hover:bg-blue-500";
      }
      return "bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-2" }, _attrs))}><div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400"><span class="font-medium text-slate-700 dark:text-slate-300"> \u6D4B\u8BC4\u8FDB\u5EA6\uFF1A\u7B2C ${ssrInterpolate(__props.currentIndex + 1)} / ${ssrInterpolate(__props.totalQuestions)} \u9898 </span><span class="font-mono tabular-nums text-blue-600 font-semibold dark:text-blue-400">${ssrInterpolate(__props.progressPercent)}% </span></div><div class="h-2 w-full rounded-full bg-slate-100 overflow-hidden dark:bg-slate-800"><div class="h-full bg-blue-500 transition-all duration-300 rounded-full" style="${ssrRenderStyle({ width: `${__props.progressPercent}%` })}"></div></div><div class="flex items-center justify-between gap-1 pt-1 overflow-x-auto"><!--[-->`);
      ssrRenderList(__props.totalQuestions, (idx) => {
        _push(`<button type="button" class="${ssrRenderClass([getStepClass(idx - 1), "h-1.5 flex-1 rounded-full transition-colors cursor-pointer"])}"${ssrRenderAttr("title", `\u8DF3\u8F6C\u5230\u7B2C ${idx} \u9898`)}></button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiReadinessProgress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "HoxiReadinessProgress" });

export { __nuxt_component_2 as default };
