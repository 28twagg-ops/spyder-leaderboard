import { describe, expect, it } from 'vitest'
import {
  assertNotClinicalAdvice,
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

  it('blocks even clinically reviewed flags until an explicit global release', () => {
    const flags = createSafetyFlags({
      publicationStatus: 'clinically_reviewed',
      contentKind: 'established_guidance',
      holds: [],
      canDriveRecommendation: true,
    })
    expect(flags.canDriveRecommendation).toBe(false)
    expect(maySurfaceAsGuidance({ ...flags, canDriveRecommendation: true })).toBe(false)
  })

  it('blocks ranking and automation even with reviewed flags and no holds', () => {
    const flags = createSafetyFlags({
      publicationStatus: 'clinically_reviewed',
      contentKind: 'established_guidance',
      holds: [],
      canDriveRanking: true,
      canDriveAutomation: true,
    })
    expect(flags.canDriveRanking).toBe(false)
    expect(flags.canDriveAutomation).toBe(false)
    expect(() => assertNotClinicalAdvice({ ...flags, canDriveRanking: true })).toThrow()
  })
})
