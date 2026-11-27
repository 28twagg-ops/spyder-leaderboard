import { Link,useParams } from 'react-router-dom'
import {ScreenHeading,ReadingRow} from '../components/ReadingUI'
import {EditorialReadingRow} from '../components/EditorialArticle'
import {WeekContext,WeekConnections,WeekDisclosure,usePilotWeek} from '../components/Week22Reading'
import {DraftBanner} from '../components/DraftBanner'
import {DirectoryArt} from './Week22Pilot'
import {Footnote,SourceDisclosure,NumericRecords} from './SkinTopicPage'
import {getArticle,gestationalWeeks} from '../data/researchCatalog'
import {getEvidenceSource,hasEvidenceHold,outcomes} from '../data/evidenceCatalog'
import {sourceAliasHeld} from '../data/skinTopicMap'
import {getVisual} from '../data/visualCatalog'
import {topicEditorial,type TopicEditorial,type ReadingSection} from '../data/weekEditorial'
import {week22Topics} from '../data/week22TopicMap'
import {midReadings,midReferences,type MidReading} from '../data/midPregnancyReadings'
import type {PilotWeek} from '../data/weeklyFeatures'


/** Render only sections whose cited source records are available and not held. */
export function ReadingSections({sections,ids}:{sections:ReadingSection[];ids:string[]}){
 return <>{sections.map((part,i)=>part.refs.every(id=>getEvidenceSource(id)&&!sourceAliasHeld(id))?<section className="reading-section" key={i}><h2>{part.title}</h2><p>{part.body} {part.refs.map(id=><Footnote key={id} id={id} n={ids.indexOf(id)+1}/>)}</p></section>:<p key={i} className="small-copy muted">A related finding is held for evidence review.</p>)}</>
}
function ReadingVisual({visual}:{visual:NonNullable<TopicEditorial['visual']>}){
 return <figure className="reading-concept"><h2>{visual.title}</h2><div className="reading-concept-items">{visual.items.map(([label,detail],i)=><div key={label}><span className="reading-concept-number" aria-hidden="true">{String(i+1).padStart(2,'0')}</span><strong>{label}</strong><small>{detail}</small></div>)}</div><figcaption>{visual.caption}</figcaption></figure>
}

