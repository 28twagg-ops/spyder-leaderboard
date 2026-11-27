import publicationGate from './imported/publication_gate.json'
import { createSafetyFlags, type SafetyFlags } from './publicationGate'

export interface PublicationGateFile {
  default: string
  source_exclusions: string[]
  source_or_outcome_review_blocks: string[]
  clinical_review: boolean
  runtime_enforced: boolean
}

const gate = publicationGate as PublicationGateFile

/** Source IDs that must never drive charts, recommendations, or automation. */
export const EXCLUDED_SOURCE_IDS = new Set(gate.source_exclusions ?? [])

/** Source/outcome IDs under review hold (fail-closed). */
export const HELD_SOURCE_OR_OUTCOME_IDS = new Set([
  ...(gate.source_exclusions ?? []),
  ...(gate.source_or_outcome_review_blocks ?? []),
])

export const CLINICAL_REVIEW_COMPLETE = gate.clinical_review === true

export const DEFAULT_PUBLICATION_BLOCK = gate.default

export function isSourceExcluded(sourceId: string): boolean {
  return EXCLUDED_SOURCE_IDS.has(sourceId)
}

export function isSourceOrOutcomeHeld(id: string): boolean {
  return HELD_SOURCE_OR_OUTCOME_IDS.has(id)
}

export function filterSafeSourceIds(sourceIds: string[] | undefined): {
  allowed: string[]
  held: string[]
} {
  const allowed: string[] = []
  const held: string[] = []
  for (const id of sourceIds ?? []) {
    if (isSourceOrOutcomeHeld(id)) held.push(id)
    else allowed.push(id)
  }
  return { allowed, held }
}

/**
 * Curated stage-09 copy is AI-authored research draft / comparison material.
 * It may be shown for navigation and education layering, never as clinical guidance.
 */
export function researchDraftSafety(extraHolds: string[] = []): SafetyFlags {
  return createSafetyFlags({
    publicationStatus: CLINICAL_REVIEW_COMPLETE ? 'clinically_reviewed' : 'research_only',
    contentKind: 'educational',
    holds: [
      'DEFAULT_BLOCK_CLINICAL_PUBLICATION',
      ...(CLINICAL_REVIEW_COMPLETE ? [] : ['CLINICAL_REVIEW_PENDING']),
      ...extraHolds,
    ],
    archivedAiConclusion: true,
    canDriveRecommendation: false,
    canDriveRanking: false,
    canDriveAutomation: false,
  })
}

export function canAutomateAction(action: {
  automation_allowed?: boolean
  priority?: string
  clinical_review?: boolean
  publish?: boolean
}): boolean {
  if (!action.automation_allowed) return false
  if (action.priority === 'research_only') return false
  if (!action.clinical_review || !action.publish) return false
  if (!CLINICAL_REVIEW_COMPLETE) return false
  return false // hard fail-closed until owner + clinical release
}

export function editorialPriorityLabel(priority: string): string {
  switch (priority) {
    case 'urgent':
      return 'Urgent education'
    case 'essential':
      return 'Editorial: essential reading'
    case 'recommended':
      return 'Editorial: recommended reading'
    case 'optional':
      return 'Optional'
    case 'research_only':
      return 'Research only'
    default:
      return priority
  }
}
