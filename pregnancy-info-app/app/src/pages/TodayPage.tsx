import { Link } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { OfflineBanner } from '../components/OfflineBanner'
import { ThemePicker } from '../components/ThemePicker'
import { UrgentSigns } from '../components/UrgentSigns'
import { catalogStats, featuredForPhase, getArticle, timeline, urgentArticles } from '../data/researchCatalog'
import { useLocalPrefs } from '../hooks/useLocalPrefs'

export function TodayPage() {
 const {prefs,setTheme,setPhase}=useLocalPrefs()
 const stats=catalogStats()
 const phase=timeline.find(p=>p.id===prefs.selectedPhaseId)
 const featured=phase?featuredForPhase(phase).slice(0,3):['EV-ART-001','EV-ART-005','EV-ART-003'].flatMap(id=>{const a=getArticle(id);return a?[a]:[]})
 return <div className="editorial-home stack-lg">
 <header className="editorial-masthead"><div><h1 className="brand">Everwell</h1><span className="muted masthead-subtitle">A research-led family journey</span></div><Link className="masthead-icon" to="/library" aria-label="Search library"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg></Link><Link className="masthead-icon" to="#appearance" aria-label="Appearance"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/></svg></Link></header>
 <section className="home-intro"><svg className="home-botanical" viewBox="0 0 160 125" aria-hidden="true"><g stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity=".12" strokeLinecap="round"><path fill="none" d="M79 122Q78 60 134 9M81 105Q42 88 22 30M93 74Q130 69 150 40M102 51Q88 37 89 6"/><path d="M81 105Q45 104 43 81Q67 80 81 105M48 75Q19 71 14 49Q39 51 48 75M113 35Q116 12 143 4Q140 26 113 35M96 71Q115 47 140 49Q130 68 96 71M94 37Q79 26 82 5Q95 15 94 37"/></g></svg><div className="section-label editorial-kicker">Your journey</div><h2 className="editorial-heading">Prepare. Grow.<br/>Thrive together.</h2><p className="muted">From preparation through early childhood.</p></section>
 <section className="phase-feature" aria-labelledby="start-heading"><div className="section-label editorial-kicker">Reading phase</div><h2 id="start-heading">{phase?.label??'Explore at your own pace'}</h2><label className="visually-hidden" htmlFor="reading-phase">Optional reading phase</label><select id="reading-phase" value={phase?.id??''} onChange={e=>setPhase(e.target.value||null)}><option value="">Choose a phase (optional)</option>{timeline.map(p=><option key={p.id} value={p.id}>{p.track.replaceAll('_',' ')} · {p.label}</option>)}</select><div className="phase-footer"><span className="muted">Reading filter only</span><Link to="/timeline">View timeline →</Link></div></section>
 <section aria-labelledby="reading-heading"><div className="editorial-section-head"><h2 id="reading-heading" className="editorial-heading">Start reading</h2><Link to="/library">See all →</Link></div><ul className="editorial-reading">{featured.map((a,i)=><li key={a.id}><Link to={`/research/${a.id}`}><span className="reading-emblem" aria-hidden="true">{['✳','◈','✦'][i]}</span><span><strong>{a.title}</strong><small>Research draft · {a.domain.replaceAll('_',' ')}</small></span><span aria-hidden="true">›</span></Link></li>)}</ul></section>
 <section className="home-safety" aria-label="Safety information"><UrgentSigns/><div className="safety-links">{urgentArticles().map(a=><Link key={a.id} to={`/research/${a.id}`}>{a.title}</Link>)}</div></section>
 <DraftBanner status="research_only"/>
 <nav className="section-links" aria-label="More destinations"><Link to="/visuals">Visual library</Link><Link to="/install">Install help</Link><Link to="#appearance">Appearance</Link></nav>
 <details id="appearance" className="panel disclosure"><summary>Appearance</summary><ThemePicker value={prefs.themeId} onChange={setTheme}/></details>
 <details className="panel disclosure"><summary>About this research package</summary><p className="muted">Inventory loaded: {stats.articles} articles · {stats.phases} phases · {stats.sourceLinks} source links. Reading phase is optional and stored locally, not a personal care schedule.</p><OfflineBanner/></details>
 </div>
}
