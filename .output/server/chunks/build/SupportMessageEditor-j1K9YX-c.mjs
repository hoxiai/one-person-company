import { defineComponent, computed, mergeProps, provide, unref, ref, useModel, watch, withCtx, createTextVNode, toDisplayString, createVNode, withKeys, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, mergeModels, nextTick, inject, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderClass, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { Q as _export_sfc, u as useI18n$1, j as _sfc_main$10, f as _sfc_main$L, d as _sfc_main$X } from './server.mjs';
import { Marked } from 'marked';

function ticketMessageReadStatus(messageId, senderType, state) {
  const position = senderType === "user" ? state.adminLastReadMessageId : state.userLastReadMessageId;
  if (position !== null && position >= messageId) return "read";
  return messageId <= state.readBaselineMessageId ? "unknown" : "unread";
}
function mergeTicketReadState(previous, next) {
  var _a, _b, _c, _d;
  if (!previous) return { ...next };
  const userAdvanced = ((_a = next.userLastReadMessageId) != null ? _a : -1) > ((_b = previous.userLastReadMessageId) != null ? _b : -1);
  const adminAdvanced = ((_c = next.adminLastReadMessageId) != null ? _c : -1) > ((_d = previous.adminLastReadMessageId) != null ? _d : -1);
  return {
    readBaselineMessageId: Math.max(previous.readBaselineMessageId, next.readBaselineMessageId),
    userLastReadMessageId: userAdvanced ? next.userLastReadMessageId : previous.userLastReadMessageId,
    adminLastReadMessageId: adminAdvanced ? next.adminLastReadMessageId : previous.adminLastReadMessageId,
    userLastReadAt: userAdvanced ? next.userLastReadAt : previous.userLastReadAt,
    adminLastReadAt: adminAdvanced ? next.adminLastReadAt : previous.adminLastReadAt
  };
}
function applyTicketReadUpdate(update, records) {
  for (const record of records.flat()) {
    if (!record || record.id !== update.ticketId) continue;
    record.readState = mergeTicketReadState(record.readState, update.readState);
    record.unreadCount = update.unreadCount;
    record.unread = update.unreadCount > 0 ? 1 : 0;
  }
}

const en = {
  edit: "Edit",
  preview: "Preview",
  insertLink: "Insert link",
  linkText: "Link text (optional)",
  linkUrl: "Link address",
  cancel: "Cancel",
  insert: "Insert",
  invalidUrl: "Enter a valid http://, https://, mailto: or /local-path link.",
  tooLong: "The link would exceed the message length limit.",
  hint: "Markdown supported \xB7 URLs are clickable",
  empty: "Nothing to preview yet.",
  bold: "Bold",
  list: "List",
  code: "Code",
  content: "Message",
  enterHint: "Enter to send \xB7 Shift+Enter for a new line",
  unread: "Unread",
  userRead: "Read by customer",
  userUnread: "Not yet read by customer",
  supportRead: "Read by support",
  supportUnread: "Not yet read by support",
  readUnknown: "No read receipt recorded",
  readSyncFailed: "Read status could not be synced. Retrying shortly."
};
const copies = {
  en,
  zh: {
    edit: "\u7F16\u8F91",
    preview: "\u9884\u89C8",
    insertLink: "\u63D2\u5165\u94FE\u63A5",
    linkText: "\u94FE\u63A5\u6587\u5B57\uFF08\u9009\u586B\uFF09",
    linkUrl: "\u94FE\u63A5\u5730\u5740",
    cancel: "\u53D6\u6D88",
    insert: "\u63D2\u5165",
    invalidUrl: "\u8BF7\u8F93\u5165\u6709\u6548\u7684 http://\u3001https://\u3001mailto: \u6216 /\u7AD9\u5185\u8DEF\u5F84\u94FE\u63A5\u3002",
    tooLong: "\u63D2\u5165\u94FE\u63A5\u540E\u5C06\u8D85\u51FA\u6D88\u606F\u5B57\u6570\u9650\u5236\u3002",
    hint: "\u652F\u6301 Markdown \xB7 \u7F51\u5740\u81EA\u52A8\u53EF\u70B9\u51FB",
    empty: "\u6682\u65E0\u53EF\u9884\u89C8\u7684\u5185\u5BB9\u3002",
    bold: "\u52A0\u7C97",
    list: "\u5217\u8868",
    code: "\u4EE3\u7801",
    content: "\u6D88\u606F\u5185\u5BB9",
    enterHint: "Enter \u53D1\u9001 \xB7 Shift+Enter \u6362\u884C",
    unread: "\u672A\u8BFB",
    userRead: "\u7528\u6237\u5DF2\u8BFB",
    userUnread: "\u7528\u6237\u672A\u8BFB",
    supportRead: "\u5BA2\u670D\u5DF2\u8BFB",
    supportUnread: "\u5BA2\u670D\u672A\u8BFB",
    readUnknown: "\u6682\u65E0\u9605\u8BFB\u8BB0\u5F55",
    readSyncFailed: "\u9605\u8BFB\u72B6\u6001\u540C\u6B65\u5931\u8D25\uFF0C\u7A0D\u540E\u91CD\u8BD5\u3002"
  },
  "zh-HK": {
    edit: "\u7DE8\u8F2F",
    preview: "\u9810\u89BD",
    insertLink: "\u63D2\u5165\u9023\u7D50",
    linkText: "\u9023\u7D50\u6587\u5B57\uFF08\u9078\u586B\uFF09",
    linkUrl: "\u9023\u7D50\u5730\u5740",
    cancel: "\u53D6\u6D88",
    insert: "\u63D2\u5165",
    invalidUrl: "\u8ACB\u8F38\u5165\u6709\u6548\u7684 http://\u3001https://\u3001mailto: \u6216 /\u7AD9\u5167\u8DEF\u5F91\u9023\u7D50\u3002",
    tooLong: "\u63D2\u5165\u9023\u7D50\u5F8C\u5C07\u8D85\u51FA\u8A0A\u606F\u5B57\u6578\u9650\u5236\u3002",
    hint: "\u652F\u63F4 Markdown \xB7 \u7DB2\u5740\u81EA\u52D5\u53EF\u9EDE\u64CA",
    empty: "\u66AB\u7121\u53EF\u9810\u89BD\u7684\u5167\u5BB9\u3002",
    bold: "\u7C97\u9AD4",
    list: "\u6E05\u55AE",
    code: "\u7A0B\u5F0F\u78BC",
    content: "\u8A0A\u606F\u5167\u5BB9",
    enterHint: "Enter \u50B3\u9001 \xB7 Shift+Enter \u63DB\u884C",
    unread: "\u672A\u8B80",
    userRead: "\u7528\u6236\u5DF2\u8B80",
    userUnread: "\u7528\u6236\u672A\u8B80",
    supportRead: "\u5BA2\u670D\u5DF2\u8B80",
    supportUnread: "\u5BA2\u670D\u672A\u8B80",
    readUnknown: "\u66AB\u7121\u95B1\u8B80\u8A18\u9304",
    readSyncFailed: "\u95B1\u8B80\u72C0\u614B\u540C\u6B65\u5931\u6557\uFF0C\u7A0D\u5F8C\u91CD\u8A66\u3002"
  },
  ru: {
    edit: "\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440",
    preview: "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440",
    insertLink: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",
    linkText: "\u0422\u0435\u043A\u0441\u0442 \u0441\u0441\u044B\u043B\u043A\u0438 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",
    linkUrl: "\u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438",
    cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
    insert: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C",
    invalidUrl: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 http://, https://, mailto: \u0438\u043B\u0438 /\u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439-\u043F\u0443\u0442\u044C.",
    tooLong: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043F\u0440\u0435\u0432\u044B\u0441\u0438\u0442 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u0438\u043D\u044B \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F.",
    hint: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 Markdown \xB7 \u0410\u0434\u0440\u0435\u0441\u0430 \u043A\u043B\u0438\u043A\u0430\u0431\u0435\u043B\u044C\u043D\u044B",
    empty: "\u041F\u043E\u043A\u0430 \u043D\u0435\u0447\u0435\u0433\u043E \u043F\u0440\u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C.",
    bold: "\u0416\u0438\u0440\u043D\u044B\u0439",
    list: "\u0421\u043F\u0438\u0441\u043E\u043A",
    code: "\u041A\u043E\u0434",
    content: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
    enterHint: "Enter \u2014 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \xB7 Shift+Enter \u2014 \u043D\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430",
    unread: "\u041D\u0435 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E",
    userRead: "\u041F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C",
    userUnread: "\u041D\u0435 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C",
    supportRead: "\u041F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439",
    supportUnread: "\u041D\u0435 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439",
    readUnknown: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u043F\u0440\u043E\u0447\u0442\u0435\u043D\u0438\u0438",
    readSyncFailed: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u043F\u0440\u043E\u0447\u0442\u0435\u043D\u0438\u044F. \u041F\u043E\u0432\u0442\u043E\u0440\u044F\u0435\u043C \u043F\u043E\u043F\u044B\u0442\u043A\u0443."
  }
};
function supportMessageCopy(locale) {
  return copies[locale] || copies[locale.split("-")[0] || "en"] || en;
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SupportUnreadBadge",
  __ssrInlineRender: true,
  props: {
    count: {}
  },
  setup(__props) {
    const { locale } = useI18n$1();
    const copy = computed(() => supportMessageCopy(String(locale.value)));
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.count && __props.count > 0) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: "inline-flex shrink-0 items-center rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-white",
          "aria-label": `${copy.value.unread}: ${__props.count}`
        }, _attrs))}>${ssrInterpolate(copy.value.unread)} ${ssrInterpolate(__props.count > 99 ? "99+" : __props.count)}</span>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SupportUnreadBadge.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$4, { __name: "SupportUnreadBadge" });
