import {contraception} from './contraception'
type Estimate={low:number;high:number;note:string}
export type CostScenario={budget:number;condomsPerMonth:number;quotes:Record<string,number>}
export const defaultCostScenario=():CostScenario=>({budget:1000,condomsPerMonth:8,quotes:{}})
export function threeYearCost(slug:string,scenario:CostScenario):Estimate|null{
 const quote=scenario.quotes[slug]
 if(Number.isFinite(quote)&&quote>=0)return {low:quote,high:quote,note:'Your entered all-in 36-month cost'}
 const count=36*Math.max(0,scenario.condomsPerMonth)
 const estimates:Record<string,Estimate>={
  'copper-iud':{low:0,high:1800,note:'One placement, CT-42; removal and other visit charges not included'},
  'hormonal-iud':{low:0,high:1800,note:'One placement, CT-42; removal and other visit charges not included'},
  'implant':{low:0,high:2300,note:'One placement, CT-43; removal and other visit charges not included'},
  'injection':{low:0,high:13*150,note:'13 shots assumed over 36 months, CT-44; extra administration and visits not included'},
  'combined-pill':{low:0,high:36*50,note:'36 monthly packs, CT-45; extra visits not included'},
  'mini-pill':{low:0,high:36*50,note:'36 monthly pill packs using general pill price, CT-45; extra visits not included'},
  'patch':{low:0,high:36*150,note:'36 monthly packs assumed, CT-46; pack size and visits may differ'},
  'ring':{low:0,high:36*200,note:'36 monthly NuvaRing units assumed, CT-47; other ring products and visits differ'},
  'external-condom':{low:count,high:count,note:'About $1 per condom, CT-48; usage assumption, free supplies possible'},
  'internal-condom':{low:2*count,high:3*count,note:'$2–$3 per condom, CT-49; usage assumption'}
 }
 return estimates[slug]??null
}
export function costLabel(slug:string,scenario:CostScenario){
 const e=threeYearCost(slug,scenario)
 if(!e)return 'Total not established — enter a quote'
 const usd=(v:number)=>'$'+Math.round(v).toLocaleString('en-US')
 return (e.low===e.high?usd(e.low):usd(e.low)+'–'+usd(e.high))+' · '+e.note
}
export function costMatch(slug:string,scenario:CostScenario):true|false|null{
 const e=threeYearCost(slug,scenario)
 // Only an entered all-in quote supports a definite total-cost match.
 // For other methods an incomplete price estimate can show a possible
 // budget overrun, but cannot establish that total expense is under budget.
 if(!e)return null
 if(Number.isFinite(scenario.quotes[slug])&&scenario.quotes[slug]>=0)return e.high<=scenario.budget
 if(e.low>scenario.budget)return false
 return null
}
export const costMethods=contraception.methods
