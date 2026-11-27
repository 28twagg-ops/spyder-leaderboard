import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import { NavigationContext, type PrimaryTab } from './navigationContext'

interface Entry {depth:number;tab:PrimaryTab}
interface NavigationSnapshot {key:string;entry:Entry;entries:Map<string,Entry>}
function primary(path:string):PrimaryTab|undefined {
 if(path==='/')return '/'
 if(path==='/timeline'||path.startsWith('/timeline/'))return '/timeline'
 if(path==='/explore'||path.startsWith('/explore/'))return '/explore'
 if(path==='/library')return '/library'
}
function defaultTab(path:string):PrimaryTab{
 if(path.startsWith('/contraception'))return '/timeline'
 if(path.startsWith('/evidence')||path.startsWith('/visuals'))return '/explore'
 if(path.startsWith('/research'))return '/library'
 return '/'
}
function nextSnapshot(key:string,pathname:string,action:string,previous?:NavigationSnapshot):NavigationSnapshot{
 const known=previous?.entries.get(key)
 const depth=known?.depth??(action==='PUSH'&&previous?previous.entry.depth+1:action==='REPLACE'?(previous?.entry.depth??0):0)
 const contextualWeek=action==='PUSH'&&/^\/timeline\/week\/\d+\//.test(pathname)&&(previous?.entry.tab==='/library'||previous?.entry.tab==='/explore'||previous?.entry.tab==='/')?previous.entry.tab:undefined
 const tab=known?.tab??contextualWeek??primary(pathname)??(action==='POP'?defaultTab(pathname):previous?.entry.tab??defaultTab(pathname))
 const entry={depth,tab}
 const entries=new Map(previous?.entries)
 entries.set(key,entry)
 // Limit volatile history. Older entries degrade to safe fallback navigation.
 if(entries.size>256)entries.delete(entries.keys().next().value!)
 return {key,entry,entries}
}

/** React state drives the active tab and in-app history depth. Scroll refs are used only in effects and callbacks. */
export function NavigationMemoryProvider({children}:{children:ReactNode}){
 const {key,pathname}=useLocation()
 const action=useNavigationType()
 const [snapshot,setSnapshot]=useState(()=>nextSnapshot(key,pathname,action))
 let current=snapshot
 // Adjust state on a location change before children render; do not read mutable refs during render.
 if(snapshot.key!==key){
  current=nextSnapshot(key,pathname,action,snapshot)
  setSnapshot(current)
 }
 const positions=useRef(new Map<string,number>())
 const roots=useRef(new Map<string,number>())
 const getPosition=useCallback((entryKey:string,path:string,pop:boolean,rootReturn:boolean)=>{
  if(pop)return positions.current.get(entryKey)??0
  return rootReturn&&primary(path)===path?roots.current.get(path)??0:0
 },[])
 const clearPositions=useCallback(()=>{positions.current.clear();roots.current.clear()},[])
 useLayoutEffect(()=>{
  const onScroll=()=>{
   const top=Math.max(0,document.documentElement.scrollTop||document.body.scrollTop||0)
   positions.current.set(key,top)
   if(positions.current.size>256)positions.current.delete(positions.current.keys().next().value!)
   if(primary(pathname)===pathname)roots.current.set(pathname,top)
  }
  window.addEventListener('scroll',onScroll,{passive:true})
  return ()=>window.removeEventListener('scroll',onScroll)
 },[key,pathname])
 useEffect(()=>{
  if(!('scrollRestoration' in window.history))return
  const previous=window.history.scrollRestoration
  window.history.scrollRestoration='manual'
  return ()=>{window.history.scrollRestoration=previous}
 },[])
 return <NavigationContext.Provider value={{tab:current.entry.tab,canGoBack:current.entry.depth>0,getPosition,clearPositions}}>{children}</NavigationContext.Provider>
}
