import { cX as getPublishAggregatesForUser, cY as getListingPricingDefaultsByUser, cZ as rebuildProductAggregate, c_ as ensureProductVisionFactsForImages, c$ as shouldBlockImageGenerationForVision, d0 as hasChannelImageBlueprint, d1 as getListingAutomationByUser, d2 as customizeBlueprint, d3 as resolveChannelImageBlueprint, d4 as filterBlueprintPlanByEffectiveSkus, d5 as buildImageBlueprintPlan, d6 as buildListingBlueprintImageTaskSpecs, d7 as getChannelPromptEngine, d8 as resolveChannelPromptSnapshotForSelector, d9 as assertListingBlueprintImageTaskSpecs, da as listBlueprintTaskItems, db as completeBlueprintTaskItem, dc as settleListingBlueprintStep, dd as ensureBlueprintTaskItems, de as registerPlannedGenerationSlots, df as persistGeneratedImageWorkspace, dg as assertImageGenerationTaskSpec, dh as isTaskControlInterrupt, di as isGenerationTaskStateUnknown, dj as classifyGenerationError, dk as failBlueprintTaskItem, dl as startBlueprintTaskItem, dm as runProductImageGenerationTaskSpec, dn as updateBlueprintTaskItemStage, dp as enqueueIdempotentToolTask } from '../nitro/nitro.mjs';
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

