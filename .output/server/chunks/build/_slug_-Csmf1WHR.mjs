import { I as useRoute, u as useI18n, E as useLocaleRouter, l as useFormatTime, y as useFetch, bC as usePageResourceState, bz as useSeoMeta, bA as useJsonLd, aK as PageRequestError, P as __nuxt_component_3$4, j as _sfc_main$10, bD as __nuxt_component_3$3 } from './server.mjs';
import __nuxt_component_7 from './HoxiComment-BgozWRKB.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, toValue, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import HoxiProjectRunPanel from './HoxiProjectRunPanel-3UBSqov2.mjs';
import { u as useHoxiModels } from './useHoxiModels-CtTghHYT.mjs';
import { u as useHoxiProjects } from './useHoxiProjects-BvUk8fQu.mjs';
import { b as buildBlogOgCoverUrl, r as resolveSocialOgImageUrl } from './blogOgCard-Dd_qPNIc.mjs';
import { n as normalizeHoxiLocale, l as localizeProject, a as normalizeProjectRunManifest, b as buildClientProjectBreakdownPost } from './projectMatcher-mcLmK4UC.mjs';
import { i as injectModelReferences } from './model-domain-__NCFLwF.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
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
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
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
import './HoxiSectionLabel-Cv4g6RWU.mjs';
import './models-Dw32LvsO.mjs';
import './vendors-sPFB0I2R.mjs';
import './projects-DCfvntB8.mjs';

