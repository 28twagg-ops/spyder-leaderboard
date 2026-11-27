import { urgentSigns } from '../data/syntheticContent'

export function UrgentSigns() {
  return (
    <section className="panel stack" aria-labelledby="urgent-heading">
      <div>
        <div className="section-label danger">Urgent signs</div>
        <h2 id="urgent-heading" style={{ margin: '0.55rem 0 0.25rem', fontSize: '1.15rem' }}>
          Get help right away for these
        </h2>
        <p className="muted" style={{ margin: 0, fontSize: '0.92rem' }}>
          This is not a full list. The app cannot tell how serious an emergency is.
        </p>
      </div>
      <ul className="list-clean">
        {urgentSigns.map((sign) => (
          <li key={sign.id}>
            <strong>{sign.title}</strong>
            <div className="muted" style={{ marginTop: '0.25rem', fontSize: '0.9rem' }}>
              {sign.detail}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
