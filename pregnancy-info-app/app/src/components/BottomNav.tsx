import { Link, NavLink, useLocation } from 'react-router-dom'
import { Glyph } from './Glyph'
import { useNavigationMemory } from '../hooks/navigationContext'
const items = [
 {to:'/',label:'Home',icon:'home'},
 {to:'/timeline',label:'Journey',icon:'journey'},
 {to:'/explore',label:'Explore',icon:'explore'},
 {to:'/library',label:'Search',icon:'search'},
] as const
export function BottomNav(){const active=useNavigationMemory()?.tab;const home=useLocation().pathname==='/';return <div className="bottom-nav">{home&&<NavLink to="/urgent" className="global-urgent"><Glyph name="shield"/><span>Urgent signs &amp; getting help</span><span aria-hidden="true">›</span></NavLink>}<nav className="bottom-nav-inner" aria-label="Primary">{items.map(item=><Link key={item.to} to={item.to} state={{everwellTabReturn:true}} aria-current={active===item.to?'page':undefined} className={`nav-link${active===item.to?' active':''}`}><span className="icon" aria-hidden="true"><Glyph name={item.icon}/></span>{item.label}</Link>)}</nav></div>}
