import {contraception} from './contraception'
import {costLabel,costMatch,defaultCostScenario,type CostScenario} from './contraceptionCosts'
export type PreferenceMethod=typeof contraception.methods[number]
export type Match=true|false|null
type Criterion={id:string;label:string;description:string;source:string;match?:(m:PreferenceMethod)=>Match;utility?:(m:PreferenceMethod)=>[number,number];detail:(m:PreferenceMethod)=>string}
const nonInvasive=(m:PreferenceMethod)=>!['iud','implant','injection'].includes(m.art)
export const preferenceCriteria:Criterion[]=[
 {id:'hormones',label:'Avoid added hormones',description:'No added contraceptive estrogen or progestin.',source:'CT-01',match:m=>m.hormones==='None',detail:m=>m.hormones==='None'?'No added contraceptive hormones':m.hormones},
 {id:'effectiveness',label:'Prevent pregnancy as reliably as possible',description:'Match if the published first-year typical-use estimate is below 1 pregnancy per 100 users.',source:'CT-01',match:m=>m.high<1?true:m.low>=1?false:null,detail:m=>(m.low===m.high?m.low:m.low+'–'+m.high)+' pregnancies per 100 users in year one'},
 {id:'effectivenessScale',label:'Pregnancy prevention',description:'Preference points decline linearly from zero to 25 first-year pregnancies per 100 users. This is a user-interface utility, not a clinical risk model. Published ranges yield a range of points.',source:'CT-01',utility:m=>[Math.max(0,1-m.high/25),Math.max(0,1-m.low/25)],detail:m=>(m.low===m.high?m.low:m.low+'–'+m.high)+' pregnancies per 100 users in year one'},
 {id:'procedure',label:'Avoid invasive placement or injections',description:'No uterine or skin placement procedure, removal procedure or injection. This is not a pain score.',source:'CT-03',match:nonInvasive,detail:m=>m.placement},
 {id:'cycle',label:'Avoid method-related period changes',description:'Match nonhormonal methods without an intrauterine device; this avoids hormone-related bleeding changes and copper-IUD-related heavier bleeding, not all natural variation.',source:'CT-20',match:m=>m.hormones==='None'&&m.art!=='iud',detail:m=>m.slug==='copper-iud'?'No added hormones; periods can become heavier or more painful':m.hormones==='None'?'No hormonal or intrauterine contraceptive mechanism; natural bleeding varies':m.physical},
 {id:'fertility',label:'Avoid prolonged drug action after stopping',description:'Match if there is no depot injection. Does not predict a time to pregnancy or mean that every other method is equivalent.',source:'CT-07',match:m=>m.slug!=='injection',detail:m=>m.fertility},
 {id:'convenience',label:'Avoid daily or per-sex contraceptive tasks',description:'Match long-acting IUDs, implants and repeat injections; placement and removal differ.',source:'CT-01',match:m=>['iud','implant','injection'].includes(m.art),detail:m=>m.tradeoff},
 {id:'sti',label:'Include STI risk reduction',description:'Appropriate external/internal condoms reduce some STI transmission; not complete protection.',source:'CT-01',match:m=>['external-condom','internal-condom'].includes(m.slug),detail:m=>['external-condom','internal-condom'].includes(m.slug)?'Appropriate condoms reduce STI risk':'Does not itself provide STI protection'},
 {id:'physical',label:'Long-term physical health',description:'Feature proxy: avoid estrogen-related vascular concerns and depot-injection bone-density concerns. Other physical risks remain; this is not a total health score.',source:'CT-02',match:m=>!m.hormones.startsWith('Estrogen')&&m.slug!=='injection',detail:m=>m.physical},
 {id:'mental',label:'Mental health & sexual wellbeing',description:'Review only: no reliable cross-method mental health ranking.',source:'CT-24',detail:m=>m.mental},
 {id:'sexual',label:'Sexual feel & spontaneity',description:'Feature preference: avoid a contraceptive task or barrier at intercourse. This does not measure pleasure, sensation, libido, orgasm, lubrication or STI safety. Individual experiences differ.',source:'CT-129',match:m=>['copper-iud','hormonal-iud','implant','injection','combined-pill','mini-pill','patch','ring'].includes(m.slug),detail:m=>['copper-iud','hormonal-iud','implant','injection','combined-pill','mini-pill','patch','ring'].includes(m.slug)?'No routine per-act contraceptive preparation; sexual function and comfort can still vary. '+m.mental:'Requires barrier, local product, or fertility-based decisions around sex; subjective sensation and satisfaction vary. '+m.mental},
 {id:'sexualEvidence',label:'Sexual pleasure, desire & lubrication',description:'Review only: comparative research is insufficient for a universal sexual-function score.',source:'CT-127',detail:m=>m.mental+' Individual sensation, desire, lubrication and partner experience are not predictable from method alone.'},
 {id:'pain',label:'Minimize placement pain',description:'Feature proxy: avoid invasive insertion, removal and injections. Does not predict cramps or individual pain.',source:'CT-22',match:nonInvasive,detail:m=>m.pain+' '+m.physical},
 {id:'cost',label:'Total 3-year cost',description:'Match a user-entered total to the 36-month budget. Published component estimates are incomplete; unknown totals remain uncertain.',source:'CT-41',match:()=>null,detail:m=>m.price+' · '+m.priceContext}
]
export type PreferenceWeights=Record<string,number>
export const defaultPreferenceWeights=():PreferenceWeights=>Object.fromEntries(preferenceCriteria.map(c=>[c.id,0]))
export type PreferenceFilters={hormoneFree:boolean;noProcedure:boolean;underOne:boolean;format?:string}
export const defaultPreferenceFilters:PreferenceFilters={hormoneFree:false,noProcedure:false,underOne:false,format:'all'}
export const preferenceFormats=[["uterine","Clinician-placed uterine device",["copper-iud","hormonal-iud"]],["arm","Arm implant",["implant"]],["shot","Periodic injection",["injection"]],["oral","Daily oral pill",["combined-pill","mini-pill"]],["skin","Skin patch",["patch"]],["ring","Vaginal ring",["ring"]],["external","External condom",["external-condom"]],["internal","Internal condom",["internal-condom"]],["reusable","Reusable vaginal/cervical barrier",["diaphragm","cervical-cap"]],["sponge","Single-use sponge",["sponge"]],["gel","On-demand vaginal gel, film or foam",["gel"]],["tracking","Fertility tracking",["fertility-awareness"]]] as const
export function matchesFormat(slug:string,format:string|undefined){return !format||format==='all'||preferenceFormats.some(([id,,methods])=>id===format&&(methods as readonly string[]).includes(slug))}
export function comparePreferences(weights:PreferenceWeights,filters:PreferenceFilters,costs:CostScenario=defaultCostScenario()){
 const weight=(id:string)=>Math.max(0,Math.min(10,(Number.isFinite(weights[id])?weights[id]:0)))
 const active=preferenceCriteria.filter(c=>weight(c.id)>0)
 // Procedure and placement-pain preferences express the same feature.
 // Count only the larger weight, not both. Cycle preference separately excludes copper IUD.
 const scoring=active.filter(c=>(c.match||c.utility)&&!(c.id==='effectiveness'&&weight('effectivenessScale')>0)&&!(c.id==='procedure'&&weight('pain')>=weight('procedure'))&&!(c.id==='pain'&&weight('procedure')>weight('pain')))
 const possible=scoring.reduce((n,c)=>n+weight(c.id),0)
 const results=contraception.methods.filter(m=>(!filters.hormoneFree||m.hormones==='None')&&(!filters.noProcedure||nonInvasive(m))&&(!filters.underOne||m.high<1)&&matchesFormat(m.slug,filters.format)).map(m=>{
  const criteria=active.map(c=>({id:c.id,label:c.label,weight:weight(c.id),match:c.id==='cost'?costMatch(m.slug,costs):c.match?c.match(m):null,utility:c.utility?.(m),scored:scoring.includes(c),detail:c.id==='cost'?costLabel(m.slug,costs):c.detail(m),source:c.source})).sort((a,b)=>b.weight-a.weight)
  let minimum=0,maximum=0
  for(const c of criteria.filter(c=>c.scored)){if(c.utility){minimum+=c.weight*c.utility[0];maximum+=c.weight*c.utility[1]}else if(c.match===true){minimum+=c.weight;maximum+=c.weight}else if(c.match===null)maximum+=c.weight}
  return {method:m,minimum:Math.round(minimum*1000)/1000,maximum:Math.round(maximum*1000)/1000,criteria}
 })
 // A lower bound is an explicitly conservative sort, not a clinical rank.
 // Alphabetical display within ties; no method gains a rank from source order.
 // All methods at the third competitive rank are shown, including cutoff ties.
 const ordered=results.sort((a,b)=>b.minimum-a.minimum||a.method.name.localeCompare(b.method.name,'en'))
 const ranked=ordered.map(r=>({...r,rank:possible>0?1+ordered.filter(x=>x.minimum>r.minimum).length:null,tied:possible>0&&ordered.filter(x=>x.minimum===r.minimum).length>1,uncertain:r.minimum!==r.maximum||ordered.some(x=>x!==r&&x.minimum!==x.maximum&&x.minimum<=r.minimum&&x.maximum>=r.minimum)}))
 const podium=possible>0?ranked.filter(r=>r.rank!==null&&r.rank<=3):[]
 const cutoff=podium.length?podium[podium.length-1].minimum:0
 const possiblePodium=possible>0?ranked.filter(r=>r.maximum>=cutoff&&!podium.includes(r)):[]
 return {possible,results:ranked,podium,possiblePodium,reviewOnly:active.filter(c=>!c.match&&!c.utility).map(c=>c.label)}
}

