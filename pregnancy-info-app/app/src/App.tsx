import { lazy, Suspense, useEffect, useRef } from 'react'
import { Link, Navigate, Route, Routes, useLocation, useNavigationType } from 'react-router-dom'
import { LocalPrefsProvider } from './hooks/useLocalPrefs'
import { BottomNav } from './components/BottomNav'
import { ExplorePage } from './pages/ExplorePage'
import { InstallPage } from './pages/InstallPage'
import { LibraryPage } from './pages/LibraryPage'
import { ResearchPage } from './pages/ResearchPage'
import { TimelinePage } from './pages/TimelinePage'
import { TodayPage } from './pages/TodayPage'
const VisualLibraryPage = lazy(async () => {
  const mod = await import('./pages/VisualLibraryPage')
  return { default: mod.VisualLibraryPage }
})

const EvidencePage = lazy(async () => {
  const mod = await import('./pages/EvidencePage')
  return { default: mod.EvidencePage }
})

function RoutePosition() {
  const { pathname, hash, key } = useLocation()
  const action = useNavigationType()
  const previous = useRef(pathname)
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target instanceof HTMLDetailsElement) target.open = true
      target?.scrollIntoView?.()
      if (hash === '#main') target?.focus()
    } else if (previous.current !== pathname && action !== 'POP') {
      document.documentElement.scrollTop = 0
      document.getElementById('main')?.focus({ preventScroll: true })
    }
    previous.current = pathname
  }, [pathname, hash, key, action])
  return null
}

export default function App() {
  return (
    <LocalPrefsProvider>
    <div className="app-shell">
      <Link className="visually-hidden" to="#main">
        Skip to content
      </Link>
      <main id="main" tabIndex={-1}>
        <Suspense fallback={<p className="muted">Loading…</p>}>
          <RoutePosition />
          <Routes>
            <Route path="/" element={<TodayPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/research" element={<Navigate to="/library" replace />} />
            <Route path="/research/:topicId" element={<ResearchPage />} />
            <Route path="/evidence" element={<EvidencePage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/visuals" element={<VisualLibraryPage />} />
            <Route path="/install" element={<InstallPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <BottomNav />
    </div>
    </LocalPrefsProvider>
  )
}
