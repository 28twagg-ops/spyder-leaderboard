import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App'
import { DEFAULT_THEME, isThemeId } from './theme/themes'

describe('Everwell shell', () => {
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
