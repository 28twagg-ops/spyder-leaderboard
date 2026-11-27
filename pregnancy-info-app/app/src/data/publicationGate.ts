/**
 * Fail-closed publication and safety gate helpers.
 * Clinical content stays draft until qualified review + owner release.
 */

export type PublicationStatus =
  | 'blocked'
  | 'research_only'
  | 'synthetic_demo'
  | 'independently_appraised'
  | 'clinically_reviewed'

export type ContentKind =
  | 'educational'
  | 'established_guidance'
  | 'preliminary'
  | 'uncertain'
  | 'experimental'
  | 'urgent_warning'
  | 'synthetic'

export interface SafetyFlags {
  publicationStatus: PublicationStatus
  contentKind: ContentKind
  holds: string[]
  canDriveRecommendation: boolean
  canDriveRanking: boolean
  canDriveAutomation: boolean
  archivedAiConclusion: boolean
}

/** Hard holds mirrored from stage-10 PUBLICATION_GATE.json (non-exhaustive UI subset). */
export const ACTIVE_HOLDS = [
  'DR021',
  'DR022',
  'DR023',
  'DR024',
  'DR025',
  'PED-FERTILITY-HOLD',
  'RP001',
  'RP005',
  'P5-18',
  'DEFAULT_BLOCK_CLINICAL_PUBLICATION',
] as const

// This educational preview has no owner-authorized clinical release mechanism.
// Individual record flags cannot override this global release lock.
export const CLINICAL_RELEASE_ENABLED = false

export function createSafetyFlags(
  partial: Partial<SafetyFlags> & Pick<SafetyFlags, 'publicationStatus' | 'contentKind'>,
): SafetyFlags {
  const archivedAiConclusion = partial.archivedAiConclusion ?? false
  const isSynthetic = partial.contentKind === 'synthetic'
  const isBlocked =
    !CLINICAL_RELEASE_ENABLED ||
    partial.publicationStatus !== 'clinically_reviewed' ||
    (partial.holds ?? ['DEFAULT_BLOCK_CLINICAL_PUBLICATION']).length > 0 ||
    archivedAiConclusion

  return {
    publicationStatus: partial.publicationStatus,
    contentKind: partial.contentKind,
    holds: partial.holds ?? [...ACTIVE_HOLDS.filter((h) => h === 'DEFAULT_BLOCK_CLINICAL_PUBLICATION')],
    archivedAiConclusion,
    canDriveRecommendation: !isBlocked && !isSynthetic && (partial.canDriveRecommendation ?? false),
    canDriveRanking: !isBlocked && !isSynthetic && (partial.canDriveRanking ?? false),
    canDriveAutomation: !isBlocked && !isSynthetic && (partial.canDriveAutomation ?? false),
  }
}

export function assertNotClinicalAdvice(flags: SafetyFlags): void {
  if (flags.canDriveRecommendation || flags.canDriveRanking || flags.canDriveAutomation) {
    throw new Error('Clinical recommendation/automation paths are blocked pending qualified review.')
  }
}

export function maySurfaceAsGuidance(flags: SafetyFlags): boolean {
  if (!CLINICAL_RELEASE_ENABLED) return false
  if (flags.archivedAiConclusion || flags.contentKind === 'synthetic') return false
  if (flags.publicationStatus !== 'clinically_reviewed') return false
  if (flags.holds.length > 0) return false
  return flags.canDriveRecommendation === true
}

export function labelForStatus(status: PublicationStatus): string {
  switch (status) {
    case 'synthetic_demo':
      return 'Synthetic demo content'
    case 'research_only':
      return 'Research draft — not clinical guidance'
    case 'independently_appraised':
      return 'Independently appraised — clinical review pending'
    case 'clinically_reviewed':
      return 'Clinically reviewed'
    case 'blocked':
    default:
      return 'Publication blocked'
  }
}
