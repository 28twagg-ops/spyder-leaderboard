import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { TimelinePage } from './TimelinePage'

describe('developmental timeline', () => {
  it('makes all 40 week records and 28 family phases reachable', () => {
    render(<MemoryRouter><TimelinePage /></MemoryRouter>)
    expect(screen.getByText('28 of 28 phases')).toBeInTheDocument()
    for (let week = 1; week <= 40; week++) {
      expect(document.getElementById(`week-${week}`)).toBeInTheDocument()
    }
    fireEvent.change(screen.getByLabelText('Family phase track'), { target: { value: 'child' } })
    expect(screen.getByText('11 of 28 phases')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Child development' })).toBeInTheDocument()
    fireEvent.change(screen.getByLabelText('Pregnancy week range'), { target: { value: 'Weeks 28–40' } })
    expect(document.getElementById('week-1')).not.toBeInTheDocument()
    expect(document.getElementById('week-40')).toBeInTheDocument()
    fireEvent.change(screen.getByLabelText('Go to a specific week'), {target:{value:'22'}})
    expect(document.getElementById('week-22')).toHaveAttribute('open')
    expect(document.getElementById('week-40')).not.toBeInTheDocument()
  })
})
