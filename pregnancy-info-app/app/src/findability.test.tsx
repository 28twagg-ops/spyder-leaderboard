import {cleanup,fireEvent,render,screen,within} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {afterEach,describe,expect,it} from 'vitest'
import App from './App'
import {PREFS_KEY} from './hooks/useLocalPrefs'
import {dueDateFromAge,localCalendarDay} from './data/pregnancyCalendar'
const view=(path='/')=>render(<MemoryRouter initialEntries={[path]}><App/></MemoryRouter>)
afterEach(()=>{cleanup();localStorage.clear()})
describe('home and topic findability',()=>{
 it('does not block Home on first launch and opens detailed search directly',async()=>{
  view()
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  fireEvent.change(screen.getByLabelText('Search Everwell'),{target:{value:'stretch mark cream'}})
  fireEvent.click(screen.getByRole('button',{name:'Search topics'}))
  expect(await screen.findByRole('heading',{name:'Detailed topics'})).toBeVisible()
  const detail=within(screen.getByRole('region',{name:'Detailed topics'})).getByRole('link',{name:/Creams and moisturizers/})
  fireEvent.click(detail)
  expect(await screen.findByRole('heading',{name:'Creams and moisturizers',level:1})).toBeVisible()
  expect(within(screen.getByRole('navigation',{name:'Primary'})).getByRole('link',{name:'Search'})).toHaveAttribute('aria-current','page')
  fireEvent.click(screen.getByRole('button',{name:'Back'}))
  expect(await screen.findByLabelText('Search articles')).toHaveValue('stretch mark cream')
  expect(localStorage.getItem(PREFS_KEY)).toBeNull()
 })
 it('remembers a user-entered due date, supplies direct mother and baby routes and allows deletion',()=>{
  const first=view()
  fireEvent.click(screen.getByRole('button',{name:'Set pregnancy date'}))
  const date=dueDateFromAge(22,3,localCalendarDay())!
  fireEvent.change(screen.getByLabelText('Estimated due date'),{target:{value:date}})
  fireEvent.click(screen.getByRole('button',{name:'Save pregnancy date'}))
  expect(screen.getByRole('heading',{name:'22 weeks + 3 days'})).toBeVisible()
  expect(screen.getByRole('link',{name:/Baby this week/})).toHaveAttribute('href','/timeline/week/22?subject=baby')
  expect(screen.getByRole('link',{name:/Mother this week/})).toHaveAttribute('href','/timeline/week/22?subject=mother')
  expect(JSON.parse(localStorage.getItem(PREFS_KEY)!).pregnancyDueDate).toBe(date)
  first.unmount()
  view()
  expect(screen.getByRole('heading',{name:'22 weeks + 3 days'})).toBeVisible()
  fireEvent.click(screen.getByRole('button',{name:'Edit date'}))
  fireEvent.click(screen.getByRole('button',{name:'Remove saved pregnancy date'}))
  expect(JSON.parse(localStorage.getItem(PREFS_KEY)!).pregnancyDueDate).toBeNull()
 })
 it('offers an alternative weeks-and-days entry',()=>{
  view()
  fireEvent.click(screen.getByRole('button',{name:'Set pregnancy date'}))
  fireEvent.click(screen.getByLabelText('I know my current weeks and days'))
  fireEvent.change(screen.getByLabelText('Weeks'),{target:{value:'12'}})
  fireEvent.change(screen.getByLabelText('Days'),{target:{value:'4'}})
  fireEvent.click(screen.getByRole('button',{name:'Save pregnancy date'}))
  expect(screen.getByRole('heading',{name:'12 weeks + 4 days'})).toBeVisible()
  expect(JSON.parse(localStorage.getItem(PREFS_KEY)!).pregnancyDateSource).toBe('week-days')
 })
 it('provides a visible direct week grid and preserves the legacy week selector',()=>{
  view('/timeline/pregnancy')
  expect(document.querySelectorAll('.week-number')).toHaveLength(40)
  expect(screen.getByRole('link',{name:'Week 22'})).toHaveAttribute('href','/timeline/week/22')
  expect(screen.getByLabelText('Pregnancy week')).toBeVisible()
 })
})
