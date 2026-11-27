import { Link,useParams } from 'react-router-dom'
import {ScreenHeading,ReadingRow} from '../components/ReadingUI'
import {DraftBanner} from '../components/DraftBanner'
import {TopicArt} from './Week22Pilot'
import {Footnote,SourceDisclosure,NumericRecords} from './SkinTopicPage'
import {getArticle,gestationalWeeks} from '../data/researchCatalog'
import {getEvidenceSource,hasEvidenceHold,outcomes} from '../data/evidenceCatalog'
import {sourceAliasHeld} from '../data/skinTopicMap'
import {getVisual} from '../data/visualCatalog'
import {week22Topics} from '../data/week22TopicMap'
const base='/timeline/week/22'
function StudyComparison({id}:{id:string}){
 if(id==='omega-3'||id==='growth-research'){
  const row=outcomes.find(x=>x.id==='P5-E13')
  if(!row||hasEvidenceHold(row)||sourceAliasHeld(row.source_id)||sourceAliasHeld('S082'))return <p>Study comparison held.</p>
  return <section className="skin-finding"><small className="pilot-kicker">ORIP · RANDOMIZED TRIAL · 2019</small><h2 className="section-title">Birth before 34 weeks</h2><div className="skin-results"><div><small>Omega-3 group</small><strong>2.2%</strong><small>61 / 2,734 pregnancies</small></div><div><small>Control group</small><strong>2.0%</strong><small>55 / 2,752 pregnancies</small></div></div><p><strong>No clear reduction in this trial.</strong> <Footnote id="P5-14" n={1}/></p><p className="skin-source-line">Adjusted RR 1.13 · 95% CI 0.79–1.63</p><p className="small-copy muted">Public/foundation funding; capsule donations recorded.</p><details className="disclosure"><summary>Funding &amp; limitations</summary><p>{getEvidenceSource('P5-14')?.funding??'Not verified'}.</p><p>Results apply to this trial and its intervention, not every omega-3 formulation, dose or population. No individualized dose.</p></details><p className="skin-source-line">[1] Makrides et al., NEJM, 2019. Source-reported values; chart release pending.</p></section>
 }
 if(id==='voice-music'&&!sourceAliasHeld('P4-07'))return <section className="skin-finding"><small className="pilot-kicker">PARTANEN ET AL. · 2013</small><h2 className="section-title">What did researchers measure?</h2><div className="pilot-flow-line"><div><strong>Sound exposure</strong><small>Before birth</small></div><span aria-hidden="true">→</span><div><strong>Brain response</strong><small>After birth</small></div><span aria-hidden="true">≠</span><div><strong>IQ</strong><small>Not established</small></div></div><p>Sound responses differed after prenatal exposure; this does not establish improved intelligence. <Footnote id="P4-07" n={1}/></p><p className="small-copy muted">Academic/public and foundation support; authors declared no competing interests.</p><details className="disclosure"><summary>Funding &amp; limitations</summary><p>{getEvidenceSource('P4-07')?.funding}</p><p>Small study; neural response is not a long-term developmental benefit. No sound-training schedule recommended.</p></details></section>
 if(id==='nausea'){
  const rows=outcomes.filter(x=>['P7-E01','P7-E02'].includes(x.id))
  if(rows.length!==2||rows.some(row=>hasEvidenceHold(row)||sourceAliasHeld(row.source_id)))return <p>Study comparison held.</p>
  return <section className="skin-finding"><small className="pilot-kicker">NETWORK META-ANALYSIS · RESEARCH EXTRACTION</small><h2 className="section-title">Nausea score vs placebo</h2><div className="skin-results">{rows.map(row=><div key={row.id}><small>{row.id==='P7-E01'?'Ginger':'Vitamin B6'}</small><strong>{row.estimate}</strong><small>95% CI {row.lower} to {row.upper}</small></div>)}</div><p>Lower nausea scores were reported, but the estimates have low confidence. <Footnote id="P7-02" n={1}/></p><p className="skin-source-line">0–10 scale · mean difference vs placebo, not direct ginger vs B6.</p><details className="disclosure"><summary>Funding &amp; limitations</summary><p>{getEvidenceSource('P7-02')?.funding??'Funding not verified'}. Network comparisons are not a head-to-head trial; no dose or treatment protocol.</p></details></section>
 }
 return null
}
export function Week22TopicPage(){
 const {subject,topic,subtopic}=useParams()
 const t=week22Topics.find(x=>x.subject===subject&&x.id===topic)
 const c=t?.children.find(x=>x.id===subtopic)
 if(!t||(subtopic&&!c))return <div className="stack"><ScreenHeading title="Topic not found" back={base}/></div>
 const path=base+'/'+t.subject+'/'+t.id
 const week=gestationalWeeks.find(x=>x.week===22)
 return <div className="pilot-week skin-page">
 <ScreenHeading title={c?.title??t.title} subtitle={(t.subject==='mother'?'Mother':'Baby')+' · Week 22'} back={c?path:base+'?subject='+t.subject} backLabel={c?t.title:'Week 22'}/>
 <div className="pilot-visual"><TopicArt subject={t.subject==='mother'?'mother':'baby'} topic={t.id}/></div>
 <p className="skin-lede">{c?.summary??t.summary}</p><p className="small-copy muted">Topic context: <Footnote id={t.source_id} n={1}/> · Detailed claim sources below.</p>
 <small className="muted">Concept illustration · Research draft</small>
 {!c?<><div className="surface-list">{t.children.map(item=><ReadingRow key={item.id} to={path+'/'+item.id} title={item.title} subtitle={item.summary}/>)}</div>{t.subject==='baby'&&<details className="panel disclosure"><summary>Original week description</summary><p>{week?.description}</p><p>{week?.interpretation}</p><Footnote id="PED-GESTATION" n={1}/></details>}</>:<>
 <StudyComparison id={c.id}/>
 {c.note&&<p className="skin-lede">{c.note}</p>}
 {c.visual_ids.length>0&&<section className="stack"><h2 className="section-title">See the original illustration</h2>{c.visual_ids.map(id=><ReadingRow key={id} to={'/visuals/'+id} title={getVisual(id)?.title??id} subtitle="Original reference · review pending"/>)}</section>}
 <section className="stack"><h2 className="section-title">What the research covers</h2>{c.article_ids.map(id=>{const a=getArticle(id);return a?<div key={id} className="skin-finding"><h3 className="section-title">{a.title}</h3><p>{a.quick_answer}</p><p className="small-copy muted">{a.visible_safety}</p><p className="small-copy muted">Archived draft references: {a.source_ids.map((id,i)=><Footnote key={id} id={id} n={i+1}/>)}</p><ReadingRow to={'/research/'+id} title="Full research, FAQs &amp; sources" subtitle={a.title}/></div>:null})}</section>
 <SourceDisclosure ids={c.source_ids}/><NumericRecords ids={c.outcome_ids}/>
 </>}
 <div className="pilot-safety"><strong>Safety comes first</strong><p>Contact your maternity care team immediately if usual baby movements slow, stop or change. Urgent signs override routine reading.</p><Link to="/urgent">Know the warning signs ›</Link></div><DraftBanner status="research_only"/>
 </div>
}
