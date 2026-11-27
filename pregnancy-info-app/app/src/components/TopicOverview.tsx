import { useState } from 'react'
import { Link } from 'react-router-dom'
import { readingOverview,textbookLinks } from '../data/readingOverviews'
import { safeVisualUrl, type VisualRecord } from '../data/visualCatalog'
import { Glyph } from './Glyph'
import { ConceptArt } from './ConceptArt'

/** A topic map organizes the article's reading subjects, not biological pathways or a care sequence. */
export function TopicOverview({id,visuals}:{id:string;visuals:VisualRecord[]}){
 const overview=readingOverview(id)
 const [expanded,setExpanded]=useState(false)
 if(!overview)return null
 const external=textbookLinks[id]??[]
 return <section className="reader-overview" aria-label="Visual topic overview">
  <figure className="topic-map"><figcaption>What you'll learn</figcaption><div className="topic-map-branches"><svg viewBox="0 0 300 44" preserveAspectRatio="none" aria-hidden="true"><path d="M150 0V16M50 44V16H250V44M150 16V44" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg><div className="topic-map-nodes">{overview.concepts.map((label,i)=><div key={label} className="topic-map-node"><ConceptArt articleId={id} index={i}/><strong>{label}</strong></div>)}</div></div><small>Topics to read, not steps to follow.</small></figure>
  {(external.length>0||visuals.length>0)&&<section className="reader-visual-entry" aria-labelledby="visual-entry"><h2 className="section-title" id="visual-entry">See it visually</h2><div className="surface-list">
   {external.map(([title,url,description])=><a key={url} className="reading-row visual-source-row" href={safeVisualUrl(url)} target="_blank" rel="noopener noreferrer"><span><strong>{title}</strong><small>{description} · opens source</small></span><span aria-hidden="true">↗</span></a>)}
   {visuals.slice(0,expanded?visuals.length:1).map(record=><Link key={record.id} className="reading-row visual-source-row" to={`/visuals/${record.id}`}><span><strong>{record.title}</strong><small>Picture or video · review pending</small></span><Glyph name="image"/></Link>)}
  </div>{visuals.length>1&&<button className="btn btn-ghost" type="button" aria-expanded={expanded} onClick={()=>setExpanded(!expanded)}>{expanded?'Show fewer references':`See ${visuals.length-1} more visual references`}</button>}<p className="small-copy muted">Pictures open at their source or on a reference page. Medical images still need review.</p></section>}
 </section>
}
