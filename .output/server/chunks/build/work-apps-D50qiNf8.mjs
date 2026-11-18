import { a as useToast, v as _sfc_main$z, H as _sfc_main$q, d as _sfc_main$X, _ as _sfc_main$R, p as _sfc_main$u, j as _sfc_main$10, g as _sfc_main$D, f as _sfc_main$L, k as _sfc_main$F, C as _sfc_main$m, h as _sfc_main$E } from './server.mjs';
import { defineComponent, ref, computed, watch, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, withModifiers, reactive, withKeys, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { d as defaultHoxiSkills } from './skills-B7jM8wBV.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import 'node:module';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:fs/promises';
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'tailwind-variants';
import '@vue/shared';
import 'embla-carousel-vue';
import 'aria-hidden';
import '@floating-ui/vue';
import '@tanstack/vue-table';
import '@tanstack/vue-virtual';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "HoxiWorkAppConnectionTab",
  __ssrInlineRender: true,
  props: {
    app: {},
    isNew: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const toast = useToast();
    const newScopeInput = ref("");
    const newToolInput = ref("");
    const savingOAuth = ref(false);
    const oauthView = ref(null);
    const oauthForm = reactive({
      clientId: "",
      clientSecret: "",
      scopes: "",
      extraSite: "1688",
      redirectUri: ""
    });
    const transportOptions = [
      { label: "Streamable HTTP (http)", value: "http" },
      { label: "Server-Sent Events (sse)", value: "sse" },
      { label: "\u672C\u5730\u6807\u51C6\u6D41 (stdio)", value: "stdio" }
    ];
    const authTypeOptions = [
      { label: "OAuth 2.0 \u5E97\u94FA\u6388\u6743 (oauth)", value: "oauth" },
      { label: "Hoxi \u8D26\u53F7\u9650\u57DF\u4EE4\u724C (hoxi-account)", value: "hoxi-account" },
      { label: "Bearer API Key (bearer)", value: "bearer" },
      { label: "\u514D\u9274\u6743 / \u672C\u5730\u9694\u79BB (none)", value: "none" }
    ];
    const commonMcpScopes = [
      "mcp:tools",
      "mcp:profile:read",
      "mcp:orders:read",
      "mcp:subscriptions:read",
      "mcp:theme:read",
      "mcp:theme:plan"
    ];
    const addScope = (raw) => {
      const s = String(raw || "").trim();
      if (!s) return;
      const list = props.app.mcp.scopes || [];
      if (!list.includes(s)) {
        props.app.mcp.scopes = [...list, s];
      }
      if (raw === newScopeInput.value) newScopeInput.value = "";
    };
    const removeScope = (target) => {
      props.app.mcp.scopes = (props.app.mcp.scopes || []).filter((s) => s !== target);
    };
    const addToolPreview = () => {
      const s = newToolInput.value.trim();
      if (!s) return;
      if (!props.app.mcp.toolsPreview.includes(s)) {
        props.app.mcp.toolsPreview.push(s);
      }
      newToolInput.value = "";
    };
    const removeToolPreview = (target) => {
      if (props.app.mcp.toolsPreview.length <= 1) return;
      props.app.mcp.toolsPreview = props.app.mcp.toolsPreview.filter((t) => t !== target);
    };
    const loadOAuthConfig = async () => {
      if (props.isNew || !props.app.id) {
        oauthView.value = null;
        return;
      }
      try {
        const res = await $fetch(
          `/api/admin/hoxi/work-apps/${encodeURIComponent(props.app.id)}/oauth`
        );
        oauthView.value = res;
        oauthForm.clientId = res.clientId || "";
        oauthForm.clientSecret = "";
        oauthForm.scopes = res.scopes || "";
        oauthForm.extraSite = res.extraSite || "1688";
        oauthForm.redirectUri = res.redirectUri === res.callbackUrl ? "" : res.redirectUri || "";
      } catch {
        oauthView.value = null;
      }
    };
    watch(
      () => [props.app.id, props.isNew],
      () => {
        void loadOAuthConfig();
      }
    );
    const saveOAuthConfig = async () => {
      var _a;
      if (!props.app.id) return;
      savingOAuth.value = true;
      try {
        const res = await $fetch(
          `/api/admin/hoxi/work-apps/${encodeURIComponent(props.app.id)}/oauth`,
          {
            method: "PUT",
            body: {
              clientId: oauthForm.clientId,
              clientSecret: oauthForm.clientSecret || void 0,
              scopes: oauthForm.scopes,
              extraSite: oauthForm.extraSite,
              redirectUri: oauthForm.redirectUri
            }
          }
        );
        oauthView.value = res.oauth;
        oauthForm.clientSecret = "";
        toast.add({ title: "OAuth \u5E73\u53F0\u51ED\u636E\u5DF2\u5B89\u5168\u4FDD\u5B58", color: "success" });
      } catch (err) {
        toast.add({
          title: "\u4FDD\u5B58 OAuth \u51ED\u636E\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || String(err),
          color: "error"
        });
      } finally {
        savingOAuth.value = false;
      }
    };
    const copyText = async (text) => {
      try {
        await (void 0).clipboard.writeText(text);
        toast.add({ title: "\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F", color: "success" });
      } catch {
        toast.add({ title: "\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u4E2D\u590D\u5236", color: "warning" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UCard = _sfc_main$q;
      const _component_UIcon = _sfc_main$10;
      const _component_UFormField = _sfc_main$F;
      const _component_UInput = _sfc_main$D;
      const _component_UCheckbox = _sfc_main$m;
      const _component_USelect = _sfc_main$u;
      const _component_UButton = _sfc_main$X;
      const _component_UBadge = _sfc_main$R;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">`);
      _push(ssrRenderComponent(_component_UCard, { class: "xl:col-span-2" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:plugs-connected",
              class: "w-4 h-4 text-sky-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u684C\u9762\u7AEF\u5E97\u94FA\u7ED1\u5B9A\u4E0E\u6388\u6743\u5F15\u5BFC\u6587\u6848</span></h3><p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400"${_scopeId}> \u5B9A\u5236\u7528\u6237\u5728 Hoxi \u684C\u9762\u7AEF\u70B9\u51FB\u300C\u8FDE\u63A5\u5E97\u94FA\u300D\u65F6\u770B\u5230\u7684\u6309\u94AE\u540D\u79F0\u3001\u5E97\u94FA\u57DF\u540D\u8F93\u5165\u6846\u6807\u7B7E\u53CA\u53EF\u9009 API Token \u8BF4\u660E\u3002 </p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:plugs-connected",
                    class: "w-4 h-4 text-sky-500"
                  }),
                  createVNode("span", null, "\u684C\u9762\u7AEF\u5E97\u94FA\u7ED1\u5B9A\u4E0E\u6388\u6743\u5F15\u5BFC\u6587\u6848")
                ]),
                createVNode("p", { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, " \u5B9A\u5236\u7528\u6237\u5728 Hoxi \u684C\u9762\u7AEF\u70B9\u51FB\u300C\u8FDE\u63A5\u5E97\u94FA\u300D\u65F6\u770B\u5230\u7684\u6309\u94AE\u540D\u79F0\u3001\u5E97\u94FA\u57DF\u540D\u8F93\u5165\u6846\u6807\u7B7E\u53CA\u53EF\u9009 API Token \u8BF4\u660E\u3002 ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u4E3B\u6388\u6743\u6309\u94AE\u6587\u6848 (connectionLabel)",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.connectionLabel,
                    "onUpdate:modelValue": ($event) => __props.app.connectionLabel = $event,
                    placeholder: "\u4E00\u952E\u6388\u6743 Shopify \u5E97\u94FA",
                    size: "sm",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.connectionLabel,
                      "onUpdate:modelValue": ($event) => __props.app.connectionLabel = $event,
                      placeholder: "\u4E00\u952E\u6388\u6743 Shopify \u5E97\u94FA",
                      size: "sm",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<label class="flex items-center gap-2.5 pb-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCheckbox, {
              modelValue: __props.app.oneClickStoreAuth,
              "onUpdate:modelValue": ($event) => __props.app.oneClickStoreAuth = $event
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u652F\u6301\u65E0\u53C2\u4E00\u952E\u8DF3\u8F6C\u72EC\u7ACB\u7AD9\u767B\u5F55\u6388\u6743 (\`oneClickStoreAuth\`)</span></label></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u7AD9\u70B9/\u5E97\u94FA\u5730\u5740\u5B57\u6BB5\u6807\u9898 (connectionUrlLabel)",
              help: "\u5982 Shopify \u5E97\u94FA\u57DF\u540D (*.myshopify.com)"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.connectionUrlLabel,
                    "onUpdate:modelValue": ($event) => __props.app.connectionUrlLabel = $event,
                    placeholder: "Shopify \u5E97\u94FA\u57DF\u540D (*.myshopify.com \u6216\u4E3B\u57DF\u540D)",
                    size: "sm",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.connectionUrlLabel,
                      "onUpdate:modelValue": ($event) => __props.app.connectionUrlLabel = $event,
                      placeholder: "Shopify \u5E97\u94FA\u57DF\u540D (*.myshopify.com \u6216\u4E3B\u57DF\u540D)",
                      size: "sm",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u7AD9\u70B9\u5730\u5740\u5360\u4F4D\u63D0\u793A (connectionUrlPlaceholder)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.connectionUrlPlaceholder,
                    "onUpdate:modelValue": ($event) => __props.app.connectionUrlPlaceholder = $event,
                    placeholder: "https://your-store.myshopify.com",
                    size: "sm",
                    class: "w-full font-mono text-xs"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.connectionUrlPlaceholder,
                      "onUpdate:modelValue": ($event) => __props.app.connectionUrlPlaceholder = $event,
                      placeholder: "https://your-store.myshopify.com",
                      size: "sm",
                      class: "w-full font-mono text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u8BBF\u95EE\u4EE4\u724C\u5B57\u6BB5\u6807\u9898 (connectionTokenLabel)",
              help: "\u652F\u6301\u7528\u6237\u76F4\u586B\u79C1\u6709 Token \u7684\u5907\u9009\u901A\u9053"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.connectionTokenLabel,
                    "onUpdate:modelValue": ($event) => __props.app.connectionTokenLabel = $event,
                    placeholder: "Shopify Admin Access Token (shpat_...\uFF0C\u53EF\u9009)",
                    size: "sm",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.connectionTokenLabel,
                      "onUpdate:modelValue": ($event) => __props.app.connectionTokenLabel = $event,
                      placeholder: "Shopify Admin Access Token (shpat_...\uFF0C\u53EF\u9009)",
                      size: "sm",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u8BBF\u95EE\u4EE4\u724C\u5360\u4F4D\u63D0\u793A (connectionTokenPlaceholder)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.connectionTokenPlaceholder,
                    "onUpdate:modelValue": ($event) => __props.app.connectionTokenPlaceholder = $event,
                    placeholder: "shpat_xxxx\uFF08\u7559\u7A7A\u5219\u8D70 Hoxi.ai \u4E00\u952E\u6388\u6743\uFF09",
                    size: "sm",
                    class: "w-full font-mono text-xs"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.connectionTokenPlaceholder,
                      "onUpdate:modelValue": ($event) => __props.app.connectionTokenPlaceholder = $event,
                      placeholder: "shpat_xxxx\uFF08\u7559\u7A7A\u5219\u8D70 Hoxi.ai \u4E00\u952E\u6388\u6743\uFF09",
                      size: "sm",
                      class: "w-full font-mono text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4 items-end" }, [
                  createVNode(_component_UFormField, {
                    label: "\u4E3B\u6388\u6743\u6309\u94AE\u6587\u6848 (connectionLabel)",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.connectionLabel,
                        "onUpdate:modelValue": ($event) => __props.app.connectionLabel = $event,
                        placeholder: "\u4E00\u952E\u6388\u6743 Shopify \u5E97\u94FA",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode("label", { class: "flex items-center gap-2.5 pb-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer" }, [
                    createVNode(_component_UCheckbox, {
                      modelValue: __props.app.oneClickStoreAuth,
                      "onUpdate:modelValue": ($event) => __props.app.oneClickStoreAuth = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("span", null, "\u652F\u6301\u65E0\u53C2\u4E00\u952E\u8DF3\u8F6C\u72EC\u7ACB\u7AD9\u767B\u5F55\u6388\u6743 (`oneClickStoreAuth`)")
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u7AD9\u70B9/\u5E97\u94FA\u5730\u5740\u5B57\u6BB5\u6807\u9898 (connectionUrlLabel)",
                    help: "\u5982 Shopify \u5E97\u94FA\u57DF\u540D (*.myshopify.com)"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.connectionUrlLabel,
                        "onUpdate:modelValue": ($event) => __props.app.connectionUrlLabel = $event,
                        placeholder: "Shopify \u5E97\u94FA\u57DF\u540D (*.myshopify.com \u6216\u4E3B\u57DF\u540D)",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u7AD9\u70B9\u5730\u5740\u5360\u4F4D\u63D0\u793A (connectionUrlPlaceholder)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.connectionUrlPlaceholder,
                        "onUpdate:modelValue": ($event) => __props.app.connectionUrlPlaceholder = $event,
                        placeholder: "https://your-store.myshopify.com",
                        size: "sm",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u8BBF\u95EE\u4EE4\u724C\u5B57\u6BB5\u6807\u9898 (connectionTokenLabel)",
                    help: "\u652F\u6301\u7528\u6237\u76F4\u586B\u79C1\u6709 Token \u7684\u5907\u9009\u901A\u9053"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.connectionTokenLabel,
                        "onUpdate:modelValue": ($event) => __props.app.connectionTokenLabel = $event,
                        placeholder: "Shopify Admin Access Token (shpat_...\uFF0C\u53EF\u9009)",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u8BBF\u95EE\u4EE4\u724C\u5360\u4F4D\u63D0\u793A (connectionTokenPlaceholder)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.connectionTokenPlaceholder,
                        "onUpdate:modelValue": ($event) => __props.app.connectionTokenPlaceholder = $event,
                        placeholder: "shpat_xxxx\uFF08\u7559\u7A7A\u5219\u8D70 Hoxi.ai \u4E00\u952E\u6388\u6743\uFF09",
                        size: "sm",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-xs font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:eye",
              class: "w-4 h-4 text-emerald-500"
            }, null, _parent2, _scopeId));
            _push2(` \u684C\u9762\u7AEF\u5E97\u94FA\u7ED1\u5B9A\u5361\u7247\u9884\u89C8 </span>`);
          } else {
            return [
              createVNode("span", { class: "text-xs font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-1.5" }, [
                createVNode(_component_UIcon, {
                  name: "ph:eye",
                  class: "w-4 h-4 text-emerald-500"
                }),
                createTextVNode(" \u684C\u9762\u7AEF\u5E97\u94FA\u7ED1\u5B9A\u5361\u7247\u9884\u89C8 ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/70 p-4 space-y-3 text-xs"${_scopeId}><div class="font-semibold text-gray-900 dark:text-white"${_scopeId}> \u8FDE\u63A5 ${ssrInterpolate(__props.app.name || "\u76EE\u6807\u5E97\u94FA")}</div><div class="space-y-1"${_scopeId}><div class="text-[11px] text-gray-600 dark:text-gray-300"${_scopeId}>${ssrInterpolate(__props.app.connectionUrlLabel || "\u5E97\u94FA\u5730\u5740\u6216\u7AD9\u70B9\u57DF\u540D")}</div><div class="px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-400 font-mono text-[11px] truncate"${_scopeId}>${ssrInterpolate(__props.app.connectionUrlPlaceholder || "https://your-store.example.com")}</div></div><div class="space-y-1"${_scopeId}><div class="text-[11px] text-gray-600 dark:text-gray-300"${_scopeId}>${ssrInterpolate(__props.app.connectionTokenLabel || "API \u8BBF\u95EE\u51ED\u8BC1\uFF08\u53EF\u9009\uFF09")}</div><div class="px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-400 font-mono text-[11px] truncate"${_scopeId}>${ssrInterpolate(__props.app.connectionTokenPlaceholder || "\u7559\u7A7A\u5C06\u8DF3\u8F6C\u6D4F\u89C8\u5668\u5B8C\u6210\u767B\u5F55\u6388\u6743")}</div></div><div class="pt-1"${_scopeId}><div class="w-full py-1.5 rounded-lg bg-sky-600 text-white text-center font-medium"${_scopeId}>${ssrInterpolate(__props.app.connectionLabel || "\u767B\u5F55\u6388\u6743")}</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/70 p-4 space-y-3 text-xs" }, [
                createVNode("div", { class: "font-semibold text-gray-900 dark:text-white" }, " \u8FDE\u63A5 " + toDisplayString(__props.app.name || "\u76EE\u6807\u5E97\u94FA"), 1),
                createVNode("div", { class: "space-y-1" }, [
                  createVNode("div", { class: "text-[11px] text-gray-600 dark:text-gray-300" }, toDisplayString(__props.app.connectionUrlLabel || "\u5E97\u94FA\u5730\u5740\u6216\u7AD9\u70B9\u57DF\u540D"), 1),
                  createVNode("div", { class: "px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-400 font-mono text-[11px] truncate" }, toDisplayString(__props.app.connectionUrlPlaceholder || "https://your-store.example.com"), 1)
                ]),
                createVNode("div", { class: "space-y-1" }, [
                  createVNode("div", { class: "text-[11px] text-gray-600 dark:text-gray-300" }, toDisplayString(__props.app.connectionTokenLabel || "API \u8BBF\u95EE\u51ED\u8BC1\uFF08\u53EF\u9009\uFF09"), 1),
                  createVNode("div", { class: "px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-400 font-mono text-[11px] truncate" }, toDisplayString(__props.app.connectionTokenPlaceholder || "\u7559\u7A7A\u5C06\u8DF3\u8F6C\u6D4F\u89C8\u5668\u5B8C\u6210\u767B\u5F55\u6388\u6743"), 1)
                ]),
                createVNode("div", { class: "pt-1" }, [
                  createVNode("div", { class: "w-full py-1.5 rounded-lg bg-sky-600 text-white text-center font-medium" }, toDisplayString(__props.app.connectionLabel || "\u767B\u5F55\u6388\u6743"), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:terminal-window",
              class: "w-4 h-4 text-indigo-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>MCP \u670D\u52A1\u7AEF\u70B9\u3001\u9274\u6743\u6A21\u5F0F\u4E0E\u5DE5\u5177\u58F0\u660E</span></h3><p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400"${_scopeId}> \u7AD9\u5185\u76F8\u5BF9\u8DEF\u5F84\uFF08\u5982 \`/api/mcp\`\uFF09\u5728\u4E0B\u53D1\u684C\u9762\u7AEF\u65F6\u4F1A\u81EA\u52A8\u8865\u5168\u5F53\u524D\u7AD9\u70B9\u57DF\u540D\uFF1B\u8DE8\u7AD9\u72EC\u7ACB\u4EA7\u54C1\u8BF7\u586B\u5199\u5B8C\u6574 HTTPS \u5730\u5740\u3002 </p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:terminal-window",
                    class: "w-4 h-4 text-indigo-500"
                  }),
                  createVNode("span", null, "MCP \u670D\u52A1\u7AEF\u70B9\u3001\u9274\u6743\u6A21\u5F0F\u4E0E\u5DE5\u5177\u58F0\u660E")
                ]),
                createVNode("p", { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, " \u7AD9\u5185\u76F8\u5BF9\u8DEF\u5F84\uFF08\u5982 `/api/mcp`\uFF09\u5728\u4E0B\u53D1\u684C\u9762\u7AEF\u65F6\u4F1A\u81EA\u52A8\u8865\u5168\u5F53\u524D\u7AD9\u70B9\u57DF\u540D\uFF1B\u8DE8\u7AD9\u72EC\u7ACB\u4EA7\u54C1\u8BF7\u586B\u5199\u5B8C\u6574 HTTPS \u5730\u5740\u3002 ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-4 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "MCP Server ID",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.mcp.serverId,
                    "onUpdate:modelValue": ($event) => __props.app.mcp.serverId = $event,
                    placeholder: "shopify-mcp",
                    size: "sm",
                    class: "w-full font-mono text-xs"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.mcp.serverId,
                      "onUpdate:modelValue": ($event) => __props.app.mcp.serverId = $event,
                      placeholder: "shopify-mcp",
                      size: "sm",
                      class: "w-full font-mono text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "MCP \u670D\u52A1\u5C55\u793A\u540D",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.mcp.name,
                    "onUpdate:modelValue": ($event) => __props.app.mcp.name = $event,
                    placeholder: "Shopify \u5B98\u65B9\u5E97\u52A1 MCP",
                    size: "sm",
                    class: "w-full text-xs"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.mcp.name,
                      "onUpdate:modelValue": ($event) => __props.app.mcp.name = $event,
                      placeholder: "Shopify \u5B98\u65B9\u5E97\u52A1 MCP",
                      size: "sm",
                      class: "w-full text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u4F20\u8F93\u534F\u8BAE (transport)",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: __props.app.mcp.transport,
                    "onUpdate:modelValue": ($event) => __props.app.mcp.transport = $event,
                    items: transportOptions,
                    size: "sm",
                    class: "w-full font-mono"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: __props.app.mcp.transport,
                      "onUpdate:modelValue": ($event) => __props.app.mcp.transport = $event,
                      items: transportOptions,
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u9274\u6743\u6A21\u5F0F (authType)",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: __props.app.mcp.authType,
                    "onUpdate:modelValue": ($event) => __props.app.mcp.authType = $event,
                    items: authTypeOptions,
                    size: "sm",
                    class: "w-full font-mono"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: __props.app.mcp.authType,
                      "onUpdate:modelValue": ($event) => __props.app.mcp.authType = $event,
                      items: authTypeOptions,
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "MCP Endpoint \u5730\u5740 (url)",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.mcp.url,
                    "onUpdate:modelValue": ($event) => __props.app.mcp.url = $event,
                    placeholder: "/api/mcp",
                    size: "sm",
                    class: "w-full font-mono text-xs"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.mcp.url,
                      "onUpdate:modelValue": ($event) => __props.app.mcp.url = $event,
                      placeholder: "/api/mcp",
                      size: "sm",
                      class: "w-full font-mono text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { label: "OAuth \u6388\u6743\u53D1\u8D77\u5730\u5740 (authUrl)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.mcp.authUrl,
                    "onUpdate:modelValue": ($event) => __props.app.mcp.authUrl = $event,
                    placeholder: "/api/hoxi/work/oauth/shopify/authorize",
                    size: "sm",
                    class: "w-full font-mono text-xs"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.mcp.authUrl,
                      "onUpdate:modelValue": ($event) => __props.app.mcp.authUrl = $event,
                      placeholder: "/api/hoxi/work/oauth/shopify/authorize",
                      size: "sm",
                      class: "w-full font-mono text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u4EE4\u724C\u7BA1\u7406\u63A7\u5236\u53F0\u5730\u5740 (consoleUrl)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.mcp.consoleUrl,
                    "onUpdate:modelValue": ($event) => __props.app.mcp.consoleUrl = $event,
                    placeholder: "/user/tokens",
                    size: "sm",
                    class: "w-full font-mono text-xs"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.mcp.consoleUrl,
                      "onUpdate:modelValue": ($event) => __props.app.mcp.consoleUrl = $event,
                      placeholder: "/user/tokens",
                      size: "sm",
                      class: "w-full font-mono text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "MCP \u9650\u57DF\u4EE4\u724C Scopes (scopes)",
              help: "\u7B7E\u53D1 apay_mcp_* \u9650\u57DF\u4EE4\u724C\u65F6\u6388\u4E88\u7684\u6743\u9650\u8303\u56F4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(`<div class="flex flex-wrap gap-1.5 mb-2 min-h-[24px]"${_scopeId2}><!--[-->`);
                  ssrRenderList(__props.app.mcp.scopes || [], (sc) => {
                    _push3(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-mono bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60"${_scopeId2}>${ssrInterpolate(sc)} <button type="button" class="hover:text-red-500"${_scopeId2}>\xD7</button></span>`);
                  });
                  _push3(`<!--]-->`);
                  if (!((_a2 = __props.app.mcp.scopes) == null ? void 0 : _a2.length)) {
                    _push3(`<span class="text-xs text-gray-400"${_scopeId2}>\u672A\u58F0\u660E\u989D\u5916 Scope</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: newScopeInput.value,
                    "onUpdate:modelValue": ($event) => newScopeInput.value = $event,
                    placeholder: "\u5982 mcp:orders:read",
                    size: "xs",
                    class: "w-56 font-mono",
                    onKeydown: ($event) => addScope(newScopeInput.value)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    size: "xs",
                    icon: "ph:plus",
                    onClick: ($event) => addScope(newScopeInput.value)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u6DFB\u52A0 Scope `);
                      } else {
                        return [
                          createTextVNode(" \u6DFB\u52A0 Scope ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-2 flex flex-wrap gap-1"${_scopeId2}><!--[-->`);
                  ssrRenderList(commonMcpScopes, (preset) => {
                    _push3(`<button type="button" class="px-1.5 py-0.5 rounded text-[11px] font-mono bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-sky-600"${_scopeId2}> + ${ssrInterpolate(preset)}</button>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-wrap gap-1.5 mb-2 min-h-[24px]" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.app.mcp.scopes || [], (sc) => {
                        return openBlock(), createBlock("span", {
                          key: sc,
                          class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-mono bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60"
                        }, [
                          createTextVNode(toDisplayString(sc) + " ", 1),
                          createVNode("button", {
                            type: "button",
                            class: "hover:text-red-500",
                            onClick: ($event) => removeScope(sc)
                          }, "\xD7", 8, ["onClick"])
                        ]);
                      }), 128)),
                      !((_b = __props.app.mcp.scopes) == null ? void 0 : _b.length) ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs text-gray-400"
                      }, "\u672A\u58F0\u660E\u989D\u5916 Scope")) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UInput, {
                        modelValue: newScopeInput.value,
                        "onUpdate:modelValue": ($event) => newScopeInput.value = $event,
                        placeholder: "\u5982 mcp:orders:read",
                        size: "xs",
                        class: "w-56 font-mono",
                        onKeydown: withKeys(withModifiers(($event) => addScope(newScopeInput.value), ["prevent"]), ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "outline",
                        size: "xs",
                        icon: "ph:plus",
                        onClick: ($event) => addScope(newScopeInput.value)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u6DFB\u52A0 Scope ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "mt-2 flex flex-wrap gap-1" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(commonMcpScopes, (preset) => {
                        return createVNode("button", {
                          key: preset,
                          type: "button",
                          class: "px-1.5 py-0.5 rounded text-[11px] font-mono bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-sky-600",
                          onClick: ($event) => addScope(preset)
                        }, " + " + toDisplayString(preset), 9, ["onClick"]);
                      }), 64))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u6838\u5FC3\u5DE5\u5177\u9884\u89C8\u6E05\u5355 (toolsPreview)",
              required: "",
              help: "\u81F3\u5C11\u4FDD\u7559 1 \u4E2A\u5DE5\u5177\u6807\u8BC6\uFF0C\u4F9B\u672A\u8FDE\u63A5\u524D\u5728\u684C\u9762\u7AEF\u8BE6\u60C5\u9762\u677F\u9884\u89C8\u80FD\u529B"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-wrap gap-1.5 mb-2 min-h-[24px]"${_scopeId2}><!--[-->`);
                  ssrRenderList(__props.app.mcp.toolsPreview, (tool) => {
                    _push3(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60"${_scopeId2}>${ssrInterpolate(tool)} <button type="button" class="hover:text-red-500 disabled:opacity-30"${ssrIncludeBooleanAttr(__props.app.mcp.toolsPreview.length <= 1) ? " disabled" : ""}${_scopeId2}> \xD7 </button></span>`);
                  });
                  _push3(`<!--]--></div><div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: newToolInput.value,
                    "onUpdate:modelValue": ($event) => newToolInput.value = $event,
                    placeholder: "\u5982 shopify.products_upsert",
                    size: "xs",
                    class: "w-64 font-mono",
                    onKeydown: addToolPreview
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    size: "xs",
                    icon: "ph:plus",
                    onClick: addToolPreview
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u6DFB\u52A0\u5DE5\u5177 `);
                      } else {
                        return [
                          createTextVNode(" \u6DFB\u52A0\u5DE5\u5177 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-wrap gap-1.5 mb-2 min-h-[24px]" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.app.mcp.toolsPreview, (tool) => {
                        return openBlock(), createBlock("span", {
                          key: tool,
                          class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60"
                        }, [
                          createTextVNode(toDisplayString(tool) + " ", 1),
                          createVNode("button", {
                            type: "button",
                            class: "hover:text-red-500 disabled:opacity-30",
                            disabled: __props.app.mcp.toolsPreview.length <= 1,
                            onClick: ($event) => removeToolPreview(tool)
                          }, " \xD7 ", 8, ["disabled", "onClick"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UInput, {
                        modelValue: newToolInput.value,
                        "onUpdate:modelValue": ($event) => newToolInput.value = $event,
                        placeholder: "\u5982 shopify.products_upsert",
                        size: "xs",
                        class: "w-64 font-mono",
                        onKeydown: withKeys(withModifiers(addToolPreview, ["prevent"]), ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "outline",
                        size: "xs",
                        icon: "ph:plus",
                        onClick: addToolPreview
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u6DFB\u52A0\u5DE5\u5177 ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-4 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "MCP Server ID",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.mcp.serverId,
                        "onUpdate:modelValue": ($event) => __props.app.mcp.serverId = $event,
                        placeholder: "shopify-mcp",
                        size: "sm",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "MCP \u670D\u52A1\u5C55\u793A\u540D",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.mcp.name,
                        "onUpdate:modelValue": ($event) => __props.app.mcp.name = $event,
                        placeholder: "Shopify \u5B98\u65B9\u5E97\u52A1 MCP",
                        size: "sm",
                        class: "w-full text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u4F20\u8F93\u534F\u8BAE (transport)",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: __props.app.mcp.transport,
                        "onUpdate:modelValue": ($event) => __props.app.mcp.transport = $event,
                        items: transportOptions,
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u9274\u6743\u6A21\u5F0F (authType)",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: __props.app.mcp.authType,
                        "onUpdate:modelValue": ($event) => __props.app.mcp.authType = $event,
                        items: authTypeOptions,
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "MCP Endpoint \u5730\u5740 (url)",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.mcp.url,
                        "onUpdate:modelValue": ($event) => __props.app.mcp.url = $event,
                        placeholder: "/api/mcp",
                        size: "sm",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "OAuth \u6388\u6743\u53D1\u8D77\u5730\u5740 (authUrl)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.mcp.authUrl,
                        "onUpdate:modelValue": ($event) => __props.app.mcp.authUrl = $event,
                        placeholder: "/api/hoxi/work/oauth/shopify/authorize",
                        size: "sm",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u4EE4\u724C\u7BA1\u7406\u63A7\u5236\u53F0\u5730\u5740 (consoleUrl)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.mcp.consoleUrl,
                        "onUpdate:modelValue": ($event) => __props.app.mcp.consoleUrl = $event,
                        placeholder: "/user/tokens",
                        size: "sm",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2 border-t border-gray-100 dark:border-gray-800" }, [
                  createVNode(_component_UFormField, {
                    label: "MCP \u9650\u57DF\u4EE4\u724C Scopes (scopes)",
                    help: "\u7B7E\u53D1 apay_mcp_* \u9650\u57DF\u4EE4\u724C\u65F6\u6388\u4E88\u7684\u6743\u9650\u8303\u56F4"
                  }, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createVNode("div", { class: "flex flex-wrap gap-1.5 mb-2 min-h-[24px]" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.app.mcp.scopes || [], (sc) => {
                            return openBlock(), createBlock("span", {
                              key: sc,
                              class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-mono bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60"
                            }, [
                              createTextVNode(toDisplayString(sc) + " ", 1),
                              createVNode("button", {
                                type: "button",
                                class: "hover:text-red-500",
                                onClick: ($event) => removeScope(sc)
                              }, "\xD7", 8, ["onClick"])
                            ]);
                          }), 128)),
                          !((_a2 = __props.app.mcp.scopes) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-gray-400"
                          }, "\u672A\u58F0\u660E\u989D\u5916 Scope")) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UInput, {
                            modelValue: newScopeInput.value,
                            "onUpdate:modelValue": ($event) => newScopeInput.value = $event,
                            placeholder: "\u5982 mcp:orders:read",
                            size: "xs",
                            class: "w-56 font-mono",
                            onKeydown: withKeys(withModifiers(($event) => addScope(newScopeInput.value), ["prevent"]), ["enter"])
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                          createVNode(_component_UButton, {
                            color: "neutral",
                            variant: "outline",
                            size: "xs",
                            icon: "ph:plus",
                            onClick: ($event) => addScope(newScopeInput.value)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u6DFB\u52A0 Scope ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        createVNode("div", { class: "mt-2 flex flex-wrap gap-1" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(commonMcpScopes, (preset) => {
                            return createVNode("button", {
                              key: preset,
                              type: "button",
                              class: "px-1.5 py-0.5 rounded text-[11px] font-mono bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-sky-600",
                              onClick: ($event) => addScope(preset)
                            }, " + " + toDisplayString(preset), 9, ["onClick"]);
                          }), 64))
                        ])
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u6838\u5FC3\u5DE5\u5177\u9884\u89C8\u6E05\u5355 (toolsPreview)",
                    required: "",
                    help: "\u81F3\u5C11\u4FDD\u7559 1 \u4E2A\u5DE5\u5177\u6807\u8BC6\uFF0C\u4F9B\u672A\u8FDE\u63A5\u524D\u5728\u684C\u9762\u7AEF\u8BE6\u60C5\u9762\u677F\u9884\u89C8\u80FD\u529B"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex flex-wrap gap-1.5 mb-2 min-h-[24px]" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.app.mcp.toolsPreview, (tool) => {
                          return openBlock(), createBlock("span", {
                            key: tool,
                            class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60"
                          }, [
                            createTextVNode(toDisplayString(tool) + " ", 1),
                            createVNode("button", {
                              type: "button",
                              class: "hover:text-red-500 disabled:opacity-30",
                              disabled: __props.app.mcp.toolsPreview.length <= 1,
                              onClick: ($event) => removeToolPreview(tool)
                            }, " \xD7 ", 8, ["disabled", "onClick"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_UInput, {
                          modelValue: newToolInput.value,
                          "onUpdate:modelValue": ($event) => newToolInput.value = $event,
                          placeholder: "\u5982 shopify.products_upsert",
                          size: "xs",
                          class: "w-64 font-mono",
                          onKeydown: withKeys(withModifiers(addToolPreview, ["prevent"]), ["enter"])
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "outline",
                          size: "xs",
                          icon: "ph:plus",
                          onClick: addToolPreview
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u6DFB\u52A0\u5DE5\u5177 ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!__props.isNew && ((_a = oauthView.value) == null ? void 0 : _a.supported)) {
        _push(ssrRenderComponent(_component_UCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3"${_scopeId}><div${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:shield-check",
                class: "w-4 h-4 text-emerald-500"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u670D\u52A1\u7AEF OAuth 2.0 \u5E94\u7528\u51ED\u636E\uFF08\u79C1\u5BC6\u9694\u79BB\u5B58\u50A8\uFF09</span>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: oauthView.value.configured ? "success" : "warning",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(oauthView.value.envConfigured ? "\u5DF2\u7531\u73AF\u5883\u53D8\u91CF\u63A5\u7BA1" : oauthView.value.dbConfigured ? "\u6570\u636E\u5E93\u79C1\u5BC6\u51ED\u636E\u5DF2\u5C31\u7EEA" : "\u672A\u914D\u7F6E\uFF08\u5F53\u524D\u964D\u7EA7\u5F15\u5BFC\u624B\u52A8\u586B Token\uFF09")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(oauthView.value.envConfigured ? "\u5DF2\u7531\u73AF\u5883\u53D8\u91CF\u63A5\u7BA1" : oauthView.value.dbConfigured ? "\u6570\u636E\u5E93\u79C1\u5BC6\u51ED\u636E\u5DF2\u5C31\u7EEA" : "\u672A\u914D\u7F6E\uFF08\u5F53\u524D\u964D\u7EA7\u5F15\u5BFC\u624B\u52A8\u586B Token\uFF09"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</h3><p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400"${_scopeId}> \u5BC6\u94A5\u5B58\u5165\u53D7 \`privateSettings\` \u4FDD\u62A4\u7684\u79C1\u5BC6\u914D\u7F6E\u9879\uFF0C\u7EDD\u4E0D\u968F \`/api/hoxi/work/apps\` \u6216 \`/api/settings\` \u4E0B\u53D1\u5BA2\u6237\u7AEF\u3002 </p></div>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                size: "xs",
                icon: "ph:lock-key",
                loading: savingOAuth.value,
                onClick: saveOAuthConfig
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u5355\u72EC\u4FDD\u5B58 OAuth \u51ED\u636E `);
                  } else {
                    return [
                      createTextVNode(" \u5355\u72EC\u4FDD\u5B58 OAuth \u51ED\u636E ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-3" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:shield-check",
                        class: "w-4 h-4 text-emerald-500"
                      }),
                      createVNode("span", null, "\u670D\u52A1\u7AEF OAuth 2.0 \u5E94\u7528\u51ED\u636E\uFF08\u79C1\u5BC6\u9694\u79BB\u5B58\u50A8\uFF09"),
                      createVNode(_component_UBadge, {
                        color: oauthView.value.configured ? "success" : "warning",
                        variant: "subtle",
                        size: "xs"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(oauthView.value.envConfigured ? "\u5DF2\u7531\u73AF\u5883\u53D8\u91CF\u63A5\u7BA1" : oauthView.value.dbConfigured ? "\u6570\u636E\u5E93\u79C1\u5BC6\u51ED\u636E\u5DF2\u5C31\u7EEA" : "\u672A\u914D\u7F6E\uFF08\u5F53\u524D\u964D\u7EA7\u5F15\u5BFC\u624B\u52A8\u586B Token\uFF09"), 1)
                        ]),
                        _: 1
                      }, 8, ["color"])
                    ]),
                    createVNode("p", { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, " \u5BC6\u94A5\u5B58\u5165\u53D7 `privateSettings` \u4FDD\u62A4\u7684\u79C1\u5BC6\u914D\u7F6E\u9879\uFF0C\u7EDD\u4E0D\u968F `/api/hoxi/work/apps` \u6216 `/api/settings` \u4E0B\u53D1\u5BA2\u6237\u7AEF\u3002 ")
                  ]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    size: "xs",
                    icon: "ph:lock-key",
                    loading: savingOAuth.value,
                    onClick: saveOAuthConfig
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u5355\u72EC\u4FDD\u5B58 OAuth \u51ED\u636E ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-4"${_scopeId}><div class="rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-800 px-3.5 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"${_scopeId}><div${_scopeId}><span class="text-gray-500"${_scopeId}>\u5B98\u65B9\u5F00\u653E\u5E73\u53F0\u56DE\u8C03\u5730\u5740 (Redirect URI)\uFF1A</span><code class="font-mono text-gray-900 dark:text-white select-all"${_scopeId}>${ssrInterpolate(oauthView.value.callbackUrl)}</code></div>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:copy",
                onClick: ($event) => copyText(oauthView.value.callbackUrl)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u590D\u5236\u56DE\u8C03 URL `);
                  } else {
                    return [
                      createTextVNode(" \u590D\u5236\u56DE\u8C03 URL ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: oauthView.value.clientIdLabel
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: oauthForm.clientId,
                      "onUpdate:modelValue": ($event) => oauthForm.clientId = $event,
                      size: "sm",
                      class: "w-full font-mono text-xs",
                      placeholder: "\u8F93\u5165\u5E73\u53F0\u5206\u914D\u7684 Client ID / App Key"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: oauthForm.clientId,
                        "onUpdate:modelValue": ($event) => oauthForm.clientId = $event,
                        size: "sm",
                        class: "w-full font-mono text-xs",
                        placeholder: "\u8F93\u5165\u5E73\u53F0\u5206\u914D\u7684 Client ID / App Key"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: oauthView.value.clientSecretLabel,
                help: oauthView.value.hasSecret ? `\u5F53\u524D\u5DF2\u5B58\u5BC6\u94A5\uFF1A${oauthView.value.maskedSecret}\uFF08\u7559\u7A7A\u4FDD\u6301\u4E0D\u53D8\uFF09` : "\u5C1A\u672A\u4FDD\u5B58\u5BC6\u94A5"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: oauthForm.clientSecret,
                      "onUpdate:modelValue": ($event) => oauthForm.clientSecret = $event,
                      type: "password",
                      size: "sm",
                      class: "w-full font-mono text-xs",
                      placeholder: oauthView.value.hasSecret ? "\u7559\u7A7A\u4FDD\u7559\u539F\u5BC6\u94A5\uFF0C\u8F93\u5165\u65B0\u503C\u5373\u8986\u76D6" : "\u7C98\u8D34\u5E73\u53F0\u5206\u914D\u7684 Client Secret"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: oauthForm.clientSecret,
                        "onUpdate:modelValue": ($event) => oauthForm.clientSecret = $event,
                        type: "password",
                        size: "sm",
                        class: "w-full font-mono text-xs",
                        placeholder: oauthView.value.hasSecret ? "\u7559\u7A7A\u4FDD\u7559\u539F\u5BC6\u94A5\uFF0C\u8F93\u5165\u65B0\u503C\u5373\u8986\u76D6" : "\u7C98\u8D34\u5E73\u53F0\u5206\u914D\u7684 Client Secret"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              if (oauthView.value.provider === "shopify") {
                _push2(ssrRenderComponent(_component_UFormField, { label: "Shopify OAuth Scopes (\u9017\u53F7\u5206\u9694)" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: oauthForm.scopes,
                        "onUpdate:modelValue": ($event) => oauthForm.scopes = $event,
                        size: "sm",
                        class: "w-full font-mono text-xs"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: oauthForm.scopes,
                          "onUpdate:modelValue": ($event) => oauthForm.scopes = $event,
                          size: "sm",
                          class: "w-full font-mono text-xs"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (oauthView.value.provider === "1688") {
                _push2(ssrRenderComponent(_component_UFormField, { label: "1688 \u7AD9\u70B9\u6807\u8BC6 (site)" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: oauthForm.extraSite,
                        "onUpdate:modelValue": ($event) => oauthForm.extraSite = $event,
                        size: "sm",
                        class: "w-full font-mono text-xs",
                        placeholder: "1688"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: oauthForm.extraSite,
                          "onUpdate:modelValue": ($event) => oauthForm.extraSite = $event,
                          size: "sm",
                          class: "w-full font-mono text-xs",
                          placeholder: "1688"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u81EA\u5B9A\u4E49\u56DE\u8C03\u5730\u5740\u8986\u76D6 (redirectUri\uFF0C\u53EF\u9009)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: oauthForm.redirectUri,
                      "onUpdate:modelValue": ($event) => oauthForm.redirectUri = $event,
                      size: "sm",
                      class: "w-full font-mono text-xs",
                      placeholder: oauthView.value.callbackUrl
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: oauthForm.redirectUri,
                        "onUpdate:modelValue": ($event) => oauthForm.redirectUri = $event,
                        size: "sm",
                        class: "w-full font-mono text-xs",
                        placeholder: oauthView.value.callbackUrl
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-4" }, [
                  createVNode("div", { class: "rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-800 px-3.5 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs" }, [
                    createVNode("div", null, [
                      createVNode("span", { class: "text-gray-500" }, "\u5B98\u65B9\u5F00\u653E\u5E73\u53F0\u56DE\u8C03\u5730\u5740 (Redirect URI)\uFF1A"),
                      createVNode("code", { class: "font-mono text-gray-900 dark:text-white select-all" }, toDisplayString(oauthView.value.callbackUrl), 1)
                    ]),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      size: "xs",
                      icon: "ph:copy",
                      onClick: ($event) => copyText(oauthView.value.callbackUrl)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u590D\u5236\u56DE\u8C03 URL ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                    createVNode(_component_UFormField, {
                      label: oauthView.value.clientIdLabel
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: oauthForm.clientId,
                          "onUpdate:modelValue": ($event) => oauthForm.clientId = $event,
                          size: "sm",
                          class: "w-full font-mono text-xs",
                          placeholder: "\u8F93\u5165\u5E73\u53F0\u5206\u914D\u7684 Client ID / App Key"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_UFormField, {
                      label: oauthView.value.clientSecretLabel,
                      help: oauthView.value.hasSecret ? `\u5F53\u524D\u5DF2\u5B58\u5BC6\u94A5\uFF1A${oauthView.value.maskedSecret}\uFF08\u7559\u7A7A\u4FDD\u6301\u4E0D\u53D8\uFF09` : "\u5C1A\u672A\u4FDD\u5B58\u5BC6\u94A5"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: oauthForm.clientSecret,
                          "onUpdate:modelValue": ($event) => oauthForm.clientSecret = $event,
                          type: "password",
                          size: "sm",
                          class: "w-full font-mono text-xs",
                          placeholder: oauthView.value.hasSecret ? "\u7559\u7A7A\u4FDD\u7559\u539F\u5BC6\u94A5\uFF0C\u8F93\u5165\u65B0\u503C\u5373\u8986\u76D6" : "\u7C98\u8D34\u5E73\u53F0\u5206\u914D\u7684 Client Secret"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label", "help"])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                    oauthView.value.provider === "shopify" ? (openBlock(), createBlock(_component_UFormField, {
                      key: 0,
                      label: "Shopify OAuth Scopes (\u9017\u53F7\u5206\u9694)"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: oauthForm.scopes,
                          "onUpdate:modelValue": ($event) => oauthForm.scopes = $event,
                          size: "sm",
                          class: "w-full font-mono text-xs"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    oauthView.value.provider === "1688" ? (openBlock(), createBlock(_component_UFormField, {
                      key: 1,
                      label: "1688 \u7AD9\u70B9\u6807\u8BC6 (site)"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: oauthForm.extraSite,
                          "onUpdate:modelValue": ($event) => oauthForm.extraSite = $event,
                          size: "sm",
                          class: "w-full font-mono text-xs",
                          placeholder: "1688"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_UFormField, { label: "\u81EA\u5B9A\u4E49\u56DE\u8C03\u5730\u5740\u8986\u76D6 (redirectUri\uFF0C\u53EF\u9009)" }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: oauthForm.redirectUri,
                          "onUpdate:modelValue": ($event) => oauthForm.redirectUri = $event,
                          size: "sm",
                          class: "w-full font-mono text-xs",
                          placeholder: oauthView.value.callbackUrl
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/components/HoxiWorkAppConnectionTab.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HoxiWorkAppOverviewTab",
  __ssrInlineRender: true,
  props: {
    app: {},
    isNew: { type: Boolean },
    availableSkills: {}
  },
  setup(__props) {
    const props = __props;
    const pendingExtraSkill = ref("");
    const gradientPresets = [
      { label: "Shopify \u7FE0\u7EFF", value: "linear-gradient(135deg, #16A34A 0%, #65A30D 100%)" },
      { label: "1688 \u70BD\u6A59", value: "linear-gradient(135deg, #FF5000 0%, #FF8000 100%)" },
      { label: "\u6D77\u6D0B\u9752\u84DD", value: "linear-gradient(135deg, #0D9488 0%, #0EA5E9 100%)" },
      { label: "\u7687\u5BB6\u6DF1\u84DD", value: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)" },
      { label: "Ozon \u84DD\u7EA2", value: "linear-gradient(135deg, #005BFF 0%, #F91155 100%)" },
      { label: "WB \u7D2B\u54C1\u7EA2", value: "linear-gradient(135deg, #8E44AD 0%, #CB11AB 100%)" },
      { label: "\u66DC\u77F3\u6781\u5BA2\u9ED1", value: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)" }
    ];
    const skillSelectItems = computed(
      () => props.availableSkills.map((s) => ({
        label: s.categoryLabel ? `${s.slug} (${s.categoryLabel})` : s.slug,
        value: s.slug
      }))
    );
    const extraSkills = computed(
      () => (props.app.skills || []).filter((s) => s && s !== props.app.skillName)
    );
    const availableExtraSkillOptions = computed(() => {
      const taken = /* @__PURE__ */ new Set([props.app.skillName, ...props.app.skills || []]);
      return props.availableSkills.filter((s) => !taken.has(s.slug)).map((s) => ({ label: s.slug, value: s.slug }));
    });
    const addExtraSkill = () => {
      const slug = pendingExtraSkill.value.trim().toLowerCase();
      if (!slug) return;
      const next = Array.from(new Set([props.app.skillName, ...props.app.skills || [], slug].filter(Boolean)));
      props.app.skills = next;
      pendingExtraSkill.value = "";
    };
    const removeExtraSkill = (slug) => {
      props.app.skills = (props.app.skills || []).filter((s) => s !== slug);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$q;
      const _component_UIcon = _sfc_main$10;
      const _component_UFormField = _sfc_main$F;
      const _component_UInput = _sfc_main$D;
      const _component_UCheckbox = _sfc_main$m;
      const _component_UTextarea = _sfc_main$E;
      const _component_USelect = _sfc_main$u;
      const _component_UBadge = _sfc_main$R;
      const _component_UButton = _sfc_main$X;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 xl:grid-cols-3 gap-6 items-start" }, _attrs))}><div class="xl:col-span-2 space-y-6">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:identification-card",
              class: "w-4 h-4 text-sky-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u5E94\u7528\u6807\u8BC6\u4E0E\u4E0A\u67B6\u72B6\u6001</span></h3><p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400"${_scopeId}> \u5B9A\u4E49 Work \u5E94\u7528\u7684\u552F\u4E00\u82F1\u6587\u6807\u8BC6\u3001\u80F6\u56CA\u7B80\u79F0\u4EE5\u53CA\u5728\u684C\u9762\u7AEF\u76EE\u5F55\u4E2D\u7684\u6392\u5E8F\u4E0E\u53EF\u89C1\u6027\u3002 </p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", null, [
                  createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:identification-card",
                      class: "w-4 h-4 text-sky-500"
                    }),
                    createVNode("span", null, "\u5E94\u7528\u6807\u8BC6\u4E0E\u4E0A\u67B6\u72B6\u6001")
                  ]),
                  createVNode("p", { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, " \u5B9A\u4E49 Work \u5E94\u7528\u7684\u552F\u4E00\u82F1\u6587\u6807\u8BC6\u3001\u80F6\u56CA\u7B80\u79F0\u4EE5\u53CA\u5728\u684C\u9762\u7AEF\u76EE\u5F55\u4E2D\u7684\u6392\u5E8F\u4E0E\u53EF\u89C1\u6027\u3002 ")
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u5E94\u7528 ID (Slug)",
              required: "",
              help: "\u552F\u4E00\u82F1\u6587\u6807\u8BC6\uFF0C\u5982 shopify"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.id,
                    "onUpdate:modelValue": ($event) => __props.app.id = $event,
                    placeholder: "shopify",
                    disabled: !__props.isNew,
                    size: "sm",
                    class: "w-full font-mono"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.id,
                      "onUpdate:modelValue": ($event) => __props.app.id = $event,
                      placeholder: "shopify",
                      disabled: !__props.isNew,
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u5E94\u7528\u5168\u79F0",
              required: "",
              help: "\u5DE5\u4F5C\u53F0\u5217\u8868\u4E0E\u8BE6\u60C5\u5B8C\u6574\u540D\u79F0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.name,
                    "onUpdate:modelValue": ($event) => __props.app.name = $event,
                    placeholder: "Shopify \u72EC\u7ACB\u7AD9\u8FD0\u8425",
                    size: "sm",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.name,
                      "onUpdate:modelValue": ($event) => __props.app.name = $event,
                      placeholder: "Shopify \u72EC\u7ACB\u7AD9\u8FD0\u8425",
                      size: "sm",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u80F6\u56CA\u7B80\u79F0 (shortName)",
              required: "",
              help: "\u9876\u680F/\u4FA7\u680F\u7D27\u51D1\u80F6\u56CA\u6587\u5B57"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.shortName,
                    "onUpdate:modelValue": ($event) => __props.app.shortName = $event,
                    placeholder: "Shopify",
                    size: "sm",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.shortName,
                      "onUpdate:modelValue": ($event) => __props.app.shortName = $event,
                      placeholder: "Shopify",
                      size: "sm",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="pt-3 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4"${_scopeId}><div class="flex flex-wrap items-center gap-6"${_scopeId}><label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCheckbox, {
              modelValue: __props.app.featured,
              "onUpdate:modelValue": ($event) => __props.app.featured = $event
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u7CBE\u9009\u63A8\u8350\uFF08Featured \u7F6E\u9876\u66DD\u5149\uFF09</span></label><label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCheckbox, {
              modelValue: __props.app.hidden,
              "onUpdate:modelValue": ($event) => __props.app.hidden = $event
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u6682\u4E0D\u5C55\u793A\uFF08\u9690\u85CF/\u4E0B\u67B6\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u62C9\u53D6\uFF09</span></label></div><div class="flex items-center gap-2"${_scopeId}><span class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>\u76EE\u5F55\u6392\u5E8F\u6743\u91CD\uFF1A</span>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.app.sortOrder,
              "onUpdate:modelValue": ($event) => __props.app.sortOrder = $event,
              modelModifiers: { number: true },
              type: "number",
              size: "xs",
              class: "w-24 font-mono"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u5E94\u7528 ID (Slug)",
                    required: "",
                    help: "\u552F\u4E00\u82F1\u6587\u6807\u8BC6\uFF0C\u5982 shopify"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.id,
                        "onUpdate:modelValue": ($event) => __props.app.id = $event,
                        placeholder: "shopify",
                        disabled: !__props.isNew,
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u5E94\u7528\u5168\u79F0",
                    required: "",
                    help: "\u5DE5\u4F5C\u53F0\u5217\u8868\u4E0E\u8BE6\u60C5\u5B8C\u6574\u540D\u79F0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.name,
                        "onUpdate:modelValue": ($event) => __props.app.name = $event,
                        placeholder: "Shopify \u72EC\u7ACB\u7AD9\u8FD0\u8425",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u80F6\u56CA\u7B80\u79F0 (shortName)",
                    required: "",
                    help: "\u9876\u680F/\u4FA7\u680F\u7D27\u51D1\u80F6\u56CA\u6587\u5B57"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.shortName,
                        "onUpdate:modelValue": ($event) => __props.app.shortName = $event,
                        placeholder: "Shopify",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pt-3 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4" }, [
                  createVNode("div", { class: "flex flex-wrap items-center gap-6" }, [
                    createVNode("label", { class: "flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer" }, [
                      createVNode(_component_UCheckbox, {
                        modelValue: __props.app.featured,
                        "onUpdate:modelValue": ($event) => __props.app.featured = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("span", null, "\u7CBE\u9009\u63A8\u8350\uFF08Featured \u7F6E\u9876\u66DD\u5149\uFF09")
                    ]),
                    createVNode("label", { class: "flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer" }, [
                      createVNode(_component_UCheckbox, {
                        modelValue: __props.app.hidden,
                        "onUpdate:modelValue": ($event) => __props.app.hidden = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("span", null, "\u6682\u4E0D\u5C55\u793A\uFF08\u9690\u85CF/\u4E0B\u67B6\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u62C9\u53D6\uFF09")
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400" }, "\u76EE\u5F55\u6392\u5E8F\u6743\u91CD\uFF1A"),
                    createVNode(_component_UInput, {
                      modelValue: __props.app.sortOrder,
                      "onUpdate:modelValue": ($event) => __props.app.sortOrder = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      size: "xs",
                      class: "w-24 font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:paint-brush-broad",
              class: "w-4 h-4 text-emerald-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u9996\u9875\u4E3B\u89C6\u89C9\u4E0E\u5409\u7965\u7269\u4EBA\u8BBE</span></h3><p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400"${_scopeId}> \u914D\u7F6E\u7528\u6237\u5728\u684C\u9762\u7AEF\u5207\u6362\u5230\u8BE5\u5E94\u7528\u65F6\u5C55\u793A\u7684 Hero \u6807\u9898\u3001\u5B9A\u4F4D\u53E3\u53F7\u3001\u56FE\u6807\u6E10\u53D8\u4E0E\u4E13\u5C5E\u5E97\u957F\u5F62\u8C61\u3002 </p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:paint-brush-broad",
                    class: "w-4 h-4 text-emerald-500"
                  }),
                  createVNode("span", null, "\u9996\u9875\u4E3B\u89C6\u89C9\u4E0E\u5409\u7965\u7269\u4EBA\u8BBE")
                ]),
                createVNode("p", { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, " \u914D\u7F6E\u7528\u6237\u5728\u684C\u9762\u7AEF\u5207\u6362\u5230\u8BE5\u5E94\u7528\u65F6\u5C55\u793A\u7684 Hero \u6807\u9898\u3001\u5B9A\u4F4D\u53E3\u53F7\u3001\u56FE\u6807\u6E10\u53D8\u4E0E\u4E13\u5C5E\u5E97\u957F\u5F62\u8C61\u3002 ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u9996\u9875\u4E3B\u6807\u9898 (heroTitle)",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.heroTitle,
                    "onUpdate:modelValue": ($event) => __props.app.heroTitle = $event,
                    placeholder: "Shopify AI\uFF0C\u4E00\u7AD9\u5F0F\u5168\u7403\u72EC\u7ACB\u7AD9\u8FD0\u8425 Agent",
                    size: "sm",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.heroTitle,
                      "onUpdate:modelValue": ($event) => __props.app.heroTitle = $event,
                      placeholder: "Shopify AI\uFF0C\u4E00\u7AD9\u5F0F\u5168\u7403\u72EC\u7ACB\u7AD9\u8FD0\u8425 Agent",
                      size: "sm",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u526F\u6807\u9898\u4EF7\u503C\u63CF\u8FF0 (tagline)",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: __props.app.tagline,
                    "onUpdate:modelValue": ($event) => __props.app.tagline = $event,
                    rows: 2,
                    placeholder: "\u5546\u54C1\u4E0E\u591A\u89C4\u683C\u4E0A\u67B6\u3001Liquid \u4E3B\u9898\u88C5\u4FEE\u3001\u6298\u6263\u6D3B\u52A8\u4E0E\u5F03\u5355\u633D\u56DE\u4E13\u5BB6",
                    class: "w-full text-sm"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: __props.app.tagline,
                      "onUpdate:modelValue": ($event) => __props.app.tagline = $event,
                      rows: 2,
                      placeholder: "\u5546\u54C1\u4E0E\u591A\u89C4\u683C\u4E0A\u67B6\u3001Liquid \u4E3B\u9898\u88C5\u4FEE\u3001\u6298\u6263\u6D3B\u52A8\u4E0E\u5F03\u5355\u633D\u56DE\u4E13\u5BB6",
                      class: "w-full text-sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 sm:grid-cols-3 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u56FE\u6807\u5355\u5B57 (iconGlyph)",
              help: "\u65E0\u56FE\u7247\u56FE\u6807\u65F6\u5C55\u793A\u7684\u9996\u5B57"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.iconGlyph,
                    "onUpdate:modelValue": ($event) => __props.app.iconGlyph = $event,
                    placeholder: "S",
                    size: "sm",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.iconGlyph,
                      "onUpdate:modelValue": ($event) => __props.app.iconGlyph = $event,
                      placeholder: "S",
                      size: "sm",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u5409\u7965\u7269 Emoji" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.mascotEmoji,
                    "onUpdate:modelValue": ($event) => __props.app.mascotEmoji = $event,
                    placeholder: "\u{1F6CD}\uFE0F",
                    size: "sm",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.mascotEmoji,
                      "onUpdate:modelValue": ($event) => __props.app.mascotEmoji = $event,
                      placeholder: "\u{1F6CD}\uFE0F",
                      size: "sm",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u5409\u7965\u7269\u79F0\u53F7 (mascotTitle)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.mascotTitle,
                    "onUpdate:modelValue": ($event) => __props.app.mascotTitle = $event,
                    placeholder: "Shopify \u589E\u957F\u5E97\u957F",
                    size: "sm",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.mascotTitle,
                      "onUpdate:modelValue": ($event) => __props.app.mascotTitle = $event,
                      placeholder: "Shopify \u589E\u957F\u5E97\u957F",
                      size: "sm",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u56FE\u6807\u80CC\u666F\u6E10\u53D8 CSS (iconBg)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.iconBg,
                    "onUpdate:modelValue": ($event) => __props.app.iconBg = $event,
                    placeholder: "linear-gradient(135deg, #16A34A 0%, #65A30D 100%)",
                    size: "sm",
                    class: "w-full font-mono text-xs"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="mt-2 flex flex-wrap items-center gap-2"${_scopeId2}><span class="text-[11px] text-gray-400"${_scopeId2}>\u9884\u8BBE\u8272\u5361\uFF1A</span><!--[-->`);
                  ssrRenderList(gradientPresets, (preset) => {
                    _push3(`<button type="button"${ssrRenderAttr("title", preset.label)} class="w-5 h-5 rounded-full border border-white/60 ring-1 ring-gray-200 dark:ring-gray-700 transition-transform hover:scale-110" style="${ssrRenderStyle({ background: preset.value })}"${_scopeId2}></button>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.iconBg,
                      "onUpdate:modelValue": ($event) => __props.app.iconBg = $event,
                      placeholder: "linear-gradient(135deg, #16A34A 0%, #65A30D 100%)",
                      size: "sm",
                      class: "w-full font-mono text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "mt-2 flex flex-wrap items-center gap-2" }, [
                      createVNode("span", { class: "text-[11px] text-gray-400" }, "\u9884\u8BBE\u8272\u5361\uFF1A"),
                      (openBlock(), createBlock(Fragment, null, renderList(gradientPresets, (preset) => {
                        return createVNode("button", {
                          key: preset.label,
                          type: "button",
                          title: preset.label,
                          class: "w-5 h-5 rounded-full border border-white/60 ring-1 ring-gray-200 dark:ring-gray-700 transition-transform hover:scale-110",
                          style: { background: preset.value },
                          onClick: ($event) => __props.app.iconBg = preset.value
                        }, null, 12, ["title", "onClick"]);
                      }), 64))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u81EA\u5B9A\u4E49\u56FE\u6807\u56FE\u7247 URL (iconUrl\uFF0C\u53EF\u9009)",
              help: "\u7559\u7A7A\u5219\u4F7F\u7528\u6E10\u53D8\u8272\u5757 + \u56FE\u6807\u5355\u5B57"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.iconUrl,
                    "onUpdate:modelValue": ($event) => __props.app.iconUrl = $event,
                    placeholder: "https://hoxi.ai/themes/hoxi/icons/shopify.svg",
                    size: "sm",
                    class: "w-full font-mono text-xs"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.iconUrl,
                      "onUpdate:modelValue": ($event) => __props.app.iconUrl = $event,
                      placeholder: "https://hoxi.ai/themes/hoxi/icons/shopify.svg",
                      size: "sm",
                      class: "w-full font-mono text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_component_UFormField, {
                  label: "\u9996\u9875\u4E3B\u6807\u9898 (heroTitle)",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.heroTitle,
                      "onUpdate:modelValue": ($event) => __props.app.heroTitle = $event,
                      placeholder: "Shopify AI\uFF0C\u4E00\u7AD9\u5F0F\u5168\u7403\u72EC\u7ACB\u7AD9\u8FD0\u8425 Agent",
                      size: "sm",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, {
                  label: "\u526F\u6807\u9898\u4EF7\u503C\u63CF\u8FF0 (tagline)",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: __props.app.tagline,
                      "onUpdate:modelValue": ($event) => __props.app.tagline = $event,
                      rows: 2,
                      placeholder: "\u5546\u54C1\u4E0E\u591A\u89C4\u683C\u4E0A\u67B6\u3001Liquid \u4E3B\u9898\u88C5\u4FEE\u3001\u6298\u6263\u6D3B\u52A8\u4E0E\u5F03\u5355\u633D\u56DE\u4E13\u5BB6",
                      class: "w-full text-sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u56FE\u6807\u5355\u5B57 (iconGlyph)",
                    help: "\u65E0\u56FE\u7247\u56FE\u6807\u65F6\u5C55\u793A\u7684\u9996\u5B57"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.iconGlyph,
                        "onUpdate:modelValue": ($event) => __props.app.iconGlyph = $event,
                        placeholder: "S",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u5409\u7965\u7269 Emoji" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.mascotEmoji,
                        "onUpdate:modelValue": ($event) => __props.app.mascotEmoji = $event,
                        placeholder: "\u{1F6CD}\uFE0F",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u5409\u7965\u7269\u79F0\u53F7 (mascotTitle)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.mascotTitle,
                        "onUpdate:modelValue": ($event) => __props.app.mascotTitle = $event,
                        placeholder: "Shopify \u589E\u957F\u5E97\u957F",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, { label: "\u56FE\u6807\u80CC\u666F\u6E10\u53D8 CSS (iconBg)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.iconBg,
                        "onUpdate:modelValue": ($event) => __props.app.iconBg = $event,
                        placeholder: "linear-gradient(135deg, #16A34A 0%, #65A30D 100%)",
                        size: "sm",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "mt-2 flex flex-wrap items-center gap-2" }, [
                        createVNode("span", { class: "text-[11px] text-gray-400" }, "\u9884\u8BBE\u8272\u5361\uFF1A"),
                        (openBlock(), createBlock(Fragment, null, renderList(gradientPresets, (preset) => {
                          return createVNode("button", {
                            key: preset.label,
                            type: "button",
                            title: preset.label,
                            class: "w-5 h-5 rounded-full border border-white/60 ring-1 ring-gray-200 dark:ring-gray-700 transition-transform hover:scale-110",
                            style: { background: preset.value },
                            onClick: ($event) => __props.app.iconBg = preset.value
                          }, null, 12, ["title", "onClick"]);
                        }), 64))
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u81EA\u5B9A\u4E49\u56FE\u6807\u56FE\u7247 URL (iconUrl\uFF0C\u53EF\u9009)",
                    help: "\u7559\u7A7A\u5219\u4F7F\u7528\u6E10\u53D8\u8272\u5757 + \u56FE\u6807\u5355\u5B57"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.iconUrl,
                        "onUpdate:modelValue": ($event) => __props.app.iconUrl = $event,
                        placeholder: "https://hoxi.ai/themes/hoxi/icons/shopify.svg",
                        size: "sm",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:sparkle",
              class: "w-4 h-4 text-amber-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Agent \u6280\u80FD\u7ED1\u5B9A (Skills)</span></h3><p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400"${_scopeId}> \u684C\u9762\u7AEF\u8FDB\u5165\u8BE5\u5E94\u7528\u4F1A\u8BDD\u65F6\uFF0C\u5C06\u81EA\u52A8\u6821\u9A8C\u5E76\u6309\u9700\u4ECE\u7EBF\u4E0A\u5E02\u96C6\u9759\u9ED8\u5B89\u88C5\u6240\u7ED1\u5B9A\u7684\u6280\u80FD\u5305\u3002 </p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:sparkle",
                    class: "w-4 h-4 text-amber-500"
                  }),
                  createVNode("span", null, "Agent \u6280\u80FD\u7ED1\u5B9A (Skills)")
                ]),
                createVNode("p", { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, " \u684C\u9762\u7AEF\u8FDB\u5165\u8BE5\u5E94\u7528\u4F1A\u8BDD\u65F6\uFF0C\u5C06\u81EA\u52A8\u6821\u9A8C\u5E76\u6309\u9700\u4ECE\u7EBF\u4E0A\u5E02\u96C6\u9759\u9ED8\u5B89\u88C5\u6240\u7ED1\u5B9A\u7684\u6280\u80FD\u5305\u3002 ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u4E3B\u5173\u8054\u6280\u80FD (skillName)",
              required: "",
              help: "\u5FC5\u987B\u5DF2\u5728\u300C\u6280\u80FD\u5E93\u7BA1\u7406\u300D\u4E2D\u767B\u8BB0\u53D1\u5E03"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (skillSelectItems.value.length > 0) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: __props.app.skillName,
                      "onUpdate:modelValue": ($event) => __props.app.skillName = $event,
                      items: skillSelectItems.value,
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: __props.app.skillName,
                      "onUpdate:modelValue": ($event) => __props.app.skillName = $event,
                      placeholder: "shopify-ops",
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    skillSelectItems.value.length > 0 ? (openBlock(), createBlock(_component_USelect, {
                      key: 0,
                      modelValue: __props.app.skillName,
                      "onUpdate:modelValue": ($event) => __props.app.skillName = $event,
                      items: skillSelectItems.value,
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])) : (openBlock(), createBlock(_component_UInput, {
                      key: 1,
                      modelValue: __props.app.skillName,
                      "onUpdate:modelValue": ($event) => __props.app.skillName = $event,
                      placeholder: "shopify-ops",
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u624B\u52A8\u8F93\u5165/\u6838\u5BF9\u4E3B\u6280\u80FD Slug",
              help: "\u53EF\u76F4\u63A5\u8F93\u5165\u5C1A\u672A\u540C\u6B65\u7684\u65B0\u6280\u80FD slug"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: __props.app.skillName,
                    "onUpdate:modelValue": ($event) => __props.app.skillName = $event,
                    placeholder: "shopify-ops",
                    size: "sm",
                    class: "w-full font-mono"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: __props.app.skillName,
                      "onUpdate:modelValue": ($event) => __props.app.skillName = $event,
                      placeholder: "shopify-ops",
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "\u9644\u52A0\u534F\u540C\u6280\u80FD (skills\uFF0C\u53EF\u9009)",
              help: "\u4F8B\u5982\u8DE8\u5E73\u53F0\u9009\u54C1\u5E94\u7528\u53EF\u540C\u65F6\u6302\u8F7D ecommerce-ops \u6216 ads-growth-ops"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-wrap gap-1.5 mb-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: "info",
                    variant: "subtle",
                    size: "xs",
                    class: "font-mono"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(__props.app.skillName || "\u4E3B\u6280\u80FD\u672A\u586B")}\uFF08\u4E3B\uFF09 `);
                      } else {
                        return [
                          createTextVNode(toDisplayString(__props.app.skillName || "\u4E3B\u6280\u80FD\u672A\u586B") + "\uFF08\u4E3B\uFF09 ", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(extraSkills.value, (extra) => {
                    _push3(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(extra)} <button type="button" class="text-gray-400 hover:text-red-500"${_scopeId2}> \xD7 </button></span>`);
                  });
                  _push3(`<!--]--></div><div class="flex items-center gap-2"${_scopeId2}>`);
                  if (availableExtraSkillOptions.value.length > 0) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: pendingExtraSkill.value,
                      "onUpdate:modelValue": ($event) => pendingExtraSkill.value = $event,
                      items: availableExtraSkillOptions.value,
                      placeholder: "\u9009\u62E9\u9644\u52A0\u6280\u80FD...",
                      size: "xs",
                      class: "w-60 font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: pendingExtraSkill.value,
                      "onUpdate:modelValue": ($event) => pendingExtraSkill.value = $event,
                      placeholder: "\u8F93\u5165\u9644\u52A0\u6280\u80FD slug\uFF0C\u5982 ecommerce-ops",
                      size: "xs",
                      class: "w-60 font-mono"
                    }, null, _parent3, _scopeId2));
                  }
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    size: "xs",
                    icon: "ph:plus",
                    disabled: !pendingExtraSkill.value.trim(),
                    onClick: addExtraSkill
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u6DFB\u52A0\u534F\u540C\u6280\u80FD `);
                      } else {
                        return [
                          createTextVNode(" \u6DFB\u52A0\u534F\u540C\u6280\u80FD ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-wrap gap-1.5 mb-2" }, [
                      createVNode(_component_UBadge, {
                        color: "info",
                        variant: "subtle",
                        size: "xs",
                        class: "font-mono"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(__props.app.skillName || "\u4E3B\u6280\u80FD\u672A\u586B") + "\uFF08\u4E3B\uFF09 ", 1)
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(extraSkills.value, (extra) => {
                        return openBlock(), createBlock("span", {
                          key: extra,
                          class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        }, [
                          createTextVNode(toDisplayString(extra) + " ", 1),
                          createVNode("button", {
                            type: "button",
                            class: "text-gray-400 hover:text-red-500",
                            onClick: ($event) => removeExtraSkill(extra)
                          }, " \xD7 ", 8, ["onClick"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      availableExtraSkillOptions.value.length > 0 ? (openBlock(), createBlock(_component_USelect, {
                        key: 0,
                        modelValue: pendingExtraSkill.value,
                        "onUpdate:modelValue": ($event) => pendingExtraSkill.value = $event,
                        items: availableExtraSkillOptions.value,
                        placeholder: "\u9009\u62E9\u9644\u52A0\u6280\u80FD...",
                        size: "xs",
                        class: "w-60 font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])) : (openBlock(), createBlock(_component_UInput, {
                        key: 1,
                        modelValue: pendingExtraSkill.value,
                        "onUpdate:modelValue": ($event) => pendingExtraSkill.value = $event,
                        placeholder: "\u8F93\u5165\u9644\u52A0\u6280\u80FD slug\uFF0C\u5982 ecommerce-ops",
                        size: "xs",
                        class: "w-60 font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "outline",
                        size: "xs",
                        icon: "ph:plus",
                        disabled: !pendingExtraSkill.value.trim(),
                        onClick: addExtraSkill
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u6DFB\u52A0\u534F\u540C\u6280\u80FD ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u4E3B\u5173\u8054\u6280\u80FD (skillName)",
                    required: "",
                    help: "\u5FC5\u987B\u5DF2\u5728\u300C\u6280\u80FD\u5E93\u7BA1\u7406\u300D\u4E2D\u767B\u8BB0\u53D1\u5E03"
                  }, {
                    default: withCtx(() => [
                      skillSelectItems.value.length > 0 ? (openBlock(), createBlock(_component_USelect, {
                        key: 0,
                        modelValue: __props.app.skillName,
                        "onUpdate:modelValue": ($event) => __props.app.skillName = $event,
                        items: skillSelectItems.value,
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])) : (openBlock(), createBlock(_component_UInput, {
                        key: 1,
                        modelValue: __props.app.skillName,
                        "onUpdate:modelValue": ($event) => __props.app.skillName = $event,
                        placeholder: "shopify-ops",
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u624B\u52A8\u8F93\u5165/\u6838\u5BF9\u4E3B\u6280\u80FD Slug",
                    help: "\u53EF\u76F4\u63A5\u8F93\u5165\u5C1A\u672A\u540C\u6B65\u7684\u65B0\u6280\u80FD slug"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: __props.app.skillName,
                        "onUpdate:modelValue": ($event) => __props.app.skillName = $event,
                        placeholder: "shopify-ops",
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, {
                  label: "\u9644\u52A0\u534F\u540C\u6280\u80FD (skills\uFF0C\u53EF\u9009)",
                  help: "\u4F8B\u5982\u8DE8\u5E73\u53F0\u9009\u54C1\u5E94\u7528\u53EF\u540C\u65F6\u6302\u8F7D ecommerce-ops \u6216 ads-growth-ops"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-wrap gap-1.5 mb-2" }, [
                      createVNode(_component_UBadge, {
                        color: "info",
                        variant: "subtle",
                        size: "xs",
                        class: "font-mono"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(__props.app.skillName || "\u4E3B\u6280\u80FD\u672A\u586B") + "\uFF08\u4E3B\uFF09 ", 1)
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(extraSkills.value, (extra) => {
                        return openBlock(), createBlock("span", {
                          key: extra,
                          class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        }, [
                          createTextVNode(toDisplayString(extra) + " ", 1),
                          createVNode("button", {
                            type: "button",
                            class: "text-gray-400 hover:text-red-500",
                            onClick: ($event) => removeExtraSkill(extra)
                          }, " \xD7 ", 8, ["onClick"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      availableExtraSkillOptions.value.length > 0 ? (openBlock(), createBlock(_component_USelect, {
                        key: 0,
                        modelValue: pendingExtraSkill.value,
                        "onUpdate:modelValue": ($event) => pendingExtraSkill.value = $event,
                        items: availableExtraSkillOptions.value,
                        placeholder: "\u9009\u62E9\u9644\u52A0\u6280\u80FD...",
                        size: "xs",
                        class: "w-60 font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])) : (openBlock(), createBlock(_component_UInput, {
                        key: 1,
                        modelValue: pendingExtraSkill.value,
                        "onUpdate:modelValue": ($event) => pendingExtraSkill.value = $event,
                        placeholder: "\u8F93\u5165\u9644\u52A0\u6280\u80FD slug\uFF0C\u5982 ecommerce-ops",
                        size: "xs",
                        class: "w-60 font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "outline",
                        size: "xs",
                        icon: "ph:plus",
                        disabled: !pendingExtraSkill.value.trim(),
                        onClick: addExtraSkill
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u6DFB\u52A0\u534F\u540C\u6280\u80FD ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-4 xl:sticky xl:top-4">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><span class="text-xs font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:desktop",
              class: "w-4 h-4 text-sky-500"
            }, null, _parent2, _scopeId));
            _push2(` \u684C\u9762\u7AEF Work \u5DE5\u4F5C\u53F0\u5B9E\u65F6\u9884\u89C8 </span>`);
            _push2(ssrRenderComponent(_component_UBadge, {
              color: __props.app.hidden ? "neutral" : "success",
              variant: "subtle",
              size: "xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.app.hidden ? "\u5DF2\u9690\u85CF" : "\u5C55\u793A\u4E2D")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.app.hidden ? "\u5DF2\u9690\u85CF" : "\u5C55\u793A\u4E2D"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("span", { class: "text-xs font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-1.5" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:desktop",
                    class: "w-4 h-4 text-sky-500"
                  }),
                  createTextVNode(" \u684C\u9762\u7AEF Work \u5DE5\u4F5C\u53F0\u5B9E\u65F6\u9884\u89C8 ")
                ]),
                createVNode(_component_UBadge, {
                  color: __props.app.hidden ? "neutral" : "success",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.app.hidden ? "\u5DF2\u9690\u85CF" : "\u5C55\u793A\u4E2D"), 1)
                  ]),
                  _: 1
                }, 8, ["color"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div${_scopeId}><div class="text-[11px] text-gray-400 mb-1.5"${_scopeId}>\u5E94\u7528\u680F\u80F6\u56CA\u5F62\u6001</div><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80"${_scopeId}>`);
            if (__props.app.iconUrl) {
              _push2(`<img${ssrRenderAttr("src", __props.app.iconUrl)} alt="" class="w-5 h-5 rounded-full object-cover"${_scopeId}>`);
            } else {
              _push2(`<span class="flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-white shrink-0" style="${ssrRenderStyle({ background: __props.app.iconBg || "linear-gradient(135deg, #0D9488 0%, #0EA5E9 100%)" })}"${_scopeId}>${ssrInterpolate(__props.app.iconGlyph || ((_a = __props.app.shortName) == null ? void 0 : _a.slice(0, 1)) || "A")}</span>`);
            }
            _push2(`<span class="text-xs font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(__props.app.shortName || "\u5E94\u7528\u7B80\u79F0")}</span></div></div><div${_scopeId}><div class="text-[11px] text-gray-400 mb-1.5"${_scopeId}>\u5E94\u7528\u4E3B\u9875 Hero \u5361\u7247</div><div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/70 p-4 space-y-3"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-base font-bold text-white" style="${ssrRenderStyle({ background: __props.app.iconBg || "linear-gradient(135deg, #0D9488 0%, #0EA5E9 100%)" })}"${_scopeId}>${ssrInterpolate(__props.app.iconGlyph || ((_b = __props.app.shortName) == null ? void 0 : _b.slice(0, 1)) || "A")}</span><div class="min-w-0"${_scopeId}><div class="inline-flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(__props.app.mascotEmoji || "\u{1F916}")}</span><span${_scopeId}>${ssrInterpolate(__props.app.mascotTitle || "AI \u8FD0\u8425\u5E97\u957F")}</span></div><div class="text-sm font-bold text-gray-900 dark:text-white leading-snug truncate"${_scopeId}>${ssrInterpolate(__props.app.heroTitle || __props.app.name || "\u8BF7\u8F93\u5165\u9996\u9875\u4E3B\u6807\u9898")}</div></div></div><p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed"${_scopeId}>${ssrInterpolate(__props.app.tagline || "\u8BF7\u8F93\u5165\u4E00\u53E5\u8BDD\u526F\u6807\u9898\u63CF\u8FF0\uFF0C\u5411\u7528\u6237\u4F20\u8FBE\u6838\u5FC3\u81EA\u52A8\u5316\u8FD0\u8425\u80FD\u529B...")}</p><div class="pt-2 border-t border-gray-200/70 dark:border-gray-800 flex items-center justify-between gap-2"${_scopeId}><span class="text-[11px] font-mono text-gray-400 truncate"${_scopeId}>${ssrInterpolate(__props.app.skillName || "\u672A\u9009\u6280\u80FD")} \xB7 ${ssrInterpolate(((_c = __props.app.mcp) == null ? void 0 : _c.serverId) || "mcp")}</span><span class="px-2.5 py-1 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[11px] font-medium shrink-0"${_scopeId}>${ssrInterpolate(__props.app.connectionLabel || "\u8FDE\u63A5\u5E97\u94FA")}</span></div>`);
            if ((_d = __props.app.categories) == null ? void 0 : _d.length) {
              _push2(`<div class="pt-1 flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
              ssrRenderList(__props.app.categories, (cat) => {
                _push2(`<span class="px-2 py-0.5 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[11px] text-gray-600 dark:text-gray-300"${_scopeId}>${ssrInterpolate(cat.icon)} ${ssrInterpolate(cat.label)}</span>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", null, [
                  createVNode("div", { class: "text-[11px] text-gray-400 mb-1.5" }, "\u5E94\u7528\u680F\u80F6\u56CA\u5F62\u6001"),
                  createVNode("div", { class: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80" }, [
                    __props.app.iconUrl ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: __props.app.iconUrl,
                      alt: "",
                      class: "w-5 h-5 rounded-full object-cover"
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-white shrink-0",
                      style: { background: __props.app.iconBg || "linear-gradient(135deg, #0D9488 0%, #0EA5E9 100%)" }
                    }, toDisplayString(__props.app.iconGlyph || ((_e = __props.app.shortName) == null ? void 0 : _e.slice(0, 1)) || "A"), 5)),
                    createVNode("span", { class: "text-xs font-medium text-gray-900 dark:text-white" }, toDisplayString(__props.app.shortName || "\u5E94\u7528\u7B80\u79F0"), 1)
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "text-[11px] text-gray-400 mb-1.5" }, "\u5E94\u7528\u4E3B\u9875 Hero \u5361\u7247"),
                  createVNode("div", { class: "rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/70 p-4 space-y-3" }, [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("span", {
                        class: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-base font-bold text-white",
                        style: { background: __props.app.iconBg || "linear-gradient(135deg, #0D9488 0%, #0EA5E9 100%)" }
                      }, toDisplayString(__props.app.iconGlyph || ((_f = __props.app.shortName) == null ? void 0 : _f.slice(0, 1)) || "A"), 5),
                      createVNode("div", { class: "min-w-0" }, [
                        createVNode("div", { class: "inline-flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400" }, [
                          createVNode("span", null, toDisplayString(__props.app.mascotEmoji || "\u{1F916}"), 1),
                          createVNode("span", null, toDisplayString(__props.app.mascotTitle || "AI \u8FD0\u8425\u5E97\u957F"), 1)
                        ]),
                        createVNode("div", { class: "text-sm font-bold text-gray-900 dark:text-white leading-snug truncate" }, toDisplayString(__props.app.heroTitle || __props.app.name || "\u8BF7\u8F93\u5165\u9996\u9875\u4E3B\u6807\u9898"), 1)
                      ])
                    ]),
                    createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 leading-relaxed" }, toDisplayString(__props.app.tagline || "\u8BF7\u8F93\u5165\u4E00\u53E5\u8BDD\u526F\u6807\u9898\u63CF\u8FF0\uFF0C\u5411\u7528\u6237\u4F20\u8FBE\u6838\u5FC3\u81EA\u52A8\u5316\u8FD0\u8425\u80FD\u529B..."), 1),
                    createVNode("div", { class: "pt-2 border-t border-gray-200/70 dark:border-gray-800 flex items-center justify-between gap-2" }, [
                      createVNode("span", { class: "text-[11px] font-mono text-gray-400 truncate" }, toDisplayString(__props.app.skillName || "\u672A\u9009\u6280\u80FD") + " \xB7 " + toDisplayString(((_g = __props.app.mcp) == null ? void 0 : _g.serverId) || "mcp"), 1),
                      createVNode("span", { class: "px-2.5 py-1 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[11px] font-medium shrink-0" }, toDisplayString(__props.app.connectionLabel || "\u8FDE\u63A5\u5E97\u94FA"), 1)
                    ]),
                    ((_h = __props.app.categories) == null ? void 0 : _h.length) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "pt-1 flex flex-wrap gap-1.5"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.app.categories, (cat) => {
                        return openBlock(), createBlock("span", {
                          key: cat.id,
                          class: "px-2 py-0.5 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[11px] text-gray-600 dark:text-gray-300"
                        }, toDisplayString(cat.icon) + " " + toDisplayString(cat.label), 1);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/components/HoxiWorkAppOverviewTab.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function formatByteSize(bytes) {
  const n = Number(bytes || 0);
  if (!Number.isFinite(n) || n <= 0) return "\u2014";
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}
function createDefaultWorkAppItem(sortOrder = 100) {
  return {
    id: "",
    name: "",
    shortName: "",
    heroTitle: "",
    tagline: "",
    skillName: "",
    skills: [],
    oneClickStoreAuth: false,
    iconUrl: "",
    iconBg: "linear-gradient(135deg, #0D9488 0%, #0EA5E9 100%)",
    iconGlyph: "A",
    mascotEmoji: "\u{1F916}",
    mascotTitle: "AI \u8FD0\u8425\u52A9\u624B",
    connectionLabel: "\u8FDE\u63A5\u5E97\u94FA\u6216\u6388\u6743 MCP",
    connectionUrlLabel: "\u5E97\u94FA\u5730\u5740\u6216\u7AD9\u70B9\u57DF\u540D",
    connectionUrlPlaceholder: "https://example.com",
    connectionTokenLabel: "API \u8BBF\u95EE\u4EE4\u724C\uFF08\u53EF\u9009\uFF09",
    connectionTokenPlaceholder: "\u7559\u7A7A\u5C06\u8DF3\u8F6C\u6D4F\u89C8\u5668\u5B8C\u6210\u767B\u5F55\u6388\u6743",
    mcp: {
      serverId: "",
      name: "",
      url: "/api/mcp",
      transport: "http",
      authType: "hoxi-account",
      authUrl: "/api/oauth/authorize",
      consoleUrl: "/user/tokens",
      scopes: ["mcp:tools", "mcp:profile:read", "mcp:theme:read", "mcp:theme:plan"],
      toolsPreview: ["commerce.product.upsert", "commerce.order.overview"]
    },
    categories: [
      {
        id: "core-ops",
        label: "\u6838\u5FC3\u8FD0\u8425\u573A\u666F",
        icon: "\u2728",
        placeholder: "\u8F93\u5165\u4F60\u7684\u4E1A\u52A1\u76EE\u6807\u6216\u5546\u54C1\u4FE1\u606F...",
        chips: [
          {
            id: "quick-start",
            label: "\u5FEB\u901F\u542F\u52A8\u5DE1\u68C0",
            placeholder: "\u63CF\u8FF0\u4F60\u7684\u5177\u4F53\u5E97\u94FA\u6216\u5546\u54C1\u9700\u6C42...",
            starterPrompt: "\u8BF7\u7ED3\u5408\u5F53\u524D\u7ED1\u5B9A\u7684\u8FD0\u8425\u6280\u80FD\u4E0E\u5E97\u94FA\u4E0A\u4E0B\u6587\uFF0C\u534F\u52A9\u6211\u5B8C\u6210\u4EE5\u4E0B\u4EFB\u52A1\uFF1A\n\n"
          }
        ]
      }
    ],
    featured: true,
    hidden: false,
    sortOrder
  };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HoxiWorkAppPackagesTab",
  __ssrInlineRender: true,
  props: {
    app: {}
  },
  emits: ["updated"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const toast = useToast();
    const fileInputRef = ref(null);
    const publishMode = ref("upload");
    const selectedFile = ref(null);
    const inspecting = ref(false);
    const publishing = ref(false);
    const loadingList = ref(false);
    const switchingVersion = ref(null);
    const deletingVersion = ref(null);
    const inspectedManifest = ref(null);
    const inspectedFileCount = ref(0);
    const releases = ref([]);
    const releaseForm = reactive({
      version: "",
      minHostVersion: "",
      channel: "stable",
      bundleUrl: "",
      sha256: "",
      sizeBytes: 0,
      changelog: "",
      activate: true
    });
    const channelOptions = [
      { label: "\u6B63\u5F0F\u901A\u9053 (stable)", value: "stable" },
      { label: "\u9884\u89C8\u901A\u9053 (beta)", value: "beta" }
    ];
    const activeRelease = computed(() => releases.value.find((r) => r.isActive) || null);
    const loadReleases = async () => {
      var _a;
      if (!props.app.id) return;
      loadingList.value = true;
      try {
        const res = await $fetch(
          `/api/admin/hoxi/work-apps/${encodeURIComponent(props.app.id)}/packages`
        );
        releases.value = res.items || [];
        props.app.activeVersion = res.activeVersion || void 0;
      } catch (err) {
        toast.add({
          title: "\u52A0\u8F7D\u5E94\u7528\u5305\u7248\u672C\u5217\u8868\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || String(err),
          color: "error"
        });
      } finally {
        loadingList.value = false;
      }
    };
    watch(
      () => props.app.id,
      () => {
        selectedFile.value = null;
        inspectedManifest.value = null;
        void loadReleases();
      }
    );
    const inspectFile = async (file) => {
      var _a;
      selectedFile.value = file;
      inspecting.value = true;
      try {
        const fd = new FormData();
        fd.append("file", file);
        const res = await $fetch(`/api/admin/hoxi/work-apps/${encodeURIComponent(props.app.id)}/packages/inspect`, {
          method: "POST",
          body: fd
        });
        inspectedManifest.value = res.manifest;
        inspectedFileCount.value = res.fileCount;
        releaseForm.version = res.manifest.version;
        releaseForm.minHostVersion = res.manifest.minHostVersion || "";
        releaseForm.sha256 = res.sha256;
        releaseForm.sizeBytes = res.sizeBytes;
      } catch (err) {
        selectedFile.value = null;
        inspectedManifest.value = null;
        toast.add({
          title: "\u5E94\u7528\u5305\u6821\u9A8C\u672A\u901A\u8FC7",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || String(err),
          color: "error"
        });
      } finally {
        inspecting.value = false;
      }
    };
    const onFilePicked = (ev) => {
      var _a;
      const input = ev.target;
      const file = (_a = input.files) == null ? void 0 : _a[0];
      if (file) void inspectFile(file);
      input.value = "";
    };
    const onFileDrop = (ev) => {
      var _a, _b;
      const file = (_b = (_a = ev.dataTransfer) == null ? void 0 : _a.files) == null ? void 0 : _b[0];
      if (file) void inspectFile(file);
    };
    const submitRelease = async () => {
      var _a;
      publishing.value = true;
      try {
        if (publishMode.value === "upload") {
          if (!selectedFile.value) return;
          const fd = new FormData();
          fd.append("file", selectedFile.value);
          fd.append("channel", releaseForm.channel);
          fd.append("changelog", releaseForm.changelog);
          fd.append("activate", String(releaseForm.activate));
          await $fetch(`/api/admin/hoxi/work-apps/${encodeURIComponent(props.app.id)}/packages`, {
            method: "POST",
            body: fd
          });
        } else {
          await $fetch(`/api/admin/hoxi/work-apps/${encodeURIComponent(props.app.id)}/packages`, {
            method: "POST",
            body: {
              version: releaseForm.version,
              minHostVersion: releaseForm.minHostVersion || void 0,
              channel: releaseForm.channel,
              bundleUrl: releaseForm.bundleUrl,
              sha256: releaseForm.sha256,
              sizeBytes: releaseForm.sizeBytes,
              changelog: releaseForm.changelog,
              manifest: inspectedManifest.value,
              activate: releaseForm.activate
            }
          });
        }
        selectedFile.value = null;
        inspectedManifest.value = null;
        releaseForm.changelog = "";
        toast.add({ title: "\u65B0\u7248\u672C\u5DF2\u53D1\u5E03\u751F\u6548", color: "success" });
        await loadReleases();
        emit("updated");
      } catch (err) {
        toast.add({
          title: "\u53D1\u5E03\u7248\u672C\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || String(err),
          color: "error"
        });
      } finally {
        publishing.value = false;
      }
    };
    const activateRelease = async (version) => {
      var _a;
      switchingVersion.value = version != null ? version : "__detach__";
      try {
        await $fetch(`/api/admin/hoxi/work-apps/${encodeURIComponent(props.app.id)}/packages/activate`, {
          method: "POST",
          body: { version }
        });
        toast.add({
          title: version ? `\u5DF2\u5207\u6362\u7EBF\u4E0A\u7248\u672C\u81F3 v${version}` : "\u5DF2\u53D6\u6D88\u7EBF\u4E0A\u5E94\u7528\u5305\u6302\u8F7D",
          color: "success"
        });
        await loadReleases();
        emit("updated");
      } catch (err) {
        toast.add({
          title: "\u5207\u6362\u6FC0\u6D3B\u7248\u672C\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || String(err),
          color: "error"
        });
      } finally {
        switchingVersion.value = null;
      }
    };
    const removeRelease = async (version) => {
      var _a;
      deletingVersion.value = version;
      try {
        await $fetch(
          `/api/admin/hoxi/work-apps/${encodeURIComponent(props.app.id)}/packages/${encodeURIComponent(version)}`,
          { method: "DELETE" }
        );
        toast.add({ title: `\u5DF2\u5220\u9664\u5386\u53F2\u7248\u672C v${version}`, color: "success" });
        await loadReleases();
        emit("updated");
      } catch (err) {
        toast.add({
          title: "\u5220\u9664\u7248\u672C\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || String(err),
          color: "error"
        });
      } finally {
        deletingVersion.value = null;
      }
    };
    const formatTime = (iso) => {
      if (!iso) return "";
      const d = new Date(iso);
      return Number.isNaN(d.getTime()) ? iso : d.toLocaleString("zh-CN", { hour12: false });
    };
    const copyText = async (rawPathOrUrl) => {
      const full = rawPathOrUrl.startsWith("/") && false ? `${(void 0).location.origin}${rawPathOrUrl}` : rawPathOrUrl;
      try {
        await (void 0).clipboard.writeText(full);
        toast.add({ title: "\u4E0B\u8F7D\u94FE\u63A5\u5DF2\u590D\u5236", color: "success" });
      } catch {
        toast.add({ title: "\u590D\u5236\u5931\u8D25", color: "warning" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$q;
      const _component_UIcon = _sfc_main$10;
      const _component_UBadge = _sfc_main$R;
      const _component_UButton = _sfc_main$X;
      const _component_UFormField = _sfc_main$F;
      const _component_UInput = _sfc_main$D;
      const _component_USelect = _sfc_main$u;
      const _component_UTextarea = _sfc_main$E;
      const _component_UCheckbox = _sfc_main$m;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"${_scopeId}><div class="flex items-start gap-3"${_scopeId}><div class="${ssrRenderClass([
              activeRelease.value ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400" : "bg-gray-100 dark:bg-gray-800 text-gray-400",
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            ])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:package",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(activeRelease.value ? `\u5F53\u524D\u7EBF\u4E0A\u6FC0\u6D3B\u5305\uFF1Av${activeRelease.value.version}` : "\u5F53\u524D\u5C1A\u672A\u6302\u8F7D\u79BB\u7EBF/\u672C\u5730\u670D\u52A1\u5305")}</span>`);
            if (activeRelease.value) {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "success",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(activeRelease.value.storageMode === "hosted" ? "\u5B98\u7F51\u6258\u7BA1\u5206\u53D1" : "\u5916\u90E8 CDN \u5206\u53D1")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(activeRelease.value.storageMode === "hosted" ? "\u5B98\u7F51\u6258\u7BA1\u5206\u53D1" : "\u5916\u90E8 CDN \u5206\u53D1"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ((_a = activeRelease.value) == null ? void 0 : _a.minHostVersion) {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "subtle",
                size: "xs",
                class: "font-mono"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Hoxi &gt;= ${ssrInterpolate(activeRelease.value.minHostVersion)}`);
                  } else {
                    return [
                      createTextVNode(" Hoxi >= " + toDisplayString(activeRelease.value.minHostVersion), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><p class="mt-1 text-xs text-gray-500 dark:text-gray-400"${_scopeId}>`);
            if (activeRelease.value) {
              _push2(`<!--[--> SHA-256: <code class="font-mono"${_scopeId}>${ssrInterpolate(activeRelease.value.sha256.slice(0, 16))}\u2026</code> \xB7 \u4F53\u79EF: ${ssrInterpolate(unref(formatByteSize)(activeRelease.value.sizeBytes))} \xB7 \u684C\u9762\u7AEF\u62C9\u53D6 \`/api/hoxi/work/apps\` \u65F6\u5C06\u81EA\u52A8\u53D1\u73B0\u5E76\u63D0\u793A\u4E00\u952E\u5B89\u88C5\u6216\u70ED\u66F4\u65B0\u3002 <!--]-->`);
            } else {
              _push2(`<!--[--> \u672A\u6302\u8F7D\u5305\u65F6\uFF0C\u684C\u9762\u7AEF\u4EC5\u540C\u6B65\u4E91\u7AEF\u63D0\u793A\u8BCD\u80F6\u56CA\u4E0E\u8FDC\u7A0B MCP \u914D\u7F6E\uFF1B\u53D1\u5E03 \`hoxi.work-package/v1\` \u5305\u540E\u53EF\u89E3\u9501\u672C\u5730\u670D\u52A1\u3001\u4E13\u5C5E\u7F51\u9875\u5361\u69FD\u4E0E\u9694\u79BB\u5DE5\u5177\u94FE\u3002 <!--]-->`);
            }
            _push2(`</p></div></div>`);
            if (activeRelease.value) {
              _push2(`<div class="flex items-center gap-2 shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "outline",
                size: "xs",
                icon: "ph:copy",
                onClick: ($event) => copyText(activeRelease.value.bundleUrl)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u590D\u5236\u5305\u94FE\u63A5 `);
                  } else {
                    return [
                      createTextVNode(" \u590D\u5236\u5305\u94FE\u63A5 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "warning",
                variant: "subtle",
                size: "xs",
                icon: "ph:eject",
                loading: switchingVersion.value === "__detach__",
                onClick: ($event) => activateRelease(null)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u53D6\u6D88\u7EBF\u4E0A\u5305\u6302\u8F7D `);
                  } else {
                    return [
                      createTextVNode(" \u53D6\u6D88\u7EBF\u4E0A\u5305\u6302\u8F7D ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, [
                createVNode("div", { class: "flex items-start gap-3" }, [
                  createVNode("div", {
                    class: [
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                      activeRelease.value ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400" : "bg-gray-100 dark:bg-gray-800 text-gray-400"
                    ]
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:package",
                      class: "w-5 h-5"
                    })
                  ], 2),
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, toDisplayString(activeRelease.value ? `\u5F53\u524D\u7EBF\u4E0A\u6FC0\u6D3B\u5305\uFF1Av${activeRelease.value.version}` : "\u5F53\u524D\u5C1A\u672A\u6302\u8F7D\u79BB\u7EBF/\u672C\u5730\u670D\u52A1\u5305"), 1),
                      activeRelease.value ? (openBlock(), createBlock(_component_UBadge, {
                        key: 0,
                        color: "success",
                        variant: "subtle",
                        size: "xs"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(activeRelease.value.storageMode === "hosted" ? "\u5B98\u7F51\u6258\u7BA1\u5206\u53D1" : "\u5916\u90E8 CDN \u5206\u53D1"), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      ((_b = activeRelease.value) == null ? void 0 : _b.minHostVersion) ? (openBlock(), createBlock(_component_UBadge, {
                        key: 1,
                        color: "neutral",
                        variant: "subtle",
                        size: "xs",
                        class: "font-mono"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Hoxi >= " + toDisplayString(activeRelease.value.minHostVersion), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    createVNode("p", { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, [
                      activeRelease.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode(" SHA-256: "),
                        createVNode("code", { class: "font-mono" }, toDisplayString(activeRelease.value.sha256.slice(0, 16)) + "\u2026", 1),
                        createTextVNode(" \xB7 \u4F53\u79EF: " + toDisplayString(unref(formatByteSize)(activeRelease.value.sizeBytes)) + " \xB7 \u684C\u9762\u7AEF\u62C9\u53D6 `/api/hoxi/work/apps` \u65F6\u5C06\u81EA\u52A8\u53D1\u73B0\u5E76\u63D0\u793A\u4E00\u952E\u5B89\u88C5\u6216\u70ED\u66F4\u65B0\u3002 ", 1)
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createTextVNode(" \u672A\u6302\u8F7D\u5305\u65F6\uFF0C\u684C\u9762\u7AEF\u4EC5\u540C\u6B65\u4E91\u7AEF\u63D0\u793A\u8BCD\u80F6\u56CA\u4E0E\u8FDC\u7A0B MCP \u914D\u7F6E\uFF1B\u53D1\u5E03 `hoxi.work-package/v1` \u5305\u540E\u53EF\u89E3\u9501\u672C\u5730\u670D\u52A1\u3001\u4E13\u5C5E\u7F51\u9875\u5361\u69FD\u4E0E\u9694\u79BB\u5DE5\u5177\u94FE\u3002 ")
                      ], 64))
                    ])
                  ])
                ]),
                activeRelease.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-center gap-2 shrink-0"
                }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    size: "xs",
                    icon: "ph:copy",
                    onClick: ($event) => copyText(activeRelease.value.bundleUrl)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u590D\u5236\u5305\u94FE\u63A5 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "warning",
                    variant: "subtle",
                    size: "xs",
                    icon: "ph:eject",
                    loading: switchingVersion.value === "__detach__",
                    onClick: ($event) => activateRelease(null)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u53D6\u6D88\u7EBF\u4E0A\u5305\u6302\u8F7D ")
                    ]),
                    _: 1
                  }, 8, ["loading", "onClick"])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3"${_scopeId}><div${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:cloud-arrow-up",
              class: "w-4 h-4 text-sky-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u53D1\u5E03\u65B0\u7248\u672C (\`hoxi.work-package/v1\`)</span></h3><p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400"${_scopeId}> \u81EA\u52A8\u6838\u9A8C\u5305\u5185 \`work-package.json\` \u7684\u5E94\u7528 ID \u4E0E\u6743\u9650\u6E05\u5355\uFF0C\u5E76\u8BA1\u7B97\u538B\u7F29\u6D41\u7CBE\u786E SHA-256 \u6458\u8981\u3002 </p></div><div class="inline-flex rounded-lg border border-gray-200 dark:border-gray-800 p-0.5 bg-gray-50 dark:bg-gray-900 text-xs"${_scopeId}><button type="button" class="${ssrRenderClass([
              publishMode.value === "upload" ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium" : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200",
              "px-3 py-1 rounded-md transition-colors"
            ])}"${_scopeId}> \u4E0A\u4F20 .tar.gz \u6258\u7BA1\u53D1\u5E03 </button><button type="button" class="${ssrRenderClass([
              publishMode.value === "external" ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium" : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200",
              "px-3 py-1 rounded-md transition-colors"
            ])}"${_scopeId}> \u767B\u8BB0\u5916\u90E8 HTTPS \u5236\u54C1\u5730\u5740 </button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-3" }, [
                createVNode("div", null, [
                  createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:cloud-arrow-up",
                      class: "w-4 h-4 text-sky-500"
                    }),
                    createVNode("span", null, "\u53D1\u5E03\u65B0\u7248\u672C (`hoxi.work-package/v1`)")
                  ]),
                  createVNode("p", { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, " \u81EA\u52A8\u6838\u9A8C\u5305\u5185 `work-package.json` \u7684\u5E94\u7528 ID \u4E0E\u6743\u9650\u6E05\u5355\uFF0C\u5E76\u8BA1\u7B97\u538B\u7F29\u6D41\u7CBE\u786E SHA-256 \u6458\u8981\u3002 ")
                ]),
                createVNode("div", { class: "inline-flex rounded-lg border border-gray-200 dark:border-gray-800 p-0.5 bg-gray-50 dark:bg-gray-900 text-xs" }, [
                  createVNode("button", {
                    type: "button",
                    class: [
                      "px-3 py-1 rounded-md transition-colors",
                      publishMode.value === "upload" ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium" : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                    ],
                    onClick: ($event) => publishMode.value = "upload"
                  }, " \u4E0A\u4F20 .tar.gz \u6258\u7BA1\u53D1\u5E03 ", 10, ["onClick"]),
                  createVNode("button", {
                    type: "button",
                    class: [
                      "px-3 py-1 rounded-md transition-colors",
                      publishMode.value === "external" ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium" : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                    ],
                    onClick: ($event) => publishMode.value = "external"
                  }, " \u767B\u8BB0\u5916\u90E8 HTTPS \u5236\u54C1\u5730\u5740 ", 10, ["onClick"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-sky-400 dark:hover:border-sky-500 transition-colors p-5 text-center bg-gray-50/50 dark:bg-gray-900/40"${_scopeId}><input type="file" accept=".tar.gz,.tgz,application/gzip,application/x-gzip" class="hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:file-archive",
              class: "w-8 h-8 mx-auto text-sky-500 mb-2"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-xs font-medium text-gray-800 dark:text-gray-200"${_scopeId}>`);
            if (selectedFile.value) {
              _push2(`<!--[--> \u5DF2\u9009\u62E9\uFF1A<span class="font-mono text-sky-600 dark:text-sky-400"${_scopeId}>${ssrInterpolate(selectedFile.value.name)}</span> \uFF08${ssrInterpolate(unref(formatByteSize)(selectedFile.value.size))}\uFF09 <!--]-->`);
            } else {
              _push2(`<!--[--> \u62D6\u62FD \`${ssrInterpolate(__props.app.id)}-x.y.z.tar.gz\` \u5230\u6B64\u5904\uFF0C\u6216\u70B9\u51FB\u9009\u62E9\u672C\u5730\u6784\u5EFA\u5305 <!--]-->`);
            }
            _push2(`</div><p class="mt-1 text-[11px] text-gray-400"${_scopeId}>${ssrInterpolate(publishMode.value === "upload" ? "\u4E0A\u4F20\u540E\u7531\u5B98\u7F51\u6258\u7BA1\u4E0B\u8F7D\u5E76\u81EA\u52A8\u63D0\u53D6\u7248\u672C\u53F7\u3001\u6700\u4F4E\u5BBF\u4E3B\u7248\u672C\u3001\u6743\u9650\u6E05\u5355\u4E0E 64 \u4F4D SHA-256" : "\u5916\u90E8 URL \u6A21\u5F0F\u4E0B\u4E5F\u53EF\u9009\u62E9\u672C\u5730\u6784\u5EFA\u5305\uFF0C\u81EA\u52A8\u8BA1\u7B97 SHA-256 \u5E76\u63D0\u53D6 work-package.json \u5143\u6570\u636E\uFF08\u4E0D\u4E0A\u4F20\u6258\u7BA1\uFF09")}</p><div class="mt-3 flex items-center justify-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              size: "xs",
              icon: "ph:folder-open",
              loading: inspecting.value,
              onClick: ($event) => {
                var _a;
                return (_a = fileInputRef.value) == null ? void 0 : _a.click();
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(selectedFile.value ? "\u91CD\u65B0\u9009\u62E9 .tar.gz" : "\u9009\u62E9\u672C\u5730 .tar.gz \u5305")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(selectedFile.value ? "\u91CD\u65B0\u9009\u62E9 .tar.gz" : "\u9009\u62E9\u672C\u5730 .tar.gz \u5305"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (inspectedManifest.value) {
              _push2(`<div class="rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 p-4 space-y-3 text-xs"${_scopeId}><div class="flex flex-wrap items-center justify-between gap-2"${_scopeId}><div class="font-semibold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:check-circle-fill",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u6E05\u5355\u6821\u9A8C\u901A\u8FC7\uFF1A\`${ssrInterpolate(inspectedManifest.value.id)}\` v${ssrInterpolate(inspectedManifest.value.version)}</span><span class="font-mono text-[11px] text-gray-500"${_scopeId}>(${ssrInterpolate(inspectedFileCount.value)} \u4E2A\u6761\u76EE)</span></div><span class="font-mono text-[11px] text-gray-500"${_scopeId}> SHA-256: ${ssrInterpolate(releaseForm.sha256)}</span></div><div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1"${_scopeId}><div${_scopeId}><div class="text-[11px] text-gray-400 mb-1"${_scopeId}>\u58F0\u660E\u6743\u9650 (permissions)</div><div class="flex flex-wrap gap-1"${_scopeId}><!--[-->`);
              ssrRenderList(inspectedManifest.value.permissions, (perm) => {
                _push2(ssrRenderComponent(_component_UBadge, {
                  key: perm,
                  color: "neutral",
                  variant: "subtle",
                  size: "xs",
                  class: "font-mono"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(perm)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(perm), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              if (!inspectedManifest.value.permissions.length) {
                _push2(`<span class="text-gray-400"${_scopeId}>\u65E0\u7279\u6743\u58F0\u660E</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div${_scopeId}><div class="text-[11px] text-gray-400 mb-1"${_scopeId}>\u672C\u5730\u670D\u52A1\u4E0E\u73AF\u5883\u4F9D\u8D56</div><div class="font-mono text-[11px] text-gray-700 dark:text-gray-300 space-y-0.5"${_scopeId}>`);
              if (inspectedManifest.value.localService) {
                _push2(`<div${_scopeId}> [${ssrInterpolate(inspectedManifest.value.localService.mode)}] ${ssrInterpolate(inspectedManifest.value.localService.command.join(" "))}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (inspectedManifest.value.requires.length) {
                _push2(`<div class="text-gray-500"${_scopeId}> \u4F9D\u8D56: ${ssrInterpolate(inspectedManifest.value.requires.join(", "))}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!inspectedManifest.value.localService && !inspectedManifest.value.requires.length) {
                _push2(`<div class="text-gray-400"${_scopeId}> \u7EAF\u9759\u6001 / \u8FDC\u7A0B MCP \u5305 </div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div${_scopeId}><div class="text-[11px] text-gray-400 mb-1"${_scopeId}>\u6302\u8F7D\u89C6\u56FE\u5361\u69FD (slots)</div><div class="flex flex-wrap gap-1"${_scopeId}><!--[-->`);
              ssrRenderList(inspectedManifest.value.mainTabs, (slot) => {
                _push2(ssrRenderComponent(_component_UBadge, {
                  key: slot.id,
                  color: "info",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(slot.label)}${ssrInterpolate(slot.entry ? ` (${slot.entry})` : "")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(slot.label) + toDisplayString(slot.entry ? ` (${slot.entry})` : ""), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              if (!inspectedManifest.value.mainTabs.length) {
                _push2(`<span class="text-gray-400"${_scopeId}>\u9ED8\u8BA4\u5BF9\u8BDD\u89C6\u56FE</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (publishMode.value === "external") {
              _push2(`<div class="space-y-4 pt-2"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u7248\u672C\u53F7 (SemVer)",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: releaseForm.version,
                      "onUpdate:modelValue": ($event) => releaseForm.version = $event,
                      placeholder: "1.0.0",
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: releaseForm.version,
                        "onUpdate:modelValue": ($event) => releaseForm.version = $event,
                        placeholder: "1.0.0",
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u6700\u4F4E\u5BBF\u4E3B\u7248\u672C (minHostVersion)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: releaseForm.minHostVersion,
                      "onUpdate:modelValue": ($event) => releaseForm.minHostVersion = $event,
                      placeholder: "0.7.0",
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: releaseForm.minHostVersion,
                        "onUpdate:modelValue": ($event) => releaseForm.minHostVersion = $event,
                        placeholder: "0.7.0",
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u53D1\u5E03\u901A\u9053 (channel)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: releaseForm.channel,
                      "onUpdate:modelValue": ($event) => releaseForm.channel = $event,
                      items: channelOptions,
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: releaseForm.channel,
                        "onUpdate:modelValue": ($event) => releaseForm.channel = $event,
                        items: channelOptions,
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5916\u90E8 HTTPS \u4E0B\u8F7D\u5730\u5740 (bundleUrl)",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: releaseForm.bundleUrl,
                      "onUpdate:modelValue": ($event) => releaseForm.bundleUrl = $event,
                      placeholder: "https://github.com/hoxiai/.../shopify-1.0.0.tar.gz",
                      size: "sm",
                      class: "w-full font-mono text-xs"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: releaseForm.bundleUrl,
                        "onUpdate:modelValue": ($event) => releaseForm.bundleUrl = $event,
                        placeholder: "https://github.com/hoxiai/.../shopify-1.0.0.tar.gz",
                        size: "sm",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u538B\u7F29\u5305 SHA-256 \u6458\u8981 (64 \u4F4D\u5C0F\u5199 hex)",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: releaseForm.sha256,
                      "onUpdate:modelValue": ($event) => releaseForm.sha256 = $event,
                      placeholder: "e3b0c44298fc1c149afbf4c8996fb924...",
                      size: "sm",
                      class: "w-full font-mono text-xs"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: releaseForm.sha256,
                        "onUpdate:modelValue": ($event) => releaseForm.sha256 = $event,
                        placeholder: "e3b0c44298fc1c149afbf4c8996fb924...",
                        size: "sm",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u7248\u672C\u66F4\u65B0\u8BF4\u660E (changelog\uFF0C\u684C\u9762\u7AEF\u66F4\u65B0\u63D0\u793A\u53EF\u89C1)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: releaseForm.changelog,
                    "onUpdate:modelValue": ($event) => releaseForm.changelog = $event,
                    rows: 2,
                    placeholder: "\u4F8B\u5982\uFF1A\u65B0\u589E\u6346\u7ED1\u9636\u68AF\u53D8\u4F53\u5DE5\u4F5C\u53F0\u4E0E\u5F85\u53D1\u8D27\u5F02\u5E38\u8BA2\u5355\u4E00\u952E\u5DE1\u68C0...",
                    class: "w-full text-xs"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: releaseForm.changelog,
                      "onUpdate:modelValue": ($event) => releaseForm.changelog = $event,
                      rows: 2,
                      placeholder: "\u4F8B\u5982\uFF1A\u65B0\u589E\u6346\u7ED1\u9636\u68AF\u53D8\u4F53\u5DE5\u4F5C\u53F0\u4E0E\u5F85\u53D1\u8D27\u5F02\u5E38\u8BA2\u5355\u4E00\u952E\u5DE1\u68C0...",
                      class: "w-full text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 dark:border-gray-800"${_scopeId}><label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCheckbox, {
              modelValue: releaseForm.activate,
              "onUpdate:modelValue": ($event) => releaseForm.activate = $event
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u53D1\u5E03\u540E\u7ACB\u5373\u8BBE\u4E3A\u7EBF\u4E0A\u5F53\u524D\u6FC0\u6D3B\u7248\u672C</span></label>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              size: "sm",
              icon: "ph:rocket-launch",
              loading: publishing.value,
              disabled: publishMode.value === "upload" ? !selectedFile.value : !releaseForm.version || !releaseForm.bundleUrl || !releaseForm.sha256,
              onClick: submitRelease
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(publishMode.value === "upload" ? "\u4E0A\u4F20\u5E76\u53D1\u5E03\u7248\u672C" : "\u767B\u8BB0\u5E76\u53D1\u5E03\u7248\u672C")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(publishMode.value === "upload" ? "\u4E0A\u4F20\u5E76\u53D1\u5E03\u7248\u672C" : "\u767B\u8BB0\u5E76\u53D1\u5E03\u7248\u672C"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", {
                  class: "rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-sky-400 dark:hover:border-sky-500 transition-colors p-5 text-center bg-gray-50/50 dark:bg-gray-900/40",
                  onDragover: withModifiers(() => {
                  }, ["prevent"]),
                  onDrop: withModifiers(onFileDrop, ["prevent"])
                }, [
                  createVNode("input", {
                    ref_key: "fileInputRef",
                    ref: fileInputRef,
                    type: "file",
                    accept: ".tar.gz,.tgz,application/gzip,application/x-gzip",
                    class: "hidden",
                    onChange: onFilePicked
                  }, null, 544),
                  createVNode(_component_UIcon, {
                    name: "ph:file-archive",
                    class: "w-8 h-8 mx-auto text-sky-500 mb-2"
                  }),
                  createVNode("div", { class: "text-xs font-medium text-gray-800 dark:text-gray-200" }, [
                    selectedFile.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode(" \u5DF2\u9009\u62E9\uFF1A"),
                      createVNode("span", { class: "font-mono text-sky-600 dark:text-sky-400" }, toDisplayString(selectedFile.value.name), 1),
                      createTextVNode(" \uFF08" + toDisplayString(unref(formatByteSize)(selectedFile.value.size)) + "\uFF09 ", 1)
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createTextVNode(" \u62D6\u62FD `" + toDisplayString(__props.app.id) + "-x.y.z.tar.gz` \u5230\u6B64\u5904\uFF0C\u6216\u70B9\u51FB\u9009\u62E9\u672C\u5730\u6784\u5EFA\u5305 ", 1)
                    ], 64))
                  ]),
                  createVNode("p", { class: "mt-1 text-[11px] text-gray-400" }, toDisplayString(publishMode.value === "upload" ? "\u4E0A\u4F20\u540E\u7531\u5B98\u7F51\u6258\u7BA1\u4E0B\u8F7D\u5E76\u81EA\u52A8\u63D0\u53D6\u7248\u672C\u53F7\u3001\u6700\u4F4E\u5BBF\u4E3B\u7248\u672C\u3001\u6743\u9650\u6E05\u5355\u4E0E 64 \u4F4D SHA-256" : "\u5916\u90E8 URL \u6A21\u5F0F\u4E0B\u4E5F\u53EF\u9009\u62E9\u672C\u5730\u6784\u5EFA\u5305\uFF0C\u81EA\u52A8\u8BA1\u7B97 SHA-256 \u5E76\u63D0\u53D6 work-package.json \u5143\u6570\u636E\uFF08\u4E0D\u4E0A\u4F20\u6258\u7BA1\uFF09"), 1),
                  createVNode("div", { class: "mt-3 flex items-center justify-center gap-2" }, [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "outline",
                      size: "xs",
                      icon: "ph:folder-open",
                      loading: inspecting.value,
                      onClick: ($event) => {
                        var _a;
                        return (_a = fileInputRef.value) == null ? void 0 : _a.click();
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(selectedFile.value ? "\u91CD\u65B0\u9009\u62E9 .tar.gz" : "\u9009\u62E9\u672C\u5730 .tar.gz \u5305"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"])
                  ])
                ], 40, ["onDragover"]),
                inspectedManifest.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 p-4 space-y-3 text-xs"
                }, [
                  createVNode("div", { class: "flex flex-wrap items-center justify-between gap-2" }, [
                    createVNode("div", { class: "font-semibold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:check-circle-fill",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", null, "\u6E05\u5355\u6821\u9A8C\u901A\u8FC7\uFF1A`" + toDisplayString(inspectedManifest.value.id) + "` v" + toDisplayString(inspectedManifest.value.version), 1),
                      createVNode("span", { class: "font-mono text-[11px] text-gray-500" }, "(" + toDisplayString(inspectedFileCount.value) + " \u4E2A\u6761\u76EE)", 1)
                    ]),
                    createVNode("span", { class: "font-mono text-[11px] text-gray-500" }, " SHA-256: " + toDisplayString(releaseForm.sha256), 1)
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-3 pt-1" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "text-[11px] text-gray-400 mb-1" }, "\u58F0\u660E\u6743\u9650 (permissions)"),
                      createVNode("div", { class: "flex flex-wrap gap-1" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(inspectedManifest.value.permissions, (perm) => {
                          return openBlock(), createBlock(_component_UBadge, {
                            key: perm,
                            color: "neutral",
                            variant: "subtle",
                            size: "xs",
                            class: "font-mono"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(perm), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128)),
                        !inspectedManifest.value.permissions.length ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-gray-400"
                        }, "\u65E0\u7279\u6743\u58F0\u660E")) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-[11px] text-gray-400 mb-1" }, "\u672C\u5730\u670D\u52A1\u4E0E\u73AF\u5883\u4F9D\u8D56"),
                      createVNode("div", { class: "font-mono text-[11px] text-gray-700 dark:text-gray-300 space-y-0.5" }, [
                        inspectedManifest.value.localService ? (openBlock(), createBlock("div", { key: 0 }, " [" + toDisplayString(inspectedManifest.value.localService.mode) + "] " + toDisplayString(inspectedManifest.value.localService.command.join(" ")), 1)) : createCommentVNode("", true),
                        inspectedManifest.value.requires.length ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-gray-500"
                        }, " \u4F9D\u8D56: " + toDisplayString(inspectedManifest.value.requires.join(", ")), 1)) : createCommentVNode("", true),
                        !inspectedManifest.value.localService && !inspectedManifest.value.requires.length ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "text-gray-400"
                        }, " \u7EAF\u9759\u6001 / \u8FDC\u7A0B MCP \u5305 ")) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-[11px] text-gray-400 mb-1" }, "\u6302\u8F7D\u89C6\u56FE\u5361\u69FD (slots)"),
                      createVNode("div", { class: "flex flex-wrap gap-1" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(inspectedManifest.value.mainTabs, (slot) => {
                          return openBlock(), createBlock(_component_UBadge, {
                            key: slot.id,
                            color: "info",
                            variant: "subtle",
                            size: "xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(slot.label) + toDisplayString(slot.entry ? ` (${slot.entry})` : ""), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128)),
                        !inspectedManifest.value.mainTabs.length ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-gray-400"
                        }, "\u9ED8\u8BA4\u5BF9\u8BDD\u89C6\u56FE")) : createCommentVNode("", true)
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true),
                publishMode.value === "external" ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "space-y-4 pt-2"
                }, [
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
                    createVNode(_component_UFormField, {
                      label: "\u7248\u672C\u53F7 (SemVer)",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: releaseForm.version,
                          "onUpdate:modelValue": ($event) => releaseForm.version = $event,
                          placeholder: "1.0.0",
                          size: "sm",
                          class: "w-full font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, { label: "\u6700\u4F4E\u5BBF\u4E3B\u7248\u672C (minHostVersion)" }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: releaseForm.minHostVersion,
                          "onUpdate:modelValue": ($event) => releaseForm.minHostVersion = $event,
                          placeholder: "0.7.0",
                          size: "sm",
                          class: "w-full font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, { label: "\u53D1\u5E03\u901A\u9053 (channel)" }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: releaseForm.channel,
                          "onUpdate:modelValue": ($event) => releaseForm.channel = $event,
                          items: channelOptions,
                          size: "sm",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                    createVNode(_component_UFormField, {
                      label: "\u5916\u90E8 HTTPS \u4E0B\u8F7D\u5730\u5740 (bundleUrl)",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: releaseForm.bundleUrl,
                          "onUpdate:modelValue": ($event) => releaseForm.bundleUrl = $event,
                          placeholder: "https://github.com/hoxiai/.../shopify-1.0.0.tar.gz",
                          size: "sm",
                          class: "w-full font-mono text-xs"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u538B\u7F29\u5305 SHA-256 \u6458\u8981 (64 \u4F4D\u5C0F\u5199 hex)",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: releaseForm.sha256,
                          "onUpdate:modelValue": ($event) => releaseForm.sha256 = $event,
                          placeholder: "e3b0c44298fc1c149afbf4c8996fb924...",
                          size: "sm",
                          class: "w-full font-mono text-xs"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ])
                ])) : createCommentVNode("", true),
                createVNode(_component_UFormField, { label: "\u7248\u672C\u66F4\u65B0\u8BF4\u660E (changelog\uFF0C\u684C\u9762\u7AEF\u66F4\u65B0\u63D0\u793A\u53EF\u89C1)" }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: releaseForm.changelog,
                      "onUpdate:modelValue": ($event) => releaseForm.changelog = $event,
                      rows: 2,
                      placeholder: "\u4F8B\u5982\uFF1A\u65B0\u589E\u6346\u7ED1\u9636\u68AF\u53D8\u4F53\u5DE5\u4F5C\u53F0\u4E0E\u5F85\u53D1\u8D27\u5F02\u5E38\u8BA2\u5355\u4E00\u952E\u5DE1\u68C0...",
                      class: "w-full text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 dark:border-gray-800" }, [
                  createVNode("label", { class: "flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer" }, [
                    createVNode(_component_UCheckbox, {
                      modelValue: releaseForm.activate,
                      "onUpdate:modelValue": ($event) => releaseForm.activate = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("span", null, "\u53D1\u5E03\u540E\u7ACB\u5373\u8BBE\u4E3A\u7EBF\u4E0A\u5F53\u524D\u6FC0\u6D3B\u7248\u672C")
                  ]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    size: "sm",
                    icon: "ph:rocket-launch",
                    loading: publishing.value,
                    disabled: publishMode.value === "upload" ? !selectedFile.value : !releaseForm.version || !releaseForm.bundleUrl || !releaseForm.sha256,
                    onClick: submitRelease
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(publishMode.value === "upload" ? "\u4E0A\u4F20\u5E76\u53D1\u5E03\u7248\u672C" : "\u767B\u8BB0\u5E76\u53D1\u5E03\u7248\u672C"), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:clock-counter-clockwise",
              class: "w-4 h-4 text-gray-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u7248\u672C\u53D1\u5E03\u5386\u53F2\u4E0E\u79D2\u7EA7\u56DE\u6EDA (${ssrInterpolate(releases.value.length)})</span></h3>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "xs",
              icon: "ph:arrows-clockwise",
              loading: loadingList.value,
              onClick: loadReleases
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5237\u65B0 `);
                } else {
                  return [
                    createTextVNode(" \u5237\u65B0 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:clock-counter-clockwise",
                    class: "w-4 h-4 text-gray-500"
                  }),
                  createVNode("span", null, "\u7248\u672C\u53D1\u5E03\u5386\u53F2\u4E0E\u79D2\u7EA7\u56DE\u6EDA (" + toDisplayString(releases.value.length) + ")", 1)
                ]),
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  size: "xs",
                  icon: "ph:arrows-clockwise",
                  loading: loadingList.value,
                  onClick: loadReleases
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u5237\u65B0 ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (releases.value.length === 0) {
              _push2(`<div class="py-8 text-center text-xs text-gray-400"${_scopeId}> \u6682\u65E0\u5DF2\u53D1\u5E03\u7684\u5E94\u7528\u5305\u7248\u672C </div>`);
            } else {
              _push2(`<div class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><!--[-->`);
              ssrRenderList(releases.value, (rel) => {
                _push2(`<div class="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"${_scopeId}><div class="space-y-1 min-w-0"${_scopeId}><div class="flex flex-wrap items-center gap-2"${_scopeId}><span class="font-mono text-sm font-bold text-gray-900 dark:text-white"${_scopeId}> v${ssrInterpolate(rel.version)}</span>`);
                if (rel.isActive) {
                  _push2(ssrRenderComponent(_component_UBadge, {
                    color: "success",
                    variant: "subtle",
                    size: "xs"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` \u7EBF\u4E0A\u5F53\u524D\u6FC0\u6D3B `);
                      } else {
                        return [
                          createTextVNode(" \u7EBF\u4E0A\u5F53\u524D\u6FC0\u6D3B ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "neutral",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(rel.storageMode === "hosted" ? "\u5B98\u7F51\u6258\u7BA1" : "\u5916\u90E8\u94FE\u63A5")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(rel.storageMode === "hosted" ? "\u5B98\u7F51\u6258\u7BA1" : "\u5916\u90E8\u94FE\u63A5"), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                if (rel.minHostVersion) {
                  _push2(`<span class="text-[11px] font-mono text-gray-400"${_scopeId}> \u6700\u4F4E\u5BBF\u4E3B v${ssrInterpolate(rel.minHostVersion)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="text-[11px] text-gray-400"${_scopeId}>${ssrInterpolate(unref(formatByteSize)(rel.sizeBytes))} \xB7 ${ssrInterpolate(formatTime(rel.createdAt))}</span></div>`);
                if (rel.changelog) {
                  _push2(`<div class="text-xs text-gray-600 dark:text-gray-300"${_scopeId}>${ssrInterpolate(rel.changelog)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="text-[11px] font-mono text-gray-400 truncate"${ssrRenderAttr("title", rel.sha256)}${_scopeId}> sha256:${ssrInterpolate(rel.sha256)}</div></div><div class="flex items-center gap-1.5 shrink-0"${_scopeId}>`);
                if (!rel.isActive) {
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    variant: "soft",
                    size: "xs",
                    icon: "ph:arrow-u-up-left",
                    loading: switchingVersion.value === rel.version,
                    onClick: ($event) => activateRelease(rel.version)
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` \u8BBE\u4E3A\u5F53\u524D\u7248\u672C `);
                      } else {
                        return [
                          createTextVNode(" \u8BBE\u4E3A\u5F53\u524D\u7248\u672C ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  size: "xs",
                  icon: "ph:download-simple",
                  to: rel.bundleUrl,
                  target: "_blank"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u4E0B\u8F7D `);
                    } else {
                      return [
                        createTextVNode(" \u4E0B\u8F7D ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                if (!rel.isActive) {
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "error",
                    variant: "ghost",
                    size: "xs",
                    icon: "ph:trash",
                    loading: deletingVersion.value === rel.version,
                    onClick: ($event) => removeRelease(rel.version)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            }
          } else {
            return [
              releases.value.length === 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "py-8 text-center text-xs text-gray-400"
              }, " \u6682\u65E0\u5DF2\u53D1\u5E03\u7684\u5E94\u7528\u5305\u7248\u672C ")) : (openBlock(), createBlock("div", {
                key: 1,
                class: "divide-y divide-gray-100 dark:divide-gray-800"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(releases.value, (rel) => {
                  return openBlock(), createBlock("div", {
                    key: rel.version,
                    class: "py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  }, [
                    createVNode("div", { class: "space-y-1 min-w-0" }, [
                      createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                        createVNode("span", { class: "font-mono text-sm font-bold text-gray-900 dark:text-white" }, " v" + toDisplayString(rel.version), 1),
                        rel.isActive ? (openBlock(), createBlock(_component_UBadge, {
                          key: 0,
                          color: "success",
                          variant: "subtle",
                          size: "xs"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u7EBF\u4E0A\u5F53\u524D\u6FC0\u6D3B ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UBadge, {
                          color: "neutral",
                          variant: "subtle",
                          size: "xs"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(rel.storageMode === "hosted" ? "\u5B98\u7F51\u6258\u7BA1" : "\u5916\u90E8\u94FE\u63A5"), 1)
                          ]),
                          _: 2
                        }, 1024),
                        rel.minHostVersion ? (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-[11px] font-mono text-gray-400"
                        }, " \u6700\u4F4E\u5BBF\u4E3B v" + toDisplayString(rel.minHostVersion), 1)) : createCommentVNode("", true),
                        createVNode("span", { class: "text-[11px] text-gray-400" }, toDisplayString(unref(formatByteSize)(rel.sizeBytes)) + " \xB7 " + toDisplayString(formatTime(rel.createdAt)), 1)
                      ]),
                      rel.changelog ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-xs text-gray-600 dark:text-gray-300"
                      }, toDisplayString(rel.changelog), 1)) : createCommentVNode("", true),
                      createVNode("div", {
                        class: "text-[11px] font-mono text-gray-400 truncate",
                        title: rel.sha256
                      }, " sha256:" + toDisplayString(rel.sha256), 9, ["title"])
                    ]),
                    createVNode("div", { class: "flex items-center gap-1.5 shrink-0" }, [
                      !rel.isActive ? (openBlock(), createBlock(_component_UButton, {
                        key: 0,
                        color: "primary",
                        variant: "soft",
                        size: "xs",
                        icon: "ph:arrow-u-up-left",
                        loading: switchingVersion.value === rel.version,
                        onClick: ($event) => activateRelease(rel.version)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u8BBE\u4E3A\u5F53\u524D\u7248\u672C ")
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : createCommentVNode("", true),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        size: "xs",
                        icon: "ph:download-simple",
                        to: rel.bundleUrl,
                        target: "_blank"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u4E0B\u8F7D ")
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      !rel.isActive ? (openBlock(), createBlock(_component_UButton, {
                        key: 1,
                        color: "error",
                        variant: "ghost",
                        size: "xs",
                        icon: "ph:trash",
                        loading: deletingVersion.value === rel.version,
                        onClick: ($event) => removeRelease(rel.version)
                      }, null, 8, ["loading", "onClick"])) : createCommentVNode("", true)
                    ])
                  ]);
                }), 128))
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/components/HoxiWorkAppPackagesTab.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HoxiWorkAppPromptsTab",
  __ssrInlineRender: true,
  props: {
    app: {}
  },
  setup(__props) {
    const props = __props;
    const toast = useToast();
    const selectedCatIndex = ref(0);
    const jsonMode = ref(false);
    const jsonBuffer = ref("[]");
    watch(
      () => props.app.id,
      () => {
        selectedCatIndex.value = 0;
        jsonMode.value = false;
      }
    );
    const totalChipsCount = computed(
      () => (props.app.categories || []).reduce((sum, c) => {
        var _a;
        return sum + (((_a = c.chips) == null ? void 0 : _a.length) || 0);
      }, 0)
    );
    const activeCategory = computed(() => {
      const list = props.app.categories || [];
      if (list.length === 0) return null;
      const idx = Math.min(Math.max(0, selectedCatIndex.value), list.length - 1);
      return list[idx] || null;
    });
    const enterJsonMode = () => {
      jsonBuffer.value = JSON.stringify(props.app.categories || [], null, 2);
      jsonMode.value = true;
    };
    const applyJsonSource = () => {
      try {
        const parsed = JSON.parse(jsonBuffer.value);
        if (!Array.isArray(parsed) || parsed.length === 0) {
          toast.add({ title: "JSON \u5FC5\u987B\u662F\u975E\u7A7A\u5206\u7C7B\u6570\u7EC4", color: "warning" });
          return;
        }
        for (const [idx, cat] of parsed.entries()) {
          if (!(cat == null ? void 0 : cat.id) || !(cat == null ? void 0 : cat.label) || !Array.isArray(cat == null ? void 0 : cat.chips) || cat.chips.length === 0) {
            toast.add({ title: `\u7B2C ${idx + 1} \u4E2A\u5206\u7C7B\u7F3A\u5C11 id\u3001label \u6216\u975E\u7A7A chips \u6570\u7EC4`, color: "warning" });
            return;
          }
        }
        props.app.categories = parsed;
        selectedCatIndex.value = 0;
        jsonMode.value = false;
        toast.add({ title: "\u5DF2\u5E94\u7528 JSON \u81F3\u53EF\u89C6\u5316\u7F16\u6392\u5668\uFF0C\u522B\u5FD8\u4E86\u70B9\u51FB\u53F3\u4E0A\u89D2\u300C\u4FDD\u5B58\u5E94\u7528\u914D\u7F6E\u300D", color: "success" });
      } catch (err) {
        toast.add({ title: "JSON \u8BED\u6CD5\u89E3\u6790\u5931\u8D25", description: err == null ? void 0 : err.message, color: "error" });
      }
    };
    const addCategory = () => {
      var _a;
      const nextNum = (((_a = props.app.categories) == null ? void 0 : _a.length) || 0) + 1;
      props.app.categories.push({
        id: `category-${nextNum}`,
        label: `\u65B0\u8FD0\u8425\u573A\u666F ${nextNum}`,
        icon: "\u2728",
        placeholder: "\u63CF\u8FF0\u4F60\u7684\u4E1A\u52A1\u9700\u6C42...",
        chips: [
          {
            id: `category-${nextNum}-chip-1`,
            label: "\u5FEB\u6377\u64CD\u4F5C 1",
            placeholder: "\u8865\u5145\u5177\u4F53\u5546\u54C1\u6216\u5E97\u94FA\u53C2\u6570...",
            starterPrompt: `\u8BF7\u4F7F\u7528 \`${props.app.skillName || "ops"}\` \u6280\u80FD\u534F\u52A9\u5B8C\u6210\u4EE5\u4E0B\u4EFB\u52A1\uFF1A

`
          }
        ]
      });
      selectedCatIndex.value = props.app.categories.length - 1;
    };
    const removeCategory = (idx) => {
      if (props.app.categories.length <= 1) return;
      props.app.categories.splice(idx, 1);
      if (selectedCatIndex.value >= props.app.categories.length) {
        selectedCatIndex.value = Math.max(0, props.app.categories.length - 1);
      }
    };
    const moveCategory = (idx, delta) => {
      const target = idx + delta;
      if (target < 0 || target >= props.app.categories.length) return;
      const temp = props.app.categories[idx];
      props.app.categories[idx] = props.app.categories[target];
      props.app.categories[target] = temp;
      selectedCatIndex.value = target;
    };
    const addChip = () => {
      var _a;
      const cat = activeCategory.value;
      if (!cat) return;
      const nextNum = (((_a = cat.chips) == null ? void 0 : _a.length) || 0) + 1;
      cat.chips.push({
        id: `${cat.id}-chip-${nextNum}`,
        label: `\u65B0\u5FEB\u6377\u6307\u4EE4 ${nextNum}`,
        placeholder: "\u8F93\u5165\u5177\u4F53\u76EE\u6807\u6216\u6570\u636E...",
        starterPrompt: `\u8BF7\u4F7F\u7528 \`${props.app.skillName || "ops"}\` \u6280\u80FD\u5904\u7406\u4EE5\u4E0B\u4EFB\u52A1\uFF1A

`
      });
    };
    const removeChip = (cIdx) => {
      const cat = activeCategory.value;
      if (!cat || cat.chips.length <= 1) return;
      cat.chips.splice(cIdx, 1);
    };
    const moveChip = (cIdx, delta) => {
      const cat = activeCategory.value;
      if (!cat) return;
      const target = cIdx + delta;
      if (target < 0 || target >= cat.chips.length) return;
      const temp = cat.chips[cIdx];
      cat.chips[cIdx] = cat.chips[target];
      cat.chips[target] = temp;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$10;
      const _component_UButton = _sfc_main$X;
      const _component_UCard = _sfc_main$q;
      const _component_UTextarea = _sfc_main$E;
      const _component_UFormField = _sfc_main$F;
      const _component_UInput = _sfc_main$D;
      const _component_UBadge = _sfc_main$R;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3"><div class="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:sparkle",
        class: "w-4 h-4 text-sky-500 shrink-0"
      }, null, _parent));
      _push(`<span> \u5F53\u524D\u5171\u914D\u7F6E <strong>${ssrInterpolate(__props.app.categories.length)}</strong> \u4E2A\u573A\u666F\u5206\u7C7B Tab\uFF0C\u5408\u8BA1 <strong>${ssrInterpolate(totalChipsCount.value)}</strong> \u4E2A\u5FEB\u6377\u6307\u4EE4\u80F6\u56CA\u3002 </span></div><div class="flex items-center gap-2">`);
      if (!jsonMode.value) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "outline",
          size: "xs",
          icon: "ph:code",
          onClick: enterJsonMode
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u5207\u6362 JSON \u6E90\u7801\u5BFC\u5165/\u5BFC\u51FA `);
            } else {
              return [
                createTextVNode(" \u5207\u6362 JSON \u6E90\u7801\u5BFC\u5165/\u5BFC\u51FA ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "ghost",
          size: "xs",
          onClick: ($event) => jsonMode.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u53D6\u6D88\u6E90\u7801\u4FEE\u6539 `);
            } else {
              return [
                createTextVNode(" \u53D6\u6D88\u6E90\u7801\u4FEE\u6539 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          color: "primary",
          size: "xs",
          icon: "ph:check",
          onClick: applyJsonSource
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u6821\u9A8C\u5E76\u5E94\u7528\u5230\u53EF\u89C6\u5316\u7F16\u8F91\u5668 `);
            } else {
              return [
                createTextVNode(" \u6821\u9A8C\u5E76\u5E94\u7528\u5230\u53EF\u89C6\u5316\u7F16\u8F91\u5668 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div></div>`);
      if (jsonMode.value) {
        _push(ssrRenderComponent(_component_UCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-xs text-gray-500"${_scopeId}> \u652F\u6301\u6279\u91CF\u7C98\u8D34\u6216\u5907\u4EFD \`categories\` JSON \u6570\u7EC4\u3002\u70B9\u51FB\u53F3\u4E0A\u89D2\u300C\u6821\u9A8C\u5E76\u5E94\u7528\u300D\u540E\u5207\u56DE\u53EF\u89C6\u5316\u7F16\u6392\u3002 </div>`);
            } else {
              return [
                createVNode("div", { class: "text-xs text-gray-500" }, " \u652F\u6301\u6279\u91CF\u7C98\u8D34\u6216\u5907\u4EFD `categories` JSON \u6570\u7EC4\u3002\u70B9\u51FB\u53F3\u4E0A\u89D2\u300C\u6821\u9A8C\u5E76\u5E94\u7528\u300D\u540E\u5207\u56DE\u53EF\u89C6\u5316\u7F16\u6392\u3002 ")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UTextarea, {
                modelValue: jsonBuffer.value,
                "onUpdate:modelValue": ($event) => jsonBuffer.value = $event,
                rows: 22,
                class: "w-full font-mono text-xs"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UTextarea, {
                  modelValue: jsonBuffer.value,
                  "onUpdate:modelValue": ($event) => jsonBuffer.value = $event,
                  rows: 22,
                  class: "w-full font-mono text-xs"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">`);
        _push(ssrRenderComponent(_component_UCard, { class: "lg:col-span-4" }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>1. \u573A\u666F\u5206\u7C7B Tab</h3>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                variant: "soft",
                size: "xs",
                icon: "ph:plus",
                onClick: addCategory
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u65B0\u589E\u5206\u7C7B `);
                  } else {
                    return [
                      createTextVNode(" \u65B0\u589E\u5206\u7C7B ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, "1. \u573A\u666F\u5206\u7C7B Tab"),
                  createVNode(_component_UButton, {
                    color: "primary",
                    variant: "soft",
                    size: "xs",
                    icon: "ph:plus",
                    onClick: addCategory
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u65B0\u589E\u5206\u7C7B ")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-2"${_scopeId}><!--[-->`);
              ssrRenderList(__props.app.categories, (cat, idx) => {
                var _a;
                _push2(`<div class="${ssrRenderClass([
                  selectedCatIndex.value === idx ? "border-sky-500 bg-sky-50/60 dark:bg-sky-950/30" : "border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50",
                  "group rounded-lg border p-2.5 cursor-pointer transition-colors"
                ])}"${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}><div class="flex items-center gap-2 min-w-0"${_scopeId}><span class="text-base shrink-0"${_scopeId}>${ssrInterpolate(cat.icon || "\u2728")}</span><div class="min-w-0"${_scopeId}><div class="text-xs font-semibold text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(cat.label || "\u672A\u547D\u540D\u5206\u7C7B")}</div><div class="text-[11px] font-mono text-gray-400 truncate"${_scopeId}>${ssrInterpolate(cat.id)} \xB7 ${ssrInterpolate(((_a = cat.chips) == null ? void 0 : _a.length) || 0)} \u4E2A\u80F6\u56CA </div></div></div><div class="flex items-center gap-0.5 shrink-0"${_scopeId}><button type="button" class="p-1 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 disabled:opacity-30"${ssrIncludeBooleanAttr(idx === 0) ? " disabled" : ""} title="\u4E0A\u79FB"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-up",
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
                _push2(`</button><button type="button" class="p-1 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 disabled:opacity-30"${ssrIncludeBooleanAttr(idx === __props.app.categories.length - 1) ? " disabled" : ""} title="\u4E0B\u79FB"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-down",
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
                _push2(`</button><button type="button" class="p-1 text-gray-400 hover:text-red-500 disabled:opacity-30"${ssrIncludeBooleanAttr(__props.app.categories.length <= 1) ? " disabled" : ""} title="\u5220\u9664\u8BE5\u5206\u7C7B"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:trash",
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
                _push2(`</button></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.app.categories, (cat, idx) => {
                    var _a;
                    return openBlock(), createBlock("div", {
                      key: `${cat.id}-${idx}`,
                      class: [
                        "group rounded-lg border p-2.5 cursor-pointer transition-colors",
                        selectedCatIndex.value === idx ? "border-sky-500 bg-sky-50/60 dark:bg-sky-950/30" : "border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      ],
                      onClick: ($event) => selectedCatIndex.value = idx
                    }, [
                      createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                        createVNode("div", { class: "flex items-center gap-2 min-w-0" }, [
                          createVNode("span", { class: "text-base shrink-0" }, toDisplayString(cat.icon || "\u2728"), 1),
                          createVNode("div", { class: "min-w-0" }, [
                            createVNode("div", { class: "text-xs font-semibold text-gray-900 dark:text-white truncate" }, toDisplayString(cat.label || "\u672A\u547D\u540D\u5206\u7C7B"), 1),
                            createVNode("div", { class: "text-[11px] font-mono text-gray-400 truncate" }, toDisplayString(cat.id) + " \xB7 " + toDisplayString(((_a = cat.chips) == null ? void 0 : _a.length) || 0) + " \u4E2A\u80F6\u56CA ", 1)
                          ])
                        ]),
                        createVNode("div", {
                          class: "flex items-center gap-0.5 shrink-0",
                          onClick: withModifiers(() => {
                          }, ["stop"])
                        }, [
                          createVNode("button", {
                            type: "button",
                            class: "p-1 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 disabled:opacity-30",
                            disabled: idx === 0,
                            title: "\u4E0A\u79FB",
                            onClick: ($event) => moveCategory(idx, -1)
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-up",
                              class: "w-3.5 h-3.5"
                            })
                          ], 8, ["disabled", "onClick"]),
                          createVNode("button", {
                            type: "button",
                            class: "p-1 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 disabled:opacity-30",
                            disabled: idx === __props.app.categories.length - 1,
                            title: "\u4E0B\u79FB",
                            onClick: ($event) => moveCategory(idx, 1)
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-down",
                              class: "w-3.5 h-3.5"
                            })
                          ], 8, ["disabled", "onClick"]),
                          createVNode("button", {
                            type: "button",
                            class: "p-1 text-gray-400 hover:text-red-500 disabled:opacity-30",
                            disabled: __props.app.categories.length <= 1,
                            title: "\u5220\u9664\u8BE5\u5206\u7C7B",
                            onClick: ($event) => removeCategory(idx)
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:trash",
                              class: "w-3.5 h-3.5"
                            })
                          ], 8, ["disabled", "onClick"])
                        ], 8, ["onClick"])
                      ])
                    ], 10, ["onClick"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        if (activeCategory.value) {
          _push(`<div class="lg:col-span-8 space-y-5">`);
          _push(ssrRenderComponent(_component_UCard, null, {
            header: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h3 class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}><span${_scopeId}>${ssrInterpolate(activeCategory.value.icon || "\u2728")}</span><span${_scopeId}>\u5F53\u524D\u5206\u7C7B\u8BBE\u7F6E\uFF1A${ssrInterpolate(activeCategory.value.label)}</span></h3>`);
              } else {
                return [
                  createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                    createVNode("span", null, toDisplayString(activeCategory.value.icon || "\u2728"), 1),
                    createVNode("span", null, "\u5F53\u524D\u5206\u7C7B\u8BBE\u7F6E\uFF1A" + toDisplayString(activeCategory.value.label), 1)
                  ])
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="space-y-4"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-6 gap-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: "\u56FE\u6807 Emoji",
                  class: "sm:col-span-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: activeCategory.value.icon,
                        "onUpdate:modelValue": ($event) => activeCategory.value.icon = $event,
                        placeholder: "\u{1F4E6}",
                        size: "sm",
                        class: "w-full text-center"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: activeCategory.value.icon,
                          "onUpdate:modelValue": ($event) => activeCategory.value.icon = $event,
                          placeholder: "\u{1F4E6}",
                          size: "sm",
                          class: "w-full text-center"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: "\u5206\u7C7B\u6807\u9898 (label)",
                  required: "",
                  class: "sm:col-span-3"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: activeCategory.value.label,
                        "onUpdate:modelValue": ($event) => activeCategory.value.label = $event,
                        placeholder: "\u5546\u54C1\u4E0E\u53D8\u4F53\u4E0A\u67B6",
                        size: "sm",
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: activeCategory.value.label,
                          "onUpdate:modelValue": ($event) => activeCategory.value.label = $event,
                          placeholder: "\u5546\u54C1\u4E0E\u53D8\u4F53\u4E0A\u67B6",
                          size: "sm",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: "\u5206\u7C7B ID",
                  required: "",
                  class: "sm:col-span-2"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: activeCategory.value.id,
                        "onUpdate:modelValue": ($event) => activeCategory.value.id = $event,
                        placeholder: "product-merchandising",
                        size: "sm",
                        class: "w-full font-mono text-xs"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: activeCategory.value.id,
                          "onUpdate:modelValue": ($event) => activeCategory.value.id = $event,
                          placeholder: "product-merchandising",
                          size: "sm",
                          class: "w-full font-mono text-xs"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(_component_UFormField, { label: "\u5207\u6362\u5230\u8BE5\u5206\u7C7B\u65F6\u7684\u8F93\u5165\u6846\u5F15\u5BFC\u5360\u4F4D\u8BCD (placeholder)" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: activeCategory.value.placeholder,
                        "onUpdate:modelValue": ($event) => activeCategory.value.placeholder = $event,
                        placeholder: "\u8F93\u5165\u65B0\u54C1\u4FE1\u606F\u3001\u4F9B\u5E94\u5546\u53C2\u6570\u8868\u6216\u7ADE\u54C1\u94FE\u63A5\uFF0C\u4E00\u952E\u751F\u6210\u9AD8\u8F6C\u5316\u65B9\u6848...",
                        size: "sm",
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: activeCategory.value.placeholder,
                          "onUpdate:modelValue": ($event) => activeCategory.value.placeholder = $event,
                          placeholder: "\u8F93\u5165\u65B0\u54C1\u4FE1\u606F\u3001\u4F9B\u5E94\u5546\u53C2\u6570\u8868\u6216\u7ADE\u54C1\u94FE\u63A5\uFF0C\u4E00\u952E\u751F\u6210\u9AD8\u8F6C\u5316\u65B9\u6848...",
                          size: "sm",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-6 gap-3" }, [
                      createVNode(_component_UFormField, {
                        label: "\u56FE\u6807 Emoji",
                        class: "sm:col-span-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: activeCategory.value.icon,
                            "onUpdate:modelValue": ($event) => activeCategory.value.icon = $event,
                            placeholder: "\u{1F4E6}",
                            size: "sm",
                            class: "w-full text-center"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormField, {
                        label: "\u5206\u7C7B\u6807\u9898 (label)",
                        required: "",
                        class: "sm:col-span-3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: activeCategory.value.label,
                            "onUpdate:modelValue": ($event) => activeCategory.value.label = $event,
                            placeholder: "\u5546\u54C1\u4E0E\u53D8\u4F53\u4E0A\u67B6",
                            size: "sm",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormField, {
                        label: "\u5206\u7C7B ID",
                        required: "",
                        class: "sm:col-span-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: activeCategory.value.id,
                            "onUpdate:modelValue": ($event) => activeCategory.value.id = $event,
                            placeholder: "product-merchandising",
                            size: "sm",
                            class: "w-full font-mono text-xs"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_UFormField, { label: "\u5207\u6362\u5230\u8BE5\u5206\u7C7B\u65F6\u7684\u8F93\u5165\u6846\u5F15\u5BFC\u5360\u4F4D\u8BCD (placeholder)" }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: activeCategory.value.placeholder,
                          "onUpdate:modelValue": ($event) => activeCategory.value.placeholder = $event,
                          placeholder: "\u8F93\u5165\u65B0\u54C1\u4FE1\u606F\u3001\u4F9B\u5E94\u5546\u53C2\u6570\u8868\u6216\u7ADE\u54C1\u94FE\u63A5\uFF0C\u4E00\u952E\u751F\u6210\u9AD8\u8F6C\u5316\u65B9\u6848...",
                          size: "sm",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_UCard, null, {
            header: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}> 2. \u5FEB\u6377\u6307\u4EE4\u80F6\u56CA (Chips \xB7 ${ssrInterpolate(activeCategory.value.chips.length)}) </h3><p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400"${_scopeId}> \u7528\u6237\u70B9\u51FB\u80F6\u56CA\u540E\uFF0C\u81EA\u52A8\u5411\u8F93\u5165\u6846\u6CE8\u5165\u9884\u8BBE\u7684\u4E13\u4E1A SOP \u63D0\u793A\u8BCD (\`starterPrompt\`) \u5E76\u5207\u6362\u8F93\u5165\u63D0\u793A\u3002 </p></div>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "primary",
                  variant: "soft",
                  size: "xs",
                  icon: "ph:plus",
                  onClick: addChip
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u65B0\u589E\u5FEB\u6377\u80F6\u56CA `);
                    } else {
                      return [
                        createTextVNode(" \u65B0\u589E\u5FEB\u6377\u80F6\u56CA ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, " 2. \u5FEB\u6377\u6307\u4EE4\u80F6\u56CA (Chips \xB7 " + toDisplayString(activeCategory.value.chips.length) + ") ", 1),
                      createVNode("p", { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, " \u7528\u6237\u70B9\u51FB\u80F6\u56CA\u540E\uFF0C\u81EA\u52A8\u5411\u8F93\u5165\u6846\u6CE8\u5165\u9884\u8BBE\u7684\u4E13\u4E1A SOP \u63D0\u793A\u8BCD (`starterPrompt`) \u5E76\u5207\u6362\u8F93\u5165\u63D0\u793A\u3002 ")
                    ]),
                    createVNode(_component_UButton, {
                      color: "primary",
                      variant: "soft",
                      size: "xs",
                      icon: "ph:plus",
                      onClick: addChip
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u65B0\u589E\u5FEB\u6377\u80F6\u56CA ")
                      ]),
                      _: 1
                    })
                  ])
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
                ssrRenderList(activeCategory.value.chips, (chip, cIdx) => {
                  var _a;
                  _push2(`<div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/40 dark:bg-gray-900/40 p-4 space-y-3"${_scopeId}><div class="flex items-center justify-between gap-2 pb-2 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UBadge, {
                    color: "neutral",
                    variant: "subtle",
                    size: "xs",
                    class: "font-mono"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` #${ssrInterpolate(cIdx + 1)}`);
                      } else {
                        return [
                          createTextVNode(" #" + toDisplayString(cIdx + 1), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`<span class="text-xs font-semibold text-gray-800 dark:text-gray-200"${_scopeId}>${ssrInterpolate(chip.label || "\u672A\u547D\u540D\u80F6\u56CA")}</span></div><div class="flex items-center gap-1"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    size: "xs",
                    icon: "ph:arrow-up",
                    disabled: cIdx === 0,
                    onClick: ($event) => moveChip(cIdx, -1)
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    size: "xs",
                    icon: "ph:arrow-down",
                    disabled: cIdx === activeCategory.value.chips.length - 1,
                    onClick: ($event) => moveChip(cIdx, 1)
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "error",
                    variant: "ghost",
                    size: "xs",
                    icon: "ph:trash",
                    disabled: activeCategory.value.chips.length <= 1,
                    onClick: ($event) => removeChip(cIdx)
                  }, null, _parent2, _scopeId));
                  _push2(`</div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UFormField, {
                    label: "\u80F6\u56CA\u6309\u94AE\u6587\u6848 (label)",
                    required: ""
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_UInput, {
                          modelValue: chip.label,
                          "onUpdate:modelValue": ($event) => chip.label = $event,
                          placeholder: "\u9AD8\u8F6C\u5316 Shopify \u5546\u54C1\u4E0A\u67B6\u5168\u6848",
                          size: "sm",
                          class: "w-full"
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: chip.label,
                            "onUpdate:modelValue": ($event) => chip.label = $event,
                            placeholder: "\u9AD8\u8F6C\u5316 Shopify \u5546\u54C1\u4E0A\u67B6\u5168\u6848",
                            size: "sm",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_UFormField, {
                    label: "\u80F6\u56CA\u552F\u4E00 ID",
                    required: ""
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_UInput, {
                          modelValue: chip.id,
                          "onUpdate:modelValue": ($event) => chip.id = $event,
                          placeholder: "shopify-pdp-listing",
                          size: "sm",
                          class: "w-full font-mono text-xs"
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: chip.id,
                            "onUpdate:modelValue": ($event) => chip.id = $event,
                            placeholder: "shopify-pdp-listing",
                            size: "sm",
                            class: "w-full font-mono text-xs"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                  _push2(ssrRenderComponent(_component_UFormField, { label: "\u9009\u4E2D\u540E\u8F93\u5165\u6846\u5360\u4F4D\u63D0\u793A (placeholder)" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_UInput, {
                          modelValue: chip.placeholder,
                          "onUpdate:modelValue": ($event) => chip.placeholder = $event,
                          placeholder: "\u8F93\u5165\u4EA7\u54C1\u540D\u79F0\u3001\u6838\u5FC3\u5356\u70B9\u4E0E\u76EE\u6807\u5E02\u573A\uFF0C\u751F\u6210 SEO Title \u4E0E\u8BE6\u60C5...",
                          size: "sm",
                          class: "w-full"
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: chip.placeholder,
                            "onUpdate:modelValue": ($event) => chip.placeholder = $event,
                            placeholder: "\u8F93\u5165\u4EA7\u54C1\u540D\u79F0\u3001\u6838\u5FC3\u5356\u70B9\u4E0E\u76EE\u6807\u5E02\u573A\uFF0C\u751F\u6210 SEO Title \u4E0E\u8BE6\u60C5...",
                            size: "sm",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_UFormField, {
                    label: "\u9884\u7F6E\u6307\u4EE4\u6A21\u677F (starterPrompt)",
                    required: "",
                    help: `\u5F53\u524D ${((_a = chip.starterPrompt) == null ? void 0 : _a.length) || 0} \u5B57\u7B26 \xB7 \u5EFA\u8BAE\u5728 Prompt \u4E2D\u663E\u5F0F\u70B9\u540D\u8C03\u7528 ${__props.app.skillName || "\u5BF9\u5E94\u6280\u80FD"}`
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_UTextarea, {
                          modelValue: chip.starterPrompt,
                          "onUpdate:modelValue": ($event) => chip.starterPrompt = $event,
                          rows: 5,
                          placeholder: "\u8BF7\u4F7F\u7528 `shopify-ops` \u6280\u80FD\uFF0C\u4E3A\u4EE5\u4E0B\u5546\u54C1\u8F93\u51FA\u53EF\u76F4\u63A5\u4E0A\u67B6\u7684\u5B8C\u6574\u9AD8\u8F6C\u5316\u65B9\u6848...",
                          class: "w-full font-mono text-xs leading-relaxed"
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_UTextarea, {
                            modelValue: chip.starterPrompt,
                            "onUpdate:modelValue": ($event) => chip.starterPrompt = $event,
                            rows: 5,
                            placeholder: "\u8BF7\u4F7F\u7528 `shopify-ops` \u6280\u80FD\uFF0C\u4E3A\u4EE5\u4E0B\u5546\u54C1\u8F93\u51FA\u53EF\u76F4\u63A5\u4E0A\u67B6\u7684\u5B8C\u6574\u9AD8\u8F6C\u5316\u65B9\u6848...",
                            class: "w-full font-mono text-xs leading-relaxed"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                return [
                  createVNode("div", { class: "space-y-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(activeCategory.value.chips, (chip, cIdx) => {
                      var _a;
                      return openBlock(), createBlock("div", {
                        key: `${chip.id}-${cIdx}`,
                        class: "rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/40 dark:bg-gray-900/40 p-4 space-y-3"
                      }, [
                        createVNode("div", { class: "flex items-center justify-between gap-2 pb-2 border-b border-gray-100 dark:border-gray-800" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_UBadge, {
                              color: "neutral",
                              variant: "subtle",
                              size: "xs",
                              class: "font-mono"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" #" + toDisplayString(cIdx + 1), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("span", { class: "text-xs font-semibold text-gray-800 dark:text-gray-200" }, toDisplayString(chip.label || "\u672A\u547D\u540D\u80F6\u56CA"), 1)
                          ]),
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:arrow-up",
                              disabled: cIdx === 0,
                              onClick: ($event) => moveChip(cIdx, -1)
                            }, null, 8, ["disabled", "onClick"]),
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:arrow-down",
                              disabled: cIdx === activeCategory.value.chips.length - 1,
                              onClick: ($event) => moveChip(cIdx, 1)
                            }, null, 8, ["disabled", "onClick"]),
                            createVNode(_component_UButton, {
                              color: "error",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:trash",
                              disabled: activeCategory.value.chips.length <= 1,
                              onClick: ($event) => removeChip(cIdx)
                            }, null, 8, ["disabled", "onClick"])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-3" }, [
                          createVNode(_component_UFormField, {
                            label: "\u80F6\u56CA\u6309\u94AE\u6587\u6848 (label)",
                            required: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: chip.label,
                                "onUpdate:modelValue": ($event) => chip.label = $event,
                                placeholder: "\u9AD8\u8F6C\u5316 Shopify \u5546\u54C1\u4E0A\u67B6\u5168\u6848",
                                size: "sm",
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UFormField, {
                            label: "\u80F6\u56CA\u552F\u4E00 ID",
                            required: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: chip.id,
                                "onUpdate:modelValue": ($event) => chip.id = $event,
                                placeholder: "shopify-pdp-listing",
                                size: "sm",
                                class: "w-full font-mono text-xs"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode(_component_UFormField, { label: "\u9009\u4E2D\u540E\u8F93\u5165\u6846\u5360\u4F4D\u63D0\u793A (placeholder)" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: chip.placeholder,
                              "onUpdate:modelValue": ($event) => chip.placeholder = $event,
                              placeholder: "\u8F93\u5165\u4EA7\u54C1\u540D\u79F0\u3001\u6838\u5FC3\u5356\u70B9\u4E0E\u76EE\u6807\u5E02\u573A\uFF0C\u751F\u6210 SEO Title \u4E0E\u8BE6\u60C5...",
                              size: "sm",
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UFormField, {
                          label: "\u9884\u7F6E\u6307\u4EE4\u6A21\u677F (starterPrompt)",
                          required: "",
                          help: `\u5F53\u524D ${((_a = chip.starterPrompt) == null ? void 0 : _a.length) || 0} \u5B57\u7B26 \xB7 \u5EFA\u8BAE\u5728 Prompt \u4E2D\u663E\u5F0F\u70B9\u540D\u8C03\u7528 ${__props.app.skillName || "\u5BF9\u5E94\u6280\u80FD"}`
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UTextarea, {
                              modelValue: chip.starterPrompt,
                              "onUpdate:modelValue": ($event) => chip.starterPrompt = $event,
                              rows: 5,
                              placeholder: "\u8BF7\u4F7F\u7528 `shopify-ops` \u6280\u80FD\uFF0C\u4E3A\u4EE5\u4E0B\u5546\u54C1\u8F93\u51FA\u53EF\u76F4\u63A5\u4E0A\u67B6\u7684\u5B8C\u6574\u9AD8\u8F6C\u5316\u65B9\u6848...",
                              class: "w-full font-mono text-xs leading-relaxed"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1032, ["help"])
                      ]);
                    }), 128))
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/components/HoxiWorkAppPromptsTab.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const hoxiPlatformWorkApps = [
  {
    id: "shopify",
    name: "Shopify \u72EC\u7ACB\u7AD9\u8FD0\u8425",
    shortName: "Shopify",
    heroTitle: "Shopify AI\uFF0C\u4E00\u7AD9\u5F0F\u5168\u7403\u72EC\u7ACB\u7AD9\u8FD0\u8425 Agent",
    tagline: "\u5546\u54C1\u4E0E\u591A\u89C4\u683C\u4E0A\u67B6\u3001Liquid \u4E3B\u9898\u88C5\u4FEE\u3001\u6298\u6263\u6D3B\u52A8\u4E0E\u5F03\u5355\u633D\u56DE\u4E13\u5BB6",
    skillName: "shopify-ops",
    iconBg: "linear-gradient(135deg, #16A34A 0%, #65A30D 100%)",
    iconGlyph: "S",
    mascotEmoji: "\u{1F6CD}\uFE0F",
    mascotTitle: "Shopify \u589E\u957F\u5E97\u957F",
    connectionLabel: "\u767B\u5F55 Shopify MCP",
    connectionUrlLabel: "Shopify \u5E97\u94FA\u57DF\u540D (*.myshopify.com \u6216\u4E3B\u57DF\u540D)",
    connectionUrlPlaceholder: "https://your-store.myshopify.com",
    connectionTokenLabel: "Shopify Admin Access Token (shpat_...\uFF0C\u53EF\u9009)",
    connectionTokenPlaceholder: "shpat_xxxxxxxxxxxxxxxxxxxxxxxx\uFF08\u7559\u7A7A\u5219\u8D70 Hoxi.ai \u4E00\u952E\u6388\u6743\uFF09",
    mcp: {
      serverId: "shopify-mcp",
      name: "Shopify \u5B98\u65B9\u5E97\u52A1 MCP",
      url: "/api/mcp",
      transport: "http",
      authType: "oauth",
      authUrl: "/api/hoxi/work/oauth/shopify/authorize",
      consoleUrl: "/user/tokens",
      scopes: [
        "mcp:tools",
        "mcp:profile:read",
        "mcp:orders:read",
        "mcp:subscriptions:read",
        "mcp:theme:read",
        "mcp:theme:plan"
      ],
      toolsPreview: [
        "shopify.products_upsert",
        "shopify.theme_liquid_patch",
        "shopify.discounts_manage",
        "shopify.orders_inventory_audit"
      ]
    },
    categories: [
      {
        id: "product-merchandising",
        label: "\u5546\u54C1\u4E0E\u53D8\u4F53\u4E0A\u67B6",
        icon: "\u{1F4E6}",
        placeholder: "\u8F93\u5165\u65B0\u54C1\u4FE1\u606F\u3001\u4F9B\u5E94\u5546\u53C2\u6570\u8868\u6216\u7ADE\u54C1\u94FE\u63A5\uFF0C\u4E00\u952E\u751F\u6210 Shopify \u9AD8\u8F6C\u5316\u5546\u54C1\u9875\u4E0E\u53D8\u4F53\u65B9\u6848...",
        chips: [
          {
            id: "shopify-pdp-listing",
            label: "\u9AD8\u8F6C\u5316 Shopify \u5546\u54C1\u4E0A\u67B6\u5168\u6848",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u540D\u79F0\u3001\u6838\u5FC3\u5356\u70B9\u4E0E\u76EE\u6807\u5E02\u573A\uFF0C\u751F\u6210 SEO Title\u30015 \u70B9\u5229\u76CA\u3001OS 2.0 \u8BE6\u60C5\u4E0E Metafields...",
            starterPrompt: "\u8BF7\u4F7F\u7528 Shopify \u8FD0\u8425\u6280\u80FD\uFF0C\u4E3A\u4EE5\u4E0B\u5546\u54C1\u8F93\u51FA\u53EF\u76F4\u63A5\u4E0A\u67B6\u7684\u5B8C\u6574\u9AD8\u8F6C\u5316\u65B9\u6848\uFF08\u5305\u542B SEO Title & URL Handle\u3001\u9996\u5C4F 5 \u5927\u75DB\u70B9\u5229\u76CA Bullet Points\u3001\u6A21\u5757\u5316\u8BE6\u60C5\u9875 HTML/Markdown\u3001Collections \u5F52\u7C7B\u89C4\u5219\u3001custom.* Metafields \u5B57\u6BB5\u5EFA\u8BAE\u53CA 155 \u5B57\u7B26 Meta Description\uFF09\uFF1A\n\n\u5546\u54C1\u8D44\u6599\u4E0E\u76EE\u6807\u5E02\u573A\uFF1A"
          },
          {
            id: "shopify-variants-bundle",
            label: "\u591A\u89C4\u683C\u53D8\u4F53\u4E0E\u9636\u68AF\u52A0\u8D2D\u5B9A\u4EF7",
            placeholder: "\u8F93\u5165\u5355\u4EF6\u6210\u672C\u4E0E\u552E\u4EF7\uFF0C\u8BBE\u8BA1 Variants \u89C4\u683C\u77E9\u9635\u4E0E\u4E70\u591A\u7701\u591A\uFF08Tiered Bundle\uFF09\u52A0\u8D2D\u65B9\u6848...",
            starterPrompt: "\u8BF7\u5E2E\u6211\u4E3A\u8FD9\u6B3E Shopify \u4E3B\u63A8\u5546\u54C1\u8BBE\u8BA1\u63D0\u5347 AOV\uFF08\u5BA2\u5355\u4EF7\uFF09\u7684\u89C4\u683C\u53D8\u4F53\uFF08Variants\uFF09\u4E0E 3 \u6863\u9636\u68AF\u8D2D\u4E70\u65B9\u6848\uFF081 \u4EF6\u6807\u51C6\u88C5 / 2 \u4EF6\u6700\u53D7\u6B22\u8FCE\u88C5\u7701 15% / 3 \u4EF6\u5BB6\u5EAD\u56E4\u8D27\u88C5\u7701 25% + \u514D\u90AE\uFF09\uFF0C\u5E76\u7ED9\u51FA Cart Drawer \u987A\u624B\u4E70\u4E00\u4EF6\uFF08Order Bump\uFF09\u914D\u7F6E\u5EFA\u8BAE\uFF1A\n\n\u5546\u54C1\u6210\u672C\u4E0E\u76EE\u6807\u552E\u4EF7\uFF1A"
          },
          {
            id: "shopify-chrome-link-fill",
            label: "Chrome Link \u81EA\u52A8\u586B\u5165 Shopify \u540E\u53F0",
            placeholder: "\u5C06\u5B9A\u7A3F\u7684\u5546\u54C1\u6807\u9898\u3001\u8BE6\u60C5\u4E0E\u53D8\u4F53\u4EF7\u683C\u534A\u81EA\u52A8\u586B\u5165\u5DF2\u6253\u5F00\u7684 Shopify Admin \u6807\u7B7E\u9875...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `shopify-ops` \u6280\u80FD\u914D\u5408 `hoxi_browser`\uFF08Chrome Link\uFF09\uFF0C\u5C06\u6211\u4EEC\u5B9A\u7A3F\u7684\u5546\u54C1\u6807\u9898\u3001\u8BE6\u60C5\u63CF\u8FF0\u3001SEO Handle \u4E0E\u53D8\u4F53\u4EF7\u683C\u81EA\u52A8\u586B\u5165\u6211\u5F53\u524D\u5DF2\u6253\u5F00\u7684 Shopify Admin \u5546\u54C1\u7F16\u8F91\u6807\u7B7E\u9875\u4E2D\uFF0C\u5E76\u5728\u70B9\u51FB\u6700\u7EC8 Save \u6309\u94AE\u524D\u505C\u4E0B\u8BA9\u6211\u6838\u5BF9\u786E\u8BA4\uFF1A\n\n\u5F85\u586B\u5165\u5546\u54C1\u6216\u6307\u4EE4\uFF1A"
          },
          {
            id: "shopify-csv-batch",
            label: "\u751F\u6210 Shopify \u6279\u91CF\u5BFC\u5165 CSV \u6A21\u677F",
            placeholder: "\u7C98\u8D34\u591A\u6B3E\u5546\u54C1\u6216 SKU \u53C2\u6570\uFF0C\u751F\u6210\u7B26\u5408 Shopify \u6807\u51C6\u5B57\u6BB5\u7684\u6279\u91CF\u5BFC\u5165\u8868\u683C...",
            starterPrompt: "\u8BF7\u5C06\u4EE5\u4E0B\u5546\u54C1\u4E0E\u591A\u89C4\u683C\u4FE1\u606F\u6574\u7406\u4E3A\u7B26\u5408 Shopify \u5B98\u65B9\u4EA7\u54C1\u5BFC\u5165\u89C4\u8303\u7684\u7ED3\u6784\u5316\u8868\u683C\u4E0E\u5B57\u6BB5\u6E05\u5355\uFF08\u542B Handle\u3001Title\u3001Body HTML\u3001Vendor\u3001Product Category\u3001Type\u3001Tags\u3001Option1 Name/Value\u3001Variant Price/Compare At Price\u3001Variant SKU\uFF09\uFF1A\n\n\u539F\u59CB\u5546\u54C1\u6E05\u5355\uFF1A"
          }
        ]
      },
      {
        id: "liquid-theme-cro",
        label: "Liquid \u4E3B\u9898\u4E0E\u88C5\u4FEE",
        icon: "\u{1F3A8}",
        placeholder: "\u63CF\u8FF0\u4F60\u60F3\u5B9A\u5236\u7684 Shopify \u9875\u9762\u6A21\u5757\u6216\u7C98\u8D34\u5E97\u94FA\u94FE\u63A5\uFF0C\u751F\u6210 Liquid Section \u4EE3\u7801\u6216 CRO \u8F6C\u5316\u8BCA\u65AD...",
        chips: [
          {
            id: "liquid-section-builder",
            label: "\u5B9A\u5236 OS 2.0 Liquid Section \u6A21\u5757",
            placeholder: "\u63CF\u8FF0\u60F3\u8981\u7684\u6A21\u5757\u6548\u679C\uFF08\u5982\u5E26\u89C6\u9891\u5F39\u7A97\u7684\u5BF9\u6BD4\u8868\u3001\u60AC\u6D6E\u52A0\u8D2D\u6761\u3001\u6EDA\u52A8\u8BC4\u6D4B\u5899\uFF09...",
            starterPrompt: "\u8BF7\u5E2E\u6211\u7F16\u5199\u4E00\u4E2A\u517C\u5BB9 Shopify Online Store 2.0\uFF08\u5982 Dawn \u4E3B\u9898\uFF09\u7684\u72EC\u7ACB `.liquid` Section \u6587\u4EF6\uFF08\u5305\u542B\u54CD\u5E94\u5F0F\u6837\u5F0F\u3001\u79FB\u52A8\u7AEF\u89E6\u63A7\u4F18\u5316\u4EE5\u53CA\u5B8C\u6574\u7684 `{% schema %}` \u53EF\u89C6\u5316\u914D\u7F6E JSON\uFF0C\u652F\u6301\u5728 Theme Editor \u4E2D\u76F4\u63A5\u62D6\u62FD\u7F16\u8F91\uFF09\uFF1A\n\n\u6A21\u5757\u529F\u80FD\u4E0E\u89C6\u89C9\u9700\u6C42\uFF1A"
          },
          {
            id: "shopify-cro-audit",
            label: "\u5E97\u94FA\u8F6C\u5316\u7387\uFF08CRO\uFF09\u4E0E\u5F03\u8D2D\u8BCA\u65AD",
            placeholder: "\u8F93\u5165 Shopify \u5E97\u94FA\u7F51\u5740\u6216\u63CF\u8FF0\u5F53\u524D\u6D41\u91CF/\u52A0\u8D2D\u6570\u636E\uFF0C\u6392\u67E5\u4ECE\u843D\u5730\u9875\u5230\u7ED3\u8D26\u7684\u6D41\u5931\u5361\u70B9...",
            starterPrompt: "\u8BF7\u5E2E\u6211\u5BF9\u76EE\u6807 Shopify \u72EC\u7ACB\u7AD9\u8FDB\u884C\u5168\u94FE\u8DEF CRO \u8F6C\u5316\u7387\u4F53\u68C0\uFF08\u6DB5\u76D6\u79FB\u52A8\u7AEF\u9996\u5C4F\u9EC4\u91D1 5 \u79D2\u4EF7\u503C\u4E3B\u5F20\u3001\u4EF7\u683C\u4E0E\u4FE1\u4EFB\u5FBD\u7AE0\u5E03\u5C40\u3001Add to Cart \u6309\u94AE\u663E\u8457\u5EA6\u3001Cart Drawer \u514D\u90AE\u8FDB\u5EA6\u6761\u3001Shop Pay/PayPal \u5FEB\u6377\u652F\u4ED8\u9732\u51FA\u4E0E\u9875\u9762\u52A0\u8F7D\u6027\u80FD\uFF09\uFF0C\u8F93\u51FA\u6309 ROI \u6392\u5E8F\u7684\u6539\u7248\u6E05\u5355\uFF1A\n\n\u5E97\u94FA\u7F51\u5740\u6216\u73B0\u72B6\uFF1A"
          },
          {
            id: "collection-seo-architecture",
            label: "Collections \u5BFC\u822A\u4E0E\u96C6\u5408\u9875\u89C4\u5212",
            placeholder: "\u8F93\u5165\u5E97\u94FA\u4E3B\u8425\u54C1\u7C7B\uFF0C\u89C4\u5212\u9AD8\u8F6C\u5316\u5BFC\u822A\u83DC\u5355\u3001Automated Collections \u89C4\u5219\u4E0E\u96C6\u5408\u9875\u6587\u6848...",
            starterPrompt: "\u8BF7\u4E3A\u6211\u7684 Shopify \u5E97\u94FA\u89C4\u5212\u4E00\u5957\u6E05\u6670\u7684\u9876\u680F Mega Menu \u5BFC\u822A\u7ED3\u6784\u3001Automated Collections \u81EA\u52A8\u5F52\u96C6\u6761\u4EF6\uFF08\u6309 Tag/Type/Price\uFF09\uFF0C\u5E76\u4E3A\u6BCF\u4E2A\u6838\u5FC3 Collection \u7F16\u5199\u9996\u5C4F\u5BFC\u8D2D\u5F15\u8A00\u4E0E\u5E95\u90E8 SEO \u5BCC\u6587\u672C\uFF1A\n\n\u4E3B\u8425\u54C1\u7C7B\u4E0E\u4EA7\u54C1\u7EBF\uFF1A"
          }
        ]
      },
      {
        id: "promo-retention",
        label: "\u6298\u6263\u5927\u4FC3\u4E0E\u5F03\u5355\u633D\u56DE",
        icon: "\u{1F525}",
        placeholder: "\u7B56\u5212\u9ED1\u4E94\u7F51\u4E00/\u6362\u5B63\u95EA\u4FC3\u6298\u6263\u89C4\u5219\uFF0C\u6216\u7F16\u5199 Klaviyo / Shopify Email \u5F03\u5355\u633D\u56DE\u90AE\u4EF6\u5E8F\u5217...",
        chips: [
          {
            id: "abandoned-checkout-klaviyo",
            label: "\u5F03\u5355\u633D\u56DE 3 \u5C01\u9AD8\u8F6C\u5316\u90AE\u4EF6\u6D41",
            placeholder: "\u8F93\u5165\u4E3B\u63A8\u54C1\u7C7B\u4E0E\u6700\u5927\u53EF\u7ED9\u6298\u6263\uFF0C\u751F\u6210 1h / 24h / 48h \u5F03\u5355\u53EC\u56DE\u90AE\u4EF6\uFF08\u4E2D\u82F1\u53CC\u8BED\uFF09...",
            starterPrompt: "\u8BF7\u4E3A\u6211\u7684 Shopify \u72EC\u7ACB\u7AD9\u7F16\u5199\u4E00\u5957\u53EF\u76F4\u63A5\u914D\u7F6E\u5230 Shopify Email / Klaviyo \u7684\u300CAbandoned Checkout \u5F03\u5355\u633D\u56DE\u300D3 \u5C01\u81EA\u52A8\u5316\u90AE\u4EF6\u5E8F\u5217\uFF08\u7B2C 1 \u5C01 1 \u5C0F\u65F6\u540E\u65E0\u6298\u6263\u6E29\u67D4\u63D0\u9192 + \u5BA2\u670D\u7B54\u7591\uFF0C\u7B2C 2 \u5C01 24 \u5C0F\u65F6\u540E\u6838\u5FC3\u5356\u70B9 + \u4E70\u5BB6\u771F\u5B9E\u597D\u8BC4\u6253\u6D88\u987E\u8651\uFF0C\u7B2C 3 \u5C01 48 \u5C0F\u65F6\u540E\u9650\u65F6\u4E13\u5C5E\u6298\u6263\u7801\u6700\u540E\u50AC\u5355\uFF09\uFF0C\u542B A/B \u6D4B\u8BD5\u4E3B\u9898\u884C\uFF08Subject Line & Preview Text\uFF09\uFF1A\n\n\u5546\u54C1\u54C1\u7C7B\u4E0E\u6298\u6263\u7801\uFF1A"
          },
          {
            id: "bfcm-flash-campaign",
            label: "\u5168\u7AD9\u5927\u4FC3\uFF08BFCM/\u95EA\u4FC3\uFF09\u6D3B\u52A8\u7B56\u5212",
            placeholder: "\u8F93\u5165\u4FC3\u9500\u76EE\u6807\u4E0E\u6BDB\u5229\u7387\uFF0C\u8BBE\u8BA1\u9636\u68AF\u6EE1\u51CF\u3001\u4E70\u8D60\uFF08BOGO\uFF09\u4E0E\u5168\u7AD9\u9884\u70ED\u5012\u8BA1\u65F6\u65B9\u6848...",
            starterPrompt: "\u8BF7\u7ED3\u5408\u6211\u7684\u6BDB\u5229\u7ED3\u6784\uFF0C\u5E2E\u6211\u7B56\u5212\u4E00\u573A\u9AD8 ROI \u7684 Shopify \u5168\u7AD9\u4FC3\u9500\u6D3B\u52A8\uFF08\u542B Automatic Discount \u81EA\u52A8\u9636\u68AF\u6EE1\u51CF\u89C4\u5219\u3001VIP \u63D0\u524D\u8D2D\u6298\u6263\u7801\u3001Announcement Bar \u9876\u90E8\u516C\u544A\u680F\u8F6E\u64AD\u6587\u6848\u3001\u9996\u9875\u4E3B\u6A2A\u5E45\u6587\u6848\u4E0E\u793E\u5A92\u9884\u70ED\u8282\u594F\uFF09\uFF1A\n\n\u5E73\u5747\u5BA2\u5355\u4EF7\u4E0E\u6BDB\u5229\u7A7A\u95F4\uFF1A"
          }
        ]
      },
      {
        id: "orders-inventory",
        label: "\u8BA2\u5355\u5C65\u7EA6\u4E0E\u5E93\u5B58",
        icon: "\u{1F4CA}",
        placeholder: "\u5DE1\u68C0 Shopify \u5E97\u94FA GMV \u5927\u76D8\u3001\u6392\u67E5\u5F02\u5E38/\u9AD8\u98CE\u9669\u8BA2\u5355\u3001\u6D4B\u7B97\u70ED\u9500 SKU \u8865\u8D27\u9884\u8B66...",
        chips: [
          {
            id: "daily-store-pulse",
            label: "\u4ECA\u65E5 GMV\u3001\u8F6C\u5316\u6F0F\u6597\u4E0E\u5F02\u5E38\u5DE1\u68C0",
            placeholder: "\u4E00\u952E\u6C47\u603B\u5E97\u94FA\u8BA2\u5355\u3001\u5BA2\u5355\u4EF7\u3001\u6D41\u91CF\u8F6C\u5316\u7387\u53CA\u5F85\u5904\u7406\u5F02\u5E38\u5C65\u7EA6...",
            starterPrompt: "\u8BF7\u8C03\u7528 Shopify \u8FD0\u8425\u6280\u80FD\uFF0C\u5DE1\u68C0\u5F53\u524D\u5E97\u94FA\u7684\u6838\u5FC3\u7ECF\u8425\u6307\u6807\uFF08\u4ECA\u65E5\u4E0E\u8FD1 7 \u5929\u9500\u552E\u989D GMV\u3001\u8BA2\u5355\u91CF\u3001AOV \u5BA2\u5355\u4EF7\u3001\u52A0\u8D2D\u2192\u53D1\u8D77\u7ED3\u8D26\u2192\u652F\u4ED8\u6210\u529F\u6F0F\u6597\u8F6C\u5316\u7387\u3001\u8D85\u65F6\u672A\u53D1\u8D27\u8BA2\u5355\u4E0E\u9AD8\u6B3A\u8BC8\u98CE\u9669\u8BA2\u5355\uFF09\uFF0C\u5E76\u7ED9\u51FA\u4ECA\u65E5\u6700\u7D27\u8FEB\u7684 3 \u9879\u8FD0\u8425\u52A8\u4F5C\uFF1A"
          },
          {
            id: "sku-restock-forecast",
            label: "\u65AD\u8D27\u9884\u8B66\u4E0E\u6162\u52A8\u9500\u5E93\u5B58\u6E05\u7406",
            placeholder: "\u8F93\u5165\u70ED\u9500 SKU \u65E5\u5747\u9500\u91CF\u4E0E\u5907\u8D27\u5468\u671F\uFF0C\u8BA1\u7B97\u5B89\u5168\u5E93\u5B58\u7EBF\u4E0E\u6EDE\u9500\u6B3E\u6346\u7ED1\u6E05\u4ED3\u65B9\u6848...",
            starterPrompt: "\u8BF7\u6839\u636E\u4EE5\u4E0B SKU \u7684\u5E93\u5B58\u4F59\u91CF\u3001\u8FD1 14 \u5929\u65E5\u5747\u9500\u91CF\u4E0E\u4F9B\u5E94\u5546\u4EA4\u671F\uFF08Lead Time\uFF09\uFF0C\u8BA1\u7B97\u6BCF\u4E2A SKU \u7684\u65AD\u8D27\u5012\u8BA1\u65F6\u4E0E\u5EFA\u8BAE\u8865\u8D27\u91CF\uFF0C\u5E76\u4E3A\u5468\u8F6C\u8D85\u8FC7 60 \u5929\u7684\u6162\u52A8\u9500\u5E93\u5B58\u8BBE\u8BA1 Mystery Box\uFF08\u76F2\u76D2\uFF09\u6216\u6EE1\u8D60\u6E05\u4ED3\u65B9\u6848\uFF1A\n\n\u5E93\u5B58\u4E0E\u9500\u91CF\u6570\u636E\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 1,
    hidden: false
  },
  {
    id: "tiktok-shop",
    name: "TikTok Shop \u5E26\u8D27",
    shortName: "TikTok Shop",
    heroTitle: "TikTok Shop AI\uFF0C\u8DE8\u5883\u5C0F\u5E97\u4E0E\u77ED\u89C6\u9891\u5E26\u8D27 Agent",
    tagline: "\u7F8E\u533A/\u4E1C\u5357\u4E9A\u5C0F\u5E97\u9009\u54C1\u4E0A\u67B6\u3001Affiliate \u8FBE\u4EBA\u5EFA\u8054\u9080\u7EA6\u3001\u6302\u8F66\u811A\u672C\u4E0E GMV Max \u6295\u6D41",
    skillName: "tiktok-shop-ops",
    iconBg: "linear-gradient(135deg, #09090B 0%, #EC4899 55%, #06B6D4 100%)",
    iconGlyph: "\u266A",
    mascotEmoji: "\u{1F3B5}",
    mascotTitle: "TikTok \u7206\u5355\u64CD\u76D8\u624B",
    connectionLabel: "\u767B\u5F55 TikTok Shop MCP",
    connectionUrlLabel: "TikTok Shop \u5E97\u94FA\u5730\u533A / \u5E97\u94FA\u540D\u79F0",
    connectionUrlPlaceholder: "\u4F8B\u5982\uFF1AUS \u7F8E\u533A\u8DE8\u5883\u5E97 \xB7 LumiHome Official",
    connectionTokenLabel: "TikTok Shop App Key / \u6388\u6743 Token (\u53EF\u9009)",
    connectionTokenPlaceholder: "ttp_live_xxxxxxxxxxxxxxxx\uFF08\u7559\u7A7A\u5219\u8D70 Hoxi.ai \u4E00\u952E\u6388\u6743\uFF09",
    mcp: {
      serverId: "tiktok-shop-mcp",
      name: "TikTok Shop \u8DE8\u5883\u5E26\u8D27 MCP",
      url: "/api/mcp",
      transport: "http",
      authType: "hoxi-account",
      authUrl: "/api/oauth/authorize",
      consoleUrl: "/user/tokens",
      scopes: ["mcp:tools", "mcp:profile:read", "mcp:orders:read", "mcp:theme:read", "mcp:theme:plan"],
      toolsPreview: [
        "tiktok.product_listing_optimize",
        "tiktok.affiliate_outreach_gen",
        "tiktok.shoppable_video_script",
        "tiktok.gmv_max_diagnose"
      ]
    },
    categories: [
      {
        id: "affiliate-outreach",
        label: "\u8FBE\u4EBA\u5EFA\u8054\u5BC4\u6837",
        icon: "\u{1F91D}",
        placeholder: "\u8F93\u5165\u5546\u54C1\u5356\u70B9\u4E0E\u4F63\u91D1\u6BD4\u4F8B\uFF0C\u6279\u91CF\u751F\u6210\u9AD8\u56DE\u590D\u7387 TikTok \u8FBE\u4EBA\u79C1\u4FE1\uFF08DM\uFF09\u3001\u90AE\u4EF6\u4E0E\u5BC4\u6837\u50AC\u7247\u8BDD\u672F...",
        chips: [
          {
            id: "creator-dm-templates",
            label: "\u9AD8\u56DE\u590D\u7387\u8FBE\u4EBA\u9080\u7EA6 DM + \u90AE\u4EF6\u5305",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u6838\u5FC3\u723D\u70B9\u4E0E\u4F63\u91D1\u6BD4\u4F8B\uFF08\u5982 20%\uFF09\uFF0C\u751F\u6210\u7F8E\u533A/\u82F1\u533A\u5730\u9053\u8FBE\u4EBA\u5EFA\u8054\u8BDD\u672F...",
            starterPrompt: "\u8BF7\u4F7F\u7528 TikTok Shop \u8FD0\u8425\u6280\u80FD\uFF0C\u4E3A\u4EE5\u4E0B\u5546\u54C1\u7F16\u5199\u4E00\u5957\u5730\u9053\u6BCD\u8BED\u7EA7\uFF08\u7F8E\u533A/\u82F1\u533A Creator \u4E60\u60EF\uFF0C\u62D2\u7EDD\u751F\u786C\u7FA4\u53D1\u611F\uFF09\u7684 Affiliate \u8FBE\u4EBA\u5EFA\u8054\u8BDD\u672F\u5305\uFF08\u5305\u542B\uFF1A300 \u5B57\u7B26\u5185\u9AD8\u6253\u5F00\u7387 TikTok \u79C1\u4FE1 DM\u3001\u6DF1\u5EA6\u5408\u4F5C\u9080\u7EA6 Email\u3001Target Collaboration \u5B9A\u5411\u9AD8\u4F63\u9080\u8BF7\u5361\u6587\u6848\uFF0C\u4EE5\u53CA\u9636\u68AF\u5956\u52B1\u673A\u5236\uFF09\uFF1A\n\n\u4EA7\u54C1\u5356\u70B9\u4E0E\u4F63\u91D1\u6BD4\u4F8B\uFF1A"
          },
          {
            id: "sample-followup-sop",
            label: "\u5BC4\u6837\u7B7E\u6536\u8DDF\u8FDB\u4E0E\u50AC\u7247 Creative Brief",
            placeholder: "\u9488\u5BF9\u5DF2\u6536\u6837\u672A\u53D1\u89C6\u9891\u7684\u8FBE\u4EBA\uFF0C\u751F\u6210\u4E0D\u60F9\u4EBA\u53CD\u611F\u7684\u8DDF\u8FDB\u8BDD\u672F\u4E0E 3 \u4E2A\u6613\u7206\u62CD\u6444\u7075\u611F...",
            starterPrompt: "\u8BF7\u5E2E\u6211\u9488\u5BF9\u300C\u6837\u54C1\u5DF2\u7B7E\u6536\uFF08Sample Delivered\uFF09\u4F46\u5C1A\u672A\u51FA\u7247\u300D\u7684 TikTok \u8FBE\u4EBA\uFF0C\u7F16\u5199\u4E00\u5957\u9AD8\u60C5\u5546\u8DDF\u8FDB\u8BDD\u672F\uFF08\u7B7E\u6536\u5F53\u65E5\u7075\u611F\u5582\u996D + \u7B7E\u6536\u7B2C 4 \u5929\u6E29\u548C\u63D0\u9192 + \u7B7E\u6536\u7B2C 7 \u5929\u70ED\u70B9\u94A9\u5B50\u52A9\u653B\uFF09\uFF0C\u5E76\u9644\u4E0A\u4E00\u4EFD 1 \u5206\u949F\u80FD\u770B\u61C2\u7684\u300A3 Angles Creative Brief \u7206\u6B3E\u62CD\u6444\u63D0\u793A\u5361\u300B\uFF1A\n\n\u5546\u54C1\u540D\u79F0\u4E0E\u6838\u5FC3\u6F14\u793A\u70B9\uFF1A"
          },
          {
            id: "spark-ads-code-request",
            label: "\u7206\u6B3E\u8FBE\u4EBA\u89C6\u9891\u6295\u6D41\u6388\u6743\uFF08Spark Ads Code\uFF09\u8BDD\u672F",
            placeholder: "\u8FBE\u4EBA\u89C6\u9891\u81EA\u7136\u6D41\u8D77\u91CF\u540E\uFF0C\u5FEB\u901F\u7D22\u53D6\u5E7F\u544A\u6388\u6743\u7801\uFF08Ad Code\uFF09\u5E76\u8C08\u6210\u957F\u671F\u7ED1\u5B9A...",
            starterPrompt: "\u4E00\u4F4D\u5408\u4F5C\u8FBE\u4EBA\u7684\u6302\u8F66\u89C6\u9891\u81EA\u7136\u6D41\u6570\u636E\u8868\u73B0\u6781\u4F73\uFF0C\u8BF7\u5E2E\u6211\u7F16\u5199\u4E00\u6BB5\u65E2\u771F\u8BDA\u8D5E\u7F8E\u53C8\u4E13\u4E1A\u9AD8\u6548\u7684\u82F1\u6587\u6C9F\u901A\u8BDD\u672F\uFF0C\u5411\u8FBE\u4EBA\u7533\u8BF7 30/60 \u5929 Spark Ads \u5E7F\u544A\u6295\u6D41\u6388\u6743\u7801\uFF08Authorization Code\uFF09\uFF0C\u5E76\u987A\u52BF\u63D0\u51FA\u72EC\u5BB6\u8FDE\u66F4\u6FC0\u52B1\u65B9\u6848\uFF1A\n\n\u8FBE\u4EBA\u89C6\u9891\u8868\u73B0\u4E0E\u9884\u7B97\u6FC0\u52B1\uFF1A"
          }
        ]
      },
      {
        id: "shoppable-video",
        label: "\u6302\u8F66\u77ED\u89C6\u9891\u811A\u672C",
        icon: "\u{1F3AC}",
        placeholder: "\u8F93\u5165\u5546\u54C1\u75DB\u70B9\uFF0C\u751F\u6210\u524D 3 \u79D2\u9EC4\u91D1\u7559\u4EBA\u94A9\u5B50\u3001\u5730\u9053\u82F1\u6587\u53E3\u64AD\u4E0E\u5C0F\u9EC4\u8F66\u4FC3\u5355\u5206\u955C\u811A\u672C...",
        chips: [
          {
            id: "three-sec-viral-hooks",
            label: "\u6302\u8F66\u89C6\u9891\u9EC4\u91D1\u524D 3 \u79D2\u94A9\u5B50\u88C2\u53D8\uFF0810 \u7EC4\uFF09",
            placeholder: "\u56F4\u7ED5\u540C\u4E00\u4EF6\u5546\u54C1\uFF0C\u88C2\u53D8 10 \u4E2A\u9AD8\u5B8C\u64AD\u7387\u5F00\u5934\u753B\u9762 + \u5730\u9053\u82F1\u6587\u9996\u53E5 Hook...",
            starterPrompt: "\u8BF7\u9488\u5BF9\u8FD9\u6B3E TikTok Shop \u5546\u54C1\uFF0C\u6309\u7F8E\u533A\u7206\u6B3E\u5E26\u8D27\u77ED\u89C6\u9891\u903B\u8F91\uFF0C\u4E00\u53E3\u6C14\u88C2\u53D8 10 \u7EC4\u300C0\u20133 \u79D2\u9EC4\u91D1\u89C6\u89C9\u51B2\u51FB\u753B\u9762 + \u5C4F\u5E55\u5927\u5B57\u8D34\u7EB8\uFF08Text Overlay\uFF09+ \u5730\u9053\u82F1\u6587\u53E3\u64AD\u9996\u53E5\uFF08Verbal Hook\uFF09\u300D\uFF08\u6DB5\u76D6\u75DB\u70B9\u7FFB\u8F66\u3001\u53CD\u5E38\u8BC6\u63D0\u95EE\u3001\u89E3\u538B\u7279\u5199\u3001POV \u89C6\u89D2\u4E0E\u4EF7\u683C\u951A\u70B9\u66B4\u51FB\uFF09\uFF1A\n\n\u5546\u54C1\u4E0E\u76EE\u6807\u75DB\u70B9\uFF1A"
          },
          {
            id: "ugc-shoppable-script",
            label: "30 \u79D2\u539F\u751F\u611F\uFF08UGC\uFF09\u6302\u8F66\u5E26\u8D27\u5168\u811A\u672C",
            placeholder: "\u751F\u6210\u5E26\u9010\u79D2\u753B\u9762\u6307\u5BFC\u3001\u5730\u9053\u53E3\u64AD\u53F0\u8BCD\u4E0E\u5DE6\u4E0B\u89D2\u5C0F\u9EC4\u8F66\u5F15\u5BFC\u7684\u5B8C\u6574\u62CD\u6444\u811A\u672C...",
            starterPrompt: "\u8BF7\u4E3A\u8FD9\u6B3E\u5546\u54C1\u7F16\u5199\u4E00\u4EFD 25\u201330 \u79D2\u9AD8\u8F6C\u5316 TikTok \u539F\u751F\u611F\uFF08UGC\uFF09\u6302\u8F66\u89C6\u9891\u5B8C\u6574\u5206\u955C\u811A\u672C\uFF08\u6309 0\u20133s \u6293\u4EBA\u94A9\u5B50 \u2192 3\u201312s \u75DB\u70B9\u89E3\u51B3\u5B9E\u6D4B \u2192 12\u201322s \u7EC6\u8282\u80CC\u4E66\u6253\u6D88\u987E\u8651 \u2192 22\u201330s \u9650\u65F6\u95EA\u4FC3\u6307\u5C0F\u9EC4\u8F66 CTA \u7ED3\u6784\u8F93\u51FA\uFF0C\u542B\u4E2D\u82F1\u5BF9\u7167\u53E3\u64AD\u4E0E\u955C\u5934\u8FD0\u955C\u8BF4\u660E\uFF09\uFF1A\n\n\u5546\u54C1\u4FE1\u606F\u4E0E\u4FC3\u9500\u94A9\u5B50\uFF1A"
          }
        ]
      },
      {
        id: "tts-listing-live",
        label: "\u5C0F\u5E97\u4E0A\u67B6\u4E0E\u76F4\u64AD",
        icon: "\u{1F6D2}",
        placeholder: "\u751F\u6210 TikTok Shop \u5408\u89C4\u9AD8\u641C\u7D22\u6807\u9898\u30019 \u56FE\u89C6\u89C9\u89C4\u5212\u6216\u76F4\u64AD\u95F4\u618B\u5355\u6392\u54C1\u8BDD\u672F...",
        chips: [
          {
            id: "tts-compliant-listing",
            label: "TikTok \u5C0F\u5E97\u7206\u6B3E\u6807\u9898\u4E0E 9 \u56FE\u8BE6\u60C5\u65B9\u6848",
            placeholder: "\u8F93\u5165\u5546\u54C1\u53C2\u6570\uFF0C\u8F93\u51FA\u7B26\u5408 TikTok \u641C\u7D22\u6743\u91CD\u7684\u82F1\u6587\u6807\u9898\u30019 \u5F20\u4E3B\u56FE\u811A\u672C\u4E0E\u5408\u89C4\u8BE6\u60C5...",
            starterPrompt: "\u8BF7\u6309 TikTok Shop \u6700\u65B0\u5546\u54C1\u4E0A\u67B6\u4E0E\u7B97\u6CD5\u63A8\u8350\u89C4\u8303\uFF0C\u4E3A\u4EE5\u4E0B\u4EA7\u54C1\u8F93\u51FA\uFF1A1) \u542B\u9AD8\u641C\u7D22\u91CF\u70ED\u8BCD\u7684\u5408\u89C4\u82F1\u6587\u6807\u9898\uFF1B2) 9 \u5F20\u5546\u54C1\u8F6E\u64AD\u4E3B\u56FE\u7684\u9010\u5F20\u89C6\u89C9\u4E0E\u5356\u70B9\u6587\u6848\u6307\u5BFC\uFF1B3) \u624B\u673A\u7AEF\u4E00\u773C\u770B\u61C2\u7684\u5206\u6BB5\u5F0F\u8BE6\u60C5\u63CF\u8FF0\u4E0E\u5C3A\u7801/\u5C5E\u6027\u8868\uFF08\u81EA\u52A8\u89C4\u907F\u5E73\u53F0\u7981\u552E\u4E0E\u5938\u5927\u533B\u7597\u8FDD\u89C4\u8BCD\uFF09\uFF1A\n\n\u4EA7\u54C1\u8D44\u6599\u4E0E\u76EE\u6807\u56FD\u5BB6\uFF1A"
          },
          {
            id: "livestream-runbook",
            label: "TikTok \u76F4\u64AD\u95F4\u8FC7\u54C1\u8282\u594F\u4E0E\u903C\u5355\u8BDD\u672F",
            placeholder: "\u8F93\u5165\u76F4\u64AD\u95F4\u5F15\u6D41\u54C1\u4E0E\u4E3B\u63A8\u54C1\uFF0C\u751F\u6210 15 \u5206\u949F\u5FAA\u73AF\u8FC7\u54C1\u811A\u672C\u4E0E\u798F\u888B\u7559\u4EBA\u8BDD\u672F...",
            starterPrompt: "\u8BF7\u4E3A\u6211\u7684 TikTok Shop \u76F4\u64AD\u95F4\u8BBE\u8BA1\u4E00\u5957\u300C15 \u5206\u949F\u9AD8\u5BC6\u5EA6\u5FAA\u73AF\u8FC7\u54C1\u811A\u672C\u300D\uFF08\u542B\u8FDB\u623F\u524D 10 \u79D2\u7559\u4EBA\u8BDD\u672F\u3001Flash Sale \u79D2\u6740\u5012\u8BA1\u65F6\u903C\u5355\u8BDD\u672F\u3001\u8BC4\u8BBA\u533A\u6263\u8BCD\u4E92\u52A8\u62C9\u505C\u7559\u8BDD\u672F\uFF0C\u4EE5\u53CA\u4E2D\u82F1\u53CC\u8BED\u9AD8\u9891\u4FC3\u5355\u53E3\u4EE4\uFF09\uFF1A\n\n\u76F4\u64AD\u4E3B\u63A8\u54C1\u4E0E\u798F\u5229\u673A\u5236\uFF1A"
          }
        ]
      },
      {
        id: "gmv-max-ads",
        label: "GMV Max \u6295\u6D41\u8BCA\u65AD",
        icon: "\u{1F4C8}",
        placeholder: "\u8F93\u5165\u77ED\u89C6\u9891\u64AD\u653E\u91CF\u3001CTR\u3001\u52A0\u8D2D\u7387\u4E0E ROAS \u6570\u636E\uFF0C\u8BCA\u65AD\u7D20\u6750\u5361\u70B9\u5E76\u7ED9\u51FA\u653E\u91CF\u7B56\u7565...",
        chips: [
          {
            id: "roas-funnel-audit",
            label: "\u77ED\u89C6\u9891\u5E26\u8D27\u4E0E GMV Max \u6F0F\u6597\u8BCA\u65AD",
            placeholder: "\u7C98\u8D34\u5F53\u524D\u7D20\u6750\u7684 2s/6s \u5B8C\u64AD\u7387\u3001CTR\u3001CVR \u4E0E ROAS\uFF0C\u5B9A\u4F4D\u6389\u91CF\u4E0E\u4E8F\u635F\u539F\u56E0...",
            starterPrompt: "\u8BF7\u5E2E\u6211\u8BCA\u65AD\u5F53\u524D TikTok Shop \u77ED\u89C6\u9891\u4E0E GMV Max / Shop Ads \u6295\u6D41\u6570\u636E\u6F0F\u6597\uFF08\u7ED3\u5408 2 \u79D2\u7559\u5B58\u7387\u30016 \u79D2\u5B8C\u64AD\u7387\u3001\u5C0F\u9EC4\u8F66\u70B9\u51FB\u7387 CTR\u3001\u5546\u8BE6\u9875\u8F6C\u5316\u7387 CVR\u3001\u5BA2\u5355\u4EF7\u4E0E\u76EE\u6807 ROI\uFF09\uFF0C\u6307\u51FA\u6838\u5FC3\u77ED\u677F\u5728\u54EA\u4E00\u73AF\uFF0C\u5E76\u7ED9\u51FA\u5177\u4F53\u7684\u7D20\u6750\u6539\u4FEE\u4E0E\u51FA\u4EF7\u8C03\u6574\u5EFA\u8BAE\uFF1A\n\n\u5F53\u524D\u6570\u636E\u8868\u73B0\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 2,
    hidden: false
  },
  {
    id: "xiaohongshu",
    name: "\u5C0F\u7EA2\u4E66\u79CD\u8349\u8FD0\u8425",
    shortName: "\u5C0F\u7EA2\u4E66",
    heroTitle: "\u5C0F\u7EA2\u4E66 AI\uFF0C\u7206\u6B3E\u79CD\u8349\u4E0E\u641C\u7D22\u5361\u4F4D Agent",
    tagline: "\u9AD8\u70B9\u51FB 3:4 \u5C01\u9762\u4E0E\u6807\u9898\u88C2\u53D8\u3001\u591A\u4EBA\u8BBE\u79CD\u8349\u77E9\u9635\u3001KFS \u641C\u7D22\u5361\u4F4D\u4E0E\u79C1\u57DF\u5408\u89C4\u627F\u63A5",
    skillName: "xiaohongshu-ops",
    iconBg: "linear-gradient(135deg, #E11D48 0%, #FF2442 100%)",
    iconGlyph: "\u7EA2",
    mascotEmoji: "\u{1F4D5}",
    mascotTitle: "\u5C0F\u7EA2\u4E66\u7206\u6587\u4E3B\u7406\u4EBA",
    connectionLabel: "\u767B\u5F55\u5C0F\u7EA2\u4E66\u8FD0\u8425 MCP",
    connectionUrlLabel: "\u5C0F\u7EA2\u4E66\u54C1\u724C\u53F7 / \u535A\u4E3B\u4E3B\u9875\u540D\u79F0",
    connectionUrlPlaceholder: "\u4F8B\u5982\uFF1A@LumiHome \u5BB6\u5C45\u7F8E\u5B66 \xB7 \u5C0F\u7EA2\u4E66\u5E97\u94FA",
    connectionTokenLabel: "\u8D26\u53F7\u4EBA\u8BBE\u5B9A\u4F4D\u4E0E\u76EE\u6807\u53D7\u4F17\u753B\u50CF",
    connectionTokenPlaceholder: "\u4F8B\u5982\uFF1A25-35\u5C81\u7CBE\u81F4\u72EC\u5C45\u5973\u6027\uFF0C\u771F\u8BDA\u5E72\u8D27\u4E0D\u7239\u5473",
    mcp: {
      serverId: "xiaohongshu-mcp",
      name: "\u5C0F\u7EA2\u4E66\u79CD\u8349\u4E0E KFS \u589E\u957F MCP",
      url: "/api/mcp",
      transport: "http",
      authType: "hoxi-account",
      authUrl: "/api/oauth/authorize",
      consoleUrl: "/user/tokens",
      scopes: ["mcp:tools", "mcp:profile:read", "mcp:theme:read", "mcp:theme:plan"],
      toolsPreview: [
        "xhs.viral_title_cover",
        "xhs.persona_notes_matrix",
        "xhs.kfs_keyword_seo",
        "xhs.comment_lead_funnel"
      ]
    },
    categories: [
      {
        id: "viral-notes",
        label: "\u7206\u6B3E\u56FE\u6587\u4E0E\u5C01\u9762",
        icon: "\u2728",
        placeholder: "\u8F93\u5165\u4EA7\u54C1\u6838\u5FC3\u5356\u70B9\u6216\u9009\u9898\u65B9\u5411\uFF0C\u4E00\u952E\u751F\u6210 10 \u4E2A\u9AD8\u70B9\u51FB\u6807\u9898\u30013:4 \u9996\u56FE\u65B9\u6848\u4E0E\u79CD\u8349\u6B63\u6587...",
        chips: [
          {
            id: "xhs-10-titles-3-notes",
            label: "10 \u4E2A\u7206\u6B3E\u6807\u9898 + 3 \u7BC7\u591A\u4EBA\u8BBE\u79CD\u8349\u6587",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u7279\u70B9\u4E0E\u76EE\u6807\u4EBA\u7FA4\uFF0C\u751F\u6210\u6D4B\u8BC4\u515A / \u5E72\u8D27\u515A / \u6C1B\u56F4\u611F\u751F\u6D3B\u5BB6 3 \u7BC7\u5DEE\u5F02\u5316\u7B14\u8BB0...",
            starterPrompt: "\u8BF7\u4F7F\u7528\u5C0F\u7EA2\u4E66\u8FD0\u8425\u6280\u80FD\uFF0C\u56F4\u7ED5\u4EE5\u4E0B\u4EA7\u54C1/\u8BDD\u9898\u8F93\u51FA\u4E00\u5957\u9AD8\u8D5E\u79CD\u8349\u65B9\u6848\uFF1A\n1) 10 \u4E2A 20 \u5B57\u4EE5\u5185\u7684\u9AD8\u70B9\u51FB\u7387\u5C01\u9762\u6807\u9898\uFF08\u6DB5\u76D6\u75DB\u70B9\u53CD\u5E38\u8BC6\u3001\u4EBA\u7FA4\u53EC\u5524\u3001\u6570\u5B57\u5BF9\u6BD4\u3001\u7EA2\u9ED1\u699C\u5408\u96C6\uFF09\uFF1B\n2) 3:4 \u7AD6\u7248\u9996\u56FE\u4E0E\u5185\u9875 5 \u5F20\u56FE\u7684\u753B\u9762\u6784\u56FE\u4E0E\u5927\u5B57\u8D34\u7EB8\u6587\u6848\uFF1B\n3) 3 \u7BC7\u4E0D\u540C\u4EBA\u8BBE\u5207\u5165\u70B9\uFF08\u786C\u6838\u6D4B\u8BC4\u515A / \u907F\u5751\u5E72\u8D27\u515A / \u771F\u5B9E\u751F\u6D3B\u5206\u4EAB\u515A\uFF09\u7684\u547C\u5438\u611F\u6392\u7248\u6B63\u6587\u3001\u9AD8\u6743\u91CD #\u8BDD\u9898\u6807\u7B7E \u4E0E\u8FDD\u7981\u8BCD\u81EA\u68C0\uFF1A\n\n\u4EA7\u54C1\u6216\u9009\u9898\u4FE1\u606F\uFF1A"
          },
          {
            id: "xhs-svg-cover-card",
            label: "\u76F4\u63A5\u751F\u6210 3:4 \u9AD8\u8D5E\u5C0F\u7EA2\u4E66\u5C01\u9762\u56FE\uFF08SVG\uFF09",
            placeholder: "\u8F93\u5165\u5C01\u9762\u4E3B\u6807\u9898\u4E0E\u526F\u6807\u9898\u8981\u70B9\uFF0C\u76F4\u63A5\u5728\u53F3\u4FA7\u753B\u5E03\u751F\u6210\u53EF\u9884\u89C8\u7684 3:4 \u7AD6\u7248\u4FE1\u606F\u56FE\u5C01\u9762...",
            starterPrompt: "\u8BF7\u76F4\u63A5\u5728\u5F53\u524D\u5DE5\u4F5C\u533A\u8BBE\u8BA1\u5E76\u751F\u6210\u4E00\u5F20\u7B26\u5408\u5C0F\u7EA2\u4E66\u9AD8\u70B9\u51FB\u5BA1\u7F8E\u7684 3:4 \u7AD6\u7248\uFF08900x1200\uFF09SVG \u5C01\u9762\u5361\u7247\u6587\u4EF6\uFF08\u8981\u6C42\u6392\u7248\u547C\u5438\u611F\u5F3A\u3001\u6838\u5FC3\u5927\u5B57\u6807\u9898\u9192\u76EE\u3001\u91CD\u70B9\u9AD8\u4EAE\u6807\u8BB0\u6E05\u6670\u3001\u914D\u8272\u9AD8\u7EA7\u8010\u770B\uFF09\uFF0C\u5E76\u5728\u53F3\u4FA7\u6587\u4EF6\u753B\u5E03\u6253\u5F00\u9884\u89C8\uFF1A\n\n\u5C01\u9762\u4E3B\u9898\u4E0E\u6838\u5FC3\u5356\u70B9\uFF1A"
          },
          {
            id: "xhs-chrome-link-publish",
            label: "Chrome Link \u81EA\u52A8\u586B\u5165\u5C0F\u7EA2\u4E66\u53D1\u5E03\u540E\u53F0",
            placeholder: "\u5C06\u9009\u5B9A\u7684\u7206\u6B3E\u6807\u9898\u3001\u79CD\u8349\u6B63\u6587\u4E0E #\u8BDD\u9898\u6807\u7B7E \u81EA\u52A8\u586B\u5165\u5DF2\u6253\u5F00\u7684\u521B\u4F5C\u8005\u5E73\u53F0...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `xiaohongshu-ops` \u6280\u80FD\u914D\u5408 `hoxi_browser`\uFF08Chrome Link\uFF09\uFF0C\u5C06\u6211\u4EEC\u5B9A\u7A3F\u7684\u5C0F\u7EA2\u4E66\u7206\u6B3E\u6807\u9898\u3001\u5206\u6BB5\u6B63\u6587\u4E0E\u5E95\u90E8 #\u8BDD\u9898\u6807\u7B7E \u81EA\u52A8\u586B\u5165\u6211\u5F53\u524D\u5DF2\u6253\u5F00\u7684\u5C0F\u7EA2\u4E66\u521B\u4F5C\u670D\u52A1\u5E73\u53F0\uFF08creator.xiaohongshu.com\uFF09\u53D1\u5E03\u9875\u4E2D\uFF0C\u5E76\u5728\u70B9\u51FB\u6700\u7EC8\u300C\u53D1\u5E03\u300D\u6309\u94AE\u524D\u505C\u4E0B\u8BA9\u6211\u786E\u8BA4\uFF1A\n\n\u5F85\u586B\u5165\u7B14\u8BB0\u6216\u6307\u4EE4\uFF1A"
          },
          {
            id: "xhs-benchmark-rewrite",
            label: "\u5BF9\u6807\u7206\u6587\u62C6\u89E3\u4E0E 100% \u539F\u521B\u50CF\u7D20\u7EA7\u6539\u5199",
            placeholder: "\u7C98\u8D34\u540C\u884C\u4E07\u8D5E\u7206\u6B3E\u7B14\u8BB0\u6587\u6848\uFF0C\u62C6\u89E3\u5176\u60C5\u7EEA\u94A9\u5B50\u4E0E\u8BC4\u8BBA\u69FD\u70B9\u5E76\u7ED3\u5408\u4F60\u7684\u4EA7\u54C1\u4E8C\u521B...",
            starterPrompt: "\u8BF7\u5E2E\u6211\u6DF1\u5EA6\u62C6\u89E3\u4EE5\u4E0B\u5C0F\u7EA2\u4E66\u7206\u6B3E\u7B14\u8BB0\u7684\u300C\u5C01\u9762\u5438\u775B\u70B9\u3001\u9996\u6BB5\u524D 3 \u884C\u7559\u4EBA\u94A9\u5B50\u3001\u60C5\u7EEA\u9012\u8FDB\u8282\u594F\u4E0E\u8BC4\u8BBA\u533A\u4E92\u52A8\u69FD\u70B9\u300D\uFF0C\u5E76\u7ED3\u5408\u6211\u7684\u4EA7\u54C1\u8FDB\u884C 100% \u539F\u521B\u53BB\u540C\u8D28\u5316\u6539\u5199\uFF08\u9644 5 \u4E2A\u5347\u7EA7\u7248\u6807\u9898\uFF09\uFF1A\n\n\u5BF9\u6807\u7206\u6587\u4E0E\u6211\u7684\u4EA7\u54C1\uFF1A"
          }
        ]
      },
      {
        id: "kfs-search-seo",
        label: "KFS \u641C\u7D22\u8BCD\u5361\u4F4D",
        icon: "\u{1F50D}",
        placeholder: "\u8F93\u5165\u6838\u5FC3\u54C1\u7C7B\u8BCD\uFF0C\u6316\u6398\u5C0F\u7EA2\u4E66\u4E0B\u62C9\u6846\u9AD8\u610F\u56FE\u957F\u5C3E\u8BCD\u3001\u75DB\u70B9\u8BCD\u4E0E\u7B14\u8BB0\u94FA\u91CF\u77E9\u9635...",
        chips: [
          {
            id: "xhs-keyword-matrix",
            label: "\u5C0F\u7EA2\u4E66\u4E0B\u62C9\u6846\u957F\u5C3E\u8BCD\u4E0E KFS \u94FA\u91CF\u8868",
            placeholder: "\u8F93\u5165\u884C\u4E1A\u6216\u54C1\u7C7B\u8BCD\uFF0C\u751F\u6210\u54C1\u7C7B\u8BCD/\u75DB\u70B9\u8BCD/\u573A\u666F\u8BCD/\u4EBA\u7FA4\u8BCD\u56DB\u7EF4\u5361\u4F4D\u89C4\u5212...",
            starterPrompt: "\u8BF7\u6309\u5C0F\u7EA2\u4E66 KFS\uFF08KOL/KOC \u5185\u5BB9 + Feeds \u4FE1\u606F\u6D41 + Search \u641C\u7D22\u5361\u4F4D\uFF09\u589E\u957F\u6A21\u578B\uFF0C\u56F4\u7ED5\u6211\u7684\u6838\u5FC3\u54C1\u7C7B\u6784\u5EFA\u4E00\u4EFD\u300C\u5C0F\u7EA2\u4E66\u641C\u7D22\u9996\u5C4F\u9738\u5C4F\u5173\u952E\u8BCD\u77E9\u9635\u300D\uFF08\u62C6\u5206\u5927\u6D41\u91CF\u54C1\u7C7B\u8BCD\u3001\u9AD8\u8F6C\u5316\u75DB\u70B9\u8BCD\u3001\u5B63\u8282/\u793C\u8D60\u573A\u666F\u8BCD\u3001\u7ADE\u54C1\u5BF9\u6BD4\u622A\u6D41\u8BCD\uFF09\uFF0C\u5E76\u89C4\u5212 15 \u7BC7\u7CBE\u51C6\u5361\u4F4D\u7B14\u8BB0\u7684\u9009\u9898\u6392\u671F\u8868\uFF1A\n\n\u6838\u5FC3\u54C1\u7C7B\u4E0E\u54C1\u724C\uFF1A"
          },
          {
            id: "koc-seeding-brief",
            label: "\u767E\u4EBA KOC \u7D20\u4EBA\u94FA\u91CF\u79CD\u8349 Brief \u6A21\u677F",
            placeholder: "\u751F\u6210\u53D1\u7ED9\u8FBE\u4EBA/\u7D20\u4EBA\u7684\u5BA1\u7A3F\u6807\u51C6\u3001\u5FC5\u5E26\u5173\u952E\u8BCD\u3001\u5B9E\u62CD\u8981\u6C42\u4E0E\u9632\u9650\u6D41\u89C4\u8303...",
            starterPrompt: "\u8BF7\u5E2E\u6211\u7F16\u5199\u4E00\u4EFD\u4E13\u4E1A\u6E05\u6670\u7684\u5C0F\u7EA2\u4E66\u300AKOC / \u8FBE\u4EBA\u79CD\u8349\u5408\u4F5C Brief \u624B\u518C\u300B\uFF08\u5305\u542B\uFF1A\u54C1\u724C\u6838\u5FC3\u89C6\u89C9\u9524\u30013 \u4E2A\u53EF\u9009\u5185\u5BB9\u5207\u5165\u65B9\u5411\u3001\u9996\u56FE\u5B9E\u62CD\u5149\u7EBF\u4E0E\u6784\u56FE\u7EA2\u7EBF\u3001\u5FC5\u57CB\u641C\u7D22\u5173\u952E\u8BCD\u3001\u81EA\u7136\u690D\u5165\u53E3\u543B\u8981\u6C42\u4EE5\u53CA\u7EDD\u5BF9\u7981\u6B62\u51FA\u73B0\u7684\u8FDD\u89C4\u786C\u5E7F\u8BCD\uFF09\uFF1A\n\n\u672C\u6B21\u63A8\u5E7F\u4EA7\u54C1\u4E0E\u9884\u7B97\u5C42\u7EA7\uFF1A"
          }
        ]
      },
      {
        id: "comment-private-domain",
        label: "\u8BC4\u8BBA\u622A\u6D41\u4E0E\u79C1\u57DF",
        icon: "\u{1F4AC}",
        placeholder: "\u8BBE\u8BA1\u4E0D\u8FDD\u89C4\u7684\u9996\u8BC4\u7F6E\u9876\u4E92\u52A8\u94A9\u5B50\u3001\u6C42\u94FE\u63A5\u795E\u8BC4\u914D\u5408\u4E0E\u79C1\u4FE1\u8F6C\u79C1\u57DF/\u5E97\u94FA\u8BDD\u672F...",
        chips: [
          {
            id: "comment-hook-scripts",
            label: "\u9996\u8BC4\u7F6E\u9876\u94A9\u5B50\u4E0E\u8BC4\u8BBA\u533A\u8F6C\u5316\u8BDD\u672F\u5E93",
            placeholder: "\u8F93\u5165\u5546\u54C1\u6216\u5F15\u6D41\u94A9\u5B50\uFF08\u5982\u9886\u8D44\u6599/\u8BD5\u6837/\u540C\u6B3E\u94FE\u63A5\uFF09\uFF0C\u751F\u6210\u9AD8\u4E92\u52A8\u8BC4\u8BBA\u533A\u5267\u672C...",
            starterPrompt: "\u8BF7\u4E3A\u6211\u7684\u5C0F\u7EA2\u4E66\u7B14\u8BB0\u8BBE\u8BA1\u4E00\u5957\u62C9\u6EE1 CES \u4E92\u52A8\u5206\u4E14\u9AD8\u8F6C\u5316\u7684\u300C\u8BC4\u8BBA\u533A\u8FD0\u8425\u5267\u672C\u300D\uFF08\u5305\u542B\uFF1A5 \u6761\u4E0D\u540C\u98CE\u683C\u7684\u535A\u4E3B\u9996\u8BC4\u7F6E\u9876\u94A9\u5B50\u3001\u81EA\u7136\u4E0D\u751F\u786C\u7684\u201C\u6C42\u94FE\u63A5/\u95EE\u75DB\u70B9\u201D\u4E92\u52A8\u914D\u5408\u8BDD\u672F\u3001\u9488\u5BF9\u4EF7\u683C\u8D28\u7591\u7684\u9AD8\u60C5\u5546\u56DE\u590D\uFF0C\u4EE5\u53CA\u96F6\u8FDD\u89C4\u5F15\u5BFC\u8FDB\u5165\u5C0F\u7EA2\u4E66\u5E97\u94FA/\u7FA4\u804A/\u79C1\u4FE1\u7684\u627F\u63A5\u94FE\u8DEF\uFF09\uFF1A\n\n\u4E3B\u63A8\u4EA7\u54C1\u6216\u5F15\u6D41\u94A9\u5B50\uFF1A"
          },
          {
            id: "founder-ip-story",
            label: "\u4E00\u4EBA\u516C\u53F8 / \u54C1\u724C\u4E3B\u7406\u4EBA\u6DA8\u7C89\u8FDE\u8F7D\u5267\u672C",
            placeholder: "\u8F93\u5165\u4F60\u7684\u521B\u4E1A\u521D\u5FC3\u6216\u505A\u4EA7\u54C1\u7684\u5E55\u540E\u6545\u4E8B\uFF0C\u6253\u9020\u9AD8\u4FE1\u4EFB\u5EA6\u3001\u9AD8\u5BA2\u5355\u8F6C\u5316\u7684\u4E3B\u7406\u4EBA IP...",
            starterPrompt: "\u8BF7\u5E2E\u6211\u7B56\u5212\u4E00\u5957\u300C\u5C0F\u7EA2\u4E66\u54C1\u724C\u4E3B\u7406\u4EBA / \u4E00\u4EBA\u516C\u53F8\u521B\u4E1A\u8FDE\u8F7D\u680F\u76EE\u300D\uFF08\u89C4\u5212\u8D26\u53F7\u56DB\u4EF6\u5957\u7B80\u4ECB\u3001\u7F6E\u9876 3 \u7BC7\u4EBA\u8BBE\u5EFA\u7ACB\u7B14\u8BB0\u3001\u7814\u53D1\u6253\u6837/\u9009\u54C1\u5E55\u540E\u6545\u4E8B\u7EBF\u3001\u542C\u529D\u6539\u54C1\u4E92\u52A8\u7B14\u8BB0\uFF09\uFF0C\u7528\u771F\u5B9E\u611F\u5EFA\u7ACB\u6781\u9AD8\u79C1\u57DF\u4FE1\u4EFB\u5EA6\uFF1A\n\n\u6211\u7684\u80CC\u666F\u4E0E\u6240\u505A\u4EA7\u54C1\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 3,
    hidden: false
  },
  {
    id: "amazon",
    name: "Amazon \u4E9A\u9A6C\u900A\u8FD0\u8425",
    shortName: "Amazon",
    heroTitle: "Amazon AI\uFF0C\u5168\u80FD\u4E9A\u9A6C\u900A\u8DE8\u5883\u8FD0\u8425 Agent",
    tagline: "COSMO/Rufus \u9AD8\u8F6C\u5316 Listing\u3001A+ \u9875\u9762\u89C6\u89C9\u811A\u672C\u3001SP \u5E7F\u544A\u5426\u8BCD\u4E0E FBA \u8865\u8D27\u7BA1\u5BB6",
    skillName: "amazon-ops",
    iconBg: "linear-gradient(135deg, #FF9900 0%, #D97706 100%)",
    iconGlyph: "A",
    mascotEmoji: "\u{1F4E6}",
    mascotTitle: "\u4E9A\u9A6C\u900A\u91D1\u724C\u8FD0\u8425",
    connectionLabel: "\u8FDE\u63A5 Amazon MCP",
    connectionUrlLabel: "\u4E9A\u9A6C\u900A\u7AD9\u70B9 / \u5E97\u94FA\u94FE\u63A5",
    connectionUrlPlaceholder: "https://www.amazon.com/sp?seller=XXXXX \u6216\u5317\u7F8E/\u6B27\u6D32\u7AD9\u70B9",
    connectionTokenLabel: "SP-API / MCP \u6388\u6743\u51ED\u8BC1 (\u53EF\u9009)",
    connectionTokenPlaceholder: "\u7559\u7A7A\u5219\u4F7F\u7528 Hoxi.ai \u4E00\u952E\u6388\u6743\u4E0E Chrome Link \u5356\u5BB6\u540E\u53F0\u534F\u540C",
    mcp: {
      serverId: "amazon-mcp",
      name: "Amazon Seller \u8FD0\u8425 MCP",
      url: "/api/mcp",
      transport: "http",
      authType: "hoxi-account",
      authUrl: "/api/oauth/authorize",
      consoleUrl: "/user/tokens",
      scopes: ["mcp:tools", "mcp:profile:read", "mcp:orders:read", "mcp:subscriptions:read", "mcp:theme:read", "mcp:theme:plan"],
      toolsPreview: [
        "amazon.listing_cosmo_optimize",
        "amazon.aplus_storyboard",
        "amazon.ppc_search_term_audit",
        "amazon.fba_restock_planner"
      ]
    },
    categories: [
      {
        id: "amazon-listing",
        label: "Listing \u4E0E SEO",
        icon: "\u{1F4DD}",
        placeholder: "\u8F93\u5165\u4EA7\u54C1\u6838\u5FC3\u5356\u70B9\u3001\u6750\u8D28\u53C2\u6570\u6216\u7ADE\u54C1 ASIN\uFF0C\u751F\u6210\u7B26\u5408 COSMO + Rufus \u7B97\u6CD5\u7684 Listing...",
        chips: [
          {
            id: "cosmo-listing-full",
            label: "COSMO + Rufus \u9EC4\u91D1\u4E94\u70B9\u4E0E\u6807\u9898",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u540D\u79F0\u3001\u76EE\u6807\u7AD9\u70B9\uFF08\u7F8E/\u6B27/\u65E5\uFF09\u4E0E 3 \u4E2A\u5DEE\u5F02\u5316\u5356\u70B9...",
            starterPrompt: "\u8BF7\u8C03\u7528 `amazon-ops` \u6280\u80FD\uFF0C\u6309\u4E9A\u9A6C\u900A\u6700\u65B0 COSMO \u610F\u56FE\u56FE\u8C31\u4E0E Rufus AI \u5BFC\u8D2D\u6807\u51C6\uFF0C\u4E3A\u4EE5\u4E0B\u4EA7\u54C1\u751F\u6210\u9AD8\u8F6C\u5316\u82F1\u6587 Title\uFF08200 \u5B57\u7B26\u5185\uFF09\u30015 \u6761\u9EC4\u91D1 Bullet Points\uFF08\u5168\u5927\u5199\u75DB\u70B9\u5229\u76CA\u94A9\u5B50 + \u573A\u666F\u7EC6\u8282\uFF09\u3001Product Description \u4EE5\u53CA 250 Bytes \u6EE1\u683C Search Terms\uFF1A\n\n\u4EA7\u54C1\u4E0E\u7AD9\u70B9\u4FE1\u606F\uFF1A"
          },
          {
            id: "chrome-link-seller-central",
            label: "Chrome Link \u81EA\u52A8\u586B\u5165 Seller Central",
            placeholder: "\u5C06\u5B9A\u7A3F\u7684 Title\u3001\u4E94\u70B9\u63CF\u8FF0\u4E0E Search Terms \u534A\u81EA\u52A8\u586B\u5165\u5F53\u524D\u6253\u5F00\u7684\u4E9A\u9A6C\u900A\u540E\u53F0...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `amazon-ops` \u6280\u80FD\u914D\u5408 `hoxi_browser`\uFF08Chrome Link\uFF09\uFF0C\u5C06\u6211\u4EEC\u5B9A\u7A3F\u7684\u4E9A\u9A6C\u900A Listing\uFF08Title\u30015 Bullet Points\u3001Search Terms\uFF09\u81EA\u52A8\u586B\u5165\u6211\u5F53\u524D\u5DF2\u6253\u5F00\u7684 Amazon Seller Central \u5546\u54C1\u7F16\u8F91\u6807\u7B7E\u9875\u4E2D\uFF0C\u5E76\u5728\u70B9\u51FB Save and finish \u6309\u94AE\u524D\u505C\u4E0B\u8BA9\u6211\u786E\u8BA4\uFF1A\n\n\u5F85\u586B\u5165\u5185\u5BB9\u6216\u6307\u4EE4\uFF1A"
          },
          {
            id: "voc-review-mining",
            label: "\u7ADE\u54C1\u5DEE\u8BC4 VOC \u75DB\u70B9\u63D0\u70BC",
            placeholder: "\u7C98\u8D34 Top \u7ADE\u54C1\u7684 1\u20133 \u661F\u5DEE\u8BC4\u5185\u5BB9\uFF0C\u63D0\u70BC\u4EA7\u54C1\u5FAE\u521B\u65B0\u4E0E\u4E94\u70B9\u9632\u5DEE\u8BC4\u8BDD\u672F...",
            starterPrompt: "\u8BF7\u8C03\u7528 `amazon-ops` \u6280\u80FD\uFF0C\u6DF1\u5EA6\u5206\u6790\u4EE5\u4E0B\u7ADE\u54C1\u7684\u4E70\u5BB6\u5DEE\u8BC4\uFF081\u20133 \u661F Review\uFF09\u4E0E\u9AD8\u9891 Q&A\uFF0C\u603B\u7ED3\u4E70\u5BB6\u6700\u96C6\u4E2D\u7684 3 \u5927\u69FD\u70B9\uFF0C\u5E76\u8F6C\u5316\u4E3A\u6211\u65B9 Listing \u4E94\u70B9\u63CF\u8FF0\u7684\u5DEE\u5F02\u5316\u5356\u70B9\u4E0E\u9632\u9000\u8D27\u8BF4\u660E\uFF1A\n\n\u7ADE\u54C1\u5DEE\u8BC4\u5185\u5BB9\u6216\u54C1\u7C7B\uFF1A"
          }
        ]
      },
      {
        id: "amazon-aplus",
        label: "A+ \u9875\u9762\u4E0E\u54C1\u724C\u6545\u4E8B",
        icon: "\u{1F3A8}",
        placeholder: "\u8BBE\u8BA1\u9AD8\u8F6C\u5316\u57FA\u7840 A+ / \u9AD8\u7EA7 A+\uFF08Premium A+\uFF09\u6A21\u5757\u5316\u6587\u6848\u3001\u5C3A\u5BF8\u6784\u56FE\u4E0E\u5BF9\u6BD4\u8868...",
        chips: [
          {
            id: "premium-aplus-script",
            label: "\u9AD8\u7EA7 A+ 6 \u6A21\u5757\u89C6\u89C9\u4E0E\u6587\u6848\u811A\u672C",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u6838\u5FC3\u79D1\u6280\u3001\u4F7F\u7528\u573A\u666F\u4E0E\u54C1\u724C\u8C03\u6027\uFF0C\u751F\u6210\u9010\u5C4F\u7F8E\u5DE5Brief\u4E0E\u56FE\u7247Alt\u8BCD...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `amazon-ops` \u6280\u80FD\uFF0C\u4E3A\u8FD9\u6B3E\u4EA7\u54C1\u7B56\u5212\u4E00\u5957 6 \u6A21\u5757\u9AD8\u8F6C\u5316\u4E9A\u9A6C\u900A A+ \u9875\u9762\u811A\u672C\uFF08\u542B\u6BCF\u6A21\u5757\u7684\u63A8\u8350\u5C3A\u5BF8\u3001\u7F8E\u5DE5\u6784\u56FE\u6307\u5BFC\u3001\u82F1\u6587\u4E3B\u526F\u6807\u9898\u3001\u6B63\u6587\u6587\u6848\uFF0C\u4EE5\u53CA\u57CB\u5165\u6BCF\u5F20\u56FE\u7247\u540E\u53F0\u7684 100 \u5B57\u7B26 Image Keywords Alt Text\uFF09\uFF1A\n\n\u4EA7\u54C1\u6838\u5FC3\u4FE1\u606F\uFF1A"
          },
          {
            id: "aplus-comparison-chart",
            label: "A+ \u5173\u8054\u4EA4\u53C9\u9500\u552E\u5BF9\u6BD4\u8868",
            placeholder: "\u5BF9\u6BD4\u5E97\u94FA\u5185\u591A\u6B3E\u4EA7\u54C1\u6216\u5BF9\u6BD4\u666E\u901A\u7ADE\u54C1\uFF0C\u63D0\u5347\u5173\u8054\u8D2D\u4E70\u4E0E\u8F6C\u5316\u7387...",
            starterPrompt: "\u8BF7\u8C03\u7528 `amazon-ops` \u6280\u80FD\uFF0C\u8BBE\u8BA1\u4E00\u4E2A\u4E9A\u9A6C\u900A A+ \u9875\u9762\u5E95\u90E8\u7684\u9AD8\u8F6C\u5316\u5BF9\u6BD4\u77E9\u9635\uFF08Comparison Table\uFF09\uFF0C\u7A81\u51FA\u4E3B\u63A8\u6B3E\u5728 5 \u4E2A\u6838\u5FC3\u8D2D\u4E70\u51B3\u7B56\u7EF4\u5EA6\u4E0A\u7684\u4F18\u52BF\uFF1A\n\n\u4E3B\u63A8\u6B3E\u4E0E\u5BF9\u6BD4\u7EF4\u5EA6\uFF1A"
          }
        ]
      },
      {
        id: "amazon-ppc-fba",
        label: "SP \u5E7F\u544A\u4E0E FBA \u8865\u8D27",
        icon: "\u{1F4C8}",
        placeholder: "\u8BCA\u65AD SP/SB \u5E7F\u544A\u641C\u7D22\u8BCD\u62A5\u544A\u3001\u964D\u4F4E ACOS/TACOS\uFF0C\u6216\u6D4B\u7B97 FBA \u5B89\u5168\u5E93\u5B58\u4E0E\u65AD\u8D27\u70B9...",
        chips: [
          {
            id: "ppc-acos-audit",
            label: "SP \u5E7F\u544A\u641C\u7D22\u8BCD\u5426\u8BCD\u4E0E\u964D ACOS",
            placeholder: "\u7C98\u8D34\u5E7F\u544A\u9AD8\u82B1\u8D39\u8BCD\u6216\u5F53\u524D\u66DD\u5149/\u70B9\u51FB/\u8F6C\u5316\u6570\u636E\uFF0C\u8F93\u51FA\u7CBE\u51C6\u5426\u8BCD\u4E0E\u8C03\u4EF7\u65B9\u6848...",
            starterPrompt: "\u8BF7\u8C03\u7528 `amazon-ops` \u6280\u80FD\uFF0C\u5E2E\u6211\u8BCA\u65AD\u4EE5\u4E0B\u4E9A\u9A6C\u900A SP \u5E7F\u544A\u6570\u636E/\u641C\u7D22\u8BCD\u8868\u73B0\uFF0C\u8BC6\u522B\u9AD8\u82B1\u8D39\u96F6\u8F6C\u5316\u7684\u5403\u9884\u7B97\u8BCD\uFF08\u7ED9\u51FA Negative Exact / Phrase \u5EFA\u8BAE\uFF09\u3001\u9AD8\u8F6C\u5316\u6BD5\u4E1A\u8BCD\uFF08\u8F6C\u624B\u52A8\u7CBE\u51C6\u7ADE\u4EF7\uFF09\u4EE5\u53CA\u964D\u4F4E ACOS \u7684\u5206\u65F6\u7ADE\u4EF7\u7B56\u7565\uFF1A\n\n\u5E7F\u544A\u6570\u636E\u6216\u54C1\u7C7B\uFF1A"
          },
          {
            id: "fba-restock-calc",
            label: "FBA \u8865\u8D27\u6570\u91CF\u4E0E\u65AD\u8D27\u9884\u8B66\u6D4B\u7B97",
            placeholder: "\u8F93\u5165\u5F53\u524D\u5728\u5E93/\u5728\u9014\u5E93\u5B58\u3001\u65E5\u5747\u9500\u91CF\u4E0E\u5934\u7A0B\u6D77\u8FD0/\u7A7A\u8FD0\u5468\u671F...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `amazon-ops` \u6280\u80FD\uFF0C\u6839\u636E\u6211\u7684 FBA \u5728\u5E93\u53EF\u552E\u5E93\u5B58\u3001\u5728\u9014\u6570\u91CF\u3001\u8FD1 7/14/30 \u5929\u65E5\u5747\u9500\u91CF\u4E0E\u5934\u7A0B\u7269\u6D41\u65F6\u6548\uFF0C\u6D4B\u7B97\u5B89\u5168\u8865\u8D27\u89E6\u53D1\u70B9\u3001\u5EFA\u8BAE\u53D1\u8D27\u6570\u91CF\u53CA\u9632\u65AD\u8D27\u63A7\u6D41\u901F\u65B9\u6848\uFF1A\n\n\u5E93\u5B58\u4E0E\u9500\u91CF\u53C2\u6570\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 4,
    hidden: false
  },
  {
    id: "ads-growth",
    name: "Meta & Google \u6295\u6D41",
    shortName: "\u6295\u6D41\u589E\u957F",
    heroTitle: "Ads Growth AI\uFF0C\u6D77\u5916\u4E70\u91CF\u4E0E ROAS \u589E\u957F Agent",
    tagline: "Meta / Google PMax / TikTok \u7206\u6B3E\u4E70\u91CF\u7D20\u6750\u77E9\u9635\u3001\u53D7\u4F17\u6D4B\u8BD5\u4E0E\u5168\u6F0F\u6597 ROAS \u5F52\u56E0",
    skillName: "ads-growth-ops",
    iconBg: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
    iconGlyph: "M",
    mascotEmoji: "\u{1F680}",
    mascotTitle: "\u9996\u5E2D\u4E70\u91CF\u6295\u624B",
    connectionLabel: "\u8FDE\u63A5\u5E7F\u544A\u589E\u957F MCP",
    connectionUrlLabel: "\u5E7F\u544A\u843D\u5730\u9875 / \u8FFD\u8E2A\u57DF\u540D",
    connectionUrlPlaceholder: "https://yourbrand.com \u6216\u4E3B\u6295\u72EC\u7ACB\u7AD9\u843D\u5730\u9875\u94FE\u63A5",
    connectionTokenLabel: "\u5E7F\u544A\u62A5\u8868 / MCP Token (\u53EF\u9009)",
    connectionTokenPlaceholder: "\u7559\u7A7A\u5219\u4F7F\u7528 Hoxi.ai \u4E00\u952E\u6388\u6743\u4E0E\u6D4F\u89C8\u5668\u50CF\u7D20\u5DE1\u68C0",
    mcp: {
      serverId: "ads-growth-mcp",
      name: "Meta & Google \u4E70\u91CF\u589E\u957F MCP",
      url: "/api/mcp",
      transport: "http",
      authType: "hoxi-account",
      authUrl: "/api/oauth/authorize",
      consoleUrl: "/user/tokens",
      scopes: ["mcp:tools", "mcp:profile:read", "mcp:orders:read", "mcp:subscriptions:read", "mcp:theme:read", "mcp:theme:plan"],
      toolsPreview: [
        "ads.creative_angle_matrix",
        "ads.google_pmax_assets",
        "ads.roas_funnel_diagnose",
        "ads.landing_page_message_match"
      ]
    },
    categories: [
      {
        id: "meta-creatives",
        label: "Meta \u4E70\u91CF\u7D20\u6750\u77E9\u9635",
        icon: "\u{1F3AF}",
        placeholder: "\u8F93\u5165\u4EA7\u54C1\u4E0E\u53D7\u4F17\u75DB\u70B9\uFF0C\u751F\u6210 Facebook / Instagram 6 \u5927\u5207\u5165\u70B9\u4E70\u91CF\u5E7F\u544A\u6587\u6848\u4E0E\u89C6\u9891\u811A\u672C...",
        chips: [
          {
            id: "six-angle-matrix",
            label: "6 \u5927\u4E70\u91CF\u5207\u5165\u70B9\uFF08Angles\uFF09\u88C2\u53D8",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u6838\u5FC3\u5356\u70B9\u4E0E\u5BA2\u5355\u4EF7\uFF0C\u4E00\u6B21\u6027\u751F\u6210 6 \u7EC4\u4E0D\u540C\u5207\u5165\u70B9\u7684\u5E7F\u544A\u521B\u610F...",
            starterPrompt: "\u8BF7\u8C03\u7528 `ads-growth-ops` \u6280\u80FD\uFF0C\u4E3A\u8FD9\u6B3E\u4EA7\u54C1\u7B56\u5212\u4E00\u5957 Meta (Facebook / Instagram) \u4E70\u91CF\u6D4B\u8BD5\u77E9\u9635\uFF0C\u5305\u542B 6 \u4E2A\u622A\u7136\u4E0D\u540C\u7684\u521B\u610F\u5207\u5165\u70B9\uFF08\u75DB\u70B9\u66B4\u51FB\u3001Us vs Them \u5BF9\u6BD4\u3001\u521B\u59CB\u4EBA\u80CC\u4E66\u3001UGC \u771F\u5B9E\u6D4B\u8BC4\u3001\u62C6\u7BB1\u7B97\u8D26\u3001\u9001\u793C\u573A\u666F\uFF09\uFF0C\u6BCF\u7EC4\u8F93\u51FA Primary Text\u3001Headline\u3001Description \u4E0E\u9996\u5E27\u89C6\u89C9\u6307\u5BFC\uFF1A\n\n\u63A8\u5E7F\u4EA7\u54C1\u4E0E\u5BA2\u5355\u4EF7\uFF1A"
          },
          {
            id: "ugc-hook-pack",
            label: "\u9AD8 CTR \u89C6\u9891\u524D 3 \u79D2\u94A9\u5B50\u5305",
            placeholder: "\u89E3\u51B3\u5E7F\u544A\u7D20\u6750\u75B2\u52B3\uFF0C\u751F\u6210 10 \u7EC4\u7ECF\u8FC7\u6D77\u5916\u4E70\u91CF\u9A8C\u8BC1\u7684\u9EC4\u91D1 3 \u79D2\u5F00\u5934...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `ads-growth-ops` \u6280\u80FD\uFF0C\u9488\u5BF9\u6211\u7684\u4E70\u91CF\u89C6\u9891\u7D20\u6750\u75B2\u52B3\u95EE\u9898\uFF0C\u8BBE\u8BA1 10 \u4E2A\u9AD8 Thumb-Stop Ratio\uFF083 \u79D2\u505C\u7559\u7387 > 35%\uFF09\u7684\u89C6\u9891\u524D 3 \u79D2\u89C6\u89C9\u52A8\u4F5C + \u82F1\u6587\u53E3\u64AD\u94A9\u5B50\uFF08Hooks\uFF09\uFF1A\n\n\u4EA7\u54C1\u4E0E\u76EE\u6807\u53D7\u4F17\uFF1A"
          }
        ]
      },
      {
        id: "google-pmax",
        label: "Google \u641C\u7D22\u4E0E PMax",
        icon: "\u{1F50D}",
        placeholder: "\u914D\u7F6E Google Search \u9AD8\u8D2D\u4E70\u610F\u56FE\u5173\u952E\u8BCD\u3001RSA \u54CD\u5E94\u5F0F\u641C\u7D22\u5E7F\u544A\u4E0E Performance Max \u8D44\u4EA7\u7EC4...",
        chips: [
          {
            id: "pmax-asset-group",
            label: "PMax \u5168\u5957\u6587\u6848\u8D44\u4EA7\u5305\u751F\u6210",
            placeholder: "\u4E00\u952E\u751F\u6210\u7B26\u5408\u5B57\u7B26\u4E0A\u9650\u7684 15 \u6761 Headlines\u30015 \u6761 Long Headlines \u4E0E 4 \u6761 Descriptions...",
            starterPrompt: "\u8BF7\u8C03\u7528 `ads-growth-ops` \u6280\u80FD\uFF0C\u6309 Google Ads Performance Max (PMax) \u4E0E RSA \u54CD\u5E94\u5F0F\u641C\u7D22\u5E7F\u544A\u89C4\u8303\uFF0C\u4E3A\u6211\u7684\u4EA7\u54C1\u751F\u6210\u4E25\u683C\u7B26\u5408\u5B57\u7B26\u9650\u5236\u7684 15 \u6761 Headlines\uFF08\u226430\u5B57\u7B26\uFF09\u30015 \u6761 Long Headlines\uFF08\u226490\u5B57\u7B26\uFF09\u30014 \u6761 Descriptions\uFF08\u226490\u5B57\u7B26\uFF09\u53CA Sitelink \u9644\u52A0\u94FE\u63A5\u6587\u6848\uFF1A\n\n\u54C1\u724C\u4E0E\u4EA7\u54C1\u5356\u70B9\uFF1A"
          },
          {
            id: "search-intent-keywords",
            label: "\u9AD8\u8F6C\u5316\u641C\u7D22\u8BCD\u4E0E\u5426\u8BCD\u67B6\u6784",
            placeholder: "\u6309\u54C1\u724C\u8BCD\u3001\u54C1\u7C7B\u8BCD\u3001\u7ADE\u54C1\u622A\u6D41\u8BCD\u89C4\u5212 Google Search \u5E7F\u544A\u7EC4\u4E0E\u6392\u9664\u8BCD...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `ads-growth-ops` \u6280\u80FD\uFF0C\u5E2E\u6211\u642D\u5EFA Google Search \u641C\u7D22\u5E7F\u544A\u7684\u9AD8\u610F\u56FE\u5173\u952E\u8BCD\u77E9\u9635\uFF08\u542B Exact / Phrase \u5EFA\u8BAE\uFF09\u4EE5\u53CA\u9632\u6B62\u9884\u7B97\u6D6A\u8D39\u7684 Negative Keywords\uFF08\u5426\u8BCD\u8868\uFF09\uFF1A\n\n\u63A8\u5E7F\u54C1\u7C7B\u4E0E\u9884\u7B97\uFF1A"
          }
        ]
      },
      {
        id: "roas-funnel",
        label: "ROAS \u6F0F\u6597\u4E0E\u843D\u5730\u9875\u5BF9\u8D26",
        icon: "\u{1F4CA}",
        placeholder: "\u8F93\u5165\u5E7F\u544A\u66DD\u5149\u3001CTR\u3001CPC\u3001\u52A0\u8D2D\u7387\u4E0E ROAS \u6570\u636E\uFF0C\u7CBE\u51C6\u5B9A\u4F4D\u4E70\u91CF\u4E8F\u635F\u73AF\u8282...",
        chips: [
          {
            id: "funnel-bottleneck",
            label: "\u4E70\u91CF\u5168\u6F0F\u6597\u75C5\u7076\u5F52\u56E0\u4E0E\u6269\u91CF",
            placeholder: "\u8F93\u5165\u5F53\u524D CPM\u3001CTR\u3001CPC\u3001ATC%\u3001CVR \u4E0E\u76C8\u4E8F\u5E73\u8861 ROAS\uFF0C\u83B7\u53D6\u8C03\u4F18\u52A8\u4F5C...",
            starterPrompt: "\u8BF7\u8C03\u7528 `ads-growth-ops` \u6280\u80FD\uFF0C\u6839\u636E\u6211\u5F53\u524D\u7684\u5E7F\u544A\u6295\u653E\u6F0F\u6597\u6307\u6807\uFF08CPM / CTR / CPC / \u52A0\u8D2D\u7387 / \u7ED3\u8D26\u8F6C\u5316\u7387 / \u5B9E\u9645 ROAS vs \u4FDD\u672C ROAS\uFF09\uFF0C\u7CBE\u51C6\u8BCA\u65AD\u5230\u5E95\u662F\u7D20\u6750\u7AEF\u3001\u53D7\u4F17\u7AEF\u8FD8\u662F\u72EC\u7ACB\u7AD9\u843D\u5730\u9875\u7AEF\u6389\u4E86\u94FE\u5B50\uFF0C\u5E76\u7ED9\u51FA\u5173\u505C\u4E0E\u6269\u91CF\uFF08Scaling\uFF09\u64CD\u4F5C\u6307\u5357\uFF1A\n\n\u5F53\u524D\u6295\u653E\u6570\u636E\uFF1A"
          },
          {
            id: "landing-message-match",
            label: "\u5E7F\u544A\u4E0E\u843D\u5730\u9875\u4E00\u81F4\u6027\uFF08Message Match\uFF09\u4F53\u68C0",
            placeholder: "\u68C0\u67E5\u5E7F\u544A\u627F\u8BFA\u7684\u6298\u6263/\u75DB\u70B9\u662F\u5426\u5728\u843D\u5730\u9875\u9996\u5C4F 3 \u79D2\u5185\u5F97\u5230\u627F\u63A5...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `ads-growth-ops` \u6280\u80FD\u914D\u5408\u5185\u7F6E\u6D4F\u89C8\u5668\uFF0C\u5BF9\u6BD4\u6211\u7684\u4E70\u91CF\u5E7F\u544A\u6587\u6848\u627F\u8BFA\u4E0E\u76EE\u6807\u843D\u5730\u9875\uFF08Landing Page\uFF09\u9996\u5C4F\u5185\u5BB9\uFF0C\u8BCA\u65AD Message Match \u4E00\u81F4\u6027\u3001\u52A0\u8F7D\u901F\u5EA6\u4E0E\u52A0\u8D2D\u8F6C\u5316\u963B\u529B\uFF1A\n\n\u5E7F\u544A\u6587\u6848\u4E0E\u843D\u5730\u9875 URL\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 5,
    hidden: false
  },
  {
    id: "1688",
    name: "1688 \u6E90\u5934\u5DE5\u5382\u8FD0\u8425",
    shortName: "1688",
    heroTitle: "1688 AI\uFF0C\u6E90\u5934\u5DE5\u5382 B2B \u83B7\u5BA2\u4E0E\u8DE8\u5883\u4F9B\u8D27 Agent",
    tagline: "7 \u661F\u9547\u5E97\u4E4B\u5B9D\u5546\u54C1\u4E0A\u67B6\u3001\u65FA\u65FA\u5927\u5BA2\u8BE2\u76D8\u8F6C\u5316\u3001\u6570\u5B57\u8425\u9500\u6295\u6D41\u4E0E\u8DE8\u5883\u4EE3\u53D1\u5206\u9500\u62DB\u52DF",
    skillName: "1688-ops",
    iconBg: "linear-gradient(135deg, #FF5000 0%, #EA580C 100%)",
    iconGlyph: "16",
    mascotEmoji: "\u{1F3ED}",
    mascotTitle: "1688 \u6E90\u5934\u5382\u957F",
    connectionLabel: "\u8DF3\u8F6C 1688 \u6388\u6743\u5E97\u94FA",
    connectionUrlLabel: "1688 \u65FA\u94FA\u57DF\u540D / \u5E97\u94FA\u5730\u5740\uFF08\u70B9\u51FB\u786E\u8BA4\u6388\u6743\u5C06\u8DF3\u8F6C 1688 \u767B\u5F55\u6388\u6743\uFF09",
    connectionUrlPlaceholder: "\u4F8B\u5982\uFF1Ahttps://yourfactory.1688.com\uFF08\u4E5F\u53EF\u7559\u7A7A\u76F4\u63A5\u8DF3\u8F6C 1688 \u6388\u6743\uFF09",
    connectionTokenLabel: "1688 \u5F00\u653E\u5E73\u53F0 Access Token\uFF08\u53EF\u9009\uFF09",
    connectionTokenPlaceholder: "\u7559\u7A7A\u5C06\u76F4\u63A5\u6253\u5F00 1688 \u5B98\u65B9\u9875\u9762\u5B8C\u6210\u767B\u5F55\u6388\u6743",
    mcp: {
      serverId: "1688-mcp",
      name: "1688 \u6E90\u5934\u5DE5\u5382\u4E0E\u8DE8\u5883\u4F9B\u8D27 MCP",
      url: "/api/mcp",
      transport: "http",
      authType: "hoxi-account",
      authUrl: "/api/hoxi/work/oauth/1688/authorize",
      consoleUrl: "/user/tokens",
      scopes: ["mcp:tools", "mcp:profile:read", "mcp:orders:read", "mcp:subscriptions:read", "mcp:theme:read", "mcp:theme:plan"],
      toolsPreview: [
        "c1688_tiered_wholesale_blueprint",
        "1688.product_title_seo",
        "1688.rfq_quote_followup",
        "1688.crossborder_supply_pack"
      ]
    },
    categories: [
      {
        id: "1688-listing",
        label: "\u9547\u5E97\u4E4B\u5B9D\u4E0E 7 \u661F\u4E0A\u54C1",
        icon: "\u{1F3ED}",
        placeholder: "\u8F93\u5165\u51FA\u5382\u88F8\u4EF7\u3001\u6750\u8D28\u5DE5\u827A\u6216\u4EA7\u54C1\u53C2\u6570\uFF0C\u751F\u6210 1688 \u6EE1\u683C 30 \u5B57 B2B \u6807\u9898\u3001\u9636\u68AF\u6279\u53D1\u4EF7\u4E0E\u5B9E\u529B\u5DE5\u5382\u8BE6\u60C5\u9875...",
        chips: [
          {
            id: "1688-7star-listing",
            label: "7 \u661F\u9AD8\u6743\u91CD\u6807\u9898 + 3 \u6863\u9636\u68AF\u6279\u53D1\u4EF7\u5168\u6848",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u540D\u79F0\u3001\u51FA\u5382\u6210\u672C\u3001\u8D77\u8BA2\u91CF\uFF08MOQ\uFF09\u4E0E\u6838\u5FC3\u5B9A\u5236\u5DE5\u827A...",
            starterPrompt: "\u8BF7\u8C03\u7528 `1688-ops` \u6280\u80FD\uFF0C\u6309 1688 \u6700\u65B0 B2B \u641C\u7D22\u6743\u91CD\u4E0E\u300C\u9547\u5E97\u4E4B\u5B9D\u300D\u6807\u51C6\uFF0C\u4E3A\u4EE5\u4E0B\u5DE5\u5382\u4EA7\u54C1\u751F\u6210\uFF1A1) 5 \u6761 30 \u6C49\u5B57\uFF0860 \u5B57\u7B26\uFF09\u6EE1\u683C\u9AD8\u8F6C\u5316\u6279\u53D1\u6807\u9898\uFF08\u8986\u76D6\u6E90\u5934\u5B9A\u5236\u3001\u73B0\u8D27\u6279\u53D1\u3001\u8DE8\u5883\u4E13\u4F9B\u3001\u4E00\u4EF6\u4EE3\u53D1\u8BCD\u6839\uFF09\uFF1B2) \u62FF\u6837\u4EF7 + 3 \u6863\u9636\u68AF\u6279\u53D1\u4EF7\u4E0E\u6BDB\u5229\u6D4B\u7B97\uFF1B3) 5 \u5F20\u9AD8\u70B9\u51FB\u4E3B\u56FE\u89C6\u89C9\u811A\u672C\u4E0E 8 \u5C4F\u5B9E\u529B\u5DE5\u5382\u8BE6\u60C5\u9875\u5927\u7EB2\uFF1A\n\n\u4EA7\u54C1\u53C2\u6570\u4E0E\u51FA\u5382\u6210\u672C\uFF1A"
          },
          {
            id: "1688-chrome-link-publish",
            label: "Chrome Link \u81EA\u52A8\u586B\u5165 1688 \u5356\u5BB6\u540E\u53F0",
            placeholder: "\u5C06\u5B9A\u7A3F\u7684 30 \u5B57\u6279\u53D1\u6807\u9898\u3001\u5C5E\u6027\u53C2\u6570\u4E0E\u9636\u68AF\u4EF7\u81EA\u52A8\u586B\u5165\u5DF2\u6253\u5F00\u7684 1688 \u5546\u54C1\u53D1\u5E03\u9875...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `1688-ops` \u6280\u80FD\u914D\u5408 `hoxi_browser`\uFF08Chrome Link\uFF09\uFF0C\u5C06\u6211\u4EEC\u5B9A\u7A3F\u7684 1688 \u6279\u53D1\u5546\u54C1\u6807\u9898\u3001\u89C4\u683C\u5C5E\u6027\u30013 \u6863\u9636\u68AF\u4EF7\u683C\u4E0E\u8BE6\u60C5\u6587\u6848\u81EA\u52A8\u586B\u5165\u6211\u5F53\u524D\u5DF2\u6253\u5F00\u7684 1688 \u5356\u5BB6\u5DE5\u4F5C\u53F0\uFF08my.1688.com\uFF09\u5546\u54C1\u53D1\u5E03\u6807\u7B7E\u9875\u4E2D\uFF0C\u5E76\u5728\u70B9\u51FB\u6700\u7EC8\u63D0\u4EA4\u6309\u94AE\u524D\u505C\u4E0B\u8BA9\u6211\u6838\u5BF9\u786E\u8BA4\uFF1A\n\n\u5F85\u586B\u5165\u5546\u54C1\u6216\u6307\u4EE4\uFF1A"
          }
        ]
      },
      {
        id: "1688-inquiry-rfq",
        label: "\u65FA\u65FA\u8BE2\u76D8\u4E0E\u5B9A\u5236\u62A5\u4EF7",
        icon: "\u{1F4AC}",
        placeholder: "\u8F93\u5165\u91C7\u8D2D\u5546\u8BE2\u76D8\u5185\u5BB9\u3001\u8D34\u724C\uFF08OEM/ODM\uFF09\u9700\u6C42\u6216\u5BC4\u6837\u8BB0\u5F55\uFF0C\u751F\u6210\u9AD8\u4FE1\u4EFB\u5EA6\u62A5\u4EF7\u5355\u4E0E\u903C\u5355\u8DDF\u8FDB\u8BDD\u672F...",
        chips: [
          {
            id: "oem-rfq-quotation",
            label: "OEM/ODM \u8D34\u724C\u5B9A\u5236\u9636\u68AF\u62A5\u4EF7\u5355\u751F\u6210",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u57FA\u7840\u6B3E\u6210\u672C\u3001\u4E1D\u5370/\u5F00\u6A21\u8D77\u8BA2\u91CF\u3001\u6253\u6837\u8D39\u4E0E\u4EA4\u671F\uFF0C\u751F\u6210\u4E13\u4E1A B2B \u62A5\u4EF7\u8868...",
            starterPrompt: "\u8BF7\u8C03\u7528 `1688-ops` \u6280\u80FD\uFF0C\u4E3A\u8BE2\u76D8\u5927\u5BA2\u6237\u751F\u6210\u4E00\u4EFD\u4E13\u4E1A\u4E25\u8C28\u7684\u300A1688 \u6E90\u5934\u5DE5\u5382 OEM/ODM \u5B9A\u5236\u9636\u68AF\u62A5\u4EF7\u5355\u300B\uFF08\u5305\u542B\uFF1A\u73B0\u8D27\u901A\u8D27 / Logo \u4E1D\u5370\u5B9A\u5236 / \u5305\u6750\u5B9A\u5236 / \u6A21\u5177\u5F00\u53D1 4 \u6863 MOQ \u8D77\u8BA2\u91CF\u4E0E\u542B\u7A0E13%\u4E13\u7968/\u4E0D\u542B\u7A0E\u51FA\u5382\u5355\u4EF7\u3001\u6253\u6837\u5468\u671F\u4E0E\u6EE1\u989D\u9000\u6837\u8D39\u89C4\u5219\u3001\u5927\u8D27\u4EA4\u671F\u53CA\u5916\u7BB1\u7BB1\u89C4\u53C2\u6570\u8868\uFF09\uFF1A\n\n\u4EA7\u54C1\u6210\u672C\u4E0E\u5B9A\u5236\u8981\u6C42\uFF1A"
          },
          {
            id: "wangwang-sample-followup",
            label: "\u65FA\u65FA\u8BE2\u76D8\u9996\u54CD\u7834\u51B0\u4E0E\u5BC4\u6837 1/3/7 \u5929\u50AC\u5355\u8BDD\u672F",
            placeholder: "\u9488\u5BF9\u95EE\u5B8C\u4EF7\u4E0D\u56DE\u590D\u6216\u5DF2\u62FF\u6837\u672A\u4E0B\u5927\u8D27\u7684\u91C7\u8D2D\u5546\uFF0C\u751F\u6210\u4E0D\u751F\u786C\u7684\u9AD8\u8F6C\u5316\u903C\u5355 SOP...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `1688-ops` \u6280\u80FD\uFF0C\u5E2E\u6211\u8BBE\u8BA1\u4E00\u5957\u9AD8\u8F6C\u5316\u7684\u300C1688 \u65FA\u65FA\u5927\u5BA2\u6237\u8BE2\u76D8\u4E0E\u62FF\u6837\u8DDF\u8FDB\u5267\u672C\u300D\uFF08\u6DB5\u76D6\uFF1A30 \u79D2\u9996\u54CD\u5C55\u73B0\u5DE5\u5382\u5B9E\u529B\u5E76\u5957\u53D6\u91C7\u8D2D\u91CF/\u6E20\u9053\u7528\u9014\u8BDD\u672F\u3001\u540C\u884C\u6076\u610F\u6BD4\u4EF7\u9AD8\u60C5\u5546\u62C6\u89E3\u8BDD\u672F\u3001\u6837\u54C1\u7B7E\u6536\u7B2C 1 \u5929\u6D4B\u8BD5\u53CD\u9988 + \u7B2C 3 \u5929\u6392\u4EA7\u6863\u671F\u63D0\u9192 + \u7B2C 7 \u5929\u6837\u54C1\u8D39\u62B5\u6263\u5927\u8D27\u903C\u5355\u8BDD\u672F\uFF09\uFF1A\n\n\u4E3B\u8425\u54C1\u7C7B\u4E0E\u5BA2\u6237\u753B\u50CF\uFF1A"
          }
        ]
      },
      {
        id: "1688-ads-campaign",
        label: "\u6570\u5B57\u8425\u9500\u4E0E\u4F19\u62FC\u5927\u4FC3",
        icon: "\u{1F4C8}",
        placeholder: "\u8BCA\u65AD\u8425\u6548\u5B9D / \u9996\u4F4D\u5C55\u793A / \u5168\u5E97\u63A8\u5173\u952E\u8BCD\u6295\u4EA7\u6BD4\uFF0C\u6216\u7B56\u5212\u4F19\u62FC\u56E2\u8D2D\u4E0E\u5546\u4EBA\u8282\u51B2\u699C\u65B9\u6848...",
        chips: [
          {
            id: "1688-ads-roi-audit",
            label: "\u8425\u6548\u5B9D / \u9996\u4F4D\u5C55\u793A\u7CBE\u51C6\u8BCD\u5305\u4E0E\u964D\u672C\u8BCA\u65AD",
            placeholder: "\u7C98\u8D34\u5F53\u524D\u63A8\u5E7F\u6D88\u8D39\u3001\u70B9\u51FB\u7387\u3001\u8BE2\u76D8\u6210\u672C\u6216\u4E3B\u63A8\u54C1\u7C7B\uFF0C\u8FC7\u6EE4\u6CDB\u6D41\u91CF\u5403\u9884\u7B97\u8BCD...",
            starterPrompt: "\u8BF7\u8C03\u7528 `1688-ops` \u6280\u80FD\uFF0C\u5E2E\u6211\u8BCA\u65AD 1688 \u6570\u5B57\u8425\u9500\uFF08\u8425\u6548\u5B9D / \u5168\u5E97\u63A8 / \u9996\u4F4D\u5C55\u793A\uFF09\u6295\u653E\u6F0F\u6597\uFF0C\u642D\u5EFA\u9AD8\u610F\u5411 B2B \u91C7\u8D2D\u8BCD\u5305\uFF08\u533A\u5206\u300C\u5382\u5BB6\u5B9A\u5236/\u8D34\u724C\u4EE3\u5DE5\u300D\u5927B\u8BCD\u3001\u300C\u8DE8\u5883\u4E13\u4F9B/\u4E9A\u9A6C\u900A\u7206\u6B3E\u300D\u5916\u8D38\u8BCD\u4E0E\u300C\u4E00\u4EF6\u4EE3\u53D1\u300D\u5C0FB\u8BCD\uFF09\uFF0C\u5E76\u7ED9\u51FA\u5426\u5B9A\u6CDBC\u7AEF\u8BCD\u4E0E\u62C9\u4F4E\u5355\u6B21\u8BE2\u76D8\u6210\u672C\uFF08CPL\uFF09\u7684\u5B9E\u64CD\u5EFA\u8BAE\uFF1A\n\n\u5F53\u524D\u63A8\u5E7F\u6570\u636E\u6216\u4E3B\u63A8\u54C1\uFF1A"
          },
          {
            id: "huopin-merchant-fest",
            label: "\u4F19\u62FC\u7206\u6B3E\u51B2\u91CF\u4E0E\u5546\u4EBA\u8282\u84C4\u6C34\u65B9\u6848",
            placeholder: "\u8F93\u5165\u6D3B\u52A8\u5F15\u6D41\u6B3E\u6210\u672C\u4E0E\u5E93\u5B58\uFF0C\u8BBE\u8BA1\u65B0\u5BA2\u9996\u5355\u7834\u51B0\u3001\u8001\u5BA2\u8FD4\u5355\u6EE1\u51CF\u4E0E\u9547\u5E97\u4E4B\u5B9D\u51B2\u699C\u8282\u594F...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `1688-ops` \u6280\u80FD\uFF0C\u4E3A\u6211\u7684 1688 \u5E97\u94FA\u7B56\u5212\u4E00\u573A\u300C\u4F19\u62FC / \u5546\u4EBA\u8282\u5927\u4FC3\u51B2\u699C\u65B9\u6848\u300D\uFF08\u542B\u524D 3 \u5929\u8001\u5BA2\u5B9A\u91D1\u84C4\u6C34\u4FDD\u5E95\u6210\u4EA4\u989D\u3001\u5F15\u6D41\u6B3E\u9636\u68AF\u4F19\u62FC\u4EF7\u8BBE\u8BA1\u3001\u5173\u8054\u642D\u914D\u9AD8\u6BDB\u5229\u5229\u6DA6\u6B3E\u52A8\u7EBF\uFF0C\u4EE5\u53CA\u51B2\u523A\u7C7B\u76EE\u70ED\u9500\u699C\u4E0E\u9547\u5E97\u4E4B\u5B9D\u6743\u91CD\u7684\u6BCF\u65E5\u6267\u884C\u6E05\u5355\uFF09\uFF1A\n\n\u6D3B\u52A8\u5546\u54C1\u4E0E\u6BDB\u5229\u7A7A\u95F4\uFF1A"
          }
        ]
      },
      {
        id: "1688-crossborder-dropship",
        label: "\u8DE8\u5883\u4E13\u4F9B\u4E0E\u4EE3\u53D1\u62DB\u52DF",
        icon: "\u{1F30D}",
        placeholder: "\u5C06\u5DE5\u5382\u597D\u8D27\u6253\u5305\u4E3A Amazon / TikTok / Shopify \u8DE8\u5883\u4E13\u4F9B\u8D27\u76D8\uFF0C\u6216\u62DB\u52DF\u6DD8\u5B9D/\u6296\u97F3/\u5C0F\u7EA2\u4E66\u4E00\u4EF6\u4EE3\u53D1\u5206\u9500\u5546...",
        chips: [
          {
            id: "crossborder-supply-pack",
            label: "1688 \u8DE8\u5883\u4E13\u4F9B\u4E2D\u82F1\u8D27\u76D8\u5305\uFF08\u5BF9\u63A5 Amazon/TikTok/\u72EC\u7ACB\u7AD9\uFF09",
            placeholder: "\u8F93\u5165\u5DE5\u5382\u73B0\u8D27\u53C2\u6570\u3001\u88C5\u7BB1\u89C4\u683C\u4E0E\u4F9B\u8D27\u4EF7\uFF0C\u4E00\u952E\u751F\u6210\u5438\u5F15\u8DE8\u5883\u5927\u5356\u7684\u6807\u51C6\u5316\u9009\u54C1\u8D44\u6599\u5305...",
            starterPrompt: "\u8BF7\u8C03\u7528 `1688-ops` \u6280\u80FD\uFF0C\u5C06\u6211\u4EEC\u5DE5\u5382\u7684\u8FD9\u6B3E\u4EA7\u54C1\u6253\u9020\u4E3A\u7B26\u5408\u300C1688 \u8DE8\u5883\u4E13\u4F9B\u300D\u6807\u51C6\u7684\u7206\u6B3E\u8D27\u76D8\u8D44\u6599\u5305\uFF08\u5305\u542B\uFF1A\u8DE8\u5883\u5356\u5BB6\u6700\u5173\u5FC3\u7684\u5355\u4E2A\u51C0\u91CD/\u5916\u7BB1\u4F53\u79EF\u6750\u79EF\u91CD/\u88C5\u7BB1\u6570\u3001CE/FCC/EPA \u5408\u89C4\u8D44\u8D28\u8BF4\u660E\u3001\u5EFA\u8BAE\u7F8E\u533A Amazon/TikTok Shop \u96F6\u552E\u4EF7\u4E0E\u8DE8\u5883\u6BDB\u5229\u7A7A\u95F4\u6D4B\u7B97\u8868\uFF0C\u4EE5\u53CA\u53EF\u76F4\u63A5\u53D1\u7ED9\u8DE8\u5883\u4E70\u5BB6\u7684\u4E2D\u82F1\u53CC\u8BED\u5356\u70B9\u5361\uFF09\uFF1A\n\n\u5DE5\u5382\u4EA7\u54C1\u4E0E\u88C5\u7BB1\u53C2\u6570\uFF1A"
          },
          {
            id: "dropship-distributor-recruit",
            label: "\u6DD8\u5B9D / \u6296\u97F3 / \u5C0F\u7EA2\u4E66\u4E00\u4EF6\u4EE3\u53D1\u5206\u9500\u5546\u62DB\u52DF\u5168\u6848",
            placeholder: "\u8BBE\u8BA1\u4EE3\u53D1\u5206\u9500\u7B49\u7EA7\u6743\u76CA\u300148h \u53D1\u8D27\u4E0E\u7834\u635F\u5305\u8D54\u627F\u8BFA\u3001\u4E3B\u64AD\u5BC4\u6837\u89C4\u5219\u4E0E\u62DB\u52DF\u6D77\u62A5\u6587\u6848...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `1688-ops` \u6280\u80FD\uFF0C\u5E2E\u6211\u8BBE\u8BA1\u4E00\u5957\u5438\u5F15\u6DD8\u5B9D\u5E97\u4E3B\u3001\u6296\u97F3\u5E26\u8D27\u8FBE\u4EBA\u4E0E\u5C0F\u7EA2\u4E66\u4E70\u624B\u94FA\u8D27\u7684\u300A1688 \u4E00\u4EF6\u4EE3\u53D1\u5206\u9500\u62DB\u52DF\u65B9\u6848\u300B\uFF08\u5305\u542B\uFF1A0 \u95E8\u69DB\u4E00\u952E\u94FA\u8D27\u653F\u7B56\u3001\u6708\u9500\u9636\u68AF\u8FD4\u70B9\u4E0E\u63A7\u4EF7\u89C4\u5219\u3001\u9AD8\u6E05\u767D\u5E95\u56FE/\u5B9E\u62CD\u539F\u7247\u7D20\u6750\u5305\u76EE\u5F55\uFF0C\u4EE5\u53CA\u65FA\u94FA\u9996\u9875\u300C\u8BDA\u62DB\u4EE3\u7406/\u4E00\u4EF6\u4EE3\u53D1\u300D\u62DB\u52DF\u8BE6\u60C5\u6587\u6848\uFF09\uFF1A\n\n\u4EE3\u53D1\u4F9B\u8D27\u4EF7\u4E0E\u5EFA\u8BAE\u96F6\u552E\u63A7\u4EF7\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 6,
    hidden: false
  }
];
const hoxiWorkApps = [
  ...hoxiPlatformWorkApps,
  {
    id: "shopark",
    name: "Shopark \u72EC\u7ACB\u7AD9",
    shortName: "Shopark",
    heroTitle: "Shopark AI\uFF0C\u5168\u6258\u7BA1\u9AD8\u8F6C\u5316\u54C1\u724C\u72EC\u7ACB\u7AD9 Agent",
    tagline: "\u8FDE\u63A5\u4F60\u7684 Shopark \u72EC\u7ACB\u7AD9\u8D26\u53F7\uFF0C\u81EA\u52A8\u5DE1\u68C0\u72EC\u7ACB\u7AD9\u5E97\u94FA\u3001GMV \u5927\u76D8\u3001\u5546\u54C1\u5E93\u5B58\u4E0E\u4FC3\u9500\u6D3B\u52A8",
    skillName: "shopark-ops",
    oneClickStoreAuth: false,
    iconBg: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
    iconGlyph: "S",
    mascotEmoji: "\u{1F3EA}",
    mascotTitle: "Shopark \u72EC\u7ACB\u7AD9\u5E97\u957F",
    connectionLabel: "\u53BB Shopark \u5B98\u7F51\u767B\u5F55\u6388\u6743",
    connectionUrlLabel: "Shopark \u7AD9\u70B9\u6216\u72EC\u7ACB\u7AD9\u57DF\u540D\uFF08\u9ED8\u8BA4 shopark.ai",
    connectionUrlPlaceholder: "\u4F8B\u5982\uFF1Ahttps://shopark.ai \u6216\u4F60\u7684\u54C1\u724C\u72EC\u7ACB\u7AD9\u57DF\u540D",
    connectionTokenLabel: "Shopark \u6388\u6743\u51ED\u8BC1\uFF08\u53EF\u9009\uFF0C\u7559\u7A7A\u8DF3\u8F6C\u5B98\u7F51\u767B\u5F55\u6388\u6743\uFF09",
    connectionTokenPlaceholder: "\u7559\u7A7A\u5C06\u6253\u5F00 Shopark \u5B98\u7F51\u767B\u5F55\u4F60\u7684\u72EC\u7ACB\u8D26\u53F7\u5E76\u5B8C\u6210\u6388\u6743",
    mcp: {
      serverId: "shopark-mcp",
      name: "Shopark \u72EC\u7ACB\u7AD9\u5B98\u65B9 MCP",
      url: "https://shopark.ai/api/mcp",
      transport: "http",
      authType: "oauth",
      authUrl: "https://shopark.ai/api/oauth/authorize",
      consoleUrl: "https://shopark.ai/user/stores",
      scopes: ["mcp:tools", "mcp:profile:read", "mcp:orders:read", "mcp:subscriptions:read", "mcp:tickets:read", "mcp:theme:read", "mcp:theme:plan"],
      toolsPreview: ["apay_get_profile", "apay_list_orders", "apay_get_order_detail", "apay_list_subscriptions", "apay_list_tickets"]
    },
    categories: [
      {
        id: "storefront-launch",
        label: "\u6781\u901F\u5EFA\u7AD9\u4E0E\u88C5\u4FEE",
        icon: "\u{1F3EA}",
        placeholder: "\u63CF\u8FF0\u4F60\u60F3\u6253\u9020\u7684\u54C1\u724C\u72EC\u7ACB\u7AD9\u54C1\u7C7B\u6216\u53C2\u8003\u7ADE\u54C1\u7F51\u5740\uFF0C\u4E00\u952E\u751F\u6210\u9AD8\u8F6C\u5316\u5EFA\u7AD9\u4E0E\u88C5\u4FEE\u65B9\u6848...",
        chips: [
          {
            id: "one-sentence-store",
            label: "\u4E00\u53E5\u8BDD\u751F\u6210\u54C1\u724C\u72EC\u7ACB\u7AD9\u5168\u6848",
            placeholder: "\u8F93\u5165\u4F60\u7684\u4EA7\u54C1\u54C1\u7C7B\u4E0E\u76EE\u6807\u5E02\u573A\uFF08\u5982\uFF1A\u9762\u5411\u6B27\u7F8E\u5E02\u573A\u7684\u667A\u80FD\u5BA0\u7269\u7528\u54C1\u72EC\u7ACB\u7AD9\uFF09...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `shopark-ops` \u6280\u80FD\uFF0C\u4E3A\u6211\u5F53\u524D\u9009\u4E2D\u7684 Shopark \u5E97\u94FA\u89C4\u5212\u5E76\u751F\u6210\u4E00\u5957\u5B8C\u6574\u7684\u54C1\u724C\u72EC\u7ACB\u7AD9\u65B9\u6848\uFF08\u5305\u542B\u9996\u9875\u9996\u5C4F\u9EC4\u91D1 5 \u79D2 Hero \u533A\u3001\u54C1\u724C\u6545\u4E8B\u4E0E\u4FE1\u4EFB\u80CC\u4E66\u6A21\u5757\u3001\u6838\u5FC3\u5356\u70B9\u62C6\u89E3\u533A\u3001\u9AD8\u8F6C\u5316\u5206\u7C7B\u5BFC\u822A\u7ED3\u6784\u53CA\u9875\u811A\u5408\u89C4\u653F\u7B56\u6E05\u5355\uFF09\uFF1A\n\n\u76EE\u6807\u54C1\u7C7B\u4E0E\u53D7\u4F17\u5E02\u573A\uFF1A"
          },
          {
            id: "hero-cro-makeover",
            label: "\u72EC\u7ACB\u7AD9\u9996\u5C4F\u8F6C\u5316\u7387\uFF08CRO\uFF09\u5347\u7EA7",
            placeholder: "\u544A\u8BC9\u6211\u5F53\u524D\u72EC\u7ACB\u7AD9\u4E3B\u6253\u4EA7\u54C1\u6216\u8F6C\u5316\u75DB\u70B9\uFF0C\u91CD\u5851\u9996\u5C4F\u4EF7\u503C\u4E3B\u5F20\u4E0E\u52A0\u8D2D\u52A8\u7EBF...",
            starterPrompt: "\u8BF7\u7ED3\u5408 `shopark-ops` \u6280\u80FD\uFF0C\u5E2E\u6211\u8BCA\u65AD\u5E76\u5347\u7EA7\u5F53\u524D Shopark \u72EC\u7ACB\u7AD9\u9996\u5C4F\uFF08Above the Fold\uFF09\u7684\u4EF7\u503C\u4E3B\u5F20\u4E3B\u526F\u6807\u9898\u3001\u4E3B\u89C6\u89C9\u6784\u56FE\u6307\u5BFC\u3001\u4FE1\u4EFB\u5FBD\u7AE0\u6392\u5E03\u3001\u9636\u68AF\u52A0\u8D2D\u5C55\u793A\u4E0E\u4E3B CTA \u6309\u94AE\u6587\u6848\uFF1A\n\n\u5F53\u524D\u4E3B\u6253\u5546\u54C1\u4E0E\u73B0\u72B6\uFF1A"
          }
        ]
      },
      {
        id: "dashboard-audit",
        label: "\u7ECF\u8425\u5927\u76D8\u5DE1\u68C0",
        icon: "\u{1F4CA}",
        placeholder: "\u4E00\u952E\u5DE1\u68C0\u5F53\u524D Shopark \u5E97\u94FA GMV\u3001\u8BA2\u5355\u5C65\u7EA6\u3001\u6D3B\u8DC3\u72B6\u6001\u4E0E\u5230\u671F\u9884\u8B66...",
        chips: [
          {
            id: "gmv-overview",
            label: "\u4ECA\u65E5\u5E97\u94FA GMV \u4E0E\u8BA2\u5355\u5DE1\u68C0",
            placeholder: "\u6C47\u603B\u4ECA\u65E5\u4E0E\u8FD1 30 \u5929\u8BA2\u5355\u91CF\u3001GMV\u3001\u5BA2\u5355\u4EF7\u53CA\u5F02\u5E38\u6CE2\u52A8\u539F\u56E0...",
            starterPrompt: "\u8BF7\u8C03\u7528 `shopark-ops` \u6280\u80FD\u4E0E\u5DF2\u6388\u6743\u7684 MCP \u5DE5\u5177\uFF0C\u5E2E\u6211\u5168\u9762\u5DE1\u68C0\u5F53\u524D Shopark \u72EC\u7ACB\u7AD9\u8D26\u6237\u4E0E\u5E97\u94FA\u7ECF\u8425\u72B6\u6001\uFF08\u8BA2\u5355\u8868\u73B0\u3001\u8BA2\u9605\u6743\u76CA\u72B6\u6001\u3001\u5F85\u5904\u7406\u5DE5\u5355\u4E0E\u5F02\u5E38\u9884\u8B66\uFF09\uFF0C\u5E76\u8F93\u51FA\u4ECA\u65E5\u524D 3 \u9879\u7ECF\u8425\u884C\u52A8\u5EFA\u8BAE\uFF1A"
          },
          {
            id: "flash-sale-plan",
            label: "\u5168\u5E97\u5927\u4FC3\u6EE1\u51CF\u4E0E\u95EA\u4FC3\u7B56\u5212",
            placeholder: "\u8F93\u5165\u6D3B\u52A8\u8282\u65E5\u6216\u6E05\u4ED3\u76EE\u6807\uFF0C\u751F\u6210\u9636\u68AF\u6EE1\u51CF\u89C4\u5219\u3001\u6298\u6263\u7801\u4E0E\u6D3B\u52A8\u6A2A\u5E45...",
            starterPrompt: "\u8BF7\u7ED3\u5408\u5F53\u524D Shopark \u5E97\u94FA\u5728\u552E\u5546\u54C1\u7ED3\u6784\uFF0C\u5E2E\u6211\u7B56\u5212\u4E00\u573A\u9AD8\u8F6C\u5316\u300C\u5468\u672B 48 \u5C0F\u65F6\u9650\u65F6\u95EA\u4FC3 / \u6362\u5B63\u5927\u4FC3\u300D\u65B9\u6848\uFF08\u542B\u5F15\u6D41\u7206\u6B3E\u5B9A\u4EF7\u3001\u51D1\u5355\u6EE1\u51CF\u95E8\u69DB\u8BA1\u7B97\u3001VIP \u4E13\u5C5E\u6298\u6263\u7801\u53CA\u5168\u7AD9\u5012\u8BA1\u65F6 Banner \u6587\u6848\uFF09\uFF1A\n\n\u4FC3\u9500\u76EE\u6807\u4E0E\u6BDB\u5229\u7A7A\u95F4\uFF1A"
          }
        ]
      }
    ]
  },
  {
    id: "qingpu",
    name: "\u8F7B\u94FA AI \u4E0A\u54C1",
    shortName: "\u8F7B\u94FA AI",
    heroTitle: "\u8F7B\u94FA AI\uFF0C1688 \u6293\u54C1\u4F53\u68C0\u3001AI \u4FEE\u56FE\u751F\u56FE\u4E0E\u591A\u6E20\u9053\u4E0A\u54C1 Agent",
    tagline: "\u6388\u6743\u8FDE\u63A5 qingpu.ai \u5B98\u65B9 MCP\uFF1A\u672C\u5730\u6293\u53D6 1688 \u5E97\u94FA\u5546\u54C1\u4F53\u68C0\uFF0C\u4E00\u952E\u62A0\u767D\u5E95/\u751F\u5546\u62CD\u5957\u56FE\uFF0C\u76F4\u63A8 Ozon / WB \u8349\u7A3F\u4E0E\u591A\u5E73\u53F0\u520A\u767B",
    skillName: "qingpu-ops",
    oneClickStoreAuth: false,
    iconBg: "linear-gradient(135deg, #FF6B2C 0%, #FF9F1C 100%)",
    iconGlyph: "\u8F7B",
    mascotEmoji: "\u2728",
    mascotTitle: "\u8F7B\u94FA\u4E0A\u54C1\u4E13\u5BB6",
    connectionLabel: "\u53BB \u8F7B\u94FA AI \u5B98\u7F51\u767B\u5F55\u6388\u6743",
    connectionUrlLabel: "\u8F7B\u94FA\u7AD9\u70B9\u57DF\u540D\uFF08\u652F\u6301 qingpu.ai \uFF09",
    connectionUrlPlaceholder: "\u9ED8\u8BA4 https://qingpu.ai",
    connectionTokenLabel: "\u8F7B\u94FA\u6388\u6743\u51ED\u8BC1\uFF08\u53EF\u9009\uFF0C\u7559\u7A7A\u8DF3\u8F6C\u5B98\u7F51\u767B\u5F55\u6388\u6743\uFF09",
    connectionTokenPlaceholder: "\u7559\u7A7A\u5C06\u6253\u5F00\u8F7B\u94FA\u5B98\u7F51\uFF08qingpu.ai\uFF09\u767B\u5F55\u4F60\u7684\u72EC\u7ACB\u8D26\u53F7\u5E76\u6388\u6743",
    mcp: {
      serverId: "qingpu-mcp",
      name: "\u8F7B\u94FA AI \u5B98\u65B9\u4E0A\u54C1 MCP",
      url: "https://qingpu.ai/api/mcp",
      transport: "http",
      authType: "oauth",
      authUrl: "https://qingpu.ai/api/oauth/authorize",
      consoleUrl: "https://qingpu.ai/user/stores",
      scopes: ["mcp:tools", "mcp:profile:read", "mcp:orders:read", "mcp:subscriptions:read", "mcp:theme:read", "mcp:theme:plan"],
      toolsPreview: ["sync_source_product", "edit_product_image", "generate_ecommerce_image", "enqueue_pipeline", "get_task_result"]
    },
    categories: [
      {
        id: "smart-listing",
        label: "1688 \u6293\u54C1\u4F53\u68C0\u4E0E\u591A\u6E20\u9053\u4E0A\u54C1",
        icon: "\u{1F4E6}",
        placeholder: "\u7C98\u8D34 1688 \u5E97\u94FA\u5546\u54C1\u94FE\u63A5\u6216\u540E\u53F0\u9875\u9762\uFF0C\u6293\u53D6\u843D\u76D8\u4F53\u68C0\u5E76\u4E00\u952E\u540C\u6B65\u8F7B\u94FA\u4E0A\u54C1...",
        chips: [
          {
            id: "supplier-link-clean",
            label: "1688 \u5E97\u94FA\u6293\u54C1 + 7 \u661F\u4F53\u68C0\u4E0E\u6539\u56FE\u4F18\u5316",
            placeholder: "\u8F93\u5165 1688 \u5546\u54C1\u94FE\u63A5\u6216\u8BA9\u6D4F\u89C8\u5668\u6293\u53D6\u5F53\u524D\u5E97\u94FA\u4E0A\u54C1\uFF0C\u6267\u884C 7 \u661F\u8BCA\u65AD\u5E76\u8865\u9F50\u767D\u5E95\u56FE/\u4E3B\u56FE...",
            starterPrompt: "\u8BF7\u8C03\u7528 `qingpu-ops` \u6280\u80FD\uFF1A1) \u901A\u8FC7\u9694\u79BB\u6D4F\u89C8\u5668\u6293\u53D6\u8BE5 1688 \u5546\u54C1\u7684\u6807\u9898\u3001\u539F\u56FE\u3001\u5C5E\u6027\u3001\u9636\u68AF\u4EF7\u4E0E\u8DE8\u5883\u5305\u88C5\u5C3A\u5BF8\u843D\u76D8\u81F3 `products/<offer-id>/source-1688.json`\uFF1B2) \u8FD0\u884C `hoxi ecom listing-check --platform 1688 --seller-7star` \u8BCA\u65AD 7 \u661F\u8D28\u91CF\u77ED\u677F\uFF1B3) \u8C03\u7528 `qingpu-mcp` \u62A0\u9664\u7B2C 5 \u5F20\u7EAF\u767D\u5E95\u56FE\u5E76\u8865\u9F50\u9AD8\u70B9\u51FB\u4E3B\u56FE\uFF1A\n\n1688 \u5546\u54C1\u94FE\u63A5\u6216\u5E97\u94FA\u9875\u9762\uFF1A"
          },
          {
            id: "multi-channel-adapt",
            label: "1688 \u8D27\u6E90\u4E00\u952E\u63A8 Ozon / WB \u8349\u7A3F\u4E0E\u591A\u5E73\u53F0\u520A\u767B",
            placeholder: "\u8F93\u5165 1688 \u8D27\u6E90\u5546\u54C1\uFF0C\u7ECF\u8F7B\u94FA MCP \u751F\u6210\u591A\u5E73\u53F0\u5957\u56FE\u5E76\u63A8\u9001 Ozon / WB \u540E\u53F0\u8349\u7A3F...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `qingpu-ops` \u6280\u80FD\uFF0C\u5C06\u4EE5\u4E0B 1688 \u8D27\u6E90\u901A\u8FC7 `qingpu-mcp` \u7684 `sync_source_product` \u540C\u6B65\u81F3\u8F7B\u94FA\uFF0C\u8FD0\u884C Ozon / Wildberries \u56DB\u5C42\u6D41\u6C34\u7EBF\uFF08\u7FFB\u8BD1\u4E8B\u5B9E\u3001AI \u8865\u5168\u5FC5\u586B\u5C5E\u6027\u3001\u4FC4\u8BED\u6587\u6848\u4E0E\u5546\u62CD\u751F\u56FE\uFF09\u63D0\u4EA4\u6E20\u9053\u8349\u7A3F\uFF0C\u5E76\u540C\u6B65\u8F93\u51FA\u9002\u914D\u5176\u4ED6\u76EE\u6807\u6E20\u9053\u7684\u520A\u767B\u5305\uFF1A\n\n1688 \u8D27\u6E90\u94FE\u63A5\u4E0E\u76EE\u6807\u4E0A\u67B6\u6E20\u9053\uFF1A"
          }
        ]
      },
      {
        id: "visual-pricing",
        label: "AI \u4FEE\u56FE\u751F\u56FE\u4E0E\u8DE8\u5883\u6838\u4EF7",
        icon: "\u{1F3A8}",
        placeholder: "\u8C03\u7528\u8F7B\u94FA MCP \u4E00\u952E\u62A0\u767D\u5E95\u3001\u8D85\u6E05\u589E\u5F3A\u3001\u751F\u6210 9 \u5927\u5E73\u53F0\u4E3B\u56FE/\u573A\u666F\u56FE\uFF0C\u6216\u6D4B\u7B97\u8DE8\u5883\u5230\u624B\u6BDB\u5229...",
        chips: [
          {
            id: "nine-grid-visual-script",
            label: "\u8F7B\u94FA MCP \u62A0\u767D\u5E95 + 9 \u5927\u5E73\u53F0\u5546\u62CD\u751F\u56FE",
            placeholder: "\u63D0\u4F9B\u516C\u7F51\u5546\u54C1\u53C2\u8003\u56FE URL \u4E0E\u76EE\u6807\u5E73\u53F0\uFF081688/Ozon/WB/Amazon/TikTok \u7B49\uFF09\uFF0C\u76F4\u63A5\u751F\u6210\u5546\u62CD\u6210\u56FE...",
            starterPrompt: '\u8BF7\u4F7F\u7528 `qingpu-ops` \u6280\u80FD\u5E76\u8C03\u7528 `qingpu-mcp`\uFF1A\u5148\u5BF9\u539F\u56FE\u6267\u884C `edit_product_image(mode="image-bg-remove")` \u751F\u6210\u7EAF\u767D\u5E95\u4E3B\u56FE\uFF0C\u518D\u6309\u76EE\u6807\u5E73\u53F0\u8C03\u7528 `generate_ecommerce_image` \u751F\u6210\u9996\u5C4F\u5356\u70B9\u4E3B\u56FE\uFF08hero\uFF09\u3001\u4F7F\u7528\u573A\u666F\u56FE\uFF08scene\uFF09\u4E0E\u5C3A\u5BF8\u89C4\u683C\u56FE\uFF08spec\uFF09\uFF0C\u8F6E\u8BE2 `get_task_result` \u62C9\u56DE COS \u6210\u56FE\u4FDD\u5B58\u81F3\u5DE5\u4F5C\u533A\uFF1A\n\n\u53C2\u8003\u539F\u56FE URL \u4E0E\u76EE\u6807\u5E73\u53F0\uFF1A'
          },
          {
            id: "cross-border-pricing-matrix",
            label: "1688 \u9636\u68AF\u6210\u672C\u4E0E\u8DE8\u5883\u591A\u7AD9\u70B9\u6BDB\u5229\u7CBE\u7B97",
            placeholder: "\u8F93\u5165 1688 \u9636\u68AF\u62FF\u8D27\u4EF7\uFF08RMB\uFF09\u3001\u957F\u5BBD\u9AD8\u4E0E\u5B9E\u91CD\uFF0C\u7CBE\u786E\u6D4B\u7B97\u8DE8\u5883\u5934\u7A0B\u629B\u91CD\u4E0E\u76EE\u6807\u552E\u4EF7...",
            starterPrompt: "\u8BF7\u8C03\u7528 `qingpu-ops` \u4E0E `hoxi ecom profit`\uFF0C\u6839\u636E\u4EE5\u4E0B 1688 \u9636\u68AF\u62FF\u8D27\u4EF7\u3001\u5355\u54C1\u6BDB\u91CD\u4E0E\u5916\u7BB1\u5C3A\u5BF8\uFF08\u81EA\u52A8\u5BF9\u6BD4\u5B9E\u91CD vs \u629B\u91CD\uFF09\uFF0C\u6D4B\u7B97\u76EE\u6807\u8DE8\u5883\u7AD9\u70B9\u7684\u5230\u5CB8\u6210\u672C\u3001\u5EFA\u8BAE\u96F6\u552E\u4EF7\u3001\u9636\u68AF\u5957\u9910\u6BDB\u5229\u7387\u4E0E\u4FDD\u672C\u5E7F\u544A ROAS/ACOS\uFF1A\n\n1688 \u9636\u68AF\u4EF7\uFF08RMB\uFF09\u3001\u91CD\u91CF\u4E0E\u5C3A\u5BF8\uFF1A"
          }
        ]
      }
    ]
  },
  {
    id: "ozon",
    name: "Ozon \u4FC4\u7F57\u65AF\u8DE8\u5883\u8FD0\u8425",
    shortName: "Ozon",
    heroTitle: "Ozon AI\uFF0C\u4FC4\u7F57\u65AF\u7AD9\u70B9\u5546\u54C1\u5361\u7247\u4E0E\u5E7F\u544A\u8FD0\u8425 Agent",
    tagline: "\u5C5E\u6027\u6743\u91CD\u4F18\u5148\u7684 Ozon \u5546\u54C1\u5361\u7247\u3001Rich-content \u5BCC\u6587\u672C\u3001\u5E7F\u544A \u0414\u0420\u0420 \u8BCA\u65AD\u4E0E\u8BC4\u4EF7 VOC \u6316\u6398",
    skillName: "ozon-ops",
    iconBg: "linear-gradient(135deg, #005BFF 0%, #F91155 100%)",
    iconGlyph: "O",
    mascotEmoji: "\u{1F6D2}",
    mascotTitle: "Ozon \u8DE8\u5883\u5E97\u957F",
    connectionLabel: "\u7ED1\u5B9A Ozon \u5E97\u94FA\uFF08Client-Id + Api-Key\uFF09",
    connectionUrlLabel: "Ozon Client-Id\uFF08\u5356\u5BB6\u540E\u53F0 \u2192 \u8BBE\u7F6E \u2192 API \u5BC6\u94A5\uFF0CAdmin \u6743\u9650\uFF09",
    connectionUrlPlaceholder: "\u4F8B\u5982\uFF1A123456",
    connectionTokenLabel: "Ozon Api-Key",
    connectionTokenPlaceholder: "\u7C98\u8D34 Ozon Seller \u751F\u6210\u7684 Api-Key",
    mcp: {
      serverId: "ozon-mcp",
      name: "Ozon \u8DE8\u5883\u8FD0\u8425 MCP",
      url: "/api/mcp",
      transport: "http",
      authType: "none",
      authUrl: "/api/oauth/authorize",
      toolsPreview: ["ozon.product_card_seo", "ozon.rich_content_plan", "ozon.ads_drr_audit"]
    },
    categories: [
      {
        id: "ozon-card",
        label: "\u5546\u54C1\u5361\u7247\u4E0E Rich-content",
        icon: "\u{1F4C7}",
        placeholder: "\u8F93\u5165\u4EA7\u54C1\u53C2\u6570\u4E0E\u4FC4\u8BED\u5173\u952E\u8BCD\uFF0C\u751F\u6210\u5C5E\u6027\u4F18\u5148\u7684 \u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435\u3001\u5B8C\u6574 \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u4E0E Rich-content \u6392\u7248...",
        chips: [
          {
            id: "ozon-card-full",
            label: "Ozon \u5546\u54C1\u5361\u7247\u5168\u6848\uFF08\u5C5E\u6027\u4F18\u5148\uFF09",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u53C2\u6570\u3001\u4FC4\u8BED\u5173\u952E\u8BCD\u4E0E\u7ADE\u54C1\u5361\u7247\uFF0C\u751F\u6210 \u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 + \u5B8C\u6574 \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438...",
            starterPrompt: "\u8BF7\u8C03\u7528 `ozon-ops` \u6280\u80FD\uFF0C\u6309 Ozon \u6392\u5E8F\u903B\u8F91\u4E3A\u4EE5\u4E0B\u4EA7\u54C1\u751F\u6210\u5546\u54C1\u5361\u7247\u5168\u6848\uFF1A1) \u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435\uFF08\u2264200 \u5B57\u7B26\uFF0C\u542B \u0422\u0438\u043F+\u0411\u0440\u0435\u043D\u0434+\u5C5E\u6027\uFF0C\u65E0\u4FC3\u9500\u8BCD\uFF09\uFF1B2) \u9010\u9879\u586B\u6EE1\u7684 \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438\uFF08\u6838\u5FC3\u641C\u7D22\u8BCD\u843D\u5165\u5C5E\u6027\u503C\uFF09\uFF1B3) \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u4E0E\u5A92\u4F53\u7D20\u6750\u65B9\u6848\uFF1A\n\n\u4EA7\u54C1\u53C2\u6570\u4E0E\u4FC4\u8BED\u5173\u952E\u8BCD\uFF1A"
          },
          {
            id: "ozon-rich-content",
            label: "Rich-content \u5BCC\u6587\u672C\u8BE6\u60C5\u811A\u672C",
            placeholder: "\u89C4\u5212\u9996\u5C4F\u5356\u70B9\u5927\u56FE\u3001\u56FE\u6587\u529F\u80FD\u62C6\u89E3\u3001\u89C4\u683C\u5BF9\u6BD4\u8868\u4E0E\u54C1\u724C\u6545\u4E8B\u7684\u5BCC\u6587\u672C\u6A21\u5757...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `ozon-ops` \u6280\u80FD\uFF0C\u4E3A\u8FD9\u6B3E\u5546\u54C1\u8F93\u51FA Ozon Rich-content \u8BE6\u60C5\u9875\u9010\u6A21\u5757\u811A\u672C\uFF08\u6807\u9898\u3001\u4FC4\u8BED\u6587\u6848\u3001\u753B\u9762\u6784\u56FE\u6307\u5BFC\u4E0E\u5E95\u90E8\u4EA4\u53C9\u9500\u552E\uFF09\uFF1A\n\n\u4EA7\u54C1\u5916\u89C2\u4E0E\u6838\u5FC3\u5356\u70B9\uFF1A"
          }
        ]
      },
      {
        id: "ozon-ads",
        label: "\u5E7F\u544A\u8BCA\u65AD\u4E0E\u8BC4\u4EF7\u8FD0\u8425",
        icon: "\u{1F4C8}",
        placeholder: "\u7C98\u8D34\u63A8\u5E7F\u6D88\u8D39/CTR/\u8F6C\u5316\uFF0C\u8BCA\u65AD \u0414\u0420\u0420 \u5E76\u5254\u9664\u96F6\u8F6C\u5316\u641C\u7D22\u8BCD\uFF0C\u6216\u6316\u6398\u7ADE\u54C1\u8BC4\u4EF7\u75DB\u70B9...",
        chips: [
          {
            id: "ozon-ads-drr",
            label: "Ozon \u5E7F\u544A \u0414\u0420\u0420 \u4E0E\u96F6\u8F6C\u5316\u8BCD\u8BCA\u65AD",
            placeholder: "\u8F93\u5165\u641C\u7D22\u63A8\u5E7F/\u6A21\u677F/\u54C1\u724C\u8D27\u67B6\u7684\u5C55\u793A\u3001CTR \u4E0E\u8F6C\u5316\uFF0C\u5B9A\u4F4D\u9AD8\u82B1\u8D39\u96F6\u8F6C\u5316\u8BCD...",
            starterPrompt: "\u8BF7\u8C03\u7528 `ozon-ops` \u6280\u80FD\uFF0C\u8BCA\u65AD\u4EE5\u4E0B Ozon \u5E7F\u544A\uFF08\u041F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0432 \u043F\u043E\u0438\u0441\u043A\u0435 / \u0422\u0440\u0430\u0444\u0430\u0440\u0435\u0442\u044B / \u0411\u0440\u0435\u043D\u0434\u043E\u0432\u0430\u044F \u043F\u043E\u043B\u043A\u0430\uFF09\u6F0F\u6597\uFF0C\u8BA1\u7B97\u5404\u9879 \u0414\u0420\u0420\uFF0C\u5254\u9664\u9AD8\u82B1\u8D39\u96F6\u8F6C\u5316\u641C\u7D22\u8BCD\u5E76\u7ED9\u51FA\u7ADE\u4EF7\u8C03\u6574\u5EFA\u8BAE\uFF1A\n\n\u5E7F\u544A\u6570\u636E\uFF1A"
          },
          {
            id: "ozon-review-voc",
            label: "\u041E\u0442\u0437\u044B\u0432\u044B \u8BC4\u4EF7\u4E0E\u95EE\u7B54 VOC \u6316\u6398",
            placeholder: "\u7C98\u8D34\u540C\u7C7B\u76EE\u7ADE\u54C1\u8BC4\u4EF7\uFF0C\u63D0\u70BC\u5DEE\u8BC4\u75DB\u70B9\u4E0E\u597D\u8BC4\u723D\u70B9\uFF0C\u6307\u5BFC\u5361\u7247\u9632\u5DEE\u8BC4\u8BDD\u672F...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `ozon-ops` \u6280\u80FD\uFF0C\u4ECE\u4EE5\u4E0B\u540C\u7C7B\u76EE\u7ADE\u54C1 \u041E\u0442\u0437\u044B\u0432\u044B \u4E0E\u95EE\u7B54\u4E2D\u63D0\u70BC\u4F4E\u9891\u5DEE\u8BC4\u75DB\u70B9\u4E0E\u9AD8\u9891\u597D\u8BC4\u723D\u70B9\uFF0C\u8F93\u51FA\u9009\u54C1\u5FAE\u521B\u65B0\u65B9\u5411\u3001\u5361\u7247\u9632\u5DEE\u8BC4\u8BDD\u672F\u4E0E\u95EE\u7B54\u9884\u57CB\u6E05\u5355\uFF1A\n\n\u7ADE\u54C1\u8BC4\u4EF7\u4E0E\u95EE\u7B54\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 8,
    hidden: false
  },
  {
    id: "wildberries",
    name: "Wildberries \u4FC4\u7F57\u65AF\u8DE8\u5883\u8FD0\u8425",
    shortName: "WB",
    heroTitle: "Wildberries AI\uFF0C\u4FC4\u7F57\u65AF\u7AD9\u70B9\u5546\u54C1\u5361\u7247\u4E0E\u8D39\u7387\u5E7F\u544A Agent",
    tagline: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u5C5E\u6027\u641C\u7D22\u5361\u4F4D\u3001\u6761\u7801\u4E0E \u041A\u0438\u0417 \u6807\u8BC6\u3001\u041A\u0413\u0422/\u041C\u0413\u0422 \u8D39\u7387\u6D4B\u7B97\u4E0E \u0420\u0435\u043A\u043B\u0430\u043C\u0430 \u0414\u0420\u0420 \u8BCA\u65AD",
    skillName: "wildberries-ops",
    iconBg: "linear-gradient(135deg, #8E44AD 0%, #CB11AB 100%)",
    iconGlyph: "W",
    mascotEmoji: "\u{1F4E6}",
    mascotTitle: "WB \u8DE8\u5883\u5E97\u957F",
    connectionLabel: "\u7ED1\u5B9A Wildberries \u5E97\u94FA\uFF08Api-Key\uFF09",
    connectionUrlLabel: "WB Seller \u7AD9\u70B9\uFF08Wildberries Global \u8DE8\u5883 / FBW / FBS\uFF09",
    connectionUrlPlaceholder: "\u4F8B\u5982\uFF1Ahttps://seller.wildberries.ru",
    connectionTokenLabel: "Wildberries Api-Key",
    connectionTokenPlaceholder: "\u7C98\u8D34 WB Seller \u540E\u53F0\u751F\u6210\u7684 Api-Key",
    mcp: {
      serverId: "wildberries-mcp",
      name: "Wildberries \u8DE8\u5883\u8FD0\u8425 MCP",
      url: "/api/mcp",
      transport: "http",
      authType: "none",
      authUrl: "/api/oauth/authorize",
      toolsPreview: ["wildberries.card_subject_seo", "wildberries.kiz_barcode_plan", "wildberries.ads_drr_audit"]
    },
    categories: [
      {
        id: "wb-card",
        label: "\u5546\u54C1\u5361\u7247\u4E0E\u5408\u89C4\u6807\u8BC6",
        icon: "\u{1F4C7}",
        placeholder: "\u8F93\u5165\u4EA7\u54C1\u53C2\u6570\u4E0E\u4FC4\u8BED\u5173\u952E\u8BCD\uFF0C\u751F\u6210 \u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u5C5E\u6027\u5361\u4F4D\u7684 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435\u3001\u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u4E0E \u041A\u0438\u0417 \u65B9\u6848...",
        chips: [
          {
            id: "wb-card-subject",
            label: "WB \u5546\u54C1\u5361\u7247\uFF08\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u5C5E\u6027\u5361\u4F4D\uFF09",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u53C2\u6570\u3001\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u4E0E\u4FC4\u8BED\u5173\u952E\u8BCD\uFF0C\u751F\u6210 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 + \u5B8C\u6574 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438...",
            starterPrompt: "\u8BF7\u8C03\u7528 `wildberries-ops` \u6280\u80FD\uFF0C\u56F4\u7ED5\u6240\u9009 \u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u4E3A\u4EE5\u4E0B\u4EA7\u54C1\u751F\u6210 WB \u5546\u54C1\u5361\u7247\u5168\u6848\uFF1A1) \u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435\uFF08\u0422\u0438\u043F+\u0411\u0440\u0435\u043D\u0434+\u5173\u952E\u5C5E\u6027\uFF0C\u65E0\u4FC3\u9500\u8BCD\uFF09\uFF1B2) \u9010\u9879\u586B\u6EE1\u7684 \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438\uFF08\u6838\u5FC3\u641C\u7D22\u8BCD\u843D\u5165\u5C5E\u6027\u503C\uFF09\uFF1B3) \u5A92\u4F53\u7D20\u6750\u65B9\u6848\uFF1A\n\n\u4EA7\u54C1\u53C2\u6570\u3001\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u4E0E\u4FC4\u8BED\u5173\u952E\u8BCD\uFF1A"
          },
          {
            id: "wb-kiz-barcode",
            label: "\u6761\u7801\u4E0E \u041A\u0438\u0417 \u6807\u8BC6\u5408\u89C4\u65B9\u6848",
            placeholder: "\u786E\u8BA4\u7C7B\u76EE\u662F\u5426\u9700\u8981 \u041A\u0438\u0417 / \u6761\u7801\uFF0C\u751F\u6210\u8D34\u6807\u4E0E\u5165\u4ED3\u65B9\u6848...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `wildberries-ops` \u6280\u80FD\uFF0C\u786E\u8BA4\u4EE5\u4E0B\u7C7B\u76EE\u5728 WB \u7684 \u041A\u0438\u0417\uFF08\u0427\u0435\u0441\u0442\u043D\u044B\u0439 \u0437\u043D\u0430\u043A\uFF09\u6807\u8BC6\u4E0E\u6761\u7801\u8981\u6C42\uFF0C\u8F93\u51FA\u751F\u6210\u3001\u8D34\u6807\u4E0E\u5165\u4ED3\u5408\u89C4\u65B9\u6848\uFF1A\n\n\u7C7B\u76EE\u4E0E\u5546\u54C1\u4FE1\u606F\uFF1A"
          }
        ]
      },
      {
        id: "wb-ops",
        label: "\u8D39\u7387\u6D4B\u7B97\u4E0E\u5E7F\u544A\u8FD0\u8425",
        icon: "\u{1F4C8}",
        placeholder: "\u6D4B\u7B97 \u041A\u0413\u0422/\u041C\u0413\u0422 \u7269\u6D41\u8D39\u7387\u4E0E\u5230\u624B\u6BDB\u5229\uFF0C\u6216\u8BCA\u65AD \u0410\u0432\u0442\u043E\u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435/\u041F\u043E\u0438\u0441\u043A \u7684 \u0414\u0420\u0420...",
        chips: [
          {
            id: "wb-costing",
            label: "\u041A\u0413\u0422/\u041C\u0413\u0422 \u8D39\u7387\u4E0E\u5230\u624B\u6BDB\u5229\u6D4B\u7B97",
            placeholder: "\u8F93\u5165\u4F9B\u8D27\u4EF7\u3001\u4F53\u79EF\u91CD\u4E0E\u4ED3\u50A8\u65F6\u957F\uFF0C\u6D4B\u7B97 FBW/FBS \u5230\u624B\u6BDB\u5229...",
            starterPrompt: "\u8BF7\u8C03\u7528 `wildberries-ops` \u6280\u80FD\uFF0C\u6839\u636E\u4EE5\u4E0B\u4F9B\u8D27\u4EF7\u4E0E\u7269\u6D41\u53C2\u6570\uFF0C\u6309 \u041A\u0413\u0422/\u041C\u0413\u0422 \u8D39\u7387\u3001\u043F\u0440\u0438\u0451\u043C\u043A\u0430\u3001\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u4E0E\u7C7B\u76EE\u4F63\u91D1\u6D4B\u7B97 FBW / FBS \u5230\u624B\u6BDB\u5229\uFF0C\u5E76\u7ED9\u51FA\u6A21\u5F0F\u53D6\u820D\u5EFA\u8BAE\uFF1A\n\n\u4F9B\u8D27\u4EF7\u4E0E\u7269\u6D41\u53C2\u6570\uFF1A"
          },
          {
            id: "wb-ads-drr",
            label: "\u0420\u0435\u043A\u043B\u0430\u043C\u0430\uFF08\u0410\u0432\u0442\u043E\u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435/\u041F\u043E\u0438\u0441\u043A\uFF09\u0414\u0420\u0420 \u8BCA\u65AD",
            placeholder: "\u8F93\u5165 \u043F\u043E\u043A\u0430\u0437\u044B / CTR / CR \u4E0E\u82B1\u8D39\uFF0C\u5B9A\u4F4D\u9AD8\u82B1\u8D39\u96F6\u8F6C\u5316\u8BCD\u5E76\u8C03\u6574\u7ADE\u4EF7...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `wildberries-ops` \u6280\u80FD\uFF0C\u8BCA\u65AD\u4EE5\u4E0B WB \u0420\u0435\u043A\u043B\u0430\u043C\u0430\uFF08\u0410\u0432\u0442\u043E\u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 / \u041F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0432 \u043F\u043E\u0438\u0441\u043A\u0435 / \u0421\u0442\u0430\u0432\u043A\u0438\uFF09\u6F0F\u6597\uFF0C\u8BA1\u7B97 \u0414\u0420\u0420\u3001\u8BC6\u522B\u9AD8\u82B1\u8D39\u96F6\u8F6C\u5316\u8BCD\u5E76\u7ED9\u51FA\u7ADE\u4EF7\u4E0E\u5173\u952E\u8BCD\u8C03\u6574\u5EFA\u8BAE\uFF1A\n\n\u5E7F\u544A\u6570\u636E\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 9,
    hidden: false
  },
  {
    id: "xianyu",
    name: "\u95F2\u9C7C\u9009\u54C1\u9501\u5355",
    shortName: "\u95F2\u9C7C\u9009\u54C1",
    heroTitle: "\u95F2\u9C7C AI\uFF0C7\xD724 \u667A\u80FD\u76EF\u76D8\u6361\u6F0F\u3001\u9A8C\u54C1\u6392\u96F7\u4E0E\u534A\u81EA\u52A8\u9501\u5355 Agent",
    tagline: "\u76F4\u8FDE\u672C\u673A\u95F2\u9C7C\u9009\u54C1\u9501\u5355\u6269\u5C55\uFF08xianyu-mcp\uFF09\uFF1A\u5B9E\u65F6\u641C\u6700\u65B0\u597D\u7269\u3001\u62C9\u8BE6\u60C5\u6B63\u6587\u7504\u522B\u8D29\u5B50\u4E0E\u6697\u75C5\u3001\u81EA\u52A8\u9884\u68C0\u5728\u552E\u5E76\u63A8\u8FDB\u81F3\u786E\u8BA4\u8BA2\u5355\u9875\u7B49\u4F60\u70B9\u51FB",
    skillName: "xianyu-ops",
    iconBg: "linear-gradient(135deg, #F7B500 0%, #FF7A00 100%)",
    iconGlyph: "\u95F2",
    mascotEmoji: "\u{1F41F}",
    mascotTitle: "\u95F2\u9C7C\u8D44\u6DF1\u4E70\u624B",
    connectionLabel: "\u8FDE\u63A5\u672C\u5730\u95F2\u9C7C\u9009\u54C1 MCP",
    connectionUrlLabel: "\u672C\u5730\u6865\u63A5\u7AEF\u53E3\uFF08\u9ED8\u8BA4 19527\uFF09",
    connectionUrlPlaceholder: "19527",
    connectionTokenLabel: "\u672C\u5730\u6865\u63A5\u5171\u4EAB\u4EE4\u724C\uFF08\u53EF\u9009\uFF09",
    connectionTokenPlaceholder: "\u9ED8\u8BA4\u7559\u7A7A\u514D\u5BC6\u672C\u673A\u56DE\u73AF\u76F4\u8FDE",
    mcp: {
      serverId: "xianyu-mcp",
      name: "\u95F2\u9C7C\u9009\u54C1\u9501\u5355\u672C\u5730 MCP",
      url: "/api/mcp",
      transport: "stdio",
      authType: "none",
      authUrl: "/api/oauth/authorize",
      toolsPreview: ["xianyu_status", "xianyu_search_items", "xianyu_get_item_detail", "xianyu_upsert_task", "xianyu_lock_item"]
    },
    categories: [
      {
        id: "xianyu-hunt",
        label: "\u5B9E\u65F6\u6DD8\u8D27\u4E0E AI \u6DF1\u5EA6\u6392\u96F7",
        icon: "\u{1F50D}",
        placeholder: "\u8F93\u5165\u60F3\u6DD8\u7684\u5546\u54C1\u578B\u53F7\u4E0E\u9884\u7B97\u533A\u95F4\uFF0C\u5B9E\u65F6\u641C\u7D22\u6700\u65B0\u53D1\u5E03\u5E76\u62C9\u8BE6\u60C5\u7504\u522B\u4E2A\u4EBA\u95F2\u7F6E vs \u8D29\u5B50\u6697\u75C5...",
        chips: [
          {
            id: "xianyu-live-audit",
            label: "\u5B9E\u65F6\u641C\u6700\u65B0\u597D\u7269 + \u9010\u5355\u62C9\u8BE6\u60C5\u6392\u96F7\u6BD4\u4EF7",
            placeholder: "\u8F93\u5165\u76EE\u6807\u5546\u54C1\u4E0E\u9884\u7B97\uFF08\u5982\uFF1AMac mini M4 16G \u56FD\u884C\uFF0C\u9884\u7B97 2800-3400\uFF09...",
            starterPrompt: "\u8BF7\u8C03\u7528 `xianyu-ops` \u6280\u80FD\u4E0E `xianyu-mcp` \u5DE5\u5177\uFF1A1) \u6309\u6700\u65B0\u53D1\u5E03\u5B9E\u65F6\u641C\u7D22\u4EE5\u4E0B\u5546\u54C1\u5E76\u81EA\u52A8\u6392\u9664\u6C42\u8D2D/\u56DE\u6536/\u51FA\u79DF/\u6709\u9501/\u6269\u5BB9\uFF1B2) \u5BF9\u6027\u4EF7\u6BD4\u6700\u9AD8\u7684\u524D 4 \u4EF6\u5019\u9009\u8C03\u7528 `xianyu_get_item_detail` \u6838\u67E5\u5728\u552E\u72B6\u6001\u3001\u8FD0\u8D39\u4E0E\u5B8C\u6574\u63CF\u8FF0\uFF0C\u8BC6\u522B\u4E2A\u4EBA\u4E00\u624B\u81EA\u7528 vs \u5546\u5BB6\u5F15\u6D41\u8D34\u53CA\u6697\u75C5\u98CE\u9669\uFF1B3) \u8F93\u51FA\u542B\u90AE\u5230\u624B\u603B\u4EF7\u4E0E\u63A8\u8350\u6392\u5E8F\u8868\uFF0C\u7B49\u6211\u786E\u8BA4\u540E\u518D\u534A\u81EA\u52A8\u9501\u5355\uFF1A\n\n\u76EE\u6807\u5546\u54C1\u4E0E\u9884\u7B97\uFF1A"
          },
          {
            id: "xianyu-hit-triage",
            label: "\u4E00\u952E\u6E05\u6D17\u672A\u8BFB\u547D\u4E2D\u6C60\u5E76\u63D0\u70BC\u6F0F\u4EF7\u7CBE\u9009",
            placeholder: "\u81EA\u52A8\u67E5\u9A8C\u6269\u5C55\u65B0\u547D\u4E2D\u7684\u672A\u8BFB\u5546\u54C1\uFF0C\u5254\u9664\u5DF2\u4E0B\u67B6\u4E0E\u5F15\u6D41\u5E9F\u54C1\uFF0C\u63D0\u70BC\u503C\u5F97\u9501\u5355\u7684\u76EE\u6807...",
            starterPrompt: '\u8BF7\u4F7F\u7528 `xianyu-ops` \u6280\u80FD\uFF1A\u8C03\u7528 `xianyu_list_hits(status="new")` \u8BFB\u53D6\u5F53\u524D\u6240\u6709\u672A\u8BFB\u547D\u4E2D\uFF0C\u9010\u4EF6\u8C03\u7528 `xianyu_get_item_detail` \u6838\u9A8C\u5728\u552E\u72B6\u6001\u4E0E\u6B63\u6587\u98CE\u9669\uFF0C\u5C06\u5DF2\u552E\u51FA\u3001\u5F15\u6D41\u8D34\u6216\u786C\u4F24\u673A\u901A\u8FC7 `xianyu_update_hits(status="ignored")` \u81EA\u52A8\u5F52\u6863\u6E05\u7406\uFF0C\u5E76\u5411\u6211\u6C47\u62A5\u6700\u503C\u5F97\u51FA\u624B\u9501\u5355\u7684\u7CBE\u9009\u597D\u7269\uFF1A'
          }
        ]
      },
      {
        id: "xianyu-monitor-lock",
        label: "24h \u76EF\u76D8\u9632\u6F0F\u4E0E\u534A\u81EA\u52A8\u9501\u5355",
        icon: "\u{1F512}",
        placeholder: "\u62C6\u89E3\u9009\u54C1\u76EE\u6807\u6279\u91CF\u5EFA\u7ACB\u5173\u952E\u8BCD\u76EF\u76D8\u89C4\u5219\uFF0C\u6216\u5BF9\u770B\u4E2D\u7684\u5546\u54C1\u53D1\u8D77\u5B89\u5168\u534A\u81EA\u52A8\u9501\u5355...",
        chips: [
          {
            id: "xianyu-setup-tasks",
            label: "\u81EA\u7136\u8BED\u8A00\u62C6\u89E3\u5E76\u5F00\u542F 7\xD724 \u9632\u6F0F\u76EF\u76D8",
            placeholder: "\u63CF\u8FF0\u4F60\u60F3\u8E72\u5B88\u7684\u5546\u54C1\u578B\u53F7\u3001\u5FC3\u7406\u597D\u4EF7\u4E0E\u5FC5\u542B\u89C4\u683C\u8BCD\uFF08\u5982\uFF1A\u7D22\u5C3C A7C2 \u5355\u673A\u8EAB \u226410500\uFF09...",
            starterPrompt: '\u8BF7\u8C03\u7528 `xianyu-ops` \u6280\u80FD\uFF0C\u5E2E\u6211\u5C06\u4EE5\u4E0B\u6361\u6F0F\u76EE\u6807\u62C6\u89E3\u4E3A\u7CBE\u51C6\u7684\u95F2\u9C7C\u76D1\u63A7\u4EFB\u52A1\uFF08\u81EA\u52A8\u8865\u9F50 `priceMin`/`priceMax`\u3001`includeWords` \u5FC5\u542B\u89C4\u683C\u8BCD\u4E0E\u9632\u5751 `excludeWords`\uFF09\uFF0C\u8C03\u7528 `xianyu_upsert_task` \u4FDD\u5B58\u540E\u7ACB\u5373\u6267\u884C\u4E00\u6B21 `xianyu_control_monitor(action="poll_now", matchExisting=true)` \u626B\u63CF\u73B0\u5B58\u597D\u7269\u5E76\u5F00\u542F\u6301\u7EED\u76D1\u63A7\uFF1A\n\n\u8E72\u5B88\u76EE\u6807\u4E0E\u5FC3\u7406\u4EF7\u4F4D\uFF1A'
          },
          {
            id: "xianyu-safe-lock",
            label: "\u9884\u68C0\u5728\u552E\u5E76\u6267\u884C\u5B89\u5168\u534A\u81EA\u52A8\u9501\u5355",
            placeholder: "\u7C98\u8D34\u770B\u4E2D\u7684\u95F2\u9C7C\u5546\u54C1\u94FE\u63A5\u6216 itemId\uFF0C\u5148\u9A8C\u5728\u552E\u518D\u81EA\u52A8\u63A8\u8FDB\u81F3\u786E\u8BA4\u8BA2\u5355\u9875\u7B49\u4F60\u70B9\u51FB...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `xianyu-ops` \u6280\u80FD\uFF1A\u5148\u8C03\u7528 `xianyu_get_item_detail` \u4E3A\u6211\u6838\u9A8C\u8BE5\u5546\u54C1\u662F\u5426\u4ECD\u5728\u552E\u3001\u662F\u5426\u652F\u6301\u7F51\u9875\u8D2D\u4E70\u4EE5\u53CA\u6709\u65E0\u9690\u85CF\u90AE\u8D39\u6216\u786C\u4F24\u58F0\u660E\uFF1B\u786E\u8BA4\u53EF\u4E70\u540E\u8C03\u7528 `xianyu_lock_item(autoSubmit=false)` \u63A8\u8FDB\u5230\u786E\u8BA4\u8BA2\u5355\u9875\u6838\u5BF9\u9ED8\u8BA4\u5730\u5740\u5E76\u9AD8\u4EAE\u300C\u786E\u8BA4\u8D2D\u4E70\u300D\u6309\u94AE\u4EA4\u7531\u6211\u786E\u8BA4\uFF1A\n\n\u5546\u54C1\u94FE\u63A5\u6216 ID\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 10,
    hidden: false
  }
];
const NEW_APP_SENTINEL = "__new__";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "work-apps",
  __ssrInlineRender: true,
  setup(__props) {
    const VALID_TABS = /* @__PURE__ */ new Set(["overview", "prompts", "connection", "packages"]);
    const route = useRoute();
    const router = useRouter();
    const toast = useToast();
    const errorMsg = ref("");
    const searchQuery = ref("");
    const statusFilter = ref("all");
    const list = ref([]);
    const availableSkills = ref(
      defaultHoxiSkills.map((s) => ({ slug: s.slug, name: s.name, categoryLabel: s.categoryLabel }))
    );
    const listOrderDirty = ref(false);
    const savingBulk = ref(false);
    const savingSingle = ref(false);
    const isEditingNew = ref(false);
    const editingItem = ref(null);
    const cleanSnapshotJson = ref("");
    const activeTab = ref("overview");
    const isDeleteModalOpen = ref(false);
    const pendingDeleteItem = ref(null);
    const deletingApp = ref(false);
    const statusFilterOptions = [
      { label: "\u5168\u90E8\u72B6\u6001", value: "all" },
      { label: "\u5C55\u793A\u4E2D", value: "visible" },
      { label: "\u5DF2\u9690\u85CF", value: "hidden" },
      { label: "\u5DF2\u6302\u8F7D\u79BB\u7EBF\u5305", value: "packaged" }
    ];
    const isDirty = computed(() => {
      if (!editingItem.value) return false;
      return JSON.stringify(editingItem.value) !== cleanSnapshotJson.value;
    });
    const detailTabs = computed(() => {
      const item = editingItem.value;
      const chipCount = ((item == null ? void 0 : item.categories) || []).reduce((n, c) => {
        var _a;
        return n + (((_a = c.chips) == null ? void 0 : _a.length) || 0);
      }, 0);
      return [
        { key: "overview", label: "\u57FA\u7840\u4E0E\u54C1\u724C\u5C55\u793A", icon: "ph:identification-card" },
        { key: "prompts", label: "\u573A\u666F\u4E0E\u5FEB\u6377\u80F6\u56CA", icon: "ph:sparkle", badge: chipCount },
        { key: "connection", label: "\u8FDE\u63A5\u3001MCP \u4E0E\u9274\u6743", icon: "ph:plugs-connected" },
        {
          key: "packages",
          label: "\u7248\u672C\u4E0E\u5305\u7BA1\u7406",
          icon: "ph:package",
          badge: (item == null ? void 0 : item.activeVersion) ? `v${item.activeVersion}` : (item == null ? void 0 : item.releaseCount) || 0
        }
      ];
    });
    const appSwitcherOptions = computed(
      () => list.value.map((a) => ({ label: `${a.name} (${a.id})`, value: a.id }))
    );
    const filteredList = computed(() => {
      const q = searchQuery.value.trim().toLowerCase();
      return list.value.filter((item) => {
        var _a;
        if (statusFilter.value === "visible" && item.hidden) return false;
        if (statusFilter.value === "hidden" && !item.hidden) return false;
        if (statusFilter.value === "packaged" && !item.package) return false;
        if (!q) return true;
        return item.name.toLowerCase().includes(q) || item.id.toLowerCase().includes(q) || item.shortName.toLowerCase().includes(q) || item.skillName.toLowerCase().includes(q) || (((_a = item.mcp) == null ? void 0 : _a.serverId) || "").toLowerCase().includes(q);
      });
    });
    const syncDetailStateFromRoute = () => {
      var _a, _b;
      const rawApp = String(route.query.app || "").trim();
      const rawTab = String(route.query.tab || "overview").trim();
      const nextTab = VALID_TABS.has(rawTab) ? rawTab : "overview";
      if (!rawApp) {
        editingItem.value = null;
        isEditingNew.value = false;
        cleanSnapshotJson.value = "";
        return;
      }
      if (rawApp === NEW_APP_SENTINEL) {
        if (!isEditingNew.value || !editingItem.value) {
          const fresh = createDefaultWorkAppItem((list.value.length + 1) * 10);
          if ((_a = availableSkills.value[0]) == null ? void 0 : _a.slug) {
            fresh.skillName = availableSkills.value[0].slug;
            fresh.skills = [fresh.skillName];
          }
          isEditingNew.value = true;
          editingItem.value = fresh;
          cleanSnapshotJson.value = JSON.stringify(fresh);
        }
        activeTab.value = nextTab === "packages" ? "overview" : nextTab;
        return;
      }
      const found = list.value.find((item) => item.id === rawApp);
      if (!found) return;
      if (((_b = editingItem.value) == null ? void 0 : _b.id) !== found.id || isEditingNew.value) {
        const cloned = JSON.parse(JSON.stringify(found));
        if (!Array.isArray(cloned.mcp.scopes)) cloned.mcp.scopes = [];
        if (!Array.isArray(cloned.mcp.toolsPreview)) cloned.mcp.toolsPreview = [];
        if (!Array.isArray(cloned.skills)) cloned.skills = [cloned.skillName].filter(Boolean);
        isEditingNew.value = false;
        editingItem.value = cloned;
        cleanSnapshotJson.value = JSON.stringify(cloned);
      }
      activeTab.value = nextTab;
    };
    const reloadListQuietly = async () => {
      try {
        const appsRes = await $fetch("/api/admin/hoxi/work-apps");
        if (Array.isArray(appsRes)) {
          list.value = appsRes;
          if (editingItem.value && !isEditingNew.value) {
            const latest = appsRes.find((a) => {
              var _a;
              return a.id === ((_a = editingItem.value) == null ? void 0 : _a.id);
            });
            if (latest) {
              editingItem.value.activeVersion = latest.activeVersion;
              editingItem.value.package = latest.package;
              editingItem.value.releaseCount = latest.releaseCount;
              cleanSnapshotJson.value = JSON.stringify(editingItem.value);
            }
          }
        }
      } catch {
      }
    };
    watch(
      () => [route.query.app, route.query.tab],
      () => {
        syncDetailStateFromRoute();
      }
    );
    const openAppSubpage = (appId, tab = "overview") => {
      void router.push({ query: { ...route.query, app: appId, tab } });
    };
    const openNewAppSubpage = () => {
      void router.push({ query: { ...route.query, app: NEW_APP_SENTINEL, tab: "overview" } });
    };
    const switchTab = (tab) => {
      activeTab.value = tab;
      void router.replace({ query: { ...route.query, tab } });
    };
    const onQuickSwitchApp = (targetId) => {
      var _a;
      if (!targetId || targetId === ((_a = editingItem.value) == null ? void 0 : _a.id)) return;
      openAppSubpage(targetId, activeTab.value);
    };
    const backToList = () => {
      const nextQuery = { ...route.query };
      delete nextQuery.app;
      delete nextQuery.tab;
      editingItem.value = null;
      isEditingNew.value = false;
      void router.push({ query: nextQuery });
    };
    const saveCurrentApp = async () => {
      var _a;
      const item = editingItem.value;
      if (!item) return;
      const targetId = String(item.id || "").trim().toLowerCase();
      if (!targetId) {
        toast.add({ title: "\u8BF7\u5148\u586B\u5199\u5408\u6CD5\u7684\u5E94\u7528 ID (\u5982 shopify)", color: "warning" });
        return;
      }
      savingSingle.value = true;
      try {
        const res = await $fetch(
          `/api/admin/hoxi/work-apps/${encodeURIComponent(targetId)}`,
          {
            method: "PUT",
            body: { ...item, id: targetId }
          }
        );
        const saved = res.item;
        const idx = list.value.findIndex((i) => i.id === saved.id);
        if (idx !== -1) list.value[idx] = saved;
        else list.value.push(saved);
        const wasNew = isEditingNew.value;
        isEditingNew.value = false;
        editingItem.value = JSON.parse(JSON.stringify(saved));
        cleanSnapshotJson.value = JSON.stringify(editingItem.value);
        if (wasNew) {
          await router.replace({ query: { ...route.query, app: saved.id, tab: activeTab.value } });
        }
        toast.add({ title: `\u300C${saved.name}\u300D\u5DF2\u4FDD\u5B58\u843D\u5E93\uFF0C\u684C\u9762\u7AEF\u5237\u65B0\u5373\u523B\u751F\u6548`, color: "success" });
      } catch (err) {
        toast.add({
          title: "\u4FDD\u5B58\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || String(err),
          color: "error"
        });
      } finally {
        savingSingle.value = false;
      }
    };
    const toggleHiddenQuick = async (item) => {
      var _a;
      const nextHidden = !item.hidden;
      item.hidden = nextHidden;
      try {
        await $fetch(`/api/admin/hoxi/work-apps/${encodeURIComponent(item.id)}`, {
          method: "PUT",
          body: item
        });
        toast.add({ title: `${item.name} \u5DF2\u8BBE\u4E3A${nextHidden ? "\u9690\u85CF" : "\u5C55\u793A\u4E2D"}`, color: "success" });
      } catch (err) {
        item.hidden = !nextHidden;
        toast.add({ title: "\u5207\u6362\u72B6\u6001\u5931\u8D25", description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message), color: "error" });
      }
    };
    const moveUp = (index) => {
      if (index <= 0) return;
      const temp = list.value[index];
      list.value[index] = list.value[index - 1];
      list.value[index - 1] = temp;
      list.value.forEach((item, idx) => {
        item.sortOrder = (idx + 1) * 10;
      });
      listOrderDirty.value = true;
    };
    const moveDown = (index) => {
      if (index >= list.value.length - 1) return;
      const temp = list.value[index];
      list.value[index] = list.value[index + 1];
      list.value[index + 1] = temp;
      list.value.forEach((item, idx) => {
        item.sortOrder = (idx + 1) * 10;
      });
      listOrderDirty.value = true;
    };
    const resetToBaseline = () => {
      list.value = JSON.parse(JSON.stringify(hoxiWorkApps));
      listOrderDirty.value = true;
      toast.add({ title: "\u5DF2\u8F7D\u5165\u9ED8\u8BA4\u57FA\u7EBF\uFF0C\u8BF7\u70B9\u51FB\u300C\u4FDD\u5B58\u6392\u5E8F\u4E0E\u72B6\u6001\u300D\u5199\u5165\u6570\u636E\u5E93", color: "info" });
    };
    const saveBulkList = async () => {
      var _a;
      savingBulk.value = true;
      try {
        await $fetch("/api/admin/hoxi/work-apps", {
          method: "POST",
          body: { items: list.value }
        });
        listOrderDirty.value = false;
        await reloadListQuietly();
        toast.add({ title: "\u5E94\u7528\u76EE\u5F55\u6392\u5E8F\u4E0E\u72B6\u6001\u5DF2\u4FDD\u5B58", color: "success" });
      } catch (err) {
        toast.add({
          title: "\u6279\u91CF\u4FDD\u5B58\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || String(err),
          color: "error"
        });
      } finally {
        savingBulk.value = false;
      }
    };
    const confirmDelete = (item) => {
      pendingDeleteItem.value = item;
      isDeleteModalOpen.value = true;
    };
    const executeDelete = async () => {
      var _a;
      const target = pendingDeleteItem.value;
      if (!target) return;
      deletingApp.value = true;
      try {
        await $fetch(`/api/admin/hoxi/work-apps/${encodeURIComponent(target.id)}`, {
          method: "DELETE"
        });
        list.value = list.value.filter((i) => i.id !== target.id);
        isDeleteModalOpen.value = false;
        pendingDeleteItem.value = null;
        toast.add({ title: `\u5DF2\u5220\u9664\u5E94\u7528 ${target.name}`, color: "success" });
      } catch (err) {
        toast.add({
          title: "\u5220\u9664\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || String(err),
          color: "error"
        });
      } finally {
        deletingApp.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAlert = _sfc_main$z;
      const _component_UCard = _sfc_main$q;
      const _component_UButton = _sfc_main$X;
      const _component_UBadge = _sfc_main$R;
      const _component_USelect = _sfc_main$u;
      const _component_UIcon = _sfc_main$10;
      const _component_UInput = _sfc_main$D;
      const _component_UModal = _sfc_main$L;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      if (errorMsg.value) {
        _push(ssrRenderComponent(_component_UAlert, {
          color: "error",
          variant: "subtle",
          title: "\u8BF7\u6C42\u5F02\u5E38",
          description: errorMsg.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (editingItem.value) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_UCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(`<div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4"${_scopeId}><div class="flex items-start sm:items-center gap-3.5 min-w-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "outline",
                size: "sm",
                icon: "ph:arrow-left",
                onClick: backToList
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u8FD4\u56DE\u5217\u8868 `);
                  } else {
                    return [
                      createTextVNode(" \u8FD4\u56DE\u5217\u8868 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold text-white text-sm" style="${ssrRenderStyle({ background: editingItem.value.iconBg || "linear-gradient(135deg, #0D9488 0%, #0EA5E9 100%)" })}"${_scopeId}>${ssrInterpolate(editingItem.value.iconGlyph || ((_a = editingItem.value.shortName) == null ? void 0 : _a.slice(0, 1)) || "A")}</span><div class="min-w-0"${_scopeId}><div class="flex flex-wrap items-center gap-2"${_scopeId}><h2 class="text-base font-bold text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(isEditingNew.value ? "\u65B0\u589E Work \u5E94\u7528" : editingItem.value.name || editingItem.value.id)}</h2>`);
              if (!isEditingNew.value) {
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "neutral",
                  variant: "subtle",
                  size: "xs",
                  class: "font-mono"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(editingItem.value.id)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(editingItem.value.id), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_UBadge, {
                color: editingItem.value.hidden ? "neutral" : "success",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(editingItem.value.hidden ? "\u5DF2\u9690\u85CF" : "\u5C55\u793A\u4E2D")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(editingItem.value.hidden ? "\u5DF2\u9690\u85CF" : "\u5C55\u793A\u4E2D"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (editingItem.value.activeVersion) {
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "info",
                  variant: "subtle",
                  size: "xs",
                  class: "font-mono"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u{1F4E6} v${ssrInterpolate(editingItem.value.activeVersion)}`);
                    } else {
                      return [
                        createTextVNode(" \u{1F4E6} v" + toDisplayString(editingItem.value.activeVersion), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (isDirty.value) {
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "warning",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u6709\u672A\u4FDD\u5B58\u4FEE\u6539 `);
                    } else {
                      return [
                        createTextVNode(" \u6709\u672A\u4FDD\u5B58\u4FEE\u6539 ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400 truncate"${_scopeId}> Work \u5DE5\u4F5C\u53F0\u5E94\u7528\u8BE6\u60C5\u5B50\u9875\u9762 \xB7 \u70B9\u51FB\u53F3\u4FA7\u300C\u4FDD\u5B58\u5E94\u7528\u914D\u7F6E\u300D\u76F4\u63A5\u5199\u5165\u6570\u636E\u5E93\u5E76\u540C\u6B65 \`/api/hoxi/work/apps\` </p></div></div><div class="flex flex-wrap items-center gap-2.5 shrink-0"${_scopeId}>`);
              if (!isEditingNew.value && appSwitcherOptions.value.length > 1) {
                _push2(ssrRenderComponent(_component_USelect, {
                  "model-value": editingItem.value.id,
                  items: appSwitcherOptions.value,
                  size: "sm",
                  class: "w-48",
                  "onUpdate:modelValue": onQuickSwitchApp
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                size: "sm",
                icon: "ph:floppy-disk",
                loading: savingSingle.value,
                onClick: saveCurrentApp
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(isEditingNew.value ? "\u521B\u5EFA\u5E76\u4FDD\u5B58\u5E94\u7528" : "\u4FDD\u5B58\u5E94\u7528\u914D\u7F6E")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(isEditingNew.value ? "\u521B\u5EFA\u5E76\u4FDD\u5B58\u5E94\u7528" : "\u4FDD\u5B58\u5E94\u7528\u914D\u7F6E"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(detailTabs.value, (tab) => {
                _push2(`<button type="button"${ssrIncludeBooleanAttr(tab.key === "packages" && isEditingNew.value) ? " disabled" : ""} class="${ssrRenderClass([
                  activeTab.value === tab.key ? "bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800",
                  "inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                ])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: tab.icon,
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(tab.label)}</span>`);
                if (tab.badge !== void 0) {
                  _push2(`<span class="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-gray-200/70 dark:bg-gray-700 text-gray-700 dark:text-gray-200"${_scopeId}>${ssrInterpolate(tab.badge)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</button>`);
              });
              _push2(`<!--]-->`);
              if (isEditingNew.value) {
                _push2(`<span class="text-[11px] text-gray-400 ml-2"${_scopeId}> \u63D0\u793A\uFF1A\u5148\u4FDD\u5B58\u65B0\u5EFA\u5E94\u7528\u540E\u5373\u53EF\u89E3\u9501\u300C\u7248\u672C\u4E0E\u5305\u7BA1\u7406\u300D\u548C\u300C\u5E73\u53F0 OAuth \u5BC6\u94A5\u6258\u7BA1\u300D </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col lg:flex-row lg:items-center justify-between gap-4" }, [
                  createVNode("div", { class: "flex items-start sm:items-center gap-3.5 min-w-0" }, [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "outline",
                      size: "sm",
                      icon: "ph:arrow-left",
                      onClick: backToList
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u8FD4\u56DE\u5217\u8868 ")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold text-white text-sm",
                      style: { background: editingItem.value.iconBg || "linear-gradient(135deg, #0D9488 0%, #0EA5E9 100%)" }
                    }, toDisplayString(editingItem.value.iconGlyph || ((_b = editingItem.value.shortName) == null ? void 0 : _b.slice(0, 1)) || "A"), 5),
                    createVNode("div", { class: "min-w-0" }, [
                      createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                        createVNode("h2", { class: "text-base font-bold text-gray-900 dark:text-white truncate" }, toDisplayString(isEditingNew.value ? "\u65B0\u589E Work \u5E94\u7528" : editingItem.value.name || editingItem.value.id), 1),
                        !isEditingNew.value ? (openBlock(), createBlock(_component_UBadge, {
                          key: 0,
                          color: "neutral",
                          variant: "subtle",
                          size: "xs",
                          class: "font-mono"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(editingItem.value.id), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UBadge, {
                          color: editingItem.value.hidden ? "neutral" : "success",
                          variant: "subtle",
                          size: "xs"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(editingItem.value.hidden ? "\u5DF2\u9690\u85CF" : "\u5C55\u793A\u4E2D"), 1)
                          ]),
                          _: 1
                        }, 8, ["color"]),
                        editingItem.value.activeVersion ? (openBlock(), createBlock(_component_UBadge, {
                          key: 1,
                          color: "info",
                          variant: "subtle",
                          size: "xs",
                          class: "font-mono"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u{1F4E6} v" + toDisplayString(editingItem.value.activeVersion), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        isDirty.value ? (openBlock(), createBlock(_component_UBadge, {
                          key: 2,
                          color: "warning",
                          variant: "subtle",
                          size: "xs"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u6709\u672A\u4FDD\u5B58\u4FEE\u6539 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("p", { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400 truncate" }, " Work \u5DE5\u4F5C\u53F0\u5E94\u7528\u8BE6\u60C5\u5B50\u9875\u9762 \xB7 \u70B9\u51FB\u53F3\u4FA7\u300C\u4FDD\u5B58\u5E94\u7528\u914D\u7F6E\u300D\u76F4\u63A5\u5199\u5165\u6570\u636E\u5E93\u5E76\u540C\u6B65 `/api/hoxi/work/apps` ")
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-wrap items-center gap-2.5 shrink-0" }, [
                    !isEditingNew.value && appSwitcherOptions.value.length > 1 ? (openBlock(), createBlock(_component_USelect, {
                      key: 0,
                      "model-value": editingItem.value.id,
                      items: appSwitcherOptions.value,
                      size: "sm",
                      class: "w-48",
                      "onUpdate:modelValue": onQuickSwitchApp
                    }, null, 8, ["model-value", "items"])) : createCommentVNode("", true),
                    createVNode(_component_UButton, {
                      color: "primary",
                      size: "sm",
                      icon: "ph:floppy-disk",
                      loading: savingSingle.value,
                      onClick: saveCurrentApp
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(isEditingNew.value ? "\u521B\u5EFA\u5E76\u4FDD\u5B58\u5E94\u7528" : "\u4FDD\u5B58\u5E94\u7528\u914D\u7F6E"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ]),
                createVNode("div", { class: "mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(detailTabs.value, (tab) => {
                    return openBlock(), createBlock("button", {
                      key: tab.key,
                      type: "button",
                      disabled: tab.key === "packages" && isEditingNew.value,
                      class: [
                        "inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                        activeTab.value === tab.key ? "bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      ],
                      onClick: ($event) => switchTab(tab.key)
                    }, [
                      createVNode(_component_UIcon, {
                        name: tab.icon,
                        class: "w-4 h-4"
                      }, null, 8, ["name"]),
                      createVNode("span", null, toDisplayString(tab.label), 1),
                      tab.badge !== void 0 ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-gray-200/70 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                      }, toDisplayString(tab.badge), 1)) : createCommentVNode("", true)
                    ], 10, ["disabled", "onClick"]);
                  }), 128)),
                  isEditingNew.value ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-[11px] text-gray-400 ml-2"
                  }, " \u63D0\u793A\uFF1A\u5148\u4FDD\u5B58\u65B0\u5EFA\u5E94\u7528\u540E\u5373\u53EF\u89E3\u9501\u300C\u7248\u672C\u4E0E\u5305\u7BA1\u7406\u300D\u548C\u300C\u5E73\u53F0 OAuth \u5BC6\u94A5\u6258\u7BA1\u300D ")) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        if (activeTab.value === "overview") {
          _push(ssrRenderComponent(_sfc_main$3, {
            app: editingItem.value,
            "is-new": isEditingNew.value,
            "available-skills": availableSkills.value
          }, null, _parent));
        } else if (activeTab.value === "prompts") {
          _push(ssrRenderComponent(_sfc_main$1, { app: editingItem.value }, null, _parent));
        } else if (activeTab.value === "connection") {
          _push(ssrRenderComponent(_sfc_main$4, {
            app: editingItem.value,
            "is-new": isEditingNew.value
          }, null, _parent));
        } else if (activeTab.value === "packages" && !isEditingNew.value) {
          _push(ssrRenderComponent(_sfc_main$2, {
            app: editingItem.value,
            onUpdated: reloadListQuietly
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_UCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h2 class="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:squares-four",
                class: "w-5 h-5 text-sky-500"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Work \u5DE5\u4F5C\u53F0\u5E94\u7528\u7BA1\u7406</span></h2><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> \u7BA1\u7406 Hoxi \u684C\u9762\u7AEF\u300C\u4E00\u4EBA\u516C\u53F8 Work \u6A21\u5F0F\u300D\u5E94\u7528\u76EE\u5F55\u3001\u573A\u666F\u6307\u4EE4\u80F6\u56CA\u3001MCP/OAuth \u9274\u6743\u4E0E \`hoxi.work-package/v1\` \u79BB\u7EBF\u5305\u70ED\u66F4\u65B0\uFF08\u63A5\u53E3\uFF1A <code class="font-mono text-xs"${_scopeId}>/api/hoxi/work/apps</code>\uFF09\u3002 </p></div><div class="flex flex-wrap items-center gap-2.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "outline",
                icon: "ph:arrow-counter-clockwise",
                size: "sm",
                onClick: resetToBaseline
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u6062\u590D\u9ED8\u8BA4\u57FA\u7EBF `);
                  } else {
                    return [
                      createTextVNode(" \u6062\u590D\u9ED8\u8BA4\u57FA\u7EBF ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (listOrderDirty.value) {
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "primary",
                  variant: "soft",
                  loading: savingBulk.value,
                  icon: "ph:floppy-disk",
                  size: "sm",
                  onClick: saveBulkList
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u4FDD\u5B58\u6392\u5E8F\u4E0E\u72B6\u6001 `);
                    } else {
                      return [
                        createTextVNode(" \u4FDD\u5B58\u6392\u5E8F\u4E0E\u72B6\u6001 ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                icon: "ph:plus",
                size: "sm",
                onClick: openNewAppSubpage
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u65B0\u589E\u5E94\u7528 `);
                  } else {
                    return [
                      createTextVNode(" \u65B0\u589E\u5E94\u7528 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, [
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:squares-four",
                        class: "w-5 h-5 text-sky-500"
                      }),
                      createVNode("span", null, "Work \u5DE5\u4F5C\u53F0\u5E94\u7528\u7BA1\u7406")
                    ]),
                    createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, [
                      createTextVNode(" \u7BA1\u7406 Hoxi \u684C\u9762\u7AEF\u300C\u4E00\u4EBA\u516C\u53F8 Work \u6A21\u5F0F\u300D\u5E94\u7528\u76EE\u5F55\u3001\u573A\u666F\u6307\u4EE4\u80F6\u56CA\u3001MCP/OAuth \u9274\u6743\u4E0E `hoxi.work-package/v1` \u79BB\u7EBF\u5305\u70ED\u66F4\u65B0\uFF08\u63A5\u53E3\uFF1A "),
                      createVNode("code", { class: "font-mono text-xs" }, "/api/hoxi/work/apps"),
                      createTextVNode("\uFF09\u3002 ")
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-wrap items-center gap-2.5" }, [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "outline",
                      icon: "ph:arrow-counter-clockwise",
                      size: "sm",
                      onClick: resetToBaseline
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u6062\u590D\u9ED8\u8BA4\u57FA\u7EBF ")
                      ]),
                      _: 1
                    }),
                    listOrderDirty.value ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      color: "primary",
                      variant: "soft",
                      loading: savingBulk.value,
                      icon: "ph:floppy-disk",
                      size: "sm",
                      onClick: saveBulkList
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u4FDD\u5B58\u6392\u5E8F\u4E0E\u72B6\u6001 ")
                      ]),
                      _: 1
                    }, 8, ["loading"])) : createCommentVNode("", true),
                    createVNode(_component_UButton, {
                      color: "primary",
                      icon: "ph:plus",
                      size: "sm",
                      onClick: openNewAppSubpage
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u65B0\u589E\u5E94\u7528 ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex flex-wrap items-center gap-2.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: searchQuery.value,
                "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                icon: "ph:magnifying-glass",
                placeholder: "\u6309\u5E94\u7528\u540D\u3001ID\u3001\u5173\u8054\u6280\u80FD\u6216 MCP \u641C\u7D22...",
                size: "sm",
                class: "w-72"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_USelect, {
                modelValue: statusFilter.value,
                "onUpdate:modelValue": ($event) => statusFilter.value = $event,
                items: statusFilterOptions,
                size: "sm",
                class: "w-36"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="text-xs text-gray-500"${_scopeId}> \u5171 ${ssrInterpolate(list.value.length)} \u4E2A\u5E94\u7528 \xB7 \u5F53\u524D\u663E\u793A ${ssrInterpolate(filteredList.value.length)} \u4E2A </div></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><thead class="bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium"${_scopeId}><tr${_scopeId}><th class="w-16 px-3 py-3 text-center"${_scopeId}>\u6392\u5E8F</th><th class="px-3 py-3"${_scopeId}>\u5E94\u7528\u540D\u79F0 / ID</th><th class="px-3 py-3"${_scopeId}>\u5173\u8054\u6280\u80FD / MCP \u9274\u6743</th><th class="px-3 py-3"${_scopeId}>\u5E94\u7528\u5305\u7248\u672C</th><th class="px-3 py-3"${_scopeId}>\u573A\u666F\u4E0E\u80F6\u56CA</th><th class="px-3 py-3 text-center"${_scopeId}>\u72B6\u6001</th><th class="w-40 px-3 py-3 text-right"${_scopeId}>\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><!--[-->`);
              ssrRenderList(filteredList.value, (item, index) => {
                var _a, _b, _c, _d, _e;
                _push2(`<tr class="${ssrRenderClass([{ "opacity-55": item.hidden }, "hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors cursor-pointer"])}"${_scopeId}><td class="px-3 py-3 text-center font-mono"${_scopeId}><div class="flex items-center justify-center gap-1"${_scopeId}><button type="button" class="p-0.5 hover:text-sky-600 disabled:opacity-30"${ssrIncludeBooleanAttr(index === 0 || Boolean(searchQuery.value) || statusFilter.value !== "all") ? " disabled" : ""}${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-up",
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
                _push2(`</button><span class="text-gray-400 text-[11px]"${_scopeId}>${ssrInterpolate((_a = item.sortOrder) != null ? _a : (index + 1) * 10)}</span><button type="button" class="p-0.5 hover:text-sky-600 disabled:opacity-30"${ssrIncludeBooleanAttr(index === filteredList.value.length - 1 || Boolean(searchQuery.value) || statusFilter.value !== "all") ? " disabled" : ""}${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-down",
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
                _push2(`</button></div></td><td class="px-3 py-3"${_scopeId}><div class="flex items-center gap-2.5"${_scopeId}><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-white text-xs" style="${ssrRenderStyle({ background: item.iconBg || "linear-gradient(135deg, #0D9488 0%, #0EA5E9 100%)" })}"${_scopeId}>${ssrInterpolate(item.iconGlyph || ((_b = item.shortName) == null ? void 0 : _b.slice(0, 1)) || "A")}</span><div${_scopeId}><div class="font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId}><span${_scopeId}>${ssrInterpolate(item.name)}</span>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "neutral",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.shortName)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.shortName), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="text-[11px] text-gray-400 font-mono"${_scopeId}>${ssrInterpolate(item.id)} \xB7 ${ssrInterpolate(item.mascotEmoji)} ${ssrInterpolate(item.mascotTitle)}</div></div></div></td><td class="px-3 py-3"${_scopeId}><div class="flex flex-wrap items-center gap-1.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "info",
                  variant: "subtle",
                  size: "xs",
                  class: "font-mono"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.skillName)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.skillName), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "success",
                  variant: "subtle",
                  size: "xs",
                  class: "font-mono"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a2, _b2;
                    if (_push3) {
                      _push3(`${ssrInterpolate(((_a2 = item.mcp) == null ? void 0 : _a2.authType) || "hoxi-account")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(((_b2 = item.mcp) == null ? void 0 : _b2.authType) || "hoxi-account"), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="mt-1 truncate max-w-[200px] font-mono text-[11px] text-gray-400"${ssrRenderAttr("title", (_c = item.mcp) == null ? void 0 : _c.url)}${_scopeId}>${ssrInterpolate((_d = item.mcp) == null ? void 0 : _d.serverId)} \xB7 ${ssrInterpolate(((_e = item.mcp) == null ? void 0 : _e.url) || "/api/mcp")}</div></td><td class="px-3 py-3 whitespace-nowrap"${_scopeId}>`);
                if (item.package) {
                  _push2(ssrRenderComponent(_component_UBadge, {
                    color: "info",
                    variant: "subtle",
                    size: "xs",
                    class: "font-mono"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` v${ssrInterpolate(item.package.version)}`);
                      } else {
                        return [
                          createTextVNode(" v" + toDisplayString(item.package.version), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<span class="text-[11px] text-gray-400 hover:text-sky-600"${_scopeId}> + \u53D1\u5E03\u79BB\u7EBF\u5305 </span>`);
                }
                if (item.releaseCount) {
                  _push2(`<div class="mt-0.5 text-[10px] text-gray-400"${_scopeId}> \u5171 ${ssrInterpolate(item.releaseCount)} \u4E2A\u7248\u672C </div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</td><td class="px-3 py-3"${_scopeId}><div class="flex flex-wrap gap-1"${_scopeId}><!--[-->`);
                ssrRenderList(item.categories, (cat) => {
                  _push2(ssrRenderComponent(_component_UBadge, {
                    key: cat.id,
                    color: "neutral",
                    variant: "subtle",
                    size: "xs"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      var _a2, _b2;
                      if (_push3) {
                        _push3(`${ssrInterpolate(cat.icon)} ${ssrInterpolate(cat.label)} (${ssrInterpolate(((_a2 = cat.chips) == null ? void 0 : _a2.length) || 0)}) `);
                      } else {
                        return [
                          createTextVNode(toDisplayString(cat.icon) + " " + toDisplayString(cat.label) + " (" + toDisplayString(((_b2 = cat.chips) == null ? void 0 : _b2.length) || 0) + ") ", 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></div></td><td class="px-3 py-3 text-center whitespace-nowrap"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: item.hidden ? "neutral" : "success",
                  variant: "subtle",
                  size: "xs",
                  onClick: ($event) => toggleHiddenQuick(item)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.hidden ? "\u5DF2\u9690\u85CF" : "\u5C55\u793A\u4E2D")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.hidden ? "\u5DF2\u9690\u85CF" : "\u5C55\u793A\u4E2D"), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</td><td class="px-3 py-3 text-right whitespace-nowrap"${_scopeId}><div class="flex items-center justify-end gap-1"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "primary",
                  variant: "ghost",
                  size: "xs",
                  icon: "ph:sliders-horizontal",
                  onClick: ($event) => openAppSubpage(item.id, "overview")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u7BA1\u7406 `);
                    } else {
                      return [
                        createTextVNode(" \u7BA1\u7406 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  size: "xs",
                  icon: "ph:package",
                  title: "\u7248\u672C\u4E0E\u5305\u7BA1\u7406",
                  onClick: ($event) => openAppSubpage(item.id, "packages")
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "error",
                  variant: "ghost",
                  size: "xs",
                  icon: "ph:trash",
                  title: "\u5220\u9664\u5E94\u7528",
                  onClick: ($event) => confirmDelete(item)
                }, null, _parent2, _scopeId));
                _push2(`</div></td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800" }, [
                  createVNode("div", { class: "flex flex-wrap items-center gap-2.5" }, [
                    createVNode(_component_UInput, {
                      modelValue: searchQuery.value,
                      "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                      icon: "ph:magnifying-glass",
                      placeholder: "\u6309\u5E94\u7528\u540D\u3001ID\u3001\u5173\u8054\u6280\u80FD\u6216 MCP \u641C\u7D22...",
                      size: "sm",
                      class: "w-72"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_USelect, {
                      modelValue: statusFilter.value,
                      "onUpdate:modelValue": ($event) => statusFilter.value = $event,
                      items: statusFilterOptions,
                      size: "sm",
                      class: "w-36"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "text-xs text-gray-500" }, " \u5171 " + toDisplayString(list.value.length) + " \u4E2A\u5E94\u7528 \xB7 \u5F53\u524D\u663E\u793A " + toDisplayString(filteredList.value.length) + " \u4E2A ", 1)
                ]),
                createVNode("div", { class: "overflow-x-auto" }, [
                  createVNode("table", { class: "w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800" }, [
                    createVNode("thead", { class: "bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "w-16 px-3 py-3 text-center" }, "\u6392\u5E8F"),
                        createVNode("th", { class: "px-3 py-3" }, "\u5E94\u7528\u540D\u79F0 / ID"),
                        createVNode("th", { class: "px-3 py-3" }, "\u5173\u8054\u6280\u80FD / MCP \u9274\u6743"),
                        createVNode("th", { class: "px-3 py-3" }, "\u5E94\u7528\u5305\u7248\u672C"),
                        createVNode("th", { class: "px-3 py-3" }, "\u573A\u666F\u4E0E\u80F6\u56CA"),
                        createVNode("th", { class: "px-3 py-3 text-center" }, "\u72B6\u6001"),
                        createVNode("th", { class: "w-40 px-3 py-3 text-right" }, "\u64CD\u4F5C")
                      ])
                    ]),
                    createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(filteredList.value, (item, index) => {
                        var _a, _b, _c, _d, _e;
                        return openBlock(), createBlock("tr", {
                          key: item.id,
                          class: ["hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors cursor-pointer", { "opacity-55": item.hidden }],
                          onClick: ($event) => openAppSubpage(item.id, "overview")
                        }, [
                          createVNode("td", {
                            class: "px-3 py-3 text-center font-mono",
                            onClick: withModifiers(() => {
                            }, ["stop"])
                          }, [
                            createVNode("div", { class: "flex items-center justify-center gap-1" }, [
                              createVNode("button", {
                                type: "button",
                                class: "p-0.5 hover:text-sky-600 disabled:opacity-30",
                                disabled: index === 0 || Boolean(searchQuery.value) || statusFilter.value !== "all",
                                onClick: ($event) => moveUp(index)
                              }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:arrow-up",
                                  class: "w-3.5 h-3.5"
                                })
                              ], 8, ["disabled", "onClick"]),
                              createVNode("span", { class: "text-gray-400 text-[11px]" }, toDisplayString((_a = item.sortOrder) != null ? _a : (index + 1) * 10), 1),
                              createVNode("button", {
                                type: "button",
                                class: "p-0.5 hover:text-sky-600 disabled:opacity-30",
                                disabled: index === filteredList.value.length - 1 || Boolean(searchQuery.value) || statusFilter.value !== "all",
                                onClick: ($event) => moveDown(index)
                              }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:arrow-down",
                                  class: "w-3.5 h-3.5"
                                })
                              ], 8, ["disabled", "onClick"])
                            ])
                          ], 8, ["onClick"]),
                          createVNode("td", { class: "px-3 py-3" }, [
                            createVNode("div", { class: "flex items-center gap-2.5" }, [
                              createVNode("span", {
                                class: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-white text-xs",
                                style: { background: item.iconBg || "linear-gradient(135deg, #0D9488 0%, #0EA5E9 100%)" }
                              }, toDisplayString(item.iconGlyph || ((_b = item.shortName) == null ? void 0 : _b.slice(0, 1)) || "A"), 5),
                              createVNode("div", null, [
                                createVNode("div", { class: "font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                                  createVNode("span", null, toDisplayString(item.name), 1),
                                  createVNode(_component_UBadge, {
                                    color: "neutral",
                                    variant: "subtle",
                                    size: "xs"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.shortName), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("div", { class: "text-[11px] text-gray-400 font-mono" }, toDisplayString(item.id) + " \xB7 " + toDisplayString(item.mascotEmoji) + " " + toDisplayString(item.mascotTitle), 1)
                              ])
                            ])
                          ]),
                          createVNode("td", { class: "px-3 py-3" }, [
                            createVNode("div", { class: "flex flex-wrap items-center gap-1.5" }, [
                              createVNode(_component_UBadge, {
                                color: "info",
                                variant: "subtle",
                                size: "xs",
                                class: "font-mono"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.skillName), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UBadge, {
                                color: "success",
                                variant: "subtle",
                                size: "xs",
                                class: "font-mono"
                              }, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    createTextVNode(toDisplayString(((_a2 = item.mcp) == null ? void 0 : _a2.authType) || "hoxi-account"), 1)
                                  ];
                                }),
                                _: 2
                              }, 1024)
                            ]),
                            createVNode("div", {
                              class: "mt-1 truncate max-w-[200px] font-mono text-[11px] text-gray-400",
                              title: (_c = item.mcp) == null ? void 0 : _c.url
                            }, toDisplayString((_d = item.mcp) == null ? void 0 : _d.serverId) + " \xB7 " + toDisplayString(((_e = item.mcp) == null ? void 0 : _e.url) || "/api/mcp"), 9, ["title"])
                          ]),
                          createVNode("td", {
                            class: "px-3 py-3 whitespace-nowrap",
                            onClick: withModifiers(($event) => openAppSubpage(item.id, "packages"), ["stop"])
                          }, [
                            item.package ? (openBlock(), createBlock(_component_UBadge, {
                              key: 0,
                              color: "info",
                              variant: "subtle",
                              size: "xs",
                              class: "font-mono"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" v" + toDisplayString(item.package.version), 1)
                              ]),
                              _: 2
                            }, 1024)) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-[11px] text-gray-400 hover:text-sky-600"
                            }, " + \u53D1\u5E03\u79BB\u7EBF\u5305 ")),
                            item.releaseCount ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "mt-0.5 text-[10px] text-gray-400"
                            }, " \u5171 " + toDisplayString(item.releaseCount) + " \u4E2A\u7248\u672C ", 1)) : createCommentVNode("", true)
                          ], 8, ["onClick"]),
                          createVNode("td", { class: "px-3 py-3" }, [
                            createVNode("div", { class: "flex flex-wrap gap-1" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.categories, (cat) => {
                                return openBlock(), createBlock(_component_UBadge, {
                                  key: cat.id,
                                  color: "neutral",
                                  variant: "subtle",
                                  size: "xs"
                                }, {
                                  default: withCtx(() => {
                                    var _a2;
                                    return [
                                      createTextVNode(toDisplayString(cat.icon) + " " + toDisplayString(cat.label) + " (" + toDisplayString(((_a2 = cat.chips) == null ? void 0 : _a2.length) || 0) + ") ", 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])
                          ]),
                          createVNode("td", {
                            class: "px-3 py-3 text-center whitespace-nowrap",
                            onClick: withModifiers(() => {
                            }, ["stop"])
                          }, [
                            createVNode(_component_UButton, {
                              color: item.hidden ? "neutral" : "success",
                              variant: "subtle",
                              size: "xs",
                              onClick: ($event) => toggleHiddenQuick(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.hidden ? "\u5DF2\u9690\u85CF" : "\u5C55\u793A\u4E2D"), 1)
                              ]),
                              _: 2
                            }, 1032, ["color", "onClick"])
                          ], 8, ["onClick"]),
                          createVNode("td", {
                            class: "px-3 py-3 text-right whitespace-nowrap",
                            onClick: withModifiers(() => {
                            }, ["stop"])
                          }, [
                            createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                              createVNode(_component_UButton, {
                                color: "primary",
                                variant: "ghost",
                                size: "xs",
                                icon: "ph:sliders-horizontal",
                                onClick: ($event) => openAppSubpage(item.id, "overview")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u7BA1\u7406 ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_UButton, {
                                color: "neutral",
                                variant: "ghost",
                                size: "xs",
                                icon: "ph:package",
                                title: "\u7248\u672C\u4E0E\u5305\u7BA1\u7406",
                                onClick: ($event) => openAppSubpage(item.id, "packages")
                              }, null, 8, ["onClick"]),
                              createVNode(_component_UButton, {
                                color: "error",
                                variant: "ghost",
                                size: "xs",
                                icon: "ph:trash",
                                title: "\u5220\u9664\u5E94\u7528",
                                onClick: ($event) => confirmDelete(item)
                              }, null, 8, ["onClick"])
                            ])
                          ], 8, ["onClick"])
                        ], 10, ["onClick"]);
                      }), 128))
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(ssrRenderComponent(_component_UModal, {
        open: isDeleteModalOpen.value,
        "onUpdate:open": ($event) => isDeleteModalOpen.value = $event,
        title: "\u786E\u8BA4\u5220\u9664 Work \u5E94\u7528"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="text-xs text-gray-600 dark:text-gray-300 space-y-2 py-2"${_scopeId}><p${_scopeId}> \u786E\u5B9A\u8981\u5220\u9664\u5E94\u7528 <strong class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate((_a = pendingDeleteItem.value) == null ? void 0 : _a.name)}</strong> \uFF08<code class="font-mono"${_scopeId}>${ssrInterpolate((_b = pendingDeleteItem.value) == null ? void 0 : _b.id)}</code>\uFF09\u53CA\u5176\u5173\u8054\u7684\u7248\u672C\u8BB0\u5F55\u5417\uFF1F </p><p class="text-amber-600 dark:text-amber-400"${_scopeId}> \u82E5\u53EA\u662F\u4E34\u65F6\u4E0B\u7EBF\u8C03\u8BD5\uFF0C\u5EFA\u8BAE\u5207\u6362\u4E3A\u300C\u6682\u4E0D\u5C55\u793A\uFF08\u9690\u85CF\uFF09\u300D\u800C\u975E\u7269\u7406\u5220\u9664\u3002 </p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-xs text-gray-600 dark:text-gray-300 space-y-2 py-2" }, [
                createVNode("p", null, [
                  createTextVNode(" \u786E\u5B9A\u8981\u5220\u9664\u5E94\u7528 "),
                  createVNode("strong", { class: "text-gray-900 dark:text-white" }, toDisplayString((_c = pendingDeleteItem.value) == null ? void 0 : _c.name), 1),
                  createTextVNode(" \uFF08"),
                  createVNode("code", { class: "font-mono" }, toDisplayString((_d = pendingDeleteItem.value) == null ? void 0 : _d.id), 1),
                  createTextVNode("\uFF09\u53CA\u5176\u5173\u8054\u7684\u7248\u672C\u8BB0\u5F55\u5417\uFF1F ")
                ]),
                createVNode("p", { class: "text-amber-600 dark:text-amber-400" }, " \u82E5\u53EA\u662F\u4E34\u65F6\u4E0B\u7EBF\u8C03\u8BD5\uFF0C\u5EFA\u8BAE\u5207\u6362\u4E3A\u300C\u6682\u4E0D\u5C55\u793A\uFF08\u9690\u85CF\uFF09\u300D\u800C\u975E\u7269\u7406\u5220\u9664\u3002 ")
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end gap-2 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "xs",
              onClick: ($event) => isDeleteModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u53D6\u6D88`);
                } else {
                  return [
                    createTextVNode("\u53D6\u6D88")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "error",
              size: "xs",
              loading: deletingApp.value,
              onClick: executeDelete
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u786E\u8BA4\u5220\u9664`);
                } else {
                  return [
                    createTextVNode("\u786E\u8BA4\u5220\u9664")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end gap-2 w-full" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  size: "xs",
                  onClick: ($event) => isDeleteModalOpen.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u53D6\u6D88")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  color: "error",
                  size: "xs",
                  loading: deletingApp.value,
                  onClick: executeDelete
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u786E\u8BA4\u5220\u9664")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/pages/work-apps.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=work-apps-D50qiNf8.mjs.map
