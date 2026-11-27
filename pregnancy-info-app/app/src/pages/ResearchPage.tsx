import { Glyph } from '../components/Glyph'
import { useAppBack } from '../hooks/NavigationMemory'
import { safeVisualUrl } from '../data/visualCatalog'
import { domainLabels } from '../data/browseState'
import { ReadingRow } from '../components/ReadingUI'
import { articlesByDomain } from '../data/researchCatalog'
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
  const back=useAppBack('/library')
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
    <div className="stack-lg reader-page">
      <div className="reader-toolbar"><button type="button" className="reader-back" onClick={back}><Glyph name="back"/>Back</button><div className="reader-tools"><button type="button" className="header-action plain-icon" aria-label={prefs.bookmarks.includes(article.id)?'Remove bookmark':'Save bookmark'} aria-pressed={prefs.bookmarks.includes(article.id)} onClick={()=>toggleBookmark(article.id)}><Glyph name="bookmark"/><span>{prefs.bookmarks.includes(article.id)?'Saved':'Save'}</span></button><button type="button" className="header-action plain-icon" disabled={prefs.readArticles.includes(article.id)} onClick={()=>markRead(article.id)}><Glyph name="check"/><span>{prefs.readArticles.includes(article.id)?'Read':'Mark read'}</span></button></div></div>
      <header className="screen-heading reader-heading">
        <div className="eyebrow">
          {domainLabels[article.domain]??article.domain} · {editorialPriorityLabel(article.priority)}
        </div>
        <h1 className="page-title">
          {article.title}
        </h1>
        <p className="lede" style={{ margin: 0 }}>
          Research draft · independent clinical review pending.
        </p>
      </header>

      <DraftBanner status="research_only" />
      <section className="panel stack safety-panel">
        <div className="section-label danger">Visible safety</div>
        <p style={{ margin: 0 }}>{article.visible_safety}</p>
      </section>

      <h2 className="section-title">Read &amp; explore</h2>
      <div className="surface-list reader-sections">
      <details className="panel disclosure reader-section">
        <summary>Archived AI summary for comparison</summary>
        <p>Independent appraisal and clinical review are pending. This draft is for research comparison only.</p>
        <p>{article.quick_answer}</p>
        <p className="muted">{article.learn_more}</p>
      </details>

      <details className="panel disclosure reader-section">
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

      <details className="panel disclosure reader-section">
        <summary>Archived FAQ ({relatedFaqs.length})</summary>
        <p className="muted">Unreviewed comparison material, not individualized advice.</p>
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

      {visuals.length > 0 && <details className="panel disclosure reader-section">
        <summary>Visual references ({visuals.length})</summary>
        <p className="muted">Original illustrations and source links for review. Not evidence of treatment effectiveness or individual development.</p>
        <div className="stack">{visuals.map(record=><ReadingRow key={record.id} to={`/visuals/${record.id}`} title={record.title} subtitle="Original reference · approval pending"/>)}</div>
      </details>}
      <details className="panel disclosure reader-section">
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
              {safeVisualUrl(source.url) && (
                <a href={safeVisualUrl(source.url)} target="_blank" rel="noreferrer">
                  Open original
                </a>
              )}
            </li>
          ))}
        </ul>
      </details>

      </div>
      <section className="stack"><h2 className="section-title">Related reading</h2><div className="surface-list">{articlesByDomain(article.domain).filter(a=>a.id!==article.id).slice(0,3).map(a=><ReadingRow key={a.id} to={`/research/${a.id}`} title={a.title}/>)}</div></section>
      <p className="muted" style={{ fontSize: '0.85rem' }}>
        Stage-09 curated text is archived AI comparison/navigation material until independent
        appraisal and qualified clinical review.
      </p>

      <button type="button" className="btn btn-ghost" onClick={back}>Back to previous view</button>
    </div>
  )
}
