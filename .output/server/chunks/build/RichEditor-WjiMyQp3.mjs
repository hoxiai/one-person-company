import { g as useToast, e as useI18n, k as _sfc_main$B, b as _sfc_main$G } from './server.mjs';
import { defineComponent, ref, computed, shallowRef, watch, mergeProps, withCtx, createVNode, toDisplayString, resolveDynamicComponent, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import { marked } from 'marked';
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

marked.setOptions({
  gfm: true,
  breaks: true
});
function markdownToHtml(markdown) {
  if (!markdown || !markdown.trim()) return "";
  try {
    const html = marked.parse(markdown, { async: false });
    return html.trim();
  } catch (error) {
    console.error("Failed to parse markdown to html:", error);
    return markdown;
  }
}
function regexHtmlToMarkdown(html) {
  let md = html;
  md = md.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  md = md.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "# $1\n\n");
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "## $1\n\n");
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "### $1\n\n");
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, "#### $1\n\n");
  md = md.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, "##### $1\n\n");
  md = md.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, "###### $1\n\n");
  md = md.replace(/<pre[^>]*><code(?: class="language-([a-zA-Z0-9_-]+)")?[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, lang, code) => {
    return `\`\`\`${lang || ""}
${code.trim()}
\`\`\`

`;
  });
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, content) => {
    const lines = content.replace(/<[^>]+>/g, "").trim().split("\n");
    return lines.map((l) => `> ${l.trim()}`).join("\n") + "\n\n";
  });
  md = md.replace(/<(?:strong|b)[^>]*>([\s\S]*?)<\/(?:strong|b)>/gi, "**$1**");
  md = md.replace(/<(?:em|i)[^>]*>([\s\S]*?)<\/(?:em|i)>/gi, "*$1*");
  md = md.replace(/<(?:s|del|strike)[^>]*>([\s\S]*?)<\/(?:s|del|strike)>/gi, "~~$1~~");
  md = md.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, "`$1`");
  md = md.replace(/<a\s+[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)");
  md = md.replace(/<img\s+[^>]*src="([^"]*)"(?:\s+alt="([^"]*)")?[^>]*>/gi, "![$2]($1)");
  md = md.replace(/<hr\s*\/?>/gi, "---\n\n");
  md = md.replace(/<br\s*\/?>/gi, "\n");
  md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "- $1\n");
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "$1\n\n");
  md = md.replace(/<[^>]+>/g, "");
  return md.trim();
}
function htmlToMarkdown(html) {
  if (!html || !html.trim()) return "";
  return regexHtmlToMarkdown(html).replace(/\n{3,}/g, "\n\n").trim();
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RichEditor",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    useToast();
    const { t } = useI18n();
    const currentMode = ref("visual");
    const splitPreview = ref(true);
    const rawHtml = ref(props.modelValue || "");
    const rawMarkdown = ref(htmlToMarkdown(props.modelValue || ""));
    const compiledMarkdownHtml = computed(() => markdownToHtml(rawMarkdown.value));
    const editor = shallowRef(null);
    const EditorContentComponent = shallowRef(null);
    const markdownTextareaRef = ref(null);
    const fileInputRef = ref(null);
    const isUploadingImage = ref(false);
    const onMarkdownInput = () => {
      const html = markdownToHtml(rawMarkdown.value);
      rawHtml.value = html;
      emit("update:modelValue", html);
    };
    const onHtmlInput = () => {
      emit("update:modelValue", rawHtml.value);
    };
    watch(
      () => props.modelValue,
      (value) => {
        const html = value || "";
        if (currentMode.value === "visual") {
          if (editor.value && editor.value.getHTML() !== html) {
            editor.value.commands.setContent(html, { emitUpdate: false });
          }
          rawHtml.value = html;
        } else if (currentMode.value === "markdown") {
          const compiled = markdownToHtml(rawMarkdown.value);
          if (compiled !== html) {
            rawMarkdown.value = htmlToMarkdown(html);
          }
        } else if (currentMode.value === "html") {
          if (rawHtml.value !== html) {
            rawHtml.value = html;
          }
        }
      }
    );
    const insertMarkdownSyntax = (prefix, suffix, defaultText) => {
      const textarea = markdownTextareaRef.value;
      if (!textarea) return;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = rawMarkdown.value.substring(start, end);
      const insertText = selectedText || defaultText;
      const newText = rawMarkdown.value.substring(0, start) + prefix + insertText + suffix + rawMarkdown.value.substring(end);
      rawMarkdown.value = newText;
      nextTick(() => {
        textarea.focus();
        textarea.selectionStart = start + prefix.length;
        textarea.selectionEnd = start + prefix.length + insertText.length;
        onMarkdownInput();
      });
    };
    const insertMarkdownLinePrefix = (prefix) => {
      const textarea = markdownTextareaRef.value;
      if (!textarea) return;
      const start = textarea.selectionStart;
      const value = rawMarkdown.value;
      const lineStart = value.lastIndexOf("\n", start - 1) + 1;
      rawMarkdown.value = value.substring(0, lineStart) + prefix + value.substring(lineStart);
      nextTick(() => {
        textarea.focus();
        textarea.selectionStart = textarea.selectionEnd = start + prefix.length;
        onMarkdownInput();
      });
    };
    const insertMarkdownTable = () => {
      const tableTemplate = "\n| Header 1 | Header 2 |\n| --- | --- |\n| Cell 1 | Cell 2 |\n\n";
      insertMarkdownSyntax("", "", tableTemplate.trim());
    };
    const insertMarkdownLink = () => {
      const url = (void 0).prompt(t("admin.editor.linkPrompt"), "https://");
      if (url) {
        insertMarkdownSyntax("[", `](${url})`, "Link Text");
      }
    };
    const setLink = () => {
      if (!editor.value) return;
      const previousUrl = editor.value.getAttributes("link").href;
      const url = (void 0).prompt(t("admin.editor.linkPrompt"), previousUrl || "https://");
      if (url === null) return;
      if (url === "") {
        editor.value.chain().focus().extendMarkRange("link").unsetLink().run();
        return;
      }
      editor.value.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    };
    const addImagePrompt = () => {
      const url = (void 0).prompt(t("admin.editor.urlPrompt"), "https://");
      if (!url) return;
      if (currentMode.value === "visual" && editor.value) {
        editor.value.chain().focus().setImage({ src: url }).run();
      } else if (currentMode.value === "markdown") {
        insertMarkdownSyntax("![Image](", `${url})`, "");
      } else {
        rawHtml.value += `
<img src="${url}" alt="image" />`;
        onHtmlInput();
      }
    };
    const triggerImageUpload = () => {
      if (fileInputRef.value) {
        fileInputRef.value.click();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UButton = _sfc_main$B;
      const _component_UIcon = _sfc_main$G;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rich-editor border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#121214] flex flex-col shadow-xs" }, _attrs))}><div class="border-b border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/60 p-2 flex flex-wrap gap-1.5 items-center justify-between sticky top-0 z-10 backdrop-blur-xs">`);
      if (currentMode.value === "visual" && editor.value) {
        _push(`<div class="flex flex-wrap gap-1 items-center">`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          class: { "bg-gray-200 dark:bg-gray-800 text-purple-600 dark:text-purple-400": editor.value.isActive("bold") },
          onClick: ($event) => editor.value.chain().focus().toggleBold().run(),
          icon: "ph:text-b-bold",
          title: _ctx.$t("admin.editor.bold")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          class: { "bg-gray-200 dark:bg-gray-800 text-purple-600 dark:text-purple-400": editor.value.isActive("italic") },
          onClick: ($event) => editor.value.chain().focus().toggleItalic().run(),
          icon: "ph:text-italic-bold",
          title: _ctx.$t("admin.editor.italic")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          class: { "bg-gray-200 dark:bg-gray-800 text-purple-600 dark:text-purple-400": editor.value.isActive("strike") },
          onClick: ($event) => editor.value.chain().focus().toggleStrike().run(),
          icon: "ph:text-strikethrough-bold",
          title: _ctx.$t("admin.editor.strike")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          class: { "bg-gray-200 dark:bg-gray-800 text-purple-600 dark:text-purple-400": editor.value.isActive("code") },
          onClick: ($event) => editor.value.chain().focus().toggleCode().run(),
          icon: "ph:code-bold",
          title: _ctx.$t("admin.editor.inlineCode")
        }, null, _parent));
        _push(`<div class="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-0.5"></div>`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          class: { "bg-gray-200 dark:bg-gray-800 text-purple-600 dark:text-purple-400": editor.value.isActive("heading", { level: 1 }) },
          onClick: ($event) => editor.value.chain().focus().toggleHeading({ level: 1 }).run(),
          icon: "ph:text-h-one-bold",
          title: _ctx.$t("admin.editor.heading1")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          class: { "bg-gray-200 dark:bg-gray-800 text-purple-600 dark:text-purple-400": editor.value.isActive("heading", { level: 2 }) },
          onClick: ($event) => editor.value.chain().focus().toggleHeading({ level: 2 }).run(),
          icon: "ph:text-h-two-bold",
          title: _ctx.$t("admin.editor.heading2")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          class: { "bg-gray-200 dark:bg-gray-800 text-purple-600 dark:text-purple-400": editor.value.isActive("heading", { level: 3 }) },
          onClick: ($event) => editor.value.chain().focus().toggleHeading({ level: 3 }).run(),
          icon: "ph:text-h-three-bold",
          title: _ctx.$t("admin.editor.heading3")
        }, null, _parent));
        _push(`<div class="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-0.5"></div>`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          class: { "bg-gray-200 dark:bg-gray-800 text-purple-600 dark:text-purple-400": editor.value.isActive("bulletList") },
          onClick: ($event) => editor.value.chain().focus().toggleBulletList().run(),
          icon: "ph:list-bullets-bold",
          title: _ctx.$t("admin.editor.bulletList")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          class: { "bg-gray-200 dark:bg-gray-800 text-purple-600 dark:text-purple-400": editor.value.isActive("orderedList") },
          onClick: ($event) => editor.value.chain().focus().toggleOrderedList().run(),
          icon: "ph:list-numbers-bold",
          title: _ctx.$t("admin.editor.orderedList")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          class: { "bg-gray-200 dark:bg-gray-800 text-purple-600 dark:text-purple-400": editor.value.isActive("blockquote") },
          onClick: ($event) => editor.value.chain().focus().toggleBlockquote().run(),
          icon: "ph:quotes-bold",
          title: _ctx.$t("admin.editor.blockquote")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          class: { "bg-gray-200 dark:bg-gray-800 text-purple-600 dark:text-purple-400": editor.value.isActive("codeBlock") },
          onClick: ($event) => editor.value.chain().focus().toggleCodeBlock().run(),
          icon: "ph:file-code-bold",
          title: _ctx.$t("admin.editor.codeBlock")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: ($event) => editor.value.chain().focus().setHorizontalRule().run(),
          icon: "ph:minus-bold",
          title: _ctx.$t("admin.editor.horizontalRule")
        }, null, _parent));
        _push(`<div class="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-0.5"></div>`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          class: { "bg-gray-200 dark:bg-gray-800 text-purple-600 dark:text-purple-400": editor.value.isActive("link") },
          onClick: setLink,
          icon: "ph:link-bold",
          title: _ctx.$t("admin.editor.link")
        }, null, _parent));
        if (editor.value.isActive("link")) {
          _push(ssrRenderComponent(_component_UButton, {
            size: "xs",
            variant: "ghost",
            color: "error",
            onClick: ($event) => editor.value.chain().focus().unsetLink().run(),
            icon: "ph:link-break-bold",
            title: "Unset Link"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: addImagePrompt,
          icon: "ph:image-bold",
          title: _ctx.$t("admin.editor.image")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          loading: isUploadingImage.value,
          onClick: triggerImageUpload,
          icon: "ph:upload-simple-bold",
          title: _ctx.$t("admin.editor.uploadImage")
        }, null, _parent));
        _push(`</div>`);
      } else if (currentMode.value === "markdown") {
        _push(`<div class="flex flex-wrap gap-1 items-center">`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: ($event) => insertMarkdownSyntax("**", "**", "bold text"),
          icon: "ph:text-b-bold",
          title: _ctx.$t("admin.editor.bold")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: ($event) => insertMarkdownSyntax("*", "*", "italic text"),
          icon: "ph:text-italic-bold",
          title: _ctx.$t("admin.editor.italic")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: ($event) => insertMarkdownSyntax("~~", "~~", "strikethrough"),
          icon: "ph:text-strikethrough-bold",
          title: _ctx.$t("admin.editor.strike")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: ($event) => insertMarkdownSyntax("`", "`", "code"),
          icon: "ph:code-bold",
          title: _ctx.$t("admin.editor.inlineCode")
        }, null, _parent));
        _push(`<div class="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-0.5"></div>`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: ($event) => insertMarkdownLinePrefix("# "),
          icon: "ph:text-h-one-bold",
          title: _ctx.$t("admin.editor.heading1")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: ($event) => insertMarkdownLinePrefix("## "),
          icon: "ph:text-h-two-bold",
          title: _ctx.$t("admin.editor.heading2")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: ($event) => insertMarkdownLinePrefix("### "),
          icon: "ph:text-h-three-bold",
          title: _ctx.$t("admin.editor.heading3")
        }, null, _parent));
        _push(`<div class="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-0.5"></div>`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: ($event) => insertMarkdownLinePrefix("- "),
          icon: "ph:list-bullets-bold",
          title: _ctx.$t("admin.editor.bulletList")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: ($event) => insertMarkdownLinePrefix("1. "),
          icon: "ph:list-numbers-bold",
          title: _ctx.$t("admin.editor.orderedList")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: ($event) => insertMarkdownLinePrefix("> "),
          icon: "ph:quotes-bold",
          title: _ctx.$t("admin.editor.blockquote")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: ($event) => {
            insertMarkdownSyntax("```ts\n", "\n```", "console.log('hello');");
          },
          icon: "ph:file-code-bold",
          title: _ctx.$t("admin.editor.codeBlock")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: insertMarkdownTable,
          icon: "ph:table-bold",
          title: _ctx.$t("admin.editor.table")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: ($event) => insertMarkdownLinePrefix("---\n"),
          icon: "ph:minus-bold",
          title: _ctx.$t("admin.editor.horizontalRule")
        }, null, _parent));
        _push(`<div class="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-0.5"></div>`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: insertMarkdownLink,
          icon: "ph:link-bold",
          title: _ctx.$t("admin.editor.link")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          onClick: addImagePrompt,
          icon: "ph:image-bold",
          title: _ctx.$t("admin.editor.image")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "ghost",
          color: "neutral",
          loading: isUploadingImage.value,
          onClick: triggerImageUpload,
          icon: "ph:upload-simple-bold",
          title: _ctx.$t("admin.editor.uploadImage")
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-mono px-1">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:code-bold",
          class: "w-4 h-4 text-purple-500"
        }, null, _parent));
        _push(`<span>HTML Source Mode</span></div>`);
      }
      _push(`<div class="flex items-center gap-2">`);
      if (currentMode.value === "markdown") {
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: splitPreview.value ? "soft" : "ghost",
          color: splitPreview.value ? "primary" : "neutral",
          onClick: ($event) => splitPreview.value = !splitPreview.value,
          icon: "ph:columns-bold",
          title: _ctx.$t("admin.editor.splitPreview")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="hidden sm:inline text-xs"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.editor.splitPreview"))}</span>`);
            } else {
              return [
                createVNode("span", { class: "hidden sm:inline text-xs" }, toDisplayString(_ctx.$t("admin.editor.splitPreview")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-0.5"></div><div class="flex items-center bg-gray-200/80 dark:bg-gray-800/80 rounded-lg p-0.5 gap-0.5"><button type="button" class="${ssrRenderClass([
        "px-2.5 py-1 rounded-md text-xs font-medium transition-colors flex items-center gap-1",
        currentMode.value === "visual" ? "bg-white dark:bg-[#18181b] text-purple-600 dark:text-purple-400 shadow-xs" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      ])}"${ssrRenderAttr("title", _ctx.$t("admin.editor.visual"))}>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:paint-brush-broad",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`<span class="hidden sm:inline">${ssrInterpolate(_ctx.$t("admin.editor.visual"))}</span></button><button type="button" class="${ssrRenderClass([
        "px-2.5 py-1 rounded-md text-xs font-medium transition-colors flex items-center gap-1",
        currentMode.value === "markdown" ? "bg-white dark:bg-[#18181b] text-purple-600 dark:text-purple-400 shadow-xs" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      ])}"${ssrRenderAttr("title", _ctx.$t("admin.editor.markdown"))}>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:markdown-logo",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`<span class="hidden sm:inline">${ssrInterpolate(_ctx.$t("admin.editor.markdown"))}</span></button><button type="button" class="${ssrRenderClass([
        "px-2.5 py-1 rounded-md text-xs font-medium transition-colors flex items-center gap-1",
        currentMode.value === "html" ? "bg-white dark:bg-[#18181b] text-purple-600 dark:text-purple-400 shadow-xs" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      ])}"${ssrRenderAttr("title", _ctx.$t("admin.editor.html"))}>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:code",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`<span class="hidden sm:inline">${ssrInterpolate(_ctx.$t("admin.editor.html"))}</span></button></div></div></div><input type="file" class="hidden" accept="image/png, image/jpeg, image/webp, image/gif"><div class="relative min-h-[360px] flex-1 flex flex-col"><div class="p-4 min-h-[360px] text-gray-900 dark:text-white flex-1 overflow-y-auto" style="${ssrRenderStyle(currentMode.value === "visual" ? null : { display: "none" })}">`);
      if (EditorContentComponent.value && editor.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(EditorContentComponent.value), { editor: editor.value }, null), _parent);
      } else {
        _push(`<div class="h-full flex items-center justify-center text-xs text-gray-400 py-12"> \u52A0\u8F7D\u7F16\u8F91\u5668\u4E2D... </div>`);
      }
      _push(`</div>`);
      if (currentMode.value === "markdown") {
        _push(`<div class="${ssrRenderClass([splitPreview.value ? "grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-800" : "grid-cols-1", "flex-1 grid min-h-[360px]"])}"><div class="flex flex-col h-full bg-gray-50/50 dark:bg-gray-900/30"><textarea class="w-full h-full min-h-[360px] p-4 bg-transparent text-gray-800 dark:text-gray-200 font-mono text-sm resize-none outline-hidden border-none focus:ring-0 leading-relaxed"${ssrRenderAttr("placeholder", _ctx.$t("admin.editor.markdownPlaceholder"))}>${ssrInterpolate(rawMarkdown.value)}</textarea></div>`);
        if (splitPreview.value) {
          _push(`<div class="p-4 min-h-[360px] max-h-[600px] overflow-y-auto bg-white dark:bg-[#121214]">`);
          if (compiledMarkdownHtml.value) {
            _push(`<div class="prose prose-sm dark:prose-invert prose-purple max-w-none break-words">${(_a = compiledMarkdownHtml.value) != null ? _a : ""}</div>`);
          } else {
            _push(`<div class="h-full flex items-center justify-center text-xs text-gray-400 dark:text-gray-500 italic py-12">${ssrInterpolate(_ctx.$t("admin.editor.previewEmpty"))}</div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentMode.value === "html") {
        _push(`<div class="flex-1 bg-gray-50/50 dark:bg-gray-900/30 min-h-[360px]"><textarea class="w-full h-full min-h-[360px] p-4 bg-transparent text-gray-800 dark:text-gray-200 font-mono text-sm resize-none outline-hidden border-none focus:ring-0 leading-relaxed"${ssrRenderAttr("placeholder", _ctx.$t("admin.editor.htmlPlaceholder"))}>${ssrInterpolate(rawHtml.value)}</textarea></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RichEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main, { __name: "RichEditor" });

export { __nuxt_component_8 as default };
