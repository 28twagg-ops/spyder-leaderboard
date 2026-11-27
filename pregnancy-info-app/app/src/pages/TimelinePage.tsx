import { Link, useLocation, useParams, useNavigate } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { plainPhaseFocus,plainWeek,plainPhaseSafety } from '../data/plainTimeline'
import { readingOverview } from '../data/readingOverviews'
import { Glyph } from '../components/Glyph'
import { Week22Pilot } from './Week22Pilot'
import { StageArt } from '../components/StageArt'
import { safeVisualUrl } from '../data/visualCatalog'
import { stageChoices } from '../data/stageChoices'
import { ReadingRow, ScreenHeading } from '../components/ReadingUI'
import { featuredForPhase, gestationalWeeks, getArticle, getSource, timeline } from '../data/researchCatalog'

const phasePath=(p:typeof timeline[number])=>`/timeline/${p.track}/${p.id}`
const weeks=[...gestationalWeeks].sort((a,b)=>a.week-b.week)

export function TimelinePage({selectedPhaseId}:{selectedPhaseId?:string|null}={}){
 const {track,phaseId,weekNumber}=useParams()
 const {hash}=useLocation()
 const navigate=useNavigate()
 const phase=timeline.find(p=>p.id===(phaseId||hash.slice(1))&&(!track||p.track===track))
 const legacyWeek=hash.match(/^#week-(\d+)$/)?.[1]
 const week=weeks.find(w=>w.week===Number(weekNumber||legacyWeek))
 const chosenTrack=stageChoices.find(s=>s.id===(phase?.track||track||hash.replace(/^#track-/,'')))
 const activeTrack=timeline.find(p=>p.id===selectedPhaseId)?.track
 const weekPicker=<div className="panel stack"><label htmlFor="chosen-week" className="section-title">Pregnancy week</label><select id="chosen-week" value={week?.week??''} onChange={e=>navigate(e.target.value?`/timeline/week/${e.target.value}`:'/timeline/pregnancy')}><option value="">Choose a week</option>{weeks.map(w=><option key={w.week} value={w.week}>Week {w.week}</option>)}</select></div>
 if((weekNumber&&!week)||(phaseId&&!phase)||(track&&!chosenTrack))return <div className="stack-lg"><ScreenHeading title="Reading period not found" back="/timeline" backLabel="Journey"/><p>Choose an available stage or pregnancy week.</p></div>
 if(week?.week===22)return <Week22Pilot/>
 if(week?.week===23)return <Week22Pilot week={23}/>
 if(week){
  const source=week.source_id?getSource(week.source_id):undefined
  const maternal=timeline.find(p=>p.id===week.maternal_phase)
  const fetal=week.fetal_article_id?getArticle(week.fetal_article_id):undefined
  return <div className="stack-lg" id={`week-${week.week}`}><ScreenHeading title={`Week ${week.week}`} subtitle="Learn what may happen around this time. Each baby is different." back="/timeline/pregnancy" backLabel="Pregnancy"/><div className="phase-feature stack"><div className="section-label">How your baby grows · draft</div><p>{plainWeek(week.week,week.description)}</p>{week.source_window_start!=null&&week.source_window_end!=null&&<small className="muted">Source covers weeks {week.source_window_start}–{week.source_window_end}</small>}{week.interpretation&&<p className="muted">This comes from a range of weeks in the source. It is not a test of your baby or a care deadline.</p>}</div><div className="page-controls">{week.week>1?<Link className="btn btn-ghost" to={`/timeline/week/${week.week-1}`}>Previous</Link>:<span/>}<span className="muted" style={{textAlign:'center'}}>{week.week} / 40</span>{week.week<40?<Link className="btn btn-ghost" to={`/timeline/week/${week.week+1}`}>Next</Link>:<span/>}</div>{weekPicker}<section className="stack"><h2 className="section-title">Related reading</h2>{maternal&&<ReadingRow to={phasePath(maternal)} title={maternal.label} subtitle="Parent's health"/>}{fetal&&<ReadingRow to={`/research/${fetal.id}`} title={fetal.title}/>}<details className="panel disclosure"><summary>Original source</summary><p>{week.description}</p><p>{week.interpretation}</p><p>{source?.title??week.source_id??'Not recorded'} {safeVisualUrl(source?.url)&&<a className="topic-link" href={safeVisualUrl(source?.url)} target="_blank" rel="noreferrer">Open source</a>}</p></details></section><DraftBanner status="research_only"/></div>
 }
 if(phase&&chosenTrack){
  const featured=featuredForPhase(phase)
  const ids=new Set(featured.map(a=>a.id))
  const more=[...new Set(phase.article_ids)].flatMap(id=>{const a=getArticle(id);return a&&!ids.has(id)?[a]:[]})
  const safety=[...new Set(phase.persistent_safety_article_ids??[])].flatMap(id=>{const a=getArticle(id);return a?[a]:[]})
  const siblings=timeline.filter(p=>p.track===phase.track),index=siblings.findIndex(p=>p.id===phase.id)
  return <div className="stack-lg" id={phase.id}><ScreenHeading title={phase.label} subtitle={chosenTrack.title} back={`/timeline/${phase.track}`} backLabel={chosenTrack.title}/><div className="phase-feature stack"><Glyph name={chosenTrack.icon}/><h2 className="section-title">{plainPhaseFocus(phase.id,phase.focus)}</h2><p className="muted small-copy">Read at your own pace. These are not tasks, doses or a care schedule.</p><details className="disclosure"><summary>Original research notes</summary><p>{phase.focus}</p><p>{phase.featured_note}</p></details></div>{phase.safety&&<section className="panel stack safety-panel"><h2 className="section-title">Safety notes</h2><p>{plainPhaseSafety(phase.id,phase.safety)}</p><details className="disclosure"><summary>Full safety note</summary><p>{phase.safety}</p></details>{safety.map(a=><ReadingRow key={a.id} to={`/research/${a.id}`} title={a.title}/>)}</section>}{!phase.safety&&safety.length>0&&<section className="panel stack safety-panel"><h2 className="section-title">Safety topics</h2>{safety.map(a=><ReadingRow key={a.id} to={`/research/${a.id}`} title={a.title}/>)}</section>}<section className="stack"><h2 className="section-title">Start reading</h2><div className="surface-list">{featured.map(a=><ReadingRow key={a.id} to={`/research/${a.id}`} title={a.title} subtitle={readingOverview(a.id)?.why??"Research draft"}/>)}</div>{more.length>0&&<details className="panel disclosure"><summary>More topics ({more.length})</summary>{more.map(a=><ReadingRow key={a.id} to={`/research/${a.id}`} title={a.title}/>)}</details>}</section><div className="page-controls">{index>0?<Link className="btn btn-ghost" to={phasePath(siblings[index-1])}>Previous</Link>:<span/>}<span className="muted" style={{textAlign:'center'}}>{index+1} / {siblings.length}</span>{index<siblings.length-1?<Link className="btn btn-ghost" to={phasePath(siblings[index+1])}>Next</Link>:<span/>}</div><DraftBanner status="research_only"/></div>
 }
 if(chosenTrack||hash==='#gestation-heading'){
  const selected=chosenTrack??stageChoices[1]
  const phases=timeline.filter(p=>p.track===selected.id)
  return <div className="stack-lg" id={`track-${selected.id}`}><ScreenHeading title={selected.title} subtitle={selected.subtitle} back="/timeline" backLabel="Journey"/>{selected.id==='pregnancy'&&<div id="gestation-heading">{weekPicker}</div>}<section className="stack"><h2 className="section-title">Choose a stage</h2><div className="surface-list">{phases.map(p=><ReadingRow key={p.id} to={phasePath(p)} title={p.label} subtitle={plainPhaseFocus(p.id,p.focus)}/>)}</div></section>{selected.id==='preconception'&&<ReadingRow to="/research/EV-ART-003" title="Father & partner preparation"/>}<DraftBanner status="research_only"/></div>
 }
 return <div className="stack-lg"><ScreenHeading title="Journey" subtitle="From preparation to early childhood. Explore at your own pace."/><div className="journey-rail">{stageChoices.map((s,i)=><Link key={s.id} className={`journey-card${activeTrack===s.id?' current-stage':''}`} to={`/timeline/${s.id}`}><span className="journey-node" aria-hidden="true"/><span className="stage-art"><StageArt stage={s.id}/></span><span><small className="muted">{activeTrack===s.id?'Your reading focus':`Stage ${i+1}`}</small><strong>{s.title}</strong><small>{s.subtitle}</small></span><span aria-hidden="true">›</span></Link>)}</div><DraftBanner status="research_only"/></div>
}
