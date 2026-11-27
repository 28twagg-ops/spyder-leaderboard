/** Local experimental topic retrieval, not clinical ranking or triage.
 * All aliases are editorial navigation terms only. No query transmission or storage.
 */
const aliases = {
  "EV-ART-001": "preconception|getting pregnant|trying for a baby|planning pregnancy|prepare to conceive",
  "EV-ART-002": "folate|vitamin b9|folic acid",
  "EV-ART-003": "dad fertility|father health|husband|paternal|sperm health|male fertility|partner preparation",
  "EV-ART-004": "ivf|assisted reproduction|infertility|acupuncture",
  "EV-ART-005": "healthy diet|food first|nutrition|balanced meals",
  "EV-ART-006": "prenatal vitamins|prenatal supplements|multivitamin|pregnancy vitamins",
  "EV-ART-007": "fish oil|omega 3|dha|seafood",
  "EV-ART-008": "choline|iodine",
  "EV-ART-009": "calcium|vitamin d|iron|probiotics",
  "EV-ART-010": "household chemicals|workplace hazards|chemical exposure",
  "EV-ART-011": "forever chemicals|pfas|plastic bottles|microplastics",
  "EV-ART-012": "pesticides|air pollution|heat exposure",
  "EV-ART-013": "prenatal appointments|checkups|pregnancy care",
  "EV-ART-014": "fetal development|baby growth|fetus",
  "EV-ART-015": "food safety|deli meat|listeria|safe eating",
  "EV-ART-016": "exercise|fitness|workout|physical activity|exercise while pregnant|exercise during pregnancy",
  "EV-ART-017": "morning sickness|nausea|vomiting",
  "EV-ART-018": "stretchmarks|stretch marks|skin changes",
  "EV-ART-019": "breast changes|breast appearance",
  "EV-ART-020": "pelvic pain|perineal massage|pelvic floor preparation",
  "EV-ART-021": "labour|labor|childbirth|birth preparation",
  "EV-ART-022": "breech|dates|herbs",
  "EV-ART-023": "newborn transition|delivery room",
  "EV-ART-024": "maternal warning signs|heavy bleeding|bleeding heavily|postpartum emergency",
  "EV-ART-025": "postpartum checkup|rest after birth",
  "EV-ART-026": "c section|cesarean|caesarean|incision|stitches",
  "EV-ART-027": "ab separation|abdominal separation|diastasis|core",
  "EV-ART-028": "pelvic floor recovery|pelvic floor after birth|return to exercise",
  "EV-ART-029": "postpartum anxiety|postpartum depression|sleep|family support",
  "EV-ART-030": "birth control|contraception|sex after delivery",
  "EV-ART-031": "hair loss|skin postpartum|cosmetic",
  "EV-ART-032": "breastfeeding|mixed feeding|formula feeding",
  "EV-ART-033": "formula mixing|powdered formula|making bottles|formula preparation",
  "EV-ART-034": "breast milk supply|lactation|not enough milk|feeding cues",
  "EV-ART-035": "infant vitamin d|infant iron",
  "EV-ART-036": "baby sleeping on back|safe sleep|crib",
  "EV-ART-037": "baby fever|newborn fever|baby temperature|newborn not breathing|infant emergency|baby illness",
  "EV-ART-038": "newborn jaundice|yellow skin|turning yellow|hearing screening",
  "EV-ART-039": "diapers|nappies|elimination communication",
  "EV-ART-040": "crying|colic|carrying|soothing",
  "EV-ART-041": "skin to skin|gentle touch",
  "EV-ART-042": "language development|talking|reading|playing",
  "EV-ART-043": "tummy time|infant movement",
  "EV-ART-044": "milestones|developmental screening",
  "EV-ART-045": "screen time|bilingual|family languages",
  "EV-ART-046": "baby led weaning|blw|starting solids|complementary foods",
  "EV-ART-047": "peanut allergy|allergens|choking",
  "EV-ART-048": "growth|responsive meals",
  "EV-ART-049": "baby teeth|first teeth|teething|dental|water safety|travel safety",
  "EV-ART-050": "vaccines|vaccination|immunizations|preventive checkups",
  "EV-ART-051": "potty training|toilet learning|toilet training",
  "EV-ART-052": "natural remedies|experimental infant|home remedies"
} as Record<string,string>
const stop=new Set('a an the and or for of to in on at is are what how can i my me do does with before after about should when which if during first trimester has have much'.split(' '))
function normalize(s:string){return s.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim().replace(/\bnew born\b/g,'newborn')}
function tokens(s:string){return normalize(s).split(/\s+/).filter(x=>x&&!stop.has(x)).map(x=>x.length>4&&x.endsWith('s')?x.slice(0,-1):x)}
function distance(a:string,b:string){let row=Array.from({length:b.length+1},(_,i)=>i);for(let i=1;i<=a.length;i++){const next=[i];for(let j=1;j<=b.length;j++)next[j]=Math.min(next[j-1]+1,row[j]+1,row[j-1]+(a[i-1]===b[j-1]?0:1));row=next}return row[b.length]}
interface SearchItem {id:string;title:string;domain:string;body:string}
export function createTopicSearch<T extends SearchItem>(items:T[]){
 const records=items.map(item=>{const phrases=(aliases[item.id]??'').split('|').filter(Boolean).map(tokens);return{item,title:new Set(tokens(item.title)),alias:new Set(phrases.flat()),phrases,body:new Set(tokens(item.body))}})
 const vocab=new Set(records.flatMap(r=>[...r.title,...r.alias]))
 const df=new Map([...vocab].map(t=>[t,records.filter(r=>r.title.has(t)||r.alias.has(t)).length]))
 const correct=(t:string)=>{if(vocab.has(t)||t.length<5||t.length>32)return t;const matches=[...vocab].filter(v=>Math.abs(v.length-t.length)<=1&&distance(t,v)===1);return matches.length===1?matches[0]:t}
 const weight=(t:string)=>1+Math.log((records.length+1)/((df.get(t)??1)+1))
 return (query='',domain='all'):T[]=>{
  const eligible=records.filter(r=>domain==='all'||r.item.domain===domain)
  const q=query.trim().slice(0,200)
  if(!q)return eligible.map(r=>r.item)
  const raw=q.toLowerCase().split(/\s+/).filter(Boolean)
  const exact=eligible.filter(r=>raw.every(t=>r.item.body.toLowerCase().includes(t)||r.item.id.toLowerCase().includes(t))).map(r=>r.item)
  if(/^[a-z]+(?:-[a-z0-9]+)*-\d+$/i.test(q))return exact
  const qt=[...new Set(tokens(q).map(correct))]
  if(!qt.length)return []
  const max=qt.reduce((s,t)=>s+weight(t),0)
  const ranked=eligible.map(r=>{let score=0,covered=0,core=0;for(const t of qt){const w=weight(t);if(r.title.has(t)||r.alias.has(t)){score+=w*(r.title.has(t)?2.2:2);covered+=w;core+=w}else if(r.body.has(t)){score+=w*.35;covered+=w}}for(const p of r.phrases)if(p.length>1&&p.every(t=>qt.includes(t)))score+=p.reduce((s,t)=>s+weight(t),0)*1.2;return{item:r.item,score,coverage:covered/max,core}}).filter(r=>r.core>0&&r.coverage>=.34).sort((a,b)=>b.score-a.score||a.item.id.localeCompare(b.item.id)).map(r=>r.item)
  const ids=new Set(ranked.map(r=>r.id))
  return [...ranked,...exact.filter(r=>!ids.has(r.id))]
 }
}
