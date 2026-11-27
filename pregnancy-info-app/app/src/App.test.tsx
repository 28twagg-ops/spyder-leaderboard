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
    expect(screen.getByText(/Choose a calmer theme/i)).toBeInTheDocument()
    expect(screen.getByText(/52 articles/i)).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
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

  it('searches, saves and clears articles without storing search text', () => {
    render(<MemoryRouter initialEntries={['/library']}><App /></MemoryRouter>)
    fireEvent.change(screen.getByLabelText('Search articles'), { target: { value: 'EV-ART-001' } })
    expect(screen.getByText('1 of 52 articles · 0 saved')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Save bookmark for Getting ready for pregnancy' }))
    expect(screen.getByText('1 of 52 articles · 1 saved')).toBeInTheDocument()
    fireEvent.click(screen.getByLabelText('Saved articles only'))
    fireEvent.click(screen.getByRole('button', { name: 'Clear local preferences' }))
    fireEvent.click(screen.getByRole('button', { name: 'Confirm clear' }))
    expect(screen.getByText('1 of 52 articles · 0 saved')).toBeInTheDocument()
    expect(localStorage.getItem('everwell.local.prefs.v1')).toBeNull()
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
