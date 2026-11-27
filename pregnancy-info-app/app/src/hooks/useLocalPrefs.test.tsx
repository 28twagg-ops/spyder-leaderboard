import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { LocalPrefsProvider, PREFS_KEY, useLocalPrefs } from './useLocalPrefs'

function Controls() {
  const { prefs, toggleBookmark, setPhase, clearPrefs } = useLocalPrefs()
  return <div>
    <button onClick={() => toggleBookmark('EV-ART-001')}>Save</button>
    <button onClick={() => setPhase('PRE04')}>Phase</button>
    <button onClick={clearPrefs}>Clear</button>
    <span>{prefs.themeId}</span>
  </div>
}
function Reader() {
  const { prefs } = useLocalPrefs()
  return <p>{prefs.bookmarks.join(',') || 'No bookmarks'} / {prefs.selectedPhaseId ?? 'No phase'}</p>
}
describe('local reading preferences', () => {
  beforeEach(() => localStorage.clear())
  afterEach(() => { cleanup(); localStorage.clear() })
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
})
