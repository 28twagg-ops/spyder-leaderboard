import data from './contraception.json'
export const contraception=data
export const contraceptionPath='/contraception'
export function searchContraception(query:string,domain:string){
 if(domain!=='all'&&domain!=='prep')return []
 const words=query.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim().split(/\s+/).filter(w=>w.length>1&&!['the','and','for','with','what','how','is','of','to','my','can','do','me','in','a'].includes(w))
 if(!words.length)return []
 return data.sections.map(s=>{
  const title=s.title.toLowerCase(),hay=(s.title+' '+s.keywords).toLowerCase()
  const hits=words.filter(w=>hay.split(/[^a-z0-9]+/).some(t=>t===w||w.length>3&&t.startsWith(w))).length
  return {section:s,score:hits===words.length?hits*4+words.filter(w=>title.includes(w)).length*2:0}
 }).filter(r=>r.score>0).sort((a,b)=>b.score-a.score).map(r=>r.section)
}
