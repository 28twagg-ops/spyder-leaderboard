import { useLayoutEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import { useNavigationMemory } from '../hooks/navigationContext'

/** Inside Suspense: restore after the destination has mounted, including lazy routes. */
export function RoutePosition(){
 const {key,pathname,hash,state}=useLocation()
 const action=useNavigationType()
 const getPosition=useNavigationMemory()?.getPosition
 const rootReturn=state?.everwellTabReturn===true
 useLayoutEffect(()=>{
  if(hash){
   let id=hash.slice(1)
   try{id=decodeURIComponent(id)}catch{/* use literal ID */}
   const target=document.getElementById(id)
   if(target instanceof HTMLDetailsElement)target.open=true
   let parent=target?.parentElement
   while(parent){if(parent instanceof HTMLDetailsElement)parent.open=true;parent=parent.parentElement}
   target?.scrollIntoView?.({block:'start'})
   if(id==='main')target?.focus({preventScroll:true})
   return
  }
  const y=getPosition?.(key,pathname,action==='POP',rootReturn)??0
  document.documentElement.scrollTop=y
  document.body.scrollTop=y
  if(action!=='POP'&&!document.querySelector('dialog[open]'))document.getElementById('main')?.focus({preventScroll:true})
  if(typeof requestAnimationFrame!=='function')return
  const frame=requestAnimationFrame(()=>{
   const current=document.documentElement.scrollTop||document.body.scrollTop||0
   if(current===0&&y>0){document.documentElement.scrollTop=y;document.body.scrollTop=y}
  })
  return ()=>cancelAnimationFrame(frame)
 },[key,pathname,hash,action,rootReturn,getPosition])
 return null
}
