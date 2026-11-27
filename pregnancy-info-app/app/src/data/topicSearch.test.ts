import { describe,expect,it } from 'vitest'
import { searchArticles } from './researchCatalog'
describe('local topic discovery',()=>{
 it.each([
 ['morning sickness','EV-ART-017'],['prenatal vitamins','EV-ART-006'],['fish oil','EV-ART-007'],
 ['c-section','EV-ART-026'],['forever chemicals','EV-ART-011'],['potty training','EV-ART-051'],
 ['birth control','EV-ART-030'],['teething','EV-ART-049'],['vaccination','EV-ART-050'],
 ['powdered formula','EV-ART-033'],['postpartum depression','EV-ART-029'],
 ['exercise while pregnant','EV-ART-016'],['nausea','EV-ART-017']
 ])('finds a topic for %s',(q,id)=>{expect(searchArticles(q).slice(0,3).map(a=>a.id)).toContain(id)})
 it('retains direct article IDs and categories',()=>{expect(searchArticles('EV-ART-001').map(a=>a.id)).toEqual(['EV-ART-001']);expect(searchArticles('','nutrition').every(a=>a.domain==='nutrition')).toBe(true);expect(searchArticles()).toHaveLength(52)})
 it('does not invent results for nonsense or stop words',()=>{expect(searchArticles('unicorn spaceship')).toEqual([]);expect(searchArticles('asdf qzxv')).toEqual([]);expect(searchArticles('the and')).toEqual([])})
})
