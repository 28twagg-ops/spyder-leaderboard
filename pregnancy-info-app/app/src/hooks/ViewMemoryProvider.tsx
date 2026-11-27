import { useState, type ReactNode } from 'react'
import { ViewMemory, type Values } from './useViewMemory'

/** Volatile view state only. Never writes searches, filters, or scroll history to persistent storage. */
export function ViewMemoryProvider({children}:{children:ReactNode}){
 const [values,setValues]=useState<Values>({})
 return <ViewMemory.Provider value={{values,setValues}}>{children}</ViewMemory.Provider>
}
