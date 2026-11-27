import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { VisualCard } from '../components/VisualCard'
import { searchVisuals, visualCatalog } from '../data/visualCatalog'

const topics = [...new Set(visualCatalog.map((record) => record.topic))].sort()

export function VisualLibraryPage() {
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState('all')
  const records = searchVisuals(query, topic)
  return (
    <div className="stack-lg">
      <header className="stack">
        <div className="eyebrow">Explore · Visual references</div>
        <h1 className="page-title">See the science</h1>
        <p className="lede">Explore original anatomy diagrams, scientific figures, development resources and educational videos. This is a review library, not a treatment guide.</p>
      </header>
      <DraftBanner status="research_only" />
      <section className="panel stack" aria-label="Filter visual references">
        <label htmlFor="visual-query">Search visual references</label>
        <input id="visual-query" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Anatomy, sleep, development…" />
        <label htmlFor="visual-topic">Visual category</label>
        <select id="visual-topic" value={topic} onChange={(event) => setTopic(event.target.value)}>
          <option value="all">All categories</option>
          {topics.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <p role="status">{records.length} of {visualCatalog.length} visual references</p>
        <p className="muted">Original links open only when selected. Videos and unapproved external images are not embedded. Review flags do not constitute publication clearance.</p>
      </section>
      <div className="topic-grid">
        {records.map((record) => <VisualCard key={record.id} record={record} />)}
      </div>
      {!records.length && <p>No matching visual references.</p>}
      <Link className="btn btn-ghost" to="/explore">Back to explore</Link>
    </div>
  )
}
