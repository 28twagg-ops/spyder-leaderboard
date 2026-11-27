import { Link, useParams } from 'react-router-dom'
import { domainLabels } from './LibraryPage'
import { BodyMap } from '../components/BodyMap'
import { DraftBanner } from '../components/DraftBanner'
import { articlesByDomain, listDomains } from '../data/researchCatalog'

export function ExplorePage() {
  const domains = listDomains()
  const {domain}=useParams()
  if(domain && domains.includes(domain)) return <div className="stack-lg"><Link className="reader-back" to="/explore">‹ Explore</Link><h1 className="page-title">{domainLabels[domain]??domain}</h1><DraftBanner status="research_only"/><section className="result-list">{articlesByDomain(domain).map(a=><Link className="topic-link" key={a.id} to={`/research/${a.id}`}>{a.title} ›</Link>)}</section></div>

  return (
    <div className="stack-lg">
      <header className="stack">
        <div className="eyebrow">Explore</div>
        <h1 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '1.8rem' }}>
          Explore
        </h1>
        <p className="lede" style={{ margin: 0 }}>
          Choose an area or browse a topic. Labels organize reading, not medical priorities.
        </p>
      </header>
      <DraftBanner status="research_only" />
      

      <div className="cta-row">
        <Link className="btn btn-primary" to="/library">Search topics</Link>
        <Link className="btn btn-ghost" to="/visuals">Visual reference library</Link>
      </div>
      <BodyMap />

      <section className="domain-list" aria-label="All domains"><h2 className="section-title">Browse topics</h2>
      <div className="result-list">{domains.map(d=><Link className="topic-link" key={d} to={`/explore/${d}`}>{domainLabels[d]??d} <span aria-hidden="true">›</span></Link>)}</div></section>
    </div>
  )
}
