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
 it('shows eight distinct visual topics per subject',()=>{
  view('/timeline/week/22')
  expect(screen.getByRole('heading',{name:'Week 22'})).toBeVisible()
  const nav=screen.getByRole('navigation',{name:'Development topics'})
  expect(within(nav).getAllByRole('link')).toHaveLength(8)
  expect(within(nav).getByRole('link',{name:/Placenta/})).toBeVisible()
  const subject=screen.getByRole('group',{name:'Whose changes are shown?'})
  fireEvent.click(within(subject).getByRole('button',{name:/Mother/}))
  expect(within(nav).getAllByRole('link')).toHaveLength(8)
  expect(within(nav).getByRole('link',{name:/Skin.*stretch marks/i})).toHaveAttribute('href',root)
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
  expect(screen.getByText(/Manufacturer supplied both lotions/)).toBeVisible()
  expect(screen.getByRole('link',{name:/Source 1:/})).toHaveAttribute('href','https://pubmed.ncbi.nlm.nih.gov/18715434/')
  expect(screen.getByRole('note',{name:'Content status'})).toBeVisible()
 })
 it('shows funding groups and explicit limitations for collagen',async()=>{
  view(root+'/prevention/collagen-and-supplements')
  expect(await screen.findByRole('table')).toBeVisible()
  expect(screen.getByText('Not pharma-funded')).toBeVisible()
  expect(screen.getByText('Pregnancy prevention remains unproven.')).toBeVisible()
  expect(screen.getByText(/Different subgroup significance does not prove a funding effect/)).toBeVisible()
 })
 it('preserves the contextual baby topic and reference return',async()=>{
  view('/timeline/week/22')
  fireEvent.click(within(screen.getByRole('navigation',{name:'Development topics'})).getByRole('link',{name:/Movement/}))
  expect(await screen.findByRole('heading',{name:'Movement',level:1})).toBeVisible()
  fireEvent.click(screen.getByRole('link',{name:/Muscles are developing/}))
  expect(await screen.findByRole('heading',{name:'Muscles are developing',level:1})).toBeVisible()
  fireEvent.click(screen.getByText('Studies & references'))
  fireEvent.click(screen.getByRole('link',{name:/Foetus skeleton/}))
  expect(await screen.findByRole('heading',{name:'Foetus skeleton',level:1})).toBeVisible()
  fireEvent.click(screen.getByRole('button',{name:'Back'}))
  expect(await screen.findByRole('heading',{name:'Muscles are developing'})).toBeVisible()
 })
 it('applies the approved candidate to weeks 1–40 with a birth transition',async()=>{
  view('/timeline/week/1?subject=baby')
  expect(screen.getByRole('heading',{name:'Before conception'})).toBeVisible()
  expect(screen.queryByRole('heading',{name:'How big is your baby?'})).not.toBeInTheDocument()
  for(let week=2;week<=40;week++){fireEvent.click(screen.getByRole('link',{name:'Next'}));expect(await screen.findByRole('heading',{name:'Week '+week})).toBeVisible()}
  expect(screen.queryByRole('link',{name:'Next week'})).not.toBeInTheDocument()
  expect(screen.getByRole('link',{name:'Birth & newborn'})).toHaveAttribute('href','/timeline/shared_birth')
 },15000)
 it('preserves the baby size view when moving between pilot weeks',async()=>{
  view('/timeline/week/22?subject=baby')
  expect(screen.getByText('10.9 in')).toBeVisible()
  fireEvent.click(screen.getByRole('link',{name:'Next week'}))
  expect(await screen.findByRole('heading',{name:'Week 23'})).toBeVisible()
  expect(screen.getByText('11.4 in')).toBeVisible()
  expect(screen.getByRole('button',{name:/Baby/})).toHaveAttribute('aria-pressed','true')
 })
 it('separates changing weekly features from shared readings',async()=>{
  view('/timeline/week/22?subject=baby')
  const focus=screen.getByRole('navigation',{name:"This week's featured topics"})
  expect(within(focus).getByRole('link',{name:/Fine hair covers the body/})).toBeVisible()
  expect(screen.getByRole('heading',{name:'Ongoing topics · Weeks 20–27'})).toBeVisible()
  fireEvent.click(screen.getByRole('link',{name:'Next week'}))
  expect(await screen.findByRole('heading',{name:'Week 23'})).toBeVisible()
  expect(within(screen.getByRole('navigation',{name:"This week's featured topics"})).getByRole('link',{name:/Lower airways develop/})).toBeVisible()
  expect(within(screen.getByRole('navigation',{name:"This week's featured topics"})).queryByRole('link',{name:/Fine hair covers the body/})).not.toBeInTheDocument()
  expect(within(screen.getByRole('navigation',{name:'Development topics'})).getAllByRole('link')).toHaveLength(8)
 })
 it.each<[number,string,string]>([[20,'Banana','Swallowing before birth'],[21,'Carrot','Hearing and familiar voices'],[24,'Corn on the cob','The developing airway tree'],[25,'Zucchini','Where blood cells form'],[26,'Cucumber','Developing eyes'],[27,'Head of cauliflower','Rapid brain growth'],[28,'Eggplant','A changing heartbeat'],[29,'Butternut squash','Nervous-system control'],[30,'Cabbage','Developing visual focus'],[31,'Coconut','Building mineral reserves'],[4,"Poppy seed","Implantation in the uterine lining"],[5,"Sesame seed","Early brain and spinal cord"],[6,"Pea","Limb buds"],[7,"Grape","Eye and ear structures"],[8,"Raspberry","Hands and feet take shape"],[9,"Strawberry","Elbows and toes"],[10,"Apricot","The intestines change shape"],[11,"Fig","Fingers and early nails"],[12,"Plum","Developing skeleton"],[13,"Peach","Blood formation and circulation"],[14,"Kiwi fruit","Developing tooth buds"],[15,"Apple","The developing skeleton"],[16,"Avocado","Facial and limb movements"],[17,"Pomegranate","Sucking movements"],[18,"Bell pepper","Touch, sound and oral reflexes"],[19,"Beef tomato","Hearing and the nervous system"],[32,"Bunch of celery","Practice breathing movements"],[33,"Pineapple","Flexible skull structures"],[34,"Cantaloupe melon","A curled position in the uterus"],[35,"Honeydew melon","Fat under the skin"],[36,"Romaine lettuce","Sucking and feeding coordination"],[37,"Leek","Early term versus full term"],[38,"Stick of rhubarb","Fine hair thins"],[39,"Small watermelon","Changing skin and vernix"],[40,"Pumpkin","From placenta to newborn life"]])('week %s has its own fetal features and size',async(week,food,feature)=>{
  view('/timeline/week/'+week+'?subject=baby')
  expect(await screen.findByRole('heading',{name:'Week '+week})).toBeVisible()
  expect(screen.getByText(food.toLowerCase())).toBeVisible()
  expect(within(screen.getByRole('navigation',{name:"This week's featured topics"})).getByRole('link',{name:new RegExp(feature)})).toBeVisible()
  expect(screen.getByRole('heading',{name:week>=35?'Ongoing topics · Weeks 35–40':week>=28?'Ongoing topics · Weeks 28–34':week>=20?'Ongoing topics · Weeks 20–27':week>=14?'Ongoing topics · Weeks 14–19':week>=5?'Ongoing topics · Weeks 5–13':'Ongoing topics · Weeks 1–4'})).toBeVisible()
 })
 it('preserves Mother selection into the third trimester and opens newborn preparation',async()=>{
  view('/timeline/week/27?subject=mother')
  fireEvent.click(screen.getByRole('link',{name:'Next week'}))
  expect(await screen.findByRole('heading',{name:'Week 28'})).toBeVisible()
  expect(screen.getByText('THIRD TRIMESTER')).toBeVisible()
  expect(screen.getByRole('button',{name:/Mother/})).toHaveAttribute('aria-pressed','true')
  expect(screen.getByRole('link',{name:/Feeding choices.*Shared newborn research/})).toBeVisible()
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
