import {describe,expect,it} from 'vitest'
import {contraception,searchContraception} from './contraception'
describe('contraception research section',()=>{
 it('keeps every claim linked to an original source with funding and bias fields',()=>{
  const ids=new Set(contraception.sources.map(s=>s.id))
  expect(ids.size).toBe(contraception.sources.length)
  expect(contraception.clinicalRelease).toBe(false)
  for(const s of contraception.sources){expect(s.url).toMatch(/^https:\/\//);expect(s.funding).toBeTruthy();expect(s.coi).toBeTruthy();expect(s.bias).toBeTruthy()}
  for(const section of contraception.sections)for(const p of section.paragraphs)for(const id of p[2] as string[])expect(ids.has(id)).toBe(true)
  for(const p of contraception.evidencePanels){expect(p.sources.every(id=>ids.has(id))).toBe(true);expect(p.rows.every(r=>r.low>=0&&r.high>=r.low&&r.high<=p.max)).toBe(true);expect(p.topics.every(id=>contraception.sections.some(s=>s.id===id))).toBe(true)}
  expect(new Set(contraception.methods.map(m=>m.slug)).size).toBe(contraception.methods.length)
  for(const m of contraception.methods){expect(m.slug&&m.pro&&m.con&&m.price&&m.pain).toBeTruthy();expect(ids.has(m.costId)).toBe(true);expect(m.profileSources.every(id=>ids.has(id))).toBe(true);expect(m.placement&&m.physical&&m.mental&&m.fertility).toBeTruthy();expect(ids.has(m.source)).toBe(true);expect(m.low).toBeLessThanOrEqual(m.high);expect(contraception.sections.some(s=>s.id===m.topic)).toBe(true)}
 })
 it.each([['copper iud','copper-iud'],['mirena','hormonal-iud'],['birth control','compare'],['mini pill','mini-pill'],['natural family planning','fertility-awareness'],['depo','implant-injection'],['return fertility','return-to-fertility']])('finds %s',(q,id)=>expect(searchContraception(q,'all').map(s=>s.id)).toContain(id))
})