const useLocalizedPost = () => {
  const { locale } = useI18n();
  const getLocalizedPost = (post) => {
    var _a, _b, _c, _d, _e, _f;
    const rawPost = toValue(post);
    if (!rawPost) return null;
    const postCopy = JSON.parse(JSON.stringify(rawPost));
    if (typeof postCopy.metaData === "string") {
      try {
        postCopy.metaData = JSON.parse(postCopy.metaData);
      } catch (e) {
        postCopy.metaData = {};
      }
    }
    if (postCopy.type === "blog" && typeof postCopy.locale === "string" && postCopy.locale.trim()) {
      return postCopy;
    }
    const currentLocale = toValue(locale);
    if (!((_b = (_a = postCopy.metaData) == null ? void 0 : _a.translations) == null ? void 0 : _b[currentLocale])) {
      return postCopy;
    }
    const trans = postCopy.metaData.translations[currentLocale];
    return {
      ...postCopy,
      title: trans.title || postCopy.title,
      description: trans.description || postCopy.description,
      content: trans.content || postCopy.content,
      metaData: {
        ...postCopy.metaData,
        tldr: trans.tldr || ((_c = postCopy.metaData) == null ? void 0 : _c.tldr),
        keySpecs: Array.isArray(trans.keySpecs) && trans.keySpecs.length ? trans.keySpecs : (_d = postCopy.metaData) == null ? void 0 : _d.keySpecs,
        faqs: Array.isArray(trans.faqs) && trans.faqs.length ? trans.faqs : (_e = postCopy.metaData) == null ? void 0 : _e.faqs,
        relatedLinks: Array.isArray(trans.relatedLinks) && trans.relatedLinks.length ? trans.relatedLinks : (_f = postCopy.metaData) == null ? void 0 : _f.relatedLinks
      }
    };
  };
  return {
    getLocalizedPost
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { locale, setLocale, t } = useI18n();
    const localeRouter = useLocaleRouter();
    const localePath = (p, targetLocale) => {
      const target = typeof p === "object" && (p == null ? void 0 : p.value) !== void 0 ? p.value : String(p || "");
      if (localeRouter && typeof localeRouter.localePath === "function") {
        return localeRouter.localePath(target, targetLocale);
      }
      return target.startsWith("/") ? target : `/${target}`;
    };
    const { formatDate } = useFormatTime();
    const { getLocalizedPost } = useLocalizedPost();
    const { models } = useHoxiModels();
    const { projects } = useHoxiProjects();
    const currentNormLocale = computed(() => {
      const raw = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? String(locale.value) : String(locale || "zh");
      return normalizeHoxiLocale(raw, "zh");
    });
    const rawSlug = route.params.slug;
    const slug = Array.isArray(rawSlug) ? String(rawSlug.at(-1) || "") : String(rawSlug || "");
    const canonicalProjectSlug = slug.replace(/-en$/i, "");
    const { data, status, error, refresh } = useFetch(
      `/api/posts/${slug}`,
      {
        key: `hoxi-post-${slug}`,
        lazy: true
      },
      "$WrqFe2EHQW"
      /* nuxt-injected */
    );
    const relatedProject = computed(() => {
      if (!canonicalProjectSlug) return null;
      return projects.value.find((item) => {
        const storySlug = String(item.storyUrl || "").replace(/^\/blog\//, "").replace(/\/$/, "");
        const projSlug = String(item.slug || item.id);
        return storySlug === canonicalProjectSlug || `${projSlug}-breakdown` === canonicalProjectSlug || `${item.id}-breakdown` === canonicalProjectSlug;
      }) || null;
    });
    const localizedRelatedProject = computed(() => {
      if (!relatedProject.value) return null;
      return localizeProject(relatedProject.value, currentNormLocale.value);
    });
    const relatedManifest = computed(() => {
      if (!localizedRelatedProject.value) return null;
      return normalizeProjectRunManifest(localizedRelatedProject.value.runManifest, {
        id: localizedRelatedProject.value.id,
        slug: String(localizedRelatedProject.value.slug || localizedRelatedProject.value.id),
        category: localizedRelatedProject.value.category,
        name: localizedRelatedProject.value.name,
        tagline: localizedRelatedProject.value.tagline,
        githubUrl: localizedRelatedProject.value.githubUrl
      });
    });
    const fallbackProjectPost = computed(() => {
      const matched = relatedProject.value;
      if (!matched) return null;
      return buildClientProjectBreakdownPost(matched, currentNormLocale.value);
    });
    const copiedPostLink = ref(false);
    const shareCopy = computed(() => {
      const current = currentNormLocale.value;
      if (current === "zh-HK") return { share: "\u5206\u4EAB\u6587\u7AE0", copied: "\u5DF2\u8907\u88FD\u9023\u7D50" };
      if (current === "ja") return { share: "\u8A18\u4E8B\u3092\u5171\u6709", copied: "\u30B3\u30D4\u30FC\u6E08\u307F" };
      if (current === "ko") return { share: "\uAE00 \uACF5\uC720", copied: "\uBCF5\uC0AC\uB428" };
      if (current === "en") return { share: "Share", copied: "Link Copied" };
      return { share: "\u5206\u4EAB\u6587\u7AE0", copied: "\u5DF2\u590D\u5236\u94FE\u63A5" };
    });
    const launchpadCopy = computed(() => {
      var _a, _b;
      const isEn = currentNormLocale.value === "en";
      if (isEn) {
        return {
          badge: "TURNKEY MONETIZATION LOOP",
          title: `Turn "${((_a = localizedRelatedProject.value) == null ? void 0 : _a.name) || ""}" Into Your Own Revenue Asset`,
          shoparkBtn: "Launch Cross-Border Store on ShopArk",
          apayBtn: "Generate Paid Micro-Site with APay",
          viewProjectDetail: "Full 5D Fit & Project Specs"
        };
      }
      return {
        badge: "\u4ECE\u770B\u61C2\u5230\u6536\u6B3E\u95ED\u73AF",
        title: `\u76F4\u63A5\u628A\u300C${((_b = localizedRelatedProject.value) == null ? void 0 : _b.name) || ""}\u300D\u53D8\u6210\u4F60\u7684\u6536\u6B3E\u8D44\u4EA7`,
        shoparkBtn: "\u7528 ShopArk \u5F00\u8BBE\u540C\u6B3E\u5916\u8D38\u72EC\u7ACB\u7AD9",
        apayBtn: "\u7528 APay \u4E00\u952E\u751F\u6210\u540C\u6B3E\u6536\u8D39\u5FAE\u7AD9",
        viewProjectDetail: "\u67E5\u770B\u4E94\u7EF4\u80FD\u529B\u5339\u914D\u4E0E\u5B8C\u6574\u53C2\u6570"
      };
    });
    const post = computed(() => getLocalizedPost(data.value) || fallbackProjectPost.value);
    const { pending: rawPending, requestFailed: rawFailed } = usePageResourceState(data, status, error);
    const pending = computed(() => rawPending.value && !fallbackProjectPost.value);
    const requestFailed = computed(() => rawFailed.value && !fallbackProjectPost.value);
    const resolvedCoverUrl = computed(() => {
      var _a, _b;
      if ((_a = post.value) == null ? void 0 : _a.imageUrl) return post.value.imageUrl;
      if ((_b = post.value) == null ? void 0 : _b.slug) return buildBlogOgCoverUrl(post.value.slug, currentNormLocale.value);
      return "";
    });
    const resolvedSocialOgUrl = computed(() => {
      var _a, _b;
      const targetSlug = ((_a = post.value) == null ? void 0 : _a.slug) || slug;
      if (!targetSlug) return "";
      return resolveSocialOgImageUrl((_b = post.value) == null ? void 0 : _b.imageUrl, targetSlug, currentNormLocale.value, "https://hoxi.ai");
    });
    const trackBadgeLabel = computed(() => {
      if (!post.value) return "";
      const isEn = currentNormLocale.value === "en";
      if (post.value.key === "devpulse") return isEn ? "Live Ledger" : "\u5B9E\u76D8\u8D26\u672C";
      if (post.value.key === "projects" || relatedProject.value) return isEn ? "Financial Audit" : "\u8D22\u52A1\u62C6\u89E3";
      return post.value.type || "";
    });
    const resolveTargetLocale = (itemLocale) => {
      if (!itemLocale) return void 0;
      const current = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? String(locale.value) : String(locale || "en");
      if (itemLocale.startsWith("zh") && current.startsWith("zh")) return current;
      return itemLocale;
    };
    const backRoute = computed(() => {
      var _a, _b;
      const key = (_a = post.value) == null ? void 0 : _a.key;
      const target = key === "refactoring-the-self" || key === "projects" ? `/${key}` : "/blog";
      return localePath(target, resolveTargetLocale((_b = post.value) == null ? void 0 : _b.locale));
    });
    const backLabel = computed(() => {
      var _a, _b, _c;
      if (((_a = post.value) == null ? void 0 : _a.key) === "refactoring-the-self") {
        return "\u8FD4\u56DE\u300A\u5E95\u5C42\u91CD\u6784\u300B\u4E13\u680F";
      }
      if (((_b = post.value) == null ? void 0 : _b.key) === "projects") {
        return t("hoxi.nav.projects");
      }
      if (((_c = post.value) == null ? void 0 : _c.key) === "devpulse") {
        return currentNormLocale.value === "en" ? "Back to Live Ledger" : "\u8FD4\u56DE\u5B9E\u76D8\u8D26\u672C\u5217\u8868";
      }
      return t("hoxi.posts.backToList") || "\u8FD4\u56DE\u6587\u7AE0\u5217\u8868";
    });
    const renderedContent = computed(() => {
      var _a;
      if (!((_a = post.value) == null ? void 0 : _a.content)) return "";
      return injectModelReferences(post.value.content, models.value, {
        href: (modelSlug) => localePath(`/models/${modelSlug}`),
        blendedLabel: t("hoxi.model.blendedShort"),
        scoreLabel: t("hoxi.model.scoreShort")
      });
    });
    ref(null);
    useSeoMeta({
      title: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.title) ? `${post.value.title} \xB7 \u53EF\u559C AI` : "\u6587\u7AE0\u8BE6\u60C5 \xB7 \u53EF\u559C AI";
      },
      description: () => {
        var _a, _b;
        return ((_a = post.value) == null ? void 0 : _a.description) || ((_b = post.value) == null ? void 0 : _b.title) || "";
      },
      ogTitle: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.title) || "";
      },
      ogDescription: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.description) || "";
      },
      ogImage: () => resolvedSocialOgUrl.value || void 0,
      ogType: "article",
      twitterCard: "summary_large_image",
      twitterTitle: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.title) || "";
      },
      twitterDescription: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.description) || "";
      },
      twitterImage: () => resolvedSocialOgUrl.value || void 0
    });
    useJsonLd("hoxi-post", computed(() => {
      var _a, _b, _c, _d, _e;
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": ((_a = post.value) == null ? void 0 : _a.title) || "",
        "description": ((_b = post.value) == null ? void 0 : _b.description) || void 0,
        "image": resolvedSocialOgUrl.value || void 0,
        "datePublished": ((_c = post.value) == null ? void 0 : _c.createdAt) || void 0,
        "dateModified": ((_d = post.value) == null ? void 0 : _d.updatedAt) || ((_e = post.value) == null ? void 0 : _e.createdAt) || void 0
      };
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_PageRequestError = PageRequestError;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_UIcon = _sfc_main$10;
      const _component_LikeButton = __nuxt_component_3$3;
      const _component_HoxiComment = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-16" }, _attrs))}>`);
      if (pending.value && !post.value) {
        _push(`<div class="space-y-6 animate-pulse py-4"><div class="h-5 bg-slate-200 dark:bg-slate-800 rounded w-24 mb-6"></div><div class="h-10 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mb-4"></div><div class="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/3 mb-8"></div><div class="aspect-[16/9] bg-slate-200 dark:bg-slate-800 rounded-2xl mb-8 max-h-[400px]"></div><div class="space-y-3"><div class="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full"></div><div class="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6"></div><div class="h-4 bg-slate-200 dark:bg-slate-800 rounded w-4/6"></div></div></div>`);
      } else if (requestFailed.value) {
        _push(ssrRenderComponent(_component_PageRequestError, { retry: unref(refresh) }, null, _parent));
      } else if (post.value) {
        _push(`<article><div class="flex flex-wrap items-center justify-between gap-3 mb-8">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: backRoute.value,
          class: "inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-left",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(backLabel.value)}`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:arrow-left",
                  class: "w-4 h-4"
                }),
                createTextVNode(" " + toDisplayString(backLabel.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex items-center gap-2">`);
        if (relatedProject.value) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: localePath(`/projects/${relatedProject.value.slug || relatedProject.value.id}`),
            class: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50/70 text-blue-600 hover:bg-blue-100/70 text-xs font-semibold transition-colors dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:compass-tool-bold",
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(relatedProject.value.name)}</span>`);
              } else {
                return [
                  createVNode(_component_UIcon, {
                    name: "ph:compass-tool-bold",
                    class: "w-3.5 h-3.5"
                  }),
                  createVNode("span", null, toDisplayString(relatedProject.value.name), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="button" class="${ssrRenderClass([copiedPostLink.value ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300" : "border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200", "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors cursor-pointer"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: copiedPostLink.value ? "ph:check-bold" : "ph:share-network-bold",
          class: "w-3.5 h-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(copiedPostLink.value ? shareCopy.value.copied : shareCopy.value.share)}</span></button></div></div><header class="mb-10 md:mb-12"><div class="flex flex-wrap items-center gap-3 text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-4">`);
        if (trackBadgeLabel.value) {
          _push(`<span class="bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold px-2.5 py-1 rounded text-xs">${ssrInterpolate(trackBadgeLabel.value)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (trackBadgeLabel.value) {
          _push(`<span>\u2022</span>`);
        } else {
          _push(`<!---->`);
        }
        if (post.value.createdAt) {
          _push(`<div class="flex items-center gap-1.5">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:calendar-blank",
            class: "w-4 h-4"
          }, null, _parent));
          _push(`<time${ssrRenderAttr("datetime", post.value.createdAt)}>${ssrInterpolate(unref(formatDate)(post.value.createdAt))}</time></div>`);
        } else {
          _push(`<!---->`);
        }
        if (post.value.views !== void 0 && post.value.views !== null) {
          _push(`<!--[--><span>\u2022</span><div class="flex items-center gap-1.5">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:eye",
            class: "w-4 h-4"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(post.value.views)}</span></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><h1 class="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">${ssrInterpolate(post.value.title)}</h1></header>`);
        if (resolvedCoverUrl.value) {
          _push(`<div class="mb-10 md:mb-12 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"><img${ssrRenderAttr("src", resolvedCoverUrl.value)}${ssrRenderAttr("alt", post.value.title)} class="w-full object-cover max-h-[540px]"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-theme-style="hoxi-article" class="prose dark:prose-invert max-w-none text-[16px] md:text-[17px] leading-8 md:leading-9 text-slate-800 dark:text-slate-200">${(_a = renderedContent.value) != null ? _a : ""}</div>`);
        if (localizedRelatedProject.value && relatedManifest.value) {
          _push(`<div class="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 space-y-6">`);
          if (relatedManifest.value.mode === "workflow_playground" || relatedManifest.value.mode === "gopanel_app") {
            _push(ssrRenderComponent(HoxiProjectRunPanel, {
              "project-slug": String(localizedRelatedProject.value.slug || localizedRelatedProject.value.id),
              "project-name": localizedRelatedProject.value.name,
              manifest: relatedManifest.value,
              locale: currentNormLocale.value
            }, null, _parent));
          } else if (relatedManifest.value.mode === "shopark_launchpad" || relatedManifest.value.mode === "apay_launchpad") {
            _push(`<section class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div class="space-y-1.5"><span class="inline-block text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">${ssrInterpolate(launchpadCopy.value.badge)}</span><h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">${ssrInterpolate(launchpadCopy.value.title)}</h2><p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">${ssrInterpolate(relatedManifest.value.blueprintPrompt || localizedRelatedProject.value.tagline)}</p></div>`);
            if (relatedManifest.value.mode === "shopark_launchpad") {
              _push(`<a${ssrRenderAttr("href", relatedManifest.value.launchpadUrl || "https://myshopark.com")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-1.5 shrink-0 rounded-full bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 text-xs sm:text-sm font-medium transition-colors">`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:storefront-bold",
                class: "w-4 h-4"
              }, null, _parent));
              _push(`<span>${ssrInterpolate(launchpadCopy.value.shoparkBtn)}</span></a>`);
            } else {
              _push(ssrRenderComponent(_component_NuxtLink, {
                to: localePath(`/site-builder?project=${encodeURIComponent(String(localizedRelatedProject.value.slug || localizedRelatedProject.value.id))}`),
                class: "inline-flex items-center justify-center gap-1.5 shrink-0 rounded-full bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 text-xs sm:text-sm font-medium transition-colors"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "ph:rocket-launch-bold",
                      class: "w-4 h-4"
                    }, null, _parent2, _scopeId));
                    _push2(`<span${_scopeId}>${ssrInterpolate(launchpadCopy.value.apayBtn)}</span>`);
                  } else {
                    return [
                      createVNode(_component_UIcon, {
                        name: "ph:rocket-launch-bold",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", null, toDisplayString(launchpadCopy.value.apayBtn), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent));
            }
            _push(`</section>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="my-14 flex flex-col items-center justify-center gap-2.5">`);
        _push(ssrRenderComponent(_component_LikeButton, {
          "target-type": "post",
          "target-id": String(post.value.slug),
          "initial-count": post.value.likes || 0,
          size: "lg",
          variant: "button",
          label: _ctx.$t("hoxi.posts.like"),
          "auto-fetch": "",
          class: "!rounded-full px-7 py-3 transition-colors duration-200"
        }, null, _parent));
        _push(`<span class="text-xs text-slate-400 dark:text-slate-500 select-none">${ssrInterpolate(_ctx.$t("hoxi.posts.likePrompt"))}</span></div><div class="mt-14 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: backRoute.value,
          class: "inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-left",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(backLabel.value)}`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:arrow-left",
                  class: "w-4 h-4"
                }),
                createTextVNode(" " + toDisplayString(backLabel.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (localizedRelatedProject.value) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: localePath(`/projects/${localizedRelatedProject.value.slug || localizedRelatedProject.value.id}`),
            class: "inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(launchpadCopy.value.viewProjectDetail)}</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("span", null, toDisplayString(launchpadCopy.value.viewProjectDetail), 1),
                  createVNode(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-4 h-4"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_HoxiComment, {
          "target-type": "post",
          "target-id": String(post.value.slug)
        }, null, _parent));
        _push(`</article>`);
      } else {
        _push(`<div class="text-center py-20 bg-slate-50/50 dark:bg-slate-900/40 rounded-3xl border border-slate-100 dark:border-slate-800">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:file-x-bold",
          class: "w-16 h-16 text-slate-400 dark:text-slate-600 mb-4 mx-auto"
        }, null, _parent));
        _push(`<h1 class="text-2xl font-bold text-slate-800 dark:text-white mb-2">${ssrInterpolate(_ctx.$t("hoxi.blog.notFound"))}</h1><p class="text-slate-500 dark:text-slate-400 mb-6 text-sm">${ssrInterpolate(_ctx.$t("hoxi.blog.notFoundDesc"))}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: localePath("/blog"),
          class: "inline-flex items-center gap-2 px-5 py-2 bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("hoxi.blog.returnBlog"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("hoxi.blog.returnBlog")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-Csmf1WHR.mjs.map
