/** Local editorial topic retrieval only; not clinical ranking, diagnosis or triage. */
const aliases = {
  "EV-ART-001": "preconception|getting pregnant|trying for a baby|planning pregnancy|prepare to conceive|planning a family|before getting pregnant|trying to conceive|pre pregnancy planning",
  "EV-ART-002": "folate|vitamin b9|folic acid|folic acid supplements|neural tube|preconception folate",
  "EV-ART-003": "dad fertility|father health|husband|paternal|sperm health|male fertility|partner preparation|male preconception|men before conception|father preparation|sperm quality|partner fertility|male reproductive health",
  "EV-ART-004": "ivf|assisted reproduction|infertility|acupuncture|fertility clinic|fertility assistance|in vitro fertilization",
  "EV-ART-005": "healthy diet|food first|nutrition|balanced meals|balanced diet|food choices|meal planning|healthy eating",
  "EV-ART-006": "prenatal vitamins|prenatal supplements|multivitamin|pregnancy vitamins|prenatal multivitamin|vitamin selection|pregnancy multivitamin",
  "EV-ART-007": "fish oil|omega 3|dha|seafood|omega 3 fatty acids|oily fish|fish consumption|docosahexaenoic acid",
  "EV-ART-008": "choline|iodine|iodine intake|choline intake",
  "EV-ART-009": "calcium|vitamin d|iron|probiotics|mineral intake|probiotic supplements|vitamin d intake",
  "EV-ART-010": "household chemicals|workplace hazards|chemical exposure|solvents|cleaning products|chemical exposure at work|occupational exposure",
  "EV-ART-011": "forever chemicals|pfas|plastic bottles|microplastics|perfluoroalkyl substances|nonstick cookware|plastic exposure",
  "EV-ART-012": "pesticides|air pollution|heat exposure|pesticide residue|outdoor air quality|extreme heat|hot weather|heat waves|hot temperatures|summer heat",
  "EV-ART-013": "prenatal appointments|checkups|pregnancy care|obstetric visit|antenatal care|prenatal screening|pregnancy appointment",
  "EV-ART-014": "fetal development|baby growth|fetus|development in the womb|fetal growth|gestational development",
  "EV-ART-015": "food safety|deli meat|listeria|safe eating|food poisoning|foodborne illness|unpasteurized food|raw food",
  "EV-ART-016": "exercise|fitness|workout|physical activity|exercise while pregnant|exercise during pregnancy|lifting weights|resistance training|physical fitness|strength training|exercise in pregnancy",
  "EV-ART-017": "morning sickness|nausea|vomiting|pregnancy nausea|nausea and vomiting|ginger",
  "EV-ART-018": "stretchmarks|stretch marks|skin changes|stretching skin|skin elasticity|stretch mark prevention",
  "EV-ART-019": "breast changes|breast appearance|breast changes in pregnancy|breast shape",
  "EV-ART-020": "pelvic pain|perineal massage|pelvic floor preparation|pelvic discomfort|pelvic floor before delivery|perineum|pelvic pain in pregnancy",
  "EV-ART-021": "labour|labor|childbirth|birth preparation|preparing for childbirth|birth plan|delivery preparation",
  "EV-ART-022": "breech|dates|herbs|breech presentation|baby position|herbal labor preparation",
  "EV-ART-023": "newborn transition|delivery room|newborn immediately after birth|delivery room care|right after baby is born|immediately after delivery|first moments after birth|birth transition",
  "EV-ART-024": "maternal warning signs|heavy bleeding|bleeding heavily|postpartum emergency|urgent maternal signs|bleeding after delivery|pregnancy warning signs",
  "EV-ART-025": "postpartum checkup|rest after birth|postnatal visit|postpartum follow up|recovery checkup",
  "EV-ART-026": "c section|cesarean|caesarean|incision|stitches|cesarean scar|abdominal incision|perineal tear|surgical healing",
  "EV-ART-027": "ab separation|abdominal separation|diastasis|core|abdominal muscle separation|split abdominal muscles|separated abs|abdominal wall",
  "EV-ART-028": "pelvic floor recovery|pelvic floor after birth|return to exercise|postpartum pelvic floor|pelvic rehabilitation|incontinence recovery|leaking urine after childbirth|urine leakage|bladder leakage|pelvic floor rehabilitation",
  "EV-ART-029": "postpartum anxiety|postpartum depression|sleep|family support|postnatal mental health|maternal mental health|depression after birth|emotional wellbeing",
  "EV-ART-030": "birth control|contraception|sex after delivery|contraception after birth|family planning after delivery|sexual health after birth",
  "EV-ART-031": "hair loss|skin postpartum|cosmetic|postpartum hair shedding|hair loss after birth|skin treatment",
  "EV-ART-032": "breastfeeding|mixed feeding|formula feeding|combination feeding|breast milk and formula|bottle and breast|feeding options",
  "EV-ART-033": "formula mixing|powdered formula|making bottles|formula preparation|preparing a bottle|mixing infant formula|formula handling",
  "EV-ART-034": "breast milk supply|lactation|not enough milk|feeding cues|low milk production|breast milk production|milk letdown|feeding frequency|lactation support",
  "EV-ART-035": "infant vitamin d|infant iron|baby vitamins|vitamin supplementation for infants",
  "EV-ART-036": "baby sleeping on back|safe sleep|crib|infant sleep position|stomach sleeping|sleep environment|back sleeping",
  "EV-ART-037": "baby fever|newborn fever|baby temperature|newborn not breathing|infant emergency|baby illness|infant trouble breathing|baby difficulty breathing|infant illness|baby high temperature",
  "EV-ART-038": "newborn jaundice|yellow skin|turning yellow|hearing screening|newborn hearing test|bilirubin|newborn tests",
  "EV-ART-039": "diapers|nappies|elimination communication|diaper changing|infant diapering|elimination cues",
  "EV-ART-040": "crying|colic|carrying|soothing|excessive crying|crying infant|fussy baby|soothing baby",
  "EV-ART-041": "skin to skin|gentle touch|skin contact|holding newborn|gentle touch",
  "EV-ART-042": "language development|talking|reading|playing|early language|talk to baby|reading aloud|speech development",
  "EV-ART-043": "tummy time|infant movement|rolling over|baby rolling|infant motor skills|floor play|learning to roll|roll over|rolling milestone|motor development",
  "EV-ART-044": "milestones|developmental screening|developmental milestones|development check|developmental concerns",
  "EV-ART-045": "screen time|bilingual|family languages|screen use|children screens|multiple languages",
  "EV-ART-046": "baby led weaning|blw|starting solids|complementary foods|introducing solids|first foods|complementary feeding",
  "EV-ART-047": "peanut allergy|allergens|choking|food allergy|allergy introduction|choking hazards|allergenic foods",
  "EV-ART-048": "growth|responsive meals|child growth|responsive feeding|toddler meals",
  "EV-ART-049": "baby teeth|first teeth|teething|dental|water safety|travel safety|child dentist|dental visit|oral health|tooth care|car safety|water safety",
  "EV-ART-050": "vaccines|vaccination|immunizations|preventive checkups|baby shots|child immunization|vaccine schedule|well child visits",
  "EV-ART-051": "potty training|toilet learning|toilet training|toilet training age|potty readiness|toileting",
  "EV-ART-052": "natural remedies|experimental infant|home remedies|infant alternative medicine|herbal remedies for babies|unproven infant treatments"
} as Record<string,string>
const stop=new Set('a an the and or for of to in on at is are was were be being what how can i my me do does did with before after about should when which if during has have had much many from into your you would could need options relief'.split(' '))
const broad=new Set('baby infant newborn child toddler pregnancy postpartum health care food safety family birth preparation development parent stage period'.split(' '))
function normalize(s:string){return s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim().replace(/\bnew born\b/g,'newborn').replace(/\bbreastmilk\b/g,'breast milk').replace(/\bomega three\b/g,'omega 3').replace(/\bpostnatal\b/g,'postpartum').replace(/\bpregnant\b/g,'pregnancy').replace(/\bimmunisation(s)?\b/g,'immunization$1').replace(/\bcsection\b/g,'c section').replace(/\bpost partum\b/g,'postpartum')}
function tokens(s:string){return normalize(s).split(/\s+/).filter(x=>x&&!stop.has(x)).map(x=>x.length>4&&x.endsWith('ies')?x.slice(0,-3)+'y':x.length>4&&x.endsWith('s')&&!/(ss|us|is)$/.test(x)?x.slice(0,-1):x)}
function distance(a:string,b:string){let row=Array.from({length:b.length+1},(_,i)=>i);for(let i=1;i<=a.length;i++){const next=[i];for(let j=1;j<=b.length;j++)next[j]=Math.min(next[j-1]+1,row[j]+1,row[j-1]+(a[i-1]===b[j-1]?0:1));row=next}return row[b.length]}
interface SearchItem {id:string;title:string;domain:string;body:string}
export function createTopicSearch<T extends SearchItem>(items:T[]){
 const records=items.map(item=>{const phrases=(aliases[item.id]??'').split('|').filter(Boolean).map(tokens);return{item,title:new Set(tokens(item.title)),alias:new Set(phrases.flat()),phrases,body:new Set(tokens(item.body))}})
 const vocab=new Set(records.flatMap(r=>[...r.title,...r.alias]))
 const allTerms=new Set(records.flatMap(r=>[...r.title,...r.alias,...r.body]))
 const df=new Map([...allTerms].map(t=>[t,records.filter(r=>r.title.has(t)||r.alias.has(t)||r.body.has(t)).length]))
 const correct=(t:string)=>{if(allTerms.has(t)||t.length<5||t.length>32)return t;const matches=[...vocab].filter(v=>Math.abs(v.length-t.length)<=1&&distance(t,v)===1);return matches.length===1?matches[0]:t}
 const weight=(t:string)=>broad.has(t)?.7:allTerms.has(t)?1+Math.log((records.length+1)/((df.get(t)??1)+1)):1
 return (query='',domain='all'):T[]=>{
  const eligible=records.filter(r=>domain==='all'||r.item.domain===domain)
  const q=query.trim().slice(0,200)
  if(!q)return eligible.map(r=>r.item)
  const raw=q.toLowerCase().split(/\s+/).filter(Boolean)
  const exact=eligible.filter(r=>raw.every(t=>r.item.body.toLowerCase().includes(t)||r.item.id.toLowerCase().includes(t))).map(r=>r.item)
  if(/^[a-z]+(?:-[a-z0-9]+)*-\d+$/i.test(q))return exact
  const qt=[...new Set(tokens(q).map(correct))]
  if(!qt.length)return []
  const max=qt.reduce((s,t)=>s+weight(t),0),broadOnly=qt.every(t=>broad.has(t))
  const ranked=eligible.map(r=>{
   let score=0,covered=0,core=0,specific=0
   for(const t of qt){const w=weight(t);if(r.title.has(t)||r.alias.has(t)){score+=w*(r.title.has(t)?2.4:2.2);covered+=w;core+=w;if(!broad.has(t))specific+=w}else if(r.body.has(t)){score+=w*.4;covered+=w;if(!broad.has(t))specific+=w*.5}}
   for(const p of r.phrases)if(p.length>1&&p.every(t=>qt.includes(t)))score+=p.reduce((s,t)=>s+weight(t),0)*1.4
   const coverage=covered/max
   return{item:r.item,score:score*(.65+.35*coverage),coverage,core,specific}
  }).filter(r=>r.core>0&&r.coverage>=.30&&(broadOnly||r.specific>0)).sort((a,b)=>b.score-a.score||a.item.id.localeCompare(b.item.id)).map(r=>r.item)
  const ids=new Set(ranked.map(r=>r.id))
  return [...ranked,...exact.filter(r=>!ids.has(r.id))]
 }
}
