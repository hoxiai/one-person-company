-- AINode 钱包模式下充值台账不再绑定钱包：wallet_id 放宽为可空，外键保持不变。
ALTER TABLE `topups` MODIFY `wallet_id` int NULL;
