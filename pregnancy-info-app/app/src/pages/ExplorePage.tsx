import { Link, useParams } from 'react-router-dom'
import { BodyMap } from '../components/BodyMap'
import { DraftBanner } from '../components/DraftBanner'
import { Glyph } from '../components/Glyph'
import { ReadingRow, ScreenHeading } from '../components/ReadingUI'
import { articlesByDomain, listDomains } from '../data/researchCatalog'
import { domainLabels } from './LibraryPage'
const groups=[
 {id:'prep',icon:'leaf',desc:'Preparing together'},
 {id:'nutrition',icon:'leaf',desc:'Food & supplements'},
 {id:'environment',icon:'leaf',desc:'Home & workplace'},
 {id:'pregnancy',icon:'journey',desc:'Pregnancy changes'},
 {id:'birth',icon:'body',desc:'Labor & delivery'},
 {id:'recovery',icon:'body',desc:'Healing & wellbeing'},
 {id:'feeding',icon:'child',desc:'Milk & formula'},
 {id:'infant',icon:'child',desc:'Early care & sleep'},
 {id:'development',icon:'child',desc:'Growth & play'},
 {id:'solids',icon:'leaf',desc:'Food introduction'},
 {id:'child',icon:'child',desc:'Health & prevention'}
] as const
export function ExplorePage(){
 const {domain}=useParams()
 if(domain==='body')return <div className="stack-lg"><ScreenHeading title="Your body" subtitle="Choose a body area to find related reading." back="/explore" backLabel="Explore"/><BodyMap/><DraftBanner status="research_only"/></div>
 if(domain&&listDomains().includes(domain))return <div className="stack-lg"><ScreenHeading title={domainLabels[domain]??domain} back="/explore" backLabel="Explore" subtitle="Choose a topic to read the research."/><div className="surface-list">{articlesByDomain(domain).map(a=><ReadingRow key={a.id} to={`/research/${a.id}`} title={a.title} subtitle="Research draft"/>)}</div><DraftBanner status="research_only"/></div>
 return <div className="stack-lg"><ScreenHeading title="Explore" subtitle="Find the information that matters to you."/><Link to="/explore/body" className="feature-link"><span className="journey-emblem"><Glyph name="body"/></span><span><strong>Your body</strong><small>Interactive topic map</small></span><span aria-hidden="true">›</span></Link><section className="stack"><h2 className="section-title">Topics</h2><div className="explore-grid">{groups.map(g=><Link className="discover-tile" key={g.id} to={`/explore/${g.id}`}><Glyph name={g.icon}/><strong>{domainLabels[g.id]}</strong><span aria-hidden="true">›</span><small>{g.desc}</small></Link>)}</div></section><section className="stack"><h2 className="section-title">Go deeper</h2><div className="surface-list"><ReadingRow to="/visuals" title="Visual references" subtitle="Original illustrations and figures"/><ReadingRow to="/evidence" title="Research & sources" subtitle="Scientific records and funding"/></div></section><DraftBanner status="research_only"/></div>
}
