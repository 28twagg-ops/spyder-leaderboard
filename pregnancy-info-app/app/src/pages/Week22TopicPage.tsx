import { Link,useParams } from 'react-router-dom'
import {ScreenHeading,ReadingRow} from '../components/ReadingUI'
import {EditorialReadingRow} from '../components/EditorialArticle'
import {plainReading} from '../data/plainReading'
import {WeekContext,WeekConnections,WeekDisclosure,usePilotWeek} from '../components/Week22Reading'
import {DraftBanner} from '../components/DraftBanner'
import {DirectoryArt} from './Week22Pilot'
import {Footnote,SourceDisclosure,NumericRecords} from './SkinTopicPage'
import {getArticle,gestationalWeeks} from '../data/researchCatalog'
import {hasEvidenceHold,outcomes} from '../data/evidenceCatalog'
import {sourceAliasHeld} from '../data/skinTopicMap'
import {getVisual} from '../data/visualCatalog'
import {week22Topics} from '../data/week22TopicMap'


// Editorial explanations of the existing topic map and draft research, not new clinical guidance.
const topicReading:Record<string,string>={
 'mother/movement/activity':'Activity studies ask about different outcomes, including maternal fitness, comfort and pregnancy outcomes. A study of a short exercise session cannot establish that every activity is suitable for every pregnancy.',
 'mother/movement/pain':'Pelvic girdle pain and ordinary exercise research are not interchangeable. The related physical therapy literature considers pain and function rather than simply measuring strength.',
 'mother/movement/baby-movement':'Learning about typical fetal development is different from assessing a change in your own baby’s movements. The warning-sign advice takes priority over any general description of this week.',
 'mother/movement/mood':'Research connects activity, sleep and mental wellbeing in several ways. An association or change in a symptom score does not establish that exercise can replace mental health care.',
 'mother/digestion/nausea':'Research on nausea compares symptom scores, vomiting and other outcomes. The comparison below concerns average nausea scores, not a prescription or proof that two remedies work equally well.',
 'mother/digestion/food-safety':'Food safety and nutrition answer complementary questions: how food supports health and how illness from food can be avoided. The linked reading keeps those questions together.',
 'mother/digestion/gut-health':'Probiotic research is specific to the organisms, preparations and populations studied. Findings about one preparation should not be generalized to all products or all pregnancy outcomes.',
 'mother/nutrition/food':'Food and prenatal supplements have different roles. An adequate nutrient intake is not the same as a supplement dose; the original nutrition reading covers that distinction.',
 'mother/nutrition/supplements':'A label describes what a product is intended to contain. Product testing asks whether that description matches the contents, while clinical trials ask whether an intervention improves health.',
 'mother/nutrition/omega-3':'A trial of birth timing answers a different question from a study of later child learning. The result below is one example of pregnancy-outcome evidence, not a universal conclusion about fish or DHA.',
 'mother/nutrition/brain-nutrients':'A nutrient can be important for normal development without evidence that taking extra amounts improves cognitive performance. The archived research distinguishes those questions.',
 'mother/nutrition/minerals':'Iron, calcium and vitamin D have different functions and evidence bases. Research on one nutrient cannot be transferred to another; clinical needs and existing care remain individual.',
 'mother/body/core':'Abdominal wall changes during pregnancy and recovery after birth are different stages. Postpartum exercise results do not establish a pregnancy exercise prescription.',
 'mother/body/pelvic-floor':'Pelvic floor research considers strength, relaxation, pain and function. The right kind of assessment depends on symptoms rather than assuming every person needs more strengthening.',
 'mother/body/breasts':'Pregnancy itself brings breast changes. Studies of appearance should be interpreted separately from feeding decisions and infant health, without pressure to preserve a particular appearance.',
 'mother/body/circulation':'Studies of circulation and compression garments may measure different symptoms or physical outcomes. A symptom improvement is not proof that all vein changes can be prevented.',
 'mother/body/birth-preparation':'Birth preparation includes preferences, support and clinical care. The linked research is a chance to read ahead, not a deadline to begin a procedure at week 22.',
 'mother/checkups/prenatal':'Screening is designed to identify when further assessment may be useful; it is not necessarily a diagnosis. Prenatal visits also provide an opportunity to discuss individual questions.',
 'mother/checkups/urgent':'Warning signs are not a research reading task. Use the urgent-help information rather than waiting to compare studies or a scheduled appointment.',
 'mother/checkups/home-work':'Exposure research distinguishes known hazards from speculative product claims. The home and work reading considers sources of exposure and the limits of evidence for particular precautions.',
 'mother/checkups/plastics-water':'Measuring a chemical in water or tissue is different from establishing its effect on health. The research distinguishes exposure reduction, clinical outcomes and uncertainties.',
 'mother/checkups/air-heat':'Air quality, heat and food exposure are separate environmental topics. Studies of changes in measured exposure are not automatically studies of improved child health.',
 'baby/skin/lanugo':'Lanugo is the term for fine fetal body hair. The development reference describes it as one part of the broader changes taking place in the skin, rather than an individual milestone to check at home.',
 'baby/skin/skin-development':'Skin structure and the timing of fetal development are different questions. The original anatomy reference helps explain the layers; it is not an image of an individual baby at week 22.',
 'baby/movement/muscles':'The developing body and movement are related, but a weekly development description is not a measure of strength or a target for exercise. The skeletal illustration is a general reference.',
 'baby/movement/patterns':'Movement development and the movements a pregnant person notices are connected topics. A general description cannot determine whether an individual change is reassuring.',
 'baby/movement/maternal-activity':'Research on maternal activity may assess pregnancy outcomes or later development. It does not provide a way to determine an individual baby’s response to a specific exercise session.',
 'baby/digestion/meconium':'Meconium is the name for the material that forms in the fetal intestinal tract and becomes the first stool. This is a description of development before birth, not a feeding milestone.',
 'baby/digestion/nutrition-connection':'Before birth, nutrition is linked to placental exchange rather than meals in the usual sense. The placenta reading explains that connection; the maternal nutrition reading covers the other side.',
 'baby/placenta/exchange':'The placenta and umbilical connection are part of the exchange system between mother and baby. The original illustration and circulation reading show related aspects of that system.',
 'baby/placenta/circulation':'The original fetal circulation diagram describes how blood travels through the developing circulation. It is a general anatomy reference, not an individual ultrasound or assessment.',
 'baby/placenta/exposures':'Detection of a substance in placental tissue does not establish the size or nature of a health effect. Exposure studies and clinical outcome studies need to be interpreted separately.',
 'baby/senses/hearing':'Hearing develops over overlapping stages. General development references describe the process, while sound-exposure studies ask narrower questions about measurable responses.',
 'baby/senses/voice-music':'A measurable brain response to a familiar sound is not the same outcome as improved intelligence. The study example illustrates that distinction without prescribing a sound-training routine.',
 'baby/senses/brain-nutrients':'Research on nutrition and brain development ranges from essential nutrient needs to studies of later learning. Those are different questions; a positive result on one task is not an IQ guarantee.',
 'baby/growth/anatomy':'Different body systems develop together across pregnancy. The reference illustrations help explain anatomy and are not an exact picture or measurement of every baby at week 22.',
 'baby/growth/growth-research':'Birth timing, birth size and later development are different outcomes. A trial that reports one of them cannot automatically establish a benefit for the others.',
 'baby/growth/screening':'A reference timeline describes broad developmental patterns. An individual growth assessment uses clinical information and cannot be replaced by a weekly illustration.'
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
 if(subject==='baby'&&topic==='growth'&&(subtopic==='lungs'||subtopic==='blood'))return <DevelopmentReading kind={subtopic} week={weekNumber}/>
 if(!t||(subtopic&&!c))return <div className="stack"><ScreenHeading title="Topic not found" back={base}/></div>
 const path=base+'/'+t.subject+'/'+t.id
 const readingId=t.subject+'/'+t.id+(c?'/'+c.id:'')
 const week=gestationalWeeks.find(x=>x.week===weekNumber)
 return <div className="pilot-week skin-page">
 <ScreenHeading title={c?.title??t.title} subtitle={(t.subject==='mother'?'Mother':'Baby')+' · Week '+weekNumber} back={c?path:base+'?subject='+t.subject} backLabel={c?t.title:'Week '+weekNumber}/>
 <WeekContext subject={t.subject==='mother'?'mother':'baby'} topic={c?{label:t.title,to:path}:undefined}/>
 <div className="pilot-visual week-article-visual"><DirectoryArt subject={t.subject==='mother'?'mother':'baby'} kind={c?.id==='brain-nutrients'?'brain':c?.id==='circulation'?'blood':c?.id==='home-work'||c?.id==='plastics-water'||c?.id==='air-heat'?'environment':t.id}/></div>
 <p className="skin-lede">{c?.summary??t.summary} <Footnote id={c?.source_ids[0]??t.source_id} n={1}/></p><small className="muted">Concept illustration · Research draft</small>{weekNumber===23&&<p className="small-copy muted">Shared second-trimester reading, not an exact week-23 milestone.</p>}
 {!c?<><h2 className="section-title">Read about it</h2><div className="ref-rows">{t.children.map((item,index)=><EditorialReadingRow key={item.id} index={index} to={path+'/'+item.id} title={item.title} subtitle={item.summary}/>)}</div>{t.subject==='baby'&&t.id==='growth'&&<><ReadingRow to={path+'/lungs'} title="Developing airways"/><ReadingRow to={path+'/blood'} title="Blood-cell formation"/></>}{t.subject==='baby'&&<details className="panel disclosure"><summary>Original week description</summary><p>{week?.description}</p><p>{week?.interpretation}</p><Footnote id="PED-GESTATION" n={1}/></details>}</>:<>
 <article className="week-editorial-reading"><h2>Understanding the connection</h2>{topicReading[readingId]&&<p>{topicReading[readingId]} <Footnote id={c.source_ids[0]??t.source_id} n={1}/></p>}{c.visual_ids.length>0&&<div className="week-inline-reference"><h3>See the original illustration</h3><ReadingRow to={'/visuals/'+c.visual_ids[0]} title="View the original anatomical reference" subtitle="Scientific reference · opens original source page"/></div>}{t.subject==='mother'&&c.article_ids[0]&&(()=>{const a=getArticle(c.article_ids[0]),plain=plainReading(c.article_ids[0]);return a&&plain?<section><h2>What the broader research found</h2><p>{plain.detail}</p><p className="small-copy muted">Related research: {a.source_ids.map((id,i)=><Footnote key={id} id={id} n={i+2}/>)}</p></section>:null})()}</article>
 <StudyComparison id={c.id}/>
 {c.note&&<p className="skin-lede">{c.note}</p>}
 <WeekDisclosure id={readingId+'/read'} title="Read the full explanation"><p className="small-copy muted">Plain-language research drafts · medical review pending</p>{c.article_ids.map((id,index)=>{const a=getArticle(id);const plain=plainReading(id);return a?<section key={id} className="research-group"><h3>{a.title}</h3><p>{plain?.detail??a.quick_answer}</p><p className="small-copy muted">{a.visible_safety}</p><p className="small-copy muted">Related archive references: {a.source_ids.map((id,i)=><Footnote key={id} id={id} n={i+1}/>)}</p><EditorialReadingRow index={index} to={'/research/'+id} title="Read the broader research article" subtitle={a.title+' · opens library article'}/></section>:null})}</WeekDisclosure>
 <WeekDisclosure id={readingId+'/sources'} title="Studies & references"><SourceDisclosure ids={c.source_ids}/><NumericRecords ids={c.outcome_ids}/>{c.visual_ids.length>0&&<section className="research-group"><h3>Original illustrations</h3>{c.visual_ids.map(id=><ReadingRow key={id} to={'/visuals/'+id} title={getVisual(id)?.title??id} subtitle="Original reference · review pending"/>)}</section>}</WeekDisclosure><WeekConnections id={readingId}/>{t.children.length>1&&<WeekDisclosure id={readingId+'/related'} title={'More about '+t.title.toLowerCase()}><div className="ref-rows">{t.children.filter(item=>item.id!==c.id).map((item,index)=><EditorialReadingRow key={item.id} index={index} to={path+'/'+item.id} title={item.title}/>)}</div></WeekDisclosure>}
 </>}
 <div className="pilot-safety"><strong>Safety comes first</strong><p>Contact your maternity care team immediately if usual baby movements slow, stop or change. Urgent signs override routine reading.</p><Link to="/urgent">Know the warning signs ›</Link></div><DraftBanner status="research_only"/>
 </div>
}

