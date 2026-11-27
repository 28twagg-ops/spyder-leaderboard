import {describe,it,expect} from 'vitest'
import {referenceParts,referenceRules,referenceDestination} from './articleCrossReferences'
import {getArticle} from './researchCatalog'
import {contraception} from './contraception'
import {developmentTopics} from './developmentEvidence'
import {week22Topics} from './week22TopicMap'
import skinMap from './skinTopicMap.json'
import {midReadings} from './midPregnancyReadings'
describe('article cross references',()=>{
 it('preserves all original text and punctuation, with selective internal links',()=>{const text='Folic acid, omega-3, and pelvic floor training matter in different research contexts.';const parts=referenceParts(text,'/research/EV-ART-001');expect(parts.map(p=>p.text).join('')).toBe(text);expect(parts.filter(p=>p.to).map(p=>p.to)).toEqual(['/research/EV-ART-002','/research/EV-ART-007'])})
 it('avoids self links, duplicate targets, and partial words',()=>{expect(referenceParts('Folic acid and MTHFR.','/research/EV-ART-002').every(p=>!p.to)).toBe(true);expect(referenceParts('Opill and Opill','/research/EV-ART-001').filter(p=>p.to)).toHaveLength(1);expect(referenceParts('BPAfree','/research/EV-ART-001').every(p=>!p.to)).toBe(true)})
 it('keeps the selected week and prefers the more specific phrase',()=>{const parts=referenceParts('Existing stretch marks and collagen peptides.','/timeline/week/16/mother/body/core');expect(parts.filter(p=>p.to).map(p=>p.to)).toEqual(['/timeline/week/16/mother/skin/treatment','/timeline/week/16/mother/skin/prevention/collagen-and-supplements'])})
 it('targets existing library, contraception, research pathways and focused weekly routes',()=>{for(const rule of referenceRules){if(rule.to.startsWith('/research/'))expect(getArticle(rule.to.split('/').pop()!)).toBeTruthy();else if(rule.to.startsWith('/contraception/')){const slug=rule.to.split('/').pop()!;expect(slug.startsWith('method-')?contraception.methods.some(m=>'method-'+m.slug===slug):contraception.sections.some(s=>s.id===slug)).toBe(true)}else if(rule.to.startsWith('/research-pathways/'))expect(developmentTopics.some(t=>t.id===rule.to.split('/').pop())).toBe(true);else expect(rule.to).toBe('/contraception');if(rule.weekPath){const [subject,topic,child,leaf]=rule.weekPath.split('/');if(topic==='skin'&&subject==='mother'){const group=skinMap.sections.find(s=>s.id===child);expect(group).toBeTruthy();if(leaf)expect(group?.children.some(c=>c.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')===leaf)).toBe(true)}else expect(week22Topics.some(t=>t.subject===subject&&t.id===topic&&t.children.some(c=>c.id===child))||Object.prototype.hasOwnProperty.call(midReadings,rule.weekPath)).toBe(true);expect(referenceDestination(rule,'/timeline/week/22/mother/body')).toBe('/timeline/week/22/'+rule.weekPath)}}})
})
