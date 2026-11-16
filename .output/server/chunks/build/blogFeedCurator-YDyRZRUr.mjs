function isExternalBreakdownPost(post) {
  if (!post) return false;
  const key = String(post.key || "").trim().toLowerCase();
  if (key === "projects") return true;
  if (key === "devpulse" || key === "refactoring-the-self") return false;
  const slug = String(post.slug || "").trim().toLowerCase();
  return /-(?:breakdown|breakdown-en)$/.test(slug);
}
function curateSolopreneurHomePosts(posts, limit = 6, maxBreakdowns = 2) {
  if (!Array.isArray(posts) || posts.length === 0 || limit <= 0) return [];
  const originals = [];
  const breakdowns = [];
  for (const item of posts) {
    if (!(item == null ? void 0 : item.slug) || !(item == null ? void 0 : item.title)) continue;
    if (isExternalBreakdownPost(item)) breakdowns.push(item);
    else originals.push(item);
  }
  const targetOriginals = Math.max(0, limit - maxBreakdowns);
  const pickedOriginals = originals.slice(0, targetOriginals);
  const pickedBreakdowns = breakdowns.slice(0, maxBreakdowns);
  const combined = [...pickedOriginals, ...pickedBreakdowns];
  if (combined.length < limit) {
    const usedSlugs = new Set(combined.map((p) => p.slug));
    for (const extra of [...originals.slice(targetOriginals), ...breakdowns.slice(maxBreakdowns)]) {
      if (combined.length >= limit) break;
      if (extra.slug && !usedSlugs.has(extra.slug)) {
        usedSlugs.add(extra.slug);
        combined.push(extra);
      }
    }
  }
  return combined.slice(0, limit);
}
function filterAndCurateBlogIndexPosts(posts, track = "all", options = {}) {
  var _a, _b;
  if (!Array.isArray(posts) || posts.length === 0) return [];
  if (track === "original") {
    return posts.filter((p) => !isExternalBreakdownPost(p));
  }
  if (track === "audit") {
    return posts.filter((p) => isExternalBreakdownPost(p));
  }
  const isFirstPage = (_a = options.isFirstPage) != null ? _a : true;
  const pinCount = (_b = options.pinOriginalCount) != null ? _b : 3;
  if (!isFirstPage || pinCount <= 0) return posts;
  const originals = posts.filter((p) => !isExternalBreakdownPost(p));
  const breakdowns = posts.filter((p) => isExternalBreakdownPost(p));
  if (originals.length === 0 || breakdowns.length === 0) return posts;
  const pinned = originals.slice(0, pinCount);
  const pinnedSet = new Set(pinned.map((p) => p.slug));
  const rest = posts.filter((p) => !pinnedSet.has(p.slug));
  return [...pinned, ...rest];
}

export { curateSolopreneurHomePosts as c, filterAndCurateBlogIndexPosts as f, isExternalBreakdownPost as i };
//# sourceMappingURL=blogFeedCurator-YDyRZRUr.mjs.map
