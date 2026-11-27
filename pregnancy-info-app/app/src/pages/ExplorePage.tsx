import { Link } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { topics } from '../data/syntheticContent'

const regions = [
  { id: 'nutrition', label: 'Nutrition' },
  { id: 'pelvic', label: 'Pelvic floor' },
  { id: 'skin', label: 'Skin' },
  { id: 'child', label: 'Child health' },
  { id: 'abdomen', label: 'Abdomen' },
  { id: 'breast', label: 'Breast' },
] as const

export function ExplorePage() {
  return (
    <div className="stack-lg">
      <header className="stack">
        <div className="eyebrow">Explore</div>
        <h1 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '1.8rem' }}>
          Body map & topics
        </h1>
        <p className="lede" style={{ margin: 0 }}>
          Touch a region to open educational drafts. No body scores or compulsory checklists.
        </p>
      </header>
      <DraftBanner />

      <section className="panel" aria-label="Anatomical regions">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '0.65rem',
          }}
        >
          {regions.map((region) => (
            <a
              key={region.id}
              className="btn btn-ghost"
              href={`#region-${region.id}`}
              style={{ textAlign: 'center' }}
            >
              {region.label}
            </a>
          ))}
        </div>
      </section>

      <div className="topic-grid">
        {topics.map((topic) => (
          <article key={topic.id} id={`region-${topic.region}`} className="panel stack">
            <div className="badge">{topic.region}</div>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>{topic.title}</h2>
            <p className="muted" style={{ margin: 0, fontSize: '0.95rem' }}>
              {topic.quickTake}
            </p>
            <Link className="btn btn-ghost" to={`/research/${topic.id}`}>
              Open layers
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
