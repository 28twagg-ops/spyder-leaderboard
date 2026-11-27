import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Glyph } from './Glyph'
export function ScreenHeading({title,subtitle,back,backLabel='Back',action}:{title:string;subtitle?:string;back?:string;backLabel?:string;action?:ReactNode}){
 return <header className="screen-heading">{back&&<Link className="reader-back" to={back}><Glyph name="back"/>{backLabel}</Link>}<div className="editorial-section-head"><h1 className="page-title">{title}</h1>{action}</div>{subtitle&&<p className="muted screen-subtitle">{subtitle}</p>}</header>
}
export function ReadingRow({to,title,subtitle}:{to:string;title:string;subtitle?:string}){return <Link className="reading-row" to={to}><span><strong>{title}</strong>{subtitle&&<small>{subtitle}</small>}</span><span aria-hidden="true">›</span></Link>}

export function FeatureCard({to,title,subtitle,icon}:{to:string;title:string;subtitle:string;icon:Parameters<typeof Glyph>[0]['name']}){
 return <Link className="feature-link" to={to}><span className="journey-emblem"><Glyph name={icon}/></span><span><strong>{title}</strong><small>{subtitle}</small></span><span aria-hidden="true">›</span></Link>
}
