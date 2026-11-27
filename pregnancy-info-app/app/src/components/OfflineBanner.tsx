import { useEffect, useState } from 'react'
import { syncMeta } from '../data/researchCatalog'

export function OfflineBanner() {
  const [online, setOnline] = useState(
    typeof navigator === 'undefined' ? true : navigator.onLine,
  )

  useEffect(() => {
    const on = () => setOnline(true)
    const off = () => setOnline(false)
    window.addEventListener('online', on)
    window.addEventListener('offline', off)
    return () => {
      window.removeEventListener('online', on)
      window.removeEventListener('offline', off)
    }
  }, [])

  return (
    <aside className="panel" role="status" aria-live="polite">
      <div className={`section-label ${online ? '' : 'warn'}`.trim()}>
        {online ? 'Online' : 'Offline'}
      </div>
      <p className="muted" style={{ margin: '0.55rem 0 0', fontSize: '0.9rem' }}>
        Research package generated {new Date(syncMeta.synced_at).toLocaleString()}. Packaging time is not an evidence review date. Content remains a
        research draft snapshot — not live clinical guidance.
        {!online &&
          ' Cached pages may still open; do not treat offline copies as updated medical advice. Urgent care still requires real-world emergency services.'}
      </p>
    </aside>
  )
}
