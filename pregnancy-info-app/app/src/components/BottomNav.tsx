import { NavLink } from 'react-router-dom'
import { Glyph } from './Glyph'
const items = [
 {to:'/',label:'Home',icon:'home'},
 {to:'/timeline',label:'Journey',icon:'journey'},
 {to:'/explore',label:'Explore',icon:'explore'},
 {to:'/library',label:'Search',icon:'search'},
] as const
export function BottomNav(){return <div className="bottom-nav"><NavLink to="/urgent" className="global-urgent"><Glyph name="shield"/><span>Urgent signs &amp; getting help</span><span aria-hidden="true">›</span></NavLink><nav className="bottom-nav-inner" aria-label="Primary">{items.map(item=><NavLink key={item.to} to={item.to} end={item.to==='/'} className={({isActive})=>`nav-link${isActive?' active':''}`}><span className="icon" aria-hidden="true"><Glyph name={item.icon}/></span>{item.label}</NavLink>)}</nav></div>}
