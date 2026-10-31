import { a as useToast, G as _sfc_main$p, k as _sfc_main$w, h as _sfc_main$s, d as _sfc_main$T, g as _sfc_main$A, p as _sfc_main$v, j as _sfc_main$Y, _ as _sfc_main$O, f as _sfc_main$I } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { bZ as normalizeGeoKeySpecs, b_ as normalizeGeoFaqs, b$ as normalizeGeoRelatedLinks, c0 as evaluateGeoSeoReadiness, hd as renderMarkdownDocument } from '../nitro/nitro.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GeoCitationFieldsCard",
  __ssrInlineRender: true,
  props: {
    metaData: {},
    entityType: { default: "product" },
    title: { default: "" },
    slug: { default: "" },
    description: { default: "" },
    content: { default: "" },
    price: { default: 0 },
    productType: { default: "basic" },
    activeLang: { default: "en" },
    primaryLang: { default: "en" }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const toast = useToast();
    const isAutoFilling = ref(false);
    const catalogItems = ref([]);
    const selectedCatalogUrl = ref(void 0);
    const linkTypeItems = [
      { label: "\u5173\u8054\u5546\u54C1", value: "product" },
      { label: "\u535A\u5BA2\u6559\u7A0B", value: "post" },
      { label: "\u6280\u672F\u6587\u6863", value: "doc" },
      { label: "\u65B9\u6848\u5BF9\u6BD4", value: "compare" }
    ];
    const catalogOptions = computed(
      () => catalogItems.value.filter((item) => item.slug !== props.slug).map((item) => ({
        label: `${item.entityType === "product" ? "[\u5546\u54C1]" : "[\u6587\u7AE0]"} ${item.title}${item.price ? ` (${item.price})` : ""}`,
        value: item.url
      }))
    );
    const onSelectCatalogItem = (url) => {
      if (!url) return;
      const found = catalogItems.value.find((item) => item.url === url);
      if (!found) return;
      const container = getTargetContainer();
      if (!Array.isArray(container.relatedLinks)) container.relatedLinks = [];
      if (!container.relatedLinks.some((r) => r.url === found.url)) {
        container.relatedLinks.push({
          type: found.entityType === "product" ? "product" : "post",
          title: found.title,
          url: found.url,
          price: found.price || ""
        });
        emit("change");
      }
      selectedCatalogUrl.value = void 0;
    };
    const handleSmartAutoFill = async (overwrite = false) => {
      var _a;
      isAutoFilling.value = true;
      try {
        const container = getTargetContainer();
        const res = await $fetch("/api/admin/settings/seo-autofill", {
          method: "POST",
          body: {
            mode: "preview",
            overwrite,
            entityType: props.entityType,
            title: props.title,
            slug: props.slug,
            description: props.description,
            content: props.content,
            price: props.price,
            productType: props.productType,
            metaData: container,
            locale: props.activeLang || props.primaryLang
          }
        });
        if ((res == null ? void 0 : res.code) === 0 && res.data) {
          if (overwrite || !container.tldr) {
            container.tldr = res.data.tldr;
          }
          if (overwrite || !Array.isArray(container.keySpecs) || container.keySpecs.length === 0) {
            container.keySpecs = res.data.keySpecs;
          }
          if (overwrite || !Array.isArray(container.faqs) || container.faqs.length === 0) {
            container.faqs = res.data.faqs;
          }
          if (overwrite || !Array.isArray(container.relatedLinks) || container.relatedLinks.length === 0) {
            container.relatedLinks = res.data.relatedLinks;
          }
          emit("change");
          toast.add({
            title: "GEO \u7ED3\u6784\u5316\u5B57\u6BB5\u5DF2\u667A\u80FD\u586B\u5145",
            description: "\u5DF2\u81EA\u52A8\u63D0\u70BC TL;DR\u3001KeySpecs \u53C2\u6570\u8868\u3001FAQ \u95EE\u7B54\u4E0E\u5173\u8054\u5185\u94FE\uFF0C\u8BF7\u6838\u5BF9\u540E\u4FDD\u5B58\u3002",
            color: "success"
          });
        }
      } catch (err) {
        toast.add({
          title: "\u81EA\u52A8\u63D0\u70BC\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message),
          color: "error"
        });
      } finally {
        isAutoFilling.value = false;
      }
    };
    const isPrimaryLang = computed(() => !props.activeLang || props.activeLang === props.primaryLang);
    const getTargetContainer = () => {
      if (isPrimaryLang.value) {
        return props.metaData;
      }
      if (!props.metaData.translations || typeof props.metaData.translations !== "object") {
        props.metaData.translations = {};
      }
      if (!props.metaData.translations[props.activeLang] || typeof props.metaData.translations[props.activeLang] !== "object") {
        props.metaData.translations[props.activeLang] = {};
      }
      return props.metaData.translations[props.activeLang];
    };
    const currentTldr = computed(() => {
      const container = getTargetContainer();
      return typeof container.tldr === "string" ? container.tldr : "";
    });
    const currentKeySpecs = computed(() => {
      const container = getTargetContainer();
      return Array.isArray(container.keySpecs) ? container.keySpecs : [];
    });
    const currentFaqs = computed(() => {
      const container = getTargetContainer();
      return Array.isArray(container.faqs) ? container.faqs : [];
    });
    const currentRelatedLinks = computed(() => {
      const container = getTargetContainer();
      return Array.isArray(container.relatedLinks) ? container.relatedLinks : [];
    });
    const updateTldr = (val) => {
      const container = getTargetContainer();
      container.tldr = val;
      emit("change");
    };
    const addKeySpec = () => {
      const container = getTargetContainer();
      if (!Array.isArray(container.keySpecs)) container.keySpecs = [];
      const emptyText = String();
      container.keySpecs.push({ label: emptyText, value: emptyText });
      emit("change");
    };
    const updateKeySpec = (index, field, val) => {
      const container = getTargetContainer();
      if (!Array.isArray(container.keySpecs) || !container.keySpecs[index]) return;
      container.keySpecs[index][field] = val;
      emit("change");
    };
    const removeKeySpec = (index) => {
      const container = getTargetContainer();
      if (!Array.isArray(container.keySpecs)) return;
      container.keySpecs.splice(index, 1);
      emit("change");
    };
    const addFaq = () => {
      const container = getTargetContainer();
      if (!Array.isArray(container.faqs)) container.faqs = [];
      const emptyText = String();
      container.faqs.push({ question: emptyText, answer: emptyText });
      emit("change");
    };
    const updateFaq = (index, field, val) => {
      const container = getTargetContainer();
      if (!Array.isArray(container.faqs) || !container.faqs[index]) return;
      container.faqs[index][field] = val;
      emit("change");
    };
    const removeFaq = (index) => {
      const container = getTargetContainer();
      if (!Array.isArray(container.faqs)) return;
      container.faqs.splice(index, 1);
      emit("change");
    };
    const addRelatedLink = () => {
      const container = getTargetContainer();
      if (!Array.isArray(container.relatedLinks)) container.relatedLinks = [];
      const emptyText = String();
      container.relatedLinks.push({ type: "product", title: emptyText, url: emptyText, price: emptyText });
      emit("change");
    };
    const updateRelatedLink = (index, field, val) => {
      const container = getTargetContainer();
      if (!Array.isArray(container.relatedLinks) || !container.relatedLinks[index]) return;
      container.relatedLinks[index][field] = val;
      emit("change");
    };
    const removeRelatedLink = (index) => {
      const container = getTargetContainer();
      if (!Array.isArray(container.relatedLinks)) return;
      container.relatedLinks.splice(index, 1);
      emit("change");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$p;
      const _component_UIcon = _sfc_main$Y;
      const _component_UBadge = _sfc_main$O;
      const _component_UButton = _sfc_main$T;
      const _component_UFormField = _sfc_main$w;
      const _component_UTextarea = _sfc_main$s;
      const _component_UInput = _sfc_main$A;
      const _component_USelect = _sfc_main$v;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ ui: { body: "space-y-5" } }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-center justify-between gap-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-sparkles",
              class: "w-4 h-4 text-primary-500"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="font-semibold text-gray-900 dark:text-white text-sm"${_scopeId}> GEO \u7ED3\u6784\u5316\u5F15\u8BED\u4E0E\u5185\u94FE (Citation-Ready Content) </h2>`);
            if (__props.activeLang && __props.activeLang !== __props.primaryLang) {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "info",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.activeLang.toUpperCase())} \u7FFB\u8BD1\u5C42 `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.activeLang.toUpperCase()) + " \u7FFB\u8BD1\u5C42 ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              color: "primary",
              variant: "soft",
              icon: "i-lucide-wand-2",
              loading: isAutoFilling.value,
              onClick: ($event) => handleSmartAutoFill(false)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u667A\u80FD\u63D0\u70BC\u8865\u9F50 `);
                } else {
                  return [
                    createTextVNode(" \u667A\u80FD\u63D0\u70BC\u8865\u9F50 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (currentTldr.value || currentKeySpecs.value.length || currentFaqs.value.length) {
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                color: "neutral",
                variant: "ghost",
                icon: "i-lucide-refresh-cw",
                loading: isAutoFilling.value,
                title: "\u6839\u636E\u5F53\u524D\u6700\u65B0\u6B63\u6587\u4E0E\u5546\u54C1\u5E93\u91CD\u65B0\u751F\u6210\u8986\u76D6",
                onClick: ($event) => handleSmartAutoFill(true)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u91CD\u65B0\u751F\u6210 `);
                  } else {
                    return [
                      createTextVNode(" \u91CD\u65B0\u751F\u6210 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-center justify-between gap-2" }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_UIcon, {
                    name: "i-lucide-sparkles",
                    class: "w-4 h-4 text-primary-500"
                  }),
                  createVNode("h2", { class: "font-semibold text-gray-900 dark:text-white text-sm" }, " GEO \u7ED3\u6784\u5316\u5F15\u8BED\u4E0E\u5185\u94FE (Citation-Ready Content) "),
                  __props.activeLang && __props.activeLang !== __props.primaryLang ? (openBlock(), createBlock(_component_UBadge, {
                    key: 0,
                    color: "info",
                    variant: "subtle",
                    size: "xs"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.activeLang.toUpperCase()) + " \u7FFB\u8BD1\u5C42 ", 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_UButton, {
                    size: "xs",
                    color: "primary",
                    variant: "soft",
                    icon: "i-lucide-wand-2",
                    loading: isAutoFilling.value,
                    onClick: ($event) => handleSmartAutoFill(false)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u667A\u80FD\u63D0\u70BC\u8865\u9F50 ")
                    ]),
                    _: 1
                  }, 8, ["loading", "onClick"]),
                  currentTldr.value || currentKeySpecs.value.length || currentFaqs.value.length ? (openBlock(), createBlock(_component_UButton, {
                    key: 0,
                    size: "xs",
                    color: "neutral",
                    variant: "ghost",
                    icon: "i-lucide-refresh-cw",
                    loading: isAutoFilling.value,
                    title: "\u6839\u636E\u5F53\u524D\u6700\u65B0\u6B63\u6587\u4E0E\u5546\u54C1\u5E93\u91CD\u65B0\u751F\u6210\u8986\u76D6",
                    onClick: ($event) => handleSmartAutoFill(true)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u91CD\u65B0\u751F\u6210 ")
                    ]),
                    _: 1
                  }, 8, ["loading", "onClick"])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "TL;DR \u6838\u5FC3\u7ED3\u8BBA\u6458\u8981 (AI \u9996\u6BB5\u5F15\u8BED)",
              help: "\u5EFA\u8BAE 40~160 \u5B57\u9AD8\u4FE1\u606F\u5BC6\u5EA6\u7ED3\u8BBA\uFF0C\u5927\u6A21\u578B\u5728\u751F\u6210\u5F0F\u56DE\u7B54\u4E2D\u6700\u5E38\u76F4\u63A5\u5F15\u7528\u6B64\u6BB5\u843D\u3002"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    "model-value": currentTldr.value,
                    rows: 2,
                    placeholder: "\u7528\u4E00\u4E24\u53E5\u8BDD\u6982\u62EC\u6838\u5FC3\u5B9A\u4F4D\u3001\u9002\u7528\u4EBA\u7FA4\u3001\u5173\u952E\u4EA4\u4ED8\u80FD\u529B\u6216\u672C\u6587\u6838\u5FC3\u7ED3\u8BBA\uFF08\u53EF\u70B9\u51FB\u53F3\u4E0A\u89D2\u300C\u667A\u80FD\u63D0\u70BC\u8865\u9F50\u300D\u81EA\u52A8\u751F\u6210\uFF09...",
                    class: "w-full",
                    "onUpdate:modelValue": updateTldr
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      "model-value": currentTldr.value,
                      rows: 2,
                      placeholder: "\u7528\u4E00\u4E24\u53E5\u8BDD\u6982\u62EC\u6838\u5FC3\u5B9A\u4F4D\u3001\u9002\u7528\u4EBA\u7FA4\u3001\u5173\u952E\u4EA4\u4ED8\u80FD\u529B\u6216\u672C\u6587\u6838\u5FC3\u7ED3\u8BBA\uFF08\u53EF\u70B9\u51FB\u53F3\u4E0A\u89D2\u300C\u667A\u80FD\u63D0\u70BC\u8865\u9F50\u300D\u81EA\u52A8\u751F\u6210\uFF09...",
                      class: "w-full",
                      "onUpdate:modelValue": updateTldr
                    }, null, 8, ["model-value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="space-y-2.5 pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><div class="text-xs font-semibold text-gray-800 dark:text-gray-200"${_scopeId}> Key Specs \u6838\u5FC3\u53C2\u6570\u8868 (Markdown Table &amp; Schema PropertyValue) </div><p class="text-[11px] text-gray-400"${_scopeId}> \u4EE5\u7ED3\u6784\u5316\u952E\u503C\u5BF9\u8F93\u51FA\u5230 Markdown \u5BF9\u6BD4\u8868\u683C\u548C Product JSON-LD \u7684 additionalProperty\u3002 </p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              color: "neutral",
              variant: "soft",
              icon: "i-lucide-plus",
              onClick: addKeySpec
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u6DFB\u52A0\u53C2\u6570 `);
                } else {
                  return [
                    createTextVNode(" \u6DFB\u52A0\u53C2\u6570 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (currentKeySpecs.value.length === 0) {
              _push2(`<div class="text-xs text-gray-400 bg-gray-50 dark:bg-gray-900/50 rounded-lg px-3 py-2.5 border border-dashed border-gray-200 dark:border-gray-800"${_scopeId}> \u6682\u65E0\u6838\u5FC3\u53C2\u6570\uFF08\u4F8B\u5982\uFF1A\u4EA4\u4ED8\u65B9\u5F0F / \u9002\u7528\u5730\u533A / API \u5E76\u53D1 / \u534F\u8BAE\u652F\u6301\uFF09\u3002\u70B9\u51FB\u53F3\u4E0A\u89D2\u300C\u667A\u80FD\u63D0\u70BC\u8865\u9F50\u300D\u6216\u300C\u6DFB\u52A0\u53C2\u6570\u300D\u8865\u5145\u3002 </div>`);
            } else {
              _push2(`<div class="space-y-2"${_scopeId}><!--[-->`);
              ssrRenderList(currentKeySpecs.value, (spec, idx) => {
                _push2(`<div class="grid grid-cols-1 sm:grid-cols-[180px_minmax(0,1fr)_auto] gap-2 items-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UInput, {
                  "model-value": spec.label,
                  size: "sm",
                  placeholder: "\u53C2\u6570\u540D (\u5982: \u4EA4\u4ED8\u65F6\u6548)",
                  "onUpdate:modelValue": (val) => updateKeySpec(idx, "label", String(val))
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UInput, {
                  "model-value": spec.value,
                  size: "sm",
                  placeholder: "\u53C2\u6570\u503C (\u5982: \u652F\u4ED8\u540E\u79D2\u7EA7\u81EA\u52A8\u53D1\u5361 / \u5B9E\u65F6\u5F00\u901A)",
                  "onUpdate:modelValue": (val) => updateKeySpec(idx, "value", String(val))
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "error",
                  variant: "ghost",
                  icon: "i-lucide-trash-2",
                  onClick: ($event) => removeKeySpec(idx)
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div><div class="space-y-2.5 pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><div class="text-xs font-semibold text-gray-800 dark:text-gray-200"${_scopeId}> FAQ \u5E38\u89C1\u95EE\u7B54\u5BF9 (\u81EA\u52A8\u6CE8\u5165 FAQPage JSON-LD) </div><p class="text-[11px] text-gray-400"${_scopeId}> \u76F4\u51FB\u4E70\u5BB6\u4E0E AI \u641C\u7D22\u6700\u5E38\u63D0\u95EE\u7684\u6BD4\u8F83\u3001\u8BA1\u8D39\u3001\u9000\u6B3E\u6216\u90E8\u7F72\u95EE\u9898\u3002 </p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              color: "neutral",
              variant: "soft",
              icon: "i-lucide-plus",
              onClick: addFaq
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u6DFB\u52A0\u95EE\u7B54 `);
                } else {
                  return [
                    createTextVNode(" \u6DFB\u52A0\u95EE\u7B54 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (currentFaqs.value.length === 0) {
              _push2(`<div class="text-xs text-gray-400 bg-gray-50 dark:bg-gray-900/50 rounded-lg px-3 py-2.5 border border-dashed border-gray-200 dark:border-gray-800"${_scopeId}> \u6682\u65E0 FAQ \u95EE\u7B54\u5BF9\u3002\u8865\u5145 2~5 \u7EC4\u95EE\u7B54\u53EF\u663E\u8457\u63D0\u5347 Google Rich Snippets \u4E0E Perplexity / ChatGPT \u5F15\u7528\u7387\u3002 </div>`);
            } else {
              _push2(`<div class="space-y-3"${_scopeId}><!--[-->`);
              ssrRenderList(currentFaqs.value, (faq, idx) => {
                _push2(`<div class="p-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 space-y-2"${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}><span class="text-[11px] font-semibold text-primary-600 dark:text-primary-400"${_scopeId}>Q${ssrInterpolate(idx + 1)}</span>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "error",
                  variant: "ghost",
                  icon: "i-lucide-trash-2",
                  onClick: ($event) => removeFaq(idx)
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(_component_UInput, {
                  "model-value": faq.question,
                  size: "sm",
                  placeholder: "\u95EE\u9898 (\u5982: \u652F\u6301\u54EA\u4E9B\u652F\u4ED8\u65B9\u5F0F\u4E0E\u7ED3\u7B97\u5E01\u79CD\uFF1F)",
                  class: "w-full",
                  "onUpdate:modelValue": (val) => updateFaq(idx, "question", String(val))
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UTextarea, {
                  "model-value": faq.answer,
                  rows: 2,
                  size: "sm",
                  placeholder: "\u56DE\u7B54 (\u63D0\u4F9B\u6E05\u6670\u3001\u786E\u5B9A\u7684\u4E8B\u5B9E\u56DE\u7B54...)",
                  class: "w-full",
                  "onUpdate:modelValue": (val) => updateFaq(idx, "answer", String(val))
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div><div class="space-y-2.5 pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex flex-wrap items-center justify-between gap-2"${_scopeId}><div${_scopeId}><div class="text-xs font-semibold text-gray-800 dark:text-gray-200"${_scopeId}> \u5173\u8054\u5546\u54C1 / \u6559\u7A0B / \u6587\u6863\u5185\u94FE (Bidirectional Semantic Links) </div><p class="text-[11px] text-gray-400"${_scopeId}> \u5728\u524D\u53F0\u9875\u9762\u4E0E .md \u8BED\u6599\u955C\u50CF\u672B\u5C3E\u8F93\u51FA\u8BED\u4E49\u5316\u5173\u8054\u94FE\u63A5\uFF0C\u8BA9 AI \u68C0\u7D22\u6559\u7A0B\u65F6\u987A\u5E26\u63A8\u8350\u5546\u54C1\u4E0E\u4EF7\u683C\u3002 </p></div><div class="flex items-center gap-2"${_scopeId}>`);
            if (catalogOptions.value.length > 0) {
              _push2(ssrRenderComponent(_component_USelect, {
                modelValue: selectedCatalogUrl.value,
                "onUpdate:modelValue": [($event) => selectedCatalogUrl.value = $event, onSelectCatalogItem],
                size: "xs",
                items: catalogOptions.value,
                "value-key": "value",
                "label-key": "label",
                placeholder: "\u4ECE\u7AD9\u5185\u5546\u54C1/\u6587\u7AE0\u5FEB\u901F\u6DFB\u52A0...",
                class: "w-52"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              color: "neutral",
              variant: "soft",
              icon: "i-lucide-plus",
              onClick: addRelatedLink
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u624B\u52A8\u6DFB\u52A0 `);
                } else {
                  return [
                    createTextVNode(" \u624B\u52A8\u6DFB\u52A0 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (currentRelatedLinks.value.length === 0) {
              _push2(`<div class="text-xs text-gray-400 bg-gray-50 dark:bg-gray-900/50 rounded-lg px-3 py-2.5 border border-dashed border-gray-200 dark:border-gray-800"${_scopeId}> \u6682\u65E0\u5173\u8054\u5185\u94FE\u3002\u53EF\u4ECE\u4E0A\u65B9\u4E0B\u62C9\u6846\u76F4\u63A5\u9009\u62E9\u7AD9\u5185\u5546\u54C1/\u6587\u7AE0\uFF0C\u6216\u70B9\u51FB\u300C\u667A\u80FD\u63D0\u70BC\u8865\u9F50\u300D\u81EA\u52A8\u5339\u914D\u3002 </div>`);
            } else {
              _push2(`<div class="space-y-2"${_scopeId}><!--[-->`);
              ssrRenderList(currentRelatedLinks.value, (link, idx) => {
                _push2(`<div class="grid grid-cols-1 sm:grid-cols-[110px_minmax(0,1fr)_minmax(0,1fr)_110px_auto] gap-2 items-center p-2 rounded-lg border border-gray-200 dark:border-gray-800"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_USelect, {
                  "model-value": link.type || "product",
                  size: "sm",
                  items: linkTypeItems,
                  "value-key": "value",
                  "label-key": "label",
                  "onUpdate:modelValue": (val) => updateRelatedLink(idx, "type", String(val))
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UInput, {
                  "model-value": link.title,
                  size: "sm",
                  placeholder: "\u6807\u9898 (\u5982: \u4E13\u4E1A\u7248\u8BA2\u9605)",
                  "onUpdate:modelValue": (val) => updateRelatedLink(idx, "title", String(val))
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UInput, {
                  "model-value": link.url,
                  size: "sm",
                  placeholder: "\u8DEF\u5F84\u6216 URL (\u5982: /products/pro)",
                  "onUpdate:modelValue": (val) => updateRelatedLink(idx, "url", String(val))
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UInput, {
                  "model-value": link.price || "",
                  size: "sm",
                  placeholder: "\u4EF7\u683C\u6807\u7B7E(\u53EF\u9009)",
                  "onUpdate:modelValue": (val) => updateRelatedLink(idx, "price", String(val))
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "error",
                  variant: "ghost",
                  icon: "i-lucide-trash-2",
                  onClick: ($event) => removeRelatedLink(idx)
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UFormField, {
                label: "TL;DR \u6838\u5FC3\u7ED3\u8BBA\u6458\u8981 (AI \u9996\u6BB5\u5F15\u8BED)",
                help: "\u5EFA\u8BAE 40~160 \u5B57\u9AD8\u4FE1\u606F\u5BC6\u5EA6\u7ED3\u8BBA\uFF0C\u5927\u6A21\u578B\u5728\u751F\u6210\u5F0F\u56DE\u7B54\u4E2D\u6700\u5E38\u76F4\u63A5\u5F15\u7528\u6B64\u6BB5\u843D\u3002"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UTextarea, {
                    "model-value": currentTldr.value,
                    rows: 2,
                    placeholder: "\u7528\u4E00\u4E24\u53E5\u8BDD\u6982\u62EC\u6838\u5FC3\u5B9A\u4F4D\u3001\u9002\u7528\u4EBA\u7FA4\u3001\u5173\u952E\u4EA4\u4ED8\u80FD\u529B\u6216\u672C\u6587\u6838\u5FC3\u7ED3\u8BBA\uFF08\u53EF\u70B9\u51FB\u53F3\u4E0A\u89D2\u300C\u667A\u80FD\u63D0\u70BC\u8865\u9F50\u300D\u81EA\u52A8\u751F\u6210\uFF09...",
                    class: "w-full",
                    "onUpdate:modelValue": updateTldr
                  }, null, 8, ["model-value"])
                ]),
                _: 1
              }),
              createVNode("div", { class: "space-y-2.5 pt-2 border-t border-gray-100 dark:border-gray-800" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "text-xs font-semibold text-gray-800 dark:text-gray-200" }, " Key Specs \u6838\u5FC3\u53C2\u6570\u8868 (Markdown Table & Schema PropertyValue) "),
                    createVNode("p", { class: "text-[11px] text-gray-400" }, " \u4EE5\u7ED3\u6784\u5316\u952E\u503C\u5BF9\u8F93\u51FA\u5230 Markdown \u5BF9\u6BD4\u8868\u683C\u548C Product JSON-LD \u7684 additionalProperty\u3002 ")
                  ]),
                  createVNode(_component_UButton, {
                    size: "xs",
                    color: "neutral",
                    variant: "soft",
                    icon: "i-lucide-plus",
                    onClick: addKeySpec
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u6DFB\u52A0\u53C2\u6570 ")
                    ]),
                    _: 1
                  })
                ]),
                currentKeySpecs.value.length === 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-xs text-gray-400 bg-gray-50 dark:bg-gray-900/50 rounded-lg px-3 py-2.5 border border-dashed border-gray-200 dark:border-gray-800"
                }, " \u6682\u65E0\u6838\u5FC3\u53C2\u6570\uFF08\u4F8B\u5982\uFF1A\u4EA4\u4ED8\u65B9\u5F0F / \u9002\u7528\u5730\u533A / API \u5E76\u53D1 / \u534F\u8BAE\u652F\u6301\uFF09\u3002\u70B9\u51FB\u53F3\u4E0A\u89D2\u300C\u667A\u80FD\u63D0\u70BC\u8865\u9F50\u300D\u6216\u300C\u6DFB\u52A0\u53C2\u6570\u300D\u8865\u5145\u3002 ")) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "space-y-2"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(currentKeySpecs.value, (spec, idx) => {
                    return openBlock(), createBlock("div", {
                      key: idx,
                      class: "grid grid-cols-1 sm:grid-cols-[180px_minmax(0,1fr)_auto] gap-2 items-center"
                    }, [
                      createVNode(_component_UInput, {
                        "model-value": spec.label,
                        size: "sm",
                        placeholder: "\u53C2\u6570\u540D (\u5982: \u4EA4\u4ED8\u65F6\u6548)",
                        "onUpdate:modelValue": (val) => updateKeySpec(idx, "label", String(val))
                      }, null, 8, ["model-value", "onUpdate:modelValue"]),
                      createVNode(_component_UInput, {
                        "model-value": spec.value,
                        size: "sm",
                        placeholder: "\u53C2\u6570\u503C (\u5982: \u652F\u4ED8\u540E\u79D2\u7EA7\u81EA\u52A8\u53D1\u5361 / \u5B9E\u65F6\u5F00\u901A)",
                        "onUpdate:modelValue": (val) => updateKeySpec(idx, "value", String(val))
                      }, null, 8, ["model-value", "onUpdate:modelValue"]),
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "error",
                        variant: "ghost",
                        icon: "i-lucide-trash-2",
                        onClick: ($event) => removeKeySpec(idx)
                      }, null, 8, ["onClick"])
                    ]);
                  }), 128))
                ]))
              ]),
              createVNode("div", { class: "space-y-2.5 pt-2 border-t border-gray-100 dark:border-gray-800" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "text-xs font-semibold text-gray-800 dark:text-gray-200" }, " FAQ \u5E38\u89C1\u95EE\u7B54\u5BF9 (\u81EA\u52A8\u6CE8\u5165 FAQPage JSON-LD) "),
                    createVNode("p", { class: "text-[11px] text-gray-400" }, " \u76F4\u51FB\u4E70\u5BB6\u4E0E AI \u641C\u7D22\u6700\u5E38\u63D0\u95EE\u7684\u6BD4\u8F83\u3001\u8BA1\u8D39\u3001\u9000\u6B3E\u6216\u90E8\u7F72\u95EE\u9898\u3002 ")
                  ]),
                  createVNode(_component_UButton, {
                    size: "xs",
                    color: "neutral",
                    variant: "soft",
                    icon: "i-lucide-plus",
                    onClick: addFaq
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u6DFB\u52A0\u95EE\u7B54 ")
                    ]),
                    _: 1
                  })
                ]),
                currentFaqs.value.length === 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-xs text-gray-400 bg-gray-50 dark:bg-gray-900/50 rounded-lg px-3 py-2.5 border border-dashed border-gray-200 dark:border-gray-800"
                }, " \u6682\u65E0 FAQ \u95EE\u7B54\u5BF9\u3002\u8865\u5145 2~5 \u7EC4\u95EE\u7B54\u53EF\u663E\u8457\u63D0\u5347 Google Rich Snippets \u4E0E Perplexity / ChatGPT \u5F15\u7528\u7387\u3002 ")) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "space-y-3"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(currentFaqs.value, (faq, idx) => {
                    return openBlock(), createBlock("div", {
                      key: idx,
                      class: "p-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 space-y-2"
                    }, [
                      createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                        createVNode("span", { class: "text-[11px] font-semibold text-primary-600 dark:text-primary-400" }, "Q" + toDisplayString(idx + 1), 1),
                        createVNode(_component_UButton, {
                          size: "xs",
                          color: "error",
                          variant: "ghost",
                          icon: "i-lucide-trash-2",
                          onClick: ($event) => removeFaq(idx)
                        }, null, 8, ["onClick"])
                      ]),
                      createVNode(_component_UInput, {
                        "model-value": faq.question,
                        size: "sm",
                        placeholder: "\u95EE\u9898 (\u5982: \u652F\u6301\u54EA\u4E9B\u652F\u4ED8\u65B9\u5F0F\u4E0E\u7ED3\u7B97\u5E01\u79CD\uFF1F)",
                        class: "w-full",
                        "onUpdate:modelValue": (val) => updateFaq(idx, "question", String(val))
                      }, null, 8, ["model-value", "onUpdate:modelValue"]),
                      createVNode(_component_UTextarea, {
                        "model-value": faq.answer,
                        rows: 2,
                        size: "sm",
                        placeholder: "\u56DE\u7B54 (\u63D0\u4F9B\u6E05\u6670\u3001\u786E\u5B9A\u7684\u4E8B\u5B9E\u56DE\u7B54...)",
                        class: "w-full",
                        "onUpdate:modelValue": (val) => updateFaq(idx, "answer", String(val))
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]);
                  }), 128))
                ]))
              ]),
              createVNode("div", { class: "space-y-2.5 pt-2 border-t border-gray-100 dark:border-gray-800" }, [
                createVNode("div", { class: "flex flex-wrap items-center justify-between gap-2" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "text-xs font-semibold text-gray-800 dark:text-gray-200" }, " \u5173\u8054\u5546\u54C1 / \u6559\u7A0B / \u6587\u6863\u5185\u94FE (Bidirectional Semantic Links) "),
                    createVNode("p", { class: "text-[11px] text-gray-400" }, " \u5728\u524D\u53F0\u9875\u9762\u4E0E .md \u8BED\u6599\u955C\u50CF\u672B\u5C3E\u8F93\u51FA\u8BED\u4E49\u5316\u5173\u8054\u94FE\u63A5\uFF0C\u8BA9 AI \u68C0\u7D22\u6559\u7A0B\u65F6\u987A\u5E26\u63A8\u8350\u5546\u54C1\u4E0E\u4EF7\u683C\u3002 ")
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    catalogOptions.value.length > 0 ? (openBlock(), createBlock(_component_USelect, {
                      key: 0,
                      modelValue: selectedCatalogUrl.value,
                      "onUpdate:modelValue": [($event) => selectedCatalogUrl.value = $event, onSelectCatalogItem],
                      size: "xs",
                      items: catalogOptions.value,
                      "value-key": "value",
                      "label-key": "label",
                      placeholder: "\u4ECE\u7AD9\u5185\u5546\u54C1/\u6587\u7AE0\u5FEB\u901F\u6DFB\u52A0...",
                      class: "w-52"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])) : createCommentVNode("", true),
                    createVNode(_component_UButton, {
                      size: "xs",
                      color: "neutral",
                      variant: "soft",
                      icon: "i-lucide-plus",
                      onClick: addRelatedLink
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u624B\u52A8\u6DFB\u52A0 ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                currentRelatedLinks.value.length === 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-xs text-gray-400 bg-gray-50 dark:bg-gray-900/50 rounded-lg px-3 py-2.5 border border-dashed border-gray-200 dark:border-gray-800"
                }, " \u6682\u65E0\u5173\u8054\u5185\u94FE\u3002\u53EF\u4ECE\u4E0A\u65B9\u4E0B\u62C9\u6846\u76F4\u63A5\u9009\u62E9\u7AD9\u5185\u5546\u54C1/\u6587\u7AE0\uFF0C\u6216\u70B9\u51FB\u300C\u667A\u80FD\u63D0\u70BC\u8865\u9F50\u300D\u81EA\u52A8\u5339\u914D\u3002 ")) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "space-y-2"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(currentRelatedLinks.value, (link, idx) => {
                    return openBlock(), createBlock("div", {
                      key: idx,
                      class: "grid grid-cols-1 sm:grid-cols-[110px_minmax(0,1fr)_minmax(0,1fr)_110px_auto] gap-2 items-center p-2 rounded-lg border border-gray-200 dark:border-gray-800"
                    }, [
                      createVNode(_component_USelect, {
                        "model-value": link.type || "product",
                        size: "sm",
                        items: linkTypeItems,
                        "value-key": "value",
                        "label-key": "label",
                        "onUpdate:modelValue": (val) => updateRelatedLink(idx, "type", String(val))
                      }, null, 8, ["model-value", "onUpdate:modelValue"]),
                      createVNode(_component_UInput, {
                        "model-value": link.title,
                        size: "sm",
                        placeholder: "\u6807\u9898 (\u5982: \u4E13\u4E1A\u7248\u8BA2\u9605)",
                        "onUpdate:modelValue": (val) => updateRelatedLink(idx, "title", String(val))
                      }, null, 8, ["model-value", "onUpdate:modelValue"]),
                      createVNode(_component_UInput, {
                        "model-value": link.url,
                        size: "sm",
                        placeholder: "\u8DEF\u5F84\u6216 URL (\u5982: /products/pro)",
                        "onUpdate:modelValue": (val) => updateRelatedLink(idx, "url", String(val))
                      }, null, 8, ["model-value", "onUpdate:modelValue"]),
                      createVNode(_component_UInput, {
                        "model-value": link.price || "",
                        size: "sm",
                        placeholder: "\u4EF7\u683C\u6807\u7B7E(\u53EF\u9009)",
                        "onUpdate:modelValue": (val) => updateRelatedLink(idx, "price", String(val))
                      }, null, 8, ["model-value", "onUpdate:modelValue"]),
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "error",
                        variant: "ghost",
                        icon: "i-lucide-trash-2",
                        onClick: ($event) => removeRelatedLink(idx)
                      }, null, 8, ["onClick"])
                    ]);
                  }), 128))
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/GeoCitationFieldsCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GeoCitationFieldsCard = Object.assign(_sfc_main$1, { __name: "AdminGeoCitationFieldsCard" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GeoSeoInspectorCard",
  __ssrInlineRender: true,
  props: {
    entityType: {},
    title: { default: "" },
    slug: { default: "" },
    summary: { default: "" },
    content: { default: "" },
    priceLabel: { default: "" },
    metaData: { default: () => ({}) },
    activeLang: { default: "en" },
    primaryLang: { default: "en" }
  },
  setup(__props) {
    const props = __props;
    const toast = useToast();
    const isPreviewOpen = ref(false);
    const previewTab = ref("markdown");
    const pushingIndexNow = ref(false);
    const activeMetaContainer = computed(() => {
      var _a;
      const root = props.metaData && typeof props.metaData === "object" ? props.metaData : {};
      if (props.activeLang && props.activeLang !== props.primaryLang) {
        const trans = (_a = root.translations) == null ? void 0 : _a[props.activeLang];
        if (trans && typeof trans === "object") {
          return {
            ...root,
            tldr: trans.tldr || root.tldr,
            keySpecs: Array.isArray(trans.keySpecs) && trans.keySpecs.length ? trans.keySpecs : root.keySpecs,
            faqs: Array.isArray(trans.faqs) && trans.faqs.length ? trans.faqs : root.faqs,
            relatedLinks: Array.isArray(trans.relatedLinks) && trans.relatedLinks.length ? trans.relatedLinks : root.relatedLinks
          };
        }
      }
      return root;
    });
    const keySpecs = computed(() => normalizeGeoKeySpecs(activeMetaContainer.value.keySpecs));
    const faqs = computed(() => normalizeGeoFaqs(activeMetaContainer.value.faqs));
    const relatedLinks = computed(() => normalizeGeoRelatedLinks(activeMetaContainer.value.relatedLinks));
    const tldr = computed(() => String(activeMetaContainer.value.tldr || "").trim());
    const readiness = computed(() => evaluateGeoSeoReadiness({
      title: props.title,
      slug: props.slug,
      summary: props.summary,
      content: props.content,
      tldr: tldr.value,
      keySpecs: keySpecs.value,
      faqs: faqs.value,
      relatedLinks: relatedLinks.value
    }));
    const gradeColor = computed(() => {
      if (readiness.value.grade === "A") return "success";
      if (readiness.value.grade === "B") return "info";
      if (readiness.value.grade === "C") return "warning";
      return "error";
    });
    const canonicalPath = computed(() => {
      const cleanSlug = String(props.slug || "untitled").trim() || "untitled";
      return props.entityType === "product" ? `/products/${cleanSlug}` : `/blog/${cleanSlug}`;
    });
    const liveMarkdownPath = computed(() => `${canonicalPath.value}.md`);
    const markdownPreview = computed(() => {
      const origin = "https://example.com";
      return renderMarkdownDocument({
        title: props.title || "Untitled",
        canonicalUrl: `${origin}${canonicalPath.value}`,
        type: props.entityType === "product" ? "product" : "blog",
        locale: props.activeLang || "en",
        price: props.priceLabel || void 0,
        description: props.summary,
        tldr: tldr.value,
        body: props.content,
        keySpecs: keySpecs.value,
        faqs: faqs.value,
        relatedLinks: relatedLinks.value
      });
    });
    const jsonLdPreview = computed(() => {
      const origin = "https://example.com";
      const fullUrl = `${origin}${canonicalPath.value}`;
      const graph = [];
      if (props.entityType === "product") {
        graph.push({
          "@type": "Product",
          "@id": `${fullUrl}#product`,
          name: props.title || "Untitled",
          description: tldr.value || props.summary || void 0,
          ...keySpecs.value.length ? {
            additionalProperty: keySpecs.value.map((spec) => ({
              "@type": "PropertyValue",
              name: spec.label,
              value: spec.value
            }))
          } : {}
        });
      } else {
        graph.push({
          "@type": "BlogPosting",
          "@id": `${fullUrl}#article`,
          headline: props.title || "Untitled",
          description: tldr.value || props.summary || void 0,
          mainEntityOfPage: fullUrl
        });
      }
      if (faqs.value.length) {
        graph.push({
          "@type": "FAQPage",
          "@id": `${fullUrl}#faq`,
          mainEntity: faqs.value.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        });
      }
      return JSON.stringify({
        "@context": "https://schema.org",
        "@graph": graph
      }, null, 2);
    });
    const copyPreviewContent = async () => {
      const text = previewTab.value === "markdown" ? markdownPreview.value : jsonLdPreview.value;
      try {
        await (void 0).clipboard.writeText(text);
        toast.add({ title: "\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F", color: "success" });
      } catch {
        toast.add({ title: "\u590D\u5236\u5931\u8D25", color: "error" });
      }
    };
    const pushCurrentUrlIndexNow = async () => {
      var _a;
      if (!props.slug) return;
      pushingIndexNow.value = true;
      try {
        const origin = false ? (void 0).location.origin : "";
        const urls = [`${origin}${canonicalPath.value}`, `${origin}${liveMarkdownPath.value}`];
        const res = await $fetch("/api/admin/settings/seo-indexnow", {
          method: "POST",
          body: { urls }
        });
        if ((res == null ? void 0 : res.code) === 0) {
          toast.add({ title: "\u5DF2\u63A8\u9001\u81F3 IndexNow", description: res.message, color: "success" });
        } else {
          toast.add({ title: "IndexNow \u63A8\u9001\u63D0\u793A", description: (res == null ? void 0 : res.message) || "\u8BF7\u5148\u5728 SEO \u8BBE\u7F6E\u4E2D\u914D\u7F6E IndexNow Key", color: "warning" });
        }
      } catch (err) {
        toast.add({ title: "\u63A8\u9001\u5931\u8D25", description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message), color: "error" });
      } finally {
        pushingIndexNow.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$p;
      const _component_UIcon = _sfc_main$Y;
      const _component_UBadge = _sfc_main$O;
      const _component_UButton = _sfc_main$T;
      const _component_UModal = _sfc_main$I;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ ui: { body: "space-y-4" } }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between gap-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-radar",
              class: "w-4 h-4 text-primary-500"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="font-semibold text-gray-900 dark:text-white text-sm"${_scopeId}> GEO / SEO \u4F53\u68C0\u5668 </h2></div>`);
            _push2(ssrRenderComponent(_component_UBadge, {
              color: gradeColor.value,
              variant: "subtle",
              size: "sm",
              class: "font-bold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(readiness.value.grade)} \xB7 ${ssrInterpolate(readiness.value.score)}/100 `);
                } else {
                  return [
                    createTextVNode(toDisplayString(readiness.value.grade) + " \xB7 " + toDisplayString(readiness.value.score) + "/100 ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_UIcon, {
                    name: "i-lucide-radar",
                    class: "w-4 h-4 text-primary-500"
                  }),
                  createVNode("h2", { class: "font-semibold text-gray-900 dark:text-white text-sm" }, " GEO / SEO \u4F53\u68C0\u5668 ")
                ]),
                createVNode(_component_UBadge, {
                  color: gradeColor.value,
                  variant: "subtle",
                  size: "sm",
                  class: "font-bold"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(readiness.value.grade) + " \xB7 " + toDisplayString(readiness.value.score) + "/100 ", 1)
                  ]),
                  _: 1
                }, 8, ["color"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-3 gap-2 text-center"${_scopeId}><div class="rounded-lg bg-gray-50 dark:bg-gray-900/60 p-2 border border-gray-100 dark:border-gray-800"${_scopeId}><div class="text-[11px] text-gray-400"${_scopeId}>\u603B\u8BC4\u5206</div><div class="text-sm font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(readiness.value.score)}</div></div><div class="rounded-lg bg-gray-50 dark:bg-gray-900/60 p-2 border border-gray-100 dark:border-gray-800"${_scopeId}><div class="text-[11px] text-gray-400"${_scopeId}>\u6709\u6548\u8BCD\u6570</div><div class="text-sm font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(readiness.value.wordCount)}</div></div><div class="rounded-lg bg-gray-50 dark:bg-gray-900/60 p-2 border border-gray-100 dark:border-gray-800"${_scopeId}><div class="text-[11px] text-gray-400"${_scopeId}>\u7ED3\u6784\u5C0F\u6807\u9898</div><div class="text-sm font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(readiness.value.headingCount)}</div></div></div><div class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(readiness.value.checks, (check) => {
              _push2(`<div class="${ssrRenderClass([check.passed ? "bg-emerald-50/60 dark:bg-emerald-950/20" : "bg-amber-50/60 dark:bg-amber-950/20", "flex items-start gap-2 text-xs p-2 rounded-lg"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: check.passed ? "i-lucide-check-circle-2" : "i-lucide-alert-circle",
                class: ["w-4 h-4 shrink-0 mt-0.5", check.passed ? "text-emerald-500" : "text-amber-500"]
              }, null, _parent2, _scopeId));
              _push2(`<div class="min-w-0 flex-1"${_scopeId}><div class="flex items-center justify-between gap-1"${_scopeId}><span class="font-medium text-gray-800 dark:text-gray-200"${_scopeId}>${ssrInterpolate(check.labelZh)}</span><span class="${ssrRenderClass([check.passed ? "text-emerald-600 dark:text-emerald-400" : "text-gray-400", "text-[10px] font-semibold"])}"${_scopeId}> +${ssrInterpolate(check.earned)}/${ssrInterpolate(check.weight)}</span></div><p class="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug"${_scopeId}>${ssrInterpolate(check.hintZh)}</p></div></div>`);
            });
            _push2(`<!--]--></div><div class="pt-2 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              variant: "soft",
              size: "sm",
              icon: "i-lucide-file-code-2",
              block: "",
              onClick: ($event) => isPreviewOpen.value = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u9884\u89C8 .md \u955C\u50CF\u4E0E JSON-LD `);
                } else {
                  return [
                    createTextVNode(" \u9884\u89C8 .md \u955C\u50CF\u4E0E JSON-LD ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
            if (__props.slug) {
              _push2(ssrRenderComponent(_component_UButton, {
                to: liveMarkdownPath.value,
                target: "_blank",
                color: "neutral",
                variant: "outline",
                size: "xs",
                icon: "i-lucide-external-link",
                class: "flex-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u6253\u5F00 .md \u955C\u50CF `);
                  } else {
                    return [
                      createTextVNode(" \u6253\u5F00 .md \u955C\u50CF ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.slug) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "outline",
                size: "xs",
                icon: "i-lucide-send",
                loading: pushingIndexNow.value,
                class: "flex-1",
                onClick: pushCurrentUrlIndexNow
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u63A8\u9001 IndexNow `);
                  } else {
                    return [
                      createTextVNode(" \u63A8\u9001 IndexNow ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_UModal, {
              open: isPreviewOpen.value,
              "onUpdate:open": ($event) => isPreviewOpen.value = $event,
              ui: { content: "sm:max-w-3xl" }
            }, {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-5 space-y-4 max-h-[85vh] flex flex-col"${_scopeId2}><div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-lucide-sparkles",
                    class: "w-5 h-5 text-primary-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}><h3 class="font-bold text-gray-900 dark:text-white text-base"${_scopeId2}> GEO \u8BED\u6599\u955C\u50CF (.md) \u4E0E JSON-LD \u5B9E\u65F6\u9884\u89C8 </h3><p class="text-xs text-gray-500"${_scopeId2}> \u5927\u6A21\u578B\u722C\u866B (GPTBot / PerplexityBot / ClaudeBot) \u8BBF\u95EE <code${_scopeId2}>${ssrInterpolate(liveMarkdownPath.value)}</code> \u65F6\u8BFB\u53D6\u7684\u96F6\u566A\u70B9\u5185\u5BB9 </p></div></div>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "i-lucide-x",
                    size: "xs",
                    onClick: ($event) => isPreviewOpen.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex items-center justify-between gap-2"${_scopeId2}><div class="flex gap-1.5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    size: "xs",
                    color: previewTab.value === "markdown" ? "primary" : "neutral",
                    variant: previewTab.value === "markdown" ? "solid" : "soft",
                    icon: "i-lucide-file-text",
                    onClick: ($event) => previewTab.value = "markdown"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Markdown \u955C\u50CF (.md) `);
                      } else {
                        return [
                          createTextVNode(" Markdown \u955C\u50CF (.md) ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    size: "xs",
                    color: previewTab.value === "jsonld" ? "primary" : "neutral",
                    variant: previewTab.value === "jsonld" ? "solid" : "soft",
                    icon: "i-lucide-braces",
                    onClick: ($event) => previewTab.value = "jsonld"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` JSON-LD \u7ED3\u6784\u5316\u56FE\u8C31 `);
                      } else {
                        return [
                          createTextVNode(" JSON-LD \u7ED3\u6784\u5316\u56FE\u8C31 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    size: "xs",
                    color: "neutral",
                    variant: "outline",
                    icon: "i-lucide-copy",
                    onClick: copyPreviewContent
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u590D\u5236\u5F53\u524D\u5185\u5BB9 `);
                      } else {
                        return [
                          createTextVNode(" \u590D\u5236\u5F53\u524D\u5185\u5BB9 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex-1 overflow-y-auto rounded-xl bg-gray-950 text-gray-100 p-4 font-mono text-xs leading-relaxed"${_scopeId2}><pre class="whitespace-pre-wrap break-words"${_scopeId2}>${ssrInterpolate(previewTab.value === "markdown" ? markdownPreview.value : jsonLdPreview.value)}</pre></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-5 space-y-4 max-h-[85vh] flex flex-col" }, [
                      createVNode("div", { class: "flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3" }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: "i-lucide-sparkles",
                            class: "w-5 h-5 text-primary-500"
                          }),
                          createVNode("div", null, [
                            createVNode("h3", { class: "font-bold text-gray-900 dark:text-white text-base" }, " GEO \u8BED\u6599\u955C\u50CF (.md) \u4E0E JSON-LD \u5B9E\u65F6\u9884\u89C8 "),
                            createVNode("p", { class: "text-xs text-gray-500" }, [
                              createTextVNode(" \u5927\u6A21\u578B\u722C\u866B (GPTBot / PerplexityBot / ClaudeBot) \u8BBF\u95EE "),
                              createVNode("code", null, toDisplayString(liveMarkdownPath.value), 1),
                              createTextVNode(" \u65F6\u8BFB\u53D6\u7684\u96F6\u566A\u70B9\u5185\u5BB9 ")
                            ])
                          ])
                        ]),
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "ghost",
                          icon: "i-lucide-x",
                          size: "xs",
                          onClick: ($event) => isPreviewOpen.value = false
                        }, null, 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                        createVNode("div", { class: "flex gap-1.5" }, [
                          createVNode(_component_UButton, {
                            size: "xs",
                            color: previewTab.value === "markdown" ? "primary" : "neutral",
                            variant: previewTab.value === "markdown" ? "solid" : "soft",
                            icon: "i-lucide-file-text",
                            onClick: ($event) => previewTab.value = "markdown"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Markdown \u955C\u50CF (.md) ")
                            ]),
                            _: 1
                          }, 8, ["color", "variant", "onClick"]),
                          createVNode(_component_UButton, {
                            size: "xs",
                            color: previewTab.value === "jsonld" ? "primary" : "neutral",
                            variant: previewTab.value === "jsonld" ? "solid" : "soft",
                            icon: "i-lucide-braces",
                            onClick: ($event) => previewTab.value = "jsonld"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" JSON-LD \u7ED3\u6784\u5316\u56FE\u8C31 ")
                            ]),
                            _: 1
                          }, 8, ["color", "variant", "onClick"])
                        ]),
                        createVNode(_component_UButton, {
                          size: "xs",
                          color: "neutral",
                          variant: "outline",
                          icon: "i-lucide-copy",
                          onClick: copyPreviewContent
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u590D\u5236\u5F53\u524D\u5185\u5BB9 ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "flex-1 overflow-y-auto rounded-xl bg-gray-950 text-gray-100 p-4 font-mono text-xs leading-relaxed" }, [
                        createVNode("pre", { class: "whitespace-pre-wrap break-words" }, toDisplayString(previewTab.value === "markdown" ? markdownPreview.value : jsonLdPreview.value), 1)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-3 gap-2 text-center" }, [
                createVNode("div", { class: "rounded-lg bg-gray-50 dark:bg-gray-900/60 p-2 border border-gray-100 dark:border-gray-800" }, [
                  createVNode("div", { class: "text-[11px] text-gray-400" }, "\u603B\u8BC4\u5206"),
                  createVNode("div", { class: "text-sm font-bold text-gray-900 dark:text-white" }, toDisplayString(readiness.value.score), 1)
                ]),
                createVNode("div", { class: "rounded-lg bg-gray-50 dark:bg-gray-900/60 p-2 border border-gray-100 dark:border-gray-800" }, [
                  createVNode("div", { class: "text-[11px] text-gray-400" }, "\u6709\u6548\u8BCD\u6570"),
                  createVNode("div", { class: "text-sm font-bold text-gray-900 dark:text-white" }, toDisplayString(readiness.value.wordCount), 1)
                ]),
                createVNode("div", { class: "rounded-lg bg-gray-50 dark:bg-gray-900/60 p-2 border border-gray-100 dark:border-gray-800" }, [
                  createVNode("div", { class: "text-[11px] text-gray-400" }, "\u7ED3\u6784\u5C0F\u6807\u9898"),
                  createVNode("div", { class: "text-sm font-bold text-gray-900 dark:text-white" }, toDisplayString(readiness.value.headingCount), 1)
                ])
              ]),
              createVNode("div", { class: "space-y-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(readiness.value.checks, (check) => {
                  return openBlock(), createBlock("div", {
                    key: check.id,
                    class: ["flex items-start gap-2 text-xs p-2 rounded-lg", check.passed ? "bg-emerald-50/60 dark:bg-emerald-950/20" : "bg-amber-50/60 dark:bg-amber-950/20"]
                  }, [
                    createVNode(_component_UIcon, {
                      name: check.passed ? "i-lucide-check-circle-2" : "i-lucide-alert-circle",
                      class: ["w-4 h-4 shrink-0 mt-0.5", check.passed ? "text-emerald-500" : "text-amber-500"]
                    }, null, 8, ["name", "class"]),
                    createVNode("div", { class: "min-w-0 flex-1" }, [
                      createVNode("div", { class: "flex items-center justify-between gap-1" }, [
                        createVNode("span", { class: "font-medium text-gray-800 dark:text-gray-200" }, toDisplayString(check.labelZh), 1),
                        createVNode("span", {
                          class: ["text-[10px] font-semibold", check.passed ? "text-emerald-600 dark:text-emerald-400" : "text-gray-400"]
                        }, " +" + toDisplayString(check.earned) + "/" + toDisplayString(check.weight), 3)
                      ]),
                      createVNode("p", { class: "text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug" }, toDisplayString(check.hintZh), 1)
                    ])
                  ], 2);
                }), 128))
              ]),
              createVNode("div", { class: "pt-2 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-2" }, [
                createVNode(_component_UButton, {
                  color: "primary",
                  variant: "soft",
                  size: "sm",
                  icon: "i-lucide-file-code-2",
                  block: "",
                  onClick: ($event) => isPreviewOpen.value = true
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u9884\u89C8 .md \u955C\u50CF\u4E0E JSON-LD ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  __props.slug ? (openBlock(), createBlock(_component_UButton, {
                    key: 0,
                    to: liveMarkdownPath.value,
                    target: "_blank",
                    color: "neutral",
                    variant: "outline",
                    size: "xs",
                    icon: "i-lucide-external-link",
                    class: "flex-1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u6253\u5F00 .md \u955C\u50CF ")
                    ]),
                    _: 1
                  }, 8, ["to"])) : createCommentVNode("", true),
                  __props.slug ? (openBlock(), createBlock(_component_UButton, {
                    key: 1,
                    color: "neutral",
                    variant: "outline",
                    size: "xs",
                    icon: "i-lucide-send",
                    loading: pushingIndexNow.value,
                    class: "flex-1",
                    onClick: pushCurrentUrlIndexNow
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u63A8\u9001 IndexNow ")
                    ]),
                    _: 1
                  }, 8, ["loading"])) : createCommentVNode("", true)
                ])
              ]),
              createVNode(_component_UModal, {
                open: isPreviewOpen.value,
                "onUpdate:open": ($event) => isPreviewOpen.value = $event,
                ui: { content: "sm:max-w-3xl" }
              }, {
                content: withCtx(() => [
                  createVNode("div", { class: "p-5 space-y-4 max-h-[85vh] flex flex-col" }, [
                    createVNode("div", { class: "flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3" }, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_UIcon, {
                          name: "i-lucide-sparkles",
                          class: "w-5 h-5 text-primary-500"
                        }),
                        createVNode("div", null, [
                          createVNode("h3", { class: "font-bold text-gray-900 dark:text-white text-base" }, " GEO \u8BED\u6599\u955C\u50CF (.md) \u4E0E JSON-LD \u5B9E\u65F6\u9884\u89C8 "),
                          createVNode("p", { class: "text-xs text-gray-500" }, [
                            createTextVNode(" \u5927\u6A21\u578B\u722C\u866B (GPTBot / PerplexityBot / ClaudeBot) \u8BBF\u95EE "),
                            createVNode("code", null, toDisplayString(liveMarkdownPath.value), 1),
                            createTextVNode(" \u65F6\u8BFB\u53D6\u7684\u96F6\u566A\u70B9\u5185\u5BB9 ")
                          ])
                        ])
                      ]),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        icon: "i-lucide-x",
                        size: "xs",
                        onClick: ($event) => isPreviewOpen.value = false
                      }, null, 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                      createVNode("div", { class: "flex gap-1.5" }, [
                        createVNode(_component_UButton, {
                          size: "xs",
                          color: previewTab.value === "markdown" ? "primary" : "neutral",
                          variant: previewTab.value === "markdown" ? "solid" : "soft",
                          icon: "i-lucide-file-text",
                          onClick: ($event) => previewTab.value = "markdown"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Markdown \u955C\u50CF (.md) ")
                          ]),
                          _: 1
                        }, 8, ["color", "variant", "onClick"]),
                        createVNode(_component_UButton, {
                          size: "xs",
                          color: previewTab.value === "jsonld" ? "primary" : "neutral",
                          variant: previewTab.value === "jsonld" ? "solid" : "soft",
                          icon: "i-lucide-braces",
                          onClick: ($event) => previewTab.value = "jsonld"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" JSON-LD \u7ED3\u6784\u5316\u56FE\u8C31 ")
                          ]),
                          _: 1
                        }, 8, ["color", "variant", "onClick"])
                      ]),
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "neutral",
                        variant: "outline",
                        icon: "i-lucide-copy",
                        onClick: copyPreviewContent
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u590D\u5236\u5F53\u524D\u5185\u5BB9 ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex-1 overflow-y-auto rounded-xl bg-gray-950 text-gray-100 p-4 font-mono text-xs leading-relaxed" }, [
                      createVNode("pre", { class: "whitespace-pre-wrap break-words" }, toDisplayString(previewTab.value === "markdown" ? markdownPreview.value : jsonLdPreview.value), 1)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["open", "onUpdate:open"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/GeoSeoInspectorCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GeoSeoInspectorCard = Object.assign(_sfc_main, { __name: "AdminGeoSeoInspectorCard" });

export { GeoCitationFieldsCard as G, GeoSeoInspectorCard as a };
//# sourceMappingURL=GeoSeoInspectorCard-DYwuymjk.mjs.map
