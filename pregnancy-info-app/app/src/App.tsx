import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
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

export default function App() {
  return (
    <LocalPrefsProvider>
    <div className="app-shell">
      <a className="visually-hidden" href="#main">
        Skip to content
      </a>
      <main id="main">
        <Suspense fallback={<p className="muted">Loading…</p>}>
          <Routes>
            <Route path="/" element={<TodayPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/research" element={<ResearchPage />} />
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
