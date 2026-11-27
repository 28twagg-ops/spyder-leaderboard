import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('Everwell shell', () => {
  it('renders brand and integrated research draft disclaimer on today', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: 'Everwell' })).toBeInTheDocument()
    expect(screen.getByText(/educational research prototype/i)).toBeInTheDocument()
    expect(screen.getByText(/52 staged articles/i)).toBeInTheDocument()
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
