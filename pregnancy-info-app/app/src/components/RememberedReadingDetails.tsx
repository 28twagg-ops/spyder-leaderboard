import type { ReactNode } from 'react'
import { useViewState } from '../hooks/useViewMemory'

/** Reading position is volatile. Native summary still supports keyboard activation. */
export function RememberedReadingDetails({articleId,children}:{articleId:string;children:ReactNode}){
 const [expanded,setExpanded]=useViewState('reader.'+articleId+'.understand',false)
 return <details className="panel disclosure reader-understand" id="understand-more" open={expanded} onToggle={event=>{
  // Native disclosure updates synchronously; ignore redundant events from rehydration.
  const next=event.currentTarget.open
  if(next!==expanded)setExpanded(next)
 }}>
  <summary onClick={event=>{event.preventDefault();setExpanded(value=>!value)}}><span><strong>Understand more</strong><small>How it works, what studies found and what is still uncertain.</small></span></summary>
  {children}
 </details>
}
