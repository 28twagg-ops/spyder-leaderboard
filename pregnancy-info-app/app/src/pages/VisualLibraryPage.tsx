import { useViewState } from '../hooks/useViewMemory'
import { Link, useParams } from 'react-router-dom'
import { Glyph } from '../components/Glyph'
import { ScreenHeading } from '../components/ReadingUI'
import { DraftBanner } from '../components/DraftBanner'
import { VisualCard } from '../components/VisualCard'
import { getVisual, searchVisuals, visualCatalog } from '../data/visualCatalog'

const topics = [...new Set(visualCatalog.map((record) => record.topic))].sort()

export function VisualLibraryPage() {
  const [query, setQuery] = useViewState('visual.query','')
  const [topic, setTopic] = useViewState('visual.topic','all')
  const [page,setPage]=useViewState('visual.page',1)
  const records = searchVisuals(query, topic)
  const pages=Math.max(1,Math.ceil(records.length/8)),current=Math.min(page,pages)
  const {visualId}=useParams()
  const selected=visualId?getVisual(visualId):undefined
  if(visualId)return <div className="stack-lg"><ScreenHeading title={selected?.title??'Reference not found'} subtitle="Original reference · review library" back="/visuals" backLabel="Back" historyBack/>{selected?<VisualCard record={selected}/>:<p>Choose an available reference from the library.</p>}<DraftBanner status="research_only"/></div>
  return (
    <div className="stack-lg">
      <ScreenHeading title="See the science" subtitle="Original illustrations, figures and educational resources." back="/explore" backLabel="Explore"/>
      <DraftBanner status="research_only" />
      <section className="panel stack" aria-label="Filter visual references">
        <label htmlFor="visual-query">Search visual references</label>
        <input id="visual-query" type="search" autoComplete="off" maxLength={200} value={query} onChange={(event) => {setQuery(event.target.value);setPage(1)}} placeholder="Anatomy, sleep, development…" />
        <label htmlFor="visual-topic">Visual category</label>
        <select id="visual-topic" value={topic} onChange={(event) => {setTopic(event.target.value);setPage(1)}}>
          <option value="all">All categories</option>
          {topics.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <p role="status">{records.length} of {visualCatalog.length} visual references</p>
        <p className="muted">Original links open only when selected. Videos and unapproved external images are not embedded. Review flags do not constitute publication clearance.</p>
      </section>
      <div className="surface-list visual-results">
        {records.slice((current-1)*8,current*8).map(record=><Link className="visual-result" key={record.id} to={`/visuals/${record.id}`}><span className="journey-emblem"><Glyph name="image"/></span><span><h3>{record.title}</h3><small>{record.topic.replaceAll('/',' / ')} · Review reference</small></span><span aria-hidden="true">›</span></Link>)}
      </div>
      {pages>1&&<div className="page-controls"><button className="btn btn-ghost" disabled={current===1} onClick={()=>setPage(current-1)}>Previous</button><span style={{textAlign:'center'}}>{current} / {pages}</span><button className="btn btn-ghost" disabled={current===pages} onClick={()=>setPage(current+1)}>Next</button></div>}
      {!records.length && <p>No matching visual references.</p>}
      <Link className="btn btn-ghost" to="/explore">Back to explore</Link>
    </div>
  )
}