const ticketReadContextKey = /* @__PURE__ */ Symbol("ticket-reading");
const useTicketReadContext = () => inject(ticketReadContextKey);
function useTicketReading(options, onRead) {
  var _a;
  const state = ref();
  const syncFailed = ref(false);
  ((_a = options.ticket) == null ? void 0 : _a.unreadCount) || 0;
  const admin = computed(() => Boolean(options.admin));
  const elements = /* @__PURE__ */ new Map();
  const visible = /* @__PURE__ */ new Set();
  computed(() => {
    const ticket = options.ticket;
    if (!(ticket == null ? void 0 : ticket.id)) return "";
    if (options.admin) return `/api/admin/tickets/${ticket.id}/read`;
    return ticket.ticketNo ? `/api/inquiries/${encodeURIComponent(ticket.ticketNo)}/read` : `/api/users/tickets/${ticket.id}/read`;
  });
  async function refresh() {
    return;
  }
  const context = {
    admin,
    state,
    observe(element, messageId) {
      if (!Number.isSafeInteger(messageId) || messageId <= 0) return;
      elements.set(element, messageId);
    },
    unobserve(element) {
      const id = elements.get(element);
      if (id !== void 0) visible.delete(id);
      elements.delete(element);
    }
  };
  watch(() => {
    var _a2;
    return [(_a2 = options.ticket) == null ? void 0 : _a2.id, options.token, options.admin];
  }, (next, previous) => {
    var _a2, _b;
    visible.clear();
    state.value = (_a2 = options.ticket) == null ? void 0 : _a2.readState;
    ((_b = options.ticket) == null ? void 0 : _b.unreadCount) || 0;
    syncFailed.value = false;
    if (next[0] !== previous[0] || next[2] !== previous[2]) elements.clear();
    void nextTick(() => {
      for (const element of elements.keys()) void 0 ;
    });
    void refresh();
  });
  watch(() => {
    var _a2;
    return (_a2 = options.ticket) == null ? void 0 : _a2.readState;
  }, (next) => {
    if (next) state.value = mergeTicketReadState(state.value, next);
  }, { immediate: true });
  watch(() => options.active, () => {
    if (options.active === false) ;
    else {
      void refresh();
      for (const element of elements.keys()) {
      }
    }
  });
  return { context, syncFailed };
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SupportConversation",
  __ssrInlineRender: true,
  props: {
    ticket: {},
    admin: { type: Boolean },
    active: { type: Boolean },
    canMarkRead: { type: Boolean },
    token: {}
  },
  emits: ["read"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { locale } = useI18n$1();
    const copy = computed(() => supportMessageCopy(String(locale.value)));
    const { context, syncFailed } = useTicketReading(props);
    provide(ticketReadContextKey, context);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (unref(syncFailed) && __props.active !== false) {
        _push(`<p class="mt-1 text-[10px] text-amber-600 dark:text-amber-400" role="status">${ssrInterpolate(copy.value.readSyncFailed)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SupportConversation.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$3, { __name: "SupportConversation" });
function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function supportLinkUrl(value) {
  const url = value.trim();
  if (!url || /[\u0000-\u0020\u007f\\]/.test(url)) return null;
  if (/^\/(?!\/)/.test(url) || url.startsWith("#")) return url;
  if (!/^(https?:\/\/|mailto:)/i.test(url)) return null;
  try {
    const parsed = new URL(url);
    if (parsed.protocol === "mailto:") return parsed.pathname ? parsed.href : null;
    if (!parsed.hostname || parsed.username || parsed.password) return null;
    return parsed.href;
  } catch {
    return null;
  }
}
function buildSupportLink(label, destination) {
  const url = supportLinkUrl(destination);
  if (!url) return "";
  const text = (label.trim() || url).replace(/[\r\n]+/g, " ").replace(/[\\`*_[\]<>!~]/g, "\\$&");
  const href = url.replace(/</g, "%3C").replace(/>/g, "%3E");
  return `[${text}](<${href}>)`;
}
function renderLink(href, text, title) {
  const url = supportLinkUrl(href);
  if (!url) return text;
  const titleAttr = title ? ` title="${escapeHtml(title)}"` : "";
  return `<a href="${escapeHtml(url)}"${titleAttr} target="_blank" rel="noopener noreferrer nofollow ugc">${text}</a>`;
}
const supportMarkdown = new Marked({
  gfm: true,
  breaks: true,
  async: false,
  renderer: {
    html({ text }) {
      return escapeHtml(text);
    },
    link({ href, title, tokens }) {
      return renderLink(href, this.parser.parseInline(tokens), title);
    },
    image({ href, text, title }) {
      return renderLink(href, escapeHtml(text || href), title);
    }
  }
});
function renderSupportMarkdown(content) {
  if (!content.trim()) return "";
  return supportMarkdown.parse(content, { async: false }).trim();
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SupportMessageContent",
  __ssrInlineRender: true,
  props: {
    content: {},
    inverted: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const html = computed(() => renderSupportMarkdown(props.content));
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["support-message-content", { "support-message-content-inverted": __props.inverted }]
      }, _attrs))} data-v-8cf92002>${(_a = html.value) != null ? _a : ""}</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SupportMessageContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-8cf92002"]]), { __name: "SupportMessageContent" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SupportMessageReadMark",
  __ssrInlineRender: true,
  props: {
    message: {}
  },
  setup(__props) {
    const props = __props;
    const context = useTicketReadContext();
    const marker = ref(null);
    const { locale } = useI18n$1();
    const copy = computed(() => supportMessageCopy(String(locale.value)));
    const outgoing = computed(() => props.message.senderType === ((context == null ? void 0 : context.admin.value) ? "admin" : "user"));
    const status = computed(() => (context == null ? void 0 : context.state.value) ? ticketMessageReadStatus(Number(props.message.id), props.message.senderType, context.state.value) : void 0);
    const label = computed(() => status.value === "unknown" ? copy.value.readUnknown : (context == null ? void 0 : context.admin.value) ? status.value === "read" ? copy.value.userRead : copy.value.userUnread : status.value === "read" ? copy.value.supportRead : copy.value.supportUnread);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "marker",
        ref: marker,
        class: "min-h-px text-[10px] leading-4 opacity-75",
        "aria-hidden": !outgoing.value || void 0
      }, _attrs))}>`);
      if (outgoing.value && status.value) {
        _push(`<span class="${ssrRenderClass({ "font-medium": status.value === "read" })}">${ssrInterpolate(label.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SupportMessageReadMark.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "SupportMessageReadMark" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SupportMessageEditor",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    rows: { default: 3 },
    maxlength: {},
    placeholder: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    sendOnEnter: { type: Boolean }
  }, {
    "modelValue": { default: "" },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["paste", "submit"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const model = useModel(__props, "modelValue");
    const { locale } = useI18n$1();
    const copy = computed(() => supportMessageCopy(String(locale.value)));
    const textarea = ref(null);
    const preview = ref(false);
    const linkOpen = ref(false);
    const linkLabel = ref("");
    const linkDestination = ref("");
    const linkError = ref("");
    let selection = { start: 0, end: 0 };
    const tools = computed(() => [
      { label: copy.value.bold, icon: "ph:text-b-bold", prefix: "**", suffix: "**" },
      { label: copy.value.list, icon: "ph:list-bullets-bold", prefix: "\n- ", suffix: "" },
      { label: copy.value.code, icon: "ph:code-bold", prefix: "`", suffix: "`" }
    ]);
    async function replaceSelection(text) {
      var _a, _b;
      if (props.disabled) return false;
      const next = model.value.slice(0, selection.start) + text + model.value.slice(selection.end);
      if (props.maxlength && next.length > props.maxlength) return false;
      const caret = selection.start + text.length;
      model.value = next;
      preview.value = false;
      await nextTick();
      (_a = textarea.value) == null ? void 0 : _a.focus();
      (_b = textarea.value) == null ? void 0 : _b.setSelectionRange(caret, caret);
      return true;
    }
    async function insertLink() {
      const markdown = buildSupportLink(linkLabel.value, linkDestination.value);
      if (!markdown) {
        linkError.value = copy.value.invalidUrl;
        return;
      }
      if (!await replaceSelection(markdown)) {
        linkError.value = copy.value.tooLong;
        return;
      }
      linkOpen.value = false;
    }
    watch(model, (value) => {
      if (!value) preview.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$10;
      const _component_SupportMessageContent = __nuxt_component_3;
      const _component_UModal = _sfc_main$L;
      const _component_UButton = _sfc_main$X;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-w-0 space-y-2" }, _attrs))} data-v-2b192177><div class="flex flex-wrap items-center justify-between gap-1 text-xs" data-v-2b192177><div class="flex flex-wrap items-center gap-1" data-v-2b192177><!--[-->`);
      ssrRenderList(tools.value, (tool) => {
        _push(`<button type="button"${ssrIncludeBooleanAttr(__props.disabled || preview.value) ? " disabled" : ""}${ssrRenderAttr("title", tool.label)}${ssrRenderAttr("aria-label", tool.label)} class="editor-tool" data-v-2b192177>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: tool.icon,
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`</button>`);
      });
      _push(`<!--]--><button type="button"${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} class="editor-tool" data-v-2b192177>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:link-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span data-v-2b192177>${ssrInterpolate(copy.value.insertLink)}</span></button></div><div class="flex items-center gap-1" data-v-2b192177><button type="button" class="editor-tool"${ssrRenderAttr("aria-pressed", !preview.value)} data-v-2b192177>${ssrInterpolate(copy.value.edit)}</button><button type="button" class="editor-tool"${ssrRenderAttr("aria-pressed", preview.value)} data-v-2b192177>${ssrInterpolate(copy.value.preview)}</button></div></div>`);
      if (preview.value) {
        _push(`<div class="max-h-52 overflow-y-auto rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100" style="${ssrRenderStyle({ minHeight: `${__props.rows * 1.5 + 1.25}rem` })}" data-v-2b192177>`);
        if (model.value.trim()) {
          _push(ssrRenderComponent(_component_SupportMessageContent, { content: model.value }, null, _parent));
        } else {
          _push(`<p class="text-gray-400" data-v-2b192177>${ssrInterpolate(copy.value.empty)}</p>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<textarea${ssrRenderAttr("rows", __props.rows)}${ssrRenderAttr("maxlength", __props.maxlength)}${ssrRenderAttr("placeholder", __props.placeholder || copy.value.content)}${ssrRenderAttr("aria-label", __props.placeholder || copy.value.content)}${ssrIncludeBooleanAttr(__props.required && !preview.value) ? " required" : ""}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} class="block max-h-52 w-full resize-y rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-950 dark:text-white" style="${ssrRenderStyle(!preview.value ? null : { display: "none" })}" data-v-2b192177>${ssrInterpolate(model.value)}</textarea><div class="flex flex-wrap justify-between gap-1 text-[10px] text-gray-500 dark:text-gray-400" data-v-2b192177><span data-v-2b192177>${ssrInterpolate(copy.value.hint)}</span>`);
      if (__props.maxlength) {
        _push(`<span data-v-2b192177>${ssrInterpolate(model.value.length)}/${ssrInterpolate(__props.maxlength)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.sendOnEnter) {
        _push(`<span data-v-2b192177>${ssrInterpolate(copy.value.enterHint)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: linkOpen.value,
        "onUpdate:open": ($event) => linkOpen.value = $event,
        title: copy.value.insertLink,
        ui: { content: "sm:max-w-md" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4 p-5" data-v-2b192177${_scopeId}><h3 class="text-base font-semibold text-gray-900 dark:text-white" data-v-2b192177${_scopeId}>${ssrInterpolate(copy.value.insertLink)}</h3><label class="block space-y-1 text-sm text-gray-700 dark:text-gray-200" data-v-2b192177${_scopeId}><span data-v-2b192177${_scopeId}>${ssrInterpolate(copy.value.linkText)}</span><input${ssrRenderAttr("value", linkLabel.value)} class="link-input" type="text"${ssrRenderAttr("placeholder", copy.value.linkText)} data-v-2b192177${_scopeId}></label><label class="block space-y-1 text-sm text-gray-700 dark:text-gray-200" data-v-2b192177${_scopeId}><span data-v-2b192177${_scopeId}>${ssrInterpolate(copy.value.linkUrl)}</span><input${ssrRenderAttr("value", linkDestination.value)} class="link-input" type="text" inputmode="url" placeholder="https://example.com/help" data-v-2b192177${_scopeId}></label>`);
            if (linkError.value) {
              _push2(`<p role="alert" class="text-xs text-red-600 dark:text-red-400" data-v-2b192177${_scopeId}>${ssrInterpolate(linkError.value)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex justify-end gap-2" data-v-2b192177${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              type: "button",
              color: "neutral",
              variant: "ghost",
              onClick: ($event) => linkOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(copy.value.cancel)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(copy.value.cancel), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              type: "button",
              disabled: __props.disabled,
              onClick: insertLink
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(copy.value.insert)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(copy.value.insert), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "space-y-4 p-5",
                onKeydown: withKeys(withModifiers(insertLink, ["prevent"]), ["enter"])
              }, [
                createVNode("h3", { class: "text-base font-semibold text-gray-900 dark:text-white" }, toDisplayString(copy.value.insertLink), 1),
                createVNode("label", { class: "block space-y-1 text-sm text-gray-700 dark:text-gray-200" }, [
                  createVNode("span", null, toDisplayString(copy.value.linkText), 1),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => linkLabel.value = $event,
                    class: "link-input",
                    type: "text",
                    placeholder: copy.value.linkText
                  }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                    [vModelText, linkLabel.value]
                  ])
                ]),
                createVNode("label", { class: "block space-y-1 text-sm text-gray-700 dark:text-gray-200" }, [
                  createVNode("span", null, toDisplayString(copy.value.linkUrl), 1),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => linkDestination.value = $event,
                    class: "link-input",
                    type: "text",
                    inputmode: "url",
                    placeholder: "https://example.com/help"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, linkDestination.value]
                  ])
                ]),
                linkError.value ? (openBlock(), createBlock("p", {
                  key: 0,
                  role: "alert",
                  class: "text-xs text-red-600 dark:text-red-400"
                }, toDisplayString(linkError.value), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "flex justify-end gap-2" }, [
                  createVNode(_component_UButton, {
                    type: "button",
                    color: "neutral",
                    variant: "ghost",
                    onClick: ($event) => linkOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(copy.value.cancel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    type: "button",
                    disabled: __props.disabled,
                    onClick: insertLink
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(copy.value.insert), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ], 40, ["onKeydown"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SupportMessageEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-2b192177"]]), { __name: "SupportMessageEditor" });

export { __nuxt_component_1 as _, __nuxt_component_2 as a, applyTicketReadUpdate as b, __nuxt_component_3 as c, __nuxt_component_4 as d, __nuxt_component_5 as e };
//# sourceMappingURL=SupportMessageEditor-j1K9YX-c.mjs.map
