import {useState} from 'react'
import {Link} from 'react-router-dom'
import {searchFocused} from '../data/focusedSearch'
export default function FocusedResults({query,domain,currentWeek}:{query:string;domain:string;currentWeek:number|null}){
 const [expanded,setExpanded]=useState(false)
 const results=searchFocused(query,domain,currentWeek)
 if(!results.length)return null
 const shown=expanded?results:results.slice(0,8)
 return <section className="focused-results" aria-labelledby="focused-results-heading"><h2 id="focused-results-heading" className="section-title">Detailed topics</h2><p className="focused-result-count">{results.length} matching topics</p><div className="surface-list">{shown.map(item=><Link className="reading-row" to={item.href} key={item.path}><span><strong>{item.title}</strong><small>{item.category} · {item.week===currentWeek?'Your selected week':'Reference week '+item.week}</small></span><span aria-hidden="true">›</span></Link>)}</div>{results.length>8&&<button type="button" className="btn btn-ghost" onClick={()=>setExpanded(x=>!x)}>{expanded?'Show fewer topics':'Show all '+results.length+' topics'}</button>}</section>
}
