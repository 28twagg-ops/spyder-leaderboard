import {describe,it,expect} from 'vitest'
import {defaultCostScenario,usageCosts,threeYearCost,costMatch,annualCostLabel} from './contraceptionCosts'
describe('per-use cost scenario',()=>{
 it('shows annualized known costs and unknowns without inventing quotes',()=>{
  const s=defaultCostScenario()
  expect(annualCostLabel('external-condom',s)).toBe('Est. $252/yr')
  expect(annualCostLabel('internal-condom',s)).toBe('Est. $504–$756/yr')
  expect(annualCostLabel('copper-iud',s)).toBe('Est. $0–$600/yr avg.')
  expect(annualCostLabel('gel',s)).toContain('(OTC only)')
  expect(annualCostLabel('sponge',s)).toBe('Est. yearly cost: unknown')
  expect(annualCostLabel('mini-pill',{...s,quotes:{'mini-pill':900}})).toBe('Your quote: $300/yr avg.')
 })

 it('defaults to 21 acts/month and shows annual and three-year costs',()=>{const s=defaultCostScenario();expect(s.condomsPerMonth).toBe(21);expect(usageCosts(s,12).acts).toBe(252);expect(usageCosts(s,36).external).toBe(756);expect(usageCosts(s,36).internal).toEqual([1512,2268]);expect(usageCosts(s,12).phexxi).toBeCloseTo(7594.86);expect(threeYearCost('gel',s)?.high).toBe(2268)})
 it('keeps estimates uncertain until actual quotes are entered',()=>{const s=defaultCostScenario();expect(costMatch('internal-condom',s)).toBeNull();expect(costMatch('internal-condom',{...s,quotes:{'internal-condom':1512}})).toBe(false)})
})
