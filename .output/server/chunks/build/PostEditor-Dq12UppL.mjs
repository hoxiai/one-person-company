import { u as useI18n, e as useToast, z as useLocaleRouter, q as useConfirm, r as useSettings, f as useAdminPermissions, i as _sfc_main$D, k as _sfc_main$z, _ as _sfc_main$I, b as _sfc_main$k, c as _sfc_main$g } from './server.mjs';
import { _ as _sfc_main$1 } from './Switch-LnISfNX3.mjs';
import { _ as _sfc_main$2 } from './SelectMenu-CrTMLqMg.mjs';
import { defineComponent, defineAsyncComponent, computed, ref, watch, reactive, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
import { u as useImageProxy } from './useImageProxy-DBzzMBty.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PostEditor",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const RichEditor = defineAsyncComponent(() => import('./RichEditor-DxCIRT0I.mjs'));
    const props = __props;
    const { t } = useI18n();
    const toast = useToast();
    useRoute();
    const router = useRouter();
    const { localePath } = useLocaleRouter();
    const { confirm } = useConfirm();
    const { settings } = useSettings();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const { buildImageProxyUrl } = useImageProxy();
    const postId = computed(() => props.id ? Number(props.id) : null);
    const isEditMode = computed(() => Boolean(postId.value && !isNaN(postId.value)));
    const isLoading = ref(false);
    const isSaving = ref(false);
    const isUploading = ref(false);
    const isFetchingLatestVersion = ref(false);
    const isDirty = ref(false);
    const fileInput = ref(null);
    const autoSaveStatus = ref("idle");
    const lastSavedTime = ref("");
    const hasLocalDraftAvailable = ref(false);
    const localDraftTime = ref("");
    const savedLocalDraftPayload = ref(null);
    const typeOptions = computed(() => [
      { label: t("admin.posts.type.blog"), value: "blog" },
      { label: t("admin.posts.type.announcement"), value: "announcement" },
      { label: t("admin.posts.type.page"), value: "page" },
      { label: t("admin.posts.type.changelog"), value: "changelog" }
    ]);
    const rawSupportedLocales = computed(() => {
      if (settings.value) {
        let i18nEnabled = "true";
        let rawLocales = "en,zh";
        if (Array.isArray(settings.value)) {
          const i18nSetting = settings.value.find((s) => s.key === "i18n_enabled");
          if (i18nSetting) i18nEnabled = String(i18nSetting.value);
          const localesSetting = settings.value.find((s) => s.key === "supported_locales");
          if (localesSetting) rawLocales = String(localesSetting.value);
        } else {
          if (settings.value.i18n_enabled !== void 0) {
            i18nEnabled = String(settings.value.i18n_enabled);
          }
          if (settings.value.supported_locales !== void 0) {
            rawLocales = String(settings.value.supported_locales);
          }
        }
        if (i18nEnabled === "false") return ["en"];
        if (rawLocales === "") return ["en"];
        return rawLocales.split(",").map((l) => l.trim()).filter(Boolean);
      }
      return ["en", "zh"];
    });
    const defaultLocale = computed(() => {
      if (settings.value) {
        if (Array.isArray(settings.value)) {
          const defaultLocaleSetting = settings.value.find((s) => s.key === "default_locale");
          if (defaultLocaleSetting && defaultLocaleSetting.value) {
            return defaultLocaleSetting.value;
          }
        } else if (settings.value.default_locale) {
          return settings.value.default_locale;
        }
      }
      return rawSupportedLocales.value[0] || "en";
    });
    const supportedLocales = computed(() => {
      const list = [...rawSupportedLocales.value];
      const def = defaultLocale.value;
      if (!def || !list.includes(def)) return list;
      return [def, ...list.filter((l) => l !== def)];
    });
    const currentTabLocale = ref(defaultLocale.value || "en");
    watch(defaultLocale, (val) => {
      if (!currentTabLocale.value || currentTabLocale.value === "en") {
        currentTabLocale.value = val || "en";
      }
    }, { immediate: true });
    const translationForms = reactive({});
    const activeTranslation = computed(() => {
      const loc = currentTabLocale.value;
      if (!translationForms[loc]) {
        translationForms[loc] = { title: "", description: "", content: "" };
      }
      return translationForms[loc];
    });
    const defaultForm = {
      title: "",
      key: "",
      sort: "",
      slug: "",
      description: "",
      content: "",
      type: "blog",
      imageUrl: "",
      isActive: true,
      metaData: {}
    };
    const form = ref({ ...defaultForm });
    const changelogVersion = ref("");
    const activeContentText = computed(() => {
      var _a;
      return currentTabLocale.value === defaultLocale.value ? form.value.content : ((_a = translationForms[currentTabLocale.value]) == null ? void 0 : _a.content) || "";
    });
    const generateSlug = () => {
      const source = form.value.type === "changelog" && changelogVersion.value ? changelogVersion.value : form.value.title;
      if (!source) return;
      form.value.slug = source.toLowerCase().replace(/[^a-z0-9.]+/g, "-").replace(/(^-|-$)+/g, "");
    };
    const onTitleInput = () => {
      isDirty.value = true;
      if (!isEditMode.value && !form.value.slug) {
        generateSlug();
      }
    };
    const onVersionInput = () => {
      isDirty.value = true;
      form.value.key = changelogVersion.value;
      if (!isEditMode.value) {
        generateSlug();
        if (!form.value.title) {
          form.value.title = `Release ${changelogVersion.value}`;
        }
      }
    };
    const generateDescription = () => {
      const content = activeContentText.value || "";
      const raw = content.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim();
      if (!raw) return;
      const MAX = 200;
      const trimmed = raw.length <= MAX ? raw : raw.slice(0, MAX).replace(/\s+\S*$/, "") + "\u2026";
      if (currentTabLocale.value === defaultLocale.value) {
        form.value.description = trimmed;
      } else {
        activeTranslation.value.description = trimmed;
      }
      isDirty.value = true;
    };
    const copyUrl = async () => {
      if (!form.value.slug) return;
      const fullUrl = `${(void 0).location.origin}/blog/${form.value.slug}`;
      try {
        await (void 0).clipboard.writeText(fullUrl);
        toast.add({
          title: t("admin.common.success"),
          description: t("admin.posts.toast.copiedUrl"),
          color: "success"
        });
      } catch {
        toast.add({
          title: t("admin.common.error"),
          description: "Failed to copy URL",
          color: "error"
        });
      }
    };
    const bumpVersion = (version) => {
      const match = version.match(/^(\D*)(\d+(?:\.\d+)*)$/);
      if (!match || !match[2]) return version;
      const prefix = match[1] || "";
      const segments = match[2].split(".");
      const lastIndex = segments.length - 1;
      segments[lastIndex] = String(Number(segments[lastIndex]) + 1);
      return prefix + segments.join(".");
    };
    const fetchAndBumpLatestVersion = async () => {
      var _a;
      isFetchingLatestVersion.value = true;
      try {
        const res = await $fetch("/api/admin/posts", {
          params: { type: "changelog", pageSize: 1, page: 1 }
        });
        const latestPost = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a[0];
        if (latestPost) {
          const latestVersion = latestPost.key || latestPost.slug || latestPost.title || "";
          const nextVersion = bumpVersion(latestVersion);
          if (nextVersion && nextVersion !== latestVersion) {
            changelogVersion.value = nextVersion;
            form.value.key = nextVersion;
            form.value.slug = nextVersion;
            form.value.title = `Release ${nextVersion}`;
          }
        } else {
          changelogVersion.value = "v1.0.0";
          form.value.key = "v1.0.0";
          form.value.slug = "v1.0.0";
          form.value.title = "Release v1.0.0";
        }
      } catch (err) {
        console.error("Failed to auto-fetch latest version", err);
      } finally {
        isFetchingLatestVersion.value = false;
      }
    };
    const clearDraftFromLocalStorage = () => {
      return;
    };
    const restoreLocalDraft = () => {
      if (!savedLocalDraftPayload.value) return;
      const draft = savedLocalDraftPayload.value;
      if (draft.form) {
        form.value = {
          ...form.value,
          ...draft.form
        };
        if (form.value.type === "changelog") {
          changelogVersion.value = form.value.key || form.value.slug || "";
        }
      }
      if (draft.translations) {
        Object.keys(draft.translations).forEach((loc) => {
          translationForms[loc] = { ...draft.translations[loc] };
        });
      }
      hasLocalDraftAvailable.value = false;
      isDirty.value = true;
      autoSaveStatus.value = "local_saved";
      lastSavedTime.value = new Date(draft.updatedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      toast.add({
        title: t("admin.common.success"),
        description: t("admin.posts.editor.draftRestored", "\u5DF2\u6210\u529F\u6062\u590D\u8349\u7A3F"),
        color: "success"
      });
    };
    const discardLocalDraft = () => {
      savedLocalDraftPayload.value = null;
      hasLocalDraftAvailable.value = false;
    };
    let autoSaveTimer = null;
    const onFormChange = () => {
      if (isLoading.value) return;
      isDirty.value = true;
      autoSaveStatus.value = "dirty";
      if (autoSaveTimer) clearTimeout(autoSaveTimer);
      autoSaveTimer = setTimeout(() => {
        executeAutoSave();
      }, 2500);
    };
    const executeAutoSave = async () => {
      if (isSaving.value || isLoading.value || !isDirty.value) return;
      if (isEditMode.value && !form.value.isActive) {
        if (form.value.title && form.value.slug) {
          autoSaveStatus.value = "saving";
          try {
            await executeSave({ isSilent: true });
            autoSaveStatus.value = "saved";
            lastSavedTime.value = (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
            clearDraftFromLocalStorage();
            return;
          } catch (err) {
            console.warn("[PostDraft] Auto-save to server failed, falling back to local storage", err);
          }
        }
      }
      autoSaveStatus.value = "local_saved";
      lastSavedTime.value = (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };
    const executeSave = async (options = {}) => {
      var _a;
      if (!form.value.title || !form.value.slug) {
        if (!options.isSilent) {
          toast.add({
            title: t("admin.common.error"),
            description: t("admin.posts.toast.titleRequired"),
            color: "error"
          });
        }
        throw new Error(t("admin.posts.toast.titleRequired"));
      }
      if (!form.value.metaData) form.value.metaData = {};
      if (!form.value.metaData.translations) form.value.metaData.translations = {};
      for (const loc of supportedLocales.value) {
        if (loc === defaultLocale.value) continue;
        const trans = translationForms[loc];
        if (!trans) continue;
        if (!form.value.metaData.translations[loc]) {
          form.value.metaData.translations[loc] = {};
        }
        form.value.metaData.translations[loc].title = trans.title;
        form.value.metaData.translations[loc].description = trans.description;
        form.value.metaData.translations[loc].content = trans.content;
      }
      isSaving.value = true;
      try {
        const url = isEditMode.value ? `/api/admin/posts/${postId.value}` : "/api/admin/posts";
        const method = isEditMode.value ? "PUT" : "POST";
        const payload = {
          ...form.value,
          key: typeof form.value.key === "string" && form.value.key.trim() ? form.value.key.trim() : null,
          sort: form.value.sort === "" || form.value.sort === null || form.value.sort === void 0 ? null : Number.isFinite(Number(form.value.sort)) ? Number(form.value.sort) : null
        };
        const res = await $fetch(url, {
          method,
          body: payload
        });
        if ((res == null ? void 0 : res.code) && res.code !== 0) {
          throw new Error(res.message || t("admin.posts.toast.saveFailed"));
        }
        isDirty.value = false;
        clearDraftFromLocalStorage();
        if (!options.isSilent) {
          toast.add({
            title: t("admin.common.success"),
            description: isEditMode.value ? t("admin.posts.toast.saved") : t("admin.posts.toast.created"),
            color: "success"
          });
        }
        if (!isEditMode.value && ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.id)) {
          await router.replace(`/admin/posts/${res.data.id}`);
        }
        return res;
      } finally {
        isSaving.value = false;
      }
    };
    const savePost = async () => {
      var _a;
      if (autoSaveTimer) clearTimeout(autoSaveTimer);
      try {
        await executeSave({ isSilent: false });
        autoSaveStatus.value = "saved";
        lastSavedTime.value = (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      } catch (e) {
        if (e.message !== t("admin.posts.toast.titleRequired")) {
          toast.add({
            title: t("admin.common.error"),
            description: ((_a = e.data) == null ? void 0 : _a.message) || e.message || t("admin.posts.toast.saveFailed"),
            color: "error"
          });
        }
      }
    };
    watch(
      () => form.value,
      () => {
        onFormChange();
      },
      { deep: true }
    );
    watch(
      () => translationForms,
      () => {
        onFormChange();
      },
      { deep: true }
    );
    onBeforeRouteLeave(async () => {
      if (isDirty.value && !isSaving.value) {
        const confirmed = await confirm({
          title: t("admin.posts.editor.confirmLeaveTitle", "\u672A\u4FDD\u5B58\u7684\u6539\u52A8"),
          description: t("admin.posts.editor.confirmLeave", "\u5F53\u524D\u6709\u672A\u4FDD\u5B58\u7684\u6539\u52A8\uFF0C\u786E\u5B9A\u8981\u79BB\u5F00\u5417\uFF1F"),
          confirmText: t("admin.posts.editor.leaveConfirm", "\u786E\u5B9A\u79BB\u5F00"),
          cancelText: t("admin.posts.editor.leaveCancel", "\u7EE7\u7EED\u7F16\u8F91"),
          confirmColor: "error"
        });
        return confirmed;
      }
      return true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$D;
      const _component_UBadge = _sfc_main$z;
      const _component_UIcon = _sfc_main$I;
      const _component_UInput = _sfc_main$k;
      const _component_UTextarea = _sfc_main$g;
      const _component_USwitch = _sfc_main$1;
      const _component_USelectMenu = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-full flex flex-col pb-12" }, _attrs))}><div class="sticky top-0 z-20 bg-white/90 dark:bg-[#121214]/90 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-800/80 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 mb-6 transition-all"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 max-w-7xl mx-auto"><div class="flex items-center gap-3 min-w-0">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "ghost",
        icon: "ph:arrow-left-bold",
        size: "sm",
        class: "rounded-xl shrink-0",
        to: "/admin/posts",
        title: _ctx.$t("admin.common.back")
      }, null, _parent));
      _push(`<div class="truncate"><div class="flex items-center gap-2"><h1 class="text-lg font-bold text-gray-900 dark:text-white truncate">${ssrInterpolate(isEditMode.value ? form.value.title || _ctx.$t("admin.posts.editor.editTitle") : _ctx.$t("admin.posts.editor.createTitle"))}</h1>`);
      _push(ssrRenderComponent(_component_UBadge, {
        color: form.value.isActive ? "success" : "neutral",
        variant: "subtle",
        size: "xs",
        class: "font-medium shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(form.value.isActive ? _ctx.$t("admin.posts.status.published") : _ctx.$t("admin.posts.status.draft"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(form.value.isActive ? _ctx.$t("admin.posts.status.published") : _ctx.$t("admin.posts.status.draft")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (isEditMode.value) {
        _push(ssrRenderComponent(_component_UBadge, {
          color: "primary",
          variant: "subtle",
          size: "xs",
          class: "font-mono text-[10px] shrink-0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` #${ssrInterpolate(postId.value)}`);
            } else {
              return [
                createTextVNode(" #" + toDisplayString(postId.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">${ssrInterpolate(isEditMode.value ? _ctx.$t("admin.posts.editor.editSubtitle", "\u4FEE\u6539\u6587\u7AE0\u5185\u5BB9\u4E0E\u914D\u7F6E\u5E76\u540C\u6B65\u53D1\u5E03") : _ctx.$t("admin.posts.editor.createSubtitle", "\u64B0\u5199\u65B0\u6587\u7AE0\u6216\u66F4\u65B0\u8BB0\u5F55\uFF0C\u652F\u6301\u591A\u8BED\u8A00\u4E0E\u5927\u753B\u5E03\u6392\u7248"))}</p></div></div><div class="flex items-center gap-2.5 shrink-0 self-end sm:self-center">`);
      if (autoSaveStatus.value !== "idle") {
        _push(`<div class="${ssrRenderClass([{
          "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border border-purple-200/50 dark:border-purple-800/50": autoSaveStatus.value === "saving",
          "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-800/50": autoSaveStatus.value === "saved",
          "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/50 dark:border-amber-800/50": autoSaveStatus.value === "local_saved" || autoSaveStatus.value === "dirty",
          "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200/50 dark:border-rose-800/50": autoSaveStatus.value === "error"
        }, "hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200"])}">`);
        if (autoSaveStatus.value === "saving") {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:spinner-gap-bold",
            class: "w-3.5 h-3.5 animate-spin shrink-0 text-purple-600 dark:text-purple-400"
          }, null, _parent));
        } else if (autoSaveStatus.value === "saved") {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:check-circle-fill",
            class: "w-3.5 h-3.5 text-emerald-500 shrink-0"
          }, null, _parent));
        } else if (autoSaveStatus.value === "local_saved") {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:cloud-check",
            class: "w-3.5 h-3.5 text-amber-500 shrink-0"
          }, null, _parent));
        } else if (autoSaveStatus.value === "dirty") {
          _push(`<span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0"></span>`);
        } else if (autoSaveStatus.value === "error") {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:warning-circle",
            class: "w-3.5 h-3.5 text-rose-500 shrink-0"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="truncate max-w-[190px]">`);
        if (autoSaveStatus.value === "saving") {
          _push(`<!--[-->${ssrInterpolate(_ctx.$t("admin.posts.editor.savingDraft", "\u6B63\u5728\u4FDD\u5B58\u8349\u7A3F..."))}<!--]-->`);
        } else if (autoSaveStatus.value === "saved") {
          _push(`<!--[-->${ssrInterpolate(_ctx.$t("admin.posts.editor.draftSaved", { time: lastSavedTime.value }))}<!--]-->`);
        } else if (autoSaveStatus.value === "local_saved") {
          _push(`<!--[-->${ssrInterpolate(form.value.isActive ? _ctx.$t("admin.posts.editor.savedLocal", "\u66F4\u6539\u5DF2\u6682\u5B58\u672C\u5730\uFF08\u672A\u53D1\u5E03\uFF09") : _ctx.$t("admin.posts.editor.draftSaved", { time: lastSavedTime.value }))}<!--]-->`);
        } else if (autoSaveStatus.value === "dirty") {
          _push(`<!--[-->${ssrInterpolate(_ctx.$t("admin.posts.editor.unsavedChanges", "\u6709\u672A\u4FDD\u5B58\u7684\u66F4\u6539"))}<!--]-->`);
        } else if (autoSaveStatus.value === "error") {
          _push(`<!--[-->${ssrInterpolate(_ctx.$t("admin.posts.editor.savedLocal", "\u66F4\u6539\u5DF2\u6682\u5B58\u672C\u5730"))}<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (form.value.slug) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "outline",
          icon: "ph:arrow-square-out",
          size: "sm",
          class: "rounded-xl",
          to: unref(localePath)(`/blog/${form.value.slug}`),
          target: "_blank",
          title: _ctx.$t("admin.posts.actions.preview")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("admin.posts.actions.preview"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("admin.posts.actions.preview")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "ghost",
        size: "sm",
        class: "rounded-xl",
        to: "/admin/posts"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("admin.common.cancel"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        variant: "solid",
        size: "sm",
        icon: "ph:check-bold",
        class: "rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-xs font-medium",
        loading: isSaving.value,
        disabled: !unref(hasAdminPerm)("posts:edit") || isLoading.value,
        title: isEditMode.value ? `${_ctx.$t("admin.common.save")} (\u2318/Ctrl+S)` : `${_ctx.$t("admin.posts.editor.createTitle")} (\u2318/Ctrl+S)`,
        onClick: ($event) => savePost()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(isEditMode.value ? _ctx.$t("admin.common.save") : _ctx.$t("admin.posts.editor.createTitle"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(isEditMode.value ? _ctx.$t("admin.common.save") : _ctx.$t("admin.posts.editor.createTitle")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      if (isLoading.value) {
        _push(`<div class="max-w-7xl mx-auto w-full space-y-6"><div class="h-10 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse w-3/4"></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-6"><div class="lg:col-span-8 space-y-4"><div class="h-12 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse"></div><div class="h-24 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse"></div><div class="h-96 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse"></div></div><div class="lg:col-span-4 space-y-4"><div class="h-48 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse"></div><div class="h-48 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse"></div></div></div></div>`);
      } else {
        _push(`<div class="max-w-7xl mx-auto w-full">`);
        if (hasLocalDraftAvailable.value) {
          _push(`<div class="mb-6 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border border-amber-300 dark:border-amber-700/60 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:clock-counter-clockwise-bold",
            class: "w-5 h-5"
          }, null, _parent));
          _push(`</div><div><p class="text-sm font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.posts.editor.draftFound", { time: localDraftTime.value }))}</p><p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">${ssrInterpolate(_ctx.$t("admin.posts.editor.draftFoundHint", "\u60A8\u53EF\u4EE5\u6062\u590D\u4E0A\u6B21\u672A\u63D0\u4EA4\u7684\u5185\u5BB9\uFF0C\u6216\u653E\u5F03\u5E76\u4F7F\u7528\u539F\u7248\u3002"))}</p></div></div><div class="flex items-center gap-2 shrink-0 self-end sm:self-center">`);
          _push(ssrRenderComponent(_component_UButton, {
            size: "sm",
            color: "primary",
            variant: "solid",
            class: "rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium shadow-xs",
            onClick: restoreLocalDraft
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("admin.posts.editor.restoreDraft", "\u6062\u590D\u8349\u7A3F"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.posts.editor.restoreDraft", "\u6062\u590D\u8349\u7A3F")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_UButton, {
            size: "sm",
            color: "neutral",
            variant: "ghost",
            class: "rounded-xl text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5",
            onClick: discardLocalDraft
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("admin.posts.editor.discardDraft", "\u653E\u5F03\u8349\u7A3F"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.posts.editor.discardDraft", "\u653E\u5F03\u8349\u7A3F")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (supportedLocales.value.length > 1) {
          _push(`<div class="border-b border-gray-200 dark:border-gray-800/80 mb-6 pb-2 flex items-center justify-between gap-3 overflow-x-auto hide-scrollbar"><div class="flex items-center gap-1.5 shrink-0"><span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mr-1">${ssrInterpolate(_ctx.$t("admin.posts.editor.localeTabs", "\u5185\u5BB9\u8BED\u8A00"))}: </span><!--[-->`);
          ssrRenderList(supportedLocales.value, (locale) => {
            _push(`<button type="button" class="${ssrRenderClass([
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer",
              currentTabLocale.value === locale ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-semibold" : locale !== defaultLocale.value && !form.value.title ? "text-gray-400 dark:text-gray-600 cursor-not-allowed border border-transparent" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 border border-transparent"
            ])}"${ssrIncludeBooleanAttr(locale !== defaultLocale.value && !form.value.title) ? " disabled" : ""}>`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: locale === defaultLocale.value ? "ph:star-fill" : "ph:translate",
              class: [
                "w-3.5 h-3.5",
                locale === defaultLocale.value ? "text-amber-500" : ""
              ]
            }, null, _parent));
            _push(`<span>${ssrInterpolate(locale.toUpperCase())}</span>`);
            if (locale === defaultLocale.value) {
              _push(`<span class="text-[10px] opacity-70">(${ssrInterpolate(_ctx.$t("admin.posts.editor.primary", "\u4E3B\u8BED\u8A00"))})</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</button>`);
          });
          _push(`<!--]--></div>`);
          if (currentTabLocale.value !== defaultLocale.value) {
            _push(`<span class="text-xs text-purple-600 dark:text-purple-400 font-medium shrink-0">${ssrInterpolate(_ctx.$t("admin.posts.editor.editingTranslation", "\u6B63\u5728\u7F16\u8F91 {locale} \u8BED\u8A00\u7FFB\u8BD1", { locale: currentTabLocale.value.toUpperCase() }))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"><div class="lg:col-span-8 xl:col-span-9 space-y-5"><div class="space-y-1.5"><label class="text-xs font-semibold text-gray-700 dark:text-gray-300">${ssrInterpolate(currentTabLocale.value === defaultLocale.value ? _ctx.$t("admin.posts.editor.fieldTitle") : _ctx.$t("admin.posts.editor.fieldTitleLocale", { locale: currentTabLocale.value }))} <span class="text-red-500">*</span></label>`);
        if (currentTabLocale.value === defaultLocale.value) {
          _push(ssrRenderComponent(_component_UInput, {
            modelValue: form.value.title,
            "onUpdate:modelValue": ($event) => form.value.title = $event,
            size: "xl",
            class: "w-full text-lg sm:text-xl font-bold tracking-tight rounded-xl",
            placeholder: _ctx.$t("admin.posts.editor.titlePlaceholder", "\u8F93\u5165\u5F15\u4EBA\u6CE8\u76EE\u7684\u6587\u7AE0\u6807\u9898..."),
            onInput: onTitleInput
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_UInput, {
            modelValue: activeTranslation.value.title,
            "onUpdate:modelValue": ($event) => activeTranslation.value.title = $event,
            size: "xl",
            class: "w-full text-lg sm:text-xl font-bold tracking-tight rounded-xl",
            placeholder: _ctx.$t("admin.posts.editor.translatedTitlePlaceholder", { locale: currentTabLocale.value })
          }, null, _parent));
        }
        _push(`</div><div class="space-y-1.5"><div class="flex items-center justify-between"><label class="text-xs font-semibold text-gray-700 dark:text-gray-300">${ssrInterpolate(currentTabLocale.value === defaultLocale.value ? _ctx.$t("admin.posts.editor.fieldDescription") : _ctx.$t("admin.posts.editor.fieldDescriptionLocale", { locale: currentTabLocale.value }))}</label>`);
        if (currentTabLocale.value === defaultLocale.value) {
          _push(ssrRenderComponent(_component_UButton, {
            size: "xs",
            variant: "ghost",
            color: "neutral",
            icon: "ph:magic-wand",
            disabled: !activeContentText.value,
            class: "text-xs rounded-lg hover:text-purple-600 dark:hover:text-purple-400",
            onClick: generateDescription
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("admin.posts.editor.generateDesc"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.posts.editor.generateDesc")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (currentTabLocale.value === defaultLocale.value) {
          _push(ssrRenderComponent(_component_UTextarea, {
            modelValue: form.value.description,
            "onUpdate:modelValue": ($event) => form.value.description = $event,
            rows: 2,
            class: "w-full rounded-xl text-sm",
            placeholder: _ctx.$t("admin.posts.editor.descPlaceholder", "\u7B80\u660E\u627C\u8981\u7684\u6587\u7AE0\u6458\u8981\uFF0C\u5C06\u5C55\u793A\u5728\u5217\u8868\u5361\u7247\u4E0E SEO \u641C\u7D22\u7ED3\u679C\u4E2D...")
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_UTextarea, {
            modelValue: activeTranslation.value.description,
            "onUpdate:modelValue": ($event) => activeTranslation.value.description = $event,
            rows: 2,
            class: "w-full rounded-xl text-sm",
            placeholder: _ctx.$t("admin.posts.editor.translatedDescPlaceholder", { locale: currentTabLocale.value })
          }, null, _parent));
        }
        _push(`</div><div class="space-y-1.5"><label class="text-xs font-semibold text-gray-700 dark:text-gray-300">${ssrInterpolate(currentTabLocale.value === defaultLocale.value ? _ctx.$t("admin.posts.editor.fieldContent") : _ctx.$t("admin.posts.editor.fieldContentLocale", { locale: currentTabLocale.value }))}</label><div class="border border-gray-200/80 dark:border-gray-800/80 rounded-2xl overflow-hidden bg-white dark:bg-[#121214] shadow-xs">`);
        if (currentTabLocale.value === defaultLocale.value) {
          _push(ssrRenderComponent(unref(RichEditor), {
            modelValue: form.value.content,
            "onUpdate:modelValue": ($event) => form.value.content = $event,
            class: "min-h-[560px]"
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(RichEditor), {
            modelValue: activeTranslation.value.content,
            "onUpdate:modelValue": ($event) => activeTranslation.value.content = $event,
            class: "min-h-[560px]"
          }, null, _parent));
        }
        _push(`</div></div></div><div class="lg:col-span-4 xl:col-span-3 space-y-4"><div class="bg-white dark:bg-[#18181b]/50 border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-4 shadow-xs space-y-4"><div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-800/60 pb-3"><span class="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:sliders-horizontal-duotone",
          class: "w-4 h-4 text-purple-600 dark:text-purple-400"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("admin.posts.editor.cardPublish", "\u53D1\u5E03\u8BBE\u7F6E"))}</span><span class="text-[11px] text-gray-400 font-mono">${ssrInterpolate(isEditMode.value ? "ID: " + postId.value : "NEW")}</span></div><div class="flex items-center justify-between pt-1"><div><div class="text-xs font-medium text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.posts.editor.publishNow"))}</div><div class="text-[11px] text-gray-500 dark:text-gray-400">${ssrInterpolate(form.value.isActive ? _ctx.$t("admin.posts.editor.publishedHint", "\u524D\u53F0\u8BBF\u5BA2\u53EF\u89C1") : _ctx.$t("admin.posts.editor.draftHint", "\u4EC5\u540E\u53F0\u53EF\u89C1\u8349\u7A3F"))}</div></div>`);
        _push(ssrRenderComponent(_component_USwitch, {
          modelValue: form.value.isActive,
          "onUpdate:modelValue": ($event) => form.value.isActive = $event,
          disabled: !unref(hasAdminPerm)("posts:edit"),
          size: "sm"
        }, null, _parent));
        _push(`</div><div class="space-y-1 pt-1"><label class="text-xs font-medium text-gray-700 dark:text-gray-300">${ssrInterpolate(_ctx.$t("admin.posts.editor.fieldType"))}</label>`);
        _push(ssrRenderComponent(_component_USelectMenu, {
          modelValue: form.value.type,
          "onUpdate:modelValue": ($event) => form.value.type = $event,
          items: typeOptions.value,
          "value-key": "value",
          class: "w-full",
          ui: { base: "rounded-xl" }
        }, null, _parent));
        _push(`</div>`);
        if (form.value.type === "changelog") {
          _push(`<div class="space-y-1 pt-1 bg-purple-50/50 dark:bg-purple-950/20 p-3 rounded-xl border border-purple-200/50 dark:border-purple-800/30"><div class="flex items-center justify-between"><label class="text-xs font-semibold text-purple-700 dark:text-purple-300 flex items-center gap-1">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:tag-bold",
            class: "w-3.5 h-3.5"
          }, null, _parent));
          _push(` ${ssrInterpolate(_ctx.$t("admin.posts.changelog.fieldVersion"))}</label>`);
          if (!isEditMode.value) {
            _push(ssrRenderComponent(_component_UButton, {
              size: "xs",
              variant: "ghost",
              color: "neutral",
              icon: "ph:arrow-clockwise",
              loading: isFetchingLatestVersion.value,
              class: "text-[10px] text-purple-600 dark:text-purple-400 h-6",
              onClick: fetchAndBumpLatestVersion
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t("admin.posts.editor.autoNextVersion", "\u83B7\u53D6\u4E0B\u4E2A\u7248\u672C"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.posts.editor.autoNextVersion", "\u83B7\u53D6\u4E0B\u4E2A\u7248\u672C")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          _push(ssrRenderComponent(_component_UInput, {
            modelValue: changelogVersion.value,
            "onUpdate:modelValue": ($event) => changelogVersion.value = $event,
            class: "w-full font-mono text-sm",
            placeholder: "v1.1.10",
            onInput: onVersionInput
          }, null, _parent));
          _push(`<p class="text-[10px] text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.posts.changelog.versionHint"))}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="bg-white dark:bg-[#18181b]/50 border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-4 shadow-xs space-y-3.5"><div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-800/60 pb-3"><span class="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:link-duotone",
          class: "w-4 h-4 text-purple-600 dark:text-purple-400"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("admin.posts.editor.cardSlug", "\u94FE\u63A5\u4E0E\u6807\u8BC6"))}</span></div><div class="space-y-1"><div class="flex items-center justify-between"><label class="text-xs font-medium text-gray-700 dark:text-gray-300">${ssrInterpolate(_ctx.$t("admin.posts.editor.fieldSlug"))} <span class="text-red-500">*</span></label><button type="button" class="text-[11px] text-purple-600 dark:text-purple-400 hover:underline cursor-pointer">${ssrInterpolate(_ctx.$t("admin.posts.editor.autoGenerate", "\u4ECE\u6807\u9898\u751F\u6210"))}</button></div>`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: form.value.slug,
          "onUpdate:modelValue": ($event) => form.value.slug = $event,
          class: "w-full font-mono text-xs",
          ui: { base: "rounded-xl" },
          placeholder: "my-first-post"
        }, null, _parent));
        _push(`<div class="pt-1 flex items-center gap-1.5 text-[11px] font-mono text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/60 px-2.5 py-1.5 rounded-lg border border-gray-200/50 dark:border-gray-800/50 truncate">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:globe",
          class: "w-3.5 h-3.5 text-purple-500 shrink-0"
        }, null, _parent));
        _push(`<span class="truncate">/blog/${ssrInterpolate(form.value.slug || "...")}</span>`);
        if (form.value.slug) {
          _push(ssrRenderComponent(_component_UButton, {
            size: "xs",
            variant: "ghost",
            color: "neutral",
            icon: "ph:copy",
            class: "ml-auto shrink-0 p-0.5",
            onClick: copyUrl
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="space-y-1 pt-1"><label class="text-xs font-medium text-gray-700 dark:text-gray-300">${ssrInterpolate(_ctx.$t("admin.posts.editor.fieldKey"))}</label>`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: form.value.key,
          "onUpdate:modelValue": ($event) => form.value.key = $event,
          class: "w-full font-mono text-xs",
          ui: { base: "rounded-xl" },
          placeholder: _ctx.$t("admin.posts.editor.keyPlaceholder")
        }, null, _parent));
        _push(`</div><div class="space-y-1 pt-1"><label class="text-xs font-medium text-gray-700 dark:text-gray-300">${ssrInterpolate(_ctx.$t("admin.posts.editor.fieldSort"))}</label>`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: form.value.sort,
          "onUpdate:modelValue": ($event) => form.value.sort = $event,
          type: "number",
          class: "w-full font-mono text-xs",
          ui: { base: "rounded-xl" },
          placeholder: _ctx.$t("admin.posts.editor.sortPlaceholder")
        }, null, _parent));
        _push(`</div></div><div class="bg-white dark:bg-[#18181b]/50 border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-4 shadow-xs space-y-3"><div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-800/60 pb-3"><span class="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:image-duotone",
          class: "w-4 h-4 text-purple-600 dark:text-purple-400"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("admin.posts.editor.fieldCover"))}</span>`);
        if (form.value.imageUrl) {
          _push(`<button type="button" class="text-[11px] text-red-500 hover:underline cursor-pointer">${ssrInterpolate(_ctx.$t("admin.common.remove", "\u79FB\u9664"))}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="w-full aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex items-center justify-center relative group">`);
        if (form.value.imageUrl) {
          _push(`<img${ssrRenderAttr("src", unref(buildImageProxyUrl)(form.value.imageUrl))} alt="Cover Preview" class="w-full h-full object-cover">`);
        } else {
          _push(`<div class="flex flex-col items-center justify-center text-gray-400 dark:text-gray-600 text-xs">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:image-square-duotone",
            class: "w-8 h-8 mb-1 opacity-50"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(_ctx.$t("admin.posts.editor.noCover", "\u672A\u8BBE\u7F6E\u5C01\u9762\u56FE"))}</span></div>`);
        }
        _push(`</div><div class="space-y-2"><div class="flex gap-2">`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: form.value.imageUrl,
          "onUpdate:modelValue": ($event) => form.value.imageUrl = $event,
          class: "flex-1 font-mono text-xs",
          ui: { base: "rounded-xl" },
          placeholder: "https://..."
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "outline",
          icon: "ph:upload-simple",
          size: "sm",
          class: "rounded-xl shrink-0",
          loading: isUploading.value,
          onClick: ($event) => {
            var _a;
            return (_a = fileInput.value) == null ? void 0 : _a.click();
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("admin.posts.editor.upload"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("admin.posts.editor.upload")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<input type="file" class="hidden" accept="image/png, image/jpeg, image/webp, image/gif"></div></div></div></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/posts/PostEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "AdminPostsPostEditor" });

export { __nuxt_component_0 as _ };
