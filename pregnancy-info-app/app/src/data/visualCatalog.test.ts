import { describe, expect, it } from 'vitest'
import { articleVisuals, mayPublishVisual, safeVisualUrl, searchVisuals, visualCatalog } from './visualCatalog'

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
  it('rejects insecure and executable external URLs', () => {
    expect(safeVisualUrl('javascript:alert(1)')).toBeUndefined()
    expect(safeVisualUrl('http://example.com')).toBeUndefined()
    expect(safeVisualUrl('https://user:pass@example.com')).toBeUndefined()
    expect(safeVisualUrl('https://example.com/')).toBe('https://example.com/')
  })
})
