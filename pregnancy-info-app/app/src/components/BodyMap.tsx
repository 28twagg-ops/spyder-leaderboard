import { Link } from 'react-router-dom'
import { getArticle } from '../data/researchCatalog'

const regions = [
  { id: 'skin', label: 'Skin', articleIds: ['EV-ART-018', 'EV-ART-031'], x: 108, y: 55, labelX: 14, labelY: 48 },
  { id: 'breast', label: 'Breast & feeding', articleIds: ['EV-ART-019', 'EV-ART-032', 'EV-ART-034'], x: 155, y: 91, labelX: 206, labelY: 85 },
  { id: 'core', label: 'Core & abdomen', articleIds: ['EV-ART-027'], x: 160, y: 145, labelX: 206, labelY: 143 },
  { id: 'pelvic', label: 'Pelvic floor', articleIds: ['EV-ART-020', 'EV-ART-028'], x: 136, y: 186, labelX: 14, labelY: 183 },
] as const

export function BodyMap() {
  return (
    <section className="stack" aria-labelledby="body-map-heading">
      <div>
        <h2 id="body-map-heading" className="section-title">Explore by body area</h2>
        <p className="muted">A stylized topic navigator, not an anatomical diagram or symptom checker.</p>
      </div>
      <div className="body-compact"><figure className="panel body-map-figure">
        <svg viewBox="0 0 320 265" aria-hidden="true" focusable="false">
          <g stroke="var(--accent)" fill="var(--bg-soft)" strokeWidth="1.6" strokeLinejoin="round">
            <ellipse cx="160" cy="29" rx="22" ry="25" />
            <path d="M145 52 L140 60 Q118 62 109 79 Q96 107 83 164 L96 170 L123 111 Q120 139 129 157 Q114 181 122 205 L143 249 L155 249 L160 208 L165 249 L177 249 L198 205 Q206 181 191 157 Q200 139 197 111 L224 170 L237 164 Q224 107 211 79 Q202 62 180 60 L175 52" />
          </g>
          {regions.map((region, i) => (
            <g key={region.id}>
              <path d={`M ${region.x} ${region.y} L ${region.labelX < 100 ? region.labelX + 54 : region.labelX - 6} ${region.labelY + 10}`} stroke="var(--accent)" strokeWidth="1.2" fill="none" />
              <circle cx={region.x} cy={region.y} r="11" fill="var(--button-surface)" />
              <text x={region.x} y={region.y + 4} textAnchor="middle" fontSize="11" fill="var(--map-marker-ink)" fontWeight="700">{i + 1}</text>
              <text x={region.labelX} y={region.labelY} fontSize="10.5" fill="var(--ink)">{region.label}</text>
            </g>
          ))}
        </svg>
        <figcaption>Illustrative topic positions only. Use the accessible links below to open the corresponding research topics.</figcaption>
      </figure>
      <div className="region-grid">
        {regions.map((region, i) => (
          <details className="panel disclosure" key={region.id}><summary>{i + 1}. {region.label}</summary>
            {region.articleIds.map((id) => {
              const article = getArticle(id)
              return article ? <Link key={id} className="topic-link" to={`/research/${id}`}>{article.title}</Link> : null
            })}
          </details>
        ))}
      </div></div>
      <div className="panel stack">
        <h3 className="section-title">Beyond anatomy</h3>
        <Link className="topic-link" to="/research/EV-ART-005">Nutrition and supplements</Link>
        <Link className="topic-link" to="/research/EV-ART-014">Fetal development</Link>
        <Link className="topic-link" to="/timeline">Child development and family timelines</Link>
        <Link className="topic-link" to="/visuals">Original anatomy and visual reference library</Link>
      </div>
    </section>
  )
}
