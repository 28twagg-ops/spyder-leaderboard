import { ScreenHeading, ReadingRow } from '../components/ReadingUI'
import { UrgentSigns } from '../components/UrgentSigns'
import { urgentArticles } from '../data/researchCatalog'
export function UrgentPage(){return <div className="stack-lg"><ScreenHeading title="Urgent signs & getting help" back="/" backLabel="Back" historyBack/><p className="muted">For an emergency, call your local emergency services. Everwell cannot triage emergencies; this list is not exhaustive.</p><UrgentSigns/><section className="stack"><h2 className="section-title">Safety topics</h2><div className="surface-list">{urgentArticles().map(a=><ReadingRow key={a.id} to={`/research/${a.id}`} title={a.title}/>)}</div></section></div>}
