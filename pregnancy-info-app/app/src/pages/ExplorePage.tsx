import { Link,useParams } from 'react-router-dom'
import { QuickTopics } from '../components/QuickTopics'
import { BodyMap } from '../components/BodyMap'
import { ReadingRow, ScreenHeading, FeatureCard } from '../components/ReadingUI'
import { articlesByDomain, listDomains } from '../data/researchCatalog'
import { readingOverview } from '../data/readingOverviews'
import { domainLabels } from '../data/browseState'
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
export function ExplorePage({currentWeek=null}:{currentWeek?:number|null}={}){
 const {domain}=useParams()
 const collection=collections.find(c=>c.id===domain)
 if(collection)return <div className="stack-lg"><ScreenHeading title={collection.title} subtitle={collection.subtitle} back="/explore" backLabel="Explore"/><div className="surface-list">{collection.id==='baby-child'&&<ReadingRow to="/research-pathways/child-health" title="Infant feeding, eczema & allergy" subtitle="Compare studies and limitations"/>}{collection.domains.map(id=><ReadingRow key={id} to={`/explore/${id}`} title={domainLabels[id]} subtitle={groups.find(g=>g.id===id)?.desc}/>)}</div></div>
 if(domain==='body')return <div className="stack-lg"><ScreenHeading title="Your body" subtitle="Choose a body area to find related reading." back="/explore" backLabel="Explore"/><BodyMap/></div>
 if(domain&&listDomains().includes(domain))return <div className="stack-lg"><ScreenHeading title={domainLabels[domain]??domain} back="/explore" backLabel="All topics" historyBack subtitle="Choose a topic to read the research."/><div className="surface-list">{domain==='environment'&&<ReadingRow to="/research-pathways/environment" title="Compare household exposures" subtitle="Water filters, plastics and research"/>}{domain==='prep'&&<ReadingRow to="/contraception" title="Birth control & preparing for pregnancy" subtitle="Hormone-free and hormonal methods, fertility and research"/>}{articlesByDomain(domain).map(a=><ReadingRow key={a.id} to={`/research/${a.id}`} title={a.title} subtitle={readingOverview(a.id)?.why??"Explore this topic"}/>)}</div></div>
 if(domain)return <div className="stack-lg"><ScreenHeading title="Topic not found" back="/explore" backLabel="Explore"/><p>Choose another topic from the explorer.</p></div>
 return <div className="stack-lg"><ScreenHeading title="Explore" subtitle="Browse by subject, not by pregnancy week."/><Link className="explore-search-link" to="/library"><span>Search every article and topic</span><span aria-hidden="true">›</span></Link><ReadingRow to="/research-pathways" title="Compare research" subtitle="Original studies, funding and conflicting findings"/><ReadingRow to="/research-pathways/folklore" title="Traditional practices &amp; folklore" subtitle="Old beliefs, natural approaches and original evidence"/><section className="stack"><h2 className="section-title">Popular topics</h2><QuickTopics week={currentWeek}/>{currentWeek===null&&<p className="small-copy muted">Shared pregnancy topics use a reference week when no date is set.</p>}</section><section className="stack"><h2 className="section-title">All subjects</h2><div className="surface-list">{groups.map(g=><ReadingRow key={g.id} to={'/explore/'+g.id} title={domainLabels[g.id]} subtitle={g.desc}/>)}</div></section><FeatureCard to="/explore/body" title="Your body" subtitle="Interactive topic map" icon="body"/><section className="stack"><h2 className="section-title">Research library</h2><div className="surface-list"><ReadingRow to="/visuals" title="Visual references" subtitle="Original illustrations and figures"/><ReadingRow to="/evidence" title="Research & sources" subtitle="Scientific records and funding"/></div></section></div>
}
