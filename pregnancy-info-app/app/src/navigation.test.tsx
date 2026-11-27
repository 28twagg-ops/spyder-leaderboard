import { cleanup,fireEvent,render,screen,within,waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach,beforeEach,describe,expect,it } from 'vitest'
import App from './App'
import { articles,listDomains,articlesByDomain } from './data/researchCatalog'

function view(path:string){return render(<MemoryRouter initialEntries={[path]}><App/></MemoryRouter>)}
const primary=()=>within(screen.getByRole('navigation',{name:'Primary'}))
beforeEach(()=>localStorage.clear())
afterEach(()=>{cleanup();localStorage.clear();document.documentElement.scrollTop=0;document.body.scrollTop=0})

describe('contextual navigation and privacy',()=>{
 it('preserves query and active search tab through an article and Back',async()=>{
  view('/library')
  fireEvent.change(screen.getByLabelText('Search articles'),{target:{value:'EV-ART-001'}})
  fireEvent.click(screen.getByRole('link',{name:/Getting ready for pregnancy/}))
  expect(await screen.findByRole('heading',{name:'Getting ready for pregnancy'})).toBeInTheDocument()
  expect(primary().getByRole('link',{name:'Search'})).toHaveAttribute('aria-current','page')
  fireEvent.click(screen.getByRole('button',{name:'Back'}))
  expect(await screen.findByLabelText('Search articles')).toHaveValue('EV-ART-001')
  expect(localStorage.getItem('everwell.local.prefs.v1')).toBeNull()
 })
 it('keeps the journey tab active and urgent help returns to its origin',async()=>{
  view('/timeline/week/22')
  expect(primary().getByRole('link',{name:'Journey'})).toHaveAttribute('aria-current','page')
  fireEvent.click(screen.getByRole('link',{name:/Urgent signs & getting help/}))
  expect(await screen.findByRole('heading',{name:'Urgent signs & getting help'})).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button',{name:'Back'}))
  expect(await screen.findByRole('heading',{name:'Week 22'})).toBeInTheDocument()
 })
 it('retains selected body region through reading and supports marker selection',async()=>{
  view('/explore/body')
  fireEvent.click(screen.getByRole('button',{name:/Core & abdomen/}))
  expect(screen.getByRole('button',{name:/Core & abdomen/})).toHaveAttribute('aria-pressed','true')
  fireEvent.click(screen.getByRole('link',{name:/Core strength and diastasis recti/}))
  expect(primary().getByRole('link',{name:'Explore'})).toHaveAttribute('aria-current','page')
  fireEvent.click(screen.getByRole('button',{name:'Back'}))
  expect(await screen.findByRole('button',{name:/Core & abdomen/})).toHaveAttribute('aria-pressed','true')
  fireEvent.click(document.querySelector('[data-region="pelvic"]')!)
  expect(screen.getByRole('button',{name:/Pelvic floor/})).toHaveAttribute('aria-pressed','true')
 })
 it('retains filters per evidence collection and withholds held estimates',async()=>{
  view('/evidence/outcomes')
  await screen.findByLabelText('Search records or sources')
  fireEvent.change(screen.getByLabelText('Review hold'),{target:{value:'held'}})
  expect(screen.getAllByText('Numerical results withheld pending review.').length).toBeGreaterThan(0)
  expect(screen.queryByText(/Measure:.*Estimate:/)).not.toBeInTheDocument()
  fireEvent.change(screen.getByLabelText('Record type'),{target:{value:'nutrients'}})
  expect(await screen.findByRole('heading',{name:'Nutrition references'})).toBeInTheDocument()
  expect(screen.getByLabelText('Review hold')).toHaveValue('all')
  fireEvent.change(screen.getByLabelText('Record type'),{target:{value:'outcomes'}})
  expect(await screen.findByLabelText('Review hold')).toHaveValue('held')
 })
 it('clears transient search and reference filters when preferences are cleared',async()=>{
  view('/library')
  fireEvent.change(screen.getByLabelText('Search articles'),{target:{value:'local-only-test'}})
  fireEvent.click(screen.getByRole('link',{name:/Visual references/}))
  fireEvent.change(await screen.findByLabelText('Search visual references'),{target:{value:'pelvic floor'}})
  fireEvent.click(primary().getByRole('link',{name:'Home'}))
  fireEvent.click(await screen.findByRole('button',{name:'Browse without a phase'}))
  fireEvent.click(screen.getByRole('link',{name:'Settings'}))
  fireEvent.click(screen.getByRole('button',{name:'Clear local preferences'}))
  fireEvent.click(screen.getByRole('button',{name:'Confirm clear'}))
  fireEvent.click(primary().getByRole('link',{name:'Search'}))
  expect(await screen.findByLabelText('Search articles')).toHaveValue('')
  fireEvent.click(screen.getByRole('link',{name:/Visual references/}))
  expect(await screen.findByLabelText('Search visual references')).toHaveValue('')
  expect(localStorage.getItem('everwell.local.prefs.v1')).toBeNull()
 })
 it.each([['/unknown','Page not found'],['/explore/missing','Topic not found'],['/timeline/week/99','Reading period not found'],['/timeline/preconception/INVALID','Reading period not found'],['/evidence/unknown','Collection not found'],['/visuals/unknown','Reference not found']])('handles invalid destination %s explicitly',async(path,heading)=>{
  view(path)
  expect(await screen.findByRole('heading',{name:heading})).toBeInTheDocument()
  expect(screen.getByRole('link',{name:/Urgent signs & getting help/})).toBeInTheDocument()
 })
 it('returns to Search from a direct article link',async()=>{
  view('/research/EV-ART-001')
  fireEvent.click(screen.getByRole('button',{name:'Back'}))
  expect(await screen.findByRole('heading',{name:'Search'})).toBeInTheDocument()
 })
 it('links all 11 domains and all 52 articles through Explore',()=>{
  view('/explore')
  const domains=new Set<string>()
  for(const title of ['Preparation & pregnancy','Recovery & wellbeing','Baby & child']){
   fireEvent.click(screen.getByRole('link',{name:new RegExp(title)}))
   for(const link of document.querySelectorAll('.reading-row'))domains.add(link.getAttribute('href')!.split('/').at(-1)!)
   fireEvent.click(primary().getByRole('link',{name:'Explore'}))
  }
  expect([...domains].sort()).toEqual(listDomains())
  const ids=new Set<string>()
  for(const domain of domains){cleanup();view('/explore/'+domain);for(const article of articlesByDomain(domain)){expect(document.querySelector('a[href="/research/'+article.id+'"]')).toBeInTheDocument();ids.add(article.id)}}
  expect(ids.size).toBe(articles.length)
 })
 it('restores a list position on return from reading',async()=>{
  view('/library')
  document.documentElement.scrollTop=240
  fireEvent.scroll(window)
  fireEvent.click(screen.getByRole('link',{name:/Getting ready for pregnancy/}))
  expect(document.documentElement.scrollTop).toBe(0)
  fireEvent.click(screen.getByRole('button',{name:'Back'}))
  await waitFor(()=>expect(document.documentElement.scrollTop).toBe(240))
 })
})
