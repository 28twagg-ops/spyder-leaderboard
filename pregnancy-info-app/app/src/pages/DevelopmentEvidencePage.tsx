import {Link,useParams} from 'react-router-dom'
import {ReadingRow,ScreenHeading} from '../components/ReadingUI'
import {developmentTopics,developmentSources} from '../data/developmentEvidence'
import {getArticle} from '../data/researchCatalog'
import {isSourceOrOutcomeHeld} from '../data/researchGate'
export function DevelopmentEvidencePage(){
 const {topicId}=useParams()
 const topic=developmentTopics.find(t=>t.id===topicId)
 if(topicId&&!topic)return <div className="stack"><ScreenHeading title="Research topic not found" back="/research-pathways" backLabel="Research pathways"/></div>
 return <div className="stack-lg"><ScreenHeading title={topic?.title??'Research pathways'} subtitle="Compare the evidence, not just the conclusion." back={topic?'/research-pathways':'/timeline'} backLabel={topic?'Research pathways':'Timeline'}/>
 <p className="small-copy muted">Research drafts · selected source checks, not clinical recommendations. No new clinical publication approval.</p>
 {!topic?<section className="surface-list" aria-label="Seven research pathways">{developmentTopics.map(t=><ReadingRow key={t.id} to={'/research-pathways/'+t.id} title={t.title} subtitle={t.question}/>)}</section>:<>
 <section className="phase-feature stack"><h2 className="section-title">Why it matters</h2><p>{topic.why}</p><p className="small-copy muted">{topic.question}</p></section>
 <section className="stack" aria-label="Evidence comparison"><h2 className="section-title">Compare findings</h2>{topic.compare.map(([title,body])=><article className="reading-section" key={title}><h3>{title}</h3><p>{body}</p></article>)}</section>
 <section className="stack"><h2 className="section-title">Original sources &amp; bias</h2>{topic.refs.map(id=>{const s=developmentSources.find(x=>x.id===id);if(!s)return null;const held=s.aliases.some(isSourceOrOutcomeHeld);return <details key={id} className="panel disclosure"><summary>{s.title}</summary><p className="small-copy muted">{s.type} · {s.review}</p>{held?<p>Held for evidence review; finding withheld.</p>:<p>{s.checked}</p>}<p><strong>Funding &amp; interests</strong> · {s.funding}</p><p><strong>Limitations</strong> · {s.limits}</p><p className="small-copy muted">{s.locator}</p><a href={s.url} target="_blank" rel="noreferrer">Original source ↗</a>{s.aliases.length>0&&<p className="small-copy muted">Existing registry IDs: {s.aliases.join(', ')}</p>}</details>})}</section>
 <section className="panel stack"><h2 className="section-title">What still needs research</h2><p>{topic.pending}</p></section>
 {topic.articleIds.length>0&&<section className="stack"><h2 className="section-title">Related reading</h2>{topic.articleIds.map(id=>{const a=getArticle(id);return a?<ReadingRow key={id} to={'/research/'+id} title={a.title}/>:null})}</section>}
 </>}
 <Link to="/evidence" className="btn btn-ghost">Browse the existing evidence library</Link></div>
}
