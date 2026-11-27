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
    const parsed = JSON.parse(raw) as Partial<LocalPrefs>
    return {
      ...defaults,
      ...parsed,
      themeId: isThemeId(parsed.themeId) ? parsed.themeId : DEFAULT_THEME,
    }
  } catch {
    return { ...defaults }
  }
}

export function useLocalPrefs() {
  const [prefs, setPrefs] = useState<LocalPrefs>(defaults)

  useEffect(() => {
    const next = readPrefs()
    setPrefs(next)
    applyTheme(next.themeId)
  }, [])

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
