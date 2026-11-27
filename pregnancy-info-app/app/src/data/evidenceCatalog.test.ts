import { describe, expect, it } from 'vitest'
import { browseNutrients, browseOutcomes, evidenceStats } from './evidenceCatalog'

describe('evidence browser gates', () => {
  it('loads outcome and nutrient inventories', () => {
    const stats = evidenceStats()
    expect(stats.outcomes).toBe(311)
    expect(stats.nutrients).toBe(403)
    expect(stats.chartsEnabledAtRuntime).toBe(false)
  })

  it('never enables runtime charts even when rows are flagged', () => {
    const rows = browseOutcomes(50)
    expect(rows.every((row) => row.chartAllowed === false)).toBe(true)
  })

  it('marks dose-like nutrient rows explicitly', () => {
    const rows = browseNutrients(80)
    expect(rows.length).toBeGreaterThan(0)
    for (const row of rows) {
      if (row.is_dose) {
        expect(row.displayNote.toLowerCase()).toContain('dose')
      }
    }
  })
})
