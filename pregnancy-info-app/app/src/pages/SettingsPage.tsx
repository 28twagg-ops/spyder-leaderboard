import { useState } from 'react'
import { ScreenHeading, FeatureCard } from '../components/ReadingUI'
import { PhasePicker } from '../components/PhasePicker'
import { timeline } from '../data/researchCatalog'
import { ThemePicker } from '../components/ThemePicker'
import { OfflineBanner } from '../components/OfflineBanner'
import { useLocalPrefs } from '../hooks/useLocalPrefs'
import { catalogStats, routines } from '../data/researchCatalog'
import { DEFAULT_PUBLICATION_BLOCK, EXCLUDED_SOURCE_IDS, HELD_SOURCE_OR_OUTCOME_IDS } from '../data/researchGate'
export function SettingsPage({onClear}:{onClear:()=>void}){
 const {prefs,setTheme,clearPrefs,exportPrefs,storageAvailable}=useLocalPrefs()
 const [showExport,setShowExport]=useState(false)
 const [confirmClear,setConfirmClear]=useState(false)
 const stats=catalogStats()
 return <div className="stack-lg">
 <ScreenHeading title="Settings" subtitle="Make Everwell your own." back="/" backLabel="Home"/>
 <section className="panel stack"><h2 className="section-title">Your reading phase</h2><p className="muted">{timeline.find(p=>p.id===prefs.selectedPhaseId)?.label??"No phase selected"}</p><PhasePicker/></section>
 <details className="panel disclosure"><summary>Appearance</summary><ThemePicker value={prefs.themeId} onChange={setTheme}/></details>
 <section className="panel stack" aria-labelledby="local-prefs-heading"><h2 id="local-prefs-heading" className="section-title">Privacy &amp; preferences</h2><p className="muted">Reading choices, bookmarks, reading markers and theme are stored locally, not encrypted. They may reveal interests to someone with access to this browser. No medical record, cloud sync or analytics is added by this feature. Search text, filter choices, open reading sections and recent navigation positions are kept only in memory until the app reloads or preferences are cleared.</p>{!storageAvailable&&<p role="status" className="muted">Browser storage is unavailable. Changes may last only until reload; persistent removal cannot be confirmed.</p>}<button className="btn btn-ghost" onClick={()=>setShowExport(!showExport)}>{showExport?'Hide export':'Show local preference export'}</button>{showExport&&<><label htmlFor="prefs-export">Preference JSON (copy only if you want to keep it)</label><textarea id="prefs-export" readOnly value={exportPrefs()} rows={8}/></>}{!confirmClear?<button className="btn btn-ghost" onClick={()=>setConfirmClear(true)}>Clear local preferences</button>:<><p>Remove saved articles, reading markers, phase and theme choice from this browser?</p><button className="btn btn-ghost" onClick={()=>{clearPrefs();onClear();setConfirmClear(false);setShowExport(false)}}>Confirm clear</button><button className="btn btn-ghost" onClick={()=>setConfirmClear(false)}>Cancel</button></>}</section>
 <FeatureCard to="/install" title="Add to Home Screen" subtitle="Installation & offline help" icon="phone"/>
 <details className="panel disclosure"><summary>Research inventory &amp; review status</summary><p>{stats.articles} articles · {stats.actions} actions · {stats.faqs} FAQs · {stats.phases} phases · {stats.gestationalWeeks} weeks · {stats.sourceLinks} source links · {stats.routines} routines. {stats.inventory.source_records??'—'} source records, not independent studies.</p><p>{DEFAULT_PUBLICATION_BLOCK}</p><p>Exclusions: {[...EXCLUDED_SOURCE_IDS].join(', ')||'none'}. Held source/outcome IDs: {HELD_SOURCE_OR_OUTCOME_IDS.size}.</p><OfflineBanner/></details>
 <details className="panel disclosure"><summary>Optional routines (draft)</summary><p>No streaks, automatic schedules or health scores.</p><ul className="list-clean">{routines.map(r=><li key={r.id}><strong>{r.title}</strong><p>{r.note}</p></li>)}</ul></details>
 </div>
}
