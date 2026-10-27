import { v as _sfc_main$o, G as _sfc_main$n, i as _sfc_main$R, _ as _sfc_main$W } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
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
  __name: "clients",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const errorMsg = ref("");
    const days = ref(30);
    const pkgFilter = ref("all");
    const data = ref(null);
    const packageOptions = [
      { value: "all", label: "\u5168\u90E8" },
      { value: "desktop", label: "\u684C\u9762\u7AEF" },
      { value: "mobile", label: "\u79FB\u52A8\u7AEF" }
    ];
    const dayOptions = [7, 30, 90].map((value) => ({ value }));
    const packageLabel = (pkg) => {
      if (pkg === "desktop") return "\u684C\u9762\u7AEF";
      if (pkg === "mobile") return "\u79FB\u52A8\u7AEF";
      return pkg || "\u672A\u77E5";
    };
    const fmtNum = (n) => typeof n === "number" ? n.toLocaleString("zh-CN") : "\u2014";
    const fmtDateTime = (value) => {
      if (!value) return "\u2014";
      return new Date(value).toLocaleString("zh-CN", {
        timeZone: "Asia/Shanghai",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      });
    };
    const dateKey = (d) => d.toLocaleDateString("en-CA", { timeZone: "Asia/Shanghai" });
    const dateAxis = (n) => {
      const out = [];
      const now = Date.now();
      for (let i = n - 1; i >= 0; i--) out.push(dateKey(new Date(now - i * 864e5)));
      return out;
    };
    const loadData = async () => {
      var _a;
      loading.value = true;
      try {
        data.value = await $fetch(`/api/admin/hoxi/clients?days=${days.value}`);
        errorMsg.value = "";
      } catch (err) {
        errorMsg.value = ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || "\u52A0\u8F7D\u5BA2\u6237\u7AEF\u89C2\u6D4B\u6570\u636E\u5931\u8D25";
      } finally {
        loading.value = false;
      }
    };
    const changeDays = async (value) => {
      if (days.value === value) return;
      days.value = value;
      await loadData();
    };
    const deviceList = computed(() => {
      var _a, _b;
      const list = ((_b = (_a = data.value) == null ? void 0 : _a.devices) == null ? void 0 : _b.list) || [];
      return pkgFilter.value === "all" ? list : list.filter((item) => item.package === pkgFilter.value);
    });
    const deviceStats = computed(() => {
      const now = Date.now();
      let valid = 0;
      let active7d = 0;
      let active30d = 0;
      let revoked = 0;
      let expired = 0;
      for (const device of deviceList.value) {
        if (device.revoked) {
          revoked += 1;
          continue;
        }
        if (device.expired) {
          expired += 1;
          continue;
        }
        valid += 1;
        const lastSeen = device.lastUsedAt ? new Date(device.lastUsedAt).getTime() : 0;
        if (lastSeen >= now - 7 * 864e5) active7d += 1;
        if (lastSeen >= now - 30 * 864e5) active30d += 1;
      }
      return { total: deviceList.value.length, valid, active7d, active30d, revoked, expired };
    });
    const launchSeries = computed(() => {
      var _a, _b;
      const map = /* @__PURE__ */ new Map();
      for (const row of ((_b = (_a = data.value) == null ? void 0 : _a.launches) == null ? void 0 : _b.daily) || []) {
        if (pkgFilter.value !== "all" && row.package !== pkgFilter.value) continue;
        map.set(row.date, (map.get(row.date) || 0) + row.count);
      }
      return dateAxis(days.value).map((date) => ({ date, count: map.get(date) || 0 }));
    });
    const launchMax = computed(() => Math.max(1, ...launchSeries.value.map((item) => item.count)));
    const launchTotal = computed(() => launchSeries.value.reduce((sum, item) => sum + item.count, 0));
    const launchAvg = computed(() => (launchTotal.value / days.value).toFixed(1));
    const appcastTotal = computed(() => {
      var _a, _b;
      return ((_b = (_a = data.value) == null ? void 0 : _a.launches) == null ? void 0 : _b.appcastTotal) || 0;
    });
    const newDeviceSeries = computed(() => {
      const map = /* @__PURE__ */ new Map();
      for (const device of deviceList.value) {
        if (!device.createdAt) continue;
        const key = dateKey(new Date(device.createdAt));
        map.set(key, (map.get(key) || 0) + 1);
      }
      return dateAxis(days.value).map((date) => ({ date, count: map.get(date) || 0 }));
    });
    const newDeviceMax = computed(() => Math.max(1, ...newDeviceSeries.value.map((item) => item.count)));
    const barStyle = (count, max) => ({
      height: count ? `${Math.max(3, Math.round(count / max * 100))}%` : "3px"
    });
    const versionRows = computed(() => {
      var _a, _b, _c;
      const t = (_a = data.value) == null ? void 0 : _a.telemetry;
      const pick = (rows) => (pkgFilter.value === "all" ? rows : rows.filter((row) => row.package === pkgFilter.value)).slice(0, 12);
      if ((t == null ? void 0 : t.available) && (t.byVersion || []).length) {
        return pick((t.byVersion || []).map((row) => ({
          package: row.package,
          version: row.version,
          count: row.actives,
          lastSeen: row.lastSeen || null
        })));
      }
      return pick(((_c = (_b = data.value) == null ? void 0 : _b.launches) == null ? void 0 : _c.byVersion) || []);
    });
    const versionCountLabel = computed(() => {
      var _a;
      const t = (_a = data.value) == null ? void 0 : _a.telemetry;
      return (t == null ? void 0 : t.available) && (t.byVersion || []).length ? "\u6D3B\u8DC3\u5B89\u88C5\u6570" : "\u542F\u52A8\u6B21\u6570";
    });
    const versionSourceLabel = computed(() => versionCountLabel.value === "\u6D3B\u8DC3\u5B89\u88C5\u6570" ? "\u6765\u6E90\uFF1A\u5BA2\u6237\u7AEF\u4E0A\u62A5\uFF08\u53BB\u91CD\u5B89\u88C5\uFF09" : "\u6765\u6E90\uFF1A\u5347\u7EA7\u8BF7\u6C42 query \u53C2\u6570");
    const telemetryDaily = computed(() => {
      var _a;
      const t = (_a = data.value) == null ? void 0 : _a.telemetry;
      if (!(t == null ? void 0 : t.available)) return [];
      const rows = t.daily || [];
      return pkgFilter.value === "all" ? rows : rows.filter((row) => row.package === pkgFilter.value);
    });
    const telemetryView = computed(() => {
      var _a;
      const t = (_a = data.value) == null ? void 0 : _a.telemetry;
      if (!t) return null;
      if (!t.available) return t;
      if (pkgFilter.value === "all") return t;
      const pkgRow = (t.byPackage || []).find((row) => row.package === pkgFilter.value);
      return {
        ...t,
        installsTotal: (pkgRow == null ? void 0 : pkgRow.installs) || 0,
        eventsTotal: (pkgRow == null ? void 0 : pkgRow.events) || 0,
        active7d: (pkgRow == null ? void 0 : pkgRow.active7d) || 0,
        active30d: (pkgRow == null ? void 0 : pkgRow.active30d) || 0,
        dauToday: (pkgRow == null ? void 0 : pkgRow.dauToday) || 0
      };
    });
    const activeInstallSeries = computed(() => {
      const map = /* @__PURE__ */ new Map();
      for (const row of telemetryDaily.value) map.set(row.date, (map.get(row.date) || 0) + row.actives);
      return dateAxis(days.value).map((date) => ({ date, count: map.get(date) || 0 }));
    });
    const activeInstallMax = computed(() => Math.max(1, ...activeInstallSeries.value.map((item) => item.count)));
    const newInstallsTotal = computed(() => {
      const map = /* @__PURE__ */ new Map();
      for (const row of telemetryDaily.value) map.set(row.date, (map.get(row.date) || 0) + row.installs);
      return dateAxis(days.value).reduce((sum, date) => sum + (map.get(date) || 0), 0);
    });
    const launchPlatformRows = computed(() => {
      var _a, _b;
      const rows = ((_b = (_a = data.value) == null ? void 0 : _a.launches) == null ? void 0 : _b.byPlatform) || [];
      return (pkgFilter.value === "all" ? rows : rows.filter((row) => row.package === pkgFilter.value)).slice(0, 12);
    });
    const downloadsView = computed(() => {
      var _a;
      if (pkgFilter.value === "mobile") return null;
      return ((_a = data.value) == null ? void 0 : _a.downloads) || null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAlert = _sfc_main$o;
      const _component_UCard = _sfc_main$n;
      const _component_UIcon = _sfc_main$W;
      const _component_UButton = _sfc_main$R;
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
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h2 class="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:desktop",
              class: "w-5 h-5 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u5BA2\u6237\u7AEF\u89C2\u6D4B</span></h2><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> Hoxi \u684C\u9762 / \u79FB\u52A8\u5BA2\u6237\u7AEF\u7684\u6388\u6743\u8BBE\u5907\u3001\u542F\u52A8\u6D3B\u8DC3\u3001\u7248\u672C\u5206\u5E03\u4E0E\u4E0B\u8F7D\u91CF\u3002\u6570\u636E\u6765\u81EA\u8BBE\u5907\u4EE4\u724C\u3001\u8BBF\u95EE\u65E5\u5FD7\u4E0E GitHub Release \u8BA1\u6570\u3002 </p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              icon: "ph:arrow-counter-clockwise",
              size: "sm",
              loading: loading.value,
              onClick: loadData
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
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:desktop",
                      class: "w-5 h-5 text-blue-500"
                    }),
                    createVNode("span", null, "\u5BA2\u6237\u7AEF\u89C2\u6D4B")
                  ]),
                  createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, " Hoxi \u684C\u9762 / \u79FB\u52A8\u5BA2\u6237\u7AEF\u7684\u6388\u6743\u8BBE\u5907\u3001\u542F\u52A8\u6D3B\u8DC3\u3001\u7248\u672C\u5206\u5E03\u4E0E\u4E0B\u8F7D\u91CF\u3002\u6570\u636E\u6765\u81EA\u8BBE\u5907\u4EE4\u724C\u3001\u8BBF\u95EE\u65E5\u5FD7\u4E0E GitHub Release \u8BA1\u6570\u3002 ")
                ]),
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  icon: "ph:arrow-counter-clockwise",
                  size: "sm",
                  loading: loading.value,
                  onClick: loadData
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
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
          if (_push2) {
            _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex flex-wrap items-center gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(packageOptions, (opt) => {
              _push2(ssrRenderComponent(_component_UButton, {
                key: opt.value,
                color: pkgFilter.value === opt.value ? "primary" : "neutral",
                variant: pkgFilter.value === opt.value ? "solid" : "outline",
                size: "xs",
                onClick: ($event) => pkgFilter.value = opt.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(opt.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(opt.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><span class="w-px h-4 bg-gray-200 dark:bg-gray-700"${_scopeId}></span><!--[-->`);
            ssrRenderList(unref(dayOptions), (opt) => {
              _push2(ssrRenderComponent(_component_UButton, {
                key: opt.value,
                color: days.value === opt.value ? "primary" : "neutral",
                variant: days.value === opt.value ? "solid" : "outline",
                size: "xs",
                onClick: ($event) => changeDays(opt.value)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u8FD1 ${ssrInterpolate(opt.value)} \u5929 `);
                  } else {
                    return [
                      createTextVNode(" \u8FD1 " + toDisplayString(opt.value) + " \u5929 ", 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="text-xs text-gray-500"${_scopeId}> \u751F\u6210\u4E8E ${ssrInterpolate(fmtDateTime((_a = data.value) == null ? void 0 : _a.generatedAt))} `);
            if ((_c = (_b = data.value) == null ? void 0 : _b.launches) == null ? void 0 : _c.truncated) {
              _push2(`<span class="text-amber-500"${_scopeId}>\xB7 \u65E5\u5FD7\u626B\u63CF\u5DF2\u8FBE\u4E0A\u9650\uFF0C\u8D8B\u52BF\u4E3A\u622A\u65AD\u503C</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 pt-5"${_scopeId}><div class="rounded-xl border border-gray-100 dark:border-gray-800 p-4"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>\u6388\u6743\u8BBE\u5907</div><div class="mt-1 text-2xl font-semibold text-gray-900 dark:text-white tabular-nums"${_scopeId}>${ssrInterpolate(deviceStats.value.total)}</div><div class="mt-1 text-xs text-gray-500"${_scopeId}> \u6709\u6548 ${ssrInterpolate(deviceStats.value.valid)} \xB7 \u540A\u9500 ${ssrInterpolate(deviceStats.value.revoked)} \xB7 \u8FC7\u671F ${ssrInterpolate(deviceStats.value.expired)}</div></div><div class="rounded-xl border border-gray-100 dark:border-gray-800 p-4"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>\u6D3B\u8DC3\u8BBE\u5907</div><div class="mt-1 text-2xl font-semibold text-gray-900 dark:text-white tabular-nums"${_scopeId}>${ssrInterpolate(deviceStats.value.active30d)}</div><div class="mt-1 text-xs text-gray-500"${_scopeId}> \u8FD1 30 \u5929\u542F\u52A8 \xB7 7 \u5929 ${ssrInterpolate(deviceStats.value.active7d)}</div></div><div class="rounded-xl border border-gray-100 dark:border-gray-800 p-4"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>\u542F\u52A8\u68C0\u67E5\uFF08\u8FD1 ${ssrInterpolate(days.value)} \u5929\uFF09</div><div class="mt-1 text-2xl font-semibold text-gray-900 dark:text-white tabular-nums"${_scopeId}>${ssrInterpolate(launchTotal.value)}</div><div class="mt-1 text-xs text-gray-500"${_scopeId}> \u65E5\u5747 ${ssrInterpolate(launchAvg.value)} \u6B21 \xB7 \u66F4\u65B0\u8F6E\u8BE2 ${ssrInterpolate(appcastTotal.value)} \u6B21 </div></div><div class="rounded-xl border border-gray-100 dark:border-gray-800 p-4"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>\u7D2F\u8BA1\u4E0B\u8F7D\uFF08GitHub\uFF09</div><div class="mt-1 text-2xl font-semibold text-gray-900 dark:text-white tabular-nums"${_scopeId}>${ssrInterpolate(downloadsView.value ? fmtNum(downloadsView.value.total) : "\u2014")}</div><div class="mt-1 text-xs text-gray-500"${_scopeId}>${ssrInterpolate(downloadsView.value ? `\u8986\u76D6 ${(downloadsView.value.byPlatform || []).length} \u4E2A\u5E73\u53F0` : "\u8BA1\u6570\u6682\u4E0D\u53EF\u7528")}</div></div></div><div class="pt-5 mt-5 border-t border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="text-xs font-medium tracking-wide text-gray-400"${_scopeId}>\u5BA2\u6237\u7AEF\u4E0A\u62A5\uFF08\u533F\u540D installId\uFF0C\u53BB\u91CD\u5B89\u88C5\u53E3\u5F84\uFF09</div>`);
            if (telemetryView.value && !telemetryView.value.available) {
              _push2(`<div class="text-xs text-amber-500"${_scopeId}> \u9065\u6D4B\u6682\u4E0D\u53EF\u7528${ssrInterpolate(telemetryView.value.reason ? `\uFF1A${telemetryView.value.reason}` : "\uFF08\u8FC1\u79FB\u672A\u5E94\u7528\uFF1F\uFF09")}</div>`);
            } else if ((_d = telemetryView.value) == null ? void 0 : _d.lastEventAt) {
              _push2(`<div class="text-[11px] text-gray-400"${_scopeId}> \u6700\u8FD1\u4E0A\u62A5 ${ssrInterpolate(fmtDateTime(telemetryView.value.lastEventAt))}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-3"${_scopeId}><div class="rounded-xl border border-gray-100 dark:border-gray-800 p-4"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>\u7D2F\u8BA1\u5B89\u88C5\uFF08\u53BB\u91CD\uFF09</div><div class="mt-1 text-2xl font-semibold text-gray-900 dark:text-white tabular-nums"${_scopeId}>${ssrInterpolate(fmtNum((_e = telemetryView.value) == null ? void 0 : _e.installsTotal))}</div><div class="mt-1 text-xs text-gray-500"${_scopeId}>\u6309\u533F\u540D installId \u53BB\u91CD\uFF0C\u91CD\u88C5\u6362\u65B0 ID</div></div><div class="rounded-xl border border-gray-100 dark:border-gray-800 p-4"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>\u4ECA\u65E5\u6D3B\u8DC3\u5B89\u88C5</div><div class="mt-1 text-2xl font-semibold text-gray-900 dark:text-white tabular-nums"${_scopeId}>${ssrInterpolate(fmtNum((_f = telemetryView.value) == null ? void 0 : _f.dauToday))}</div><div class="mt-1 text-xs text-gray-500"${_scopeId}>7 \u65E5 ${ssrInterpolate(fmtNum((_g = telemetryView.value) == null ? void 0 : _g.active7d))} \xB7 30 \u65E5 ${ssrInterpolate(fmtNum((_h = telemetryView.value) == null ? void 0 : _h.active30d))}</div></div><div class="rounded-xl border border-gray-100 dark:border-gray-800 p-4"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>\u4E0A\u62A5\u4E8B\u4EF6\u603B\u6570</div><div class="mt-1 text-2xl font-semibold text-gray-900 dark:text-white tabular-nums"${_scopeId}>${ssrInterpolate(fmtNum((_i = telemetryView.value) == null ? void 0 : _i.eventsTotal))}</div><div class="mt-1 text-xs text-gray-500"${_scopeId}>launch / install / update \u7D2F\u8BA1</div></div><div class="rounded-xl border border-gray-100 dark:border-gray-800 p-4"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>\u65B0\u589E\u5B89\u88C5\uFF08\u8FD1 ${ssrInterpolate(days.value)} \u5929\uFF09</div><div class="mt-1 text-2xl font-semibold text-gray-900 dark:text-white tabular-nums"${_scopeId}>${ssrInterpolate(fmtNum(newInstallsTotal.value))}</div><div class="mt-1 text-xs text-gray-500"${_scopeId}>\u6309 installId \u9996\u6B21\u51FA\u73B0\u8BA1</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800" }, [
                createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(packageOptions, (opt) => {
                    return createVNode(_component_UButton, {
                      key: opt.value,
                      color: pkgFilter.value === opt.value ? "primary" : "neutral",
                      variant: pkgFilter.value === opt.value ? "solid" : "outline",
                      size: "xs",
                      onClick: ($event) => pkgFilter.value = opt.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(opt.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["color", "variant", "onClick"]);
                  }), 64)),
                  createVNode("span", { class: "w-px h-4 bg-gray-200 dark:bg-gray-700" }),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(dayOptions), (opt) => {
                    return openBlock(), createBlock(_component_UButton, {
                      key: opt.value,
                      color: days.value === opt.value ? "primary" : "neutral",
                      variant: days.value === opt.value ? "solid" : "outline",
                      size: "xs",
                      onClick: ($event) => changeDays(opt.value)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u8FD1 " + toDisplayString(opt.value) + " \u5929 ", 1)
                      ]),
                      _: 2
                    }, 1032, ["color", "variant", "onClick"]);
                  }), 128))
                ]),
                createVNode("div", { class: "text-xs text-gray-500" }, [
                  createTextVNode(" \u751F\u6210\u4E8E " + toDisplayString(fmtDateTime((_j = data.value) == null ? void 0 : _j.generatedAt)) + " ", 1),
                  ((_l = (_k = data.value) == null ? void 0 : _k.launches) == null ? void 0 : _l.truncated) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-amber-500"
                  }, "\xB7 \u65E5\u5FD7\u626B\u63CF\u5DF2\u8FBE\u4E0A\u9650\uFF0C\u8D8B\u52BF\u4E3A\u622A\u65AD\u503C")) : createCommentVNode("", true)
                ])
              ]),
              createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 pt-5" }, [
                createVNode("div", { class: "rounded-xl border border-gray-100 dark:border-gray-800 p-4" }, [
                  createVNode("div", { class: "text-xs text-gray-500" }, "\u6388\u6743\u8BBE\u5907"),
                  createVNode("div", { class: "mt-1 text-2xl font-semibold text-gray-900 dark:text-white tabular-nums" }, toDisplayString(deviceStats.value.total), 1),
                  createVNode("div", { class: "mt-1 text-xs text-gray-500" }, " \u6709\u6548 " + toDisplayString(deviceStats.value.valid) + " \xB7 \u540A\u9500 " + toDisplayString(deviceStats.value.revoked) + " \xB7 \u8FC7\u671F " + toDisplayString(deviceStats.value.expired), 1)
                ]),
                createVNode("div", { class: "rounded-xl border border-gray-100 dark:border-gray-800 p-4" }, [
                  createVNode("div", { class: "text-xs text-gray-500" }, "\u6D3B\u8DC3\u8BBE\u5907"),
                  createVNode("div", { class: "mt-1 text-2xl font-semibold text-gray-900 dark:text-white tabular-nums" }, toDisplayString(deviceStats.value.active30d), 1),
                  createVNode("div", { class: "mt-1 text-xs text-gray-500" }, " \u8FD1 30 \u5929\u542F\u52A8 \xB7 7 \u5929 " + toDisplayString(deviceStats.value.active7d), 1)
                ]),
                createVNode("div", { class: "rounded-xl border border-gray-100 dark:border-gray-800 p-4" }, [
                  createVNode("div", { class: "text-xs text-gray-500" }, "\u542F\u52A8\u68C0\u67E5\uFF08\u8FD1 " + toDisplayString(days.value) + " \u5929\uFF09", 1),
                  createVNode("div", { class: "mt-1 text-2xl font-semibold text-gray-900 dark:text-white tabular-nums" }, toDisplayString(launchTotal.value), 1),
                  createVNode("div", { class: "mt-1 text-xs text-gray-500" }, " \u65E5\u5747 " + toDisplayString(launchAvg.value) + " \u6B21 \xB7 \u66F4\u65B0\u8F6E\u8BE2 " + toDisplayString(appcastTotal.value) + " \u6B21 ", 1)
                ]),
                createVNode("div", { class: "rounded-xl border border-gray-100 dark:border-gray-800 p-4" }, [
                  createVNode("div", { class: "text-xs text-gray-500" }, "\u7D2F\u8BA1\u4E0B\u8F7D\uFF08GitHub\uFF09"),
                  createVNode("div", { class: "mt-1 text-2xl font-semibold text-gray-900 dark:text-white tabular-nums" }, toDisplayString(downloadsView.value ? fmtNum(downloadsView.value.total) : "\u2014"), 1),
                  createVNode("div", { class: "mt-1 text-xs text-gray-500" }, toDisplayString(downloadsView.value ? `\u8986\u76D6 ${(downloadsView.value.byPlatform || []).length} \u4E2A\u5E73\u53F0` : "\u8BA1\u6570\u6682\u4E0D\u53EF\u7528"), 1)
                ])
              ]),
              createVNode("div", { class: "pt-5 mt-5 border-t border-gray-100 dark:border-gray-800" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", { class: "text-xs font-medium tracking-wide text-gray-400" }, "\u5BA2\u6237\u7AEF\u4E0A\u62A5\uFF08\u533F\u540D installId\uFF0C\u53BB\u91CD\u5B89\u88C5\u53E3\u5F84\uFF09"),
                  telemetryView.value && !telemetryView.value.available ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-xs text-amber-500"
                  }, " \u9065\u6D4B\u6682\u4E0D\u53EF\u7528" + toDisplayString(telemetryView.value.reason ? `\uFF1A${telemetryView.value.reason}` : "\uFF08\u8FC1\u79FB\u672A\u5E94\u7528\uFF1F\uFF09"), 1)) : ((_m = telemetryView.value) == null ? void 0 : _m.lastEventAt) ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "text-[11px] text-gray-400"
                  }, " \u6700\u8FD1\u4E0A\u62A5 " + toDisplayString(fmtDateTime(telemetryView.value.lastEventAt)), 1)) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-3" }, [
                  createVNode("div", { class: "rounded-xl border border-gray-100 dark:border-gray-800 p-4" }, [
                    createVNode("div", { class: "text-xs text-gray-500" }, "\u7D2F\u8BA1\u5B89\u88C5\uFF08\u53BB\u91CD\uFF09"),
                    createVNode("div", { class: "mt-1 text-2xl font-semibold text-gray-900 dark:text-white tabular-nums" }, toDisplayString(fmtNum((_n = telemetryView.value) == null ? void 0 : _n.installsTotal)), 1),
                    createVNode("div", { class: "mt-1 text-xs text-gray-500" }, "\u6309\u533F\u540D installId \u53BB\u91CD\uFF0C\u91CD\u88C5\u6362\u65B0 ID")
                  ]),
                  createVNode("div", { class: "rounded-xl border border-gray-100 dark:border-gray-800 p-4" }, [
                    createVNode("div", { class: "text-xs text-gray-500" }, "\u4ECA\u65E5\u6D3B\u8DC3\u5B89\u88C5"),
                    createVNode("div", { class: "mt-1 text-2xl font-semibold text-gray-900 dark:text-white tabular-nums" }, toDisplayString(fmtNum((_o = telemetryView.value) == null ? void 0 : _o.dauToday)), 1),
                    createVNode("div", { class: "mt-1 text-xs text-gray-500" }, "7 \u65E5 " + toDisplayString(fmtNum((_p = telemetryView.value) == null ? void 0 : _p.active7d)) + " \xB7 30 \u65E5 " + toDisplayString(fmtNum((_q = telemetryView.value) == null ? void 0 : _q.active30d)), 1)
                  ]),
                  createVNode("div", { class: "rounded-xl border border-gray-100 dark:border-gray-800 p-4" }, [
                    createVNode("div", { class: "text-xs text-gray-500" }, "\u4E0A\u62A5\u4E8B\u4EF6\u603B\u6570"),
                    createVNode("div", { class: "mt-1 text-2xl font-semibold text-gray-900 dark:text-white tabular-nums" }, toDisplayString(fmtNum((_r = telemetryView.value) == null ? void 0 : _r.eventsTotal)), 1),
                    createVNode("div", { class: "mt-1 text-xs text-gray-500" }, "launch / install / update \u7D2F\u8BA1")
                  ]),
                  createVNode("div", { class: "rounded-xl border border-gray-100 dark:border-gray-800 p-4" }, [
                    createVNode("div", { class: "text-xs text-gray-500" }, "\u65B0\u589E\u5B89\u88C5\uFF08\u8FD1 " + toDisplayString(days.value) + " \u5929\uFF09", 1),
                    createVNode("div", { class: "mt-1 text-2xl font-semibold text-gray-900 dark:text-white tabular-nums" }, toDisplayString(fmtNum(newInstallsTotal.value)), 1),
                    createVNode("div", { class: "mt-1 text-xs text-gray-500" }, "\u6309 installId \u9996\u6B21\u51FA\u73B0\u8BA1")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>\u542F\u52A8\u68C0\u67E5\u8D8B\u52BF</div>`);
          } else {
            return [
              createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, "\u542F\u52A8\u68C0\u67E5\u8D8B\u52BF")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="flex items-end gap-[3px] h-36"${_scopeId}><!--[-->`);
            ssrRenderList(launchSeries.value, (item) => {
              _push2(`<div class="${ssrRenderClass([item.count ? "bg-blue-500/70" : "bg-gray-200 dark:bg-gray-700", "flex-1 rounded-t-sm transition-all"])}" style="${ssrRenderStyle(barStyle(item.count, launchMax.value))}"${ssrRenderAttr("title", `${item.date} \xB7 ${item.count} \u6B21`)}${_scopeId}></div>`);
            });
            _push2(`<!--]--></div><div class="mt-2 flex justify-between text-[10px] text-gray-400"${_scopeId}><span${_scopeId}>${ssrInterpolate((_a = launchSeries.value[0]) == null ? void 0 : _a.date)}</span><span${_scopeId}>${ssrInterpolate((_b = launchSeries.value[launchSeries.value.length - 1]) == null ? void 0 : _b.date)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-end gap-[3px] h-36" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(launchSeries.value, (item) => {
                  return openBlock(), createBlock("div", {
                    key: item.date,
                    class: ["flex-1 rounded-t-sm transition-all", item.count ? "bg-blue-500/70" : "bg-gray-200 dark:bg-gray-700"],
                    style: barStyle(item.count, launchMax.value),
                    title: `${item.date} \xB7 ${item.count} \u6B21`
                  }, null, 14, ["title"]);
                }), 128))
              ]),
              createVNode("div", { class: "mt-2 flex justify-between text-[10px] text-gray-400" }, [
                createVNode("span", null, toDisplayString((_c = launchSeries.value[0]) == null ? void 0 : _c.date), 1),
                createVNode("span", null, toDisplayString((_d = launchSeries.value[launchSeries.value.length - 1]) == null ? void 0 : _d.date), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>\u65B0\u589E\u6388\u6743\u8BBE\u5907</div>`);
          } else {
            return [
              createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, "\u65B0\u589E\u6388\u6743\u8BBE\u5907")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="flex items-end gap-[3px] h-36"${_scopeId}><!--[-->`);
            ssrRenderList(newDeviceSeries.value, (item) => {
              _push2(`<div class="${ssrRenderClass([item.count ? "bg-emerald-500/70" : "bg-gray-200 dark:bg-gray-700", "flex-1 rounded-t-sm transition-all"])}" style="${ssrRenderStyle(barStyle(item.count, newDeviceMax.value))}"${ssrRenderAttr("title", `${item.date} \xB7 ${item.count} \u53F0`)}${_scopeId}></div>`);
            });
            _push2(`<!--]--></div><div class="mt-2 flex justify-between text-[10px] text-gray-400"${_scopeId}><span${_scopeId}>${ssrInterpolate((_a = newDeviceSeries.value[0]) == null ? void 0 : _a.date)}</span><span${_scopeId}>${ssrInterpolate((_b = newDeviceSeries.value[newDeviceSeries.value.length - 1]) == null ? void 0 : _b.date)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-end gap-[3px] h-36" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(newDeviceSeries.value, (item) => {
                  return openBlock(), createBlock("div", {
                    key: item.date,
                    class: ["flex-1 rounded-t-sm transition-all", item.count ? "bg-emerald-500/70" : "bg-gray-200 dark:bg-gray-700"],
                    style: barStyle(item.count, newDeviceMax.value),
                    title: `${item.date} \xB7 ${item.count} \u53F0`
                  }, null, 14, ["title"]);
                }), 128))
              ]),
              createVNode("div", { class: "mt-2 flex justify-between text-[10px] text-gray-400" }, [
                createVNode("span", null, toDisplayString((_c = newDeviceSeries.value[0]) == null ? void 0 : _c.date), 1),
                createVNode("span", null, toDisplayString((_d = newDeviceSeries.value[newDeviceSeries.value.length - 1]) == null ? void 0 : _d.date), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>\u6D3B\u8DC3\u5B89\u88C5\u8D8B\u52BF\uFF08\u4E0A\u62A5\u53BB\u91CD\uFF09</div>`);
          } else {
            return [
              createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, "\u6D3B\u8DC3\u5B89\u88C5\u8D8B\u52BF\uFF08\u4E0A\u62A5\u53BB\u91CD\uFF09")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="flex items-end gap-[3px] h-36"${_scopeId}><!--[-->`);
            ssrRenderList(activeInstallSeries.value, (item) => {
              _push2(`<div class="${ssrRenderClass([item.count ? "bg-violet-500/70" : "bg-gray-200 dark:bg-gray-700", "flex-1 rounded-t-sm transition-all"])}" style="${ssrRenderStyle(barStyle(item.count, activeInstallMax.value))}"${ssrRenderAttr("title", `${item.date} \xB7 ${item.count} \u53F0`)}${_scopeId}></div>`);
            });
            _push2(`<!--]--></div><div class="mt-2 flex justify-between text-[10px] text-gray-400"${_scopeId}><span${_scopeId}>${ssrInterpolate((_a = activeInstallSeries.value[0]) == null ? void 0 : _a.date)}</span><span${_scopeId}>${ssrInterpolate((_b = activeInstallSeries.value[activeInstallSeries.value.length - 1]) == null ? void 0 : _b.date)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-end gap-[3px] h-36" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(activeInstallSeries.value, (item) => {
                  return openBlock(), createBlock("div", {
                    key: item.date,
                    class: ["flex-1 rounded-t-sm transition-all", item.count ? "bg-violet-500/70" : "bg-gray-200 dark:bg-gray-700"],
                    style: barStyle(item.count, activeInstallMax.value),
                    title: `${item.date} \xB7 ${item.count} \u53F0`
                  }, null, 14, ["title"]);
                }), 128))
              ]),
              createVNode("div", { class: "mt-2 flex justify-between text-[10px] text-gray-400" }, [
                createVNode("span", null, toDisplayString((_c = activeInstallSeries.value[0]) == null ? void 0 : _c.date), 1),
                createVNode("span", null, toDisplayString((_d = activeInstallSeries.value[activeInstallSeries.value.length - 1]) == null ? void 0 : _d.date), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>\u7248\u672C\u5206\u5E03</div><div class="text-[11px] text-gray-400"${_scopeId}>${ssrInterpolate(versionSourceLabel.value)}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, "\u7248\u672C\u5206\u5E03"),
                createVNode("div", { class: "text-[11px] text-gray-400" }, toDisplayString(versionSourceLabel.value), 1)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (versionRows.value.length) {
              _push2(`<div class="overflow-x-auto"${_scopeId}><table class="w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><thead class="bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium"${_scopeId}><tr${_scopeId}><th class="px-3 py-2"${_scopeId}>\u7248\u672C</th><th class="px-3 py-2"${_scopeId}>\u7AEF</th><th class="px-3 py-2 text-right"${_scopeId}>${ssrInterpolate(versionCountLabel.value)}</th><th class="px-3 py-2 text-right"${_scopeId}>\u6700\u8FD1\u4E00\u6B21</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><!--[-->`);
              ssrRenderList(versionRows.value, (row) => {
                _push2(`<tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"${_scopeId}><td class="px-3 py-2 font-mono text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(row.version)}</td><td class="px-3 py-2 text-gray-500"${_scopeId}>${ssrInterpolate(packageLabel(row.package))}</td><td class="px-3 py-2 text-right tabular-nums text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(row.count)}</td><td class="px-3 py-2 text-right text-gray-500"${_scopeId}>${ssrInterpolate(row.lastSeen || "\u2014")}</td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div>`);
            } else {
              _push2(`<div class="py-10 text-center text-sm text-gray-400"${_scopeId}>\u6682\u65E0\u6570\u636E</div>`);
            }
          } else {
            return [
              versionRows.value.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "overflow-x-auto"
              }, [
                createVNode("table", { class: "w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800" }, [
                  createVNode("thead", { class: "bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium" }, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "px-3 py-2" }, "\u7248\u672C"),
                      createVNode("th", { class: "px-3 py-2" }, "\u7AEF"),
                      createVNode("th", { class: "px-3 py-2 text-right" }, toDisplayString(versionCountLabel.value), 1),
                      createVNode("th", { class: "px-3 py-2 text-right" }, "\u6700\u8FD1\u4E00\u6B21")
                    ])
                  ]),
                  createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(versionRows.value, (row) => {
                      return openBlock(), createBlock("tr", {
                        key: `${row.package}-${row.version}`,
                        class: "hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"
                      }, [
                        createVNode("td", { class: "px-3 py-2 font-mono text-gray-900 dark:text-white" }, toDisplayString(row.version), 1),
                        createVNode("td", { class: "px-3 py-2 text-gray-500" }, toDisplayString(packageLabel(row.package)), 1),
                        createVNode("td", { class: "px-3 py-2 text-right tabular-nums text-gray-900 dark:text-white" }, toDisplayString(row.count), 1),
                        createVNode("td", { class: "px-3 py-2 text-right text-gray-500" }, toDisplayString(row.lastSeen || "\u2014"), 1)
                      ]);
                    }), 128))
                  ])
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "py-10 text-center text-sm text-gray-400"
              }, "\u6682\u65E0\u6570\u636E"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-6">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>\u5E73\u53F0\u5206\u5E03\uFF08\u542F\u52A8\u68C0\u67E5\uFF09</div>`);
          } else {
            return [
              createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, "\u5E73\u53F0\u5206\u5E03\uFF08\u542F\u52A8\u68C0\u67E5\uFF09")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (launchPlatformRows.value.length) {
              _push2(`<div class="overflow-x-auto"${_scopeId}><table class="w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><thead class="bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium"${_scopeId}><tr${_scopeId}><th class="px-3 py-2"${_scopeId}>\u5E73\u53F0</th><th class="px-3 py-2"${_scopeId}>\u7AEF</th><th class="px-3 py-2 text-right"${_scopeId}>\u542F\u52A8\u6B21\u6570</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><!--[-->`);
              ssrRenderList(launchPlatformRows.value, (row) => {
                _push2(`<tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"${_scopeId}><td class="px-3 py-2 font-mono text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(row.os)}-${ssrInterpolate(row.arch)}</td><td class="px-3 py-2 text-gray-500"${_scopeId}>${ssrInterpolate(packageLabel(row.package))}</td><td class="px-3 py-2 text-right tabular-nums text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(row.count)}</td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div>`);
            } else {
              _push2(`<div class="py-10 text-center text-sm text-gray-400"${_scopeId}>\u6682\u65E0\u6570\u636E</div>`);
            }
          } else {
            return [
              launchPlatformRows.value.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "overflow-x-auto"
              }, [
                createVNode("table", { class: "w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800" }, [
                  createVNode("thead", { class: "bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium" }, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "px-3 py-2" }, "\u5E73\u53F0"),
                      createVNode("th", { class: "px-3 py-2" }, "\u7AEF"),
                      createVNode("th", { class: "px-3 py-2 text-right" }, "\u542F\u52A8\u6B21\u6570")
                    ])
                  ]),
                  createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(launchPlatformRows.value, (row) => {
                      return openBlock(), createBlock("tr", {
                        key: `${row.package}-${row.os}-${row.arch}`,
                        class: "hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"
                      }, [
                        createVNode("td", { class: "px-3 py-2 font-mono text-gray-900 dark:text-white" }, toDisplayString(row.os) + "-" + toDisplayString(row.arch), 1),
                        createVNode("td", { class: "px-3 py-2 text-gray-500" }, toDisplayString(packageLabel(row.package)), 1),
                        createVNode("td", { class: "px-3 py-2 text-right tabular-nums text-gray-900 dark:text-white" }, toDisplayString(row.count), 1)
                      ]);
                    }), 128))
                  ])
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "py-10 text-center text-sm text-gray-400"
              }, "\u6682\u65E0\u6570\u636E"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>\u4E0B\u8F7D\u91CF\uFF08GitHub Release \u5B98\u65B9\u8BA1\u6570\uFF09</div>`);
            if ((_a = downloadsView.value) == null ? void 0 : _a.fetchedAt) {
              _push2(`<div class="text-[11px] text-gray-400"${_scopeId}>\u62C9\u53D6\u4E8E ${ssrInterpolate(fmtDateTime(downloadsView.value.fetchedAt))}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, "\u4E0B\u8F7D\u91CF\uFF08GitHub Release \u5B98\u65B9\u8BA1\u6570\uFF09"),
                ((_b = downloadsView.value) == null ? void 0 : _b.fetchedAt) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-[11px] text-gray-400"
                }, "\u62C9\u53D6\u4E8E " + toDisplayString(fmtDateTime(downloadsView.value.fetchedAt)), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            if ((_a = downloadsView.value) == null ? void 0 : _a.available) {
              _push2(`<div${_scopeId}><div class="overflow-x-auto"${_scopeId}><table class="w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><thead class="bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium"${_scopeId}><tr${_scopeId}><th class="px-3 py-2"${_scopeId}>\u5E73\u53F0</th><th class="px-3 py-2 text-right"${_scopeId}>\u7D2F\u8BA1\u4E0B\u8F7D</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><!--[-->`);
              ssrRenderList(downloadsView.value.byPlatform, (row) => {
                _push2(`<tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"${_scopeId}><td class="px-3 py-2 font-mono text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(row.platform)}</td><td class="px-3 py-2 text-right tabular-nums text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(fmtNum(row.count))}</td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div></div>`);
            } else {
              _push2(`<div class="py-8 text-center text-sm text-gray-400"${_scopeId}> \u4E0B\u8F7D\u91CF\u6682\u4E0D\u53EF\u7528 `);
              if ((_b = downloadsView.value) == null ? void 0 : _b.reason) {
                _push2(`<div class="mt-1 text-xs text-gray-400"${_scopeId}>${ssrInterpolate(downloadsView.value.reason)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            }
          } else {
            return [
              ((_c = downloadsView.value) == null ? void 0 : _c.available) ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("div", { class: "overflow-x-auto" }, [
                  createVNode("table", { class: "w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800" }, [
                    createVNode("thead", { class: "bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "px-3 py-2" }, "\u5E73\u53F0"),
                        createVNode("th", { class: "px-3 py-2 text-right" }, "\u7D2F\u8BA1\u4E0B\u8F7D")
                      ])
                    ]),
                    createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(downloadsView.value.byPlatform, (row) => {
                        return openBlock(), createBlock("tr", {
                          key: row.platform,
                          class: "hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"
                        }, [
                          createVNode("td", { class: "px-3 py-2 font-mono text-gray-900 dark:text-white" }, toDisplayString(row.platform), 1),
                          createVNode("td", { class: "px-3 py-2 text-right tabular-nums text-gray-900 dark:text-white" }, toDisplayString(fmtNum(row.count)), 1)
                        ]);
                      }), 128))
                    ])
                  ])
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "py-8 text-center text-sm text-gray-400"
              }, [
                createTextVNode(" \u4E0B\u8F7D\u91CF\u6682\u4E0D\u53EF\u7528 "),
                ((_d = downloadsView.value) == null ? void 0 : _d.reason) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-1 text-xs text-gray-400"
                }, toDisplayString(downloadsView.value.reason), 1)) : createCommentVNode("", true)
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>\u8BBE\u5907\u660E\u7EC6</div><div class="text-xs text-gray-500"${_scopeId}>\u663E\u793A ${ssrInterpolate(deviceList.value.length)} \u53F0${ssrInterpolate(((_c = (_b = (_a = data.value) == null ? void 0 : _a.devices) == null ? void 0 : _b.list) == null ? void 0 : _c.length) >= 500 ? "\uFF08\u6700\u591A 500 \u884C\uFF09" : "")}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, "\u8BBE\u5907\u660E\u7EC6"),
                createVNode("div", { class: "text-xs text-gray-500" }, "\u663E\u793A " + toDisplayString(deviceList.value.length) + " \u53F0" + toDisplayString(((_f = (_e = (_d = data.value) == null ? void 0 : _d.devices) == null ? void 0 : _e.list) == null ? void 0 : _f.length) >= 500 ? "\uFF08\u6700\u591A 500 \u884C\uFF09" : ""), 1)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (deviceList.value.length) {
              _push2(`<div class="overflow-x-auto"${_scopeId}><table class="w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><thead class="bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium"${_scopeId}><tr${_scopeId}><th class="px-3 py-2"${_scopeId}>\u7528\u6237</th><th class="px-3 py-2"${_scopeId}>\u7AEF / \u5E73\u53F0</th><th class="px-3 py-2"${_scopeId}>\u6388\u6743\u65F6\u95F4</th><th class="px-3 py-2"${_scopeId}>\u6700\u8FD1\u6D3B\u8DC3</th><th class="px-3 py-2"${_scopeId}>\u5230\u671F\u65F6\u95F4</th><th class="px-3 py-2 text-right"${_scopeId}>\u72B6\u6001</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><!--[-->`);
              ssrRenderList(deviceList.value, (device, index) => {
                _push2(`<tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"${_scopeId}><td class="px-3 py-2"${_scopeId}><div class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(device.nickname || device.email || `\u7528\u6237 #${device.userId}`)}</div>`);
                if (device.nickname && device.email) {
                  _push2(`<div class="text-[11px] text-gray-400"${_scopeId}>${ssrInterpolate(device.email)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</td><td class="px-3 py-2 text-gray-500"${_scopeId}>${ssrInterpolate(packageLabel(device.package))} / <span class="font-mono"${_scopeId}>${ssrInterpolate(device.platform)}</span></td><td class="px-3 py-2 text-gray-500"${_scopeId}>${ssrInterpolate(fmtDateTime(device.createdAt))}</td><td class="px-3 py-2 text-gray-500"${_scopeId}>${ssrInterpolate(fmtDateTime(device.lastUsedAt))}</td><td class="px-3 py-2 text-gray-500"${_scopeId}>${ssrInterpolate(fmtDateTime(device.expiresAt))}</td><td class="px-3 py-2 text-right"${_scopeId}><span class="${ssrRenderClass(device.revoked ? "text-red-500" : device.expired ? "text-amber-500" : "text-emerald-600")}"${_scopeId}>${ssrInterpolate(device.revoked ? "\u5DF2\u540A\u9500" : device.expired ? "\u5DF2\u8FC7\u671F" : "\u6709\u6548")}</span></td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div>`);
            } else {
              _push2(`<div class="py-10 text-center text-sm text-gray-400"${_scopeId}>\u6682\u65E0\u8BBE\u5907</div>`);
            }
          } else {
            return [
              deviceList.value.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "overflow-x-auto"
              }, [
                createVNode("table", { class: "w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800" }, [
                  createVNode("thead", { class: "bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium" }, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "px-3 py-2" }, "\u7528\u6237"),
                      createVNode("th", { class: "px-3 py-2" }, "\u7AEF / \u5E73\u53F0"),
                      createVNode("th", { class: "px-3 py-2" }, "\u6388\u6743\u65F6\u95F4"),
                      createVNode("th", { class: "px-3 py-2" }, "\u6700\u8FD1\u6D3B\u8DC3"),
                      createVNode("th", { class: "px-3 py-2" }, "\u5230\u671F\u65F6\u95F4"),
                      createVNode("th", { class: "px-3 py-2 text-right" }, "\u72B6\u6001")
                    ])
                  ]),
                  createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(deviceList.value, (device, index) => {
                      return openBlock(), createBlock("tr", {
                        key: index,
                        class: "hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"
                      }, [
                        createVNode("td", { class: "px-3 py-2" }, [
                          createVNode("div", { class: "text-gray-900 dark:text-white" }, toDisplayString(device.nickname || device.email || `\u7528\u6237 #${device.userId}`), 1),
                          device.nickname && device.email ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-[11px] text-gray-400"
                          }, toDisplayString(device.email), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("td", { class: "px-3 py-2 text-gray-500" }, [
                          createTextVNode(toDisplayString(packageLabel(device.package)) + " / ", 1),
                          createVNode("span", { class: "font-mono" }, toDisplayString(device.platform), 1)
                        ]),
                        createVNode("td", { class: "px-3 py-2 text-gray-500" }, toDisplayString(fmtDateTime(device.createdAt)), 1),
                        createVNode("td", { class: "px-3 py-2 text-gray-500" }, toDisplayString(fmtDateTime(device.lastUsedAt)), 1),
                        createVNode("td", { class: "px-3 py-2 text-gray-500" }, toDisplayString(fmtDateTime(device.expiresAt)), 1),
                        createVNode("td", { class: "px-3 py-2 text-right" }, [
                          createVNode("span", {
                            class: device.revoked ? "text-red-500" : device.expired ? "text-amber-500" : "text-emerald-600"
                          }, toDisplayString(device.revoked ? "\u5DF2\u540A\u9500" : device.expired ? "\u5DF2\u8FC7\u671F" : "\u6709\u6548"), 3)
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "py-10 text-center text-sm text-gray-400"
              }, "\u6682\u65E0\u8BBE\u5907"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>\u6570\u636E\u53E3\u5F84\u8BF4\u660E</div>`);
          } else {
            return [
              createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, "\u6570\u636E\u53E3\u5F84\u8BF4\u660E")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="space-y-2 text-xs text-gray-500 dark:text-gray-400 leading-6 list-disc pl-5"${_scopeId}><li${_scopeId}>\u6388\u6743\u8BBE\u5907\u6765\u81EA\u300C\u4E00\u952E\u6388\u6743\u300D\u7B7E\u53D1\u7684\u8BBE\u5907\u4EE4\u724C\uFF08<span class="font-mono"${_scopeId}>hoxi_desktop_device:&lt;\u5E73\u53F0&gt;</span>\uFF09\uFF0C\u5355\u8D26\u53F7\u5355\u6D3B\u8DC3\u8BBE\u5907\uFF1B\u6388\u6743\u65F6\u95F4\u662F\u6700\u8FD1\u4E00\u6B21\u6388\u6743\uFF0C\u91CD\u88C5\u4F1A\u91CD\u65B0\u8BA1\u6570\u3002</li><li${_scopeId}>\u6D3B\u8DC3\u8BBE\u5907\u6309\u6700\u8FD1\u4E00\u6B21\u542F\u52A8\u6821\u9A8C\uFF08verify \u5237\u65B0 <span class="font-mono"${_scopeId}>last_used_at</span>\uFF09\u7EDF\u8BA1\uFF1B\u624B\u52A8\u540A\u9500\u4E5F\u4F1A\u5237\u65B0\u8BE5\u65F6\u95F4\uFF0C\u56E0\u6B64\u6D3B\u8DC3\u53EA\u8BA1\u672A\u540A\u9500\u3001\u672A\u8FC7\u671F\u7684\u8BBE\u5907\u3002</li><li${_scopeId}>\u542F\u52A8\u68C0\u67E5\u6765\u81EA <span class="font-mono"${_scopeId}>/api/hoxi/upgrade</span> \u8BF7\u6C42\u65E5\u5FD7\uFF0C\u5DF2\u5254\u9664\u6D4F\u89C8\u5668 UA\uFF08\u5B98\u7F51\u9996\u9875\u4E0B\u8F7D\u533A\u4F1A\u8C03\u540C\u4E00\u63A5\u53E3\uFF09\uFF1B\u63A5\u53E3\u6709 60 \u79D2\u54CD\u5E94\u7F13\u5B58\uFF0C\u540C\u673A 1 \u5206\u949F\u5185\u591A\u6B21\u542F\u52A8\u53EA\u8BA1\u4E00\u6B21\u3002</li><li${_scopeId}>\u7248\u672C\u4E0E\u5E73\u53F0\u5206\u5E03\u53D6\u81EA\u5347\u7EA7\u8BF7\u6C42\u7684 query \u53C2\u6570\uFF08version / os / arch\uFF09\uFF0C\u672A\u4E0A\u62A5\u7248\u672C\u7684\u8BF7\u6C42\u4E0D\u8BA1\u5165\u7248\u672C\u5206\u5E03\u3002</li><li${_scopeId}>macOS \u81EA\u52A8\u66F4\u65B0\uFF08Sparkle\uFF09\u901A\u8FC7 appcast.xml \u8F6E\u8BE2\uFF0C\u8BA1\u4E3A\u66F4\u65B0\u68C0\u67E5\u6B21\u6570\uFF0C\u4E0D\u4EE3\u8868\u542F\u52A8\u6B21\u6570\u3002</li><li${_scopeId}>\u4E0B\u8F7D\u91CF\u6765\u81EA GitHub Releases \u5B98\u65B9\u8BA1\u6570\uFF1B\u5B89\u88C5\u5305\u4E0D\u7ECF\u8FC7\u672C\u7AD9\u4E0B\u8F7D\uFF0C\u6545\u4E0B\u8F7D\u91CF\u4E0E\u542F\u52A8\u6570\u662F\u4E24\u5957\u53E3\u5F84\u3002</li><li${_scopeId}>\u300C\u5BA2\u6237\u7AEF\u4E0A\u62A5\u300D\u662F\u8F6F\u4EF6\u542F\u52A8\u65F6\u533F\u540D\u4E0A\u62A5\u7684\u9065\u6D4B\uFF08\u968F\u673A installId + \u7248\u672C/\u5E73\u53F0\uFF0C\u65E0\u4EFB\u4F55\u4E2A\u4EBA\u4FE1\u606F\uFF09\uFF0C\u53EF\u7CBE\u786E\u53BB\u91CD\u5B89\u88C5\u6570\u4E0E\u6D3B\u8DC3\u6570\uFF1B\u4E0A\u62A5\u63A5\u53E3 10 \u5206\u949F\u5185\u5BF9\u540C\u4E00 installId \u7684\u91CD\u590D launch \u53BB\u91CD\u3002</li><li${_scopeId}>installId \u672C\u5730\u91CD\u7F6E\uFF08\u91CD\u88C5\u3001\u5220 <span class="font-mono"${_scopeId}>~/.hoxi/device-id</span>\uFF09\u4F1A\u88AB\u8BA1\u4E3A\u65B0\u5B89\u88C5\uFF1B\u643A\u5E26\u8BBE\u5907\u4EE4\u724C\u7684\u4E0A\u62A5\u4F1A\u5173\u8054\u5230\u7528\u6237\uFF0C\u4F46\u4E0D\u5F3A\u5236\u767B\u5F55\u3002</li></ul>`);
          } else {
            return [
              createVNode("ul", { class: "space-y-2 text-xs text-gray-500 dark:text-gray-400 leading-6 list-disc pl-5" }, [
                createVNode("li", null, [
                  createTextVNode("\u6388\u6743\u8BBE\u5907\u6765\u81EA\u300C\u4E00\u952E\u6388\u6743\u300D\u7B7E\u53D1\u7684\u8BBE\u5907\u4EE4\u724C\uFF08"),
                  createVNode("span", { class: "font-mono" }, "hoxi_desktop_device:<\u5E73\u53F0>"),
                  createTextVNode("\uFF09\uFF0C\u5355\u8D26\u53F7\u5355\u6D3B\u8DC3\u8BBE\u5907\uFF1B\u6388\u6743\u65F6\u95F4\u662F\u6700\u8FD1\u4E00\u6B21\u6388\u6743\uFF0C\u91CD\u88C5\u4F1A\u91CD\u65B0\u8BA1\u6570\u3002")
                ]),
                createVNode("li", null, [
                  createTextVNode("\u6D3B\u8DC3\u8BBE\u5907\u6309\u6700\u8FD1\u4E00\u6B21\u542F\u52A8\u6821\u9A8C\uFF08verify \u5237\u65B0 "),
                  createVNode("span", { class: "font-mono" }, "last_used_at"),
                  createTextVNode("\uFF09\u7EDF\u8BA1\uFF1B\u624B\u52A8\u540A\u9500\u4E5F\u4F1A\u5237\u65B0\u8BE5\u65F6\u95F4\uFF0C\u56E0\u6B64\u6D3B\u8DC3\u53EA\u8BA1\u672A\u540A\u9500\u3001\u672A\u8FC7\u671F\u7684\u8BBE\u5907\u3002")
                ]),
                createVNode("li", null, [
                  createTextVNode("\u542F\u52A8\u68C0\u67E5\u6765\u81EA "),
                  createVNode("span", { class: "font-mono" }, "/api/hoxi/upgrade"),
                  createTextVNode(" \u8BF7\u6C42\u65E5\u5FD7\uFF0C\u5DF2\u5254\u9664\u6D4F\u89C8\u5668 UA\uFF08\u5B98\u7F51\u9996\u9875\u4E0B\u8F7D\u533A\u4F1A\u8C03\u540C\u4E00\u63A5\u53E3\uFF09\uFF1B\u63A5\u53E3\u6709 60 \u79D2\u54CD\u5E94\u7F13\u5B58\uFF0C\u540C\u673A 1 \u5206\u949F\u5185\u591A\u6B21\u542F\u52A8\u53EA\u8BA1\u4E00\u6B21\u3002")
                ]),
                createVNode("li", null, "\u7248\u672C\u4E0E\u5E73\u53F0\u5206\u5E03\u53D6\u81EA\u5347\u7EA7\u8BF7\u6C42\u7684 query \u53C2\u6570\uFF08version / os / arch\uFF09\uFF0C\u672A\u4E0A\u62A5\u7248\u672C\u7684\u8BF7\u6C42\u4E0D\u8BA1\u5165\u7248\u672C\u5206\u5E03\u3002"),
                createVNode("li", null, "macOS \u81EA\u52A8\u66F4\u65B0\uFF08Sparkle\uFF09\u901A\u8FC7 appcast.xml \u8F6E\u8BE2\uFF0C\u8BA1\u4E3A\u66F4\u65B0\u68C0\u67E5\u6B21\u6570\uFF0C\u4E0D\u4EE3\u8868\u542F\u52A8\u6B21\u6570\u3002"),
                createVNode("li", null, "\u4E0B\u8F7D\u91CF\u6765\u81EA GitHub Releases \u5B98\u65B9\u8BA1\u6570\uFF1B\u5B89\u88C5\u5305\u4E0D\u7ECF\u8FC7\u672C\u7AD9\u4E0B\u8F7D\uFF0C\u6545\u4E0B\u8F7D\u91CF\u4E0E\u542F\u52A8\u6570\u662F\u4E24\u5957\u53E3\u5F84\u3002"),
                createVNode("li", null, "\u300C\u5BA2\u6237\u7AEF\u4E0A\u62A5\u300D\u662F\u8F6F\u4EF6\u542F\u52A8\u65F6\u533F\u540D\u4E0A\u62A5\u7684\u9065\u6D4B\uFF08\u968F\u673A installId + \u7248\u672C/\u5E73\u53F0\uFF0C\u65E0\u4EFB\u4F55\u4E2A\u4EBA\u4FE1\u606F\uFF09\uFF0C\u53EF\u7CBE\u786E\u53BB\u91CD\u5B89\u88C5\u6570\u4E0E\u6D3B\u8DC3\u6570\uFF1B\u4E0A\u62A5\u63A5\u53E3 10 \u5206\u949F\u5185\u5BF9\u540C\u4E00 installId \u7684\u91CD\u590D launch \u53BB\u91CD\u3002"),
                createVNode("li", null, [
                  createTextVNode("installId \u672C\u5730\u91CD\u7F6E\uFF08\u91CD\u88C5\u3001\u5220 "),
                  createVNode("span", { class: "font-mono" }, "~/.hoxi/device-id"),
                  createTextVNode("\uFF09\u4F1A\u88AB\u8BA1\u4E3A\u65B0\u5B89\u88C5\uFF1B\u643A\u5E26\u8BBE\u5907\u4EE4\u724C\u7684\u4E0A\u62A5\u4F1A\u5173\u8054\u5230\u7528\u6237\uFF0C\u4F46\u4E0D\u5F3A\u5236\u767B\u5F55\u3002")
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/pages/clients.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=clients-DD81UjqD.mjs.map
