import {describe,it,expect} from 'vitest'
import {defaultCostScenario,usageCosts,threeYearCost,costMatch} from './contraceptionCosts'
describe('per-use cost scenario',()=>{
 it('defaults to 21 acts/month and shows annual and three-year costs',()=>{const s=defaultCostScenario();expect(s.condomsPerMonth).toBe(21);expect(usageCosts(s,12).acts).toBe(252);expect(usageCosts(s,36).external).toBe(756);expect(usageCosts(s,36).internal).toEqual([1512,2268]);expect(usageCosts(s,12).phexxi).toBeCloseTo(7594.86);expect(threeYearCost('gel',s)?.high).toBe(2268)})
 it('keeps estimates uncertain until actual quotes are entered',()=>{const s=defaultCostScenario();expect(costMatch('internal-condom',s)).toBeNull();expect(costMatch('internal-condom',{...s,quotes:{'internal-condom':1512}})).toBe(false)})
})
