import { b7 as useI18n, I as useRoute, bH as useSupportChat, bA as useSeoMeta, j as _sfc_main$_, f as _sfc_main$J } from './server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as applyTicketReadUpdate, c as __nuxt_component_3, d as __nuxt_component_4, e as __nuxt_component_5 } from './SupportMessageEditor-BVchTApn.mjs';
import { defineComponent, ref, reactive, computed, withCtx, unref, openBlock, createBlock, Fragment, renderList, createVNode, createTextVNode, toDisplayString, createCommentVNode, withModifiers, withDirectives, vModelText, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './layout-B0UZ5KZO.mjs';
import '../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
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
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:zlib';
import 'node:child_process';
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
import 'marked';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tickets",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const route = useRoute();
    const { uploadImages, extractClipboardImages, normalizeAttachments } = useSupportChat();
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
    const replyFileInputRef = ref(null);
    const replyAttachments = ref([]);
    const uploadingReplyImage = ref(false);
    const createModalOpen = ref(false);
    const creating = ref(false);
    const createError = ref("");
    const createFileInputRef = ref(null);
    const createAttachments = ref([]);
    const uploadingCreateImage = ref(false);
    const previewImageUrl = ref("");
    const newForm = reactive({
      category: "presales",
      title: "",
      contactInfo: "",
      content: ""
    });
    const triggerReplyFileInput = () => {
      if (replyFileInputRef.value) {
        replyFileInputRef.value.value = "";
        replyFileInputRef.value.click();
      }
    };
    const uploadToReply = async (files) => {
      if (!files.length) return;
      const remaining = 5 - replyAttachments.value.length;
      if (remaining <= 0) return;
      uploadingReplyImage.value = true;
      try {
        const uploaded = await uploadImages(files, remaining);
        if (uploaded.length > 0) {
          replyAttachments.value = [...replyAttachments.value, ...uploaded];
        }
      } catch (e) {
        console.error("Failed to upload reply image", e);
      } finally {
        uploadingReplyImage.value = false;
      }
    };
    const handleReplyFileSelect = (e) => {
      var _a;
      const input = e.target;
      if ((_a = input == null ? void 0 : input.files) == null ? void 0 : _a.length) {
        void uploadToReply(Array.from(input.files));
      }
    };
    const handleReplyPaste = (e) => {
      const files = extractClipboardImages(e);
      if (files.length > 0) {
        e.preventDefault();
        void uploadToReply(files);
      }
    };
    const triggerCreateFileInput = () => {
      if (createFileInputRef.value) {
        createFileInputRef.value.value = "";
        createFileInputRef.value.click();
      }
    };
    const uploadToCreate = async (files) => {
      var _a;
      if (!files.length) return;
      const remaining = 5 - createAttachments.value.length;
      if (remaining <= 0) return;
      createError.value = "";
      uploadingCreateImage.value = true;
      try {
        const uploaded = await uploadImages(files, remaining);
        if (uploaded.length > 0) {
          createAttachments.value = [...createAttachments.value, ...uploaded];
        }
      } catch (e) {
        createError.value = ((_a = e == null ? void 0 : e.data) == null ? void 0 : _a.statusMessage) || (e == null ? void 0 : e.message) || "\u56FE\u7247\u4E0A\u4F20\u5931\u8D25";
      } finally {
        uploadingCreateImage.value = false;
      }
    };
    const handleCreateFileSelect = (e) => {
      var _a;
      const input = e.target;
      if ((_a = input == null ? void 0 : input.files) == null ? void 0 : _a.length) {
        void uploadToCreate(Array.from(input.files));
      }
    };
    const handleCreatePaste = (e) => {
      const files = extractClipboardImages(e);
      if (files.length > 0) {
        e.preventDefault();
        void uploadToCreate(files);
      }
    };
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
    const ticketRoute = useRoute();
    const loadList = async () => {
      loading.value = true;
      try {
        const params = { page: 1, pageSize: 30 };
        if (statusFilter.value && statusFilter.value !== "all") params.status = statusFilter.value;
        const res = await $fetch("/api/users/tickets", { params });
        if ((res == null ? void 0 : res.code) === 200 && Array.isArray(res.data)) {
          list.value = res.data;
          const requested = Number(ticketRoute.query.ticket);
          if (!activeTicket.value && (list.value.length > 0 || requested > 0)) {
            await selectTicket(Number.isSafeInteger(requested) && requested > 0 ? requested : list.value[0].id);
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
      if (!activeTicket.value || replySubmitting.value || uploadingReplyImage.value || !replyText.value.trim() && replyAttachments.value.length === 0) return;
      replySubmitting.value = true;
      try {
        const id = activeTicket.value.id;
        const res = await $fetch(`/api/users/tickets/${id}/reply`, {
          method: "POST",
          body: {
            content: replyText.value.trim() || "[\u56FE\u7247\u9644\u4EF6]",
            attachments: replyAttachments.value.length > 0 ? [...replyAttachments.value] : void 0
          }
        });
        if ((res == null ? void 0 : res.code) === 200) {
          replyText.value = "";
          replyAttachments.value = [];
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
      createAttachments.value = [];
      createModalOpen.value = true;
    };
    const submitCreate = async () => {
      var _a, _b, _c;
      if (creating.value || uploadingCreateImage.value || !newForm.content.trim() && createAttachments.value.length === 0) return;
      creating.value = true;
      createError.value = "";
      try {
        const res = await $fetch("/api/inquiries", {
          method: "POST",
          body: {
            category: newForm.category,
            title: newForm.title.trim(),
            contactInfo: newForm.contactInfo.trim(),
            content: newForm.content.trim() || "[\u56FE\u7247\u9644\u4EF6]",
            attachments: createAttachments.value.length > 0 ? [...createAttachments.value] : void 0,
            context: {
              sourcePath: route.fullPath,
              locale: String(locale.value || "zh")
            }
          }
        });
        if ((res == null ? void 0 : res.code) === 200 && ((_a = res.data) == null ? void 0 : _a.id)) {
          createModalOpen.value = false;
          createAttachments.value = [];
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
      const _component_UIcon = _sfc_main$_;
      const _component_SupportUnreadBadge = __nuxt_component_1;
      const _component_SupportConversation = __nuxt_component_2;
      const _component_SupportMessageContent = __nuxt_component_3;
      const _component_SupportMessageReadMark = __nuxt_component_4;
      const _component_SupportMessageEditor = __nuxt_component_5;
      const _component_UModal = _sfc_main$J;
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
                _push2(`<div class="${ssrRenderClass([((_a = activeTicket.value) == null ? void 0 : _a.id) === item.id ? "bg-[#6d4cff]/5 dark:bg-[#6d4cff]/10" : "hover:bg-gray-50/80 dark:hover:bg-white/[0.02]", "p-4 transition-colors cursor-pointer"])}"${_scopeId}><div class="flex items-center justify-between gap-2 mb-1.5"${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}><span class="font-mono text-xs font-semibold text-[#6d4cff] dark:text-[#8ea3ff]"${_scopeId}>${ssrInterpolate(item.ticketNo)}</span>`);
                _push2(ssrRenderComponent(_component_SupportUnreadBadge, {
                  count: item.unreadCount
                }, null, _parent2, _scopeId));
                _push2(`<span class="px-2 py-0.5 rounded-md text-[10px] font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/70"${_scopeId}>${ssrInterpolate(categoryLabel(item.category))}</span></div><span class="${ssrRenderClass([statusBadgeClass(item.status), "px-2 py-0.5 rounded-full text-[10px] font-semibold"])}"${_scopeId}>${ssrInterpolate(statusText(item.status))}</span></div><div class="text-sm font-medium text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(item.title)}</div><div class="mt-2 flex items-center justify-between text-[11px] text-gray-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(formatTime(item.lastRepliedAt || item.createdAt))}</span>`);
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
              _push2(`<!--[--><div class="px-6 py-4 border-b border-gray-100 dark:border-white/5 bg-gray-50/70 dark:bg-black/20 flex flex-wrap items-center justify-between gap-3"${_scopeId}><div class="space-y-1 min-w-0"${_scopeId}><div class="flex items-center gap-2 flex-wrap"${_scopeId}><span class="font-mono text-xs font-semibold text-[#6d4cff] dark:text-[#8ea3ff]"${_scopeId}>${ssrInterpolate(activeTicket.value.ticketNo)}</span><span class="${ssrRenderClass([statusBadgeClass(activeTicket.value.status), "px-2 py-0.5 rounded-full text-[10px] font-semibold"])}"${_scopeId}>${ssrInterpolate(statusText(activeTicket.value.status))}</span><span class="text-xs text-gray-400"${_scopeId}> \xB7 ${ssrInterpolate(categoryLabel(activeTicket.value.category))}</span></div><h2 class="text-base font-bold text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(activeTicket.value.title)}</h2></div><span class="text-xs text-gray-400 font-mono"${_scopeId}>${ssrInterpolate(formatTime(activeTicket.value.createdAt))}</span></div>`);
              _push2(ssrRenderComponent(_component_SupportConversation, {
                key: activeTicket.value.id,
                ticket: activeTicket.value,
                active: !detailLoading.value,
                class: "flex-1 p-6 space-y-4 max-h-[460px] overflow-y-auto",
                onRead: ($event) => unref(applyTicketReadUpdate)($event, [list.value, activeTicket.value])
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(messages.value, (msg) => {
                      _push3(`<div class="${ssrRenderClass([msg.senderType === "user" ? "bg-gray-50/70 dark:bg-white/[0.03] border-gray-100 dark:border-white/5" : msg.senderType === "admin" ? "bg-blue-50/60 dark:bg-blue-950/20 border-blue-200/70 dark:border-blue-900/40" : "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200/70 dark:border-emerald-900/40", "rounded-2xl p-4 text-sm space-y-2 border"])}"${_scopeId2}><div class="flex items-center justify-between text-xs"${_scopeId2}><span class="font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: msg.senderType === "admin" ? "ph:shield-check-bold" : msg.senderType === "bot" ? "ph:robot-bold" : "ph:user-bold",
                        class: ["w-3.5 h-3.5", msg.senderType === "admin" ? "text-blue-500" : msg.senderType === "bot" ? "text-emerald-500" : "text-gray-400"]
                      }, null, _parent3, _scopeId2));
                      _push3(` ${ssrInterpolate(senderNameLabel(msg))}</span><span class="text-gray-400 font-mono text-[11px]"${_scopeId2}>${ssrInterpolate(formatTime(msg.createdAt))}</span></div>`);
                      if (msg.content && !(msg.content === "[\u56FE\u7247\u9644\u4EF6]" && unref(normalizeAttachments)(msg.attachments).length > 0)) {
                        _push3(ssrRenderComponent(_component_SupportMessageContent, {
                          content: msg.content,
                          class: "text-gray-700 dark:text-gray-200 text-xs sm:text-sm"
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      if (unref(normalizeAttachments)(msg.attachments).length > 0) {
                        _push3(`<div class="flex flex-wrap gap-2 pt-1"${_scopeId2}><!--[-->`);
                        ssrRenderList(unref(normalizeAttachments)(msg.attachments), (att, idx) => {
                          _push3(`<button type="button" class="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 max-w-[180px] max-h-[140px] cursor-zoom-in"${_scopeId2}><img${ssrRenderAttr("src", att.url)}${ssrRenderAttr("alt", att.name || "attachment")} class="max-w-[180px] max-h-[140px] object-cover"${_scopeId2}></button>`);
                        });
                        _push3(`<!--]--></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(ssrRenderComponent(_component_SupportMessageReadMark, { message: msg }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(messages.value, (msg) => {
                        return openBlock(), createBlock("div", {
                          key: msg.id,
                          class: ["rounded-2xl p-4 text-sm space-y-2 border", msg.senderType === "user" ? "bg-gray-50/70 dark:bg-white/[0.03] border-gray-100 dark:border-white/5" : msg.senderType === "admin" ? "bg-blue-50/60 dark:bg-blue-950/20 border-blue-200/70 dark:border-blue-900/40" : "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200/70 dark:border-emerald-900/40"]
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
                          msg.content && !(msg.content === "[\u56FE\u7247\u9644\u4EF6]" && unref(normalizeAttachments)(msg.attachments).length > 0) ? (openBlock(), createBlock(_component_SupportMessageContent, {
                            key: 0,
                            content: msg.content,
                            class: "text-gray-700 dark:text-gray-200 text-xs sm:text-sm"
                          }, null, 8, ["content"])) : createCommentVNode("", true),
                          unref(normalizeAttachments)(msg.attachments).length > 0 ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "flex flex-wrap gap-2 pt-1"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(normalizeAttachments)(msg.attachments), (att, idx) => {
                              return openBlock(), createBlock("button", {
                                key: att.url || idx,
                                type: "button",
                                class: "rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 max-w-[180px] max-h-[140px] cursor-zoom-in",
                                onClick: ($event) => previewImageUrl.value = att.url
                              }, [
                                createVNode("img", {
                                  src: att.url,
                                  alt: att.name || "attachment",
                                  class: "max-w-[180px] max-h-[140px] object-cover"
                                }, null, 8, ["src", "alt"])
                              ], 8, ["onClick"]);
                            }), 128))
                          ])) : createCommentVNode("", true),
                          createVNode(_component_SupportMessageReadMark, { message: msg }, null, 8, ["message"])
                        ], 2);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (activeTicket.value.status !== "closed") {
                _push2(`<form class="p-4 border-t border-gray-100 dark:border-white/5 bg-gray-50/40 dark:bg-black/10 space-y-3"${_scopeId}>`);
                if (replyAttachments.value.length > 0 || uploadingReplyImage.value) {
                  _push2(`<div class="flex items-center gap-2 overflow-x-auto py-1"${_scopeId}><!--[-->`);
                  ssrRenderList(replyAttachments.value, (att, idx) => {
                    _push2(`<div class="relative w-14 h-14 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black/40 overflow-hidden shrink-0"${_scopeId}><img${ssrRenderAttr("src", att.url)}${ssrRenderAttr("alt", att.name || "attachment")} class="w-full h-full object-cover cursor-zoom-in"${_scopeId}><button type="button" class="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center cursor-pointer"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "ph:x-bold",
                      class: "w-2.5 h-2.5"
                    }, null, _parent2, _scopeId));
                    _push2(`</button></div>`);
                  });
                  _push2(`<!--]-->`);
                  if (uploadingReplyImage.value) {
                    _push2(`<div class="w-14 h-14 rounded-xl border border-dashed border-[#6d4cff] flex items-center justify-center shrink-0"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "ph:spinner",
                      class: "w-4 h-4 animate-spin text-[#6d4cff]"
                    }, null, _parent2, _scopeId));
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(ssrRenderComponent(_component_SupportMessageEditor, {
                  modelValue: replyText.value,
                  "onUpdate:modelValue": ($event) => replyText.value = $event,
                  rows: 3,
                  maxlength: 2e3,
                  placeholder: _ctx.$t("hoxi.contactModal.replyPlaceholder"),
                  class: "w-full",
                  onPaste: handleReplyPaste
                }, null, _parent2, _scopeId));
                _push2(`<div class="flex items-center justify-between gap-2"${_scopeId}><div${_scopeId}><input type="file" accept="image/png,image/jpeg,image/jpg,image/webp,image/gif" multiple class="hidden"${_scopeId}><button type="button"${ssrIncludeBooleanAttr(uploadingReplyImage.value || replyAttachments.value.length >= 5) ? " disabled" : ""} class="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:border-[#6d4cff] disabled:opacity-40 cursor-pointer"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:image-square-bold",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>\u4E0A\u4F20\u622A\u56FE / \u7C98\u8D34 (Ctrl+V)</span></button></div><button type="submit"${ssrIncludeBooleanAttr(replySubmitting.value || uploadingReplyImage.value || !replyText.value.trim() && replyAttachments.value.length === 0) ? " disabled" : ""} class="inline-flex items-center gap-1.5 rounded-xl bg-gray-900 dark:bg-white disabled:opacity-50 px-4 py-2 text-xs font-semibold text-white dark:text-black transition-all cursor-pointer"${_scopeId}>`);
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
                  _push3(`<!--]--></div><div${_scopeId2}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.member.tickets.titleLabel"))}</label><input${ssrRenderAttr("value", newForm.title)} type="text" maxlength="120"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.member.tickets.titlePlaceholder"))} class="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/30 px-3.5 py-2 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff]"${_scopeId2}></div><div${_scopeId2}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.contactModal.contactInfoLabel"))}</label><input${ssrRenderAttr("value", newForm.contactInfo)} type="text" maxlength="100"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.contactModal.contactInfoPlaceholder"))} class="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/30 px-3.5 py-2 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff]"${_scopeId2}></div><div${_scopeId2}><div class="flex items-center justify-between mb-1"${_scopeId2}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.contactModal.contentLabel"))} <span class="text-red-500"${_scopeId2}>*</span></label><button type="button"${ssrIncludeBooleanAttr(uploadingCreateImage.value || createAttachments.value.length >= 5) ? " disabled" : ""} class="inline-flex items-center gap-1 text-xs font-medium text-[#6d4cff] hover:underline disabled:opacity-40 cursor-pointer"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:image-square-bold",
                    class: "w-3.5 h-3.5"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u4E0A\u4F20\u622A\u56FE / \u7C98\u8D34 (Ctrl+V)</span></button><input type="file" accept="image/png,image/jpeg,image/jpg,image/webp,image/gif" multiple class="hidden"${_scopeId2}></div>`);
                  _push3(ssrRenderComponent(_component_SupportMessageEditor, {
                    modelValue: newForm.content,
                    "onUpdate:modelValue": ($event) => newForm.content = $event,
                    rows: 4,
                    maxlength: 2e3,
                    placeholder: _ctx.$t("hoxi.contactModal.contentPlaceholder"),
                    class: "w-full",
                    onPaste: handleCreatePaste
                  }, null, _parent3, _scopeId2));
                  if (createAttachments.value.length > 0 || uploadingCreateImage.value) {
                    _push3(`<div class="mt-2 flex items-center gap-2 overflow-x-auto py-1"${_scopeId2}><!--[-->`);
                    ssrRenderList(createAttachments.value, (att, idx) => {
                      _push3(`<div class="relative w-14 h-14 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black/40 overflow-hidden shrink-0"${_scopeId2}><img${ssrRenderAttr("src", att.url)}${ssrRenderAttr("alt", att.name || "attachment")} class="w-full h-full object-cover cursor-zoom-in"${_scopeId2}><button type="button" class="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center cursor-pointer"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:x-bold",
                        class: "w-2.5 h-2.5"
                      }, null, _parent3, _scopeId2));
                      _push3(`</button></div>`);
                    });
                    _push3(`<!--]-->`);
                    if (uploadingCreateImage.value) {
                      _push3(`<div class="w-14 h-14 rounded-xl border border-dashed border-[#6d4cff] flex items-center justify-center shrink-0"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:spinner",
                        class: "w-4 h-4 animate-spin text-[#6d4cff]"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  if (createError.value) {
                    _push3(`<div class="text-xs text-red-600 dark:text-red-400"${_scopeId2}>${ssrInterpolate(createError.value)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="flex items-center justify-end gap-2 pt-2 border-t border-gray-100 dark:border-white/5"${_scopeId2}><button type="button" class="px-4 py-2 rounded-xl text-xs font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.contactModal.closeLabel"))}</button><button type="submit"${ssrIncludeBooleanAttr(creating.value || uploadingCreateImage.value || !newForm.content.trim() && createAttachments.value.length === 0) ? " disabled" : ""} class="px-4 py-2 rounded-xl text-xs font-semibold bg-[#6d4cff] hover:bg-[#5a3de6] disabled:opacity-50 text-white cursor-pointer"${_scopeId2}>${ssrInterpolate(creating.value ? _ctx.$t("hoxi.contactModal.submittingBtn") : _ctx.$t("hoxi.contactModal.submitBtn"))}</button></div></form>`);
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
                        createVNode("div", { class: "flex items-center justify-between mb-1" }, [
                          createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300" }, [
                            createTextVNode(toDisplayString(_ctx.$t("hoxi.contactModal.contentLabel")) + " ", 1),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          createVNode("button", {
                            type: "button",
                            disabled: uploadingCreateImage.value || createAttachments.value.length >= 5,
                            class: "inline-flex items-center gap-1 text-xs font-medium text-[#6d4cff] hover:underline disabled:opacity-40 cursor-pointer",
                            onClick: triggerCreateFileInput
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:image-square-bold",
                              class: "w-3.5 h-3.5"
                            }),
                            createVNode("span", null, "\u4E0A\u4F20\u622A\u56FE / \u7C98\u8D34 (Ctrl+V)")
                          ], 8, ["disabled"]),
                          createVNode("input", {
                            ref_key: "createFileInputRef",
                            ref: createFileInputRef,
                            type: "file",
                            accept: "image/png,image/jpeg,image/jpg,image/webp,image/gif",
                            multiple: "",
                            class: "hidden",
                            onChange: handleCreateFileSelect
                          }, null, 544)
                        ]),
                        createVNode(_component_SupportMessageEditor, {
                          modelValue: newForm.content,
                          "onUpdate:modelValue": ($event) => newForm.content = $event,
                          rows: 4,
                          maxlength: 2e3,
                          placeholder: _ctx.$t("hoxi.contactModal.contentPlaceholder"),
                          class: "w-full",
                          onPaste: handleCreatePaste
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                        createAttachments.value.length > 0 || uploadingCreateImage.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mt-2 flex items-center gap-2 overflow-x-auto py-1"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(createAttachments.value, (att, idx) => {
                            return openBlock(), createBlock("div", {
                              key: att.url || idx,
                              class: "relative w-14 h-14 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black/40 overflow-hidden shrink-0"
                            }, [
                              createVNode("img", {
                                src: att.url,
                                alt: att.name || "attachment",
                                class: "w-full h-full object-cover cursor-zoom-in",
                                onClick: ($event) => previewImageUrl.value = att.url
                              }, null, 8, ["src", "alt", "onClick"]),
                              createVNode("button", {
                                type: "button",
                                class: "absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center cursor-pointer",
                                onClick: withModifiers(($event) => createAttachments.value.splice(idx, 1), ["stop"])
                              }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:x-bold",
                                  class: "w-2.5 h-2.5"
                                })
                              ], 8, ["onClick"])
                            ]);
                          }), 128)),
                          uploadingCreateImage.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "w-14 h-14 rounded-xl border border-dashed border-[#6d4cff] flex items-center justify-center shrink-0"
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:spinner",
                              class: "w-4 h-4 animate-spin text-[#6d4cff]"
                            })
                          ])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true)
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
                          disabled: creating.value || uploadingCreateImage.value || !newForm.content.trim() && createAttachments.value.length === 0,
                          class: "px-4 py-2 rounded-xl text-xs font-semibold bg-[#6d4cff] hover:bg-[#5a3de6] disabled:opacity-50 text-white cursor-pointer"
                        }, toDisplayString(creating.value ? _ctx.$t("hoxi.contactModal.submittingBtn") : _ctx.$t("hoxi.contactModal.submitBtn")), 9, ["disabled"])
                      ])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (previewImageUrl.value) {
              _push2(`<div class="fixed inset-0 z-[70] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"${_scopeId}><button type="button" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:x-bold",
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
              _push2(`</button><img${ssrRenderAttr("src", previewImageUrl.value)} alt="Preview" class="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
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
                              createVNode(_component_SupportUnreadBadge, {
                                count: item.unreadCount
                              }, null, 8, ["count"]),
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
                      (openBlock(), createBlock(_component_SupportConversation, {
                        key: activeTicket.value.id,
                        ticket: activeTicket.value,
                        active: !detailLoading.value,
                        class: "flex-1 p-6 space-y-4 max-h-[460px] overflow-y-auto",
                        onRead: ($event) => unref(applyTicketReadUpdate)($event, [list.value, activeTicket.value])
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(messages.value, (msg) => {
                            return openBlock(), createBlock("div", {
                              key: msg.id,
                              class: ["rounded-2xl p-4 text-sm space-y-2 border", msg.senderType === "user" ? "bg-gray-50/70 dark:bg-white/[0.03] border-gray-100 dark:border-white/5" : msg.senderType === "admin" ? "bg-blue-50/60 dark:bg-blue-950/20 border-blue-200/70 dark:border-blue-900/40" : "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200/70 dark:border-emerald-900/40"]
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
                              msg.content && !(msg.content === "[\u56FE\u7247\u9644\u4EF6]" && unref(normalizeAttachments)(msg.attachments).length > 0) ? (openBlock(), createBlock(_component_SupportMessageContent, {
                                key: 0,
                                content: msg.content,
                                class: "text-gray-700 dark:text-gray-200 text-xs sm:text-sm"
                              }, null, 8, ["content"])) : createCommentVNode("", true),
                              unref(normalizeAttachments)(msg.attachments).length > 0 ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex flex-wrap gap-2 pt-1"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(normalizeAttachments)(msg.attachments), (att, idx) => {
                                  return openBlock(), createBlock("button", {
                                    key: att.url || idx,
                                    type: "button",
                                    class: "rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 max-w-[180px] max-h-[140px] cursor-zoom-in",
                                    onClick: ($event) => previewImageUrl.value = att.url
                                  }, [
                                    createVNode("img", {
                                      src: att.url,
                                      alt: att.name || "attachment",
                                      class: "max-w-[180px] max-h-[140px] object-cover"
                                    }, null, 8, ["src", "alt"])
                                  ], 8, ["onClick"]);
                                }), 128))
                              ])) : createCommentVNode("", true),
                              createVNode(_component_SupportMessageReadMark, { message: msg }, null, 8, ["message"])
                            ], 2);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["ticket", "active", "onRead"])),
                      activeTicket.value.status !== "closed" ? (openBlock(), createBlock("form", {
                        key: 0,
                        class: "p-4 border-t border-gray-100 dark:border-white/5 bg-gray-50/40 dark:bg-black/10 space-y-3",
                        onSubmit: withModifiers(sendReply, ["prevent"])
                      }, [
                        replyAttachments.value.length > 0 || uploadingReplyImage.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex items-center gap-2 overflow-x-auto py-1"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(replyAttachments.value, (att, idx) => {
                            return openBlock(), createBlock("div", {
                              key: att.url || idx,
                              class: "relative w-14 h-14 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black/40 overflow-hidden shrink-0"
                            }, [
                              createVNode("img", {
                                src: att.url,
                                alt: att.name || "attachment",
                                class: "w-full h-full object-cover cursor-zoom-in",
                                onClick: ($event) => previewImageUrl.value = att.url
                              }, null, 8, ["src", "alt", "onClick"]),
                              createVNode("button", {
                                type: "button",
                                class: "absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center cursor-pointer",
                                onClick: withModifiers(($event) => replyAttachments.value.splice(idx, 1), ["stop"])
                              }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:x-bold",
                                  class: "w-2.5 h-2.5"
                                })
                              ], 8, ["onClick"])
                            ]);
                          }), 128)),
                          uploadingReplyImage.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "w-14 h-14 rounded-xl border border-dashed border-[#6d4cff] flex items-center justify-center shrink-0"
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:spinner",
                              class: "w-4 h-4 animate-spin text-[#6d4cff]"
                            })
                          ])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        createVNode(_component_SupportMessageEditor, {
                          modelValue: replyText.value,
                          "onUpdate:modelValue": ($event) => replyText.value = $event,
                          rows: 3,
                          maxlength: 2e3,
                          placeholder: _ctx.$t("hoxi.contactModal.replyPlaceholder"),
                          class: "w-full",
                          onPaste: handleReplyPaste
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                        createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                          createVNode("div", null, [
                            createVNode("input", {
                              ref_key: "replyFileInputRef",
                              ref: replyFileInputRef,
                              type: "file",
                              accept: "image/png,image/jpeg,image/jpg,image/webp,image/gif",
                              multiple: "",
                              class: "hidden",
                              onChange: handleReplyFileSelect
                            }, null, 544),
                            createVNode("button", {
                              type: "button",
                              disabled: uploadingReplyImage.value || replyAttachments.value.length >= 5,
                              class: "inline-flex items-center gap-1.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:border-[#6d4cff] disabled:opacity-40 cursor-pointer",
                              onClick: triggerReplyFileInput
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:image-square-bold",
                                class: "w-4 h-4"
                              }),
                              createVNode("span", null, "\u4E0A\u4F20\u622A\u56FE / \u7C98\u8D34 (Ctrl+V)")
                            ], 8, ["disabled"])
                          ]),
                          createVNode("button", {
                            type: "submit",
                            disabled: replySubmitting.value || uploadingReplyImage.value || !replyText.value.trim() && replyAttachments.value.length === 0,
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
                      createVNode("div", { class: "flex items-center justify-between mb-1" }, [
                        createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300" }, [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.contactModal.contentLabel")) + " ", 1),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        createVNode("button", {
                          type: "button",
                          disabled: uploadingCreateImage.value || createAttachments.value.length >= 5,
                          class: "inline-flex items-center gap-1 text-xs font-medium text-[#6d4cff] hover:underline disabled:opacity-40 cursor-pointer",
                          onClick: triggerCreateFileInput
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:image-square-bold",
                            class: "w-3.5 h-3.5"
                          }),
                          createVNode("span", null, "\u4E0A\u4F20\u622A\u56FE / \u7C98\u8D34 (Ctrl+V)")
                        ], 8, ["disabled"]),
                        createVNode("input", {
                          ref_key: "createFileInputRef",
                          ref: createFileInputRef,
                          type: "file",
                          accept: "image/png,image/jpeg,image/jpg,image/webp,image/gif",
                          multiple: "",
                          class: "hidden",
                          onChange: handleCreateFileSelect
                        }, null, 544)
                      ]),
                      createVNode(_component_SupportMessageEditor, {
                        modelValue: newForm.content,
                        "onUpdate:modelValue": ($event) => newForm.content = $event,
                        rows: 4,
                        maxlength: 2e3,
                        placeholder: _ctx.$t("hoxi.contactModal.contentPlaceholder"),
                        class: "w-full",
                        onPaste: handleCreatePaste
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                      createAttachments.value.length > 0 || uploadingCreateImage.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mt-2 flex items-center gap-2 overflow-x-auto py-1"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(createAttachments.value, (att, idx) => {
                          return openBlock(), createBlock("div", {
                            key: att.url || idx,
                            class: "relative w-14 h-14 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black/40 overflow-hidden shrink-0"
                          }, [
                            createVNode("img", {
                              src: att.url,
                              alt: att.name || "attachment",
                              class: "w-full h-full object-cover cursor-zoom-in",
                              onClick: ($event) => previewImageUrl.value = att.url
                            }, null, 8, ["src", "alt", "onClick"]),
                            createVNode("button", {
                              type: "button",
                              class: "absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center cursor-pointer",
                              onClick: withModifiers(($event) => createAttachments.value.splice(idx, 1), ["stop"])
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:x-bold",
                                class: "w-2.5 h-2.5"
                              })
                            ], 8, ["onClick"])
                          ]);
                        }), 128)),
                        uploadingCreateImage.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "w-14 h-14 rounded-xl border border-dashed border-[#6d4cff] flex items-center justify-center shrink-0"
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:spinner",
                            class: "w-4 h-4 animate-spin text-[#6d4cff]"
                          })
                        ])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true)
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
                        disabled: creating.value || uploadingCreateImage.value || !newForm.content.trim() && createAttachments.value.length === 0,
                        class: "px-4 py-2 rounded-xl text-xs font-semibold bg-[#6d4cff] hover:bg-[#5a3de6] disabled:opacity-50 text-white cursor-pointer"
                      }, toDisplayString(creating.value ? _ctx.$t("hoxi.contactModal.submittingBtn") : _ctx.$t("hoxi.contactModal.submitBtn")), 9, ["disabled"])
                    ])
                  ], 32)
                ]),
                _: 1
              }, 8, ["open", "onUpdate:open"]),
              previewImageUrl.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-[70] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4",
                onClick: ($event) => previewImageUrl.value = ""
              }, [
                createVNode("button", {
                  type: "button",
                  class: "absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer",
                  onClick: withModifiers(($event) => previewImageUrl.value = "", ["stop"])
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:x-bold",
                    class: "w-5 h-5"
                  })
                ], 8, ["onClick"]),
                createVNode("img", {
                  src: previewImageUrl.value,
                  alt: "Preview",
                  class: "max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl",
                  onClick: withModifiers(() => {
                  }, ["stop"])
                }, null, 8, ["src", "onClick"])
              ], 8, ["onClick"])) : createCommentVNode("", true)
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
//# sourceMappingURL=tickets-CJxPGgRN.mjs.map
