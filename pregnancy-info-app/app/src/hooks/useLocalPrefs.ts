import { getArticle, timeline } from '../data/researchCatalog'
import { createContext, createElement, useContext, useEffect, useState, type ReactNode } from 'react'
import {
  DEFAULT_THEME,
  applyTheme,
  isThemeId,
  type ThemeId,
} from '../theme/themes'

export interface LocalPrefs {
  selectedPhaseId: string | null
  setupComplete: boolean
  bookmarks: string[]
  readArticles: string[]
  reducedMotion: boolean
  themeId: ThemeId
}

export const PREFS_KEY = 'everwell.local.prefs.v1'

const defaults: LocalPrefs = {
  selectedPhaseId: null,
  setupComplete: false,
  bookmarks: [],
  readArticles: [],
  reducedMotion: false,
  themeId: DEFAULT_THEME,
}

function validPhase(id:unknown):id is string{return typeof id==='string'&&timeline.some(p=>p.id===id)}
function knownArticles(value:unknown):string[]{return Array.isArray(value)?[...new Set(value.filter((id):id is string=>typeof id==='string'&&!!getArticle(id)))]:[]}
function readPrefs(): LocalPrefs {
  try {
    const raw = localStorage.getItem(PREFS_KEY)
    if (!raw) return { ...defaults }
    const parsed = JSON.parse(raw) as Partial<LocalPrefs> | null
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return { ...defaults }
    return {
      selectedPhaseId: validPhase(parsed.selectedPhaseId) ? parsed.selectedPhaseId : null,
      setupComplete: parsed.setupComplete === true || validPhase(parsed.selectedPhaseId),
      bookmarks: knownArticles(parsed.bookmarks),
      readArticles: knownArticles(parsed.readArticles),
      reducedMotion: parsed.reducedMotion === true,
      themeId: isThemeId(parsed.themeId) ? parsed.themeId : DEFAULT_THEME,
    }
  } catch {
    return { ...defaults }
  }
}

function usePrefsState() {
  // Read once before the first persistence effect so a saved theme is not overwritten on mount.
  const [prefs, setPrefs] = useState<LocalPrefs>(readPrefs)
  const [storageAvailable,setStorageAvailable]=useState(true)

  useEffect(() => {
    let available=true
    try {
      if (JSON.stringify(prefs) === JSON.stringify(defaults)) localStorage.removeItem(PREFS_KEY)
      else localStorage.setItem(PREFS_KEY, JSON.stringify(prefs))
    } catch {
      available=false // Choices remain in memory but may not persist.
    }
    applyTheme(prefs.themeId)
    let active=true
    // Report the completed browser I/O on the next microtask; cancel obsolete results.
    queueMicrotask(()=>{if(active)setStorageAvailable(available)})
    return ()=>{active=false}
  }, [prefs])

  function toggleBookmark(articleId: string) {
    if(!getArticle(articleId))return
    setPrefs((prev) => ({
      ...prev,
      bookmarks: prev.bookmarks.includes(articleId)
        ? prev.bookmarks.filter((id) => id !== articleId)
        : [...prev.bookmarks, articleId],
    }))
  }

  function markRead(articleId: string) {
    if(!getArticle(articleId))return
    setPrefs((prev) =>
      prev.readArticles.includes(articleId)
        ? prev
        : { ...prev, readArticles: [...prev.readArticles, articleId] },
    )
  }

  function setPhase(phaseId: string | null) {
    if(phaseId!==null&&!validPhase(phaseId))return
    setPrefs((prev) => ({ ...prev, selectedPhaseId: phaseId, setupComplete: true }))
  }

  function setTheme(themeId: ThemeId) {
    setPrefs((prev) => ({ ...prev, themeId }))
  }

  function exportPrefs() {
    return JSON.stringify(prefs, null, 2)
  }

  function clearPrefs() {
    setPrefs({ ...defaults })
    try {
      localStorage.removeItem(PREFS_KEY)
      setStorageAvailable(true)
    } catch {
      setStorageAvailable(false)
    }
    applyTheme(DEFAULT_THEME)
  }

  return {
    prefs,
    storageAvailable,
    toggleBookmark,
    markRead,
    setPhase,
    setTheme,
    exportPrefs,
    clearPrefs,
  }
}

const LocalPrefsContext = createContext<ReturnType<typeof usePrefsState> | null>(null)

export function LocalPrefsProvider({ children }: { children: ReactNode }) {
  const value = usePrefsState()
  return createElement(LocalPrefsContext.Provider, { value }, children)
}

export function useLocalPrefs() {
  const value = useContext(LocalPrefsContext)
  if (!value) throw new Error('LocalPrefsProvider is required')
  return value
}
