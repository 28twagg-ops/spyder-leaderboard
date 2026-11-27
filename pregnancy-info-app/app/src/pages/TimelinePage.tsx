import { Link } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { featuredForPhase, gestationalWeeks, timeline } from '../data/researchCatalog'

export function TimelinePage() {
  const tracks = [...new Set(timeline.map((p) => p.track))]

  return (
    <div className="stack-lg">
      <header className="stack">
        <div className="eyebrow">Timeline · {timeline.length} phases</div>
        <h1 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '1.8rem' }}>
          Parallel family phases
        </h1>
        <p className="lede" style={{ margin: 0 }}>
          Organizational bands from the staged research packet — not clinical deadlines.
          Gestational dating belongs with clinicians.
        </p>
      </header>
      <DraftBanner status="research_only" />

      {tracks.map((track) => (
        <section key={track} className="stack" aria-labelledby={`track-${track}`}>
          <h2
            id={`track-${track}`}
            style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '1.25rem' }}
          >
            {track}
          </h2>
          <div className="phase-rail">
            {timeline
              .filter((p) => p.track === track)
              .map((phase) => {
                const featured = featuredForPhase(phase).slice(0, 3)
                return (
                  <article key={phase.id} className="phase-item">
                    <div className="badge">{phase.label}</div>
                    <h3 style={{ margin: 0, fontSize: '1.05rem' }}>{phase.focus}</h3>
                    {phase.safety && (
                      <p className="muted" style={{ margin: 0, fontSize: '0.9rem' }}>
                        {phase.safety}
                      </p>
                    )}
                    <ul className="list-clean" style={{ marginTop: '0.5rem' }}>
                      {featured.map((article) => (
                        <li key={article.id}>
                          <Link to={`/research/${article.id}`}>{article.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                )
              })}
          </div>
        </section>
      ))}

      <section className="panel stack" aria-labelledby="gestation-heading">
        <h2 id="gestation-heading" style={{ margin: 0, fontSize: '1.1rem' }}>
          Weekly fetal notes ({gestationalWeeks.length})
        </h2>
        <p className="muted" style={{ margin: 0 }}>
          Research draft descriptions. Clinical dating and interpretation require a clinician.
        </p>
        <ul className="list-clean">
          {gestationalWeeks.slice(0, 8).map((week) => (
            <li key={week.week}>
              <strong>Week {week.week}</strong>
              <div className="muted" style={{ marginTop: '0.25rem', fontSize: '0.9rem' }}>
                {week.description}
              </div>
              {week.fetal_article_id && (
                <Link to={`/research/${week.fetal_article_id}`}>Related article</Link>
              )}
            </li>
          ))}
        </ul>
        <p className="muted" style={{ margin: 0, fontSize: '0.85rem' }}>
          Showing first 8 of {gestationalWeeks.length} week rows from stage-09.
        </p>
      </section>
    </div>
  )
}
