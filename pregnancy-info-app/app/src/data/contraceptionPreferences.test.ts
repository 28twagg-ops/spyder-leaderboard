import {describe,it,expect} from 'vitest'
import {comparePreferences,defaultPreferenceWeights,defaultPreferenceFilters,themePreferences,themeFilters} from './contraceptionPreferences'
describe('contraception feature preference matching',()=>{
 it('differentiates effectiveness across intermediate and low-effectiveness methods in the live theme tool',()=>{
  const r=comparePreferences(themePreferences({effectiveness:5}),defaultPreferenceFilters)
  const pts=(slug:string)=>r.results.find(x=>x.method.slug===slug)!.minimum
  expect(pts('mini-pill')).toBeGreaterThan(pts('external-condom'))
  expect(pts('external-condom')).toBeGreaterThan(pts('gel'))
  expect(pts('copper-iud')).toBeGreaterThan(pts('mini-pill'))
  const fam=r.results.find(x=>x.method.slug==='fertility-awareness')!
  expect(fam.maximum).toBeGreaterThan(fam.minimum)
  expect(r.results).toHaveLength(15)
 })
 it('permits pills to move above condoms when effectiveness and noninvasive comfort matter',()=>{
  const w={effectiveness:5,comfort:5,hormones:0,health:0,fertility:0,cost:0}
  const r=comparePreferences(themePreferences(w),themeFilters(w,defaultPreferenceFilters))
  const pts=(slug:string)=>r.results.find(x=>x.method.slug===slug)!.minimum
  // Natural-cycle preference gives condoms half the comfort weight;
  // reducing that tradeoff via explicit procedure-only weighting changes the result.
  expect(pts('mini-pill')).toBeGreaterThan(pts('gel'))
  const p=comparePreferences({effectivenessScale:5,procedure:5}, { ...defaultPreferenceFilters,noProcedure:true })
  expect(p.results[0].method.low).toBe(7)
  expect(p.results.find(x=>x.method.slug==='mini-pill')!.minimum).toBeGreaterThan(p.results.find(x=>x.method.slug==='external-condom')!.minimum)
 })
 it('excludes invasive options at essential comfort despite high other priorities',()=>{
  const w={comfort:5,hormones:5,effectiveness:5,health:5,fertility:5,cost:5}
  const r=comparePreferences(themePreferences(w),themeFilters(w,defaultPreferenceFilters))
  expect(r.results.length).toBeGreaterThan(0)
  expect(r.results.every(x=>!['iud','implant','injection'].includes(x.method.art))).toBe(true)
  expect(comparePreferences(themePreferences({...w,comfort:4}),themeFilters({...w,comfort:4},defaultPreferenceFilters)).results.some(x=>x.method.slug==='copper-iud')).toBe(true)
 })
 it('maps the six themes to comparable features without doubling comfort',()=>{
  const w=themePreferences({comfort:3,health:5})
  expect(w.pain).toBe(1.5);expect(w.cycle).toBe(1.5);expect(w.mental).toBe(5)
  expect(comparePreferences(w,defaultPreferenceFilters).possible).toBe(8)
 })
 it('changes total cost matching using actual entered 36-month quotes',()=>{
  const r=comparePreferences({cost:5},defaultPreferenceFilters,{budget:500,condomsPerMonth:8,quotes:{'copper-iud':400,'combined-pill':800}})
  expect(r.results[0].method.slug).toBe('copper-iud')
  expect(r.results[0].minimum).toBe(5)
  expect(r.results.find(x=>x.method.slug==='combined-pill')?.maximum).toBe(0)
  expect(r.results.find(x=>x.method.slug==='implant')?.maximum).toBe(5)
 })
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
