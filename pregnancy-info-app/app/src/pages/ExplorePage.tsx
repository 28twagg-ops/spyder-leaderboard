import { useParams } from 'react-router-dom'
import { BodyMap } from '../components/BodyMap'
import { DraftBanner } from '../components/DraftBanner'
import { ReadingRow, ScreenHeading, FeatureCard } from '../components/ReadingUI'
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
const collections=[{id:'preparation',title:'Preparation & pregnancy',subtitle:'Planning, nutrition, exposures and birth',icon:'leaf',domains:['prep','nutrition','environment','pregnancy','birth']},{id:'recovery-care',title:'Recovery & wellbeing',subtitle:'Postpartum and physical recovery',icon:'body',domains:['recovery']},{id:'baby-child',title:'Baby & child',subtitle:'Feeding, newborn care and development',icon:'child',domains:['feeding','infant','development','solids','child']}] as const
export function ExplorePage(){
 const {domain}=useParams()
 const collection=collections.find(c=>c.id===domain)
 if(collection)return <div className="stack-lg"><ScreenHeading title={collection.title} subtitle={collection.subtitle} back="/explore" backLabel="Explore"/><div className="surface-list">{collection.domains.map(id=><ReadingRow key={id} to={`/explore/${id}`} title={domainLabels[id]} subtitle={groups.find(g=>g.id===id)?.desc}/>)}</div><DraftBanner status="research_only"/></div>
 if(domain==='body')return <div className="stack-lg"><ScreenHeading title="Your body" subtitle="Choose a body area to find related reading." back="/explore" backLabel="Explore"/><BodyMap/><DraftBanner status="research_only"/></div>
 if(domain&&listDomains().includes(domain))return <div className="stack-lg"><ScreenHeading title={domainLabels[domain]??domain} back={`/explore/${collections.find(c=>c.domains.some(id=>id===domain))?.id??''}`} backLabel="Topics" subtitle="Choose a topic to read the research."/><div className="surface-list">{articlesByDomain(domain).map(a=><ReadingRow key={a.id} to={`/research/${a.id}`} title={a.title} subtitle="Research draft"/>)}</div><DraftBanner status="research_only"/></div>
 if(domain)return <div className="stack-lg"><ScreenHeading title="Topic not found" back="/explore" backLabel="Explore"/><p>Choose another topic from the explorer.</p></div>
 return <div className="stack-lg"><ScreenHeading title="Explore" subtitle="Find the information that matters to you."/><FeatureCard to="/explore/body" title="Your body" subtitle="Interactive topic map" icon="body"/><section className="stack"><h2 className="section-title">Topics</h2><div className="explore-collections">{collections.map(c=><FeatureCard key={c.id} to={`/explore/${c.id}`} title={c.title} subtitle={c.subtitle} icon={c.icon}/>)}</div></section><section className="stack"><h2 className="section-title">Go deeper</h2><div className="surface-list"><ReadingRow to="/visuals" title="Visual references" subtitle="Original illustrations and figures"/><ReadingRow to="/evidence" title="Research & sources" subtitle="Scientific records and funding"/></div></section><DraftBanner status="research_only"/></div>
}
