// Run from pregnancy-info-app: node research/staged-completion/stage-10/verify_snapshot.mjs
import fs from 'node:fs';import crypto from 'node:crypto';
const root='research/staged-completion/stage-10/';
const m=JSON.parse(fs.readFileSync(root+'CONSOLIDATED_IMPORT.json','utf8'));
const hash=b=>crypto.createHash('sha1').update(Buffer.from('blob '+b.length+'\0')).update(b).digest('hex');
const errors=[];for(const f of m.files){if(!fs.existsSync(f.path)){errors.push({file:f.path,issue:'missing'});continue}const b=fs.readFileSync(f.path);if(hash(b)!==f.git_blob_sha)errors.push({file:f.path,issue:'hash mismatch'});}
const lines=p=>fs.readFileSync(p,'utf8').trim().split('\n').map(JSON.parse);
const s=lines(m.source_index),ids=new Set(s.map(x=>x.id));if(s.length!==m.counts.source_records||ids.size!==s.length)errors.push('source count/uniqueness');
for(const [p,n] of [[m.outcomes,m.counts.outcome_records],[m.arm_counts,m.counts.arm_records],[m.nutrients,m.counts.nutrient_reference_rows]]){const a=lines(p);if(a.length!==n)errors.push('count '+p);for(const x of a){if(!ids.has(x.source_id))errors.push('unlinked '+x.id);if(x.clinical_review!==false)errors.push('review '+x.id);if(x.chart_eligible||x.is_dose||x.publish)errors.push('unsafe release flag '+x.id);}}
console.log(JSON.stringify({pinned:m.pinned_data_commit,files:m.files.length,errors,clinical_review:false},null,2));if(errors.length)process.exitCode=1;

