import {describe,expect,it} from 'vitest'
import {canSavePregnancyDate,dueDateFromAge,isCalendarDate,pregnancyPosition,shiftCalendarDay} from './pregnancyCalendar'
describe('date-only pregnancy reading calendar',()=>{
 it('computes weeks and days without timezone or daylight-saving arithmetic',()=>{
  const due=dueDateFromAge(22,3,'2026-11-27')
  expect(due).toBe('2027-03-30')
  expect(pregnancyPosition(due,'2026-11-27')).toMatchObject({weeks:22,days:3,readingWeek:22,daysUntilDue:123})
  expect(pregnancyPosition(due,'2026-12-01')).toMatchObject({weeks:23,days:0,readingWeek:23})
 })
 it('validates leap dates, input bounds and past-due behavior',()=>{
  expect(isCalendarDate('2027-02-29')).toBe(false)
  expect(isCalendarDate('2028-02-29')).toBe(true)
  expect(shiftCalendarDay('2028-02-28',1)).toBe('2028-02-29')
  expect(dueDateFromAge(22,7,'2026-11-27')).toBeNull()
  expect(canSavePregnancyDate('2028-01-01','2026-11-27')).toBe(false)
  expect(pregnancyPosition('2026-11-20','2026-11-27')).toMatchObject({weeks:41,days:0,readingWeek:40,pastReadingWindow:false})
  expect(pregnancyPosition('2026-10-30','2026-11-27')).toMatchObject({pastReadingWindow:true})
 })
})
