import { lazy, Suspense, useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { LocalPrefsProvider, useLocalPrefs } from './hooks/useLocalPrefs'
import { ViewMemoryProvider, useClearViewMemory } from './hooks/useViewMemory'
import { NavigationMemoryProvider, RoutePosition, useNavigationMemory } from './hooks/NavigationMemory'
import { ScreenHeading } from './components/ReadingUI'
import { BottomNav } from './components/BottomNav'
import { ExplorePage } from './pages/ExplorePage'
import { InstallPage } from './pages/InstallPage'
import { LibraryPage, emptyBrowse, type BrowseState } from './pages/LibraryPage'
import { SettingsPage } from './pages/SettingsPage'
import { UrgentPage } from './pages/UrgentPage'
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

function AppShell() {
  const [browse,setBrowse]=useState<BrowseState>(emptyBrowse)
  const clearViews=useClearViewMemory()
  const navigation=useNavigationMemory()
  const {prefs}=useLocalPrefs()
  const clearTransient=()=>{setBrowse(emptyBrowse);clearViews();navigation?.clearPositions()}
  return (
    <div className="app-shell">
      <Link className="visually-hidden" to="#main">
        Skip to content
      </Link>
      <main id="main" tabIndex={-1}>
        <Suspense fallback={<p className="muted">Loading…</p>}>
          <RoutePosition />
          <Routes>
            <Route path="/" element={<TodayPage />} />
            <Route path="/timeline" element={<TimelinePage selectedPhaseId={prefs.selectedPhaseId} />} />
            <Route path="/timeline/:track" element={<TimelinePage selectedPhaseId={prefs.selectedPhaseId} />} />
            <Route path="/timeline/:track/:phaseId" element={<TimelinePage selectedPhaseId={prefs.selectedPhaseId} />} />
            <Route path="/timeline/week/:weekNumber" element={<TimelinePage selectedPhaseId={prefs.selectedPhaseId} />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/explore/:domain" element={<ExplorePage />} />
            <Route path="/research" element={<Navigate to="/library" replace />} />
            <Route path="/research/:topicId" element={<ResearchPage />} />
            <Route path="/evidence" element={<EvidencePage />} />
            <Route path="/evidence/:collection" element={<EvidencePage />} />
            <Route path="/library" element={<LibraryPage browse={browse} setBrowse={setBrowse}/>} />
            <Route path="/saved" element={<LibraryPage browse={browse} setBrowse={setBrowse}/>} />
            <Route path="/settings" element={<SettingsPage onClear={clearTransient}/>} />
            <Route path="/urgent" element={<UrgentPage/>} />
            <Route path="/visuals" element={<VisualLibraryPage />} />
            <Route path="/visuals/:visualId" element={<VisualLibraryPage />} />
            <Route path="/install" element={<InstallPage />} />
            <Route path="*" element={<div className="stack-lg"><ScreenHeading title="Page not found" subtitle="This destination is unavailable."/><Link className="btn btn-ghost" to="/">Return home</Link><Link className="btn btn-ghost" to="/library">Search topics</Link></div>} />
          </Routes>
        </Suspense>
      </main>
      <BottomNav />
    </div>
  )
}
export default function App(){return <LocalPrefsProvider><ViewMemoryProvider><NavigationMemoryProvider><AppShell/></NavigationMemoryProvider></ViewMemoryProvider></LocalPrefsProvider>}
