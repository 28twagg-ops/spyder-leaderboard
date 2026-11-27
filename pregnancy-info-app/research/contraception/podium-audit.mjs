import {readFileSync} from 'node:fs'
const {methods}=JSON.parse(readFileSync(new URL('../../app/src/data/contraception.json',import.meta.url),'utf8'))
const formats=[["uterine","Clinician-placed uterine device",["copper-iud","hormonal-iud"]],["arm","Arm implant",["implant"]],["shot","Periodic injection",["injection"]],["oral","Daily oral pill",["combined-pill","mini-pill"]],["skin","Skin patch",["patch"]],["ring","Vaginal ring",["ring"]],["external","External condom",["external-condom"]],["internal","Internal condom",["internal-condom"]],["reusable","Reusable vaginal/cervical barrier",["diaphragm","cervical-cap"]],["sponge","Single-use sponge",["sponge"]],["gel","On-demand vaginal gel, film or foam",["gel"]],["tracking","Fertility tracking",["fertility-awareness"]]]
const m=methods.map((m,i)=>({i,slug:m.slug,name:m.name,h:+(m.hormones==='None'),p:+(!m.hormones.startsWith('Estrogen')&&m.slug!=='injection'),n:+(!['iud','implant','injection'].includes(m.art)),c:+(m.hormones==='None'&&m.art!=='iud'),e:1-m.high/25,eh:1-m.low/25,f:+(m.slug!=='injection')}))
const stats=m.map(x=>({slug:x.slug,name:x.name,old:0,podium:0,first:0,possibleWithoutCost:0,possibleWithMaxUnknownCost:0,formatWins:0,formatFirst:0,quotePodium:0,quoteFirst:0,eligibleFormat:0,axis:Array(5).fill(0)}))
let n=0,nf=0,nq=0
for(let h=0;h<=10;h++)for(let p=0;p<=10;p++)for(let c=0;c<=10;c++)for(let e=0;e<=10;e++)for(let f=0;f<=10;f++){
 if(h+p+c+e+f===0)continue
 n++
 const rows=m.filter(x=>c!==10||x.n).map(x=>{const common=h*x.h+p*x.p+c/2*(x.n+x.c)+f*x.f;return {i:x.i,lo:Math.round((common+e*x.e)*1000),hi:Math.round((common+e*x.eh)*1000)}}).sort((a,b)=>b.lo-a.lo||a.i-b.i)
 const cutoff=rows[Math.min(2,rows.length-1)].lo
 for(const x of rows.slice(0,3))stats[x.i].old++
 for(const x of rows){const s=stats[x.i];if(x.lo>=cutoff){s.podium++;[h,p,c,e,f].forEach((v,j)=>{if(v===10)s.axis[j]++})}if(x.lo===rows[0].lo)s.first++;if(x.hi>=cutoff)s.possibleWithoutCost++;if(x.hi+10000>=cutoff)s.possibleWithMaxUnknownCost++}
 if([h,p,c,e,f].every(x=>x%5===0)){
  for(const [,,ids] of formats){const group=rows.filter(x=>ids.includes(m[x.i].slug));if(!group.length)continue;nf++;const cut=group[Math.min(2,group.length-1)].lo;for(const x of group){stats[x.i].eligibleFormat++;if(x.lo>=cut)stats[x.i].formatWins++;if(x.lo===group[0].lo)stats[x.i].formatFirst++}}
  for(const method of m){for(const cost of [5,10]){nq++;const rr=rows.map(x=>({...x,lo:x.lo+(x.i===method.i?cost*1000:0)})).sort((a,b)=>b.lo-a.lo);const cut=rr[Math.min(2,rr.length-1)].lo;for(const x of rr){if(x.lo>=cut)stats[x.i].quotePodium++;if(x.lo===rr[0].lo)stats[x.i].quoteFirst++}}}
 }
}
const pct=(x,n)=>Math.round(x/n*10000)/100
console.log(JSON.stringify({baseScenarios:n,formatScenarios:nf,quoteScenarios:nq,methods:stats.map(s=>({...s,oldPct:pct(s.old,n),podiumPct:pct(s.podium,n),firstPct:pct(s.first,n),possiblePct:pct(s.possibleWithoutCost,n),possibleWithUnknownCostPct:pct(s.possibleWithMaxUnknownCost,n),quotePct:pct(s.quotePodium,nq),formatConditionalPct:pct(s.formatWins,s.eligibleFormat)}))},null,2))
