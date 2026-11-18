import { d as defineEventHandler, g as getQuery, v as tickets, w as users, b as db, u as ticketReadColumns, y as ticketMessages, z as normalizeTicketAttachments, A as ticketUnreadCounts, B as serializeTicketReadState } from '../../../nitro/nitro.mjs';
import { eq, or, like, and, desc, count, inArray } from 'drizzle-orm';
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
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
import 'node:child_process';

const index_get = defineEventHandler(async (event) => {
  var _a, _b;
  const query = getQuery(event);
  const page = Math.max(parseInt(query.page) || 1, 1);
  const pageSize = Math.min(Math.max(parseInt(query.pageSize) || 15, 1), 100);
  const offset = (page - 1) * pageSize;
  const status = typeof query.status === "string" && query.status.trim() ? query.status.trim() : "";
  const category = typeof query.category === "string" && query.category.trim() ? query.category.trim() : "";
  const priority = typeof query.priority === "string" && query.priority.trim() ? query.priority.trim() : "";
  const keyword = typeof query.keyword === "string" && query.keyword.trim() ? query.keyword.trim() : "";
  const conditions = [];
  if (status) {
    conditions.push(eq(tickets.status, status));
  }
  if (category) {
    conditions.push(eq(tickets.category, category));
  }
  if (priority) {
    conditions.push(eq(tickets.priority, priority));
  }
  if (keyword) {
    const pattern = `%${keyword}%`;
    conditions.push(
      or(
        like(tickets.ticketNo, pattern),
        like(tickets.title, pattern),
        like(users.email, pattern),
        like(tickets.contactEmail, pattern),
        like(tickets.contactName, pattern),
        like(tickets.contactInfo, pattern)
      )
    );
  }
  const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
  const queryBuilder = db.select({
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
    context: tickets.context,
    lastRepliedAt: tickets.lastRepliedAt,
    lastRepliedBy: tickets.lastRepliedBy,
    createdAt: tickets.createdAt,
    updatedAt: tickets.updatedAt,
    ...ticketReadColumns
  }).from(tickets).leftJoin(users, eq(tickets.userId, users.id)).where(whereClause).orderBy(desc(tickets.lastRepliedAt)).limit(pageSize).offset(offset);
  const [totalResult, list, statusCounts] = await Promise.all([
    db.select({ total: count() }).from(tickets).leftJoin(users, eq(tickets.userId, users.id)).where(whereClause),
    queryBuilder,
    db.select({
      status: tickets.status,
      count: count()
    }).from(tickets).groupBy(tickets.status)
  ]);
  const ticketIds = list.map((item) => item.id).filter(Boolean);
  const latestMsgByTicketId = /* @__PURE__ */ new Map();
  const customerMessageIds = /* @__PURE__ */ new Map();
  if (ticketIds.length > 0) {
    try {
      const msgRows = await db.select({
        ticketId: ticketMessages.ticketId,
        content: ticketMessages.content,
        attachments: ticketMessages.attachments,
        senderType: ticketMessages.senderType,
        id: ticketMessages.id
      }).from(ticketMessages).where(inArray(ticketMessages.ticketId, ticketIds)).orderBy(desc(ticketMessages.id));
      for (const row of msgRows) {
        if (row.senderType === "user" && !customerMessageIds.has(row.ticketId)) customerMessageIds.set(row.ticketId, row.id);
        if (!latestMsgByTicketId.has(row.ticketId)) {
          const hasAttachments = Boolean((_a = normalizeTicketAttachments(row.attachments)) == null ? void 0 : _a.length);
          const preview = String(row.content || "").trim() || (hasAttachments ? "[\u56FE\u7247\u9644\u4EF6]" : "");
          latestMsgByTicketId.set(row.ticketId, {
            content: preview,
            senderType: row.senderType
          });
        }
      }
    } catch {
    }
  }
  const unreadCounts = await ticketUnreadCounts(ticketIds, "admin");
  const enrichedList = list.map((item) => {
    const latest = latestMsgByTicketId.get(item.id);
    const unreadCount = unreadCounts.get(item.id) || 0;
    return {
      ...item,
      lastMessage: (latest == null ? void 0 : latest.content) || item.title,
      lastCustomerMessageId: customerMessageIds.get(item.id) || 0,
      readState: serializeTicketReadState(item),
      unread: unreadCount > 0 ? 1 : 0,
      unreadCount
    };
  });
  const total = Number(((_b = totalResult[0]) == null ? void 0 : _b.total) || 0);
  const summary = {
    all: 0,
    open: 0,
    in_progress: 0,
    auto_resolved: 0,
    resolved: 0,
    closed: 0
  };
  for (const item of statusCounts) {
    const cnt = Number(item.count || 0);
    summary.all += cnt;
    if (item.status in summary) {
      summary[item.status] = cnt;
    }
  }
  return {
    code: 200,
    data: enrichedList,
    summary,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize)
    }
  };
});

export { index_get as default };
//# sourceMappingURL=index.get11.mjs.map
