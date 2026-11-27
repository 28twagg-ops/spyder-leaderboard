import { Link } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { Glyph } from '../components/Glyph'
import { timeline } from '../data/researchCatalog'
import { useLocalPrefs } from '../hooks/useLocalPrefs'

const destinations = [
 {title:'Nutrition',icon:'leaf',to:'/explore/nutrition'},
 {title:'Your body',icon:'body',to:'/explore'},
 {title:'Development',icon:'child',to:'/timeline'},
 {title:'Research',icon:'book',to:'/evidence'}
] as const
export function TodayPage(){
 const {prefs,setPhase}=useLocalPrefs()
 const phase=timeline.find(p=>p.id===prefs.selectedPhaseId)
 return <div className="editorial-home stack-lg">
 <header className="editorial-masthead"><div><h1 className="brand">Everwell</h1><span className="muted masthead-subtitle">Research-led family health</span></div><Link className="header-action" to="/saved"><Glyph name="bookmark"/><span>Saved</span></Link><Link className="header-action" to="/settings"><Glyph name="settings"/><span>Settings</span></Link></header>
 <section className="home-intro"><svg className="home-botanical" viewBox="0 0 160 125" aria-hidden="true"><g stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity=".12" strokeLinecap="round"><path fill="none" d="M79 122Q78 60 134 9M81 105Q42 88 22 30M93 74Q130 69 150 40M102 51Q88 37 89 6"/><path d="M81 105Q45 104 43 81Q67 80 81 105M48 75Q19 71 14 49Q39 51 48 75M113 35Q116 12 143 4Q140 26 113 35M96 71Q115 47 140 49Q130 68 96 71M94 37Q79 26 82 5Q95 15 94 37"/></g></svg><h2 className="editorial-heading">Your family<br/>journey.</h2><p className="muted">Preparation, pregnancy and beyond.</p></section>
 <section className="phase-feature" aria-labelledby="start-heading"><div className="section-label">Your reading phase</div><h2 id="start-heading">{phase?.label??'Explore at your own pace'}</h2><label className="visually-hidden" htmlFor="reading-phase">Optional reading phase</label><select id="reading-phase" value={phase?.id??''} onChange={e=>setPhase(e.target.value||null)}><option value="">Choose a phase (optional)</option>{timeline.map(p=><option key={p.id} value={p.id}>{p.label} · {p.track.replaceAll('_',' ')}</option>)}</select><div className="phase-footer"><span className="muted">Reading filter only</span><Link to={phase?`/timeline#${phase.id}`:'/timeline'}>Explore journey →</Link></div></section>
 <section className="stack" aria-label="Discover"><h2 className="editorial-heading discover-heading">Discover</h2><div className="discover-grid">{destinations.map(d=><Link className="discover-tile" key={d.title} to={d.to}><Glyph name={d.icon}/><strong>{d.title}</strong><span aria-hidden="true">›</span></Link>)}</div></section>
 <DraftBanner status="research_only"/>
 </div>
}
