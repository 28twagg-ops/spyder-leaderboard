import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { OfflineBanner } from '../components/OfflineBanner'
import {
  evidenceStats, filterNutrients, filterOutcomes, getEvidenceSource, nutrients, paginate,
  type HoldFilter,
} from '../data/evidenceCatalog'

const lifeStages = [...new Set(nutrients.map((row) => row.life_stage).filter((stage): stage is string => Boolean(stage)))].sort()
const pageSize = 20

function displayValue(value: unknown): string {
  if (typeof value === 'number' && Number.isFinite(value)) return String(value)
  if (typeof value === 'string' && value.trim()) return value
  return 'Not recorded'
}

function Provenance({ sourceId, origin, blob, index, locator }: {
  sourceId: string; origin?: string; blob?: string; index?: number; locator?: unknown
}) {
  const source = getEvidenceSource(sourceId)
  const safeUrl = source?.url && /^https?:\/\//i.test(source.url) ? source.url : null
  return (
    <details className="disclosure">
      <summary>Source, funding & provenance</summary>
      <div className="stack">
        <p><strong>{source?.title ?? 'Source metadata unavailable'}</strong> ({sourceId})</p>
        {safeUrl && <p><a href={safeUrl} target="_blank" rel="noreferrer">Open original source</a></p>}
        {source?.doi && <p>DOI: {source.doi}</p>}
        {source?.pmid && <p>PMID: {source.pmid}</p>}
        <p>Funding: {displayValue(source?.funding)}</p>
        <p>Financial ties: {displayValue(source?.financial_ties)}</p>
        <p className="muted">Not recorded does not mean independent or conflict-free. Source metadata is itself pending appraisal.</p>
        <p>Repository origin: {origin ?? 'Not recorded'}</p>
        {blob && <p style={{ overflowWrap: 'anywhere' }}>Origin blob: {blob}</p>}
        {index != null && <p>Origin record index: {index} (zero-based)</p>}
        {locator != null && <p>Locator: {displayValue(locator)}</p>}
      </div>
    </details>
  )
}

