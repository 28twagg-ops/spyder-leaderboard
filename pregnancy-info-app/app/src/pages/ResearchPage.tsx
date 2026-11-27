import { Glyph } from '../components/Glyph'
import { plainReading } from '../data/plainReading'
import { readingOverview } from '../data/readingOverviews'
import { RememberedReadingDetails } from '../components/RememberedReadingDetails'
import { TopicOverview } from '../components/TopicOverview'
import { useAppBack } from '../hooks/navigationContext'
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
  const purpose=readingOverview(article.id)
  const plain=plainReading(article.id)
  const emergencyTopic=article.priority==='urgent'
  const urgent=emergencyTopic||article.high_risk===true
  const why=purpose&&<section className="reader-purpose-block"><h2 className="section-title">Why it matters</h2><p className="reader-purpose">{purpose.why}</p></section>

  return (
    <div key={article.id} className="stack-lg reader-page">
      <div className="reader-toolbar"><button type="button" className="reader-back" onClick={back}><Glyph name="back"/>Back</button><div className="reader-tools"><button type="button" className="header-action plain-icon" aria-label={prefs.bookmarks.includes(article.id)?'Remove bookmark':'Save bookmark'} aria-pressed={prefs.bookmarks.includes(article.id)} onClick={()=>toggleBookmark(article.id)}><Glyph name="bookmark"/><span>{prefs.bookmarks.includes(article.id)?'Saved':'Save'}</span></button><button type="button" className="header-action plain-icon" disabled={prefs.readArticles.includes(article.id)} onClick={()=>markRead(article.id)}><Glyph name="check"/><span>{prefs.readArticles.includes(article.id)?'Read':'Mark read'}</span></button></div></div>
      <header className="screen-heading reader-heading">
        <div className="eyebrow">
          {domainLabels[article.domain]??article.domain}
        </div>
        <h1 className="page-title">
          {article.title}
        </h1>
        <p className="small-copy muted">Research draft · medical review pending</p>
      </header>

      <DraftBanner status="research_only" />
      {!urgent&&why}
      <section className="panel stack safety-panel">
        <div className="section-label danger">Visible safety</div>
        <p style={{ margin: 0 }}>{urgent?article.visible_safety:plain?.safety??article.visible_safety}</p>
        {emergencyTopic&&<p className="urgent-reading-note">{article.learn_more}</p>}
        {!urgent&&plain&&<details className="disclosure"><summary>Full safety note</summary><p>{article.visible_safety}</p></details>}
        {emergencyTopic&&<Link className="topic-link" to="/urgent">Urgent signs &amp; getting help ›</Link>}
      </section>

      {urgent&&why}
      <TopicOverview key={article.id} id={article.id} visuals={visuals}>
        {plain&&<RememberedReadingDetails articleId={article.id}><p className="small-copy muted">Unreviewed research summary, not medical advice.</p><p>{plain.detail}</p><Link className="topic-link" to={{hash:"#research-details"}}>Explore the science ›</Link></RememberedReadingDetails>}
      </TopicOverview>
      <h2 className="section-title" id="research-details">Explore the science</h2>
      <div className="surface-list reader-sections">
      <details className="panel disclosure reader-section">
        <summary>Archived AI summary for comparison</summary>
        <p>This is a draft, not medical advice. Experts still need to check the studies and the health information.</p>
        <p>{article.quick_answer}</p><p className="muted">{article.learn_more}</p>
      </details>

      <details className="panel disclosure reader-section">
        <summary>Archived draft actions ({relatedActions.length})</summary>
        <p className="muted">
          These are draft records to compare, not a care plan or steps to follow. The app does not turn them into tasks.
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
        <p className="muted">Draft answers, not advice for your own care.</p>
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
        <summary>Studies & who paid for them</summary>
        <p className="muted">
          Can this app use this draft for medical advice?{' '}
          <strong>{guidanceBlocked ? 'No — blocked until review' : 'allowed'}</strong>
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
        These research notes were drafted with AI. Independent study checks and medical review are still needed.
      </p>

      <button type="button" className="btn btn-ghost" onClick={back}>Back to previous view</button>
    </div>
  )
}
