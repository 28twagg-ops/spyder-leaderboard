import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import App from './App'
import { DEFAULT_THEME, isThemeId } from './theme/themes'

describe('Everwell shell', () => {
  beforeEach(() => localStorage.clear())
  afterEach(() => { cleanup(); localStorage.clear() })
  it('defaults to Morning Stone and retains Soft Fog as an alternative', () => {
    expect(DEFAULT_THEME).toBe('morning-stone')
    expect(isThemeId('soft-fog')).toBe(true)
  })

  it('renders brand and integrated research draft disclaimer on today', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: 'Everwell' })).toBeInTheDocument()
    expect(screen.getByText(/educational research prototype/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Settings' })).toHaveAttribute('href', '/settings')
    expect(screen.getByRole('link', { name: 'Saved' })).toHaveAttribute('href', '/saved')
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^Search$/ })).toHaveAttribute('href', '/library')
    expect(screen.getByRole('link', { name: /Urgent signs & getting help/ })).toHaveAttribute('href', '/urgent')
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button',{name:'Browse without a phase'}))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.getByRole('heading',{name:'Start reading'})).toBeInTheDocument()
    expect(document.querySelectorAll('.ref-row')).toHaveLength(3)
    expect(screen.getByRole('link',{name:/Your body/})).toHaveAttribute('href','/explore/body')
  })

  it('saves first-launch phase, dismisses setup, and restores it on relaunch',()=>{
    const first=render(<MemoryRouter><App/></MemoryRouter>)
    fireEvent.click(screen.getByRole('button',{name:/Preparing for pregnancy/}))
    fireEvent.click(screen.getByRole('button',{name:/6–3 months before/}))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(JSON.parse(localStorage.getItem('everwell.local.prefs.v1')??'{}').selectedPhaseId).toBe('PRE04')
    first.unmount()
    render(<MemoryRouter><App/></MemoryRouter>)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.getByRole('heading',{name:'6–3 months before'})).toBeInTheDocument()
    fireEvent.click(screen.getByRole('link',{name:'Settings'}))
    fireEvent.click(screen.getByRole('button',{name:/Change phase/}))
    fireEvent.click(screen.getByRole('button',{name:'Browse without a phase'}))
    expect(JSON.parse(localStorage.getItem('everwell.local.prefs.v1')??'{}').setupComplete).toBe(true)
  })

  it('does not substitute unrelated research for an unknown article ID', () => {
    render(
      <MemoryRouter initialEntries={['/research/UNKNOWN-ARTICLE']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: 'Research article not found' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Browse library' })).toBeInTheDocument()
  })

  it('keeps archived article interpretations collapsed on arrival', () => {
    render(<MemoryRouter initialEntries={['/research/EV-ART-001']}><App /></MemoryRouter>)
    const archive = screen.getByText('Archived AI summary for comparison').closest('details')
    expect(archive).toBeInTheDocument()
    expect(archive).not.toHaveAttribute('open')
    expect(screen.getByText('Visible safety')).toBeVisible()
  })

  it('searches, saves and clears articles without storing search text', () => {
    render(<MemoryRouter initialEntries={['/library']}><App /></MemoryRouter>)
    fireEvent.change(screen.getByLabelText('Search articles'), { target: { value: 'EV-ART-001' } })
    expect(screen.getByText('1 of 52 articles · 0 saved')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Save bookmark for Getting ready for pregnancy' }))
    expect(screen.getByText('1 of 52 articles · 1 saved')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('link', { name: 'Saved' }))
    expect(screen.getByRole('heading', { name: 'Saved' })).toBeInTheDocument()
    expect(screen.getByText('Getting ready for pregnancy')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('link', { name: 'Home' }))
    fireEvent.click(screen.getByRole('button',{name:'Browse without a phase'}))
    fireEvent.click(screen.getByRole('link', { name: 'Settings' }))
    fireEvent.click(screen.getByRole('button', { name: 'Clear local preferences' }))
    fireEvent.click(screen.getByRole('button', { name: 'Confirm clear' }))
    expect(localStorage.getItem('everwell.local.prefs.v1')).toBeNull()
  })
  it('opens the visual reference library without automatic external media', async () => {
    render(<MemoryRouter initialEntries={['/visuals']}><App /></MemoryRouter>)
    expect(await screen.findByRole('heading', { name: 'See the science' })).toBeInTheDocument()
    expect(screen.getByText('44 of 44 visual references')).toBeInTheDocument()
    expect(screen.queryAllByRole('img')).toHaveLength(0)
    fireEvent.change(screen.getByLabelText('Search visual references'), { target: { value: 'pelvic floor' } })
    expect(screen.getByRole('heading', { name: 'Muscles of the pelvic floor' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('link',{name:/Muscles of the pelvic floor/}))
    expect(await screen.findByRole('heading',{name:'Muscles of the pelvic floor',level:1})).toBeInTheDocument()
    expect(screen.queryAllByRole('img')).toHaveLength(0)
  })

  it('opens scientific collections as focused destinations',async()=>{
    render(<MemoryRouter initialEntries={['/evidence']}><App/></MemoryRouter>)
    expect(await screen.findByRole('heading',{name:'Research & sources'})).toBeInTheDocument()
    fireEvent.click(screen.getByRole('link',{name:/Scientific outcomes/}))
    expect(await screen.findByRole('heading',{name:'Scientific outcomes'})).toBeInTheDocument()
    const rows=document.querySelectorAll('.evidence-record')
    expect(rows.length).toBeGreaterThan(0)
    expect(Array.from(rows).every(row=>!row.hasAttribute('open'))).toBe(true)
  })
  it('shows install help for Home Screen', () => {
    render(
      <MemoryRouter initialEntries={['/install']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: 'Add Everwell' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'iPhone Safari' })).toBeInTheDocument()
  })
})
