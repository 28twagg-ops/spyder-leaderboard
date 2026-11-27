/**
 * Sync stage-09/10 research JSON/JSONL into the app data package.
 * Does not promote clinical publication; preserves draft + hold metadata.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const appRoot = path.resolve(__dirname, '..')
const researchRoot = path.resolve(appRoot, '..', 'research')
const outDir = path.join(appRoot, 'src', 'data', 'imported')

const jsonFiles = [
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

const jsonlFiles = [
  ['staged-completion/stage-10/OUTCOMES.jsonl', 'outcomes.json'],
  ['staged-completion/stage-10/NUTRIENTS.jsonl', 'nutrients.json'],
]

const summary = {
  synced_at: new Date().toISOString(),
  integration_mode: 'research_draft_navigation',
  clinical_publication: false,
  archived_ai_conclusions_are_guidance: false,
  chart_publication: false,
  files: [],
}

function writeSynced(outName, sourceRel, parsed, rawBytes) {
  const dest = path.join(outDir, outName)
  const text = JSON.stringify(parsed)
  fs.writeFileSync(dest, text)
  summary.files.push({
    source: sourceRel,
    output: outName,
    bytes: rawBytes ?? Buffer.byteLength(text),
    records: Array.isArray(parsed) ? parsed.length : undefined,
  })
  console.log('synced', outName, Array.isArray(parsed) ? `(${parsed.length})` : '')
}

// Preflight every required input before replacing any cached output.
// Missing or malformed research must stop pretest/prebuild rather than
// silently retaining a previous snapshot or reporting a fresh sync.
function readRequired(rel, outName, jsonl = false) {
  const src = path.join(researchRoot, rel)
  if (!fs.existsSync(src)) {
    throw new Error(`Required research input missing: ${rel}`)
  }
  const raw = fs.readFileSync(src, 'utf8')
  let parsed
  try {
    parsed = jsonl
      ? raw.split(/\r?\n/).map((line) => line.trim()).filter(Boolean).map((line) => JSON.parse(line))
      : JSON.parse(raw)
  } catch (error) {
    throw new Error(`Invalid research input: ${rel}`, { cause: error })
  }
  const objectInput = outName === 'publication_gate.json' || outName === 'consolidated_import.json'
  if (objectInput ? (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) : (!Array.isArray(parsed) || parsed.length === 0)) {
    throw new Error(`Unexpected or empty research input: ${rel}`)
  }
  if (outName === 'publication_gate.json') {
    if (typeof parsed.default !== 'string' || !parsed.default.startsWith('BLOCK_ALL_') ||
        !Array.isArray(parsed.source_exclusions) ||
        !Array.isArray(parsed.source_or_outcome_review_blocks) ||
        parsed.clinical_review !== false) {
      throw new Error('Publication gate is missing required draft-only safety metadata')
    }
  }
  return { rel, outName, parsed, bytes: Buffer.byteLength(raw) }
}

const inputs = [
  ...jsonFiles.map(([rel, outName]) => readRequired(rel, outName)),
  ...jsonlFiles.map(([rel, outName]) => readRequired(rel, outName, true)),
]
fs.mkdirSync(outDir, { recursive: true })
for (const { rel, outName, parsed, bytes } of inputs) {
  writeSynced(outName, rel, parsed, bytes)
}

fs.writeFileSync(path.join(outDir, 'sync_meta.json'), JSON.stringify(summary, null, 2))
console.log('wrote sync_meta.json')
