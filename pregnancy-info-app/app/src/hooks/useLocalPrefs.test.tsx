import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { LocalPrefsProvider, PREFS_KEY, useLocalPrefs } from './useLocalPrefs'

function Controls() {
  const { prefs, toggleBookmark, setPhase, clearPrefs, storageAvailable } = useLocalPrefs()
  return <div>
    <button onClick={() => toggleBookmark('EV-ART-001')}>Save</button>
    <button onClick={() => setPhase('PRE04')}>Phase</button>
    <button onClick={clearPrefs}>Clear</button>
    <span>{prefs.themeId}</span><span>{storageAvailable?'Storage available':'Storage unavailable'}</span>
  </div>
}
function Reader() {
  const { prefs } = useLocalPrefs()
  return <p>{prefs.bookmarks.join(',') || 'No bookmarks'} / {prefs.selectedPhaseId ?? 'No phase'}</p>
}
describe('local reading preferences', () => {
  beforeEach(() => localStorage.clear())
  afterEach(() => { cleanup(); vi.restoreAllMocks(); localStorage.clear() })
  it('defaults to no personal phase and shares choices across components', () => {
    render(<LocalPrefsProvider><Controls /><Reader /></LocalPrefsProvider>)
    expect(screen.getByText('No bookmarks / No phase')).toBeInTheDocument()
    expect(localStorage.getItem(PREFS_KEY)).toBeNull()
    fireEvent.click(screen.getByText('Save'))
    fireEvent.click(screen.getByText('Phase'))
    expect(screen.getByText('EV-ART-001 / PRE04')).toBeInTheDocument()
    expect(JSON.parse(localStorage.getItem(PREFS_KEY) ?? '{}').selectedPhaseId).toBe('PRE04')
    fireEvent.click(screen.getByText('Clear'))
    expect(screen.getByText('No bookmarks / No phase')).toBeInTheDocument()
    expect(localStorage.getItem(PREFS_KEY)).toBeNull()
  })
  it('restores explicit themes and tolerates malformed storage', () => {
    localStorage.setItem(PREFS_KEY, JSON.stringify({ themeId: 'soft-fog', bookmarks: null, selectedPhaseId: 123 }))
    render(<LocalPrefsProvider><Controls /><Reader /></LocalPrefsProvider>)
    expect(screen.getByText('soft-fog')).toBeInTheDocument()
    expect(screen.getByText('No bookmarks / No phase')).toBeInTheDocument()
  })
  it('drops unknown phase IDs and invalid or duplicate bookmarks',()=>{
    localStorage.setItem(PREFS_KEY,JSON.stringify({selectedPhaseId:'MISSING',bookmarks:['EV-ART-001','EV-ART-001','unknown'],readArticles:['unknown']}))
    render(<LocalPrefsProvider><Controls/><Reader/></LocalPrefsProvider>)
    expect(screen.getByText('EV-ART-001 / No phase')).toBeInTheDocument()
    expect(JSON.parse(localStorage.getItem(PREFS_KEY)??'{}').setupComplete).toBe(false)
  })
  it('retains transient preferences and reports unavailable persistence when writes fail',async()=>{
    vi.spyOn(Storage.prototype,'setItem').mockImplementation(()=>{throw new Error('Storage unavailable')})
    render(<LocalPrefsProvider><Controls/><Reader/></LocalPrefsProvider>)
    fireEvent.click(screen.getByText('Phase'))
    expect(screen.getByText('No bookmarks / PRE04')).toBeInTheDocument()
    await waitFor(()=>expect(screen.getByText('Storage unavailable')).toBeInTheDocument())
  })
  it('reports failed removal rather than claiming deletion, then recovers on retry',async()=>{
    localStorage.setItem(PREFS_KEY,JSON.stringify({selectedPhaseId:'PRE04',setupComplete:true}))
    render(<LocalPrefsProvider><Controls/><Reader/></LocalPrefsProvider>)
    const remove=vi.spyOn(Storage.prototype,'removeItem').mockImplementation(()=>{throw new Error('blocked')})
    fireEvent.click(screen.getByText('Clear'))
    expect(screen.getByText('No bookmarks / No phase')).toBeInTheDocument()
    await waitFor(()=>expect(screen.getByText('Storage unavailable')).toBeInTheDocument())
    expect(localStorage.getItem(PREFS_KEY)).not.toBeNull()
    remove.mockRestore()
    fireEvent.click(screen.getByText('Clear'))
    await waitFor(()=>expect(screen.getByText('Storage available')).toBeInTheDocument())
    expect(localStorage.getItem(PREFS_KEY)).toBeNull()
  })
})
