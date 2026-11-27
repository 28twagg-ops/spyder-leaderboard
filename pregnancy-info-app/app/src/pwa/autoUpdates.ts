/** Automatic same-origin PWA updates. Never clear user preferences. */
import {UPDATE_EVENT,type ReleaseStatus} from './releaseStatus'
type Registration = {update():Promise<unknown>; active?:ServiceWorker|null; installing?:ServiceWorker|null; waiting?:ServiceWorker|null;addEventListener?(type:string,fn:EventListener):void;removeEventListener?(type:string,fn:EventListener):void}
type WorkerContainer = EventTarget & {readonly controller:object|null;register(scriptURL:string,options:RegistrationOptions):Promise<Registration>}
type UpdateEnvironment = {
 window:Window;document:Document;basePath?:string;online:()=>boolean;reload:()=>void
 visible?:()=>boolean;editing?:()=>boolean;now?:()=>number
 buildId?:string;readRelease?:()=>Promise<string>;report?:(status:ReleaseStatus,remote?:string|null)=>void
}
const CHECK_INTERVAL_MS=60*1000
const MIN_CHECK_GAP_MS=5000
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
 let lastController=worker.controller,lastActive:ServiceWorker|null|undefined
 let lastCheck=-Infinity
 let checking=false,stopped=false,pending=false,reloading=false
 let editTimer:number|undefined,settleTimer:number|undefined
 let remote:string|null=null
 const watched=new Set<ServiceWorker>()
 function report(status:ReleaseStatus){env.report?.(status,remote)}
 function reloadIfReady(){
  if(!pending||reloading||stopped)return false
  report('ready')
  if(!visible()||editing())return false
  reloading=true
  env.reload()
  return true
 }
 function onState(){
  if(stopped||!registration)return
  const active=registration.active
  if(active&&lastActive&&active!==lastActive&&active.state==='activated')pending=true
  if(active)lastActive=active
  // Some WebKit transitions omit a timely controllerchange. The newly
  // activated worker is an independent signal, after precache installation.
  reloadIfReady()
  if(registration.installing||registration.waiting)report('updating')
 }
 function watch(){
  if(!registration)return
  for(const w of [registration.installing,registration.waiting,registration.active]){
   if(!w||watched.has(w))continue
   watched.add(w);w.addEventListener('statechange',onState)
  }
  onState()
 }
 function settle(){
  if(stopped||reloading||!remote||remote===env.buildId)return
  watch()
  if(reloadIfReady()||registration?.installing||registration?.waiting)return
  // A stale HTML/JS shell can remain after the worker is already current.
  // One recovery reload per target build per session, never an infinite loop.
  if(!registration||!visible()||editing()){report('updating');return}
  try{
   const key='everwell.release-recovery'
   if(win.sessionStorage.getItem(key)===remote){report('unverified');return}
   win.sessionStorage.setItem(key,remote)
  }catch{report('unverified');return}
  pending=true;reloadIfReady()
 }
 async function check(force=false){
  if(stopped||reloadIfReady()||reloading||checking||!visible())return
  if(!env.online()){report('offline');return}
  if(!force&&now()-lastCheck<MIN_CHECK_GAP_MS)return
  checking=true;lastCheck=now();report('checking')
  try{
   if(!registration){
    registration=await worker.register(base+'sw.js',{scope:base,updateViaCache:'none'})
    lastActive=registration.active
    registration.addEventListener?.('updatefound',watch)
    watch()
   }
   // Do not let a missing release marker prevent the normal worker update.
   const marker=env.readRelease?.().catch(()=>null)
   if(!stopped)await registration.update()
   if(stopped)return
   watch()
   remote=marker?await marker:null
   if(stopped||reloading)return
   if(remote&&remote===env.buildId){report('current')}
   else if(remote){
    report('updating')
    if(settleTimer!==undefined)win.clearTimeout(settleTimer)
    settleTimer=win.setTimeout(()=>{settleTimer=undefined;settle()},3000)
   }else if(env.readRelease)report('unverified')
  }catch{report(env.online()?'unverified':'offline')}
  finally{checking=false}
 }
 function onControllerChange(){
  const controller=worker.controller
  if(!controller)return
  if(lastController&&lastController!==controller)pending=true
  lastController=controller
  reloadIfReady()
 }
 function onResume(){void check()}
 function onManual(){void check(true)}
 function afterEditing(){
  if(!pending||reloading||stopped)return
  if(editTimer!==undefined)win.clearTimeout(editTimer)
  editTimer=win.setTimeout(()=>{editTimer=undefined;reloadIfReady()},250)
 }
 worker.addEventListener('controllerchange',onControllerChange)
 win.addEventListener('focus',onResume)
 win.addEventListener('online',onResume)
 win.addEventListener('pageshow',onResume)
 win.addEventListener(UPDATE_EVENT,onManual)
 doc.addEventListener('visibilitychange',onResume)
 doc.addEventListener('focusout',afterEditing)
 doc.addEventListener('click',afterEditing)
 const interval=win.setInterval(onResume,CHECK_INTERVAL_MS)
 void check()
 return ()=>{
  stopped=true
  worker.removeEventListener('controllerchange',onControllerChange)
  registration?.removeEventListener?.('updatefound',watch)
  watched.forEach(w=>w.removeEventListener('statechange',onState))
  win.removeEventListener('focus',onResume);win.removeEventListener('online',onResume);win.removeEventListener('pageshow',onResume);win.removeEventListener(UPDATE_EVENT,onManual)
  doc.removeEventListener('visibilitychange',onResume);doc.removeEventListener('focusout',afterEditing);doc.removeEventListener('click',afterEditing)
  win.clearInterval(interval)
  if(editTimer!==undefined)win.clearTimeout(editTimer)
  if(settleTimer!==undefined)win.clearTimeout(settleTimer)
 }
}
