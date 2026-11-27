import { createContext, useContext, useLayoutEffect, useEffect, useRef, type ReactNode } from 'react'
import { useLocation, useNavigate, useNavigationType } from 'react-router-dom'
export type PrimaryTab='/'|'/timeline'|'/explore'|'/library'
interface Entry {depth:number;tab:PrimaryTab;scroll:number}
function primary(path:string):PrimaryTab|undefined {
 if(path==='/')return '/'
 if(path==='/timeline'||path.startsWith('/timeline/'))return '/timeline'
 if(path==='/explore'||path.startsWith('/explore/'))return '/explore'
 if(path==='/library')return '/library'
}
function defaultTab(path:string):PrimaryTab{
 if(path.startsWith('/evidence')||path.startsWith('/visuals'))return '/explore'
 if(path.startsWith('/research'))return '/library'
 return '/'
}
const Context=createContext<{tab:PrimaryTab;canGoBack:boolean;position:number;clearPositions:()=>void;recordPosition:(top:number)=>void}|null>(null)

/** In-memory history only, including per-entry scroll and the origin tab of secondary screens. */
export function NavigationMemoryProvider({children}:{children:ReactNode}){
 const location=useLocation(), action=useNavigationType()
 const {key,pathname}=location
 const entries=useRef(new Map<string,Entry>())
 const roots=useRef(new Map<string,number>())
 const last=useRef<Entry|null>(null)
 const known=entries.current.get(key)
 const depth=known?.depth??(action==='PUSH'&&last.current?last.current.depth+1:action==='REPLACE'?(last.current?.depth??0):0)
 const tab=primary(pathname)??known?.tab??(action==='POP'?defaultTab(pathname):last.current?.tab??defaultTab(pathname))
 const rootReturn=location.state?.everwellTabReturn===true&&primary(pathname)===pathname
 const position=action==='POP'?(known?.scroll??0):rootReturn?(roots.current.get(pathname)??0):0
 const recordPosition=(top:number)=>{
  const entry=entries.current.get(key)
  if(entry)entry.scroll=Math.max(0,top)
  if(primary(pathname)===pathname)roots.current.set(pathname,Math.max(0,top))
 }
 useLayoutEffect(()=>{
  const entry:Entry={depth,tab,scroll:known?.scroll??position}
  entries.current.set(key,entry)
  last.current=entry
  const onScroll=()=>recordPosition(document.documentElement.scrollTop||document.body.scrollTop||0)
  window.addEventListener('scroll',onScroll,{passive:true})
  return ()=>window.removeEventListener('scroll',onScroll)
 // A location entry is registered exactly once per navigation, not on every view-state change.
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[key,pathname])
 useEffect(()=>{
  if(!('scrollRestoration' in window.history))return
  const previous=window.history.scrollRestoration
  window.history.scrollRestoration='manual'
  return ()=>{window.history.scrollRestoration=previous}
 },[])
 const clearPositions=()=>{roots.current.clear();for(const entry of entries.current.values())entry.scroll=0}
 return <Context.Provider value={{tab,canGoBack:depth>0,position,clearPositions,recordPosition}}>{children}</Context.Provider>
}
export function useNavigationMemory(){return useContext(Context)}
export function useAppBack(fallback:string){
 const memory=useContext(Context), navigate=useNavigate()
 return ()=>{if(memory?.canGoBack)navigate(-1);else navigate(fallback,{replace:true})}
}

/** Mounted inside Suspense so a lazy route has committed before restoring position. */
export function RoutePosition(){
 const {key,pathname,hash}=useLocation()
 const action=useNavigationType()
 const memory=useNavigationMemory()
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
  const y=memory?.position??0
  document.documentElement.scrollTop=y
  document.body.scrollTop=y
  if(action!=='POP')document.getElementById('main')?.focus({preventScroll:true})
  // Restore once more after layout; avoid delayed restoration if the user has already scrolled.
  const frame=requestAnimationFrame(()=>{
   const current=document.documentElement.scrollTop||document.body.scrollTop||0
   if(current===0&&y>0){document.documentElement.scrollTop=y;document.body.scrollTop=y}
  })
  return ()=>cancelAnimationFrame(frame)
 // View state changes must not reset scroll.
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[key,pathname,hash,action])
 return null
}
