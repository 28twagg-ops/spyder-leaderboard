import { VisualCard } from '../components/VisualCard'
import { articleVisuals } from '../data/visualCatalog'
import { useLocalPrefs } from '../hooks/useLocalPrefs'
import { Link, useParams } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { maySurfaceAsGuidance } from '../data/publicationGate'
import { articleBundle } from '../data/researchCatalog'
import { editorialPriorityLabel } from '../data/researchGate'

export function ResearchPage() {
  const { prefs, toggleBookmark, markRead } = useLocalPrefs()
  const { topicId } = useParams()
  const bundle = topicId ? articleBundle(topicId) : null

  if (!bundle) {
    return (
      <div className="stack-lg">
        <DraftBanner status="research_only" />
        <h1>Research article not found</h1>
        <p>The requested article is unavailable. Choose a topic from the library.</p>
        <Link className="btn btn-ghost" to="/library">Browse library</Link>
      </div>
    )
  }

  const { article, relatedActions, relatedFaqs, sources, heldSources, safety } = bundle
  const guidanceBlocked = !maySurfaceAsGuidance(safety)
  const visuals = articleVisuals(article.id, article.visual_ids ?? [])

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
      <div className="cta-row">
        <button type="button" className="btn btn-ghost" aria-pressed={prefs.bookmarks.includes(article.id)} onClick={() => toggleBookmark(article.id)}>{prefs.bookmarks.includes(article.id) ? 'Remove bookmark' : 'Save bookmark'}</button>
        <button type="button" className="btn btn-ghost" disabled={prefs.readArticles.includes(article.id)} onClick={() => markRead(article.id)}>{prefs.readArticles.includes(article.id) ? 'Marked read' : 'Mark as read'}</button>
      </div>
      <p className="muted">Optional reading markers stay in this browser; they do not affect medical recommendations.</p>

      <section className="panel stack">
        <div className="section-label danger">Visible safety</div>
        <p style={{ margin: 0 }}>{article.visible_safety}</p>
      </section>

      <details className="panel disclosure">
        <summary>Archived AI summary for comparison</summary>
        <p>Independent appraisal and clinical review are pending. This draft is for research comparison only.</p>
        <p>{article.quick_answer}</p>
        <p className="muted">{article.learn_more}</p>
      </details>

      <details className="panel disclosure">
        <summary>Archived draft actions ({relatedActions.length})</summary>
        <p className="muted">
          These are unreviewed comparison records, not instructions to follow or a personal care plan.
          Automation remains blocked.
        </p>
        <ul className="list-clean">
          {relatedActions.map((action) => (
            <li key={action.id}>
              <div className="section-label">{editorialPriorityLabel(action.priority)}</div>
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
              {faq.visible_safety && (
                <p className="muted" style={{ margin: '0.25rem 0 0', fontSize: '0.85rem' }}>
                  Draft safety context: {faq.visible_safety}
                </p>
              )}
            </li>
          ))}
        </ul>
      </details>

      {visuals.length > 0 && <details className="panel disclosure">
        <summary>Visual references ({visuals.length})</summary>
        <p className="muted">Original illustrations and source links for review. Not evidence of treatment effectiveness or individual development.</p>
        <div className="stack">{visuals.map((record) => <VisualCard key={record.id} record={record} />)}</div>
      </details>}
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
