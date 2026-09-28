import { cp, mkdir, readdir, readFile, writeFile, stat, lstat, realpath, symlink, rename, unlink, rm, rmdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { randomUUID } from 'node:crypto'
import { spawn } from 'node:child_process'

const assetLedger = '.apay-release-assets.json'
const canonicalPath = async value => realpath(value).catch(async error => {
  if (error.code !== 'ENOENT') throw error
  const parent = path.dirname(value)
  if (parent === value) throw error
  return path.join(await canonicalPath(parent), path.basename(value))
})
const exists = async file => stat(file).then(() => true, error => {
  if (error.code === 'ENOENT') return false
  throw error
})
const files = async (directory, prefix = '') => {
  if (!await exists(directory)) return []
  const result = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = path.posix.join(prefix, entry.name)
    if (entry.isDirectory()) result.push(...await files(path.join(directory, entry.name), relative))
    else if (entry.isFile()) result.push(relative)
    else throw new Error(`Unsupported asset entry: ${relative}`)
  }
  return result
}

/** Stage an immutable artifact; never overwrites an existing release or state. */
export async function prepareRelease(options) {
  const artifact = await realpath(options.artifact)
  const release = await canonicalPath(path.resolve(options.release))
  const retainDays = Number(options.retainDays ?? 7)
  if (!Number.isFinite(retainDays) || retainDays <= 0) throw new Error('retain-days must be positive')
  if (release === artifact || artifact.startsWith(`${release}${path.sep}`)
    || release.startsWith(`${artifact}${path.sep}`)) throw new Error('Artifact and release must be separate directories')
  if (await exists(release)) throw new Error('Release already exists; use a new release ID')
  if (!await exists(path.join(artifact, '.output/server/index.mjs'))) throw new Error('Artifact has no Nitro server entry')
  if (!options.dataDir || !options.uploadsDir) throw new Error('Specify shared data-dir and uploads-dir; never create per-release state')
  const previous = options.previous && await exists(options.previous) ? await realpath(options.previous) : null
  const now = Date.now()
  const ledger = {}
  await mkdir(path.dirname(release), { recursive: true })
  await mkdir(release)
  try {
    await cp(path.join(artifact, '.output'), path.join(release, '.output'), { recursive: true })
    // Runtime resources are artifact-owned; live uploads and SQLite/blob state
    // are linked separately. No source checkout, .git or secrets are copied.
    for (const name of ['resource', 'payments', 'release.json']) {
      if (await exists(path.join(artifact, name))) {
        await cp(path.join(artifact, name), path.join(release, name), { recursive: true })
      }
    }
    const assets = path.join(release, '.output/public/_nuxt')
    for (const file of await files(assets)) ledger[file] = now
    if (previous) {
      const oldAssets = path.join(previous, '.output/public/_nuxt')
      const oldFiles = await files(oldAssets)
      let oldLedger = null
      if (await exists(path.join(previous, assetLedger))) {
        oldLedger = JSON.parse(await readFile(path.join(previous, assetLedger), 'utf8'))
        if (!oldLedger || typeof oldLedger !== 'object' || Array.isArray(oldLedger)) throw new Error('Invalid previous asset ledger')
      }
      for (const file of oldFiles) {
        if (file === 'builds/latest.json') continue
        const lastUsed = oldLedger ? Number(oldLedger[file]) : now
        if (!Number.isFinite(lastUsed) || lastUsed < now - retainDays * 86400000) continue
        const target = path.join(assets, file)
        if (await exists(target)) {
          const [oldBytes, newBytes] = await Promise.all([
            readFile(path.join(oldAssets, file)), readFile(target),
          ])
          if (!oldBytes.equals(newBytes)) throw new Error(`Asset path changed content: ${file}`)
        } else {
          await mkdir(path.dirname(target), { recursive: true })
          await cp(path.join(oldAssets, file), target)
          ledger[file] = lastUsed
        }
      }
    }
    for (const [name, directory] of [['.data', options.dataDir], ['uploads', options.uploadsDir]]) {
      const target = await canonicalPath(path.resolve(directory))
      if (target === release || target.startsWith(`${release}${path.sep}`)) throw new Error('Shared state must live outside the release')
      await mkdir(target, { recursive: true })
      await symlink(await realpath(target), path.join(release, name), 'dir')
    }
    if (options.envFile) await symlink(await realpath(options.envFile), path.join(release, '.env'))
    await writeFile(path.join(release, assetLedger), `${JSON.stringify(ledger, null, 2)}\n`)
    return release
  } catch (error) {
    // This function exclusively created this directory, never the live one.
    await rm(release, { recursive: true, force: true })
    throw error
  }
}

const run = (command, args, cwd, env) => new Promise((resolve, reject) => {
  const child = spawn(command, args, { cwd, env, stdio: 'inherit' })
  child.once('error', reject)
  child.once('exit', (code, signal) => code === 0 ? resolve() : reject(new Error(`${command} failed (${signal || code})`)))
})
const pointTo = async (current, target) => {
  const temporary = `${current}.next-${randomUUID()}`
  await symlink(target, temporary, 'dir')
  try { await rename(temporary, current) }
  finally { await unlink(temporary).catch(error => { if (error.code !== 'ENOENT') throw error }) }
}

