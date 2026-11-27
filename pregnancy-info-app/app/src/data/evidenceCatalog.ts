import nutrientsJson from './imported/nutrients.json'
import outcomesJson from './imported/outcomes.json'
import sourceIndexJson from './imported/source_index.json'
import { filterSafeSourceIds, isSourceOrOutcomeHeld } from './researchGate'

interface ProvenanceRow {
  id: string
  source_id: string
  origin?: string
  origin_blob_sha?: string
  index?: number
  record?: Record<string, unknown>
  clinical_review?: boolean
}
export interface OutcomeRow extends ProvenanceRow {
  outcome: string
  measure?: string
  estimate?: number | null
  lower?: number | null
  upper?: number | null
  interval?: number | string | null
  chart_eligible?: boolean
  independent_trial?: boolean | null
  flags?: string[]
}
export interface NutrientRow extends ProvenanceRow {
  nutrient: string
  life_stage?: string
  age?: string
  unit?: string
  intake_type?: string | null
  intake?: number | null
  upper_limit?: number | null
  upper_limit_unit?: string | null
  upper_limit_scope?: string | null
  is_dose?: boolean
  publish?: boolean
}
export interface EvidenceSource {
  id: string
  title?: string
  url?: string | null
  doi?: string | null
  pmid?: string | null
  year?: number | string | null
  funding?: string | null
  financial_ties?: string | null
  cohort?: string | null
  review_status?: string
  origin?: string
}
export const outcomes = outcomesJson as OutcomeRow[]
export const nutrients = nutrientsJson as NutrientRow[]
export const evidenceSources = sourceIndexJson as EvidenceSource[]
const sourceById = new Map(evidenceSources.map((source) => [source.id, source]))

export function getEvidenceSource(id: string) {
  return sourceById.get(id)
}

export function hasEvidenceHold(row: ProvenanceRow & { flags?: string[] }) {
  return !getEvidenceSource(row.source_id) || isSourceOrOutcomeHeld(row.source_id) ||
    isSourceOrOutcomeHeld(row.id) ||
    (row.flags ?? []).some((flag) => /hold|exclu|retract|block/i.test(flag))
}
function outcomeView(row: OutcomeRow) {
  const held = hasEvidenceHold(row)
  return {
    ...row,
    held,
    estimate: held ? null : row.estimate,
    lower: held ? null : row.lower,
    upper: held ? null : row.upper,
    chartAllowed: false,
    displayNote: held
      ? 'Held or unresolved provenance — numerical values withheld'
      : 'Research draft; no clinical chart or recommendation',
  }
}
function nutrientView(row: NutrientRow) {
  const held = hasEvidenceHold(row)
  const isDoseClaim = row.is_dose === true
  return {
    ...row,
    held,
    isDoseClaim,
    intake: held || isDoseClaim ? null : row.intake,
    upper_limit: held || isDoseClaim ? null : row.upper_limit,
    displayNote: held
      ? 'Held or unresolved provenance — numerical values withheld'
      : isDoseClaim
        ? 'Dose-like record — numerical values withheld'
        : 'Population reference intake, not a personal prescription',
  }
}
export function browseOutcomes(limit = outcomes.length) {
  return outcomes.slice(0, limit).map(outcomeView)
}
export function browseNutrients(limit = nutrients.length) {
  return nutrients.slice(0, limit).map(nutrientView)
}

export type HoldFilter = 'all' | 'held' | 'unheld'
export interface EvidenceFilter {
  query?: string
  hold?: HoldFilter
  lifeStage?: string
}
function matchesQuery(row: ProvenanceRow, query: string, fields: unknown[]) {
  const source = getEvidenceSource(row.source_id)
  const haystack = [row.id, row.source_id, source?.title, source?.doi, source?.pmid, ...fields]
    .filter((field) => typeof field === 'string' || typeof field === 'number')
    .join(' ').toLowerCase()
  return query.trim().toLowerCase().split(/\s+/).every((term) => haystack.includes(term))
}
function matchesHold(row: ProvenanceRow & { flags?: string[] }, hold: HoldFilter = 'all') {
  return hold === 'all' || (hold === 'held' ? hasEvidenceHold(row) : !hasEvidenceHold(row))
}
export function filterOutcomes(filter: EvidenceFilter = {}) {
  return outcomes.filter((row) => matchesHold(row, filter.hold) &&
    matchesQuery(row, filter.query ?? '', [row.outcome, row.measure, row.record?.comparison, row.record?.timepoint]))
    .map(outcomeView)
}
export function filterNutrients(filter: EvidenceFilter = {}) {
  return nutrients.filter((row) => matchesHold(row, filter.hold) &&
    (!filter.lifeStage || filter.lifeStage === 'all' || row.life_stage === filter.lifeStage) &&
    matchesQuery(row, filter.query ?? '', [row.nutrient, row.life_stage, row.age, row.intake_type, row.unit]))
    .map(nutrientView)
}
export function paginate<T>(rows: T[], requestedPage: number, pageSize = 20) {
  const size = Number.isFinite(pageSize) ? Math.max(1, Math.floor(pageSize)) : 20
  const pages = Math.max(1, Math.ceil(rows.length / size))
  const page = Math.min(pages, Math.max(1, Number.isFinite(requestedPage) ? Math.floor(requestedPage) : 1))
  const start = (page - 1) * size
  return { page, pages, total: rows.length, first: rows.length ? start + 1 : 0,
    last: Math.min(start + size, rows.length), rows: rows.slice(start, start + size) }
}
export function evidenceStats() {
  return {
    outcomes: outcomes.length, nutrients: nutrients.length, sources: evidenceSources.length,
    heldOutcomes: outcomes.filter(hasEvidenceHold).length,
    heldNutrients: nutrients.filter(hasEvidenceHold).length,
    chartEligibleFlagged: outcomes.filter((row) => row.chart_eligible).length,
    chartsEnabledAtRuntime: false,
  }
}
export function sampleSourceOverlapWarning(sourceIds: string[]) {
  const { held } = filterSafeSourceIds(sourceIds)
  return held.length ? `Held IDs present: ${held.join(', ')}` : null
}
