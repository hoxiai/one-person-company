-- AINode 钱包模式（APAY_WALLET_BACKEND=ainode）下 user_wallets 归 AINode，充值台账不再绑定钱包。
-- 只放宽约束、不改数据；本地钱包模式照常写入 wallet_id。IF EXISTS：共库站点可能从未建过台账表。
ALTER TABLE IF EXISTS "topups" ALTER COLUMN "wallet_id" DROP NOT NULL;
