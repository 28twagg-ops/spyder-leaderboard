import { Link } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { ACTIVE_HOLDS } from '../data/publicationGate'
import { topics } from '../data/syntheticContent'

export function LibraryPage() {
  return (
    <div className="stack-lg">
      <header className="stack">
        <div className="eyebrow">Library</div>
        <h1 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '1.8rem' }}>
          Research navigation
        </h1>
        <p className="lede" style={{ margin: 0 }}>
          Demo index only. Canonical inventory lives in stage-10 consolidated import (770 source
          records — not 770 independent trials).
        </p>
      </header>
      <DraftBanner />

      <section className="panel stack">
        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Active holds (sample)</h2>
        <p className="muted" style={{ margin: 0 }}>
          Full gate: research/staged-completion/stage-10/PUBLICATION_GATE.json
        </p>
        <ul className="list-clean">
          {ACTIVE_HOLDS.map((hold) => (
            <li key={hold}>
              <code>{hold}</code>
            </li>
          ))}
        </ul>
      </section>

      <section className="topic-grid">
        {topics.map((topic) => (
          <Link key={topic.id} className="panel" to={`/research/${topic.id}`}>
            <strong>{topic.title}</strong>
            <div className="muted" style={{ marginTop: '0.35rem', fontSize: '0.9rem' }}>
              {topic.safety.publicationStatus}
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
