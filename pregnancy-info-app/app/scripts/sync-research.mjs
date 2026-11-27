/**
 * Sync stage-09/10 research JSON into the app data package.
 * Does not promote clinical publication; preserves draft + hold metadata.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const appRoot = path.resolve(__dirname, '..')
const researchRoot = path.resolve(appRoot, '..', 'research')
const outDir = path.join(appRoot, 'src', 'data', 'imported')

const files = [
  ['staged-completion/stage-09/ARTICLES.json', 'articles.json'],
  ['staged-completion/stage-09/ACTIONS.json', 'actions.json'],
  ['staged-completion/stage-09/FAQ.json', 'faq.json'],
  ['staged-completion/stage-09/TIMELINE.json', 'timeline.json'],
  ['staged-completion/stage-09/GESTATIONAL_WEEKS.json', 'gestational_weeks.json'],
  ['staged-completion/stage-09/SOURCE_LINKS.json', 'source_links.json'],
  ['staged-completion/stage-09/ROUTINES.json', 'routines.json'],
  ['staged-completion/stage-10/PUBLICATION_GATE.json', 'publication_gate.json'],
  ['staged-completion/stage-10/CONSOLIDATED_IMPORT.json', 'consolidated_import.json'],
]

fs.mkdirSync(outDir, { recursive: true })

const summary = {
  synced_at: new Date().toISOString(),
  integration_mode: 'research_draft_navigation',
  clinical_publication: false,
  archived_ai_conclusions_are_guidance: false,
  files: [],
}

for (const [rel, outName] of files) {
  const src = path.join(researchRoot, rel)
  const dest = path.join(outDir, outName)
  if (!fs.existsSync(src)) {
    console.warn('missing', src)
    continue
  }
  const raw = fs.readFileSync(src, 'utf8')
  JSON.parse(raw) // validate
  fs.writeFileSync(dest, raw)
  const parsed = JSON.parse(raw)
  summary.files.push({
    source: rel,
    output: outName,
    bytes: Buffer.byteLength(raw),
    records: Array.isArray(parsed) ? parsed.length : undefined,
  })
  console.log('synced', outName)
}

fs.writeFileSync(path.join(outDir, 'sync_meta.json'), JSON.stringify(summary, null, 2))
console.log('wrote sync_meta.json')
