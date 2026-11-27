export type ThemeId = 'soft-fog' | 'morning-stone' | 'quiet-rose' | 'deep-calm'

export interface ThemeOption {
  id: ThemeId
  name: string
  mood: string
  bestFor: string
  swatches: [string, string, string]
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'soft-fog',
    name: 'Soft Fog',
    mood: 'Cool, airy, quiet clinic-meets-home',
    bestFor: 'Calm focus without feeling medical-tech',
    swatches: ['#eef2f4', '#5a7d86', '#2a3439'],
  },
  {
    id: 'morning-stone',
    name: 'Morning Stone',
    mood: 'Soft botanical neutrals, grounded and gentle',
    bestFor: 'A warmer everyday feel without pink clichés',
    swatches: ['#f1efe9', '#6d7a5f', '#2f312c'],
  },
  {
    id: 'quiet-rose',
    name: 'Quiet Rose',
    mood: 'Dusty rose-taupe, soft and intimate',
    bestFor: 'A more nurturing, personal tone',
    swatches: ['#f3ece8', '#8d6d6a', '#3a3030'],
  },
  {
    id: 'deep-calm',
    name: 'Deep Calm',
    mood: 'Low-light, muted slate (neon removed)',
    bestFor: 'Evening reading if you prefer dark mode',
    swatches: ['#121a1c', '#7f9ea4', '#e6ecee'],
  },
]

export const DEFAULT_THEME: ThemeId = 'soft-fog'

export function isThemeId(value: string | null | undefined): value is ThemeId {
  return THEME_OPTIONS.some((theme) => theme.id === value)
}

export function applyTheme(themeId: ThemeId) {
  document.documentElement.setAttribute('data-theme', themeId)
  const meta = document.querySelector('meta[name="theme-color"]')
  const option = THEME_OPTIONS.find((theme) => theme.id === themeId)
  if (meta && option) meta.setAttribute('content', option.swatches[1])
}