const IMMEDIATE_RETRY_DELAY_MS = 3e3;
const SWEEP_RETRY_DELAY_MS = 45e3;
const DEFAULT_BLUEPRINT_CONCURRENCY = 6;
const resolveConcurrency = () => {
  const raw = Number(process.env.QINGPU_BLUEPRINT_CONCURRENCY);
  if (!Number.isFinite(raw) || raw < 1) return DEFAULT_BLUEPRINT_CONCURRENCY;
  return Math.min(Math.floor(raw), 16);
};
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const runWithConcurrency = async (items, limit, worker) => {
  if (!items.length) return;
  let cursor = 0;
  let abortError = null;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    for (; ; ) {
      if (abortError) return;
      const index = cursor++;
      if (index >= items.length) return;
      try {
        await worker(items[index]);
      } catch (error) {
        if (!abortError) abortError = error;
        return;
      }
    }
  });
  await Promise.all(runners);
  if (abortError) throw abortError;
};
const taskFromItem = (item) => {
  assertImageGenerationTaskSpec(item.payload.taskSpec);
  const taskSpec = item.payload.taskSpec;
  if (taskSpec.planId !== item.plan_id) throw new Error(`blueprint item plan conflict: ${item.item_key}`);
  return {
    itemKey: item.item_key,
    kind: item.kind,
    label: item.label,
    taskSpec,
    item
  };
};
class ConfigAbortError extends Error {
}
const runBlueprintChain = async (userId, productId, options, onProgress) => {
  var _a, _b, _c;
  assertListingBlueprintImageTaskSpecs(options.imageTaskSpecs, productId);
  const loadProduct = async () => {
    const [row] = await getPublishAggregatesForUser(userId, [productId]);
    if (!row) throw new Error("product not found");
    const baseWorkspace = structuredClone(row.workspace || {});
    const product = rebuildProductAggregate(row);
    return { product, baseWorkspace };
  };
  const first = await loadProduct();
  let storedItems = await listBlueprintTaskItems(options.taskId);
  for (const item of storedItems.filter((entry) => entry.status !== "succeeded")) {
    const asset = (_b = (_a = first.product.listingWorkspace) == null ? void 0 : _a.media.imageAssets) == null ? void 0 : _b.find((entry) => entry.id === `generated-plan:${item.plan_id}`);
    const url = String((asset == null ? void 0 : asset.url) || (asset == null ? void 0 : asset.dataUrl) || "");
    if ((asset == null ? void 0 : asset.status) === "done" && url) {
      await completeBlueprintTaskItem(item.id, {
        assetId: asset.id,
        url,
        reviewPending: ((_c = asset.meta) == null ? void 0 : _c.textReviewStatus) === "pending"
      });
    }
  }
  storedItems = await listBlueprintTaskItems(options.taskId);
  if (storedItems.length > 0 && storedItems.every((item) => item.status === "succeeded")) {
    const completed2 = options.blueprintSnapshot.completed + storedItems.length;
    return settleListingBlueprintStep({
      total: options.blueprintSnapshot.total,
      completed: completed2,
      generated: 0,
      failed: [],
      recovered: 0,
      skipped: true
    });
  }
  if (!storedItems.length && !options.imageTaskSpecs.length) {
    return settleListingBlueprintStep({
      total: options.blueprintSnapshot.total,
      completed: options.blueprintSnapshot.completed,
      generated: 0,
      failed: [],
      recovered: 0,
      skipped: true
    });
  }
  const initialItems = storedItems.length ? storedItems : await ensureBlueprintTaskItems(options.taskId, options.imageTaskSpecs.map((task) => ({
    itemKey: task.itemKey,
    planId: task.taskSpec.planId,
    kind: task.kind,
    label: task.label,
    assignTo: task.taskSpec.assignTo,
    payload: {
      taskSpec: task.taskSpec
    }
  })));
  const trackedTasks = initialItems.filter((item) => item.status !== "succeeded").map(taskFromItem);
  const total = options.blueprintSnapshot.total;
  const completedBeforeRun = options.blueprintSnapshot.completed;
  const missingSlots = trackedTasks.filter(({ item }) => {
    var _a2, _b2;
    return !((_b2 = (_a2 = first.product.listingWorkspace) == null ? void 0 : _a2.media.imageAssets) == null ? void 0 : _b2.some((asset) => asset.id === `generated-plan:${item.plan_id}`));
  });
  if (missingSlots.length) {
    Object.assign(first.product, registerPlannedGenerationSlots(first.product, missingSlots.map((task) => ({
      planId: task.item.plan_id,
      label: task.label,
      slotKey: task.taskSpec.slotKey,
      outputUsage: task.taskSpec.outputUsage,
      targetSlotKey: task.kind === "sku" ? String(task.taskSpec.assignTo || "").replace(/^sku::/, "") : void 0
    }))));
    first.baseWorkspace = await persistGeneratedImageWorkspace(userId, productId, first.product, first.baseWorkspace);
  }
  let generated = 0;
  const runPass = async (tasks, passLabel, passProduct, initialBaseWorkspace) => {
    const passFailed = [];
    let mutationChain = Promise.resolve();
    let baseWorkspace = initialBaseWorkspace;
    const shared = {
      product: passProduct,
      updateProductWithin: (mutator, persistOptions) => {
        let updated;
        const run = async () => {
          const result = await mutator(passProduct);
          if (result === false) return;
          if (result && typeof result === "object") Object.assign(passProduct, result);
          baseWorkspace = await persistGeneratedImageWorkspace(userId, productId, passProduct, baseWorkspace, persistOptions);
          updated = passProduct;
        };
        const pending = mutationChain.then(run, run);
        mutationChain = pending.then(() => void 0, () => void 0);
        return pending.then(() => updated);
      },
      onRemoteTask: async (payload) => {
        var _a2;
        const item = (_a2 = tasks.find((entry) => entry.item.plan_id === payload.planId)) == null ? void 0 : _a2.item;
        if (item) {
          await updateBlueprintTaskItemStage(item.id, "remote", {
            remoteTaskId: payload.remoteTaskId,
            protocol: payload.protocol
          });
        }
      },
      enqueueReview: async (payload) => {
        await enqueueIdempotentToolTask(userId, "image_review", productId, `[review] ${payload.assetId}`.slice(0, 120), {
          dedupeKey: `${options.taskId}:${payload.planId}`,
          payload: {
            parentTaskId: options.taskId,
            planId: payload.planId,
            assetId: payload.assetId,
            imageUrl: payload.imageUrl
          }
        });
      }
    };
    const reviewQueued = /* @__PURE__ */ new Set();
    const enqueueReview = shared.enqueueReview;
    shared.enqueueReview = async (payload) => {
      await enqueueReview(payload);
      reviewQueued.add(payload.planId);
    };
    let settled = 0;
    const reportProgress = async (label, stage) => {
      const pct = Math.min(95, Math.round(settled / Math.max(tasks.length, 1) * 90) + 5);
      await (onProgress == null ? void 0 : onProgress(pct, stage ? `${passLabel}:${label}:${stage}` : `${passLabel}:${label}`));
    };
    const generateOne = async (task) => {
      await startBlueprintTaskItem(task.item.id);
      const outcome = await runProductImageGenerationTaskSpec(userId, productId, task.taskSpec, async (_progress, stage) => {
        if (stage) await updateBlueprintTaskItemStage(task.item.id, stage);
        await reportProgress(task.label, stage);
      }, shared);
      await completeBlueprintTaskItem(task.item.id, {
        assetId: outcome.assetId,
        url: outcome.url,
        reviewPending: reviewQueued.has(task.item.plan_id)
      });
      generated += 1;
      return outcome;
    };
    const runOne = async (task) => {
      await reportProgress(task.label);
      try {
        const outcome = await generateOne(task);
        return { url: outcome.url };
      } catch (err) {
        if (isTaskControlInterrupt(err)) throw err;
        const stateUnknown = isGenerationTaskStateUnknown(err);
        const kind = classifyGenerationError(err);
        const message = err instanceof Error ? err.message : String(err);
        await failBlueprintTaskItem(task.item.id, message, { stateUnknown });
        if (stateUnknown) {
          return { failure: { itemKey: task.item.item_key, label: task.label, error: message, kind: "unknown" } };
        }
        if (kind === "config") {
          throw new ConfigAbortError(`\u914D\u7F6E\u9519\u8BEF,\u751F\u56FE\u94FE\u4E2D\u6B62:${message}`);
        }
        if (kind === "transient") {
          await sleep(IMMEDIATE_RETRY_DELAY_MS);
          await reportProgress(task.label, "retry");
          try {
            const outcome = await generateOne(task);
            return { url: outcome.url };
          } catch (retryErr) {
            if (isTaskControlInterrupt(retryErr)) throw retryErr;
            const retryKind = classifyGenerationError(retryErr);
            const retryMessage = retryErr instanceof Error ? retryErr.message : String(retryErr);
            await failBlueprintTaskItem(task.item.id, retryMessage, {
              stateUnknown: isGenerationTaskStateUnknown(retryErr)
            });
            if (retryKind === "config") throw new ConfigAbortError(`\u914D\u7F6E\u9519\u8BEF,\u751F\u56FE\u94FE\u4E2D\u6B62:${retryMessage}`);
            return { failure: { itemKey: task.item.item_key, label: task.label, error: retryMessage, kind: retryKind } };
          }
        }
        return { failure: { itemKey: task.item.item_key, label: task.label, error: message, kind } };
      }
    };
    await runWithConcurrency(tasks, resolveConcurrency(), async (task) => {
      const result = await runOne(task);
      settled += 1;
      if (result.failure) passFailed.push(result.failure);
    });
    await mutationChain;
    return passFailed;
  };
  const firstFailed = await runPass(
    trackedTasks,
    "blueprint",
    first.product,
    first.baseWorkspace
  );
  const retryableKinds = /* @__PURE__ */ new Set(["transient", "unknown"]);
  const retryableCount = firstFailed.filter((item) => retryableKinds.has(item.kind)).length;
  let recovered = 0;
  let finalFailed = firstFailed;
  if (retryableCount > 0) {
    await (onProgress == null ? void 0 : onProgress(95, "blueprint:sweep:waiting"));
    await sleep(SWEEP_RETRY_DELAY_MS);
    await (onProgress == null ? void 0 : onProgress(95, "blueprint:sweep:resume"));
    const sweep = await loadProduct();
    const sweepItems = await listBlueprintTaskItems(options.taskId);
    const retryableItemKeys = new Set(firstFailed.filter((item) => retryableKinds.has(item.kind)).map((item) => item.itemKey));
    const sweepTasks = sweepItems.filter((item) => item.status !== "succeeded" && retryableItemKeys.has(item.item_key)).map(taskFromItem);
    if (sweepTasks.length) {
      const sweepFailed = await runPass(
        sweepTasks,
        "sweep",
        sweep.product,
        sweep.baseWorkspace
      );
      recovered = Math.max(0, retryableCount - sweepFailed.filter((item) => retryableKinds.has(item.kind)).length);
      finalFailed = [
        ...firstFailed.filter((item) => !retryableKinds.has(item.kind)),
        ...sweepFailed
      ];
    } else {
      recovered = retryableCount;
      finalFailed = firstFailed.filter((item) => !retryableKinds.has(item.kind));
    }
  }
  const finalItems = await listBlueprintTaskItems(options.taskId);
  const completed = completedBeforeRun + finalItems.filter((item) => item.status === "succeeded").length;
  return settleListingBlueprintStep({
    total,
    completed,
    generated,
    failed: finalFailed,
    recovered,
    skipped: false
  });
};
const resolveBlueprintImageTaskSpecsForProduct = async (userId, productId, channel, mode = "fill", presetInstructions) => {
  var _a, _b, _c, _d;
  const [row] = await getPublishAggregatesForUser(userId, [productId]);
  if (!row) {
    throw new Error(`product not found: ${productId}`);
  }
  const pricingDefaults = await getListingPricingDefaultsByUser(userId).catch(() => void 0);
  const product = rebuildProductAggregate(row, pricingDefaults);
  const visionOutcome = await ensureProductVisionFactsForImages(userId, productId, product, { staleRefresh: "await" }).catch(() => null);
  if (visionOutcome && shouldBlockImageGenerationForVision(visionOutcome)) {
    throw new Error(`\u751F\u56FE\u524D\u7F6E\u89C6\u89C9\u4E8B\u5B9E\u963B\u65AD\uFF1A${visionOutcome.message || visionOutcome.reason}`);
  }
  if (!hasChannelImageBlueprint(channel)) {
    throw new Error(`\u8BE5\u6E20\u9053\u6682\u4E0D\u652F\u6301\u751F\u56FE\uFF08\u56FE\u96C6\u84DD\u56FE\u672A\u6CE8\u518C\uFF09\uFF1A${channel}`);
  }
  const channelDraft = (row.drafts || {})[channel] || {};
  const listing = channelDraft.listing && typeof channelDraft.listing === "object" && !Array.isArray(channelDraft.listing) ? channelDraft.listing : channelDraft;
  const categoryId = String(
    (listing == null ? void 0 : listing.categoryId) || (listing == null ? void 0 : listing.category_id) || (listing == null ? void 0 : listing.subjectId) || (listing == null ? void 0 : listing.subject_id) || ((_b = (_a = product.listingWorkspace) == null ? void 0 : _a.categoryHints) == null ? void 0 : _b.selectedWbSubjectId) || ((_d = (_c = product.listingWorkspace) == null ? void 0 : _c.categoryHints) == null ? void 0 : _d.selectedOzonCategoryId) || ""
  ).trim();
  const strategy = await getListingAutomationByUser(userId).catch(() => ({
    galleryTarget: 3,
    galleryStyles: ["white_background", "scene", "details"]
  }));
  const blueprint = customizeBlueprint(
    resolveChannelImageBlueprint(channel),
    strategy.galleryTarget,
    strategy.galleryStyles
  );
  const blueprintPlan = filterBlueprintPlanByEffectiveSkus(
    product,
    buildImageBlueprintPlan(product, mode, blueprint)
  );
  if (!blueprintPlan.tasks.length) {
    return {
      imageTaskSpecs: [],
      blueprintSnapshot: {
        total: blueprintPlan.total || 0,
        completed: blueprintPlan.completed || 0
      }
    };
  }
  const baseImageTaskSpecs = buildListingBlueprintImageTaskSpecs(
    product,
    blueprintPlan.tasks,
    presetInstructions,
    channel
  );
  const categoryProfileKey = getChannelPromptEngine().resolveChannelPromptCategoryProfileKey(product);
  const imageTaskSpecs = await Promise.all(baseImageTaskSpecs.map(async (entry) => {
    const channelPromptSnapshot = await resolveChannelPromptSnapshotForSelector({
      channel,
      mediaType: "image",
      outputUsage: entry.taskSpec.outputUsage,
      ...entry.taskSpec.outputUsage === "gallery_image" && entry.taskSpec.slotKey ? { slotKey: entry.taskSpec.slotKey } : {},
      ...categoryId ? { categoryId } : {},
      categoryProfileKey
    });
    return {
      ...entry,
      taskSpec: Object.freeze({ ...entry.taskSpec, channelPromptSnapshot })
    };
  }));
  return {
    imageTaskSpecs,
    blueprintSnapshot: {
      total: blueprintPlan.total,
      completed: blueprintPlan.completed
    }
  };
};

export { resolveBlueprintImageTaskSpecsForProduct, runBlueprintChain };
