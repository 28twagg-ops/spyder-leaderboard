import { lazy, Suspense, useEffect, useRef, useState, useLayoutEffect } from 'react'
import { Link, Navigate, Route, Routes, useLocation, useNavigationType } from 'react-router-dom'
import { LocalPrefsProvider } from './hooks/useLocalPrefs'
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

function RoutePosition() {
  const { pathname, hash, key } = useLocation()
  const action = useNavigationType()
  const previous = useRef(pathname)
  const positions = useRef(new Map<string,number>())
  useLayoutEffect(()=>{const old=positions.current.get(key); if(action==='POP'&&old!=null&&!hash) document.documentElement.scrollTop=old; return ()=>{positions.current.set(key,document.documentElement.scrollTop)}},[key,action,hash])
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target instanceof HTMLDetailsElement) target.open = true
      let ancestor = target?.parentElement
      while (ancestor) { if (ancestor instanceof HTMLDetailsElement) ancestor.open = true; ancestor = ancestor.parentElement }
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
  const [browse,setBrowse]=useState<BrowseState>(emptyBrowse)
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
            <Route path="/explore/:domain" element={<ExplorePage />} />
            <Route path="/research" element={<Navigate to="/library" replace />} />
            <Route path="/research/:topicId" element={<ResearchPage />} />
            <Route path="/evidence" element={<EvidencePage />} />
            <Route path="/library" element={<LibraryPage browse={browse} setBrowse={setBrowse}/>} />
            <Route path="/saved" element={<LibraryPage browse={browse} setBrowse={setBrowse}/>} />
            <Route path="/settings" element={<SettingsPage onClear={()=>setBrowse(emptyBrowse)}/>} />
            <Route path="/urgent" element={<UrgentPage/>} />
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
