import { ScreenHeading } from '../components/ReadingUI'
export function InstallPage() {
  return (
    <div className="stack-lg">
      <ScreenHeading title="Add Everwell" subtitle="Install the educational preview on your device." back="/settings" backLabel="Settings"/>

      <section className="panel install-help stack">
        <h2 className="section-title">iPhone Safari</h2>
        <ol>
          <li>Open Everwell in Safari (not only an in-app browser).</li>
          <li>Tap Share.</li>
          <li>Tap Add to Home Screen.</li>
          <li>Confirm the name Everwell, then Add.</li>
          <li>Launch from the Home Screen icon for standalone mode.</li>
        </ol><p className="small-copy muted">Use the permanent GitHub Pages address: https://28twagg-ops.github.io/spyder-leaderboard/everwell/ . An icon installed from an older Vercel address cannot migrate automatically. Keep or export saved preferences before replacing that icon; removing an installed web app can clear local data.</p>
      </section>
      <section className="panel install-help stack">
        <h2 className="section-title">Automatic updates</h2>
        <p>Install from the stable preview address, not an individual build address. Everwell checks for a newer deployed version when opened, when you return to it, and when your connection comes back. A ready update refreshes the app without deleting your saved preferences. Offline, the last installed version remains available.</p>
        <p className="small-copy muted">Open Settings → App updates to compare the installed build with the latest published build, or tap Check for updates. Close any open pregnancy-date editor before updating. If offline or a deployment fails, the last working version remains. A different hosting address requires a one-time reinstall; ordinary updates do not.</p>
      </section>
      <section className="panel install-help stack">
        <h2 className="section-title">Android / desktop</h2>
        <ol>
          <li>Use the browser install prompt when offered, or browser menu → Install app.</li>
          <li>Desktop browsers remain a supported responsive fallback.</li>
        </ol>
      </section>
    </div>
  )
}
