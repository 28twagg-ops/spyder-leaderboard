import actionsJson from './imported/actions.json'
import articlesJson from './imported/articles.json'
import faqJson from './imported/faq.json'
import gestationalJson from './imported/gestational_weeks.json'
import routinesJson from './imported/routines.json'
import sourceLinksJson from './imported/source_links.json'
import syncMetaJson from './imported/sync_meta.json'
import timelineJson from './imported/timeline.json'
import consolidatedJson from './imported/consolidated_import.json'
import {
  canAutomateAction,
  filterSafeSourceIds,
  researchDraftSafety,
} from './researchGate'

export interface ResearchArticle {
  id: string
  domain: string
  title: string
  priority: string
  quick_answer: string
  learn_more: string
  visible_safety: string
  source_ids: string[]
  visual_ids?: string[]
  action_ids?: string[]
  faq_ids?: string[]
  research_view?: Record<string, unknown>
  status?: string
  clinical_review?: boolean
  high_risk?: boolean
}

export interface ResearchAction {
  id: string
  article_id: string
  domain: string
  priority: string
  what: string
  why: string
  frequency?: string
  eligibility?: string
  effort_cost?: string
  visible_safety: string
  source_ids: string[]
  automation_allowed?: boolean
  clinical_review?: boolean
  publish?: boolean
}

export interface ResearchFaq {
  id: string
  article_id: string
  question: string
  short_answer: string
  visible_safety: string
  source_ids: string[]
  clinical_review?: boolean
  publish?: boolean
}

export interface TimelinePhase {
  id: string
  track: string
  label: string
  focus: string
  article_ids: string[]
  safety?: string
  optional_navigation?: boolean
  clinical_review?: boolean
  publish?: boolean
  featured_article_ids?: string[]
  featured_action_ids?: string[]
  persistent_safety_article_ids?: string[]
  featured_note?: string
}

export interface GestationalWeek {
  week: number
  description: string
  source_id?: string
  maternal_phase?: string
  fetal_article_id?: string
  parent_action?: string | null
  interpretation?: string
  clinical_review?: boolean
  publish?: boolean
}

export interface SourceLink {
  id: string
  title: string
  url: string
  publisher?: string
  scope?: string
  funding?: string | null
  financial_ties?: string | null
  verification?: string
  publication_status?: string
  clinical_review?: boolean
}

export interface ResearchRoutine {
  id: string
  title: string
  track: string
  article_ids: string[]
  action_ids: string[]
  note?: string
  optional?: boolean
  no_streaks?: boolean
  automatic_schedule?: boolean
  clinical_review?: boolean
  publish?: boolean
}

export const articles = articlesJson as ResearchArticle[]
export const actions = actionsJson as ResearchAction[]
export const faqs = faqJson as ResearchFaq[]
export const timeline = timelineJson as TimelinePhase[]
export const gestationalWeeks = gestationalJson as GestationalWeek[]
export const sourceLinks = sourceLinksJson as SourceLink[]
export const routines = routinesJson as ResearchRoutine[]
export const syncMeta = syncMetaJson as {
  synced_at: string
  integration_mode: string
  clinical_publication: boolean
  archived_ai_conclusions_are_guidance: boolean
}

export const inventoryCounts = (consolidatedJson as { counts?: Record<string, number | null> })
  .counts ?? {}

const articleById = new Map(articles.map((a) => [a.id, a]))
const actionById = new Map(actions.map((a) => [a.id, a]))
const faqById = new Map(faqs.map((f) => [f.id, f]))
const sourceById = new Map(sourceLinks.map((s) => [s.id, s]))

export function getArticle(id: string): ResearchArticle | undefined {
  return articleById.get(id)
}

export function getAction(id: string): ResearchAction | undefined {
  return actionById.get(id)
}

export function getFaq(id: string): ResearchFaq | undefined {
  return faqById.get(id)
}

export function getSource(id: string): SourceLink | undefined {
  return sourceById.get(id)
}

export function listDomains(): string[] {
  return [...new Set(articles.map((a) => a.domain))].sort()
}

export function articlesByDomain(domain: string): ResearchArticle[] {
  return articles.filter((a) => a.domain === domain)
}

export function featuredForPhase(phase: TimelinePhase): ResearchArticle[] {
  const ids = phase.featured_article_ids?.length
    ? phase.featured_article_ids
    : phase.article_ids.slice(0, 4)
  return ids.map((id) => articleById.get(id)).filter(Boolean) as ResearchArticle[]
}

export function urgentArticles(): ResearchArticle[] {
  return articles.filter((a) => a.priority === 'urgent' || a.high_risk)
}

export function articleBundle(articleId: string) {
  const article = getArticle(articleId)
  if (!article) return null

  const sourceFilter = filterSafeSourceIds(article.source_ids)
  const relatedActions = (article.action_ids ?? [])
    .map((id) => getAction(id))
    .filter(Boolean)
    .map((action) => ({
      ...action!,
      automation_allowed_effective: canAutomateAction(action!),
    }))
  const relatedFaqs = (article.faq_ids ?? [])
    .map((id) => getFaq(id))
    .filter(Boolean) as ResearchFaq[]
  const sources = sourceFilter.allowed
    .map((id) => getSource(id))
    .filter(Boolean) as SourceLink[]
  const heldSources = sourceFilter.held

  return {
    article,
    relatedActions,
    relatedFaqs,
    sources,
    heldSources,
    safety: researchDraftSafety(heldSources),
  }
}

export function catalogStats() {
  return {
    articles: articles.length,
    actions: actions.length,
    faqs: faqs.length,
    phases: timeline.length,
    gestationalWeeks: gestationalWeeks.length,
    sourceLinks: sourceLinks.length,
    routines: routines.length,
    inventory: inventoryCounts,
    sync: syncMeta,
  }
}
