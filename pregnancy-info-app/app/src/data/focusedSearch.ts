import {week22Topics} from './week22TopicMap'
import skinData from './skinTopicMap.json'
import {midReadings} from './midPregnancyReadings'
import {weeklyFeatures} from './weeklyFeatures'
import {healthResearchGroups} from './healthResearchGroups'

interface FocusedEntry{path:string;title:string;category:string;domain:string;keywords:string;description:string;weeks:number[];shared:boolean}
const entries=new Map<string,FocusedEntry>()
const slug=(title:string)=>title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')
function domainFor(path:string){
 if(path.startsWith('mother/nutrition'))return 'nutrition'
 if(/home-work|plastics-water|air-heat/.test(path))return 'environment'
 if(/mother\/skin\/(treatment|scar|hair)/.test(path))return 'recovery'
 return 'pregnancy'
}
function add(path:string,title:string,category:string,description='',keywords='',shared=true){
 const old=entries.get(path)
 entries.set(path,{path,title,category,domain:domainFor(path),description,keywords:[old?.keywords,old?.title,keywords].filter(Boolean).join(' '),weeks:old?.weeks??[],shared})
}
for(const topic of week22Topics){
 const path=topic.subject+'/'+topic.id,category=(topic.subject==='mother'?'Mother':'Baby')+' · '+topic.title
 add(path,topic.title,category,topic.summary,path,true)
 for(const child of topic.children)add(path+'/'+child.id,child.title,category,child.summary,child.id,true)
}
add('mother/skin','Skin & stretch marks','Mother · Skin','Stretch marks, prevention, treatment and comfort','striae skin care belly pregnancy')
for(const section of skinData.sections){
 const path='mother/skin/'+section.id
 add(path,section.title,'Mother · Skin',section.stage,'stretch marks skin care '+section.id)
 for(const child of section.children)add(path+'/'+slug(child.title),child.title,'Skin · '+section.title,section.stage,section.title+' '+child.title)
}
add('mother/nutrition/research-guide','Nutrition essentials: vitamins & supplements','Mother · Nutrition','Nutrient roles, common intake gaps and research','prenatal vitamins supplements multivitamin deficiency nutrition essentials')
add('mother/body/rib-comfort','Rib comfort & breathlessness','Mother · Your body','Rib and breathing changes','rib pain breathlessness')
add('baby/growth/lungs','How the lungs develop before birth','Baby · Growth','Developing airways','lungs breathing')
add('baby/growth/blood','How blood cells develop','Baby · Growth','Blood-cell formation','blood marrow')
for(const [path,reading] of Object.entries(midReadings)){
 const parts=path.split('/')
 const label=week22Topics.find(t=>t.subject===parts[0]&&t.id===parts[1])?.title??parts[1]
 const shared=path.startsWith('mother/nutrition/')||/medicines|sleep-changes|heartburn|bloating|balance/.test(path)
 add(path,reading.title,(parts[0]==='mother'?'Mother':'Baby')+' · '+label,reading.window,[reading.summary,reading.question,...reading.sections.map(s=>s.title)].filter(Boolean).join(' '),shared)
}
for(const group of healthResearchGroups)for(const [path,title,description] of group.items){
 const entry=entries.get(path)
 if(entry){entry.keywords+=' '+title+' '+description;entry.shared=true}
}
for(const [key,features] of Object.entries(weeklyFeatures))for(const subject of ['mother','baby'] as const)for(const feature of features[subject]){
 const entry=entries.get(feature.path)
 if(entry){entry.weeks.push(Number(key));entry.keywords+=' '+feature.title}
}
const aliases:Record<string,string>={
 'mother/nutrition/research-guide':'prenatal vitamin prenatal vitamins prenatal supplement prenatal supplements pregnancy vitamins nutrient deficiency essentials',
 'mother/nutrition/supplements':'prenatal vitamin labels multivitamin prenatal supplements quality',
 'mother/nutrition/iron':'anemia anaemia low iron ferritin deficiency iron supplements',
 'mother/nutrition/vitamin-d':'vitamin d deficiency sunlight',
 'mother/nutrition/folic-acid':'folate b9 neural tube defects',
 'mother/nutrition/omega-3':'fish oil dha omega 3',
 'mother/skin/prevention':'stretch mark prevention prevent stretch marks striae avoid stretch marks',
 'mother/skin/prevention/creams-and-moisturizers':'stretch mark cream cocoa butter lotion moisturizer moisturiser',
 'mother/skin/prevention/natural-oils-and-massage':'stretch mark oil oils coconut oil massage',
 'mother/skin/prevention/collagen-and-supplements':'collagen stretch mark supplements',
 'mother/skin/treatment/laser-microneedling-and-other-procedures':'stretch mark treatment laser microneedling',
 'mother/digestion/nausea':'morning sickness nausea vomiting throwing up',
 'mother/digestion/heartburn':'heartburn acid reflux indigestion',
 'mother/movement/baby-movement':'baby kicking kicks reduced fetal movement feeling baby move',
 'mother/movement/pain':'back pain pelvic pain pelvic girdle pain',
 'mother/body/pelvic-floor':'pelvic floor kegels urinary leaking',
 'mother/checkups/glucose-screening':'gestational diabetes glucose test blood sugar screening',
 'mother/checkups/early-bleeding':'spotting early pregnancy bleeding',
 'mother/body/labor-signs':'labour signs labor signs water breaking',
 'mother/checkups/pain-medicines':'ibuprofen nsaid acetaminophen paracetamol tylenol pain medicine',
 'mother/checkups/due-date':'estimated due date pregnancy dating',
 'baby/growth/surfactant':'surfactant lung development premature lungs',
 'baby/skin/vernix':'vernix protective coating'
}
for(const [path,alias] of Object.entries(aliases)){const entry=entries.get(path);if(entry)entry.keywords+=' '+alias}
export const focusedIndex=[...entries.values()]
const stop=new Set(['a','an','the','is','are','of','to','my','me','i','can','should','what','how','do','does','in','and','for','during','while','with','when','on','about','week','pregnancy','pregnant'])
function words(value:string){return value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim().split(/\s+/).filter(Boolean).map(t=>t.length>4&&t.endsWith('ies')?t.slice(0,-3)+'y':t.length>3&&t.endsWith('s')&&!/(ss|us|is)$/.test(t)?t.slice(0,-1):t)}
function queryTerms(value:string){return [...new Set(words(value.replace(/\bweek\s*\d{1,2}\b/gi,'')).filter(t=>!stop.has(t)))]}
function nearWeek(entry:FocusedEntry,currentWeek:number|null){
 if(entry.shared&&currentWeek)return currentWeek
 if(entry.weeks.length){const target=currentWeek??22;return [...new Set(entry.weeks)].sort((a,b)=>Math.abs(a-target)-Math.abs(b-target)||a-b)[0]}
 return currentWeek??22
}
export function searchFocused(query:string,domain:string,currentWeek:number|null){
 const terms=queryTerms(query)
 if(!terms.length)return []
 return focusedIndex.flatMap(entry=>{
  if(domain!=='all'&&entry.domain!==domain)return []
  const title=words(entry.title),path=words(entry.path.split('/').at(-1)??''),keyword=words(entry.keywords)
  const titleSet=new Set(title),pathSet=new Set(path),kwSet=new Set(keyword)
  const hits=terms.filter(t=>titleSet.has(t)||pathSet.has(t)||kwSet.has(t))
  if(hits.length<Math.ceil(terms.length*.75))return []
  const core=terms.filter(t=>titleSet.has(t)||pathSet.has(t))
  const alias=words(aliases[entry.path]??'')
  const phrase=terms.join(' ')
  const exactTitle=title.join(' ').includes(phrase),exactAlias=alias.join(' ').includes(phrase)
  if(!core.length&&!exactAlias&&terms.length<2)return []
  const score=hits.length*4+core.length*5+(exactTitle?22:0)+(exactAlias?18:0)+(terms.length===hits.length?5:0)-Math.max(0,title.length-terms.length)*.07
  const week=nearWeek(entry,currentWeek)
  return [{...entry,week,href:'/timeline/week/'+week+'/'+entry.path,score}]
 }).sort((a,b)=>b.score-a.score||a.title.localeCompare(b.title))
}
