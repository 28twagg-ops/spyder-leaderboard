/** Automatic same-origin PWA updates. Does not read, clear, send, or migrate user data. */
type Registration = {update():Promise<unknown>}
type WorkerContainer = EventTarget & {
 readonly controller:object|null
 register(scriptURL:string,options:RegistrationOptions):Promise<Registration>
}
type UpdateEnvironment = {
 window:Window
 document:Document
 basePath?:string
 online:()=>boolean
 reload:()=>void
 visible?:()=>boolean
 editing?:()=>boolean
 now?:()=>number
}
const CHECK_INTERVAL_MS=5*60*1000
const MIN_CHECK_GAP_MS=5000

/**
 * Check at launch, foreground return, reconnection, and periodically while visible.
 * Workbox installs the full new precache before activating. Reload only after a new
 * controller takes over; the first-ever worker claim does not reload the page.
 */
export function startAppUpdates(worker:WorkerContainer,env:UpdateEnvironment){
 const {window:win,document:doc}=env
 const base=env.basePath??'/'
 const visible=env.visible??(()=>doc.visibilityState==='visible')
 const editing=env.editing??(()=>{
  const active=doc.activeElement
  return !!doc.querySelector('form.date-editor')||
   (active instanceof HTMLElement&&(active.matches('input:not([type=button]):not([type=submit]),textarea,select')||active.isContentEditable))
 })
 const now=env.now??Date.now
 let registration:Registration|undefined
 let lastController=worker.controller
 let lastCheck=-Infinity
 let checking=false,stopped=false,pending=false,reloading=false
 let editTimer:number|undefined

 function reloadIfReady(){
  if(!pending||reloading||stopped||!visible()||editing())return false
  reloading=true
  env.reload()
  return true
 }
 async function check(){
  if(stopped||reloadIfReady()||reloading||checking||!visible()||!env.online()||now()-lastCheck<MIN_CHECK_GAP_MS)return
  checking=true
  lastCheck=now()
  try{
   // Same stable origin, same scope; bypass HTTP cache for the worker and imports.
   registration??=await worker.register(base+'sw.js',{scope:base,updateViaCache:'none'})
   if(!stopped)await registration.update()
  }catch{
   // Offline, auth expiry or an incomplete deployment must not break cached reading.
   // Retain the active worker and retry on the next eligible lifecycle event.
  }finally{checking=false}
 }
 function onControllerChange(){
  const controller=worker.controller
  if(!controller)return
  if(lastController&&lastController!==controller)pending=true
  lastController=controller
  reloadIfReady()
 }
 function onResume(){void check()}
 function afterEditing(){
  if(!pending||reloading||stopped)return
  // Allow the current form handler to commit local preferences before refreshing.
  if(editTimer!==undefined)win.clearTimeout(editTimer)
  editTimer=win.setTimeout(()=>{editTimer=undefined;reloadIfReady()},250)
 }
 worker.addEventListener('controllerchange',onControllerChange)
 win.addEventListener('focus',onResume)
 win.addEventListener('online',onResume)
 win.addEventListener('pageshow',onResume)
 doc.addEventListener('visibilitychange',onResume)
 doc.addEventListener('focusout',afterEditing)
 doc.addEventListener('click',afterEditing)
 const interval=win.setInterval(onResume,CHECK_INTERVAL_MS)
 void check()
 return ()=>{
  stopped=true
  worker.removeEventListener('controllerchange',onControllerChange)
  win.removeEventListener('focus',onResume)
  win.removeEventListener('online',onResume)
  win.removeEventListener('pageshow',onResume)
  doc.removeEventListener('visibilitychange',onResume)
  doc.removeEventListener('focusout',afterEditing)
  doc.removeEventListener('click',afterEditing)
  win.clearInterval(interval)
  if(editTimer!==undefined)win.clearTimeout(editTimer)
 }
}
