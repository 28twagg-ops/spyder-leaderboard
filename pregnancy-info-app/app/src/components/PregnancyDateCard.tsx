import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useLocalPrefs} from '../hooks/useLocalPrefs'
import {useCalendarDay} from '../hooks/useCalendarDay'
import {canSavePregnancyDate,dueDateFromAge,formatCalendarDay,pregnancyPosition,shiftCalendarDay,type PregnancyDateSource} from '../data/pregnancyCalendar'

export function PregnancyDateEditor({onDone}:{onDone?:()=>void}){
 const {prefs,setPregnancyDate,storageAvailable}=useLocalPrefs()
 const today=useCalendarDay()
 const [method,setMethod]=useState<PregnancyDateSource>(prefs.pregnancyDateSource??'due-date')
 const [date,setDate]=useState(prefs.pregnancyDueDate??'')
 const pos=pregnancyPosition(prefs.pregnancyDueDate,today)
 const [weeks,setWeeks]=useState(pos?String(Math.min(pos.weeks,42)):'')
 const [days,setDays]=useState(pos?String(pos.days):'0')
 const [error,setError]=useState('')
 return <form className="date-editor" onSubmit={e=>{
  e.preventDefault()
  const value=method==='due-date'?date:weeks.trim()!==''&&days.trim()!==''?dueDateFromAge(Number(weeks),Number(days),today):null
  if(!value||!canSavePregnancyDate(value,today)||!setPregnancyDate(value,method)){setError('Enter a valid estimated due date or current weeks and days.');return}
  setError('');onDone?.()
 }}>
  <fieldset><legend>How would you like to set your pregnancy date?</legend><label><input type="radio" name="pregnancy-date-method" checked={method==='due-date'} onChange={()=>{setMethod('due-date');setError('')}}/> I know my estimated due date</label><label><input type="radio" name="pregnancy-date-method" checked={method==='week-days'} onChange={()=>{setMethod('week-days');setError('')}}/> I know my current weeks and days</label></fieldset>
  {method==='due-date'?<label className="date-field">Estimated due date<input type="date" value={date} min={shiftCalendarDay(today,-28)??undefined} max={shiftCalendarDay(today,280)??undefined} onChange={e=>setDate(e.target.value)} required/></label>:<div className="date-age-inputs"><label className="date-field">Weeks<input type="number" min={0} max={42} step={1} value={weeks} onChange={e=>setWeeks(e.target.value)} inputMode="numeric" required/></label><label className="date-field">Days<input type="number" min={0} max={6} step={1} value={days} onChange={e=>setDays(e.target.value)} inputMode="numeric" required/></label></div>}
  <p className="small-copy muted">Optional. {storageAvailable?'Saved only in this app’s local browser storage; not encrypted.':'Storage is unavailable; the date may not survive a reload.'} Use your care team's dating if available. The weeks-and-days option calculates a reading estimate, not a clinical due date.</p>
  {error&&<p role="alert">{error}</p>}
  <button className="btn" type="submit">Save pregnancy date</button>
  {prefs.pregnancyDueDate&&<button className="btn btn-ghost" type="button" onClick={()=>{setPregnancyDate(null);onDone?.()}}>Remove saved pregnancy date</button>}
 </form>
}
export function PregnancyDateCard({settings=false}:{settings?:boolean}){
 const {prefs,storageAvailable}=useLocalPrefs()
 const today=useCalendarDay()
 const [editing,setEditing]=useState(false)
 const position=pregnancyPosition(prefs.pregnancyDueDate,today)
 return <section className="pregnancy-date-card" aria-labelledby={settings?'settings-date-title':'home-date-title'}>
  <div className="date-card-top"><div><p className="date-kicker">Your pregnancy</p><h2 id={settings?'settings-date-title':'home-date-title'}>{position&&!position.pastReadingWindow?position.weeks+' weeks + '+position.days+' days':position?'Estimated due date passed':'Follow your pregnancy week'}</h2></div>{position&&<button type="button" className="date-edit" onClick={()=>setEditing(x=>!x)}>{editing?'Cancel':'Edit date'}</button>}</div>
  {position?<><p className="muted">{prefs.pregnancyDateSource==='week-days'?'Calculated reading date':'Estimated due date'}: {formatCalendarDay(prefs.pregnancyDueDate!)}</p>{!position.pastReadingWindow?<><div className="date-progress" role="progressbar" aria-label="Pregnancy reference timeline" aria-valuenow={Math.round(position.progress*100)} aria-valuemin={0} aria-valuemax={100}><span style={{width:Math.round(position.progress*100)+'%'}}/></div><p className="date-countdown">{position.daysUntilDue>0?position.daysUntilDue+' days until the estimated due date':position.daysUntilDue===0?'Estimated due date is today':Math.abs(position.daysUntilDue)+' days past the estimated due date'}</p><div className="date-week-links"><Link to={'/timeline/week/'+position.readingWeek+'?subject=baby'}>Baby this week <span aria-hidden="true">›</span></Link><Link to={'/timeline/week/'+position.readingWeek+'?subject=mother'}>Mother this week <span aria-hidden="true">›</span></Link></div></>:<p>Update your date or choose another life stage when ready. Everwell does not assume a birth has occurred.</p>}</>:<><p>Enter your estimated due date once, or your current weeks and days. Your reading week advances automatically.</p><button type="button" className="btn" onClick={()=>setEditing(x=>!x)}>{editing?'Cancel':'Set pregnancy date'}</button></>}
  {editing&&<PregnancyDateEditor onDone={()=>setEditing(false)}/>}
  <Link to="/timeline/pregnancy" className="date-all-weeks">Browse all 40 weeks <span aria-hidden="true">›</span></Link>
  {!storageAvailable&&<p className="small-copy muted" role="status">Local storage is unavailable. Your date may not survive a reload.</p>}
 </section>
}
