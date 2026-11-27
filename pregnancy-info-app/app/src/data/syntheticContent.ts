import { createSafetyFlags, type SafetyFlags } from './publicationGate'

export interface PhaseCard {
  id: string
  title: string
  band: string
  summary: string
  safety: SafetyFlags
}

export interface TopicCard {
  id: string
  title: string
  region: 'whole' | 'abdomen' | 'pelvic' | 'breast' | 'skin' | 'nutrition' | 'child'
  quickTake: string
  priorities: string[]
  safetyNote: string
  evidenceNote: string
  safety: SafetyFlags
}

export interface UrgentSign {
  id: string
  title: string
  detail: string
  audience: 'maternal' | 'infant' | 'either'
}

export const APP_DISCLAIMER =
  'Everwell is an educational research prototype. It does not diagnose, treat, or replace care from a qualified clinician. All clinical content remains draft until qualified review and owner release.'

export const phases: PhaseCard[] = [
  {
    id: 'prep-12-18',
    title: 'Preparation horizon',
    band: 'About 12–18 months before conception (optional)',
    summary:
      'Optional planning band for nutrition, fitness, and shared health questions — not a medical deadline.',
    safety: createSafetyFlags({
      publicationStatus: 'synthetic_demo',
      contentKind: 'synthetic',
    }),
  },
  {
    id: 'preg-t2',
    title: 'Second trimester',
    band: 'Weeks 14–27 (organizational)',
    summary:
      'Sample timeline band for education. Gestational dating belongs with your clinical care team.',
    safety: createSafetyFlags({
      publicationStatus: 'synthetic_demo',
      contentKind: 'synthetic',
    }),
  },
  {
    id: 'pp-2-6w',
    title: 'Early postpartum',
    band: 'About weeks 2–6 after birth',
    summary:
      'Recovery, feeding choices, mood, and pelvic comfort — autonomy and safety first.',
    safety: createSafetyFlags({
      publicationStatus: 'synthetic_demo',
      contentKind: 'synthetic',
    }),
  },
  {
    id: 'child-0-2',
    title: 'Early childhood',
    band: 'Birth to age 2 (primary)',
    summary:
      'Feeding, sleep, milestones, and development topics shown as research drafts only.',
    safety: createSafetyFlags({
      publicationStatus: 'synthetic_demo',
      contentKind: 'synthetic',
    }),
  },
]

export const topics: TopicCard[] = [
  {
    id: 'syn-folate',
    title: 'Folate and food patterns',
    region: 'nutrition',
    quickTake:
      'Folic acid has strong prevention evidence for neural tube defects when used as recommended by clinicians and public-health guidance.',
    priorities: [
      'Discuss timing and form with a clinician before conception when possible',
      'Food patterns support—not replace—established prevention guidance',
      'Do not treat MTHFR variants as automatic reason to abandon folic acid',
    ],
    safetyNote:
      'Hold GE-H01: common MTHFR variants do not establish need to replace folic acid with 5-MTHF. This card is synthetic demo text.',
    evidenceNote:
      'Archived AI summaries are comparison-only. Independent source appraisal and clinical review are still required before any family-facing recommendation.',
    safety: createSafetyFlags({
      publicationStatus: 'synthetic_demo',
      contentKind: 'synthetic',
      holds: ['GE-H01', 'DEFAULT_BLOCK_CLINICAL_PUBLICATION'],
      archivedAiConclusion: false,
    }),
  },
  {
    id: 'syn-pelvic',
    title: 'Pelvic floor comfort',
    region: 'pelvic',
    quickTake:
      'Pelvic floor work is about coordination and comfort, not a single “tighter is better” goal.',
    priorities: [
      'Distinguish strength, relaxation, and pain',
      'Escalate urgent symptoms (fever, heavy bleeding, severe pain) promptly',
      'Feeding and birth choices are personal — not appearance scorecards',
    ],
    safetyNote: 'Synthetic demo. No dosing, protocols, or clearance claims.',
    evidenceNote:
      'Real evidence rows will load only through gated imports that respect publication holds.',
    safety: createSafetyFlags({
      publicationStatus: 'synthetic_demo',
      contentKind: 'synthetic',
    }),
  },
  {
    id: 'syn-skin',
    title: 'Stretch marks and skin changes',
    region: 'skin',
    quickTake:
      'Many skin changes are common. Prevention claims need careful evidence grading; genetics and stretch matter a lot.',
    priorities: [
      'Separate prevention research from treatment research',
      'Topical retinoids in pregnancy remain a safety-sensitive topic (RP001 hold)',
      'No product endorsement from demo cards',
    ],
    safetyNote: 'RP001 / RP005 holds remain active for unsafe or conflicting retinoid content.',
    evidenceNote: 'Demo only — not a ranking of creams or procedures.',
    safety: createSafetyFlags({
      publicationStatus: 'synthetic_demo',
      contentKind: 'synthetic',
      holds: ['RP001', 'RP005', 'DEFAULT_BLOCK_CLINICAL_PUBLICATION'],
    }),
  },
  {
    id: 'syn-infant-sleep',
    title: 'Infant sleep basics',
    region: 'child',
    quickTake:
      'Safe sleep guidance comes from clinical and public-health authorities; this prototype does not invent sleep schedules.',
    priorities: [
      'Prefer authoritative safe-sleep sources after independent verification',
      'Corrected age matters for preterm infants',
      'No automated sleep-training prescriptions here',
    ],
    safetyNote: 'Synthetic educational shell only.',
    evidenceNote: 'Pediatric research packets remain staged and unpublished clinically.',
    safety: createSafetyFlags({
      publicationStatus: 'synthetic_demo',
      contentKind: 'synthetic',
    }),
  },
]

export const urgentSigns: UrgentSign[] = [
  {
    id: 'u-maternal-bleeding',
    title: 'Heavy bleeding or severe abdominal pain in pregnancy',
    detail: 'Seek urgent clinical evaluation. This app cannot triage emergencies.',
    audience: 'maternal',
  },
  {
    id: 'u-postpartum-mood',
    title: 'Thoughts of self-harm or harming the baby',
    detail: 'Get urgent help from emergency services or a crisis line. You are not alone.',
    audience: 'maternal',
  },
  {
    id: 'u-infant-breathing',
    title: 'Infant breathing trouble, blue lips, or unresponsiveness',
    detail: 'Call emergency services immediately.',
    audience: 'infant',
  },
]

/** Intentionally marked archived-AI artifact for fail-closed tests. */
export const archivedAiComparisonArtifact = {
  id: 'archived-ai-demo',
  title: 'Archived AI conclusion (comparison only)',
  text: 'Previous model-authored ranking of supplements — not guidance.',
  safety: createSafetyFlags({
    publicationStatus: 'blocked',
    contentKind: 'preliminary',
    archivedAiConclusion: true,
    holds: ['DEFAULT_BLOCK_CLINICAL_PUBLICATION'],
  }),
}
