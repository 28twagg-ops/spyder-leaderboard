import {cleanup,render,screen,fireEvent} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {afterEach,describe,it,expect} from 'vitest'
import App from '../App'
afterEach(cleanup)
describe('research pathways navigation',()=>{
 it('opens infant evidence and filters original trial records',async()=>{render(<MemoryRouter initialEntries={['/research-pathways/child-health']}><App/></MemoryRouter>);expect(await screen.findByRole('heading',{name:'Infant feeding, eczema & allergy'})).toBeVisible();fireEvent.change(screen.getByLabelText('Find in sources'),{target:{value:'BEEP'}});expect(screen.getByText('BEEP randomized trial: emollient from birth and eczema prevention')).toBeInTheDocument();expect(screen.queryByText('BLISS: infant growth and overweight')).not.toBeInTheDocument()})
 it('calculates entered water filter cost without guessing prices',async()=>{render(<MemoryRouter initialEntries={['/research-pathways/environment']}><App/></MemoryRouter>);await screen.findByRole('heading',{name:'Water filter ownership cost'});fireEvent.change(screen.getByLabelText('Purchase and installation ($)'),{target:{value:'300'}});fireEvent.change(screen.getByLabelText('Yearly filters and maintenance ($)'),{target:{value:'120'}});expect(screen.getByText('$660 total · $220/year average')).toBeVisible();fireEvent.click(screen.getByRole('button',{name:'Reset cost estimates'}));expect(screen.getByText('Enter both estimates to compare costs.')).toBeVisible()})

 it('opens the research pathways and original-source disclosures',async()=>{render(<MemoryRouter initialEntries={['/research-pathways']}><App/></MemoryRouter>);fireEvent.click(await screen.findByRole('link',{name:/Nutrients: adequacy and disputed benefits/}));expect(await screen.findByRole('heading',{name:'Nutrients: adequacy and disputed benefits'})).toBeVisible();expect(screen.getByText('2019 ORIP trial')).toBeVisible();expect(screen.getAllByText(/Funding & interests/).length).toBeGreaterThan(0)})
 it('connects weekly reading to development research',async()=>{render(<MemoryRouter initialEntries={['/timeline/week/22']}><App/></MemoryRouter>);fireEvent.click(await screen.findByText('Why this week matters'));expect(screen.getByRole('link',{name:/Development evidence/})).toHaveAttribute('href','/research-pathways/development')})
})
