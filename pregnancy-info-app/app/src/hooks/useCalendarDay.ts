import {useEffect,useState} from 'react'
import {localCalendarDay} from '../data/pregnancyCalendar'
/** Refresh on return to the app and across midnight without persisting derived ages. */
export function useCalendarDay(){
 const [today,setToday]=useState(()=>localCalendarDay())
 useEffect(()=>{
  const refresh=()=>setToday(localCalendarDay())
  const timer=window.setInterval(refresh,60000)
  window.addEventListener('focus',refresh)
  document.addEventListener('visibilitychange',refresh)
  return()=>{window.clearInterval(timer);window.removeEventListener('focus',refresh);document.removeEventListener('visibilitychange',refresh)}
 },[])
 return today
}
