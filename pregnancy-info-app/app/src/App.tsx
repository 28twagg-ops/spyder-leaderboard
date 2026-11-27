import { Navigate, Route, Routes } from 'react-router-dom'
import { BottomNav } from './components/BottomNav'
import { ExplorePage } from './pages/ExplorePage'
import { InstallPage } from './pages/InstallPage'
import { LibraryPage } from './pages/LibraryPage'
import { ResearchPage } from './pages/ResearchPage'
import { TimelinePage } from './pages/TimelinePage'
import { TodayPage } from './pages/TodayPage'

export default function App() {
  return (
    <div className="app-shell">
      <a className="visually-hidden" href="#main">
        Skip to content
      </a>
      <main id="main">
        <Routes>
          <Route path="/" element={<TodayPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/:topicId" element={<ResearchPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/install" element={<InstallPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  )
}
