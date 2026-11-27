import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { VisualCard } from '../components/VisualCard'
import { searchVisuals, visualCatalog } from '../data/visualCatalog'

const topics = [...new Set(visualCatalog.map((record) => record.topic))].sort()

export function VisualLibraryPage() {
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState('all')
  const [page,setPage]=useState(1)
  const records = searchVisuals(query, topic)
  const pages=Math.max(1,Math.ceil(records.length/8)),current=Math.min(page,pages)
  return (
    <div className="stack-lg">
      <Link className="reader-back" to="/explore">‹ Explore</Link>
      <header className="screen-heading">
        <div className="eyebrow">Explore · Visual references</div>
        <h1 className="page-title">See the science</h1>
        <p className="lede">Explore original anatomy diagrams, scientific figures, development resources and educational videos. This is a review library, not a treatment guide.</p>
      </header>
      <DraftBanner status="research_only" />
      <section className="panel stack" aria-label="Filter visual references">
        <label htmlFor="visual-query">Search visual references</label>
        <input id="visual-query" type="search" value={query} onChange={(event) => {setQuery(event.target.value);setPage(1)}} placeholder="Anatomy, sleep, development…" />
        <label htmlFor="visual-topic">Visual category</label>
        <select id="visual-topic" value={topic} onChange={(event) => {setTopic(event.target.value);setPage(1)}}>
          <option value="all">All categories</option>
          {topics.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <p role="status">{records.length} of {visualCatalog.length} visual references</p>
        <p className="muted">Original links open only when selected. Videos and unapproved external images are not embedded. Review flags do not constitute publication clearance.</p>
      </section>
      <div className="topic-grid">
        {records.slice((current-1)*8,current*8).map((record) => <VisualCard key={record.id} record={record} />)}
      </div>
      {pages>1&&<div className="page-controls"><button className="btn btn-ghost" disabled={current===1} onClick={()=>setPage(current-1)}>Previous</button><span style={{textAlign:'center'}}>{current} / {pages}</span><button className="btn btn-ghost" disabled={current===pages} onClick={()=>setPage(current+1)}>Next</button></div>}
      {!records.length && <p>No matching visual references.</p>}
      <Link className="btn btn-ghost" to="/explore">Back to explore</Link>
    </div>
  )
}
