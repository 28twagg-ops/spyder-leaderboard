import nutrientsJson from './imported/nutrients.json'
import outcomesJson from './imported/outcomes.json'
import {
  filterSafeSourceIds,
  isSourceOrOutcomeHeld,
} from './researchGate'

export interface OutcomeRow {
  id: string
  source_id: string
  outcome: string
  measure?: string
  estimate?: number | null
  lower?: number | null
  upper?: number | null
  interval?: number | null
  chart_eligible?: boolean
  clinical_review?: boolean
  independent_trial?: boolean | null
  flags?: string[]
}

export interface NutrientRow {
  id: string
  source_id: string
  nutrient: string
  life_stage?: string
  age?: string
  unit?: string
  intake_type?: string
  intake?: number | null
  upper_limit?: number | null
  clinical_review?: boolean
  is_dose?: boolean
  publish?: boolean
}

export const outcomes = outcomesJson as OutcomeRow[]
export const nutrients = nutrientsJson as NutrientRow[]

export function browseOutcomes(limit = 40) {
  return outcomes.slice(0, limit).map((row) => {
    const held = isSourceOrOutcomeHeld(row.source_id) || isSourceOrOutcomeHeld(row.id)
    return {
      ...row,
      held,
      chartAllowed: false, // hard fail-closed: no clinical charts until review + eligibility
      displayNote: held
        ? 'Held/excluded source or outcome — research navigation only'
        : row.chart_eligible
          ? 'Marked chart_eligible in research files, but runtime charting remains blocked'
          : 'Not chart-eligible',
    }
  })
}

export function browseNutrients(limit = 40) {
  return nutrients.slice(0, limit).map((row) => {
    const held = isSourceOrOutcomeHeld(row.source_id) || isSourceOrOutcomeHeld(row.id)
    return {
      ...row,
      held,
      isDoseClaim: row.is_dose === true,
      displayNote: held
        ? 'Held/excluded — omitted from recommendation paths'
        : row.is_dose
          ? 'Reference intake row flagged as dose-like — do not treat as personal prescription'
          : 'Reference intake / research row only',
    }
  })
}

export function evidenceStats() {
  const heldOutcomes = outcomes.filter(
    (o) => isSourceOrOutcomeHeld(o.source_id) || isSourceOrOutcomeHeld(o.id),
  ).length
  const heldNutrients = nutrients.filter(
    (n) => isSourceOrOutcomeHeld(n.source_id) || isSourceOrOutcomeHeld(n.id),
  ).length
  const chartEligibleFlagged = outcomes.filter((o) => o.chart_eligible).length
  return {
    outcomes: outcomes.length,
    nutrients: nutrients.length,
    heldOutcomes,
    heldNutrients,
    chartEligibleFlagged,
    chartsEnabledAtRuntime: false,
  }
}

export function sampleSourceOverlapWarning(sourceIds: string[]) {
  const { held } = filterSafeSourceIds(sourceIds)
  if (held.length === 0) return null
  return `Held IDs present: ${held.join(', ')}`
}
