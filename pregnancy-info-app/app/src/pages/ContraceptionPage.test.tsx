import {cleanup,fireEvent,render,screen,within} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {afterEach,describe,expect,it} from 'vitest'
import App from '../App'
afterEach(()=>{cleanup();localStorage.clear()})
describe('preconception contraception navigation',()=>{
 it('opens from preparation and filters comparison without ranking individual suitability',async()=>{
  render(<MemoryRouter initialEntries={['/timeline/preconception']}><App/></MemoryRouter>)
  fireEvent.click(screen.getByRole('link',{name:/Birth control & preparing for pregnancy/}))
  fireEvent.click(await screen.findByRole('link',{name:/Compare every reversible method/}))
  expect(await screen.findByRole('heading',{name:'Compare birth control methods'})).toBeVisible()
  fireEvent.change(screen.getByLabelText('Filter by hormone exposure'),{target:{value:'none'}})
  expect(screen.getByRole('link',{name:/Copper IUD 0.8%/})).toBeVisible()
  expect(screen.queryByRole('link',{name:/LNG IUD 0.1–0.4%/})).not.toBeInTheDocument()
 })
 it('finds the copper IUD in Search and goes back to the original query',async()=>{
  render(<MemoryRouter initialEntries={['/library']}><App/></MemoryRouter>)
  fireEvent.change(screen.getByLabelText('Search articles'),{target:{value:'copper iud'}})
  fireEvent.click(within(screen.getByRole('region',{name:'Birth control results'})).getByRole('link',{name:/Copper IUD: no added hormones/}))
  expect(await screen.findByRole('heading',{name:'Copper IUD: no added hormones'})).toBeVisible()
  fireEvent.click(screen.getByRole('button',{name:'Back'}))
  expect(await screen.findByLabelText('Search articles')).toHaveValue('copper iud')
 })
})
