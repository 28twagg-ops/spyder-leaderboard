import { useEffect, useRef, useState } from 'react'
import { timeline } from '../data/researchCatalog'
import { useLocalPrefs } from '../hooks/useLocalPrefs'
import { Glyph } from './Glyph'

import { stageChoices } from '../data/stageChoices'


export function PhasePicker({firstLaunch=false}:{firstLaunch?:boolean}){
 const {prefs,setPhase,storageAvailable}=useLocalPrefs()
 const [manual,setManual]=useState(false)
 const [stage,setStage]=useState('')
 const dialog=useRef<HTMLDialogElement>(null)
 const trigger=useRef<HTMLButtonElement>(null)
 const heading=useRef<HTMLHeadingElement>(null)
 const open=manual||(firstLaunch&&!prefs.setupComplete)
 const finish=(id:string|null)=>{setPhase(id);setManual(false);setStage('');dialog.current?.close?.();trigger.current?.focus()}
 const cancel=()=>{if(!prefs.setupComplete)finish(null);else{setManual(false);setStage('');dialog.current?.close?.();trigger.current?.focus()}}
 useEffect(()=>{
   const el=dialog.current
   if(!open||!el)return
   if(typeof el.showModal==='function'){if(!el.open)el.showModal()}else el.setAttribute('open','')
   heading.current?.focus({preventScroll:true})
   return ()=>{if(el.open&&typeof el.close==='function')el.close()}
 },[open])
 useEffect(()=>{if(open){if(dialog.current)dialog.current.scrollTop=0;heading.current?.focus({preventScroll:true})}},[stage,open])
 const current=timeline.find(p=>p.id===prefs.selectedPhaseId)
 return <>
 <button ref={trigger} type="button" className="phase-change" onClick={()=>{setStage('');setManual(true)}}>{current?'Change phase':prefs.setupComplete?'Choose phase':'Choose your phase'} <span aria-hidden="true">›</span></button>
 {open&&<dialog className="phase-dialog" ref={dialog} aria-labelledby="setup-title" aria-describedby="setup-description" onCancel={e=>{e.preventDefault();cancel()}}>
 <div className="sheet-handle" aria-hidden="true"/>
 <div className="sheet-header"><span className="section-label">Everwell</span><button className="plain-control" type="button" aria-label="Close setup" onClick={cancel}>×</button></div>
 <h2 ref={heading} tabIndex={-1} id="setup-title" className="page-title">{stage?'Choose your reading period':'Where are you in your journey?'}</h2>
 <p id="setup-description" className="muted">{stage?'Choose a reading period.':'Choose a reading focus. Change it anytime.'} {storageAvailable?'Saved on this device only.':'Browser storage is unavailable; this choice may reset after reload.'} Not a medical schedule.</p>
 {!stage?<div className="sheet-options">{stageChoices.map(s=><button type="button" className="choice-row" key={s.id} onClick={()=>setStage(s.id)}><Glyph name={s.icon}/><span><strong>{s.title}</strong><small>{s.subtitle}</small></span><span aria-hidden="true">›</span></button>)}</div>:<><button type="button" className="reader-back" onClick={()=>setStage('')}>‹ All stages</button><div className="sheet-options">{timeline.filter(p=>p.track===stage).map(p=><button type="button" className="choice-row" key={p.id} onClick={()=>finish(p.id)}><span className="choice-dot" aria-hidden="true"/><strong>{p.label}</strong><span aria-hidden="true">{p.id===prefs.selectedPhaseId?'✓':'›'}</span></button>)}</div></>}
 <button type="button" className="btn btn-ghost sheet-skip" onClick={()=>finish(null)}>Browse without a phase</button>
 </dialog>}
 </>
}
