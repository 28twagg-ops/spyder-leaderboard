import { Link, useParams } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { maySurfaceAsGuidance } from '../data/publicationGate'
import { articleBundle, articles } from '../data/researchCatalog'
import { editorialPriorityLabel } from '../data/researchGate'

export function ResearchPage() {
  const { topicId } = useParams()
  const articleId = topicId && articles.some((a) => a.id === topicId) ? topicId : articles[0]?.id
  const bundle = articleId ? articleBundle(articleId) : null

  if (!bundle) {
    return (
      <div className="stack-lg">
        <DraftBanner status="research_only" />
        <p>No research article found.</p>
      </div>
    )
  }

  const { article, relatedActions, relatedFaqs, sources, heldSources, safety } = bundle
  const guidanceBlocked = !maySurfaceAsGuidance(safety)

  return (
    <div className="stack-lg">
      <header className="stack">
        <div className="eyebrow">
          {article.domain} · {editorialPriorityLabel(article.priority)}
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '1.8rem' }}>
          {article.title}
        </h1>
        <p className="lede" style={{ margin: 0 }}>
          Progressive disclosure over staged research records. Status: {article.status ?? 'draft'}.
        </p>
      </header>

      <DraftBanner status="research_only" />

      <section className="panel stack">
        <div className="badge danger">Visible safety</div>
        <p style={{ margin: 0 }}>{article.visible_safety}</p>
      </section>

      <section className="panel stack">
        <div className="badge">~5–15 sec</div>
        <h2 style={{ margin: 0, fontSize: '1.15rem' }}>Quick takeaway</h2>
        <p style={{ margin: 0 }}>{article.quick_answer}</p>
      </section>

      <details className="panel disclosure" open>
        <summary>Learn more</summary>
        <p className="muted">{article.learn_more}</p>
      </details>

      <details className="panel disclosure">
        <summary>Related actions ({relatedActions.length})</summary>
        <p className="muted">
          Actions are educational prompts. Effective automation after gates remains blocked until
          clinical release.
        </p>
        <ul className="list-clean">
          {relatedActions.map((action) => (
            <li key={action.id}>
              <div className="badge">{editorialPriorityLabel(action.priority)}</div>
              <strong style={{ display: 'block', marginTop: '0.35rem' }}>{action.what}</strong>
              <div className="muted" style={{ marginTop: '0.25rem', fontSize: '0.9rem' }}>
                {action.why}
              </div>
              <div className="muted" style={{ marginTop: '0.25rem', fontSize: '0.85rem' }}>
                {action.visible_safety}
              </div>
            </li>
          ))}
        </ul>
      </details>

      <details className="panel disclosure">
        <summary>FAQ ({relatedFaqs.length})</summary>
        <ul className="list-clean">
          {relatedFaqs.map((faq) => (
            <li key={faq.id}>
              <strong>{faq.question}</strong>
              <div className="muted" style={{ marginTop: '0.25rem' }}>
                {faq.short_answer}
              </div>
            </li>
          ))}
        </ul>
      </details>

      <details className="panel disclosure">
        <summary>Sources & funding context</summary>
        <p className="muted">
          Guidance path for this article:{' '}
          <strong>{guidanceBlocked ? 'blocked (fail-closed)' : 'allowed'}</strong>
        </p>
        {heldSources.length > 0 && (
          <p className="muted">
            Held / excluded source IDs omitted from recommendation paths:{' '}
            {heldSources.join(', ')}
          </p>
        )}
        <ul className="list-clean">
          {sources.map((source) => (
            <li key={source.id}>
              <strong>{source.title}</strong>
              <div className="muted" style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>
                {source.publisher ?? 'Publisher unknown'} · {source.id}
              </div>
              <div className="muted" style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>
                Funding: {source.funding ?? 'unknown / not newly audited'}
              </div>
              {source.url && (
                <a href={source.url} target="_blank" rel="noreferrer">
                  Open original
                </a>
              )}
            </li>
          ))}
        </ul>
      </details>

      <p className="muted" style={{ fontSize: '0.85rem' }}>
        Stage-09 curated text is archived AI comparison/navigation material until independent
        appraisal and qualified clinical review.
      </p>

      <Link className="btn btn-ghost" to="/library">
        Back to library
      </Link>
    </div>
  )
}
