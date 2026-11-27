import { Link } from 'react-router-dom'
import { BodyMap } from '../components/BodyMap'
import { DraftBanner } from '../components/DraftBanner'
import { OfflineBanner } from '../components/OfflineBanner'
import { articlesByDomain, listDomains } from '../data/researchCatalog'
import { editorialPriorityLabel } from '../data/researchGate'

export function ExplorePage() {
  const domains = listDomains()

  return (
    <div className="stack-lg">
      <header className="stack">
        <div className="eyebrow">Explore · {domains.length} domains</div>
        <h1 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '1.8rem' }}>
          Topic map
        </h1>
        <p className="lede" style={{ margin: 0 }}>
          Body-map regions plus full domain lists. Priority labels are editorial navigation, not
          GRADE or personal medical orders.
        </p>
      </header>
      <DraftBanner status="research_only" />
      <OfflineBanner />

      <Link className="btn btn-primary" to="/library">Search all topics or saved articles</Link>
      <BodyMap />

      <section className="panel" aria-label="All domains">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '0.65rem',
          }}
        >
          {domains.map((domain) => (
            <a
              key={domain}
              className="btn btn-ghost"
              href={`#domain-${domain}`}
              style={{ textAlign: 'center' }}
            >
              {domain}
            </a>
          ))}
        </div>
      </section>

      {domains.map((domain) => (
        <section
          key={domain}
          id={`domain-${domain}`}
          className="stack"
          aria-labelledby={`h-${domain}`}
        >
          <h2 id={`h-${domain}`} style={{ margin: 0, fontSize: '1.2rem' }}>
            {domain}
          </h2>
          <div className="topic-grid">
            {articlesByDomain(domain).map((article) => (
              <article key={article.id} className="panel stack">
                <div className="badge">{editorialPriorityLabel(article.priority)}</div>
                <h3 style={{ margin: 0, fontSize: '1.05rem' }}>{article.title}</h3>
                <p className="muted" style={{ margin: 0, fontSize: '0.95rem' }}>
                  {article.quick_answer}
                </p>
                <Link className="btn btn-ghost" to={`/research/${article.id}`}>
                  Open layers
                </Link>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
