import { THEME_OPTIONS, type ThemeId } from '../theme/themes'

export function ThemePicker({
  value,
  onChange,
}: {
  value: ThemeId
  onChange: (theme: ThemeId) => void
}) {
  return (
    <section className="panel stack" aria-labelledby="theme-heading">
      <div>
        <div className="section-label">Look & feel</div>
        <h2 id="theme-heading" style={{ margin: '0.55rem 0 0.25rem', fontSize: '1.15rem' }}>
          Choose a calmer theme
        </h2>
        <p className="muted" style={{ margin: 0, fontSize: '0.92rem' }}>
          Four inviting directions — saved on this device only. Morning Stone is the default; Soft Fog remains available.
        </p>
      </div>
      <div className="theme-grid" role="group" aria-label="Theme options">
        {THEME_OPTIONS.map((theme) => (
          <button
            key={theme.id}
            type="button"
            className="theme-option"
            aria-pressed={value === theme.id}
            onClick={() => onChange(theme.id)}
          >
            <div className="theme-swatches" aria-hidden="true">
              {theme.swatches.map((color) => (
                <span key={color} style={{ background: color }} />
              ))}
            </div>
            <strong>{theme.name}</strong>
            <div className="muted" style={{ marginTop: '0.25rem', fontSize: '0.88rem' }}>
              {theme.mood}
            </div>
            <div className="muted" style={{ marginTop: '0.2rem', fontSize: '0.82rem' }}>
              {theme.bestFor}
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
