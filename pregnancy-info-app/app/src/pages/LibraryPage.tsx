import { Link } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { catalogStats, articles, routines } from '../data/researchCatalog'
import {
  DEFAULT_PUBLICATION_BLOCK,
  EXCLUDED_SOURCE_IDS,
  HELD_SOURCE_OR_OUTCOME_IDS,
  editorialPriorityLabel,
} from '../data/researchGate'

export function LibraryPage() {
  const stats = catalogStats()

  return (
    <div className="stack-lg">
      <header className="stack">
        <div className="eyebrow">Library</div>
        <h1 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '1.8rem' }}>
          Research inventory
        </h1>
        <p className="lede" style={{ margin: 0 }}>
          Integrated from stage-09/10. Inventory counts are records, not independent trial counts.
        </p>
      </header>
      <DraftBanner status="research_only" />

      <div className="cta-row">
        <Link className="btn btn-primary" to="/evidence">
          Open evidence browser
        </Link>
        <Link className="btn btn-ghost" to="/install">
          Home Screen help
        </Link>
      </div>

      <section className="panel stack">
        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Loaded into the app</h2>
        <ul className="list-clean">
          <li>Articles: {stats.articles}</li>
          <li>Actions: {stats.actions}</li>
          <li>FAQs: {stats.faqs}</li>
          <li>Phases: {stats.phases}</li>
          <li>Gestational weeks: {stats.gestationalWeeks}</li>
          <li>Source links: {stats.sourceLinks}</li>
          <li>Optional routines: {stats.routines}</li>
          <li>
            Consolidated import sources: {stats.inventory.source_records ?? '—'} (not independent
            studies)
          </li>
        </ul>
        <p className="muted" style={{ margin: 0, fontSize: '0.85rem' }}>
          Synced: {stats.sync.synced_at} · mode: {stats.sync.integration_mode}
        </p>
      </section>

      <section className="panel stack">
        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Publication gate</h2>
        <p className="muted" style={{ margin: 0 }}>
          {DEFAULT_PUBLICATION_BLOCK}
        </p>
        <p className="muted" style={{ margin: 0 }}>
          Exclusions: {[...EXCLUDED_SOURCE_IDS].join(', ') || 'none'}
        </p>
        <p className="muted" style={{ margin: 0 }}>
          Held source/outcome IDs: {HELD_SOURCE_OR_OUTCOME_IDS.size}
        </p>
      </section>

      <section className="panel stack">
        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Optional routines</h2>
        <p className="muted" style={{ margin: 0 }}>
          No streaks, no automatic schedules, no health scores.
        </p>
        <ul className="list-clean">
          {routines.map((routine) => (
            <li key={routine.id}>
              <strong>{routine.title}</strong>
              <div className="muted" style={{ marginTop: '0.25rem', fontSize: '0.9rem' }}>
                {routine.note}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="topic-grid">
        {articles.map((article) => (
          <Link key={article.id} className="panel" to={`/research/${article.id}`}>
            <div className="badge">{editorialPriorityLabel(article.priority)}</div>
            <strong style={{ display: 'block', marginTop: '0.4rem' }}>{article.title}</strong>
            <div className="muted" style={{ marginTop: '0.35rem', fontSize: '0.9rem' }}>
              {article.domain} · {article.id}
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
