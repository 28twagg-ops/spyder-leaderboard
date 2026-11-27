import { useState } from 'react'
import { useLocalPrefs } from '../hooks/useLocalPrefs'
import { Link } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { catalogStats, searchArticles, listDomains, routines } from '../data/researchCatalog'
import {
  DEFAULT_PUBLICATION_BLOCK,
  EXCLUDED_SOURCE_IDS,
  HELD_SOURCE_OR_OUTCOME_IDS,
  editorialPriorityLabel,
} from '../data/researchGate'

export function LibraryPage() {
  const stats = catalogStats()
  const { prefs, toggleBookmark, clearPrefs, exportPrefs } = useLocalPrefs()
  const [query, setQuery] = useState('')
  const [domain, setDomain] = useState('all')
  const [savedOnly, setSavedOnly] = useState(false)
  const [showExport, setShowExport] = useState(false)
  const [confirmClear, setConfirmClear] = useState(false)
  const matches = searchArticles(query, domain).filter((article) => !savedOnly || prefs.bookmarks.includes(article.id))

  return (
    <div className="stack-lg">
      <header className="stack">
        <div className="eyebrow">Library</div>
        <h1 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '1.8rem' }}>
          Research inventory
        </h1>
        <p className="lede" style={{ margin: 0 }}>
          Integrated from stage-09/10. Inventory counts are records, not independent trial counts.
        </p>
      </header>
      <DraftBanner status="research_only" />

      <div className="cta-row">
        <Link className="btn btn-primary" to="/evidence">
          Open evidence browser
        </Link>
        <Link className="btn btn-ghost" to="/install">
          Home Screen help
        </Link>
      </div>

      <section className="panel stack">
        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Loaded into the app</h2>
        <ul className="list-clean">
          <li>Articles: {stats.articles}</li>
          <li>Actions: {stats.actions}</li>
          <li>FAQs: {stats.faqs}</li>
          <li>Phases: {stats.phases}</li>
          <li>Gestational weeks: {stats.gestationalWeeks}</li>
          <li>Source links: {stats.sourceLinks}</li>
          <li>Optional routines: {stats.routines}</li>
          <li>
            Consolidated import sources: {stats.inventory.source_records ?? '—'} (not independent
            studies)
          </li>
        </ul>
        <p className="muted" style={{ margin: 0, fontSize: '0.85rem' }}>
          Synced: {stats.sync.synced_at} · mode: {stats.sync.integration_mode}
        </p>
      </section>

      <section className="panel stack">
        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Publication gate</h2>
        <p className="muted" style={{ margin: 0 }}>
          {DEFAULT_PUBLICATION_BLOCK}
        </p>
        <p className="muted" style={{ margin: 0 }}>
          Exclusions: {[...EXCLUDED_SOURCE_IDS].join(', ') || 'none'}
        </p>
        <p className="muted" style={{ margin: 0 }}>
          Held source/outcome IDs: {HELD_SOURCE_OR_OUTCOME_IDS.size}
        </p>
      </section>

      <section className="panel stack">
        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Optional routines</h2>
        <p className="muted" style={{ margin: 0 }}>
          No streaks, no automatic schedules, no health scores.
        </p>
        <ul className="list-clean">
          {routines.map((routine) => (
            <li key={routine.id}>
              <strong>{routine.title}</strong>
              <div className="muted" style={{ marginTop: '0.25rem', fontSize: '0.9rem' }}>
                {routine.note}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel stack" aria-labelledby="topic-search-heading">
        <h2 id="topic-search-heading">Find a topic</h2>
        <label htmlFor="topic-search">Search articles</label>
        <input id="topic-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Topic, question or source ID" style={{ minHeight: 44 }} />
        <label htmlFor="topic-domain">Topic category</label>
        <select id="topic-domain" value={domain} onChange={(event) => setDomain(event.target.value)} style={{ minHeight: 44 }}>
          <option value="all">All categories</option>
          {listDomains().map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <label><input type="checkbox" checked={savedOnly} onChange={(event) => setSavedOnly(event.target.checked)} /> Saved articles only</label>
        <button type="button" className="btn btn-ghost" onClick={() => { setQuery(''); setDomain('all'); setSavedOnly(false) }}>Clear search</button>
        <p role="status">{matches.length} of {stats.articles} articles · {prefs.bookmarks.length} saved</p>
      </section>
      <section className="topic-grid">
        {matches.map((article) => (
          <article key={article.id} className="panel stack">
            <Link to={`/research/${article.id}`}>
            <div className="badge">{editorialPriorityLabel(article.priority)}</div>
            <strong style={{ display: 'block', marginTop: '0.4rem' }}>{article.title}</strong>
            <div className="muted" style={{ marginTop: '0.35rem', fontSize: '0.9rem' }}>
              {article.domain} · {article.id}
            </div>
            </Link>
            <button type="button" className="btn btn-ghost" aria-label={`${prefs.bookmarks.includes(article.id) ? 'Remove bookmark for' : 'Save bookmark for'} ${article.title}`} aria-pressed={prefs.bookmarks.includes(article.id)} onClick={() => toggleBookmark(article.id)}>{prefs.bookmarks.includes(article.id) ? 'Saved' : 'Save'}</button>
            {prefs.readArticles.includes(article.id) && <span className="muted">Marked read</span>}
          </article>
        ))}
      </section>
      {!matches.length && <p>No matching topics. Try a different search or clear filters.</p>}
      <section className="panel stack" aria-labelledby="local-prefs-heading">
        <h2 id="local-prefs-heading">Local privacy and preferences</h2>
        <p className="muted">Reading choices, bookmarks, reading markers and theme are stored locally, not encrypted. They may reveal interests to someone with access to this browser. No account, medical record, cloud sync or analytics is added by this feature. Search text is not persisted.</p>
        <button type="button" className="btn btn-ghost" onClick={() => setShowExport(!showExport)}>{showExport ? 'Hide export' : 'Show local preference export'}</button>
        {showExport && <><label htmlFor="prefs-export">Preference JSON (copy only if you want to keep it)</label><textarea id="prefs-export" readOnly value={exportPrefs()} rows={8} /></>}
        {!confirmClear ? <button type="button" className="btn btn-ghost" onClick={() => setConfirmClear(true)}>Clear local preferences</button> : <>
          <p>Remove saved articles, reading markers, phase and theme choice from this browser?</p>
          <button type="button" className="btn btn-ghost" onClick={() => { clearPrefs(); setShowExport(false); setConfirmClear(false); setSavedOnly(false) }}>Confirm clear</button>
          <button type="button" className="btn btn-ghost" onClick={() => setConfirmClear(false)}>Cancel</button>
        </>}
      </section>
    </div>
  )
}
