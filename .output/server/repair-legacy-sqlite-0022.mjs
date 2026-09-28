#!/usr/bin/env node
// One-time handover for the unledgered SQLite schema reported on 2026-09-28.
// Node builds include this file in .output/server/ beside bundled dependencies.
import { createClient } from '@libsql/client'
import { createHash, randomUUID } from 'node:crypto'
import { existsSync, mkdirSync, chmodSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

// Frozen metadata and historical prefix from 32700f4. Later migrations remain
// pending for the normal runner; accepting an appended suffix does not baseline it.
const PROFILE = {
  tables: {
    "access_logs": ["id","path","method","ip","user_agent","referrer","country","region","city","status_code","duration","visitor_id","user_id","created_at"],
    "admin_tokens": ["id","admin_id","token","name","permissions","expires_at","last_used_at","revoked","created_at"],
    "admins": ["id","username","password_hash","permissions","created_at"],
    "balance_logs": ["id","user_id","wallet_id","balance_type","action_type","amount_cents","before_balance_cents","after_balance_cents","event_id","source_type","source_id","operator_admin_id","operator_name","remark","created_at"],
    "cards": ["id","product_id","card_number","is_used","order_id","created_at"],
    "email_logs": ["id","to","subject","template_code","html","provider","status","message_id","error","created_at"],
    "email_providers": ["id","name","code","is_active","config_json","send_script","created_at"],
    "event_rules": ["id","event","action","config","enabled","remark","created_at","updated_at"],
    "logs": ["id","level","message","details","source","created_at"],
    "notifications": ["id","user_id","visitor_id","type","title","message","data","is_read","created_at"],
    "oauth_accounts": ["id","user_id","provider","provider_account_id","created_at"],
    "operation_logs": ["id","actor_type","actor_id","actor_name","action","resource","resource_id","summary","details","path","method","status_code","ip","user_agent","created_at"],
    "orders": ["id","amount","currency","source","external_order_id","product_id","user_id","contact_email","pay_method","trade_no","status","delivery_info","meta_data","visitor_id","subscription_id","created_at","paid_at","pay_status"],
    "payment_failures": ["id","order_id","card_bin","reason","amount","pay_method","contact_email","raw_response","visitor_id","created_at"],
    "payment_methods": ["id","name","code","icon_url","is_active","supported_locales","config_json","info","create","callback","created_at"],
    "posts": ["id","key","sort","slug","title","description","content","type","image_url","views","is_active","meta_data","created_at","updated_at"],
    "products": ["id","slug","name","price","description","content","type","image_url","views","image_urls","resource","is_active","status","meta_data","sort_order","created_at"],
    "promo_agent_relations": ["id","agent_user_id","parent_agent_user_id","master_agent_user_id","depth","status","bound_at","created_at","updated_at"],
    "promo_agent_tiers": ["id","code","name","role_scope","level","discount_rate","sales_threshold","is_fixed","is_active","description","created_at","updated_at"],
    "promo_applications": ["id","user_id","status","channel_info","contact","reason","review_note","reviewed_by_admin_id","reviewed_at","created_at","updated_at"],
    "promo_commissions": ["id","order_id","owner_user_id","owner_promo_member_id","type","source_type","amount","rate","status","remark","meta_data","created_at","updated_at"],
    "promo_invite_relations": ["id","invitee_user_id","inviter_user_id","source","code_snapshot","bound_at","created_at"],
    "promo_members": ["id","user_id","role","status","promo_code","invite_code","agent_code","current_agent_tier_id","joined_at","created_at","updated_at"],
    "promo_order_attributions": ["id","order_id","buyer_user_id","buyer_promo_member_id","invite_user_id","agent_user_id","parent_agent_user_id","master_agent_user_id","agent_tier_id_snapshot","agent_tier_name_snapshot","discount_rate_snapshot","source_type","meta_data","created_at"],
    "settings": ["key","value","description","updated_at"],
    "subscriptions": ["id","gateway_sub_id","user_id","product_id","pay_method","status","interval","interval_count","amount","currency","current_period_start","current_period_end","cancel_at_period_end","meta_data","created_at","updated_at"],
    "ticket_messages": ["id","ticket_id","sender_type","sender_id","sender_name","content","attachments","created_at"],
    "tickets": ["id","ticket_no","user_id","category","title","status","priority","context","last_replied_at","last_replied_by","created_at","updated_at"],
    "topups": ["id","order_id","user_id","wallet_id","source","payment_amount","payment_currency","credit_amount_cents","credit_currency","exchange_rate","balance_type","status","credit_event_id","refund_event_id","retry_count","shortfall_cents","last_error","paid_at","credited_at","refunded_at","created_at","updated_at"],
    "user_sessions": ["id","user_id","session_id_hash","status","auth_method","device_type","browser","os","user_agent","ip","country","region","city","logged_in_at","last_seen_at","ended_at","replaced_by_session_id","created_at"],
    "user_tokens": ["id","user_id","token","name","expires_at","last_used_at","revoked","created_at"],
    "user_wallets": ["id","user_id","cash_balance","grant_balance","sub_balance","points_balance","tier_level","sub_expires_at","status","created_at"],
    "users": ["id","email","password_hash","nickname","avatar_url","last_login_at","current_session_id","status","email_verified_at","created_at"],
    "visitor_events": ["id","visitor_id","ip","user_id","order_id","product_id","event_name","event_action","path","referrer","source_type","source","medium","campaign","content","term","country","region","city","locale","currency","device_type","browser","os","user_agent","created_at"],
    "visitor_profiles": ["visitor_id","user_id","ip","first_seen_at","last_seen_at","landing_path","first_path","last_path","first_referrer","last_referrer","first_source_type","last_source_type","first_source","last_source","first_medium","last_medium","first_campaign","last_campaign","first_content","last_content","first_term","last_term","country","region","city","locale","currency","device_type","browser","os","user_agent","created_at","updated_at"],
    "webhooks": ["id","name","url","events","secret","is_active","created_at"],
  },
  indexes: [
    {"name":"admin_tokens_token_unique","table":"admin_tokens","unique":1,"columns":["token"],"sql":"CREATE UNIQUE INDEX `admin_tokens_token_unique` ON `admin_tokens` (`token`)"},
    {"name":"admins_username_unique","table":"admins","unique":1,"columns":["username"],"sql":"CREATE UNIQUE INDEX `admins_username_unique` ON `admins` (`username`)"},
    {"name":"operation_logs_actor_idx","table":"operation_logs","unique":0,"columns":["actor_id","created_at"],"sql":"CREATE INDEX `operation_logs_actor_idx` ON `operation_logs` (`actor_id`,`created_at`)"},
    {"name":"operation_logs_created_at_idx","table":"operation_logs","unique":0,"columns":["created_at"],"sql":"CREATE INDEX `operation_logs_created_at_idx` ON `operation_logs` (`created_at`)"},
    {"name":"operation_logs_resource_idx","table":"operation_logs","unique":0,"columns":["resource","resource_id"],"sql":"CREATE INDEX `operation_logs_resource_idx` ON `operation_logs` (`resource`,`resource_id`)"},
    {"name":"orders_source_external_order_unique","table":"orders","unique":1,"columns":["source","external_order_id"],"sql":"CREATE UNIQUE INDEX `orders_source_external_order_unique` ON `orders` (`source`,`external_order_id`)"},
    {"name":"posts_slug_unique","table":"posts","unique":1,"columns":["slug"],"sql":"CREATE UNIQUE INDEX `posts_slug_unique` ON `posts` (`slug`)"},
    {"name":"products_slug_unique","table":"products","unique":1,"columns":["slug"],"sql":"CREATE UNIQUE INDEX `products_slug_unique` ON `products` (`slug`)"},
    {"name":"promo_agent_relations_agent_user_id_unique","table":"promo_agent_relations","unique":1,"columns":["agent_user_id"],"sql":"CREATE UNIQUE INDEX `promo_agent_relations_agent_user_id_unique` ON `promo_agent_relations` (`agent_user_id`)"},
    {"name":"promo_agent_tiers_code_unique","table":"promo_agent_tiers","unique":1,"columns":["code"],"sql":"CREATE UNIQUE INDEX `promo_agent_tiers_code_unique` ON `promo_agent_tiers` (`code`)"},
    {"name":"promo_commissions_order_type_idx","table":"promo_commissions","unique":1,"columns":["order_id","type"],"sql":"CREATE UNIQUE INDEX `promo_commissions_order_type_idx` ON `promo_commissions` (`order_id`,`type`)"},
    {"name":"promo_invite_relations_invitee_user_id_unique","table":"promo_invite_relations","unique":1,"columns":["invitee_user_id"],"sql":"CREATE UNIQUE INDEX `promo_invite_relations_invitee_user_id_unique` ON `promo_invite_relations` (`invitee_user_id`)"},
    {"name":"promo_members_agent_code_unique","table":"promo_members","unique":1,"columns":["agent_code"],"sql":"CREATE UNIQUE INDEX `promo_members_agent_code_unique` ON `promo_members` (`agent_code`)"},
    {"name":"promo_members_invite_code_unique","table":"promo_members","unique":1,"columns":["invite_code"],"sql":"CREATE UNIQUE INDEX `promo_members_invite_code_unique` ON `promo_members` (`invite_code`)"},
    {"name":"promo_members_promo_code_unique","table":"promo_members","unique":1,"columns":["promo_code"],"sql":"CREATE UNIQUE INDEX `promo_members_promo_code_unique` ON `promo_members` (`promo_code`)"},
    {"name":"promo_members_user_id_unique","table":"promo_members","unique":1,"columns":["user_id"],"sql":"CREATE UNIQUE INDEX `promo_members_user_id_unique` ON `promo_members` (`user_id`)"},
    {"name":"promo_order_attributions_order_id_unique","table":"promo_order_attributions","unique":1,"columns":["order_id"],"sql":"CREATE UNIQUE INDEX `promo_order_attributions_order_id_unique` ON `promo_order_attributions` (`order_id`)"},
    {"name":"ticket_messages_created_at_idx","table":"ticket_messages","unique":0,"columns":["created_at"],"sql":"CREATE INDEX `ticket_messages_created_at_idx` ON `ticket_messages` (`created_at`)"},
    {"name":"ticket_messages_ticket_id_idx","table":"ticket_messages","unique":0,"columns":["ticket_id"],"sql":"CREATE INDEX `ticket_messages_ticket_id_idx` ON `ticket_messages` (`ticket_id`)"},
    {"name":"tickets_category_idx","table":"tickets","unique":0,"columns":["category"],"sql":"CREATE INDEX `tickets_category_idx` ON `tickets` (`category`)"},
    {"name":"tickets_last_replied_at_idx","table":"tickets","unique":0,"columns":["last_replied_at"],"sql":"CREATE INDEX `tickets_last_replied_at_idx` ON `tickets` (`last_replied_at`)"},
    {"name":"tickets_status_idx","table":"tickets","unique":0,"columns":["status"],"sql":"CREATE INDEX `tickets_status_idx` ON `tickets` (`status`)"},
    {"name":"tickets_ticket_no_unique","table":"tickets","unique":1,"columns":["ticket_no"],"sql":"CREATE UNIQUE INDEX `tickets_ticket_no_unique` ON `tickets` (`ticket_no`)"},
    {"name":"tickets_user_id_idx","table":"tickets","unique":0,"columns":["user_id"],"sql":"CREATE INDEX `tickets_user_id_idx` ON `tickets` (`user_id`)"},
    {"name":"user_sessions_last_seen_idx","table":"user_sessions","unique":0,"columns":["last_seen_at"],"sql":"CREATE INDEX `user_sessions_last_seen_idx` ON `user_sessions` (`last_seen_at`)"},
    {"name":"user_sessions_session_id_hash_unique","table":"user_sessions","unique":1,"columns":["session_id_hash"],"sql":"CREATE UNIQUE INDEX `user_sessions_session_id_hash_unique` ON `user_sessions` (`session_id_hash`)"},
    {"name":"user_sessions_user_status_idx","table":"user_sessions","unique":0,"columns":["user_id","status"],"sql":"CREATE INDEX `user_sessions_user_status_idx` ON `user_sessions` (`user_id`,`status`)"},
    {"name":"user_tokens_token_unique","table":"user_tokens","unique":1,"columns":["token"],"sql":"CREATE UNIQUE INDEX `user_tokens_token_unique` ON `user_tokens` (`token`)"},
    {"name":"user_wallets_user_id_unique","table":"user_wallets","unique":1,"columns":["user_id"],"sql":"CREATE UNIQUE INDEX `user_wallets_user_id_unique` ON `user_wallets` (`user_id`)"},
    {"name":"users_email_unique","table":"users","unique":1,"columns":["email"],"sql":"CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`)"},
  ],
  migrations: [
    ["0000_wild_doctor_strange","b323997e69916f57bebb3ef0bc7108656ce88fbd02b37bdb3bc647238cfa626e"],
    ["0001_brave_longshot","2fddfc5830f4a6d480dc212e05b3e609a05c9b38e520142c25e531baff8c91dc"],
    ["0002_mysterious_snowbird","79bea003b686881bb6a8a859bf406b07ed99745c8dc922097e547afc539f31a8"],
    ["0003_adorable_cargill","0cab61fc20b80b21f9570ca4b5ee460b9d167f28b6cfad6bf3593333e1288b67"],
    ["0004_premium_wildside","ecd191e7eb6f889de497e9c0d98d9d0cbad10427ad7589ffb5d04312039f2c67"],
    ["0005_add_notifications","877044dcbf546d725bb3951b5a87b3dc2490610d2503c8cc71a423bf375636a3"],
    ["0006_add_users_email_verify","c5cbe6156200f8afc1122fc504bb52732e3e99f041e2113cf08d5ea09c5af0ab"],
    ["0007_add_promo","abe21ee5efea2afa8138f96f9135522ba1d7538654dc521f8bf9c54b5fdf4198"],
    ["0008_add_payment_method_locales","bbca0758e1c97486789af48d452251e6af5af57b974c6c67374f5beea9e620e6"],
    ["0009_add_orders_currency","f9326a7968048ae464290104f098fe6b218d78b6577a45558453b5c659251510"],
    ["0010_add_payment_failures","cb80bfd10a0d9db5cc7ab0da35abb0c6560e80326b2978a7b6ead4e701f2fad6"],
    ["0011_add_auth_and_event_rules","0e392c686f25b51f390d0aac3b65612d96710baab5fb59dc810752bd7a44e5cc"],
    ["0012_add_admin_permissions","553b0f486356401f0cf4ddb452f0a2b2344cc0b3a856a0ab024062ce20110210"],
    ["0013_add_operation_logs","70e73faf6a0204c81e0932f0ad3183c18e42f01b4d127ddd894da3f86265c652"],
    ["0014_add_admin_tokens","9056aeda1d88de5513b1ec27610b57a49278b88f2b68d7c90c2302c7045cdd22"],
    ["0015_add_balance_logs","5bdcf9e0278d0590cbfbe10797a0f37085360767809caf1e21ddef2cb9d3a097"],
    ["0016_add_order_source_idempotency","5b6d8245dde40455d8ea45f5f4c63255f822225502519bd2f81095e11b5bbec7"],
    ["0017_add_user_sessions","acb58067f2d1bd4d6fd31606cfe9d52afc2812909698afed36cae7a3432a3f1a"],
    ["0018_add_user_wallets","3dace91d66c61568fbb7acd97883e808ea67faf48aef57af8d8bef8091ae0ce7"],
    ["0019_add_topups","e6edddd2ca61fe66ace7d82fd1169c14bca4f6cdf41a9f0db5aef42896fc5240"],
    ["0020_add_email_logs","22bd6f6d03b9cd6f289630d9751d27ddded427a7c9a4a5029b510ecc8fa28bcf"],
    ["0021_add_products_status","e10c06129d7a39c3c555e7d69b356a60fb948d34ce5cd62f968acfd943902047"],
    ["0022_add_promo_applications_and_tickets","4575cbfced7d9fc94d00e419eaceb5f73a69c75fecf61197c4caafb88c8e9f80"],
    ["0023_purge_legacy_password_reset_tokens","e12b640fb1dca7fa5193448afd0a6aeac82b0bd2e2ea51e17f566a39b4336630"],
    ["0024_topups_wallet_optional","ad9b448c122158158d121999a32816263a5b4ab4adf8e218c14d109f723df8d5"],
    ["0025_add_comments","196d58b2a9b537c1a49498d55674460b266b9950cc6bb8e98e6e9c786f35750f"],
    ["0026_verify_schema_alignment","345cf3530c6fbf4d5790e5a297ad25651f35dd227820cf04b1cebe187cfc4c3c"],
  ],
  balanceTable: "CREATE TABLE `__apay_repair_balance_logs_0022` (\n  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,\n  `user_id` integer NOT NULL,\n  `wallet_id` integer NOT NULL,\n  `balance_type` text NOT NULL,\n  `action_type` text DEFAULT 'topup' NOT NULL,\n  `amount_cents` integer NOT NULL,\n  `before_balance_cents` integer NOT NULL,\n  `after_balance_cents` integer NOT NULL,\n  `event_id` text NOT NULL,\n  `source_type` text DEFAULT 'system' NOT NULL,\n  `source_id` text,\n  `operator_admin_id` integer,\n  `operator_name` text DEFAULT '' NOT NULL,\n  `remark` text DEFAULT '' NOT NULL,\n  `created_at` integer DEFAULT (unixepoch()) NOT NULL,\n  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,\n  FOREIGN KEY (`wallet_id`) REFERENCES `user_wallets`(`id`) ON UPDATE no action ON DELETE no action\n);"
}
const identifier = value => '"' + value.replaceAll('"', '""') + '"'
const count = async (db, sql) => Number((await db.execute(sql)).rows[0].n)
const columns = async (db, table) => (await db.execute({
  sql: 'SELECT name,type,"notnull",pk FROM pragma_table_info(?)', args: [table]
})).rows
const fail = message => { throw new Error(message) }

function argumentsOf(argv) {
  let database = resolve('.data/db/sqlite.db')
  let mode = 'check'
  const seen = new Set()
  for (let i = 0; i < argv.length; i++) {
    const option = argv[i]
    if (!['--database', '--check', '--apply', '--help'].includes(option) || seen.has(option)) fail('Unknown or repeated option: ' + option)
    seen.add(option)
    if (option === '--database') {
      if (!argv[i + 1] || argv[i + 1].startsWith('--')) fail('--database requires a path')
      database = resolve(argv[++i])
    } else if (option === '--help') {
      console.log('Usage: node repair-legacy-sqlite-0022.mjs [--database path] [--check | --apply]')
      console.log('Default: read-only check. --apply backs up and repairs; it does not record a migration baseline.')
      return null
    } else mode = option.slice(2)
  }
  if (seen.has('--check') && seen.has('--apply')) fail('Choose --check or --apply')
  if (!existsSync(database)) fail('Database does not exist: ' + database)
  return { database, mode }
}

function checkConnection(database) {
  const dialect = (process.env.DB_DIALECT || '').replaceAll('"', '').trim()
  if (dialect && dialect !== 'sqlite') fail('DB_DIALECT is not sqlite; do not repair this file')
  const walletBackend = (process.env.APAY_WALLET_BACKEND || 'local').trim()
  if (walletBackend !== 'local') fail('APAY_WALLET_BACKEND is not local; wallet table ownership requires a separate reviewed handover')
  for (const key of ['DATABASE_URL', 'POSTGRES_URL', 'POSTGRESQL_URL', 'MYSQL_URL', 'NUXT_DATABASE_URL', 'LIBSQL_URL']) {
    const url = (process.env[key] || '').replaceAll('"', '').trim()
    if (!url) continue
    if (!url.startsWith('file:') || resolve(url.slice(5)) !== database) fail(key + ' targets a different database; confirm the application connection first')
  }
}

function checkArtifact(database) {
  const bundle = resolve('.output/server/chunks/nitro/nitro.mjs')
  if (!existsSync(bundle)) fail('Run from the application root containing .output/')
  const prefix = 'const bundledSources = '
  const line = readFileSync(bundle, 'utf8').split('\n').find(value => value.startsWith(prefix))
  if (!line || !line.endsWith(';')) fail('Unrecognized migration bundle; cannot verify the historical SQLite migrations')
  const sources = JSON.parse(line.slice(prefix.length, -1))
  const core = sources.find(source => source.id === 'core')
  const files = core?.files?.sqlite || []
  const historical = files.slice(0, PROFILE.migrations.length)
  const hashes = historical.map(file => [file.name, createHash('sha256').update(file.sql.replace(/\r\n/g, '\n')).digest('hex')])
  if (core?.kind !== 'versioned' || JSON.stringify(hashes) !== JSON.stringify(PROFILE.migrations)) fail('SQLite migrations differ from the verified historical prefix; recheck the handover before repairing')
  let previousVersion = Number(PROFILE.migrations.at(-1)[0].split('_')[0])
  for (const file of files.slice(PROFILE.migrations.length)) {
    const match = typeof file.name === 'string' && file.name.match(/^([0-9]+)_[A-Za-z0-9_]+$/)
    const version = match ? Number(match[1]) : NaN
    if (!Number.isSafeInteger(version) || version <= previousVersion || typeof file.sql !== 'string' || !file.sql.trim()) fail('Additional SQLite migrations must be appended in increasing version order')
    previousVersion = version
  }
  if (database !== resolve('.data/db/sqlite.db') && !process.env.LIBSQL_URL) fail('A custom --database requires matching LIBSQL_URL so the subsequent migration uses the same file')
  return files.length
}

async function inspect(db) {
  const tables = (await db.execute("SELECT name FROM sqlite_master WHERE type='table'")).rows.map(row => row.name)
  if (tables.includes('apay_schema_migrations') && await count(db, "SELECT count(*) n FROM apay_schema_migrations WHERE source='core'")) fail('Core already has migration records; this first-handover repair must not change it')
  if (tables.includes('__apay_repair_balance_logs_0022')) fail('An unexpected repair table exists; inspect it before continuing')
  const metadata = {}
  for (const [table, expected] of Object.entries(PROFILE.tables)) {
    if (!tables.includes(table)) fail('Missing table: ' + table)
    metadata[table] = await columns(db, table)
    const names = metadata[table].map(column => column.name)
    for (const name of expected) {
      if (!names.includes(name) && !(table === 'visitor_profiles' && name === 'ip') && !(table === 'balance_logs' && name === 'wallet_id')) fail('Unsupported missing column: ' + table + '.' + name)
    }
    if (table === 'balance_logs' && names.some(name => !expected.includes(name))) fail('balance_logs has additional columns; automatic rebuild would lose them')
  }
  const addIp = !metadata.visitor_profiles.some(column => column.name === 'ip')
  const rebuildLogs = !metadata.balance_logs.some(column => column.name === 'wallet_id')
  if (metadata.balance_logs.some(column => column.name === 'wallet_id' && !column.notnull)) fail('An existing nullable balance_logs.wallet_id requires a separate review')
  if (await count(db, 'SELECT count(*) n FROM (SELECT user_id FROM user_wallets GROUP BY user_id HAVING count(*)>1)')) fail('Multiple wallets belong to one user; wallet mapping is ambiguous')
  if (await count(db, 'SELECT count(*) n FROM balance_logs l LEFT JOIN user_wallets w ON w.user_id=l.user_id WHERE w.id IS NULL')) fail('Some balance logs have no matching wallet; do not guess or discard these records')
  if (!rebuildLogs && await count(db, 'SELECT count(*) n FROM balance_logs l LEFT JOIN user_wallets w ON w.id=l.wallet_id AND w.user_id=l.user_id WHERE w.id IS NULL')) fail('Existing balance log wallet mappings are invalid')
  if (await count(db, 'SELECT count(*) n FROM topups t LEFT JOIN user_wallets w ON w.id=t.wallet_id AND w.user_id=t.user_id WHERE t.wallet_id IS NOT NULL AND w.id IS NULL')) fail('Some topups have invalid wallet mappings')
  const oldMoneyColumns = ['cash_balance', 'grant_balance', 'sub_balance', 'tier_level'].filter(name => metadata.users.some(column => column.name === name))
  if (oldMoneyColumns.length) {
    const predicate = oldMoneyColumns.map(name => 'coalesce(u.' + identifier(name) + ',0)<>0').join(' OR ')
    if (await count(db, 'SELECT count(*) n FROM users u LEFT JOIN user_wallets w ON w.user_id=u.id WHERE w.id IS NULL AND (' + predicate + ')')) fail('Users have legacy balances or tiers but no wallet; review balance ownership before baselining')
  }
  if ((await db.execute('PRAGMA foreign_key_check')).rows.length) fail('Existing foreign-key violations require review before rebuilding tables')
  const objects = (await db.execute("SELECT type,name,tbl_name,sql FROM sqlite_master WHERE type IN ('index','trigger','view') AND sql IS NOT NULL")).rows
  if (objects.some(row => row.type === 'view' && (/\btopups\b/i.test(row.sql) || (rebuildLogs && /\bbalance_logs\b/i.test(row.sql))))) fail('A view depends on a table being rebuilt; use a reviewed manual repair')
  for (const table of tables) {
    const keys = (await db.execute({ sql: 'SELECT * FROM pragma_foreign_key_list(?)', args: [table] })).rows
    if (keys.some(key => key.table === 'topups' || (rebuildLogs && key.table === 'balance_logs'))) fail(table + ' references a table being rebuilt; automatic handover is unsafe')
  }
  // Migration 0024 rebuilds topups and only restores its standard indexes.
  const allowedTopupIndexes = new Set(['idx_topups_user_created_at', 'idx_topups_status_updated_at', 'topups_order_id_unique', 'topups_credit_event_id_unique', 'topups_refund_event_id_unique'])
  if (objects.some(row => row.tbl_name === 'topups' && (row.type === 'trigger' || !allowedTopupIndexes.has(row.name)))) fail('topups has custom objects which migration 0024 would remove; review them first')
  for (const name of ['order_id', 'credit_event_id', 'refund_event_id']) {
    const field = identifier(name)
    if (await count(db, 'SELECT count(*) n FROM (SELECT ' + field + ' FROM topups WHERE ' + field + ' IS NOT NULL GROUP BY ' + field + ' HAVING count(*)>1)')) fail('Duplicate topups.' + name + ' would block migration 0024')
  }
  const balanceIndexes = [
    { name: 'balance_logs_event_id_unique', unique: 1, columns: ['event_id'] },
    { name: 'idx_balance_logs_user_created_at', unique: 0, columns: ['user_id', 'created_at'] },
    { name: 'idx_balance_logs_wallet_created_at', unique: 0, columns: ['wallet_id', 'created_at'] }
  ]
  const actualBalanceIndexes = (await db.execute("SELECT * FROM pragma_index_list('balance_logs')")).rows
  const balanceIndexRepairs = []
  for (const spec of balanceIndexes) {
    const actual = actualBalanceIndexes.find(index => index.name === spec.name)
    if (actual) {
      const fields = (await db.execute({ sql: 'SELECT name FROM pragma_index_info(?) ORDER BY seqno', args: [actual.name] })).rows.map(row => row.name)
      if (Number(actual.unique) !== spec.unique || Number(actual.partial) || JSON.stringify(fields) !== JSON.stringify(spec.columns)) fail('Index definition differs: ' + spec.name)
    } else if (!rebuildLogs) {
      balanceIndexRepairs.push('CREATE ' + (spec.unique ? 'UNIQUE ' : '') + 'INDEX ' + identifier(spec.name) + ' ON balance_logs(' + spec.columns.map(identifier).join(',') + ')')
    }
  }
  if (await count(db, 'SELECT count(*) n FROM (SELECT event_id FROM balance_logs GROUP BY event_id HAVING count(*)>1)')) fail('Duplicate balance log event IDs prevent a safe handover')
  const indexes = [...balanceIndexRepairs]
  for (const spec of PROFILE.indexes) {
    const actual = (await db.execute({ sql: 'SELECT * FROM pragma_index_list(?)', args: [spec.table] })).rows
    let equivalent = false
    for (const index of actual) {
      const fields = (await db.execute({ sql: 'SELECT name FROM pragma_index_info(?) ORDER BY seqno', args: [index.name] })).rows.map(row => row.name)
      const same = Number(index.unique) === spec.unique && !Number(index.partial) && JSON.stringify(fields) === JSON.stringify(spec.columns)
      if (index.name === spec.name && !same) fail('Index definition differs: ' + spec.name)
      if (same) equivalent = true
    }
    if (!equivalent) {
      if (spec.unique) {
        const fields = spec.columns.map(identifier)
        const nonNull = fields.map(name => name + ' IS NOT NULL').join(' AND ')
        if (await count(db, 'SELECT count(*) n FROM (SELECT ' + fields.join(',') + ' FROM ' + identifier(spec.table) + ' WHERE ' + nonNull + ' GROUP BY ' + fields.join(',') + ' HAVING count(*)>1)')) fail('Duplicate values prevent unique index: ' + spec.name)
      }
      indexes.push(spec.sql)
    }
  }
  return { addIp, rebuildLogs, indexes, objects, logs: await count(db, 'SELECT count(*) n FROM balance_logs') }
}

async function repair(db, plan) {
  if (plan.addIp) await db.execute('ALTER TABLE visitor_profiles ADD COLUMN ip TEXT')
  if (plan.rebuildLogs) {
    const previousSequence = (await db.execute("SELECT seq FROM sqlite_sequence WHERE name='balance_logs'")).rows[0]?.seq
    await db.executeMultiple(PROFILE.balanceTable)
    const common = PROFILE.tables.balance_logs.filter(name => name !== 'wallet_id')
    const fields = common.map(identifier).join(',')
    const sourceFields = common.map(name => 'l.' + identifier(name)).join(',')
    await db.execute('INSERT INTO __apay_repair_balance_logs_0022 (' + fields + ',wallet_id) SELECT ' + sourceFields + ',w.id FROM balance_logs l JOIN user_wallets w ON w.user_id=l.user_id')
    if (await count(db, 'SELECT count(*) n FROM __apay_repair_balance_logs_0022') !== plan.logs) fail('Balance log row count changed; rolling back')
    if (await count(db, 'SELECT count(*) n FROM (SELECT ' + fields + ' FROM balance_logs EXCEPT SELECT ' + fields + ' FROM __apay_repair_balance_logs_0022)')) fail('Balance log contents differ; rolling back')
    await db.execute('DROP TABLE balance_logs')
    await db.execute('ALTER TABLE __apay_repair_balance_logs_0022 RENAME TO balance_logs')
    if (previousSequence !== undefined) await db.execute({ sql: "UPDATE sqlite_sequence SET seq=max(seq,?) WHERE name='balance_logs'", args: [previousSequence] })
    for (const object of plan.objects.filter(row => row.tbl_name === 'balance_logs')) await db.executeMultiple(object.sql)
    await db.execute('CREATE UNIQUE INDEX IF NOT EXISTS balance_logs_event_id_unique ON balance_logs(event_id)')
    await db.execute('CREATE INDEX IF NOT EXISTS idx_balance_logs_user_created_at ON balance_logs(user_id,created_at)')
    await db.execute('CREATE INDEX IF NOT EXISTS idx_balance_logs_wallet_created_at ON balance_logs(wallet_id,created_at)')
  }
  for (const sql of plan.indexes) await db.execute(sql)
  if ((await db.execute('PRAGMA foreign_key_check')).rows.length) fail('Foreign-key check failed; rolling back')
  const after = await inspect(db)
  if (after.addIp || after.rebuildLogs || after.indexes.length) fail('Repair is incomplete; rolling back')
}

async function main() {
  const args = argumentsOf(process.argv.slice(2))
  if (!args) return
  checkConnection(args.database)
  const migrationCount = checkArtifact(args.database)
  const db = createClient({ url: 'file:' + args.database })
  try {
    await db.execute('PRAGMA query_only=ON')
    const plan = await inspect(db)
    console.log('Database: ' + args.database)
    console.log('Artifact: ' + migrationCount + ' SQLite migrations; historical 0000 through 0026 checksums verified')
    console.log('Plan: visitor_profiles.ip=' + (plan.addIp ? 'add' : 'present') + ', balance_logs=' + (plan.rebuildLogs ? 'rebuild and map ' + plan.logs + ' rows' : 'ready') + ', missing indexes=' + plan.indexes.length)
    if (args.mode === 'check') {
      console.log('CHECK PASSED; no database changes. Use --apply in a maintenance window to back up and repair.')
      return
    }
    if (!plan.addIp && !plan.rebuildLogs && !plan.indexes.length) {
      console.log('REPAIR READY; no changes needed. Next: APAY_DB_BASELINE=core@0022 with APAY_MIGRATE_ONLY=1.')
      return
    }
    await db.execute('PRAGMA query_only=OFF')
    await db.execute('PRAGMA foreign_keys=ON')
    await db.execute('PRAGMA busy_timeout=5000')
    const backupDir = resolve(dirname(args.database), 'migration-backups')
    mkdirSync(backupDir, { recursive: true, mode: 0o700 })
    const backup = resolve(backupDir, 'legacy-0022-' + Date.now() + '-' + randomUUID() + '.db')
    await db.execute({ sql: 'VACUUM INTO ?', args: [backup] })
    chmodSync(backup, 0o600)
    console.log('Backup: ' + backup)
    const tx = await db.transaction('write')
    try {
      await repair(tx, await inspect(tx))
      await tx.commit()
    } catch (error) {
      await tx.rollback()
      throw error
    } finally { tx.close() }
    console.log('REPAIR READY. Next: APAY_DB_BASELINE=core@0022 with APAY_MIGRATE_ONLY=1; this executes all migrations after 0022.')
  } finally { db.close() }
}

main().catch(error => {
  console.error('REPAIR STOPPED: ' + error.message)
  process.exitCode = 1
})