function PageControls({ page, pages, first, last, total, setPage }: {
  page: number; pages: number; first: number; last: number; total: number; setPage: (page: number) => void
}) {
  return (
    <div className="stack">
      <p className="muted" role="status">Showing {first}–{last} of {total} records · Page {page} of {pages}</p>
      <div className="page-controls">
        <button type="button" className="btn btn-ghost" disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
        <label className="visually-hidden" htmlFor="evidence-page">Page</label>
        <select id="evidence-page" value={page} onChange={(event) => setPage(Number(event.target.value))} style={{ minHeight: 44 }}>
          {Array.from({ length: pages }, (_, index) => <option key={index + 1} value={index + 1}>{index + 1}</option>)}
        </select>
        <button type="button" className="btn btn-ghost" disabled={page === pages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  )
}

export function EvidencePage() {
  const stats = evidenceStats()
  const [mode, setMode] = useState<'outcomes' | 'nutrients'>('outcomes')
  const [query, setQuery] = useState('')
  const [hold, setHold] = useState<HoldFilter>('all')
  const [lifeStage, setLifeStage] = useState('all')
  const [page, setPage] = useState(1)
  const outcomePage = paginate(filterOutcomes({ query, hold }), page, pageSize)
  const nutrientPage = paginate(filterNutrients({ query, hold, lifeStage }), page, pageSize)
  const current = mode === 'outcomes' ? outcomePage : nutrientPage

  return (
    <div className="stack-lg">
      <header className="stack">
        <div className="eyebrow">Evidence library</div>
        <h1 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '1.8rem' }}>Outcomes & nutrients</h1>
        <p className="lede" style={{ margin: 0 }}>
          Explore the complete draft evidence inventory. Records are not independent study counts.
          Clinical charting, individualized dosing, ranking and automated recommendations remain blocked.
        </p>
      </header>
      <DraftBanner status="research_only" />
      <OfflineBanner />
      <section className="panel stack">
        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Research inventory</h2>
        <ul className="list-clean">
          <li>{stats.outcomes} outcome records · {stats.heldOutcomes} held</li>
          <li>{stats.nutrients} nutrient reference records · {stats.heldNutrients} held</li>
          <li>{stats.sources} source index records (not unique independent studies)</li>
        </ul>
        <p className="muted">Held values are hidden from this interface. Unheld does not mean verified, clinically safe or approved.</p>
      </section>
      <section className="panel stack" aria-labelledby="evidence-filters">
        <h2 id="evidence-filters" style={{ margin: 0, fontSize: '1.1rem' }}>Browse records</h2>
        <label htmlFor="evidence-kind">Record type</label>
        <select id="evidence-kind" value={mode} onChange={(event) => { setMode(event.target.value === 'nutrients' ? 'nutrients' : 'outcomes'); setPage(1) }} style={{ minHeight: 44 }}>
          <option value="outcomes">Scientific outcomes</option>
          <option value="nutrients">Nutrient reference intakes</option>
        </select>
        <label htmlFor="evidence-query">Search records or sources</label>
        <input id="evidence-query" type="search" value={query} onChange={(event) => { setQuery(event.target.value); setPage(1) }} placeholder="Topic, source ID, DOI, PMID…" style={{ minHeight: 44 }} />
        <label htmlFor="evidence-hold">Review hold</label>
        <select id="evidence-hold" value={hold} onChange={(event) => { setHold(event.target.value as HoldFilter); setPage(1) }} style={{ minHeight: 44 }}>
          <option value="all">All records</option>
          <option value="held">Held or unresolved only</option>
          <option value="unheld">No indexed hold (still draft)</option>
        </select>
        {mode === 'nutrients' && <>
          <label htmlFor="nutrient-stage">Life stage</label>
          <select id="nutrient-stage" value={lifeStage} onChange={(event) => { setLifeStage(event.target.value); setPage(1) }} style={{ minHeight: 44 }}>
            <option value="all">All life stages</option>
            {lifeStages.map((stage) => <option value={stage} key={stage}>{stage}</option>)}
          </select>
        </>}
        <button className="btn btn-ghost" type="button" onClick={() => { setQuery(''); setHold('all'); setLifeStage('all'); setPage(1) }}>Clear filters</button>
        <PageControls page={current.page} pages={current.pages} first={current.first} last={current.last} total={current.total} setPage={setPage} />
      </section>
      {current.total === 0 && <p role="status">No matching records. Try clearing or changing the filters.</p>}

      {mode === 'outcomes' ? (
        <section className="stack" aria-label="Scientific outcome records">
          {outcomePage.rows.map((row) => (
            <article className="panel stack" key={row.id}>
              <div className={`section-label ${row.held ? 'warn' : ''}`.trim()}>{row.displayNote}</div>
              <h2 style={{ margin: 0, fontSize: '1.05rem' }}>{row.outcome}</h2>
              <p className="muted">{row.id} · Source {row.source_id}</p>
              {row.held ? <p>Numerical results withheld pending review.</p> : <>
                <p>Measure: {displayValue(row.measure)} · Estimate: {displayValue(row.estimate)}</p>
                <p>Reported bounds: {displayValue(row.lower)} to {displayValue(row.upper)} · Interval label (as recorded): {displayValue(row.interval)}</p>
                {row.record?.comparison != null && <p>Comparison: {displayValue(row.record.comparison)}</p>}
                {row.record?.timepoint != null && <p>Time point: {displayValue(row.record.timepoint)}</p>}
                <p className="muted">No pooled interpretation or individual risk estimate. Interval labels are preserved as reported, not assumed to be confidence intervals.</p>
              </>}
              <Provenance sourceId={row.source_id} origin={row.origin} blob={row.origin_blob_sha} index={row.index} locator={row.held ? undefined : row.record?.locator ?? row.record?.source_locator} />
            </article>
          ))}
        </section>
      ) : (
        <section className="stack" aria-label="Nutrient reference records">
          <p className="muted">These are reference records, not supplement prescriptions. Upper limits are not targets. Scope, units and life stage matter; missing limits do not establish safety.</p>
          {nutrientPage.rows.map((row) => (
            <article className="panel stack" key={row.id}>
              <div className={`section-label ${row.held || row.isDoseClaim ? 'warn' : ''}`.trim()}>{row.displayNote}</div>
              <h2 style={{ margin: 0, fontSize: '1.05rem' }}>{row.nutrient} · {displayValue(row.life_stage)}</h2>
              <p className="muted">{row.id} · Age: {displayValue(row.age)}</p>
              {row.held || row.isDoseClaim ? <p>Numerical values withheld pending review.</p> : <>
                <p>Reference type: {displayValue(row.intake_type)} · Intake: {displayValue(row.intake)} {row.intake != null ? row.unit : ''}</p>
                <p>Upper limit: {displayValue(row.upper_limit)} {row.upper_limit != null ? displayValue(row.upper_limit_unit) : ''}</p>
                <p>Upper-limit scope: {displayValue(row.upper_limit_scope)}</p>
              </>}
              <Provenance sourceId={row.source_id} origin={row.origin} blob={row.origin_blob_sha} index={row.index} locator={row.held || row.isDoseClaim ? undefined : row.record?.locator} />
            </article>
          ))}
        </section>
      )}
      {current.pages > 1 && <button className="btn btn-ghost" type="button" onClick={() => { document.getElementById('evidence-filters')?.scrollIntoView({ block: 'start' }) }}>Back to filters and page controls</button>}
      <Link className="btn btn-ghost" to="/library">Back to library</Link>
    </div>
  )
}
