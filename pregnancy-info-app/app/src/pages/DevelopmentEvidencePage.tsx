import {ArticleCrossReferences} from '../components/ArticleCrossReferences'
import {useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import {ReadingRow,ScreenHeading} from '../components/ReadingUI'
import {developmentTopics,developmentSources} from '../data/developmentEvidence'
import {getArticle} from '../data/researchCatalog'
import {isSourceOrOutcomeHeld} from '../data/researchGate'
export function DevelopmentEvidencePage(){
 const {topicId}=useParams()
 const [query,setQuery]=useState('')
 const [sourceKind,setSourceKind]=useState('all')
 const [upfront,setUpfront]=useState('')
 const [annual,setAnnual]=useState('')
 const [years,setYears]=useState(3)
 const parsed=(s:string)=>s.trim()!==''&&Number.isFinite(Number(s))&&Number(s)>=0?Number(s):null
 const first=parsed(upfront),recurring=parsed(annual)
 const cost=first!==null&&recurring!==null?first+recurring*years:null
 const usd=(n:number)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n)
 const topic=developmentTopics.find(t=>t.id===topicId)
 if(topicId&&!topic)return <div className="stack"><ScreenHeading title="Research topic not found" back="/research-pathways" backLabel="Research pathways"/></div>
 return <div className="stack-lg"><ScreenHeading title={topic?.title??'Research pathways'} subtitle="Compare the evidence, not just the conclusion." back={topic?'/research-pathways':'/timeline'} backLabel={topic?'Research pathways':'Timeline'}/>
 <p className="small-copy muted">Research drafts · selected source checks, not clinical recommendations. No new clinical publication approval.</p>
 {!topic?<section className="surface-list" aria-label="Research pathways">{developmentTopics.map(t=><ReadingRow key={t.id} to={'/research-pathways/'+t.id} title={t.title} subtitle={t.question}/>)}</section>:<>
 <section className="phase-feature stack"><h2 className="section-title">Why it matters</h2><p><ArticleCrossReferences text={topic.why}/></p><p className="small-copy muted">{topic.question}</p></section>
 <section className="stack" aria-label="Evidence comparison"><h2 className="section-title">Compare findings</h2>{topic.refs.some(id=>developmentSources.find(s=>s.id===id)?.aliases.some(isSourceOrOutcomeHeld))?<p>Comparison held pending evidence review.</p>:topic.compare.map(([title,body])=><article className="reading-section" key={title}><h3>{title}</h3><p><ArticleCrossReferences text={body}/></p></article>)}</section>
 {topic.id==='environment'&&<section className="panel stack" aria-label="Water filter cost comparison"><h2 className="section-title">Water filter ownership cost</h2><p className="small-copy muted">Enter actual quotes for a model you are considering. Costs are not a contaminant-removal or safety score.</p><label>Purchase and installation ($)<input type="number" min="0" value={upfront} onChange={e=>setUpfront(e.target.value)} placeholder="Enter quote"/></label><label>Yearly filters and maintenance ($)<input type="number" min="0" value={annual} onChange={e=>setAnnual(e.target.value)} placeholder="Enter quote"/></label><label>Years of ownership <select value={years} onChange={e=>setYears(Number(e.target.value))}>{[1,2,3,5,10].map(n=><option key={n} value={n}>{n}</option>)}</select></label><p role="status">{cost===null?'Enter both estimates to compare costs.':usd(cost)+' total · '+usd(cost/years)+'/year average'}</p><button type="button" className="btn btn-ghost" onClick={()=>{setUpfront('');setAnnual('');setYears(3)}}>Reset cost estimates</button></section>}
 <section className="stack"><h2 className="section-title">Original sources &amp; bias</h2><label>Find in sources<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Title, funding or study type"/></label><label>Source type<select value={sourceKind} onChange={e=>setSourceKind(e.target.value)}><option value="all">All source types</option><option value="trial">Trials and trial reports</option><option value="review">Reviews</option><option value="other">Guidance, registries and media</option></select></label>{topic.refs.map(id=>{const s=developmentSources.find(x=>x.id===id);if(!s)return null;const trial=/randomized trial|trial report|trial follow-up/i.test(s.type),review=/systematic review/i.test(s.type);if(sourceKind==='trial'&&!trial||sourceKind==='review'&&!review||sourceKind==='other'&&(trial||review)||!([s.title,s.funding,s.type,s.limits].join(' ').toLowerCase().includes(query.trim().toLowerCase())))return null;const held=s.aliases.some(isSourceOrOutcomeHeld);return <details key={id} className="panel disclosure"><summary>{s.title}</summary><p className="small-copy muted">{s.type} · {s.review}</p>{held?<p>Held for evidence review; finding withheld.</p>:<p>{s.checked}</p>}<p><strong>Funding &amp; interests</strong> · {s.funding}</p><p><strong>Limitations</strong> · {s.limits}</p><p className="small-copy muted">{s.locator}</p><a href={s.url} target="_blank" rel="noreferrer">Original source ↗</a>{s.aliases.length>0&&<p className="small-copy muted">Existing registry IDs: {s.aliases.join(', ')}</p>}</details>})}</section>
 <section className="panel stack"><h2 className="section-title">What still needs research</h2><p>{topic.pending}</p></section>
 {topic.articleIds.length>0&&<section className="stack"><h2 className="section-title">Related reading</h2>{topic.articleIds.map(id=>{const a=getArticle(id);return a?<ReadingRow key={id} to={'/research/'+id} title={a.title}/>:null})}</section>}
 </>}
 <Link to="/evidence" className="btn btn-ghost">Browse the existing evidence library</Link></div>
}
