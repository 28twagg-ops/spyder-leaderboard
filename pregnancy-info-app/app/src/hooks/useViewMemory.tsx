import { createContext, useContext, useState, type Dispatch, type SetStateAction } from 'react'

export type Values = Record<string, unknown>
export const ViewMemory = createContext<{values:Values;setValues:Dispatch<SetStateAction<Values>>}|null>(null)

export function useViewState<T>(key:string, initial:T):[T,Dispatch<SetStateAction<T>>]{
 const context=useContext(ViewMemory)
 const [local,setLocal]=useState(initial)
 if(!context)return [local,setLocal]
 const value=(Object.hasOwn(context.values,key)?context.values[key]:initial) as T
 return [value,next=>context.setValues(old=>{
  const previous=(Object.hasOwn(old,key)?old[key]:initial) as T
  return {...old,[key]:typeof next==='function'?(next as (value:T)=>T)(previous):next}
 })]
}
export function useClearViewMemory(){
 const context=useContext(ViewMemory)
 return ()=>context?.setValues({})
}
