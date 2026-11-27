import {cleanup,fireEvent,render,screen} from '@testing-library/react'
import {MemoryRouter,Routes,Route,useNavigate} from 'react-router-dom'
import {afterEach,describe,it,expect} from 'vitest'
import {ArticleCrossReferences} from './ArticleCrossReferences'
afterEach(cleanup)
function Target(){const navigate=useNavigate();return <><h1>Folate reading</h1><button onClick={()=>navigate(-1)}>Back</button></>}
describe('inline article links',()=>{it('opens the deeper reading and returns to the original paragraph',()=>{render(<MemoryRouter initialEntries={['/research/EV-ART-001']}><Routes><Route path="/research/EV-ART-001" element={<p><ArticleCrossReferences text="Read about folic acid before pregnancy."/></p>}/><Route path="/research/EV-ART-002" element={<Target/>}/></Routes></MemoryRouter>);fireEvent.click(screen.getByRole('link',{name:'folic acid'}));expect(screen.getByRole('heading',{name:'Folate reading'})).toBeVisible();fireEvent.click(screen.getByRole('button',{name:'Back'}));expect(screen.getByRole('link',{name:'folic acid'})).toBeVisible()})})
