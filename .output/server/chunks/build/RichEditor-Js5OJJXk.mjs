import { g as useToast, e as useI18n, k as _sfc_main$B, b as _sfc_main$G, p as _sfc_main$s, d as _sfc_main$k } from './server.mjs';
import { defineComponent, ref, computed, shallowRef, watch, mergeProps, withCtx, createVNode, toDisplayString, resolveDynamicComponent, unref, createTextVNode, openBlock, createBlock, withKeys, createCommentVNode, withModifiers, Fragment, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import { marked } from 'marked';
import { u as useImageProxy } from './useImageProxy-CJnFnQot.mjs';
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
    const toast = useToast();
    const { t } = useI18n();
    const { buildImageProxyUrl } = useImageProxy();
    const currentMode = ref("visual");
    const splitPreview = ref(true);
    const rawHtml = ref(props.modelValue || "");
    const rawMarkdown = ref(htmlToMarkdown(props.modelValue || ""));
    const compiledMarkdownHtml = computed(() => markdownToHtml(rawMarkdown.value));
    const editor = shallowRef(null);
    const EditorContentComponent = shallowRef(null);
    const markdownTextareaRef = ref(null);
    ref(null);
    const isUploadingImage = ref(false);
    const isImageModalOpen = ref(false);
    const activeImageTab = ref("url");
    const imageUrlInput = ref("");
    const imageAltInput = ref("");
    const previewError = ref(false);
    const isDraggingOver = ref(false);
    const modalFileInputRef = ref(null);
    const savedMarkdownSelection = ref(null);
    const lastMarkdownCursor = ref({
      start: 0,
      end: 0,
      scrollTop: 0
    });
    watch(imageUrlInput, () => {
      previewError.value = false;
    });
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
    const insertMarkdownSyntax = (prefix, suffix, defaultText, range) => {
      const textarea = markdownTextareaRef.value;
      if (!textarea) return;
      const target = range || lastMarkdownCursor.value;
      const textVal = rawMarkdown.value || "";
      const rawStart = typeof (target == null ? void 0 : target.start) === "number" ? target.start : textarea.selectionStart;
      const rawEnd = typeof (target == null ? void 0 : target.end) === "number" ? target.end : textarea.selectionEnd;
      const start = Math.max(0, Math.min(rawStart, textVal.length));
      const end = Math.max(start, Math.min(rawEnd, textVal.length));
      const savedScrollTop = typeof (target == null ? void 0 : target.scrollTop) === "number" ? target.scrollTop : textarea.scrollTop;
      const selectedText = textVal.substring(start, end);
      const insertText = selectedText || defaultText;
      const newText = textVal.substring(0, start) + prefix + insertText + suffix + textVal.substring(end);
      rawMarkdown.value = newText;
      const newCursorStart = start + prefix.length;
      const newCursorEnd = start + prefix.length + insertText.length;
      lastMarkdownCursor.value = {
        start: newCursorEnd,
        end: newCursorEnd,
        scrollTop: savedScrollTop
      };
      const applyFocusAndSelection = () => {
        if (!textarea) return;
        try {
          textarea.focus({ preventScroll: true });
        } catch {
          textarea.focus();
        }
        textarea.setSelectionRange(newCursorStart, newCursorEnd);
        textarea.scrollTop = savedScrollTop;
      };
      nextTick(() => {
        applyFocusAndSelection();
        requestAnimationFrame(applyFocusAndSelection);
        setTimeout(applyFocusAndSelection, 50);
        onMarkdownInput();
      });
    };
    const insertMarkdownLinePrefix = (prefix) => {
      const textarea = markdownTextareaRef.value;
      if (!textarea) return;
      const target = lastMarkdownCursor.value;
      const textVal = rawMarkdown.value || "";
      const rawStart = typeof (target == null ? void 0 : target.start) === "number" ? target.start : textarea.selectionStart;
      const start = Math.max(0, Math.min(rawStart, textVal.length));
      const savedScrollTop = typeof (target == null ? void 0 : target.scrollTop) === "number" ? target.scrollTop : textarea.scrollTop;
      const lineStart = textVal.lastIndexOf("\n", start - 1) + 1;
      rawMarkdown.value = textVal.substring(0, lineStart) + prefix + textVal.substring(lineStart);
      const newCursor = start + prefix.length;
      lastMarkdownCursor.value = {
        start: newCursor,
        end: newCursor,
        scrollTop: savedScrollTop
      };
      const applyFocusAndSelection = () => {
        if (!textarea) return;
        try {
          textarea.focus({ preventScroll: true });
        } catch {
          textarea.focus();
        }
        textarea.setSelectionRange(newCursor, newCursor);
        textarea.scrollTop = savedScrollTop;
      };
      nextTick(() => {
        applyFocusAndSelection();
        requestAnimationFrame(applyFocusAndSelection);
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
    const openImageModal = (tab = "url") => {
      if (currentMode.value === "markdown") {
        if (markdownTextareaRef.value) {
          const ta = markdownTextareaRef.value;
          if ((void 0).activeElement === ta) {
            lastMarkdownCursor.value = {
              start: ta.selectionStart,
              end: ta.selectionEnd,
              scrollTop: ta.scrollTop
            };
          }
          savedMarkdownSelection.value = { ...lastMarkdownCursor.value };
        }
      }
      activeImageTab.value = tab;
      imageUrlInput.value = "";
      imageAltInput.value = "";
      previewError.value = false;
      isDraggingOver.value = false;
      isImageModalOpen.value = true;
    };
    const closeImageModal = () => {
      isImageModalOpen.value = false;
      imageUrlInput.value = "";
      imageAltInput.value = "";
      previewError.value = false;
      isDraggingOver.value = false;
    };
    const addImagePrompt = () => {
      openImageModal("url");
    };
    const triggerImageUpload = () => {
      openImageModal("upload");
    };
    const triggerModalFileInput = () => {
      if (modalFileInputRef.value) {
        modalFileInputRef.value.click();
      }
    };
    const uploadModalFile = async (file) => {
      if (!file) return;
      isUploadingImage.value = true;
      try {
        const formData = new FormData();
        formData.append("files", file);
        const res = await $fetch("/api/admin/upload", {
          method: "POST",
          body: formData
        });
        if (res && res.urls && res.urls.length > 0) {
          imageUrlInput.value = res.urls[0];
          previewError.value = false;
          toast.add({ title: "Success", description: t("admin.editor.uploadSuccess"), color: "success" });
        }
      } catch (error) {
        toast.add({ title: "Error", description: t("admin.editor.uploadFailed"), color: "error" });
        console.error(error);
      } finally {
        isUploadingImage.value = false;
        if (modalFileInputRef.value) modalFileInputRef.value.value = "";
      }
    };
    const handleModalFileChange = (event) => {
      const target = event.target;
      const files = target.files;
      if (files && files.length > 0) {
        uploadModalFile(files[0]);
      }
    };
    const handleModalDrop = (event) => {
      var _a;
      isDraggingOver.value = false;
      const files = (_a = event.dataTransfer) == null ? void 0 : _a.files;
      if (files && files.length > 0) {
        uploadModalFile(files[0]);
      }
    };
    const confirmInsertImage = () => {
      const url = imageUrlInput.value.trim();
      if (!url) return;
      const alt = imageAltInput.value.trim();
      if (currentMode.value === "visual" && editor.value) {
        editor.value.chain().focus().setImage({
          src: url,
          alt: alt || void 0
        }).run();
      } else if (currentMode.value === "markdown") {
        const targetRange = savedMarkdownSelection.value || lastMarkdownCursor.value;
        insertMarkdownSyntax(`![${alt || "Image"}](`, `${url})`, "", targetRange);
      } else {
        rawHtml.value += `
<img src="${url}" alt="${alt || "image"}" />`;
        onHtmlInput();
      }
      isImageModalOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UButton = _sfc_main$B;
      const _component_UIcon = _sfc_main$G;
      const _component_UModal = _sfc_main$s;
      const _component_UInput = _sfc_main$k;
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
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: isImageModalOpen.value,
        "onUpdate:open": ($event) => isImageModalOpen.value = $event,
        ui: { content: "sm:max-w-lg" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-5 space-y-4"${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="p-1.5 rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:image-bold",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-base font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.editor.image"))}</h3></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x-bold",
              size: "sm",
              onClick: closeImageModal
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex p-1 bg-gray-100 dark:bg-gray-800/80 rounded-lg gap-1"${_scopeId}><button type="button" class="${ssrRenderClass([activeImageTab.value === "url" ? "bg-white dark:bg-[#18181b] text-purple-600 dark:text-purple-400 shadow-xs" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white", "flex-1 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:link-bold",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("admin.editor.imageTabUrl"))}</span></button><button type="button" class="${ssrRenderClass([activeImageTab.value === "upload" ? "bg-white dark:bg-[#18181b] text-purple-600 dark:text-purple-400 shadow-xs" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white", "flex-1 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:upload-simple-bold",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("admin.editor.imageTabUpload"))}</span></button></div>`);
            if (activeImageTab.value === "url") {
              _push2(`<div class="space-y-3"${_scopeId}><div${_scopeId}><label class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.editor.urlPrompt"))}</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: imageUrlInput.value,
                "onUpdate:modelValue": ($event) => imageUrlInput.value = $event,
                placeholder: "https://example.com/image.png",
                class: "w-full font-mono text-xs",
                autofocus: "",
                onKeyup: confirmInsertImage
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.editor.imageAltLabel"))}</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: imageAltInput.value,
                "onUpdate:modelValue": ($event) => imageAltInput.value = $event,
                placeholder: _ctx.$t("admin.editor.imageAltPlaceholder"),
                class: "w-full text-xs",
                onKeyup: confirmInsertImage
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (imageUrlInput.value.trim()) {
                _push2(`<div class="space-y-1.5 pt-1"${_scopeId}><span class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.editor.preview"))}</span><div class="relative w-full max-h-44 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center p-2 overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", unref(buildImageProxyUrl)(imageUrlInput.value.trim()))} alt="preview" class="max-h-40 max-w-full object-contain rounded"${_scopeId}>`);
                if (previewError.value) {
                  _push2(`<div class="absolute inset-0 bg-gray-100/90 dark:bg-gray-900/90 flex flex-col items-center justify-center gap-1 text-red-500 text-xs p-2 text-center"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:warning-circle-bold",
                    class: "w-5 h-5"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("admin.editor.previewError"))}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<div class="space-y-3"${_scopeId}><div class="${ssrRenderClass([[
                isDraggingOver.value ? "border-purple-500 bg-purple-50/50 dark:bg-purple-950/20" : "border-gray-300 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 bg-gray-50/50 dark:bg-gray-900/20"
              ], "border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors flex flex-col items-center justify-center gap-2"])}"${_scopeId}><input type="file" class="hidden" accept="image/png, image/jpeg, image/webp, image/gif"${_scopeId}>`);
              if (isUploadingImage.value) {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:spinner-gap-bold",
                  class: "w-8 h-8 animate-spin text-purple-600 dark:text-purple-400"
                }, null, _parent2, _scopeId));
                _push2(`<p class="text-xs font-medium text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.common.loading"))}</p><!--]-->`);
              } else if (imageUrlInput.value && activeImageTab.value === "upload") {
                _push2(`<!--[--><div class="relative max-h-36 max-w-full overflow-hidden rounded-lg"${_scopeId}><img${ssrRenderAttr("src", unref(buildImageProxyUrl)(imageUrlInput.value))} class="max-h-32 object-contain rounded"${_scopeId}></div><div class="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:check-circle-fill",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("admin.editor.uploadSuccess"))}</span></div><p class="text-[11px] text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 underline"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.editor.reupload"))}</p><!--]-->`);
              } else {
                _push2(`<!--[--><div class="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:cloud-arrow-up-bold",
                  class: "w-5 h-5"
                }, null, _parent2, _scopeId));
                _push2(`</div><div${_scopeId}><p class="text-xs font-medium text-gray-800 dark:text-gray-200"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.editor.dragOrClickUpload"))}</p><p class="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.editor.uploadHint"))}</p></div><!--]-->`);
              }
              _push2(`</div><div${_scopeId}><label class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.editor.imageAltLabel"))}</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: imageAltInput.value,
                "onUpdate:modelValue": ($event) => imageAltInput.value = $event,
                placeholder: _ctx.$t("admin.editor.imageAltPlaceholder"),
                class: "w-full text-xs",
                onKeyup: confirmInsertImage
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`<div class="flex items-center justify-end gap-2 pt-3 border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "sm",
              onClick: closeImageModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.common.cancel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              variant: "solid",
              size: "sm",
              disabled: !imageUrlInput.value.trim(),
              loading: isUploadingImage.value,
              onClick: confirmInsertImage
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.editor.insertImage"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.editor.insertImage")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-5 space-y-4" }, [
                createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("div", { class: "p-1.5 rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:image-bold",
                        class: "w-5 h-5"
                      })
                    ]),
                    createVNode("h3", { class: "text-base font-semibold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("admin.editor.image")), 1)
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x-bold",
                    size: "sm",
                    onClick: closeImageModal
                  })
                ]),
                createVNode("div", { class: "flex p-1 bg-gray-100 dark:bg-gray-800/80 rounded-lg gap-1" }, [
                  createVNode("button", {
                    type: "button",
                    class: ["flex-1 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer", activeImageTab.value === "url" ? "bg-white dark:bg-[#18181b] text-purple-600 dark:text-purple-400 shadow-xs" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"],
                    onClick: ($event) => activeImageTab.value = "url"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:link-bold",
                      class: "w-3.5 h-3.5"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("admin.editor.imageTabUrl")), 1)
                  ], 10, ["onClick"]),
                  createVNode("button", {
                    type: "button",
                    class: ["flex-1 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer", activeImageTab.value === "upload" ? "bg-white dark:bg-[#18181b] text-purple-600 dark:text-purple-400 shadow-xs" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"],
                    onClick: ($event) => activeImageTab.value = "upload"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:upload-simple-bold",
                      class: "w-3.5 h-3.5"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("admin.editor.imageTabUpload")), 1)
                  ], 10, ["onClick"])
                ]),
                activeImageTab.value === "url" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "space-y-3"
                }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5" }, toDisplayString(_ctx.$t("admin.editor.urlPrompt")), 1),
                    createVNode(_component_UInput, {
                      modelValue: imageUrlInput.value,
                      "onUpdate:modelValue": ($event) => imageUrlInput.value = $event,
                      placeholder: "https://example.com/image.png",
                      class: "w-full font-mono text-xs",
                      autofocus: "",
                      onKeyup: withKeys(confirmInsertImage, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5" }, toDisplayString(_ctx.$t("admin.editor.imageAltLabel")), 1),
                    createVNode(_component_UInput, {
                      modelValue: imageAltInput.value,
                      "onUpdate:modelValue": ($event) => imageAltInput.value = $event,
                      placeholder: _ctx.$t("admin.editor.imageAltPlaceholder"),
                      class: "w-full text-xs",
                      onKeyup: withKeys(confirmInsertImage, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ]),
                  imageUrlInput.value.trim() ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "space-y-1.5 pt-1"
                  }, [
                    createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(_ctx.$t("admin.editor.preview")), 1),
                    createVNode("div", { class: "relative w-full max-h-44 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center p-2 overflow-hidden" }, [
                      createVNode("img", {
                        src: unref(buildImageProxyUrl)(imageUrlInput.value.trim()),
                        alt: "preview",
                        class: "max-h-40 max-w-full object-contain rounded",
                        onError: ($event) => previewError.value = true,
                        onLoad: ($event) => previewError.value = false
                      }, null, 40, ["src", "onError", "onLoad"]),
                      previewError.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "absolute inset-0 bg-gray-100/90 dark:bg-gray-900/90 flex flex-col items-center justify-center gap-1 text-red-500 text-xs p-2 text-center"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:warning-circle-bold",
                          class: "w-5 h-5"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("admin.editor.previewError")), 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ])) : createCommentVNode("", true)
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "space-y-3"
                }, [
                  createVNode("div", {
                    class: ["border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors flex flex-col items-center justify-center gap-2", [
                      isDraggingOver.value ? "border-purple-500 bg-purple-50/50 dark:bg-purple-950/20" : "border-gray-300 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 bg-gray-50/50 dark:bg-gray-900/20"
                    ]],
                    onDragover: withModifiers(($event) => isDraggingOver.value = true, ["prevent"]),
                    onDragleave: withModifiers(($event) => isDraggingOver.value = false, ["prevent"]),
                    onDrop: withModifiers(handleModalDrop, ["prevent"]),
                    onClick: triggerModalFileInput
                  }, [
                    createVNode("input", {
                      ref_key: "modalFileInputRef",
                      ref: modalFileInputRef,
                      type: "file",
                      class: "hidden",
                      accept: "image/png, image/jpeg, image/webp, image/gif",
                      onChange: handleModalFileChange
                    }, null, 544),
                    isUploadingImage.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(_component_UIcon, {
                        name: "ph:spinner-gap-bold",
                        class: "w-8 h-8 animate-spin text-purple-600 dark:text-purple-400"
                      }),
                      createVNode("p", { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, toDisplayString(_ctx.$t("admin.common.loading")), 1)
                    ], 64)) : imageUrlInput.value && activeImageTab.value === "upload" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode("div", { class: "relative max-h-36 max-w-full overflow-hidden rounded-lg" }, [
                        createVNode("img", {
                          src: unref(buildImageProxyUrl)(imageUrlInput.value),
                          class: "max-h-32 object-contain rounded"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:check-circle-fill",
                          class: "w-4 h-4"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("admin.editor.uploadSuccess")), 1)
                      ]),
                      createVNode("p", { class: "text-[11px] text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 underline" }, toDisplayString(_ctx.$t("admin.editor.reupload")), 1)
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                      createVNode("div", { class: "w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:cloud-arrow-up-bold",
                          class: "w-5 h-5"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-xs font-medium text-gray-800 dark:text-gray-200" }, toDisplayString(_ctx.$t("admin.editor.dragOrClickUpload")), 1),
                        createVNode("p", { class: "text-[11px] text-gray-400 dark:text-gray-500 mt-0.5" }, toDisplayString(_ctx.$t("admin.editor.uploadHint")), 1)
                      ])
                    ], 64))
                  ], 42, ["onDragover", "onDragleave"]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5" }, toDisplayString(_ctx.$t("admin.editor.imageAltLabel")), 1),
                    createVNode(_component_UInput, {
                      modelValue: imageAltInput.value,
                      "onUpdate:modelValue": ($event) => imageAltInput.value = $event,
                      placeholder: _ctx.$t("admin.editor.imageAltPlaceholder"),
                      class: "w-full text-xs",
                      onKeyup: withKeys(confirmInsertImage, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ])
                ])),
                createVNode("div", { class: "flex items-center justify-end gap-2 pt-3 border-t border-gray-100 dark:border-gray-800" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    size: "sm",
                    onClick: closeImageModal
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    color: "primary",
                    variant: "solid",
                    size: "sm",
                    disabled: !imageUrlInput.value.trim(),
                    loading: isUploadingImage.value,
                    onClick: confirmInsertImage
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.editor.insertImage")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RichEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main, { __name: "RichEditor" });

export { __nuxt_component_8 as default };
