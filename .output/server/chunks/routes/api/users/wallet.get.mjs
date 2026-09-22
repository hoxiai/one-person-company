import { d as defineEventHandler, c as getRequestLocale, bF as requireUserSession, e as createError, ci as getOrCreateUserWallet, b$ as getTopupRules, b as db, b8 as userWallets, B as topups, cv as TOPUP_STATUS, cw as balanceLogs, b9 as fromScaled } from '../../../nitro/nitro.mjs';
import { eq, sql, and, gte } from 'drizzle-orm';
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

const wallet_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f;
  const locale = getRequestLocale(event);
  const session = await requireUserSession(event);
  if (!((_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id)) {
    throw createError({ statusCode: 401, message: locale === "zh" ? "\u672A\u767B\u5F55" : "Unauthorized" });
  }
  const userId = Number(session.user.id);
  const wallet = await getOrCreateUserWallet(userId);
  const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3);
  const [rules, userRows, creditRows, debitRows, pendingRows] = await Promise.all([
    // 记账币种由钱包接口自己给出:余额的计价单位是钱包自身的属性,
    // 让前端去问「充值配置」要币种,会在充值被关闭时退化成默认 USD,
    // 把人民币余额标上美元符号。
    getTopupRules(),
    db.select({ cash: userWallets.cashBalance, grant: userWallets.grantBalance }).from(userWallets).where(eq(userWallets.id, wallet.id)).limit(1),
    db.select({ total: sql`coalesce(sum(${topups.creditAmountCents}), 0)`, count: sql`count(*)` }).from(topups).where(and(
      eq(topups.walletId, wallet.id),
      eq(topups.status, TOPUP_STATUS.CREDITED),
      gte(topups.creditedAt, since)
    )),
    // 近 30 天出账（amount_cents < 0）
    db.select({ total: sql`coalesce(sum(${balanceLogs.amountCents}), 0)` }).from(balanceLogs).where(and(
      eq(balanceLogs.walletId, wallet.id),
      gte(balanceLogs.createdAt, since),
      sql`${balanceLogs.amountCents} < 0`
    )),
    db.select({
      orderId: topups.orderId,
      amount: topups.paymentAmount,
      currency: topups.paymentCurrency,
      rechargeAmountCents: topups.creditAmountCents,
      createdAt: topups.createdAt
    }).from(topups).where(and(
      eq(topups.userId, userId),
      eq(topups.status, TOPUP_STATUS.PENDING)
    ))
  ]);
  const cash = fromScaled((_b = userRows[0]) == null ? void 0 : _b.cash);
  const grant = fromScaled((_c = userRows[0]) == null ? void 0 : _c.grant);
  const pendingTopups = pendingRows.map((row) => ({
    orderId: String(row.orderId),
    amount: Number(row.amount || 0),
    currency: String(row.currency || "USD"),
    rechargeAmount: fromScaled(row.rechargeAmountCents),
    createdAt: row.createdAt
  }));
  return {
    code: 0,
    data: {
      accountingCurrency: rules.accountingCurrency,
      topupEnabled: rules.enabled,
      cashBalance: cash,
      grantBalance: grant,
      availableBalance: cash + grant,
      monthlyRecharge: fromScaled((_d = creditRows[0]) == null ? void 0 : _d.total),
      monthlyRechargeCount: Number(((_e = creditRows[0]) == null ? void 0 : _e.count) || 0),
      // 出账在流水里是负数，对外给正数更符合「支出」的直觉
      monthlySpend: Math.abs(fromScaled((_f = debitRows[0]) == null ? void 0 : _f.total)),
      pendingRechargeCount: pendingTopups.length,
      pendingRechargeAmount: pendingTopups.reduce((sum, item) => sum + item.rechargeAmount, 0),
      pendingTopups
    }
  };
});

export { wallet_get as default };
