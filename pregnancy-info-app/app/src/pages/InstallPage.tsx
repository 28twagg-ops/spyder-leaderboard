import { DraftBanner } from '../components/DraftBanner'

export function InstallPage() {
  return (
    <div className="stack-lg">
      <header className="stack">
        <div className="eyebrow">iPhone Home Screen</div>
        <h1 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '1.8rem' }}>
          Add Everwell
        </h1>
        <p className="lede" style={{ margin: 0 }}>
          Installable PWA path. Local/dev builds are not a finished production install until
          HTTPS + real-device checks pass.
        </p>
      </header>
      <DraftBanner />
      <section className="panel install-help stack">
        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>iPhone Safari</h2>
        <ol>
          <li>Open Everwell in Safari (not only an in-app browser).</li>
          <li>Tap Share.</li>
          <li>Tap Add to Home Screen.</li>
          <li>Confirm the name Everwell, then Add.</li>
          <li>Launch from the Home Screen icon for standalone mode.</li>
        </ol>
      </section>
      <section className="panel install-help stack">
        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Android / desktop</h2>
        <ol>
          <li>Use the browser install prompt when offered, or browser menu → Install app.</li>
          <li>Desktop browsers remain a supported responsive fallback.</li>
        </ol>
      </section>
    </div>
  )
}
