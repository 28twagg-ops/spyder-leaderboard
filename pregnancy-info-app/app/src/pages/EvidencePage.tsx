import { useViewState } from '../hooks/useViewMemory'
import { safeVisualUrl } from '../data/visualCatalog'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ScreenHeading, FeatureCard } from '../components/ReadingUI'
import { DraftBanner } from '../components/DraftBanner'
import {
  evidenceStats, filterNutrients, filterOutcomes, getEvidenceSource, nutrients, paginate,
  type HoldFilter,
} from '../data/evidenceCatalog'

const lifeStages = [...new Set(nutrients.map((row) => row.life_stage).filter((stage): stage is string => Boolean(stage)))].sort()
const pageSize = 8

function displayValue(value: unknown): string {
  if (typeof value === 'number' && Number.isFinite(value)) return String(value)
  if (typeof value === 'string' && value.trim()) return value
  return 'Not recorded'
}

function Provenance({ sourceId, origin, blob, index, locator }: {
  sourceId: string; origin?: string; blob?: string; index?: number; locator?: unknown
}) {
  const source = getEvidenceSource(sourceId)
  const safeUrl = safeVisualUrl(source?.url)
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
  const {collection}=useParams()
  const navigate=useNavigate()
  const mode=collection==='nutrients'?'nutrients':'outcomes'
  const [query, setQuery] = useViewState('evidence.'+mode+'.query','')
  const [hold, setHold] = useViewState<HoldFilter>('evidence.'+mode+'.hold','all')
  const [lifeStage, setLifeStage] = useViewState('evidence.'+mode+'.lifeStage','all')
  const [page, setPage] = useViewState('evidence.'+mode+'.page',1)
  const outcomePage = paginate(filterOutcomes({ query, hold }), page, pageSize)
  const nutrientPage = paginate(filterNutrients({ query, hold, lifeStage }), page, pageSize)
  const current = mode === 'outcomes' ? outcomePage : nutrientPage

  if(collection&&collection!=='outcomes'&&collection!=='nutrients')return <div className="stack-lg"><ScreenHeading title="Collection not found" back="/evidence" backLabel="Research & sources"/><p>Choose a research collection.</p></div>
  if(!collection) return <div className="stack-lg"><ScreenHeading title="Research & sources" subtitle="Explore the science behind Everwell." back="/explore" backLabel="Explore"/><FeatureCard to="/evidence/outcomes" title="Scientific outcomes" subtitle={`${stats.outcomes} research records · ${stats.heldOutcomes} held`} icon="chart"/><FeatureCard to="/evidence/nutrients" title="Nutrition references" subtitle={`${stats.nutrients} reference records · ${stats.heldNutrients} held`} icon="leaf"/><section className="panel stack"><h2 className="section-title">Understanding the evidence</h2><p className="muted">Records are not independent study counts. Held values are hidden. Other records are unverified drafts, not individual risk estimates or supplement prescriptions.</p><p className="muted">Original sources and funding information are available within each record.</p></section><DraftBanner status="research_only"/></div>
  return (
    <div className="stack-lg">
      <ScreenHeading title={mode==='outcomes'?'Scientific outcomes':'Nutrition references'} subtitle="Browse draft records and their original sources." back="/evidence" backLabel="Research & sources"/>
      <DraftBanner status="research_only" />
      <details className="panel disclosure">
        <summary>Research inventory</summary>
        <ul className="list-clean">
          <li>{stats.outcomes} outcome records · {stats.heldOutcomes} held</li>
          <li>{stats.nutrients} nutrient reference records · {stats.heldNutrients} held</li>
          <li>{stats.sources} source index records (not unique independent studies)</li>
        </ul>
        <p className="muted">Held values are hidden from this interface. Unheld does not mean verified, clinically safe or approved.</p>
      </details>
      <p className="muted" style={{margin:0,fontSize:'.8rem'}}>Held values are hidden. Unheld records remain unverified drafts.</p>
      <section className="panel stack" aria-labelledby="evidence-filters">
        <h2 id="evidence-filters" style={{ margin: 0, fontSize: '1.1rem' }}>Browse records</h2>
        <label htmlFor="evidence-kind">Record type</label>
        <select id="evidence-kind" value={mode} onChange={(event) => { navigate('/evidence/'+event.target.value) }} style={{ minHeight: 44 }}>
          <option value="outcomes">Scientific outcomes</option>
          <option value="nutrients">Nutrient reference intakes</option>
        </select>
        <label htmlFor="evidence-query">Search records or sources</label>
        <input id="evidence-query" type="search" autoComplete="off" maxLength={200} value={query} onChange={(event) => { setQuery(event.target.value); setPage(1) }} placeholder="Topic, source ID, DOI, PMID…" style={{ minHeight: 44 }} />
        <details className="disclosure filter-disclosure"><summary>More filters</summary>
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
        </details>
        <PageControls page={current.page} pages={current.pages} first={current.first} last={current.last} total={current.total} setPage={setPage} />
      </section>
      {current.total === 0 && <p role="status">No matching records. Try clearing or changing the filters.</p>}

      {mode === 'outcomes' ? (
        <section className="surface-list evidence-list" aria-label="Scientific outcome records">
          {outcomePage.rows.map((row) => (
            <details className="disclosure evidence-record" key={row.id}><summary><span>
              <div className={`section-label ${row.held ? 'warn' : ''}`.trim()}>{row.displayNote}</div>
              <strong>{row.outcome}</strong><small>{row.id} · Source {row.source_id}</small></span></summary><div className="stack record-detail">
              {row.held ? <p>Numerical results withheld pending review.</p> : <>
                <p>Measure: {displayValue(row.measure)} · Estimate: {displayValue(row.estimate)}</p>
                <p>Reported bounds: {displayValue(row.lower)} to {displayValue(row.upper)} · Interval label (as recorded): {displayValue(row.interval)}</p>
                {row.record?.comparison != null && <p>Comparison: {displayValue(row.record.comparison)}</p>}
                {row.record?.timepoint != null && <p>Time point: {displayValue(row.record.timepoint)}</p>}
                <p className="muted">No pooled interpretation or individual risk estimate. Interval labels are preserved as reported, not assumed to be confidence intervals.</p>
              </>}
              <Provenance sourceId={row.source_id} origin={row.origin} blob={row.origin_blob_sha} index={row.index} locator={row.held ? undefined : row.record?.locator ?? row.record?.source_locator} />
              </div>
            </details>
          ))}
        </section>
      ) : (
        <section className="surface-list evidence-list" aria-label="Nutrient reference records">
          <p className="muted">These are reference records, not supplement prescriptions. Upper limits are not targets. Scope, units and life stage matter; missing limits do not establish safety.</p>
          {nutrientPage.rows.map((row) => (
            <details className="disclosure evidence-record" key={row.id}><summary><span>
              <div className={`section-label ${row.held || row.isDoseClaim ? 'warn' : ''}`.trim()}>{row.displayNote}</div>
              <strong>{row.nutrient} · {displayValue(row.life_stage)}</strong><small>{row.id} · Age: {displayValue(row.age)}</small></span></summary><div className="stack record-detail">
              {row.held || row.isDoseClaim ? <p>Numerical values withheld pending review.</p> : <>
                <p>Reference type: {displayValue(row.intake_type)} · Intake: {displayValue(row.intake)} {row.intake != null ? row.unit : ''}</p>
                <p>Upper limit: {displayValue(row.upper_limit)} {row.upper_limit != null ? displayValue(row.upper_limit_unit) : ''}</p>
                <p>Upper-limit scope: {displayValue(row.upper_limit_scope)}</p>
              </>}
              <Provenance sourceId={row.source_id} origin={row.origin} blob={row.origin_blob_sha} index={row.index} locator={row.held || row.isDoseClaim ? undefined : row.record?.locator} />
              </div>
            </details>
          ))}
        </section>
      )}
      {current.pages > 1 && <button className="btn btn-ghost" type="button" onClick={() => { document.getElementById('evidence-filters')?.scrollIntoView({ block: 'start' }) }}>Back to filters and page controls</button>}
      <Link className="btn btn-ghost" to="/library">Back to library</Link>
    </div>
  )
}
