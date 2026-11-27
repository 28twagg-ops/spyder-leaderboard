import data from './skinTopicMap.json'
import {getEvidenceSource, evidenceSources, outcomes, hasEvidenceHold} from './evidenceCatalog'
import {isSourceOrOutcomeHeld} from './researchGate'
export const skinTopicMap=data
export const slug=(title:string)=>title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')
interface SkinChild {title:string;source_ids:string[];outcome_ids:string[];explicit_hold_source_ids:string[];note?:string}
interface SkinSection {id:string;title:string;stage:string;children:SkinChild[]}
export const skinSections:SkinSection[]=data.sections
export function skinSection(id:string|undefined){return skinSections.find(s=>s.id===id)}
export function skinChild(section:string|undefined,child:string|undefined){return skinSection(section)?.children.find(c=>slug(c.title)===child)}
// Exact bibliographic aliases, not inferred independent cohorts.
const aliasParent=new Map(evidenceSources.map(s=>[s.id,s.id]))
function root(id:string):string{const p=aliasParent.get(id);if(!p||p===id)return id;const r=root(p);aliasParent.set(id,r);return r}
function join(a:string,b:string){const x=root(a),y=root(b);if(x!==y)aliasParent.set(y,x)}
const keys=new Map<string,string>()
for(const s of evidenceSources)for(const key of [s.doi?'doi:'+s.doi.toLowerCase().trim():null,s.pmid?'pmid:'+s.pmid:null]){
 if(!key)continue
 const prior=keys.get(key);if(prior)join(prior,s.id);else keys.set(key,s.id)
}
for(const group of data.possible_duplicate_publication_groups)for(const id of group.slice(1))join(group[0],id)
const aliasIndex=new Map<string,string[]>()
for(const s of evidenceSources){const key=root(s.id);const group=aliasIndex.get(key)??[];group.push(s.id);aliasIndex.set(key,group)}
export function sourceAliasHeld(id:string){return (aliasIndex.get(root(id))??[id]).some(isSourceOrOutcomeHeld)}
export function sourceGroups(ids:string[]){
 const seen=new Set<string>()
 return [...new Set(ids)].flatMap(id=>{
  const key=root(id)
  if(seen.has(key))return []
  seen.add(key)
  const members=aliasIndex.get(key)??[id]
  const sources=members.flatMap(alias=>{const source=getEvidenceSource(alias);return source?[source]:[]})
  return [{ids:members,sources,held:members.some(isSourceOrOutcomeHeld)}]
 })
}
export function subsectionOutcomes(ids:string[]){
 return outcomes.filter(row=>ids.includes(row.id)).map(row=>{
  const held=hasEvidenceHold(row)||sourceAliasHeld(row.source_id)
  return {...row,held,estimate:held?null:row.estimate,lower:held?null:row.lower,upper:held?null:row.upper,interval:held?null:row.interval,record:held?undefined:row.record}
 })
}
