import { u as useI18n, _ as _sfc_main$Y } from './server.mjs';
import { defineComponent, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "HoxiDownloadCard",
  __ssrInlineRender: true,
  props: {
    label: {},
    arch: {},
    icon: {},
    downloadLabel: {},
    platformKey: {},
    release: {},
    highlight: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const info = computed(() => {
      var _a, _b;
      return ((_b = (_a = props.release) == null ? void 0 : _a.platforms) == null ? void 0 : _b[props.platformKey]) || null;
    });
    const version = computed(() => {
      var _a;
      return ((_a = props.release) == null ? void 0 : _a.version) || "";
    });
    const downloadUrl = computed(() => {
      const value = info.value;
      if (!(value == null ? void 0 : value.downloadUrl)) return "";
      return value.downloadUrl || value.mirrors.global || "";
    });
    const dateLabel = computed(() => {
      var _a;
      const raw = ((_a = props.release) == null ? void 0 : _a.createdAt) || "";
      return raw ? raw.slice(0, 10) : "";
    });
    const sizeLabel = computed(() => {
      var _a;
      const bytes = (_a = info.value) == null ? void 0 : _a.size;
      if (typeof bytes !== "number" || bytes <= 0) return "";
      const mb = bytes / 1024 / 1024;
      return mb >= 1024 ? `${(mb / 1024).toFixed(2)} GB` : `${mb.toFixed(1)} MB`;
    });
    const shaShort = computed(() => {
      var _a;
      const sha = (_a = info.value) == null ? void 0 : _a.sha256;
      return sha ? `${sha.slice(0, 12)}\u2026${sha.slice(-6)}` : "";
    });
    const minSystemNote = computed(() => {
      var _a;
      const minimum = (_a = props.release) == null ? void 0 : _a.minimumMacOS;
      return props.platformKey === "mac-arm64" && minimum ? t("hoxi.download.minSystem", { version: minimum }) : "";
    });
    const releasePageUrl = computed(() => "https://github.com/hoxiai/hoxi/releases");
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UIcon = _sfc_main$Y;
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col justify-between rounded-2xl border bg-white dark:bg-slate-900/70 p-6 transition-colors", __props.highlight ? "border-blue-400/60 dark:border-blue-500/50" : "border-slate-200/80 dark:border-slate-800 hover:border-blue-400/60 dark:hover:border-blue-500/50"]
      }, _attrs))}><div><div class="flex items-start justify-between gap-3"><div class="flex items-center gap-3"><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: __props.icon,
        class: "w-5 h-5 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(`</span><div class="min-w-0"><h3 class="text-base font-bold text-slate-900 dark:text-white leading-snug">${ssrInterpolate(__props.label)}</h3><p class="mt-0.5 text-[11px] text-slate-400 dark:text-slate-500">${ssrInterpolate(__props.arch)}</p></div></div>`);
      if (__props.highlight) {
        _push(`<span class="shrink-0 rounded-full bg-blue-50 dark:bg-blue-500/15 px-2 py-0.5 text-[10px] font-semibold text-blue-600 dark:text-blue-400">${ssrInterpolate(_ctx.$t("hoxi.download.currentDevice"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><dl class="mt-5 space-y-1.5 text-xs"><div class="flex items-center justify-between gap-3"><dt class="text-slate-400 dark:text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.download.versionLabel"))}</dt><dd class="font-mono font-semibold text-slate-900 dark:text-white">${ssrInterpolate(version.value ? `v${version.value}` : "\u2014")}</dd></div><div class="flex items-center justify-between gap-3"><dt class="text-slate-400 dark:text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.download.releasedLabel"))}</dt><dd class="font-mono text-slate-600 dark:text-slate-300">${ssrInterpolate(dateLabel.value || "\u2014")}</dd></div><div class="flex items-center justify-between gap-3"><dt class="text-slate-400 dark:text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.download.sizeLabel"))}</dt><dd class="font-mono text-slate-600 dark:text-slate-300">${ssrInterpolate(sizeLabel.value || "\u2014")}</dd></div>`);
      if (shaShort.value) {
        _push(`<div class="flex items-center justify-between gap-3"><dt class="text-slate-400 dark:text-slate-500">SHA-256</dt><dd class="font-mono text-slate-600 dark:text-slate-300 truncate"${ssrRenderAttr("title", ((_a = info.value) == null ? void 0 : _a.sha256) || void 0)}>${ssrInterpolate(shaShort.value)}</dd></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</dl>`);
      if (minSystemNote.value) {
        _push(`<p class="mt-3 text-[11px] text-slate-400 dark:text-slate-500">${ssrInterpolate(minSystemNote.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-6 space-y-2.5">`);
      if (downloadUrl.value) {
        _push(`<a${ssrRenderAttr("href", downloadUrl.value)} target="_blank" rel="noopener noreferrer" class="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors cursor-pointer">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:download-simple-bold",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(__props.downloadLabel)}</span></a>`);
      } else {
        _push(`<a${ssrRenderAttr("href", releasePageUrl.value)} target="_blank" rel="noopener noreferrer" class="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-blue-400/60 dark:hover:border-blue-500/50 px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"><span>${ssrInterpolate(_ctx.$t("hoxi.download.browseReleases"))}</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:arrow-up-right",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</a>`);
      }
      _push(`</div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiDownloadCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "HoxiDownloadCard" });

export { __nuxt_component_1 as default };
//# sourceMappingURL=HoxiDownloadCard-nRDfjIcv.mjs.map
