/** Calendar arithmetic only; no clinical dating, fetal prediction, or automatic birth transition. */
export type PregnancyDateSource='due-date'|'week-days'
const DAY=86400000
export function localCalendarDay(now=new Date()):string{
 return [now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-')
}
function dayNumber(value:unknown):number|null{
 if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value))return null
 const [year,month,day]=value.split('-').map(Number)
 if(year<1900||year>2200)return null
 const ms=Date.UTC(year,month-1,day)
 const d=new Date(ms)
 return d.getUTCFullYear()===year&&d.getUTCMonth()===month-1&&d.getUTCDate()===day?ms/DAY:null
}
export function isCalendarDate(value:unknown):value is string{return dayNumber(value)!==null}
export function shiftCalendarDay(value:string,days:number):string|null{
 const n=dayNumber(value)
 return n===null||!Number.isInteger(days)?null:new Date((n+days)*DAY).toISOString().slice(0,10)
}
export function dueDateFromAge(weeks:number,days:number,today=localCalendarDay()):string|null{
 if(!Number.isInteger(weeks)||weeks<0||weeks>42||!Number.isInteger(days)||days<0||days>6)return null
 return shiftCalendarDay(today,280-weeks*7-days)
}
export function pregnancyPosition(dueDate:string|null,today=localCalendarDay()){
 const end=dayNumber(dueDate),now=dayNumber(today)
 if(end===null||now===null)return null
 const daysUntilDue=end-now,age=280-daysUntilDue
 if(age<0)return null
 return {weeks:Math.floor(age/7),days:age%7,daysUntilDue,readingWeek:Math.min(40,Math.max(1,Math.floor(age/7))),pastReadingWindow:age>300,progress:Math.max(0,Math.min(1,age/280))}
}
export function canSavePregnancyDate(value:unknown,today=localCalendarDay()):value is string{
 const end=dayNumber(value),now=dayNumber(today)
 return end!==null&&now!==null&&end-now>=-28&&end-now<=280
}
export function formatCalendarDay(value:string){
 const n=dayNumber(value)
 return n===null?'':new Intl.DateTimeFormat(undefined,{month:'short',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(n*DAY))
}
