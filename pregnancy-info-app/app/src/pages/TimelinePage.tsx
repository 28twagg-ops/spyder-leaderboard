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

/** Bounded adjacent-week experiment. Shared library articles are stage-wide, never relabeled as new week-specific evidence. */
function Week23Chapter(){
 const week=gestationalWeeks.find(w=>w.week===23)!
 const source=getSource('PED-GESTATION')
 const nutrition=getSource('P5-28')
 const priorities=[
  {title:'Iron, blood & prenatal nutrition',description:'Understand iron needs and the difference between meeting dietary requirements and adding a supplement.',article:'EV-ART-009'},
  {title:'Movement & pelvic comfort',description:'Learn how activity, strength and individual symptoms relate to comfort in the second trimester.',article:'EV-ART-020'},
  {title:'A check-in with your care team',description:'Explore prenatal visits, screening and questions to bring along.',article:'EV-ART-013'}
 ]
 const readings=[
  {title:'Food & prenatal nutrition',article:'EV-ART-005'},
  {title:'Prenatal supplement quality',article:'EV-ART-006'},
  {title:'Fish & omega-3 research',article:'EV-ART-007'},
  {title:'Choline, iodine & brain development',article:'EV-ART-008'},
  {title:'Home and workplace exposures',article:'EV-ART-010'},
  {title:'Movement & exercise',article:'EV-ART-016'},
  {title:'Skin changes & stretch marks',article:'EV-ART-018'},
  {title:'Preparing for birth',article:'EV-ART-021'}
 ]
 const ref=(url:string|undefined,n:number)=>safeVisualUrl(url)?<a className="w23-cite" href={safeVisualUrl(url)} target="_blank" rel="noreferrer" aria-label={'Open reference '+n}>[{n}]</a>:null
 return <div className="pilot-week week-directory week-chapter w23" id="week-23">
 <style>{`
 .w23{gap:1.25rem;padding-bottom:1.5rem}
 .w23 .pilot-header{gap:.4rem}
 .w23 .w23-section{display:grid;gap:.65rem}
 .w23 h2{font:500 1.55rem/1.2 var(--font-display);letter-spacing:-.02em;margin:0}
 .w23 h3{font:500 1.17rem/1.3 var(--font-display);margin:0}
 .w23 p{font-size:.91rem;line-height:1.65;margin:0}
 .w23 .w23-note,.w23 figcaption{font-size:.74rem;line-height:1.5;color:var(--ink-muted)}
 .w23 .w23-cite{color:var(--accent-deep);text-decoration:underline;font-size:.72em;vertical-align:super;white-space:nowrap;padding:0 .16rem}
 .w23 figure{margin:0;display:grid;gap:.45rem}
 .w23 figure svg{display:block;width:100%;height:auto;border-radius:14px}
 .w23 .w23-list{display:grid;border-top:1px solid var(--line)}
 .w23 .w23-link{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:.7rem;min-height:48px;padding:.75rem 0;border-bottom:1px solid var(--line)}
 .w23 .w23-link strong{font-size:.94rem;line-height:1.35;display:block;font-weight:650}
 .w23 .w23-link small{font-size:.77rem;line-height:1.45;color:var(--ink-muted);display:block;margin-top:.2rem}
 .w23 .w23-link>span:last-child{font-size:1.3rem;color:var(--accent-deep)}
 .w23 .week-safety-note{font-size:.78rem;line-height:1.5;border-left:2px solid var(--danger);padding:.2rem 0 .2rem .7rem}
 .w23 .w23-subsection{display:grid;gap:.5rem;margin-top:.35rem}
 .w23 .w23-divider{border-top:1px solid var(--line);padding-top:.9rem}
 .w23 a:focus-visible{outline:2px solid var(--accent-deep);outline-offset:3px}
 `}</style>
 <header className="pilot-header"><div className="pilot-header-top"><Link className="reader-back" to="/timeline/pregnancy"><Glyph name="back"/>Pregnancy</Link><span className="pilot-kicker">SECOND TRIMESTER</span></div><h1 className="page-title">Week 23</h1><div className="pilot-progress" role="img" aria-label="Week 23 of a 40-week pregnancy reference timeline"><div><span style={{width:'57.5%'}}/></div><div className="pilot-progress-meta"><small>23 of 40 weeks</small><small>Research draft · review pending</small></div></div></header>
 <section className="w23-section" aria-label="This week in development">
 <h2>Building the systems that sustain life</h2>
 <p>{plainWeek(23,week.description)} {ref(source?.url,1)} These changes are part of an overlapping developmental period, rather than a switch that flips at the start of this week.</p>
 <figure><svg viewBox="0 0 340 190" role="img" aria-label="Conceptual diagrams of branching lower airways and blood cells developing within bone marrow">
 <rect width="340" height="190" fill="#ece7de"/><path d="M170 14V176" stroke="#b6aa99" strokeDasharray="3 4"/>
 <g fill="#403e36" fontSize="11" fontFamily="system-ui,sans-serif" textAnchor="middle"><text x="85" y="24">Developing airways</text><text x="255" y="24">Bone marrow</text></g>
 <g fill="#d7c1b3" stroke="#947669" strokeWidth="1.2"><path d="M77 48Q30 37 23 93T37 151Q76 157 77 112Z"/><path d="M93 48Q140 37 147 93T133 151Q94 157 93 112Z"/></g>
 <g fill="none" stroke="#795d52" strokeLinecap="round" strokeLinejoin="round"><path d="M85 38v28M85 66 57 88 42 106M85 66l28 22 15 18" strokeWidth="4"/><path d="M57 88v32m0-19-21 18M113 88v32m0-19 21 18M42 106l-5 18m91-18 5 18" strokeWidth="2"/></g>
 <rect x="217" y="43" width="76" height="110" rx="28" fill="#dfc7ad" stroke="#aa8f75" strokeWidth="1.5"/>
 <rect x="230" y="53" width="50" height="90" rx="20" fill="#c88980" opacity=".55"/>
 {[ [243,68],[265,77],[245,90],[266,105],[245,120],[262,132] ].map(([cx,cy],i)=><g key={i}><ellipse cx={cx} cy={cy} rx="7" ry="5.5" fill="#a95f59" stroke="#814b47"/><ellipse cx={cx} cy={cy} rx="3" ry="2" fill="#d6a49b"/></g>)}
 <g fill="#403e36" fontSize="10" fontFamily="system-ui,sans-serif" textAnchor="middle"><text x="85" y="174">Branching structures</text><text x="255" y="174">Blood-cell formation</text></g>
 </svg><figcaption>Two developing systems · original conceptual illustration, not an anatomical image or a measurement. Reference describes weeks 23–25. {ref(source?.url,1)}</figcaption></figure>
 </section>
 <div className="week-safety-note" role="note" aria-label="Content status">If usual baby movements slow, stop or change, contact your maternity team immediately. <Link to="/urgent">Warning signs &amp; help</Link></div>
 <section className="w23-section" aria-label="Practical priorities">
 <h2>Worth exploring this week</h2><p className="w23-note">Learning priorities selected for this chapter, not new week-specific clinical requirements.</p>
 <div className="w23-list">{priorities.map(item=><Link className="w23-link" key={item.article} to={'/research/'+item.article}><span><strong>{item.title}</strong><small>{item.description}</small></span><span aria-hidden="true">›</span></Link>)}</div>
 </section>
 <section className="w23-section w23-divider" aria-label="Mother and baby connections">
 <h2>Mother and baby, together</h2>
 <div className="w23-subsection"><h3>Why blood-cell formation is interesting</h3><p>Iron is needed to make hemoglobin, the protein that helps red blood cells carry oxygen. Pregnancy increases the body's iron needs. This makes iron a useful topic to understand, but fetal development does not establish a reason to start an extra supplement precisely at week 23. {ref(nutrition?.url,2)}</p><Link className="w23-link" to="/research/EV-ART-009"><span><strong>Iron, calcium &amp; vitamin D</strong><small>Research findings, limitations and safety</small></span><span aria-hidden="true">›</span></Link></div>
 <div className="w23-subsection"><h3>Airways are developing before birth</h3><p>Developing lung structures are not the same thing as being ready to breathe air independently. The placenta still supports oxygen exchange. Explore how the developing organs work together rather than using a weekly milestone to assess an individual baby. {ref(source?.url,1)}</p><Link className="w23-link" to="/research/EV-ART-014"><span><strong>How the baby develops</strong><small>Fetal development and original references</small></span><span aria-hidden="true">›</span></Link></div>
 </section>
 <section className="w23-section w23-divider" aria-label="Food supplements and related research"><h2>Food, supplements &amp; preparation</h2><p>Explore the role of each nutrient, food sources, evidence for additional intake and safety. A prenatal nutrient target is not automatically a supplement dose. {ref(nutrition?.url,2)}</p><nav className="w23-list" aria-label="Week 23 reading topics">{readings.map(item=><Link key={item.article} className="w23-link" to={'/research/'+item.article}><span><strong>{item.title}</strong><small>Shared second-trimester reading</small></span><span aria-hidden="true">›</span></Link>)}</nav></section>
 <details className="panel disclosure"><summary>Studies &amp; references</summary><p className="w23-note">The timeline source describes a range, not an exact individual milestone. Underlying guidance and study funding are separate from the government publisher; unknown funding is not evidence of independence. Funding and limitations for specific interventions are accessible in the linked research articles.</p><p>{ref(source?.url,1)} {source?.title??'Fetal development · MedlinePlus'}</p><p>{ref(nutrition?.url,2)} {nutrition?.title??'Pregnancy supplements · NIH Office of Dietary Supplements'}</p></details>
 <div className="page-controls"><Link className="btn btn-ghost" to="/timeline/week/22">Previous</Link><Link className="week-select-link" to="/timeline/pregnancy">Choose week</Link><Link className="btn btn-ghost" to="/timeline/week/24">Next</Link></div>
 <DraftBanner status="research_only"/>
 </div>
}

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
 if(week?.week===23)return <Week23Chapter/>
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
