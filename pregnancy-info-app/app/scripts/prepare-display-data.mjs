import assert from 'node:assert/strict'
const pick=(row,keys)=>Object.fromEntries(keys.filter(key=>Object.hasOwn(row,key)).map(key=>[key,row[key]]))
const ids=(rows,key='id')=>{const values=rows.map(row=>row[key]);assert(values.every(value=>value!==null&&value!==undefined&&value!==''),'Missing ID');assert.equal(new Set(values).size,rows.length,'Duplicate IDs');return new Set(values)}
const refs=(rows,fields,target,label)=>{for(const row of rows)for(const field of fields){const value=row[field];for(const id of Array.isArray(value)?value:value==null?[]:[value])assert(target.has(id),label+': missing '+field+' '+id)}}
const held=(row,blocked,sources)=>!sources.has(row.source_id)||blocked.has(row.source_id)||blocked.has(row.id)||(row.flags??[]).some(flag=>/hold|exclu|retract|block/i.test(flag))
const provenance=['id','source_id','origin','origin_blob_sha','index','clinical_review']
/** Project only display fields. Canonical data, nested original records and provenance stay in research/. */
export function prepareDisplayData(inputs){
 const files=Object.fromEntries(inputs.map(input=>[input.outName,input.parsed]))
 const a=files['articles.json'],act=files['actions.json'],faq=files['faq.json'],t=files['timeline.json'],w=files['gestational_weeks.json'],r=files['routines.json'],v=files['visual_catalog.json'],links=files['source_links.json'],s=files['source_index.json'],o=files['outcomes.json'],n=files['nutrients.json']
 const manifest=files['consolidated_import.json'],gate=files['publication_gate.json']
 const counts={'source_records':s,'outcome_records':o,'nutrient_reference_rows':n,'curated_articles':a,'curated_actions':act,'curated_faqs':faq,'parallel_phases':t,'gestation_rows':w,'routines':r,'visual_catalog':v}
 for(const [key,rows] of Object.entries(counts))assert.equal(rows.length,manifest.counts[key],key+' differs from manifest')
 const ai=ids(a),acti=ids(act),fi=ids(faq),ti=ids(t),vi=ids(v),li=ids(links),si=ids(s)
 ids(w,'week');ids(r);ids(o);ids(n)
 for(const rows of [a,act,faq,t,w,r,v,links,s,o,n])for(const row of rows){
  assert.notEqual(row.clinical_review,true,'Unexpected reviewed record in locked research package: '+(row.id??row.week))
  for(const key of ['publish','production_approved','chart_eligible','automation_allowed'])assert.notEqual(row[key],true,'Unexpected release flag: '+key)
 }
 assert.equal(w.length,40)
 for(const [i,row] of [...w].sort((a,b)=>a.week-b.week).entries()){
  assert.equal(row.week,i+1);assert(row.source_window_start<=row.week&&row.week<=row.source_window_end);assert.equal(row.parent_action,null)
 }
 refs(a,['source_ids'],li,'article');refs(a,['visual_ids'],vi,'article');refs(a,['action_ids'],acti,'article');refs(a,['faq_ids'],fi,'article')
 for(const rows of [act,faq]){refs(rows,['article_id'],ai,'article child');refs(rows,['source_ids'],li,'article child')}
 for(const row of a){for(const id of row.action_ids??[])assert.equal(act.find(x=>x.id===id).article_id,row.id);for(const id of row.faq_ids??[])assert.equal(faq.find(x=>x.id===id).article_id,row.id)}
 refs(t,['article_ids','featured_article_ids','persistent_safety_article_ids'],ai,'phase');refs(t,['featured_action_ids'],acti,'phase')
 refs(w,['source_id'],li,'week');refs(w,['maternal_phase'],ti,'week');refs(w,['fetal_article_id'],ai,'week')
 refs(r,['article_ids'],ai,'routine');refs(r,['action_ids'],acti,'routine')
 refs([...o,...n],['source_id'],si,'evidence')
 const blocked=new Set([...gate.source_exclusions,...gate.source_or_outcome_review_blocks])
 let heldOutcomes=0,heldNutrients=0,doseRecords=0
 const outcomes=o.map(row=>{
  const block=held(row,blocked,si)
  const result=pick(row,[...provenance,'outcome','measure','estimate','lower','upper','interval','flags','chart_eligible','independent_trial'])
  if(block){heldOutcomes++;Object.assign(result,{estimate:null,lower:null,upper:null,interval:null})}
  else if(row.record)result.record=pick(row.record,['comparison','timepoint','locator','source_locator'])
  if(!block&&[row.lower,row.estimate,row.upper].every(Number.isFinite))assert(row.lower<=row.estimate&&row.estimate<=row.upper,'Invalid interval '+row.id)
  return result
 })
 const nutrients=n.map(row=>{
  const block=held(row,blocked,si),dose=row.is_dose===true
  if(block)heldNutrients++;if(dose)doseRecords++
  const result=pick(row,[...provenance,'nutrient','life_stage','age','unit','intake_type','intake','upper_limit','upper_limit_unit','upper_limit_scope','is_dose','publish'])
  if(block||dose)Object.assign(result,{intake:null,upper_limit:null})
  else if(row.record)result.record=pick(row.record,['locator'])
  return result
 })
 const displaySources=s.map(row=>pick(row,['id','title','url','doi','pmid','year','origin','index','origin_blob_sha','funding','financial_ties','cohort','review_status','clinical_review','publish']))
 const projected={'outcomes.json':outcomes,'nutrients.json':nutrients,'source_index.json':displaySources,'consolidated_import.json':{counts:manifest.counts}}
 const bytes=value=>Buffer.byteLength(JSON.stringify(value))
 const before=Object.keys(projected).reduce((sum,key)=>sum+bytes(files[key]),0)
 const after=Object.values(projected).reduce((sum,value)=>sum+bytes(value),0)
 const diagnostics={beforeBytes:before,afterBytes:after,heldOutcomes,heldNutrients,doseRecords,records:outcomes.length+nutrients.length,sourceRecords:s.length}
 console.log('Display data validation passed: '+JSON.stringify(diagnostics))
 return {inputs:inputs.map(input=>({...input,parsed:projected[input.outName]??input.parsed})),diagnostics}
}