/** Migration precedes the atomic pointer switch. Failed health rolls it back. */
async function activateUnlocked(options) {
  const release = await realpath(options.release)
  const requestedCurrent = path.resolve(options.current)
  const current = path.join(await canonicalPath(path.dirname(requestedCurrent)), path.basename(requestedCurrent))
  if (current === release || current.startsWith(`${release}${path.sep}`)) throw new Error('current must be outside the release')
  const url = new URL(options.healthUrl)
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) throw new Error('Invalid health URL')
  if (!Array.isArray(options.restart) || !options.restart[0] || !options.restart.every(value => typeof value === 'string')) {
    throw new Error('Provide the service-manager restart command after --')
  }
  const timeout = Number(options.healthTimeout ?? 30000)
  if (!Number.isFinite(timeout) || timeout <= 0) throw new Error('Invalid health timeout')
  let previous = null
  try {
    if (!(await lstat(current)).isSymbolicLink()) throw new Error('current must be a symlink; do not overwrite a live directory')
    previous = await realpath(current)
  } catch (error) { if (error.code !== 'ENOENT') throw error }
  const latest = JSON.parse(await readFile(path.join(release, '.output/public/_nuxt/builds/latest.json'), 'utf8'))
  if (typeof latest.id !== 'string' || !latest.id) throw new Error('Release has no build ID')
  const environment = { ...process.env, APAY_DB_MIGRATE: 'check' }
  delete environment.APAY_MIGRATE_ONLY
  const nodeArgs = await exists(path.join(release, '.env')) ? ['--env-file=.env'] : []
  await run(process.execPath, [...nodeArgs, '.output/server/index.mjs'], release, { ...environment, APAY_MIGRATE_ONLY: '1' })
  await mkdir(path.dirname(current), { recursive: true })
  await pointTo(current, release)
  try {
    await run(options.restart[0], options.restart.slice(1), release, environment)
    const deadline = Date.now() + timeout
    do {
      const response = await fetch(url, { signal: AbortSignal.timeout(Math.min(3000, Math.max(1, deadline - Date.now()))), redirect: 'error' }).catch(() => null)
      if (response?.ok && response.headers.get('x-apay-build-id') === latest.id) {
        await response.body?.cancel()
        return { release, previous }
      }
      await response?.body?.cancel()
      if (Date.now() < deadline) await new Promise(resolve => setTimeout(resolve, Math.min(500, deadline - Date.now())))
    } while (Date.now() < deadline)
    throw new Error('Health check did not reach the new build')
  } catch (error) {
    if (previous) {
      await pointTo(current, previous)
      await run(options.restart[0], options.restart.slice(1), previous, environment)
    } else {
      await unlink(current)
    }
    throw error
  }
}

async function withReleaseLock(current, operation) {
  const lock = `${path.resolve(current)}.deploy-lock`
  await mkdir(path.dirname(lock), { recursive: true })
  await mkdir(lock).catch(error => {
    if (error.code === 'EEXIST') throw new Error('Another deployment holds the release lock')
    throw error
  })
  try { return await operation() }
  finally { await rmdir(lock) }
}

export const activateRelease = options => withReleaseLock(options.current, () => activateUnlocked(options))

async function cli() {
  const argv = process.argv.slice(2)
  const delimiter = argv.indexOf('--')
  const restart = delimiter < 0 ? [] : argv.splice(delimiter + 1)
  if (delimiter >= 0) argv.pop()
  const values = {}
  const names = new Set(['artifact', 'release', 'previous', 'data-dir', 'uploads-dir', 'env-file', 'retain-days', 'current', 'health-url', 'health-timeout'])
  for (let i = 0; i < argv.length; i += 2) {
    const key = argv[i].replace(/^--/, '')
    if (!argv[i].startsWith('--') || !names.has(key) || key in values || !argv[i + 1] || argv[i + 1].startsWith('--')) throw new Error(`Invalid option: ${argv[i]}`)
    values[key] = argv[i + 1]
  }
  if (!values.artifact || !values.release) throw new Error('Required: --artifact --release --data-dir --uploads-dir')
  if (values.current && (!values['health-url'] || !restart.length)) throw new Error('Activation requires --health-url and -- <restart command>')
  const deploy = async () => {
    const release = await prepareRelease({
      artifact: values.artifact, release: values.release,
      previous: values.previous || values.current,
      dataDir: values['data-dir'], uploadsDir: values['uploads-dir'], envFile: values['env-file'],
      retainDays: values['retain-days'],
    })
    if (values.current) await activateUnlocked({ release, current: values.current, restart, healthUrl: values['health-url'], healthTimeout: values['health-timeout'] })
    console.log(`[release] ${values.current ? 'activated' : 'prepared'} ${release}`)
  }
  if (values.current) await withReleaseLock(values.current, deploy)
  else await deploy()
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  cli().catch(error => { console.error(`[release] ${error.message}`); process.exitCode = 1 })
}
