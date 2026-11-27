import {afterEach,describe,expect,it,vi} from 'vitest'
import {startAppUpdates} from './autoUpdates'

class Worker extends EventTarget{
 controller:object|null=null
 update=vi.fn(async()=>undefined)
 register=vi.fn(async(_url:string,_options:RegistrationOptions)=>({update:this.update}))
 change(controller:object){this.controller=controller;this.dispatchEvent(new Event('controllerchange'))}
}
const flush=async()=>{await Promise.resolve();await Promise.resolve();await Promise.resolve()}
let stop:(()=>void)|undefined
afterEach(()=>{stop?.();stop=undefined;vi.useRealTimers();vi.restoreAllMocks();localStorage.clear()})
function setup(worker=new Worker()){
 const state={online:true,visible:true,editing:false,now:0}
 const reload=vi.fn()
 stop=startAppUpdates(worker,{window,document,online:()=>state.online,visible:()=>state.visible,editing:()=>state.editing,now:()=>state.now,reload})
 return {worker,state,reload}
}
describe('installed app automatic updates',()=>{
 it('registers the stable worker without HTTP cache and checks on launch',async()=>{
  const {worker}=setup()
  await flush()
  expect(worker.register).toHaveBeenCalledExactlyOnceWith('/sw.js',{scope:'/',updateViaCache:'none'})
  expect(worker.update).toHaveBeenCalledTimes(1)
 })
 it('scopes the Pages service worker to Everwell only',async()=>{
  const worker=new Worker()
  stop=startAppUpdates(worker,{window,document,basePath:'/spyder-leaderboard/everwell/',online:()=>true,visible:()=>true,reload:vi.fn()})
  await flush()
  expect(worker.register).toHaveBeenCalledExactlyOnceWith('/spyder-leaderboard/everwell/sw.js',{scope:'/spyder-leaderboard/everwell/',updateViaCache:'none'})
 })
 it('checks again on foreground and connection return without duplicate requests',async()=>{
  const {worker,state}=setup()
  await flush()
  state.now=6000
  window.dispatchEvent(new Event('focus'))
  document.dispatchEvent(new Event('visibilitychange'))
  await flush()
  expect(worker.update).toHaveBeenCalledTimes(2)
  state.online=false;state.now=12000
  window.dispatchEvent(new Event('focus'))
  await flush()
  expect(worker.update).toHaveBeenCalledTimes(2)
  state.online=true
  window.dispatchEvent(new Event('online'))
  await flush()
  expect(worker.update).toHaveBeenCalledTimes(3)
 })
 it('does not reload for first install but reloads once when a new version takes control',async()=>{
  localStorage.setItem('everwell.local.prefs.v1','{"pregnancyDueDate":"2027-03-30","bookmarks":["EV-ART-001"]}')
  const {worker,reload}=setup()
  await flush()
  worker.change({})
  expect(reload).not.toHaveBeenCalled()
  const next={}
  worker.change(next)
  worker.change(next)
  expect(reload).toHaveBeenCalledTimes(1)
  expect(localStorage.getItem('everwell.local.prefs.v1')).toBe('{"pregnancyDueDate":"2027-03-30","bookmarks":["EV-ART-001"]}')
 })
 it('defers refresh while hidden or editing until safe to reload',async()=>{
  vi.useFakeTimers()
  const worker=new Worker();worker.controller={}
  const {state,reload}=setup(worker)
  await flush()
  state.visible=false
  worker.change({})
  expect(reload).not.toHaveBeenCalled()
  state.visible=true;state.editing=true
  document.dispatchEvent(new Event('visibilitychange'))
  expect(reload).not.toHaveBeenCalled()
  state.editing=false
  document.dispatchEvent(new Event('focusout'))
  await vi.advanceTimersByTimeAsync(250)
  expect(reload).toHaveBeenCalledTimes(1)
 })
 it('retains the working app when a check fails, then retries on resume',async()=>{
  const worker=new Worker();worker.update.mockRejectedValueOnce(new Error('offline'))
  const {state,reload}=setup(worker)
  await flush()
  expect(reload).not.toHaveBeenCalled()
  state.now=6000
  window.dispatchEvent(new Event('pageshow'))
  await flush()
  expect(worker.update).toHaveBeenCalledTimes(2)
 })
})
