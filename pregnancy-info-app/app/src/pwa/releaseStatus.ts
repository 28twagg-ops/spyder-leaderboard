/** Same-origin release marker; no personal data or telemetry. */
declare const __EVERWELL_BUILD__:string
export const BUILD_ID=typeof __EVERWELL_BUILD__==='string'?__EVERWELL_BUILD__:'development'
export type ReleaseStatus='idle'|'checking'|'current'|'updating'|'ready'|'offline'|'unverified'
export type ReleaseSnapshot={status:ReleaseStatus;remote:string|null}
let snapshot:ReleaseSnapshot={status:'idle',remote:null}
const listeners=new Set<()=>void>()
export function reportRelease(status:ReleaseStatus,remote:string|null=null){
 if(snapshot.status===status&&snapshot.remote===remote)return
 snapshot={status,remote};listeners.forEach(fn=>fn())
}
export const getReleaseSnapshot=()=>snapshot
export function subscribeRelease(fn:()=>void){listeners.add(fn);return ()=>{listeners.delete(fn)}}
export const UPDATE_EVENT='everwell:check-update'
export function requestAppUpdate(){window.dispatchEvent(new Event(UPDATE_EVENT))}
export async function fetchRelease(base:string):Promise<string>{
 const response=await fetch(base+'version.json?check='+Date.now(),{cache:'no-store',credentials:'same-origin',signal:AbortSignal.timeout(8000)})
 if(!response.ok)throw new Error('Release marker unavailable')
 const result:unknown=await response.json()
 if(!result||typeof result!=='object'||!('build' in result)||typeof result.build!=='string'||!result.build||result.build.length>100)throw new Error('Invalid release marker')
 return result.build
}
