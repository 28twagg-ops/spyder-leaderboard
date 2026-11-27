import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import { TimelinePage } from './TimelinePage'
import { timeline,gestationalWeeks } from '../data/researchCatalog'
function view(path='/timeline'){return render(<MemoryRouter initialEntries={[path]}><Routes><Route path="/timeline" element={<TimelinePage/>}/><Route path="/timeline/:track" element={<TimelinePage/>}/><Route path="/timeline/:track/:phaseId" element={<TimelinePage/>}/><Route path="/timeline/week/:weekNumber" element={<TimelinePage/>}/></Routes></MemoryRouter>)}
afterEach(cleanup)
describe('developmental journey',()=>{
 it('links every phase across five stage destinations',()=>{
  view()
  expect(screen.getByRole('link',{name:/Preparing for pregnancy/})).toHaveAttribute('href','/timeline/preconception')
  for(const track of new Set(timeline.map(p=>p.track))){cleanup();view('/timeline/'+track);for(const p of timeline.filter(p=>p.track===track))expect(document.querySelector(`a[href="/timeline/${track}/${p.id}"]`)).toBeInTheDocument()}
  expect(timeline).toHaveLength(28)
 })
 it('offers all forty weeks and opens the selected week, with source and adjacent navigation',()=>{
  view('/timeline/pregnancy')
  expect(gestationalWeeks).toHaveLength(40)
  expect(screen.getByLabelText('Pregnancy week').querySelectorAll('option')).toHaveLength(41)
  fireEvent.change(screen.getByLabelText('Pregnancy week'),{target:{value:'22'}})
  expect(screen.getByRole('heading',{name:'Week 22'})).toBeInTheDocument()
  expect(screen.getByRole('link',{name:'Next'})).toHaveAttribute('href','/timeline/week/23')
 })
 it('opens legacy phase and week deep links',()=>{
  view('/timeline#PRE04')
  expect(screen.getByRole('heading',{name:timeline.find(p=>p.id==='PRE04')?.label})).toBeInTheDocument()
  cleanup();view('/timeline#week-22')
  expect(screen.getByRole('heading',{name:'Week 22'})).toBeInTheDocument()
 })
})
