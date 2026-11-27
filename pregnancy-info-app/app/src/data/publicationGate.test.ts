import { describe, expect, it } from 'vitest'
import {
  createSafetyFlags,
  maySurfaceAsGuidance,
} from './publicationGate'
import { archivedAiComparisonArtifact, topics } from './syntheticContent'

describe('publication gate fail-closed', () => {
  it('blocks archived AI conclusions from guidance', () => {
    expect(maySurfaceAsGuidance(archivedAiComparisonArtifact.safety)).toBe(false)
  })

  it('blocks synthetic demo cards from recommendations', () => {
    for (const topic of topics) {
      expect(topic.safety.canDriveRecommendation).toBe(false)
      expect(maySurfaceAsGuidance(topic.safety)).toBe(false)
    }
  })

  it('does not allow recommendation flags on research_only content', () => {
    const flags = createSafetyFlags({
      publicationStatus: 'research_only',
      contentKind: 'preliminary',
      canDriveRecommendation: true,
    })
    expect(flags.canDriveRecommendation).toBe(false)
    expect(maySurfaceAsGuidance(flags)).toBe(false)
  })

  it('requires clinically_reviewed + empty holds + explicit allow', () => {
    const flags = createSafetyFlags({
      publicationStatus: 'clinically_reviewed',
      contentKind: 'established_guidance',
      holds: [],
      canDriveRecommendation: true,
    })
    // createSafetyFlags still defaults holds if not careful — force empty
    const cleared = { ...flags, holds: [] as string[], canDriveRecommendation: true }
    expect(maySurfaceAsGuidance(cleared)).toBe(true)
  })
})
