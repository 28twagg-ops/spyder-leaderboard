import {cleanup,fireEvent,render,screen,within} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {afterEach,describe,expect,it} from 'vitest'
import App from '../App'
import {week22Topics} from '../data/week22TopicMap'
import {getArticle,timeline} from '../data/researchCatalog'
import {getEvidenceSource,outcomes} from '../data/evidenceCatalog'
import {skinSections,slug,sourceGroups,sourceAliasHeld,subsectionOutcomes} from '../data/skinTopicMap'
import {getVisual} from '../data/visualCatalog'
import {midReadings,midReferences} from '../data/midPregnancyReadings'
import {topicEditorial,skinSpecific} from '../data/weekEditorial'
afterEach(()=>{cleanup();localStorage.clear()})
describe('expanded week 22 topic coverage',()=>{
 it('provides specific cited editorial sections for every mapped reading',()=>{
  for(const t of week22Topics)for(const c of t.children){const entry=topicEditorial[t.subject+'/'+t.id+'/'+c.id];expect(entry.sections.length).toBeGreaterThanOrEqual(2);for(const part of entry.sections)for(const id of part.refs)expect(getEvidenceSource(id)).toBeDefined()}
  for(const group of skinSections)for(const c of group.children){const key=slug(c.title);if(key==='creams-and-moisturizers')continue;expect(skinSpecific[key].length).toBeGreaterThanOrEqual(2);for(const part of skinSpecific[key])for(const id of part.refs)expect(getEvidenceSource(id)).toBeDefined()}
 })
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
  expect(screen.getByText(/Public\/foundation-funded trial with donated capsules/)).toBeVisible()
  fireEvent.click(screen.getByRole('link',{name:'Nutrition'}))
  expect(await screen.findByRole('heading',{name:'Nutrition',level:1})).toBeVisible()
 })
 it.each(week22Topics.flatMap(t=>t.children.map(c=>[t.subject,t.id,c.id,c.title])))('opens subsection %s/%s/%s',async(subject,topic,id,title)=>{
  render(<MemoryRouter initialEntries={['/timeline/week/22/'+subject+'/'+topic+'/'+id]}><App/></MemoryRouter>)
  expect(await screen.findByRole('heading',{name:title,level:1})).toBeVisible()
  const studies=screen.getByText('Studies & references').closest('details')!
  expect(studies).not.toHaveAttribute('open')
  expect(within(studies).getByText(/Study references/)).toBeInTheDocument()
  expect(document.querySelectorAll('.skin-page details').length).toBeLessThanOrEqual(3)
  expect(document.querySelector('.skin-page details details')).toBeNull()
  expect(screen.getByRole('note',{name:'Content status'})).toBeVisible()
 })
 it.each(skinSections.flatMap(s=>s.children.map(c=>[s.id,slug(c.title),c.title])))('opens skin subsection %s/%s',async(section,id,title)=>{
  render(<MemoryRouter initialEntries={['/timeline/week/22/mother/skin/'+section+'/'+id]}><App/></MemoryRouter>)
  expect(await screen.findByRole('heading',{name:title,level:1})).toBeVisible()
  const studies=screen.getByText('Studies & references').closest('details')!
  expect(studies).not.toHaveAttribute('open')
  expect(within(studies).getByText(/Study references/)).toBeInTheDocument()
  expect(document.querySelectorAll('.skin-page details').length).toBeLessThanOrEqual(3)
  expect(document.querySelector('.skin-page details details')).toBeNull()
 })
 it('handles publication aliases conservatively and returns direct mother links to mother view',async()=>{
  expect(sourceGroups(['S004','P3-02'])).toHaveLength(1)
  expect(sourceAliasHeld('RP001')).toBe(true)
  expect(subsectionOutcomes(['P5-E18']).every(row=>row.held&&row.estimate===null&&row.record===undefined)).toBe(true)
  render(<MemoryRouter initialEntries={['/timeline/week/22/mother/nutrition']}><App/></MemoryRouter>)
  fireEvent.click(await screen.findByRole('link',{name:'Week 22'}))
  expect(await screen.findByRole('heading',{name:'Your changing body'})).toBeVisible()
 })
 it('week 23 keeps the reader in its own week and shows the source window',async()=>{
  render(<MemoryRouter initialEntries={['/timeline/week/23?subject=baby']}><App/></MemoryRouter>)
  fireEvent.click(within(screen.getByRole('navigation',{name:'Development topics'})).getByRole('link',{name:/^Lungs/}))
  expect(await screen.findByRole('heading',{name:'How the lungs develop before birth'})).toBeVisible()
  expect(screen.getByText(/Reference describes weeks 23–25/)).toBeVisible()
  expect(screen.getByRole('link',{name:'Week 23 · Baby'})).toHaveAttribute('href','/timeline/week/23?subject=baby')
 })
 it.each(Object.entries(midReadings).map(([path,a])=>[path,a.title]))('opens focused mid-pregnancy reading %s',async(path,title)=>{
  render(<MemoryRouter initialEntries={['/timeline/week/25/'+path]}><App/></MemoryRouter>)
  expect(await screen.findByRole('heading',{name:title,level:1})).toBeVisible()
  expect(screen.getByText('Studies & references')).toBeInTheDocument()
  expect(screen.getByRole('navigation',{name:'Week 25 context'})).toBeVisible()
 })
 it('new third-trimester links preserve Week 29 context',async()=>{
  render(<MemoryRouter initialEntries={['/timeline/week/29/baby/growth/neural-control']}><App/></MemoryRouter>)
  expect(await screen.findByRole('heading',{name:'A growing nervous system'})).toBeVisible()
  expect(screen.getByRole('navigation',{name:'Week 29 context'})).toBeVisible()
  expect(screen.getByRole('link',{name:'Week 29 · Baby'})).toHaveAttribute('href','/timeline/week/29?subject=baby')
 })
 it('new reading references resolve and registry-backed IDs exist',()=>{
  for(const reading of Object.values(midReadings))for(const part of reading.sections)for(const id of part.refs){const ref=midReferences[id];expect(ref).toBeDefined();if(ref.sourceId)expect(getEvidenceSource(ref.sourceId)).toBeDefined()}
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
