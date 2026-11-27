import {contraception} from './contraception'
export type PreferenceMethod=typeof contraception.methods[number]
export type Match=true|false|null
type Criterion={id:string;label:string;description:string;source:string;match?:(m:PreferenceMethod)=>Match;detail:(m:PreferenceMethod)=>string}
const nonInvasive=(m:PreferenceMethod)=>!['iud','implant','injection'].includes(m.art)
export const preferenceCriteria:Criterion[]=[
 {id:'hormones',label:'Avoid added hormones',description:'No added contraceptive estrogen or progestin.',source:'CT-01',match:m=>m.hormones==='None',detail:m=>m.hormones==='None'?'No added contraceptive hormones':m.hormones},
 {id:'effectiveness',label:'Prevent pregnancy as reliably as possible',description:'Match if the published first-year typical-use estimate is below 1 pregnancy per 100 users.',source:'CT-01',match:m=>m.high<1?true:m.low>=1?false:null,detail:m=>(m.low===m.high?m.low:m.low+'–'+m.high)+' pregnancies per 100 users in year one'},
 {id:'procedure',label:'Avoid invasive placement or injections',description:'No uterine or skin placement procedure, removal procedure or injection. This is not a pain score.',source:'CT-03',match:nonInvasive,detail:m=>m.placement},
 {id:'cycle',label:'Avoid hormonal changes to my cycle',description:'No added contraceptive hormones. Actual bleeding may still change, especially with copper IUDs.',source:'CT-20',match:m=>m.hormones==='None',detail:m=>m.slug==='copper-iud'?'No added hormones; periods can become heavier or more painful':m.hormones==='None'?'No contraceptive hormone exposure; bleeding patterns still vary':m.physical},
 {id:'fertility',label:'Avoid prolonged drug action after stopping',description:'Match if there is no depot injection. Does not predict a time to pregnancy or mean that every other method is equivalent.',source:'CT-07',match:m=>m.slug!=='injection',detail:m=>m.fertility},
 {id:'convenience',label:'Avoid daily or per-sex contraceptive tasks',description:'Match long-acting IUDs, implants and repeat injections; placement and removal differ.',source:'CT-01',match:m=>['iud','implant','injection'].includes(m.art),detail:m=>m.tradeoff},
 {id:'sti',label:'Include STI risk reduction',description:'Appropriate external/internal condoms reduce some STI transmission; not complete protection.',source:'CT-01',match:m=>['external-condom','internal-condom'].includes(m.slug),detail:m=>['external-condom','internal-condom'].includes(m.slug)?'Appropriate condoms reduce STI risk':'Does not itself provide STI protection'},
 {id:'physical',label:'Long-term physical health',description:'Review only: different studies measure different harms; no defensible total health score.',source:'CT-02',detail:m=>m.physical},
 {id:'mental',label:'Mental health & sexual wellbeing',description:'Review only: no reliable cross-method mental health ranking.',source:'CT-24',detail:m=>m.mental},
 {id:'pain',label:'Minimize pain and menstrual discomfort',description:'Review only: insertion pain, cramping and bleeding cannot be combined into a single pain rating.',source:'CT-22',detail:m=>m.pain+' '+m.physical},
 {id:'cost',label:'Affordability',description:'Review only: costs use different billing units and insurance may change the amount.',source:'CT-41',detail:m=>m.price+' · '+m.priceContext}
]
export type PreferenceWeights=Record<string,number>
export const defaultPreferenceWeights=():PreferenceWeights=>Object.fromEntries(preferenceCriteria.map(c=>[c.id,0]))
export type PreferenceFilters={hormoneFree:boolean;noProcedure:boolean;underOne:boolean}
export const defaultPreferenceFilters:PreferenceFilters={hormoneFree:false,noProcedure:false,underOne:false}
export function comparePreferences(weights:PreferenceWeights,filters:PreferenceFilters){
 const weight=(id:string)=>Math.max(0,Math.min(5,Math.round(Number.isFinite(weights[id])?weights[id]:0)))
 const active=preferenceCriteria.filter(c=>weight(c.id)>0)
 // Hormone avoidance and avoiding hormonal cycle effects share the same
 // factual feature. Count only the larger weight, not both.
 const scoring=active.filter(c=>c.match&&!(c.id==='cycle'&&weight('hormones')>=weight('cycle'))&&!(c.id==='hormones'&&weight('cycle')>weight('hormones')))
 const possible=scoring.reduce((n,c)=>n+weight(c.id),0)
 const results=contraception.methods.filter(m=>(!filters.hormoneFree||m.hormones==='None')&&(!filters.noProcedure||nonInvasive(m))&&(!filters.underOne||m.high<1)).map(m=>{
  const criteria=active.map(c=>({id:c.id,label:c.label,weight:weight(c.id),match:c.match?c.match(m):null,scored:scoring.includes(c),detail:c.detail(m),source:c.source})).sort((a,b)=>b.weight-a.weight)
  let minimum=0,maximum=0
  for(const c of criteria.filter(c=>c.scored)){if(c.match===true){minimum+=c.weight;maximum+=c.weight}else if(c.match===null)maximum+=c.weight}
  return {method:m,minimum,maximum,criteria}
 })
 // A lower bound is an explicitly conservative sort, not a clinical rank.
 // Stable source order for ties; overlapping scores are not unique winners.
 const ordered=results.sort((a,b)=>b.minimum-a.minimum)
 const ranked=ordered.map(r=>({...r,rank:possible>0?1+ordered.filter(x=>x.minimum>r.minimum).length:null,tied:possible>0&&ordered.filter(x=>x.minimum===r.minimum).length>1,uncertain:r.minimum!==r.maximum||ordered.some(x=>x!==r&&x.minimum!==x.maximum&&x.minimum<=r.minimum&&x.maximum>=r.minimum)}))
 return {possible,results:ranked,reviewOnly:active.filter(c=>!c.match).map(c=>c.label)}
}
