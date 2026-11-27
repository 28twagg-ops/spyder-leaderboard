import { describe,expect,it } from 'vitest'
import { articles } from './researchCatalog'
import { readingOverview,textbookLinks } from './readingOverviews'
import { safeVisualUrl } from './visualCatalog'
describe('editorial reading scope',()=>{
 it('covers every article with a brief relevance statement and three distinct topics',()=>{
  expect(articles).toHaveLength(52)
  for(const article of articles){const item=readingOverview(article.id);expect(item).toBeDefined();expect(item!.why.length).toBeLessThan(170);expect(new Set(item!.concepts).size).toBe(3)}
 })
 it('keeps source links HTTPS and matched to known topics',()=>{
  for(const [id,links] of Object.entries(textbookLinks)){expect(articles.some(a=>a.id===id)).toBe(true);for(const [,url] of links)expect(safeVisualUrl(url)).toBeTruthy()}
 })
})
