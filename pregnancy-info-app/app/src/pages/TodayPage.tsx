import { Link } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { UrgentSigns } from '../components/UrgentSigns'
import { topics } from '../data/syntheticContent'

export function TodayPage() {
  const priorities = topics[0]

  return (
    <div className="stack-lg">
      <header className="hero">
        <div className="eyebrow">Private prototype</div>
        <h1 className="brand">Everwell</h1>
        <p className="lede" style={{ margin: 0, position: 'relative', zIndex: 1 }}>
          Clear education for preparation, pregnancy, recovery, and early childhood — with
          evidence you can inspect later.
        </p>
        <div className="cta-row" style={{ position: 'relative', zIndex: 1 }}>
          <Link className="btn btn-primary" to="/timeline">
            Open timeline
          </Link>
          <Link className="btn btn-ghost" to="/install">
            Add to Home Screen
          </Link>
        </div>
      </header>

      <DraftBanner />

      <section className="panel stack" aria-labelledby="priorities-heading">
        <div>
          <div className="badge">~30–60 sec</div>
          <h2 id="priorities-heading" style={{ margin: '0.55rem 0 0.2rem', fontSize: '1.2rem' }}>
            Sample priorities
          </h2>
          <p className="muted" style={{ margin: 0 }}>
            Synthetic demo for {priorities.title}. Not personal medical advice.
          </p>
        </div>
        <ol className="list-clean" style={{ listStyle: 'decimal', paddingLeft: '1.2rem' }}>
          {priorities.priorities.map((item) => (
            <li key={item} style={{ listStyle: 'decimal' }}>
              {item}
            </li>
          ))}
        </ol>
        <Link className="btn btn-ghost" to={`/research/${priorities.id}`}>
          See quick takeaway
        </Link>
      </section>

      <UrgentSigns />
    </div>
  )
}
