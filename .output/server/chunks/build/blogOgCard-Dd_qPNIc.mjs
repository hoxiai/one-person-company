function normalizeBlogOgSlug(slug) {
  return String(slug || "solopreneur-audit").trim().replace(/^\/?(?:blog\/)?/, "").replace(/\.(?:svg|png)$/i, "").replace(/\/+$/, "") || "solopreneur-audit";
}
function buildBlogOgCoverUrl(slug, locale) {
  const cleanSlug = normalizeBlogOgSlug(slug);
  const query = locale && locale !== "zh" ? `?locale=${encodeURIComponent(locale)}` : "";
  return `/api/hoxi/og/blog/${encodeURIComponent(cleanSlug)}${query}`;
}
function buildBlogOgSocialPngUrl(slug, locale, origin = "https://hoxi.ai") {
  const cleanOrigin = String(origin || "https://hoxi.ai").replace(/\/+$/, "") || "https://hoxi.ai";
  const cleanSlug = normalizeBlogOgSlug(slug);
  const params = new URLSearchParams({ format: "png" });
  if (locale && locale !== "zh") {
    params.set("locale", locale);
  }
  return `${cleanOrigin}/api/hoxi/og/blog/${encodeURIComponent(cleanSlug)}?${params.toString()}`;
}
function resolveSocialOgImageUrl(imageUrl, slug, locale, origin = "https://hoxi.ai") {
  const cleanOrigin = String(origin || "https://hoxi.ai").replace(/\/+$/, "") || "https://hoxi.ai";
  const trimmed = String(imageUrl || "").trim();
  if (trimmed && !trimmed.includes("/api/hoxi/og/blog/") && !/\.svg(?:$|\?)/i.test(trimmed)) {
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return `${cleanOrigin}${trimmed.startsWith("/") ? "" : "/"}${trimmed}`;
  }
  return buildBlogOgSocialPngUrl(slug, locale, cleanOrigin);
}

export { buildBlogOgCoverUrl as b, resolveSocialOgImageUrl as r };
//# sourceMappingURL=blogOgCard-Dd_qPNIc.mjs.map
