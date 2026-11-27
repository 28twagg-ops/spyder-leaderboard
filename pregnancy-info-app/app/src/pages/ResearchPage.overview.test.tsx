import { cleanup, render,screen } from '@testing-library/react'
import { afterEach,describe,expect,it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
afterEach(cleanup)
describe('visual-first research reading',()=>{
 it.each([['EV-ART-018','OpenStax · Layers of the skin'],['EV-ART-027','OpenStax · Abdominal wall and pelvic floor'],['EV-ART-036','NICHD · Safe sleep environment'],['EV-ART-044','CDC · Milestones in Action']])('shows scope and relevant source %s while retaining the draft lock',(id,source)=>{
  render(<MemoryRouter initialEntries={['/research/'+id]}><App/></MemoryRouter>)
  expect(screen.getByRole('heading',{name:'Why it matters'})).toBeVisible()
  expect(screen.getByText('What you\'ll learn')).toBeVisible()
  expect(screen.getByRole('link',{name:new RegExp(source)})).toHaveAttribute('target','_blank')
  expect(screen.getByText('Visible safety')).toBeVisible()
  expect(screen.getByText('Archived AI summary for comparison').closest('details')).not.toHaveAttribute('open')
  expect(screen.queryAllByRole('img')).toHaveLength(0)
 })
})
