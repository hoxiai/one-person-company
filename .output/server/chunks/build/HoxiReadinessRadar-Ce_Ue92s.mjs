import { defineComponent, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const radius = 96;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiReadinessRadar",
  __ssrInlineRender: true,
  props: {
    dimensions: {}
  },
  setup(__props) {
    const props = __props;
    const center = { x: 170, y: 160 };
    const angles = [-Math.PI / 2, -Math.PI / 2 + 2 * Math.PI / 5, -Math.PI / 2 + 4 * Math.PI / 5, -Math.PI / 2 + 6 * Math.PI / 5, -Math.PI / 2 + 8 * Math.PI / 5];
    const getPolygonPoints = (scale) => {
      return angles.map((angle) => {
        const x = center.x + radius * scale * Math.cos(angle);
        const y = center.y + radius * scale * Math.sin(angle);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      }).join(" ");
    };
    const axisPoints = computed(() => {
      return angles.map((angle) => ({
        x: center.x + radius * Math.cos(angle),
        y: center.y + radius * Math.sin(angle)
      }));
    });
    const userVertexPoints = computed(() => {
      return props.dimensions.map((dim, i) => {
        const angle = angles[i];
        const normalized = Math.max(15, Math.min(100, dim.score)) / 100;
        return {
          x: center.x + radius * normalized * Math.cos(angle),
          y: center.y + radius * normalized * Math.sin(angle)
        };
      });
    });
    const userPolygonPoints = computed(() => {
      return userVertexPoints.value.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
    });
    const labelPoints = computed(() => {
      const labelRadius = radius + 24;
      return props.dimensions.map((dim, i) => {
        const angle = angles[i];
        const x = center.x + labelRadius * Math.cos(angle);
        const y = center.y + labelRadius * Math.sin(angle);
        let anchor = "middle";
        if (Math.cos(angle) > 0.3) anchor = "start";
        else if (Math.cos(angle) < -0.3) anchor = "end";
        return {
          x,
          y,
          anchor,
          name: dim.meta.shortName,
          score: dim.score
        };
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center" }, _attrs))}><div class="w-full max-w-[340px] aspect-square relative"><svg viewBox="0 0 340 320" class="w-full h-full overflow-visible" aria-label="\u4E00\u4EBA\u516C\u53F8\u4E94\u7EF4\u80FD\u529B\u96F7\u8FBE\u56FE"><!--[-->`);
      ssrRenderList([0.2, 0.4, 0.6, 0.8, 1], (step) => {
        _push(`<polygon${ssrRenderAttr("points", getPolygonPoints(step))} class="fill-transparent stroke-slate-200" stroke-width="1" stroke-dasharray="2,2"></polygon>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(axisPoints.value, (axis, i) => {
        _push(`<line${ssrRenderAttr("x1", center.x)}${ssrRenderAttr("y1", center.y)}${ssrRenderAttr("x2", axis.x)}${ssrRenderAttr("y2", axis.y)} class="stroke-slate-200" stroke-width="1"></line>`);
      });
      _push(`<!--]--><polygon${ssrRenderAttr("points", userPolygonPoints.value)} class="fill-blue-500/20 stroke-blue-500 transition-all duration-500 ease-out" stroke-width="2" stroke-linejoin="round"></polygon><!--[-->`);
      ssrRenderList(userVertexPoints.value, (point, i) => {
        _push(`<circle${ssrRenderAttr("cx", point.x)}${ssrRenderAttr("cy", point.y)} r="4" class="fill-white stroke-blue-600 transition-all duration-500" stroke-width="2"></circle>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(labelPoints.value, (label, i) => {
        _push(`<g${ssrRenderAttr("transform", `translate(${label.x}, ${label.y})`)}${ssrRenderAttr("text-anchor", label.anchor)} class="select-none"><text y="-4" class="text-[12px] font-medium fill-slate-700 font-sans">${ssrInterpolate(label.name)}</text><text y="12" class="text-[11px] font-mono tabular-nums font-semibold fill-blue-600">${ssrInterpolate(label.score)}\u5206 </text></g>`);
      });
      _push(`<!--]--></svg></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiReadinessRadar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "HoxiReadinessRadar" });

export { __nuxt_component_1 as default };
