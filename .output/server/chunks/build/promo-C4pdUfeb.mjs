import { e as useI18n, g as useToast, f as useFormatTime, I as useCurrencyFormat, t as useSettings, h as useAdminPermissions, y as useFetch, k as _sfc_main$z, b as _sfc_main$E, n as _sfc_main$v, d as _sfc_main$i, o as _sfc_main$h, l as _sfc_main$f, c as _sfc_main$j, p as _sfc_main$q, O as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$1 } from './Switch-fZeXww_c.mjs';
import { defineComponent, withAsyncContext, computed, ref, reactive, watchEffect, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
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
import './VisuallyHiddenInput-32bCuzTQ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "promo",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const toast = useToast();
    const { formatDateTime } = useFormatTime();
    const { formatCurrencyAmount } = useCurrencyFormat();
    const { getSetting, fetchSettings } = useSettings();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    [__temp, __restore] = withAsyncContext(() => fetchSettings()), await __temp, __restore();
    const baseCurrency = computed(() => getSetting("currency", "USD"));
    const activeTab = ref("promoters");
    const { data: overviewData, pending: overviewPending, refresh: refreshOverview } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/promo/overview",
      "$4Fmcd95KQW"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: tiersData, pending: tiersPending, refresh: refreshTiers } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/promo/tiers",
      "$vStNcTqEl1"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: agentsData, pending: agentsPending, refresh: refreshAgents } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/promo/agents",
      {
        query: { page: 1, pageSize: 100 }
      },
      "$vpIEp6MNT-"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: relationsData, pending: relationsPending, refresh: refreshRelations } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/promo/relations",
      "$6SWPpAzB6j"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: settingsData, refresh: refreshSettings } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/promo/settings",
      {
        default: () => ({
          promo_default_commission_rate: "15",
          promo_invite_reward_amount: "0",
          promo_access_mode: "paid_active",
          promo_min_spend_amount: "49"
        })
      },
      "$0bg9kJl6RN"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: applicationsData, pending: applicationsPending, refresh: refreshApplications } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/promo/applications",
      {
        query: { page: 1, pageSize: 50 },
        default: () => ({ list: [], total: 0 })
      },
      "$24sOnFLmO-"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const promoAccessModeOptions = [
      { label: "\u6D88\u8D39\u8FBE\u6807\u81EA\u52A8\u5F00\u901A (\u63A8\u8350)", value: "paid_active" },
      { label: "\u4EBA\u5DE5\u7533\u8BF7\u5BA1\u6838", value: "apply_audit" },
      { label: "\u6D88\u8D39\u8FBE\u6807 + \u4EBA\u5DE5\u5BA1\u6838", value: "paid_and_audit" },
      { label: "\u5168\u5458\u516C\u5F00\u65E0\u95E8\u69DB", value: "open" }
    ];
    const settingsForm = reactive({
      promoDefaultCommissionRate: 15,
      promoInviteRewardAmount: "0",
      promoAccessMode: "paid_active",
      promoMinSpendAmount: 49
    });
    watchEffect(() => {
      var _a, _b, _c, _d;
      settingsForm.promoDefaultCommissionRate = Number(((_a = settingsData.value) == null ? void 0 : _a.promo_default_commission_rate) || 15);
      settingsForm.promoInviteRewardAmount = String(((_b = settingsData.value) == null ? void 0 : _b.promo_invite_reward_amount) || "0");
      settingsForm.promoAccessMode = String(((_c = settingsData.value) == null ? void 0 : _c.promo_access_mode) || "paid_active");
      settingsForm.promoMinSpendAmount = Number(((_d = settingsData.value) == null ? void 0 : _d.promo_min_spend_amount) || 49);
    });
    const applications = computed(() => {
      var _a;
      return ((_a = applicationsData.value) == null ? void 0 : _a.list) || [];
    });
    const pendingApplicationsCount = computed(() => applications.value.filter((item) => item.status === "pending").length);
    const promoTabs = computed(() => [
      {
        key: "promoters",
        label: "\u63A8\u5E7F\u5458\u4E0E\u4EE3\u7406",
        icon: "ph:users-duotone",
        badge: pendingApplicationsCount.value > 0 ? `${pendingApplicationsCount.value}` : void 0
      },
      {
        key: "commissions",
        label: "\u4F63\u91D1\u660E\u7EC6\u4E0E\u8BA2\u5355",
        icon: "ph:money-duotone"
      },
      {
        key: "teams",
        label: "\u56E2\u961F\u4E0E\u4E1A\u7EE9\u62A5\u8868",
        icon: "ph:chart-line-up-duotone"
      },
      {
        key: "settings",
        label: "\u7B49\u7EA7\u4E0E\u89C4\u5219\u8BBE\u7F6E",
        icon: "ph:gear-six-duotone"
      }
    ]);
    const agentSearchKeyword = ref("");
    const agentRoleFilter = ref("all");
    const agentRoleFilterOptions = [
      { label: "\u5168\u90E8\u89D2\u8272", value: "all" },
      { label: "\u5B50\u4EE3\u7406", value: "agent" },
      { label: "\u603B\u4EE3\u7406 (\u5927\u961F\u957F)", value: "master_agent" }
    ];
    const auditModalOpen = ref(false);
    const currentApplication = ref(null);
    const auditAction = ref("approve");
    const auditNote = ref("");
    const savingAudit = ref(false);
    function openAuditModal(app, action) {
      currentApplication.value = app;
      auditAction.value = action;
      auditNote.value = "";
      auditModalOpen.value = true;
    }
    async function submitAudit() {
      var _a, _b, _c;
      if (!((_a = currentApplication.value) == null ? void 0 : _a.id)) return;
      savingAudit.value = true;
      try {
        await $fetch(`/api/admin/promo/applications/${currentApplication.value.id}/audit`, {
          method: "POST",
          body: {
            action: auditAction.value,
            reviewNote: auditNote.value
          }
        });
        auditModalOpen.value = false;
        await Promise.all([refreshApplications(), refreshOverview(), refreshAgents()]);
        toast.add({ title: auditAction.value === "approve" ? "\u5DF2\u5BA1\u6838\u901A\u8FC7\u5E76\u5F00\u901A\u63A8\u5E7F\u6743\u9650" : "\u5DF2\u9A73\u56DE\u7533\u8BF7", color: "success" });
      } catch (error) {
        toast.add({ title: ((_b = error == null ? void 0 : error.data) == null ? void 0 : _b.message) || ((_c = error == null ? void 0 : error.data) == null ? void 0 : _c.statusMessage) || t("admin.promo.saveFailed"), color: "error" });
      } finally {
        savingAudit.value = false;
      }
    }
    const applicationColumns = computed(() => [
      { accessorKey: "userEmail", header: "\u7533\u8BF7\u4EBA" },
      { accessorKey: "contact", header: "\u8054\u7CFB\u65B9\u5F0F" },
      { accessorKey: "channelInfo", header: "\u63A8\u5E7F\u6E20\u9053" },
      { accessorKey: "reason", header: "\u7533\u8BF7\u8BF4\u660E" },
      { accessorKey: "status", header: "\u72B6\u6001" },
      { accessorKey: "createdAt", header: "\u7533\u8BF7\u65F6\u95F4" },
      { accessorKey: "actions", header: t("admin.common.actions") }
    ]);
    const overviewCards = computed(() => {
      var _a;
      const overview = ((_a = overviewData.value) == null ? void 0 : _a.overview) || {};
      return [
        { label: t("admin.promo.overviewMembers"), value: overview.members || 0 },
        { label: t("admin.promo.overviewAgents"), value: overview.agents || 0 },
        { label: t("admin.promo.overviewMasterAgents"), value: overview.masterAgents || 0 },
        { label: t("admin.promo.overviewOrders"), value: overview.attributedOrders || 0 },
        { label: t("admin.promo.overviewCommission"), value: formatCurrencyAmount(overview.commissionAmount, baseCurrency.value) }
      ];
    });
    const tiers = computed(() => tiersData.value || []);
    const agents = computed(() => {
      var _a, _b;
      return ((_a = agentsData.value) == null ? void 0 : _a.data) || ((_b = overviewData.value) == null ? void 0 : _b.agents) || [];
    });
    const relations = computed(() => relationsData.value || []);
    const commissions = computed(() => {
      var _a;
      return ((_a = overviewData.value) == null ? void 0 : _a.commissions) || [];
    });
    const attributions = computed(() => {
      var _a;
      return ((_a = overviewData.value) == null ? void 0 : _a.attributions) || [];
    });
    const selectedMasterAgentUserId = ref(null);
    const filteredAgents = computed(() => {
      let list = agents.value || [];
      if (agentRoleFilter.value !== "all") {
        list = list.filter((item) => item.role === agentRoleFilter.value);
      }
      if (agentSearchKeyword.value.trim()) {
        const kw = agentSearchKeyword.value.trim().toLowerCase();
        list = list.filter((item) => {
          const email = String(item.email || "").toLowerCase();
          const nickname = String(item.nickname || "").toLowerCase();
          const promoCode = String(item.promoCode || "").toLowerCase();
          const agentCode = String(item.agentCode || "").toLowerCase();
          const userId = String(item.userId || "");
          return email.includes(kw) || nickname.includes(kw) || promoCode.includes(kw) || agentCode.includes(kw) || userId.includes(kw);
        });
      }
      return list;
    });
    async function copyPromoText(text) {
      if (!text) return;
      try {
        await (void 0).clipboard.writeText(text);
        toast.add({ title: "\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F", color: "success" });
      } catch {
        toast.add({ title: "\u590D\u5236\u5931\u8D25", color: "error" });
      }
    }
    const { data: teamReport, pending: teamReportPending, refresh: refreshTeamReport } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/promo/team-report",
      {
        query: computed(() => ({
          masterAgentUserId: selectedMasterAgentUserId.value || void 0
        })),
        watch: [selectedMasterAgentUserId],
        default: () => ({
          summary: {
            teamCount: 0,
            paidOrderCount: 0,
            totalSalesAmount: 0,
            totalCommissionAmount: 0
          },
          rows: []
        })
      },
      "$1fOwXhk9pd"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: teamOrders, pending: teamOrdersPending, refresh: refreshTeamOrders } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/promo/team-orders",
      {
        query: computed(() => ({
          masterAgentUserId: selectedMasterAgentUserId.value || void 0
        })),
        watch: [selectedMasterAgentUserId],
        default: () => []
      },
      "$7SC3mzJK2g"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const masterAgentOptions = computed(() => {
      const rows = (agents.value || []).filter((item) => item.role === "master_agent");
      return rows.map((item) => ({
        label: `${item.nickname || item.email} (#${item.userId})`,
        value: item.userId
      }));
    });
    watchEffect(() => {
      var _a;
      if (!selectedMasterAgentUserId.value && masterAgentOptions.value.length > 0) {
        selectedMasterAgentUserId.value = (_a = masterAgentOptions.value[0]) == null ? void 0 : _a.value;
      }
    });
    const tierColumns = computed(() => [
      { accessorKey: "code", header: t("admin.promo.tierCode") },
      { accessorKey: "name", header: t("admin.promo.tierName") },
      { accessorKey: "roleScope", header: t("admin.promo.roleScope") },
      { accessorKey: "discountRate", header: t("admin.promo.discountRate") },
      { accessorKey: "salesThreshold", header: t("admin.promo.salesThreshold") },
      { accessorKey: "actions", header: t("admin.common.actions") }
    ]);
    const agentColumns = computed(() => [
      { accessorKey: "email", header: t("admin.promo.agentEmail") },
      { accessorKey: "nickname", header: t("admin.promo.agentNickname") },
      { accessorKey: "role", header: t("admin.promo.agentRole") },
      { accessorKey: "promoCode", header: t("admin.promo.agentPromoCode") },
      { accessorKey: "agentCode", header: t("admin.promo.agentCode") },
      { accessorKey: "createdAt", header: t("admin.promo.createdAt") }
    ]);
    const relationColumns = computed(() => [
      { accessorKey: "agentUserId", header: t("admin.promo.agentUserId") },
      { accessorKey: "parentAgentUserId", header: t("admin.promo.parentAgentUserId") },
      { accessorKey: "masterAgentUserId", header: t("admin.promo.masterAgentUserId") },
      { accessorKey: "depth", header: t("admin.promo.depth") },
      { accessorKey: "createdAt", header: t("admin.promo.createdAt") },
      { accessorKey: "actions", header: t("admin.common.actions") }
    ]);
    const commissionColumns = computed(() => [
      { accessorKey: "orderId", header: t("admin.promo.orderId") },
      { accessorKey: "type", header: t("admin.promo.commissionType") },
      { accessorKey: "amount", header: t("admin.promo.commissionAmount") },
      { accessorKey: "status", header: t("admin.promo.commissionStatus") },
      { accessorKey: "createdAt", header: t("admin.promo.createdAt") }
    ]);
    const teamReportColumns = computed(() => [
      { accessorKey: "email", header: t("admin.promo.agentEmail") },
      { accessorKey: "nickname", header: t("admin.promo.agentNickname") },
      { accessorKey: "paidOrderCount", header: t("admin.promo.teamPaidOrders") },
      { accessorKey: "totalSalesAmount", header: t("admin.promo.teamSalesAmount") },
      { accessorKey: "totalCommissionAmount", header: t("admin.promo.teamCommissionAmount") }
    ]);
    const teamOrderColumns = computed(() => [
      { accessorKey: "orderId", header: t("admin.promo.orderId") },
      { accessorKey: "agentEmail", header: t("admin.promo.agentEmail") },
      { accessorKey: "buyerEmail", header: t("admin.promo.buyerEmail") },
      { accessorKey: "amount", header: t("admin.promo.amount") },
      { accessorKey: "payStatus", header: t("admin.promo.payStatus") },
      { accessorKey: "orderStatus", header: t("admin.promo.orderStatus") },
      { accessorKey: "createdAt", header: t("admin.promo.createdAt") }
    ]);
    const attributionColumns = computed(() => [
      { accessorKey: "orderId", header: t("admin.promo.orderId") },
      { accessorKey: "sourceType", header: t("admin.promo.sourceType") },
      { accessorKey: "agentTierNameSnapshot", header: t("admin.promo.tierSnapshot") },
      { accessorKey: "discountRateSnapshot", header: t("admin.promo.discountSnapshot") },
      { accessorKey: "createdAt", header: t("admin.promo.createdAt") }
    ]);
    const roleScopeOptions = [
      { label: t("admin.promo.agent"), value: "agent" },
      { label: t("admin.promo.masterAgent"), value: "master_agent" }
    ];
    const tierModalOpen = ref(false);
    const agentModalOpen = ref(false);
    const relationModalOpen = ref(false);
    const deleteRelationModalOpen = ref(false);
    const savingTier = ref(false);
    const savingSettings = ref(false);
    const savingAgent = ref(false);
    const savingRelation = ref(false);
    const deletingRelation = ref(false);
    const initializingTiers = ref(false);
    const tierForm = reactive({
      id: 0,
      code: "",
      name: "",
      roleScope: "agent",
      level: 1,
      discountRate: 1,
      salesThreshold: 0,
      isFixed: false,
      isActive: true,
      description: ""
    });
    const agentForm = reactive({
      email: "",
      role: "agent",
      parentAgentUserId: 0
    });
    const relationForm = reactive({
      relationId: 0,
      parentAgentUserId: 0,
      agentLabel: ""
    });
    const relationDeleteTarget = ref(null);
    function openTierModal(tier) {
      Object.assign(tierForm, {
        id: (tier == null ? void 0 : tier.id) || 0,
        code: (tier == null ? void 0 : tier.code) || "",
        name: (tier == null ? void 0 : tier.name) || "",
        roleScope: (tier == null ? void 0 : tier.roleScope) || "agent",
        level: Number((tier == null ? void 0 : tier.level) || 1),
        discountRate: Number((tier == null ? void 0 : tier.discountRate) || 1),
        salesThreshold: Number((tier == null ? void 0 : tier.salesThreshold) || 0),
        isFixed: Boolean(tier == null ? void 0 : tier.isFixed),
        isActive: (tier == null ? void 0 : tier.isActive) !== false,
        description: (tier == null ? void 0 : tier.description) || ""
      });
      tierModalOpen.value = true;
    }
    function formatDiscount(value) {
      const rate = Number(value || 0);
      if (!Number.isFinite(rate) || rate <= 0) return "-";
      return `${(rate * 100).toFixed(0)}%`;
    }
    async function saveTier() {
      var _a;
      savingTier.value = true;
      try {
        await $fetch("/api/admin/promo/tiers", {
          method: "POST",
          body: { ...tierForm }
        });
        tierModalOpen.value = false;
        await refreshTiers();
        toast.add({ title: t("admin.promo.saveSuccess"), color: "success" });
      } catch (error) {
        toast.add({ title: ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.statusMessage) || t("admin.promo.saveFailed"), color: "error" });
      } finally {
        savingTier.value = false;
      }
    }
    async function saveSettings() {
      savingSettings.value = true;
      try {
        await $fetch("/api/admin/promo/settings", {
          method: "POST",
          body: {
            promo_default_commission_rate: String(settingsForm.promoDefaultCommissionRate),
            promo_invite_reward_amount: settingsForm.promoInviteRewardAmount,
            promo_access_mode: settingsForm.promoAccessMode,
            promo_min_spend_amount: settingsForm.promoMinSpendAmount
          }
        });
        await refreshSettings();
        await refreshOverview();
        toast.add({ title: t("admin.promo.saveSuccess"), color: "success" });
      } catch {
        toast.add({ title: t("admin.promo.saveFailed"), color: "error" });
      } finally {
        savingSettings.value = false;
      }
    }
    async function saveAgent() {
      var _a, _b;
      savingAgent.value = true;
      try {
        await $fetch("/api/admin/promo/agents", {
          method: "POST",
          body: {
            email: agentForm.email,
            role: agentForm.role,
            parentAgentUserId: agentForm.role === "master_agent" ? null : agentForm.parentAgentUserId
          }
        });
        agentModalOpen.value = false;
        agentForm.email = "";
        agentForm.role = "agent";
        agentForm.parentAgentUserId = 0;
        await Promise.all([refreshAgents(), refreshRelations(), refreshOverview(), refreshTeamReport()]);
        toast.add({ title: t("admin.promo.saveSuccess"), color: "success" });
      } catch (error) {
        toast.add({ title: ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || ((_b = error == null ? void 0 : error.data) == null ? void 0 : _b.statusMessage) || t("admin.promo.saveFailed"), color: "error" });
      } finally {
        savingAgent.value = false;
      }
    }
    function openRelationModal(row) {
      relationForm.relationId = Number((row == null ? void 0 : row.relationId) || 0);
      relationForm.parentAgentUserId = Number((row == null ? void 0 : row.masterAgentUserId) || (row == null ? void 0 : row.parentAgentUserId) || 0);
      relationForm.agentLabel = `${(row == null ? void 0 : row.agentNickname) || (row == null ? void 0 : row.agentEmail) || ""} (#${(row == null ? void 0 : row.agentUserId) || "-"})`;
      relationModalOpen.value = true;
    }
    function openRelationDeleteModal(row) {
      relationDeleteTarget.value = row;
      deleteRelationModalOpen.value = true;
    }
    async function saveRelation() {
      var _a, _b;
      savingRelation.value = true;
      try {
        await $fetch(`/api/admin/promo/relations/${relationForm.relationId}`, {
          method: "PUT",
          body: {
            parentAgentUserId: relationForm.parentAgentUserId
          }
        });
        relationModalOpen.value = false;
        await Promise.all([refreshRelations(), refreshAgents(), refreshTeamReport(), refreshTeamOrders()]);
        toast.add({ title: t("admin.promo.saveSuccess"), color: "success" });
      } catch (error) {
        toast.add({ title: ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || ((_b = error == null ? void 0 : error.data) == null ? void 0 : _b.statusMessage) || t("admin.promo.saveFailed"), color: "error" });
      } finally {
        savingRelation.value = false;
      }
    }
    async function deleteRelation() {
      var _a, _b, _c;
      deletingRelation.value = true;
      try {
        await $fetch(`/api/admin/promo/relations/${(_a = relationDeleteTarget.value) == null ? void 0 : _a.relationId}`, {
          method: "DELETE"
        });
        deleteRelationModalOpen.value = false;
        relationDeleteTarget.value = null;
        await Promise.all([refreshRelations(), refreshAgents(), refreshOverview(), refreshTeamReport(), refreshTeamOrders()]);
        toast.add({ title: t("admin.promo.deleteRelationSuccess"), color: "success" });
      } catch (error) {
        toast.add({ title: ((_b = error == null ? void 0 : error.data) == null ? void 0 : _b.message) || ((_c = error == null ? void 0 : error.data) == null ? void 0 : _c.statusMessage) || t("admin.promo.saveFailed"), color: "error" });
      } finally {
        deletingRelation.value = false;
      }
    }
    async function initDefaultTiers() {
      initializingTiers.value = true;
      try {
        await $fetch("/api/admin/promo/init", { method: "POST" });
        await refreshTiers();
        toast.add({ title: t("admin.promo.initTierSuccess"), color: "success" });
      } catch {
        toast.add({ title: t("admin.promo.saveFailed"), color: "error" });
      } finally {
        initializingTiers.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const _component_UButton = _sfc_main$z;
      const _component_UIcon = _sfc_main$E;
      const _component_UBadge = _sfc_main$v;
      const _component_UInput = _sfc_main$i;
      const _component_USelect = _sfc_main$h;
      const _component_UTable = _sfc_main$f;
      const _component_UFormField = _sfc_main$j;
      const _component_UModal = _sfc_main$q;
      const _component_USwitch = _sfc_main$1;
      const _component_UTextarea = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-7rem)] flex flex-col gap-6" }, _attrs))}><div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between shrink-0"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(_ctx.$t("admin.promo.title"))}</h1><p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">${ssrInterpolate(_ctx.$t("admin.promo.subtitle"))}</p></div><div class="flex items-center gap-3">`);
      if (activeTab.value === "settings" && unref(hasAdminPerm)("promo:edit")) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "soft",
          size: "sm",
          loading: initializingTiers.value,
          onClick: initDefaultTiers
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("admin.promo.initDefaultTiers"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("admin.promo.initDefaultTiers")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "promoters" && unref(hasAdminPerm)("promo:edit")) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "primary",
          icon: "ph:user-plus-bold",
          onClick: ($event) => agentModalOpen.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("admin.promo.addAgent"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("admin.promo.addAgent")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 shrink-0"><!--[-->`);
      ssrRenderList(overviewCards.value, (card) => {
        _push(`<div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 shadow-sm rounded-2xl p-4 transition-all hover:border-purple-500/30"><div class="text-xs font-medium text-gray-500 dark:text-gray-400">${ssrInterpolate(card.label)}</div><div class="mt-2 text-2xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(card.value)}</div></div>`);
      });
      _push(`<!--]--></div><div class="flex items-center gap-2 border-b border-gray-200 dark:border-gray-800 pb-2 shrink-0"><!--[-->`);
      ssrRenderList(promoTabs.value, (tab) => {
        _push(`<button type="button" class="${ssrRenderClass([activeTab.value === tab.key ? "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 font-semibold shadow-xs" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5", "flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all relative"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: tab.icon,
          class: "w-4 h-4"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(tab.label)}</span>`);
        if (tab.badge) {
          _push(ssrRenderComponent(_component_UBadge, {
            color: "error",
            size: "xs",
            variant: "solid",
            class: "rounded-full px-1.5 py-0.2 text-[10px]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(tab.badge)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(tab.badge), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      });
      _push(`<!--]--></div>`);
      if (activeTab.value === "promoters") {
        _push(`<div class="space-y-6 flex-1 min-h-0 flex flex-col">`);
        if (pendingApplicationsCount.value > 0) {
          _push(`<div class="rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 p-4 flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:bell-ringing-bold",
            class: "w-5 h-5"
          }, null, _parent));
          _push(`</div><div><div class="text-sm font-bold text-amber-900 dark:text-amber-200">\u6709 ${ssrInterpolate(pendingApplicationsCount.value)} \u6761\u63A8\u5E7F\u5408\u4F19\u4EBA\u7533\u8BF7\u5F85\u5904\u7406</div><div class="text-xs text-amber-700 dark:text-amber-400">\u8BF7\u53CA\u65F6\u5BA1\u6838\u7528\u6237\u63D0\u4EA4\u7684\u63A8\u5E7F\u6E20\u9053\u4E0E\u5408\u4F5C\u8BF4\u660E\u3002</div></div></div>`);
          _push(ssrRenderComponent(_component_UButton, {
            size: "xs",
            color: "warning",
            variant: "solid",
            onClick: ($event) => activeTab.value = "promoters"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u67E5\u770B\u5E76\u5BA1\u6838`);
              } else {
                return [
                  createTextVNode("\u67E5\u770B\u5E76\u5BA1\u6838")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 shadow-sm rounded-2xl p-5 flex flex-col flex-1 min-h-0"><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 shrink-0"><div><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.promo.agentsTitle"))}</h2><p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">${ssrInterpolate(_ctx.$t("admin.promo.agentsSubtitle"))}</p></div><div class="flex flex-wrap items-center gap-3">`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: agentSearchKeyword.value,
          "onUpdate:modelValue": ($event) => agentSearchKeyword.value = $event,
          placeholder: "\u641C\u7D22\u90AE\u7BB1 / \u6635\u79F0 / \u63A8\u5E7F\u7801 / ID",
          icon: "ph:magnifying-glass",
          class: "w-64"
        }, null, _parent));
        _push(ssrRenderComponent(_component_USelect, {
          modelValue: agentRoleFilter.value,
          "onUpdate:modelValue": ($event) => agentRoleFilter.value = $event,
          items: agentRoleFilterOptions,
          class: "w-36"
        }, null, _parent));
        if (unref(hasAdminPerm)("promo:edit")) {
          _push(ssrRenderComponent(_component_UButton, {
            color: "primary",
            icon: "ph:user-plus",
            onClick: ($event) => agentModalOpen.value = true
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("admin.promo.addAgent"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.promo.addAgent")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="flex-1 overflow-auto">`);
        _push(ssrRenderComponent(_component_UTable, {
          columns: agentColumns.value,
          data: filteredAgents.value,
          loading: unref(agentsPending),
          sticky: ""
        }, {
          "email-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col"${_scopeId}><span class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(row.original.nickname || row.original.email)}</span><span class="text-xs text-gray-400"${_scopeId}>ID: #${ssrInterpolate(row.original.userId)} \xB7 ${ssrInterpolate(row.original.email)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("span", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, toDisplayString(row.original.nickname || row.original.email), 1),
                  createVNode("span", { class: "text-xs text-gray-400" }, "ID: #" + toDisplayString(row.original.userId) + " \xB7 " + toDisplayString(row.original.email), 1)
                ])
              ];
            }
          }),
          "role-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: row.original.role === "master_agent" ? "warning" : "primary",
                variant: "subtle"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(row.original.role === "master_agent" ? _ctx.$t("admin.promo.masterAgent") : _ctx.$t("admin.promo.agent"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(row.original.role === "master_agent" ? _ctx.$t("admin.promo.masterAgent") : _ctx.$t("admin.promo.agent")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UBadge, {
                  color: row.original.role === "master_agent" ? "warning" : "primary",
                  variant: "subtle"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(row.original.role === "master_agent" ? _ctx.$t("admin.promo.masterAgent") : _ctx.$t("admin.promo.agent")), 1)
                  ]),
                  _: 2
                }, 1032, ["color"])
              ];
            }
          }),
          "promoCode-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-1.5"${_scopeId}><span class="font-mono text-sm font-semibold text-indigo-600 dark:text-indigo-400"${_scopeId}>${ssrInterpolate(row.original.promoCode || "-")}</span>`);
              if (row.original.promoCode) {
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:copy",
                  onClick: ($event) => copyPromoText(row.original.promoCode)
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-1.5" }, [
                  createVNode("span", { class: "font-mono text-sm font-semibold text-indigo-600 dark:text-indigo-400" }, toDisplayString(row.original.promoCode || "-"), 1),
                  row.original.promoCode ? (openBlock(), createBlock(_component_UButton, {
                    key: 0,
                    size: "xs",
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:copy",
                    onClick: ($event) => copyPromoText(row.original.promoCode)
                  }, null, 8, ["onClick"])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          "createdAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="rounded-2xl border border-gray-200/60 bg-white p-5 shadow-sm dark:border-gray-800/50 dark:bg-[#121214]"><div class="flex items-center justify-between mb-4"><div class="flex items-center gap-2"><h3 class="text-base font-bold text-gray-900 dark:text-white">\u5408\u4F19\u4EBA\u7533\u8BF7\u5BA1\u6838\u5217\u8868</h3>`);
        if (pendingApplicationsCount.value > 0) {
          _push(ssrRenderComponent(_component_UBadge, {
            color: "error",
            variant: "subtle",
            size: "xs"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(pendingApplicationsCount.value)} \u4E2A\u5F85\u5BA1\u6838 `);
              } else {
                return [
                  createTextVNode(toDisplayString(pendingApplicationsCount.value) + " \u4E2A\u5F85\u5BA1\u6838 ", 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "ghost",
          icon: "ph:arrows-clockwise",
          loading: unref(applicationsPending),
          onClick: unref(refreshApplications)
        }, null, _parent));
        _push(`</div><div class="overflow-auto max-h-72">`);
        _push(ssrRenderComponent(_component_UTable, {
          columns: applicationColumns.value,
          data: applications.value,
          loading: unref(applicationsPending),
          sticky: ""
        }, {
          "userEmail-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col"${_scopeId}><span class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(row.original.userNickname || row.original.userEmail)}</span><span class="text-xs text-gray-400"${_scopeId}>ID: #${ssrInterpolate(row.original.userId)} \xB7 ${ssrInterpolate(row.original.userEmail)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("span", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, toDisplayString(row.original.userNickname || row.original.userEmail), 1),
                  createVNode("span", { class: "text-xs text-gray-400" }, "ID: #" + toDisplayString(row.original.userId) + " \xB7 " + toDisplayString(row.original.userEmail), 1)
                ])
              ];
            }
          }),
          "status-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: row.original.status === "approved" ? "success" : row.original.status === "rejected" ? "error" : "warning",
                variant: "subtle"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(row.original.status === "approved" ? "\u5DF2\u901A\u8FC7" : row.original.status === "rejected" ? "\u5DF2\u9A73\u56DE" : "\u5F85\u5BA1\u6838")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(row.original.status === "approved" ? "\u5DF2\u901A\u8FC7" : row.original.status === "rejected" ? "\u5DF2\u9A73\u56DE" : "\u5F85\u5BA1\u6838"), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UBadge, {
                  color: row.original.status === "approved" ? "success" : row.original.status === "rejected" ? "error" : "warning",
                  variant: "subtle"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(row.original.status === "approved" ? "\u5DF2\u901A\u8FC7" : row.original.status === "rejected" ? "\u5DF2\u9A73\u56DE" : "\u5F85\u5BA1\u6838"), 1)
                  ]),
                  _: 2
                }, 1032, ["color"])
              ];
            }
          }),
          "createdAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
              ];
            }
          }),
          "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (row.original.status === "pending") {
                _push2(`<div class="flex items-center gap-1.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "success",
                  variant: "soft",
                  disabled: !unref(hasAdminPerm)("promo:edit"),
                  onClick: ($event) => openAuditModal(row.original, "approve")
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`\u901A\u8FC7`);
                    } else {
                      return [
                        createTextVNode("\u901A\u8FC7")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "error",
                  variant: "soft",
                  disabled: !unref(hasAdminPerm)("promo:edit"),
                  onClick: ($event) => openAuditModal(row.original, "reject")
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`\u9A73\u56DE`);
                    } else {
                      return [
                        createTextVNode("\u9A73\u56DE")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<span class="text-xs text-gray-400"${_scopeId}>${ssrInterpolate(row.original.reviewNote || "-")}</span>`);
              }
            } else {
              return [
                row.original.status === "pending" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-center gap-1.5"
                }, [
                  createVNode(_component_UButton, {
                    size: "xs",
                    color: "success",
                    variant: "soft",
                    disabled: !unref(hasAdminPerm)("promo:edit"),
                    onClick: ($event) => openAuditModal(row.original, "approve")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u901A\u8FC7")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"]),
                  createVNode(_component_UButton, {
                    size: "xs",
                    color: "error",
                    variant: "soft",
                    disabled: !unref(hasAdminPerm)("promo:edit"),
                    onClick: ($event) => openAuditModal(row.original, "reject")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u9A73\u56DE")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])) : (openBlock(), createBlock("span", {
                  key: 1,
                  class: "text-xs text-gray-400"
                }, toDisplayString(row.original.reviewNote || "-"), 1))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else if (activeTab.value === "commissions") {
        _push(`<div class="grid grid-cols-1 xl:grid-cols-2 gap-6 flex-1 min-h-0"><div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 shadow-sm rounded-2xl p-5 flex flex-col min-h-0"><div class="mb-4 shrink-0"><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.promo.commissionsTitle"))}</h2><p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${ssrInterpolate(_ctx.$t("admin.promo.commissionsSubtitle"))}</p></div><div class="flex-1 overflow-auto">`);
        _push(ssrRenderComponent(_component_UTable, {
          columns: commissionColumns.value,
          data: commissions.value,
          loading: unref(overviewPending),
          sticky: ""
        }, {
          "amount-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="font-medium text-emerald-600 dark:text-emerald-400"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(row.original.amount, baseCurrency.value))}</span>`);
            } else {
              return [
                createVNode("span", { class: "font-medium text-emerald-600 dark:text-emerald-400" }, toDisplayString(unref(formatCurrencyAmount)(row.original.amount, baseCurrency.value)), 1)
              ];
            }
          }),
          "createdAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 shadow-sm rounded-2xl p-5 flex flex-col min-h-0"><div class="mb-4 shrink-0"><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.promo.attributionsTitle"))}</h2><p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${ssrInterpolate(_ctx.$t("admin.promo.attributionsSubtitle"))}</p></div><div class="flex-1 overflow-auto">`);
        _push(ssrRenderComponent(_component_UTable, {
          columns: attributionColumns.value,
          data: attributions.value,
          loading: unref(overviewPending),
          sticky: ""
        }, {
          "discountRateSnapshot-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-sm text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(formatDiscount(row.original.discountRateSnapshot))}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-sm text-gray-900 dark:text-white" }, toDisplayString(formatDiscount(row.original.discountRateSnapshot)), 1)
              ];
            }
          }),
          "createdAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else if (activeTab.value === "teams") {
        _push(`<div class="space-y-6 flex-1 min-h-0 flex flex-col"><div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 shadow-sm rounded-2xl p-5 flex flex-col shrink-0"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4"><div><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.promo.teamReportTitle"))}</h2><p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${ssrInterpolate(_ctx.$t("admin.promo.teamReportSubtitle"))}</p></div><div class="flex items-center gap-2"><span class="text-xs text-gray-500">\u9009\u62E9\u603B\u4EE3\u7406\uFF1A</span>`);
        _push(ssrRenderComponent(_component_USelect, {
          modelValue: selectedMasterAgentUserId.value,
          "onUpdate:modelValue": ($event) => selectedMasterAgentUserId.value = $event,
          modelModifiers: { number: true },
          items: masterAgentOptions.value,
          class: "w-64"
        }, null, _parent));
        _push(`</div></div><div class="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-4"><div class="rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 p-4"><div class="text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.promo.teamCount"))}</div><div class="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">${ssrInterpolate(((_b = (_a = unref(teamReport)) == null ? void 0 : _a.summary) == null ? void 0 : _b.teamCount) || 0)}</div></div><div class="rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 p-4"><div class="text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.promo.teamPaidOrders"))}</div><div class="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">${ssrInterpolate(((_d = (_c = unref(teamReport)) == null ? void 0 : _c.summary) == null ? void 0 : _d.paidOrderCount) || 0)}</div></div><div class="rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 p-4"><div class="text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.promo.teamSalesAmount"))}</div><div class="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">${ssrInterpolate(unref(formatCurrencyAmount)((_f = (_e = unref(teamReport)) == null ? void 0 : _e.summary) == null ? void 0 : _f.totalSalesAmount, baseCurrency.value))}</div></div><div class="rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 p-4"><div class="text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.promo.teamCommissionAmount"))}</div><div class="mt-2 text-2xl font-semibold text-emerald-600 dark:text-emerald-400">${ssrInterpolate(unref(formatCurrencyAmount)((_h = (_g = unref(teamReport)) == null ? void 0 : _g.summary) == null ? void 0 : _h.totalCommissionAmount, baseCurrency.value))}</div></div></div><div class="overflow-auto max-h-72">`);
        _push(ssrRenderComponent(_component_UTable, {
          columns: teamReportColumns.value,
          data: ((_i = unref(teamReport)) == null ? void 0 : _i.rows) || [],
          loading: unref(teamReportPending),
          sticky: ""
        }, {
          "totalSalesAmount-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-sm text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(row.original.totalSalesAmount, baseCurrency.value))}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-sm text-gray-900 dark:text-white" }, toDisplayString(unref(formatCurrencyAmount)(row.original.totalSalesAmount, baseCurrency.value)), 1)
              ];
            }
          }),
          "totalCommissionAmount-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-sm text-emerald-600 dark:text-emerald-400"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(row.original.totalCommissionAmount, baseCurrency.value))}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-sm text-emerald-600 dark:text-emerald-400" }, toDisplayString(unref(formatCurrencyAmount)(row.original.totalCommissionAmount, baseCurrency.value)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="grid grid-cols-1 xl:grid-cols-2 gap-6 flex-1 min-h-0"><div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 shadow-sm rounded-2xl p-5 flex flex-col min-h-0"><div class="mb-4 shrink-0"><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.promo.relationsTitle"))}</h2><p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${ssrInterpolate(_ctx.$t("admin.promo.relationsSubtitle"))}</p></div><div class="flex-1 overflow-auto">`);
        _push(ssrRenderComponent(_component_UTable, {
          columns: relationColumns.value,
          data: relations.value,
          loading: unref(relationsPending),
          sticky: ""
        }, {
          "agentUserId-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col"${_scopeId}><span class="text-sm text-gray-900 dark:text-white"${_scopeId}>#${ssrInterpolate(row.original.agentUserId)}</span><span class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(row.original.agentNickname || row.original.agentEmail || "-")}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("span", { class: "text-sm text-gray-900 dark:text-white" }, "#" + toDisplayString(row.original.agentUserId), 1),
                  createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(row.original.agentNickname || row.original.agentEmail || "-"), 1)
                ])
              ];
            }
          }),
          "parentAgentUserId-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(row.original.parentAgentUserId || "-")}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(row.original.parentAgentUserId || "-"), 1)
              ];
            }
          }),
          "masterAgentUserId-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-sm text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(row.original.masterAgentUserId || "-")}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-sm text-gray-900 dark:text-white" }, toDisplayString(row.original.masterAgentUserId || "-"), 1)
              ];
            }
          }),
          "createdAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
              ];
            }
          }),
          "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:arrows-clockwise",
                onClick: ($event) => openRelationModal(row.original),
                disabled: !unref(hasAdminPerm)("promo:edit")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                icon: "ph:trash",
                onClick: ($event) => openRelationDeleteModal(row.original),
                disabled: !unref(hasAdminPerm)("promo:edit")
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-1" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:arrows-clockwise",
                    onClick: ($event) => openRelationModal(row.original),
                    disabled: !unref(hasAdminPerm)("promo:edit")
                  }, null, 8, ["onClick", "disabled"]),
                  createVNode(_component_UButton, {
                    color: "error",
                    variant: "ghost",
                    icon: "ph:trash",
                    onClick: ($event) => openRelationDeleteModal(row.original),
                    disabled: !unref(hasAdminPerm)("promo:edit")
                  }, null, 8, ["onClick", "disabled"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 shadow-sm rounded-2xl p-5 flex flex-col min-h-0"><div class="mb-4 shrink-0"><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.promo.teamOrdersTitle"))}</h2><p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${ssrInterpolate(_ctx.$t("admin.promo.teamOrdersSubtitle"))}</p></div><div class="flex-1 overflow-auto">`);
        _push(ssrRenderComponent(_component_UTable, {
          columns: teamOrderColumns.value,
          data: unref(teamOrders) || [],
          loading: unref(teamOrdersPending),
          sticky: ""
        }, {
          "amount-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(row.original.amount, row.original.currency || baseCurrency.value))}</span>`);
            } else {
              return [
                createVNode("span", { class: "font-medium text-gray-900 dark:text-white" }, toDisplayString(unref(formatCurrencyAmount)(row.original.amount, row.original.currency || baseCurrency.value)), 1)
              ];
            }
          }),
          "createdAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div>`);
      } else if (activeTab.value === "settings") {
        _push(`<div class="space-y-6 flex-1 min-h-0 flex flex-col"><div class="rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm dark:border-gray-800/50 dark:bg-[#121214]"><div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><div><h2 class="text-base font-bold text-gray-900 dark:text-white">\u63A8\u5E7F\u51C6\u5165\u4E0E\u5956\u52B1\u89C4\u5219</h2><p class="mt-1 text-xs text-gray-500">\u914D\u7F6E\u7528\u6237\u83B7\u53D6\u63A8\u5E7F\u6743\u9650\u7684\u95E8\u69DB\u89C4\u5219\u4E0E\u9ED8\u8BA4\u5206\u6DA6\u6BD4\u4F8B\u3002</p></div><div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_UButton, {
          color: "primary",
          class: "bg-purple-600 hover:bg-purple-500 text-white font-semibold",
          loading: savingSettings.value,
          disabled: !unref(hasAdminPerm)("promo:edit"),
          onClick: saveSettings
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("admin.promo.saveSettings"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("admin.promo.saveSettings")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 border-t border-gray-100 dark:border-white/5 pt-4">`);
        _push(ssrRenderComponent(_component_UFormField, { label: "\u51C6\u5165\u6A21\u5F0F" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_USelect, {
                modelValue: settingsForm.promoAccessMode,
                "onUpdate:modelValue": ($event) => settingsForm.promoAccessMode = $event,
                items: promoAccessModeOptions,
                class: "w-full"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_USelect, {
                  modelValue: settingsForm.promoAccessMode,
                  "onUpdate:modelValue": ($event) => settingsForm.promoAccessMode = $event,
                  items: promoAccessModeOptions,
                  class: "w-full"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UFormField, {
          label: "\u6700\u4F4E\u7D2F\u8BA1\u6D88\u8D39 (USD)",
          description: "\u7528\u6237\u7D2F\u8BA1\u6D88\u8D39\u8FBE\u6807\u5373\u53EF\u89E3\u9501"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: settingsForm.promoMinSpendAmount,
                "onUpdate:modelValue": ($event) => settingsForm.promoMinSpendAmount = $event,
                modelModifiers: { number: true },
                type: "number",
                min: "0",
                step: "1",
                class: "w-full",
                disabled: settingsForm.promoAccessMode === "open"
              }, {
                leading: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`$`);
                  } else {
                    return [
                      createTextVNode("$")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UInput, {
                  modelValue: settingsForm.promoMinSpendAmount,
                  "onUpdate:modelValue": ($event) => settingsForm.promoMinSpendAmount = $event,
                  modelModifiers: { number: true },
                  type: "number",
                  min: "0",
                  step: "1",
                  class: "w-full",
                  disabled: settingsForm.promoAccessMode === "open"
                }, {
                  leading: withCtx(() => [
                    createTextVNode("$")
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UFormField, {
          label: "\u9ED8\u8BA4\u63A8\u5E7F\u8FD4\u4F63\u6BD4\u4F8B (%)",
          description: "\u666E\u901A\u7528\u6237\u9080\u8BF7\u94FE\u63A5\u4EA7\u751F\u8BA2\u5355\u65F6\u7684\u63D0\u6210\u6BD4\u4F8B\uFF080 ~ 100%\uFF09"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: settingsForm.promoDefaultCommissionRate,
                "onUpdate:modelValue": ($event) => settingsForm.promoDefaultCommissionRate = $event,
                modelModifiers: { number: true },
                type: "number",
                min: "0",
                max: "100",
                step: "1",
                class: "w-full"
              }, {
                trailing: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`%`);
                  } else {
                    return [
                      createTextVNode("%")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UInput, {
                  modelValue: settingsForm.promoDefaultCommissionRate,
                  "onUpdate:modelValue": ($event) => settingsForm.promoDefaultCommissionRate = $event,
                  modelModifiers: { number: true },
                  type: "number",
                  min: "0",
                  max: "100",
                  step: "1",
                  class: "w-full"
                }, {
                  trailing: withCtx(() => [
                    createTextVNode("%")
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 shadow-sm rounded-2xl p-5 flex flex-col flex-1 min-h-0"><div class="flex items-center justify-between mb-4 shrink-0"><div><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.promo.tiersTitle"))}</h2><p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${ssrInterpolate(_ctx.$t("admin.promo.tiersSubtitle"))}</p></div>`);
        if (unref(hasAdminPerm)("promo:edit")) {
          _push(ssrRenderComponent(_component_UButton, {
            color: "primary",
            variant: "soft",
            icon: "ph:plus-bold",
            onClick: ($event) => openTierModal()
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("admin.promo.addTier"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.promo.addTier")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex-1 overflow-auto">`);
        _push(ssrRenderComponent(_component_UTable, {
          columns: tierColumns.value,
          data: tiers.value,
          loading: unref(tiersPending),
          sticky: ""
        }, {
          "discountRate-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-sm text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(formatDiscount(row.original.discountRate))}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-sm text-gray-900 dark:text-white" }, toDisplayString(formatDiscount(row.original.discountRate)), 1)
              ];
            }
          }),
          "salesThreshold-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(row.original.salesThreshold, baseCurrency.value))}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(formatCurrencyAmount)(row.original.salesThreshold, baseCurrency.value)), 1)
              ];
            }
          }),
          "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:pencil-simple",
                onClick: ($event) => openTierModal(row.original),
                disabled: !unref(hasAdminPerm)("promo:edit")
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:pencil-simple",
                  onClick: ($event) => openTierModal(row.original),
                  disabled: !unref(hasAdminPerm)("promo:edit")
                }, null, 8, ["onClick", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UModal, {
        open: auditModalOpen.value,
        "onUpdate:open": ($event) => auditModalOpen.value = $event,
        ui: { content: "sm:max-w-md" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k, _l, _m, _n;
          if (_push2) {
            _push2(`<div class="p-6 space-y-4"${_scopeId}><h3 class="text-lg font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(auditAction.value === "approve" ? "\u5BA1\u6838\u901A\u8FC7\u5408\u4F19\u4EBA\u7533\u8BF7" : "\u9A73\u56DE\u7533\u8BF7")}</h3><div class="rounded-xl bg-gray-50 p-3 text-xs dark:bg-black/20 text-gray-600 dark:text-gray-300"${_scopeId}><div${_scopeId}><strong${_scopeId}>\u7533\u8BF7\u4EBA\uFF1A</strong> ${ssrInterpolate(((_a2 = currentApplication.value) == null ? void 0 : _a2.userNickname) || ((_b2 = currentApplication.value) == null ? void 0 : _b2.userEmail))} (#${ssrInterpolate((_c2 = currentApplication.value) == null ? void 0 : _c2.userId)})</div><div class="mt-1"${_scopeId}><strong${_scopeId}>\u8054\u7CFB\u65B9\u5F0F\uFF1A</strong> ${ssrInterpolate(((_d2 = currentApplication.value) == null ? void 0 : _d2.contact) || "-")}</div><div class="mt-1"${_scopeId}><strong${_scopeId}>\u63A8\u5E7F\u6E20\u9053\uFF1A</strong> ${ssrInterpolate(((_e2 = currentApplication.value) == null ? void 0 : _e2.channelInfo) || "-")}</div>`);
            if ((_f2 = currentApplication.value) == null ? void 0 : _f2.reason) {
              _push2(`<div class="mt-1"${_scopeId}><strong${_scopeId}>\u7533\u8BF7\u8BF4\u660E\uFF1A</strong> ${ssrInterpolate((_g2 = currentApplication.value) == null ? void 0 : _g2.reason)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u5BA1\u6838\u5907\u6CE8 (\u9009\u586B)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: auditNote.value,
                    "onUpdate:modelValue": ($event) => auditNote.value = $event,
                    placeholder: "\u586B\u5199\u5BA1\u6838\u8BF4\u660E\u6216\u9A73\u56DE\u7406\u7531"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: auditNote.value,
                      "onUpdate:modelValue": ($event) => auditNote.value = $event,
                      placeholder: "\u586B\u5199\u5BA1\u6838\u8BF4\u660E\u6216\u9A73\u56DE\u7406\u7531"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-end gap-2 pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              onClick: ($event) => auditModalOpen.value = false
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
              color: auditAction.value === "approve" ? "success" : "error",
              loading: savingAudit.value,
              disabled: !unref(hasAdminPerm)("promo:edit"),
              onClick: submitAudit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(auditAction.value === "approve" ? "\u786E\u8BA4\u901A\u8FC7" : "\u786E\u8BA4\u9A73\u56DE")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(auditAction.value === "approve" ? "\u786E\u8BA4\u901A\u8FC7" : "\u786E\u8BA4\u9A73\u56DE"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-4" }, [
                createVNode("h3", { class: "text-lg font-bold text-gray-900 dark:text-white" }, toDisplayString(auditAction.value === "approve" ? "\u5BA1\u6838\u901A\u8FC7\u5408\u4F19\u4EBA\u7533\u8BF7" : "\u9A73\u56DE\u7533\u8BF7"), 1),
                createVNode("div", { class: "rounded-xl bg-gray-50 p-3 text-xs dark:bg-black/20 text-gray-600 dark:text-gray-300" }, [
                  createVNode("div", null, [
                    createVNode("strong", null, "\u7533\u8BF7\u4EBA\uFF1A"),
                    createTextVNode(" " + toDisplayString(((_h2 = currentApplication.value) == null ? void 0 : _h2.userNickname) || ((_i2 = currentApplication.value) == null ? void 0 : _i2.userEmail)) + " (#" + toDisplayString((_j = currentApplication.value) == null ? void 0 : _j.userId) + ")", 1)
                  ]),
                  createVNode("div", { class: "mt-1" }, [
                    createVNode("strong", null, "\u8054\u7CFB\u65B9\u5F0F\uFF1A"),
                    createTextVNode(" " + toDisplayString(((_k = currentApplication.value) == null ? void 0 : _k.contact) || "-"), 1)
                  ]),
                  createVNode("div", { class: "mt-1" }, [
                    createVNode("strong", null, "\u63A8\u5E7F\u6E20\u9053\uFF1A"),
                    createTextVNode(" " + toDisplayString(((_l = currentApplication.value) == null ? void 0 : _l.channelInfo) || "-"), 1)
                  ]),
                  ((_m = currentApplication.value) == null ? void 0 : _m.reason) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-1"
                  }, [
                    createVNode("strong", null, "\u7533\u8BF7\u8BF4\u660E\uFF1A"),
                    createTextVNode(" " + toDisplayString((_n = currentApplication.value) == null ? void 0 : _n.reason), 1)
                  ])) : createCommentVNode("", true)
                ]),
                createVNode(_component_UFormField, { label: "\u5BA1\u6838\u5907\u6CE8 (\u9009\u586B)" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: auditNote.value,
                      "onUpdate:modelValue": ($event) => auditNote.value = $event,
                      placeholder: "\u586B\u5199\u5BA1\u6838\u8BF4\u660E\u6216\u9A73\u56DE\u7406\u7531"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    onClick: ($event) => auditModalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: auditAction.value === "approve" ? "success" : "error",
                    loading: savingAudit.value,
                    disabled: !unref(hasAdminPerm)("promo:edit"),
                    onClick: submitAudit
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(auditAction.value === "approve" ? "\u786E\u8BA4\u901A\u8FC7" : "\u786E\u8BA4\u9A73\u56DE"), 1)
                    ]),
                    _: 1
                  }, 8, ["color", "loading", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: agentModalOpen.value,
        "onUpdate:open": ($event) => agentModalOpen.value = $event,
        ui: { content: "sm:max-w-xl" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-4"${_scopeId}><h3 class="text-xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.promo.addAgent"))}</h3>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.promo.agentEmail")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: agentForm.email,
                    "onUpdate:modelValue": ($event) => agentForm.email = $event,
                    type: "email"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: agentForm.email,
                      "onUpdate:modelValue": ($event) => agentForm.email = $event,
                      type: "email"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-2 gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.promo.agentRole")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: agentForm.role,
                    "onUpdate:modelValue": ($event) => agentForm.role = $event,
                    items: roleScopeOptions
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: agentForm.role,
                      "onUpdate:modelValue": ($event) => agentForm.role = $event,
                      items: roleScopeOptions
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.promo.parentMasterAgent")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: agentForm.parentAgentUserId,
                    "onUpdate:modelValue": ($event) => agentForm.parentAgentUserId = $event,
                    modelModifiers: { number: true },
                    items: masterAgentOptions.value,
                    disabled: agentForm.role === "master_agent"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: agentForm.parentAgentUserId,
                      "onUpdate:modelValue": ($event) => agentForm.parentAgentUserId = $event,
                      modelModifiers: { number: true },
                      items: masterAgentOptions.value,
                      disabled: agentForm.role === "master_agent"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end gap-2 pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              onClick: ($event) => agentModalOpen.value = false
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
              loading: savingAgent.value,
              disabled: !unref(hasAdminPerm)("promo:edit"),
              onClick: saveAgent
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.common.save"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.common.save")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-4" }, [
                createVNode("h3", { class: "text-xl font-bold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("admin.promo.addAgent")), 1),
                createVNode(_component_UFormField, {
                  label: _ctx.$t("admin.promo.agentEmail")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: agentForm.email,
                      "onUpdate:modelValue": ($event) => agentForm.email = $event,
                      type: "email"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.promo.agentRole")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: agentForm.role,
                        "onUpdate:modelValue": ($event) => agentForm.role = $event,
                        items: roleScopeOptions
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.promo.parentMasterAgent")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: agentForm.parentAgentUserId,
                        "onUpdate:modelValue": ($event) => agentForm.parentAgentUserId = $event,
                        modelModifiers: { number: true },
                        items: masterAgentOptions.value,
                        disabled: agentForm.role === "master_agent"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    onClick: ($event) => agentModalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    loading: savingAgent.value,
                    disabled: !unref(hasAdminPerm)("promo:edit"),
                    onClick: saveAgent
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.common.save")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: relationModalOpen.value,
        "onUpdate:open": ($event) => relationModalOpen.value = $event,
        ui: { content: "sm:max-w-xl" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-4"${_scopeId}><h3 class="text-xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.promo.editRelation"))}</h3><div class="rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 px-4 py-3 text-sm text-gray-600 dark:text-gray-300"${_scopeId}>${ssrInterpolate(relationForm.agentLabel || "-")}</div>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.promo.parentMasterAgent")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: relationForm.parentAgentUserId,
                    "onUpdate:modelValue": ($event) => relationForm.parentAgentUserId = $event,
                    modelModifiers: { number: true },
                    items: masterAgentOptions.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: relationForm.parentAgentUserId,
                      "onUpdate:modelValue": ($event) => relationForm.parentAgentUserId = $event,
                      modelModifiers: { number: true },
                      items: masterAgentOptions.value
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-end gap-2 pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              onClick: ($event) => relationModalOpen.value = false
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
              loading: savingRelation.value,
              disabled: !unref(hasAdminPerm)("promo:edit"),
              onClick: saveRelation
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.common.save"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.common.save")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-4" }, [
                createVNode("h3", { class: "text-xl font-bold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("admin.promo.editRelation")), 1),
                createVNode("div", { class: "rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 px-4 py-3 text-sm text-gray-600 dark:text-gray-300" }, toDisplayString(relationForm.agentLabel || "-"), 1),
                createVNode(_component_UFormField, {
                  label: _ctx.$t("admin.promo.parentMasterAgent")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_USelect, {
                      modelValue: relationForm.parentAgentUserId,
                      "onUpdate:modelValue": ($event) => relationForm.parentAgentUserId = $event,
                      modelModifiers: { number: true },
                      items: masterAgentOptions.value
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    onClick: ($event) => relationModalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    loading: savingRelation.value,
                    disabled: !unref(hasAdminPerm)("promo:edit"),
                    onClick: saveRelation
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.common.save")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: deleteRelationModalOpen.value,
        "onUpdate:open": ($event) => deleteRelationModalOpen.value = $event,
        ui: { content: "sm:max-w-lg" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2;
          if (_push2) {
            _push2(`<div class="p-6 space-y-4"${_scopeId}><div class="flex items-start gap-3"${_scopeId}><div class="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:warning-circle-fill",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-1"${_scopeId}><h3 class="text-xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.promo.deleteRelationTitle"))}</h3><p class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.promo.deleteRelationDescription"))}</p></div></div><div class="rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 px-4 py-3 text-sm text-gray-600 dark:text-gray-300"${_scopeId}>${ssrInterpolate(((_a2 = relationDeleteTarget.value) == null ? void 0 : _a2.agentNickname) || ((_b2 = relationDeleteTarget.value) == null ? void 0 : _b2.agentEmail) || ((_c2 = relationDeleteTarget.value) == null ? void 0 : _c2.agentUserId) || "-")}</div><div class="flex justify-end gap-2 pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              onClick: ($event) => deleteRelationModalOpen.value = false
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
              color: "error",
              loading: deletingRelation.value,
              disabled: !unref(hasAdminPerm)("promo:edit"),
              onClick: deleteRelation
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.common.delete"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.common.delete")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-4" }, [
                createVNode("div", { class: "flex items-start gap-3" }, [
                  createVNode("div", { class: "w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:warning-circle-fill",
                      class: "w-5 h-5"
                    })
                  ]),
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("h3", { class: "text-xl font-bold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("admin.promo.deleteRelationTitle")), 1),
                    createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(_ctx.$t("admin.promo.deleteRelationDescription")), 1)
                  ])
                ]),
                createVNode("div", { class: "rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 px-4 py-3 text-sm text-gray-600 dark:text-gray-300" }, toDisplayString(((_d2 = relationDeleteTarget.value) == null ? void 0 : _d2.agentNickname) || ((_e2 = relationDeleteTarget.value) == null ? void 0 : _e2.agentEmail) || ((_f2 = relationDeleteTarget.value) == null ? void 0 : _f2.agentUserId) || "-"), 1),
                createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    onClick: ($event) => deleteRelationModalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "error",
                    loading: deletingRelation.value,
                    disabled: !unref(hasAdminPerm)("promo:edit"),
                    onClick: deleteRelation
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.common.delete")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: tierModalOpen.value,
        "onUpdate:open": ($event) => tierModalOpen.value = $event,
        ui: { content: "sm:max-w-xl" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-4"${_scopeId}><h3 class="text-xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(tierForm.id ? _ctx.$t("admin.promo.editTier") : _ctx.$t("admin.promo.addTier"))}</h3><div class="grid grid-cols-2 gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.promo.tierCode")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: tierForm.code,
                    "onUpdate:modelValue": ($event) => tierForm.code = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: tierForm.code,
                      "onUpdate:modelValue": ($event) => tierForm.code = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.promo.tierName")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: tierForm.name,
                    "onUpdate:modelValue": ($event) => tierForm.name = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: tierForm.name,
                      "onUpdate:modelValue": ($event) => tierForm.name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-2 gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.promo.roleScope")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: tierForm.roleScope,
                    "onUpdate:modelValue": ($event) => tierForm.roleScope = $event,
                    items: roleScopeOptions
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: tierForm.roleScope,
                      "onUpdate:modelValue": ($event) => tierForm.roleScope = $event,
                      items: roleScopeOptions
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.promo.level")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: tierForm.level,
                    "onUpdate:modelValue": ($event) => tierForm.level = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "1"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: tierForm.level,
                      "onUpdate:modelValue": ($event) => tierForm.level = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "1"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-2 gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.promo.discountRate")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: tierForm.discountRate,
                    "onUpdate:modelValue": ($event) => tierForm.discountRate = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "0",
                    max: "1",
                    step: "0.01"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: tierForm.discountRate,
                      "onUpdate:modelValue": ($event) => tierForm.discountRate = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "0",
                      max: "1",
                      step: "0.01"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.promo.salesThreshold")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: tierForm.salesThreshold,
                    "onUpdate:modelValue": ($event) => tierForm.salesThreshold = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "0",
                    step: "0.01"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: tierForm.salesThreshold,
                      "onUpdate:modelValue": ($event) => tierForm.salesThreshold = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "0",
                      step: "0.01"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-4"${_scopeId}><label class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_USwitch, {
              modelValue: tierForm.isFixed,
              "onUpdate:modelValue": ($event) => tierForm.isFixed = $event
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("admin.promo.fixedTier"))}</label><label class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_USwitch, {
              modelValue: tierForm.isActive,
              "onUpdate:modelValue": ($event) => tierForm.isActive = $event
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("admin.promo.activeTier"))}</label></div>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.promo.description")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: tierForm.description,
                    "onUpdate:modelValue": ($event) => tierForm.description = $event,
                    rows: 3
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: tierForm.description,
                      "onUpdate:modelValue": ($event) => tierForm.description = $event,
                      rows: 3
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-end gap-2 pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              onClick: ($event) => tierModalOpen.value = false
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
              loading: savingTier.value,
              disabled: !unref(hasAdminPerm)("promo:edit"),
              onClick: saveTier
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.common.save"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.common.save")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-4" }, [
                createVNode("h3", { class: "text-xl font-bold text-gray-900 dark:text-white" }, toDisplayString(tierForm.id ? _ctx.$t("admin.promo.editTier") : _ctx.$t("admin.promo.addTier")), 1),
                createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.promo.tierCode")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: tierForm.code,
                        "onUpdate:modelValue": ($event) => tierForm.code = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.promo.tierName")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: tierForm.name,
                        "onUpdate:modelValue": ($event) => tierForm.name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.promo.roleScope")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: tierForm.roleScope,
                        "onUpdate:modelValue": ($event) => tierForm.roleScope = $event,
                        items: roleScopeOptions
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.promo.level")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: tierForm.level,
                        "onUpdate:modelValue": ($event) => tierForm.level = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        min: "1"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.promo.discountRate")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: tierForm.discountRate,
                        "onUpdate:modelValue": ($event) => tierForm.discountRate = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        min: "0",
                        max: "1",
                        step: "0.01"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_UFormField, {
                    label: _ctx.$t("admin.promo.salesThreshold")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: tierForm.salesThreshold,
                        "onUpdate:modelValue": ($event) => tierForm.salesThreshold = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        min: "0",
                        step: "0.01"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                createVNode("div", { class: "flex items-center gap-4" }, [
                  createVNode("label", { class: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300" }, [
                    createVNode(_component_USwitch, {
                      modelValue: tierForm.isFixed,
                      "onUpdate:modelValue": ($event) => tierForm.isFixed = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createTextVNode(" " + toDisplayString(_ctx.$t("admin.promo.fixedTier")), 1)
                  ]),
                  createVNode("label", { class: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300" }, [
                    createVNode(_component_USwitch, {
                      modelValue: tierForm.isActive,
                      "onUpdate:modelValue": ($event) => tierForm.isActive = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createTextVNode(" " + toDisplayString(_ctx.$t("admin.promo.activeTier")), 1)
                  ])
                ]),
                createVNode(_component_UFormField, {
                  label: _ctx.$t("admin.promo.description")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: tierForm.description,
                      "onUpdate:modelValue": ($event) => tierForm.description = $event,
                      rows: 3
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    onClick: ($event) => tierModalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    loading: savingTier.value,
                    disabled: !unref(hasAdminPerm)("promo:edit"),
                    onClick: saveTier
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.common.save")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/promo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
