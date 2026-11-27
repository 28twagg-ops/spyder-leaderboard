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
  'EV-ART-007': ['EV-SVG-2'],
  'EV-ART-008': ['EV-SVG-2'],
  'EV-ART-014': ['EV-V004', 'EV-V005', 'EV-V006', 'EV-V007', 'EV-V008', 'EV-V009'],
  'EV-ART-017': ['EV-SVG-5'],
  'EV-ART-018': ['EV-V003', 'EV-SVG-1'],
  'EV-ART-019': ['EV-V011'],
  'EV-ART-020': ['EV-V002'],
  'EV-ART-024': ['EV-V026'],
  'EV-ART-027': ['EV-V001'],
  'EV-ART-028': ['EV-V002'],
  'EV-ART-031': ['EV-V003'],
  'EV-ART-032': ['EV-V011'],
  'EV-ART-036': ['EV-V021', 'EV-V022'],
  'EV-ART-042': ['EV-V033'],
  'EV-ART-043': ['EV-V025'],
  'EV-ART-044': ['EV-V025'],
}
export function articleVisuals(articleId: string, candidateIds: string[] = []) {
  const allowed = articleLinks[articleId] ?? []
  return allowed.filter((id) => candidateIds.includes(id)).flatMap((id) => {
    const record = getVisual(id)
    return record ? [record] : []
  })
}

export function searchVisuals(query = '', topic = 'all') {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  return visualCatalog.filter((record) => {
    if (topic !== 'all' && record.topic !== topic) return false
    const text = [record.id, record.title, record.topic, record.creator, record.rights_status].join(' ').toLowerCase()
    return terms.every((term) => text.includes(term))
  })
}
