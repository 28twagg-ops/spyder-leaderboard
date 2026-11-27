import { Link } from 'react-router-dom'
import { articlesByDomain } from '../data/researchCatalog'

const REGIONS = [
  { id: 'nutrition', label: 'Nutrition', cx: 120, cy: 48, domain: 'nutrition' },
  { id: 'skin', label: 'Skin', cx: 120, cy: 92, domain: 'skin' },
  { id: 'breast', label: 'Breast', cx: 96, cy: 128, domain: 'feeding' },
  { id: 'abdomen', label: 'Abdomen', cx: 120, cy: 168, domain: 'recovery' },
  { id: 'pelvic', label: 'Pelvic floor', cx: 120, cy: 208, domain: 'recovery' },
  { id: 'child', label: 'Child health', cx: 176, cy: 240, domain: 'infant' },
] as const

export function BodyMap() {
  return (
    <div className="stack">
      <figure className="panel" style={{ margin: 0 }}>
        <svg
          viewBox="0 0 240 280"
          role="img"
          aria-labelledby="bodymap-title bodymap-desc"
          style={{ width: '100%', maxWidth: 360, margin: '0 auto' }}
        >
          <title id="bodymap-title">Accessible topic body map</title>
          <desc id="bodymap-desc">
            Stylized silhouette with selectable educational topic regions. Equivalent list follows.
          </desc>
          <ellipse cx="120" cy="36" rx="22" ry="26" fill="var(--accent)" opacity="0.28" />
          <path
            d="M78 70 C70 120 74 170 84 220 L100 250 L140 250 L156 220 C166 170 170 120 162 70 Z"
            fill="var(--bg-soft)"
            stroke="var(--accent)"
            strokeWidth="2"
          />
          {REGIONS.map((region) => (
            <a key={region.id} href={`#map-${region.id}`}>
              <circle cx={region.cx} cy={region.cy} r="12" fill="var(--accent)" opacity="0.9" />
              <text
                x={region.cx + 16}
                y={region.cy + 4}
                fill="var(--ink)"
                fontSize="11"
                fontFamily="Manrope, sans-serif"
              >
                {region.label}
              </text>
            </a>
          ))}
        </svg>
        <figcaption className="muted" style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
          Decorative map only — use the list below for the same destinations.
        </figcaption>
      </figure>

      <div className="stack" aria-label="Body map topic list">
        {REGIONS.map((region) => {
          const articles = articlesByDomain(region.domain).slice(0, 3)
          return (
            <section key={region.id} id={`map-${region.id}`} className="panel stack">
              <h3 style={{ margin: 0, fontSize: '1.05rem' }}>{region.label}</h3>
              <ul className="list-clean">
                {articles.map((article) => (
                  <li key={article.id}>
                    <Link to={`/research/${article.id}`}>{article.title}</Link>
                  </li>
                ))}
                {articles.length === 0 && (
                  <li className="muted">No staged articles in this domain yet.</li>
                )}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
