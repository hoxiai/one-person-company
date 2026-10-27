import { e as useToast, f as useAdminPermissions, d as useFormatTime, x as usePagination, k as _sfc_main$M, i as _sfc_main$R, _ as _sfc_main$W, b as _sfc_main$v, l as _sfc_main$u, z as _sfc_main$y, n as _sfc_main$G, B as _sfc_main$l } from './server.mjs';
import { defineComponent, ref, reactive, computed, mergeProps, withCtx, createTextVNode, toDisplayString, unref, isRef, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, withKeys, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "releases",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const { formatDateTime: formatTime } = useFormatTime();
    const { page, pageSize, onPageChange } = usePagination(15);
    const defaultLocaleList = [
      { code: "zh", label: "\u7B80\u4F53\u4E2D\u6587" },
      { code: "en", label: "English" },
      { code: "zh-TW", label: "\u7E41\u9AD4 (TW)" },
      { code: "zh-HK", label: "\u7E41\u9AD4 (HK)" },
      { code: "ru", label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" },
      { code: "ja", label: "\u65E5\u672C\u8A9E" },
      { code: "ko", label: "\uD55C\uAD6D\uC5B4" }
    ];
    const changeTypeSuggestions = [
      { label: "\u65B0\u529F\u80FD (feat)", value: "feat" },
      { label: "\u95EE\u9898\u4FEE\u590D (fix)", value: "fix" },
      { label: "\u6027\u80FD\u4F18\u5316 (perf)", value: "perf" },
      { label: "\u754C\u9762\u4F53\u9A8C (ui)", value: "ui" },
      { label: "\u8FD0\u7EF4\u90E8\u7F72 (ops)", value: "ops" },
      { label: "\u5B89\u5168\u52A0\u56FA (security)", value: "security" },
      { label: "\u7834\u574F\u6027\u53D8\u66F4 (breaking)", value: "breaking" },
      { label: "\u6587\u6863\u66F4\u65B0 (docs)", value: "docs" },
      { label: "\u67B6\u6784\u91CD\u6784 (refactor)", value: "refactor" },
      { label: "AI \u80FD\u529B (ai)", value: "ai" }
    ];
    const statusFilterOptions = [
      { label: "\u5168\u90E8\u72B6\u6001", value: "all" },
      { label: "\u6B63\u5F0F\u751F\u6548", value: "published" },
      { label: "\u5DF2\u64A4\u56DE", value: "withdrawn" },
      { label: "\u8349\u7A3F / \u9690\u85CF", value: "draft" }
    ];
    const loading = ref(false);
    const seeding = ref(false);
    const saving = ref(false);
    const savingApp = ref(false);
    const releaseList = ref([]);
    const appSummaries = ref([]);
    const total = ref(0);
    const stats = reactive({
      total: 0,
      published: 0,
      withdrawn: 0,
      draft: 0,
      appsCount: 0
    });
    const keyword = ref("");
    const appFilter = ref("all");
    const channelFilter = ref("all");
    const channelFilterInput = ref("");
    const statusFilter = ref("all");
    const previewLang = ref("zh");
    const appFilterOptions = computed(() => [
      { label: "\u5168\u90E8\u8F6F\u4EF6\u4EA7\u54C1", value: "all" },
      ...appSummaries.value.map((app) => ({
        label: `${app.nameZh || app.name} (${app.appKey})`,
        value: app.appKey
      }))
    ]);
    const availableLocaleTabs = computed(() => {
      const map = /* @__PURE__ */ new Map();
      for (const item of defaultLocaleList) {
        map.set(item.code, item);
      }
      for (const rel of releaseList.value) {
        for (const code of Object.keys(rel.locales || {})) {
          if (!map.has(code)) {
            map.set(code, { code, label: code });
          }
        }
      }
      return Array.from(map.values());
    });
    function getAppDisplayName(appKey) {
      const found = appSummaries.value.find((a) => a.appKey === appKey);
      if (found && (found.nameZh || found.name) && (found.nameZh || found.name) !== appKey) {
        return `${found.nameZh || found.name}`;
      }
      return appKey;
    }
    function getPopulatedLocaleCodes(entry) {
      const locales = entry.locales || {};
      return Object.keys(locales).filter((code) => {
        const loc = locales[code];
        return Boolean(loc && (loc.title || loc.summary || Array.isArray(loc.items) && loc.items.length > 0));
      });
    }
    function onChannelFilterEnter() {
      const val = channelFilterInput.value.trim().toLowerCase();
      channelFilter.value = val || "all";
      page.value = 1;
      fetchReleases();
    }
    function onFilterChange() {
      page.value = 1;
      fetchReleases();
    }
    function resetFilters() {
      keyword.value = "";
      appFilter.value = "all";
      channelFilter.value = "all";
      channelFilterInput.value = "";
      statusFilter.value = "all";
      page.value = 1;
      fetchReleases();
    }
    function resolveLocalized(entry, lang) {
      const locales = entry.locales || {};
      const baseLang = String(lang).split("-")[0] || lang;
      const candidate = locales[lang] || locales[baseLang] || (lang === "zh-HK" ? locales["zh-TW"] || locales.zh : void 0) || (lang === "zh-TW" ? locales["zh-HK"] || locales.zh : void 0) || locales.zh || locales.en || Object.values(locales)[0];
      return {
        title: (candidate == null ? void 0 : candidate.title) || entry.title || entry.name || `v${entry.version}`,
        summary: (candidate == null ? void 0 : candidate.summary) || entry.summary || "",
        body: (candidate == null ? void 0 : candidate.body) || entry.body || "",
        items: Array.isArray(candidate == null ? void 0 : candidate.items) ? candidate.items : []
      };
    }
    async function fetchReleases() {
      var _a;
      loading.value = true;
      try {
        const res = await $fetch("/api/admin/releases", {
          query: {
            appKey: appFilter.value,
            channel: channelFilter.value,
            status: statusFilter.value,
            keyword: keyword.value || void 0,
            page: page.value,
            pageSize: pageSize.value
          }
        });
        const data = (res == null ? void 0 : res.data) || {};
        releaseList.value = data.items || [];
        total.value = Number(data.total || 0);
        if (Array.isArray(data.apps)) {
          appSummaries.value = data.apps;
        }
        if (data.stats) {
          stats.total = Number(data.stats.total || 0);
          stats.published = Number(data.stats.published || 0);
          stats.withdrawn = Number(data.stats.withdrawn || 0);
          stats.draft = Number(data.stats.draft || 0);
          stats.appsCount = Number(data.stats.appsCount || 0);
        }
      } catch (err) {
        toast.add({
          title: "\u52A0\u8F7D\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || "\u65E0\u6CD5\u52A0\u8F7D\u7248\u672C\u5217\u8868",
          color: "error"
        });
      } finally {
        loading.value = false;
      }
    }
    async function syncBundledReleases() {
      var _a;
      seeding.value = true;
      try {
        const targetApp = appFilter.value !== "all" ? appFilter.value : "all";
        await $fetch("/api/admin/releases", {
          method: "POST",
          body: {
            action: "seed_bundled",
            appKey: targetApp
          }
        });
        toast.add({
          title: "\u540C\u6B65\u5B8C\u6210",
          description: "\u5DF2\u5C06\u5185\u7F6E\u591A\u8BED\u8A00\u7248\u672C\u8BB0\u5F55\u540C\u6B65\u81F3\u6838\u5FC3\u6570\u636E\u5E93\u8868 releases",
          color: "success"
        });
        await fetchReleases();
      } catch (err) {
        toast.add({
          title: "\u540C\u6B65\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || "\u540C\u6B65\u5185\u7F6E\u7248\u672C\u5931\u8D25",
          color: "error"
        });
      } finally {
        seeding.value = false;
      }
    }
    const isAppManagerOpen = ref(false);
    const appForm = reactive({
      isEditing: false,
      appKey: "",
      name: "",
      description: "",
      defaultChannel: "stable",
      repoUrl: ""
    });
    function openAppManagerModal(existing) {
      {
        appForm.isEditing = false;
        appForm.appKey = "";
        appForm.name = "";
        appForm.description = "";
        appForm.defaultChannel = "stable";
        appForm.repoUrl = "";
      }
      isAppManagerOpen.value = true;
    }
    async function saveCustomApp() {
      var _a, _b;
      if (!appForm.appKey.trim()) {
        toast.add({
          title: "\u8BF7\u586B\u5199\u8F6F\u4EF6\u552F\u4E00\u6807\u8BC6 (appKey)",
          color: "error"
        });
        return;
      }
      savingApp.value = true;
      try {
        const res = await $fetch("/api/admin/releases", {
          method: "POST",
          body: {
            action: "save_app",
            appKey: appForm.appKey.trim(),
            name: appForm.name.trim() || appForm.appKey.trim(),
            nameZh: appForm.name.trim() || appForm.appKey.trim(),
            description: appForm.description.trim(),
            defaultChannel: appForm.defaultChannel.trim() || "stable",
            repoUrl: appForm.repoUrl.trim() || void 0
          }
        });
        if (Array.isArray((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.apps)) {
          appSummaries.value = res.data.apps;
        }
        toast.add({
          title: "\u8F6F\u4EF6\u4EA7\u54C1\u5DF2\u4FDD\u5B58",
          description: `${appForm.name || appForm.appKey} \u5DF2\u66F4\u65B0`,
          color: "success"
        });
        isAppManagerOpen.value = false;
        await fetchReleases();
      } catch (err) {
        toast.add({
          title: "\u4FDD\u5B58\u5931\u8D25",
          description: ((_b = err == null ? void 0 : err.data) == null ? void 0 : _b.message) || (err == null ? void 0 : err.message) || "\u8F6F\u4EF6\u4EA7\u54C1\u4FDD\u5B58\u5931\u8D25",
          color: "error"
        });
      } finally {
        savingApp.value = false;
      }
    }
    async function removeCustomApp(appKey) {
      var _a, _b;
      if (!appKey) return;
      savingApp.value = true;
      try {
        const res = await $fetch("/api/admin/releases", {
          method: "POST",
          body: {
            action: "delete_app",
            appKey
          }
        });
        if (Array.isArray((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.apps)) {
          appSummaries.value = res.data.apps;
        }
        if (appFilter.value === appKey) {
          appFilter.value = "all";
        }
        isAppManagerOpen.value = false;
        await fetchReleases();
      } catch (err) {
        toast.add({
          title: "\u79FB\u9664\u5931\u8D25",
          description: ((_b = err == null ? void 0 : err.data) == null ? void 0 : _b.message) || (err == null ? void 0 : err.message) || "\u79FB\u9664\u8F6F\u4EF6\u5931\u8D25",
          color: "error"
        });
      } finally {
        savingApp.value = false;
      }
    }
    const isModalOpen = ref(false);
    const editingId = ref(null);
    const activeTabLang = ref("zh");
    const customLocaleInput = ref("");
    function createEmptyLocales() {
      const obj = {};
      for (const loc of defaultLocaleList) {
        obj[loc.code] = {
          title: "",
          summary: "",
          items: loc.code === "zh" ? [{ type: "feat", text: "" }] : []
        };
      }
      return obj;
    }
    const form = reactive({
      appKey: "",
      appName: "",
      channel: "stable",
      version: "1.0.0",
      tagName: "v1.0.0",
      name: "v1.0.0",
      commit: "",
      htmlUrl: "",
      releasedAt: "",
      mandatory: false,
      isActive: true,
      locales: createEmptyLocales(),
      assets: []
    });
    const formLocaleTabs = computed(() => {
      const map = /* @__PURE__ */ new Map();
      for (const item of defaultLocaleList) {
        map.set(item.code, item);
      }
      for (const code of Object.keys(form.locales || {})) {
        if (!map.has(code)) {
          map.set(code, { code, label: code });
        }
      }
      return Array.from(map.values());
    });
    function addCustomLocaleTab() {
      const clean = customLocaleInput.value.trim().replace(/_/g, "-");
      if (!clean) return;
      if (!form.locales[clean]) {
        form.locales[clean] = {
          title: "",
          summary: "",
          items: [{ type: "feat", text: "" }]
        };
      }
      activeTabLang.value = clean;
      customLocaleInput.value = "";
    }
    function bumpSemVerString(ver, kind = "patch") {
      const m = String(ver || "").trim().replace(/^v/i, "").match(/^(\d+)\.(\d+)\.(\d+)/);
      if (!m) return "1.0.0";
      const major = Number(m[1] || 0);
      const minor = Number(m[2] || 0);
      const patch = Number(m[3] || 0);
      if (kind === "major") return `${major + 1}.0.0`;
      if (kind === "minor") return `${major}.${minor + 1}.0`;
      return `${major}.${minor}.${patch + 1}`;
    }
    function selectFormApp(app) {
      form.appKey = app.appKey;
      form.appName = (app.nameZh || app.name) !== app.appKey ? app.nameZh || app.name : "";
      form.channel = app.defaultChannel || "stable";
      if (app.latestVersion && !editingId.value) {
        form.version = bumpSemVerString(app.latestVersion, "patch");
      }
      onVersionInput();
    }
    function onAppKeyInput() {
      const matched = appSummaries.value.find((a) => a.appKey === form.appKey.trim().toLowerCase());
      if (matched && !form.appName) {
        form.appName = (matched.nameZh || matched.name) !== matched.appKey ? matched.nameZh || matched.name : "";
      }
      onVersionInput();
    }
    function onVersionInput() {
      const cleanVer = String(form.version || "").trim().replace(/^v/i, "");
      if (!cleanVer) return;
      form.tagName = `v${cleanVer}`;
      const displayPrefix = form.appName.trim() || form.appKey.trim();
      form.name = displayPrefix ? `${displayPrefix} v${cleanVer}` : `v${cleanVer}`;
    }
    function bumpFormVersion(kind) {
      const matchedApp = appSummaries.value.find((a) => a.appKey === form.appKey.trim());
      const baseVersion = (matchedApp == null ? void 0 : matchedApp.latestVersion) || form.version || "1.0.0";
      form.version = bumpSemVerString(baseVersion, kind);
      onVersionInput();
    }
    function isFormLocaleFilled(lang) {
      const loc = form.locales[lang];
      if (!loc) return false;
      return Boolean(
        loc.title.trim() || loc.summary.trim() || loc.items.some((i) => i.text && i.text.trim())
      );
    }
    function addLocaleItem(lang) {
      if (!form.locales[lang]) {
        form.locales[lang] = { title: "", summary: "", items: [] };
      }
      form.locales[lang].items.push({ type: "feat", text: "" });
    }
    function removeLocaleItem(lang, index) {
      var _a;
      (_a = form.locales[lang]) == null ? void 0 : _a.items.splice(index, 1);
    }
    function copyFromZhToCurrentLocale() {
      const target = activeTabLang.value;
      if (target === "zh") return;
      const source = form.locales.zh;
      if (!source) return;
      form.locales[target] = {
        title: source.title,
        summary: source.summary,
        body: source.body,
        items: source.items.map((i) => ({ type: i.type, text: i.text }))
      };
    }
    function addAssetRow() {
      form.assets.push({
        name: "",
        platform: "",
        arch: "",
        package: "",
        browser_download_url: "",
        size: 0,
        sha256: "",
        signature: "",
        minimumSystemVersion: ""
      });
    }
    function removeAssetRow(index) {
      form.assets.splice(index, 1);
    }
    function openCreateModal() {
      editingId.value = null;
      const firstApp = appSummaries.value[0];
      const defaultAppKey = appFilter.value !== "all" ? appFilter.value : (firstApp == null ? void 0 : firstApp.appKey) || "";
      const matchedApp = appSummaries.value.find((a) => a.appKey === defaultAppKey);
      form.appKey = defaultAppKey;
      form.appName = matchedApp && (matchedApp.nameZh || matchedApp.name) !== matchedApp.appKey ? matchedApp.nameZh || matchedApp.name : "";
      form.channel = (matchedApp == null ? void 0 : matchedApp.defaultChannel) || "stable";
      form.version = (matchedApp == null ? void 0 : matchedApp.latestVersion) ? bumpSemVerString(matchedApp.latestVersion, "patch") : "1.0.0";
      onVersionInput();
      form.commit = "";
      form.htmlUrl = (matchedApp == null ? void 0 : matchedApp.repoUrl) ? `${matchedApp.repoUrl}/releases/tag/${form.tagName}` : "";
      form.releasedAt = (/* @__PURE__ */ new Date()).toISOString();
      form.mandatory = false;
      form.isActive = true;
      form.locales = createEmptyLocales();
      form.assets = [];
      activeTabLang.value = "zh";
      isModalOpen.value = true;
    }
    function openEditModal(rel) {
      editingId.value = rel.id || null;
      const matchedApp = appSummaries.value.find((a) => a.appKey === rel.appKey);
      const metaName = rel.metaData && typeof rel.metaData.appName === "string" ? rel.metaData.appName : "";
      form.appKey = rel.appKey;
      form.appName = metaName || (matchedApp && (matchedApp.nameZh || matchedApp.name) !== matchedApp.appKey ? matchedApp.nameZh || matchedApp.name : "");
      form.channel = String(rel.channel || "stable");
      form.version = rel.version;
      form.tagName = rel.tag_name || `v${rel.version}`;
      form.name = rel.name || `${rel.appKey} v${rel.version}`;
      form.commit = rel.commit || "";
      form.htmlUrl = rel.html_url || "";
      form.releasedAt = rel.releasedAt || (/* @__PURE__ */ new Date()).toISOString();
      form.mandatory = Boolean(rel.mandatory);
      form.isActive = rel.isActive !== false;
      const nextLocales = createEmptyLocales();
      for (const [locCode, existingLoc] of Object.entries(rel.locales || {})) {
        if (existingLoc) {
          nextLocales[locCode] = {
            title: existingLoc.title || "",
            summary: existingLoc.summary || "",
            body: existingLoc.body || "",
            items: Array.isArray(existingLoc.items) ? existingLoc.items.map((i) => ({ type: i.type || "feat", text: i.text || "" })) : []
          };
        }
      }
      form.locales = nextLocales;
      form.assets = Array.isArray(rel.assets) ? rel.assets.map((a) => ({
        name: a.name || "",
        platform: a.platform || "",
        arch: a.arch || "",
        package: a.package || "",
        browser_download_url: a.browser_download_url || a.url || "",
        size: Number(a.size || 0),
        sha256: a.sha256 || "",
        signature: a.signature || a.edSignature || "",
        minimumSystemVersion: a.minimumSystemVersion || ""
      })) : [];
      activeTabLang.value = "zh";
      isModalOpen.value = true;
    }
    async function saveRelease() {
      var _a;
      if (!form.appKey.trim() || !form.version.trim()) {
        toast.add({
          title: "\u53C2\u6570\u4E0D\u5B8C\u6574",
          description: "\u8BF7\u586B\u5199\u8F6F\u4EF6\u6807\u8BC6 (appKey) \u4E0E SemVer \u7248\u672C\u53F7",
          color: "error"
        });
        return;
      }
      saving.value = true;
      try {
        const url = editingId.value ? `/api/admin/releases/${editingId.value}` : "/api/admin/releases";
        const method = editingId.value ? "PUT" : "POST";
        await $fetch(url, {
          method,
          body: {
            appKey: form.appKey.trim(),
            appName: form.appName.trim() || void 0,
            channel: form.channel.trim() || "stable",
            version: form.version.trim(),
            tagName: form.tagName.trim(),
            name: form.name.trim(),
            commit: form.commit.trim(),
            htmlUrl: form.htmlUrl.trim(),
            releasedAt: form.releasedAt,
            mandatory: form.mandatory,
            isActive: form.isActive,
            locales: form.locales,
            assets: form.assets
          }
        });
        toast.add({
          title: editingId.value ? "\u4FEE\u6539\u5DF2\u4FDD\u5B58" : "\u65B0\u7248\u672C\u5DF2\u53D1\u5E03",
          description: `${form.appName || form.appKey} v${form.version} \u5DF2\u66F4\u65B0`,
          color: "success"
        });
        isModalOpen.value = false;
        await fetchReleases();
      } catch (err) {
        toast.add({
          title: "\u4FDD\u5B58\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || "\u7248\u672C\u4FDD\u5B58\u5931\u8D25",
          color: "error"
        });
      } finally {
        saving.value = false;
      }
    }
    async function toggleWithdrawn(rel) {
      var _a;
      if (!rel.id) return;
      const nextWithdrawn = !rel.withdrawn_at;
      try {
        await $fetch(`/api/admin/releases/${rel.id}/status`, {
          method: "PATCH",
          body: { withdrawn: nextWithdrawn }
        });
        toast.add({
          title: nextWithdrawn ? "\u7248\u672C\u5DF2\u64A4\u56DE" : "\u7248\u672C\u5DF2\u6062\u590D\u4E0A\u67B6",
          description: `${rel.appKey} v${rel.version} \u72B6\u6001\u5DF2\u66F4\u65B0`,
          color: "success"
        });
        await fetchReleases();
      } catch (err) {
        toast.add({
          title: "\u64CD\u4F5C\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || "\u66F4\u65B0\u72B6\u6001\u5931\u8D25",
          color: "error"
        });
      }
    }
    async function confirmDeleteRelease(rel) {
      var _a;
      if (!rel.id) return;
      if (!(void 0).confirm(`\u786E\u5B9A\u8981\u6C38\u4E45\u5220\u9664 ${rel.appKey} v${rel.version} \u7684\u7248\u672C\u8BB0\u5F55\u5417\uFF1F\u5EFA\u8BAE\u4F7F\u7528\u300C\u64A4\u56DE\u7248\u672C\u300D\u4EE5\u4FDD\u7559\u5BA1\u8BA1\u7EBF\u7D22\u3002`)) {
        return;
      }
      try {
        await $fetch(`/api/admin/releases/${rel.id}`, {
          method: "DELETE"
        });
        toast.add({
          title: "\u5DF2\u5220\u9664",
          description: `${rel.appKey} v${rel.version} \u5DF2\u5220\u9664`,
          color: "success"
        });
        await fetchReleases();
      } catch (err) {
        toast.add({
          title: "\u5220\u9664\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || "\u5220\u9664\u5931\u8D25",
          color: "error"
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UBadge = _sfc_main$M;
      const _component_UButton = _sfc_main$R;
      const _component_UIcon = _sfc_main$W;
      const _component_UInput = _sfc_main$v;
      const _component_USelect = _sfc_main$u;
      const _component_UPagination = _sfc_main$y;
      const _component_UModal = _sfc_main$G;
      const _component_UCheckbox = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-5 pb-12" }, _attrs))}><div class="flex flex-col sm:flex-row justify-between sm:items-center gap-3"><div><div class="flex items-center gap-2.5 flex-wrap"><h1 class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight"> \u591A\u8F6F\u4EF6\u7248\u672C\u53D1\u5E03\u4E2D\u5FC3 (Releases) </h1>`);
      _push(ssrRenderComponent(_component_UBadge, {
        color: "primary",
        variant: "subtle",
        size: "sm",
        class: "font-mono font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5171 ${ssrInterpolate(stats.total)} \u4E2A\u7248\u672C `);
          } else {
            return [
              createTextVNode(" \u5171 " + toDisplayString(stats.total) + " \u4E2A\u7248\u672C ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UBadge, {
        color: "success",
        variant: "subtle",
        size: "sm",
        class: "font-mono"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5DF2\u53D1\u5E03 ${ssrInterpolate(stats.published)}`);
          } else {
            return [
              createTextVNode(" \u5DF2\u53D1\u5E03 " + toDisplayString(stats.published), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (stats.withdrawn > 0) {
        _push(ssrRenderComponent(_component_UBadge, {
          color: "warning",
          variant: "subtle",
          size: "sm",
          class: "font-mono"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u5DF2\u64A4\u56DE ${ssrInterpolate(stats.withdrawn)}`);
            } else {
              return [
                createTextVNode(" \u5DF2\u64A4\u56DE " + toDisplayString(stats.withdrawn), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="text-gray-500 dark:text-gray-400 text-xs mt-1"> \u652F\u6301\u81EA\u5B9A\u4E49\u4EFB\u610F\u8F6F\u4EF6\u4EA7\u54C1\uFF08appKey\uFF09\u3001\u81EA\u5B9A\u4E49\u53D1\u5E03\u901A\u9053\uFF08Channel\uFF09\u3001\u81EA\u5B9A\u4E49\u53D8\u66F4\u7C7B\u578B\uFF08Type\uFF09\u4E0E\u591A\u8BED\u8A00\u7ED3\u6784\u5316\u66F4\u65B0\u65E5\u5FD7\u3001\u591A\u5E73\u53F0\u5B89\u88C5\u5305\u5206\u53D1 </p></div><div class="flex items-center gap-2 flex-wrap">`);
      if (unref(hasAdminPerm)("releases:edit")) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "outline",
          icon: "ph:squares-four",
          size: "sm",
          class: "rounded-xl",
          onClick: ($event) => openAppManagerModal()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u65B0\u589E / \u7BA1\u7406\u8F6F\u4EF6 `);
            } else {
              return [
                createTextVNode(" \u65B0\u589E / \u7BA1\u7406\u8F6F\u4EF6 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(hasAdminPerm)("releases:edit")) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "outline",
          icon: "ph:cloud-arrow-down",
          size: "sm",
          class: "rounded-xl",
          loading: seeding.value,
          onClick: syncBundledReleases
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u540C\u6B65\u5185\u7F6E\u7248\u672C\u5165\u5E93 `);
            } else {
              return [
                createTextVNode(" \u540C\u6B65\u5185\u7F6E\u7248\u672C\u5165\u5E93 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(hasAdminPerm)("releases:edit")) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "primary",
          icon: "ph:rocket-launch-fill",
          size: "sm",
          class: "rounded-xl",
          onClick: openCreateModal
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u53D1\u5E03\u65B0\u7248\u672C `);
            } else {
              return [
                createTextVNode(" \u53D1\u5E03\u65B0\u7248\u672C ")
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
        variant: "outline",
        icon: "ph:arrow-clockwise",
        size: "sm",
        class: "rounded-xl",
        loading: loading.value,
        onClick: fetchReleases
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5"><button type="button" class="${ssrRenderClass([appFilter.value === "all" ? "ring-2 ring-purple-500 border-purple-500" : "", "bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-gray-800/70 rounded-xl px-3.5 py-3 text-left transition-all cursor-pointer hover:border-purple-500/50"])}"><div class="flex items-center justify-between gap-2"><span class="text-xs font-semibold text-gray-900 dark:text-white truncate">\u5168\u90E8\u8F6F\u4EF6\u4EA7\u54C1</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:stack-duotone",
        class: "w-4 h-4 text-purple-500 shrink-0"
      }, null, _parent));
      _push(`</div><div class="mt-1.5 flex items-baseline justify-between"><span class="text-xl font-bold font-mono text-gray-900 dark:text-white">${ssrInterpolate(stats.total)}</span><span class="text-[10px] font-mono text-gray-400">${ssrInterpolate(appSummaries.value.length)} \u4E2A\u8F6F\u4EF6</span></div></button><!--[-->`);
      ssrRenderList(appSummaries.value, (app) => {
        _push(`<div class="${ssrRenderClass([appFilter.value === app.appKey ? "ring-2 ring-purple-500 border-purple-500" : "", "group relative bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-gray-800/70 rounded-xl px-3.5 py-3 text-left transition-all cursor-pointer hover:border-purple-500/50"])}"><div class="flex items-center justify-between gap-2"><span class="text-xs font-semibold text-gray-900 dark:text-white truncate">${ssrInterpolate(app.nameZh || app.name)}</span><div class="flex items-center gap-1"><span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">${ssrInterpolate(app.appKey)}</span>`);
        if (unref(hasAdminPerm)("releases:edit")) {
          _push(`<button type="button" class="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 text-gray-400 hover:text-purple-500" title="\u7F16\u8F91\u8F6F\u4EF6\u4FE1\u606F">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:pencil-simple",
            class: "w-3.5 h-3.5"
          }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="mt-1.5 flex items-baseline justify-between"><span class="text-base font-bold font-mono text-gray-900 dark:text-white">${ssrInterpolate(app.latestVersion ? `v${app.latestVersion}` : "\u672A\u53D1\u7248")}</span><span class="text-[10px] font-mono text-gray-400">${ssrInterpolate(app.activeCount)} \u6B63\u5F0F`);
        if (app.withdrawnCount > 0) {
          _push(`<!--[--> \xB7 ${ssrInterpolate(app.withdrawnCount)} \u64A4\u56DE<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span></div></div>`);
      });
      _push(`<!--]-->`);
      if (unref(hasAdminPerm)("releases:edit")) {
        _push(`<button type="button" class="border border-dashed border-gray-300 dark:border-gray-700 rounded-xl px-3.5 py-3 text-left transition-all cursor-pointer hover:border-purple-500 hover:bg-purple-50/30 dark:hover:bg-purple-950/20 flex flex-col justify-between"><div class="flex items-center justify-between gap-2"><span class="text-xs font-semibold text-purple-600 dark:text-purple-400">\u65B0\u589E\u81EA\u5B9A\u4E49\u8F6F\u4EF6</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:plus-circle-duotone",
          class: "w-4 h-4 text-purple-500 shrink-0"
        }, null, _parent));
        _push(`</div><div class="mt-1.5 text-[11px] text-gray-400"> \u81EA\u5B9A\u4E49 appKey\u3001\u540D\u79F0\u4E0E\u9ED8\u8BA4\u901A\u9053 </div></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-gray-800/70 rounded-2xl shadow-xs overflow-hidden"><div class="p-4 border-b border-gray-100 dark:border-gray-800/80 flex flex-col xl:flex-row xl:items-center justify-between gap-3 bg-gray-50/50 dark:bg-black/20"><div class="flex items-center gap-2 flex-wrap">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: keyword.value,
        "onUpdate:modelValue": ($event) => keyword.value = $event,
        placeholder: "\u641C\u7D22\u8F6F\u4EF6\u6807\u8BC6\u3001\u7248\u672C\u53F7\u3001Commit\u3001\u6807\u9898\u6216\u5185\u5BB9...",
        size: "sm",
        class: "w-full sm:w-64",
        icon: "ph:magnifying-glass",
        onKeydown: onFilterChange
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: appFilter.value,
        "onUpdate:modelValue": [($event) => appFilter.value = $event, onFilterChange],
        items: appFilterOptions.value,
        size: "sm",
        class: "w-44"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: channelFilterInput.value,
        "onUpdate:modelValue": ($event) => channelFilterInput.value = $event,
        placeholder: "\u901A\u9053\u8FC7\u6EE4 (\u5982 stable/beta)",
        size: "sm",
        class: "w-36 font-mono",
        onKeydown: onChannelFilterEnter,
        onBlur: onChannelFilterEnter
      }, null, _parent));
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: statusFilter.value,
        "onUpdate:modelValue": [($event) => statusFilter.value = $event, onFilterChange],
        items: statusFilterOptions,
        size: "sm",
        class: "w-32"
      }, null, _parent));
      if (keyword.value || appFilter.value !== "all" || channelFilter.value !== "all" || statusFilter.value !== "all") {
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "ghost",
          size: "xs",
          icon: "ph:x",
          onClick: resetFilters
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u91CD\u7F6E `);
            } else {
              return [
                createTextVNode(" \u91CD\u7F6E ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center gap-1.5 flex-wrap"><a${ssrRenderAttr("href", `/api/releases/appcast.xml?app=${encodeURIComponent(appFilter.value === "all" ? ((_a = appSummaries.value[0]) == null ? void 0 : _a.appKey) || "default" : appFilter.value)}&lang=${encodeURIComponent(previewLang.value)}`)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/60 hover:bg-amber-100 dark:hover:bg-amber-900/60 mr-2" title="\u6253\u5F00 Sparkle / WinSparkle Appcast XML \u8BA2\u9605\u6E90">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:rss-simple-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`<span>Appcast XML</span></a><span class="text-xs text-gray-500 dark:text-gray-400 mr-1">\u5217\u8868\u9884\u89C8\u8BED\u8A00:</span><!--[-->`);
      ssrRenderList(availableLocaleTabs.value, (loc) => {
        _push(`<button type="button" class="${ssrRenderClass([
          previewLang.value === loc.code ? "bg-purple-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700",
          "px-2 py-1 rounded-lg text-xs font-mono font-medium transition-colors"
        ])}">${ssrInterpolate(loc.code)}</button>`);
      });
      _push(`<!--]--></div></div><div class="overflow-x-auto"><table class="w-full text-left border-collapse"><thead><tr class="border-b border-gray-100 dark:border-gray-800/80 text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 bg-gray-50/30 dark:bg-black/10"><th class="py-3 px-4">\u8F6F\u4EF6 / \u901A\u9053</th><th class="py-3 px-4">\u7248\u672C / \u951A\u70B9</th><th class="py-3 px-4">\u591A\u8BED\u8A00\u6807\u9898\u4E0E\u66F4\u65B0\u5185\u5BB9 (${ssrInterpolate(previewLang.value)})</th><th class="py-3 px-4">\u591A\u8BED\u8A00\u8986\u76D6</th><th class="py-3 px-4">\u5206\u53D1\u5B89\u88C5\u5305</th><th class="py-3 px-4">\u72B6\u6001 / \u53D1\u5E03\u65F6\u95F4</th><th class="py-3 px-4 text-right">\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800/60 text-sm">`);
      if (loading.value && releaseList.value.length === 0) {
        _push(`<tr><td colspan="7" class="py-12 text-center text-gray-400 text-xs"> \u6B63\u5728\u52A0\u8F7D\u7248\u672C\u53D1\u5E03\u8BB0\u5F55... </td></tr>`);
      } else if (releaseList.value.length === 0) {
        _push(`<tr><td colspan="7" class="py-12 text-center"><div class="text-gray-400 text-sm">\u6682\u65E0\u7B26\u5408\u6761\u4EF6\u7684\u7248\u672C\u8BB0\u5F55</div><p class="text-gray-400 text-xs mt-1"> \u53EF\u70B9\u51FB\u53F3\u4E0A\u89D2\u300C\u65B0\u589E / \u7BA1\u7406\u8F6F\u4EF6\u300D\u6216\u76F4\u63A5\u70B9\u51FB\u300C\u53D1\u5E03\u65B0\u7248\u672C\u300D\u521B\u5EFA\u4EFB\u610F\u81EA\u5B9A\u4E49\u8F6F\u4EF6\u7684\u7248\u672C\u8BB0\u5F55 </p></td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(releaseList.value, (rel) => {
        _push(`<tr class="hover:bg-gray-50/70 dark:hover:bg-white/[0.02] transition-colors"><td class="py-3.5 px-4 align-top whitespace-nowrap"><div class="flex flex-col gap-1"><span class="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-gray-900 dark:text-white"><span class="w-2 h-2 rounded-full bg-purple-500"></span> ${ssrInterpolate(getAppDisplayName(rel.appKey))}</span><div class="flex items-center gap-1"><span class="text-[10px] font-mono text-gray-400">${ssrInterpolate(rel.appKey)}</span>`);
        _push(ssrRenderComponent(_component_UBadge, {
          color: rel.channel === "stable" ? "primary" : "warning",
          variant: "subtle",
          size: "xs",
          class: "font-mono"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(rel.channel)}`);
            } else {
              return [
                createTextVNode(toDisplayString(rel.channel), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (rel.mandatory) {
          _push(ssrRenderComponent(_component_UBadge, {
            color: "error",
            variant: "subtle",
            size: "xs"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u5F3A\u5236\u5347\u7EA7 `);
              } else {
                return [
                  createTextVNode(" \u5F3A\u5236\u5347\u7EA7 ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></td><td class="py-3.5 px-4 align-top whitespace-nowrap"><div class="font-mono font-bold text-sm text-blue-600 dark:text-blue-400"> v${ssrInterpolate(rel.version)}</div><div class="mt-1 flex items-center gap-1.5 text-[11px] font-mono text-gray-400">`);
        if (rel.commit) {
          _push(`<span class="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"> #${ssrInterpolate(rel.commit.slice(0, 8))}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (rel.html_url) {
          _push(`<a${ssrRenderAttr("href", rel.html_url)} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline inline-flex items-center gap-0.5"><span>\u94FE\u63A5</span>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:arrow-square-out",
            class: "w-3 h-3"
          }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td><td class="py-3.5 px-4 align-top max-w-md"><div class="font-semibold text-gray-900 dark:text-white text-sm line-clamp-1">${ssrInterpolate(resolveLocalized(rel, previewLang.value).title)}</div><p class="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-0.5">${ssrInterpolate(resolveLocalized(rel, previewLang.value).summary || "\u6682\u65E0\u6458\u8981\u63CF\u8FF0")}</p>`);
        if (resolveLocalized(rel, previewLang.value).items.length > 0) {
          _push(`<div class="mt-1.5 flex flex-wrap gap-1"><!--[-->`);
          ssrRenderList(resolveLocalized(rel, previewLang.value).items.slice(0, 3), (item, idx) => {
            _push(`<span class="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800/90 text-gray-600 dark:text-gray-300 max-w-xs truncate"><strong class="font-mono uppercase text-[10px] text-purple-600 dark:text-purple-400">${ssrInterpolate(item.type)}</strong><span class="truncate">${ssrInterpolate(item.text)}</span></span>`);
          });
          _push(`<!--]-->`);
          if (resolveLocalized(rel, previewLang.value).items.length > 3) {
            _push(`<span class="text-[10px] font-mono text-gray-400 self-center"> +${ssrInterpolate(resolveLocalized(rel, previewLang.value).items.length - 3)} \u9879 </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td class="py-3.5 px-4 align-top"><div class="flex flex-wrap gap-1 max-w-[160px]"><!--[-->`);
        ssrRenderList(getPopulatedLocaleCodes(rel), (locCode) => {
          _push(`<span class="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">${ssrInterpolate(locCode)}</span>`);
        });
        _push(`<!--]-->`);
        if (getPopulatedLocaleCodes(rel).length === 0) {
          _push(`<span class="text-[11px] text-gray-400"> \u9ED8\u8BA4 </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td><td class="py-3.5 px-4 align-top whitespace-nowrap">`);
        if (rel.assets && rel.assets.length > 0) {
          _push(`<div class="space-y-1"><!--[-->`);
          ssrRenderList(rel.assets.slice(0, 2), (asset, idx) => {
            _push(`<div class="text-xs flex items-center gap-1.5 font-mono text-gray-600 dark:text-gray-300">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:package-duotone",
              class: "w-3.5 h-3.5 text-blue-500 shrink-0"
            }, null, _parent));
            _push(`<a${ssrRenderAttr("href", asset.browser_download_url || asset.url)} target="_blank" rel="noopener noreferrer" class="hover:underline truncate max-w-[150px]"${ssrRenderAttr("title", asset.name)}>${ssrInterpolate(asset.platform || asset.name)}</a>`);
            if (asset.sha256) {
              _push(`<span class="text-[10px] px-1 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400"${ssrRenderAttr("title", `SHA-256: ${asset.sha256}`)}> SHA256 </span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]-->`);
          if (rel.assets.length > 2) {
            _push(`<div class="text-[10px] font-mono text-gray-400"> \u5171 ${ssrInterpolate(rel.assets.length)} \u4E2A\u5E73\u53F0\u5305 </div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<span class="text-xs text-gray-400">\u4EC5\u66F4\u65B0\u65E5\u5FD7</span>`);
        }
        _push(`</td><td class="py-3.5 px-4 align-top whitespace-nowrap"><div class="flex flex-col gap-1"><div>`);
        if (rel.withdrawn_at) {
          _push(ssrRenderComponent(_component_UBadge, {
            color: "error",
            variant: "subtle",
            size: "xs"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u5DF2\u64A4\u56DE (Withdrawn) `);
              } else {
                return [
                  createTextVNode(" \u5DF2\u64A4\u56DE (Withdrawn) ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else if (rel.isActive === false) {
          _push(ssrRenderComponent(_component_UBadge, {
            color: "neutral",
            variant: "subtle",
            size: "xs"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u8349\u7A3F / \u9690\u85CF `);
              } else {
                return [
                  createTextVNode(" \u8349\u7A3F / \u9690\u85CF ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_UBadge, {
            color: "success",
            variant: "subtle",
            size: "xs"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u6B63\u5F0F\u751F\u6548 `);
              } else {
                return [
                  createTextVNode(" \u6B63\u5F0F\u751F\u6548 ")
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`</div><span class="text-[11px] font-mono text-gray-400">${ssrInterpolate(unref(formatTime)(rel.releasedAt))}</span></div></td><td class="py-3.5 px-4 align-top text-right whitespace-nowrap"><div class="inline-flex items-center gap-1">`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          color: "neutral",
          variant: "ghost",
          icon: "ph:pencil-simple",
          disabled: !unref(hasAdminPerm)("releases:edit"),
          onClick: ($event) => openEditModal(rel)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u7F16\u8F91 `);
            } else {
              return [
                createTextVNode(" \u7F16\u8F91 ")
              ];
            }
          }),
          _: 2
        }, _parent));
        if (rel.id) {
          _push(ssrRenderComponent(_component_UButton, {
            size: "xs",
            color: rel.withdrawn_at ? "success" : "warning",
            variant: "outline",
            disabled: !unref(hasAdminPerm)("releases:edit"),
            onClick: ($event) => toggleWithdrawn(rel)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(rel.withdrawn_at ? "\u6062\u590D\u4E0A\u67B6" : "\u64A4\u56DE\u7248\u672C")}`);
              } else {
                return [
                  createTextVNode(toDisplayString(rel.withdrawn_at ? "\u6062\u590D\u4E0A\u67B6" : "\u64A4\u56DE\u7248\u672C"), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (rel.id) {
          _push(ssrRenderComponent(_component_UButton, {
            size: "xs",
            color: "error",
            variant: "ghost",
            icon: "ph:trash",
            disabled: !unref(hasAdminPerm)("releases:edit"),
            onClick: ($event) => confirmDeleteRelease(rel)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
      if (total.value > unref(pageSize)) {
        _push(`<div class="p-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between"><span class="text-xs text-gray-500"> \u5171 ${ssrInterpolate(total.value)} \u6761\u7248\u672C\u8BB0\u5F55\uFF0C\u7B2C ${ssrInterpolate(unref(page))} \u9875 </span>`);
        _push(ssrRenderComponent(_component_UPagination, {
          page: unref(page),
          "onUpdate:page": [($event) => isRef(page) ? page.value = $event : null, ($event) => unref(onPageChange)(fetchReleases)],
          total: total.value,
          "items-per-page": unref(pageSize)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: isAppManagerOpen.value,
        "onUpdate:open": ($event) => isAppManagerOpen.value = $event,
        ui: { content: "sm:max-w-lg" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-4"${_scopeId}><div class="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3"${_scopeId}><div${_scopeId}><h3 class="text-base font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(appForm.isEditing ? `\u7F16\u8F91\u8F6F\u4EF6\u4EA7\u54C1 (${appForm.appKey})` : "\u65B0\u589E\u81EA\u5B9A\u4E49\u8F6F\u4EF6\u4EA7\u54C1")}</h3><p class="text-xs text-gray-500 mt-0.5"${_scopeId}> \u81EA\u5B9A\u4E49\u8F6F\u4EF6\u6807\u8BC6\uFF08appKey\uFF09\u4E0E\u663E\u793A\u540D\u79F0\uFF0C\u5F7B\u5E95\u89E3\u8026\u5E95\u5C42\u53D1\u5E03\u6A21\u578B\u4E0E\u5177\u4F53\u4E1A\u52A1\u8F6F\u4EF6 </p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x",
              size: "sm",
              onClick: ($event) => isAppManagerOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-3"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u8F6F\u4EF6\u552F\u4E00\u6807\u8BC6 (appKey) * </label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: appForm.appKey,
              "onUpdate:modelValue": ($event) => appForm.appKey = $event,
              size: "sm",
              class: "w-full font-mono",
              placeholder: "\u4F8B\u5982: my-desktop-app / saas-gateway / ios-client",
              disabled: appForm.isEditing
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-[11px] text-gray-400 mt-1"${_scopeId}> \u5BA2\u6237\u7AEF\u8BF7\u6C42 \`/api/releases?app=xxx\` \u6216 \`/api/releases/check?app=xxx\` \u65F6\u4F20\u5165\u8BE5\u6807\u8BC6 </p></div><div${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u8F6F\u4EF6\u663E\u793A\u540D\u79F0 * </label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: appForm.name,
              "onUpdate:modelValue": ($event) => appForm.name = $event,
              size: "sm",
              class: "w-full",
              placeholder: "\u4F8B\u5982: \u8DE8\u5E73\u53F0\u684C\u9762\u5BA2\u6237\u7AEF / \u4F01\u4E1A\u7248\u7F51\u5173"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u9ED8\u8BA4\u53D1\u5E03\u901A\u9053 (Default Channel) </label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: appForm.defaultChannel,
              "onUpdate:modelValue": ($event) => appForm.defaultChannel = $event,
              size: "sm",
              class: "w-full font-mono",
              placeholder: "stable / beta / lts"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u4ED3\u5E93\u6216\u5B98\u7F51\u5730\u5740 (\u53EF\u9009) </label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: appForm.repoUrl,
              "onUpdate:modelValue": ($event) => appForm.repoUrl = $event,
              size: "sm",
              class: "w-full font-mono",
              placeholder: "https://github.com/org/repo"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u8F6F\u4EF6\u7B80\u4ECB (\u53EF\u9009) </label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: appForm.description,
              "onUpdate:modelValue": ($event) => appForm.description = $event,
              size: "sm",
              class: "w-full",
              placeholder: "\u7B80\u8981\u8BF4\u660E\u8BE5\u8F6F\u4EF6\u7684\u5206\u53D1\u5F62\u6001\u6216\u7528\u9014..."
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-800"${_scopeId}><div${_scopeId}>`);
            if (appForm.isEditing) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                size: "sm",
                icon: "ph:trash",
                loading: savingApp.value,
                onClick: ($event) => removeCustomApp(appForm.appKey)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u79FB\u9664\u8BE5\u8F6F\u4EF6\u5361\u7247 `);
                  } else {
                    return [
                      createTextVNode(" \u79FB\u9664\u8BE5\u8F6F\u4EF6\u5361\u7247 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              size: "sm",
              onClick: ($event) => isAppManagerOpen.value = false
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
              size: "sm",
              loading: savingApp.value,
              onClick: saveCustomApp
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4FDD\u5B58\u8F6F\u4EF6 `);
                } else {
                  return [
                    createTextVNode(" \u4FDD\u5B58\u8F6F\u4EF6 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-4" }, [
                createVNode("div", { class: "flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-base font-bold text-gray-900 dark:text-white" }, toDisplayString(appForm.isEditing ? `\u7F16\u8F91\u8F6F\u4EF6\u4EA7\u54C1 (${appForm.appKey})` : "\u65B0\u589E\u81EA\u5B9A\u4E49\u8F6F\u4EF6\u4EA7\u54C1"), 1),
                    createVNode("p", { class: "text-xs text-gray-500 mt-0.5" }, " \u81EA\u5B9A\u4E49\u8F6F\u4EF6\u6807\u8BC6\uFF08appKey\uFF09\u4E0E\u663E\u793A\u540D\u79F0\uFF0C\u5F7B\u5E95\u89E3\u8026\u5E95\u5C42\u53D1\u5E03\u6A21\u578B\u4E0E\u5177\u4F53\u4E1A\u52A1\u8F6F\u4EF6 ")
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    size: "sm",
                    onClick: ($event) => isAppManagerOpen.value = false
                  }, null, 8, ["onClick"])
                ]),
                createVNode("div", { class: "space-y-3" }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, " \u8F6F\u4EF6\u552F\u4E00\u6807\u8BC6 (appKey) * "),
                    createVNode(_component_UInput, {
                      modelValue: appForm.appKey,
                      "onUpdate:modelValue": ($event) => appForm.appKey = $event,
                      size: "sm",
                      class: "w-full font-mono",
                      placeholder: "\u4F8B\u5982: my-desktop-app / saas-gateway / ios-client",
                      disabled: appForm.isEditing
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                    createVNode("p", { class: "text-[11px] text-gray-400 mt-1" }, " \u5BA2\u6237\u7AEF\u8BF7\u6C42 `/api/releases?app=xxx` \u6216 `/api/releases/check?app=xxx` \u65F6\u4F20\u5165\u8BE5\u6807\u8BC6 ")
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, " \u8F6F\u4EF6\u663E\u793A\u540D\u79F0 * "),
                    createVNode(_component_UInput, {
                      modelValue: appForm.name,
                      "onUpdate:modelValue": ($event) => appForm.name = $event,
                      size: "sm",
                      class: "w-full",
                      placeholder: "\u4F8B\u5982: \u8DE8\u5E73\u53F0\u684C\u9762\u5BA2\u6237\u7AEF / \u4F01\u4E1A\u7248\u7F51\u5173"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, " \u9ED8\u8BA4\u53D1\u5E03\u901A\u9053 (Default Channel) "),
                    createVNode(_component_UInput, {
                      modelValue: appForm.defaultChannel,
                      "onUpdate:modelValue": ($event) => appForm.defaultChannel = $event,
                      size: "sm",
                      class: "w-full font-mono",
                      placeholder: "stable / beta / lts"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, " \u4ED3\u5E93\u6216\u5B98\u7F51\u5730\u5740 (\u53EF\u9009) "),
                    createVNode(_component_UInput, {
                      modelValue: appForm.repoUrl,
                      "onUpdate:modelValue": ($event) => appForm.repoUrl = $event,
                      size: "sm",
                      class: "w-full font-mono",
                      placeholder: "https://github.com/org/repo"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, " \u8F6F\u4EF6\u7B80\u4ECB (\u53EF\u9009) "),
                    createVNode(_component_UInput, {
                      modelValue: appForm.description,
                      "onUpdate:modelValue": ($event) => appForm.description = $event,
                      size: "sm",
                      class: "w-full",
                      placeholder: "\u7B80\u8981\u8BF4\u660E\u8BE5\u8F6F\u4EF6\u7684\u5206\u53D1\u5F62\u6001\u6216\u7528\u9014..."
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-800" }, [
                  createVNode("div", null, [
                    appForm.isEditing ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      color: "error",
                      variant: "ghost",
                      size: "sm",
                      icon: "ph:trash",
                      loading: savingApp.value,
                      onClick: ($event) => removeCustomApp(appForm.appKey)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u79FB\u9664\u8BE5\u8F6F\u4EF6\u5361\u7247 ")
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "outline",
                      size: "sm",
                      onClick: ($event) => isAppManagerOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u53D6\u6D88 ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      color: "primary",
                      size: "sm",
                      loading: savingApp.value,
                      onClick: saveCustomApp
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u4FDD\u5B58\u8F6F\u4EF6 ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: isModalOpen.value,
        "onUpdate:open": ($event) => isModalOpen.value = $event,
        ui: { content: "sm:max-w-4xl max-h-[90vh] overflow-y-auto" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-6"${_scopeId}><div class="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-4"${_scopeId}><div${_scopeId}><h2 class="text-lg font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(editingId.value ? `\u7F16\u8F91\u7248\u672C\u8BB0\u5F55 #${editingId.value}` : "\u53D1\u5E03\u65B0\u8F6F\u4EF6\u7248\u672C (Multi-App Multilingual Release)")}</h2><p class="text-xs text-gray-500 mt-0.5"${_scopeId}> \u6240\u6709\u8F6F\u4EF6\u6807\u8BC6 (\`appKey\`)\u3001\u901A\u9053 (\`channel\`)\u3001\u591A\u8BED\u8A00 (\`locales\`) \u4E0E\u53D8\u66F4\u7C7B\u578B (\`type\`) \u5747\u652F\u6301\u81EA\u7531\u5B9A\u4E49 </p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x",
              size: "sm",
              onClick: ($event) => isModalOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-50/70 dark:bg-gray-900/40 p-4 rounded-xl border border-gray-200/70 dark:border-gray-800/70"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between mb-1"${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300"${_scopeId}> \u6240\u5C5E\u8F6F\u4EF6\u6807\u8BC6 (appKey) * </label><span class="text-[10px] text-gray-400"${_scopeId}>\u53EF\u81EA\u7531\u8F93\u5165\u6216\u70B9\u9009\u5DF2\u6709</span></div>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.appKey,
              "onUpdate:modelValue": ($event) => form.appKey = $event,
              list: "existing-app-keys-list",
              size: "sm",
              class: "w-full font-mono",
              placeholder: "\u8F93\u5165\u4EFB\u610F\u8F6F\u4EF6\u6807\u8BC6\uFF0C\u5982 my-app",
              onInput: onAppKeyInput
            }, null, _parent2, _scopeId));
            _push2(`<datalist id="existing-app-keys-list"${_scopeId}><!--[-->`);
            ssrRenderList(appSummaries.value, (app) => {
              _push2(`<option${ssrRenderAttr("value", app.appKey)}${_scopeId}>${ssrInterpolate(app.nameZh || app.name)}</option>`);
            });
            _push2(`<!--]--></datalist>`);
            if (appSummaries.value.length > 0) {
              _push2(`<div class="flex flex-wrap gap-1 mt-1.5"${_scopeId}><!--[-->`);
              ssrRenderList(appSummaries.value, (app) => {
                _push2(`<button type="button" class="${ssrRenderClass([
                  form.appKey === app.appKey ? "bg-purple-600 text-white" : "bg-gray-200/70 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700",
                  "px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors"
                ])}"${_scopeId}>${ssrInterpolate(app.appKey)}</button>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}><div class="flex items-center justify-between mb-1"${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300"${_scopeId}> \u8F6F\u4EF6\u663E\u793A\u540D\u79F0 (\u53EF\u9009) </label><span class="text-[10px] text-gray-400"${_scopeId}>\u81EA\u52A8\u6CE8\u518C\u5230\u8F6F\u4EF6\u5361\u7247</span></div>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.appName,
              "onUpdate:modelValue": ($event) => form.appName = $event,
              size: "sm",
              class: "w-full",
              placeholder: "\u4F8B\u5982: \u684C\u9762\u5BA2\u6237\u7AEF / \u72EC\u7ACB\u7AD9\u7CFB\u7EDF"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="flex items-center justify-between mb-1"${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300"${_scopeId}> \u53D1\u5E03\u901A\u9053 (Channel) * </label><div class="flex items-center gap-1"${_scopeId}><!--[-->`);
            ssrRenderList(["stable", "beta", "rc", "nightly", "lts"], (ch) => {
              _push2(`<button type="button" class="${ssrRenderClass([
                form.channel === ch ? "bg-purple-600 text-white" : "bg-gray-200/70 dark:bg-gray-800 text-gray-600 dark:text-gray-300",
                "px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors"
              ])}"${_scopeId}>${ssrInterpolate(ch)}</button>`);
            });
            _push2(`<!--]--></div></div>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.channel,
              "onUpdate:modelValue": ($event) => form.channel = $event,
              size: "sm",
              class: "w-full font-mono",
              placeholder: "\u8F93\u5165\u4EFB\u610F\u901A\u9053\uFF0C\u5982 stable / beta / enterprise"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="flex items-center justify-between mb-1"${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300"${_scopeId}> SemVer \u7248\u672C\u53F7 * </label><div class="flex items-center gap-1 text-[10px]"${_scopeId}><button type="button" class="px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 hover:opacity-80 font-mono"${_scopeId}> +Patch </button><button type="button" class="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 hover:opacity-80 font-mono"${_scopeId}> +Minor </button></div></div>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.version,
              "onUpdate:modelValue": ($event) => form.version = $event,
              size: "sm",
              class: "w-full font-mono",
              placeholder: "1.0.0",
              onInput: onVersionInput
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> Git Tag \u540D\u79F0 </label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.tagName,
              "onUpdate:modelValue": ($event) => form.tagName = $event,
              size: "sm",
              class: "w-full font-mono",
              placeholder: "v1.0.0"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u7248\u672C\u663E\u793A\u540D\u79F0 </label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.name,
              "onUpdate:modelValue": ($event) => form.name = $event,
              size: "sm",
              class: "w-full",
              placeholder: "v1.0.0"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> Git Commit SHA </label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.commit,
              "onUpdate:modelValue": ($event) => form.commit = $event,
              size: "sm",
              class: "w-full font-mono",
              placeholder: "fe57d8ff"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u5916\u90E8\u53D1\u5E03\u9875\u94FE\u63A5 (HTML URL) </label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.htmlUrl,
              "onUpdate:modelValue": ($event) => form.htmlUrl = $event,
              size: "sm",
              class: "w-full font-mono",
              placeholder: "https://github.com/org/repo/releases/tag/v1.0.0"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u53D1\u5E03\u65F6\u95F4 (UTC ISO) </label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.releasedAt,
              "onUpdate:modelValue": ($event) => form.releasedAt = $event,
              size: "sm",
              class: "w-full font-mono",
              placeholder: "2026-10-27T08:00:00Z"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="sm:col-span-3 flex flex-wrap items-center gap-6 pt-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCheckbox, {
              modelValue: form.isActive,
              "onUpdate:modelValue": ($event) => form.isActive = $event,
              label: "\u7ACB\u5373\u516C\u5F00\u751F\u6548 (isActive)"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCheckbox, {
              modelValue: form.mandatory,
              "onUpdate:modelValue": ($event) => form.mandatory = $event,
              label: "\u5BA2\u6237\u7AEF\u5F3A\u5236\u66F4\u65B0 (Mandatory Upgrade)"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden"${_scopeId}><div class="bg-gray-50 dark:bg-gray-900/60 px-4 py-2.5 border-b border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-between gap-2"${_scopeId}><div class="flex items-center gap-1.5 flex-wrap"${_scopeId}><!--[-->`);
            ssrRenderList(formLocaleTabs.value, (loc) => {
              _push2(`<button type="button" class="${ssrRenderClass([
                activeTabLang.value === loc.code ? "bg-purple-600 text-white shadow-2xs" : "text-gray-600 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-gray-800",
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5"
              ])}"${_scopeId}><span class="${ssrRenderClass([isFormLocaleFilled(loc.code) ? "bg-emerald-400" : "bg-gray-300 dark:bg-gray-600", "w-1.5 h-1.5 rounded-full"])}"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(loc.label)}</span><span class="font-mono text-[10px] opacity-80"${_scopeId}>(${ssrInterpolate(loc.code)})</span></button>`);
            });
            _push2(`<!--]--><div class="inline-flex items-center gap-1 ml-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: customLocaleInput.value,
              "onUpdate:modelValue": ($event) => customLocaleInput.value = $event,
              size: "xs",
              class: "w-24 font-mono",
              placeholder: "+ \u8BED\u79CD (\u5982 fr)",
              onKeydown: addCustomLocaleTab
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              color: "neutral",
              variant: "outline",
              icon: "ph:plus",
              onClick: addCustomLocaleTab
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (activeTabLang.value !== "zh" && form.locales.zh) {
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                color: "neutral",
                variant: "outline",
                icon: "ph:copy",
                onClick: copyFromZhToCurrentLocale
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u4ECE\u4E2D\u6587 (zh) \u590D\u5236\u7ED3\u6784 `);
                  } else {
                    return [
                      createTextVNode(" \u4ECE\u4E2D\u6587 (zh) \u590D\u5236\u7ED3\u6784 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (form.locales[activeTabLang.value]) {
              _push2(`<div class="p-4 space-y-4"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> [${ssrInterpolate(activeTabLang.value)}] \u7248\u672C\u66F4\u65B0\u6807\u9898 </label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: form.locales[activeTabLang.value].title,
                "onUpdate:modelValue": ($event) => form.locales[activeTabLang.value].title = $event,
                size: "sm",
                class: "w-full",
                placeholder: "\u8F93\u5165\u8BE5\u8BED\u79CD\u4E0B\u7684\u7248\u672C\u6807\u9898..."
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> [${ssrInterpolate(activeTabLang.value)}] \u4E00\u53E5\u8BDD\u6838\u5FC3\u6458\u8981 (Summary) </label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: form.locales[activeTabLang.value].summary,
                "onUpdate:modelValue": ($event) => form.locales[activeTabLang.value].summary = $event,
                size: "sm",
                class: "w-full",
                placeholder: "\u6982\u8FF0\u672C\u6B21\u7248\u672C\u6700\u6838\u5FC3\u7684\u6539\u8FDB\u4EF7\u503C..."
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div${_scopeId}><div class="flex items-center justify-between mb-2"${_scopeId}><div${_scopeId}><label class="text-xs font-semibold text-gray-700 dark:text-gray-300"${_scopeId}> [${ssrInterpolate(activeTabLang.value)}] \u7ED3\u6784\u5316\u53D8\u66F4\u6761\u76EE (\u81EA\u5B9A\u4E49\u7C7B\u578B Tag + \u5185\u5BB9) </label><span class="text-[11px] text-gray-400 ml-2"${_scopeId}> \u7C7B\u578B\u652F\u6301\u81EA\u7531\u8F93\u5165\uFF08\u5982 feat / fix / perf / ui / ops / ai / docs \u7B49\u4EFB\u610F\u81EA\u5B9A\u4E49\u6807\u8BC6\uFF09 </span></div>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                color: "primary",
                variant: "subtle",
                icon: "ph:plus",
                onClick: ($event) => addLocaleItem(activeTabLang.value)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u65B0\u589E\u6761\u76EE `);
                  } else {
                    return [
                      createTextVNode(" \u65B0\u589E\u6761\u76EE ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><datalist id="custom-change-type-suggestions"${_scopeId}><!--[-->`);
              ssrRenderList(changeTypeSuggestions, (opt) => {
                _push2(`<option${ssrRenderAttr("value", opt.value)}${_scopeId}>${ssrInterpolate(opt.label)}</option>`);
              });
              _push2(`<!--]--></datalist><div class="space-y-2"${_scopeId}><!--[-->`);
              ssrRenderList(form.locales[activeTabLang.value].items, (item, idx) => {
                _push2(`<div class="flex items-start gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: item.type,
                  "onUpdate:modelValue": ($event) => item.type = $event,
                  list: "custom-change-type-suggestions",
                  size: "sm",
                  placeholder: "\u7C7B\u578B (\u5982 feat)",
                  class: "w-32 shrink-0 font-mono"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: item.text,
                  "onUpdate:modelValue": ($event) => item.text = $event,
                  size: "sm",
                  class: "w-full",
                  placeholder: "\u63CF\u8FF0\u5177\u4F53\u7684\u66F4\u65B0\u5185\u5BB9..."
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "error",
                  variant: "ghost",
                  size: "xs",
                  icon: "ph:trash",
                  onClick: ($event) => removeLocaleItem(activeTabLang.value, idx)
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="border border-gray-200 dark:border-gray-800 rounded-xl p-4 space-y-3"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h3 class="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300"${_scopeId}> \u591A\u5E73\u53F0\u5206\u53D1\u5B89\u88C5\u5305\u4E0E SHA-256 \u6E05\u5355 (Assets) </h3><p class="text-[11px] text-gray-500"${_scopeId}> \u53EF\u9009\u3002\u5E73\u53F0\uFF08platform\uFF09\u3001\u67B6\u6784\uFF08arch\uFF09\u4E0E\u5305\u5F62\u6001\uFF08package\uFF09\u5747\u652F\u6301\u6309\u5BA2\u6237\u7AEF\u5B9E\u9645\u53C2\u6570\u81EA\u7531\u5B9A\u4E49 </p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              color: "primary",
              variant: "subtle",
              icon: "ph:plus",
              onClick: addAssetRow
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u6DFB\u52A0\u5B89\u88C5\u5305 `);
                } else {
                  return [
                    createTextVNode(" \u6DFB\u52A0\u5B89\u88C5\u5305 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (form.assets.length === 0) {
              _push2(`<div class="text-xs text-gray-400 py-2 text-center border border-dashed border-gray-200 dark:border-gray-800 rounded-lg"${_scopeId}> \u6682\u672A\u914D\u7F6E\u4E8C\u8FDB\u5236\u5B89\u88C5\u5305\uFF08\u7EAF\u66F4\u65B0\u65E5\u5FD7\u6A21\u5F0F\uFF09 </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(form.assets, (asset, aIdx) => {
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-6 gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200/60 dark:border-gray-800/60"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: asset.name,
                "onUpdate:modelValue": ($event) => asset.name = $event,
                size: "xs",
                placeholder: "\u6587\u4EF6\u540D (\u5982 app-arm64.dmg)",
                class: "font-mono"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: asset.platform,
                "onUpdate:modelValue": ($event) => asset.platform = $event,
                size: "xs",
                placeholder: "\u5E73\u53F0 (macos/windows/linux/\u81EA\u5B9A\u4E49)",
                class: "font-mono"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: asset.arch,
                "onUpdate:modelValue": ($event) => asset.arch = $event,
                size: "xs",
                placeholder: "\u67B6\u6784 (arm64/x64/universal)",
                class: "font-mono"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: asset.browser_download_url,
                "onUpdate:modelValue": ($event) => asset.browser_download_url = $event,
                size: "xs",
                placeholder: "\u4E0B\u8F7D URL (https://...)",
                class: "sm:col-span-2 font-mono"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: asset.size,
                "onUpdate:modelValue": ($event) => asset.size = $event,
                modelModifiers: { number: true },
                type: "number",
                size: "xs",
                placeholder: "\u5B57\u8282\u5927\u5C0F",
                class: "w-full font-mono"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                size: "xs",
                icon: "ph:trash",
                onClick: ($event) => removeAssetRow(aIdx)
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="sm:col-span-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: asset.sha256,
                "onUpdate:modelValue": ($event) => asset.sha256 = $event,
                size: "xs",
                placeholder: "\u53EF\u9009 SHA-256 \u6821\u9A8C\u503C (64 \u4F4D\u5341\u516D\u8FDB\u5236)",
                class: "w-full font-mono"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="sm:col-span-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: asset.signature,
                "onUpdate:modelValue": ($event) => asset.signature = $event,
                size: "xs",
                placeholder: "\u53EF\u9009\u7B7E\u540D (Sparkle edSignature / Tauri)",
                class: "w-full font-mono"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="sm:col-span-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: asset.minimumSystemVersion,
                "onUpdate:modelValue": ($event) => asset.minimumSystemVersion = $event,
                size: "xs",
                placeholder: "\u6700\u4F4E\u7CFB\u7EDF (\u5982 13.0)",
                class: "w-full font-mono"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div><div class="flex items-center justify-end gap-2 pt-3 border-t border-gray-200 dark:border-gray-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              size: "sm",
              onClick: ($event) => isModalOpen.value = false
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
              size: "sm",
              loading: saving.value,
              onClick: saveRelease
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(editingId.value ? "\u4FDD\u5B58\u4FEE\u6539" : "\u7ACB\u5373\u53D1\u5E03\u7248\u672C")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(editingId.value ? "\u4FDD\u5B58\u4FEE\u6539" : "\u7ACB\u5373\u53D1\u5E03\u7248\u672C"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-6" }, [
                createVNode("div", { class: "flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-4" }, [
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-lg font-bold text-gray-900 dark:text-white" }, toDisplayString(editingId.value ? `\u7F16\u8F91\u7248\u672C\u8BB0\u5F55 #${editingId.value}` : "\u53D1\u5E03\u65B0\u8F6F\u4EF6\u7248\u672C (Multi-App Multilingual Release)"), 1),
                    createVNode("p", { class: "text-xs text-gray-500 mt-0.5" }, " \u6240\u6709\u8F6F\u4EF6\u6807\u8BC6 (`appKey`)\u3001\u901A\u9053 (`channel`)\u3001\u591A\u8BED\u8A00 (`locales`) \u4E0E\u53D8\u66F4\u7C7B\u578B (`type`) \u5747\u652F\u6301\u81EA\u7531\u5B9A\u4E49 ")
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    size: "sm",
                    onClick: ($event) => isModalOpen.value = false
                  }, null, 8, ["onClick"])
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-50/70 dark:bg-gray-900/40 p-4 rounded-xl border border-gray-200/70 dark:border-gray-800/70" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center justify-between mb-1" }, [
                      createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300" }, " \u6240\u5C5E\u8F6F\u4EF6\u6807\u8BC6 (appKey) * "),
                      createVNode("span", { class: "text-[10px] text-gray-400" }, "\u53EF\u81EA\u7531\u8F93\u5165\u6216\u70B9\u9009\u5DF2\u6709")
                    ]),
                    createVNode(_component_UInput, {
                      modelValue: form.appKey,
                      "onUpdate:modelValue": ($event) => form.appKey = $event,
                      list: "existing-app-keys-list",
                      size: "sm",
                      class: "w-full font-mono",
                      placeholder: "\u8F93\u5165\u4EFB\u610F\u8F6F\u4EF6\u6807\u8BC6\uFF0C\u5982 my-app",
                      onInput: onAppKeyInput
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("datalist", { id: "existing-app-keys-list" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(appSummaries.value, (app) => {
                        return openBlock(), createBlock("option", {
                          key: app.appKey,
                          value: app.appKey
                        }, toDisplayString(app.nameZh || app.name), 9, ["value"]);
                      }), 128))
                    ]),
                    appSummaries.value.length > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-wrap gap-1 mt-1.5"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(appSummaries.value, (app) => {
                        return openBlock(), createBlock("button", {
                          key: app.appKey,
                          type: "button",
                          class: [
                            "px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors",
                            form.appKey === app.appKey ? "bg-purple-600 text-white" : "bg-gray-200/70 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                          ],
                          onClick: ($event) => selectFormApp(app)
                        }, toDisplayString(app.appKey), 11, ["onClick"]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center justify-between mb-1" }, [
                      createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300" }, " \u8F6F\u4EF6\u663E\u793A\u540D\u79F0 (\u53EF\u9009) "),
                      createVNode("span", { class: "text-[10px] text-gray-400" }, "\u81EA\u52A8\u6CE8\u518C\u5230\u8F6F\u4EF6\u5361\u7247")
                    ]),
                    createVNode(_component_UInput, {
                      modelValue: form.appName,
                      "onUpdate:modelValue": ($event) => form.appName = $event,
                      size: "sm",
                      class: "w-full",
                      placeholder: "\u4F8B\u5982: \u684C\u9762\u5BA2\u6237\u7AEF / \u72EC\u7ACB\u7AD9\u7CFB\u7EDF"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center justify-between mb-1" }, [
                      createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300" }, " \u53D1\u5E03\u901A\u9053 (Channel) * "),
                      createVNode("div", { class: "flex items-center gap-1" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(["stable", "beta", "rc", "nightly", "lts"], (ch) => {
                          return createVNode("button", {
                            key: ch,
                            type: "button",
                            class: [
                              "px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors",
                              form.channel === ch ? "bg-purple-600 text-white" : "bg-gray-200/70 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                            ],
                            onClick: ($event) => form.channel = ch
                          }, toDisplayString(ch), 11, ["onClick"]);
                        }), 64))
                      ])
                    ]),
                    createVNode(_component_UInput, {
                      modelValue: form.channel,
                      "onUpdate:modelValue": ($event) => form.channel = $event,
                      size: "sm",
                      class: "w-full font-mono",
                      placeholder: "\u8F93\u5165\u4EFB\u610F\u901A\u9053\uFF0C\u5982 stable / beta / enterprise"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center justify-between mb-1" }, [
                      createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300" }, " SemVer \u7248\u672C\u53F7 * "),
                      createVNode("div", { class: "flex items-center gap-1 text-[10px]" }, [
                        createVNode("button", {
                          type: "button",
                          class: "px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 hover:opacity-80 font-mono",
                          onClick: ($event) => bumpFormVersion("patch")
                        }, " +Patch ", 8, ["onClick"]),
                        createVNode("button", {
                          type: "button",
                          class: "px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 hover:opacity-80 font-mono",
                          onClick: ($event) => bumpFormVersion("minor")
                        }, " +Minor ", 8, ["onClick"])
                      ])
                    ]),
                    createVNode(_component_UInput, {
                      modelValue: form.version,
                      "onUpdate:modelValue": ($event) => form.version = $event,
                      size: "sm",
                      class: "w-full font-mono",
                      placeholder: "1.0.0",
                      onInput: onVersionInput
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, " Git Tag \u540D\u79F0 "),
                    createVNode(_component_UInput, {
                      modelValue: form.tagName,
                      "onUpdate:modelValue": ($event) => form.tagName = $event,
                      size: "sm",
                      class: "w-full font-mono",
                      placeholder: "v1.0.0"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, " \u7248\u672C\u663E\u793A\u540D\u79F0 "),
                    createVNode(_component_UInput, {
                      modelValue: form.name,
                      "onUpdate:modelValue": ($event) => form.name = $event,
                      size: "sm",
                      class: "w-full",
                      placeholder: "v1.0.0"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, " Git Commit SHA "),
                    createVNode(_component_UInput, {
                      modelValue: form.commit,
                      "onUpdate:modelValue": ($event) => form.commit = $event,
                      size: "sm",
                      class: "w-full font-mono",
                      placeholder: "fe57d8ff"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, " \u5916\u90E8\u53D1\u5E03\u9875\u94FE\u63A5 (HTML URL) "),
                    createVNode(_component_UInput, {
                      modelValue: form.htmlUrl,
                      "onUpdate:modelValue": ($event) => form.htmlUrl = $event,
                      size: "sm",
                      class: "w-full font-mono",
                      placeholder: "https://github.com/org/repo/releases/tag/v1.0.0"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, " \u53D1\u5E03\u65F6\u95F4 (UTC ISO) "),
                    createVNode(_component_UInput, {
                      modelValue: form.releasedAt,
                      "onUpdate:modelValue": ($event) => form.releasedAt = $event,
                      size: "sm",
                      class: "w-full font-mono",
                      placeholder: "2026-10-27T08:00:00Z"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "sm:col-span-3 flex flex-wrap items-center gap-6 pt-1" }, [
                    createVNode(_component_UCheckbox, {
                      modelValue: form.isActive,
                      "onUpdate:modelValue": ($event) => form.isActive = $event,
                      label: "\u7ACB\u5373\u516C\u5F00\u751F\u6548 (isActive)"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_UCheckbox, {
                      modelValue: form.mandatory,
                      "onUpdate:modelValue": ($event) => form.mandatory = $event,
                      label: "\u5BA2\u6237\u7AEF\u5F3A\u5236\u66F4\u65B0 (Mandatory Upgrade)"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden" }, [
                  createVNode("div", { class: "bg-gray-50 dark:bg-gray-900/60 px-4 py-2.5 border-b border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-between gap-2" }, [
                    createVNode("div", { class: "flex items-center gap-1.5 flex-wrap" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(formLocaleTabs.value, (loc) => {
                        return openBlock(), createBlock("button", {
                          key: loc.code,
                          type: "button",
                          class: [
                            "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5",
                            activeTabLang.value === loc.code ? "bg-purple-600 text-white shadow-2xs" : "text-gray-600 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-gray-800"
                          ],
                          onClick: ($event) => activeTabLang.value = loc.code
                        }, [
                          createVNode("span", {
                            class: ["w-1.5 h-1.5 rounded-full", isFormLocaleFilled(loc.code) ? "bg-emerald-400" : "bg-gray-300 dark:bg-gray-600"]
                          }, null, 2),
                          createVNode("span", null, toDisplayString(loc.label), 1),
                          createVNode("span", { class: "font-mono text-[10px] opacity-80" }, "(" + toDisplayString(loc.code) + ")", 1)
                        ], 10, ["onClick"]);
                      }), 128)),
                      createVNode("div", { class: "inline-flex items-center gap-1 ml-1" }, [
                        createVNode(_component_UInput, {
                          modelValue: customLocaleInput.value,
                          "onUpdate:modelValue": ($event) => customLocaleInput.value = $event,
                          size: "xs",
                          class: "w-24 font-mono",
                          placeholder: "+ \u8BED\u79CD (\u5982 fr)",
                          onKeydown: withKeys(withModifiers(addCustomLocaleTab, ["prevent"]), ["enter"])
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                        createVNode(_component_UButton, {
                          size: "xs",
                          color: "neutral",
                          variant: "outline",
                          icon: "ph:plus",
                          onClick: addCustomLocaleTab
                        })
                      ])
                    ]),
                    activeTabLang.value !== "zh" && form.locales.zh ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      size: "xs",
                      color: "neutral",
                      variant: "outline",
                      icon: "ph:copy",
                      onClick: copyFromZhToCurrentLocale
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u4ECE\u4E2D\u6587 (zh) \u590D\u5236\u7ED3\u6784 ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  form.locales[activeTabLang.value] ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "p-4 space-y-4"
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, " [" + toDisplayString(activeTabLang.value) + "] \u7248\u672C\u66F4\u65B0\u6807\u9898 ", 1),
                        createVNode(_component_UInput, {
                          modelValue: form.locales[activeTabLang.value].title,
                          "onUpdate:modelValue": ($event) => form.locales[activeTabLang.value].title = $event,
                          size: "sm",
                          class: "w-full",
                          placeholder: "\u8F93\u5165\u8BE5\u8BED\u79CD\u4E0B\u7684\u7248\u672C\u6807\u9898..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, " [" + toDisplayString(activeTabLang.value) + "] \u4E00\u53E5\u8BDD\u6838\u5FC3\u6458\u8981 (Summary) ", 1),
                        createVNode(_component_UInput, {
                          modelValue: form.locales[activeTabLang.value].summary,
                          "onUpdate:modelValue": ($event) => form.locales[activeTabLang.value].summary = $event,
                          size: "sm",
                          class: "w-full",
                          placeholder: "\u6982\u8FF0\u672C\u6B21\u7248\u672C\u6700\u6838\u5FC3\u7684\u6539\u8FDB\u4EF7\u503C..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center justify-between mb-2" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, " [" + toDisplayString(activeTabLang.value) + "] \u7ED3\u6784\u5316\u53D8\u66F4\u6761\u76EE (\u81EA\u5B9A\u4E49\u7C7B\u578B Tag + \u5185\u5BB9) ", 1),
                          createVNode("span", { class: "text-[11px] text-gray-400 ml-2" }, " \u7C7B\u578B\u652F\u6301\u81EA\u7531\u8F93\u5165\uFF08\u5982 feat / fix / perf / ui / ops / ai / docs \u7B49\u4EFB\u610F\u81EA\u5B9A\u4E49\u6807\u8BC6\uFF09 ")
                        ]),
                        createVNode(_component_UButton, {
                          size: "xs",
                          color: "primary",
                          variant: "subtle",
                          icon: "ph:plus",
                          onClick: ($event) => addLocaleItem(activeTabLang.value)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u65B0\u589E\u6761\u76EE ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      createVNode("datalist", { id: "custom-change-type-suggestions" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(changeTypeSuggestions, (opt) => {
                          return createVNode("option", {
                            key: opt.value,
                            value: opt.value
                          }, toDisplayString(opt.label), 9, ["value"]);
                        }), 64))
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(form.locales[activeTabLang.value].items, (item, idx) => {
                          return openBlock(), createBlock("div", {
                            key: idx,
                            class: "flex items-start gap-2"
                          }, [
                            createVNode(_component_UInput, {
                              modelValue: item.type,
                              "onUpdate:modelValue": ($event) => item.type = $event,
                              list: "custom-change-type-suggestions",
                              size: "sm",
                              placeholder: "\u7C7B\u578B (\u5982 feat)",
                              class: "w-32 shrink-0 font-mono"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_UInput, {
                              modelValue: item.text,
                              "onUpdate:modelValue": ($event) => item.text = $event,
                              size: "sm",
                              class: "w-full",
                              placeholder: "\u63CF\u8FF0\u5177\u4F53\u7684\u66F4\u65B0\u5185\u5BB9..."
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_UButton, {
                              color: "error",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:trash",
                              onClick: ($event) => removeLocaleItem(activeTabLang.value, idx)
                            }, null, 8, ["onClick"])
                          ]);
                        }), 128))
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "border border-gray-200 dark:border-gray-800 rounded-xl p-4 space-y-3" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300" }, " \u591A\u5E73\u53F0\u5206\u53D1\u5B89\u88C5\u5305\u4E0E SHA-256 \u6E05\u5355 (Assets) "),
                      createVNode("p", { class: "text-[11px] text-gray-500" }, " \u53EF\u9009\u3002\u5E73\u53F0\uFF08platform\uFF09\u3001\u67B6\u6784\uFF08arch\uFF09\u4E0E\u5305\u5F62\u6001\uFF08package\uFF09\u5747\u652F\u6301\u6309\u5BA2\u6237\u7AEF\u5B9E\u9645\u53C2\u6570\u81EA\u7531\u5B9A\u4E49 ")
                    ]),
                    createVNode(_component_UButton, {
                      size: "xs",
                      color: "primary",
                      variant: "subtle",
                      icon: "ph:plus",
                      onClick: addAssetRow
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u6DFB\u52A0\u5B89\u88C5\u5305 ")
                      ]),
                      _: 1
                    })
                  ]),
                  form.assets.length === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-xs text-gray-400 py-2 text-center border border-dashed border-gray-200 dark:border-gray-800 rounded-lg"
                  }, " \u6682\u672A\u914D\u7F6E\u4E8C\u8FDB\u5236\u5B89\u88C5\u5305\uFF08\u7EAF\u66F4\u65B0\u65E5\u5FD7\u6A21\u5F0F\uFF09 ")) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(form.assets, (asset, aIdx) => {
                    return openBlock(), createBlock("div", {
                      key: aIdx,
                      class: "grid grid-cols-1 sm:grid-cols-6 gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200/60 dark:border-gray-800/60"
                    }, [
                      createVNode(_component_UInput, {
                        modelValue: asset.name,
                        "onUpdate:modelValue": ($event) => asset.name = $event,
                        size: "xs",
                        placeholder: "\u6587\u4EF6\u540D (\u5982 app-arm64.dmg)",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_UInput, {
                        modelValue: asset.platform,
                        "onUpdate:modelValue": ($event) => asset.platform = $event,
                        size: "xs",
                        placeholder: "\u5E73\u53F0 (macos/windows/linux/\u81EA\u5B9A\u4E49)",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_UInput, {
                        modelValue: asset.arch,
                        "onUpdate:modelValue": ($event) => asset.arch = $event,
                        size: "xs",
                        placeholder: "\u67B6\u6784 (arm64/x64/universal)",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_UInput, {
                        modelValue: asset.browser_download_url,
                        "onUpdate:modelValue": ($event) => asset.browser_download_url = $event,
                        size: "xs",
                        placeholder: "\u4E0B\u8F7D URL (https://...)",
                        class: "sm:col-span-2 font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "flex items-center gap-1" }, [
                        createVNode(_component_UInput, {
                          modelValue: asset.size,
                          "onUpdate:modelValue": ($event) => asset.size = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          size: "xs",
                          placeholder: "\u5B57\u8282\u5927\u5C0F",
                          class: "w-full font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_UButton, {
                          color: "error",
                          variant: "ghost",
                          size: "xs",
                          icon: "ph:trash",
                          onClick: ($event) => removeAssetRow(aIdx)
                        }, null, 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "sm:col-span-3" }, [
                        createVNode(_component_UInput, {
                          modelValue: asset.sha256,
                          "onUpdate:modelValue": ($event) => asset.sha256 = $event,
                          size: "xs",
                          placeholder: "\u53EF\u9009 SHA-256 \u6821\u9A8C\u503C (64 \u4F4D\u5341\u516D\u8FDB\u5236)",
                          class: "w-full font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "sm:col-span-2" }, [
                        createVNode(_component_UInput, {
                          modelValue: asset.signature,
                          "onUpdate:modelValue": ($event) => asset.signature = $event,
                          size: "xs",
                          placeholder: "\u53EF\u9009\u7B7E\u540D (Sparkle edSignature / Tauri)",
                          class: "w-full font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "sm:col-span-1" }, [
                        createVNode(_component_UInput, {
                          modelValue: asset.minimumSystemVersion,
                          "onUpdate:modelValue": ($event) => asset.minimumSystemVersion = $event,
                          size: "xs",
                          placeholder: "\u6700\u4F4E\u7CFB\u7EDF (\u5982 13.0)",
                          class: "w-full font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]);
                  }), 128))
                ]),
                createVNode("div", { class: "flex items-center justify-end gap-2 pt-3 border-t border-gray-200 dark:border-gray-800" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    size: "sm",
                    onClick: ($event) => isModalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u53D6\u6D88 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    size: "sm",
                    loading: saving.value,
                    onClick: saveRelease
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(editingId.value ? "\u4FDD\u5B58\u4FEE\u6539" : "\u7ACB\u5373\u53D1\u5E03\u7248\u672C"), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/releases.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=releases-t5--wW95.mjs.map