export const preferenceThemes=[['hormones','Hormone exposure'],['health','Long-term health'],['comfort','Comfort & periods'],['sexual','Sexual feel & spontaneity'],['effectiveness','Effectiveness'],['fertility','Future fertility'],['cost','Total 3-year cost']] as const
/** Essential comfort is a user-facing constraint, not a prediction of individual pain. */
export function themeFilters(themes:PreferenceWeights,filters:PreferenceFilters):PreferenceFilters{return {...filters,noProcedure:filters.noProcedure||(themes.comfort??0)>=10}}
export const defaultThemeWeights=()=>({hormones:8,health:10,comfort:6,sexual:6,effectiveness:10,fertility:10,cost:6})
// Equal split of the comfort weight across two documented feature preferences.
// The health theme uses the limited physical feature proxy; mood remains review-only.
export function themePreferences(themes:PreferenceWeights):PreferenceWeights{
 return {hormones:themes.hormones??0,physical:themes.health??0,mental:themes.health??0,sexual:themes.sexual??0,sexualEvidence:themes.sexual??0,pain:(themes.comfort??0)/2,cycle:(themes.comfort??0)/2,effectivenessScale:themes.effectiveness??0,fertility:themes.fertility??0,cost:themes.cost??0,convenience:themes.convenience??0,sti:themes.sti??0}
}

/** 0–1000 display scale; rank from underlying unrounded-to-display points. */
export function normalizedMatchScore(points:number,possible:number){return possible>0?Math.round(1000*points/possible):0}
