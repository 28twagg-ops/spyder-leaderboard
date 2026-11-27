import {describe,it,expect} from 'vitest'
import {developmentTopics,developmentSources,weekQuestion,phaseQuestion} from './developmentEvidence'
import {timeline,getArticle} from './researchCatalog'
import {getEvidenceSource} from './evidenceCatalog'
describe('development research draft',()=>{
 it('has a learning question for every week and family phase',()=>{for(let week=1;week<=40;week++)expect(weekQuestion(week)).toBeTruthy();for(const phase of timeline)expect(phaseQuestion(phase.id)).toBeTruthy()})
 it('keeps source links, canonical aliases, article references and draft status intact',()=>{expect(developmentTopics).toHaveLength(7);expect(new Set(developmentSources.map(s=>s.id)).size).toBe(developmentSources.length);for(const s of developmentSources){expect(s.url).toMatch(/^https:\/\//);expect(s.clinical_review).toBe(false);expect(s.publish).toBe(false);for(const alias of s.aliases)expect(getEvidenceSource(alias)).toBeTruthy()}for(const t of developmentTopics){for(const id of t.refs)expect(developmentSources.some(s=>s.id===id)).toBe(true);for(const id of t.articleIds)expect(getArticle(id)).toBeTruthy()}})
})