function DevelopmentReading({kind,week}:{kind:'lungs'|'blood';week:22|23}){
 const base='/timeline/week/'+week,lung=kind==='lungs'
 return <div className="pilot-week skin-page"><ScreenHeading title={lung?'How the lungs develop before birth':'How blood cells develop'} subtitle={'Baby · Week '+week} back={base+'?subject=baby'} backLabel={'Week '+week}/><WeekContext subject="baby" topic={{label:'Growth',to:base+'/baby/growth'}}/>
 <div className="pilot-visual week-article-visual"><DirectoryArt subject="baby" kind={kind}/></div><article className="week-editorial-reading"><p className="skin-lede">{lung?'Before birth, developing airways form as part of lung maturation.':'Bone marrow becomes a site of blood-cell production during fetal development.'} <Footnote id="PED-GESTATION" n={1}/></p><p className="small-copy muted">Concept illustration · Reference describes weeks 23–25. {week===22?'Looking ahead, not a week-22 milestone.':'Development varies between individuals.'}</p><h2>{lung?'Why the placenta still matters':'Why maternal nutrition matters'}</h2><p>{lung?'The developing lungs are not yet responsible for oxygen exchange with air. The placenta supports exchange between mother and baby before birth. Developing airways do not establish readiness to breathe independently.':'Iron is needed to form hemoglobin, the protein in red blood cells that carries oxygen. Pregnancy increases iron needs, but the developmental window does not create a new supplement requirement at a particular week.'} <Footnote id={lung?'PED-FETUS':'P5-28'} n={2}/></p><h2>Continue exploring</h2><ReadingRow to={base+'/baby/placenta/'+(lung?'exchange':'circulation')} title={lung?'Oxygen & nutrient exchange':'Fetal circulation'}/><ReadingRow to={base+'/mother/nutrition/minerals'} title="Iron, calcium & vitamin D" subtitle="Nutrition and supplementation research"/><ReadingRow to="/research/EV-ART-014" title="Fetal development research"/></article><WeekDisclosure id={'development/'+week+'/'+kind} title="Studies & references"><SourceDisclosure ids={['PED-GESTATION','PED-FETUS','P5-28']}/></WeekDisclosure><div className="pilot-safety"><strong>Safety comes first</strong><p>Contact your maternity team immediately if usual baby movements slow, stop or change.</p><Link to="/urgent">Know the warning signs ›</Link></div><DraftBanner status="research_only"/></div>
}
