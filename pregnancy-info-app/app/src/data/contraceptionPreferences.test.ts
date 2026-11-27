import {describe,it,expect} from 'vitest'
import {comparePreferences,defaultPreferenceWeights,defaultPreferenceFilters} from './contraceptionPreferences'
describe('contraception feature preference matching',()=>{
 it('updates the first match when weights change and shares ranks for ties',()=>{
  const a=comparePreferences({hormones:5,effectiveness:5},defaultPreferenceFilters)
  expect(a.results[0].method.slug).toBe('copper-iud')
  expect(a.results[0].rank).toBe(1)
  const b=comparePreferences({procedure:5,sti:5},defaultPreferenceFilters)
  expect(b.results.slice(0,2).map(x=>x.method.slug)).toEqual(['external-condom','internal-condom'])
  expect(b.results.slice(0,2).map(x=>x.rank)).toEqual([1,1])
  expect(b.results[2].rank).toBe(3)
 })
 it('does not label default results as ranked',()=>expect(comparePreferences({},defaultPreferenceFilters).results.every(r=>r.rank===null)).toBe(true))
 it('does not create an overall score by default',()=>{const r=comparePreferences(defaultPreferenceWeights(),defaultPreferenceFilters);expect(r.possible).toBe(0);expect(r.results).toHaveLength(15)})
 it('uses documented feature weights and preserves tied results',()=>{const r=comparePreferences({hormones:5,effectiveness:5},defaultPreferenceFilters);expect(r.possible).toBe(10);expect(r.results[0].method.slug).toBe('copper-iud');expect(r.results[0].minimum).toBe(10)})
 it('leaves mental health unscored and uses explicit feature proxies for other priorities',()=>{const r=comparePreferences({physical:5,mental:5,pain:5,cost:5},defaultPreferenceFilters);expect(r.possible).toBe(15);expect(r.reviewOnly).toEqual(['Mental health & sexual wellbeing'])})
 it('does not double count procedure and pain features',()=>{expect(comparePreferences({procedure:4,pain:5},defaultPreferenceFilters).possible).toBe(5)})
 it('period preference distinguishes copper from hormone-free non-device methods',()=>{const r=comparePreferences({cycle:5},defaultPreferenceFilters);expect(r.results[0].method.art).not.toBe('iud');expect(r.results.find(x=>x.method.slug==='copper-iud')?.minimum).toBe(0)})
 it('keeps hard filters separate from preferences',()=>{const r=comparePreferences({hormones:5},{hormoneFree:true,noProcedure:true,underOne:true});expect(r.results).toHaveLength(0)})
 it('returns no fabricated estimate for an unselected criterion',()=>{const r=comparePreferences({hormones:5},defaultPreferenceFilters);expect(r.results.every(x=>x.criteria.length===1)).toBe(true)})
})
