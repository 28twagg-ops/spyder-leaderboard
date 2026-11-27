import { cleanup, fireEvent, render,screen,within } from '@testing-library/react'
import { afterEach,describe,expect,it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import { articles } from '../data/researchCatalog'
import { plainReading } from '../data/plainReading'
afterEach(cleanup)
describe('visual-first research reading',()=>{
 it.each([['EV-ART-018','OpenStax · Layers of the skin'],['EV-ART-027','OpenStax · Abdominal wall and pelvic floor'],['EV-ART-036','NICHD · Safe sleep environment'],['EV-ART-044','CDC · Milestones in Action']])('shows scope and relevant source %s while retaining the draft lock',(id,source)=>{
  render(<MemoryRouter initialEntries={['/research/'+id]}><App/></MemoryRouter>)
  expect(screen.getByRole('heading',{name:'Why it matters'})).toBeVisible()
  expect(screen.getByText('What you\'ll learn')).toBeVisible()
  expect(screen.getByRole('link',{name:new RegExp(source)})).toHaveAttribute('target','_blank')
  expect(screen.getByText('Visible safety')).toBeVisible()
  const understand=screen.getByText('Understand more').closest('details')!
  expect(understand).not.toHaveAttribute('open')
  expect(screen.getByText('Archived AI summary for comparison').closest('details')).not.toHaveAttribute('open')
  fireEvent.click(screen.getByText('Understand more'))
  expect(understand).toHaveAttribute('open')
  expect(screen.getByText(plainReading(id)!.detail)).toBeVisible()
  expect(screen.getByText('Archived AI summary for comparison').closest('details')).not.toHaveAttribute('open')
  expect(screen.queryAllByRole('img')).toHaveLength(0)
  expect(document.querySelectorAll('.reader-page details').length).toBeLessThanOrEqual(3)
  expect(document.querySelector('.reader-page details details')).toBeNull()
 })
 it.each(articles.map(a=>[a.id,a.title]))('keeps all library readers compact and source records available: %s',(id,title)=>{
  render(<MemoryRouter initialEntries={['/research/'+id]}><App/></MemoryRouter>)
  expect(screen.getByRole('heading',{name:title,level:1})).toBeVisible()
  const studies=screen.getByText('Studies & references').closest('details')!
  expect(studies).not.toHaveAttribute('open')
  expect(within(studies).getByText('Original studies')).toBeInTheDocument()
  expect(document.querySelectorAll('.reader-page details').length).toBeLessThanOrEqual(3)
  expect(document.querySelector('.reader-page details details')).toBeNull()
 })
 it.each(articles.filter(a=>a.priority==='urgent'||a.high_risk).map(a=>[a.id,a.visible_safety,a.priority,a.learn_more]))('retains the exact prominent safety note for %s',(id,safety,priority,learnMore)=>{
  render(<MemoryRouter initialEntries={['/research/'+id]}><App/></MemoryRouter>)
  const safetyPanel=document.querySelector<HTMLElement>('.safety-panel')!
  expect(safetyPanel).toBeVisible()
  const note=within(safetyPanel).getByText(safety,{exact:true})
  const overview=screen.getByRole('heading',{name:'Why it matters'})
  expect(note).toBeVisible()
  expect(note.compareDocumentPosition(overview)&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  if(priority==='urgent')expect(within(safetyPanel).getByText(learnMore,{exact:true})).toBeVisible()
 })
})
