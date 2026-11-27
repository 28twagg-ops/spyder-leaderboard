import { describe, expect, it } from 'vitest'
import { articleVisuals, mayPublishVisual, safeVisualUrl, searchVisuals, visualCatalog, visualGroups } from './visualCatalog'

import { visualPageReviews, pinnedVisualPage } from './visualReview'

describe('visual reference catalog', () => {
  it('retains every source and blocks production publication', () => {
    expect(visualCatalog).toHaveLength(44)
    expect(new Set(visualCatalog.map((row) => row.id)).size).toBe(44)
    expect(visualCatalog.every((row) => !mayPublishVisual(row))).toBe(true)
    expect(mayPublishVisual({ ...visualCatalog[0], clinical_review: true, production_approved: true })).toBe(false)
  })
  it('searches titles and limits article links to explicit matches', () => {
    expect(searchVisuals('placenta').length).toBeGreaterThan(0)
    expect(articleVisuals('EV-ART-027', ['EV-V001', 'EV-V029']).map((row) => row.id)).toEqual(['EV-V001'])
    expect(articleVisuals('unknown', ['EV-V001'])).toEqual([])
  })
  it('adds relevant original reference links without unlocking medical artwork',()=>{
    expect(articleVisuals('EV-ART-006',['EV-V037']).map(row=>row.id)).toEqual(['EV-V037'])
    expect(articleVisuals('EV-ART-043',['EV-V019','EV-V020','EV-V025']).map(row=>row.id)).toEqual(['EV-V019','EV-V020','EV-V025'])
    expect(articleVisuals('EV-ART-037',['EV-V025'])).toEqual([])
    expect(visualCatalog.every(row=>!mayPublishVisual(row))).toBe(true)
  })
  it('groups all 44 references exactly once and supports everyday search terms',()=>{
    const all=visualGroups.flatMap(group=>group.ids)
    expect(all).toHaveLength(44)
    expect(new Set(all)).toEqual(new Set(visualCatalog.map(record=>record.id)))
    for(const group of visualGroups)expect(searchVisuals('',group.key).map(record=>record.id).sort()).toEqual([...group.ids].sort())
    expect(searchVisuals('stretch marks','body').map(row=>row.id)).toContain('EV-V003')
    expect(searchVisuals('first steps','development').map(row=>row.id)).toContain('EV-V020')
  })
  it('retains exact file-page rights information without approving reproduction',()=>{
    expect(Object.keys(visualPageReviews)).toHaveLength(6)
    for(const [id,review] of Object.entries(visualPageReviews)){
      const record=visualCatalog.find(row=>row.id===id)!
      expect(record.rights).toBe(review.license)
      expect(safeVisualUrl(pinnedVisualPage(review))).toBeTruthy()
      expect(review.sha1).toMatch(/^[a-f0-9]{40}$/)
      expect(mayPublishVisual(record)).toBe(false)
    }
  })
  it('rejects insecure and executable external URLs', () => {
    expect(safeVisualUrl('javascript:alert(1)')).toBeUndefined()
    expect(safeVisualUrl('http://example.com')).toBeUndefined()
    expect(safeVisualUrl('https://user:pass@example.com')).toBeUndefined()
    expect(safeVisualUrl('https://example.com/')).toBe('https://example.com/')
  })
})
