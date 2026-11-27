import { Link, useParams } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import {
  archivedAiComparisonArtifact,
  topics,
} from '../data/syntheticContent'
import { maySurfaceAsGuidance } from '../data/publicationGate'

export function ResearchPage() {
  const { topicId } = useParams()
  const topic = topics.find((t) => t.id === topicId) ?? topics[0]
  const guidanceBlocked = !maySurfaceAsGuidance(topic.safety)
  const archivedBlocked = !maySurfaceAsGuidance(archivedAiComparisonArtifact.safety)

  return (
    <div className="stack-lg">
      <header className="stack">
        <div className="eyebrow">Research layers</div>
        <h1 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '1.8rem' }}>
          {topic.title}
        </h1>
        <p className="lede" style={{ margin: 0 }}>
          Progressive disclosure: quick takeaway → priorities → education → evidence → sources.
        </p>
      </header>

      <DraftBanner status={topic.safety.publicationStatus} />

      <section className="panel stack">
        <div className="badge">~5–15 sec</div>
        <h2 style={{ margin: 0, fontSize: '1.15rem' }}>Quick takeaway</h2>
        <p style={{ margin: 0 }}>{topic.quickTake}</p>
      </section>

      <section className="panel stack">
        <div className="badge">~30–60 sec</div>
        <h2 style={{ margin: 0, fontSize: '1.15rem' }}>Practical priorities</h2>
        <ul className="list-clean">
          {topic.priorities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <details className="panel disclosure">
        <summary>Learn more</summary>
        <p className="muted">{topic.evidenceNote}</p>
        <p className="muted">{topic.safetyNote}</p>
      </details>

      <details className="panel disclosure">
        <summary>Evidence & funding context</summary>
        <p className="muted">
          Live imports will separate methodological quality from funding disclosures, keep
          unknowns explicit, and never promote held or retracted sources.
        </p>
        <p className="muted">
          Guidance path status for this card:{' '}
          <strong>{guidanceBlocked ? 'blocked (fail-closed)' : 'allowed'}</strong>
        </p>
      </details>

      <details className="panel disclosure">
        <summary>Archived AI comparison artifact</summary>
        <p className="muted">{archivedAiComparisonArtifact.text}</p>
        <p className="muted">
          May surface as guidance?{' '}
          <strong>{archivedBlocked ? 'no — blocked' : 'yes'}</strong>
        </p>
      </details>

      <Link className="btn btn-ghost" to="/library">
        Browse library index
      </Link>
    </div>
  )
}
