import { u as useI18n, bg as useUserSession, H as useRoute, bh as __nuxt_component_2$3 } from './server.mjs';
import { defineComponent, ref, getCurrentInstance, computed, reactive, watch, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useHoxiCommunity } from './useHoxiCommunity-peuQtLL3.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
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
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
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
    const { t, locale } = useI18n();
    useUserSession();
    useRoute();
    ref(false);
    ref("inquiry");
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
    computed(() => [
      { value: "presales", label: t("hoxi.contactModal.catPresales"), icon: "ph:sparkle-bold" },
      { value: "cooperation", label: t("hoxi.contactModal.catCooperation"), icon: "ph:handshake-bold" },
      { value: "feedback", label: t("hoxi.contactModal.catFeedback"), icon: "ph:lightbulb-bold" },
      { value: "technical", label: t("hoxi.contactModal.catTechnical"), icon: "ph:wrench-bold" }
    ]);
    reactive({
      category: "presales",
      contactName: "",
      contactEmail: "",
      contactInfo: "",
      content: ""
    });
    ref(false);
    ref("");
    ref(null);
    const localInquiries = ref([]);
    const memberTickets = ref([]);
    ref(false);
    ref(null);
    ref("");
    ref(false);
    ref(false);
    ref(false);
    const mergedHistory = computed(() => {
      const map = /* @__PURE__ */ new Map();
      for (const item of localInquiries.value) {
        map.set(item.ticketNo, { ...item });
      }
      for (const item of memberTickets.value) {
        const existing = map.get(item.ticketNo);
        map.set(item.ticketNo, {
          ...existing,
          ...item,
          accessToken: existing == null ? void 0 : existing.accessToken
        });
      }
      return Array.from(map.values()).sort((a, b) => {
        const ta = new Date(a.lastRepliedAt || a.createdAt || 0).getTime();
        const tb = new Date(b.lastRepliedAt || b.createdAt || 0).getTime();
        return tb - ta;
      });
    });
    computed(() => mergedHistory.value.length);
    watch(isOpen, (val) => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2$3;
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
//# sourceMappingURL=HoxiCommunityModal-30ynjWtg.mjs.map
