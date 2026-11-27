import { createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export type PrimaryTab='/'|'/timeline'|'/explore'|'/library'
export type NavigationContextValue={
 tab:PrimaryTab
 canGoBack:boolean
 getPosition:(key:string,pathname:string,pop:boolean,rootReturn:boolean)=>number
 clearPositions:()=>void
}
export const NavigationContext=createContext<NavigationContextValue|null>(null)
export function useNavigationMemory(){return useContext(NavigationContext)}
export function useAppBack(fallback:string){
 const memory=useNavigationMemory(),navigate=useNavigate()
 return ()=>{if(memory?.canGoBack)navigate(-1);else navigate(fallback,{replace:true})}
}