function StudyComparison({id}:{id:string}){
 if(id==='omega-3'||id==='growth-research'){
  const row=outcomes.find(x=>x.id==='P5-E13')
  if(!row||hasEvidenceHold(row)||sourceAliasHeld(row.source_id)||sourceAliasHeld('S082'))return <p>Study comparison held.</p>
  return <section className="skin-finding"><small className="pilot-kicker">ORIP · RANDOMIZED TRIAL · 2019</small><h2 className="section-title">Birth before 34 weeks</h2><div className="skin-results"><div><small>Omega-3 group</small><strong>2.2%</strong><small>61 / 2,734 pregnancies</small></div><div><small>Control group</small><strong>2.0%</strong><small>55 / 2,752 pregnancies</small></div></div><p><strong>No clear reduction in this trial.</strong> <Footnote id="P5-14" n={1}/></p><p className="skin-source-line">Adjusted RR 1.13 · 95% CI 0.79–1.63</p><div className="study-limitations"><p>Public/foundation-funded trial with donated capsules. Results apply to the studied intervention and population, not every omega-3 product or dose.</p></div><p className="skin-source-line">[1] Makrides et al., NEJM, 2019. Source-reported values; chart release pending.</p></section>
 }
 if(id==='voice-music'&&!sourceAliasHeld('P4-07'))return <section className="skin-finding"><small className="pilot-kicker">PARTANEN ET AL. · 2013</small><h2 className="section-title">What did researchers measure?</h2><div className="pilot-flow-line"><div><strong>Sound exposure</strong><small>Before birth</small></div><span aria-hidden="true">→</span><div><strong>Brain response</strong><small>After birth</small></div><span aria-hidden="true">≠</span><div><strong>IQ</strong><small>Not established</small></div></div><p>Sound responses differed after prenatal exposure; this does not establish improved intelligence. <Footnote id="P4-07" n={1}/></p><div className="study-limitations"><p>Small study; neural response is not a long-term developmental benefit. No sound-training schedule recommended.</p></div></section>
 if(id==='nausea'){
  const rows=outcomes.filter(x=>['P7-E01','P7-E02'].includes(x.id))
  if(rows.length!==2||rows.some(row=>hasEvidenceHold(row)||sourceAliasHeld(row.source_id)))return <p>Study comparison held.</p>
  return <section className="skin-finding"><small className="pilot-kicker">NETWORK META-ANALYSIS · RESEARCH EXTRACTION</small><h2 className="section-title">Nausea score vs placebo</h2><div className="skin-results">{rows.map(row=><div key={row.id}><small>{row.id==='P7-E01'?'Ginger':'Vitamin B6'}</small><strong>{row.estimate}</strong><small>95% CI {row.lower} to {row.upper}</small></div>)}</div><p>Lower nausea scores were reported, but the estimates have low confidence. <Footnote id="P7-02" n={1}/></p><p className="skin-source-line">0–10 scale · mean difference vs placebo, not direct ginger vs B6.</p><div className="study-limitations"><p>Network comparisons are not a head-to-head trial; no dose or treatment protocol.</p></div></section>
 }
 return null
}
export function Week22TopicPage(){
 const {subject,topic,subtopic}=useParams()
 const weekNumber=usePilotWeek(),base='/timeline/week/'+weekNumber
 const t=week22Topics.find(x=>x.subject===subject&&x.id===topic)
 const c=t?.children.find(x=>x.id===subtopic)
 const extra=midReadings[subject+'/'+topic+'/'+subtopic]
 if(extra&&(subject==='mother'||subject==='baby'))return <MidReadingPage subject={subject} topic={topic??''} reading={extra} week={weekNumber}/>
 if(subject==='mother'&&topic==='body'&&subtopic==='rib-comfort')return <RibReading week={weekNumber}/>
 if(subject==='baby'&&topic==='growth'&&(subtopic==='lungs'||subtopic==='blood'))return <DevelopmentReading kind={subtopic} week={weekNumber}/>
 if(!t||(subtopic&&!c))return <div className="stack"><ScreenHeading title="Topic not found" back={base}/></div>
 const path=base+'/'+t.subject+'/'+t.id
 const readingId=t.subject+'/'+t.id+(c?'/'+c.id:'')
 const week=gestationalWeeks.find(x=>x.week===weekNumber)
 const reading=topicEditorial[readingId]
 const refIds=[...new Set([...(c?.source_ids??[t.source_id]),...(reading?.sections.flatMap(part=>part.refs)??[])])]
 return <div className="pilot-week skin-page">
 <ScreenHeading title={c?.title??t.title} subtitle={(t.subject==='mother'?'Mother':'Baby')+' · Week '+weekNumber} back={c?path:base+'?subject='+t.subject} backLabel={c?t.title:'Week '+weekNumber}/>
 <WeekContext subject={t.subject==='mother'?'mother':'baby'} topic={c?{label:t.title,to:path}:undefined}/>
 <div className="pilot-visual week-article-visual"><DirectoryArt subject={t.subject==='mother'?'mother':'baby'} kind={c?.id==='brain-nutrients'?'brain':c?.id==='circulation'?'blood':c?.id==='home-work'||c?.id==='plastics-water'||c?.id==='air-heat'?'environment':t.id}/></div>
 <p className="skin-lede">{c?.summary??t.summary} <Footnote id={c?.source_ids[0]??t.source_id} n={1}/></p><small className="muted">Concept illustration · Research draft</small>{weekNumber!==22&&<p className="small-copy muted">Shared second-trimester reading, not an exact week-{weekNumber} milestone.</p>}
 {!c?<><h2 className="section-title">Read about it</h2><div className="ref-rows">{t.children.map((item,index)=><EditorialReadingRow key={item.id} index={index} to={path+'/'+item.id} title={item.title} subtitle={item.summary}/>)}</div>{Object.entries(midReadings).filter(([key])=>key.startsWith(t.subject+'/'+t.id+'/')).map(([key,reading])=><ReadingRow key={key} to={base+'/'+key} title={reading.title} subtitle={reading.window}/>)}{t.subject==='baby'&&t.id==='growth'&&<><ReadingRow to={path+'/lungs'} title="Developing airways"/><ReadingRow to={path+'/blood'} title="Blood-cell formation"/></>}{t.subject==='baby'&&<details className="panel disclosure"><summary>Original week description</summary><p>{week?.description}</p><p>{week?.interpretation}</p><Footnote id="PED-GESTATION" n={1}/></details>}</>:<>
 <article className="week-editorial-reading">{c.id==='urgent'&&<Link className="btn" to="/urgent">Open urgent warning signs now</Link>}{reading?.visual&&<ReadingVisual visual={reading.visual}/>}<ReadingSections sections={reading?.sections??[]} ids={refIds}/>{c.visual_ids.length>0&&<div className="week-inline-reference"><h3>See the original illustration</h3><ReadingRow to={'/visuals/'+c.visual_ids[0]} title="View the original anatomical reference" subtitle="Scientific reference · opens original source page"/></div>}</article>
 <StudyComparison id={c.id}/>
 {c.note&&<p className="skin-lede">{c.note}</p>}
 <WeekDisclosure id={readingId+'/read'} title="More research & context"><p className="small-copy muted">Related library reading · medical review pending</p>{c.article_ids.map((id,index)=>{const a=getArticle(id);return a?<section key={id} className="research-group"><h3>{a.title}</h3><p>{a.quick_answer}</p><p className="small-copy muted">{a.visible_safety}</p><p className="small-copy muted">Related archive references: {a.source_ids.map((id,i)=><Footnote key={id} id={id} n={i+1}/>)}</p><EditorialReadingRow index={index} to={'/research/'+id} title="Read the broader research article" subtitle={a.title+' · opens library article'}/></section>:null})}</WeekDisclosure>
 <WeekDisclosure id={readingId+'/sources'} title="Studies & references"><SourceDisclosure ids={refIds}/><NumericRecords ids={c.outcome_ids}/>{c.visual_ids.length>0&&<section className="research-group"><h3>Original illustrations</h3>{c.visual_ids.map(id=><ReadingRow key={id} to={'/visuals/'+id} title={getVisual(id)?.title??id} subtitle="Original reference · review pending"/>)}</section>}</WeekDisclosure><WeekConnections id={readingId}/>{t.children.length>1&&<WeekDisclosure id={readingId+'/related'} title={'More about '+t.title.toLowerCase()}><div className="ref-rows">{t.children.filter(item=>item.id!==c.id).map((item,index)=><EditorialReadingRow key={item.id} index={index} to={path+'/'+item.id} title={item.title}/>)}</div></WeekDisclosure>}
 </>}
 <div className="pilot-safety"><strong>Safety comes first</strong><p>Contact your maternity care team immediately if usual baby movements slow, stop or change. Urgent signs override routine reading.</p><Link to="/urgent">Know the warning signs ›</Link></div><DraftBanner status="research_only"/>
 </div>
}

