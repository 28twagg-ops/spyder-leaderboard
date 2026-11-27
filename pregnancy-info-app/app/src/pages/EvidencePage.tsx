import { Link } from 'react-router-dom'
import { DraftBanner } from '../components/DraftBanner'
import { OfflineBanner } from '../components/OfflineBanner'
import {
  browseNutrients,
  browseOutcomes,
  evidenceStats,
} from '../data/evidenceCatalog'

export function EvidencePage() {
  const stats = evidenceStats()
  const outcomeRows = browseOutcomes(25)
  const nutrientRows = browseNutrients(25)

  return (
    <div className="stack-lg">
      <header className="stack">
        <div className="eyebrow">Evidence browser</div>
        <h1 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '1.8rem' }}>
          Outcomes & nutrients
        </h1>
        <p className="lede" style={{ margin: 0 }}>
          Read-only stage-10 rows. Runtime charting and dosing advice stay blocked pending clinical
          review.
        </p>
      </header>

      <DraftBanner status="research_only" />
      <OfflineBanner />

      <section className="panel stack">
        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Inventory</h2>
        <ul className="list-clean">
          <li>Outcome rows: {stats.outcomes}</li>
          <li>Nutrient rows: {stats.nutrients}</li>
          <li>Held outcomes: {stats.heldOutcomes}</li>
          <li>Held nutrients: {stats.heldNutrients}</li>
          <li>Flagged chart_eligible in files: {stats.chartEligibleFlagged}</li>
          <li>Runtime charts enabled: {String(stats.chartsEnabledAtRuntime)}</li>
        </ul>
      </section>

      <section className="panel stack" aria-labelledby="outcomes-h">
        <h2 id="outcomes-h" style={{ margin: 0, fontSize: '1.1rem' }}>
          Outcome sample
        </h2>
        <ul className="list-clean">
          {outcomeRows.map((row) => (
            <li key={row.id}>
              <strong>
                {row.id}: {row.outcome}
              </strong>
              <div className="muted" style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>
                {row.measure ?? 'measure?'} {row.estimate ?? '—'} (
                {row.lower ?? '—'}–{row.upper ?? '—'}) · source {row.source_id}
              </div>
              <div className={`badge ${row.held ? 'warn' : ''}`.trim()}>{row.displayNote}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel stack" aria-labelledby="nutrients-h">
        <h2 id="nutrients-h" style={{ margin: 0, fontSize: '1.1rem' }}>
          Nutrient reference sample
        </h2>
        <p className="muted" style={{ margin: 0 }}>
          Reference intakes are not personal prescriptions.
        </p>
        <ul className="list-clean">
          {nutrientRows.map((row) => (
            <li key={row.id}>
              <strong>
                {row.nutrient} · {row.life_stage} {row.age}
              </strong>
              <div className="muted" style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>
                {row.intake_type}: {row.intake ?? '—'} {row.unit} · source {row.source_id}
              </div>
              <div className={`badge ${row.held || row.isDoseClaim ? 'warn' : ''}`.trim()}>
                {row.displayNote}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Link className="btn btn-ghost" to="/library">
        Back to library
      </Link>
    </div>
  )
}
