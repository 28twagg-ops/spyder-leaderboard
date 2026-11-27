import { useEffect, useState } from 'react'
import {
  DEFAULT_THEME,
  applyTheme,
  isThemeId,
  type ThemeId,
} from '../theme/themes'

export interface LocalPrefs {
  selectedPhaseId: string | null
  bookmarks: string[]
  readArticles: string[]
  reducedMotion: boolean
  themeId: ThemeId
}

const KEY = 'everwell.local.prefs.v1'

const defaults: LocalPrefs = {
  selectedPhaseId: null,
  bookmarks: [],
  readArticles: [],
  reducedMotion: false,
  themeId: DEFAULT_THEME,
}

function readPrefs(): LocalPrefs {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { ...defaults }
    const parsed = JSON.parse(raw) as Partial<LocalPrefs> | null
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return { ...defaults }
    return {
      selectedPhaseId: typeof parsed.selectedPhaseId === 'string' ? parsed.selectedPhaseId : null,
      bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks.filter((id) => typeof id === 'string') : [],
      readArticles: Array.isArray(parsed.readArticles) ? parsed.readArticles.filter((id) => typeof id === 'string') : [],
      reducedMotion: parsed.reducedMotion === true,
      themeId: isThemeId(parsed.themeId) ? parsed.themeId : DEFAULT_THEME,
    }
  } catch {
    return { ...defaults }
  }
}

export function useLocalPrefs() {
  // Read once before the first persistence effect so a saved theme is not overwritten on mount.
  const [prefs, setPrefs] = useState<LocalPrefs>(readPrefs)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(prefs))
    } catch {
      // ignore quota / private mode
    }
    applyTheme(prefs.themeId)
  }, [prefs])

  function toggleBookmark(articleId: string) {
    setPrefs((prev) => ({
      ...prev,
      bookmarks: prev.bookmarks.includes(articleId)
        ? prev.bookmarks.filter((id) => id !== articleId)
        : [...prev.bookmarks, articleId],
    }))
  }

  function markRead(articleId: string) {
    setPrefs((prev) =>
      prev.readArticles.includes(articleId)
        ? prev
        : { ...prev, readArticles: [...prev.readArticles, articleId] },
    )
  }

  function setPhase(phaseId: string | null) {
    setPrefs((prev) => ({ ...prev, selectedPhaseId: phaseId }))
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
      localStorage.removeItem(KEY)
    } catch {
      // ignore
    }
    applyTheme(DEFAULT_THEME)
  }

  return {
    prefs,
    toggleBookmark,
    markRead,
    setPhase,
    setTheme,
    exportPrefs,
    clearPrefs,
  }
}
