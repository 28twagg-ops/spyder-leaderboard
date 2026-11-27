import {useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import {ReadingRow,ScreenHeading} from '../components/ReadingUI'
import {ContraceptionPreferences} from '../components/ContraceptionPreferences'
import {ContraceptionArt} from '../components/ContraceptionArt'
import {contraception,contraceptionPath} from '../data/contraception'
const {sources,sections,methods,evidencePanels,products}=contraception
type Method=typeof methods[number]
type Evidence=typeof evidencePanels[number]
const path=(topic:string)=>contraceptionPath+'/'+topic
const methodPath=(m:Method)=>path('method-'+m.slug)
const rate=(m:Method)=>m.low===m.high?m.low+'%':m.low+'–'+m.high+'%'
const unique=(ids:string[])=>[...new Set(ids)]
const filterOptions=[['all','All'],['none','No hormones'],['progestin','No estrogen (progestin)'],['combined','Estrogen + progestin']] as const
function filtered(filter:string){return methods.filter(m=>filter==='all'||filter==='none'&&m.hormones==='None'||filter==='progestin'&&m.hormones!=='None'&&!m.hormones.startsWith('Estrogen')||filter==='combined'&&m.hormones.startsWith('Estrogen'))}
function SourceLinks({ids}:{ids:string[]}){
 return <>{unique(ids).map(id=><a className="skin-footnote" href={sources.find(s=>s.id===id)?.url} key={id} target="_blank" rel="noreferrer"> [{id}]</a>)}</>
}
function References({ids}:{ids:string[]}){
 return <details className="panel disclosure contraception-references"><summary>Studies, funding &amp; limitations ({unique(ids).length})</summary>{unique(ids).map(id=>{const s=sources.find(x=>x.id===id);return s&&<article className="contraception-source" key={id} id={id}><h3 className="section-title"><a href={s.url} target="_blank" rel="noreferrer">{s.id} · {s.title}</a></h3><p>{s.design}</p><p><strong>Finding:</strong> {s.finding}</p><p><strong>Funding:</strong> {s.funding}</p><p><strong>Financial interests:</strong> {s.coi}</p><p><strong>Risk of bias &amp; applicability:</strong> {s.bias}</p><p><strong>Verification:</strong> {s.access}. {s.certainty}. {s.sponsorRole}. {s.integrity}.</p></article>})}</details>
}
function MethodDirectory(){
 const [filter,setFilter]=useState('all')
 const [expanded,setExpanded]=useState(false)
 const sorted=filtered(filter)
 const shown=filter==='all'&&!expanded?sorted.slice(0,8):sorted
 return <section className="bc-section" aria-label="Explore individual methods"><div className="bc-heading"><h2>Explore the methods</h2><span>{methods.length} options</span></div>
 <div className="bc-filters" role="group" aria-label="Method categories">{filterOptions.map(([value,label])=><button key={value} type="button" aria-pressed={filter===value} onClick={()=>setFilter(value)}>{label}</button>)}</div>
 <div className="bc-method-grid">{shown.map(m=><Link className="bc-method-tile" key={m.slug} to={methodPath(m)} aria-label={'Explore '+m.name}><ContraceptionArt kind={m.art}/><span><strong>{m.name}</strong><small>{m.short}</small></span><span className="bc-tile-arrow" aria-hidden="true">›</span></Link>)}</div>
 {filter==='all'&&<button type="button" className="bc-more" onClick={()=>setExpanded(!expanded)} aria-expanded={expanded}>{expanded?'Show common methods':'Show all '+methods.length+' methods'} <span aria-hidden="true">{expanded?'−':'+'}</span></button>}
 </section>
}
function Bar({value,max,low,interval}:{value:number;max:number;low?:number;interval?:number[]}){
 return <div className="bc-track" aria-hidden="true"><span className="bc-fill" style={{width:(low??value)/max*100+'%'}}/>{low!==undefined&&low!==value&&<span className="bc-range" style={{left:low/max*100+'%',width:(value-low)/max*100+'%'}}/>}{interval&&<span className="bc-ci" style={{left:interval[0]/max*100+'%',width:(interval[1]-interval[0])/max*100+'%'}}/>}</div>
}
function MethodComparison({compact=false}:{compact?:boolean}){
 const [filter,setFilter]=useState('all')
 const [expanded,setExpanded]=useState(false)
 const rows=filtered(filter).sort((a,b)=>a.low-b.low||a.high-b.high)
 const shown=compact&&filter==='all'&&!expanded?rows.filter(m=>m.high<1||['Combined pill','Progestin-only pill','Injection','External condom','Fertility-awareness methods'].includes(m.name)):rows
 return <section className="bc-chart" aria-label="Pregnancy prevention in everyday use"><h3>Pregnancy prevention</h3><p className="bc-chart-unit">Pregnancies per 100 users · first year, typical use</p>
 <p className="bc-takeaway">IUDs and implants have the lowest fixed estimates. The copper IUD is hormone-free. Ranges overlap and are not individual safety rankings.</p>
 <label className="bc-select-label" htmlFor={compact?'bc-overview-filter':'contraception-filter'}>Filter by hormone exposure</label><select id={compact?'bc-overview-filter':'contraception-filter'} value={filter} onChange={e=>setFilter(e.target.value)}>{filterOptions.map(([v,l])=><option key={v} value={v}>{v==='all'?'All methods':l}</option>)}</select>
 <div className="bc-bars">{shown.map(m=><Link className="bc-chart-link" aria-label={m.name+' '+rate(m)+' · '+m.tradeoff} to={methodPath(m)} key={m.slug}><div className="bc-bar-label"><strong>{m.name}</strong><span>{rate(m)}</span></div><Bar low={m.low} value={m.high} max={25}/><small>{m.short}</small></Link>)}</div>
 <div className="bc-axis"><span>0</span><span>25%</span></div>
 {compact&&filter==='all'&&<button className="bc-more" type="button" aria-expanded={expanded} onClick={()=>setExpanded(!expanded)}>{expanded?'Show key comparisons':'Compare all '+methods.length+' methods'}</button>}
 <details className="bc-note"><summary>Source &amp; interpretation <SourceLinks ids={['CT-01']}/></summary><p>CDC 2024 summary, not a head-to-head experiment. Ranges represent method variation, not confidence intervals; dashed bars represent ranges. Emergency, permanent and postpartum-only options are excluded from the annual reversible-method comparison. Lower means fewer unintended pregnancies, not fewer side effects.</p></details>
 </section>
}
const takeaways:Record<string,string>={
 'fertility-delay':'Injectable contraception showed the longest temporary delay. Pregnancy can occur before these estimates; they are not waiting periods.',
 'pain-2018':'Local anesthetic reduced median insertion pain in this randomized study. Pain differs from person to person.',
 'pain-2026':'A newer trial also found lower median pain with a block. It is a separate study, not a copper-versus-hormonal comparison.',
 'mood-echo':'This trial did not support a universal mental-health advantage for hormone-free methods. Baseline mood scores were missing.',
 'vte':'Observed clot rates were lower with the LNG IUD than with combined pills in this cohort. Wide confidence intervals and confounding matter.',
 'breast-age':'Absolute excess estimates vary greatly with age. These estimates concern oral contraceptives, not every hormonal method.'
}
const panelTitle:Record<string,string>={'fertility-delay':'Return to fertility','pain-2018':'IUD insertion pain · 2018','pain-2026':'IUD insertion pain · 2026','mood-echo':'Depressive symptoms at 12 months','vte':'Venous blood clots','breast-age':'Breast cancer · age-specific estimates'}
const panelArticle:Record<string,string>={'fertility-delay':'return-to-fertility','pain-2018':'placement-pain','pain-2026':'placement-pain','mood-echo':'mental-health','vte':'physical-long-term','breast-age':'physical-long-term'}
function EvidenceChart({panel,overview=false}:{panel:Evidence;overview?:boolean}){
 return <section className="bc-chart" aria-label={panel.title}><h3>{overview?panelTitle[panel.id]??panel.title:panel.title}</h3><p className="bc-chart-unit">{panel.unit}</p><p className="bc-takeaway">{takeaways[panel.id]}</p>
 <div className="bc-bars">{panel.rows.map(row=>{
 const match=panel.id==='vte'?row.display.match(/\(([\d.]+)–([\d.]+)\)/):null
 const interval=match?[Number(match[1]),Number(match[2])]:undefined
 return <div className="bc-evidence-row" key={row.label}><div className="bc-bar-label"><strong>{row.label}</strong><span>{row.display}</span></div><Bar value={row.high} low={row.low} max={panel.max} interval={interval}/></div>
 })}</div><div className="bc-axis"><span>0</span><span>{panel.max}</span></div>
 <details className="bc-note"><summary>Study details &amp; limitations <SourceLinks ids={panel.sources}/></summary><p>{panel.note}</p></details>
 {overview&&<Link className="bc-read" to={path(panelArticle[panel.id])}>Read the research <span aria-hidden="true">›</span></Link>}</section>
}
function EvidencePanels({topic}:{topic:string}){
 return <>{evidencePanels.filter(p=>p.topics.includes(topic)).map(p=><EvidenceChart key={p.id} panel={p}/>)}</>
}
function ComparisonTable(){
 return <details className="panel disclosure bc-table-disclosure"><summary>Side-by-side method table</summary><p className="small-copy muted">Scroll horizontally for placement, cost and fertility. Select a method to read its full profile.</p><div className="bc-table-wrap" tabIndex={0} role="region" aria-label="Scrollable birth control method comparison"><table className="bc-table"><thead><tr><th scope="col">Method</th><th scope="col">Added hormones</th><th scope="col">Pregnancy estimate</th><th scope="col">Placement</th><th scope="col">Cost example</th><th scope="col">Fertility</th></tr></thead><tbody>{methods.map(m=><tr key={m.slug}><th scope="row"><Link to={methodPath(m)}>{m.name}</Link></th><td>{m.short}</td><td>{rate(m)}</td><td>{m.placement}</td><td>{m.price}</td><td>{m.fertility}</td></tr>)}</tbody></table></div><p className="small-copy muted">US cost examples differ in billing units and are not annual price comparisons. Some in-network contraceptive care may be covered with no cost sharing. <SourceLinks ids={['CT-01','CT-07','CT-41']}/></p></details>
}
function ResearchDashboard(){
 const groups=[{title:'Fertility after stopping',ids:['fertility-delay']},{title:'Placement & pain',ids:['pain-2018','pain-2026']},{title:'Long-term health',ids:['vte','breast-age','mood-echo']}]
 return <section id="bc-research-comparisons" className="bc-section" aria-label="Research comparisons"><div className="bc-heading"><h2>Compare the evidence</h2><span>Measured outcomes</span></div><MethodComparison compact/><ComparisonTable/>{groups.map(g=><section className="bc-chart-group" key={g.title}><h2>{g.title}</h2>{evidencePanels.filter(p=>g.ids.includes(p.id)).sort((a,b)=>g.ids.indexOf(a.id)-g.ids.indexOf(b.id)).map(p=><EvidenceChart key={p.id} panel={p} overview/>)}</section>)}</section>
}
function ProductDirectory({method,full=false}:{method?:string;full?:boolean}){
 const [query,setQuery]=useState('')
 const [category,setCategory]=useState('all')
 const items=products.filter(p=>(!method||p.method===method)&&(category==='all'||p.method===category)&&[p.name,p.ingredient,p.aliases,p.summary].join(' ').toLowerCase().includes(query.trim().toLowerCase()))
 if(method&&!products.some(p=>p.method===method))return null
 return <section className="bc-section" aria-label="Product research"><div className="bc-heading"><h2>{method?'Compare specific products':'Product research library'}</h2><span>{items.length} formulations</span></div>
 {!method&&<><p className="small-copy muted">Browse US formulations, not every generic package or pharmacy listing. FDA label or authorization is distinct from confirmed supply.</p><label htmlFor="bc-product-search">Search name or ingredient</label><input id="bc-product-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Opill, Slynd, Phexxi…"/><label htmlFor="bc-product-category">Method</label><select id="bc-product-category" value={category} onChange={e=>setCategory(e.target.value)}><option value="all">All products</option>{methods.filter(m=>products.some(p=>p.method===m.slug)).map(m=><option key={m.slug} value={m.slug}>{m.name}</option>)}<option value="emergency">Emergency contraception</option></select></>}
 <div className="bc-product-list">{items.map(p=><Link key={p.id} to={path(p.id)} className="bc-product-row"><span><strong>{p.name}</strong><small>{p.ingredient} · {p.access}</small>{full&&<small>{p.summary}</small>}</span><span aria-hidden="true">›</span></Link>)}</div>{!items.length&&<p role="status">No matching products.</p>}
 {method&&<Link className="bc-read" to={path('products')}>Explore all products ›</Link>}</section>
}
function ProductArticle({product}:{product:typeof products[number]}){
 const p=product,m=methods.find(x=>x.slug===p.method)
 return <div className="bc-page stack-lg"><ScreenHeading title={p.name} subtitle={p.ingredient} back={path('products')} historyBack/>
 <div className="bc-chart"><h3>At a glance</h3><p className="bc-takeaway">{p.summary}</p><dl className="bc-facts"><dt>Access</dt><dd>{p.access}</dd><dt>Labeled duration / type</dt><dd>{p.duration}</dd><dt>Market verification</dt><dd>{p.status}</dd></dl><p className="bc-subtle"><SourceLinks ids={p.sourceIds}/></p></div>
 <article className="week-editorial-reading"><section><h2>Trade-offs &amp; safety</h2><p>{p.tradeoffs}<SourceLinks ids={p.sourceIds}/></p></section><section><h2>What studies found</h2><p>{p.evidence}<SourceLinks ids={p.sourceIds}/></p></section>{m&&<section><h2>Future fertility &amp; cost</h2><p>{m.fertility}. Product-specific all-in price and long-term outcomes may be unknown; obtain a quote and review eligibility. <SourceLinks ids={['CT-07','CT-41']}/></p></section>}</article>
 {m&&<ReadingRow to={methodPath(m)} title={'Compare '+m.name+' methods'} subtitle="Method-level research and preference comparison"/>}<References ids={p.sourceIds}/><ReadingRow to={path('products')} title="All product research"/></div>
}

function Overview(){
 return <div className="bc-page stack-lg"><ScreenHeading title="Birth control & family planning" subtitle="Preparing for pregnancy" back="/timeline/preconception" historyBack/>
 <ContraceptionPreferences/>
 <button type="button" className="bc-more" onClick={()=>document.getElementById("bc-research-comparisons")?.scrollIntoView({block:"start"})}>Jump to comparison graphs <span aria-hidden="true">↓</span></button><MethodDirectory/><ReadingRow to={path('products')} title="Explore specific brands & formulations" subtitle={products.length+' product profiles · pills, IUDs, patches, rings, gels and more'}/><ResearchDashboard/>
 <section className="bc-section"><div className="bc-heading"><h2>Read more</h2></div><div className="surface-list">{['decision-guide','after-conception','sexual-health','side-effects','emergency-postpartum'].map(id=>{const s=sections.find(x=>x.id===id)!;return <ReadingRow key={id} to={path(id)} title={s.title} subtitle={s.summary}/>})}<ReadingRow to="/explore/prep" title="More preparation for pregnancy"/></div></section>
 <References ids={sources.map(s=>s.id)}/><p className="small-copy muted">Source-linked educational research. Full independent and qualified clinical review pending.</p></div>
}
function IndividualMethod({m}:{m:Method}){
 const related=sections.find(s=>s.id===m.related)!
 const ids=unique([m.source,...m.profileSources,m.costId,'CT-41',...related.paragraphs.flatMap(p=>p[2] as string[])])
 return <div className="bc-page stack-lg"><ScreenHeading title={m.name} subtitle={m.short} back={contraceptionPath} historyBack/><div className="bc-method-hero"><ContraceptionArt kind={m.art}/><div><small>Typical-use first-year pregnancy estimate</small><strong>{rate(m)}</strong><small>per 100 users <SourceLinks ids={[m.source]}/></small></div></div>
 <section className="bc-section"><div className="bc-heading"><h2>At a glance</h2></div><div className="bc-pro-con"><div><h3>Advantages</h3><p>{m.pro}</p></div><div><h3>Trade-offs</h3><p>{m.con}</p></div></div><p className="bc-subtle">Source context <SourceLinks ids={[m.source,...m.profileSources]}/></p></section>
 <section className="bc-section"><div className="bc-heading"><h2>Cost &amp; comfort</h2></div><div className="bc-detail-grid"><div><small>US cost example</small><strong>{m.price}</strong><p>{m.priceContext} <SourceLinks ids={[m.costId,'CT-41']}/></p></div><div><small>Placement &amp; removal</small><strong>{m.art==='iud'?'Clinician procedure':m.art==='implant'?'Skin procedure':m.art==='injection'?'Injection':'No invasive placement'}</strong><p>{m.pain} <SourceLinks ids={m.art==='iud'?['CT-21','CT-22','CT-39']:['CT-03',m.source]}/></p></div></div>{m.art==='iud'&&<ReadingRow to={path('placement-pain')} title="See actual IUD pain studies" subtitle="Anesthetic options and measured pain scales"/>}</section>
 <section className="bc-section"><div className="bc-heading"><h2>Health &amp; future pregnancy</h2></div><dl className="bc-facts"><dt>Hormone exposure</dt><dd>{m.hormones}</dd><dt>Physical effects</dt><dd>{m.physical}</dd><dt>Mental &amp; sexual wellbeing</dt><dd>{m.mental}</dd><dt>Return to fertility</dt><dd>{m.fertility}</dd></dl><p className="bc-subtle">Source context <SourceLinks ids={m.profileSources}/></p><ReadingRow to={path('return-to-fertility')} title="When you're ready to conceive"/></section>
 <ProductDirectory method={m.slug}/><section className="bc-section"><div className="bc-heading"><h2>Explore the research</h2></div><div className="surface-list"><ReadingRow to={path(m.related)} title={related.title} subtitle={related.summary}/><ReadingRow to={path('physical-long-term')} title="Long-term physical effects"/><ReadingRow to={path('mental-health')} title="Mental health &amp; mood"/><ReadingRow to={path('sexual-health')} title="Sexual wellbeing"/></div></section><References ids={m.art==='iud'?unique([...ids,'CT-21','CT-22','CT-39']):ids}/><Link className="bc-read" to={contraceptionPath}>Back to all comparisons ›</Link></div>
}
function PriorityGuide(){
 const [priority,setPriority]=useState('hormone-free')
 const fixed=methods.filter(m=>m.hormones==='None'&&m.low===m.high).sort((a,b)=>a.low-b.low)
 const categories=[['hormone-free','No hormones · pregnancy prevention'],['effectiveness','Lowest pregnancy estimates'],['no-placement','Avoid device placement'],['fertility','Return to fertility'],['long-term','Mental and physical health']]
 const ranked=priority==='hormone-free'?fixed.slice(0,4):priority==='effectiveness'?methods.filter(m=>m.high<1).sort((a,b)=>a.low-b.low||a.high-b.high):[]
 return <section className="bc-section" aria-label="Compare priorities"><h2 className="section-title">Compare priorities</h2><label htmlFor="decision-priority">What matters in the comparison?</label><select id="decision-priority" value={priority} onChange={e=>setPriority(e.target.value)}>{categories.map(([v,l])=><option key={v} value={v}>{l}</option>)}</select>
 {ranked.length>0&&<><p className="small-copy muted">Ordered by typical-use pregnancy estimates only. No medical safety score. Ranges overlap. <SourceLinks ids={['CT-01']}/></p><div className="surface-list">{ranked.map(m=><ReadingRow key={m.slug} to={methodPath(m)} title={(priority==='hormone-free'?(ranked.findIndex(x=>x.low===m.low)+1)+'. ':'')+m.name+' · '+rate(m)} subtitle={m.tradeoff}/>)}</div>{priority==='hormone-free'&&<p className="small-copy muted">Diaphragm and sponge tie at 17%. Fertility awareness varies from 2–23% and cannot be ranked as a fixed estimate.</p>}</>}
 {priority==='no-placement'&&<div className="surface-list">{methods.filter(m=>!['iud','implant','injection'].includes(m.art)).map(m=><ReadingRow key={m.slug} to={methodPath(m)} title={m.name} subtitle={m.short}/>)}</div>}
 {priority==='fertility'&&<EvidencePanels topic="decision-guide"/>}
 {priority==='long-term'&&<><p>No reliable overall mental or physical health ranking exists. Compare the measured outcomes.</p><div className="surface-list"><ReadingRow to={path('mental-health')} title="Mood and depression"/><ReadingRow to={path('physical-long-term')} title="Long-term physical effects"/><ReadingRow to={path('sexual-health')} title="Sexual wellbeing"/></div></>}
 <ReadingRow to={path('placement-pain')} title="Placement pain and pain control"/></section>
}
export function ContraceptionPage(){
 const {topic}=useParams()
 if(!topic)return <Overview/>
 if(topic==='products')return <div className="bc-page stack-lg"><ScreenHeading title="Brands & formulations" subtitle="Product-level contraceptive research" back={contraceptionPath} historyBack/><ProductDirectory full/></div>
 const product=products.find(p=>p.id===topic)
 if(product)return <ProductArticle product={product}/>
 if(topic==='personal-preferences')return <div className="bc-page stack-lg"><ScreenHeading title="Your contraception priorities" subtitle="Compare features on your terms" back={contraceptionPath} historyBack/><ContraceptionPreferences/></div>
 if(topic.startsWith('method-')){const m=methods.find(x=>'method-'+x.slug===topic);if(m)return <IndividualMethod m={m}/>}
 const section=sections.find(s=>s.id===topic)
 if(!section)return <div className="stack"><ScreenHeading title="Topic not found" back={contraceptionPath} backLabel="Birth control"/></div>
 const subset=methods.filter(m=>m.topic===section.id)
 const ids=unique([...section.paragraphs.flatMap(p=>p[2] as string[]),...evidencePanels.filter(p=>p.topics.includes(section.id)).flatMap(p=>p.sources),...subset.flatMap(m=>m.profileSources)])
 return <div className="bc-page stack-lg"><ScreenHeading title={section.title} subtitle="Preparing for pregnancy" back={contraceptionPath} historyBack/><p className="editorial-deck">{section.summary}</p>
 {section.id==='compare'&&<><MethodComparison/><ComparisonTable/></>}{section.id==='decision-guide'?<PriorityGuide/>:<EvidencePanels topic={section.id}/>}
 {subset.length>0&&<section className="bc-section"><div className="bc-heading"><h2>Individual methods</h2></div><div className="bc-method-grid">{subset.map(m=><Link className="bc-method-tile" key={m.slug} to={methodPath(m)}><ContraceptionArt kind={m.art}/><span><strong>{m.name}</strong><small>{m.short}</small></span><span aria-hidden="true">›</span></Link>)}</div></section>}
 <article className="week-editorial-reading">{section.paragraphs.map(([heading,body,refs])=><section key={String(heading)}><h2>{heading}</h2><p>{body}<SourceLinks ids={refs as string[]}/></p></section>)}</article>
 {section.id==='return-to-fertility'&&<ReadingRow to="/explore/prep" title="More preconception preparation"/>}{section.id==='side-effects'&&<ReadingRow to="/urgent" title="Urgent warning signs"/>}<References ids={ids}/>
 <section className="bc-section"><div className="bc-heading"><h2>Continue exploring</h2></div><div className="surface-list"><ReadingRow to={contraceptionPath} title="All methods &amp; comparison graphs"/>{['decision-guide','placement-pain','return-to-fertility','physical-long-term','mental-health','sexual-health','after-conception'].filter(id=>id!==section.id).map(id=>{const s=sections.find(x=>x.id===id)!;return <ReadingRow key={id} to={path(id)} title={s.title}/>})}</div></section></div>
}
