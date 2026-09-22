import { b9 as __nuxt_component_2$2 } from './server.mjs';
import { defineComponent, ref, getCurrentInstance, computed, watch, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useHoxiCommunity } from './useHoxiCommunity-CrBc4efE.mjs';
import '../nitro/nitro.mjs';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:crypto';
import 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
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
import 'zod';
import 'vue-router';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiCommunityModal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    modelValue: { type: Boolean }
  },
  emits: ["update:open", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { isOpen: storeOpen } = useHoxiCommunity();
    ref(false);
    const inst = getCurrentInstance();
    const hasExplicitProp = computed(() => {
      var _a;
      const vprops = (_a = inst == null ? void 0 : inst.vnode) == null ? void 0 : _a.props;
      return Boolean(vprops && ("open" in vprops || "modelValue" in vprops));
    });
    const isOpen = computed({
      get() {
        if (hasExplicitProp.value) {
          if (props.open !== void 0) return props.open;
          if (props.modelValue !== void 0) return props.modelValue;
        }
        return storeOpen.value;
      },
      set(value) {
        emit("update:open", value);
        emit("update:modelValue", value);
        storeOpen.value = value;
      }
    });
    ref(false);
    watch(isOpen, (val) => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2$2;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiCommunityModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main, { __name: "HoxiCommunityModal" });

export { __nuxt_component_4 as default };
