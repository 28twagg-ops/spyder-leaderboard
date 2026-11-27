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
export function Week22Pilot(){
 const [savedSubject,setSavedSubject]=useViewState<'baby'|'mother'>('pilot.week22.subject','baby')
 const [params,setParams]=useSearchParams()
 const requested=params.get('subject')
 const subject=requested==='mother'||requested==='baby'?requested:savedSubject
 const setSubject=(next:'baby'|'mother')=>{setSavedSubject(next);setParams({subject:next},{replace:true})}
 return <div className="pilot-week week-directory" id="week-22">
 <header className="pilot-header"><div className="pilot-header-top"><Link className="reader-back" to="/timeline/pregnancy"><Glyph name="back"/>Pregnancy</Link><span className="pilot-kicker">SECOND TRIMESTER</span></div><h1 className="page-title">Week 22</h1><div className="pilot-progress" role="img" aria-label="Week 22 of a 40-week pregnancy reference timeline"><div><span style={{width:'55%'}}/></div><div className="pilot-progress-meta"><small>22 of 40 weeks</small><small>Research draft · review pending</small></div></div></header>
 <div className="pilot-subject" role="group" aria-label="Whose changes are shown?"><button type="button" aria-pressed={subject==='mother'} onClick={()=>setSubject('mother')}>Mother <small>Your body</small></button><button type="button" aria-pressed={subject==='baby'} onClick={()=>setSubject('baby')}>Baby <small>Development</small></button></div>
 <h2 className="section-title">{subject==='mother'?'Your changing body':'Your growing baby'}</h2>
 <nav className="week-topic-grid" aria-label="Development topics">{entries[subject].map(([title,subtitle,id])=><Link className="week-topic-tile" key={id} to={topicPath(subject,id)} aria-label={title+" — "+subtitle}><TopicArt subject={subject} topic={id}/><strong>{title}</strong><small>{subtitle}</small></Link>)}</nav>
 <div className="week-safety-note" role="note" aria-label="Content status">Research draft, not medical advice. If usual baby movements slow, stop or change, contact your maternity team immediately. <Link to="/urgent">Warning signs</Link></div>
 <div className="page-controls"><Link className="btn btn-ghost" to="/timeline/week/21">Previous</Link><Link className="week-select-link" to="/timeline/pregnancy">Choose week</Link><Link className="btn btn-ghost" to="/timeline/week/23">Next</Link></div>
 </div>
}
