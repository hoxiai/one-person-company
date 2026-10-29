import { e as useToast, f as useAdminPermissions, d as useFormatTime, k as _sfc_main$O, i as _sfc_main$T, _ as _sfc_main$Y, b as _sfc_main$A, l as _sfc_main$v, a as _sfc_main$w, c as _sfc_main$s } from './server.mjs';
import { _ as __nuxt_component_7 } from './FullScreenModal-Dpul9c_Q.mjs';
import { defineComponent, ref, reactive, computed, watch, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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

const pageSize = 50;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "newsletter",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const { formatDateTime } = useFormatTime();
    const subscribers = ref([]);
    const loading = ref(false);
    const page = ref(1);
    const total = ref(0);
    const search = ref("");
    const topicFilter = ref("all");
    const channelFilter = ref("all");
    const statusFilter = ref("all");
    const stats = reactive({
      activeTotal: 0,
      unsubscribedTotal: 0,
      topics: []
    });
    const topicCountMap = computed(() => {
      const map = {};
      for (const item of stats.topics) {
        map[item.topic] = item.count;
      }
      return map;
    });
    const kpiCards = computed(() => [
      {
        key: "all-active",
        label: "\u5168\u90E8\u6D3B\u8DC3\u8BA2\u9605",
        count: stats.activeTotal,
        badge: "ACTIVE",
        icon: "ph:users-three-duotone",
        iconClass: "text-emerald-500",
        active: topicFilter.value === "all" && statusFilter.value === "active",
        onClick: () => {
          topicFilter.value = "all";
          statusFilter.value = "active";
        }
      },
      {
        key: "blog",
        label: "\u535A\u5BA2\u4E13\u680F\u8BA2\u9605",
        count: topicCountMap.value.blog || 0,
        badge: "blog",
        icon: "ph:newspaper-duotone",
        iconClass: "text-blue-500",
        active: topicFilter.value === "blog",
        onClick: () => {
          topicFilter.value = "blog";
          statusFilter.value = "all";
        }
      },
      {
        key: "hoxi_updates",
        label: "Hoxi \u7B97\u529B\u4E0E\u5468\u62A5",
        count: topicCountMap.value.hoxi_updates || 0,
        badge: "hoxi_updates",
        icon: "ph:sparkle-duotone",
        iconClass: "text-indigo-500",
        active: topicFilter.value === "hoxi_updates",
        onClick: () => {
          topicFilter.value = "hoxi_updates";
          statusFilter.value = "all";
        }
      },
      {
        key: "codex_resets",
        label: "TiboSay \u91CD\u7F6E\u63D0\u9192",
        count: topicCountMap.value.codex_resets || 0,
        badge: "codex_resets",
        icon: "ph:radar-duotone",
        iconClass: "text-amber-500",
        active: topicFilter.value === "codex_resets",
        onClick: () => {
          topicFilter.value = "codex_resets";
          statusFilter.value = "all";
        }
      },
      {
        key: "general",
        label: "\u901A\u7528\u52A8\u6001\u8BA2\u9605",
        count: topicCountMap.value.general || 0,
        badge: "general",
        icon: "ph:bell-ringing-duotone",
        iconClass: "text-purple-500",
        active: topicFilter.value === "general",
        onClick: () => {
          topicFilter.value = "general";
          statusFilter.value = "all";
        }
      },
      {
        key: "unsubscribed",
        label: "\u5DF2\u9000\u8BA2\u8BB0\u5F55",
        count: stats.unsubscribedTotal,
        badge: "UNSUB",
        icon: "ph:prohibit-duotone",
        iconClass: "text-gray-400",
        active: statusFilter.value === "unsubscribed",
        onClick: () => {
          topicFilter.value = "all";
          statusFilter.value = "unsubscribed";
        }
      }
    ]);
    const topicFilterOptions = [
      { label: "\u5168\u90E8\u4E3B\u9898 (All)", value: "all" },
      { label: "\u901A\u7528\u52A8\u6001 (general)", value: "general" },
      { label: "\u535A\u5BA2\u4E13\u680F (blog)", value: "blog" },
      { label: "Hoxi \u52A8\u6001 (hoxi_updates)", value: "hoxi_updates" },
      { label: "Codex \u91CD\u7F6E (codex_resets)", value: "codex_resets" }
    ];
    const topicEditOptions = [
      { label: "general", value: "general" },
      { label: "blog", value: "blog" },
      { label: "hoxi_updates", value: "hoxi_updates" },
      { label: "codex_resets", value: "codex_resets" }
    ];
    const channelFilterOptions = [
      { label: "\u5168\u90E8\u6E20\u9053", value: "all" },
      { label: "Email \u90AE\u4EF6", value: "email" },
      { label: "Webhook \u56DE\u8C03", value: "webhook" }
    ];
    const statusFilterOptions = [
      { label: "\u5168\u90E8\u72B6\u6001", value: "all" },
      { label: "\u8BA2\u9605\u4E2D (Active)", value: "active" },
      { label: "\u5DF2\u9000\u8BA2 (Unsub)", value: "unsubscribed" }
    ];
    const localeOptions = [
      { label: "\u4E2D\u6587 (zh)", value: "zh" },
      { label: "\u7E41\u9AD4 (zh-HK)", value: "zh-HK" },
      { label: "English (en)", value: "en" },
      { label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 (ru)", value: "ru" },
      { label: "\u65E5\u672C\u8A9E (ja)", value: "ja" },
      { label: "\uD55C\uAD6D\uC5B4 (ko)", value: "ko" },
      { label: "Espa\xF1ol (es)", value: "es" },
      { label: "Portugu\xEAs (pt)", value: "pt" },
      { label: "Deutsch (de)", value: "de" },
      { label: "Fran\xE7ais (fr)", value: "fr" },
      { label: "Bahasa Indonesia (id)", value: "id" }
    ];
    const newSubForm = reactive({
      target: "",
      topic: "general",
      locale: "zh"
    });
    const adding = ref(false);
    const fetchSubscribers = async () => {
      var _a;
      loading.value = true;
      try {
        const res = await $fetch("/api/admin/email/subscribers", {
          query: {
            page: page.value,
            pageSize,
            search: search.value || void 0,
            topic: topicFilter.value,
            channel: channelFilter.value,
            status: statusFilter.value
          }
        });
        subscribers.value = res.items || [];
        total.value = res.total || 0;
        if (res.stats) {
          stats.activeTotal = res.stats.activeTotal || 0;
          stats.unsubscribedTotal = res.stats.unsubscribedTotal || 0;
          stats.topics = res.stats.topics || [];
        }
      } catch (err) {
        toast.add({
          title: "\u52A0\u8F7D\u8BA2\u9605\u8005\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.statusMessage) || (err == null ? void 0 : err.message),
          color: "error"
        });
      } finally {
        loading.value = false;
      }
    };
    const onFilterChange = () => {
      page.value = 1;
      void fetchSubscribers();
    };
    watch([topicFilter, channelFilter, statusFilter], () => {
      onFilterChange();
    });
    const changePage = (nextPage) => {
      if (nextPage < 1) return;
      page.value = nextPage;
      void fetchSubscribers();
    };
    const addSubscriber = async () => {
      var _a, _b;
      const target = newSubForm.target.trim();
      if (!target || adding.value) return;
      adding.value = true;
      try {
        const channel = target.startsWith("https://") ? "webhook" : "email";
        await $fetch("/api/admin/email/subscribers", {
          method: "POST",
          body: {
            action: "create",
            channel,
            target,
            topic: newSubForm.topic,
            locale: newSubForm.locale
          }
        });
        newSubForm.target = "";
        toast.add({ title: "\u5DF2\u6DFB\u52A0\u8BA2\u9605\u8005", color: "success" });
        await fetchSubscribers();
      } catch (err) {
        toast.add({
          title: "\u6DFB\u52A0\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.statusMessage) || ((_b = err == null ? void 0 : err.data) == null ? void 0 : _b.message) || (err == null ? void 0 : err.message),
          color: "error"
        });
      } finally {
        adding.value = false;
      }
    };
    const toggleStatus = async (sub) => {
      try {
        await $fetch("/api/admin/email/subscribers", {
          method: "POST",
          body: { action: "toggle", id: sub.id }
        });
        await fetchSubscribers();
      } catch (err) {
        toast.add({ title: "\u72B6\u6001\u5207\u6362\u5931\u8D25", description: err == null ? void 0 : err.message, color: "error" });
      }
    };
    const removeSubscriber = async (sub) => {
      try {
        await $fetch("/api/admin/email/subscribers", {
          method: "POST",
          body: { action: "delete", id: sub.id }
        });
        await fetchSubscribers();
      } catch (err) {
        toast.add({ title: "\u5220\u9664\u5931\u8D25", description: err == null ? void 0 : err.message, color: "error" });
      }
    };
    const copyUnsubscribeLink = async (sub) => {
      if (!sub.unsubscribeToken || true) return;
    };
    const exportSubscribersCsv = () => {
      return;
    };
    const isBroadcastModalOpen = ref(false);
    const sendingBroadcast = ref(false);
    const broadcastForm = reactive({
      topic: "all",
      targetEmail: "",
      subjectZh: "",
      subjectEn: "",
      htmlZh: '<div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;border:1px solid #e2e8f0;border-radius:16px;">\n  <h2>\u6700\u65B0\u52A8\u6001\u901A\u77E5</h2>\n  <p>\u611F\u8C22\u60A8\u7684\u5173\u6CE8\u4E0E\u652F\u6301\uFF01</p>\n</div>',
      htmlEn: ""
    });
    const submitBroadcast = async () => {
      var _a, _b;
      if (!broadcastForm.subjectZh.trim() || !broadcastForm.htmlZh.trim() || sendingBroadcast.value) return;
      sendingBroadcast.value = true;
      try {
        const res = await $fetch("/api/admin/email/broadcast", {
          method: "POST",
          body: {
            topic: broadcastForm.topic,
            targetEmail: broadcastForm.targetEmail.trim() || void 0,
            subjectZh: broadcastForm.subjectZh.trim(),
            subjectEn: broadcastForm.subjectEn.trim() || broadcastForm.subjectZh.trim(),
            htmlZh: broadcastForm.htmlZh,
            htmlEn: broadcastForm.htmlEn.trim() || broadcastForm.htmlZh
          }
        });
        toast.add({
          title: "\u7FA4\u53D1\u6267\u884C\u5B8C\u6210",
          description: `\u5339\u914D ${res.totalMatched} \u4EBA \xB7 \u90AE\u4EF6\u6210\u529F ${res.emailSent} / \u5931\u8D25 ${res.emailFailed} \xB7 Webhook \u6210\u529F ${res.webhookSent}`,
          color: "success"
        });
        isBroadcastModalOpen.value = false;
        await fetchSubscribers();
      } catch (err) {
        toast.add({
          title: "\u7FA4\u53D1\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.statusMessage) || ((_b = err == null ? void 0 : err.data) == null ? void 0 : _b.message) || (err == null ? void 0 : err.message),
          color: "error"
        });
      } finally {
        sendingBroadcast.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBadge = _sfc_main$O;
      const _component_UButton = _sfc_main$T;
      const _component_UIcon = _sfc_main$Y;
      const _component_UInput = _sfc_main$A;
      const _component_USelect = _sfc_main$v;
      const _component_FullScreenModal = __nuxt_component_7;
      const _component_UFormField = _sfc_main$w;
      const _component_UTextarea = _sfc_main$s;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-5 pb-12" }, _attrs))}><div class="flex flex-col sm:flex-row justify-between sm:items-center gap-3"><div><div class="flex items-center gap-2.5"><h1 class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight"> \u90AE\u4EF6\u4E0E Webhook \u8BA2\u9605\u7BA1\u7406 </h1>`);
      _push(ssrRenderComponent(_component_UBadge, {
        color: "success",
        variant: "subtle",
        size: "sm",
        class: "font-mono font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6D3B\u8DC3 ${ssrInterpolate(stats.activeTotal)}`);
          } else {
            return [
              createTextVNode(" \u6D3B\u8DC3 " + toDisplayString(stats.activeTotal), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (stats.unsubscribedTotal > 0) {
        _push(ssrRenderComponent(_component_UBadge, {
          color: "neutral",
          variant: "subtle",
          size: "sm",
          class: "font-mono"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u5DF2\u9000\u8BA2 ${ssrInterpolate(stats.unsubscribedTotal)}`);
            } else {
              return [
                createTextVNode(" \u5DF2\u9000\u8BA2 " + toDisplayString(stats.unsubscribedTotal), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="text-gray-500 dark:text-gray-400 text-xs mt-1"> \u7EDF\u4E00\u7BA1\u7406\u5168\u7AD9\u535A\u5BA2\u4E13\u680F\u3001TiboSay \u91CD\u7F6E\u63D0\u9192\u3001Hoxi \u52A8\u6001\u7B49\u90AE\u4EF6\u4E0E Webhook \u8BA2\u9605\u8005\uFF0C\u652F\u6301\u6309\u5206\u7EC4\u7FA4\u53D1\u4E0E\u4E00\u952E\u9000\u8BA2\u8FFD\u8E2A </p></div><div class="flex items-center gap-2 flex-wrap">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        icon: "ph:megaphone-simple-fill",
        size: "sm",
        class: "rounded-xl",
        disabled: !unref(hasAdminPerm)("settings:edit"),
        onClick: ($event) => isBroadcastModalOpen.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u7FA4\u53D1\u8BA2\u9605\u901A\u77E5 `);
          } else {
            return [
              createTextVNode(" \u7FA4\u53D1\u8BA2\u9605\u901A\u77E5 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:download-simple",
        size: "sm",
        class: "rounded-xl",
        disabled: subscribers.value.length === 0,
        onClick: exportSubscribersCsv
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5BFC\u51FA CSV `);
          } else {
            return [
              createTextVNode(" \u5BFC\u51FA CSV ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:gear",
        size: "sm",
        class: "rounded-xl",
        to: "/admin/settings"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u90AE\u4EF6\u901A\u9053\u4E0E\u65E5\u5FD7 `);
          } else {
            return [
              createTextVNode(" \u90AE\u4EF6\u901A\u9053\u4E0E\u65E5\u5FD7 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrow-clockwise",
        size: "sm",
        class: "rounded-xl",
        loading: loading.value,
        onClick: fetchSubscribers
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5"><!--[-->`);
      ssrRenderList(kpiCards.value, (card) => {
        _push(`<button type="button" class="${ssrRenderClass([card.active ? "ring-2 ring-purple-500 border-purple-500" : "", "bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-gray-800/70 rounded-xl px-3.5 py-3 text-left transition-all cursor-pointer hover:border-purple-500/50"])}"><div class="flex items-center justify-between gap-2"><span class="text-xs font-medium text-gray-500 dark:text-gray-400 truncate">${ssrInterpolate(card.label)}</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: card.icon,
          class: ["w-4 h-4 shrink-0", card.iconClass]
        }, null, _parent));
        _push(`</div><div class="mt-1.5 flex items-baseline justify-between"><span class="text-xl font-bold font-mono text-gray-900 dark:text-white">${ssrInterpolate(card.count)}</span><span class="text-[10px] font-mono text-gray-400">${ssrInterpolate(card.badge)}</span></div></button>`);
      });
      _push(`<!--]--></div><div class="bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-gray-800/70 rounded-2xl shadow-xs overflow-hidden"><div class="p-4 border-b border-gray-100 dark:border-gray-800/80 flex flex-col xl:flex-row xl:items-center justify-between gap-3 bg-gray-50/50 dark:bg-black/20"><div class="flex items-center gap-2 flex-wrap">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: search.value,
        "onUpdate:modelValue": ($event) => search.value = $event,
        placeholder: "\u641C\u7D22\u90AE\u7BB1\u6216 Webhook URL...",
        size: "sm",
        class: "w-full sm:w-60",
        icon: "ph:magnifying-glass",
        onKeydown: onFilterChange
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: topicFilter.value,
        "onUpdate:modelValue": ($event) => topicFilter.value = $event,
        items: topicFilterOptions,
        size: "sm",
        class: "w-40"
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: channelFilter.value,
        "onUpdate:modelValue": ($event) => channelFilter.value = $event,
        items: channelFilterOptions,
        size: "sm",
        class: "w-32"
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: statusFilter.value,
        "onUpdate:modelValue": ($event) => statusFilter.value = $event,
        items: statusFilterOptions,
        size: "sm",
        class: "w-32"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-2 flex-wrap">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: newSubForm.target,
        "onUpdate:modelValue": ($event) => newSubForm.target = $event,
        placeholder: "\u65B0\u589E\u90AE\u7BB1\u6216 https:// webhook...",
        size: "sm",
        class: "w-full sm:w-56",
        onKeydown: addSubscriber
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: newSubForm.topic,
        "onUpdate:modelValue": ($event) => newSubForm.topic = $event,
        items: topicEditOptions,
        size: "sm",
        class: "w-36"
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: newSubForm.locale,
        "onUpdate:modelValue": ($event) => newSubForm.locale = $event,
        items: localeOptions,
        size: "sm",
        class: "w-24"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        size: "sm",
        color: "primary",
        variant: "soft",
        icon: "ph:plus-bold",
        class: "rounded-lg",
        loading: adding.value,
        disabled: !unref(hasAdminPerm)("settings:edit") || !newSubForm.target.trim(),
        onClick: addSubscriber
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6DFB\u52A0\u8BA2\u9605 `);
          } else {
            return [
              createTextVNode(" \u6DFB\u52A0\u8BA2\u9605 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (loading.value) {
        _push(`<div class="p-12 text-center text-sm text-gray-500">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:spinner",
          class: "w-6 h-6 animate-spin mx-auto mb-2 text-purple-500"
        }, null, _parent));
        _push(` \u6B63\u5728\u52A0\u8F7D\u8BA2\u9605\u8005\u5217\u8868... </div>`);
      } else if (subscribers.value.length === 0) {
        _push(`<div class="p-14 text-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:envelope-simple-open-duotone",
          class: "w-10 h-10 mx-auto text-gray-300 dark:text-gray-600 mb-2"
        }, null, _parent));
        _push(`<p class="text-sm font-medium text-gray-700 dark:text-gray-300">\u6682\u65E0\u5339\u914D\u7684\u8BA2\u9605\u8BB0\u5F55</p><p class="text-xs text-gray-400 mt-1">\u53EF\u5728\u53F3\u4E0A\u89D2\u624B\u52A8\u6DFB\u52A0\u6D4B\u8BD5\u90AE\u7BB1\uFF0C\u6216\u7531\u524D\u53F0\u8BA2\u9605\u6846\u81EA\u52A8\u6C89\u6DC0</p></div>`);
      } else {
        _push(`<div class="overflow-x-auto"><table class="w-full text-left border-collapse"><thead><tr class="border-b border-gray-100 dark:border-gray-800/80 text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 bg-gray-50/40 dark:bg-gray-900/20"><th class="py-3 px-4">\u72B6\u6001</th><th class="py-3 px-4">\u8BA2\u9605\u76EE\u6807 (\u90AE\u7BB1 / Webhook)</th><th class="py-3 px-4">\u8BA2\u9605\u5206\u7EC4 (Topic)</th><th class="py-3 px-4">\u6E20\u9053 / \u8BED\u8A00 / \u6765\u6E90</th><th class="py-3 px-4">\u8BA2\u9605\u65F6\u95F4</th><th class="py-3 px-4">\u6700\u8FD1\u63A8\u9001</th><th class="py-3 px-4 text-right">\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800/60 text-xs sm:text-sm"><!--[-->`);
        ssrRenderList(subscribers.value, (sub) => {
          _push(`<tr class="hover:bg-gray-50/80 dark:hover:bg-gray-900/30 transition-colors"><td class="py-3 px-4 whitespace-nowrap">`);
          _push(ssrRenderComponent(_component_UBadge, {
            color: sub.status === "active" ? "success" : "neutral",
            variant: "subtle",
            size: "xs"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(sub.status === "active" ? "\u8BA2\u9605\u4E2D" : "\u5DF2\u9000\u8BA2")}`);
              } else {
                return [
                  createTextVNode(toDisplayString(sub.status === "active" ? "\u8BA2\u9605\u4E2D" : "\u5DF2\u9000\u8BA2"), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td class="py-3 px-4 font-mono font-medium text-gray-900 dark:text-white max-w-xs truncate"${ssrRenderAttr("title", sub.target)}>${ssrInterpolate(sub.target)}</td><td class="py-3 px-4 whitespace-nowrap"><span class="text-xs px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-300 font-mono">${ssrInterpolate(sub.topic)}</span></td><td class="py-3 px-4 whitespace-nowrap"><span class="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-mono">${ssrInterpolate(sub.channel)} \xB7 ${ssrInterpolate(sub.locale)} \xB7 ${ssrInterpolate(sub.source)}</span></td><td class="py-3 px-4 whitespace-nowrap text-xs text-gray-500">${ssrInterpolate(unref(formatDateTime)(sub.createdAt))}</td><td class="py-3 px-4 whitespace-nowrap text-xs text-gray-400">${ssrInterpolate(sub.lastNotifiedAt ? unref(formatDateTime)(sub.lastNotifiedAt) : "-")}</td><td class="py-3 px-4 whitespace-nowrap text-right"><div class="inline-flex items-center gap-1.5">`);
          if (sub.unsubscribeToken) {
            _push(ssrRenderComponent(_component_UButton, {
              size: "xs",
              variant: "ghost",
              color: "neutral",
              icon: "ph:link",
              title: "\u590D\u5236\u8BE5\u8BA2\u9605\u8005\u7684\u4E13\u5C5E\u9000\u8BA2\u94FE\u63A5",
              onClick: ($event) => copyUnsubscribeLink(sub)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_UButton, {
            size: "xs",
            variant: "soft",
            color: sub.status === "active" ? "neutral" : "success",
            class: "rounded-lg",
            disabled: !unref(hasAdminPerm)("settings:edit"),
            onClick: ($event) => toggleStatus(sub)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(sub.status === "active" ? "\u8BBE\u4E3A\u9000\u8BA2" : "\u6062\u590D\u8BA2\u9605")}`);
              } else {
                return [
                  createTextVNode(toDisplayString(sub.status === "active" ? "\u8BBE\u4E3A\u9000\u8BA2" : "\u6062\u590D\u8BA2\u9605"), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_UButton, {
            size: "xs",
            variant: "ghost",
            color: "error",
            icon: "ph:trash",
            class: "rounded-lg",
            disabled: !unref(hasAdminPerm)("settings:edit"),
            onClick: ($event) => removeSubscriber(sub)
          }, null, _parent));
          _push(`</div></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(`<div class="px-5 py-3 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-xs text-gray-500"><span>\u5171 ${ssrInterpolate(total.value)} \u6761\u8BB0\u5F55 \xB7 \u7B2C ${ssrInterpolate(page.value)} / ${ssrInterpolate(Math.max(1, Math.ceil(total.value / pageSize)))} \u9875</span><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "xs",
        color: "neutral",
        variant: "outline",
        disabled: page.value <= 1 || loading.value,
        onClick: ($event) => changePage(page.value - 1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4E0A\u4E00\u9875 `);
          } else {
            return [
              createTextVNode(" \u4E0A\u4E00\u9875 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        size: "xs",
        color: "neutral",
        variant: "outline",
        disabled: page.value * pageSize >= total.value || loading.value,
        onClick: ($event) => changePage(page.value + 1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4E0B\u4E00\u9875 `);
          } else {
            return [
              createTextVNode(" \u4E0B\u4E00\u9875 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_FullScreenModal, {
        modelValue: isBroadcastModalOpen.value,
        "onUpdate:modelValue": ($event) => isBroadcastModalOpen.value = $event,
        title: "\u{1F4E2} \u7FA4\u53D1\u90AE\u4EF6 / Webhook \u8BA2\u9605\u901A\u77E5",
        "default-fullscreen": false,
        "max-width": "sm:max-w-2xl"
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-end gap-2 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "soft",
              onClick: ($event) => isBroadcastModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u6D88 `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u6D88 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              icon: "ph:paper-plane-tilt-fill",
              loading: sendingBroadcast.value,
              disabled: !broadcastForm.subjectZh.trim() || !broadcastForm.htmlZh.trim(),
              onClick: submitBroadcast
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(broadcastForm.targetEmail.trim() ? "\u53D1\u9001\u6D4B\u8BD5\u90AE\u4EF6" : "\u7ACB\u5373\u7FA4\u53D1\u901A\u77E5")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(broadcastForm.targetEmail.trim() ? "\u53D1\u9001\u6D4B\u8BD5\u90AE\u4EF6" : "\u7ACB\u5373\u7FA4\u53D1\u901A\u77E5"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-end gap-2 w-full" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "soft",
                  onClick: ($event) => isBroadcastModalOpen.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u53D6\u6D88 ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  color: "primary",
                  icon: "ph:paper-plane-tilt-fill",
                  loading: sendingBroadcast.value,
                  disabled: !broadcastForm.subjectZh.trim() || !broadcastForm.htmlZh.trim(),
                  onClick: submitBroadcast
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(broadcastForm.targetEmail.trim() ? "\u53D1\u9001\u6D4B\u8BD5\u90AE\u4EF6" : "\u7ACB\u5373\u7FA4\u53D1\u901A\u77E5"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u76EE\u6807\u8BA2\u9605\u5206\u7EC4 (Topic)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: broadcastForm.topic,
                    "onUpdate:modelValue": ($event) => broadcastForm.topic = $event,
                    items: topicFilterOptions,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: broadcastForm.topic,
                      "onUpdate:modelValue": ($event) => broadcastForm.topic = $event,
                      items: topicFilterOptions,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u5355\u53D1\u6D4B\u8BD5\u90AE\u7BB1 (\u9009\u586B\uFF0C\u586B\u5219\u4EC5\u53D1\u7ED9\u8BE5\u90AE\u7BB1)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: broadcastForm.targetEmail,
                    "onUpdate:modelValue": ($event) => broadcastForm.targetEmail = $event,
                    placeholder: "\u7559\u7A7A\u5219\u7FA4\u53D1\u7ED9\u6240\u9009\u5206\u7EC4\u5168\u90E8\u6D3B\u8DC3\u8BA2\u9605\u8005",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: broadcastForm.targetEmail,
                      "onUpdate:modelValue": ($event) => broadcastForm.targetEmail = $event,
                      placeholder: "\u7559\u7A7A\u5219\u7FA4\u53D1\u7ED9\u6240\u9009\u5206\u7EC4\u5168\u90E8\u6D3B\u8DC3\u8BA2\u9605\u8005",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u90AE\u4EF6\u6807\u9898 (\u4E2D\u6587 / \u9ED8\u8BA4)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: broadcastForm.subjectZh,
                    "onUpdate:modelValue": ($event) => broadcastForm.subjectZh = $event,
                    placeholder: "\u4F8B\u5982\uFF1A\u{1F680} \u65B0\u6587\u7AE0\u53D1\u5E03\uFF1A\u4E00\u4EBA\u516C\u53F8\u5982\u4F55\u7528 AI \u628A\u7B97\u529B\u6210\u672C\u538B\u5230 10%",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: broadcastForm.subjectZh,
                      "onUpdate:modelValue": ($event) => broadcastForm.subjectZh = $event,
                      placeholder: "\u4F8B\u5982\uFF1A\u{1F680} \u65B0\u6587\u7AE0\u53D1\u5E03\uFF1A\u4E00\u4EBA\u516C\u53F8\u5982\u4F55\u7528 AI \u628A\u7B97\u529B\u6210\u672C\u538B\u5230 10%",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u90AE\u4EF6\u6807\u9898 (\u82F1\u6587\uFF0C\u9009\u586B\uFF0C\u7559\u7A7A\u5219\u540C\u4E2D\u6587)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: broadcastForm.subjectEn,
                    "onUpdate:modelValue": ($event) => broadcastForm.subjectEn = $event,
                    placeholder: "Optional English subject for en subscribers",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: broadcastForm.subjectEn,
                      "onUpdate:modelValue": ($event) => broadcastForm.subjectEn = $event,
                      placeholder: "Optional English subject for en subscribers",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { label: "HTML \u90AE\u4EF6\u6B63\u6587 (\u4E2D\u6587 / \u9ED8\u8BA4\uFF0C\u5E95\u90E8\u81EA\u52A8\u9644\u4E0A\u7B7E\u540D\u4E00\u952E\u9000\u8BA2\u94FE\u63A5)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: broadcastForm.htmlZh,
                    "onUpdate:modelValue": ($event) => broadcastForm.htmlZh = $event,
                    rows: 6,
                    class: "w-full font-mono text-xs",
                    placeholder: "<h2>\u6700\u65B0\u66F4\u65B0</h2><p>\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5...</p>"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: broadcastForm.htmlZh,
                      "onUpdate:modelValue": ($event) => broadcastForm.htmlZh = $event,
                      rows: 6,
                      class: "w-full font-mono text-xs",
                      placeholder: "<h2>\u6700\u65B0\u66F4\u65B0</h2><p>\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5...</p>"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { label: "HTML \u90AE\u4EF6\u6B63\u6587 (\u82F1\u6587\uFF0C\u9009\u586B\uFF0C\u7559\u7A7A\u5219\u540C\u4E2D\u6587\u6B63\u6587)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: broadcastForm.htmlEn,
                    "onUpdate:modelValue": ($event) => broadcastForm.htmlEn = $event,
                    rows: 4,
                    class: "w-full font-mono text-xs",
                    placeholder: "Optional English HTML content for en subscribers"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: broadcastForm.htmlEn,
                      "onUpdate:modelValue": ($event) => broadcastForm.htmlEn = $event,
                      rows: 4,
                      class: "w-full font-mono text-xs",
                      placeholder: "Optional English HTML content for en subscribers"
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
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-3" }, [
                  createVNode(_component_UFormField, { label: "\u76EE\u6807\u8BA2\u9605\u5206\u7EC4 (Topic)" }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: broadcastForm.topic,
                        "onUpdate:modelValue": ($event) => broadcastForm.topic = $event,
                        items: topicFilterOptions,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u5355\u53D1\u6D4B\u8BD5\u90AE\u7BB1 (\u9009\u586B\uFF0C\u586B\u5219\u4EC5\u53D1\u7ED9\u8BE5\u90AE\u7BB1)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: broadcastForm.targetEmail,
                        "onUpdate:modelValue": ($event) => broadcastForm.targetEmail = $event,
                        placeholder: "\u7559\u7A7A\u5219\u7FA4\u53D1\u7ED9\u6240\u9009\u5206\u7EC4\u5168\u90E8\u6D3B\u8DC3\u8BA2\u9605\u8005",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, { label: "\u90AE\u4EF6\u6807\u9898 (\u4E2D\u6587 / \u9ED8\u8BA4)" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: broadcastForm.subjectZh,
                      "onUpdate:modelValue": ($event) => broadcastForm.subjectZh = $event,
                      placeholder: "\u4F8B\u5982\uFF1A\u{1F680} \u65B0\u6587\u7AE0\u53D1\u5E03\uFF1A\u4E00\u4EBA\u516C\u53F8\u5982\u4F55\u7528 AI \u628A\u7B97\u529B\u6210\u672C\u538B\u5230 10%",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { label: "\u90AE\u4EF6\u6807\u9898 (\u82F1\u6587\uFF0C\u9009\u586B\uFF0C\u7559\u7A7A\u5219\u540C\u4E2D\u6587)" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: broadcastForm.subjectEn,
                      "onUpdate:modelValue": ($event) => broadcastForm.subjectEn = $event,
                      placeholder: "Optional English subject for en subscribers",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { label: "HTML \u90AE\u4EF6\u6B63\u6587 (\u4E2D\u6587 / \u9ED8\u8BA4\uFF0C\u5E95\u90E8\u81EA\u52A8\u9644\u4E0A\u7B7E\u540D\u4E00\u952E\u9000\u8BA2\u94FE\u63A5)" }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: broadcastForm.htmlZh,
                      "onUpdate:modelValue": ($event) => broadcastForm.htmlZh = $event,
                      rows: 6,
                      class: "w-full font-mono text-xs",
                      placeholder: "<h2>\u6700\u65B0\u66F4\u65B0</h2><p>\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5...</p>"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { label: "HTML \u90AE\u4EF6\u6B63\u6587 (\u82F1\u6587\uFF0C\u9009\u586B\uFF0C\u7559\u7A7A\u5219\u540C\u4E2D\u6587\u6B63\u6587)" }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: broadcastForm.htmlEn,
                      "onUpdate:modelValue": ($event) => broadcastForm.htmlEn = $event,
                      rows: 4,
                      class: "w-full font-mono text-xs",
                      placeholder: "Optional English HTML content for en subscribers"
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/newsletter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=newsletter-BbjGIlU9.mjs.map
