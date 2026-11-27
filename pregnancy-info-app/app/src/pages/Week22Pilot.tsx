import { Link } from 'react-router-dom'
import { useViewState } from '../hooks/useViewMemory'
import { Glyph } from '../components/Glyph'
import { ReadingRow } from '../components/ReadingUI'
import { DraftBanner } from '../components/DraftBanner'
import { type GestationalWeek, getSource } from '../data/researchCatalog'
import { safeVisualUrl } from '../data/visualCatalog'

/** One deliberately bounded design pilot. General educational concepts, not individual measurements or care instructions. */
const concepts=[
 {id:'skin',label:'Skin',heading:'A fine layer of hair',copy:'Soft, tiny hairs called lanugo cover much of the body around this stage.',detail:'Lanugo is a normal part of fetal development. It is temporary and is different from the thicker hair that develops later.',source:'https://medlineplus.gov/ency/article/002398.htm'},
 {id:'movement',label:'Movement',heading:'Muscles are developing',copy:'As muscles develop, movement becomes more active. You may notice movement during this part of pregnancy.',detail:'The timing and way movement is felt vary. A week-by-week illustration cannot establish whether your baby is healthy. Contact your maternity care team if movement concerns you.',source:'https://medlineplus.gov/ency/article/002398.htm'},
 {id:'digestion',label:'Digestion',heading:'The first stool is forming',copy:'The intestines are beginning to contain meconium, the material that will become the first stool.',detail:'The word meconium describes the dark first stool. Its formation is a normal developmental process before birth, not a sign that the baby is ready for delivery.',source:'https://medlineplus.gov/ency/article/002398.htm'},
] as const
type Concept=typeof concepts[number]['id']
function ConceptDiagram({kind}:{kind:Concept}){
 return <svg viewBox="0 0 280 140" role="img" aria-label={kind==='skin'?'Schematic showing fine hairs on a skin surface':kind==='movement'?'Schematic showing movement in two directions around a joint':'Schematic showing material accumulating in an intestinal passage'} className="pilot-diagram">
 <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
 {kind==='skin'?<><path d="M27 78 Q83 70 140 78 T253 78L253 115H27Z" fill="var(--accent-soft)"/><path d="M27 96H253" opacity=".45"/>{[48,83,118,153,188,223].map(x=><path key={x} d={`M${x} 78q-3-24 9-38`}/>)}<path d="M188 35l25-17h37" strokeDasharray="2 4"/><text x="251" y="15" textAnchor="end" fill="currentColor" stroke="none" fontSize="11">Fine hair</text><text x="140" y="129" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">Skin surface</text></>:kind==='movement'?<><path d="M64 35l58 44 69-34" strokeWidth="17" stroke="var(--accent)" opacity=".28"/><path d="M64 35l58 44 69-34"/><circle cx="122" cy="79" r="9" fill="var(--bg-elevated)"/><path d="M122 79l65 34" strokeDasharray="5 5"/><path d="M213 42q30 38-2 75m0 0 3-15m-3 15 15-5"/><text x="139" y="20" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">Changing position</text></>:<><path d="M75 29h130q18 0 18 18t-18 18H87q-18 0-18 18t18 18h116" strokeWidth="22" opacity=".13"/><path d="M75 29h130q18 0 18 18t-18 18H87q-18 0-18 18t18 18h116" strokeWidth="1.7"/>{[100,120,140,160,180,200].map(x=><circle key={x} cx={x} cy="101" r="4" fill="var(--accent)" stroke="none"/>)}<path d="M150 110v13h64" strokeDasharray="2 4"/><text x="216" y="126" fill="currentColor" stroke="none" fontSize="11">Meconium</text></>}
 </g></svg>
}
const motherConcepts=[
 {id:'skin',label:'Skin',heading:'Your skin is stretching',copy:'As your belly grows, stretch marks may appear. Hormonal changes can also affect your skin.',detail:'Stretch marks are common, but not everyone develops them. They often fade over time. No product has been shown to reliably prevent them.',source:'https://www.nhs.uk/pregnancy/common-symptoms/stretch-marks/'},
 {id:'movement',label:'Movement',heading:'You may feel your baby move',copy:'Early movements can feel like small flutters. When you first notice them varies from one pregnancy to another.',detail:'If your baby is moving less than usual, stops moving, or its usual movement pattern changes, contact your maternity care team immediately. Do not wait until the next day.',source:'https://www.nhs.uk/pregnancy/keeping-well/your-babys-movements/'},
 {id:'digestion',label:'Digestion',heading:'Digestion may feel different',copy:'Bloating, constipation and heartburn can occur during pregnancy, including around this stage.',detail:'These symptoms vary. Discuss persistent or concerning symptoms with your care team rather than assuming they are caused by pregnancy.',source:'https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-22/'},
] as const
function MotherDiagram({kind}:{kind:Concept}){
 return <svg viewBox="0 0 280 140" role="img" aria-label={kind==='skin'?'Concept illustration of skin expanding, with arrows pointing outward':kind==='movement'?'Concept illustration of movement sensations near a pregnant abdomen':'Concept illustration of digestion, with a dotted path through the intestine'} className="pilot-diagram">
 <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
 {kind==='skin'?<><path d="M42 81Q140 26 238 81L238 112H42Z" fill="var(--accent-soft)"/><path d="M42 96Q140 51 238 96" opacity=".45"/>{[92,116,140,164,188].map((x,i)=><path key={x} d={`M${x} ${60+Math.abs(i-2)*5}l-3 20`} strokeDasharray="3 3" opacity=".7"/>)}<path d="M92 37H41m0 0 9-7m-9 7 9 7M188 37h51m0 0-9-7m9 7-9 7"/><text x="140" y="23" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">Skin expands</text><text x="140" y="128" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">Stretching skin</text></>:kind==='movement'?<><path d="M102 16q-10 38-2 55q7 17-12 47M122 16q9 25 39 30q49 12 46 43q-3 25-36 29H88" fill="var(--accent-soft)"/><circle cx="159" cy="81" r="13" strokeDasharray="3 4"/><path d="M179 65q16 15 0 32M188 56q26 25 0 49"/><text x="144" y="133" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">Fluttering sensation</text></>:<><path d="M103 18v21q0 10 11 10h25q20 0 20 20v18q0 15-16 15H92" strokeWidth="16" opacity=".16"/><path d="M103 18v21q0 10 11 10h25q20 0 20 20v18q0 15-16 15H92"/><path d="M111 50h25m23 16v15m-18 21h-21" strokeWidth="3" strokeDasharray="2 6"/><path d="M178 48h45m-45 54h45" strokeDasharray="3 4"/><text x="226" y="51" fill="currentColor" stroke="none" fontSize="10">Stomach</text><text x="226" y="105" fill="currentColor" stroke="none" fontSize="10">Intestine</text></>}
 </g></svg>
}

function PlacentaDiagram(){
 return <figure className="pilot-flow"><figcaption>How the connection works</figcaption><div className="pilot-flow-line"><div><strong>Mother</strong><small>Blood supply</small></div><span aria-hidden="true">↔</span><div><strong>Placenta</strong><small>Exchange</small></div><span aria-hidden="true">↔</span><div><strong>Baby</strong><small>Umbilical cord</small></div></div><p className="pilot-flow-key">Oxygen and nutrients pass toward the baby; waste products pass back through the placenta. The two blood supplies normally remain separate.</p><small>Concept diagram, not an anatomical drawing.</small></figure>
}
export function Week22Pilot({week,weekPicker}:{week:GestationalWeek;weekPicker:React.ReactNode}){
 const [subject,setSubject]=useViewState<'baby'|'mother'>('pilot.week22.subject','baby')
 const [selected,setSelected]=useViewState<Concept>('pilot.week22.concept','skin')
 const isBaby=subject==='baby'
 const items=isBaby?concepts:motherConcepts
 const concept=items.find(item=>item.id===selected)??items[0]
 const source=week.source_id?getSource(week.source_id):undefined
 return <div className="pilot-week" id="week-22">
  <header className="pilot-header"><Link className="reader-back" to="/timeline/pregnancy"><Glyph name="back"/>Pregnancy</Link><span className="pilot-kicker">PREGNANCY · SECOND TRIMESTER</span><h1 className="page-title">Week 22</h1><p>See how your baby develops and how your body changes.</p><div className="pilot-progress" role="img" aria-label="Week 22 of a 40-week pregnancy reference timeline"><div><span style={{width:'55%'}}/></div><small>22 of 40 weeks · Reference timeline</small></div></header>
  <div className="pilot-subject" role="group" aria-label="Whose changes are shown?"><button type="button" aria-pressed={!isBaby} onClick={()=>setSubject('mother')}>Mother <small>Your body</small></button><button type="button" aria-pressed={isBaby} onClick={()=>setSubject('baby')}>Baby <small>Development</small></button></div>
  <section className="pilot-learn" aria-labelledby="pilot-learn">
   <div className="pilot-section-heading"><h2 id="pilot-learn">{isBaby?'Your baby':'Your body'}</h2><p>{isBaby?'Changes in your baby around this week.':'Changes you may notice during pregnancy.'}</p></div>
   <div className="pilot-tabs" role="group" aria-label="Development topic">{items.map(item=><button type="button" key={item.id} aria-pressed={selected===item.id} onClick={()=>setSelected(item.id)}>{item.label}</button>)}</div>
   <div className="pilot-concept" aria-live="polite" key={subject}>
    <div className="pilot-visual">{isBaby?<ConceptDiagram kind={concept.id}/>:<MotherDiagram kind={concept.id}/>}</div>
    <div className="pilot-concept-text"><span className="pilot-context">{isBaby?'Baby':'Mother'} · {concept.label}</span><h3>{concept.heading}</h3><p>{concept.copy}</p><small className="pilot-diagram-caption">Simplified concept illustration · Not clinical anatomy</small>
     <details key={subject+concept.id} className="disclosure"><summary>Understand more</summary><p>{concept.detail}</p><a href={concept.source} target="_blank" rel="noreferrer">Original source ↗</a></details>
    </div>
   </div>
  </section>
  <div className="pilot-safety"><strong>Safety comes first</strong><p>Every pregnancy is different. This page cannot assess symptoms or growth. Contact your maternity care team immediately if movements slow, stop or change from their usual pattern. Do not wait for your next checkup if you have warning signs.</p><Link to="/urgent">Know the warning signs ›</Link></div>
  <DraftBanner status="research_only"/>
  <section className="pilot-section" aria-label="Related reading">
   <h2 className="section-title">Explore more</h2>
   {isBaby?<><div className="surface-list"><ReadingRow to="/visuals/EV-V005" title="Explore the placenta" subtitle="Original labeled textbook illustration"/><ReadingRow to="/research/EV-ART-014" title="How the baby develops" subtitle="The longer view of fetal development"/></div><details className="panel disclosure"><summary>How the placenta supports your baby</summary><PlacentaDiagram/></details></>:<div className="surface-list"><ReadingRow to="/research/EV-ART-018" title="Skin changes and stretch marks" subtitle="What changes and what the evidence says"/><ReadingRow to="/research/EV-ART-016" title="Movement and strength" subtitle="Exercise research and safety"/><ReadingRow to="/research/EV-ART-013" title="Pregnancy checkups" subtitle="What your care team looks at"/><ReadingRow to="/visuals/EV-V004" title="How the uterus grows" subtitle="Original textbook illustration"/></div>}
   <details className="panel disclosure"><summary>Explore the science &amp; sources</summary><p>Research draft, pending independent review. The descriptions are typical developments, not an assessment of an individual pregnancy.</p><p>{week.description}</p><p>{week.interpretation}</p>{safeVisualUrl(source?.url)&&<p><a href={safeVisualUrl(source?.url)} target="_blank" rel="noreferrer">{source?.title??'Original week reference'} ↗</a></p>}<p><a href="https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-22/" target="_blank" rel="noreferrer">NHS · Week 22 overview ↗</a></p><p><a href="https://www.nhs.uk/pregnancy/keeping-well/your-babys-movements/" target="_blank" rel="noreferrer">NHS · Baby's movements ↗</a></p><p><a href="https://medlineplus.gov/ency/imagepages/17010.htm" target="_blank" rel="noreferrer">MedlinePlus · Placenta ↗</a></p></details>
  </section>
  <div className="page-controls"><Link className="btn btn-ghost" to="/timeline/week/21">Previous</Link><span className="muted">22 / 40</span><Link className="btn btn-ghost" to="/timeline/week/23">Next</Link></div>{weekPicker}
 </div>
}
