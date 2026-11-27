import {cleanup,fireEvent,render,screen,within} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {afterEach,describe,expect,it} from 'vitest'
import App from '../App'
import {skinTopicMap,skinSections,sourceGroups,subsectionOutcomes} from '../data/skinTopicMap'
import {getEvidenceSource} from '../data/evidenceCatalog'
afterEach(()=>{cleanup();localStorage.clear()})
const view=(path:string)=>render(<MemoryRouter initialEntries={[path]}><App/></MemoryRouter>)
const root='/timeline/week/22/mother/skin'
describe('week 22 visual directory',()=>{
 it('shows six distinct subject topics and no long article on the week overview',()=>{
  view('/timeline/week/22')
  expect(screen.getByRole('heading',{name:'Week 22'})).toBeVisible()
  const nav=screen.getByRole('navigation',{name:'Development topics'})
  expect(within(nav).getAllByRole('link')).toHaveLength(6)
  expect(within(nav).getByRole('link',{name:/Placenta/})).toBeVisible()
  const subject=screen.getByRole('group',{name:'Whose changes are shown?'})
  fireEvent.click(within(subject).getByRole('button',{name:/Mother/}))
  expect(within(nav).getAllByRole('link')).toHaveLength(6)
  expect(within(nav).getByRole('link',{name:/Skin.*Stretch marks/})).toHaveAttribute('href',root)
  expect(within(nav).queryByRole('link',{name:/Placenta/})).not.toBeInTheDocument()
  expect(localStorage.length).toBe(0)
 })
 it('navigates from mother skin to prevention and its actual evidence',async()=>{
  view('/timeline/week/22')
  fireEvent.click(screen.getByRole('button',{name:/Mother/}))
  fireEvent.click(within(screen.getByRole('navigation',{name:'Development topics'})).getByRole('link',{name:/Skin/}))
  await screen.findByRole('heading',{name:'Skin',level:1})
  fireEvent.click(screen.getByRole('link',{name:/Stretch mark prevention/}))
  fireEvent.click(await screen.findByRole('link',{name:/Creams and moisturizers/}))
  expect(await screen.findByText('45.1%')).toBeVisible()
  expect(screen.getByText('48.8%')).toBeVisible()
  expect(screen.getByText('Funding & limitations')).toBeVisible()
  expect(screen.getByRole('link',{name:/Source 1:/})).toHaveAttribute('href','https://pubmed.ncbi.nlm.nih.gov/18715434/')
  expect(screen.getByRole('note',{name:'Content status'})).toBeVisible()
 })
 it('shows funding groups and explicit limitations for collagen',async()=>{
  view(root+'/prevention/collagen-and-supplements')
  expect(await screen.findByRole('table')).toBeVisible()
  expect(screen.getByText('Not pharma-funded')).toBeVisible()
  expect(screen.getByText('Pregnancy prevention remains unproven.')).toBeVisible()
  expect(screen.getByText('Funding & limitations')).toBeVisible()
 })
 it('preserves the contextual baby topic and reference return',async()=>{
  view('/timeline/week/22')
  fireEvent.click(within(screen.getByRole('navigation',{name:'Development topics'})).getByRole('link',{name:/Movement/}))
  expect(await screen.findByRole('heading',{name:'Movement',level:1})).toBeVisible()
  fireEvent.click(screen.getByRole('link',{name:/Muscles are developing/}))
  expect(await screen.findByRole('heading',{name:'Muscles are developing',level:1})).toBeVisible()
  fireEvent.click(screen.getByRole('link',{name:/Foetus skeleton/}))
  expect(await screen.findByRole('heading',{name:'Foetus skeleton',level:1})).toBeVisible()
  fireEvent.click(screen.getByRole('button',{name:'Back'}))
  expect(await screen.findByRole('heading',{name:'Muscles are developing'})).toBeVisible()
 })
 it('does not apply the pilot to adjacent weeks',async()=>{
  view('/timeline/week/22')
  fireEvent.click(screen.getByRole('link',{name:'Next'}))
  expect(await screen.findByRole('heading',{name:'Week 23'})).toBeVisible()
  expect(screen.queryByRole('navigation',{name:'Development topics'})).not.toBeInTheDocument()
 })
 it('maps all 111 source IDs and 18 outcomes without enabling held evidence',()=>{
  const children=skinSections.flatMap(s=>s.children)
  const ids=[...new Set(children.flatMap(c=>c.source_ids))]
  expect(ids).toHaveLength(skinTopicMap.summary.mapped_source_records)
  expect(ids).toHaveLength(111)
  for(const id of ids)expect(getEvidenceSource(id)).toBeDefined()
  const outcomeIds=[...new Set(children.flatMap(c=>c.outcome_ids))]
  expect(subsectionOutcomes(outcomeIds)).toHaveLength(18)
  expect(sourceGroups(['S004','P3-02'])).toHaveLength(1)
  expect(sourceGroups(['RP001','RP005']).every(group=>group.held)).toBe(true)
 })
})
