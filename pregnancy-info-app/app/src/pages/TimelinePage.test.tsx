import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { TimelinePage } from './TimelinePage'

describe('developmental timeline', () => {
  it('makes all 40 week records and 28 family phases reachable', () => {
    render(<MemoryRouter><TimelinePage /></MemoryRouter>)
    expect(screen.getByText('28 of 28 phases')).toBeInTheDocument()
    for (let week = 1; week <= 40; week++) {
      expect(screen.getByText(`Week ${week}`, { exact: true })).toBeInTheDocument()
    }
    fireEvent.change(screen.getByLabelText('Family phase track'), { target: { value: 'child' } })
    expect(screen.getByText('11 of 28 phases')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Child development' })).toBeInTheDocument()
    fireEvent.change(screen.getByLabelText('Pregnancy week range'), { target: { value: 'Weeks 28–40' } })
    expect(screen.queryByText('Week 1', { exact: true })).not.toBeInTheDocument()
    expect(screen.getByText('Week 40', { exact: true })).toBeInTheDocument()
  })
})
