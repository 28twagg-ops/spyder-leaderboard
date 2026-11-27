import { describe, expect, it } from 'vitest'
import { maySurfaceAsGuidance } from './publicationGate'
import { articleBundle, articles, catalogStats } from './researchCatalog'
import {
  EXCLUDED_SOURCE_IDS,
  canAutomateAction,
  filterSafeSourceIds,
  isSourceExcluded,
  researchDraftSafety,
} from './researchGate'

describe('research integration gates', () => {
  it('loads staged research inventory', () => {
    const stats = catalogStats()
    expect(stats.articles).toBe(52)
    expect(stats.actions).toBe(52)
    expect(stats.faqs).toBe(52)
    expect(stats.phases).toBe(28)
    expect(stats.gestationalWeeks).toBe(40)
    expect(stats.sourceLinks).toBe(217)
    expect(stats.routines).toBe(9)
  })

  it('treats curated drafts as non-guidance', () => {
    const safety = researchDraftSafety()
    expect(maySurfaceAsGuidance(safety)).toBe(false)
    expect(safety.canDriveRecommendation).toBe(false)
    expect(safety.archivedAiConclusion).toBe(true)
  })

  it('never allows action automation before clinical release', () => {
    expect(
      canAutomateAction({
        automation_allowed: true,
        priority: 'essential',
        clinical_review: true,
        publish: true,
      }),
    ).toBe(false)
  })

  it('excludes retracted source IDs', () => {
    expect(isSourceExcluded('DR023')).toBe(true)
    expect(EXCLUDED_SOURCE_IDS.has('DR024')).toBe(true)
    const filtered = filterSafeSourceIds(['P9-G01', 'DR023', 'DR025'])
    expect(filtered.allowed).toEqual(['P9-G01'])
    expect(filtered.held).toEqual(['DR023', 'DR025'])
  })

  it('builds article bundles without enabling guidance', () => {
    const first = articles[0]
    const bundle = articleBundle(first.id)
    expect(bundle).not.toBeNull()
    expect(maySurfaceAsGuidance(bundle!.safety)).toBe(false)
    expect(bundle!.relatedActions.every((a) => a.automation_allowed_effective === false)).toBe(
      true,
    )
  })
})
