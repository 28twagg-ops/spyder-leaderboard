import {useState} from 'react'
import {Link} from 'react-router-dom'
import {comparePreferences,defaultPreferenceFilters,defaultPreferenceWeights,preferenceCriteria} from '../data/contraceptionPreferences'
import {contraceptionPath} from '../data/contraception'
const levels=['Not selected','Slightly important','Somewhat important','Important','Very important','Essential']
export function ContraceptionPreferences(){
 const [weights,setWeights]=useState(defaultPreferenceWeights)
 const [filters,setFilters]=useState(defaultPreferenceFilters)
 const [showAll,setShowAll]=useState(false)
 const {possible,results,reviewOnly}=comparePreferences(weights,filters)
 const shown=showAll?results:results.slice(0,3)
 return <section className="bc-section" aria-label="Personal preference comparison">
 <p className="bc-takeaway">Choose what matters to you. Your answers stay in this page's memory. This compares method features, not medical eligibility, individualized risk, or a recommendation to start or stop a method.</p>
 <div className="bc-preference-sliders">{preferenceCriteria.map(c=><div className="bc-preference-control" key={c.id}><div className="bc-pref-label"><label htmlFor={'pref-'+c.id}>{c.label}</label><output htmlFor={'pref-'+c.id}>{weights[c.id]||0}/5</output></div><input type="range" id={'pref-'+c.id} min={0} max={5} step={1} value={weights[c.id]||0} aria-valuetext={levels[weights[c.id]||0]} onChange={e=>{setWeights(old=>({...old,[c.id]:Number(e.target.value)}));setShowAll(false)}}/><p className="small-copy muted">{levels[weights[c.id]||0]} · {c.description}</p></div>)}</div>
 <fieldset className="bc-required"><legend>Must-have filters (optional)</legend>{([['hormoneFree','No added hormones'],['noProcedure','No invasive placement or injection'],['underOne','Typical-use estimate below 1%']] as const).map(([id,label])=><label key={id}><input type="checkbox" checked={filters[id]} onChange={e=>{setFilters(old=>({...old,[id]:e.target.checked}));setShowAll(false)}}/> {label}</label>)}</fieldset>
 <button type="button" className="btn btn-ghost" onClick={()=>{setWeights(defaultPreferenceWeights());setFilters(defaultPreferenceFilters);setShowAll(false)}}>Reset preferences</button>
 <div className="bc-heading"><h2>Compare your matches</h2><span>{results.length} methods</span></div>
 <p className="small-copy muted">Points are your own selected weights for documented method features. Unknown matches are shown as ranges; ties are not broken arbitrarily. Hormone and cycle preferences share one feature weight to prevent double counting. Health, pain and cost are review-only, not invented safety scores.</p>
 {reviewOnly.length>0&&<p className="bc-takeaway">Review closely: {reviewOnly.join(', ')}. These priorities are listed in the result details but do not change the point ranking.</p>}
 {!results.length&&<p role="status">No method matches all must-have filters. Change a filter to compare other options.</p>}
 {possible===0&&<p role="status">Select a comparable preference to order methods by weighted feature matches. Without weights, methods remain in their original order.</p>}
 <div className="bc-match-results">{shown.map(r=><article className="bc-chart" key={r.method.slug}><div className="bc-pref-label"><h3>{r.method.name}</h3>{possible>0&&<strong>{r.minimum===r.maximum?r.minimum:r.minimum+'–'+r.maximum}/{possible} points</strong>}</div>{possible>0&&<div className="bc-track" aria-hidden="true"><span className="bc-fill" style={{width:r.minimum/possible*100+'%'}}/>{r.maximum>r.minimum&&<span className="bc-range" style={{left:r.minimum/possible*100+'%',width:(r.maximum-r.minimum)/possible*100+'%'}}/>}</div>}<p className="bc-takeaway">{r.method.pro}</p><p className="small-copy muted">Trade-offs: {r.method.con}</p>{r.criteria.length>0&&<details className="bc-note"><summary>Why it matches (or doesn't)</summary><dl className="bc-facts">{r.criteria.map(c=><div key={c.id}><dt>{c.label} · {c.scored?c.match===true?'Matches':c.match===false?'Does not match':'Uncertain':'Review only'}</dt><dd>{c.detail} <Link to={contraceptionPath+'/method-'+r.method.slug}>Source details</Link></dd></div>)}</dl></details>}<Link className="bc-read" to={contraceptionPath+'/method-'+r.method.slug}>Explore {r.method.name} ›</Link></article>)}</div>
 {results.length>3&&<button type="button" className="bc-more" onClick={()=>setShowAll(x=>!x)} aria-expanded={showAll}>{showAll?'Show first three':'Show all '+results.length+' matches'}</button>}
 <p className="small-copy muted">A higher match score is not a safer method. Individual eligibility, side effects, current medications and health history require a separate discussion with a qualified clinician. No personal answers are transmitted or saved.</p></section>
}
