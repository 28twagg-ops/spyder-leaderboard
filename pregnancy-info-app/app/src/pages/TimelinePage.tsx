import { DraftBanner } from '../components/DraftBanner'
import { phases } from '../data/syntheticContent'

export function TimelinePage() {
  return (
    <div className="stack-lg">
      <header className="stack">
        <div className="eyebrow">Timeline</div>
        <h1 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '1.8rem' }}>
          Parallel family phases
        </h1>
        <p className="lede" style={{ margin: 0 }}>
          Organizational bands only — not clinical deadlines. Maternal and child tracks stay
          distinct.
        </p>
      </header>
      <DraftBanner />
      <div className="phase-rail">
        {phases.map((phase) => (
          <article key={phase.id} className="phase-item">
            <div className="badge">{phase.band}</div>
            <h2 style={{ margin: 0, fontSize: '1.15rem' }}>{phase.title}</h2>
            <p className="muted" style={{ margin: 0 }}>
              {phase.summary}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
