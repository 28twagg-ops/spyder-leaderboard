import { Link } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { Glyph } from '../components/Glyph'
import { PhasePicker } from '../components/PhasePicker'
import { featuredForPhase, getArticle, timeline } from '../data/researchCatalog'
import { useLocalPrefs } from '../hooks/useLocalPrefs'

const stageNames:Record<string,string>={preconception:'preparation',pregnancy:'pregnancy',shared_birth:'birth',maternal:'recovery',child:'family'}
const domainNames:Record<string,string>={prep:'Preparation',nutrition:'Nutrition',environment:'Environment',pregnancy:'Pregnancy',birth:'Birth',recovery:'Recovery',feeding:'Feeding',infant:'Newborn care',development:'Development',solids:'Starting solids',child:'Child health'}
const readingIcon=(domain:string):Parameters<typeof Glyph>[0]['name']=>domain==='nutrition'||domain==='environment'||domain==='solids'?'leaf':domain==='feeding'||domain==='infant'||domain==='development'||domain==='child'?'child':domain==='pregnancy'||domain==='recovery'||domain==='birth'?'body':'book'
export function TodayPage(){
 const {prefs}=useLocalPrefs()
 const phase=timeline.find(p=>p.id===prefs.selectedPhaseId)
 const primary=phase?featuredForPhase(phase):['EV-ART-001','EV-ART-003','EV-ART-005'].flatMap(id=>{const a=getArticle(id);return a?[a]:[]})
 const extra=phase?phase.article_ids.flatMap(id=>{const a=getArticle(id);return a?[a]:[]}):[]
 const articles=[...new Map([...primary,...extra].map(a=>[a.id,a])).values()].slice(0,3)
 return <div className="reference-home">
 <header className="ref-header"><div className="ref-brand"><Glyph name="leaf"/><h1>Everwell</h1></div><div className="ref-tools"><Link className="ref-tool" to="/saved"><Glyph name="bookmark"/>Saved</Link><Link className="ref-tool" to="/settings"><Glyph name="settings"/>Settings</Link></div></header>
 <section className="ref-intro"><svg className="ref-plant" viewBox="0 0 126 132" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.05" strokeLinecap="round"><path d="M43 131Q62 76 98 7M52 111Q26 89 13 49M65 80Q91 68 122 52M76 52Q58 34 53 5"/><g fill="currentColor" fillOpacity=".16"><path d="M50 114Q24 112 20 88Q42 90 50 114M37 91Q9 88 5 65Q25 66 37 91M66 81Q84 58 114 58Q97 79 66 81M84 39Q83 15 105 2Q109 23 84 39M76 52Q52 43 49 19Q72 24 76 52M93 24Q107 10 123 12Q114 29 93 24M57 99Q72 89 89 94Q75 108 57 99"/></g><path opacity=".55" d="M20 88 48 112M5 65 35 89M114 58 68 80M105 2 85 36M49 19 75 51M89 94 58 99"/></g></svg><h2>Your {phase?stageNames[phase.track]??'family':'family'}<br/>journey.</h2><p>Research-led learning for every stage.</p></section>
 <section className="ref-phase" aria-labelledby="start-heading"><span className="ref-phase-label">Your reading phase</span><h2 id="start-heading">{phase?.label??'Explore at your own pace'}</h2><p>{phase?.focus??'Choose a reading focus, or browse freely.'}</p><div className="ref-phase-actions"><Link to={phase?`/timeline/${phase.track}/${phase.id}`:'/timeline'}>Explore timeline <span aria-hidden="true">›</span></Link><PhasePicker firstLaunch/></div></section>
 <section aria-labelledby="reading-heading"><div className="ref-section-head"><h2 id="reading-heading">Start reading</h2><Link to="/library">See all <span aria-hidden="true">›</span></Link></div><div className="ref-rows">{articles.map(a=><Link className="ref-row" key={a.id} to={`/research/${a.id}`}><span className="ref-row-icon"><Glyph name={readingIcon(a.domain)}/></span><span><strong>{a.title}</strong><small>Research draft · {domainNames[a.domain]??a.domain}</small></span><span className="ref-chevron" aria-hidden="true">›</span></Link>)}</div></section>
 <div className="ref-secondary"><Link to="/explore/body"><Glyph name="body"/>Your body <span aria-hidden="true">›</span></Link><Link to="/evidence"><Glyph name="book"/>Research &amp; sources <span aria-hidden="true">›</span></Link></div>
 <DraftBanner status="research_only"/>
 </div>
}
