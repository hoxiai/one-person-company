import { d as defineEventHandler, r as readBody, g as getQuery, b as db, u as tickets, v as users, w as settings, x as ticketMessages, y as normalizeTicketAttachments } from '../../../../nitro/nitro.mjs';
import { eq, desc, inArray } from 'drizzle-orm';
import 'node:crypto';
import 'zod';
import 'crypto';
import 'fs';
import 'path';
import 'node:fs';
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
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:child_process';

const listHandler = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f;
  const body = await readBody(event).catch(() => ({}));
  const query = getQuery(event);
  const page = Math.max(Number((_b = (_a = body == null ? void 0 : body.page) != null ? _a : query.page) != null ? _b : 1) || 1, 1);
  const limit = Math.min(Math.max(Number((_d = (_c = body == null ? void 0 : body.limit) != null ? _c : query.limit) != null ? _d : 20) || 20, 1), 100);
  const offset = (page - 1) * limit;
  const [rows, siteSettings] = await Promise.all([
    db.select({
      id: tickets.id,
      ticketNo: tickets.ticketNo,
      userId: tickets.userId,
      visitorId: tickets.visitorId,
      contactName: tickets.contactName,
      contactEmail: tickets.contactEmail,
      contactInfo: tickets.contactInfo,
      userEmail: users.email,
      userNickname: users.nickname,
      category: tickets.category,
      title: tickets.title,
      status: tickets.status,
      priority: tickets.priority,
      lastRepliedAt: tickets.lastRepliedAt,
      lastRepliedBy: tickets.lastRepliedBy,
      createdAt: tickets.createdAt
    }).from(tickets).leftJoin(users, eq(tickets.userId, users.id)).orderBy(desc(tickets.lastRepliedAt)).limit(limit).offset(offset),
    db.select({ key: settings.key, value: settings.value }).from(settings).where(inArray(settings.key, ["site_name", "currency"]))
  ]);
  const settingMap = new Map(siteSettings.map((s) => [s.key, s.value]));
  const storeName = String(settingMap.get("site_name") || "APay").trim() || "APay";
  const currency = String(settingMap.get("currency") || "USD").trim().toUpperCase() || "USD";
  const ticketIds = rows.map((r) => r.id).filter(Boolean);
  const latestMsgMap = /* @__PURE__ */ new Map();
  if (ticketIds.length > 0) {
    try {
      const msgRows = await db.select({
        ticketId: ticketMessages.ticketId,
        content: ticketMessages.content,
        attachments: ticketMessages.attachments,
        id: ticketMessages.id
      }).from(ticketMessages).where(inArray(ticketMessages.ticketId, ticketIds)).orderBy(desc(ticketMessages.id));
      for (const m of msgRows) {
        if (!latestMsgMap.has(m.ticketId)) {
          const hasAttachments = Boolean((_e = normalizeTicketAttachments(m.attachments)) == null ? void 0 : _e.length);
          const preview = ((_f = m.content) == null ? void 0 : _f.trim()) || (hasAttachments ? "[\u56FE\u7247\u9644\u4EF6]" : "");
          latestMsgMap.set(m.ticketId, preview);
        }
      }
    } catch {
    }
  }
  const list = rows.map((row) => {
    const isPending = row.status === "open" || row.status === "in_progress";
    const unread = isPending && row.lastRepliedBy === "user" ? 1 : 0;
    const userName = row.contactName || row.userNickname || row.contactEmail || row.userEmail || "";
    const visitorId = row.visitorId || row.ticketNo || `ticket_${row.id}`;
    const lastTime = row.lastRepliedAt || row.createdAt;
    const lastMsgAt = lastTime instanceof Date ? lastTime.toISOString() : String(lastTime || "");
    return {
      id: row.id,
      ticketNo: row.ticketNo,
      userId: row.userId ? String(row.userId) : userName || "0",
      userName,
      visitorId,
      visitorName: userName || visitorId,
      unread,
      lastMsg: latestMsgMap.get(row.id) || row.title,
      lastMsgAt,
      status: row.status,
      category: row.category,
      priority: row.priority,
      storeId: Number((body == null ? void 0 : body.storeId) || 1) || 1,
      storeName,
      currency,
      channel: "apay"
    };
  });
  return {
    code: 200,
    data: {
      list,
      page,
      limit
    }
  };
});

export { listHandler as default };
//# sourceMappingURL=list.post.mjs.map
