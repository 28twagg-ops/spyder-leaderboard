import {cleanup,render,screen,fireEvent} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {afterEach,describe,it,expect} from 'vitest'
import App from '../App'
afterEach(cleanup)
describe('research pathways navigation',()=>{
 it('opens the seven pathways and original-source disclosures',async()=>{render(<MemoryRouter initialEntries={['/research-pathways']}><App/></MemoryRouter>);fireEvent.click(await screen.findByRole('link',{name:/Nutrients: adequacy and disputed benefits/}));expect(await screen.findByRole('heading',{name:'Nutrients: adequacy and disputed benefits'})).toBeVisible();expect(screen.getByText('2019 ORIP trial')).toBeVisible();expect(screen.getAllByText(/Funding & interests/).length).toBeGreaterThan(0)})
 it('connects weekly reading to development research',async()=>{render(<MemoryRouter initialEntries={['/timeline/week/22']}><App/></MemoryRouter>);fireEvent.click(await screen.findByText('Why this week matters'));expect(screen.getByRole('link',{name:/Development evidence/})).toHaveAttribute('href','/research-pathways/development')})
})
