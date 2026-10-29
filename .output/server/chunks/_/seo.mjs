import { fC as getEffectiveServerGateways, fD as getEffectiveServerPlans, fE as getEffectiveServerModels, b as db, fF as normalizeIsoDate } from '../nitro/nitro.mjs';
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
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const getSitemapEntries = async (source) => {
  if (source === "hoxi-gateways") {
    const gateways = await getEffectiveServerGateways(db);
    return gateways.filter((gw) => !gw.hidden).map((gw) => {
      const name = String(gw.name || gw.id);
      const priceNote = gw.priceLabel ? `${gw.priceLabel}${gw.savingsPercent ? ` (save ${gw.savingsPercent}%)` : ""}` : "";
      const description = [priceNote, gw.caveat].filter(Boolean).join(" \u2014 ") || name;
      const markdown = [
        `- Gateway ID: ${gw.id}`,
        ...gw.domain ? [`- Domain: ${gw.domain}`] : [],
        ...gw.priceLabel ? [`- Price: ${gw.priceLabel}${gw.officialPriceCNY ? ` (Official \xA5${gw.officialPriceCNY}/M, save ${gw.savingsPercent || 0}%)` : ""}`] : [],
        ...gw.latencyMs ? [`- Avg Latency: ${gw.latencyMs}ms`] : [],
        ...gw.uptime ? [`- Uptime: ${gw.uptime}`] : [],
        ...Array.isArray(gw.models) && gw.models.length ? [`- Supported Models: ${gw.models.join(", ")}`] : [],
        ...Array.isArray(gw.features) && gw.features.length ? [`- Features: ${gw.features.join(" / ")}`] : [],
        ...gw.caveat ? [`- Note: ${gw.caveat}`] : []
      ].join("\n");
      return {
        path: `/gateways/${gw.id}`,
        title: name,
        section: "AI API Gateways",
        description,
        markdown
      };
    });
  }
  if (source === "hoxi-coding-plans") {
    const plans = await getEffectiveServerPlans(db);
    return plans.filter((p) => !p.hidden).map((p) => {
      const name = String(p.name || p.slug);
      const description = [p.priceLabel, p.quotaNote].filter(Boolean).join(" \u2014 ") || name;
      const markdown = [
        `- Vendor: ${p.vendorLabel || p.vendor || "Unknown"}`,
        ...p.priceLabel ? [`- Price: ${p.priceLabel}${p.priceMonthlyCNY ? ` (~\xA5${p.priceMonthlyCNY}/mo)` : ""}`] : [],
        ...p.period ? [`- Billing Period: ${p.period}`] : [],
        ...p.networkRequirement ? [`- Network: ${p.networkRequirement}`] : [],
        ...p.quotaNote ? [`- Quota: ${p.quotaNote}`] : [],
        ...Array.isArray(p.models) && p.models.length ? [`- Models: ${p.models.join(", ")}`] : [],
        ...Array.isArray(p.tools) && p.tools.length ? [`- Tools: ${p.tools.join(", ")}`] : [],
        ...Array.isArray(p.highlights) && p.highlights.length ? [`
#### Highlights
${p.highlights.map((h) => `- ${h}`).join("\n")}`] : [],
        ...Array.isArray(p.caveats) && p.caveats.length ? [`
#### Caveats
${p.caveats.map((c) => `- ${c}`).join("\n")}`] : []
      ].join("\n");
      return {
        path: `/coding-plans/${p.slug}`,
        title: name,
        section: "AI Coding Plans",
        description,
        markdown
      };
    });
  }
  const models = await getEffectiveServerModels(db);
  return models.map((model) => {
    const contextK = Math.round((Number(model.contextWindow) || 0) / 1e3);
    const priceSummary = `${model.price.currency} ${model.price.input}/M input, ${model.price.currency} ${model.price.output}/M output`;
    const description = [
      model.summary,
      `Pricing: ${priceSummary}`,
      contextK > 0 ? `Context: ${contextK}K` : ""
    ].filter(Boolean).join(" \xB7 ");
    const scores = model.scores || {};
    const scoreParts = [
      scores.overall !== void 0 ? `Overall ${scores.overall}` : "",
      scores.coding !== void 0 ? `Coding ${scores.coding}` : "",
      scores.reasoning !== void 0 ? `Reasoning ${scores.reasoning}` : "",
      scores.math !== void 0 ? `Math ${scores.math}` : "",
      scores.writing !== void 0 ? `Writing ${scores.writing}` : ""
    ].filter(Boolean);
    const markdown = [
      `- Vendor: ${model.vendor}`,
      `- Pricing: ${priceSummary}`,
      ...contextK > 0 ? [`- Context Window: ${contextK}K tokens`] : [],
      ...model.maxOutputTokens ? [`- Max Output: ${Math.round(model.maxOutputTokens / 1e3)}K tokens`] : [],
      ...Array.isArray(model.modalities) && model.modalities.length ? [`- Modalities: ${model.modalities.join(", ")}`] : [],
      `- Reasoning: ${model.reasoning ? "Yes" : "No"} | Open Weights: ${model.openWeights ? "Yes" : "No"}`,
      ...scoreParts.length ? [`- Benchmark Scores: ${scoreParts.join(", ")}`] : [],
      ...model.summary ? [`
${model.summary}`] : [],
      ...Array.isArray(model.highlights) && model.highlights.length ? [`
#### Highlights
${model.highlights.map((h) => `- ${h}`).join("\n")}`] : [],
      ...Array.isArray(model.caveats) && model.caveats.length ? [`
#### Caveats
${model.caveats.map((c) => `- ${c}`).join("\n")}`] : []
    ].join("\n");
    return {
      path: `/models/${model.slug}`,
      lastmod: normalizeIsoDate(model.updatedAt),
      title: `${model.name} (${model.vendor})`,
      section: "AI Models",
      description,
      markdown
    };
  });
};

export { getSitemapEntries };
//# sourceMappingURL=seo.mjs.map
