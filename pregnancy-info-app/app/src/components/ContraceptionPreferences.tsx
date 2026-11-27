import {useState} from 'react'
import {Link} from 'react-router-dom'
import {comparePreferences,defaultPreferenceFilters,defaultPreferenceWeights,preferenceCriteria} from '../data/contraceptionPreferences'
import {contraceptionPath} from '../data/contraception'
const levels=['Not important','Slightly important','Somewhat important','Important','Very important','Essential']
const primary=[['hormones','Avoid hormones'],['effectiveness','Effectiveness'],['physical','Physical health'],['mental','Mental health'],['pain','Placement pain'],['cycle','Period changes'],['fertility','Future fertility'],['cost','Upfront cost']] as const
const extra=[['convenience','Convenience'],['sti','STI protection']] as const
const initialWeights=()=>({...defaultPreferenceWeights(),hormones:3,effectiveness:3,physical:3,mental:3,pain:3,cycle:3,fertility:3,cost:3})
export function ContraceptionPreferences(){
 const [weights,setWeights]=useState(initialWeights)
 const [filters,setFilters]=useState(defaultPreferenceFilters)
 const [showAll,setShowAll]=useState(false)
 const {possible,results,reviewOnly}=comparePreferences(weights,filters)
 const top=results.slice(0,3)
 const tiedAtCutoff=possible>0&&results.length>3&&results[2].minimum===results[3].minimum
 const score=(r:typeof results[number])=>r.minimum===r.maximum?String(r.minimum):r.minimum+'–'+r.maximum
 const rows=(entries:readonly (readonly [string,string])[])=>entries.map(([id,label])=>{
  const c=preferenceCriteria.find(x=>x.id===id)!
  return <div className="bc-compact-weight" key={id}><label htmlFor={'pref-'+id}>{label}</label><input type="range" id={'pref-'+id} min={0} max={5} step={1} value={weights[id]||0} aria-label={c.label} aria-valuetext={levels[weights[id]||0]} onChange={e=>{setWeights(old=>({...old,[id]:Number(e.target.value)}));setShowAll(false)}}/><output htmlFor={'pref-'+id}>{weights[id]||0}</output></div>
 })
 return <section className="bc-compact-decision" aria-label="Personal preference comparison">
 <div className="bc-compact-title"><h2>What matters most to you?</h2><button type="button" className="bc-reset" onClick={()=>{setWeights(initialWeights());setFilters(defaultPreferenceFilters);setShowAll(false)}}>Reset</button></div>
 <p className="bc-compact-hint">Slide each priority · 0 = not important, 5 = essential</p>
 <div className="bc-compact-weights">{rows(primary)}</div>
 <section className="bc-compact-results" aria-label="Live top three matches"><div className="bc-compact-title"><h3>Top 3 matches</h3><small>Live · feature points</small></div>
 {possible===0?<p className="small-copy muted">Choose a comparable feature to reveal matches.</p>:top.length===0?<p role="status">No methods meet these filters.</p>:<div aria-live="polite" className="bc-compact-results-list">{top.map(r=><Link className="bc-compact-result" key={r.method.slug} to={contraceptionPath+'/method-'+r.method.slug}><span className="bc-rank-number">{r.rank}</span><span><strong>{r.method.name}</strong>{r.tied&&<small> · tied</small>}{r.uncertain&&<small> · uncertain</small>}</span><span className="bc-live-points">{score(r)}/{possible}</span><span aria-hidden="true">›</span></Link>)}</div>}
 {tiedAtCutoff&&<p className="bc-compact-hint">More methods tie at the cutoff; see match details.</p>}
 </section>
 <p className="bc-compact-hint">Feature matches, not medical safety. Health and cost use limited feature proxies; mental health changes what to review, not the ranking.</p>
 <details className="bc-note"><summary>More options &amp; why these methods match</summary><div className="bc-compact-weights">{rows(extra)}</div>
 <fieldset className="bc-required"><legend>Must-have filters (optional)</legend>{([['hormoneFree','No added hormones'],['noProcedure','No invasive placement or injection'],['underOne','Typical-use estimate below 1%']] as const).map(([id,label])=><label key={id}><input type="checkbox" checked={filters[id]} onChange={e=>{setFilters(old=>({...old,[id]:e.target.checked}));setShowAll(false)}}/> {label}</label>)}</fieldset>
 <p className="small-copy muted">A point is a user-selected weight for a documented method feature, not a clinical risk estimate. The physical-health proxy avoids estrogen and depot-injection concerns; pain means avoiding invasive procedures; upfront cost means avoiding placement, injection and professional fitting expenses. These proxies cannot establish overall health, pain or actual affordability. Periods may still change. No medical eligibility assessment. Answers stay in memory.</p>
 {reviewOnly.length>0&&<p className="bc-takeaway">Review closely: {reviewOnly.join(', ')}. Evidence does not support a comparative score for these outcomes.</p>}
 <div className="bc-match-results">{(showAll?results:top).map(r=><article className="bc-chart" key={r.method.slug}><div className="bc-pref-label"><h3>{r.rank!==null?r.rank+'. ':''}{r.method.name}</h3>{possible>0&&<strong>{score(r)}/{possible} points</strong>}</div><p className="bc-takeaway">{r.method.pro}</p><p className="small-copy muted">Trade-offs: {r.method.con}</p><details className="bc-note"><summary>Weighted features &amp; evidence</summary><dl className="bc-facts">{r.criteria.map(c=><div key={c.id}><dt>{c.label} · {c.weight}/5 · {c.scored?c.match===true?'Matches':c.match===false?'Does not match':'Uncertain':'Review only'}</dt><dd>{c.detail} <Link to={contraceptionPath+'/method-'+r.method.slug}>Source details</Link></dd></div>)}</dl></details><Link className="bc-read" to={contraceptionPath+'/method-'+r.method.slug}>Explore {r.method.name} ›</Link></article>)}</div>
 {results.length>3&&<button type="button" className="bc-more" onClick={()=>setShowAll(x=>!x)} aria-expanded={showAll}>{showAll?'Show first three':'Show all '+results.length+' matches'}</button>}
 </details></section>
}
