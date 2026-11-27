import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { OfflineBanner } from '../components/OfflineBanner'
import { featuredForPhase, gestationalWeeks, getArticle, getSource, timeline } from '../data/researchCatalog'

const trackNames: Record<string, string> = {
  preconception: 'Preparing together',
  pregnancy: 'Pregnancy',
  shared_birth: 'Birth together',
  maternal: 'Maternal recovery',
  child: 'Child development',
}
const weekBands = [
  { label: 'Weeks 1–13', start: 1, end: 13 },
  { label: 'Weeks 14–27', start: 14, end: 27 },
  { label: 'Weeks 28–40', start: 28, end: 40 },
]

export function TimelinePage() {
  const tracks = [...new Set(timeline.map((p) => p.track))]
  const [trackFilter, setTrackFilter] = useState('all')
  const [weekFilter, setWeekFilter] = useState('all')
  const shownTracks = tracks.filter((track) => trackFilter === 'all' || trackFilter === track)
  const orderedWeeks = [...gestationalWeeks].sort((a, b) => a.week - b.week)

  return (
    <div className="stack-lg">
      <header className="stack">
        <div className="eyebrow">Timeline · {timeline.length} phases</div>
        <h1 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '1.8rem' }}>Your family journey</h1>
        <p className="lede" style={{ margin: 0 }}>
          Explore preparation, pregnancy, birth, maternal recovery and childhood in parallel.
          These are optional educational bands, not deadlines or individual predictions.
        </p>
      </header>
      <DraftBanner status="research_only" />
      <OfflineBanner />
      <section className="panel stack" aria-labelledby="journey-filter-heading">
        <h2 id="journey-filter-heading" style={{ margin: 0, fontSize: '1.15rem' }}>Choose a timeline</h2>
        <label htmlFor="timeline-track">Family phase track</label>
        <select id="timeline-track" value={trackFilter} onChange={(event) => setTrackFilter(event.target.value)} style={{ minHeight: 44 }}>
          <option value="all">All family phases</option>
          {tracks.map((track) => <option key={track} value={track}>{trackNames[track] ?? track}</option>)}
        </select>
        <p className="muted" role="status">{timeline.filter((p) => shownTracks.includes(p.track)).length} of {timeline.length} phases</p>
        <Link to="#gestation-heading">Jump to weekly pregnancy notes</Link>
        <Link className="article-title-link" to="/research/EV-ART-003">Father and partner preparation: health and work exposures</Link>
      </section>

      {shownTracks.map((track) => (
        <details key={track} className="panel disclosure timeline-track" open={trackFilter !== 'all'}>
          <summary><h2 id={`track-${track}`}>{trackNames[track] ?? track}</h2></summary>
          <div className="phase-rail">
            {timeline.filter((p) => p.track === track).map((phase) => {
              const featured = featuredForPhase(phase)
              const featuredIds = new Set(featured.map((article) => article.id))
              const remaining = [...new Set(phase.article_ids)].flatMap((id) => {
                const article = getArticle(id)
                return article && !featuredIds.has(article.id) ? [article] : []
              })
              const safety = [...new Set(phase.persistent_safety_article_ids ?? [])].flatMap((id) => {
                const article = getArticle(id)
                return article ? [article] : []
              })
              return (
                <details key={phase.id} className="phase-item disclosure" id={phase.id}>
                  <summary><span><span className="phase-summary-label">{phase.label}</span><span className="phase-summary-focus">{phase.focus}</span></span></summary>
                  {phase.safety && <p className="muted" style={{ margin: 0, fontSize: '0.9rem' }}>{phase.safety}</p>}
                  {safety.length > 0 && (
                    <div className="stack">
                      <strong>Safety topics (draft)</strong>
                      {safety.map((article) => <Link key={article.id} to={`/research/${article.id}`}>{article.title}</Link>)}
                    </div>
                  )}
                  <ul className="list-clean">
                    {featured.map((article) => <li key={article.id}><Link to={`/research/${article.id}`}>{article.title}</Link></li>)}
                  </ul>
                  {remaining.length > 0 && (
                    <details className="disclosure">
                      <summary>More topics ({remaining.length})</summary>
                      <ul className="list-clean">
                        {remaining.map((article) => <li key={article.id}><Link to={`/research/${article.id}`}>{article.title}</Link></li>)}
                      </ul>
                    </details>
                  )}
                </details>
              )
            })}
          </div>
        </details>
      ))}

      <section className="panel stack" aria-labelledby="gestation-heading">
        <h2 id="gestation-heading" style={{ margin: 0, fontSize: '1.2rem' }}>Weekly pregnancy notes ({gestationalWeeks.length})</h2>
        <p className="muted" style={{ margin: 0 }}>
          Research draft descriptions inherit source date windows. They are not individual measurements or milestones that must occur in a particular week.
          Clinical dating belongs with a clinician.
        </p>
        <label htmlFor="week-band">Pregnancy week range</label>
        <select id="week-band" value={weekFilter} onChange={(event) => setWeekFilter(event.target.value)} style={{ minHeight: 44 }}>
          <option value="all">All 40 weeks</option>
          {weekBands.map((band) => <option key={band.label} value={band.label}>{band.label}</option>)}
        </select>
        {weekBands.filter((band) => weekFilter === 'all' || weekFilter === band.label).map((band) => (
          <details key={band.label} className="panel disclosure week-band" open={weekFilter !== 'all'}>
            <summary>{band.label}</summary>
            {orderedWeeks.filter((week) => week.week >= band.start && week.week <= band.end).map((week) => {
              const source = week.source_id ? getSource(week.source_id) : undefined
              const maternal = timeline.find((phase) => phase.id === week.maternal_phase)
              const fetal = week.fetal_article_id ? getArticle(week.fetal_article_id) : undefined
              return (
                <details key={week.week} className="panel disclosure">
                  <summary>Week {week.week}</summary>
                  <p>{week.description}</p>
                  {week.source_window_start != null && week.source_window_end != null && (
                    <p className="muted">Source window: weeks {week.source_window_start}–{week.source_window_end}</p>
                  )}
                  {week.interpretation && <p className="muted">{week.interpretation}</p>}
                  {maternal && <p>Maternal phase: {maternal.label}{' '}<Link to={`#${maternal.id}`} onClick={() => setTrackFilter(maternal.track)}>Open maternal phase</Link></p>}
                  {fetal && <p><Link to={`/research/${fetal.id}`}>{fetal.title}</Link></p>}
                  <p className="muted">Source: {source?.title ?? week.source_id ?? 'Not recorded'} {source?.url && /^https?:\/\//i.test(source.url) && <a href={source.url} target="_blank" rel="noreferrer">Open source</a>}</p>
                </details>
              )
            })}
          </details>
        ))}
      </section>
    </div>
  )
}
