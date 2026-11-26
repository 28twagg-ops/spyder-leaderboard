// Dependency-free Node.js export builder. Run from pregnancy-info-app/research: node transfer/build_exports.mjs
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const inputs={
  "manifest": "release-prep/FINAL_RESEARCH_IMPORT.json",
  "sources": "integrated/CANONICAL_SOURCE_REGISTRY.json",
  "topics": "integrated/TOPIC_BUNDLES.json",
  "claims": "CLAIMS.json",
  "assessments": "EVIDENCE_ASSESSMENTS.json",
  "safety_assessments": "SAFETY_ASSESSMENTS.json",
  "timeline": "TIMELINE.json",
  "studies": "integrated/STUDIES_LINKED.json",
  "interventions": "medium-prep/INTERVENTIONS.json",
  "nutrients": "high-audit/NUTRIENT_REFERENCE_EXPANDED.json",
  "tests": "release-prep/SAFETY_TEST_SUITE.json",
  "latest": "release-prep/LATEST_SAFETY_AND_EVIDENCE_CHECKS.json",
  "visual": "release-prep/VISUAL_EDUCATION_SPEC.json",
  "acceptance": "release-prep/RELEASE_ACCEPTANCE.json"
};
function build(data,inputs,shas){
  const m=data.manifest, src=new Map(data.sources.map(s=>[s.id,s])), files={},catalog=[];
  const csvCell=v=>{if(v===null||v===undefined)return '""';let s=typeof v==="object"?JSON.stringify(v):String(v);if(/^[=+\-@\t\r]/.test(s)&&typeof v!=="number")s="'"+s;return '"'+s.replace(/"/g,'""')+'"';};
  const csv=(name,rows,fields,origin)=>{files[name]=fields.map(csvCell).join(",")+"\r\n"+rows.map(r=>fields.map(f=>csvCell(r[f])).join(",")).join("\r\n")+"\r\n";catalog.push({file:name,format:"CSV",count:rows.length,origin,lossless:false});};
  const jsonl=(name,rows,origin,type)=>{let content=rows.map((record,i)=>JSON.stringify({record_type:type,record_id:record.id??record.topic_id??record.candidate_id??`${type}-${i+1}`,origin,record})).join("\n")+"\n";files[name]=content;catalog.push({file:name,format:"JSONL",count:rows.length,origin,lossless:true});};
  const alias=m.source_snapshot.declared_publication_alias_map??{};
  csv("sources.csv",data.sources.map(s=>({...s,preferred_publication_id:alias[s.id]??s.id,hold:(m.hold_source_ids??[]).includes(s.id)})),["id","preferred_publication_id","title","authors","journal","publication_year","publication_details","doi","pmid","url","topics","kind","access","verification_scope","current_pass_status","checked_locator","checked_date","funding","conflicts","correction_retraction_status","clinical_review","hold"],inputs.sources);
  const interval=m.numerics.intervals.map(x=>({...x,source_url:x.source_url??src.get(x.source_id)?.url,held_source:(m.hold_source_ids??[]).includes(x.source_id)}));
  csv("interval_estimates.csv",interval,["id","source_id","study_id","publication_identity","level","outcome","comparison","timepoint","measure","estimate","lower","upper","confidence_level","reported_sample","contributing_studies","axis","null_value","certainty","i2_percent","locator","interpretation","source_url","original_file","clinical_review","publication_status","chart_status","possible_duplicate_interval_ids","show_as_independent_trial","held_source"],inputs.manifest);
  csv("arm_counts.csv",m.numerics.counts.map(x=>({...x,source_id:x.source_id??x.source?.source_id,source_url:x.source?.url??src.get(x.source_id)?.url})),["id","source_id","study_id","outcome","comparison","denominator_type","intervention_events","intervention_n","control_events","control_n","source_url","denominator_source_id","original_file","clinical_review","show_as_independent_trial"],inputs.manifest);
  csv("nutrients.csv",data.nutrients.map(x=>({...x,source_id:x.source?.source_id,source_url:x.source?.url})),["nutrient","age","life_stage","unit","intake_type","intake","upper_limit","upper_limit_unit","upper_limit_scope","basis","source_id","source_url","locator","clinical_review"],inputs.nutrients);
  csv("intervention_index.csv",data.interventions.map(x=>({...x,source_ids:(x.source_links??[]).map(y=>y.source_id)})),["id","topic_id","name","intent","outcome","summary","source_ids","setting","effort_evidence","cost_usd","cost_status","phase_navigation_ids","individual_eligibility","evidence_status","clinical_review","auto_schedule"],inputs.interventions);
  csv("claim_index.csv",data.claims,["id","topic","statement","action","safety","source_ids","evidence_assessment_id","review_status","timeline_phase_ids","safety_assessment_ids"],inputs.claims);
  jsonl("sources.jsonl",data.sources,inputs.sources,"source");
  jsonl("topics.jsonl",data.topics,inputs.topics,"topic");
  jsonl("claims.jsonl",data.claims,inputs.claims,"claim");
  jsonl("evidence_assessments.jsonl",data.assessments,inputs.assessments,"evidence_assessment");
  jsonl("safety_assessments.jsonl",data.safety_assessments,inputs.safety_assessments,"safety_assessment");
  jsonl("timeline.jsonl",data.timeline,inputs.timeline,"timeline_phase");
  jsonl("studies.jsonl",data.studies,inputs.studies,"study");
  jsonl("interventions.jsonl",data.interventions,inputs.interventions,"intervention");
  jsonl("intervention_candidates.jsonl",m.intervention_candidates,inputs.manifest+"#intervention_candidates","intervention_candidate");
  jsonl("nutrients.jsonl",data.nutrients,inputs.nutrients,"nutrient_reference");
  jsonl("interval_estimates.jsonl",m.numerics.intervals,inputs.manifest+"#numerics.intervals","interval_estimate");
  jsonl("arm_counts.jsonl",m.numerics.counts,inputs.manifest+"#numerics.counts","arm_count");
  jsonl("safety_tests.jsonl",data.tests.scenarios,inputs.tests+"#scenarios","synthetic_test");
  jsonl("media_candidates.jsonl",m.media_candidates,inputs.manifest+"#media_candidates","media_candidate");
  jsonl("latest_checks.jsonl",data.latest.checks,inputs.latest+"#checks","audit_check");
  jsonl("visual_briefs.jsonl",data.visual.items,inputs.visual+"#items","visual_brief");
  const md=["# Topic navigator — research draft","", "Derived from the current topic bundles, claims and intervention index. Use the source JSON for full evidence, stage-specific qualifiers, latest audit overrides and citations. These are not clinical recommendations. No review or release status is changed.",""];
  for(const t of data.topics){
    md.push(`## ${t.topic_id} — ${t.title}`,"");
    for(const key of ["takeaway","action","safety"]){const q=t.quick?.[key];if(q)md.push(`**${key[0].toUpperCase()+key.slice(1)}:** ${q.text}`,`Selected source IDs: ${(q.selected_links??[]).map(x=>x.source_id).join(", ")||"none recorded"}.`,"");}
    const cs=data.claims.filter(c=>c.topic===t.topic_id);
    md.push(`Claims: ${cs.map(x=>x.id).join(", ")}.`,`Interventions: ${data.interventions.filter(x=>x.topic_id===t.topic_id).map(x=>`${x.id} (${x.name})`).join("; ")||"none"}.`,`Phase IDs: ${(t.phase_navigation_ids??[]).join(", ")||"none recorded"}.`,"");
  }
  files["TOPIC_NAVIGATOR.md"]=md.join("\n")+"\n";catalog.push({file:"TOPIC_NAVIGATOR.md",format:"Markdown",count:data.topics.length,origin:[inputs.topics,inputs.claims,inputs.interventions],lossless:false});
  const bib=data.sources.filter(s=>s.doi||s.pmid).map(s=>{const clean=v=>String(v??"").replace(/[\r\n]+/g," ");const lines=["TY  - GEN",`ID  - ${clean(s.id)}`,`TI  - ${clean(s.title)}`,`UR  - ${clean(s.url)}`];if(s.journal)lines.push(`JO  - ${clean(s.journal)}`);if(s.publication_year)lines.push(`PY  - ${clean(s.publication_year)}`);if(s.doi)lines.push(`DO  - ${clean(s.doi).replace(/^https?:\/\/doi\.org\//i,"")}`);if(s.pmid)lines.push(`AN  - PMID:${clean(s.pmid)}`);lines.push(`N1  - Source ID ${s.id}; authors as recorded: ${clean(s.authors)}; review status: ${clean(s.current_pass_status)}; clinical review pending; check metadata before citation.`,`ER  - `);return lines.join("\n");});
  files["bibliography.ris"]=bib.join("\n\n")+"\n";catalog.push({file:"bibliography.ris",format:"RIS",count:bib.length,origin:inputs.sources,lossless:false,scope:"DOI or PMID present; generic type intentionally, author text retained in note; not verified reference-manager metadata"});
  const allIds=new Set(data.sources.map(s=>s.id));const missing=[];
  for(const r of [...m.numerics.intervals,...m.numerics.counts]){const id=r.source_id??r.source?.source_id;if(!allIds.has(id))missing.push({record:r.id,source_id:id});}
  for(const r of data.tests.scenarios)for(const id of r.source_ids??[])if(!allIds.has(id))missing.push({record:r.id,source_id:id});
  const counts={sources:data.sources.length,unique_source_ids:allIds.size,topics:data.topics.length,claims:data.claims.length,baseline_studies:data.studies.length,timeline_phases:data.timeline.length,baseline_interventions:data.interventions.length,intervention_candidates:m.intervention_candidates.length,nutrients:data.nutrients.length,intervals:m.numerics.intervals.length,arm_counts:m.numerics.counts.length,media_candidates:m.media_candidates.length,safety_scenarios:data.tests.scenarios.length,prompt_variants:data.tests.scenarios.reduce((n,x)=>n+x.variants.length,0),p0_scenarios:data.tests.scenarios.filter(x=>x.severity==="P0").length,latest_audit_checks:data.latest.checks.length,visual_briefs:data.visual.items.length,svg_assets:m.visual_assets.length,acceptance_requirements:data.acceptance.acceptance.length};
  files["EXPORT_MANIFEST.json"]=JSON.stringify({schema_version:1,purpose:"Derived portability views; canonical JSON/Markdown/SVG remain authoritative.",input_files:Object.entries(inputs).map(([key,path])=>({key,path,git_blob_sha:shas[key]??null})),counts,outputs:catalog,qa:{missing_selected_source_refs:missing,duplicate_source_ids:data.sources.length-allIds.size,clinical_review_count:0,clinical_runtime_tests_executed:0},rules:["JSONL preserves each source record object; origin identifies input, generated record_id is an export key not necessarily canonical.","CSV is a selected projection; arrays/objects are JSON strings, null and missing both blank, formula-like strings prefixed with an apostrophe for spreadsheet safety.","RIS only includes records with DOI or PMID; mixed publication types; no independently validated metadata.","No automatic merging of overlapping estimates; retain alias and cohort rules from final import.","Do not use these exports as a substitute for latest audits, full original dossiers or clinical review."]},null,2)+"\n";
  return {files,counts,missing};
}
const data={}, shas={};
for (const [key,relative] of Object.entries(inputs)){const bytes=fs.readFileSync(path.join(root,relative));data[key]=JSON.parse(bytes.toString("utf8"));shas[key]=crypto.createHash("sha1").update(Buffer.from("blob "+bytes.length+"\0")).update(bytes).digest("hex");}
const result=build(data,inputs,shas);if(result.missing.length)throw Error(JSON.stringify(result.missing));const dest=path.join(root,"transfer","exports");fs.mkdirSync(dest,{recursive:true});for(const [name,contents] of Object.entries(result.files))fs.writeFileSync(path.join(dest,name),contents,"utf8");console.log(JSON.stringify(result.counts,null,2));
