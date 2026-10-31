import { u as useI18n, H as useRoute, bu as useSeoMeta, j as _sfc_main$Y, f as _sfc_main$I } from './server.mjs';
import { defineComponent, ref, reactive, computed, withCtx, createVNode, withModifiers, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, vModelText, createTextVNode, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './layout-BygO2qvg.mjs';
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
import 'node:fs/promises';
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
  __name: "tickets",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const route = useRoute();
    useSeoMeta({
      title: () => `${t("hoxi.member.tickets.title")} \xB7 ${t("hoxi.brand.name")}`
    });
    const loading = ref(false);
    const list = ref([]);
    const statusFilter = ref("all");
    const activeTicket = ref(null);
    const messages = ref([]);
    const detailLoading = ref(false);
    const replyText = ref("");
    const replySubmitting = ref(false);
    const createModalOpen = ref(false);
    const creating = ref(false);
    const createError = ref("");
    const newForm = reactive({
      category: "presales",
      title: "",
      contactInfo: "",
      content: ""
    });
    const statusFilterItems = computed(() => [
      { value: "all", label: t("hoxi.member.tickets.filterAll") },
      { value: "open", label: t("hoxi.contactModal.statusOpen") },
      { value: "in_progress", label: t("hoxi.contactModal.statusInProgress") },
      { value: "resolved", label: t("hoxi.contactModal.statusResolved") }
    ]);
    const categoryItems = computed(() => [
      { value: "presales", label: t("hoxi.contactModal.catPresales") },
      { value: "cooperation", label: t("hoxi.contactModal.catCooperation") },
      { value: "feedback", label: t("hoxi.contactModal.catFeedback") },
      { value: "technical", label: t("hoxi.contactModal.catTechnical") }
    ]);
    const categoryLabel = (cat) => {
      const found = categoryItems.value.find((item) => item.value === cat);
      return found ? found.label : cat;
    };
    const statusText = (status) => {
      switch (status) {
        case "open":
          return t("hoxi.contactModal.statusOpen");
        case "in_progress":
          return t("hoxi.contactModal.statusInProgress");
        case "auto_resolved":
          return t("hoxi.contactModal.statusAutoResolved");
        case "resolved":
          return t("hoxi.contactModal.statusResolved");
        case "closed":
          return t("hoxi.contactModal.statusClosed");
        default:
          return status;
      }
    };
    const statusBadgeClass = (status) => {
      switch (status) {
        case "open":
          return "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300";
        case "in_progress":
          return "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300";
        case "auto_resolved":
        case "resolved":
          return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300";
        default:
          return "bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400";
      }
    };
    const senderNameLabel = (msg) => {
      if (msg.senderType === "user") return msg.senderName || t("hoxi.contactModal.senderUser");
      if (msg.senderType === "admin") return t("hoxi.contactModal.senderAdmin");
      if (msg.senderType === "bot") return t("hoxi.contactModal.senderBot");
      return t("hoxi.contactModal.senderSystem");
    };
    const formatTime = (time) => {
      if (!time) return "-";
      return new Date(time).toLocaleString(locale.value === "en" ? "en-US" : "zh-CN", { hour12: false });
    };
    const selectFilter = (val) => {
      statusFilter.value = val;
      void loadList();
    };
    const loadList = async () => {
      loading.value = true;
      try {
        const params = { page: 1, pageSize: 30 };
        if (statusFilter.value && statusFilter.value !== "all") params.status = statusFilter.value;
        const res = await $fetch("/api/users/tickets", { params });
        if ((res == null ? void 0 : res.code) === 200 && Array.isArray(res.data)) {
          list.value = res.data;
          if (!activeTicket.value && list.value.length > 0) {
            await selectTicket(list.value[0].id);
          }
        }
      } catch (e) {
        console.error("Failed to load user tickets", e);
      } finally {
        loading.value = false;
      }
    };
    const selectTicket = async (id) => {
      var _a;
      detailLoading.value = true;
      try {
        const res = await $fetch(`/api/users/tickets/${id}`);
        if ((res == null ? void 0 : res.code) === 200 && ((_a = res.data) == null ? void 0 : _a.ticket)) {
          activeTicket.value = res.data.ticket;
          messages.value = res.data.messages || [];
        }
      } catch (e) {
        console.error("Failed to load ticket detail", e);
      } finally {
        detailLoading.value = false;
      }
    };
    const sendReply = async () => {
      if (!activeTicket.value || replySubmitting.value || !replyText.value.trim()) return;
      replySubmitting.value = true;
      try {
        const id = activeTicket.value.id;
        const res = await $fetch(`/api/users/tickets/${id}/reply`, {
          method: "POST",
          body: { content: replyText.value.trim() }
        });
        if ((res == null ? void 0 : res.code) === 200) {
          replyText.value = "";
          await selectTicket(id);
          void loadList();
        }
      } catch (e) {
        console.error("Failed to send reply", e);
      } finally {
        replySubmitting.value = false;
      }
    };
    const openCreateModal = () => {
      createError.value = "";
      newForm.title = "";
      newForm.content = "";
      createModalOpen.value = true;
    };
    const submitCreate = async () => {
      var _a, _b, _c;
      if (creating.value || !newForm.content.trim()) return;
      creating.value = true;
      createError.value = "";
      try {
        const res = await $fetch("/api/inquiries", {
          method: "POST",
          body: {
            category: newForm.category,
            title: newForm.title.trim(),
            contactInfo: newForm.contactInfo.trim(),
            content: newForm.content.trim(),
            context: {
              sourcePath: route.fullPath,
              locale: String(locale.value || "zh")
            }
          }
        });
        if ((res == null ? void 0 : res.code) === 200 && ((_a = res.data) == null ? void 0 : _a.id)) {
          createModalOpen.value = false;
          await loadList();
          await selectTicket(res.data.id);
        }
      } catch (e) {
        createError.value = ((_b = e == null ? void 0 : e.data) == null ? void 0 : _b.statusMessage) || ((_c = e == null ? void 0 : e.data) == null ? void 0 : _c.message) || (e == null ? void 0 : e.message) || t("hoxi.member.common.actionFailed");
      } finally {
        creating.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$Y;
      const _component_UModal = _sfc_main$I;
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hoxi.member.tickets.title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hoxi.member.tickets.title")), 1)
            ];
          }
        }),
        subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-gray-700 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.tickets.subtitle"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-gray-700 dark:text-gray-400" }, toDisplayString(_ctx.$t("hoxi.member.tickets.subtitle")), 1)
            ];
          }
        }),
        "header-right": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="inline-flex items-center gap-2 rounded-xl bg-gray-900 dark:bg-white px-4 py-2.5 text-xs font-semibold text-white dark:text-black hover:opacity-90 transition-all cursor-pointer shadow-xs"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:plus-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.tickets.createBtn"))}</span></button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "inline-flex items-center gap-2 rounded-xl bg-gray-900 dark:bg-white px-4 py-2.5 text-xs font-semibold text-white dark:text-black hover:opacity-90 transition-all cursor-pointer shadow-xs",
                onClick: openCreateModal
              }, [
                createVNode(_component_UIcon, {
                  name: "ph:plus-bold",
                  class: "w-4 h-4"
                }),
                createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.tickets.createBtn")), 1)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 lg:grid-cols-12 gap-5"${_scopeId}><div class="lg:col-span-5 space-y-4"${_scopeId}><div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm"${_scopeId}><div class="p-3.5 border-b border-gray-100 dark:border-white/5 flex items-center justify-between gap-2 bg-gray-50/70 dark:bg-black/20"${_scopeId}><div class="flex flex-wrap items-center gap-1"${_scopeId}><!--[-->`);
            ssrRenderList(statusFilterItems.value, (tab) => {
              _push2(`<button type="button" class="${ssrRenderClass([statusFilter.value === tab.value ? "bg-gray-900 dark:bg-white text-white dark:text-black font-semibold" : "text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white", "px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer"])}"${_scopeId}>${ssrInterpolate(tab.label)}</button>`);
            });
            _push2(`<!--]--></div><button type="button" class="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-clockwise",
              class: ["w-4 h-4", { "animate-spin": loading.value }]
            }, null, _parent2, _scopeId));
            _push2(`</button></div>`);
            if (loading.value && list.value.length === 0) {
              _push2(`<div class="p-12 text-center text-xs text-gray-400"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:spinner",
                class: "w-5 h-5 animate-spin mx-auto mb-2 text-[#6d4cff]"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("hoxi.member.common.loading"))}</div>`);
            } else if (list.value.length === 0) {
              _push2(`<div class="p-10 text-center space-y-3"${_scopeId}><div class="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mx-auto text-gray-400"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:chats-teardrop-duotone",
                class: "w-6 h-6"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="space-y-1"${_scopeId}><p class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.tickets.empty"))}</p><p class="text-xs text-gray-500 dark:text-white/50 max-w-xs mx-auto leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.tickets.emptyDesc"))}</p></div><button type="button" class="inline-flex items-center gap-1.5 rounded-xl bg-[#6d4cff] hover:bg-[#5a3de6] px-4 py-2 text-xs font-semibold text-white transition-colors cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:paper-plane-tilt-bold",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.tickets.createBtn"))}</span></button></div>`);
            } else {
              _push2(`<div class="divide-y divide-gray-100 dark:divide-white/5 max-h-[620px] overflow-y-auto"${_scopeId}><!--[-->`);
              ssrRenderList(list.value, (item) => {
                var _a;
                _push2(`<div class="${ssrRenderClass([((_a = activeTicket.value) == null ? void 0 : _a.id) === item.id ? "bg-[#6d4cff]/5 dark:bg-[#6d4cff]/10" : "hover:bg-gray-50/80 dark:hover:bg-white/[0.02]", "p-4 transition-colors cursor-pointer"])}"${_scopeId}><div class="flex items-center justify-between gap-2 mb-1.5"${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}><span class="font-mono text-xs font-semibold text-[#6d4cff] dark:text-[#8ea3ff]"${_scopeId}>${ssrInterpolate(item.ticketNo)}</span><span class="px-2 py-0.5 rounded-md text-[10px] font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/70"${_scopeId}>${ssrInterpolate(categoryLabel(item.category))}</span></div><span class="${ssrRenderClass([statusBadgeClass(item.status), "px-2 py-0.5 rounded-full text-[10px] font-semibold"])}"${_scopeId}>${ssrInterpolate(statusText(item.status))}</span></div><div class="text-sm font-medium text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(item.title)}</div><div class="mt-2 flex items-center justify-between text-[11px] text-gray-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(formatTime(item.lastRepliedAt || item.createdAt))}</span>`);
                if (item.lastRepliedBy === "admin") {
                  _push2(`<span class="text-emerald-600 dark:text-emerald-400 font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.contactModal.statusResolved"))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div></div><div class="lg:col-span-7"${_scopeId}><div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm min-h-[480px] flex flex-col"${_scopeId}>`);
            if (detailLoading.value) {
              _push2(`<div class="flex-1 flex flex-col items-center justify-center p-12 text-xs text-gray-400"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:spinner",
                class: "w-6 h-6 animate-spin mb-2 text-[#6d4cff]"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("hoxi.member.common.loading"))}</div>`);
            } else if (!activeTicket.value) {
              _push2(`<div class="flex-1 flex flex-col items-center justify-center p-12 text-center text-gray-400 space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:chat-centered-text-duotone",
                class: "w-10 h-10 opacity-40"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-xs"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.tickets.subtitle"))}</p></div>`);
            } else {
              _push2(`<!--[--><div class="px-6 py-4 border-b border-gray-100 dark:border-white/5 bg-gray-50/70 dark:bg-black/20 flex flex-wrap items-center justify-between gap-3"${_scopeId}><div class="space-y-1 min-w-0"${_scopeId}><div class="flex items-center gap-2 flex-wrap"${_scopeId}><span class="font-mono text-xs font-semibold text-[#6d4cff] dark:text-[#8ea3ff]"${_scopeId}>${ssrInterpolate(activeTicket.value.ticketNo)}</span><span class="${ssrRenderClass([statusBadgeClass(activeTicket.value.status), "px-2 py-0.5 rounded-full text-[10px] font-semibold"])}"${_scopeId}>${ssrInterpolate(statusText(activeTicket.value.status))}</span><span class="text-xs text-gray-400"${_scopeId}> \xB7 ${ssrInterpolate(categoryLabel(activeTicket.value.category))}</span></div><h2 class="text-base font-bold text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(activeTicket.value.title)}</h2></div><span class="text-xs text-gray-400 font-mono"${_scopeId}>${ssrInterpolate(formatTime(activeTicket.value.createdAt))}</span></div><div class="flex-1 p-6 space-y-4 max-h-[460px] overflow-y-auto"${_scopeId}><!--[-->`);
              ssrRenderList(messages.value, (msg) => {
                _push2(`<div class="${ssrRenderClass([msg.senderType === "user" ? "bg-gray-50/70 dark:bg-white/[0.03] border-gray-100 dark:border-white/5" : msg.senderType === "admin" ? "bg-blue-50/60 dark:bg-blue-950/20 border-blue-200/70 dark:border-blue-900/40" : "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200/70 dark:border-emerald-900/40", "rounded-2xl p-4 text-sm space-y-1.5 border"])}"${_scopeId}><div class="flex items-center justify-between text-xs"${_scopeId}><span class="font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: msg.senderType === "admin" ? "ph:shield-check-bold" : msg.senderType === "bot" ? "ph:robot-bold" : "ph:user-bold",
                  class: ["w-3.5 h-3.5", msg.senderType === "admin" ? "text-blue-500" : msg.senderType === "bot" ? "text-emerald-500" : "text-gray-400"]
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(senderNameLabel(msg))}</span><span class="text-gray-400 font-mono text-[11px]"${_scopeId}>${ssrInterpolate(formatTime(msg.createdAt))}</span></div><div class="text-gray-700 dark:text-gray-200 whitespace-pre-wrap leading-relaxed text-xs sm:text-sm"${_scopeId}>${ssrInterpolate(msg.content)}</div></div>`);
              });
              _push2(`<!--]--></div>`);
              if (activeTicket.value.status !== "closed") {
                _push2(`<form class="p-4 border-t border-gray-100 dark:border-white/5 bg-gray-50/40 dark:bg-black/10 space-y-3"${_scopeId}><textarea rows="3" maxlength="2000"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.contactModal.replyPlaceholder"))} class="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#121215] px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#6d4cff] resize-none"${_scopeId}>${ssrInterpolate(replyText.value)}</textarea><div class="flex items-center justify-end"${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(replySubmitting.value || !replyText.value.trim()) ? " disabled" : ""} class="inline-flex items-center gap-1.5 rounded-xl bg-gray-900 dark:bg-white disabled:opacity-50 px-4 py-2 text-xs font-semibold text-white dark:text-black transition-all cursor-pointer"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:paper-plane-tilt-bold",
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(replySubmitting.value ? _ctx.$t("hoxi.contactModal.sendingReplyBtn") : _ctx.$t("hoxi.contactModal.sendReplyBtn"))}</span></button></div></form>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            }
            _push2(`</div></div></div>`);
            _push2(ssrRenderComponent(_component_UModal, {
              open: createModalOpen.value,
              "onUpdate:open": ($event) => createModalOpen.value = $event,
              ui: { content: "sm:max-w-lg bg-white dark:bg-[#1a1a1e] rounded-3xl border border-gray-100 dark:border-white/10 shadow-2xl overflow-hidden" }
            }, {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form class="p-6 space-y-4"${_scopeId2}><div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-white/5"${_scopeId2}><h3 class="text-base font-bold text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.member.tickets.createBtn"))}</h3><button type="button" class="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:x-bold",
                    class: "w-4 h-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button></div><div class="flex flex-wrap gap-1.5"${_scopeId2}><!--[-->`);
                  ssrRenderList(categoryItems.value, (cat) => {
                    _push3(`<button type="button" class="${ssrRenderClass([newForm.category === cat.value ? "bg-[#6d4cff] text-white border-[#6d4cff]" : "bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/70 border-gray-200 dark:border-white/10", "px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer"])}"${_scopeId2}>${ssrInterpolate(cat.label)}</button>`);
                  });
                  _push3(`<!--]--></div><div${_scopeId2}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.member.tickets.titleLabel"))}</label><input${ssrRenderAttr("value", newForm.title)} type="text" maxlength="120"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.member.tickets.titlePlaceholder"))} class="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/30 px-3.5 py-2 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff]"${_scopeId2}></div><div${_scopeId2}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.contactModal.contactInfoLabel"))}</label><input${ssrRenderAttr("value", newForm.contactInfo)} type="text" maxlength="100"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.contactModal.contactInfoPlaceholder"))} class="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/30 px-3.5 py-2 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff]"${_scopeId2}></div><div${_scopeId2}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.contactModal.contentLabel"))} <span class="text-red-500"${_scopeId2}>*</span></label><textarea rows="4" maxlength="2000" required${ssrRenderAttr("placeholder", _ctx.$t("hoxi.contactModal.contentPlaceholder"))} class="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/30 px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff] resize-y"${_scopeId2}>${ssrInterpolate(newForm.content)}</textarea></div>`);
                  if (createError.value) {
                    _push3(`<div class="text-xs text-red-600 dark:text-red-400"${_scopeId2}>${ssrInterpolate(createError.value)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="flex items-center justify-end gap-2 pt-2 border-t border-gray-100 dark:border-white/5"${_scopeId2}><button type="button" class="px-4 py-2 rounded-xl text-xs font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.contactModal.closeLabel"))}</button><button type="submit"${ssrIncludeBooleanAttr(creating.value || !newForm.content.trim()) ? " disabled" : ""} class="px-4 py-2 rounded-xl text-xs font-semibold bg-[#6d4cff] hover:bg-[#5a3de6] disabled:opacity-50 text-white cursor-pointer"${_scopeId2}>${ssrInterpolate(creating.value ? _ctx.$t("hoxi.contactModal.submittingBtn") : _ctx.$t("hoxi.contactModal.submitBtn"))}</button></div></form>`);
                } else {
                  return [
                    createVNode("form", {
                      class: "p-6 space-y-4",
                      onSubmit: withModifiers(submitCreate, ["prevent"])
                    }, [
                      createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-gray-100 dark:border-white/5" }, [
                        createVNode("h3", { class: "text-base font-bold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.member.tickets.createBtn")), 1),
                        createVNode("button", {
                          type: "button",
                          class: "p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer",
                          onClick: ($event) => createModalOpen.value = false
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:x-bold",
                            class: "w-4 h-4"
                          })
                        ], 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "flex flex-wrap gap-1.5" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(categoryItems.value, (cat) => {
                          return openBlock(), createBlock("button", {
                            key: cat.value,
                            type: "button",
                            class: ["px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer", newForm.category === cat.value ? "bg-[#6d4cff] text-white border-[#6d4cff]" : "bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/70 border-gray-200 dark:border-white/10"],
                            onClick: ($event) => newForm.category = cat.value
                          }, toDisplayString(cat.label), 11, ["onClick"]);
                        }), 128))
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(_ctx.$t("hoxi.member.tickets.titleLabel")), 1),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => newForm.title = $event,
                          type: "text",
                          maxlength: "120",
                          placeholder: _ctx.$t("hoxi.member.tickets.titlePlaceholder"),
                          class: "w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/30 px-3.5 py-2 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff]"
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, newForm.title]
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(_ctx.$t("hoxi.contactModal.contactInfoLabel")), 1),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => newForm.contactInfo = $event,
                          type: "text",
                          maxlength: "100",
                          placeholder: _ctx.$t("hoxi.contactModal.contactInfoPlaceholder"),
                          class: "w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/30 px-3.5 py-2 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff]"
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, newForm.contactInfo]
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.contactModal.contentLabel")) + " ", 1),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => newForm.content = $event,
                          rows: "4",
                          maxlength: "2000",
                          required: "",
                          placeholder: _ctx.$t("hoxi.contactModal.contentPlaceholder"),
                          class: "w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/30 px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff] resize-y"
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, newForm.content]
                        ])
                      ]),
                      createError.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-xs text-red-600 dark:text-red-400"
                      }, toDisplayString(createError.value), 1)) : createCommentVNode("", true),
                      createVNode("div", { class: "flex items-center justify-end gap-2 pt-2 border-t border-gray-100 dark:border-white/5" }, [
                        createVNode("button", {
                          type: "button",
                          class: "px-4 py-2 rounded-xl text-xs font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer",
                          onClick: ($event) => createModalOpen.value = false
                        }, toDisplayString(_ctx.$t("hoxi.contactModal.closeLabel")), 9, ["onClick"]),
                        createVNode("button", {
                          type: "submit",
                          disabled: creating.value || !newForm.content.trim(),
                          class: "px-4 py-2 rounded-xl text-xs font-semibold bg-[#6d4cff] hover:bg-[#5a3de6] disabled:opacity-50 text-white cursor-pointer"
                        }, toDisplayString(creating.value ? _ctx.$t("hoxi.contactModal.submittingBtn") : _ctx.$t("hoxi.contactModal.submitBtn")), 9, ["disabled"])
                      ])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-5" }, [
                createVNode("div", { class: "lg:col-span-5 space-y-4" }, [
                  createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm" }, [
                    createVNode("div", { class: "p-3.5 border-b border-gray-100 dark:border-white/5 flex items-center justify-between gap-2 bg-gray-50/70 dark:bg-black/20" }, [
                      createVNode("div", { class: "flex flex-wrap items-center gap-1" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(statusFilterItems.value, (tab) => {
                          return openBlock(), createBlock("button", {
                            key: tab.value,
                            type: "button",
                            class: ["px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer", statusFilter.value === tab.value ? "bg-gray-900 dark:bg-white text-white dark:text-black font-semibold" : "text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white"],
                            onClick: ($event) => selectFilter(tab.value)
                          }, toDisplayString(tab.label), 11, ["onClick"]);
                        }), 128))
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors cursor-pointer",
                        onClick: loadList
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-clockwise",
                          class: ["w-4 h-4", { "animate-spin": loading.value }]
                        }, null, 8, ["class"])
                      ])
                    ]),
                    loading.value && list.value.length === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "p-12 text-center text-xs text-gray-400"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:spinner",
                        class: "w-5 h-5 animate-spin mx-auto mb-2 text-[#6d4cff]"
                      }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("hoxi.member.common.loading")), 1)
                    ])) : list.value.length === 0 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "p-10 text-center space-y-3"
                    }, [
                      createVNode("div", { class: "w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mx-auto text-gray-400" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:chats-teardrop-duotone",
                          class: "w-6 h-6"
                        })
                      ]),
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("p", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.member.tickets.empty")), 1),
                        createVNode("p", { class: "text-xs text-gray-500 dark:text-white/50 max-w-xs mx-auto leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.member.tickets.emptyDesc")), 1)
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "inline-flex items-center gap-1.5 rounded-xl bg-[#6d4cff] hover:bg-[#5a3de6] px-4 py-2 text-xs font-semibold text-white transition-colors cursor-pointer",
                        onClick: openCreateModal
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:paper-plane-tilt-bold",
                          class: "w-3.5 h-3.5"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.tickets.createBtn")), 1)
                      ])
                    ])) : (openBlock(), createBlock("div", {
                      key: 2,
                      class: "divide-y divide-gray-100 dark:divide-white/5 max-h-[620px] overflow-y-auto"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(list.value, (item) => {
                        var _a;
                        return openBlock(), createBlock("div", {
                          key: item.id,
                          class: ["p-4 transition-colors cursor-pointer", ((_a = activeTicket.value) == null ? void 0 : _a.id) === item.id ? "bg-[#6d4cff]/5 dark:bg-[#6d4cff]/10" : "hover:bg-gray-50/80 dark:hover:bg-white/[0.02]"],
                          onClick: ($event) => selectTicket(item.id)
                        }, [
                          createVNode("div", { class: "flex items-center justify-between gap-2 mb-1.5" }, [
                            createVNode("div", { class: "flex items-center gap-1.5" }, [
                              createVNode("span", { class: "font-mono text-xs font-semibold text-[#6d4cff] dark:text-[#8ea3ff]" }, toDisplayString(item.ticketNo), 1),
                              createVNode("span", { class: "px-2 py-0.5 rounded-md text-[10px] font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/70" }, toDisplayString(categoryLabel(item.category)), 1)
                            ]),
                            createVNode("span", {
                              class: ["px-2 py-0.5 rounded-full text-[10px] font-semibold", statusBadgeClass(item.status)]
                            }, toDisplayString(statusText(item.status)), 3)
                          ]),
                          createVNode("div", { class: "text-sm font-medium text-gray-900 dark:text-white truncate" }, toDisplayString(item.title), 1),
                          createVNode("div", { class: "mt-2 flex items-center justify-between text-[11px] text-gray-400" }, [
                            createVNode("span", null, toDisplayString(formatTime(item.lastRepliedAt || item.createdAt)), 1),
                            item.lastRepliedBy === "admin" ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-emerald-600 dark:text-emerald-400 font-medium"
                            }, toDisplayString(_ctx.$t("hoxi.contactModal.statusResolved")), 1)) : createCommentVNode("", true)
                          ])
                        ], 10, ["onClick"]);
                      }), 128))
                    ]))
                  ])
                ]),
                createVNode("div", { class: "lg:col-span-7" }, [
                  createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm min-h-[480px] flex flex-col" }, [
                    detailLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex-1 flex flex-col items-center justify-center p-12 text-xs text-gray-400"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:spinner",
                        class: "w-6 h-6 animate-spin mb-2 text-[#6d4cff]"
                      }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("hoxi.member.common.loading")), 1)
                    ])) : !activeTicket.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex-1 flex flex-col items-center justify-center p-12 text-center text-gray-400 space-y-2"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:chat-centered-text-duotone",
                        class: "w-10 h-10 opacity-40"
                      }),
                      createVNode("p", { class: "text-xs" }, toDisplayString(_ctx.$t("hoxi.member.tickets.subtitle")), 1)
                    ])) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-100 dark:border-white/5 bg-gray-50/70 dark:bg-black/20 flex flex-wrap items-center justify-between gap-3" }, [
                        createVNode("div", { class: "space-y-1 min-w-0" }, [
                          createVNode("div", { class: "flex items-center gap-2 flex-wrap" }, [
                            createVNode("span", { class: "font-mono text-xs font-semibold text-[#6d4cff] dark:text-[#8ea3ff]" }, toDisplayString(activeTicket.value.ticketNo), 1),
                            createVNode("span", {
                              class: ["px-2 py-0.5 rounded-full text-[10px] font-semibold", statusBadgeClass(activeTicket.value.status)]
                            }, toDisplayString(statusText(activeTicket.value.status)), 3),
                            createVNode("span", { class: "text-xs text-gray-400" }, " \xB7 " + toDisplayString(categoryLabel(activeTicket.value.category)), 1)
                          ]),
                          createVNode("h2", { class: "text-base font-bold text-gray-900 dark:text-white truncate" }, toDisplayString(activeTicket.value.title), 1)
                        ]),
                        createVNode("span", { class: "text-xs text-gray-400 font-mono" }, toDisplayString(formatTime(activeTicket.value.createdAt)), 1)
                      ]),
                      createVNode("div", { class: "flex-1 p-6 space-y-4 max-h-[460px] overflow-y-auto" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(messages.value, (msg) => {
                          return openBlock(), createBlock("div", {
                            key: msg.id,
                            class: ["rounded-2xl p-4 text-sm space-y-1.5 border", msg.senderType === "user" ? "bg-gray-50/70 dark:bg-white/[0.03] border-gray-100 dark:border-white/5" : msg.senderType === "admin" ? "bg-blue-50/60 dark:bg-blue-950/20 border-blue-200/70 dark:border-blue-900/40" : "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200/70 dark:border-emerald-900/40"]
                          }, [
                            createVNode("div", { class: "flex items-center justify-between text-xs" }, [
                              createVNode("span", { class: "font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                                createVNode(_component_UIcon, {
                                  name: msg.senderType === "admin" ? "ph:shield-check-bold" : msg.senderType === "bot" ? "ph:robot-bold" : "ph:user-bold",
                                  class: ["w-3.5 h-3.5", msg.senderType === "admin" ? "text-blue-500" : msg.senderType === "bot" ? "text-emerald-500" : "text-gray-400"]
                                }, null, 8, ["name", "class"]),
                                createTextVNode(" " + toDisplayString(senderNameLabel(msg)), 1)
                              ]),
                              createVNode("span", { class: "text-gray-400 font-mono text-[11px]" }, toDisplayString(formatTime(msg.createdAt)), 1)
                            ]),
                            createVNode("div", { class: "text-gray-700 dark:text-gray-200 whitespace-pre-wrap leading-relaxed text-xs sm:text-sm" }, toDisplayString(msg.content), 1)
                          ], 2);
                        }), 128))
                      ]),
                      activeTicket.value.status !== "closed" ? (openBlock(), createBlock("form", {
                        key: 0,
                        class: "p-4 border-t border-gray-100 dark:border-white/5 bg-gray-50/40 dark:bg-black/10 space-y-3",
                        onSubmit: withModifiers(sendReply, ["prevent"])
                      }, [
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => replyText.value = $event,
                          rows: "3",
                          maxlength: "2000",
                          placeholder: _ctx.$t("hoxi.contactModal.replyPlaceholder"),
                          class: "w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#121215] px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#6d4cff] resize-none"
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, replyText.value]
                        ]),
                        createVNode("div", { class: "flex items-center justify-end" }, [
                          createVNode("button", {
                            type: "submit",
                            disabled: replySubmitting.value || !replyText.value.trim(),
                            class: "inline-flex items-center gap-1.5 rounded-xl bg-gray-900 dark:bg-white disabled:opacity-50 px-4 py-2 text-xs font-semibold text-white dark:text-black transition-all cursor-pointer"
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:paper-plane-tilt-bold",
                              class: "w-3.5 h-3.5"
                            }),
                            createVNode("span", null, toDisplayString(replySubmitting.value ? _ctx.$t("hoxi.contactModal.sendingReplyBtn") : _ctx.$t("hoxi.contactModal.sendReplyBtn")), 1)
                          ], 8, ["disabled"])
                        ])
                      ], 32)) : createCommentVNode("", true)
                    ], 64))
                  ])
                ])
              ]),
              createVNode(_component_UModal, {
                open: createModalOpen.value,
                "onUpdate:open": ($event) => createModalOpen.value = $event,
                ui: { content: "sm:max-w-lg bg-white dark:bg-[#1a1a1e] rounded-3xl border border-gray-100 dark:border-white/10 shadow-2xl overflow-hidden" }
              }, {
                content: withCtx(() => [
                  createVNode("form", {
                    class: "p-6 space-y-4",
                    onSubmit: withModifiers(submitCreate, ["prevent"])
                  }, [
                    createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-gray-100 dark:border-white/5" }, [
                      createVNode("h3", { class: "text-base font-bold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.member.tickets.createBtn")), 1),
                      createVNode("button", {
                        type: "button",
                        class: "p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer",
                        onClick: ($event) => createModalOpen.value = false
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:x-bold",
                          class: "w-4 h-4"
                        })
                      ], 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "flex flex-wrap gap-1.5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(categoryItems.value, (cat) => {
                        return openBlock(), createBlock("button", {
                          key: cat.value,
                          type: "button",
                          class: ["px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer", newForm.category === cat.value ? "bg-[#6d4cff] text-white border-[#6d4cff]" : "bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/70 border-gray-200 dark:border-white/10"],
                          onClick: ($event) => newForm.category = cat.value
                        }, toDisplayString(cat.label), 11, ["onClick"]);
                      }), 128))
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(_ctx.$t("hoxi.member.tickets.titleLabel")), 1),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => newForm.title = $event,
                        type: "text",
                        maxlength: "120",
                        placeholder: _ctx.$t("hoxi.member.tickets.titlePlaceholder"),
                        class: "w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/30 px-3.5 py-2 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff]"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, newForm.title]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(_ctx.$t("hoxi.contactModal.contactInfoLabel")), 1),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => newForm.contactInfo = $event,
                        type: "text",
                        maxlength: "100",
                        placeholder: _ctx.$t("hoxi.contactModal.contactInfoPlaceholder"),
                        class: "w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/30 px-3.5 py-2 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff]"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, newForm.contactInfo]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, [
                        createTextVNode(toDisplayString(_ctx.$t("hoxi.contactModal.contentLabel")) + " ", 1),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => newForm.content = $event,
                        rows: "4",
                        maxlength: "2000",
                        required: "",
                        placeholder: _ctx.$t("hoxi.contactModal.contentPlaceholder"),
                        class: "w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/30 px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff] resize-y"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, newForm.content]
                      ])
                    ]),
                    createError.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-xs text-red-600 dark:text-red-400"
                    }, toDisplayString(createError.value), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "flex items-center justify-end gap-2 pt-2 border-t border-gray-100 dark:border-white/5" }, [
                      createVNode("button", {
                        type: "button",
                        class: "px-4 py-2 rounded-xl text-xs font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer",
                        onClick: ($event) => createModalOpen.value = false
                      }, toDisplayString(_ctx.$t("hoxi.contactModal.closeLabel")), 9, ["onClick"]),
                      createVNode("button", {
                        type: "submit",
                        disabled: creating.value || !newForm.content.trim(),
                        class: "px-4 py-2 rounded-xl text-xs font-semibold bg-[#6d4cff] hover:bg-[#5a3de6] disabled:opacity-50 text-white cursor-pointer"
                      }, toDisplayString(creating.value ? _ctx.$t("hoxi.contactModal.submittingBtn") : _ctx.$t("hoxi.contactModal.submitBtn")), 9, ["disabled"])
                    ])
                  ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/user/tickets.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tickets-B7kt7iEV.mjs.map
