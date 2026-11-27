import { Link } from 'react-router-dom'
import { BodyMap } from '../components/BodyMap'
import { DraftBanner } from '../components/DraftBanner'
import { OfflineBanner } from '../components/OfflineBanner'
import { articlesByDomain, listDomains } from '../data/researchCatalog'

export function ExplorePage() {
  const domains = listDomains()

  return (
    <div className="stack-lg">
      <header className="stack">
        <div className="eyebrow">Explore · {domains.length} domains</div>
        <h1 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '1.8rem' }}>
          Explore your body
        </h1>
        <p className="lede" style={{ margin: 0 }}>
          Choose an area or browse a topic. Labels organize reading, not medical priorities.
        </p>
      </header>
      <DraftBanner status="research_only" />
      <OfflineBanner />

      <div className="cta-row">
        <Link className="btn btn-primary" to="/library">Search topics</Link>
        <Link className="btn btn-ghost" to="/visuals">Visual reference library</Link>
      </div>
      <BodyMap />

      <section className="domain-list" aria-label="All domains"><h2 className="section-title">All topics</h2>
        {domains.map(domain => <details key={domain} id={`domain-${domain}`} className="disclosure"><summary>{domain.replaceAll('_',' ')}</summary>
          {articlesByDomain(domain).map(article => <Link key={article.id} className="topic-link" to={`/research/${article.id}`}>{article.title}</Link>)}
        </details>)}
      </section>
    </div>
  )
}
