import { ScreenHeading } from '../components/ReadingUI'
import { DraftBanner } from '../components/DraftBanner'

export function InstallPage() {
  return (
    <div className="stack-lg">
      <ScreenHeading title="Add Everwell" subtitle="Install the private preview on your device. Real-device checks remain pending." back="/settings" backLabel="Settings"/>
      <DraftBanner status="research_only" />
      <section className="panel install-help stack">
        <h2 className="section-title">iPhone Safari</h2>
        <ol>
          <li>Open Everwell in Safari (not only an in-app browser).</li>
          <li>Tap Share.</li>
          <li>Tap Add to Home Screen.</li>
          <li>Confirm the name Everwell, then Add.</li>
          <li>Launch from the Home Screen icon for standalone mode.</li>
        </ol>
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
