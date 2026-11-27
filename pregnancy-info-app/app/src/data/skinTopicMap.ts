import data from './skinTopicMap.json'
import {getEvidenceSource, outcomes, hasEvidenceHold} from './evidenceCatalog'
import {isSourceOrOutcomeHeld} from './researchGate'
export const skinTopicMap=data
export const slug=(title:string)=>title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')
export const skinSections=data.sections
export function skinSection(id:string|undefined){return skinSections.find(s=>s.id===id)}
export function skinChild(section:string|undefined,child:string|undefined){return skinSection(section)?.children.find(c=>slug(c.title)===child)}
export function sourceGroups(ids:string[]){
 const unique=new Set(ids),seen=new Set<string>()
 return ids.flatMap(id=>{
  if(seen.has(id))return []
  const aliases=data.possible_duplicate_publication_groups.find(group=>group.includes(id))??[id]
  const members=aliases.filter(alias=>unique.has(alias))
  members.forEach(alias=>seen.add(alias))
  const sources=members.flatMap(alias=>{const source=getEvidenceSource(alias);return source?[source]:[]})
  return [{ids:members,sources,held:members.some(isSourceOrOutcomeHeld)}]
 })
}
export function subsectionOutcomes(ids:string[]){return outcomes.filter(row=>ids.includes(row.id)).map(row=>({...row,held:hasEvidenceHold(row),estimate:hasEvidenceHold(row)?null:row.estimate,lower:hasEvidenceHold(row)?null:row.lower,upper:hasEvidenceHold(row)?null:row.upper}))}
