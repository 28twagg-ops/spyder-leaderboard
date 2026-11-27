import { Link } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { OfflineBanner } from '../components/OfflineBanner'
import { ThemePicker } from '../components/ThemePicker'
import { UrgentSigns } from '../components/UrgentSigns'
import {
  catalogStats,
  featuredForPhase,
  timeline,
  urgentArticles,
} from '../data/researchCatalog'
import { editorialPriorityLabel } from '../data/researchGate'
import { useLocalPrefs } from '../hooks/useLocalPrefs'

export function TodayPage() {
  const { prefs, setTheme, setPhase } = useLocalPrefs()
  const stats = catalogStats()
  const startingPhase =
    timeline.find((p) => p.id === prefs.selectedPhaseId) ??
    null
  const featured = startingPhase ? featuredForPhase(startingPhase).slice(0, 3) : []
  const urgent = urgentArticles().slice(0, 2)

  return (
    <div className="stack-lg">
      <header className="hero">
        <div className="eyebrow">Research draft · for families</div>
        <h1 className="brand">Everwell</h1>
        <p className="lede" style={{ margin: 0, position: 'relative', zIndex: 1 }}>
          Clear, calm research education for preparation, pregnancy, recovery, and early childhood — with
          deeper evidence available when you want it.
        </p>
        <div className="cta-row" style={{ position: 'relative', zIndex: 1 }}>
          <Link className="btn btn-primary" to="/timeline">
            Open timeline
          </Link>
          <Link className="btn btn-ghost" to="/library">
            Browse library
          </Link>
        </div>
      </header>

      <ThemePicker value={prefs.themeId} onChange={setTheme} />
      <section className="panel stack">
        <label htmlFor="reading-phase">Optional reading phase</label>
        <select id="reading-phase" value={startingPhase?.id ?? ''} onChange={(event) => setPhase(event.target.value || null)} style={{ minHeight: 44 }}>
          <option value="">Browse without selecting a phase</option>
          {timeline.map((phase) => <option key={phase.id} value={phase.id}>{phase.track.replaceAll('_', ' ')} · {phase.label} · {phase.focus}</option>)}
        </select>
        <p className="muted">Stored only in this browser. This selection is a reading filter, not a record of pregnancy, a diagnosis or a care schedule.</p>
        <Link to="/library">Search topics and manage saved items</Link>
      </section>

      <DraftBanner status="research_only" />
      <OfflineBanner />

      <section className="panel stack" aria-labelledby="start-heading">
        <div>
          <div className="badge">Starting points</div>
          <h2 id="start-heading" style={{ margin: '0.55rem 0 0.2rem', fontSize: '1.2rem' }}>
            {startingPhase?.label ?? 'Explore at your own pace'}
          </h2>
          <p className="muted" style={{ margin: 0 }}>
            {startingPhase ? [startingPhase.focus, startingPhase.featured_note].filter(Boolean).join('. ') : 'Choose any phase above or browse all topics. No timeline is assumed.'}
          </p>
          <p className="muted" style={{ margin: '0.45rem 0 0', fontSize: '0.85rem' }}>
            Inventory loaded: {stats.articles} articles · {stats.phases} phases ·{' '}
            {stats.sourceLinks} sources
          </p>
        </div>
        <ul className="list-clean">
          {featured.map((article) => (
            <li key={article.id}>
              <div className="badge">{editorialPriorityLabel(article.priority)}</div>
              <strong style={{ display: 'block', marginTop: '0.35rem' }}>{article.title}</strong>
              <p className="muted" style={{ margin: '0.35rem 0 0.6rem', fontSize: '0.95rem' }}>
                {article.quick_answer}
              </p>
              <Link className="btn btn-ghost" to={`/research/${article.id}`}>
                Open layers
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {urgent.length > 0 && (
        <section className="panel stack" aria-labelledby="urgent-edu-heading">
          <div className="badge danger">Urgent education</div>
          <h2 id="urgent-edu-heading" style={{ margin: 0, fontSize: '1.1rem' }}>
            Always-visible safety topics
          </h2>
          <ul className="list-clean">
            {urgent.map((article) => (
              <li key={article.id}>
                <Link to={`/research/${article.id}`}>
                  <strong>{article.title}</strong>
                </Link>
                <div className="muted" style={{ marginTop: '0.25rem', fontSize: '0.9rem' }}>
                  {article.visible_safety}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      <UrgentSigns />
    </div>
  )
}
