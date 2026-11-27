import {describe,expect,it} from 'vitest'
import {focusedIndex,searchFocused} from './focusedSearch'
import {midReadings} from './midPregnancyReadings'
import {week22Topics} from './week22TopicMap'
import skinData from './skinTopicMap.json'
describe('expanded topic retrieval',()=>{
 it('includes all focused readings, mapped topics and skin pages without duplicate routes',()=>{
  const paths=new Set(focusedIndex.map(e=>e.path))
  expect(paths.size).toBe(focusedIndex.length)
  for(const key of Object.keys(midReadings))expect(paths.has(key)).toBe(true)
  for(const topic of week22Topics){expect(paths.has(topic.subject+'/'+topic.id)).toBe(true);for(const c of topic.children)expect(paths.has(topic.subject+'/'+topic.id+'/'+c.id)).toBe(true)}
  for(const section of skinData.sections)expect(paths.has('mother/skin/'+section.id)).toBe(true)
 })
 it.each([
  ['prenatal vitamins','mother/nutrition/research-guide'],
  ['stretch mark cream','mother/skin/prevention/creams-and-moisturizers'],
  ['morning sickness','mother/digestion/nausea'],
  ['iron deficiency','mother/nutrition/iron'],
  ['vitamin D','mother/nutrition/vitamin-d'],
  ['heartburn','mother/digestion/heartburn'],
  ['gestational diabetes','mother/checkups/glucose-screening'],
  ['surfactant','baby/growth/surfactant'],
  ['pelvic floor','mother/body/pelvic-floor']
 ])('returns %s within the first three topics',(query,path)=>{expect(searchFocused(query,'all',22).slice(0,3).map(x=>x.path)).toContain(path)})
 it('keeps the current week for shared subjects and selects a relevant reference week for stage-specific subjects',()=>{
  expect(searchFocused('iron deficiency','nutrition',25).find(r=>r.path==='mother/nutrition/iron')?.href).toBe('/timeline/week/25/mother/nutrition/iron')
  expect(searchFocused('surfactant','all',5).find(r=>r.path==='baby/growth/surfactant')?.week).not.toBe(5)
  expect(searchFocused('week 22','all',22)).toEqual([])
 })
})
