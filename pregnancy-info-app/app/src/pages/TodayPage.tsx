import { useState } from 'react'
import { AppUpdateStatus } from '../components/AppUpdateStatus'
import brandMark from '../assets/everwell-mark.svg'
import { Link,useNavigate } from 'react-router-dom'
import { PregnancyDateCard } from '../components/PregnancyDateCard'
import { QuickTopics } from '../components/QuickTopics'
import { DraftBanner } from '../components/DraftBanner'
import { Glyph } from '../components/Glyph'
import { plainPhaseFocus } from '../data/plainTimeline'
import { PhasePicker } from '../components/PhasePicker'
import { featuredForPhase, getArticle, timeline } from '../data/researchCatalog'
import { useLocalPrefs } from '../hooks/useLocalPrefs'

const stageNames:Record<string,string>={preconception:'preparation',pregnancy:'pregnancy',shared_birth:'birth',maternal:'recovery',child:'family'}
const domainNames:Record<string,string>={prep:'Preparation',nutrition:'Nutrition',environment:'Environment',pregnancy:'Pregnancy',birth:'Birth',recovery:'Recovery',feeding:'Feeding',infant:'Newborn care',development:'Development',solids:'Starting solids',child:'Child health'}
const readingIcon=(domain:string):Parameters<typeof Glyph>[0]['name']=>domain==='nutrition'||domain==='environment'||domain==='solids'?'leaf':domain==='feeding'||domain==='infant'||domain==='development'||domain==='child'?'child':domain==='pregnancy'||domain==='recovery'||domain==='birth'?'body':'book'
export function TodayPage({activePhaseId,currentWeek,onSearch}:{activePhaseId:string|null;currentWeek:number|null;onSearch:(query:string)=>void}){
 const navigate=useNavigate()
 const [search,setSearch]=useState('')
 const {prefs}=useLocalPrefs()
 const phase=timeline.find(p=>p.id===activePhaseId)
 const primary=phase?featuredForPhase(phase):['EV-ART-001','EV-ART-003','EV-ART-005'].flatMap(id=>{const a=getArticle(id);return a?[a]:[]})
 const extra=phase?phase.article_ids.flatMap(id=>{const a=getArticle(id);return a?[a]:[]}):[]
 const articles=[...new Map([...primary,...extra].map(a=>[a.id,a])).values()].slice(0,3)
 return <div className="reference-home">
 <header className="ref-header"><div className="ref-brand"><img className="brand-mark" src={brandMark} alt=""/><h1>Everwell</h1></div><div className="ref-tools"><Link className="ref-tool" to="/saved"><Glyph name="bookmark"/>Saved</Link><Link className="ref-tool" to="/settings"><Glyph name="settings"/>Settings</Link></div></header>
 <form className="home-search" onSubmit={e=>{e.preventDefault();onSearch(search.trim());navigate('/library')}}><label className="visually-hidden" htmlFor="home-search">Search Everwell</label><div className="home-search-input"><Glyph name="search"/><input id="home-search" type="search" placeholder="Find any topic..." value={search} onChange={e=>setSearch(e.target.value)} autoComplete="off" maxLength={200}/></div><button type="submit" aria-label="Search topics">Search</button></form>
 <section className="home-intro"><h2>Your {phase?stageNames[phase.track]??'family':'family'} journey.</h2><p>Find what you need, when you need it.</p></section>
 <section className="ref-phase" aria-labelledby="start-heading"><span className="ref-phase-label">Your life stage</span><h2 id="start-heading">{phase?.label??'Explore at your own pace'}</h2><p>{phase?plainPhaseFocus(phase.id,phase.focus):'Choose your stage, or explore without setting one.'}</p><div className="ref-phase-actions"><Link to={currentWeek!==null?`/timeline/week/${currentWeek}`:phase?`/timeline/${phase.track}/${phase.id}`:'/timeline'}>Explore timeline <span aria-hidden="true">›</span></Link><PhasePicker/></div></section>
 {(!phase||phase.track==='pregnancy'||prefs.pregnancyDueDate)&&<PregnancyDateCard/>}
 <section aria-labelledby="quick-topics-heading"><div className="ref-section-head"><h2 id="quick-topics-heading">Explore by topic</h2><Link to="/explore">All topics <span aria-hidden="true">›</span></Link></div><QuickTopics week={currentWeek}/>{currentWeek===null&&<p className="small-copy muted topic-reference-note">Pregnancy topics open a shared reference week until you set your date. You can browse any week.</p>}</section>
 <section aria-labelledby="reading-heading"><div className="ref-section-head"><h2 id="reading-heading">Start reading</h2><Link to="/library">See all <span aria-hidden="true">›</span></Link></div><div className="ref-rows">{articles.map(a=><Link className="ref-row" key={a.id} to={`/research/${a.id}`}><span className="ref-row-icon"><Glyph name={readingIcon(a.domain)}/></span><span><strong>{a.title}</strong><small>{domainNames[a.domain]??a.domain}</small></span><span className="ref-chevron" aria-hidden="true">›</span></Link>)}</div></section>
 <div className="ref-secondary"><Link to="/explore/body"><Glyph name="body"/>Your body <span aria-hidden="true">›</span></Link><Link to="/evidence"><Glyph name="book"/>Research &amp; sources <span aria-hidden="true">›</span></Link></div>
 <DraftBanner status="research_only"/>
 <Link to="/settings" className="app-release-link"><AppUpdateStatus compact/></Link>
 </div>
}