function DevelopmentReading({kind,week}:{kind:'lungs'|'blood';week:PilotWeek}){
 const base='/timeline/week/'+week,lung=kind==='lungs'
 return <div className="pilot-week skin-page"><ScreenHeading title={lung?'How the lungs develop before birth':'How blood cells develop'} subtitle={'Baby · Week '+week} back={base+'?subject=baby'} backLabel={'Week '+week}/><WeekContext subject="baby" topic={{label:'Growth',to:base+'/baby/growth'}}/>
 <div className="pilot-visual week-article-visual"><DirectoryArt subject="baby" kind={lung?'lungs':'marrow'}/></div><article className="week-editorial-reading"><p className="skin-lede">{lung?'Before birth, developing airways form as part of lung maturation.':'Bone marrow becomes a site of blood-cell production during fetal development.'} <Footnote id="PED-GESTATION" n={1}/></p><p className="small-copy muted">Concept illustration · Reference describes weeks 23–25. {week===22?'Looking ahead, not a week-22 milestone.':'Development varies between individuals.'}</p><h2>{lung?'Why the placenta still matters':'Why maternal nutrition matters'}</h2><p>{lung?'The developing lungs are not yet responsible for oxygen exchange with air. The placenta supports exchange between mother and baby before birth. Developing airways do not establish readiness to breathe independently.':'Iron is needed to form hemoglobin, the protein in red blood cells that carries oxygen. Pregnancy increases iron needs, but the developmental window does not create a new supplement requirement at a particular week.'} <Footnote id={lung?'PED-FETUS':'P5-28'} n={2}/></p><h2>Continue exploring</h2><ReadingRow to={base+'/baby/placenta/'+(lung?'exchange':'circulation')} title={lung?'Oxygen & nutrient exchange':'Fetal circulation'}/><ReadingRow to={base+'/mother/nutrition/minerals'} title="Iron, calcium & vitamin D" subtitle="Nutrition and supplementation research"/><ReadingRow to="/research/EV-ART-014" title="Fetal development research"/></article><WeekDisclosure id={'development/'+week+'/'+kind} title="Studies & references"><SourceDisclosure ids={['PED-GESTATION','PED-FETUS','P5-28']}/></WeekDisclosure><div className="pilot-safety"><strong>Safety comes first</strong><p>Contact your maternity team immediately if usual baby movements slow, stop or change.</p><Link to="/urgent">Know the warning signs ›</Link></div><DraftBanner status="research_only"/></div>
}

