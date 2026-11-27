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
        <svg className="hero-botanical" viewBox="0 0 180 170" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M93 164 C90 115 105 65 146 19 M95 133 C51 112 29 75 24 43 M102 104 C136 101 155 79 168 50 M112 78 C87 65 82 40 87 13"/><path d="M95 133 C70 135 51 123 44 105 C68 104 85 114 95 133 M64 109 C39 107 23 89 21 70 C43 77 57 91 64 109 M119 67 C123 43 140 28 160 24 C156 44 141 59 119 67 M101 103 C110 79 127 71 149 73 C139 95 123 105 101 103 M89 55 C72 47 65 29 69 10 C86 21 91 36 89 55"/></g></svg>
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

      <DraftBanner status="research_only" />
      <UrgentSigns />
      <section className="journey-grid" aria-label="Explore Everwell">
        <Link className="journey-tile" to="/timeline"><span className="journey-number">01</span><strong>Family journey</strong><span>Preparation to early childhood</span></Link>
        <Link className="journey-tile" to="/explore"><span className="journey-number">02</span><strong>Explore topics</strong><span>Body areas and visual references</span></Link>
        <Link className="journey-tile" to="/library"><span className="journey-number">03</span><strong>Find and save</strong><span>Educational reading library</span></Link>
        <Link className="journey-tile" to="/evidence"><span className="journey-number">04</span><strong>Evidence library</strong><span>Original research and nutrition</span></Link>
      </section>
      <section className="panel stack" aria-labelledby="start-heading">
        <div>
          <div className="badge">Starting points</div>
          <h2 id="start-heading" style={{ margin: '0.55rem 0 0.2rem', fontSize: '1.2rem' }}>
            {startingPhase?.label ?? 'Explore at your own pace'}
          </h2>
          <p className="muted" style={{ margin: 0 }}>
            {startingPhase ? [startingPhase.focus, startingPhase.featured_note].filter(Boolean).join('. ') : 'Choose any reading phase below or browse all topics. No timeline is assumed.'}
          </p>
          <p className="muted" style={{ margin: '0.45rem 0 0', fontSize: '0.85rem' }}>
            Inventory loaded: {stats.articles} articles · {stats.phases} phases ·{' '}
            {stats.sourceLinks} sources
          </p>
        </div>
        <div className="stack">
        <label htmlFor="reading-phase">Optional reading phase</label>
        <select id="reading-phase" value={startingPhase?.id ?? ''} onChange={(event) => setPhase(event.target.value || null)} style={{ minHeight: 44 }}>
          <option value="">Browse without selecting a phase</option>
          {timeline.map((phase) => <option key={phase.id} value={phase.id}>{phase.track.replaceAll('_', ' ')} · {phase.label} · {phase.focus}</option>)}
        </select>
        <p className="muted">Stored only in this browser. This selection is a reading filter, not a record of pregnancy, a diagnosis or a care schedule.</p>
        <Link to="/library">Search topics and manage saved items</Link>
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

      <details className="panel disclosure">
        <summary>Appearance</summary>
        <div className="stack">
      <ThemePicker value={prefs.themeId} onChange={setTheme} />



        </div>
      </details>
      <OfflineBanner />
    </div>
  )
}
