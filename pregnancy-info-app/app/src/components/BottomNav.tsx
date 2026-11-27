import { Link } from 'react-router-dom'
import { Glyph } from './Glyph'
import { useNavigationMemory } from '../hooks/navigationContext'
const items = [
 {to:'/',label:'Home',icon:'home'},
 {to:'/timeline',label:'Timeline',icon:'journey'},
 {to:'/explore',label:'Explore',icon:'explore'},
 {to:'/library',label:'Search',icon:'search'},
] as const
export function BottomNav(){const active=useNavigationMemory()?.tab;return <div className="bottom-nav"><nav className="bottom-nav-inner" aria-label="Primary">{items.map(item=><Link key={item.to} to={item.to} state={{everwellTabReturn:true}} aria-current={active===item.to?'page':undefined} className={`nav-link${active===item.to?' active':''}`}><span className="icon" aria-hidden="true"><Glyph name={item.icon}/></span>{item.label}</Link>)}</nav></div>}
