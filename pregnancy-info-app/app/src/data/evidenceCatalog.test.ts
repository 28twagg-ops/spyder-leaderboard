import { describe, expect, it } from 'vitest'
import { browseNutrients, browseOutcomes, evidenceStats, filterNutrients, filterOutcomes, getEvidenceSource, hasEvidenceHold, paginate, outcomes, nutrients } from './evidenceCatalog'

describe('evidence browser gates', () => {
  it('loads all inventories and preserves linked provenance', () => {
    const stats = evidenceStats()
    expect(stats.outcomes).toBe(311)
    expect(stats.nutrients).toBe(403)
    expect(stats.sources).toBe(770)
    expect(stats.chartsEnabledAtRuntime).toBe(false)
    expect([...outcomes, ...nutrients].every((row) => Boolean(getEvidenceSource(row.source_id)))).toBe(true)
  })
  it('never enables runtime charts even when rows are flagged', () => {
    expect(browseOutcomes().every((row) => row.chartAllowed === false)).toBe(true)
  })
  it('withholds held and unresolved values, including upstream holds', () => {
    const held = filterOutcomes({ hold: 'held' })
    expect(held.length).toBeGreaterThan(0)
    expect(held.every((row) => row.estimate === null && row.lower === null && row.upper === null)).toBe(true)
    expect(hasEvidenceHold({ id: 'test', source_id: 'UNKNOWN' })).toBe(true)
    expect(hasEvidenceHold({ id: 'test', source_id: outcomes[0].source_id, flags: ['explicit or upstream hold'] })).toBe(true)
    expect(browseNutrients().filter((row) => row.held || row.isDoseClaim)
      .every((row) => row.intake === null && row.upper_limit === null)).toBe(true)
  })
  it('excludes held values and redundant nested original records from the shipped data itself',()=>{
    const permitted=new Set(['comparison','timepoint','locator','source_locator'])
    for(const row of outcomes){
      if(hasEvidenceHold(row)){expect(row.estimate).toBeNull();expect(row.lower).toBeNull();expect(row.upper).toBeNull();expect(row.record).toBeUndefined()}
      else expect(Object.keys(row.record??{}).every(key=>permitted.has(key))).toBe(true)
    }
    for(const row of nutrients){
      if(hasEvidenceHold(row)||row.is_dose){expect(row.intake).toBeNull();expect(row.upper_limit).toBeNull();expect(row.record).toBeUndefined()}
      else expect(Object.keys(row.record??{}).every(key=>key==='locator')).toBe(true)
    }
  })
  it('makes all rows reachable without truncation', () => {
    const o = filterOutcomes()
    const n = filterNutrients()
    const allOutcomes = Array.from({ length: paginate(o, 1).pages }, (_, i) => paginate(o, i + 1).rows).flat()
    const allNutrients = Array.from({ length: paginate(n, 1).pages }, (_, i) => paginate(n, i + 1).rows).flat()
    expect(new Set(allOutcomes.map((row) => row.id)).size).toBe(311)
    expect(new Set(allNutrients.map((row) => row.id)).size).toBe(403)
    expect(paginate(o, 999).last).toBe(311)
    expect(paginate(n, 999).last).toBe(403)
    expect(paginate([], 1).first).toBe(0)
  })
  it('supports source and life-stage search without implying clinical eligibility', () => {
    expect(filterOutcomes({ query: outcomes[0].source_id }).some((row) => row.id === outcomes[0].id)).toBe(true)
    const rows = filterNutrients({ lifeStage: 'pregnancy', query: 'biotin' })
    expect(rows.length).toBeGreaterThan(0)
    expect(rows.every((row) => row.life_stage === 'pregnancy' && row.nutrient.toLowerCase().includes('biotin'))).toBe(true)
    expect(filterOutcomes({ query: 'unlikely-unknown-record-xyz' })).toHaveLength(0)
  })
})
