import { describe,expect,it } from 'vitest'
import { articles,timeline,gestationalWeeks } from './researchCatalog'
import { plainReading } from './plainReading'
import { plainPhaseFocus,plainWeek } from './plainTimeline'
import { readingOverview } from './readingOverviews'
function score(values:string[]){
 const text=values.join(' ')
 const words=text.match(/[A-Za-z]+(?:'[A-Za-z]+)?/g)??[]
 const sentences=Math.max(1,(text.match(/[.!?]+(?=\s|$)/g)??[]).length)
 const syllables=words.reduce((sum,w)=>{
  w=w.toLowerCase().replace(/[^a-z]/g,'')
  if(w.length<=3)return sum+1
  w=w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,'').replace(/^y/,'')
  return sum+Math.max(1,(w.match(/[aeiouy]+/g)??[]).length)
 },0)
 return Math.round((.39*words.length/sentences+11.8*syllables/words.length-15.59)*10)/10
}
describe('plain-language reading layer',()=>{
 it('has a distinct plain-language scope, safety and draft explanation for every article',()=>{
  expect(articles).toHaveLength(52)
  for(const a of articles){expect(plainReading(a.id)?.safety).toBeTruthy();expect(plainReading(a.id)?.detail).toBeTruthy();expect(readingOverview(a.id)?.why).toBeTruthy();expect(a.visible_safety).toBeTruthy()}
 })
 it('has plain reading labels for all 28 phases and 40 weeks',()=>{
  expect(timeline).toHaveLength(28);expect(gestationalWeeks).toHaveLength(40)
  for(const p of timeline)expect(plainPhaseFocus(p.id,'MISSING')).not.toBe('MISSING')
  for(const w of gestationalWeeks)expect(plainWeek(w.week,'MISSING')).not.toBe('MISSING')
 })
 it('records estimated reading grades without using the estimate as medical review',()=>{
  const results={purpose:score(articles.map(a=>readingOverview(a.id)!.why)),safety:score(articles.map(a=>plainReading(a.id)!.safety)),detail:score(articles.map(a=>plainReading(a.id)!.detail))}
  console.info('Plain reading grade estimates:',{...results,weeks:score(gestationalWeeks.map(w=>plainWeek(w.week,w.description)))})
  expect(results.purpose).toBeLessThanOrEqual(9)
  expect(results.safety).toBeLessThanOrEqual(9)
  expect(results.detail).toBeLessThanOrEqual(9)
 })
})
