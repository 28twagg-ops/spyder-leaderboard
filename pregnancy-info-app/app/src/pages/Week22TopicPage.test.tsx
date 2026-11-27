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
import {weeklyFeatures} from '../data/weeklyFeatures'
import {weekConnections} from '../components/Week22Reading'
import {healthResearchGroups,nutrientSpotlights} from '../data/healthResearchGroups'
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
  expect(screen.queryByRole('note',{name:'Content status'})).not.toBeInTheDocument()
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
 it('checks every weekly feature, cross-reference and guide link against the canonical route catalog',()=>{
  const valid=new Set(['mother/skin','mother/body/rib-comfort','baby/growth/lungs','baby/growth/blood','mother/nutrition/research-guide',...Object.keys(midReadings)])
  for(const topic of week22Topics){valid.add(topic.subject+'/'+topic.id);for(const child of topic.children)valid.add(topic.subject+'/'+topic.id+'/'+child.id)}
  for(const section of skinSections){valid.add('mother/skin/'+section.id);for(const child of section.children)valid.add('mother/skin/'+section.id+'/'+slug(child.title))}
  const check=(path:string)=>{if(path.startsWith('/research/'))expect(getArticle(path.split('/')[2]),path).toBeDefined();else expect(valid.has(path),path).toBe(true)}
  for(const subjects of Object.values(weeklyFeatures))for(const features of Object.values(subjects))for(const item of features)check(item.path)
  for(const reading of Object.values(midReadings))for(const [path] of reading.related)check(path)
  for(const [key,connections] of Object.entries(weekConnections)){check(key);for(const item of connections)check(item.to)}
  for(const group of healthResearchGroups)for(const [path] of group.items)check(path)
  for(const item of nutrientSpotlights){check(item.path);expect(midReferences[item.source]).toBeDefined()}
 })
 it.each([1,5,12,20,28,40])('opens the nutrient and medicine guide in week %s',async(week)=>{
  render(<MemoryRouter initialEntries={['/timeline/week/'+week+'?subject=mother']}><App/></MemoryRouter>)
  fireEvent.click(screen.getByRole('link',{name:/Nutrients, vitamins & medicines/}))
  expect(await screen.findByRole('heading',{name:'Nutrients, vitamins & medicines',level:1})).toBeVisible()
  expect(screen.getByRole('heading',{name:'Why it matters'})).toBeVisible()
  expect(screen.getByRole('heading',{name:'Essentials to check first'})).toBeVisible()
  expect(screen.getByRole('heading',{name:'Common intake gaps'})).toBeVisible()
  expect(screen.getByText('52.9%')).toBeVisible()
  expect(screen.getByText('93%')).toBeVisible()
  expect(screen.getByText('Explore other nutrients, medicines & research').closest('details')).not.toHaveAttribute('open')
  fireEvent.click(screen.getByRole('link',{name:/^Choline/}))
  expect(await screen.findByRole('heading',{name:'Choline: membranes, signaling and brain research'})).toBeVisible()
  expect(screen.getByRole('navigation',{name:'Week '+week+' context'})).toBeVisible()
  expect(screen.getByText('At a glance')).toBeVisible()
  expect(screen.getByText('Worth asking your care team')).toBeVisible()
  expect(document.querySelectorAll('.skin-page details').length).toBeLessThanOrEqual(3)
 })
 it('nutrition landing places the approved highlight and priority guide before general readings',async()=>{
  render(<MemoryRouter initialEntries={['/timeline/week/22/mother/nutrition']}><App/></MemoryRouter>)
  const highlight=await screen.findByRole('region',{name:'Why it matters'})
  const guide=screen.getByRole('link',{name:/Nutrition essentials · start here/})
  const general=screen.getByRole('heading',{name:'Read about it'})
  expect(highlight.compareDocumentPosition(guide)&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  expect(guide.compareDocumentPosition(general)&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
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
