import {cleanup,fireEvent,render,screen,within} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {afterEach,describe,expect,it} from 'vitest'
import App from '../App'
import {week22Topics} from '../data/week22TopicMap'
import {getArticle,timeline} from '../data/researchCatalog'
import {getEvidenceSource,outcomes} from '../data/evidenceCatalog'
import {skinSections,slug,sourceGroups,sourceAliasHeld,subsectionOutcomes} from '../data/skinTopicMap'
import {getVisual} from '../data/visualCatalog'
afterEach(()=>{cleanup();localStorage.clear()})
describe('expanded week 22 topic coverage',()=>{
 it('covers every second trimester article with valid references and unique routes',()=>{
  const children=week22Topics.flatMap(t=>t.children)
  const mapped=new Set(['EV-ART-018',...children.flatMap(c=>c.article_ids)])
  for(const id of timeline.find(p=>p.id==='PREG02')!.article_ids)expect(mapped.has(id)).toBe(true)
  expect(week22Topics).toHaveLength(11)
  expect(new Set(week22Topics.map(t=>t.subject+'/'+t.id)).size).toBe(11)
  for(const t of week22Topics){
   expect(getEvidenceSource(t.source_id)).toBeDefined()
   expect(new Set(t.children.map(c=>c.id)).size).toBe(t.children.length)
   for(const c of t.children){
    for(const id of c.article_ids)expect(getArticle(id)).toBeDefined()
    for(const id of c.source_ids)expect(getEvidenceSource(id)).toBeDefined()
    for(const id of c.outcome_ids)expect(outcomes.some(o=>o.id===id)).toBe(true)
    for(const id of c.visual_ids)expect(getVisual(id)).toBeDefined()
   }
  }
 })
 it.each(week22Topics.map(t=>[t.subject,t.id,t.title,t.children[0].title]))('opens %s/%s with meaningful subsection links',async(subject,id,title,first)=>{
  render(<MemoryRouter initialEntries={['/timeline/week/22/'+subject+'/'+id]}><App/></MemoryRouter>)
  expect(await screen.findByRole('heading',{name:title,level:1})).toBeVisible()
  expect(screen.getByRole('link',{name:name=>name.startsWith(first)})).toBeVisible()
 })
 it('opens nutrition comparison and returns to its topic',async()=>{
  render(<MemoryRouter initialEntries={['/timeline/week/22/mother/nutrition']}><App/></MemoryRouter>)
  fireEvent.click(await screen.findByRole('link',{name:/Fish & omega-3/}))
  expect(await screen.findByText('2.2%')).toBeVisible()
  expect(screen.getByText('2.0%')).toBeVisible()
  expect(screen.getByText('Funding & limitations')).toBeVisible()
  fireEvent.click(screen.getByRole('link',{name:'Nutrition'}))
  expect(await screen.findByRole('heading',{name:'Nutrition',level:1})).toBeVisible()
 })
 it.each(week22Topics.flatMap(t=>t.children.map(c=>[t.subject,t.id,c.id,c.title])))('opens subsection %s/%s/%s',async(subject,topic,id,title)=>{
  render(<MemoryRouter initialEntries={['/timeline/week/22/'+subject+'/'+topic+'/'+id]}><App/></MemoryRouter>)
  expect(await screen.findByRole('heading',{name:title,level:1})).toBeVisible()
  expect(screen.getByText(/Sources & funding/)).toBeInTheDocument()
  expect(screen.getByRole('note',{name:'Content status'})).toBeVisible()
 })
 it.each(skinSections.flatMap(s=>s.children.map(c=>[s.id,slug(c.title),c.title])))('opens skin subsection %s/%s',async(section,id,title)=>{
  render(<MemoryRouter initialEntries={['/timeline/week/22/mother/skin/'+section+'/'+id]}><App/></MemoryRouter>)
  expect(await screen.findByRole('heading',{name:title,level:1})).toBeVisible()
  expect(screen.getByText(/Sources & funding/)).toBeInTheDocument()
 })
 it('handles publication aliases conservatively and returns direct mother links to mother view',async()=>{
  expect(sourceGroups(['S004','P3-02'])).toHaveLength(1)
  expect(sourceAliasHeld('RP001')).toBe(true)
  expect(subsectionOutcomes(['P5-E18']).every(row=>row.held&&row.estimate===null&&row.record===undefined)).toBe(true)
  render(<MemoryRouter initialEntries={['/timeline/week/22/mother/nutrition']}><App/></MemoryRouter>)
  fireEvent.click(await screen.findByRole('link',{name:'Week 22'}))
  expect(await screen.findByRole('heading',{name:'Your changing body'})).toBeVisible()
 })
 it('directory links are all dedicated week routes',()=>{
  render(<MemoryRouter initialEntries={['/timeline/week/22']}><App/></MemoryRouter>)
  const nav=screen.getByRole('navigation',{name:'Development topics'})
  for(const name of ['Mother','Baby']){
   fireEvent.click(screen.getByRole('button',{name:new RegExp(name)}))
   for(const link of within(nav).getAllByRole('link'))expect(link.getAttribute('href')).toMatch(/^\/timeline\/week\/22\//)
  }
 })
})