function RibReading({week}:{week:PilotWeek}){
 const base='/timeline/week/'+week,source='https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/2nd-trimester/week-23/'
 return <div className="pilot-week skin-page"><ScreenHeading title="Rib comfort & breathlessness" subtitle={'Mother · Week '+week} back={base+'?subject=mother'} backLabel={'Week '+week}/><WeekContext subject="mother" topic={{label:'Your body',to:base+'/mother/body'}}/><div className="pilot-visual week-article-visual"><DirectoryArt subject="mother" kind="ribs"/></div><article className="week-editorial-reading"><p className="skin-lede">The NHS describes rib discomfort and increased breathlessness as possible changes around week 23. This is not a symptom that everyone experiences. <a className="skin-footnote" href={source} target="_blank" rel="noreferrer">[1]</a></p><h2>Why the chest may feel different</h2><p>As pregnancy progresses, the growing uterus and changes in the rib cage can affect comfort. General descriptions cannot establish the reason for an individual's symptoms. <a className="skin-footnote" href={source} target="_blank" rel="noreferrer">[1]</a></p><h2>When symptoms need assessment</h2><p>New or concerning breathlessness or pain needs medical advice. Chest pain, trouble breathing or severe symptoms can be urgent; seek immediate assessment and call emergency services for life-threatening symptoms. <Footnote id="P9-G04" n={2}/></p><Link to="/urgent" className="btn btn-ghost">Warning signs &amp; help</Link></article><WeekDisclosure id={'rib-comfort/'+week} title="Studies & references"><p><a href={source} target="_blank" rel="noreferrer">[1] NHS Start for Life: Week 23</a> · public patient guidance, not a week-specific treatment trial.</p><SourceDisclosure ids={['P9-G04']}/></WeekDisclosure><DraftBanner status="research_only"/></div>
}

function MidReadingPage({subject,topic,reading,week}:{subject:'mother'|'baby';topic:string;reading:MidReading;week:PilotWeek}){
 const base='/timeline/week/'+week
 const ids=[...new Set(reading.sections.flatMap(part=>part.refs))]
 const allowed=(id:string)=>{const ref=midReferences[id];return !!ref&&(!ref.sourceId||(!!getEvidenceSource(ref.sourceId)&&!sourceAliasHeld(ref.sourceId)))}
 const title=week22Topics.find(t=>t.subject===subject&&t.id===topic)?.title??topic
 return <div className="pilot-week skin-page"><ScreenHeading title={reading.title} subtitle={(subject==='mother'?'Mother':'Baby')+' · Week '+week} back={base+'/'+subject+'/'+topic} backLabel={title}/><WeekContext subject={subject} topic={{label:title,to:base+'/'+subject+'/'+topic}}/><div className="pilot-visual week-article-visual"><DirectoryArt subject={subject} kind={reading.art}/></div><p className="small-copy muted">{reading.window} · Concept illustration · Research draft</p><article className="week-editorial-reading">{reading.sections.map(part=>part.refs.every(allowed)?<section className="reading-section" key={part.title}><h2>{part.title}</h2><p>{part.body} {part.refs.map(id=><a className="skin-footnote" key={id} href={midReferences[id].url} target="_blank" rel="noreferrer" aria-label={'Source '+(ids.indexOf(id)+1)+': '+midReferences[id].title}>[{ids.indexOf(id)+1}]</a>)}</p></section>:<p key={part.title} className="small-copy muted">A related finding is held for evidence review.</p>)}<h2>Continue exploring</h2>{reading.related.map(([path,label])=><ReadingRow key={path} to={path.startsWith('/')?path:base+'/'+path} title={label}/>)}</article><WeekDisclosure id={'mid/'+subject+'/'+topic+'/'+reading.title} title="Studies & references">{ids.map((id,i)=>allowed(id)?<p key={id}><a href={midReferences[id].url} target="_blank" rel="noreferrer">[{i+1}] {midReferences[id].title}</a> · Source and applicability review pending.</p>:<p key={id}>Reference held for review.</p>)}<p className="small-copy muted">Patient guidance and research publications have different purposes. Funding, study methods and underlying evidence require independent appraisal; unknown funding is not independence.</p></WeekDisclosure><div className="pilot-safety"><strong>Safety comes first</strong><p>Contact your maternity team immediately if usual baby movements slow, stop or change. Urgent symptoms override routine reading.</p><Link to="/urgent">Know the warning signs ›</Link></div><DraftBanner status="research_only"/></div>
}
