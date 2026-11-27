import { NavLink } from 'react-router-dom'
const items = [
 {to:'/',label:'Today',path:'M3 10 12 3l9 7v10h-6v-6H9v6H3z'},
 {to:'/timeline',label:'Timeline',path:'M6 3v18M6 6h13M6 12h10M6 18h13'},
 {to:'/explore',label:'Explore',path:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4 5-2 6-6 2 2-6z'},
 {to:'/evidence',label:'Evidence',path:'M4 20V4h16M8 16v-5m4 5V7m4 9v-3m4 3V6'},
 {to:'/library',label:'Library',path:'M4 4h5v16H4zM10 4h5v16h-5zM16 5l4-1 3 15-4 1z'}
] as const
export function BottomNav(){return <nav className="bottom-nav" aria-label="Primary"><div className="bottom-nav-inner">{items.map(item=><NavLink key={item.to} to={item.to} end={item.to==='/'} className={({isActive})=>`nav-link${isActive?' active':''}`}><span className="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round"><path d={item.path}/></svg></span>{item.label}</NavLink>)}</div></nav>}
