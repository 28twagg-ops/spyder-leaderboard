import {useSyncExternalStore} from 'react'
import {BUILD_ID,getReleaseSnapshot,subscribeRelease,requestAppUpdate} from '../pwa/releaseStatus'
const labels={idle:'Not checked yet',checking:'Checking for the latest version…',current:'Up to date',updating:'New version detected; installing…',ready:'Update ready; refresh after editing',offline:'Offline · using saved version',unverified:'Could not verify the latest version'}
export function AppUpdateStatus({compact=false}:{compact?:boolean}){
 const {status,remote}=useSyncExternalStore(subscribeRelease,getReleaseSnapshot,getReleaseSnapshot)
 if(compact)return <div className="app-release-small"><span>Build {BUILD_ID.slice(0,8)}</span><span role="status">{labels[status]}</span></div>
 return <section className="panel stack" aria-label="App updates"><h2 className="section-title">App updates</h2><div className="app-release-detail"><span>Installed build</span><strong>{BUILD_ID.slice(0,8)}</strong></div>{remote&&<div className="app-release-detail"><span>Latest published build</span><strong>{remote.slice(0,8)}</strong></div>}<p role="status" className="small-copy muted">{labels[status]}</p><button type="button" className="btn" onClick={requestAppUpdate} disabled={status==='checking'}>Check for updates</button><p className="small-copy muted">Checks happen automatically on open, foreground return and while reading online. Updates keep your saved preferences. If the installed icon is from a different address, use the GitHub Pages installation link in Add to Home Screen.</p></section>
}
