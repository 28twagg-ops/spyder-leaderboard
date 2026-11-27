import { ScreenHeading } from '../components/ReadingUI'
export function InstallPage() {
  return (
    <div className="stack-lg">
      <ScreenHeading title="Add Everwell" subtitle="Install the private preview on your device. Real-device checks remain pending." back="/settings" backLabel="Settings"/>

      <section className="panel install-help stack">
        <h2 className="section-title">iPhone Safari</h2>
        <ol>
          <li>Open Everwell in Safari (not only an in-app browser).</li>
          <li>Tap Share.</li>
          <li>Tap Add to Home Screen.</li>
          <li>Confirm the name Everwell, then Add.</li>
          <li>Launch from the Home Screen icon for standalone mode.</li>
        </ol><p className="small-copy muted">If your existing Home Screen icon does not update, first note or export your saved preferences, then remove and re-add Everwell. Removing an installed web app can clear its local data.</p>
      </section>
      <section className="panel install-help stack">
        <h2 className="section-title">Automatic updates</h2>
        <p>Install from the stable private preview address, not an individual build address. Everwell checks for a newer deployed version when opened, when you return to it, and when your connection comes back. A ready update refreshes the app without deleting your saved preferences. Offline, the last installed version remains available.</p>
        <p className="small-copy muted">An open pregnancy-date editor or active text input may delay the refresh. Browser restrictions or a failed deployment may also delay updates. The Home Screen icon can still require re-adding on iPhone.</p>
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
