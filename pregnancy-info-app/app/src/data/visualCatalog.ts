import { visualPageReview } from './visualReview'
import visualJson from './imported/visual_catalog.json'

export interface VisualRecord {
  id: string
  title: string
  topic: string
  url: string
  creator: string
  rights?: string
  license?: string
  license_url?: string
  rights_status: string
  attribution?: string
  use?: string
  alt_text_draft?: string
  verification?: string
  financial_context?: string
  clinical_review: boolean
  production_approved: boolean
  local_path?: string
  upstream_blob_sha?: string
}

export const visualCatalog = visualJson as VisualRecord[]
const visualById = new Map(visualCatalog.map((record) => [record.id, record]))

export function getVisual(id: string) {
  return visualById.get(id)
}

export function safeVisualUrl(url?: string) {
  if (!url) return undefined
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'https:' && !parsed.username && !parsed.password ? parsed.href : undefined
  } catch {
    return undefined
  }
}

/** A source link does not establish clinical review or reproduction permission. */
export function mayPublishVisual(_record: VisualRecord) {
  return false // global release lock; no automatic publication from catalog flags
}

/** Use only explicitly matched links, not a filename or guessed anatomy. */
const articleLinks: Record<string, string[]> = {
  "EV-ART-001": [
    "EV-V010"
  ],
  "EV-ART-004": [
    "EV-V010"
  ],
  "EV-ART-005": [
    "EV-V037"
  ],
  "EV-ART-006": [
    "EV-V037"
  ],
  "EV-ART-013": [
    "EV-V026"
  ],
  "EV-ART-014": [
    "EV-V004",
    "EV-V005",
    "EV-V006",
    "EV-V007",
    "EV-V008",
    "EV-V009"
  ],
  "EV-ART-007": [
    "EV-SVG-2"
  ],
  "EV-ART-008": [
    "EV-SVG-2"
  ],
  "EV-ART-017": [
    "EV-SVG-5"
  ],
  "EV-ART-018": [
    "EV-V003",
    "EV-SVG-1"
  ],
  "EV-ART-019": [
    "EV-V011"
  ],
  "EV-ART-020": [
    "EV-V002"
  ],
  "EV-ART-021": [
    "EV-V004"
  ],
  "EV-ART-022": [
    "EV-V015"
  ],
  "EV-ART-024": [
    "EV-V026"
  ],
  "EV-ART-027": [
    "EV-V001"
  ],
  "EV-ART-028": [
    "EV-V002"
  ],
  "EV-ART-030": [
    "EV-V002"
  ],
  "EV-ART-031": [
    "EV-V003"
  ],
  "EV-ART-032": [
    "EV-V011",
    "EV-V034"
  ],
  "EV-ART-033": [
    "EV-V034"
  ],
  "EV-ART-034": [
    "EV-V018"
  ],
  "EV-ART-035": [
    "EV-V034"
  ],
  "EV-ART-036": [
    "EV-V021",
    "EV-V022",
    "EV-V031"
  ],
  "EV-ART-042": [
    "EV-V033"
  ],
  "EV-ART-043": [
    "EV-V019",
    "EV-V020",
    "EV-V025"
  ],
  "EV-ART-044": [
    "EV-V025"
  ],
  "EV-ART-045": [
    "EV-V033"
  ],
  "EV-ART-046": [
    "EV-V034"
  ],
  "EV-ART-047": [
    "EV-V034"
  ]
}
export function articleVisuals(articleId: string, candidateIds: string[] = []) {
  const allowed = articleLinks[articleId] ?? []
  return allowed.filter((id) => candidateIds.includes(id)).flatMap((id) => {
    const record = getVisual(id)
    return record ? [record] : []
  })
}

export const visualGroups=[
  {
    "key": "body",
    "label": "Body & anatomy",
    "ids": [
      "EV-V001",
      "EV-V002",
      "EV-V003",
      "EV-V010",
      "EV-SVG-1",
      "EV-SVG-3",
      "EV-SVG-4",
      "EV-SVG-5",
      "EV-SVG-6"
    ]
  },
  {
    "key": "pregnancy",
    "label": "Pregnancy & fetal growth",
    "ids": [
      "EV-V004",
      "EV-V005",
      "EV-V006",
      "EV-V007",
      "EV-V008",
      "EV-V009",
      "EV-V012",
      "EV-V013",
      "EV-V014",
      "EV-V015",
      "EV-V016",
      "EV-V017"
    ]
  },
  {
    "key": "development",
    "label": "Baby & child development",
    "ids": [
      "EV-V019",
      "EV-V020",
      "EV-V025",
      "EV-V033",
      "EV-SVG-2",
      "EV-SVG-7"
    ]
  },
  {
    "key": "feeding",
    "label": "Feeding & nutrition",
    "ids": [
      "EV-V011",
      "EV-V018",
      "EV-V032",
      "EV-V034"
    ]
  },
  {
    "key": "care",
    "label": "Care, recovery & safety",
    "ids": [
      "EV-V021",
      "EV-V022",
      "EV-V023",
      "EV-V024",
      "EV-V026",
      "EV-V027",
      "EV-V028",
      "EV-V029",
      "EV-V030",
      "EV-V031"
    ]
  },
  {
    "key": "research",
    "label": "Research figures",
    "ids": [
      "EV-V035",
      "EV-V036",
      "EV-V037"
    ]
  }
]
const groupById=new Map(visualGroups.flatMap(group=>group.ids.map(id=>[id,group.key] as const)))
const aliases:Record<string,string>={
  "EV-V001": "abs core belly muscles abdominal separation diastasis",
  "EV-V002": "pelvic muscles bladder pelvic pain",
  "EV-V003": "stretch marks skin layers",
  "EV-V004": "womb growing uterus pregnancy stages",
  "EV-V005": "placenta baby cord",
  "EV-V006": "blood flow fetal circulation",
  "EV-V011": "breast milk breastfeeding milk flow",
  "EV-V018": "hunger feeding baby cues",
  "EV-V019": "hands passing toys movement",
  "EV-V020": "walking first steps movement",
  "EV-V021": "crib bassinet back sleep",
  "EV-V022": "crib bassinet back sleep",
  "EV-V025": "milestones crawling rolling walking baby development",
  "EV-V026": "maternal warning signs postpartum urgent",
  "EV-V037": "prenatal vitamins supplements label"
}
export function visualGroupLabel(id:string){return visualGroups.find(group=>group.key===groupById.get(id))?.label??'Other references'}
export function searchVisuals(query = '', topic = 'all') {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  return visualCatalog.filter((record) => {
    if (topic !== 'all' && record.topic !== topic && groupById.get(record.id)!==topic) return false
    const text = [record.id, record.title, record.topic, record.creator, record.rights_status, visualGroupLabel(record.id), aliases[record.id], visualPageReview(record.id)?.description].join(' ').toLowerCase()
    return terms.every((term) => text.includes(term))
  })
}
