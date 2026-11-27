import { APP_DISCLAIMER } from '../data/syntheticContent'
import { labelForStatus, type PublicationStatus } from '../data/publicationGate'

export function DraftBanner({
  status = 'synthetic_demo',
}: {
  status?: PublicationStatus
}) {
  return (
    <aside className="panel" role="note" aria-label="Content status">
      <div className="section-label warn">{labelForStatus(status)}</div>
      <p className="muted" style={{ margin: '0.65rem 0 0', fontSize: '0.92rem' }}>
        {APP_DISCLAIMER}
      </p>
    </aside>
  )
}
