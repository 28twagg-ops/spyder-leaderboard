import { lazy, Suspense, useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { useCalendarDay } from './hooks/useCalendarDay'
import { gestationalWeeks } from './data/researchCatalog'
import { pregnancyPosition } from './data/pregnancyCalendar'
import { LocalPrefsProvider, useLocalPrefs } from './hooks/useLocalPrefs'
import { useClearViewMemory } from './hooks/useViewMemory'
import { ViewMemoryProvider } from './hooks/ViewMemoryProvider'
import { NavigationMemoryProvider } from './hooks/NavigationMemory'
import { useNavigationMemory } from './hooks/navigationContext'
import { RoutePosition } from './components/RoutePosition'
import { ScreenHeading } from './components/ReadingUI'
import { BottomNav } from './components/BottomNav'
import { ExplorePage } from './pages/ExplorePage'
import { InstallPage } from './pages/InstallPage'
import { LibraryPage } from './pages/LibraryPage'
import { emptyBrowse, type BrowseState } from './data/browseState'
import { SettingsPage } from './pages/SettingsPage'
import { UrgentPage } from './pages/UrgentPage'
import { ResearchPage } from './pages/ResearchPage'
import { TimelinePage } from './pages/TimelinePage'
import { TodayPage } from './pages/TodayPage'
const VisualLibraryPage = lazy(async () => {
  const mod = await import('./pages/VisualLibraryPage')
  return { default: mod.VisualLibraryPage }
})

const ContraceptionPage=lazy(async()=>({default:(await import('./pages/ContraceptionPage')).ContraceptionPage}))
const Week22TopicPage=lazy(async()=>({default:(await import('./pages/Week22TopicPage')).Week22TopicPage}))
const SkinTopicPage=lazy(async()=>({default:(await import('./pages/SkinTopicPage')).SkinTopicPage}))

const DevelopmentEvidencePage=lazy(async()=>({default:(await import('./pages/DevelopmentEvidencePage')).DevelopmentEvidencePage}))

const EvidencePage = lazy(async () => {
  const mod = await import('./pages/EvidencePage')
  return { default: mod.EvidencePage }
})

function AppShell() {
  const [browse,setBrowse]=useState<BrowseState>(emptyBrowse)
  const clearViews=useClearViewMemory()
  const navigation=useNavigationMemory()
  const {prefs}=useLocalPrefs()
  const today=useCalendarDay()
  const position=pregnancyPosition(prefs.pregnancyDueDate,today)
  const currentWeek=position&&!position.pastReadingWindow?position.readingWeek:null
  const activePhaseId=currentWeek!==null?gestationalWeeks.find(w=>w.week===currentWeek)?.maternal_phase??prefs.selectedPhaseId:prefs.selectedPhaseId
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
            <Route path="/research-pathways" element={<DevelopmentEvidencePage/>}/>
            <Route path="/research-pathways/:topicId" element={<DevelopmentEvidencePage/>}/>
            <Route path="/contraception" element={<ContraceptionPage/>}/>
            <Route path="/contraception/:topic" element={<ContraceptionPage/>}/>
            <Route path="/" element={<TodayPage activePhaseId={activePhaseId} currentWeek={currentWeek} onSearch={query=>setBrowse({...emptyBrowse,query})}/>} />
            <Route path="/timeline" element={<TimelinePage selectedPhaseId={activePhaseId} currentWeek={currentWeek} />} />
            <Route path="/timeline/:track" element={<TimelinePage selectedPhaseId={activePhaseId} currentWeek={currentWeek} />} />
            <Route path="/timeline/:track/:phaseId" element={<TimelinePage selectedPhaseId={activePhaseId} currentWeek={currentWeek} />} />
            <Route path="/timeline/week/20/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/20/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/20/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/20/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/20/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/21/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/21/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/21/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/21/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/21/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/22/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/22/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/22/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/22/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/22/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/23/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/23/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/23/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/23/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/23/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/24/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/24/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/24/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/24/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/24/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/25/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/25/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/25/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/25/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/25/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/26/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/26/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/26/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/26/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/26/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/27/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/27/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/27/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/27/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/27/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/28/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/28/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/28/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/28/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/28/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/29/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/29/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/29/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/29/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/29/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/30/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/30/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/30/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/30/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/30/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/31/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/31/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/31/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/31/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/31/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/1/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/1/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/1/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/1/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/1/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/2/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/2/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/2/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/2/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/2/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/3/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/3/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/3/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/3/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/3/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/4/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/4/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/4/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/4/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/4/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/5/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/5/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/5/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/5/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/5/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/6/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/6/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/6/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/6/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/6/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/7/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/7/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/7/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/7/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/7/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/8/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/8/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/8/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/8/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/8/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/9/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/9/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/9/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/9/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/9/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/10/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/10/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/10/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/10/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/10/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/11/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/11/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/11/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/11/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/11/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/12/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/12/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/12/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/12/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/12/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/13/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/13/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/13/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/13/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/13/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/14/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/14/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/14/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/14/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/14/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/15/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/15/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/15/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/15/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/15/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/16/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/16/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/16/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/16/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/16/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/17/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/17/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/17/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/17/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/17/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/18/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/18/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/18/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/18/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/18/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/19/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/19/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/19/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/19/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/19/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/32/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/32/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/32/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/32/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/32/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/33/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/33/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/33/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/33/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/33/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/34/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/34/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/34/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/34/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/34/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/35/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/35/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/35/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/35/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/35/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/36/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/36/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/36/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/36/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/36/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/37/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/37/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/37/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/37/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/37/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/38/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/38/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/38/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/38/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/38/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/39/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/39/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/39/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/39/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/39/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/40/mother/skin" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/40/mother/skin/:section" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/40/mother/skin/:section/:child" element={<SkinTopicPage/>}/>
            <Route path="/timeline/week/40/:subject/:topic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/40/:subject/:topic/:subtopic" element={<Week22TopicPage/>}/>
            <Route path="/timeline/week/:weekNumber" element={<TimelinePage selectedPhaseId={activePhaseId} currentWeek={currentWeek} />} />
            <Route path="/explore" element={<ExplorePage currentWeek={currentWeek} />} />
            <Route path="/explore/:domain" element={<ExplorePage currentWeek={currentWeek} />} />
            <Route path="/research" element={<Navigate to="/library" replace />} />
            <Route path="/research/:topicId" element={<ResearchPage />} />
            <Route path="/evidence" element={<EvidencePage />} />
            <Route path="/evidence/:collection" element={<EvidencePage />} />
            <Route path="/library" element={<LibraryPage browse={browse} setBrowse={setBrowse} currentWeek={currentWeek}/>} />
            <Route path="/saved" element={<LibraryPage browse={browse} setBrowse={setBrowse} currentWeek={currentWeek}/>} />
            <Route path="/settings" element={<SettingsPage onClear={clearTransient} activePhaseId={activePhaseId}/>} />
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
