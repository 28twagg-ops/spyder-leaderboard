import { Link,useSearchParams } from 'react-router-dom'
import { useViewState } from '../hooks/useViewMemory'
import { Glyph } from '../components/Glyph'

/** One deliberately bounded design pilot. General educational concepts, not individual measurements or care instructions. */
type Concept='skin'|'movement'|'digestion'
function ConceptDiagram({kind}:{kind:Concept}){
 return <svg viewBox="0 0 280 140" role="img" aria-label={kind==='skin'?'Schematic showing fine hairs on a skin surface':kind==='movement'?'Schematic showing movement in two directions around a joint':'Schematic showing material accumulating in an intestinal passage'} className="pilot-diagram">
 <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
 {kind==='skin'?<><path d="M27 78 Q83 70 140 78 T253 78L253 115H27Z" fill="var(--accent-soft)"/><path d="M27 96H253" opacity=".45"/>{[48,83,118,153,188,223].map(x=><path key={x} d={`M${x} 78q-3-24 9-38`}/>)}<path d="M188 35l25-17h37" strokeDasharray="2 4"/><text x="251" y="15" textAnchor="end" fill="currentColor" stroke="none" fontSize="11">Fine hair</text><text x="140" y="129" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">Skin surface</text></>:kind==='movement'?<><path d="M64 35l58 44 69-34" strokeWidth="17" stroke="var(--accent)" opacity=".28"/><path d="M64 35l58 44 69-34"/><circle cx="122" cy="79" r="9" fill="var(--bg-elevated)"/><path d="M122 79l65 34" strokeDasharray="5 5"/><path d="M213 42q30 38-2 75m0 0 3-15m-3 15 15-5"/><text x="139" y="20" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">Changing position</text></>:<><path d="M75 29h130q18 0 18 18t-18 18H87q-18 0-18 18t18 18h116" strokeWidth="22" opacity=".13"/><path d="M75 29h130q18 0 18 18t-18 18H87q-18 0-18 18t18 18h116" strokeWidth="1.7"/>{[100,120,140,160,180,200].map(x=><circle key={x} cx={x} cy="101" r="4" fill="var(--accent)" stroke="none"/>)}<path d="M150 110v13h64" strokeDasharray="2 4"/><text x="216" y="126" fill="currentColor" stroke="none" fontSize="11">Meconium</text></>}
 </g></svg>
}
function MotherDiagram({kind}:{kind:Concept}){
 return <svg viewBox="0 0 280 140" role="img" aria-label={kind==='skin'?'Concept illustration of skin expanding, with arrows pointing outward':kind==='movement'?'Concept illustration of movement sensations near a pregnant abdomen':'Concept illustration of digestion, with a dotted path through the intestine'} className="pilot-diagram">
 <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
 {kind==='skin'?<><path d="M42 81Q140 26 238 81L238 112H42Z" fill="var(--accent-soft)"/><path d="M42 96Q140 51 238 96" opacity=".45"/>{[92,116,140,164,188].map((x,i)=><path key={x} d={`M${x} ${60+Math.abs(i-2)*5}l-3 20`} strokeDasharray="3 3" opacity=".7"/>)}<path d="M92 37H41m0 0 9-7m-9 7 9 7M188 37h51m0 0-9-7m9 7-9 7"/><text x="140" y="23" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">Skin expands</text><text x="140" y="128" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">Stretching skin</text></>:kind==='movement'?<><path d="M102 16q-10 38-2 55q7 17-12 47M122 16q9 25 39 30q49 12 46 43q-3 25-36 29H88" fill="var(--accent-soft)"/><circle cx="159" cy="81" r="13" strokeDasharray="3 4"/><path d="M179 65q16 15 0 32M188 56q26 25 0 49"/><text x="144" y="133" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">Fluttering sensation</text></>:<><path d="M103 18v21q0 10 11 10h25q20 0 20 20v18q0 15-16 15H92" strokeWidth="16" opacity=".16"/><path d="M103 18v21q0 10 11 10h25q20 0 20 20v18q0 15-16 15H92"/><path d="M111 50h25m23 16v15m-18 21h-21" strokeWidth="3" strokeDasharray="2 6"/><path d="M178 48h45m-45 54h45" strokeDasharray="3 4"/><text x="226" y="51" fill="currentColor" stroke="none" fontSize="10">Stomach</text><text x="226" y="105" fill="currentColor" stroke="none" fontSize="10">Intestine</text></>}
 </g></svg>
}

const base='/timeline/week/22'
const entries={
 mother:[['Skin','Stretch marks & care','skin'],['Movement','Activity & movement','movement'],['Digestion','Digestive changes','digestion'],['Nutrition','Food & nutrients','nutrition'],['Your body','Pelvic floor & anatomy','body'],['Checkups','Prenatal care','checkups']],
 baby:[['Skin','Skin & fine hair','skin'],['Movement','Muscle development','movement'],['Digestion','First stool','digestion'],['Placenta','Oxygen & nutrients','placenta'],['Senses','Hearing & responses','senses'],['Growth','Development & anatomy','growth']]
} as const
function topicPath(subject:'mother'|'baby',topic:string){return base+'/'+subject+'/'+topic}
export function TopicArt({subject,topic}:{subject:'mother'|'baby';topic:string}){
 if(topic==='skin'||topic==='movement'||topic==='digestion')return subject==='mother'?<MotherDiagram kind={topic}/>:<ConceptDiagram kind={topic}/>
 return <svg viewBox="0 0 140 75" aria-hidden="true" focusable="false" className="directory-art"><g stroke="currentColor" strokeWidth="1.65" fill="none" strokeLinecap="round" strokeLinejoin="round">
 {topic==='nutrition'?<><path d="M70 23c-14-14-33-3-29 16 3 14 13 25 22 24l7-3 7 3c10 1 20-13 22-24 3-19-15-30-29-16Z" fill="var(--accent-soft)"/><path d="M70 24c0-15 9-17 21-17-3 10-11 14-21 12"/></>:topic==='body'?<><path d="M49 12q-12 23-2 36t23 16q13-2 23-16t-2-36M49 38q21 18 42 0M70 18v35" fill="var(--accent-soft)"/><path d="M49 50q21 13 42 0"/></>:topic==='checkups'?<><rect x="44" y="13" width="52" height="52" rx="6" fill="var(--accent-soft)"/><path d="M59 13v-5h22v5M54 40h9l5-10 7 21 5-11h7"/></>:topic==='placenta'?<><ellipse cx="65" cy="35" rx="27" ry="22" fill="var(--accent-soft)"/><path d="M65 54V34l-12-12m12 12 13-15M65 34l-17 8m17-8 19 8M65 54q8 13 26 10"/></>:topic==='senses'?<><path d="M57 55c-9-8-15-14-15-24a24 24 0 1 1 48 0c0 13-14 18-15 27-2 15-18 13-18-3Z" fill="var(--accent-soft)"/><path d="M56 32c0-15 20-17 20-3 0 8-9 10-11 18M102 22q12 10 0 22"/></>:<><circle cx="70" cy="21" r="13" fill="var(--accent-soft)"/><path d="M70 34v21m-19-15 19 8 19-8m-31 26 12-11 12 11"/></>}
 </g></svg>
}
const priorities=[
 {title:'Nutrition & brain development',description:'Understand how nutrients support development, and what studies of additional supplements actually found.',to:'mother/nutrition/brain-nutrients',subject:'mother',topic:'nutrition',label:'Nutrition'},
 {title:'Movement & physical preparation',description:'Explore activity, back and pelvic comfort, and the difference between maternal exercise and fetal movement.',to:'mother/movement',subject:'mother',topic:'movement',label:'Movement'},
 {title:'Skin & stretch mark prevention',description:'What happens beneath the skin, and why comfort and prevention are different goals.',to:'mother/skin/prevention',subject:'mother',topic:'skin',label:'Skin'}
] as const
function ChapterExchange(){
 return <figure className="chapter-exchange">
 <svg viewBox="0 0 340 146" role="img" aria-label="Conceptual illustration of maternal blood and fetal blood in separate circulations with exchange across the placenta">
 <rect width="340" height="146" rx="14" fill="#e9e5db"/>
 <path d="M33 45C55 24 80 29 104 54S130 104 150 102" fill="none" stroke="#b87c70" strokeWidth="16" strokeLinecap="round" opacity=".26"/>
 <path d="M33 45C55 24 80 29 104 54S130 104 150 102" fill="none" stroke="#a15e53" strokeWidth="2.4" strokeLinecap="round"/>
 <path d="M190 102C210 104 220 79 236 54S285 24 307 45" fill="none" stroke="#75867e" strokeWidth="16" strokeLinecap="round" opacity=".26"/>
 <path d="M190 102C210 104 220 79 236 54S285 24 307 45" fill="none" stroke="#61756d" strokeWidth="2.4" strokeLinecap="round"/>
 <path d="M170 28V112" stroke="#958c7e" strokeDasharray="3 4"/>
 <path d="M140 52H199m-8-5 8 5-8 5M199 76H140m8-5-8 5 8 5" stroke="#6c6e63" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
 <g fontFamily="system-ui,sans-serif" fontSize="10" fill="#403e36" textAnchor="middle"><text x="170" y="18">Placental exchange</text><text x="170" y="46">Oxygen &amp; nutrients</text><text x="170" y="89">Waste exchange</text><text x="67" y="127">Mother’s blood</text><text x="272" y="127">Baby’s blood</text></g>
 </svg>
 <figcaption>Two circulations, one exchange organ. Concept illustration, not to scale. <Link to={base+'/baby/placenta/exchange'}>Explore the placenta →</Link></figcaption>
 </figure>
}
export function Week22Pilot(){
 const [savedSubject,setSavedSubject]=useViewState<'baby'|'mother'>('pilot.week22.subject','baby')
 const [params,setParams]=useSearchParams()
 const requested=params.get('subject')
 const subject=requested==='mother'||requested==='baby'?requested:savedSubject
 const setSubject=(next:'baby'|'mother')=>{setSavedSubject(next);setParams({subject:next},{replace:true})}
 return <div className="pilot-week week-directory week-chapter" id="week-22">
 <style>{`
 .week-chapter{gap:1.2rem;padding-bottom:1.5rem}.week-chapter .pilot-header{gap:.4rem}
 .week-chapter .chapter-intro{display:grid;gap:.65rem}
 .week-chapter .chapter-intro h2,.week-chapter .chapter-heading{font:500 1.5rem/1.2 var(--font-display);letter-spacing:-.02em;margin:0}
 .week-chapter .chapter-intro>p,.week-chapter .chapter-section>p{font-size:.91rem;line-height:1.6;margin:0;color:var(--ink)}
 .week-chapter .chapter-exchange{margin:0;display:grid;gap:.5rem}.chapter-exchange svg{display:block;width:100%;height:auto}
 .chapter-exchange figcaption{font-size:.73rem;line-height:1.5;color:var(--ink-muted)}.chapter-exchange a{color:var(--accent-deep);text-decoration:underline;text-underline-offset:3px}
 .week-chapter .chapter-section{display:grid;gap:.6rem}
 .week-chapter .chapter-priorities{display:grid;border-top:1px solid var(--line)}
 .week-chapter .chapter-priority{display:grid;grid-template-columns:76px minmax(0,1fr) auto;align-items:center;gap:.8rem;border-bottom:1px solid var(--line);padding:.8rem 0;min-height:76px}
 .week-chapter .chapter-art{background:var(--bg-soft);border-radius:8px;display:grid;place-items:center;min-height:68px;color:var(--accent-deep);overflow:hidden}
 .week-chapter .chapter-art svg{max-width:100%;max-height:68px;display:block}
 .week-chapter .chapter-priority strong,.week-chapter .chapter-row strong{font-weight:650;display:block;font-size:.94rem;line-height:1.35}
 .week-chapter .chapter-priority small,.week-chapter .chapter-row small{display:block;color:var(--ink-muted);font-size:.76rem;line-height:1.45;margin-top:.2rem}
 .week-chapter .chapter-arrow{color:var(--accent-deep);font-size:1.3rem}
 .week-chapter .chapter-note{font-size:.76rem!important;line-height:1.5!important;color:var(--ink-muted)!important}
 .week-chapter .chapter-bridge{display:grid;gap:.5rem;padding-top:.85rem;border-top:1px solid var(--line)}
 .week-chapter .chapter-bridge h3{font:500 1.12rem/1.3 var(--font-display);margin:0}
 .week-chapter .chapter-bridge a{min-height:44px;display:flex;align-items:center;justify-content:space-between;font-size:.86rem;font-weight:600;border-bottom:1px solid var(--line);gap:.5rem}
 .week-chapter .chapter-directory{display:grid;gap:.6rem}.week-chapter .week-topic-grid{gap:0;grid-template-columns:1fr;border-top:1px solid var(--line)}
 .week-chapter .week-topic-tile{display:grid;grid-template-columns:64px minmax(0,1fr) auto;align-items:center;gap:.7rem;background:transparent;border:0;border-bottom:1px solid var(--line);border-radius:0;padding:.65rem 0;min-height:60px}
 .week-chapter .week-topic-tile svg,.week-chapter .week-topic-tile .pilot-diagram{height:48px;max-height:48px;max-width:64px}
 .week-chapter .week-safety-note{line-height:1.5;font-size:.76rem;border-left:2px solid var(--danger);padding:.25rem 0 .25rem .65rem}
 .week-chapter a:focus-visible,.week-chapter button:focus-visible{outline:2px solid var(--accent-deep);outline-offset:3px}
 @media(max-width:350px){.week-chapter .chapter-priority{grid-template-columns:56px minmax(0,1fr) auto;gap:.5rem}.week-chapter .chapter-art{min-height:56px}}
 `}</style>
 <header className="pilot-header"><div className="pilot-header-top"><Link className="reader-back" to="/timeline/pregnancy"><Glyph name="back"/>Pregnancy</Link><span className="pilot-kicker">SECOND TRIMESTER</span></div><h1 className="page-title">Week 22</h1><div className="pilot-progress" role="img" aria-label="Week 22 of a 40-week pregnancy reference timeline"><div><span style={{width:'55%'}}/></div><div className="pilot-progress-meta"><small>22 of 40 weeks</small><small>Research draft · review pending</small></div></div></header>
 <section className="chapter-intro" aria-label="This week in development"><h2>A growing connection</h2><p>Your baby’s muscles and sensory systems are developing while your body adapts to pregnancy. The placenta connects the two: it supports exchange between mother and baby.</p><ChapterExchange/></section>
 <div className="week-safety-note" role="note" aria-label="Content status">If usual baby movements slow, stop or change, contact your maternity team immediately. <Link to="/urgent">Warning signs &amp; help</Link></div>
 <section className="chapter-section" aria-label="Practical priorities"><h2 className="chapter-heading">Worth exploring this week</h2><p className="chapter-note">Three starting points for learning and discussion, not a list of things you must do at 22 weeks.</p><div className="chapter-priorities">{priorities.map(item=><Link className="chapter-priority" key={item.to} to={base+'/'+item.to}><span className="chapter-art" aria-hidden="true"><TopicArt subject={item.subject} topic={item.topic}/></span><span><strong>{item.title}</strong><small>{item.description}</small></span><span className="chapter-arrow" aria-hidden="true">›</span></Link>)}</div>
 <div className="chapter-bridge"><h3>Food, supplements &amp; evidence</h3><p className="chapter-note">Explore nutrient roles, food sources and research on additional intake. Individual supplement choices and doses belong with your care team.</p><Link to={base+'/mother/nutrition/omega-3'}>Fish &amp; omega-3 <span aria-hidden="true">›</span></Link><Link to={base+'/mother/nutrition/minerals'}>Iron, calcium &amp; vitamin D <span aria-hidden="true">›</span></Link><Link to={base+'/mother/nutrition/supplements'}>Prenatal supplement labels <span aria-hidden="true">›</span></Link></div>
 </section>
 <section className="chapter-section" aria-label="Mother and baby connections"><h2 className="chapter-heading">Mother and baby, together</h2><div className="chapter-bridge"><h3>Movement you can feel</h3><p className="chapter-note">Read about developing movement and how changes in usual patterns relate to care.</p><Link to={base+'/baby/movement/patterns'}>Baby’s movement patterns <span aria-hidden="true">›</span></Link><Link to={base+'/mother/movement/baby-movement'}>Feeling your baby move <span aria-hidden="true">›</span></Link></div><div className="chapter-bridge"><h3>Looking ahead</h3><p className="chapter-note">Learn about preparation and exposures without assuming this week is a deadline.</p><Link to={base+'/mother/body/birth-preparation'}>Birth preparation <span aria-hidden="true">›</span></Link><Link to={base+'/mother/checkups/home-work'}>Home &amp; workplace exposures <span aria-hidden="true">›</span></Link></div></section>
 <section className="chapter-directory" aria-label="Complete week topic directory"><h2 className="chapter-heading">Explore the whole chapter</h2><div className="pilot-subject" role="group" aria-label="Whose changes are shown?"><button type="button" aria-pressed={subject==='mother'} onClick={()=>setSubject('mother')}>Mother <small>Your body</small></button><button type="button" aria-pressed={subject==='baby'} onClick={()=>setSubject('baby')}>Baby <small>Development</small></button></div>
 <h3 className="section-title">{subject==='mother'?'Your changing body':'Your growing baby'}</h3>
 <nav className="week-topic-grid" aria-label="Development topics">{entries[subject].map(([title,subtitle,id])=><Link className="week-topic-tile chapter-row" key={id} to={topicPath(subject,id)} aria-label={title+" — "+subtitle}><TopicArt subject={subject} topic={id}/><span><strong>{title}</strong><small>{subtitle}</small></span><span className="chapter-arrow" aria-hidden="true">›</span></Link>)}</nav></section>
 <p className="chapter-note">Educational research drafts · clinical review pending. Development varies between individuals; this is not a personalized assessment.</p>
 <div className="page-controls"><Link className="btn btn-ghost" to="/timeline/week/21">Previous</Link><Link className="week-select-link" to="/timeline/pregnancy">Choose week</Link><Link className="btn btn-ghost" to="/timeline/week/23">Next</Link></div>
 </div>
}
