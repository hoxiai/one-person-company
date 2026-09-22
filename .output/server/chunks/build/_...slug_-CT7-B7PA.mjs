import { ssrRenderComponent, ssrRenderVNode, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { defineComponent, computed, shallowRef, withAsyncContext, watch, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { e as useI18n, q as navigateTo, t as useSettings, b7 as themePageModules, b6 as corePageModules, b8 as useActiveTheme, b as _sfc_main$G, k as _sfc_main$B, G as setResponseStatus } from './server.mjs';
import { useRoute } from 'vue-router';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:os';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
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

const _sfc_main$1 = /* @__PURE__ */ Object.assign({
  name: "NuxtErrorBoundary",
  inheritAttrs: false
}, {
  __name: "NuxtErrorBoundary",
  __ssrInlineRender: true,
  emits: ["error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const error = shallowRef(null);
    function clearError() {
      error.value = null;
    }
    __expose({ error, clearError });
    return (_ctx, _push, _parent, _attrs) => {
      if (error.value) {
        ssrRenderSlot(_ctx.$slots, "error", { error: error.value, clearError }, null, _push, _parent);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { t } = useI18n();
    const cleanPath = route.path.replace(/\.vue$/, "").replace(/\/index$/, "");
    if (cleanPath !== route.path) {
      navigateTo({ path: cleanPath || "/", query: route.query }, { replace: true });
    }
    useSettings();
    const modules = { ...corePageModules, ...themePageModules };
    const routeTemplates = Array.from(
      new Set(
        Object.keys(modules).map((key) => key.split("/pages/")[1]).filter((path) => Boolean(path))
      )
    );
    const activeTheme = useActiveTheme();
    const pathSegments = computed(() => route.params.slug || []);
    const getFilePath = (segments, theme) => {
      if (segments.length === 0) return "index.vue";
      const pathStr = segments.join("/");
      const existsInCore = (file) => {
        return !!corePageModules[`../core/pages/${file}`];
      };
      const existsInTheme = (file, t2) => {
        return !!themePageModules[`../themes/${t2}/pages/${file}`];
      };
      if (theme) {
        if (existsInTheme(`${pathStr}.vue`, theme)) return `${pathStr}.vue`;
        if (existsInTheme(`${pathStr}/index.vue`, theme)) return `${pathStr}/index.vue`;
      }
      if (existsInCore(`${pathStr}.vue`)) return `${pathStr}.vue`;
      if (existsInCore(`${pathStr}/index.vue`)) return `${pathStr}/index.vue`;
      const exists = (file) => {
        if (theme && existsInTheme(file, theme)) return true;
        return existsInCore(file);
      };
      for (const template of routeTemplates) {
        const templateSegments = template.replace(/\.vue$/, "").split("/");
        if (templateSegments.length === segments.length) {
          let isMatch = true;
          for (let i = 0; i < segments.length; i++) {
            const tSegment = templateSegments[i];
            if (!tSegment) {
              isMatch = false;
              break;
            }
            const isDynamic = tSegment.startsWith("[") && tSegment.endsWith("]");
            if (!isDynamic && tSegment !== segments[i]) {
              isMatch = false;
              break;
            }
          }
          if (isMatch && exists(template)) return template;
        }
      }
      return `${pathStr}.vue`;
    };
    const targetFile = computed(() => getFilePath(pathSegments.value, activeTheme.value));
    const loadedComponentCache = /* @__PURE__ */ new Map();
    const loadComponentModule = async (modOrLoader, key) => {
      if (!modOrLoader) return null;
      if (typeof modOrLoader === "function") {
        if (!loadedComponentCache.has(key)) {
          const loadPromise = (async () => {
            try {
              const loaded = await modOrLoader();
              return (loaded == null ? void 0 : loaded.default) || loaded;
            } catch (err) {
              loadedComponentCache.delete(key);
              throw err;
            }
          })();
          loadedComponentCache.set(key, loadPromise);
        }
        return await loadedComponentCache.get(key);
      }
      return (modOrLoader == null ? void 0 : modOrLoader.default) || modOrLoader;
    };
    const resolvePageModule = (file, theme) => {
      if (theme) {
        const themePath = `../themes/${theme}/pages/${file}`;
        const mod = themePageModules[themePath];
        if (mod) return { mod, key: themePath };
      }
      const corePath = `../core/pages/${file}`;
      const coreMod = corePageModules[corePath];
      if (coreMod) return { mod: coreMod, key: corePath };
      return null;
    };
    const resolveDirectoryLayoutModule = (file, theme) => {
      const segments = file.split("/");
      segments.pop();
      while (segments.length > 0) {
        const layoutFile = `${segments.join("/")}/layout.vue`;
        if (layoutFile !== file) {
          if (theme) {
            const themePath = `../themes/${theme}/pages/${layoutFile}`;
            const themeLayout = themePageModules[themePath];
            if (themeLayout) {
              return { mod: themeLayout, key: `${theme}:${layoutFile}` };
            }
          }
          const corePath = `../core/pages/${layoutFile}`;
          const coreLayout = corePageModules[corePath];
          if (coreLayout) {
            return { mod: coreLayout, key: `_core_:${layoutFile}` };
          }
        }
        segments.pop();
      }
      return null;
    };
    const activeComponent = shallowRef(null);
    const activeDirectoryLayout = shallowRef(null);
    const activePageKey = shallowRef("");
    const updateActiveComponents = async () => {
      const file = targetFile.value;
      const theme = activeTheme.value;
      const path = route.path;
      const pageInfo = resolvePageModule(file, theme);
      const dirLayoutInfo = resolveDirectoryLayoutModule(file, theme);
      try {
        const [pageComp, dirComp] = await Promise.all([
          pageInfo ? loadComponentModule(pageInfo.mod, pageInfo.key) : Promise.resolve(null),
          dirLayoutInfo ? loadComponentModule(dirLayoutInfo.mod, dirLayoutInfo.key) : Promise.resolve(null)
        ]);
        if (path !== route.path || theme !== activeTheme.value) return;
        activeComponent.value = pageComp;
        activePageKey.value = `${theme || "_core_"}:${file}:${path}`;
        activeDirectoryLayout.value = dirComp ? { component: dirComp, key: dirLayoutInfo.key } : null;
      } catch (err) {
        console.error("Failed to load page component:", err);
        activeComponent.value = null;
        activeDirectoryLayout.value = null;
      }
      if (!activeComponent.value) {
        setResponseStatus(404);
      }
    };
    [__temp, __restore] = withAsyncContext(() => updateActiveComponents()), await __temp, __restore();
    watch(activeTheme, async () => {
      await updateActiveComponents();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtErrorBoundary = _sfc_main$1;
      const _component_UIcon = _sfc_main$G;
      const _component_UButton = _sfc_main$B;
      _push(ssrRenderComponent(_component_NuxtErrorBoundary, _attrs, {
        error: withCtx(({ error, clearError }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white p-8 transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:warning-circle-bold",
              class: "w-24 h-24 text-red-500 mb-6"
            }, null, _parent2, _scopeId));
            _push2(`<h1 class="text-4xl font-bold mb-4 text-center"${_scopeId}>${ssrInterpolate(unref(t)("routeFallback.errorTitle"))}</h1><p class="text-gray-500 dark:text-gray-400 mb-8 max-w-lg text-center transition-colors duration-300"${_scopeId}>${ssrInterpolate(unref(t)("routeFallback.errorDescription"))}</p><div class="bg-white border border-red-200 dark:bg-black/40 dark:border-red-500/20 p-4 rounded-xl mb-8 max-w-2xl w-full overflow-auto shadow-sm dark:shadow-none transition-colors duration-300"${_scopeId}><code class="text-sm text-red-500 dark:text-red-400"${_scopeId}>${ssrInterpolate(error)}</code></div><div class="flex gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              onClick: clearError,
              color: "primary",
              variant: "outline",
              class: "border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-white/10 dark:text-gray-200 dark:hover:bg-white/5"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("routeFallback.tryAgain"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("routeFallback.tryAgain")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/",
              color: "primary",
              class: "bg-purple-600 hover:bg-purple-500 text-white"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("routeFallback.returnHome"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("routeFallback.returnHome")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white p-8 transition-colors duration-300" }, [
                createVNode(_component_UIcon, {
                  name: "ph:warning-circle-bold",
                  class: "w-24 h-24 text-red-500 mb-6"
                }),
                createVNode("h1", { class: "text-4xl font-bold mb-4 text-center" }, toDisplayString(unref(t)("routeFallback.errorTitle")), 1),
                createVNode("p", { class: "text-gray-500 dark:text-gray-400 mb-8 max-w-lg text-center transition-colors duration-300" }, toDisplayString(unref(t)("routeFallback.errorDescription")), 1),
                createVNode("div", { class: "bg-white border border-red-200 dark:bg-black/40 dark:border-red-500/20 p-4 rounded-xl mb-8 max-w-2xl w-full overflow-auto shadow-sm dark:shadow-none transition-colors duration-300" }, [
                  createVNode("code", { class: "text-sm text-red-500 dark:text-red-400" }, toDisplayString(error), 1)
                ]),
                createVNode("div", { class: "flex gap-4" }, [
                  createVNode(_component_UButton, {
                    onClick: clearError,
                    color: "primary",
                    variant: "outline",
                    class: "border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-white/10 dark:text-gray-200 dark:hover:bg-white/5"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("routeFallback.tryAgain")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    to: "/",
                    color: "primary",
                    class: "bg-purple-600 hover:bg-purple-500 text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("routeFallback.returnHome")), 1)
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
            if (activeComponent.value && activeDirectoryLayout.value) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(activeDirectoryLayout.value.component), {
                key: activeDirectoryLayout.value.key
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(activeComponent.value), { key: activePageKey.value }, null), _parent3, _scopeId2);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(activeComponent.value), { key: activePageKey.value }))
                    ];
                  }
                }),
                _: 1
              }), _parent2, _scopeId);
            } else if (activeComponent.value) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(activeComponent.value), { key: activePageKey.value }, null), _parent2, _scopeId);
            } else {
              _push2(`<div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white px-6 transition-colors duration-300"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:file-dashed",
                class: "w-24 h-24 text-gray-300 dark:text-gray-700 mb-6 transition-colors duration-300"
              }, null, _parent2, _scopeId));
              _push2(`<h1 class="text-4xl font-bold mb-4"${_scopeId}>${ssrInterpolate(unref(t)("routeFallback.notFoundTitle"))}</h1><p class="text-gray-500 dark:text-gray-400 mb-8 text-center transition-colors duration-300"${_scopeId}>${ssrInterpolate(unref(t)("routeFallback.notFoundDescription"))}</p>`);
              _push2(ssrRenderComponent(_component_UButton, {
                to: "/",
                color: "primary",
                class: "bg-purple-600 hover:bg-purple-500 text-white dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(t)("routeFallback.returnHome"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)("routeFallback.returnHome")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              activeComponent.value && activeDirectoryLayout.value ? (openBlock(), createBlock(resolveDynamicComponent(activeDirectoryLayout.value.component), {
                key: activeDirectoryLayout.value.key
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(activeComponent.value), { key: activePageKey.value }))
                ]),
                _: 1
              })) : activeComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(activeComponent.value), { key: activePageKey.value })) : (openBlock(), createBlock("div", {
                key: "page-404",
                class: "min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white px-6 transition-colors duration-300"
              }, [
                createVNode(_component_UIcon, {
                  name: "ph:file-dashed",
                  class: "w-24 h-24 text-gray-300 dark:text-gray-700 mb-6 transition-colors duration-300"
                }),
                createVNode("h1", { class: "text-4xl font-bold mb-4" }, toDisplayString(unref(t)("routeFallback.notFoundTitle")), 1),
                createVNode("p", { class: "text-gray-500 dark:text-gray-400 mb-8 text-center transition-colors duration-300" }, toDisplayString(unref(t)("routeFallback.notFoundDescription")), 1),
                createVNode(_component_UButton, {
                  to: "/",
                  color: "primary",
                  class: "bg-purple-600 hover:bg-purple-500 text-white dark:text-white"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("routeFallback.returnHome")), 1)
                  ]),
                  _: 1
                })
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
